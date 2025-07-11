function a(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
var l = ["Clamp", "Constructor", "EnforceRange", "Exposed", "ImplicitThis", "Global", "PrimaryGlobal", "LegacyArrayClass", "LegacyUnenumerableNamedProperties", "LenientThis", "NamedConstructor", "NewObject", "NoInterfaceObject", "OverrideBuiltins", "PutForwards", "Replaceable", "SameObject", "TreatNonObjectAsNull", "TreatNullAs", "EmptyString", "Unforgeable", "Unscopeable"], u = a(l), o = ["unsigned", "short", "long", "unrestricted", "float", "double", "boolean", "byte", "octet", "Promise", "ArrayBuffer", "DataView", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray", "Float32Array", "Float64Array", "ByteString", "DOMString", "USVString", "sequence", "object", "RegExp", "Error", "DOMException", "FrozenArray", "any", "void"], m = a(o), c = ["attribute", "callback", "const", "deleter", "dictionary", "enum", "getter", "implements", "inherit", "interface", "iterable", "legacycaller", "maplike", "partial", "required", "serializer", "setlike", "setter", "static", "stringifier", "typedef", "optional", "readonly", "or"], s = a(c), f = ["true", "false", "Infinity", "NaN", "null"], y = a(f), d = ["callback", "dictionary", "enum", "interface"], p = a(d), b = ["typedef"], v = a(b), A = /^[:<=>?]/, g = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/, h = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/, i = /^_?[A-Za-z][0-9A-Z_a-z-]*/, D = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/, k = /^"[^"]*"/, E = /^\/\*.*?\*\//, C = /^\/\*.*/, w = /^.*?\*\//;
function N(e, r) {
  if (e.eatSpace()) return null;
  if (r.inComment) return e.match(w) ? (r.inComment = false, "comment") : (e.skipToEnd(), "comment");
  if (e.match("//")) return e.skipToEnd(), "comment";
  if (e.match(E)) return "comment";
  if (e.match(C)) return r.inComment = true, "comment";
  if (e.match(/^-?[0-9\.]/, false) && (e.match(g) || e.match(h))) return "number";
  if (e.match(k)) return "string";
  if (r.startDef && e.match(i)) return "def";
  if (r.endDef && e.match(D)) return r.endDef = false, "def";
  if (e.match(s)) return "keyword";
  if (e.match(m)) {
    var t = r.lastToken, n = (e.match(/^\s*(.+?)\b/, false) || [])[1];
    return t === ":" || t === "implements" || n === "implements" || n === "=" ? "builtin" : "type";
  }
  return e.match(u) ? "builtin" : e.match(y) ? "atom" : e.match(i) ? "variable" : e.match(A) ? "operator" : (e.next(), null);
}
const S = { name: "webidl", startState: function() {
  return { inComment: false, lastToken: "", startDef: false, endDef: false };
}, token: function(e, r) {
  var t = N(e, r);
  if (t) {
    var n = e.current();
    r.lastToken = n, t === "keyword" ? (r.startDef = p.test(n), r.endDef = r.endDef || v.test(n)) : r.startDef = false;
  }
  return t;
}, languageData: { autocomplete: l.concat(o).concat(c).concat(f) } };
export {
  S as webIDL
};
