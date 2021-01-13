<template>
  <div class="SearchCondition condition-body">
    <el-row :gutter="20">
      <el-col :span="3"><span>コード：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="systemCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>名称：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="systemName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>利用可能システム：</span></el-col>
      <el-col :span="5">
        <el-select
          v-model="availableSystemCode"
          size="mini"
          clearable>
          <el-option label="system-00001" value="sys-001"/>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><span>有効フラグ：</span></el-col>
      <el-col :span="5">
        <el-checkbox-group v-model="validFlags" size="mini" multiple>
          <el-checkbox label="有効" value="1"/>
          <el-checkbox label="無効" value="0"/>
        </el-checkbox-group>
      </el-col>
      <el-col :span="3"><span>備考：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="remark"
          size="mini"
          clearable>
        </el-input>
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
      systemCode: 'do',
      systemName: 'ri',
      representationName: 'mi',
      appUrl: 'fa',
      validFlags: [],
      remark: 'Backup',
      availableSystemCode: 'sys-0001'
    }
  }
}
</script>

<style scoped>
</style>
