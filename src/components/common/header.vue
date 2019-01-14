<template>
  <div class="header pinganTheme clearfix">
    <h1 class="headerTitle">某某某管理系统</h1>
    <ul class="welcomeUser clearfix">
      <li class="welcomeItem userMessage"><span>欢迎您：XXX</span></li>
      <li class="welcomeItem logout"><button class="logout-btn">安全退出</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
.header {
  padding: 0 15px;
  line-height: 60px;
}
.headerTitle {
  float: left;
}
.welcomeUser {
   float: right;
   font-size: 14px;
}
.welcomeItem {
  float: left;
  margin-left: 15px;
  line-height: 60px;
}
.logout-btn {
  color: #fff;
}
</style>


