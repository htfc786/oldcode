import ajax from '../../utils/http'
import { removeElement } from '../../utils/utils'
import { avatar } from '../../utils/img' // 图片base64地址
const guidanceEntry = (user, hosturl) => {
  if (user && user.id && localStorage.getItem(`isGuidance-${user.id}`) === 'true') return false
  ajax({
    type: 'GET',
    jsonp: `jsonpCallback${Date.now()}`,
    url: `${hosturl}/desktop/backend/indexPage/getHasNavigationLog.do`,
    success: (res) => {
      // 返回结果 === false 显示新手指引
      if (!res.success) {
        renderGuidance(user, hosturl)
      }
    },
    error: () => {
    }
  })
}
// /ebgnavigation/img/guidance-step-2.gif /ebgnavigation/img/guidance-step-1.gif
const renderGuidance = (user, hosturl) => {
  const guidance = document.querySelector('.guidance-container')
  guidance && removeElement(guidance)
  const p1 = document.querySelector('.ebgnav-operation-appentry')
  const p2 = document.querySelector('.ebgnav-operation-userinfo')
  if (!p1 || !p2) return false
  const dom = `
  <div class="guidance-container">
    <div class="step-guidance step1" style="right: ${p2.offsetWidth + 24}px; top: 0; display:block;">
      <div class="box">
        <img class="img-gif" src="/ebgnavigation/img/guidance-step-1.gif" />
        <div class="discription">
          <h3>快捷应用入口与搜索入口</h3>
          <p>点击应用快捷入口，可以查看管理员设置的常用应用，原来导航栏上的应用入口与搜索入口迁移至此处！</p>
        </div>
        <div>
          <a class="ebg-button ebg-button--small ebg-button--text" href="javascript:" id="guidance-jump">跳过</a>
          <button class="ebg-button ebg-button--line ebg-button--small guidance-btn fr">下一步</button>
        </div>
      </div>
      <div class="guidance-arrow" style="width: 40px"><i class="ebginav inav-app-entry"></i></div>
    </div>
    <div class="step-guidance step2" style="right: 24px; top: 0; display:none;">
      <div class="box">
        <img class="img-gif" src="/ebgnavigation/img/guidance-step-2.gif" />
        <div class="discription">
          <h3>我的消息迁移至此处啦~</h3>
        </div>
        <div class="btn-box">
          <button class="ebg-button ebg-button--line ebg-button--small guidance-btn fr">知道了</button>
        </div>
      </div>
      <div class="guidance-arrow">
        <img class="avatar" src="${user.userPhotos || avatar}" />
        <span class="name text-ellipsis">${user.name}</span>
      </div>
    </div>
  </div>
  `
  const g = document.querySelector('.guidance-container')
  g && removeElement(g)
  document.body.insertAdjacentHTML('beforeend', dom)
  document.body.style.overflow = 'hidden'
  addEvent(user, hosturl)
}

const addEvent = (user, hosturl) => {
  const guidance = document.querySelector('.guidance-container')
  const btns = guidance.querySelectorAll('button')
  for (let i = 0; i < btns.length; i++) {
    const item = btns[i]
    item.addEventListener('click', (e) => {
      if (e.target.innerText === '下一步') {
        document.querySelector('.step1').style.display = 'none'
        document.querySelector('.step2').style.display = 'block'
      } else {
        guidanceComplete(user, hosturl)
      }
    })
  }
  const jump = document.querySelector('#guidance-jump')
  jump && jump.addEventListener('click', () => {
    guidanceComplete(user, hosturl)
  })
}

const guidanceComplete = (user, hosturl) => {
  const guidance = document.querySelector('.guidance-container')
  ajax({
    type: 'GET',
    jsonp: 'callback',
    url: `${hosturl}/desktop/backend/indexPage/insertNavigationLog.do`,
    success: (res) => {
      console.log(res)
      localStorage.setItem(`isGuidance-${user.id}`, 'true')
      removeElement(guidance)
      document.body.style.overflow = ''
    },
    error: () => {
      removeElement(guidance)
      document.body.style.overflow = ''
    }
  })
}

export default guidanceEntry
