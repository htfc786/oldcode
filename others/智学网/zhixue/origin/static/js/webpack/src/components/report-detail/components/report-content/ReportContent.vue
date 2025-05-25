<template src="./report-content.html"></template>
<script>
import { actionLog } from '@/api/actionLogSDK.js';
import zxTab from '../../../zx-tab/ZxTab.vue'
import zxTabItem from '../../../zx-tab-item/ZxTabItem.vue'
import { Bus } from '../../../bus/bus'
import ReportPage from '../report-page/ReportPage.vue'
import APIservice from '@/api/reportDetailWebServer.js';
import examList from '../exam-list/exam-list.vue';
import F2 from '@antv/f2';
import vipImage from '../../img/report-vip.png';
import noDataImage from '../../img/nodata.png';
import noDatanotZXImage from '../../img/nodata-not-zx.png';
import {getUrlOneParam} from '../../../../api/publicMethods';
import {isBengbu} from '../../../common/common.js';
F2.track(false) // 关闭F2信息收集

let reportDataOK = 0 // 有报告数据或正在进行网络请求
let networkErrorCode = -1 // 网络请求失败
let noReportDataErrorCode = -2 // 报告请求成功且无数据
let networkErrorMessage = '网络请求失败，请稍后重试'
let noRerportDataMessage = '当前学年暂无发布的报告，您可以切换其他学年查看'

Object.assign = function (dist, obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
      dist[key] = obj[key]
    }
  }
  return dist
}
export default {
  name: 'report-detail',
  components: {
    'zx-tab': zxTab,
    'zx-tab-item': zxTabItem,
    'zxb-report': ReportPage,
    // 'zxb-banner': ZXBBanner
    'exam-list': examList
  },
  data () {
    return {
      newPaperList: [],
      currentSubject: '', // 选中的学科
      currentPaperId: '', // 标记选中的学科paperId
      title: '', // H5标题
      examId: '',
      studentTag: '',
      showDownload: false,
      totalScore: {}, // 全科数据
      paperList: [], // 所有单科数据
      isTabFixed: false,
      scrollInterval: 0,
      headerHeight: 60,
      showScoreLv: false,
      subjectList: [], // 已扫描科目全数据
      vipImage: vipImage,
      reportDataType: reportDataOK, //  无报告数据标志，reportDataOK：默认（有报告数据或正在进行网络请求），networkErrorCode：网络请求失败，noReportDataErrorCode：报告请求成功且无数据
      noDataImage: isBengbu ? noDatanotZXImage : noDataImage,
      examTypeCode: ''
    }
  },
  computed: {
    noDataMessage () {
      if (this.reportDataType === networkErrorCode) {
        return networkErrorMessage;
      } else if (this.reportDataType === noReportDataErrorCode) {
        return noRerportDataMessage;
      } else {
        return '';
      }
    }
  },

  watch: {
    currentSubject: function (newVal, oldVal) {
      this.changedSubject(newVal, oldVal)
    }
  },

  created () {
    if (sessionStorage.getItem('zxbReportExamId')) {
      this.examId = sessionStorage.getItem('zxbReportExamId');
    }
    this.handleChildrenMessage();
    this.requestReportData();
  },

  mounted () {
    //  监听滚动条事件，控制 tab 位置固定
    if (this.$refs.tab) {
      this.tabTopOffset = this.$refs.tab.$el.offsetTop
    }
    //  this.fixedNail();
  },

  methods: {
    /**
     * 切换学科事件
     * */
    changedSubject (newVal, oldVal) {
      let that = this;
      let info = {
        subjectCode: that.currentSubject,
        paperList: that.paperList
      }
      Bus.$emit('checkSubject', info);
      sessionStorage.setItem('zxbReportDetailCurrentSubjectCode', that.currentSubject);
      if (newVal && newVal !== '') {
        try {
          let params = {
            module: 'zxb_newReport_web',
            opCode: '1002',
            otherInfo: {
              examId: sessionStorage.getItem('zxbReportExamId'),
              subjectCode: sessionStorage.getItem('zxbReportDetailCurrentSubjectCode')
            }
          }
          actionLog(params);
        } catch (e) {
          console.log(e)
        }
      }else{
        that.reportDataType = noReportDataErrorCode
      }
    },
    //  固钉导航
    fixedNail () {
      let that = this;
      let timer;
      //  兼容性处理
      !window.requestAnimationFrame && ['webkit', 'moz', 'ms'].some(prefix => {
        return (window.requestAnimationFrame = win[prefix + 'RequestAnimationFrame'])
      })
      !window.cancelAnimationFrame && ['webkit', 'moz', 'ms'].some(prefix => {
        return (window.cancelAnimationFrame = win[prefix + 'CancelAnimationFrame'])
      })

      let scrollInterval
      let $tab = this.$refs.tab.$el
      window.addEventListener('touchmove', () => {
        if (that.tabTopOffset < $tab.offsetTop) {
          that.tabTopOffset = $tab.offsetTop
        }
        that.bodyScrollHandler.call(that)

        clearInterval(scrollInterval)
        scrollInterval = setInterval(() => {
          console.log('touchmove interval')
          that.bodyScrollHandler.call(that)
        }, 10)
      })

      window.addEventListener('scroll', () => {
        clearInterval(scrollInterval)

        that.bodyScrollHandler.call(that)
      })
    },
    //  body 滚动事件
    bodyScrollHandler () {
      let $tab = this.$refs.tab.$el
      if (document.body.scrollTop > this.tabTopOffset) {
        //  $tab.style.position = 'absolute';
        //  $tab.style.zIndex = '999';
        //  $tab.style.top = '0';
        this.isTabFixed = true
      } else {
        this.isTabFixed = false
        //  $tab.style.zIndex = '999';
        //  $tab.style.top = '0';
        //  $tab.style.position = 'relative';
      }
    },
    /**
     * 全科报告-获取报告成绩 --2018/11/29 jmning
     */
    requestReportData () {
      let that = this;
      if(!that.examId){
        that.reportDataType = noReportDataErrorCode;
        return;
      }
      let params = {
        examId: that.examId
      }
      APIservice.getAllReportMain(params).then((response) => {
        if (response.errorCode === 0) {
          that.configDatas(response.result);
          if (that.showDownload) {
            that.showPaperAnalysisDownloadButton();
          }
          if (that.paperList.length > 0) {
            that.reportDataType = reportDataOK;
          } else {
            that.reportDataType = noReportDataErrorCode;
          }
        } else {
          that.reportDataType = networkErrorCode;
          console.log('getAllReportMain errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    //  接收自组建数据
    handleChildrenMessage () {
      Bus.$on('subjectClickHandle', (msg) => {
        this.currentSubject = msg
      });
      Bus.$on('bannerHeightChanged', (msg) => {
        this.updateHeaderHeight()
        this.$nextTick(() => {
          this.updateHeaderHeight()
        })
      });
    },

    resetDatas () {
      let that = this;
      that.studentTag = ''
      that.showDownload = false
      that.totalScore = {}
      that.paperList = []
      that.newPaperList = []
      that.changedSubject('', '');
      that.title = []
      that.subjectCode = ''
    },

    //  初始化mock数据
    configDatas (result) {
      // debugger;
      if (!result) {
        this.resetDatas()
      } else {
        this.examTypeCode = result.examTypeCode;
        this.studentTag = result.studentTag
        this.showDownload = result.showDownload
        this.totalScore = result.totalScore
        this.paperList = result.paperList
        this.newPaperList = result.paperList

        this.subjectList = result.paperList.filter(item => item.isSinglePublish === true)

        sessionStorage.setItem('subjectList', JSON.stringify(this.subjectList))
        console.log(this.subjectList, '所有单科数据');
        this.showScoreLv = result.showScoreLv
        console.log(this.showScoreLv, '是否显示');
        // 处理非选课已考数据
        if (result.totalScore && result.totalScore.examinationType === 2 &&
            result.totalScore.selectSubject && result.totalScore.selectSubject.length) {
          this.newPaperList = this.newPaperList.filter(element => {
            if (result.totalScore.selectSubject.indexOf(element.subjectCode) > -1) {
              return true;
            }
            if (element.subjectLabels && element.subjectLabels.length) {
              return element.subjectLabels.filter(f => f.labelName === '非选科').length > 0;
            }
          });
        }
        // 处理缺考、未扫描数据
        if (result.absentPaperList && result.absentPaperList.length) {
          result.absentPaperList.map(it => {
            this.newPaperList.push({
              ...it,
              newSubjectLabels: it.subjectLabels,
              subjectLabels: it.subjectLabels.filter(i => i.labelName !== '未扫描' && i.labelName !== '缺考'),
              isAbsent: true
            });
          });
        }
        this.title = result.title
        if (this.totalScore && this.totalScore.title) {
          if (!this.totalScore.subjectCode) {
            this.totalScore.subjectCode = '00' // 给全科指定subjectCode为00
          }
          this.currentSubject = this.totalScore.subjectCode
        } else if (this.paperList && this.paperList.length > 0) {
          this.currentSubject = this.paperList[0].subjectCode
        }
      }
      this.$nextTick(() => {
        // this.updateHeaderHeight()
      })
    },

    showPaperAnalysisDownloadButton () {
      return false;
    },

    updateHeaderHeight () {
      let bannerHeight = 0
      // 增加判断，banner可能不存在
      if (this.$refs.banner) {
        bannerHeight = this.$refs.banner.$el.offsetHeight
      }
      this.headerHeight = this.$refs.tab.$el.offsetHeight + bannerHeight
    }
  }
}
</script>

<style scoped>

</style>



// WEBPACK FOOTER //
// src/components/report-detail/components/report-content/ReportContent.vue