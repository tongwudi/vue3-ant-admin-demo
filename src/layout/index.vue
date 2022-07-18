<template>
  <a-layout>
    <a-layout-sider>
      <Logo />

      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Navbar />
      </a-layout-header>
      <a-layout-content>
        <div class="nav-tabs">
          <a-tabs
            v-model:activeKey="activeKey"
            hide-add
            type="editable-card"
            size="small"
          >
            <a-tab-pane v-for="i in 26" :key="i" :tab="`Tab-${i}`" />
          </a-tabs>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Logo from './components/logo.vue'
import Menu from './components/menu.vue'
import Navbar from './components/navbar.vue'

import { ref } from 'vue'

const activeKey = ref(1)
</script>

<style lang="scss" scoped>
.ant-layout {
  min-height: 100%;
}
.nav-tabs {
  padding: 6px 10px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
}

::v-deep .ant-tabs-nav {
  margin: 0;
  height: 26px;
  &::before {
    border-bottom: 0;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 7px !important;
  }
  .ant-tabs-tab {
    padding: 0px 10px !important;
    &:not(.ant-tabs-tab-active):hover {
      background-color: #ecf5ff;
      color: #1890ff;
      border-color: #b3d8ff;
    }
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
