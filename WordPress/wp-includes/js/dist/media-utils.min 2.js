/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.mediaUtils=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=443)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},13:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return i}))},14:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},15:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(34),i=r(7);function o(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!=typeof t?Object(i.a)(e):t}},16:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},17:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return i}))},18:function(e,t,r){"use strict";var n=r(25);var i=r(35),o=r(27);function a(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(i.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},2:function(e,t){!function(){e.exports=this.lodash}()},20:function(e,t,r){"use strict";var n=r(38);var i=r(27),o=r(39);function a(e,t){return Object(n.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}}(e,t)||Object(i.a)(e,t)||Object(o.a)()}r.d(t,"a",(function(){return a}))},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},25:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(25);function i(e,t){if(e){if("string"==typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},34:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return n}))},35:function(e,t,r){"use strict";function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,"a",(function(){return n}))},38:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return n}))},39:function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return n}))},41:function(e,t){!function(){e.exports=this.wp.blob}()},42:function(e,t){!function(){e.exports=this.wp.apiFetch}()},443:function(e,t,r){"use strict";r.r(t);var n=r(14),i=r(13),o=r(15),a=r(16),l=r(7),c=r(17),s=r(2),u=r(0),f=r(1),p=window.wp,d=function(e){return Object(s.pick)(e,["sizes","mime","type","subtype","id","url","alt","link","caption"])},m=function(e){return p.media.query({order:"ASC",orderby:"post__in",post__in:e,posts_per_page:-1,query:!0,type:"image"})},b=function(e){function t(e){var r,i=e.allowedTypes,c=e.gallery,s=void 0!==c&&c,u=e.unstableFeaturedImageFlow,d=void 0!==u&&u,m=e.modalClass,b=e.multiple,y=void 0!==b&&b,h=e.title,v=void 0===h?Object(f.__)("Select or Upload Media"):h;if(Object(n.a)(this,t),(r=Object(o.a)(this,Object(a.a)(t).apply(this,arguments))).openModal=r.openModal.bind(Object(l.a)(r)),r.onOpen=r.onOpen.bind(Object(l.a)(r)),r.onSelect=r.onSelect.bind(Object(l.a)(r)),r.onUpdate=r.onUpdate.bind(Object(l.a)(r)),r.onClose=r.onClose.bind(Object(l.a)(r)),s)r.buildAndSetGalleryFrame();else{var O={title:v,multiple:y};i&&(O.library={type:i}),r.frame=p.media(O)}return m&&r.frame.$el.addClass(m),d&&r.buildAndSetFeatureImageFrame(),r.initializeListeners(),r}return Object(c.a)(t,e),Object(i.a)(t,[{key:"initializeListeners",value:function(){this.frame.on("select",this.onSelect),this.frame.on("update",this.onUpdate),this.frame.on("open",this.onOpen),this.frame.on("close",this.onClose)}},{key:"buildAndSetGalleryFrame",value:function(){var e=this.props,t=e.addToGallery,r=void 0!==t&&t,n=e.allowedTypes,i=e.multiple,o=void 0!==i&&i,a=e.value,l=void 0===a?null:a;if(l!==this.lastGalleryValue){var c;this.lastGalleryValue=l,this.frame&&this.frame.remove(),c=r?"gallery-library":l?"gallery-edit":"gallery",this.GalleryDetailsMediaFrame||(this.GalleryDetailsMediaFrame=p.media.view.MediaFrame.Post.extend({galleryToolbar:function(){var e=this.state().get("editing");this.toolbar.set(new p.media.view.Toolbar({controller:this,items:{insert:{style:"primary",text:e?p.media.view.l10n.updateGallery:p.media.view.l10n.insertGallery,priority:80,requires:{library:!0},click:function(){var e=this.controller,t=e.state();e.close(),t.trigger("update",t.get("library")),e.setState(e.options.state),e.reset()}}}}))},editState:function(){var e=this.state("gallery").get("selection"),t=new p.media.view.EditImage({model:e.single(),controller:this}).render();this.content.set(t),t.loadEditor()},createStates:function(){this.on("toolbar:create:main-gallery",this.galleryToolbar,this),this.on("content:render:edit-image",this.editState,this),this.states.add([new p.media.controller.Library({id:"gallery",title:p.media.view.l10n.createGalleryTitle,priority:40,toolbar:"main-gallery",filterable:"uploaded",multiple:"add",editable:!1,library:p.media.query(Object(s.defaults)({type:"image"},this.options.library))}),new p.media.controller.EditImage({model:this.options.editImage}),new p.media.controller.GalleryEdit({library:this.options.selection,editing:this.options.editing,menu:"gallery",displaySettings:!1,multiple:!0}),new p.media.controller.GalleryAdd])}}));var u=m(l),f=new p.media.model.Selection(u.models,{props:u.props.toJSON(),multiple:o});this.frame=new this.GalleryDetailsMediaFrame({mimeType:n,state:c,multiple:o,selection:f,editing:!!l}),p.media.frame=this.frame,this.initializeListeners()}}},{key:"buildAndSetFeatureImageFrame",value:function(){var e=p.media.view.MediaFrame.Select.extend({featuredImageToolbar:function(e){this.createSelectToolbar(e,{text:p.media.view.l10n.setFeaturedImage,state:this.options.state})},editState:function(){var e=this.state("featured-image").get("selection"),t=new p.media.view.EditImage({model:e.single(),controller:this}).render();this.content.set(t),t.loadEditor()},createStates:function(){this.on("toolbar:create:featured-image",this.featuredImageToolbar,this),this.on("content:render:edit-image",this.editState,this),this.states.add([new p.media.controller.FeaturedImage,new p.media.controller.EditImage({model:this.options.editImage})])}}),t=m(this.props.value),r=new p.media.model.Selection(t.models,{props:t.props.toJSON()});this.frame=new e({mimeType:this.props.allowedTypes,state:"featured-image",multiple:this.props.multiple,selection:r,editing:!!this.props.value}),p.media.frame=this.frame}},{key:"componentWillUnmount",value:function(){this.frame.remove()}},{key:"onUpdate",value:function(e){var t=this.props,r=t.onSelect,n=t.multiple,i=void 0!==n&&n,o=this.frame.state(),a=e||o.get("selection");a&&a.models.length&&r(i?a.models.map((function(e){return d(e.toJSON())})):d(a.models[0].toJSON()))}},{key:"onSelect",value:function(){var e=this.props,t=e.onSelect,r=e.multiple,n=void 0!==r&&r,i=this.frame.state().get("selection").toJSON();t(n?i:i[0])}},{key:"onOpen",value:function(){if(this.updateCollection(),this.props.value){if(!this.props.gallery){var e=this.frame.state().get("selection");Object(s.castArray)(this.props.value).forEach((function(t){e.add(p.media.attachment(t))}))}m(Object(s.castArray)(this.props.value)).more()}}},{key:"onClose",value:function(){var e=this.props.onClose;e&&e()}},{key:"updateCollection",value:function(){var e=this.frame.content.get();if(e&&e.collection){var t=e.collection;t.toArray().forEach((function(e){return e.trigger("destroy",e)})),t.mirroring._hasMore=!0,t.more()}}},{key:"openModal",value:function(){this.props.gallery&&this.props.value&&this.props.value.length>0&&this.buildAndSetGalleryFrame(),this.frame.open()}},{key:"render",value:function(){return this.props.render({open:this.openModal})}}]),t}(u.Component),y=r(23),h=r.n(y),v=r(5),O=r(49),g=r(18),j=r(20),w=r(42),S=r.n(w),_=r(41);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e){return k.apply(this,arguments)}function k(){return(k=Object(O.a)(h.a.mark((function e(t){var r,n,i,o,a,l,c,p,d,m,b,y,v,O,w,S,x,T,k,M,I,A,F,G,C,U,L,D,z;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.allowedTypes,n=t.additionalData,i=void 0===n?{}:n,o=t.filesList,a=t.maxUploadFileSize,l=t.onError,c=void 0===l?s.noop:l,p=t.onFileChange,d=t.wpAllowedMimeTypes,m=void 0===d?null:d,b=Object(g.a)(o),y=[],v=function(e,t){Object(_.revokeBlobURL)(Object(s.get)(y,[e,"url"])),y[e]=t,p(Object(s.compact)(y))},O=function(e){return!r||Object(s.some)(r,(function(t){return Object(s.includes)(t,"/")?t===e:Object(s.startsWith)(e,"".concat(t,"/"))}))},w=(h=m)?Object(s.flatMap)(h,(function(e,t){var r=e.split("/"),n=Object(j.a)(r,1)[0],i=t.split("|");return[e].concat(Object(g.a)(Object(s.map)(i,(function(e){return"".concat(n,"/").concat(e)}))))})):h,S=function(e){return Object(s.includes)(w,e)},x=function(e){e.message=[Object(u.createElement)("strong",{key:"filename"},e.file.name),": ",e.message],c(e)},T=[],k=!0,M=!1,I=void 0,e.prev=12,A=b[Symbol.iterator]();case 14:if(k=(F=A.next()).done){e.next=34;break}if(G=F.value,!w||S(G.type)){e.next=19;break}return x({code:"MIME_TYPE_NOT_ALLOWED_FOR_USER",message:Object(f.__)("Sorry, this file type is not permitted for security reasons."),file:G}),e.abrupt("continue",31);case 19:if(O(G.type)){e.next=22;break}return x({code:"MIME_TYPE_NOT_SUPPORTED",message:Object(f.__)("Sorry, this file type is not supported here."),file:G}),e.abrupt("continue",31);case 22:if(!(a&&G.size>a)){e.next=25;break}return x({code:"SIZE_ABOVE_LIMIT",message:Object(f.__)("This file exceeds the maximum upload size for this site."),file:G}),e.abrupt("continue",31);case 25:if(!(G.size<=0)){e.next=28;break}return x({code:"EMPTY_FILE",message:Object(f.__)("This file is empty."),file:G}),e.abrupt("continue",31);case 28:T.push(G),y.push({url:Object(_.createBlobURL)(G)}),p(y);case 31:k=!0,e.next=14;break;case 34:e.next=40;break;case 36:e.prev=36,e.t0=e.catch(12),M=!0,I=e.t0;case 40:e.prev=40,e.prev=41,k||null==A.return||A.return();case 43:if(e.prev=43,!M){e.next=46;break}throw I;case 46:return e.finish(43);case 47:return e.finish(40);case 48:C=0;case 49:if(!(C<T.length)){e.next=68;break}return U=T[C],e.prev=51,e.next=54,P(U,i);case 54:L=e.sent,D=E({},Object(s.omit)(L,["alt_text","source_url"]),{alt:L.alt_text,caption:Object(s.get)(L,["caption","raw"],""),title:L.title.raw,url:L.source_url}),v(C,D),e.next=65;break;case 59:e.prev=59,e.t1=e.catch(51),v(C,null),z=void 0,z=Object(s.has)(e.t1,["message"])?Object(s.get)(e.t1,["message"]):Object(f.sprintf)(Object(f.__)("Error while uploading file %s to the media library."),U.name),c({code:"GENERAL",message:z,file:U});case 65:++C,e.next=49;break;case 68:case"end":return e.stop()}var h}),e,null,[[12,36,40,48],[41,,43,47],[51,59]])})))).apply(this,arguments)}function P(e,t){var r=new window.FormData;return r.append("file",e,e.name||e.type.replace("/",".")),Object(s.forEach)(t,(function(e,t){return r.append(t,e)})),S()({path:"/wp/v2/media",body:r,method:"POST"})}r.d(t,"MediaUpload",(function(){return b})),r.d(t,"uploadMedia",(function(){return T}))},49:function(e,t,r){"use strict";function n(e,t,r,n,i,o,a){try{var l=e[o](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,c,"next",e)}function c(e){n(a,i,o,l,c,"throw",e)}l(void 0)}))}}r.d(t,"a",(function(){return i}))},5:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},7:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))}});