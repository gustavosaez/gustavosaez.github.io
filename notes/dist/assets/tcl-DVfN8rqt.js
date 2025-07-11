function s(r) {
  for (var n = {}, t = r.split(" "), e = 0; e < t.length; ++e) n[t[e]] = true;
  return n;
}
var f = s("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"), u = s("if elseif else and not or eq ne in ni for foreach while switch"), c = /[+\-*&%=<>!?^\/\|]/;
function i(r, n, t) {
  return n.tokenize = t, t(r, n);
}
function o(r, n) {
  var t = n.beforeParams;
  n.beforeParams = false;
  var e = r.next();
  if ((e == '"' || e == "'") && n.inParams) return i(r, n, p(e));
  if (/[\[\]{}\(\),;\.]/.test(e)) return e == "(" && t ? n.inParams = true : e == ")" && (n.inParams = false), null;
  if (/\d/.test(e)) return r.eatWhile(/[\w\.]/), "number";
  if (e == "#") return r.eat("*") ? i(r, n, d) : e == "#" && r.match(/ *\[ *\[/) ? i(r, n, k) : (r.skipToEnd(), "comment");
  if (e == '"') return r.skipTo(/"/), "comment";
  if (e == "$") return r.eatWhile(/[$_a-z0-9A-Z\.{:]/), r.eatWhile(/}/), n.beforeParams = true, "builtin";
  if (c.test(e)) return r.eatWhile(c), "comment";
  r.eatWhile(/[\w\$_{}\xa1-\uffff]/);
  var a = r.current().toLowerCase();
  return f && f.propertyIsEnumerable(a) ? "keyword" : u && u.propertyIsEnumerable(a) ? (n.beforeParams = true, "keyword") : null;
}
function p(r) {
  return function(n, t) {
    for (var e = false, a, l = false; (a = n.next()) != null; ) {
      if (a == r && !e) {
        l = true;
        break;
      }
      e = !e && a == "\\";
    }
    return l && (t.tokenize = o), "string";
  };
}
function d(r, n) {
  for (var t = false, e; e = r.next(); ) {
    if (e == "#" && t) {
      n.tokenize = o;
      break;
    }
    t = e == "*";
  }
  return "comment";
}
function k(r, n) {
  for (var t = 0, e; e = r.next(); ) {
    if (e == "#" && t == 2) {
      n.tokenize = o;
      break;
    }
    e == "]" ? t++ : e != " " && (t = 0);
  }
  return "meta";
}
const m = { name: "tcl", startState: function() {
  return { tokenize: o, beforeParams: false, inParams: false };
}, token: function(r, n) {
  return r.eatSpace() ? null : n.tokenize(r, n);
}, languageData: { commentTokens: { line: "#" } } };
export {
  m as tcl
};
