(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["center"],{"19f8":function(e,t,n){},"73d2":function(e,t,n){"use strict";n.r(t);n("9911"),n("b0c0");var i=n("7a23"),a={class:"layui-container fly-marginTop fly-user-main"},c={class:"layui-nav layui-nav-tree","lay-filter":"test"};function o(e,t,n,o,l,r){var s=this,u=Object(i["resolveComponent"])("router-link"),f=Object(i["resolveComponent"])("router-view");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",a,[Object(i["createElementVNode"])("ul",c,[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(l.lists,(function(e,t){return Object(i["openBlock"])(),Object(i["createElementBlock"])("li",{class:"layui-nav-item",key:"center"+t},[Object(i["createVNode"])(u,{to:{name:e.link,params:"home"===e.link?{uid:s.uid}:""},"exact-active-class":e.activeClass},{default:Object(i["withCtx"])((function(){return[Object(i["createElementVNode"])("i",{class:Object(i["normalizeClass"])(["layui-icon",e.icon])},null,2),Object(i["createTextVNode"])(" "+Object(i["toDisplayString"])(e.name),1)]})),_:2},1032,["to","exact-active-class"])])})),128))]),Object(i["createVNode"])(f)])}var l=n("5530"),r=n("5502"),s={name:"center",data:function(){return{initialcenterClass:!1,lists:[{name:"我的主页",icon:"layui-icon-home",link:"home"},{name:"用户中心",icon:"layui-icon-friends",link:"center",activeClass:"layui-this"},{name:"基本设置",icon:"layui-icon-set",link:"info",activeClass:"layui-this"},{name:"我的帖子",icon:"layui-icon-form",link:"mypost",activeClass:"layui-this"},{name:"我的消息",icon:"layui-icon-reply-fill",link:"msg",activeClass:"layui-this"},{name:"其他设置",icon:"layui-icon-component",link:"others",activeClass:"layui-this"}]}},computed:Object(l["a"])({},Object(r["b"])(["uid"])),updated:function(){window.route=this.$route}},u=(n("ba15"),n("6b0d")),f=n.n(u);const m=f()(s,[["render",o],["__scopeId","data-v-089eb02e"]]);t["default"]=m},"857a":function(e,t,n){var i=n("e330"),a=n("1d80"),c=n("577e"),o=/"/g,l=i("".replace);e.exports=function(e,t,n,i){var r=c(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+l(c(i),o,"&quot;")+'"'),s+">"+r+"</"+t+">"}},9911:function(e,t,n){"use strict";var i=n("23e7"),a=n("857a"),c=n("af03");i({target:"String",proto:!0,forced:c("link")},{link:function(e){return a(this,"a","href",e)}})},af03:function(e,t,n){var i=n("d039");e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},ba15:function(e,t,n){"use strict";n("19f8")}}]);