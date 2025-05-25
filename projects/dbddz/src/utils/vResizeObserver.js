// 元素尺寸变化指令
// resize指令
const map = new WeakMap();
const ResizeObserver = window.ResizeObserver || window.WebKitResizeObserver || window.MozResizeObserver;
const ob = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const handler = map.get(entry.target);
      if (handler) {
        handler({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    }
})

export default {
  mounted(el, binding) {
    // 监听
    ob.observe(el);
    map.set(el, binding.value);
  },
  unmounted(el) {
    // 取消监听
    ob.unobserve(el)
    map.delete(el);
  },
}