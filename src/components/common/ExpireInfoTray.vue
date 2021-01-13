<template>
  <div class="expire-info-tray">
    <el-row>
      <el-col style="text-decoration: underline; font-weight: bold">ルート警告情報</el-col>
    </el-row>
    <div>
      <el-row>
        <el-col :span="16">
          <span>・許可期限きれ</span>
        </el-col>
        <el-col :span="4">
          <el-button size="mini" type="text">
            {{ licenseExpireItemCount }}
          </el-button>
        </el-col>
        <el-col :span="4">
          <span>件</span>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :span="16">
          <span>・許可期限きれ警告中</span>
        </el-col>
        <el-col :span="4">
          <el-button size="mini" type="text">
            {{ licenseAlmostExpireItemCount }}
          </el-button>
        </el-col>
        <el-col :span="4">
          <span>件</span>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px">
      <el-row>
        <el-col :span="16">
          <span>・契約期限きれ</span>
        </el-col>
        <el-col :span="4">
          <el-button size="mini" type="text">
            {{ contractExpireItemCount }}
          </el-button>
        </el-col>
        <el-col :span="4">
          <span>件</span>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :span="16">
          <span>・契約期限きれ警告中</span>
        </el-col>
        <el-col :span="4">
          <el-button size="mini" type="text">
            {{ contractAlmostExpireItemCount }}
          </el-button>
        </el-col>
        <el-col :span="4">
          <span>件</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpireInfoTray',
  data () {
    return {
      licenseExpireItemCount: 0,
      licenseAlmostExpireItemCount: 333,
      contractExpireItemCount: 9999,
      contractAlmostExpireItemCount: 55
    }
  }
}
</script>

<style scoped>
.expire-info-tray .el-button {
  padding: 0;
}
</style>
