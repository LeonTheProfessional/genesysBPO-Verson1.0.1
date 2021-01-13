<template>
  <div class="the-route-list-table-contract-list">
    <el-table
      :data="routeContracts"
      border
      stripe
    >
      <el-table-column
        align="center"
        type="index"
        label="No"
        min-width="40"/>
      <el-table-column
        align="center"
        prop="contractNo"
        label="契約書番号"
        min-width="150">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewContractDetail(row.contractId)">
            {{ row.contractNo }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        label="ステータス"
        min-width="100"/>
      <el-table-column
        align="center"
        prop="contractTarget"
        label="契約先"
        min-width="200"/>
      <el-table-column
        align="center"
        prop="contractKind"
        label="契約種別"
        min-width="80"/>
      <el-table-column
        align="center"
        prop="contractType"
        label="契約形態"
        min-width="110"/>
      <el-table-column
        align="center"
        prop="westCategory"
        label="廃棄物種別"
        min-width="100"/>
      <el-table-column
        align="center"
        prop="agreementDate"
        label="締結日"
        min-width="120"/>
      <el-table-column
        align="center"
        label="契約期間">
        <el-table-column
          align="center"
          prop="startDate"
          label="開始日"
          min-width="120"/>
        <el-table-column
          align="center"
          prop="endDate"
          label="終了日"
          min-width="120"/>
        <el-table-column
          align="center"
          prop="()"
          label="自動更新"
          min-width="100">
          <template v-slot="{row}={}">
            <span>{{ row.autoUpdateFlag ? 'あり' : 'ありません' }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        width="350"
        placeholder="ファイルを選択してください"
        label="委託契約  文書">
        <template #default="{row}">
          <el-row>
            <el-col :span="20" style="text-align: left">
              <el-select v-model="row.fileUrl" size="mini">
                <el-option label="xxxxxxxxxxxx1.pdf" value="xxxxxxxxxxxx1.pdf"/>
                <el-option label="xxxxxxxxxxxx1.pdf" value="xxxxxxxxxxxx1.pdf"/>
                <el-option label="xxxxxxxxxxxx1.pdf" value="xxxxxxxxxxxx1.pdf"/>
                <el-option label="xxxxxxxxxxxx1.pdf" value="xxxxxxxxxxxx1.pdf"/>
                <el-option label="xxxxxxxxxxxx1.pdf" value="xxxxxxxxxxxx1.pdf"/>
              </el-select>
            </el-col>
            <el-col :span="4" style="text-align: left">
              <el-button
                type="text"
                v-if="true"
                style="padding: 0"
                size="mini"
              ><i style="font-size: 28px" class="el-icon-download"/>
              </el-button>
              <span v-else>
              --
            </span>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="契約詳細情報"
      :visible.sync="dialogVisible"
      width="100%"
      append-to-body
      class="bpo-dialog"
    >
      <template #footer>
      </template>
      <template #default>
        <the-contract-detail :contract-id="viewingContractId"/>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import TheContractDetail from '@/components/route/route/overview/TheContractDetail'
import axios from 'axios'

export default {
  name: 'TheRouteListTableContractList',
  props: {
    routeId: {
      type: BigInt(20),
      required: true
    }
  },
  methods: {
    viewContractDetail (id) {
      this.viewingContractId = id
      this.dialogVisible = true
    }
  },
  data () {
    return {
      dialogVisible: false,
      viewingContractId: '',
      routeContracts: [{
        contractId: 1213,
        contractNo: '2255334',
        status: '有效',
        contractTarget: '株式会社○○運搬',
        contractKind: '通常',
        contractType: '収集運搬契約',
        westCategory: '産業廃棄物',
        agreementDate: '2020-01-01',
        startDate: '2020-01-02',
        endDate: '2026-01-02',
        autoUpdateFlag: false,
        numberOfSegments: 2,
        files: [
          {
            fileType: '契約書',
            fileName: 'xxxxx.pdf',
            fileDownloadUrl: 'file.google.com/xxxxx.pdf'
          },
          {
            fileType: '覚書',
            fileName: 'xxxxx.pdf',
            fileDownloadUrl: 'file.google.com/xxxxx.pdf'
          },
          {
            fileType: 'その他',
            fileName: 'xxxxx.pdf',
            fileDownloadUrl: 'file.google.com/xxxxx.pdf'
          }
        ]
      }]
    }
  },
  mounted () {
    const arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(_.cloneDeep(this.routeContracts[0]))
    }
    this.routeContracts = arr
    axios.post('dummyUrl.com/?file=14faF45', { routeId: this.routeId })
      .then(function (contractList) {
        this.routeContracts = contractList
      })
  },
  components: {
    TheContractDetail
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 0;
}
</style>
