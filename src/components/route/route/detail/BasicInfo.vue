<template>
  <div class="route-basic-info">
    <el-row>
      <el-col :span="4">
        <span class="info-item-label">マニフェストタイプ</span>
      </el-col>
      <el-col :span="8">
        <span class="info-item-content">{{ '電子マニフェスト' }}</span>
      </el-col>
      <el-col :span="3">
        <span class="info-item-label">連絡番号2</span>
      </el-col>
      <el-col :span="3">
        <span class="info-item-content">{{ connectNo2 }}</span>
      </el-col>
      <el-col :span="3">
        <span class="info-item-label">連絡番号3</span>
      </el-col>
      <el-col :span="3">
        <span class="info-item-content">{{ connectNo3 }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-row >
          <el-col :span="8">
            <span class="info-item-label">ルート名</span>
          </el-col>
          <el-col :span="16">
            <span class="info-item-content">{{ routeName }}</span>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="8">
            <span class="info-item-label">ルート番号</span>
          </el-col>
          <el-col :span="16">
            <span class="info-item-content">{{ routeNo }}</span>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="8">
            <span class="info-item-label">起票者</span>
          </el-col>
          <el-col :span="16">
            <span class="info-item-content">{{ ticketFillerName }}</span>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="8">
            <span class="info-item-label">有効期限</span>
          </el-col>
          <el-col :span="16">
            <span class="info-item-content">{{ validPeriodStartDate + '～' + validPeriodEndDate}}</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3">
        <span class="info-item-label">備考・通信欄</span>
      </el-col>
      <el-col :span="9" class="small-span-container">
        <el-row>
          <el-col>
            <span class="info-item-content">{{'１：' + remarksOrCommunication1}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="info-item-content">{{'２：' + remarksOrCommunication2}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="info-item-content">{{'３：' + remarksOrCommunication3}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="info-item-content">{{'４：' + remarksOrCommunication4}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="info-item-content">{{'５：' + remarksOrCommunication5}}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RouteBasicInfo',
  data () {
    return {
      manifestTypeCode: '1',
      routeName: '20200818-001ルート',
      routeNo: '2299885566',
      ticketFillerName: '徐燕紅管理会社担当者',
      validPeriodStartDate: '2020/08/18',
      validPeriodEndDate: '2099/12/31',
      connectNo2: 'na2',
      connectNo3: 'na3',
      remarksOrCommunication1: 'roc1',
      remarksOrCommunication2: 'roc2',
      remarksOrCommunication3: 'roc3',
      remarksOrCommunication4: 'roc4',
      remarksOrCommunication5: 'roc5'
    }
  }
}
</script>

<style scoped>

.info-item-content {
  display: inline-block;
  height: 23px;
}

.small-span-container .info-item-content {
  height: 18px;
}
</style>
