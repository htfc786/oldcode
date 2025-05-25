// 内容脚本，注入到智学网页面
console.log('智学网排名计算器内容脚本已加载');

// 监听页面加载完成
document.addEventListener('DOMContentLoaded', () => {
  // 获取考试ID
  const examId = getExamId();
  if (examId) {
    fetchExamData(examId);
  }
});

function getExamId() {
  // 从URL或页面元素中提取考试ID
  const url = window.location.href;
  const match = url.match(/examId=([^&]+)/);
  return match ? match[1] : null;
}

async function fetchExamData(examId) {
  try {
    const response = await fetch(`https://www.zhixue.com/api/exam/${examId}/data`);
    const data = await response.json();
    processExamData(data);
  } catch (error) {
    console.error('获取考试数据失败:', error);
  }
}

function processExamData(data) {
  // 计算排名逻辑
  const students = data.students;
  students.sort((a, b) => b.score - a.score);
  
  // 在页面上显示排名
  displayRanking(students);
}

function displayRanking(students) {
  // 在页面上添加排名信息
  const container = document.createElement('div');
  container.id = 'zhixue-rank-container';
  container.style.position = 'fixed';
  container.style.top = '20px';
  container.style.right = '20px';
  container.style.zIndex = '9999';
  
  const title = document.createElement('h3');
  title.textContent = '考试排名';
  container.appendChild(title);
  
  const list = document.createElement('ol');
  students.forEach((student, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${student.name} - ${student.score}分`;
    list.appendChild(item);
  });
  
  container.appendChild(list);
  document.body.appendChild(container);
}
