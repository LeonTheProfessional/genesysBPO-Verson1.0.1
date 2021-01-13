<template>
  <div class="search-condition condition-body">
    <el-row>
      <el-col :span="3"><span class="search-condition-title">検索条件</span></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>業者区分：</span></el-col>
      <el-col :span="16">
        <el-checkbox-group
          v-model="companyCategories"
          size="mini"
          >
          <el-checkbox label="産廃収運業者" :value="1"/>
          <el-checkbox label="産廃処分業者" :value="2"/>
          <el-checkbox label="有価等収運業者" :value="3"/>
          <el-checkbox label="有価等処分業者" :value="4"/>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>事業者コード：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="companyCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4" :offset="1"><span>事業者名：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="companyName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>代表者氏名：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="representativeName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4" :offset="1"><span>代表者電話番号：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="representativePhoneNo"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>郵便番号：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="postalCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4" :offset="1"><span>住所：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="address"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="20" :span="4">
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
      companyCategories: [],
      companyCode: '',
      companyName: '',
      representativeName: '',
      representativePhoneNo: '',
      postalCode: '',
      address: ''
    }
  }
}
</script>

<style scoped>

</style>
