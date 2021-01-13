<template xmlns:el-col="http://www.w3.org/1999/html">
  <div id="BPOHeader">
    <el-row type="flex" justify="space-between" align="middle"
            style="border-top:5px solid #4c6c55; background: white; height: 50px">
      <el-col :span="6" style="margin-left: 10px">
        <i class="bpo-icon"/>
      </el-col>
      <el-col style="display: flex;justify-content: flex-end" :span="2" v-if="showPersonInfo">
        <div class="alert-icon-tray">
          <el-popover
            placement="bottom-end"
            effect="dark"
            width="300"
            trigger="hover">
            <template #reference>
              <el-badge :value="12" class="item">
                <i class="el-icon-message-solid alert-icon"/>
              </el-badge>
            </template>
            <template #default>
              <expire-info-tray/>
            </template>
          </el-popover>
        </div>
        <el-popover
          placement="bottom-end"
          ref="loginInfo"
          effect="dark"
          trigger="hover">
          <div class="header-info">
            <el-row>
              <el-col :span="10">
                <label for="header-info-user">氏名</label>
              </el-col>
              <el-col :span="14">
                <span id="header-info-user">{{ userName }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <label for="header-info-role">役割</label>
              </el-col>
              <el-col :span="14">
                <span id="header-info-role">{{ roleName }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <label for="header-info-company">事業者名</label>
              </el-col>
              <el-col :span="14">
                <span id="header-info-company">{{ companyName }}</span>
              </el-col>
            </el-row>
          </div>
        </el-popover>
        <el-avatar v-popover:loginInfo icon="el-icon-user-solid"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ExpireInfoTray from '@/components/common/ExpireInfoTray'

export default {
  name: 'BPOHeader',
  props: {
    showPersonInfo: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      userName: '運用担当者',
      roleName: '拠点事務局_担当者兼承認者',
      companyName: '○○○株式会社'
    }
  },
  components: {
    ExpireInfoTray
  }
}
</script>

<style scoped>
.header-info {
  width: 400px;
  float: right;
  margin-right: 20px;
  font-size: 14px;
  color: #333333;
  line-height: 24px;
  display: inline-block;
}

/*.el-submenu {*/
/*  width: 125px;*/
/*}*/

/*.el-menu-item {*/
/*  width: 125px;*/
/*  margin-right: 3px;*/
/*  text-align: center;*/
/*  line-height: 80px;*/
/*  height: 80px;*/
/*  padding: 0;*/
/*  color: white;*/
/*}*/

/*.el-menu-item span, .el-submenu__title span {*/
/*  font-size: 18px;*/
/*}*/

/*.el-menu.el-menu--popup.el-menu--popup-bottom-start .el-menu-item span {*/
/*  font-size: 14px;*/
/*}*/

/*.el-menu-item i, .el-submenu__title i {*/
/*  font-size: 18px;*/
/*  color: white;*/
/*}*/

/*.el-menu {*/
/*  background-color: #409eff*/
/*}*/

.el-menu--horizontal > .el-menu-item.is-active {
  color: white;
}

.top-navigation-menu.el-menu.el-menu--horizontal {
  height: 80px;
  border-bottom: 0;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active {
  font-weight: bold;
  background: #3a8ee6;
  border-bottom-color: orange;
}

.el-menu--horizontal .el-menu.el-menu--popup .el-menu-item {
  width: 100%;
}

.el-menu--horizontal .el-menu.el-menu--popup .el-menu-item:hover {
  background: #ecf5ff;
}

.el-menu--horizontal .el-menu.el-menu--popup .el-menu-item.is-active {
  background: #ecf5ff;
  font-weight: normal;
  color: #409eff !important;
}

.bpo-icon:after {
  content: 'GE-BPO';
  font-style: normal;
  font-weight: bold;
  line-height: 50px;
  font-size: 30px;
  color: #4c6c55;
}

.alert-icon {
  font-size: 35px;
  color: #3a8ee6;
  transition: 0.3s;
}

.alert-icon:hover {
  opacity: .8;
}

.alert-icon-tray {
  margin-right: 35px;
  overflow: visible;
  height: 40px;
  display: inline-block;
}

.alert-icon-tray .el-badge {
  margin-top: 4px;
}

.el-avatar {
  float: right;
  margin-right: 10px;
  background: #3a8ee6;
  width: 35px;
  height: 35px;
  margin-top: 2px;
  transition: 0.3s;
}

.el-avatar:hover {
  opacity: .8;
}

.el-avatar--icon {
  font-size: 24px;
  color: white;
}
</style>

<style>

/*.el-submenu__title {*/
/*  padding: 0;*/
/*  text-align: center;*/
/*}*/

/*.el-submenu .el-submenu__title i{*/
/*  color: white;*/
/*}*/

/*.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {*/
/*  font-weight: bold;*/
/*  background: #3a8ee6;*/
/*  border-bottom-color: orange;*/
/*  color: white;*/
/*}*/

/*.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {*/
/*  background-color: #3a8ee6;*/
/*}*/

/*.el-menu--horizontal > .el-submenu .el-submenu__title {*/
/*  line-height: 80px;*/
/*  height: 80px;*/
/*}*/

.el-badge sup.el-badge__content.is-fixed {
  top: 5px;
  right: 16px;
}
</style>
