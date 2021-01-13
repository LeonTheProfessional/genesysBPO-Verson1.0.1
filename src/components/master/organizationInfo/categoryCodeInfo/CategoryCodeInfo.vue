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
    <el-row>
      <category-code-table/>
    </el-row>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/organizationInfo/categoryCodeInfo/TheSearchCondition'
import CategoryCodeTable from '@/components/master/organizationInfo/categoryCodeInfo/CategoryCodeTable'
import TheTipPad from '@/components/master/organizationInfo/categoryCodeInfo/TheTipPad'
export default {
  name: 'userOverview',
  components: {
    SearchCondition,
    CategoryCodeTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
