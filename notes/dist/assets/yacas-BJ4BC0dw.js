function t(e) {
  for (var n = {}, r = e.split(" "), o = 0; o < r.length; ++o) n[r[o]] = true;
  return n;
}
var a = t("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"), f = "(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)", u = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)", p = new RegExp(f), d = new RegExp(u), k = new RegExp(u + "?_" + u), s = new RegExp(u + "\\s*\\(");
function l(e, n) {
  var r;
  if (r = e.next(), r === '"') return n.tokenize = v, n.tokenize(e, n);
  if (r === "/") {
    if (e.eat("*")) return n.tokenize = h, n.tokenize(e, n);
    if (e.eat("/")) return e.skipToEnd(), "comment";
  }
  e.backUp(1);
  var o = e.match(/^(\w+)\s*\(/, false);
  o !== null && a.hasOwnProperty(o[1]) && n.scopes.push("bodied");
  var i = c(n);
  if (i === "bodied" && r === "[" && n.scopes.pop(), (r === "[" || r === "{" || r === "(") && n.scopes.push(r), i = c(n), (i === "[" && r === "]" || i === "{" && r === "}" || i === "(" && r === ")") && n.scopes.pop(), r === ";") for (; i === "bodied"; ) n.scopes.pop(), i = c(n);
  return e.match(/\d+ *#/, true, false) ? "qualifier" : e.match(p, true, false) ? "number" : e.match(k, true, false) ? "variableName.special" : e.match(/(?:\[|\]|{|}|\(|\))/, true, false) ? "bracket" : e.match(s, true, false) ? (e.backUp(1), "variableName.function") : e.match(d, true, false) ? "variable" : e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/, true, false) ? "operator" : "error";
}
function v(e, n) {
  for (var r, o = false, i = false; (r = e.next()) != null; ) {
    if (r === '"' && !i) {
      o = true;
      break;
    }
    i = !i && r === "\\";
  }
  return o && !i && (n.tokenize = l), "string";
}
function h(e, n) {
  for (var r, o; (o = e.next()) != null; ) {
    if (r === "*" && o === "/") {
      n.tokenize = l;
      break;
    }
    r = o;
  }
  return "comment";
}
function c(e) {
  var n = null;
  return e.scopes.length > 0 && (n = e.scopes[e.scopes.length - 1]), n;
}
const b = { name: "yacas", startState: function() {
  return { tokenize: l, scopes: [] };
}, token: function(e, n) {
  return e.eatSpace() ? null : n.tokenize(e, n);
}, indent: function(e, n, r) {
  if (e.tokenize !== l && e.tokenize !== null) return null;
  var o = 0;
  return (n === "]" || n === "];" || n === "}" || n === "};" || n === ");") && (o = -1), (e.scopes.length + o) * r.unit;
}, languageData: { electricInput: /[{}\[\]()\;]/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } } } };
export {
  b as yacas
};
