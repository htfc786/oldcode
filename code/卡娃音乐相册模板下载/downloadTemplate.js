// downloadTemplate.js
// 下载卡娃音乐相册模板
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const { pipeline } = require('stream/promises');

// path.join 输出‘/’
const pathJoinBak = path.join;
path.join = function() {
  return pathJoinBak.apply(this, arguments).replace(/\\/g, '/');
}

const ENCODING = 'utf-8';
const DOWNLOAD_PATH = './template';
const RECORD_JSON_FILE = 'templateRecord.json';
const TEMPLATE_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>\$\{title\}</title>
  <link rel="stylesheet" href="\$\{cssUrl\}">
  <script data-template-core src="../../config/core.js"></script>
  <script data-template-config src="../../config/config.js"></script>
</head>
\$\{html\}
<script src="\$\{jsUrl\}"></script>
</html>
`
const TEMPLATE_HTML_NAME = 'template.html';
const TEMPLATE_JS_NAME = 'script.js';
const TEMPLATE_CSS_NAME = 'style.css';
const TEMPLATE_CONFIG_NAME = 'config.json';
const TEMPLATE_SRC_FOLDER = 'src'
const TEMPLATE_INDEX = 'index.html';
const TEMPLATE_ICON_FILENAME = 'icon';

const GET_TEMPLETE_BASE_URL = 'https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&scene=${alias}'

// === 工具函数 ===
// 日志记录
function log(message) {
  console.log(`[${new Date().toLocaleString()}] ${message}`);
}
// 读取文件，不存在自动处理错误
function readFile(path, encoding = 'utf-8') {
  try {
    return fs.readFileSync(path, encoding);
  } catch (error) {
    console.error(`读取文件 ${path} 失败: ${error.message}`);
    return null;
  }
}
// 写入文件，不存在自动创建
function writeFile(path, data, encoding = 'utf-8') {
  // console.log(`写入文件 ${path}`);
  // 检测文件夹。不存在则创建
  const dir = path.substring(0, path.lastIndexOf('/'));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path, data, encoding);
}
// 读取json
function readJson(path, encoding = 'utf-8') {
  const data = readFile(path, encoding);
  return data ? JSON.parse(data) : {};
}
// 下载文件
async function downloadFile(url, savePath) {
  // 检测文件夹。不存在则创建
  const dir = savePath.substring(0, savePath.lastIndexOf('/'));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // 出错重试
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP错误: ${response.status}`);
      await pipeline(
          response.body, 
          fs.createWriteStream(savePath)
      );
      return true;
    } catch (error) {
      // console.error(`下载文件 ${url} 失败: ${error.message}`);
      if (i < 2) {
        // console.log(`重试下载文件 ${url}`);
      } else {
        console.warn(`下载文件 ${savePath} 失败，原因：${error.message}\n    URL: ${url}`);
        return false;
      }
    }
  }
  // console.log('文件下载完成');
}
// ======

// 1.获取模板列表信息
// https://go03.gondar.cn/kphoto/a_photo_config.php?action=template&wxid=zuoyyxc
async function getTemplateList() {
  // 获取数据
  const url = `https://go03.gondar.cn/kphoto/a_photo_config.php?action=template&wxid=zuoyyxc`;
  const response = await fetch(url);
  const data = await response.json();
  // 解析数据 menu => menu_template => template_lists
  // 处理菜单
  const menu = data.data.menu;
  const menuTempData = {}
  for (const key of menu) {
    // 去除name中的除中文、英文之外的特殊字符
    key.name = key.name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
    menuTempData[key.alias] = key.name;
  }
  // 处理菜单映射
  const menuTemplate = data.data.menu_template; // object
  const menuTemplateData = {}
  for (const key in menuTemplate) {
    const menuItem = menuTemplate[key];
    menuItem.forEach(item => {
      menuTemplateData[item] = menuTempData[key];
    })
  }
  // console.log(menuTemplateData);
  // 处理模板列表
  const templateLists = data.data.template_lists; // array
  // { name: '', alias: '', icon: '', menu: '' }
  const templateListData = []
  templateLists.forEach(item => {
    templateListData.push({
      name: item.name,
      alias: item.alias,
      icon: item.icon,
      menu: menuTemplateData[item.alias] || '热门'
    })
  })
  return templateListData;
}

// 2.对比本地模板列表，下载未下载的模板
function complete(templateList) {
  const result = [];
  // 读取记录文件
  const recordFilePath = path.join(DOWNLOAD_PATH, RECORD_JSON_FILE);
  const record = readJson(recordFilePath, ENCODING);
  // 遍历模板列表，下载未下载的模板
  for (const item of templateList) {
    if (!record[item.alias]) {
      result.push(item);
    }
  }
  return result;
}

// 解析 js
async function parseSrc(dom, template, type="js") {
  const url = dom.attr(type==="js"? 'src' : 'href');
  if (url) {
    // 如果有lottie，则可能引入了lottie.min.js，单独下载并向下解析
    if (type === "js" && 
      (url.includes('lottie'))
    ) {
      const response = await fetch(url);
      const lottieText = await response.text();
      const nextDom = dom.next();
      const next = await parseSrc(nextDom, template, type);
      return lottieText + '\n' + next;
    }

    // 模板 生日祝福 不用管，让他报去吧，就是不匹配！
    //   url：https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_1761&scene=birthday

    // 检测链接里是否包含alias，不包含给出警告
    if (!url.includes(template.alias)) {
      console.warn(`模板 ${template.name} 链接不包含alias: ${url}`);
    }
    const response = await fetch(url);
    return await response.text();
  } else {
    return dom.html();
  }
}

// 寻找html
function searchContainer($) {
  const containerNameList = [
    '#container',
    ".container", //  一鹿有你 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_1161&scene=xiaolu
    '#baby_container', // 宝宝相册： https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_571&scene=baby
    '#container1', // 圣诞祝福 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_3731&scene=shengdan2
    '#content', // 爱情 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_2551&scene=love
    "#background_container", // 深邃星空 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_2341&scene=flip
    "#scene", // 欢乐时光 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_1521&scene=roll
    "#beijing", // 3D酷翻 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_1401&scene=brick
    "#biyeji_container", // 毕业季 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_1331&scene=biyeji
  ];
  for (const name of containerNameList) {
    let container = $(name);
    if (container.length > 0) {
      return container;
    }
  }
  // 尝试通过子元素查找
  const childrenNameList = [
    "#pagetitle", // 五彩泡泡 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_2371&scene=paopao
  ];
  for (const name of childrenNameList) {
    let container = $(name);
    if (container.length > 0) {
      return container.parent();
    }
  }
  return null;
}

// 特殊处理模板
function specialParse(template, templateAllHtml) {
  const specialParseList = {
    "xuandong": async () => { //  炫动星空 https://go03.gondar.cn/kphoto/showphoto.php?edit=2&bookid=dD2nhG888UynOchHMF-NbItIs03illEnPVmwpJ5UxaM&openid=T_9RB8DEFSiSHAN40amI54OF2kRl8TRBlcToO2OCDVC27ZBCBcFVRiWnJ2mPyRjCc5ckjFiDnrk&&wxid=zuoyyxc&olwxid=&fm=woa&position=hot_1561&scene=xuandong
      const $ = cheerio.load(templateAllHtml, {}, false);
      const html1Dom = $('#container');
      const html2Dom = html1Dom.next();
      const html1 = html1Dom.prop('outerHTML');
      const html2 = html2Dom.prop('outerHTML');
      const cssDom = html1Dom.prev();
      const jsDom = html2Dom.next();
      const css = await parseSrc(cssDom, template, "css");
      const js = await parseSrc(jsDom, template, "js");
      return {
        html: html1 +"\n"+ html2,
        css,
        js
      }

    },
  }
  return specialParseList[template.alias] || null;
}

// 解析HTML => { html: '', css: '', js: '' }
async function parseHtml(templateAllHtml, template) {
  // 特殊处理
  const specialParseRes = specialParse(template, templateAllHtml);
  if (specialParseRes) {
    return await specialParseRes();
  }
  // 两种: 1. js和css使用链接加载  2. js和css直接写在html中
  // 1. 找body或<div id='container'>
  const $ = cheerio.load(templateAllHtml, {}, false);
  // console.log($('#container').parent().parent().html());
  // html
  const htmlDom = searchContainer($);
  // 获取outerHTML
  if (!htmlDom) {
    console.warn(`模板 ${template.name} 没有找到container`);
    return null;
  }
  const html = htmlDom.prop('outerHTML');
  // cheerio 自动构建了dom结构，body第一项是html，head最后一项是css，body第2项是js
  let container = $('body');
  if (container.length === 0) {
    container = searchContainer($);
  }
  // 2. 找到js和css
  // js找到body第2个子元素
  const jsDom = container.next()  // js
  // css找到head最后一项
  const cssDom = container.prev()  // css
  // console.log("js:",jsDom,"css:", cssDom);
  // 3. 判断js和css是否是链接
  const js = await parseSrc(jsDom, template, "js");
  const css = await parseSrc(cssDom, template, "css");
  return {
    html,
    css,
    js
  }
}

// 获取资源链接
function getResourceUrl(html, css, js) {
  const result = [];
  // html
  // 正则匹配所有字符串中的链接，获取资源链接
  const resourceLinksHtml = html.match(/(src|href)=["']([^"']+)["']/g);
  if (resourceLinksHtml) {
    resourceLinksHtml.forEach(item => {
      const link = item.match(/(src|href)=["']([^"']+)["']/);
      result.push(link[2]);
    })
  }
  // css
  const resourceLinksCss = css.match(/url\([&"']*(?:&quot;|&#39;)?\s*([^"'()&]+)\s*[&"']*\)/g);
  if (resourceLinksCss) {
    resourceLinksCss.forEach(item => {
      const link = item.match(/url\([&"']*(?:&quot;|&#39;)?\s*([^"'()&]+)\s*[&"']*\)/);
      result.push(link[1]);
    })
  }
  // js 只能匹配http://或https://了
  const resourceLinksJs = js.match(/(http:\/\/|https:\/\/)[^"'\s]+/g);
  if (resourceLinksJs) {
    resourceLinksJs.forEach(item => {
      result.push(item);
    })
  }
  // 再次检查一遍，去除url末尾的 )"'等字符
  return result.map(item => {
    return item.replace(/[\s)'"&]+$/, '')
  })
  // return result;
}

// 下载资源
async function downloadResource(parseHtmlRes, template, downloadUrl) {
  const savePath = path.join(DOWNLOAD_PATH, template.menu, template.name);
  let { html, css, js } = parseHtmlRes;
  const resList = getResourceUrl(html, css, js);
  // 下载资源
  // console.log(savePath)
  const downloadTasks = [];
  for (const item of resList) {
    const fileName = item.split('/').pop().split('?')[0].split('#')[0];
    const itemPath = path.join(TEMPLATE_SRC_FOLDER, fileName);
    const task = downloadFile(item, path.join(savePath, itemPath));
    downloadTasks.push(task);
    // 替换html中的链接
    html = html.replace(item, itemPath);
    css = css.replace(item, itemPath);
    js = js.replace(item, itemPath);
  }
  await Promise.all(downloadTasks);
  // 保存css文件
  writeFile(path.join(savePath, TEMPLATE_CSS_NAME), css, ENCODING);
  // 保存js文件
  writeFile(path.join(savePath, TEMPLATE_JS_NAME), js, ENCODING);
  // 保存html文件
  const saveHtml = TEMPLATE_HTML.replace('${title}', template.name)
      .replace('${cssUrl}', TEMPLATE_CSS_NAME)
      .replace('${jsUrl}',  TEMPLATE_JS_NAME)
      .replace('${html}', html);
  writeFile(path.join(savePath, TEMPLATE_INDEX), saveHtml, ENCODING);
  writeFile(path.join(savePath, TEMPLATE_HTML_NAME), html, ENCODING);
  // 下载图标
  // 获取图标扩展名
  const iconExt = template.icon.split('.').pop();
  await downloadFile(template.icon, path.join(savePath, TEMPLATE_ICON_FILENAME+"."+iconExt));
  // 记录模板配置文件
  const templateConfig = {
    name: template.name,
    info: {
      ...template,
      downloadUrl,
    },
    icon: TEMPLATE_ICON_FILENAME+"."+iconExt,
    css: TEMPLATE_CSS_NAME,
    js: TEMPLATE_JS_NAME,
    html: TEMPLATE_HTML_NAME,
    src: TEMPLATE_SRC_FOLDER,
  }
  writeFile(path.join(savePath, TEMPLATE_CONFIG_NAME), JSON.stringify(templateConfig, null, 2), ENCODING);
}
// 3.下载模板
async function downloadTemplate(template) {
  // console.log(template)
  // 1. 获取模板html文件
  const url = GET_TEMPLETE_BASE_URL.replace('${alias}', template.alias);
  const templateResponse = await fetch(url);
  const templateAllHtml = await templateResponse.text();
  // 2. 解析html
  // 两种: 1. js和css使用链接加载  2. js和css直接写在html中
  const parseHtmlRes = await parseHtml(templateAllHtml, template);
  if (!parseHtmlRes) {
    console.warn(`模板 ${template.name} 解析失败 URL: ${url}`);
    throw new Error(`模板 ${template.name} 解析失败`);
  }
  // 3. 下载资源
  // 4. 解析，获取其中的资源路径
  // 匹配所有字符串中的链接，获取资源链接
  // 下载资源
  await downloadResource(parseHtmlRes, template, url);
}

// 创建下载文件夹
function createDir(dir, template) {
  // 创建下载文件夹
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  } else {
   // 改名重新创建
    let newDirI = 1 
    let newDir
    while (fs.existsSync(newDir = dir + '_' + newDirI)) {
      newDirI++;
    }
    fs.renameSync(dir, newDir);
    console.warn(`文件夹 ${dir} 已存在，重命名为 ${newDir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
}

(async () => {
  console.log("卡娃音乐相册模板下载")
  // 获取模板列表
  log("获取模板列表")
  const templateListOnline = await getTemplateList();
  // 对比本地模板列表，下载未下载的模板
  log("对比本地模板列表，下载未下载的模板")
  const templateList = complete(templateListOnline);
  const templateNum = templateList.length;
  log(`共 ${templateNum} 个模板需要下载`)
  // 读取下载好的模板json文件
  const recordFilePath = path.join(DOWNLOAD_PATH, RECORD_JSON_FILE);
  const record = readJson(recordFilePath, ENCODING);
  // 下载模板
  let i = 0;
  for (const item of templateList) {
    i++;
    // 模板名中非法字符（无法创建文件夹的字符）和空格
    const baseName = item.name;
    item.name = item.name.replace(/[\\\/:*?"<>|]/g, '').replace(/\s/g, '');
    // 创建下载文件夹
    const downloadPath = path.join(DOWNLOAD_PATH, item.menu, item.name);
    createDir(downloadPath);
    
    log(`下载模板 ${item.name} (${i}/${templateNum} ${Math.round(i / templateNum * 100)}%)`)
    // 反复重试
    for (let j = 0; j < 3; j++) {
      try {
        await downloadTemplate(item);
        // 记录下载信息
        record[item.alias] = {
          ...item,
          baseName,
          downloadTime: new Date().getTime(),
          downloadPath,
        };
        break;
      } catch (e) {
        console.error(`模板 ${item.name} 下载错误: `,e);
      }
    }
    // 保存下载信息
    writeFile(recordFilePath, JSON.stringify(record, null, 2), ENCODING);
  }
  // downloadTemplate(templateList[5]);
  // 记录已下载的模板
})();