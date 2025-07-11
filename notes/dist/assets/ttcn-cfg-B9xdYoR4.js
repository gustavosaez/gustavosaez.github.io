function I(e) {
  for (var n = {}, T = e.split(" "), E = 0; E < T.length; ++E) n[T[E]] = true;
  return n;
}
const r = { keywords: I("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"), fileNCtrlMaskOptions: I("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"), externalCommands: I("BeginControlPart EndControlPart BeginTestCase EndTestCase") };
var A = r.keywords, U = r.fileNCtrlMaskOptions, R = r.externalCommands, S = r.indentStatements !== false, O = /[\|]/, t;
function u(e, n) {
  var T = e.next();
  if (T == '"' || T == "'") return n.tokenize = P(T), n.tokenize(e, n);
  if (/[:=]/.test(T)) return t = T, "punctuation";
  if (T == "#") return e.skipToEnd(), "comment";
  if (/\d/.test(T)) return e.eatWhile(/[\w\.]/), "number";
  if (O.test(T)) return e.eatWhile(O), "operator";
  if (T == "[") return e.eatWhile(/[\w_\]]/), "number";
  e.eatWhile(/[\w\$_]/);
  var E = e.current();
  return A.propertyIsEnumerable(E) ? "keyword" : U.propertyIsEnumerable(E) ? "atom" : R.propertyIsEnumerable(E) ? "deleted" : "variable";
}
function P(e) {
  return function(n, T) {
    for (var E = false, i, l = false; (i = n.next()) != null; ) {
      if (i == e && !E) {
        var C = n.peek();
        C && (C = C.toLowerCase(), (C == "b" || C == "h" || C == "o") && n.next()), l = true;
        break;
      }
      E = !E && i == "\\";
    }
    return l && (T.tokenize = null), "string";
  };
}
function _(e, n, T, E, i) {
  this.indented = e, this.column = n, this.type = T, this.align = E, this.prev = i;
}
function N(e, n, T) {
  var E = e.indented;
  return e.context && e.context.type == "statement" && (E = e.context.indented), e.context = new _(E, n, T, null, e.context);
}
function o(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
const L = { name: "ttcn", startState: function() {
  return { tokenize: null, context: new _(0, 0, "top", false), indented: 0, startOfLine: true };
}, token: function(e, n) {
  var T = n.context;
  if (e.sol() && (T.align == null && (T.align = false), n.indented = e.indentation(), n.startOfLine = true), e.eatSpace()) return null;
  t = null;
  var E = (n.tokenize || u)(e, n);
  if (E == "comment") return E;
  if (T.align == null && (T.align = true), (t == ";" || t == ":" || t == ",") && T.type == "statement") o(n);
  else if (t == "{") N(n, e.column(), "}");
  else if (t == "[") N(n, e.column(), "]");
  else if (t == "(") N(n, e.column(), ")");
  else if (t == "}") {
    for (; T.type == "statement"; ) T = o(n);
    for (T.type == "}" && (T = o(n)); T.type == "statement"; ) T = o(n);
  } else t == T.type ? o(n) : S && ((T.type == "}" || T.type == "top") && t != ";" || T.type == "statement" && t == "newstatement") && N(n, e.column(), "statement");
  return n.startOfLine = false, E;
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "#" } } };
export {
  L as ttcnCfg
};
