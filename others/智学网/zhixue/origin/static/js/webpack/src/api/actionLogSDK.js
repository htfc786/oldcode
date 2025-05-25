// xxx
import APIService from './reportDetailWebServer'

export function actionLog (params) {
  let config = {
    env: process.env.ACTION_LOG_ENV,
    equ: process.env.ACTION_LOG_EQU,
    timeOut: 5000,
    resType: 'POST'
  }

  let actionLogFun = new window.ActionLogCommon(config)
  let userInfo = JSON.parse(sessionStorage.getItem('zxbUserInfo'))
  // TODO
  if (userInfo && Object.keys(userInfo).length) {
    params.userId = userInfo.userId
    params.otherInfo.userType = userInfo.userType
    params.otherInfo.vipLevel = userInfo.vipLevel
    actionLogFun.userActionLog(params)
  } else {
    APIService.getUserInfo().then((res) => {
      if (res.errorCode === 0) {
        let result = res.result
        sessionStorage.setItem('zxbUserInfo', JSON.stringify(result))
        params.userId = result.userId
        params.otherInfo.userType = result.userType
        params.otherInfo.vipLevel = result.vipLevel
        actionLogFun.userActionLog(params)
      } else {
        console.error('获取用户信息失败，埋点失败~')
      }
    })
  }
}



// WEBPACK FOOTER //
// ./src/api/actionLogSDK.js