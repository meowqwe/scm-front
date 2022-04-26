<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']" @select="menuClick">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="1-1">用户信息</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>闲置交易</template>
          <el-menu-item index="1-1">信息审核</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>租房信息</template>
          <el-menu-item index="1-1">信息审核</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>社区常见问题</template>
          <el-menu-item index="/adminProblem">信息管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-setting"></i>社区服务</template>
          <el-menu-item index="1-1">服务管理</el-menu-item>
          <el-menu-item index="1-1">人员管理</el-menu-item>
          <el-menu-item index="1-1">关联管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="logOut">注销</el-dropdown-item>
            <el-dropdown-item >密码修改</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{user.name}}</span>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import { Message } from 'element-ui'

export default {
  name: 'Home',
  data () {
    return {
      user: {
        id: '',
        name: '',
        hid: '',
        admin: ''
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // {"uid":1,"uname":"admin","hid":1,"upassword":"123","uadmin":"1"}
    const session = JSON.parse(sessionStorage.getItem('user'))
    if (session.uadmin === '0') {
      next({ path: '/home' })
    }
    next(vm => {
      vm.user.id = session.uid
      vm.user.name = session.uname
      vm.user.hid = session.hid
      vm.user.admin = session.uadmin
      vm.$router.push('/mainPage')
    })
  },
  methods: {
    logOut () {
      Message.success('已注销！')
      this.$router.replace('/logout')
    },
    menuClick (index) {
      this.$router.push(index)
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
