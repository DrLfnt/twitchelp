/*! This file is auto-generated */
window.wp=window.wp||{},function(s,l){window.inlineEditTax={init:function(){var t=this,i=s("#inline-edit");t.type=s("#the-list").attr("data-wp-lists").substr(5),t.what="#"+t.type+"-",s("#the-list").on("click",".editinline",function(){s(this).attr("aria-expanded","true"),inlineEditTax.edit(this)}),i.keyup(function(t){if(27===t.which)return inlineEditTax.revert()}),s(".cancel",i).click(function(){return inlineEditTax.revert()}),s(".save",i).click(function(){return inlineEditTax.save(this)}),s("input, select",i).keydown(function(t){if(13===t.which)return inlineEditTax.save(this)}),s('#posts-filter input[type="submit"]').mousedown(function(){t.revert()})},toggle:function(t){var i=this;"none"===s(i.what+i.getId(t)).css("display")?i.revert():i.edit(t)},edit:function(t){var i,e,n,a=this;return a.revert(),"object"==typeof t&&(t=a.getId(t)),i=s("#inline-edit").clone(!0),e=s("#inline_"+t),s("td",i).attr("colspan",s("th:visible, td:visible",".wp-list-table.widefat:first thead").length),s(a.what+t).hide().after(i).after('<tr class="hidden"></tr>'),(n=s(".name",e)).find("img").replaceWith(function(){return this.alt}),n=n.text(),s(':input[name="name"]',i).val(n),(n=s(".slug",e)).find("img").replaceWith(function(){return this.alt}),n=n.text(),s(':input[name="slug"]',i).val(n),s(i).attr("id","edit-"+t).addClass("inline-editor").show(),s(".ptitle",i).eq(0).focus(),!1},save:function(d){var t,i=s('input[name="taxonomy"]').val()||"";return"object"==typeof d&&(d=this.getId(d)),s("table.widefat .spinner").addClass("is-active"),t={action:"inline-save-tax",tax_type:this.type,tax_ID:d,taxonomy:i},t=s("#edit-"+d).find(":input").serialize()+"&"+s.param(t),s.post(ajaxurl,t,function(t){var i,e,n,a=s("#edit-"+d+" .inline-edit-save .notice-error"),r=a.find(".error");s("table.widefat .spinner").removeClass("is-active"),t?-1!==t.indexOf("<tr")?(s(inlineEditTax.what+d).siblings("tr.hidden").addBack().remove(),e=s(t).attr("id"),s("#edit-"+d).before(t).remove(),i=e?(n=e.replace(inlineEditTax.type+"-",""),s("#"+e)):(n=d,s(inlineEditTax.what+d)),s("#parent").find("option[value="+n+"]").text(i.find(".row-title").text()),i.hide().fadeIn(400,function(){i.find(".editinline").attr("aria-expanded","false").focus(),l.a11y.speak(inlineEditL10n.saved)})):(a.removeClass("hidden"),r.html(t),l.a11y.speak(r.text())):(a.removeClass("hidden"),r.html(inlineEditL10n.error),l.a11y.speak(inlineEditL10n.error))}),!1},revert:function(){var t=s("table.widefat tr.inline-editor").attr("id");t&&(s("table.widefat .spinner").removeClass("is-active"),s("#"+t).siblings("tr.hidden").addBack().remove(),t=t.substr(t.lastIndexOf("-")+1),s(this.what+t).show().find(".editinline").attr("aria-expanded","false").focus())},getId:function(t){var i=("TR"===t.tagName?t.id:s(t).parents("tr").attr("id")).split("-");return i[i.length-1]}},s(document).ready(function(){inlineEditTax.init()})}(jQuery,window.wp);