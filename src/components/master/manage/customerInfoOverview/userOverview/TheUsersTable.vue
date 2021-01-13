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
                       :total="users.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      :data="users"
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
              @click="modifyUser(row.userId)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="userId"
        label="ユーザーID"
        show-overflow-tooltip
        min-width="150"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        label="氏名"
        show-overflow-tooltip
        min-width="150">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewDetail(row.userId)">
            {{ row.userName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        label="電話番号"
        width="150"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="faxCode"
        label="ＦＡＸ番号"
        show-overflow-tooltip
        min-width="150"/>
      <el-table-column
        :resizable="false"
        align="left"
        label="有効期間"
        header-align="center"
        show-overflow-tooltip
        width="230">
        <template v-slot="{row}">
          <span>{{ row.validDateStart + ' ~ ' + row.validDateEnd }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="status"
        label="ステータス"
        show-overflow-tooltip
        width="100">
        <template v-slot="{row}">
          <span>{{ row.validFlag ? '有効' : '無効' }}</span>
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
    viewDetail: function (userId) {
      this.uniquePush('/user/detail')
      this.dialogWidth = '930px'
      this.dialogTitle = 'ユーザー詳細'
      this.dialogVisible = true
    },
    createUser () {
      this.uniquePush('user/create/')
      this.dialogWidth = '930px'
      this.dialogTitle = 'ユーザー新規'
      this.dialogVisible = true
    },
    modifyUser: function (userId) {
      this.uniquePush('user/modify/')
      this.dialogWidth = '930px'
      this.dialogTitle = 'ユーザー更新'
      this.dialogVisible = true
    }
  },
  data () {
    return {
      users: [
        {
          userId: 'USR0001',
          userName: 'マスタ管理システム1.0.0',
          phoneNumber: '123456789',
          faxCode: '1245555',
          validDateStart: '2019-09-24',
          validDateEnd: '2029-09-24',
          validFlag: true
        }, {
          userId: 'USR0002',
          userName: 'マスタ管理システム1.0.0',
          phoneNumber: '123456789',
          faxCode: '1245555',
          validDateStart: '2019-09-24',
          validDateEnd: '2029-09-24',
          validFlag: true
        }, {
          userId: 'USR0003',
          userName: 'マスタ管理システム1.0.0',
          phoneNumber: '123456789',
          faxCode: '1245555',
          validDateStart: '2019-09-24',
          validDateEnd: '2029-09-24',
          validFlag: true
        }, {
          userId: 'USR0004',
          userName: 'マスタ管理システム1.0.0',
          phoneNumber: '123456789',
          faxCode: '1245555',
          validDateStart: '2019-09-24',
          validDateEnd: '2029-09-24',
          validFlag: true
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
