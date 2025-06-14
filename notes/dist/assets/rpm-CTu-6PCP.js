var o = /^-+$/, a = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /, c = /^[\w+.-]+@[\w.-]+/;
const h = { name: "rpmchanges", token: function(r) {
  return r.sol() && (r.match(o) || r.match(a)) ? "tag" : r.match(c) ? "string" : (r.next(), null);
} };
var i = /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/, t = /^[a-zA-Z0-9()]+:/, l = /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/, p = /^%(ifnarch|ifarch|if)/, f = /^%(else|endif)/, u = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
const d = { name: "rpmspec", startState: function() {
  return { controlFlow: false, macroParameters: false, section: false };
}, token: function(r, e) {
  var n = r.peek();
  if (n == "#") return r.skipToEnd(), "comment";
  if (r.sol()) {
    if (r.match(t)) return "header";
    if (r.match(l)) return "atom";
  }
  if (r.match(/^\$\w+/) || r.match(/^\$\{\w+\}/)) return "def";
  if (r.match(f)) return "keyword";
  if (r.match(p)) return e.controlFlow = true, "keyword";
  if (e.controlFlow) {
    if (r.match(u)) return "operator";
    if (r.match(/^(\d+)/)) return "number";
    r.eol() && (e.controlFlow = false);
  }
  if (r.match(i)) return r.eol() && (e.controlFlow = false), "number";
  if (r.match(/^%[\w]+/)) return r.match("(") && (e.macroParameters = true), "keyword";
  if (e.macroParameters) {
    if (r.match(/^\d+/)) return "number";
    if (r.match(")")) return e.macroParameters = false, "keyword";
  }
  return r.match(/^%\{\??[\w \-\:\!]+\}/) ? (r.eol() && (e.controlFlow = false), "def") : (r.next(), null);
} };
export {
  h as rpmChanges,
  d as rpmSpec
};
