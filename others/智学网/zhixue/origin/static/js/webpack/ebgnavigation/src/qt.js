import { config } from './constant'
import { loadScript, handleClass } from './utils/utils'
import {
  renderAppList,
  renderPrimaryNav,
  renderSettingList,
  renderSecondaryNav,
  renderSecondaryName
} from './render'
let qtReLoadCount = 0
export const qtInit = (callback) => {
  // 本地调试代码
  if (window.qt === 'dev') {
    callback()
    return false
  }
  // 获取容器用户信息
  getQtUserInfo((result) => {
    const res = {
      identityList: [],
      identityInfo: [],
      roleInfo: { roleList: [] },
      childUserId: result.childUserId,
      user: {
        // ...result,
        childUserId: result.childUserId,
        tarUserType: result.userRole,
        id: result.userId,
        name: result.userName
      }
    }
    for (let key in result) {
      res.user[key] = result[key]
    }
    window.getNavbarConfigData = res
    window.ebgnavigation.emit('getNavbarConfigData', res)
    console.log('设置过的数据', res)
    callback(res)
  })
}
const getQtUserInfo = (callback) => {
  loadQWebChannel((err) => {
    if (err) {
      callback({})
      return false
    }
    console.log('统一导航-----QWebChannel', window)
    window.FlyQtNavigator.getUserInfos(function (res) {
      const result = JSON.parse(res)
      console.log('统一导航获取到QT数据', result)
      callback(result)
    })
  })
}

// 异步加载qt容器JS资源
const loadQWebChannel = (callback) => {
  if (window.FlyQtNavigator) {
    callback()
    return
  }
  if (qtReLoadCount < 5) {
    setTimeout(() => {
      qtReLoadCount++
      loadQWebChannel(callback)
    }, 200)
  } else {
    // 引入qwebchannel.js
    const url =
      'https://public.res.lezhiyun.com/xiaoxin/download/xiaoxin/qwebchannel.js'
    loadScript(url, () => {
      if (!window.FlyQtNavigator) {
        try {
          // 初始化qt对象
          // eslint-disable-next-line no-new
          new window.QWebChannel(window.qt.webChannelTransport, (channel) => {
            window._XBridgeQtChannelInstance = channel.objects
            console.log(
              'window._XBridgeQtChannelInstance--ebgnavigation finish',
              channel.objects
            )
            window.FlyQtNavigator = channel.objects.FlyQtNavigator
            callback()
          })
        } catch (err) {
          callback(err)
        }
      } else {
        callback()
      }
    })
  }
}

/**
 * 判断QT环境下，导航可显示项目是否全部为空
 */
export const isQtNavEmpty = () => {
  // 如果没有QT环境，则退出函数
  if (!window.qt) return
  // 解构出导航项
  const { primaryNav, secondaryNav, operation } = config
  // 检查导航项是数据否全部为空
  const isEmpty = [
    primaryNav.appNavList,
    primaryNav.appList,
    operation.settingList,
    secondaryNav.secondaryNavList
  ].every((nav) => !nav.length)
  // 获取导航盒子元素
  const ebgNavBox = document.querySelector('#ebgnav-box')
  // 为false则隐藏导航
  isEmpty
    ? handleClass(ebgNavBox, 'add', 'hide')
    : handleClass(ebgNavBox, 'delete', 'hide')
}

// 渲染各个菜单
export const renderCommonNav = () => {
  // 获取当前加载JS的url地址
  handleClass(document.querySelector('#ebgnav-box'), 'add', 'default')
  handleClass(
    document.querySelector('.ebgnav-operation-userinfo'),
    'add',
    'hide'
  )
  // 渲染主导航
  renderPrimaryNav()
  renderSecondaryNav()
  renderSettingList()
  renderAppList()
  renderSecondaryName()
  console.time()
  isQtNavEmpty() // 判断下当导航菜单是否为空, 如为空则隐藏导航
}
