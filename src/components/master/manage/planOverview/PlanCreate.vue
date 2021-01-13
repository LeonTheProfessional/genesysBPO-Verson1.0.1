<template>
  <div class="plan-create">
    <el-row :gutter="20">
      <el-col :span="4">
        <span>*名称：</span>
      </el-col>
      <el-col :span="16">
        <el-input v-model="planName"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span>*利用可否：</span>
      </el-col>
      <el-col :span="16">
        <el-switch
          v-model="availableFlag"
          inactive-color="#ff4949"
          active-color="#13ce66"
          active-text="可"
          inactive-text="不可">
        </el-switch>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span>備考：</span>
      </el-col>
      <el-col :span="16">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="remark">
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <span>*利用可能サビース</span>
      </el-col>
    </el-row>
    <el-checkbox-group v-model="pickedServices">
      <el-row :gutter="20">
        <el-col :offset="1">
          <el-col
            v-for="service in services"
            :span="7"
            :key="service.serviceCode">
            <el-checkbox style="margin-bottom: 10px" :label="service.serviceName" :value="service.serviceCode"></el-checkbox>
          </el-col>
        </el-col>
      </el-row>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: '"planCreate',
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
      ],
      pickedServices: []
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
