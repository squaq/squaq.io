"use strict";(self["webpackChunkclaudinha"]=self["webpackChunkclaudinha"]||[]).push([[443],{9946:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var e=function(){var t=this,s=t._self._c;return this.blog?s("section",{staticClass:"blog"},[s("div",{staticClass:"blog__header"},[s("p",{staticClass:"blog__header--title"},[t._v(t._s(this.blog[this.id].title))])]),s("div",{staticClass:"blog__container"},[s("div",{staticClass:"blog__container--content"},[s("div",{staticClass:"blog__container--content-img",style:{"background-image":"url("+this.blog[this.id].img+")"}}),s("div",{staticClass:"blog__container--content-search"},[s("SearchBox",{attrs:{current:this.id},on:{gotoArticle:t.gotoArticle}})],1),s("p",{staticClass:"blog__container--content-txt",domProps:{innerHTML:t._s(this.blog[this.id].text)}})])])]):t._e()},a=[],o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("div",{staticClass:"search--in"},[s("input",{staticClass:"search--in-input",attrs:{type:"text"},on:{keyup:t.keyUp}}),s("img",{staticClass:"search--in-icon",attrs:{src:i(7302),alt:"in icon"}})]),t.showedBlogs&&t.showedBlogs.length>0?s("div",{staticClass:"search--thumbs"},[s("p",{staticClass:"search--thumbs-txt"},[t._v("Você também irá gostar de ler")]),s("hr"),s("div",{staticClass:"search--thumbs-container"},t._l(t.showedBlogs,(function(i,e){return s("div",{key:e,staticClass:"search--thumbs-thumb",class:{"search--thumbs-thumb__selected":i.id===t.current},on:{click:function(s){return t.clickThumnb(i.id)}}},[s("div",{staticClass:"search--thumbs-thumb_img",style:{"background-image":"url("+i.img+")"}}),s("p",{staticClass:"search--thumbs-thumb_txt"},[t._v(t._s(`${i.title}`))])])})),0)]):s("div",{staticClass:"search--without-thumbs"},[s("p",{staticClass:"search--without-thumbs_txt"},[t._v("Sem resultados para a pesquisa")])])])},l=[],r={props:{current:Number},data(){return{blogs:null,showedBlogs:null}},beforeMount(){this.showedBlogs=this.blogs=[...this.$store.state.data.blog]},methods:{keyUp({target:t}){this.showedBlogs=this.blogs.filter((s=>s.title.toLowerCase().includes(t.value.toLowerCase())))},clickThumnb(t){this.$emit("gotoArticle",t)}}},c=r,n=i(1001),h=(0,n.Z)(c,o,l,!1,null,"fb48d64e",null),u=h.exports,d={components:{SearchBox:u},data(){return{blog:null,id:0}},beforeMount(){this.blog=[...this.$store.state.data.blog],this.id=Number(this.$route.params.postId),window.scrollTo({top:0})},mounted(){},methods:{gotoArticle(t){this.index=0,this.id=t,this.$router.push(`/blog/${this.id}`),window.scrollTo({top:0,behavior:"smooth"})},selectArticle(t){t!=this.index&&(this.index=t,this.$router.push(`/blog/${this.id}`))}}},b=d,g=(0,n.Z)(b,e,a,!1,null,"747b3a57",null),m=g.exports},7302:function(t,s,i){t.exports=i.p+"img/search.1657ccaf.svg"}}]);
//# sourceMappingURL=about.d7ce1b2a.js.map