<template>
  <div class="the-plan-list-table">
    <el-row type="flex" align="bottom">
      <el-col :span="4">
        <div class="button-above-table-container">
          <el-button
            type="warning"
            @click="createPlant"
          >新規登録
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" align="bottom" justify="end">
      <el-col :span="16">
        <el-pagination
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          :background="true"
          :style="{'margin-right': '20px',float: 'right'}"
          layout="total, sizes, prev, pager, next, jumper"
          :total="plants.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-row>
      <el-table border stripe :data="plants">
        <el-table-column
          :resizable="false"
          align="center"
          header-align="center"
          label="操作"
          width="100"
        >
          <template v-slot="{row}">
            <div class="operation-icon-tray">
              <el-button
                type="text"
                size="mini"
                style="color: #4ca4ff"
                icon="el-icon-edit"
                @click="modifyPlant(row.roleCode)"/>
              <el-button
                type="text"
                size="mini"
                style="color: #dc851f"
                icon="el-icon-delete"
                @click="deletePlant(row.roleCode)"/>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="事業場コード"
          align="center"
          prop="plantCode"
          min-width="150"
        >
          <template v-slot="{row}">
            <el-button
              type="text"
              @click="viewDetail(row.plantCode)">
              {{ row.plantCode }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="事業場名"
          align="left"
          header-align="center"
          prop="plantName"
          min-width="220"
        />
        <el-table-column
          label="代表者氏名"
          align="left"
          header-align="center"
          prop="representativeName"
          min-width="120"
        />
        <el-table-column
          label="代表者電話番号"
          align="center"
          header-align="center"
          prop="representativePhoneNumber"
          width="120"
        />
        <el-table-column
          label="JWNET事業場区分"
          align="center"
          width="150"
        >
          <template v-slot="{row}">
            {{ jwnetPlantTypeName(row) }}
          </template>
        </el-table-column>
        <el-table-column
          label="業者区分"
          align="center"
          width="150"
        >
          <template v-slot="{row}">
            <template v-for="(jwnetPlantInfo, index) in row.jwnetPlantInfos">
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-divider v-if="index > 0"/>
              </el-row>
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-col>
                  <span>{{ jwnetPlantCategoryName(jwnetPlantInfo) }}</span>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          label="JWNET加入者番号"
          align="center"
          width="140"
        >
          <template v-slot="{row}">
            <template v-for="(jwnetPlantInfo, index) in row.jwnetPlantInfos">
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-divider v-if="index > 0"/>
              </el-row>
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-col>
                  <span>{{ jwnetPlantInfo.jwnetMemberNo }}</span>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          label="JWNET公開PW"
          align="center"
          width="125"
        >
          <template v-slot="{row}">
            <template v-for="(jwnetPlantInfo, index) in row.jwnetPlantInfos">
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-divider v-if="index > 0"/>
              </el-row>
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-col>
                  <span>{{ jwnetPlantInfo.jwnetPublicPassword }}</span>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          label="EDI PW"
          align="center"
          width="100"
        >
          <template v-slot="{row}">
            <template v-for="(jwnetPlantInfo, index) in row.jwnetPlantInfos">
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-divider v-if="index > 0"/>
              </el-row>
              <el-row :key="jwnetPlantInfo.jwnetPlantCategoryCode">
                <el-col>
                  <span>{{ jwnetPlantInfo.ediPassword }}</span>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :width="dialogWidth"
      class="bpo-dialog"
    >
      <template #footer>
      </template>
      <template #default>
        <router-view :dialogVisible.sync="dialogVisible"/>
      </template>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'thePlantListTable',
  methods: {
    viewDetail: function (planId) {
      this.uniquePush('/master/manage/plant-overview/detail/')
      this.dialogWidth = '1200px'
      this.dialogTitle = '事業場詳細'
      this.dialogVisible = true
    },
    createPlant () {
      this.uniquePush('/master/manage/plant-overview/create/')
      this.dialogWidth = '1200px'
      this.dialogTitle = '事業場登録'
      this.dialogVisible = true
    },
    modifyPlant: function (planId) {
      this.uniquePush('/master/manage/plant-overview/modify/')
      this.dialogWidth = '1200px'
      this.dialogTitle = '事業場更新'
      this.dialogVisible = true
    },
    deletePlant: function (planId) {
      this.uniquePush('/master/manage/plant-overview/delete/')
      this.dialogWidth = '1200px'
      this.dialogTitle = '事業場削除'
      this.dialogVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    jwnetPlantTypeName ({ jwnetPlantTypeCode }) {
      switch (jwnetPlantTypeCode.toString()) {
        case '1': {
          return '排出事業場'
        }
        case '2': {
          return '積替・保管施設'
        }
        case '3': {
          return '処分(中間)'
        }
        case '4': {
          return '処分(最終)'
        }
      }
    },
    jwnetPlantCategoryName ({ jwnetPlantCategoryCode }) {
      switch (jwnetPlantCategoryCode.toString()) {
        case '1': {
          return '排出'
        }
        case '2': {
          return '収運'
        }
        case '3': {
          return '処分(報告のみ)'
        }
      }
    }
  },
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '',
      dialogWidth: '100%',
      plants: [
        {
          plantCode: '2344',
          plantName: '徐燕紅排出事業场',
          representativeName: '徐燕紅',
          representativePhoneNumber: '1234567890',
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
          representativeName: '徐燕紅',
          representativePhoneNumber: '1234567890',
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
  }
}
</script>

<style scoped>
</style>
