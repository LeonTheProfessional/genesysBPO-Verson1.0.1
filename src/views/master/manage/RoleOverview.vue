<template>
  <div class="role-overview bpo-page">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/master/manage/role-overview/" :menu-items="this.masterMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'管理', key: 1}, {label:'ロール一覧', key: 2, isBorder: true}]"
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
          <the-role-list-table/>
        </el-row>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/manage/roleOverview/TheSearchCondition'
import TheRoleListTable from '@/components/master/manage/roleOverview/TheRoleListTable'
import TheTipPad from '@/components/master/manage/roleOverview/TheTipPad'

export default {
  name: 'RoleOverview',
  inject: ['masterMenu'],
  data () {
    return {}
  },
  components: {
    SearchCondition,
    TheRoleListTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
