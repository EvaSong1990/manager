<template>
  <div class="alertModal" v-loading="loading">
    <div class="pageTop searchPart">
      <label class="labelTitle" for="custmor">试用客户端：</label>
      <el-select v-model="value" placeholder="请选择" id="custmor">
        <el-option value="0">全部</el-option>
        <el-option value="1">空中端</el-option>
        <el-option value="2">地面端</el-option>
      </el-select>
      <label class="labelTitle" for="searchVersion" style="margin-left: 10px;">关键词：</label>
      <el-input placeholder="请输入关键词" v-model="input10" clearable id="searchVersion" style="width: 200px;margin-right: 10px;"></el-input>
      <button class="searchBtn"><i class="el-icon-search" style="color: #fff;"></i> 查询</button>
    </div>
    <div class="changeSheet">
      <button class="searchBtn" @click="dialogFormVisible = true"><i class="el-icon-circle-plus"></i> 添加</button>
      <button class="searchBtn" @click="dialogFormVisible = true"><i class="el-icon-edit-outline"></i> 修改</button>
      <button class="searchBtn"><i class="el-icon-delete"></i> 删除</button>
      <button class="searchBtn"><i class="el-icon-error"></i> 失效</button>
      <button class="searchBtn"><i class="el-icon-success"></i> 有效</button>
    </div>
    <div class="sheetPart">
      <template>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="version" label="版本号" width="120"></el-table-column>
          <el-table-column prop="updateInfo" label="更新信息" width="120"></el-table-column>
          <el-table-column prop="URLaddress" label="更新URL" show-overflow-tooltip></el-table-column>
          <el-table-column prop="forceUpdate" label="是否强制更新" show-overflow-tooltip></el-table-column>
          <el-table-column prop="resource" label="应用来源" show-overflow-tooltip></el-table-column>
          <el-table-column prop="creatDate" label="创建日期" sortable show-overflow-tooltip></el-table-column>
          <el-table-column prop="updateDate" label="更新日期" sortable show-overflow-tooltip></el-table-column>
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
  data() {
    return {
      tableData3: [],
      currentPage3: 1,
      value: '',
      input10: '',
      loading: true
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
      },500)
    },
    handleSizeChange(val) {
      console.log('每页 ${val} 条')
    },
    handleCurrentChange(val) {
      console.log('当前页: ${val}')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
  }
}
</script>
<style scoped>
.labelTitle {
  font-size: 14px;
}
.searchPart {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
.changeSheet{
  padding: 15px;
}

</style>