<template>
  <div class="customer-info-overview">
    <el-row :gutter="20">
      <el-col>
        <search-condition/>
      </el-col>
    </el-row>
    <el-row>
      <customer-info-table :companies="customerInfoList"/>
    </el-row>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/organizationInfo/customerInfoOverview/SearchCondition'
import CustomerInfoTable from '@/components/master/organizationInfo/customerInfoOverview/CustomerInfoTable'

export default {
  name: 'customerInfoOverview',
  data () {
    return {
      customerInfoList: [
        {
          companyCategoryName: '産廃収運業者',
          companyCode: 'C10001',
          companyName: 'Dancing Days',
          representativeName: 'mimimi',
          representativePhoneNo: '111-2222-5555',
          postalCode: '111-2222',
          address: '住所１住所２住所３住所４',
          userInChargeName: 'XXXXXX：〇〇〇'
        }
      ]
    }
  },
  components: {
    SearchCondition,
    CustomerInfoTable
  }
}
</script>

<style scoped>

</style>
