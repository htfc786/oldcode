import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';
import baseService from '@/api/reportDetailWebServer.js'

Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // 成绩报告详情页
  {
    path: '/zxb-report/report-detail',
    name: 'report-detail',
    component: () => import('../components/report-detail/ReportDetail.vue')
  },
  // 原卷详情页
  {
    path: '/zxb-report/original-roll-detail/:examId/:paperId/:startSchoolYear/:endSchoolYear',
    name: 'original-roll-detail',
    component: () => import('../components/original-roll-detail/OriginalRollDetail.vue'),
    params: {
      examId: '',
      paperId: ''
    }
  },
  // 成绩分析首页
  {
    path: '/zxb-report',
    name: 'zxb-report',
    component: () => import('../components/report-analysis/ReportAnalysis.vue')
  },
  {
    path: '/',
    name: 'report',
    component: () => import('../components/report-analysis/ReportAnalysis.vue')
  },
  // 通用列表页
  {
    path: '/zxb-report/public-list/:reportType/:listType',
    name: 'public-list',
    component: () => import('../components/public-list/PublicList'),
    params: {
      reportType: '', // 报告类型--exam:考试报告，homework：作业报告
      listType: '' // 列表类型--report报告列表，analysis：解析列表，roll：原卷列表
    }
  }
]

const router = new Router({
  // mode: 'history',
  linkActiveClass: 'on',
  linkExactActiveClass: 'on',
  routes: routes,
  // 跳转路由页面置顶展示
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

// 全局路由钩子
router.beforeEach(async (to, from, next) => {
  if (store.state.currentUser && !store.state.currentUser.userId) {
    await baseService.getUserInfo().then(res => {
      if (res.errorCode === 0) {
        store.commit('setCurrentUser', res.result);
      }
    }).catch()
  }
  next();
})

export default router;



// WEBPACK FOOTER //
// ./src/router/index.js