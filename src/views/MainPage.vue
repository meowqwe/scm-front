<template>
  <div>
    <div class="topic">欢迎</div>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  data () {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>

  .topic {
    margin-left: 20px;
  }
</style>
