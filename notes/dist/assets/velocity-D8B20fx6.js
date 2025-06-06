function u(n) {
  for (var e = {}, i = n.split(" "), r = 0; r < i.length; ++r) e[i[r]] = true;
  return e;
}
var s = u("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"), a = u("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"), c = u("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"), k = /[+\-*&%=<>!?:\/|]/;
function o(n, e, i) {
  return e.tokenize = i, i(n, e);
}
function t(n, e) {
  var i = e.beforeParams;
  e.beforeParams = false;
  var r = n.next();
  if (r == "'" && !e.inString && e.inParams) return e.lastTokenWasBuiltin = false, o(n, e, p(r));
  if (r == '"') {
    if (e.lastTokenWasBuiltin = false, e.inString) return e.inString = false, "string";
    if (e.inParams) return o(n, e, p(r));
  } else {
    if (/[\[\]{}\(\),;\.]/.test(r)) return r == "(" && i ? e.inParams = true : r == ")" && (e.inParams = false, e.lastTokenWasBuiltin = true), null;
    if (/\d/.test(r)) return e.lastTokenWasBuiltin = false, n.eatWhile(/[\w\.]/), "number";
    if (r == "#" && n.eat("*")) return e.lastTokenWasBuiltin = false, o(n, e, h);
    if (r == "#" && n.match(/ *\[ *\[/)) return e.lastTokenWasBuiltin = false, o(n, e, b);
    if (r == "#" && n.eat("#")) return e.lastTokenWasBuiltin = false, n.skipToEnd(), "comment";
    if (r == "$") return n.eat("!"), n.eatWhile(/[\w\d\$_\.{}-]/), c && c.propertyIsEnumerable(n.current()) ? "keyword" : (e.lastTokenWasBuiltin = true, e.beforeParams = true, "builtin");
    if (k.test(r)) return e.lastTokenWasBuiltin = false, n.eatWhile(k), "operator";
    n.eatWhile(/[\w\$_{}@]/);
    var l = n.current();
    return s && s.propertyIsEnumerable(l) ? "keyword" : a && a.propertyIsEnumerable(l) || n.current().match(/^#@?[a-z0-9_]+ *$/i) && n.peek() == "(" && !(a && a.propertyIsEnumerable(l.toLowerCase())) ? (e.beforeParams = true, e.lastTokenWasBuiltin = false, "keyword") : e.inString ? (e.lastTokenWasBuiltin = false, "string") : n.pos > l.length && n.string.charAt(n.pos - l.length - 1) == "." && e.lastTokenWasBuiltin ? "builtin" : (e.lastTokenWasBuiltin = false, null);
  }
}
function p(n) {
  return function(e, i) {
    for (var r = false, l, f = false; (l = e.next()) != null; ) {
      if (l == n && !r) {
        f = true;
        break;
      }
      if (n == '"' && e.peek() == "$" && !r) {
        i.inString = true, f = true;
        break;
      }
      r = !r && l == "\\";
    }
    return f && (i.tokenize = t), "string";
  };
}
function h(n, e) {
  for (var i = false, r; r = n.next(); ) {
    if (r == "#" && i) {
      e.tokenize = t;
      break;
    }
    i = r == "*";
  }
  return "comment";
}
function b(n, e) {
  for (var i = 0, r; r = n.next(); ) {
    if (r == "#" && i == 2) {
      e.tokenize = t;
      break;
    }
    r == "]" ? i++ : r != " " && (i = 0);
  }
  return "meta";
}
const W = { name: "velocity", startState: function() {
  return { tokenize: t, beforeParams: false, inParams: false, inString: false, lastTokenWasBuiltin: false };
}, token: function(n, e) {
  return n.eatSpace() ? null : e.tokenize(n, e);
}, languageData: { commentTokens: { line: "##", block: { open: "#*", close: "*#" } } } };
export {
  W as velocity
};
