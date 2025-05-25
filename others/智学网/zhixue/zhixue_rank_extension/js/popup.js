// 弹出页面脚本
document.getElementById('refreshBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'refreshRanking'});
  });
});
