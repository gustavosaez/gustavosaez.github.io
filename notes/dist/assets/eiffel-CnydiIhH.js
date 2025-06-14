function u(e) {
  for (var r = {}, n = 0, t = e.length; n < t; ++n) r[e[n]] = true;
  return r;
}
var l = u(["note", "across", "when", "variant", "until", "unique", "undefine", "then", "strip", "select", "retry", "rescue", "require", "rename", "reference", "redefine", "prefix", "once", "old", "obsolete", "loop", "local", "like", "is", "inspect", "infix", "include", "if", "frozen", "from", "external", "export", "ensure", "end", "elseif", "else", "do", "creation", "create", "check", "alias", "agent", "separate", "invariant", "inherit", "indexing", "feature", "expanded", "deferred", "class", "Void", "True", "Result", "Precursor", "False", "Current", "create", "attached", "detachable", "as", "and", "implies", "not", "or"]), c = u([":=", "and then", "and", "or", "<<", ">>"]);
function f(e, r, n) {
  return n.tokenize.push(e), e(r, n);
}
function s(e, r) {
  if (e.eatSpace()) return null;
  var n = e.next();
  return n == '"' || n == "'" ? f(p(n, "string"), e, r) : n == "-" && e.eat("-") ? (e.skipToEnd(), "comment") : n == ":" && e.eat("=") ? "operator" : /[0-9]/.test(n) ? (e.eatWhile(/[xXbBCc0-9\.]/), e.eat(/[\?\!]/), "variable") : /[a-zA-Z_0-9]/.test(n) ? (e.eatWhile(/[a-zA-Z_0-9]/), e.eat(/[\?\!]/), "variable") : /[=+\-\/*^%<>~]/.test(n) ? (e.eatWhile(/[=+\-\/*^%<>~]/), "operator") : null;
}
function p(e, r, n) {
  return function(t, o) {
    for (var a = false, i; (i = t.next()) != null; ) {
      if (i == e && !a) {
        o.tokenize.pop();
        break;
      }
      a = !a && i == "%";
    }
    return r;
  };
}
const d = { name: "eiffel", startState: function() {
  return { tokenize: [s] };
}, token: function(e, r) {
  var n = r.tokenize[r.tokenize.length - 1](e, r);
  if (n == "variable") {
    var t = e.current();
    n = l.propertyIsEnumerable(e.current()) ? "keyword" : c.propertyIsEnumerable(e.current()) ? "operator" : /^[A-Z][A-Z_0-9]*$/g.test(t) ? "tag" : /^0[bB][0-1]+$/g.test(t) || /^0[cC][0-7]+$/g.test(t) || /^0[xX][a-fA-F0-9]+$/g.test(t) || /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(t) || /^[0-9]+$/g.test(t) ? "number" : "variable";
  }
  return n;
}, languageData: { commentTokens: { line: "--" } } };
export {
  d as eiffel
};
