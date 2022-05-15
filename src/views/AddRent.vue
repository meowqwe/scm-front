<template>
  <div>
    <div class="top">新建租房信息</div>
    <el-divider></el-divider>
    <div class="addForm">
      <el-form :rules="rules" ref="addForm" :model="addForm">
        <el-form-item prop="price">
          <el-input type="text" auto-complete="false" v-model="addForm.price" placeholder="出租价格"></el-input>
        </el-form-item>
        <el-form-item prop="time">
          <el-date-picker
            v-model="addForm.time"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="description">
          <el-input type="text" auto-complete="false" v-model="addForm.description" placeholder="房屋描述"></el-input>
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
  name: 'AddRent',
  methods: {
    submit () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.postRequest('/rent/create', this.addForm).then(resp => {
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
        price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
        time: [{ required: true, message: '请输入时间', trigger: 'blur' }],
        description: [{ required: true, message: '请输入描述', trigger: 'blur' }],
        contact: [{ required: true, message: '请输入联系方式', trigger: 'blur' }]
      },
      addForm: {
        price: '',
        time: '',
        description: '',
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
    width: 19.5%;
    margin-left: 20px;
  }
</style>
