<template src="./zxb-transcript.html"></template>
<style src="./zxb-transcript.less" lang="less"></style>
<script>
import {Bus} from '@/components/bus/bus.js';
import APIService from '@/api/reportDetailWebServer.js';

export default {
  name: 'zxb-transcript',
  props: {
    examId: {
      type: String,
      default: ''
    },
    paperId: {
      type: String,
      default: ''
    },
    subjectCode: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showModule: false,
      showLevelWraps: [],
      tagTipsList: ['总分位于年级前10%', '进步幅度大于10%', '总分位于年级10%~30%', '单科位于年级前10%'],
      tagTipsShow: false,
      catchData: {},
      reportMain: '', // 成绩单展示类型
      examTypeCode: ''
    }
  },
  created () {
    this.reportMain = this.$store.state.reportMain
  },
  mounted () {
    let _this = this;
    _this.fetchCache();
    console.log('off', _this);
    this.$nextTick(() => {
      if (_this.$refs.tsptTitle && _this.$refs.tsptTitle.offsetWidth) {
        window.report_body_canvas_real_width = _this.$refs.tsptTitle.offsetWidth;
      }
    });
  },

  computed: {
    isAllSubject: function () {
      return this.subjectCode === '00';
    },
    tagWrapStyle: function () {
      return {'justify-content': this.studentTagShow ? 'space-between' : 'flex-end'};
    },
    showBottomLine: function () {
      return (this.typeIsNumber(this.catchData.clazzRank) && this.catchData.clazzRank !== 0) ||
        (this.typeIsNumber(this.catchData.gradeRank) && this.catchData.gradeRank !== 0);
    },
    showLevel: function () {
      return function (temp) {
        return this.typeIsNumber(temp.userScore) && this.undefineConfig(temp.userLevel).length &&
          this.typeIsNumber(temp.preAssignScore);
      }
    },
    showClassPosition: function () {
      return function (temp) {
        if (this.isAllSubject && temp.examinationType === 2) {
          return false;
        }
        return this.typeIsNumber(temp.clazzRank) && temp.clazzRank != 0;
      };
    },
    showSubjectList: function () {
      return function (temp) {
        return this.isAllSubject && temp.paperList && temp.paperList.length
      }
    },
    studentTagShow: function () {
      try {
        return this.isAllSubject && this.undefineConfig(this.catchData.studentTag).length;
      } catch (e) {
        return false;
      }
    },
    isHomeworkNoScoreMode () {
      if (this.catchData && this.catchData.scoringModel === 1 && this.examTypeCode === 'homework') {
        return true;
      }
      return false;
    }
  },
  methods: {
    fetchCache () {
      let that = this;
      let params = {
        examId: that.examId
      };
      APIService.getAllReportMain(params).then(response => {
        if (response.errorCode === 0) {
          let data = response.result;
          if (data) {
            that.examTypeCode = data.examTypeCode;
            let result = {};
            if (that.isAllSubject) {
              result.studentTag = data.studentTag;
              result.subjectName = data.totalScore.subjectName;
              result.userScore = data.totalScore.userScore;
              result.preAssignScore = data.totalScore.preAssignScore;
              result.standardScore = data.totalScore.standardScore;
              result.clazzRank = data.totalScore.clazzRank;
              result.gradeRank = data.totalScore.gradeRank;
              result.examinationType = data.totalScore.examinationType;
              result.selectSubject = data.totalScore.selectSubject || [];
              if (result.examinationType === 2) {
                result.paperList = data.paperList.filter(element => result.selectSubject.indexOf(element.subjectCode) > -1);
              } else {
                result.paperList = data.paperList;
              }
              that.configShowLevelWraps(result.paperList);
            } else {
              result = data.paperList.filter((element) => element.subjectCode === that.subjectCode)[0];
              result.studentTag = data.studentTag;
            }
            that.catchData = result;
            that.showModule = true;
          } else {
            that.showModule = false;
          }
        } else {
          console.log('getAllReportMain errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },

    /**
     * 根据code判断标签背景颜色
     * @param code:   0:失常   1：偏科  2：超常   3：赞
     * */
    gradeTipsColor (code) {
      switch (parseInt(code)) {
        case 0:
          return 'background: #f45653';
          break;
        case 1:
          return 'background: #fca205';
          break;
        case 2:
          return 'background: #2675d8';
          break;
        case 3:
          return 'background: #06c1ae';
          break;
        default:
          break;
      }
    },
    /**
     * 是否展示标签tips文案
     * */
    isShowTagTips () {
      let that = this;
      that.tagTipsShow = !that.tagTipsShow;
    },
    /**
     * 判断成绩标签添加对应文案tips
     * @param gradeText: 成绩标签文案
     * */
    gradeTag (gradeText) {
      let that = this;
      if (!gradeText) {
        return;
      }
      if (gradeText === '超级学霸') {
        return that.tagTipsList[0];
      } else if (gradeText === '实力黑马') {
        return that.tagTipsList[1];
      } else if (gradeText === '潜力无限') {
        return that.tagTipsList[2];
      } else if (gradeText.indexOf('王者') > 0) {
        return that.tagTipsList[3];
      } else {
        return '';
      }
    },
    subjectClick: function (subjectCode) {
      Bus.$emit('subjectClickHandle', subjectCode);
    },
    typeIsNumber: function (temp) {
      if (typeof (temp) === 'number') {
        return true;
      }
      return false;
    },
    configShowLevelWraps: function (paperList) {
      let temp = [];
      for (let i = 0; i < paperList.length; i++) {
        let col = i % 2;
        if (col === 0) {
          let nextShow = false;
          if (i + 1 < paperList.length) {
            nextShow = this.showLevel(paperList[i + 1]);
          }
          if (this.showLevel(paperList[i]) || nextShow) {
            temp = temp.concat([true, true]);
          } else {
            temp = temp.concat([false, false]);
          }
        } else {
          continue;
        }
      }
      this.showLevelWraps = temp;
    },
    undefineConfig: function (temp) {
      return temp === undefined ? '' : temp;
    },
    objectNotNull: function (object) {
      return object != null && typeof (object) === 'object' && Object.keys(object).length;
    },
    levelText: function (temp) {
      return this.showLevel(temp) ? '等级 ' + this.undefineConfig(temp.userLevel) : '';
    },
    scoreText: function (temp) {
      return this.showLevel(temp) ? `原分 ${this.undefineConfig(temp.preAssignScore)}分` : '';
    },
    subjectScoreText: function (temp) {
      return this.typeIsNumber(temp.userScore) ? temp.userScore : temp.userLevel;
    },
    standardScoreText: function (temp) {
      return this.typeIsNumber(temp.userScore) ? `/${temp.standardScore}` : '';
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/zxb-transcript/ZxbTranscript.vue