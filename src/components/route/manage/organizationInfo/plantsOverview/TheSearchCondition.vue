<template>
<div class="the-search-condition">
  <el-row :gutter="20">
    <el-col :span="4" :offset="1"><span>事業場名：</span></el-col>
    <el-col :span="5">
      <el-input
        size="mini"
        :clearable="true"
        v-model="plantName"
      />
    </el-col>
    <el-col :span="3">
      <el-checkbox
        size="mini"
        v-model="areaPlantFlag"
        label="都度指示"
      />
    </el-col>
    <el-col :span="4"><span>所在地：</span></el-col>
    <el-col :span="6">
      <el-input
        size="mini"
        :clearable="true"
        v-model="location"
      />
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="4" :offset="1"><span>代表者氏名：</span></el-col>
    <el-col :span="5">
      <el-input
        size="mini"
        :clearable="true"
        v-model="representativeName"
      />
    </el-col>
    <el-col :span="4" :offset="3"><span>事業場電話番号：</span></el-col>
    <el-col :span="6">
      <el-input
        size="mini"
        :clearable="true"
        v-model="plantPhoneNumber"
        placeholder=" (例) XX-XXXX-XXXX"
      />
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <!--    <el-col :span="4" :offset="1"><span>事業場ブロック：</span></el-col>-->
    <!--    <el-col :span="7">-->
    <!--      <el-input-->
    <!--        :clearable="true"-->
    <!--        v-model="companyBlock"-->
    <!--        size="mini"-->
    <!--        :readonly="true"-->
    <!--        class="el-input-mini-with-append-button"-->
    <!--      >-->
    <!--        <template v-slot:append>-->
    <!--          <el-button-->
    <!--            type="text"-->
    <!--            class="input-append-button-mini"-->
    <!--          >-->
    <!--            <span>設定</span>-->
    <!--          </el-button>-->
    <!--        </template>-->
    <!--      </el-input>-->
    <!--    </el-col>-->
    <el-col :span="4" :offset="1"><span>検索基準日：</span></el-col>
    <el-col :span="6">
      <el-date-picker
        v-model="searchReferenceDate"
        type="date"
        size="mini"
        :clearable="true"
        placeholder="日付を選択"
        value-format="yyyy-MM-dd"
        format="yyyy 年 MM 月 dd 日"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-col>
    <el-col :span="12">
      <el-button
        size="mini"
        type="primary"
        style="width: 150px;float: right"
      >
        <span>検索</span>
      </el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'TheSearchCondition',
  data () {
    return {
      companyBlock: 'BlockOne.',
      searchReferenceDate: '2020-12-07',
      plantName: '',
      areaPlantFlag: false,
      plantPhoneNumber: '',
      representativeName: '',
      location: '',
      pickerOptions: {
        shortcuts: [{
          text: '今日',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨日',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '1週間前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }, {
          text: '30日前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
