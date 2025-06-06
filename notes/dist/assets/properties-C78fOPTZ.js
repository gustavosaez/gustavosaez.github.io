const f = { name: "properties", token: function(e, i) {
  var o = e.sol() || i.afterSection, l = e.eol();
  if (i.afterSection = false, o && (i.nextMultiline ? (i.inMultiline = true, i.nextMultiline = false) : i.position = "def"), l && !i.nextMultiline && (i.inMultiline = false, i.position = "def"), o) for (; e.eatSpace(); ) ;
  var n = e.next();
  return o && (n === "#" || n === "!" || n === ";") ? (i.position = "comment", e.skipToEnd(), "comment") : o && n === "[" ? (i.afterSection = true, e.skipTo("]"), e.eat("]"), "header") : n === "=" || n === ":" ? (i.position = "quote", null) : (n === "\\" && i.position === "quote" && e.eol() && (i.nextMultiline = true), i.position);
}, startState: function() {
  return { position: "def", nextMultiline: false, inMultiline: false, afterSection: false };
} };
export {
  f as properties
};
