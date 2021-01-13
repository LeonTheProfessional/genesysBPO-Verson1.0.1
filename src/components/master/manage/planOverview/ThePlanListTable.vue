<template>
  <div class="the-plan-list-table">
    <el-row type="flex" align="bottom" justify="end">
      <el-col :span="8">
        <el-button @click="openDialog('create', 223)" type="warning" style="width: 100px;float: left;margin: 20px 0 20px 0">
          <span>新規登録</span>
        </el-button>
      </el-col>
      <el-col :span="16">
        <el-pagination
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          :background="true"
          :style="{'margin-right': '20px',float: 'right'}"
          layout="total, sizes, prev, pager, next, jumper"
          :total="plans.length">
        </el-pagination>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="plans" border>
        <el-table-column min-width="200px" align="center" prop="planName" label="プラン名称">
          <template v-slot="{row}">
            <el-button
              type="text"
              @click="openDialog('detail',row.planId)">
              {{ row.planName }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column width="80px" align="center" prop="availablePlanFlag" label="利用可否">
          <template v-slot="{ row }">
            <span>{{ row.availablePlanFlag ? '⭕' : '' }}
            </span>
          </template>
        </el-table-column>
        <el-table-column min-width="300px" align="center" label="利用可能サービス" show-overflow-tooltip>
          <template v-slot="{ row }">
            <span class="service-span" :key="service.code"
                  v-for="(service, index) in row.availableServices">{{
                (index === 0 ? '' : ',') + service.serviceCode + ':' + service.serviceName
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column min-width="250px" align="center" label="備考" prop="remark"/>
        <el-table-column
          :align="'center'"
          fixed="left"
          slot="default"
          label="操作"
          width="80px"
        >
          <template v-slot="{row}">
            <el-row class="operation-button-container">
              <el-col>
                <el-image :class="'image-button'"
                          :src="require('@/assets/image/retouch_button.png')"
                          style="width: 22px; height:22px;"
                          @click="openDialog('modify', row.planId)"
                />
              </el-col>
              <el-col>
                <el-image :class="'image-button'"
                          @click="openDialog('delete', row.planId)"
                          style="width: 22px; height:22px;"
                          :src="require('@/assets/image/cancel_button.png')"
                />
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog :if="currentDialog.dialogComponentName!=null" :visible.sync="dialogFormVisible" :title="dialogTitle">
      <template #default>
        <el-row>
          <el-col :offset="2" :span="22">
            <component :is="currentDialog.dialogComponentName" v-bind="currentDialog"/>
          </el-col>
        </el-row>
      </template>
      <template #footer class="dialog-footer">
        <component :is="currentDialog.currentButtonComponent" @click-cancel="dialogFormVisible=false"
                   @click-confirm="handleDialogConfirm"/>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import PlanDetail from '@/components/master/manage/planOverview/PlanDetail'
import PlanDelete from '@/components/master/manage/planOverview/PlanDelete'
import PlanModify from '@/components/master/manage/planOverview/PlanModify'
import PlanCreate from '@/components/master/manage/planOverview/PlanCreate'

export default {
  name: 'thePlanListTable',
  data () {
    return {
      dialogFormVisible: false,
      currentDialog: {},
      dialogButtonComponents: {
        detailButtonComponent: {
          methods: {
            clickCancel () {
              this.$emit('click-cancel')
            }
          },
          render () {
            return (
              <el-row type="flex" justify="center">
                <el-col span={4}>
                  <el-button style="width: 100px" v-on:click={this.clickCancel}>
                    閉じる
                  </el-button>
                </el-col>
              </el-row>
            )
          }
        },
        deleteButtonComponent: {
          methods: {
            clickCancel () {
              this.$emit('click-cancel')
            },
            clickConfirm () {
              this.$emit('click-confirm')
            }
          },
          render () {
            return (
              <el-row type="flex" justify="center">
                <el-col span={4}>
                  <el-button style="width: 100px" v-on:click={this.clickConfirm}>
                    削除
                  </el-button>
                </el-col>
                <el-col span={4}>
                  <el-button style="width: 100px" v-on:click={this.clickCancel}>
                    取消
                  </el-button>
                </el-col>
              </el-row>
            )
          }
        },
        createButtonComponent: {
          methods: {
            clickCancel () {
              this.$emit('click-cancel')
            },
            clickConfirm () {
              this.$emit('click-confirm')
            }
          },
          render () {
            return (
              <el-row type="flex" justify="center">
                <el-col span={4}>
                  <el-button style="width: 100px" v-on:click={this.clickConfirm}>
                    保存
                  </el-button>
                </el-col>
                <el-col span={4}>
                  <el-button style="width: 100px" v-on:click={this.clickCancel}>
                    取消
                  </el-button>
                </el-col>
              </el-row>
            )
          }
        }
      }
    }
  },
  computed: {
    dialogTitle () {
      return this.currentDialog.dialogTitle
    },
    dialogComponentName () {
      return this.currentDialog.dialogComponentName
    }
  },
  methods: {
    openDialog (dialogType, planId) {
      switch (dialogType) {
        case 'modify': {
          this.currentDialog.dialogTitle = 'プラン更新'
          this.currentDialog.dialogComponentName = 'PlanModify'
          this.currentDialog.readOnly = true
          this.currentDialog.currentButtonComponent = this.dialogButtonComponents.createButtonComponent
          break
        }
        case 'create': {
          this.currentDialog.dialogTitle = 'プラン新規'
          this.currentDialog.dialogComponentName = 'PlanCreate'
          this.currentDialog.readOnly = true
          this.currentDialog.currentButtonComponent = this.dialogButtonComponents.createButtonComponent
          break
        }
        case 'detail': {
          this.currentDialog.dialogTitle = 'プラン詳細'
          this.currentDialog.dialogComponentName = 'PlanDetail'
          this.currentDialog.readOnly = true
          this.currentDialog.currentButtonComponent = this.dialogButtonComponents.detailButtonComponent
          break
        }
        case 'delete': {
          this.currentDialog.dialogTitle = 'プラン削除'
          this.currentDialog.dialogComponentName = 'PlanDelete'
          this.currentDialog.readOnly = true
          this.currentDialog.currentButtonComponent = this.dialogButtonComponents.deleteButtonComponent
          break
        }
      }
      this.dialogFormVisible = true
    },
    handleDialogConfirm () {
      this.dialogFormVisible = false
    }
  },
  props: {
    plans: Array
  },
  components: {
    PlanDetail,
    PlanDelete,
    PlanCreate,
    PlanModify
  }
}
</script>

<style scoped>

</style>
