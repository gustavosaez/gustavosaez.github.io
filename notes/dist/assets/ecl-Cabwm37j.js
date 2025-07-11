function l(e) {
  for (var n = {}, t = e.split(" "), r = 0; r < t.length; ++r) n[t[r]] = true;
  return n;
}
function b(e, n) {
  return n.startOfLine ? (e.skipToEnd(), "meta") : false;
}
var g = l("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode"), w = l("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait"), x = l("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath"), f = l("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode"), k = l("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when"), s = l("catch class do else finally for if switch try while"), E = l("true false null"), m = { "#": b }, h = /[+\-*&%=<>!?|\/]/, o;
function p(e, n) {
  var t = e.next();
  if (m[t]) {
    var r = m[t](e, n);
    if (r !== false) return r;
  }
  if (t == '"' || t == "'") return n.tokenize = I(t), n.tokenize(e, n);
  if (/[\[\]{}\(\),;\:\.]/.test(t)) return o = t, null;
  if (/\d/.test(t)) return e.eatWhile(/[\w\.]/), "number";
  if (t == "/") {
    if (e.eat("*")) return n.tokenize = y, y(e, n);
    if (e.eat("/")) return e.skipToEnd(), "comment";
  }
  if (h.test(t)) return e.eatWhile(h), "operator";
  e.eatWhile(/[\w\$_]/);
  var i = e.current().toLowerCase();
  if (g.propertyIsEnumerable(i)) return s.propertyIsEnumerable(i) && (o = "newstatement"), "keyword";
  if (w.propertyIsEnumerable(i)) return s.propertyIsEnumerable(i) && (o = "newstatement"), "variable";
  if (x.propertyIsEnumerable(i)) return s.propertyIsEnumerable(i) && (o = "newstatement"), "modifier";
  if (f.propertyIsEnumerable(i)) return s.propertyIsEnumerable(i) && (o = "newstatement"), "type";
  if (k.propertyIsEnumerable(i)) return s.propertyIsEnumerable(i) && (o = "newstatement"), "builtin";
  for (var a = i.length - 1; a >= 0 && (!isNaN(i[a]) || i[a] == "_"); ) --a;
  if (a > 0) {
    var d = i.substr(0, a + 1);
    if (f.propertyIsEnumerable(d)) return s.propertyIsEnumerable(d) && (o = "newstatement"), "type";
  }
  return E.propertyIsEnumerable(i) ? "atom" : null;
}
function I(e) {
  return function(n, t) {
    for (var r = false, i, a = false; (i = n.next()) != null; ) {
      if (i == e && !r) {
        a = true;
        break;
      }
      r = !r && i == "\\";
    }
    return (a || !r) && (t.tokenize = p), "string";
  };
}
function y(e, n) {
  for (var t = false, r; r = e.next(); ) {
    if (r == "/" && t) {
      n.tokenize = p;
      break;
    }
    t = r == "*";
  }
  return "comment";
}
function v(e, n, t, r, i) {
  this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = i;
}
function c(e, n, t) {
  return e.context = new v(e.indented, n, t, null, e.context);
}
function u(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
const z = { name: "ecl", startState: function(e) {
  return { tokenize: null, context: new v(-e, 0, "top", false), indented: 0, startOfLine: true };
}, token: function(e, n) {
  var t = n.context;
  if (e.sol() && (t.align == null && (t.align = false), n.indented = e.indentation(), n.startOfLine = true), e.eatSpace()) return null;
  o = null;
  var r = (n.tokenize || p)(e, n);
  if (r == "comment" || r == "meta") return r;
  if (t.align == null && (t.align = true), (o == ";" || o == ":") && t.type == "statement") u(n);
  else if (o == "{") c(n, e.column(), "}");
  else if (o == "[") c(n, e.column(), "]");
  else if (o == "(") c(n, e.column(), ")");
  else if (o == "}") {
    for (; t.type == "statement"; ) t = u(n);
    for (t.type == "}" && (t = u(n)); t.type == "statement"; ) t = u(n);
  } else o == t.type ? u(n) : (t.type == "}" || t.type == "top" || t.type == "statement" && o == "newstatement") && c(n, e.column(), "statement");
  return n.startOfLine = false, r;
}, indent: function(e, n, t) {
  if (e.tokenize != p && e.tokenize != null) return 0;
  var r = e.context, i = n && n.charAt(0);
  r.type == "statement" && i == "}" && (r = r.prev);
  var a = i == r.type;
  return r.type == "statement" ? r.indented + (i == "{" ? 0 : t.unit) : r.align ? r.column + (a ? 0 : 1) : r.indented + (a ? 0 : t.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/ } };
export {
  z as ecl
};
