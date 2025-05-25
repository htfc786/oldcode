import ajax from './http'
import $ebg from '../components/message'
const strAssert = (str) => {
  return !(str == null || str.length < 1)
}
const alertErrorIfStrEmpty = (str, errorMsg) => {
  if (!strAssert(str)) {
    $ebg.confirm({
      title: '提示',
      text: errorMsg,
      confirm: '确定'
    })
    return false
  }
  return true
}
// 是否可以进入应用
const appEnterable = (storeAppid, hosturl, apiUrl, callback) => {
  // 0 敏感数据授权
  let enable = false
  ajax({
    type: 'GET',
    url: hosturl + apiUrl.appEnterable,
    jsonp: 'jsonp',
    async: false, // 同步
    data: { appId: storeAppid },
    success: function (result) {
      if (result['success'] === true) {
        let data = result['data']
        if (data['enable'] === false) {
          // 因敏感数据授权缺失，应用不可访问
          let msg = ''
          if (data['isAdmin'] === true) {
            msg =
              '应用数据权限发生变化，为了保护学校的数据安全，该应用暂时停止访问，请到应用管理-已添加应用-数据权限管理中进行应用数据权限审核。'
          } else {
            msg =
              '应用数据权限发生变化，为了保护学校的数据安全，该应用暂时停止访问，需要学校管理员审核后才能正常使用，如需使用请联系学校管理员。'
          }
          $ebg.confirm({
            title: '提示',
            text: msg,
            confirm: '确定'
          })
        } else {
          enable = true
        }
        if (callback) {
          callback()
        }
      } else {
        $ebg.confirm({
          title: '提示',
          text: result['msg'],
          confirm: '确定'
        })
      }
    },
    error: function () {}
  })

  return enable
}
// 实现对前端字符串进行GET编码的函数
function appEncodeURL(s) {
  var reg = /^[\u0391-\uFFE5%]+$/
  var urlLength = s.length
  var newS = ''
  for (let i = 0; i < urlLength; i++) {
    if (reg.test(s.charAt(i))) {
      newS += escape(s.charAt(i))
    } else {
      newS += s.charAt(i)
    }
  }
  if (newS.indexOf('_app_encoding_tag_=') === -1) {
    if (newS.indexOf('?') >= 0) {
      newS = newS + '&_app_encoding_tag_=1'
    } else {
      newS = newS + '?_app_encoding_tag_=1'
    }
  }
  return encodeURI(newS)
}

const appClick = (data) => {
  if (!alertErrorIfStrEmpty(data.url, '应用正在紧张开发中')) return
  if (!alertErrorIfStrEmpty(data.name, '应用名称错误')) return
  if (!alertErrorIfStrEmpty(data.id, '应用标识错误')) return
  if (!alertErrorIfStrEmpty(data.target, '跳转方式错误')) return
  ajax({
    url: data.hosturl + data.apiUrl.appStatus,
    type: 'post',
    // async: false, //使用同步的方式,true为异步方式
    data: { appId: data.id }, // 这里使用json对象
    jsonp: 'jsonp', // jsonp
    success: function (res) {
      if (res['code']) {
        $ebg.confirm({
          title: '提示',
          text: res['code'] !== '-5101' ? res['msg'] : '应用未授权,请联系管理员',
          confirm: '确定'
        })
        return
      }
      if (res['expired'] === 1) {
        // layer.alert('此应用已过期,请联系管理员');
        $ebg.confirm({
          title: '提示',
          text: '此应用已过期,请联系管理员',
          confirm: '确定'
        })
        return
      }
      // 3) 如果URL不是/开头，则表示第三方应用，判断是否有http:如果没有，则拼接上。
      let isThirdApp = data.url.indexOf('/') !== 0
      if (isThirdApp) {
        if (!/^http(s)?/gi.test(data.url)) {
          data.url = 'http://' + data.url
        }

        // 0 敏感数据授权
        appEnterable(data.id, data.hosturl, data.apiUrl, function () {
          // 1) 获取url，如果没有url，表示应用正在紧张开发中。
          if (!data.url) {
            // layer.alert('应用正在紧张开发中');
            $ebg.confirm({
              title: '提示',
              text: '应用正在紧张开发中',
              confirm: '确定'
            })
            return
          }

          // appClickCollectorLog($this);

          let windowOpen = window.open(data.url, data.target)
          if (windowOpen === null || typeof windowOpen === 'undefined') {
            $ebg.confirm({
              title: '提示',
              text: '弹窗被浏览器拦截，请设置浏览器权限',
              eventType: 'hideTips',
              btnMsg: '确定'
            })
          }
        })
        return
      }

      // 是否是append-param
      if (data.appendParam) {
        data.url = '/app/getInto.do?url=' + encodeURIComponent(data.url)
        data.url += '&appendParams=' + data.appendParam
        window.open(data.url, data.target)
        return
      }

      // 4）内部应用跳转需要拼接参数，需要判断应用地址中是否存在参数appendText2Param=false，如果存在则去掉，否则拼接如下内容：
      //   '&_app_encoding_tag_=1&text=' + text + '
      if (data.url.indexOf('&appendText2Param=false') > 0) {
        data.url = data.url.replace('&appendText2Param=false', '')
      } else {
        if (data.url.indexOf('?') === -1) {
          data.url =
            data.url +
            appEncodeURL(
              '?_app_encoding_tag_=1&text=' +
                data.name +
                '&__time__=' +
                new Date().getTime()
            )
        } else {
          data.url =
            data.url +
            appEncodeURL(
              '&_app_encoding_tag_=1&text=' +
                data.name +
                '&__time__=' +
                new Date().getTime()
            )
        }
      }

      window.open(data.url, data.target)
    }
  })
}

export { appClick }
