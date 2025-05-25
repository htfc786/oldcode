define("pages/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e, t = (e = require("../../utils/loggers/index")) && e.__esModule ? e : {
            default: e
        },
        n = require("../../configs/MsgCfgIndex");
    var i, o = require("../../clients/BeaconClient"),
        a = require("../../stores/UserStore"),
        r = require("../../actions/UserAction"),
        s = require("../../actions/AppAction"),
        c = require("../../stores/AppStore"),
        u = require("../../clients/WemeetClient"),
        g = require("../../utils/util.js").isPad,
        l = new t.default({
            pageName: "index",
            aegisLogEnable: !0,
            wxLogEnable: !1
        }),
        d = !1,
        p = !0;
    Page({
        data: {
            exit: {
                show: !1,
                content: "",
                btnText: ""
            },
            currentYear: (new Date).getFullYear()
        },
        onLoad: function(e) {
            var t = this;
            s.pageExposed("index"), l.info("onLoad: ".concat(JSON.stringify(e)));
            var n = (e || {}).chn,
                a = void 0 === n ? "" : n;
            a && o.report("mp_open_channel", {
                chn: a
            }), i = e;
            var c = Object.keys(e || {}).length;
            p = 0 === c, this.msgDialog = this.selectComponent("#message-dialog").component, this.makeSureLoginStateIsValid().then((function() {
                t.init()
            })).catch((function(e) {
                t.showExitDialog({
                    content: "加载失败，请退出重试",
                    btnText: "确定"
                }), r.setOpenId(""), l.warn("index onLoad error since got openID failed: ".concat(e))
            }))
        },
        makeSureLoginStateIsValid: function() {
            return new Promise((function(e, t) {
                var n = !!a.getXMPPToken() && r.isXMPPTokenValid();
                n || r.setPhoneNum("");
                var i = !!a.getOpenID();
                if (i && r.isCGITokenValid() && n) e("");
                else {
                    var o = "";
                    o = i ? n ? "cgi token not valid" : "xmpp token not valid" : "openID not found", l.warn("ready to do WeMeet-Login, because: ".concat(o)), r.doLogin().then((function() {
                        e("")
                    })).catch((function(e) {
                        t(e)
                    }))
                }
            }))
        },
        init: function() {
            var e = this;
            if (this.setSceneReport(), !c.getIsQYWX() || c.isSupportQYWX())
                if (c.getEnvSwitchEnable() || c.getIsSupportDevice())
                    if (a.isAccountIllegal()) this.showExitDialog({
                        content: "账号状态异常",
                        btnText: "确定"
                    });
                    else {
                        if (!c.getEnvSwitchEnable() && !c.isDevtools() && !c.getIsSupportMixAudio()) return this.showExitDialog({
                            content: "您的微信版本过低，请更新至最新版本后重试",
                            btnText: "关闭"
                        }), void o.report("mp_wechat_ver_less_than_mixaudio_required");
                        if (c.getIsAndroid8027Bug()) {
                            var t = function() {
                                setTimeout((function() {
                                    e.msgDialog.open(n.android8027BugDialog)
                                }), 0)
                            };
                            return n.android8027BugDialog.okBtn.onClick = function() {
                                l.reportCls("cls_android_bug_8027_fail_1"), wx.updateWeChatApp(), t()
                            }, n.android8027BugDialog.cancelBtn.onClick = function() {
                                l.reportCls("cls_android_bug_8027_fail_0"), t()
                            }, t(), void l.reportCls("cls_android_bug_8027_success")
                        }
                        u.isXMPPTokenValid() && (p && d ? o.report("tiny_house_clicked") : this.jumpToJoinMeetingPage()), this.fetchSubscribeStatus()
                    } else {
                var i = g(),
                    r = c.isOhOs() ? "腾讯会议小程序暂不支持鸿蒙系统。" : "腾讯会议小程序暂不支持在".concat(i ? "pad" : "PC", "端打开，请通过手机使用。");
                this.showExitDialog({
                    content: r,
                    btnText: "知道了"
                })
            } else this.showExitDialog({
                content: "企业微信版本过低，请升级后重新打开",
                btnText: "知道了"
            })
        },
        onGoOnTapped: function() {
            this.jumpToJoinMeetingPage()
        },
        jumpToJoinMeetingPage: function() {
            var e = "";
            Object.keys(i || {}).forEach((function(t) {
                e += e ? "&" : "?", e += "".concat(t, "=").concat(i[t])
            })), d || (d = !0), wx.redirectTo({
                url: "../sub-preMeeting/join-meeting/join-meeting".concat(e)
            })
        },
        fetchSubscribeStatus: function() {
            var e = a.getUnionId(),
                t = a.getOpenID(),
                n = a.getCGIToken();
            r.getUserSubscribeStatus(t, e, n)
        },
        goPrivacyPage: function() {
            wx.navigateTo({
                url: "./privacy/index"
            })
        },
        setSceneReport: function() {
            var e = wx.getLaunchOptionsSync(),
                t = e.query,
                n = e.scene,
                i = e.referrerInfo;
            t && t.chn && [1020, 1035, 1037, 1043, 1058, 1067, 1074, 1082, 1091].includes(n) && o.report("open_mp_by_scene", {
                scene: n,
                chn: t.chn,
                appId: (i || {}).appId || ""
            })
        },
        showExitDialog: function(e) {
            this.setData({
                "exit.content": e.content || "异常，请重新进入",
                "exit.btnText": e.btnText || "确定",
                "exit.show": !0
            })
        }
    });
});


define("pages/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    
    // 引入必要的模块和工具
    require("../../@babel/runtime/helpers/Arrayincludes");
    var LoggerModule = (LoggerModule = require("../../utils/loggers/index")) && LoggerModule.__esModule ? LoggerModule : { default: LoggerModule };
    var MsgCfgIndex = require("../../configs/MsgCfgIndex");
    var BeaconClient = require("../../clients/BeaconClient");
    var UserStore = require("../../stores/UserStore");
    var UserAction = require("../../actions/UserAction");
    var AppAction = require("../../actions/AppAction");
    var AppStore = require("../../stores/AppStore");
    var WemeetClient = require("../../clients/WemeetClient");
    var isPad = require("../../utils/util.js").isPad;
    
    // 创建日志记录器实例
    var logger = new LoggerModule.default({
        pageName: "index",
        aegisLogEnable: true,
        wxLogEnable: false
    });
    
    var isFirstLoad = false;
    var isEmptyParams = true;
    
    Page({
        data: {
            exit: {
                show: false,
                content: "",
                btnText: ""
            },
            currentYear: (new Date()).getFullYear()
        },
        
        onLoad: function(params) {
            var that = this;
            AppAction.pageExposed("index");
            logger.info("onLoad: ".concat(JSON.stringify(params)));
            
            var channel = (params || {}).chn || "";
            if (channel) {
                BeaconClient.report("mp_open_channel", {
                    chn: channel
                });
            }
            params = params || {};
            isEmptyParams = Object.keys(params).length === 0;
            this.msgDialog = this.selectComponent("#message-dialog").component;
            
            this.makeSureLoginStateIsValid().then(function() {
                that.init();
            }).catch(function(error) {
                that.showExitDialog({
                    content: "加载失败，请退出重试",
                    btnText: "确定"
                });
                UserAction.setOpenId("");
                logger.warn("index onLoad error since got openID failed: ".concat(error));
            });
        },
        
        makeSureLoginStateIsValid: function() {
            return new Promise(function(resolve, reject) {
                var isValidXMPP = !!UserStore.getXMPPToken() && UserAction.isXMPPTokenValid();
                if (!isValidXMPP) {
                    UserAction.setPhoneNum("");
                }
                
                var hasOpenID = !!UserStore.getOpenID();
                if (hasOpenID && UserAction.isCGITokenValid() && isValidXMPP) {
                    resolve("");
                } else {
                    var reason = hasOpenID 
                        ? (isValidXMPP ? "cgi token not valid" : "xmpp token not valid") 
                        : "openID not found";
                    logger.warn("ready to do WeMeet-Login, because: ".concat(reason));
                    
                    UserAction.doLogin().then(function() {
                        resolve("");
                    }).catch(function(error) {
                        reject(error);
                    });
                }
            });
        },
        
        init: function() {
            var that = this;
            this.setSceneReport();
            
            if (!AppStore.getIsQYWX() || AppStore.isSupportQYWX()) {
                if (AppStore.getEnvSwitchEnable() || AppStore.getIsSupportDevice()) {
                    if (UserStore.isAccountIllegal()) {
                        this.showExitDialog({
                            content: "账号状态异常",
                            btnText: "确定"
                        });
                    } else {
                        if (!AppStore.getEnvSwitchEnable() && !AppStore.isDevtools() && !AppStore.getIsSupportMixAudio()) {
                            this.showExitDialog({
                                content: "您的微信版本过低，请更新至最新版本后重试",
                                btnText: "关闭"
                            });
                            BeaconClient.report("mp_wechat_ver_less_than_mixaudio_required");
                            return;
                        }
                        
                        if (AppStore.getIsAndroid8027Bug()) {
                            var showDialog = function() {
                                setTimeout(function() {
                                    that.msgDialog.open(MsgCfgIndex.android8027BugDialog);
                                }, 0);
                            };
                            
                            MsgCfgIndex.android8027BugDialog.okBtn.onClick = function() {
                                logger.reportCls("cls_android_bug_8027_fail_1");
                                wx.updateWeChatApp();
                                showDialog();
                            };
                            
                            MsgCfgIndex.android8027BugDialog.cancelBtn.onClick = function() {
                                logger.reportCls("cls_android_bug_8027_fail_0");
                                showDialog();
                            };
                            
                            showDialog();
                            logger.reportCls("cls_android_bug_8027_success");
                            return;
                        }
                        
                        if (WemeetClient.isXMPPTokenValid()) {
                            if (isEmptyParams && isFirstLoad) {
                                BeaconClient.report("tiny_house_clicked");
                            } else {
                                this.jumpToJoinMeetingPage();
                            }
                        }
                        this.fetchSubscribeStatus();
                    }
                } else {
                    var isPadDevice = isPad();
                    var message = AppStore.isOhOs() 
                        ? "腾讯会议小程序暂不支持鸿蒙系统。" 
                        : "腾讯会议小程序暂不支持在".concat(isPadDevice ? "pad" : "PC", "端打开，请通过手机使用。");
                    this.showExitDialog({
                        content: message,
                        btnText: "知道了"
                    });
                }
            } else {
                this.showExitDialog({
                    content: "企业微信版本过低，请升级后重新打开",
                    btnText: "知道了"
                });
            }
        },
        
        onGoOnTapped: function() {
            this.jumpToJoinMeetingPage();
        },
        
        jumpToJoinMeetingPage: function() {
            var queryParams = "";
            Object.keys(params || {}).forEach(function(key) {
                queryParams += queryParams ? "&" : "?";
                queryParams += "".concat(key, "=").concat(params[key]);
            });
            isFirstLoad = true;
            wx.redirectTo({
                url: "../sub-preMeeting/join-meeting/join-meeting".concat(queryParams)
            });
        },
        
        fetchSubscribeStatus: function() {
            var unionId = UserStore.getUnionId();
            var openId = UserStore.getOpenID();
            var cgiToken = UserStore.getCGIToken();
            UserAction.getUserSubscribeStatus(openId, unionId, cgiToken);
        },
        
        goPrivacyPage: function() {
            wx.navigateTo({
                url: "./privacy/index"
            });
        },
        
        setSceneReport: function() {
            var launchOptions = wx.getLaunchOptionsSync();
            var query = launchOptions.query;
            var scene = launchOptions.scene;
            var referrerInfo = launchOptions.referrerInfo;
            
            if (query && query.chn && [1020, 1035, 1037, 1043, 1058, 1067, 1074, 1082, 1091].includes(scene)) {
                BeaconClient.report("open_mp_by_scene", {
                    scene: scene,
                    chn: query.chn,
                    appId: (referrerInfo || {}).appId || ""
                });
            }
        },
        
        showExitDialog: function(options) {
            this.setData({
                "exit.content": options.content || "异常，请重新进入",
                "exit.btnText": options.btnText || "确定",
                "exit.show": true
            });
        }
    });
});