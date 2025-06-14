function k(n) {
  c(n, "start");
  var i = {}, e = n.languageData || {}, p = false;
  for (var d in n) if (d != e && n.hasOwnProperty(d)) for (var g = i[d] = [], r = n[d], t = 0; t < r.length; t++) {
    var f = r[t];
    g.push(new s(f, n)), (f.indent || f.dedent) && (p = true);
  }
  return { name: e.name, startState: function() {
    return { state: "start", pending: null, indent: p ? [] : null };
  }, copyState: function(o) {
    var u = { state: o.state, pending: o.pending, indent: o.indent && o.indent.slice(0) };
    return o.stack && (u.stack = o.stack.slice(0)), u;
  }, token: l(i), indent: x(i, e), mergeTokens: e.mergeTokens, languageData: e };
}
function c(n, i) {
  if (!n.hasOwnProperty(i)) throw new Error("Undefined state " + i + " in simple mode");
}
function h(n, i) {
  if (!n) return /(?:)/;
  var e = "";
  return n instanceof RegExp ? (n.ignoreCase && (e = "i"), n = n.source) : n = String(n), new RegExp("^(?:" + n + ")", e);
}
function a(n) {
  if (!n) return null;
  if (n.apply) return n;
  if (typeof n == "string") return n.replace(/\./g, " ");
  for (var i = [], e = 0; e < n.length; e++) i.push(n[e] && n[e].replace(/\./g, " "));
  return i;
}
function s(n, i) {
  (n.next || n.push) && c(i, n.next || n.push), this.regex = h(n.regex), this.token = a(n.token), this.data = n;
}
function l(n) {
  return function(i, e) {
    if (e.pending) {
      var p = e.pending.shift();
      return e.pending.length == 0 && (e.pending = null), i.pos += p.text.length, p.token;
    }
    for (var d = n[e.state], g = 0; g < d.length; g++) {
      var r = d[g], t = (!r.data.sol || i.sol()) && i.match(r.regex);
      if (t) {
        r.data.next ? e.state = r.data.next : r.data.push ? ((e.stack || (e.stack = [])).push(e.state), e.state = r.data.push) : r.data.pop && e.stack && e.stack.length && (e.state = e.stack.pop()), r.data.indent && e.indent.push(i.indentation() + i.indentUnit), r.data.dedent && e.indent.pop();
        var f = r.token;
        if (f && f.apply && (f = f(t)), t.length > 2 && r.token && typeof r.token != "string") {
          e.pending = [];
          for (var o = 2; o < t.length; o++) t[o] && e.pending.push({ text: t[o], token: r.token[o - 1] });
          return i.backUp(t[0].length - (t[1] ? t[1].length : 0)), f[0];
        } else return f && f.join ? f[0] : f;
      }
    }
    return i.next(), null;
  };
}
function x(n, i) {
  return function(e, p) {
    if (e.indent == null || i.dontIndentStates && i.dontIndentStates.indexOf(e.state) > -1) return null;
    var d = e.indent.length - 1, g = n[e.state];
    n: for (; ; ) {
      for (var r = 0; r < g.length; r++) {
        var t = g[r];
        if (t.data.dedent && t.data.dedentIfLineStart !== false) {
          var f = t.regex.exec(p);
          if (f && f[0]) {
            d--, (t.next || t.push) && (g = n[t.next || t.push]), p = p.slice(f[0].length);
            continue n;
          }
        }
      }
      break;
    }
    return d < 0 ? 0 : e.indent[d];
  };
}
export {
  k as s
};
