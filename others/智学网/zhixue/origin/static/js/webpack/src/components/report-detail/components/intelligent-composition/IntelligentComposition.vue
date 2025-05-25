<template src="./intelligent-composition.html"></template>
<style src="./intelligent-composition.less" lang="less"></style>
<script>
import APIService from '@/api/reportDetailWebServer.js';
import F2 from '@antv/f2';
import bannerImage from '../../img/composition-banner.png'

const grayLineColor = '#DEE1E5';
const blueLineColor = '#2675D8';
const yellowLineColor = '#FCA205';

export default {
  name: 'intelligent-composition',
  props: {
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
      myName: '我的',
      topStudent: '学霸',
      bannerImage: bannerImage, // <# {path: "src/views/report/img/composition-banner1.png", alias: "composition-banner.png"} #>
      radaData: [],
      resultData: []
    }
  },
  created () {
    this.requestData();
  },
  computed: {

  },
  methods: {
    /**
     * 获取智批改信息（单） --edit by jmning 2018/11/30
     */
    requestData () {
      let that = this;
      // debugger;
      const module = 'intelligent-composition';
      let params = {
        paperId: that.paperId
      };
      APIService.getIntelligentWriteAbility(params).then(response => {
        if (response.errorCode === 0) {
          if (response.result) {
            that.configDatas(response.result);
          } else {
          // 成功无数据
            that.showModule = false;
          }
        } else {
          console.log('getIntelligentWriteAbility errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    // webServer.getIntelligentWriteAbility(_this.paperId, {
    //   onSuccess (result) {
    //     if (result) {
    //       _this.configDatas(result);
    //     } else {
    //       // 成功无数据
    //       _this.showModule = false;
    //     }
    //   },
    //   onFailed (argument, errorInfo) {
    //     console.log('onError' + argument + errorInfo);
    //     console.log(process.env.CONTEXTPATH);
    //     // TODO: 异常处理
    //   }
    // });
    },
    configDatas (result) {
      if (typeof result === 'string') {
        result = JSON.parse(result);
      }
      var json = {
        'wordFea': '词汇词组',
        'sentFea': '语句语法',
        'paperFea': '篇章结构',
        'contentFea': '相关内容'
      };
      let _this = this;
      _this.resultData = [];
      _this.radaData = [];
      if (result.writeAbilityResult) {
        for (var key in json) {
          let value = json[key];
          let radaItem = {};
          radaItem.item = value;
          radaItem.user = _this.myName;
          radaItem.score = result.writeAbilityResult.selfScore[key];
          _this.radaData.push(radaItem);

          let topradaItem = {};
          topradaItem.item = value;
          topradaItem.user = _this.topStudent;
          topradaItem.score = result.writeAbilityResult.topScore[key];
          _this.radaData.push(topradaItem);

          let introduceInfo = {};
          introduceInfo.title = value;
          introduceInfo.subTitle = result.writeAbilityResult.writeAnaReview[key];
          _this.resultData.push(introduceInfo);
        }
        if (_this.radaData.length > 0) {
          _this.showModule = true;
          _this.$nextTick(function () {
            _this.drawRada(_this.radaData);
          });
        }
      }
    },
    showMoreDetail () {
      let url = process.env.WEB_APP_BASE + '/automarkingstudent/app/report/knowingCompositionReport?toolbarVisibility=0&markingPaperId=' + this.paperId;
    },

    onClickBanner () {
      let url = process.env.WEB_APP_BASE + '/automarkingstudent/app/report/compositionList?toolbarVisibility=0';
    },

    // 画雷达图
    drawRada (data) {
      let _this = this;
      let width = this.$refs.compositionRadarDiv.offsetWidth;

      if (width <= 0 || width === undefined) {
        // 宽度为0,根据屏幕宽度- offset
        width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 40;
      }
      const chart = new F2.Chart({
        el: _this.$refs.compositionRadar,
        width: width,
        height: width,
        pixelRatio: window.devicePixelRatio,
        padding: 80
      });

      chart.coord('polar');
      chart.source(data, {
        score: {
          min: 0,
          max: 100,
          nice: false,
          tickCount: 7
        }
      });
      chart.tooltip(false);
      //   chart.legend(false);//是否显示自带的 我的 学霸

      // 自定制legend显示
      chart.legend({
        marker (x, y, r, ctx) {
          r = 6;
          ctx.lineWidth = 5;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.moveTo(x - r - 4, y);
          ctx.lineTo(x + r + 4, y);
          ctx.stroke();
          ctx.arc(x, y, r, 0, Math.PI * 2, false);
          ctx.arc(x - 4 - r, y, 2.5, 0, Math.PI * 2, false);
          ctx.arc(x + 4 + r, y, 2.5, 0, Math.PI * 2, false);
          ctx.fill();
        },
        align: 'center',
        position: 'bottom',
        itemWidth: 100,
        wordSpace: 20, // mark 和文本间距
        clickable: false, // 取消点击mark，
        titleStyle: {
          textAlign: 'center', // 文本对齐方向，可取值为： start middle end
          fill: '#A5A9AF', // 文本的颜色
          fontSize: 12, // 文本大小
          // fontWeight: 'bold', // 文本粗细
          textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
        }

      });

      chart.axis('item', { // item轴的样式
        label: (text, index, total) => {
          const cfg = {
            fill: '#57595D', // 文本的颜色
            fontSize: '14' // 文本大小
          };
          if (index === 0) {
            cfg.textBaseline = 'bottom' // 文本基准线，可取 top middle bottom，默认为middle
          } else if (index === 2) {
            cfg.textBaseline = 'top';
          } else {
            cfg.textBaseline = 'middle';
          }
          cfg.text = text; // cfg.text 支持文本格式化处理
          return cfg;
        },
        grid (text, index) {
          return {
            stroke: grayLineColor,
            lineDash: null,
            lineWidth: 0
          };
        }
      });

      chart.axis('score', {
        label: function label (text, index, total) {
          return null; // 不显示分数
        },
        grid: function grid (text) {
          return {
            stroke: grayLineColor,
            lineDash: null,
            lineWidth: 0.7
          };
        },
        line: {
          lineWidth: 0, // 设置线的宽度 0 不显示 x y轴线
          stroke: grayLineColor,
          lineDash: null // 设置虚线样式
        }
      });

      chart.line().position('item*score').color('user', (val) => {
        if (val == _this.myName) {
          return yellowLineColor;
        } else {
          return blueLineColor;
        }
      }).style('user', {
        lineDash (val) {
          return null;
        },
        lineWidth (val) {
          return 2;
        }
      });

      chart.point().position('item*score').color('user', (val) => {
        if (val == _this.myName) {
          return yellowLineColor;
        } else {
          return blueLineColor;
        }
      }).style({
        stroke: '#fff',
        lineWidth: 1
      }).style('user', {
        stroke: '#fff',
        opacity (val) {
          return 1;
        }
      }).shape('user', function (val) {
        return 'circle';
      }).size(4);
      chart.render();
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/intelligent-composition/IntelligentComposition.vue