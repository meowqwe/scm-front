<template>
    <div>
      <div class="top">密码修改</div>
      <el-divider></el-divider>
      <div class="updateForm">
        <el-form :rules="rules" ref="updateForm" :model="updateForm">
          <el-form-item prop="oldPassword">
            <el-input type="text" auto-complete="false" v-model="updateForm.oldPassword" placeholder="旧密码"></el-input>
          </el-form-item>
          <el-form-item prop="newPassword">
            <el-input type="text" auto-complete="false" v-model="updateForm.newPassword" placeholder="新密码"></el-input>
          </el-form-item>
          <el-form-item prop="repeatPassword">
            <el-input type="text" auto-complete="false" v-model="updateForm.repeatPassword" placeholder="确认新密码"></el-input>
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
  name: 'PasswordUpdate',
  methods: {
    submit () {
      this.$refs.updateForm.validate((valid) => {
        if (valid) {
          this.postRequest('/scmuser/updatePassword', this.updateForm).then(resp => {
            if (resp) {
              const session = JSON.parse(sessionStorage.getItem('user'))
              session.upassword = this.updateForm.newPassword
              sessionStorage.setItem('user', session)
            }
          })
        }
      })
    }
  },
  data () {
    var newpwdmin = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else if (value !== this.updateForm.newPassword) {
        return callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        oldPassword: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
        newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
        repeatPassword: [{ required: true, validator: newpwdmin, trigger: 'blur' }]
      },
      updateForm: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
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
  .updateForm {
    width: 30%;
    margin-left: 20px;
  }
</style>
