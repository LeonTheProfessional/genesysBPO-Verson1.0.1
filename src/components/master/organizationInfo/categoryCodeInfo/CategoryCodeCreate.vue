<template>
  <div class="category-code-create bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">排出物種別：</span>
      </el-col>
      <el-col :span="12">
        <el-select v-model="emissionTypeCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">廃棄物名：</span>
      </el-col>
      <el-col :span="12">
        <el-select v-model="wastCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">廃棄物名（小分類）：</span>
      </el-col>
      <el-col :span="12">
        <el-select v-model="wastSubclassCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">排出物名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="emissionName"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">構成品目の指定</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-transfer
          :props="{key:'industrialWasteCode',label:'industrialWasteName'}"
          v-model="pickedIndustrialWasteList"
          :data="industrialWasteList"
          :titles="['産業廃棄物','選んだ産業廃棄物']"
        >
          <template #default="{option}">
            <div>
              <span>{{ option.industrialWasteName }}</span>
              <el-switch :width="30" style="margin-left: 10px" active-text="石綿含有" v-if="option.isContainsAsbestos!=null"
                         v-model="option.isContainsAsbestos"/>
            </div>
          </template>
        </el-transfer>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-transfer
          :props="{key:'hazardousSubstanceCode',label:'hazardousSubstanceName'}"
          v-model="pickedHazardousSubstances"
          :data="hazardousSubstances"
          :titles="['有害物質','選んだ有害物質']"
        >
        </el-transfer>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-table class="table-with-inline-append" stripe :data="packingInfoList">
          <el-table-column
            :resizable="false"
            align="center"
            prop="packingName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>荷姿</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedPacking">
                <el-option label="AAN" :value="{
                   packingName: 'AAN',
                   packingCode: '401'
                }"/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="conversionFactor"
            header-align="center"
            min-width="200">
            <template #header>
              <span>換算係数</span>
              <el-divider/>
              <el-input v-model="conversionFactorEntered" size="mini"/>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="unitName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>単位</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedUnit">
                <el-option label="JMS" :value="{
                  unitName: 'JMS',
                  unitCode: '4'
                }"/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            header-align="center"
            width="85">
            <template #header>
              <el-button
                size="mini"
                type="warning"
                style="width: 60px;"
                @click="addPackingInfo"
              ><span>追加</span></el-button>
            </template>
            <template #default>
              <el-button type="text" size="mini"><span>削除</span></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <span class="detail-sub-title red-star">換算係数設定</span>
        <table style="border: 1px solid #DCDFE6">
          <colgroup>
            <col style="width: 60%"/>
            <col style="width: 40%"/>
          </colgroup>
          <tr>
            <th><span>t/m³</span></th>
            <th><span>t/個・台</span></th>
          </tr>
          <tr>
            <td>
              <el-input size="mini" style="width: 100%"/>
            </td>
            <td>
              <el-input size="mini" style="width: 100%"/>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" size="mini" @click="handleSave"><span>保存</span></el-button>
      </el-col>
      <el-col :span="4">
        <el-button size="mini" @click="handleCancel"><span>キャンセル</span></el-button>
      </el-col>
      <el-col :span="8"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'categoryCodeCreate',
  props: {
    planId: Number
  },
  methods: {
    handleSave () {
      this.$confirm('保存してよろしいですか。', {
        confirmButtonText: 'OK',
        cancelButtonText: 'キャンセル'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '処理成功しました。'
        })
      }).catch(() => {
        return true
      }).then(() => {
        this.$emit('update:dialogVisible', false)
      })
    },
    handleCancel () {
      this.$emit('update:dialogVisible', false)
    },
    addPackingInfo () {
      this.packingInfoList.push({
        packingName: this.selectedPacking.packingName,
        conversionFactor: this.conversionFactorEntered,
        unitName: this.selectedUnit.unitName
      })
    }
  },
  data () {
    return {
      emissionTypeCode: '',
      wastCode: '',
      wastSubclassCode: '',
      emissionName: '',
      industrialWasteList: [
        {
          industrialWasteName: '燃え殻',
          industrialWasteCode: 'SER01',
          isContainsAsbestos: false
        },
        {
          industrialWasteName: '汚泥',
          industrialWasteCode: 'SER02'
        },
        {
          industrialWasteName: '廃油',
          industrialWasteCode: 'SER03'
        },
        {
          industrialWasteName: '廃酸',
          industrialWasteCode: 'SER04',
          isContainsAsbestos: false
        },
        {
          industrialWasteName: '廃アルカリ',
          industrialWasteCode: 'SER05'
        },
        {
          industrialWasteName: '廃プラ類',
          industrialWasteCode: 'SER06'
        }
      ],
      pickedIndustrialWasteList: [],
      hazardousSubstances: [
        {
          hazardousSubstanceName: '水銀又はその化合物',
          hazardousSubstanceCode: 'HAZ01'
        },
        {
          hazardousSubstanceName: '有機燐化合物',
          hazardousSubstanceCode: 'HAZ02'
        },
        {
          hazardousSubstanceName: 'カドミウム又はその化合物',
          hazardousSubstanceCode: 'HAZ03'
        },
        {
          hazardousSubstanceName: '鉛又はその化合物',
          hazardousSubstanceCode: 'HAZ04'
        },
        {
          hazardousSubstanceName: '六価クロム化合物',
          hazardousSubstanceCode: 'HAZ05'
        },
        {
          hazardousSubstanceName: '砒素又はその化合物',
          hazardousSubstanceCode: 'HAZ06'
        }
      ],
      pickedHazardousSubstances: [],
      selectedPacking: {
        packingName: 'ドラムs',
        packingCode: '123'
      },
      conversionFactorEntered: '34',
      selectedUnit: {
        unitName: 'm/s',
        unitCode: '2'
      },
      packingInfoList: [
        {
          packingName: 'ドラム缶',
          conversionFactor: '123',
          unitName: 'kg'
        }
      ]
    }
  }
}
</script>

<style>
.category-code-create .el-transfer-panel {
  width: 350px;
}
</style>

<style scoped>
.table-with-inline-append {
  border: 1px solid #DCDFE6;
}
</style>
