<template>
  <div class="user-create bpo-dialog">
    <el-row :gutter="10">
      <el-col>
        <div class="SearchCondition condition-body">
          <el-row>
            <el-col :span="3"><span>業者区分：</span></el-col>
            <el-col :span="20">
              <el-checkbox-group v-model="companyCategories" size="mini">
                <el-checkbox label="排出業者" value="0"/>
                <el-checkbox label="産廃収運業者" value="1"/>
                <el-checkbox label="産廃処分業者" value="2"/>
                <el-checkbox label="有価等収運業者" value="3"/>
                <el-checkbox label="有価等処分業者" value="4"/>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3"><span>事業者コード：</span></el-col>
            <el-col :span="5">
              <el-input
                v-model="companyCode"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="3"><span>事業者名：</span></el-col>
            <el-col :span="5">
              <el-input
                v-model="companyName"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="3"><span>所在地：</span></el-col>
            <el-col :span="5">
              <el-select
                v-model="address"
                size="mini"
                clearable>
                <el-option label="system-00001" value="sys-001"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3"><span>代表者氏名：</span></el-col>
            <el-col :span="5">
              <el-input
                v-model="representativeName"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="3"><span>代表者電話番号：</span></el-col>
            <el-col :span="5">
              <el-input
                v-model="representativePhoneNumber"
                size="mini"
                clearable>
              </el-input>
            </el-col>
            <el-col :span="3"><span>郵便番号：</span></el-col>
            <el-col :span="5">
              <el-select
                v-model="postalCode"
                size="mini"
                clearable>
                <el-option label="system-00001" value="sys-001"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="el-row" :gutter="20">
            <el-col class="search-condition-button-tray" :offset="20" :span="4">
              <el-button size="small" type="primary">検索</el-button>
              <el-button size="small" type="primary" plain>クリア</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-checkbox-group v-model="pickedCompanies">
          <el-table
            :data="companies"
            border
            stripe
          >
            <el-table-column
              :resizable="false"
              align="left"
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
              label="事業者コード"
              show-overflow-tooltip
              min-width="150"/>
            <el-table-column
              :resizable="false"
              align="left"
              header-align="center"
              label="事業者名"
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
      companies: [
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
