<template>
  <div class="user-detail bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="detail-sub-title">基本情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">ユーザーID：</span>
      </el-col>
      <el-col :span="12">
        <el-input :value="userId"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input :value="userName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="detail-sub-title red-star">所属組織情報</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table
          :data="organizations"
          border
          stripe
        >
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="organizationName"
            label="所属組織"
            show-overflow-tooltip
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            label="キャラクター"
            prop="characterName"
            show-overflow-tooltip
            min-width="220"/>
          <el-table-column
            :resizable="false"
            align="center"
            header-align="center"
            label="有効期間"
            width="95">
            <template v-slot="{row}">
              <span>{{ row.validDateStart + ' ~ ' + row.validDateEnd }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="status"
            label="ステータス"
            show-overflow-tooltip
            min-width="200">
            <template v-slot="{row}">
              <span>{{ row.validFlag ? '有効' : '無効' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="representationName"
            label="利用可能システム"
            show-overflow-tooltip
            min-width="200">
            <template v-slot="{row}">
              <template v-for="(system,index) in row.availableSystems">
          <span
            :key="index"
            v-if="index !== 0">,</span>
                <span
                  :key="system.systemCode"
                >{{ system.systemName }}</span>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" plain size="mini" @click="$emit('update:dialogVisible', false)"><span>閉じる</span></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userDetail',
  props: {
    planId: Number
  },
  data () {
    return {
      userId: 'TESTA',
      userName: '',
      organizations: [
        {
          organizationName: 'org1',
          characterName: 'CHA1',
          validDateStart: '2011-10-06',
          validDateEnd: '2021-10-17',
          validFlag: true,
          availableSystems: [
            {
              systemName: 'sys1',
              systemCode: 'sys-001'
            },
            {
              systemName: 'sys2',
              systemCode: 'sys-002'
            },
            {
              systemName: 'sys3',
              systemCode: 'sys-003'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
