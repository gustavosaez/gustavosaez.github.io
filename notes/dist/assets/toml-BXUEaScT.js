const l = { name: "toml", startState: function() {
  return { inString: false, stringType: "", lhs: true, inArray: 0 };
}, token: function(n, e) {
  if (!e.inString && (n.peek() == '"' || n.peek() == "'") && (e.stringType = n.peek(), n.next(), e.inString = true), n.sol() && e.inArray === 0 && (e.lhs = true), e.inString) {
    for (; e.inString && !n.eol(); ) n.peek() === e.stringType ? (n.next(), e.inString = false) : n.peek() === "\\" ? (n.next(), n.next()) : n.match(/^.[^\\\"\']*/);
    return e.lhs ? "property" : "string";
  } else {
    if (e.inArray && n.peek() === "]") return n.next(), e.inArray--, "bracket";
    if (e.lhs && n.peek() === "[" && n.skipTo("]")) return n.next(), n.peek() === "]" && n.next(), "atom";
    if (n.peek() === "#") return n.skipToEnd(), "comment";
    if (n.eatSpace()) return null;
    if (e.lhs && n.eatWhile(function(i) {
      return i != "=" && i != " ";
    })) return "property";
    if (e.lhs && n.peek() === "=") return n.next(), e.lhs = false, null;
    if (!e.lhs && n.match(/^\d\d\d\d[\d\-\:\.T]*Z/)) return "atom";
    if (!e.lhs && (n.match("true") || n.match("false"))) return "atom";
    if (!e.lhs && n.peek() === "[") return e.inArray++, n.next(), "bracket";
    if (!e.lhs && n.match(/^\-?\d+(?:\.\d+)?/)) return "number";
    n.eatSpace() || n.next();
  }
  return null;
}, languageData: { commentTokens: { line: "#" } } };
export {
  l as toml
};
