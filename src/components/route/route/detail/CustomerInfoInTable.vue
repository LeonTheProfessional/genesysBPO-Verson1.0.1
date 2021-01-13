<template>
  <div class="route-customer-info">
    <table class="info-table" style="width:100%;">
      <tr v-for="index in slicedCustomerInfos.length" :key="index">
        <th style="width:25%;">
          <span class="info-item-label">{{ customInfos[2*(index - 1)].customLabel }}</span>
        </th>
        <td style="width:25%;">
          <pre class="info-item-content">{{ customInfos[2*(index - 1)].customValue }}</pre>
        </td>
        <template v-if="slicedCustomerInfos[index]!=null">
          <th style="width:25%;">
            <span class="info-item-label">{{ customInfos[2*index-1].customLabel }}</span>
          </th>
          <td style="width:25%;">
            <pre class="info-item-content">{{ customInfos[2*index-1].customValue }}</pre>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RouteCustomInfoInTable',
  data () {
    return {
      customInfos: [
        {
          customValue: 'v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数。',
          customLabel: '管理情報1',
          customCode: '101'
        }, {
          customValue: '类似于 v-if，你也可以利用带有 v-for 的 <template> 来循环渲染一段包含多个元素的内容。',
          customLabel: '管理情報2',
          customCode: '102'
        }, {
          customValue: '在自定义组件上，你可以像在任何普通元素上一样使用 v-for。',
          customLabel: '管理情報3',
          customCode: '103'
        }
      ]
    }
  },
  computed: {
    slicedCustomerInfos:
      function () {
        return this.customInfos.filter((customInfo, index) => index % 2 === 0).filter((customInfo, index) => index <= 10)
      }
  }
}
</script>

<style scoped>
.info-table td {
  border: 1px #999999 solid;
}
</style>
