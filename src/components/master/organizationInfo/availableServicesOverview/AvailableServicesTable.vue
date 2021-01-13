<template>
  <div class="available-services-table">
    <el-row type="flex" align="bottom" justify="end">
      <el-col :offset="8" :span="16">
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
      :data="users"
    >
      <el-table-column
        label="ユーザーID"
        align="center"
        prop="userId"
        :min-width="200"/>
      <el-table-column
        label="氏名"
        align="center"
        prop="userName"
        :min-width="220"/>
      <el-table-column
        label="キャラクター"
        align="center"
        prop="character"
        :min-width="200"/>
      <el-table-column
        label="有効期間"
        align="center"
        prop="validityPeriod"
        :min-width="300"/>
      <el-table-column
        align="center"
        :width="100"
        label="ステータス"
      >
        <template v-slot="{row}">
          <span>{{row.validFlag?'有効':'無効'}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AvailableServicesTable',
  props: {
    services: Array
  }
}
</script>

<style scoped>

</style>
