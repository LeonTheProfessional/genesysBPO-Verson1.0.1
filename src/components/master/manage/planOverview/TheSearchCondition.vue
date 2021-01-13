<template>
  <div class="search-condition condition-body">
    <el-row>
      <el-col :span="3"><span class="search-condition-title">検索条件</span></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>プラン名称：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="routeName"
          size="mini"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4" :offset="1"><span>利用可否：</span></el-col>
      <el-col :span="6">
        <el-switch
          style="display: block"
          v-model="availableFlag"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="利用可"
          inactive-text="利用否">
        </el-switch>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" :offset="1"><span>利用可能サービス：</span></el-col>
      <el-col :span="6">
        <el-select v-model="availableServiceId" :size="'mini'" clearable placeholder="選んでください">
          <el-option
            v-for="availableService in availableServices"
            :key="availableService.id"
            :label="availableService.name"
            :value="availableService.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" :offset="1"><span>備考：</span></el-col>
      <el-col :span="6">
        <el-input
          v-model="remark"
          size="mini"
          label="処分業者名称："
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="20" :span="4">
        <el-button type="primary" size="mini" style="width: 100px">
          <span>検索</span>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SearchCondition',
  data () {
    return {
      availableFlag: true,
      routeName: '',
      availableServiceId: '',
      availableServices: [
        {
          serviceId: 11,
          serviceName: 'SER01：サビース１'
        },
        {
          serviceId: 12,
          serviceName: 'SER01：サビース２'
        }
      ],
      remark: ''
    }
  }
}
</script>

<style scoped>

</style>
