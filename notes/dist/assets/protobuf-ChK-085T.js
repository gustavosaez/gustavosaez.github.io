function t(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
}
var n = ["package", "message", "import", "syntax", "required", "optional", "repeated", "reserved", "default", "extensions", "packed", "bool", "bytes", "double", "enum", "float", "string", "int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64", "option", "service", "rpc", "returns"], r = t(n), i = new RegExp("^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*");
function f(e) {
  return e.eatSpace() ? null : e.match("//") ? (e.skipToEnd(), "comment") : e.match(/^[0-9\.+-]/, false) && (e.match(/^[+-]?0x[0-9a-fA-F]+/) || e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/) || e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) ? "number" : e.match(/^"([^"]|(""))*"/) || e.match(/^'([^']|(''))*'/) ? "string" : e.match(r) ? "keyword" : e.match(i) ? "variable" : (e.next(), null);
}
const u = { name: "protobuf", token: f, languageData: { autocomplete: n } };
export {
  u as protobuf
};
