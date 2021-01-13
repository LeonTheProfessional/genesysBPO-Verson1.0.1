<template>
  <div class="users-table">
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
    <el-row type="flex" align="bottom" justify="end">
      <el-col :span="16">
        <el-pagination
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          :background="true"
          :style="{'margin-right': '20px',float: 'right'}"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      border
      stripe
      :data="users"
    >
      <el-table-column
        :resizable="false"
        align="left"
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
              @click="modifyUser(row.userId)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="ユーザーID"
        align="left"
        header-align="center"
        prop="userId"
        :min-width="200"/>
      <el-table-column
        label="氏名"
        align="left"
        header-align="center"
        prop="userName"
        :min-width="220"/>
      <el-table-column
        label="キャラクター"
        align="left"
        header-align="center"
        prop="character"
        :min-width="200"/>
      <el-table-column
        label="有効期間"
        align="left"
        header-align="center"
        prop="validityPeriod"
        :min-width="300"/>
      <el-table-column
        align="center"
        header-align="center"
        :width="100"
        label="ステータス"
      >
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
  name: 'usersTable',
  methods: {
    viewDetail: function (userId) {
      this.uniquePush('/master/manage/organization-info/user/detail')
      this.dialogWidth = '1000px'
      this.dialogTitle = 'システム詳細'
      this.dialogVisible = true
    },
    createUser () {
      this.uniquePush('/master/manage/organization-info/user/create')
      this.dialogWidth = '1000px'
      this.dialogTitle = 'システム新規'
      this.dialogVisible = true
    },
    modifyUser: function (userId) {
      this.uniquePush('/master/manage/organization-info/user/modify')
      this.dialogWidth = '1000px'
      this.dialogTitle = 'システム更新'
      this.dialogVisible = true
    },
    deleteUser: function (userId) {
      this.uniquePush('/master/manage/organization-info/user/delete')
      this.dialogWidth = '1000px'
      this.dialogTitle = 'システム削除'
      this.dialogVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '',
      dialogWidth: '100%',
      users: [
        {
          userId: 'ssk@jems.co.jp',
          userName: '鈴木　はい',
          characterCode: '管理ユーザー',
          validityPeriod: ['2020-01-01', '2020-02-02'],
          validFlag: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
