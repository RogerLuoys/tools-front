import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'
import config from '@/views/config/index'
import commonFactory from '@/views/common-factory/index'
import commonFactoryDetail from '@/views/common-factory/detail'
import customFactory from '@/views/custom-factory/index'
import resource from '@/views/resource/index'
import automation from '@/views/automation/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/config',
      name: 'config',
      component: config
    },
    {
      path: '/commonFactory',
      name: 'commonFactory',
      component: commonFactory
    },
    {
      path: '/commonFactoryDetail/:id',
      name: 'commonFactoryDetail',
      component: commonFactoryDetail
    },
    {
      path: '/customFactory',
      name: 'customFactory',
      component: customFactory
    },
    {
      path: '/resource',
      name: 'resource',
      component: resource
    },
    {
      path: '/automation',
      name: 'automation',
      component: automation
    }
  ]
})
