function c(e) {
  for (var n = {}, t = e.split(" "), i = 0; i < t.length; ++i) n[t[i]] = true;
  return n;
}
var s = "body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";
const l = { keywords: c("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters " + s), blockKeywords: c(s), builtin: c("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"), atoms: c("exit failure success true false null"), hooks: { "@": function(e, n) {
  return e.eatWhile(/[\w\$_]/), "meta";
} } };
var w = l.statementIndentUnit, v = l.keywords, x = l.builtin, d = l.blockKeywords, g = l.atoms, p = l.hooks, _ = l.multiLineStrings, h = /[+\-*&%=<>!?|\/]/, o;
function m(e, n) {
  var t = e.next();
  if (p[t]) {
    var i = p[t](e, n);
    if (i !== false) return i;
  }
  if (t == '"' || t == "'" || t == "`") return n.tokenize = z(t), n.tokenize(e, n);
  if (/[\[\]{}\(\),;\:\.]/.test(t)) return o = t, null;
  if (/\d/.test(t)) return e.eatWhile(/[\w\.]/), "number";
  if (t == "/") {
    if (e.eat("+")) return n.tokenize = k, k(e, n);
    if (e.eat("*")) return n.tokenize = y, y(e, n);
    if (e.eat("/")) return e.skipToEnd(), "comment";
  }
  if (h.test(t)) return e.eatWhile(h), "operator";
  e.eatWhile(/[\w\$_\xa1-\uffff]/);
  var r = e.current();
  return v.propertyIsEnumerable(r) ? (d.propertyIsEnumerable(r) && (o = "newstatement"), "keyword") : x.propertyIsEnumerable(r) ? (d.propertyIsEnumerable(r) && (o = "newstatement"), "builtin") : g.propertyIsEnumerable(r) ? "atom" : "variable";
}
function z(e) {
  return function(n, t) {
    for (var i = false, r, u = false; (r = n.next()) != null; ) {
      if (r == e && !i) {
        u = true;
        break;
      }
      i = !i && r == "\\";
    }
    return (u || !(i || _)) && (t.tokenize = null), "string";
  };
}
function y(e, n) {
  for (var t = false, i; i = e.next(); ) {
    if (i == "/" && t) {
      n.tokenize = null;
      break;
    }
    t = i == "*";
  }
  return "comment";
}
function k(e, n) {
  for (var t = false, i; i = e.next(); ) {
    if (i == "/" && t) {
      n.tokenize = null;
      break;
    }
    t = i == "+";
  }
  return "comment";
}
function b(e, n, t, i, r) {
  this.indented = e, this.column = n, this.type = t, this.align = i, this.prev = r;
}
function f(e, n, t) {
  var i = e.indented;
  return e.context && e.context.type == "statement" && (i = e.context.indented), e.context = new b(i, n, t, null, e.context);
}
function a(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
const E = { name: "d", startState: function(e) {
  return { tokenize: null, context: new b(-e, 0, "top", false), indented: 0, startOfLine: true };
}, token: function(e, n) {
  var t = n.context;
  if (e.sol() && (t.align == null && (t.align = false), n.indented = e.indentation(), n.startOfLine = true), e.eatSpace()) return null;
  o = null;
  var i = (n.tokenize || m)(e, n);
  if (i == "comment" || i == "meta") return i;
  if (t.align == null && (t.align = true), (o == ";" || o == ":" || o == ",") && t.type == "statement") a(n);
  else if (o == "{") f(n, e.column(), "}");
  else if (o == "[") f(n, e.column(), "]");
  else if (o == "(") f(n, e.column(), ")");
  else if (o == "}") {
    for (; t.type == "statement"; ) t = a(n);
    for (t.type == "}" && (t = a(n)); t.type == "statement"; ) t = a(n);
  } else o == t.type ? a(n) : ((t.type == "}" || t.type == "top") && o != ";" || t.type == "statement" && o == "newstatement") && f(n, e.column(), "statement");
  return n.startOfLine = false, i;
}, indent: function(e, n, t) {
  if (e.tokenize != m && e.tokenize != null) return null;
  var i = e.context, r = n && n.charAt(0);
  i.type == "statement" && r == "}" && (i = i.prev);
  var u = r == i.type;
  return i.type == "statement" ? i.indented + (r == "{" ? 0 : w || t.unit) : i.align ? i.column + (u ? 0 : 1) : i.indented + (u ? 0 : t.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } } } };
export {
  E as d
};
