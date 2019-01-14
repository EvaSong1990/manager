<template>
  <div class="groundHelp" v-loading="loading">
    <div class="pageTop searchPart clearfix">
      <div class="numSelect">
        <label class="labelTitle" for="searchVersion">问题序号：</label>
        <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      </div>
      <div class="selector">
        <label class="labelTitle" for="searchVersion">内容：</label>
        <el-input placeholder="请输入查询内容" v-model="input10" clearable id="searchVersion" style="width: 200px;margin-right: 10px;"></el-input>
        <button class="searchBtn" style="vertical-align: top;"><i class="el-icon-search" style="color: #fff;"></i> 查询</button>
      </div> 
    </div>  
    <div class="changeSheet">
      <el-button type="text" icon="el-icon-circle-plus" style="color: #666;"> 添加</el-button>
      <el-button type="text" icon="el-icon-edit-outline" style="color: #666;"> 修改</el-button>
      <el-button type="text" icon="el-icon-delete" style="color: #666;"> 删除</el-button>
      <el-button type="text" icon="el-icon-download" style="color: #666;"> 导出</el-button>
    </div>
    <div class="sheetPart">
      <template>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="version" label="问题类别" width="100"></el-table-column>
          <el-table-column prop="updateInfo" label="问题概述" width="100"></el-table-column>
          <el-table-column prop="URLaddress" label="问题详情" show-overflow-tooltip></el-table-column>
          <el-table-column prop="forceUpdate" label="问题答案" show-overflow-tooltip></el-table-column>
          <el-table-column prop="resource" label="问题序号" sortable show-overflow-tooltip></el-table-column>
          <el-table-column prop="creater" label="创建人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="creatDate" label="创建时间" sortable show-overflow-tooltip></el-table-column>
          <el-table-column prop="updater" label="更新人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="updateDate" label="更新时间" sortable show-overflow-tooltip></el-table-column>
        </el-table>
      </template>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num8: 1,
      input10: '',
      loading: true,
      tableData3: [],
      currentPage3: 5
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      var _this = this;
      _this.loading = true
      this.timer = setTimeout(function() {
        _this.loading = false
      },1000)
    },
    handleChange(value) {
      console.log(value)
    },
    handleSizeChange(val) {
      console.log('每页 ${val} 条')
    },
    handleCurrentChange(val) {
      console.log('当前页: ${val}')
    },
  },
  beforeDestroy() {
    if(this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>
<style scoped>
.numSelect,.selector,.edit {
  float: left;
  margin-right: 15px;
  line-height: 40px;
}
.searchPart {
  padding: 15px;
  border-bottom: 1px solid #ccc;
  background: -webkit-linear-gradient(#eee,#fff,#eee)!important;
}
.changeSheet{
  padding: 10px 15px;
  background: -webkit-linear-gradient(#eee,#fff,#eee)!important;
}
</style>
