<script>
export default {
  props: {
    fill: { type: String, default: "" },
  },
}
</script>

<template>
  <svg viewBox="0 0 24 24" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 13H9c-2.761 0-6 1.931-6 5.4V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1.6c0-3.471-3.239-5.4-6-5.4ZM7 7a5 5 0 1 0 10 0A5 5 0 0 0 7 7Z"></path>
  </svg>
</template>

<style scoped>
svg {
  /* 一定要把svg的display改成block，不然会因为一些文字对齐的关系下移 */
  display: block;
}
</style>