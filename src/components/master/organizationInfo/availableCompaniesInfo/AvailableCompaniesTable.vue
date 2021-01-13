<template>
  <div class="available-companies-table">
    <el-row type="flex" align="bottom" justify="end">
      <el-col :span="8">
        <el-button type="warning" style="width: 100px;float: left;margin: 20px 0 20px 0">
          <span>追加</span>
        </el-button>
      </el-col>
      <el-col :span="16">
        <el-pagination
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          :background="true"
          :style="{'margin-right': '20px',float: 'right'}"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      :data="companies"
    >
      <el-table-column
        align="center"
        :width="80"
      >
        <template v-slot>
          <el-button type="text">削除</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="業者区分"
        align="center"
        prop="companyCategoryName"
        :width="120"/>
      <el-table-column
        label="事業者コード"
        align="center"
        prop="companyCode"
        :min-width="180"/>
      <el-table-column
        label="事業者名"
        align="center"
        prop="companyName"
        :min-width="200"/>
      <el-table-column
        label="代表者氏名"
        align="center"
        prop="representativeName"
        :min-width="100"/>
      <el-table-column
        align="center"
        :width="100"
        prop="representativePhoneNo"
        label="代表者電話番号"
      />
      <el-table-column
        align="center"
        :width="80"
        prop="postalCode"
        label="郵便番号"
      />
      <el-table-column
        align="center"
        :min-width="220"
        prop="address"
        label="住所"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AvailableCompaniesTable',
  props: {
    companies: Array
  }
}
</script>

<style scoped>

</style>
