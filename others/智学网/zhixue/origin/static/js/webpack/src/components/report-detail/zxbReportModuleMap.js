import reportMain from './components/zxb-transcript/ZxbTranscript'
import scoreAability from './components/scoring-ability/ScoringAbility'
import scoreDistribution from './components/score-distribution/ScoreDistribution'
import improveStrategy from './components/improve-strategy/ImproveStrategy'
import examConclusion from './components/zxb-conclusion/ZxbConclusion'
import examChangeTrend from './components/change-trend/ChangeTrend'
import SubjectAnalysis from './components/subject-analysis/SubjectAnalysis'
// import examBanner from './components/zxb-banner/ZxbBanner'
import LossAnalysis from './components/loss-analysis/LossAnalysis'
import examScoreGap from './components/score-gap/ScoreGap'
import examLevelGap from './components/level-gap/LevelGap' // 紧急优化新增
import intelligentComposition from './components/intelligent-composition/IntelligentComposition'
import nonvip from './components/nonvip/NonVip'
import threePlusX from './components/three-plus-x/ThreePlusX'
import threePlusXLevel from './components/three-plus-x-level/ThreePlusXLevel' // 紧急优化新增
import scoreContrast from './components/score-contrast/ScoreContrast'
import changeScoreLevel from './components/score-level-change/ScoreLevelChange' // 紧急优化新增

export const moduleMap = {
  'paperReportMain': reportMain, // 单科报告成绩单
  'paperChangeTrends': examChangeTrend, // 单科报告成绩趋势
  'paperScoreDistribution': scoreDistribution, // 单科报告分数分布
  'paperScoreGap': examScoreGap, // 单科报告分数差距
  'paperLevelGap': examLevelGap, // 单科报告分数等级差距
  'paperLostTopicAndAnalysis': LossAnalysis, // 单科报告丢分题以及错题解析及锚点
  'paperExamPointsAndScoringAbility': scoreAability, // 考点及得分能力
  'paperLevelTrend': changeScoreLevel, // 单科成绩等级变化

  'examThreePlusX': threePlusX, // 3+X报告
  'examThreePlusXLevel': threePlusXLevel, // 3+X报告（成绩等级)
  'examReportMain': reportMain, // 全科报告成绩单
  'examChangeTrend': examChangeTrend, // 全科报告成绩曲线
  'examScoreDistribution': scoreDistribution, // 全科报告成绩分段
  'examSubjectDiagnosis': SubjectAnalysis, // 全科报告学科诊断
  'examScoreGap': examScoreGap, // 全科报告分数差距
  'examLevelGap': examLevelGap, // 全科报告分数等级差距
  'examScoreContrast': scoreContrast, // 分数对比分析
  'examStudyStrategy': improveStrategy, // 全科报告提分策略
  'examConclusion': examConclusion, // 全科报告小结
  'examLevelTrend': changeScoreLevel, // 全科成绩等级变化
  // 'examBanner': examBanner, // 报告Banner
  'paperIntelligentWriteAbility': intelligentComposition, // 智作文

  'examChangeTrendFree': nonvip,
  'examLevelTrendFree': nonvip,
  'examScoreDistributionFree': nonvip,
  'examSubjectDiagnosisFree': nonvip,
  'examScoreGapFree': nonvip,
  'examLevelGapFree': nonvip,
  'examStudyStrategyFree': nonvip,

  'paperChangeTrendsFree': nonvip,
  'paperLevelTrendFree': nonvip,
  'paperScoreDistributionFree': nonvip,
  'paperScoreGapFree': nonvip,
  'paperLevelGapFree': nonvip,
  'paperLostTopicAndAnalysisFree': nonvip,
  'paperExamPointsAndScoringAbilityFree': nonvip,
  'paperStudyStrategyFree': nonvip
}



// WEBPACK FOOTER //
// ./src/components/report-detail/zxbReportModuleMap.js