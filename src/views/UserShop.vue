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
      <div class="input">
        <el-select v-model="searchMap.class" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
          prop="shName"
          label="名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="shClass"
          label="类型"
          width="250">
        </el-table-column>
        <el-table-column
          prop="shDescription"
          label="描述">
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
  name: 'UserShop',
  created () {
    this.convert()
  },
  methods: {
    convert () {
      this.postRequest('/shop/findAll', this.searchMap).then(resp => {
        if (resp) {
          const shops = resp.data.data
          this.tableData = shops
          this.total = resp.data.total
        }
      })
    },
    change () {
      this.searchMap.pageNum = this.pageNum.toString()
      this.convert()
    },
    select () {
      this.postRequest('/shop/search', this.searchMap).then(resp => {
        if (resp) {
          const shops = resp.data.data
          this.tableData = shops
          this.total = resp.data.total
        }
      })
    }
  },

  data () {
    return {
      input: '',
      tableData: [],
      searchMap: {
        name: '',
        class: '',
        pageSize: '5',
        pageNum: '1'
      },
      total: null,
      pageNum: null,
      options: [{
        value: '',
        label: '请选择'
      }, {
        value: '超市',
        label: '超市'
      }, {
        value: '餐饮',
        label: '餐饮'
      }, {
        value: '娱乐',
        label: '娱乐'
      }, {
        value: '生活',
        label: '生活'
      }, {
        value: '其他',
        label: '其他'
      }]
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
    margin-left: 10px;
    width: 50%;
  }
  .search {
    width: 40%;
    margin-left: 10px;
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
