<template>
  <router-link class="logo" to="/" title="桐无敌">
    <img :src="logoSrc" />
    <!-- <h1 v-show="!isCollapse">桐无敌</h1> -->
    <h1>桐无敌</h1>
  </router-link>
</template>

<script lang="ts" setup>
// import { inject } from 'vue'

const logoSrc = require('@/assets/img/logo.png')
// const isCollapse = inject('isCollapse')
</script>

<style lang="scss" scoped>
.logo {
  height: $nav-height;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 30px;
  }
  h1 {
    margin-left: 10px;
    color: #fff;
  }
}
</style>
