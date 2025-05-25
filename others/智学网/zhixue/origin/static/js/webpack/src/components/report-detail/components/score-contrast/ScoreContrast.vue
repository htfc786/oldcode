<template src="./score-contrast.html"></template>
<style src="./score-contrast.less" lang="less"></style>
<script>
import APIService from '@/api/reportDetailWebServer.js';

export default {
  name: 'score-comparison',
  props: ['examId'],
  data () {
    return {
      moduleName: 'scoreComparison',
      moduleShow: false, // 该组件是否展示
      scoreData: '', // 接口获取数据
      showData: '', // 当前所选标签展示数据
      columnMeta: '', // 首列数据
      throttleFlag: false,
      scrollFlag: '', // 数据过多时滑动位置
      spaceTime: 300
    };
  },
  created () {
    this.getScoreContrastData();
  },
  mounted () {
//    this.$nextTick(() => {
//      this.tableScroll();
//    });
  },
  methods: {
    tableScroll () { // 若出现滑动，判断阴影线显示
      let that = this;
      let scrollLeft = this.$refs.tableContainer.scrollLeft;
      let scrollWidth = this.$refs.tableContainer.scrollWidth;
      let clientWidth = this.$refs.tableContainer.clientWidth;
      if (scrollLeft === 0 || scrollLeft + clientWidth === scrollWidth) {
        that.throttleFlag = false;
      }
      if (that.throttleFlag) {
        return;
      }
      if (scrollLeft === 0) {
        if (scrollLeft + clientWidth !== scrollWidth) {
          this.scrollFlag = 'mid';
        } else {
          this.scrollFlag = '';
        }
      } else if (scrollLeft + clientWidth === scrollWidth) {
        this.scrollFlag = 'right';
      } else {
        this.scrollFlag = 'mid';
      }
      that.throttleFlag = true;
      setTimeout(() => {
        that.throttleFlag = false;
      }, that.spaceTime);
    },
    /**
		 * 获取分数对比组件数据（全） --edit by jmning 2018/11/30
		 */
    getScoreContrastData () {
      let self = this;
      let params = {
        examId: self.examId
      };
      APIService.getScoreContrast(params).then(response => {
        if (response.errorCode === 0) {
          let result = response.result;
          if (result.dataList.length !== 0) { // 如果数据不为空，展示该组件
            self.moduleShow = true;
            self.scoreData = result;
            self.columnMeta = result.dataList[0].columnMeta;
            self.dataDeal(0);
          }
        } else {
          console.log('getScoreContrast errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    dataDeal (val) { // 数据处理，将null数据项替换为‘--’
      this.showData = this.scoreData.dataList[val];
      for (let i = 0, len = this.showData.columnDatas.length; i < len; i++) {
        let tempSubject = this.showData.columnDatas[i];
        for (let item in tempSubject) {
          if (!tempSubject[item] && tempSubject[item] !== 0) {
            tempSubject[item] = '--';
          }
        }
      }
      setTimeout(() => { // 切换标签重新判断滑动阴影显示
        this.tableScroll();
      }, 0);
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/score-contrast/ScoreContrast.vue