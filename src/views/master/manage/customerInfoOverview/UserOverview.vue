<template>
  <div class="custom-info-overview">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/master/manage/custom-info-overview/" :menu-items="this.masterMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'管理', key: 1}, {label:'顧客情報一覧', key: 2, isBorder: true}]"
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
          <the-custom-info-list-table/>
        </el-row>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/manage/customerInfoOverview/userOverview/TheSearchCondition'
import TheCustomInfoListTable from '@/components/master/manage/customerInfoOverview/userOverview/TheUsersTable'
import TheTipPad from '@/components/master/manage/customerInfoOverview/userOverview/TheTipPad'

export default {
  name: 'CustomInfoOverview',
  inject: ['masterMenu'],
  data () {
    return {}
  },
  components: {
    SearchCondition,
    TheCustomInfoListTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
