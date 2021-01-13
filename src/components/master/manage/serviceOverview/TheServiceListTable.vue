<template>
  <div class="ServiceListTable">
    <el-row type="flex" align="bottom">
      <el-col :span="4">
        <div class="button-above-table-container">
          <el-button
            type="warning"
            @click="createService"
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
                       :total="services.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      :data="services"
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
              @click="modifyService(row.serviceCode)"/>
            <el-button
              type="text"
              size="mini"
              style="color: #dc851f"
              icon="el-icon-delete"
              @click="deleteService(row.serviceCode)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="serviceCode"
        label="コード"
                fixed

        show-overflow-tooltip
        min-width="200"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        label="名称"
                fixed
        show-overflow-tooltip
        min-width="220">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewDetail(row.serviceCode)">
            {{ row.serviceName }}
          </el-button>
        </template>
      </el-table-column>
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
        prop="representationName"
        label="利用可能システム"
        show-overflow-tooltip
        min-width="200">
        <template v-slot="{row}">
          <template v-for="(system,index) in row.availableSystems">
          <span
            :key="index"
            v-if="index !== 0">,</span>
            <span
              :key="system.systemCode"
            >{{ system.systemName }}</span>
          </template>
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
  name: 'ServiceListTable',
  methods: {
    viewDetail: function (serviceCode) {
      this.uniquePush('/master/manage/service-overview/detail/')
      this.dialogWidth = '930px'
      this.dialogTitle = 'サービス詳細'
      this.dialogVisible = true
    },
    createService () {
      this.uniquePush('/master/manage/service-overview/create/')
      this.dialogWidth = '930px'
      this.dialogTitle = 'サービス新規'
      this.dialogVisible = true
    },
    modifyService: function (serviceCode) {
      this.uniquePush('/master/manage/service-overview/modify/')
      this.dialogWidth = '930px'
      this.dialogTitle = 'サービス更新'
      this.dialogVisible = true
    },
    deleteService: function (serviceCode) {
      this.uniquePush('/master/manage/service-overview/delete/')
      this.dialogWidth = '930px'
      this.dialogTitle = 'サービス削除'
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
      services: [
        {
          serviceCode: 'SER001',
          serviceName: 'マスタ管理システム1.0.0',
          availableSystems: [
            {
              systemCode: 'SYS001',
              systemName: 'マスタ管理システム1.0.0'
            }, {
              systemCode: 'SYS002',
              systemName: 'マスタ管理システム1.0.1'
            }, {
              systemCode: 'SYS003',
              systemName: 'マスタ管理システム1.0.2'
            }, {
              systemCode: 'SYS004',
              systemName: 'マスタ管理システム1.0.3'
            }, {
              systemCode: 'SYS005',
              systemName: 'マスタ管理システム1.0.4'
            }, {
              systemCode: 'SYS006',
              systemName: 'マスタ管理システム1.0.5'
            }
          ],
          validFlag: true,
          remark: '○○○○○○'
        }, {
          serviceCode: 'SER001',
          serviceName: 'マスタ管理システム1.0.0',
          availableSystems: [
            {
              systemCode: 'SYS001',
              systemName: 'マスタ管理システム1.0.0'
            }, {
              systemCode: 'SYS002',
              systemName: 'マスタ管理システム1.0.1'
            }, {
              systemCode: 'SYS003',
              systemName: 'マスタ管理システム1.0.2'
            }
          ],
          validFlag: true,
          remark: '○○○○○○'
        }, {
          serviceCode: 'SER001',
          serviceName: 'マスタ管理システム1.0.0',
          availableSystems: [
            {
              systemCode: 'SYS001',
              systemName: 'マスタ管理システム1.0.0'
            }, {
              systemCode: 'SYS002',
              systemName: 'マスタ管理システム1.0.1'
            }
          ],
          validFlag: true,
          remark: '○○○○○○'
        }, {
          serviceCode: 'SER001',
          serviceName: 'マスタ管理システム1.0.0',
          availableSystems: [
            {
              systemCode: 'SYS001',
              systemName: 'マスタ管理システム1.0.0'
            }
          ],
          validFlag: true,
          remark: '○○○○○○'
        }, {
          serviceCode: 'SER001',
          serviceName: 'マスタ管理システム1.0.0',
          availableSystems: [
            {
              systemCode: 'SYS001',
              systemName: 'マスタ管理システム1.0.0'
            }, {
              systemCode: 'SYS002',
              systemName: 'マスタ管理システム1.0.1'
            }, {
              systemCode: 'SYS003',
              systemName: 'マスタ管理システム1.0.2'
            }
          ],
          validFlag: true,
          remark: '○○○○○○'
        }, {
          serviceCode: 'SER001',
          serviceName: 'マスタ管理システム1.0.0',
          availableSystems: [
            {
              systemCode: 'SYS001',
              systemName: 'マスタ管理システム1.0.0'
            }, {
              systemCode: 'SYS002',
              systemName: 'マスタ管理システム1.0.1'
            }
          ],
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
