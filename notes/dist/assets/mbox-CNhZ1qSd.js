var o = ["From", "Sender", "Reply-To", "To", "Cc", "Bcc", "Message-ID", "In-Reply-To", "References", "Resent-From", "Resent-Sender", "Resent-To", "Resent-Cc", "Resent-Bcc", "Resent-Message-ID", "Return-Path", "Received"], l = ["Date", "Subject", "Comments", "Keywords", "Resent-Date"], u = /^[ \t]/, d = /^From /, f = new RegExp("^(" + o.join("|") + "): "), c = new RegExp("^(" + l.join("|") + "): "), t = /^[^:]+:/, m = /^[^ ]+@[^ ]+/, p = /^.*?(?=[^ ]+?@[^ ]+)/, H = /^<.*?>/, v = /^.*?(?=<.*>)/;
function h(e) {
  return e === "Subject" ? "header" : "string";
}
function R(e, r) {
  if (e.sol()) {
    if (r.inSeparator = false, r.inHeader && e.match(u)) return null;
    if (r.inHeader = false, r.header = null, e.match(d)) return r.inHeaders = true, r.inSeparator = true, "atom";
    var n, i = false;
    return (n = e.match(c)) || (i = true) && (n = e.match(f)) ? (r.inHeaders = true, r.inHeader = true, r.emailPermitted = i, r.header = n[1], "atom") : r.inHeaders && (n = e.match(t)) ? (r.inHeader = true, r.emailPermitted = true, r.header = n[1], "atom") : (r.inHeaders = false, e.skipToEnd(), null);
  }
  if (r.inSeparator) return e.match(m) ? "link" : (e.match(p) || e.skipToEnd(), "atom");
  if (r.inHeader) {
    var a = h(r.header);
    if (r.emailPermitted) {
      if (e.match(H)) return a + " link";
      if (e.match(v)) return a;
    }
    return e.skipToEnd(), a;
  }
  return e.skipToEnd(), null;
}
const k = { name: "mbox", startState: function() {
  return { inSeparator: false, inHeader: false, emailPermitted: false, header: null, inHeaders: false };
}, token: R, blankLine: function(e) {
  e.inHeaders = e.inSeparator = e.inHeader = false;
}, languageData: { autocomplete: o.concat(l) } };
export {
  k as mbox
};
