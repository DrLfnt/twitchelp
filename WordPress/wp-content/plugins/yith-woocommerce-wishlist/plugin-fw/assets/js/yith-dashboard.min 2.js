!function(i){i(".yith-last-changelog").click(function(o){o.preventDefault();var t=i(this).data("changelogid"),a=i("#"+t),e=i(this).data("plugininfo"),n={};n[yith_dashboard.buttons.close]=function(){i(this).dialog("close")},a.dialog({title:e,dialogClass:"wp-dialog",autoOpen:!1,draggable:!1,width:"auto",modal:!0,resizable:!1,closeOnEscape:!0,position:{my:"center",at:"center",of:window},buttons:n,show:{effect:"blind",duration:1e3},open:function(){i(".ui-widget-overlay").bind("click",function(){a.dialog("close")})},create:function(){i(".ui-dialog-titlebar-close").addClass("ui-button")}}),a.dialog("open")})}(jQuery);