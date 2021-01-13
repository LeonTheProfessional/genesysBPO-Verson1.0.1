<template>
  <div class="route-basic-info">
    <table class="info-table basic-info-table" style="width:100%;">
      <tr style="line-height:1.3em;">
        <th style="width:15%;">
          <span class="info-item-label">マニフェストタイプ</span>
        </th>
        <td colspan="3" style="width:25%;">
          <span class="info-item-content">{{ '電子マニフェスト' }}</span>
        </td>
        <th style="width:10%;">
          <span class="info-item-label">連絡番号2</span>
        </th>
        <td>
          <span class="info-item-content">{{connectNo2}}</span>
        </td>
        <th style="width:10%;">
          <span class="info-item-label">連絡番号3</span>
        </th>
        <td>
          <span class="info-item-content">{{connectNo3}}</span>
        </td>
      </tr>
      <tr style="line-height:1.3em;">
        <th>
          <span class="info-item-label">ルート名</span>
        </th>
        <td colspan="3">
          <span class="info-item-content">{{routeName}}</span>
        </td>
        <th style="width:10%;" rowspan="4">
          <span class="info-item-label">備考・通信欄</span>
        </th>
        <td colspan="3" style="width:30%;padding:0;border-spacing:0;border-bottom:none;" rowspan="4">
          <table style="border:none;width:100%;">
            <tr>
              <td style="border-right:none;">
                <span class="info-item-content">１：{{remarksOrCommunication1}}</span>
              </td>
            </tr>
            <tr>
              <td style="border-right:none;">
                <span class="info-item-content">２：{{remarksOrCommunication2}}</span>
              </td>
            </tr>
            <tr>
              <td style="border-right:none;">
                <span class="info-item-content">３：{{remarksOrCommunication3}}</span>
              </td>
            </tr>
            <tr>
              <td style="border-right:none;">
                <span class="info-item-content">４：{{remarksOrCommunication4}}</span>
              </td>
            </tr>
            <tr>
              <td style="border-bottom:none;border-right:none;">
                <span class="info-item-content">５：{{remarksOrCommunication5}}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr style="line-height:1.3em;">
        <th>
          <span class="info-item-label">ルート番号</span>
        </th>
        <td colspan="3">
          <span class="info-item-content">{{routeNo}}</span>
        </td>
      </tr>
      <tr style="line-height:1.3em;">
        <th>
          <span class="info-item-label">起票者</span>
        </th>
        <td colspan="3">
          <span class="info-item-content">{{ticketFillerName}}</span>
        </td>
      </tr>
      <tr style="line-height:1.3em;">
        <th>
          <span class="info-item-label">有効期限</span>
        </th>
        <td colspan="3">
          <span class="info-item-content">{{validPeriodStartDate + '～' + validPeriodEndDate}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RouteBasicInfoInTable',
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
.basic-info-table td{
  border-right: 1px #999 solid;
  border-bottom: 1px #999 solid;
}
</style>
