function t(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
var f = new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"), u = new RegExp("^[\\(\\[\\{\\},:=;\\.]"), a = new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"), l = new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"), c = new RegExp("^((>>=)|(<<=))"), p = new RegExp("^[\\]\\)]"), d = new RegExp("^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*"), s = t(["error", "eval", "function", "abs", "acos", "atan", "asin", "cos", "cosh", "exp", "log", "prod", "sum", "log10", "max", "min", "sign", "sin", "sinh", "sqrt", "tan", "reshape", "break", "zeros", "default", "margin", "round", "ones", "rand", "syn", "ceil", "floor", "size", "clear", "zeros", "eye", "mean", "std", "cov", "det", "eig", "inv", "norm", "rank", "trace", "expm", "logm", "sqrtm", "linspace", "plot", "title", "xlabel", "ylabel", "legend", "text", "grid", "meshgrid", "mesh", "num2str", "fft", "ifft", "arrayfun", "cellfun", "input", "fliplr", "flipud", "ismember"]), h = t(["return", "case", "switch", "else", "elseif", "end", "endif", "endfunction", "if", "otherwise", "do", "for", "while", "try", "catch", "classdef", "properties", "events", "methods", "global", "persistent", "endfor", "endwhile", "printf", "sprintf", "disp", "until", "continue", "pkg"]);
function o(e, n) {
  return !e.sol() && e.peek() === "'" ? (e.next(), n.tokenize = i, "operator") : (n.tokenize = i, i(e, n));
}
function m(e, n) {
  return e.match(/^.*%}/) ? (n.tokenize = i, "comment") : (e.skipToEnd(), "comment");
}
function i(e, n) {
  if (e.eatSpace()) return null;
  if (e.match("%{")) return n.tokenize = m, e.skipToEnd(), "comment";
  if (e.match(/^[%#]/)) return e.skipToEnd(), "comment";
  if (e.match(/^[0-9\.+-]/, false)) {
    if (e.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) return e.tokenize = i, "number";
    if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/) || e.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) return "number";
  }
  if (e.match(t(["nan", "NaN", "inf", "Inf"]))) return "number";
  var r = e.match(/^"(?:[^"]|"")*("|$)/) || e.match(/^'(?:[^']|'')*('|$)/);
  return r ? r[1] ? "string" : "error" : e.match(h) ? "keyword" : e.match(s) ? "builtin" : e.match(d) ? "variable" : e.match(f) || e.match(a) ? "operator" : e.match(u) || e.match(l) || e.match(c) ? null : e.match(p) ? (n.tokenize = o, null) : (e.next(), "error");
}
const g = { name: "octave", startState: function() {
  return { tokenize: i };
}, token: function(e, n) {
  var r = n.tokenize(e, n);
  return (r === "number" || r === "variable") && (n.tokenize = o), r;
}, languageData: { commentTokens: { line: "%" } } };
export {
  g as octave
};
