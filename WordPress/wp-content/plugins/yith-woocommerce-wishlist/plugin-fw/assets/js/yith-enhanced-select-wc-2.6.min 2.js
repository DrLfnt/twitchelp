jQuery(document).ready(function(t){"use strict";t(document.body).on("yith-framework-enhanced-select-init",function(){t(":input.yith-post-search").filter(":not(.enhanced)").each(function(){var e={action:"yith_plugin_fw_json_search_posts",security:yith_framework_enhanced_select_params.search_posts_nonce,post_type:"post"},a=t.extend(e,t(this).data()),n={allowClear:!!t(this).data("allow_clear"),placeholder:t(this).data("placeholder"),minimumInputLength:t(this).data("minimum_input_length")?t(this).data("minimum_input_length"):"3",escapeMarkup:function(t){return t},ajax:{url:yith_framework_enhanced_select_params.ajax_url,dataType:"json",quietMillis:250,data:function(t){return a.term=t,a},results:function(e){var a=[];return e&&t.each(e,function(t,e){a.push({id:t,text:e})}),{results:a}},cache:!0}};!0===t(this).data("multiple")?(n.multiple=!0,n.initSelection=function(e,a){var n=t.parseJSON(e.attr("data-selected")),i=[];return t(e.val().split(",")).each(function(t,e){i.push({id:e,text:n[e]})}),a(i)},n.formatSelection=function(t){return'<div class="selected-option" data-id="'+t.id+'">'+t.text+"</div>"}):(n.multiple=!1,n.initSelection=function(t,e){return e({id:t.val(),text:t.attr("data-selected")})}),t(this).select2(n).addClass("enhanced")}),t(":input.yith-term-search").filter(":not(.enhanced)").each(function(){var e={action:"yith_plugin_fw_json_search_terms",security:yith_framework_enhanced_select_params.search_terms_nonce,taxonomy:"category"},a=t.extend(e,t(this).data()),n={allowClear:!!t(this).data("allow_clear"),placeholder:t(this).data("placeholder"),minimumInputLength:t(this).data("minimum_input_length")?t(this).data("minimum_input_length"):"3",escapeMarkup:function(t){return t},ajax:{url:yith_framework_enhanced_select_params.ajax_url,dataType:"json",quietMillis:250,data:function(t){return a.term=t,a},results:function(e){var a=[];return e&&t.each(e,function(t,e){a.push({id:t,text:e})}),{results:a}},cache:!0}};!0===t(this).data("multiple")?(n.multiple=!0,n.initSelection=function(e,a){var n=t.parseJSON(e.attr("data-selected")),i=[];return t(e.val().split(",")).each(function(t,e){i.push({id:e,text:n[e]})}),a(i)},n.formatSelection=function(t){return'<div class="selected-option" data-id="'+t.id+'">'+t.text+"</div>"}):(n.multiple=!1,n.initSelection=function(t,e){return e({id:t.val(),text:t.attr("data-selected")})}),t(this).select2(n).addClass("enhanced")})}).trigger("yith-framework-enhanced-select-init")});