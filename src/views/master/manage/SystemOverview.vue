<template>
  <div class="system-overview">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/master/manage/system-overview/" :menu-items="this.masterMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'管理', key: 1}, {label:'システム一覧', key: 2, isBorder: true}]"
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
          <the-system-list-table/>
        </el-row>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/manage/systemOverview/TheSearchCondition'
import TheSystemListTable from '@/components/master/manage/systemOverview/TheSystemListTable'
import TheTipPad from '@/components/master/manage/systemOverview/TheTipPad'

export default {
  name: 'SystemOverview',
  inject: ['masterMenu'],
  data () {
    return {}
  },
  components: {
    SearchCondition,
    TheSystemListTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
