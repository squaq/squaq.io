(function(){"use strict";var t={5989:function(t,e,n){var s=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.loaded?e("div",[e("HeaderClaudia",{attrs:{opened:t.opened},on:{toggleMenu:t.toggleMenu,gotoPlace:t.gotoPlace}}),e("MobileMenu",{attrs:{show:t.opened},on:{toggleMenu:t.toggleMenu,gotoPlace:t.gotoPlace}}),e("router-view"),e("UpBtn")],1):e("div",[e("PreloaderClaudia")],1)])},o=[],i=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"header"},[e("img",{staticClass:"header--img",attrs:{src:n(9955),alt:""}}),"blog"===this.$route.name?e("ul",{staticClass:"header--menus"},[e("li",{staticClass:"header--menus-item",on:{click:function(e){return t.gohome()}}},[t._v("Home")]),e("li",{staticClass:"header--menus-item header--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("instagram")}}},[e("img",{attrs:{src:n(1847),alt:""}})]),e("li",{staticClass:"header--menus-item header--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("whatsapp")}}},[e("img",{attrs:{src:n(120),alt:""}})])]):e("ul",{staticClass:"header--menus"},[e("li",{staticClass:"header--menus-item",on:{click:function(e){return t.clickOps("home")}}},[t._v("Home")]),e("li",{staticClass:"header--menus-item",on:{click:function(e){return t.clickOps("claudia")}}},[t._v("Claúdia Rissato")]),e("li",{staticClass:"header--menus-item",on:{click:function(e){return t.clickOps("consultas")}}},[t._v("Consultas")]),e("li",{staticClass:"header--menus-item",on:{click:function(e){return t.clickOps("blog")}}},[t._v("Blog")]),e("li",{staticClass:"header--menus-item",on:{click:function(e){return t.clickOps("contato")}}},[t._v("Contato")]),e("li",{staticClass:"header--menus-item header--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("instagram")}}},[e("img",{attrs:{src:n(1847),alt:""}})]),e("li",{staticClass:"header--menus-item header--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("whatsapp")}}},[e("img",{attrs:{src:n(120),alt:""}})])]),e("div",{staticClass:"header--openclose",class:{"header--openclose-opened":t.opened},on:{click:t.openCloseClick}},[e("span",{staticClass:"header--openclose-line header--openclose-line-one"}),e("span",{staticClass:"header--openclose-line header--openclose-line-two"}),e("span",{staticClass:"header--openclose-line header--openclose-line-three"})])])},c=[];const l={methods:{externalLinksCalls(t){let e=null;"whatsapp"===t?e="https://api.WhatsApp.com/send?phone=558196172091":"instagram"===t?e="https://www.instagram.com/claudia_rissato/":"map"===t?e="https://www.google.com/maps/place/R.+Padre+Carapuceiro,+858+-+sala+1702+-+Boa+Viagem,+Recife+-+PE,+51020-280,+Brasil/@-8.1171985,-34.9045599,17z/data=!4m13!1m7!3m6!1s0x7ab1fadcab00001:0x2b2d0c86b6207338!2sR.+Padre+Carapuceiro,+858+-+sala+1702+-+Boa+Viagem,+Recife+-+PE,+51020-280,+Brasil!3b1!8m2!3d-8.1171985!4d-34.9023712!3m4!1s0x7ab1fadcab00001:0x2b2d0c86b6207338!8m2!3d-8.1171985!4d-34.9023712":"email"===t&&(e="mailto:claudia_rissato@hotmail.com"),e&&window.open(e,"_blank")}}};var r=l,u={mixins:[r],props:{opened:Boolean},methods:{gohome(){this.$router.push("/")},clickOps(t){this.$emit("gotoPlace",t)},openCloseClick(){this.$emit("toggleMenu",!this.opened)}}},d=u,m=n(1001),f=(0,m.Z)(d,i,c,!1,null,"38251872",null),p=f.exports,h=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"menu",class:{"menu--opened":t.show}},["blog"===this.$route.name?e("ul",{staticClass:"menu--menus"},[e("li",{staticClass:"menu--menus-item",on:{click:function(e){return t.gohome()}}},[t._v("Home")]),e("li",{staticClass:"menu--menus-networks"},[e("div",{staticClass:"menu--menus-item menu--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("instagram")}}},[e("img",{attrs:{src:n(1847),alt:""}})]),e("div",{staticClass:"menu--menus-item menu--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("whatsapp")}}},[e("img",{attrs:{src:n(120),alt:""}})])])]):e("ul",{staticClass:"menu--menus"},[e("li",{staticClass:"menu--menus-item",on:{click:function(e){return t.clickOps("home")}}},[t._v("Home")]),e("li",{staticClass:"menu--menus-item",on:{click:function(e){return t.clickOps("claudia")}}},[t._v("Claúdia Rissato")]),e("li",{staticClass:"menu--menus-item",on:{click:function(e){return t.clickOps("consultas")}}},[t._v("Consultas")]),e("li",{staticClass:"menu--menus-item",on:{click:function(e){return t.clickOps("blog")}}},[t._v("Blog")]),e("li",{staticClass:"menu--menus-item",on:{click:function(e){return t.clickOps("contato")}}},[t._v("Contato")]),e("li",{staticClass:"menu--menus-networks"},[e("div",{staticClass:"menu--menus-item menu--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("instagram")}}},[e("img",{attrs:{src:n(1847),alt:""}})]),e("div",{staticClass:"menu--menus-item menu--menus-item-icon",on:{click:function(e){return t.externalLinksCalls("whatsapp")}}},[e("img",{attrs:{src:n(120),alt:""}})])])])])},_=[],g={mixins:[r],name:"MobileMenu",props:{show:Boolean},methods:{clickOps(t){this.$emit("toggleMenu",!this.show),setTimeout((()=>{this.$emit("gotoPlace",t)}),600)},gohome(){this.$emit("toggleMenu",!this.show),this.$router.push("/")}}},v=g,C=(0,m.Z)(v,h,_,!1,null,"71b6a520",null),b=C.exports,k=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"preloader"},[e("div",{staticClass:"preloader__img"}),e("div",{staticClass:"preloader__dots"})])}],y={},w=(0,m.Z)(y,k,x,!1,null,"97e914cc",null),j=w.exports,O=function(){var t=this,e=t._self._c;return t.showBtnUp?e("div",{staticClass:"btn",on:{click:function(e){return t.goUp()}}}):t._e()},P=[],L={data(){return{showBtnUp:!1}},mounted(){this.onScroll()},methods:{onScroll(){window.onscroll=()=>{window.pageYOffset>100?this.showBtnUp=!0:window.pageYOffset<100&&(this.showBtnUp=!1)}},goUp(){window.scrollTo({top:0,behavior:"smooth"})}}},$=L,S=(0,m.Z)($,O,P,!1,null,"70d8a580",null),M=S.exports,B={components:{HeaderClaudia:p,MobileMenu:b,PreloaderClaudia:j,UpBtn:M},data(){return{opened:!1,loaded:!1}},beforeMount(){this.$http.get("https://api.npoint.io/fe3ac7facbab4a8418d4").then((t=>{setTimeout((()=>{this.loaded=!0,this.$store.commit("setdata",t.data)}),2e3)}))},methods:{toggleMenu(t){this.opened=t;const e=document.querySelector("body");t?(e.classList.add("stopScroll"),window.scrollTo({top:0,behavior:"smooth"})):e.classList.remove("stopScroll")},gotoPlace(t){const e=document.querySelector("#"+t);e&&e.scrollIntoView({behavior:"smooth"})}}},q=B,Z=(0,m.Z)(q,a,o,!1,null,null,null),A=Z.exports,T=n(2631),H=function(){var t=this,e=t._self._c;return e("div",[e("HomeClaudia",{ref:"home"}),e("ClaudiaRissato",{ref:"claudia"}),e("ConsultasClaudia",{ref:"consultas"}),e("BlogHome",{ref:"blog"}),e("ContatosClaudia",{ref:"contato"})],1)},E=[],R=function(){var t=this,e=t._self._c;return e("section",{staticClass:"home",attrs:{id:"home"}},[e("h1",{staticClass:"home--title"},[t._v("Nutrição Clínica")]),t._m(0),e("div",{staticClass:"home--btn",on:{click:function(e){return t.externalLinksCalls("whatsapp")}}},[t._v("Agende uma consulta")])])},U=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"home--txt"},[t._v("Mais de dez anos de experiência ajudando "),e("br"),t._v("pessoas a organizarem uma rotina saudável.")])}],I={mixins:[r]},N=I,F=(0,m.Z)(N,R,U,!1,null,"7d151e54",null),V=F.exports,z=function(){var t=this;t._self._c;return t._m(0)},D=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"claudia",attrs:{id:"claudia"}},[e("div",{staticClass:"claudia--img"}),e("article",{staticClass:"claudia--resumo"},[e("h1",{staticClass:"claudia--resumo-title"},[t._v("Claúdia Rissato")]),e("p",{staticClass:"claudia--resumo-txt"},[t._v("Um resumo de apresentação e contando um pouco da carreira. ndustry. Lorem Ipsum has been the industry's s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur")])])])}],Y={},K=(0,m.Z)(Y,z,D,!1,null,"6cdeda9a",null),W=K.exports,G=function(){var t=this,e=t._self._c;return e("section",{staticClass:"consultas",attrs:{id:"consultas"}},[e("h1",{staticClass:"consultas--title"},[t._v("Consultas")]),e("p",{staticClass:"consultas--txt"},[t._v(" Analiso seus exames com o olhar na nutrição preventiva e para melhora da sua performance ( em todos os aspectos da palavra, ou seja, sua energia, qualidade do seu sono, desempenho físico, psíquico,emocional.. etc). ")]),e("div",{staticClass:"consultas--sanfona"},[e("div",{ref:"sanf0",staticClass:"consultas--sanfona__obj",on:{click:function(e){return t.openClose("sanf0")}}},[t._m(0),t._m(1)]),e("div",{ref:"sanf1",staticClass:"consultas--sanfona__obj",on:{click:function(e){return t.openClose("sanf1")}}},[t._m(2),t._m(3)]),e("div",{ref:"sanf2",staticClass:"consultas--sanfona__obj",on:{click:function(e){return t.openClose("sanf2")}}},[t._m(4),t._m(5)])])])},J=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"consultas--sanfona__obj-head"},[e("h3",{staticClass:"consultas--sanfona__obj-head--title"},[t._v("Atendimento consultório")]),e("span",{staticClass:"consultas--sanfona__obj-head--icon"},[t._v(">")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"consultas--sanfona__obj-content"},[e("p",{staticClass:"consultas--sanfona__obj-content--txt"},[t._v(" Analiso seus exames com o olhar na nutrição preventiva e para melhora da sua performance ( em todos os aspectos da palavra, ou seja, sua energia, qualidade do seu sono, desempenho físico, psíquico,emocional.. etc). "),e("br"),e("br")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"consultas--sanfona__obj-head"},[e("h3",{staticClass:"consultas--sanfona__obj-head--title"},[t._v("Atendimento domicílio ou empresa")]),e("span",{staticClass:"consultas--sanfona__obj-head--icon"},[t._v(">")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"consultas--sanfona__obj-content"},[e("p",{staticClass:"consultas--sanfona__obj-content--txt"},[t._v(" Analiso seus exames com o olhar na nutrição preventiva e para melhora da sua performance ( em todos os aspectos da palavra, ou seja, sua energia, qualidade do seu sono, desempenho físico, psíquico,emocional.. etc). "),e("br"),e("br")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"consultas--sanfona__obj-head"},[e("h3",{staticClass:"consultas--sanfona__obj-head--title"},[t._v("Atendimento online")]),e("span",{staticClass:"consultas--sanfona__obj-head--icon"},[t._v(">")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"consultas--sanfona__obj-content"},[e("p",{staticClass:"consultas--sanfona__obj-content--txt"},[t._v(" Analiso seus exames com o olhar na nutrição preventiva e para melhora da sua performance ( em todos os aspectos da palavra, ou seja, sua energia, qualidade do seu sono, desempenho físico, psíquico,emocional.. etc). "),e("br"),e("br")])])}],Q={data(){return{oldOpened:null}},methods:{openClose(t){this.oldOpened===t?(this.$refs[t].querySelector(".consultas--sanfona__obj-content").style.height="0",this.$refs[t].querySelector(".consultas--sanfona__obj-head--icon").style.transform="rotate(0deg)",this.oldOpened=null):(this.$refs[t].querySelector(".consultas--sanfona__obj-content").style.height=this.$refs[t].querySelector(".consultas--sanfona__obj-content .consultas--sanfona__obj-content--txt").offsetHeight+"px",this.$refs[t].querySelector(".consultas--sanfona__obj-head--icon").style.transform="rotate(90deg)",console.log(this.$refs[t].querySelector(".consultas--sanfona__obj-head--icon").style.transform),this.oldOpened&&(this.$refs[this.oldOpened].querySelector(".consultas--sanfona__obj-content").style.height="0",this.$refs[this.oldOpened].querySelector(".consultas--sanfona__obj-head--icon").style.transform="rotate(0deg)"),this.oldOpened=t)}}},X=Q,tt=(0,m.Z)(X,G,J,!1,null,"7e6ca198",null),et=tt.exports,nt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"contato",attrs:{id:"contato"}},[e("div",{staticClass:"contatos__centerbox"},[e("div",{staticClass:"contatos__contents"},[e("div",{staticClass:"contatos__contents_content"},[e("h2",{staticClass:"contatos__contents_content-title"},[t._v("Onde atendo")]),e("div",{staticClass:"contatos__contents_content-box",on:{click:function(e){return t.externalLinksCalls("map")}}},[e("img",{staticClass:"contatos__contents_content-location",attrs:{src:n(1015),alt:"Onde atendo"}}),t._m(0)])]),e("div",{staticClass:"contatos__contents_content"},[e("h2",{staticClass:"contatos__contents_content-title"},[t._v("Meus contatos")]),e("div",{staticClass:"contatos__contents_content-box",on:{click:function(e){return t.externalLinksCalls("whatsapp")}}},[e("img",{staticClass:"contatos__contents_content-img",attrs:{src:n(120),alt:"whatsapp"}}),e("span",{staticClass:"contatos__contents_content-txt"},[t._v("(81) 9617-2091")])]),e("div",{staticClass:"contatos__contents_content-box",on:{click:function(e){return t.externalLinksCalls("instagram")}}},[e("img",{staticClass:"contatos__contents_content-img",attrs:{src:n(1847),alt:"instagram"}}),e("span",{staticClass:"contatos__contents_content-txt"},[t._v("@claudia_rissato")])]),e("div",{staticClass:"contatos__contents_content-box",on:{click:function(e){return t.externalLinksCalls("email")}}},[e("img",{staticClass:"contatos__contents_content-img",attrs:{src:n(8686),alt:"email"}}),e("span",{staticClass:"contatos__contents_content-txt"},[t._v("claudia_rissato@hotmail.com")])])])]),e("div",{staticClass:"contatos__contents contatos_img"})]),e("div",{staticClass:"contatos__linha"})])},st=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"contatos__contents_content-txt"},[t._v("Rua Padre Carapuceiro, "),e("br"),t._v("858, sala 1702, Boa Viagem ")])}],at={mixins:[r]},ot=at,it=(0,m.Z)(ot,nt,st,!1,null,"720b904e",null),ct=it.exports,lt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog",attrs:{id:"blog"}},[e("div",{staticClass:"blog--imgs"},t._l(t.blogInfos,(function(n,s){return e("div",{key:s,staticClass:"blog--imgs-img",style:{"background-image":"url("+n.img+")"},on:{click:function(e){return t.gotoBlog(s)}}},[e("div",{staticClass:"blog--imgs-img_box"},[e("p",{staticClass:"blog--imgs-img_txt",domProps:{innerHTML:t._s(n.txt)}}),e("p",{staticClass:"blog--imgs-img_bold",domProps:{innerHTML:t._s(n.bold)}})])])})),0)])},rt=[],ut={data(){return{blogInfos:[]}},methods:{gotoBlog(t){console.log("goto blog",t),this.$router.push(`/blog/${t}/0`)}},beforeMount(){for(let t=0;t<4;t++)this.$store.state.data.blog[t]&&this.blogInfos.push(this.$store.state.data.blog[t].thumb)}},dt=ut,mt=(0,m.Z)(dt,lt,rt,!1,null,"947dbc7a",null),ft=mt.exports,pt={components:{HomeClaudia:V,ClaudiaRissato:W,ConsultasClaudia:et,BlogHome:ft,ContatosClaudia:ct},data(){return{opened:!1}}},ht=pt,_t=(0,m.Z)(ht,H,E,!1,null,null,null),gt=_t.exports;s.ZP.use(T.Z);const vt=[{path:"/",name:"home",component:gt},{path:"/blog/:postId/:index",name:"blog",component:()=>n.e(443).then(n.bind(n,6617))}],Ct=new T.Z({routes:vt});var bt=Ct,kt=n(6265),xt=n.n(kt),yt=n(3822);s.ZP.use(yt.ZP),s.ZP.prototype.$http=xt(),s.ZP.config.productionTip=!1;const wt=new yt.ZP.Store({state:{data:null},mutations:{setdata(t,e){t.data=e}}});new s.ZP({router:bt,store:wt,render:t=>t(A)}).$mount("#app")},8686:function(t,e,n){t.exports=n.p+"img/email.51c3e712.svg"},1847:function(t,e,n){t.exports=n.p+"img/instagram.534dce4d.svg"},1015:function(t,e,n){t.exports=n.p+"img/location.13070d80.svg"},120:function(t,e,n){t.exports=n.p+"img/whatsapp.a95126bc.svg"},9955:function(t,e,n){t.exports=n.p+"img/logo.acb185b4.png"}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,o){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],o=t[u][2];for(var c=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var r=a();void 0!==r&&(e=r)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,s){return n.f[s](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.aa279615.js"}}(),function(){n.miniCssF=function(t){return"css/about.8dca797e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="claudinha:";n.l=function(s,a,o,i){if(t[s])t[s].push(a);else{var c,l;if(void 0!==o)for(var r=document.getElementsByTagName("script"),u=0;u<r.length;u++){var d=r[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+o){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+o),c.src=s),t[s]=[a];var m=function(e,n){c.onerror=c.onload=null,clearTimeout(f);var a=t[s];if(delete t[s],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,s){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=c,a.parentNode.removeChild(a),s(l)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var a=n[s],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(s=0;s<i.length;s++){a=i[s],o=a.getAttribute("data-href");if(o===t||o===e)return a}},s=function(s){return new Promise((function(a,o){var i=n.miniCssF(s),c=n.p+i;if(e(i,c))return a();t(s,c,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={443:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=s(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,s){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var o=new Promise((function(n,s){a=t[e]=[n,s]}));s.push(a[2]=o);var i=n.p+n.u(e),c=new Error,l=function(s){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,a[1](c)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,i=s[0],c=s[1],l=s[2],r=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var u=l(n)}for(e&&e(s);r<i.length;r++)o=i[r],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},s=self["webpackChunkclaudinha"]=self["webpackChunkclaudinha"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(5989)}));s=n.O(s)})();
//# sourceMappingURL=app.5b6007ef.js.map