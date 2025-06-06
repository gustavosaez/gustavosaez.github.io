var k = "error";
function p(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
var g = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/, y = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/, h = /^[_A-Za-z$][_A-Za-z$0-9]*/, w = /^@[_A-Za-z$][_A-Za-z$0-9]*/, z = p(["and", "or", "not", "is", "isnt", "in", "instanceof", "typeof"]), l = ["for", "while", "loop", "if", "unless", "else", "switch", "try", "catch", "finally", "class"], a = ["break", "by", "continue", "debugger", "delete", "do", "in", "of", "new", "return", "then", "this", "@", "throw", "when", "until", "extends"], x = p(l.concat(a));
l = p(l);
var b = /^('{3}|\"{3}|['\"])/, A = /^(\/{3}|\/)/, S = ["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"], O = p(S);
function u(e, n) {
  if (e.sol()) {
    n.scope.align === null && (n.scope.align = false);
    var i = n.scope.offset;
    if (e.eatSpace()) {
      var f = e.indentation();
      return f > i && n.scope.type == "coffee" ? "indent" : f < i ? "dedent" : null;
    } else i > 0 && v(e, n);
  }
  if (e.eatSpace()) return null;
  var r = e.peek();
  if (e.match("####")) return e.skipToEnd(), "comment";
  if (e.match("###")) return n.tokenize = R, n.tokenize(e, n);
  if (r === "#") return e.skipToEnd(), "comment";
  if (e.match(/^-?[0-9\.]/, false)) {
    var c = false;
    if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (c = true), e.match(/^-?\d+\.\d*/) && (c = true), e.match(/^-?\.\d+/) && (c = true), c) return e.peek() == "." && e.backUp(1), "number";
    var o = false;
    if (e.match(/^-?0x[0-9a-f]+/i) && (o = true), e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (o = true), e.match(/^-?0(?![\dx])/i) && (o = true), o) return "number";
  }
  if (e.match(b)) return n.tokenize = t(e.current(), false, "string"), n.tokenize(e, n);
  if (e.match(A)) {
    if (e.current() != "/" || e.match(/^.*\//, false)) return n.tokenize = t(e.current(), true, "string.special"), n.tokenize(e, n);
    e.backUp(1);
  }
  return e.match(g) || e.match(z) ? "operator" : e.match(y) ? "punctuation" : e.match(O) ? "atom" : e.match(w) || n.prop && e.match(h) ? "property" : e.match(x) ? "keyword" : e.match(h) ? "variable" : (e.next(), k);
}
function t(e, n, i) {
  return function(f, r) {
    for (; !f.eol(); ) if (f.eatWhile(/[^'"\/\\]/), f.eat("\\")) {
      if (f.next(), n && f.eol()) return i;
    } else {
      if (f.match(e)) return r.tokenize = u, i;
      f.eat(/['"\/]/);
    }
    return n && (r.tokenize = u), i;
  };
}
function R(e, n) {
  for (; !e.eol(); ) {
    if (e.eatWhile(/[^#]/), e.match("###")) {
      n.tokenize = u;
      break;
    }
    e.eatWhile("#");
  }
  return "comment";
}
function d(e, n, i = "coffee") {
  for (var f = 0, r = false, c = null, o = n.scope; o; o = o.prev) if (o.type === "coffee" || o.type == "}") {
    f = o.offset + e.indentUnit;
    break;
  }
  i !== "coffee" ? (r = null, c = e.column() + e.current().length) : n.scope.align && (n.scope.align = false), n.scope = { offset: f, type: i, prev: n.scope, align: r, alignOffset: c };
}
function v(e, n) {
  if (n.scope.prev) if (n.scope.type === "coffee") {
    for (var i = e.indentation(), f = false, r = n.scope; r; r = r.prev) if (i === r.offset) {
      f = true;
      break;
    }
    if (!f) return true;
    for (; n.scope.prev && n.scope.offset !== i; ) n.scope = n.scope.prev;
    return false;
  } else return n.scope = n.scope.prev, false;
}
function E(e, n) {
  var i = n.tokenize(e, n), f = e.current();
  f === "return" && (n.dedent = true), ((f === "->" || f === "=>") && e.eol() || i === "indent") && d(e, n);
  var r = "[({".indexOf(f);
  if (r !== -1 && d(e, n, "])}".slice(r, r + 1)), l.exec(f) && d(e, n), f == "then" && v(e, n), i === "dedent" && v(e, n)) return k;
  if (r = "])}".indexOf(f), r !== -1) {
    for (; n.scope.type == "coffee" && n.scope.prev; ) n.scope = n.scope.prev;
    n.scope.type == f && (n.scope = n.scope.prev);
  }
  return n.dedent && e.eol() && (n.scope.type == "coffee" && n.scope.prev && (n.scope = n.scope.prev), n.dedent = false), i == "indent" || i == "dedent" ? null : i;
}
const Z = { name: "coffeescript", startState: function() {
  return { tokenize: u, scope: { offset: 0, type: "coffee", prev: null, align: false }, prop: false, dedent: 0 };
}, token: function(e, n) {
  var i = n.scope.align === null && n.scope;
  i && e.sol() && (i.align = false);
  var f = E(e, n);
  return f && f != "comment" && (i && (i.align = true), n.prop = f == "punctuation" && e.current() == "."), f;
}, indent: function(e, n) {
  if (e.tokenize != u) return 0;
  var i = e.scope, f = n && "])}".indexOf(n.charAt(0)) > -1;
  if (f) for (; i.type == "coffee" && i.prev; ) i = i.prev;
  var r = f && i.type === n.charAt(0);
  return i.align ? i.alignOffset - (r ? 1 : 0) : (r ? i.prev : i).offset;
}, languageData: { commentTokens: { line: "#" } } };
export {
  Z as coffeeScript
};
