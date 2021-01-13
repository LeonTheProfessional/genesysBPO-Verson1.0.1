<template>
  <div class="companies-table">
    <el-table
      :data="companies"
    >
      <el-table-column
        label="事業者コード"
        align="center"
        prop="companyCode"
        :min-width="200"/>
      <el-table-column
        label="事業者名称"
        align="center"
        prop="companyName"
        :min-width="220"/>
      <el-table-column
        label="所属組織"
        align="center"
        prop="organizationName"
        :min-width="200"/>
      <el-table-column
        label="所在地"
        align="center"
        prop="location"
        :min-width="500"/>
      <el-table-column
        label="事業場一覧"
        align="center"
        :width="100">
        <template v-slot="{row}">
          <el-button @click="handleClick(row)">選択</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="事業場一覧"
      :visible.sync="showPlantsOverview"
      width="1500px"
      class="bpo-dialog"
    >
      <plants-overview :company-id="plantsOverviewCompanyId"/>
    </el-dialog>
  </div>
</template>

<script>
import PlantsOverview from '@/components/route/manage/organizationInfo/plantsOverview/PlantsOverview'

export default {
  name: 'CompaniesTable',
  props: {
    companies: Array
  },
  methods: {
    handleClick ({ companyId }) {
      this.showPlantsOverview = true
      this.plantsOverviewCompanyId = companyId
    }
  },
  data () {
    return {
      plantsOverviewCompanyId: this.companies[0].companyId,
      showPlantsOverview: false
    }
  },
  components: { PlantsOverview }
}
</script>

<style scoped>

</style>
