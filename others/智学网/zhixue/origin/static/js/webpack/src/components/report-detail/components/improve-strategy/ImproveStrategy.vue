<template src="./improve-strategy.html"></template>
<style src="./improve-strategy.less" lang="less"></style>
<script>
import zxbAnchorinfo from '../zxb-anchorinfo/ZxbAnchorinfo.vue';
import APIService from '@/api/reportDetailWebServer.js';

const module = 'improve-strategy';

export default {
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
  mounted () {
    this.requestData()
  },
  data () {
    return {
      model: {},
      showModule: false
    }
  },
  components: {
    'zxb-anchorinfo': zxbAnchorinfo
  },
  methods: {
    /**
     * 获取全科提分策略组件数据 --edit by jmning 2018/11/30
     */
    requestData: function () {
      let that = this;
      let params = {
        examId: that.examId
      }
      APIService.getAllStudyStrategy(params).then(response => {
        if (response.errorCode === 0) {
          try {
            if (response.result.list.length) {
              that.model = response.result;
              that.showModule = true;
            } else {
              that.showModule = false;
            }
          } catch (e) {
            console.log(e)
          }
        } else {
          console.log('getAllStudyStrategy errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },
    goImproveHandle: function (beAnchor, canPractise, anchorId, subjectCode, paperId) {
      return false;
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/improve-strategy/ImproveStrategy.vue