<template>
  <div class="RouteConfirm">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/route/list" :menu-items="this.routeMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'ルート', key: 1}, {label:'ルート一括登録・更新・取消(産廃等)', key: 2}, {label:'ルート確認画面', key: 3, isBorder: true}]"
        />
      </el-header>
      <el-main>
        <the-route-confirm-table/>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TheRouteConfirmTable from '@/components/route/route/routeBatchOperation/TheRouteConfirmTable'

export default {
  name: 'routeConfirm',
  inject: ['routeMenu'],
  data () {
    return {
      masterRegistrationSheet: '',
      sheetName: '',
      operationType: ''
    }
  },
  components: {
    TheRouteConfirmTable
  }
}
</script>

<style scoped>

</style>
