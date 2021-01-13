<template>
  <div class="search-condition condition-body">
    <el-row>
      <el-col>
        <span class="detail-sub-title">事業者情報:</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <span>事業者名称:</span>
      </el-col>
      <el-col :span="5">
        <span>{{ companyName }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">検索条件:</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><span>事業場コード：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="plantCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>事業場名：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="plantName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>事業場代表者氏名：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="plantRepresentativeName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><span>事業場電話番号：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="plantPhoneNumber"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>JWNET事業場区分：</span></el-col>
      <el-col :span="13">
        <el-checkbox-group v-model="jwnetPlantCategories" size="mini" multiple>
          <el-checkbox label="排出事業場" value="0"/>
          <el-checkbox label="積替・保管施設" value="1"/>
          <el-checkbox label="処分(中間)" value="2"/>
          <el-checkbox label="処分(最終)" value="3"/>
          <el-checkbox label="処分(中間+最終)" value="4"/>
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
      companyName: 'gajigaji事業場',
      jwnetPlantCategories: [],
      plantCode: '',
      plantName: '',
      plantRepresentativeName: '',
      plantPhoneNumber: ''
    }
  }
}
</script>

<style scoped>

</style>
