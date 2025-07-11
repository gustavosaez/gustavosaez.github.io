function r(n) {
  for (var e = {}, i = n.split(" "), l = 0; l < i.length; ++l) e[i[l]] = true;
  return e;
}
var t = r("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"), a = r("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"), u = r("Real Boolean Integer String"), f = [].concat(Object.keys(t), Object.keys(a), Object.keys(u)), k = /[;=\(:\),{}.*<>+\-\/^\[\]]/, s = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/, o = /[0-9]/, c = /[_a-zA-Z]/;
function p(n, e) {
  return n.skipToEnd(), e.tokenize = null, "comment";
}
function d(n, e) {
  for (var i = false, l; l = n.next(); ) {
    if (i && l == "/") {
      e.tokenize = null;
      break;
    }
    i = l == "*";
  }
  return "comment";
}
function h(n, e) {
  for (var i = false, l; (l = n.next()) != null; ) {
    if (l == '"' && !i) {
      e.tokenize = null, e.sol = false;
      break;
    }
    i = !i && l == "\\";
  }
  return "string";
}
function b(n, e) {
  for (n.eatWhile(o); n.eat(o) || n.eat(c); ) ;
  var i = n.current();
  return e.sol && (i == "package" || i == "model" || i == "when" || i == "connector") ? e.level++ : e.sol && i == "end" && e.level > 0 && e.level--, e.tokenize = null, e.sol = false, t.propertyIsEnumerable(i) ? "keyword" : a.propertyIsEnumerable(i) ? "builtin" : u.propertyIsEnumerable(i) ? "atom" : "variable";
}
function v(n, e) {
  for (; n.eat(/[^']/); ) ;
  return e.tokenize = null, e.sol = false, n.eat("'") ? "variable" : "error";
}
function g(n, e) {
  return n.eatWhile(o), n.eat(".") && n.eatWhile(o), (n.eat("e") || n.eat("E")) && (n.eat("-") || n.eat("+"), n.eatWhile(o)), e.tokenize = null, e.sol = false, "number";
}
const z = { name: "modelica", startState: function() {
  return { tokenize: null, level: 0, sol: true };
}, token: function(n, e) {
  if (e.tokenize != null) return e.tokenize(n, e);
  if (n.sol() && (e.sol = true), n.eatSpace()) return e.tokenize = null, null;
  var i = n.next();
  if (i == "/" && n.eat("/")) e.tokenize = p;
  else if (i == "/" && n.eat("*")) e.tokenize = d;
  else {
    if (s.test(i + n.peek())) return n.next(), e.tokenize = null, "operator";
    if (k.test(i)) return e.tokenize = null, "operator";
    if (c.test(i)) e.tokenize = b;
    else if (i == "'" && n.peek() && n.peek() != "'") e.tokenize = v;
    else if (i == '"') e.tokenize = h;
    else if (o.test(i)) e.tokenize = g;
    else return e.tokenize = null, "error";
  }
  return e.tokenize(n, e);
}, indent: function(n, e, i) {
  if (n.tokenize != null) return null;
  var l = n.level;
  return /(algorithm)/.test(e) && l--, /(equation)/.test(e) && l--, /(initial algorithm)/.test(e) && l--, /(initial equation)/.test(e) && l--, /(end)/.test(e) && l--, l > 0 ? i.unit * l : 0;
}, languageData: { commentTokens: { line: "//", block: { open: "/*", close: "*/" } }, autocomplete: f } };
export {
  z as modelica
};
