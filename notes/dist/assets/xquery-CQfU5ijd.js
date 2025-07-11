var d = function() {
  function e(w) {
    return { type: w, style: "keyword" };
  }
  for (var n = e("operator"), t = { type: "atom", style: "atom" }, i = { type: "punctuation", style: null }, o = { type: "axis_specifier", style: "qualifier" }, l = { ",": i }, p = ["after", "all", "allowing", "ancestor", "ancestor-or-self", "any", "array", "as", "ascending", "at", "attribute", "base-uri", "before", "boundary-space", "by", "case", "cast", "castable", "catch", "child", "collation", "comment", "construction", "contains", "content", "context", "copy", "copy-namespaces", "count", "decimal-format", "declare", "default", "delete", "descendant", "descendant-or-self", "descending", "diacritics", "different", "distance", "document", "document-node", "element", "else", "empty", "empty-sequence", "encoding", "end", "entire", "every", "exactly", "except", "external", "first", "following", "following-sibling", "for", "from", "ftand", "ftnot", "ft-option", "ftor", "function", "fuzzy", "greatest", "group", "if", "import", "in", "inherit", "insensitive", "insert", "instance", "intersect", "into", "invoke", "is", "item", "language", "last", "lax", "least", "let", "levels", "lowercase", "map", "modify", "module", "most", "namespace", "next", "no", "node", "nodes", "no-inherit", "no-preserve", "not", "occurs", "of", "only", "option", "order", "ordered", "ordering", "paragraph", "paragraphs", "parent", "phrase", "preceding", "preceding-sibling", "preserve", "previous", "processing-instruction", "relationship", "rename", "replace", "return", "revalidation", "same", "satisfies", "schema", "schema-attribute", "schema-element", "score", "self", "sensitive", "sentence", "sentences", "sequence", "skip", "sliding", "some", "stable", "start", "stemming", "stop", "strict", "strip", "switch", "text", "then", "thesaurus", "times", "to", "transform", "treat", "try", "tumbling", "type", "typeswitch", "union", "unordered", "update", "updating", "uppercase", "using", "validate", "value", "variable", "version", "weight", "when", "where", "wildcards", "window", "with", "without", "word", "words", "xquery"], r = 0, a = p.length; r < a; r++) l[p[r]] = e(p[r]);
  for (var g = ["xs:anyAtomicType", "xs:anySimpleType", "xs:anyType", "xs:anyURI", "xs:base64Binary", "xs:boolean", "xs:byte", "xs:date", "xs:dateTime", "xs:dateTimeStamp", "xs:dayTimeDuration", "xs:decimal", "xs:double", "xs:duration", "xs:ENTITIES", "xs:ENTITY", "xs:float", "xs:gDay", "xs:gMonth", "xs:gMonthDay", "xs:gYear", "xs:gYearMonth", "xs:hexBinary", "xs:ID", "xs:IDREF", "xs:IDREFS", "xs:int", "xs:integer", "xs:item", "xs:java", "xs:language", "xs:long", "xs:Name", "xs:NCName", "xs:negativeInteger", "xs:NMTOKEN", "xs:NMTOKENS", "xs:nonNegativeInteger", "xs:nonPositiveInteger", "xs:normalizedString", "xs:NOTATION", "xs:numeric", "xs:positiveInteger", "xs:precisionDecimal", "xs:QName", "xs:short", "xs:string", "xs:time", "xs:token", "xs:unsignedByte", "xs:unsignedInt", "xs:unsignedLong", "xs:unsignedShort", "xs:untyped", "xs:untypedAtomic", "xs:yearMonthDuration"], r = 0, a = g.length; r < a; r++) l[g[r]] = t;
  for (var f = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"], r = 0, a = f.length; r < a; r++) l[f[r]] = n;
  for (var v = ["self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::"], r = 0, a = v.length; r < a; r++) l[v[r]] = o;
  return l;
}();
function x(e, n, t) {
  return n.tokenize = t, t(e, n);
}
function u(e, n) {
  var t = e.next(), i = false, o = _(e);
  if (t == "<") {
    if (e.match("!--", true)) return x(e, n, N);
    if (e.match("![CDATA", false)) return n.tokenize = E, "tag";
    if (e.match("?", false)) return x(e, n, A);
    var l = e.eat("/");
    e.eatSpace();
    for (var p = "", r; r = e.eat(/[^\s\u00a0=<>\"\'\/?]/); ) p += r;
    return x(e, n, S(p, l));
  } else {
    if (t == "{") return s(n, { type: "codeblock" }), null;
    if (t == "}") return c(n), null;
    if (b(n)) return t == ">" ? "tag" : t == "/" && e.eat(">") ? (c(n), "tag") : "variable";
    if (/\d/.test(t)) return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), "atom";
    if (t === "(" && e.eat(":")) return s(n, { type: "comment" }), x(e, n, z);
    if (!o && (t === '"' || t === "'")) return m(e, n, t);
    if (t === "$") return x(e, n, T);
    if (t === ":" && e.eat("=")) return "keyword";
    if (t === "(") return s(n, { type: "paren" }), null;
    if (t === ")") return c(n), null;
    if (t === "[") return s(n, { type: "bracket" }), null;
    if (t === "]") return c(n), null;
    var a = d.propertyIsEnumerable(t) && d[t];
    if (o && t === '"') for (; e.next() !== '"'; ) ;
    if (o && t === "'") for (; e.next() !== "'"; ) ;
    a || e.eatWhile(/[\w\$_-]/);
    var g = e.eat(":");
    !e.eat(":") && g && e.eatWhile(/[\w\$_-]/), e.match(/^[ \t]*\(/, false) && (i = true);
    var f = e.current();
    return a = d.propertyIsEnumerable(f) && d[f], i && !a && (a = { type: "function_call", style: "def" }), D(n) ? (c(n), "variable") : ((f == "element" || f == "attribute" || a.type == "axis_specifier") && s(n, { type: "xmlconstructor" }), a ? a.style : "variable");
  }
}
function z(e, n) {
  for (var t = false, i = false, o = 0, l; l = e.next(); ) {
    if (l == ")" && t) if (o > 0) o--;
    else {
      c(n);
      break;
    }
    else l == ":" && i && o++;
    t = l == ":", i = l == "(";
  }
  return "comment";
}
function I(e, n) {
  return function(t, i) {
    for (var o; o = t.next(); ) if (o == e) {
      c(i), n && (i.tokenize = n);
      break;
    } else if (t.match("{", false) && h(i)) return s(i, { type: "codeblock" }), i.tokenize = u, "string";
    return "string";
  };
}
function m(e, n, t, i) {
  let o = I(t, i);
  return s(n, { type: "string", name: t, tokenize: o }), x(e, n, o);
}
function T(e, n) {
  var t = /[\w\$_-]/;
  if (e.eat('"')) {
    for (; e.next() !== '"'; ) ;
    e.eat(":");
  } else e.eatWhile(t), e.match(":=", false) || e.eat(":");
  return e.eatWhile(t), n.tokenize = u, "variable";
}
function S(e, n) {
  return function(t, i) {
    if (t.eatSpace(), n && t.eat(">")) return c(i), i.tokenize = u, "tag";
    if (t.eat("/") || s(i, { type: "tag", name: e, tokenize: u }), t.eat(">")) i.tokenize = u;
    else return i.tokenize = y, "tag";
    return "tag";
  };
}
function y(e, n) {
  var t = e.next();
  return t == "/" && e.eat(">") ? (h(n) && c(n), b(n) && c(n), "tag") : t == ">" ? (h(n) && c(n), "tag") : t == "=" ? null : t == '"' || t == "'" ? m(e, n, t, y) : (h(n) || s(n, { type: "attribute", tokenize: y }), e.eat(/[a-zA-Z_:]/), e.eatWhile(/[-a-zA-Z0-9_:.]/), e.eatSpace(), (e.match(">", false) || e.match("/", false)) && (c(n), n.tokenize = u), "attribute");
}
function N(e, n) {
  for (var t; t = e.next(); ) if (t == "-" && e.match("->", true)) return n.tokenize = u, "comment";
}
function E(e, n) {
  for (var t; t = e.next(); ) if (t == "]" && e.match("]", true)) return n.tokenize = u, "comment";
}
function A(e, n) {
  for (var t; t = e.next(); ) if (t == "?" && e.match(">", true)) return n.tokenize = u, "processingInstruction";
}
function b(e) {
  return k(e, "tag");
}
function h(e) {
  return k(e, "attribute");
}
function D(e) {
  return k(e, "xmlconstructor");
}
function _(e) {
  return e.current() === '"' ? e.match(/^[^\"]+\"\:/, false) : e.current() === "'" ? e.match(/^[^\"]+\'\:/, false) : false;
}
function k(e, n) {
  return e.stack.length && e.stack[e.stack.length - 1].type == n;
}
function s(e, n) {
  e.stack.push(n);
}
function c(e) {
  e.stack.pop();
  var n = e.stack.length && e.stack[e.stack.length - 1].tokenize;
  e.tokenize = n || u;
}
const C = { name: "xquery", startState: function() {
  return { tokenize: u, cc: [], stack: [] };
}, token: function(e, n) {
  if (e.eatSpace()) return null;
  var t = n.tokenize(e, n);
  return t;
}, languageData: { commentTokens: { block: { open: "(:", close: ":)" } } } };
export {
  C as xQuery
};
