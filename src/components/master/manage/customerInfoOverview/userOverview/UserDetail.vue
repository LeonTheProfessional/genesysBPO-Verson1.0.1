<template>
  <div class="user-modify bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="detail-sub-title">基本情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">所属組織：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="organizationName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">ユーザーID：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="userId"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="userName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="phoneNumber"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly size="mini" placeholder="（例）XX-XXXX-XXXX" :value="faxCode"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><span>ステータス：</span></el-col>
      <el-col :span="12">
        <el-radio-group size="mini" :value="validFlag">
          <el-radio label="有効" value="1"/>
          <el-radio label="無効" value="0"/>
        </el-radio-group>
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
  name: 'userDetail',
  data () {
    return {
      userId: 'TESTA',
      userName: '',
      phoneNumber: '',
      faxCode: '',
      validFlag: false,
      organizationName: 'org1'
    }
  }
}
</script>

<style scoped>
</style>
