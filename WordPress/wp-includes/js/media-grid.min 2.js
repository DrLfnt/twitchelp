/*! This file is auto-generated */
!function(i){var o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=i,n.c=o,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([,,,,,,,,,,,function(e,t,i){e.exports=i(12)},function(e,t,i){var o=wp.media;o.controller.EditAttachmentMetadata=i(13),o.view.MediaFrame.Manage=i(14),o.view.Attachment.Details.TwoColumn=i(15),o.view.MediaFrame.Manage.Router=i(16),o.view.EditImage.Details=i(17),o.view.MediaFrame.EditAttachments=i(18),o.view.SelectModeToggleButton=i(19),o.view.DeleteSelectedButton=i(20),o.view.DeleteSelectedPermanentlyButton=i(21)},function(e,t){var i,o=wp.media.view.l10n;i=wp.media.controller.State.extend({defaults:{id:"edit-attachment",title:o.attachmentDetails,content:"edit-metadata",menu:!1,toolbar:!1,router:!1}}),e.exports=i},function(e,t){var i,o=wp.media.view.MediaFrame,n=wp.media.controller.Library,s=Backbone.$;i=o.extend({initialize:function(){_.defaults(this.options,{title:"",modal:!1,selection:[],library:{},multiple:"add",state:"library",uploader:!0,mode:["grid","edit"]}),this.$body=s(document.body),this.$window=s(window),this.$adminBar=s("#wpadminbar"),this.$uploaderToggler=s(".page-title-action").attr("aria-expanded","false").on("click",_.bind(this.addNewClickHandler,this)),this.$window.on("scroll resize",_.debounce(_.bind(this.fixPosition,this),15)),this.$el.addClass("wp-core-ui"),!wp.Uploader.limitExceeded&&wp.Uploader.browser.supported||(this.options.uploader=!1),this.options.uploader&&(this.uploader=new wp.media.view.UploaderWindow({controller:this,uploader:{dropzone:document.body,container:document.body}}).render(),this.uploader.ready(),s("body").append(this.uploader.el),this.options.uploader=!1),this.gridRouter=new wp.media.view.MediaFrame.Manage.Router,o.prototype.initialize.apply(this,arguments),this.$el.appendTo(this.options.container),this.createStates(),this.bindRegionModeHandlers(),this.render(),this.bindSearchHandler(),wp.media.frames.browse=this},bindSearchHandler:function(){var e=this.$("#media-search-input"),t=this.browserView.toolbar.get("search").$el,i=this.$(".view-list"),o=_.throttle(function(e){var t=s(e.currentTarget).val(),i="";t&&(i+="?search="+t,this.gridRouter.navigate(this.gridRouter.baseUrl(i),{replace:!0}))},1e3);e.on("input",_.bind(o,this)),this.gridRouter.on("route:search",function(){var e=window.location.href;-1<e.indexOf("mode=")?e=e.replace(/mode=[^&]+/g,"mode=list"):e+=-1<e.indexOf("?")?"&mode=list":"?mode=list",e=e.replace("search=","s="),i.prop("href",e)}).on("route:reset",function(){t.val("").trigger("input")})},createStates:function(){var e=this.options;this.options.states||this.states.add([new n({library:wp.media.query(e.library),multiple:e.multiple,title:e.title,content:"browse",toolbar:"select",contentUserSetting:!1,filterable:"all",autoSelect:!1})])},bindRegionModeHandlers:function(){this.on("content:create:browse",this.browseContent,this),this.on("edit:attachment",this.openEditAttachmentModal,this),this.on("select:activate",this.bindKeydown,this),this.on("select:deactivate",this.unbindKeydown,this)},handleKeydown:function(e){27===e.which&&(e.preventDefault(),this.deactivateMode("select").activateMode("edit"))},bindKeydown:function(){this.$body.on("keydown.select",_.bind(this.handleKeydown,this))},unbindKeydown:function(){this.$body.off("keydown.select")},fixPosition:function(){var e,t;this.isModeActive("select")&&(t=(e=this.$(".attachments-browser")).find(".media-toolbar"),e.offset().top+16<this.$window.scrollTop()+this.$adminBar.height()?(e.addClass("fixed"),t.css("width",e.width()+"px")):(e.removeClass("fixed"),t.css("width","")))},addNewClickHandler:function(e){e.preventDefault(),this.trigger("toggle:upload:attachment"),this.uploader&&this.uploader.refresh()},openEditAttachmentModal:function(e){wp.media.frames.edit?wp.media.frames.edit.open().trigger("refresh",e):wp.media.frames.edit=wp.media({frame:"edit-attachments",controller:this,library:this.state().get("library"),model:e})},browseContent:function(e){var t=this.state();this.browserView=e.view=new wp.media.view.AttachmentsBrowser({controller:this,collection:t.get("library"),selection:t.get("selection"),model:t,sortable:t.get("sortable"),search:t.get("searchable"),filters:t.get("filterable"),date:t.get("date"),display:t.get("displaySettings"),dragInfo:t.get("dragInfo"),sidebar:"errors",suggestedWidth:t.get("suggestedWidth"),suggestedHeight:t.get("suggestedHeight"),AttachmentView:t.get("AttachmentView"),scrollElement:document}),this.browserView.on("ready",_.bind(this.bindDeferred,this)),this.errors=wp.Uploader.errors,this.errors.on("add remove reset",this.sidebarVisibility,this)},sidebarVisibility:function(){this.browserView.$(".media-sidebar").toggle(!!this.errors.length)},bindDeferred:function(){this.browserView.dfd&&this.browserView.dfd.done(_.bind(this.startHistory,this))},startHistory:function(){window.history&&window.history.pushState&&(Backbone.History.started&&Backbone.history.stop(),Backbone.history.start({root:window._wpMediaGridSettings.adminUrl,pushState:!0}))}}),e.exports=i},function(e,t){var i,o=wp.media.view.Attachment.Details;i=o.extend({template:wp.template("attachment-details-two-column"),initialize:function(){this.controller.on("content:activate:edit-details",_.bind(this.editAttachment,this)),o.prototype.initialize.apply(this,arguments)},editAttachment:function(e){e&&e.preventDefault(),this.controller.content.mode("edit-image")},toggleSelectionHandler:function(){},render:function(){o.prototype.render.apply(this,arguments),wp.media.mixin.removeAllPlayers(),this.$("audio, video").each(function(e,t){var i=wp.media.view.MediaDetails.prepareSrc(t);new window.MediaElementPlayer(i,wp.media.mixin.mejsSettings)})}}),e.exports=i},function(e,t){var i=Backbone.Router.extend({routes:{"upload.php?item=:slug&mode=edit":"editItem","upload.php?item=:slug":"showItem","upload.php?search=:query":"search","upload.php":"reset"},baseUrl:function(e){return"upload.php"+e},reset:function(){var e=wp.media.frames.edit;e&&e.close()},search:function(e){jQuery("#media-search-input").val(e).trigger("input")},showItem:function(e){var t,i=wp.media,o=i.frames.browse,n=o.state().get("library");(t=n.findWhere({id:parseInt(e,10)})).set("skipHistory",!0),t?o.trigger("edit:attachment",t):(t=i.attachment(e),o.listenTo(t,"change",function(e){o.stopListening(t),o.trigger("edit:attachment",e)}),t.fetch())},editItem:function(e){this.showItem(e),wp.media.frames.edit.content.mode("edit-details")}});e.exports=i},function(e,t){var i,o=wp.media.View;i=wp.media.view.EditImage.extend({initialize:function(e){this.editor=window.imageEdit,this.frame=e.frame,this.controller=e.controller,o.prototype.initialize.apply(this,arguments)},back:function(){this.frame.content.mode("edit-metadata")},save:function(){this.model.fetch().done(_.bind(function(){this.frame.content.mode("edit-metadata")},this))}}),e.exports=i},function(e,t){var i,o=wp.media.view.Frame,n=wp.media.view.MediaFrame,s=jQuery;i=n.extend({className:"edit-attachment-frame",template:wp.template("edit-attachment-frame"),regions:["title","content"],events:{"click .left":"previousMediaItem","click .right":"nextMediaItem"},initialize:function(){o.prototype.initialize.apply(this,arguments),_.defaults(this.options,{modal:!0,state:"edit-attachment"}),this.controller=this.options.controller,this.gridRouter=this.controller.gridRouter,this.library=this.options.library,this.options.model&&(this.model=this.options.model),this.bindHandlers(),this.createStates(),this.createModal(),this.title.mode("default"),this.toggleNav()},bindHandlers:function(){this.on("title:create:default",this.createTitle,this),this.on("content:create:edit-metadata",this.editMetadataMode,this),this.on("content:create:edit-image",this.editImageMode,this),this.on("content:render:edit-image",this.editImageModeRender,this),this.on("refresh",this.rerender,this),this.on("close",this.detach),this.bindModelHandlers(),this.listenTo(this.gridRouter,"route:search",this.close,this)},bindModelHandlers:function(){this.listenTo(this.model,"change:status destroy",this.close,this)},createModal:function(){this.options.modal&&(this.modal=new wp.media.view.Modal({controller:this,title:this.options.title,hasCloseButton:!1}),this.modal.on("open",_.bind(function(){s("body").on("keydown.media-modal",_.bind(this.keyEvent,this))},this)),this.modal.on("close",_.bind(function(){s("body").off("keydown.media-modal"),s('li.attachment[data-id="'+this.model.get("id")+'"]').focus(),this.resetRoute()},this)),this.modal.content(this),this.modal.open())},createStates:function(){this.states.add([new wp.media.controller.EditAttachmentMetadata({model:this.model,library:this.library})])},editMetadataMode:function(e){e.view=new wp.media.view.Attachment.Details.TwoColumn({controller:this,model:this.model}),e.view.views.set(".attachment-compat",new wp.media.view.AttachmentCompat({controller:this,model:this.model})),this.model&&!this.model.get("skipHistory")&&this.gridRouter.navigate(this.gridRouter.baseUrl("?item="+this.model.id))},editImageMode:function(e){var t=new wp.media.controller.EditImage({model:this.model,frame:this});t._toolbar=function(){},t._router=function(){},t._menu=function(){},e.view=new wp.media.view.EditImage.Details({model:this.model,frame:this,controller:t}),this.gridRouter.navigate(this.gridRouter.baseUrl("?item="+this.model.id+"&mode=edit"))},editImageModeRender:function(e){e.on("ready",e.loadEditor)},toggleNav:function(){this.$(".left").prop("disabled",!this.hasPrevious()),this.$(".right").prop("disabled",!this.hasNext())},rerender:function(e){this.stopListening(this.model),this.model=e,this.bindModelHandlers(),"edit-metadata"!==this.content.mode()?this.content.mode("edit-metadata"):this.content.render(),this.toggleNav()},previousMediaItem:function(){this.hasPrevious()&&(this.trigger("refresh",this.library.at(this.getCurrentIndex()-1)),this.focusNavButton(this.hasPrevious()?".left":".right"))},nextMediaItem:function(){this.hasNext()&&(this.trigger("refresh",this.library.at(this.getCurrentIndex()+1)),this.focusNavButton(this.hasNext()?".right":".left"))},focusNavButton:function(e){s(e).focus()},getCurrentIndex:function(){return this.library.indexOf(this.model)},hasNext:function(){return this.getCurrentIndex()+1<this.library.length},hasPrevious:function(){return-1<this.getCurrentIndex()-1},keyEvent:function(e){("INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName||e.target.readOnly||e.target.disabled)&&(39===e.keyCode&&this.nextMediaItem(),37===e.keyCode&&this.previousMediaItem())},resetRoute:function(){var e=this.controller.browserView.toolbar.get("search").$el.val(),t=""!==e?"?search="+e:"";this.gridRouter.navigate(this.gridRouter.baseUrl(t),{replace:!0})}}),e.exports=i},function(e,t){var i,o=wp.media.view.Button,n=wp.media.view.l10n;i=o.extend({initialize:function(){_.defaults(this.options,{size:""}),o.prototype.initialize.apply(this,arguments),this.controller.on("select:activate select:deactivate",this.toggleBulkEditHandler,this),this.controller.on("selection:action:done",this.back,this)},back:function(){this.controller.deactivateMode("select").activateMode("edit")},click:function(){o.prototype.click.apply(this,arguments),this.controller.isModeActive("select")?this.back():this.controller.deactivateMode("edit").activateMode("select")},render:function(){return o.prototype.render.apply(this,arguments),this.$el.addClass("select-mode-toggle-button"),this},toggleBulkEditHandler:function(){var e,t=this.controller.content.get().toolbar;e=t.$(".media-toolbar-secondary > *, .media-toolbar-primary > *"),this.controller.isModeActive("select")?(this.model.set({size:"large",text:n.cancel}),e.not(".spinner, .media-button").hide(),this.$el.show(),t.$el.addClass("media-toolbar-mode-select"),t.$(".delete-selected-button").removeClass("hidden")):(this.model.set({size:"",text:n.bulkSelect}),this.controller.content.get().$el.removeClass("fixed"),t.$el.css("width",""),t.$el.removeClass("media-toolbar-mode-select"),t.$(".delete-selected-button").addClass("hidden"),e.not(".media-button").show(),this.controller.state().get("selection").reset())}}),e.exports=i},function(e,t){var i,o=wp.media.view.Button,n=wp.media.view.l10n;i=o.extend({initialize:function(){o.prototype.initialize.apply(this,arguments),this.options.filters&&this.options.filters.model.on("change",this.filterChange,this),this.controller.on("selection:toggle",this.toggleDisabled,this),this.controller.on("select:activate",this.toggleDisabled,this)},filterChange:function(e){"trash"===e.get("status")?this.model.set("text",n.restoreSelected):wp.media.view.settings.mediaTrash?this.model.set("text",n.trashSelected):this.model.set("text",n.deletePermanently)},toggleDisabled:function(){this.model.set("disabled",!this.controller.state().get("selection").length)},render:function(){return o.prototype.render.apply(this,arguments),this.controller.isModeActive("select")?this.$el.addClass("delete-selected-button"):this.$el.addClass("delete-selected-button hidden"),this.toggleDisabled(),this}}),e.exports=i},function(e,t){var i,o=wp.media.view.Button,n=wp.media.view.DeleteSelectedButton;i=n.extend({initialize:function(){n.prototype.initialize.apply(this,arguments),this.controller.on("select:activate",this.selectActivate,this),this.controller.on("select:deactivate",this.selectDeactivate,this)},filterChange:function(e){this.canShow="trash"===e.get("status")},selectActivate:function(){this.toggleDisabled(),this.$el.toggleClass("hidden",!this.canShow)},selectDeactivate:function(){this.toggleDisabled(),this.$el.addClass("hidden")},render:function(){return o.prototype.render.apply(this,arguments),this.selectActivate(),this}}),e.exports=i}]);