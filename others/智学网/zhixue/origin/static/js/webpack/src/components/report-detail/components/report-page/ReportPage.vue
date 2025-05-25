<template src="./report-page.html"></template>

<style src="./report-page.less" lang="less"></style>
<script>
import APIService from '@/api/reportDetailWebServer.js';
import { moduleMap } from '../../zxbReportModuleMap';
import nonvip from '../nonvip/NonVip';
import { actionLog } from '@/api/actionLogSDK.js';
import fiyLocalStorage from '../../../../api/checkStorage'
import vipIcon from '../../img/report-vip.png';
import RulesDialog from '../rules-dialog/RulesDialog';
const examModulesTag = 'ZXB_REPORT_EXAM';
const paperModuleTag = 'ZXB_REPORT_PAPER';

export default {
  name: 'zx-report',
  components: {
    'rules-dialog': RulesDialog
  },
  props: {
    /**
     * 所有学科数据加上缺考和未扫描的
     */
    newPaperList: {
      type: Array
    },
    totalScore: { // 全科等级数据
      type: Object
    },
    paperList: { // 所有学科数据
      type: Array
    },
    singleSubject: { // 单科等级数据
      type: Object
    },
    examId: {
      type: String
    },
    paperId: {
      type: String
    },
    subjectCode: {
      type: String
    },
    subjectName: {
      type: String
    },
    vipExp: {
      type: Boolean,
      default: false
    },
    publishStatus: {
      type: Boolean,
      default: false
    },
    showScoreLv: {
      type: Boolean,
      default: false
    },
    examTypeCode: {
      type: String
    }
  },
  data () {
    return {
      rulesFrom: 1,
      rulesUrl: '',
      componentsMenu: [],
      examInfo: undefined,
      isVip: false,
      vipIcon: vipIcon,
      currentExamId: '',
      reportMain: '', // scoreReportMain原分 levelReportMain等级 completeReportMain等级和原分
      totalCount: 0, // 总人数
      linkUrl: '', // 等级规则链接头部
      allUserLevel: false
    }
  },

  computed: {
    showSubjectTips () {
      if (!this.newPaperList.length) return false;
      for (let i = 0; i < this.newPaperList.length; i++) {
        if (this.newPaperList[i].subjectLabels && this.newPaperList[i].subjectLabels.length) {
          return this.newPaperList[i].subjectLabels.some(it => it.labelName === '选科' || it.labelName === '非选科');
        }
      }
      return false
    },
    isPaperReport () {
      return this.paperId && this.subjectCode && this.paperId !== '' && this.subjectCode !== '' && this.componentsMenu.length > 0
    },

    topWindow () {
      if (!window.AppZxbInterface && top.window.AppZxbInterface) {
        return top.window
      }
      return window
    },
    isHomeworkNoScoreMode () {
      if (this.singleSubject && this.singleSubject.scoringModel === 1 && this.examTypeCode === 'homework') {
        return true;
      }
      return false;
    }
  },
  mounted () {
    console.log(this.showScoreLv, '是否显示');
    let that = this;
    this.getPaperList()
    that.currentExamId = that.examId;
    let params = {
      tag: that.paperId ? paperModuleTag : examModulesTag,
      examId: that.examId,
      reportTag: 'ZXB_NEW_REPORT'
    };
    if (that.paperId) {
      params.paperId = that.paperId;
    }
    // 获取报告模块 --2018/11/29 jmning
    APIService.getReportModules(params).then(response => {
      if (response.errorCode === 0) {
        // this.reportMain = 'completeReportMain'
        this.reportMain = response.result[0].code
        console.log(this.reportMain, this.subjectCode === '00', '测试数据');
        this.$store.commit('reportMain', this.reportMain)
        sessionStorage.setItem('reportMain', this.reportMain)
        that.configModules(response.result);
      } else {
        console.log('getReportModules errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
      }
    });
  },

  methods: {
    /**
     * 历次成绩变化说明弹窗展示
     */
    levelChangeDlg (url) {
      if (!url) return;
      this.rulesUrl = url;
      this.rulesFrom = 2;
      this.$refs.rulesDlg.dialogVisible = true;
    },
    /**
     * 报告反馈  add by qbyu2 2018-10-12
     * */
    openFeedBack () {
      window.location.href = '//www.wjx.cn/jq/29664415.aspx';
    },
    // 获取等级规则说明
    ruleDescription (subject) {
      this.totalCount = this.$store.state.totalCount
      this.rulesFrom = 1;
      this.rulesUrl = `${process.env.LEVEL_DEFINITION}?isTranscript=1&examId=${this.examId}&token=${fiyLocalStorage.getItem('xToken')}&number=${this.totalCount}&code=${subject || '00'}`;
      this.$refs.rulesDlg.dialogVisible = true;
    },
    getPaperList () {
      this.allUserLevel = this.paperList.some(item => {
        return item.userLevel
      })
    },
    configModules (result) {
      this.componentsMenu = []
      for (let i = 0; i < result.length; i++) {
        let menuItem = result[i]
        if (menuItem.name && moduleMap[menuItem.name]) {
          menuItem.component = moduleMap[menuItem.name]
          if (menuItem.desc) {
            menuItem.desc = menuItem.desc.replace(/%subject-name%/, this.subjectName)
          } else {
            result.splice(i, 1)
            i--
          }
        }
      }

      let showNonVipHeader = false
      for (let i = 0; i < result.length; i++) {
        let menuItem = result[i]
        // eslint-disable-next-line eqeqeq
        if (menuItem.component == nonvip && !showNonVipHeader) {
          menuItem.showHeader = true
          showNonVipHeader = true
        } else {
          menuItem.showHeader = false
        }
      }
      this.isVip = !showNonVipHeader && !this.vipExp
      this.componentsMenu = result;
    },

    enterOriginPaperAndActionLog () {
      return false;
    },
    enterPaperAnslysisAndActionLog () {
      return false;
    },

    buyVip () {
      let params = {
        module: 'zxb_newReport_web',
        opCode: '1011',
        otherInfo: {
          examID: this.examId,
          subjectCode: this.subjectCode,
          reportType: this.subjectCode === '00' ? '0' : '1'
        }
      }
      actionLog(params);
      window.location.href = `${window.location.origin}/zhixuebao/zhixuebao/vip/member/main/?from=web-reportstuall`;
    },

    showVipIntroduct () {
      return false;
    },
    absentText (temp) {
      if (temp.newSubjectLabels && temp.newSubjectLabels.length) {
        for (let i = 0; i < temp.newSubjectLabels.length; i++) {
          if (temp.newSubjectLabels[i].labelName === '未扫描' || temp.newSubjectLabels[i].labelName === '缺考') {
            return temp.newSubjectLabels[i].labelName
          }
        }
      }
      return '/' + temp.standardScore;
    },
    isShowAssignScore (item) {
      if (item.newSubjectLabels && item.newSubjectLabels.length) {
        for (let i = 0; i < item.newSubjectLabels.length; i++) {
          if (
            item.newSubjectLabels[i].labelName === '未扫描' ||
            item.newSubjectLabels[i].labelName === '缺考'
          ) {
            return false;
          }
        }
      }
      return true;
    },
    absentScore () {
      if (!this.totalScore.hasLevel &&
        !this.totalScore.hasAssignScore && (this.reportMain !== 'levelReportMain')) {
        return true;
      }
      return false;
    },
    getColor (sub) {
      if (sub.labelName === '选科') {
        return 'col_green';
      } else if (sub.labelName === '非选科') {
        return 'col_yellow';
      } else if (sub.labelName === '不计入总分') {
        return 'col_yellow';
      }
      return '';
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/report-page/ReportPage.vue