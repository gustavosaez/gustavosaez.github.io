var S = ["-type", "-spec", "-export_type", "-opaque"], x = ["after", "begin", "catch", "case", "cond", "end", "fun", "if", "let", "of", "query", "receive", "try", "when"], z = /[\->,;]/, E = ["->", ";", ","], T = ["and", "andalso", "band", "bnot", "bor", "bsl", "bsr", "bxor", "div", "not", "or", "orelse", "rem", "xor"], R = /[\+\-\*\/<>=\|:!]/, A = ["=", "+", "-", "*", "/", ">", ">=", "<", "=<", "=:=", "==", "=/=", "/=", "||", "<-", "!"], U = /[<\(\[\{]/, b = ["<<", "(", "[", "{"], Z = /[>\)\]\}]/, y = ["}", "]", ")", ">>"], m = ["is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_record", "is_reference", "is_tuple", "atom", "binary", "bitstring", "boolean", "function", "integer", "list", "number", "pid", "port", "record", "reference", "tuple"], P = ["abs", "adler32", "adler32_combine", "alive", "apply", "atom_to_binary", "atom_to_list", "binary_to_atom", "binary_to_existing_atom", "binary_to_list", "binary_to_term", "bit_size", "bitstring_to_list", "byte_size", "check_process_code", "contact_binary", "crc32", "crc32_combine", "date", "decode_packet", "delete_module", "disconnect_node", "element", "erase", "exit", "float", "float_to_list", "garbage_collect", "get", "get_keys", "group_leader", "halt", "hd", "integer_to_list", "internal_bif", "iolist_size", "iolist_to_binary", "is_alive", "is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_process_alive", "is_record", "is_reference", "is_tuple", "length", "link", "list_to_atom", "list_to_binary", "list_to_bitstring", "list_to_existing_atom", "list_to_float", "list_to_integer", "list_to_pid", "list_to_tuple", "load_module", "make_ref", "module_loaded", "monitor_node", "node", "node_link", "node_unlink", "nodes", "notalive", "now", "open_port", "pid_to_list", "port_close", "port_command", "port_connect", "port_control", "pre_loaded", "process_flag", "process_info", "processes", "purge_module", "put", "register", "registered", "round", "self", "setelement", "size", "spawn", "spawn_link", "spawn_monitor", "spawn_opt", "split_binary", "statistics", "term_to_binary", "time", "throw", "tl", "trunc", "tuple_size", "tuple_to_list", "unlink", "unregister", "whereis"], p = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/, q = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
function j(e, n) {
  if (n.in_string) return n.in_string = !v(e), t(n, e, "string");
  if (n.in_atom) return n.in_atom = !h(e), t(n, e, "atom");
  if (e.eatSpace()) return t(n, e, "whitespace");
  if (!_(n) && e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) return u(e.current(), S) ? t(n, e, "type") : t(n, e, "attribute");
  var r = e.next();
  if (r == "%") return e.skipToEnd(), t(n, e, "comment");
  if (r == ":") return t(n, e, "colon");
  if (r == "?") return e.eatSpace(), e.eatWhile(p), t(n, e, "macro");
  if (r == "#") return e.eatSpace(), e.eatWhile(p), t(n, e, "record");
  if (r == "$") return e.next() == "\\" && !e.match(q) ? t(n, e, "error") : t(n, e, "number");
  if (r == ".") return t(n, e, "dot");
  if (r == "'") {
    if (!(n.in_atom = !h(e))) {
      if (e.match(/\s*\/\s*[0-9]/, false)) return e.match(/\s*\/\s*[0-9]/, true), t(n, e, "fun");
      if (e.match(/\s*\(/, false) || e.match(/\s*:/, false)) return t(n, e, "function");
    }
    return t(n, e, "atom");
  }
  if (r == '"') return n.in_string = !v(e), t(n, e, "string");
  if (/[A-Z_Ø-ÞÀ-Ö]/.test(r)) return e.eatWhile(p), t(n, e, "variable");
  if (/[a-z_ß-öø-ÿ]/.test(r)) {
    if (e.eatWhile(p), e.match(/\s*\/\s*[0-9]/, false)) return e.match(/\s*\/\s*[0-9]/, true), t(n, e, "fun");
    var i = e.current();
    return u(i, x) ? t(n, e, "keyword") : u(i, T) ? t(n, e, "operator") : e.match(/\s*\(/, false) ? u(i, P) && (_(n).token != ":" || _(n, 2).token == "erlang") ? t(n, e, "builtin") : u(i, m) ? t(n, e, "guard") : t(n, e, "function") : Q(e) == ":" ? i == "erlang" ? t(n, e, "builtin") : t(n, e, "function") : u(i, ["true", "false"]) ? t(n, e, "boolean") : t(n, e, "atom");
  }
  var l = /[0-9]/, o = /[0-9a-zA-Z]/;
  return l.test(r) ? (e.eatWhile(l), e.eat("#") ? e.eatWhile(o) || e.backUp(1) : e.eat(".") && (e.eatWhile(l) ? e.eat(/[eE]/) && (e.eat(/[-+]/) ? e.eatWhile(l) || e.backUp(2) : e.eatWhile(l) || e.backUp(1)) : e.backUp(1)), t(n, e, "number")) : g(e, U, b) ? t(n, e, "open_paren") : g(e, Z, y) ? t(n, e, "close_paren") : k(e, z, E) ? t(n, e, "separator") : k(e, R, A) ? t(n, e, "operator") : t(n, e, null);
}
function g(e, n, r) {
  if (e.current().length == 1 && n.test(e.current())) {
    for (e.backUp(1); n.test(e.peek()); ) if (e.next(), u(e.current(), r)) return true;
    e.backUp(e.current().length - 1);
  }
  return false;
}
function k(e, n, r) {
  if (e.current().length == 1 && n.test(e.current())) {
    for (; n.test(e.peek()); ) e.next();
    for (; 0 < e.current().length; ) {
      if (u(e.current(), r)) return true;
      e.backUp(1);
    }
    e.next();
  }
  return false;
}
function v(e) {
  return w(e, '"', "\\");
}
function h(e) {
  return w(e, "'", "\\");
}
function w(e, n, r) {
  for (; !e.eol(); ) {
    var i = e.next();
    if (i == n) return true;
    i == r && e.next();
  }
  return false;
}
function Q(e) {
  var n = e.match(/^\s*([^\s%])/, false);
  return n ? n[1] : "";
}
function u(e, n) {
  return -1 < n.indexOf(e);
}
function t(e, n, r) {
  switch (N(e, D(r, n)), r) {
    case "atom":
      return "atom";
    case "attribute":
      return "attribute";
    case "boolean":
      return "atom";
    case "builtin":
      return "builtin";
    case "close_paren":
      return null;
    case "colon":
      return null;
    case "comment":
      return "comment";
    case "dot":
      return null;
    case "error":
      return "error";
    case "fun":
      return "meta";
    case "function":
      return "tag";
    case "guard":
      return "property";
    case "keyword":
      return "keyword";
    case "macro":
      return "macroName";
    case "number":
      return "number";
    case "open_paren":
      return null;
    case "operator":
      return "operator";
    case "record":
      return "bracket";
    case "separator":
      return null;
    case "string":
      return "string";
    case "type":
      return "def";
    case "variable":
      return "variable";
    default:
      return null;
  }
}
function W(e, n, r, i) {
  return { token: e, column: n, indent: r, type: i };
}
function D(e, n) {
  return W(n.current(), n.column(), n.indentation(), e);
}
function I(e) {
  return W(e, 0, 0, e);
}
function _(e, n) {
  var r = e.tokenStack.length, i = n || 1;
  return r < i ? false : e.tokenStack[r - i];
}
function N(e, n) {
  n.type == "comment" || n.type == "whitespace" || (e.tokenStack = O(e.tokenStack, n), e.tokenStack = $(e.tokenStack));
}
function O(e, n) {
  var r = e.length - 1;
  return 0 < r && e[r].type === "record" && n.type === "dot" ? e.pop() : (0 < r && e[r].type === "group" && e.pop(), e.push(n)), e;
}
function $(e) {
  if (!e.length) return e;
  var n = e.length - 1;
  if (e[n].type === "dot") return [];
  if (n > 1 && e[n].type === "fun" && e[n - 1].token === "fun") return e.slice(0, n - 1);
  switch (e[n].token) {
    case "}":
      return a(e, { g: ["{"] });
    case "]":
      return a(e, { i: ["["] });
    case ")":
      return a(e, { i: ["("] });
    case ">>":
      return a(e, { i: ["<<"] });
    case "end":
      return a(e, { i: ["begin", "case", "fun", "if", "receive", "try"] });
    case ",":
      return a(e, { e: ["begin", "try", "when", "->", ",", "(", "[", "{", "<<"] });
    case "->":
      return a(e, { r: ["when"], m: ["try", "if", "case", "receive"] });
    case ";":
      return a(e, { E: ["case", "fun", "if", "receive", "try", "when"] });
    case "catch":
      return a(e, { e: ["try"] });
    case "of":
      return a(e, { e: ["case"] });
    case "after":
      return a(e, { e: ["receive", "try"] });
    default:
      return e;
  }
}
function a(e, n) {
  for (var r in n) for (var i = e.length - 1, l = n[r], o = i - 1; -1 < o; o--) if (u(e[o].token, l)) {
    var c = e.slice(0, o);
    switch (r) {
      case "m":
        return c.concat(e[o]).concat(e[i]);
      case "r":
        return c.concat(e[i]);
      case "i":
        return c;
      case "g":
        return c.concat(I("group"));
      case "E":
        return c.concat(e[o]);
      case "e":
        return c.concat(e[o]);
    }
  }
  return r == "E" ? [] : e;
}
function B(e, n, r) {
  var i, l = C(n), o = _(e, 1), c = _(e, 2);
  return e.in_string || e.in_atom ? null : c ? o.token == "when" ? o.column + r.unit : l === "when" && c.type === "function" ? c.indent + r.unit : l === "(" && o.token === "fun" ? o.column + 3 : l === "catch" && (i = s(e, ["try"])) ? i.column : u(l, ["end", "after", "of"]) ? (i = s(e, ["begin", "case", "fun", "if", "receive", "try"]), i ? i.column : null) : u(l, y) ? (i = s(e, b), i ? i.column : null) : u(o.token, [",", "|", "||"]) || u(l, [",", "|", "||"]) ? (i = F(e), i ? i.column + i.token.length : r.unit) : o.token == "->" ? u(c.token, ["receive", "case", "if", "try"]) ? c.column + r.unit + r.unit : c.column + r.unit : u(o.token, b) ? o.column + o.token.length : (i = G(e), f(i) ? i.column + r.unit : 0) : 0;
}
function C(e) {
  var n = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
  return f(n) && n.index === 0 ? n[0] : "";
}
function F(e) {
  var n = e.tokenStack.slice(0, -1), r = d(n, "type", ["open_paren"]);
  return f(n[r]) ? n[r] : false;
}
function G(e) {
  var n = e.tokenStack, r = d(n, "type", ["open_paren", "separator", "keyword"]), i = d(n, "type", ["operator"]);
  return f(r) && f(i) && r < i ? n[r + 1] : f(r) ? n[r] : false;
}
function s(e, n) {
  var r = e.tokenStack, i = d(r, "token", n);
  return f(r[i]) ? r[i] : false;
}
function d(e, n, r) {
  for (var i = e.length - 1; -1 < i; i--) if (u(e[i][n], r)) return i;
  return false;
}
function f(e) {
  return e !== false && e != null;
}
const H = { name: "erlang", startState() {
  return { tokenStack: [], in_string: false, in_atom: false };
}, token: j, indent: B, languageData: { commentTokens: { line: "%" } } };
export {
  H as erlang
};
