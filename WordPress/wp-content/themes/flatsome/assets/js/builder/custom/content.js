!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i(2),UxBuilder.controller("block",i(3).default),UxBuilder.controller("col",i(24).default),UxBuilder.controller("col_grid",i(25).default),UxBuilder.controller("tabgroup",i(26).default),UxBuilder.controller("text",i(27).default),UxBuilder.controller("ux_banner",i(28).default),UxBuilder.controller("ux_banner_grid",i(29).default),UxBuilder.controller("ux_slider",i(30).default),UxBuilder.controller("ux_hotspot",i(31).default),UxBuilder.controller("scroll_to",i(32).default),UxBuilder.controller("map",i(33).default),UxBuilder.controller("text_box",i(34).default),UxBuilder.on("shortcode-attached",function(t){console.debug("+ shortcode-attached",t.tag),Flatsome.attach(t.$element)}),UxBuilder.on("shortcode-moved",function(t){console.debug("⬍ shortcode-moved",t.tag),"scroll_to"===t.tag&&Flatsome.attach("scroll-to",t.$element)}),UxBuilder.on("shortcode-detached",function(t){console.debug("- shortcode-detached",t.tag),Flatsome.detach(t.$element)}),UxBuilder.addfilter("shortcode-content",function(t){return t.replace(/data-animate="(.*?)"/g,'data-animate="$1" data-animated="true"')}),UxBuilder.on("shortcode-content-change",function(t){console.debug("~ shortcode-content-change",t.tag)}),UxBuilder.on("shortcode-content-mcetoggleformat",function(t,e,i){console.debug("~ shortcode-content-mcetoggleformat",t.tag,e,i),Flatsome.detach(t.$element),Flatsome.attach(t.$element)})},function(t,e){"use strict";angular.module("uxBuilder").component("uxBannerTool",{controller:["app","$element",function(t,e){this.highlightHorizontalCenter=function(t){e.find(".grid-h-center").toggleClass("active",t)},this.highlightVerticalCenter=function(t){e.find(".grid-v-center").toggleClass("active",t)}}],controllerAs:"grid",template:'\n      <div class="grid-v-center"></div>\n      <div class="grid-h-center"></div>\n    '})},function(t,e,i){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=i(5),l=n(r),c=function(){function e(t,i){(0,s.default)(this,e),this.app=t,this.shortcode=i}return e.$inject=["app","shortcode"],(0,l.default)(e,[{key:"$getShortcodeInfo",value:function(){var e=this;return this.shortcode._blockId!==this.shortcode.options.id&&(this.shortcode._blockId=this.shortcode.options.id,jQuery.get(t.flatsomeVars.ajaxurl,{action:"flatsome_block_title",block_id:this.shortcode.options.id},function(t){var i=t.data;e.shortcode._blockTitle=i.block_title,e.app.apply()})),this.shortcode._blockTitle}}]),e}();e.default=c}).call(e,function(){return this}())},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=i(6),s=n(o);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},function(t,e,i){t.exports={default:i(7),__esModule:!0}},function(t,e,i){i(8);var n=i(11).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},function(t,e,i){var n=i(9);n(n.S+n.F*!i(19),"Object",{defineProperty:i(15).f})},function(t,e,i){var n=i(10),o=i(11),s=i(12),r=i(14),l="prototype",c=function(t,e,i){var a,u,h,d=t&c.F,f=t&c.G,p=t&c.S,m=t&c.P,g=t&c.B,v=t&c.W,y=f?o:o[e]||(o[e]={}),$=y[l],x=f?n:p?n[e]:(n[e]||{})[l];f&&(i=e);for(a in i)u=!d&&x&&void 0!==x[a],u&&a in y||(h=u?x[a]:i[a],y[a]=f&&"function"!=typeof x[a]?i[a]:g&&u?s(h,n):v&&x[a]==h?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e[l]=t[l],e}(h):m&&"function"==typeof h?s(Function.call,h):h,m&&((y.virtual||(y.virtual={}))[a]=h,t&c.R&&$&&!$[a]&&r($,a,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e){var i=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=i)},function(t,e,i){var n=i(13);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(15),o=i(23);t.exports=i(19)?function(t,e,i){return n.f(t,e,o(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){var n=i(16),o=i(18),s=i(22),r=Object.defineProperty;e.f=i(19)?Object.defineProperty:function(t,e,i){if(n(t),e=s(e,!0),n(i),o)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){var n=i(17);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){t.exports=!i(19)&&!i(20)(function(){return 7!=Object.defineProperty(i(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,i){t.exports=!i(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var n=i(17),o=i(10).document,s=n(o)&&n(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,i){var n=i(17);t.exports=function(t,e){if(!n(t))return t;var i,o;if(e&&"function"==typeof(i=t.toString)&&!n(o=i.call(t)))return o;if("function"==typeof(i=t.valueOf)&&!n(o=i.call(t)))return o;if(!e&&"function"==typeof(i=t.toString)&&!n(o=i.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i){var n=t.$element.offset().left+i/2-t.parent.$element.offset().left;return Math.floor(n/i)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),r=n(s),l=i(5),c=n(l),a=function(){function t(e,i,n){(0,r.default)(this,t),this.app=e,this.shortcode=i,this.$element=n,this.minColumns=1,this.maxColumns=12}return t.$inject=["app","shortcode","$element"],(0,c.default)(t,[{key:"onResizeStart",value:function(t){this.screenWidth=window.innerWidth,this.rowWidth=this.shortcode.parent.$element.width(),this.columnWidth=this.rowWidth/this.maxColumns,this.currentColumn=o(this.shortcode,this.rowWidth,this.columnWidth),this.currentColumnSpans=this.shortcode.options.span,this.nextColumnSpans=this.shortcode.nextSibling?this.shortcode.nextSibling.options.span:this.maxColumns,this.shortcode.$element.addClass("uxb-is-resizing"),this.shortcode.nextSibling&&this.shortcode.nextSibling.$element.addClass("uxb-is-resizing")}},{key:"onResizeMove",value:function(t){var e=Math.floor((t.deltaX+this.columnWidth/2)/this.columnWidth);this.currentColumnSpans+e<this.minColumns&&(e=-(this.currentColumnSpans-1)),this.currentColumnSpans+e>this.maxColumns&&(e=this.maxColumns-this.currentColumnSpans),this.screenWidth>600&&this.shortcode.nextSibling&&(this.nextColumnSpans-e<this.minColumns&&(e=this.nextColumnSpans-1),this.currentColumn+this.currentColumnSpans+this.nextColumnSpans<=this.maxColumns&&(this.shortcode.nextSibling.options.span=this.nextColumnSpans-e,this.shortcode.nextSibling.apply())),this.shortcode.options.span=this.currentColumnSpans+e}},{key:"onResizeEnd",value:function(t){this.shortcode.$element.removeClass("uxb-is-resizing"),this.shortcode.nextSibling&&this.shortcode.nextSibling.$element.removeClass("uxb-is-resizing"),delete this.screenWidth,delete this.rowWidth,delete this.columnWidth,delete this.currentColumn,delete this.currentColumnSpans,delete this.nextColumnSpans}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=i(5),l=n(r),c=function(){function t(e,i,n){(0,s.default)(this,t),this.app=e,this.shortcode=i}return t.$inject=["app","shortcode","$element"],(0,l.default)(t,[{key:"onResizeRightStart",value:function(t){this.initColumns=this.shortcode.options.span,this.maxColumns=12}},{key:"onResizeRightMove",value:function(t){var e=this.shortcode.parent.$element.width()/12,i=Math.floor((t.deltaX+e/2)/e);i<=-this.initColumns+1&&(i=-this.initColumns+1),i>=this.maxColumns-1&&(i=this.maxColumns-1),this.shortcode.options.span=this.initColumns+i}},{key:"onResizeRightEnd",value:function(t){delete this.currentColumnSpans,delete this.maxColumns}},{key:"onResizeBottomStart",value:function(t){this.containerHeight=this.shortcode.parent.options.height,this.initElementHeight=this.shortcode.$element.height(),this.initOptionHeight=this.shortcode.options.height}},{key:"onResizeBottomMove",value:function(t){var e=this.shortcode.parent.options.height/4,i=(this.initElementHeight+(t.deltaY+e/2))/this.containerHeight;i>=1?this.shortcode.options.height="1":i>=.75?this.shortcode.options.height="3-4":i>=.66?this.shortcode.options.height="2-3":i>=.5?this.shortcode.options.height="1-2":i>=.33?this.shortcode.options.height="1-3":i>=.25&&(this.shortcode.options.height="1-4")}},{key:"onResizeBottomEnd",value:function(t){delete this.containerHeight,delete this.initElementHeight,delete this.initOptionHeight}}]),t}();e.default=c},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=i(5),l=n(r),c=function(){function t(e,i,n,o,r,l){var c=this;(0,s.default)(this,t),this.app=i,this.targets=n,this.shortcode=o,this.shortcode.states.activeTab=0,r(function(){c.targets.disable(c.shortcode.children),c.targets.enable(c.shortcode.childAt(0))},0,!1),e.$watch(function(){return i.states.selectedShortcode},function(t){t&&t.isChildOf(c.shortcode)&&t.index!==c.shortcode.states.activeTab&&c.setTab(t.index)}),e.$on(l.DETACHED,function(t,e){e.isChildOf(c.shortcode)&&c.setTab(e.index-1)})}return t.$inject=["$scope","app","targets","shortcode","$timeout","ShortcodeEvent"],(0,l.default)(t,[{key:"setTab",value:function(t){t=t<0?0:t,this.shortcode.states.activeTab=t,this.targets.disable(this.shortcode.children),this.targets.enable(this.shortcode.childAt(t)),this.app.selectShortcode(this.shortcode.childAt(t)),this.app.configureShortcode(this.shortcode.childAt(t))}}]),t}();e.default=c},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=["app","shortcode","tools","$scope","$element",function t(e,i,n,o,r){function l(){e("wp-editor").open()}(0,s.default)(this,t),r.on("dblclick",l),o.$on("$destroy",function(){r.off("dblclick",l)})}];e.default=r},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=["app","shortcode","$scope","$element","$timeout","$interpolate","DragEvent","ShortcodeEvent",function t(e,i,n,o,r,l,c,a){function u(t){var n=null,o=null,s=5,r=t.innerY,l=t.constrains.width-(t.innerX+t.virtual.width),c=t.constrains.height-(t.innerY+t.virtual.height),a=t.innerX,u=_.min([{name:"right",distance:l},{name:"left",distance:a}],function(t){return t.distance}),h=_.min([{name:"top",distance:r},{name:"bottom",distance:c}],function(t){return t.distance}),d=Math.abs(r-c)<t.constrains.height/100*s,f=Math.abs(a-l)<t.constrains.width/100*s;return e("tools").getTool(i.$id).scope().grid.highlightHorizontalCenter(d),e("tools").getTool(i.$id).scope().grid.highlightVerticalCenter(f),n=round(u.distance/t.constrains.width*100,s),o=round(h.distance/t.constrains.height*100,s),"right"===u.name&&(n=100-n),"bottom"===h.name&&(o=100-o),d&&(o=50),f&&(n=50),n=n>=100?100:n,n=n<=0?0:n,o=o>=100?100:o,o=o<=0?0:o,{x:n,y:o}}(0,s.default)(this,t),e("tools").addTool(i.$id,'<ux-banner-tool id="'+i.$id+'"/>',o.find(".banner-layers")),n.$on(c.START,function(t,n){n.shortcode.isChildOf(i)&&(n.preventDefault(),n.setContainment(i.$element.find(".banner-layers")),e("tools").showTool(i.$id))}),n.$on(c.MOVE,function(t,e){if(e.shortcode.isChildOf(i)){var n=u(e);e.shortcode.$element.addClass("text-box-dragging"),e.shortcode.options.positionX=n.x,e.shortcode.options.positionY=n.y}}),n.$on(c.END,function(t,n){n.shortcode.isChildOf(i)&&(n.shortcode.$element.removeClass("text-box-dragging"),e("tools").hideTool(i.$id))}),n.$on(a.ATTACHED,function(t,e){!e.isChildOf(i)}),n.$on("$destroy",function(){e("tools").removeTool(i.$id)}),n.$watch(function(){return i.options.height},function(t,e){t!==e&&i.parent.is("ux_slider")&&i.parent.$scope.$customCtrl.setHeight()})}];e.default=r},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=i(5),l=n(r),c=function(){function t(e,i,n,o,r,l,c){var a=this;(0,s.default)(this,t),this.app=e,this.shortcode=i,this.$element=n,this.$iframe=o,this.$scope=r,this.$timeout=l,this.$row=n.find(".row"),this.options={gutter:0,percentPosition:!0,itemSelector:".col",columnWidth:".grid-size",transitionDuration:"250ms"},this.packery=new Packery(this.$row.get(0),this.options),r.$watchCollection("shortcode.children",this.onChildrenChange.bind(this)),r.$watchCollection("shortcode.options",this.onOptionsChange.bind(this)),r.$on(c.START,this.onDragStart.bind(this)),r.$on(c.MOVE,this.onDragMove.bind(this)),r.$on(c.END,this.onDragEnd.bind(this)),r.$on("$destroy",function(){return a.packery.destroy()})}return t.$inject=["app","shortcode","$element","$iframe","$scope","$timeout","DragEvent"],(0,l.default)(t,[{key:"onChildrenChange",value:function(t,e){var i=this,n=t!==e?_.difference(t,e):t;n.length&&t!==e&&this.$timeout(function(){i.$iframe().contents().find("body").scrollToElement(n[0].$element)},250,!1),_.each(n,function(t){i.$scope.$watchCollection(function(){return t.options},i.onChildOptionsChange.bind(i))}),this.$timeout(function(){i.packery.reloadItems(),i.packery.layout()},0,!1)}},{key:"onChildOptionsChange",value:function(t,e){var i=this,n=!1;t.span!==e.span&&(n=!0),t.height!==e.height&&(n=!0),t.spacing!==e.spacing&&(n=!0),n&&this.$timeout(function(){return i.packery.layout()},0,!1)}},{key:"onOptionsChange",value:function(t,e){var i=this;this.$timeout(function(){return i.packery.layout()},0,!1)}},{key:"onDragStart",value:function(t,e){e.shortcode.isChildOf(this.shortcode)&&(e.preventDefault(),e.setContainment(this.$row),this.packery.itemDragStart(e.shortcode.$element.get(0)))}},{key:"onDragMove",value:function(t,e){e.shortcode.isChildOf(this.shortcode)&&(e.shortcode.$element.css({left:e.innerX,top:e.innerY}),this.packery.itemDragMove(e.shortcode.$element.get(0),e.innerX,e.innerY))}},{key:"onDragEnd",value:function(t,e){e.shortcode.isChildOf(this.shortcode)&&(this.packery.itemDragEnd(e.shortcode.$element.get(0)),this.reorderChildren())}},{key:"reorderChildren",value:function(){var t=this.shortcode.children,e=this.packery.getItemElements();_.each(e,function(t,e){angular.element(t).shortcode().$$order=e}),this.shortcode.children=_.sortBy(t,"$$order"),_.each(this.shortcode.children,function(t){delete t.$$order})}}]),t}();e.default=c},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=i(5),l=n(r),c=function(){function t(e,i,n,o,r,l,c,a){var u=this;(0,s.default)(this,t),this.app=e,this.shortcode=i,this.targets=n,this.$element=r,this.$timeout=l,this.$slider=r.find(".slider"),this.isInitializing=!1,this.flickity=null,this.options={initialIndex:0,cellAlign:"center",imagesLoaded:!0,freeScroll:"true"===this.shortcode.options.freescroll,wrapAround:"true"===this.shortcode.options.infinitive,prevNextButtons:"true"===this.shortcode.options.arrows,contain:!0,percentPosition:!0,pageDots:"true"===this.shortcode.options.bullets,selectedAttraction:.1,friction:.6,rightToLeft:!1,draggable:!1,on:{ready:function(){u.handleVideo()}}},o.$watch(function(){return e.states.selectedShortcode},function(t){if(t){for(var e=0;e<u.shortcode.children.length;e++)if(t.isSelfOrDescendantOf(u.shortcode.children[e])){u.flickity.select(e);break}t.isAncestorOf(u.shortcode)&&u.$timeout(function(){return u.setHeight()},0,!1)}}),o.$watchCollection(function(){return u.shortcode.children},function(t,e){if(t.length&&t.length===e.length){var i=u.flickity?u.flickity.selectedIndex:0;u.options.initialIndex=e[i].index,u.initialize()}}),o.$watchCollection(function(){return u.shortcode.options},function(t,e){var i=!1,n=!1;t!==e&&(t.slideAlign!==e.slideAlign&&(u.options.cellAlign=t.slideAlign,i=!0),t.visibility!==e.visibility&&(i=!0),t.arrows!==e.arrows&&(u.options.prevNextButtons="true"===t.arrows,i=!0),t.bullets!==e.bullets&&(u.options.pageDots="true"===t.bullets,i=!0),t.parallax!==e.parallax&&(u.options.parallax=t.parallax,i=!0),t.freescroll!==e.freescroll&&(u.options.freeScroll="true"===t.freescroll,i=!0),t.infinitive!==e.infinitive&&(u.options.wrapAround="true"===t.infinitive,i=!0),t.slideWidth!==e.slideWidth&&(n=!0),t.style!==e.style&&(n=!0),i&&u.initialize(),!i&&n&&u.$timeout(function(){return u.$slider.flickity("resize")},100,!1))}),o.$on(a.REMOVED,function(t,e){e.isChildOf(u.shortcode)&&u.initialize()}),o.$on(a.ADDED,function(t,e){e.isChildOf(u.shortcode)&&(u.options.initialIndex=e.index,u.initialize())}),o.$on(c.ATTACHED,function(t,e){e.isChildOf(u.shortcode)&&(e.data.template||u.initialize())}),o.$on("$destroy",function(){u.destroy(),u.$slider=null})}return t.$inject=["app","shortcode","targets","$scope","$element","$timeout","ShortcodeEvent","ChildEvent"],(0,l.default)(t,[{key:"initialize",value:function(){var t=this;this.isInitializing||(this.isInitializing=!0,this.flickity&&this.destroy(),this.$timeout(function(){if(t.flickity=t.$slider.flickity(t.options).data("flickity"),t.flickity.on("select",t.onSelect.bind(t)),t.flickity.on("settle",t.onSettle.bind(t)),t.flickity.on("change",t.onChange.bind(t)),t.options.parallax){var e=jQuery(t.$slider).find(".bg, .flickity-slider > .img img"),i=t.flickity,n=t.options.parallax;jQuery(t.$slider).addClass("slider-has-parallax"),t.flickity.on("scroll",function(t,o){i.slides.forEach(function(t,o){var s=e[o],r=(t.target+i.x)*-1/n;s&&(s.style.transform="translateX("+r+"px)")})})}t.$slider.on("click.uxSlider",".flickity-prev-next-button.previous",t.previous.bind(t)),t.$slider.on("click.uxSlider",".flickity-prev-next-button.next",t.next.bind(t)),t.$slider.on("click",t.onClick.bind(t)),t.enableCurrentSlideTargets(),t.isInitializing=!1},0,!1))}},{key:"destroy",value:function(){this.flickity&&(this.flickity.off("select",this.onSelect),this.flickity.off("settle",this.onSettle),this.flickity.off("change",this.onChange),this.$slider.off("click",this.onClick),this.$slider.off("click.uxSlider",".flickity-prev-next-button.previous"),this.$slider.off("click.uxSlider",".flickity-prev-next-button.next"),this.flickity.destroy(),this.flickity=null)}},{key:"onClick",value:function(t){var e=this.flickity.selectedIndex;this.app.configureShortcode(null),this.app.selectShortcode(this.shortcode.childAt(e)),this.shortcode.apply(),t.stopPropagation()}},{key:"onSelect",value:function(){this.$slider.hasClass("slider-auto-height")&&this.$slider.find(".flickity-viewport").css({height:this.$slider.find(".is-selected").outerHeight()})}},{key:"onSettle",value:function(){this.options.initialIndex=this.flickity.selectedIndex,this.enableCurrentSlideTargets()}},{key:"onChange",value:function(){this.handleVideo()}},{key:"setHeight",value:function(t){this.$element.find(".flickity-viewport").css({height:t||this.flickity?this.flickity.selectedElement.offsetHeight:null})}},{key:"enableCurrentSlideTargets",value:function(){var t=this;this.shortcode.children.forEach(function(e,i){i===t.flickity.selectedIndex?t.targets.enableElement(e.$element.get(0)):t.targets.disableElement(e.$element.get(0))})}},{key:"handleVideo",value:function(){this.$slider.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"),this.$slider.find(".is-selected .video-bg").trigger("play")}},{key:"next",value:function(){this.$slider.off("click.uxSlider",".flickity-prev-next-button.next"),this.flickity.next()}},{key:"previous",value:function(){this.$slider.off("click.uxSlider",".flickity-prev-next-button.previous"),this.flickity.previous()}}]),t}();e.default=c},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=["$scope","shortcode","$element","$timeout",function t(e,i,n,o){var r=this;(0,s.default)(this,t),this.shortcode=i,this.$element=n,this.$timeout=o,e.$watchCollection(function(){return r.shortcode.options},function(t,e){t!==e&&"text"===t.type&&r.$timeout(function(){jQuery(n).find(".tooltip").tooltipster("content",t.text)},100,!1)})}];e.default=r},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=["$scope","shortcode","$element","$timeout",function t(e,i,n,o){var r=this;(0,s.default)(this,t),this.shortcode=i,this.$element=n,this.$timeout=o,e.$watchCollection(function(){return r.shortcode.options},function(t,e){})}];e.default=r},function(t,e,i){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),s=n(o),r=i(5),l=n(r),c=function(){function e(t,i,n,o,r){var l=this;(0,s.default)(this,e),this.app=t,this.shortcode=i,this.mapElement=o.find("#map_"+i.$id).get(0),this.map=null,this.marker=null,this.initializeMap(),n.$watchCollection(function(){return l.shortcode.options},function(t,e){if(t!==e){var i=l.getOptions(t);l.map.setOptions(i),l.marker.setPosition(i.center),l.map.mapTypes.set("flatsome",l.getStyle(t))}}),n.$on("$destroy",function(){l.map=null,l.marker=null})}return e.$inject=["app","shortcode","$scope","$element","$window"],(0,l.default)(e,[{key:"initializeMap",value:function(){var e=t.google,i=this.getOptions(this.shortcode.options),n=this.getStyle(this.shortcode.options);this.map=new e.maps.Map(this.mapElement,i),this.map.mapTypes.set("flatsome",n),this.marker=new t.google.maps.Marker({position:i.center,map:this.map,title:""})}},{key:"getOptions",value:function(e){var i=t.google,n="true"===e.controls;return{zoom:e.zoom,center:new i.maps.LatLng(e.lat,e.long),disableDefaultUI:!0,mapTypeId:"flatsome",draggable:!1,zoomControl:n&&"true"===e.zoomControl,zoomControlOptions:{position:i.maps.ControlPosition.TOP_LEFT},mapTypeControl:n&&"true"===e.mapTypeControl,mapTypeControlOptions:{position:i.maps.ControlPosition.TOP_LEFT},streetViewControl:n&&"true"===e.streetViewControl,streetViewControlOptions:{position:i.maps.ControlPosition.TOP_LEFT},scrollwheel:!1,disableDoubleClickZoom:!0}}},{key:"getStyle",value:function(e){var i=t.google,n=e.color,o=e.saturation;return new i.maps.StyledMapType([{featureType:"administrative",stylers:[{visibility:"on"}]},{featureType:"road",stylers:[{visibility:"on"},{hue:n}]},{stylers:[{visibility:"on"},{hue:n},{saturation:o}]}],{name:"flatsome"})}}]),e}();e.default=c}).call(e,function(){return this}())},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i=t.$element.offset(),n=t.$element.width();return i.left+n/2===e/2}Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),r=n(s),l=i(5),c=n(l),a=function(){function t(e,i,n){(0,r.default)(this,t),this.app=e,this.shortcode=i,this.$element=n}return t.$inject=["app","shortcode","$element"],(0,c.default)(t,[{key:"onResizeRightStart",value:function(t){this.maxWidth=this.shortcode.parent.$element.width(),this.initWidth=this.shortcode.options.width,this.isCenterX=o(this.shortcode,this.maxWidth)}},{key:"onResizeRightMove",value:function(t){var e=t.deltaX*(this.isCenterX?2:1),i=this.initWidth+e/this.maxWidth*100;i>100&&(i=100),i<0&&(i=0),this.shortcode.options.width=parseInt(i,10)}},{key:"onResizeBottomMove",value:function(t){delete this.maxWidth,delete this.initWidth}}]),t}();e.default=a}]);