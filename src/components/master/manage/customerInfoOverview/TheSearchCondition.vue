<template>
  <div class="SearchCondition condition-body">
    <el-row :gutter="20">
      <el-col :span="3"><span>コード：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="customerCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>名称：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="customerName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>利用可能サービス：</span></el-col>
      <el-col :span="5">
        <el-select
          v-model="availableServiceCode"
          size="mini"
          clearable>
          <el-option label="system-00001" value="sys-001"/>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><span>キャラクター：</span></el-col>
      <el-col :span="20">
        <el-checkbox-group v-model="characters" size="mini" multiple>
          <el-checkbox label="排出" value="0"/>
          <el-checkbox label="運搬" value="1"/>
          <el-checkbox label="処分" value="2"/>
          <el-checkbox label="行政" value="3"/>
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
      customerCode: 'do',
      customerName: 'ri',
      characters: [],
      availableServiceCode: 'ser-0001'
    }
  }
}
</script>

<style scoped>
</style>
