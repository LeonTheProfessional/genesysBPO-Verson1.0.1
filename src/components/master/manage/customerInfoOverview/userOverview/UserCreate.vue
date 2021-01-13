<template>
  <div class="user-create bpo-dialog">
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
        <el-input v-model="organizationName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">ユーザーID：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="userId"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="userName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">電話番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XX-XXXX-XXXX" v-model="phoneNumber"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">ＦＡＸ番号：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="（例）XX-XXXX-XXXX" v-model="faxCode"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><span>ステータス：</span></el-col>
      <el-col :span="12">
        <el-radio-group size="mini" v-model="validFlag">
          <el-radio label="有効" value="1"/>
          <el-radio label="無効" value="0"/>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="detail-sub-title">パスワード設定</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span class="red-star">パスワード：</span>
      </el-col>
      <el-col :span="12">
        <el-input
          type="password"
          v-model="password">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span class="red-star">再入力：</span>
      </el-col>
      <el-col :span="12">
        <el-input
          type="password"
          v-model="confirmPassword">
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <pre>※パスワードポリシー
          （１）パスワードの最小文字数は８文字です。（最大：１２文字まで）
          （２）パスワードはユーザーIDと同一文字列と異なるように設定してください。
          （３）パスワードは英字と数字をそれぞれ最低1文字以上設定してください。</pre>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" size="mini" @click="handleSave('user')"><span>保存</span></el-button>
      </el-col>
      <el-col :span="4">
        <el-button size="mini" @click="handleCancel('user')"><span>キャンセル</span></el-button>
      </el-col>
      <el-col :span="8"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userCreate',
  methods: {
    addRelatedOrganization () {
      this.dialogVisible = true
    },
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
        if (type === 'user') {
          this.$emit('update:dialogVisible', false)
        } else if (type === 'organization') {
          this.dialogVisible = false
        }
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
      userId: 'TESTA',
      userName: '',
      phoneNumber: '',
      faxCode: '',
      validFlag: false,
      password: '',
      confirmPassword: '',
      organizationName: 'org1'
    }
  }
}
</script>

<style scoped>
</style>
