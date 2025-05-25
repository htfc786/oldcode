<script>
export default {
  props: {
    yellow: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
  },
  emits: ['click'],
  methods: {
    onClick(event) {
      if (this.disable) return;
      this.$emit('click');
    },
    onTouchend(event) {
      if (event.cancelable) event.preventDefault();
      if (this.disable) return;
      this.$emit('click');
    },
  },
}
</script>

<template>
  <button 
    class="d-button" :class="{ 'yellow': yellow, 'disable': disable }"
    :disabled="disable"
    @touchend="onTouchend($event)"
    @click="onClick($event)"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.d-button {
  --d-button-height: 40px;
  height: var(--d-button-height);
  font-size: calc(var(--d-button-height) / 2);
  line-height: var(--d-button-height);
  border-radius: calc(var(--d-button-height) / 2);
  padding: 0 calc(var(--d-button-height) / 2);
  margin: 0 calc(var(--d-button-height) / 5);
  background-color: lawngreen;
  color: black;
  overflow: hidden;
  user-select: none;
}
.yellow {
  background-color: yellow;
}
.disable {
  background-color: gray;
  cursor: not-allowed;
}
</style>