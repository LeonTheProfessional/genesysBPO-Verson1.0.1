<template>
  <div class="plants-overview">
    <el-row>
      <el-divider content-position="left">
        <span class="divider-text-left">事業者グループ</span>
      </el-divider>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5" :offset="1"><span style="font-weight: bolder">事業者名称：</span></el-col>
      <el-col :span="6">
        <span class="info-text-span">{{ companyName }}</span>
      </el-col>
<!--      <el-col :span="5" :offset="1"><span>事業者グループ名称：</span></el-col>-->
<!--      <el-col :span="6">-->
<!--        <span class="info-text-span">{{ companyGroupName }}</span>-->
<!--      </el-col>-->
    </el-row>
    <el-row>
      <el-col>
        <el-divider content-position="left">
          <span class="divider-text-left">検索条件</span>
        </el-divider>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <the-search-condition class="bpo-form"/>
      </el-col>
    </el-row>
    <el-row>
      <el-pagination
        :page-sizes="[20, 50, 100, 200]"
        :page-size="20"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="plants.length"
        style="float: right; margin: 15px 0 5px 0"
      />
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <el-card style="min-height: 200px">
          <plants-table
            :plants="plants"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TheSearchCondition from '@/components/route/manage/organizationInfo/plantsOverview/TheSearchCondition'
import PlantsTable from '@/components/route/manage/organizationInfo/plantsOverview/PlantsTable'

export default {
  name: 'PlantsOverview',
  props: {
    companyId: {
      required: true,
      type: [String, Number]
    }
  },
  data () {
    return {
      companyName: '徐燕紅排出事業者１',
      companyGroupName: '徐燕紅事業者グループ１',
      plants: [
        {
          plantCode: '2344',
          plantName: '徐燕紅排出事業场',
          areaFlag: true,
          validDateStart: '2020-01-02',
          validDateEnd: '2020-04-18',
          jwnetPlantTypeCode: 3,
          jwnetPlantInfos: [
            {
              jwnetPlantCategoryCode: 1,
              jwnetMemberNo: 'D105479',
              jwnetPublicPassword: 'pwd-p1424',
              ediPassword: '84151310'
            },
            {
              jwnetPlantCategoryCode: 2,
              jwnetMemberNo: 'D105479',
              jwnetPublicPassword: 'pwd-p1424',
              ediPassword: '84151310'
            },
            {
              jwnetPlantCategoryCode: 3,
              jwnetMemberNo: 'D105479',
              jwnetPublicPassword: 'pwd-p1424',
              ediPassword: '84151310'
            }
          ]
        },
        {
          plantCode: '2345',
          plantName: '徐燕紅排出事業场2',
          areaFlag: false,
          validDateStart: '2020-05-12',
          validDateEnd: '2020-11-30',
          jwnetPlantTypeCode: 1,
          jwnetPlantInfos: [
            {
              jwnetPlantCategoryCode: 1,
              jwnetMemberNo: 'D105479',
              jwnetPublicPassword: 'pwd-p1424',
              ediPassword: '84151310'
            }
          ]
        }
      ]
    }
  },
  components: {
    TheSearchCondition,
    PlantsTable
  }
}
</script>

<style scoped>

</style>
