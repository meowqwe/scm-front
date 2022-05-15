<template>
  <div>
    <div class="top">新建交易</div>
    <el-divider></el-divider>
    <div class="addForm">
      <el-form :rules="rules" ref="addForm" :model="addForm">
        <el-form-item prop="name">
          <el-input type="text" auto-complete="false" v-model="addForm.name" placeholder="物品名"></el-input>
        </el-form-item>
        <el-form-item prop="price">
          <el-input type="text" auto-complete="false" v-model="addForm.price" placeholder="物品价格"></el-input>
        </el-form-item>
        <el-form-item prop="quantity">
          <el-input type="text" auto-complete="false" v-model="addForm.quantity" placeholder="物品数量"></el-input>
        </el-form-item>
        <el-form-item prop="contact">
          <el-input type="text" auto-complete="false" v-model="addForm.contact" placeholder="联系方式"></el-input>
        </el-form-item>
        <div >
          <el-button type="primary" @click="submit" class="submit">确 定</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTrade',
  methods: {
    submit () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.postRequest('/trade/create', this.addForm).then(resp => {
            if (resp) {
            }
          })
        }
      })
    }
  },
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
        quantity: [{ required: true, message: '请输入数量', trigger: 'blur' }],
        contact: [{ required: true, message: '请输入联系方式', trigger: 'blur' }]
      },
      addForm: {
        name: '',
        price: '',
        quantity: '',
        contact: ''
      }
    }
  }

}
</script>

<style scoped>
  .top {
    margin-left: 10px;
    font-family: "PingFang SC";
    font-size: 20px;
    color: #303133;
  }
  .addForm {
    width: 30%;
    margin-left: 20px;
  }
</style>
