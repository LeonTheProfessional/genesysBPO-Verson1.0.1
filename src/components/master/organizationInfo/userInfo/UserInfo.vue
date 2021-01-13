<template>
  <div class="user-overview">
    <el-row :gutter="20">
      <el-col :span="5">
        <the-tip-pad/>
      </el-col>
      <el-col :span="19">
        <search-condition/>
      </el-col>
    </el-row>
    <el-row :class="'route-list-table-container'">
      <users-table/>
    </el-row>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/organizationInfo/userInfo/TheSearchCondition'
import TheTipPad from '@/components/master/organizationInfo/userInfo/TheTipPad'
import UsersTable from '@/components/master/organizationInfo/userInfo/UsersTable'

export default {
  name: 'userOverview',
  components: {
    SearchCondition,
    TheTipPad,
    UsersTable
  }
}
</script>

<style scoped>

</style>
