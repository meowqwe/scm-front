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
      <div class="price">
        <el-input
          placeholder="请输入最低价格"
          prefix-icon="el-icon-coin"
          v-model="searchMap.startPrice">
        </el-input>
      </div>
      <div class="price">
        <el-input
          placeholder="请输入最高价格"
          prefix-icon="el-icon-coin"
          v-model="searchMap.endPrice">
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
          prop="tname"
          label="名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="tquantity"
          label="数量"
          width="50">
        </el-table-column>
        <el-table-column
          prop="tprice"
          label="价格"
          width="50">
        </el-table-column>
        <el-table-column
          prop="tcontact"
          label="商品描述">
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
    <div class="form">
      <el-dialog title="交易信息" :visible.sync="desVisible" width="50%">
        <el-descriptions>
          <el-descriptions-item label="商品名">{{row.tname}}</el-descriptions-item>
          <el-descriptions-item label="商品数量">{{row.tquantity}}</el-descriptions-item>
          <el-descriptions-item label="商品价格">{{row.tprice}}</el-descriptions-item>
          <el-descriptions-item label="商品描述">{{row.tcontact}}</el-descriptions-item>
          <el-descriptions-item label="联系方式">123-4567-7654</el-descriptions-item>
        </el-descriptions>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trade',
  created () {
    this.convert()
  },
  methods: {
    handleClick (row) {
      this.desVisible = true
      this.row = row
    },
    convert () {
      this.postRequest('/trade/findAll', this.searchMap).then(resp => {
        if (resp) {
          const trades = resp.data.data
          this.tableData = trades
          this.total = resp.data.total
        }
      })
    },
    change () {
      this.searchMap.pageNum = this.pageNum.toString()
      this.convert()
    },
    select () {
      this.postRequest('/trade/search', this.searchMap).then(resp => {
        if (resp) {
          const trades = resp.data.data
          this.tableData = trades
          this.total = resp.data.total
        }
      })
    },
    visit () {
      this.desVisible = true
    }
  },

  data () {
    return {
      desVisible: false,
      input: '',
      tableData: [],
      searchMap: {
        name: '',
        pageSize: '5',
        pageNum: '1',
        startPrice: '',
        endPrice: ''
      },
      row: {},
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
  .price {
    width: 30%;
    margin-left: 20px;
  }
  .input {
    width: 40%;
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
