<template>
  <div class="route-menu-body">
    <el-row>
      <el-col :span="14">
        <submenu-button
          menu-title="マスタメニュー"
          :menu-title-categories="menuTitleCategories"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SubmenuButton from '@/components/menu/SubmenuButton'

export default {
  name: 'RouteMenuBody',
  data () {
    return {
      menuTitleCategories: [
        {
          categoryTitle: 'JWNET分類マスター',
          subTitles: [
            {
              label: 'JWNET分類情報',
              description:
                `マスタ管理システムロールをメンテ。
   GE-BPOにある、他システムロールを見える。`
            }]
        }, {
          categoryTitle: '荷姿マスター',
          subTitles: [
            {
              label: '荷姿情報',
              description: 'GE-BPOにある、すべてのシステムを管理する。'
            }]
        },
        {
          categoryTitle: '拡張荷姿マスター',
          subTitles: [
            {
              label: '拡張荷姿情報',
              description: '使うべきシステム＋該当システムの利用範囲（キャラクタ）。'
            }]
        },
        {
          categoryTitle: '数量単位マスター',
          subTitles: [
            {
              label: '数量単位情報',
              description:
                `サービス構成のテンプレート（ライト、スタンダート、
   スタンダート＋、プレミアム）。`
            }]
        },
        {
          categoryTitle: '数量確定者マスター',
          subTitles: [
            {
              label: '数量確定者情報',
              description:
                `アカウント及びアカウント対応権限とデータ範囲の
   管理を便利にするために、組織というを導入する。`
            }]
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
