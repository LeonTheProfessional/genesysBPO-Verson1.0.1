<template>
  <div class="category-code-detail bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">排出物種別：</span>
      </el-col>
      <el-col :span="12">
        <el-select :value="emissionTypeCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">廃棄物名：</span>
      </el-col>
      <el-col :span="12">
        <el-select :value="wastCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">廃棄物名（小分類）：</span>
      </el-col>
      <el-col :span="12">
        <el-select :value="wastSubclassCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">排出物名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="emissionName"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">構成品目の指定</span>
      </el-col>
    </el-row>
    <el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <span class="red-star">産業廃棄物：</span>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="20">
            <el-col
              v-for="industrialWaste in industrialWasteList"
              :span="6"
              :key="industrialWaste.industrialWasteCode">
              <el-tag style="margin-bottom: 10px"><span>{{industrialWaste.industrialWasteName}}</span></el-tag>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-col>
        <el-row :gutter="20">
          <el-col :span="8">
            <span class="red-star">有害物質名：</span>
          </el-col>
          <el-col :span="16">
            <el-row :gutter="20">
              <el-col
                v-for="hazardousSubstance in hazardousSubstances"
                :span="6"
                :key="hazardousSubstance.hazardousSubstanceCode">
                <el-tag type="warning" style="margin-bottom: 10px"><span>{{hazardousSubstance.hazardousSubstanceName}}</span></el-tag>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-table border stripe class="table-with-inline-append" :data="packingInfoList">
          <el-table-column
            :resizable="false"
            align="center"
            label="荷姿"
            prop="packingName"
            header-align="center"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            label="換算係数"
            prop="conversionFactor"
            header-align="center"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            label="単位"
            prop="unitName"
            header-align="center"
            min-width="200"/>
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
        <el-button type="warning" size="mini" @click="handleDelete"><span>削除</span></el-button>
      </el-col>
      <el-col :span="4">
        <el-button size="mini" @click="$emit('update:dialogVisible', false)"><span>キャンセル</span></el-button>
      </el-col>
      <el-col :span="8"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'categoryCodeDetail',
  methods: {
    handleDelete () {
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
        console.log(this)
        this.$emit('update:dialogVisible', false)
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
<style scoped>
</style>
