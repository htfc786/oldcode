<script>
export default {}
</script>

<template>
  <span class="d-text">
    <slot></slot>
  </span>
</template>

<style scoped>
.d-text{
  --d-text-height: 40px;
  display: inline-block;
  vertical-align: middle;
  height: var(--d-text-height);
  line-height: var(--d-text-height);
  font-size: calc(var(--d-text-height) / 3 * 2);
  position: relative;
  user-select: none;
  color: yellow;
}
</style>

