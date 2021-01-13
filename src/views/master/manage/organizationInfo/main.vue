<template>
  <div class="organization-info-main">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/master/manage/organization-info/" :menu-items="this.masterMenu"/>
        <div class="breadcrumb-container">
          <BPOBreadcrumb :breadcrumb-items="[ {label:'管理', key: 1}, {label:'組織情報', key: 2, isBorder:true}]"/>
        </div>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <organization-tree-with-search-input
            :show-button-tray="true"
            @organization-create="createOrganization"
            @organization-modify="modifyOrganization"
            :value="selectedOrganizationId"
            :organizations="organizations"
            show-shadow="hover"
          />
        </el-aside>
        <el-main>
          <el-tabs type="border-card">
            <el-tab-pane label="ユーザー一覧">
              <user-info :users="users"/>
            </el-tab-pane>
            <el-tab-pane label="分類コード一覧">
              <category-code-info/>
            </el-tab-pane>
            <el-tab-pane label="利用可能サビース一覧">
              <available-services-info/>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :width="dialogWidth"
      class="bpo-dialog"
    >
      <template #footer>
      </template>
      <template #default>
        <router-view :dialogVisible.sync="dialogVisible"/>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import OrganizationTreeWithSearchInput from '@/components/common/OrganizationTreeWithSearchInput'
import UserInfo from '@/components/master/organizationInfo/userInfo/UserInfo'
import AvailableServicesInfo
  from '@/components/master/organizationInfo/availableServicesOverview/AvailableServicesOverview'
import CategoryCodeInfo from '@/components/master/organizationInfo/categoryCodeInfo/CategoryCodeInfo'

export default {
  name: 'organizationInfoMain',
  inject: ['masterMenu'],
  methods: {
    viewDetail (organizationId) {
      this.uniquePush('/master/manage/organization-info/detail/')
      this.dialogWidth = '900px'
      this.dialogTitle = '組織詳細'
      this.dialogVisible = true
    },
    createOrganization () {
      this.uniquePush('/master/manage/organization-info/create/')
      this.dialogWidth = '900px'
      this.dialogTitle = '組織登録'
      this.dialogVisible = true
    },
    modifyOrganization (organizationId) {
      this.uniquePush('/master/manage/organization-info/modify/')
      this.dialogWidth = '900px'
      this.dialogTitle = '組織更新'
      this.dialogVisible = true
    }
  },
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '',
      dialogWidth: '100%',
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
    UserInfo,
    AvailableServicesInfo,
    CategoryCodeInfo
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
