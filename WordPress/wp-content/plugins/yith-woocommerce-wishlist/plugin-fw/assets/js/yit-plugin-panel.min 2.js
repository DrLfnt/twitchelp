jQuery(function(b){function h(a,c,d,f){var e=!0;if("string"==typeof c){":radio"==c.substr(0,6)&&(c+=":checked");var g=b(c).val();"checkbox"==b(c).attr("type")&&(g=b(c).is(":checked")?"yes":"no");"select-images"===b(c+"-wrapper").data("type")&&(g=b(c+"-wrapper").find("select").first().val());d=d.split(",");for(c=0;c<d.length;c++)if(g!=d[c])e=!1;else{e=!0;break}}d=b(a);a=b(a+"-container").closest("tr");1>a.length&&(a=d.closest(".yith-plugin-fw-panel-wc-row"));f=f.split("-");for(var h in f)if(g=f[h],
  e)switch(g){case "disable":a.removeClass("yith-disabled");d.attr("disabled",!1);break;case "hideme":d.show();break;case "fadeInOut":case "fadeIn":a.show(500);break;case "fadeOut":a.show();break;default:a.show(),a.fadeTo("slow",1).addClass("fade-in")}else switch(g){case "disable":a.addClass("yith-disabled");d.attr("disabled",!0);break;case "hideme":d.hide();break;case "fadeInOut":case "fadeOut":a.hide(500);break;case "fadeIn":a.hide();break;default:a.hasClass("fade-in")?a.fadeTo("slow",0,function(){b(this).hide().removeClass("fade-in")}):
  (a.hide(),a.css({opacity:"0"}))}}b("[data-dep-target]").each(function(){var a=b(this),c="#"+a.data("dep-target"),d="#"+a.data("dep-id"),f=a.data("dep-value"),e=a.data("dep-type");a="change";"select-images"===b(d+"-wrapper").data("type")&&(a="yith_select_images_value_changed");h(c,d,f.toString(),e);b(d).on(a,function(){h(c,d,f.toString(),e)}).trigger(a)});b(".rm_connectedlist").each(function(){var a=b(this).find("ul"),c=b(this).find(":hidden");a.sortable({connectWith:a,update:function(d,f){var e={};
    a.each(function(){var a={};b(this).children().each(function(){a[b(this).data("option")]=b(this).text()});e[b(this).data("list")]=a});c.val(JSON.stringify(e).replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0"))}}).disableSelection()});b(document).ready(function(){b(".google-analytic-generate").click(function(){var a=b("#"+b(this).data("textarea")).data("codemirrorInstance"),c=b("#"+b(this).data("input")).val(),d=b(this).data("basename");a.replaceRange("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement( o ),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\nga('create', '"+
  (c+"', '"+d+"');\nga('send', 'pageview');\n"),a.getCursor("start"),a.getCursor("end"))})});b(".yith-plugin-fw-panel .woo-nav-tab-wrapper").removeClass("woo-nav-tab-wrapper").addClass("yith-nav-tab-wrapper");var k=b(".wrap.yith-plugin-ui").first(),l=b("div.updated, div.error, div.notice");l.addClass("inline");k.length&&k.prepend(l)});
