// 后台脚本，处理扩展功能
chrome.runtime.onInstalled.addListener(() => {
  console.log('智学网排名计算器已安装');
});

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    console.log(details);
      const params = new URL(details.url).searchParams;
      return { examId: params.get('exam_id') };
  },
  { urls: ["*://www.zhixue.com/log/userActionLog/create"] },
  ["blocking"]
);