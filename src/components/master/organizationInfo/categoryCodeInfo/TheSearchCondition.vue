<template>
  <div class="search-condition condition-body">
    <el-row :gutter="20">
      <el-col :span="4"><span>廃棄物分類：</span></el-col>
      <el-col :span="8">
        <el-select
          v-model="wasteClassificationCode"
          size="mini"
          clearable>
        </el-select>
      </el-col>
      <el-col :span="4"><span>顧客分類コード：</span></el-col>
      <el-col :span="8">
        <el-input v-model="customerClassificationCode" size="mini" clearable/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><span>廃棄物小分類：</span></el-col>
      <el-col :span="8">
        <el-select
          v-model="wastSubclassCode"
          size="mini"
          clearable>
        </el-select>
      </el-col>
      <el-col :span="4"><span>排出物名称：</span></el-col>
      <el-col :span="8">
        <el-input v-model="emissionName" size="mini" clearable/>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="4"><span>排出物種別：</span></el-col>
      <el-col :span="8">
        <el-select
          v-model="emissionTypeCode"
          size="mini"
          clearable>
        </el-select>
        <el-checkbox label="特定産業廃棄物" style="margin-left: 10px" v-model="specifiedIndustrialWasteFlag"/>
      </el-col>
      <el-col :span="4"><span>JWNET分類コード：</span></el-col>
      <el-col :span="8">
        <el-input v-model="jwnetClassificationCode" size="mini" clearable/>
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
      emissionTypeCode: '2',
      specifiedIndustrialWasteFlag: false,
      wasteClassificationCode: '3',
      wastSubclassCode: '5',
      jwnetClassificationCode: '56',
      customerClassificationCode: '44',
      emissionName: ''
    }
  }
}
</script>

<style scoped>

</style>
