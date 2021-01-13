<template>
  <div class="organization-selector">
    <el-dialog title="組織選択" width="600px" :visible.sync="visibleSelf">
      <el-row>
        <el-col>
          <span class="red-star">ここで選択した組織以下が、処理の対象となります.</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-if="showCurrentOrgName">
        <el-col :span="8">
          <span>当前組織：</span>
        </el-col>
        <el-col :span="16">
          <span class="info-text-span">{{ selectedOrganizationName }}</span>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <span class="detail-sub-title">組織：</span>
        </el-col>
        <el-col :span="16">
          <el-select size="mini" v-model="currentOrganizationCode">
            <el-option v-for="organization in selectableOrganizationList" :key="organization.orgCd"
                       :label="organization.orgNm" :value="organization.orgCd"/>
          </el-select>
          <el-button type="primary" style="margin-left: 10px" size="mini" @click="doChangeUsingOrganization">
            選択
          </el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :offset="8" :span="16">
          <el-checkbox label="選択組織を記憶する" v-model="rememberFlag"/>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import axios from '@/http'

export default {
  name: 'OrganizationSelector',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    showCurrentOrgName: {
      type: Boolean,
      default: false
    },
    defaultRemember: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedOrganizationName: '最上位組織',
      currentOrganizationCode: '',
      selectedOrganizationCode: '33',
      originalSelectedOrganizationCode: '',
      selectableOrganizationList: [],
      visibleSelf: false,
      rememberFlag: true,
      errorMessage:
        {
          messageList: [{
            messageType: 'notSelectOrganization',
            messageBody: '組織を選択してください'
          }],
          visible: false,
          currentErrorType: ''
        }
    }
  },
  methods: {
    doChangeUsingOrganization () {
      if (!_.isEmpty(this.currentOrganizationCode)) {
        axios.get('/doChangeSelectedOrganization', {
          params: {
            selectedOrganizationCode: this.currentOrganizationCode,
            setDefaultSelectedOrganizationFlag: this.rememberFlag && this.originalSelectedOrganizationCode !== this.currentOrganizationCode
          }
        }).then(({ data }) => {
          this.$router.push({ name: 'RouteOverview' })
          this.visibleSelf = false
          this.$message('組織変更が完了しました.')
        })
      } else {
        this.errorMessage.currentErrorType = 'notSelectOrganization'
        this.$message({
          showClose: true,
          message: this.currentErrorMessage.messageBody,
          type: 'warning'
        })
      }
    },
    initOrganizationSelector () {
      this.rememberFlag = this.defaultRemember
      if (this.showCurrentOrgName) {
        axios.get('http://localhost:8081/route/getSelectedOrganization').then(({ data }) => {
          this.selectedOrganizationName = data.retResult.orgNm
        })
      }
      axios.get('http://localhost:8081/route/initOrganizationSelector').then(({ data }) => {
        this.selectableOrganizationList = data.retResult.selectableOrganizationList
        this.originalSelectedOrganizationCode = data.retResult.defaultSelectOrganizationCode
      })
    }
  },
  computed: {
    currentErrorMessage () {
      let currentErrorMessage = {}
      this.errorMessage.messageList.forEach(message => {
        if (message.messageType === this.errorMessage.currentErrorType) {
          currentErrorMessage = message
          return false
        }
      })
      return currentErrorMessage
    }
  },
  watch: {
    visible: function (val) {
      if (!val) {
        this.visibleSelf = true
        this.initOrganizationSelector()
      } else {
        this.errorMessage.visible = false
        this.visibleSelf = false
        this.$emit('update:visible', false)
      }
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
