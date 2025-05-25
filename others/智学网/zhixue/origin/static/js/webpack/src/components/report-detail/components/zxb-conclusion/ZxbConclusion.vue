<template src="./zxb-conclusion.html"></template>
<style src="./zxb-conclusion.less" lang="less"></style>
<script>
import APIService from '@/api/reportDetailWebServer.js';

export default {
  name: 'zxb-conclusion',
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

  created () {
    this.requestData();
  },

  data () {
    return {
      model: {},
      showModule: false
    }
  },

  methods: {
    requestData: function () {
      let that = this;
      let params = {
        examId: that.examId
      };
      APIService.getAllConclusion(params).then(response => {
        if (response.errorCode === 0) {
          if (response.result) {
            that.dealData(response.result);
          } else {
            that.showModule = false;
          }
        } else {
          console.log('getAllConclusion errorCode: ' + response.errorCode + ' errorInfo: ' + response.errorInfo);
        }
      });
    },

    dealData: function (result) {
      if (typeof result.title !== 'string' || !result.title.length) {
        result.title = '小结';
      }
      this.model = result;
      this.showModule = true;
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/zxb-conclusion/ZxbConclusion.vue