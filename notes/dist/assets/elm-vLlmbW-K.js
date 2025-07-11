function a(n, t, i) {
  return t(i), i(n, t);
}
var v = /[a-z]/, g = /[A-Z]/, l = /[a-zA-Z0-9_]/, f = /[0-9]/, o = /[0-9A-Fa-f]/, p = /[-&*+.\\/<>=?^|:]/, w = /[(),[\]{}]/, x = /[ \v\f]/;
function r() {
  return function(n, t) {
    if (n.eatWhile(x)) return null;
    var i = n.next();
    if (w.test(i)) return i === "{" && n.eat("-") ? a(n, t, h(1)) : i === "[" && n.match("glsl|") ? a(n, t, u) : "builtin";
    if (i === "'") return a(n, t, d);
    if (i === '"') return n.eat('"') ? n.eat('"') ? a(n, t, k) : "string" : a(n, t, E);
    if (g.test(i)) return n.eatWhile(l), "type";
    if (v.test(i)) {
      var e = n.pos === 1;
      return n.eatWhile(l), e ? "def" : "variable";
    }
    if (f.test(i)) {
      if (i === "0") {
        if (n.eat(/[xX]/)) return n.eatWhile(o), "number";
      } else n.eatWhile(f);
      return n.eat(".") && n.eatWhile(f), n.eat(/[eE]/) && (n.eat(/[-+]/), n.eatWhile(f)), "number";
    }
    return p.test(i) ? i === "-" && n.eat("-") ? (n.skipToEnd(), "comment") : (n.eatWhile(p), "keyword") : i === "_" ? "keyword" : "error";
  };
}
function h(n) {
  return n == 0 ? r() : function(t, i) {
    for (; !t.eol(); ) {
      var e = t.next();
      if (e == "{" && t.eat("-")) ++n;
      else if (e == "-" && t.eat("}") && (--n, n === 0)) return i(r()), "comment";
    }
    return i(h(n)), "comment";
  };
}
function k(n, t) {
  for (; !n.eol(); ) {
    var i = n.next();
    if (i === '"' && n.eat('"') && n.eat('"')) return t(r()), "string";
  }
  return "string";
}
function E(n, t) {
  for (; n.skipTo('\\"'); ) n.next(), n.next();
  return n.skipTo('"') ? (n.next(), t(r()), "string") : (n.skipToEnd(), t(r()), "error");
}
function d(n, t) {
  for (; n.skipTo("\\'"); ) n.next(), n.next();
  return n.skipTo("'") ? (n.next(), t(r()), "string") : (n.skipToEnd(), t(r()), "error");
}
function u(n, t) {
  for (; !n.eol(); ) {
    var i = n.next();
    if (i === "|" && n.eat("]")) return t(r()), "string";
  }
  return "string";
}
var y = { case: 1, of: 1, as: 1, if: 1, then: 1, else: 1, let: 1, in: 1, type: 1, alias: 1, module: 1, where: 1, import: 1, exposing: 1, port: 1 };
const W = { name: "elm", startState: function() {
  return { f: r() };
}, copyState: function(n) {
  return { f: n.f };
}, token: function(n, t) {
  var i = t.f(n, function(m) {
    t.f = m;
  }), e = n.current();
  return y.hasOwnProperty(e) ? "keyword" : i;
}, languageData: { commentTokens: { line: "--" } } };
export {
  W as elm
};
