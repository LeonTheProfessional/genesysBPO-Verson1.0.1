<template>
  <div class="manage-submenu-button">
    <el-row class="menu-title-row">
      <el-col>
        <span class="menu-title">{{ menuTitle }}</span>
      </el-col>
    </el-row>
    <template
      v-for="menuSubTitleCategory in menuTitleCategories"
    >
      <el-row class="menu-sub-title-category-row" :key="menuSubTitleCategory.categoryTitle">
        <el-col>
          <span class="menu-sub-title-category-title">{{menuSubTitleCategory.categoryTitle}}</span>
        </el-col>
      </el-row>
      <el-row class="menu-sub-title-container" :key="menuSubTitleCategory.index">
        <el-col v-for="subTitle in menuSubTitleCategory.subTitles" :key="subTitle.index">
          <el-row style="margin-bottom: 15px">
            <el-col :span="21" style="display: flex; align-items: center;">
              <el-button type="info" class="menu-sub-title-button" style="color: black" @click="subTitle.routeName==null?null:$router.push({name: subTitle.routeName})">{{subTitle.label}}</el-button>
              <pre style="margin: 0 0 0 40px; width: 400px" class="menu-sub-title-description" v-html="subTitle.description"/>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ManageSubmenuButton',
  props: {
    menuTitle: String,
    menuTitleCategories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-sub-title-description {
  font-size: smaller;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #ffffb3;
  display: inline-block;
  height: 50px;
}

.menu-sub-title-container .el-button {
  width: 275px;
}

</style>
