<template>
  <div class="menu-body">
    <el-row>
      <el-col :span="14">
        <submenu-button
          menu-title="管理メニュー"
          :menu-title-categories="menuTitleCategories"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SubmenuButton from '@/components/menu/SubmenuButton'

export default {
  name: 'MenuBody',
  data () {
    return {
      menuTitleCategories: [
        {
          categoryTitle: 'システム',
          subTitles: [
            {
              label: 'システム情報',
              description: 'GE-BPOにある、すべてのシステムを管理する。'
            }]
        },
        {
          categoryTitle: 'ロール',
          subTitles: [
            {
              label: 'ロール情報',
              description:
                `マスタ管理システムロールをメンテ。
   GE-BPOにある、他システムロールを見える。`
            }]
        },
        {
          categoryTitle: 'サービス',
          subTitles: [
            {
              label: 'サービス情報',
              description: '使うべきシステム＋該当システムの利用範囲（キャラクタ）。'
            }]
        },
        {
          categoryTitle: 'プラン',
          subTitles: [
            {
              label: 'プラン情報',
              routeName: 'PlanOverview',
              description:
                `サービス構成のテンプレート（ライト、スタンダート、
   スタンダート＋、プレミアム）。`
            }]
        },
        {
          categoryTitle: '組織',
          subTitles: [
            {
              routeName: 'MasterOrganizationInfo',
              label: '組織情報',
              description:
                `アカウント及びアカウント対応権限とデータ範囲の管理を便利
   にするために、組織というを導入する。`
            }]
        },
        {
          categoryTitle: '事業者',
          subTitles: [
            {
              label: '事業者情報',
              description: '排出事業者や収運業者、処分業者を新規登録します。'
            }
          ]
        }
      ]
    }
  },
  components: {
    SubmenuButton
  }
}
</script>

<style scoped>

</style>
