import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue')
    }, {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "about" */ './views/add/index.vue')
    }, {
      path: '/showTemplate',
      name: 'showTemplate',
      component: () => import(/* webpackChunkName: "about" */ './views/template/index.vue')
    } , {
      path: '/addQuestionnaire',
      name: 'addQuestionnaire',
      component: () => import(/* webpackChunkName: "about" */ './views/addQuestionnaire/index.vue')
    } , {
      path: '/questionnaireSurvey',
      name: 'questionnaireSurvey',
      component: () => import(/* webpackChunkName: "about" */ './views/questionnaireSurvey/index.vue')
    } 
  ]
})
