<template>
<div class="menu-body">
  <el-row>
    <el-col :span="14">
      <submenu-button
        menu-title="管理メニュー"
        :menu-title-categories="menuTitleCategories"
      />
    </el-col>
    <el-col :span="8">
      <el-row style="margin-top: 50px">
        <el-col :span="8">
          <i class="el-icon-warning" style="color: #E6A23C"/><span>未処理・警告情報</span>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col>
          <expire-info-tray/>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
import ExpireInfoTray from '@/components/common/ExpireInfoTray'
import SubmenuButton from '@/components/menu/SubmenuButton'

export default {
  name: 'MenuBody',
  data () {
    return {
      menuTitleCategories: [
        {
          categoryTitle: '組織',
          subTitles: [
            {
              routeName: 'RouteOrganizationInfo',
              label: '組織情報',
              description:
                `自分組織下すべて組織情報が見えます。
自分組織のユーザを確認できます。`
            }
          ]
        },
        {
          categoryTitle: 'マスター',
          subTitles: [
            {
              label: '管理情報ラベル一覧',
              description: '管理情報ラベルの登録・確認ができます。'
            }
          ]
        }
      ]
    }
  },
  components: {
    ExpireInfoTray,
    SubmenuButton
  }
}
</script>

<style scoped>

</style>
