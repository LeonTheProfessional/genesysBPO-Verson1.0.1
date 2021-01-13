<template>
  <div class="user-create bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">業者区分：</span>
      </el-col>
      <el-col :span="12">
        <el-checkbox-group :value="companyCategories" size="mini">
          <el-checkbox label="排出業者" value="0"/>
          <el-checkbox label="産廃収運業者" value="1"/>
          <el-checkbox label="産廃処分業者" value="2"/>
          <el-checkbox label="有価等収運業者" value="3"/>
          <el-checkbox label="有価等処分業者" value="4"/>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">事業者コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" readonly :value="companyCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="8" :span="12">
        <span>※先頭がB、Qのときは番号を自動取得します。C のときは統一許可番号を入力してください。</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">事業者名：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" readonly :value="companyName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" readonly :value="representativeName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="representativePhoneName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">代表者ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="representativeFaxCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">郵便番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XXX-XXXX" :value="postalCode"/>
        <el-button style="margin-left: 10px" type="info" size="mini"><span>郵便番号から住所を入力</span></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地１：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="都道府県 （例）神奈川県" :value="address1"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地２：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="市区町村 （例）横浜市鶴見区" :value="address2"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">所在地３：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="町域 （例）諏訪坂" :value="address3"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">所在地４：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="その他 （例）1丁目1－１" :value="address4"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">自治体コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" :value="municipalCode"/>
        <el-button style="margin-left: 10px" type="info" size="mini"><span>設定</span></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">自治体名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" :value="municipalName"/>
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
  name: 'companyModify',
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
