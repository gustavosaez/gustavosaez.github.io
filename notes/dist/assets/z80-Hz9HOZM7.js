function o(t) {
  var n, l;
  t ? (n = /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i, l = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i) : (n = /^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i, l = /^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i);
  var u = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i, d = /^(n?[zc]|p[oe]?|m)\b/i, f = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i, c = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;
  return { name: "z80", startState: function() {
    return { context: 0 };
  }, token: function(e, i) {
    if (e.column() || (i.context = 0), e.eatSpace()) return null;
    var r;
    if (e.eatWhile(/\w/)) if (t && e.eat(".") && e.eatWhile(/\w/), r = e.current(), e.indentation()) {
      if ((i.context == 1 || i.context == 4) && u.test(r)) return i.context = 4, "variable";
      if (i.context == 2 && d.test(r)) return i.context = 4, "variableName.special";
      if (n.test(r)) return i.context = 1, "keyword";
      if (l.test(r)) return i.context = 2, "keyword";
      if (i.context == 4 && c.test(r)) return "number";
      if (f.test(r)) return "error";
    } else return e.match(c) ? "number" : null;
    else {
      if (e.eat(";")) return e.skipToEnd(), "comment";
      if (e.eat('"')) {
        for (; (r = e.next()) && r != '"'; ) r == "\\" && e.next();
        return "string";
      } else if (e.eat("'")) {
        if (e.match(/\\?.'/)) return "number";
      } else if (e.eat(".") || e.sol() && e.eat("#")) {
        if (i.context = 5, e.eatWhile(/\w/)) return "def";
      } else if (e.eat("$")) {
        if (e.eatWhile(/[\da-f]/i)) return "number";
      } else if (e.eat("%")) {
        if (e.eatWhile(/[01]/)) return "number";
      } else e.next();
    }
    return null;
  } };
}
const a = o(false), s = o(true);
export {
  s as ez80,
  a as z80
};
