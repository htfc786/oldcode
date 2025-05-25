import $ebg from '../message'
import ajax from '../../utils/http'
import { setCookie, getWorkbenchUrl, getCurrentRole } from '../../utils/utils'
let currentName,
  workbenchUrl,
  identity,
  roleType = '',
  dataList = [],
  res
const teacherRole = (config = {}, hosturl) => {
  res = config
  // 当前可切换的角色列表
  //   roleInfo:
  // currentName: "教师"
  // currentRole: "teacher"
  dataList = config.identityList || []
  // 获取当前默认激活的角色
  const currentRole = getCurrentRole(dataList)
  identity = currentRole.identity || ''
  currentName = currentRole.name || ''
  roleType = (res.roleInfo && res.roleInfo.currentRole) || ''
  sessionStorage.setItem('teacherRoleId', identity)
  localStorage.setItem('teacherRoleId', identity)
  setCookie('teacherRoleId', identity)
  workbenchUrl = getWorkbenchUrl(config.menus)
  // 可切换列表小于2。就不渲染了
  if (Array.isArray(dataList) && dataList.length < 2) return false
  // 渲染角色切换的HTML DOM
  renderDom()
  // 取消默认事件
  const teacherRoleCurrentName = document.querySelector('.teacher-role-current-name')
  teacherRoleCurrentName && teacherRoleCurrentName.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  // 给角色列表添加点击事件
  addClickEvent(workbenchUrl, hosturl)
}

// 绑定事件
const addClickEvent = (workbenchUrl, hosturl) => {
  const domDl = document.querySelector('.teacher-role-box')
  const domList = domDl && domDl.children || []
  for (let i = 0; i < domList.length; i++) {
    const element = domList[i]
    element.addEventListener('click', (e) => {
      e.stopPropagation()
      let data = JSON.parse(element.querySelector('.element-data').innerText || '{}')
      if (window.location.href.indexOf('/workbench') > -1) {
        if (identity === data.identity) return false
      }
      identity = data.identity
      currentName = data.name
      sessionStorage.setItem('teacherRoleId', identity)
      localStorage.setItem('teacherRoleId', identity)
      setCookie('teacherRoleId', identity)
      saveCurrentRoleToAjax(identity, workbenchUrl, hosturl)
      // renderDom()
      // window.open(workbenchUrl.url + '&tarldentity=' + identity, '_self')
    })
  }
}

const saveCurrentRoleToAjax = (identity, workbenchUrl, hosturl) => {
  if (!identity) return false
  const url = hosturl + '/desktop/backend/api/portal/switchIdentity'
  ajax({
    type: 'GET',
    jsonp: 'jsonpCallbackSwitchIdentity',
    url: url,
    data: {
      identity: identity
    },
    success: (res) => {
      $ebg.message('切换成功', 'success')
      window.open(`${workbenchUrl.url}&tarIdentity=${identity}&roleType=${roleType}&`, '_self')
    },
    error: () => {
      $ebg.message('切换失败', 'error')
    }
  })
}

const renderDom = () => {
  const workbench = document.getElementById('ebg-nav-workbench')
  if (!workbench) return ''
  workbench.insertAdjacentHTML('beforeend', `<div class="teacher-role-current-name"><span class="name text-ellipsis" title="${setName(currentName)}}">${setName(currentName)}</span><i class="ebginav inav-down"></i>${renderHtml()}</div>`)
}
const renderHtml = () => {
  let html = ''
  dataList.forEach(item => {
    html += `<dd class="${item.identity === identity ? 'active' : ''}" id="${item.identity}">个人门户<span class="teacher-role-list-label">${setName(item.name)}</span><span class="element-data" style="display:none">${JSON.stringify(item)}</span></dd>`
  })
  return html ? `<dl class="dropdown-box teacher-role-box">${html}</dl>` : ''
}
const setName = (name) => {
  if (!name) return name
  return name.substring(0, 2) + '版'
}

// 点击个人门户事件
const workbenchEvent = () => {
  if (!workbenchUrl) {
    workbenchUrl = getWorkbenchUrl(res.menus)
  }
  const url = `${workbenchUrl.url}&tarIdentity=${identity}&roleType=${roleType}&`
  window.open(url, '_self')
}

export {
  teacherRole,
  workbenchEvent
}
