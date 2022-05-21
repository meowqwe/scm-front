<template>
  <div>
    <div class="top">个人中心</div>
    <el-divider></el-divider>
    <div>
      <el-descriptions class="margin-top" title="物业信息" :column="3" :size="size" border>
      <template slot="extra">
        <el-button type="primary" size="small">缴费</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        user
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-house"></i>
          住户号
        </template>
        1
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-coin"></i>
          缴费金额
        </template>
        200
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          状态
        </template>
        <el-tag size="small">已缴费</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-time"></i>
          到期时间
        </template>
        2022/05/01
      </el-descriptions-item>
    </el-descriptions>
    </div>
    <div class="table">
      <el-descriptions class="margin-top" title="车位信息" :column="3" :size="size" border>
        <template slot="extra">
          <el-button type="primary" size="small">缴费</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          user
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-house"></i>
            车位号
          </template>
          1
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-coin"></i>
            缴费金额
          </template>
          200
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            状态
          </template>
          <el-tag size="small">已缴费</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-time"></i>
            到期时间
          </template>
          2022/05/01
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter'
}
</script>

<style scoped>
.top {
  font-size: 35px;
}
  .table {
    margin-top: 20px;
  }
</style>
