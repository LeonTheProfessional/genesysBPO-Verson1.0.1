<template>
  <div class="SearchCondition condition-body">
    <el-collapse>
      <BPOCollapseCondition>
        <template #title>
          <el-row :gutter="20" @click.native.stop>
            <el-col :span="2"><span>ルート番号：</span></el-col>
            <el-col :span="4">
              <el-input
                v-model="routeNo"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="2"><span>ルート名：</span></el-col>
            <el-col :span="4">
              <el-input
                v-model="routeName"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="2"><span>排出事業者：</span></el-col>
            <el-col :span="4">
              <el-input
                v-model="emissionCompanyName"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="2"><span>排出事業場：</span></el-col>
            <el-col :span="4">
              <el-input
                v-model="emissionPlantName"
                size="mini"
                clearable>
              </el-input>
            </el-col>
          </el-row>
        </template>
        <el-row :gutter="20">
          <el-col :span="2"><span>排出物名称：</span></el-col>
          <el-col :span="4">
            <el-input
              v-model="wasteName"
              size="mini"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="2"><span>処分方法：</span></el-col>
          <el-col :span="4">
            <el-select v-model="disposeMethodCd" :size="'mini'" clearable placeholder="選んでください">
              <el-option
                v-for="method in selectableDisposeMethods"
                :key="method.cd"
                :label="method.name"
                :value="method.cd">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2"><span>運搬業者名称：</span></el-col>
          <el-col :span="4">
            <el-input
              v-model="transportCompanyName"
              size="mini"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="2"><span>処分業者名称：</span></el-col>
          <el-col :span="4">
            <el-input
              v-model="disposeCompanyName"
              size="mini"
              label="処分業者名称："
              clearable>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2"><span>マニフェスト区分：</span></el-col>
          <el-col :span="4">
            <el-radio-group v-model="manifestType">
              <el-radio :label="-1"><span>全て</span></el-radio>
              <el-radio :label="0"><span>電子</span></el-radio>
              <el-radio :label="1"><span>紙</span></el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="2"><span>排出物種別：</span></el-col>
          <el-col :span="4">
            <el-select v-model="wastCategoryCd" :size="'mini'" clearable placeholder="選んでください">
              <el-option
                v-for="wastCategories in selectableWastCategories"
                :key="wastCategories.cd"
                :label="wastCategories.name"
                :value="wastCategories.cd">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2"><span>許可期限アラート：</span></el-col>
          <el-col :span="4">
            <el-select v-model="permissionExpirationAlertCd" :size="'mini'" clearable placeholder="選んでください">
              <el-option
                v-for="alert in selectablePermissionExpirationAlerts"
                :key="alert.cd"
                :label="alert.name"
                :value="alert.cd">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2"><span>契約期限アラート：</span></el-col>
          <el-col :span="4">
            <el-select v-model="contractExpirationAlertCd" :size="'mini'" clearable placeholder="選んでください">
              <el-option
                v-for="alert in selectableContractExpirationAlerts"
                :key="alert.cd"
                :label="alert.name"
                :value="alert.cd">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2"><span>無効ルート表示：</span></el-col>
          <el-col :span="22">
            <el-checkbox-group
              v-model="invalidRouteTypes"
              multiple
              size="mini"
            >
              <el-checkbox
                label="許可証不整合"
                :value="1">
              </el-checkbox>
              <el-checkbox
                label="契約書不整合"
                :value="2">
              </el-checkbox>
              <el-checkbox
                label="許可有効期限切れ"
                :value="3">
              </el-checkbox>
              <el-checkbox
                label="契約有効期限切れ"
                :value="4">
              </el-checkbox>
              <el-checkbox
                label="一廃警告ルートのみ表示"
                :value="5">
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <span @click="displayTheLicenseInApplicationFlag = !displayTheLicenseInApplicationFlag" style="margin-right: 20px">許可申請中のみ表示：</span>
            <el-switch
              v-model="displayTheLicenseInApplicationFlag"
            >
            </el-switch>
          </el-col>
        </el-row>
      </BPOCollapseCondition>
    </el-collapse>
    <el-row class="el-row" :gutter="20" style="margin-top: 10px">
      <el-col class="search-condition-button-tray" :offset="20" :span="4" style="display: flex;justify-content: flex-end;">
        <el-button class="search-button" size="small" type="primary">検索</el-button>
        <el-button class="clear-button" size="small" type="primary" plain>クリア</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BPOCollapseCondition from '@/components/common/BPOCollapseCondition'
export default {
  name: 'SearchCondition',
  props: ['ass'],
  methods: {
    queryPlant: function (queryString, cb) {
      cb(this.selectablePlants)
    },
    handlePlantSelect: function (queryString, cb) {
      console.log(this.plantId)
    }
  },
  data () {
    return {
      routeName: 'do',
      transportCompanyName: 'ri',
      routeNo: 'mi',
      disposeCompanyName: 'fa',
      wasteName: 'so',
      manifestType: -1,
      emissionCompanyName: 'la',
      emissionPlantName: 'laP',
      disposeMethodCd: '',
      selectableDisposeMethods: [{
        cd: 1,
        name: '吹'
      }, {
        cd: 2,
        name: '拉'
      }, {
        cd: 3,
        name: '弹'
      }, {
        cd: 4,
        name: '唱'
      }],
      plantId: '',
      selectablePlants: [{
        id: 1,
        name: '驻马店工厂'
      }, {
        id: 2,
        name: '江南皮革厂'
      }, {
        id: 3,
        name: '石家庄制药厂'
      }, {
        id: 4,
        name: '东厂'
      }],
      areaFlag: false,
      invalidRouteTypes: [],
      wastCategoryCd: '',
      selectableWastCategories: [{
        cd: 1,
        name: '産業廃棄物'
      }, {
        cd: 2,
        name: '特別管理産業廃棄物'
      }],
      durationType: 1,
      duration: null,
      permissionExpirationAlertCd: '',
      selectablePermissionExpirationAlerts: [{
        cd: 1,
        name: '期限切れ１か月前'
      }, {
        cd: 2,
        name: '期限切れ３週間前'
      }, {
        cd: 3,
        name: '期限切れ２週間前'
      }, {
        cd: 4,
        name: '期限切れ１週間前'
      }],
      contractExpirationAlertCd: '',
      selectableContractExpirationAlerts: [{
        cd: 1,
        name: '期限切れ１か月前'
      }, {
        cd: 2,
        name: '期限切れ３週間前'
      }, {
        cd: 3,
        name: '期限切れ２週間前'
      }, {
        cd: 4,
        name: '期限切れ１週間前'
      }],
      displayTheLicenseInApplicationFlag: false
    }
  },
  components: {
    BPOCollapseCondition
  }
}
</script>

<style scoped>

.invalid-route-types-checkbox-group > .el-checkbox {
  margin-right: 10px;
}

.invalid-route-types-checkbox-group {
  margin-left: 10px;
}
</style>
