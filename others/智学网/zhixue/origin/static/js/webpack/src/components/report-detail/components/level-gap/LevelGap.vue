/*
 * @Author: jjwu9
 * @Date:   2018-08-20 14:37:54
 * @Last Modified by:   PP
 * @Last Modified time: 2018-12-21
 */
<template src="./level-gap.html"></template>
<style src="./level-gap.less" lang="less"></style>

<script>
import F2 from '@antv/f2'
import APIService from '@/api/reportDetailWebServer.js';
// import httpData from '../../../../mock/scoreGapData.js';
import switchTab from '../../../switch-tab/SwitchTab.vue';
import {scoreLevelConvert} from '../score-level-convert/scoreLevelConvert';

export default {
  name: 'level-gap',
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
      levelGapTitle: '', // 头部标题
      levelGapSubTitle: '', // 头部副标题
      later3Score: '', // 后3名分数
      later2Score: '', // 后2名分数
      later1Score: '', // 后1名分数
      myScore: '', // 我的分数
      before1Score: '', // 前一名分数
      before2Score: '', // 前2名的分数
      before3Score: '', // 前3名的分数
      tabInfo: [], // tab列表
      isShowScoreTable: false,
      levelGapRoot: null,
      levelGapCanvas: null,
      levelGapCanvasContainer: null,
      scoreLevelConvert: {},
      scoreTable: {}
    };
  },

  mounted () {
    this.levelGapRoot = this.$refs.levelGapRoot
    this.levelGapCanvas = this.$refs.levelGapChart
    this.levelGapCanvasContainer = this.$refs.levelGapChartContainer
    this.requestData();
    // this.initData(httpData);
  },
  methods: {
    /**
     * 获取等级分数差距数据（单、全） --edit by jmning 2018/11/30
     */
    requestData: function () {
      let that = this;
      let params = {
        examId: that.examId
      };
      if (that.subjectCode === '00') {
        APIService.getAllLevelGap(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getAllLevelGap errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      } else {
        params.paperId = that.paperId;
        APIService.getSingleLevelGap(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getSingleLevelGap errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      }
    },
    // 数据重置
    resetData: function () {
      this.chartListData = []
      this.chartName = ''
      this.selectedTabName = ''
      this.totalCount = 0
      this.levelGapTitle = ''
      this.levelGapSubTitle = ''
      this.myScore = this.defaultScoreTxt
      this.later3Score = this.defaultScoreTxt
      this.later2Score = this.defaultScoreTxt
      this.later1Score = this.defaultScoreTxt
      this.before3Score = this.defaultScoreTxt
      this.before2Score = this.defaultScoreTxt
      this.before1Score = this.defaultScoreTxt
      this.tabInfo = []
    },
    //初始化数据
    initData: function(result) {
      this.resetData();

      if (!result || !result.levelList || !result.list) {
        return;
      }

      if (typeof(result) === 'string') {
        result = JSON.parse(result);
      }

      this.convertTableDataByResult(result);

      if (result.levelList && result.levelList.length > 0) {
        this.scoreLevelConvert = new scoreLevelConvert(result.levelList);
      }
      //提取tab列表
      if (result.list && result.list.length > 0) {
        this.tabInfo = []
        var list_length = result.list.length
        for (var i = 0; i < list_length; i++) {
          let tmp_data = result.list[i]
          if (!tmp_data || !tmp_data.tag) {
            continue
          }
          //过滤缺少绘制坐标点所必要信息的字段，计算等级对应的坐标值
          tmp_data.list = this.prepareChartData(tmp_data.list);
          var tagName = tmp_data.tag.name;
          if (tagName && tmp_data.list &&
            tmp_data.list.length > 0) {
            this.tabInfo.push(tagName)
            this.chartListData.push(tmp_data)
          }
        }
      }
      this.chartName = result.chartName
      this.showNearby = result.showNearby
      if (this.chartListData && this.chartListData.length > 0) {
        this.onSelectedTabChange(0);
      }
    },

    convertTableDataByResult: function (result) {
      this.scoreTable.name = result.tableName;
      if (result.tableDataList && result.tableDataList.length > 0) {
        this.scoreTable.data = [];
        let rowCount = result.tableDataList[0].list.length; // [平均分， 最高分， ...]
        for (let i = 0; i < rowCount; i++) {
          let rowData = {}; // 展示表格行数据
          rowData.name = result.tableDataList[0].list[i].name;  // 行名

          let showDataList = []; // 单元内容
          for (let originRowIndex in result.tableDataList) {
            let showDataItem = {};
            let originItem = result.tableDataList[originRowIndex]
            showDataItem.category = originItem.tag.name;
            showDataItem.value = '-';
            let unitItem = originItem.list.find(function (item) {
              return item.name === rowData.name;
            })
            if (unitItem) {
              showDataItem.value = unitItem.value;
            }
            showDataList.push(showDataItem);
          }
          rowData.list = showDataList;

          this.scoreTable.data.push(rowData);
        }
      }
    },

    //过滤掉缺少x，y必要字段的数据
    prepareChartData: function (list) {
      if (!list) {
        return list;
      }
      let tmp_data = [];
      for (let i = 0; i < list.length; i++) {
        let data = list[i];
        //过滤掉缺少x，y必要字段的数据
        if (data && data.score !== undefined && data.levelScale) {
          // 将levelScale 转成图表对应的横坐标value，添加到levelValue字段
          if (data.levelScale === '等级') {
            data.levelValue = this.scoreLevelConvert.maxValue;
          } else {
            data.levelValue = this.scoreLevelConvert.userLevelmap[data.levelScale];
          }

          if (data.levelValue !== undefined && data.levelValue >= 0) {
            tmp_data.push(data);
          }
        }
      }
      return tmp_data;
    },

    filterUndefinedChartData: function(list, x, y) {
      if (!list) {
        return list
      }
      let tmp_data = []
      for (let i = 0; i < list.length; i++) {
        let data = list[i]
        if (data && data.hasOwnProperty(x) && data.hasOwnProperty(y)) {
          tmp_data.push(data)
        }
      }
      return tmp_data
    },

    //改变X坐标数据，如：‘前80%’对应X轴坐标点为20
    // changeRank: function(list) {
    //   if (list) {
    //     let list_length = list.length;
    //     for (var i = 0; i < list_length; i++) {
    //       let levelScale = list[i].levelScale;
    //     }
    //   }
    //   return list;
    // },
    //tab切换监听事件
    onTabSwitch: function(argument) {
      this.onSelectedTabChange(argument);
    },
    // 切换tab数据
    onSelectedTabChange: function (index) {
      let tmp_data = this.chartListData[index]
      if (tmp_data.title) {
        this.levelGapTitle = tmp_data.title
      }
      if (tmp_data.subtitle) {
        this.levelGapSubTitle = tmp_data.subtitle
      }
      let table_data = tmp_data.list
      let table_data_length = table_data.length
      // -------------------------前后几名的分数--------------------------------------
      this.myScore = this.defaultScoreTxt
      this.later3Score = this.defaultScoreTxt
      this.later2Score = this.defaultScoreTxt
      this.later1Score = this.defaultScoreTxt
      this.before3Score = this.defaultScoreTxt
      this.before2Score = this.defaultScoreTxt
      this.before1Score = this.defaultScoreTxt
      for (let i = 0; i < table_data_length; i++) {
        let item = table_data[i]
        if (item.tag === 'my' && item.score != undefined && item.score != null && item.score >= 0) {
          this.myScore = item.score
        }
      }
      if (tmp_data.scoreBefore) {
        let scoreBeforeLength = tmp_data.scoreBefore.length
        for (let i = 0; i < scoreBeforeLength; i++) {
          let score = tmp_data.scoreBefore[i]
          if (score.score == undefined || score.score == null || score.score < 0) {
            continue
          }
          if (score.title === '前3名') {
            this.before3Score = score.score
          } else if (score.title === '前2名') {
            this.before2Score = score.score
          } else if (score.title === '前1名') {
            this.before1Score = score.score
          }
        }
      }
      if (tmp_data.scoreAfter) {
        let scoreAfterLength = tmp_data.scoreAfter.length
        for (let i = 0; i < scoreAfterLength; i++) {
          let score = tmp_data.scoreAfter[i]
          if (score.score == undefined || score.score == null || score.score < 0) {
            continue
          }
          if (score.title === '后3名') {
            this.later3Score = score.score
          } else if (score.title === '后2名') {
            this.later2Score = score.score
          } else if (score.title === '后1名') {
            this.later1Score = score.score
          }
        }
      }
      if (!this.showNearby || (this.later3Score === this.defaultScoreTxt && this.later2Score === this.defaultScoreTxt && this.later1Score === this.defaultScoreTxt &&
          this.before1Score === this.defaultScoreTxt && this.before2Score === this.defaultScoreTxt && this.before3Score === this.defaultScoreTxt)) {
        this.isShowScoreTable = false
      } else {
        this.isShowScoreTable = true
      }
      // 选中的tab名称
      this.selectedTabName = tmp_data.tag.name
      // 总人数
      this.totalCount = tmp_data.totalNum
      let _this = this
      new Promise((resolve, reject) => {
        if (_this.levelGapCanvasContainer.offsetWidth) {
          resolve()
        } else {
          let interval = window.setInterval(function () {
            if (_this.levelGapCanvasContainer.offsetWidth) {
              window.clearInterval(interval)
              resolve()
            }
          }, 200)
        }
      }).then(result => {
        _this.drawChart(table_data)
      })
    },
    // 遍历数组，获取最低的分数
    getMinScore: function (list) {
      if (list && list.length > 0) {
        let list_length = list.length
        let minScore = list[0].score
        for (var i = 1; i < list_length; i++) {
          let score = list[i].score
          if (minScore > score) {
            minScore = score
          }
        }
        return minScore
      }
      return 0
    },
    // 遍历数组，获取最高的分数
    getMaxScore: function (list) {
      if (list && list.length > 0) {
        let list_length = list.length
        let maxScore = list[0].score
        for (var i = 1; i < list_length; i++) {
          let score = list[i].score
          if (maxScore < score) {
            maxScore = score
          }
        }
        return maxScore
      }
      return 0
    },
    // 初始化图表
    initChart: function () {
      let ctx = this.levelGapCanvas.getContext('2d')
      let _this = this
      if (this.levelGapCanvasContainer.offsetWidth > 0) {
        window.report_body_canvas_real_width = this.levelGapCanvasContainer.offsetWidth
      }
      let canvas_width = window.report_body_canvas_real_width;
      let canvas_height = window.report_body_canvas_real_width * 0.25;

      if (!canvas_width || !canvas_height) {
        canvas_width = window.innerWidth * 0.65;
        canvas_height = window.innerWidth * 0.2;
      }
      // 创建Chart实例
      this.chart = new F2.Chart({
        el: _this.levelGapCanvas,
        width: canvas_width,
        height: canvas_height,
        pixelRatio: window.devicePixelRatio,
        padding: [4, 0, 'auto', 0]
      });
      //取消选中样式
      this.chart.tooltip(false);
      //--------------------------坐标轴样式----------------------------------
      this.chart.axis('levelValue', { //X轴样式
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
      })
      let xline_color = ctx.createLinearGradient(0, 0, canvas_width, 0)
      xline_color.addColorStop(0, '#ffffff')
      xline_color.addColorStop(0.1, '#EDEDED')
      xline_color.addColorStop(0.5, '#F1F1F1')
      xline_color.addColorStop(0.9, '#EDEDED')
      xline_color.addColorStop(1, '#ffffff')
      this.chart.axis('score', { // Y轴
        label: (text, index, total) => {
          const cfg = {
            fill: '#A5A9AF',
            textBaseline: 'top',
            fontSize: 12,
            textAlign: 'right'
          }
          if (index === 0) {
            cfg.opacity = 0
          } else {
            cfg.opacity = 1
          }
          return cfg
        },
        labelOffset: -6,
        position: 'right',
        grid: {
          lineDash: null,
          stroke: xline_color, // 'l(0) 0:#FFFFFF 0.1:#EDEDED 0.5:#F1F1F1 0.9:#EDEDED 1:#FFFFFF',
          lineWidth: 1
        }
      })
    },
    drawChart: function (dataList) {
      let guideEles = this.levelGapCanvasContainer.getElementsByClassName('guideWapper')
      if (guideEles) {
        while (guideEles.length > 0) {
          guideEles[0].remove()
        }
      }
      // 配置图表
      let isFirst = true
      if (this.chart) {
        isFirst = false
        this.chart.guide().clear()
        this.chart.clear()
      } else {
        isFirst = true
        this.initChart()
      }
      if (!dataList || dataList.length === 0 || this.scoreLevelConvert.userLevelmap.length === 0) {
        return;
      }
      // --------------------Y轴网格线间距及个数--------------------------------
      let data_length = dataList.length
      let minScore = this.getMinScore(dataList)
      let maxScore = this.getMaxScore(dataList)
      minScore = minScore - minScore % 10
      maxScore = maxScore - maxScore % 10 + 10
      let myScore = 0
      for (let i = 0; i < data_length; i++) {
        if (dataList[i].tag === 'my') {
          myScore = dataList[i].score
        }
      }
      if (maxScore > minScore && maxScore > myScore) {
        let percent = (maxScore - myScore) / (maxScore - minScore)
        while (percent < 0.1) { // 我的分数point距离顶部至少10%,防止标签遮挡
          maxScore += 10
          percent = (maxScore - myScore) / (maxScore - minScore)
        }
      }

      let that = this;
      this.chart.source(dataList, {
        levelValue: {
          type: 'linear',
          // type:'cat',  //刻度为枚举类型
          range:[0.1,0.9], //刻度范围 0～100%
          max: that.scoreLevelConvert.maxValue,
          min: 0,
          tickCount: that.scoreLevelConvert.mainLevels.length + 1,
          formatter(levelValue) {
            if (levelValue === that.scoreLevelConvert.maxValue) {
              return '等级';
            }

            let levelItem = that.scoreLevelConvert.mainLevels.find(function (item) {
              return item.value === levelValue;
            });
            if (levelItem) {
              return levelItem.name;
            }

            return '';
          }
        },

        score: {
          type: 'linear',
          tickCount: 7,
          max: maxScore,
          min: minScore,
          nice: true,
          formatter (score) {
            return parseInt(score)
          }
        }
      });
      //------------------------------------------------------------
      var ctx = this.levelGapCanvas.getContext('2d');
      //指定线条的渐变色
      let lineGrd = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
      lineGrd.addColorStop(0.1, "#0DC2B3");
      lineGrd.addColorStop(0.5, "#2FD2E7");
      lineGrd.addColorStop(0.9, "#3DEA95");

      //画线，指定线的样式为平滑曲线
      this.chart.line().position('levelValue*score').color(lineGrd).style({
        lineWidth: 3
      }).shape('smooth');

      //画点
      this.chart.point().position('levelValue*score').size('tag', (val) => {
        if (val === 'target') {
          return 5
        } else if (val === 'max' || val === 'min') {
          return 0
        }
        return 3
      }).style('tag', {
        fill: '#FFFFFF',
        stroke (val) {
          if (val === 'target') {
            return 'l(90) 0:#FFDC66 1:#FFB636'
          }
          return '#2BCFE0'
        },
        lineWidth (val) {
          if (val === 'target') {
            return 3
          }
          return 2
        }
      })
      // 各个点坐标文本
      let myScoreData = null
      let targetScoreData = null
      for (let i = 0; i < data_length; i++) {
        let tmp_data = dataList[i]
        var score_tmp = parseFloat(dataList[i].score) // 四舍五入最多保留两位小数
        score_tmp = Math.round(score_tmp * 100) / 100
        if (tmp_data.tag === 'my' && tmp_data.score >= 0) {
          myScoreData = tmp_data
          this.chart.guide().html({
            position: [tmp_data.levelValue, tmp_data.score],
            html: '<div class="level-gap-popup"><span><em></em></span>我 ' + tmp_data.levelScale + '(' + score_tmp + '分)' + '</div>',
            alignX: 'right',
            alignY: 'bottom',
            offsetY: -10,
            offsetX: 0
          })
        } else if (tmp_data.tag === 'target' && tmp_data.score >= 0) {
          targetScoreData = tmp_data
          this.chart.guide().html({
            position: [tmp_data.levelValue, tmp_data.score],
            html: '<div class="level-gap-target-score" id="levelGapTargetScoreId">'  + tmp_data.levelScale + '(' + score_tmp + '分)' + '</div>',
            alignX: 'right',
            alignY: 'bottom',
            offsetY: -10,
            offsetX: 0
          })
        } else if (tmp_data.levelScale && tmp_data.score >= 0 && tmp_data.tag === 'level') {
          this.chart.guide().html({
            position: [tmp_data.levelValue, tmp_data.score],
            html: '<div class="level-gap-default-score">' + tmp_data.levelScale + '</div>',
            alignX: 'right',
            alignY: 'bottom',
            offsetY: -5,
            offsetX: 0
          })
        }
      }
      if (isFirst) {
        this.chart.render()
      } else {
        this.chart.repaint()
      }
      // 计算‘我的分数’与‘目标分数’的偏移量，防止层叠
      let myScorePoint = null
      if (myScoreData) {
        myScorePoint = this.chart.getPosition(myScoreData)
      }
      let targetScorePoint = null
      if (targetScoreData) {
        targetScorePoint = this.chart.getPosition(targetScoreData)
      }
      if (myScorePoint && targetScorePoint && myScorePoint.y - targetScorePoint.y < 24 && targetScorePoint.x - myScorePoint.x < 60) {
        let offsetY = (myScorePoint.y - targetScorePoint.y) - 24
        let targertEl = this.levelGapRoot.getElementsByClassName('level-gap-target-score')[0]
        targertEl.style.top = (parseInt(targertEl.style.top) + offsetY) + 'px'
      }
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/level-gap/LevelGap.vue