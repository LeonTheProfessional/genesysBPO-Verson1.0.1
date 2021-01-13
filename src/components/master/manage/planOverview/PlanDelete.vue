<template>
  <div class="plan-delete">
    <el-row :gutter="20">
      <el-col :span="4">
        <span>*名称：</span>
      </el-col>
      <el-col :span="16">
        <span class="info-text-span">{{ planName }}</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span>*利用可否：</span>
      </el-col>
      <el-col :span="16">
        <span class="info-text-span">{{ availableFlag ? '可' : '否' }}</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span>備考：</span>
      </el-col>
      <el-col :span="16">
        <el-input
          disabled
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          :value="remark">
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span>*利用可能サビース</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="1">
        <el-col
          v-for="service in services"
          :span="7"
          :key="service.serviceCode">
          <el-tag style="margin-bottom: 10px">{{ service.serviceCode + ':' + service.serviceName }}</el-tag>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PlanDelete',
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    planId: Number
  },
  data () {
    return {
      planName: 'TESTA',
      availableFlag: true,
      remark: 'The quick brown fox jumps over the lazy dog.',
      services: [
        {
          serviceName: 'サビース１',
          serviceCode: 'SER01'
        },
        {
          serviceName: 'サビース2',
          serviceCode: 'SER02'
        },
        {
          serviceName: 'サビース3',
          serviceCode: 'SER03'
        },
        {
          serviceName: 'サビース4',
          serviceCode: 'SER04'
        },
        {
          serviceName: 'サビース5',
          serviceCode: 'SER05'
        },
        {
          serviceName: 'サビース6',
          serviceCode: 'SER06'
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
