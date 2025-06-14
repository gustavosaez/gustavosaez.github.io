function c(n) {
  for (var e = {}, t = 0; t < n.length; t++) e[n[t]] = true;
  return e;
}
var l = c(["_", "var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "open", "public", "internal", "fileprivate", "private", "deinit", "init", "new", "override", "self", "subscript", "super", "convenience", "dynamic", "final", "indirect", "lazy", "required", "static", "unowned", "unowned(safe)", "unowned(unsafe)", "weak", "as", "is", "break", "case", "continue", "default", "else", "fallthrough", "for", "guard", "if", "in", "repeat", "switch", "where", "while", "defer", "return", "inout", "mutating", "nonmutating", "isolated", "nonisolated", "catch", "do", "rethrows", "throw", "throws", "async", "await", "try", "didSet", "get", "set", "willSet", "assignment", "associativity", "infix", "left", "none", "operator", "postfix", "precedence", "precedencegroup", "prefix", "right", "Any", "AnyObject", "Type", "dynamicType", "Self", "Protocol", "__COLUMN__", "__FILE__", "__FUNCTION__", "__LINE__"]), p = c(["var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "for"]), d = c(["true", "false", "nil", "self", "super", "_"]), v = c(["Array", "Bool", "Character", "Dictionary", "Double", "Float", "Int", "Int8", "Int16", "Int32", "Int64", "Never", "Optional", "Set", "String", "UInt8", "UInt16", "UInt32", "UInt64", "Void"]), h = "+-/*%=|&<>~^?!", _ = ":;,.(){}[]", s = /^\-?0b[01][01_]*/, k = /^\-?0o[0-7][0-7_]*/, x = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/, y = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/, g = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/, w = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/, z = /^\#[A-Za-z]+/, b = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
function f(n, e, t) {
  if (n.sol() && (e.indented = n.indentation()), n.eatSpace()) return null;
  var i = n.peek();
  if (i == "/") {
    if (n.match("//")) return n.skipToEnd(), "comment";
    if (n.match("/*")) return e.tokenize.push(a), a(n, e);
  }
  if (n.match(z)) return "builtin";
  if (n.match(b)) return "attribute";
  if (n.match(s) || n.match(k) || n.match(x) || n.match(y)) return "number";
  if (n.match(w)) return "property";
  if (h.indexOf(i) > -1) return n.next(), "operator";
  if (_.indexOf(i) > -1) return n.next(), n.match(".."), "punctuation";
  var r;
  if (r = n.match(/("""|"|')/)) {
    var o = I.bind(null, r[0]);
    return e.tokenize.push(o), o(n, e);
  }
  if (n.match(g)) {
    var u = n.current();
    return v.hasOwnProperty(u) ? "type" : d.hasOwnProperty(u) ? "atom" : l.hasOwnProperty(u) ? (p.hasOwnProperty(u) && (e.prev = "define"), "keyword") : t == "define" ? "def" : "variable";
  }
  return n.next(), null;
}
function A() {
  var n = 0;
  return function(e, t, i) {
    var r = f(e, t, i);
    if (r == "punctuation") {
      if (e.current() == "(") ++n;
      else if (e.current() == ")") {
        if (n == 0) return e.backUp(1), t.tokenize.pop(), t.tokenize[t.tokenize.length - 1](e, t);
        --n;
      }
    }
    return r;
  };
}
function I(n, e, t) {
  for (var i = n.length == 1, r, o = false; r = e.peek(); ) if (o) {
    if (e.next(), r == "(") return t.tokenize.push(A()), "string";
    o = false;
  } else {
    if (e.match(n)) return t.tokenize.pop(), "string";
    e.next(), o = r == "\\";
  }
  return i && t.tokenize.pop(), "string";
}
function a(n, e) {
  for (var t; t = n.next(); ) if (t === "/" && n.eat("*")) e.tokenize.push(a);
  else if (t === "*" && n.eat("/")) {
    e.tokenize.pop();
    break;
  }
  return "comment";
}
function O(n, e, t) {
  this.prev = n, this.align = e, this.indented = t;
}
function m(n, e) {
  var t = e.match(/^\s*($|\/[\/\*]|[)}\]])/, false) ? null : e.column() + 1;
  n.context = new O(n.context, t, n.indented);
}
function S(n) {
  n.context && (n.indented = n.context.indented, n.context = n.context.prev);
}
const C = { name: "swift", startState: function() {
  return { prev: null, context: null, indented: 0, tokenize: [] };
}, token: function(n, e) {
  var t = e.prev;
  e.prev = null;
  var i = e.tokenize[e.tokenize.length - 1] || f, r = i(n, e, t);
  if (!r || r == "comment" ? e.prev = t : e.prev || (e.prev = r), r == "punctuation") {
    var o = /[\(\[\{]|([\]\)\}])/.exec(n.current());
    o && (o[1] ? S : m)(e, n);
  }
  return r;
}, indent: function(n, e, t) {
  var i = n.context;
  if (!i) return 0;
  var r = /^[\]\}\)]/.test(e);
  return i.align != null ? i.align - (r ? 1 : 0) : i.indented + (r ? 0 : t.unit);
}, languageData: { indentOnInput: /^\s*[\)\}\]]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } }, closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] } } };
export {
  C as swift
};
