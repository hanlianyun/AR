webpackJsonp([0],{"2NV8":function(e,t){},"G/DW":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(e){i("hJTF")},null,null).exports,o=i("/ocq"),c={name:"home",data:function(){return console.log(this),{msg:"Welcome to Your Vue.js App"}},methods:{jump:function(e){this.$router.push({path:"/"+e})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shareDiv"},[i("div",{staticClass:"start"},[i("div",{staticClass:"startP",on:{click:function(t){e.jump("Picture")}}},[e._v("拍照")]),e._v(" "),i("div",{staticClass:"startV",on:{click:function(t){e.jump("Video")}}},[e._v("录像")])])])},staticRenderFns:[]};var l=i("VU/8")(c,r,!1,function(e){i("jp2P")},null,null).exports,u={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",picture:{done:!1},direction:0,exArray:[],final:!1}},mounted:function(){this.openCamera()},methods:{openCamera:function(){navigator.mediaDevices.enumerateDevices().then(function(e){for(var t=0,i=e.length;t<i;t++)"videoinput"!==e[t].kind&&"video"!==e[t].kind||this.exArray.push(e[t].deviceId)}.bind(this));var e=this.$refs.video,t={audio:!1,video:{optional:[{sourceId:this.exArray[this.direction]}]}};navigator.mediaDevices.getUserMedia(t).then(function(t){e.srcObject=t,e.play()}).catch(function(e){console.log(e)})},change:function(){0===this.direction?this.direction=1:this.direction=0,this.openCamera()},take:function(){this.final=!0;var e=this.$refs.video,t=this.$refs.canvas,i=t.getContext("2d");t.width=375,t.height=812,i.drawImage(e,0,0,375,812)},again:function(){this.final=!1},jump:function(e){this.$router.push({path:"/"+e})}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pictureDiv"},[i("div",{staticClass:"top"},[i("video",{directives:[{name:"show",rawName:"v-show",value:!e.final,expression:"!final"}],ref:"video",attrs:{autoplay:""}}),e._v(" "),i("canvas",{directives:[{name:"show",rawName:"v-show",value:e.final,expression:"final"}],ref:"canvas"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.final,expression:"!final"}],staticClass:"bottom"},[i("div",{staticClass:"photo"},[e.picture.done?i("img",{attrs:{src:"static/img/btn.png",width:"100%"}}):e._e()]),e._v(" "),i("div",{staticClass:"btn",on:{click:e.take}},[i("span",[e._v("点击拍照")]),i("div")]),e._v(" "),i("div",{staticClass:"metathesis",on:{click:e.change}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.final,expression:"final"}],staticClass:"after"},[i("div",{staticClass:"again",on:{click:e.again}}),e._v(" "),i("div",{staticClass:"ok",on:{click:function(t){e.jump("Release")}}})])])},staticRenderFns:[]};var d=i("VU/8")(u,v,!1,function(e){i("2NV8")},null,null).exports,p={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",picture:{done:!1},final:!1}},mounted:function(){this.openCamera()},methods:{openCamera:function(){var e=this.$refs.video;navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){e.srcObject=t,e.play()}).catch(function(e){console.log(e)})},take:function(){this.final=!0},again:function(){this.final=!1},jump:function(e){this.$router.push({path:"/"+e})}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pictureDiv"},[i("div",{staticClass:"top"},[i("video",{directives:[{name:"show",rawName:"v-show",value:!e.final,expression:"!final"}],ref:"video",attrs:{autoplay:""}}),e._v(" "),i("canvas",{directives:[{name:"show",rawName:"v-show",value:e.final,expression:"final"}],ref:"canvas"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.final,expression:"!final"}],staticClass:"bottom"},[i("div",{staticClass:"btn"},[i("span",[e._v("点击录像[最长10秒]")]),i("div",{on:{click:e.take}})])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.final,expression:"final"}],staticClass:"after"},[i("div",{staticClass:"again",on:{click:e.again}}),e._v(" "),i("div",{staticClass:"ok",on:{click:function(t){e.jump("Release")}}})])])},staticRenderFns:[]};var f=i("VU/8")(p,h,!1,function(e){i("G/DW")},null,null).exports,m={name:"home",data:function(){return console.log(this),{msg:"Welcome to Your Vue.js App",tip:!1}},methods:{back:function(){this.$router.go(-1)},upLoad:function(){this.tip=!0},jump:function(e){this.$router.push({path:"/"+e})}}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ReleaseDiv"},[e._m(0),e._v(" "),i("div",{staticClass:"start"},[i("div",{staticClass:"back",on:{click:e.back}},[e._v("返回")]),e._v(" "),i("div",{staticClass:"startV",on:{click:e.upLoad}},[e._v("发布")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tip,expression:"tip"}],staticClass:"model"},[i("div",{staticClass:"success",on:{click:function(t){e.jump("Share")}}},[e._v("发布成功")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"source"},[t("img",{attrs:{src:""}})])}]};var w=i("VU/8")(m,_,!1,function(e){i("dgxM")},null,null).exports;a.a.use(o.a);var g=new o.a({routes:[{path:"/",redirect:{name:"Share"}},{path:"/Share",name:"Share",component:l},{path:"/Picture",name:"Picture",component:d},{path:"/Video",name:"Video",component:f},{path:"/Release",name:"Release",component:w}]}),C=i("NYxO");a.a.use(C.a);var k=new C.a.Store({state:{show:!1}});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,store:k,template:"<App/>",components:{App:s}})},dgxM:function(e,t){},hJTF:function(e,t){},jp2P:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c91134b49a74b11e6157.js.map