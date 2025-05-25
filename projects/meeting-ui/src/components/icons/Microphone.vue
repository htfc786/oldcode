<script>
export default {
  props: {
    fill: { type: String, default: "" },
  },
}
</script>

<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 6a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0V6Z" :fill="fill"></path>
    <path d="M20 9a1 1 0 0 0-1 1v1a7 7 0 1 1-14 0v-1a1 1 0 0 0-2 0v1a9 9 0 0 0 8 8.945V22.5a1 1 0 1 0 2 0v-2.555A9 9 0 0 0 21 11v-1a1 1 0 0 0-1-1Z" :fill="fill"></path>
  </svg>
</template>

<style scoped>
svg {
  /* 一定要把svg的display改成block，不然会因为一些文字对齐的关系下移 */
  display: block;
}
</style>