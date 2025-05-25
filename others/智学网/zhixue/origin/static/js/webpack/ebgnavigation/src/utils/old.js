import ajax from './http'
// import loadOldNav from '../oldNav'

const getCookie = (key) => {
  let cks = document.cookie.split('; ')

  for (let i = 0; i < cks.length; i++) {
    let kv = cks[i].split('=')

    if (kv[0] === key) return kv[1]
  }
  return ''
}

const getJsonpHostInScript = (src) => {
  let reg =
    /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
  let matches = src.match(reg)
  let url

  if (matches && matches[1]) {
    url = matches[1] + '://' + matches[3]
    if (matches[4] && matches[4] !== '80') {
      url = url + ':' + matches[4]
    }
  } else {
    url = window.location.protocol + '//' + window.location.host
    if (window.location.port) {
      url = url + ':' + window.location.port
    }
  }
  return url
}

const getCurrentScript = () => {
  if (document.currentScript && document.currentScript.src) {
    let script = document.currentScript

    if (script.readyState === 'interactive') {
      return script
    }
    // 获取到当前页面导航的Url地址
    if (
      script.src &&
      (script.src.indexOf('ebgnavigation.js') !== -1 ||
        script.src.indexOf('ebgnavigation.min.js') !== -1) &&
      script.src.indexOf('http') === 0
    ) {
      return script
    }
  }

  // For IE6-9 browsers, the script onload event may not fire right
  // after the script is evaluated. Kris Zyp found that it
  // could query the script nodes and the one that is in "interactive"
  // mode indicates the current script
  // ref: http://goo.gl/JHfFW
  let scripts = document.getElementsByTagName('script')

  for (let i = scripts.length - 1; i >= 0; i--) {
    let script = scripts[i]

    if (script.readyState === 'interactive') {
      let interactiveScript = script

      return interactiveScript
    }
    if (
      script.src &&
      (script.src.indexOf('ebgnavigation.js') !== -1 ||
        script.src.indexOf('ebgnavigation.min.js') !== -1) &&
      script.src.indexOf('http') === 0
    ) {
      return script
    }
  }
  return null
}
// 根据script的URL地址获取其host
const getJsonpHost = (src, tarDomain, callback) => {
  const callbackName = 'jsonpCallbackoperInCloud' + new Date().getTime()
  window[callbackName] = function () {}
  // 先从cookie中取
  let serverUrl = getCookie('ecsDesktopServer')
  // TODO 提交的时候不要带上去，仅仅调试的时候使用
  // serverUrl = 'https://ahshfsjjkfq.ecstest.ledc.changyan.cn'
  if (serverUrl !== '') {
    serverUrl = decodeURIComponent(serverUrl)
    if (callback) callback(serverUrl)
  } else {
    // 从cookie中取不到，则向本一级导航栏所在域名申请获取
    serverUrl = getJsonpHostInScript(src)
    // 这里要改成https
    let url =
      (tarDomain === undefined || tarDomain == null || tarDomain.length < 1
        ? serverUrl
        : tarDomain) + '/desktop/backend/login/operInCloud.do'
    // 强制使用https访问
    if (url) {
      url = url.replace('http://', 'https://')
    }
    ajax({
      type: 'GET',
      jsonp: callbackName,
      url: url,
      data: { getDesktopServer: true },
      success: (ret) => {
        let data = ret['data']
        let redirDomain = ''

        if (data != null && data['redirDomain'] != null) {
          redirDomain = data['redirDomain']
        } // 需要向云平台获取

        if (redirDomain.length > 0) {
          // 向云平台获取
          getJsonpHost(src, redirDomain, (url) => {
            if (url != null && url.length > 0) serverUrl = url
            else serverUrl = getJsonpHostInScript(src) // 取不到，则返回默认的
            if (callback) callback(serverUrl)
          })
        } else {
          // 已经获取到，返回即可
          if (callback) callback(data)
        }
      },
      error: (err) => {
        if (callback) callback('')
        console.log('getJsonpHost error res', err)
      }
    })
  }
}

const reloadNav = (config, navbarData, url) => {
  let oldJSUrl = ''
  const oldNav = getCurrentScript()
  if (oldNav) {
    oldJSUrl = oldNav.src || ''
    const parentNode = oldNav.parentNode
    parentNode && parentNode.removeChild(oldNav)
  }
  let script = document.createElement('script')
  const newUrl =
    oldJSUrl && oldJSUrl.indexOf('min') !== -1
      ? 'ebgnavigation.min.js'
      : 'ebgnavigation.js'
  script.src = `${url}/ebgnavigation/${newUrl}`
  // script.src = `${url}/ebgnavigation/ebgnavigation.js`
  document.body.insertAdjacentElement('afterbegin', script)
  script.onload = () => {
    window.ebgnavigation.init(config, navbarData)
    return false
  }
}

export {
  getJsonpHost,
  getCookie,
  reloadNav,
  getCurrentScript,
  getJsonpHostInScript
}
