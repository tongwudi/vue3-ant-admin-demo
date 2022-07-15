<template>
  <a-layout>
    <a-layout-sider>
      <Logo />

      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Logo from './components/logo.vue'
import Menu from './components/menu.vue'
</script>

<style lang="scss" scoped>
.ant-layout {
  min-height: 100%;
}
</style>
