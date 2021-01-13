<template>
  <div class="RouteList">
    <el-container>
      <el-header height="120px">
        <BPOHeader active-tag-index="/route/list" :menu-items="this.routeMenu"/>
        <BPOBreadcrumb
          :breadcrumb-items="[{label:'ルート', key: 1}, {label:'メニュー＞ルート一括登録・更新・取消(産廃等)', key: 2, isBorder: true}]"
        />
      </el-header>
      <el-main style="display: flex;justify-content: center">
        <el-card shadow="always" style="width: 800px">
          <el-row>
            <el-col :span="8">
              <span>マスター登録シート：</span>
            </el-col>
            <el-col :span="16">
              <el-input style="width: 500px" v-model="masterRegistrationSheet">
                <template #append>
                  <el-button type="info" size="mini"><span>参照</span></el-button>
                </template>
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span>マスター登録シート：</span>
            </el-col>
            <el-col :span="16">
              <el-select v-model="sheetName">
                <el-option label="na" value="1"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span>オペレーティング：</span>
            </el-col>
            <el-col :span="16">
              <el-radio-group size="normal" v-model="operationType">
                <el-radio label="1"><span>登録</span></el-radio>
                <el-radio label="2"><span>更新</span></el-radio>
                <el-radio label="3"><span>取消</span></el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="8" :span="16">
              <el-button
                type="primary"
                @click="uniquePush('/route-bpo/route/route-batch/register/confirm')"
                style="width: 300px">
                <span>次へ</span>
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-footer class="bpo-footer" height="40px">
        <BPOFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'list',
  inject: ['routeMenu'],
  data () {
    return {
      masterRegistrationSheet: '',
      sheetName: '',
      operationType: ''
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 30px;
}

.el-input {
  width: 500px;
}

.el-select {
  width: 440px;
}
</style>
