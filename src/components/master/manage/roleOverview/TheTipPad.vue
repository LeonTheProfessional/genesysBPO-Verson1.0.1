<template>
  <div class="the-tip-pad">
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="2">
        <i class="el-icon-edit" style="color: #4ca4ff"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">···</span>
      </el-col>
      <el-col :span="10">
        <span>ロールの修正</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="2">
        <i class="el-icon-delete" style="color: #dc851f"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">···</span>
      </el-col>
      <el-col :span="10">
        <span>ロールの削除</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TipPad'
}
</script>

<style scoped>
</style>
