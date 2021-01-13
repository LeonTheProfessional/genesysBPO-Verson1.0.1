<template>
  <div class="plant-modify bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">コード：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="organizationCode"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">名称：</span>
      </el-col>
      <el-col :span="12">
        <el-input size="mini" v-model="organizationName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">キャラクター：</span>
      </el-col>
      <el-col :span="12">
        <el-checkbox-group v-model="characters">
          <el-checkbox label="排出" value="0"/>
          <el-checkbox label="運搬" value="1"/>
          <el-checkbox label="処分" value="2"/>
          <el-checkbox label="行政" value="3"/>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">利用可能サービス：</span>
      </el-col>
      <el-col :span="12">
        <el-transfer
          :props="{key:'serviceCode',label:'serviceName'}"
          v-model="pickedServiceList"
          :data="availableServiceList"
          :titles="['選択可能サビース','選択済みサビース']"
        />
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
  name: 'organizationModify',
  methods: {
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
      organizationCode: '',
      organizationName: '',
      characters: [],
      pickedServiceList: [],
      availableServiceList: [
        {
          serviceName: 'サービス1',
          serviceCode: 'SER001'
        }, {
          serviceName: 'サービス2',
          serviceCode: 'SER002'
        }, {
          serviceName: 'サービス3',
          serviceCode: 'SER003'
        }, {
          serviceName: 'サービス4',
          serviceCode: 'SER004'
        }
      ]
    }
  }
}
</script>

<style scoped>
.table-with-inline-append .el-select {
  width: 100%;
}
</style>
