<template>
  <div class="service-overview">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/master/manage/service-overview/" :menu-items="this.masterMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'管理', key: 1}, {label:'サービス一覧', key: 2, isBorder: true}]"
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
          <the-service-list-table/>
        </el-row>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/manage/serviceOverview/TheSearchCondition'
import TheServiceListTable from '@/components/master/manage/serviceOverview/TheServiceListTable'
import TheTipPad from '@/components/master/manage/serviceOverview/TheTipPad'

export default {
  name: 'ServiceOverview',
  inject: ['masterMenu'],
  data () {
    return {}
  },
  components: {
    SearchCondition,
    TheServiceListTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
