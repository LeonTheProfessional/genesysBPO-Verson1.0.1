<template>
  <el-menu
    class="top-navigation-menu"
    mode="horizontal"
    text-color="#fff"
    :router="true"
    active-text-color="#fff"
    :default-active="defaultActivePath"
    style="margin-top: 10px"
  >
    <el-menu-item
      v-for="menuItem in menuItems"
      :key="menuItem.index"
      :index="menuItem.index"
      style="width: 100px; height: 30px; margin-right: 3px; text-align: center"
    >{{ menuItem.label }}
    </el-menu-item>
    <el-menu-item style="float: right;height: 30px; margin-right: 3px" index="/">ログアウト</el-menu-item>
    <el-menu-item style="float: right;height: 30px; margin-right: 3px" index="/">組織選択</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TopNavigationMenu',
  props: {
    activeTagIndex: String,
    menuItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    defaultActivePath () {
      return this.activeTagIndex == null ? this.menuItems[0].index : this.activeTagIndex
    }
  }
}
</script>

<style scoped>
.top-navigation-menu {
  height: 30px;
}
</style>
