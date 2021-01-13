<template>
  <div class="RouteList">
    <el-container>
      <el-header height="50px">
        <BPOHeader/>
      </el-header>
      <el-container>
        <el-aside width="65px" style="overflow: visible">
          <component :is="currentNavigationMenu" v-bind="{activeTagIndex:'/route/list',menuItems:this.routeMenu}"/>
        </el-aside>
        <el-container>
          <el-header height="40px">
            <BPOBreadcrumb
              :breadcrumb-items="[{label:'ルート', key: 1}, {label:'ルート一覧', key: 2, isBorder: true}]"
            />
          </el-header>
          <el-main>
            <el-row :gutter="20">
              <el-col>
                <search-condition/>
              </el-col>
            </el-row>
            <el-row class="route-list-table-container">
              <route-list-table/>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchCondition from '@/components/route/route/overview/TheSearchCondition.vue'
import RouteListTable from '@/components/route/route/overview/TheRouteListTable.vue'
import NavigationMenu from '@/components/common/AsideNavigationMenu'
import AsideNavigationMenuWithCollapse from '@/components/common/AsideNavigationMenuWithCollapse'

export default {
  name: 'list',
  inject: ['routeMenu'],
  data () {
    return {}
  },
  computed: {
    currentNavigationMenu () {
      switch (this.menuType) {
        case 'vertical-collapse': {
          return 'AsideNavigationMenuWithCollapse'
        }
        case 'vertical': {
          return 'NavigationMenu'
        }
        default : {
          return 'AsideNavigationMenuWithCollapse'
        }
      }
    }
  },
  props: {
    menuType: {
      default: 'vertical-collapse',
      type: String
    }
  },
  components: {
    SearchCondition,
    RouteListTable,
    NavigationMenu,
    AsideNavigationMenuWithCollapse
  }
}
</script>

<style scoped>
</style>
