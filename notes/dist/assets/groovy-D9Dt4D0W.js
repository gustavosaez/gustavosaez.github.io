function a(e) {
  for (var n = {}, t = e.split(" "), i = 0; i < t.length; ++i) n[t[i]] = true;
  return n;
}
var b = a("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"), g = a("catch class def do else enum finally for if interface switch trait try while"), x = a("return break continue"), z = a("null true false this"), r;
function k(e, n) {
  var t = e.next();
  if (t == '"' || t == "'") return y(t, e, n);
  if (/[\[\]{}\(\),;\:\.]/.test(t)) return r = t, null;
  if (/\d/.test(t)) return e.eatWhile(/[\w\.]/), e.eat(/eE/) && (e.eat(/\+\-/), e.eatWhile(/\d/)), "number";
  if (t == "/") {
    if (e.eat("*")) return n.tokenize.push(v), v(e, n);
    if (e.eat("/")) return e.skipToEnd(), "comment";
    if (h(n.lastToken, false)) return y(t, e, n);
  }
  if (t == "-" && e.eat(">")) return r = "->", null;
  if (/[+\-*&%=<>!?|\/~]/.test(t)) return e.eatWhile(/[+\-*&%=<>|~]/), "operator";
  if (e.eatWhile(/[\w\$_]/), t == "@") return e.eatWhile(/[\w\$_\.]/), "meta";
  if (n.lastToken == ".") return "property";
  if (e.eat(":")) return r = "proplabel", "property";
  var i = e.current();
  return z.propertyIsEnumerable(i) ? "atom" : b.propertyIsEnumerable(i) ? (g.propertyIsEnumerable(i) ? r = "newstatement" : x.propertyIsEnumerable(i) && (r = "standalone"), "keyword") : "variable";
}
k.isBase = true;
function y(e, n, t) {
  var i = false;
  if (e != "/" && n.eat(e)) if (n.eat(e)) i = true;
  else return "string";
  function o(l, d) {
    for (var f = false, c, s = !i; (c = l.next()) != null; ) {
      if (c == e && !f) {
        if (!i) break;
        if (l.match(e + e)) {
          s = true;
          break;
        }
      }
      if (e == '"' && c == "$" && !f) {
        if (l.eat("{")) return d.tokenize.push(m()), "string";
        if (l.match(/^\w/, false)) return d.tokenize.push(E), "string";
      }
      f = !f && c == "\\";
    }
    return s && d.tokenize.pop(), "string";
  }
  return t.tokenize.push(o), o(n, t);
}
function m() {
  var e = 1;
  function n(t, i) {
    if (t.peek() == "}") {
      if (e--, e == 0) return i.tokenize.pop(), i.tokenize[i.tokenize.length - 1](t, i);
    } else t.peek() == "{" && e++;
    return k(t, i);
  }
  return n.isBase = true, n;
}
function E(e, n) {
  var t = e.match(/^(\.|[\w\$_]+)/);
  return (!t || !e.match(t[0] == "." ? /^[\w$_]/ : /^\./)) && n.tokenize.pop(), t ? t[0] == "." ? null : "variable" : n.tokenize[n.tokenize.length - 1](e, n);
}
function v(e, n) {
  for (var t = false, i; i = e.next(); ) {
    if (i == "/" && t) {
      n.tokenize.pop();
      break;
    }
    t = i == "*";
  }
  return "comment";
}
function h(e, n) {
  return !e || e == "operator" || e == "->" || /[\.\[\{\(,;:]/.test(e) || e == "newstatement" || e == "keyword" || e == "proplabel" || e == "standalone" && !n;
}
function w(e, n, t, i, o) {
  this.indented = e, this.column = n, this.type = t, this.align = i, this.prev = o;
}
function p(e, n, t) {
  return e.context = new w(e.indented, n, t, null, e.context);
}
function u(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
const T = { name: "groovy", startState: function(e) {
  return { tokenize: [k], context: new w(-e, 0, "top", false), indented: 0, startOfLine: true, lastToken: null };
}, token: function(e, n) {
  var t = n.context;
  if (e.sol() && (t.align == null && (t.align = false), n.indented = e.indentation(), n.startOfLine = true, t.type == "statement" && !h(n.lastToken, true) && (u(n), t = n.context)), e.eatSpace()) return null;
  r = null;
  var i = n.tokenize[n.tokenize.length - 1](e, n);
  if (i == "comment") return i;
  if (t.align == null && (t.align = true), (r == ";" || r == ":") && t.type == "statement") u(n);
  else if (r == "->" && t.type == "statement" && t.prev.type == "}") u(n), n.context.align = false;
  else if (r == "{") p(n, e.column(), "}");
  else if (r == "[") p(n, e.column(), "]");
  else if (r == "(") p(n, e.column(), ")");
  else if (r == "}") {
    for (; t.type == "statement"; ) t = u(n);
    for (t.type == "}" && (t = u(n)); t.type == "statement"; ) t = u(n);
  } else r == t.type ? u(n) : (t.type == "}" || t.type == "top" || t.type == "statement" && r == "newstatement") && p(n, e.column(), "statement");
  return n.startOfLine = false, n.lastToken = r || i, i;
}, indent: function(e, n, t) {
  if (!e.tokenize[e.tokenize.length - 1].isBase) return null;
  var i = n && n.charAt(0), o = e.context;
  o.type == "statement" && !h(e.lastToken, true) && (o = o.prev);
  var l = i == o.type;
  return o.type == "statement" ? o.indented + (i == "{" ? 0 : t.unit) : o.align ? o.column + (l ? 0 : 1) : o.indented + (l ? 0 : t.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } }, closeBrackets: { brackets: ["(", "[", "{", "'", '"', "'''", '"""'] } } };
export {
  T as groovy
};
