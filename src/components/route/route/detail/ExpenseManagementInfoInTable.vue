<template>
  <div class="route-expense-management-info">
    <table class="info-table" style="width:100%; margin-bottom:18px;" id="route-table">
      <tr>
        <th class="info-item-label" style="width:15%;">MF単位費用</th>
        <th class="info-item-label" style="width:15%;">運搬費用</th>
        <td class="info-item-content" style="width:30%;">
          <table class="info-table" style="width:100%">
            <tr>
              <th class="info-item-label" style="width:20%;">区間1</th>
              <td class="info-item-content" style="width:100%;">
                <label>
                  0 円
                </label>
              </td>
            </tr>
          </table>
        </td>
        <th class="info-item-label" style="width:15%;">処分費用</th>
        <td class="info-item-content" style="width:30%;">
          <label>
            0 円
          </label>
        </td>
      </tr>
      <tr class="">
        <th class="info-item-label" style="width:15%;">従量単価</th>
        <th class="info-item-label" style="width:15%;">運搬単価</th>
        <td class="info-item-content" style="width:30%;">
          <table class="info-table" style="width:100%">
            <tr>
              <th class="info-item-label" style="width:20%;">区間1</th>
              <td class="info-item-content" style="width:100%;">
                <label>
                  0 円/㎏
                </label>
              </td>
            </tr>
          </table>
        </td>
        <th class="info-item-label" style="width:15%;">処分単価</th>
        <td class="info-item-content" style="width:30%;">
          <label>
            0 円/㎏
          </label>
        </td>
      </tr>
      <tr class="">
        <th class="info-item-label" style="width:15%;">月額固定費用</th>
        <th class="info-item-label" style="width:15%;">月額固定<br>運搬費用</th>
        <td class="info-item-content" style="width:30%;">
          <table class="info-table" style="width:100%">
            <tr>
              <th class="info-item-label" style="width:20%;">区間1</th>
              <td class="info-item-content" style="width:100%;">
                <label>
                  0 円
                </label>
              </td>
            </tr>
          </table>
        </td>
        <th class="info-item-label" style="width:15%;">月額固定<br>処分費用</th>
        <td class="info-item-content" style="width:30%;">
          <label>
            0 円
          </label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RouteExpenseManagementInfoInTable',
  data () {
    return {}
  }
}
</script>

<style scoped>
.info-table td {
  border: 1px #999999 solid;
}
</style>
