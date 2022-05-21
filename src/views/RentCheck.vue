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
          prop="rtime"
          label="租房时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="rprice"
          label="租房价格"
          width="200">
        </el-table-column>
        <el-table-column
          prop="rdescription"
          label="房屋描述">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row)" type="text" size="small">审核</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
    <div class="form">
      <el-dialog title="确定要删除吗？" :visible.sync="confirmVisible" width="30%">
        <el-button @click="confirmVisible = false" class="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm" class="submit">确 定</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RentCheck',
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
      this.postRequest('/rent/check', this.updateMap).then(resp => {
        if (resp) {
        }
      })
    },
    convert () {
      this.postRequest('/rent/findAll', this.searchMap).then(resp => {
        if (resp) {
          const rents = resp.data.data
          this.tableData = rents
          this.total = resp.data.total
        }
      })
    },
    change () {
      this.searchMap.pageNum = this.pageNum.toString()
      this.convert()
    },
    select () {
      this.postRequest('/rent/search', this.searchMap).then(resp => {
        if (resp) {
          const rents = resp.data.data
          this.tableData = rents
          this.total = resp.data.total
        }
      })
    },
    confirm () {
      this.postRequest('/rent/delete', this.deleteMap).then(resp => {
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
      input: '',
      tableData: [],
      searchMap: {
        name: '',
        pageSize: '5',
        pageNum: '1'
      },
      deleteMap: {},
      updateMap: {},
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
