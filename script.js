// 사용법 안내 가이드 레이아웃 정의
const manualHTML = `
    <div style="font-size: 14.5px; color: #444; text-align: left; line-height: 1.6;">
        <h3 style="margin-top: 0; color: #5c6bc0; font-size: 18px; border-bottom: 2px solid #5c6bc0; padding-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            💡 족보 검색기 간편 사용법
        </h3>
        <ol style="padding-left: 20px; margin: 12px 0 15px 0;">
            <li style="margin-bottom: 10px;">
                <strong>일반 한자 검색:</strong>
                왼쪽 캔버스에 한자를 온전하게 그리면, AI가 분석한 한자 중 족보에 들어있는 글자만
                <span style="background:#fff9c4; padding:2px 6px; border-radius:6px; border:1px solid #fbc02d; font-size:12.5px; color:#d32f2f; font-weight:bold;">황색 족보 한자 버튼</span>으로 왼쪽 창에 즉시 뜹니다.
            </li>
            <li style="margin-bottom: 10px;">
                <strong>부수 및 형태소 검색 (강력 추천):</strong>
                너무 복잡해서 쓰기 힘든 한자는 <strong>부수(예: 氵, 彳, 艹, 卄)</strong>나 한자 속의 <strong>특정 부품 조각(예: 豈, 豆 등)</strong>만 대충 그리셔도 됩니다!
            </li>
            <li style="margin-bottom: 10px;">
                <strong>부수 추천 기능 연동:</strong>
                캔버스에 부수를 그리면 왼쪽 AI 결과창에 해당 부수 기호가 나타납니다.
                그 <strong>부수 버튼을 가볍게 클릭</strong>하면, 우측 <strong>[📝 부수 추천 기능]</strong> 영역에 해당 부수를 공유하는 모든 족보 수록 글자가
                <span style="border:1px solid #9fa8da; padding:2px 6px; border-radius:6px; background:#f8f9ff; font-size:12.5px; color:#3f51b5; font-weight:bold;">청색 부수 한자 버튼</span>으로 자동 선별되어 나타납니다.
            </li>
        </ol>
        <p style="margin-bottom: 0; font-weight: bold; color: #d32f2f; font-size: 12.5px; text-align: center; background: #fff8f8; padding: 6px; border-radius: 6px; border: 1px dashed #ffcdd2;">
            ※ 좌측 하단의 '지우기' 버튼을 누르면 언제든지 이 사용 설명서를 다시 읽을 수 있습니다.
        </p>
    </div>
`;

// 자소 분리 맵 추출 가동
const radicalMap = {};
for (const [rad, chars] of Object.entries(partToHanja)) {
    for (const char of chars) {
        if (!radicalMap[char]) radicalMap[char] = rad;
    }
}

const jokboData = [];
const uniqueQnA = new Map();

rawQA.forEach(item => {
    const key = item.q.trim();
    if(!uniqueQnA.has(key)) uniqueQnA.set(key, item);
});

const hanjaRegex = /[\u4E00-\u9FFF]/g;
uniqueQnA.forEach((item) => {
    const hanjas = item.q.match(hanjaRegex) || [];
    const uniqueHanjas = [...new Set(hanjas)];
    uniqueHanjas.forEach(char => {
        jokboData.push({
            hanja: char,
            question: item.q,
            answer: item.a,
            radical: radicalMap[char] || char
        });
    });
});

let canvas, ctx, isDrawing = false;
let strokes = [];
let currentX = [];
let currentY = [];
let searchTimeout = null;

window.addEventListener('load', () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#222";

    document.getElementById("result").innerHTML = manualHTML;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    canvas.addEventListener("touchstart", startDrawing, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchcancel", stopDrawing);
});

function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if (e.type.includes('touch')) {
        if (!e.touches || e.touches.length === 0) return null;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}

function startDrawing(e) {
    if (e.type.includes('touch')) e.preventDefault();
    const pos = getCoordinates(e);
    if (!pos) return;

    isDrawing = true;
    currentX = [pos.x];
    currentY = [pos.y];

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}

function draw(e) {
    if (!isDrawing) return;
    if (e.type.includes('touch')) e.preventDefault();
    const pos = getCoordinates(e);
    if (!pos || isNaN(pos.x) || isNaN(pos.y)) return;

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    currentX.push(pos.x);
    currentY.push(pos.y);
}

function stopDrawing(e) {
    if (!isDrawing) return;
    isDrawing = false;
    ctx.closePath();

    if (currentX.length > 0) {
        strokes.push([currentX, currentY, []]);
        currentX = [];
        currentY = [];

        document.getElementById("rightButtons").innerHTML = '<div class="loading">AI가 형태를 판독 중입니다...</div>';

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(searchSmart, 800);
    }
}

async function searchSmart() {
    if (strokes.length === 0) return;

    const leftButtons = document.getElementById("leftButtons");
    leftButtons.innerHTML = '<div class="loading">구글 AI가 인식 중입니다...</div>';

    const url = "https://inputtools.google.com/request?itc=zh-hant-t-i0-handwrit&app=demopage";
    const payload = {
        app_version: 0.4,
        api_level: "537.36",
        device: navigator.userAgent,
        input_type: "0",
        options: "enable_pre_space",
        requests: [{
            writing_guide: { writing_area_width: canvas.width, writing_area_height: canvas.height },
            pre_context: "",
            max_num_results: 15,
            max_completions: 0,
            language: "zh-Hant",
            ink: strokes
        }]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();

        if (data[0] === "SUCCESS") {
            leftButtons.innerHTML = "";
            const predictions = data[1][0][1];

            const hanjaRegex = /[\u2E80-\u2EFF\u31C0-\u31EF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/;
            const validHanjas = [];

            predictions.forEach(str => {
                if (typeof str === 'string') {
                    for (let i = 0; i < str.length; i++) {
                        const char = str[i];
                        if (hanjaRegex.test(char)) {
                            validHanjas.push(char);
                            break;
                        }
                    }
                }
            });

            const filteredPredictions = [...new Set(validHanjas)];

            const matchedPredictions = filteredPredictions.filter(char => {
                const inJokbo = jokboData.some(item => item.hanja === char);
                const isPartKey = partToHanja.hasOwnProperty(char);
                const isRadicalGroupChar = radicalGroups.some(group => group.includes(char));

                return inJokbo || isPartKey || isRadicalGroupChar;
            });

            matchedPredictions.forEach(char => {
                const isMatchedInJokbo = jokboData.some(item => item.hanja === char);
                addHanjaButton(char, leftButtons, isMatchedInJokbo, false);
            });

            if(matchedPredictions.length === 0) {
                leftButtons.innerHTML = '<div class="loading">인식된 한자가 없습니다.</div>';
            }

            renderRadicalSuggestions(filteredPredictions);
        }
    } catch (err) {
        console.error("API 호출 에러:", err);
        leftButtons.innerHTML = '<div class="loading" style="color:red;">네트워크 에러가 발생했습니다.</div>';
    }
}

function renderRadicalSuggestions(aiPredictions = []) {
    const rightButtons = document.getElementById("rightButtons");
    rightButtons.innerHTML = "";

    let matchedItems = new Set();

    jokboData.forEach(item => {
        aiPredictions.forEach(predChar => {
            if (predChar === item.radical) {
                matchedItems.add(item.hanja);
            } else {
                for (const group of radicalGroups) {
                    if (group.includes(predChar) && group.includes(item.radical)) {
                        matchedItems.add(item.hanja);
                        break;
                    }
                }
            }
        });
    });

    aiPredictions.forEach(predChar => {
        let searchKeys = [predChar];
        for (const group of radicalGroups) {
            if (group.includes(predChar)) {
                searchKeys = group;
                break;
            }
        }

        searchKeys.forEach(key => {
            const matchingChars = partToHanja[key];
            if (matchingChars) {
                for (let i = 0; i < matchingChars.length; i++) {
                    const targetChar = matchingChars[i];
                    if (jokboData.some(item => item.hanja === targetChar)) {
                        matchedItems.add(targetChar);
                    }
                }
            }
        });
    });

    if (matchedItems.size === 0) {
        rightButtons.innerHTML = '<div class="loading">현재 그리신 형태와 일치하는 부수/한자가 없습니다.</div>';
        return;
    }

    matchedItems.forEach(char => {
        addHanjaButton(char, rightButtons, false, true);
    });
}

function addHanjaButton(char, container, isHighlight = false, isRadical = false) {
    if (!container || [...container.children].some(btn => btn.innerText === char)) return;

    const btn = document.createElement("button");
    btn.className = "hanja-btn";
    if (isHighlight) btn.classList.add("highlight");
    if (isRadical) btn.classList.add("radical-btn");

    btn.innerText = char;

    if(isHighlight) {
        container.prepend(btn);
    } else {
        container.appendChild(btn);
    }

    btn.onclick = () => {
        showFinalResult(char);
        if (!isRadical) {
            renderRadicalSuggestions([char]);
        }
    };
}

function showFinalResult(char) {
    const matches = jokboData.filter(item => item.hanja === char);
    const resultDiv = document.getElementById("result");

    if (matches.length > 0) {
        let html = `<b style="font-size: 24px; color: #5c6bc0;">${char}</b><br><hr style="border:0; border-top:1px solid #eee; margin:10px 0;">`;
        matches.forEach((item, idx) => {
            // 개별 문제 카드(result-item) 자체에 클릭 이벤트와 copyable-answer 스타일 적용
            html += `<div class="result-item copyable-answer" 
                          onclick="copyToClipboard('${item.answer.replace(/'/g, "\\'")}')" 
                          title="클릭하면 정답이 복사됩니다" 
                          style="margin-bottom: 15px; padding: 10px; border-radius: 8px; border: 1px solid #eef; background: #fafbfe; transition: background 0.2s; cursor: pointer;">
                        <div style="margin-bottom: 6px; text-align: left;">
                            <b>Q${idx+1}.</b> <span style="font-weight: 500;">${item.question}</span>
                        </div>
                        <div style="color: #d32f2f; font-weight: bold; text-align: left;">
                            👉 정답: <span>${item.answer}</span>
                        </div>
                     </div>`;
        });
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = `<b>${char}</b> 한자는 족보 질문 데이터에 직접 포함되어 있지 않은 한자입니다. <br><span style="font-size: 13px; color: #666;">하단 '부수 추천 기능'을 확인해 보세요!</span>`;
    }
}

window.copyToClipboard = function(text, showToastFlag = true) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            if (showToastFlag) showToast("복사 완료! 👍");
        }).catch(err => {
            fallbackCopyText(text, showToastFlag);
        });
    } else {
        fallbackCopyText(text, showToastFlag);
    }
};

function fallbackCopyText(text, showToastFlag) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        if (showToastFlag) showToast("복사 완료! 👍");
    } catch (err) {
        console.error('클립보드 복사 실패:', err);
    }
    document.body.removeChild(textArea);
}

function showToast(message = "복사 완료! 👍") {
    const toast = document.getElementById("resultToast");
    toast.innerText = message;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 1500);
}

window.clearAll = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes = [];
    document.getElementById("leftButtons").innerHTML = '<div class="loading">캔버스에 한자나 부수를 써보세요.</div>';
    document.getElementById("rightButtons").innerHTML = '<div class="loading">여기에 부수 기반 추천 한자가 뜹니다.</div>';
    document.getElementById("result").innerHTML = manualHTML;
};