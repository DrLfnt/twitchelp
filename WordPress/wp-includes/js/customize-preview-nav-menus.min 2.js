/*! This file is auto-generated */
wp.customize.navMenusPreview=wp.customize.MenusCustomizerPreview=function(a,l,e,v){"use strict";var i={data:{navMenuInstanceArgs:{}}};return"undefined"!=typeof _wpCustomizePreviewNavMenusExports&&l.extend(i.data,_wpCustomizePreviewNavMenusExports),i.init=function(){var n=this,t=!1;v.preview.bind("sync",function(){t=!0}),v.selectiveRefresh&&(v.each(function(e){n.bindSettingListener(e)}),v.bind("add",function(e){e.get()&&!e.get()._invalid&&n.bindSettingListener(e,{fire:t})}),v.bind("remove",function(e){n.unbindSettingListener(e)}),v.selectiveRefresh.bind("render-partials-response",function(e){e.nav_menu_instance_args&&l.extend(n.data.navMenuInstanceArgs,e.nav_menu_instance_args)})),v.preview.bind("active",function(){n.highlightControls()})},v.selectiveRefresh&&(i.NavMenuInstancePartial=v.selectiveRefresh.Partial.extend({initialize:function(e,n){var t,a,i=this;if(!(t=e.match(/^nav_menu_instance\[([0-9a-f]{32})]$/)))throw new Error("Illegal id for nav_menu_instance partial. The key corresponds with the args HMAC.");if(a=t[1],(n=n||{}).params=l.extend({selector:'[data-customize-partial-id="'+e+'"]',navMenuArgs:n.constructingContainerContext||{},containerInclusive:!0},n.params||{}),v.selectiveRefresh.Partial.prototype.initialize.call(i,e,n),!l.isObject(i.params.navMenuArgs))throw new Error("Missing navMenuArgs");if(i.params.navMenuArgs.args_hmac!==a)throw new Error("args_hmac mismatch with id")},isRelatedSetting:function(e,n,t){var a,i,r,s,o,u,c=this;if(l.isString(e)&&(e=v(e)),(r=/^nav_menu_item\[/.test(e.id))&&l.isObject(n)&&l.isObject(t)&&(s=l.clone(n),o=l.clone(t),delete s.type_label,delete o.type_label,"https"===v.preview.scheme.get()&&((u=document.createElement("a")).href=s.url,u.protocol="https:",s.url=u.href,u.href=o.url,u.protocol="https:",o.url=u.href),n.title&&(delete o.original_title,delete s.original_title),l.isEqual(o,s)))return!1;if(c.params.navMenuArgs.theme_location){if("nav_menu_locations["+c.params.navMenuArgs.theme_location+"]"===e.id)return!0;a=v("nav_menu_locations["+c.params.navMenuArgs.theme_location+"]")}return!(i=c.params.navMenuArgs.menu)&&a&&(i=a()),!!i&&("nav_menu["+i+"]"===e.id||r&&(n&&n.nav_menu_term_id===i||t&&t.nav_menu_term_id===i))},refresh:function(){var e,n=this,t=a.Deferred();return l.isNumber(n.params.navMenuArgs.menu)?e=n.params.navMenuArgs.menu:n.params.navMenuArgs.theme_location&&v.has("nav_menu_locations["+n.params.navMenuArgs.theme_location+"]")&&(e=v("nav_menu_locations["+n.params.navMenuArgs.theme_location+"]").get()),e?v.selectiveRefresh.Partial.prototype.refresh.call(n):(n.fallback(),t.reject(),t.promise())},renderContent:function(e){var n=e.container;""===e.addedContent&&e.partial.fallback(),v.selectiveRefresh.Partial.prototype.renderContent.call(this,e)&&a(document).trigger("customize-preview-menu-refreshed",[{instanceNumber:null,wpNavArgs:e.context,wpNavMenuArgs:e.context,oldContainer:n,newContainer:e.container}])}}),v.selectiveRefresh.partialConstructor.nav_menu_instance=i.NavMenuInstancePartial,i.handleUnplacedNavMenuInstances=function(e){var n;return n=l.filter(l.values(i.data.navMenuInstanceArgs),function(e){return!v.selectiveRefresh.partial.has("nav_menu_instance["+e.args_hmac+"]")}),!!l.findWhere(n,e)&&(v.selectiveRefresh.requestFullRefresh(),!0)},i.bindSettingListener=function(e,n){var t;return n=n||{},(t=e.id.match(/^nav_menu\[(-?\d+)]$/))?(e._navMenuId=parseInt(t[1],10),e.bind(this.onChangeNavMenuSetting),n.fire&&this.onChangeNavMenuSetting.call(e,e(),!1),!0):(t=e.id.match(/^nav_menu_item\[(-?\d+)]$/))?(e._navMenuItemId=parseInt(t[1],10),e.bind(this.onChangeNavMenuItemSetting),n.fire&&this.onChangeNavMenuItemSetting.call(e,e(),!1),!0):!!(t=e.id.match(/^nav_menu_locations\[(.+?)]/))&&(e._navMenuThemeLocation=t[1],e.bind(this.onChangeNavMenuLocationsSetting),n.fire&&this.onChangeNavMenuLocationsSetting.call(e,e(),!1),!0)},i.unbindSettingListener=function(e){e.unbind(this.onChangeNavMenuSetting),e.unbind(this.onChangeNavMenuItemSetting),e.unbind(this.onChangeNavMenuLocationsSetting)},i.onChangeNavMenuSetting=function(){var n=this;i.handleUnplacedNavMenuInstances({menu:n._navMenuId}),v.each(function(e){e._navMenuThemeLocation&&n._navMenuId===e()&&i.handleUnplacedNavMenuInstances({theme_location:e._navMenuThemeLocation})})},i.onChangeNavMenuItemSetting=function(e,n){var t;(t=v("nav_menu["+String((e||n).nav_menu_term_id)+"]"))&&i.onChangeNavMenuSetting.call(t)},i.onChangeNavMenuLocationsSetting=function(){i.handleUnplacedNavMenuInstances({theme_location:this._navMenuThemeLocation}),!l.findWhere(l.values(i.data.navMenuInstanceArgs),{theme_location:this._navMenuThemeLocation})&&v.selectiveRefresh.requestFullRefresh()}),i.highlightControls=function(){v.settings.channel&&a(document).on("click",".menu-item",function(e){var n;e.shiftKey&&(n=a(this).attr("class").match(/(?:^|\s)menu-item-(-?\d+)(?:\s|$)/))&&(e.preventDefault(),e.stopPropagation(),v.preview.send("focus-nav-menu-item-control",parseInt(n[1],10)))})},v.bind("preview-ready",function(){i.init()}),i}(jQuery,_,wp,wp.customize);