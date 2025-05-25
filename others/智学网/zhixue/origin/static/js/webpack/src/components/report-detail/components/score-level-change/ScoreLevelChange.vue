<!--
 * @Author: peijin peijin@iflytek.com
 * @Date: 2024-10-31 18:22:34
 * @LastEditors: peijin peijin@iflytek.com
 * @LastEditTime: 2024-11-15 15:40:15
 * @FilePath: \srv-pt-report-zxb\htm-web-report\src\components\report-detail\components\score-level-change\ScoreLevelChange.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
/*
* @Author: jjwu9
* @Date:   2018-11-17 16:11:56
* @Last Modified by:   jjwu9
* @Last Modified time: 2018-12-21 15:18:21 by PP
*/
<template src="./score-level-change.html"></template>
<style src="./score-level-change.less" lang="less"></style>
<script>
import F2 from '@antv/f2';
import APIService from '../../../../api/reportDetailWebServer.js';
// import httpData from '../../../../mock/scoreLevel.json';
import switchTab from '../../../switch-tab/SwitchTab.vue';
import {scoreLevelConvert} from '../score-level-convert/scoreLevelConvert';
import fiyLocalStorage from '../../../../api/checkStorage'
import fastDown from './imgs/fastDown.png';
import fastUp from './imgs/fastUp.png';
import slowDown from './imgs/slowDown.png';
import slowUp from './imgs/slowUp.png';
import steady from './imgs/steady.png';
import reportGenerTime from '../report-gener-time/report-gener-time.vue';
export default {
  name: 'scoreLevelChange',
  components: {
    'report-gener-time': reportGenerTime,
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
      chartListData: [], // 图表数据集合
      chart: null, // F2.Chart对象
      chartName: '', // 图表标题
      selectedTabName: '', // 选中的tab的名称
      tag: {},
      selectedExamName: '	', // 选中图表上的点对应的考试名称
      totalCount: 0, // 总人数
      scoreLevelTitle: '', // 头部标题
      scoreLevelSubTitle: '', // 头部副标题
      tabInfo: [], // tab列表
      defaultSelectedPoints: new Map(), // 存储每张图表最后一次所选中的点
      reference: {},
      improveBar: {}, // 等级进度条
      rootElement: null,
      canvasElement: null,
      canvasContainerElement: null,
      imgList: {
        fastDown: fastDown,
        fastUp: fastUp,
        slowDown: slowDown,
        slowUp: slowUp,
        steady: steady
      },
      scoreLevelConvert: {},
      examinationType: 1, // 考试类型
      scoreLevelType: '',
      beginTime: '',
      endTime: '',
      isLinkage:true
    };
  },

  mounted () {
    this.rootElement = this.$refs.scoreLevelRoot;
    this.canvasElement = this.$refs.scoreLevelChart;
    this.canvasContainerElement = this.$refs.scoreLevelChartContainer;
    this.requestData();
  },

  methods: {
    handleDateChange (beginTime, endTime,name) {
      this.beginTime = beginTime
      this.endTime = endTime
      this.requestData();
    },
    /**
     * 获取等级成绩变化数据（单、全） --edit by jmning 2018/11/30
     */
    requestData: function () {
      let that = this;
      let params = {
        examId: that.examId,
        pageIndex: 1,
        pageSize: 5
      };
      if (that.beginTime && that.endTime) {
        params.startSchoolYear = that.beginTime
        params.endSchoolYear = that.endTime
      }
      if (that.subjectCode === '00') {
        APIService.getAllScoreLevelChange(params).then(response => {
          if (response.errorCode === 0) {
            that.scoreLevelType = response.result.scoreLevelType;
            that.initData(response.result);
          } else {
            console.log('getAllScoreLevelChange errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      } else {
        params.paperId = that.paperId;
        APIService.getSinglePaperScoreLevelChange(params).then(response => {
          if (response.errorCode === 0) {
            that.scoreLevelType = response.result.scoreLevelType;
            that.initData(response.result);
          } else {
            console.log('getSinglePaperScoreLevelChange errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      }
    },
    onReferenceClick () {
      if (!this.reference.linkUrl) return;
      this.$emit('levelChangeDlg', `${this.reference.linkUrl}?examId=${this.examId}&token=${fiyLocalStorage.getItem('xToken')}&subjectCode=${this.subjectCode}&code=${this.tag.code}&number=${this.totalCount}`)
    },

    prepareChartData: function (list) {
      if (!list) {
        return list;
      }
      let tmp_data = [];
      // 检查数组中的对象是否含有必要参数，将缺少必要属性的对象从数组中移除
      for (let i = 0; i < list.length; i++) {
        let data = list[i];
        if (data && data.id && data.level) {
          data.levelValue = this.scoreLevelConvert.offsetIdMap[data.id];
          if (data.levelValue != undefined && data.levelValue >= 0) {
            tmp_data.push(data);
          }
        }
      }
      return tmp_data;
    },

    // 检查数组中的对象是否含有必要参数，将缺少必要属性的对象从数组中移除
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
    // 数据重置
    resetData: function () {
      this.chartListData = [],
      this.chartName = '';
      this.reference = {};
      this.selectedTabName = '';
      this.tag = {};
      this.selectedExamName = '';
      this.totalCount = 0;
      this.scoreLevelTitle = '';
      this.scoreLevelSubTitle = '';
      this.tabInfo = [];
      this.defaultSelectedPoints = new Map();
      this.isShowImproveBar = false;
      this.scoreLevelRunningTitle = null;
      this.scoreLevelRunningIcon = null;
      this.improveBar = {};
      this.improveBar.sectionData = [];
    },
    // 初始化数据
    initData: function (result) {
      this.resetData();
      if (!result || !result.list) {
        return;
      }
      if (typeof (result) === 'string') {
        result = JSON.parse(result);
      }
      this.examinationType = result.examinationType;
      // if (result.levelList && result.levelList.length > 0) {
      //   this.scoreLevelConvert = new scoreLevelConvert(result.levelList);
      //   this.improveBar.sectionData = this.scoreLevelConvert.mainLevels.reverse();
      // }
      // 检查数组元素，提取tag信息
      if (result.list && result.list.length > 0) {
        this.tabInfo = [];
        var list_length = result.list.length;
        for (var i = 0; i < list_length; i++) {
          let tmp_data = result.list[i];
          if (!tmp_data.tag) {
            continue;
          }
          if (tmp_data.levelList && tmp_data.levelList.length > 0) {
            this.scoreLevelConvert = new scoreLevelConvert(tmp_data, this.scoreLevelType);
            this.improveBar.sectionData = this.scoreLevelConvert.mainLevels.reverse();
          }
          // 数据筛选，去除缺少x、y坐标的数据，计算等级对应的坐标值
          let filterData = this.prepareChartData(tmp_data.dataList);
          tmp_data.dataList = filterData;
          var tagName = tmp_data.tag.name;
          if (tagName && tmp_data.dataList &&
            tmp_data.dataList.length > 0) {
            this.tabInfo.push(tagName);
            this.chartListData.push(tmp_data);
          }
        }
      }
      this.chartName = result.chartName;
      if (this.tabInfo && this.tabInfo.length > 0) {
        // for (let i = 0; i < this.chartListData.length; i++) {
        //   this.transformRatioToChart(this.chartListData[i].dataList);
        // }
        this.onSelectedTabChange(0);
      }
    },
    // tab切换监听事件
    onTabSwitch: function (argument) {
      this.onSelectedTabChange(argument);
    },
    // 切换内容
    onSelectedTabChange: function (index) {
      if (this.chartListData.length === 0) {
        return;
      }
      let tmp_data = this.chartListData[index];
      this.totalCount = this.chartListData[index].totalNum ? this.chartListData[index].totalNum : 0;
      this.$store.commit('totalCount', this.totalCount);
      if (tmp_data.reference && tmp_data.reference.linkUrl) {
        this.$store.commit('linkUrl', tmp_data.reference.linkUrl)
      }
      if (!tmp_data || !tmp_data.levelList) {
        return;
      }
      this.scoreLevelTitle = tmp_data.title;
      if (tmp_data.subtitle) {
        this.scoreLevelSubTitle = tmp_data.subtitle;
      }
      let table_data = tmp_data.dataList;
      if (tmp_data.tag.name === '年级' && this.examinationType === 2) { // 选考考试‘年级总人数’改为‘选考总人数’
        this.selectedTabName = '选考';
      } else {
        this.selectedTabName = tmp_data.tag.name;
      }
      this.tag = tmp_data.tag;
      this.selectedExamName = '';
      this.reference = tmp_data.reference || {};
      let improveBarData = tmp_data.improveBar;
      if (tmp_data.levelList && tmp_data.levelList.length > 0) {
        this.scoreLevelConvert = new scoreLevelConvert(tmp_data, this.scoreLevelType);
        this.improveBar.sectionData = this.scoreLevelConvert.mainLevels.reverse();
      }
      //      if (improveBarData && improveBarData.show && improveBarData.tag) {
      //        this.scoreLevelRunningTitle = improveBarData.tag.name;
      //        if (improveBarData.tag.code === 'fastUp') { // 飞速进步中
      //          this.scoreLevelRunningIcon = this.imgList.fastUp;
      //        } else if (improveBarData.tag.code === 'slowUp') { // 缓慢进步中
      //          this.scoreLevelRunningIcon = this.imgList.slowUp;
      //        } else if (improveBarData.tag.code === 'steady') { // 相对稳定
      //          this.scoreLevelRunningIcon = this.imgList.steady;
      //        } else if (improveBarData.tag.code === 'slowDown') { // 略有退步
      //          this.scoreLevelRunningIcon = this.imgList.slowDown;
      //        } else if (improveBarData.tag.code === 'fastDown') { // 退步较大
      //          this.scoreLevelRunningIcon = this.imgList.fastDown;
      //        }
      //        this.isShowImproveBar = this.scoreLevelRunningTitle && this.scoreLevelRunningIcon;
      //      } else {
      //        this.isShowImproveBar = false;
      //      }
      //      if (this.isShowImproveBar) {
      //        let progress = 50;
      //        if (improveBarData.levelScale === 'A') {
      //          progress = 85 + parseInt(improveBarData.offset * 15 / 100);
      //        } else if (improveBarData.levelScale === 'B') {
      //          progress = 55 + parseInt(improveBarData.offset * 30 / 100);
      //        } else if (improveBarData.levelScale === 'C') {
      //          progress = 25 + parseInt(improveBarData.offset * 30 / 100);
      //        } else if (improveBarData.levelScale === 'D') {
      //          progress = 5 + parseInt(improveBarData.offset * 20 / 100);
      //        } else if (improveBarData.levelScale === 'E') {
      //          progress = parseInt(improveBarData.offset * 5 / 100);
      //        }
      //        progress = progress - 50;
      //        // this.$refs.scoreLevelRunningContainer.style.transform = 'translateX(' + progress + '%)';
      //        this.$refs.scoreLevelRunningContainer.style.left = progress + '%';
      //      }
      // pp merge

      // pp merge end

      let _this = this;
      // 启动定时器监听dom是否已经渲染完成
      new Promise((resolve, reject) => {
        if (_this.canvasContainerElement.offsetWidth) {
          resolve();
        } else {
          let interval = window.setInterval(function () {
            if (_this.canvasContainerElement.offsetWidth) {
              window.clearInterval(interval);
              resolve();
            }
          }, 200);
        }
      }).then(result => {
        _this.drawChart(table_data);
      });
    },
    // 将指定的class替换成新的class
    changeElemsClass: function (originClass, dstClass) {
      let selectedEls = this.rootElement.getElementsByClassName(originClass);
      for (var i = 0; i < selectedEls.length; i++) {
        selectedEls[i].className = dstClass;
      }
    },
    // 改变指定的class的透明度
    changeElemsOpacityByClass: function (originClass, opacity) {
      let selectedTags = this.rootElement.getElementsByClassName(originClass);
      if (selectedTags) {
        let selectedTagLength = selectedTags.length;
        for (let i = 0; i < selectedTagLength; i++) {
          selectedTags[i].style.opacity = opacity;
        }
      }
    },
    // 初始化图表
    initChart: function () {
      var ctx = this.canvasElement.getContext('2d');
      let _this = this;
      if (this.canvasContainerElement.offsetWidth > 0) {
        window.report_body_canvas_real_width = this.canvasContainerElement.offsetWidth;
      }
      let canvas_width = window.report_body_canvas_real_width;
      let canvas_height = window.report_body_canvas_real_width * 0.25;
      if (!canvas_width || !canvas_height) {
        canvas_width = window.innerWidth * 0.65;
        canvas_height = canvas_width * 0.2;
      }
      // 创建图表对象
      this.chart = new F2.Chart({
        el: _this.canvasElement,
        width: canvas_width,
        height: canvas_height,
        pixelRatio: window.devicePixelRatio,
        padding: [0, 0, 'auto', 0]
      });
      // --------------------------------图表上的坐标选中时的样式-----------------------------------------
      this.chart.tooltip({
        custom: true, // 自定义选中样式
        alwaysShow: true, // 始终有一个点处于选中状态
        showCrosshairs: false, // 选中时的轴线
        showTooltipMarker: true, // 选中时point高亮
        triggerOn: ['click'], // 只有点击才触发选中效果
        triggerOff: null, // 无非选中状态
        tooltipMarkerStyle: { // point样式
          radius: 4.5,
          fill: '#fff',
          stroke: 'l(90) 0:#FFDC66 1:#FFB636',
          lineWidth: 3
        },
        // 选中的点变化时的回调
        onChange: function onChange (ev) {
          // 将所有的point文本信息重置
          _this.changeElemsOpacityByClass('class-score-level-tag-container', 0);
          _this.changeElemsOpacityByClass('class-score-level-point-tag', 1);
          _this.changeElemsClass('class-score-level-selected-axis-x-label', 'class-score-level-un-selected-axis-x-label');
          let currentData = ev.items[0];
          // 成绩等级进度条展示
          let improveBarData = currentData.origin.improveBar;
          if (improveBarData && improveBarData.show && improveBarData.tag) {
            _this.improveBar.scoreLevelRunningTitle = improveBarData.tag.name;
            if (_this.imgList.hasOwnProperty(improveBarData.tag.code)) {
              _this.improveBar.scoreLevelRunningIcon = _this.imgList[improveBarData.tag.code];
            }
            _this.improveBar.isShowImproveBar = Boolean(_this.improveBar.scoreLevelRunningIcon);
          } else {
            _this.improveBar.isShowImproveBar = false;
          }
          if (_this.improveBar.isShowImproveBar && _this.improveBar.sectionData && _this.improveBar.sectionData.length > 0) {
            let progress = 0;
            for (let i = 0; i < _this.improveBar.sectionData.length; i++) {
              let item = _this.improveBar.sectionData[i];
              if (item.name === improveBarData.levelScale) {
                progress += improveBarData.offset * item.progress / 100;
                break;
              }
              progress += item.progress;
              // 异常情况
              if (progress >= 100) {
                progress = 0;
                break;
              }
            }
            _this.$refs.scoreLevelRunningContainer.style.left = progress + '%';
          }

          // 存储当前表选中的点信息
          if (_this.defaultSelectedPoints.has(_this.selectedTabName)) {
            _this.defaultSelectedPoints.delete(_this.selectedTabName);
          }
          _this.defaultSelectedPoints.set(_this.selectedTabName, currentData.origin);
          // 高亮选中的文本
          let dafaultTag = document.getElementById(currentData.origin.id + '2');
          dafaultTag.style.opacity = 0;
          let selectedTag = document.getElementById(currentData.origin.id + '1');
          selectedTag.style.opacity = 1;
          let selectedAxiosEl = document.getElementById(currentData.origin
            .id + '0');
          selectedAxiosEl.className = 'class-score-level-selected-axis-x-label';
          _this.selectedExamName = '*' + currentData.origin.name;
        }
      });
      // ---------------------坐标轴样式---------------------------------
      let xline_color = ctx.createLinearGradient(0, 0, canvas_width, 0);
      xline_color.addColorStop(0, '#ffffff');
      xline_color.addColorStop(0.1, '#EDEDED');
      xline_color.addColorStop(0.5, '#F1F1F1');
      xline_color.addColorStop(0.9, '#EDEDED');
      xline_color.addColorStop(1, '#ffffff');
      this.chart.axis('id', { // X轴样式
        label: null,
        line: null,
        labelOffset: 10,
        grid: {
          lineDash: null,
          stroke: '#F5F5F5',
          lineWidth: 1
        }
      });
      this.chart.axis('levelValue', { // Y轴
        label: (text, index, total) => {
          const cfg = {
            fill: '#A5A9AF',
            textBaseline: 'bottom',
            fontSize: 12,
            textAlign: 'left'
          };
          if (index === (total - 1)) {
            cfg.opacity = 0;
          } else {
            cfg.opacity = 1;
          }
          return cfg;
        },
        labelOffset: -6,
        position: 'left',
        range: [0, 1],
        grid: {
          lineDash: null,
          stroke: xline_color, // 'l(0) 0:#FFFFFF 0.1:#EDEDED 0.5:#F1F1F1 0.9:#EDEDED 1:#FFFFFF',
          lineWidth: 1
        }
      });
    },
    // 图表绘制
    drawChart: function (dataList) {
      // 由于chart.guide().clear()无法清除Guide.html绘制出来的元素，这里手动清理
      let guideEles = this.canvasContainerElement.getElementsByClassName('guideWapper');
      if (guideEles) {
        while (guideEles.length > 0) {
          guideEles[0].remove();
        }
      }
      var ctx = this.canvasElement.getContext('2d');
      let isFirst = true; // 如果是第一次加载，需要使用chart.render()绘制
      if (this.chart) {
        isFirst = false;
        this.chart.guide().clear();
        this.chart.hideTooltip();
        this.chart.clear();
      } else {
        isFirst = true;
        this.initChart();
      }
      if (!dataList || dataList.length == 0) {
        return;
      }
      let data_length = dataList.length;
      let that = this;
      this.chart.source(dataList, {
        id: {
          tickCount: data_length,
          range: [0.1, 0.2 * (data_length - 1) + 0.1]
        },
        levelValue: {
          type: 'linear',							// 刻度为枚举类型
          range: [0, 1],							// Y轴区间
          max: that.scoreLevelConvert.maxValue + this.scoreLevelConvert.mainItemValue,
          min: 0,
          tickCount: that.scoreLevelConvert.mainLevels.length + 2,
          formatter (levelValue) {
            let levelItem = that.scoreLevelConvert.mainLevels.find(function (item) {
              return item.value === levelValue;
            });
            if (levelItem) {
              return levelItem.name;
            }

            return '';
          }
        }
      });
      // 指定线条的渐变色
      var grd = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
      grd.addColorStop(0.1, '#0DC2B3');
      grd.addColorStop(0.5, '#2FD2E7');
      grd.addColorStop(0.9, '#3DEA95');
      // 画线，这里指定线的样式为平滑曲线
      this.chart.line().position('id*levelValue').color(grd).style({
        lineWidth: 3
      }).shape('smooth');
      // 画点
      this.chart.point().position('id*levelValue').size(3).style({
        fill: '#ffffff',
        stroke: '#2BCFE0',
        lineWidth: 2
      });
      // 绘制点的文本信息，每个点有3个文本信息：默认文本，选中高亮文本，X轴坐标文本
      for (var i = 0; i < data_length; i++) {
        let drawHtmlData = dataList[i];
        // 默认文本
        this.chart.guide().html({
          position: [drawHtmlData.id, drawHtmlData.levelValue],
          html: '<div class="class-score-level-point-tag" id="' + drawHtmlData.id + '2">' + drawHtmlData.level + '</div>',
          alignX: 'center',
          alignY: 'bottom',
          offsetY: -15
        });
        // 选中时高亮文本，默认透明度为0
        this.chart.guide().html({
          position: [drawHtmlData.id, drawHtmlData.levelValue],
          html: '<div class="class-score-level-tag-container" id="' + drawHtmlData.id + '1"><div class="class-score-level-popup"><span><em></em></span>' + drawHtmlData.level + '</div></div>',
          alignX: 'left',
          alignY: 'bottom',
          offsetY: -15
        });
        // X轴坐标文本
        this.chart.guide().html({
          position: [drawHtmlData.id, 0],
          html: '<div id="' + drawHtmlData.id + '0" class="class-score-level-un-selected-axis-x-label">' + drawHtmlData.dateDisp + '</div>',
          alignX: 'center',
          alignY: 'top',
          offsetY: 10
        });
      }
      for (let i = 0; i < 5; i++) {
      	this.chart.guide().line({
      		start: ['10%', (i * 20 + 10) + '%'],
      		end: ['11%', (i * 20 + 10) + '%'],
      		style: {
      			stroke: '#F5F5F5',
      			lineWidth: 1
      		}
      	});
      }
      // 绘制图表
      if (isFirst) {
        this.chart.render();
      } else {
        this.chart.repaint();
      }
      // 选中的点进行高亮显示，之前的记录中是否有选中的point，没有默认选中最后一个
      let default_selected_point = null;
      if (this.defaultSelectedPoints.has(this.selectedTabName)) {
        default_selected_point = this.chart.getPosition(this.defaultSelectedPoints.get(this.selectedTabName));
      } else {
        default_selected_point = this.chart.getPosition(dataList[data_length - 1]);
      }
      // 选中状态
      this.chart.showTooltip(default_selected_point);
    }
  }

}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/score-level-change/ScoreLevelChange.vue