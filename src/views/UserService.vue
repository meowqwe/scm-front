<template>
  <div>
    <div class="top">
      <div class="input">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchMap.name">
        </el-input>
      </div>
      <div class="search">
        <el-button type="primary" icon="el-icon-search" @click="select">搜索</el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="sname"
          label="名称">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        page-size="5"
        @current-change="change"
        :current-page.sync="pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserService',
  created () {
    this.convert()
  },
  methods: {
    handleClick (row) {
      this.deleteMap = row
      this.confirmVisible = true
    },
    updateClick (row) {
      this.updateMap = row
      this.updateVisible = true
    },
    convert () {
      this.postRequest('/Service/findAll', this.searchMap).then(resp => {
        if (resp) {
          const users = resp.data.data
          this.tableData = users
          this.total = resp.data.total
        }
      })
    },
    change () {
      this.searchMap.pageNum = this.pageNum.toString()
      this.convert()
    },
    select () {
      this.postRequest('/Service/search', this.searchMap).then(resp => {
        if (resp) {
          const users = resp.data.data
          this.tableData = users
          this.total = resp.data.total
        }
      })
    },
    visit () {
      this.dialogVisible = true
    },
    confirm () {
      this.postRequest('/problem/deleteProblem', this.deleteMap).then(resp => {
        if (resp) {
          this.confirmVisible = false
          this.convert()
        }
      })
    }
  },

  data () {
    return {
      confirmVisible: false,
      updateVisible: false,
      dialogVisible: false,
      input: '',
      tableData: [],
      searchMap: {
        name: '',
        pageSize: '5',
        pageNum: '1'
      },
      deleteMap: {},
      updateMap: {},
      problemForm: {
        name: '',
        solution: ''
      },
      total: null,
      pageNum: null
    }
  }
}
</script>

<style scoped>
  .top {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
  }
  .input {
    width: 50%;
  }
  .search {
    width: 40%;
    margin-left: 20px;
  }
  .add {
    float: right;
  }
  .pages {
    margin-top: 20px;
    float: right;
  }
  .form {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 200px;
    top: 200px;
  }
  .cancel {
    margin-left: 200px;
  }
  .submit {
    margin-left: 10px;
  }
</style>
