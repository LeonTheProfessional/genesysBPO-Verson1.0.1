<template>
  <div class="plant-modify bpo-dialog">
    <el-row>
      <el-col>
        <span class="detail-sub-title">事業場基本情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">事業者名：</span>
      </el-col>
      <el-col :span="12">
        <span>{{ companyName }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">事業場詳細情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="plantCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場名：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="plantName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場代表者氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="plantRepresentativeName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場代表者電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XX-XXXX-XXXX" v-model="plantRepresentativePhoneName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場代表者ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XX-XXXX-XXXX" v-model="plantRepresentativeFaxCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">郵便番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XXX-XXXX" v-model="postalCode"/>
        <el-button style="margin-left: 10px" type="info" size="mini"><span>郵便番号から住所を入力</span></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地１：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="都道府県 （例）神奈川県" v-model="address1"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地２：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="市区町村 （例）横浜市鶴見区" v-model="address2"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地３：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="町域 （例）諏訪坂" v-model="address3"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">所在地４：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="その他 （例）1丁目1－１" v-model="address4"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">自治体コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="municipalCode"/>
        <el-button style="margin-left: 10px" type="info" size="mini"><span>設定</span></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">自治体名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="municipalName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">許可証：</span>
      </el-col>
      <el-col :span="12">
        <el-switch
          v-model="licenseFlag"
          inactive-color="#ff4949"
          active-color="#13ce66"
          active-text="要"
          inactive-text="不要">
        </el-switch>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">JWNET事業場番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="jwnetPlantCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">JWNET事業場区分：</span>
      </el-col>
      <el-col :span="12">
        <el-select
          size="mini"
          v-model="jwnetPlantCategoryCode">
          <el-option label="排出" value="0"/>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">有効期間：</span>
      </el-col>
      <el-col :span="12">
        <el-date-picker
          v-model="validityPeriod"
          type="daterange"
          size="mini"
          start-placeholder="開始日"
          end-placeholder="終了日"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">JWNET登録情報</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table class="table-with-inline-append" stripe :data="jwnetRegistrationInfoList">
          <el-table-column
            :resizable="false"
            align="center"
            prop="companyCategoryName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>業者区分</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedCompanyCategory">
                <el-option label="許可証システム" :value="{
                   companyCategoryName: '許可証システム',
                   companyCategoryCode: 'CC-002'
                }"/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="jwnetSubscriberCode"
            header-align="center"
            min-width="200">
            <template #header>
              <span>JWNET加入者番号</span>
              <el-divider/>
              <el-input size="mini" v-model="jwnetCodeEntered"/>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="jwnetPublicPassword"
            header-align="center"
            min-width="200">
            <template #header>
              <span>JWNET公開PW</span>
              <el-divider/>
              <el-input size="mini" v-model="jwnetPublicPasswordEntered"/>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="ediPassword"
            header-align="center"
            min-width="200">
            <template #header>
              <span>EDI PW</span>
              <el-divider/>
              <el-input size="mini" v-model="ediPasswordEntered"/>
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
                @click="addJwnetRegistrationInfo"
              ><span>追加</span></el-button>
            </template>
            <template #default>
              <el-button type="text" size="mini"><span>削除</span></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">置場情報</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table border stripe :data="storageInfoList">
          <el-table-column
            label="置場名"
            header-align="center"
            align="center"
            min-width="200"
          >
            <template #default>
              <el-input size="mini"/>
            </template>
          </el-table-column>
          <el-table-column
            label="備考"
            header-align="center"
            align="center"
            min-width="200"
          >
            <template #default>
              <el-input size="mini"/>
            </template>
          </el-table-column>
          <el-table-column
            header-align="center"
            label="置場画像"
            min-width="300"
          >
            <template #default="{row}">
              <el-row>
                <el-col :span="16">
                  <el-button size="mini" type="text"><span>{{ row.storageImageName }}</span></el-button>
                </el-col>
                <el-col :span="8">
                  <el-button size="mini" type="info"><span>アップロード</span></el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column
            width="80"
          >
            <template #default>
              <el-button size="mini" type="text"><span>クリア</span></el-button>
            </template>
          </el-table-column>
        </el-table>
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
  name: 'companyModify',
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
    },
    addJwnetRegistrationInfo () {
      this.jwnetRegistrationInfoList.push({
        organizationName: this.selectedService.organizationName
      })
    }
  },
  data () {
    return {
      selectedCompanyCategory: {},
      jwnetCodeEntered: '',
      jwnetPublicPasswordEntered: '',
      plantRepresentativeName: '',
      plantRepresentativePhoneName: '',
      plantRepresentativeFaxCode: '',
      municipalCode: '',
      municipalName: '',
      licenseFlag: true,
      address1: '',
      address2: '',
      address3: '',
      address4: '',
      jwnetPlantCode: '',
      jwnetPlantCategoryCode: '',
      validityPeriod: [],
      plantCode: 'TESTA',
      plantName: '',
      companyName: 'facility-APOLLO',
      representativePhoneNumber: '',
      representativeName: '',
      postalCode: '',
      address: '',
      storageInfoList: [
        {
          storageName: '',
          remarks: '',
          storageImageName: '1245555.jpg'
        }, {
          storageName: '',
          remarks: '',
          storageImageName: '1245555.jpg'
        }, {
          storageName: '',
          remarks: '',
          storageImageName: '1245555.jpg'
        }, {
          storageName: '',
          remarks: '',
          storageImageName: '1245555.jpg'
        }
      ],
      jwnetRegistrationInfoList: [
        {
          companyCategoryName: '管理',
          jwnetSubscriberCode: '123456789',
          jwnetPublicPassword: '1245555',
          ediPassword: 'Jolin'
        }, {
          companyCategoryName: '管理',
          jwnetSubscriberCode: '123456789',
          jwnetPublicPassword: '1245555',
          ediPassword: 'Jolin'
        }, {
          companyCategoryName: '排出',
          jwnetSubscriberCode: '123456789',
          jwnetPublicPassword: '1245555',
          ediPassword: 'Jolin'
        }, {
          companyCategoryName: '排出',
          jwnetSubscriberCode: '123456789',
          jwnetPublicPassword: '1245555',
          ediPassword: 'Jolin'
        }
      ]
    }
  }
}
</script>

<style scoped>
.table-with-inline-append .el-select {
  width: 100%;
}
</style>
