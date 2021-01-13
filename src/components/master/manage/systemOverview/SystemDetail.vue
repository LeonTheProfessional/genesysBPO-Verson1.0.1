<template>
  <div class="system-detail bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly v-model="systemCode"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly v-model="systemName"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">表示用名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly v-model="representationName"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">アプリURL：</span>
      </el-col>
      <el-col :span="12">
        <el-input readonly v-model="appUrl"/>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">利用ロール数：</span>
      </el-col>
      <el-col :span="12">
        <el-radio-group :value="usedRolesNumber">
          <el-radio label="一つ"/>
          <el-radio label="複数"/>
        </el-radio-group>
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
        <span class="red-star">備考：</span>
      </el-col>
      <el-col :span="16">
        <el-input
          readonly
          type="textarea"
          :rows="5"
          resize="none"
          v-model="remark">
        </el-input>
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
  name: 'SystemDetail',
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
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
        console.log(this)
        this.$emit('update:dialogVisible', false)
      })
    }
  },
  data () {
    return {
      systemCode: 'TESTA',
      systemName: 'AAAA',
      remark: 'The quick brown fox jumps over the lazy dog.',
      usedRolesNumber: '一つ',
      representationName: 'TESTA',
      appUrl: 'RULLLLL',
      validFlag: true
    }
  }
}
</script>

<style scoped>

</style>
