(function() {
    let canvas, ctx, drawing = false;
    let strokes = [];
    let currentStroke = [];

    /**
     * 1. 표준 부수 지도 (정석 획수 기반)
     */
    const radicalMap = {
        "宀": 3, "氵": 3, "广": 3, "忄": 3, "亻": 2, "糸": 6,
        "言": 7, "木": 4, "羊": 6, "甘": 5, "心": 4, "攵": 4,
        "大": 3, "日": 4, "田": 5, "土": 3, "臼": 6, "艹": 3,
        "門": 8, "目": 5, "羽": 6, "釆": 7, "辶": 3, "玉": 4,
        "亠": 2, "方": 4, "邑": 3, "竹": 6, "車": 7, "食": 9,
        "𢎤": 6, "米": 6, "口": 3,"⻖": 3,  // 좌부변 (降, 陽, 陋, 阿의 왼쪽 변 3획)
        "⻎": 3,  // 우부방 (那의 오른쪽 방 3획)
        "⺼": 4   // 육달월 (肋, 腹의 왼쪽 달월 모양 4획)
    };

    /**
     * 2. 사용자 습관 보정 트리거
     */
    const customTriggers = [
        { hanja: "番", counts: [4, 7] },
        { hanja: "舊", counts: [3, 6] },
        { hanja: "翠", counts: [6] },
        { hanja: "地", counts: [3, 6] },
        { hanja: "江", counts: [3, 6] },
        { hanja: "相", counts: [4] },
        { hanja: "昏", counts: [7, 8] },
        { hanja: "制", counts: [6, 8] },
        { hanja: "亞", counts: [4, 8] },
        { hanja: "敎", counts: [7, 11] },
        { hanja: "和", counts: [5, 8] }
    ];

    window.addEventListener('load', () => {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#000";

        canvas.addEventListener("mousedown", start);
        canvas.addEventListener("mousemove", move);
        window.addEventListener("mouseup", end);

        canvas.addEventListener("touchstart", (e) => { e.preventDefault(); start(e.touches[0]); });
        canvas.addEventListener("touchmove", (e) => { e.preventDefault(); move(e.touches[0]); });
        canvas.addEventListener("touchend", end);

        try {
            hanzilookup.init("mobi", "hanja_data.json");
        } catch(e) {
            console.error("엔진 초기화 실패, 하지만 검색은 계속 작동합니다.", e);
        }
    });

    function start(e) {
        drawing = true;
        currentStroke = [];
        const rect = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }

    function move(e) {
        if (!drawing) return;
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
        currentStroke.push({x: e.clientX - rect.left, y: e.clientY - rect.top});
    }

    function end() {
        if (!drawing) return;
        drawing = false;
        if (currentStroke.length > 2) {
            strokes.push(currentStroke);
            searchSmart();
        }
    }

    function searchSmart() {
        const userCount = strokes.length;
        const leftButtons = document.getElementById("leftButtons");
        const rightButtons = document.getElementById("rightButtons");

        if (leftButtons) leftButtons.innerHTML = "";
        if (rightButtons) rightButtons.innerHTML = "";

        // 1. [우측 추천창] 부수별로 이쁘게 모아서 한 칸에 출력
        try {
            renderRightWindowSorted(userCount, rightButtons);
        } catch (err) {
            console.error("우측 추천창 에러 발생:", err);
        }

        // 2. [좌측] 일반 매칭 (엔진 인식 기반)
        try {
            hanzilookup.recognize(new Array(userCount), 40, (results) => {
                try {
                    if (results && leftButtons) {
                        results.forEach(res => {
                            if (!res || !res.character) return;
                            const matchedItem = jokboData.find(item => item.hanja === res.character);
                            if (matchedItem && matchedItem.stroke < 9) {
                                addHanjaButton(res.character, leftButtons);
                            }
                        });
                    }
                } catch(e) { console.error("좌측 엔진 결과 매칭 실패", e); }

                // 8획 이하 완필 최우선 보정
                try {
                    if (leftButtons) {
                        jokboData.forEach(item => {
                            if (item.stroke <= 8 && item.stroke === userCount) {
                                addHanjaButton(item.hanja, leftButtons);
                            }
                        });
                        jokboData.forEach(item => {
                            const diff = item.stroke - userCount;
                            if (item.stroke <= 8 && diff === 1) {
                                addHanjaButton(item.hanja, leftButtons);
                            }
                        });
                    }
                } catch(e) { console.error("좌측 강제 보정 실패", e); }
            });
        } catch (err) {
            console.error("한자 인식 엔진 실행 실패", err);
        }
    }

    /**
     * 💡 [수정] 줄바꿈 없이 같은 부수끼리 순서대로 밀어넣는 정렬 함수
     */
    function renderRightWindowSorted(userCount, container) {
        if (!container) return;

        // 조건에 맞는 한자 필터링
        const matchedItems = jokboData.filter(item => {
            const isRadicalMatch = radicalMap[item.radical] === userCount;
            const isCustomMatch = customTriggers.some(t =>
                t.hanja === item.hanja && t.counts.includes(userCount)
            );
            const isFullStrokeMatch = item.stroke === userCount;
            const isTarget = item.stroke >= 7 || item.hanja === "江" || item.hanja === "地";

            return isTarget && (isRadicalMatch || isCustomMatch || isFullStrokeMatch);
        });

        // 부수별로 그룹화 (정렬을 위한 임시 맵)
        const groupedByRadical = {};
        matchedItems.forEach(item => {
            const key = item.radical;
            if (!groupedByRadical[key]) groupedByRadical[key] = [];
            if (!groupedByRadical[key].includes(item.hanja)) {
                groupedByRadical[key].push(item.hanja);
            }
        });

        // 💡 부수 그룹별로 순회하되, 줄바꿈 div 없이 하나의 큰 컨테이너에 순서대로 바로 장착!
        Object.keys(groupedByRadical).forEach(radicalKey => {
            const hanjaList = groupedByRadical[radicalKey];

            hanjaList.forEach(char => {
                const btn = document.createElement("button");
                btn.className = "hanja-btn";
                btn.innerText = char;
                btn.onclick = () => showFinalResult(char);
                container.appendChild(btn); // 우측 영역에 바로 밀어넣기 (자동 가로 정렬)
            });
        });
    }

    function addHanjaButton(char, container) {
        if (!container || [...container.children].some(btn => btn.innerText === char)) return;
        const btn = document.createElement("button");
        btn.className = "hanja-btn";
        btn.innerText = char;
        btn.onclick = () => showFinalResult(char);
        container.appendChild(btn);
    }

    window.clearAll = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        strokes = [];
        const leftButtons = document.getElementById("leftButtons");
        const rightButtons = document.getElementById("rightButtons");
        if (leftButtons) leftButtons.innerHTML = "";
        if (rightButtons) rightButtons.innerHTML = "";
        document.getElementById("result").innerHTML = "마우스로 한자를 써보세요!";
    };

    function showFinalResult(char) {
        const matches = jokboData.filter(item => item.hanja === char);
        const resultDiv = document.getElementById("result");
        if (!resultDiv) return;

        let html = `<h3>'${char}' 관련 족보 결과 (클릭 시 정답 복사)</h3>`;
        matches.forEach((item, index) => {
            html += `
            <div class="jokbo-item" 
                 onclick="copyToClipboard('${item.answer}', this)"
                 style="border-bottom:1px solid #eee; padding:12px; text-align:left; cursor:pointer; transition: background 0.2s;"
                 onmouseover="this.style.background='#f9f9f9'"
                 onmouseout="this.style.background='transparent'">
                <p style="margin: 4px 0;"><b>질문:</b> ${item.question}</p>
                <p style="margin: 4px 0;"><b>정답:</b> <span class="ans-text" style="color:red; font-weight:bold; font-size:1.1em;">${item.answer}</span></p>
            </div>`;
        });
        resultDiv.innerHTML = html;
    }

    window.copyToClipboard = function(text, element) {
        navigator.clipboard.writeText(text).then(() => {
            const ansSpan = element.querySelector('.ans-text');
            if (!ansSpan) return;
            const originalColor = ansSpan.style.color;
            const originalText = ansSpan.innerText;

            ansSpan.innerText = "복사 완료! 👍";
            ansSpan.style.color = "#007bff";

            setTimeout(() => {
                ansSpan.innerText = originalText;
                ansSpan.style.color = originalColor;
            }, 800);
        }).catch(err => {
            console.error('복사 실패:', err);
        });
    };
})();