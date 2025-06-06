var u = "[a-zA-Z\\$][a-zA-Z0-9\\$]*", f = "(?:\\d+)", c = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)", o = "(?:\\.\\w+|\\w+\\.\\w*|\\w+)", l = "(?:`(?:`?" + c + ")?)", z = new RegExp("(?:" + f + "(?:\\^\\^" + o + l + "?(?:\\*\\^[+-]?\\d+)?))"), m = new RegExp("(?:" + c + l + "?(?:\\*\\^[+-]?\\d+)?)"), A = new RegExp("(?:`?)(?:" + u + ")(?:`(?:" + u + "))*(?:`?)");
function i(e, a) {
  var n;
  return n = e.next(), n === '"' ? (a.tokenize = Z, a.tokenize(e, a)) : n === "(" && e.eat("*") ? (a.commentLevel++, a.tokenize = $, a.tokenize(e, a)) : (e.backUp(1), e.match(z, true, false) || e.match(m, true, false) ? "number" : e.match(/(?:In|Out)\[[0-9]*\]/, true, false) ? "atom" : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, true, false) ? "meta" : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false) ? "string.special" : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false) || e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false) || e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false) || e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false) ? "variableName.special" : e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false) ? "character" : e.match(/(?:\[|\]|{|}|\(|\))/, true, false) ? "bracket" : e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false) ? "variableName.constant" : e.match(A, true, false) ? "keyword" : e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false) ? "operator" : (e.next(), "error"));
}
function Z(e, a) {
  for (var n, r = false, t = false; (n = e.next()) != null; ) {
    if (n === '"' && !t) {
      r = true;
      break;
    }
    t = !t && n === "\\";
  }
  return r && !t && (a.tokenize = i), "string";
}
function $(e, a) {
  for (var n, r; a.commentLevel > 0 && (r = e.next()) != null; ) n === "(" && r === "*" && a.commentLevel++, n === "*" && r === ")" && a.commentLevel--, n = r;
  return a.commentLevel <= 0 && (a.tokenize = i), "comment";
}
const v = { name: "mathematica", startState: function() {
  return { tokenize: i, commentLevel: 0 };
}, token: function(e, a) {
  return e.eatSpace() ? null : a.tokenize(e, a);
}, languageData: { commentTokens: { block: { open: "(*", close: "*)" } } } };
export {
  v as mathematica
};
