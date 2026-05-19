var hanzilookup = (function() {
    var _mobiDict = null;
    var _isInitialized = false;

    function init(type, file, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", file, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                try {
                    _mobiDict = JSON.parse(xhr.responseText);
                    _isInitialized = true;
                    if (callback) callback();
                } catch (e) { console.error("JSON 로드 실패"); }
            }
        };
        xhr.send();
    }

    function recognize(strokes, limit, callback) {
        if (!_isInitialized || !_mobiDict) return;
        var userCount = strokes.length;
        var results = [];

        for (var i = 0; i <= 1; i++) {
            var count = userCount + i;
            if (_mobiDict[count]) {
                _mobiDict[count].forEach(function(char) {
                    if (!results.some(r => r.character === char)) {
                        results.push({ character: char });
                    }
                });
            }
        }
        callback(results.slice(0, limit));
    }

    return { init: init, recognize: recognize };
})();

