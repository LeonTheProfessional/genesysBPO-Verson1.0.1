import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import RouteOverview from '@/views/route/route/RouteOverview'
import RouteDetail from '@/views/route/route/RouteDetail'
import MainMenu from '@/views/MainMenu'
import OrganizationSelector from '@/views/LoginOrganizationSelector'
import RouteContractList from '@/components/route/route/overview/TheRouteListTableContractList'
import RoutePermissionList from '@/components/route/route/overview/TheRouteListTablePermissionList'
import ElScrollBarTest from '@/components/componentTest/ElScrollBarTest'
import RouteMenuRouteMain from '@/components/menu/route/route/Main'
import RouteMenuManageMain from '@/components/menu/route/manage/Main'
import MasterMenuMasterMain from '@/components/menu/master/master/Main'
import MasterMenuManageMain from '@/components/menu/master/manage/Main'
import RouteOrganizationInfo from '@/views/route/organizationInfo/main'
import MasterOrganizationInfo from '@/views/master/manage/organizationInfo/main'

import SystemOverview from '@/views/master/manage/SystemOverview'
import SystemCreate from '@/components/master/manage/systemOverview/SystemCreate'
import SystemDelete from '@/components/master/manage/systemOverview/SystemDelete'
import SystemModify from '@/components/master/manage/systemOverview/SystemModify'
import SystemDetail from '@/components/master/manage/systemOverview/SystemDetail'

import RoleOverview from '@/views/master/manage/RoleOverview'
import RoleCreate from '@/components/master/manage/roleOverview/RoleCreate'
import RoleDelete from '@/components/master/manage/roleOverview/RoleDelete'
import RoleModify from '@/components/master/manage/roleOverview/RoleModify'
import RoleDetail from '@/components/master/manage/roleOverview/RoleDetail'

import ServiceOverview from '@/views/master/manage/ServiceOverview'
import ServiceCreate from '@/components/master/manage/serviceOverview/ServiceCreate'
import ServiceDelete from '@/components/master/manage/serviceOverview/ServiceDelete'
import ServiceModify from '@/components/master/manage/serviceOverview/ServiceModify'
import ServiceDetail from '@/components/master/manage/serviceOverview/ServiceDetail'

import UserCreate from '@/components/master/organizationInfo/userInfo/UserCreate'
import UserDetail from '@/components/master/organizationInfo/userInfo/UserDetail'
import UserModify from '@/components/master/organizationInfo/userInfo/UserModify'

import CategoryCodeCreate from '@/components/master/organizationInfo/categoryCodeInfo/CategoryCodeCreate'
import CategoryCodeDelete from '@/components/master/organizationInfo/categoryCodeInfo/CategoryCodeDelete'
import CategoryCodeModify from '@/components/master/organizationInfo/categoryCodeInfo/CategoryCodeModify'
import CategoryCodeDetail from '@/components/master/organizationInfo/categoryCodeInfo/CategoryCodeDetail'

import OrganizationCreate from '@/components/master/organizationInfo/organization/OrganizationCreate'
import OrganizationModify from '@/components/master/organizationInfo/organization/OrganizationModify'
import OrganizationDetail from '@/components/master/organizationInfo/organization/OrganizationDetail'

import CustomerInfoOverview from '@/views/master/manage/customerInfoOverview/CustomerInfoOverview'
import CustomerInfoCreate from '@/components/master/manage/customerInfoOverview/CustomerInfoCreate'
import CustomerInfoDelete from '@/components/master/manage/customerInfoOverview/CustomerInfoDelete'
import CustomerInfoModify from '@/components/master/manage/customerInfoOverview/CustomerInfoModify'
import CustomerInfoDetail from '@/components/master/manage/customerInfoOverview/CustomerInfoDetail'

import CustomerInfoUserOverview from '@/views/master/manage/customerInfoOverview/UserOverview'
import CustomerInfoUserCreate from '@/components/master/manage/customerInfoOverview/userOverview/UserCreate'
import CustomerInfoUserModify from '@/components/master/manage/customerInfoOverview/userOverview/UserModify'
import CustomerInfoUserDetail from '@/components/master/manage/customerInfoOverview/userOverview/UserDetail'

import PlantOverview from '@/views/master/manage/PlantOverview'
import PlantCreate from '@/components/master/manage/plantOverview/PlantCreate'
import PlantDelete from '@/components/master/manage/plantOverview/PlantDelete'
import PlantModify from '@/components/master/manage/plantOverview/PlantModify'
import PlantDetail from '@/components/master/manage/plantOverview/PlantDetail'

import PlanOverview from '@/views/master/manage/PlanOverview'
import PlanCreate from '@/components/master/manage/planOverview/PlanCreate'
import PlanDelete from '@/components/master/manage/planOverview/PlanDelete'
import PlanModify from '@/components/master/manage/planOverview/PlanModify'
import PlanDetail from '@/components/master/manage/planOverview/PlanDetail'

import RouteBatchOperation from '@/views/route/route/routeBatchOperation/RouteBatchOperation'
import RouteConfirm from '@/views/route/route/routeBatchOperation/RouteConfirm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/login/organization-select',
    name: 'OrganizationSelector',
    component: OrganizationSelector
  },
  {
    path: '/menu/:menuItemCategory',
    props: true,
    name: 'MainMenu',
    component: MainMenu,
    children: [
      {
        path: '/menu/route/',
        name: 'RouteMenuMain',
        props: true,
        component: RouteMenuRouteMain,
        beforeEnter: (to, from, next) => {
          // 为了美化URL，没有在Path中保留category信息，因此在hook里手动填一下。下同。
          to.params.menuItemCategory = 'route'
          next()
        }
      },
      {
        path: '/menu/route/manage',
        name: 'ManageMenuMain',
        props: true,
        component: RouteMenuManageMain,
        beforeEnter: (to, from, next) => {
          to.params.menuItemCategory = 'route'
          next()
        }
      },
      {
        path: '/menu/master/',
        name: 'MasterMenuMasterMain',
        props: true,
        component: MasterMenuMasterMain,
        beforeEnter: (to, from, next) => {
          to.params.menuItemCategory = 'master'
          next()
        }
      },
      {
        path: '/menu/master/manage',
        name: 'MasterMenuManageMain',
        props: true,
        component: MasterMenuManageMain,
        beforeEnter: (to, from, next) => {
          to.params.menuItemCategory = 'master'
          next()
        }
      }
    ]
  },
  {
    path: '/route/list',
    props: route => ({ menuType: route.query.q }),
    name: 'RouteOverview',
    children: [
      {
        path: '/route/contract/list/:routeId',
        name: 'RouteContractList',
        component: RouteContractList
      },
      {
        path: '/route/permission/list/:routeId',
        name: 'RoutePermissionList',
        component: RoutePermissionList
      }
    ],
    component: RouteOverview
  },
  {
    path: '/route/manage/organization-info',
    name: 'RouteOrganizationInfo',
    component: RouteOrganizationInfo
  },
  {
    path: '/master/manage/organization-info',
    name: 'MasterOrganizationInfo',
    component: MasterOrganizationInfo,
    children: [
      {
        path: 'user/create',
        name: 'UserCreate',
        component: UserCreate
      },
      {
        path: 'user/create',
        name: 'UserCreate',
        component: UserModify
      },
      {
        path: 'user/detail',
        name: 'UserDetail',
        component: UserDetail
      },
      {
        path: 'category-code/create',
        name: 'CategoryCodeCreate',
        component: CategoryCodeCreate
      },
      {
        path: 'category-code/delete',
        name: 'CategoryCodeDelete',
        component: CategoryCodeDelete
      },
      {
        path: 'category-code/modify',
        name: 'CategoryCodeModify',
        component: CategoryCodeModify
      },
      {
        path: 'category-code/detail',
        name: 'CategoryCodeDetail',
        component: CategoryCodeDetail
      }, {
        path: 'create',
        name: 'OrganizationCreate',
        component: OrganizationCreate
      },
      {
        path: 'modify',
        name: 'OrganizationModify',
        component: OrganizationModify
      },
      {
        path: 'detail',
        name: 'OrganizationDetail',
        component: OrganizationDetail
      }
    ]
  },
  {
    path: '/component/test/el-scrollbar',
    name: 'ElScrollBarTest',
    component: ElScrollBarTest
  },
  {
    path: '/route/detail/:routeId',
    name: 'RouteDetail',
    component: RouteDetail
  }, {
    path: '/master/manage/system-overview/',
    name: 'SystemOverview',
    component: SystemOverview,
    children: [
      {
        path: 'create',
        name: 'SystemOverviewCreate',
        component: SystemCreate
      },
      {
        path: 'delete',
        name: 'SystemOverviewDelete',
        component: SystemDelete
      },
      {
        path: 'modify',
        name: 'SystemOverviewModify',
        component: SystemModify
      },
      {
        path: 'detail',
        name: 'SystemOverviewDetail',
        component: SystemDetail
      }
    ]
  }, {
    path: '/master/manage/role-overview/',
    name: 'RoleOverview',
    component: RoleOverview,
    children: [
      {
        path: 'create',
        name: 'RoleOverviewCreate',
        component: RoleCreate
      },
      {
        path: 'delete',
        name: 'RoleOverviewDelete',
        component: RoleDelete
      },
      {
        path: 'modify',
        name: 'RoleOverviewModify',
        component: RoleModify
      },
      {
        path: 'detail',
        name: 'RoleOverviewDetail',
        component: RoleDetail
      }
    ]
  }, {
    path: '/master/manage/service-overview/',
    name: 'ServiceOverview',
    component: ServiceOverview,
    children: [
      {
        path: 'create',
        name: 'ServiceOverviewCreate',
        component: ServiceCreate
      },
      {
        path: 'delete',
        name: 'ServiceOverviewDelete',
        component: ServiceDelete
      },
      {
        path: 'modify',
        name: 'ServiceOverviewModify',
        component: ServiceModify
      },
      {
        path: 'detail',
        name: 'ServiceOverviewDetail',
        component: ServiceDetail
      }
    ]
  }, {
    path: '/master/manage/customer-info-overview/',
    name: 'CustomerInfoOverview',
    component: CustomerInfoOverview,
    children: [
      {
        path: 'create',
        name: 'CustomerInfoOverviewCreate',
        component: CustomerInfoCreate
      },
      {
        path: 'delete',
        name: 'CustomerInfoOverviewDelete',
        component: CustomerInfoDelete
      },
      {
        path: 'modify',
        name: 'CustomerInfoOverviewModify',
        component: CustomerInfoModify
      },
      {
        path: 'detail',
        name: 'CustomerInfoOverviewDetail',
        component: CustomerInfoDetail
      }
    ]
  },
  {
    path: '/master/manage/plan-overview/',
    name: 'PlanOverview',
    component: PlanOverview,
    children: [
      {
        path: 'create',
        name: 'PlanOverviewCreate',
        component: PlanCreate
      },
      {
        path: 'delete',
        name: 'PlanOverviewDelete',
        component: PlanDelete
      },
      {
        path: 'modify',
        name: 'PlanOverviewModify',
        component: PlanModify
      },
      {
        path: 'detail',
        name: 'PlanOverviewDetail',
        component: PlanDetail
      }
    ]
  },
  {
    path: '/master/manage/plant-overview/',
    name: 'PlantOverview',
    component: PlantOverview,
    children: [
      {
        path: 'create',
        name: 'PlantOverviewCreate',
        component: PlantCreate
      },
      {
        path: 'delete',
        name: 'PlantOverviewDelete',
        component: PlantDelete
      },
      {
        path: 'modify',
        name: 'PlantOverviewModify',
        component: PlantModify
      },
      {
        path: 'detail',
        name: 'PlantOverviewDetail',
        component: PlantDetail
      }
    ]
  }, {
    path: '/route-bpo/route/route-batch/',
    name: 'RouteBatchOperation',
    component: RouteBatchOperation
  }, {
    path: '/route-bpo/route/route-batch/register/confirm',
    name: 'RouteConfirm',
    component: RouteConfirm
  }, {
    path: '/master/manage/user-overview/',
    name: 'UserOverview',
    component: CustomerInfoUserOverview,
    children: [
      {
        path: 'create',
        name: 'UserOverviewCreate',
        component: CustomerInfoUserCreate
      },
      {
        path: 'modify',
        name: 'UserOverviewModify',
        component: CustomerInfoUserModify
      },
      {
        path: 'detail',
        name: 'UserOverviewDetail',
        component: CustomerInfoUserDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
