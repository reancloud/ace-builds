ace.define("ace/snippets/terraform",[],function(e,t,n){"use strict";t.snippetText='snippet abs\n	abs(${1})\nsnippet max\n	max(${1}, ${2})\nsnippet ceil\n	ceil(${1})\nsnippet floor\n	floor(${1})\nsnippet log\n	log(${1}, ${2})\nsnippet min\n	min(${1}, ${2})\nsnippet parseint\n	parseint("${1}", ${2})\nsnippet pow\n	pow(${1}, ${2})\nsnippet signum\n	signum(${1})\n',t.scope="terraform"});
                (function() {
                    ace.require(["ace/snippets/terraform"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            