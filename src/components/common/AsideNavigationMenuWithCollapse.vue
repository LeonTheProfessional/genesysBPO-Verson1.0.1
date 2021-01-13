<template>
  <div class="aside-navigation-menu-with-collapse">
    <el-menu
      @mouseover.native="collapse=false"
      @mouseleave.native="collapse=true"
      :collapse="collapse"
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
      <el-menu-item index="#organizationSelector" @click="dialogVisible = true">
        <i class="el-icon-third-part-management"/>
        <span>組織選択</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <i class="el-icon-third-part-log-out"/>
        <span>ログアウト</span>
      </el-menu-item>
    </el-menu>
    <organization-selector show-current-org-name :visible.sync="dialogVisible"/>
  </div>
</template>

<script>
import OrganizationSelector from '@/components/common/OrganizationSelector'

export default {
  name: 'NavigationMenuWithCollapse',
  props: {
    activeTagIndex: String,
    menuItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      collapse: true
    }
  },
  computed: {
    defaultActivePath () {
      return this.activeTagIndex == null ? this.menuItems[0].index : this.activeTagIndex
    }
  },
  components: { OrganizationSelector }
}
</script>

<style scoped>
.aside-navigation-menu-with-collapse {
  height: 100%;
}
.el-menu {
  background-color: #4c6c55;
  height: 100%;
  float: left;
  z-index: 10;
  border-top: 1px #DCDFE6 solid;
}

.el-menu .el-submenu, .el-menu-item {
  background-color: white;
  margin-top: 1px;
  color: #4c6c55;
}

.el-menu .el-menu-item:hover {
  background-color: #b7d316;
}

.el-submenu__title i, .el-menu-item i {
  color: #4c6c55;
}

.el-menu-item.is-active {
  background-color: #b7d316;
}

.el-submenu__title span {
  color: #4c6c55;
  font-weight: bold;
}
</style>

<style>
.el-submenu__title:hover {
  background-color: #b7d316;
}
</style>
