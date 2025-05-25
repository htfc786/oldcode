define("sdk/wemeet.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../@babel/runtime/helpers/Objectvalues");
    var e = require("../@babel/runtime/helpers/typeof");
    module.exports = function(t) {
        function n(e) {
            if (i[e]) return i[e].exports;
            var r = i[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        var i = {};
        return n.m = t, n.c = i, n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(t, i) {
            if (1 & i && (t = n(t)), 8 & i) return t;
            if (4 & i && "object" == e(t) && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & i && "string" != typeof t)
                for (var o in t) n.d(r, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
        e.exports = n(1)
    }, function(e, t, n) {
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(22),
            a = n(34),
            u = n(33),
            c = n(35),
            l = n(36),
            d = n(12),
            h = n(11),
            _ = n(13),
            p = function() {
                function e() {
                    i(this, e), this.authService = o.getInstance(), this.meetingUserController = s.getInstance(), this.meetingAudioController = a.getInstance(), this.meetingVideoController = u.getInstance(), this.preMeetingManager = c.getInstance(), this.scout = l.getInstance(), this.loggerReportor = _.getInstance(), this.logger = new d, this.constants = h, this.appId = ""
                }
                return r(e, [{
                    key: "setAppId",
                    value: function(e) {
                        "" !== this.appId && this.appId !== e && console.log("NOTICE: setting AppId from", this.appId, "to", e), this.appId = e, this.meetingUserController.app_id = this.appId, this.preMeetingManager.app_id = this.appId
                    }
                }, {
                    key: "getVersion",
                    value: function() {
                        return h.Version
                    }
                }, {
                    key: "queryAuthService",
                    value: function() {
                        return this.authService
                    }
                }, {
                    key: "queryMeetingUserController",
                    value: function() {
                        return this.meetingUserController
                    }
                }, {
                    key: "queryMeetingAudioController",
                    value: function() {
                        return this.meetingAudioController
                    }
                }, {
                    key: "queryMeetingVideoController",
                    value: function() {
                        return this.meetingVideoController
                    }
                }, {
                    key: "querySettingService",
                    value: function() {
                        return this.settingService
                    }
                }, {
                    key: "queryPreMeetingManager",
                    value: function() {
                        return this.preMeetingManager
                    }
                }, {
                    key: "queryLoggerReportor",
                    value: function() {
                        return this.loggerReportor
                    }
                }, {
                    key: "queryLogger",
                    value: function() {
                        return this.logger
                    }
                }, {
                    key: "setTimeout",
                    value: function(e) {
                        this.authService.xmppService.timeout = e
                    }
                }, {
                    key: "getTimeout",
                    value: function() {
                        return this.authService.xmppService.timeout
                    }
                }, {
                    key: "isSupportWebRTC",
                    value: function() {
                        return this.scout.isSupportWebRTC()
                    }
                }, {
                    key: "sendXMPPRaw",
                    value: function(e) {
                        return this.authService.xmppService.freeXMPPRequest(e)
                    }
                }, {
                    key: "chaos",
                    get: function() {
                        return this.logger.chaos
                    },
                    set: function(e) {
                        this.logger.chaos = e
                    }
                }], [{
                    key: "getInstance",
                    value: function(t, n) {
                        return void 0 === t ? (console.error("WeMeetSDK.getInstance(appId): you must specify appId!"), null) : (void 0 === e.prototype.instance && (e.prototype.instance = new e), console.log("WeMeetSDK returning instance with sdkappid:", t), e.prototype.instance.setAppId(t), "function" == typeof n && e.prototype.instance.logger.setAjaxSender(n), e.prototype.instance)
                    }
                }, {
                    key: "getSDKConstants",
                    value: function() {
                        return h
                    }
                }]), e
            }();
        e.exports = p
    }, function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e.exports = function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        function i(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = c(e);
                if (t) {
                    var r = c(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return u(this, n)
            }
        }
        var r = n(2),
            o = n(3),
            s = n(5),
            a = n(6),
            u = n(8),
            c = n(10),
            l = n(11),
            d = n(12),
            h = n(14),
            _ = function(e) {
                function t() {
                    var e;
                    r(this, t), (e = n.call(this)).logger = new d, e.loginState = l.LoginState.LOGIN_STATE_NULL, e.xmppService = h.getInstance(), e.eventListenersMap = new Map, e.uid = null, e.onLogin = e.onLogin.bind(s(e)), e.onLogout = e.onLogout.bind(s(e)), e.onConnFailed = e.onConnFailed.bind(s(e));
                    var i = function(t) {
                        return e[t] = e[t].bind(s(e))
                    };
                    return i("login"), i("logout"), i("onLogout"), i("getLoginState"), i("registerEventHandler"), i("getEventHandler"), i("internalLogin"), i("internalLogout"), e.xmppService.registerEventHandler("login", e.onLogin), e.xmppService.registerEventHandler("logout", e.onLogout), e.xmppService.registerEventHandler("connfailed", e.onConnFailed), e
                }
                a(t, e);
                var n = i(t);
                return o(t, [{
                    key: "login",
                    value: function(e) {
                        if (this.logger.info("login start"), 0 === e.app_uid.length) return console.error("SdkError.SDK_ERROR_INVALID_PARAMS"), l.SdkError.SDK_ERROR_INVALID_PARAMS;
                        if (e.auth_type === l.AuthType.AUTH_TYPE_USER) {
                            if (0 === e.app_token.length) return console.error("login: token length should be > 0"), l.SdkError.SDK_ERROR_INVALID_PARAMS;
                            if (e.app_uid.length < 3) return console.error("login: uid length should be > 3"), l.SdkError.SDK_ERROR_INVALID_PARAMS
                        }
                        return e.env_id || (e.env_id = ""), this.loginState === l.LoginState.LOGIN_STATE_LOGOUT || this.loginState === l.LoginState.LOGIN_STATE_NULL ? (this.authType = e.auth_type, e.sdk_id = l.SDK_ID, this.internalLogin(e), l.SdkError.SDK_ERROR_SUCCESS) : (console.error("SdkError.SDK_ERROR_INVALID_OPERATION"), l.SdkError.SDK_ERROR_INVALID_OPERATION)
                    }
                }, {
                    key: "getLoginState",
                    value: function() {
                        return this.logger.info(this.loginState), this.loginState
                    }
                }, {
                    key: "logout",
                    value: function() {
                        return this.logger.info("logout start"), this.loginState === l.LoginState.LOGIN_STATE_LOGIN ? (this.logger.info("calling this.internalLogout"), this.internalLogout(), l.SdkError.SDK_ERROR_SUCCESS) : l.SdkError.SDK_ERROR_INVALID_OPERATION
                    }
                }, {
                    key: "onLogin",
                    value: function(e, t) {
                        e ? (this.loginState = l.LoginState.LOGIN_STATE_LOGIN, this.xmppService.jid && (this.uid = this.xmppService.jid.split("/")[0], this.logger.setUid(this.uid), this.logger.report(1, "login", "login success"))) : this.loginState = l.LoginState.LOGIN_STATE_NULL, this.getEventHandler("login")(e, t)
                    }
                }, {
                    key: "onLogout",
                    value: function(e, t) {
                        console.log("auth_service logout"), this.uid = null, this.logger.report(1, "logout", "disconnect:", t), this.loginState = l.LoginState.LOGIN_STATE_LOGOUT, this.uid && this.logger.setUid(this.uid + "(disconnected)"), this.getEventHandler("logout")(e, t)
                    }
                }, {
                    key: "onConnFailed",
                    value: function(e, t) {
                        this.getEventHandler("connfailed")(e, t)
                    }
                }, {
                    key: "internalLogin",
                    value: function(e) {
                        this.loginState = l.LoginState.LOGIN_STATE_LOGGINING, this.logger.report(1, "login", "user login with\n          uid: ".concat(e.app_uid, "\n          instance id: ").concat(l.INSTANCE_ID, "\n          sdkappid:  ").concat(e.app_id, "\n          sdk version: ").concat(l.Version, "\n          sdk id: ").concat(e.sdk_id, "\n          env id: ").concat(e.env_id, "\n        "));
                        var t = e.app_uid + "/" + l.INSTANCE_ID.toString(),
                            n = e.app_token,
                            i = e.token_obj;
                        i.app_id = e.app_id, i.auth_type = e.auth_type, i.sdk_id = e.sdk_id, i.instance_id = l.INSTANCE_ID, i.env_id = e.env_id, this.xmppService.connect(t, n, i)
                    }
                }, {
                    key: "internalLogout",
                    value: function() {
                        this.logger.info("calling xmppService.disconnect"), this.xmppService.disconnect()
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                    }
                }]), t
            }(n(20));
        e.exports = _
    }, function(e, t) {
        e.exports = function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        var i = n(7);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && i(e, t)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        function n(t, i) {
            return e.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t, i)
        }
        e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        var i = n(9).default,
            r = n(5);
        e.exports = function(e, t) {
            if (t && ("object" === i(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return r(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(t, n) {
        function i(n) {
            return t.exports = i = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t)
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports, i(n)
        }
        t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
    }, function(e, t) {
        function n(t) {
            return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
        }
        e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        var n = "unknown";
        navigator && (n = navigator.platform);
        var i = {
                INSTANCE_WEB: 5,
                INSTANCE_MP: 8
            },
            r = i.INSTANCE_MP,
            o = {
                BEGIN_INVITE: 1,
                SUCC_ENTER: 2,
                USER_FAIL: 3,
                INMEETING_HANGUP: 4,
                INVITER_CANCEL: 5,
                UNKNOWN: 100
            },
            s = {
                INVITING: 1,
                FAILED: 2,
                UNKNOWN: 100
            },
            a = {
                BEING_INVITED: 1,
                ENTERED_MEETING: 4,
                HUNGUP: 6,
                CANCELED: 7,
                FAILED_TO_INVITE: 8,
                NO_RESPONSE: 9
            };
        e.exports = {
            ConfWebSocketUrl: "wss://meetingwsdev.medialab.qq.com/websocket/connection",
            Version: "v2.2.1",
            Os: n,
            Platform: "mp",
            InstanceType: i,
            INSTANCE_ID: r,
            AuthType: {
                AUTH_TYPE_NONE: 0,
                AUTH_TYPE_USER: 1,
                AUTH_TYPE_VISITOR: 2
            },
            LoginState: {
                LOGIN_STATE_NULL: 0,
                LOGIN_STATE_LOGIN: 1,
                LOGIN_STATE_LOGGINING: 2,
                LOGIN_STATE_LOGOUT: 3
            },
            InviteEvent: o,
            InviteStatus: s,
            ParticipationStatus: a,
            inviteEventToStatus: function(e) {
                e = parseInt(e);
                var t = s.UNKNOWN;
                switch (e) {
                    case o.BEGIN_INVITE:
                        t = s.INVITING;
                        break;
                    case o.USER_FAIL:
                        t = s.FAILED;
                        break;
                    default:
                        t = s.UNKNOWN
                }
                return console.log(t), t
            },
            HangupReason: {
                USER_HANGUP: 1,
                INVITATION_CANCELED: 2,
                KICKED_OUT: 3,
                DISACCEPT: 4,
                HEARTBEAT_TIMEOUT: 5,
                SYSTEM_HANGUP: 6,
                KICKED_BY_MULTI_INSTANCE: 7
            },
            participationStatusToInviteStatus: function(e) {
                e = parseInt(e);
                var t = s.UNKNOWN;
                switch (e) {
                    case a.BEING_INVITED:
                        t = s.INVITING;
                        break;
                    case a.HUNGUP:
                    case a.FAILED_TO_INVITE:
                    case a.NO_RESPONSE:
                        t = s.FAILED;
                        break;
                    default:
                        t = s.UNKNOWN
                }
                return console.log(t), t
            },
            DeviceType: {
                CAMERA: 0,
                MIC: 1,
                SPEAKER: 2,
                UNKNOWN: 3
            },
            SdkError: {
                SDK_ERROR_SUCCESS: 0,
                SDK_ERROR_ENGINE_NOT_INIT: 1,
                SDK_ERROR_ENGINE_INIT_ERROR: 2,
                SDK_ERROR_AV_ENGINE_ERROR: 3,
                SDK_ERROR_SERVICE_ERROR: 4,
                SDK_ERROR_NOT_IMPL: 5,
                SDK_ERROR_OUT_OF_MEMORY: 6,
                SDK_ERROR_INVALID_PARAMS: 7,
                SDK_ERROR_INVALID_OPERATION: 8,
                SDK_ERROR_NO_PEMISSION: 9,
                SDK_ERROR_UNKNOWN: 99,
                WEBSOCKET_ERROR_EVICTED: 4014,
                WEBSOCKET_ERROR_LIMITED: 4015
            },
            SdkResult: {
                SDK_RESULT_SUCCESS: 0,
                SDK_RESULT_APP_AUTH_FAILED: 1,
                SDK_RESULT_USER_AUTH_FAILED: 2,
                SDK_RESULT_TIMEOUT: 3,
                SDK_RESULT_CREATE_ERROR: 4,
                SDK_RESULT_LOGOUT_ERROR: 5,
                SDK_RESULT_PARSE_ERROR: 6,
                SDK_RESULT_REQUEST_TIMEOUT: 7
            },
            MediaType: {
                AUDIO: 1,
                VIDEO: 2,
                SCREEN_SHARE: 3,
                LOCAL_RECORD: 4
            },
            LimitState: {
                NO_LIMIT: 0,
                FULL: 1
            },
            UserState: {
                JOIN: 1,
                LEAVE: 2,
                UPDATE: 3,
                KICKED: 4,
                OFFLINE: 5,
                UPLEVEL: 8,
                DOWNLEVEL: 9
            },
            SwitchReason: {
                BYSELF: 1,
                BYHOST: 2
            },
            SwitchStreamReason: {
                OPERATE_BIND_DEVICE: 1,
                OPERATED_BY_HOST: 2
            },
            MeetingErrorCodes: {
                MEETING_NOT_EXIST: 9003
            },
            UserType: {
                UNKNOWN_USER: 0,
                VOIP_USER: 1,
                PSTN_USER: 2
            },
            KickoutReason: {
                UNKNOWN: 0,
                HOST_OPERATION: 1,
                MEETING_TERMINATED: 2
            },
            LocalPermissionType: {
                LOCAL_RECORD: 1
            },
            LimitType: {
                MEMBERS_COUNT_WILL_REACH_LIMIT_SOON: 0,
                MEMBERS_COUNT_HAS_REACHED_LIMIT_ALREADY: 1,
                MEETING_DURATION_WILL_REACH_LIMIT_SOON: 11,
                PSTN_DURATION_WILL_REACH_LIMIT_SOON: 21,
                PSTN_DURATION_HAS_REACHED_LIMIT_ALREADY: 22,
                SOMEBODY_TRIED_JOIN_MEETING_AFTER_REACH_LIMIT: 31,
                ENOUGH_RESOURCE: 99,
                ENOUGH_RESOURCE_ON_MEETING_DURATION: 109
            },
            AssociateType: {
                VOIP: 1,
                PSTN: 2,
                ASSOC_PRO_VOIP: 3,
                LINUX_SDK_VOIP: 4,
                ASSOC_AUDIO_PSTN: 5,
                ASSOC_VIDEO_PSTN: 6
            },
            LeaveReason: {
                SELF: 1,
                KICKED_BY_HOST: 2,
                MEETING_DISMISSED: 3,
                KICKED_BY_SAME_ACCOUNT: 4,
                RECEIVE_NOT_ENOUGH_MEETING_TIME_PUSH: 10,
                MEETING_TIME_REACHES_END_OF_COUNTDOWN_AT_CLIENT: 11,
                MOVED_BY_HOST_FROM_MEETING_ROOM_TO_WAITING_ROOM: 12
            },
            RoomType: {
                OUTSIDE: -1,
                MEETING_ROOM: 0,
                WAITING_ROOM: 1
            },
            MediaRoomState: {
                OUT: 0,
                IN: 1,
                RECONNECTING: 2,
                RESTARTING: 3,
                INTERRUPTED: 4,
                REDIRECTING: 5,
                JOINING: 6,
                LEAVING: 7,
                getReadableState: function(e) {
                    switch (e) {
                        case 0:
                            return "不在媒体房间中";
                        case 1:
                            return "在媒体房间中";
                        case 2:
                            return "媒体房间重连中...";
                        case 3:
                            return "媒体房间重启推流中";
                        case 4:
                            return "推流被系统来电或者微信VOIP中断";
                        case 5:
                            return "正在重定向中...";
                        case 6:
                            return "正在加入媒体房间...";
                        case 7:
                            return "正在离开媒体房间...";
                        default:
                            return "Unknown media room state: ".concat(e)
                    }
                }
            },
            EnterRoomType: {
                MEMBER_IN_WAITING_ROOM: 0,
                MEMBER_MOVED_BY_HOST_FROM_WAITING_ROOM_TO_MEETING_ROOM: 1,
                MEMBER_MOVED_BY_HOST_FROM_MEETING_ROOM_TO_WAITING_ROOM: 2,
                MEMBER_MOVED_BY_HOST_FROM_WAITING_ROOM_TO_OUTSIDE: 3,
                MEMBER_JOINED_IN_WAITING_ROOM: 11,
                MEMBER_LEFT_FROM_WAITING_ROOM: 12,
                USER_STATUS_CHANGED_BY_SELF: 17,
                USER_STATUS_CHANGED_BY_HOST: 18
            },
            DefaultMediaStateReasonBit: {
                AudioReasonBit: {
                    MembersNumReachesN: 16,
                    AudioOnNumReachesLimit: 8,
                    AllMuted: 4,
                    UnmuteNotAllowed: 2,
                    MuteAfterJoin: 1
                },
                VideoReasonBit: {}
            },
            CloudRecordAction: {
                STOP: 0,
                START: 1,
                PAUSE: 2,
                RESUME: 3,
                CONFIRM_START: 4
            },
            CloudRecordingStatus: {
                STOPPED: 0,
                PREPARING: 1,
                STARTED: 2,
                PAUSED: 3
            },
            AutoInWaitingRoom: {
                DefaultValue: 0,
                Close: 1,
                Open: 2
            },
            MediaSetType: {
                ExternalMeeting: 0,
                InternalMeeting: 1
            },
            AllowInBeforeHost: {
                DefaultValue: 0,
                NotAllow: 1,
                Allow: 2
            },
            MaxCustomerDataLength: 256,
            MediaNetworkLevel: {
                Excellent: 1,
                Good: 2,
                Fair: 3,
                Poor: 4,
                NoSignal: 5
            },
            QueryMeetingListSubAction: {
                QueryItemById: 0,
                QueryItemByCode: 1,
                QueryListByBeginTime: 2,
                QueryListByLastModifyTime: 3,
                QueryMoreSubItemById: 4,
                QueryMoreSubItemByCode: 5
            },
            MeetingType: {
                Normal: 0,
                Quick: 1
            },
            RoleGroupType: {
                WebinarPanelist: 1,
                WebinarAttendee: 2,
                NormalMeetingRole: 4
            },
            SDK_ID: "",
            SignType: {
                UseTRTC: 1
            },
            InMeetingUserVisibility: {
                Visible: 0,
                InvisibleInMembersList: 1,
                InvisibleInAudioLayout: 2,
                InvisibleInVideoLayout: 4,
                InvisibleInIM: 8
            },
            ModifyUserInfoScene: {
                Meeting_Room: 0,
                Waiting_Room: 1
            },
            ERenaming: {
                Begin: -1,
                DefaultAllow: 0,
                Allow: 1,
                NotAllowed: 2,
                End: 3
            },
            MeetingInfoMaskFlagBit: {
                MeetingCode: 0,
                InviteLink: 1
            }
        }
    }, function(e, t, n) {
        var i = n(9),
            r = n(2),
            o = n(3),
            s = (n(11), n(13)),
            a = function() {
                function e() {
                    r(this, e), this.loggerReportor = s.getInstance(), this.logver = 1;
                    this.chaos = function(e) {
                        for (var t = Math.random().toString().substr(2); t.length < e;) t += Math.random().toString().substr(2);
                        return t.substr(0, e)
                    }(16), this.serialnum = 1, this.uid = "(null)"
                }
                return o(e, [{
                    key: "send",
                    value: function(e) {
                        this.loggerReportor.report(e)
                    }
                }, {
                    key: "setUid",
                    value: function(e) {
                        this.uid = e
                    }
                }, {
                    key: "log",
                    value: function(e, t, n) {
                        if (e = Number(e), isNaN(e) || e < 1) throw console.log("web log error: lv must be greater than 0!!"), new Error("web log error: lv must be greater than 0!!");
                        if ("string" != typeof t) throw console.log("web log error: classid must be a string!!"), new Error("web log error: classid must be a string!!");
                        if ("object" === i(n)) try {
                            n = JSON.stringify(n)
                        } catch (e) {
                            throw console.log("web log error: when turning content(object) into string:", e), new Error("web log error: when turning content(object) into string")
                        }
                        if ("string" != typeof n) throw console.log("web log error: invalid content:", n), new Error("web log error: invalid content:");
                        n.replace(/\r|\n/g, " ");
                        var r = {
                            logver: this.logver,
                            uid: this.uid,
                            chaos: this.chaos,
                            serialnum: this.serialnum++,
                            clientstamp: (new Date).getTime(),
                            lv: e,
                            classid: t,
                            content: n
                        };
                        this.send(r, this.url)
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === e.prototype.instance && (e.prototype.instance = new e), e.prototype.instance
                    }
                }]), e
            }(),
            u = function() {
                function e() {
                    r(this, e)
                }
                return o(e, [{
                    key: "debug",
                    value: function(e) {
                        var t, n = (new Error).stack,
                            i = "";
                        if ("string" == typeof n && "function" == typeof n.split) {
                            var r = n.split("\n");
                            r.length > 2 && (i = r[2])
                        }
                        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                        (t = console).log.apply(t, [e].concat(s, ["\n", i]))
                    }
                }, {
                    key: "info",
                    value: function(e) {
                        var t, n = (new Error).stack,
                            i = "";
                        if ("string" == typeof n && "function" == typeof n.split) {
                            var r = n.split("\n");
                            r.length > 2 && (i = r[2])
                        }
                        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                        (t = console).log.apply(t, [e].concat(s, ["\n", i]))
                    }
                }, {
                    key: "log",
                    value: function(e) {
                        var t, n = (new Error).stack,
                            i = "";
                        if ("string" == typeof n && "function" == typeof n.split) {
                            var r = n.split("\n");
                            r.length > 2 && (i = r[2])
                        }
                        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                        (t = console).log.apply(t, [e].concat(s, ["\n", i]))
                    }
                }, {
                    key: "warn",
                    value: function(e) {
                        var t, n = (new Error).stack,
                            i = "";
                        if ("string" == typeof n && "function" == typeof n.split) {
                            var r = n.split("\n");
                            r.length > 2 && (i = r[2])
                        }
                        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                        (t = console).log.apply(t, [e].concat(s, ["\n", i]))
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        var t, n = (new Error).stack,
                            i = "";
                        if ("string" == typeof n && "function" == typeof n.split) {
                            var r = n.split("\n");
                            r.length > 2 && (i = r[2])
                        }
                        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                        (t = console).log.apply(t, [e].concat(s, ["\n", i]))
                    }
                }, {
                    key: "setUid",
                    value: function(e) {
                        a.getInstance().setUid(e)
                    }
                }, {
                    key: "report",
                    value: function(e, t, n) {
                        for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++) o[s - 3] = arguments[s];
                        var u = [n].concat(o);
                        u = u.map((function(e) {
                            var t = i(e);
                            if ("object" === t) try {
                                e = JSON.stringify(e)
                            } catch (e) {
                                console.log(e)
                            } else e = "undefined" === t ? '"undefined"' : e.toString();
                            return e
                        })), a.getInstance().log(e, t, u.join(" "))
                    }
                }, {
                    key: "setAjaxSender",
                    value: function(e) {
                        a.getInstance().setSendFunc(e)
                    }
                }, {
                    key: "chaos",
                    get: function() {
                        return a.getInstance().chaos
                    },
                    set: function(e) {
                        a.getInstance().chaos = e
                    }
                }]), e
            }();
        e.exports = u
    }, function(e, t, n) {
        var i = n(2),
            r = n(3),
            o = function() {
                function e() {
                    i(this, e), this._reportorCallback = null
                }
                return r(e, [{
                    key: "setReportCallback",
                    value: function(e) {
                        this._reportorCallback = e
                    }
                }, {
                    key: "report",
                    value: function(e) {
                        "function" == typeof this._reportorCallback && this._reportorCallback(e)
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === e.prototype.instance && (e.prototype.instance = new e), e.prototype.instance
                    }
                }]), e
            }();
        e.exports = o
    }, function(e, t, n) {
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function r(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, a = !0,
                u = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e
                },
                e: function(e) {
                    u = !0, s = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (u) throw s
                    }
                }
            }
        }

        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
            }
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function a(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = g(e);
                if (t) {
                    var r = g(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return p(this, n)
            }
        }
        var u = n(15),
            c = n(9),
            l = n(2),
            d = n(3),
            h = n(5),
            _ = n(6),
            p = n(8),
            g = n(10),
            m = n(11),
            f = n(12),
            v = n(16),
            y = n(19),
            S = n(17),
            b = n(20),
            E = n(21),
            w = S.Strophe,
            R = S.$iq,
            k = S.$pres,
            T = S.xbtoa,
            N = S.encodeUtf8ThenB64,
            I = S.decodeB64ThenUtf8,
            C = S.get_val,
            A = S.get_int_val,
            M = S.get_bool_val,
            O = S.get_attr,
            x = S.get_int_attr,
            P = S.stringifyXmlObject,
            D = S.format2XMPP,
            H = function(e) {
                function t() {
                    var e;
                    l(this, t), (e = n.call(this)).logger = new f, e.SERVER_URL = m.ConfWebSocketUrl, e.connection = null, e.connected = !1, e.eventListenersMap = new Map, e.jid = null, e.timeout = 1e4, e.userLogoutFlag = !1, e.connFailed = !1, e.meetingPingTimer = null, e.createMeetingResponseSuccess = e.createMeetingResponseSuccess.bind(h(e)), e.createMeetingResponseError = e.createMeetingResponseError.bind(h(e));
                    var i = function(t) {
                        return e[t] = e[t].bind(h(e))
                    };
                    return i("sendIQ"), i("genErrorCallback"), i("setServerUrl"), i("connect"), i("getEventHandler"), i("userStatusPush"), i("changeHostPush"), i("changeCoHostPush"), i("notifyBeenKickedout"), i("changeSettingPush"), i("notifyHansUpPush"), i("notifyHandsUpResult"), i("handsUpResponseSuccess"), i("handsUpResponseError"), i("queryMeetingItemListResponseSuccess"), i("queryMeetingItemListResponseError"), i("cancelMeetingResponseSuccess"), i("cancelMeetingResponseError"), i("modifyMeetingItemResponseSuccess"), i("modifyMeetingItemResponseError"), i("handleHandsUpResponseSuccess"), i("handleHandsUpResponseError"), i("switchMediaPermissionResponseSuccess"), i("switchMediaPermissionResponseError"), i("joinMeetingResponseSuccess"), i("joinMeetingResponseError"), i("leaveMeetingResponseSuccess"), i("refreshMediaAuthInfoResponseSuccess"), i("refreshMediaAuthInfoResponseError"), i("dissolveMeetingResponseSuccess"), i("dissolveMeetingResponseError"), i("userStatusResponseSuccess"), i("userStatusResponseError"), i("reportMediaStreamStatusSuccess"), i("reportMediaStreamStatusError"), i("changeHostRequest"), i("changeHostResponseSuccess"), i("changeHostResponseError"), i("dissolveMeetingRequest"), i("dissolveMeetingResponseSuccess"), i("dissolveMeetingResponseError"), i("modifyNicknameRequest"), i("setVideoLayoutRequest"), i("kickoutRequest"), i("sendSecurityVerifyResult"), i("queryUserSigResponseSuccess"), i("queryUserSigResponseError"), i("queryMeetingNotice"), e
                }
                _(t, e);
                var n = a(t);
                return d(t, [{
                    key: "setServerUrl",
                    value: function(e) {
                        return this.SERVER_URL = e, !0
                    }
                }, {
                    key: "connect",
                    value: function(e, t, n) {
                        var i = this;
                        if (!this.connected) {
                            this.connection = new w.Connection(this.SERVER_URL);
                            var r = t;
                            r = '<token xmlns="wemeet:auth" ', r += 'wemeet-auth:app_id="'.concat(n.app_id, '" '), r += 'wemeet-auth:device_id="'.concat(n.device_id, '" '), r += 'wemeet-auth:network_type="'.concat(n.network_type, '" '), r += 'wemeet-auth:app_version="'.concat(n.app_version, '" '), r += 'wemeet-auth:sdk_version="'.concat(m.Version, '" '), r += 'wemeet-auth:sdk_id="'.concat(n.sdk_id, '" '), r += 'wemeet-auth:instance_id="'.concat(n.instance_id, '" '), r += 'wemeet-auth:auth_type="'.concat(n.auth_type, '" '), r += 'wemeet-auth:env_id="'.concat(n.env_id, '">'), r += T(t) + "</token>", this.connection.connect(e, r, (function(t, n) {
                                var r = i.getEventHandler("login");
                                if (t === w.Status.CONNFAIL) console.log("connection failed:", n), i.jid = null, i.connFailed = !0, i.getEventHandler("connfailed")(!0, {
                                    code: "CONNFAIL",
                                    msg: "disconnected",
                                    data: n
                                });
                                else if (t === w.Status.AUTHFAIL) console.log("authentication failed:", n), r(!1, {
                                    code: "AUTHFAIL",
                                    msg: "authentication failed"
                                });
                                else if (t === w.Status.DISCONNECTED) {
                                    console.log("disconnected:", n), i.jid = null, "object" === c(n) && console.log("condition:", JSON.stringify(n)), i.meetingPingTimer && (clearInterval(i.meetingPingTimer), i.meetingPingTimer = null), i.connected = !1;
                                    var o = i.getEventHandler("logout"),
                                        s = {
                                            msg: "disconnected",
                                            code: "DISCONNECTED",
                                            ecode: 99900,
                                            condition: n
                                        };
                                    void 0 !== n && void 0 !== n.code ? s.ecode = n.code : i.connFailed && (s.ecode = 98888, i.connFailed = !1), o(i.userLogoutFlag, s), i.userLogoutFlag = !1
                                } else t === w.Status.CONNECTED && (console.log("connect success:", n), i.connected = !0, i.connection.addHandler((function(e) {
                                    var t = e.getAttribute("type");
                                    if ("result" === t) {
                                        if (e.childNodes.length > 0) {
                                            var n = e.childNodes[0];
                                            if ("tencent:wemeet:push" === n.getAttribute("xmlns") || "tencent:wemeet:breakoutroom:push" === n.getAttribute("xmlns")) {
                                                var r = n.nodeName;
                                                i.serverToClientMsgParser(e, r)
                                            }
                                        }
                                    } else if ("set" === t && e.childNodes.length > 0) {
                                        var o = e.childNodes[0];
                                        if ("tencent:wemeet:push" === o.getAttribute("xmlns") || "tencent:wemeet:breakoutroom:push" === o.getAttribute("xmlns")) {
                                            var s = o.nodeName;
                                            i.serverToClientMsgParser(e, s)
                                        }
                                    }
                                    return !0
                                }), null, "iq", null, null, null), i.connection.send(k().tree()), i.jid = e, setTimeout((function() {
                                    r(!0, {
                                        code: "CONNECTED",
                                        msg: "connect success"
                                    })
                                }), 10))
                            }))
                        }
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.logger.info("xmpp disconnect called"), this.logger.info("this.connected: " + this.connected), this.connected && (this.userLogoutFlag = !0, this.logger.info("xmpp calling connection disconnect"), this.connection.disconnect("libWeMeet.xmpp_service")), this.connected = !1
                    }
                }, {
                    key: "send",
                    value: function(e) {
                        this.connected ? (this.logger.info(e), this.connection.send(e)) : console.log("please build connection first")
                    }
                }, {
                    key: "getFullyQualifiedProtocol",
                    value: function(e) {
                        var t = "",
                            n = "";
                        try {
                            n = e.nodeTree.firstChild.tagName, t = e.nodeTree.firstChild.getAttribute("xmlns")
                        } catch (e) {
                            this.logger.report(3, "getFullyQualifiedProtocol", "cannot get tagName or xmlns for iq: xmlns:".concat(t, ", protocol:").concat(n))
                        }
                        return {
                            namespace: t,
                            protocolName: n
                        }
                    }
                }, {
                    key: "getErrorDetail",
                    value: function(e) {
                        if (!e) return {
                            code: -1,
                            msg: "timeout"
                        };
                        if (e.hasOwnProperty("isNOTXml") && e.isNOTXml) return {
                            code: -2,
                            msg: "isNOTXml"
                        };
                        try {
                            var t = e.getElementsByTagName("error")[0];
                            if (!t) return {
                                code: -3,
                                msg: "cannot find <error> tag in package"
                            };
                            var n = "";
                            return void 0 !== t.childNodes[0] && (n = "".concat(I(t.childNodes[0].nodeValue), "(").concat(t.getAttribute("detail"), ")")), {
                                code: t.getAttribute("code"),
                                msg: n
                            }
                        } catch (e) {
                            return this.logger.report(3, "getErrorDetail", "cannot get error detail: ".concat((null == e ? void 0 : e.message) || "unknown error")), {
                                code: -4,
                                msg: "exception at parsing msg"
                            }
                        }
                    }
                }, {
                    key: "sendIQ",
                    value: function(e, t, n, i) {
                        var r = this;
                        if (this.connected) {
                            var o = this.getFullyQualifiedProtocol(e),
                                s = o.namespace,
                                a = o.protocolName,
                                u = +new Date;
                            this.connection.sendIQ(e, (function(e) {
                                var n = +new Date - u;
                                return E.report({
                                    namespace: s,
                                    protocolName: a,
                                    timeCost: n,
                                    code: 0
                                }), t(e, i)
                            }), (function(e) {
                                var t = +new Date - u,
                                    o = r.getErrorDetail(e),
                                    c = o.code,
                                    l = o.msg;
                                return E.report({
                                    namespace: s,
                                    protocolName: a,
                                    timeCost: t,
                                    code: c,
                                    msg: l
                                }), n(e, i)
                            }), this.timeout)
                        } else console.log("please build connection first"), "function" == typeof n && n({
                            isNOTXml: !0,
                            code: "0",
                            msg: "please build connection first"
                        })
                    }
                }, {
                    key: "genErrorCallback",
                    value: function(e, t) {
                        var n = this;
                        return function(i) {
                            var r = !1,
                                o = function() {};
                            if ("string" == typeof t ? o = n.getEventHandler(t) : "function" == typeof t && (o = t, r = !0), e)
                                if (e.hasOwnProperty("isNOTXml") && e.isNOTXml) r ? o(e) : o(!1, e);
                                else {
                                    var s = e.getElementsByTagName("error")[0],
                                        a = "";
                                    void 0 !== s.childNodes[0] && (a = I(s.childNodes[0].nodeValue));
                                    var u = {
                                        msg: a,
                                        detail: s.getAttribute("detail"),
                                        code: s.getAttribute("code"),
                                        sender_data: i
                                    };
                                    r ? o(u) : o(!1, u)
                                } else console.log("ErrorCallback timeout:", e), r ? o(null) : (console.warn("event is: ", t), o(!1, null))
                        }
                    }
                }, {
                    key: "getUniqueId",
                    value: function(e) {
                        var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16)
                        }));
                        return "string" == typeof e || "number" == typeof e ? t + ":" + e : t + ""
                    }
                }, {
                    key: "getConnectState",
                    value: function() {
                        return this.connected
                    }
                }, {
                    key: "serverToClientMsgParser",
                    value: function(e, t) {
                        var n = {
                                user_status: "userStatusPush",
                                breakout_room_started: "breakoutRoomPush",
                                change_host: "changeHostPush",
                                change_co_host: "changeCoHostPush",
                                change_setting: "changeSettingPush",
                                notify_hands_up: "notifyHansUpPush",
                                notify_hands_up_result: "notifyHandsUpResult",
                                kick_out: "notifyBeenKickedout",
                                modify: "notifyMeetingModified",
                                schedule: "notifySchedule",
                                meeting_item_update: "notifyMeetingItemUpdate",
                                meeting_summary_notify: "summaryAudioUploadPush",
                                meeting_summary_message: "summaryMessagePush",
                                invite_status: "inviteStatusPush",
                                meeting_settings_update: "meetingSettingsUpdate",
                                switch_media_stream: "notifySwitchMediaStream",
                                join_audio_mix_user_info: "joinAudioMixUserInfo",
                                meeting_will_limited: "meetingWillLimited",
                                host_status: "hostStatusPush",
                                waiting_user_status: "waitingUserStatusPush",
                                switch_local_permission: "switchLocalPermissionPush",
                                switch_user_role: "switchUserRole",
                                cloud_record_state: "cloudRecordState",
                                report_media_stream_status: "reportMediaStreamStatusPush",
                                meeting_invitee_notify: "meetingInviteeNotifyPush",
                                notify_raise_hand_list_changed: "notifyRaiseHandListChangedPush",
                                notify_user_be_put_handsdown: "notifyUserBePutHandsdownPush",
                                notify_role_group_be_put_handsdown: "notifyRoleGroupBePutHandsdownPush",
                                notify_permission_result: "notifyPermissionResultPush",
                                directed_push: "directedPush",
                                meeting_notice: "meetingNotice"
                            },
                            i = {
                                user_status: "userStatusPush",
                                breakout_room_started: "breakoutRoomPush",
                                change_host: "changeHostPush",
                                change_co_host: "changeCoHostPush",
                                change_setting: "changeSettingPush",
                                notify_hands_up: "notifyHansUpPush",
                                notify_hands_up_result: "notifyHandsUpResult",
                                kick_out: "notifyBeenKickedout",
                                modify: "notifyMeetingModified",
                                schedule: "notifySchedule",
                                meeting_item_update: "notifyMeetingItemUpdate",
                                meeting_summary_notify: "summaryAudioUploadPush",
                                meeting_summary_message: "summaryMessagePush",
                                invite_status: "inviteStatusPush",
                                meeting_settings_update: "meetingSettingsUpdate",
                                switch_media_stream: "notifySwitchMediaStream",
                                join_audio_mix_user_info: "joinAudioMixUserInfo",
                                meeting_will_limited: "meetingWillLimited",
                                host_status: "hostStatusPush",
                                waiting_user_status: "waitingUserStatusPush",
                                switch_local_permission: "switchLocalPermissionPush",
                                switch_user_role: "switchUserRole",
                                cloud_record_state: "cloudRecordState",
                                report_media_stream_status: "reportMediaStreamStatusPush",
                                meeting_invitee_notify: "meetingInviteeNotifyPush",
                                notify_raise_hand_list_changed: "notifyRaiseHandListChangedPush",
                                notify_user_be_put_handsdown: "notifyUserBePutHandsdownPush",
                                notify_role_group_be_put_handsdown: "notifyRoleGroupBePutHandsdownPush",
                                notify_permission_result: "notifyPermissionResultPush",
                                directed_push: "directedPush",
                                meeting_notice: "meetingNotice"
                            }[t];
                        if (void 0 !== i) try {
                            this[i](e)
                        } catch (n) {
                            var r = D(e);
                            this.logger.report(3, "serverToClientMsgParser(PUSH)", "failed to handle protocol '".concat(t, "'.\n          error message: ").concat(n.message, "\n          xmpp pkg received: ").concat(r, "\n        "))
                        }
                    }
                }, {
                    key: "breakoutRoomPush",
                    value: function(e) {
                        console.log("on Push breakoutRoom, msg:", e);
                        var t = e.getElementsByTagName("breakout_room_started")[0].getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue;
                        this.getEventHandler("breakout_room_started")(!0, {
                            meeting_id: t
                        })
                    }
                }, {
                    key: "userStatusPush",
                    value: function(e) {
                        var t = D(e);
                        this.logger.report(1, "S2C-user_status(PUSH)", t);
                        for (var n, i = e.getElementsByTagName("user_status")[0], r = parseInt(i.getElementsByTagName("type")[0].childNodes[0].nodeValue), o = i.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue, s = i.getElementsByTagName("list")[0].childNodes, a = {
                                user_list: [],
                                meeting_id: o
                            }, u = 0; u < s.length; u++) {
                            var c = s[u],
                                l = this._parse_user_status(c);
                            a.user_list.push(l)
                        }
                        switch (r) {
                            case m.UserState.JOIN:
                                n = "user_join";
                                break;
                            case m.UserState.LEAVE:
                                n = "user_leave";
                                break;
                            case m.UserState.UPLEVEL:
                            case m.UserState.DOWNLEVEL:
                            case m.UserState.UPDATE:
                                n = "user_update";
                                break;
                            case m.UserState.KICKED:
                                n = "user_kicked";
                                break;
                            case m.UserState.OFFLINE:
                                n = "user_offline"
                        }
                        this.getEventHandler(n)(!0, a)
                    }
                }, {
                    key: "_parse_user_status",
                    value: function(e) {
                        var t = function(e) {
                                if (!e) return {};
                                var t = {
                                    uid: e.getAttribute("app_uid"),
                                    app_id: e.getAttribute("app_id"),
                                    instance_id: e.getAttribute("instance_id"),
                                    user_type: e.getAttribute("user_type"),
                                    userType: Number(e.getAttribute("user_type")),
                                    phone_number: e.getAttribute("phone_number"),
                                    unique_id: e.getAttribute("unique_id")
                                };
                                return "2" == t.user_type && (t.device_type = e.getAttribute("device_type") || "0"), t
                            },
                            n = e.getElementsByTagName("affiliated_users")[0];
                        n && n.parentNode.removeChild(n);
                        var i = {
                            nickname: I(C(e, "nickname")),
                            is_creator: C(e, "is_creator"),
                            is_host: C(e, "is_host"),
                            associate_type: Number.parseInt(C(e, "associate_type")),
                            associator_id: t(e.getElementsByTagName("associator_id")[0]),
                            role_type: C(e, "role_type"),
                            id: t(e.getElementsByTagName("id")[0]),
                            video_on: C(e, "up_video_on"),
                            audio_on: C(e, "up_audio_on"),
                            share_on: C(e, "up_share_on"),
                            web_share_on: C(e, "up_web_share_on"),
                            web_share_reason: O(e, "up_web_share_on", "reason"),
                            video_reason: O(e, "up_video_on", "reason"),
                            video_pause: O(e, "up_video_on", "pause"),
                            audio_reason: O(e, "up_audio_on", "reason"),
                            audio_pause: O(e, "up_audio_on", "pause"),
                            share_reason: O(e, "up_share_on", "reason"),
                            share_pause: O(e, "up_share_on", "pause"),
                            share_start_time: O(e, "up_share_on", "start_time"),
                            handsup: C(e, "handsup"),
                            raise_hand: C(e, "raise_hand"),
                            invite_id: C(e, "invite_id"),
                            authType: Number.parseInt(C(e, "auth_type")),
                            participation_status: C(e, "participation_status"),
                            participation_status_stamp: O(e, "participation_status", "last_update_time"),
                            hangup_reason: C(e, "hangup_reason"),
                            members_seq: Number.parseInt(C(e, "members_seq")),
                            avatar_type: isNaN(Number.parseInt(C(e, "avatar_type"))) ? "" : Number.parseInt(C(e, "avatar_type")),
                            avatar_token: C(e, "avatar_token"),
                            user_action: A(e, "user_action"),
                            local_record_on: C(e, "local_record_on"),
                            access_type: A(e, "access_type"),
                            allow_speak: A(e, "allow_speak")
                        };
                        i.id.av_uid = C(e, "av_uid"), i.id.unique_id || (i.id.unique_id = i.id.av_uid, this.logger.report(2, "_parse_user_status", "[warning] property 'unique_id' is missing in 'id'. For compatibility, we use 'av_uid' to fix it.")), "2" == i.user_type && "" === i.id.phone_number && (i.id.phone_number = e.getElementsByTagName("id")[0].getAttribute("app_uid"));
                        var r = e.getElementsByTagName("inviter");
                        r.length > 0 && (i.inviter = t(r[0]));
                        var o = A(e, "user_invisible");
                        return isNaN(o) || (i.user_invisible = o), i
                    }
                }, {
                    key: "changeHostPush",
                    value: function(e) {
                        var t = e.getElementsByTagName("change_host")[0],
                            n = t.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue,
                            i = C(t, "reason"),
                            r = t.getElementsByTagName("id")[0],
                            o = this._parse_user_id(r);
                        this.getEventHandler("change_host_push")(!0, {
                            meeting_id: n,
                            reason: i,
                            host: o
                        })
                    }
                }, {
                    key: "changeCoHostPush",
                    value: function(e) {
                        var t = e.getElementsByTagName("change_co_host")[0],
                            n = t.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue,
                            i = C(t, "reason"),
                            r = t.getElementsByTagName("id")[0],
                            o = this._parse_user_id(r);
                        o.host_type = C(t, "host_type"), o.assign = C(t, "assign"), this.getEventHandler("change_co_host_push")(!0, {
                            meeting_id: n,
                            reason: i,
                            host: o
                        })
                    }
                }, {
                    key: "changeSettingPush",
                    value: function(e) {
                        console.log("on Push change_setting, msg:", e);
                        var t = e.getElementsByTagName("change_setting")[0],
                            n = {
                                op_type: t.getElementsByTagName("type")[0].childNodes[0].nodeValue,
                                user: {
                                    uid: t.getElementsByTagName("attach")[0].getElementsByTagName("id")[0].getAttribute("uid"),
                                    app_id: t.getElementsByTagName("attach")[0].getElementsByTagName("id")[0].getAttribute("app_id"),
                                    instance_id: t.getElementsByTagName("attach")[0].getElementsByTagName("id")[0].getAttribute("instance_id")
                                }
                            };
                        console.log("  data:", n), this.getEventHandler("on_spot_light_video_push")(!0, n)
                    }
                }, {
                    key: "notifyHansUpPush",
                    value: function(e) {
                        console.log("on Push notify_hands_up, msg:", e);
                        var t = e.getElementsByTagName("notify_hands_up")[0],
                            n = [],
                            i = t.getElementsByTagName("permission_list");
                        if (i && i.length) {
                            var r = i[0].getElementsByTagName("permission");
                            if (r && r.length)
                                for (var o = 0; o < r.length; ++o) {
                                    var s = r[o];
                                    s && n.push(parseInt(s.getAttribute("type")))
                                }
                        }
                        var a = {
                            user: {
                                uid: t.getElementsByTagName("id")[0].getAttribute("uid"),
                                app_id: t.getElementsByTagName("id")[0].getAttribute("app_id"),
                                instance_id: t.getElementsByTagName("id")[0].getAttribute("instance_id"),
                                user_type: t.getElementsByTagName("id")[0].getAttribute("user_type")
                            },
                            permission: n
                        };
                        console.log("  data:", a), this.getEventHandler("notify_hands_up_push")(!0, a)
                    }
                }, {
                    key: "notifyHandsUpResult",
                    value: function(e) {
                        this.logger.debug("xmpp notifyHandsUpResult msg:", e);
                        for (var t = {
                                permissionList: []
                            }, n = e.getElementsByTagName("notify_hands_up_result")[0], i = n.getElementsByTagName("permission_list")[0].getElementsByTagName("permission"), r = !1, o = 0; o < i.length; ++o) {
                            var s = i[o],
                                a = {
                                    type: s.getAttribute("type"),
                                    is_grant: s.getAttribute("is_grant")
                                };
                            t.permissionList.push(a), 1 == a.is_grant && (r = !0)
                        }
                        if (r) {
                            var u = this._parse_media_platform(n);
                            null !== u && (t.media_platform = u)
                        }
                        this.getEventHandler("notify_hands_up_result")(!0, t)
                    }
                }, {
                    key: "notifyBeenKickedout",
                    value: function(e) {
                        this.logger.debug("notifyBeenKickedout, msg:", e);
                        var t = e.getElementsByTagName("kick_out")[0],
                            n = {};
                        n.meetingId = C(t, "meeting_id"), n.kicker = {
                            uid: O(t, "kicker", "app_uid"),
                            app_id: O(t, "kicker", "app_id"),
                            instance_id: O(t, "kicker", "instance_id")
                        }, n.reason = C(t, "reason"), n.reasonCode = Number(O(t, "reason", "code")), n.room_type = A(t, "room_type", 0);
                        var i = C(t, "custom_data", "");
                        if (i) try {
                            n.custom_data = JSON.parse(I(i))
                        } catch (e) {
                            this.logger.report(3, "notifyBeenKickedout", "cannot parse json from 'custom_data': ".concat(i))
                        }
                        this.getEventHandler("kicked_out")(!0, n)
                    }
                }, {
                    key: "notifyMeetingModified",
                    value: function(e) {
                        this.logger.debug("notifyMeetingModified, msg:", e);
                        var t = e.getElementsByTagName("modify")[0],
                            n = {};
                        n.meeting_id = C(t, "meeting_id"), n.subject = I(C(t, "subject", null)), n.begin_time = C(t, "begin_time", null), n.end_time = C(t, "end_time", null), n.password = I(C(t, "password", null)), n.location = I(C(t, "location", null)), n.custom_buffer = I(C(t, "custom_buffer")), n.auto_in_waiting_room = A(t, "auto_in_waiting_room"), n.allow_in_before_host = A(t, "allow_in_before_host", null), this.getEventHandler("meeting_modified")(!0, n)
                    }
                }, {
                    key: "notifySchedule",
                    value: function(e) {
                        var t = e.getElementsByTagName("schedule")[0],
                            n = this._parse_meeting_updated(t);
                        this.getEventHandler("notify_schedule")(!0, n)
                    }
                }, {
                    key: "notifyMeetingItemUpdate",
                    value: function(e) {
                        var t = e.getElementsByTagName("meeting_item_update")[0],
                            n = this._parse_meeting_updated(t);
                        this.getEventHandler("notify_meeting_item_update")(!0, n)
                    }
                }, {
                    key: "_parse_meeting_updated",
                    value: function(e) {
                        var t = {
                            meeting_id: C(e, "meeting_id"),
                            meeting_code: C(e, "meeting_code"),
                            meeting_state: A(e, "meeting_state"),
                            begin_time: A(e, "begin_time"),
                            end_time: A(e, "end_time"),
                            last_modify_time: A(e, "last_modify_time"),
                            actual_begin_time: A(e, "actual_begin_time"),
                            actual_end_time: A(e, "actual_end_time"),
                            subject: I(C(e, "subject")),
                            describe: I(C(e, "describe")),
                            role_type: A(e, "role_type"),
                            meeting_type_flags: C(e, "role_typmeeting_type_flagse"),
                            auto_in_waiting_room: A(e, "auto_in_waiting_room"),
                            allow_in_before_host: A(e, "allow_in_before_host"),
                            custom_buffer: I(C(e, "custom_buffer")),
                            meeting_type: A(e, "meeting_type"),
                            current_period_id: C(e, "current_period_id"),
                            creator_time_zone: C(e, "creator_time_zone"),
                            has_more_periods: A(e, "has_more_periods"),
                            remain_periods: A(e, "remain_periods"),
                            create_type: A(e, "create_type"),
                            creator_uid: C(e, "creator_uid"),
                            bit_mask_info_hiden: C(e, "bit_mask_info_hiden"),
                            si_enable: A(e, "si_enable")
                        };
                        if (e.hasOwnProperty("live_stream")) {
                            var n = e.getElementsByTagName("live_stream");
                            n && 1 === n.length ? t.live_stream = {
                                enable: A(n, "enable"),
                                view_url: A(n, "view_url"),
                                password: I(C(n, "password"))
                            } : this.logger.report(3, "_parse_meeting_updated", "node 'live_stream' doesn't exist, or appears more than once")
                        }
                        if (e.hasOwnProperty("recurring_rule")) {
                            var i = e.getElementsByTagName("recurring_rule");
                            i && 1 === i.length ? t.recurring_rule = {
                                first_start_time: A(i, "first_start_time"),
                                first_end_time: A(i, "first_end_time"),
                                recurring_type: A(i, "recurring_type"),
                                recurring_days: A(i, "recurring_days"),
                                until_type: A(i, "until_type"),
                                until_date: A(i, "until_date"),
                                until_times: A(i, "until_times")
                            } : this.logger.report(3, "_parse_meeting_updated", "node 'recurring_rule' doesn't exist, or appears more than 1")
                        }
                        if (e.hasOwnProperty("periods")) {
                            var r = e.getElementsByTagName("periods");
                            if (r && 1 === r.length) {
                                for (var o = r.childNodes || [], s = [], a = 0; a < o.length; a++) {
                                    var u = o[a];
                                    s.push({
                                        period_id: C(u, "period_id"),
                                        start_time: A(u, "start_time"),
                                        end_time: A(u, "end_time"),
                                        status: A(u, "status")
                                    })
                                }
                                t.periods = s
                            } else this.logger.report(3, "_parse_meeting_updated", "node 'periods' doesn't exist, or appears more than once")
                        }
                        if (e.hasOwnProperty("appointed_host_list")) {
                            var c = e.getElementsByTagName("appointed_host_list");
                            if (c && 1 === c.length) {
                                for (var l = [], d = 0; d < c.childNodes.length; d++) {
                                    var h = c.childNodes[d];
                                    l.push({
                                        app_id: h.getAttribute("app_id"),
                                        app_uid: h.getAttribute("app_uid")
                                    })
                                }
                                t.appointed_host_list = l
                            } else this.logger.report(3, "_parse_meeting_updated", "node 'appointed_host_list' doesn't exist, or appears 2+")
                        }
                        return t
                    }
                }, {
                    key: "meetingSettingsUpdate",
                    value: function(e) {
                        var t = e.getElementsByTagName("meeting_settings_update")[0],
                            n = this._parse_meeting_settings(t);
                        this.getEventHandler("notify_meeting_settings_update")(!0, n)
                    }
                }, {
                    key: "_parse_query_ui_config",
                    value: function(e) {
                        var t = e && e.getElementsByTagName("ui_config")[0];
                        if (!t) return null;
                        try {
                            var n = I(C(t, "config"));
                            return {
                                meeting_ability_pstn: !1 !== JSON.parse(n).meeting_ability_pstn
                            }
                        } catch (e) {
                            return this.logger.report(3, "S2C-query_ui_config", "parse ui_config error response which is type of result failed: ".concat(e)), null
                        }
                    }
                }, {
                    key: "_parse_meeting_settings",
                    value: function(e) {
                        var t = {};
                        if (!e) return t;
                        t.meetingId = C(e, "meeting_id"), t.mediaSettingsList = [];
                        var n = e.getElementsByTagName("media_settings_list")[0];
                        if (n)
                            for (var i = 0; i < n.childNodes.length; ++i) {
                                var r = n.childNodes[i],
                                    o = {
                                        type: A(r, "type")
                                    };
                                o.type === m.MediaType.AUDIO || o.type === m.MediaType.VIDEO ? Object.assign(o, {
                                    muteOnJoin: M(r, "mute_on_join"),
                                    muteAll: M(r, "mute_all"),
                                    allowUnmuteBySelf: M(r, "allow_unmute_by_self"),
                                    watermark: A(r, "watermark")
                                }) : o.type === m.MediaType.SCREEN_SHARE ? Object.assign(o, {
                                    watermark: A(r, "watermark"),
                                    share_screen_host_only: A(r, "share_screen_host_only"),
                                    multipleRowWatermark: 1 === Number(O(r, "watermark", "type"))
                                }) : console.error("unsupported type got from query_meeting_settings: ".concat(o.type)), t.mediaSettingsList.push(o)
                            }
                        t.localSettingsList = [];
                        var s = e.getElementsByTagName("local_settings_list")[0];
                        if (s)
                            for (var a = 0; a < s.childNodes.length; ++a) {
                                var u = s.childNodes[a],
                                    c = {
                                        type: A(u, "type")
                                    };
                                c.type === m.LocalPermissionType.LOCAL_RECORD ? Object.assign(c, {
                                    allow_record: A(u, "allow_record")
                                }) : console.error("unsupported type got from query_meeting_settings: ".concat(c.type)), t.localSettingsList.push(c)
                            }
                        var l = e.getElementsByTagName("ivr_settings")[0];
                        l && (t.ivrSettings = {
                            memberInOutTone: A(l, "member_in_out_tone")
                        });
                        var d = e.getElementsByTagName("meeting_lock_settings")[0];
                        d && (t.meetingLockSettings = {
                            meeting_lock: A(d, "meeting_lock")
                        });
                        var h = A(e, "auto_in_waiting_room");
                        void 0 !== h && (t.autoInWaitingRoom = h);
                        var _ = C(e, "request_up_stream_token", "");
                        _ && (t.request_up_stream_token = _);
                        var p = A(e, "hide_meeting_code_password");
                        isNaN(p) || (t.hideMeetingCodePassword = p), t.allow_audience_hands_up = C(e, "allow_hands_up");
                        var g = A(e, "allow_open_video");
                        isNaN(g) || (t.allow_open_video = g);
                        var f = A(e, "allow_renaming");
                        isNaN(f) || (t.allow_renaming = f);
                        var v = A(e, "allow_look_audience_count");
                        return isNaN(v) || (t.allow_look_audience_count = v), t
                    }
                }, {
                    key: "notifySwitchMediaStream",
                    value: function(e) {
                        var t = e.getElementsByTagName("switch_media_stream")[0],
                            n = {};
                        if (n.meetingId = C(t, "meeting_id"), n.type = parseInt(C(t, "type")), n.upStreamOn = parseInt(C(t, "up_stream_on")), n.reason = parseInt(O(t, "up_stream_on", "reason")), 1 === n.upStreamOn) {
                            var i = this._parse_media_platform(t);
                            null !== i && (n.media_platform = i)
                        }
                        this.getEventHandler("notify_switch_media_stream")(!0, n)
                    }
                }, {
                    key: "_parse_media_platform",
                    value: function(e) {
                        var t = e.getElementsByTagName("media_platform")[0];
                        if (!t) return null;
                        var n = {
                                qcloud_user_signature: C(t, "qcloud_user_signature", ""),
                                qcloud_user_private_map_key: C(t, "qcloud_user_private_map_key", "")
                            },
                            i = this._parse_trtc_token(t);
                        null !== i && (n.trtc_token = i);
                        var r = A(t, "role");
                        return void 0 !== r && (n.role = r), n
                    }
                }, {
                    key: "_parse_trtc_token",
                    value: function(e) {
                        if (!e) return this.logger.report(3, "assert", "parentNode must not be null to parse trtc_token"), null;
                        var t = e.getElementsByTagName("trtc_token")[0];
                        return t ? {
                            group_id: C(t, "group_id", ""),
                            set_flag: C(t, "set_flag", ""),
                            priv_map: C(t, "priv_map", ""),
                            usr_sig: C(t, "usr_sig", "")
                        } : (this.logger.report(1, "_parse_trtc_token", "cannot find 'trtc_token' in: ".concat(D(e))), null)
                    }
                }, {
                    key: "joinAudioMixUserInfo",
                    value: function(e) {
                        var t = e.getElementsByTagName("join_audio_mix_user_info")[0],
                            n = {
                                meetingId: C(t, "meeting_id"),
                                meetingCode: C(t, "meeting_code"),
                                infoList: []
                            },
                            i = t.getElementsByTagName("info_list")[0];
                        if (void 0 !== i && i.childNodes.length)
                            for (var r = 0; r < i.childNodes.length; ++r) {
                                var o = i.childNodes[r],
                                    s = o.getElementsByTagName("id")[0],
                                    a = {
                                        energy: A(o, "audio_energy"),
                                        user: {
                                            app_uid: s.getAttribute("app_uid"),
                                            app_id: s.getAttribute("app_id"),
                                            instance_id: s.getAttribute("instance_id"),
                                            user_type: s.getAttribute("user_type"),
                                            unique_id: s.getAttribute("unique_id")
                                        }
                                    };
                                n.infoList.push(a)
                            }
                        this.getEventHandler("notify_join_audio_mix_user_info")(!0, n)
                    }
                }, {
                    key: "meetingWillLimited",
                    value: function(e) {
                        var t = e.getElementsByTagName("meeting_will_limited")[0];
                        if (!t) return console.error("meetingWillLimited invoked with invalid mainNode"), void this.genErrorCallback(e, "meeting_will_limited")();
                        var n = {
                            meeting_id: C(t, "meeting_id"),
                            limite_type: parseInt(C(t, "limite_type")),
                            expire_time: parseInt(C(t, "expire_time")),
                            member_limit: parseInt(C(t, "member_limit")),
                            member_count: parseInt(C(t, "member_count")),
                            pstn_time: parseInt(C(t, "pstn_time")),
                            owner_nickname: C(t, "owner_nickname")
                        };
                        this.getEventHandler("meeting_will_limited")(!0, n)
                    }
                }, {
                    key: "hostStatusPush",
                    value: function(e) {
                        this.logger.report(1, "S2C-host_status", D(e));
                        var t = e.getElementsByTagName("host_status")[0],
                            n = {
                                meeting_id: C(t, "meeting_id"),
                                status: A(t, "status"),
                                msg: I(C(t, "msg"))
                            };
                        this.getEventHandler("host_status")(!0, n)
                    }
                }, {
                    key: "waitingUserStatusPush",
                    value: function(e) {
                        this.logger.report(1, "S2C-waiting_user_status", D(e));
                        var t = e.getElementsByTagName("waiting_user_status")[0],
                            n = {
                                meeting_id: C(t, "meeting_id"),
                                list: []
                            },
                            i = t.getElementsByTagName("list");
                        if (void 0 !== i)
                            for (var r = i[0].childNodes, o = 0; o < r.length; ++o) n.list.push(this._parse_waiting_user_status(r[o]));
                        n.host_status = {};
                        var s = t.getElementsByTagName("host_status")[0];
                        void 0 !== s && (n.host_status.status = A(s, "status"), n.host_status.msg = C(s, "msg")), this.getEventHandler("waiting_user_status")(!0, n)
                    }
                }, {
                    key: "_parse_waiting_user_status",
                    value: function(e) {
                        var t = {
                            id: function(e) {
                                if (!e) return {};
                                var t = {
                                    instance_id: e.getAttribute("instance_id"),
                                    uid: e.getAttribute("app_uid"),
                                    app_id: e.getAttribute("app_id"),
                                    user_type: e.getAttribute("user_type"),
                                    phone_number: e.getAttribute("phone_number"),
                                    device_type: e.getAttribute("device_type"),
                                    unique_id: e.getAttribute("unique_id")
                                };
                                return "2" == t.user_type && (t.device_type = e.getAttribute("device_type") || "0"), t
                            }(e.getElementsByTagName("id")[0]),
                            av_uid: C(e, "av_uid"),
                            nickname: I(C(e, "nickname")),
                            avatar_type: isNaN(Number.parseInt(C(e, "avatar_type"))) ? "" : Number.parseInt(C(e, "avatar_type")),
                            avatar_token: C(e, "avatar_token", ""),
                            enter_room_type: A(e, "enter_room_type")
                        };
                        return t.id.unique_id || (t.id.unique_id = t.av_uid, this.logger.report(2, "_parse_waiting_user_status", "[warning] property 'unique_id' is missing in 'id'. For compatibility, we use 'av_uid' to fix it.")), t
                    }
                }, {
                    key: "userStatusRequest",
                    value: function(e) {
                        var t = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c("user_status", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("type").t(e.type).up(),
                            n = function(n, i) {
                                e.hasOwnProperty(n) && t.c("up_" + n, {
                                    reason: i.toString()
                                }).t(e[n]).up()
                            };
                        e.hasOwnProperty("nickname") && (e.nickname = N(e.nickname)), ["nickname", "avatar_type", "user_action", "local_record_on", "access_type"].map((function(n) {
                            e.hasOwnProperty(n) && t.c(n).t(e[n]).up()
                        })), n("video_on", e.video_reason), n("audio_on", e.audio_reason), n("share_on", e.share_reason), n("web_share_on", e.web_share_reason);
                        var i = e.type,
                            r = "";
                        for (var o in m.UserState)
                            if (m.UserState[o] === i) {
                                r = o;
                                break
                            }
                        this.logger.report(1, "C2S-user_status(".concat(r, ")"), t.toString()), this.sendIQ(t, this.userStatusResponseSuccess, this.userStatusResponseError)
                    }
                }, {
                    key: "userStatusResponseSuccess",
                    value: function(e) {
                        this.logger.report(1, "S2C-user_status", D(e)), this.getEventHandler("user_status")(!0, {
                            msg: e
                        })
                    }
                }, {
                    key: "userStatusResponseError",
                    value: function(e) {
                        this.logger.report(3, "S2C-user_status", D(e)), this.genErrorCallback(e, "user_status")()
                    }
                }, {
                    key: "reportMediaStreamStatus",
                    value: function(e) {
                        var t = R({
                            type: "set",
                            id: this.getUniqueId("sendIQ")
                        }).c("report_media_stream_status", {
                            xmlns: "tencent:wemeet:meeting_ctrl"
                        }).c("meeting_id").t(e.meeting_id).up();
                        Object.prototype.hasOwnProperty.call(e, "noise_type") && Object.prototype.hasOwnProperty.call(e, "noise_value") && t.c("audio").c("mic_noise", {
                            noise_type: e.noise_type
                        }).t(e.noise_value).up().up(), Object.prototype.hasOwnProperty.call(e, "network_level") && t.c("network").c("network_level").t(e.network_level).up().up(), this.logger.report(1, "C2S-report_media_stream_status", t.toString()), this.sendIQ(t, this.reportMediaStreamStatusSuccess, this.reportMediaStreamStatusError)
                    }
                }, {
                    key: "reportMediaStreamStatusSuccess",
                    value: function(e) {
                        this.logger.report(1, "S2C-report_media_stream_status", D(e));
                        var t = this.getEventHandler("report_media_stream_status"),
                            n = e.getElementsByTagName("report_media_stream_status")[0];
                        if (0 < n.getElementsByTagName("error").length) {
                            var i = {};
                            try {
                                i = {
                                    error: I(C(n, "error"))
                                }
                            } catch (e) {
                                this.logger.report(3, "reportMediaStreamStatusSuccess", "parse 'error' node in 'report_media_stream_status' response failed: ".concat(e.message)), i.error = "parse 'error' node in S2C failed: ".concat(e.message)
                            }
                            t(!1, i)
                        } else t(!0, {})
                    }
                }, {
                    key: "reportMediaStreamStatusError",
                    value: function(e) {
                        this.logger.report(3, "S2C-report_media_stream_status", D(e)), this.genErrorCallback(e, "report_media_stream_status")()
                    }
                }, {
                    key: "changeHostRequest",
                    value: function(e, t) {
                        var n = R({
                            type: "set"
                        }).c("change_host", {
                            xmlns: "tencent:wemeet:meeting_ctrl"
                        }).c("meeting_id").t(e).up().c("id", {
                            app_uid: t.uid,
                            app_id: t.app_id,
                            instance_id: t.instance_id,
                            user_type: t.user_type
                        }).up();
                        this.sendIQ(n, this.changeHostResponseSuccess, this.changeHostResponseError)
                    }
                }, {
                    key: "changeHostResponseSuccess",
                    value: function(e) {
                        this.getEventHandler("change_host")(!0, {
                            msg: "change host success"
                        })
                    }
                }, {
                    key: "changeHostResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "change_host")()
                    }
                }, {
                    key: "switchMediaPermissionRequest",
                    value: function(e, t, n, i, r) {
                        2 == e.user_type && (e.instance_id = 0);
                        var o = R({
                            type: "set"
                        }).c("switch_media_permission", {
                            xmlns: "tencent:wemeet:meeting_ctrl"
                        }).c("meeting_id").t(t).up().c("id", {
                            app_uid: e.uid,
                            app_id: e.app_id,
                            instance_id: e.instance_id,
                            user_type: e.user_type
                        }).up().c("type").t(n).up().c("is_grant").t(i).up().c("all_user").t(r).up();
                        this.logger.report(2, "xmpp", "host switch_media_permission, account:", e, " meeting_id=".concat(t, ", op_type=").concat(n, ", is_enable=").concat(i, ", is_all_users=").concat(r));
                        var s = null;
                        if (r) switch (n) {
                            case m.MediaType.AUDIO:
                                s = "mute_all_audio";
                                break;
                            case m.MediaType.VIDEO:
                                s = "mute_all_video"
                        } else switch (n) {
                            case m.MediaType.AUDIO:
                                s = "mute_audio";
                                break;
                            case m.MediaType.VIDEO:
                                s = "mute_video"
                        }
                        this.sendIQ(o, this.switchMediaPermissionResponseSuccess, this.switchMediaPermissionResponseError, s)
                    }
                }, {
                    key: "switchMediaPermissionResponseSuccess",
                    value: function(e, t) {
                        this.getEventHandler(t)(!0, {
                            msg: e
                        })
                    }
                }, {
                    key: "switchMediaPermissionResponseError",
                    value: function(e, t) {
                        this.getEventHandler(t)(!1, e)
                    }
                }, {
                    key: "getUploadMediaStreamRequestIQ",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return R({
                            type: "set",
                            id: this.getUniqueId("sendIQ")
                        }).c("request_up_stream", {
                            xmlns: "tencent:wemeet:media_ctrl"
                        }).c("meeting_id").t(e).up().c("refresh_media_platform_auth_info").t(n).up().c("request_up_stream_token").t(i).up().c("permission_list").c("permission", {
                            type: t
                        }).up().up()
                    }
                }, {
                    key: "turnAudioRequest",
                    value: function(e) {
                        var t = this,
                            n = e.meeting_id,
                            i = e.succCallBack,
                            r = void 0 === i ? null : i,
                            o = e.failCallback,
                            s = void 0 === o ? null : o,
                            a = e.needRefreshToken,
                            u = void 0 === a ? 0 : a,
                            c = e.requestUpStreamToken,
                            l = void 0 === c ? "" : c,
                            d = this.getUploadMediaStreamRequestIQ(n, m.MediaType.AUDIO, u, l);
                        this.logger.report(1, "C2S-request_up_stream(turn on audio)", d.toString()), this.sendIQ(d, (function(e, n) {
                            if (t.logger.report(1, "S2C-request_up_stream(turn on audio)", D(e)), "function" == typeof r) t.upMediaStreamResponseSuccess(e, n, r, !0);
                            else {
                                var i = t.getEventHandler("turn_audio");
                                t.upMediaStreamResponseSuccess(e, n, i)
                            }
                        }), (function(e) {
                            t.logger.report(3, "S2C-request_up_stream(turn on audio)", D(e)), "function" == typeof s ? t.genErrorCallback(e, s)() : t.genErrorCallback(e, "turn_audio")()
                        }), {
                            needRefreshToken: u
                        })
                    }
                }, {
                    key: "turnVideoRequest",
                    value: function(e) {
                        var t = this,
                            n = e.meeting_id,
                            i = e.needRefreshToken,
                            r = void 0 === i ? 0 : i,
                            o = e.requestUpStreamToken,
                            s = void 0 === o ? "" : o,
                            a = this.getUploadMediaStreamRequestIQ(n, m.MediaType.VIDEO, r, s);
                        this.logger.report(1, "C2S-request_up_stream(turn on video)", a.toString()), this.sendIQ(a, (function(e, n) {
                            t.logger.report(1, "S2C-request_up_stream(turn on video)", D(e));
                            var i = t.getEventHandler("turn_video");
                            t.upMediaStreamResponseSuccess(e, n, i)
                        }), (function(e) {
                            t.logger.report(3, "S2C-request_up_stream(turn on video)", D(e)), t.genErrorCallback(e, "turn_video")()
                        }), {
                            needRefreshToken: r
                        })
                    }
                }, {
                    key: "upMediaStreamResponseSuccess",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        this.logger.debug("xmpp upMediaStreamResponseSuccess msg:", e, "\nmsg(str):", P(e));
                        var r = e.getElementsByTagName("request_up_stream")[0],
                            o = C(r, "meeting_id"),
                            s = [],
                            a = r.getElementsByTagName("permission_list");
                        if (a && a.length) {
                            var u = a[0].getElementsByTagName("permission");
                            if (u && u.length)
                                for (var c = 0; c < u.length; ++c) {
                                    var l = u[c];
                                    l && s.push({
                                        type: parseInt(l.getAttribute("type")),
                                        isGrant: parseInt(l.getAttribute("is_grant")),
                                        limitState: parseInt(l.getAttribute("limit_state"))
                                    })
                                }
                        }
                        var d = {
                                meeting_id: o,
                                permission_list: s
                            },
                            h = this._parse_media_platform(r);
                        null !== h && (d.media_platform = h), t.needRefreshToken, i ? n(d) : n(!0, d)
                    }
                }, {
                    key: "upMediaStreamResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "up_media_stream")()
                    }
                }, {
                    key: "operateCloudRecording",
                    value: function(e) {
                        var t = this,
                            n = e.meeting_id,
                            i = e.type,
                            r = e.check_token,
                            o = void 0 === r ? "" : r,
                            s = R({
                                type: "set"
                            }).c("cloud_record", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(n).up().c("type").t(i).up();
                        o && s.c("check_token").t(o).up();
                        var a = "";
                        switch (i) {
                            case m.CloudRecordAction.STOP:
                                a = "cloud_record_stop";
                                break;
                            case m.CloudRecordAction.START:
                                a = "cloud_record_start";
                                break;
                            case m.CloudRecordAction.PAUSE:
                                a = "cloud_record_pause";
                                break;
                            case m.CloudRecordAction.RESUME:
                                a = "cloud_record_resume"
                        }
                        this.sendIQ(s, (function(e) {
                            var n = t.getEventHandler(a);
                            if (n) {
                                var i = e.getElementsByTagName("cloud_record");
                                if (!i || !i[0]) return w.error("operateCloudRecording success: but cannot find cloud_record node in resp:", msg), void n(!1, {
                                    code: -101,
                                    msg: "cannot find cloud_record node in resp",
                                    resp: e
                                });
                                var r = i[0];
                                if (0 < r.getElementsByTagName("error").length) {
                                    n(!1, {
                                        meeting_id: C(r, "meeting_id"),
                                        code: parseInt(O(r, "error", "code"), 10),
                                        msg: I(C(r, "error"))
                                    })
                                } else {
                                    var o = {
                                        meeting_id: C(r, "meeting_id")
                                    };
                                    if (0 < r.getElementsByTagName("need_check").length) {
                                        var s = O(r, "need_check", "token");
                                        if (s) return void n(!1, {
                                            token: s,
                                            code: parseInt(O(r, "need_check", "code"), 10),
                                            msg: I(C(r, "need_check"))
                                        })
                                    }
                                    n(!0, o)
                                }
                            } else n(!1, {
                                code: -100,
                                msg: "did you miss to define the callback '".concat(a, "' to xmpp_service?")
                            })
                        }), (function(e) {
                            t.genErrorCallback(e, a)()
                        }))
                    }
                }, {
                    key: "queryRecordStorage",
                    value: function(e) {
                        var t = this,
                            n = R({
                                type: "get"
                            }).c("query_record_storage", {
                                xmlns: "tencent:wemeet:cloud_record_storage"
                            }).c("meeting_id").t(e).up();
                        this.sendIQ(n, (function(e) {
                            var n = t.getEventHandler("query_record_storage");
                            if (n) {
                                var i = e.getElementsByTagName("query_record_storage");
                                if (i.length < 1) n(!1, {
                                    code: -101,
                                    msg: "cannot find tag 'query_record_storage' in resp",
                                    resp: e
                                });
                                else {
                                    var r = i[0];
                                    n(!0, {
                                        total_storage: A(r, "total_storage"),
                                        used_storage: A(r, "used_storage")
                                    })
                                }
                            } else n(!1, {
                                code: -100,
                                msg: "did you miss to define the callback 'query_record_storage' to xmpp_service?"
                            })
                        }), (function(e) {
                            t.genErrorCallback(e, "query_record_storage")()
                        }))
                    }
                }, {
                    key: "notifyMediaStatusRequest",
                    value: function(e, t, n) {
                        var i = R({
                            type: "set"
                        }).c("notify_media_status", {
                            xmlns: "tencent:wemeet:media_ctrl"
                        }).c("type").t(t).up().c("on").t(n).up().c("id", {
                            uid: e.uid,
                            app_id: e.app_id,
                            instance_id: e.app_id
                        }).up();
                        this.sendIQ(i, this.notifyMediaStatusResponseSuccess, this.notifyMediaStatusResponseError)
                    }
                }, {
                    key: "notifyMediaStatusResponseSuccess",
                    value: function(e) {
                        this.getEventHandler("notify_media_status")(!0, {
                            msg: "notify_media_status success"
                        })
                    }
                }, {
                    key: "notifyMediaStatusResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "notify_media_status")()
                    }
                }, {
                    key: "changeSettingRequest",
                    value: function(e, t) {
                        var n = R({
                            type: "set"
                        }).c("change_setting", {
                            xmlns: "tencent:wemeet:meeting_ctrl"
                        }).c("type").t(t).up().c("attach").c("id", {
                            uid: e.uid,
                            app_id: e.app_id,
                            instance_id: e.app_id
                        }).up();
                        this.sendIQ(n, this.changeSettingResponseSuccess, this.changeSettingResponseRequest)
                    }
                }, {
                    key: "changeSettingResponseSuccess",
                    value: function() {
                        this.getEventHandler("change_setting")(!0, {
                            msg: "change_setting success"
                        })
                    }
                }, {
                    key: "changeSettingResponseRequest",
                    value: function() {
                        this.genErrorCallback(msg, "change_setting")()
                    }
                }, {
                    key: "handsUpRequest",
                    value: function(e, t, n) {
                        var i, o = R({
                                type: "set"
                            }).c("handsup", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("type", t.toString()).up().c("meeting_id", e).up().c("permission_list"),
                            s = r(n);
                        try {
                            for (s.s(); !(i = s.n()).done;) {
                                var a = i.value;
                                o.c("permission", {
                                    type: a
                                }).up()
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        this.sendIQ(o, this.handsUpResponseSuccess, this.handsUpResponseError)
                    }
                }, {
                    key: "handsUpResponseSuccess",
                    value: function(e) {
                        console.log("xmpp service handsUpResponseSuccess"), this.getEventHandler("hands_up")(!0, {
                            msg: "hands_up success"
                        })
                    }
                }, {
                    key: "handsUpResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "hands_up")()
                    }
                }, {
                    key: "handleHandsUpRequest",
                    value: function(e, t, n, i) {
                        var r = R({
                            type: "set"
                        }).c("handle_handsup", {
                            xmlns: "tencent:wemeet:meeting_ctrl"
                        }).c("meeting_id").t(e).up().c("id", {
                            app_uid: t.uid,
                            app_id: t.app_id,
                            instance_id: t.instance_id,
                            user_type: t.user_type
                        }).up().c("permission_list").c("permission", {
                            type: n,
                            is_grant: i
                        }).up().up();
                        this.sendIQ(r, this.handleHandsUpResponseSuccess, this.handleHandsUpResponseError)
                    }
                }, {
                    key: "handleHandsUpResponseSuccess",
                    value: function(e) {
                        this.getEventHandler("handle_hands_up")(!0, u({
                            msg: "handle_hands_up success, msg:"
                        }, "msg", e))
                    }
                }, {
                    key: "handleHandsUpResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "handle_hands_up")()
                    }
                }, {
                    key: "createMeetingRequest",
                    value: function(e) {
                        var t = R({
                            type: "set"
                        }).c("schedule", {
                            xmlns: "tencent:wemeet:meeting"
                        });
                        if (e.hasOwnProperty("subject") && (e.subject = N(e.subject)), e.hasOwnProperty("location") && (e.location = N(e.location)), e.hasOwnProperty("password") && (e.password = N(e.password)), e.hasOwnProperty("is_quick_meeting") ? e.create_type = e.is_quick_meeting : e.create_type = "0", e.hasOwnProperty("auto_in_waiting_room")) {
                            var n = e.auto_in_waiting_room;
                            Object.values(m.AutoInWaitingRoom).includes(n) ? e.auto_in_waiting_room = n : this.logger.error("createMeetingRequest", "property passed in 'auto_in_waiting_room' is invalid. 0, 1, 2 expected, but we got ".concat(n))
                        }
                        if (e.hasOwnProperty("media_set_type")) {
                            var i = e.media_set_type;
                            Object.values(m.MediaSetType).includes(i) ? e.media_set_type = i : this.logger.error("createMeetingRequest", "property passed in 'media_set_type' is invalid. 0, 1, expected, but we got ".concat(i))
                        }
                        if (e.hasOwnProperty("allow_in_before_host")) {
                            var r = e.allow_in_before_host;
                            Object.values(m.AllowInBeforeHost).includes(r) ? e.allow_in_before_host = r : this.logger.error("createMeetingRequest", "property passed in 'allow_in_before_host' is invalid. 0, 1, 2 expected, but we got ".concat(r))
                        }["subject", "begin_time", "end_time", "location", "custom_buffer", "password", "create_type", "auto_in_waiting_room", "allow_in_before_host", "media_set_type"].map((function(n) {
                            e.hasOwnProperty(n) && t.c(n).t(e[n]).up()
                        })), t.c("invite_list");
                        for (var o = 0; o < e.invite_list.length; o++) {
                            var s = e.invite_list[o];
                            t.c("member", {
                                app_uid: s.app_uid,
                                app_id: s.app_id
                            }).up()
                        }
                        this.sendIQ(t, this.createMeetingResponseSuccess, this.createMeetingResponseError)
                    }
                }, {
                    key: "createMeetingResponseSuccess",
                    value: function(e) {
                        var t = e.getElementsByTagName("schedule")[0],
                            n = C(t, "meeting_id"),
                            i = I(C(t, "url")),
                            r = C(t, "meeting_code"),
                            o = C(t, "begin_time"),
                            s = C(t, "end_time"),
                            a = I(C(t, "password")),
                            u = C(t, "create_type"),
                            c = C(t, "media_set_type"),
                            l = C(t, "pstn_phone"),
                            d = {
                                meeting_id: n,
                                meeting_code: r,
                                meeting_state: C(t, "meeting_state", "0"),
                                url: i,
                                begin_time: o,
                                end_time: s,
                                password: a,
                                is_quick_meeting: u,
                                media_set_type: c,
                                pstn_phone: l,
                                pstn_code: t.getElementsByTagName("pstn_code")[0].childNodes[0].nodeValue,
                                host: {
                                    app_id: t.getElementsByTagName("host")[0].getAttribute("app_id"),
                                    app_uid: t.getElementsByTagName("host")[0].getAttribute("app_uid")
                                },
                                subject: I(C(t, "subject")),
                                location: I(C(t, "location")),
                                invite_list: []
                            };
                        this.getEventHandler("create_meeting")(!0, d)
                    }
                }, {
                    key: "createMeetingResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "create_meeting")()
                    }
                }, {
                    key: "queryMeetingItemListRequest",
                    value: function(e) {
                        var t = R({
                            type: "get",
                            id: this.getUniqueId("sendIQ")
                        }).c("query_meeting_item_list", {
                            xmlns: "tencent:wemeet:meeting"
                        });
                        if (e.hasOwnProperty("sub_action") ? t.c("sub_action").t(e.sub_action).up() : t.c("sub_action").t(m.QueryMeetingListSubAction.QueryListByBeginTime).up(), e.hasOwnProperty("begin_time") && t.c("begin_time").t(e.begin_time).up(), e.hasOwnProperty("end_time") && t.c("end_time").t(e.end_time).up(), e.hasOwnProperty("meeting_code") && t.c("meeting_code").t(e.meeting_code).up(), e.hasOwnProperty("creator_uid") && t.c("creator_uid").t(e.creator_uid).up(), e.hasOwnProperty("is_creator") && t.c("is_creator").t(e.is_creator).up(), e.hasOwnProperty("is_invitee") && t.c("is_invitee").t(e.is_invitee).up(), e.hasOwnProperty("meeting_last_modify_time") && t.c("meeting_last_modify_time").t(e.meeting_last_modify_time).up(), e.hasOwnProperty("meeting_id") && t.c("meeting_id").t(e.meeting_id).up(), e.hasOwnProperty("expect_meeting_count") && t.c("expect_meeting_count").t(e.expect_meeting_count).up(), t.c("meeting_state_list"), Array.isArray(e.meeting_state_list))
                            for (var n = 0, i = e.meeting_state_list.length; n < i; n++) t.c("meeting_state").t(e.meeting_state_list[n].toString()).up(), n === i - 1 && t.up();
                        else t.c("meeting_state").t("0").up(), t.c("meeting_state").t("2").up(), t.c("meeting_state").t("4").up(), t.c("meeting_state").t("5").up().up();
                        e.hasOwnProperty("create_type") ? t.c("create_type").t(e.create_type).up() : t.c("create_type").t(m.MeetingType.Normal).up(), e.hasOwnProperty("purpose_type") && t.c("purpose_type").t(e.purpose_type).up(), this.logger.report(1, "C2S-query_meeting_item_list", t.toString()), this.sendIQ(t, this.queryMeetingItemListResponseSuccess, this.queryMeetingItemListResponseError)
                    }
                }, {
                    key: "queryMeetingItemListResponseSuccess",
                    value: function(e) {
                        this.logger.report(1, "S2C-query_meeting_item_list", D(e));
                        var t = {
                                more: null,
                                meeting_item_list: []
                            },
                            n = this.getEventHandler("query_meeting_item_list"),
                            i = e.getElementsByTagName("query_meeting_item_list")[0];
                        if (0 !== i.childNodes.length) {
                            void 0 !== i.getElementsByTagName("has_remain_meeting")[0] && (t.more = "1" === C(i, "has_remain_meeting"));
                            var r = i.getElementsByTagName("meeting_item_list")[0];
                            if (void 0 !== r)
                                for (var o = 0; o < r.childNodes.length; o++) {
                                    var s = r.childNodes[o],
                                        a = this._parse_meeting_item(s);
                                    t.meeting_item_list.push(a)
                                }
                            n(!0, t)
                        } else n(!0, t)
                    }
                }, {
                    key: "_parse_meeting_item",
                    value: function(e) {
                        var t = {
                            meeting_id: C(e, "meeting_id"),
                            meeting_code: C(e, "meeting_code"),
                            breakout_room_status: C(e, "breakout_room_status"),
                            pmi_code: C(e, "pmi_code", ""),
                            meeting_state: C(e, "meeting_state"),
                            meeting_type: A(e, "meeting_type"),
                            url: I(C(e, "url")),
                            pstn_phone: C(e, "pstn_phone"),
                            pstn_code: C(e, "pstn_code"),
                            pstn_password: I(C(e, "pstn_password")),
                            begin_time: C(e, "begin_time"),
                            end_time: C(e, "end_time"),
                            last_modify_time: C(e, "last_modify_time"),
                            password: I(C(e, "password")),
                            need_auth: C(e, "need_auth", "1"),
                            auth_type: C(e, "auth_type", "0"),
                            is_quick_meeting: C(e, "create_type"),
                            host: {
                                app_id: O(e, "host", "app_id"),
                                app_uid: O(e, "host", "app_uid")
                            },
                            creator: {
                                appId: O(e, "creator", "app_id"),
                                appUid: O(e, "creator", "app_uid")
                            },
                            subject: I(C(e, "subject")),
                            location: I(C(e, "location")),
                            inviteList: [],
                            mediaSettings: [],
                            auto_in_waiting_room: A(e, "auto_in_waiting_room"),
                            allow_in_before_host: A(e, "allow_in_before_host"),
                            meeting_lock_settings: {
                                meeting_lock: A(e, "meeting_lock")
                            },
                            login_users_only: A(e, "login_users_only"),
                            creator_nickname: I(C(e, "creator_nickname")),
                            media_set_type: A(e, "media_set_type"),
                            need_enroll: A(e, "need_enroll"),
                            enroll_status: A(e, "enroll_status"),
                            is_anonymous: A(e, "is_anonymous"),
                            security_verify_type: A(e, "security_verify_type")
                        };
                        if (e.hasOwnProperty("invite_list"))
                            for (var n = e.getElementsByTagName("invite_list")[0], i = 0; i < n.childNodes.length; i++) {
                                var r = n.childNodes[i];
                                t.inviteList.push({
                                    app_id: r.getAttribute("app_id"),
                                    app_uid: r.getAttribute("app_uid")
                                })
                            }
                        if (t.mediaSettings = [], e.hasOwnProperty("media_settings_list"))
                            for (var o = e.getElementsByTagName("media_settings_list")[0], s = 0; s < o.childNodes.length; ++s) {
                                var a = o.childNodes[s];
                                t.mediaSettings.push({
                                    type: C(a, "type"),
                                    muteOnJoin: C(a, "mute_on_join")
                                })
                            }
                        var u = A(e, "meeting_info_mask_flag");
                        return isNaN(u) || (t.meeting_info_mask_flag = u), t
                    }
                }, {
                    key: "queryMeetingItemListResponseError",
                    value: function(e) {
                        this.logger.report(3, "S2C-query_meeting_item_list", D(e)), this.genErrorCallback(e, "query_meeting_item_list")()
                    }
                }, {
                    key: "queryUserStatus",
                    value: function(e) {
                        var t = this,
                            n = R({
                                type: "get"
                            }).c("query_user_status", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("user_type").t(e.user_type).up().c("is_callin").t(e.is_callin).up();
                        n.c("participation_status_list");
                        var i, o = r(e.participation_status_list);
                        try {
                            for (o.s(); !(i = o.n()).done;) {
                                var s = i.value;
                                n.c("status").t(s).up()
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        n.up(), this.sendIQ(n, (function(e, n) {
                            var i = e.getElementsByTagName("query_user_status")[0],
                                r = {
                                    user_list: [],
                                    meeting_id: C(i, "meeting_id"),
                                    sender_data: n
                                },
                                o = i.getElementsByTagName("list");
                            if (o.length > 0)
                                for (var s = o[0].childNodes, a = 0; a < s.length; ++a) r.user_list.push(t._parse_user_status(s[a]));
                            t.getEventHandler("query_user_status")(!0, r)
                        }), (function(e, n) {
                            t.genErrorCallback(e, "query_user_status")()
                        }), {
                            queryParams: e
                        })
                    }
                }, {
                    key: "queryMeetingPayInfoRequest",
                    value: function(e) {
                        var t = this,
                            n = R({
                                type: "set"
                            }).c("query_meeting_pay_info", {
                                xmlns: "tencent:wemeet:query"
                            }).c("meeting_id").t(e);
                        this.sendIQ(n, (function(e, n) {
                            var i = e.getElementsByTagName("query_meeting_pay_info")[0],
                                r = {
                                    meeting_id: C(i, "meeting_id"),
                                    expire_time: parseInt(C(i, "expire_time")),
                                    countdown_time: parseInt(C(i, "countdown_time")),
                                    member_limit: parseInt(C(i, "member_limit")),
                                    member_count: parseInt(C(i, "member_count")),
                                    countdown_member: parseInt(C(i, "countdown_member")),
                                    pstn_time: parseInt(C(i, "pstn_time")),
                                    owner_nickname: C(i, "owner_nickname")
                                };
                            t.getEventHandler("query_meeting_pay_info")(!0, r)
                        }), (function(e, n) {
                            t.genErrorCallback(e, "query_meeting_pay_info")()
                        }), {
                            queryParams: {
                                meetingId: e
                            }
                        })
                    }
                }, {
                    key: "modifyMeetingItemRequest",
                    value: function(e) {
                        var t = R({
                            type: "set"
                        }).c("modify", {
                            xmlns: "tencent:wemeet:meeting"
                        }).c("meeting_id").t(e.meeting_id).up();
                        if (e.hasOwnProperty("subject") && t.c("subject").t(N(e.subject)).up(), e.hasOwnProperty("begin_time") && t.c("begin_time").t(e.begin_time).up(), e.hasOwnProperty("end_time") && t.c("end_time").t(e.end_time).up(), e.hasOwnProperty("password") && t.c("password").t(N(e.password)).up(), e.hasOwnProperty("location") && t.c("location").t(N(e.location)).up(), e.hasOwnProperty("host") && t.c("host", {
                                app_uid: e.host.app_uid,
                                app_id: e.host.app_id
                            }).up(), e.hasOwnProperty("invite_list")) {
                            t.c("invite_list");
                            for (var n = 0; n < e.invite_list.length; n++) {
                                var i = e.invite_list[n];
                                t.c("member", {
                                    app_uid: i.app_uid,
                                    app_id: i.app_id
                                }).up()
                            }
                        }
                        if (e.hasOwnProperty("auto_in_waiting_room") && (0 !== e.auto_in_waiting_room && 1 !== e.auto_in_waiting_room && 2 !== e.auto_in_waiting_room ? this.logger.error("modifyMeetingItemRequest", "'auto_in_waiting_room' expected to be either Number 0, Number 1 or Number 2, but got ".concat(e.auto_in_waiting_room)) : t.c("auto_in_waiting_room").t(e.auto_in_waiting_room).up()), e.hasOwnProperty("allow_in_before_host\t") && (0 !== e.allow_in_before_host && 1 !== e.allow_in_before_host && 2 !== e.allow_in_before_host ? this.logger.error("modifyMeetingItemRequest", "'allow_in_before_host' expected to be either Number 0, Number 1 or Number 2, but got ".concat(e.allow_in_before_host)) : t.c("allow_in_before_host").t(e.allow_in_before_host).up()), e.hasOwnProperty("local_settings_list"))
                            for (t.c("local_settings_list"), n = 0; n < e.local_settings_list.length; n++) i = e.local_settings_list[n], t.c("local_settings").c("type").t(i.type).up().c("allow_record").t(i.allow_record).up().up();
                        this.sendIQ(t, this.modifyMeetingItemResponseSuccess, this.modifyMeetingItemResponseError)
                    }
                }, {
                    key: "modifyMeetingItemResponseSuccess",
                    value: function(e) {
                        e.getElementsByTagName("modify")[0], this.getEventHandler("modify_meeting")(!0, {
                            msg: "modify meeting info success"
                        })
                    }
                }, {
                    key: "modifyMeetingItemResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "modify_meeting")
                    }
                }, {
                    key: "cancelMeetingRequest",
                    value: function(e) {
                        var t = R({
                            type: "set"
                        }).c("cancel", {
                            xmlns: "tencent:wemeet:meeting"
                        }).c("meeting_id").t(e.meeting_id).up().c("reason", {
                            code: e.code
                        }).t(e.reason).up();
                        this.sendIQ(t, this.cancelMeetingResponseSuccess, this.cancelMeetingResponseError)
                    }
                }, {
                    key: "cancelMeetingResponseSuccess",
                    value: function(e) {
                        e.getElementsByTagName("cancel")[0], this.getEventHandler("cancel_meeting")(!0, {})
                    }
                }, {
                    key: "cancelMeetingResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "cancel_meeting")()
                    }
                }, {
                    key: "joinMeetingRequest",
                    value: function(e) {
                        var t = e.hasOwnProperty("join_from") && !isNaN(e.join_from) ? e.join_from : 0,
                            n = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c("join", {
                                xmlns: "tencent:wemeet:meeting"
                            }).c("nickname").t(N(e.nickname)).up().c("join_from").t(t).up().c("default_auth_bits").t(e.default_auth_bits).up(),
                            i = {
                                meeting_code: e.meeting_code
                            };
                        e.hasOwnProperty("password") && n.c("password").t(N(e.password)).up(), e.hasOwnProperty("token") && n.c("token").t(e.token).up(), e.hasOwnProperty("meeting_code") && n.c("meeting_code").t(e.meeting_code).up(), e.hasOwnProperty("meeting_id") && n.c("meeting_id").t(e.meeting_id).up(), e.hasOwnProperty("pmi_code") && n.c("pmi_code").t(e.pmi_code).up(), e.hasOwnProperty("country_code") && n.c("country_code").t(e.country_code).up(), e.hasOwnProperty("phone") && n.c("phone").t(e.phone).up(), e.hasOwnProperty("verification_code") && n.c("verification_code").t(e.verification_code).up(), e.hasOwnProperty("media_set_type") && n.c("media_set_type").t(e.media_set_type).up(), e.hasOwnProperty("meeting_appid") && n.c("meeting_appid").t(e.meeting_appid).up(), e.hasOwnProperty("im") && (n.c("im"), e.im.hasOwnProperty("im_type") && n.c("im_type").t(e.im.im_type).up().up()), e.hasOwnProperty("rs") && n.c("rs").t(e.rs).up(), e.hasOwnProperty("sign_type") && (n.c("sign_type").t(e.sign_type).up(), i.sign_type = e.sign_type), e.hasOwnProperty("customer_data") && n.c("customer_data").t(e.customer_data).up(), this.logger.report(1, "C2S-join", n.toString()), this.sendIQ(n, this.joinMeetingResponseSuccess, this.joinMeetingResponseError, i)
                    }
                }, {
                    key: "joinMeetingResponseSuccess",
                    value: function(e, t) {
                        this.logger.report(1, "S2C-join", D(e));
                        var n = e.getElementsByTagName("join")[0];
                        if (0 < n.getElementsByTagName("error").length && "22328" !== O(n, "error", "code")) {
                            var i = this.getEventHandler("join_meeting"),
                                r = {};
                            try {
                                var o = O(n, "error", "code"),
                                    s = I(C(n, "error"));
                                (r = {
                                    meeting_id: C(n, "meeting_id"),
                                    meeting_code: t.meeting_code,
                                    meeting_type: C(n, "meeting_type"),
                                    pmi_code: C(n, "pmi_code", ""),
                                    error: s,
                                    code: o
                                }).meetingInUseList = [];
                                var a = n.getElementsByTagName("meeting_in_use_list")[0];
                                if (void 0 !== a)
                                    for (var u = 0; u < a.childNodes.length; u++) {
                                        var c = a.childNodes[u];
                                        r.meetingInUseList.push({
                                            meeting_id: c.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue,
                                            meeting_code: c.getElementsByTagName("meeting_code")[0].childNodes[0].nodeValue,
                                            meeting_type: C(n, "meeting_type"),
                                            pmi_code: C(c, "pmi_code", ""),
                                            subject: I(c.getElementsByTagName("subject")[0].childNodes[0].nodeValue)
                                        })
                                    }
                            } catch (e) {
                                console.error("parse join_meeting error response which is type of result failed: ", e)
                            }
                            i(!1, r)
                        } else {
                            var l = null;
                            if (A(n, "enter_room_type") === m.RoomType.WAITING_ROOM) {
                                (l = {
                                    meeting_id: n.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue,
                                    meeting_code: t.meeting_code,
                                    meeting_type: C(n, "meeting_type"),
                                    pmi_code: C(n, "pmi_code", ""),
                                    av_user_id: n.getElementsByTagName("av_user_id")[0].childNodes[0].nodeValue,
                                    enter_room_type: m.RoomType.WAITING_ROOM,
                                    unique_id: this.get_unique_id(n)
                                }).host_status = {};
                                var d = n.getElementsByTagName("host_status")[0];
                                void 0 !== d && (l.host_status.status = A(d, "status"), l.host_status.msg = C(d, "msg"))
                            } else {
                                (l = {
                                    meeting_id: n.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue,
                                    meeting_code: t.meeting_code,
                                    meeting_type: C(n, "meeting_type"),
                                    pmi_code: C(n, "pmi_code", ""),
                                    av_room_id: n.getElementsByTagName("av_room_id")[0].childNodes[0].nodeValue,
                                    av_user_id: n.getElementsByTagName("av_user_id")[0].childNodes[0].nodeValue,
                                    enter_room_type: m.RoomType.MEETING_ROOM,
                                    app_id: n.getElementsByTagName("app_id")[0].childNodes[0].nodeValue,
                                    media_platform_auth_token: C(n, "media_platform_auth_token"),
                                    qcloud_user_signature: C(n, "qcloud_user_signature"),
                                    qcloud_user_private_map_key: C(n, "qcloud_user_private_map_key"),
                                    expire_time: A(n, "expire_time"),
                                    av_feature_switches: C(n, "av_feature_switches"),
                                    watermark_content: I(C(n, "watermark_content")),
                                    participate_id: C(n, "participate_id"),
                                    role: A(n, "role"),
                                    code: O(n, "error", "code"),
                                    meeting_type_flags: C(n, "meeting_type_flags")
                                }).unique_id = C(n, "unique_id"), l.defaultMediaStateList = [];
                                var h = n.getElementsByTagName("default_media_state_list")[0];
                                if (void 0 !== h)
                                    for (var _ = 0; _ < h.childNodes.length; _++) {
                                        var p = h.childNodes[_],
                                            g = p.getAttribute("type"),
                                            f = p.getAttribute("state"),
                                            v = p.getAttribute("reason_bits");
                                        l.defaultMediaStateList.push({
                                            type: g,
                                            state: f,
                                            reason_bits: v
                                        })
                                    }
                                l.media_platform = {};
                                var y = n.getElementsByTagName("media_platform")[0];
                                if (void 0 !== y && (l.media_platform = {
                                        room_id: C(y, "room_id"),
                                        auth_token: C(y, "auth_token"),
                                        expire_time: A(y, "expire_time"),
                                        media_access_info: C(y, "media_access_info"),
                                        auth_bits: A(y, "auth_bits"),
                                        room_type: A(y, "room_type")
                                    }), t.sign_type === m.SignType.UseTRTC) {
                                    var S = n.getElementsByTagName("trtc_token")[0];
                                    S ? l.trtc_token = {
                                        group_id: C(S, "group_id", ""),
                                        set_flag: C(S, "set_flag", ""),
                                        priv_map: C(S, "priv_map", ""),
                                        usr_sig: C(S, "usr_sig", "")
                                    } : this.logger.report(3, "assert", "sign_type is trtc, but cannot find 'trtc_token'")
                                }
                                l.set_flag = C(n, "set_flag", ""), l.im = {};
                                var b = n.getElementsByTagName("im")[0];
                                if (void 0 !== b) {
                                    l.im.im_type = C(b, "im_type");
                                    var E = b.getElementsByTagName("qcloud_im_sdk")[0];
                                    void 0 !== E && (l.im.qcloud_im_sdk = {
                                        group_id: E.getAttribute("group_id"),
                                        attendee_group_id: E.getAttribute("attendee_group_id")
                                    })
                                }
                                l.warmup_media = {};
                                var w = n.getElementsByTagName("warmup_media")[0];
                                void 0 !== w && (l.warmup_media.warmup_type = C(w, "warmup_type"))
                            }
                            this.getEventHandler("join_meeting")(!0, l)
                        }
                    }
                }, {
                    key: "get_unique_id",
                    value: function(e) {
                        var t, n;
                        if (!e) return this.logger.report(3, "getUniqueId", "node must not be null"), "";
                        var i = e.getElementsByTagName("unique_id")[0];
                        if (i && (null === (t = i.childNodes[0]) || void 0 === t ? void 0 : t.nodeValue)) return i.childNodes[0].nodeValue;
                        var r = e.getElementsByTagName("av_user_id")[0];
                        return r && (null === (n = r.childNodes[0]) || void 0 === n ? void 0 : n.nodeValue) ? r.childNodes[0].nodeValue : ""
                    }
                }, {
                    key: "startMeetingPing",
                    value: function(e, t) {
                        var n = this;
                        this.cancelXmppPing(), this.meetingPingTimer && (clearInterval(this.meetingPingTimer), this.meetingPingTimer = null), this.meetingPingTimer = setInterval((function() {
                            e > 0 && n.meetingPingRequest(e, t)
                        }), 5e3)
                    }
                }, {
                    key: "stopMeetingPing",
                    value: function() {
                        this.meetingPingTimer && (clearInterval(this.meetingPingTimer), this.meetingPingTimer = null, this.logger.report(1, "ping", "meeting ping stopped."))
                    }
                }, {
                    key: "refreshMediaAuthInfo",
                    value: function(e) {
                        var t = R({
                            type: "get"
                        }).c("refresh_media_auth_info", {
                            xmlns: "tencent:wemeet:meeting_ctrl"
                        }).c("meeting_id").t(e);
                        this.sendIQ(t, this.refreshMediaAuthInfoResponseSuccess, this.refreshMediaAuthInfoResponseError)
                    }
                }, {
                    key: "refreshMediaAuthInfoResponseSuccess",
                    value: function(e) {
                        var t = this.getEventHandler("refresh_media_auth_info"),
                            n = e.getElementsByTagName("refresh_media_auth_info")[0];
                        if (0 < n.getElementsByTagName("error").length) {
                            t(!1, {
                                error: I(C(n, "error")),
                                errorcode: O(n, "error", "code")
                            })
                        } else {
                            var i = {};
                            i.meeting_id = C(n, "meeting_id"), i.qcloud_user_private_map_key = C(n, "qcloud_user_private_map_key"), i.qcloud_user_signature = C(n, "qcloud_user_signature"), i.media_platform_expire_time = A(n, "media_platform_expire_time", 0);
                            var r = this._parse_trtc_token(n);
                            null !== r && (i.trtc_token = r), t(!0, i)
                        }
                    }
                }, {
                    key: "refreshMediaAuthInfoResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "refresh_media_auth_info")()
                    }
                }, {
                    key: "joinMeetingResponseError",
                    value: function(e) {
                        this.logger.report(3, "S2C-join", D(e));
                        try {
                            var t = e.getElementsByTagName("join")[0],
                                n = O(t, "error", "code"),
                                i = I(C(t, "error"));
                            if ("13426" === n) {
                                var r = {
                                    code: n,
                                    dialogConfig: JSON.parse(i)
                                };
                                return void this.getEventHandler("join_meeting")(!1, r)
                            }
                        } catch (e) {
                            this.logger.report(3, "parse join response error node failed.", e.message)
                        }
                        this.genErrorCallback(e, "join_meeting")()
                    }
                }, {
                    key: "leaveMeetingRequest",
                    value: function(e) {
                        var t = this,
                            n = e || {},
                            i = n.meeting_id,
                            r = n.room_type,
                            o = n.reason;
                        if (r == m.RoomType.MEETING_ROOM) {
                            var s = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c("user_status", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(i).up().c("type").t(2).up();
                            this.logger.report(1, "C2S-user_status(leave)", s.toString()), this.sendIQ(s, (function(e) {
                                t.logger.report(1, "S2C-user_status(leave)", D(e))
                            }), (function(e) {
                                t.logger.report(3, "S2C-user_status(leave)", JSON.stringify(e))
                            }))
                        }
                        var a = R({
                            type: "set",
                            id: this.getUniqueId("sendIQ")
                        }).c("leave", {
                            xmlns: "tencent:wemeet:meeting"
                        }).c("meeting_id").t(i).up().c("reason", {
                            code: o
                        }).t("").up().c("room_type").t(r).up();
                        this.logger.report(1, "C2S-leave", a.toString()), this.sendIQ(a, (function(e) {
                            t.logger.report(1, "S2C-leave", D(e))
                        }), (function(e) {
                            t.logger.report(3, "S2C-leave", JSON.stringify(e))
                        })), this.leaveMeetingResponseSuccess()
                    }
                }, {
                    key: "leaveMeetingResponseSuccess",
                    value: function(e, t) {
                        this.meetingPingTimer && (clearInterval(this.meetingPingTimer), this.meetingPingTimer = null), this.getEventHandler("leave_meeting")(!0, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(Object(n), !0).forEach((function(t) {
                                    u(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            msg: "left from meeting"
                        }, t))
                    }
                }, {
                    key: "getReadableUserStatusType",
                    value: function(e) {
                        switch (e) {
                            case 1:
                                return "join";
                            case 2:
                                return "leave";
                            case 3:
                                return "update";
                            case 4:
                                return "kicked";
                            case 5:
                                return "heartbeats timeout";
                            default:
                                return "unknown"
                        }
                    }
                }, {
                    key: "sendUserStatusLeave",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            var r = e || {},
                                o = r.meeting_id,
                                s = r.type,
                                a = void 0 === s ? 2 : s,
                                u = r.user_action,
                                c = void 0 === u ? null : u,
                                l = R({
                                    type: "set",
                                    id: t.getUniqueId("sendIQ")
                                }).c("user_status", {
                                    xmlns: "tencent:wemeet:meeting_ctrl"
                                }).c("meeting_id").t(o).up().c("type").t(a).up();
                            null !== c && l.c("user_action").t(c).up();
                            var d = "user_status(".concat(t.getReadableUserStatusType(a), ")");
                            t.logger.report(1, "C2S-".concat(d), l.toString()), t.sendIQ(l, (function(e) {
                                t.logger.report(1, "S2C-".concat(d), D(e)), n()
                            }), (function(e) {
                                i(t.getStanzaError({
                                    errorStanza: e,
                                    cmd: d
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "sendLeave",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            var r = e || {},
                                o = r.meeting_id,
                                s = r.reason,
                                a = r.room_type,
                                u = R({
                                    type: "set",
                                    id: t.getUniqueId("sendIQ")
                                }).c("leave", {
                                    xmlns: "tencent:wemeet:meeting"
                                }).c("meeting_id").t(o).up().c("reason", {
                                    code: s
                                }).t("").up().c("room_type").t(a).up();
                            t.logger.report(1, "C2S-leave", u.toString()), t.sendIQ(u, (function(e) {
                                t.logger.report(1, "S2C-leave", D(e)), n()
                            }), (function(e) {
                                i(t.getStanzaError({
                                    errorStanza: e,
                                    cmd: "leave"
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "getStanzaError",
                    value: function(e) {
                        var t = e.errorStanza,
                            n = e.cmd,
                            i = "S2C-".concat(n);
                        if (null === t) return this.logger.report(3, i, "waiting for response timeout"), {
                            errcod: "-2",
                            detail: "timeout",
                            msg: "couldn't receive '".concat(i, "' until timeout.")
                        };
                        this.logger.report(3, i, D(t));
                        var r = {
                            errcod: "",
                            detail: "",
                            msg: ""
                        };
                        try {
                            r.errcod = O(t, "error", "code"), r.detail = O(t, "error", "detail"), r.msg = I(C(t, "error", "text node of <error> body is not defined yet"))
                        } catch (e) {
                            r.errcod = "-1", r.detail = "exception caught at getting error info from xmpp stanza", r.msg = "see log for detail", this.logger.report(3, "getStanzaError", "exception caught when getting error object from this stanza. see log for detail.")
                        } finally {
                            return r
                        }
                    }
                }, {
                    key: "backToWaitingRoomRequest",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            var r = R({
                                type: "set",
                                id: t.getUniqueId("sendIQ")
                            }).c("user_status", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e).up().c("type").t(2).up().c("user_action").t(1).up();
                            t.logger.report(1, "C2S-user_status(leave, user_action=1)", r.toString()), t.sendIQ(r, (function(e) {
                                t.logger.report(1, "S2C-user_status(leave, user_action=1)", D(e)), n()
                            }), (function(e) {
                                t.logger.report(3, "S2C-user_status(leave, user_action=1)", D(e)), i(e)
                            }))
                        }))
                    }
                }, {
                    key: "finishKickedOutRequest",
                    value: function(e) {
                        var t = this,
                            n = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c("user_status", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e.meetingId).up().c("type").t(4).up();
                        this.logger.report(1, "C2S-user_status(kickout)", n.toString()), this.sendIQ(n, (function(e) {
                            t.logger.report(1, "S2C-user_status(kickout)", D(e))
                        }), (function(e) {
                            t.logger.report(3, "S2C-user_status(kickout)", JSON.stringify(e))
                        }));
                        var i = e.room_type || 0,
                            r = R({
                                type: "set"
                            }).c("leave", {
                                xmlns: "tencent:wemeet:meeting"
                            }).c("meeting_id").t(e.meetingId).up().c("reason", {
                                code: e.reasonCode
                            }).t("").up().c("room_type").t(i).up();
                        this.logger.report(1, "C2S-leave(kickout)", r.toString()), this.sendIQ(r, (function(e) {
                            t.logger.report(1, "S2C-leave(kickout)", D(e))
                        }), (function(e) {
                            t.logger.report(3, "S2C-leave(kickout)", JSON.stringify(e))
                        })), this.leaveMeetingResponseSuccess()
                    }
                }, {
                    key: "dissolveMeetingRequest",
                    value: function(e) {
                        var t = R({
                            type: "set"
                        }).c("dissolve", {
                            xmlns: "tencent:wemeet:meeting"
                        }).c("meeting_id").t(e.meeting_id).up().c("reason", {
                            code: e.code
                        }).t(e.reason).up();
                        this.sendIQ(t, this.dissolveMeetingResponseSuccess, this.dissolveMeetingResponseError)
                    }
                }, {
                    key: "dissolveMeetingResponseSuccess",
                    value: function(e) {
                        var t = e.getElementsByTagName("dissolve")[0];
                        this.getEventHandler("dissolve_meeting")(!0, {
                            msg: "dissolve meeting success",
                            data: t
                        })
                    }
                }, {
                    key: "dissolveMeetingResponseError",
                    value: function(e) {
                        this.genErrorCallback(e, "dissolve_meeting")()
                    }
                }, {
                    key: "modifyNicknameRequest",
                    value: function(e, t, n, i) {
                        var r = this,
                            o = R({
                                type: "set"
                            }).c("modify_user_info", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e).up().c("from_type").t(i).up().c("user_list").c("item").c("id", {
                                app_uid: t.uid,
                                app_id: t.app_id,
                                instance_id: t.instance_id,
                                user_type: t.user_type,
                                unique_id: t.unique_id
                            }).up().c("nickname").t(N(n));
                        this.sendIQ(o, (function(e) {
                            r.getEventHandler("modify_user_info")(!0, {
                                msg: "modify_user_info success",
                                nickname: n
                            })
                        }), (function(e) {
                            r.genErrorCallback(e, "modify_user_info")()
                        }))
                    }
                }, {
                    key: "setVideoLayoutRequest",
                    value: function() {}
                }, {
                    key: "kickoutRequest",
                    value: function(e, t, n) {
                        var i, o = this,
                            s = R({
                                type: "set"
                            }).c("kick_out", {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e).up().c("reason", {
                                code: n
                            }).t(0).up().c("user_list"),
                            a = r(t);
                        try {
                            for (a.s(); !(i = a.n()).done;) {
                                var u = i.value;
                                2 == u.user_type && (u.instance_id = "0", u.app_id = "0"), s.c("id", {
                                    app_uid: u.uid,
                                    app_id: u.app_id,
                                    instance_id: u.instance_id,
                                    user_type: u.user_type
                                }).up()
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        this.sendIQ(s, (function(e) {
                            o.getEventHandler("kickout")(!0, {
                                msg: "modify_user_info success",
                                data: e
                            })
                        }), (function(e) {
                            o.genErrorCallback(e, "kickout")()
                        }))
                    }
                }, {
                    key: "sendXmppPing",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3;
                        this.xmppPingTimer = setTimeout((function() {
                            e.xmppPingRequest()
                        }), t)
                    }
                }, {
                    key: "cancelXmppPing",
                    value: function() {
                        this.xmppPingTimer && (clearTimeout(this.xmppPingTimer), this.xmppPingTimer = 0)
                    }
                }, {
                    key: "xmppPingRequest",
                    value: function() {}
                }, {
                    key: "meetingPingRequest",
                    value: function(e, t) {
                        var n = this,
                            i = R({
                                type: "get"
                            }).c("ping", {
                                xmlns: "tencent:wemeet:ping"
                            }).c("meeting_id").t(e).up().c("type").t(t).up();
                        this.sendIQ(i, (function(e) {
                            return e
                        }), (function(e) {
                            if (console.log(e), void 0 !== e && e) {
                                n.meetingPingTimer && (clearInterval(n.meetingPingTimer), n.meetingPingTimer = null);
                                var t = e.getElementsByTagName("ping")[0],
                                    i = C(t, "error"),
                                    r = O(t, "error", "code");
                                console.log("meeting ping error, code:", r, ", msg:", i), n.getEventHandler("leave_meeting")(!0, {
                                    msg: "leave from meeting bacause ping recv bad rep."
                                })
                            }
                        }))
                    }
                }, {
                    key: "queryMeetingSettingsRequest",
                    value: function(e) {
                        var t = this,
                            n = R({
                                type: "get",
                                id: this.getUniqueId("sendIQ")
                            }).c("query", {
                                xmlns: "tencent:wemeet:meeting_settings"
                            }).c("meeting_id").t(e);
                        this.logger.report(1, "C2S-query_meeting_settings", n.toString()), this.sendIQ(n, (function(e) {
                            t.logger.report(1, "S2C-query_meeting_settings", D(e));
                            var n = e.getElementsByTagName("query")[0],
                                i = t._parse_meeting_settings(n);
                            t.getEventHandler("query_meeting_settings")(!0, i)
                        }), (function(e) {
                            t.logger.report(3, "S2C-query_meeting_settings", D(e)), t.genErrorCallback(e, "query_meeting_settings")()
                        }))
                    }
                }, {
                    key: "queryUiCfgRequest",
                    value: function() {
                        var e = this,
                            t = R({
                                type: "get",
                                id: this.getUniqueId("sendIQ")
                            }).c("query_ui_config", {
                                xmlns: "tencent:wemeet:ui_config"
                            });
                        this.logger.report(1, "C2S-query_ui_config", t.toString()), this.sendIQ(t, (function(t) {
                            e.logger.report(1, "S2C-query_ui_config", D(t));
                            var n = t.getElementsByTagName("query_ui_config")[0],
                                i = e._parse_query_ui_config(n);
                            e.getEventHandler("query_ui_config")(!0, i)
                        }), (function(t) {
                            e.logger.report(3, "S2C-query_ui_config", D(t)), e.genErrorCallback(t, "query_ui_config")()
                        }))
                    }
                }, {
                    key: "freeXMPPRequest",
                    value: function(e) {
                        this.connection.sendRawString(e)
                    }
                }, {
                    key: "queryLocalPermission",
                    value: function(e, t) {
                        var n = this,
                            i = R({
                                type: "set"
                            }).c("local_permission", {
                                xmlns: "tencent:wemeet:local_ctrl"
                            }).c("meeting_id").t(e).c("permission_list").c("permission", {
                                type: t
                            });
                        this.sendIQ(i, (function(e) {
                            var t = n.getEventHandler("query_local_permission"),
                                i = e.getElementsByTagName("local_permission")[0],
                                r = O(i, "error", "code");
                            r ? t(!1, {
                                errcod: r
                            }) : t(!0, {})
                        }), (function(e) {
                            n.genErrorCallback(e, "query_local_permission")()
                        }))
                    }
                }, {
                    key: "switchLocalPermissionPush",
                    value: function(e) {
                        console.log("on Push switch_local_permission, msg:", e);
                        var t = e.getElementsByTagName("switch_local_permission")[0],
                            n = t.getElementsByTagName("id")[0],
                            i = {
                                uid: n.getAttribute("app_uid"),
                                app_id: n.getAttribute("app_id"),
                                instance_id: n.getAttribute("instance_id"),
                                user_type: n.getAttribute("user_type")
                            },
                            r = {
                                meeting_id: C(t, "meeting_id"),
                                id: i,
                                permission_list: []
                            },
                            o = t.getElementsByTagName("permission_list")[0].getElementsByTagName("permission");
                        if (o && o.length)
                            for (var s = 0; s < o.length; ++s) {
                                var a = o[s];
                                a && r.permissionList.push({
                                    type: parseInt(a.getAttribute("type")),
                                    action: C(a, "action")
                                })
                            }
                        this.getEventHandler("switch_local_permission")(!0, r)
                    }
                }, {
                    key: "switchUserRole",
                    value: function(e) {
                        console.log("on Push switch_user_role, msg:", e);
                        var t = e.getElementsByTagName("switch_user_role")[0],
                            n = {};
                        n.meetingId = C(t, "meeting_id");
                        var i = this._parse_media_platform(t);
                        null !== i && (n.media_platform = i), this.getEventHandler("switch_user_role")(!0, n)
                    }
                }, {
                    key: "cloudRecordState",
                    value: function(e) {
                        console.log("on Push cloud_record_state, msg:", e);
                        var t = this.getEventHandler("cloud_record_state");
                        if (!e) return t(!1, "empty response"), void this.logger.warn("empty response for cloud_record_state");
                        var n = e.getElementsByTagName("cloud_record_state"),
                            i = n[0];
                        if (!n || !i) return t(!1, 'invalid response: "cloud_record_state" tag not found'), void this.logger.warn('invalid response: "cloud_record_state" tag not found');
                        t(!0, this._parse_cloud_record_state(i))
                    }
                }, {
                    key: "queryCloudRecordState",
                    value: function(e) {
                        var t = R({
                            type: "get"
                        }).c("query_record_state", {
                            xmlns: "tencent:wemeet:cloud_record_state"
                        }).c("meeting_id").t(e).up();
                        this.sendIQ(t, this.queryCloudRecordStateSuccess.bind(this), this.queryCloudRecordStateError.bind(this))
                    }
                }, {
                    key: "queryCloudRecordStateSuccess",
                    value: function(e) {
                        console.log("on query_cloud_record_state success, msg:", e);
                        var t = this.getEventHandler("query_cloud_record_state");
                        if (!e) return this.logger.warn("empty response for query_cloud_record_state"), void t(!1, "empty response");
                        t(!0, this._parse_cloud_record_state(e))
                    }
                }, {
                    key: "queryCloudRecordStateError",
                    value: function(e) {
                        console.log("on query_cloud_record_state error, msg:", e), this.genErrorCallback(e, "query_cloud_record_state")()
                    }
                }, {
                    key: "_parse_cloud_record_state",
                    value: function(e) {
                        if (!e) return this.logger.error("_parse_cloud_record_state error: empty mainNode passed in"), null;
                        var t = {};
                        t.meetingId = C(e, "meeting_id"), t.state = A(e, "state");
                        var n = e.getElementsByTagName("stop_reason");
                        return n && n[0] ? t.stop_reason = {
                            code: parseInt(n[0].getAttribute("code"), 10),
                            msg: I(C(e, "stop_reason"))
                        } : this.logger.warn('attention: "stop_reason" tag not found, current state: '.concat(t.state)), t
                    }
                }, {
                    key: "reportMediaStreamStatusPush",
                    value: function(e) {
                        try {
                            for (var t = e.getElementsByTagName("report_media_stream_status")[0], n = t.getElementsByTagName("meeting_id")[0].childNodes[0].nodeValue, i = t.getElementsByTagName("list")[0].childNodes, r = {
                                    user_list: [],
                                    meeting_id: n
                                }, o = 0, s = i.length; o < s; o++) {
                                var a = i[o],
                                    u = this._parse_user_media_stream_status(a);
                                r.user_list.push(u)
                            }
                            this.getEventHandler("report_media_stream_status_push")(!0, r)
                        } catch (e) {
                            this.logger.report(3, "reportMediaStreamStatusPush", "failed to parse xmpp response 'report_media_stream_status': ".concat(e.message))
                        }
                    }
                }, {
                    key: "meetingInviteeNotifyPush",
                    value: function(e) {
                        var t = e.getElementsByTagName("meeting_invitee_notify")[0],
                            n = this._parse_meeting_invitee_updated(t);
                        this.getEventHandler("meeting_invitee_notify")(!0, n)
                    }
                }, {
                    key: "_parse_meeting_invitee_updated",
                    value: function(e) {
                        var t = {
                            action_type: A(e, "action_type"),
                            meeting_id: C(e, "meeting_id"),
                            meeting_code: C(e, "meeting_code"),
                            meeting_state: A(e, "meeting_state"),
                            begin_time: A(e, "begin_time"),
                            end_time: A(e, "end_time"),
                            last_modify_time: A(e, "last_modify_time"),
                            actual_begin_time: A(e, "actual_begin_time"),
                            actual_end_time: A(e, "actual_end_time"),
                            subject: I(C(e, "subject")),
                            describe: I(C(e, "describe")),
                            role_type: A(e, "role_type"),
                            auth_type: A(e, "auth_type"),
                            custom_buffer: I(C(e, "custom_buffer")),
                            creator_uid: C(e, "creator_uid"),
                            meeting_url: I(C(e, "meeting_url")),
                            create_type: A(e, "create_type"),
                            meeting_type: A(e, "meeting_type"),
                            creator: {
                                appId: O(e, "creator", "app_id"),
                                appUid: O(e, "creator", "app_uid"),
                                instanceId: O(e, "creator", "instance_id"),
                                userType: x(e, "creator", "user_type")
                            },
                            creator_nickname: I(C(e, "creator_nickname")),
                            meeting_type_flags: C(e, "role_typmeeting_type_flagse"),
                            si_enable: A(e, "si_enable")
                        };
                        if (e.hasOwnProperty("live_stream")) {
                            var n = e.getElementsByTagName("live_stream");
                            n && 1 === n.length ? t.live_stream = {
                                enable: A(n, "enable"),
                                view_url: A(n, "view_url"),
                                password: I(C(n, "password"))
                            } : this.logger.report(3, "_parse_meeting_invitee_updated", "node 'live_stream' doesn't exist, or appears more than once")
                        }
                        if (e.hasOwnProperty("recurring_rule")) {
                            var i = e.getElementsByTagName("recurring_rule");
                            i && 1 === i.length ? t.recurring_rule = {
                                first_start_time: A(i, "first_start_time"),
                                first_end_time: A(i, "first_end_time"),
                                recurring_type: A(i, "recurring_type"),
                                recurring_days: A(i, "recurring_days"),
                                until_type: A(i, "until_type"),
                                until_date: A(i, "until_date")
                            } : this.logger.report(3, "_parse_meeting_invitee_updated", "node 'recurring_rule' doesn't exist, or appears more than 1")
                        }
                        if (e.hasOwnProperty("appointed_host_list")) {
                            var r = e.getElementsByTagName("appointed_host_list");
                            if (r && 1 === r.length) {
                                for (var o = [], s = 0; s < r.childNodes.length; s++) {
                                    var a = r.childNodes[s];
                                    o.push({
                                        app_id: a.getAttribute("app_id"),
                                        app_uid: a.getAttribute("app_uid")
                                    })
                                }
                                t.appointed_host_list = o
                            } else this.logger.report(3, "_parse_meeting_invitee_updated", "node 'appointed_host_list' doesn't exist, or appears 2+")
                        }
                        if (e.hasOwnProperty("si_member_list")) {
                            var u = e.getElementsByTagName("si_member_list");
                            if (u && 1 === u.length) {
                                for (var c = [], l = 0; l < u.childNodes.length; l++) {
                                    var d = u.childNodes[l],
                                        h = d.getElementsByTagName("id"),
                                        _ = {
                                            id: {
                                                app_uid: h.getAttribute("app_uid"),
                                                app_id: h.getAttribute("app_id"),
                                                instance_id: h.getAttribute("instance_id"),
                                                user_type: Number(h.getAttribute("user_type"))
                                            },
                                            av_user_id: C(d, "av_user_id"),
                                            nickname: I(C(d, "nickname")),
                                            order_number: A(d, "order_number")
                                        };
                                    d.getElementsByTagName("phone") && (_.phone = {
                                        area: O(d, "phone", "area"),
                                        phone: C(d, "phone")
                                    }), d.getElementsByTagName("current_language") && (_.current_language = {
                                        id: O(d, "current_language", "id"),
                                        lang: C(d, "current_language")
                                    });
                                    var p = d.getElementsByTagName("language_list");
                                    if (p) {
                                        for (var g = [], m = 0; m < p.childNodes.length; m++) {
                                            var f = p.childNodes[m];
                                            g.push({
                                                id: f.getAttribute("id"),
                                                lang: f.nodeValue
                                            })
                                        }
                                        _.language_list = g
                                    }
                                    c.push(_)
                                }
                                t.si_member_list = c
                            } else this.logger.report(3, "_parse_meeting_invitee_updated", "node 'si_member_list' doesn't exist, or appears 2+")
                        }
                        return t
                    }
                }, {
                    key: "_parse_user_media_stream_status",
                    value: function(e) {
                        var t = e.getElementsByTagName("id")[0],
                            n = e.getElementsByTagName("audio")[0],
                            i = e.getElementsByTagName("network")[0],
                            r = {};
                        (r.id = this._parse_user_id(t), n) && (n.getElementsByTagName("mic_noise")[0] && (r.noise_type = x(n, "noise_type"), r.noise_value = A(n, "mic_noise")));
                        return i && (r.network_level = A(i, "network_level")), r
                    }
                }, {
                    key: "_parse_user_id",
                    value: function(e) {
                        if (!e) return this.logger.report(3, "_parse_user_id", "idNode must not be null"), {};
                        try {
                            var t = {
                                uid: e.getAttribute("app_uid"),
                                app_id: e.getAttribute("app_id"),
                                instance_id: e.getAttribute("instance_id"),
                                user_type: e.getAttribute("user_type"),
                                userType: Number(e.getAttribute("user_type")),
                                phone_number: e.getAttribute("phone_number"),
                                unique_id: e.getAttribute("unique_id")
                            };
                            return "2" == t.user_type && (t.device_type = e.getAttribute("device_type") || "0"), t
                        } catch (t) {
                            return this.logger.report(3, "_parse_user_id", "parsing id from idNode failed.\n        error message: ".concat(null == t ? void 0 : t.message, "\n        idNode: ").concat(D(e), "\n      ")), {}
                        }
                    }
                }, {
                    key: "queryParticipantsSummary",
                    value: function(e) {
                        var t = this,
                            n = R({
                                type: "get",
                                id: this.getUniqueId("sendIQ")
                            }).c("get_webinar_participants_summary", {
                                xmlns: "tencent:wemeet:webinar"
                            }).c("meeting_id").t(e).up();
                        this.sendIQ(n, (function(e) {
                            var n = t.getEventHandler("get_webinar_participants_summary"),
                                i = e.getElementsByTagName("get_webinar_participants_summary")[0],
                                r = C(i, "meeting_id"),
                                o = C(i, "cumulative_join_meeting_count") || 0,
                                s = C(i, "refresh_interval") || 1e4,
                                a = i.getElementsByTagName("attendee")[0];
                            n(!0, {
                                meetingId: r,
                                cumulative_join_meeting_count: o,
                                total_count: C(a, "total_count"),
                                refresh_interval: s
                            })
                        }), (function(e) {
                            t.genErrorCallback(e, "get_webinar_participants_summary")()
                        }))
                    }
                }, {
                    key: "applyPermissionWebinar",
                    value: function(e) {
                        var t = this,
                            n = "apply_permission",
                            i = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c(n, {
                                xmlns: "tencent:wemeet:permission_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("permission_switch").c("permission_type").t(e.permission_type).up().c("permission_state").t(e.permission_state).up().up();
                        this.logger.report(1, "C2S-".concat(n), i.toString()), this.sendIQ(i, (function(i) {
                            t.logger.report(1, "S2C-".concat(n), D(i)), t.getEventHandler(n)(!0, {
                                permission_type: e.permission_type,
                                permission_state: e.permission_state
                            })
                        }), (function(e) {
                            t.logger.report(3, "S2C-".concat(n), D(e)), t.genErrorCallback(e, n)()
                        }))
                    }
                }, {
                    key: "applyPermission",
                    value: function(e) {
                        var t = this,
                            n = "handle_apply_permission",
                            i = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c(n, {
                                xmlns: "tencent:wemeet:permission_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("permission_list").c("permission_switch").c("permission_type").t(e.permission_type).up().c("permission_state").t(e.permission_state).up().c("user_personal_key", {
                                tiny_id: e.user.tinyId,
                                app_id: e.user.appId,
                                instance: e.user.instanceId,
                                user_type: e.user.userType
                            }).up().up();
                        this.logger.report(1, "C2S-".concat(n), i.toString()), this.sendIQ(i, (function(e) {
                            t.logger.report(1, "S2C-".concat(n), D(e)), t.getEventHandler(n)(!0, {})
                        }), (function(e) {
                            t.logger.report(3, "S2C-".concat(n), D(e)), t.genErrorCallback(e, n)()
                        }))
                    }
                }, {
                    key: "raiseHand",
                    value: function(e) {
                        var t = this,
                            n = "member_raise_hand",
                            i = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c(n, {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("raise_hand").t(e.raise_hand).up();
                        this.logger.report(1, "C2S-".concat(n), i.toString()), this.sendIQ(i, (function(i) {
                            t.logger.report(1, "S2C-".concat(n), D(i)), t.getEventHandler(n)(!0, {
                                raise_hand: e.raise_hand
                            })
                        }), (function(e) {
                            t.logger.report(3, "S2C-".concat(n), D(e)), t.genErrorCallback(e, n)()
                        }))
                    }
                }, {
                    key: "putHandsDown",
                    value: function(e) {
                        var t = this,
                            n = "put_handsdown_with_user",
                            i = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c(n, {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("id", {
                                app_uid: e.user.app_uid,
                                app_id: e.user.app_id,
                                instance_id: e.user.instance_id,
                                user_type: e.user.user_type,
                                device_type: e.user.device_type
                            }).up().c("reason", {
                                code: e.reason.code
                            }).t(e.reason.detail);
                        this.logger.report(1, "C2S-".concat(n), i.toString()), this.sendIQ(i, (function(e) {
                            t.logger.report(1, "S2C-".concat(n), D(e)), t.getEventHandler(n)(!0, {
                                msg: e
                            })
                        }), (function(e) {
                            t.logger.report(3, "S2C-".concat(n), D(e)), t.genErrorCallback(e, n)()
                        }))
                    }
                }, {
                    key: "notifyRaiseHandListChangedPush",
                    value: function(e) {
                        var t = "notify_raise_hand_list_changed";
                        try {
                            var n = D(e);
                            this.logger.report(1, "S2C-".concat(t, "(PUSH)"), n);
                            for (var i = e.getElementsByTagName(t)[0], r = C(i, "meeting_id"), o = C(i, "meeting_code"), s = A(i, "total_count"), a = M(i, "has_new_member_raise_hand"), u = i.getElementsByTagName("the_recent_user_list")[0], c = (null == u ? void 0 : u.childNodes) || [], l = {
                                    meetingId: r,
                                    meetingCode: o,
                                    totalCount: s,
                                    hasNewMemberRaiseHand: a,
                                    theRecentUserList: []
                                }, d = 0, h = c.length; d < h; d++) {
                                var _ = c[d],
                                    p = {
                                        nickname: I(C(_, "nickname")),
                                        raise_hand_timestamp: A(_, "raise_hand_timestamp")
                                    };
                                l.theRecentUserList.push(p)
                            }
                            this.getEventHandler(t)(!0, l)
                        } catch (e) {
                            this.logger.report(3, "notifyRaiseHandListChangedPush", "failed to parse xmpp response '".concat(t, "': ").concat(e.message))
                        }
                    }
                }, {
                    key: "notifyUserBePutHandsdownPush",
                    value: function(e) {
                        var t = "notify_user_be_put_handsdown";
                        try {
                            var n = D(e);
                            this.logger.report(1, "S2C-".concat(t, "(PUSH)"), n);
                            var i = e.getElementsByTagName(t)[0],
                                r = {
                                    meetingId: C(i, "meeting_id"),
                                    raiseHand: A(i, "is_raise_hand"),
                                    ctrlUser: {
                                        appUid: O(i, "ctrl_user", "app_uid"),
                                        appId: O(i, "ctrl_user", "app_id"),
                                        instanceId: O(i, "ctrl_user", "instance_id"),
                                        userType: x(i, "ctrl_user", "user_type")
                                    },
                                    reason: {
                                        detail: C(i, "reason", ""),
                                        code: x(i, "reason", "code")
                                    }
                                };
                            this.getEventHandler(t)(!0, r)
                        } catch (e) {
                            this.logger.report(3, "notifyUserBePutHandsdownPush", "failed to parse xmpp response '".concat(t, "': ").concat(e.message))
                        }
                    }
                }, {
                    key: "putHandsDownAgainstGivenRoleGroup",
                    value: function(e) {
                        var t = this,
                            n = "put_handsdown_with_role_group",
                            i = R({
                                type: "set",
                                id: this.getUniqueId("sendIQ")
                            }).c(n, {
                                xmlns: "tencent:wemeet:meeting_ctrl"
                            }).c("meeting_id").t(e.meeting_id).up().c("role_group_type").t(e.role_group_type);
                        this.logger.report(1, "C2S-".concat(n), i.toString()), this.sendIQ(i, (function(e) {
                            t.logger.report(1, "S2C-".concat(n), D(e)), t.getEventHandler(n)(!0, {
                                msg: e
                            })
                        }), (function(e) {
                            t.logger.report(3, "S2C-".concat(n), D(e)), t.genErrorCallback(e, n)()
                        }))
                    }
                }, {
                    key: "notifyRoleGroupBePutHandsdownPush",
                    value: function(e) {
                        var t = "notify_role_group_be_put_handsdown";
                        try {
                            var n = D(e);
                            this.logger.report(1, "S2C-".concat(t, "(PUSH)"), n);
                            var i = e.getElementsByTagName(t)[0],
                                r = {
                                    meetingId: C(i, "meeting_id"),
                                    roleGroupType: A(i, "role_group_type"),
                                    ctrlUser: {
                                        appUid: O(i, "ctrl_user", "app_uid"),
                                        appId: O(i, "ctrl_user", "app_id"),
                                        instanceId: O(i, "ctrl_user", "instance_id"),
                                        userType: x(i, "ctrl_user", "user_type")
                                    }
                                };
                            this.getEventHandler(t)(!0, r)
                        } catch (e) {
                            this.logger.report(3, "notifyRoleGroupBePutHandsdownPush", "failed to parse xmpp response '".concat(t, "': ").concat(e.message))
                        }
                    }
                }, {
                    key: "notifyPermissionResultPush",
                    value: function(e) {
                        var t = "notify_permission_result";
                        try {
                            var n = D(e);
                            this.logger.report(1, "S2C-".concat(t, "(PUSH)"), n);
                            var i = e.getElementsByTagName(t)[0],
                                r = i.getElementsByTagName("permission_list")[0].getElementsByTagName("permission_switch")[0],
                                o = C(i, "meeting_id"),
                                s = C(r, "apply_id"),
                                a = C(r, "permission_type"),
                                u = C(r, "permission_state"),
                                c = {
                                    meetingId: o,
                                    permissionType: a,
                                    userPersonal: {
                                        tinyId: O(r, "user_personal_key", "tiny_id"),
                                        appId: O(r, "user_personal_key", "app_id"),
                                        instanceId: O(r, "user_personal_key", "instance_id"),
                                        userType: x(r, "user_personal_key", "user_type")
                                    },
                                    permissionState: u,
                                    applyId: s
                                };
                            this.getEventHandler(t)(!0, c)
                        } catch (e) {
                            this.logger.report(3, "notifyPermissionResultPush", "failed to parse xmpp response '".concat(t, "': ").concat(e.message))
                        }
                    }
                }, {
                    key: "directedPush",
                    value: function(e) {
                        var t = "directed_push";
                        try {
                            var n = D(e);
                            this.logger.report(1, "S2C-".concat(t, "(PUSH)"), n);
                            var i = e.getElementsByTagName(t)[0],
                                r = {
                                    meeting_id: C(i, "meeting_id"),
                                    type: A(i, "type"),
                                    content: I(C(i, "content"))
                                },
                                o = A(i, "sub_type");
                            isNaN(o) || (r.sub_type = o);
                            var s = i.getElementsByTagName("id")[0];
                            s && (r.id = function(e) {
                                if (!e) return {};
                                var t = {
                                    instance_id: e.getAttribute("instance_id"),
                                    uid: e.getAttribute("app_uid"),
                                    app_id: e.getAttribute("app_id"),
                                    user_type: e.getAttribute("user_type"),
                                    phone_number: e.getAttribute("phone_number"),
                                    device_type: e.getAttribute("device_type"),
                                    unique_id: e.getAttribute("unique_id")
                                };
                                return "2" == t.user_type && (t.device_type = e.getAttribute("device_type") || "0"), t
                            }(s));
                            var a = C(i, "av_user_id");
                            a && (r.av_user_id = a), this.getEventHandler(t)(!0, r)
                        } catch (e) {
                            this.logger.report(3, "directedPush", "failed to parse xmpp response '".concat(t, "': ").concat(e.message))
                        }
                    }
                }, {
                    key: "sendSecurityVerifyResult",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            var r = e || {},
                                o = r.security_verify_type,
                                s = void 0 === o ? 0 : o,
                                a = r.data,
                                u = R({
                                    type: "set"
                                }).c("meeting_id").t(null == a ? void 0 : a.meeting_id).up().c("agree").t(null == a ? void 0 : a.agree).up().c("meeting_code").t(null == a ? void 0 : a.meeting_code).up().c("nickname").t(null == a ? void 0 : a.nickname).up(),
                                c = R({
                                    type: "set",
                                    id: t.getUniqueId("sendIQ")
                                }).c("security_verify_result_sync", {
                                    xmlns: "tencent:wemeet:meeting"
                                }).c("security_verify_type").t(s).up().c("data").t(N(u.toString())).up(),
                                l = "sendSecurityVerifyResult";
                            t.logger.report(1, "C2S-".concat(l), c.toString()), t.sendIQ(c, (function(e) {
                                t.logger.report(1, "S2C-".concat(l), D(e)), n()
                            }), (function(e) {
                                i(t.getStanzaError({
                                    errorStanza: e,
                                    cmd: l
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "queryUserSig",
                    value: function() {
                        var e = R({
                            type: "get"
                        }).c("query_usersig", {
                            xmlns: "tencent:wemeet:usersig"
                        }).c("sig_list").c("sig", {
                            sig_type: "W6"
                        }).up().c("sig", {
                            sig_type: "W10"
                        }).up().c("sig", {
                            sig_type: "W15"
                        }).up().up();
                        this.logger.report(1, "C2S-".concat("query_user_sig"), e.toString()), this.sendIQ(e, this.queryUserSigResponseSuccess, this.queryUserSigResponseError)
                    }
                }, {
                    key: "queryUserSigResponseSuccess",
                    value: function(e) {
                        this.logger.report(1, "S2C-query_user_sig", D(e));
                        for (var t = this.getEventHandler("query_user_sig"), n = {
                                sig_list: []
                            }, i = e.getElementsByTagName("sig_list")[0], r = 0; r < i.childNodes.length; r++) {
                            var o = i.childNodes[r],
                                s = {
                                    sig_type: o.getAttribute("sig_type"),
                                    sig_validity: o.getAttribute("sig_validity"),
                                    user_sig: o.getAttribute("user_sig")
                                };
                            n.sig_list.push(s)
                        }
                        t(!0, n)
                    }
                }, {
                    key: "queryUserSigResponseError",
                    value: function(e) {
                        this.logger.report(3, "S2C-query_user_sig", D(e)), this.genErrorCallback(e, "query_user_sig")()
                    }
                }, {
                    key: "meetingNotice",
                    value: function(e) {
                        var t = "meeting_notice",
                            n = this.getEventHandler(t);
                        try {
                            var i = D(e);
                            this.logger.report(1, "S2C-".concat(t, "(PUSH)"), i);
                            var r = e.getElementsByTagName(t)[0];
                            n(!0, {
                                meeting_id: C(r, "meeting_id"),
                                notice_version: C(r, "notice_version")
                            })
                        } catch (e) {
                            this.logger.report(3, "meetingNotice", "failed to parse xmpp response '".concat(t, "': ").concat(e.message)), n(!1, e)
                        }
                    }
                }, {
                    key: "queryMeetingNotice",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            var r = "queryMeetingNotice",
                                o = R({
                                    type: "get",
                                    id: t.getUniqueId("sendIQ")
                                }).c("query_meeting_notice", {
                                    xmlns: "tencent:wemeet:meeting_notice"
                                }).c("meeting_id").t(e).up().up();
                            t.logger.report(1, "C2S-".concat(r), o.toString()), t.sendIQ(o, (function(e) {
                                t.logger.report(1, "S2C-".concat(r), D(e));
                                var i = e.getElementsByTagName("query_meeting_notice")[0],
                                    o = {
                                        meeting_id: C(i, "meeting_id"),
                                        notice_type: C(i, "notice_type"),
                                        notice_version: C(i, "notice_version"),
                                        notice_content: C(i, "notice_content"),
                                        send_time: C(i, "send_time"),
                                        is_read: C(i, "is_read")
                                    },
                                    s = i.getElementsByTagName("sender")[0];
                                if (s) {
                                    var a = {
                                        app_uid: s.getAttribute("app_uid"),
                                        app_id: s.getAttribute("app_id"),
                                        instance_id: s.getAttribute("instance_id"),
                                        user_type: s.getAttribute("user_type"),
                                        device_type: s.getAttribute("device_type"),
                                        unique_id: s.getAttribute("unique_id"),
                                        phone_number: s.getAttribute("phone_number"),
                                        nickname: s.getAttribute("nickname")
                                    };
                                    o.sender = a
                                }
                                n(o)
                            }), (function(e) {
                                i(t.getStanzaError({
                                    errorStanza: e,
                                    cmd: r
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "readMeetingNotice",
                    value: function(e, t) {
                        var n = this;
                        return new Promise((function(i, r) {
                            var o = "queryMeetingNotice",
                                s = R({
                                    type: "set",
                                    id: n.getUniqueId("sendIQ")
                                }).c("read_meeting_notice", {
                                    xmlns: "tencent:wemeet:meeting_notice"
                                }).c("meeting_id").t(e).up().c("notice_version").t(t).up().up();
                            n.logger.report(1, "C2S-".concat(o), s.toString()), n.sendIQ(s, (function(e) {
                                n.logger.report(1, "S2C-".concat(o), D(e)), i(e)
                            }), (function(e) {
                                r(n.getStanzaError({
                                    errorStanza: e,
                                    cmd: o
                                }))
                            }))
                        }))
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                    }
                }]), t
            }(b);
        [v, y].map((function(e) {
            return function(e) {
                for (var t in e) H.prototype[t] = e[t]
            }(e)
        })), e.exports = H
    }, function(e, t) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        var i = n(17),
            r = i.$iq,
            o = i.get_val,
            s = i.get_attr;
        e.exports = {
            summaryRequest: function(e, t) {
                var n = this,
                    i = r({
                        type: "set"
                    }).c("request_summary", {
                        xmlns: "tencent:wemeet:summary"
                    }).c("meeting_id").t(e).up().c("operation").t(t).up();
                this.sendIQ(i, (function(e, t) {
                    n.getEventHandler("summary_request")(!0, t)
                }), (function(e, t) {
                    n.getEventHandler("summary_request")(!1, e, t)
                }), {
                    meetingId: e,
                    operation: t
                })
            },
            summaryAudioUploadPush: function(e) {
                var t = e.getElementsByTagName("meeting_summary_notify")[0],
                    n = {};
                n.meeting_id = o(t, "meeting_id"), n.upload = o(t, "upload"), n.token = o(t, "token"), this.getEventHandler("summary_audio_upload_push")(!0, n)
            },
            summaryMessagePush: function(e) {
                var t = e.getElementsByTagName("meeting_summary_notify")[0],
                    n = {};
                n.meeting_id = o(t, "meeting_id");
                var i = t.getElementsByTagName("message")[0],
                    r = {
                        uid: s(i, "user", "app_uid"),
                        app_id: s(i, "user", "app_id"),
                        instance_id: s(i, "user", "instance_id")
                    },
                    a = [],
                    u = i.getElementsByTagName("sentence");
                if (u && u.length)
                    for (var c = 0; c < u.length; ++c) {
                        var l = u[c];
                        if (l) {
                            var d = {
                                id: l.getAttribute("id"),
                                ver: l.getAttribute("ver"),
                                cid: l.getAttribute("cid"),
                                seTime: l.getAttribute("seTime"),
                                op: l.getAttribute("op"),
                                source: l.getAttribute("source"),
                                target: l.getAttribute("target"),
                                targetText: l.getAttribute("targetText"),
                                sourceStableSize: l.getAttribute("sourceStableSize"),
                                targetStableSize: l.getAttribute("targetStableSize"),
                                startTime: l.getAttribute("startTime"),
                                endTime: l.getAttribute("endTime"),
                                isEnd: l.getAttribute("isEnd"),
                                sourceText: ""
                            };
                            l.childNodes.length && (d.sourceText = l.childNodes[0].nodeValue), a.push(d)
                        }
                    }
                n.user = r, n.sentenceList = a, this.getEventHandler("summary_message_push")(!0, n)
            }
        }
    }, function(e, t, n) {
        var i, r, o = n(18).Strophe,
            s = n(12);
        "undefined" == typeof window ? ((new s).debug("window does not exist, setting xbtoa"), i = o.btoa) : ((new s).debug("window does exist, no need to set xbtoa"), i = window.btoa), "undefined" == typeof window ? ((new s).debug("window does not exist, setting xatob"), r = function(e) {
            var t, n, i, r, o, s, a, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                c = "",
                l = 0;
            if ("" === (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""))) return "";
            do {
                r = u.indexOf(e.charAt(l++)), t = r << 2 | (o = u.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (s = u.indexOf(e.charAt(l++))) >> 2, i = (3 & s) << 6 | (a = u.indexOf(e.charAt(l++))), c += String.fromCharCode(t), 64 !== s && (c += String.fromCharCode(n)), 64 !== a && (c += String.fromCharCode(i))
            } while (l < e.length);
            return c
        }) : ((new s).debug("window does exist, no need to set xatob"), r = window.atob);
        var a = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = e.getElementsByTagName(t);
                return void 0 !== i && i.length && i[0].childNodes.length ? i[0].childNodes[0].nodeValue : n
            },
            u = function(e) {
                function t(e) {
                    var t = e.length;
                    if (!t) return null;
                    for (var n = {}, i = 0; i < t; i++) n[e[i].nodeName] = e[i].nodeValue;
                    return n
                }
                var n = {};
                return n.tagName = e.tagName, n.attrs = t(e.attributes), n.child = function e(n) {
                    var i = n.length;
                    if (!i) return null;
                    if (1 === i && !n[0].tagName) return n[0].data || null;
                    for (var r = [], o = 0; o < i; o++) {
                        var s = {};
                        s.child = e(n[o].childNodes), s.attrs = t(n[o].attributes), s.tagName = n[o].tagName, r.push(s)
                    }
                    return r
                }(e.childNodes), n
            };
        e.exports = {
            Strophe: o,
            $build: function(e, t) {
                return new o.Builder(e, t)
            },
            $iq: function(e) {
                return new o.Builder("iq", e)
            },
            $msg: function(e) {
                return new o.Builder("message", e)
            },
            $pres: function(e) {
                return new o.Builder("presence", e)
            },
            xbtoa: i,
            xatob: r,
            encodeUtf8ThenB64: function(e) {
                return i(unescape(encodeURIComponent(e)))
            },
            decodeB64ThenUtf8: function(e) {
                var t;
                try {
                    var n = r(e);
                    return n = escape(n), t = decodeURIComponent(n)
                } catch (t) {
                    return (new s).report(3, "xmpp_kit", "decodeB64ThenUtf8 errmsg: ".concat(t.message, ", input: ").concat(e)), e
                }
            },
            get_val: a,
            get_int_val: function(e, t) {
                var n = a(e, t);
                if ("" !== n) return parseInt(n)
            },
            get_bool_val: function(e, t) {
                var n = a(e, t);
                if ("" !== n) return "1" === n
            },
            get_attr: function(e, t, n) {
                var i = e.getElementsByTagName(t);
                return i.length && i[0].getAttribute(n) || ""
            },
            get_int_attr: function(e, t, n) {
                var i = e.getElementsByTagName(t)[0];
                if (i) return parseInt(i.getAttribute(n) || "")
            },
            stringifyXmlObject: function(e) {
                var t = "";
                try {
                    t = (new XMLSerializer).serializeToString(e)
                } catch (e) {}
                return t
            },
            format2XMPP: function(e) {
                try {
                    var t = function(e) {
                            return null === e ? "" : Object.keys(e).map((function(t) {
                                return "".concat(t, "='").concat(e[t], "'")
                            })).join(" ")
                        },
                        n = function(e) {
                            var t = e.child,
                                n = "";
                            if (null === t) n = "</".concat(o.pop(), ">");
                            else if ("string" == typeof t) n = "".concat(t, "</").concat(o.pop(), ">");
                            else {
                                for (var i = t.length, s = 0; s < i; s++) n += r(t[s]);
                                n += "</".concat(o.pop(), ">")
                            }
                            return n
                        },
                        i = function(e) {
                            var t = e.tagName,
                                n = e.attrs,
                                i = function(e) {
                                    return null === e ? "" : Object.keys(e).map((function(t) {
                                        return "".concat(t, "='").concat(e[t], "'")
                                    })).join(" ")
                                }(n);
                            return o.push(t), "<".concat(t).concat(i ? " " + i : "", ">")
                        },
                        r = function(e) {
                            var t = e.tagName,
                                r = e.attrs,
                                o = e.child,
                                s = "";
                            return s += i({
                                tagName: t,
                                attrs: r
                            }), s += n({
                                child: o
                            })
                        },
                        o = [],
                        a = u(e);
                    return r(a)
                } catch (t) {
                    (new s).report(3, "format2XMPP", "exception caught: ".concat(t.message, ". input: ").concat(e))
                }
            },
            format2JSON: u,
            get_val_by_uid: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = e.getElementsByTagName(t);
                if (i.length) {
                    var r = Array.from(i).filter((function(e) {
                        return "id" !== e.parentNode.tagName
                    }));
                    if (void 0 !== r && r.length && r[0].childNodes && r[0].childNodes.length) return r[0].childNodes[0].nodeValue
                }
                return n
            }
        }
    }, function(e, t, n) {
        var i, r, o, s, a, u = n(9);
        a = this, s = function() {
            var n, i, r, o, s;
            (function(e) {
                function t(e, t) {
                    return b.call(e, t)
                }

                function o(e, t) {
                    var n, i, r, o, s, a, u, c, l, d, h, _ = t && t.split("/"),
                        p = y.map,
                        g = p && p["*"] || {};
                    if (e) {
                        for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && _ && (e = _.slice(0, _.length - 1).concat(e)), l = 0; l < e.length; l++)
                            if ("." === (h = e[l])) e.splice(l, 1), l -= 1;
                            else if (".." === h) {
                            if (0 === l || 1 === l && ".." === e[2] || ".." === e[l - 1]) continue;
                            l > 0 && (e.splice(l - 1, 2), l -= 2)
                        }
                        e = e.join("/")
                    }
                    if ((_ || g) && p) {
                        for (l = (n = e.split("/")).length; l > 0; l -= 1) {
                            if (i = n.slice(0, l).join("/"), _)
                                for (d = _.length; d > 0; d -= 1)
                                    if ((r = p[_.slice(0, d).join("/")]) && (r = r[i])) {
                                        o = r, a = l;
                                        break
                                    }
                            if (o) break;
                            !u && g && g[i] && (u = g[i], c = l)
                        }!o && u && (o = u, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                    }
                    return e
                }

                function s(t, n) {
                    return function() {
                        var i = E.call(arguments, 0);
                        return "string" != typeof i[0] && 1 === i.length && i.push(null), p.apply(e, i.concat([t, n]))
                    }
                }

                function a(e) {
                    return function(t) {
                        f[e] = t
                    }
                }

                function c(n) {
                    if (t(v, n)) {
                        var i = v[n];
                        delete v[n], S[n] = !0, _.apply(e, i)
                    }
                    if (!t(f, n) && !t(S, n)) throw new Error("No " + n);
                    return f[n]
                }

                function l(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                }

                function d(e) {
                    return e ? l(e) : []
                }

                function h(e) {
                    return function() {
                        return y && y.config && y.config[e] || {}
                    }
                }
                var _, p, g, m, f = {},
                    v = {},
                    y = {},
                    S = {},
                    b = Object.prototype.hasOwnProperty,
                    E = [].slice,
                    w = /\.js$/;
                g = function(e, t) {
                    var n, i = l(e),
                        r = i[0],
                        s = t[1];
                    return e = i[1], r && (n = c(r = o(r, s))), r ? e = n && n.normalize ? n.normalize(e, function(e) {
                        return function(t) {
                            return o(t, e)
                        }
                    }(s)) : o(e, s) : (r = (i = l(e = o(e, s)))[0], e = i[1], r && (n = c(r))), {
                        f: r ? r + "!" + e : e,
                        n: e,
                        pr: r,
                        p: n
                    }
                }, m = {
                    require: function(e) {
                        return s(e)
                    },
                    exports: function(e) {
                        var t = f[e];
                        return void 0 !== t ? t : f[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: f[e],
                            config: h(e)
                        }
                    }
                }, _ = function(n, i, r, o) {
                    var l, h, _, p, y, b, E, w = [],
                        R = u(r);
                    if (b = d(o = o || n), "undefined" === R || "function" === R) {
                        for (i = !i.length && r.length ? ["require", "exports", "module"] : i, y = 0; y < i.length; y += 1)
                            if (p = g(i[y], b), "require" === (h = p.f)) w[y] = m.require(n);
                            else if ("exports" === h) w[y] = m.exports(n), E = !0;
                        else if ("module" === h) l = w[y] = m.module(n);
                        else if (t(f, h) || t(v, h) || t(S, h)) w[y] = c(h);
                        else {
                            if (!p.p) throw new Error(n + " missing " + h);
                            p.p.load(p.n, s(o, !0), a(h), {}), w[y] = f[h]
                        }
                        _ = r ? r.apply(f[n], w) : void 0, n && (l && l.exports !== e && l.exports !== f[n] ? f[n] = l.exports : _ === e && E || (f[n] = _))
                    } else n && (f[n] = r)
                }, n = i = p = function(t, n, i, r, o) {
                    if ("string" == typeof t) return m[t] ? m[t](n) : c(g(t, d(n)).f);
                    if (!t.splice) {
                        if ((y = t).deps && p(y.deps, y.callback), !n) return;
                        n.splice ? (t = n, n = i, i = null) : t = e
                    }
                    return n = n || function() {}, "function" == typeof i && (i = r, r = o), r ? _(e, t, n, i) : setTimeout((function() {
                        _(e, t, n, i)
                    }), 4), p
                }, p.config = function(e) {
                    return p(e)
                }, n._defined = f, (r = function(e, n, i) {
                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                    n.splice || (i = n, n = []), t(f, e) || t(v, e) || (v[e] = [e, n, i])
                }).amd = {
                    jQuery: !0
                }
            })(), r("node_modules/almond/almond.js", (function() {})),
                function(e, t) {
                    if ("function" != typeof r || !r.amd) return t(e);
                    r("strophe-polyfill", [], (function() {
                        return t(e)
                    }))
                }(a, (function(e) {
                    Function.prototype.bind || (Function.prototype.bind = function(e) {
                        var t = this,
                            n = Array.prototype.slice,
                            i = Array.prototype.concat,
                            r = n.call(arguments, 1);
                        return function() {
                            return t.apply(e || this, i.call(r, n.call(arguments, 0)))
                        }
                    }), Array.isArray || (Array.isArray = function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                        var t = this.length,
                            n = Number(arguments[1]) || 0;
                        for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++)
                            if (n in this && this[n] === e) return n;
                        return -1
                    }), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
                        var n, i;
                        if (null === this) throw new TypeError(" this is null or not defined");
                        var r = Object(this),
                            o = r.length >>> 0;
                        if ("function" != typeof e) throw new TypeError(e + " is not a function");
                        for (arguments.length > 1 && (n = t), i = 0; i < o;) {
                            var s;
                            i in r && (s = r[i], e.call(n, s, i, r)), i++
                        }
                    });
                    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    e.btoa || (e.btoa = function(e) {
                        var n, i, r, o, s, a, u, c = "",
                            l = 0;
                        do {
                            o = (n = e.charCodeAt(l++)) >> 2, s = (3 & n) << 4 | (i = e.charCodeAt(l++)) >> 4, a = (15 & i) << 2 | (r = e.charCodeAt(l++)) >> 6, u = 63 & r, isNaN(i) ? (s = (3 & n) << 4, a = u = 64) : isNaN(r) && (u = 64), c = c + t.charAt(o) + t.charAt(s) + t.charAt(a) + t.charAt(u)
                        } while (l < e.length);
                        return c
                    }), e.atob || (e.atob = function(e) {
                        var n, i, r, o, s, a, u = "",
                            c = 0;
                        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                        do {
                            n = t.indexOf(e.charAt(c++)) << 2 | (o = t.indexOf(e.charAt(c++))) >> 4, i = (15 & o) << 4 | (s = t.indexOf(e.charAt(c++))) >> 2, r = (3 & s) << 6 | (a = t.indexOf(e.charAt(c++))), u += String.fromCharCode(n), 64 !== s && (u += String.fromCharCode(i)), 64 !== a && (u += String.fromCharCode(r))
                        } while (c < e.length);
                        return u
                    })
                })), o = a, s = function() {
                    function e(e, i) {
                        e[i >> 5] |= 128 << 24 - i % 32, e[15 + (i + 64 >> 9 << 4)] = i;
                        var s, a, u, c, l, d, h, _, p = new Array(80),
                            g = 1732584193,
                            m = -271733879,
                            f = -1732584194,
                            v = 271733878,
                            y = -1009589776;
                        for (s = 0; s < e.length; s += 16) {
                            for (c = g, l = m, d = f, h = v, _ = y, a = 0; a < 80; a++) p[a] = a < 16 ? e[s + a] : o(p[a - 3] ^ p[a - 8] ^ p[a - 14] ^ p[a - 16], 1), u = r(r(o(g, 5), t(a, m, f, v)), r(r(y, p[a]), n(a))), y = v, v = f, f = o(m, 30), m = g, g = u;
                            g = r(g, c), m = r(m, l), f = r(f, d), v = r(v, h), y = r(y, _)
                        }
                        return [g, m, f, v, y]
                    }

                    function t(e, t, n, i) {
                        return e < 20 ? t & n | ~t & i : e < 40 ? t ^ n ^ i : e < 60 ? t & n | t & i | n & i : t ^ n ^ i
                    }

                    function n(e) {
                        return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
                    }

                    function i(t, n) {
                        var i = s(t);
                        i.length > 16 && (i = e(i, 8 * t.length));
                        for (var r = new Array(16), o = new Array(16), a = 0; a < 16; a++) r[a] = 909522486 ^ i[a], o[a] = 1549556828 ^ i[a];
                        var u = e(r.concat(s(n)), 512 + 8 * n.length);
                        return e(o.concat(u), 672)
                    }

                    function r(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                    }

                    function o(e, t) {
                        return e << t | e >>> 32 - t
                    }

                    function s(e) {
                        for (var t = [], n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << 24 - n % 32;
                        return t
                    }

                    function a(e) {
                        for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> 24 - n % 32 & 255);
                        return t
                    }

                    function u(e) {
                        for (var t, n, i = "", r = 0; r < 4 * e.length; r += 3)
                            for (t = (e[r >> 2] >> 8 * (3 - r % 4) & 255) << 16 | (e[r + 1 >> 2] >> 8 * (3 - (r + 1) % 4) & 255) << 8 | e[r + 2 >> 2] >> 8 * (3 - (r + 2) % 4) & 255, n = 0; n < 4; n++) 8 * r + 6 * n > 32 * e.length ? i += "=" : i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t >> 6 * (3 - n) & 63);
                        return i
                    }
                    return {
                        b64_hmac_sha1: function(e, t) {
                            return u(i(e, t))
                        },
                        b64_sha1: function(t) {
                            return u(e(s(t), 8 * t.length))
                        },
                        binb2str: a,
                        core_hmac_sha1: i,
                        str_hmac_sha1: function(e, t) {
                            return a(i(e, t))
                        },
                        str_sha1: function(t) {
                            return a(e(s(t), 8 * t.length))
                        }
                    }
                }, "function" == typeof r && r.amd ? r("strophe-sha1", [], (function() {
                    return s()
                })) : "object" === u(t) ? e.exports = s() : o.SHA1 = s(),
                function(n, i) {
                    "function" == typeof r && r.amd ? r("strophe-md5", [], (function() {
                        return i()
                    })) : "object" === u(t) ? e.exports = i() : n.MD5 = i()
                }(a, (function() {
                    var e = function(e, t) {
                            var n = (65535 & e) + (65535 & t);
                            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                        },
                        t = function(e) {
                            for (var t = [], n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                            return t
                        },
                        n = function(t, n, i, r, o, s) {
                            return e(function(e, t) {
                                return e << t | e >>> 32 - t
                            }(e(e(n, t), e(r, s)), o), i)
                        },
                        i = function(e, t, i, r, o, s, a) {
                            return n(t & i | ~t & r, e, t, o, s, a)
                        },
                        r = function(e, t, i, r, o, s, a) {
                            return n(t & r | i & ~r, e, t, o, s, a)
                        },
                        o = function(e, t, i, r, o, s, a) {
                            return n(t ^ i ^ r, e, t, o, s, a)
                        },
                        s = function(e, t, i, r, o, s, a) {
                            return n(i ^ (t | ~r), e, t, o, s, a)
                        },
                        a = function(t, n) {
                            t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n;
                            for (var a, u, c, l, d = 1732584193, h = -271733879, _ = -1732584194, p = 271733878, g = 0; g < t.length; g += 16) a = d, u = h, c = _, l = p, d = i(d, h, _, p, t[g + 0], 7, -680876936), p = i(p, d, h, _, t[g + 1], 12, -389564586), _ = i(_, p, d, h, t[g + 2], 17, 606105819), h = i(h, _, p, d, t[g + 3], 22, -1044525330), d = i(d, h, _, p, t[g + 4], 7, -176418897), p = i(p, d, h, _, t[g + 5], 12, 1200080426), _ = i(_, p, d, h, t[g + 6], 17, -1473231341), h = i(h, _, p, d, t[g + 7], 22, -45705983), d = i(d, h, _, p, t[g + 8], 7, 1770035416), p = i(p, d, h, _, t[g + 9], 12, -1958414417), _ = i(_, p, d, h, t[g + 10], 17, -42063), h = i(h, _, p, d, t[g + 11], 22, -1990404162), d = i(d, h, _, p, t[g + 12], 7, 1804603682), p = i(p, d, h, _, t[g + 13], 12, -40341101), _ = i(_, p, d, h, t[g + 14], 17, -1502002290), h = i(h, _, p, d, t[g + 15], 22, 1236535329), d = r(d, h, _, p, t[g + 1], 5, -165796510), p = r(p, d, h, _, t[g + 6], 9, -1069501632), _ = r(_, p, d, h, t[g + 11], 14, 643717713), h = r(h, _, p, d, t[g + 0], 20, -373897302), d = r(d, h, _, p, t[g + 5], 5, -701558691), p = r(p, d, h, _, t[g + 10], 9, 38016083), _ = r(_, p, d, h, t[g + 15], 14, -660478335), h = r(h, _, p, d, t[g + 4], 20, -405537848), d = r(d, h, _, p, t[g + 9], 5, 568446438), p = r(p, d, h, _, t[g + 14], 9, -1019803690), _ = r(_, p, d, h, t[g + 3], 14, -187363961), h = r(h, _, p, d, t[g + 8], 20, 1163531501), d = r(d, h, _, p, t[g + 13], 5, -1444681467), p = r(p, d, h, _, t[g + 2], 9, -51403784), _ = r(_, p, d, h, t[g + 7], 14, 1735328473), h = r(h, _, p, d, t[g + 12], 20, -1926607734), d = o(d, h, _, p, t[g + 5], 4, -378558), p = o(p, d, h, _, t[g + 8], 11, -2022574463), _ = o(_, p, d, h, t[g + 11], 16, 1839030562), h = o(h, _, p, d, t[g + 14], 23, -35309556), d = o(d, h, _, p, t[g + 1], 4, -1530992060), p = o(p, d, h, _, t[g + 4], 11, 1272893353), _ = o(_, p, d, h, t[g + 7], 16, -155497632), h = o(h, _, p, d, t[g + 10], 23, -1094730640), d = o(d, h, _, p, t[g + 13], 4, 681279174), p = o(p, d, h, _, t[g + 0], 11, -358537222), _ = o(_, p, d, h, t[g + 3], 16, -722521979), h = o(h, _, p, d, t[g + 6], 23, 76029189), d = o(d, h, _, p, t[g + 9], 4, -640364487), p = o(p, d, h, _, t[g + 12], 11, -421815835), _ = o(_, p, d, h, t[g + 15], 16, 530742520), h = o(h, _, p, d, t[g + 2], 23, -995338651), d = s(d, h, _, p, t[g + 0], 6, -198630844), p = s(p, d, h, _, t[g + 7], 10, 1126891415), _ = s(_, p, d, h, t[g + 14], 15, -1416354905), h = s(h, _, p, d, t[g + 5], 21, -57434055), d = s(d, h, _, p, t[g + 12], 6, 1700485571), p = s(p, d, h, _, t[g + 3], 10, -1894986606), _ = s(_, p, d, h, t[g + 10], 15, -1051523), h = s(h, _, p, d, t[g + 1], 21, -2054922799), d = s(d, h, _, p, t[g + 8], 6, 1873313359), p = s(p, d, h, _, t[g + 15], 10, -30611744), _ = s(_, p, d, h, t[g + 6], 15, -1560198380), h = s(h, _, p, d, t[g + 13], 21, 1309151649), d = s(d, h, _, p, t[g + 4], 6, -145523070), p = s(p, d, h, _, t[g + 11], 10, -1120210379), _ = s(_, p, d, h, t[g + 2], 15, 718787259), h = s(h, _, p, d, t[g + 9], 21, -343485551), d = e(d, a), h = e(h, u), _ = e(_, c), p = e(p, l);
                            return [d, h, _, p]
                        };
                    return {
                        hexdigest: function(e) {
                            return function(e) {
                                for (var t = "0123456789abcdef", n = "", i = 0; i < 4 * e.length; i++) n += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
                                return n
                            }(a(t(e), 8 * e.length))
                        },
                        hash: function(e) {
                            return function(e) {
                                for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                                return t
                            }(a(t(e), 8 * e.length))
                        }
                    }
                })),
                function(n, i) {
                    "function" == typeof r && r.amd ? r("strophe-utils", [], (function() {
                        return i()
                    })) : "object" === u(t) ? e.exports = i() : n.stropheUtils = i()
                }(a, (function() {
                    return {
                        utf16to8: function(e) {
                            var t, n, i = "",
                                r = e.length;
                            for (t = 0; t < r; t++)(n = e.charCodeAt(t)) >= 0 && n <= 127 ? i += e.charAt(t) : n > 2047 ? (i += String.fromCharCode(224 | n >> 12 & 15), i += String.fromCharCode(128 | n >> 6 & 63), i += String.fromCharCode(128 | n >> 0 & 63)) : (i += String.fromCharCode(192 | n >> 6 & 31), i += String.fromCharCode(128 | n >> 0 & 63));
                            return i
                        },
                        addCookies: function(e) {
                            var t, n, i, r, o, s, a;
                            for (t in e || {}) o = "", s = "", a = "", n = e[t], i = "object" === u(n), r = escape(unescape(i ? n.value : n)), i && (o = n.expires ? ";expires=" + n.expires : "", s = n.domain ? ";domain=" + n.domain : "", a = n.path ? ";path=" + n.path : ""), document.cookie = t + "=" + r + o + s + a
                        }
                    }
                }));
            var c = function(e) {
                    function t(i) {
                        if (n[i]) return n[i].exports;
                        var r = n[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.d = function(e, n, i) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: i
                        })
                    }, t.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, t.t = function(e, n) {
                        if (1 & n && (e = t(e)), 8 & n) return e;
                        if (4 & n && "object" === u(e) && e && e.__esModule) return e;
                        var i = Object.create(null);
                        if (t.r(i), Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & n && "string" != typeof e)
                            for (var r in e) t.d(i, r, function(t) {
                                return e[t]
                            }.bind(null, r));
                        return i
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(n, "a", n), n
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 0)
                }([function(e, t, n) {
                    function i(e) {
                        this.options = e || {
                            locator: {}
                        }
                    }

                    function r(e, t, n) {
                        function i(t) {
                            var i = e[t];
                            !i && s && (i = 2 == e.length ? function(n) {
                                e(t, n)
                            } : e), r[t] = i && function(e) {
                                i("[xmldom " + t + "]\t" + e + a(n))
                            } || function() {}
                        }
                        if (!e) {
                            if (t instanceof o) return t;
                            e = t
                        }
                        var r = {},
                            s = e instanceof Function;
                        return n = n || {}, i("warning"), i("error"), i("fatalError"), r
                    }

                    function o() {
                        this.cdata = !1
                    }

                    function s(e, t) {
                        t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber
                    }

                    function a(e) {
                        if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
                    }

                    function u(e, t, n) {
                        return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e
                    }

                    function c(e, t) {
                        e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
                    }
                    i.prototype.parseFromString = function(e, t) {
                        var n = this.options,
                            i = new d,
                            s = n.domBuilder || new o,
                            a = n.errorHandler,
                            u = n.locator,
                            c = n.xmlns || {},
                            h = /\/x?html?$/.test(t),
                            _ = h ? l.entityMap : {
                                lt: "<",
                                gt: ">",
                                amp: "&",
                                quot: '"',
                                apos: "'"
                            };
                        return u && s.setDocumentLocator(u), i.errorHandler = r(a, s, u), i.domBuilder = n.domBuilder || s, h && (c[""] = "http://www.w3.org/1999/xhtml"), c.xml = c.xml || "http://www.w3.org/XML/1998/namespace", e ? i.parse(e, c, _) : i.errorHandler.error("invalid doc source"), s.doc
                    }, o.prototype = {
                        startDocument: function() {
                            this.doc = (new h).createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
                        },
                        startElement: function(e, t, n, i) {
                            var r = this.doc,
                                o = r.createElementNS(e, n || t),
                                a = i.length;
                            c(this, o), this.currentElement = o, this.locator && s(this.locator, o);
                            for (var u = 0; u < a; u++) {
                                e = i.getURI(u);
                                var l = i.getValue(u),
                                    d = (n = i.getQName(u), r.createAttributeNS(e, n));
                                this.locator && s(i.getLocator(u), d), d.value = d.nodeValue = l, o.setAttributeNode(d)
                            }
                        },
                        endElement: function(e, t, n) {
                            var i = this.currentElement;
                            i.tagName, this.currentElement = i.parentNode
                        },
                        startPrefixMapping: function(e, t) {},
                        endPrefixMapping: function(e) {},
                        processingInstruction: function(e, t) {
                            var n = this.doc.createProcessingInstruction(e, t);
                            this.locator && s(this.locator, n), c(this, n)
                        },
                        ignorableWhitespace: function(e, t, n) {},
                        characters: function(e, t, n) {
                            if (e = u.apply(this, arguments)) {
                                if (this.cdata) var i = this.doc.createCDATASection(e);
                                else i = this.doc.createTextNode(e);
                                this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(e) && this.doc.appendChild(i), this.locator && s(this.locator, i)
                            }
                        },
                        skippedEntity: function(e) {},
                        endDocument: function() {
                            this.doc.normalize()
                        },
                        setDocumentLocator: function(e) {
                            (this.locator = e) && (e.lineNumber = 0)
                        },
                        comment: function(e, t, n) {
                            e = u.apply(this, arguments);
                            var i = this.doc.createComment(e);
                            this.locator && s(this.locator, i), c(this, i)
                        },
                        startCDATA: function() {
                            this.cdata = !0
                        },
                        endCDATA: function() {
                            this.cdata = !1
                        },
                        startDTD: function(e, t, n) {
                            var i = this.doc.implementation;
                            if (i && i.createDocumentType) {
                                var r = i.createDocumentType(e, t, n);
                                this.locator && s(this.locator, r), c(this, r)
                            }
                        },
                        warning: function(e) {
                            console.warn("[xmldom warning]\t" + e, a(this.locator))
                        },
                        error: function(e) {
                            console.error("[xmldom error]\t" + e, a(this.locator))
                        },
                        fatalError: function(e) {
                            throw console.error("[xmldom fatalError]\t" + e, a(this.locator)), e
                        }
                    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, (function(e) {
                        o.prototype[e] = function() {
                            return null
                        }
                    }));
                    var l = n(1),
                        d = n(2).XMLReader,
                        h = t.DOMImplementation = n(3).DOMImplementation;
                    t.XMLSerializer = n(3).XMLSerializer, t.DOMParser = i
                }, function(e, t) {
                    t.entityMap = {
                        lt: "<",
                        gt: ">",
                        amp: "&",
                        quot: '"',
                        apos: "'",
                        Agrave: "À",
                        Aacute: "Á",
                        Acirc: "Â",
                        Atilde: "Ã",
                        Auml: "Ä",
                        Aring: "Å",
                        AElig: "Æ",
                        Ccedil: "Ç",
                        Egrave: "È",
                        Eacute: "É",
                        Ecirc: "Ê",
                        Euml: "Ë",
                        Igrave: "Ì",
                        Iacute: "Í",
                        Icirc: "Î",
                        Iuml: "Ï",
                        ETH: "Ð",
                        Ntilde: "Ñ",
                        Ograve: "Ò",
                        Oacute: "Ó",
                        Ocirc: "Ô",
                        Otilde: "Õ",
                        Ouml: "Ö",
                        Oslash: "Ø",
                        Ugrave: "Ù",
                        Uacute: "Ú",
                        Ucirc: "Û",
                        Uuml: "Ü",
                        Yacute: "Ý",
                        THORN: "Þ",
                        szlig: "ß",
                        agrave: "à",
                        aacute: "á",
                        acirc: "â",
                        atilde: "ã",
                        auml: "ä",
                        aring: "å",
                        aelig: "æ",
                        ccedil: "ç",
                        egrave: "è",
                        eacute: "é",
                        ecirc: "ê",
                        euml: "ë",
                        igrave: "ì",
                        iacute: "í",
                        icirc: "î",
                        iuml: "ï",
                        eth: "ð",
                        ntilde: "ñ",
                        ograve: "ò",
                        oacute: "ó",
                        ocirc: "ô",
                        otilde: "õ",
                        ouml: "ö",
                        oslash: "ø",
                        ugrave: "ù",
                        uacute: "ú",
                        ucirc: "û",
                        uuml: "ü",
                        yacute: "ý",
                        thorn: "þ",
                        yuml: "ÿ",
                        nbsp: " ",
                        iexcl: "¡",
                        cent: "¢",
                        pound: "£",
                        curren: "¤",
                        yen: "¥",
                        brvbar: "¦",
                        sect: "§",
                        uml: "¨",
                        copy: "©",
                        ordf: "ª",
                        laquo: "«",
                        not: "¬",
                        shy: "­­",
                        reg: "®",
                        macr: "¯",
                        deg: "°",
                        plusmn: "±",
                        sup2: "²",
                        sup3: "³",
                        acute: "´",
                        micro: "µ",
                        para: "¶",
                        middot: "·",
                        cedil: "¸",
                        sup1: "¹",
                        ordm: "º",
                        raquo: "»",
                        frac14: "¼",
                        frac12: "½",
                        frac34: "¾",
                        iquest: "¿",
                        times: "×",
                        divide: "÷",
                        forall: "∀",
                        part: "∂",
                        exist: "∃",
                        empty: "∅",
                        nabla: "∇",
                        isin: "∈",
                        notin: "∉",
                        ni: "∋",
                        prod: "∏",
                        sum: "∑",
                        minus: "−",
                        lowast: "∗",
                        radic: "√",
                        prop: "∝",
                        infin: "∞",
                        ang: "∠",
                        and: "∧",
                        or: "∨",
                        cap: "∩",
                        cup: "∪",
                        int: "∫",
                        there4: "∴",
                        sim: "∼",
                        cong: "≅",
                        asymp: "≈",
                        ne: "≠",
                        equiv: "≡",
                        le: "≤",
                        ge: "≥",
                        sub: "⊂",
                        sup: "⊃",
                        nsub: "⊄",
                        sube: "⊆",
                        supe: "⊇",
                        oplus: "⊕",
                        otimes: "⊗",
                        perp: "⊥",
                        sdot: "⋅",
                        Alpha: "Α",
                        Beta: "Β",
                        Gamma: "Γ",
                        Delta: "Δ",
                        Epsilon: "Ε",
                        Zeta: "Ζ",
                        Eta: "Η",
                        Theta: "Θ",
                        Iota: "Ι",
                        Kappa: "Κ",
                        Lambda: "Λ",
                        Mu: "Μ",
                        Nu: "Ν",
                        Xi: "Ξ",
                        Omicron: "Ο",
                        Pi: "Π",
                        Rho: "Ρ",
                        Sigma: "Σ",
                        Tau: "Τ",
                        Upsilon: "Υ",
                        Phi: "Φ",
                        Chi: "Χ",
                        Psi: "Ψ",
                        Omega: "Ω",
                        alpha: "α",
                        beta: "β",
                        gamma: "γ",
                        delta: "δ",
                        epsilon: "ε",
                        zeta: "ζ",
                        eta: "η",
                        theta: "θ",
                        iota: "ι",
                        kappa: "κ",
                        lambda: "λ",
                        mu: "μ",
                        nu: "ν",
                        xi: "ξ",
                        omicron: "ο",
                        pi: "π",
                        rho: "ρ",
                        sigmaf: "ς",
                        sigma: "σ",
                        tau: "τ",
                        upsilon: "υ",
                        phi: "φ",
                        chi: "χ",
                        psi: "ψ",
                        omega: "ω",
                        thetasym: "ϑ",
                        upsih: "ϒ",
                        piv: "ϖ",
                        OElig: "Œ",
                        oelig: "œ",
                        Scaron: "Š",
                        scaron: "š",
                        Yuml: "Ÿ",
                        fnof: "ƒ",
                        circ: "ˆ",
                        tilde: "˜",
                        ensp: " ",
                        emsp: " ",
                        thinsp: " ",
                        zwnj: "‌",
                        zwj: "‍",
                        lrm: "‎",
                        rlm: "‏",
                        ndash: "–",
                        mdash: "—",
                        lsquo: "‘",
                        rsquo: "’",
                        sbquo: "‚",
                        ldquo: "“",
                        rdquo: "”",
                        bdquo: "„",
                        dagger: "†",
                        Dagger: "‡",
                        bull: "•",
                        hellip: "…",
                        permil: "‰",
                        prime: "′",
                        Prime: "″",
                        lsaquo: "‹",
                        rsaquo: "›",
                        oline: "‾",
                        euro: "€",
                        trade: "™",
                        larr: "←",
                        uarr: "↑",
                        rarr: "→",
                        darr: "↓",
                        harr: "↔",
                        crarr: "↵",
                        lceil: "⌈",
                        rceil: "⌉",
                        lfloor: "⌊",
                        rfloor: "⌋",
                        loz: "◊",
                        spades: "♠",
                        clubs: "♣",
                        hearts: "♥",
                        diams: "♦"
                    }
                }, function(e, t) {
                    function n() {}

                    function i(e, t, n, i, c) {
                        function _(e) {
                            var t = e.slice(1, -1);
                            return t in n ? n[t] : "#" === t.charAt(0) ? function(e) {
                                if (e > 65535) {
                                    var t = 55296 + ((e -= 65536) >> 10),
                                        n = 56320 + (1023 & e);
                                    return String.fromCharCode(t, n)
                                }
                                return String.fromCharCode(e)
                            }(parseInt(t.substr(1).replace("x", "0x"))) : (c.error("entity not found:" + e), e)
                        }

                        function p(t) {
                            if (t > E) {
                                var n = e.substring(E, t).replace(/&#?\w+;/g, _);
                                y && g(E), i.characters(n, 0, t - E), E = t
                            }
                        }

                        function g(t, n) {
                            for (; t >= f && (n = v.exec(e));) m = n.index, f = m + n[0].length, y.lineNumber++;
                            y.columnNumber = t - m + 1
                        }
                        for (var m = 0, f = 0, v = /.*(?:\r\n?|\n)|.*$/g, y = i.locator, S = [{
                                currentNSMap: t
                            }], b = {}, E = 0;;) {
                            try {
                                var w = e.indexOf("<", E);
                                if (w < 0) {
                                    if (!e.substr(E).match(/^\s*$/)) {
                                        var R = i.doc,
                                            k = R.createTextNode(e.substr(E));
                                        R.appendChild(k), i.currentElement = k
                                    }
                                    return
                                }
                                switch (w > E && p(w), e.charAt(w + 1)) {
                                    case "/":
                                        var T = e.indexOf(">", w + 3),
                                            N = e.substring(w + 2, T),
                                            I = S.pop();
                                        T < 0 ? (N = e.substring(w + 2).replace(/[\s<].*/, ""), c.error("end tag name: " + N + " is not complete:" + I.tagName), T = w + 1 + N.length) : N.match(/\s</) && (N = N.replace(/[\s<].*/, ""), c.error("end tag name: " + N + " maybe not complete"), T = w + 1 + N.length);
                                        var C = I.localNSMap,
                                            A = I.tagName == N;
                                        if (A || I.tagName && I.tagName.toLowerCase() == N.toLowerCase()) {
                                            if (i.endElement(I.uri, I.localName, N), C)
                                                for (var M in C) i.endPrefixMapping(M);
                                            A || c.fatalError("end tag name: " + N + " is not match the current start tagName:" + I.tagName)
                                        } else S.push(I);
                                        T++;
                                        break;
                                    case "?":
                                        y && g(w), T = d(e, w, i);
                                        break;
                                    case "!":
                                        y && g(w), T = l(e, w, i, c);
                                        break;
                                    default:
                                        y && g(w);
                                        var O = new h,
                                            x = S[S.length - 1].currentNSMap,
                                            P = (T = o(e, w, O, x, _, c), O.length);
                                        if (!O.closed && u(e, T, O.tagName, b) && (O.closed = !0, n.nbsp || c.warning("unclosed xml attribute")), y && P) {
                                            for (var D = r(y, {}), H = 0; H < P; H++) {
                                                var B = O[H];
                                                g(B.offset), B.locator = r(y, {})
                                            }
                                            i.locator = D, s(O, i, x) && S.push(O), i.locator = y
                                        } else s(O, i, x) && S.push(O);
                                        "http://www.w3.org/1999/xhtml" !== O.uri || O.closed ? T++ : T = a(e, T, O.tagName, _, i)
                                }
                            } catch (e) {
                                c.error("element parse error: " + e), T = -1
                            }
                            T > E ? E = T : p(Math.max(w, E) + 1)
                        }
                    }

                    function r(e, t) {
                        return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t
                    }

                    function o(e, t, n, i, r, o) {
                        for (var s, a = ++t, u = m;;) {
                            var c = e.charAt(a);
                            switch (c) {
                                case "=":
                                    if (u === f) s = e.slice(t, a), u = y;
                                    else {
                                        if (u !== v) throw new Error("attribute equal must after attrName");
                                        u = y
                                    }
                                    break;
                                case "'":
                                case '"':
                                    if (u === y || u === f) {
                                        if (u === f && (o.warning('attribute value must after "="'), s = e.slice(t, a)), t = a + 1, !((a = e.indexOf(c, t)) > 0)) throw new Error("attribute value no end '" + c + "' match");
                                        l = e.slice(t, a).replace(/&#?\w+;/g, r), n.add(s, l, t - 1), u = b
                                    } else {
                                        if (u != S) throw new Error('attribute value must after "="');
                                        l = e.slice(t, a).replace(/&#?\w+;/g, r), n.add(s, l, t), o.warning('attribute "' + s + '" missed start quot(' + c + ")!!"), t = a + 1, u = b
                                    }
                                    break;
                                case "/":
                                    switch (u) {
                                        case m:
                                            n.setTagName(e.slice(t, a));
                                        case b:
                                        case E:
                                        case w:
                                            u = w, n.closed = !0;
                                        case S:
                                        case f:
                                        case v:
                                            break;
                                        default:
                                            throw new Error("attribute invalid close char('/')")
                                    }
                                    break;
                                case "":
                                    return o.error("unexpected end of input"), u == m && n.setTagName(e.slice(t, a)), a;
                                case ">":
                                    switch (u) {
                                        case m:
                                            n.setTagName(e.slice(t, a));
                                        case b:
                                        case E:
                                        case w:
                                            break;
                                        case S:
                                        case f:
                                            "/" === (l = e.slice(t, a)).slice(-1) && (n.closed = !0, l = l.slice(0, -1));
                                        case v:
                                            u === v && (l = s), u == S ? (o.warning('attribute "' + l + '" missed quot(")!!'), n.add(s, l.replace(/&#?\w+;/g, r), t)) : ("http://www.w3.org/1999/xhtml" === i[""] && l.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), n.add(l, l, t));
                                            break;
                                        case y:
                                            throw new Error("attribute value missed!!")
                                    }
                                    return a;
                                case "":
                                    c = " ";
                                default:
                                    if (c <= " ") switch (u) {
                                        case m:
                                            n.setTagName(e.slice(t, a)), u = E;
                                            break;
                                        case f:
                                            s = e.slice(t, a), u = v;
                                            break;
                                        case S:
                                            var l = e.slice(t, a).replace(/&#?\w+;/g, r);
                                            o.warning('attribute "' + l + '" missed quot(")!!'), n.add(s, l, t);
                                        case b:
                                            u = E
                                    } else switch (u) {
                                        case v:
                                            n.tagName, "http://www.w3.org/1999/xhtml" === i[""] && s.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'), n.add(s, s, t), t = a, u = f;
                                            break;
                                        case b:
                                            o.warning('attribute space is required"' + s + '"!!');
                                        case E:
                                            u = f, t = a;
                                            break;
                                        case y:
                                            u = S, t = a;
                                            break;
                                        case w:
                                            throw new Error("elements closed character '/' and '>' must be connected to")
                                    }
                            }
                            a++
                        }
                    }

                    function s(e, t, n) {
                        for (var i = e.tagName, r = null, o = e.length; o--;) {
                            var s = e[o],
                                a = s.qName,
                                u = s.value,
                                l = a.indexOf(":");
                            if (l > 0) var d = s.prefix = a.slice(0, l),
                                h = a.slice(l + 1),
                                _ = "xmlns" === d && h;
                            else h = a, d = null, _ = "xmlns" === a && "";
                            s.localName = h, !1 !== _ && (null == r && (r = {}, c(n, n = {})), n[_] = r[_] = u, s.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(_, u))
                        }
                        for (o = e.length; o--;)(d = (s = e[o]).prefix) && ("xml" === d && (s.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== d && (s.uri = n[d || ""]));
                        (l = i.indexOf(":")) > 0 ? (d = e.prefix = i.slice(0, l), h = e.localName = i.slice(l + 1)) : (d = null, h = e.localName = i);
                        var p = e.uri = n[d || ""];
                        if (t.startElement(p, h, i, e), !e.closed) return e.currentNSMap = n, e.localNSMap = r, !0;
                        if (t.endElement(p, h, i), r)
                            for (d in r) t.endPrefixMapping(d)
                    }

                    function a(e, t, n, i, r) {
                        if (/^(?:script|textarea)$/i.test(n)) {
                            var o = e.indexOf("</" + n + ">", t),
                                s = e.substring(t + 1, o);
                            if (/[&<]/.test(s)) return /^script$/i.test(n) ? (r.characters(s, 0, s.length), o) : (s = s.replace(/&#?\w+;/g, i), r.characters(s, 0, s.length), o)
                        }
                        return t + 1
                    }

                    function u(e, t, n, i) {
                        var r = i[n];
                        return null == r && ((r = e.lastIndexOf("</" + n + ">")) < t && (r = e.lastIndexOf("</" + n)), i[n] = r), r < t
                    }

                    function c(e, t) {
                        for (var n in e) t[n] = e[n]
                    }

                    function l(e, t, n, i) {
                        switch (e.charAt(t + 2)) {
                            case "-":
                                if ("-" === e.charAt(t + 3)) {
                                    var r = e.indexOf("--\x3e", t + 4);
                                    return r > t ? (n.comment(e, t + 4, r - t - 4), r + 3) : (i.error("Unclosed comment"), -1)
                                }
                                return -1;
                            default:
                                if ("CDATA[" == e.substr(t + 3, 6)) return r = e.indexOf("]]>", t + 9), n.startCDATA(), n.characters(e, t + 9, r - t - 9), n.endCDATA(), r + 3;
                                var o = function(e, t) {
                                        var n, i = [],
                                            r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                                        for (r.lastIndex = t, r.exec(e); n = r.exec(e);)
                                            if (i.push(n), n[1]) return i
                                    }(e, t),
                                    s = o.length;
                                if (s > 1 && /!doctype/i.test(o[0][0])) {
                                    var a = o[1][0],
                                        u = s > 3 && /^public$/i.test(o[2][0]) && o[3][0],
                                        c = s > 4 && o[4][0],
                                        l = o[s - 1];
                                    return n.startDTD(a, u && u.replace(/^(['"])(.*?)\1$/, "$2"), c && c.replace(/^(['"])(.*?)\1$/, "$2")), n.endDTD(), l.index + l[0].length
                                }
                        }
                        return -1
                    }

                    function d(e, t, n) {
                        var i = e.indexOf("?>", t);
                        if (i) {
                            var r = e.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                            return r ? (r[0].length, n.processingInstruction(r[1], r[2]), i + 2) : -1
                        }
                        return -1
                    }

                    function h(e) {}
                    var _ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                        p = new RegExp("[\\-\\.0-9" + _.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
                        g = new RegExp("^" + _.source + p.source + "*(?::" + _.source + p.source + "*)?$"),
                        m = 0,
                        f = 1,
                        v = 2,
                        y = 3,
                        S = 4,
                        b = 5,
                        E = 6,
                        w = 7;
                    n.prototype = {
                        parse: function(e, t, n) {
                            var r = this.domBuilder;
                            r.startDocument(), c(t, t = {}), i(e, t, n, r, this.errorHandler), r.endDocument()
                        }
                    }, h.prototype = {
                        setTagName: function(e) {
                            if (!g.test(e)) throw new Error("invalid tagName:" + e);
                            this.tagName = e
                        },
                        add: function(e, t, n) {
                            if (!g.test(e)) throw new Error("invalid attribute:" + e);
                            this[this.length++] = {
                                qName: e,
                                value: t,
                                offset: n
                            }
                        },
                        length: 0,
                        getLocalName: function(e) {
                            return this[e].localName
                        },
                        getLocator: function(e) {
                            return this[e].locator
                        },
                        getQName: function(e) {
                            return this[e].qName
                        },
                        getURI: function(e) {
                            return this[e].uri
                        },
                        getValue: function(e) {
                            return this[e].value
                        }
                    }, t.XMLReader = n
                }, function(e, t) {
                    function n(e, t) {
                        for (var n in e) t[n] = e[n]
                    }

                    function i(e, t) {
                        var i = e.prototype;
                        if (!(i instanceof t)) {
                            var r = function() {};
                            r.prototype = t.prototype, n(i, r = new r), e.prototype = i = r
                        }
                        i.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), i.constructor = e)
                    }

                    function r(e, t) {
                        if (t instanceof Error) var n = t;
                        else n = this, Error.call(this, ee[e]), this.message = ee[e], Error.captureStackTrace && Error.captureStackTrace(this, r);
                        return n.code = e, t && (this.message = this.message + ": " + t), n
                    }

                    function o() {}

                    function s(e, t) {
                        this._node = e, this._refresh = t, a(this)
                    }

                    function a(e) {
                        var t = e._node._inc || e._node.ownerDocument._inc;
                        if (e._inc != t) {
                            var i = e._refresh(e._node);
                            U(e, "length", i.length), n(i, e), e._inc = t
                        }
                    }

                    function c() {}

                    function l(e, t) {
                        for (var n = e.length; n--;)
                            if (e[n] === t) return n
                    }

                    function d(e, t, n, i) {
                        if (i ? t[l(t, i)] = n : t[t.length++] = n, e) {
                            n.ownerElement = e;
                            var r = e.ownerDocument;
                            r && (i && v(r, e, i), function(e, t, n) {
                                e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value)
                            }(r, e, n))
                        }
                    }

                    function h(e, t, n) {
                        var i = l(t, n);
                        if (!(i >= 0)) throw r(ne, new Error(e.tagName + "@" + n));
                        for (var o = t.length - 1; i < o;) t[i] = t[++i];
                        if (t.length = o, e) {
                            var s = e.ownerDocument;
                            s && (v(s, e, n), n.ownerElement = null)
                        }
                    }

                    function _(e) {
                        if (this._features = {}, e)
                            for (var t in e) this._features = e[t]
                    }

                    function p() {}

                    function g(e) {
                        return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";"
                    }

                    function m(e, t) {
                        if (t(e)) return !0;
                        if (e = e.firstChild)
                            do {
                                if (m(e, t)) return !0
                            } while (e = e.nextSibling)
                    }

                    function f() {}

                    function v(e, t, n, i) {
                        e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""]
                    }

                    function y(e, t, n) {
                        if (e && e._inc) {
                            e._inc++;
                            var i = t.childNodes;
                            if (n) i[i.length++] = n;
                            else {
                                for (var r = t.firstChild, o = 0; r;) i[o++] = r, r = r.nextSibling;
                                i.length = o
                            }
                        }
                    }

                    function S(e, t) {
                        var n = t.previousSibling,
                            i = t.nextSibling;
                        return n ? n.nextSibling = i : e.firstChild = i, i ? i.previousSibling = n : e.lastChild = n, y(e.ownerDocument, e), t
                    }

                    function b(e, t, n) {
                        var i = t.parentNode;
                        if (i && i.removeChild(t), t.nodeType === z) {
                            var r = t.firstChild;
                            if (null == r) return t;
                            var o = t.lastChild
                        } else r = o = t;
                        var s = n ? n.previousSibling : e.lastChild;
                        r.previousSibling = s, o.nextSibling = n, s ? s.nextSibling = r : e.firstChild = r, null == n ? e.lastChild = o : n.previousSibling = o;
                        do {
                            r.parentNode = e
                        } while (r !== o && (r = r.nextSibling));
                        return y(e.ownerDocument || e, e), t.nodeType == z && (t.firstChild = t.lastChild = null), t
                    }

                    function E() {
                        this._nsMap = {}
                    }

                    function w() {}

                    function R() {}

                    function k() {}

                    function T() {}

                    function N() {}

                    function I() {}

                    function C() {}

                    function A() {}

                    function M() {}

                    function O() {}

                    function x() {}

                    function P() {}

                    function D(e, t) {
                        var n = [],
                            i = 9 == this.nodeType && this.documentElement || this,
                            r = i.prefix,
                            o = i.namespaceURI;
                        if (o && null == r && null == (r = i.lookupPrefix(o))) var s = [{
                            namespace: o,
                            prefix: null
                        }];
                        return B(this, n, e, t, s), n.join("")
                    }

                    function H(e, t, n) {
                        var i = e.prefix || "",
                            r = e.namespaceURI;
                        if (!i && !r) return !1;
                        if ("xml" === i && "http://www.w3.org/XML/1998/namespace" === r || "http://www.w3.org/2000/xmlns/" == r) return !1;
                        for (var o = n.length; o--;) {
                            var s = n[o];
                            if (s.prefix == i) return s.namespace != r
                        }
                        return !0
                    }

                    function B(e, t, n, i, r) {
                        if (i) {
                            if (!(e = i(e))) return;
                            if ("string" == typeof e) return void t.push(e)
                        }
                        switch (e.nodeType) {
                            case j:
                                r || (r = []), r.length;
                                var o = e.attributes,
                                    s = o.length,
                                    a = e.firstChild,
                                    u = e.tagName;
                                n = L === e.namespaceURI || n, t.push("<", u);
                                for (var c = 0; c < s; c++) {
                                    var l = o.item(c);
                                    "xmlns" == l.prefix ? r.push({
                                        prefix: l.localName,
                                        namespace: l.value
                                    }) : "xmlns" == l.nodeName && r.push({
                                        prefix: "",
                                        namespace: l.value
                                    })
                                }
                                for (c = 0; c < s; c++) {
                                    if (H(l = o.item(c), 0, r)) {
                                        var d = l.prefix || "",
                                            h = l.namespaceURI,
                                            _ = d ? " xmlns:" + d : " xmlns";
                                        t.push(_, '="', h, '"'), r.push({
                                            prefix: d,
                                            namespace: h
                                        })
                                    }
                                    B(l, t, n, i, r)
                                }
                                if (H(e, 0, r) && (d = e.prefix || "", h = e.namespaceURI, _ = d ? " xmlns:" + d : " xmlns", t.push(_, '="', h, '"'), r.push({
                                        prefix: d,
                                        namespace: h
                                    })), a || n && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
                                    if (t.push(">"), n && /^script$/i.test(u))
                                        for (; a;) a.data ? t.push(a.data) : B(a, t, n, i, r), a = a.nextSibling;
                                    else
                                        for (; a;) B(a, t, n, i, r), a = a.nextSibling;
                                    t.push("</", u, ">")
                                } else t.push("/>");
                                return;
                            case X:
                            case z:
                                for (a = e.firstChild; a;) B(a, t, n, i, r), a = a.nextSibling;
                                return;
                            case V:
                                return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, g), '"');
                            case F:
                                return t.push(e.data.replace(/[<&]/g, g));
                            case G:
                                return t.push("<![CDATA[", e.data, "]]>");
                            case K:
                                return t.push("\x3c!--", e.data, "--\x3e");
                            case Y:
                                var p = e.publicId,
                                    m = e.systemId;
                                if (t.push("<!DOCTYPE ", e.name), p) t.push(' PUBLIC "', p), m && "." != m && t.push('" "', m), t.push('">');
                                else if (m && "." != m) t.push(' SYSTEM "', m, '">');
                                else {
                                    var f = e.internalSubset;
                                    f && t.push(" [", f, "]"), t.push(">")
                                }
                                return;
                            case J:
                                return t.push("<?", e.target, " ", e.data, "?>");
                            case W:
                                return t.push("&", e.nodeName, ";");
                            default:
                                t.push("??", e.nodeName)
                        }
                    }

                    function U(e, t, n) {
                        e[t] = n
                    }
                    var L = "http://www.w3.org/1999/xhtml",
                        q = {},
                        j = q.ELEMENT_NODE = 1,
                        V = q.ATTRIBUTE_NODE = 2,
                        F = q.TEXT_NODE = 3,
                        G = q.CDATA_SECTION_NODE = 4,
                        W = q.ENTITY_REFERENCE_NODE = 5,
                        Q = q.ENTITY_NODE = 6,
                        J = q.PROCESSING_INSTRUCTION_NODE = 7,
                        K = q.COMMENT_NODE = 8,
                        X = q.DOCUMENT_NODE = 9,
                        Y = q.DOCUMENT_TYPE_NODE = 10,
                        z = q.DOCUMENT_FRAGMENT_NODE = 11,
                        $ = q.NOTATION_NODE = 12,
                        Z = {},
                        ee = {},
                        te = (Z.INDEX_SIZE_ERR = (ee[1] = "Index size error", 1), Z.DOMSTRING_SIZE_ERR = (ee[2] = "DOMString size error", 2), Z.HIERARCHY_REQUEST_ERR = (ee[3] = "Hierarchy request error", 3)),
                        ne = (Z.WRONG_DOCUMENT_ERR = (ee[4] = "Wrong document", 4), Z.INVALID_CHARACTER_ERR = (ee[5] = "Invalid character", 5), Z.NO_DATA_ALLOWED_ERR = (ee[6] = "No data allowed", 6), Z.NO_MODIFICATION_ALLOWED_ERR = (ee[7] = "No modification allowed", 7), Z.NOT_FOUND_ERR = (ee[8] = "Not found", 8)),
                        ie = (Z.NOT_SUPPORTED_ERR = (ee[9] = "Not supported", 9), Z.INUSE_ATTRIBUTE_ERR = (ee[10] = "Attribute in use", 10));
                    Z.INVALID_STATE_ERR = (ee[11] = "Invalid state", 11), Z.SYNTAX_ERR = (ee[12] = "Syntax error", 12), Z.INVALID_MODIFICATION_ERR = (ee[13] = "Invalid modification", 13), Z.NAMESPACE_ERR = (ee[14] = "Invalid namespace", 14), Z.INVALID_ACCESS_ERR = (ee[15] = "Invalid access", 15), r.prototype = Error.prototype, n(Z, r), o.prototype = {
                        length: 0,
                        item: function(e) {
                            return this[e] || null
                        },
                        toString: function(e, t) {
                            for (var n = [], i = 0; i < this.length; i++) B(this[i], n, e, t);
                            return n.join("")
                        }
                    }, s.prototype.item = function(e) {
                        return a(this), this[e]
                    }, i(s, o), c.prototype = {
                        length: 0,
                        item: o.prototype.item,
                        getNamedItem: function(e) {
                            for (var t = this.length; t--;) {
                                var n = this[t];
                                if (n.nodeName == e) return n
                            }
                        },
                        setNamedItem: function(e) {
                            var t = e.ownerElement;
                            if (t && t != this._ownerElement) throw new r(ie);
                            var n = this.getNamedItem(e.nodeName);
                            return d(this._ownerElement, this, e, n), n
                        },
                        setNamedItemNS: function(e) {
                            var t, n = e.ownerElement;
                            if (n && n != this._ownerElement) throw new r(ie);
                            return t = this.getNamedItemNS(e.namespaceURI, e.localName), d(this._ownerElement, this, e, t), t
                        },
                        removeNamedItem: function(e) {
                            var t = this.getNamedItem(e);
                            return h(this._ownerElement, this, t), t
                        },
                        removeNamedItemNS: function(e, t) {
                            var n = this.getNamedItemNS(e, t);
                            return h(this._ownerElement, this, n), n
                        },
                        getNamedItemNS: function(e, t) {
                            for (var n = this.length; n--;) {
                                var i = this[n];
                                if (i.localName == t && i.namespaceURI == e) return i
                            }
                            return null
                        }
                    }, _.prototype = {
                        hasFeature: function(e, t) {
                            var n = this._features[e.toLowerCase()];
                            return !(!n || t && !(t in n))
                        },
                        createDocument: function(e, t, n) {
                            var i = new f;
                            if (i.implementation = this, i.childNodes = new o, i.doctype = n, n && i.appendChild(n), t) {
                                var r = i.createElementNS(e, t);
                                i.appendChild(r)
                            }
                            return i
                        },
                        createDocumentType: function(e, t, n) {
                            var i = new I;
                            return i.name = e, i.nodeName = e, i.publicId = t, i.systemId = n, i
                        }
                    }, p.prototype = {
                        firstChild: null,
                        lastChild: null,
                        previousSibling: null,
                        nextSibling: null,
                        attributes: null,
                        parentNode: null,
                        childNodes: null,
                        ownerDocument: null,
                        nodeValue: null,
                        namespaceURI: null,
                        prefix: null,
                        localName: null,
                        insertBefore: function(e, t) {
                            return b(this, e, t)
                        },
                        replaceChild: function(e, t) {
                            this.insertBefore(e, t), t && this.removeChild(t)
                        },
                        removeChild: function(e) {
                            return S(this, e)
                        },
                        appendChild: function(e) {
                            return this.insertBefore(e, null)
                        },
                        hasChildNodes: function() {
                            return null != this.firstChild
                        },
                        cloneNode: function(e) {
                            return function e(t, n, i) {
                                var r = new n.constructor;
                                for (var s in n) {
                                    var a = n[s];
                                    "object" != u(a) && a != r[s] && (r[s] = a)
                                }
                                switch (n.childNodes && (r.childNodes = new o), r.ownerDocument = t, r.nodeType) {
                                    case j:
                                        var l = n.attributes,
                                            d = r.attributes = new c,
                                            h = l.length;
                                        d._ownerElement = r;
                                        for (var _ = 0; _ < h; _++) r.setAttributeNode(e(t, l.item(_), !0));
                                        break;
                                    case V:
                                        i = !0
                                }
                                if (i)
                                    for (var p = n.firstChild; p;) r.appendChild(e(t, p, i)), p = p.nextSibling;
                                return r
                            }(this.ownerDocument || this, this, e)
                        },
                        normalize: function() {
                            for (var e = this.firstChild; e;) {
                                var t = e.nextSibling;
                                t && t.nodeType == F && e.nodeType == F ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
                            }
                        },
                        isSupported: function(e, t) {
                            return this.ownerDocument.implementation.hasFeature(e, t)
                        },
                        hasAttributes: function() {
                            return this.attributes.length > 0
                        },
                        lookupPrefix: function(e) {
                            for (var t = this; t;) {
                                var n = t._nsMap;
                                if (n)
                                    for (var i in n)
                                        if (n[i] == e) return i;
                                t = t.nodeType == V ? t.ownerDocument : t.parentNode
                            }
                            return null
                        },
                        lookupNamespaceURI: function(e) {
                            for (var t = this; t;) {
                                var n = t._nsMap;
                                if (n && e in n) return n[e];
                                t = t.nodeType == V ? t.ownerDocument : t.parentNode
                            }
                            return null
                        },
                        isDefaultNamespace: function(e) {
                            return null == this.lookupPrefix(e)
                        }
                    }, n(q, p), n(q, p.prototype), f.prototype = {
                        nodeName: "#document",
                        nodeType: X,
                        doctype: null,
                        documentElement: null,
                        _inc: 1,
                        insertBefore: function(e, t) {
                            if (e.nodeType == z) {
                                for (var n = e.firstChild; n;) {
                                    var i = n.nextSibling;
                                    this.insertBefore(n, t), n = i
                                }
                                return e
                            }
                            return null == this.documentElement && e.nodeType == j && (this.documentElement = e), b(this, e, t), e.ownerDocument = this, e
                        },
                        removeChild: function(e) {
                            return this.documentElement == e && (this.documentElement = null), S(this, e)
                        },
                        importNode: function(e, t) {
                            return function e(t, n, i) {
                                var r;
                                switch (n.nodeType) {
                                    case j:
                                        (r = n.cloneNode(!1)).ownerDocument = t;
                                    case z:
                                        break;
                                    case V:
                                        i = !0
                                }
                                if (r || (r = n.cloneNode(!1)), r.ownerDocument = t, r.parentNode = null, i)
                                    for (var o = n.firstChild; o;) r.appendChild(e(t, o, i)), o = o.nextSibling;
                                return r
                            }(this, e, t)
                        },
                        getElementById: function(e) {
                            var t = null;
                            return m(this.documentElement, (function(n) {
                                if (n.nodeType == j && n.getAttribute("id") == e) return t = n, !0
                            })), t
                        },
                        createElement: function(e) {
                            var t = new E;
                            return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new o, (t.attributes = new c)._ownerElement = t, t
                        },
                        createDocumentFragment: function() {
                            var e = new O;
                            return e.ownerDocument = this, e.childNodes = new o, e
                        },
                        createTextNode: function(e) {
                            var t = new k;
                            return t.ownerDocument = this, t.appendData(e), t
                        },
                        createComment: function(e) {
                            var t = new T;
                            return t.ownerDocument = this, t.appendData(e), t
                        },
                        createCDATASection: function(e) {
                            var t = new N;
                            return t.ownerDocument = this, t.appendData(e), t
                        },
                        createProcessingInstruction: function(e, t) {
                            var n = new x;
                            return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n
                        },
                        createAttribute: function(e) {
                            var t = new w;
                            return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t
                        },
                        createEntityReference: function(e) {
                            var t = new M;
                            return t.ownerDocument = this, t.nodeName = e, t
                        },
                        createElementNS: function(e, t) {
                            var n = new E,
                                i = t.split(":"),
                                r = n.attributes = new c;
                            return n.childNodes = new o, n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, r._ownerElement = n, n
                        },
                        createAttributeNS: function(e, t) {
                            var n = new w,
                                i = t.split(":");
                            return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, n
                        }
                    }, i(f, p), E.prototype = {
                        nodeType: j,
                        hasAttribute: function(e) {
                            return null != this.getAttributeNode(e)
                        },
                        getAttribute: function(e) {
                            var t = this.getAttributeNode(e);
                            return t && t.value || ""
                        },
                        getAttributeNode: function(e) {
                            return this.attributes.getNamedItem(e)
                        },
                        setAttribute: function(e, t) {
                            var n = this.ownerDocument.createAttribute(e);
                            n.value = n.nodeValue = "" + t, this.setAttributeNode(n)
                        },
                        removeAttribute: function(e) {
                            var t = this.getAttributeNode(e);
                            t && this.removeAttributeNode(t)
                        },
                        appendChild: function(e) {
                            return e.nodeType === z ? this.insertBefore(e, null) : function(e, t) {
                                var n = t.parentNode;
                                if (n) {
                                    var i = e.lastChild;
                                    n.removeChild(t), i = e.lastChild
                                }
                                return i = e.lastChild, t.parentNode = e, t.previousSibling = i, t.nextSibling = null, i ? i.nextSibling = t : e.firstChild = t, e.lastChild = t, y(e.ownerDocument, e, t), t
                            }(this, e)
                        },
                        setAttributeNode: function(e) {
                            return this.attributes.setNamedItem(e)
                        },
                        setAttributeNodeNS: function(e) {
                            return this.attributes.setNamedItemNS(e)
                        },
                        removeAttributeNode: function(e) {
                            return this.attributes.removeNamedItem(e.nodeName)
                        },
                        removeAttributeNS: function(e, t) {
                            var n = this.getAttributeNodeNS(e, t);
                            n && this.removeAttributeNode(n)
                        },
                        hasAttributeNS: function(e, t) {
                            return null != this.getAttributeNodeNS(e, t)
                        },
                        getAttributeNS: function(e, t) {
                            var n = this.getAttributeNodeNS(e, t);
                            return n && n.value || ""
                        },
                        setAttributeNS: function(e, t, n) {
                            var i = this.ownerDocument.createAttributeNS(e, t);
                            i.value = i.nodeValue = "" + n, this.setAttributeNode(i)
                        },
                        getAttributeNodeNS: function(e, t) {
                            return this.attributes.getNamedItemNS(e, t)
                        },
                        getElementsByTagName: function(e) {
                            return new s(this, (function(t) {
                                var n = [];
                                return m(t, (function(i) {
                                    i === t || i.nodeType != j || "*" !== e && i.tagName != e || n.push(i)
                                })), n
                            }))
                        },
                        getElementsByTagNameNS: function(e, t) {
                            return new s(this, (function(n) {
                                var i = [];
                                return m(n, (function(r) {
                                    r === n || r.nodeType !== j || "*" !== e && r.namespaceURI !== e || "*" !== t && r.localName != t || i.push(r)
                                })), i
                            }))
                        }
                    }, f.prototype.getElementsByTagName = E.prototype.getElementsByTagName, f.prototype.getElementsByTagNameNS = E.prototype.getElementsByTagNameNS, i(E, p), w.prototype.nodeType = V, i(w, p), R.prototype = {
                        data: "",
                        substringData: function(e, t) {
                            return this.data.substring(e, e + t)
                        },
                        appendData: function(e) {
                            e = this.data + e, this.nodeValue = this.data = e, this.length = e.length
                        },
                        insertData: function(e, t) {
                            this.replaceData(e, 0, t)
                        },
                        appendChild: function(e) {
                            throw new Error(ee[te])
                        },
                        deleteData: function(e, t) {
                            this.replaceData(e, t, "")
                        },
                        replaceData: function(e, t, n) {
                            n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, this.length = n.length
                        }
                    }, i(R, p), k.prototype = {
                        nodeName: "#text",
                        nodeType: F,
                        splitText: function(e) {
                            var t = this.data,
                                n = t.substring(e);
                            t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
                            var i = this.ownerDocument.createTextNode(n);
                            return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i
                        }
                    }, i(k, R), T.prototype = {
                        nodeName: "#comment",
                        nodeType: K
                    }, i(T, R), N.prototype = {
                        nodeName: "#cdata-section",
                        nodeType: G
                    }, i(N, R), I.prototype.nodeType = Y, i(I, p), C.prototype.nodeType = $, i(C, p), A.prototype.nodeType = Q, i(A, p), M.prototype.nodeType = W, i(M, p), O.prototype.nodeName = "#document-fragment", O.prototype.nodeType = z, i(O, p), x.prototype.nodeType = J, i(x, p), P.prototype.serializeToString = function(e, t, n) {
                        return D.call(e, t, n)
                    }, p.prototype.toString = D;
                    try {
                        if (Object.defineProperty) {
                            Object.defineProperty(s.prototype, "length", {get: function() {
                                    return a(this), this.$$length
                                }
                            }), Object.defineProperty(p.prototype, "textContent", {get: function() {
                                    return function e(t) {
                                        switch (t.nodeType) {
                                            case j:
                                            case z:
                                                var n = [];
                                                for (t = t.firstChild; t;) 7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), t = t.nextSibling;
                                                return n.join("");
                                            default:
                                                return t.nodeValue
                                        }
                                    }(this)
                                },
                                set: function(e) {
                                    switch (this.nodeType) {
                                        case j:
                                        case z:
                                            for (; this.firstChild;) this.removeChild(this.firstChild);
                                            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                                            break;
                                        default:
                                            this.data = e, this.value = e, this.nodeValue = e
                                    }
                                }
                            }), U = function(e, t, n) {
                                e["$$" + t] = n
                            }
                        }
                    } catch (e) {}
                    t.DOMImplementation = _, t.XMLSerializer = P
                }]),
                l = c.DOMParser,
                d = function(e) {
                    for (var t, n, i, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, s = e.length, a = ""; o < s;) {
                        if (t = 255 & e.charCodeAt(o++), o == s) {
                            a += r.charAt(t >> 2), a += r.charAt((3 & t) << 4), a += "==";
                            break
                        }
                        if (n = e.charCodeAt(o++), o == s) {
                            a += r.charAt(t >> 2), a += r.charAt((3 & t) << 4 | (240 & n) >> 4), a += r.charAt((15 & n) << 2), a += "=";
                            break
                        }
                        i = e.charCodeAt(o++), a += r.charAt(t >> 2), a += r.charAt((3 & t) << 4 | (240 & n) >> 4), a += r.charAt((15 & n) << 2 | (192 & i) >> 6), a += r.charAt(63 & i)
                    }
                    return a
                };
            return function(n, o) {
                    if ("function" == typeof r && r.amd) r("strophe-core", ["strophe-sha1", "strophe-md5", "strophe-utils"], (function() {
                        return o.apply(this, arguments)
                    }));
                    else if ("object" === u(t)) e.exports = o(i("./sha1"), i("./md5"), i("./utils"));
                    else {
                        var s = o(n.SHA1, n.MD5, n.stropheUtils);
                        n.Strophe = s.Strophe, n.$build = s.$build, n.$iq = s.$iq, n.$msg = s.$msg, n.$pres = s.$pres, n.SHA1 = s.SHA1, n.MD5 = s.MD5, n.b64_hmac_sha1 = s.SHA1.b64_hmac_sha1, n.b64_sha1 = s.SHA1.b64_sha1, n.str_hmac_sha1 = s.SHA1.str_hmac_sha1, n.str_sha1 = s.SHA1.str_sha1
                    }
                }(a, (function(e, t, n) {
                    function i(e, t) {
                        return new s.Builder(e, t)
                    }

                    function r(e) {
                        return new s.Builder("iq", e)
                    }

                    function o(e) {
                        return new s.Builder("presence", e)
                    }
                    var s;
                    return (s = {
                        VERSION: "",
                        NS: {
                            HTTPBIND: "http://jabber.org/protocol/httpbind",
                            BOSH: "urn:xmpp:xbosh",
                            CLIENT: "jabber:client",
                            AUTH: "jabber:iq:auth",
                            ROSTER: "jabber:iq:roster",
                            PROFILE: "jabber:iq:profile",
                            DISCO_INFO: "http://jabber.org/protocol/disco#info",
                            DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
                            MUC: "http://jabber.org/protocol/muc",
                            SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
                            STREAM: "http://etherx.jabber.org/streams",
                            FRAMING: "urn:ietf:params:xml:ns:xmpp-framing",
                            BIND: "urn:ietf:params:xml:ns:xmpp-bind",
                            SESSION: "urn:ietf:params:xml:ns:xmpp-session",
                            VERSION: "jabber:iq:version",
                            STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas",
                            XHTML_IM: "http://jabber.org/protocol/xhtml-im",
                            XHTML: "http://www.w3.org/1999/xhtml"
                        },
                        XHTML: {
                            tags: ["a", "blockquote", "br", "cite", "em", "img", "li", "ol", "p", "span", "strong", "ul", "body"],
                            attributes: {
                                a: ["href"],
                                blockquote: ["style"],
                                br: [],
                                cite: ["style"],
                                em: [],
                                img: ["src", "alt", "style", "height", "width"],
                                li: ["style"],
                                ol: ["style"],
                                p: ["style"],
                                span: ["style"],
                                strong: [],
                                ul: ["style"],
                                body: []
                            },
                            css: ["background-color", "color", "font-family", "font-size", "font-style", "font-weight", "margin-left", "margin-right", "text-align", "text-decoration"],
                            validTag: function(e) {
                                for (var t = 0; t < s.XHTML.tags.length; t++)
                                    if (e === s.XHTML.tags[t]) return !0;
                                return !1
                            },
                            validAttribute: function(e, t) {
                                if (void 0 !== s.XHTML.attributes[e] && s.XHTML.attributes[e].length > 0)
                                    for (var n = 0; n < s.XHTML.attributes[e].length; n++)
                                        if (t === s.XHTML.attributes[e][n]) return !0;
                                return !1
                            },
                            validCSS: function(e) {
                                for (var t = 0; t < s.XHTML.css.length; t++)
                                    if (e === s.XHTML.css[t]) return !0;
                                return !1
                            }
                        },
                        Status: {
                            ERROR: 0,
                            CONNECTING: 1,
                            CONNFAIL: 2,
                            AUTHENTICATING: 3,
                            AUTHFAIL: 4,
                            CONNECTED: 5,
                            DISCONNECTED: 6,
                            DISCONNECTING: 7,
                            ATTACHED: 8,
                            REDIRECT: 9,
                            CONNTIMEOUT: 10
                        },
                        ErrorCondition: {
                            BAD_FORMAT: "bad-format",
                            CONFLICT: "conflict",
                            MISSING_JID_NODE: "x-strophe-bad-non-anon-jid",
                            NO_AUTH_MECH: "no-auth-mech",
                            UNKNOWN_REASON: "unknown"
                        },
                        LogLevel: {
                            DEBUG: 0,
                            INFO: 1,
                            WARN: 2,
                            ERROR: 3,
                            FATAL: 4
                        },
                        ElementType: {
                            NORMAL: 1,
                            TEXT: 3,
                            CDATA: 4,
                            FRAGMENT: 11
                        },
                        TIMEOUT: 1.1,
                        SECONDARY_TIMEOUT: .1,
                        addNamespace: function(e, t) {
                            s.NS[e] = t
                        },
                        forEachChild: function(e, t, n) {
                            var i, r;
                            for (i = 0; i < e.childNodes.length; i++)(r = e.childNodes[i]).nodeType !== s.ElementType.NORMAL || t && !this.isTagEqual(r, t) || n(r)
                        },
                        isTagEqual: function(e, t) {
                            return e.tagName === t
                        },
                        _xmlGenerator: null,
                        _makeGenerator: function() {
                            return (new c.DOMImplementation).createDocument("jabber:client", "strophe", null)
                        },
                        xmlGenerator: function() {
                            return s._xmlGenerator || (s._xmlGenerator = s._makeGenerator()), s._xmlGenerator
                        },
                        _getIEXmlDom: function() {
                            for (var e = null, t = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"], n = 0; n < t.length && null === e; n++) try {
                                e = new ActiveXObject(t[n])
                            } catch (t) {
                                e = null
                            }
                            return e
                        },
                        xmlElement: function(e) {
                            if (!e) return null;
                            var t, n, i, r = s.xmlGenerator().createElement(e);
                            for (t = 1; t < arguments.length; t++) {
                                var o = arguments[t];
                                if (o)
                                    if ("string" == typeof o || "number" == typeof o) r.appendChild(s.xmlTextNode(o));
                                    else if ("object" === u(o) && "function" == typeof o.sort)
                                    for (n = 0; n < o.length; n++) {
                                        var a = o[n];
                                        "object" === u(a) && "function" == typeof a.sort && void 0 !== a[1] && null !== a[1] && r.setAttribute(a[0], a[1])
                                    } else if ("object" === u(o))
                                        for (i in o) o.hasOwnProperty(i) && void 0 !== o[i] && null !== o[i] && r.setAttribute(i, o[i])
                            }
                            return r
                        },
                        xmlescape: function(e) {
                            return e = (e = (e = (e = (e = e.replace(/\&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/'/g, "&apos;")).replace(/"/g, "&quot;")
                        },
                        xmlunescape: function(e) {
                            return e = (e = (e = (e = (e = e.replace(/\&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&apos;/g, "'")).replace(/&quot;/g, '"')
                        },
                        xmlTextNode: function(e) {
                            return s.xmlGenerator().createTextNode(e)
                        },
                        xmlHtmlNode: function(e) {
                            var t;
                            l ? t = (new l).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e));
                            return t
                        },
                        getText: function(e) {
                            if (!e) return null;
                            var t = "";
                            0 === e.childNodes.length && e.nodeType === s.ElementType.TEXT && (t += e.nodeValue);
                            for (var n = 0; n < e.childNodes.length; n++) e.childNodes[n].nodeType === s.ElementType.TEXT && (t += e.childNodes[n].nodeValue);
                            return s.xmlescape(t)
                        },
                        copyElement: function(e) {
                            var t, n;
                            if (e.nodeType === s.ElementType.NORMAL) {
                                for (n = s.xmlElement(e.tagName), t = 0; t < e.attributes.length; t++) n.setAttribute(e.attributes[t].nodeName, e.attributes[t].value);
                                for (t = 0; t < e.childNodes.length; t++) n.appendChild(s.copyElement(e.childNodes[t]))
                            } else e.nodeType === s.ElementType.TEXT && (n = s.xmlGenerator().createTextNode(e.nodeValue));
                            return n
                        },
                        createHtml: function(e) {
                            var t, n, i, r, o, a, c, l, d, h, _;
                            if (e.nodeType === s.ElementType.NORMAL)
                                if (r = e.nodeName.toLowerCase(), s.XHTML.validTag(r)) try {
                                    for (n = s.xmlElement(r), t = 0; t < s.XHTML.attributes[r].length; t++)
                                        if (o = s.XHTML.attributes[r][t], null != (a = e.getAttribute(o)) && "" !== a && !1 !== a && 0 !== a)
                                            if ("style" === o && "object" === u(a) && void 0 !== a.cssText && (a = a.cssText), "style" === o) {
                                                for (c = [], l = a.split(";"), i = 0; i < l.length; i++) h = (d = l[i].split(":"))[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase(), s.XHTML.validCSS(h) && (_ = d[1].replace(/^\s*/, "").replace(/\s*$/, ""), c.push(h + ": " + _));
                                                c.length > 0 && (a = c.join("; "), n.setAttribute(o, a))
                                            } else n.setAttribute(o, a);
                                    for (t = 0; t < e.childNodes.length; t++) n.appendChild(s.createHtml(e.childNodes[t]))
                                } catch (e) {
                                    n = s.xmlTextNode("")
                                } else
                                    for (n = s.xmlGenerator().createDocumentFragment(), t = 0; t < e.childNodes.length; t++) n.appendChild(s.createHtml(e.childNodes[t]));
                                else if (e.nodeType === s.ElementType.FRAGMENT)
                                for (n = s.xmlGenerator().createDocumentFragment(), t = 0; t < e.childNodes.length; t++) n.appendChild(s.createHtml(e.childNodes[t]));
                            else e.nodeType === s.ElementType.TEXT && (n = s.xmlTextNode(e.nodeValue));
                            return n
                        },
                        escapeNode: function(e) {
                            return "string" != typeof e ? e : e.replace(/^\s+|\s+$/g, "").replace(/\\/g, "\\5c").replace(/ /g, "\\20").replace(/\"/g, "\\22").replace(/\&/g, "\\26").replace(/\'/g, "\\27").replace(/\//g, "\\2f").replace(/:/g, "\\3a").replace(/</g, "\\3c").replace(/>/g, "\\3e").replace(/@/g, "\\40")
                        },
                        unescapeNode: function(e) {
                            return "string" != typeof e ? e : e.replace(/\\20/g, " ").replace(/\\22/g, '"').replace(/\\26/g, "&").replace(/\\27/g, "'").replace(/\\2f/g, "/").replace(/\\3a/g, ":").replace(/\\3c/g, "<").replace(/\\3e/g, ">").replace(/\\40/g, "@").replace(/\\5c/g, "\\")
                        },
                        getNodeFromJid: function(e) {
                            return e.indexOf("@") < 0 ? e : e.split("@")[0]
                        },
                        getDomainFromJid: function(e) {
                            var t = s.getBareJidFromJid(e);
                            if (t.indexOf("@") < 0) return t;
                            var n = t.split("@");
                            return n.splice(0, 1), n.join("@")
                        },
                        getResourceFromJid: function(e) {
                            var t = e.split("/");
                            return t.length < 2 ? null : (t.splice(0, 1), t.join("/"))
                        },
                        getBareJidFromJid: function(e) {
                            return e ? e.split("/")[0] : null
                        },
                        _handleError: function(e) {
                            void 0 !== e.stack && s.fatal(e.stack), e.sourceURL ? s.fatal("error: " + this.handler + " " + e.sourceURL + ":" + e.line + " - " + e.name + ": " + e.message) : e.fileName ? s.fatal("error: " + this.handler + " " + e.fileName + ":" + e.lineNumber + " - " + e.name + ": " + e.message) : s.fatal("error: " + e.message)
                        },
                        log: function(e, t) {
                            e === this.LogLevel.FATAL && "object" === ("undefined" == typeof console ? "undefined" : u(console)) && "function" == typeof console.error && console.error(t)
                        },
                        debug: function(e) {
                            this.log(this.LogLevel.DEBUG, e)
                        },
                        info: function(e) {
                            this.log(this.LogLevel.INFO, e)
                        },
                        warn: function(e) {
                            this.log(this.LogLevel.WARN, e)
                        },
                        error: function(e) {
                            this.log(this.LogLevel.ERROR, e)
                        },
                        fatal: function(e) {
                            this.log(this.LogLevel.FATAL, e)
                        },
                        serialize: function(e) {
                            var t;
                            if (!e) return null;
                            "function" == typeof e.tree && (e = e.tree());
                            var n, i, r = e.nodeName;
                            for (e.getAttribute("_realname") && (r = e.getAttribute("_realname")), t = "<" + r, n = 0; n < e.attributes.length; n++) "_realname" !== e.attributes[n].nodeName && (t += " " + e.attributes[n].nodeName + "='" + s.xmlescape(e.attributes[n].value) + "'");
                            if (e.childNodes.length > 0) {
                                for (t += ">", n = 0; n < e.childNodes.length; n++) switch (i = e.childNodes[n], i.nodeType) {
                                    case s.ElementType.NORMAL:
                                        t += s.serialize(i);
                                        break;
                                    case s.ElementType.TEXT:
                                        t += s.xmlescape(i.nodeValue);
                                        break;
                                    case s.ElementType.CDATA:
                                        t += "<![CDATA[" + i.nodeValue + "]]>"
                                }
                                t += "</" + r + ">"
                            } else t += "/>";
                            return t
                        },
                        _requestId: 0,
                        _connectionPlugins: {},
                        addConnectionPlugin: function(e, t) {
                            s._connectionPlugins[e] = t
                        }
                    }).btoa = d, s.Builder = function(e, t) {
                        "presence" !== e && "message" !== e && "iq" !== e || (t && !t.xmlns ? t.xmlns = s.NS.CLIENT : t || (t = {
                            xmlns: s.NS.CLIENT
                        })), this.nodeTree = s.xmlElement(e, t), this.node = this.nodeTree
                    }, s.Builder.prototype = {
                        tree: function() {
                            return this.nodeTree
                        },
                        toString: function() {
                            return s.serialize(this.nodeTree)
                        },
                        up: function() {
                            return this.node = this.node.parentNode, this
                        },
                        root: function() {
                            return this.node = this.nodeTree, this
                        },
                        attrs: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (void 0 === e[t] ? this.node.removeAttribute(t) : this.node.setAttribute(t, e[t]));
                            return this
                        },
                        c: function(e, t, n) {
                            var i = s.xmlElement(e, t, n);
                            return this.node.appendChild(i), "string" != typeof n && "number" != typeof n && (this.node = i), this
                        },
                        cnode: function(e) {
                            var t, n = s.xmlGenerator();
                            try {
                                t = void 0 !== n.importNode
                            } catch (e) {
                                t = !1
                            }
                            var i = t ? n.importNode(e, !0) : s.copyElement(e);
                            return this.node.appendChild(i), this.node = i, this
                        },
                        t: function(e) {
                            var t = s.xmlTextNode(e);
                            return this.node.appendChild(t), this
                        },
                        h: function(e) {
                            var t = document.createElement("body");
                            t.innerHTML = e;
                            for (var n = s.createHtml(t); n.childNodes.length > 0;) this.node.appendChild(n.childNodes[0]);
                            return this
                        }
                    }, s.Handler = function(e, t, n, i, r, o, a) {
                        this.handler = e, this.ns = t, this.name = n, this.type = i, this.id = r, this.options = a || {
                            matchBareFromJid: !1,
                            ignoreNamespaceFragment: !1
                        }, this.options.matchBare && (s.warn('The "matchBare" option is deprecated, use "matchBareFromJid" instead.'), this.options.matchBareFromJid = this.options.matchBare, delete this.options.matchBare), this.options.matchBareFromJid ? this.from = o ? s.getBareJidFromJid(o) : null : this.from = o, this.user = !0
                    }, s.Handler.prototype = {
                        getNamespace: function(e) {
                            var t = e.getAttribute("xmlns");
                            return t && this.options.ignoreNamespaceFragment && (t = t.split("#")[0]), t
                        },
                        namespaceMatch: function(e) {
                            var t = !1;
                            if (!this.ns) return !0;
                            var n = this;
                            return s.forEachChild(e, null, (function(e) {
                                n.getNamespace(e) === n.ns && (t = !0)
                            })), t = t || this.getNamespace(e) === this.ns
                        },
                        isMatch: function(e) {
                            var t = e.getAttribute("from");
                            this.options.matchBareFromJid && (t = s.getBareJidFromJid(t));
                            var n = e.getAttribute("type");
                            return !(!this.namespaceMatch(e) || this.name && !s.isTagEqual(e, this.name) || this.type && (Array.isArray(this.type) ? -1 === this.type.indexOf(n) : n !== this.type) || this.id && e.getAttribute("id") !== this.id || this.from && t !== this.from)
                        },
                        run: function(e) {
                            var t = null;
                            try {
                                t = this.handler(e)
                            } catch (e) {
                                throw s._handleError(e), e
                            }
                            return t
                        },
                        toString: function() {
                            return "{Handler: " + this.handler + "(" + this.name + "," + this.id + "," + this.ns + ")}"
                        }
                    }, s.TimedHandler = function(e, t) {
                        this.period = e, this.handler = t, this.lastCalled = (new Date).getTime(), this.user = !0
                    }, s.TimedHandler.prototype = {
                        run: function() {
                            return this.lastCalled = (new Date).getTime(), this.handler()
                        },
                        reset: function() {
                            this.lastCalled = (new Date).getTime()
                        },
                        toString: function() {
                            return "{TimedHandler: " + this.handler + "(" + this.period + ")}"
                        }
                    }, s.Connection = function(e, t) {
                        this.service = e, this.options = t || {};
                        var i = this.options.protocol || "";
                        for (var r in 0 === e.indexOf("ws:") || 0 === e.indexOf("wss:") || 0 === i.indexOf("ws") ? this._proto = new s.Websocket(this) : this._proto = new s.Bosh(this), this.jid = "", this.domain = null, this.features = null, this._sasl_data = {}, this.do_session = !1, this.do_bind = !1, this.timedHandlers = [], this.handlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this.protocolErrorHandlers = {
                                HTTP: {},
                                websocket: {}
                            }, this._idleTimeout = null, this._disconnectTimeout = null, this.authenticated = !1, this.connected = !1, this.disconnecting = !1, this.do_authentication = !0, this.paused = !1, this.restored = !1, this._data = [], this._uniqueId = 0, this._sasl_success_handler = null, this._sasl_failure_handler = null, this._sasl_challenge_handler = null, this.maxRetries = 5, this._idleTimeout = setTimeout(function() {
                                this._onIdle()
                            }.bind(this), 100), n.addCookies(this.options.cookies), this.registerSASLMechanisms(this.options.mechanisms), s._connectionPlugins)
                            if (s._connectionPlugins.hasOwnProperty(r)) {
                                var o = s._connectionPlugins[r],
                                    a = function() {};
                                a.prototype = o, this[r] = new a, this[r].init(this)
                            }
                    }, s.Connection.prototype = {
                        reset: function() {
                            this._proto._reset(), this.do_session = !1, this.do_bind = !1, this.timedHandlers = [], this.handlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this.authenticated = !1, this.connected = !1, this.disconnecting = !1, this.restored = !1, this._data = [], this._requests = [], this._uniqueId = 0
                        },
                        pause: function() {
                            this.paused = !0
                        },
                        resume: function() {
                            this.paused = !1
                        },
                        getUniqueId: function(e) {
                            var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" === e ? t : 3 & t | 8).toString(16)
                            }));
                            return "string" == typeof e || "number" == typeof e ? t + ":" + e : t + ""
                        },
                        addProtocolErrorHandler: function(e, t, n) {
                            this.protocolErrorHandlers[e][t] = n
                        },
                        connect: function(e, t, n, i, r, o, a) {
                            this.jid = e, this.authzid = "", this.authcid = this.jid.split("/")[0], this.pass = t, this.servtype = "xmpp", this.connect_callback = n, this.disconnecting = !1, this.connected = !1, this.authenticated = !1, this.restored = !1, this.domain = s.getDomainFromJid(this.jid), this._changeConnectStatus(s.Status.CONNECTING, null), this._proto._connect(i, r, o)
                        },
                        attach: function(e, t, n, i, r, o, a) {
                            if (!(this._proto instanceof s.Bosh)) throw {
                                name: "StropheSessionError",
                                message: 'The "attach" method can only be used with a BOSH connection.'
                            };
                            this._proto._attach(e, t, n, i, r, o, a)
                        },
                        restore: function(e, t, n, i, r) {
                            if (!this._sessionCachingSupported()) throw {
                                name: "StropheSessionError",
                                message: 'The "restore" method can only be used with a BOSH connection.'
                            };
                            this._proto._restore(e, t, n, i, r)
                        },
                        _sessionCachingSupported: function() {
                            if (this._proto instanceof s.Bosh) {
                                if (!JSON) return !1;
                                try {
                                    sessionStorage.setItem("_strophe_", "_strophe_"), sessionStorage.removeItem("_strophe_")
                                } catch (e) {
                                    return !1
                                }
                                return !0
                            }
                            return !1
                        },
                        xmlInput: function(e) {},
                        xmlOutput: function(e) {},
                        rawInput: function(e) {},
                        rawOutput: function(e) {},
                        nextValidRid: function(e) {},
                        send: function(e) {
                            if (null !== e) {
                                if ("function" == typeof e.sort)
                                    for (var t = 0; t < e.length; t++) this._queueData(e[t]);
                                else "function" == typeof e.tree ? this._queueData(e.tree()) : this._queueData(e);
                                this._proto._send()
                            }
                        },
                        flush: function() {
                            clearTimeout(this._idleTimeout), this._onIdle()
                        },
                        sendPresence: function(e, t, n, i) {
                            var r = null,
                                o = this;
                            "function" == typeof e.tree && (e = e.tree());
                            var s = e.getAttribute("id");
                            if (s || (s = this.getUniqueId("sendPresence"), e.setAttribute("id", s)), "function" == typeof t || "function" == typeof n) {
                                var a = this.addHandler((function(e) {
                                    r && o.deleteTimedHandler(r), "error" === e.getAttribute("type") ? n && n(e) : t && t(e)
                                }), null, "presence", null, s);
                                i && (r = this.addTimedHandler(i, (function() {
                                    return o.deleteHandler(a), n && n(null), !1
                                })))
                            }
                            return this.send(e), s
                        },
                        sendIQ: function(e, t, n, i) {
                            var r = null,
                                o = this;
                            "function" == typeof e.tree && (e = e.tree());
                            var s = e.getAttribute("id");
                            if (s || (s = this.getUniqueId("sendIQ"), e.setAttribute("id", s)), "function" == typeof t || "function" == typeof n) {
                                var a = this.addHandler((function(e) {
                                    r && o.deleteTimedHandler(r);
                                    var i = e.getAttribute("type");
                                    if ("result" === i) t && t(e);
                                    else {
                                        if ("error" !== i) throw {
                                            name: "StropheError",
                                            message: "Got bad IQ type of " + i
                                        };
                                        n && n(e)
                                    }
                                }), null, "iq", ["error", "result"], s);
                                i && (r = this.addTimedHandler(i, (function() {
                                    return o.deleteHandler(a), n && n(null), !1
                                })))
                            }
                            return this.send(e), s
                        },
                        _queueData: function(e) {
                            if (null === e || !e.tagName || !e.childNodes) throw {
                                name: "StropheError",
                                message: "Cannot queue non-DOMElement."
                            };
                            this._data.push(e)
                        },
                        _sendRestart: function() {
                            this._data.push("restart"), this._proto._sendRestart(), this._idleTimeout = setTimeout(function() {
                                this._onIdle()
                            }.bind(this), 100)
                        },
                        addTimedHandler: function(e, t) {
                            var n = new s.TimedHandler(e, t);
                            return this.addTimeds.push(n), n
                        },
                        deleteTimedHandler: function(e) {
                            this.removeTimeds.push(e)
                        },
                        addHandler: function(e, t, n, i, r, o, a) {
                            var u = new s.Handler(e, t, n, i, r, o, a);
                            return this.addHandlers.push(u), u
                        },
                        deleteHandler: function(e) {
                            this.removeHandlers.push(e);
                            var t = this.addHandlers.indexOf(e);
                            t >= 0 && this.addHandlers.splice(t, 1)
                        },
                        registerSASLMechanisms: function(e) {
                            this.mechanisms = {}, (e = e || [s.SASLAnonymous, s.SASLExternal, s.SASLMD5, s.SASLOAuthBearer, s.SASLXOAuth2, s.SASLPlain, s.SASLSHA1]).forEach(this.registerSASLMechanism.bind(this))
                        },
                        registerSASLMechanism: function(e) {
                            this.mechanisms[e.prototype.name] = e
                        },
                        disconnect: function(e) {
                            if (this._changeConnectStatus(s.Status.DISCONNECTING, e), s.info("Disconnect was called because: " + e), this.connected) {
                                var t = !1;
                                this.disconnecting = !0, this.authenticated && (t = o({
                                    xmlns: s.NS.CLIENT,
                                    type: "unavailable"
                                })), this._disconnectTimeout = this._addSysTimedHandler(3e3, this._onDisconnectTimeout.bind(this)), this._proto._disconnect(t)
                            } else s.info("Disconnect was called before Strophe connected to the server"), this._proto._abortAllRequests(), this._doDisconnect()
                        },
                        _changeConnectStatus: function(e, t, n) {
                            for (var i in s._connectionPlugins)
                                if (s._connectionPlugins.hasOwnProperty(i)) {
                                    var r = this[i];
                                    if (r.statusChanged) try {
                                        r.statusChanged(e, t)
                                    } catch (e) {
                                        s.error(i + " plugin caused an exception changing status: " + e)
                                    }
                                }
                            if (this.connect_callback) try {
                                this.connect_callback(e, t, n)
                            } catch (e) {
                                s._handleError(e), s.error("User connection callback caused an exception: " + e)
                            }
                        },
                        _doDisconnect: function(e) {
                            "number" == typeof this._idleTimeout && clearTimeout(this._idleTimeout), null !== this._disconnectTimeout && (this.deleteTimedHandler(this._disconnectTimeout), this._disconnectTimeout = null), s.info("_doDisconnect was called"), this._proto._doDisconnect(), this.authenticated = !1, this.disconnecting = !1, this.restored = !1, this.handlers = [], this.timedHandlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this._changeConnectStatus(s.Status.DISCONNECTED, e), this.connected = !1
                        },
                        _dataRecv: function(e, t) {
                            s.info("_dataRecv called");
                            var n = this._proto._reqToData(e);
                            if (null !== n) {
                                var i, r;
                                for (this.xmlInput !== s.Connection.prototype.xmlInput && (n.nodeName === this._proto.strip && n.childNodes.length ? this.xmlInput(n.childNodes[0]) : this.xmlInput(n)), this.rawInput !== s.Connection.prototype.rawInput && (t ? this.rawInput(t) : this.rawInput(s.serialize(n))); this.removeHandlers.length > 0;) r = this.removeHandlers.pop(), (i = this.handlers.indexOf(r)) >= 0 && this.handlers.splice(i, 1);
                                for (; this.addHandlers.length > 0;) this.handlers.push(this.addHandlers.pop());
                                if (this.disconnecting && this._proto._emptyQueue()) this._doDisconnect();
                                else {
                                    var o, a, u = n.getAttribute("type");
                                    if (null !== u && "terminate" === u) {
                                        if (this.disconnecting) return;
                                        return o = n.getAttribute("condition"), a = n.getElementsByTagName("conflict"), null !== o ? ("remote-stream-error" === o && a.length > 0 && (o = "conflict"), this._changeConnectStatus(s.Status.CONNFAIL, o)) : this._changeConnectStatus(s.Status.CONNFAIL, s.ErrorCondition.UNKOWN_REASON), void this._doDisconnect(o)
                                    }
                                    var c = this;
                                    s.forEachChild(n, null, (function(e) {
                                        var t, n;
                                        for (n = c.handlers, c.handlers = [], t = 0; t < n.length; t++) {
                                            var i = n[t];
                                            try {
                                                (!i.isMatch(e) || !c.authenticated && i.user || i.run(e)) && c.handlers.push(i)
                                            } catch (e) {
                                                s.warn("Removing Strophe handlers due to uncaught exception: " + e.message)
                                            }
                                        }
                                    }))
                                }
                            }
                        },
                        mechanisms: {},
                        _no_auth_received: function(e) {
                            s.error("Server did not offer a supported authentication mechanism"), this._changeConnectStatus(s.Status.CONNFAIL, s.ErrorCondition.NO_AUTH_MECH), e && e.call(this), this._doDisconnect()
                        },
                        _connect_cb: function(e, t, n) {
                            var i;
                            s.info("_connect_cb was called"), this.connected = !0;
                            try {
                                i = this._proto._reqToData(e)
                            } catch (e) {
                                if ("badformat" !== e) throw e;
                                this._changeConnectStatus(s.Status.CONNFAIL, s.ErrorCondition.BAD_FORMAT), this._doDisconnect(s.ErrorCondition.BAD_FORMAT)
                            }
                            if (i && (this.xmlInput !== s.Connection.prototype.xmlInput && (i.nodeName === this._proto.strip && i.childNodes.length ? this.xmlInput(i.childNodes[0]) : this.xmlInput(i)), this.rawInput !== s.Connection.prototype.rawInput && (n ? this.rawInput(n) : this.rawInput(s.serialize(i))), this._proto._connect_cb(i) !== s.Status.CONNFAIL))
                                if (i.getElementsByTagNameNS ? i.getElementsByTagNameNS(s.NS.STREAM, "features").length > 0 : i.getElementsByTagName("stream:features").length > 0 || i.getElementsByTagName("features").length > 0) {
                                    var r, o, a = [],
                                        u = i.getElementsByTagName("mechanism");
                                    if (u.length > 0)
                                        for (r = 0; r < u.length; r++) o = s.getText(u[r]), this.mechanisms[o] && a.push(this.mechanisms[o]);
                                    0 !== a.length || 0 !== i.getElementsByTagName("auth").length ? !1 !== this.do_authentication && this.authenticate(a) : this._no_auth_received(t)
                                } else this._no_auth_received(t)
                        },
                        sortMechanismsByPriority: function(e) {
                            var t, n, i, r;
                            for (t = 0; t < e.length - 1; ++t) {
                                for (i = t, n = t + 1; n < e.length; ++n) e[n].prototype.priority > e[i].prototype.priority && (i = n);
                                i !== t && (r = e[t], e[t] = e[i], e[i] = r)
                            }
                            return e
                        },
                        _attemptSASLAuth: function(e) {
                            e = this.sortMechanismsByPriority(e || []);
                            var t = 0,
                                n = !1;
                            for (t = 0; t < e.length; ++t)
                                if (e[t].prototype.test(this)) {
                                    this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this._sasl_challenge_handler = this._addSysHandler(this._sasl_challenge_cb.bind(this), null, "challenge", null, null), this._sasl_mechanism = new e[t], this._sasl_mechanism.onStart(this);
                                    var r = i("auth", {
                                        xmlns: s.NS.SASL,
                                        mechanism: this._sasl_mechanism.name
                                    });
                                    if (this._sasl_mechanism.isClientFirst) {
                                        var o = this._sasl_mechanism.onChallenge(this, null);
                                        r.t(d(o))
                                    }
                                    this.send(r.tree()), n = !0;
                                    break
                                }
                            return n
                        },
                        _attemptLegacyAuth: function() {
                            null === s.getNodeFromJid(this.jid) ? (this._changeConnectStatus(s.Status.CONNFAIL, s.ErrorCondition.MISSING_JID_NODE), this.disconnect(s.ErrorCondition.MISSING_JID_NODE)) : (this._changeConnectStatus(s.Status.AUTHENTICATING, null), this._addSysHandler(this._auth1_cb.bind(this), null, null, null, "_auth_1"), this.send(r({
                                type: "get",
                                to: this.domain,
                                id: "_auth_1"
                            }).c("query", {
                                xmlns: s.NS.AUTH
                            }).c("username", {}).t(s.getNodeFromJid(this.jid)).tree()))
                        },
                        authenticate: function(e) {
                            this._attemptSASLAuth(e) || this._attemptLegacyAuth()
                        },
                        _sasl_challenge_cb: function(e) {
                            var t = atob(s.getText(e)),
                                n = this._sasl_mechanism.onChallenge(this, t),
                                r = i("response", {
                                    xmlns: s.NS.SASL
                                });
                            return "" !== n && r.t(d(n)), this.send(r.tree()), !0
                        },
                        _auth1_cb: function(e) {
                            var t = r({
                                type: "set",
                                id: "_auth_2"
                            }).c("query", {
                                xmlns: s.NS.AUTH
                            }).c("username", {}).t(s.getNodeFromJid(this.jid)).up().c("password").t(this.pass);
                            return s.getResourceFromJid(this.jid) || (this.jid = s.getBareJidFromJid(this.jid) + "/strophe"), t.up().c("resource", {}).t(s.getResourceFromJid(this.jid)), this._addSysHandler(this._auth2_cb.bind(this), null, null, null, "_auth_2"), this.send(t.tree()), !1
                        },
                        _sasl_success_cb: function(e) {
                            if (this._sasl_data["server-signature"]) {
                                var t, n = atob(s.getText(e)).match(/([a-z]+)=([^,]+)(,|$)/);
                                if ("v" === n[1] && (t = n[2]), t !== this._sasl_data["server-signature"]) return this.deleteHandler(this._sasl_failure_handler), this._sasl_failure_handler = null, this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._sasl_data = {}, this._sasl_failure_cb(null)
                            }
                            s.info("SASL authentication succeeded."), this._sasl_mechanism && this._sasl_mechanism.onSuccess(), this.deleteHandler(this._sasl_failure_handler), this._sasl_failure_handler = null, this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null);
                            var i = [],
                                r = function(e, t) {
                                    for (; e.length;) this.deleteHandler(e.pop());
                                    return this._sasl_auth1_cb.bind(this)(t), !1
                                };
                            return i.push(this._addSysHandler(function(e) {
                                r.bind(this)(i, e)
                            }.bind(this), null, "stream:features", null, null)), i.push(this._addSysHandler(function(e) {
                                r.bind(this)(i, e)
                            }.bind(this), s.NS.STREAM, "features", null, null)), this._sendRestart(), !1
                        },
                        _sasl_auth1_cb: function(e) {
                            var t, n;
                            for (this.features = e, t = 0; t < e.childNodes.length; t++) "bind" === (n = e.childNodes[t]).nodeName && (this.do_bind = !0), "session" === n.nodeName && (this.do_session = !0);
                            if (!this.do_bind) return this._changeConnectStatus(s.Status.AUTHFAIL, null), !1;
                            this._addSysHandler(this._sasl_bind_cb.bind(this), null, null, null, "_bind_auth_2");
                            var i = s.getResourceFromJid(this.jid);
                            return i ? this.send(r({
                                type: "set",
                                id: "_bind_auth_2"
                            }).c("bind", {
                                xmlns: s.NS.BIND
                            }).c("resource", {}).t(i).tree()) : this.send(r({
                                type: "set",
                                id: "_bind_auth_2"
                            }).c("bind", {
                                xmlns: s.NS.BIND
                            }).tree()), !1
                        },
                        _sasl_bind_cb: function(e) {
                            var t;
                            if ("error" === e.getAttribute("type")) return s.info("SASL binding failed."), e.getElementsByTagName("conflict").length > 0 && (t = s.ErrorCondition.CONFLICT), this._changeConnectStatus(s.Status.AUTHFAIL, t, e), !1;
                            var n, i = e.getElementsByTagName("bind");
                            if (!(i.length > 0)) return s.info("SASL binding failed."), this._changeConnectStatus(s.Status.AUTHFAIL, null, e), !1;
                            (n = i[0].getElementsByTagName("jid")).length > 0 && (this.jid = s.getText(n[0]), this.do_session ? (this._addSysHandler(this._sasl_session_cb.bind(this), null, null, null, "_session_auth_2"), this.send(r({
                                type: "set",
                                id: "_session_auth_2"
                            }).c("session", {
                                xmlns: s.NS.SESSION
                            }).tree())) : (this.authenticated = !0, this._changeConnectStatus(s.Status.CONNECTED, null)))
                        },
                        _sasl_session_cb: function(e) {
                            if ("result" === e.getAttribute("type")) this.authenticated = !0, this._changeConnectStatus(s.Status.CONNECTED, null);
                            else if ("error" === e.getAttribute("type")) return s.info("Session creation failed."), this._changeConnectStatus(s.Status.AUTHFAIL, null, e), !1;
                            return !1
                        },
                        _sasl_failure_cb: function(e) {
                            return this._sasl_success_handler && (this.deleteHandler(this._sasl_success_handler), this._sasl_success_handler = null), this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._sasl_mechanism && this._sasl_mechanism.onFailure(), this._changeConnectStatus(s.Status.AUTHFAIL, null, e), !1
                        },
                        _auth2_cb: function(e) {
                            return "result" === e.getAttribute("type") ? (this.authenticated = !0, this._changeConnectStatus(s.Status.CONNECTED, null)) : "error" === e.getAttribute("type") && (this._changeConnectStatus(s.Status.AUTHFAIL, null, e), this.disconnect("authentication failed")), !1
                        },
                        _addSysTimedHandler: function(e, t) {
                            var n = new s.TimedHandler(e, t);
                            return n.user = !1, this.addTimeds.push(n), n
                        },
                        _addSysHandler: function(e, t, n, i, r) {
                            var o = new s.Handler(e, t, n, i, r);
                            return o.user = !1, this.addHandlers.push(o), o
                        },
                        _onDisconnectTimeout: function() {
                            return s.info("_onDisconnectTimeout was called"), this._changeConnectStatus(s.Status.CONNTIMEOUT, null), this._proto._onDisconnectTimeout(), this._doDisconnect(), !1
                        },
                        _onIdle: function() {
                            for (var e, t, n; this.addTimeds.length > 0;) this.timedHandlers.push(this.addTimeds.pop());
                            for (; this.removeTimeds.length > 0;) t = this.removeTimeds.pop(), (e = this.timedHandlers.indexOf(t)) >= 0 && this.timedHandlers.splice(e, 1);
                            var i = (new Date).getTime();
                            for (n = [], e = 0; e < this.timedHandlers.length; e++) t = this.timedHandlers[e], !this.authenticated && t.user || (t.lastCalled + t.period - i <= 0 ? t.run() && n.push(t) : n.push(t));
                            this.timedHandlers = n, clearTimeout(this._idleTimeout), this._proto._onIdle(), this.connected && (this._idleTimeout = setTimeout(function() {
                                this._onIdle()
                            }.bind(this), 100))
                        }
                    }, s.SASLMechanism = function(e, t, n) {
                        this.name = e, this.isClientFirst = t, this.priority = n
                    }, s.SASLMechanism.prototype = {
                        test: function(e) {
                            return !0
                        },
                        onStart: function(e) {
                            this._connection = e
                        },
                        onChallenge: function(e, t) {
                            throw new Error("You should implement challenge handling!")
                        },
                        onFailure: function() {
                            this._connection = null
                        },
                        onSuccess: function() {
                            this._connection = null
                        }
                    }, s.SASLAnonymous = function() {}, s.SASLAnonymous.prototype = new s.SASLMechanism("ANONYMOUS", !1, 20), s.SASLAnonymous.prototype.test = function(e) {
                        return null === e.authcid
                    }, s.SASLPlain = function() {}, s.SASLPlain.prototype = new s.SASLMechanism("PLAIN", !0, 50), s.SASLPlain.prototype.test = function(e) {
                        return null !== e.authcid
                    }, s.SASLPlain.prototype.onChallenge = function(e) {
                        var t = e.authzid;
                        return t += "\0", t += e.authcid, t += "\0", t += e.pass, n.utf16to8(t)
                    }, s.SASLSHA1 = function() {}, s.SASLSHA1.prototype = new s.SASLMechanism("SCRAM-SHA-1", !0, 70), s.SASLSHA1.prototype.test = function(e) {
                        return null !== e.authcid
                    }, s.SASLSHA1.prototype.onChallenge = function(i, r, o) {
                        var s = o || t.hexdigest(1234567890 * Math.random()),
                            a = "n=" + n.utf16to8(i.authcid);
                        return a += ",r=", a += s, i._sasl_data.cnonce = s, i._sasl_data["client-first-message-bare"] = a, a = "n,," + a, this.onChallenge = function(t, i) {
                            for (var r, o, s, a, u, c, l, h, _, p, g, m, f = "c=biws,", v = t._sasl_data["client-first-message-bare"] + "," + i + ",", y = t._sasl_data.cnonce, S = /([a-z]+)=([^,]+)(,|$)/; i.match(S);) {
                                var b = i.match(S);
                                switch (i = i.replace(b[0], ""), b[1]) {
                                    case "r":
                                        r = b[2];
                                        break;
                                    case "s":
                                        o = b[2];
                                        break;
                                    case "i":
                                        s = b[2]
                                }
                            }
                            if (r.substr(0, y.length) !== y) return t._sasl_data = {}, t._sasl_failure_cb();
                            for (v += f += "r=" + r, o = atob(o), o += "\0\0\0", _ = n.utf16to8(t.pass), a = c = e.core_hmac_sha1(_, o), l = 1; l < s; l++) {
                                for (u = e.core_hmac_sha1(_, e.binb2str(c)), h = 0; h < 5; h++) a[h] ^= u[h];
                                c = u
                            }
                            for (a = e.binb2str(a), p = e.core_hmac_sha1(a, "Client Key"), g = e.str_hmac_sha1(a, "Server Key"), m = e.core_hmac_sha1(e.str_sha1(e.binb2str(p)), v), t._sasl_data["server-signature"] = e.b64_hmac_sha1(g, v), h = 0; h < 5; h++) p[h] ^= m[h];
                            return f += ",p=" + d(e.binb2str(p))
                        }.bind(this), a
                    }, s.SASLMD5 = function() {}, s.SASLMD5.prototype = new s.SASLMechanism("DIGEST-MD5", !1, 60), s.SASLMD5.prototype.test = function(e) {
                        return null !== e.authcid
                    }, s.SASLMD5.prototype._quote = function(e) {
                        return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'
                    }, s.SASLMD5.prototype.onChallenge = function(e, i, r) {
                        for (var o, s = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/, a = r || t.hexdigest("" + 1234567890 * Math.random()), u = "", c = null, l = ""; i.match(s);) switch (o = i.match(s), i = i.replace(o[0], ""), o[2] = o[2].replace(/^"(.+)"$/, "$1"), o[1]) {
                            case "realm":
                                u = o[2];
                                break;
                            case "nonce":
                                l = o[2];
                                break;
                            case "qop":
                                o[2];
                                break;
                            case "host":
                                c = o[2]
                        }
                        var d = e.servtype + "/" + e.domain;
                        null !== c && (d = d + "/" + c);
                        var h = n.utf16to8(e.authcid + ":" + u + ":" + this._connection.pass),
                            _ = t.hash(h) + ":" + l + ":" + a,
                            p = "AUTHENTICATE:" + d,
                            g = "";
                        return g += "charset=utf-8,", g += "username=" + this._quote(n.utf16to8(e.authcid)) + ",", g += "realm=" + this._quote(u) + ",", g += "nonce=" + this._quote(l) + ",", g += "nc=00000001,", g += "cnonce=" + this._quote(a) + ",", g += "digest-uri=" + this._quote(d) + ",", g += "response=" + t.hexdigest(t.hexdigest(_) + ":" + l + ":00000001:" + a + ":auth:" + t.hexdigest(p)) + ",", g += "qop=auth", this.onChallenge = function() {
                            return ""
                        }, g
                    }, s.SASLOAuthBearer = function() {}, s.SASLOAuthBearer.prototype = new s.SASLMechanism("OAUTHBEARER", !0, 40), s.SASLOAuthBearer.prototype.test = function(e) {
                        return null !== e.pass
                    }, s.SASLOAuthBearer.prototype.onChallenge = function(e) {
                        var t = "n,";
                        return null !== e.authcid && (t = t + "a=" + e.authzid), t += ",", t += "", t += "auth=Bearer ", t += e.pass, t += "", t += "", n.utf16to8(t)
                    }, s.SASLExternal = function() {}, s.SASLExternal.prototype = new s.SASLMechanism("EXTERNAL", !0, 10), s.SASLExternal.prototype.onChallenge = function(e) {
                        return e.authcid === e.authzid ? "" : e.authzid
                    }, s.SASLXOAuth2 = function() {}, s.SASLXOAuth2.prototype = new s.SASLMechanism("X-OAUTH2", !0, 30), s.SASLXOAuth2.prototype.test = function(e) {
                        return null !== e.pass
                    }, s.SASLXOAuth2.prototype.onChallenge = function(e) {
                        var t = "\0";
                        return null !== e.authcid && (t += e.authzid), t += "\0", t += e.pass, n.utf16to8(t)
                    }, {
                        Strophe: s,
                        $build: i,
                        $iq: r,
                        $msg: function(e) {
                            return new s.Builder("message", e)
                        },
                        $pres: o,
                        SHA1: e,
                        MD5: t,
                        b64_hmac_sha1: e.b64_hmac_sha1,
                        b64_sha1: e.b64_sha1,
                        str_hmac_sha1: e.str_hmac_sha1,
                        str_sha1: e.str_sha1
                    }
                })),
                function(n, o) {
                    if ("function" == typeof r && r.amd) r("strophe-bosh", ["strophe-core"], (function(e) {
                        return o(e.Strophe, e.$build)
                    }));
                    else {
                        if ("object" !== u(t)) return o(Strophe, $build);
                        var s = i("./core");
                        e.exports = o(s.Strophe, s.$build)
                    }
                }(0, (function(e, t) {
                    return e.Request = function(t, n, i, r) {
                        this.id = ++e._requestId, this.xmlData = t, this.data = e.serialize(t), this.origFunc = n, this.func = n, this.rid = i, this.date = NaN, this.sends = r || 0, this.abort = !1, this.dead = null, this.age = function() {
                            return this.date ? (new Date - this.date) / 1e3 : 0
                        }, this.timeDead = function() {
                            return this.dead ? (new Date - this.dead) / 1e3 : 0
                        }, this.xhr = this._newXHR()
                    }, e.Request.prototype = {
                        getResponse: function() {
                            var t = null;
                            if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
                                if ("parsererror" === (t = this.xhr.responseXML.documentElement).tagName) throw e.error("invalid response received"), e.error("responseText: " + this.xhr.responseText), e.error("responseXML: " + e.serialize(this.xhr.responseXML)), "parsererror"
                            } else if (this.xhr.responseText) {
                                if (e.debug("Got responseText but no responseXML; attempting to parse it with DOMParser..."), !(t = (new l).parseFromString(this.xhr.responseText, "application/xml").documentElement)) throw new Error("Parsing produced null node");
                                if (t.querySelector("parsererror")) throw e.error("invalid response received: " + t.querySelector("parsererror").textContent), e.error("responseText: " + this.xhr.responseText), "badformat"
                            }
                            return t
                        },
                        _newXHR: function() {
                            var e = null;
                            return window.XMLHttpRequest ? (e = new XMLHttpRequest).overrideMimeType && e.overrideMimeType("text/xml; charset=utf-8") : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e.onreadystatechange = this.func.bind(null, this), e
                        }
                    }, e.Bosh = function(e) {
                        this._conn = e, this.rid = Math.floor(4294967295 * Math.random()), this.sid = null, this.hold = 1, this.wait = 60, this.window = 5, this.errors = 0, this.inactivity = null, this.lastResponseHeaders = null, this._requests = []
                    }, e.Bosh.prototype = {
                        strip: null,
                        _buildBody: function() {
                            var n = t("body", {
                                rid: this.rid++,
                                xmlns: e.NS.HTTPBIND
                            });
                            return null !== this.sid && n.attrs({
                                sid: this.sid
                            }), this._conn.options.keepalive && this._conn._sessionCachingSupported() && this._cacheSession(), n
                        },
                        _reset: function() {
                            this.rid = Math.floor(4294967295 * Math.random()), this.sid = null, this.errors = 0, this._conn._sessionCachingSupported() && window.sessionStorage.removeItem("strophe-bosh-session"), this._conn.nextValidRid(this.rid)
                        },
                        _connect: function(t, n, i) {
                            this.wait = t || this.wait, this.hold = n || this.hold, this.errors = 0;
                            var r = this._buildBody().attrs({
                                to: this._conn.domain,
                                "xml:lang": "en",
                                wait: this.wait,
                                hold: this.hold,
                                content: "text/xml; charset=utf-8",
                                ver: "1.6",
                                "xmpp:version": "1.0",
                                "xmlns:xmpp": e.NS.BOSH
                            });
                            i && r.attrs({
                                route: i
                            });
                            var o = this._conn._connect_cb;
                            this._requests.push(new e.Request(r.tree(), this._onRequestStateChange.bind(this, o.bind(this._conn)), r.tree().getAttribute("rid"))), this._throttledRequestHandler()
                        },
                        _attach: function(t, n, i, r, o, s, a) {
                            this._conn.jid = t, this.sid = n, this.rid = i, this._conn.connect_callback = r, this._conn.domain = e.getDomainFromJid(this._conn.jid), this._conn.authenticated = !0, this._conn.connected = !0, this.wait = o || this.wait, this.hold = s || this.hold, this.window = a || this.window, this._conn._changeConnectStatus(e.Status.ATTACHED, null)
                        },
                        _restore: function(t, n, i, r, o) {
                            var s = JSON.parse(window.sessionStorage.getItem("strophe-bosh-session"));
                            if (!(null != s && s.rid && s.sid && s.jid && (null == t || e.getBareJidFromJid(s.jid) === e.getBareJidFromJid(t) || null === e.getNodeFromJid(t) && e.getDomainFromJid(s.jid) === t))) throw {
                                name: "StropheSessionError",
                                message: "_restore: no restoreable session."
                            };
                            this._conn.restored = !0, this._attach(s.jid, s.sid, s.rid, n, i, r, o)
                        },
                        _cacheSession: function() {
                            this._conn.authenticated ? this._conn.jid && this.rid && this.sid && window.sessionStorage.setItem("strophe-bosh-session", JSON.stringify({
                                jid: this._conn.jid,
                                rid: this.rid,
                                sid: this.sid
                            })) : window.sessionStorage.removeItem("strophe-bosh-session")
                        },
                        _connect_cb: function(t) {
                            var n, i, r = t.getAttribute("type");
                            if (null !== r && "terminate" === r) return n = t.getAttribute("condition"), e.error("BOSH-Connection failed: " + n), i = t.getElementsByTagName("conflict"), null !== n ? ("remote-stream-error" === n && i.length > 0 && (n = "conflict"), this._conn._changeConnectStatus(e.Status.CONNFAIL, n)) : this._conn._changeConnectStatus(e.Status.CONNFAIL, "unknown"), this._conn._doDisconnect(n), e.Status.CONNFAIL;
                            this.sid || (this.sid = t.getAttribute("sid"));
                            var o = t.getAttribute("requests");
                            o && (this.window = parseInt(o, 10));
                            var s = t.getAttribute("hold");
                            s && (this.hold = parseInt(s, 10));
                            var a = t.getAttribute("wait");
                            a && (this.wait = parseInt(a, 10));
                            var u = t.getAttribute("inactivity");
                            u && (this.inactivity = parseInt(u, 10))
                        },
                        _disconnect: function(e) {
                            this._sendTerminate(e)
                        },
                        _doDisconnect: function() {
                            this.sid = null, this.rid = Math.floor(4294967295 * Math.random()), this._conn._sessionCachingSupported() && window.sessionStorage.removeItem("strophe-bosh-session"), this._conn.nextValidRid(this.rid)
                        },
                        _emptyQueue: function() {
                            return 0 === this._requests.length
                        },
                        _callProtocolErrorHandlers: function(e) {
                            var t, n = this._getRequestStatus(e);
                            (t = this._conn.protocolErrorHandlers.HTTP[n]) && t.call(this, n)
                        },
                        _hitError: function(t) {
                            this.errors++, e.warn("request errored, status: " + t + ", number of errors: " + this.errors), this.errors > 4 && this._conn._onDisconnectTimeout()
                        },
                        _onDisconnectTimeout: function() {
                            this._abortAllRequests()
                        },
                        _abortAllRequests: function() {
                            for (var e; this._requests.length > 0;)(e = this._requests.pop()).abort = !0, e.xhr.abort(), e.xhr.onreadystatechange = function() {}
                        },
                        _onIdle: function() {
                            var t = this._conn._data;
                            if (this._conn.authenticated && 0 === this._requests.length && 0 === t.length && !this._conn.disconnecting && (e.info("no requests during idle cycle, sending blank request"), t.push(null)), !this._conn.paused) {
                                if (this._requests.length < 2 && t.length > 0) {
                                    for (var n = this._buildBody(), i = 0; i < t.length; i++) null !== t[i] && ("restart" === t[i] ? n.attrs({
                                        to: this._conn.domain,
                                        "xml:lang": "en",
                                        "xmpp:restart": "true",
                                        "xmlns:xmpp": e.NS.BOSH
                                    }) : n.cnode(t[i]).up());
                                    delete this._conn._data, this._conn._data = [], this._requests.push(new e.Request(n.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), n.tree().getAttribute("rid"))), this._throttledRequestHandler()
                                }
                                if (this._requests.length > 0) {
                                    var r = this._requests[0].age();
                                    null !== this._requests[0].dead && this._requests[0].timeDead() > Math.floor(e.SECONDARY_TIMEOUT * this.wait) && this._throttledRequestHandler(), r > Math.floor(e.TIMEOUT * this.wait) && (e.warn("Request " + this._requests[0].id + " timed out, over " + Math.floor(e.TIMEOUT * this.wait) + " seconds since last activity"), this._throttledRequestHandler())
                                }
                            }
                        },
                        _getRequestStatus: function(t, n) {
                            var i;
                            if (4 === t.xhr.readyState) try {
                                i = t.xhr.status
                            } catch (t) {
                                e.error("Caught an error while retrieving a request's status, reqStatus: " + i)
                            }
                            return void 0 === i && (i = "number" == typeof n ? n : 0), i
                        },
                        _onRequestStateChange: function(t, n) {
                            if (e.debug("request id " + n.id + "." + n.sends + " state changed to " + n.xhr.readyState), n.abort) n.abort = !1;
                            else if (4 === n.xhr.readyState) {
                                var i = this._getRequestStatus(n);
                                if (this.lastResponseHeaders = n.xhr.getAllResponseHeaders(), this.disconnecting && i >= 400) return this._hitError(i), void this._callProtocolErrorHandlers(n);
                                var r = i > 0 && i < 500,
                                    o = n.sends > this._conn.maxRetries;
                                if ((r || o) && (this._removeRequest(n), e.debug("request id " + n.id + " should now be removed")), 200 === i) {
                                    var s = this._requests[0] === n;
                                    (this._requests[1] === n || s && this._requests.length > 0 && this._requests[0].age() > Math.floor(e.SECONDARY_TIMEOUT * this.wait)) && this._restartRequest(0), this._conn.nextValidRid(Number(n.rid) + 1), e.debug("request id " + n.id + "." + n.sends + " got 200"), t(n), this.errors = 0
                                } else 0 === i || i >= 400 && i < 600 || i >= 12e3 ? (e.error("request id " + n.id + "." + n.sends + " error " + i + " happened"), this._hitError(i), this._callProtocolErrorHandlers(n), i >= 400 && i < 500 && (this._conn._changeConnectStatus(e.Status.DISCONNECTING, null), this._conn._doDisconnect())) : e.error("request id " + n.id + "." + n.sends + " error " + i + " happened");
                                r || o ? o && !this._conn.connected && this._conn._changeConnectStatus(e.Status.CONNFAIL, "giving-up") : this._throttledRequestHandler()
                            }
                        },
                        _processRequest: function(t) {
                            var n = this,
                                i = this._requests[t],
                                r = this._getRequestStatus(i, -1);
                            if (i.sends > this._conn.maxRetries) this._conn._onDisconnectTimeout();
                            else {
                                var o = i.age(),
                                    s = !isNaN(o) && o > Math.floor(e.TIMEOUT * this.wait),
                                    a = null !== i.dead && i.timeDead() > Math.floor(e.SECONDARY_TIMEOUT * this.wait),
                                    u = 4 === i.xhr.readyState && (r < 1 || r >= 500);
                                if ((s || a || u) && (a && e.error("Request " + this._requests[t].id + " timed out (secondary), restarting"), i.abort = !0, i.xhr.abort(), i.xhr.onreadystatechange = function() {}, this._requests[t] = new e.Request(i.xmlData, i.origFunc, i.rid, i.sends), i = this._requests[t]), 0 === i.xhr.readyState) {
                                    e.debug("request id " + i.id + "." + i.sends + " posting");
                                    try {
                                        var c = this._conn.options.contentType || "text/xml; charset=utf-8";
                                        i.xhr.open("POST", this._conn.service, !this._conn.options.sync), void 0 !== i.xhr.setRequestHeader && i.xhr.setRequestHeader("Content-Type", c), this._conn.options.withCredentials && (i.xhr.withCredentials = !0)
                                    } catch (t) {
                                        return e.error("XHR open failed: " + t.toString()), this._conn.connected || this._conn._changeConnectStatus(e.Status.CONNFAIL, "bad-service"), void this._conn.disconnect()
                                    }
                                    var l = function() {
                                        if (i.date = new Date, n._conn.options.customHeaders) {
                                            var e = n._conn.options.customHeaders;
                                            for (var t in e) e.hasOwnProperty(t) && i.xhr.setRequestHeader(t, e[t])
                                        }
                                        i.xhr.send(i.data)
                                    };
                                    if (i.sends > 1) {
                                        var d = 1e3 * Math.min(Math.floor(e.TIMEOUT * this.wait), Math.pow(i.sends, 3));
                                        setTimeout((function() {
                                            l()
                                        }), d)
                                    } else l();
                                    i.sends++, this._conn.xmlOutput !== e.Connection.prototype.xmlOutput && (i.xmlData.nodeName === this.strip && i.xmlData.childNodes.length ? this._conn.xmlOutput(i.xmlData.childNodes[0]) : this._conn.xmlOutput(i.xmlData)), this._conn.rawOutput !== e.Connection.prototype.rawOutput && this._conn.rawOutput(i.data)
                                } else e.debug("_processRequest: " + (0 === t ? "first" : "second") + " request has readyState of " + i.xhr.readyState)
                            }
                        },
                        _removeRequest: function(t) {
                            var n;
                            for (e.debug("removing request"), n = this._requests.length - 1; n >= 0; n--) t === this._requests[n] && this._requests.splice(n, 1);
                            t.xhr.onreadystatechange = function() {}, this._throttledRequestHandler()
                        },
                        _restartRequest: function(e) {
                            var t = this._requests[e];
                            null === t.dead && (t.dead = new Date), this._processRequest(e)
                        },
                        _reqToData: function(e) {
                            try {
                                return e.getResponse()
                            } catch (e) {
                                if ("parsererror" !== e) throw e;
                                this._conn.disconnect("strophe-parsererror")
                            }
                        },
                        _sendTerminate: function(t) {
                            e.info("_sendTerminate was called");
                            var n = this._buildBody().attrs({
                                type: "terminate"
                            });
                            t && n.cnode(t.tree());
                            var i = new e.Request(n.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), n.tree().getAttribute("rid"));
                            this._requests.push(i), this._throttledRequestHandler()
                        },
                        _send: function() {
                            clearTimeout(this._conn._idleTimeout), this._throttledRequestHandler(), this._conn._idleTimeout = setTimeout(function() {
                                this._onIdle()
                            }.bind(this._conn), 100)
                        },
                        _sendRestart: function() {
                            this._throttledRequestHandler(), clearTimeout(this._conn._idleTimeout)
                        },
                        _throttledRequestHandler: function() {
                            this._requests ? e.debug("_throttledRequestHandler called with " + this._requests.length + " requests") : e.debug("_throttledRequestHandler called with undefined requests"), this._requests && 0 !== this._requests.length && (this._requests.length > 0 && this._processRequest(0), this._requests.length > 1 && Math.abs(this._requests[0].rid - this._requests[1].rid) < this.window && this._processRequest(1))
                        }
                    }, e
                })),
                function(n, o) {
                    if ("function" == typeof r && r.amd) r("strophe-websocket", ["strophe-core"], (function(e) {
                        return o(e.Strophe, e.$build)
                    }));
                    else {
                        if ("object" !== u(t)) return o(Strophe, $build);
                        var s = i("./core");
                        e.exports = o(s.Strophe, s.$build)
                    }
                }(0, (function(e, t) {
                    return e.Websocket = function(e) {
                        this._conn = e, this.strip = "wrapper", this.alreadySwitchedToMsg = !1;
                        var t = e.service;
                        if (0 !== t.indexOf("ws:") && 0 !== t.indexOf("wss:")) {
                            var n = "";
                            "ws" === e.options.protocol && "https:" !== window.location.protocol ? n += "ws" : n += "wss", n += "://" + window.location.host, 0 !== t.indexOf("/") ? n += window.location.pathname + t : n += t, e.service = n
                        }
                    }, e.Websocket.prototype = {
                        _buildStream: function() {
                            return t("open", {
                                xmlns: e.NS.FRAMING,
                                to: this._conn.domain,
                                version: "1.0"
                            })
                        },
                        _wsLog: function(e) {},
                        _check_streamerror: function(t, n) {
                            var i;
                            if (0 === (i = t.getElementsByTagNameNS ? t.getElementsByTagNameNS(e.NS.STREAM, "error") : t.getElementsByTagName("stream:error")).length) return !1;
                            for (var r = i[0], o = "", s = "", a = 0; a < r.childNodes.length; a++) {
                                var u = r.childNodes[a];
                                if ("urn:ietf:params:xml:ns:xmpp-streams" !== u.getAttribute("xmlns")) break;
                                "text" === u.nodeName ? s = u.textContent : o = u.nodeName
                            }
                            var c = "WebSocket stream error: ";
                            return c += o || "unknown", s && (c += " - " + s), e.error(c), this._conn._changeConnectStatus(n, o), this._conn._doDisconnect(), !0
                        },
                        _reset: function() {},
                        _connect: function() {
                            this._wsLog("websocket _connect func called."), this._closeSocket(), this.socket = wx.connectSocket({
                                url: this._conn.service,
                                protocols: ["xmpp"]
                            }), this.socket.onOpen(this._onOpen.bind(this)), this.socket.onError(this._onError.bind(this)), this.socket.onClose(this._onClose.bind(this)), this.socket.onMessage(this._connect_cb_wrapper.bind(this))
                        },
                        _connect_cb: function(t) {
                            if (this._check_streamerror(t, e.Status.CONNFAIL)) return e.Status.CONNFAIL
                        },
                        _handleStreamStart: function(t) {
                            var n = !1,
                                i = t.getAttribute("xmlns");
                            "string" != typeof i ? n = "Missing xmlns in <open />" : i !== e.NS.FRAMING && (n = "Wrong xmlns in <open />: " + i);
                            var r = t.getAttribute("version");
                            return "string" != typeof r ? n = "Missing version in <open />" : "1.0" !== r && (n = "Wrong version in <open />: " + r), !n || (this._conn._changeConnectStatus(e.Status.CONNFAIL, n), this._conn._doDisconnect(), !1)
                        },
                        _connect_cb_wrapper: function(t) {
                            if (this._wsLog("_connect_cb_wrapper message", t), null == (t = t.data) && (console.error("_connect_cb_wrapper message got ".concat(t)), t = "BAD MESSAGE CAUSED INDEXOF EXCEPTION"), 0 === t.indexOf("<open ") || 0 === t.indexOf("<?xml")) {
                                this._wsLog("websocket connect cb on open tag");
                                var n = t.replace(/^(<\?.*?\?>\s*)*/, "");
                                if ("" === n) return;
                                var i = (new l).parseFromString(n, "text/xml").documentElement;
                                this._conn.xmlInput(i), this._conn.rawInput(t), this._handleStreamStart(i) && this._connect_cb(i)
                            } else if (0 === t.indexOf("<close ")) {
                                this._wsLog("websocket connect cb on close tag"), this._conn.rawInput(t);
                                this._conn.connected ? (this._conn._changeConnectStatus(e.Status.CONNFAIL, "Received closing stream"), this._conn._doDisconnect()) : console.log("%cStrophe.Connection is not connected, we wont respond to this socket message", "background-color:grey;color:white;font-weight:bold")
                            } else {
                                var r = "websocket connect cb on other state!";
                                if (!1 === this.alreadySwitchedToMsg) {
                                    this.alreadySwitchedToMsg = !0;
                                    var o = this._streamWrap(t),
                                        s = (new l).parseFromString(o, "text/xml").documentElement;
                                    this._conn._connect_cb(s, null, t), this._wsLog(r + " calling _conn._connect_cb...")
                                } else this._wsLog(r + " --will redirect to _onMessage..."), this._onMessage.call(this, t)
                            }
                        },
                        _disconnect: function(n) {
                            if (void 0 === i) var i = {
                                CLOSED: 3
                            };
                            if (this.socket && this.socket.readyState !== i.CLOSED) {
                                n && this._conn.send(n);
                                var r = t("close", {
                                    xmlns: e.NS.FRAMING
                                });
                                this._conn.xmlOutput(r.tree());
                                var o = e.serialize(r);
                                this._conn.rawOutput(o);
                                try {
                                    this.socket.send({
                                        data: o
                                    })
                                } catch (t) {
                                    e.info("Couldn't send <close /> tag.")
                                }
                            }
                            this._conn._doDisconnect()
                        },
                        _doDisconnect: function() {
                            e.info("WebSockets _doDisconnect was called"), this._closeSocket()
                        },
                        _streamWrap: function(e) {
                            return "<wrapper>" + e + "</wrapper>"
                        },
                        _closeSocket: function() {
                            if (this.socket) try {
                                this.socket.onerror = null, this.socket.close()
                            } catch (e) {}
                            this.socket = null
                        },
                        _emptyQueue: function() {
                            return !0
                        },
                        _onClose: function(t) {
                            console.error("websocket._onClose", t), this._conn.connected && !this._conn.disconnecting ? (e.error("Websocket closed unexpectedly"), this._conn._doDisconnect(t)) : !this._conn.connected && this.socket ? (e.error("Websocket closed unexcectedly"), this._conn._changeConnectStatus(e.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected."), this._conn._doDisconnect(t)) : e.info("Websocket closed")
                        },
                        _onDisconnectTimeout: function() {},
                        _abortAllRequests: function() {},
                        _onError: function(t) {
                            console.error("websocket._onError:", t), e.error("Websocket error " + t), this._wsLog("westrophe log: ----\x3e>", "Websocket error " + t), this._conn._changeConnectStatus(e.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected."), this._disconnect()
                        },
                        _onIdle: function() {
                            var t = this._conn._data;
                            if (t.length > 0 && !this._conn.paused) {
                                for (var n = 0; n < t.length; n++) {
                                    var i, r;
                                    null !== t[n] && (i = "restart" === t[n] ? this._buildStream().tree() : t[n], r = e.serialize(i), this._conn.xmlOutput(i), this._conn.rawOutput(r), this._wsLog("websocket sending data:", r), this.socket.send({
                                        data: r
                                    }))
                                }
                                this._conn._data = []
                            }
                        },
                        _onMessage: function(t) {
                            var n, i;
                            t = {
                                data: t
                            }, this._wsLog("_onMessage message", t);
                            var r = '<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';
                            if (t.data === r) return this._wsLog("websocket meet close tag..."), this._conn.rawInput(r), this._conn.xmlInput(t), void(this._conn.disconnecting || this._conn._doDisconnect());
                            if (0 === t.data.search("<open ")) {
                                if (n = (new l).parseFromString(t.data, "text/xml").documentElement, !this._handleStreamStart(n)) return
                            } else i = this._streamWrap(t.data), n = (new l).parseFromString(i, "text/xml").documentElement;
                            return this._check_streamerror(n, e.Status.ERROR) ? void 0 : this._conn.disconnecting && "presence" === n.firstChild.nodeName && "unavailable" === n.firstChild.getAttribute("type") ? (this._conn.xmlInput(n), void this._conn.rawInput(e.serialize(n))) : void this._conn._dataRecv(n, t.data)
                        },
                        _onOpen: function(t) {
                            e.info("Websocket open"), this._wsLog("westrophe log: ----\x3e> Websocket open");
                            var n = this._buildStream();
                            this._conn.xmlOutput(n.tree());
                            var i = e.serialize(n);
                            this._conn.rawOutput(i), this.socket.send({
                                data: i
                            })
                        },
                        _reqToData: function(e) {
                            return e
                        },
                        _send: function() {
                            this._conn.flush()
                        },
                        _sendRestart: function() {
                            clearTimeout(this._conn._idleTimeout), this._conn._onIdle.bind(this._conn)()
                        }
                    }, e
                })),
                function(n) {
                    if ("function" == typeof r && r.amd) r("strophe", ["strophe-core", "strophe-bosh", "strophe-websocket"], (function(e) {
                        return e
                    }));
                    else if ("object" === u(t)) {
                        var o = i("./core");
                        i("./bosh"), i("./websocket"), e.exports = o
                    }
                }(), i(["strophe-polyfill"]), i("strophe")
        }, r = [], void 0 === (o = "function" == typeof(i = s) ? i.apply(t, r) : i) || (e.exports = o)
    }, function(e, t, n) {
        var i = n(17),
            r = i.$iq,
            o = i.get_val,
            s = i.get_attr,
            a = i.encodeUtf8ThenB64,
            u = i.decodeB64ThenUtf8;
        e.exports = {
            inviteRequest: function(e, t, n) {
                var i = this,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                    u = r({
                        type: "set"
                    }).c("invite", {
                        xmlns: "tencent:wemeet:meeting_ctrl"
                    }).c("meeting_id").t(e).up();
                "string" == typeof t && t.length > 0 && u.c("nickname").t(a(t)).up(), "2" == n.user_type && u.c("id", {
                    user_type: n.user_type,
                    phone_number: n.phone_number
                }).up(), u.c("invite_strategy").t(s).up();
                var c = {
                    meetingId: e,
                    userId: n,
                    nickname: t
                };
                this.sendIQ(u, (function(e, t) {
                    var n = e.getElementsByTagName("invite")[0],
                        r = o(n, "invite_id");
                    i.getEventHandler("invite")(!0, {
                        invite_id: r,
                        sender_data: t
                    })
                }), (function(e, t) {
                    i.genErrorCallback(e, "invite")(t)
                }), c)
            },
            cancelInviteRequest: function(e, t, n) {
                var i = this,
                    o = r({
                        type: "set"
                    }).c("cancel_invite", {
                        xmlns: "tencent:wemeet:meeting_ctrl"
                    }).c("meeting_id").t(e).up().c("invite_id").t(n).up().c("id", {
                        user_type: "2",
                        phone_number: t
                    }),
                    s = {
                        meetingId: e,
                        phoneNumber: t,
                        inviteId: n
                    };
                this.sendIQ(o, (function(e, t) {
                    i.getEventHandler("cancel_invite")(!0, {
                        sender_data: t
                    })
                }), (function(e, t) {
                    i.genErrorCallback(e, "cancel_invite")()
                }), s)
            },
            inviteStatusPush: function(e) {
                var t = e.getElementsByTagName("invite_status")[0],
                    n = {};
                n.meeting_id = o(t, "meeting_id"), n.nickname = u(o(t, "nickname")), n.invite_id = o(t, "invite_id"), n.event_id = o(t, "status"), n.event_stamp = s(t, "status", "last_update_time");
                var i = {},
                    r = {};
                i.user_type = s(t, "inviter_id", "user_type"), i.app_uid = s(t, "inviter_id", "app_uid"), i.app_id = s(t, "inviter_id", "app_id"), i.instance_id = s(t, "inviter_id", "instance_id"), n.inviter = i, r.user_type = s(t, "invitee_id", "user_type"), r.phone_number = s(t, "invitee_id", "phone_number"), "string" == typeof r.phone_number && 0 === r.phone_number.length && (r.phone_number = s(t, "invitee_id", "app_uid")), n.invitee = r, this.getEventHandler("on_invite_event_push")(!0, n)
            }
        }
    }, function(e, t, n) {
        function i(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, a = !0,
                u = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e
                },
                e: function(e) {
                    u = !0, s = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (u) throw s
                    }
                }
            }
        }

        function r(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
            }
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }
        var s = n(2),
            a = n(3),
            u = function() {
                function e() {
                    s(this, e), this.eventListenersMap = new Map
                }
                return a(e, [{
                    key: "registerEventHandler",
                    value: function(e, t) {
                        if ("function" == typeof t) {
                            var n = this.eventListenersMap.get(e);
                            return void 0 === n && (n = []), n.push(t), this.eventListenersMap.set(e, n), !0
                        }
                        return !1
                    }
                }, {
                    key: "getEventHandler",
                    value: function(e) {
                        var t = this.eventListenersMap.get(e);
                        if (void 0 === t) return function() {};
                        return function(e, n) {
                            var r, o = i(t);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    (0, r.value)(e, n)
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                    }
                }, {
                    key: "removeEventHandler",
                    value: function(e, t) {
                        if ("function" == typeof t) {
                            var n = this.eventListenersMap.get(e);
                            if (void 0 === n) return !1;
                            var i = n.indexOf(t);
                            return i > -1 ? n.splice(i, 1) : this.logger.debug("removeEventHandler event_key:", e, " func not found."), this.eventListenersMap.set(e, n), !0
                        }
                    }
                }]), e
            }();
        e.exports = u
    }, function(e, t, n) {
        var i = n(2),
            r = n(3),
            o = n(12),
            s = new(function() {
                function e() {
                    i(this, e), this.logger = new o
                }
                return r(e, [{
                    key: "report",
                    value: function(e) {
                        var t = this.getReportData(e);
                        null !== t && "ping" !== t.protocolName && this.logger.report(1, "report", t)
                    }
                }, {
                    key: "getReportData",
                    value: function(e) {
                        var t = e.namespace,
                            n = e.protocolName,
                            i = e.timeCost,
                            r = e.code,
                            o = e.msg,
                            s = void 0 === o ? "" : o;
                        return t ? n ? isNaN(i) || i <= 0 || 3e4 < i ? (this.logger.error(3, "QualityReporter::getReportData", "invalid timeCost of protocol '".concat(t, ":").concat(n, "': ").concat(i)), null) : {
                            namespace: t,
                            protocolName: n,
                            timeCost: i,
                            code: r,
                            msg: s
                        } : (this.logger.error(3, "QualityReporter::getReportData", "invalid protocolName. ns:".concat(t)), null) : (this.logger.error(3, "QualityReporter::getReportData", "invalid namespace. protocolName:".concat(n)), null)
                    }
                }]), e
            }());
        e.exports = s
    }, function(e, t, n) {
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    d(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function o(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                u = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e
                },
                e: function(e) {
                    u = !0, o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (u) throw o
                    }
                }
            }
        }

        function s(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function u(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = y(e);
                if (t) {
                    var r = y(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return v(this, n)
            }
        }
        var c = n(23),
            l = n(25),
            d = n(15),
            h = n(9),
            _ = n(26),
            p = n(2),
            g = n(3),
            m = n(5),
            f = n(6),
            v = n(8),
            y = n(10),
            S = n(11),
            b = n(12),
            E = n(14),
            w = n(32),
            R = n(33),
            k = n(34),
            T = n(20);
        void 0 === console.assert && (console.assert = function(e, t) {});
        var N = function(e) {
            function t() {
                var e;
                p(this, t), (e = n.call(this)).logger = new b, e.xmpp_service = E.getInstance(), e.rtc_service = w.getInstance(), e.meetingVideoController = R.getInstance(), e.meetingAudioController = k.getInstance(), e.meeting_id = 0, e.room_type = S.RoomType.OUTSIDE, e.media_room_state = S.MediaRoomState.OUT, e.mediaController = null, e.customer_data = "", e.selfId = null, e.app_id = "", e.nickname = "unnamed", e.host_uid = 0, e.saved_user_audio_switch = null, e.saved_user_video_switch = null, e.mutedBySelf = !0, e.muteAll = !1, e.muteOnJoin = !1, e.allowUnmuteBySelf = !1, e.isAllowOpenVideo = !0, e.isAllowRenaming = !0, e.enableWatermark = !1, e.multipleRowWatermark = !1, e.meetingLocked = !1, e.meetingAbilityPstn = !0, e.hideMeetingCodePassword = !1, e.turnAudioReason = S.SwitchReason.BYSELF, e.turnVideoReason = S.SwitchReason.BYSELF, e.cloud_recording_status = S.CloudRecordingStatus.STOPPED, e.cloud_recording_check_token = "", e.isSpotlight = !1, e.is_webinar = !1, e.userMap = new Map, e.inviteMap = new Map, e.associatorMap = new Map;
                var i = function(t) {
                    return e[t] = e[t].bind(m(e))
                };
                i("setSelfUserId"), i("getSelfId"), i("getUserById"), i("getSelfInfo"), i("formKeyById"), i("getUserInfoList"), i("setSelfNickname"), i("isInMeeting"), i("setMeetingId"), i("getMeetingId"), i("reset"), i("isHost"), i("handsUp"), i("kickout"), i("onLogout"), i("turnAudio"), i("turnVideo"), i("changeHost"), i("muteAudio"), i("muteVideo"), i("muteAllAudio"), i("muteAllVideo"), i("leaveMeeting"), i("updateUserInfo"), i("onChangeHostPush"), i("onChangeCoHostPush"), i("onKickoutCallBack"), i("onUserJoinCallBack"), i("onUserLeaveCallBack"), i("onUserOfflineCallBack"), i("onKickedOutCallBack"), i("handleHandsUpRequest"), i("onUserUpdateCallBack"), i("registerEventHandler"), i("onUserKickedCallBack"), i("onNotifyHandsUpResult"), i("onLeaveMeetingCallBack"), i("onBackToWaitingRoomCallBack"), i("onTurnAudioCallBack"), i("onTurnVideoCallBack"), i("onHandsUpCompleteCallBack"), i("onMuteAudioCompleteCallBack"), i("onChangeHostCompleteCallBack"), i("onMuteVideoCompleteCallBack"), i("onNotifyHandsupPushCallBack"), i("onMuteAllAudioCompleteCallBack"), i("onMuteAllVideoCompleteCallBack"), i("onHandleHandsUpCallBack"), i("onUpdateUserInfoCallBack"), i("onHostStatusPush"), i("onWaitingUserStatusPush"), i("onSwitchUserRolePush"), i("onModifyUserInfoCallBack"), i("onSummaryRequestCallBack"), i("onSummaryAudioUploadPush"), i("onRTCWebSocketClose"), i("onRTCRelayTimeout"), i("onRTCKickOut"), i("onInviteEventPush"), i("onInviteResponse"), i("onCancelInviteResponse"), i("onQueryUserStatusResponse"), i("onMeetingSettings"), i("onMeetingUiCfg"), i("onNotifySwitchMediaStream"), i("onNotifyJoinAudioMixUserInfo"), i("onNotifyMeetingSettingsUpdate"), i("onMeetingWillLimited"), i("onRefreshMediaAuthInfo"), i("onQueryLocalPermission"), i("onBreakoutRoomCallBack"), i("onCloudRecordStatePush"), i("onCloudRecordStartCallBack"), i("onCloudRecordPauseCallBack"), i("onCloudRecordResumeCallBack"), i("onCloudRecordStopCallBack"), i("onQueryCloudRecordStorageCallBack"), i("onQueryCloudRecordStateCallBack"), i("onReportMediaStreamStatusCallBack"), i("onReportMediaStreamStatusPush"), i("onNotifyRaiseHandListChangedPush"), i("memberRaiseHandComplete"), i("handleApplyPermissionComplete"), i("putHandsdownComplete"), i("onNotifyUserBePutHandsdownPush"), i("putHandsDownAgainstGivenRoleGroupComplete"), i("onNotifyRoleGroupBePutHandsdownPush"), i("onQueryParticipantsSummaryCallBack"), i("onNotifyPermissionResPush"), i("onApplyPermissionCallBack"), i("onDirectedPush"), i("onMeetingNotice"), i("onQueryUserSigCallBack"), m(e);
                var r = function(t) {
                    var n, i;
                    if (Array.isArray(t)) {
                        var r = _(t, 2);
                        n = r[0], i = r[1]
                    } else n = t;
                    e.xmpp_service.registerEventHandler(n, (function(t, r) {
                        "function" == typeof i && i(t, r), e.getEventHandler(n)(t, r)
                    }))
                };
                return [
                    ["invite", e.onInviteResponse],
                    ["cancel_invite", e.onCancelInviteResponse],
                    ["query_user_status", e.onQueryUserStatusResponse]
                ].map((function(e) {
                    return r(e)
                })), e.listenEvent(), e
            }
            f(t, e);
            var n = u(t);
            return g(t, [{
                key: "setSelfUserId",
                value: function(e) {
                    var t = e.uid,
                        n = e.unique_id;
                    this.selfId = {
                        uid: t,
                        app_id: this.app_id,
                        instance_id: S.INSTANCE_ID.toString(),
                        user_type: 1,
                        unique_id: n
                    }, this.selfKey = this.formKeyById(this.selfId)
                }
            }, {
                key: "getSelfId",
                value: function() {
                    return this.selfId
                }
            }, {
                key: "setMeetingId",
                value: function(e) {
                    this.meeting_id = e
                }
            }, {
                key: "getMeetingId",
                value: function() {
                    return this.meeting_id
                }
            }, {
                key: "setRoomType",
                value: function(e) {
                    e === S.RoomType.MEETING_ROOM || e === S.RoomType.WAITING_ROOM || e === S.RoomType.OUTSIDE ? this.room_type = e : this.logger.error("setRoomType", "invalid 'roomType' passed in: ".concat(e))
                }
            }, {
                key: "getReadableXmppRoomState",
                value: function() {
                    var e = this.getRoomType(),
                        t = "";
                    switch (e) {
                        case S.RoomType.MEETING_ROOM:
                            t = "in meeting";
                            break;
                        case S.RoomType.WAITING_ROOM:
                            t = "waiting room";
                            break;
                        case S.RoomType.OUTSIDE:
                            t = "outside";
                            break;
                        default:
                            t = "Unknown xmpp room type"
                    }
                    return "".concat(e, "(").concat(t, ")")
                }
            }, {
                key: "isInMeetingRoom",
                value: function() {
                    return this.room_type === S.RoomType.MEETING_ROOM
                }
            }, {
                key: "isInWaitingRoom",
                value: function() {
                    return this.room_type === S.RoomType.WAITING_ROOM
                }
            }, {
                key: "isInXmppRoom",
                value: function() {
                    return this.room_type !== S.RoomType.OUTSIDE
                }
            }, {
                key: "getRoomType",
                value: function() {
                    return this.room_type
                }
            }, {
                key: "setMediaRoomState",
                value: function(e) {
                    var t = S.MediaRoomState.getReadableState(this.media_room_state),
                        n = S.MediaRoomState.getReadableState(e);
                    this.media_room_state !== e ? (this.logger.report(1, "MeetingUserController", "media_room_state updated from ".concat(this.media_room_state, "(").concat(t, ") to ").concat(e, "(").concat(n, ")")), this.media_room_state = e) : this.logger.report(2, "MeetingUserController", "ignore to update media_room_state since it is as same as before: ".concat(e, "(").concat(n, ")"))
                }
            }, {
                key: "getMediaRoomState",
                value: function() {
                    return this.media_room_state
                }
            }, {
                key: "getReadableMediaRoomState",
                value: function() {
                    var e = this.getMediaRoomState();
                    return "".concat(e, "(").concat(S.MediaRoomState.getReadableState(e), ")")
                }
            }, {
                key: "isInMediaRoom",
                value: function() {
                    var e = this.getMediaRoomState();
                    return !(e === S.MediaRoomState.OUT || e === S.MediaRoomState.JOINING)
                }
            }, {
                key: "setMediaController",
                value: function(e) {
                    this.mediaController = e
                }
            }, {
                key: "getMediaController",
                value: function() {
                    return this.mediaController
                }
            }, {
                key: "setTurnAudioReason",
                value: function(e) {
                    e === S.SwitchReason.BYSELF || e === S.SwitchReason.BYHOST ? this.turnAudioReason = e : console.error("setTurnAudioReason is supposed to be passed in BYSELF or BYHOST, but got ".concat(e))
                }
            }, {
                key: "getTurnAudioReason",
                value: function() {
                    return this.turnAudioReason
                }
            }, {
                key: "setTurnVideoReason",
                value: function(e) {
                    e === S.SwitchReason.BYSELF || e === S.SwitchReason.BYHOST ? this.turnVideoReason = e : console.error("setTurnVideoReason is supposed to be passed in BYSELF or BYHOST, but got ".concat(e))
                }
            }, {
                key: "getTurnVideoReason",
                value: function() {
                    return this.turnVideoReason
                }
            }, {
                key: "setSelfNickname",
                value: function(e) {
                    this.nickname = e
                }
            }, {
                key: "isHost",
                value: function() {
                    var e = this.getSelfInfo();
                    return e ? 1 === parseInt(e.is_host) : (this.logger.error("MeetingUserController.isHost got self info for null!"), !1)
                }
            }, {
                key: "isMeetingAudioAllMuted",
                value: function() {
                    return this.muteAll
                }
            }, {
                key: "isMuteOnJoin",
                value: function() {
                    return this.muteOnJoin
                }
            }, {
                key: "isAllowUnmuteBySelf",
                value: function() {
                    return this.allowUnmuteBySelf
                }
            }, {
                key: "getIsAllowOpenVideo",
                value: function() {
                    return this.isAllowOpenVideo
                }
            }, {
                key: "setIsAllowOpenVideo",
                value: function(e) {
                    1 !== e && 2 !== e && this.logger.report(3, "setIsAllowOpenVideo", "[ASSERT] val must be either 1 or 2 for 'setIsAllowOpenVideo', but got: ".concat(e)), this.isAllowOpenVideo !== (1 === e) && (this.isAllowOpenVideo = 1 === e, this.logger.report(1, "setIsAllowOpenVideo", "isAllowOpenVideo changed to ".concat(this.isAllowOpenVideo ? "allow" : "disallow")))
                }
            }, {
                key: "isValidEnumOf",
                value: function(e, t) {
                    var n = !1;
                    for (var i in e) {
                        if (e[i] === t) {
                            n = !0;
                            break
                        }
                        e[i] == t && this.logger.report(2, "isValidEnumOf", "Although they are same after type conversion, but the type of given enum value '".concat(t, "'(type '").concat(h(t), "') is not as same as enum property '").concat(i, "' with value '").concat(e[i], "'(type '").concat(h(e[i]), "')."))
                    }
                    return n
                }
            }, {
                key: "getIsAllowRenaming",
                value: function() {
                    return this.isAllowRenaming
                }
            }, {
                key: "setIsAllowRenaming",
                value: function(e) {
                    this.isValidEnumOf(S.ERenaming, e) || this.logger.report(3, "setIsAllowRenaming", "[ASSERT] val is not valid: ".concat(e));
                    var t = e === S.ERenaming.Allow || e === S.ERenaming.DefaultAllow;
                    this.isAllowRenaming !== t && (this.isAllowRenaming = t, this.logger.report(1, "setIsAllowRenaming", "isAllowRenaming changed to ".concat(this.isAllowRenaming ? "allow" : "disallow")))
                }
            }, {
                key: "getIsWebinar",
                value: function() {
                    return this.is_webinar
                }
            }, {
                key: "setIsWebinar",
                value: function(e) {
                    this.is_webinar = e
                }
            }, {
                key: "getIsSpotlight",
                value: function() {
                    return this.isSpotlight
                }
            }, {
                key: "setIsSpotlight",
                value: function(e) {
                    1 !== e && 2 !== e && this.logger.report(3, "setIsSpotlight", "[ASSERT] val must be either 1 or 2 for 'setIsSpotlight', but got: ".concat(e)), this.isSpotlight !== (1 === e) && (this.isSpotlight = 1 === e, this.logger.report(1, "setIsSpotlight", "isSpotlight changed to ".concat(this.isSpotlight ? "becomes spotlight" : "spotlight cancelled")))
                }
            }, {
                key: "isEnableWatermark",
                value: function() {
                    return this.enableWatermark
                }
            }, {
                key: "isMultipleRowWatermark",
                value: function() {
                    return this.multipleRowWatermark
                }
            }, {
                key: "isMeetingLocked",
                value: function() {
                    return this.meetingLocked
                }
            }, {
                key: "isHideMeetingCodePassword",
                value: function() {
                    return this.hideMeetingCodePassword
                }
            }, {
                key: "isMeetingAbilityPstnOn",
                value: function() {
                    return this.meetingAbilityPstn
                }
            }, {
                key: "getCloudRecordingStatus",
                value: function() {
                    return this.cloud_recording_status
                }
            }, {
                key: "setCloudRecordingStatus",
                value: function(e) {
                    e === S.CloudRecordingStatus.STARTED && this.isCloudRecordingStarted() ? console.warn("unexpected cloud recording status: prev: start, curr: start") : e !== S.CloudRecordingStatus.PAUSED || this.isCloudRecordingStarted() || console.warn("unexpected cloud recording status: prev: ".concat(this.getCloudRecordingStatus(), ", curr: paused")), this.cloud_recording_status = e
                }
            }, {
                key: "getCloudRecordingCheckToken",
                value: function() {
                    return this.cloud_recording_check_token
                }
            }, {
                key: "setCloudRecordingCheckToken",
                value: function(e) {
                    this.cloud_recording_check_token = e
                }
            }, {
                key: "cloudRecordStateChange",
                value: function(e) {
                    var t = function(e) {
                        switch (e) {
                            case 0:
                                return "STOPPED";
                            case 1:
                                return "PREPARING";
                            case 2:
                                return "STARTED";
                            case 3:
                                return "PAUSED";
                            default:
                                return "UNKNOWN(".concat(e, ")")
                        }
                    };
                    console.info("cloud record state changed from ".concat(t(this.getCloudRecordingStatus()), " to: ").concat(t(e))), this.setCloudRecordingStatus(e)
                }
            }, {
                key: "isCloudRecordingStarted",
                value: function() {
                    return this.getCloudRecordingStatus() === S.CloudRecordingStatus.STARTED
                }
            }, {
                key: "isCloudRecordingPaused",
                value: function() {
                    return this.getCloudRecordingStatus() === S.CloudRecordingStatus.PAUSED
                }
            }, {
                key: "isCloudRecordingStopped",
                value: function() {
                    return this.getCloudRecordingStatus() === S.CloudRecordingStatus.STOPPED
                }
            }, {
                key: "reset",
                value: function() {
                    this.logger.report(1, "meeting_user_controller", "reset"), this.meeting_id = 0, this.selfId = null, this.muteAll = !1, this.muteOnJoin = !1, this.allowUnmuteBySelf = !1, this.enableWatermark = !1, this.multipleRowWatermark = !1, this.meetingLocked = !1, this.hideMeetingCodePassword = !1, this.userMap = new Map, this.associatorMap = new Map, this.inviteMap = new Map, this.isDoingSummary = !1, this.setRoomType(S.RoomType.OUTSIDE), this.turnVideoReason = S.SwitchReason.BYSELF, this.turnAudioReason = S.SwitchReason.BYSELF, this.setCloudRecordingStatus(S.CloudRecordingStatus.STOPPED), this.setCloudRecordingCheckToken(""), this.stopRecorder()
                }
            }, {
                key: "isInMeeting",
                value: function() {
                    return this.meeting_id > 0
                }
            }, {
                key: "getUserInfoList",
                value: function() {
                    var e, t = [],
                        n = o(this.userMap.values());
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value,
                                r = JSON.parse(JSON.stringify(i));
                            "boolean" != typeof r.isSelf && (r.isSelf = this.formKeyById(r.id) === this.selfKey), t.push(JSON.parse(JSON.stringify(r)))
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return t
                }
            }, {
                key: "getInviteInfoList",
                value: function() {
                    var e, t = [],
                        n = o(this.inviteMap.keys());
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value,
                                r = JSON.parse(JSON.stringify(this.inviteMap.get(i)));
                            r.invite_id = i, t.push(r)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return t
                }
            }, {
                key: "formKeyById",
                value: function(e) {
                    return e && e.unique_id || this.logger.report(3, "error", "[ASSERT] property 'unique_id' is missing in 'id'. id: ".concat(JSON.stringify(e))), e.unique_id
                }
            }, {
                key: "getAVRoomUserId",
                value: function(e) {
                    return [e.instance_id, e.uid, e.app_id].join("_")
                }
            }, {
                key: "getUserById",
                value: function(e) {
                    var t = this.formKeyById(e),
                        n = null;
                    return this.userMap.has(t) && (n = this.userMap.get(t)), n
                }
            }, {
                key: "getUserListById",
                value: function(e) {
                    var t, n = [],
                        i = o(this.userMap.values());
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var r = t.value;
                            r.id.app_id === e.app_id && r.id.uid === e.uid && r.id.user_type === e.user_type && n.push(r)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return n
                }
            }, {
                key: "getSelfInfo",
                value: function() {
                    var e = this.getSelfId();
                    return e ? this.getUserById(e) : null
                }
            }, {
                key: "isSelf",
                value: function(e) {
                    var t, n = e.id.unique_id;
                    if (!n) return this.logger.report(3, "isSelf", "give user lack of 'unique_id'. user: ".concat(JSON.stringify(e))), !1;
                    var i = null === (t = this.getSelfId()) || void 0 === t ? void 0 : t.unique_id;
                    return i ? n === i : (this.logger.report(3, "isSelf", "selfInfo lack of 'unique_id'. mySelf: ".concat(JSON.stringify(this.getSelfId()))), !1)
                }
            }, {
                key: "filterMeetingIdNotMatch",
                value: function(e) {
                    var t = this;
                    return function(n, i) {
                        var r = i && (i.meeting_id || i.meetingId);
                        void 0 !== r && t.getMeetingId() !== r ? t.logger.report(2, "in_meeting", "data.meetingId(".concat(r, ") 与当前(").concat(t.getMeetingId(), ")不一致.\n          data: ").concat(JSON.stringify(i), ",\n         ")) : e(n, i)
                    }
                }
            }, {
                key: "listenEvent",
                value: function() {
                    var e = {
                        user_join: this.onUserJoinCallBack,
                        user_leave: this.onUserLeaveCallBack,
                        user_update: this.onUserUpdateCallBack,
                        user_kicked: this.onUserKickedCallBack,
                        user_offline: this.onUserOfflineCallBack,
                        hands_up: this.onHandsUpCompleteCallBack,
                        notify_hands_up_result: this.onNotifyHandsUpResult,
                        mute_audio: this.onMuteAudioCompleteCallBack,
                        mute_all_audio: this.onMuteAllAudioCompleteCallBack,
                        mute_video: this.onMuteVideoCompleteCallBack,
                        mute_all_video: this.onMuteAllVideoCompleteCallBack,
                        handle_hands_up: this.onHandleHandsUpCallBack,
                        user_status: this.onUpdateUserInfoCallBack,
                        host_status: this.onHostStatusPush,
                        waiting_user_status: this.onWaitingUserStatusPush,
                        switch_user_role: this.onSwitchUserRolePush,
                        change_host: this.onChangeHostCompleteCallBack,
                        leave_meeting: this.onLeaveMeetingCallBack,
                        notify_hands_up_push: this.onNotifyHandsupPushCallBack,
                        turn_audio: this.onTurnAudioCallBack,
                        turn_video: this.onTurnVideoCallBack,
                        change_host_push: this.onChangeHostPush,
                        change_co_host_push: this.onChangeCoHostPush,
                        modify_user_info: this.onModifyUserInfoCallBack,
                        kickout: this.onKickoutCallBack,
                        kicked_out: this.onKickedOutCallBack,
                        logout: this.onLogout,
                        summary_request: this.onSummaryRequestCallBack,
                        summary_audio_upload_push: this.onSummaryAudioUploadPush,
                        summary_message_push: this.onSummaryMessagePush,
                        on_invite_event_push: this.onInviteEventPush,
                        query_meeting_settings: this.onMeetingSettings,
                        breakout_room_started: this.onBreakoutRoomCallBack,
                        query_ui_config: this.onMeetingUiCfg,
                        notify_meeting_settings_update: this.onNotifyMeetingSettingsUpdate,
                        notify_switch_media_stream: this.onNotifySwitchMediaStream,
                        notify_join_audio_mix_user_info: this.onNotifyJoinAudioMixUserInfo,
                        meeting_will_limited: this.onMeetingWillLimited,
                        refresh_media_auth_info: this.onRefreshMediaAuthInfo,
                        query_local_permission: this.onQueryLocalPermission,
                        switch_local_permission: this.onSwitchLocalPermission,
                        cloud_record_state: this.onCloudRecordStatePush,
                        cloud_record_stop: this.onCloudRecordStopCallBack,
                        cloud_record_start: this.onCloudRecordStartCallBack,
                        cloud_record_pause: this.onCloudRecordPauseCallBack,
                        cloud_record_resume: this.onCloudRecordResumeCallBack,
                        query_record_storage: this.onQueryCloudRecordStorageCallBack,
                        query_cloud_record_state: this.onQueryCloudRecordStateCallBack,
                        report_media_stream_status: this.onReportMediaStreamStatusCallBack,
                        report_media_stream_status_push: this.onReportMediaStreamStatusPush,
                        member_raise_hand: this.memberRaiseHandComplete,
                        handle_apply_permission: this.handleApplyPermissionComplete,
                        put_handsdown_with_user: this.putHandsdownComplete,
                        notify_raise_hand_list_changed: this.onNotifyRaiseHandListChangedPush,
                        notify_user_be_put_handsdown: this.onNotifyUserBePutHandsdownPush,
                        put_handsdown_with_role_group: this.putHandsDownAgainstGivenRoleGroupComplete,
                        notify_role_group_be_put_handsdown: this.onNotifyRoleGroupBePutHandsdownPush,
                        get_webinar_participants_summary: this.onQueryParticipantsSummaryCallBack,
                        apply_permission: this.onApplyPermissionCallBack,
                        notify_permission_result: this.onNotifyPermissionResPush,
                        directed_push: this.onDirectedPush,
                        query_user_sig: this.onQueryUserSigCallBack,
                        meeting_notice: this.onMeetingNotice
                    };
                    for (var t in e) this.xmpp_service.registerEventHandler(t, this.filterMeetingIdNotMatch(e[t]));
                    this.rtc_service.registerEventHandler("rtc_web_socket_close", this.onRTCWebSocketClose), this.rtc_service.registerEventHandler("rtc_relay_timeout", this.onRTCRelayTimeout), this.rtc_service.registerEventHandler("rtc_kick_out", this.onRTCKickOut)
                }
            }, {
                key: "updateUserInfo",
                value: function(e, t) {
                    var n = {
                        meeting_id: this.meeting_id,
                        type: t
                    };
                    if (e.hasOwnProperty("video_on") && (n.video_on = e.video_on), e.hasOwnProperty("video_reason") && (n.video_reason = e.video_reason), e.hasOwnProperty("audio_on") && (n.audio_on = e.audio_on, "1" === n.audio_on ? this.saved_user_audio_switch = !0 : "0" === n.audio_on && (this.saved_user_audio_switch = !1)), e.hasOwnProperty("audio_reason") && (n.audio_reason = e.audio_reason), e.hasOwnProperty("share_on") && (n.share_on = e.share_on), e.hasOwnProperty("share_reason") && (n.share_reason = e.share_reason), e.hasOwnProperty("web_share_on") && (n.web_share_on = e.web_share_on), e.hasOwnProperty("web_share_reason") && (n.web_share_reason = e.web_share_reason), e.hasOwnProperty("nickname")) n.nickname = e.nickname;
                    else {
                        var i = this.getSelfInfo();
                        if (null === i) return void this.logger.error("MeetingUserController.updateUserInfo: failed to getSelfInfo()!");
                        n.nickname = i.nickname
                    }
                    e.hasOwnProperty("avatar_type") && (n.avatar_type = e.avatar_type), e.hasOwnProperty("user_action") && (n.user_action = e.user_action), e.hasOwnProperty("local_record_on") && (n.local_record_on = e.local_record_on), e.hasOwnProperty("access_type") && (n.access_type = e.access_type), e.hasOwnProperty("scenes_bits") && (n.scenes_bits = e.scenes_bits), 1 === t ? e.hasOwnProperty("customer_data") ? (n.customer_data = e.customer_data, this.customer_data = e.customer_data) : this.customer_data = "" : 2 !== t && 4 !== t || this.customer_data && (n.customer_data = this.customer_data, this.customer_data = ""), this.xmpp_service.userStatusRequest(n)
                }
            }, {
                key: "reportMediaStreamStatus",
                value: function(e) {
                    var t = (e || {}).network_level;
                    this.xmpp_service.reportMediaStreamStatus({
                        meeting_id: this.meeting_id,
                        network_level: t
                    })
                }
            }, {
                key: "handsUp",
                value: function(e, t) {
                    return this.isInMeeting() ? (this.logger.report(1, "meeting_user_controller", "raise hand, meeting_id=".concat(this.meeting_id, ", isUp=").concat(e, ", permissionList="), t), this.xmpp_service.handsUpRequest(this.meeting_id, e ? 1 : 0, t), !0) : (this.logger.error("handsUp failed: not in meeting"), !1)
                }
            }, {
                key: "turnAudio",
                value: function(e) {
                    var t = e.on,
                        n = e.succCallback,
                        i = void 0 === n ? null : n,
                        r = e.failCallback,
                        o = void 0 === r ? null : r,
                        s = e.needRefreshToken,
                        a = void 0 === s ? 0 : s,
                        u = e.reason,
                        c = void 0 === u ? S.SwitchReason.BYSELF : u,
                        l = e.requestUpStreamToken,
                        d = void 0 === l ? "" : l;
                    if (this.logger.report(1, "meeting_user_controller", "user turn audio ".concat(t ? "on" : "off", "(").concat(c == S.SwitchReason.BYSELF ? "BYSELF" : "BYHOST", ")")), this.setTurnAudioReason(c), t) this.xmpp_service.turnAudioRequest({
                        meeting_id: this.meeting_id,
                        succCallback: i,
                        failCallback: o,
                        needRefreshToken: a,
                        requestUpStreamToken: d
                    });
                    else if (this.saved_user_audio_switch = !1, this.mutedBySelf = !0, "function" == typeof i) i({
                        status: "off"
                    });
                    else {
                        this.getEventHandler("turn_audio")(!0, {
                            status: "off"
                        })
                    }
                }
            }, {
                key: "turnVideo",
                value: function(e) {
                    var t = e.on,
                        n = e.reason,
                        i = void 0 === n ? S.SwitchReason.BYSELF : n,
                        r = e.needRefreshToken,
                        o = void 0 === r ? 0 : r,
                        s = e.requestUpStreamToken,
                        a = void 0 === s ? "" : s;
                    if (this.logger.report(1, "meeting_user_controller", "user turn video ".concat(t ? "on" : "off", "(").concat(i == S.SwitchReason.BYSELF ? "BYSELF" : "BYHOST", ")")), this.setTurnVideoReason(i), t) {
                        if (!this.getIsAllowOpenVideo()) return this.logger.report(1, "cannot turn on video in this meeting."), void this.getEventHandler("turn_video")(!1, {
                            errmsg: this.getIsWebinar() ? "主持人不允许嘉宾开启视频" : "主持人不允许成员开启视频"
                        });
                        this.xmpp_service.turnVideoRequest({
                            meeting_id: this.meeting_id,
                            needRefreshToken: o,
                            requestUpStreamToken: a
                        })
                    } else {
                        this.saved_user_video_switch = !1, this.updateUserInfo({
                            video_on: "0",
                            video_reason: i
                        }, S.UserState.UPDATE), this.getEventHandler("turn_video")(!0, {
                            status: "off"
                        })
                    }
                }
            }, {
                key: "applyPermission",
                value: function(e) {
                    this.xmpp_service.applyPermission(r(r({}, e), {}, {
                        meeting_id: this.meeting_id
                    }))
                }
            }, {
                key: "handleApplyPermissionComplete",
                value: function(e, t) {
                    this.getEventHandler("handle_apply_permission")(e, t)
                }
            }, {
                key: "raiseHand",
                value: function(e) {
                    this.logger.report(1, "meeting_user_controller", "webinar user requests hands ".concat(e ? "up" : "down")), this.xmpp_service.raiseHand({
                        meeting_id: this.meeting_id,
                        raise_hand: e ? 1 : 0
                    })
                }
            }, {
                key: "memberRaiseHandComplete",
                value: function(e, t) {
                    this.getEventHandler("member_raise_hand")(e, t)
                }
            }, {
                key: "putHandsdown",
                value: function(e) {
                    this.logger.report(1, "meeting_user_controller", "webinar user requests hands ".concat(isUp ? "up" : "down")), this.xmpp_service.putHandsDown({
                        meeting_id: this.meeting_id,
                        user: e,
                        reason: {
                            code: 1,
                            detail: ""
                        }
                    })
                }
            }, {
                key: "putHandsdownComplete",
                value: function(e, t) {
                    this.getEventHandler("put_handsdown_with_user")(e, t)
                }
            }, {
                key: "putHandsdownFor",
                value: function(e) {
                    var t = this;
                    this.logger.report(1, "meeting_user_controller", "webinar host requests put the role group(".concat(function(e) {
                        var n = ["普通会议的角色群体", "webinar观众群体", "webinar嘉宾群体"];
                        7 < e && t.logger.report(3, "meeting_user_controller", "webinar host requests put the role group(".concat(e, ") handsdown. It must NOT be greater than 7."));
                        for (var i = (7 & e).toString(2).padStart(n.length, "0"), r = [], o = 0; o < n.length; o++) "1" === i[o] && r.push(n[o]);
                        return r.join(", ")
                    }(e), ") handsdown.")), this.xmpp_service.putHandsDownAgainstGivenRoleGroup({
                        meeting_id: this.meeting_id,
                        role_group_type: e
                    })
                }
            }, {
                key: "putHandsDownAgainstGivenRoleGroupComplete",
                value: function(e, t) {
                    this.getEventHandler("put_handsdown_with_role_group")(e, t)
                }
            }, {
                key: "onNotifyRoleGroupBePutHandsdownPush",
                value: function(e, t) {
                    this.getEventHandler("notify_role_group_be_put_handsdown")(e, t)
                }
            }, {
                key: "onNotifyPermissionResPush",
                value: function(e, t) {
                    this.getEventHandler("notify_permission_result")(e, t)
                }
            }, {
                key: "onDirectedPush",
                value: function(e, t) {
                    this.getEventHandler("directed_push")(e, t)
                }
            }, {
                key: "queryParticipantsSummary",
                value: function() {
                    this.xmpp_service.queryParticipantsSummary(this.meeting_id)
                }
            }, {
                key: "onQueryParticipantsSummaryCallBack",
                value: function(e, t) {
                    this.getEventHandler("get_webinar_participants_summary")(e, t)
                }
            }, {
                key: "onApplyPermissionCallBack",
                value: function(e, t) {
                    this.getEventHandler("apply_permission")(e, t)
                }
            }, {
                key: "applyPermissionWebinar",
                value: function(e) {
                    e.meeting_id = this.meeting_id, this.xmpp_service.applyPermissionWebinar(e)
                }
            }, {
                key: "queryCloudRecordState",
                value: function() {
                    this.xmpp_service.queryCloudRecordState(this.meeting_id)
                }
            }, {
                key: "onQueryCloudRecordStateCallBack",
                value: function(e, t) {
                    console.info("meeting_user_controller", "onQueryCloudRecordStateCallBack rep: ", e, t);
                    var n = this.getEventHandler("query_cloud_record_state");
                    e ? (this.cloudRecordStateChange(t.state), n(e, t)) : n(e, t)
                }
            }, {
                key: "onReportMediaStreamStatusCallBack",
                value: function(e, t) {
                    this.getEventHandler("report_media_stream_status")(e, t)
                }
            }, {
                key: "onReportMediaStreamStatusPush",
                value: function(e, t) {
                    this.getEventHandler("report_media_stream_status_push")(e, t)
                }
            }, {
                key: "onNotifyRaiseHandListChangedPush",
                value: function(e, t) {
                    this.getEventHandler("notify_raise_hand_list_changed")(e, t)
                }
            }, {
                key: "onNotifyUserBePutHandsdownPush",
                value: function(e, t) {
                    this.getEventHandler("notify_user_be_put_handsdown")(e, t)
                }
            }, {
                key: "queryRecordStorage",
                value: function() {
                    this.xmpp_service.queryRecordStorage(this.meeting_id)
                }
            }, {
                key: "onQueryCloudRecordStorageCallBack",
                value: function(e, t) {
                    console.info("meeting_user_controller", "onQueryCloudRecordStorageCallBack rep: ", e, t);
                    var n = this.getEventHandler("query_record_storage");
                    "function" != typeof n && (console.warn("did you miss to register 'query_record_storage' to meeting_user_controller?"), n = function() {}), n(!(!e || !t), t)
                }
            }, {
                key: "startCloudRecording",
                value: function() {
                    var e = this.getEventHandler("cloud_record_start");
                    if ("function" != typeof e && (console.warn("did you miss to register 'cloud_record_start' to meeting_user_controller?"), e = function() {}), !this.isCloudRecordingStopped()) return console.warn("start cloud record failed: status should be stopped(0) but is ".concat(this.getCloudRecordingStatus())), void e(!1, {
                        code: -1,
                        msg: "无法启动云录制，因为云录制当前状态不正确。"
                    });
                    this.operateCloudRecording(S.CloudRecordAction.START)
                }
            }, {
                key: "confirmStartCloudRecording",
                value: function() {
                    var e = this.getEventHandler("cloud_record_start");
                    if ("function" != typeof e && (console.warn("did you miss to register 'cloud_record_start' to meeting_user_controller?"), e = function() {}), !this.getCloudRecordingCheckToken()) return console.warn("you should call 'startCloudRecording' directly"), void e(!1, {
                        code: -2,
                        msg: "确认启动云录制失败，请直接启动云录制。"
                    });
                    this.operateCloudRecording(S.CloudRecordAction.CONFIRM_START)
                }
            }, {
                key: "pauseCloudRecording",
                value: function() {
                    var e = this.getEventHandler("cloud_record_pause");
                    if ("function" != typeof e && (console.warn("did you miss to register 'cloud_record_pause' to meeting_user_controller?"), e = function() {}), !this.isCloudRecordingStarted()) return console.warn("pause cloud record failed: status should be started(2) but is ".concat(this.getCloudRecordingStatus())), void e(!1, "无法暂停云录制，因为当前云录制并未在进行中。");
                    this.operateCloudRecording(S.CloudRecordAction.PAUSE)
                }
            }, {
                key: "resumeCloudRecording",
                value: function() {
                    var e = this.getEventHandler("cloud_record_resume");
                    if ("function" != typeof e && (console.warn("did you miss to register 'cloud_record_resume' to meeting_user_controller?"), e = function() {}), !this.isCloudRecordingPaused()) return console.warn("resume cloud record failed: status should be paused(3) but is ".concat(this.getCloudRecordingStatus())), void e(!1, "无法恢复云录制，因为当前云录制并未暂停。");
                    this.operateCloudRecording(S.CloudRecordAction.RESUME)
                }
            }, {
                key: "stopCloudRecording",
                value: function() {
                    var e = this.getEventHandler("cloud_record_stop");
                    "function" != typeof e && (console.warn("did you miss to register 'cloud_record_stop' to meeting_user_controller?"), e = function() {}), this.operateCloudRecording(S.CloudRecordAction.STOP)
                }
            }, {
                key: "operateCloudRecording",
                value: function(e) {
                    var t = {
                        meeting_id: this.meeting_id,
                        type: e
                    };
                    e === S.CloudRecordAction.CONFIRM_START && (t.check_token = this.getCloudRecordingCheckToken(), t.type = S.CloudRecordAction.START, this.setCloudRecordingCheckToken("")), this.xmpp_service.operateCloudRecording(t)
                }
            }, {
                key: "onCloudRecordStartCallBack",
                value: function(e, t) {
                    var n = (t || {}).token,
                        i = void 0 === n ? "" : n;
                    i && (this.setCloudRecordingCheckToken(i), delete t.token), this.onCloudRecordOperateCallBack(e, t, S.CloudRecordAction.START)
                }
            }, {
                key: "onCloudRecordStopCallBack",
                value: function(e, t) {
                    this.onCloudRecordOperateCallBack(e, t, S.CloudRecordAction.STOP)
                }
            }, {
                key: "onCloudRecordPauseCallBack",
                value: function(e, t) {
                    this.onCloudRecordOperateCallBack(e, t, S.CloudRecordAction.PAUSE)
                }
            }, {
                key: "onCloudRecordResumeCallBack",
                value: function(e, t) {
                    this.onCloudRecordOperateCallBack(e, t, S.CloudRecordAction.RESUME)
                }
            }, {
                key: "onCloudRecordOperateCallBack",
                value: function(e, t, n) {
                    var i = "cloud_record_".concat(this.getStrCloudRecordAction(n));
                    console.info("meeting_user_controller", "".concat(i, " rep: "), e, t);
                    var r = this.getEventHandler(i);
                    if ("function" != typeof r && (console.warn("did you miss to register ".concat(i, " to meeting_user_controller?")), r = function() {}), e && t) return t.meeting_id != this.meeting_id ? (console.info("MeetingUserController  DIFFERENT meeting_id! data.meeting_id:", t.meeting_id, "self.meeting_id:", this.meeting_id), void r(!1, t)) : void r(!0, t);
                    r(!1, t)
                }
            }, {
                key: "getStrCloudRecordAction",
                value: function(e) {
                    var t = "";
                    switch (e) {
                        case S.CloudRecordAction.START:
                            t = "start";
                            break;
                        case S.CloudRecordAction.STOP:
                            t = "stop";
                            break;
                        case S.CloudRecordAction.PAUSE:
                            t = "pause";
                            break;
                        case S.CloudRecordAction.RESUME:
                            t = "resume";
                            break;
                        default:
                            console.error("unexpected action passed into getStrCloudRecordAction: ".concat(e))
                    }
                    return t
                }
            }, {
                key: "leaveMediaRoom",
                value: function() {
                    var e = l(c.mark((function e() {
                        var t, n = arguments;
                        return c.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, this.isInMediaRoom()) {
                                        e.next = 4;
                                        break
                                    }
                                    return this.logger.report(1, "MeetingUserController", "not in media room, ignore to send user_leave.\n        xmpp room type: ".concat(this.getReadableXmppRoomState(), "\n        media room state: ").concat(this.getReadableMediaRoomState(), ")\n      ")), e.abrupt("return");
                                case 4:
                                    return this.isInMeetingRoom() || this.logger.report(3, "MeetingUserController", "[ASSERT] only meeting room could have media room running. But current states are:\n        xmpp room type: ".concat(this.getReadableXmppRoomState(), "\n        media room state: ").concat(this.getReadableMediaRoomState(), ")\n      ")), this.getMeetingId() || this.logger.report(3, "MeetingUserController", "[ASSERT] cannot send user_leave since meeting_id is invalid"), e.prev = 6, this.setMediaRoomState(S.MediaRoomState.LEAVING), e.next = 10, this.getMediaController().leave();
                                case 10:
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(6), this.logger.report(2, "MeetingUserController", "Failed to leave media room: ".concat((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || "unknown"));
                                case 15:
                                    return e.prev = 15, this.setMediaRoomState(S.MediaRoomState.OUT), this.setMediaController(null), e.finish(15);
                                case 19:
                                    if (this.isInMeeting()) {
                                        e.next = 22;
                                        break
                                    }
                                    return this.logger.report(3, "MeetingUserController", "[ASSERT] User isn't in meeting.\n        xmpp room type: ".concat(this.getReadableXmppRoomState(), "\n        media room state: ").concat(this.getReadableMediaRoomState(), ")\n      ")), e.abrupt("return");
                                case 22:
                                    this.xmpp_service.sendUserStatusLeave(r({
                                        meeting_id: this.meeting_id
                                    }, t)).catch((function() {}));
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [6, 12, 15, 19]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "leaveMeeting",
                value: function(e) {
                    this.room_type !== S.RoomType.MEETING_ROOM && this.room_type !== S.RoomType.WAITING_ROOM && this.logger.error("leaveMeeting", "invalid state of 'room_type': ".concat(this.room_type));
                    var t = r(r({}, e), {}, {
                        meeting_id: this.meeting_id,
                        room_type: this.room_type
                    });
                    return this.xmpp_service.leaveMeetingRequest(t), !0
                }
            }, {
                key: "leaveMeetingFully",
                value: function() {
                    var e = l(c.mark((function e(t) {
                        return c.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.leaveMediaRoom(t);
                                case 2:
                                    this.leaveXmppRoom(t);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "leaveXmppRoom",
                value: function() {
                    var e = l(c.mark((function e(t) {
                        return c.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.isInMeeting()) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.logger.report(3, "assert", "current is not in meeting, why did you call leaveXmppRoom?"), e.abrupt("return");
                                case 3:
                                    if (this.isInXmppRoom()) {
                                        e.next = 6;
                                        break
                                    }
                                    return this.logger.report(3, "assert", "meeting id is valid but meeting state is outside? Please file this bug.\n        meeting_id: ".concat(this.getMeetingId(), "\n        xmpp room state: ").concat(this.getReadableXmppRoomState(), "\n      ")), e.abrupt("return");
                                case 6:
                                    try {
                                        this.xmpp_service.sendLeave(r({
                                            meeting_id: this.meeting_id,
                                            room_type: this.room_type,
                                            reason: S.LeaveReason.SELF
                                        }, t))
                                    } catch (e) {
                                        this.logger.report(3, "assert", "send xmpp leave failed: ".concat(JSON.stringify(e)))
                                    }
                                    this.stopMeetingPing(), this.reset();
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "backToWaitingRoom",
                value: function() {
                    this.logger.report(3, "assert", 'do not call "backToWaitingRoom" anymore.')
                }
            }, {
                key: "updateAccessType",
                value: function(e) {
                    0 !== e && 1 !== e && this.logger.warn("updateAccessType: 'accessType' should be either 0 or 1, but got: ".concat(e, ".")), this.logger.report(1, "in_meeting", "updateAccessType to ".concat(0 === e ? "DC" : "OC")), this.updateUserInfo({
                        access_type: e
                    }, S.UserState.UPDATE)
                }
            }, {
                key: "handleHandsUpRequest",
                value: function(e, t, n) {
                    return this.logger.report(1, "meeting_user_controller", "handle hands up request, account=", e, " req_type=".concat(t, ", is_grant=").concat(n)), this.xmpp_service.handleHandsUpRequest(this.meeting_id, e, t, n)
                }
            }, {
                key: "changeHost",
                value: function(e) {
                    return this.isInMeeting() ? this.isHost() ? (this.xmpp_service.changeHostRequest(this.meeting_id, e), !0) : (this.logger.error("only host can do changeHost"), !1) : (this.logger.error("MUC.changeHost: not in meeting"), !1)
                }
            }, {
                key: "spotlightVideo",
                value: function(e) {
                    return this.isInMeeting() ? this.isHost() ? (this.xmpp_service.setVideoLayoutRequest(), !0) : (this.logger.error("only host can do spotlightVideo"), !1) : (this.logger.error("not in meeting"), !1)
                }
            }, {
                key: "muteAudio",
                value: function(e, t) {
                    return this.isHost() ? void 0 !== this.getUserById(e) && (this.xmpp_service.switchMediaPermissionRequest(e, this.meeting_id, S.MediaType.AUDIO, t ? 0 : 1, 0), !0) : (this.logger.error("only host can do this operation"), !1)
                }
            }, {
                key: "muteAllAudio",
                value: function(e) {
                    if (!this.isInMeeting()) return this.logger.error("not in meeting"), !1;
                    if (!this.isHost()) return this.logger.error("only host can do this operation"), !1;
                    var t = this.getSelfInfo();
                    return this.xmpp_service.switchMediaPermissionRequest(t.id, this.meeting_id, S.MediaType.AUDIO, e ? 0 : 1, 1), this.muteAll = e, !0
                }
            }, {
                key: "muteVideo",
                value: function(e, t) {
                    return this.isInMeeting() ? this.isHost() ? void 0 !== this.getUserById(e) && (this.xmpp_service.switchMediaPermissionRequest(e, this.meeting_id, S.MediaType.VIDEO, t ? 0 : 1, 0), !0) : (this.logger.error("only host can do this operation"), !1) : (this.logger.error("not in meeting"), !1)
                }
            }, {
                key: "muteAllVideo",
                value: function(e) {
                    if (!this.isInMeeting()) return this.logger.error("not in meeting"), !1;
                    if (!this.isHost()) return this.logger.error("only host can do this operation"), !1;
                    var t = this.getSelfInfo();
                    return this.xmpp_service.switchMediaPermissionRequest(t.id, this.meeting_id, S.MediaType.VIDEO, e ? 0 : 1, 1), !0
                }
            }, {
                key: "updateVideoStatus",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.SwitchReason.BYSELF;
                    if ("boolean" != typeof e) throw new Error('parameter "on" must be boolean!');
                    this.setTurnVideoReason(t), this.updateUserInfo({
                        video_on: e ? "1" : "0",
                        video_reason: t
                    }, S.UserState.UPDATE)
                }
            }, {
                key: "updateAudioStatus",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.SwitchReason.BYSELF;
                    if ("boolean" != typeof e) throw new Error('parameter "on" must be boolean!');
                    this.setTurnAudioReason(t), this.updateUserInfo({
                        audio_on: e ? "1" : "0",
                        audio_reason: t
                    }, S.UserState.UPDATE)
                }
            }, {
                key: "modifyNickname",
                value: function(e, t) {
                    this.xmpp_service.modifyNicknameRequest(this.meeting_id, e, t, this.getFromType())
                }
            }, {
                key: "getFromType",
                value: function() {
                    return this.isInMeetingRoom() ? S.ModifyUserInfoScene.Meeting_Room : this.isInWaitingRoom() ? S.ModifyUserInfoScene.Waiting_Room : (this.logger.report(3, "getFromType", "invalid meeting state: ".concat(this.getReadableXmppRoomState())), S.ModifyUserInfoScene.Meeting_Room)
                }
            }, {
                key: "kickout",
                value: function(e) {
                    this.xmpp_service.kickoutRequest(this.meeting_id, [e], 1)
                }
            }, {
                key: "startSummary",
                value: function() {
                    this.isDoingSummary || (this.isDoingSummary = !0, this.xmpp_service.summaryRequest(this.meeting_id, "start"))
                }
            }, {
                key: "stopSummary",
                value: function() {
                    this.isDoingSummary && this.xmpp_service.summaryRequest(this.meeting_id, "stop")
                }
            }, {
                key: "invite",
                value: function(e, t) {
                    4 !== e.length && 5 !== e.length || (e = "0086075586013388-".concat(e)), 0 !== e.search("0086") && (e = "0086".concat(e)), this.xmpp_service.inviteRequest(this.meeting_id, t, {
                        user_type: "2",
                        app_uid: e,
                        phone_number: e
                    })
                }
            }, {
                key: "cancelInvite",
                value: function(e) {
                    var t = this.inviteMap.get(e);
                    console.log("cancelInvite inviteInfo:", t), this.xmpp_service.cancelInviteRequest(this.meeting_id, t.invitee.phone_number, e)
                }
            }, {
                key: "queryUserStatus",
                value: function(e) {
                    this.xmpp_service.queryUserStatus(e)
                }
            }, {
                key: "queryMeetingSettings",
                value: function() {
                    this.xmpp_service.queryMeetingSettingsRequest(this.meeting_id)
                }
            }, {
                key: "queryMeetingUiCfg",
                value: function() {
                    this.xmpp_service.queryUiCfgRequest()
                }
            }, {
                key: "startMeetingPing",
                value: function(e) {
                    if (!this.isInMeeting()) throw new Error("can't start meeting ping if not in meeting");
                    if (0 !== e && 1 !== e) throw new Error("pingType must be specified either 0 or 1");
                    this.xmpp_service.startMeetingPing(this.meeting_id, e)
                }
            }, {
                key: "stopMeetingPing",
                value: function() {
                    this.xmpp_service.stopMeetingPing()
                }
            }, {
                key: "refreshMediaAuthInfo",
                value: function() {
                    this.xmpp_service.refreshMediaAuthInfo(this.meeting_id)
                }
            }, {
                key: "onRefreshMediaAuthInfo",
                value: function(e, t) {
                    this.logger.report(1, "in_meeting", "refresh_media_auth_info:", e, t), this.getEventHandler("refresh_media_auth_info")(e, t)
                }
            }, {
                key: "onQueryLocalPermission",
                value: function(e, t) {
                    this.logger.report(1, "in_meeting", "query_local_permission:", e, t), this.getEventHandler("query_local_permission")(e, t)
                }
            }, {
                key: "onSwitchLocalPermission",
                value: function(e, t) {
                    this.logger.report(1, "in_meeting", "switch_local_permission:", e, t), this.getEventHandler("switch_local_permission")(e, t)
                }
            }, {
                key: "onQueryUserStatusResponse",
                value: function(e, t) {
                    if (e) {
                        if ("object" === h(t.sender_data.queryParams) && Array.isArray(t.sender_data.queryParams.participation_status_list)) {
                            var n = t.sender_data.queryParams.participation_status_list;
                            n.sort();
                            if (function(e, t) {
                                    if (Array.isArray(e) && Array.isArray(t) && e.length === t.length) {
                                        for (var n = 0; n < e.length; ++n)
                                            if (e[n] !== t[n]) return !1;
                                        return !0
                                    }
                                    return !1
                                }([1, 6], n)) {
                                var i, r = o(t.user_list);
                                try {
                                    for (r.s(); !(i = r.n()).done;) {
                                        var s = i.value;
                                        if (s.participation_status != S.ParticipationStatus.HUNGUP || s.hangup_reason == S.HangupReason.DISACCEPT || s.hangup_reason == S.HangupReason.SYSTEM_HANGUP) {
                                            var a, u = o(this.inviteMap.keys());
                                            try {
                                                for (u.s(); !(a = u.n()).done;) {
                                                    var c = a.value;
                                                    this.inviteMap.get(c).invitee.phone_number === s.id.phone_number && this.inviteMap.delete(c)
                                                }
                                            } catch (e) {
                                                u.e(e)
                                            } finally {
                                                u.f()
                                            }
                                            this.inviteMap.set(s.invite_id, {
                                                invitee: s.id,
                                                inviter: s.inviter,
                                                nickname: s.nickname,
                                                invite_status: S.participationStatusToInviteStatus(s.participation_status)
                                            })
                                        }
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                this.getEventHandler("on_invitee_list")(!0, t)
                            }
                        }
                    }
                }
            }, {
                key: "onUserJoinCallBack",
                value: function(e, t) {
                    var n = this.getEventHandler("user_join");
                    if (e) {
                        t.user_list.sort((function(e) {
                            return e.associate_type === S.AssociateType.ASSOC_AUDIO_PSTN ? 1 : -1
                        }));
                        for (var i = t.user_list.length, r = 0; r < i; r++) {
                            var o = t.user_list[r],
                                s = this.formKeyById(o.id),
                                a = -1,
                                u = this.getUserById(o.id);
                            if (u && (a = u.members_seq, isNaN(a) && (this.logger.report(2, "meeting_user_controller", "[user_join]user who already existed should have contained a valid property named 'members_seq'. we set previous members_seq to -1 to make the new user_join affected. user:", u), a = -1)), isNaN(o.members_seq) && this.logger.report(2, "meeting_user_controller", "[user_join]user who is coming with user_join should have contained a valid property named 'members_seq'. But knut said on 21 Dec,2019 that maybe only the current user himself would like to contain this property in user_join push, the others wont. user:", o), a < 0 || !isNaN(o.members_seq) && a < o.members_seq) {
                                if (o.associate_type === S.AssociateType.ASSOC_AUDIO_PSTN) {
                                    var c = o.associator_id,
                                        l = this.formKeyById(c),
                                        d = this.userMap.get(l);
                                    d && (d.audio_on = o.audio_on, d.handsup = o.handsup, d.raise_hand = o.raise_hand, d.sub_associator = o.id), this.associatorMap.set(o.id.uid, l), this.logger.report(1, "meeting_user_controller", "".concat(o.uid, " join as associate of ").concat(c.uid));
                                    continue
                                }
                                o.keyString = s, o.isSelf = s === this.selfKey, o.online = !0, this.userMap.set(s, o)
                            }
                        }
                        n(e, t)
                    } else n(e, t)
                }
            }, {
                key: "onUserLeaveCallBack",
                value: function(e, t) {
                    this.logger.debug("MUC onUserLeaveCallBack!!");
                    var n = this.getEventHandler("user_leave");
                    if (e) {
                        for (var i = 0; i < t.user_list.length; i++) {
                            var r = t.user_list[i],
                                o = this.formKeyById(r.id);
                            this.userMap.delete(o), this.deleteAssociator(r.id)
                        }
                        n(e, t)
                    } else n(e, t)
                }
            }, {
                key: "onUserUpdateCallBack",
                value: function(e, t) {
                    var n = this.getEventHandler("user_update");
                    if (e) {
                        var i = function(e, t) {
                            for (var n = 0, i = ["audio_on", "audio_reason", "audio_pause", "handsup", "is_creator", "raise_hand", "is_host", "nickname", "share_on", "share_reason", "share_pause", "share_start_time", "allow_speak", "role_type", "video_on", "video_reason", "video_pause", "members_seq", "avatar_type", "avatar_token", "web_share_on", "web_share_reason"]; n < i.length; n++) {
                                var r = i[n];
                                t[r] && "" !== t[r] && (e[r] = t[r])
                            }
                            "" !== t.id.av_uid && (e.id.av_uid = t.id.av_uid)
                        };
                        t.user_list.sort((function(e) {
                            return e.associate_type === S.AssociateType.ASSOC_AUDIO_PSTN ? 1 : -1
                        }));
                        for (var r = t.user_list.length, o = 0; o < r; o++) {
                            var s = t.user_list[o],
                                a = this.getUserById(s.id);
                            if (a) {
                                var u = a.members_seq;
                                isNaN(u) && (this.logger.report(2, "meeting_user_controller", "[user_update]user who already existed should have contained a valid property named 'members_seq'. Perhaps it is caused by the first time he come with invalid 'members_seq' for the push 'user_join'(knut said that the others wont take the members_seq to the response against our join-meeting request, but the following who join meeting would).  user:", a), u = -1), isNaN(s.members_seq) && this.logger.report(3, "meeting_user_controller", "[user_update]user who is coming with user_update MUST have contained a valid property named 'members_seq'. user:", s), isNaN(u) || !isNaN(s.members_seq) && u < s.members_seq ? i(a, s) : this.logger.report(2, "meeting_user_controller", "[user_update]ignored because we are difficult to determine which one is more fresher for the previous and current one. current members_seq:", s.members_seq, ", previous members_seq:", u)
                            } else {
                                var c = this.formKeyById(s.id);
                                if (s.associate_type === S.AssociateType.ASSOC_AUDIO_PSTN) {
                                    var l = s.associator_id,
                                        d = this.formKeyById(l),
                                        h = this.userMap.get(d);
                                    h && (h.audio_on = s.audio_on, h.handsup = s.handsup, h.raise_hand = s.raise_hand, h.sub_associator = s.id), this.associatorMap.set(s.id.uid, d);
                                    continue
                                }
                                s.keyString = c, s.isSelf = c === this.selfKey, s.online = !0, this.userMap.set(c, s)
                            }
                        }
                        n(e, t)
                    } else n(e, t)
                }
            }, {
                key: "deleteAssociator",
                value: function(e) {
                    var t = this.associatorMap.get(e.uid);
                    if (t) {
                        var n = this.userMap.get(t);
                        n && (n.audio_on = "0", n.handsup = "0", n.raise_hand = "0", delete n.sub_associator), this.associatorMap.delete(e.uid)
                    }
                }
            }, {
                key: "onUserKickedCallBack",
                value: function(e, t) {
                    t && this.logger.report(1, "in_meeting", "user_kicked:", t);
                    var n = this.getEventHandler("user_kicked");
                    if (e) {
                        for (var i = 0; i < t.user_list.length; i++) {
                            var r = t.user_list[i],
                                o = this.formKeyById(r.id);
                            this.userMap.delete(o), this.deleteAssociator(r.id)
                        }
                        n(e, t)
                    } else n(e, t)
                }
            }, {
                key: "onUserOfflineCallBack",
                value: function(e, t) {
                    this.logger.report(1, "in_meeting", "user_offline:", e, t);
                    for (var n = 0; n < t.user_list.length; n++) {
                        var i = t.user_list[n],
                            r = this.getUserById(i.id);
                        r && (r.online = !1);
                        var o = this.formKeyById(i.id);
                        this.userMap.delete(o), this.deleteAssociator(i.id)
                    }
                    this.getEventHandler("user_offline")(e, t)
                }
            }, {
                key: "onChangeHostPush",
                value: function(e, t) {
                    var n = this.getEventHandler("change_host_push");
                    if (e) {
                        this.logger.report(1, "meeting_user_controller", "on push change_host:", t);
                        var i, r = o(this.userMap.values());
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var s = i.value;
                                s.is_host = "0", s.id.uid === t.host.uid && s.id.app_id === t.host.app_id && s.id.user_type === t.host.user_type && (s.is_host = "1")
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        var a = this.getSelfId();
                        a ? (a.uid === t.host.uid && a.app_id === t.host.app_id && (this.updateUserInfo({
                            audio_on: this.saved_user_audio_switch ? "1" : "0",
                            audio_reason: S.SwitchReason.BYSELF,
                            video_on: this.saved_user_video_switch ? "1" : "0",
                            video_reason: S.SwitchReason.BYSELF
                        }, S.UserState.UPDATE), this.handsUp(!1, [S.MediaType.AUDIO, S.MediaType.VIDEO])), n(e, t)) : this.logger.error("MUC.onChangeHostPush failed to get self id!")
                    } else n(e, t)
                }
            }, {
                key: "onHostStatusPush",
                value: function(e, t) {
                    var n = this.getEventHandler("host_status");
                    e ? (this.logger.report(1, "meeting_user_controller", "on push host_status:", t), n(e, t)) : n(e, t)
                }
            }, {
                key: "isEnterMeetingRoom",
                value: function(e) {
                    return e === S.EnterRoomType.MEMBER_MOVED_BY_HOST_FROM_WAITING_ROOM_TO_MEETING_ROOM
                }
            }, {
                key: "isLeaveWaitingRoom",
                value: function(e) {
                    return e === S.EnterRoomType.MEMBER_MOVED_BY_HOST_FROM_WAITING_ROOM_TO_OUTSIDE
                }
            }, {
                key: "isLeaveMeetingRoomToWaitingRoom",
                value: function(e) {
                    return e === S.EnterRoomType.MEMBER_MOVED_BY_HOST_FROM_MEETING_ROOM_TO_WAITING_ROOM
                }
            }, {
                key: "isMemberJoinedInWaitingRoom",
                value: function(e) {
                    return e === S.EnterRoomType.MEMBER_JOINED_IN_WAITING_ROOM
                }
            }, {
                key: "onWaitingUserStatusPush",
                value: function() {
                    var e = l(c.mark((function e(t, n) {
                        var i, r, o, s, a, u, l, d;
                        return c.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (i = "", t && null !== n) {
                                        e.next = 6;
                                        break
                                    }
                                    this.logger.report(3, "waiting_user_status", "timeout: ".concat(t, ", ").concat(JSON.stringify(n))), i = "waiting_user_status_timeout", e.next = 47;
                                    break;
                                case 6:
                                    if (!((n.list || []).length < 1)) {
                                        e.next = 11;
                                        break
                                    }
                                    this.logger.report(3, "waiting_user_status", "bad response: ".concat(t, ", ").concat(JSON.stringify(n))), i = "waiting_user_status_bad_response", e.next = 47;
                                    break;
                                case 11:
                                    if (r = n.list, o = r[0].enter_room_type, s = this.isEnterMeetingRoom(r[0].enter_room_type), a = this.isLeaveWaitingRoom(r[0].enter_room_type), u = this.isLeaveMeetingRoomToWaitingRoom(r[0].enter_room_type), l = this.isMemberJoinedInWaitingRoom(o), !s) {
                                        e.next = 22;
                                        break
                                    }
                                    this.logger.report(1, "waiting_user_status", "host invites me to join meeting room :)"), i = "waiting_user_status_join_from_waiting_room", e.next = 47;
                                    break;
                                case 22:
                                    if (!a) {
                                        e.next = 28;
                                        break
                                    }
                                    this.logger.report(1, "waiting_user_status", "host asks me to leave waiting room :("), i = "waiting_user_status_leave_from_waiting_room", this.leaveXmppRoom({
                                        reason: S.LeaveReason.KICKED_BY_HOST
                                    }), e.next = 47;
                                    break;
                                case 28:
                                    if (!u) {
                                        e.next = 37;
                                        break
                                    }
                                    return this.logger.report(1, "waiting_user_status", "host asks me to leave meeting room, back to waiting room :("), i = "waiting_user_status_leave_for_waiting_room", e.next = 33, this.leaveMediaRoom({
                                        user_action: 1
                                    });
                                case 33:
                                    this.room_type !== S.RoomType.MEETING_ROOM ? this.logger.report(3, "waiting_user_status", "it should be in meeting room, but current room type: ".concat(this.room_type)) : (this.setRoomType(S.RoomType.WAITING_ROOM), this.stopMeetingPing(), this.startMeetingPing(S.RoomType.WAITING_ROOM)), this.logger.report(1, "waiting_user_status", "user has been moved from meeting-room to waiting-room."), e.next = 47;
                                    break;
                                case 37:
                                    if (!l) {
                                        e.next = 46;
                                        break
                                    }
                                    if (d = n.list[0], this.isSelf(d)) {
                                        e.next = 41;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 41:
                                    n = d, i = "waiting_user_status_i_am_in", this.logger.report(1, "waiting_user_status", "member received s2c to determine his nickname in waiting room."), e.next = 47;
                                    break;
                                case 46:
                                    o === S.EnterRoomType.USER_STATUS_CHANGED_BY_SELF ? (i = "waiting_user_status_changed_by_self", n = n.list[0]) : o === S.EnterRoomType.USER_STATUS_CHANGED_BY_HOST ? (n = n.list[0], i = "waiting_user_status_changed_by_host") : (this.logger.report(3, "waiting_user_status", "unexpected 'enter_room_type' got: ".concat(r[0].enter_room_type)), i = "waiting_user_status_bad_response");
                                case 47:
                                    this.getEventHandler(i)(t, n);
                                case 49:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onSwitchUserRolePush",
                value: function(e, t) {
                    var n = this.getEventHandler("switch_user_role");
                    e ? (this.logger.report(1, "switch_user_role", "on push switch_user_role:", t), n(e, t)) : n(e, t)
                }
            }, {
                key: "onChangeCoHostPush",
                value: function(e, t) {
                    var n = this.getEventHandler("change_co_host_push");
                    if (e) {
                        this.logger.report(1, "meeting_user_controller", "on push change_co_host:", t);
                        var i, r = o(this.userMap.values());
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var s = i.value;
                                s.id.uid === t.host.uid && s.id.app_id === t.host.app_id && s.id.user_type === t.host.user_type && (s.role_type = "1" == t.host.assign ? "2" : "3")
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        var a = this.getSelfId();
                        a ? (a.uid === t.host.uid && a.app_id === t.host.app_id && (this.updateUserInfo({
                            audio_on: this.saved_user_audio_switch ? "1" : "0",
                            audio_reason: S.SwitchReason.BYSELF,
                            video_on: this.saved_user_video_switch ? "1" : "0",
                            video_reason: S.SwitchReason.BYSELF
                        }, S.UserState.UPDATE), this.handsUp(!1, [S.MediaType.AUDIO, S.MediaType.VIDEO])), n(e, t)) : this.logger.error("MUC.onChangeCoHostPush failed to get self id!")
                    } else n(e, t)
                }
            }, {
                key: "onSpotLightVideoChangedCallBack",
                value: function(e, t) {
                    this.getEventHandler("spot_light_video_changed")(e, t)
                }
            }, {
                key: "onHandsUpCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("hands_up_complete")(e, t)
                }
            }, {
                key: "onNotifyHandsUpResult",
                value: function(e, t) {
                    this.logger.report(1, "meeting_user_controller", "notify_hands_up_result:", t), this.getEventHandler("notify_hands_up_result")(e, t)
                }
            }, {
                key: "onChangeHostCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("change_host")(e, t)
                }
            }, {
                key: "onBreakoutRoomCallBack",
                value: function(e, t) {
                    this.getEventHandler("breakout_room_started")(e, t)
                }
            }, {
                key: "onRemoveUserCompleteCallBack",
                value: function(e, t) {}
            }, {
                key: "onSpotlightVideoCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("spot_light_video_changed")(e, t)
                }
            }, {
                key: "onMuteAudioCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("mute_audio_complete")(e, t)
                }
            }, {
                key: "onMuteAllAudioCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("mute_all_audio_complete")(e, t)
                }
            }, {
                key: "onHandleHandsUpCallBack",
                value: function(e, t) {
                    this.getEventHandler("handle_hands_up")(e, t)
                }
            }, {
                key: "onMuteVideoCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("mute_video_complete")(e, t)
                }
            }, {
                key: "onMuteAllVideoCompleteCallBack",
                value: function(e, t) {
                    this.getEventHandler("mute_all_video_complete")(e, t)
                }
            }, {
                key: "onUpdateUserInfoCallBack",
                value: function(e, t) {
                    this.getEventHandler("user_status")(e, t)
                }
            }, {
                key: "onModifyUserInfoCallBack",
                value: function(e, t) {
                    this.getEventHandler("modify_user_info")(e, t)
                }
            }, {
                key: "onLeaveMeetingCallBack",
                value: function(e, t) {
                    var n = this.getEventHandler("leave_meeting");
                    this.reset(), n(e, t), S.INSTANCE_ID === S.InstanceType.INSTANCE_WEB && this.rtc_service.leaveRoom()
                }
            }, {
                key: "onBackToWaitingRoomCallBack",
                value: function(e, t) {
                    this.logger.report(3, "assert", "should not reach here anymore")
                }
            }, {
                key: "onKickoutCallBack",
                value: function(e, t) {
                    this.getEventHandler("kickout")(e, t)
                }
            }, {
                key: "onKickedOutCallBack",
                value: function() {
                    var e = l(c.mark((function e(t, n) {
                        var i, r, o, s;
                        return c.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n.meetingId == this.meeting_id) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.logger.report(1, "meeting_user_controller", "been kicked out! data:", n), i = n.reasonCode, r = n.room_type, o = void 0 === r ? S.RoomType.MEETING_ROOM : r, this.isInMeetingRoom() || this.isInWaitingRoom() || this.logger.report(3, "assert", "user has been kicked out, but neither in meeting nor waiting room: ".concat(this.getReadableXmppRoomState())), s = {
                                        type: 4,
                                        reason: i,
                                        room_type: o
                                    }, e.next = 8, this.leaveMeetingFully(s);
                                case 8:
                                    this.getEventHandler("kicked_out")(t, n);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onNotifyHandsupPushCallBack",
                value: function(e, t) {
                    this.getEventHandler("notify_hands_up_push")(e, t)
                }
            }, {
                key: "onTurnAudioCallBack",
                value: function(e, t) {
                    if (!e || !t) return this.logger.warn("MeetingUserController onTurnAudioCallBack failed. flag=", e, ", data=", t), void this.getEventHandler("turn_audio")(!1, t);
                    if (t.meeting_id == this.meeting_id) {
                        var n = {};
                        t.media_platform && (n.media_platform = t.media_platform);
                        var i, r = o(t.permission_list);
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var s = i.value;
                                if (s.type === S.MediaType.AUDIO) return void this.getEventHandler("turn_audio")(!0, Object.assign(n, {
                                    status: "on",
                                    info: s
                                }))
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        cb(!1, Object.assign(n, {
                            status: "off"
                        }))
                    } else this.logger.log("MeetingUserController onTurnAudioCallBack DIFFERENT meeting_id! data.meeting_id:", t.meeting_id, "self.meeting_id:", this.meeting_id)
                }
            }, {
                key: "onTurnVideoCallBack",
                value: function(e, t) {
                    if (!e || !t) return this.logger.warn("MeetingUserController onTurnVideoCallBack failed. flag=", e, ", data=", t), void this.getEventHandler("turn_video")(!1, t);
                    if (t.meeting_id == this.meeting_id) {
                        e && (this.saved_user_video_switch = !0);
                        var n = {};
                        t.media_platform && (n.media_platform = t.media_platform);
                        var i, r = this.getEventHandler("turn_video"),
                            s = o(t.permission_list);
                        try {
                            for (s.s(); !(i = s.n()).done;) {
                                var a = i.value;
                                if (a.type === S.MediaType.VIDEO) return void r(!0, Object.assign(n, {
                                    status: "on",
                                    info: a
                                }))
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        r(!1, Object.assign(n, {
                            status: "off"
                        }))
                    } else this.logger.log("MeetingUserController onTurnVideoCallBack DIFFERENT meeting_id! data.meeting_id:", t.meeting_id, "self.meeting_id:", this.meeting_id)
                }
            }, {
                key: "onLogout",
                value: function(e, t) {
                    console.log("meeting_user_controller logout"), S.INSTANCE_ID === S.InstanceType.INSTANCE_WEB && this.rtc_service.leaveRoom(), this.reset()
                }
            }, {
                key: "onSummaryRequestCallBack",
                value: function(e, t) {
                    "start" === t.operation ? !1 === e && (this.isDoingSummary = !1) : "stop" === t.operation && !0 === e && (this.isDoingSummary = !1), this.getEventHandler("summary_request")(e, t)
                }
            }, {
                key: "onSummaryAudioUploadPush",
                value: function(e, t) {
                    console.log("meeting_user_controller onSummaryAudioUploadPush:", t), !1 !== e ? "start" === t.upload ? (this.uploadAudioToken = t.token, this.startRecorder()) : "stop" === t.upload && this.stopRecorder() : console.log("meeting_user_controller onSummaryAudioUploadPush flag false")
                }
            }, {
                key: "onSummaryMessagePush",
                value: function(e, t) {
                    this.getEventHandler("on_summary")(e, t)
                }
            }, {
                key: "startRecorder",
                value: function() {
                    var e = this;
                    console.debug("start recorder"), this.stopRecorder();
                    try {
                        this.mediaRecorder = new MediaRecorder(this.meetingVideoController.localStream)
                    } catch (e) {
                        return void console.log(e)
                    }
                    this.chunks = [], this.mediaRecorder.ondataavailable = function(t) {
                        e.chunks.push(t.data), console.log("chunk pushing data type:", h(t.data), ", constructor:", t.data.constructor.name), console.log("on recorder data available, evt:", t), e.fireRecordedAudioData()
                    }, this.mediaRecorder.onstop = function(t) {
                        e.fireRecordedAudioData()
                    }, console.debug("starting MediaRecorder"), this.mediaRecorder.start(), this.recordTimer = setInterval((function() {
                        e.mediaRecorder.requestData()
                    }), 200)
                }
            }, {
                key: "stopRecorder",
                value: function() {
                    if (void 0 !== this.mediaRecorder && this.mediaRecorder) try {
                        clearInterval(this.recordTimer), this.mediaRecorder.requestData(), this.mediaRecorder.stop(), this.mediaRecorder = null
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "fireRecordedAudioData",
                value: function() {
                    var e = this,
                        t = new Blob(this.chunks, {
                            type: "audio/webm; codecs=opus"
                        }),
                        n = new FileReader;
                    n.addEventListener("loadend", (function() {
                        var t = n.result;
                        console.log("blob data:", t);
                        var i = btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
                        console.log("base64 string:", i), e.getEventHandler("upload_audio_ready")(i)
                    })), n.readAsArrayBuffer(t), this.chunks = []
                }
            }, {
                key: "onRTCWebSocketClose",
                value: function(e) {
                    this.logger.report(1, "webrtc", "rtc_web_socket_close, data:", e), this.getEventHandler("rtc_web_socket_close")(!0, e)
                }
            }, {
                key: "onRTCRelayTimeout",
                value: function(e) {
                    this.logger.report(1, "webrtc", "rtc_relay_timeout, data:", e), this.getEventHandler("rtc_relay_timeout")(!0, e)
                }
            }, {
                key: "onRTCKickOut",
                value: function(e) {
                    this.logger.report(1, "webrtc", "rtc_kick_out, data:", e), this.getEventHandler("rtc_kick_out")(!0, e)
                }
            }, {
                key: "onInviteResponse",
                value: function(e, t) {
                    console.log("onInviteResponse:", t)
                }
            }, {
                key: "onCancelInviteResponse",
                value: function(e, t) {
                    console.log("onCancelInviteResponse:", t), e && this.inviteMap.delete(t.sender_data.inviteId)
                }
            }, {
                key: "onInviteEventPush",
                value: function(e, t) {
                    console.log("onInviteEventPush data:", t);
                    var n = parseInt(t.event_id);
                    switch (n) {
                        case S.InviteEvent.BEGIN_INVITE:
                        case S.InviteEvent.USER_FAIL:
                            var i, r = o(this.inviteMap.keys());
                            try {
                                for (r.s(); !(i = r.n()).done;) {
                                    var s = i.value;
                                    this.inviteMap.get(s).invitee.phone_number === t.invitee.phone_number && this.inviteMap.delete(s)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            this.inviteMap.set(t.invite_id, {
                                inviter: t.inviter,
                                invitee: t.invitee,
                                nickname: t.nickname,
                                invite_status: S.inviteEventToStatus(n)
                            });
                            break;
                        case S.InviteEvent.SUCC_ENTER:
                        case S.InviteEvent.INMEETING_HANGUP:
                        case S.InviteEvent.INVITER_CANCEL:
                            this.inviteMap.delete(t.invite_id)
                    }
                    this.getEventHandler("on_invite_event_push")(!0, t)
                }
            }, {
                key: "onMeetingSettings",
                value: function(e, t) {
                    if (e) {
                        var n, i = o(t.mediaSettingsList);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var r = n.value;
                                r.type === S.MediaType.AUDIO ? (void 0 !== r.allowUnmuteBySelf && (this.allowUnmuteBySelf = r.allowUnmuteBySelf, this.logger.report(1, "in_meeting", "onMeetingSettings setting this.allowUnmuteBySelf to:", this.allowUnmuteBySelf)), this.muteAll = !!r.muteAll, this.muteOnJoin = !!r.muteOnJoin) : r.type === S.MediaType.SCREEN_SHARE && (this.enableWatermark = 1 === r.watermark, this.multipleRowWatermark = r.multipleRowWatermark)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        t.hasOwnProperty("meetingLockSettings") && (this.meetingLocked = 1 === t.meetingLockSettings.meeting_lock), t.hasOwnProperty("hideMeetingCodePassword") && (this.hideMeetingCodePassword = 1 === t.hideMeetingCodePassword), t.hasOwnProperty("allow_open_video") && this.setIsAllowOpenVideo(t.allow_open_video), t.hasOwnProperty("allow_renaming") && this.setIsAllowRenaming(t.allow_renaming)
                    }
                    this.getEventHandler("query_meeting_settings")(e, t)
                }
            }, {
                key: "onMeetingUiCfg",
                value: function(e, t) {
                    e && t && t.hasOwnProperty("meeting_ability_pstn") && (this.meetingAbilityPstn = !1 !== t.meeting_ability_pstn), this.getEventHandler("query_ui_config")(e, t)
                }
            }, {
                key: "onNotifyMeetingSettingsUpdate",
                value: function(e, t) {
                    var n = this;
                    if (t.meetingId == this.meeting_id) {
                        var i, r = o(t.mediaSettingsList);
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var s = i.value;
                                s.type === S.MediaType.AUDIO ? (void 0 !== s.allowUnmuteBySelf && (this.allowUnmuteBySelf = s.allowUnmuteBySelf), void 0 !== s.muteAll && (this.muteAll = s.muteAll), void 0 !== s.muteOnJoin && (this.muteOnJoin = s.muteOnJoin), S.INSTANCE_ID === S.InstanceType.INSTANCE_WEB && (s.muteAll ? this.meetingAudioController.enableAudio(!1).then((function(e) {
                                    n.saved_user_audio_switch = !1;
                                    var t = n.getSelfInfo();
                                    console.log("selfInfo:", t), "1" === t.audio_on && (n.mutedBySelf = !1), n.updateAudioStatus(!1, S.SwitchReason.BYHOST)
                                })).catch((function(e) {})) : this.mutedBySelf || this.meetingAudioController.enableAudio(!0).then((function(e) {
                                    n.saved_user_audio_switch = !0, n.updateAudioStatus(!0, S.SwitchReason.BYHOST)
                                })).catch((function(e) {})))) : s.type === S.MediaType.SCREEN_SHARE && (this.enableWatermark = 1 === s.watermark, this.multipleRowWatermark = s.multipleRowWatermark)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        t.hasOwnProperty("meetingLockSettings") && (this.meetingLocked = 1 === t.meetingLockSettings.meeting_lock), t.hasOwnProperty("hideMeetingCodePassword") && (this.hideMeetingCodePassword = 1 === t.hideMeetingCodePassword), t.hasOwnProperty("allow_open_video") && this.setIsAllowOpenVideo(t.allow_open_video), t.hasOwnProperty("allow_renaming") && this.setIsAllowRenaming(t.allow_renaming), this.getEventHandler("notify_meeting_settings_update")(!0, t)
                    }
                }
            }, {
                key: "onNotifySwitchMediaStream",
                value: function(e, t) {
                    var n = this,
                        i = this.getEventHandler("notify_switch_media_stream");
                    if (t.meetingId != this.meeting_id) return this.logger.report(1, "meeting_user_controller", "meeting id must match in onNotifySwitchMediaStream: internal meeting id=".concat(this.meeting_id, ", got meeting id=").concat(t.meetingId, "."), "fired with:", e, t), void i(!1, t);
                    var r = t.type === S.MediaType.AUDIO && t.reason === S.SwitchStreamReason.OPERATED_BY_HOST,
                        s = t.type === S.MediaType.VIDEO && t.reason === S.SwitchStreamReason.OPERATED_BY_HOST;
                    if (!r && !s) return this.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked but neither audio nor video operated by host."), void i(!1, t);
                    if (S.INSTANCE_ID === S.InstanceType.INSTANCE_WEB) {
                        var a = 0 === t.upStreamOn;
                        r && (this.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked: ".concat(a ? "turn off audio" : "turn on audio")), a ? this.meetingAudioController.enableAudio(!1).then((function(e) {
                            n.saved_user_audio_switch = !1, n.mutedBySelf = !1, n.updateAudioStatus(!1, S.SwitchReason.BYHOST)
                        })).catch((function(e) {
                            n.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked, turn off audio failed", e)
                        })) : this.xmpp_service.turnAudioRequest({
                            meeting_id: this.meeting_id,
                            succCallBack: function(e) {
                                var t, i = o(e.permission_list);
                                try {
                                    for (i.s(); !(t = i.n()).done;) {
                                        var r = t.value;
                                        r.type === S.MediaType.AUDIO && (r.limitState === S.LimitState.NO_LIMIT ? n.meetingAudioController.enableAudio(!0).then((function(e) {
                                            n.saved_user_audio_switch = !0, n.updateAudioStatus(!0, S.SwitchReason.BYHOST)
                                        })).catch((function(e) {
                                            n.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked, turn on audio failed", e)
                                        })) : n.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked, turn on audio failed since limitState it not as expected: ", r.limitState))
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            },
                            failCallback: function(e) {
                                n.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked, turnAudioRequest failed", e)
                            }
                        })), s && (this.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked: ".concat(a ? "turn off video" : "turn on video")), a ? this.meetingVideoController.enableVideo(!1).then((function(e) {
                            n.saved_user_video_switch = !1, n.updateVideoStatus(!1, S.SwitchReason.BYHOST)
                        })).catch((function(e) {
                            n.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked, turn off video failed", e)
                        })) : this.logger.report(1, "meeting_user_controller", "onNotifySwitchMediaStream invoked, turn on video failed since NOT SUPPORTED YET", errData))
                    }
                    i(!0, t)
                }
            }, {
                key: "onNotifyJoinAudioMixUserInfo",
                value: function(e, t) {
                    var n = this;
                    if (t.meetingId != this.meeting_id) return !1;
                    var i = t.infoList;
                    i = i.forEach((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.user,
                            i = t.app_uid,
                            o = n.associatorMap.has(i) ? n.associatorMap.get(i) : void 0;
                        if (o) {
                            var s = n.userMap.get(o),
                                a = r({}, s.id);
                            a.app_uid = a.uid, delete a.uid, e.user = a
                        }
                    })), this.getEventHandler("notify_join_audio_mix_user_info")(!0, t)
                }
            }, {
                key: "onMeetingWillLimited",
                value: function(e, t) {
                    if (t.meeting_id != this.meeting_id) return console.error("onMeetingWillLimited callback returns false since meeting_id is not same as we saved, ours:", this.meeting_id, ", got_from_server:", t.meeting_id), !1;
                    this.getEventHandler("meeting_will_limited")(!0, t)
                }
            }, {
                key: "checkLocalPermission",
                value: function(e) {
                    return this.isInMeeting() ? (this.logger.report(1, "meeting_user_controller", "check local permission, meeting_id=".concat(this.meeting_id, ", permisson_type=").concat(e)), this.xmpp_service.queryLocalPermission(this.meeting_id, e), !0) : (this.logger.error("checkLocalPermission failed: not in meeting"), !1)
                }
            }, {
                key: "checkLocalPermissionOnRecord",
                value: function() {
                    this.checkLocalPermission(S.LocalPermissionType.LOCAL_RECORD)
                }
            }, {
                key: "onCloudRecordStatePush",
                value: function(e, t) {
                    var n = this.getEventHandler("cloud_record_state");
                    if ("function" != typeof n && (console.warn("did you miss to register 'cloud_record_state' to meeting_user_controller?"), n = function() {}), !e || !t) return console.error("onCloudRecordStatePush: ", e, t), void n(!1, t);
                    this.cloudRecordStateChange(t.state), n(!0, t)
                }
            }, {
                key: "queryUserSig",
                value: function() {
                    return this.xmpp_service.queryUserSig(), !0
                }
            }, {
                key: "onQueryUserSigCallBack",
                value: function(e, t) {
                    this.getEventHandler("query_user_sig")(e, t)
                }
            }, {
                key: "onMeetingNotice",
                value: function(e, t) {
                    this.getEventHandler("meeting_notice")(e, t)
                }
            }, {
                key: "queryMeetingNotice",
                value: function() {
                    return this.xmpp_service.queryMeetingNotice(this.meeting_id)
                }
            }, {
                key: "readMeetingNotice",
                value: function(e) {
                    return this.xmpp_service.readMeetingNotice(this.meeting_id, e)
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                }
            }]), t
        }(T);
        e.exports = N
    }, function(t, n, i) {
        var r = i(24)();
        t.exports = r;
        try {
            regeneratorRuntime = r
        } catch (t) {
            "object" == ("undefined" == typeof globalThis ? "undefined" : e(globalThis)) ? globalThis.regeneratorRuntime = r: Function("r", "regeneratorRuntime = r")(r)
        }
    }, function(e, t, n) {
        function i() {
            function t(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }

            function n(e, t, n, i) {
                var r = t && t.prototype instanceof s ? t : s,
                    a = Object.create(r.prototype),
                    u = new p(i || []);
                return a._invoke = function(e, t, n) {
                    var i = "suspendedStart";
                    return function(r, s) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === r) throw s;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (n.method = r, n.arg = s;;) {
                            var a = n.delegate;
                            if (a) {
                                var u = d(a, n);
                                if (u) {
                                    if (u === R) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === i) throw i = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = "executing";
                            var c = o(e, t, n);
                            if ("normal" === c.type) {
                                if (i = n.done ? "completed" : "suspendedYield", c.arg === R) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (i = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(e, n, u), a
            }

            function o(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }

            function s() {}

            function a() {}

            function u() {}

            function c(e) {
                ["next", "throw", "return"].forEach((function(n) {
                    t(e, n, (function(e) {
                        return this._invoke(n, e)
                    }))
                }))
            }

            function l(e, t) {
                function n(i, s, a, u) {
                    var c = o(e[i], e, s);
                    if ("throw" !== c.type) {
                        var l = c.arg,
                            d = l.value;
                        return d && "object" == r(d) && y.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            n("next", e, a, u)
                        }), (function(e) {
                            n("throw", e, a, u)
                        })) : t.resolve(d).then((function(e) {
                            l.value = e, a(l)
                        }), (function(e) {
                            return n("throw", e, a, u)
                        }))
                    }
                    u(c.arg)
                }
                var i;
                this._invoke = function(e, r) {
                    function o() {
                        return new t((function(t, i) {
                            n(e, r, t, i)
                        }))
                    }
                    return i = i ? i.then(o, o) : o()
                }
            }

            function d(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, d(e, t), "throw" === t.method)) return R;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return R
                }
                var i = o(n, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, R;
                var r = i.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, R) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, R)
            }

            function h(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function p(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(h, this), this.reset(!0)
            }

            function g(e) {
                if (e) {
                    var t = e[b];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            i = function t() {
                                for (; ++n < e.length;)
                                    if (y.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return i.next = i
                    }
                }
                return {
                    next: m
                }
            }

            function m() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            e.exports = i = function() {
                return f
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
            var f = {},
                v = Object.prototype,
                y = v.hasOwnProperty,
                S = "function" == typeof Symbol ? Symbol : {},
                b = S.iterator || "@@iterator",
                E = S.asyncIterator || "@@asyncIterator",
                w = S.toStringTag || "@@toStringTag";
            try {
                t({}, "")
            } catch (e) {
                t = function(e, t, n) {
                    return e[t] = n
                }
            }
            f.wrap = n;
            var R = {},
                k = {};
            t(k, b, (function() {
                return this
            }));
            var T = Object.getPrototypeOf,
                N = T && T(T(g([])));
            N && N !== v && y.call(N, b) && (k = N);
            var I = u.prototype = s.prototype = Object.create(k);
            return a.prototype = u, t(I, "constructor", u), t(u, "constructor", a), a.displayName = t(u, w, "GeneratorFunction"), f.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name))
            }, f.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, t(e, w, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, f.awrap = function(e) {
                return {
                    __await: e
                }
            }, c(l.prototype), t(l.prototype, E, (function() {
                return this
            })), f.AsyncIterator = l, f.async = function(e, t, i, r, o) {
                void 0 === o && (o = Promise);
                var s = new l(n(e, t, i, r), o);
                return f.isGeneratorFunction(t) ? s : s.next().then((function(e) {
                    return e.done ? e.value : s.next()
                }))
            }, c(I), t(I, w, "Generator"), t(I, b, (function() {
                return this
            })), t(I, "toString", (function() {
                return "[object Generator]"
            })), f.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var i = t.pop();
                            if (i in e) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, f.values = g, p.prototype = {
                constructor: p,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                        for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function t(t, i) {
                        return o.type = "throw", o.arg = e, n.next = t, i && (n.method = "next", n.arg = void 0), !!i
                    }
                    if (this.done) throw e;
                    for (var n = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                        var r = this.tryEntries[i],
                            o = r.completion;
                        if ("root" === r.tryLoc) return t("end");
                        if (r.tryLoc <= this.prev) {
                            var s = y.call(r, "catchLoc"),
                                a = y.call(r, "finallyLoc");
                            if (s && a) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            } else if (s) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && y.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var r = i;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var o = r ? r.completion : {};
                    return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, R) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), R
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), R
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var r = i.arg;
                                _(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: g(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), R
                }
            }, f
        }
        var r = n(9).default;
        e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        function n(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s),
                    u = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(u) : Promise.resolve(u).then(i, r)
        }
        e.exports = function(e) {
            return function() {
                var t = this,
                    i = arguments;
                return new Promise((function(r, o) {
                    function s(e) {
                        n(u, r, o, s, a, "next", e)
                    }

                    function a(e) {
                        n(u, r, o, s, a, "throw", e)
                    }
                    var u = e.apply(t, i);
                    s(void 0)
                }))
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        var i = n(27),
            r = n(28),
            o = n(29),
            s = n(31);
        e.exports = function(e, t) {
            return i(e) || r(e, t) || o(e, t) || s()
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        e.exports = function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var i, r, o = [],
                    s = !0,
                    a = !1;
                try {
                    for (n = n.call(e); !(s = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); s = !0);
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return o
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        var i = n(30);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, function(e, t, n) {
        function i(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = c(e);
                if (t) {
                    var r = c(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return u(this, n)
            }
        }
        var r = n(9),
            o = n(2),
            s = n(3),
            a = n(6),
            u = n(8),
            c = n(10),
            l = (n(11), n(12)),
            d = function(e) {
                function t() {
                    var e;
                    return o(this, t), (e = n.call(this)).logger = new l, e.RTC = null, e.eventListenersMap = new Map, e.savedAudioOn = !0, e.savedVideoOn = !0, e.muteAudioFlag = !1, e
                }
                a(t, e);
                var n = i(t);
                return s(t, [{
                    key: "canSupportRTC",
                    value: function() {
                        return WebRTCAPI.fn.detectRTC().support
                    }
                }, {
                    key: "initWebRtc",
                    value: function(e) {
                        var t = this;
                        if (void 0 === e) return this.logger.error("there is no init para info"), !1;
                        this.savedAudioOn = e.is_enable_audio, this.savedVideoOn = e.is_enable_video, this.RTC = new WebRTCAPI({
                            useCloud: 0,
                            userId: e.user_id,
                            sdkAppId: e.sdk_appid,
                            accountType: e.account_type,
                            userSig: e.user_sig,
                            audio: this.savedAudioOn,
                            video: this.savedVideoOn,
                            closeLocalMedia: !1
                        }, (function(e) {
                            t.logger.info("init WebRTC success"), t.getEventHandler("init")(!0, e)
                        }), (function(e) {
                            t.logger.info("init WebRTC failed"), t.getEventHandler("init")(!1, e)
                        })), this.RTC.on("onErrorNotify", (function(e) {
                            t.getEventHandler("on_rtc_error_notify")(e)
                        }))
                    }
                }, {
                    key: "enterRoom",
                    value: function(e) {
                        var t = this;
                        if (!this.RTC) return !1;
                        if (void 0 === e) return this.logger.error("there is no room para info"), !1;
                        console.log("webrtc_service calling this.RTC.enterRoom, with room_param:", e);
                        var n = {
                            roomid: Number(e.room_id),
                            privateMapKey: e.private_key,
                            role: e.role,
                            pstnBizType: 1e3
                        };
                        return this.logger.report(1, "webrtc", "enter room with option:", n), this.RTC.enterRoom(n, (function() {
                            t.listenRTCEvent(), t.getEventHandler("create_room")(!0), t.logger.info("enter room success")
                        }), (function(e) {
                            t.getEventHandler("create_room")(!1, e), t.logger.info("enter room failed")
                        })), !0
                    }
                }, {
                    key: "leaveRoom",
                    value: function() {
                        var e = this;
                        return !!this.RTC && (this.stopRTC(), this.RTC.quit((function() {
                            e.getEventHandler("leave_room")(!0, {
                                msg: "leave room success"
                            }), e.logger.info("leave room success")
                        }), (function() {
                            e.getEventHandler("leave_room")(!1, {
                                msg: "leave room fail"
                            }), e.logger.info("leave room fail")
                        })), !0)
                    }
                }, {
                    key: "listenRTCEvent",
                    value: function() {
                        var e = this;
                        this.RTC.on("onLocalStreamAdd", (function(t) {
                            e.muteAudioFlag && (e.muteAudioFlag = !1, e.closeAudio()), e.getEventHandler("local_stream_add")(t)
                        })), this.RTC.on("onRemoteStreamUpdate", (function(t) {
                            e.logger.report(1, "webrtc", "remote_stream_update:", t), e.getEventHandler("remote_stream_update")(t)
                        })), this.RTC.on("onRemoteStreamRemove", (function(t) {
                            e.logger.report(1, "webrtc", "remote_stream_remove:", t), e.getEventHandler("remote_stream_remove")(t)
                        })), this.RTC.on("onWebSocketClose", (function(t) {
                            e.getEventHandler("rtc_web_socket_close")(t)
                        })), this.RTC.on("onRelayTimeout", (function(t) {
                            e.getEventHandler("rtc_relay_timeout")(t)
                        })), this.RTC.on("onKickout", (function(t) {
                            e.getEventHandler("rtc_kick_out")(t)
                        }))
                    }
                }, {
                    key: "startRTC",
                    value: function() {
                        var e;
                        return this.RTC ? (e = this.RTC).startRTC.apply(e, arguments) : null
                    }
                }, {
                    key: "stopRTC",
                    value: function() {
                        var e;
                        return this.RTC ? (e = this.RTC).stopRTC.apply(e, arguments) : null
                    }
                }, {
                    key: "getLocalStream",
                    value: function() {
                        var e;
                        return (e = this.RTC).getLocalStream.apply(e, arguments)
                    }
                }, {
                    key: "restartRTC",
                    value: function(e, t, n) {
                        var i = this;
                        if ("object" !== r(e)) throw new Error("option should be an object");
                        if ("boolean" != typeof e.video) throw new Error("option.video should be a boolean");
                        if ("boolean" != typeof e.audio) throw new Error("option.audio should be a boolean");
                        this.stopRTC({}, (function() {
                            i.getLocalStream(e, (function(e) {
                                i.startRTC({
                                    role: "user",
                                    stream: e.stream
                                }), "function" == typeof t && t()
                            }), (function(e) {
                                "function" == typeof n && n(e)
                            }))
                        }), (function() {
                            console.log("stopRTC end, in restartRTC, option:", e), "function" == typeof n && n()
                        }))
                    }
                }, {
                    key: "closeAudio",
                    value: function() {
                        return this.RTC.closeAudio(), !0
                    }
                }, {
                    key: "openAudio",
                    value: function() {
                        return this.RTC.openAudio(), !0
                    }
                }, {
                    key: "closeVideo",
                    value: function() {
                        return this.RTC.closeVideo(), !0
                    }
                }, {
                    key: "openVideo",
                    value: function() {
                        return this.RTC.openVideo(), !0
                    }
                }, {
                    key: "getLocalMediaStatus",
                    value: function() {
                        return this.RTC.getLocalMediaStatus()
                    }
                }, {
                    key: "changeSpearRole",
                    value: function(e) {
                        return this.RTC.changeSpearRole(e), !0
                    }
                }, {
                    key: "getVideoDevices",
                    value: function() {
                        var e = this;
                        if (!this.RTC) throw new Error("RTC not initialized!");
                        return this.RTC.getVideoDevices((function(t) {
                            e.getEventHandler("get_video_device")(t)
                        })), !0
                    }
                }, {
                    key: "chooseVideoDevice",
                    value: function(e) {
                        if (!this.RTC) throw new Error("RTC not initialized!");
                        return this.RTC.chooseVideoDevice(e), !0
                    }
                }, {
                    key: "getAudioDevices",
                    value: function() {
                        var e = this;
                        if (!this.RTC) throw new Error("RTC not initialized!");
                        return this.RTC.getAudioDevices((function(t) {
                            e.getEventHandler("get_audio_device")(t)
                        })), !0
                    }
                }, {
                    key: "chooseAudioDevice",
                    value: function(e) {
                        return this.RTC.chooseAudioDevice(e), !0
                    }
                }, {
                    key: "soundMeter",
                    value: function(e) {
                        return WebRTCAPI.SoundMeter(e)
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                    }
                }]), t
            }(n(20));
        e.exports = d
    }, function(e, t, n) {
        function i(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = c(e);
                if (t) {
                    var r = c(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return u(this, n)
            }
        }
        var r = n(2),
            o = n(3),
            s = n(5),
            a = n(6),
            u = n(8),
            c = n(10),
            l = (n(11), n(12)),
            d = n(32),
            h = (n(34), n(14)),
            _ = function(e) {
                function t() {
                    var e;
                    r(this, t), (e = n.call(this)).logger = new l, e.xmpp_service = h.getInstance(), e.rtc_service = d.getInstance(), e.localStream = null, e.currentVideoDeviceIndex = 0, e.videoDevices = [], e.switchVideoDeviceTargetIndex = null, e.switchVideoDeviceRetryFlag = !1, e.onVideoComplete = e.onVideoComplete.bind(s(e)), e.onLocalStreamAdd = e.onLocalStreamAdd.bind(s(e)), e.onRemoteStreamAdd = e.onRemoteStreamAdd.bind(s(e)), e.onRemoteStreamRemove = e.onRemoteStreamRemove.bind(s(e));
                    var i = function(t) {
                        return e[t] = e[t].bind(s(e))
                    };
                    return i("enableVideo"), i("onGetVideoDevice"), i("onRTCErrorNotify"), e.listenEvent(), e
                }
                a(t, e);
                var n = i(t);
                return o(t, [{
                    key: "enableVideo",
                    value: function(e, t, n) {
                        var i = this;
                        return new Promise((function(r, o) {
                            e ? i.rtc_service.restartRTC({
                                video: !0,
                                audio: i.rtc_service.savedAudioOn
                            }, (function() {
                                i.rtc_service.savedVideoOn = !0, r(e), "function" == typeof t && t(!0)
                            }), (function(t) {
                                o({
                                    enable: e,
                                    error: t
                                }), "function" == typeof n && n(t)
                            })) : i.rtc_service.restartRTC({
                                video: !1,
                                audio: i.rtc_service.savedAudioOn
                            }, (function() {
                                i.rtc_service.savedVideoOn = !1, r(e), "function" == typeof t && t(!1)
                            }), (function(t) {
                                o({
                                    enable: e,
                                    error: t
                                }), "function" == typeof n && n(t)
                            }))
                        }))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.rtc_service.startRTC()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.rtc_service.stopRTC({}, (function() {}))
                    }
                }, {
                    key: "getVideoDevices",
                    value: function() {
                        this.rtc_service.getVideoDevices()
                    }
                }, {
                    key: "switchVideoDevice",
                    value: function() {
                        0 !== this.videoDevices.length && (console.log("switchVideoDevice, currentVideoDeviceIndex:", this.currentVideoDeviceIndex), this.switchVideoDeviceTargetIndex = this.currentVideoDeviceIndex + 1, this.switchVideoDeviceTargetIndex >= this.videoDevices.length && (this.switchVideoDeviceTargetIndex = 0), console.log("use switchVideoDeviceTargetIndex:", this.switchVideoDeviceTargetIndex), console.log("setting device to be:", JSON.stringify(this.videoDevices[this.switchVideoDeviceTargetIndex])), this.rtc_service.chooseVideoDevice(this.videoDevices[this.switchVideoDeviceTargetIndex]))
                    }
                }, {
                    key: "onVideoComplete",
                    value: function(e, t) {
                        this.getEventHandler("video_complete")(e, t)
                    }
                }, {
                    key: "onLocalStreamAdd",
                    value: function(e) {
                        e.stream && !0 === e.stream.active && (this.getVideoDevices(), this.localStream = e.stream, this.getEventHandler("local_stream_add")(!0, e))
                    }
                }, {
                    key: "onRemoteStreamAdd",
                    value: function(e) {
                        e.stream && !0 === e.stream.active && this.getEventHandler("remote_stream_add")(!0, e)
                    }
                }, {
                    key: "onRemoteStreamRemove",
                    value: function(e) {
                        this.getEventHandler("remote_stream_remove")(!0, e)
                    }
                }, {
                    key: "onGetVideoDevice",
                    value: function(e) {
                        if (this.videoDevices = e, console.log("onGetVideoDevice:", JSON.stringify(this.videoDevices)), this.localStream && this.localStream.getVideoTracks) {
                            var t = this.localStream.getVideoTracks();
                            if (t.length > 0)
                                for (var n = 0; n < e.length; ++n)
                                    if (e[n].label === t[0].label) {
                                        console.log("setting currentVideoDeviceIndex to be:", n), this.currentVideoDeviceIndex !== n && (this.currentVideoDeviceIndex = n, this.switchVideoDeviceTargetIndex != n ? this.switchVideoDeviceRetryFlag ? this.switchVideoDeviceRetryFlag = !1 : (this.switchVideoDeviceRetryFlag = !0, this.switchVideoDevice()) : this.switchVideoDeviceRetryFlag = !1);
                                        break
                                    }
                        }
                        this.getEventHandler("get_video_device")(!0, e)
                    }
                }, {
                    key: "onRTCErrorNotify",
                    value: function(e) {
                        this.logger.report(1, "webrtc", "onRTCErrorNotify:", e), this.getEventHandler("on_rtc_error")(!0, e)
                    }
                }, {
                    key: "listenEvent",
                    value: function() {
                        this.xmpp_service.registerEventHandler("video_complete", this.onAudioComplete), this.rtc_service.registerEventHandler("get_video_device", this.onGetVideoDevice), this.rtc_service.registerEventHandler("local_stream_add", this.onLocalStreamAdd), this.rtc_service.registerEventHandler("remote_stream_update", this.onRemoteStreamAdd), this.rtc_service.registerEventHandler("remote_stream_remove", this.onRemoteStreamRemove), this.rtc_service.registerEventHandler("on_rtc_error_notify", this.onRTCErrorNotify)
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                    }
                }]), t
            }(n(20));
        e.exports = _
    }, function(e, t, n) {
        function i(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = c(e);
                if (t) {
                    var r = c(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return u(this, n)
            }
        }
        var r = n(2),
            o = n(3),
            s = n(5),
            a = n(6),
            u = n(8),
            c = n(10),
            l = (n(11), n(12)),
            d = n(32),
            h = n(14),
            _ = function(e) {
                function t() {
                    var e;
                    r(this, t), (e = n.call(this)).logger = new l, e.eventListenersMap = new Map, e.rtc_service = d.getInstance(), e.xmpp_service = h.getInstance(), e.currentAudioDeviceIndex = 0, e.audioDevices = [], e.switchAudioDevifceTargetIndex = null, e.switchAudioDeviceRetryFlag = !1, e.onAudioComplete = e.onAudioComplete.bind(s(e));
                    var i = function(t) {
                        return e[t] = e[t].bind(s(e))
                    };
                    return i("enableAudio"), i("onGetAudioDevice"), i("onLocalStreamAdd"), e.listenEvent(), e
                }
                a(t, e);
                var n = i(t);
                return o(t, [{
                    key: "enableAudio",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n, i) {
                            e ? t.rtc_service.savedAudioOn ? (t.rtc_service.openAudio(), n(e)) : t.rtc_service.restartRTC({
                                video: t.rtc_service.savedVideoOn,
                                audio: !0
                            }, (function() {
                                t.rtc_service.savedAudioOn = !0, t.rtc_service.openAudio(), n(e)
                            }), (function(t) {
                                i({
                                    enable: e,
                                    error: t
                                })
                            })) : (t.rtc_service.closeAudio(), n(e))
                        }))
                    }
                }, {
                    key: "onAudioComplete",
                    value: function(e, t) {
                        this.getEventHandler("audio_complete")(e, t)
                    }
                }, {
                    key: "enableSpeaker",
                    value: function(e, t) {}
                }, {
                    key: "getAudioDevices",
                    value: function() {
                        this.rtc_service.getAudioDevices()
                    }
                }, {
                    key: "switchAudioDevice",
                    value: function() {
                        0 !== this.audioDevices.length && (console.log("switchAudioDevice, currentAudioDeviceIndex:", this.currentAudioDeviceIndex), this.switchAudioDeviceTargetIndex = this.currentAudioDeviceIndex + 1, this.switchAudioDeviceTargetIndex >= this.audioDevices.length && (this.switchAudioDeviceTargetIndex = 0), console.log("use switchAudioDeviceTargetIndex:", this.switchAudioDeviceTargetIndex), console.log("setting device to be:", JSON.stringify(this.audioDevices[this.switchAudioDeviceTargetIndex])), this.rtc_service.chooseAudioDevice(this.audioDevices[this.switchAudioDeviceTargetIndex]))
                    }
                }, {
                    key: "onGetAudioDevice",
                    value: function(e) {
                        this.audioDevices = e, console.log("onGetAudioDevice:", this.audioDevices), console.log("onGetAudioDevice:", JSON.stringify(this.audioDevices)), this.getEventHandler("get_audio_device")(!0, e)
                    }
                }, {
                    key: "onLocalStreamAdd",
                    value: function(e) {
                        e.stream && !0 === e.stream.active && (this.getAudioDevices(), this.localStream = e.stream)
                    }
                }, {
                    key: "listenEvent",
                    value: function() {
                        this.xmpp_service.registerEventHandler("audio_complete", this.onAudioComplete), this.rtc_service.registerEventHandler("get_audio_device", this.onGetAudioDevice), this.rtc_service.registerEventHandler("local_stream_add", this.onLocalStreamAdd)
                    }
                }, {
                    key: "soundMeter",
                    value: function(e) {
                        return this.rtc_service.soundMeter(e)
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                    }
                }]), t
            }(n(20));
        e.exports = _
    }, function(e, t, n) {
        function i(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = _(e);
                if (t) {
                    var r = _(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return h(this, n)
            }
        }

        function r(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, a = !0,
                u = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e
                },
                e: function(e) {
                    u = !0, s = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (u) throw s
                    }
                }
            }
        }

        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
            }
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }
        var a = n(9),
            u = n(2),
            c = n(3),
            l = n(5),
            d = n(6),
            h = n(8),
            _ = n(10),
            p = n(11),
            g = n(12),
            m = n(32),
            f = n(14),
            v = n(22),
            y = n(20),
            S = n(11).MeetingInfoMaskFlagBit;
        void 0 === console.assert && (console.assert = function(e, t) {});
        var b = function(e, t) {
                if (t.hasOwnProperty("defaultMediaStateList")) {
                    var n, i = r(t.defaultMediaStateList);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var o = n.value;
                            o.hasOwnProperty("type") && (o.type == p.MediaType.AUDIO ? o.hasOwnProperty("state") && "0" === o.state && ("0" === e.savedAudioOn ? e.savedAudioReason = p.SwitchReason.BYSELF : (e.savedAudioReason = p.SwitchReason.BYHOST, e.meetingUserCtrl.mutedBySelf = !1), e.savedAudioOn = "0") : o.type == p.MediaType.VIDEO && o.hasOwnProperty("state") && o.state)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            },
            E = function(e) {
                function t() {
                    var e;
                    u(this, t), (e = n.call(this)).logger = new g, e.xmpp_service = f.getInstance(), e.rtc_service = m.getInstance(), e.mediaRoomParams = {}, e.meetingUserCtrl = v.getInstance(), e.savedNickName = "", e.savedVideoOn = "0", e.savedAudioOn = "0", e.savedAudioReason = p.SwitchReason.BYSELF, e.savedVideoReason = p.SwitchReason.BYSELF, e.savedUserAudioSwitch = !0, e.savedAutoRTC = !0, e.savedJoinMeetingData = null, e.accessType = 0, e.meetingInfoMaskFlag = 0, e.app_id = null;
                    var i = function(t) {
                        return e[t] = e[t].bind(l(e))
                    };
                    return ["joinMeeting", "dissolveMeeting", "onCreateMeetingCallBack", "onCancelMeetingCallBack", "onQueryMeetingItemListCallBack", "onUpdateMeetingCallBack", "onMeetingModifiedCallBack", "onJoinMeetingCallBack", "onDissolveMeetingCallBack", "onNotifySchedule", "onNotifyMeetingItemUpdate", "onMeetingInviteeNotify", "onEnterMediaRoomCallBack", "onInitRtcCallBack", "onLeaveMediaRoomCallBack", "onLocalStreamAdd", "onQueryMeetingPayInfo"].forEach((function(e) {
                        return i(e)
                    })), e.listenEvent(), e
                }
                d(t, e);
                var n = i(t);
                return c(t, [{
                    key: "listenEvent",
                    value: function() {
                        this.xmpp_service.registerEventHandler("create_meeting", this.onCreateMeetingCallBack), this.xmpp_service.registerEventHandler("cancel_meeting", this.onCancelMeetingCallBack), this.xmpp_service.registerEventHandler("query_meeting_item_list", this.onQueryMeetingItemListCallBack), this.xmpp_service.registerEventHandler("modify_meeting", this.onUpdateMeetingCallBack), this.xmpp_service.registerEventHandler("meeting_modified", this.onMeetingModifiedCallBack), this.xmpp_service.registerEventHandler("notify_schedule", this.onNotifySchedule), this.xmpp_service.registerEventHandler("notify_meeting_item_update", this.onNotifyMeetingItemUpdate), this.xmpp_service.registerEventHandler("meeting_invitee_notify", this.onMeetingInviteeNotify), this.xmpp_service.registerEventHandler("join_meeting", this.onJoinMeetingCallBack), this.xmpp_service.registerEventHandler("dissolve_meeting", this.onDissolveMeetingCallBack), this.xmpp_service.registerEventHandler("query_meeting_pay_info", this.onQueryMeetingPayInfo), this.rtc_service.registerEventHandler("init", this.onInitRtcCallBack), this.rtc_service.registerEventHandler("create_room", this.onEnterMediaRoomCallBack), this.rtc_service.registerEventHandler("leave_room", this.onLeaveMediaRoomCallBack), this.rtc_service.registerEventHandler("local_stream_add", this.onLocalStreamAdd)
                    }
                }, {
                    key: "setSavedAudioOn",
                    value: function(e) {
                        this.savedAudioOn = e
                    }
                }, {
                    key: "getSavedAudioOn",
                    value: function() {
                        return this.savedAudioOn
                    }
                }, {
                    key: "setSavedVideoOn",
                    value: function(e) {
                        this.savedVideoOn = e
                    }
                }, {
                    key: "getSavedVideoOn",
                    value: function() {
                        return this.savedVideoOn
                    }
                }, {
                    key: "createMeeting",
                    value: function(e) {
                        return console.assert(e.hasOwnProperty("subject"), "subject is necessary"), console.assert(e.hasOwnProperty("begin_time"), "begin_time is necessary"), console.assert(e.hasOwnProperty("end_time"), "end_time is necessary"), console.assert(e.hasOwnProperty("invite_list"), "invite_list is necessary"), console.assert(e.hasOwnProperty("media_set_type"), "media_set_type is necessary"), this._formatParams(e, e, "password", ""), this._formatParams(e, e, "custom_buffer", ""), this._formatParams(e, e, "media_set_type", p.MediaSetType.ExternalMeeting), this.xmpp_service.createMeetingRequest(e), !0
                    }
                }, {
                    key: "internalQueryMeetingItemList",
                    value: function(e) {
                        return this.xmpp_service.queryMeetingItemListRequest(e), !0
                    }
                }, {
                    key: "queryMeetingItemById",
                    value: function(e) {
                        this.internalQueryMeetingItemList({
                            meeting_id: e
                        })
                    }
                }, {
                    key: "queryMeetingPayInfo",
                    value: function(e) {
                        this.xmpp_service.queryMeetingPayInfoRequest(e)
                    }
                }, {
                    key: "queryMeetingItemByCode",
                    value: function(e) {
                        this.internalQueryMeetingItemList({
                            meeting_code: e
                        })
                    }
                }, {
                    key: "sendSecurityVerifyResult",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.xmpp_service.sendSecurityVerifyResult({
                            security_verify_type: e,
                            data: t
                        })
                    }
                }, {
                    key: "queryMeetingBriefList",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        console.log("queryMeetingBriefList called with time:", e), this.internalQueryMeetingItemList({
                            meeting_last_modify_time: e.toString(),
                            expect_meeting_count: 10
                        })
                    }
                }, {
                    key: "queryMeetingItem",
                    value: function(e) {
                        var t = {
                            begin_time: 0,
                            end_time: 0,
                            creator_uid: "",
                            is_creator: "",
                            is_invitee: "",
                            meeting_id: e
                        };
                        return this.xmpp_service.queryMeetingItemListRequest(t), !0
                    }
                }, {
                    key: "cancelMeeting",
                    value: function(e) {
                        var t = {
                            meeting_id: e,
                            reason: "",
                            code: ""
                        };
                        return this.xmpp_service.cancelMeetingRequest(t), !0
                    }
                }, {
                    key: "updateMeeting",
                    value: function(e) {
                        console.assert(e.hasOwnProperty("meeting_id") && e.meeting_id > 0, "meeting_id is necessary");
                        var t = {
                            meeting_id: e.meeting_id
                        };
                        return this._formatParams(t, e, "subject", null), this._formatParams(t, e, "begin_time", null), this._formatParams(t, e, "end_time", null), this._formatParams(t, e, "password", null), this._formatParams(t, e, "host", null), this._formatParams(t, e, "invite_list", null), this._formatParams(t, e, "location", null), this._formatParams(t, e, "media_set_type", null), this.xmpp_service.modifyMeetingItemRequest(t), !0
                    }
                }, {
                    key: "joinMeeting",
                    value: function(e) {
                        if ("object" !== a(e)) throw new Error("join_param must be an object");
                        if ("boolean" != typeof e.do_rtc || !e.do_rtc) {
                            if (!e.hasOwnProperty("meeting_id") && !e.hasOwnProperty("meeting_code")) throw new Error("meeting_id or meeting_code is necessary");
                            if (!e.hasOwnProperty("nickname")) throw new Error("nickname is necessary");
                            if (!("string" == typeof e.nickname && e.nickname.length > 0)) throw new Error("nickname should be a string and not empty");
                            ! function(t) {
                                var n, i = r(t);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var o = n.value;
                                        "boolean" != typeof e[o] && "number" != typeof e[o] || (e[o] = e[o] ? "1" : "0")
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }(["video_on", "audio_on", "share_on"]);
                            var t = {};
                            return this._formatParams(t, e, "meeting_id", null), this._formatParams(t, e, "meeting_code", null), this._formatParams(t, e, "pmi_code", ""), this._formatParams(t, e, "nickname", "会议用户"), this._formatParams(t, e, "password", null), this._formatParams(t, e, "token", ""), this._formatParams(t, e, "phone", ""), this._formatParams(t, e, "im", null), this._formatParams(t, e, "media_set_type", null), this._formatParams(t, e, "meeting_appid", null), this._formatParams(t, e, "rs", ""), this._formatParams(t, e, "sign_type", null), this._formatParams(t, e, "join_from", 0), this._formatParams(t, e, "customer_data", null), t.default_auth_bits = this.getDefaultAuthBits(e), this.savedNickName = t.nickname, this.setSavedVideoOn(e.video_on), this.setSavedAudioOn(e.audio_on), this.savedUserAudioSwitch = e.audio_on, this.savedAutoRTC = !0, "boolean" == typeof e.auto_rtc && !1 === e.auto_rtc && (this.savedAutoRTC = !1), this.meetingUserCtrl.reset(), this.meetingUserCtrl.saved_user_audio_switch = 1 == e.audio_on, this.meetingUserCtrl.saved_user_video_switch = 1 == e.video_on, this.xmpp_service.joinMeetingRequest(t), !0
                        }
                        p.INSTANCE_ID === p.InstanceType.INSTANCE_WEB && (this.logger.report(1, "join_meeting", "(do_rtc) initWebRtc with param data:", JSON.stringify(this.mediaRoomParams)), this.rtc_service.initWebRtc(this.mediaRoomParams))
                    }
                }, {
                    key: "getDefaultAuthBits",
                    value: function(e) {
                        var t = 2,
                            n = 4,
                            i = 6,
                            r = 1 << 0 | 1 << 1 | 1 << 3 | 1 << 5 | 1 << 7;
                        return "1" === e.audio_on && (r |= 1 << t), "1" === e.video_on && (r |= 1 << n), "1" === e.share_on && (r |= 1 << i), console.log("default_auth_bits: ", r), r
                    }
                }, {
                    key: "getDefaultAudioStateReason",
                    value: function(e) {
                        var t = parseInt(e, 10);
                        if (isNaN(t)) return console.error(new Error("reasonBits cannot be converted to number: ".concat(e))), "";
                        var n = "",
                            i = p.DefaultMediaStateReasonBit.AudioReasonBit,
                            r = (t & i.MembersNumReachesN) === i.MembersNumReachesN,
                            o = (t & i.AudioOnNumReachesLimit) === i.AudioOnNumReachesLimit,
                            s = (t & i.AllMuted) === i.AllMuted,
                            a = (t & i.UnmuteNotAllowed) === i.UnmuteNotAllowed,
                            u = (t & i.MuteAfterJoin) === i.MuteAfterJoin;
                        return s ? (n = "主持人已将全体成员静音。", a && (n = "主持人已将全体成员静音，并不允许自我解除静音。")) : r ? n = "当前会议人数较多，已自动为您关闭麦克风。" : o ? n = "开麦人数超过上限。" : u ? (n = "主持人已将您静音。", a && (n = "主持人已将您静音，并不允许自我解除静音。")) : n = "主持人已将您静音!", n
                    }
                }, {
                    key: "getDefaultVideoStateReason",
                    value: function(e) {
                        return ""
                    }
                }, {
                    key: "getAccessType",
                    value: function() {
                        return this.accessType
                    }
                }, {
                    key: "setAccessType",
                    value: function(e) {
                        e = parseInt(e, 10), (isNaN(e) || 0 != e && 1 != e) && console.warn("ASSERT: setAccessType invalid val, ".concat(e)), this.accessType = e
                    }
                }, {
                    key: "getMeetingInfoMaskFlag",
                    value: function() {
                        return this.meetingInfoMaskFlag
                    }
                }, {
                    key: "setMeetingInfoMaskFlag",
                    value: function(e) {
                        this.logger.report(1, "pre_meeting", "set meetingInfoMaskFlag to ".concat(e, "\n            mask meeting code: ").concat(this.isMeetingCodeFullyVisible() ? "N" : "Y", "\n            hide meeting link: ").concat(this.isMeetingInviteLinkVisible() ? "N" : "Y", "\n        ")), this.meetingInfoMaskFlag = e
                    }
                }, {
                    key: "isMeetingCodeFullyVisible",
                    value: function() {
                        return 0 == (this.getMeetingInfoMaskFlag() & 1 << S.MeetingCode)
                    }
                }, {
                    key: "isMeetingInviteLinkVisible",
                    value: function() {
                        return 0 == (this.getMeetingInfoMaskFlag() & 1 << S.InviteLink)
                    }
                }, {
                    key: "dissolveMeeting",
                    value: function(e) {
                        console.assert(e > 0, "meeting_id is necessary");
                        var t = {
                            meeting_id: e,
                            reason: "1",
                            code: "0"
                        };
                        return this.xmpp_service.dissolveMeetingRequest(t), !0
                    }
                }, {
                    key: "onQueryMeetingItemListCallBack",
                    value: function(e, t) {
                        var n = this.getEventHandler("query_meeting_item_list");
                        if (e) {
                            var i = t.meeting_item_list || [];
                            if (i.length > 0) {
                                var r = i[0];
                                r.hasOwnProperty("meeting_info_mask_flag") && this.setMeetingInfoMaskFlag(r.meeting_info_mask_flag)
                            } else this.logger.report(3, "pre_meeting", "no meeting items")
                        }
                        n(e, t)
                    }
                }, {
                    key: "onCreateMeetingCallBack",
                    value: function(e, t) {
                        var n = this.getEventHandler("create_meeting");
                        this.logger.report(1, "pre_meeting", "schedule meeting rep flag:", e), "object" === a(t) && this.logger.report(1, "pre_meeting", "schedule meeting rep data:", t), n(e, t)
                    }
                }, {
                    key: "onUpdateMeetingCallBack",
                    value: function(e, t) {
                        this.getEventHandler("update_meeting")(e, t)
                    }
                }, {
                    key: "onMeetingModifiedCallBack",
                    value: function(e, t) {
                        this.getEventHandler("meeting_modified")(e, t)
                    }
                }, {
                    key: "onNotifySchedule",
                    value: function(e, t) {
                        this.getEventHandler("notify_schedule")(e, t)
                    }
                }, {
                    key: "onNotifyMeetingItemUpdate",
                    value: function(e, t) {
                        this.getEventHandler("notify_meeting_item_update")(e, t)
                    }
                }, {
                    key: "onMeetingInviteeNotify",
                    value: function(e, t) {
                        this.getEventHandler("meeting_invitee_notify")(e, t)
                    }
                }, {
                    key: "onQueryMeetingItemCallBack",
                    value: function(e, t) {
                        this.getEventHandler("query_meeting_item")(e, t)
                    }
                }, {
                    key: "onCancelMeetingCallBack",
                    value: function(e, t) {
                        this.getEventHandler("cancel_meeting")(e, t)
                    }
                }, {
                    key: "onJoinMeetingCallBack",
                    value: function(e, t) {
                        var n = this.getEventHandler("join_meeting");
                        if (e) {
                            b(this, t);
                            var i = !(!this.savedAudioOn || "0" === this.savedAudioOn),
                                r = !(!this.savedVideoOn || "0" === this.savedVideoOn),
                                o = function(e) {
                                    return e.split("/")[0]
                                }(this.xmpp_service.jid);
                            if (this.mediaRoomParams = {
                                    user_id: [p.INSTANCE_ID.toString(), o, this.app_id].join("_"),
                                    user_sig: t.qcloud_user_signature,
                                    sdk_appid: this.app_id,
                                    account_type: 31778,
                                    is_enable_audio: i,
                                    is_enable_video: r,
                                    room_id: t.av_room_id,
                                    private_key: t.qcloud_user_private_map_key,
                                    role: "user"
                                }, this.savedJoinMeetingData = t, this.savedJoinMeetingData.room_user_id = this.mediaRoomParams.user_id, this.logger.debug("Premeeting onJoinMeetingCallBack data:", t), p.INSTANCE_ID === p.InstanceType.INSTANCE_WEB) {
                                if (!1 === this.savedAutoRTC) return void n(!0, this.savedJoinMeetingData);
                                this.logger.report(1, "join_meeting", "initWebRtc with param data:", JSON.stringify(this.mediaRoomParams)), this.rtc_service.initWebRtc(this.mediaRoomParams)
                            } else {
                                this.meetingUserCtrl.setMeetingId(this.savedJoinMeetingData.meeting_id), this.meetingUserCtrl.setRoomType(this.savedJoinMeetingData.enter_room_type || p.RoomType.MEETING_ROOM), this.meetingUserCtrl.setSelfUserId({
                                    unique_id: this.savedJoinMeetingData.unique_id,
                                    uid: o
                                }), this.meetingUserCtrl.setSelfNickname(this.savedNickName), this.meetingUserCtrl.setMediaRoomState(p.MediaRoomState.OUT), this.meetingUserCtrl.setIsWebinar("1" === this.savedJoinMeetingData.meeting_type_flags), this.savedJoinMeetingData.enter_room_type === p.RoomType.WAITING_ROOM ? this.logger.debug("joined in waiting room") : (this.logger.debug("joined in meeting room"), this.meetingUserCtrl.saved_user_audio_switch = !(!this.savedUserAudioSwitch || "0" === this.savedUserAudioSwitch), this.meetingUserCtrl.queryUserStatus({
                                    meeting_id: this.savedJoinMeetingData.meeting_id,
                                    user_type: "2",
                                    is_callin: "0",
                                    participation_status_list: [1, 6]
                                }));
                                var s = this.savedJoinMeetingData.enter_room_type === p.RoomType.MEETING_ROOM ? 0 : 1;
                                this.meetingUserCtrl.startMeetingPing(s), n(!0, this.savedJoinMeetingData)
                            }
                        } else n(!1, t)
                    }
                }, {
                    key: "joinMediaRoom",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = {
                                nickname: this.savedNickName,
                                video_on: this.savedVideoOn,
                                video_reason: this.savedVideoReason,
                                audio_on: this.savedAudioOn,
                                audio_reason: this.savedAudioReason,
                                share_on: "0",
                                share_reason: p.SwitchReason.BYSELF,
                                avatar_type: 1,
                                access_type: this.getAccessType()
                            };
                        Object.assign(t, e), this.meetingUserCtrl.updateUserInfo(t, p.UserState.JOIN)
                    }
                }, {
                    key: "onInitRtcCallBack",
                    value: function(e, t) {
                        (this.getEventHandler("init_webrtc")(e, t), e) ? this.rtc_service.enterRoom(this.mediaRoomParams): (this.savedJoinMeetingData.initRTCInfo = {}, this.savedJoinMeetingData.initRTCInfo.msg = "init rtc failed", this.savedJoinMeetingData.initRTCInfo.data = t, console.log("Premeeting onInitRtcCallBack calling back join_meeting, data:", this.savedJoinMeetingData), this.getEventHandler("join_meeting")(!1, this.savedJoinMeetingData))
                    }
                }, {
                    key: "onEnterMediaRoomCallBack",
                    value: function(e, t) {
                        this.getEventHandler("webrtc_enter_room")(e, t);
                        var n = this.getEventHandler("join_meeting");
                        if (this.savedJoinMeetingData.initRTCInfo = {}, this.savedJoinMeetingData.initRTCInfo.data = t, !e) return this.savedJoinMeetingData.initRTCInfo.msg = "enter media room failed", void n(!1, this.savedJoinMeetingData);
                        this.meetingUserCtrl.setMeetingId(this.savedJoinMeetingData.meeting_id), this.meetingUserCtrl.setRoomType(this.savedJoinMeetingData.enter_room_type || p.RoomType.MEETING_ROOM), this.meetingUserCtrl.setSelfUserId({
                            uid: function(e) {
                                return e.split("/")[0]
                            }(this.xmpp_service.jid)
                        }), this.meetingUserCtrl.setSelfNickname(this.savedNickName), this.meetingUserCtrl.updateUserInfo({
                            nickname: this.savedNickName,
                            video_on: "0",
                            video_reason: this.savedVideoReason,
                            audio_on: "0",
                            audio_reason: this.savedAudioReason,
                            share_on: "0",
                            share_reason: p.SwitchReason.BYSELF,
                            avatar_type: 1
                        }, p.UserState.JOIN), this.meetingUserCtrl.saved_user_audio_switch = !(!this.savedUserAudioSwitch || "0" === this.savedUserAudioSwitch), this.meetingUserCtrl.queryMeetingSettings(), this.meetingUserCtrl.queryUserStatus({
                            meeting_id: this.savedJoinMeetingData.meeting_id,
                            user_type: "2",
                            is_callin: "0",
                            participation_status_list: [1, 6]
                        });
                        var i = !(!this.savedAudioOn || "0" === this.savedAudioOn);
                        console.log("onEnterMediaRoomCallBack enableAudio:", i), i || (this.rtc_service.muteAudioFlag = !0);
                        var r = this.savedJoinMeetingData.enter_room_type === p.RoomType.MEETING_ROOM ? 0 : 1;
                        this.meetingUserCtrl.startMeetingPing(r), n(!0, this.savedJoinMeetingData)
                    }
                }, {
                    key: "onDissolveMeetingCallBack",
                    value: function(e, t) {
                        this.getEventHandler("dissolve_meeting")(e, t)
                    }
                }, {
                    key: "onLeaveMediaRoomCallBack",
                    value: function(e, t) {
                        this.getEventHandler("webrtc_leave_room")(e, t), e || console.error("rtc leave room fail"), this.getEventHandler("leave_room")(e, t)
                    }
                }, {
                    key: "onQueryMeetingPayInfo",
                    value: function(e, t) {
                        this.getEventHandler("query_meeting_pay_info")(e, t)
                    }
                }, {
                    key: "onLocalStreamAdd",
                    value: function(e) {
                        e ? "0" === this.savedAudioOn && "0" === this.savedVideoOn || this.meetingUserCtrl.updateUserInfo({
                            audio_on: this.savedAudioOn,
                            audio_reason: this.savedAudioReason,
                            video_on: this.savedVideoOn,
                            video_reason: this.savedVideoReason
                        }, p.UserState.UPDATE) : this.logger.report(1, "pre_meeting", "onLocalStreamAdd but !info")
                    }
                }, {
                    key: "_formatParams",
                    value: function(e, t, n, i) {
                        t.hasOwnProperty(n) ? e[n] = t[n] : null !== i && (e[n] = i)
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === t.prototype.instance && (t.prototype.instance = new t), t.prototype.instance
                    }
                }]), t
            }(y);
        e.exports = E
    }, function(e, t, n) {
        var i = n(2),
            r = n(3),
            o = function() {
                function e() {
                    i(this, e)
                }
                return r(e, [{
                    key: "checkTBSVersion",
                    value: function() {
                        for (var e = navigator.userAgent.split(" "), t = !1, n = 0, i = 0; i < e.length; i++) {
                            var r = e[i];
                            if (-1 !== r.indexOf("TBS") || -1 !== r.indexOf("tbs")) {
                                t = !0;
                                var o = r.split("/")[1];
                                n = parseInt(o) || 0
                            }
                        }
                        return {
                            isTBS: t,
                            TBSversion: n,
                            isTBSValid: n >= 43600
                        }
                    }
                }, {
                    key: "isFF",
                    value: function() {
                        return -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")
                    }
                }, {
                    key: "isChrome",
                    value: function() {
                        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
                    }
                }, {
                    key: "isSafari",
                    value: function() {
                        var e, t = navigator.userAgent.toLowerCase(),
                            n = function(e) {
                                return -1 === t.indexOf(e)
                            },
                            i = (e = "safari/", t.indexOf(e) > -1),
                            r = n("chrome/"),
                            o = n("qq/") && n("mqqbrowser");
                        return i && r && o
                    }
                }, {
                    key: "foundChrome",
                    value: function() {
                        return navigator.userAgent.toLowerCase().indexOf("chrome/") > -1
                    }
                }, {
                    key: "isiOS",
                    value: function() {
                        return /iPhone|iPad|iPod/i.test(navigator.userAgent)
                    }
                }, {
                    key: "isAndroid",
                    value: function() {
                        return /Android/i.test(navigator.userAgent)
                    }
                }, {
                    key: "isWindows",
                    value: function() {
                        return /Windows/i.test(navigator.userAgent)
                    }
                }, {
                    key: "isQQ",
                    value: function() {
                        return /QQ|SQ/.test(navigator.userAgent)
                    }
                }, {
                    key: "isWX",
                    value: function() {
                        return /MicroMessenger/.test(navigator.userAgent)
                    }
                }, {
                    key: "isMQQBrowser",
                    value: function() {
                        return /MQQBrowser/.test(navigator.userAgent)
                    }
                }, {
                    key: "isEdge",
                    value: function() {
                        return /Edge/.test(navigator.userAgent)
                    }
                }, {
                    key: "isIE",
                    value: function() {
                        return /Trident/.test(navigator.userAgent)
                    }
                }, {
                    key: "getiOSVersion",
                    value: function() {
                        var e = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        return e && [parseInt(e[1]), parseInt(e[2]), parseInt(e[3] || 0)] || !1
                    }
                }, {
                    key: "getSafariVersion",
                    value: function() {
                        var e = navigator.userAgent.match(/Version\/(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
                        return e && [parseInt(e[1]), parseInt(e[2] || 0), parseInt(e[3] || 0)] || !1
                    }
                }, {
                    key: "checkH264Support",
                    value: function(e) {
                        if ("RTCPeerConnection" in window) try {
                            var t = new RTCPeerConnection(null);
                            t.createOffer({
                                offerToReceiveAudio: 1,
                                offerToReceiveVideo: 1
                            }).then((function(n) {
                                -1 === n.sdp.toLowerCase().indexOf("h264") ? e(!1) : e(!0), t.close()
                            }), (function(t) {
                                e(!1)
                            }))
                        } catch (t) {
                            e(!1)
                        } else e(!1)
                    }
                }, {
                    key: "isSupportWebRTC",
                    value: function() {
                        var e = !1;
                        ["RTCPeerConnection", "webkitRTCPeerConnection", "RTCIceGatherer"].forEach((function(t) {
                            e || t in window && (e = !0)
                        }));
                        var t = this.checkTBSVersion();
                        if (t.isTBS) t.isTBSValid || (e = !1);
                        else if (this.isFF()) e = !1;
                        else if (this.isSafari()) {
                            var n = this.getiOSVersion(),
                                i = this.getSafariVersion();
                            n ? 11 === n[0] && n[1] >= 1 || n[0] > 11 || (e = !1) : i && (11 === i[0] && i[1] >= 1 || i[0] > 11) || (e = !1)
                        } else this.isQQ() && !this.isWindows() || this.isWX() || this.isMQQBrowser() || !this.foundChrome() ? e = !1 : this.isChrome() ? (this.isiOS() || this.isAndroid()) && (e = !1) : (this.isEdge() || this.isIE()) && (e = !1);
                        console.log("sdk result isWebRTCSupported:", e);
                        var r = {
                            support: e,
                            isTBS: t.isTBS,
                            isTBSValid: t.isTBSValid,
                            TBSversion: t.TBSversion,
                            isSafari: this.isSafari(),
                            iOSVersion: this.getiOSVersion(),
                            screenshare: !1,
                            isFF: this.isFF()
                        };
                        return this.checkH264Support((function(e) {
                            r.h264Support = e, e || (r.support = !1)
                        })), r.support
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return void 0 === e.prototype.instance && (e.prototype.instance = new e), e.prototype.instance
                    }
                }]), e
            }();
        e.exports = o
    }]);
});