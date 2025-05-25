import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reportMain: '', // scoreReportMain原分 levelReportMain等级 completeReportMain等级和原分
    totalCount: 0, // 总人数
    linkUrl: '', // // 规则链接跳转头部
    currentUser: {},
    reportTimeInfo:{}
  },
  mutations: {
    // 保存当前报告类型
    reportMain (state, reportMain) {
      state.reportMain = reportMain;
    },
    // 总人数
    totalCount (state, totalCount) {
      state.totalCount = totalCount;
    },
    // 规则链接跳转头部
    linkUrl (state, linkUrl) {
      state.linkUrl = linkUrl;
    },
    setCurrentUser (state, currentUser) {
      state.currentUser = currentUser;
    },
    setReportTimeInfo(state,reportTimeInfo){
      state.reportTimeInfo = reportTimeInfo;
    }
  }
})



// WEBPACK FOOTER //
// ./src/store/index.js