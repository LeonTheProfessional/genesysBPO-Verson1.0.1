<template>
  <div class="service-modify bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="serviceCode"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="serviceName"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">有効フラグ：</span>
      </el-col>
      <el-col :span="12">
        <el-switch
          v-model="validFlag"
          inactive-color="#ff4949"
          active-color="#13ce66"
          active-text="有効"
          inactive-text="無効">
        </el-switch>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">備考：</span>
      </el-col>
      <el-col :span="16">
        <el-input
          type="textarea"
          :rows="5"
          resize="none"
          v-model="remark">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span class="red-star">*利用可能システム及びキャラクター設定</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table stripe :data="relatedSystemAndCharacterList">
          <el-table-column
            :resizable="false"
            align="center"
            prop="systemName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>利用可能システム</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedSystem">
                <el-option label="許可証システム" :value="{
                   systemName: '許可証システム',
                   systemCode: 'sys-0001'
                }"/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="systemRoleName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>システムロール</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedSystemRole">
                <el-option label="許可証システム" :value="{
                  systemRoleName: '作業担当',
                  systemRoleCode: 'sys-role-0001'
                }"/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="organizationCharacterName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>組織（キャラクター）</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedOrganizationCharacter">
                <el-option label="排出" :value="{
                  organizationCharacterName: '排出',
                  organizationCharacterCode: 'org-cate-0001'
                }"/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="userCharacterName"
            header-align="center"
            min-width="200">
            <template #header>
              <span>ユーザー（キャラクター）</span>
              <el-divider/>
              <el-select clearable size="mini" v-model="selectedUserCharacter">
                <el-option label="作業担当" :value="{
                   userCharacterName: '作業担当',
                   userCharacterCode: 'role-0001'
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
                @click="addRelatedSystemAndCharacter"
              ><span>追加</span></el-button>
            </template>
            <template #default>
              <el-button type="text" size="mini"><span>削除</span></el-button>
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
  name: 'ServiceModify',
  props: {
    planId: Number
  },
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
    addRelatedSystemAndCharacter () {
      this.relatedSystemAndCharacterList.push({
        systemName: this.selectedSystem.systemName,
        systemRoleName: this.selectedSystemRole.systemRoleName,
        organizationCharacterName: this.selectedOrganizationCharacter.organizationCharacterName,
        userCharacterName: this.selectedUserCharacter.userCharacterName
      })
    }
  },
  data () {
    return {
      selectedSystem: {
        systemName: '',
        systemCode: ''
      },
      selectedSystemRole: {
        systemRoleName: '',
        systemRoleCode: ''
      },
      selectedOrganizationCharacter: {
        organizationCharacterName: '',
        organizationCharacterCode: ''
      },
      selectedUserCharacter: {
        userCharacterName: '',
        userCharacterCode: ''
      },
      validFlag: true,
      serviceCode: 'TESTA',
      serviceName: 'AAAA',
      remark: 'The quick brown fox jumps over the lazy dog.',
      relatedSystemAndCharacterList: [
        {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCharacterName: '排出',
          userCharacterName: '作業担当'
        }, {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCharacterName: '排出',
          userCharacterName: '作業担当'
        }, {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCharacterName: '排出',
          userCharacterName: '作業担当'
        }, {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCharacterName: '排出',
          userCharacterName: '作業担当'
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

.cell span {
  margin-top: 5px;
}
</style>
