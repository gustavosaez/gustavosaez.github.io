import { javascript as e } from "./javascript-qCveANmP.js";
var f = { "{": "}", "(": ")", "[": "]" };
function p(i) {
  if (typeof i != "object") return i;
  let n = {};
  for (let t in i) {
    let r = i[t];
    n[t] = r instanceof Array ? r.slice() : r;
  }
  return n;
}
class u {
  constructor(n) {
    this.indentUnit = n, this.javaScriptLine = false, this.javaScriptLineExcludesColon = false, this.javaScriptArguments = false, this.javaScriptArgumentsDepth = 0, this.isInterpolating = false, this.interpolationNesting = 0, this.jsState = e.startState(n), this.restOfLine = "", this.isIncludeFiltered = false, this.isEach = false, this.lastTag = "", this.isAttrs = false, this.attrsNest = [], this.inAttributeName = true, this.attributeIsType = false, this.attrValue = "", this.indentOf = 1 / 0, this.indentToken = "";
  }
  copy() {
    var n = new u(this.indentUnit);
    return n.javaScriptLine = this.javaScriptLine, n.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon, n.javaScriptArguments = this.javaScriptArguments, n.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth, n.isInterpolating = this.isInterpolating, n.interpolationNesting = this.interpolationNesting, n.jsState = (e.copyState || p)(this.jsState), n.restOfLine = this.restOfLine, n.isIncludeFiltered = this.isIncludeFiltered, n.isEach = this.isEach, n.lastTag = this.lastTag, n.isAttrs = this.isAttrs, n.attrsNest = this.attrsNest.slice(), n.inAttributeName = this.inAttributeName, n.attributeIsType = this.attributeIsType, n.attrValue = this.attrValue, n.indentOf = this.indentOf, n.indentToken = this.indentToken, n;
  }
}
function h(i, n) {
  if (i.sol() && (n.javaScriptLine = false, n.javaScriptLineExcludesColon = false), n.javaScriptLine) {
    if (n.javaScriptLineExcludesColon && i.peek() === ":") {
      n.javaScriptLine = false, n.javaScriptLineExcludesColon = false;
      return;
    }
    var t = e.token(i, n.jsState);
    return i.eol() && (n.javaScriptLine = false), t || true;
  }
}
function d(i, n) {
  if (n.javaScriptArguments) {
    if (n.javaScriptArgumentsDepth === 0 && i.peek() !== "(") {
      n.javaScriptArguments = false;
      return;
    }
    if (i.peek() === "(" ? n.javaScriptArgumentsDepth++ : i.peek() === ")" && n.javaScriptArgumentsDepth--, n.javaScriptArgumentsDepth === 0) {
      n.javaScriptArguments = false;
      return;
    }
    var t = e.token(i, n.jsState);
    return t || true;
  }
}
function s(i) {
  if (i.match(/^yield\b/)) return "keyword";
}
function S(i) {
  if (i.match(/^(?:doctype) *([^\n]+)?/)) return "meta";
}
function o(i, n) {
  if (i.match("#{")) return n.isInterpolating = true, n.interpolationNesting = 0, "punctuation";
}
function v(i, n) {
  if (n.isInterpolating) {
    if (i.peek() === "}") {
      if (n.interpolationNesting--, n.interpolationNesting < 0) return i.next(), n.isInterpolating = false, "punctuation";
    } else i.peek() === "{" && n.interpolationNesting++;
    return e.token(i, n.jsState) || true;
  }
}
function g(i, n) {
  if (i.match(/^case\b/)) return n.javaScriptLine = true, "keyword";
}
function j(i, n) {
  if (i.match(/^when\b/)) return n.javaScriptLine = true, n.javaScriptLineExcludesColon = true, "keyword";
}
function k(i) {
  if (i.match(/^default\b/)) return "keyword";
}
function b(i, n) {
  if (i.match(/^extends?\b/)) return n.restOfLine = "string", "keyword";
}
function A(i, n) {
  if (i.match(/^append\b/)) return n.restOfLine = "variable", "keyword";
}
function y(i, n) {
  if (i.match(/^prepend\b/)) return n.restOfLine = "variable", "keyword";
}
function L(i, n) {
  if (i.match(/^block\b *(?:(prepend|append)\b)?/)) return n.restOfLine = "variable", "keyword";
}
function w(i, n) {
  if (i.match(/^include\b/)) return n.restOfLine = "string", "keyword";
}
function N(i, n) {
  if (i.match(/^include:([a-zA-Z0-9\-]+)/, false) && i.match("include")) return n.isIncludeFiltered = true, "keyword";
}
function x(i, n) {
  if (n.isIncludeFiltered) {
    var t = l(i, n);
    return n.isIncludeFiltered = false, n.restOfLine = "string", t;
  }
}
function T(i, n) {
  if (i.match(/^mixin\b/)) return n.javaScriptLine = true, "keyword";
}
function I(i, n) {
  if (i.match(/^\+([-\w]+)/)) return i.match(/^\( *[-\w]+ *=/, false) || (n.javaScriptArguments = true, n.javaScriptArgumentsDepth = 0), "variable";
  if (i.match("+#{", false)) return i.next(), n.mixinCallAfter = true, o(i, n);
}
function O(i, n) {
  if (n.mixinCallAfter) return n.mixinCallAfter = false, i.match(/^\( *[-\w]+ *=/, false) || (n.javaScriptArguments = true, n.javaScriptArgumentsDepth = 0), true;
}
function C(i, n) {
  if (i.match(/^(if|unless|else if|else)\b/)) return n.javaScriptLine = true, "keyword";
}
function E(i, n) {
  if (i.match(/^(- *)?(each|for)\b/)) return n.isEach = true, "keyword";
}
function D(i, n) {
  if (n.isEach) {
    if (i.match(/^ in\b/)) return n.javaScriptLine = true, n.isEach = false, "keyword";
    if (i.sol() || i.eol()) n.isEach = false;
    else if (i.next()) {
      for (; !i.match(/^ in\b/, false) && i.next(); ) ;
      return "variable";
    }
  }
}
function F(i, n) {
  if (i.match(/^while\b/)) return n.javaScriptLine = true, "keyword";
}
function m(i, n) {
  var t;
  if (t = i.match(/^(\w(?:[-:\w]*\w)?)\/?/)) return n.lastTag = t[1].toLowerCase(), "tag";
}
function l(i, n) {
  if (i.match(/^:([\w\-]+)/)) return c(i, n), "atom";
}
function V(i, n) {
  if (i.match(/^(!?=|-)/)) return n.javaScriptLine = true, "punctuation";
}
function U(i) {
  if (i.match(/^#([\w-]+)/)) return "builtin";
}
function z(i) {
  if (i.match(/^\.([\w-]+)/)) return "className";
}
function B(i, n) {
  if (i.peek() == "(") return i.next(), n.isAttrs = true, n.attrsNest = [], n.inAttributeName = true, n.attrValue = "", n.attributeIsType = false, "punctuation";
}
function a(i, n) {
  if (n.isAttrs) {
    if (f[i.peek()] && n.attrsNest.push(f[i.peek()]), n.attrsNest[n.attrsNest.length - 1] === i.peek()) n.attrsNest.pop();
    else if (i.eat(")")) return n.isAttrs = false, "punctuation";
    if (n.inAttributeName && i.match(/^[^=,\)!]+/)) return (i.peek() === "=" || i.peek() === "!") && (n.inAttributeName = false, n.jsState = e.startState(2), n.lastTag === "script" && i.current().trim().toLowerCase() === "type" ? n.attributeIsType = true : n.attributeIsType = false), "attribute";
    var t = e.token(i, n.jsState);
    if (n.attrsNest.length === 0 && (t === "string" || t === "variable" || t === "keyword")) try {
      return Function("", "var x " + n.attrValue.replace(/,\s*$/, "").replace(/^!/, "")), n.inAttributeName = true, n.attrValue = "", i.backUp(i.current().length), a(i, n);
    } catch {
    }
    return n.attrValue += i.current(), t || true;
  }
}
function M(i, n) {
  if (i.match(/^&attributes\b/)) return n.javaScriptArguments = true, n.javaScriptArgumentsDepth = 0, "keyword";
}
function R(i) {
  if (i.sol() && i.eatSpace()) return "indent";
}
function Z(i, n) {
  if (i.match(/^ *\/\/(-)?([^\n]*)/)) return n.indentOf = i.indentation(), n.indentToken = "comment", "comment";
}
function $(i) {
  if (i.match(/^: */)) return "colon";
}
function q(i, n) {
  if (i.match(/^(?:\| ?| )([^\n]+)/)) return "string";
  if (i.match(/^(<[^\n]*)/, false)) return c(i, n), i.skipToEnd(), n.indentToken;
}
function G(i, n) {
  if (i.eat(".")) return c(i, n), "dot";
}
function H(i) {
  return i.next(), null;
}
function c(i, n) {
  n.indentOf = i.indentation(), n.indentToken = "string";
}
function J(i, n) {
  if (i.sol() && (n.restOfLine = ""), n.restOfLine) {
    i.skipToEnd();
    var t = n.restOfLine;
    return n.restOfLine = "", t;
  }
}
function K(i) {
  return new u(i);
}
function P(i) {
  return i.copy();
}
function Q(i, n) {
  var t = J(i, n) || v(i, n) || x(i, n) || D(i, n) || a(i, n) || h(i, n) || d(i, n) || O(i, n) || s(i) || S(i) || o(i, n) || g(i, n) || j(i, n) || k(i) || b(i, n) || A(i, n) || y(i, n) || L(i, n) || w(i, n) || N(i, n) || T(i, n) || I(i, n) || C(i, n) || E(i, n) || F(i, n) || m(i, n) || l(i, n) || V(i, n) || U(i) || z(i) || B(i, n) || M(i, n) || R(i) || q(i, n) || Z(i, n) || $(i) || G(i, n) || H(i);
  return t === true ? null : t;
}
const X = { startState: K, copyState: P, token: Q };
export {
  X as pug
};
