webpackJsonp([1],{"0DyF":function(e,t){},AoDH:function(e,t){},FJgb:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(e){a("hRjt")},null,null).exports,r=a("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header pinganTheme clearfix"},[t("h1",{staticClass:"headerTitle"},[this._v("某某某管理系统")]),this._v(" "),t("ul",{staticClass:"welcomeUser clearfix"},[t("li",{staticClass:"welcomeItem userMessage"},[t("span",[this._v("欢迎您：XXX")])]),this._v(" "),t("li",{staticClass:"welcomeItem logout"},[t("button",{staticClass:"logout-btn"},[this._v("安全退出")])])])])}]};var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sider"},[a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100%"},attrs:{"default-active":"SoftwareVersion","background-color":"#F2D0C5","text-color":"#333","active-text-color":"#f35927","active-background-color":"#f35927",router:""},on:{open:e.handleOpen,close:e.handleClose,select:e.changeMenu}},[e._l(e.$store.state.menuDatas,function(t,l){return[t.children?e._e():a("el-menu-item",{attrs:{index:t.idx}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),e._v(" "),t.children?a("el-submenu",{staticClass:"level_one",attrs:{index:t.idx}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-circle-plus"}),e._v(" "),a("span",[e._v(e._s(t.label))])]),e._v(" "),e._l(t.children,function(t){return[a("el-menu-item-group",[t.children?e._e():a("el-menu-item",{attrs:{index:t.idx}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),e._v(" "),t.children?a("el-submenu",{staticClass:"level_two",attrs:{index:t.idx}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-circle-plus"}),e._v(" "),a("span",[e._v(e._s(t.label))])]),e._v(" "),e._l(t.children,function(t){return[a("el-menu-item-group",[t.children?e._e():a("el-menu-item",{attrs:{index:t.idx}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),e._v(" "),t.children?a("el-submenu",{staticClass:"level_three",attrs:{index:t.idx}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-circle-plus"}),e._v(" "),a("span",[e._v(e._s(t.label))])])],2):e._e()],1)]})],2):e._e()],1)]})],2):e._e()]})],2)],1)},staticRenderFns:[]};var c={data:function(){return{}},components:{HeaderComponent:a("VU/8")({data:function(){return{}}},o,!1,function(e){a("AoDH")},"data-v-e0502cb4",null).exports,SiderComponent:a("VU/8")({data:function(){return{arrowType:!1}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},changeMenu:function(e,t){this.$parent.$refs.windowHeight.scrollTop=0}}},s,!1,function(e){a("FJgb")},null,null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("div",{staticClass:"page-header"},[t("HeaderComponent")],1),this._v(" "),t("div",{staticClass:"page-content"},[t("SiderComponent"),this._v(" "),t("div",{ref:"windowHeight",staticClass:"viewContent"},[t("router-view")],1)],1),this._v(" "),t("div",{staticClass:"page-footer"})])},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("kr5Q")},null,null).exports,p={data:function(){return{radio:"1",radio1:"1",loading:!0,tableData3:[{version:"3.0.7",updateInfo:"测试",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"ANDROID",creatDate:"2017/05/16",updateDate:"2017/05/16"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"ANDROID",creatDate:"2016/05/24",updateDate:"2016/05/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"IOS",creatDate:"2016/04/06",updateDate:"2016/04/06"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/10/15",updateDate:"2015/10/15"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"IOS",creatDate:"2015/08/18",updateDate:"2015/08/18"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"ANDROID",creatDate:"2015/08/17",updateDate:"2015/08/17"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",reatDate:"2015/03/24",updateDate:"2015/03/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"}],multipleSelection:[],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,input10:"",dialogTableVisible:!1,dialogFormVisible:!1,dialogDeleteVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;e.loading=!0,this.timer=setTimeout(function(){e.loading=!1},500)},handleSizeChange:function(e){console.log("每页 ${val} 条")},handleCurrentChange:function(e){console.log("当前页: ${val}")},handleSelectionChange:function(e){this.multipleSelection=e},deleteSelect:function(){this.multipleSelection.length>0?this.dialogDeleteVisible=!0:this.$message.error("请选择要删除的数据！")}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"software"},[a("div",{staticClass:"pageTop searchPart"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("版本号：")]),e._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"请输入版本号",clearable:"",id:"searchVersion"},model:{value:e.input10,callback:function(t){e.input10=t},expression:"input10"}}),e._v(" "),e._m(0)],1),e._v(" "),a("div",{staticClass:"changeSheet"},[a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-circle-plus"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v(" 添加")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v(" 修改")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.deleteSelect()}}},[e._v(" 删除")])],1),e._v(" "),a("div",{staticClass:"sheetPart"},[[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateInfo",label:"更新信息",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"URLaddress",label:"更新URL","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"forceUpdate",label:"是否强制更新","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"resource",label:"应用来源","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creatDate",label:"创建日期",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDate",label:"更新日期",sortable:"","show-overflow-tooltip":""}})],1)],e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage3=t}}})],2),e._v(" "),a("el-dialog",{attrs:{title:"软件版本管理",visible:e.dialogFormVisible,width:"40%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"版本号：","label-width":e.formLabelWidth}},[a("el-input",{staticStyle:{width:"250px"},attrs:{"auto-complete":"off",placeholder:"请输入版本号"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"更新URL：","label-width":e.formLabelWidth}},[a("el-input",{staticStyle:{width:"250px"},attrs:{"auto-complete":"off",placeholder:"请输入URL"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"强制更新：","label-width":e.formLabelWidth}},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("否")])],1),e._v(" "),a("el-form-item",{attrs:{label:"强制退出：","label-width":e.formLabelWidth}},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("否")])],1),e._v(" "),a("el-form-item",{attrs:{label:"应用来源：","label-width":e.formLabelWidth}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"更新信息：","label-width":e.formLabelWidth}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"请输入更新信息",rows:"5"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"删除",visible:e.dialogDeleteVisible,width:"25%"},on:{"update:visible":function(t){e.dialogDeleteVisible=t}}},[a("span",[e._v("是否确认删除")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.dialogDeleteVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){e.dialogDeleteVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn pinanBtnTheme",staticStyle:{"vertical-align":"top"}},[t("i",{staticClass:"el-icon-search"}),this._v(" 查询")])}]};var m=a("VU/8")(p,h,!1,function(e){a("m+1N")},"data-v-43203788",null).exports,v={data:function(){return{loading:!0,tableData3:[{version:"3.0.7",updateInfo:"测试",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"ANDROID",creatDate:"2017/05/16",updateDate:"2017/05/16"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"ANDROID",creatDate:"2016/05/24",updateDate:"2016/05/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"IOS",creatDate:"2016/04/06",updateDate:"2016/04/06"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/10/15",updateDate:"2015/10/15"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"IOS",creatDate:"2015/08/18",updateDate:"2015/08/18"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"N",resource:"ANDROID",creatDate:"2015/08/17",updateDate:"2015/08/17"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"},{version:"3.0.7",updateInfo:"王小虎",URLaddress:"https://www.baidu.com",forceUpdate:"Y",resource:"ANDROID",creatDate:"2015/03/24",updateDate:"2015/03/24"}],options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",value6:"",multipleSelection:[],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;e.loading=!0,this.timer=setTimeout(function(){e.loading=!1},800)},handleSizeChange:function(e){console.log("每页 ${val} 条")},handleCurrentChange:function(e){console.log("当前页: ${val}")}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"feedback"},[a("div",{staticClass:"pageTop clearfix"},[a("div",{staticClass:"datepicker"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("日期范围：")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"250px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),e._v(" "),a("div",{staticClass:"selector"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("客户端：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),e._m(0)],1),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"sheetPart"},[[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateInfo",label:"更新信息",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"URLaddress",label:"更新URL","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"forceUpdate",label:"是否强制更新","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"resource",label:"应用来源","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creatDate",label:"创建日期",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDate",label:"更新日期",sortable:"","show-overflow-tooltip":""}})],1)],e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage3=t}}})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn",staticStyle:{"margin-left":"10px"}},[t("i",{staticClass:"el-icon-search",staticStyle:{color:"#fff"}}),this._v(" 查询")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"export"},[t("button",{staticClass:"searchBtn"},[t("i",{staticClass:"el-icon-download",staticStyle:{color:"#fff"}}),this._v(" 导出excel")])])}]};var b=a("VU/8")(v,f,!1,function(e){a("dfOd")},null,null).exports,_={data:function(){return{num8:1,input10:"",loading:!0,tableData3:[],currentPage3:5}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;e.loading=!0,this.timer=setTimeout(function(){e.loading=!1},1e3)},handleChange:function(e){console.log(e)},handleSizeChange:function(e){console.log("每页 ${val} 条")},handleCurrentChange:function(e){console.log("当前页: ${val}")}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"airHelp"},[a("div",{staticClass:"pageTop searchPart clearfix"},[a("div",{staticClass:"numSelect"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("问题序号：")]),e._v(" "),a("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},on:{change:e.handleChange},model:{value:e.num8,callback:function(t){e.num8=t},expression:"num8"}})],1),e._v(" "),a("div",{staticClass:"selector"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("内容：")]),e._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"请输入查询内容",clearable:"",id:"searchVersion"},model:{value:e.input10,callback:function(t){e.input10=t},expression:"input10"}}),e._v(" "),e._m(0)],1)]),e._v(" "),a("div",{staticClass:"changeSheet"},[a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-circle-plus"}},[e._v(" 添加")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-edit-outline"}},[e._v(" 修改")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-delete"}},[e._v(" 删除")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-download"}},[e._v(" 导出")])],1),e._v(" "),a("div",{staticClass:"sheetPart"},[[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"问题类别",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateInfo",label:"问题概述",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"URLaddress",label:"问题详情","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"forceUpdate",label:"问题答案","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"resource",label:"问题序号","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creater",label:"创建人",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creatDate",label:"创建时间",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updater",label:"更新人",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDate",label:"更新时间",sortable:"","show-overflow-tooltip":""}})],1)],e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage3=t}}})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn",staticStyle:{"vertical-align":"top"}},[t("i",{staticClass:"el-icon-search",staticStyle:{color:"#fff"}}),this._v(" 查询")])}]};var x=a("VU/8")(_,g,!1,function(e){a("0DyF")},null,null).exports,w={data:function(){return{num8:1,input10:"",loading:!0,tableData3:[],currentPage3:5}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;e.loading=!0,this.timer=setTimeout(function(){e.loading=!1},1e3)},handleChange:function(e){console.log(e)},handleSizeChange:function(e){console.log("每页 ${val} 条")},handleCurrentChange:function(e){console.log("当前页: ${val}")}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"groundHelp"},[a("div",{staticClass:"pageTop searchPart clearfix"},[a("div",{staticClass:"numSelect"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("问题序号：")]),e._v(" "),a("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},on:{change:e.handleChange},model:{value:e.num8,callback:function(t){e.num8=t},expression:"num8"}})],1),e._v(" "),a("div",{staticClass:"selector"},[a("label",{staticClass:"labelTitle",attrs:{for:"searchVersion"}},[e._v("内容：")]),e._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"请输入查询内容",clearable:"",id:"searchVersion"},model:{value:e.input10,callback:function(t){e.input10=t},expression:"input10"}}),e._v(" "),e._m(0)],1)]),e._v(" "),a("div",{staticClass:"changeSheet"},[a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-circle-plus"}},[e._v(" 添加")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-edit-outline"}},[e._v(" 修改")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-delete"}},[e._v(" 删除")]),e._v(" "),a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-download"}},[e._v(" 导出")])],1),e._v(" "),a("div",{staticClass:"sheetPart"},[[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"问题类别",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateInfo",label:"问题概述",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"URLaddress",label:"问题详情","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"forceUpdate",label:"问题答案","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"resource",label:"问题序号",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creater",label:"创建人","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creatDate",label:"创建时间",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updater",label:"更新人","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDate",label:"更新时间",sortable:"","show-overflow-tooltip":""}})],1)],e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage3=t}}})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn",staticStyle:{"vertical-align":"top"}},[t("i",{staticClass:"el-icon-search",staticStyle:{color:"#fff"}}),this._v(" 查询")])}]};var D=a("VU/8")(w,C,!1,function(e){a("wgB2")},"data-v-421f676a",null).exports,y={data:function(){return{tableData3:[],currentPage3:1,value:"",input10:"",loading:!0}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;e.loading=!0,this.timer=setTimeout(function(){e.loading=!1},500)},handleSizeChange:function(e){console.log("每页 ${val} 条")},handleCurrentChange:function(e){console.log("当前页: ${val}")},handleSelectionChange:function(e){this.multipleSelection=e}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"alertModal"},[a("div",{staticClass:"pageTop searchPart"},[a("label",{staticClass:"labelTitle",attrs:{for:"custmor"}},[e._v("试用客户端：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择",id:"custmor"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("el-option",{attrs:{value:"0"}},[e._v("全部")]),e._v(" "),a("el-option",{attrs:{value:"1"}},[e._v("空中端")]),e._v(" "),a("el-option",{attrs:{value:"2"}},[e._v("地面端")])],1),e._v(" "),a("label",{staticClass:"labelTitle",staticStyle:{"margin-left":"10px"},attrs:{for:"searchVersion"}},[e._v("关键词：")]),e._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"请输入关键词",clearable:"",id:"searchVersion"},model:{value:e.input10,callback:function(t){e.input10=t},expression:"input10"}}),e._v(" "),e._m(0)],1),e._v(" "),a("div",{staticClass:"changeSheet"},[a("button",{staticClass:"searchBtn",on:{click:function(t){e.dialogFormVisible=!0}}},[a("i",{staticClass:"el-icon-circle-plus"}),e._v(" 添加")]),e._v(" "),a("button",{staticClass:"searchBtn",on:{click:function(t){e.dialogFormVisible=!0}}},[a("i",{staticClass:"el-icon-edit-outline"}),e._v(" 修改")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),a("div",{staticClass:"sheetPart"},[[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateInfo",label:"更新信息",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"URLaddress",label:"更新URL","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"forceUpdate",label:"是否强制更新","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"resource",label:"应用来源","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"creatDate",label:"创建日期",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDate",label:"更新日期",sortable:"","show-overflow-tooltip":""}})],1)],e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage3=t}}})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn"},[t("i",{staticClass:"el-icon-search",staticStyle:{color:"#fff"}}),this._v(" 查询")])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn"},[t("i",{staticClass:"el-icon-delete"}),this._v(" 删除")])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn"},[t("i",{staticClass:"el-icon-error"}),this._v(" 失效")])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"searchBtn"},[t("i",{staticClass:"el-icon-success"}),this._v(" 有效")])}]};var U=a("VU/8")(y,S,!1,function(e){a("e/qU")},"data-v-8a32a71e",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("启动页管理")])])}]},$=a("VU/8")({},R,!1,null,null,null).exports,I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("坐席外呼权限管理")])])}]},V=a("VU/8")({},I,!1,null,null,null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("坐席ITS端CTI登录号管理")])])}]},T=a("VU/8")({},E,!1,null,null,null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("坐席订单管理")])])}]},A=a("VU/8")({},F,!1,null,null,null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("协销非车订单查询")])])}]},P=a("VU/8")({},L,!1,null,null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("坐席车险订单查询")])])}]},O=a("VU/8")({},k,!1,null,null,null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("数据管理")])])}]},z=a("VU/8")({},N,!1,null,null,null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("坐席客户端信息查看")])])}]},M=a("VU/8")({},B,!1,null,null,null).exports,H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("一键续保订单查询")])])}]},Y=a("VU/8")({},H,!1,null,null,null).exports,X={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("区域管理")])])}]},j=a("VU/8")({},X,!1,null,null,null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("营业区管理")])])}]},q=a("VU/8")({},W,!1,null,null,null).exports,J={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("营业部管理")])])}]},G=a("VU/8")({},J,!1,null,null,null).exports,K={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("团队管理")])])}]},Q=a("VU/8")({},K,!1,null,null,null).exports,Z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("坐席管理")])])}]},ee=a("VU/8")({},Z,!1,null,null,null).exports;l.default.use(r.a);var te=new r.a({routes:[{name:"",path:"/",component:d,children:[{meta:{title:"应用软件版本管理"},name:"",path:"/SoftwareVersion",component:m},{meta:{title:"用户反馈信息查询"},name:"",path:"/UserFeedback",component:b},{meta:{title:"空中帮助信息管理"},name:"",path:"/AirHelp",component:x},{meta:{title:"地面帮助信息管理"},name:"",path:"/GroundHelp",component:D},{meta:{title:"弹框管理"},name:"",path:"/AlertModal",component:U},{meta:{title:"启动页管理"},name:"",path:"/RunPage",component:$},{meta:{title:"坐席外呼权限管理"},name:"",path:"/AirCallPower",component:V},{meta:{title:"坐席ITS端CTI登录号管理"},name:"",path:"/AirITSCTI",component:T},{meta:{title:"坐席订单管理"},name:"",path:"/AirOrder",component:A},{meta:{title:"协销非车订单查询"},name:"",path:"/XieXiaoOrder",component:P},{meta:{title:"坐席车险订单查询"},name:"",path:"/AirInsuranceOrder",component:O},{meta:{title:"数据管理"},name:"",path:"/AirDataManager",component:z},{meta:{title:"坐席客户端信息查看"},name:"",path:"/AirCustomerInfo",component:M},{meta:{title:"一键续保订单查询"},name:"",path:"/OneKeyRenewal",component:Y},{meta:{title:"区域管理"},name:"",path:"/AreaManage",component:j},{meta:{title:"营业区管理"},name:"",path:"/BusinessArea",component:q},{meta:{title:"营业部管理"},name:"",path:"/BusinessPart",component:G},{meta:{title:"团队管理"},name:"",path:"/TeamManage",component:Q},{meta:{title:"坐席管理"},name:"",path:"/AirCallManage",component:ee},{meta:{title:"用户反馈信息查询"},name:"",path:"/*",component:m}]}]});te.beforeEach(function(e,t,a){e.meta.title&&(document.title=e.meta.title),a()});var ae=a("NYxO");l.default.use(ae.a);var le=new ae.a.Store({state:{menuDatas:[{label:"应用软件版本管理",idx:"SoftwareVersion"},{label:"用户反馈信息查询",idx:"UserFeedback"},{label:"空中帮助信息管理",idx:"AirHelp"},{label:"地面帮助信息管理",idx:"GroundHelp"},{label:"弹框管理",idx:"AlertModal"},{label:"启动页管理",idx:"RunPage"},{label:"空中坐席管理",idx:"7",children:[{label:"组织架构管理",idx:"7-1",children:[{label:"区域管理",idx:"AreaManage"},{label:"营业区管理",idx:"BusinessArea"},{label:"营业部管理",idx:"BusinessPart"},{label:"团队管理",idx:"TeamManage"},{label:"坐席管理",idx:"AirCallManage"}]},{label:"坐席外呼权限管理",idx:"AirCallPower"},{label:"坐席ITS端CTI登录号管理",idx:"AirITSCTI"},{label:"坐席活跃度报表",idx:"7-4",children:[{label:"活跃度查询",idx:"7-4-1"},{label:"登录明细查询",idx:"7-4-2"},{label:"业务数据汇总",idx:"7-4-3"},{label:"投保单明细查询",idx:"7-4-4"},{label:"投保单汇总查询",idx:"7-4-5"},{label:"消息查询",idx:"7-4-6"},{label:"意财险数据查询",idx:"7-4-7"},{label:"健康险数据查询",idx:"7-4-8"}]},{label:"快捷回复管理",idx:"7-5",children:[{label:"快捷回复模板消息管理",idx:"7-5-1"},{label:"快捷回复模板类型管理",idx:"7-5-2"},{label:"图文消息模板管理",idx:"7-5-3"}]},{label:"坐席数据检视报表",idx:"7-6",children:[{label:"年度总结数据",idx:"7-6-1"},{label:"数据检视周报表",idx:"7-6-2"},{label:"数据检视日报表",idx:"7-6-3"},{label:"行为分析报表",idx:"7-6-4"},{label:"好车主迁徙数据检视",idx:"7-6-5"},{label:"外呼信息",idx:"7-6-6"}]},{label:"坐席活动管理",idx:"7-7",children:[{label:"流量券",idx:"7-7-1"},{label:"Banner管理(空中坐席)",idx:"7-7-2"},{label:"话费券",idx:"7-7-3"},{label:"京东券",idx:"7-7-4"},{label:"中奖信息",idx:"7-7-5"},{label:"领取话费券信息",idx:"7-7-6"},{label:"抽奖信息汇总",idx:"7-7-7"},{label:"积分来源信息",idx:"7-7-8"},{label:"积分信息汇总",idx:"7-7-9"},{label:"获取积分明细",idx:"7-7-10"},{label:"使用积分明细",idx:"7-7-11"}]},{label:"坐席订单管理",idx:"AirOrder"},{label:"协销非车订单查询",idx:"XieXiaoOrder"},{label:"坐席车险订单查询",idx:"AirInsuranceOrder"},{label:"数据管理",idx:"AirDataManager"},{label:"坐席客户端信息查看",idx:"AirCustomerInfo"},{label:"一键续保订单查询",idx:"OneKeyRenewal"}]},{label:"地面业务员管理",idx:"8",children:[{label:"业务员信息管理",idx:"8-1"},{label:"续保管理人员信息",idx:"8-2"},{label:"转新名单跟踪权限配置",idx:"8-3"},{label:"困难件分配查询",idx:"8-4"},{label:"业务员订单管理",idx:"8-5"},{label:"困难件跟踪数据提取",idx:"8-6"},{label:"飞车产品配置",idx:"8-7"},{label:"业务员活动管理",idx:"8-8",children:[{label:"流量券",idx:"8-8-1"},{label:"Banner管理(地面业务员)",idx:"8-8-2"},{label:"话费券",idx:"8-8-3"},{label:"中奖信息",idx:"8-8-4"},{label:"领取话费券信息",idx:"8-8-5"},{label:"抽奖信息汇总",idx:"8-8-6"}]},{label:"营销软文管理",idx:"8-9"},{label:"专家信息管理",idx:"8-10"},{label:"业务员数据检视报表",idx:"8-11",children:[{label:"续报名单跟踪数据提取",idx:"8-11-1"}]},{label:"拜访签到管理",idx:"8-12"},{label:"业务员客户端信息查看",idx:"8-13"},{label:"车商网点信息",idx:"8-14"},{label:"业务员外呼权限管理",idx:"8-15"},{label:"新渠道困难件外呼权限管理",idx:"8-16"},{label:"外呼WX管理",idx:"8-17"},{label:"飞车订单数据提取",idx:"8-18"},{label:"客户端信息回补管理",idx:"8-19"},{label:"IMCS订单管理",idx:"8-20"}]},{label:"任务管理",idx:"9",children:[{label:"问卷管理",idx:"9-1",children:[{label:"问卷管理",idx:"9-1-1"},{label:"问卷数据",idx:"9-1-2"}]}]}]},mutations:{},getters:{},actions:{}}),ie=a("zzYx"),ne=a.n(ie),re=a("zL8q"),oe=a.n(re);a("Xcu2");l.default.use(ne.a),l.default.use(oe.a),l.default.config.productionTip=!1;t.default=new l.default({el:"#app",router:te,store:le,render:function(e){return e(n)}});te.push("/SoftwareVersion")},Xcu2:function(e,t){},dfOd:function(e,t){},"e/qU":function(e,t){},hRjt:function(e,t){},kr5Q:function(e,t){},"m+1N":function(e,t){},wgB2:function(e,t){},zzYx:function(e,t){!function(e,t){var a,l=e.document,i=l.documentElement,n=l.querySelector('meta[name="viewport"]'),r=l.querySelector('meta[name="flexible"]'),o=0,s=0,c=t.flexible||(t.flexible={});if(n){console.warn("将根据已有的meta标签来设置缩放比例");var u=n.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(s=parseFloat(u[1]),o=parseInt(1/s))}else if(r){var d=r.getAttribute("content");if(d){var p=d.match(/initial\-dpr=([\d\.]+)/),h=d.match(/maximum\-dpr=([\d\.]+)/);p&&(o=parseFloat(p[1]),s=parseFloat((1/o).toFixed(2))),h&&(o=parseFloat(h[1]),s=parseFloat((1/o).toFixed(2)))}}if(!o&&!s){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;s=1/(o=m?v>=3&&(!o||o>=3)?3:v>=2&&(!o||o>=2)?2:1:1)}if(i.setAttribute("data-dpr",o),!n)if((n=l.createElement("meta")).setAttribute("name","viewport"),n.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(n);else{var f=l.createElement("div");f.appendChild(n),l.write(f.innerHTML)}function b(){var t=i.getBoundingClientRect().width;t/o>540&&(t=540*o);var a=t/10;i.style.fontSize=a+"px",c.rem=e.rem=a}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(b,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(b,300))},!1),"complete"===l.readyState?l.body.style.fontSize=12*o+"px":l.addEventListener("DOMContentLoaded",function(e){l.body.style.fontSize=12*o+"px"},!1),b(),c.dpr=e.dpr=o,c.refreshRem=b,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.fd73cf99dfafcea472e2.js.map