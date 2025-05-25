// 导航整体框架模板
const getBaseTemplate = `
<div class="ebgnav" id="ebgnav-box">
  <div class="ebgnav-primary clearfix">
    <div class="ebgnav-logobox" id="ebgnav-ebgnavLogobox">
      <div id="ebgnav-logo" class="ebgnav-app-logo"></div>
      <div id="ebgnav-app-list" class="ebgnav-app-list-container" style="display:none;"></div>
    </div>
    <div class="ebgnav-primary-navlist">
      <dl id="ebgnav-primaryNavList" class="clearfix">
      </dl>
    </div>
    <div class="ebgnav-operation">
      <dl class="clearfix">
        <dd class="ebgnav-operation-setting" id="ebgnav-operation-setting" style="display: none">
          <a href="javascript:;"><i class="ebginav inav-setting"></i></a>
          <dl class="children" id="ebgnav-ebgnavSetting">
          </dl>
        </dd>
        <dd class="ebgnav-operation-appentry" style="display: none">
          <a href="javascript:;"><i class="ebginav inav-app-entry"></i></a>
          <div class="ebgnav-appentry-box">
            <div class="ebgnav-appentry-application" id="ebgnav-isPlatform">
            </div>
            <div class="ebgnav-appentry-search" style="display:none;">
              <input type="text" placeholder="查找应用" class="search-keyword">
              <button class="search-button"><i class="ebginav inav-search"></i></button>
            </div>
            <div class="ebgnav-appentry-list" id="ebgnav-defaultApplications">
            </div>
            <div class="ebgnav-appentry-btnmore">
              <a id="show-search" href="javascript:;">更多应用</a>
            </div>
          </div>
        </dd>
        <dd class="ebgnav-operation-userinfo">
          <a href="javascript:;" class="userinfo-link" id="ebgnav-navUserinfo">
          </a>
          <div class="ebgnav-userinfo-box">
            <div class="ebgnav-userinfo-userinfo" id="ebgnav-detailUserinfo" >
            </div>
            <dl class="ebgnav-userinfo-list ebgnav-userinfo-list-test" id="user-setting-list"></dl>
            <div class="ebgnav-logout">
              <a class="logout-btn" href="javascript:;">退出登录</a>
            </div>
          </div>
        </dd>
        <dd class="ebgnav-operation-loginbtn" style="display: none"><a href="#" class="ebg-button ebg-button--small ebg-button--primary">欢迎登录</a></dd>
      </dl>
    </div>
  </div>
  <div class="ebgnav-secondary">
    <div class="ebgnav-secondary-warp clearfix">
      <div class="secondary-name" id="ebgnav-secondaryName"></div>
      <div class="ebgnav-secondary-navlist" id="ebgnav-secondary-navlist">
        <dl id="ebgnav-secondaryNavList" class="clearfix">
        </dl>
      </div>
    </div>
  </div>
</div>`

// 导航菜单列表中的更多模板
const getNavMoreTemplate = `
<dd class="ebgnav-primaryNavList ebgnav-primaryNavList-more right ebg-nav-item">
  <a href="JavaScript:;">更多<i class="ebginav inav-down"></i></a>
  <dl class="children more-children"></dl>
</dd>
`

// 导航菜单列表中的更多模板
const getSecMoreTemplate = `
<dd class="ebgnav-secondaryNavList ebgnav-secondaryNavList-more right ebg-nav-item">
  <a href="JavaScript:;">更多<i class="ebginav inav-down"></i></a>
  <dl class="children more-children"></dl>
</dd>
`

// 二级菜单名称模板
const getSecondaryNameTemplate = `
<i class="ebginav inav-secondary-name"></i><span><% this %></span>
`
// 平台logo区模板
const getPlatformLogoTemplate = `
<a id="logo-event" href="<% this.logoLink %>" class="ebgnav-logo-a" target="<% this.logoLinkTarget %>">
  <% if(this.logoSrc) { %>
    <img id="ebgnavigationLogo" class="ebgnav-logo-img" src="<% this.logoSrc %>">
  <% } 
  if(this.name) { %>
  <span class="ebgnav-logo-title text-ellipsis" title="<% this.name %>"><% this.name %></span>
  <% } %>
</a>
`
// 应用logo区模板
const getApplicationLogoTemplate = `
<a id="logo-event" href="<% this.logoLink %>" target="<% this.logoLinkTarget %>" class="ebgnav-app-logo-a">
  <span class="ebgnav-app-logo-span"><img id="ebgnavigationLogo" src="<% this.logoSrc %>"></span>
  <span class="ebgnav-app-name text-ellipsis" title="<% this.appName %>"><% this.appName %></span>
</a>
<% if(this.subtitle) { %>
  <div class="ebgnav-app-subtitle text-ellipsis" title="<% this.subtitle %>"><% this.subtitle %></div>
<% } %>
`
// 推荐应用带icon列表模板
const getAppIconListTemplate = `
<dl class="clearfix">
  <% for(var i = 0; i < this.length; i++) { 
    var item = this[i];
  %>
  <dd><a href="<% item.url %>" target="_blank" title="<% item.appName %>" data-appid="<% item.id %>">
    <span class="img-box"><img src="<% item.src %>"></span>
    <p class="app-name text-ellipsis"><% item.appName %></p>
  </a></dd>
  <%
  }
  %>
</dl>
`
// 导航上用户信息模板
const getNavUserTemplate = `
<span class="ebgnav-userface element-vertical" id="ebgnav-hasNewMsg">
<img src="<% this.userPhoto %>">
</span>
<span class="ebgnav-username" data-userId="<% this.userId %>"><% this.userName %></span>
<span class="ebgnav-userdown"><i class="ebginav inav-arrow-down"></i></span>
`
// 用户详情中的用户信息模板
const getUserinfoTemplate = `
<div class="user-avatar-box">
<img src="<% this.userPhoto %>">
</div>
<div class="ebgnav-userinfo-username text-ellipsis" title="<% this.userName %>" data-userId="<% this.userId %>"><% this.userName %></div>
`

export default {
  getBaseTemplate,
  getNavMoreTemplate,
  getSecMoreTemplate,
  getSecondaryNameTemplate,
  getPlatformLogoTemplate,
  getApplicationLogoTemplate,
  getAppIconListTemplate,
  getNavUserTemplate,
  getUserinfoTemplate
}
