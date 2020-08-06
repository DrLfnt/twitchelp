this.wc=this.wc||{},this.wc.currency=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=704)}({0:function(e,t){!function(){e.exports=this.wp.element}()},201:function(e,t){!function(){e.exports=this.wc.number}()},3:function(e,t){!function(){e.exports=this.wp.i18n}()},6:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return o}))},704:function(e,t,r){"use strict";r.r(t),r.d(t,"getCurrencyData",(function(){return u}));var o=r(6),n=r(0),i=r(3),a=r(201);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(){return{US:{code:"USD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},EU:{code:"EUR",symbol:"€",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},IN:{code:"INR",symbol:"₹",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},GB:{code:"GBP",symbol:"£",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},BR:{code:"BRL",symbol:"R$",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},VN:{code:"VND",symbol:"₫",symbolPosition:"right",thousandSeparator:".",decimalSeparator:",",precision:1},ID:{code:"IDR",symbol:"Rp",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:0},BD:{code:"BDT",symbol:"৳",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:0},PK:{code:"PKR",symbol:"₨",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},RU:{code:"RUB",symbol:"₽",symbolPosition:"right",thousandSeparator:" ",decimalSeparator:",",precision:2},TR:{code:"TRY",symbol:"₺",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},MX:{code:"MXN",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},CA:{code:"CAD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2}}}t.default=function(e){var t;function r(e){var r=c(c({},{code:"USD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2}),e);t={code:r.code.toString(),symbol:r.symbol.toString(),symbolPosition:r.symbolPosition.toString(),decimalSeparator:r.decimalSeparator.toString(),priceFormat:s(r),thousandSeparator:r.thousandSeparator.toString(),precision:parseInt(r.precision,10)}}function o(e){var r=Object(a.numberFormat)(t,e);if(""===r)return r;var o=t,n=o.priceFormat,s=o.symbol;return Object(i.sprintf)(n,s,r)}function s(e){if(e.priceFormat)return t=e.priceFormat.toString(),(r=document.createElement("DIV")).innerHTML=t,r.textContent||r.innerText||"";var t,r;switch(e.symbolPosition){case"left":return"%1$s%2$s";case"right":return"%2$s%1$s";case"left_space":return"%1$s&nbsp;%2$s";case"right_space":return"%2$s&nbsp;%1$s"}return"%1$s%2$s"}return r(e),{getCurrency:function(){return c({},t)},setCurrency:r,formatCurrency:o,getPriceFormat:s,formatDecimal:function(e){if("number"!=typeof e&&(e=parseFloat(e)),Number.isNaN(e))return 0;var r=t.precision;return Math.round(e*Math.pow(10,r))/Math.pow(10,r)},formatDecimalString:function(e){if("number"!=typeof e&&(e=parseFloat(e)),Number.isNaN(e))return"";var r=t.precision;return e.toFixed(r)},render:function(e){return"number"!=typeof e&&(e=parseFloat(e)),e<0?Object(n.createElement)("span",{className:"is-negative"},o(e)):o(e)}}}}});
