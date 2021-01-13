<template>
  <div class="TheRouteListTablePermissionList.vue">
    <el-table
      :header-cell-style="headerCellStyle"
      :data="licenses"
    >
      <el-table-column
        align="center"
        type="index"
        label="No"
        :min-width="40"/>
      <el-table-column
        align="center"
        prop="companyCode"
        label="事業者コード"
        :min-width="120"/>
      <el-table-column
        align="center"
        prop="companyName"
        label="事業者名"
        :min-width="200"/>
      <el-table-column
        align="center"
        label="許可種別"
        :min-width="135">
        <template v-slot="{row}">
          <span>{{ makeSimpleLicenseCategoryName(row.licenseMainCategoryCode, row.licenseSubcategoryCode) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="autonomyName"
        label="自治体名"
        :min-width="100"/>
      <el-table-column
        align="center"
        prop="licenseNo"
        label="許可番号"
        :min-width="100"/>
      <el-table-column
        align="center"
        prop="licenseExpiryDate"
        :min-width="120">
        <template #header>
          <span style="white-space: pre-line">
            許可証等<br>有効年月日
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="許可申請中"
        :min-width="120">
        <template v-slot="{row}">
          <span>
            {{ row.licenseApplicationStatus == 1 ? '申請中' : '' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="優良認定"
        :min-width="120">
        prop="goodDesignationType"
        <template v-slot="{row}">
            <span>
              {{ row.goodDesignationType == 1 ? '優良' : 'なし' }}
            </span>
        </template>
      </el-table-column>
      <el-table-column
        label="廃棄物"
        align="center"
      >
        <el-table-column
          align="center"
          v-for="wast in wastList"
          :key="wast.wastCode"
          width="40"
          needChange
        >
          <template #header>
            <span class="vertical-text">
              {{wast.wastName}}
            </span>
          </template>
          <template #default="{row}">
            <span class="wast-mark" >
              {{row.assignedWastCodeList.indexOf(wast.wastCode)==-1? '':'○'}}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        label="一般廃棄物等"
        :min-width="40">
        <template v-slot="{row}">
          <span class="wast-mark">
            {{row.assignedWastCodeList.indexOf('00')==-1? '':'○'}}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="詳細"
        :min-width="80">
        <template>
          <el-button
            size="mini"
            type="info"
          >
            選択
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="PDF"
        :min-width="80">
        <template v-slot="{row}">
          <el-button
            v-if="row.PDFUrl!=null&&row.PDFUrl!=''"
            type="text"
            :style="{fontSize: 'x-large'}"
            icon="el-icon-document"
          />
        </template>
      </el-table-column>
        <el-table-column
          align="center"
          label="変更ステータス"
          :min-width="120">
          <template v-slot="{row}">
            {{changeStatusName(row.changeStatusCode)}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="ステータス"
          :min-width="130">
          <template v-slot="{row}">
            {{row.statusCode == 1?'承認済(無効含む)':'承認済'}}
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TheRouteListTablePermissionList.vue',
  methods: {
    makeSimpleLicenseCategoryName: (licenseMainCategoryCode, licenseSubcategoryCode) => {
      let resultName = ''
      switch (licenseMainCategoryCode) {
        case 1:
          resultName += '（産廃）'
          break
        case 2:
          resultName += '（一廃）'
          break
      }
      switch (licenseSubcategoryCode) {
        case 1:
          resultName += '処分許可'
          break
        case 2:
          resultName += '収運許可'
          break
      }
      return resultName
    },
    changeStatusName: (changeStatusCode) => {
      switch (changeStatusCode) {
        case '1':
          return '新規'
        case '2':
          return '変更'
        case '3':
          return '更新'
      }
    },
    headerCellStyle: ({ columnIndex, rowIndex }) => {
      // 定位wast列头
      if (rowIndex === 1 || columnIndex === 10) {
        return {
          'padding-left': '0px',
          'padding-right': '0px',
          color: 'darkslategrey'
        }
      }
    }
  },
  data () {
    return {
      wastList:
        [
          {
            wastName: '燃え殻',
            wastCode: '11'
          },
          {
            wastName: '汚泥',
            wastCode: '12'
          },
          {
            wastName: '廃油',
            wastCode: '13'
          },
          {
            wastName: '廃酸',
            wastCode: '14'
          },
          {
            wastName: '廃アルカリ',
            wastCode: '15'
          }
        ],
      licenses: [{
        companyCode: 'B000001',
        companyName: 'イオングループ',
        licenseMainCategoryCode: 1,
        licenseSubcategoryCode: 2,
        assignedWastCodeList: ['11', '12', '00'],
        autonomyName: '北海道',
        licenseNo: '12352461',
        licenseExpiryDate: '2021/06/23',
        licenseApplicationStatus: '1',
        PDFUrl: 'https://www.google.hk',
        changeStatusCode: '1',
        statusCode: '1'
      }]
    }
  }
}
</script>

<style scoped>
.wast-mark {
  color: black;
  font-size:large;
  font-weight: bolder;
}
</style>
