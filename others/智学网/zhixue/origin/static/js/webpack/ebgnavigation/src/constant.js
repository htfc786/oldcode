import { templateFilter } from './utils/utils'
import * as template from './template'
import { avatar } from './utils/img'
export const config = {
  type: 'platform', // platform 平台 application 应用
  theme: '',
  primaryNav: {
    platformLogo: '',
    platformName: '',
    appLogo: '',
    platformNavList: [],
    appNavList: [],
    appList: [],
    appName: '',
    subtitle: ''
  },
  secondaryNav: {
    secondaryNavList: []
  },
  operation: {
    settingList: []
  }
}

// 老导航逻辑需要的数据（具体用处不详）
export const apiUrl = {
  menus: '/desktop/backend/api/portal/menus.do',
  appStatus: '/desktop/backend/appInfo/status',
  appEnterable: '/desktop/backend/indexPage/appEnterable.do'
}

export // 基础参数
const base = {
  // hosturl: 'https://ncsdhq.ecstest.ledc.changyan.cn',
  hosturl: '',
  defaultNavList: [],
  platformNavList: [],
  noLoginShow: 1,
  themeList: [],
  themeDefault: '2',
  theme: '',
  user: {},
  unreadNum: 0,
  navbarConfig: {},
  applicationsList: [],
  isGuidance: false,
  defaultAvatar: avatar, // 默认头像,当前用户未设置头像时显示
  ssoRequestNum: 0 // sso接口重调次数计数器
}

// 模板缓存
export const tpl = {
  baseTemp: templateFilter(template.getBaseTemplate),
  moreTemp: templateFilter(template.getNavMoreTemplate),
  moreSecTemp: templateFilter(template.getSecMoreTemplate),
  secondaryNameTemp: templateFilter(template.getSecondaryNameTemplate),
  platformLogoTemp: templateFilter(template.getPlatformLogoTemplate),
  applicationLogoTemp: templateFilter(template.getApplicationLogoTemplate),
  appIconListTemp: templateFilter(template.getAppIconListTemplate),
  navUserTemp: templateFilter(template.getNavUserTemplate),
  detailUserTemp: templateFilter(template.getUserinfoTemplate)
}
