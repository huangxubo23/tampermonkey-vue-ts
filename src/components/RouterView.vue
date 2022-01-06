<template>
  <div>
    <Login v-if="currentRoute === '/login'" />
    <TaskList v-else-if="currentRoute === '/task-list'" />
    <NotFound v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Login from '@/pages/account/login.vue'
import TaskList from '@/pages/task/list.vue'
import NotFound from '@/pages/404/index.vue'

export default Vue.extend({
  name: 'RouterView',
  components: { Login, TaskList, NotFound },
  data(): { path: string, routers: string[] } {
    return {
      path: '',
      routers: ['/login']
    }
  },
  computed: {
    currentRoute(): string {
      console.info('==routers==', this.routers)
      return this.routers[this.routers.length - 1]
    }
  },
  methods: {
    handleRouterChange(data: { action: 'push' | 'back' | 'replace', path: string }) {
      console.info('==handleRouterChange==', data)
      const { action, path } = data
      switch (action) {
        case 'push':
          this.routers.push(path)
          break;
        case 'replace':
          this.routers.splice(this.routers.length - 1, 1, path)
          break;
        case 'back':
        default:
          this.routers.pop()
          break;
      }
    }
  },
  mounted() {
    // @ts-ignore
    this.$bus.$on('router_change', this.handleRouterChange)
  }
})
</script>