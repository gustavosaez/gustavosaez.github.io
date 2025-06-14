var r;
function p(e) {
  return new RegExp("^(?:" + e.join("|") + ")$", "i");
}
p([]);
var d = p(["@prefix", "@base", "a"]), f = /[*+\-<>=&|]/;
function x(e, n) {
  var t = e.next();
  if (r = null, t == "<" && !e.match(/^[\s\u00a0=]/, false)) return e.match(/^[^\s\u00a0>]*>?/), "atom";
  if (t == '"' || t == "'") return n.tokenize = v(t), n.tokenize(e, n);
  if (/[{}\(\),\.;\[\]]/.test(t)) return r = t, null;
  if (t == "#") return e.skipToEnd(), "comment";
  if (f.test(t)) return e.eatWhile(f), null;
  if (t == ":") return "operator";
  if (e.eatWhile(/[_\w\d]/), e.peek() == ":") return "variableName.special";
  var i = e.current();
  return d.test(i) ? "meta" : t >= "A" && t <= "Z" ? "comment" : "keyword";
  var i = e.current();
}
function v(e) {
  return function(n, t) {
    for (var i = false, o; (o = n.next()) != null; ) {
      if (o == e && !i) {
        t.tokenize = x;
        break;
      }
      i = !i && o == "\\";
    }
    return "string";
  };
}
function l(e, n, t) {
  e.context = { prev: e.context, indent: e.indent, col: t, type: n };
}
function c(e) {
  e.indent = e.context.indent, e.context = e.context.prev;
}
const g = { name: "turtle", startState: function() {
  return { tokenize: x, context: null, indent: 0, col: 0 };
}, token: function(e, n) {
  if (e.sol() && (n.context && n.context.align == null && (n.context.align = false), n.indent = e.indentation()), e.eatSpace()) return null;
  var t = n.tokenize(e, n);
  if (t != "comment" && n.context && n.context.align == null && n.context.type != "pattern" && (n.context.align = true), r == "(") l(n, ")", e.column());
  else if (r == "[") l(n, "]", e.column());
  else if (r == "{") l(n, "}", e.column());
  else if (/[\]\}\)]/.test(r)) {
    for (; n.context && n.context.type == "pattern"; ) c(n);
    n.context && r == n.context.type && c(n);
  } else r == "." && n.context && n.context.type == "pattern" ? c(n) : /atom|string|variable/.test(t) && n.context && (/[\}\]]/.test(n.context.type) ? l(n, "pattern", e.column()) : n.context.type == "pattern" && !n.context.align && (n.context.align = true, n.context.col = e.column()));
  return t;
}, indent: function(e, n, t) {
  var i = n && n.charAt(0), o = e.context;
  if (/[\]\}]/.test(i)) for (; o && o.type == "pattern"; ) o = o.prev;
  var u = o && i == o.type;
  return o ? o.type == "pattern" ? o.col : o.align ? o.col + (u ? 0 : 1) : o.indent + (u ? 0 : t.unit) : 0;
}, languageData: { commentTokens: { line: "#" } } };
export {
  g as turtle
};
