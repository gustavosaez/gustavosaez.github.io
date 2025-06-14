var _ = { PRE_SUBJECT: 0, WRITING_SUB_URI: 1, WRITING_BNODE_URI: 2, PRE_PRED: 3, WRITING_PRED_URI: 4, PRE_OBJ: 5, WRITING_OBJ_URI: 6, WRITING_OBJ_BNODE: 7, WRITING_OBJ_LITERAL: 8, WRITING_LIT_LANG: 9, WRITING_LIT_TYPE: 10, POST_OBJ: 11, ERROR: 12 };
function T(e, I) {
  var R = e.location, i;
  R == _.PRE_SUBJECT && I == "<" ? i = _.WRITING_SUB_URI : R == _.PRE_SUBJECT && I == "_" ? i = _.WRITING_BNODE_URI : R == _.PRE_PRED && I == "<" ? i = _.WRITING_PRED_URI : R == _.PRE_OBJ && I == "<" ? i = _.WRITING_OBJ_URI : R == _.PRE_OBJ && I == "_" ? i = _.WRITING_OBJ_BNODE : R == _.PRE_OBJ && I == '"' ? i = _.WRITING_OBJ_LITERAL : R == _.WRITING_SUB_URI && I == ">" || R == _.WRITING_BNODE_URI && I == " " ? i = _.PRE_PRED : R == _.WRITING_PRED_URI && I == ">" ? i = _.PRE_OBJ : R == _.WRITING_OBJ_URI && I == ">" || R == _.WRITING_OBJ_BNODE && I == " " || R == _.WRITING_OBJ_LITERAL && I == '"' || R == _.WRITING_LIT_LANG && I == " " || R == _.WRITING_LIT_TYPE && I == ">" ? i = _.POST_OBJ : R == _.WRITING_OBJ_LITERAL && I == "@" ? i = _.WRITING_LIT_LANG : R == _.WRITING_OBJ_LITERAL && I == "^" ? i = _.WRITING_LIT_TYPE : I == " " && (R == _.PRE_SUBJECT || R == _.PRE_PRED || R == _.PRE_OBJ || R == _.POST_OBJ) ? i = R : R == _.POST_OBJ && I == "." ? i = _.PRE_SUBJECT : i = _.ERROR, e.location = i;
}
const u = { name: "ntriples", startState: function() {
  return { location: _.PRE_SUBJECT, uris: [], anchors: [], bnodes: [], langs: [], types: [] };
}, token: function(e, I) {
  var R = e.next();
  if (R == "<") {
    T(I, R);
    var i = "";
    return e.eatWhile(function(n) {
      return n != "#" && n != ">" ? (i += n, true) : false;
    }), I.uris.push(i), e.match("#", false) || (e.next(), T(I, ">")), "variable";
  }
  if (R == "#") {
    var r = "";
    return e.eatWhile(function(n) {
      return n != ">" && n != " " ? (r += n, true) : false;
    }), I.anchors.push(r), "url";
  }
  if (R == ">") return T(I, ">"), "variable";
  if (R == "_") {
    T(I, R);
    var f = "";
    return e.eatWhile(function(n) {
      return n != " " ? (f += n, true) : false;
    }), I.bnodes.push(f), e.next(), T(I, " "), "builtin";
  }
  if (R == '"') return T(I, R), e.eatWhile(function(n) {
    return n != '"';
  }), e.next(), e.peek() != "@" && e.peek() != "^" && T(I, '"'), "string";
  if (R == "@") {
    T(I, "@");
    var E = "";
    return e.eatWhile(function(n) {
      return n != " " ? (E += n, true) : false;
    }), I.langs.push(E), e.next(), T(I, " "), "string.special";
  }
  if (R == "^") {
    e.next(), T(I, "^");
    var l = "";
    return e.eatWhile(function(n) {
      return n != ">" ? (l += n, true) : false;
    }), I.types.push(l), e.next(), T(I, ">"), "variable";
  }
  R == " " && T(I, R), R == "." && T(I, R);
} };
export {
  u as ntriples
};
