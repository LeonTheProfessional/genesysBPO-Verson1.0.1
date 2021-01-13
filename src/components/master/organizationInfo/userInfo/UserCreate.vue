<template>
  <div class="user-create bpo-dialog">
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="detail-sub-title">基本情報</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">ユーザーID：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="userId"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="red-star">氏名：</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="userName"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span class="red-star">パスワード：</span>
      </el-col>
      <el-col :span="12">
        <el-input
          type="password"
          v-model="password">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span class="red-star">再入力：</span>
      </el-col>
      <el-col :span="12">
        <el-input
          type="password"
          v-model="confirmPassword">
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <pre>※パスワードポリシー
          （１）パスワードの最小文字数は８文字です。（最大：１２文字まで）
          （２）パスワードはユーザーIDと同一文字列と異なるように設定してください。
          （３）パスワードは英字と数字をそれぞれ最低1文字以上設定してください。</pre>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <span class="detail-sub-title red-star">所属組織情報</span>
      </el-col>
    </el-row>
    <el-row>
      <el-row type="flex" align="bottom">
        <el-col>
          <div class="button-above-table-container" style="float: right">
            <el-button
              type="warning"
              @click="addRelatedOrganization"
            >追加
            </el-button>
          </div>
        </el-col>
      </el-row>
      <el-table
        :data="organizations"
        border
        stripe
      >
        <el-table-column
          :resizable="false"
          align="left"
          header-align="center"
          fixed

          label="操作"
          width="100"
        >
          <template v-slot="{row}">
            <div class="operation-icon-tray">
              <el-button
                type="text"
                size="mini"
                style="color: #4ca4ff"
                icon="el-icon-edit"
                @click="modifyRelatedOrganization(row.organizationId)"/>
              <el-button
                type="text"
                size="mini"
                style="color: #dc851f"
                icon="el-icon-delete"
                @click="deleteRelatedOrganization(row.organizationId)"/>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :resizable="false"
          align="left"
          header-align="center"
          prop="organizationName"
          label="所属組織"
          show-overflow-tooltip
          min-width="200"/>
        <el-table-column
          :resizable="false"
          align="left"
          header-align="center"
          label="キャラクター"
          prop="characterName"
          show-overflow-tooltip
          min-width="220"/>
        <el-table-column
          :resizable="false"
          align="center"
          header-align="center"
          label="有効期間"
          width="95">
          <template v-slot="{row}">
            <span>{{ row.validDateStart + ' ~ ' + row.validDateEnd }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :resizable="false"
          align="left"
          header-align="center"
          prop="status"
          label="ステータス"
          show-overflow-tooltip
          min-width="200">
          <template v-slot="{row}">
            <span>{{ row.validFlag ? '有効' : '無効' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :resizable="false"
          align="left"
          header-align="center"
          prop="representationName"
          label="利用可能システム"
          show-overflow-tooltip
          min-width="200">
          <template v-slot="{row}">
            <template v-for="(system,index) in row.availableSystems">
          <span
            :key="index"
            v-if="index !== 0">,</span>
              <span
                :key="system.systemCode"
              >{{ system.systemName }}</span>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :visible.sync="dialogVisible"
        width="600px"
        class="bpo-dialog"
      >
        <template #footer>
        </template>
        <template #default>
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="red-star">所属組織：</span>
            </el-col>
            <el-col :span="12">
              <el-input v-model="userId"/>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="red-star">電話番号：</span>
            </el-col>
            <el-col :span="12">
              <el-input v-model="userName"/>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span class="red-star">FAX番号：</span>
            </el-col>
            <el-col :span="12">
              <el-input
                type="password"
                v-model="password">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span class="red-star">ステータス：</span>
            </el-col>
            <el-col :span="12">
              <el-input
                v-model="password">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span class="red-star">キャラクター：</span>
            </el-col>
            <el-col :span="12">
              <el-input
                type="password"
                v-model="password">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span class="red-star">ロール指定：</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-table
                :data="organizationDialogData.roleInfoList"
                border
                stripe
              >
                <el-table-column
                  :resizable="false"
                  align="left"
                  header-align="center"
                  fixed

                  width="100"
                >
                  <template #header>
                    <div class="operation-icon-tray">
                      <el-checkbox/>
                    </div>
                  </template>
                  <template #default>
                    <div class="operation-icon-tray">
                      <el-checkbox/>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  :resizable="false"
                  align="left"
                  header-align="center"
                  prop="serviceName"
                  label="サービス"

                  show-overflow-tooltip
                  min-width="150"/>
                <el-table-column
                  :resizable="false"
                  align="left"
                  header-align="center"
                  label="システム"
                  prop="characterName"
                  show-overflow-tooltip
                  min-width="150"/>
                <el-table-column
                  :resizable="false"
                  align="center"
                  header-align="center"
                  label="ロール"
                  min-width="300">
                  <template v-slot="{row}">
                    <template v-for="(role,index) in row.roles">
                      <span :key="index" v-if="index !== 0">,</span>
                      <span
                        :key="role.roleCode"
                      >{{ role.roleName }}</span>
                    </template>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="bpo-dialog-button-tray">
            <el-col :offset="8" :span="4">
              <el-button type="primary" size="mini" @click="handleSave('organization')"><span>確認</span></el-button>
            </el-col>
            <el-col :span="4">
              <el-button size="mini" @click="handleCancel('organization')"><span>キャンセル</span>キャンセル</el-button>
            </el-col>
            <el-col :span="8"/>
          </el-row>
        </template>
      </el-dialog>
    </el-row>
    <el-row :gutter="20" class="bpo-dialog-button-tray">
      <el-col :offset="8" :span="4">
        <el-button type="primary" size="mini" @click="handleSave('user')"><span>保存</span></el-button>
      </el-col>
      <el-col :span="4">
        <el-button size="mini" @click="handleCancel('user')"><span>キャンセル</span></el-button>
      </el-col>
      <el-col :span="8"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userCreate',
  props: {
    planId: Number
  },
  methods: {
    addRelatedOrganization () {
      this.dialogVisible = true
    },
    handleSave (type) {
      this.$confirm('保存してよろしいですか。', {
        confirmButtonText: 'OK',
        cancelButtonText: 'キャンセル'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '処理成功しました。'
        })
      }).catch(() => {
        return true
      }).then(() => {
        if (type === 'user') {
          this.$emit('update:dialogVisible', false)
        } else if (type === 'organization') {
          this.dialogVisible = false
        }
      })
    },
    handleCancel (type) {
      if (type === 'user') {
        this.$emit('update:dialogVisible', false)
      } else if (type === 'organization') {
        this.dialogVisible = false
      }
    }
  },
  data () {
    return {
      userId: 'TESTA',
      userName: '',
      password: '',
      confirmPassword: '',
      dialogVisible: false,
      organizationDialogData: {
        organizationName: '',
        phoneNumber: '',
        faxCode: '',
        validFlag: true,
        validPeriod: [],
        characterCode: '',
        roleInfoList: [
          {
            serviceName: 'serviceA',
            systemName: 'systemA',
            roles: [
              {
                roleName: 'ROleWW',
                roleCode: 'R-0001'
              }, {
                roleName: 'ROleWV',
                roleCode: 'R-0002'
              }, {
                roleName: 'ROleW',
                roleCode: 'R-0003'
              }
            ]
          }, {
            serviceName: 'serviceB',
            systemName: 'systemB',
            roles: [
              {
                roleName: 'ROleWW',
                roleCode: 'R-0001'
              }, {
                roleName: 'ROleW',
                roleCode: 'R-0003'
              }
            ]
          }, {
            serviceName: 'serviceC',
            systemName: 'systemC',
            roles: [
              {
                roleName: 'ROleWW',
                roleCode: 'R-0001'
              }, {
                roleName: 'ROleWV',
                roleCode: 'R-0002'
              }, {
                roleName: 'ROleW',
                roleCode: 'R-0003'
              }
            ]
          }
        ]
      },
      organizations: [
        {
          organizationName: 'org1',
          characterName: 'CHA1',
          validDateStart: '2011-10-06',
          validDateEnd: '2021-10-17',
          validFlag: true,
          availableSystems: [
            {
              systemName: 'sys1',
              systemCode: 'sys-001'
            },
            {
              systemName: 'sys2',
              systemCode: 'sys-002'
            },
            {
              systemName: 'sys3',
              systemCode: 'sys-003'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
