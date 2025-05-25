import { config, base, tpl } from './constant'
import {
  handleClass,
  templateRender,
  commonNavEvent,
  displayElement,
  renderApplicationNavbar,
  getBrowseUrlIdActiveMenu
} from './utils/utils'
import { renderEbgNav } from './utils/render-ebg-nav'
import { teacherRole } from './components/teacher-role/index'
import { renderDropdown } from './utils/render-dropdown'
// 渲染主导航（应用、平台）
export const renderPrimaryNav = () => {
  let element = document.querySelector('#ebgnav-primaryNavList')
  if (!element) return false
  const params = {
    origin: 'renderArray',
    element: 'ebgnav-primaryNavList',
    renderName: 'renderPrimaryNavList',
    identityList: (base.navbarConfig && base.navbarConfig.identityList) || [],
    position: true
  }
  if (config.type === 'application') {
    renderEbgNav(element, config.primaryNav.appNavList, params)
  } else {
    const { menus = [] } = base.navbarConfig || {}
    // 根据id设置导航栏目高亮
    getBrowseUrlIdActiveMenu(menus)
    renderEbgNav(element, [...menus, ...base.platformNavList], params)
    teacherRole(base.navbarConfig, base.hosturl)
  }
  if (!base.navRenderCompleted) {
    // 首次渲染完导航后，触发navRenderCompleted钩子方法
    base.navRenderCompleted = true
    window.navRenderCompleted = 'navRenderCompleted'
    window.ebgnavigation.emit('navRenderCompleted')
  }
}

export // 渲染应用二级副导航（应用二级导航）
const renderSecondaryNav = () => {
  // 只有应用导航才需要渲染副导航
  if (config.type !== 'application') return false
  const secondaryNavDom = document.querySelector('.ebgnav-secondary')
  if (
    config.secondaryNav.secondaryName ||
    config.secondaryNav.secondaryNavList.length > 0
  ) {
    displayElement(secondaryNavDom, 'block')
  } else {
    displayElement(secondaryNavDom, 'none')
    return false
  }
  const element = document.querySelector('#ebgnav-secondaryNavList')
  const params = {
    origin: 'secondaryNav.secondaryNavList',
    element: 'ebgnav-secondary-navlist',
    renderName: 'renderSecondaryNavList',
    position: true,
    secondaryName: config.secondaryNav.secondaryName
  }
  renderEbgNav(element, config.secondaryNav.secondaryNavList, params)
}

/**
 * 渲染应用自定义入口
 */
export const renderSettingList = () => {
  const settingDom = document.querySelector('.ebgnav-operation-setting')
  if (!settingDom) return
  if (config.operation && Array.isArray(config.operation.settingList)) {
    if (!config.operation.settingList.length) {
      displayElement(settingDom, 'hide')
    } else {
      displayElement(settingDom, 'block')
    }
    const params = {
      origin: 'operation.settingList',
      element: 'ebgnav-operation-setting',
      renderName: 'renderSettingList'
    }
    commonRenderDropdown(
      document.querySelector('#ebgnav-ebgnavSetting'),
      config.operation.settingList,
      params
    )
  } else {
    settingDom && displayElement(settingDom, 'hide')
  }
}

/**
 * 渲染应用副列表
 */
export const renderAppList = () => {
  // 获取当前需要渲染的数据
  let appList = config.primaryNav.appList || []
  const ebgnavAppList = document.querySelector('#ebgnav-app-list')
  if (!ebgnavAppList || config.type !== 'application') return false
  ebgnavAppList.innerHTML = ''
  if (appList.length === 0) {
    displayElement(ebgnavAppList, 'none')
  } else {
    let currentName = ''
    // 如果设置的数据为空数组，就隐藏当前dom
    for (let i = 0; i < appList.length; i++) {
      if (appList[i].current) {
        currentName = appList[i].title
        break
      }
    }
    // currentName 如果没有获取到值，就默认取第一位name
    if (!currentName && appList && appList.length) {
      currentName = appList[0].title
      appList[0].current = true
    }
    const html = renderApplicationNavbar(appList, currentName)
    // 渲染副应用名称
    ebgnavAppList && ebgnavAppList.insertAdjacentHTML('beforeend', html)
    displayElement(ebgnavAppList, 'block')
    if (appList && appList.length > 1) {
      // 渲染应用副列表下拉菜单
      renderAppListDropdownList()
    } else if (appList && appList.length === 1) {
      // app-list-btn
      const data = appList[0] || {}
      const app_list = document.querySelector('.ebgnav-app-list')
      if (data.disabled === true) {
        app_list && handleClass(app_list, 'add', 'disabled')
      } else {
        app_list && handleClass(app_list, 'remove', 'disabled')
      }
      const link = document.querySelector('#ebgnav-app-current-link-name')
      link &&
        link.addEventListener('click', (e) => {
          e.stopPropagation()
          commonNavEvent(data)
        })
    }
  }
}

const commonRenderDropdown = (element, list = [], params = {}) => {
  if (!element || config.type !== 'application') return false
  renderDropdown(element, list, params)
}

// 渲染应用副列表下拉菜单
const renderAppListDropdownList = () => {
  const separatorUl = document.getElementById('ebgnav-app-list-separator-ul')
  if (!separatorUl) return false
  const params = {
    origin: 'primaryNav.appList',
    element: 'ebgnav-app-list',
    renderName: 'renderAppListDropdownList'
  }
  commonRenderDropdown(separatorUl, config.primaryNav.appList, params)
}

/**
 * 渲染应用二级导航名称
 */
export const renderSecondaryName = () => {
  if (config.type === 'application') {
    const secondaryNavDom = document.querySelector('.ebgnav-secondary')
    const secondaryName = document.querySelector('#ebgnav-secondaryName')
    if (config.secondaryNav.secondaryNavList.length === 0) {
      displayElement(secondaryNavDom, 'block')
    }
    if (
      !config.secondaryNav.secondaryName &&
      config.secondaryNav.secondaryNavList.length === 0
    ) {
      displayElement(secondaryNavDom, 'none')
    } else {
      if (
        !(
          (!!base.oldSecondaryName && !!config.secondaryNav.secondaryName) ||
          (!base.oldSecondaryName && !config.secondaryNav.secondaryName)
        )
      ) {
        // 左侧区域内容变化，需要重新渲染右侧的数据
        renderSecondaryNav()
      }
      if (base.oldSecondaryName !== config.secondaryNav.secondaryName) {
        base.oldSecondaryName = config.secondaryNav.secondaryName
        secondaryName.innerHTML = templateRender(
          tpl.secondaryNameTemp,
          config.secondaryNav.secondaryName
        )
        if (config.secondaryNav.secondaryName) {
          displayElement(secondaryName, 'block')
        } else {
          displayElement(secondaryName, 'none')
        }
      }
    }
  }
}
