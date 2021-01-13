<template>
  <div class="contract-detail">
    <el-row>
      <el-col :span="4">
            <span class="detail-sub-title">
              基本情報
            </span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <table class="info-table basic-info-table" style="width:100%;">
          <colgroup>
            <col style="width: 25%"/>
            <col style="width: 25%"/>
            <col style="width: 25%"/>
            <col style="width: 25%"/>
          </colgroup>
          <tr>
            <th style="width:15%;">
              <span class="info-item-label">契約元</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ contractSourceCompanyName }}</span>
            </td>
          </tr>
          <tr>
            <th style="width:15%;">
              <span class="info-item-label">契約形態</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ '収集運搬，処分契約' }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">契約種別</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ contractCategoryName }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">区間数</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ sectionNumber }}区間</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">契約先</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ contractTargetCompany }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">契約書番号</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ contractNo }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">契約締結日</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ contractDate }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">契約期間</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ contractPeriodStartDate + '～' + contractPeriodEndDate }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">自動更新</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ autoUpdateFlag ? 'なし' : 'です' }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">1区間目事業者</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{ section1CompanyName }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">変更ステータス</span>
            </th>
            <td>
              <span class="info-item-content">{{ changeStatus }}</span>
            </td>
            <th>
              <span class="info-item-label">ステータス</span>
            </th>
            <td>
              <span class="info-item-content">{{ status }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">起票日時</span>
            </th>
            <td>
              <span class="info-item-content">{{ ticketPurchaseDateTime }}</span>
            </td>
            <th>
              <span class="info-item-label">起票者</span>
            </th>
            <td>
              <span class="info-item-content">{{ ticketOriginatorName }}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span class="info-item-label">承認日時</span>
            </th>
            <td>
              <span class="info-item-content">{{ recognitionDateTime }}</span>
            </td>
            <th>
              <span class="info-item-label">承認者</span>
            </th>
            <td>
              <span class="info-item-content">{{ recognizerName }}</span>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span class="detail-sub-title">委託契約 文書</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table :data="contractDocFileList" max-height="300" :show-header="false" border>
          <el-table-column min-width="400" prop="fileName" align="left"/>
          <el-table-column
            align="center"
            width="80"
          >
            <template #default>
              <el-button
                type="text"
                style="padding: 0"
                size="mini"
              ><i style="font-size: 28px" class="el-icon-download"/>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span class="detail-sub-title">覚書</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table :data="memorandumFileList" max-height="300" :show-header="false" border>
          <el-table-column min-width="400" prop="fileName" align="left"/>
          <el-table-column
            align="center"
            width="80"
          >
            <template #default>
              <el-button
                type="text"
                style="padding: 0"
                size="mini"
              ><i style="font-size: 28px" class="el-icon-download"/>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ContractDetail',
  props: {
    contractId: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
      contractSourceCompanyName: '徐燕紅排出事業者2',
      contractTypeName: '収集運搬，処分契約',
      contractCategoryName: '通常契約',
      sectionNumber: 1,
      contractTargetCompany: '徐燕紅産廃収運処分業者',
      contractNo: '955555555555555',
      contractDate: '2020-05-11',
      contractPeriodStartDate: '2020-05-11',
      contractPeriodEndDate: '2099-05-11',
      autoUpdateFlag: false,
      sectionList: [
        {
          sectionIndex: 1,
          sectionCompanyName: '徐燕紅産廃収運処分業者\n'
        }
      ],
      changeStatusCode: '2',
      statusCode: '3',
      ticketPurchaseDateTime: '2020-06-02 19:22:10 ',
      recognitionDateTime: '2020-06-02 19:22:10 ',
      ticketOriginatorName: '徐燕紅管理会社担当者',
      recognizerName: '徐燕紅管理会社承認者',
      files: [
        {
          fileType: '契約書',
          fileName: '契約ファイル1',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '契約書',
          fileName: '契約ファイル2',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '契約書',
          fileName: '契約ファイル3',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '契約書',
          fileName: '契約ファイル4',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '覚書',
          fileName: '覚書ファイル1',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '覚書',
          fileName: '覚書ファイル2',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '覚書',
          fileName: '覚書ファイル3',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        },
        {
          fileType: '覚書',
          fileName: '覚書ファイル4',
          fileDownloadUrl: 'dummyUrl.com/?file=E334F34fBaf'
        }
      ]
    }
  },
  computed: {
    contractDocFileList () {
      const resultArr = []
      this.files.forEach((file) => {
        if (file.fileType === '契約書') {
          resultArr.push(file)
        }
      })
      return resultArr
    },
    memorandumFileList () {
      const resultArr = []
      this.files.forEach((file) => {
        if (file.fileType === '覚書') {
          resultArr.push(file)
        }
      })
      return resultArr
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 15px;
}

.contract-detail td {
  border-right: 1px #999 solid;
  border-bottom: 1px #999 solid;
}

.contract-detail tr {
  line-height: 1.3em
}
</style>
