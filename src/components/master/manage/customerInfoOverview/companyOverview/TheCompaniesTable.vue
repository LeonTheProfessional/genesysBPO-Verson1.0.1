<template>
  <div class="ServiceListTable">
    <el-row type="flex" align="bottom">
      <el-col :span="4">
        <div class="button-above-table-container">
          <el-button
            type="warning"
            @click="createUser"
          >新規登録
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" align="bottom">
      <el-col :offset="18" :span="6">
        <el-pagination style="float: right;margin-bottom: 10px;"
                       :page-sizes="[20, 50, 100, 200]"
                       :page-size="20"
                       :background="true"
                       layout="total, prev, pager, next, jumper"
                       :total="companies.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      :data="companies"
      border
      stripe
    >
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        fixed
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
              @click="modifyUser(row.companyCode)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="companyCategory"
        label="業者区分"
        show-overflow-tooltip
        width="200"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="companyCode"
        label="事業者コード"
        show-overflow-tooltip
        min-width="150"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        label="事業者名"
        show-overflow-tooltip
        min-width="150">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewDetail(row.companyCode)">
            {{ row.companyName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="center"
        prop="representativeName"
        header-align="center"
        label="代表者氏名"
        min-width="100"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="representativePhoneNumber"
        label="代表者電話番号"
        show-overflow-tooltip
        width="180"/>
      <el-table-column
        :resizable="false"
        align="left"
        label="郵便番号"
        prop="postalCode"
        header-align="center"
        show-overflow-tooltip
        width="180"/>
      <el-table-column
        :resizable="false"
        align="left"
        label="所在地"
        prop="address"
        header-align="center"
        show-overflow-tooltip
        min-width="230"/>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        show-overflow-tooltip
        width="100">
        <template v-slot="{row}">
          <el-button type="text" size="mini"><span>事業場一覧</span></el-button>
        </template>
      </el-table-column>
    </el-table>
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
  name: 'ServiceListTable',
  methods: {
    viewDetail: function (companyCode) {
      this.uniquePush('/company/detail')
      this.dialogWidth = '930px'
      this.dialogTitle = '事業者詳細'
      this.dialogVisible = true
    },
    createUser () {
      this.uniquePush('company/create/')
      this.dialogWidth = '930px'
      this.dialogTitle = '事業者新規'
      this.dialogVisible = true
    },
    modifyUser: function (companyCode) {
      this.uniquePush('company/modify/')
      this.dialogWidth = '930px'
      this.dialogTitle = '事業者更新'
      this.dialogVisible = true
    }
  },
  data () {
    return {
      companies: [
        {
          companyCode: 'CPY0001',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }, {
          companyCode: 'CPY0002',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }, {
          companyCode: 'CPY0003',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }, {
          companyCode: 'CPY0004',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }
      ],
      dialogVisible: false,
      dialogTitle: '',
      dialogWidth: '100%'
    }
  }
}
</script>
<style scoped>
</style>
