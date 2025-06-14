function l(n) {
  for (var e = {}, i = n.split(" "), r = 0; r < i.length; ++r) e[i[r]] = true;
  return e;
}
var f = l("if elsif else stop require"), p = l("true false not");
function t(n, e) {
  var i = n.next();
  if (i == "/" && n.eat("*")) return e.tokenize = o, o(n, e);
  if (i === "#") return n.skipToEnd(), "comment";
  if (i == '"') return e.tokenize = d(i), e.tokenize(n, e);
  if (i == "(") return e._indent.push("("), e._indent.push("{"), null;
  if (i === "{") return e._indent.push("{"), null;
  if (i == ")" && (e._indent.pop(), e._indent.pop()), i === "}") return e._indent.pop(), null;
  if (i == "," || i == ";" || /[{}\(\),;]/.test(i)) return null;
  if (/\d/.test(i)) return n.eatWhile(/[\d]/), n.eat(/[KkMmGg]/), "number";
  if (i == ":") return n.eatWhile(/[a-zA-Z_]/), n.eatWhile(/[a-zA-Z0-9_]/), "operator";
  n.eatWhile(/\w/);
  var r = n.current();
  return r == "text" && n.eat(":") ? (e.tokenize = k, "string") : f.propertyIsEnumerable(r) ? "keyword" : p.propertyIsEnumerable(r) ? "atom" : null;
}
function k(n, e) {
  return e._multiLineString = true, n.sol() ? (n.next() == "." && n.eol() && (e._multiLineString = false, e.tokenize = t), "string") : (n.eatSpace(), n.peek() == "#" ? (n.skipToEnd(), "comment") : (n.skipToEnd(), "string"));
}
function o(n, e) {
  for (var i = false, r; (r = n.next()) != null; ) {
    if (i && r == "/") {
      e.tokenize = t;
      break;
    }
    i = r == "*";
  }
  return "comment";
}
function d(n) {
  return function(e, i) {
    for (var r = false, u; (u = e.next()) != null && !(u == n && !r); ) r = !r && u == "\\";
    return r || (i.tokenize = t), "string";
  };
}
const c = { name: "sieve", startState: function(n) {
  return { tokenize: t, baseIndent: n || 0, _indent: [] };
}, token: function(n, e) {
  return n.eatSpace() ? null : (e.tokenize || t)(n, e);
}, indent: function(n, e, i) {
  var r = n._indent.length;
  return e && e[0] == "}" && r--, r < 0 && (r = 0), r * i.unit;
}, languageData: { indentOnInput: /^\s*\}$/ } };
export {
  c as sieve
};
