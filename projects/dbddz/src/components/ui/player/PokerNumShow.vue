<script>
export default {
  props: {
    num: { type: Number, required: true }, // 牌数显示
  },
}
</script>

<template>
  <div class="player-poker-num">{{ num }}</div>
</template>

<style scoped>
.player-poker-num {
  width: 25px;
  height: 33px;
  background-color: rgb(228, 126, 35);
  font-size: 16px;
  text-align: center;
  line-height: 33px;
  margin: 0 auto;
  margin-top: 4px;
  border-radius: 4px;
  border: 3px solid rgb(255, 211, 132);
  font-weight: bold;
  color: white;
  user-select: none;
}
</style>