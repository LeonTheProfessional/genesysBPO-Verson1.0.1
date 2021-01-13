<template>
  <div class="TipPad">
    <el-row>
      <el-col :span="12"><span class="tip-pad-title">アラート説明</span></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i style="color: #8ea9db" class="el-icon-third-part-yk_fangkuai_fill"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>期限切れ１か月前</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i style="color: #a9d08e" class="el-icon-third-part-yk_fangkuai_fill"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>期限切れ3週間前</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i style="color: #ffc000" class="el-icon-third-part-yk_fangkuai_fill"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>期限切れ2週間前</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2" :offset="4">
        <i style="color: #ff99ff" class="el-icon-third-part-yk_fangkuai_fill"/>
      </el-col>
      <el-col :span="2">
        <span class="three-dots">...</span>
      </el-col>
      <el-col :span="15">
        <span>期限切れ1週間前</span>
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
.el-row{
  margin-bottom: 10px;
}
.el-col span {
  font-size: small;
}
</style>
