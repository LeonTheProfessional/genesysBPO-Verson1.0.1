<template>
  <div class="RouteListTable">
    <el-row type="flex" align="bottom">
      <el-col :span="4">
        <div class="button-above-table-container">
          <el-button type="warning">ルート情報のダウンロード</el-button>
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
                       layout="total, prev, pager, next, jumper"
                       :total="routeList.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      ref="routeListTable"
      :data="routeList"
      border
      stripe
    >
      <el-table-column
        :resizable="false"
        align="center"
        prop="status"
        header-align="center"
        fixed="left"
        width="80"
      >
        <template #header>
          <span>状態</span>
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
          >
            <template #default>
              <the-tip-pad-of-route-status/>
            </template>
            <template #reference>
              <el-button type="text" class="info-icon-button" icon="el-icon-info"/>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="routeNo"
        label="ルート番号"
        fixed
        show-overflow-tooltip
        width="115"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        label="ルート名"
        fixed
        show-overflow-tooltip
        min-width="200">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="handleClick(row, handleOption.HANDLE_OPTION_VIEW_DETAIL,{type:TYPE_ROUTE, routeId:row.routeId})">
            {{ row.routeName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="emissionCompanyName"
        label="排出事業者"
        show-overflow-tooltip
        min-width="220"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="emissionPlantName"
        label="排出事業場"
        show-overflow-tooltip
        min-width="220"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="wastName"
        label="排出物名称"
        show-overflow-tooltip
        min-width="150"/>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        prop="disposeMethodName"
        label="処分方法"
        show-overflow-tooltip
        width="100"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="transportCompanyName"
        label="運搬業者名称"
        show-overflow-tooltip
        width="200"/>
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        prop="disposeCompanyName"
        label="処分業者名称"
        show-overflow-tooltip
        width="200"/>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        prop="manifestTypeName"
        label="マニフェスト"
        width="110"/>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        prop="license"
        label="許可証"
        show-overflow-tooltip
        width="80">
        <template #header>
          <span>許可証</span>
          <el-popover
            placement="top-start"
            width="250"
            ref="info-pop-license"
            trigger="hover"
          >
            <template #default>
              <tip-pad/>
            </template>
            <template #reference>
              <el-button type="text" class="info-icon-button" icon="el-icon-info"/>
            </template>
          </el-popover>
        </template>
        <template #default="{row}">
          <el-button
            type="text"
            icon="el-icon-document"
            style="font-size:x-large;color: #ecb96c"
            @click="handleClick(row, handleOption.HANDLE_OPTION_VIEW_DETAIL, { type: TYPE_LICENSE, routeId: row.routeId })"
          />
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        align="center"
        header-align="center"
        prop="contract"
        label="契約書"
        width="80">
        <template #header>
          <span>契約書</span>
          <el-popover
            placement="top-start"
            width="250"
            ref="info-pop-contract"
            trigger="hover"
          >
            <template #default>
              <tip-pad/>
            </template>
            <template #reference>
              <el-button type="text" class="info-icon-button" v-popover:info-pop-contract icon="el-icon-info"/>
            </template>
          </el-popover>
        </template>
        <template #default="{row}">
          <el-button
            type="text"
            icon="el-icon-document"
            style="font-size:x-large;color: #ecb96c"
            @click="handleClick(row, handleOption.HANDLE_OPTION_VIEW_DETAIL, { type: TYPE_CONTRACT, routeId: row.routeId })"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" align="bottom">
      <el-col :offset="18" :span="6">
        <el-pagination style="float: right;margin-bottom: 10px;"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :page-sizes="[20, 50, 100, 200]"
                       :page-size="20"
                       layout="total, prev, pager, next, jumper"
                       :total="routeList.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogTableVisible"
      width="100%"
      class="bpo-dialog"
    >
      <template #footer>
      </template>
      <router-view/>
    </el-dialog>

  </div>
</template>
<script>
import HandleOption from '@/constant/HandleOption.Constants'
import TipPad from '@/components/route/route/overview/TheTipPad'
import TheTipPadOfRouteStatus from '@/components/route/route/overview/TheTipPadOfRouteStatus'

export default {
  name: 'RouteListTable',
  components: {
    TipPad,
    TheTipPadOfRouteStatus
  },
  methods: {
    handleClick: function (row, handleOption, option) {
      switch (handleOption) {
        case HandleOption.HANDLE_OPTION_MODIFY: {
          this.modifyRoute(row.routeId)
          break
        }
        case HandleOption.HANDLE_OPTION_DELETE: {
          break
        }
        case HandleOption.HANDLE_OPTION_VIEW_DETAIL: {
          this.viewDetail(option.type, option)
          break
        }
      }
    },
    modifyRoute: function (routeId) {
      this.$message('Pretend opened a modify page. Route ID:' + routeId)
    },
    viewDetail: function (type, option) {
      let URL = {}
      switch (type) {
        case this.TYPE_LICENSE: {
          URL = {
            name: 'RoutePermissionList',
            params: {
              routeId: option.routeId,
              fromFlag: this.$route.name
            }
          }
          this.dialogTitle = '許可証照会'
          break
        }
        case this.TYPE_CONTRACT: {
          URL = {
            name: 'RouteContractList',
            params: {
              routeId: option.routeId,
              fromFlag: this.$route.name
            }
          }
          this.dialogTitle = '契約書照会'
          break
        }
        case this.TYPE_ROUTE: {
          URL = {
            name: 'RouteDetail',
            params: {
              routeId: option.routeId,
              fromFlag: this.$route.name
            }
          }
          break
        }
      }
      if (Object.keys(URL).length > 0) {
        this.$router.push(URL)

        this.dialogTableVisible = true
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  created () {
    this.handleOption = HandleOption
    this.TYPE_ROUTE = 1
    this.TYPE_LICENSE = 2
    this.TYPE_CONTRACT = 3
  },
  data () {
    return {
      routeList: [{
        routeId: '10011',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '〇'
      }, {
        routeId: '10012',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジガジガジガジガジガジガジガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '△'
      }, {
        routeId: '10013',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '×'
      }, {
        routeId: '10011',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '△'
      }, {
        routeId: '10012',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジガジガジガジガジガジガジガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '×'
      }, {
        routeId: '10013',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '×'
      }, {
        routeId: '10011',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '×'
      }, {
        routeId: '10012',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジガジガジガジガジガジガジガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '△'
      }, {
        routeId: '10013',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        license: 'doc',
        contract: 'doc2',
        blueBlock: 'blue',
        invalidatedReason: 'na...',
        status: '△'
      }],
      dialogTableVisible: false,
      dialogTitle: ''
    }
  }
}
</script>
<style scoped>

.line {
  position: absolute;
  left: 100px;
  top: 34px;
  width: 650px;
  height: 4px;
  background: #93cddd;
}

.line-column .cell {
  text-align: center;
  position: relative;
}

.info-icon {
  color: darkslategray;
  font-size: x-large;
}

.dot {
  float: left;
  width: 15px;
  height: 15px;
  background: #93cddd;
  border-radius: 50%;

  display: inline-block;
}

.button-above-table-container {
  padding: 10px 0;
}

.operation-icon-tray {
  text-align: center;
  padding: 0;
  margin: 0;
}

.operation-icon-tray .el-button {
  font-size: 25px;
}
</style>
