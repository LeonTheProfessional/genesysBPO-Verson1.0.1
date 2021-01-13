<template>
  <el-menu
    class="navigation-menu"
    :collapse="true"
    :router="true"
    :default-active="defaultActivePath"
  >
    <el-submenu
      v-for="menuItem in menuItems"
      :key="menuItem.index"
      :index="menuItem.index"
    >
      <el-menu-item
        v-for="subMenuItem in menuItem.children"
        :key="subMenuItem.index"
        :index="subMenuItem.index"
      >
        <i :class="subMenuItem.iconClass==null?'no-icon-submenu-item':subMenuItem.iconClass"/>
        <span>{{ subMenuItem.label }}</span>
      </el-menu-item>
      <template #title>
        <i :class="menuItem.iconClass"/>
        <span>{{ menuItem.label }}</span>
      </template>
    </el-submenu>
    <el-menu-item index="/login/organization-select">
      <i class="el-icon-user-solid"/>
      <span>組織選択</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavigationMenu',
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
</style>
