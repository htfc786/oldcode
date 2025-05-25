// 报告详情接口
import http from './http';
import { getUrlOneParam } from './publicMethods';

export default {
  getUrlStr: getUrlOneParam,
  /**
   * 获取用户信息
   * */
  getUserInfo () {
    return http.fetchGet('/zhixuebao/base/common/getUserInfo');
  },
  /**
   * 全科报告-报告成绩接口
   * @params.examId 考试id
   * */
  getAllReportMain (params) {
    return http.fetchGet('/zhixuebao/report/exam/getReportMain', params);
  },
  /**
   * 获取报告模块接口
   * @params.examId 考试id
   * @params.paperId 试卷id（单科选填）
   * @params.tag 标签
   * */
  getReportModules (params) {
    return http.fetchGet('/zhixuebao/report/common/getModules', params);
  },
  /**
   * 获取成绩单接口
   * @params.examId 考试id
   * @params.token
   * @params.subjectCode 学科code
   * */
  getTeacherSideScoreRules (params) {
    return http.fetchGet('/zhixuebao/report/common/getTeacherSideScoreRules', params);
  },
  /**
   * 单科报告-成绩趋势接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * @params.pageIndex 起始页码（非必选）
   * @params.pageSize 分页大小（非必选）
   * */
  getSingleChangeTrend (params) {
    return http.fetchGet('/zhixuebao/report/paper/getChangeTrend', params);
  },
  /**
   * 单科报告-成绩等级趋势接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * @params.pageIndex 起始页码（非必选）
   * @params.pageSize 分页大小（非必选）
   * */
  getSinglePaperScoreLevelChange (params) {
    return http.fetchGet('/zhixuebao/report/paper/getLevelTrend', params);
  },
  /**
   * 单科报告-分数分布接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * */
  getSingleScoreDistribution (params) {
    return http.fetchGet('/zhixuebao/report/paper/getScoreDistribution', params);
  },
  /**
   * 单科报告-分数差距接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * */
  getSingleScoreGap (params) {
    return http.fetchGet('/zhixuebao/report/paper/getScoreGap', params);
  },
  /**
   * 单科报告-分数等级差距接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * */
  getSingleLevelGap (params) {
    return http.fetchGet('/zhixuebao/report/paper/getLevelGap', params);
  },
  /**
   * 单科报告-丢分分析接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * */
  getSingleLostTopicAnalysis (params) {
    return http.fetchGet('/zhixuebao/report/paper/getLostTopicAndAnalysis', params);
  },
  /**
   * 单科报告-获取学霸答案接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * @params.topicId 试题id
   * @params.topicNumberList 试题题号集合(包含小题)
   * */
  getSingleBestAnswer (params) {
    return http.fetchGet('/zhixuebao/report/paper/getBestAnswer', params);
  },
  /**
   * 单科报告-获取锚点报告接口
   * @params.examId 考试id
   * @params.paperId 试卷id
   * */
  getSingleAnchorReport (params) {
    return http.fetchGet('/zhixuebao/report/paper/getAnchorReport', params);
  },
  /**
   * 单科报告-考点及得分能力接口
   * @params.paperId 试卷id
   * */
  getSingleExamPointsAndScoringAbility (params) {
    return http.fetchGet('/zhixuebao/report/paper/getExamPointsAndScoringAbility', params);
  },
  /**
   * 全科报告-成绩趋势接口
   * @params.examId 考试id
   * @params.paperIndex 起始页码，默认1（非必选）
   * @params.paperSize 分页大小，默认5（非必选）
   * */
  getAllChangeTrend (params) {
    return http.fetchGet('/zhixuebao/report/exam/getChangeTrend', params);
  },
  /**
  * 全科报告-成绩等级趋势接口
  * @params.examId 考试id
  * @params.paperIndex 起始页码，默认1（非必选）
  * @params.paperSize 分页大小，默认5（非必选）
  * */
  getAllScoreLevelChange (params) {
    return http.fetchGet('/zhixuebao/report/exam/getLevelTrend', params);
  },
  /**
   * 全科报告-分数分布接口
   * @params.examId 考试id
   * */
  getAllScoreDistribution (params) {
    return http.fetchGet('/zhixuebao/report/exam/getScoreDistribution', params);
  },
  /**
   * 全科报告-学科诊断接口
   * @params.examId 考试id
   * */
  getAllSubjectDiagnosis (params) {
    return http.fetchGet('/zhixuebao/report/exam/getSubjectDiagnosis', params);
  },
  /**
   * 全科报告-分数差距接口
   * @params.examId 考试id
   * */
  getAllScoreGap (params) {
    return http.fetchGet('/zhixuebao/report/exam/getScoreGap', params);
  },
  /**
   * 全科报告-分数等级差距接口
   * @params.examId 考试id
   * */
  getAllLevelGap (params) {
    return http.fetchGet('/zhixuebao/report/exam/getLevelGap', params);
  },
  /**
   * 全科报告-提分策略接口
   * @params.examId 考试id
   * */
  getAllStudyStrategy (params) {
    return http.fetchGet('/zhixuebao/report/exam/getStudyStrategy', params);
  },
  /**
   * 全科报告-小结接口
   * @params.examId 考试id
   * */
  getAllConclusion (params) {
    return http.fetchGet('/zhixuebao/report/exam/getConclusion', params);
  },
  /**
   * Banner List
   * @params.tag 标签
   * */
  getBannerList (params) {
    return http.fetchGet('/container/app/common/getBannerList', params);
  },
  /**
   * 老报告获取考试信息
   * @params.examId 考试id
   * */
  getExamInfo (params) {
    return http.fetchGet('/zhixuebao/report/getRecentExamInfo', params);
  },

  /**
   * 获取智作文
   * @params.paperId 试卷id
   * */
  getIntelligentWriteAbility (params) {
    return http.fetchGet('/zhixuebao/report/paper/getIntelligentWriteAbility', params);
  },
  /**
   * 3+X 报告
   * @params.examId 考试id
   * */
  getThreePlusXList (params) {
    return http.fetchGet('/zhixuebao/report/exam/getThreePlusXData', params);
  },
  /**
   * 3+X 报告(排名更改为等级)
   * @params.examId 考试id
   * */
  getThreePlusXLevel (params) {
    return http.fetchGet('/zhixuebao/report/exam/getThreePlusXLevelData', params);
  },
  /**
   * 分数对比分析
   * @params.examId 考试id
   * */
  getScoreContrast (params) {
    return http.fetchGet('/zhixuebao/report/exam/getScoreContrast', params);
  },
  /**
   * 获取考试列表
   * @params.pageIndex 起始索引
   * @params.pageSize 分页大小
   * @params.actualPosition 实际索引位置
   * */
  getPageExamList (params) {
    return http.fetchGet('/zhixuebao/report/getPageExamList', params);
  },
  /**
   * 获取菜单权限
   * */
  getMenuConfig (params) {
    return http.fetchGet('/zhixuebao/report/common/config', params);
  }
}



// WEBPACK FOOTER //
// ./src/api/reportDetailWebServer.js