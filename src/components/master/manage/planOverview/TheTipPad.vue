<template>
  <div class="TipPad">
    <el-row>
      <el-col :span="12"><span class="tip-pad-title">凡例</span></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <el-image
          style="width: 22px; height:22px;"
          :src="require('@/assets/image/retouch_button.png')"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">···</span>
      </el-col>
      <el-col :span="15">
        <span>プランの修正</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <el-image
          style="width: 22px; height:22px;"
          :src="require('@/assets/image/cancel_button.png')"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">···</span>
      </el-col>
      <el-col :span="15">
        <span>プランの削除</span>
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
.tip-pad-title {
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.TipPad {
  border: 1px solid #DCDFE6;
  min-height: 150px;
  padding-left: 20px;
  padding-top: 5px;
}
.el-row{
  margin-bottom: 10px;
}
.el-col span {
  font-size: small;
}

.three-dots {
  font-weight: bolder;
}
</style>
