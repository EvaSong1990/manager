<template>
  <div class="sider">
    <el-menu default-active="SoftwareVersion" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="changeMenu"
    background-color="#F2D0C5"
    text-color="#333"
    active-text-color="#f35927"
    active-background-color="#f35927" router style="height: 100%;">      
        <!-- 一级菜单 -->
        <template v-for="(menu,index) in $store.state.menuDatas">
            <el-menu-item :index="menu.idx" v-if="!menu.children" >
                <i class="el-icon-document"></i>
                <span slot="title">{{menu.label}}</span>
            </el-menu-item>
            <el-submenu class="level_one" :index="menu.idx" v-if="menu.children">
                <template slot="title">
                    <i class="el-icon-circle-plus"></i>
                    <span>{{menu.label}}</span>
                </template>
                <!-- 二级菜单 -->
                <template v-for="level_two_menu in menu.children">
                    <el-menu-item-group>
                        <el-menu-item :index="level_two_menu.idx" v-if="!level_two_menu.children">
                            <i class="el-icon-document"></i>
                            <span slot="title">{{level_two_menu.label}}</span>
                        </el-menu-item>
                        <el-submenu class="level_two" :index="level_two_menu.idx" v-if="level_two_menu.children">
                            <template slot="title">
                                <i class="el-icon-circle-plus"></i>
                                <span>{{level_two_menu.label}}</span>
                            </template>
                            <!-- 三级菜单 -->
                            <template v-for="level_three_menu in level_two_menu.children">
                                <el-menu-item-group>
                                    <el-menu-item :index="level_three_menu.idx" v-if="!level_three_menu.children">
                                        <i class="el-icon-document"></i>
                                        <span slot="title">{{level_three_menu.label}}</span>
                                    </el-menu-item>
                                    <el-submenu class="level_three" :index="level_three_menu.idx" v-if="level_three_menu.children">
                                        <template slot="title">
                                            <i class="el-icon-circle-plus"></i>
                                            <span>{{level_three_menu.label}}</span>
                                        </template>
                                    </el-submenu>
                                </el-menu-item-group>
                            </template>
                        </el-submenu>
                    </el-menu-item-group>
                </template>
            </el-submenu>
         </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrowType: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    },
    changeMenu(key, keyPath) {
        // 每次切换菜单,内容部分scrollTop初始化为0
        this.$parent.$refs.windowHeight.scrollTop = 0
    }
  }
}
</script>
<style>
.sider {
  width: 260px;
  height: 100%;
  overflow: auto;
  font-size: 14px;
  background-color: #fff;
  float: left;
  box-shadow: 2px 0 20px #666;
}
.el-menu-item.is-active {
    background-color: #C7522C!important;
    color: #fff!important;
}

</style>


