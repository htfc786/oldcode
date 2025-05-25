function injectStyle (ssrContext) {
  require("!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!vue-style-loader!css-loader?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-af327c26\",\"scoped\":false,\"hasInlineConfig\":false}!less-loader?{\"sourceMap\":true}!./switchTab.less")
}
var normalizeComponent = require("!../../../node_modules/vue-loader/lib/component-normalizer")
/* script */
export * from "!!babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SwitchTab.vue"
import __vue_script__ from "!!babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SwitchTab.vue"
/* template */
import __vue_template__ from "!!../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-af327c26\",\"hasScoped\":false,\"transformToRequire\":{\"video\":[\"src\",\"poster\"],\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"buble\":{\"transforms\":{}}}!./switchTab.html"
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

export default Component.exports



//////////////////
// WEBPACK FOOTER
// ./src/components/switch-tab/SwitchTab.vue
// module id = null
// module chunks = 