(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{1511:function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),i=function(t){return Object(r["y"])("data-v-60c0e3ca"),t=t(),Object(r["w"])(),t},o={class:"fly-home fly-panel"},c=["src"],a=i((function(){return Object(r["h"])("i",{class:"iconfont icon-nan"},null,-1)})),l={class:"layui-badge fly-badge-vip"},s={class:"fly-home-info"},u=i((function(){return Object(r["h"])("i",{class:"iconfont icon-kiss",title:"飞吻"},null,-1)})),f={style:{color:"#FF7200"}},d=i((function(){return Object(r["h"])("i",{class:"iconfont icon-shijian"},null,-1)})),p=i((function(){return Object(r["h"])("i",{class:"iconfont icon-chengshi"},null,-1)})),y={class:"fly-home-sign"},b=i((function(){return Object(r["h"])("div",{class:"fly-sns","data-user":""},[Object(r["h"])("a",{href:"javascript:;",class:"layui-btn layui-btn-primary fly-imActive","data-type":"addFriend"},"加为好友"),Object(r["h"])("a",{href:"javascript:;",class:"layui-btn layui-btn-normal fly-imActive","data-type":"chat"},"发起会话")],-1)})),h={class:"layui-container"},m={class:"layui-row layui-col-space15"},j={class:"layui-col-md6 fly-home-jie"},O={class:"fly-panel"},g={class:"fly-panel-title"},v={class:"jie-row"},_={class:"layui-hide-xs"},w={class:"fly-none",style:{"min-height":"50px",padding:"30px 0",height:"auto"}},Y=i((function(){return Object(r["h"])("i",{style:{"font-size":"14px"}},"没有发表任何求解",-1)})),L=[Y],D={class:"layui-col-md6 fly-home-da"},M={class:"fly-panel"},x={class:"fly-panel-title"},A={class:"home-jieda"},k=Object(r["j"])(" 在 "),F=Object(r["j"])("中回答： "),I=["textContent"],P={class:"fly-none",style:{"min-height":"50px",padding:"30px 0",height:"auto"}},H=i((function(){return Object(r["h"])("span",null,"没有回答任何问题",-1)})),C=[H];function N(t,e,n,i,Y,H){var N=Object(r["C"])("router-link");return Object(r["v"])(),Object(r["g"])("div",null,[Object(r["h"])("div",o,[Object(r["h"])("img",{src:Y.userInfo.pic?Y.userInfo.pic:"/img/bear-200-200.jpg"},null,8,c),Object(r["h"])("h1",null,[Object(r["j"])(Object(r["F"])(Y.userInfo.name)+" ",1),a,Object(r["h"])("i",l,Object(r["F"])("0"===Y.userInfo.isVip?"非VIP":"VIP"+Y.userInfo.isVip),1)]),Object(r["h"])("p",s,[u,Object(r["h"])("span",f,Object(r["F"])(Y.userInfo.favs)+" 积分",1),d,Object(r["h"])("span",null,Object(r["F"])(H.momentfilter(Y.userInfo.created))+" 加入",1),p,Object(r["h"])("span",null,Object(r["F"])(Y.userInfo.location),1)]),Object(r["h"])("p",y,Object(r["F"])(Y.userInfo.regmark),1),b]),Object(r["h"])("div",h,[Object(r["h"])("div",m,[Object(r["h"])("div",j,[Object(r["h"])("div",O,[Object(r["h"])("h3",g,Object(r["F"])(Y.userInfo.name)+" 最近的提问",1),Object(r["h"])("ul",v,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(Y.postList,(function(t,e){return Object(r["v"])(),Object(r["g"])("li",{key:"postlist"+e},[Object(r["M"])(Object(r["h"])("div",null,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(t.tags,(function(t,e){return Object(r["v"])(),Object(r["g"])("span",{class:Object(r["q"])(["layui-badge",t.class]),key:"tag"+e},Object(r["F"])(t.name),3)})),128))],512),[[r["J"],t.tags.length>0&&""!==t.tags[0].name]]),Object(r["k"])(N,{class:"jie-title link",to:{name:"detail",params:{tid:t._id}}},{default:Object(r["L"])((function(){return[Object(r["j"])(Object(r["F"])(t.title),1)]})),_:2},1032,["to"]),Object(r["h"])("i",null,Object(r["F"])(H.momentfilter(t.created)),1),Object(r["h"])("em",_,Object(r["F"])(t.reads)+"阅/"+Object(r["F"])(t.answer)+"答",1)])})),128)),Object(r["M"])(Object(r["h"])("div",w,L,512),[[r["J"],0===Y.postList.length]])])])]),Object(r["h"])("div",D,[Object(r["h"])("div",M,[Object(r["h"])("h3",x,Object(r["F"])(Y.userInfo.name)+" 最近的回答",1),Object(r["h"])("ul",A,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(Y.commentList,(function(t,e){return Object(r["v"])(),Object(r["g"])("li",{key:"comments"+e},[Object(r["h"])("p",null,[Object(r["h"])("span",null,Object(r["F"])(H.momentfilter(t.created)),1),k,Object(r["k"])(N,{to:t.tid?{name:"detail",params:{tid:t.tid?t.tid._id:""}}:{name:"404"}},{default:Object(r["L"])((function(){return[Object(r["j"])(Object(r["F"])(t.tid?t.tid.title:"(用户已经删除该贴)"),1)]})),_:2},1032,["to"]),F]),Object(r["h"])("div",{class:"home-dacontent",textContent:Object(r["F"])(t.content)},null,8,I)])})),128)),Object(r["M"])(Object(r["h"])("div",P,C,512),[[r["J"],0===Y.commentList.length]])])])])])])])}var S=n("c24f"),B=n("7f08"),R={name:"home",props:["uid"],data:function(){return{postList:[],commentList:[],userInfo:{}}},mounted:function(){window.vue=this,this.getUserInfo(),this.getPostList(),this.getCommentList()},computed:{momentfilter:function(){return B["b"]},getDate:function(){var t=new Date(this.userInfo.created);return t.getFullYear()+"年"+(parseInt(t.getMonth())+1)+"月"+t.getDate()+"日"}},methods:{getUserInfo:function(){var t=this;Object(S["f"])({uid:this.uid||123}).then((function(e){200===e.code&&(t.userInfo=e.data)}))},getPostList:function(){var t=this;Object(S["i"])({uid:this.uid,page:0,limit:20}).then((function(e){200===e.code&&(t.postList=e.data)}))},getCommentList:function(){var t=this;Object(S["e"])({uid:this.uid,page:0,limit:20}).then((function(e){200===e.code&&(t.commentList=e.data)}))}}},T=(n("9041"),n("6b0d")),E=n.n(T);const V=E()(R,[["render",N],["__scopeId","data-v-60c0e3ca"]]);e["default"]=V},4127:function(t,e,n){"use strict";var r=n("d233"),i=n("b313"),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},c=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return c.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,n,i,o,c,l,s,u,f,d,p,y){var b=e;if("function"===typeof s)b=s(n,b);else if(b instanceof Date)b=d(b);else if(null===b){if(o)return l&&!y?l(n,a.encoder):n;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||r.isBuffer(b)){if(l){var h=y?n:l(n,a.encoder);return[p(h)+"="+p(l(b,a.encoder))]}return[p(n)+"="+p(String(b))]}var m,j=[];if("undefined"===typeof b)return j;if(Array.isArray(s))m=s;else{var O=Object.keys(b);m=u?O.sort(u):O}for(var g=0;g<m.length;++g){var v=m[g];c&&null===b[v]||(j=Array.isArray(b)?j.concat(t(b[v],i(n,v),i,o,c,l,s,u,f,d,p,y)):j.concat(t(b[v],n+(f?"."+v:"["+v+"]"),i,o,c,l,s,u,f,d,p,y)))}return j};t.exports=function(t,e){var n=t,c=e?r.assign({},e):{};if(null!==c.encoder&&void 0!==c.encoder&&"function"!==typeof c.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof c.delimiter?a.delimiter:c.delimiter,u="boolean"===typeof c.strictNullHandling?c.strictNullHandling:a.strictNullHandling,f="boolean"===typeof c.skipNulls?c.skipNulls:a.skipNulls,d="boolean"===typeof c.encode?c.encode:a.encode,p="function"===typeof c.encoder?c.encoder:a.encoder,y="function"===typeof c.sort?c.sort:null,b="undefined"!==typeof c.allowDots&&c.allowDots,h="function"===typeof c.serializeDate?c.serializeDate:a.serializeDate,m="boolean"===typeof c.encodeValuesOnly?c.encodeValuesOnly:a.encodeValuesOnly;if("undefined"===typeof c.format)c.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,c.format))throw new TypeError("Unknown format option provided.");var j,O,g=i.formatters[c.format];"function"===typeof c.filter?(O=c.filter,n=O("",n)):Array.isArray(c.filter)&&(O=c.filter,j=O);var v,_=[];if("object"!==typeof n||null===n)return"";v=c.arrayFormat in o?c.arrayFormat:"indices"in c?c.indices?"indices":"repeat":"indices";var w=o[v];j||(j=Object.keys(n)),y&&j.sort(y);for(var Y=0;Y<j.length;++Y){var L=j[Y];f&&null===n[L]||(_=_.concat(l(n[L],L,w,u,f,d?p:null,O,y,b,h,g,m)))}var D=_.join(s),M=!0===c.addQueryPrefix?"?":"";return D.length>0?M+D:""}},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,o,c,a){for(var l,s,u,f=o.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=d.length,y=0;y<p;y+=1){var b=d[y];b.d&&(l=c?n(e).diff(o,b.d,!0):o.diff(e,b.d,!0));var h=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,h<=b.r||!b.r){h<=1&&y>0&&(b=d[y-1]);var m=f[b.l];a&&(h=a(""+h)),s="string"==typeof m?m.replace("%d",h):m(h,r,b.l,u);break}}if(r)return s;var j=u?f.future:f.past;return"function"==typeof j?j(s):j.replace("%s",s)},r.to=function(t,e){return o(t,e,this,!0)},r.from=function(t,e){return o(t,e,this)};var c=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(c(this),t)},r.fromNow=function(t){return this.from(c(this),t)}}}))},4328:function(t,e,n){"use strict";var r=n("4127"),i=n("9e6a"),o=n("b313");t.exports={formats:o,parse:i,stringify:r}},"7f08":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return l}));var r=n("5a0c"),i=n.n(r),o=n("4208"),c=n.n(o);n("a471");i.a.extend(c.a);var a=function(t){return i()(t).isBefore(i()().subtract(7,"days"))?i()(t).format("YYYY-MM-DD"):i()(t).locale("zh-cn").from(i()())},l=function(t){return i()(t).isBefore(i()(i()().format("YYYY-MM-DD 00:00:00")))?i()(t).format("YYYY-MM-DD"):i()(t).format("HH:mm:ss")}},9041:function(t,e,n){"use strict";n("cf58")},"9e6a":function(t,e,n){"use strict";var r=n("d233"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},c=function(t,e){for(var n={},r=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,c=e.parameterLimit===1/0?void 0:e.parameterLimit,a=r.split(e.delimiter,c),l=0;l<a.length;++l){var s,u,f=a[l],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(s=e.decoder(f,o.decoder),u=e.strictNullHandling?null:""):(s=e.decoder(f.slice(0,p),o.decoder),u=e.decoder(f.slice(p+1),o.decoder)),i.call(n,s)?n[s]=[].concat(n[s]).concat(u):n[s]=u}return n},a=function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var o,c=t[i];if("[]"===c)o=[],o=o.concat(r);else{o=n.plainObjects?Object.create(null):{};var a="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,l=parseInt(a,10);!isNaN(l)&&c!==a&&String(l)===a&&l>=0&&n.parseArrays&&l<=n.arrayLimit?(o=[],o[l]=r):o[a]=r}r=o}return r},l=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,c=/(\[[^[\]]*])/g,l=o.exec(r),s=l?r.slice(0,l.index):r,u=[];if(s){if(!n.plainObjects&&i.call(Object.prototype,s)&&!n.allowPrototypes)return;u.push(s)}var f=0;while(null!==(l=c.exec(r))&&f<n.depth){if(f+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),a(u,e,n)}};t.exports=function(t,e){var n=e?r.assign({},e):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!==typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=!0===n.ignoreQueryPrefix,n.delimiter="string"===typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"===typeof n.depth?n.depth:o.depth,n.arrayLimit="number"===typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"===typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"===typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"===typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"===typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"===typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"===typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===t||null===t||"undefined"===typeof t)return n.plainObjects?Object.create(null):{};for(var i="string"===typeof t?c(t,n):t,a=n.plainObjects?Object.create(null):{},s=Object.keys(i),u=0;u<s.length;++u){var f=s[u],d=l(f,i[f],n);a=r.merge(a,d,n)}return r.compact(a)}},a471:function(t,e,n){!function(e,r){t.exports=r(n("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(r,null,!0),r}))},b313:function(t,e,n){"use strict";var r=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c24f:function(t,e,n){"use strict";n.d(e,"m",(function(){return a})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"c",(function(){return b})),n.d(e,"f",(function(){return h})),n.d(e,"e",(function(){return m})),n.d(e,"i",(function(){return y})),n.d(e,"g",(function(){return j})),n.d(e,"j",(function(){return O}));var r=n("5530"),i=n("b775"),o=n("4328"),c=n.n(o),a=function(){return i["a"].get("/user/fav")},l=function(t){return i["a"].post("/user/basic",t)},s=function(t){return i["a"].get("/public/resetEmail?"+c.a.stringify(t))},u=function(t){return i["a"].post("/user/changePassword",Object(r["a"])({},t))},f=function(t){return i["a"].get("/user/setCollect?"+c.a.stringify(t))},d=function(t){return i["a"].get("/user/collect?"+c.a.stringify(t))},p=function(t){return i["a"].get("/user/post?"+c.a.stringify(t))},y=function(t){return i["a"].get("/public/latestPost?"+c.a.stringify(t))},b=function(t){return i["a"].get("/user/deletePost?"+c.a.stringify(t))},h=function(t){return i["a"].get("/public/info?"+c.a.stringify(t))},m=function(t){return i["a"].get("/public/latestComment?"+c.a.stringify(t))},j=function(t){return i["a"].get("/user/getmsg?"+c.a.stringify(t))},O=function(t){return i["a"].get("/user/setmsg?"+c.a.stringify(t))}},cf58:function(t,e,n){},d233:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),o=function(t){var e;while(t.length){var n=t.pop();if(e=n.obj[n.prop],Array.isArray(e)){for(var r=[],i=0;i<e.length;++i)"undefined"!==typeof e[i]&&r.push(e[i]);n.obj[n.prop]=r}}return e},c=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)"undefined"!==typeof t[r]&&(n[r]=t[r]);return n},a=function t(e,n,i){if(!n)return e;if("object"!==typeof n){if(Array.isArray(e))e.push(n);else{if("object"!==typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!==typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=c(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach((function(n,o){r.call(e,o)?e[o]&&"object"===typeof e[o]?e[o]=t(e[o],n,i):e.push(n):e[o]=n})),e):Object.keys(n).reduce((function(e,o){var c=n[o];return r.call(e,o)?e[o]=t(e[o],c,i):e[o]=c,e}),o)},l=function(t,e){return Object.keys(e).reduce((function(t,n){return t[n]=e[n],t}),t)},s=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),n="",r=0;r<e.length;++r){var o=e.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=e.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},f=function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],r=0;r<e.length;++r)for(var i=e[r],c=i.obj[i.prop],a=Object.keys(c),l=0;l<a.length;++l){var s=a[l],u=c[s];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(e.push({obj:c,prop:s}),n.push(u))}return o(e)},d=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:c,assign:l,compact:f,decode:s,encode:u,isBuffer:p,isRegExp:d,merge:a}}}]);