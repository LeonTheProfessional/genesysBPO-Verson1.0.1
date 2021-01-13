<template>
  <div class="search-condition condition-body">
    <el-row>
      <el-col :span="3"><span class="search-condition-title">検索条件</span></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>コード：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="serviceCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4" :offset="1"><span>名称：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="serviceName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>備考：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="remark"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :offset="9" :span="4">
        <el-button type="primary" size="mini" style="width: 100px">
          <span>検索</span>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SearchCondition',
  data () {
    return {
      serviceCode: '',
      serviceName: '',
      remark: ''
    }
  }
}
</script>

<style scoped>

</style>
