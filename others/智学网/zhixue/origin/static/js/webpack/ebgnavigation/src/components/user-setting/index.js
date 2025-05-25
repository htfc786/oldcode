import $ebg from '../message'
import ajax from '../../utils/http'
import { getCookie, setCookie, handleClass, getWorkbenchUrl } from '../../utils/utils'
let settings = [],
  hosturl = '',
  userInfoDom,
  options = {},
  roleInfo = {},
  currentRole = {},
  menus = [],
  user = {},
  meeageTotal = 0
// 拼接跳转地址
const setUrl = (url) => {
  if (url.indexOf('http') === -1) {
    if (url.substring(0, 1) !== '/') {
      url = `/${url}`
    }
    url = hosturl + url
  }
  return url
}
// 通过setting数据渲染列表
const settingsHtml = () => {
  let html = ''
  settings.forEach(item => {
    html += `<dd class="setting-list-item">
      <a href="${setUrl(item.url)}" target="_blank" id="setting-list-id-${item.key}">
        <i class="ebginav ${item.key}"></i>
        <span class="name">${item.name}</span>
        <i class="ebginav inav-user-right"></i>
      </a>
    </dd>`
  })
  return html
}
const getCurrentRole = () => {
  let data = ''
  roleInfo.roleList.some(item => {
    data = item
    return item.roleTag === roleInfo.currentRole
  })
  return data
}
const renderRoleListHtml = (roleList = []) => {
  return roleList.map(item => {
    return `<dd class="${item.roleTag === roleInfo.currentRole ? 'role-list-item active' : 'role-list-item'}">${item.roleCName}<span class="data" style="display: none">${JSON.stringify(item)}</span></dd>`
  }).join('')
}
// 单独渲染身份切换html
const renderRoleHtml = () => {
  return `<dd class="setting-list-item" id="setting-role-entry">
    <a href="javascript:;">
      <i class="ebginav inav-switch-identity"></i>
      <span class="name">身份切换</span>
      <i class="ebginav inav-user-right"></i>
      <span class="setting-right-con role-current-name text-ellipsis" title="${currentRole.roleCName}">${currentRole.roleCName}</span>
    </a>
    <dl class="setting-identity-list dropdown-box" id="ebgnav-ebgnavRoleList">
      ${renderRoleListHtml(roleInfo.roleList)}
    </dl>
  </dd>`
}

const roleChange = (data = {}) => {
  if (!data || data.roleTag === roleInfo.currentRole) {
    $ebg.message('该角色为您当前登录角色，请选择其他角色切换！', 'error')
    return false
  }
  let params = {
    role: data.role
  }
  if (data.childId) {
    params.childId = data.childId
  }
  switchRole(params, data)
}

// 角色切换鼠标事件
const roleHoverEvent = () => {
  // let timer = null
  const dom = document.getElementById('setting-role-entry')
  const roleDom = document.getElementById('ebgnav-ebgnavRoleList')
  const userinfoDom = document.querySelector('.ebgnav-operation-userinfo')
  // 添加鼠标移入事件
  dom && dom.addEventListener('mouseenter', () => {
    if (roleDom && !roleDom.classList.contains('show')) {
      roleDom.classList.add('show')
    }
  })
  // 添加鼠标移出事件
  userinfoDom && userinfoDom.addEventListener('mouseleave', () => {
    if (roleDom && roleDom.classList.contains('show')) {
      roleDom.classList.remove('show')
    }
  })

  // 添加点击事件（切换角色）
  roleDom && roleDom.addEventListener('click', e => {
    if (e.target.tagName === 'DL') return false
    var innerText = e.target.querySelector('.data').innerText
    const data = JSON.parse(innerText || '{}') || {}
    roleChange(data)
  })
}
// 渲染用户setting列表入口
export const renderUserSetting = (res = {}, base, config = {}) => {
  if (config.test) return false
  userInfoDom = document.getElementById('user-setting-list') // 获取setting容器
  roleInfo = res.roleInfo || {}
  menus = res.menus || []
  user = res.user
  options = config
  settings = res.settings.filter(item => item.key !== 'user-logout')
  hosturl = base.hosturl
  let roleHtml = ''
  // 如果用户配置了不显示角色切换入口，或者角色切换数据异常时，就不渲染角色切换入口了
  if (!options.hideRole && roleInfo.currentRole && roleInfo.roleList && roleInfo.roleList.length > 0) {
    currentRole = getCurrentRole() // 获取当前已选中的的角色
    roleHtml = renderRoleHtml()
    addRoleDefaultEvent()
  }
  userInfoDom.innerHTML = ''
  userInfoDom.insertAdjacentHTML('beforeend', `${roleHtml}${settingsHtml()}`)
  roleHoverEvent() // 添加事件
  getMessage()
}

const switchRoleSuccess = (data) => {
  roleInfo.currentRole = data.roleTag
  window.ebgnavigation.emit('roleChange', data)
  setCookie(`role${user.id}`, roleInfo.currentRole)
  window.ebgnavigation.init(options, null, 'switchRole')
}
const addRoleDefaultEvent = () => {
  // 获取保存到cookie里的数据
  const userRoleId = getCookie(`role${user.id}`)
  if (!userRoleId) {
    // 如果角色id为空，将当前角色id保存到cookie中
    setCookie(`role${user.id}`, roleInfo.currentRole)
  } else {
    // 对当前接口返回的角色id和之前保存的id是否一至
    if (userRoleId !== roleInfo.currentRole) {
      // 重新将最新的id保存到cookie中
      const res = getCurrentRole() || {}
      res.first = true
      switchRoleSuccess(res)
    }
  }
}
const switchRole = (params, data) => {
  ajax({
    type: 'GET',
    jsonp: 'jsonpCallback4',
    url: hosturl + '/desktop/backend/api/portal/switchRole',
    data: params,
    success: (res) => {
      if (Number(res.code) === 1) {
        data.first && (data.first = false) // 是否首次或刷新页面
        data.teacherRoleId = res.data
        data.workbenchUrl = getWorkbenchUrl(menus)
        sessionStorage.setItem('teacherRoleId', res.data)
        localStorage.setItem('teacherRoleId', res.data)
        $ebg.message('角色切换成功', 'success')
        switchRoleSuccess(data)
      } else {
        $ebg.message('角色切换失败', 'error')
      }
    },
    error: () => {
      $ebg.message('角色切换失败', 'error')
    }
  })
}
const renderMessageUnreadNum = (num) => {
  const dom = document.getElementById('setting-list-id-inav-message')
  const redDot = document.querySelector('#ebgnav-hasNewMsg')
  redDot && (handleClass(redDot, 'add', 'red-dot'))
  if (dom) {
    const messageDom = document.querySelector('.ebginav-message')
    if (!messageDom) {
      const html = `<span class="setting-right-con ebginav-message">${num}</span>`
      dom.insertAdjacentHTML('afterbegin', html)
    } else {
      messageDom.innerText = num
    }
  }
}
/**
 * 设置未读消息
 * @param {*} mesArray 各种类型的未读消息
 */
const setMessageUnreadNum = (mesArray) => {
  if (Array.isArray(mesArray)) {
    let _unreadNum = 0
    mesArray.forEach((item) => {
      _unreadNum += item.unreadNum
    })
    meeageTotal = _unreadNum
    meeageTotal && (renderMessageUnreadNum(meeageTotal)) // 渲染消息红点数量
  }
}

// 获取消息
const getMessage = () => {
  if (meeageTotal) {
    renderMessageUnreadNum(meeageTotal)
  } else {
    // 未读消息
    ajax({
      type: 'GET',
      jsonp: `jsonpCallback${Date.now()}`,
      url: hosturl + '/desktop/backend/navigation/getMessageUnreadNum',
      data: {
        messagesTypes: '1,2,3',
        roleType: roleInfo.currentRole
      },
      success: (res) => {
        setMessageUnreadNum(res)
      },
      error: (err) => {
        console.log('getMessageUnreadNum error res', err)
      }
    })
  }
}
