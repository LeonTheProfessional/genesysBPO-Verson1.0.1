<template>
  <div class="organization-info-main">
    <el-container>
      <el-header height="120px">
        <BPOHeader :menu-items="this.routeMenu" active-tag-index="/route/manage/organization-info/"/>
        <div class="breadcrumb-container">
          <BPOBreadcrumb :breadcrumb-items="[ {label:'管理', key: 1}, {label:'組織情報', key: 2, isBorder:true}]"/>
        </div>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <organization-tree-with-search-input
            :value="selectedOrganizationId"
            :organizations="organizations"
            show-shadow="hover"
          />
        </el-aside>
        <el-main>
          <el-tabs type="border-card">
            <el-tab-pane label="事業者">
              <companies-table :companies="companies"/>
            </el-tab-pane>
            <el-tab-pane label="ユーザー">
              <users-table :users="users"/>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import OrganizationTreeWithSearchInput from '@/components/common/OrganizationTreeWithSearchInput'
import CompaniesTable from '@/components/route/manage/organizationInfo/CompaniesTable'
import UsersTable from '@/components/route/manage/organizationInfo/UsersTable'

export default {
  name: 'organizationInfoMain',
  inject: ['routeMenu'],
  data () {
    return {
      selectedOrganizationId: null,
      companies: [
        {
          companyId: 23315,
          companyCode: 'AAAA',
          companyName: 'CompanyAAAA',
          organizationName: 'BigBrother',
          location: 'Utopia'
        }
      ],
      users: [
        {
          userId: 'gajigaji',
          userName: 'ガジガジ',
          roleName: 'The One',
          organizationName: 'エロエロ課'
        }
      ],
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
  },
  components: {
    OrganizationTreeWithSearchInput,
    CompaniesTable,
    UsersTable
  }
}
</script>

<style scoped>
.el-main {
  background: none;
  min-height: 500px;
}

.el-aside {
  padding-left: 10px;
}
</style>
