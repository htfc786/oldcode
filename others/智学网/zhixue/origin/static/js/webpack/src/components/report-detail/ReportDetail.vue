<template src="./report-detail.html"></template>
<style src="../../assets/css/currency.less" lang="less"></style>
<style src="./index.less" lang="less"></style>
<style src="../../assets/css/font-awesome.css"></style>
<script>
import Vue from 'vue'
// import ZXBBanner from 'components/zxb-banner/zxb-banner'
import { Bus } from '../bus/bus';
import examList from './components/exam-list/exam-list.vue';
import {getUrlOneParam} from '../../api/publicMethods';
import {actionLog} from '../../../src/api/actionLogSDK.js';
import ReportContent from './components/report-content/ReportContent.vue';
import APIService from '../../api/reportDetailWebServer'
import {Dialog, Message, Button,Loading} from 'element-ui';
import { addSafeParma } from '../../util/crypto-obfuscated';
import reportGenerTime from './components/report-gener-time/report-gener-time.vue';
Vue.use(Dialog).use(Button);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

export default {
  name: 'report-detail',
  components: {
    'exam-list': examList,
    'report-content': ReportContent,
    'report-gener-time': reportGenerTime
  },
  data () {
    return {
      currentSubject: '', // 选中的学科
      currentPaperId: '', // 标记选中的学科paperId
      title: '', // H5标题
      examId: '',
      paperId: '',
      paperList: [],
      reportContentComponent: ReportContent,
      isShowAnalysis: true,
      beginTime: '',
      endTime: '',
      isLinkage: true,
      loading:false,
    }
  },
  // destroyed () {
  //   if (sessionStorage.getItem('zxbReportExamId')) {
  //     sessionStorage.removeItem('zxbReportExamId')
  //   }
  // },
  created () {
    let that = this;
    that.initExamId();
    that.changedExam();
    that.updateUserInfo();
    that.watchSubjectCheck();
    that.reportDetailActionLog();
    that.userBrowserLog();
    that.getMenuConfig();
  },
  methods: {
    handleDateChange (beginTime, endTime) {
      this.beginTime = beginTime
      this.endTime = endTime
    },
    getMenuConfig () {
      let _that = this
      APIService.getMenuConfig({
        subjectCode: _that.currentSubject,
        tag: 'report_addition',
        group: 'POCKET',
        examId: _that.examId
      }).then(res => {
        if (res && res.errorCode === 0) {
          _that.isShowAnalysis = res.result.some(item => item.code === 'question_analysis');
        }
      })
    },
    /**
     * 新窗口前往原卷页面
     * */
    goOriginalRollDetail () {
      let that = this;
      let paperInfo = that.getCurrentPaperInfo()
      if (!paperInfo.isSinglePublish) {
        this.$message.info('成绩尚未发布');
        return false;
      }
      let url = window.location.href.split('#')[0]
      url = url + `#/zxb-report/original-roll-detail/${that.examId}/${paperInfo.paperId}/${that.beginTime}/${that.endTime}`
      // `${window.location.protocol}//${window.location.host}/#/zxb-report/original-roll-detail/${that.examId}/${paperInfo.paperId}`
      window.location.href = url
      // that.$router.push({
      // name: 'original-roll-detail',
      // params: { examId: that.examId, paperId: paperInfo.paperId }
      // })
    },
    /**
     * 浏览器使用信息收集埋点
     * */
    userBrowserLog () {
      actionLog({
        opCode: '1001',
        module: 'zxb_webReportJr',
        otherInfo: {
          userAgent: navigator.userAgent,
          SupportLocalStorage: !!window.localStorage,
          SupportSessionStorage: !!window.sessionStorage,
          SupportCookie: !!document.cookie
        }
      });
    },
    /**
     * 首次加载清除缓存用户信息
     * */
    updateUserInfo () {
      sessionStorage.removeItem('zxbUserInfo')
    },
    /**
     * 进入报告详情页埋点
     * */
    reportDetailActionLog () {
      // 原老代码‘查看各科分数及报告’埋点迁移 --add by jmning 2018/12/7
      actionLog({
        module: 'zxb_newReport_web',
        opCode: '1001',
        otherInfo: {
          examID: this.examId,
          reportType: 1
        }
      });
    },
    /**
     * 初始化examId
     * */
    initExamId () {
      let examId = this.$route.params.examId || sessionStorage.getItem('zxbReportExamId');
      if (examId) {
        this.examId = examId;
        sessionStorage.setItem('zxbReportExamId', examId)
      }
    },
    /**
     * 获取子组件提交的当前学科及paperId
     * */
    watchSubjectCheck () {
      let that = this;
      Bus.$on('checkSubject', (info) => {
        if (info) {
          that.currentSubject = info.subjectCode;
          that.paperList = info.paperList;
        }
      })
    },
    /**
     * 接收切换考试消息销毁组件重新创建
     * */
    changedExam () {
      let that = this;
      Bus.$on('changedExam', (examId) => {
        that.reportContentComponent = '';
        sessionStorage.setItem('zxbReportExamId', examId);
        that.examId = examId;
        that.loading = true;
        that.getMenuConfig()
        setTimeout(() => {
          that.loading = false;
          that.reportContentComponent = ReportContent;
        }, 200)
      })
    },
    /**
     * 通过subjectCode获取paperId
     * @return paperId:string
     * */
    getCurrentPaperInfo () {
      let that = this
      let paperList = that.paperList;
      if ((that.currentSubject === '' || that.currentSubject === '00') && paperList.length) {
        return paperList[0];
      }
      for (let i = 0, pLen = paperList.length; i < pLen; i++) {
        if (that.currentSubject === paperList[i].subjectCode) {
          return paperList[i];
        }
      }
    },
    /**
     * 跳转首页、成绩分析页面
     */
    toHomeAndScoreAnalysisModule (val) {
      let location = window.location
      location.href = `${location.origin}` + (val === 'home' ? '/container/index/' : '/zhixuebao/zhixuebao/main/index/');
    },
    /**
     * 跳转解析页面
     * */
    async toAnalysisModule () {
      let that = this;
      actionLog({
        module: 'zxb_newReport_web',
        opCode: '1010',
        otherInfo: {
          examId: sessionStorage.getItem('zxbReportExamId'),
          subjectCode: sessionStorage.getItem('zxbReportDetailCurrentSubjectCode')
        }
      });
      let paperInfo = that.getCurrentPaperInfo();
      if (!paperInfo.isSinglePublish) {
        this.$message.info('成绩尚未发布');
        return false;
      }
      // TODO
      let classId = getUrlOneParam(window.location, 'classId')
      let currentSubject = (that.currentSubject === '' || that.currentSubject === '00') ? that.paperList[0].subjectCode : that.currentSubject
      let examId = that.examId
      let paperId = paperInfo.paperId;
      let token = fiyLocalStorage.getItem('xToken');
      let url = `${window.location.origin}/zhixuebao/zhixuebao/transcript/analysis/main/?subjectCode=${currentSubject}&classId=${classId}&paperId=${paperId}&examId=${examId}&token=${token}`;
      if (that.beginTime && that.endTime) {
        url += `&startSchoolYear=${that.beginTime}&endSchoolYear=${that.endTime}`
      }
      url = addSafeParma(url, token);
      console.log(url, 'zhixuebao/zhixuebao/transcript/analysis/main');
      window.location.href = url;
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/ReportDetail.vue