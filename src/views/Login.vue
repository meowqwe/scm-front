<template>
    <div>
      <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
        <h3 class="loginTitle">系统登录</h3>
        <el-form-item prop="username">
          <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="button" @click="submitLogin">登录</el-button>
          <el-button type="primary" class="button">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.postRequest('/scmuser/login', this.loginForm).then(resp => {
            if (resp) {
              this.loading = false
              const user = resp.data
              sessionStorage.setItem('user', JSON.toString(user))
              this.$router.replace('/home')
            }
          })
        } else {
          this.$message.error('请填写用户名和密码！')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #DCDFE6;
    box-shadow: 0 0 25px #cac6c6;
  }
  .button{
    width: 45%;
    margin-left: 10px;
  }
  .loginTitle{
    margin: 10px auto 20px auto;
    text-align: center;
  }
</style>
