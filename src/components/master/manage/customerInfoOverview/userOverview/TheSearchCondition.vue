<template>
  <div class="SearchCondition condition-body">
    <el-row :gutter="20">
      <el-col :span="3"><span>顧客コード：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="customerCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>顧客名称：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="customerName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>ユーザーID：</span></el-col>
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
      <el-col :span="3"><span>氏名：</span></el-col>
      <el-col :span="20">
        <el-checkbox-group v-model="characters" size="mini" multiple>
          <el-checkbox label="排出" value="0"/>
          <el-checkbox label="運搬" value="1"/>
          <el-checkbox label="処分" value="2"/>
          <el-checkbox label="行政" value="3"/>
        </el-checkbox-group>
      </el-col>
      <el-col :span="3"><span>電話番号：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="customerCode"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="3"><span>ＦＡＸ番号：</span></el-col>
      <el-col :span="5">
        <el-input
          v-model="customerName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3"><span>有効期間：</span></el-col>
      <el-col :span="20">
        <el-date-picker
          v-model="validityPeriod"
          type="daterange"
          size="mini"
          start-placeholder="開始日"
          end-placeholder="終了日"
        />
      </el-col>
      <el-col :span="3"><span>ステータス：</span></el-col>
      <el-col :span="5">
        <el-checkbox-group size="mini" v-model="validFlags">
          <el-checkbox label="0"><span>有効</span></el-checkbox>
          <el-checkbox label="1"><span>無効</span></el-checkbox>
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
      validFlags: [],
      validityPeriod: [],
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
