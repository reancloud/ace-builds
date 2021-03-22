define("ace/snippets/terraform",["require","exports","module"], function(require, exports, module) {
    "use strict";
    exports.snippetText = "snippet abs\n\
	abs(${1})\n\
snippet max\n\
	max(${1}, ${2})\n\
snippet ceil\n\
	ceil(${1})\n\
snippet floor\n\
	floor(${1})\n\
snippet log\n\
	log(${1}, ${2})\n\
snippet min\n\
	min(${1}, ${2})\n\
snippet parseint\n\
	parseint(\"${1}\", ${2})\n\
snippet pow\n\
	pow(${1}, ${2})\n\
snippet signum\n\
	signum(${1})\n\
";
    exports.scope = "terraform";
    });
                (function() {
                    window.require(["ace/snippets/terraform"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            