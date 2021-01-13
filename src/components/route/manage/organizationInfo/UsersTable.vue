<template>
  <div class="users-table">
    <el-table
      :data="users"
    >
      <el-table-column
        label="ユーザーID"
        align="center"
        prop="userId"
        :min-width="200"/>
      <el-table-column
        label="氏名"
        align="center"
        prop="userName"
        :min-width="220"/>
      <el-table-column
        label="役割"
        align="center"
        prop="roleName"
        :min-width="200"/>
      <el-table-column
        label="所属組織"
        align="center"
        prop="organizationName"
        :min-width="300"/>
      <el-table-column
        align="center"
        :width="100">
        <template v-slot="{row}">
          <el-button>選択{{ row.name }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'usersTable',
  props: {
    users: Array
  }
}
</script>

<style scoped>

</style>
