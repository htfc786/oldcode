define("clients/WemeetClient.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../@babel/runtime/helpers/asyncToGenerator"),
        i = require("../@babel/runtime/helpers/typeof"),
        n = require("../@babel/runtime/helpers/classCallCheck"),
        r = require("../@babel/runtime/helpers/createClass"),
        o = require("../@babel/runtime/helpers/possibleConstructorReturn"),
        a = require("../@babel/runtime/helpers/assertThisInitialized"),
        s = require("../@babel/runtime/helpers/inherits"),
        u = require("../@babel/runtime/helpers/createSuper"),
        c = require("../utils/EventEmitter"),
        _ = require("../sdk/wemeet"),
        g = require("../stores/AppStore"),
        l = require("../stores/UserStore"),
        p = require("../utils/meetingTime"),
        d = require("../utils/logger"),
        y = require("../utils/util"),
        h = require("../configs/AppConfig"),
        f = new d({
            pageName: "WeMeetClient",
            aegisLogEnable: !0,
            wxLogEnable: !1
        }),
        m = ["join_meeting", "meeting_modified", "query_meeting_item_list", "query_meeting_pay_info"],
        v = ["user_join", "user_leave", "user_offline", "user_update", "user_status", "turn_video", "turn_audio", "user_kicked", "kickout", "kicked_out", "change_host_push", "change_co_host_push", "leave_meeting", "meeting_will_limited", "modify_user_info", "refresh_media_auth_info", "query_meeting_settings", "query_ui_config", "host_status", "back_to_waiting_room", "waiting_user_status_timeout", "waiting_user_status_bad_response", "waiting_user_status_join_from_waiting_room", "waiting_user_status_leave_from_waiting_room", "waiting_user_status_leave_for_waiting_room", "waiting_user_status_i_am_in", "waiting_user_status_changed_by_self", "waiting_user_status_changed_by_host", "notify_meeting_settings_update", "notify_switch_media_stream", "notify_join_audio_mix_user_info", "waiting_user_status", "switch_user_role", "query_cloud_record_state", "cloud_record_state", "breakout_room_started", "report_media_stream_status", "report_media_stream_status_push", "get_webinar_participants_summary", "apply_permission", "member_raise_hand", "notify_user_be_put_handsdown", "notify_role_group_be_put_handsdown", "notify_permission_result", "directed_push", "query_user_sig", "im_message_events", "meeting_notice"],
        k = ["login", "logout"],
        b = {},
        w = function(d) {
            s(E, c);
            var w, S = u(E);

            function E() {
                var e;
                return n(this, E), E.prototype.instance ? o(e, E.prototype.instance) : ((e = S.call(this)).init(), E.prototype.instance = a(e), e)
            }
            return r(E, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.getSdkAppId();
                    this._removeEventLisenner();
                    var t = _.getInstance(e);
                    this.client = t, this.constants = t.constants, this.meetingUserCtrl = t.queryMeetingUserController(), this.preMeetingService = t.queryPreMeetingManager(), this.authService = t.queryAuthService(), this.weMeetSdkLoggerReportor = t.queryLoggerReportor(), this.xmpp = this.authService.xmppService, this._addEventLisenner(), this.setServerUrl(g.getXMPPWSUrl()), f.info("WemeetClient inited")
                }
            }, {
                key: "setServerUrl",
                value: function(e) {
                    f.info("set xmpp ws url: ".concat(e)), this.xmpp.setServerUrl(e)
                }
            }, {
                key: "getVersion",
                value: function() {
                    return this.client.getVersion()
                }
            }, {
                key: "setAppId",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.getSdkAppId();
                    this.client.setAppId(e)
                }
            }, {
                key: "isLoggedIn",
                value: function() {
                    return this.constants.LoginState.LOGIN_STATE_LOGIN === this.authService.getLoginState()
                }
            }, {
                key: "isLogging",
                value: function() {
                    return this.constants.LoginState.LOGIN_STATE_LOGGINING === this.authService.getLoginState()
                }
            }, {
                key: "xmppLogout",
                value: function() {
                    console.log("start logout..."), this.isLoggedIn() ? this.authService.logout() : console.warn("not logged in, cannot logout")
                }
            }, {
                key: "sendUserStatusLeave",
                value: function(e) {
                    f.info("send user_status(leave) for ".concat(e)), this.xmpp.sendUserStatusLeave({
                        meeting_id: e
                    }).catch((function() {}))
                }
            }, {
                key: "joinMeeting",
                value: function(e) {
                    this.preMeetingService.joinMeeting(e)
                }
            }, {
                key: "leaveMeeting",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = "object" === i(e) ? e : {
                            reason: e
                        },
                        r = n || {},
                        o = r.reason,
                        a = o || this.constants.LeaveReason.SELF;
                    return this.isLoggedIn() ? !t && (this.meetingUserCtrl.isInMeeting() ? (f.info("leaveMeeting invoked", "leave-meeting"), this.endMeetingTime(), n.reason = a, this.meetingUserCtrl.leaveMeeting(n), !0) : (f.warn("not in meeting", "leave-meeting"), !1)) : (f.warn("not logged in", "leave-meeting"), !1)
                }
            }, {
                key: "endMeetingTime",
                value: function() {
                    var e = require("../clients/BeaconClient");
                    p.end();
                    var t = p.getDurationTime(),
                        i = p.getValidDurationTime();
                    f.info("durationTime: ".concat(t, "; validDurTime: ").concat(i), "MeetingTime"), e.report("meeting_av_duration", {
                        duration_sec: t
                    }), e.report("meeting_duration_active", {
                        duration_sec: i
                    }), p.init()
                }
            }, {
                key: "isXMPPTokenValid",
                value: function() {
                    var e = l.getXMPPToken(),
                        t = l.getXMPPTokenExp();
                    return e ? isNaN(t) || t < 0 ? (f.error("invalid xmppTokenEXP: ".concat(t)), !1) : y.isTimeAfterNow(t) : (f.warn("no xmpp token found"), !1)
                }
            }, {
                key: "xmppLogin",
                value: (w = t(e().mark((function t() {
                    var i, n, r, o, a, s, u, c, _, p;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = this.isLoggedIn() || this.isLogging(), n = l.getOpenID(), r = l.getXMPPToken(), console.log("start login... current login status: ", this.authService.getLoginState()), !i) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", "");
                            case 6:
                                if (n) {
                                    e.next = 9;
                                    break
                                }
                                throw f.error("no openID, need to requery it before xmpp login"), "登录失败(-1)";
                            case 9:
                                if (this.isXMPPTokenValid()) {
                                    e.next = 12;
                                    break
                                }
                                throw f.error("xmpp token expired, need to requery it before xmpp login"), "登录失败(-2)";
                            case 12:
                                if (o = g.getSdkAppId(), a = this.constants.AuthType.AUTH_TYPE_VISITOR, s = n, u = r, c = this.getVersion(), s) {
                                    e.next = 20;
                                    break
                                }
                                throw f.error("登录失败(-3)"), "登录失败(-3)";
                            case 20:
                                if (_ = {
                                        app_id: o,
                                        app_uid: s,
                                        app_token: u,
                                        token_obj: {
                                            app_id: o,
                                            device_id: "",
                                            network_type: "network_type",
                                            app_version: h.MP_WEMEET_VERSION,
                                            sdk_version: c,
                                            auth_type: a
                                        },
                                        auth_type: a,
                                        instance_id: this.constants.InstanceType.INSTANCE_MP,
                                        sdk_version: c
                                    }, f.info("xmpp login with: ".concat(JSON.stringify(_))), (p = this.authService.login(_)) === this.constants.SdkError.SDK_ERROR_SUCCESS) {
                                    e.next = 26;
                                    break
                                }
                                throw f.error("xmpp login failed: 登录失败(-4) Hint: SDK_ERROR_".concat(p)), "登录失败(-4)";
                            case 26:
                                return e.abrupt("return", "");
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function() {
                    return w.apply(this, arguments)
                })
            }, {
                key: "joinTimeCompare",
                value: function(e, t) {
                    return e.participation_status_stamp < t.participation_status_stamp ? -1 : t.participation_status_stamp < e.participation_status_stamp ? 1 : 0
                }
            }, {
                key: "getRoomTypeName",
                value: function(e) {
                    return e === this.constants.RoomType.MEETING_ROOM ? "Meeting Room" : e === this.constants.RoomType.WAITING_ROOM ? "Waiting Room" : "Unknown Room"
                }
            }, {
                key: "getKickoutReasonBy",
                value: function(e) {
                    var t = "";
                    switch (e) {
                        case 2:
                            t = "会议已结束";
                            break;
                        case 1:
                            t = "您已经被主持人移出会议";
                            break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            t = "";
                            break;
                        case 7:
                            t = "会议已取消";
                            break;
                        case 13:
                            t = "会议时长到达上限";
                            break;
                        default:
                            t = "您已经被主持人移出会议"
                    }
                    return t || (t = "您已离开会议"), t
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this.subscribe(e, t, i)
                }
            }, {
                key: "_addEventLisenner",
                value: function() {
                    var e = this;
                    m.forEach((function(t) {
                        b[t] = function() {
                            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                            e._handleReceivedMsgLogger(t, n), e.publish.apply(e, [t].concat(n))
                        }, e.preMeetingService.registerEventHandler(t, b[t])
                    })), v.forEach((function(t) {
                        b[t] = function() {
                            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                            e._handleReceivedMsgLogger(t, n), e.publish.apply(e, [t].concat(n))
                        }, e.meetingUserCtrl.registerEventHandler(t, b[t])
                    })), k.forEach((function(t) {
                        b[t] = function() {
                            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                            e._handleReceivedMsgLogger(t, n), e.publish.apply(e, [t].concat(n))
                        }, e.authService.registerEventHandler(t, b[t])
                    }))
                }
            }, {
                key: "_handleReceivedMsgLogger",
                value: function(e, t) {
                    try {
                        if (E.meaninglessProtocols.includes(e)) return;
                        f.info(JSON.stringify(t), e)
                    } catch (t) {
                        f.warn("logger failed with: ".concat(t && t.message || t), e)
                    }
                }
            }, {
                key: "_removeEventLisenner",
                value: function() {
                    var e = this;
                    m.forEach((function(t) {
                        "function" == typeof b[t] && (e.preMeetingService.removeEventHandler(t, b[t]), delete b[t])
                    })), v.forEach((function(t) {
                        "function" == typeof b[t] && (e.meetingUserCtrl.removeEventHandler(t, b[t]), delete b[t])
                    })), k.forEach((function(t) {
                        "function" == typeof b[t] && (e.authService.removeEventHandler(t, b[t]), delete b[t])
                    }))
                }
            }, {
                key: "getReadableAudioStateReason",
                value: function(e) {
                    return this.preMeetingService.getDefaultAudioStateReason(e)
                }
            }, {
                key: "getAVuid",
                value: function(e) {
                    var t = e.id ? this.meetingUserCtrl.getAVRoomUserId(e.id) : "";
                    if (!t) return f.error("invalid itemavid got from this guy: ".concat(JSON.stringify(e))), "";
                    if ("2" === e.id.user_type) {
                        if (!e.id.device_type) return f.error("user is PSTN, but no device_type got."), "";
                        if ("0" === e.id.device_type) t = e.id.av_uid;
                        else {
                            if ("1" !== e.id.device_type) return f.warn("unknown PSTN sub-device type got: ".concat(e.id.device_type)), "";
                            t = "1_".concat(e.id.uid, "_").concat(e.id.app_id)
                        }
                    }
                    return t
                }
            }, {
                key: "getKeyById",
                value: function(e) {
                    return e ? Object.prototype.hasOwnProperty.call(e, "instance_id") ? Object.prototype.hasOwnProperty.call(e, "uid") ? Object.prototype.hasOwnProperty.call(e, "app_id") ? Object.prototype.hasOwnProperty.call(e, "user_type") ? Object.prototype.hasOwnProperty.call(e, "unique_id") ? this.meetingUserCtrl.formKeyById(e) : (f.error("getKeyById failed: no 'unique_id' found in ".concat(JSON.stringify(e), ".\n      ").concat(new Error("getKeyById-6").stack)), "") : (f.error("getKeyById failed: no 'user_type' found in ".concat(JSON.stringify(e), ".\n      ").concat(new Error("getKeyById-5").stack)), "") : (f.error("getKeyById failed: no 'app_id' found in ".concat(JSON.stringify(e), ".\n      ").concat(new Error("getKeyById-4").stack)), "") : (f.error("getKeyById failed: no 'uid' found in ".concat(JSON.stringify(e), ".\n      ").concat(new Error("getKeyById-3").stack)), "") : (f.error("getKeyById failed: no 'instance_id' found in ".concat(JSON.stringify(e), ".\n      ").concat(new Error("getKeyById-2").stack)), "") : (f.error("getKeyById failed: invalid id ".concat(e, ". ").concat(new Error("getKeyById-1").stack)), "")
                }
            }]), E
        }();
    w.meaninglessProtocols = ["notify_join_audio_mix_user_info", "user_status", "user_join", "user_update", "user_leave", "report_media_stream_status", "report_media_stream_status_push", "get_webinar_participants_summary"];
    var S = new w;
    module.exports = S;
});