(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{294:function(t,e,c){var content=c(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(15).default)("ecc982bc",content,!0,{sourceMap:!1})},316:function(t,e,c){"use strict";var l=c(294);c.n(l).a},317:function(t,e,c){(t.exports=c(14)(!1)).push([t.i,"*[data-v-7a660c6c]{list-style:none}.more-spec[data-v-7a660c6c]{border:1px solid #f5f5f5}",""])},332:function(t,e,c){"use strict";c.r(e);c(83),c(33),c(30),c(54),c(169),c(170),c(80),c(126),c(120);var l=c(40);c(20),c(79);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var r={name:"pricebyattr",components:{},layout:"bar",props:{},data:function(){return{formItem:{},addItem:{add:!1,name:"",value:""},childItem:[],defaultData:{cost:"",price:"",num:"",weight:""},specList:[],productSpec:[],moreSpec:!0,factImgUrl:[],sqlData:[],showData:{spec:[],product:[]}}},created:function(){},methods:{saveSpec:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=e.name,l=void 0===c?"":c,n=e.child,o=void 0===n?"":n;return new Promise((function(e,c){if(""!==l&&""!==o){var n="",r="";t.sqlData.forEach((function(t,c){t.name===l&&(n=t.id,r="".concat(t.id).concat(t.list.length),t.list.push({id:r,name:o}),e({data:{id:n,childId:r}}))})),n||(n=t.sqlData.length,t.sqlData.push({id:n,name:l,list:[{id:"".concat(n,"0"),name:o}]}),e({data:{id:n,childId:"".concat(n,"0")}}))}}))},initData:function(){var t=this;setTimeout((function(){t.addItem={add:!1,name:"颜色",value:"黄色"},t.addSpec()}),1e3),setTimeout((function(){t.childItem[0]="黑色",t.addChildSpec(0)}),2e3),setTimeout((function(){t.addItem={name:"尺寸",value:"s"},t.addSpec()}),3e3),setTimeout((function(){t.childItem[1]="l",t.addChildSpec(1)}),4e3),setTimeout((function(){t.addItem={name:"成色",value:"八成新"},t.addSpec()}),5e3),setTimeout((function(){t.childItem[2]="九成新",t.addChildSpec(2)}),6e3)},addData:function(t){var e=this,c={url:"",sku:"",cost:"",price:"",num:"",weight:"",use:1,attr:""};this.productSpec.forEach((function(c,l){e.productSpec[l].sku="".concat(e.productSpec[l].sku,"_").concat(t),e.productSpec[l].attr="".concat(e.productSpec[l].attr,"_").concat(t)}));var l=this.countSum(0);if(l!==this.productSpec.length){this.productSpec.length&&--l;for(var i=0;i<l;i++)this.productSpec.push(o({},c,{sku:t,attr:t}))}},createIdList:function(t,e,c){var l=this,n=[];return e===c.length-1?t.forEach((function(t){n.push(t.id)})):t.forEach((function(t,o){l.createIdList(c[e+1].list,e+1,c).forEach((function(e){n.push("".concat(t.id,"_").concat(e))}))})),n},getIndexIdList:function(t,e){var c=this.specList.slice(t+1,this.specList.length);if(!c.length)return[e];var l=[];return(l=this.createIdList(c[0].list,0,c)).forEach((function(t,c){l[c]="".concat(e,"_").concat(t)})),l},getBeforeIdList:function(t){if(0===t)return[];var e=this.specList.slice(0,t);return this.createIdList(e[0].list,0,e)},updateData:function(t,e){var c=this,l={url:"",sku:"",cost:"",price:"",num:"",weight:"",use:1,attr:""};1===this.specList.length?this.productSpec.push(o({},l,{sku:e,attr:e})):function(){var n=c.getBeforeIdList(t),r=c.getIndexIdList(t,e),d=[];n.length?n.forEach((function(t){r.forEach((function(e){d.push("".concat(t,"_").concat(e))}))})):d=d.concat(r);var f=c.countBeforeNum(t);if(n.length)for(var h=function(i){var t=d.slice(i*r.length,(i+1)*r.length);t.forEach((function(e,n){c.productSpec.splice(f+f*i+t.length*i+n,0,o({},l,{sku:e,attr:e}))}))},i=0;i<n.length;i++)h(i);else d.slice(0,r.length).forEach((function(t,e){c.productSpec.push(o({},l,{sku:t,attr:t}))}))}()},uniteSet:function(){var t=this;this.productSpec.forEach((function(e,c){t.$set(t.productSpec[c],"weight",t.defaultData.weight),t.$set(t.productSpec[c],"price",t.defaultData.price),t.$set(t.productSpec[c],"cost",t.defaultData.cost),t.$set(t.productSpec[c],"num",t.defaultData.num)}))},addSpec:function(){var t=this;this.saveSpec({name:this.addItem.name,child:this.addItem.value}).then((function(e){var c=t.specList.filter((function(t){return t.id===e.data.id}));if(c.length){if(c[0].list.filter((function(t){return t.id===e.data.childId})).length)return void t.$message("该规格已存在");var l=0;t.specList.forEach((function(t,e){t.id===c[0].id&&(l=e)})),c[0].list.push({id:e.data.childId,value:t.addItem.value}),t.updateData(l,c[0].list.length-1,e.data.childId)}else t.specList.push({id:e.data.id,name:t.addItem.name,list:[{id:e.data.childId,value:t.addItem.value}]}),t.addItem={add:!1,name:"",value:""},t.addData(e.data.childId)})).catch((function(t){}))},addChildSpec:function(t){var e=this,c=this.specList[t];c?(c.list.filter((function(t){return t.value===e.childItem.value})).length&&this.$message("请注意，已有该规格"),this.saveSpec({name:c.name,child:this.childItem[t]}).then((function(l){c.list.push({id:l.data.childId,value:e.childItem[t]}),e.childItem[t]="",e.updateData(t,l.data.childId)}))):this.$message("规格值添加异常")},delSpecValue:function(t,e){var c=this,l=this.specList[t].list,n="".concat(l[e].id);if(l.length>1){for(var i=0;i<this.productSpec.length;i++){this.productSpec[i].attr.split("_").includes(n)&&(this.productSpec.splice(i,1),--i)}this.specList[t].list.splice(e,1)}else{for(var o=0;o<this.productSpec.length;o++){var r=this.productSpec[o].attr.split("_");r.includes(n)&&function(){r.remove(n);var t="";r.forEach((function(e,c){t=c>0?"".concat(t,"_").concat(e):e})),c.productSpec[o].attr=t,c.productSpec[o].sku=t}()}this.specList.splice(t,1)}},countSum:function(t){var e=1;return this.specList.forEach((function(c,l){l>=t&&c.list.length&&(e*=c.list.length)})),e},countBeforeNum:function(t){var e=1,c=this.countSum(t);if(1===this.specList[t].length)e=c;else{var l=this.specList[t].list;e=c/l.length*(l.length-1)}return e},getSpecAttr:function(t,e){var c,l=this.specList[t].list;c=this.specList[t+1]&&this.specList[t+1].list.length?e/this.countSum(t+1):e;var i=Math.floor(c%l.length);return"NaN"!==i.toString()?l[i]:{id:"",value:""}},objectSpanMethod:function(t){t.row,t.column;var e=t.rowIndex,c=t.columnIndex;return c>=this.specList.length||0===c?[1,1]:[e%this.countSum(c)==0?this.countSum(c):0,1]},setSpecList:function(t){},setProduct:function(t){},getSpecList:function(){return this.showData.spec=this.specList,this.specList},getProductSpec:function(){return this.showData.product=this.productSpec,this.productSpec}}},d=(c(316),c(6)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"priceByAttr"}},[c("el-card",[c("el-card",[c("el-radio-group",{model:{value:t.moreSpec,callback:function(e){t.moreSpec=e},expression:"moreSpec"}},[c("el-radio",{attrs:{label:!1,disabled:""}},[t._v("单规格（仅展示多规格）")]),t._v(" "),c("el-radio",{attrs:{label:!0}},[t._v("多规格")])],1)],1),t._v(" "),t.moreSpec?t._e():c("div",{staticClass:"only-spec"},[c("div",{},[c("el-form",{staticClass:"el-form",attrs:{model:t.formItem,size:"mini","label-width":"100px"}},[c("el-form-item",{attrs:{label:"商家编码"}},[c("el-input",{attrs:{placeholder:"商家编码"},model:{value:t.formItem.sku,callback:function(e){t.$set(t.formItem,"sku",e)},expression:"formItem.sku"}})],1),t._v(" "),c("el-form-item",{attrs:{label:"成本价"}},[c("el-input",{attrs:{placeholder:"成本价"},model:{value:t.formItem.cost,callback:function(e){t.$set(t.formItem,"cost",e)},expression:"formItem.cost"}})],1),t._v(" "),c("el-form-item",{attrs:{label:"库存"}},[c("el-input",{attrs:{placeholder:"库存"},model:{value:t.formItem.num,callback:function(e){t.$set(t.formItem,"num",e)},expression:"formItem.num"}})],1),t._v(" "),c("el-form-item",{attrs:{label:"销售价"}},[c("el-input",{attrs:{placeholder:"销售价"},model:{value:t.formItem.price,callback:function(e){t.$set(t.formItem,"price",e)},expression:"formItem.price"}})],1),t._v(" "),c("el-form-item",{attrs:{label:"重量"}},[c("el-input",{attrs:{placeholder:"重量"},model:{value:t.formItem.weight,callback:function(e){t.$set(t.formItem,"weight",e)},expression:"formItem.weight"}})],1)],1)],1)]),t._v(" "),t.moreSpec?c("div",{staticClass:"more-spec"},[c("div",{},[c("div",{},[c("el-card",[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("规格信息")]),c("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.initData}},[t._v("生成规格")])],1),t._v(" "),t._l(this.specList,(function(e,l){return c("el-card",{key:l,staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v(t._s(e.name))])]),t._v(" "),c("div",{staticClass:"text item"},[t._l(e.list,(function(e,n){return c("el-tag",{key:n,attrs:{closable:"",size:"small"},on:{close:function(e){return t.delSpecValue(l,n)}}},[t._v(t._s(e.value))])})),t._v(" "),c("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"请输入规格值"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addChildSpec(l)}},model:{value:t.childItem[l],callback:function(e){t.$set(t.childItem,l,e)},expression:"childItem[index]"}},[c("el-button",{attrs:{slot:"append",icon:"el-icon-plus"},on:{click:function(e){return t.addChildSpec(l)}},slot:"append"},[t._v("添加")])],1)],2)])})),t._v(" "),c("el-card",{},[t.addItem.add?c("el-form",{staticClass:"el-form",attrs:{class:"el-form","label-width":"100px",size:"mini"}},[c("el-form-item",{attrs:{label:"规格名称"}},[c("el-input",{attrs:{placeholder:"规格名称"},model:{value:t.addItem.name,callback:function(e){t.$set(t.addItem,"name",e)},expression:"addItem.name"}})],1),t._v(" "),c("el-form-item",{attrs:{label:"规格值"}},[c("el-input",{attrs:{placeholder:"规格值"},model:{value:t.addItem.value,callback:function(e){t.$set(t.addItem,"value",e)},expression:"addItem.value"}})],1),t._v(" "),c("el-form-item",{},[c("el-button",{attrs:{type:"primary"},on:{click:t.addSpec}},[t._v("确认")]),t._v(" "),c("el-button",{attrs:{type:"info"},on:{click:function(e){t.addItem.add=!1}}},[t._v("取消")])],1)],1):t._e(),t._v(" "),c("div",{},[c("el-button",{on:{click:function(e){t.addItem.add=!0}}},[t._v("添加规格值")])],1)],1),t._v(" "),c("el-card",[c("el-row",{attrs:{type:"flex",gutter:10}},[c("el-col",{staticStyle:{"text-align":"right"}},[t._v("批量设置：")]),t._v(" "),c("el-col",[c("el-input",{attrs:{placeholder:"请输入成本价",size:"mini"},model:{value:t.defaultData.cost,callback:function(e){t.$set(t.defaultData,"cost",e)},expression:"defaultData.cost"}})],1),t._v(" "),c("el-col",[c("el-input",{attrs:{placeholder:"请输入销售价",size:"mini"},model:{value:t.defaultData.price,callback:function(e){t.$set(t.defaultData,"price",e)},expression:"defaultData.price"}})],1),t._v(" "),c("el-col",[c("el-input",{attrs:{placeholder:"请输入库存",size:"mini"},model:{value:t.defaultData.num,callback:function(e){t.$set(t.defaultData,"num",e)},expression:"defaultData.num"}})],1),t._v(" "),c("el-col",[c("el-input",{attrs:{placeholder:"请输入重量",size:"mini"},model:{value:t.defaultData.weight,callback:function(e){t.$set(t.defaultData,"weight",e)},expression:"defaultData.weight"}})],1),t._v(" "),c("el-col",[c("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.uniteSet}},[t._v("确定")])],1)],1)],1)],2)],1),t._v(" "),c("el-card",[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("商品列表")])]),t._v(" "),c("el-table",{attrs:{data:t.productSpec,"span-method":t.objectSpanMethod}},[c("el-table-column",{attrs:{type:"index"}}),t._v(" "),t._l(t.specList,(function(e,l){return c("el-table-column",{key:l,attrs:{label:e.name},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t.getSpecAttr(l,e.$index).value)+"-"+t._s(t.getSpecAttr(l,e.$index).id)+"\n              ")]}}],null,!0)})})),t._v(" "),c("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){}}],null,!1,4154174436)}),t._v(" "),c("el-table-column",{attrs:{label:"规格编码",prop:"sku"},scopedSlots:t._u([{key:"default",fn:function(e){return[c("el-input",{attrs:{size:"mini",placeholder:"请输入规格编码"},model:{value:t.productSpec[e.$index].sku,callback:function(c){t.$set(t.productSpec[e.$index],"sku",c)},expression:"productSpec[scope.$index].sku"}})]}}],null,!1,2476303211)}),t._v(" "),c("el-table-column",{attrs:{label:"成本价（元）",prop:"cost"},scopedSlots:t._u([{key:"default",fn:function(e){return[c("el-input",{attrs:{size:"mini",placeholder:"请输入成本价（元）"},model:{value:t.productSpec[e.$index].cost,callback:function(c){t.$set(t.productSpec[e.$index],"cost",c)},expression:"productSpec[scope.$index].cost"}})]}}],null,!1,855466027)}),t._v(" "),c("el-table-column",{attrs:{label:"库存",prop:"num"},scopedSlots:t._u([{key:"default",fn:function(e){return[c("el-input",{attrs:{size:"mini",placeholder:"请输入库存"},model:{value:t.productSpec[e.$index].num,callback:function(c){t.$set(t.productSpec[e.$index],"num",c)},expression:"productSpec[scope.$index].num"}})]}}],null,!1,1248872276)}),t._v(" "),c("el-table-column",{attrs:{label:"销售价（元）",prop:"price"},scopedSlots:t._u([{key:"default",fn:function(e){return[c("el-input",{attrs:{size:"mini",placeholder:"请输入销售价（元）"},model:{value:t.productSpec[e.$index].price,callback:function(c){t.$set(t.productSpec[e.$index],"price",c)},expression:"productSpec[scope.$index].price"}})]}}],null,!1,2782386079)}),t._v(" "),c("el-table-column",{attrs:{label:"重量",prop:"weight"},scopedSlots:t._u([{key:"default",fn:function(e){return[c("el-input",{attrs:{size:"mini",placeholder:"请输入重量"},model:{value:t.productSpec[e.$index].weight,callback:function(c){t.$set(t.productSpec[e.$index],"weight",c)},expression:"productSpec[scope.$index].weight"}})]}}],null,!1,702146571)}),t._v(" "),c("el-table-column",{attrs:{label:"是否启用"},scopedSlots:t._u([{key:"default",fn:function(e){return[c("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.productSpec[e.$index].use,callback:function(c){t.$set(t.productSpec[e.$index],"use",c)},expression:"productSpec[scope.$index].use"}})]}}],null,!1,1244856876)})],2)],1)],1)]):t._e(),t._v(" "),c("el-card",[c("el-button",{on:{click:t.getSpecList}},[t._v("获得规格列表")]),t._v(" "),c("el-button",{on:{click:t.getProductSpec}},[t._v("获得商品列表")])],1),t._v(" "),c("el-card",[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("规格列表")])]),t._v("\n      "+t._s(t.showData.spec)+"\n    ")]),t._v(" "),c("el-card",[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("商品列表")])]),t._v("\n      "+t._s(t.showData.product)+"\n    ")])],1)],1)}),[],!1,null,"7a660c6c",null);e.default=component.exports}}]);