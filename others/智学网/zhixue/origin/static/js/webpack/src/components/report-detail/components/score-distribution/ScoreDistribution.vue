<template src="./score-distribution.html"></template>
<style src="./score-distribution.less" lang="less"></style>
<style scoped></style>

<script>
import F2 from '@antv/f2';
import switchTab from '../../../switch-tab/SwitchTab.vue';
import APIService from '@/api/reportDetailWebServer.js';

export default {
  name: 'score-distribution',
  props: {
    examId: {
      type: String
    },
    paperId: {
      type: String
    },
    subjectCode: {
      type: String
    }
  },
  data () {
    return {
      isShow: false, // 模块是否展示标识
      tabInfo: [], // 标签数组
      scoreDistributions: [], // 分数分布数据模型数组
      disPlayScoreistribution: {}// 显示的分数分布视图模型
    }
  },
  components: {
    'switch-tab': switchTab
  },
  created () {
    this.requestData()
  },
  methods: {
    // 接收自组建数据
    onTabSwitch (msg) {
      this.disPlayScoreistribution = this.scoreDistributions[msg];
      this.drawChart();
    },
    /**
     * 获取分数分布组件数据（单、全） --edit by jmning 2018/11/30
     */
    requestData () {
      let that = this;
      let params = {
        examId: that.examId
      };
      if (that.subjectCode === '00') {
        APIService.getAllScoreDistribution(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getAllScoreDistribution errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      } else {
        params.paperId = that.paperId;
        APIService.getSingleScoreDistribution(params).then(response => {
          if (response.errorCode === 0) {
            that.initData(response.result);
          } else {
            console.log('getSingleScoreDistribution errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
          }
        });
      }
    },
    /**
     * 数据初始化 --add by jmning 2018/11/30
     * @params result 接口返回数据result
     */
    initData (result) {
      let that = this;
      if (result && result !== 'undefined' && result !== 'null') {
        that.dealData(result, true);
        that.$nextTick(() => {
          // dom元素更新后执行绘制图表操作，否则图表的坐标点的计算会有偏差
          that.drawChart();
        })
      } else {
        that.isShow = false;
      }
    },
    // 处理网络请求数据
    dealData (result, isReqRes) {
      this.tabInfo = []
      this.scoreDistributions = []
      if (typeof (result) === 'string') {
        result = JSON.parse(result)
      }
      if (result.list && result.list.length > 0) {
        this.isShow = true
        let list_length = result.list.length
        for (let i = 0; i < list_length; i++) {
          let ScoreDistribution = {}
          let tmp_data = result.list[i]
          if (!tmp_data || !tmp_data.tag) {
            continue
          }
          let tagName = tmp_data.tag.name
          if (tagName && tmp_data.dataList && tmp_data.dataList.length > 0) {
            ScoreDistribution.chartName = result.chartName// 分数分布图标名称
            ScoreDistribution.myTips = tmp_data.myTips// 分数分布我的位置提示文本
            ScoreDistribution.targetTips = tmp_data.targetTips// 分数分布目标位置文本
            ScoreDistribution.title = tmp_data.title// 分数分布标题
            ScoreDistribution.subtitle = tmp_data.subtitle// 分数分布副标题
            ScoreDistribution.yTips = []// 分数分布Y轴显示文本
            ScoreDistribution.centerTips = []// 金字塔内中央文本显示
            ScoreDistribution.target = -1// 目标位置
            ScoreDistribution.beHere = -1// 我的位置
            // 班级年级tab 切换按钮文本数组
            this.tabInfo.push(tagName)
            // 循环分数分布数据列表 找到我在这里和目标在数组中的位置
            for (let j = 0; j < tmp_data.dataList.length; j++) {
              let tmp_distributon_data = tmp_data.dataList[j]
              // 我在分数分布中的位置
              if (tmp_distributon_data.beHere) {
                ScoreDistribution.beHere = j
              }
              // 我的赶超的目标位置
              if (tmp_distributon_data.beTarget) {
                ScoreDistribution.target = j
              }
              // 金字塔图左边Y轴坐标展示内容tips
              ScoreDistribution.yTips.push(tmp_distributon_data.count)
              // 金字塔图中间的分数区间展示内容tips列表
              ScoreDistribution.centerTips.push(tmp_distributon_data.rangeDisp)
            }
          }
          this.scoreDistributions.push(ScoreDistribution)
        }
        this.disPlayScoreistribution = this.scoreDistributions[0]
      } else {
        this.isShow = false
      }
    },
    drawChart () {
      /* 数据格式：sold为Y轴金字塔层级数据，按照由小到大排列，xline为X轴数据，这里固定为X轴中心点 */
      let data = []
      for (let i = 0; i < this.disPlayScoreistribution.centerTips.length; i++) {
        let drawData = {}
        drawData.sold = 20 * i + 20
        drawData.xline = 1
        data.push(drawData)
      }
      let configs = []
      let Shape = F2.Shape
      let preY = 0// 上一个data数据的y轴坐标
      let vue = this
      Shape.registerShape('interval', 'scoreDistribution', {
        getPoints: function (cfg) {
          const x = cfg.x
          const y = cfg.y
          const y0 = cfg.y0
          const width = 0.7// 金子塔底部的宽度
          let preOffset = preY * width / 2 // 下面梯形的左上角X坐标与左下角X坐标的差值
          if (!preOffset) {
            preOffset = 0// 第一个梯形的差值为0
          }
          const curOffset = y * width / 2// 当前梯形的左上角X坐标与左下角X坐标的差值
          let pre_y = preY// 梯形上边线的Y坐标
          if (!pre_y) {
            pre_y = 0
          }
          preY = y// 存储上边线的Y坐标
          return [
            {x: 0.5 - width / 2 + preOffset, y: pre_y}, // 左下角
            {x: 0.5 - width / 2 + curOffset, y: y}, // 左上角
            {x: 0.5 + width / 2 - curOffset, y: y}, // 右上角
            {x: 0.5 + width / 2 - preOffset, y: pre_y}// 右下角
          ]// 每个梯形的坐标点
        },
        draw: function (cfg, group) {
          const points = this.parsePoints(cfg.points) // 将0-1空间的坐标转换为画布坐标
          cfg.points = points
          configs.push(cfg)// 存储画布坐标点
          const polygon = group.addShape('polygon', {
            attrs: {
              points: [
                {x: points[0].x, y: points[0].y},
                {x: points[1].x, y: points[1].y},
                {x: points[2].x, y: points[2].y},
                {x: points[3].x, y: points[3].y}
              ],
              fill: cfg.color, // 填充颜色
              stroke: '#fff', // 边框线颜色
              lineWidth: 1// 边框线宽度
            }
          })
          return polygon // 将自定义Shape返回
        }
      })

      const chart = new F2.Chart({
        el: this.$refs.scoreDistribution,
        width: window.innerWidth * 0.4,
        height: window.innerWidth * 0.24,
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data)
      let canvas1 = this.$refs.scoreDistribution
      // 指定线条的渐变色
      let ctx = canvas1.getContext('2d')
      let grd = ctx.createLinearGradient(0, 0, window.innerWidth, 0)
      grd.addColorStop(1, '#FFE7AB')
      grd.addColorStop(0, '#FDCB73')
      chart.interval().position('xline*sold').color('sold', function (sold) {
        let target = vue.disPlayScoreistribution.target * 20 + 20
        let here = vue.disPlayScoreistribution.beHere * 20 + 20
        if (sold === target) {
          return grd
        } else if (sold === here) {
          return '#06C1AE'
        }
        return '#E6F8F6'
      }).shape('scoreDistribution')
      chart.axis(false)
      chart.render()

      const canvas = chart.get('canvas')
      const container = canvas.addGroup() // canvas 上添加一个分组
      const itemGroup = container.addGroup() // container 上添加一个分组
      let targetConfig
      let myScoreConfig
      const shape_margin_size = 10
      const circle_r = 5// 绘制圆角的半径
      let targetLineStartPoint = 0// 目标分数的绘制坐标起点X
      let myScorePosPoint = 0// 我的位置坐标起点X
      // 绘制金字塔内中间显示的文本
      for (let i = 0; i < configs.length; i++) {
        let fillColor = '#57595D'
        let scoreRangeText = new F2.G.Shape.Text({
          attrs: {
            x: (configs[i].points[0].x + configs[i].points[3].x) / 2,
            y: configs[i].points[0].y / 2 + configs[i].points[1].y / 2,
            fontFamily: 'Arial', // 字体
            fontSize: 12, // 字体大小
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            textAlign: 'center',
            textBaseline: 'middle',
            text: vue.disPlayScoreistribution.centerTips[i],
            fill: fillColor, // html5 canvas 绘图属性
            lineWidth: 1 // html5 canvas 绘图属性
          }
        })
        if (i === vue.disPlayScoreistribution.target) {
          targetConfig = configs[i]
          targetLineStartPoint = scoreRangeText.getBBox().maxX
        }
        if (i === vue.disPlayScoreistribution.beHere) {
          myScoreConfig = configs[i]
          myScorePosPoint = scoreRangeText.getBBox().maxX
        }
        itemGroup.add(scoreRangeText)
      }
      // 我的位置所在区域的漏斗图，金字塔内中间显示的文本颜色修改
      if (myScoreConfig) {
        if (myScorePosPoint + shape_margin_size < myScoreConfig.points[3].x / 2 + myScoreConfig.points[2].x / 2) {
          let fillColor = '#fff'
          let scoreRangeText = new F2.G.Shape.Text({
            attrs: {
              x: (configs[vue.disPlayScoreistribution.beHere].points[0].x + configs[vue.disPlayScoreistribution.beHere].points[3].x) / 2,
              y: configs[vue.disPlayScoreistribution.beHere].points[0].y / 2 + configs[vue.disPlayScoreistribution.beHere].points[1].y / 2,
              fontFamily: 'Arial', // 字体
              fontSize: 12, // 字体大小
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontVariant: 'normal',
              textAlign: 'center',
              textBaseline: 'middle',
              text: vue.disPlayScoreistribution.centerTips[vue.disPlayScoreistribution.beHere],
              fill: fillColor, // html5 canvas 绘图属性
              lineWidth: 1 // html5 canvas 绘图属性
            }
          })
          itemGroup.add(scoreRangeText)
        }
      }

      // 绘制y轴方向上给分数段分布的人数
      for (let i = 0; i < configs.length; i++) {
        itemGroup.addShape('text', {
          attrs: {
            x: 60,
            y: configs[i].points[0].y / 2 + configs[i].points[1].y / 2,
            fontFamily: 'Arial', // 字体
            fontSize: 12, // 字体大小
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            textAlign: 'end',
            textBaseline: 'middle',
            text: vue.disPlayScoreistribution.yTips[i] + '人',
            fill: '#A5A9AF', // html5 canvas 绘图属性
            lineWidth: 1 // html5 canvas 绘图属性
          }
        })
      }
      if (targetConfig) {
        // 目标分数结尾坐标+偏移量 小于 漏斗图分段的X轴坐标
        let targetTipsStartPoint = targetConfig.points[3].x / 2 + targetConfig.points[2].x / 2 + shape_margin_size
        if (targetLineStartPoint + shape_margin_size < targetConfig.points[3].x / 2 + targetConfig.points[2].x / 2) {
          // 目标绘制 ，绘制圆点
          itemGroup.addShape('circle', {
            attrs: {
              x: targetConfig.points[3].x / 2 + targetConfig.points[2].x / 2,
              y: targetConfig.points[3].y / 2 + targetConfig.points[2].y / 2,
              r: circle_r,
              fill: '#FFFFFF',
              stroke: '#FFB636',
              lineWidth: 4
            }
          })
          // 绘制指向目标文本的线
          itemGroup.addShape('line', {
            attrs: {
              x1: targetConfig.points[3].x / 2 + targetConfig.points[2].x / 2 - circle_r - 2,
              y1: targetConfig.points[3].y / 2 + targetConfig.points[2].y / 2,
              x2: targetLineStartPoint + shape_margin_size,
              y2: targetConfig.points[3].y / 2 + targetConfig.points[2].y / 2,
              lineWidth: 1, // html5 canvas 绘图属性
              strokeStyle: '#57595D' // html5 canvas 绘图属性
            }
          })
        } else {
          targetTipsStartPoint = targetLineStartPoint + shape_margin_size
        }
        // 绘制目标文本展示
        let text = new F2.G.Shape.Text({
          attrs: {
            x: targetTipsStartPoint, // 显示位置 x 坐标
            y: targetConfig.points[3].y / 2 + targetConfig.points[2].y / 2, // 显示位置 x 坐标
            fontFamily: 'PingFangSC-Regular', // 字体
            fontSize: 12, // 字体大小
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            textAlign: 'start',
            textBaseline: 'middle',
            text: vue.disPlayScoreistribution.targetTips,
            fill: '#262729', // html5 canvas 绘图属性
            lineWidth: 1 // html5 canvas 绘图属性
          }
        })
        itemGroup.add(text)
      }

      if (myScoreConfig) {
        // 绘制我的位置
        let hereTipsStartPoint = myScoreConfig.points[3].x / 2 + myScoreConfig.points[2].x / 2 + shape_margin_size
        if (myScorePosPoint + shape_margin_size < myScoreConfig.points[3].x / 2 + myScoreConfig.points[2].x / 2) {
          itemGroup.addShape('circle', {
            attrs: {
              x: myScoreConfig.points[3].x / 2 + myScoreConfig.points[2].x / 2,
              y: myScoreConfig.points[3].y / 2 + myScoreConfig.points[2].y / 2,
              r: circle_r,
              fill: '#FFFFFF',
              stroke: '#23CCD4',
              lineWidth: 4
            }
          })
          // 绘制指向我的位置线
          itemGroup.addShape('line', {
            attrs: {
              x1: myScoreConfig.points[3].x / 2 + myScoreConfig.points[2].x / 2 - circle_r - 2,
              y1: myScoreConfig.points[3].y / 2 + myScoreConfig.points[2].y / 2,
              x2: myScorePosPoint + shape_margin_size,
              y2: myScoreConfig.points[3].y / 2 + myScoreConfig.points[2].y / 2,
              lineWidth: 1, // html5 canvas 绘图属性
              strokeStyle: '#FFFFFF' // html5 canvas 绘图属性
            }
          })
        } else {
          hereTipsStartPoint = myScorePosPoint + shape_margin_size
        }
        // 绘制目标文本展示
        let text = new F2.G.Shape.Text({
          attrs: {
            x: hereTipsStartPoint, // 显示位置 x 坐标
            y: myScoreConfig.points[3].y / 2 + myScoreConfig.points[2].y / 2, // 显示位置 x 坐标
            fontFamily: 'PingFangSC-Regular', // 字体
            fontSize: 12, // 字体大小
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            textAlign: 'start',
            textBaseline: 'middle',
            text: vue.disPlayScoreistribution.myTips,
            fill: '#05C1AE', // html5 canvas 绘图属性
            lineWidth: 1 // html5 canvas 绘图属性
          }
        })
        itemGroup.add(text)
      }
      canvas.draw() // 绘制
    }

  },
  mounted () {
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/score-distribution/ScoreDistribution.vue