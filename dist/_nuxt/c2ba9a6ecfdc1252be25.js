(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{321:function(t,e,o){var content=o(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("37ce0966",content,!0,{sourceMap:!1})},342:function(t,e,o){"use strict";var l=o(321);o.n(l).a},343:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,"",""])},349:function(t,e,o){"use strict";o.r(e);var l={name:"table-index",data:function(){return{thead:[],theadValue:"",tbody:[],hideBorder:!1,inputText:!1,lineNumber:0,color:{headBg:"#99bbdd",border:"#ccc",headColor:"#545454",bodyColor:"#545454"},html:""}},layout:"bar",methods:{addThead:function(){this.theadValue.trim()&&(this.thead.push(this.theadValue),this.theadValue="",this.tbody.length?this.updateBody():this.addTbody())},closeThead:function(t){this.thead.splice(t,1),this.deleteBody(t)},updateBody:function(t){this.tbody.forEach(function(t,e){t.push("")})},deleteBody:function(t){this.tbody.forEach(function(e,o){e.splice(t,1)})},addTbody:function(){var t=[];this.thead.forEach(function(e,o){t.push("")}),this.tbody.push(t)},inputDelete:function(){var t=this;this.lineNumber&&this.$confirm("请确认您将删除第".concat(this.lineNumber,"行数据，此操作不可恢复。"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=t.lineNumber-1;t.lineNumber>t.tbody.length?t.$message("请输入正确的行数。"):t.tbody.splice(e,1)}).catch(function(){})},getHtml:function(){var t=this,e=!1;this.inputText||(this.inputText=!0,e=!0),setTimeout(function(){t.html=t.$refs.table.outerHTML,e&&(t.inputText=!1)},0)}}},n=(o(342),o(5)),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("el-card",{attrs:{size:"mini"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("表格头部")])]),t._v(" "),o("el-card",[o("div",{staticClass:"text item"},[t._l(t.thead,function(e,l){return o("el-tag",{key:l,attrs:{closable:""},on:{close:function(e){return t.closeThead(l)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.thead[l],expression:"thead[index]"}],staticStyle:{width:"100px"},attrs:{type:"text"},domProps:{value:t.thead[l]},on:{input:function(e){e.target.composing||t.$set(t.thead,l,e.target.value)}}})])}),t._v(" "),o("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"请输入规格值"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addThead(e)}},model:{value:t.theadValue,callback:function(e){t.theadValue=e},expression:"theadValue"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-plus"},on:{click:t.addThead},slot:"append"},[t._v("添加")])],1)],2)])],1),t._v(" "),o("el-card",{attrs:{size:"mini"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("表格内容")])]),t._v(" "),o("el-card",{attrs:{size:"mini"}},[o("div",{staticClass:"text item"},[o("el-button",{attrs:{size:"mini"},on:{click:t.addTbody}},[t._v("添加一行表格")]),t._v(" "),o("el-button",{attrs:{size:"mini"},on:{click:function(e){t.hideBorder=!t.hideBorder}}},[t._v(t._s(t.hideBorder?"显示输入框边框":"隐藏输入框边框"))]),t._v(" "),o("el-button",{attrs:{size:"mini"},on:{click:function(e){t.inputText=!t.inputText}}},[t._v(t._s(t.inputText?"文字转输入框":"输入框转换文字"))]),t._v(" "),o("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"请输入行数",type:"number"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputDelete(e)}},model:{value:t.lineNumber,callback:function(e){t.lineNumber=e},expression:"lineNumber"}},[o("el-button",{attrs:{slot:"append"},on:{click:t.inputDelete},slot:"append"},[t._v("删除指定行数据")])],1)],1)])],1),t._v(" "),o("el-card",{attrs:{size:"mini"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("颜色设置")])]),t._v(" "),o("el-card",{attrs:{size:"mini"}},[o("div",{staticClass:"text item"},[o("el-input",{staticStyle:{width:"300px"},attrs:{size:"mini",placeholder:"表格头部颜色"},model:{value:t.color.headBg,callback:function(e){t.$set(t.color,"headBg",e)},expression:"color.headBg"}},[o("el-button",{attrs:{slot:"append"},slot:"append"},[t._v("表格头部颜色")])],1),t._v(" "),o("el-input",{staticStyle:{width:"300px"},attrs:{size:"mini",placeholder:"表格边框颜色"},model:{value:t.color.border,callback:function(e){t.$set(t.color,"border",e)},expression:"color.border"}},[o("el-button",{attrs:{slot:"append"},slot:"append"},[t._v("表格边框颜色")])],1),t._v(" "),o("el-input",{staticStyle:{width:"300px"},attrs:{size:"mini",placeholder:"表格头部文字颜色"},model:{value:t.color.headColor,callback:function(e){t.$set(t.color,"headColor",e)},expression:"color.headColor"}},[o("el-button",{attrs:{slot:"append"},slot:"append"},[t._v("表格头部文字颜色")])],1),t._v(" "),o("el-input",{staticStyle:{width:"300px"},attrs:{size:"mini",placeholder:"表格内容文字颜色"},model:{value:t.color.bodyColor,callback:function(e){t.$set(t.color,"bodyColor",e)},expression:"color.bodyColor"}},[o("el-button",{attrs:{slot:"append"},slot:"append"},[t._v("表格内容文字颜色")])],1)],1)])],1),t._v(" "),o("table",{ref:"table",staticStyle:{width:"1000px",margin:"100px auto 100px auto","border-collapse":"collapse","border-spacing":"0"},style:{border:"1px solid "+t.color.border}},[o("thead",{style:{background:t.color.headBg}},[o("tr",t._l(t.thead,function(e,l){return o("th",{key:l,staticStyle:{"text-align":"left",padding:"10px"},style:{borderRight:"1px solid "+t.color.border,color:t.color.headColor}},[t._v(t._s(e))])}),0)]),t._v(" "),o("tbody",t._l(t.tbody,function(e,l){return o("tr",{key:l,style:{borderTop:"1px solid "+t.color.border}},t._l(e,function(e,n){return o("td",{key:n,staticStyle:{padding:"10px"},style:{borderRight:"1px solid "+t.color.border,color:t.color.headColor}},[t.inputText?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.tbody[l][n],expression:"tbody[index][j]"}],style:{border:t.hideBorder?"none":""},attrs:{type:"text",placeholder:""},domProps:{value:t.tbody[l][n]},on:{input:function(e){e.target.composing||t.$set(t.tbody[l],n,e.target.value)}}}),t._v(" "),t.inputText?o("span",[t._v(t._s(t.tbody[l][n]))]):t._e()])}),0)}),0)]),t._v(" "),o("el-card",[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("表格代码")]),o("el-button",{attrs:{size:"mini"},on:{click:t.getHtml}},[t._v("获取表格代码")])],1),t._v(" "),o("el-card",[t._v(t._s(t.html))])],1)],1)},[],!1,null,"964da094",null);e.default=component.exports}}]);