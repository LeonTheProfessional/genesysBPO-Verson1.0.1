<template>
  <div class="plant-overview">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/menu/master/plant-overview" :menu-items="this.masterMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'管理', key: 1}, {label:'事業場一覧', key: 2, isBorder: true}]"
        />
      </el-header>
      <el-main style="padding-bottom: 40px">
        <el-row :gutter="10">
          <el-col :span="4">
            <the-tip-pad/>
          </el-col>
          <el-col :span="20">
            <search-condition/>
          </el-col>
        </el-row>
        <el-row>
          <the-plant-list-table/>
        </el-row>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/master/manage/plantOverview/TheSearchCondition'
import ThePlantListTable from '@/components/master/manage/plantOverview/ThePlantListTable'
import TheTipPad from '@/components/master/manage/plantOverview/TheTipPad'

export default {
  name: 'PlantOverview',
  inject: ['masterMenu'],
  components: {
    SearchCondition,
    ThePlantListTable,
    TheTipPad
  }
}
</script>

<style scoped>

</style>
