<template src="./zxb-anchorinfo.html"></template>
<style src="./zxb-anchorinfo.less" lang="less"></style>
<script>
export default {
  name: 'zxb-anchorinfo',
  props: {
    anchorInfo: {
      type: Object,
      default: function () {
        return {
        };
      }
    }
  },
  created () {
  },
  data () {
    return {
      acio_rateTable: 'acio_rateTable',
      acio_rateMargin: 'acio_rateMargin'
    }
  },
  computed: {
    anchorInfoShow () {
      if (this.anchorInfo.beAnchor === undefined) {
        return this.anchorInfo.id.length;
      } else {
        return this.anchorInfo.beAnchor;
      }
    },
    errorInfoShow () {
      return this.anchorInfo.errTopics.constructor === Array && this.anchorInfo.errTopics.length;
    },
    acio_tagStyle () {
      let color = '';
      switch (this.anchorInfo.subjectCode) {
        case '02':
          color = '#2675D8';
          break;
        case '06':
          color = '#FCA205';
          break;
        case '05':
          color = '#06C1AE';
          break;
      }
      return 'background:' + color;
    },
    showImproveInfo () {
      return typeof (this.anchorInfo.improveScore) === 'number' && this.anchorInfo.improveScore > 0;
    }
  },
  methods: {
    goImproveClick () {
      this.$emit('go-improve', this.anchorInfo.beAnchor, this.anchorInfo.canPractise, this.anchorInfo.id, this.anchorInfo.subjectCode, this.anchorInfo.paperId);
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/zxb-anchorinfo/ZxbAnchorinfo.vue