<template>
  <div class="TipPad">
    <el-row>
      <el-col :span="12"><span class="tip-pad-title">状態説明</span></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i class="circle"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>MF発行可</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i class="triangle"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>期限切れ間近</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i class="cross"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>MF発行不可</span>
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
.TipPad {
  min-height: 150px;
  padding-left: 20px;
  padding-top: 5px;
}

.el-row {
  margin-bottom: 10px;
}

.el-col span {
  font-size: small;
}

.circle:after {
  content: '○';
}

.triangle:after {
  content: '△';
}

.cross:after {
  content: '×';
}
</style>
