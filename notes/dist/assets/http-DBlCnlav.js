function u(r, n) {
  return r.skipToEnd(), n.cur = t, "error";
}
function i(r, n) {
  return r.match(/^HTTP\/\d\.\d/) ? (n.cur = f, "keyword") : r.match(/^[A-Z]+/) && /[ \t]/.test(r.peek()) ? (n.cur = d, "keyword") : u(r, n);
}
function f(r, n) {
  var e = r.match(/^\d+/);
  if (!e) return u(r, n);
  n.cur = l;
  var o = Number(e[0]);
  return o >= 100 && o < 400 ? "atom" : "error";
}
function l(r, n) {
  return r.skipToEnd(), n.cur = t, null;
}
function d(r, n) {
  return r.eatWhile(/\S/), n.cur = s, "string.special";
}
function s(r, n) {
  return r.match(/^HTTP\/\d\.\d$/) ? (n.cur = t, "keyword") : u(r, n);
}
function t(r) {
  return r.sol() && !r.eat(/[ \t]/) ? r.match(/^.*?:/) ? "atom" : (r.skipToEnd(), "error") : (r.skipToEnd(), "string");
}
function c(r) {
  return r.skipToEnd(), null;
}
const p = { name: "http", token: function(r, n) {
  var e = n.cur;
  return e != t && e != c && r.eatSpace() ? null : e(r, n);
}, blankLine: function(r) {
  r.cur = c;
}, startState: function() {
  return { cur: i };
} };
export {
  p as http
};
