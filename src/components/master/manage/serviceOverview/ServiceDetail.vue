<template>
  <div class="service-detail bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="serviceCode"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly :value="serviceName"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">有効フラグ：</span>
      </el-col>
      <el-col :span="12">
        <el-switch
          :value="validFlag"
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
        <el-input readonly
                  type="textarea"
                  :rows="5"
                  resize="none"
                  :value="remark">
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
        <el-table border stripe :data="relatedSystemAndCharacter">
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="systemName"
            label="利用可能システム"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="systemRoleName"
            label="システムロール"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="organizationCategoryName"
            label="組織（キャラクター）"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="left"
            header-align="center"
            prop="userRoleName"
            label="ユーザー（キャラクター）"
            min-width="200"/>
          <el-table-column
            :resizable="false"
            align="center"
            header-align="center"
            width="85">
            <template #default>
              <el-button type="text" size="mini" style="width: 60px"><span>削除</span></el-button>
            </template>
          </el-table-column>
        </el-table>
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
  name: 'ServiceDetail',
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    planId: Number
  },
  data () {
    return {
      selectedUserId: '',
      validFlag: true,
      serviceCode: 'TESTA',
      serviceName: 'AAAA',
      remark: 'The quick brown fox jumps over the lazy dog.',
      relatedSystemAndCharacter: [
        {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCategoryName: '排出',
          userRoleName: '作業担当'
        }, {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCategoryName: '排出',
          userRoleName: '作業担当'
        }, {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCategoryName: '排出',
          userRoleName: '作業担当'
        }, {
          systemName: '許可証システム',
          systemRoleName: '作業担当',
          organizationCategoryName: '排出',
          userRoleName: '作業担当'
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
