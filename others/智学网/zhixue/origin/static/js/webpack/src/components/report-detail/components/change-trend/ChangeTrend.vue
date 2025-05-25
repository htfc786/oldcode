/*
* @Author: jjwu9
* @Date:   2018-08-13 17:08:54
* @Last Modified by:   jjwu9
* @Last Modified time: 2018-09-18 15:07:23
*/
<template src="./change-trend.html"></template>
<style src="./change-trend.less" lang="less"></style>
<script>
import F2 from '@antv/f2';
import APIService from '@/api/reportDetailWebServer.js';
// import httpData from './data.js';
import switchTab from '../../../switch-tab/SwitchTab';

export default {
  name: '',
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
      chartListData: [], // 图表数据集合
      chart: null, // F2.Chart对象
      chartName: '', // 图表标题
      selectedTabName: '', // 选中的tab的名称
      selectedExamName: '	', // 选中图表上的点对应的考试名称
      totalCount: 0, // 总人数
      changeTrendTitle: '', // 头部标题
      changeTrendSubTitle: '', // 头部副标题
      tabInfo: [], // tab列表
      defaultSelectedPoints: new Map(), // 存储每张图表最后一次所选中的点
      rootElement: null,
      canvasElement: null,
      canvasContainerElement: null
    }
  },
  mounted () {
    this.rootElement = this.$refs.changeTrendRoot
    this.canvasElement = this.$refs.changeTrendChart
    this.canvasContainerElement = this.$refs.changeTrendChartContainer
    this.requestData()
  },

  methods: {
    /**
     * 获取成绩变化组件（单、全）数据 --edit by jmning 2018/11/30
     */
    requestData: function () {
      let that = this;
      let params = {
        examId: that.examId,
        pageIndex: 1,
        pageSize: 5
      };
      if (that.subjectCode === '00') {
        APIService.getAllChangeTrend(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getAllChangeTrend errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      } else {
        params.paperId = that.paperId;
        APIService.getSingleChangeTrend(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getSingleChangeTrend errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      }
    },
    // 检查数组中的对象是否含有必要参数，将缺少必要属性的对象从数组中移除
    filterUndefinedChartData: function (list, x, y) {
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
    // 数据重置
    resetData: function () {
      this.chartListData = [],
      this.chartName = ''
      this.selectedTabName = ''
      this.selectedExamName = ''
      this.totalCount = 0
      this.changeTrendTitle = ''
      this.changeTrendSubTitle = ''
      this.tabInfo = []
      this.defaultSelectedPoints = new Map()
    },
    // 初始化数据
    initData: function (result) {
      this.resetData()
      if (!result) {
        return
      }
      if (typeof (result) === 'string') {
        result = JSON.parse(result)
      }
      // 检查数组元素，提取tag信息
      if (result.list && result.list.length > 0) {
        this.tabInfo = []
        var list_length = result.list.length
        for (var i = 0; i < list_length; i++) {
          let tmp_data = result.list[i]
          if (!tmp_data.tag) {
            continue
          }
          // 数据筛选，去除缺少x、y坐标的数据
          let filterData = this.filterUndefinedChartData(tmp_data.dataList, 'id', 'ratio')
          tmp_data.dataList = filterData
          var tagName = tmp_data.tag.name
          if (tagName && tmp_data.dataList &&
            tmp_data.dataList.length > 0) {
            this.tabInfo.push(tagName)
            this.chartListData.push(tmp_data)
          }
        }
      }
      this.chartName = result.chartName
      if (this.tabInfo && this.tabInfo.length > 0) {
        for (let i = 0; i < this.chartListData.length; i++) {
          this.transformRatioToChart(this.chartListData[i].dataList)
        }
        this.onSelectedTabChange(0)
      }
    },
    // tab切换监听事件
    onTabSwitch: function (argument) {
      this.onSelectedTabChange(argument)
    },
    // 切换内容
    onSelectedTabChange: function (index) {
      let tmp_data = this.chartListData[index]
      this.changeTrendTitle = tmp_data.title
      if (tmp_data.subtitle) {
        this.changeTrendSubTitle = tmp_data.subtitle
      }
      let table_data = tmp_data.dataList
      this.selectedTabName = tmp_data.tag.name
      this.selectedExamName = ''
      this.totalCount = tmp_data.totalNum
      let _this = this
      // 启动定时器监听dom是否已经渲染完成
      new Promise((resolve, reject) => {
        if (_this.canvasContainerElement.offsetWidth) {
          resolve()
        } else {
          let interval = window.setInterval(function () {
            if (_this.canvasContainerElement.offsetWidth) {
              window.clearInterval(interval)
              resolve()
            }
          }, 200)
        }
      }).then(result => {
        _this.drawChart(table_data)
      })
    },
    // 获取最高
    getHighestRatio: function (dataList) {
      if (dataList && dataList.length > 0) {
        let data_length = dataList.length
        let highest = dataList[0]
        for (var i = 0; i < data_length; i++) {
          if (dataList[i].ratio > highest.ratio) {
            highest = dataList[i]
          }
        }
        return highest
      }
      return null
    },
    // 将指定的class替换成新的class
    changeElemsClass: function (originClass, dstClass) {
      let selectedEls = this.rootElement.getElementsByClassName(originClass)
      for (var i = 0; i < selectedEls.length; i++) {
        selectedEls[i].className = dstClass
      }
    },
    // 改变指定的class的透明度
    changeElemsOpacityByClass: function (originClass, opacity) {
      let selectedTags = this.rootElement.getElementsByClassName(originClass)
      if (selectedTags) {
        let selectedTagLength = selectedTags.length
        for (let i = 0; i < selectedTagLength; i++) {
          selectedTags[i].style.opacity = opacity
        }
      }
    },
    // 数据转换，将Y轴数据进行倒置处理，如：‘前80%’ 对应的Y轴坐标点为20
    transformRatioToChart: function (list) {
      let tmp_list = []
      for (let i = 0; i < list.length; i++) {
        list[i].ratio = 100 - list[i].ratio
        tmp_list.push(list[i])
      }
      return tmp_list
    },
    // 初始化图表
    initChart: function () {
      var ctx = this.canvasElement.getContext('2d')
      let _this = this
      if (this.canvasContainerElement.offsetWidth > 0) {
        window.report_body_canvas_real_width = this.canvasContainerElement.offsetWidth
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
      })
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
          _this.changeElemsOpacityByClass('class-changetrend-tag-container', 0)
          _this.changeElemsOpacityByClass('class-changetrend-point-tag', 1)
          _this.changeElemsClass('class-changetrend-selected-axis-x-label', 'class-changetrend-un-selected-axis-x-label')
          let currentData = ev.items[0]
          // 存储当前表选中的点信息
          if (_this.defaultSelectedPoints.has(_this.selectedTabName)) {
            _this.defaultSelectedPoints.delete(_this.selectedTabName)
          }
          _this.defaultSelectedPoints.set(_this.selectedTabName, currentData.origin)
          // 高亮选中的文本
          let dafaultTag = document.getElementById(currentData.origin.id + '2')
          dafaultTag.style.opacity = 0
          let selectedTag = document.getElementById(currentData.origin.id + '1')
          selectedTag.style.opacity = 1
          let selectedAxiosEl = document.getElementById(currentData.origin
            .id + '0')
          selectedAxiosEl.className = 'class-changetrend-selected-axis-x-label'
          _this.selectedExamName = '*' + currentData.origin.name
        }
      })
      // ---------------------坐标轴样式---------------------------------
      let xline_color = ctx.createLinearGradient(0, 0, canvas_width, 0)
      xline_color.addColorStop(0, '#ffffff')
      xline_color.addColorStop(0.1, '#EDEDED')
      xline_color.addColorStop(0.5, '#F1F1F1')
      xline_color.addColorStop(0.9, '#EDEDED')
      xline_color.addColorStop(1, '#ffffff')
      this.chart.axis('id', { // X轴样式
        label: null,
        line: null,
        labelOffset: 10,
        grid: {
          lineDash: null,
          stroke: '#F5F5F5',
          lineWidth: 1
        }
      })
      this.chart.axis('ratio', { // Y轴
        label: null,
        grid: {
          lineDash: null,
          stroke: xline_color, // 'l(0) 0:#FFFFFF 0.1:#EDEDED 0.5:#F1F1F1 0.9:#EDEDED 1:#FFFFFF',
          lineWidth: 1
        }
      })
    },
    // 图表绘制
    drawChart: function (dataList) {
      // 由于chart.guide().clear()无法清除Guide.html绘制出来的元素，这里手动清理
      let guideEles = this.canvasContainerElement.getElementsByClassName('guideWapper')
      if (guideEles) {
        while (guideEles.length > 0) {
          guideEles[0].remove()
        }
      }
      var ctx = this.canvasElement.getContext('2d')
      let isFirst = true // 如果是第一次加载，需要使用chart.render()绘制
      if (this.chart) {
        isFirst = false
        this.chart.guide().clear()
        this.chart.hideTooltip()
        this.chart.clear()
      } else {
        isFirst = true
        this.initChart()
      }
      if (!dataList || dataList.length == 0) {
        return
      }
      let data_length = dataList.length
      this.chart.source(dataList, {
        id: {
          tickCount: data_length,
          range: [0.1, 0.2 * (data_length - 1) + 0.1]
        },
        ratio: {
          tickCount: 7,
          max: 120,
          min: 0
        }
      })
      // 指定线条的渐变色
      var grd = ctx.createLinearGradient(0, 0, window.innerWidth, 0)
      grd.addColorStop(0.1, '#0DC2B3')
      grd.addColorStop(0.5, '#2FD2E7')
      grd.addColorStop(0.9, '#3DEA95')
      // 画线，这里指定线的样式为平滑曲线
      this.chart.line().position('id*ratio').color(grd).style({
        lineWidth: 3
      }).shape('smooth')
      // 画点
      this.chart.point().position('id*ratio').size(3).style({
        fill: '#ffffff',
        stroke: '#2BCFE0',
        lineWidth: 2
      })
      // 绘制点的文本信息，每个点有3个文本信息：默认文本，选中高亮文本，X轴坐标文本
      for (var i = 0; i < data_length; i++) {
        let drawHtmlData = dataList[i]
        let realRatio = 100 - drawHtmlData.ratio
        if (realRatio == 0) {
          realRatio = 1
        }
        // 默认文本
        this.chart.guide().html({
          position: [drawHtmlData.id, drawHtmlData.ratio],
          html: '<div class="class-changetrend-point-tag" id="' + drawHtmlData.id + '2">前' + Math.round(realRatio) + '%</div>',
          alignX: 'center',
          alignY: 'bottom',
          offsetY: -15
        })
        // 选中时高亮文本，默认透明度为0
        this.chart.guide().html({
          position: [drawHtmlData.id, drawHtmlData.ratio],
          html: '<div class="class-changetrend-tag-container" id="' + drawHtmlData.id + '1"><div class="class-changetrend-popup"><span><em></em></span>前' + Math.round(realRatio) + '%</div></div>',
          alignX: 'left',
          alignY: 'bottom',
          offsetY: -15
        })
        // X轴坐标文本
        this.chart.guide().html({
          position: [drawHtmlData.id, 0],
          html: '<div id="' + drawHtmlData.id + '0" class="class-changetrend-un-selected-axis-x-label">' + drawHtmlData.dateDisp + '</div>',
          alignX: 'center',
          alignY: 'top',
          offsetY: 10
        })
      }
      // ----------------------我的平均水平-----------------------------
      let averageRatio = -1
      let totalRatio = 0
      for (var i = 0; i < data_length; i++) {
        totalRatio += dataList[i].ratio
      }
      if (data_length > 1) {
        averageRatio = totalRatio / data_length
      }
      if (averageRatio >= 0 && averageRatio <= 100) {
        averageRatio = 100 - averageRatio * 100 / 120
        this.chart.guide().line({
          top: false,
          start: ['0%', averageRatio + '%'],
          end: ['100%', averageRatio + '%'],
          style: {
            stroke: '#06C1AE',
            lineWidth: 2,
            opacity: 0.4,
            lineDash: [6, 4]
          }
        })
        this.chart.guide().html({
          top: false,
          position: ['0%', averageRatio + '%'],
          html: '<div><span class="class-changetrend-my-average-ratio">我的平均水平</span></div>',
          alignX: 'left',
          alignY: 'top',
          offsetY: 2
        })
      }
      // 绘制图表
      if (isFirst) {
        this.chart.render()
      } else {
        this.chart.repaint()
      }
      // 选中的点进行高亮显示，之前的记录中是否有选中的point，没有默认选中最后一个
      let default_selected_point = null
      if (this.defaultSelectedPoints.has(this.selectedTabName)) {
        default_selected_point = this.chart.getPosition(this.defaultSelectedPoints.get(this.selectedTabName))
      } else {
        default_selected_point = this.chart.getPosition(dataList[data_length - 1])
      }
      // 选中状态
      this.chart.showTooltip(default_selected_point)
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/change-trend/ChangeTrend.vue