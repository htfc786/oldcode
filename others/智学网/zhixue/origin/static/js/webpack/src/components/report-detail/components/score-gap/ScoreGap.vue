/*
 * @Author: jjwu9
 * @Date:   2018-08-20 14:37:54
 * @Last Modified by:   jjwu9
 * @Last Modified time: 2018-09-20 10:41:20
 */
<template src="./score-gap.html"></template>
<style src="./score-gap.less" lang="less"></style>
<script>
import F2 from '@antv/f2';
import APIService from '@/api/reportDetailWebServer';
// import httpData from '../../../../mock/scoreGapData.js';
import switchTab from '../../../switch-tab/SwitchTab';
export default {
  name: 'score-gap',
  components: {
    'switch-tab': switchTab
  },
  props: {
    examId: {
      type: String
    },
    paperId: {
      type: String
    },
    subjectCode: {
      type: String,
      default: '00'
    }
  },

  data () {
    return {
      defaultScoreTxt: '— —',
      chartListData: null, // 图表数据集合
      chart: null, // F2.Chart实例
      chartName: '', // 图表名称
      selectedTabName: '', // 选中tab的名称
      totalCount: 0, // 总人数
      scoreGapTitle: '', // 头部标题
      scoreGapSubTitle: '', // 头部副标题
      later3Score: '', // 后3名分数
      later2Score: '', // 后2名分数
      later1Score: '', // 后1名分数
      myScore: '', // 我的分数
      before1Score: '', // 前一名分数
      before2Score: '', // 前2名的分数
      before3Score: '', // 前3名的分数
      tabInfo: [], // tab列表
      isShowScoreTable: false,
      scoreGapRoot: null,
      scoreGapCanvas: null,
      scoreGapCanvasContainer: null
    };
  },
  mounted () {
    this.scoreGapRoot = this.$refs.scoreGapRoot;
    this.scoreGapCanvas = this.$refs.scoreGapChart;
    this.scoreGapCanvasContainer = this.$refs.scoreGapChartContainer;
    this.requestData();
    // this.initData(httpData);
  },
  methods: {
    /**
     * 获取成绩变化数据（单、全） --edit by jmning 2018/11/30
     */
    requestData: function () {
      let that = this;
      let params = {
        examId: that.examId
      };
      if (that.subjectCode === '00') {
        APIService.getAllScoreGap(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getAllScoreGap errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      } else {
        params.paperId = that.paperId;
        APIService.getSingleScoreGap(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getSingleScoreGap errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      }
    },
    // 数据重置
    resetData: function () {
      this.chartListData = [];
      this.chartName = '';
      this.selectedTabName = '';
      this.totalCount = 0;
      this.scoreGapTitle = '';
      this.scoreGapSubTitle = '';
      this.myScore = this.defaultScoreTxt;
      this.later3Score = this.defaultScoreTxt;
      this.later2Score = this.defaultScoreTxt;
      this.later1Score = this.defaultScoreTxt;
      this.before3Score = this.defaultScoreTxt;
      this.before2Score = this.defaultScoreTxt;
      this.before1Score = this.defaultScoreTxt;
      this.tabInfo = [];
    },
    // 初始化数据
    initData: function (result) {
      this.resetData();
      if (!result) {
        return;
      }
      if (typeof (result) === 'string') {
        result = JSON.parse(result);
      }
      // 提取tab列表
      if (result.list && result.list.length > 0) {
        this.tabInfo = [];
        var list_length = result.list.length;
        for (var i = 0; i < list_length; i++) {
          let tmp_data = result.list[i];
          if (!tmp_data || !tmp_data.tag) {
            continue;
          }
          // 过滤缺少绘制坐标点所必要信息的字段
          let filterData = this.filterUndefinedChartData(tmp_data.list, 'score', 'rank');
          tmp_data.list = filterData;
          var tagName = tmp_data.tag.name;
          if (tagName && tmp_data.list &&
            tmp_data.list.length > 0) {
            this.tabInfo.push(tagName);
            this.chartListData.push(tmp_data);
          }
        }
      }
      this.chartName = result.chartName;
      if (this.chartListData && this.chartListData.length > 0) {
        var list_length = this.chartListData.length;
        for (var i = 0; i < list_length; i++) {
          if (this.chartListData[i] && this.chartListData[i].list) {
            this.chartListData[i].list = this.changeRank(this.chartListData[i].list);
            this.fixAvgRank(this.chartListData[i].list);
          }
        }
        this.onSelectedTabChange(0);
      }
    },
    fixAvgRank: function (dataList) { // 修复平均分的排名问题
      let myScoreData = null;
      let targetScoreData = null;
      let avgScoreData = null;
      let maxScoreData = null;
      for (let i = 0; i < dataList.length; i++) {
        let tmp_data = dataList[i];
        if (tmp_data) {
          if (tmp_data.tag === 'my') {
            myScoreData = tmp_data;
          } else if (tmp_data.tag === 'target') {
            targetScoreData = tmp_data;
          } else if (tmp_data.tag === 'avg') {
            avgScoreData = tmp_data;
          } else if (tmp_data.tag === 'max') {
            maxScoreData = tmp_data;
          }
        }
      }
      let minRank = 0;
      let maxRank = 0;
      if (avgScoreData) {
        if (maxScoreData && avgScoreData.score === maxScoreData.score) {
          minRank = 0;
          maxRank = 100;
        } else if (targetScoreData && avgScoreData.score === targetScoreData.score) {
          minRank = targetScoreData.rank - 1;
          maxRank = targetScoreData.rank + 1;
        } else if (myScoreData && avgScoreData.score === myScoreData.score) {
          minRank = myScoreData.rank - 1;
          maxRank = myScoreData.rank + 1;
        } else if (myScoreData && avgScoreData.score < myScoreData.score) {
          minRank = 0;
          maxRank = myScoreData.rank;
        } else if (targetScoreData && avgScoreData.score < targetScoreData.score) {
          if (myScoreData) {
            minRank = myScoreData.rank;
          }
          maxRank = targetScoreData.rank;
        } else if (maxScoreData && avgScoreData.score < maxScoreData.score) {
          if (targetScoreData) {
            minRank = targetScoreData.rank;
          } else if (myScoreData) {
            minRank = myScoreData.rank;
          } else {
            minRank = 0;
          }
          maxRank = maxScoreData.rank;
        }
        if (minRank >= 0 && maxRank > minRank) {
          if (avgScoreData.rank <= minRank || avgScoreData.rank >= maxRank) {
            if (avgScoreData.rank <= minRank) {
              if (maxRank - minRank > 10) {
                avgScoreData.rank = minRank + 10;
              } else {
                avgScoreData.rank = minRank + parseInt((maxRank - minRank) / 2);
              }
            } else {
              if (maxRank - minRank > 10) {
                avgScoreData.rank = maxRank - 10;
              } else {
                avgScoreData.rank = maxRank - parseInt((maxRank - minRank) / 2);
              }
            }
          }
        }
      }
    },
    // 过滤掉缺少x，y必要字段的数据
    filterUndefinedChartData: function (list, x, y) {
      if (!list) {
        return list;
      }
      let tmp_data = [];
      for (let i = 0; i < list.length; i++) {
        let data = list[i];
        if (data && data.hasOwnProperty(x) && data.hasOwnProperty(y)) {
          tmp_data.push(data);
        }
      }
      return tmp_data;
    },
    // 改变X坐标数据，如：‘前80%’对应X轴坐标点为20
    changeRank: function (list) {
      if (list) {
        let list_length = list.length;
        for (var i = 0; i < list_length; i++) {
          let rank = list[i].rank;
          if (rank >= 0 && rank <= 100) {
            list[i].rank = 100 - rank;
          }
        }
      }
      return list;
    },
    // tab切换监听事件
    onTabSwitch: function (argument) {
      this.onSelectedTabChange(argument);
    },
    // 切换tab数据
    onSelectedTabChange: function (index) {
      let tmp_data = this.chartListData[index];
      if (tmp_data.title) {
        this.scoreGapTitle = tmp_data.title;
      }
      if (tmp_data.subtitle) {
        this.scoreGapSubTitle = tmp_data.subtitle;
      }
      let table_data = tmp_data.list;
      let table_data_length = table_data.length;
      // -------------------------前后几名的分数--------------------------------------
      this.myScore = this.defaultScoreTxt;
      this.later3Score = this.defaultScoreTxt;
      this.later2Score = this.defaultScoreTxt;
      this.later1Score = this.defaultScoreTxt;
      this.before3Score = this.defaultScoreTxt;
      this.before2Score = this.defaultScoreTxt;
      this.before1Score = this.defaultScoreTxt;
      for (let i = 0; i < table_data_length; i++) {
        let item = table_data[i];
        if (item.tag === 'my' && item.score != undefined && item.score != null && item.score >= 0) {
          this.myScore = item.score;
        }
      }
      if (tmp_data.scoreBefore) {
        let scoreBeforeLength = tmp_data.scoreBefore.length;
        for (let i = 0; i < scoreBeforeLength; i++) {
          let score = tmp_data.scoreBefore[i];
          if (score.score == undefined || score.score == null || score.score < 0) {
            continue;
          }
          if (score.title === '前3名') {
            this.before3Score = score.score;
          } else if (score.title === '前2名') {
            this.before2Score = score.score;
          } else if (score.title === '前1名') {
            this.before1Score = score.score;
          }
        }
      }
      if (tmp_data.scoreAfter) {
        let scoreAfterLength = tmp_data.scoreAfter.length;
        for (let i = 0; i < scoreAfterLength; i++) {
          let score = tmp_data.scoreAfter[i];
          if (score.score == undefined || score.score == null || score.score < 0) {
            continue;
          }
          if (score.title === '后3名') {
            this.later3Score = score.score;
          } else if (score.title === '后2名') {
            this.later2Score = score.score;
          } else if (score.title === '后1名') {
            this.later1Score = score.score;
          }
        }
      }
      if (this.later3Score === this.defaultScoreTxt && this.later2Score === this.defaultScoreTxt && this.later1Score === this.defaultScoreTxt &&
        this.before1Score === this.defaultScoreTxt && this.before2Score === this.defaultScoreTxt && this.before3Score === this.defaultScoreTxt) {
        this.isShowScoreTable = false;
      } else {
        this.isShowScoreTable = true;
      }
      // 选中的tab名称
      this.selectedTabName = tmp_data.tag.name;
      // 总人数
      this.totalCount = tmp_data.totalNum;
      let _this = this;
      new Promise((resolve, reject) => {
        if (_this.scoreGapCanvasContainer.offsetWidth) {
          resolve();
        } else {
          let interval = window.setInterval(function () {
            if (_this.scoreGapCanvasContainer.offsetWidth) {
              window.clearInterval(interval);
              resolve();
            }
          }, 200);
        }
      }).then(result => {
        _this.drawChart(table_data);
      });
    },
    // 遍历数组，获取最低的分数
    getMinScore: function (list) {
      if (list && list.length > 0) {
        let list_length = list.length;
        let minScore = list[0].score;
        for (var i = 1; i < list_length; i++) {
          let score = list[i].score;
          if (minScore > score) {
            minScore = score;
          }
        }
        return minScore;
      }
      return 0;
    },
    // 遍历数组，获取最高的分数
    getMaxScore: function (list) {
      if (list && list.length > 0) {
        let list_length = list.length;
        let maxScore = list[0].score;
        for (var i = 1; i < list_length; i++) {
          let score = list[i].score;
          if (maxScore < score) {
            maxScore = score;
          }
        }
        return maxScore;
      }
      return 0;
    },
    // 初始化图表
    initChart: function () {
      let ctx = this.scoreGapCanvas.getContext('2d');
      let _this = this;
      if (this.scoreGapCanvasContainer.offsetWidth > 0) {
        window.report_body_canvas_real_width = this.scoreGapCanvasContainer.offsetWidth;
      }
      let canvas_width = window.report_body_canvas_real_width;
      let canvas_height = window.report_body_canvas_real_width * 0.25;

      if (!canvas_width || !canvas_height) {
        canvas_width = window.innerWidth * 0.65;
        canvas_height = window.innerWidth * 0.2;
      }
      // 创建Chart实例
      this.chart = new F2.Chart({
        el: _this.scoreGapCanvas,
        width: canvas_width,
        height: canvas_height,
        pixelRatio: window.devicePixelRatio,
        padding: [4, 0, 'auto', 0]
      });
      // 取消选中样式
      this.chart.tooltip(false);
      // --------------------------坐标轴样式----------------------------------
      this.chart.axis('rank', { // X轴样式
        line: null,
        label: {
          fill: '#A5A9AF',
          fontSize: 12
        },
        grid: {
          lineDash: null,
          stroke: '#F5F5F5',
          lineWidth: 1
        }
      });
      let xline_color = ctx.createLinearGradient(0, 0, canvas_width, 0);
      xline_color.addColorStop(0, '#ffffff');
      xline_color.addColorStop(0.1, '#EDEDED');
      xline_color.addColorStop(0.5, '#F1F1F1');
      xline_color.addColorStop(0.9, '#EDEDED');
      xline_color.addColorStop(1, '#ffffff');
      this.chart.axis('score', { // Y轴
        label: (text, index, total) => {
          const cfg = {
            fill: '#A5A9AF',
            textBaseline: 'top',
            fontSize: 12,
            textAlign: 'right'
          };
          if (index === 0) {
            cfg.opacity = 0;
          } else {
            cfg.opacity = 1;
          }
          return cfg;
        },
        labelOffset: -6,
        position: 'right',
        grid: {
          lineDash: null,
          stroke: xline_color, // 'l(0) 0:#FFFFFF 0.1:#EDEDED 0.5:#F1F1F1 0.9:#EDEDED 1:#FFFFFF',
          lineWidth: 1
        }
      });
    },
    drawChart: function (dataList) {
      let guideEles = this.scoreGapCanvasContainer.getElementsByClassName('guideWapper');
      if (guideEles) {
        while (guideEles.length > 0) {
          guideEles[0].remove();
        }
      }
      // 配置图表
      let isFirst = true;
      if (this.chart) {
        isFirst = false;
        this.chart.guide().clear();
        this.chart.clear();
      } else {
        isFirst = true;
        this.initChart();
      }
      if (!dataList || dataList.length == 0) {
        return;
      }
      // --------------------Y轴网格线间距及个数--------------------------------
      let data_length = dataList.length;
      let minScore = this.getMinScore(dataList);
      let maxScore = this.getMaxScore(dataList);
      minScore = minScore - minScore % 10;
      maxScore = maxScore - maxScore % 10 + 10;
      let myScore = 0;
      for (let i = 0; i < data_length; i++) {
        if (dataList[i].tag === 'my') {
          myScore = dataList[i].score;
        }
      }
      if (maxScore > minScore && maxScore > myScore) {
        let percent = (maxScore - myScore) / (maxScore - minScore);
        while (percent < 0.1) { // 我的分数point距离顶部至少10%,防止标签遮挡
          maxScore += 10;
          percent = (maxScore - myScore) / (maxScore - minScore);
        }
      }
      this.chart.source(dataList, {
        rank: {
          type: 'linear',
          // range: [0.1,0.9],
          range: [0.1, 0.9],
          max: 100,
          min: 0,
          tickCount: 6,
          formatter (rank) {
            if (rank == 100) {
              return '第1名';
            }
            if (rank == 0) {
              return '成绩水平：';
            }
            return '前' + (100 - rank) + '%';
          }
        },
        score: {
          type: 'linear',
          tickCount: 7,
          max: maxScore,
          min: minScore,
          nice: true,
          formatter (score) {
            return parseInt(score);
          }
        }
      });
      // ------------------------------------------------------------
      var ctx = this.scoreGapCanvas.getContext('2d');
      // 指定线条的渐变色
      let lineGrd = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
      lineGrd.addColorStop(0.1, '#0DC2B3');
      lineGrd.addColorStop(0.5, '#2FD2E7');
      lineGrd.addColorStop(0.9, '#3DEA95');
      // 画线，指定线的样式为平滑曲线
      this.chart.line().position('rank*score').color(lineGrd).style({
        lineWidth: 3
      }).shape('smooth');
      // 画点
      this.chart.point().position('rank*score').size('tag', (val) => {
        if (val === 'target') {
          return 5;
        }
        return 3;
      }).style('tag', {
        fill: '#FFFFFF',
        stroke (val) {
          if (val === 'target') {
            return 'l(90) 0:#FFDC66 1:#FFB636';
          }
          return '#2BCFE0';
        },
        lineWidth (val) {
          if (val === 'target') {
            return 3;
          }
          return 2;
        }
      });
      // 各个点坐标文本
      let myScoreData = null;
      let targetScoreData = null;
      for (let i = 0; i < data_length; i++) {
        let tmp_data = dataList[i];
        var score_tmp = parseFloat(dataList[i].score); // 四舍五入最多保留两位小数
        score_tmp = Math.round(score_tmp * 100) / 100;
        if (tmp_data.tag === 'max' && tmp_data.score >= 0) {
          this.chart.guide().html({
            position: [tmp_data.rank, tmp_data.score],
            html: '<div class="score-gap-default-score">最高：' + score_tmp + '</div>',
            alignX: 'right',
            alignY: 'top',
            offsetY: 6
          });
        } else if (tmp_data.tag === 'target' && tmp_data.score >= 0) {
          targetScoreData = tmp_data;
          this.chart.guide().html({
            position: [tmp_data.rank, tmp_data.score],
            html: '<div class="score-gap-target-score" id="scoreGapTargetScoreId">目标：' + score_tmp + '</div>',
            alignX: 'right',
            alignY: 'bottom',
            offsetY: -6
          });
        } else if (tmp_data.tag === 'my' && tmp_data.score >= 0) {
          myScoreData = tmp_data;
          this.chart.guide().html({
            position: [tmp_data.rank, tmp_data.score],
            html: '<div class="score-gap-popup"><span><em></em></span>我：' + score_tmp + '</div>',
            alignX: 'right',
            alignY: 'bottom',
            offsetY: -10,
            offsetX: 0
          });
        } else if (tmp_data.tag === 'avg' && tmp_data.score >= 0) {
          this.chart.guide().html({
            position: [tmp_data.rank, tmp_data.score],
            html: '<div class="score-gap-default-score">平均：' + score_tmp + '</div>',
            alignX: 'left',
            alignY: 'top',
            offsetY: 6
          });
        }
      }
      if (isFirst) {
        this.chart.render();
      } else {
        this.chart.repaint();
      }
      // 计算‘我的分数’与‘目标分数’的偏移量，防止层叠
      let myScorePoint = null;
      if (myScoreData) {
        myScorePoint = this.chart.getPosition(myScoreData);
      }
      let targetScorePoint = null;
      if (targetScoreData) {
        targetScorePoint = this.chart.getPosition(targetScoreData);
      }
      if (myScorePoint && targetScorePoint && myScorePoint.y - targetScorePoint.y < 24 && targetScorePoint.x - myScorePoint.x < 60) {
        let offsetY = (myScorePoint.y - targetScorePoint.y) - 24;
        let targertEl = this.scoreGapRoot.getElementsByClassName('score-gap-target-score')[0];
        targertEl.style.top = (parseInt(targertEl.style.top) + offsetY) + 'px';
      }
    }
  }

}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/score-gap/ScoreGap.vue