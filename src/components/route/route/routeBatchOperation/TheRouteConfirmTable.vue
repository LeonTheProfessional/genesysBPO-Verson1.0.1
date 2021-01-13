<template>
  <div class="the-route-confirm-table">
    <el-table border stripe :data="routeList">
      <el-table-column align="center" width="40">
        <template #default>
          <el-checkbox style="margin-right: 10px"/>
        </template>
      </el-table-column>
      <el-table-column label="タイプ" align="center" width="80" prop="operationType"/>
      <el-table-column label="ルート番号" min-width="180" align="center" prop="routeNo"/>
      <el-table-column label="ルート名称" min-width="220" align="center" prop="routeName"/>
      <el-table-column label="有効期間" align="center" width="150">
        <template #default="{row}">
          <el-row>
            <el-col><span>{{ row.validDateStart }}</span></el-col>
          </el-row>
          <el-row>
            <el-col><span>~</span></el-col>
          </el-row>
          <el-row>
            <el-col><span>{{ row.validDateEnd }}</span></el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="マニ種別" align="center" width="80" prop="manifestTypeName"/>
      <el-table-column label="都度指示" width="80" align="center">
        <template #default="{row}">
          <el-checkbox v-model="row.areaFlag" disabled/>
        </template>
      </el-table-column>
      <el-table-column label="排出事業者" align="center" min-width="220">
        <template #default="{row}">
          <el-row type="flex" style="height: 50px">
            <el-col>
              <span>{{ row.emissionCompanyName }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-select placeholder="" size="mini" v-model="row.selectedEmissionCompany"/>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="排出事業場/所属事業場自治体" align="center" min-width="220">
        <template #default="{row}">
          <el-row type="flex" style="height: 50px">
            <el-col>
              <span>{{ row.emissionPlantName }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-select placeholder="" size="mini" v-model="row.selectedEmissionPlant"/>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="交付担当者" align="center" min-width="150">
        <template #default="{row}">
          <el-row type="flex" style="height: 50px">
            <el-col>
              <span>{{ row.deliveryPersonRole }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-select placeholder="" size="mini" v-model="row.selectedRole"/>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="排出物" align="center" min-width="220">
        <template #default="{row}">
          <el-row type="flex" style="height: 50px">
            <el-col>
              <span>{{ row.wastName + '(' + row.wastTypeName + ')' }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-select placeholder="" size="mini" v-model="row.selectedEmission"/>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="処分方法" align="center" width="120" prop="disposeMethodName"/>
      <el-table-column label="荷姿" align="center" width="120" prop="packingName"/>
      <el-table-column label="数量確定者" align="center" width="120" prop="quantityFixedPerson"/>
      <el-table-column label="運搬受託者" align="center" min-width="220">
        <template #default="{row}">
          <template v-for="(transportTrustee, index) in row.transportTrustees">
            <div :key="transportTrustee.transportTrusteeName">
              <el-row>
                <el-col :span="2">
                  <span style="margin-left: 5px;line-height: 78px">{{ index + 1 }}</span>
                </el-col>
                <el-col :span="1">
                  <el-divider direction="vertical"/>
                </el-col>
                <el-col :span="21">
                  <el-row type="flex" style="height: 50px">
                    <el-col>
                      <span>{{ transportTrustee.transportTrusteeName }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-select placeholder="" size="mini" v-model="transportTrustee.selectedTransportTrustee"/>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-divider v-if="index < row.transportTrustees.length-1"/>
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="積替保管場" align="center" min-width="220">
        <template #default="{row}">
          <template v-for="(transshipmentStoragePlant, index) in row.transshipmentStoragePlants">
            <div :key="transshipmentStoragePlant.transshipmentStoragePlantName">
              <el-row>
                <el-col :span="2">
                  <span style="margin-left: 5px;line-height: 78px">{{ index + 1 }}</span>
                </el-col>
                <el-col :span="1">
                  <el-divider direction="vertical"/>
                </el-col>
                <el-col :span="21">
                  <el-row type="flex" style="height: 50px">
                    <el-col>
                      <span>{{ transshipmentStoragePlant.transshipmentStoragePlantName }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-select placeholder="" size="mini"
                                 v-model="transshipmentStoragePlant.selectedTransshipmentStoragePlant"/>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-divider v-if="index < row.transshipmentStoragePlants.length-1"/>
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="中間処分場" align="center" min-width="220">
        <template #default="{row}">
          <div>
            <el-row type="flex" style="height: 50px">
              <el-col>
                <span>{{ row.intermediateDisposalPlant.intermediateDisposalPlantName }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-select placeholder="" size="mini"
                           v-model="row.intermediateDisposalPlant.selectedIntermediateDisposalPlant"/>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="最終処分場" align="center" min-width="220">
        <template #default="{row}">
          <template v-for="(finalDisposalPlant, index) in row.finalDisposalPlants">
            <div :key="finalDisposalPlant.finalDisposalPlantName">
              <el-row>
                <el-col :span="2">
                  <span style="margin-left: 5px;line-height: 78px">{{ index + 1 }}</span>
                </el-col>
                <el-col :span="1">
                  <el-divider direction="vertical"/>
                </el-col>
                <el-col :span="21">
                  <el-row type="flex" style="height: 50px">
                    <el-col>
                      <span>{{ finalDisposalPlant.finalDisposalPlantName }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-select placeholder="" size="mini" v-model="finalDisposalPlant.selectedFinalDisposalPlant"/>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-divider v-if="index < row.finalDisposalPlants.length-1"/>
            </div>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

export default {
  name: 'TheRouteConfirmTable',
  data () {
    return {
      routeList: [{
        routeId: '10011',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        operationType: '更新',
        areaFlag: true,
        validDateStart: '1997-08-01',
        validDateEnd: '2021-08-01',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        deliveryPersonRole: 'R62',
        wastTypeName: '産廃',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        packingName: '段ボール箱',
        quantityFixedPerson: '排出',
        transportTrustees: [
          {
            transportTrusteeName: 'youB運搬業者',
            selectedTransportTrustee: ''
          },
          {
            transportTrusteeName: 'youC運搬業者',
            selectedTransportTrustee: ''
          }
        ],
        transshipmentStoragePlants: [
          {
            transshipmentStoragePlantName: 'youD運搬業者',
            selectedTransshipmentStoragePlant: ''
          },
          {
            transshipmentStoragePlantName: 'youE運搬業者',
            selectedTransshipmentStoragePlant: ''
          }
        ],
        intermediateDisposalPlant: {
          intermediateDisposalPlantName: 'you処分業者和歌山県橋本市清水１０−１−１',
          selectedIntermediateDisposalPlant: ''
        },
        finalDisposalPlants: [
          {
            finalDisposalPlantName: 'youD処分業者和歌山県橋本市清水１０−１−１',
            selectedFinalDisposalPlant: ''
          },
          {
            finalDisposalPlantName: 'you処分業者和歌山県橋本市清水１０−１−１',
            selectedFinalDisposalPlant: ''
          }
        ]
      }, {
        routeId: '10011',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        operationType: '更新',
        areaFlag: true,
        validDateStart: '1997-08-01',
        validDateEnd: '2021-08-01',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        deliveryPersonRole: 'R62',
        wastTypeName: '産廃',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        packingName: '段ボール箱',
        quantityFixedPerson: '排出',
        transportTrustees: [
          {
            transportTrusteeName: 'youB運搬業者',
            selectedTransportTrustee: ''
          },
          {
            transportTrusteeName: 'youC運搬業者',
            selectedTransportTrustee: ''
          }
        ],
        transshipmentStoragePlants: [
          {
            transshipmentStoragePlantName: 'youD運搬業者',
            selectedTransshipmentStoragePlant: ''
          },
          {
            transshipmentStoragePlantName: 'youE運搬業者',
            selectedTransshipmentStoragePlant: ''
          }
        ],
        intermediateDisposalPlant: {
          intermediateDisposalPlantName: 'you処分業者和歌山県橋本市清水１０−１−１',
          selectedIntermediateDisposalPlant: ''
        },
        finalDisposalPlants: [
          {
            finalDisposalPlantName: 'youD処分業者和歌山県橋本市清水１０−１−１',
            selectedFinalDisposalPlant: ''
          },
          {
            finalDisposalPlantName: 'you処分業者和歌山県橋本市清水１０−１−１',
            selectedFinalDisposalPlant: ''
          }
        ]
      }, {
        routeId: '10011',
        routeNo: '2333',
        routeName: '本社：廃プラ',
        operationType: '更新',
        areaFlag: true,
        validDateStart: '1997-08-01',
        validDateEnd: '2021-08-01',
        emissionCompanyName: 'ガジガジ会社',
        emissionPlantName: '京都工場',
        deliveryPersonRole: 'R62',
        wastTypeName: '産廃',
        wastName: 'Unused brain',
        disposeMethodName: '破砕',
        transportCompanyName: '株式会社○○運搬',
        disposeCompanyName: '○○処分株式会社',
        manifestTypeName: '電子',
        packingName: '段ボール箱',
        quantityFixedPerson: '排出',
        transportTrustees: [
          {
            transportTrusteeName: 'youB運搬業者',
            selectedTransportTrustee: ''
          },
          {
            transportTrusteeName: 'youC運搬業者',
            selectedTransportTrustee: ''
          }
        ],
        transshipmentStoragePlants: [
          {
            transshipmentStoragePlantName: 'youD運搬業者',
            selectedTransshipmentStoragePlant: ''
          },
          {
            transshipmentStoragePlantName: 'youE運搬業者',
            selectedTransshipmentStoragePlant: ''
          }
        ],
        intermediateDisposalPlant: {
          intermediateDisposalPlantName: 'you処分業者和歌山県橋本市清水１０−１−１',
          selectedIntermediateDisposalPlant: ''
        },
        finalDisposalPlants: [
          {
            finalDisposalPlantName: 'youD処分業者和歌山県橋本市清水１０−１−１',
            selectedFinalDisposalPlant: ''
          },
          {
            finalDisposalPlantName: 'you処分業者和歌山県橋本市清水１０−１−１',
            selectedFinalDisposalPlant: ''
          }
        ]
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

.info-icon-button {
  color: white;
}

.info-icon-button:active, .info-icon-button:hover {
  color: #abd1ff;

}

.operation-icon-tray {
  text-align: center;
  padding: 0;
  margin: 0;
}

.operation-icon-tray .el-button {
  font-size: 25px;
}

.el-table .el-select {
  width: 90%;
  margin-bottom: 10px;
}

.el-divider {
  margin: 0;
  background-color: #ebeef5;
}

.el-divider.el-divider--vertical {
  height: 88px;
  margin: 0;
}

</style>
<style>
.the-route-confirm-table .el-table td {
  padding: 0;
}

.the-route-confirm-table .el-table .cell {
  padding: 0;
}
</style>
