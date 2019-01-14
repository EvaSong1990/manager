<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
html,body,div,ul,li,select,option,p,button,h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  min-width: 1080px;
  font-size: 14px;
  color: #333;
}
a { text-decoration: none;color: #333; }
ul { list-style: none; }
button,input {
  outline: none;
  background-color: transparent;
  border: none;
}
.clearfix:after {
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden
}
::-webkit-scrollbar{width:8px;}
::-webkit-scrollbar-track{background-color:#ddd;}
::-webkit-scrollbar-thumb{background-color:#FFB224;border-radius: 5px;}
::-webkit-scrollbar-thumb:hover {background-color:orange}
::-webkit-scrollbar-thumb:active {background-color:orange}

#app { height: 100%; }
.form-control {
  min-width: 80px;
  min-height: 40px;
  border-radius: 4px;
  padding: 3px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  vertical-align: middle;
  box-sizing: border-box;
}
.form-control:focus { box-shadow: 0 0 5px orange; }
.searchBtn {
  font-size: 14px;
  padding: 5px 10px;
  color: #fff;
  height: 40px;
  border-radius: 6px;
  vertical-align: middle;
  background: -webkit-linear-gradient(bottom, #F37D27 0%, orange 100%);
}
.searchBtn:active{
  background-image: -webkit-linear-gradient(top, #F37D27 100%,orange 0%);
  box-shadow: 0 0 2px #F3774F inset;
}
.searchBtn:hover{
  color: #fff!important;
}
.pinganTheme { background-color: #f35927;color: #fff; }
.pinganFont { color: #f35927; }

.sheetPart {
  background-color: #fff;
}
.el-table {
  min-height: 450px;
}
.el-pagination{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 250px;
}
/* 弹框统一样式 */
.el-dialog {
  border-radius: 6px;
  overflow: hidden;
  /* min-width: 500px; */
}
.el-dialog__header {
  padding: 10px 20px;
  background-color: orange;
  color: #fff;
}
.el-dialog__title,.el-icon-close {
  color: #fff!important;
}
.el-dialog__headerbtn{
  top: 15px;
}
.el-form-item{
  margin-bottom: 10px;
}
</style>
