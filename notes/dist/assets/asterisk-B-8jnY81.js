var t = ["exten", "same", "include", "ignorepat", "switch"], o = ["#include", "#exec"], c = ["addqueuemember", "adsiprog", "aelsub", "agentlogin", "agentmonitoroutgoing", "agi", "alarmreceiver", "amd", "answer", "authenticate", "background", "backgrounddetect", "bridge", "busy", "callcompletioncancel", "callcompletionrequest", "celgenuserevent", "changemonitor", "chanisavail", "channelredirect", "chanspy", "clearhash", "confbridge", "congestion", "continuewhile", "controlplayback", "dahdiacceptr2call", "dahdibarge", "dahdiras", "dahdiscan", "dahdisendcallreroutingfacility", "dahdisendkeypadfacility", "datetime", "dbdel", "dbdeltree", "deadagi", "dial", "dictate", "directory", "disa", "dumpchan", "eagi", "echo", "endwhile", "exec", "execif", "execiftime", "exitwhile", "extenspy", "externalivr", "festival", "flash", "followme", "forkcdr", "getcpeid", "gosub", "gosubif", "goto", "gotoif", "gotoiftime", "hangup", "iax2provision", "ices", "importvar", "incomplete", "ivrdemo", "jabberjoin", "jabberleave", "jabbersend", "jabbersendgroup", "jabberstatus", "jack", "log", "macro", "macroexclusive", "macroexit", "macroif", "mailboxexists", "meetme", "meetmeadmin", "meetmechanneladmin", "meetmecount", "milliwatt", "minivmaccmess", "minivmdelete", "minivmgreet", "minivmmwi", "minivmnotify", "minivmrecord", "mixmonitor", "monitor", "morsecode", "mp3player", "mset", "musiconhold", "nbscat", "nocdr", "noop", "odbc", "odbc", "odbcfinish", "originate", "ospauth", "ospfinish", "osplookup", "ospnext", "page", "park", "parkandannounce", "parkedcall", "pausemonitor", "pausequeuemember", "pickup", "pickupchan", "playback", "playtones", "privacymanager", "proceeding", "progress", "queue", "queuelog", "raiseexception", "read", "readexten", "readfile", "receivefax", "receivefax", "receivefax", "record", "removequeuemember", "resetcdr", "retrydial", "return", "ringing", "sayalpha", "saycountedadj", "saycountednoun", "saycountpl", "saydigits", "saynumber", "sayphonetic", "sayunixtime", "senddtmf", "sendfax", "sendfax", "sendfax", "sendimage", "sendtext", "sendurl", "set", "setamaflags", "setcallerpres", "setmusiconhold", "sipaddheader", "sipdtmfmode", "sipremoveheader", "skel", "slastation", "slatrunk", "sms", "softhangup", "speechactivategrammar", "speechbackground", "speechcreate", "speechdeactivategrammar", "speechdestroy", "speechloadgrammar", "speechprocessingsound", "speechstart", "speechunloadgrammar", "stackpop", "startmusiconhold", "stopmixmonitor", "stopmonitor", "stopmusiconhold", "stopplaytones", "system", "testclient", "testserver", "transfer", "tryexec", "trysystem", "unpausemonitor", "unpausequeuemember", "userevent", "verbose", "vmauthenticate", "vmsayname", "voicemail", "voicemailmain", "wait", "waitexten", "waitfornoise", "waitforring", "waitforsilence", "waitmusiconhold", "waituntil", "while", "zapateller"];
function l(e, n) {
  var i = "", a = e.next();
  if (n.blockComment) return a == "-" && e.match("-;", true) ? n.blockComment = false : e.skipTo("--;") ? (e.next(), e.next(), e.next(), n.blockComment = false) : e.skipToEnd(), "comment";
  if (a == ";") return e.match("--", true) && !e.match("-", false) ? (n.blockComment = true, "comment") : (e.skipToEnd(), "comment");
  if (a == "[") return e.skipTo("]"), e.eat("]"), "header";
  if (a == '"') return e.skipTo('"'), "string";
  if (a == "'") return e.skipTo("'"), "string.special";
  if (a == "#" && (e.eatWhile(/\w/), i = e.current(), o.indexOf(i) !== -1)) return e.skipToEnd(), "strong";
  if (a == "$") {
    var r = e.peek();
    if (r == "{") return e.skipTo("}"), e.eat("}"), "variableName.special";
  }
  if (e.eatWhile(/\w/), i = e.current(), t.indexOf(i) !== -1) {
    switch (n.extenStart = true, i) {
      case "same":
        n.extenSame = true;
        break;
      case "include":
      case "switch":
      case "ignorepat":
        n.extenInclude = true;
        break;
    }
    return "atom";
  }
}
const s = { name: "asterisk", startState: function() {
  return { blockComment: false, extenStart: false, extenSame: false, extenInclude: false, extenExten: false, extenPriority: false, extenApplication: false };
}, token: function(e, n) {
  var i = "";
  if (e.eatSpace()) return null;
  if (n.extenStart) return e.eatWhile(/[^\s]/), i = e.current(), /^=>?$/.test(i) ? (n.extenExten = true, n.extenStart = false, "strong") : (n.extenStart = false, e.skipToEnd(), "error");
  if (n.extenExten) return n.extenExten = false, n.extenPriority = true, e.eatWhile(/[^,]/), n.extenInclude && (e.skipToEnd(), n.extenPriority = false, n.extenInclude = false), n.extenSame && (n.extenPriority = false, n.extenSame = false, n.extenApplication = true), "tag";
  if (n.extenPriority) return n.extenPriority = false, n.extenApplication = true, e.next(), n.extenSame ? null : (e.eatWhile(/[^,]/), "number");
  if (n.extenApplication) {
    if (e.eatWhile(/,/), i = e.current(), i === ",") return null;
    if (e.eatWhile(/\w/), i = e.current().toLowerCase(), n.extenApplication = false, c.indexOf(i) !== -1) return "def";
  } else return l(e, n);
  return null;
}, languageData: { commentTokens: { line: ";", block: { open: ";--", close: "--;" } } } };
export {
  s as asterisk
};
