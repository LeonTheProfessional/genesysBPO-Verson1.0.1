<template>
  <div class="plant-detail bpo-dialog">
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
        <el-input readonly size="mini" :value="plantCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場名：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="plantName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場代表者氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="plantRepresentativeName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場代表者電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="plantRepresentativePhoneName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業場代表者ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="plantRepresentativeFaxCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">郵便番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XXX-XXXX" :value="postalCode"/>
        <el-button style="margin-left: 10px" type="info" size="mini"><span>郵便番号から住所を入力</span></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地１：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="都道府県 （例）神奈川県" :value="address1"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地２：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="市区町村 （例）横浜市鶴見区" :value="address2"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地３：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="町域 （例）諏訪坂" :value="address3"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">所在地４：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="その他 （例）1丁目1－１" :value="address4"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">自治体コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="municipalCode"/>
        <el-button style="margin-left: 10px" type="info" size="mini"><span>設定</span></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">自治体名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="municipalName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">許可証：</span>
      </el-col>
      <el-col :span="12">
        <el-switch
          :value="licenseFlag"
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
        <el-input readonly size="mini" :value="jwnetPlantCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">JWNET事業場区分：</span>
      </el-col>
      <el-col :span="12">
        <el-select
          size="mini"
          :value="jwnetPlantCategoryCode">
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
          :value="validityPeriod"
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
            label="業者区分"
            prop="companyCategoryName"
            header-align="center"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            label="JWNET加入者番号"
            prop="jwnetSubscriberCode"
            header-align="center"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            label="JWNET公開PW"
            prop="jwnetPublicPassword"
            header-align="center"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            label="EDI PW"
            prop="ediPassword"
            header-align="center"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            label="JWNET事業場番号"
            prop="jwnetPlantCode"
            header-align="center"
            min-width="200"/>
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
            prop="storageName"
            header-align="center"
            align="left"
            min-width="200"
          />
          <el-table-column
            label="備考"
            prop="remarks"
            header-align="center"
            align="center"
            min-width="200"
          />
          <el-table-column
            header-align="center"
            label="置場画像"
            min-width="300"
          >
            <template #default="{row}">
              <el-button size="mini" type="text"><span>{{ row.storageImageName }}</span></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" plain size="mini" @click="$emit('update:dialogVisible', false)"><span>閉じる</span>
        </el-button>
      </el-col>
      <el-col :span="12"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'plantDetail',
  methods: {
    addJwnetRegistrationInfo () {
    }
  },
  data () {
    return {
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
