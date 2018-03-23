import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HotTopic from '@/views/HotTopic'
const TmtNews = resolve => require(['../views/TmtNews.vue'], resolve)
const DeveloperInfo = resolve => require(['../views/DeveloperInfo.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HotTopic',
      component: HotTopic
    },
    {
      path: '/news',
      name: 'TmtNews',
      component: TmtNews
    },
    {
      path: '/tech',
      name: 'DeveloperInfo',
      component: DeveloperInfo
    }
  ]
})
