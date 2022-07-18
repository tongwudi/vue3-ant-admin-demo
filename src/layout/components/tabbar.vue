<template>
  <div class="nav-tabs">
    <a-tabs
      size="small"
      type="editable-card"
      hideAdd
      v-model:activeKey="activeKey"
      :tabBarGutter="7"
      @edit="closeTag"
    >
      <template v-for="i in 20" :key="i">
        <a-tab-pane :closable="i % 2 == 0" :tab="`Tab-${i}`" />
      </template>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeKey = ref(1)

const closeTag = (targetKey: string) => {
  console.log(targetKey)
}
</script>

<style lang="scss" scoped>
.nav-tabs {
  padding: 6px 10px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
}

::v-deep .ant-tabs-nav {
  margin: 0;
  &::before {
    border-bottom: 0;
  }
  .ant-tabs-tab {
    padding: 2px 10px !important;
    background: #fff;
    .anticon {
      font-size: 10px;
    }
    &:not(.ant-tabs-tab-active):hover {
      background-color: #ecf5ff;
      color: #1890ff;
      border-color: #b3d8ff;
    }
  }
  .ant-tabs-nav-more {
    padding: 0px 12px;
  }
  .ant-tabs-tab-active {
    background: #1890ff;
    border-bottom-color: #f0f0f0 !important;
    .ant-tabs-tab-btn,
    .ant-tabs-tab-remove {
      color: #fff;
    }
  }
}
</style>
