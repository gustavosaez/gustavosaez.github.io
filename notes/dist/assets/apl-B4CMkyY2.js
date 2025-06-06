var l = { "+": ["conjugate", "add"], "\u2212": ["negate", "subtract"], "\xD7": ["signOf", "multiply"], "\xF7": ["reciprocal", "divide"], "\u2308": ["ceiling", "greaterOf"], "\u230A": ["floor", "lesserOf"], "\u2223": ["absolute", "residue"], "\u2373": ["indexGenerate", "indexOf"], "?": ["roll", "deal"], "\u22C6": ["exponentiate", "toThePowerOf"], "\u235F": ["naturalLog", "logToTheBase"], "\u25CB": ["piTimes", "circularFuncs"], "!": ["factorial", "binomial"], "\u2339": ["matrixInverse", "matrixDivide"], "<": [null, "lessThan"], "\u2264": [null, "lessThanOrEqual"], "=": [null, "equals"], ">": [null, "greaterThan"], "\u2265": [null, "greaterThanOrEqual"], "\u2260": [null, "notEqual"], "\u2261": ["depth", "match"], "\u2262": [null, "notMatch"], "\u2208": ["enlist", "membership"], "\u2377": [null, "find"], "\u222A": ["unique", "union"], "\u2229": [null, "intersection"], "\u223C": ["not", "without"], "\u2228": [null, "or"], "\u2227": [null, "and"], "\u2371": [null, "nor"], "\u2372": [null, "nand"], "\u2374": ["shapeOf", "reshape"], ",": ["ravel", "catenate"], "\u236A": [null, "firstAxisCatenate"], "\u233D": ["reverse", "rotate"], "\u2296": ["axis1Reverse", "axis1Rotate"], "\u2349": ["transpose", null], "\u2191": ["first", "take"], "\u2193": [null, "drop"], "\u2282": ["enclose", "partitionWithAxis"], "\u2283": ["diclose", "pick"], "\u2337": [null, "index"], "\u234B": ["gradeUp", null], "\u2352": ["gradeDown", null], "\u22A4": ["encode", null], "\u22A5": ["decode", null], "\u2355": ["format", "formatByExample"], "\u234E": ["execute", null], "\u22A3": ["stop", "left"], "\u22A2": ["pass", "right"] }, t = /[\.\/⌿⍀¨⍣]/, a = /⍬/, i = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/, u = /←/, o = /[⍝#].*$/, s = function(r) {
  var n;
  return n = false, function(e) {
    return n = e, e === r ? n === "\\" : true;
  };
};
const f = { name: "apl", startState: function() {
  return { prev: false, func: false, op: false, string: false, escape: false };
}, token: function(r, n) {
  var e;
  return r.eatSpace() ? null : (e = r.next(), e === '"' || e === "'" ? (r.eatWhile(s(e)), r.next(), n.prev = true, "string") : /[\[{\(]/.test(e) ? (n.prev = false, null) : /[\]}\)]/.test(e) ? (n.prev = true, null) : a.test(e) ? (n.prev = false, "atom") : /[¯\d]/.test(e) ? (n.func ? (n.func = false, n.prev = false) : n.prev = true, r.eatWhile(/[\w\.]/), "number") : t.test(e) || u.test(e) ? "operator" : i.test(e) ? (n.func = true, n.prev = false, l[e] ? "variableName.function.standard" : "variableName.function") : o.test(e) ? (r.skipToEnd(), "comment") : e === "\u2218" && r.peek() === "." ? (r.next(), "variableName.function") : (r.eatWhile(/[\w\$_]/), n.prev = true, "keyword"));
} };
export {
  f as apl
};
