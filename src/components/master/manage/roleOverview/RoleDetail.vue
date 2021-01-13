<template>
  <div class="role-detail bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="roleCode"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="roleName"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">システム名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="systemName"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">有効フラグ：</span>
      </el-col>
      <el-col :span="12">
        <el-radio-group :value="validFlag">
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
          readonly
          type="textarea"
          :rows="5"
          resize="none"
          :value="remark">
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">権限：</span>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col
            v-for="role in roles"
            :span="7"
            :key="role.roleId">
            <el-tag style="margin-bottom: 10px">{{ role.roleName }}</el-tag>
          </el-col>
        </el-row>
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
  name: 'RoleDetail',
  props: {
    planId: Number
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
      ]
    }
  }
}
</script>

<style scoped>
</style>
