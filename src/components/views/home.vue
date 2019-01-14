<template>
  <div class="home">
      <div class="page-header">
          <HeaderComponent></HeaderComponent>
      </div>
      <div class="page-content">
          <SiderComponent></SiderComponent>
          <div class="viewContent" ref="windowHeight">
              <router-view></router-view>
          </div>
      </div>
      <div class="page-footer">
        
      </div>
  </div>
</template>
<script>
import HeaderComponent from '../common/header'
import SiderComponent from '../common/sider'

export default {
  data () {
    return {

    }
  },
  components: {
    HeaderComponent,
    SiderComponent
  }
}
</script>
<style> 
.home,.page-content {
  height: 100%;
}
.page-header{
  width: 100%;
  min-width: 1080px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.page-content {
  padding-top: 60px;
  box-sizing: border-box;
}
.viewContent {
  height: 100%;
  overflow: auto;
  margin-left: 260px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #eee;
}
.pageTop .labelTitle {
  font-size: 14px;
}
</style>


