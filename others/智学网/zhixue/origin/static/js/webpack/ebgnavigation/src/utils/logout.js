import ajax from './http'
const createJsonpLogout = (url, callback) => {
  ajax({
    url: url,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    crossDomain: true,
    cache: false,
    success: function (html) {
      if (typeof callback === 'function') {
        callback()
      }
    },
    error: function (data) {
      if (typeof callback === 'function') {
        callback()
      }
    }
  })
}
const desktop_logout = function (__logoutUrl) {
  let logoutUrls = __logoutUrl.split(';')
  for (let i = 0; i < logoutUrls.length; i++) {
    logoutUrls[i] = logoutUrls[i].replace('http://', 'https://')
  }
  let clearCookieUrl = logoutUrls.shift() // 清除cookie的地址
  let redirectUrl = logoutUrls.pop() // logoutUrls[logoutUrls.length - 1] // 后端接口最后一个默认为区平台地址

  createJsonpLogout(clearCookieUrl, function () {
    logoutUrls.forEach(logoutUrl => {
      createJsonpLogout(logoutUrl)
    })
    window.ebgnavigation.emit('logout')
    setTimeout(() => {
      window.location.href = redirectUrl
    }, 1000)
  })
}

const bindLogout = (url) => {
  desktop_logout(url)
}

export {
  bindLogout
}
