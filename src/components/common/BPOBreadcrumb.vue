<template>
  <div class="bpo-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="breadcrumbItem in breadcrumbItems"
        :to="breadcrumbItem.to"
        :key="breadcrumbItem.key"
        :style="{fontWeight: breadcrumbItem.isBorder?'border':'normal'}"
      >{{breadcrumbItem.label}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BPOBreadcrumb',
  props: {
    breadcrumbItems: Array
  }
}
</script>

<style scoped>
.bpo-breadcrumb {
  width: 100%;
  text-align: center;
}

.el-breadcrumb {
  width: 100%;
  line-height: 35px;
  display: inline-block;
  border-top: 1px solid #4c6c55;
  border-bottom: 1px solid #4c6c55;
  background: white;
  height: 35px;
}

.el-breadcrumb__item:first-child {
  margin-left: 30px;
}
</style>
