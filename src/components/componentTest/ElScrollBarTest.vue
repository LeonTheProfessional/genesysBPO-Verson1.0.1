<template>
  <div style="height: 300px">
  <el-scrollbar :vertical="true" style="height: 300px;width: 100px">
    <ul style="height: 100%;">
      <li v-for="(item,index) in 100" :key="index"> {{ item+'fffffffffffffffffffffffffffffffffffffffffffffffffffff' }}</li>
    </ul>
  </el-scrollbar>
    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElScrollBarTest',
  data () {
    return {
      item: 'something',
      show3: true
    }
  }
}
</script>

<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
