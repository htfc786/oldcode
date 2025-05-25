/**
 * created by qbyu2 2018-10-17
 * 接口鉴权基础类
 * */
import md5 from 'js-md5';

export default class Authentication {
  /**
   * 构造函数参数说明
   * @param bicode            userName
   * @param password          password
   * @param timeDifference    与后台时间差
   * */
  // TODO
  constructor (bicode, password, timeDifference) {
    this.bicode = bicode;
    this.password = password;
    this.timeDifference = timeDifference;
  }
  // 计算guid
  guid () {
    let s = []
    let hexDigits = '0123456789abcdef'
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = '-'

    return s.join('')
  }
  // 获取当前时间
  getDateString () {
    return new Date().getTime()
  }
  // 计算最终鉴权字符串
  make () {
    let authguid = this.guid();
    let authtimestamp = this.getDateString() - this.timeDifference;
    let authtokenOrigin = authguid + authtimestamp + this.password;
    let authtoken = md5(authtokenOrigin);
    return {
      authguid: authguid,
      authtimestamp: authtimestamp,
      authbizcode: this.bicode,
      authtokenOrigin: authtokenOrigin,
      authtoken: authtoken
    }
  }
}



// WEBPACK FOOTER //
// ./src/api/interfaceAuthentication.js