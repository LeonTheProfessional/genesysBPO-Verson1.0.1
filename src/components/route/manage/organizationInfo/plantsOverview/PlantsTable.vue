<template>
  <div class="plant-table">
    <el-table :data="plants">
      <el-table-column
        label="事業場コード"
        align="center"
        prop="plantCode"
        width="200"
      />
      <el-table-column
        label="事業場名"
        align="center"
        prop="plantName"
        min-width="220"
      />
      <el-table-column
        label="都度指示"
        align="center"
        width="80"
      >
        <template v-slot="{row}">
          <span>{{ row.areaFlag ? '⭕' : '' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="有効期間"
        align="center"
        width="220"
      >
        <template v-slot="{row}">
          <span>{{ row.validDateStart + ' ～ ' + row.validDateEnd }}</span>
        </template>
      </el-table-column>
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
  </div>
</template>

<script>
export default {
  name: 'PlantsTable',
  props: {
    plants: Array
  },
  methods: {
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
  }
}
</script>

<style scoped>
.el-divider--horizontal {
  margin: 12px 0
}
</style>
