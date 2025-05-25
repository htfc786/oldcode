<template src="./scoring-ability.html"></template>
<style src="./scoring-ability.less" lang="less"></style>
<script>
import F2 from '@antv/f2'
import switchTab from '../../../switch-tab/SwitchTab.vue';
import APIService from '@/api/reportDetailWebServer.js';
// import mockData from '../../../../mock/scoreAability.json';
export default {
  name: 'score-aability',
  props: {
    paperId: {
      type: String
    },
    subjectCode: {
      type: String
    }
  },
  data () {
    return {
      // 控制显示个数
      showScoreAabilityNum: 10,
      halfScoring: true,
      isShow: false,
      tabInfo: [],
      scoreAability: {
        columnNames: {},
        dataList: []
      }
    }
  },
  created () {
    this.requestData()
  },
  methods: {
    // 切换显示
    checkShowMark () {
      if (this.showScoreAabilityNum === 10) {
        this.showScoreAabilityNum = 1000
      } else {
        this.showScoreAabilityNum = 10
      }
    },
    /**
     * 获取考点及得分能力数据（单） --edit by jmning 2018/11/30
     */
    requestData () {
      let that = this;
      let params = {
        paperId: that.paperId
      };
      APIService.getSingleExamPointsAndScoringAbility(params).then(response => {
        if (response.errorCode === 0) {
          if (response.result && response.result !== 'undefined' && response.result !== 'null') {
            that.dealData(response.result, true);
          } else {
            that.isShow = false;
          }
        } else {
          console.log('getSingleExamPointsAndScoringAbility errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    // 处理接口返回数据
    dealData (result, isReqRes) {
      if (result.dataList && result.dataList.length > 0) {
        this.isShow = true
        this.handleData(result)

        this.scoreAability = result
      } else {
        this.isShow = false
      }
    },

    handleData (result) {
      for (let i = 0; i < result.dataList.length; i++) {
        if (result.dataList[i].color.code === '3') {
          result.dataList[i].color.name = '#2675D8'
        } else if (result.dataList[i].color.code === '2') {
          result.dataList[i].color.name = '#FCA205'
        } else {
          result.dataList[i].color.name = '#F45653'
        }
      }
    }
  },

  mounted () {}
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/scoring-ability/ScoringAbility.vue