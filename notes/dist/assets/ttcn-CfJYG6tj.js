function o(e) {
  for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) t[n[r]] = true;
  return t;
}
const i = { keywords: o("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"), builtin: o("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"), types: o("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"), timerOps: o("read running start stop timeout"), portOps: o("call catch check clear getcall getreply halt raise receive reply send trigger"), configOps: o("create connect disconnect done kill killed map unmap"), verdictOps: o("getverdict setverdict"), sutOps: o("action"), functionOps: o("apply derefers refers"), verdictConsts: o("error fail inconc none pass"), booleanConsts: o("true false"), otherConsts: o("null NULL omit"), visibilityModifiers: o("private public friend"), templateMatch: o("complement ifpresent subset superset permutation") };
var h = [];
function p(e) {
  if (e) for (var t in e) e.hasOwnProperty(t) && h.push(t);
}
p(i.keywords);
p(i.builtin);
p(i.timerOps);
p(i.portOps);
var y = i.keywords || {}, v = i.builtin || {}, x = i.timerOps || {}, g = i.portOps || {}, k = i.configOps || {}, O = i.verdictOps || {}, w = i.sutOps || {}, E = i.functionOps || {}, C = i.verdictConsts || {}, I = i.booleanConsts || {}, z = i.otherConsts || {}, L = i.types || {}, M = i.visibilityModifiers || {}, S = i.templateMatch || {}, W = i.indentStatements !== false, d = /[+\-*&@=<>!\/]/, l;
function T(e, t) {
  var n = e.next();
  if (n == '"' || n == "'") return t.tokenize = N(n), t.tokenize(e, t);
  if (/[\[\]{}\(\),;\\:\?\.]/.test(n)) return l = n, "punctuation";
  if (n == "#") return e.skipToEnd(), "atom";
  if (n == "%") return e.eatWhile(/\b/), "atom";
  if (/\d/.test(n)) return e.eatWhile(/[\w\.]/), "number";
  if (n == "/") {
    if (e.eat("*")) return t.tokenize = m, m(e, t);
    if (e.eat("/")) return e.skipToEnd(), "comment";
  }
  if (d.test(n)) return n == "@" && (e.match("try") || e.match("catch") || e.match("lazy")) ? "keyword" : (e.eatWhile(d), "operator");
  e.eatWhile(/[\w\$_\xa1-\uffff]/);
  var r = e.current();
  return y.propertyIsEnumerable(r) ? "keyword" : v.propertyIsEnumerable(r) ? "builtin" : x.propertyIsEnumerable(r) || k.propertyIsEnumerable(r) || O.propertyIsEnumerable(r) || g.propertyIsEnumerable(r) || w.propertyIsEnumerable(r) || E.propertyIsEnumerable(r) ? "def" : C.propertyIsEnumerable(r) || I.propertyIsEnumerable(r) || z.propertyIsEnumerable(r) ? "string" : L.propertyIsEnumerable(r) ? "typeName.standard" : M.propertyIsEnumerable(r) ? "modifier" : S.propertyIsEnumerable(r) ? "atom" : "variable";
}
function N(e) {
  return function(t, n) {
    for (var r = false, c, f = false; (c = t.next()) != null; ) {
      if (c == e && !r) {
        var s = t.peek();
        s && (s = s.toLowerCase(), (s == "b" || s == "h" || s == "o") && t.next()), f = true;
        break;
      }
      r = !r && c == "\\";
    }
    return f && (n.tokenize = null), "string";
  };
}
function m(e, t) {
  for (var n = false, r; r = e.next(); ) {
    if (r == "/" && n) {
      t.tokenize = null;
      break;
    }
    n = r == "*";
  }
  return "comment";
}
function b(e, t, n, r, c) {
  this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = c;
}
function a(e, t, n) {
  var r = e.indented;
  return e.context && e.context.type == "statement" && (r = e.context.indented), e.context = new b(r, t, n, null, e.context);
}
function u(e) {
  var t = e.context.type;
  return (t == ")" || t == "]" || t == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
const P = { name: "ttcn", startState: function() {
  return { tokenize: null, context: new b(0, 0, "top", false), indented: 0, startOfLine: true };
}, token: function(e, t) {
  var n = t.context;
  if (e.sol() && (n.align == null && (n.align = false), t.indented = e.indentation(), t.startOfLine = true), e.eatSpace()) return null;
  l = null;
  var r = (t.tokenize || T)(e, t);
  if (r == "comment") return r;
  if (n.align == null && (n.align = true), (l == ";" || l == ":" || l == ",") && n.type == "statement") u(t);
  else if (l == "{") a(t, e.column(), "}");
  else if (l == "[") a(t, e.column(), "]");
  else if (l == "(") a(t, e.column(), ")");
  else if (l == "}") {
    for (; n.type == "statement"; ) n = u(t);
    for (n.type == "}" && (n = u(t)); n.type == "statement"; ) n = u(t);
  } else l == n.type ? u(t) : W && ((n.type == "}" || n.type == "top") && l != ";" || n.type == "statement" && l == "newstatement") && a(t, e.column(), "statement");
  return t.startOfLine = false, r;
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } }, autocomplete: h } };
export {
  P as ttcn
};
