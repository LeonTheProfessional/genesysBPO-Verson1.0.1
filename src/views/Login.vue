<template>
  <div class="login">
    <div style="height:80px">
      <el-header height="50px">
        <BPOHeader :show-person-info="false"/>
      </el-header>
    </div>
    <div style="text-align: center;margin-top: 150px">
      <el-card style="width: 500px;display: inline-block">
        <el-row style="margin-bottom: 30px">
          <el-col style="text-align: center"><span style="font-size: 20px;">ログイン</span></el-col>
        </el-row>
        <el-form ref="form" :model="loginForm" label-width="0" style="text-align: center">
          <el-form-item>
            <el-input placeholder="ユーザーIDを入力してください" v-model="loginForm.userId"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="パスワードを入力してください" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-col style="text-align: left" :span="4" :offset="4">
              <el-checkbox label="ログイン情報を記憶する" v-model="loginForm.isRememberFlag"/>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 300px"
              type="primary"
              @click="handleLogin"
            ><span>ログイン</span></el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <organization-selector
      :visible.sync="dialogVisible"
    />
    <div style="height:40px;position: fixed;bottom: 0;width: 100%">
      <el-row>
        <el-col style="text-align: center">
          <footer>
            <p style="white-space: nowrap;margin: 0;font-weight: 400;font-size: 12px;color: rgb(144, 147, 153)">
              —Copyright. 2021 JEMS Inc. All rights reserved.—</p>
          </footer>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import OrganizationSelector from '@/components/common/OrganizationSelector'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userId: '',
        password: '',
        isRememberFlag: false
      },
      dialogVisible: false
    }
  },
  methods: {
    handleLogin () {
      const param = new URLSearchParams()
      param.append('email', this.loginForm.userId)
      param.append('usrPwd', this.loginForm.password)
      this.axios.post('doLogin', param).then(
        response => {
          const retResult = response.data.retResult
          if (retResult.status === 2) {
            this.$store.commit('saveToken', retResult.access_token)
            this.$store.commit('saveLoginUser', retResult.login_user)
            if (retResult.login_user) { // TODO
              this.$router.push('/request/list')// 依頼一覧
            } else {
              this.dialogVisible = true
            }
          } else {
            this.errmsg = response.data.retResult.errmsg
          }
        }
      )
    }
  },
  components: {
    OrganizationSelector
  }
}
</script>

<style scoped>
.login {
  height: 100%;
}

.el-button {
  background-color: #4c6c55;
  border-color: #4c6c55;
}

.el-button:hover {
  opacity: 0.8;
}

.el-input {
  width: 300px;
}
</style>
