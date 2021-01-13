<template>
<div class="route-menu-body">
  <el-row>
    <el-col :span="14">
      <submenu-button
        menu-title="ルート"
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
  name: 'RouteMenuBody',
  data () {
    return {
      menuTitleCategories: [
        {
          subTitles: [
            {
              label: 'ルート一括登録・更新・取消(産廃等)',
              description: '産業廃棄物のルート情報を登録/更新/取消できます。'
            },
            {
              label: 'ルート一括登録・更新・取消(一廃等)',
              description:
                `有価物、事業系一般廃棄物、専ら物のルート情報を
登録/更新/取消できます`
            },
            {
              label: 'ルート情報一覧',
              routeName: 'RouteList',
              description:
                `産業廃棄物、有価物、事業系一般廃棄物、専ら物の
ルート情報を管理が可能です。`
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
