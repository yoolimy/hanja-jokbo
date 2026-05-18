const jokboData = [
    // === [통일] 統(12획, 糸) / 一(1획, 一) ===
    { hanja: "統", question: "[독음]統一을 읽으면 OO이다?", answer: "통일", radical: "糸", stroke: 12 },
    { hanja: "一", question: "[독음]統一을 읽으면 OO이다?", answer: "통일", radical: "一", stroke: 1 },
    { hanja: "統", question: "統一 를 읽으면 OO 이다?", answer: "통일", radical: "糸", stroke: 12 },
    { hanja: "一", question: "統一 를 읽으면 OO 이다?", answer: "통일", radical: "一", stroke: 1 },

    // === [가택] 家(10획, 宀) / 宅(6획, 宀) ===
    { hanja: "家", question: "家宅 을 (를) 읽으면 OO이다?", answer: "가택", radical: "宀", stroke: 10 },
    { hanja: "宅", question: "家宅 을 (를) 읽으면 OO이다?", answer: "가택", radical: "宀", stroke: 6 },

    // === [감상] 感(13획, 心) / 想(13획, 心) ===
    { hanja: "感", question: "感想를 읽으면?", answer: "감상", radical: "心", stroke: 13 },
    { hanja: "想", question: "感想를 읽으면?", answer: "감상", radical: "心", stroke: 13 },

    // === [강릉] 江(6획, 氵) / 凌(10획, 冫) ===
    { hanja: "江", question: "江凌를 읽으면?", answer: "강릉", radical: "氵", stroke: 6 },
    { hanja: "凌", question: "江凌를 읽으면?", answer: "강릉", radical: "冫", stroke: 10 },

    // === [개척] 開(12획, 門) / 拓(8획, 扌) ===
    { hanja: "開", question: "開拓을 읽으면 00이다?", answer: "개척", radical: "門", stroke: 12 },
    { hanja: "拓", question: "開拓을 읽으면 00이다?", answer: "개척", radical: "扌", stroke: 8 },

    // === [갱도] 坑(7획, 土) / 道(12획, 辶) ===
    { hanja: "坑", question: "坑道을(를) 읽으면 OO이다?", answer: "갱도", radical: "土", stroke: 7 },
    { hanja: "道", question: "坑道을(를) 읽으면 OO이다?", answer: "갱도", radical: "辶", stroke: 12 },

    // === [거제] 巨(5획, 工) / 濟(17획, 氵) ===
    { hanja: "巨", question: "巨濟를 읽으면?", answer: "거제", radical: "工", stroke: 5 },
    { hanja: "濟", question: "巨濟를 읽으면?", answer: "거제", radical: "氵", stroke: 17 },

    // === [경기도] 京(8획, 亠) / 機(16획, 木) / 道(12획, 辶) ===
    { hanja: "京", question: "京機道를 읽으면?", answer: "경기도", radical: "亠", stroke: 8 },
    { hanja: "機", question: "京機道를 읽으면?", answer: "경기도", radical: "木", stroke: 16 },
    { hanja: "道", question: "京機道를 읽으면?", answer: "경기도", radical: "辶", stroke: 12 },

    // === [광주] 廣(15획, 广) / 州(6획, 川) ===
    { hanja: "廣", question: "廣州를 읽으면?", answer: "광주", radical: "广", stroke: 15 },
    { hanja: "州", question: "廣州를 읽으면?", answer: "광주", radical: "川", stroke: 6 },

    // === [교사] 敎(11획, 攵) / 唆(10획, 口) ===
    { hanja: "敎", question: "敎唆을(를) 읽으면 OO이다?", answer: "교사", radical: "攵", stroke: 11 },
    { hanja: "唆", question: "敎唆을(를) 읽으면 OO이다?", answer: "교사", radical: "口", stroke: 10 },

    // === [구습] 舊(18획, 臼) / 習(11획, 羽) ===
    { hanja: "舊", question: "舊習을 (를) 읽으면 OO이다?", answer: "구습", radical: "臼", stroke: 18 },
    { hanja: "習", question: "舊習을 (를) 읽으면 OO이다?", answer: "구습", radical: "羽", stroke: 11 },

    // === [공주] 公(4획, 八) / 州(6획, 川) ===
    { hanja: "公", question: "다음은 충청남도 지명을 한자로 쓴것이다. 公州를 읽으면?", answer: "공주", radical: "八", stroke: 4 },
    { hanja: "州", question: "다음은 충청남도 지명을 한자로 쓴것이다. 公州를 읽으면?", answer: "공주", radical: "川", stroke: 6 },

    // === [공중도덕] 公(4) / 衆(12) / 道(12) / 德(15) ===
    { hanja: "公", question: "독음 公衆道德 읽으면?", answer: "공중도덕", radical: "八", stroke: 4 },
    { hanja: "衆", question: "독음 公衆道德 읽으면?", answer: "공중도덕", radical: "血", stroke: 12 },
    { hanja: "道", question: "독음 公衆道德 읽으면?", answer: "공중도덕", radical: "辶", stroke: 12 },
    { hanja: "德", question: "독음 公衆道德 읽으면?", answer: "공중도덕", radical: "彳", stroke: 15 },

    // === [만취] 晩(11획, 日) / 翠(14획, 羽) ===
    { hanja: "晩", question: "晩翠을(를) 읽으면 OO이다?", answer: "만취", radical: "日", stroke: 11 },
    { hanja: "翠", question: "晩翠을(를) 읽으면 OO이다?", answer: "만취", radical: "羽", stroke: 14 },

    // === [번지] 番(12획, 釆) / 地(6획, 土) ===
    { hanja: "番", question: "番地 을(를)읽으면 00이다?", answer: "번지", radical: "釆", stroke: 12 },
    { hanja: "地", question: "番地 을(를)읽으면 00이다?", answer: "번지", radical: "土", stroke: 6 },

    // === [보고] 寶(20획, 宀) / 庫(10획, 广) ===
    { hanja: "寶", question: "寶庫을(를) 읽으면 OO이다?", answer: "보고", radical: "宀", stroke: 20 },
    { hanja: "庫", question: "寶庫을(를) 읽으면 OO이다?", answer: "보고", radical: "广", stroke: 10 },

    // === [상봉] 相(9획, 木) / 逢(11획, 辶) ===
    { hanja: "相", question: "相逢을(를) 을 읽으면 OO이다?", answer: "상봉", radical: "木", stroke: 9 },
    { hanja: "逢", question: "相逢을(를) 을 읽으면 OO이다?", answer: "상봉", radical: "辶", stroke: 11 },

    // === [아세아] 亞(8획, 二) / 細(11획, 糸) / 亞(8획, 二) ===
    { hanja: "亞", question: "亞細亞 를 읽으면 OOO 이다?", answer: "아세아", radical: "二", stroke: 8 },
    { hanja: "細", question: "亞細亞 를 읽으면 OOO 이다?", answer: "아세아", radical: "糸", stroke: 11 },
    { hanja: "亞", question: "亞細亞를 읽으면?", answer: "아세아", radical: "二", stroke: 8 },
    { hanja: "細", question: "亞細亞를 읽으면?", answer: "아세아", radical: "糸", stroke: 11 },

    // === [양심] 良(7획, 艮) / 心(4획, 心) ===
    { hanja: "良", question: "良心 을(를)읽으면 00이다?", answer: "양심", radical: "艮", stroke: 7 },
    { hanja: "心", question: "良心 을(를)읽으면 00이다?", answer: "양심", radical: "心", stroke: 4 },

    // === [왕십리] 王(4획, 玉) / 十(2획, 十) / 理(11획, 玉) ===
    { hanja: "王", question: "王十理를 읽으면 OOO이다?", answer: "왕십리", radical: "玉", stroke: 4 },
    { hanja: "十", question: "王十理를 읽으면 OOO이다?", answer: "왕십리", radical: "十", stroke: 2 },
    { hanja: "理", question: "王十理를 읽으면 OOO이다?", answer: "왕십리", radical: "玉", stroke: 11 },

    // === [요리] 料(10획, 斗) / 理(11획, 玉) ===
    { hanja: "料", question: "料理을(를)읽으면 OO이다?", answer: "요리", radical: "斗", stroke: 10 },
    { hanja: "理", question: "料理을(를)읽으면 OO이다?", answer: "요리", radical: "玉", stroke: 11 },

    // === [경상북도] 慶(15) / 商(11) / 北(5) / 道(12) ===
    { hanja: "慶", question: "우리나라 지명 慶商北道를 읽으면?", answer: "경상북도", radical: "心", stroke: 15 },
    { hanja: "商", question: "우리나라 지명 慶商北道를 읽으면?", answer: "경상북도", radical: "口", stroke: 11 },
    { hanja: "北", question: "우리나라 지명 慶商北道를 읽으면?", answer: "경상북도", radical: "匕", stroke: 5 },
    { hanja: "道", question: "우리나라 지명 慶商北道를 읽으면?", answer: "경상북도", radical: "辶", stroke: 12 },

    // === [월령] 月(4획, 月) / 靈(24획, 雨) ===
    { hanja: "月", question: "月靈을 읽으면 00이다?", answer: "월령", radical: "月", stroke: 4 },
    { hanja: "靈", question: "月靈을 읽으면 00이다?", answer: "월령", radical: "雨", stroke: 24 },

    // === [음료] 飮(13획, 食) / 料(10획, 斗) ===
    { hanja: "飮", question: "飮料 를 읽으면 OO 이다?", answer: "음료", radical: "食", stroke: 13 },
    { hanja: "料", question: "飮料 를 읽으면 OO 이다?", answer: "음료", radical: "斗", stroke: 10 },

    // === [의무] 義(13획, 羊) / 霧(19획, 雨) ===
    { hanja: "義", question: "義霧 를 읽으면 OO 이다?", answer: "의무", radical: "羊", stroke: 13 },
    { hanja: "霧", question: "義霧 를 읽으면 OO 이다?", answer: "의무", radical: "雨", stroke: 19 },

    // === [의회] 議(20획, 言) / 會(13획, 曰) ===
    { hanja: "議", question: "議會 를 읽으면 OO 이다?", answer: "의회", radical: "言", stroke: 20 },
    { hanja: "會", question: "議會 를 읽으면 OO 이다?", answer: "의회", radical: "曰", stroke: 13 },

    // === [살생환] 殺(11획, 殳) / 生(5획, 生) / 丸(3획, 丶) ===
    { hanja: "殺", question: "이누야사에 나오는 캐릭터 셋쇼마루의 이름을 한자어로 읽으면 OOO이다?", answer: "살생환", radical: "殳", stroke: 11 },
    { hanja: "生", question: "이누야사에 나오는 캐릭터 셋쇼마루의 이름을 한자어로 읽으면 OOO이다?", answer: "살생환", radical: "生", stroke: 5 },
    { hanja: "丸", question: "이누야사에 나오는 캐릭터 셋쇼마루의 이름을 한자어로 읽으면 OOO이다?", answer: "살생환", radical: "丶", stroke: 3 },

    // === [절개] 節(13획, 竹) / 慨(12획, 忄) ===
    { hanja: "節", question: "節慨 을(를) 읽으면 00이다?", answer: "절개", radical: "竹", stroke: 13 },
    { hanja: "慨", question: "節慨 을(를) 읽으면 00이다?", answer: "절개", radical: "忄", stroke: 12 },

    // === [절도] 絶(12획, 糸) / 到(8획, 刀) ===
    { hanja: "絶", question: "絶到 를 읽으면 OO 이다?", answer: "절도", radical: "糸", stroke: 12 },
    { hanja: "到", question: "絶到 를 읽으면 OO 이다?", answer: "절도", radical: "刀", stroke: 8 },

    // === [제재] 制(8획, 刀) / 裁(12획, 衣) ===
    { hanja: "制", question: "制裁 를 읽으면 OO 이다?", answer: "제재", radical: "刀", stroke: 8 },
    { hanja: "裁", question: "制裁 를 읽으면 OO 이다?", answer: "제재", radical: "衣", stroke: 12 },
    { hanja: "制", question: "制裁을 (를) 읽으면 OO이다?", answer: "제재", radical: "刀", stroke: 8 },
    { hanja: "裁", question: "制裁을 (를) 읽으면 OO이다?", answer: "제재", radical: "衣", stroke: 12 },

    // === [평화] 平(5획, 干) / 和(8획, 口) ===
    { hanja: "平", question: "平和를 읽으면?", answer: "평화", radical: "干", stroke: 5 },
    { hanja: "和", question: "平和를 읽으면?", answer: "평화", radical: "禾", stroke: 8 },

    // === [효심] 孝(7획, 子) / 心(4획, 心) ===
    { hanja: "孝", question: "孝心을(를)읽으면 OO이다?", answer: "효심", radical: "子", stroke: 7 },
    { hanja: "心", question: "孝心을(를)읽으면 OO이다?", answer: "효심", radical: "心", stroke: 4 },

    // === [관할] 管(14획, 竹) / 轄(17획, 車) ===
    { hanja: "管", question: "管轄을(를) 읽으면 ○○이다?", answer: "관할", radical: "竹", stroke: 14 },
    { hanja: "轄", question: "管轄을(를) 읽으면 ○○이다?", answer: "관할", radical: "車", stroke: 17 },
    { hanja: "管", question: "管轄을(를) 읽으면 OO이다?", answer: "관할", radical: "竹", stroke: 14 },
    { hanja: "轄", question: "管轄을(를) 읽으면 OO이다?", answer: "관할", radical: "車", stroke: 17 },

    // === [가격] 價(15획, 亻) / 格(10획, 木) ===
    { hanja: "價", question: "價格을(를) 읽으면 ○○이다?", answer: "가격", radical: "亻", stroke: 15 },
    { hanja: "格", question: "價格을(를) 읽으면 ○○이다?", answer: "가격", radical: "木", stroke: 10 },
    { hanja: "價", question: "價格을(를) 읽으면 OO이다?", answer: "가격", radical: "가격", radical: "亻", stroke: 15 },
    { hanja: "格", question: "價格을(를) 읽으면 OO이다?", answer: "가격", radical: "가격", radical: "木", stroke: 10 },

    // === [동공] 瞳(17획, 目) / 孔(4획, 子) ===
    { hanja: "瞳", question: "瞳孔을(를) 읽으면 OO이다?", answer: "동공", radical: "目", stroke: 17 },
    { hanja: "孔", question: "瞳孔을(를) 읽으면 OO이다?", answer: "동공", radical: "子", stroke: 4 },

    // === [개념] 槪(14획, 木) / 念(8획, 心) ===
    { hanja: "槪", question: "槪念을(를) 읽으면 OO이다?", answer: "개념", radical: "木", stroke: 14 },
    { hanja: "念", question: "槪念을(를) 읽으면 OO이다?", answer: "개념", radical: "心", stroke: 8 },

    // === [용기] 容(10획, 宀) / 器(16획, 口) ===
    { hanja: "容", question: "容器을(를) 읽으면 OO이다?", answer: "용기", radical: "宀", stroke: 10 },
    { hanja: "器", question: "容器을(를) 읽으면 OO이다?", answer: "용기", radical: "口", stroke: 16 },
    { hanja: "容", question: "容器을(를) 읽으면 ㅇㅇ이다?", answer: "용기", radical: "宀", stroke: 10 },
    { hanja: "器", question: "容器을(를) 읽으면 ㅇㅇ이다?", answer: "용기", radical: "口", stroke: 16 },

    // === [격분] 激(15획, 氵) / 憤(15획, 忄) ===
    { hanja: "激", question: "激憤을 읽으면 무엇인가?", answer: "격분", radical: "氵", stroke: 15 },
    { hanja: "憤", question: "激憤을 읽으면 무엇인가?", answer: "격분", radical: "忄", stroke: 15 },
    { hanja: "激", question: "激憤을(를) 읽으면?", answer: "격분", radical: "氵", stroke: 15 },
    { hanja: "憤", question: "激憤을(를) 읽으면?", answer: "격분", radical: "忄", stroke: 15 },
    { hanja: "激", question: "激憤을(를) 읽으면 OO이다?", answer: "격분", radical: "氵", stroke: 15 },
    { hanja: "憤", question: "激憤을(를) 읽으면 OO이다?", answer: "격분", radical: "忄", stroke: 15 },

    // === [방랑] 放(8획, 攵) / 浪(10획, 氵) ===
    { hanja: "放", question: "放浪을 읽으면 무엇인가?", answer: "방랑", radical: "攵", stroke: 8 },
    { hanja: "浪", question: "放浪을 읽으면 무엇인가?", answer: "방랑", radical: "氵", stroke: 10 },
    { hanja: "放", question: "放浪을(를) 읽으면 OO이다?", answer: "방랑", radical: "攵", stroke: 8 },
    { hanja: "浪", question: "放浪을(를) 읽으면 OO이다?", answer: "방랑", radical: "氵", stroke: 10 },

    // === [표리부동] 表(8) / 裏(13) / 不(4) / 同(6) ===
    { hanja: "表", question: "表裏不同을 읽으면 무엇인가?", answer: "표리부동", radical: "衣", stroke: 8 },
    { hanja: "裏", question: "表裏不同을 읽으면 무엇인가?", answer: "표리부동", radical: "衣", stroke: 13 },
    { hanja: "不", question: "表裏不同을 읽으면 무엇인가?", answer: "표리부동", radical: "一", stroke: 4 },
    { hanja: "同", question: "表裏不同을 읽으면 무엇인가?", answer: "표리부동", radical: "口", stroke: 6 },
    { hanja: "表", question: "表裏不同'을 읽으면?", answer: "표리부동", radical: "衣", stroke: 8 },
    { hanja: "裏", question: "表裏不同'을 읽으면?", answer: "표리부동", radical: "衣", stroke: 13 },
    { hanja: "不", question: "表裏不同'을 읽으면?", answer: "표리부동", radical: "一", stroke: 4 },
    { hanja: "同", question: "表裏不同'을 읽으면?", answer: "표리부동", radical: "口", stroke: 6 },

    // === [이심전심] 以(5) / 心(4) / 傳(13) / 心(4) ===
    { hanja: "以", question: "以心傳心을 읽으면?", answer: "이심전심", radical: "人", stroke: 5 },
    { hanja: "心", question: "以心傳心을 읽으면?", answer: "이심전심", radical: "心", stroke: 4 },
    { hanja: "傳", question: "以心傳心을 읽으면?", answer: "이심전심", radical: "亻", stroke: 13 },

    // === [혼절] 昏(8획, 日) / 絶(12획, 糸) ===
    { hanja: "昏", question: "昏絶을(를) 읽으면 OO이다?", answer: "혼절", radical: "日", stroke: 8 },
    { hanja: "絶", question: "昏絶을(를) 읽으면 OO이다?", answer: "혼절", radical: "糸", stroke: 12 },

    // === [심심] 甚(9획, 甘) / 深(11획, 氵) ===
    { hanja: "甚", question: "甚深을(를) 읽으면 OO이다?", answer: "심심", radical: "甘", stroke: 9 },
    { hanja: "深", question: "甚深을(를) 읽으면 OO이다?", answer: "심심", radical: "氵", stroke: 11 },

    // === [물론] 勿(4획, 勹) / 論(15획, 言) ===
    { hanja: "勿", question: "勿論을(를) 읽으면 ○○이다?", answer: "물론", radical: "勹", stroke: 4 },
    { hanja: "論", question: "勿論을(를) 읽으면 ○○이다?", answer: "물론", radical: "言", stroke: 15 },
    { hanja: "勿", question: "勿論를(을) 읽으면?", answer: "물론", radical: "勹", stroke: 4 },
    { hanja: "論", question: "勿論를(을) 읽으면?", answer: "물론", radical: "言", stroke: 15 },

    // === [심지어] 甚(9획, 甘) / 至(6획, 至) / 於(8획, 方) ===
    { hanja: "甚", question: "甚至於를(을) 읽으면?", answer: "심지어", radical: "甘", stroke: 9 },
    { hanja: "至", question: "甚至於를(을) 읽으면?", answer: "심지어", radical: "至", stroke: 6 },
    { hanja: "於", question: "甚至於를(을) 읽으면?", answer: "심지어", radical: "方", stroke: 8 },

    // === [하필] 河(8획, 氵) / 必(5획, 心) ===
    { hanja: "河", question: "河必를(을) 읽으면?", answer: "하필", radical: "氵", stroke: 8 },
    { hanja: "必", question: "河必를(을) 읽으면?", answer: "하필", radical: "心", stroke: 5 },

    // === [도대체] 都(11획, 邑) / 大(3획, 大) / 體(23획, 骨) ===
    { hanja: "都", question: "都大體를(을) 읽으면?", answer: "도대체", radical: "邑", stroke: 11 },
    { hanja: "大", question: "都大體를(을) 읽으면?", answer: "도대체", radical: "大", stroke: 3 },
    { hanja: "體", question: "都大體를(을) 읽으면?", answer: "도대체", radical: "骨", stroke: 23 },

    // 💡 [어차피] 於(8획, 方) / 此(6획, 止) / 彼(8획, 彳) 전면 개별 분리!
    { hanja: "於", question: "於此彼 읽으면?", answer: "어차피", radical: "方", stroke: 8 },
    { hanja: "此", question: "於此彼 읽으면?", answer: "어차피", radical: "止", stroke: 6 },
    { hanja: "彼", question: "於此彼 읽으면?", answer: "어차피", radical: "彳", stroke: 8 },
    { hanja: "於", question: "於此彼를(을) 읽으면?", answer: "어차피", radical: "方", stroke: 8 },
    { hanja: "此", question: "於此彼를(을) 읽으면?", answer: "어차피", radical: "止", stroke: 6 },
    { hanja: "彼", question: "於此彼를(을) 읽으면?", answer: "어차피", radical: "彳", stroke: 8 },

    // === [무려] 無(12획, 火) / 慮(15획, 虍) ===
    { hanja: "無", question: "無慮를(을) 읽으면?", answer: "무려", radical: "火", stroke: 12 },
    { hanja: "慮", question: "無慮를(을) 읽으면?", answer: "무려", radical: "虍", stroke: 15 },
    // === [역시] 亦(6획, 亠) / 是(9획, 日) ===
    { hanja: "亦", question: "亦是를(을) 읽으면?", answer: "역시", radical: "亠", stroke: 6 }, // 💡
    { hanja: "是", question: "亦商를(을) 읽으면?", answer: "역시", radical: "日", stroke: 9 }, // 💡
    // data.js 내부 수정 (요리, 음료)
    { hanja: "料", question: "料理을(를)읽으면 OO이다?", answer: "요리", radical: "米", stroke: 10 },
    { hanja: "料", question: "飮料 를 읽으면 OO 이다?", answer: "음료", radical: "米", stroke: 10 },
    // === [간주] 看(9획, 目) / 做(11획, 人) ===
    { hanja: "看", question: "看做의 독음은?", answer: "간주", radical: "目", stroke: 9 },
    { hanja: "做", question: "看做의 독음은?", answer: "간주", radical: "亻", stroke: 11 },

    // === [간택] 間(12획, 門) / 宅(6획, 宀) ===
    { hanja: "間", question: "間宅의 독음은 무엇인가?", answer: "간택", radical: "門", stroke: 12 },
    { hanja: "宅", question: "間宅의 독음은 무엇인가?", answer: "간택", radical: "宀", stroke: 6 },

    // === [감개] 感(13획, 心) / 慨(12획, 忄) ===
    { hanja: "感", question: "感慨의 독음은?", answer: "감개", radical: "心", stroke: 13 },
    { hanja: "慨", question: "感慨의 독음은?", answer: "감개", radical: "忄", stroke: 12 },

    // === [감정] 鑑(22획, 金) / 情(11획, 忄) ===
    { hanja: "鑑", question: "鑑情의 독음은 OO이다?", answer: "감정", radical: "金", stroke: 22 },
    { hanja: "情", question: "鑑情의 독음은 OO이다?", answer: "감정", radical: "忄", stroke: 11 },

    // === [강우] 降(10획, 阜) / 雨(8획, 雨) ===
    { hanja: "降", question: "降雨의 독음은 OO이다?", answer: "강우", radical: "⻖", stroke: 10 },
    { hanja: "雨", question: "降雨의 독음은 OO이다?", answer: "강우", radical: "雨", stroke: 8 },

    // === [개괄] 槪(14획, 木) / 括(9획, 扌) ===
    { hanja: "槪", question: "槪括의 독음은 OO이다?", answer: "개괄", radical: "木", stroke: 14 },
    { hanja: "括", question: "槪括의 독음은 OO이다?", answer: "개괄", radical: "扌", stroke: 9 },

    // === [거말] 車(7획, 車) / 末(5획, 木) ===
    { hanja: "車", question: "車末의 독음은?", answer: "거말", radical: "車", stroke: 7 },
    { hanja: "末", question: "車末의 독음은?", answer: "거말", radical: "木", stroke: 5 },

    // === [건곤] 乾(11획, 乙) / 坤(8획, 土) ===
    { hanja: "乾", question: "乾坤의 독음은 OO이다?", answer: "건곤", radical: "乙", stroke: 11 },
    { hanja: "坤", question: "乾坤의 독음은 OO이다?", answer: "건곤", radical: "土", stroke: 8 },

    // === [계륵] 鷄(21획, 鳥) / 肋(6획, 肉) ===
    { hanja: "鷄", question: "鷄肋의 독음은 OO이다?", answer: "계륵", radical: "鳥", stroke: 21 },
    { hanja: "肋", question: "鷄肋의 독음은 OO이다?", answer: "계륵", radical: "⺼", stroke: 6 },

    // === [고성] 固(8획, 囗) / 城(9획, 土) ===
    { hanja: "固", question: "固城의 독음은?", answer: "고성", radical: "囗", stroke: 8 },
    { hanja: "城", question: "固城의 독음은?", answer: "고성", radical: "土", stroke: 9 },

    // === [광명] 光(6획, 儿) / 明(8획, 日) ===
    { hanja: "光", question: "光明의 독음은?", answer: "광명", radical: "儿", stroke: 6 },
    { hanja: "明", question: "光明의 독음은?", answer: "광명", radical: "日", stroke: 8 },

    // === [광양] 光(6획, 儿) / 陽(12획, 阜) ===
    { hanja: "光", question: "光陽의 독음은?", answer: "광양", radical: "儿", stroke: 6 },
    { hanja: "陽", question: "光陽의 독음은?", answer: "광양", radical: "⻖", stroke: 12 },

    // === [광주광역시] 廣(15) / 州(6) / 廣(15) / 域(11) / 市(5) ===
    { hanja: "廣", question: "光州廣域市의 독음은?", answer: "광주광역시", radical: "广", stroke: 15 },
    { hanja: "州", question: "光州廣域市의 독음은?", answer: "광주광역시", radical: "川", stroke: 6 },
    { hanja: "域", question: "光州廣域市의 독음은?", answer: "광주광역시", radical: "土", stroke: 11 },
    { hanja: "市", question: "光州廣域市의 독음은?", answer: "광주광역시", radical: "巾", stroke: 5 },

    // === [괘기] 罫(14획, 網) / 祇(10획, 示) ===
    { hanja: "罫", question: "罫祇를 독음은?", answer: "괘기", radical: "罒", stroke: 14 },
    { hanja: "祇", question: "罫祇를 독음은?", answer: "괘기", radical: "礻", stroke: 10 },

    // === [괴퍅] 乖(8획, 丿) / 愎(12획, 忄) ===
    { hanja: "乖", question: "乖愎의 독음은?", answer: "괴퍅", radical: "丿", stroke: 8 },
    { hanja: "愎", question: "乖愎의 독음은?", answer: "괴퍅", radical: "忄", stroke: 12 },

    // === [낙원] 樂(15획, 木) / 園(13획, 囗) ===
    { hanja: "樂", question: "樂園의 독음은?", answer: "낙원", radical: "木", stroke: 15 },
    { hanja: "園", question: "樂園의 독음은?", answer: "낙원", radical: "囗", stroke: 13 },

    // === [고루] 固(8획, 囗) / 陋(9획, 阜) ===
    { hanja: "固", question: "낡은 사상이나 풍습에 젖어 고집이 세고 변통성이 없다는 뜻인 固陋의 독음은 00이다?", answer: "고루", radical: "囗", stroke: 8 },
    { hanja: "陋", question: "낡은 사상이나 풍습에 젖어 고집이 세고 변통성이 없다는 뜻인 固陋의 독음은 00이다?", answer: "고루", radical: "⻖", stroke: 9 },

    // === [관악구] 冠(9획, ⼍) / 岳(8획, 山) / 區(11획, ⼕) ===
    { hanja: "冠", question: "독음 冠岳區?", answer: "관악구", radical: "冖", stroke: 9 },
    { hanja: "岳", question: "독음 冠岳區?", answer: "관악구", radical: "山", stroke: 8 },
    { hanja: "區", question: "독음 冠岳區?", answer: "관악구", radical: "⼕", stroke: 11 },

    // === [녹지] 綠(14획, 糸) / 地(6획, 土) ===
    { hanja: "綠", question: "독음 綠地?", answer: "녹지", radical: "糸", stroke: 14 },
    { hanja: "地", question: "독음 綠地?", answer: "녹지", radical: "土", stroke: 6 },

    // === [백두산] 白(5획, 白) / 頭(16획, 頁) / 山(3획, 山) ===
    { hanja: "白", question: "독음 白頭山?", answer: "백두산", radical: "白", stroke: 5 },
    { hanja: "頭", question: "독음 白頭山?", answer: "백두산", radical: "頁", stroke: 16 },
    { hanja: "山", question: "독음 白頭山?", answer: "백두산", radical: "山", stroke: 3 },

    // === [포복] 抱(8획, 扌) / 腹(13획, 肉) ===
    { hanja: "抱", question: "독음 抱腹?", answer: "포복", radical: "扌", stroke: 8 },
    { hanja: "腹", question: "독음 抱腹?", answer: "포복", radical: "⺼", stroke: 13 },

    // === [무진] 無(12획, 火) / 塵(14획, 土) ===
    { hanja: "無", question: "無塵의 독음은?", answer: "무진", radical: "火", stroke: 12 },
    { hanja: "塵", question: "無塵의 독음은?", answer: "무진", radical: "土", stroke: 14 },

    // === [아나] 阿(8획, 阜) / 那(7획, 邑) ===
    { hanja: "阿", question: "阿那의 독음은 무엇인가?", answer: "아나", radical: "⻖", stroke: 8 },
    { hanja: "那", question: "阿那의 독음은 무엇인가?", answer: "아나", radical: "⻎", stroke: 7 },

    // === [위무자] 魏(18획, 鬼) / 務(11획, 力) / 子(3획, 子) ===
    { hanja: "魏", question: "魏務子의 독음은,?", answer: "위무자", radical: "鬼", stroke: 18 },
    { hanja: "務", question: "魏務子의 독음은,?", answer: "위무자", radical: "力", stroke: 11 },
    { hanja: "子", question: "魏務子의 독음은,?", answer: "위무자", radical: "子", stroke: 3 },

    // === [마중지봉] 麻(11) / 中(4) / 之(4) / 蓬(15) ===
    { hanja: "麻", question: "좋은 사람들 사이에 잇으면 그 영향을 받아 자기도 모르는 사이에 좋은 사람이 된다는 麻中之蓬 의 독음은?", answer: "마중지봉", radical: "麻", stroke: 11 },
    { hanja: "中", question: "좋은 사람들 사이에 잇으면 그 영향을 받아 자기도 모르는 사이에 좋은 사람이 된다는 麻中之蓬 의 독음은?", answer: "마중지봉", radical: "丨", stroke: 4 },
    { hanja: "之", question: "좋은 사람들 사이에 잇으면 그 영향을 받아 자기도 모르는 사이에 좋은 사람이 된다는 麻中之蓬 의 독음은?", answer: "마중지봉", radical: "丶", stroke: 4 },
    { hanja: "蓬", question: "좋은 사람들 사이에 잇으면 그 영향을 받아 자기도 모르는 사이에 좋은 사람이 된다는 麻中之蓬 의 독음은?", answer: "마중지봉", radical: "艹", stroke: 15 },

    // === [간과] 干(3획, 干) / 戈(4획, 戈) ===
    { hanja: "干", question: "창과 방패, 무기, 전쟁이라는 뜻의 한자 干戈의 독음은 OO이다?", answer: "간과", radical: "干", stroke: 3 },
    { hanja: "戈", question: "창과 방패, 무기, 전쟁이라는 뜻의 한자 干戈의 독음은 OO이다?", answer: "간과", radical: "戈", stroke: 4 },

    // === [해우] 解(13획, 角) / 優(17획, 人) ===
    { hanja: "解", question: "解優의 독음은?", answer: "해우", radical: "角", stroke: 13 },
    { hanja: "優", question: "解優의 독음은?", answer: "해우", radical: "亻", stroke: 17 }
];