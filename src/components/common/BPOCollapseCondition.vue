<template>
  <div class="bpo-collapse-condition"
       :class="{'is-active': isActive}">
    <div
    >
      <div
        class="collapse-item-header"
        :class="{'is-active': isActive}"
      >
        <slot name="title"/>
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="isActive"
        role="tabpanel"
      >
        <div class="el-collapse-item__content">
          <slot/>
        </div>
      </div>
    </el-collapse-transition>
    <div
      role="button"
      class="bpo-collapse-condition-arrow-tray"
      @mouseenter="isFocus=true"
      @mouseleave="isFocus=false"
      @click="handleHeaderClick"
      @keyup.space.enter.stop="handleEnterClick"
    >
      <transition name="arrow-slide">
        <i
          class="el-icon-arrow-down bpo-collapse-condition-arrow"
          :class="{'is-active': isActive,hovering: isFocus}"
        />
      </transition>
      <transition name="text-slide">
        <span v-show="isFocus">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BPOCollapseItem',

  componentName: 'BPOCollapseItem',
  data () {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      isActive: false,
      isFocus: false,
      contentHeight: 0,
      langConfig: {
        'hide-text': '簡略検索条件',
        'show-text': '詳細検索条件'
      }
    }
  },

  inject: ['collapse'],

  methods: {
    handleHeaderClick () {
      this.isActive = !this.isActive
    },
    handleEnterClick () {
      this.isActive = !this.isActive
    }
  },
  computed: {
    controlText () {
      return this.isActive ? this.langConfig['hide-text'] : this.langConfig['show-text']
    }
  }
}
</script>
<style>
.bpo-collapse-condition .collapse-item-header {
  height: 48px;
  line-height: 48px;
  background-color: #FFF;
  color: #303133;
  font-size: 13px;
  font-weight: 500;
  -webkit-transition: border-bottom-color .3s;
  -o-transition: border-bottom-color .3s;
  transition: border-bottom-color .3s;
  outline: 0;
}

.bpo-collapse-condition .collapse-item-header.is-active {
  border-bottom: transparent;
}

.bpo-collapse-condition-arrow-tray {
  border-top: solid 1px #eaeefb;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}

.bpo-collapse-condition-arrow-tray > span {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 25px;
  transition: .3s;
  display: inline-block;
}

.bpo-collapse-condition-arrow-tray .text-slide-enter,
.bpo-collapse-condition-arrow-tray .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.bpo-collapse-condition-arrow-tray:hover {
  color: #409eff;
  background-color: #f9fafc;
}

.bpo-collapse-condition-arrow {
  transition: .3s;
  font-weight: 300;
}

.bpo-collapse-condition-arrow.hovering {
  transform: translateX(-40px);
}

.bpo-collapse-condition-arrow.is-active.hovering {
  transform: rotate(180deg) translateX(40px);
}

.bpo-collapse-condition-arrow.is-active {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
