import ajax from '../../utils/http'
import { appClick } from '../../utils/app-auth'
import { handleClass, templateRender, templateFilter } from '../../utils/utils'
const dom = `<div class="ebgnav__app_search-container hide">
              <div id="data" style="display:none"></div>
              <span class="close__search__box" id="close__search__box"></span>
              <div class="search-input-box">
                <input id="search-input" class="form-input" type="text" placeholder="查找应用" />
                <button id="searchBtn" class="form-search-btn">搜索</button>
              </div>
              <div class="ebgnav__app_search-box">
                <div class="serach-app-sub-con">
                  <div class="result hide">以下是“<strong id="serachText"></strong>”相关的应用</div>
                  <ul id="app-list" class="app-list platform-app-list clearfix">
                    
                  </ul>
                  <div id="loader" class="loader-box show"><div class="loader"></div><p>数据加载中…</p></div>
                  <div class="no-data hide">
                    <p>暂无搜索数据</p>
                  </div>
                </div>
              </div>
             </div>
            `
const showLoader = () => {
  const loader = document.querySelector('#loader')
  if (loader) {
    loader.className = 'loader-box show'
  }
}

const hideLoader = () => {
  const loader = document.querySelector('#loader')
  if (loader) {
    loader.className = 'loader-box hide'
  }
}

let appDatas = {}
const hideSearchContainer = () => {
  console.log('hideSearchContainer')
  const search = document.querySelector('.ebgnav__app_search-container')
  // search.classList = 'ebgnav__app_search-container hide'
  handleClass(search, 'add', 'hide')
  document.getElementById('search-input').value = ''
  // document.querySelector('.result').className = 'result hide'
  handleClass(document.querySelector('.result'), 'add', 'hide')
  document.body.style.overflow = ''
}
const showSearchContainer = (apiUrl, jsonpHost) => {
  handleClass(document.querySelector('.ebgnav__app_search-container'), 'delete', 'hide')
  renderSearchData(appDatas.classifies, apiUrl, jsonpHost)
  document.body.style.overflow = 'hidden'
}

const filterApps = (e, apiUrl, jsonpHost) => {
  if (appDatas.classifies && appDatas.classifies.length) {
    const value = e.value
    const arr = []
    const obj = {}
    const serachText = document.getElementById('serachText')
    document.getElementsByClassName('no-data')[0].className = 'no-data hide'
    if (!value) {
      renderSearchData(appDatas.classifies, apiUrl, jsonpHost)
      document.getElementsByClassName('result')[0].className = 'result hide'
      return
    }
    if (value) {
      serachText.innerText = value
      document.getElementsByClassName('result')[0].className = 'result'
    }
    appDatas.classifies.forEach((item) => {
      obj[item.id] = {
        kind: item.kind,
        id: item.id,
        items: []
      }
      item.items &&
        item.items.forEach((sub) => {
          if (sub.name.indexOf(value) !== -1) {
            obj[item.id].items.push({
              appTerminalStr: sub.appTerminalStr,
              fav: sub.fav,
              id: sub.id,
              name: sub.name,
              url: sub.url
            })
          }
        })
    })
    for (const key in obj) {
      if (obj[key].items.length) {
        arr.push(obj[key])
      }
    }
    renderSearchData(arr, apiUrl, jsonpHost)
    if (!arr.length) {
      document.getElementsByClassName('no-data')[0].className = 'no-data'
    }
  }
}

const addEvent = (apiUrl, jsonpHost) => {
  // 关闭弹框
  const close = document.querySelector('#close__search__box')
  close.addEventListener('click', hideSearchContainer)
  const searchBtn = document.getElementById('searchBtn')
  const inputEvent = document.getElementById('search-input')
  searchBtn.onclick = filterApps.bind(this, inputEvent, apiUrl, jsonpHost)

  const dd = document.getElementsByClassName('item-list')
  const len = dd.length
  for (let i = 0; i < len; i++) {
    let item = dd[i]
    item.addEventListener('click', () => {
      const name = item.getAttribute('title')
      const id = item.getAttribute('id')
      const url = item.getAttribute('url')
      appClick({
        name,
        id,
        url,
        item,
        target: '_blank',
        hosturl: jsonpHost,
        apiUrl
      })
    })
  }
}

const searchTemplate = `
<% for(var i = 0; i < this.length; i++) { 
  var item = this[i];
%>
<li class="app-list-column">
  <dl class="column-box">
    <dt class="title"><% item.kind %></dt>
    <% for(var j = 0; j < item.items.length; j++) {
      var sub = item.items[j];
    %>
    <dd class="item-list text-ellipsis" url="<% sub.url %>" title="<% sub.name %>" id="<% sub.id %>">
      <span><% sub.name %></span>
    </dd>
    <%
    }
    %>
  </dl>
</li> 
<%
}
%>`
const renderSearchData = (data, apiUrl, jsonpHost) => {
  const appListDom = document.getElementById('app-list')
  if (appListDom && data) {
    appListDom.innerHTML = templateRender(templateFilter(searchTemplate), data)
  } else {
    const noData = document.querySelector('.no-data')
    noData.className = 'no-data'
  }
  hideLoader() // 隐藏loading
  addEvent(apiUrl, jsonpHost) // 添加事件
}
const enterEvent = (apiUrl, jsonpHost) => {
  const inputEvent = document.getElementById('search-input')
  document.onkeydown = function (event) {
    var e = event || window.event
    // 回车键的键值为13
    if (e && e.keyCode === 13) {
      filterApps(inputEvent, apiUrl, jsonpHost)
    }
  }
}

// 获取应用数据
const getAllAppsData = (apiUrl, { hosturl }) => {
  const searchContainer = document.querySelector('.ebgnav__app_search-container')
  if (!searchContainer) {
    document.body.insertAdjacentHTML('afterbegin', dom)
    enterEvent(apiUrl, hosturl)
  }
  showLoader() // 显示Loading
  var url = apiUrl.menus + '?t=' + new Date().getTime()
  ajax({
    url: hosturl + url,
    jsonp: 'jsonp',
    data: {
      isSaas: true
    },
    success: function (res) {
      // res = {}
      appDatas = res.apps && res.apps[0] || []
      showSearchContainer(apiUrl, hosturl)
    },
    error: function (err) {
      console.log(err)
      hideLoader()
    }
  })
}
export {
  getAllAppsData
}
