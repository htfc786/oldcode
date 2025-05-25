/**
 * created by qbyu2 2018-08-21
 * 丢分诊断模块
 * */
<template src="./loss-analysis.html"></template>
<style src="@/assets/css/font-awesome.css"></style>
<style src="../../../zx-slider/slider.less" lang="less"></style>
<style src="./loss-analysis.less" lang="less"></style>
<script>
import Vue from 'vue';
import APIService from '@/api/reportDetailWebServer.js';
import AnchorInfo from '../zxb-anchorinfo/ZxbAnchorinfo.vue';
import sliderItem from '../../../zx-slider/SliderItem.vue';
import '../../../zx-slider/slider-wrap.js';
import { actionLog } from '@/api/actionLogSDK.js';

export default {
  name: 'loss-analysis',
  props: ['examId', 'paperId', 'subjectCode'],
  components: {
    'anchor-info': AnchorInfo
  },
  data () {
    return {
      showModule: false,
      showAnchor: false,
      anchorInfo: '',
      bestAnswerImgList: [],
      myAnswerImgList: [],
      // 模块名称
      moduleName: 'lossAnalysis',
      anchorShow: false,
      answerImageArr: [],
      picContainerShow: false,
      allFlag: {
        analysisFlag: false,
        anchorFlag: false
      },
      answerShowFlag: {
        myAnswerFlag: false,
        bestAnswerFlag: false
      },
      // 题号跟锚点映射关系suoyin
      anchorCurrentIndex: 0,
      // 题号标记
      currentTitleNum: 0,
      currentTitleArrIndex: 0,
      titleData: {
        title: '',
        subtitle: ''
      },
      chartModuleData: {
        lostScores: []
      },
      analysisModuleData: {
        topicList: []
      },
      anchorModuleData: {
        list: []
      },
      maxHeight: 0
    }
  },
  filters: {
  },
  created () {
    this.getCacheData();
  },
  watch: {
    currentTitleNum () {
      const data = this.analysisModuleData.topicList[this.currentTitleNum]
      if (!data || data.answerType === 's01Text') {
        return;
      }
      this.goodStudentAnswer();
      if (data.imageAnswer) {
        this.myAnswerImgList = [];
        let data = JSON.parse(data.imageAnswer);
        for (let i in data) {
          this.myAnswerImgList.push(data[i]);
        }
      }
    }
    // allFlag: {
    //   handler: function(oldval, newval) {
    //     if (this.allFlag.analysisFlag && this.allFlag.anchorFlag && this.analysisModuleData.topicList.length) {
    //       this.makeTopicAndAnchorData(this.analysisModuleData.topicList[0].disTitleNumber)
    //     }
    //   },
    //   deep: true
    // }
  },
  mounted () {
    // this.goodStudentAnswer();
  },
  methods: {
    // 截取我的答案数据
    getMyanswerImgList () {
      if (this.analysisModuleData.topicList[this.currentTitleNum].answerType === 's01Text') {

      }
    },
    // 处理数据
    transfromData (requestData) {
      this.allFlag.analysisFlag = true;
      // 配置柱状图模块
      let lossInfo = requestData.lostScoreInfo
      if (lossInfo && lossInfo.lostScores) {
        for (let i in lossInfo.lostScores) {
          let data = lossInfo.lostScores[i];
          switch (data.colorTag.name) {
            case 'yellow':
              data.colorTag.name = '252, 162, 5';
              break;
            case 'blue':
              data.colorTag.name = '38, 117, 216';
              break;
            case 'green':
              data.colorTag.name = '6, 193, 174';
              break;
            default:
              break;
          }
        }
        this.chartModuleData = requestData.lostScoreInfo;
        this.maxHeight = this.getArrMaxValue(this.chartModuleData.lostScores);
      } else {
        this.chartModuleData = {lostScores: []};
        this.maxHeight = 0;
      }
      this.titleData.title = requestData.title;
      this.titleData.subtitle = requestData.subtitle;
      this.analysisModuleData = requestData.wrongTopicAnalysis;
      if (requestData.forbidMap) {
        this.answerShowFlag.myAnswerFlag = requestData.forbidMap.forbidMyAnswer;
        this.answerShowFlag.bestAnswerFlag = requestData.forbidMap.forbidBestAnswer;
      } else {
        this.answerShowFlag.myAnswerFlag = false;
        this.answerShowFlag.bestAnswerFlag = false;
      }
      this.checkCurrentTitleArrIndexIsMax();
      try {
        const data = this.analysisModuleData.topicList[this.currentTitleNum]
        if (data && data.imageAnswer) {
          this.myAnswerImgList = [];
          let data = JSON.parse(data.imageAnswer);
          for (let i in data) {
            let image = data[i];
            this.myAnswerImgList.push(image);
          }
        }
      } catch (e) {
        console.log(e)
      }
      this.goodStudentAnswer();
    },
    // 默认先读取缓存数据，然后请求接口数据 请求到数据后刷新视图
    getCacheData () {
      this.updateAnalysisData();
    },
    /**
     * 初始化锚点报告数据 --edit by jmning 2018/11/30
     */
    updateAnchorData () {
      let that = this;
      let params = {
        examId: that.examId,
        paperId: that.paperId,
        subjectCode: that.subjectCode
      };
      APIService.getSingleAnchorReport(params).then(response => {
        if (response.errorCode === 0) {
          that.allFlag.anchorFlag = true;
          that.anchorModuleData = response.result;
          this.currentTitleNum = 0;
          that.makeTopicAndAnchorData(0);
        } else {
          console.log('getSingleAnchorReport errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    /**
     * 初始化丢分数据 --edit by jmning 2018/11/30
     */
    updateAnalysisData () {
      let that = this;
      let params = {
        examId: that.examId,
        paperId: that.paperId
      };
      APIService.getSingleLostTopicAnalysis(params).then(response => {
        if (response.errorCode === 0) {
          that.showModule = true;
          that.transfromData(response.result);
          that.updateAnchorData();
        } else {
          that.showModule = false;
          console.log('getSingleLostTopicAnalysis errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    // 取最大值
    getArrMaxValue (arr) {
      let totalArr = [];
      for (let i in arr) {
        let val = arr[i]
        totalArr.push(val.totalScore)
      }
      return Math.max.apply(Math, totalArr)
    },
    // 计算题型总分柱状图高度
    makeTotalHeight (num, color) {
      let height = (num / this.maxHeight).toFixed(4) * 100;
      return `height: ${height}%; background-color:rgba(${color}, 0.2);`
    },
    // 计算题型得分柱状图高度
    makeScoreHeight (num1, num2, color) {
      return `height: ${(num1 - num2) / num1 * 100}%; background-color:rgba(${color},1);`
    },
    // tab向前
    goPrev () {
      if (this.currentTitleArrIndex <= 0) {
        return
      }
      this.currentTitleArrIndex--;
    },
    // tab向后
    goNext () {
      if (this.currentTitleArrIndex + 1 >= Math.ceil(this.analysisModuleData.topicList.length / 5)) {
        return
      }
      this.currentTitleArrIndex++;
      this.checkCurrentTitleArrIndexIsMax()
    },
    // 根据题号切换展示题目
    checkedTopicNum (index) {
      if (index === undefined || index === null || index === '' || index === this.currentTitleNum) {
        return null;
      } else {
        this.currentTitleNum = index;
        this.makeTopicAndAnchorData(index)
      }
    },
    checkCurrentTitleArrIndexIsMax () {
      if (this.currentTitleArrIndex + 1 === Math.ceil(this.analysisModuleData.topicList.length / 5)) {
        return true;
      } else {
        return false;
      }
    },
    // 去除接口数据写死的 宽度700px
    replaceWid700 (html) {
      if (html) {
        return html.replace('width="700px"', '');
      }
    },
    // 切换题目 从map找到对应的锚点或知识点
    makeTopicAndAnchorData (topicIndex) {
      if (!this.analysisModuleData.topicList.length) {
        return
      }
      let titleNum = this.analysisModuleData.topicList[topicIndex].topicNumber;
      let index = 0;
      let flag = false;
      let anchor = this.anchorModuleData.list;
      for (let i in anchor) {
        let data = anchor[i];
        for (let j in data.errTopics) {
          let topicArr = data.errTopics[j]
          if (parseInt(titleNum) === parseInt(topicArr.sort)) {
            this.anchorCurrentIndex = index;
            this.anchorShow = true;
            flag = true;
            break;
          }
        }
        if (flag) {
          break;
        }
        index++;
      }
      this.showAnchor = flag;
      this.getAnchorInfo();
    },
    // checkKnowledgeText (knowledge) {
    //   // ...
    //   return `${this.anchorModuleData.list[knowledge].name}`;
    // },
    /**
     * 点击我的答案处理及埋点
     */
    showMyAnswer () {
      const data = this.analysisModuleData.topicList[this.currentTitleNum]
      if (data && data.imageAnswer) {
        this.myAnswerImgList = [];
        let imageAnswer = JSON.parse(data.imageAnswer);
        for (let i in imageAnswer) {
          this.myAnswerImgList.push(imageAnswer[i])
        }
      }
      this.answerImageArr = this.myAnswerImgList;
      this.changeAnswerImgShow(this.answerImageArr);
      let param = {
        module: 'zxb_newReport_web',
        opCode: '1006',
        otherInfo: {}
      }
      actionLog(param);
    },
    /**
     * 展示学霸答案及埋点
     */
    showBestAnswer () {
      let param = {
        module: 'zxb_newReport_web',
        opCode: '1007',
        otherInfo: {}
      }
      actionLog(param);
      this.answerImageArr = this.bestAnswerImgList;
      this.changeAnswerImgShow(this.answerImageArr, true);
    },
    /**
     * 获取学霸答案数据 --edit by jmning 2018/11/30
     * */
    goodStudentAnswer () {
      let that = this;
      let data = this.analysisModuleData.topicList[this.currentTitleNum];
      let topicNumberList = [];
      if (!data) return;
      if (data.answerType === 's01Text') {
        topicNumberList.push(parseInt(data.topicNumber));
      } else {
        for (let i in data.topicScoreDTOs) {
          topicNumberList.push(parseInt(data.topicScoreDTOs[i].topicNumber));
        }
      }
      // 使用外面出入的paperId，否则服务器端处理拆分学科有问题，理综拆分学科不能正确获取到试卷学科
      let paperId = that.paperId;
      let subjectCode = that.subjectCode;
      let params = {
        examId: that.examId,
        paperId: paperId,
        topicId: data.topicId,
        subjectCode: subjectCode,
        topicNumberList: JSON.stringify(topicNumberList)
      };
      APIService.getSingleBestAnswer(params).then(response => {
        if (response.errorCode === 0) {
          if (response.result && response.result.bestAnswers) {
            that.bestAnswerImgList = response.result.bestAnswers;
          }
        } else {
          console.log('getSingleBestAnswer errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    /**
     * 去提分
     * */
    goGetPoints (beAnchor, canPractise, anchorId, subjectCode, paperId) {
      return false
    },
    // 锚点组件参数加paperId属性
    getAnchorInfo () {
      let info = this.anchorModuleData.list[this.anchorCurrentIndex];
      info.paperId = this.analysisModuleData.topicList[this.currentTitleNum].paperId;
      this.anchorInfo = info;
    },
    // 分析我的答案类型
    makeMyAnswer () {
      if (this.analysisModuleData.topicList[this.currentTitleNum].userAnswer) {
        return `我的答案：${this.analysisModuleData.topicList[this.currentTitleNum].userAnswer}`;
      } else if (this.analysisModuleData.topicList[this.currentTitleNum].userAnswers && this.analysisModuleData.topicList[this.currentTitleNum].userAnswers.length) {
        let text = '';
        let list = this.analysisModuleData.topicList[this.currentTitleNum].userAnswers;
        for (let t in list) {
          let tUserAnswer = list[t].userAnswer;
          // 试题答案缺失时，默认展示‘-’
          if (!tUserAnswer && tUserAnswer !== 0) {
            tUserAnswer = '-';
          }
          text += list[t].smallTopicNum + '.' + tUserAnswer + '； ';
        }
        return `我的答案：${text}`
      }
    },
    /**
     * 展示答案图片的容器放到最外层div
     * @param data - 答案信息
     * @param isBestAnswer - 是否是学霸答案
     */
    changeAnswerImgShow (data, isBestAnswer) {
      let reportContentDom = document.querySelector('.report-content');
      reportContentDom.style.overflow = 'hidden';
      let $pop;
      if (document.querySelector('.pop-wrap')) {
        $pop = document.querySelector('.pop-wrap');
      } else {
        $pop = document.createElement('div');
        $pop.className = 'pop-wrap';
      }

      $pop.innerHTML = `
        <div id="popwrap" class="pop-wrap-div" v-show="picContainerShow">
          <div class="pop-shadow"></div>
            <span class="pic-show-close fa fa-close" @click="close"></span>
            <div class="pop-content">
              <slider-wrap ref="myPopwrap" class="swiper" :autoplay="false">
                <slider-item v-for="(item,index) in imgLists" :key="index">
                  <img v-show="!isBestAnswer" class="answer-con" :src="item" alt="答案图片">
                  <div v-show="isBestAnswer" class="answer-con">
                    <span class="good-answer-source" v-show="item.sourceInfo" v-text="item.sourceInfo"></span>
                    <img :src="item.url" alt="答案图片">
                  </div>
                </slider-item>
              </slider-wrap>
            </div>
        </div>
      `;
      let reportDom = document.querySelector('#report');
      reportDom.appendChild($pop);
      this.vm = new Vue({
        el: '#popwrap',
        data: {
          picContainerShow: true,
          imgLists: data,
          isBestAnswer: isBestAnswer
        },
        components: {
          'slider-item': sliderItem
        },
        created () {
        },
        methods: {
          show () {
            this.picContainerShow = false;
          },
          close () {
            reportContentDom.style.overflow = 'auto';
            this.picContainerShow = false;
            reportDom.removeChild($pop);
          }
        }
      });
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/loss-analysis/LossAnalysis.vue