<template>
  <div class="organization-tree-with-search-input">
    <el-card :shadow="showShadow" :body-style="{'max-height':'650px', overflowY: 'auto', overflowX: 'hidden'}">
      <template v-slot:header>
        <el-input
          placeholder="組織名"
          v-model="filterText">
        </el-input>
      </template>
      <template v-slot:default>
        <el-tree
          :data="organizations"
          :props="{label: 'name'}"
          node-key="id"
          ref="organizationTree"
          @node-click="handleClick"
          :filter-node-method="filterNode"
          accordion
          :expand-on-click-node="false"
        >
          <template v-slot="{node}">
                  <span class="custom-tree-node">
                    <span style="font-weight: bolder;">{{ node.label }}</span>
                    <template v-if="showButtonTray">
                      <el-row class="tree-button-tray" :gutter="10" type="flex" justify="end">
                        <el-col :span="6">
                          <el-button size="mini" type="text" @click="$emit('organization-create')">新規</el-button>
                        </el-col>
                        <el-col :span="6">
                          <el-button size="mini" type="text" @click="$emit('organization-modify', node.key.toString())">修</el-button>
                        </el-col>
                      </el-row>
                    </template>
                  </span>
          </template>
        </el-tree>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'OrganizationTreeWithSearchInput',
  props: {
    value: String,
    organizations: Array,
    showButtonTray: {
      type: Boolean,
      default: false
    },
    offset: Number,
    showShadow: {
      type: String,
      default: 'always',
      validator: value => {
        return [
          'always',
          'hover',
          'never'
        ].includes(value)
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs.organizationTree.filter(val)
    }
  },
  methods: {
    filterNode (filterString, data) {
      if (!filterString) {
        return true
      }
      return data.name.indexOf(filterString) !== -1
    },
    handleClick (data, { key }) {
      if (!this.showButtonTray) {
        this.$emit('input', key.toString())
      }
    }
  },
  data () {
    return {
      filterText: ''
    }
  }
}
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.tree-button-tray {
  width: 100%;
}
</style>
