<template>
  <div>
    <el-card class="card" shadow="hover">
      <el-button @click="getCookie">获取cookie</el-button>
      <el-button @click="getGMCookie">GM_cookie</el-button>
      <el-button type="primary" @click="getData">获取数据</el-button>
      <el-button type="primary" @click="showData">显示数据</el-button>
      <el-button type="danger" @click="deleteData">删除数据</el-button>
    </el-card>
    <el-card class="card">
      <el-button @click="openTaobaoLive">淘宝直播</el-button>
    </el-card>
    <el-card class="card">
      <el-button @click="notification">消息通知</el-button>
      <el-button @click="handleNotification">Element-UI通知</el-button>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Notification } from 'element-ui'
import { setValue, getValue, deleteValue, addValueChangeListener, removeValueChangeListener, openInTab, notification, getGMCookie } from '@/utils'
import { getCookies, getCookie } from '@/utils/cookie'
import { addRequestListener } from '@/utils/request'
import { isDev } from '@/config'
export default Vue.extend({
  name: 'TaskList',
  data() {
    return {
      listenerId: null
    }
  },
  methods: {
    async getCookie() {
      try {
        const url = location.origin
        const cookies = await getCookie('BAIDUID')
        console.info('==cookies==', cookies)
      } catch (error) {
        console.info('==cookies error==', error)
      }
    },
    getGMCookie() {
      getGMCookie({ url: location.origin })
      getGMCookie({ url: 'https://www.baidu.com' })
    },
    async getData() {
      const res = await axios({
        method: 'get',
        url: 'https://we.taobao.com/daren/list_new.json?__version__=3.0&tab=all&subTab=all&titleSearch=',
      })
      console.info('==getData==', res)
      const result = await setValue('daren_list_new.json', res)
      console.info('==setValue==', result)
    },
    async showData() {
      const res = await getValue('daren_list_new.json')
      console.info('==showData==', res)
    },
    deleteData() {
      deleteValue('daren_list_new.json')
    },
    openTaobaoLive() {
      openInTab('https://liveplatform.taobao.com/live/liveList.htm', { active: true, insert: true })
    },
    notification() {
      notification({
        title: '通知',
        text: '这是一个通知'
      })
    },
    handleNotification() {
      Notification.info({
        title: '消息',
        message: '这是一条提示消息'
      })
    }
  },
  mounted() {
    addRequestListener()
    if (!isDev) {
      this.listenerId = addValueChangeListener('daren_list_new.json', (data: any) => {
        console.info('==addValueChangeListener data==', data)
      })
      console.info('==this.listenerId==', this.listenerId)
    }
  },
  beforeDestroy() {
    removeValueChangeListener(this.listenerId)
  }
})
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}
</style>