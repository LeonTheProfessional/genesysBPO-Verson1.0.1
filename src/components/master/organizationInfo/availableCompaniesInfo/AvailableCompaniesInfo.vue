<template>
  <div class="user-overview">
    <el-row :gutter="20">
      <el-col>
        <search-condition/>
      </el-col>
    </el-row>
    <el-row :class="'route-list-table-container'">
      <available-companies-table :companies="companies"/>
    </el-row>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/organizationInfo/availableCompaniesInfo/SearchCondition'
import AvailableCompaniesTable from '@/components/master/organizationInfo/availableCompaniesInfo/AvailableCompaniesTable'

export default {
  name: 'userOverview',
  data () {
    return {
      companies: [
        {
          companyCategoryName: '産廃収運業者',
          companyCode: 'C10001',
          companyName: 'Dancing Days',
          representativeName: 'mimimi',
          representativePhoneNo: '111-2222-5555',
          postalCode: '111-2222',
          address: '住所１住所２住所３住所４'
        }
      ]
    }
  },
  components: {
    SearchCondition,
    AvailableCompaniesTable
  }
}
</script>

<style scoped>

</style>
