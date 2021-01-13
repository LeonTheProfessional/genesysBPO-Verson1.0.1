<template>
  <div class="the-role-list-table">
    <el-row type="flex" align="bottom">
      <el-col :span="4">
        <div class="button-above-table-container">
          <el-button
            type="warning"
            @click="createRole"
          >新規登録
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" align="bottom">
      <el-col :offset="18" :span="6">
        <el-pagination style="float: right;margin-bottom: 10px;"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :page-sizes="[20, 50, 100, 200]"
                       :page-size="20"
                       :background="true"
                       layout="total, prev, pager, next, jumper"
                       :total="roles.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      :data="roles"
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
              @click="modifyRole(row.roleCode)"/>
            <el-button
              type="text"
              size="mini"
              style="color: #dc851f"
              icon="el-icon-delete"
              @click="deleteRole(row.roleCode)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="roleCode"
        label="コード"
        show-overflow-tooltip
        min-width="200"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        label="名称"
        show-overflow-tooltip
        min-width="220">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewDetail(row.roleCode)">
            {{ row.roleName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="systemName"
        label="システム名称"
        show-overflow-tooltip
        min-width="200"/>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        label="有効フラグ"
        width="95">
        <template v-slot="{row}">
          <span>{{ row.validFlag ? '可' : '不可' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="remark"
        label="備考"
        show-overflow-tooltip
        min-width="220"/>
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
  name: 'roleListTable',
  methods: {
    viewDetail: function (roleCode) {
      this.uniquePush('/master/manage/role-overview/detail/')
      this.dialogWidth = '600px'
      this.dialogTitle = 'ロール詳細'
      this.dialogVisible = true
    },
    createRole () {
      this.uniquePush('/master/manage/role-overview/create/')
      this.dialogWidth = '600px'
      this.dialogTitle = 'ロール新規'
      this.dialogVisible = true
    },
    modifyRole: function (roleCode) {
      this.uniquePush('/master/manage/role-overview/modify/')
      this.dialogWidth = '600px'
      this.dialogTitle = 'ロール更新'
      this.dialogVisible = true
    },
    deleteRole: function (roleCode) {
      this.uniquePush('/master/manage/role-overview/delete/')
      this.dialogWidth = '600px'
      this.dialogTitle = 'ロール削除'
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
      roles: [
        {
          roleCode: 'SYS001',
          roleName: 'マスタ管理システム1.0.0',
          systemName: 'マスタ管理システム',
          validFlag: true,
          remark: '○○○○○○'
        }, {
          roleCode: 'SYS001',
          roleName: 'マスタ管理システム1.0.0',
          systemName: 'マスタ管理システム',
          validFlag: false,
          remark: '○○○○○○'
        }, {
          roleCode: 'SYS001',
          roleName: 'マスタ管理システム1.0.0',
          systemName: 'マスタ管理システム',
          validFlag: true,
          remark: '○○○○○○'
        }, {
          roleCode: 'SYS001',
          roleName: 'マスタ管理システム1.0.0',
          systemName: 'マスタ管理システム',
          validFlag: true,
          remark: '○○○○○○'
        }, {
          roleCode: 'SYS001',
          roleName: 'マスタ管理システム1.0.0',
          systemName: 'マスタ管理システム',
          validFlag: false,
          remark: '○○○○○○'
        }, {
          roleCode: 'SYS001',
          roleName: 'マスタ管理システム1.0.0',
          systemName: 'マスタ管理システム',
          validFlag: true,
          remark: '○○○○○○'
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
