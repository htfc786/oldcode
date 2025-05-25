/**
 * 更新日志：
 * 1.0.0 基础渲染数据功能 @20200707
 * 1.0.1 增加动态渲染资源位、动态设置高亮、菜单项自定义事件等功能 @20200904
 * 1.0.2 增加用户隐私、应用搜索、部分接口改造、门户身份切换，集成用户退出，右则浮动菜单等功能。
 */
// import '@babel/polyfill'
import * as utils from './utils/utils'
import { $ } from './utils/utils'
import * as old from './utils/old'
import * as tools from './utils/tools'
import { config, base, apiUrl, tpl } from './constant'
import ajax from './utils/http'
import { appClick } from './utils/app-auth' // 应用权限
import { getAllAppsData } from './components/search/index' // 搜索
import { bindLogout } from './utils/logout' // 退出
import { renderUserSetting } from './components/user-setting' // 渲染右侧用户中心相关模块
import { noData, defaultAppImg } from './utils/img' // 图片base64地址
import {
  renderAppList,
  renderPrimaryNav,
  renderSettingList,
  renderSecondaryNav,
  renderSecondaryName
} from './render'
import guidanceEntry from './components/guidance/index'
import $ebg from './components/message'
import { qtInit, isQtNavEmpty, renderCommonNav } from './qt'
import './assets/css/ebgnavigation.less'
// 兼容ie
if (!window.console) {
  window.console = {
    log: function (msg) {},
    err: function (msg) {}
  }
}
if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    'use strict'
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    target = Object(target)
    for (let index = 1; index < arguments.length; index++) {
      let source = arguments[index]

      if (source != null) {
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
    }
    return target
  }
}

const setOptions = (options) => {
  if (utils.isObject(options)) {
    if (options.type === 'application') {
      config.type = options.type
    }
    if (options.hideLight) {
      config.hideLight = options.hideLight
    }
    if (options.hideRole) {
      config.hideRole = options.hideRole
    }
    if (options.notloginHideNavBar === true) {
      config.notloginHideNavBar = options.notloginHideNavBar
    }
    if (options.test) {
      config.test = options.test
    }
    if (options.primaryNav && typeof options.primaryNav === 'object') {
      config.primaryNav.appLogo = options.primaryNav.appLogo
      config.primaryNav.subtitle = options.primaryNav.subtitle
      config.primaryNav.platformLogo = options.primaryNav.platformLogo
      config.primaryNav.platformName = options.primaryNav.platformName
      if (options.primaryNav.logoLink) {
        config.primaryNav.logoLink = options.primaryNav.logoLink
      }
      if (options.primaryNav.appLogoLink) {
        config.primaryNav.logoLink = options.primaryNav.appLogoLink
      }
      if (options.primaryNav.logoLinkTarget === '_blank') {
        config.primaryNav.logoLinkTarget = options.primaryNav.logoLinkTarget
      }
      if (options.primaryNav.appName) {
        config.primaryNav.appName = options.primaryNav.appName
      }
      if (options.primaryNav.logoEvent) {
        config.primaryNav.logoEvent = options.primaryNav.logoEvent
      }
      if (Array.isArray(options.primaryNav.platformNavList)) {
        config.primaryNav.platformNavList = options.primaryNav.platformNavList
      }
      if (Array.isArray(options.primaryNav.appList)) {
        config.primaryNav.appList = options.primaryNav.appList
      }
      if (Array.isArray(options.primaryNav.appNavList)) {
        config.primaryNav.appNavList = options.primaryNav.appNavList
      }
    }
    if (options.secondaryNav && options.secondaryNav.secondaryName) {
      config.secondaryNav.secondaryName = options.secondaryNav.secondaryName
    }
    if (
      options.secondaryNav &&
      Array.isArray(options.secondaryNav.secondaryNavList)
    ) {
      config.secondaryNav.secondaryNavList =
        options.secondaryNav.secondaryNavList
    }
    if (options.operation && Array.isArray(options.operation.settingList)) {
      config.operation.settingList = options.operation.settingList
    }
  }
}
const getCurrentTheme = () => {
  let _theme
  if (!base.themeList.length) {
    base.themeList = setThemeConfig() || []
  }
  base.themeList.some((item) => {
    if (item.id === base.themeDefault) {
      _theme = item
      return true
    }
  })
  base._theme = _theme
}

const setFaviconIco = (logo) => {
  if (!logo) return false
  let newUrl = utils.delProtocol(logo)
  // 插入新的标签页icon前，先将原先的icon DOM删除
  let link = document.getElementsByTagName('link'),
    linkLen = link.length
  for (let i = 0; i < linkLen; i++) {
    const linkItem = link[i]
    let rel = linkItem && linkItem.getAttribute('rel')
    if (rel && rel.indexOf('icon') !== -1) {
      utils.removeElement(linkItem)
    }
  }
  // 插入新的标签页icon
  let newLink = document.createElement('link')
  newLink.type = 'image/x-icon'
  newLink.rel = 'shortcut icon'
  newLink.href = newUrl + `?t=${Date.now()}`
  document
    .getElementsByTagName('head')[0]
    .insertAdjacentElement('beforeend', newLink)
}

/**
 * 设置浏览器标签页logo
 */
const renderFavicon = () => {
  if (!base._theme) {
    getCurrentTheme()
  }
  if (!base._theme.icoUrl) return false
  setFaviconIco(base._theme.icoUrl)
}

const getCurrentLogo = () => {
  if (!base._theme) return ''
  return config.type === 'platform'
    ? config.primaryNav.platformLogo || base._theme.platformLogo
    : config.primaryNav.appLogo || base._theme.appLogo
}

/**
 * 渲染logo区域
 * 区分平台和应用
 */
const renderLogo = (delOldDom = false) => {
  if (window.qt) {
    renderAppList()
    // 渲染主导航
    renderPrimaryNav()
    utils.handleClass(
      document.querySelector('.ebgnav-app-list-separator'),
      'add',
      'hide'
    )
    utils.handleClass(document.querySelector('#ebgnav-logo'), 'add', 'hide')
  } else {
    // 获取导航配置
    if (!base._theme) {
      getCurrentTheme()
    }
    // 根据平台类型，取到对应的logo
    config.primaryNav.logo = utils.delProtocol(getCurrentLogo())
    const ebgnavLogoboxDom = $('#ebgnav-logo')
    if (!ebgnavLogoboxDom) return false
    if (delOldDom) {
      ebgnavLogoboxDom.innerHTML = ''
      renderAppList()
    }
    let logoLink = config.primaryNav.logoLink || 'javascript:;'
    if (config.type === 'application') {
      // 应用logo
      ebgnavLogoboxDom.insertAdjacentHTML(
        'afterbegin',
        utils.templateRender(tpl.applicationLogoTemp, {
          logoSrc: config.primaryNav.logo,
          subtitle: config.primaryNav.subtitle,
          appName: config.primaryNav.appName || '',
          logoLink,
          logoLinkTarget: config.primaryNav.logoLinkTarget || '_self'
        })
      )
      // 渲染主导航
      renderPrimaryNav()
    } else {
      logoLink = config.primaryNav.logoLink || base._theme.logoLink
      // 平台logo
      ebgnavLogoboxDom.insertAdjacentHTML(
        'afterbegin',
        utils.templateRender(tpl.platformLogoTemp, {
          logoSrc: config.primaryNav.logo,
          name: config.primaryNav.platformName,
          logoLink,
          logoLinkTarget: config.primaryNav.logoLinkTarget || '_self'
        })
      )
      // 需要等到logo加载完成后执行渲染主导航
      const ebgnavigationLogo = document.querySelector('#ebgnavigationLogo')
      renderPrimaryNav()
      utils.loadImg(ebgnavigationLogo, function () {
        // 渲染主导航
        if (ebgnavigationLogo && ebgnavigationLogo.clientWidth >= 130) {
          console.log(ebgnavigationLogo.clientWidth)
          renderPrimaryNav()
        }
      })
    }
    setLogoEvent()
  }
}

const setLogoEvent = () => {
  if (!config.primaryNav.logoLink && config.primaryNav.logoEvent) {
    // 给导航添加事件
    const LogoEventDom = document.querySelector('#logo-event')
    LogoEventDom &&
      LogoEventDom.addEventListener('click', (e) => {
        e.stopPropagation()
        /** *
         * 是否配置app logo 跳转地址
         * 这里有几种场景
         * 1，配置了 logoLink, 优先级最高，这个配了，就直接忽略其它场景
         * 2，配置了logo的点击事件
         * 3，没有配置跳转地址（直接从接口获取首页地址）
         */
        // 是否配置了logo自定义事件
        if (typeof config.primaryNav.logoEvent === 'object') {
          window.ebgnavigation.emit(
            config.primaryNav.logoEvent.funcname,
            config.primaryNav.logoEvent.property
          )
        } else if (typeof config.primaryNav.logoEvent === 'string') {
          window.ebgnavigation.emit(config.primaryNav.logoEvent)
        }
      })
  }
}

// 退出点击事件方法
const LogoutBtnEvent = (settings = []) => {
  const loginBtn = document.querySelector('.logout-btn')
  loginBtn &&
    loginBtn.addEventListener('click', () => {
      let logoutUrl = {}
      settings.some((item) => {
        logoutUrl = item
        return item.key === 'user-logout'
      })
      if (logoutUrl.key) {
        bindLogout(logoutUrl.url)
      } else {
        console.error('退出失败', logoutUrl)
      }
    })
}
// 显示搜索
const showSearch = () => {
  getAllAppsData(apiUrl, base)
}

// 应用访问权限
const addAppEvent = () => {
  const showSearchBtn = document.getElementById('show-search')
  const dom = document.getElementById('ebgnav-defaultApplications')
  const ul = dom.getElementsByTagName('ul')[0]
  const li = ul && ul.getElementsByTagName('li'),
    len = li && li.length
  if (len) {
    for (let i = 0; i < len; i++) {
      let item = li[i].getElementsByTagName('a')[0]
      let id = item.getAttribute('data-appid'),
        name = item.getAttribute('title'),
        url = item.getAttribute('href'),
        target = item.getAttribute('target'),
        appendParam = item.getAttribute('append-param')
      item.onclick = (e) => {
        e.preventDefault()
        appClick({
          id,
          name,
          url,
          target,
          hosturl: base.hosturl,
          apiUrl: apiUrl,
          appendParam
        })
      }
    }
  }
  showSearchBtn.addEventListener('click', showSearch)
}

/**
 * 渲染默认推荐应用
 */
const renderApplications = () => {
  if (
    Array.isArray(base.applicationsList) &&
    base.applicationsList.length > 0
  ) {
    $('#ebgnav-defaultApplications').innerHTML = utils.templateRender(
      tpl.appIconListTemp,
      base.applicationsList
    )
  } else {
    // 渲染暂无数据
    $(
      '#ebgnav-defaultApplications'
    ).innerHTML = `<div class="no-app-data"><img src="${noData}" /><p class="text">管理员还没有设置常用应用</p></div>`
  }
  addAppEvent() // 应用访问权限
}

/**
 * 渲染用户信息
 */
const renderUserInfo = () => {
  if (base.user.userId) {
    $('#ebgnav-navUserinfo').innerHTML = utils.templateRender(
      tpl.navUserTemp,
      base.user
    )
    $('#ebgnav-detailUserinfo').innerHTML = utils.templateRender(
      tpl.detailUserTemp,
      base.user
    )
    utils.handleClass($('#ebgnav-box'), 'delete', 'render')
  }
}

/**
 * 渲染登录按钮
 */
const renderLoginBtn = (themeId) => {
  let cla = 'ebg-button ebg-button--small'
  if (themeId === '1' || themeId === '2') {
    cla += ' ebg-button--primary'
  }
  const loginbtn = document.querySelector('.ebgnav-operation-loginbtn'),
    aLink = loginbtn && loginbtn.children[0]
  if (aLink) {
    aLink.href = `${base.hosturl || ''}/desktop/login`
    aLink.setAttribute('class', cla)
    console.log(aLink)
    loginbtn.style.display = 'block'
  }
}

/**
 * 判断当前元素是否包含某个class
 */
const isHasCurrentClassName = (el, className) => {
  if (!className || !el) return false
  const names = el.getAttribute('class')
  return names.indexOf(className) !== -1
}

/**
 * 渲染设置皮肤
 */
const renderTheme = (themeId) => {
  const ebgnavBox = $('#ebgnav-box')
  // 用户没有设置，接口处也没有获取到，则使用默认主题
  let _theme = getCurrentThemeId(themeId)
  switch (_theme) {
    case 'themeblue':
      if (isHasCurrentClassName(ebgnavBox, 'themeblue')) return false
      utils.handleClass(ebgnavBox, 'add', 'themeblue')
      utils.handleClass(ebgnavBox, 'delete', 'themedark')
      utils.handleClass(ebgnavBox, 'delete', 'themegreen')
      utils.handleClass(ebgnavBox, 'delete', 'default')
      break
    case 'themedark':
      if (isHasCurrentClassName(ebgnavBox, 'themedark')) return false
      utils.handleClass(ebgnavBox, 'add', 'themedark')
      utils.handleClass(ebgnavBox, 'delete', 'themegreen')
      utils.handleClass(ebgnavBox, 'delete', 'themeblue')
      utils.handleClass(ebgnavBox, 'delete', 'default')
      break
    case 'themegreen':
      if (isHasCurrentClassName(ebgnavBox, 'themegreen')) return false
      utils.handleClass(ebgnavBox, 'add', 'themegreen')
      utils.handleClass(ebgnavBox, 'delete', 'themeblue')
      utils.handleClass(ebgnavBox, 'delete', 'default')
      utils.handleClass(ebgnavBox, 'delete', 'themedark')
      break
    default:
      if (isHasCurrentClassName(ebgnavBox, 'default')) return false
      utils.handleClass(ebgnavBox, 'add', 'default')
      utils.handleClass(ebgnavBox, 'delete', 'themegreen')
      utils.handleClass(ebgnavBox, 'delete', 'themeblue')
      utils.handleClass(ebgnavBox, 'delete', 'themedark')
  }
}
const renderStyleModule = (res, isSwitchRole) => {
  // 未登录
  if (!res.user) {
    // 渲染登录按钮
    renderLoginBtn(res.navigationConfig && res.navigationConfig.positionTheme)
    document.querySelector('.ebgnav-operation-setting').style.display = 'none'
    $('.ebgnav-operation-userinfo')[0].style.display = 'none'
  }
  if (config.type === 'platform') {
    $('.ebgnav-secondary')[0].style.display = 'none'
    $('#ebgnav-isPlatform').style.display = 'none'
    if (window.qt) {
      utils.handleClass(document.querySelector('#ebgnav-box'), 'add', 'hide')
      return false
    }
  } else {
    $('#ebgnav-isPlatform').style.display = 'block' // 应用导航，在更多应用里面显示首页、门户入口
    // 齿轮图标下拉菜单(应用导航)
    renderSettingList()
    // 渲染应用副列表 (应用导航)
    renderAppList()
    // 渲染应用二级导航名称
    renderSecondaryName()
    // 渲染应用二级副导航
    renderSecondaryNav()
  }
  renderModule(res, isSwitchRole)
}
/**
 * 渲染框架到页面中
 */
const render = (callback) => {
  // 域名需要配置成动态的
  utils.loadStyle(
    `${base.hosturl}/ebgnavigation/css/ebgnavigation.min.css`,
    () => {
      const ebgnavBoxContainer = document.querySelector('#ebgnav-box')
      if (ebgnavBoxContainer) {
        utils.removeElement(ebgnavBoxContainer)
      }
      document.body.insertAdjacentHTML(
        'afterbegin',
        utils.templateRender(tpl.baseTemp, config)
      )
      utils.handleClass(
        document.querySelector('#ebgnav-box'),
        'add',
        config.type || 'platform'
      )
      _onresize()
      callback()
    }
  )
}

const getCurrentThemeLogoInfo = (menus, { themes, positionTheme }) => {
  const data = themes,
    id = positionTheme
  if (id && data.length) {
    base.themeDefault = id
    base.themeList = setThemeConfig()
    renderFavicon()
    renderLogo()
  }
}

/**
 * 设置默认皮肤名称
 * @param {*} value 值
 * @param {*} isSetting 用户设置
 */
const getCurrentThemeId = (value) => {
  let _theme = 'default'
  switch (value) {
    case '1':
      _theme = 'themedark'
      base.themeDefault = value
      break
    case '3':
      _theme = 'themeblue'
      base.themeDefault = value
      break
    case '4':
      _theme = 'themegreen'
      base.themeDefault = value
      break
    default:
      _theme = 'default'
      base.themeDefault = value
  }
  base._themeId = _theme
  return _theme
}

/**
 * 设置自定义导航
 * @param {*} list 导航列表
 */
const setPlatformNavList = (list) => {
  if (list && list.length > 0) {
    let _list = list
    let newNavList = []
    for (let i = 0; i < _list.length; i++) {
      let item = {}
      item.title = _list[i].moduleName
      item.url = _list[i].moduleUrl
      item.hasChildrenModules = _list[i].hasChildrenModules
      if (_list[i].childrenModules && _list[i].childrenModules.length > 0) {
        item.children = []
        let _childrens = _list[i].childrenModules
        for (let j = 0; j < _childrens.length; j++) {
          item.children[j] = {}
          item.children[j].title = _childrens[j].moduleName
          item.children[j].url = _childrens[j].moduleUrl
        }
      }
      newNavList.push(item)
    }
    base.platformNavList = newNavList
  }
}
const getDesktopLink = (menus) => {
  let logoLink = ''
  menus.some((item) => {
    if (item.menuKey === 'desktop') {
      logoLink = item.url
      return true
    }
  })
  return logoLink
}
/**
 * 设置皮肤数据
 * @param {*} themeList 皮肤列表
 */
const setThemeConfig = () => {
  const newList = []
  if (base.themeList.length > 0) return base.themeList
  if (!(base.navbarConfig && base.navbarConfig.navigationConfig)) return newList
  const themeList = base.navbarConfig.navigationConfig.themes
  if (themeList && themeList.length > 0) {
    let _list = themeList
    let logoLink = getDesktopLink(base.navbarConfig.menus)
    for (let i = 0; i < _list.length; i++) {
      let item = {}
      const itemData = _list[i]
      item.id = itemData.id
      item.name = itemData.name
      item.platformLogo = itemData.platformLogoUrl
      item.appLogo = itemData.appLogoUrl
      item.logoLink = `${logoLink}`
      item.icoUrl = itemData.iconUrl
      newList.push(item)
    }
  }
  base.themeList = newList
  return newList
}
/**
 * 设置默认应用
 * @param {*} applicationslist 应用列表
 */
const setApplicationsList = (data = {}) => {
  const dlDom = document.getElementById('ebgnav-defaultApplications')
  dlDom &&
    dlDom.insertAdjacentHTML(
      'afterbegin',
      '<p style="text-align: center">加载中……</p>'
    )
  let dataLen = data.cloudNavApps.length
  if (Array.isArray(data.cloudNavApps) && data.cloudNavApps.length > 0) {
    let _array = []
    data.cloudNavApps.forEach((item) => {
      // 检查当前列表中所有图片，有加载异常的需要替换成默认图片
      utils.loadImg(item.icon, function (err) {
        let _item = {}
        _item.appName = item.short_name
        _item.url = item.url
        _item.id = item.id
        if (err) {
          _item.src = defaultAppImg
        } else {
          _item.src = utils.delProtocol(item.icon)
        }
        _array.push(_item)
        if (dataLen === _array.length) {
          base.applicationsList = _array
          renderApplications()
        }
      })
    })
  } else {
    renderApplications()
  }
}
/**
 * 设置用户信息
 * @param {*} userInfo 用户信息
 */
const setUserInfo = (userInfo) => {
  if (userInfo) {
    base.user.userName = userInfo.name
    base.user.userPhoto =
      utils.delProtocol(userInfo.userPhoto) || base.defaultAvatar // 用户未设置头像就用默认头像
    base.user.loginName = userInfo.username
    base.user.userId = userInfo.id
    renderUserInfo()
  }
}
// .menus, res.identityList
const renderAppBtn = ({ menus = [], identityList = [], roleInfo = {} }) => {
  if (config.type !== 'application') return false
  let count = 0
  let platform = ''
  menus &&
    menus.forEach((item) => {
      // 默认应用 （首页/个人门户）
      if (item.menuKey === 'index') {
        count++
        platform += `<dd><a href="${item.url}" target="_blank">${item.name}</a></dd>`
      }
      if (item.menuKey === 'workbench') {
        count++
        // 获取当前用户的教师角色id
        const cur = utils.getCurrentRole(identityList)
        item.url = `${item.url}&tarIdentity=${cur.identity || ''}&roleType=${
          roleInfo.currentRole
        }`
        platform += `<dd><a href="${item.url}" target="_blank">${item.name}</a></dd>`
      }
    })
  // 默认应用 （首页/个人门户）
  const el = $('#ebgnav-isPlatform')
  if (el && platform) {
    el.insertAdjacentHTML(
      'afterbegin',
      `<dl class="clearfix ${count > 1 ? 'two' : 'one'}">${platform}</dl>`
    )
  }
}

// 给接口获取到的菜单设置协议 (后面强制加的逻辑)
const mainMenuAddHttps = (data) => {
  if (Array.isArray(data)) {
    let host
    if (base.hosturl) {
      host = base.hosturl.replace('http://', 'https://')
    } else {
      host = old.getJsonpHostInScript(old.getCurrentScript().src)
    }
    data &&
      data.forEach((item) => {
        // 带协议的域名不需要做处理
        if (item.url.indexOf('http') !== -1) return false
        // 退出不需要做处理
        if (item.key === 'user-logout') return false
        item.url = `${host}${item.url}`
      })
  }
}

const initNavbarConfigData = (res, isSwitchRole) => {
  res.identityInfo = res.identityList
  window.getNavbarConfigData = res
  sessionStorage.setItem('getNavbarConfigData', JSON.stringify(res))
  window.ebgnavigation.emit('getNavbarConfigData', res)
  const user = res.user || {}
  if (config.notloginHideNavBar === true && !user.id) {
    console.log('根据用户配置，未登录时，将不显示导航')
    utils.loadNavigationError('根据用户配置，未登录时，将不显示导航')
  } else {
    mainMenuAddHttps(res && res.menus) // 将菜单转换成https
    mainMenuAddHttps(res && res.settings) // 将设置下拉菜单转换成https
    // 追加带二级菜单的数据(平台配置的导航)
    setPlatformNavList(res.navigationConfig.platformMoudles || [])
    base.navbarConfig = res
    render(() => {
      renderStyleModule(res, isSwitchRole)
    }) // 初始化渲染
    // _onresize()
  }
}

/**
 * 请求接口获取其他配置
 */
const ajaxGetOtherConfig = (isSwitchRole) => {
  window.getNavbarConfigData = null
  ajax({
    type: 'GET',
    jsonp: 'jsonpCallback2' + Date.now(),
    data: {
      platformSet: true,
      ticket: base.ticket,
      service: 'http://ebgnavigation'
    },
    time: 5000,
    url: base.hosturl + '/desktop/backend/api/portal/navbarConfig',
    success: (res = {}) => {
      initNavbarConfigData(res, isSwitchRole)
      base.navbarConfig = res
    },
    error: () => {
      // 派发导航加载失败事件
      utils.loadNavigationError('navbarConfig接口异常')
    }
  })
}
const renderModule = (res, isSwitchRole) => {
  // 追加menus菜单
  if (res.menus.length) {
    config.primaryNav.platformNavList = res.menus
  }
  if (res.navigationConfig && res.navigationConfig.positionTheme) {
    // 设置主题
    renderTheme(res.navigationConfig.positionTheme)
    // 根据主题获取对应的Logo
    getCurrentThemeLogoInfo(res.menus, res.navigationConfig)
  }
  // 以下模块只有登录后才需要加载, 并且需要依赖当前接口返回的数据
  if (res.user) {
    // 加载feedback模块
    // setLoadFeedback(res, base.hosturl)

    // 设置应用 个人门户、平台首页按钮跳转
    res.menus.length && renderAppBtn(res)
    // 用户信息设置
    setUserInfo(res.user)

    if (isSwitchRole !== 'switchRole') {
      // 新手指引
      guidanceEntry(res.user, base.hosturl)
    }
    // 渲染用户设置信息列表
    renderUserSetting(res, base, config)
    // 用户中心消息和退出点击事件方法
    LogoutBtnEvent(res.settings)
    // 获取推荐应用
    moreApplicationEvent()
  }
}

const moreApplicationEvent = () => {
  document.querySelector('.ebgnav-operation-appentry').style.display = 'block'
  const appentry = document.querySelector('.ebgnav-operation-appentry')
  let status = false
  appentry &&
    appentry.addEventListener('mouseenter', () => {
      if (!status) {
        console.log('ebgnav-operation-appentry')
        ajaxGetDefaultApp()
        status = true
      }
    })
}
const ajaxGetDefaultApp = () => {
  ajax({
    type: 'GET',
    jsonp: 'jsonpCallback8',
    url: `${base.hosturl}/desktop/backend/api/portal/navAppVos`,
    success: (res) => {
      setApplicationsList(res)
    }
  })
}

const resizeChange = tools.debounce(() => {
  console.log('ebgnavigation debounce')
  renderPrimaryNav()
  if (config.type === 'application') renderSecondaryNav()
}, 200)

/**
 * 监听浏览器窗口大小变化并作出响应
 */

const _onresize = () => {
  // base.clientWidth = document.body.clientWidth || document.documentElement.clientWidth
  window.removeEventListener('resize', resizeChange)
  window.addEventListener('resize', resizeChange, false)
}

/**
 * 判断是否是本地应用，如果是将不加载导航
 */
const isLocalAppPlatform = (localUrl, scriptUrlHostname) => {
  const hostname = utils.getUrlOrigin(localUrl, 3)
  return !hostname || !hostname.includes(scriptUrlHostname)
}
const realJsonpHostHandle = (localUrl, ebgUrl, fn) => {
  const localProtocol = localUrl.split('//')[0]
  const browseProtocol = window.location.protocol
  let isReload = false // 用于判断是否需要重新加载JS
  let isLocal = false // 用于判断是否是本地应用
  const scriptUrlHostname = utils.getUrlOrigin(ebgUrl, 3).replace(/^www./, '') // 获取到当前加载导航JS地址的hostname
  if (localProtocol === 'http:' && browseProtocol === 'https:') {
    isLocal = isLocalAppPlatform(localUrl, scriptUrlHostname)
    localUrl = ebgUrl
  }
  const isSame = localUrl.indexOf(scriptUrlHostname) === -1
  if (isSame && localUrl !== ebgUrl) {
    isReload = true
  }
  fn(localUrl, isReload, isLocal)
}
function getSSOStatus(ssoUrl, hosturl, fn) {
  ajax({
    type: 'GET',
    url: ssoUrl + '/login',
    jsonp: 'jsonpLogin' + Date.now(),
    data: {
      crossDomain: true,
      needAttribute: true,
      service: 'http://ebgnavigation'
    },
    success: function (data) {
      // 万兴说的不会失败，失败了找他
      if (data && typeof data === 'string') {
        try {
          data = JSON.parse(data)
          if (data.code === 1001) {
            // 已经登录了
            base.ticket = data.data.st
            fn(hosturl)
            return false
          }
          // 如果调用平台sso失败，则尝试调用中心sso
          // centerSsoUrl 中心SSO地址
          base.ssoRequestNum++
          if (base.ssoCenterUrl && base.ssoRequestNum <= 2) {
            getSSOStatus(base.ssoCenterUrl, hosturl, fn)
          } else {
            // 未登录
            base.hosturl = hosturl
            ajaxGetOtherConfig()
          }
        } catch (e) {
          // 未登录
          base.hosturl = hosturl
          ajaxGetOtherConfig()
        }
      }
    },
    error: function () {
      utils.loadNavigationError('sso接口异常')
    }
  })
}
// triggerLoginResult 回调函数
window.triggerLoginResult = function () {}

// 登录后重定向
function getTriggerlogin(validUrl, fn) {
  const script = document.createElement('script')
  script.src =
    validUrl +
    '/desktop/backend/api/portal/triggerLogin.do?callback=triggerLoginResult'
  document.body.appendChild(script) // 插入页面之后才会发起请求
  script.onload = function () {
    fn && fn()
    script.parentNode.removeChild(script)
  }
  script.onerror = function () {
    fn && fn()
    script.parentNode.removeChild(script)
  }
}
const getConfig = (validUrl, fn) => {
  ajax({
    type: 'GET',
    jsonp: 'jsonpCallback15' + Date.now(),
    url: validUrl + '/desktop/backend/login/sso/config',
    success: (data) => {
      if (data['sso.server']) {
        base.ssoCenterUrl = data['sso.center.server']
        fn(data['sso.server'])
      }
    },
    error: () => {
      if (window.qt) {
        initNavbarConfigData({})
      } else {
        utils.loadNavigationError('sso/config接口异常')
      }
    }
  })
}

const getIsSuccess = (validUrl, fn) => {
  ajax({
    type: 'GET',
    jsonp: 'jsonpCallback12',
    data: {
      platformSet: true,
      service: 'http://ebgnavigation',
      ticket: base.ticket
    },
    url: validUrl + '/desktop/backend/api/portal/navbarConfig',
    time: 5000,
    success: (res) => {
      base.navbarConfig = res
      window.ebgnavigationUser = res.user
      old.reloadNav(config, res, validUrl)
      return false
    },
    error: () => {
      // 如果走到这里，说明不支持新导航，加载老导航
      if (window.qt) {
        initNavbarConfigData({})
      } else {
        console.log('navbarConfig接口调不通，加载导航失败')
        utils.loadNavigationError()
        return false
      }
    }
  })
}

/**
 * 获取平台信息
 */
const getPlatformStatus = (cb) => {
  if (window.qt) {
    cb(true)
    return false
  }
  let currentScript = old.getCurrentScript()
  let _src = currentScript && currentScript.src
  if (base.hosturl) {
    _src = base.hosturl
  }
  old.getJsonpHost(_src, null, (url) => {
    let isPlatform = !!url
    if (cb && typeof cb === 'function') {
      cb(isPlatform)
    }
  })
}

const getJsonpHostUrl = (fn) => {
  let currentScript = old.getCurrentScript()
  let _src = currentScript && currentScript.src
  // 将页面获取到的新导航js url地址保存起来，后面某些场景需要用到
  base._src = _src
  old.getJsonpHost(_src, null, (url) => {
    if (!url) {
      // 获取当前引入JS的URL地址或浏览器的地址
      base.hosturl = old.getJsonpHostInScript(_src)
    } else {
      // 已登录
      base.hosturl = url
    }
    // 判断本地平台域名是否是http的，并且浏览器的协议是否是https的， 如果是的话，直接走默认逻辑 false 走下一步
    // 下一步，判断接口的域名是否和引入js的域名加协议是否一致，不一至的话，取接口的地址重新加载js
    realJsonpHostHandle(
      base.hosturl,
      old.getJsonpHostInScript(_src),
      (validUrl, local, breakEb) => {
        if (breakEb) {
          console.log('应用为本地应用，加载导航失败')
          // window.ebgnavigation.emit('loadNavigationError')
          if (window.qt) {
            initNavbarConfigData({})
          } else {
            utils.loadNavigationError()
            return false
          }
        }
        // 获取sso url
        getConfig(validUrl, (ssoUrl) => {
          // 获取登录状态
          getSSOStatus(ssoUrl, validUrl, () => {
            // 登录重定向
            getTriggerlogin(validUrl, () => {
              /**
               * @param {*} validUrl 有效的域名地址
               * @param {*} local 用于判断是否需要重新加载导航js, local为true里，需要用有效的域名地址重新加载导航js
               * 当走到这里时，说明需要把导航Js的地址换成接口入获取的地址，重新加载导航js
               * 加载js前，需要通过调个接口判断新的导航url是否能正常加载
               */
              if (local) {
                // reload JS
                window.ebgnavigation.emit('reloadEbgnavigation')
                getIsSuccess(validUrl)
              } else {
                let hosturl = validUrl
                // 强制使用https访问
                base.hosturl = hosturl
                // 取url最后一位，看是否带/
                const t = base.hosturl.charAt(base.hosturl.length - 1)
                const len = base.hosturl.length
                // 如果带/，统一删除处理
                base.hosturl =
                  t === '/' ? base.hosturl.substring(0, len - 1) : base.hosturl
                fn && fn()
              }
            })
          })
        })
      }
    )
  })
}
const changeListCurrentItem = (list, title) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    if (element.title === title) {
      element.current = true
    } else {
      element.current = false
    }
  }
}

const validateData = (data, api) => {
  api = api ? `${api} ` : ''
  if (!Array.isArray(data)) {
    $ebg.message(`${api}API仅支持Array类型数据`, 'error', 3000)
    return false
  }
  // 缓存多次操作
  setTimeout(() => {
    // 用户动态设置完成后，判断下导航是否有数据，如果无则隐藏导航
    isQtNavEmpty()
  }, 20)
  return true
}
const getUrlDefaultParam = () => {
  const currentScript = old.getCurrentScript()
  const url = currentScript && currentScript.src
  if (typeof url !== 'string' || !url) return {}
  const params = utils.getUrlOrigin(url, 6) || '' // 获取url后面的参数
  let obj = {}
  const list = params.split('&')
  list.forEach((item) => {
    const [key, value] = item.split('=')
    obj[key] = value
  })
  return obj
}
const setDefaultApplication = (init, options) => {
  config.type = options.type
  if (options.appName) {
    config.primaryNav.appName = decodeURIComponent(options.appName)
  }
  if (options.subtitle) {
    config.primaryNav.subtitle = decodeURIComponent(options.subtitle)
  }
  if (options.appLogo) {
    config.primaryNav.appLogo = options.appLogo
  }
  if (options.logoLink) {
    config.primaryNav.logoLink = options.logoLink
  }
  if (options.logoLinkTarget === '_blank') {
    config.primaryNav.logoLinkTarget = options.logoLinkTarget
  }
  if (options.logoEvent) {
    config.primaryNav.logoEvent = options.logoEvent
  }
  if (options.hideLight === 'true') {
    config.hideLight = true
  }
  if (options.hideRole === 'true') {
    config.hideRole = true
  }
  if (options.notloginHideNavBar === 'true') {
    config.notloginHideNavBar = true
  }
  if (options.platform === 'true') {
    // 是否来自于平台
    config.platform = true
    ebgnavigation.getPlatform((f) => {
      if (!f) {
        utils.loadNavigationError('不是来自平台，直接走catch逻辑')
      } else {
        init(config)
      }
    })
  } else {
    init(config)
  }
}

const queue = () => {
  if (!base.queueTimer) {
    base.queueTimer = true
    setTimeout(() => {
      renderLogo(true)
      base.queueTimer = null
    }, 20)
  }
}
const setSearchParams = (url, value = 'production') => {
  if (!url) return ''
  let urlObj = new URL(url)
  // 设置或更新参数值
  urlObj.searchParams.set('szjzsaas', value)
  // 获取更新后的URL字符串
  return urlObj.toString()
}
class Ebgnavigation {
  constructor(events) {
    this.name = 'ebgnavigation'
    this.update = new Date()
    this.events = events || {}
    setTimeout(() => {
      const params = getUrlDefaultParam()
      if (params.type === 'application' || params.type === 'platform') {
        setDefaultApplication(this.init, params)
      }
    }, 20)
  }

  /**
   * 订阅者
   * @param {*} name 名称
   * @param {*} cb 回调
   */
  on(name, cb) {
    ;(this.events[name] || (this.events[name] = [])).push(cb)

    return {
      unon: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
    }
  }

  /**
   * 发布者
   * @param {*} name 名称
   * @param  {...any} args 参数
   */
  emit(name, ...args) {
    ;(this.events[name] || []).forEach((fn) => fn(...args))
  }

  /**
   * 获取配置信息
   */
  get config() {
    return config
  }

  /**
   * 获取平台信息
   */
  getPlatform(cb) {
    getPlatformStatus(cb)
  }

  /**
   * 初始化导航方法
   * @param {*} options 初始化参数
   */
  init(options, navbarData, isSwitchRole) {
    utils.clearDefaultEmitEvent()
    setOptions(options)
    const { search, hash } = location
    const params = utils.getURLParameters(search || hash)
    const ecsDesktopServer = utils.getCookie('szjzsaasDesktopServer')
    const urls = {
      test: 'https://szjzsaas.ceshiservice.cn',
      production: 'https://szjz.jyyun.com'
    }
    // 增加逻辑,通过地址栏参数，判断如果是来自于szjzsaas平台
    if (['test', 'production'].includes(params.szjzsaas)) {
      if (urls[params.szjzsaas]) {
        document.cookie = `szjzsaasDesktopServer=${
          urls[params.szjzsaas]
        }; SameSite=None; Secure`
        // 来自于szjzsaas环境，重新加载szjzsaas环境的导航JS
        old.reloadNav(config, {}, urls[params.szjzsaas])
        return
      }
    } else if (ecsDesktopServer) {
      const decodeUrl = decodeURIComponent(ecsDesktopServer)
      const isSzjzSaas =
        decodeUrl.includes(urls.test) || decodeUrl.includes(urls.production)
      const isEbgDemo = location.href.includes(
        'ecstest.ledc.changyan.cn/ebgnavigation/'
      )
      const isJyyun = isEbgDemo
        ? false
        : location.origin.includes('jyyun.com') ||
          location.origin.includes('ecstest.ledc.changyan.cn')
      if (decodeUrl && isSzjzSaas && !isJyyun) {
        const value = decodeUrl.includes(urls.test) ? 'test' : 'production'
        window.location.href = setSearchParams(location.href, value)
        return
      }
    }
    if (params.ebgUrl) {
      base.hosturl = params.ebgUrl
    }
    if (params.qt) {
      window.qt = params.qt
    }
    base.navRenderCompleted = null
    if (base.inited) {
      console.warn(
        '强烈不建议多次执行init()方法，如需动态设置菜单，可采用导航提供的对应api动态设置。详情http://wiki.iflytek.com/pages/viewpage.action?pageId=309082434'
      )
    } else {
      base.inited = true
    }
    if (
      navbarData &&
      typeof navbarData === 'object' &&
      Object.keys(navbarData).length > 0
    ) {
      base.navbarConfig = navbarData
    }
    // ie兼容处理
    const head = document.getElementsByTagName('head')[0]
    const httpEquiv =
      '<meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'
    if (head.innerHTML.indexOf(httpEquiv) === -1) {
      head.insertAdjacentHTML('afterbegin', httpEquiv)
    }
    if (window.qt) {
      // 执行QT环境逻辑
      qtInit((userInfo) => {
        console.log('userInfo', userInfo, config.type)
        // 获取当前加载JS的url地址
        const jsUrl = old.getJsonpHostInScript(old.getCurrentScript().src)
        base.hosturl = jsUrl
        // 渲染导航主体框架及加载css文件
        render(() => {
          // 加载完成后，开始渲染菜单模块
          renderCommonNav()
        })
      })
    } else {
      // web逻辑
      if (!base.hosturl) {
        getJsonpHostUrl(() => {
          // 获取导航主要信息
          ajaxGetOtherConfig(isSwitchRole)
        })
      } else {
        // /desktop/backend/login/getLoginStatus
        // 开始进行接口请求
        // 获取导航主要信息
        ajaxGetOtherConfig(isSwitchRole)
      }
    }
  }

  created(callback = () => {}) {
    if (window.getNavbarConfigData) {
      callback(false, window.getNavbarConfigData)
    } else {
      window.ebgnavigation.on('getNavbarConfigData', (data) => {
        callback(false, data)
      })
    }
    if (window.loadNavigationError === 'failed') {
      callback(true)
    } else {
      window.ebgnavigation.on('loadNavigationError', () => {
        callback(true)
      })
    }
  }

  mounted(callback = () => {}) {
    if (window.navRenderCompleted === 'navRenderCompleted') {
      callback()
    } else {
      window.ebgnavigation.on('navRenderCompleted', callback)
    }
  }

  /**
   * 将点击的菜单设置为高亮
   * @param {*} parentIndex 当前点击菜单的父级index
   * @param {*} index 当前点击菜单Index
   */
  setHighlightNav() {
    throw new Error('此API已经废弃')
  }
  /**
   * 5.1、动态设置应用名称
   * @param {*} name  应用名称
   */
  setHighlight(newConfig) {
    // if (typeof newConfig !== 'number' && !newConfig) throw new Error('')
    let appNavList = newConfig.appNavList
    let secondaryNavList = newConfig.secondaryNavList
    let tempTitle, tempTitleSecond
    let list = config.primaryNav.appNavList
    let secondList = config.secondaryNav.secondaryNavList
    if (typeof appNavList === 'object') {
      // 设置的是对象,通过title判断对象
      if (appNavList) {
        tempTitle = appNavList.title || ''
      }
      // 如果有二级应用
      if (secondaryNavList) {
        tempTitleSecond = secondaryNavList.title || ''
      }
    } else if (
      (typeof Number(appNavList) === 'number' && !isNaN(appNavList)) ||
      (typeof Number(secondaryNavList) === 'number' && !isNaN(secondaryNavList))
    ) {
      // 设置的是索引，因此我们需要修改索引高亮，取消其他
      if (appNavList && appNavList >= list.length) {
        console.error('主应用修改索引长度超过最大长度', list.length)
        return
      }
      if (secondaryNavList && secondaryNavList >= secondList.length) {
        console.error('二级应用修改索引长度超过最大长度', secondList.length)
        return
      }
      if (appNavList >= 0) {
        tempTitle = list[appNavList].title
      }
      if (secondaryNavList >= 0) {
        tempTitleSecond = secondList[secondaryNavList].title
      }
    }
    if (tempTitle) {
      changeListCurrentItem(list, tempTitle)
    }
    if (tempTitleSecond) {
      changeListCurrentItem(secondList, tempTitleSecond)
      renderSecondaryNav()
    }
  }

  /**
   * 5.2、动态设置应用名称
   * @param {*} name  应用名称
   * @param {string} subtitle  副应用名称
   */
  setAppName(property) {
    if (!utils.isObject(property) && !utils.isString(property)) {
      return false
    }
    if (utils.isString(property)) {
      config.primaryNav.appName = property
      config.primaryNav.platformName = property
    } else if (utils.isObject(property)) {
      if (Object.keys(property).length === 0) {
        return false
      }
      if (config.type === 'application') {
        // 应用logo
        utils.isString(property.name) &&
          (config.primaryNav.appName = property.name)
        utils.isString(property.logo) &&
          (config.primaryNav.appLogo = property.logo)
        utils.isString(property.subtitle) &&
          (config.primaryNav.subtitle = property.subtitle)
      } else {
        // 平台logo
        utils.isString(property.name) &&
          (config.primaryNav.platformName = property.name)
        utils.isString(property.logo) &&
          (config.primaryNav.appLogo = property.logo)
      }
    }
    renderLogo(true)
  }
  setSubtitle(title) {
    if (typeof title !== 'string') return false
    config.primaryNav.subtitle = title
    // ebgnavigation.setAppName(config.primaryNav.appName)
    queue()
  }
  /**
   * 5.3、动态设置应用筛选
   * @param {*} name  应用名称
   */
  setAppList(appList, property) {
    if (validateData(appList, 'setAppList')) {
      // const oldValue = config.primaryNav.appList[0]
      if (!Array.isArray(config.primaryNav.appList)) {
        config.primaryNav.appList = []
      }
      if (property === 'concat') {
        config.primaryNav.appList.push(...appList)
      } else {
        config.primaryNav.appList = appList
      }
      // const newValue = config.primaryNav.appList[0]
      // if ((oldValue && newValue) || (!oldValue && !newValue)) {
      //   console.log('老的有值 ，新的也有值', oldValue, config.primaryNav.appList[0])
      // }
      const ebgnavEbgnavLogobox = $('#ebgnav-ebgnavLogobox')
      ebgnavEbgnavLogobox && queue()
      // renderAppList(true)
    }
  }

  /**
   * 5.4、动态设置主导航
   * @param {*} name
   */
  setAppNavList(data, property) {
    if (!validateData(data, 'setAppNavList')) return false
    let arr = []
    data.forEach((item) => {
      if (item.title) {
        arr.push(item)
      }
    })
    if (config.type === 'application') {
      if (!Array.isArray(config.primaryNav.appNavList)) {
        config.primaryNav.appNavList = []
      }
      // 追加
      if (property === 'concat') {
        config.primaryNav.appNavList.push(...arr)
      } else {
        config.primaryNav.appNavList = arr
      }
    } else {
      config.primaryNav.appNavList = arr
    }
    // renderPrimaryNav()
    let element = document.querySelector('#ebgnav-primaryNavList')
    element && queue()
  }

  /**
   * 5.5、动态设置次导航名称
   */
  setSecondaryName(name) {
    config.secondaryNav.secondaryName = name
    const secondaryName = $('#ebgnav-secondaryName')
    secondaryName && renderSecondaryName()
  }

  /**
   * 5.6、动态设置次导航
   * @param {*} array 次导航菜单
   */
  setSecondaryNavList(array, property) {
    if (!validateData(array, 'setSecondaryNavList')) return false
    if (!Array.isArray(config.secondaryNav.secondaryNavList)) {
      config.secondaryNav.secondaryNavList = []
    }
    if (property === 'concat') {
      config.secondaryNav.secondaryNavList.push(...array)
    } else {
      config.secondaryNav.secondaryNavList = array
    }
    const secondaryNavDom = $('.ebgnav-secondary')[0]
    secondaryNavDom && renderSecondaryNav()
  }

  /**
   * 5.7、动态设置自定义入口
   * @param {*} name
   */
  setSettingList(array, property) {
    if (!validateData(array, 'setSettingList')) return false
    if (config.type === 'application' && config.operation) {
      if (!Array.isArray(config.operation.settingList)) {
        config.operation.settingList = []
      }
      if (property === 'concat') {
        config.operation.settingList.push(...array)
      } else {
        config.operation.settingList = array
      }
    }
    renderSettingList()
  }

  // 隐藏导航栏
  hideNavBar() {
    const box = document.getElementById('ebgnav-box')
    box && (box.style.display = 'none')
  }

  // 显示导航栏
  showNavBar() {
    const box = document.getElementById('ebgnav-box')
    box && (box.style.display = 'block')
  }

  /*
   * 对外暴露了一个刷新appList的接口
   */
  refreshAppList() {
    renderAppList()
  }

  /**
   * 更新LOGO
   */
  updateLogo(url) {
    if (url) {
      // renderLogo(true, url)
      if (config.type === 'application') {
        config.primaryNav.appLogo = url
      } else {
        config.primaryNav.platformLogo = url
      }
      queue()
    } else {
      throw new Error('更新logo, url不能为空')
    }
  }
  // 设置ico
  setFavicon(url) {
    setFaviconIco(url)
  }

  // 设置appList name
  setAppListCurrentName(name) {
    if (!name) throw new Error('参数不能为空')
    if (typeof name !== 'string') throw new Error('参数必须是String类型')
    if (
      config.type === 'application' &&
      config.primaryNav.appList.length === 1
    ) {
      $('#ebgnav-app-current-name').innerText = name
      config.primaryNav.appList[0].title = name
    }
  }

  /**
   * 可以对外暴露的切换主题
   * @param {*} theme 主题参数支持 'default，themedark，themeblue，themegreen，1，2，3，4'
   */
  switchTheme(theme) {
    // throw new Error('switchTheme：该功能已废弃')
    theme = theme + '' // 传进来的ID有可能是Number类型,需要转换成String
    const type = ['1', '2', '3', '4']
    const type2 = ['themedark', 'default', 'themeblue', 'themegreen']
    // 默认default:纯白，themedark:雅黑，themeblue:天蓝
    if ([...type, ...type2].indexOf(theme) === -1) {
      console.error(`主题ID设置错误, 仅支持参数：${[...type, ...type2]}`)
      return false
    }
    if (type2.indexOf(theme) !== -1) {
      const obj = {
        themedark: '1',
        default: '2',
        themeblue: '3',
        themegreen: '4'
      }
      theme = obj[theme]
    }
    // 触发平台下发的换肤操作
    ebgnavigation.emit('switchTheme', theme)
    renderTheme(theme)
  }
}
const ebgnavigation = new Ebgnavigation()
if (window.ebgnavigation) {
  if (window.ebgnavigation.events) {
    ebgnavigation.events = window.ebgnavigation.events
  }
}
window.ebgnavigation = ebgnavigation
export default ebgnavigation
