function f(e, n, t) {
  return n(t), t(e, n);
}
var g = /[a-z_]/, c = /[A-Z]/, l = /\d/, v = /[0-9A-Fa-f]/, w = /[0-7]/, d = /[a-z_A-Z0-9'\xa1-\uffff]/, o = /[-!#$%&*+.\/<=>?@\\^|~:]/, E = /[(),;[\]`{}]/, h = /[ \t\v\f]/;
function i(e, n) {
  if (e.eatWhile(h)) return null;
  var t = e.next();
  if (E.test(t)) {
    if (t == "{" && e.eat("-")) {
      var r = "comment";
      return e.eat("#") && (r = "meta"), f(e, n, s(r, 1));
    }
    return null;
  }
  if (t == "'") return e.eat("\\"), e.next(), e.eat("'") ? "string" : "error";
  if (t == '"') return f(e, n, p);
  if (c.test(t)) return e.eatWhile(d), e.eat(".") ? "qualifier" : "type";
  if (g.test(t)) return e.eatWhile(d), "variable";
  if (l.test(t)) {
    if (t == "0") {
      if (e.eat(/[xX]/)) return e.eatWhile(v), "integer";
      if (e.eat(/[oO]/)) return e.eatWhile(w), "number";
    }
    e.eatWhile(l);
    var r = "number";
    return e.match(/^\.\d+/) && (r = "number"), e.eat(/[eE]/) && (r = "number", e.eat(/[-+]/), e.eatWhile(l)), r;
  }
  return t == "." && e.eat(".") ? "keyword" : o.test(t) ? t == "-" && e.eat(/-/) && (e.eatWhile(/-/), !e.eat(o)) ? (e.skipToEnd(), "comment") : (e.eatWhile(o), "variable") : "error";
}
function s(e, n) {
  return n == 0 ? i : function(t, r) {
    for (var a = n; !t.eol(); ) {
      var u = t.next();
      if (u == "{" && t.eat("-")) ++a;
      else if (u == "-" && t.eat("}") && (--a, a == 0)) return r(i), e;
    }
    return r(s(e, a)), e;
  };
}
function p(e, n) {
  for (; !e.eol(); ) {
    var t = e.next();
    if (t == '"') return n(i), "string";
    if (t == "\\") {
      if (e.eol() || e.eat(h)) return n(x), "string";
      e.eat("&") || e.next();
    }
  }
  return n(i), "error";
}
function x(e, n) {
  return e.eat("\\") ? f(e, n, p) : (e.next(), n(i), "error");
}
var m = function() {
  var e = {};
  function n(t) {
    return function() {
      for (var r = 0; r < arguments.length; r++) e[arguments[r]] = t;
    };
  }
  return n("keyword")("case", "class", "data", "default", "deriving", "do", "else", "foreign", "if", "import", "in", "infix", "infixl", "infixr", "instance", "let", "module", "newtype", "of", "then", "type", "where", "_"), n("keyword")("..", ":", "::", "=", "\\", "<-", "->", "@", "~", "=>"), n("builtin")("!!", "$!", "$", "&&", "+", "++", "-", ".", "/", "/=", "<", "<*", "<=", "<$>", "<*>", "=<<", "==", ">", ">=", ">>", ">>=", "^", "^^", "||", "*", "*>", "**"), n("builtin")("Applicative", "Bool", "Bounded", "Char", "Double", "EQ", "Either", "Enum", "Eq", "False", "FilePath", "Float", "Floating", "Fractional", "Functor", "GT", "IO", "IOError", "Int", "Integer", "Integral", "Just", "LT", "Left", "Maybe", "Monad", "Nothing", "Num", "Ord", "Ordering", "Rational", "Read", "ReadS", "Real", "RealFloat", "RealFrac", "Right", "Show", "ShowS", "String", "True"), n("builtin")("abs", "acos", "acosh", "all", "and", "any", "appendFile", "asTypeOf", "asin", "asinh", "atan", "atan2", "atanh", "break", "catch", "ceiling", "compare", "concat", "concatMap", "const", "cos", "cosh", "curry", "cycle", "decodeFloat", "div", "divMod", "drop", "dropWhile", "either", "elem", "encodeFloat", "enumFrom", "enumFromThen", "enumFromThenTo", "enumFromTo", "error", "even", "exp", "exponent", "fail", "filter", "flip", "floatDigits", "floatRadix", "floatRange", "floor", "fmap", "foldl", "foldl1", "foldr", "foldr1", "fromEnum", "fromInteger", "fromIntegral", "fromRational", "fst", "gcd", "getChar", "getContents", "getLine", "head", "id", "init", "interact", "ioError", "isDenormalized", "isIEEE", "isInfinite", "isNaN", "isNegativeZero", "iterate", "last", "lcm", "length", "lex", "lines", "log", "logBase", "lookup", "map", "mapM", "mapM_", "max", "maxBound", "maximum", "maybe", "min", "minBound", "minimum", "mod", "negate", "not", "notElem", "null", "odd", "or", "otherwise", "pi", "pred", "print", "product", "properFraction", "pure", "putChar", "putStr", "putStrLn", "quot", "quotRem", "read", "readFile", "readIO", "readList", "readLn", "readParen", "reads", "readsPrec", "realToFrac", "recip", "rem", "repeat", "replicate", "return", "reverse", "round", "scaleFloat", "scanl", "scanl1", "scanr", "scanr1", "seq", "sequence", "sequence_", "show", "showChar", "showList", "showParen", "showString", "shows", "showsPrec", "significand", "signum", "sin", "sinh", "snd", "span", "splitAt", "sqrt", "subtract", "succ", "sum", "tail", "take", "takeWhile", "tan", "tanh", "toEnum", "toInteger", "toRational", "truncate", "uncurry", "undefined", "unlines", "until", "unwords", "unzip", "unzip3", "userError", "words", "writeFile", "zip", "zip3", "zipWith", "zipWith3"), e;
}();
const F = { name: "haskell", startState: function() {
  return { f: i };
}, copyState: function(e) {
  return { f: e.f };
}, token: function(e, n) {
  var t = n.f(e, function(a) {
    n.f = a;
  }), r = e.current();
  return m.hasOwnProperty(r) ? m[r] : t;
}, languageData: { commentTokens: { line: "--", block: { open: "{-", close: "-}" } } } };
export {
  F as haskell
};
