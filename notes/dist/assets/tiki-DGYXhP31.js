function c(e, t, n) {
  return function(r, a) {
    for (; !r.eol(); ) {
      if (r.match(t)) {
        a.tokenize = o;
        break;
      }
      r.next();
    }
    return n && (a.tokenize = n), e;
  };
}
function f(e) {
  return function(t, n) {
    for (; !t.eol(); ) t.next();
    return n.tokenize = o, e;
  };
}
function o(e, t) {
  function n(p) {
    return t.tokenize = p, p(e, t);
  }
  var r = e.sol(), a = e.next();
  switch (a) {
    case "{":
      return e.eat("/"), e.eatSpace(), e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/), t.tokenize = h, "tag";
    case "_":
      if (e.eat("_")) return n(c("strong", "__", o));
      break;
    case "'":
      if (e.eat("'")) return n(c("em", "''", o));
      break;
    case "(":
      if (e.eat("(")) return n(c("link", "))", o));
      break;
    case "[":
      return n(c("url", "]", o));
    case "|":
      if (e.eat("|")) return n(c("comment", "||"));
      break;
    case "-":
      if (e.eat("=")) return n(c("header string", "=-", o));
      if (e.eat("-")) return n(c("error tw-deleted", "--", o));
      break;
    case "=":
      if (e.match("==")) return n(c("tw-underline", "===", o));
      break;
    case ":":
      if (e.eat(":")) return n(c("comment", "::"));
      break;
    case "^":
      return n(c("tw-box", "^"));
    case "~":
      if (e.match("np~")) return n(c("meta", "~/np~"));
      break;
  }
  if (r) switch (a) {
    case "!":
      return e.match("!!!!!") || e.match("!!!!") || e.match("!!!") || e.match("!!"), n(f("header string"));
    case "*":
    case "#":
    case "+":
      return n(f("tw-listitem bracket"));
  }
  return null;
}
var g, s;
function h(e, t) {
  var n = e.next(), r = e.peek();
  return n == "}" ? (t.tokenize = o, "tag") : n == "(" || n == ")" ? "bracket" : n == "=" ? (s = "equals", r == ">" && (e.next(), r = e.peek()), /[\'\"]/.test(r) || (t.tokenize = z()), "operator") : /[\'\"]/.test(n) ? (t.tokenize = w(n), t.tokenize(e, t)) : (e.eatWhile(/[^\s\u00a0=\"\'\/?]/), "keyword");
}
function w(e) {
  return function(t, n) {
    for (; !t.eol(); ) if (t.next() == e) {
      n.tokenize = h;
      break;
    }
    return "string";
  };
}
function z() {
  return function(e, t) {
    for (; !e.eol(); ) {
      var n = e.next(), r = e.peek();
      if (n == " " || n == "," || /[ )}]/.test(r)) {
        t.tokenize = h;
        break;
      }
    }
    return "string";
  };
}
var i, l;
function k() {
  for (var e = arguments.length - 1; e >= 0; e--) i.cc.push(arguments[e]);
}
function u() {
  return k.apply(null, arguments), true;
}
function b(e, t) {
  var n = i.context && i.context.noIndent;
  i.context = { prev: i.context, pluginName: e, indent: i.indented, startOfLine: t, noIndent: n };
}
function x() {
  i.context && (i.context = i.context.prev);
}
function L(e) {
  if (e == "openPlugin") return i.pluginName = g, u(d, N(i.startOfLine));
  if (e == "closePlugin") {
    var t = false;
    return i.context ? (t = i.context.pluginName != g, x()) : t = true, t && (l = "error"), u(P(t));
  } else return e == "string" && ((!i.context || i.context.name != "!cdata") && b("!cdata"), i.tokenize == o && x()), u();
}
function N(e) {
  return function(t) {
    return t == "selfclosePlugin" || t == "endPlugin" || t == "endPlugin" && b(i.pluginName, e), u();
  };
}
function P(e) {
  return function(t) {
    return e && (l = "error"), t == "endPlugin" ? u() : k();
  };
}
function d(e) {
  return e == "keyword" ? (l = "attribute", u(d)) : e == "equals" ? u(O, d) : k();
}
function O(e) {
  return e == "keyword" ? (l = "string", u()) : e == "string" ? u(v) : k();
}
function v(e) {
  return e == "string" ? u(v) : k();
}
const S = { name: "tiki", startState: function() {
  return { tokenize: o, cc: [], indented: 0, startOfLine: true, pluginName: null, context: null };
}, token: function(e, t) {
  if (e.sol() && (t.startOfLine = true, t.indented = e.indentation()), e.eatSpace()) return null;
  l = s = g = null;
  var n = t.tokenize(e, t);
  if ((n || s) && n != "comment") for (i = t; ; ) {
    var r = t.cc.pop() || L;
    if (r(s || n)) break;
  }
  return t.startOfLine = false, l || n;
}, indent: function(e, t, n) {
  var r = e.context;
  if (r && r.noIndent) return 0;
  for (r && /^{\//.test(t) && (r = r.prev); r && !r.startOfLine; ) r = r.prev;
  return r ? r.indent + n.unit : 0;
} };
export {
  S as tiki
};
