<template>
  <div class="role-create bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input  v-model="roleCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input  v-model="roleName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">システム名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input  v-model="systemName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">有効フラグ：</span>
      </el-col>
      <el-col :span="12">
        <el-radio-group v-model="validFlag">
          <el-radio :label="true">有効</el-radio>
          <el-radio :label="false">無効</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="invisible-star">備考：</span>
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
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">権限：</span>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-checkbox-group v-model="pickedRoleIdList">
            <el-col
              v-for="role in roles"
              :span="8"
              :key="role.roleId">
              <el-checkbox style="margin-bottom: 10px" :label="role.roleName"
                           :value="role.roleId"></el-checkbox>
            </el-col>
          </el-checkbox-group>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" size="mini" @click="handleSave"><span>保存</span></el-button>
      </el-col>
      <el-col :offset="1" :span="4">
        <el-button size="mini" @click="handleCancel"><span>キャンセル</span></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RoleCreate',
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
    }
  },
  data () {
    return {
      roleCode: 'TESTA',
      roleName: 'AAAA',
      remark: 'The quick brown fox jumps over the lazy dog.',
      systemName: 'TESTA',
      validFlag: true,
      roles: [
        {
          roleName: 'システム管理',
          roleId: 1111
        }, {
          roleName: 'ロール管理',
          roleId: 1112
        }, {
          roleName: 'サビース管理',
          roleId: 1113
        }, {
          roleName: 'プラン管理',
          roleId: 1114
        }, {
          roleName: '組織管理',
          roleId: 1115
        }, {
          roleName: '事業者管理',
          roleId: 1116
        }, {
          roleName: '顧客分類管理',
          roleId: 1117
        }, {
          roleName: 'マスタ管理',
          roleId: 1118
        }
      ],
      pickedRoleIdList: []
    }
  }
}
</script>

<style scoped>

</style>
