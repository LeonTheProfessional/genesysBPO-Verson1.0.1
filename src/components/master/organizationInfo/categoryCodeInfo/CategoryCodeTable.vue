<template>
  <div class="category-code-table">
    <el-row type="flex" align="bottom">
      <el-col :span="4">
        <div class="button-above-table-container">
          <el-button
            type="warning"
            @click="createCategoryCode"
          >新規登録
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" align="bottom" justify="end">
      <el-col :span="16">
        <el-pagination
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          :background="true"
          :style="{'margin-right': '20px',float: 'right'}"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20">
        </el-pagination>
      </el-col>
    </el-row>
    <el-table
      border
      stripe
      :data="categoryCodeList"
    >
      <el-table-column
        :resizable="false"
        align="left"
        header-align="center"
        fixed
        label="操作"
        width="100"
      >
        <template v-slot="{row}">
          <div class="operation-icon-tray">
            <el-button
              type="text"
              size="mini"
              style="color: #4ca4ff"
              icon="el-icon-edit"
              @click="modifyCategoryCode(row.categoryCodeId)"/>
            <el-button
              type="text"
              size="mini"
              style="color: #dc851f"
              icon="el-icon-delete"
              @click="deleteCategoryCode(row.categoryCodeId)"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="排出物種別"
        align="center"
        :min-width="150">
        <template v-slot="{row}">
          <el-button
            type="text"
            @click="viewDetail(row.categoryCodeId)">
            {{ row.emissionTypeName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="JWNET分類コード"
        align="center"
        prop="jwnetCategoryCode"
        :min-width="110"/>
      <el-table-column
        label="廃棄物分類"
        align="center"
        prop="wastClassification"
        :min-width="220"/>
      <el-table-column
        label="顧客分類コード"
        align="center"
        prop="customerCategoryCode"
        :min-width="110"/>
      <el-table-column
        label="排出物名称"
        align="center"
        prop="emissionName"
        :min-width="200"/>
      <el-table-column
        label="有害物質名"
        align="center"
        prop="hazardousSubstanceName"
        :min-width="200"/>
    </el-table>
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
export default {
  name: 'categoryCodeTable',
  methods: {
    viewDetail: function (categoryCodeId) {
      this.uniquePush('detail')
      this.dialogWidth = '1200px'
      this.dialogTitle = '分類コード詳細'
      this.dialogVisible = true
    },
    createCategoryCode () {
      this.uniquePush('/master/manage/organization-info/category-code/create')
      this.dialogWidth = '1200px'
      this.dialogTitle = '分類コード新規'
      this.dialogVisible = true
    },
    modifyCategoryCode: function (categoryCodeId) {
      this.uniquePush('/master/manage/organization-info/category-code/modify')
      this.dialogWidth = '1200px'
      this.dialogTitle = '分類コード更新'
      this.dialogVisible = true
    },
    deleteCategoryCode: function (categoryCodeId) {
      this.uniquePush('/master/manage/organization-info/category-code/delete')
      this.dialogWidth = '1200px'
      this.dialogTitle = '分類コード削除'
      this.dialogVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '',
      dialogWidth: '100%',
      categoryCodeList: [
        {
          emissionTypeName: '産業廃棄物',
          jwnetCategoryCode: '0100000',
          wasteClassification: '燃え殻',
          customerCategoryCode: '1000001',
          emissionName: '石含有テスト',
          hazardousSubstanceName: 'unusedBrain'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
