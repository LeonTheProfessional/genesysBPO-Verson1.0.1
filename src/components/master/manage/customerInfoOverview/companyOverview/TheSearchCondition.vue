<template>
  <div class="SearchCondition condition-body">
    <el-row :gutter="20">
      <el-col :span="3"><span>事業者コード：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="companyCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>事業者名：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="companyName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>所在地：</span></el-col>
      <el-col :span="5">
        <el-select
          v-model="address"
          size="mini"
          clearable>
          <el-option label="system-00001" value="sys-001"/>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3"><span>業者区分：</span></el-col>
      <el-col :span="20">
      <el-checkbox-group v-model="companyCategories" size="mini">
        <el-checkbox label="排出業者" value="0"/>
        <el-checkbox label="産廃収運業者" value="1"/>
        <el-checkbox label="産廃処分業者" value="2"/>
        <el-checkbox label="有価等収運業者" value="3"/>
        <el-checkbox label="有価等処分業者" value="4"/>
      </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row class="el-row" :gutter="20">
      <el-col class="search-condition-button-tray" :offset="20" :span="4">
        <el-button size="small" type="primary">検索</el-button>
        <el-button size="small" type="primary" plain>クリア</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SearchCondition',
  data () {
    return {
      companyCategories: [],
      companyCode: 'do',
      companyName: 'ri',
      address: 'ser-0001'
    }
  }
}
</script>

<style scoped>
</style>
