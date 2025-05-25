<script>
export default {}
</script>

<template>
  <div class="d-clock">
    <!-- 图片来源 感谢以下网站提供图片 https://www.iconfont.cn/search/index?searchType=icon&q=%E9%97%B9%E9%92%9F&page=1&fromCollection=-1 -->
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M519.68 857.42933333c-195.584 0-354.816-159.232-354.816-354.816s159.232-354.816 354.816-354.816 354.816 159.232 354.816 354.816-159.232 354.816-354.816 354.816z m0-657.92c-167.424 0-303.616 136.192-303.616 303.616 0 167.424 136.192 303.616 303.616 303.616 167.424 0 303.616-136.192 303.616-303.616 0-167.424-136.192-303.616-303.616-303.616z" fill="yellow"></path>
      <path d="M163.328 336.21333333c-38.4-38.4-38.4-100.352 0-138.752s100.352-38.4 138.752 0M876.544 336.21333333c38.4-38.4 38.4-100.352 0-138.752s-100.352-38.4-138.752 0M238.592 805.71733333l47.104-47.104c8.192-8.192 20.992-8.192 29.184 0 8.192 8.192 8.192 20.992 0 29.184l-47.104 47.104c-8.192 8.192-20.992 8.192-29.184 0-7.68-8.192-7.68-20.992 0-29.184z" fill="yellow"></path>
      <path d="M800.768 805.71733333l-47.104-47.104c-8.192-8.192-20.992-8.192-29.184 0-8.192 8.192-8.192 20.992 0 29.184l47.104 47.104c8.192 8.192 20.992 8.192 29.184 0 8.192-8.192 8.192-20.992 0-29.184z" fill="yellow"></path>
    </svg>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.d-clock {
  --d-clock-height: 40px;
  display: inline-block;
  vertical-align: middle;
  height: var(--d-clock-height);
  width: var(--d-clock-height);
  position: relative;
  user-select: none;
}
.d-clock>span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: var(--d-clock-height);
  width: var(--d-clock-height);
  text-align: center;
  line-height: var(--d-clock-height);
  font-size: calc(var(--d-clock-height) / 2.5);
  color: #111;
}
.d-clock>svg {
  display: inline-block;
  height: var(--d-clock-height);
  width: var(--d-clock-height);
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>

