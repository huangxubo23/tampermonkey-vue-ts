<template>
  <div class="app-custom-ui">
    <div class="app-info">Hello {{ AppName }} v{{ AppVersion }} !</div>
    <Layout />
  </div>
</template>

<script>
import { AppName, AppVersion } from './config'
import Layout from '@/layout/index.vue'

export default {
  name: 'app',
  components: {
    Layout,
  },
  data() {
    return {
      AppName,
      AppVersion,
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.app-info {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(178, 94, 239, 0.5);
  padding: 10px;
  z-index: 999;
}
</style>
