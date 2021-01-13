<template>
  <div class="route-company-info">
    <el-row>
      <el-col>
        <table class="info-table" style="width:100%;">
          <tr style="line-height:1.3em;">
            <th style="width:20%;">
              <span class="info-item-label">事業者（排出者）</span>
            </th>
            <td style="width:30%;">
              <dl>
                <dt>
                  <span class="info-item-sub-label">氏名又は名称</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{ emissionCompanyName }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">住所</span>
                </dt>
                <dd>
                  <span class="info-item-content">〒{{ emissionCompanyPostCode + ' ' + emissionCompanyAddress }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">電話番号</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{ emissionCompanyPhoneNumber }}</span>
                </dd>
              </dl>
            </td>
            <th style="width:20%;">
              <span class="info-item-label">事業者（排出事業場）</span>
            </th>
            <td style="width:30%;">
              <dl>
                <dt>
                  <span class="info-item-sub-label">名称</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{ emissionPlantName }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">所在地</span>
                </dt>
                <dd>
                  <span class="info-item-content">〒{{ emissionPlantPostCode + ' ' + emissionPlantAddress }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">電話番号</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{ emissionPlantPhoneNumber }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">交付担当者</span>
                </dt>
                <dd>
                  <ul>
                    <li v-for="deliveryPerson in deliveryPersons" :key="deliveryPerson.id">
                      <span class="info-item-content">{{deliveryPerson.name}}</span>
                    </li>
                  </ul>
                </dd>
              </dl>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
  <el-row>
    <el-col>
      <table class="info-table" style="width:100%;">
        <tr style="line-height:1.3em;">
          <th style="width:20%;">
            <span class="info-item-label">排出物</span>
          </th>
          <td style="display: flex">
            <dl style="width:48%;flex: 4">
              <dt>
                <span class="info-item-sub-label">排出物種別</span>
              </dt>
              <dd>
                <span class="info-item-content">{{wastTypeName}}</span>
              </dd>
              <dt>
                <span class="info-item-sub-label">廃棄物名称</span>
              </dt>
              <dd>
                <span class="info-item-content">{{wastName}}</span>
              </dd>
                <dt>
                  <span class="info-item-sub-label">有害物質</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{hazardousSubstanceName}}</span>
                </dd>
            </dl>
            <dl style="flex: 4">
              <dt>
                <span class="info-item-sub-label">廃棄物分類</span>
              </dt>
              <dd>
                <span class="info-item-content">{{wastCategoryName}}</span>
              </dd>
              <dt>
                <span class="info-item-sub-label">数量確定者</span>
              </dt>
              <dd>
                <span class="info-item-content">{{quantityFixedPersonName}}</span>
              </dd>
            </dl>
          </td>
        </tr>
      </table>
    </el-col>
  </el-row>
    <el-row>
      <el-col>
        <table class="info-table" style="width:100%;">
          <tr class="tr-with-col-span-td-in-info-table">
            <th style="width:140px;">
              <span class="info-item-label">処分方法</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">{{disposalMethodName}}</span>
            </td>
          </tr>
          <tr>
            <th style="width:20%;">
              <span class="info-item-label">処分受託者</span>
            </th>
            <td style="width:30%;">
              <dl>
                <dt>
                  <span class="info-item-sub-label">氏名又は名称</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalCompanyName}}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">住所</span>
                </dt>
                <dd>
                  <span class="info-item-content">〒{{ disposalCompanyPostCode + ' ' + disposalCompanyAddress }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">電話番号</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalCompanyPhoneNumber}}</span>
                </dd>
              </dl>
            </td>
            <th style="width:20%;">
              <span class="info-item-label">処分場</span>
            </th>
            <td style="width:30%">
              <dl>
                <dt>
                  <span class="info-item-sub-label">名称</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalPlantName}}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">所在地</span>
                </dt>
                <dd>
                  <span class="info-item-content">〒{{ disposalPlantPostCode + ' ' + disposalPlantAddress }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">電話番号</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalPlantPhoneNumber}}</span>
                </dd>
              </dl>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <table class="info-table" style="width:100%; margin-bottom:18px;">
          <tr class="tr-with-col-span-td-in-info-table">
            <th style="width:20%">
              <span class="info-item-label">運搬方法</span>
            </th>
            <td colspan="3">
              <span class="info-item-content">
                {{transportMethodName}}
              </span>
            </td>
          </tr>
          <tr>
            <th style="width:20%;">
              <span class="info-item-label">運搬受託者(区間1)</span>
            </th>
            <td style="width:30%;">
              <dl>
                <dt>
                  <span class="info-item-sub-label">氏名又は名称</span>
                </dt>
                <dd>
                  <span class="info-item-content" style="white-space: pre-line">{{transportCompanyName + '\n' + transportPlantName}}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">住所</span>
                </dt>
                <dd>
                  <span class="info-item-content">〒{{ disposalCompanyPostCode + ' ' + disposalCompanyAddress }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">電話番号</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalCompanyPhoneNumber}}</span>
                </dd>
              </dl>
            </td>
            <th style="width:20%">
              <span class="info-item-label">運搬先1</span>
            </th>
            <td style="width:30%;">
              <dl>
                <dt>
                  <span class="info-item-sub-label">名称</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalPlantName}}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">所在地</span>
                </dt>
                <dd>
                  <span class="info-item-content">〒{{ disposalPlantPostCode + ' ' + disposalPlantAddress }}</span>
                </dd>
                <dt>
                  <span class="info-item-sub-label">電話番号</span>
                </dt>
                <dd>
                  <span class="info-item-content">{{disposalPlantPhoneNumber}}</span>
                </dd>
              </dl>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <table class="info-table" style="width:100%;">
          <tr style="line-height:1.4em;">
            <th style="width:285px;">
              <span class="info-item-label">最終処分場記載種別</span>
            </th>
            <td>
              <span class="info-item-content">委託契約書記載のとおり</span>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfoInTable',
  data () {
    return {
      emissionCompanyName: '徐燕紅排出事業者１',
      emissionCompanyAddress: '愛知県名古屋市中村区名駅（その他）',
      emissionCompanyPostCode: '450-0002',
      emissionCompanyPhoneNumber: '11-2222-3333',
      emissionPlantName: '徐燕紅排出事業者１',
      emissionPlantAddress: '愛知県名古屋市中村区名駅（その他）',
      emissionPlantPostCode: '450-0002',
      emissionPlantPhoneNumber: '11-2222-3333',
      transportCompanyName: '徐燕紅産廃収運業者１',
      transportPlantName: '徐燕紅産廃収運業者(積替0) ',
      transportCompanyAddress: '愛知県名古屋市中村区名駅（その他）',
      transportCompanyPostCode: '450-0002',
      transportCompanyPhoneNumber: '11-2222-3333',
      transportPlaceCompanyName: '徐燕紅産廃収運業者２',
      transportPlacePlantName: '徐燕紅産廃収運業者２(積替0)',
      transportPlacePlantAddress: '愛知県名古屋市中村区名駅（その他）',
      transportPlacePlantPostCode: '450-0002',
      transportPlacePlantPhoneNumber: '11-2222-3333',
      disposalCompanyName: '徐燕紅産廃処分業者１',
      disposalCompanyAddress: '愛知県名古屋市中村区名駅（その他）',
      disposalCompanyPostCode: '450-0002',
      disposalCompanyPhoneNumber: '11-2222-3333',
      disposalPlantName: '徐燕紅産廃処分業者(中間)',
      disposalPlantAddress: '愛知県名古屋市中村区名駅（その他）',
      disposalPlantPostCode: '450-0002',
      disposalPlantPhoneNumber: '11-2222-3333',
      transportMethodName: '船舶',
      disposalMethodName: '（マニフェスト登録時に選択）',
      deliveryPersons: [
        {
          name: '徐燕紅排出担当者',
          id: '123'
        }, {
          name: '徐燕紅排出担当兼承認者',
          id: '234'
        }
      ],
      wastTypeName: '産業廃棄物',
      wastName: '【燃え殻】廃棄物',
      hazardousSubstanceName: 'entertainment news',
      wastCategoryName: '燃え殻',
      quantityFixedPersonName: '排出事業者'
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
}
.info-table ul {
  margin-top: 0;
}
</style>
