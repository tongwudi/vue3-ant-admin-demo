<template>
  <a-layout>
    <a-layout-sider
      theme="dark"
      v-model:collapsed="collapsed"
      :width="220"
      collapsible
      :collapsedWidth="60"
      @collapse="toggleCollapse"
    >
      <Logo :collapsed="collapsed" />

      <Menu />
    </a-layout-sider>
    <a-layout
      class="main"
      :style="{ marginLeft: collapsed ? '60px' : '220px' }"
    >
      <a-layout-header>
        <Navbar />
      </a-layout-header>
      <a-layout-content>
        <Tabbar />
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { useStore } from 'vuex'

import Logo from './components/logo.vue'
import Menu from './components/menu.vue'
import Navbar from './components/navbar.vue'
import Tabbar from './components/tabbar.vue'

const store = useStore()
const collapsed = ref<boolean>(false)
provide('collapsed', collapsed)

const toggleCollapse = () => {
  store.commit('toggleCollapse', !collapsed.value)
}
</script>

<style lang="scss" scoped>
.ant-layout {
  min-height: 100%;
}
.ant-layout-sider {
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.main {
  transition: all 0.2s;
}
</style>
