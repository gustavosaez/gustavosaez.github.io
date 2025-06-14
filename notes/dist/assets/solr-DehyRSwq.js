var u = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/, f = /[\|\!\+\-\*\?\~\^\&]/, l = /^(OR|AND|NOT|TO)$/;
function k(n) {
  return parseFloat(n).toString() === n;
}
function a(n) {
  return function(e, r) {
    for (var t = false, o; (o = e.next()) != null && !(o == n && !t); ) t = !t && o == "\\";
    return t || (r.tokenize = i), "string";
  };
}
function c(n) {
  return function(e, r) {
    return n == "|" ? e.eat(/\|/) : n == "&" && e.eat(/\&/), r.tokenize = i, "operator";
  };
}
function s(n) {
  return function(e, r) {
    for (var t = n; (n = e.peek()) && n.match(u) != null; ) t += e.next();
    return r.tokenize = i, l.test(t) ? "operator" : k(t) ? "number" : e.peek() == ":" ? "propertyName" : "string";
  };
}
function i(n, e) {
  var r = n.next();
  return r == '"' ? e.tokenize = a(r) : f.test(r) ? e.tokenize = c(r) : u.test(r) && (e.tokenize = s(r)), e.tokenize != i ? e.tokenize(n, e) : null;
}
const p = { name: "solr", startState: function() {
  return { tokenize: i };
}, token: function(n, e) {
  return n.eatSpace() ? null : e.tokenize(n, e);
} };
export {
  p as solr
};
