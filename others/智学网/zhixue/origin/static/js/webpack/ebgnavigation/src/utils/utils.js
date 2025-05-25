import { workbenchEvent } from '../components/teacher-role/index'
/**
 * 简易Xss过滤
 * @param {*} str 被过滤的字符串
 */
// const easyXss = str => {
//   var lt = /</g
//   var gt = />/g
//   var ap = /'/g
//   var ic = /"/g

//   return str
//     .replace(lt, '&lt;')
//     .replace(gt, '&gt;')
//     .replace(ap, '&#39;')
//     .replace(ic, '&#34;')
// }

/**
 * 模板过滤
 * @param {*} template 模板字符串
 * @param {*} data 数据
 */
const templateFilter = (template) => {
  let tmp = template

  // 过滤换行
  tmp = tmp.replace(/\r|\n/g, '')

  // 过滤连续空格
  tmp = tmp.replace(/\s+/g, ' ')

  // 过滤标签间的空格
  tmp = tmp.replace(/\>\s+\</g, '><')

  return tmp
}
String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2)
}
/**
 *处理单引号双引号
 * @param {*} appList 是我们菜单的列表
 */
function formatParams(appList) {
  let type = appList.type
  let currentName = appList.currentName
  let newData = JSON.parse(JSON.stringify(appList))

  delete newData.type
  delete newData.currentName
  let list = newData
  // renderAppList渲染的时候带的参数不是传递过来的数组，特殊处理
  let specialFlag = false

  if (newData.appList) {
    list = newData.appList
    specialFlag = true
  }
  list.forEach((item) => {
    let parentJson = item.params
    if (!!parentJson && parentJson.length > 0) {
      item.params = parentJson.replaceAll('"', "'")
    }
    if (item.children && item.children.length > 0) {
      item.children.forEach((cItem) => {
        let childrenJSonParam = cItem.params

        if (!!childrenJSonParam && childrenJSonParam.length > 0) {
          cItem.params = childrenJSonParam.replaceAll('"', "'")
        }
      })
    }
  })
  if (specialFlag) {
    return { appList: list, type, currentName }
  }
  if (type) {
    list.type = type
  }
  if (currentName) {
    list.currentName = currentName
  }
  return list
}

/**
 * 模板渲染
 * @param {*} tpl 模板
 * @param {*} data 数据
 */
const templateRender = (tpl, data, type) => {
  let reg = /<%([^%>]+)?%>/g,
    regOut = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    code = 'var r=[];\n',
    cursor = 0

  let add = function (line, js) {
    js
      ? (code += line.match(regOut) ? line + '\n' : 'r.push(' + line + ');\n')
      : (code +=
          line !== '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '')
    return add
  }

  let match = null

  while ((match = reg.exec(tpl))) {
    add(tpl.slice(cursor, match.index))(match[1], true)
    cursor = match.index + match[0].length
  }
  add(tpl.substr(cursor, tpl.length - cursor))
  code += 'return r.join("");'
  if (type > 0) {
    data.type = type
  }
  let newData = data

  if (data && data.type > 0) {
    newData = formatParams(data)
  }
  // eslint-disable-next-line no-new-func
  return new Function(code.replace(/[\r\t\n]/g, '')).apply(newData)
}

const poll = (node, callback) => {
  if (callback.isCalled) {
    return
  }

  let isLoaded = false

  if (/webkit/i.test(navigator.userAgent)) {
    // webkit
    if (node['sheet']) {
      isLoaded = true
    }
  } else if (node['sheet']) {
    // for Firefox
    try {
      // node['sheet'].cssRules
      if (node['sheet']) {
        isLoaded = true
      }
    } catch (ex) {
      // NS_ERROR_DOM_SECURITY_ERR
      if (ex.code === 1000) {
        isLoaded = true
      }
    }
  }

  if (isLoaded) {
    // give time to render.
    setTimeout(function () {
      callback()
    }, 1)
  } else {
    setTimeout(function () {
      poll(node, callback)
    }, 1)
  }
}

const styleOnload = (node, callback) => {
  // for IE6-9 and Opera
  if (node.attachEvent) {
    // NOTICE:
    // 1. "onload" will be fired in IE6-9 when the file is 404, but in
    // this situation, Opera does nothing, so fallback to timeout.
    // 2. "onerror" doesn't fire in any browsers!
    node.attachEvent('onload', callback)
  } else {
    // polling for Firefox, Chrome, Safari
    setTimeout(function () {
      poll(node, callback)
    }, 0) // for cache
  }
}

/**
 * 动态插入css链接到页面中
 * @param {*} url css链接地址
 */
const loadStyle = (url, cb) => {
  let link = document.createElement('link')
  let head = document.getElementsByTagName('head')[0]

  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url

  head.appendChild(link)
  styleOnload(link, () => {
    if (typeof cb === 'function') {
      cb(true)
    }
  })
}

/**
 * 通过id,class,tagname获取对应得元素
 * @param {*} str 名称#abc/.abc/div
 */
const $ = (str) => {
  let fstr = str.substr(0, 1)

  switch (fstr) {
    case '#':
      return document.getElementById(str.substr(1))
    case '.':
      return document.getElementsByClassName(str.substr(1))
    default:
      return document.getElementsByTagName(str)
  }
}

/**
 * 指定元素添加\删除\修改样式名称
 * @param {*} element 元素节点
 * @param {*} type 类型
 * @param {*} className 新样式名称
 * @param {*} oldClassName  被删除样式名称
 */
const handleClass = (element, type, className, oldClassName) => {
  if (!element) return false
  let classVal = element && element.getAttribute('class')
  // if (!classVal) return false
  if (classVal === undefined || classVal === null) {
    element.setAttribute('class', '')
    classVal = ''
  }
  if (type === 'delete') {
    // 删除
    classVal = classVal.replace(className, '')
  } else if (type === 'add') {
    // 增加
    classVal = classVal.concat(' ' + className)
  } else {
    // 替换
    classVal = classVal.replace(oldClassName, className)
  }
  element.setAttribute('class', classVal)
}

const getHostUrl = () => {
  let _hosturl = window.location.protocol + '//' + window.location.host

  if (window.location.port) {
    _hosturl = _hosturl + ':' + window.location.port
  }

  return _hosturl
}

/**
 * 显示或者隐藏元素
 */
const displayElement = (element, type = 'none') => {
  if (!element) return false
  if (element.nodeType === 1) {
    element.style.display = type
  } else {
    document.querySelector(element).style.display = type
  }
}

const getCookie = (key) => {
  let cks = document.cookie.split('; ')

  for (let i = 0; i < cks.length; i++) {
    let kv = cks[i].split('=')

    if (kv[0] === key) return kv[1]
  }
  return ''
}

const setCookie = (
  key,
  value,
  domain = window.location.host,
  path = window.location.pathname
) => {
  let text = ''
  if (!key || !value) return
  text += `${key}=${value}`
  if (domain) {
    const [name, yu] = domain.split('.').slice(-2)
    text += `; domain=${name}.${yu}`
  }
  if (path) {
    let newPath = ``
    if (path.length <= 1) {
      newPath = '/'
    } else {
      // /desktop/backend/indexPage/v8/index  取 /desktop
      newPath = `/${path.split('/')[1]}`
    }
    text += `; path=${newPath}`
  }

  document.cookie = text
}

/**
 * 加载js工具代码
 * noRenderJs 是否渲染js到html中
 * */
function loadScript(url, callback, noRenderJs = false) {
  if (noRenderJs) {
    callback(true)
    return
  }
  let script = document.createElement('script'),
    fn = callback || function () {}
  script.type = 'text/javascript'
  // IE
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null
        fn()
      }
    }
  } else {
    // 其他浏览器
    script.onload = function () {
      fn()
    }
  }
  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}

/**
 * 删除需要替换的class
 * @param {*} clsName
 */
const deleteDomByClassName = (clsName) => {
  let paras = document.getElementsByClassName(clsName)

  for (let i = 0; i < paras.length; i++) {
    // 删除元素 元素.parentNode.removeChild(元素);
    if (paras[i] != null) {
      paras[i].parentNode.removeChild(paras[i])
    }
  }
}
/**
 * 删除需要替换的class
 * @param {*} clsName
 */
const clearInnerHtmlById = (id) => {
  let paras = document.getElementById(id)
  paras && (paras.innerHTML = '') // 清空
}

// 删除元素
/**
 * 删除元素
 * @param {*} _element 被删除的元素
 */
const removeElement = (_element) => {
  if (!_element) return false
  const _parentElement = _element.parentNode
  if (_parentElement) {
    _parentElement.removeChild(_element)
  }
}

// 数组去重
const arrUnique = (arr) => {
  let obj = {}
  let res = []
  arr.map((item) => {
    if (!obj[item.title]) {
      res.push(item)
      obj[item.title] = item.title
    }
  })
  return res
}

// 渲染主导航（解决ie浏览器兼容性问题）
const renderNavbarDom = (data = [], dataInfo = {}) => {
  let dom = '',
    fromIndex = 0
  if (dataInfo.position) {
    // 主导航渲染
    fromIndex = Math.floor(data.length / 2)
  }
  data.forEach((item, index) => {
    dom += renderDropdownList(item, index, dataInfo, fromIndex, data.length)
  })
  return dom
}

const getWorkbenchClassName = (identityList = []) => {
  let res = ''
  if (Array.isArray(identityList) && identityList.length >= 2) {
    res = 'has-data'
  }
  return res
}

// 渲染有二级菜单和无二菜单的dom
const renderDropdownList = (item = [], index, dataInfo = {}, fromIndex) => {
  let name = item.name || item.title,
    className = '',
    direction
  // let dom
  item.origin = dataInfo.origin || ''
  item.renderName = dataInfo.renderName || ''
  item.element = dataInfo.element
  item.index = index
  item.current && (className += 'current ')
  dataInfo.isHasChildren = item.children && item.children.length
  dataInfo.isHasChildren && (className += 'has-ul ')
  if (dataInfo.element === 'ebgnav-app-list') {
    // debugger
  }
  if ((fromIndex && fromIndex < item.index) || dataInfo.more) {
    className += 'right'
    direction = true
  } else {
    className += 'left'
  }
  if (item.menuKey === 'workbench') {
    className += ` ${getWorkbenchClassName(dataInfo.identityList)}`
  }
  // 获取不同模块的下拉子菜单箭头（模块箭头朝向不同）
  const arrow = arrowType(dataInfo)
  return `<dd class="ebg-nav-item ${className}" hasChildrenModules="${
    item.hasChildrenModules
  }" index="${index}" fromIndex="${fromIndex}" id="ebg-nav-${
    item.menuKey || index
  }">
          <a class="text-ellipsis" href="javascript:;" title="${name}" index="${fromIndex}">
            ${name}
            ${arrow}
          </a>
          <span class="custom_navbar__content_data" style="display:none">${JSON.stringify(
            item
          )}</span>
          ${renderApplicationNavbarUlList(item, index, dataInfo, direction)}
          </dd>
        `
}
const arrowType = (dataInfo) => {
  let arrowHtml = ''
  if (!dataInfo.isHasChildren) return ''
  if (dataInfo.more) {
    // 导航 “更多”下拉模块
    arrowHtml = '<i class="ebginav inav-user-left"></i>'
  } else if (dataInfo.element === 'ebgnav-app-list') {
    arrowHtml = '<i class="ebginav inav-user-right"></i>'
  } else if (dataInfo.element === 'ebgnav-operation-setting') {
    arrowHtml = '<i class="ebginav inav-user-left"></i>'
  } else {
    arrowHtml = '<i class="ebginav inav-down"></i>'
  }
  return arrowHtml
}
const renderApplicationNavbarUlList = (
  appList,
  parentIndex,
  dataInfo = {},
  direction
) => {
  if (!Array.isArray(appList.children)) return ''
  let resDom = ''
  const data = appList.children
  data &&
    data.forEach((item, index) => {
      item.origin = dataInfo.origin || ''
      item.renderName = dataInfo.renderName || ''
      item.parentIndex = parentIndex
      item.element = dataInfo.element
      item.more = dataInfo.more
      item.index = index
      const hasChildren = item.children && item.children.length,
        arrow = direction
          ? `<i class="ebginav inav-user-left"></i>`
          : `<i class="ebginav inav-user-right"></i>`
      if (item) {
        resDom += `<dd
                class="ebg-nav-item ${item.current ? 'current' : ''} ${
          hasChildren ? ' has-ul' : ''
        }"
                index="${index}"
              >
                <a class="text-ellipsis" title="${
                  item.title
                }" href="javascript:;">
                  ${item.title}
                  ${hasChildren ? arrow : ''}
                </a>
                <span class="custom_navbar__content_data" style="display:none">${JSON.stringify(
                  item
                )}</span>
                ${renderApplicationNavbarUlList(
                  item,
                  item.index,
                  dataInfo,
                  direction
                )}
              </dd>`
      }
    })
  return resDom
    ? `<dl class="children has-children" index="${parentIndex}">${resDom}</dl>`
    : ''
}

// 渲染application应用二级导航（解决ie浏览器兼容性问题）
const renderApplicationNavbar = (appList = [], currentName) => {
  let c = ''
  if (appList.length > 1) {
    c = 'has-ul'
  } else if (appList.length === 1) {
    c = 'app-list-btn'
  }
  return `<div class="ebgnav-app-list ${c}">
    <span class="ebgnav-app-list-separator"></span>
    <a href="javascript:;" class="ebgnav-app-list-current" id="ebgnav-app-current-link-name">
      <span id="ebgnav-app-current-name" class="text-ellipsis" title="${currentName}">${currentName}</span><i class="ebginav inav-down"></i>
    </a>
    <dl class="children" id="ebgnav-app-list-separator-ul"></dl>
    </div>`
}
// 根据当前页面栏目地址匹配导航高亮显示
const getBrowseUrlIdActiveMenu = (navList) => {
  const href = window.location.search
  if (!navList.length || !href) return false
  /**
   * 获取到参数部分，去除问号，如 ?id=2&menu_id=4b
   * 1、去除? => id=2&menu_id=4b
   * 2、分割字符串 "&" 并取数组中的第一位 => ['id=2', 'menu_id=4b']
   * 3、分割字符串 "id=2" => ['id', '2']
   */
  const [id, value] = href.slice(1).split('&')[0].split('=')
  // 判断下最终拿到是否以id开头的数据
  if (!id || id !== 'id' || !value) return false
  navList.forEach((item) => {
    if (item.id === value) {
      item.current = true
    } else {
      item.current = false
    }
  })
}

/**
 * @param {*} _element 元素
 * @param {*} callback 回调函数
 * 通过元素id，监听图片是否加载成功or失败
 */

const loadImg = (_element, callback) => {
  if (!_element) {
    callback(true)
    return
  }
  let res = null
  if (_element.nodeType === 1) {
    res = _element
  }

  if (typeof _element === 'string' && _element.indexOf('http') !== -1) {
    const image = new Image()
    image.src = _element
    res = image
  }
  if (!res) {
    callback(true)
    return
  }
  if (res.readyState) {
    res.onreadystatechange = function () {
      if (res.readyState === 'loaded' || res.readyState === 'complete') {
        res.onreadystatechange = null
        callback()
      }
    }
  } else {
    // 其他浏览器
    res.onload = function () {
      callback()
    }
  }
  res.onerror = function () {
    callback()
  }
}
const typeofChecking = (cc) => {
  let typeName = Object.prototype.toString.call(cc)
  if (typeName === '[object Object]') {
    typeName = '[object' + cc.constructor.name + ']'
  }
  return typeName
}

const getWorkbenchUrl = (menuList, menuKey = 'workbench') => {
  if (!Array.isArray(menuList)) return ''
  let res = {}
  menuList.some((item) => {
    if (item.menuKey === menuKey) {
      res = item
      return true
    }
  })
  return res || {}
}

const getCurrentRole = (dataList = []) => {
  if (!Array.isArray(dataList)) return {}
  let res = {}
  dataList.some((item) => {
    if (item.active) {
      res = item
      return item.active
    }
  })
  return res || {}
}
// 给当前dom下每个li标签添加事件
const traverseDomArr = (el) => {
  let lis
  if (typeofChecking(el) === '[object NodeList]') {
    lis = el
  }
  if (
    typeofChecking(el) === '[object HTMLDivElement]' ||
    typeofChecking(el) === '[object HTMLDListElement]'
  ) {
    lis = el && el.querySelectorAll('dd')
  }
  if (typeofChecking(el) === '[object String]' && el) {
    let _el = document.querySelector(el)
    if (_el) {
      lis = _el.querySelectorAll('dd')
    }
  }
  // 获取当前dom下面的所有li标签
  if (!lis) return false
  for (let i = 0; i < lis.length; i++) {
    let _liItem = lis[i]
    let childrenUl = _liItem && _liItem.querySelector('.has-children')
    let children = childrenUl && childrenUl.querySelectorAll('dd')
    if (children && children.length) {
      traverseDomArr(children)
    }
    traverseNavListEvent(_liItem)
  }
}

const traverseNavListEvent = (el) => {
  el.addEventListener('click', (e) => {
    // 阻止冒泡
    if (e && e.stopImmediatePropagation) {
      e.stopImmediatePropagation()
    } else {
      window.event.cancelBubble = true
    }
    if (e.currentTarget.id === 'ebg-nav-workbench') {
      // 执行workbench跳转
      workbenchEvent()
      return false
    }
    // 获取当前标签是否有子菜单的状态
    const haschildrenmodules = el.getAttribute('haschildrenmodules')
    /*
     * 当前元素有子下拉菜单，将不执行后面的事件 "1的 2没有"
     * 当前元素下面有ul标签，说明有子菜单，将不执行事件 (自定义配置菜单没有haschildrenmodules字段)
     */
    if (haschildrenmodules === '1' || el.querySelector('dl')) return false
    const data = JSON.parse(
      el.querySelector(`.custom_navbar__content_data`).innerText
    )
    commonNavEvent(data, el) // 执行事件
  })
}
const invalidStr = ['#', 'undefined', 'null', 'javascript:;']
// 导航公共事件派发方法
const commonNavEvent = (data, el) => {
  // 获取数据
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    data = el
      ? JSON.parse(el.querySelector(`.custom_navbar__content_data`).innerText)
      : {}
  }

  if (data.url && invalidStr.indexOf(data.url) === -1) {
    // data.url 不等于空或者不等于#,说明是一个正常的url，按照正常链接跳转
    window.open(data.url, data.target || '_self')
  } else {
    if (!data.funcname || invalidStr.indexOf(data.funcname) !== -1) {
      throw new Error('url和funcname不能同时为空,或者值无效，请检查配置数据!')
    }
    window.ebgnavigation.emit(data.funcname, data)
  }
  // 点击菜单后，更新DOM，渲染高亮菜单
  el && navHighlight(data, el)
}
// 导航点击后自动高亮
const navHighlight = (data, el) => {
  const parentEle = document.querySelector(`#${data.element}`),
    childrenList = parentEle.querySelectorAll('dd')
  // 删除所有Li标签current
  deleteAllClassCurrent(childrenList)

  // 判断当前点击的是否是主导航
  if (data.element === 'ebgnav-primaryNavList') {
    const secElement = document.querySelector(`#ebgnav-secondaryNavList`),
      secChildrenList = secElement ? secElement.querySelectorAll('dd') : []
    // 如果点击的是主导航，需要将二级导航的高亮状态 全部清除
    deleteAllClassCurrent(secChildrenList)
  }
  // 根据用户配置是否需要自动高亮
  if (window.ebgnavigation.config.hideLight || data.hideLight) return false
  handleClass(el, 'add', 'current')
  setNavParentCurrent(el, data)
}
const setNavParentCurrent = (el, data) => {
  const node = el.parentNode
  let parent = node && node.parentNode
  if (parent) {
    let parentClassName = parent.getAttribute('class')
    if (!parentClassName || parentClassName.indexOf('current') === -1) {
      handleClass(parent, 'add', 'current')
    }
    const className = parent.getAttribute('class')
    if (className && className.indexOf(data.element) === -1) {
      setNavParentCurrent(parent, data)
    }
  }
}
const deleteAllClassCurrent = (nodeList) => {
  if (!nodeList) return false
  const len = nodeList.length
  for (let i = 0; i < len; i++) {
    let item = nodeList[i]
    let className = item.getAttribute('class')
    if (className && className.indexOf('current') !== -1) {
      handleClass(item, 'delete', 'current')
    }
  }
}

/**
 * @param {url} 绝对域名地址 https://www.xx.com
 * @param {index} 取值位数 ['https://ecstest.ledc.changyan.cn/ebgnavigation/app.html', 'https', '//', 'ecstest.ledc.changyan.cn', undefined, 'ebgnavigation/app.html']
 * @description 通过正则把url match成数组
 */
const getUrlOrigin = (url, index = 3) => {
  const regx =
    /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
  return url.match(regx)[index]
}

const loadNavigationError = (message = '') => {
  window.ebgnavigation.emit('loadNavigationError')
  window.loadNavigationError = 'failed'
  sessionStorage.setItem('loadNavigationError', message)
}
const clearDefaultEmitEvent = () => {
  const type = [
    'loadNavigationError',
    'getNavbarConfigData',
    'navRenderCompleted'
  ]
  type.forEach((item) => {
    sessionStorage.removeItem(item)
    window[item] = null
  })
}
const delProtocol = (url = '') => {
  return url.replace(/^(http|https):/, '')
}

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
const isString = (str) => {
  return typeof str === 'string'
}

const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      // eslint-disable-next-line no-sequences
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  )

export {
  // easyXss,
  loadStyle,
  templateFilter,
  templateRender,
  $,
  handleClass,
  getHostUrl,
  getCookie,
  setCookie,
  deleteDomByClassName,
  clearInnerHtmlById,
  loadScript,
  arrUnique,
  removeElement,
  renderNavbarDom,
  renderApplicationNavbar,
  getBrowseUrlIdActiveMenu,
  loadImg,
  typeofChecking,
  getWorkbenchUrl,
  getCurrentRole,
  traverseNavListEvent,
  traverseDomArr,
  commonNavEvent,
  displayElement,
  getUrlOrigin,
  loadNavigationError,
  clearDefaultEmitEvent,
  getURLParameters,
  delProtocol,
  isObject,
  isString
}
