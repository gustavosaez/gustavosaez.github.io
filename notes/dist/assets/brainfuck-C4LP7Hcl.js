var f = "><+-.,[]".split("");
const r = { name: "brainfuck", startState: function() {
  return { commentLine: false, left: 0, right: 0, commentLoop: false };
}, token: function(i, n) {
  if (i.eatSpace()) return null;
  i.sol() && (n.commentLine = false);
  var e = i.next().toString();
  if (f.indexOf(e) !== -1) {
    if (n.commentLine === true) return i.eol() && (n.commentLine = false), "comment";
    if (e === "]" || e === "[") return e === "[" ? n.left++ : n.right++, "bracket";
    if (e === "+" || e === "-") return "keyword";
    if (e === "<" || e === ">") return "atom";
    if (e === "." || e === ",") return "def";
  } else return n.commentLine = true, i.eol() && (n.commentLine = false), "comment";
  i.eol() && (n.commentLine = false);
} };
export {
  r as brainfuck
};
