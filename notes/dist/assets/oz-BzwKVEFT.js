function o(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
var k = /[\^@!\|<>#~\.\*\-\+\\/,=]/, s = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/, p = /(:::)|(\.\.\.)|(=<:)|(>=:)/, f = ["in", "then", "else", "of", "elseof", "elsecase", "elseif", "catch", "finally", "with", "require", "prepare", "import", "export", "define", "do"], l = ["end"], z = o(["true", "false", "nil", "unit"]), m = o(["andthen", "at", "attr", "declare", "feat", "from", "lex", "mod", "div", "mode", "orelse", "parser", "prod", "prop", "scanner", "self", "syn", "token"]), v = o(["local", "proc", "fun", "case", "class", "if", "cond", "or", "dis", "choice", "not", "thread", "try", "raise", "lock", "for", "suchthat", "meth", "functor"]), d = o(f), h = o(l);
function i(e, n) {
  if (e.eatSpace()) return null;
  if (e.match(/[{}]/)) return "bracket";
  if (e.match("[]")) return "keyword";
  if (e.match(p) || e.match(s)) return "operator";
  if (e.match(z)) return "atom";
  var t = e.match(v);
  if (t) return n.doInCurrentLine ? n.doInCurrentLine = false : n.currentIndent++, t[0] == "proc" || t[0] == "fun" ? n.tokenize = x : t[0] == "class" ? n.tokenize = g : t[0] == "meth" && (n.tokenize = w), "keyword";
  if (e.match(d) || e.match(m)) return "keyword";
  if (e.match(h)) return n.currentIndent--, "keyword";
  var r = e.next();
  if (r == '"' || r == "'") return n.tokenize = y(r), n.tokenize(e, n);
  if (/[~\d]/.test(r)) {
    if (r == "~") if (/^[0-9]/.test(e.peek())) {
      if (e.next() == "0" && e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)) return "number";
    } else return null;
    return r == "0" && e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/) ? "number" : null;
  }
  return r == "%" ? (e.skipToEnd(), "comment") : r == "/" && e.eat("*") ? (n.tokenize = a, a(e, n)) : k.test(r) ? "operator" : (e.eatWhile(/\w/), "variable");
}
function g(e, n) {
  return e.eatSpace() ? null : (e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/), n.tokenize = i, "type");
}
function w(e, n) {
  return e.eatSpace() ? null : (e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/), n.tokenize = i, "def");
}
function x(e, n) {
  return e.eatSpace() ? null : !n.hasPassedFirstStage && e.eat("{") ? (n.hasPassedFirstStage = true, "bracket") : n.hasPassedFirstStage ? (e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/), n.hasPassedFirstStage = false, n.tokenize = i, "def") : (n.tokenize = i, null);
}
function a(e, n) {
  for (var t = false, r; r = e.next(); ) {
    if (r == "/" && t) {
      n.tokenize = i;
      break;
    }
    t = r == "*";
  }
  return "comment";
}
function y(e) {
  return function(n, t) {
    for (var r = false, u, c = false; (u = n.next()) != null; ) {
      if (u == e && !r) {
        c = true;
        break;
      }
      r = !r && u == "\\";
    }
    return (c || !r) && (t.tokenize = i), "string";
  };
}
function b() {
  var e = f.concat(l);
  return new RegExp("[\\[\\]]|(" + e.join("|") + ")$");
}
const I = { name: "oz", startState: function() {
  return { tokenize: i, currentIndent: 0, doInCurrentLine: false, hasPassedFirstStage: false };
}, token: function(e, n) {
  return e.sol() && (n.doInCurrentLine = 0), n.tokenize(e, n);
}, indent: function(e, n, t) {
  var r = n.replace(/^\s+|\s+$/g, "");
  return r.match(h) || r.match(d) || r.match(/(\[])/) ? t.unit * (e.currentIndent - 1) : e.currentIndent < 0 ? 0 : e.currentIndent * t.unit;
}, languageData: { indentOnInut: b(), commentTokens: { line: "%", block: { open: "/*", close: "*/" } } } };
export {
  I as oz
};
