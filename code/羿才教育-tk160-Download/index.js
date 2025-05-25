// const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { promisify } = require('util');
const { pipeline } = require('stream/promises');

// path.join 输出‘/’
const pathJoinBak = path.join;
path.join = function() {
  return pathJoinBak.apply(this, arguments).replace(/\\/g, '/');
}
// 日志记录
function log(message) {
  console.log(`[${new Date().toLocaleString()}] ${message}`);
}
// 常量配置
const CONFIG = {
  API_BASE: 'https://www.tk160.com/huikao_mobile/',
  IMAGE_BASE: 'https://img.huikao8.com/',
  IMAGE_DIR: './html/images',
  HTML_DIR: './html',
  JSON_PATH: 'questions.json',
  HEADERS: {
    'User-Agent': 'okhttp/3.11.0',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',
    'interfaceType': 'app',
    'Authorization': 'Bearer eyJ...'
  }
};

// 工具函数：数字不足位数补0
function padNumber(num, length=3) {
  return num.toString().padStart(length, '0');
}

// 初始化目录
async function init() {
  await promisify(fs.mkdir)(CONFIG.IMAGE_DIR, { recursive: true });
  await promisify(fs.mkdir)(CONFIG.HTML_DIR, { recursive: true });
}

// 网络请求封装
async function safeFetch(url) {
  try {
    const response = await fetch(url, { headers: CONFIG.HEADERS });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } catch (e) {
    console.error(`请求失败: ${url}`, e.message);
    return null;
  }
}

// 图片下载处理
const downloadedImages = new Set();
async function downloadImage(urlPath) {
  const fullUrl = new URL(urlPath, CONFIG.IMAGE_BASE).href;
  if (downloadedImages.has(fullUrl)) return;

  console.log(`下载图片: ${urlPath}`);
  try {
    const filename = path.basename(urlPath);
    const savePath = path.join(CONFIG.IMAGE_DIR, filename);
    const response = await fetch(fullUrl);
    if (!response.ok) throw new Error(`HTTP错误: ${response.status}`);
    await pipeline(
        response.body, 
        fs.createWriteStream(savePath)
    );
    downloadedImages.add(fullUrl);
  } catch (e) {
    console.error(`图片下载失败: ${urlPath}`, e.message);
  }
}

// 新增工具函数：分离末尾图片
function splitContentAndEndImages(text) {
  if (!text) return ['', ''];
  
  // 匹配末尾连续图片（使用正向预查确保后面没有非图片内容）
  const endImageRegex = /((?:「[^」]+」)+)$/;
  const match = text.match(endImageRegex);
  
  return match 
    ? [text.slice(0, match.index), match[1]] 
    : [text, ''];
}

// 处理行内图片（不分组）
async function processInlineImages(text) {
  const matches = text?.match(/「([^」]+)」/g) || [];
  await Promise.all(matches.map(m => downloadImage(m.slice(1, -1))));
  
  return text?.replace(/「([^」]+)」/g, (_, p1) => {
    const filename = path.basename(p1);
    return `<img class="inline-image" src="${getImagePath(filename)}">`;
  }) || '';
}

// 处理末尾图片组
async function processImageGroup(imageText) {
  if (!imageText) return '';
  
  const images = imageText.match(/「([^」]+)」/g) || [];
  await Promise.all(images.map(m => downloadImage(m.slice(1, -1))));
  
  return images.map(m => {
    const p1 = m.slice(1, -1);
    const filename = path.basename(p1);
    return `<img class="end-image" src="${getImagePath(filename)}">`;
  }).join('').replace(/(<img[^>]+>)+$/, '<div class="image-group">$&</div>');
}

// 工具函数：获取图片相对路径
function getImagePath(filename) {
  return path.relative(CONFIG.HTML_DIR, path.join(CONFIG.IMAGE_DIR, filename));
}

// 修改processText函数
async function processText(text, processEndImages = false) {
  if (processEndImages) {
    // 分割文本和末尾图片
    const [mainContent, endImages] = splitContentAndEndImages(text);
    
    // 处理主体内容中的图片
    let processedMain = await processInlineImages(mainContent);
    
    // 处理末尾图片组
    const processedEnd = await processImageGroup(endImages);

    return processedMain + processedEnd;
  } else {
    return await processInlineImages(text);
  }
}

// 修改后的processQuestions函数
async function processQuestions(data) {
  let currentNumber = 0;
  const results = [];
  
  const allQuestions = data.flatMap(d => Object.values(d)[0])
    .sort((a, b) => a.order - b.order);

  for (const q of allQuestions) {
    try {
      // 处理材料题
      if (q.subType === 6) {
        const material = {
          type: 'material',
          content: await processText(q.stem, true),
          children: [],
          start: currentNumber + 1
        };

        // 处理子题
        const children = q.childre || [];
        for (const child of children) {
          currentNumber++;

          const options = child.sOption?.split('|')
          if (options) {
            for (let i = 0; i < options.length; i++) {
              options[i] =  await processText(options[i].trim());
            }
          }
          
          material.children.push({
            number: currentNumber,
            content: await processText(child.issue, true),
            options: options || [],
            answer: child.answer,
            prefix: child.subType === 2 ? '(多选) ' : ''
          });
        }

        material.end = currentNumber;
        results.push(material);
        continue;
      }

      // 处理普通题目
      currentNumber++;

      const options = q.sOption?.split('|')
      if (options) {
        for (let i = 0; i < options.length; i++) {
          options[i] =  await processText(options[i].trim());
        }
      }
      
      results.push({
        type: 'question',
        number: currentNumber,
        content: await processText(q.issue, true),
        options: options || [],
        answer: q.answer,
        prefix: q.subType === 2 ? '(多选) ' : ''
      });
    } catch (e) {
      console.error(`处理失败: ${q.id}`, e.message);
    }
  }
  return results;
}

function generateOptionHTML(child) {
  return child.options.map((o, i) => `
  <div class="option">
    <span class="option-content">${o}</span>
  </div>`).join('')
}

// 修改后的HTML生成逻辑
function generateHTML(processedData, sectionName) {
  const elements = processedData.map(item => {
    if (item.type === 'material') {
      return `<div class="material-group">
          <div class="material">
            ${item.content}
            <div class="stem-tail">据此完成${item.start}～${item.end}题。</div>
          </div>
          ${item.children.map(child => `
            <div class="question">
              <div class="number">${child.number}.</div>
              <div class="content">${child.prefix}${child.content}</div>
              <div class="options">
                ${generateOptionHTML(child)}
              </div>
            </div>
            `).join('')}
        </div>
      `;
    }
    return `
      <div class="question">
        <div class="number">${item.number}.</div>
        <div class="content">${item.prefix}${item.content}</div>
        <div class="options">
          ${generateOptionHTML(item)}
        </div>
      </div>
    `;
  });

  const answers = processedData
    .flatMap(item => 
      item.type === 'material' 
        ? item.children.map(c => ({ number: c.number, answer: c.answer }))
        : { number: item.number, answer: item.answer }
    )
    .filter(a => a.answer);

  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${sectionName}</title>
        <style>
body {
  line-height: 1.6;
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
  counter-reset: question-number;
}

.material {
  color: #444;
  margin-bottom: 1.2em;
  line-height: 1.8;
}

.stem {
  white-space: pre-wrap;
}

.stem-tail {
  font-family: "宋体", SimSun, serif;
  color: #666;
  margin-top: 10px;
  font-style: italic;
  display: inline;
}

/* 题目容器 */
.question {
  margin: 1.2em 0;
  page-break-inside: avoid;
}

/* 题号样式 */
.number {
  display: inline-block;
  font-weight: bold;
}

/* 题目内容 */
.content {
  display: inline;
  white-space: pre-wrap;
}

/* 选项容器 */
.options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 15px;
  margin: 10px 0 0 2em;
}


/* 单个选项样式 */
.option {
  /* min-width: 200px; */
  box-sizing: border-box;
  /* white-space: pre-wrap; */
  page-break-inside: avoid;
}

/* 2个选项时的响应 */
@media (max-width: 600px) {
  .option {
    /* flex-basis: calc(50% - 15px); */ /* 手机端2个一行 */
  }
}

/* 超长选项换行处理 */
.option::before {
  content: attr(data-letter);
  font-weight: bold;
  margin-right: 0.5em;
}

/* 答案区域 */
.answers {
  margin-top: 3em;
  padding-top: 2em;
  border-top: 2px solid #ddd;
}

.answer {
  display: inline-block;
  margin: 0 1em 0.5em 0;
}

/* 打印优化 */
@media print {
  body {
    font-size: 12pt;
    max-width: none;
    margin: 1cm;
  }
  
  .material {
    background: none;
    border-left: none;
    padding-left: 0;
  }
  
  .options {
    gap: 0 10px;
  }
  
  .option {
    min-width: auto;
  }
}

/* 图片处理 */
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  margin: 3px 0;
}
/* 行内图片样式 */
.inline-image {
  max-width: 250px;
  vertical-align: middle;
}

/* 末尾图片组 */
.image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 15px 0 0 2em;
}

.end-image {
  max-width: 300px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .image-group {
    gap: 8px;
  }
  .end-image {
    max-width: 45%;
  }
}
/* 多选题标识 */
.content::before {
  content: attr(data-prefix);
  color: #c00;
  font-weight: bold;
}
        </style>
      </head>
      <body>
        ${elements.join('')}
        <div class="answers">
          <h2>参考答案</h2>
          ${answers.map(a => `
            <div class="answer">
              <span class="number">${a.number}.</span>
              <span class="value">${a.answer}</span>
            </div>
          `).join('')}
        </div>
      </body>
    </html>`;
}
// 主程序
async function main() {
  await init();
  let existingData = {};

  try {
    existingData = JSON.parse(await promisify(fs.readFile)(CONFIG.JSON_PATH, 'utf-8'));
  } catch {}

  // 获取题库列表
  const products = await safeFetch(CONFIG.API_BASE + 'queryAppSubjectMenu?pageNum=0&pageSize=20');
  const productIds = [...new Set(products?.data?.list?.map(p => p.productId) || [])];

  for (const productId of productIds) {
    const courseInfo = await safeFetch(CONFIG.API_BASE + `queryAppProductCourse?id=${productId}`);
    const courseId = courseInfo?.data?.[0]?.id;
    if (!courseId) continue;

    const sections = await safeFetch(CONFIG.API_BASE + `queryAppSectionList?courseId=${courseId}`);
    const processQueue = [];

    // 递归收集叶子节点
    function collectSections(items, path = []) {
      items?.forEach(item => {
        const newPath = [...path, item.sectionName];
        if (item.children) collectSections(item.children, newPath);
        else processQueue.push({ id: item.id, path: newPath });
      });
    }
    collectSections(sections?.data || []);
    let i = 0;
    const allProcessLength = processQueue.length;
    for (const { id, path: nPath } of processQueue) {
      i++;
      // if (i!==167 && i!==164) continue
      const existing = nPath.reduce((acc, cur) => acc?.[cur], existingData);
      if (existing) {
        console.log(`已存在: ${nPath.join('/')}`);
        continue;
      }

      log(`正在处理: ${nPath.join('/')} ${i}/${allProcessLength} (${Math.round(i / allProcessLength * 100)}%)`);
      const questionsData = await safeFetch(CONFIG.API_BASE + `qeuryAppSubjectList?sectionId=${id}&type=2`);
      if (!questionsData) continue;

      const processed = await processQuestions(questionsData.data);
      const htmlContent = generateHTML(processed, nPath.slice(-1)[0]);
      
      // 保存HTML
      const htmlPath = path.join(CONFIG.HTML_DIR, `${padNumber(i)}_${nPath.join('_')}.html`);
      await promisify(fs.writeFile)(htmlPath, htmlContent);

      // 更新JSON
      let current = existingData;
      nPath.forEach((p, i) => {
        current[p] = current[p] || (i === nPath.length - 1 ? [] : {});
        current = current[p];
      });
      Object.assign(current, processed);
      // if(i==4){return;}
    }
  }

  // 保存最终JSON
  await promisify(fs.writeFile)(CONFIG.JSON_PATH, JSON.stringify(existingData, null, 2));
}

main()//.catch(console.error);