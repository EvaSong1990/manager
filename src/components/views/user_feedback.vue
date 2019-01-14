<template>
  <div class="feedback" v-loading="loading">
    <div class="pageTop clearfix">
      <div class="datepicker">
        <label class="labelTitle" for="searchVersion">日期范围：</label>
        <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:250px"></el-date-picker>
      </div>
      <div class="selector">
        <label class="labelTitle" for="searchVersion">客户端：</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <button class="searchBtn" style="margin-left: 10px;"><i class="el-icon-search" style="color: #fff;"></i> 查询</button>
      </div>
      <div class="export">
        <button class="searchBtn"><i class="el-icon-download" style="color: #fff;"></i> 导出excel</button>
      </div> 
    </div>
    <div class="sheetPart">
      <template>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;">
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
  data () {
    return {
      loading: true,
      tableData3: [{
        version: '3.0.7',
        updateInfo: '测试',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'N',
        resource: 'ANDROID',
        creatDate: '2017/05/16',
        updateDate: '2017/05/16'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'N',
        resource: 'ANDROID',
        creatDate: '2016/05/24',
        updateDate: '2016/05/24'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'Y',
        resource: 'IOS',
        creatDate: '2016/04/06',
        updateDate: '2016/04/06'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'Y',
        resource: 'ANDROID',
        creatDate: '2015/10/15',
        updateDate: '2015/10/15'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'N',
        resource: 'IOS',
        creatDate: '2015/08/18',
        updateDate: '2015/08/18'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'N',
        resource: 'ANDROID',
        creatDate: '2015/08/17',
        updateDate: '2015/08/17'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'Y',
        resource: 'ANDROID',
        creatDate: '2015/03/24',
        updateDate: '2015/03/24'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'Y',
        resource: 'ANDROID',
        creatDate: '2015/03/24',
        updateDate: '2015/03/24'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'Y',
        resource: 'ANDROID',
        creatDate: '2015/03/24',
        updateDate: '2015/03/24'
      }, {
        version: '3.0.7',
        updateInfo: '王小虎',
        URLaddress: 'https://www.baidu.com',
        forceUpdate: 'Y',
        resource: 'ANDROID',
        creatDate: '2015/03/24',
        updateDate: '2015/03/24'
      }],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      value6: '',
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
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
      },800)
    },
    handleSizeChange(val) {
      console.log('每页 ${val} 条');
    },
    handleCurrentChange(val) {
      console.log('当前页: ${val}');
    }
  },
  beforeDestroy() {
    if(this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>
<style>
.pageTop {
  padding: 15px;
  background: -webkit-linear-gradient(#eee,#fff,#eee)!important;
}
.datepicker,.selector,.export {
  float: left;
  margin-right: 15px;
  line-height: 40px;
}
</style>
