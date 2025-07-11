function A(i) {
  var o = i.statementIndentUnit, u = i.dontAlignCalls, c = i.noIndentKeywords || [], s = i.multiLineStrings, a = i.hooks || {};
  function g(e) {
    for (var n = {}, t = e.split(" "), r = 0; r < t.length; ++r) n[t[r]] = true;
    return n;
  }
  var h = g("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"), w = /[\+\-\*\/!~&|^%=?:]/, k = /[\[\]{}()]/, b = /\d[0-9_]*/, I = /\d*\s*'s?d\s*\d[0-9_]*/i, O = /\d*\s*'s?b\s*[xz01][xz01_]*/i, T = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i, W = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i, B = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i, M = /^((\w+)|[)}\]])/, U = /[)}\]]/, d, v, K = g("case checker class clocking config function generate interface module package primitive program property specify sequence table task"), f = {};
  for (var m in K) f[m] = "end" + m;
  f.begin = "end", f.casex = "endcase", f.casez = "endcase", f.do = "while", f.fork = "join;join_any;join_none", f.covergroup = "endgroup";
  for (var V in c) {
    var m = c[V];
    f[m] && (f[m] = void 0);
  }
  var R = g("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");
  function _(e, n) {
    var t = e.peek(), r;
    if (a[t] && (r = a[t](e, n)) != false || a.tokenBase && (r = a.tokenBase(e, n)) != false) return r;
    if (/[,;:\.]/.test(t)) return d = e.next(), null;
    if (k.test(t)) return d = e.next(), "bracket";
    if (t == "`") return e.next(), e.eatWhile(/[\w\$_]/) ? "def" : null;
    if (t == "$") return e.next(), e.eatWhile(/[\w\$_]/) ? "meta" : null;
    if (t == "#") return e.next(), e.eatWhile(/[\d_.]/), "def";
    if (t == '"') return e.next(), n.tokenize = D(t), n.tokenize(e, n);
    if (t == "/") {
      if (e.next(), e.eat("*")) return n.tokenize = L, L(e, n);
      if (e.eat("/")) return e.skipToEnd(), "comment";
      e.backUp(1);
    }
    if (e.match(B) || e.match(I) || e.match(O) || e.match(T) || e.match(W) || e.match(b) || e.match(B)) return "number";
    if (e.eatWhile(w)) return "meta";
    if (e.eatWhile(/[\w\$_]/)) {
      var l = e.current();
      return h[l] ? (f[l] && (d = "newblock"), R[l] && (d = "newstatement"), v = l, "keyword") : "variable";
    }
    return e.next(), null;
  }
  function D(e) {
    return function(n, t) {
      for (var r = false, l, y = false; (l = n.next()) != null; ) {
        if (l == e && !r) {
          y = true;
          break;
        }
        r = !r && l == "\\";
      }
      return (y || !(r || s)) && (t.tokenize = _), "string";
    };
  }
  function L(e, n) {
    for (var t = false, r; r = e.next(); ) {
      if (r == "/" && t) {
        n.tokenize = _;
        break;
      }
      t = r == "*";
    }
    return "comment";
  }
  function j(e, n, t, r, l) {
    this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = l;
  }
  function p(e, n, t) {
    var r = e.indented, l = new j(r, n, t, null, e.context);
    return e.context = l;
  }
  function C(e) {
    var n = e.context.type;
    return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
  }
  function N(e, n) {
    if (e == n) return true;
    var t = n.split(";");
    for (var r in t) if (e == t[r]) return true;
    return false;
  }
  function P() {
    var e = [];
    for (var n in f) if (f[n]) {
      var t = f[n].split(";");
      for (var r in t) e.push(t[r]);
    }
    var l = new RegExp("[{}()\\[\\]]|(" + e.join("|") + ")$");
    return l;
  }
  return { name: "verilog", startState: function(e) {
    var n = { tokenize: null, context: new j(-e, 0, "top", false), indented: 0, startOfLine: true };
    return a.startState && a.startState(n), n;
  }, token: function(e, n) {
    var t = n.context;
    if (e.sol() && (t.align == null && (t.align = false), n.indented = e.indentation(), n.startOfLine = true), a.token) {
      var r = a.token(e, n);
      if (r !== void 0) return r;
    }
    if (e.eatSpace()) return null;
    d = null, v = null;
    var r = (n.tokenize || _)(e, n);
    if (r == "comment" || r == "meta" || r == "variable") return r;
    if (t.align == null && (t.align = true), d == t.type) C(n);
    else if (d == ";" && t.type == "statement" || t.type && N(v, t.type)) for (t = C(n); t && t.type == "statement"; ) t = C(n);
    else if (d == "{") p(n, e.column(), "}");
    else if (d == "[") p(n, e.column(), "]");
    else if (d == "(") p(n, e.column(), ")");
    else if (t && t.type == "endcase" && d == ":") p(n, e.column(), "statement");
    else if (d == "newstatement") p(n, e.column(), "statement");
    else if (d == "newblock" && !(v == "function" && t && (t.type == "statement" || t.type == "endgroup"))) {
      if (!(v == "task" && t && t.type == "statement")) {
        var l = f[v];
        p(n, e.column(), l);
      }
    }
    return n.startOfLine = false, r;
  }, indent: function(e, n, t) {
    if (e.tokenize != _ && e.tokenize != null) return null;
    if (a.indent) {
      var r = a.indent(e);
      if (r >= 0) return r;
    }
    var l = e.context, y = n && n.charAt(0);
    l.type == "statement" && y == "}" && (l = l.prev);
    var x = false, $ = n.match(M);
    return $ && (x = N($[0], l.type)), l.type == "statement" ? l.indented + (y == "{" ? 0 : o || t.unit) : U.test(l.type) && l.align && !u ? l.column + (x ? 0 : 1) : l.type == ")" && !x ? l.indented + (o || t.unit) : l.indented + (x ? 0 : t.unit);
  }, languageData: { indentOnInput: P(), commentTokens: { line: "//", block: { open: "/*", close: "*/" } } } };
}
const J = A({});
var z = { "|": "link", ">": "property", $: "variable", $$: "variable", "?$": "qualifier", "?*": "qualifier", "-": "contentSeparator", "/": "property", "/-": "property", "@": "variableName.special", "@-": "variableName.special", "@++": "variableName.special", "@+=": "variableName.special", "@+=-": "variableName.special", "@--": "variableName.special", "@-=": "variableName.special", "%+": "tag", "%-": "tag", "%": "tag", ">>": "tag", "<<": "tag", "<>": "tag", "#": "tag", "^": "attribute", "^^": "attribute", "^!": "attribute", "*": "variable", "**": "variable", "\\": "keyword", '"': "comment" }, E = { "/": "beh-hier", ">": "beh-hier", "-": "phys-hier", "|": "pipe", "?": "when", "@": "stage", "\\": "keyword" }, S = 3, q = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/, F = /^[! ] */, G = /^\/[\/\*]/;
const Q = A({ hooks: { electricInput: false, token: function(i, o) {
  var u = void 0, c;
  if (i.sol() && !o.tlvInBlockComment) {
    i.peek() == "\\" && (u = "def", i.skipToEnd(), i.string.match(/\\SV/) ? o.tlvCodeActive = false : i.string.match(/\\TLV/) && (o.tlvCodeActive = true)), o.tlvCodeActive && i.pos == 0 && o.indented == 0 && (c = i.match(F, false)) && (o.indented = c[0].length);
    var s = o.indented, a = s / S;
    if (a <= o.tlvIndentationStyle.length) {
      var g = i.string.length == s, h = a * S;
      if (h < i.string.length) {
        var w = i.string.slice(h), k = w[0];
        E[k] && (c = w.match(q)) && z[c[1]] && (s += S, k == "\\" && h > 0 || (o.tlvIndentationStyle[a] = E[k], a++));
      }
      if (!g) for (; o.tlvIndentationStyle.length > a; ) o.tlvIndentationStyle.pop();
    }
    o.tlvNextIndent = s;
  }
  if (o.tlvCodeActive) {
    var c;
    if (u === void 0) if (o.tlvInBlockComment) i.match(/^.*?\*\//) ? o.tlvInBlockComment = false : i.skipToEnd(), u = "comment";
    else if ((c = i.match(G)) && !o.tlvInBlockComment) c[0] == "//" ? i.skipToEnd() : o.tlvInBlockComment = true, u = "comment";
    else if (c = i.match(q)) {
      var b = c[1], I = c[2];
      z.hasOwnProperty(b) && (I.length > 0 || i.eol()) ? u = z[b] : i.backUp(i.current().length - 1);
    } else i.match(/^\t+/) ? u = "invalid" : i.match(/^[\[\]{}\(\);\:]+/) ? u = "meta" : (c = i.match(/^[mM]4([\+_])?[\w\d_]*/)) ? u = c[1] == "+" ? "keyword.special" : "keyword" : i.match(/^ +/) ? i.eol() && (u = "error") : i.match(/^[\w\d_]+/) ? u = "number" : i.next();
  } else i.match(/^[mM]4([\w\d_]*)/) && (u = "keyword");
  return u;
}, indent: function(i) {
  return i.tlvCodeActive == true ? i.tlvNextIndent : -1;
}, startState: function(i) {
  i.tlvIndentationStyle = [], i.tlvCodeActive = true, i.tlvNextIndent = -1, i.tlvInBlockComment = false;
} } });
export {
  Q as tlv,
  J as verilog
};
