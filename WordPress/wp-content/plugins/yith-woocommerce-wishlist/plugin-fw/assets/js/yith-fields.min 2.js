(function(a){a(document).on("yith_fields_init",function(){var b=a(".yith-plugin-fw-datepicker"),c=a(".yith-plugin-fw-colorpicker"),d=a(".yith-plugin-fw-upload-img-url"),e=a(".add_media"),f=a(".yith-plugin-fw .image-gallery ul.slides-wrapper"),h=a(".yith-plugin-fw-sidebar-layout"),k=a(".yith-plugin-fw .yith-plugin-fw-slider-container .ui-slider-horizontal"),l=a(".codemirror"),n=a(".yit-icons-manager-wrapper");a(".yith-plugin-ui td.forminp-checkbox");b.each(function(){var b=a(this).data();b.showAnim=
!1;b.beforeShow=function(a,b){b.dpDiv.addClass("yith-plugin-fw-datepicker-div")};b.onClose=function(a,b){b.dpDiv.removeClass("yith-plugin-fw-datepicker-div")};a(this).datepicker(b)});c.wpColorPicker({palettes:!1,width:200,mode:"hsl",clear:function(){var b=a(this);b.val(b.data("default-color"));b.change()}});c.each(function(){var b=a(this).data("variations-label"),g=a(this).closest(".yith-plugin-fw-colorpicker-field-wrapper"),c=a(this).closest(".yith-single-colorpicker"),m=g.find(".wp-picker-input-wrap"),
d=c.find(".wp-picker-input-wrap");m.length&&g.find("a.wp-color-result").attr("title",b);c.length&&c.find("a.wp-color-result").attr("title",b);m.find(".wp-picker-clear-custom").length||(b=a("<span/>").attr({"class":"wp-picker-default-custom"}),m.find(".wp-picker-default").wrap(b));d.find(".wp-picker-clear-custom").length||(b=a("<span/>").attr({"class":"wp-picker-default-custom"}),d.find(".wp-picker-default").wrap(b))});"undefined"!==typeof wp&&"undefined"!==typeof wp.media&&(d.change(function(){var b=
a(this).val(),g=a(this).parent().find(".yith-plugin-fw-upload-img-preview").first();1>g.length&&(g=a(this).parent().parent().find(".yith-plugin-fw-upload-img-preview").first());/(http|ftp|https):\/\/[a-zA-Z0-9@?^=%&amp;:/~+#-_.]*.(gif|jpg|jpeg|png|ico|svg)/.test(b)?g.html('<img src="'+b+'" style="max-width:100px; max-height:100px;" />'):g.html("")}).trigger("change"),a(document).on("click",".yith-plugin-fw-upload-button",function(b){b.preventDefault();var g=a(this).attr("id").replace(/-button$/,"");
if(!c){b=[new wp.media.controller.Library({library:wp.media.query(),multiple:!1,title:"Choose Image",priority:20,filterable:"uploaded"})];var c=wp.media.frames.downloadable_file=wp.media({title:"Choose Image",library:{type:""},button:{text:"Choose Image"},multiple:!1,states:b});c.on("select",function(){var b=c.state().get("selection").first().toJSON();a("#"+g).val(b.url);a("#"+g+"-yith-attachment-id")&&a("#"+g+"-yith-attachment-id").val(b.id);d.trigger("change")})}c.open()}),a(document).on("click",
".yith-plugin-fw-upload-button-reset",function(b){var c=a(this);b=c.attr("id");c=c.attr("id").replace(/-button-reset$/,"");b=a("#"+b).data("default");a("#"+c).val(b);d.trigger("change")}));e.on("click",function(){});"undefined"!==typeof wp&&"undefined"!==typeof wp.media&&(a(document).on("click",".yith-plugin-fw .image-gallery-button",function(b){var c=a(this);b=c.closest(".image-gallery");var d=b.find(".image_gallery_ids"),m=d.val(),p=b.find("ul.slides-wrapper"),e=wp.media.frames.image_gallery=wp.media({title:c.data("choose"),
button:{text:c.data("update")},states:[new wp.media.controller.Library({title:c.data("choose"),filterable:"all",multiple:!0})]});e.on("select",function(){e.state().get("selection").map(function(a){a=a.toJSON();a.id&&(m=m?m+","+a.id:a.id,p.append('<li class="image" data-attachment_id="'+a.id+'"><img src="'+a.sizes.thumbnail.url+'"/><ul class="actions"><li><a href="#" class="delete" title="'+c.data("delete")+'">x</a></li></ul></li>'))});d.val(m)});e.open()}),f.each(function(){var b=a(this);b.sortable({items:"li.image",
cursor:"move",scrollSensitivity:40,forcePlaceholderSize:!0,forceHelperSize:!1,helper:"clone",opacity:.65,start:function(a,b){b.item.css("background-color","#f6f6f6")},stop:function(a,b){b.item.removeAttr("style")},update:function(c,d){var g="";b.find("li.image").css("cursor","default").each(function(){var b=a(this).attr("data-attachment_id");g=g+b+","});b.closest(".image-gallery").find(".image_gallery_ids").val(g)}})}),f.on("click","a.delete",function(){var b=a(this).closest(".image-gallery"),c=a(this).closest(".image-gallery ul.slides-wrapper");
b=b.find(".image_gallery_ids");var d="";a(this).closest("li.image").remove();c.find("li.image").css("cursor","default").each(function(){var b=a(this).attr("data-attachment_id");d=d+b+","});b.val(d)}));h.each(function(){a(this).find("img").on("click",function(){var b=a(this).closest(".yith-plugin-fw-sidebar-layout"),c=b.find(".yith-plugin-fw-sidebar-layout-sidebar-left-container");b=b.find(".yith-plugin-fw-sidebar-layout-sidebar-right-container");var d=a(this).data("type");a(this).parent().children(":radio").attr("checked",
!1);a(this).prev(":radio").attr("checked",!0);if("undefined"!=typeof d)switch(d){case "left":c.show();b.hide();break;case "right":b.show();c.hide();break;case "double":c.show();b.show();break;default:c.hide(),b.hide()}})});k.each(function(){var b=a(this).data("val"),c=a(this).data("min"),d=a(this).data("max"),e=a(this).data("step"),f=a(this).data("labels");a(this).slider({value:b,min:c,max:d,range:"min",step:e,create:function(){a(this).find(".ui-slider-handle").text(a(this).slider("value"))},slide:function(b,
c){a(this).find("input").val(c.value);a(this).find(".ui-slider-handle").text(c.value);a(this).siblings(".feedback").find("strong").text(c.value+f)}})});l.each(function(b,c){var d=CodeMirror.fromTextArea(c,{lineNumbers:1,mode:"javascript",showCursorWhenSelecting:!0});a(c).data("codemirrorInstance",d)});a(document).on("click",".yith-plugin-fw-select-all",function(){a("#"+a(this).data("select-id")).find("option").prop("selected",!0).trigger("change")});a(document).on("click",".yith-plugin-fw-deselect-all",
function(){a("#"+a(this).data("select-id")).find("option").prop("selected",!1).trigger("change")});n.each(function(){var b=a(this),c=b.find(".yit-icons-manager-icon-preview").first(),d=b.find(".yit-icons-manager-icon-text");b.on("click",".yit-icons-manager-list li",function(e){e=a(e.target).closest("li");var g=e.data("font"),f=e.data("icon"),m=e.data("key"),h=e.data("name");c.attr("data-font",g);c.attr("data-icon",f);c.attr("data-key",m);c.attr("data-name",h);d.val(g+":"+h);b.find(".yit-icons-manager-list li").removeClass("active");
e.addClass("active")});b.on("click",".yit-icons-manager-action-set-default",function(){b.find(".yit-icons-manager-list li.default").trigger("click")})});a(document).on("click",".yith-plugin-fw-select-images__item",function(){var b=a(this),c=b.data("key"),d=b.closest(".yith-plugin-fw-select-images__wrapper"),e=d.find(".yith-plugin-fw-select-images__item");d=d.find("select").first();d.length&&(d.val(c).trigger("yith_select_images_value_changed"),e.removeClass("yith-plugin-fw-select-images__item--selected"),
b.addClass("yith-plugin-fw-select-images__item--selected"))});a(document.body).trigger("wc-enhanced-select-init");a(document).find(".ui-sortable .yith-toggle-elements").sortable({cursor:"move",axis:"y",scrollSensitivity:40,forcePlaceholderSize:!0,helper:"clone",stop:function(b,c){var d=jQuery(".ui-sortable-handle"),e,g=[];for(e=0;e<d.length;e++)g[e]=a(d[e]).data("item_key");0<g.length&&a(this).closest(".toggle-element").saveToggleElement(null,g)}});a(document.body).trigger("yith-framework-enhanced-select-init")}).trigger("yith_fields_init");
a(document).on("click",".yith-plugin-fw-onoff-container span",function(){var b=a(this).prev("input");b.prop("checked")?b.prop("checked",!1).attr("value","no").removeClass("onoffchecked"):b.prop("checked",!0).attr("value","yes").addClass("onoffchecked");b.change()});a.fn.saveToggleElement=function(b,c){var d=a(this),e="yith_plugin_fw_save_toggle_element",f=d.serializeToggleElement(),h=d.find(".yith-toggle_wrapper"),k=h.attr("id"),l=a.urlParam("tab");f.append("security",h.data("nonce"));"undefined"!=
typeof c&&0<c.length&&f.append("yith_toggle_elements_order_keys",c);d.closest(".metaboxes-tab.yith-plugin-ui").length?(e="yith_plugin_fw_save_toggle_element_metabox",post_id=a(this).closest("form#post").find("#post_ID").val(),yit_metaboxes_nonce=a(this).closest("form#post").find("#yit_metaboxes_nonce").val(),metabox_tab=a(this).closest(".tabs-panel").attr("id"),url=yith_framework_fw_fields.ajax_url+"?action="+e+"&post_ID="+post_id+"&yit_metaboxes_nonce="+yit_metaboxes_nonce+"&toggle_id="+k+"&metabox_tab="+
metabox_tab):url=yith_framework_fw_fields.admin_url+"?action="+e+"&tab="+l+"&toggle_id="+k;a.ajax({type:"POST",url:url,data:f,contentType:!1,processData:!1,success:function(c){b&&b.removeClass("show");a(document).trigger("yith_save_toggle_element_done",[c,d])}})};a.fn.serializeToggleElement=function(){var b=a(this),c=new FormData;b=a(b).find(":input").serializeArray();a.each(b,function(a,b){el_name=b.name;c.append(b.name,b.value)});return c};a.fn.formatToggleTitle=function(){var b=a(this),c=b.find(":input"),
d=b.find("span.title").data("title_format"),e=b.find(".subtitle").data("subtitle_format"),f=RegExp("[^%%]+(?=[%%])","g");if("undefined"!=typeof d)var h=d.match(f);if("undefined"!=typeof e)var k=e.match(f);a.each(c,function(b,c){"undefined"!=typeof a(c).attr("id")&&($field_id=a(c).attr("id"),$field_array=$field_id.split("_"),$field_array.pop(),$field_id=$field_array.join("_"),$field_val=a(c).val(),null!=h&&"undefined"!=typeof h&&-1!==h.indexOf($field_id)&&(d=d.replace("%%"+$field_id+"%%",$field_val)),
null!=k&&"undefined"!=typeof k&&-1!==k.indexOf($field_id)&&(e=e.replace("%%"+$field_id+"%%",$field_val)))});""!==d&&b.find("span.title").html(d);""!==e&&b.find(".subtitle").html(e);a(document).trigger("yith-toggle-element-item-title",[b])};a.urlParam=function(a){a=(new RegExp("[?&]"+a+"=([^&#]*)")).exec(window.location.search);return null!==a?a[1]||0:!1};a(document).on("click",".yith-toggle-title",function(b){b=a(b.target);var c=b.closest(".yith-toggle-row"),d=c.find(".yith-toggle-content");if(b.hasClass("yith-plugin-fw-onoff")||
b.hasClass("yith-icon-drag"))return!1;c.is(".yith-toggle-row-opened")?d.slideUp(400):d.slideDown(400);c.toggleClass("yith-toggle-row-opened")});a(document).on("click",".yith-add-box-button",function(b){b.preventDefault();b=a(this);var c=b.data("box_id"),d=b.data("closed_label"),e=b.data("opened_label"),f=b.closest(".yith-toggle_wrapper").attr("id");template=wp.template("yith-toggle-element-add-box-content-"+f);""!==c&&(a("#"+c).html(template({index:"box_id"})).slideToggle(),""!==d&&(b.html()===d?
b.html(e).removeClass("closed"):b.html(d).addClass("closed")),a(document).trigger("yith_fields_init"),a(document).trigger("yith-add-box-button-toggle",[b]))});a(document).on("click",".yith-add-box-buttons .yith-save-button",function(b){b.preventDefault();var c=a(this).parents(".yith-add-box"),d=a(this).closest(".yith-toggle_wrapper").attr("id");b=c.find(".spinner");var e=a(this).parents(".toggle-element"),f=c.find(":input"),h=e.find(".yith-toggle-row").length,k=a('<input type="hidden">');k.val(h);
a(document).trigger("yith-toggle-change-counter",[k,c]);h=k.val();d=wp.template("yith-toggle-element-item-"+d);var l=a(d({index:h}));b.addClass("show");a.each(f,function(b,c){"undefined"!=typeof a(c).attr("id")&&($field_id=a(c).attr("id"),$field_val=a(c).val(),"radio"==a(c).attr("type")?($field_id=$field_id.replace("new_",""),$field_id=$field_id.replace("-"+$field_val,""),$field_id=$field_id+"_dataindex-"+$field_val):$field_id=$field_id.replace("new_","")+"_"+h,a(c).is(":checked")&&a(l).find("#"+
$field_id).prop("checked",!0),(a(c).hasClass("yith-post-search")||a(c).hasClass("yith-term-search"))&&a(l).find("#"+$field_id).html(a("#"+a(c).attr("id")).html()),a(l).find("#"+$field_id).val($field_val))});a(l).formatToggleTitle();var n=a('<input type="hidden">').val("yes");a(document).trigger("yith-toggle-element-item-before-add",[c,l,n]);setTimeout(function(){"yes"===n.val()&&(a(e).find(".yith-toggle-elements").append(l),a(c).find(".yith-plugin-fw-datepicker").datepicker("destroy"),a(c).html(""),
a(c).prev(".yith-add-box-button").trigger("click"),e.saveToggleElement(),setTimeout(function(){a(e).find(".highlight").removeClass("highlight")},2E3),a(document).trigger("yith_fields_init"))},1E3)});a(document).on("click",".yith-toggle-row .yith-save-button",function(b){b.preventDefault();b=a(this).closest(".toggle-element");var c=a(this).closest(".yith-toggle-row"),d=c.find(".spinner");c.formatToggleTitle();var e=a('<input type="hidden">').val("yes");a(document).trigger("yith-toggle-element-item-before-update",
[b,c,e]);"yes"===e.val()&&(d.addClass("show"),b.saveToggleElement(d))});a(document).on("click",".yith-toggle-row .yith-delete-button",function(b){b.preventDefault();b=a(this).closest(".toggle-element");a(this).closest(".yith-toggle-row").remove();b.saveToggleElement()});a(document).on("click",".yith-toggle-onoff",function(b){b.preventDefault();a(this).closest(".toggle-element").saveToggleElement()});a(document).on("click",".yith-plugin-fw-radio input[type=radio]",function(){a(this).closest(".yith-plugin-fw-radio").val(a(this).val()).trigger("change")});
a(document).on("click",".yith-password-eye",function(){var b=a(this),c=a(this).closest(".yith-password-wrapper").find("input");"password"===c.attr("type")?(c.attr("type","text"),b.addClass("yith-password-eye-closed")):(c.attr("type","password"),b.removeClass("yith-password-eye-closed"))});a(document.body).on("yith-plugin-fw-init-radio",function(){a(".yith-plugin-fw-radio:not(.yith-plugin-fw-radio--initialized)").each(function(){a(this).val(a(this).attr("value"));a(this).addClass("yith-plugin-fw-radio--initialized")})}).trigger("yith-plugin-fw-init-radio");
a(document).on("select2:open",function(b){a(b.target).closest(".yith-plugin-ui").length&&a(".select2-results").closest(".select2-container").addClass("yith-plugin-fw-select2-container")});var f={selectors:{wrapper:".yith-plugin-fw-dimensions",units:{wrapper:".yith-plugin-fw-dimensions__units",single:".yith-plugin-fw-dimensions__unit",value:".yith-plugin-fw-dimensions__unit__value",selectedClass:"yith-plugin-fw-dimensions__unit--selected"},linked:{button:".yith-plugin-fw-dimensions__linked",value:".yith-plugin-fw-dimensions__linked__value",
wrapperActiveClass:"yith-plugin-fw-dimensions--linked-active"},dimensions:{number:".yith-plugin-fw-dimensions__dimension__number"}},init:function(){var b=f;a(document).on("click",b.selectors.units.single,b.unitChange);a(document).on("click",b.selectors.linked.button,b.linkedChange);a(document).on("change keyup",b.selectors.dimensions.number,b.numberChange)},unitChange:function(b){b=a(this).closest(f.selectors.units.single);var c=b.closest(f.selectors.units.wrapper),d=c.find(f.selectors.units.single);
c=c.find(f.selectors.units.value).first();var e=b.data("value");d.removeClass(f.selectors.units.selectedClass);b.addClass(f.selectors.units.selectedClass);c.val(e)},linkedChange:function(){var b=a(this).closest(f.selectors.linked.button),c=b.closest(f.selectors.wrapper);b=b.find(f.selectors.linked.value);"yes"===b.val()?(c.removeClass(f.selectors.linked.wrapperActiveClass),b.val("no")):(c.addClass(f.selectors.linked.wrapperActiveClass),b.val("yes"),c.find(f.selectors.dimensions.number).first().trigger("change"))},
numberChange:function(b){b=a(this).closest(f.selectors.dimensions.number);var c=b.closest(f.selectors.wrapper);c.hasClass(f.selectors.linked.wrapperActiveClass)&&c.find(f.selectors.dimensions.number).val(b.val())}};f.init()})(jQuery);