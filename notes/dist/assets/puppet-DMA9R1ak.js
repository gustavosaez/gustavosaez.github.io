var c = {}, s = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;
function a(e, n) {
  for (var i = n.split(" "), o = 0; o < i.length; o++) c[i[o]] = e;
}
a("keyword", "class define site node include import inherits");
a("keyword", "case if else in and elsif default or");
a("atom", "false true running present absent file directory undef");
a("builtin", "action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");
function u(e, n) {
  for (var i, o, t = false; !e.eol() && (i = e.next()) != n.pending; ) {
    if (i === "$" && o != "\\" && n.pending == '"') {
      t = true;
      break;
    }
    o = i;
  }
  return t && e.backUp(1), i == n.pending ? n.continueString = false : n.continueString = true, "string";
}
function l(e, n) {
  var i = e.match(/[\w]+/, false), o = e.match(/(\s+)?\w+\s+=>.*/, false), t = e.match(/(\s+)?[\w:_]+(\s+)?{/, false), f = e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, false), r = e.next();
  if (r === "$") return e.match(s) ? n.continueString ? "variableName.special" : "variable" : "error";
  if (n.continueString) return e.backUp(1), u(e, n);
  if (n.inDefinition) {
    if (e.match(/(\s+)?[\w:_]+(\s+)?/)) return "def";
    e.match(/\s+{/), n.inDefinition = false;
  }
  return n.inInclude ? (e.match(/(\s+)?\S+(\s+)?/), n.inInclude = false, "def") : e.match(/(\s+)?\w+\(/) ? (e.backUp(1), "def") : o ? (e.match(/(\s+)?\w+/), "tag") : i && c.hasOwnProperty(i) ? (e.backUp(1), e.match(/[\w]+/), e.match(/\s+\S+\s+{/, false) && (n.inDefinition = true), i == "include" && (n.inInclude = true), c[i]) : /(^|\s+)[A-Z][\w:_]+/.test(i) ? (e.backUp(1), e.match(/(^|\s+)[A-Z][\w:_]+/), "def") : t ? (e.match(/(\s+)?[\w:_]+/), "def") : f ? (e.match(/(\s+)?[@]{1,2}/), "atom") : r == "#" ? (e.skipToEnd(), "comment") : r == "'" || r == '"' ? (n.pending = r, u(e, n)) : r == "{" || r == "}" ? "bracket" : r == "/" ? (e.match(/^[^\/]*\//), "string.special") : r.match(/[0-9]/) ? (e.eatWhile(/[0-9]+/), "number") : r == "=" ? (e.peek() == ">" && e.next(), "operator") : (e.eatWhile(/[\w-]/), null);
}
const p = { name: "puppet", startState: function() {
  var e = {};
  return e.inDefinition = false, e.inInclude = false, e.continueString = false, e.pending = false, e;
}, token: function(e, n) {
  return e.eatSpace() ? null : l(e, n);
} };
export {
  p as puppet
};
