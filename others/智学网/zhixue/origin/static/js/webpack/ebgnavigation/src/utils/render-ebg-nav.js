import { renderNavbarDom, templateFilter, traverseDomArr } from '../utils/utils'
import { getNavMoreTemplate } from '../template'
/**
 * @param {Element} element 渲染元素
 * @param {Array} navList 需要渲染的菜单数据
 * @param {Object} renderParams 渲染菜单配置数据
 */
let canvas, menuWidth, navList, windowWidth

const renderEbgNav = (element, NavList = [], renderParams = {}) => {
  if (!element) return false
  navList = NavList
  const logoWidth = getLogoWidth('#ebgnav-ebgnavLogobox')
  element.innerHTML = ''
  windowWidth =
    document.body.clientWidth || document.documentElement.clientWidth
  console.log('operation', getLogoWidth('.ebgnav-operation'))
  // 1. 获取菜单可渲染区域宽度
  if (renderParams.element === 'ebgnav-primaryNavList') {
    // 获取主导航菜单渲染宽度
    menuWidth = windowWidth - logoWidth - 280
  } else {
    // 获取应用副导航渲染区域
    let secondaryNameWidth = 0
    if (renderParams.secondaryName) {
      secondaryNameWidth = 200
    }
    menuWidth = windowWidth - secondaryNameWidth
  }
  // 1. 获取菜单可渲染区域宽度
  // 2. 计算当前菜单列表总宽度
  // 3. 菜单宽度 > 渲染宽度，需要渲染 ‘更多’
  const index = isMore(navList)
  if (index !== false) {
    renderMore(element, navList, index, renderParams)
  } else {
    const html = render(navList, renderParams)
    element.insertAdjacentHTML('afterbegin', html)
    traverseDomArr(element)
  }
  // 4. 剩余
}

const render = (list, renderParams) => {
  return renderNavbarDom(list, renderParams)
}

// 渲染带 更多 的导航菜单
const renderMore = (element, list, index, renderParams) => {
  if (!element) return false
  element.insertAdjacentHTML(
    'afterbegin',
    render(list.slice(0, index), renderParams)
  )

  // 插入更多
  element.insertAdjacentHTML('beforeend', templateFilter(getNavMoreTemplate))
  const moreUl = element.querySelector('.more-children')
  renderParams.more = true
  moreUl.insertAdjacentHTML(
    'beforeend',
    render(list.slice(index), renderParams)
  )
  traverseDomArr(element)
}

// 判断不前菜单是事需要渲染更多
const isMore = (list) => {
  // let index = 0,
  let count = 100
  for (let i = 0; i < list.length; i++) {
    count += getTextWith(list[i].title) + 48
    if (menuWidth <= count) {
      return i
    }
  }
  return false
}

// 获取当前菜单实际渲染的px宽度，如果这个宽度大于菜单可渲染的宽度，这个时候需要渲染 更多，将剩余的菜单放到更多里，以下拉列表形式展现
const getTextWith = (text, fontStyle = '14px/1.6 "Microsoft Yahei"') => {
  canvas = canvas || document.createElement('canvas')
  const context = canvas.getContext('2d')
  context.font = fontStyle
  return context.measureText(text).width
}
// 获取导航实现菜单可渲染宽度
function getLogoWidth(element) {
  const ebgnavLogobox = document.querySelector(element)
  const w = ebgnavLogobox ? ebgnavLogobox.offsetWidth : 200
  // 555 是logo最大支持宽度，ie浏览器在会存在获取logo宽度异常
  return w > 555 ? 555 : w // 解决IE兼容问题
}

export { renderEbgNav }
