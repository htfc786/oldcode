<!--说明展示（iframe）-->
<template>
  <el-dialog
    :title="from===1?'成绩单等级规则说明':'历次成绩变化等级规则说明'"
    :visible.sync="dialogVisible"
    custom-class="rules-dlg"
    width="800px">
    <iframe :src="url"
            v-if="url"
            frameborder="0">
    </iframe>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">我知道了</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'RulesDialog',
  props: {
    url: {
      type: String,
      default: ''
    },
    from: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style>
.rules-dlg .el-dialog__header{
    background: #05c1ae;
}
.rules-dlg .el-dialog__header .el-dialog__title{
  color: #fff;
  font-weight: 700;
}
.rules-dlg .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
}
.rules-dlg iframe {
    width: 100%;
    height: 440px;
}
.rules-dlg .el-dialog__footer{
  text-align: center;
}
.rules-dlg .el-dialog__footer .el-button{
  background: #05c1ae;
  color: #fff;
}
</style>



// WEBPACK FOOTER //
// src/components/report-detail/components/rules-dialog/RulesDialog.vue