<template>
  <div class="software" v-loading="loading" >
    <div class="pageTop searchPart">
      <label class="labelTitle" for="searchVersion">版本号：</label>
      <el-input placeholder="请输入版本号" v-model="input10" clearable id="searchVersion" style="width: 200px;margin-right: 10px;"></el-input>
      <button class="searchBtn pinanBtnTheme" style="vertical-align: top;"><i class="el-icon-search"></i> 查询</button>
    </div>
    <div class="changeSheet">
      <el-button type="text" @click="dialogFormVisible = true" icon="el-icon-circle-plus" style="color: #666"> 添加</el-button>
      <el-button type="text" @click="dialogFormVisible = true" icon="el-icon-edit-outline" style="color: #666"> 修改</el-button>
      <el-button type="text" @click="deleteSelect()" icon="el-icon-delete" style="color: #666"> 删除</el-button>
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
    <!-- 弹框 -->
    <el-dialog title="软件版本管理" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="版本号：" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" style="width: 250px" placeholder="请输入版本号"></el-input>
        </el-form-item>
        <el-form-item label="更新URL：" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" style="width: 250px" placeholder="请输入URL"></el-input>
        </el-form-item>
        <el-form-item label="强制更新：" :label-width="formLabelWidth">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="强制退出：" :label-width="formLabelWidth">
          <el-radio v-model="radio1" label="1">是</el-radio>
          <el-radio v-model="radio1" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="应用来源：" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 250px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="更新信息：" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc" placeholder="请输入更新信息" rows="5" style="width: 300px;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" type="primary" @click="dialogFormVisible = false">确 定</el-button>
        <el-button size="medium" @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 删除弹框 -->
    <el-dialog title="删除" :visible.sync="dialogDeleteVisible" width="25%">
      <span>是否确认删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogDeleteVisible = false">取 消</el-button>
        <el-button size="medium" type="primary" @click="dialogDeleteVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
      return {
        radio: '1',
        radio1: '1',
        loading: true,
        tableData3: [
          {version: '3.0.7',updateInfo: '测试',URLaddress: 'https://www.baidu.com',forceUpdate: 'N',resource: 'ANDROID',creatDate: '2017/05/16',updateDate: '2017/05/16'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'N',resource: 'ANDROID',creatDate: '2016/05/24',updateDate: '2016/05/24'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'Y',resource: 'IOS',creatDate: '2016/04/06',updateDate: '2016/04/06'}, 
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'Y',resource: 'ANDROID',creatDate: '2015/10/15',updateDate: '2015/10/15'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'N',resource: 'IOS',creatDate: '2015/08/18',updateDate: '2015/08/18'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'N',resource: 'ANDROID',creatDate: '2015/08/17',updateDate: '2015/08/17'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'Y',resource: 'ANDROID',creatDate: '2015/03/24',updateDate: '2015/03/24'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'Y',resource: 'ANDROID',reatDate: '2015/03/24',updateDate: '2015/03/24'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'Y',resource: 'ANDROID',creatDate: '2015/03/24',updateDate: '2015/03/24'},
          {version: '3.0.7',updateInfo: '王小虎',URLaddress: 'https://www.baidu.com',forceUpdate: 'Y',resource: 'ANDROID',creatDate: '2015/03/24',updateDate: '2015/03/24'}
        ],
        multipleSelection: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        input10: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogDeleteVisible: false,
        form: {name: '',region: '',date1: '',date2: '',delivery: false,type: [],resource: '',desc: ''},
        formLabelWidth: '120px'
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
      deleteSelect() {
        if(this.multipleSelection.length > 0) {
          this.dialogDeleteVisible = true;
        }else{
          this.$message.error('请选择要删除的数据！')
        }
      }
    },
    beforeDestroy() {
      if(this.timer) {
        clearTimeout(this.timer)
      }
    }
}
</script>
<style scoped>
.labelTitle {
  font-size: 14px;
}
.searchPart {
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;
  background: -webkit-linear-gradient(#eee,#fff,#eee)!important;
}
.changeSheet{
  padding: 10px 10px;
  background: -webkit-linear-gradient(#eee,#fff,#eee)!important;
}

</style>


