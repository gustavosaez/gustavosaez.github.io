function p(e, i) {
  for (var n = 0; n < e.length; n++) i(e[n], n);
}
function x(e, i) {
  for (var n = 0; n < e.length; n++) if (i(e[n], n)) return true;
  return false;
}
var t = { unnamedDefinition: ["interface"], namedDefinition: ["module", "library", "macro", "C-struct", "C-union", "C-function", "C-callable-wrapper"], typeParameterizedDefinition: ["class", "C-subtype", "C-mapped-subtype"], otherParameterizedDefinition: ["method", "function", "C-variable", "C-address"], constantSimpleDefinition: ["constant"], variableSimpleDefinition: ["variable"], otherSimpleDefinition: ["generic", "domain", "C-pointer-type", "table"], statement: ["if", "block", "begin", "method", "case", "for", "select", "when", "unless", "until", "while", "iterate", "profiling", "dynamic-bind"], separator: ["finally", "exception", "cleanup", "else", "elseif", "afterwards"], other: ["above", "below", "by", "from", "handler", "in", "instance", "let", "local", "otherwise", "slot", "subclass", "then", "to", "keyed-by", "virtual"], signalingCalls: ["signal", "error", "cerror", "break", "check-type", "abort"] };
t.otherDefinition = t.unnamedDefinition.concat(t.namedDefinition).concat(t.otherParameterizedDefinition);
t.definition = t.typeParameterizedDefinition.concat(t.otherDefinition);
t.parameterizedDefinition = t.typeParameterizedDefinition.concat(t.otherParameterizedDefinition);
t.simpleDefinition = t.constantSimpleDefinition.concat(t.variableSimpleDefinition).concat(t.otherSimpleDefinition);
t.keyword = t.statement.concat(t.separator).concat(t.other);
var f = "[-_a-zA-Z?!*@<>$%]+", v = new RegExp("^" + f), a = { symbolKeyword: f + ":", symbolClass: "<" + f + ">", symbolGlobal: "\\*" + f + "\\*", symbolConstant: "\\$" + f }, w = { symbolKeyword: "atom", symbolClass: "tag", symbolGlobal: "variableName.standard", symbolConstant: "variableName.constant" };
for (var c in a) a.hasOwnProperty(c) && (a[c] = new RegExp("^" + a[c]));
a.keyword = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
var u = {};
u.keyword = "keyword";
u.definition = "def";
u.simpleDefinition = "def";
u.signalingCalls = "builtin";
var y = {}, k = {};
p(["keyword", "definition", "simpleDefinition", "signalingCalls"], function(e) {
  p(t[e], function(i) {
    y[i] = e, k[i] = u[e];
  });
});
function d(e, i, n) {
  return i.tokenize = n, n(e, i);
}
function s(e, i) {
  var n = e.peek();
  if (n == "'" || n == '"') return e.next(), d(e, i, h(n, "string"));
  if (n == "/") {
    if (e.next(), e.eat("*")) return d(e, i, D);
    if (e.eat("/")) return e.skipToEnd(), "comment";
    e.backUp(1);
  } else if (/[+\-\d\.]/.test(n)) {
    if (e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || e.match(/^[+-]?\d+/)) return "number";
  } else {
    if (n == "#") return e.next(), n = e.peek(), n == '"' ? (e.next(), d(e, i, h('"', "string"))) : n == "b" ? (e.next(), e.eatWhile(/[01]/), "number") : n == "x" ? (e.next(), e.eatWhile(/[\da-f]/i), "number") : n == "o" ? (e.next(), e.eatWhile(/[0-7]/), "number") : n == "#" ? (e.next(), "punctuation") : n == "[" || n == "(" ? (e.next(), "bracket") : e.match(/f|t|all-keys|include|key|next|rest/i) ? "atom" : (e.eatWhile(/[-a-zA-Z]/), "error");
    if (n == "~") return e.next(), n = e.peek(), n == "=" ? (e.next(), n = e.peek(), n == "=" && e.next(), "operator") : "operator";
    if (n == ":") {
      if (e.next(), n = e.peek(), n == "=") return e.next(), "operator";
      if (n == ":") return e.next(), "punctuation";
    } else {
      if ("[](){}".indexOf(n) != -1) return e.next(), "bracket";
      if (".,".indexOf(n) != -1) return e.next(), "punctuation";
      if (e.match("end")) return "keyword";
    }
  }
  for (var l in a) if (a.hasOwnProperty(l)) {
    var r = a[l];
    if (r instanceof Array && x(r, function(o) {
      return e.match(o);
    }) || e.match(r)) return w[l];
  }
  return /[+\-*\/^=<>&|]/.test(n) ? (e.next(), "operator") : e.match("define") ? "def" : (e.eatWhile(/[\w\-]/), y.hasOwnProperty(e.current()) ? k[e.current()] : e.current().match(v) ? "variable" : (e.next(), "variableName.standard"));
}
function D(e, i) {
  for (var n = false, l = false, r = 0, o; o = e.next(); ) {
    if (o == "/" && n) if (r > 0) r--;
    else {
      i.tokenize = s;
      break;
    }
    else o == "*" && l && r++;
    n = o == "*", l = o == "/";
  }
  return "comment";
}
function h(e, i) {
  return function(n, l) {
    for (var r = false, o, b = false; (o = n.next()) != null; ) {
      if (o == e && !r) {
        b = true;
        break;
      }
      r = !r && o == "\\";
    }
    return (b || !r) && (l.tokenize = s), i;
  };
}
const g = { name: "dylan", startState: function() {
  return { tokenize: s, currentIndent: 0 };
}, token: function(e, i) {
  if (e.eatSpace()) return null;
  var n = i.tokenize(e, i);
  return n;
}, languageData: { commentTokens: { block: { open: "/*", close: "*/" } } } };
export {
  g as dylan
};
