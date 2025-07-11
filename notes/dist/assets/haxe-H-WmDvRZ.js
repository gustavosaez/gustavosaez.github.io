function o(e) {
  return { type: e, style: "keyword" };
}
var P = o("keyword a"), W = o("keyword b"), g = o("keyword c"), K = o("operator"), z = { type: "atom", style: "atom" }, y = { type: "attribute", style: "attribute" }, c = o("typedef"), B = { if: P, while: P, else: W, do: W, try: W, return: g, break: g, continue: g, new: g, throw: g, var: o("var"), inline: y, static: y, using: o("import"), public: y, private: y, cast: o("cast"), import: o("import"), macro: o("macro"), function: o("function"), catch: o("catch"), untyped: o("untyped"), callback: o("cb"), for: o("for"), switch: o("switch"), case: o("case"), default: o("default"), in: K, never: o("property_access"), trace: o("trace"), class: c, abstract: c, enum: c, interface: c, typedef: c, extends: c, implements: c, dynamic: c, true: z, false: z, null: z }, E = /[+\-*&%=<>!?|]/;
function I(e, r, n) {
  return r.tokenize = n, n(e, r);
}
function L(e, r) {
  for (var n = false, i; (i = e.next()) != null; ) {
    if (i == r && !n) return true;
    n = !n && i == "\\";
  }
}
var c, N;
function p(e, r, n) {
  return c = e, N = n, r;
}
function A(e, r) {
  var n = e.next();
  if (n == '"' || n == "'") return I(e, r, M(n));
  if (/[\[\]{}\(\),;\:\.]/.test(n)) return p(n);
  if (n == "0" && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i), p("number", "number");
  if (/\d/.test(n) || n == "-" && e.eat(/\d/)) return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/), p("number", "number");
  if (r.reAllowed && n == "~" && e.eat(/\//)) return L(e, "/"), e.eatWhile(/[gimsu]/), p("regexp", "string.special");
  if (n == "/") return e.eat("*") ? I(e, r, Q) : e.eat("/") ? (e.skipToEnd(), p("comment", "comment")) : (e.eatWhile(E), p("operator", null, e.current()));
  if (n == "#") return e.skipToEnd(), p("conditional", "meta");
  if (n == "@") return e.eat(/:/), e.eatWhile(/[\w_]/), p("metadata", "meta");
  if (E.test(n)) return e.eatWhile(E), p("operator", null, e.current());
  var i;
  if (/[A-Z]/.test(n)) return e.eatWhile(/[\w_<>]/), i = e.current(), p("type", "type", i);
  e.eatWhile(/[\w_]/);
  var i = e.current(), u = B.propertyIsEnumerable(i) && B[i];
  return u && r.kwAllowed ? p(u.type, u.style, i) : p("variable", "variable", i);
}
function M(e) {
  return function(r, n) {
    return L(r, e) && (n.tokenize = A), p("string", "string");
  };
}
function Q(e, r) {
  for (var n = false, i; i = e.next(); ) {
    if (i == "/" && n) {
      r.tokenize = A;
      break;
    }
    n = i == "*";
  }
  return p("comment", "comment");
}
var $ = { atom: true, number: true, variable: true, string: true, regexp: true };
function j(e, r, n, i, u, s) {
  this.indented = e, this.column = r, this.type = n, this.prev = u, this.info = s, i != null && (this.align = i);
}
function R(e, r) {
  for (var n = e.localVars; n; n = n.next) if (n.name == r) return true;
}
function X(e, r, n, i, u) {
  var s = e.cc;
  for (a.state = e, a.stream = u, a.marked = null, a.cc = s, e.lexical.hasOwnProperty("align") || (e.lexical.align = true); ; ) {
    var k = s.length ? s.pop() : x;
    if (k(n, i)) {
      for (; s.length && s[s.length - 1].lex; ) s.pop()();
      return a.marked ? a.marked : n == "variable" && R(e, i) ? "variableName.local" : n == "variable" && Y(e, i) ? "variableName.special" : r;
    }
  }
}
function Y(e, r) {
  if (/[a-z]/.test(r.charAt(0))) return false;
  for (var n = e.importedtypes.length, i = 0; i < n; i++) if (e.importedtypes[i] == r) return true;
}
function F(e) {
  for (var r = a.state, n = r.importedtypes; n; n = n.next) if (n.name == e) return;
  r.importedtypes = { name: e, next: r.importedtypes };
}
var a = { state: null, marked: null, cc: null };
function b() {
  for (var e = arguments.length - 1; e >= 0; e--) a.cc.push(arguments[e]);
}
function t() {
  return b.apply(null, arguments), true;
}
function H(e, r) {
  for (var n = r; n; n = n.next) if (n.name == e) return true;
  return false;
}
function S(e) {
  var r = a.state;
  if (r.context) {
    if (a.marked = "def", H(e, r.localVars)) return;
    r.localVars = { name: e, next: r.localVars };
  } else if (r.globalVars) {
    if (H(e, r.globalVars)) return;
    r.globalVars = { name: e, next: r.globalVars };
  }
}
var ee = { name: "this", next: null };
function D() {
  a.state.context || (a.state.localVars = ee), a.state.context = { prev: a.state.context, vars: a.state.localVars };
}
function V() {
  a.state.localVars = a.state.context.vars, a.state.context = a.state.context.prev;
}
V.lex = true;
function l(e, r) {
  var n = function() {
    var i = a.state;
    i.lexical = new j(i.indented, a.stream.column(), e, null, i.lexical, r);
  };
  return n.lex = true, n;
}
function f() {
  var e = a.state;
  e.lexical.prev && (e.lexical.type == ")" && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev);
}
f.lex = true;
function d(e) {
  function r(n) {
    return n == e ? t() : e == ";" ? b() : t(r);
  }
  return r;
}
function x(e) {
  return e == "@" ? t(Z) : e == "var" ? t(l("vardef"), C, d(";"), f) : e == "keyword a" ? t(l("form"), h, x, f) : e == "keyword b" ? t(l("form"), x, f) : e == "{" ? t(l("}"), D, _, f, V) : e == ";" ? t() : e == "attribute" ? t(U) : e == "function" ? t(w) : e == "for" ? t(l("form"), d("("), l(")"), ae, d(")"), f, x, f) : e == "variable" ? t(l("stat"), te) : e == "switch" ? t(l("form"), h, l("}", "switch"), d("{"), _, f, f) : e == "case" ? t(h, d(":")) : e == "default" ? t(d(":")) : e == "catch" ? t(l("form"), D, d("("), J, d(")"), x, f, V) : e == "import" ? t(q, d(";")) : e == "typedef" ? t(ne) : b(l("stat"), h, d(";"), f);
}
function h(e) {
  return $.hasOwnProperty(e) || e == "type" ? t(v) : e == "function" ? t(w) : e == "keyword c" ? t(O) : e == "(" ? t(l(")"), O, d(")"), f, v) : e == "operator" ? t(h) : e == "[" ? t(l("]"), m(O, "]"), f, v) : e == "{" ? t(l("}"), m(ue, "}"), f, v) : t();
}
function O(e) {
  return e.match(/[;\}\)\],]/) ? b() : b(h);
}
function v(e, r) {
  if (e == "operator" && /\+\+|--/.test(r)) return t(v);
  if (e == "operator" || e == ":") return t(h);
  if (e != ";") {
    if (e == "(") return t(l(")"), m(h, ")"), f, v);
    if (e == ".") return t(ie, v);
    if (e == "[") return t(l("]"), h, d("]"), f, v);
  }
}
function U(e) {
  if (e == "attribute") return t(U);
  if (e == "function") return t(w);
  if (e == "var") return t(C);
}
function Z(e) {
  if (e == ":" || e == "variable") return t(Z);
  if (e == "(") return t(l(")"), m(re, ")"), f, x);
}
function re(e) {
  if (e == "variable") return t();
}
function q(e, r) {
  if (e == "variable" && /[A-Z]/.test(r.charAt(0))) return F(r), t();
  if (e == "variable" || e == "property" || e == "." || r == "*") return t(q);
}
function ne(e, r) {
  if (e == "variable" && /[A-Z]/.test(r.charAt(0))) return F(r), t();
  if (e == "type" && /[A-Z]/.test(r.charAt(0))) return t();
}
function te(e) {
  return e == ":" ? t(f, x) : b(v, d(";"), f);
}
function ie(e) {
  if (e == "variable") return a.marked = "property", t();
}
function ue(e) {
  if (e == "variable" && (a.marked = "property"), $.hasOwnProperty(e)) return t(d(":"), h);
}
function m(e, r) {
  function n(i) {
    return i == "," ? t(e, n) : i == r ? t() : t(d(r));
  }
  return function(i) {
    return i == r ? t() : b(e, n);
  };
}
function _(e) {
  return e == "}" ? t() : b(x, _);
}
function C(e, r) {
  return e == "variable" ? (S(r), t(T, G)) : t();
}
function G(e, r) {
  if (r == "=") return t(h, G);
  if (e == ",") return t(C);
}
function ae(e, r) {
  return e == "variable" ? (S(r), t(fe, h)) : b();
}
function fe(e, r) {
  if (r == "in") return t();
}
function w(e, r) {
  if (e == "variable" || e == "type") return S(r), t(w);
  if (r == "new") return t(w);
  if (e == "(") return t(l(")"), D, m(J, ")"), f, T, x, V);
}
function T(e) {
  if (e == ":") return t(oe);
}
function oe(e) {
  if (e == "type" || e == "variable") return t();
  if (e == "{") return t(l("}"), m(le, "}"), f);
}
function le(e) {
  if (e == "variable") return t(T);
}
function J(e, r) {
  if (e == "variable") return S(r), t(T);
}
const ce = { name: "haxe", startState: function(e) {
  var r = ["Int", "Float", "String", "Void", "Std", "Bool", "Dynamic", "Array"], n = { tokenize: A, reAllowed: true, kwAllowed: true, cc: [], lexical: new j(-e, 0, "block", false), importedtypes: r, context: null, indented: 0 };
  return n;
}, token: function(e, r) {
  if (e.sol() && (r.lexical.hasOwnProperty("align") || (r.lexical.align = false), r.indented = e.indentation()), e.eatSpace()) return null;
  var n = r.tokenize(e, r);
  return c == "comment" ? n : (r.reAllowed = !!(c == "operator" || c == "keyword c" || c.match(/^[\[{}\(,;:]$/)), r.kwAllowed = c != ".", X(r, n, c, N, e));
}, indent: function(e, r, n) {
  if (e.tokenize != A) return 0;
  var i = r && r.charAt(0), u = e.lexical;
  u.type == "stat" && i == "}" && (u = u.prev);
  var s = u.type, k = i == s;
  return s == "vardef" ? u.indented + 4 : s == "form" && i == "{" ? u.indented : s == "stat" || s == "form" ? u.indented + n.unit : u.info == "switch" && !k ? u.indented + (/^(?:case|default)\b/.test(r) ? n.unit : 2 * n.unit) : u.align ? u.column + (k ? 0 : 1) : u.indented + (k ? 0 : n.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } } } }, se = { name: "hxml", startState: function() {
  return { define: false, inString: false };
}, token: function(e, r) {
  var u = e.peek(), n = e.sol();
  if (u == "#") return e.skipToEnd(), "comment";
  if (n && u == "-") {
    var i = "variable-2";
    return e.eat(/-/), e.peek() == "-" && (e.eat(/-/), i = "keyword a"), e.peek() == "D" && (e.eat(/[D]/), i = "keyword c", r.define = true), e.eatWhile(/[A-Z]/i), i;
  }
  var u = e.peek();
  return r.inString == false && u == "'" && (r.inString = true, e.next()), r.inString == true ? (e.skipTo("'") || e.skipToEnd(), e.peek() == "'" && (e.next(), r.inString = false), "string") : (e.next(), null);
}, languageData: { commentTokens: { line: "#" } } };
export {
  ce as haxe,
  se as hxml
};
