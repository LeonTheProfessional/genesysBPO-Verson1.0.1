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
                       :page-sizes="[20, 50, 100, 200]"
                       :page-size="20"
                       :background="true"
                       layout="total, prev, pager, next, jumper"
                       :total="customerInfoList.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      :data="customerInfoList"
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
              @click="modifyService(row.customerInfoCode)"/>
            <el-button
              type="text"
              size="mini"
              style="color: #dc851f"
              icon="el-icon-delete"
              @click="deleteService(row.customerInfoCode)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="customerInfoCode"
        label="コード"
        fixed
        show-overflow-tooltip
        min-width="100"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        label="名称"
        fixed
        show-overflow-tooltip
        min-width="200">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewDetail(row.customerInfoCode)">
            {{ row.customerInfoName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        label="キャラクター"
        width="150">
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="representationName"
        label="利用可能システム"
        show-overflow-tooltip
        min-width="230">
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
        prop="organizationName"
        label="担当組織"
        show-overflow-tooltip
        min-width="150"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        show-overflow-tooltip
        width="230">
        <template v-slot="{row}">
          <el-row style="text-align: center">
            <el-col :span="10">
              <el-button
                type="text"
                @click="uniquePush('/master/manage/user-overview/')">
                <span>ユーザー</span>
              </el-button>
            </el-col>
            <el-col :offset="2" :span="10">
              <el-button
                type="text"
                @click="viewDetail(row.customerInfoCode)">
                <span>利用可能事業者</span>
              </el-button>
            </el-col>
          </el-row>
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
    viewDetail: function (customerInfoCode) {
      this.uniquePush('/master/manage/customer-info-overview/detail/')
      this.dialogWidth = '930px'
      this.dialogTitle = '顧客情報詳細'
      this.dialogVisible = true
    },
    createService () {
      this.uniquePush('/master/manage/customer-info-overview/create/')
      this.dialogWidth = '930px'
      this.dialogTitle = '顧客情報新規'
      this.dialogVisible = true
    },
    modifyService: function (customerInfoCode) {
      this.uniquePush('/master/manage/customer-info-overview/modify/')
      this.dialogWidth = '930px'
      this.dialogTitle = '顧客情報更新'
      this.dialogVisible = true
    },
    deleteService: function (customerInfoCode) {
      this.uniquePush('/master/manage/customer-info-overview/delete/')
      this.dialogWidth = '930px'
      this.dialogTitle = '顧客情報削除'
      this.dialogVisible = true
    }
  },
  data () {
    return {
      customerInfoList: [
        {
          customerInfoCode: 'SER001',
          customerInfoName: 'マスタ管理システム1.0.0',
          validFlag: true,
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
          ]
        }, {
          customerInfoCode: 'SER001',
          customerInfoName: 'マスタ管理システム1.0.0',
          validFlag: true,
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
          ]
        }, {
          customerInfoCode: 'SER001',
          customerInfoName: 'マスタ管理システム1.0.0',
          validFlag: true,
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
          ]
        }, {
          customerInfoCode: 'SER001',
          customerInfoName: 'マスタ管理システム1.0.0',
          validFlag: true,
          availableSystems: [
            {
              systemCode: 'SYS004',
              systemName: 'マスタ管理システム1.0.3'
            }, {
              systemCode: 'SYS005',
              systemName: 'マスタ管理システム1.0.4'
            }, {
              systemCode: 'SYS006',
              systemName: 'マスタ管理システム1.0.5'
            }
          ]
        }, {
          customerInfoCode: 'SER001',
          customerInfoName: 'マスタ管理システム1.0.0',
          validFlag: true,
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
          ]
        }, {
          customerInfoCode: 'SER001',
          customerInfoName: 'マスタ管理システム1.0.0',
          validFlag: true,
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
            }
          ]
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
