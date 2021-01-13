<template>
  <div class="user-create bpo-dialog">
    <el-row>
      <el-col>
        <span class="detail-sub-title">事業者情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col>
        <div class="SearchCondition condition-body">
          <el-row :gutter="20">
            <el-col :span="3"><span>事業者コード：</span></el-col>
            <el-col :span="5">
              <el-input
                readonly
                :value="companyCode"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="3"><span>事業者名：</span></el-col>
            <el-col :span="5">
              <el-input
                disabled
                :value="companyName"
                size="mini"
                clearable>
              </el-input>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">事業場情報</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-checkbox-group v-model="pickedCompanies">
          <el-table
            :data="plants"
            border
            stripe
          >
            <el-table-column
              :resizable="false"
              align="left"
              header-align="center"
              prop="companyCategory"
              show-overflow-tooltip
              width="200">
              <template #header>
                <el-checkbox/>
              </template>
              <template #default="{row}">
                <el-checkbox :value="row.companyCode"/>
              </template>
            </el-table-column>
            <el-table-column
              :resizable="false"
              align="left"
              header-align="center"
              prop="companyCategory"
              label="業者区分"
              show-overflow-tooltip
              width="200"/>
            <el-table-column
              :resizable="false"
              align="left"
              header-align="center"
              prop="companyCode"
              label="事業場コード"
              show-overflow-tooltip
              min-width="150"/>
            <el-table-column
              :resizable="false"
              align="left"
              header-align="center"
              label="事業場名"
              prop="companyName"
              show-overflow-tooltip
              min-width="150"/>
            <el-table-column
              :resizable="false"
              align="center"
              prop="representativeName"
              header-align="center"
              label="代表者氏名"
              min-width="100"/>
            <el-table-column
              :resizable="false"
              align="left"
              header-align="center"
              prop="representativePhoneNumber"
              label="代表者電話番号"
              show-overflow-tooltip
              width="180"/>
            <el-table-column
              :resizable="false"
              align="left"
              label="郵便番号"
              prop="postalCode"
              header-align="center"
              show-overflow-tooltip
              width="180"/>
            <el-table-column
              :resizable="false"
              align="left"
              label="住所"
              prop="address"
              header-align="center"
              show-overflow-tooltip
              min-width="230"/>
            <el-table-column
              :resizable="false"
              align="left"
              label="JWNET事業場区分"
              prop="jwnetCategory"
              header-align="center"
              show-overflow-tooltip
              min-width="100"/>
          </el-table>
        </el-checkbox-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'companyCreate',
  methods: {
    handleSave (type) {
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
    handleCancel (type) {
      if (type === 'user') {
        this.$emit('update:dialogVisible', false)
      } else if (type === 'organization') {
        this.dialogVisible = false
      }
    }
  },
  data () {
    return {
      companyCategories: [],
      companyCode: 'TESTA',
      companyName: '',
      representativePhoneNumber: '',
      representativeName: '',
      postalCode: '',
      address: '',
      pickedCompanies: [],
      plants: [
        {
          companyCode: 'CPY0001',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }, {
          companyCode: 'CPY0002',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }, {
          companyCode: 'CPY0003',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }, {
          companyCode: 'CPY0004',
          companyName: 'マスタ管理システム1.0.0',
          representativePhoneNumber: '123456789',
          postalCode: '1245555',
          representativeName: 'Jolin'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
