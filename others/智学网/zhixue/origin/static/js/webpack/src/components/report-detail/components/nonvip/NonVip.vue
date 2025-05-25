<template src="./nonvip.html"></template>
<style src="./nonvip.less" lang="less"></style>
<script>
export default {
  name: 'no-vip',
  props: {
    index: {
      type: Number
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    topTitle: {
      type: String
    },
    description: {
      type: String
    },
    thumbnail: {
      type: String
    }
  },

  data () {
    return {
      headerTitle: '开通个性化学习套餐，深度诊断学情',
      label: '分析样例'
    }
  }

}
</script>



// WEBPACK FOOTER //
// src/components/report-detail/components/nonvip/NonVip.vue