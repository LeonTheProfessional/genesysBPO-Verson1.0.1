<template>
  <div class="user-overview">
    <el-row :gutter="20">
      <el-col>
        <search-condition/>
      </el-col>
    </el-row>
    <el-row :class="'route-list-table-container'">
      <available-services-table :services="services"/>
    </el-row>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/organizationInfo/availableServicesOverview/SearchCondition'
import AvailableServicesTable from '@/components/master/organizationInfo/availableServicesOverview/AvailableServicesTable'

export default {
  name: 'userOverview',
  data () {
    return {
      services: [
        {
          serviceCode: 'SER001',
          serviceName: 'ルートサビース',
          remark: 'REMARK'
        }
      ]
    }
  },
  components: {
    SearchCondition,
    AvailableServicesTable
  }
}
</script>

<style scoped>

</style>
