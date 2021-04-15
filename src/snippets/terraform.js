define("ace/snippets/terraform",["require","exports","module"], function(require, exports, module) {
    "use strict";
    exports.snippetText = "# terraform functions\n\
snippet abs\n\
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
snippet chomp\n\
	chomp(\"${1}\")\n\
snippet format\n\
	format(\"${1}\", ${2})\n\
snippet formatlist\n\
	formatlist(\"${1}\", ${2})\n\
snippet indent\n\
	indent(${1}, ${2})\n\
snippet join\n\
	join(\"${1}\", [${2}])\n\
snippet lower\n\
	lower(\"${1}\")\n\
snippet regex\n\
	regex(\"${1}\", \"${2}\")\n\
snippet regexall\n\
	regexall(\"${1}\", \"${2}\")\n\
snippet replace\n\
	replace(\"${1}\", \"${2}\", \"${3}\")\n\
snippet split\n\
	split(\"${1}\", \"${2}\")\n\
snippet strrev\n\
	strrev(\"${1}\")\n\
snippet substr\n\
	substr(\"${1}\", ${2}, ${3})\n\
snippet title\n\
	title(\"${1}\")\n\
snippet trim\n\
	trim(\"${1}\", \"${2}\")\n\
snippet trimprefix\n\
	trimprefix(\"${1}\", \"${2}\")\n\
snippet trimsuffix\n\
	trimsuffix(\"${1}\", \"${2}\")\n\
snippet trimspace\n\
	trimspace(\"${1}\")\n\
snippet upper\n\
	upper(\"${1}\")\n\
snippet alltrue\n\
	alltrue([${1}])\n\
snippet anytrue\n\
	anytrue([${1}])\n\
snippet chunklist\n\
	chunklist([${1}], ${2})\n\
snippet coalesce\n\
	coalesce(${1}, ${2})\n\
 snippet coalescelist\n\
	coalescelist([${1}],[${2}])\n\
snippet compact\n\
	compact([${1}])\n\
snippet concat\n\
	concat([${1}], [${2}])\n\
snippet contains\n\
	contains([${1}], ${2})\n\
snippet distinct\n\
	distinct([${1}])\n\
snippet element\n\
	element([${1}], ${2})\n\
snippet flatten\n\
	flatten([${1}])\n\
snippet index\n\
	index([${1}], ${2})\n\
snippet keys\n\
	keys({${1}})\n\
snippet length\n\
	length([${1}])\n\
snippet list\n\
	list(${1})\n\
snippet lookup\n\
	lookup({${1}}, \"${2}\", \"${3}\")\n\
snippet map\n\
	map(${1}, ${2})\n\
snippet matchkeys\n\
	matchkeys([${1}], [${2}], [${3}])\n\
snippet merge\n\
	merge({${1}}, {${2}})\n\
snippet range\n\
	range(${1}, ${2}, ${3})\n\
snippet reverse\n\
	reverse([${1}])\n\
snippet setintersection\n\
	setintersection([${1}], [${2}])\n\
snippet setproduct\n\
	setproduct([${1}], [${2}])\n\
snippet setsubtract\n\
	setsubtract([${1}], [${2}])\n\
snippet setunion\n\
	setunion([${1}], [${2}])\n\
snippet slice\n\
	slice([${1}], ${2}, ${3})\n\
snippet sort\n\
	sort([${1}])\n\
snippet sum\n\
	sum([${1}])\n\
snippet transpose\n\
	transpose({\"${1}\" = [${2}]})\n\
snippet values\n\
	values({${1}})\n\
snippet zipmap\n\
	zipmap([${1}], [${2}])\n\
snippet base64decode\n\
	base64decode(\"${1}\")\n\
snippet base64encode\n\
	base64encode(\"${1}\")\n\
snippet base64gzip\n\
	base64gzip(\"${1}\")\n\
snippet csvdecode\n\
	csvdecode(\"${1}\")\n\
snippet jsondecode\n\
	jsondecode(\"${1}\")\n\
snippet jsonencode\n\
	jsonencode(\"${1}\")\n\
snippet textdecodebase64\n\
	textdecodebase64(\"${1}\", \"${2}\")\n\
snippet textencodebase64\n\
	textencodebase64(\"${1}\", \"${2}\")\n\
snippet urlencode\n\
	urlencode(\"${1}\")\n\
snippet yamldecode\n\
	yamldecode(\"${1}\")\n\
snippet yamlencode\n\
	yamlencode(\"${1}\")\n\
snippet abspath\n\
	abspath(\"${1}\")\n\
snippet dirname\n\
	dirname(\"${1}\")\n\
snippet pathexpand\n\
	pathexpand(\"${1}\")\n\
snippet basename\n\
	basename(\"${1}\")\n\
snippet file\n\
	file(\"${1}\")\n\
snippet fileexists\n\
	fileexists(\"${1}\")\n\
snippet fileset\n\
	fileset(\"${1}\", \"${2}\")\n\
snippet filebase64\n\
	filebase64(\"${1}\")\n\
snippet templatefile\n\
	templatefile(\"${1}\")\n\
snippet formatdate\n\
	formatdate(\"${1}\", \"${2}\")\n\
snippet timeadd\n\
	timeadd(\"${1}\", \"${2}\")\n\
snippet timestamp\n\
	timestamp()\n\
snippet base64sha256\n\
	base64sha256(\"${1}\")\n\
snippet base64sha512\n\
	base64sha512(\"${1}\")\n\
snippet bcrypt\n\
	bcrypt(\"${1}\")\n\
snippet filebase64sha256\n\
	filebase64sha256(\"${1}\")\n\
snippet filebase64sha512\n\
	filebase64sha512(\"${1}\")\n\
snippet filemd5\n\
	filemd5(\"${1}\")\n\
snippet filesha1\n\
	filesha1(\"${1}\")\n\
snippet filesha256\n\
	filesha256(\"${1}\")\n\
snippet md5\n\
	md5(\"${1}\")\n\
snippet rsadecrypt\n\
	rsadecrypt(\"${1}\")\n\
snippet sha1\n\
	sha1(\"${1}\")\n\
snippet sha256\n\
	sha256(\"${1}\")\n\
snippet sha512\n\
	sha512(\"${1}\")\n\
snippet uuid\n\
	uuid()\n\
snippet uuidv5\n\
	uuidv5(\"${1}\", \"${2}\")\n\
snippet cidrhost\n\
	cidrhost(\"${1}\", ${2})\n\
snippet cidrnetmask\n\
	cidrnetmask(\"${1}\")\n\
snippet cidrsubnet\n\
	cidrsubnet(\"${1}\", ${2}, ${3})\n\
snippet cidrsubnets\n\
	cidrsubnets(\"${1}\", ${2})\n\
snippet can\n\
	can(${1})\n\
snippet defaults\n\
	defaults(${1}, ${2})\n\
snippet tobool\n\
	tobool(${1})\n\
snippet tolist\n\
	tolist([${1}])\n\
snippet tomap\n\
	tomap({${1}})\n\
snippet tonumber\n\
	tonumber(${1})\n\
snippet toset\n\
	toset([${1}])\n\
snippet tostring\n\
	tostring(${1})\n\
snippet try\n\
	try(${1}, ${2})\n\
\n\
# heredoc\n\
snippet <<EOT\n\
	<<EOT\n\
	${1}\n\
	EOT\n\
# count\n\
snippet count\n\
	count =\n\
snippet for\n\
	for ${1} in ${2} : ${3}\n\
snippet dynamic\n\
	dynamic \"${1}\" {\n\
		${2}\n\
	}\n\
snippet provisioner\n\
	provisioner \"${1}\" {\n\
		${2}\n\
	}\n\
\n\
\n\
\n\
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
            