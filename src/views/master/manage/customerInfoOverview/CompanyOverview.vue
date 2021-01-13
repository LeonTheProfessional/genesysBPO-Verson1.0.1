<template>
  <div class="company-overview">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/master/manage/company-overview/" :menu-items="this.masterMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'管理', key: 1}, {label:'事業者一覧', key: 2, isBorder: true}]"
        />
      </el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col :span="4">
            <the-tip-pad/>
          </el-col>
          <el-col :span="20">
            <search-condition/>
          </el-col>
        </el-row>
        <el-row>
          <the-companies-table/>
        </el-row>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/manage/customerInfoOverview/companyOverview/TheSearchCondition'
import TheTipPad from '@/components/master/manage/customerInfoOverview/companyOverview/TheTipPad'
import TheCompaniesTable from '@/components/master/manage/customerInfoOverview/companyOverview/TheCompaniesTable'

export default {
  name: 'CustomInfoOverview',
  inject: ['masterMenu'],
  data () {
    return {}
  },
  components: {
    SearchCondition,
    TheCompaniesTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
