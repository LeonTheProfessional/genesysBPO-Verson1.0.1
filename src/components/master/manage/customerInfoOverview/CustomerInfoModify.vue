<template>
  <div class="customer-info-modify bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">顧客種別：</span>
      </el-col>
      <el-col :span="12">
        <el-radio-group size="mini" v-model="customerTypeCode">
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
        <el-checkbox-group v-model="characters">
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
        <el-input size="mini" v-model="customerCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="customerName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="representativeName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XX-XXXX-XXXX" v-model="representativePhoneNumber"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">代表者ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XX-XXXX-XXXX" v-model="representativeFaxNumber"/>
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
        <el-select size="mini" v-model="planId"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">利用可能サービス：</span>
      </el-col>
      <el-col :span="16">
        <el-table class="table-with-inline-append" stripe :data="relatedServiceList">
          <el-table-column
            :resizable="false"
            align="center"
            prop="serviceName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>名称</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedServiceId">
                <el-option label="許可証システム" :value="{
                   serviceName: '許可証システム',
                   serviceCode: 'sys-0001'
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
                @click="addRelatedService"
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
            prop="organizationName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>名称</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedOrganization">
                <el-option label="許可証システム" :value="{
                   organizationName: '許可証システム'
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
                @click="addRelatedService"
              ><span>追加</span></el-button>
            </template>
            <template #default>
              <el-button type="text" size="mini"><span>削除</span></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="8" :span="16">
        <span>※組織１を追加する時、JEMS組織のは自動的に追加すること</span>
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
  name: 'CustomerInfoModify',
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
    addRelatedService () {
      this.relatedServiceList.push({
        serviceName: this.selectedService.serviceName
      })
    },
    addRelatedOrganization () {
      this.relatedOrganizationList.push({
        organizationName: this.selectedService.organizationName
      })
    }
  },
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

.table-with-inline-append .el-select {
  width: 100%;
}
</style>
