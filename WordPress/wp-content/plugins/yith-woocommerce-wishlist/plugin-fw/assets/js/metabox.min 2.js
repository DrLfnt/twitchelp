!function(e){e(".metaboxes-tab").each(function(){e(".tabs-panel",this).hide();var t=wpCookies.get("active_metabox_tab");t=null==t?e("ul.metaboxes-tabs li:first-child a",this).attr("href"):"#"+t,e(t).show(),e(".metaboxes-tabs a",this).click(function(t){if(!e(this).parent().hasClass("tabs")){var a=e(this).attr("href");return e(this).parent().addClass("tabs").siblings("li").removeClass("tabs"),e(this).closest(".metaboxes-tab").find(".tabs-panel").hide(),e(a).show(),!1}t.preventDefault()})});var t=e("#_active_page_options-container").parent().html();function a(t,a,i,s){var n=!0;if("string"==typeof a){":radio"==a.substr(0,6)&&(a+=":checked");var o=e(a).val();if("checkbox"==e(a).attr("type"))o=e(a).is(":checked")?"yes":"no";i=i.split(",");for(var d=0;d<i.length;d++){if(o==i[d]){n=!0;break}n=!1}}var r,c=e(t),h=e(t+"-container").parent(),b=s.split("-");for(r in b){var l=b[r];if(n)switch(l){case"disable":h.removeClass("yith-disabled"),c.attr("disabled",!1);break;case"hideme":c.show();break;case"fadeInOut":case"fadeIn":h.show(500);break;case"fadeOut":h.show();break;default:h.show(),h.fadeTo("slow",1).addClass("fade-in")}else switch(l){case"disable":h.addClass("yith-disabled"),c.attr("disabled",!0);break;case"hideme":c.hide();break;case"fadeInOut":case"fadeOut":h.hide(500);break;case"fadeIn":h.hide();break;default:h.hasClass("fade-in")?h.fadeTo("slow",0,function(){e(this).hide().removeClass("fade-in")}):(h.hide(),h.css({opacity:"0"}))}}}e("#_active_page_options-container").parent().remove(),e(t).insertAfter("#yit-post-setting .handlediv"),e(t).insertAfter("#yit-page-setting .handlediv"),e("#_active_page_options-container").on("click",function(){e("#_active_page_options").is(":checked")?e("#yit-page-setting .inside .metaboxes-tab, #yit-post-setting .inside .metaboxes-tab").css({opacity:1,"pointer-events":"auto"}):e("#yit-page-setting .inside .metaboxes-tab, #yit-post-setting .inside .metaboxes-tab").css({opacity:.5,"pointer-events":"none"})}).click(),e(document.body).on("yith-plugin-fw-metabox-init-deps",function(){e(document.body).trigger("yith-plugin-fw-init-radio"),e(".metaboxes-tab [data-dep-target]:not(.yith-plugin-fw-metabox-deps-initialized)").each(function(){var t=e(this),i="#"+t.data("dep-target"),s="#"+t.data("dep-id"),n=t.data("dep-value"),o=t.data("dep-type");a(i,s,n.toString(),o),e(s).on("change",function(){a(i,s,n.toString(),o)}).change(),t.addClass("yith-plugin-fw-metabox-deps-initialized")})}).trigger("yith-plugin-fw-metabox-init-deps")}(jQuery);