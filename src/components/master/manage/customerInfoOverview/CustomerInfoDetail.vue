<template>
  <div class="customer-info-detail bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">顧客種別：</span>
      </el-col>
      <el-col :span="12">
        <el-radio-group size="mini" :value="customerTypeCode">
          <el-radio label="1">通常</el-radio>
          <el-radio label="2">AdminS</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">キャラクター：</span>
      </el-col>
      <el-col :span="12">
        <el-checkbox-group :value="characters">
          <el-checkbox label="排出" value="0"/>
          <el-checkbox label="運搬" value="1"/>
          <el-checkbox label="処分" value="2"/>
          <el-checkbox label="行政" value="3"/>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="customerCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="customerName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" :value="representativeName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="representativePhoneNumber"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">代表者ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="representativeFaxNumber"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">郵便番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XXX-XXXX" :value="postalCode"/>
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
    <el-row :gutter="20">
      <el-col>
        <span class="detail-sub-title">利用可能サービス情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">プラン：</span>
      </el-col>
      <el-col :span="12">
        <el-select size="mini" :value="planId"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">利用可能サービス：</span>
      </el-col>
      <el-col :span="16">
        <el-table border class="table-with-inline-append" stripe :data="relatedServiceList">
          <el-table-column
            :resizable="false"
            align="center"
            label="名称"
            prop="serviceName"
            header-align="center"
            min-width="200"/>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">担当組織情報</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span class="red-star">担当組織：</span>
      </el-col>
      <el-col :span="16">
        <el-table class="table-with-inline-append" stripe :data="relatedOrganizationList">
          <el-table-column
            :resizable="false"
            align="center"
            label="名称"
            prop="organizationName"
            header-align="center"
            min-width="200"/>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" plain size="mini" @click="$emit('update:dialogVisible', false)"><span>閉じる</span></el-button>
      </el-col>
      <el-col :span="12"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CustomerInfoDetail',
  data () {
    return {
      planId: '',
      characters: [],
      validityPeriod: [],
      selectedService: {
        serviceName: ''
      },
      selectedOrganization: {
        organizationName: ''
      },
      customerCode: 'TESTA',
      customerName: 'AAAA',
      relatedServiceList: [
        {
          serviceName: 'SER001：サービス1'
        }, {
          serviceName: 'SER001：サービス2'
        }, {
          serviceName: 'SER001：サービス3'
        }, {
          serviceName: 'SER001：サービス4'
        }
      ],
      relatedOrganizationList: [
        {
          organizationName: 'JEMS組織'
        }, {
          organizationName: 'JEMS組織 > 組織１'
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-divider--horizontal {
  margin: 0 0 5px 0;
}

.el-select {
  margin-bottom: 5px;
}

.el-table .el-select {
  margin: 0;
}

.cell span {
  margin-top: 5px;
}
</style>
