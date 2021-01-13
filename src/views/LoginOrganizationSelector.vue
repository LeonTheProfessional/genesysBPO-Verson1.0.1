<template>
  <div class="login-organization-selector">
    <el-container>
      <el-header height="90px">
        <BPOHeader :menu-items="this.routeMenu" active-tag-index="/login/organization-select"/>
      </el-header>
      <el-main>
        <el-alert
          title="ここで選択した組織以下が、処理の対象となります."
          type="info"
          show-icon
          effect="dark"
        >
        </el-alert>
        <el-row>
          <el-col :offset="3" :span="18">
            <el-divider content-position="left"><span class="divider-text divider-text-left">ログイン組織</span></el-divider>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="5" :span="14">
            <organization-tree-with-search-input
              :organizations="organizations"
              :is-select-first="true"
              :show-select-button="false"
              v-model="selectedOrganizationId"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="3" :span="18">
            <el-divider/>
          </el-col>
        </el-row>
      </el-main>
      <el-footer height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import OrganizationTreeWithSearchInput from '@/components/common/OrganizationTreeWithSearchInput'

export default {
  name: 'LoginOrganizationSelector',
  inject: ['routeMenu'],
  components: {
    OrganizationTreeWithSearchInput
  },
  data () {
    return {
      selectedOrganizationId: null,
      organizations: [
        {
          name: 'organization-top-1',
          id: 1,
          children: [
            {
              name: 'organization-sub-1',
              id: 11
            },
            {
              name: 'organization-sub-2',
              id: 12
            },
            {
              name: 'organization-sub-3',
              id: 13,
              children: [
                {
                  name: 'organization-sub-sub-1',
                  id: 131
                },
                {
                  name: 'organization-sub-sub-2',
                  id: 132
                },
                {
                  name: 'organization-sub-sub-3',
                  id: 133

                }
              ]
            }
          ]
        },
        {
          name: 'organization-top-2',
          id: 2
        },
        {
          name: 'organization-top-3',
          id: 3
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-main {
  min-height: 600px;
}

.el-divider__text.is-left {
  background: #f4f4f5;
}
</style>
