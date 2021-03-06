/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.dom=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=445)}({2:function(e,t){!function(){e.exports=this.lodash}()},445:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"find",(function(){return u}));var o={};n.r(o),n.d(o,"isTabbableIndex",(function(){return d})),n.d(o,"find",(function(){return p})),n.d(o,"findPrevious",(function(){return m})),n.d(o,"findNext",(function(){return h}));var i=["[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",");function a(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function u(e){var t=e.querySelectorAll(i);return Array.from(t).filter((function(e){return!!a(e)&&("AREA"!==e.nodeName||function(e){var t=e.closest("map[name]");if(!t)return!1;var n=document.querySelector('img[usemap="#'+t.name+'"]');return!!n&&a(n)}(e))}))}var c=n(2);function l(e){var t=e.getAttribute("tabindex");return null===t?0:parseInt(t,10)}function d(e){return-1!==l(e)}function f(e,t){return{element:e,index:t}}function s(e){return e.element}function g(e,t){var n=l(e.element),r=l(t.element);return n===r?e.index-t.index:n-r}function v(e){return e.filter(d).map(f).sort(g).map(s).reduce((t={},function(e,n){var r=n.nodeName,o=n.type,i=n.checked,a=n.name;if("INPUT"!==r||"radio"!==o||!a)return e.concat(n);var u=t.hasOwnProperty(a);if(!i&&u)return e;if(u){var l=t[a];e=Object(c.without)(e,l)}return t[a]=n,e.concat(n)}),[]);var t}function p(e){return v(u(e))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.activeElement,t=u(document.body),n=t.indexOf(e);return t.length=n,Object(c.last)(v(t))}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.activeElement,t=u(document.body),n=t.indexOf(e),r=t.slice(n+1).filter((function(t){return!e.contains(t)}));return Object(c.first)(v(r))}var b=window,C=b.DOMParser,N=b.getComputedStyle,E=window.Node,y=E.TEXT_NODE,O=E.ELEMENT_NODE,R=E.DOCUMENT_POSITION_PRECEDING,S=E.DOCUMENT_POSITION_FOLLOWING;function w(e,t,n){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return e.selectionStart===e.selectionEnd&&(t?0===e.selectionStart:e.value.length===e.selectionStart);if(!e.isContentEditable)return!0;var r=window.getSelection();if(!r.rangeCount)return!1;var o=r.getRangeAt(0),i=o.cloneRange(),a=function(e){var t=e.anchorNode,n=e.focusNode,r=e.anchorOffset,o=e.focusOffset,i=t.compareDocumentPosition(n);return!(i&R)&&(!!(i&S)||(0!==i||r<=o))}(r),u=r.isCollapsed;u||i.collapse(!a);var l=P(i);if(!l)return!1;var d=window.getComputedStyle(e),f=parseInt(d.lineHeight,10)||0;if(!u&&l.height>f&&a===t)return!1;var s=parseInt(d["padding".concat(t?"Top":"Bottom")],10)||0,g=3*parseInt(f,10)/4,v=e.getBoundingClientRect(),p=P(o);if(!(t?v.top+s>p.top-g:v.bottom-s<p.bottom+g))return!1;if(n)return!0;var m="rtl"===d.direction?!t:t,h=m?v.left+1:v.right-1,b=t?v.top+g:v.bottom-g,C=j(document,h,b,e);if(!C)return!1;var N=m?"left":"right",E=P(C);return Math.abs(E[N]-l[N])<=1}function T(e,t){return w(e,t)}function x(e,t){return w(e,t,!0)}function P(e){if(!e.collapsed)return e.getBoundingClientRect();var t=e.startContainer;if("BR"===t.nodeName){var n=t.parentNode,r=Array.from(n.childNodes).indexOf(t);(e=document.createRange()).setStart(n,r),e.setEnd(n,r)}var o=e.getClientRects()[0];if(!o){var i=document.createTextNode("​");(e=e.cloneRange()).insertNode(i),o=e.getClientRects()[0],i.parentNode.removeChild(i)}return o}function A(){var e=window.getSelection(),t=e.rangeCount?e.getRangeAt(0):null;if(t)return P(t)}function I(e,t){if(e){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return e.focus(),void(t?(e.selectionStart=e.value.length,e.selectionEnd=e.value.length):(e.selectionStart=0,e.selectionEnd=0));if(e.focus(),e.isContentEditable){var n=e[t?"lastChild":"firstChild"];if(n){var r=window.getSelection(),o=document.createRange();o.selectNodeContents(n),o.collapse(!t),r.removeAllRanges(),r.addRange(o)}}}}function j(e,t,n,r){var o=r.style.zIndex,i=r.style.position;r.style.zIndex="10000",r.style.position="relative";var a=function(e,t,n){if(e.caretRangeFromPoint)return e.caretRangeFromPoint(t,n);if(!e.caretPositionFromPoint)return null;var r=e.caretPositionFromPoint(t,n);if(!r)return null;var o=e.createRange();return o.setStart(r.offsetNode,r.offset),o.collapse(!0),o}(e,t,n);return r.style.zIndex=o,r.style.position=i,a}function _(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e)if(n&&e.isContentEditable){var o=n.height/2,i=e.getBoundingClientRect(),a=n.left,u=t?i.bottom-o:i.top+o,c=j(document,a,u,e);if(!c||!e.contains(c.startContainer))return!r||c&&c.startContainer&&c.startContainer.contains(e)?void I(e,t):(e.scrollIntoView(t),void _(e,t,n,!1));var l=window.getSelection();l.removeAllRanges(),l.addRange(c),e.focus(),l.removeAllRanges(),l.addRange(c)}else I(e,t)}function M(e){try{var t=e.nodeName,n=e.selectionStart,r=e.contentEditable;return"INPUT"===t&&null!==n||"TEXTAREA"===t||"true"===r}catch(e){return!1}}function B(){if(M(document.activeElement))return!0;var e=window.getSelection(),t=e.rangeCount?e.getRangeAt(0):null;return t&&!t.collapsed}function D(e){if(Object(c.includes)(["INPUT","TEXTAREA"],e.nodeName))return 0===e.selectionStart&&e.value.length===e.selectionEnd;if(!e.isContentEditable)return!0;var t=window.getSelection(),n=t.rangeCount?t.getRangeAt(0):null;if(!n)return!0;var r=n.startContainer,o=n.endContainer,i=n.startOffset,a=n.endOffset;if(r===e&&o===e&&0===i&&a===e.childNodes.length)return!0;var u=e.lastChild,l=u.nodeType===y?u.data.length:u.childNodes.length;return r===e.firstChild&&o===e.lastChild&&0===i&&a===l}function F(e){if(e){if(e.scrollHeight>e.clientHeight){var t=window.getComputedStyle(e).overflowY;if(/(auto|scroll)/.test(t))return e}return F(e.parentNode)}}function H(e){for(var t;(t=e.parentNode)&&t.nodeType!==O;);return t?"static"!==N(t).position?t:t.offsetParent:null}function U(e,t){X(t,e.parentNode),z(e)}function z(e){e.parentNode.removeChild(e)}function X(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function L(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function V(e,t){for(var n=e.ownerDocument.createElement(t);e.firstChild;)n.appendChild(e.firstChild);return e.parentNode.replaceChild(n,e),n}function q(e,t){t.parentNode.insertBefore(e,t),e.appendChild(t)}function G(e){return(new C).parseFromString(e,"text/html").body.textContent||""}n.d(t,"focus",(function(){return W})),n.d(t,"isHorizontalEdge",(function(){return T})),n.d(t,"isVerticalEdge",(function(){return x})),n.d(t,"getRectangleFromRange",(function(){return P})),n.d(t,"computeCaretRect",(function(){return A})),n.d(t,"placeCaretAtHorizontalEdge",(function(){return I})),n.d(t,"placeCaretAtVerticalEdge",(function(){return _})),n.d(t,"isTextField",(function(){return M})),n.d(t,"documentHasSelection",(function(){return B})),n.d(t,"isEntirelySelected",(function(){return D})),n.d(t,"getScrollContainer",(function(){return F})),n.d(t,"getOffsetParent",(function(){return H})),n.d(t,"replace",(function(){return U})),n.d(t,"remove",(function(){return z})),n.d(t,"insertAfter",(function(){return X})),n.d(t,"unwrap",(function(){return L})),n.d(t,"replaceTag",(function(){return V})),n.d(t,"wrap",(function(){return q})),n.d(t,"__unstableStripHTML",(function(){return G}));var W={focusable:r,tabbable:o}}});