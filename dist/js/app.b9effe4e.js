(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)i=l[d],n[i]&&p.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"17ed":function(t,e,r){"use strict";var a=r("9bbd"),n=r.n(a);n.a},"43c1":function(t,e,r){},"541e":function(t,e,r){"use strict";var a=r("d7a6"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=r("ce5b"),o=r.n(n);r("bf40");a["default"].use(o.a,{});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("my-name-is"),r("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.heading?r("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[r("v-flex",{attrs:{xs6:""}},[e.heading?r("v-subheader",[t._v("\n                            "+t._s(e.heading)+"\n                        ")]):t._e()],1),r("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[r("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?r("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(r){t.$set(e,"model",r)},expression:"item.model"}},[r("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                                "+t._s(e.text)+"\n                            ")])],1)],1),t._l(e.children,function(e,a){return r("v-list-tile",{key:a,attrs:{to:e.link}},[e.icon?r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1):t._e(),r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                                "+t._s(e.text)+"\n                            ")])],1)],1)})],2):r("v-list-tile",{key:e.text,attrs:{to:e.link}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                            "+t._s(e.text)+"\n                        ")])],1)],1)]})],2)],1),r("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),r("v-spacer")],1),r("v-content",[r("router-view")],1),r("v-footer",{attrs:{fixed:t.fixed,app:""}},[r("span",[t._v("© 2018 - ZfMetal")])])],1)},l=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"","align-center":""}},[r("v-flex",{attrs:{xs4:"",sm4:"",lg4:"","align-center":""}},[r("v-avatar",{attrs:{"align-center":"",tile:t.tile,size:t.avatarSize,color:"grey lighten-4"}},[r("img",{attrs:{src:"/img/avatars/pikachu.png",alt:"avatar"}})])],1),r("v-flex",{attrs:{xs8:"",sm8:"",lg8:""}},[r("div",{staticClass:"text-xs-center"},[r("span",[t._v("My name is ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"text-xs-center",class:t.getInputNameClass,attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])])],1)],1)],1)},c=[],u=(r("7f7f"),{name:"MyNameIs",props:{msg:String},computed:{getInputNameClass:function(){return this.name?"":"name parpadea"}},data:function(){return{name:"",tile:!1,avatarSize:50}}}),d=u,p=(r("7b1f"),r("2877")),v=Object(p["a"])(d,s,c,!1,null,"990945b6",null);v.options.__file="MyNameIs.vue";var h=v.exports,f={name:"App",components:{MyNameIs:h},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"home",text:"Home",link:{name:"home"}},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Alphabet / Abecedario",children:[{icon:"local_library",text:"Learn / Aprender",link:{name:"abc"}},{icon:"build",text:"Practice / Practicar",link:{name:"abc1"}}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Colors / Colores",link:{name:"colors"},children:[{icon:"local_library",text:"Learn / Aprender",link:{name:"colors"}},{icon:"build",text:"Practice / Practicar",link:{name:"colors1"}}]}],miniVariant:!1,right:!0,rightDrawer:!1,title:"EKIDS"}}},m=f,b=Object(p["a"])(m,i,l,!1,null,null,null);b.options.__file="App.vue";var _=b.exports,y=r("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[t._v("Learn: Alphabet")]),r("div",{staticClass:"pink--text"},[t._v("Aprender: Abecedario")]),r("p",[t._v("Oprime las letras para escuchar su pronunciación")])])]),r("v-card-text",[r("div",t._l(t.abc,function(e){return r("v-btn",{attrs:{small:"",fab:"",depressed:"",color:"primary"},on:{click:function(r){t.playSound(e)}}},[t._v(t._s(e)+"\n                            ")])}))])],1)],1),r("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[r("v-card",[r("v-card-text",[r("v-btn",{staticClass:"white--text",attrs:{color:"blue-grey",to:"/abc1"}},[r("v-icon",{attrs:{right:"",round:"",left:""}},[t._v("explore")]),t._v(" Practice  1\n                        ")],1)],1)],1)],1)],1)],1)],1)},w=[],x="/sounds/abc/",C="/sounds/colors/",S="/sounds/helpers/",k={name:"Abc",props:{msg:String},methods:{playSound:function(t){var e=new Audio(x+t+".mp3");e.play()}},data:function(){return{abc:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}}},A=k,P=(r("781b"),Object(p["a"])(A,g,w,!1,null,"892380ea",null));P.options.__file="Abc.vue";var j=P.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[t._v("Practice: Alphabet")]),r("div",{staticClass:"pink--text"},[t._v("Practicar: Abecedario")]),r("p",[t._v("Para comenzar, oprime el  boton verde y luego has click en la letra que escuchaste.\n                                Suma 3 puntos si la respuesta es correcta, resta 1 punto si es incorrecta. ")])])])],1),r("v-card",[r("v-toolbar",{attrs:{card:""}},[r("v-toolbar-title",[r("v-btn",{attrs:{fab:"",small:"",color:t.getPlayColor},on:{click:function(e){t.randomLetter()}}},[r("v-icon",[t._v(t._s(t.getIcon))])],1)],1),r("v-divider",{attrs:{vertical:""}}),r("v-toolbar-title",{staticClass:"pr-3"},[r("span",{staticClass:"blue--text"},[t._v(t._s(t.points))])]),r("v-spacer"),r("v-toolbar-title",[t.helpShow?r("div",[t.letterShow?r("v-icon",{staticClass:"green--text"},[t._v("thumb_up")]):t._e(),t.letterShow?t._e():r("v-icon",{staticClass:"red--text"},[t._v("thumb_down")])],1):t._e()]),r("v-toolbar-title",{staticClass:"pr-3"},[r("span",{staticClass:"green--text"},[t._v(t._s(t.getLetter))])])],1),r("div",{staticClass:"pa-1"},t._l(t.abc,function(e){return r("v-btn",{attrs:{depressed:"",small:"",fab:"",color:t.letterBtnColor(e)},on:{click:function(r){t.checkLetter(e)}}},[t._v(t._s(e)+"\n                            ")])}))],1)],1)],1)],1)},I=[],M=(r("20d6"),r("7514"),{name:"Abc1",props:{msg:String},computed:{getIcon:function(){return 1==this.ready?"play_arrow":"refresh"},getPlayColor:function(){return 1==this.ready?"green":"yellow"},getLetter:function(){return this.letterShow?this.letterShow.toUpperCase():""}},methods:{letterBtnColor:function(t){return this.abcGame.find(function(e){return e===t})?"blue":"red"},removeLetter:function(t){this.abcGame.splice(this.abcGame.findIndex(function(e){return e===t}),1)},checkLetter:function(t){if(1!=this.ready)if(t==this.letterSelected){var e=new Audio(S+"yes.mp3");e.play(),this.ready=!0,this.letterShow=t,this.helpShow=!0,this.points=this.points+3,this.removeLetter(t)}else{this.points--,this.helpShow=!0;e=new Audio(S+"nonono.mp3");e.play()}},randomLetter:function(){if(console.log(this.ready),1==this.ready){this.helpShow=null,this.letterShow=null,this.ready=!1;var t=this.abcGame[Math.floor(Math.random()*this.abcGame.length)];this.letterSelected=t;var e=new Audio(x+t+".mp3");e.play()}else{e=new Audio(x+this.letterSelected+".mp3");e.play()}}},data:function(){return{abc:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],abcGame:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],letterSelected:null,letterShow:"",ready:!0,points:10,helpShow:null}}}),G=M,L=(r("9c10"),Object(p["a"])(G,O,I,!1,null,"f15748aa",null));L.options.__file="Abc1.vue";var z=L.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"","align-center":"","fill-height":""}},[r("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v("Ingles  para chicos")]),r("div",[t._v("Proyecto iniciado...")])])])],1)],1)],1)],1)],1)},$=[],N={name:"Home",props:{msg:String}},q=N,B=(r("9120"),Object(p["a"])(q,E,$,!1,null,"4010cbaf",null));B.options.__file="Home.vue";var T=B.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[t._v("Colors")]),r("div",{staticClass:"pink--text"},[t._v("Colores")]),r("p",[t._v("Oprime las colores para escuchar su pronunciación")])])]),r("v-card-text",[r("div",t._l(t.colors,function(e){return r("v-btn",{staticClass:"background:color",attrs:{small:"",color:e},on:{click:function(r){t.playSound(e)}}})}))])],1)],1),r("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[r("v-card",[r("v-card-text",[r("h3",{staticClass:"diplay-3 text-xs-center",attrs:{"align-center":""}},[t._v(t._s(t.getSelectedColor))])])],1)],1)],1)],1)],1)},H=[],U={name:"Colors",props:{msg:String},computed:{getSelectedColor:function(){return this.selectedColor?this.selectedColor.toUpperCase():""}},methods:{playSound:function(t){this.selectedColor=t;var e=new Audio(C+t+".mp3");e.play()}},data:function(){return{colors:["red","blue","green","yellow","black","white","pink","grey"],selectedColor:null}}},J=U,V=(r("17ed"),Object(p["a"])(J,D,H,!1,null,"0ef64eaf",null));V.options.__file="Colors.vue";var K=V.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[r("v-card",{staticClass:"ma-2"},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[t._v("Practice: Colors")]),r("div",{staticClass:"pink--text"},[t._v("Practicar: Colores")]),r("p",[t._v("Para comenzar, oprime el  boton verde y luego has click en el color que escuchaste.\n                                Suma 3 puntos si la respuesta es correcta, resta 1 punto si es incorrecta. ")])])])],1),r("v-card",{staticClass:"ma-2"},[r("v-toolbar",{attrs:{card:""}},[r("v-toolbar-title",[r("v-btn",{attrs:{fab:"",small:"",color:t.getPlayColor},on:{click:function(e){t.randomcolor()}}},[r("v-icon",[t._v(t._s(t.getIcon))])],1)],1),r("v-divider",{attrs:{vertical:""}}),r("v-toolbar-title",{staticClass:"pr-3"},[r("span",{staticClass:"blue--text"},[t._v(t._s(t.points))])]),r("v-spacer"),r("v-toolbar-title",[t.helpShow?r("div",[t.colorShow?r("v-icon",{staticClass:"green--text"},[t._v("thumb_up")]):t._e(),t.colorShow?t._e():r("v-icon",{staticClass:"red--text"},[t._v("thumb_down")])],1):t._e()]),r("v-toolbar-title",{staticClass:"pr-3"},[r("span",{staticClass:"green--text"},[t._v(t._s(t.getcolor))])])],1),r("div",{staticClass:"pa-3"},t._l(t.colors,function(e){return r("v-btn",{attrs:{depressed:"",small:"",color:t.colorBtnColor(e)},on:{click:function(r){t.checkcolor(e)}}},[t._v(t._s(e)+"\n                            ")])}))],1)],1)],1)],1)],1)},F=[],Q={name:"Colors1",props:{msg:String},computed:{getIcon:function(){return 1==this.ready?"play_arrow":"refresh"},getPlayColor:function(){return 1==this.ready?"green":"yellow"},getcolor:function(){return this.colorShow?this.colorShow.toUpperCase():""}},methods:{colorBtnColor:function(t){return this.colorsGame.find(function(e){return e===t})?"blue":"red"},removecolor:function(t){this.colorsGame.splice(this.colorsGame.findIndex(function(e){return e===t}),1)},checkcolor:function(t){if(1!=this.ready)if(t==this.colorSelected){var e=new Audio(S+"yes.mp3");e.play(),this.ready=!0,this.colorShow=t,this.helpShow=!0,this.points=this.points+3,this.removecolor(t)}else{this.points--,this.helpShow=!0;e=new Audio(S+"nonono.mp3");e.play()}},randomcolor:function(){if(console.log(this.ready),1==this.ready){this.helpShow=null,this.colorShow=null,this.ready=!1;var t=this.colorsGame[Math.floor(Math.random()*this.colorsGame.length)];this.colorSelected=t;var e=new Audio(C+t+".mp3");e.play()}else{e=new Audio(C+this.colorSelected+".mp3");e.play()}}},data:function(){return{colors:["red","blue","green","yellow","black","white","pink","grey"],colorsGame:["red","blue","green","yellow","black","white","pink","grey"],colorSelected:null,colorShow:"",ready:!0,points:10,helpShow:null}}},R=Q,W=(r("541e"),Object(p["a"])(R,Z,F,!1,null,"2f8277d2",null));W.options.__file="Colors1.vue";var X=W.exports;a["default"].use(y["a"]);var Y=[{name:"home",path:"/",component:T},{name:"abc",path:"/abc",component:j},{name:"abc1",path:"/abc1",component:z},{name:"colors",path:"/colors",component:K},{name:"colors1",path:"/colors1",component:X}],tt=new y["a"]({routes:Y}),et=r("2f62");a["default"].use(et["a"]);var rt=new et["a"].Store({state:{count:0},getters:{},actions:{},mutations:{increment:function(t){t.count++}}});a["default"].config.productionTip=!1,new a["default"]({router:tt,store:rt,render:function(t){return t(_)}}).$mount("#app")},"66e9":function(t,e,r){},"6e3e":function(t,e,r){},"781b":function(t,e,r){"use strict";var a=r("43c1"),n=r.n(a);n.a},"7b1f":function(t,e,r){"use strict";var a=r("bab7"),n=r.n(a);n.a},9120:function(t,e,r){"use strict";var a=r("6e3e"),n=r.n(a);n.a},"9bbd":function(t,e,r){},"9c10":function(t,e,r){"use strict";var a=r("66e9"),n=r.n(a);n.a},bab7:function(t,e,r){},d7a6:function(t,e,r){}});
//# sourceMappingURL=app.b9effe4e.js.map