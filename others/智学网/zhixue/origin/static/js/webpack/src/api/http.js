/**
 * 网络请求基础类
 * created by qbyu2 2018-10-17
 * */
import RealRouter from '@zx/realrouterzxb';
import axios from 'axios';
import store from '../store';
import cloudExcludeUrl from './cloudExcludeUrl';
import Authentication from './interfaceAuthentication';
// import { generateNonce, setreQheader } from '../util/crypto-obfuscated';
import qs from 'qs';
import toCloud from './toCloud';
// import { splicingUrl } from './publicMethods'

let timeDifference = 0;
let promiseList = [];
const baseHostUrl = window.location.protocol + '//' + window.location.host;
const reportAxios = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://' : baseHostUrl,
  timeout: process.env.TIMEOUT
});

/**
 * 获取token
 * */
function getToken () {
  let instance = axios.create({
    // 接口http使用修改 --edited by jmning 2019/1/15
    // baseURL: process.env.TOKEN_API_URL,
    // edited by qbyu2 使用baseHostUrl在开发环境不能获取到test环境的cookie,故判断一下
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'https://test.zhixue.com'
        : baseHostUrl,
    timeout: process.env.TIMEOUT
  });
  // POST传参序列化(添加请求拦截器)
  instance.interceptors.request.use(
    async function (config) {
      // 添加鉴权
      let bicode = '0001';
      // TODO
      let password = 'iflytek!@#123student';
      let myAuthentication = new Authentication(
        bicode,
        password,
        timeDifference
      ).make();
      config.headers.authbizcode = myAuthentication.authbizcode;
      config.headers.authguid = myAuthentication.authguid;
      config.headers.authtimestamp = myAuthentication.authtimestamp;
      config.headers.authtoken = myAuthentication.authtoken;
      config.headers.XToken = fiyLocalStorage.getItem('xToken');
      config = await toCloud(config);
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  return instance.get('/addon/error/book/index', {
    withCredentials: true
  });
}

/**
 * check token 是否过期
 * 未过期正常下一步
 * 过期则重新获取token
 * */
const checkToken = function () {
  let xToken = fiyLocalStorage.getItem('xToken');
  if (!xToken) {
    // TODO
    if (!promiseList.length) {
      let prse = new Promise((resolve, reject) => {
        getToken()
          .then(res => {
            // const token =
            //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI2N2NjYWRkYmEzYTc5NWViYjc1YjcxNjZmMTgxMGMzMzZkNzJhMCIsImV4cCI6MTczMDE4ODU1NCwiaWF0IjoxNzMwMTAyMTU0fQ.6iYNh4ATgw-AztCiA0TFCUteSDgNU3peHbKv-cqkeLU';
            // fiyLocalStorage.setItem('xToken', token);
            // resolve();
            if (res.data.errorCode === 0) {
              fiyLocalStorage.setItem('xToken', res.data.result)
              resolve()
            } else if (res.data.errorCode === 3001) {
              window.location.href = baseHostUrl + '/login.html'
            } else if (res.data.errorCode === 9801) {
              timeDifference = new Date().getTime() - parseInt(res.data.result[0].systime)
              promiseList = []
              checkToken().then(() => {
                resolve()
              })
            }
          })
          .catch(err => {
            reject(err);
            window.location.href = baseHostUrl + '/login.html';
          });
      });
      promiseList.push(prse);
    } else {
      return Promise.race(promiseList);
    }
  } else {
    return Promise.resolve();
  }
  return Promise.race(promiseList);
};

/**
 * POST传参序列化(添加请求拦截器)
 * */
reportAxios.interceptors.request.use(
  async function (config) {
    // 添加鉴权
    let bicode = '0001';
    let password = 'iflytek!@#123student';
    let myAuthentication = new Authentication(
      bicode,
      password,
      timeDifference
    ).make();
    config.headers.authbizcode = myAuthentication.authbizcode;
    config.headers.authguid = myAuthentication.authguid;
    config.headers.authtimestamp = myAuthentication.authtimestamp;
    config.headers.authtoken = myAuthentication.authtoken;
    if (!fiyLocalStorage.getItem('xToken')) {
      await checkToken();
    }
    config.headers.XToken = fiyLocalStorage.getItem('xToken');
    let url = config.url;
    if (url.indexOf('?') > -1) {
      url = url.split('?')[0];
    }
    config = await toCloud(config);
    // console.log('store.state.currentUser', store.state.currentUser)
    if (!config.headers.ReportRouterVersion) {
      let includeUrl = !(cloudExcludeUrl.indexOf(url) > -1);
      // 更新 上云路由
      if (includeUrl) {
        await RealRouter(config, store.state.currentUser.userId, null).then(
          res => {
            res && (config.baseURL = res);
            config.headers && (config.headers['X-Trans-Ready'] = 'true');
          }
        );
      }
    }

    if (config.method === 'post') {
      if (config.data instanceof FormData) {
        // // 创建一个新的 FormData 实例
        // let formDataEntries = {};
        // // 遍历原始 FormData，处理每个键值对
        // for (let [key, value] of config.data.entries()) {
        //   formDataEntries[key] = value;
        // }
        // config.data = qs.stringify(formDataEntries);
      } else {
        config.data = qs.stringify(config.data);
      }
    }
    // let Nonce = generateNonce(8);
    // if (config.headers.XToken) {
    //   config.headers.interfaceSignKey = await setreQheader(config, config.headers.XToken, Nonce);
    // }
    // config.headers.nonce = Nonce;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 返回状态判断(添加响应拦截器)
 * */
reportAxios.interceptors.response.use(
  res => {
    // 判断token是否过期
    if (res.data.errorCode === 3001) {
      fiyLocalStorage.setItem('xToken', '');
      window.location.href = baseHostUrl + '/login.html';
    }
    // 鉴权时间过期（存在服务端客户端时间误差）
    if (res.data.errorCode === 9801) {
      if (res.data.result) {
        timeDifference =
          new Date().getTime() - parseInt(res.data.result[0].systime);
        let error = {
          errorCode: 9801,
          time: timeDifference
        };
        return Promise.reject(error);
      }
    }
    return res;
  },
  error => {
    if (
      error.message === `timeout of ${reportAxios.defaults.timeout} ms exceeded`
    ) {
      console.error('请求超时，请重试！');
    } else {
      console.error('请求异常，请稍后重试！');
    }
    return Promise.reject(error);
  }
);

/**
 * iE9
 * */
function checkIE9 () {
  let userAgent = navigator.userAgent;
  let isIE =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if (isIE) {
    let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion === 9) {
      return true;
    }
  }
  return false;
}

/**
 * fetchGet方法, 调用后台接口
 * fetchGet为axios.get()方法 限定长度 以需要兼容的IE为标准 长度不能超过2083字节 超过则用post方法
 * @param url：        接口地址
 * @param params：     请求参数
 * @returns {Promise}  返回一个promise
 * */
const fetchGet = function (url, params) {
  let myParams = params || {};
  let flag = true;
  return checkToken().then(() => {
    if (checkIE9()) {
      myParams.token = fiyLocalStorage.getItem('xToken');
    }
    return new Promise((resolve, reject) => {
      reportAxios({
        method: 'get',
        url: url,
        params: myParams
      })
        .then(
          response => {
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        )
        .catch(error => {
          reject(error);
        });
    }).catch(err => {
      if (err.errorCode && err.errorCode === 9801 && flag) {
        flag = false;
        timeDifference = err.time && err.time;
        return fetchGet(url, params);
      }
    });
  });
};

/**
 * fetchPost方法, 调用后台接口
 * fetchPost为axios.post()方法 限定长度 以需要兼容的IE为标准 长度超过2083字节时 使用post方法 不超过则用get方法
 * @param url：        接口地址
 * @param params：     请求参数
 * @returns {Promise}  返回一个promise
 * */
reportAxios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded; charset=UTF-8';
const fetchPost = function (url, params) {
  let myParams = params || {};
  let flag = true;
  if (checkIE9()) {
    myParams.token = fiyLocalStorage.getItem('xToken');
  }
  return checkToken().then(() => {
    return new Promise((resolve, reject) => {
      reportAxios({
        method: 'post',
        url: url,
        data: myParams,
        transformRequest: [
          function (data) {
            let ret = '';
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                '=' +
                encodeURIComponent(data[it]) +
                '&';
            }
            return ret;
          }
        ]
      })
        .then(
          response => {
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        )
        .catch(error => {
          reject(error);
        });
    }).catch(err => {
      if (err.errorCode && err.errorCode === 9801 && flag) {
        flag = false;
        timeDifference = err.time && err.time;
        return fetchPost(url, params);
      }
    });
  });
};

export default {
  fetchGet: fetchGet,
  fetchPost: fetchPost
};



// WEBPACK FOOTER //
// ./src/api/http.js