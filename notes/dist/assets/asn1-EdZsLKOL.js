function u(i) {
  for (var s = {}, c = i.split(" "), T = 0; T < c.length; ++T) s[c[T]] = true;
  return s;
}
const o = { keywords: u("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"), cmipVerbs: u("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"), compareTypes: u("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"), status: u("current deprecated mandatory obsolete"), tags: u("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"), storage: u("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"), modifier: u("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"), accessTypes: u("not-accessible accessible-for-notify read-only read-create read-write"), multiLineStrings: true };
function g(i) {
  var s = i.keywords || o.keywords, c = i.cmipVerbs || o.cmipVerbs, T = i.compareTypes || o.compareTypes, N = i.status || o.status, d = i.tags || o.tags, f = i.storage || o.storage, m = i.modifier || o.modifier, C = i.accessTypes || o.accessTypes;
  i.multiLineStrings || o.multiLineStrings;
  var R = i.indentStatements !== false, A = /[\|\^]/, E;
  function y(e, n) {
    var t = e.next();
    if (t == '"' || t == "'") return n.tokenize = D(t), n.tokenize(e, n);
    if (/[\[\]\(\){}:=,;]/.test(t)) return E = t, "punctuation";
    if (t == "-" && e.eat("-")) return e.skipToEnd(), "comment";
    if (/\d/.test(t)) return e.eatWhile(/[\w\.]/), "number";
    if (A.test(t)) return e.eatWhile(A), "operator";
    e.eatWhile(/[\w\-]/);
    var r = e.current();
    return s.propertyIsEnumerable(r) ? "keyword" : c.propertyIsEnumerable(r) ? "variableName" : T.propertyIsEnumerable(r) ? "atom" : N.propertyIsEnumerable(r) ? "comment" : d.propertyIsEnumerable(r) ? "typeName" : f.propertyIsEnumerable(r) || m.propertyIsEnumerable(r) || C.propertyIsEnumerable(r) ? "modifier" : "variableName";
  }
  function D(e) {
    return function(n, t) {
      for (var r = false, S, O = false; (S = n.next()) != null; ) {
        if (S == e && !r) {
          var I = n.peek();
          I && (I = I.toLowerCase(), (I == "b" || I == "h" || I == "o") && n.next()), O = true;
          break;
        }
        r = !r && S == "\\";
      }
      return O && (t.tokenize = null), "string";
    };
  }
  function p(e, n, t, r, S) {
    this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = S;
  }
  function a(e, n, t) {
    var r = e.indented;
    return e.context && e.context.type == "statement" && (r = e.context.indented), e.context = new p(r, n, t, null, e.context);
  }
  function l(e) {
    var n = e.context.type;
    return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
  }
  return { name: "asn1", startState: function() {
    return { tokenize: null, context: new p(-2, 0, "top", false), indented: 0, startOfLine: true };
  }, token: function(e, n) {
    var t = n.context;
    if (e.sol() && (t.align == null && (t.align = false), n.indented = e.indentation(), n.startOfLine = true), e.eatSpace()) return null;
    E = null;
    var r = (n.tokenize || y)(e, n);
    if (r == "comment") return r;
    if (t.align == null && (t.align = true), (E == ";" || E == ":" || E == ",") && t.type == "statement") l(n);
    else if (E == "{") a(n, e.column(), "}");
    else if (E == "[") a(n, e.column(), "]");
    else if (E == "(") a(n, e.column(), ")");
    else if (E == "}") {
      for (; t.type == "statement"; ) t = l(n);
      for (t.type == "}" && (t = l(n)); t.type == "statement"; ) t = l(n);
    } else E == t.type ? l(n) : R && ((t.type == "}" || t.type == "top") && E != ";" || t.type == "statement" && E == "newstatement") && a(n, e.column(), "statement");
    return n.startOfLine = false, r;
  }, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "--" } } };
}
export {
  g as asn1
};
