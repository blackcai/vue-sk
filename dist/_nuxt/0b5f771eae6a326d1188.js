(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{318:function(t,e,c){var n=c(17);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},321:function(t,e,c){"use strict";var n=c(6),r=c(322)(6),o="findIndex",l=!0;o in[]&&Array(1)[o](function(){l=!1}),n(n.P+n.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(135)(o)},322:function(t,e,c){var n=c(45),r=c(134),o=c(46),l=c(37),d=c(323);t.exports=function(t,e){var c=1==t,h=2==t,f=3==t,v=4==t,_=6==t,y=5==t||_,S=e||d;return function(e,d,P){for(var m,k,x=o(e),A=r(x),w=n(d,P,3),C=l(A.length),N=0,O=c?S(e,C):h?S(e,0):void 0;C>N;N++)if((y||N in A)&&(k=w(m=A[N],N,x),t))if(c)O[N]=k;else if(k)switch(t){case 3:return!0;case 5:return m;case 6:return N;case 2:O.push(m)}else if(v)return!1;return _?-1:f||v?v:O}}},323:function(t,e,c){var n=c(324);t.exports=function(t,e){return new(n(t))(e)}},324:function(t,e,c){var n=c(17),r=c(182),o=c(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},325:function(t,e,c){"use strict";var strong=c(326),n=c(318);t.exports=c(327)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return strong.def(n(this,"Set"),t=0===t?0:t,t)}},strong)},326:function(t,e,c){"use strict";var n=c(9).f,r=c(91),o=c(178),l=c(45),d=c(176),h=c(177),f=c(133),v=c(183),_=c(136),y=c(7),S=c(175).fastKey,P=c(318),m=y?"_s":"size",k=function(t,e){var c,n=S(e);if("F"!==n)return t._i[n];for(c=t._f;c;c=c.n)if(c.k==e)return c};t.exports={getConstructor:function(t,e,c,f){var v=t(function(t,n){d(t,v,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[m]=0,null!=n&&h(n,c,t[f],t)});return o(v.prototype,{clear:function(){for(var t=P(this,e),data=t._i,c=t._f;c;c=c.n)c.r=!0,c.p&&(c.p=c.p.n=void 0),delete data[c.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var c=P(this,e),n=k(c,t);if(n){var r=n.n,o=n.p;delete c._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),c._f==n&&(c._f=r),c._l==n&&(c._l=o),c[m]--}return!!n},forEach:function(t){P(this,e);for(var c,n=l(t,arguments.length>1?arguments[1]:void 0,3);c=c?c.n:this._f;)for(n(c.v,c.k,this);c&&c.r;)c=c.p},has:function(t){return!!k(P(this,e),t)}}),y&&n(v.prototype,"size",{get:function(){return P(this,e)[m]}}),v},def:function(t,e,c){var n,r,o=k(t,e);return o?o.v=c:(t._l=o={i:r=S(e,!0),k:e,v:c,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[m]++,"F"!==r&&(t._i[r]=o)),t},getEntry:k,setStrong:function(t,e,c){f(t,e,function(t,c){this._t=P(t,e),this._k=c,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))},c?"entries":"values",!c,!0),_(e)}}},327:function(t,e,c){"use strict";var n=c(3),r=c(6),o=c(14),l=c(178),meta=c(175),d=c(177),h=c(176),f=c(17),v=c(8),_=c(179),y=c(60),S=c(137);t.exports=function(t,e,c,P,m,k){var x=n[t],A=x,w=m?"set":"add",C=A&&A.prototype,N={},O=function(t){var e=C[t];o(C,t,"delete"==t?function(a){return!(k&&!f(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(k&&!f(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!f(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof A&&(k||C.forEach&&!v(function(){(new A).entries().next()}))){var $=new A,E=$[w](k?{}:-0,1)!=$,V=v(function(){$.has(1)}),z=_(function(t){new A(t)}),T=!k&&v(function(){for(var t=new A,e=5;e--;)t[w](e,e);return!t.has(-0)});z||((A=e(function(e,c){h(e,A,t);var n=S(new x,e,A);return null!=c&&d(c,m,n[w],n),n})).prototype=C,C.constructor=A),(V||T)&&(O("delete"),O("has"),m&&O("get")),(T||E)&&O(w),k&&C.clear&&delete C.clear}else A=P.getConstructor(e,t,m,w),l(A.prototype,c),meta.NEED=!0;return y(A,t),N[t]=A,r(r.G+r.W+r.F*(A!=x),N),k||P.setStrong(A,t,m),A}},328:function(t,e,c){"use strict";var n=c(45),r=c(6),o=c(46),l=c(184),d=c(185),h=c(37),f=c(187),v=c(186);r(r.S+r.F*!c(179)(function(t){Array.from(t)}),"Array",{from:function(t){var e,c,r,_,y=o(t),S="function"==typeof this?this:Array,P=arguments.length,m=P>1?arguments[1]:void 0,k=void 0!==m,x=0,A=v(y);if(k&&(m=n(m,P>2?arguments[2]:void 0,2)),null==A||S==Array&&d(A))for(c=new S(e=h(y.length));e>x;x++)f(c,x,k?m(y[x],x):y[x]);else for(_=A.call(y),c=new S;!(r=_.next()).done;x++)f(c,x,k?l(_,m,[r.value,x],!0):r.value);return c.length=x,c}})},331:function(t,e,c){var content=c(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(16).default)("13b79756",content,!0,{sourceMap:!1})},345:function(t,e,c){"use strict";var n=c(331);c.n(n).a},346:function(t,e,c){(t.exports=c(15)(!1)).push([t.i,".vue-sku .spec-line[data-v-c0a2467c]{position:relative}.vue-sku .spec-line .spec-deleted[data-v-c0a2467c]{position:absolute;right:0;top:0;display:none;cursor:pointer}.vue-sku .spec-line:hover .spec-deleted[data-v-c0a2467c]{display:inline}",""])},351:function(t,e,c){"use strict";c.r(e);c(321),c(180),c(181),c(22),c(18),c(325),c(132),c(328),c(90),c(59);var n=c(28);function r(t,e){for(var c in t){if(t.hasOwnProperty(c)!==e.hasOwnProperty(c))return!1;if(Object(n.a)(t[c])!==Object(n.a)(e[c]))return!1}for(var o in e){if(t.hasOwnProperty(o)!==e.hasOwnProperty(o))return!1;if(Object(n.a)(t[o])!==Object(n.a)(e[o]))return!1;if(t.hasOwnProperty(o))if(t[o]instanceof Array&&e[o]instanceof Array){if(r(!t[o],e[o]))return!1}else if(t[o]instanceof Object&&e[o]instanceof Object){if(r(!t[o],e[o]))return!1}else if(t[o]!==e[o])return!1}return!0}var o={name:"app",data:function(){return{specificationStatus:!1,specification:[],childProductArray:[],addValues:[],defaultProductNo:"PRODUCTNO_",isSetListShow:!0,batchValue:"",currentType:"",cacheSpecification:[]}},computed:{stockSpecArr:function(){return this.childProductArray.map(function(t){return t.childProductSpec})}},created:function(){this.createData()},methods:{createData:function(){for(var t=["颜色","尺寸"],e=["黑色 白色 蓝色","s m xl"],i=0;i<2;i++)this.addSpec(),this.specification[i].name=t[i],this.addValues[i]=e[i],this.cacheSpecification[i].status=!1,this.cacheSpecification[i].name=t[i],this.addSpecTag(i)},addSpec:function(){this.specification.length<5&&(this.cacheSpecification.push({status:!0,name:""}),this.specification.push({name:"",value:[]}),console.log(this.cacheSpecification))},updateSpec:function(t){this.cacheSpecification[t].status=!0,this.cacheSpecification[t].name=this.specification[t].name},saveSpec:function(t){this.cacheSpecification[t].name.trim()?this.specification[t].name===this.cacheSpecification[t].name?this.cacheSpecification[t].status=!1:this.verifyRepeat(t)?this.$message.error("名称重复，请注意修改"):(this.specification[t].name=this.cacheSpecification[t].name,this.cacheSpecification[t].status=!1):this.$message.error("名称不能为空，请注意修改")},delSpec:function(t){this.specification.splice(t,1),this.handleSpecChange("del")},verifyRepeat:function(t){var e=this,c=!1;return this.specification.forEach(function(n,r){t!==r&&e.specification[r].name===e.cacheSpecification[t].name&&(c=!0)}),c},addSpecTag:function(t){var e=this.addValues[t]||"";if(e.trim()&&this.cacheSpecification[t].name.trim()){var c=(e=e.trim()).split(/\s+/),n=this.specification[t].value.concat(c);n=Array.from(new Set(n)),this.$set(this.specification[t],"value",n),this.clearAddValues(t),this.handleSpecChange("add"),this.specification[t].name=this.cacheSpecification[t].name,this.cacheSpecification[t].status=!1}else this.$message.error("名称不能为空，请注意修改")},delSpecTag:function(t,e){this.specification[t].value.splice(e,1),this.handleSpecChange("del")},clearAddValues:function(t){this.$set(this.addValues,t,"")},getSpecAttr:function(t,e){var c,n=this.specification[t].value;c=this.specification[t+1]&&this.specification[t+1].value.length?e/this.countSum(t+1):e;var i=Math.floor(c%n.length);return"NaN"!==i.toString()?n[i]:""},countSum:function(t){var e=1;return this.specification.forEach(function(c,n){n>=t&&c.value.length&&(e*=c.value.length)}),e},showTd:function(t,e){return!!this.specification[t]&&e%this.countSum(t+1)==0},handleSpecChange:function(option){var t=JSON.parse(JSON.stringify(this.childProductArray));"del"===option&&(this.childProductArray=[]);for(var i=0;i<this.countSum(0);i++)this.changeStock(option,i,t)},changeStock:function(option,t,e){var c={childProductId:0,childProductSpec:this.getChildProductSpec(t),childProductNo:this.defaultProductNo+t,childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0},n=c.childProductSpec;if("add"===option)-1===this.stockSpecArr.findIndex(function(t){return r(n,t)})&&this.$set(this.childProductArray,t,c);else if("del"===option){var o="";e.forEach(function(t){if(r(n,t.childProductSpec))return o=t,!1}),this.childProductArray.push(o||c)}},getChildProductSpec:function(t){var e=this,c={};return this.specification.forEach(function(n,r){c[n.name]=e.getSpecAttr(r,t)}),c},handleUserChange:function(t,e){if(e){var c=this.makeProductNoNotRepet(t);this.$set(this.childProductArray[t],"childProductNo",c)}else this.$set(this.childProductArray[t],"childProductNo","")},handleNo:function(t,e){var c,n=this.childProductArray[t].childProductNo;this.childProductArray.forEach(function(e,i){e.childProductNo===n&&i!==t&&(c=!0)}),c&&(this.$message({type:"warning",message:"不允许输入重复的商品编号"}),this.$set(this.childProductArray[t],"childProductNo",this.makeProductNoNotRepet(t)))},makeProductNoNotRepet:function(t){for(var e,i=t,c=!0;c;)e=this.defaultProductNo+i,c=this.isProductNoRepet(e),i++;return e},isProductNoRepet:function(t){return this.childProductArray.findIndex(function(e){return e.childProductNo===t})>-1},openBatch:function(t){this.currentType=t,this.isSetListShow=!1},setBatch:function(){var t=this;"string"!=typeof this.batchValue?(this.childProductArray.forEach(function(e){e.isUse&&(e[t.currentType]=t.batchValue)}),this.cancelBatch()):this.$message({type:"warning",message:"请输入正确的值"})},cancelBatch:function(){console.log("取消批量设置"),this.batchValue="",this.currentType="",this.isSetListShow=!0}}},l=(c(345),c(4)),d={name:"sku2",components:{SkuWrap:Object(l.a)(o,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"vue-sku"},[c("el-card",{staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("产品规格设置")])]),t._v(" "),c("section",[t._l(t.specification,function(e,n){return c("div",{key:n,staticClass:"spec-line"},[c("div",[t.cacheSpecification[n].status?t._e():c("span",[t._v(t._s(e.name))]),t._v(" "),t.cacheSpecification[n].status?c("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"输入产品规格"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveSpec(n)}},model:{value:t.cacheSpecification[n].name,callback:function(e){t.$set(t.cacheSpecification[n],"name",e)},expression:"cacheSpecification[index].name"}},[c("el-button",{attrs:{slot:"append",icon:"el-icon-check",type:"primary"},on:{click:function(e){return t.saveSpec(n)}},slot:"append"})],1):t._e(),t._v(" "),t.cacheSpecification[n].status?t._e():c("i",{staticClass:"icon el-icon-edit",on:{click:function(e){return t.updateSpec(n)}}})],1),t._v(" "),c("div",[t._l(e.value,function(e,r){return c("el-tag",{key:r,attrs:{closable:""},on:{close:function(e){return t.delSpecTag(n,r)}}},[t._v(t._s(e))])}),t._v(" "),c("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"多个产品属性以空格隔开"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addSpecTag(n)}},model:{value:t.addValues[n],callback:function(e){t.$set(t.addValues,n,e)},expression:"addValues[index]"}},[c("el-button",{attrs:{slot:"append",icon:"el-icon-check",type:"primary"},on:{click:function(e){return t.addSpecTag(n)}},slot:"append"})],1)],2),t._v(" "),c("i",{staticClass:"icon el-icon-circle-close spec-deleted",on:{click:function(e){return t.delSpec(n)}}}),t._v(" "),c("el-divider")],1)}),t._v(" "),c("div",{staticClass:"add-spec"},[c("el-button",{attrs:{size:"small",type:"primary",disabled:t.specification.length>=5},on:{click:t.addSpec}},[t._v("添加规格项目")])],1)],2)]),t._v(" "),c("el-card",{staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("规格展示")]),t._v(" "),c("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.specificationStatus=!t.specificationStatus}}},[t._v(t._s(t.specificationStatus?"隐藏":"显示"))])],1),t._v(" "),t.specificationStatus?c("section",[c("el-row",t._l(t.specification,function(e,n){return c("el-col",{key:n,staticClass:"text item bold",attrs:{span:2}},[t._v(t._s(e.name))])}),1),t._v(" "),t._l(t.countSum(0),function(e,n){return c("el-row",{key:n},t._l(t.specification.length,function(e,r){return c("el-col",{key:e,staticClass:"text item",attrs:{span:2}},[t._v(t._s(t.getSpecAttr(r,n)))])}),1)})],2):t._e()]),t._v(" "),c("el-card",[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("规格表格")])]),t._v(" "),c("table",{staticClass:"el-table",attrs:{cellspacing:"0",cellpadding:"0"}},[c("thead",[c("tr",[t._l(t.specification,function(e,n){return c("th",{key:n},[t._v("\n          "+t._s(e.name)+"\n        ")])}),t._v(" "),c("th",{staticStyle:{width:"160px"}},[t._v("规格编码")]),t._v(" "),c("th",[t._v("成本价（元）")]),t._v(" "),c("th",[t._v("库存")]),t._v(" "),c("th",[t._v("销售价（元）")]),t._v(" "),c("th",[t._v("是否启用")])],2)]),t._v(" "),t.specification[0]&&t.specification[0].value.length?c("tbody",[t._l(t.countSum(0),function(e,n){return c("tr",{key:n},[t._l(t.specification.length,function(e,r){return t.showTd(r,n)?c("td",{key:e,attrs:{rowspan:t.countSum(e)}},[t._v("\n          "+t._s(t.getSpecAttr(r,n))+"\n        ")]):t._e()}),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",disabled:!t.childProductArray[n].isUse,placeholder:"输入商品规格编号"},on:{blur:function(e){return t.handleNo(n)}},model:{value:t.childProductArray[n].childProductNo,callback:function(e){t.$set(t.childProductArray[n],"childProductNo",e)},expression:"childProductArray[index].childProductNo"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"输入成本价",disabled:!t.childProductArray[n].isUse},model:{value:t.childProductArray[n].childProductCost,callback:function(e){t.$set(t.childProductArray[n],"childProductCost",t._n(e))},expression:"childProductArray[index].childProductCost"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"输入库存",disabled:!t.childProductArray[n].isUse},model:{value:t.childProductArray[n].childProductStock,callback:function(e){t.$set(t.childProductArray[n],"childProductStock",t._n(e))},expression:"childProductArray[index].childProductStock"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"输入销售价",disabled:!t.childProductArray[n].isUse},model:{value:t.childProductArray[n].childProductPrice,callback:function(e){t.$set(t.childProductArray[n],"childProductPrice",t._n(e))},expression:"childProductArray[index].childProductPrice"}})],1),t._v(" "),c("td",[c("el-switch",{on:{change:function(e){t.handleUserChange(n,e)}},model:{value:t.childProductArray[n].isUse,callback:function(e){t.$set(t.childProductArray[n],"isUse",e)},expression:"childProductArray[index].isUse"}})],1)],2)}),t._v(" "),c("tr",[c("td",{staticClass:"wh-foot",attrs:{colspan:"8"}},[c("span",{staticClass:"label"},[t._v("批量设置：")]),t._v(" "),t.isSetListShow?[c("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openBatch("childProductCost")}}},[t._v("成本价")]),t._v(" "),c("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openBatch("childProductStock")}}},[t._v("库存")]),t._v(" "),c("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openBatch("childProductPrice")}}},[t._v("销售价")])]:[c("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"输入要设置的数量"},model:{value:t.batchValue,callback:function(e){t.batchValue=t._n(e)},expression:"batchValue"}}),t._v(" "),c("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.setBatch}},[c("i",{staticClass:"set-btn blue el-icon-check"})]),t._v(" "),c("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.cancelBatch}},[c("i",{staticClass:"set-btn blue el-icon-close"})])]],2)])],2):t._e()])]),t._v(" "),c("el-card",{staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("数据格式")])]),t._v(" "),c("section",t._l(t.childProductArray,function(e,n){return c("div",{key:n},[t._v("\n        "+t._s(e)+"\n        "),c("el-divider")],1)}),0)])],1)},[],!1,null,"c0a2467c",null).exports}},h=Object(l.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("sku-wrap")],1)},[],!1,null,null,null);e.default=h.exports}}]);