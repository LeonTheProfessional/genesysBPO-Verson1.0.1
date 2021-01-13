<template>
  <div class="RouteDetail">
    <el-container>
      <el-header height="180px">
        <BPOHeader :menu-items="this.routeMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[
            {label:'ルート', key: 1},
             {label:'ルート一覧', to:{ path: '/route/list' }, key: 2},
              {label:'ルート詳細', key: 3,isBorder: true}
              ]"/>
      </el-header>
      <el-main class="detail-main">
        <el-row>
          <el-col :span="4">
            <span class="detail-sub-title">
              基本情報
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <basic-info-in-table/>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <span class="detail-sub-title">
              排出・運搬・処分情報
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <company-info-in-table/>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <span class="detail-sub-title">
              管理情報
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <customer-info-in-table/>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <span class="detail-sub-title">
              費用管理
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <expense-management-info-in-table/>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import BasicInfoInTable from '@/components/route/route/detail/BasicInfoInTable'
import CompanyInfoInTable from '@/components/route/route/detail/CompanyInfoInTable'
import CustomerInfoInTable from '@/components/route/route/detail/CustomerInfoInTable'
import ExpenseManagementInfoInTable from '@/components/route/route/detail/ExpenseManagementInfoInTable'

export default {
  name: 'RouteDetail',
  inject: ['routeMenu'],
  data () {
    return {}
  },
  components: {
    BasicInfoInTable,
    CompanyInfoInTable,
    CustomerInfoInTable,
    ExpenseManagementInfoInTable
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 15px;
}
</style>
