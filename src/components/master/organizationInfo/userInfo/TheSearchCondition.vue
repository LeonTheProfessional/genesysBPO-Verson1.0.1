<template>
  <div class="search-condition condition-body">
    <el-row :gutter="20">
      <el-col :span="4"><span>ユーザーID：</span></el-col>
      <el-col :span="8">
        <el-input
          v-model="userId"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4"><span>氏名：</span></el-col>
      <el-col :span="8">
        <el-input
          v-model="userName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><span>キャラクター：</span></el-col>
      <el-col :span="8">
        <el-checkbox-group v-model="characterCodeList" size="mini">
          <el-checkbox label="管理ユーザー" :value="1"/>
          <el-checkbox label="担当ユーザー" :value="2"/>
        </el-checkbox-group>
      </el-col>
      <el-col :span="4"><span>有効期間：</span></el-col>
      <el-col :span="8">
        <el-date-picker
          v-model="validityPeriod"
          type="daterange"
          size="mini"
          start-placeholder="開始日"
          end-placeholder="終了日"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><span>ステータス：</span></el-col>
      <el-col :span="8">
        <el-checkbox-group size="mini" v-model="statuses">
          <el-checkbox label="有効" :value="1"/>
          <el-checkbox label="無効" :value="2"/>
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
      statuses: [],
      userId: '',
      userName: '',
      characterCodeList: [],
      validityPeriod: null
    }
  }
}
</script>

<style scoped>
.el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--mini
{
  width: 300px;
  height: 30px;
}
</style>
