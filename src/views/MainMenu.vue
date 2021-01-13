<template>
  <el-container class="main-menu">
    <el-header :height="'120px'">
      <BPOHeader/>
      <top-navigation-menu
        :menu-items="menuItems"
        :active-tag-index="defaultIndex"
      />
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer height="40px">
      <BPOFooter/>
    </el-footer>
  </el-container>
</template>

<script>
import TopNavigationMenu from '@/components/common/TopNavigationMenu'

export default {
  name: 'MainMenu',
  props: {
    menuItemCategory: {
      type: String,
      required: true,
      validator: value => {
        return [
          'route',
          'master'
        ].includes(value)
      }
    }
  },
  provide () {
    return {
      menuItems: this.menuItems
    }
  },
  computed: {
    menuItems () {
      let menuItems
      switch (this.menuItemCategory) {
        case 'route':
          menuItems = [
            {
              index: '/menu/route/',
              label: 'ルート'
            },
            {
              index: '/menu/route/manage',
              label: '管理'
            }
          ]
          break
        case 'master':
          menuItems = [
            {
              index: '/menu/master/',
              label: 'マスタ'
            },
            {
              index: '/menu/master/manage',
              label: '管理'
            }
          ]
      }
      return menuItems
    },
    defaultIndex () {
      return this.menuItems[0].index
    }
  },
  mounted () {
    this.$router.push({ path: this.defaultIndex })
  },
  components: {
    TopNavigationMenu
  }
}
</script>

<style scoped>

.el-main {
  height: 100%;
}

.el-container {
  min-width: 1500px;
}
</style>
