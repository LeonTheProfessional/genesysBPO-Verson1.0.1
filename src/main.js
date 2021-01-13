import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'
import '@/assets/css/base.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'

import BPOHeader from '@/components/common/BPOHeader'
import BPOFooter from '@/components/common/BPOFooter'
import BPOBreadcrumb from '@/components/common/BPOBreadcrumb'
import TopNavigationMenu from '@/components/common/TopNavigationMenu'
import EnLocal from 'element-ui/lib/locale/lang/en'
import ChLocal from 'element-ui/lib/locale/lang/zh-CN'
import JaLocal from 'element-ui/lib/locale/lang/ja'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueLodash, {
  name: 'Vue-lodash-plugin',
  lodash: lodash
})
Vue.use(VueAxios, axios)
Vue.use(VueI18n)
Vue.use(Vuex)

Vue.component('BPOHeader', BPOHeader)
Vue.component('BPOFooter', BPOFooter)
Vue.component('BPOBreadcrumb', BPOBreadcrumb)
Vue.component('TopNavigationMenu', TopNavigationMenu)

const message = {
  en: {
    ...EnLocal
  },
  zh: {
    ...ChLocal
  },
  ja: {
    ...JaLocal
  }
}

const i18n = new VueI18n({
  locale: 'ja',
  messages: message
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.mixin({
  methods: {
    uniquePush: function (path, params) {
      if (this.$route.path.indexOf(path) === -1) {
        this.$router.push(
          {
            path: path,
            params: _.extend({
              fromFlag: this.$route.name
            }, params)
          }
        )
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  i18n,
  store,
  provide: {
    routeMenu: [
      {
        index: '0',
        iconClass: 'el-icon-third-part-route',
        label: '産業廃棄物ルート',
        children: [
          {
            index: '/route-bpo/route/route-batch/',
            label: 'ルート一括登録・更新・取消(産廃等)'
          },
          {
            index: '/route/list',
            label: 'ルート情報一覧'
          }
        ]
      },
      {
        index: '1',
        iconClass: 'el-icon-third-part-route',
        label: 'その他廃棄物ルート',
        children: [
          {
            index: '/menu/route/b',
            label: 'ルート一括登録・更新・取消(一廃等)'
          },
          {
            index: '/route/normal/list',
            label: 'ルート情報一覧'
          }
        ]
      },
      {
        index: '2',
        iconClass: 'el-icon-third-part-guanli',
        label: '管理',
        children: [
          {
            index: '/route/manage/organization-info/',
            label: '組織情報'
          },
          {
            index: '/menu/manage/b',
            label: '管理情報ラベル一覧'
          }
        ]
      }
    ],
    masterMenu: [
      {
        index: '1',
        label: 'マスタ'
      },
      {
        index: '2',
        label: '管理',
        children: [
          {
            index: '/master/manage/system-overview/',
            label: 'システム情報'
          },
          {
            index: '/master/manage/role-overview/',
            label: 'ロール情報'
          },
          {
            index: '/master/manage/service-overview/',
            label: 'サービス情報'
          },
          {
            index: '/master/manage/plan-overview/',
            label: 'プラン情報'
          },
          {
            index: '/master/manage/organization-info/',
            label: '組織情報'
          },
          {
            index: '/master/manage/company-overview/',
            label: '事業者情報'
          }
        ]
      }
    ]
  }
}).$mount('#app')
