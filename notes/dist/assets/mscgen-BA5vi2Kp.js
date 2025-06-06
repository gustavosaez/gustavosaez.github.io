function c(t) {
  return { name: "mscgen", startState: i, copyState: s, token: u(t), languageData: { commentTokens: { line: "#", block: { open: "/*", close: "*/" } } } };
}
const a = c({ keywords: ["msc"], options: ["hscale", "width", "arcgradient", "wordwraparcs"], constants: ["true", "false", "on", "off"], attributes: ["label", "idurl", "id", "url", "linecolor", "linecolour", "textcolor", "textcolour", "textbgcolor", "textbgcolour", "arclinecolor", "arclinecolour", "arctextcolor", "arctextcolour", "arctextbgcolor", "arctextbgcolour", "arcskip"], brackets: ["\\{", "\\}"], arcsWords: ["note", "abox", "rbox", "box"], arcsOthers: ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"], singlecomment: ["//", "#"], operators: ["="] }), l = c({ keywords: null, options: ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"], constants: ["true", "false", "on", "off", "auto"], attributes: null, brackets: ["\\{", "\\}"], arcsWords: ["note", "abox", "rbox", "box", "alt", "else", "opt", "break", "par", "seq", "strict", "neg", "critical", "ignore", "consider", "assert", "loop", "ref", "exc"], arcsOthers: ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"], singlecomment: ["//", "#"], operators: ["="] }), b = c({ keywords: ["msc", "xu"], options: ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"], constants: ["true", "false", "on", "off", "auto"], attributes: ["label", "idurl", "id", "url", "linecolor", "linecolour", "textcolor", "textcolour", "textbgcolor", "textbgcolour", "arclinecolor", "arclinecolour", "arctextcolor", "arctextcolour", "arctextbgcolor", "arctextbgcolour", "arcskip", "title", "deactivate", "activate", "activation"], brackets: ["\\{", "\\}"], arcsWords: ["note", "abox", "rbox", "box", "alt", "else", "opt", "break", "par", "seq", "strict", "neg", "critical", "ignore", "consider", "assert", "loop", "ref", "exc"], arcsOthers: ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"], singlecomment: ["//", "#"], operators: ["="] });
function n(t) {
  return new RegExp("^\\b(" + t.join("|") + ")\\b", "i");
}
function o(t) {
  return new RegExp("^(?:" + t.join("|") + ")", "i");
}
function i() {
  return { inComment: false, inString: false, inAttributeList: false, inScript: false };
}
function s(t) {
  return { inComment: t.inComment, inString: t.inString, inAttributeList: t.inAttributeList, inScript: t.inScript };
}
function u(t) {
  return function(r, e) {
    if (r.match(o(t.brackets), true, true)) return "bracket";
    if (!e.inComment) {
      if (r.match(/\/\*[^\*\/]*/, true, true)) return e.inComment = true, "comment";
      if (r.match(o(t.singlecomment), true, true)) return r.skipToEnd(), "comment";
    }
    if (e.inComment) return r.match(/[^\*\/]*\*\//, true, true) ? e.inComment = false : r.skipToEnd(), "comment";
    if (!e.inString && r.match(/\"(\\\"|[^\"])*/, true, true)) return e.inString = true, "string";
    if (e.inString) return r.match(/[^\"]*\"/, true, true) ? e.inString = false : r.skipToEnd(), "string";
    if (t.keywords && r.match(n(t.keywords), true, true) || r.match(n(t.options), true, true) || r.match(n(t.arcsWords), true, true) || r.match(o(t.arcsOthers), true, true)) return "keyword";
    if (t.operators && r.match(o(t.operators), true, true)) return "operator";
    if (t.constants && r.match(o(t.constants), true, true)) return "variable";
    if (!t.inAttributeList && t.attributes && r.match("[", true, true)) return t.inAttributeList = true, "bracket";
    if (t.inAttributeList) {
      if (t.attributes !== null && r.match(n(t.attributes), true, true)) return "attribute";
      if (r.match("]", true, true)) return t.inAttributeList = false, "bracket";
    }
    return r.next(), null;
  };
}
export {
  a as mscgen,
  l as msgenny,
  b as xu
};
