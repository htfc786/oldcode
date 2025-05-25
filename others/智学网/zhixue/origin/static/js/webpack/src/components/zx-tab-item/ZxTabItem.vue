<template src="./zxTabItem.html"></template>
<style src="./zxTabItem.less" lang="less"></style>
<script>
export default {
  name: 'zx-tab-item',
  props: {
    id: {
      type: String
    }
  },

  computed: {
    activeStyle () {
      return {
        color: ''
      }
    }
  },

  methods: {
    onItemClicked () {
      this.$parent.$emit('input', this.id);
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/zx-tab-item/ZxTabItem.vue