define("actions/MeetingAction.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../@babel/runtime/helpers/Arrayincludes");
    var e = require("../@babel/runtime/helpers/objectSpread2"),
        t = require("../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../@babel/runtime/helpers/asyncToGenerator"),
        i = c(require("../Helpers/TRTC")),
        o = c(require("../stores/UserStore.js")),
        a = c(require("../utils/plugins/mediaController")),
        r = c(require("../sdk/tim/tim-sdk.js")),
        s = require("../sdk/tim/interface/im-biz-types");

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    console.log("MeetingAction.js loaded start");
    var d = require("../utils/Dispatcher"),
        u = require("../clients/WemeetClient"),
        l = require("../stores/MeetingStore"),
        _ = require("../utils/logger"),
        f = require("../constants/MeetingType"),
        m = require("../stores/MembersStore"),
        p = require("../utils/util"),
        g = require("../constants/MediaMachineType"),
        h = require("../utils/uploadStreamController.js"),
        S = require("../actions/MembersAction"),
        v = require("../clients/BeaconClient"),
        R = require("../constants/MultMediaState"),
        T = require("../stores/AppStore"),
        E = require("../clients/RavenClient"),
        M = require("../configs/AppConfig"),
        I = require("../utils/performanceReporter.js"),
        y = require("../stores/MediaStateManager.js"),
        A = require("../constants/LivepusherNetstatusMeasure"),
        O = require("../utils/util").setValueInLocalStorage,
        w = require("js-base64").Base64,
        C = new _({
            pageName: "MeetingAction",
            aegisLogEnable: !0,
            wxLogEnable: !1
        }),
        N = u.meetingUserCtrl,
        U = u.constants,
        L = u.constants || {},
        b = L.SwitchReason,
        k = void 0 === b ? {} : b,
        P = L.EnterRoomType,
        D = 0,
        x = {
            inited: !1,
            trtc: null,
            init: function() {
                this.inited || (this.switchAudioReason = k.BYSELF, this._addListener(), this.inited = !0)
            },
            setSwitchAudioReason: function(e) {
                e === k.BYSELF || e === k.BYHOST ? this.switchAudioReason = e : C.error("Invalid reason set to switchAudioReason: ".concat(e))
            },
            getSwitchAudioReason: function() {
                return this.switchAudioReason
            },
            setAudioEnable: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                d.dispatch({
                    type: f.AUDIO_ENABLE_CHANGE,
                    payload: {
                        data: e
                    }
                })
            },
            setIsJoiningFromWaitingRoom: function(e) {
                l.setIsJoiningFromWaitingRoom(e)
            },
            setIsLeavingFromWaitingRoom: function(e) {
                l.setIsLeavingFromWaitingRoom(e)
            },
            setIsLeavingForWaitingRoom: function(e) {
                l.setIsLeavingForWaitingRoom(e)
            },
            updateMediaMachineType: function(e) {
                l.setCurrentMediaMachineType(e)
            },
            updateMixAudioStream: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = l.getMixAudioStream();
                e.playURL !== t.playURL && d.dispatch({
                    type: f.MIX_AUDIO_STREAM_CHANGE,
                    payload: {
                        data: e
                    }
                })
            },
            setJoinParam: function(e) {
                d.dispatch({
                    type: f.JOIN_PARAM_UPDATE,
                    payload: e
                })
            },
            _addListener: function() {
                u.on("join_meeting", this._handleJoinMeeting), u.on("leave_meeting", this._handleLeaveMeeting), u.on("query_meeting_item_list", this._handleQueryMeetingInfo), u.on("query_meeting_pay_info", this._handleQueryMeetingPayInfo, this), u.on("user_status", this._handleUserStatusUpdate), u.on("host_status", this._handleHostStatusUpdate), u.on("turn_video", this._handleTurnVideo, this), u.on("turn_audio", this._handleTurnAudio, this), u.on("breakout_room_started", this._handleBreakoutRoom), u.on("member_raise_hand", this._handleRaiseHandComplete), u.on("kicked_out", this._handleKickedOut), u.on("meeting_modified", this._handleMeetingModified), u.on("notify_switch_media_stream", this._handleNotifySwitchMediaStream), u.on("notify_meeting_settings_update", this._handleNotifyMeetingSettingsUpdate, this), u.on("meeting_will_limited", this._handleMeetingWillLimited, this), u.on("modify_user_info", this._handleModifyUserInfo), u.on("refresh_media_auth_info", this._handleRefreshMediaAuthInfo), u.on("waiting_user_status_join_from_waiting_room", this._handleJoinFromWaitingRoom), u.on("waiting_user_status_leave_from_waiting_room", this._handleLeaveFromWaitingRoom), u.on("waiting_user_status_leave_for_waiting_room", this._handleBackToWaitingRoom), u.on("waiting_user_status_i_am_in", this._handleIamInWaitingRoom, this), u.on("query_meeting_settings", this._handleQueryMeetingSettings), u.on("query_ui_config", this._handleQueryMeetingUiCfg), u.on("switch_user_role", this._handleSwitchUserRole), u.on("cloud_record_state", this._handleCloudRecordState, this), u.on("query_cloud_record_state", this._handleQueryCloudRecordState, this), u.on("get_webinar_participants_summary", this._handleGetParticipantsSummary, this), u.on("apply_permission", this._handleApplyPermission, this), u.on("notify_user_be_put_handsdown", this._handleNotifyHandsDown, this), u.on("notify_role_group_be_put_handsdown", this._handleNotifyGroupHandsDown, this), u.on("notify_permission_result", this._handleNotifyPermissionRes, this), u.on("directed_push", this._handleDirectedPush, this), u.on("query_user_sig", this._handleUserSig, this), u.on("meeting_notice", this._meetingNotice, this)
            },
            _meetingNotice: function(e, t) {
                if (e) {
                    l.getNoticeVersion(), t.notice_version;
                    this.queryMeetingNotice()
                }
            },
            _handleUserSig: function(e, t) {
                if (e) {
                    var n = (null == t ? void 0 : t.sig_list) || [];
                    o.default.setUserSig(n)
                }
            },
            _handleNotifyHandsDown: function(e, t) {
                wx.showToast({
                    icon: "none",
                    title: "主持人已将您的手放下"
                }), l.setIsHandsUp(!1), l.onHandsDownSucc()
            },
            _handleNotifyGroupHandsDown: function(e, t) {
                l.getIsHandsUp() && (l.setIsHandsUp(!1), l.onHandsDownSucc(), wx.showToast({
                    icon: "none",
                    title: "主持人已将您的手放下"
                }))
            },
            _handleNotifyPermissionRes: function(e, t) {
                C.info("_handleNotifyPermissionRes: ".concat(JSON.stringify(t))), l.setIsHandsUp(!1);
                var n = l.getMeetingID();
                if (e) {
                    var i = t.permissionType,
                        o = t.permissionState,
                        a = t.userPersonal;
                    switch (i) {
                        case "0":
                            l.setApplyMicIng(!1), l.setPermissionUserInfo(a), O("".concat(n, "_userPermission"), a), l.emit(f.APPLY_PERMISSION_AUDIO_SUCC, {
                                data: "1" === o
                            });
                            break;
                        case "3":
                            "0" === o && this.turnOffAudio(), l.setAllowSpeak("1" === o), l.setPermissionUserInfo(a), O("".concat(n, "_userPermission"), a)
                    }
                }
            },
            _handleDirectedPush: function(e, t) {
                var n = t || {},
                    i = n.type,
                    o = n.content;
                2 === i && l.emit(f.DIRECTED_PUSH_TOAST, {
                    data: o
                })
            },
            _handleBreakoutRoom: function(e, t) {
                d.dispatch({
                    type: e ? f.BREAKOUT_ROOM_SUCC : f.BREAKOUT_ROOM_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleJoinMeeting: function(e, t) {
                if (e) return N.setMediaController(a.default.getInstance(x)), void d.dispatch({
                    type: f.JOIN_MEETING_SUCC,
                    payload: {
                        flag: e,
                        data: t
                    }
                });
                d.dispatch({
                    type: f.JOIN_MEETING_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleLeaveMeeting: function(e, t) {
                C.warn("SHOULD NOT REACH HERE: _handleLeaveMeeting")
            },
            queryMeetingInfo: function(e) {
                u.preMeetingService.internalQueryMeetingItemList({
                    meeting_code: e
                })
            },
            _handleQueryMeetingInfo: function(e, t) {
                e ? d.dispatch({
                    type: f.QUERY_MEETING_ITEM_LIST_SUCC,
                    payload: {
                        flag: e,
                        data: t
                    }
                }) : d.dispatch({
                    type: f.QUERY_MEETING_ITEM_LIST_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleQueryMeetingPayInfo: function(e, t) {
                var n = this;
                if (!e || !t) return C.assert("_handleQueryMeetingPayInfo failed, flag = ".concat(e, ", data = ").concat(JSON.stringify(t))), void d.dispatch({
                    type: f.QUERY_MEETING_PAY_INFO_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                });
                if (isNaN(t.expire_time) || t.expire_time < 0) C.warn('WARNING: the backend does not give us a "expire_time". Maybe this account is unlimited. data='.concat(JSON.stringify(t)));
                else {
                    if (t.expire_time < (new Date).getTime() / 1e3) return C.warn("WARNING: the backend give us a expired time, ignored, just take out the countdown_time"), isNaN(t.countdown_time) || t.countdown_time < 1 ? void C.warn("后台给的countdown_time有问题：".concat(t.countdown_time)) : void l.setPayInfoCountdownThreshhold(t.countdown_time);
                    if (isNaN(t.countdown_time) || t.countdown_time < 1) C.info("There's no necessary to show countdown anymore for non-personal account");
                    else {
                        l.setPayInfoCountdownThreshhold(t.countdown_time), l.setPayInfoMeetingExpireTime(t.expire_time), C.info("meeting will expire after ".concat(parseInt((t.expire_time - (new Date).getTime() / 1e3) / 60, 10), "min,\n      meeting will show countdown when only ").concat(parseInt(t.countdown_time / 60, 10), "min left")), 0 < l.getPayInfoCountdownTimer() && (C.warn("countdownTimer should not greater that 0 because this is the first time we start countdown timer"), this.stopTimerOfOfMeetingTimeCountdown());
                        var i = setInterval((function() {
                            n.meetingTimeCountDown()
                        }), 1e3);
                        l.setPayInfoCountdownTimer(i)
                    }
                }
            },
            stopTimerOfOfMeetingTimeCountdown: function() {
                0 < l.getPayInfoCountdownTimer() && (console.warn("meeting time countdown timer stopped"), clearInterval(l.getPayInfoCountdownTimer()), l.setPayInfoCountdownTimer(0))
            },
            meetingTimeCountDown: function() {
                var e = parseInt(l.getPayInfoMeetingExpireTime() - (new Date).getTime() / 1e3, 10);
                if (e < 1) return C.info("meeting's time is up, secondsLeft = ".concat(e, ",\n        expire at time(s): ").concat(l.getPayInfoMeetingExpireTime(), "(").concat(new Date(1e3 * l.getPayInfoMeetingExpireTime()), ")")), this.stopTimerOfOfMeetingTimeCountdown(), l.getPayInfoMeetingExpireTime() < 1 || !l.isInMeeting() ? void(l.isInMeeting() ? (C.error("那就更奇怪了，当前在会议中，而会议过期时间却是0，忽略"), v.reportError(100902)) : (C.warn("当前不在会议中，却执行到了倒计时结束，忽略"), v.reportError(100901))) : void l.freeMeetingIsEnd();
                if (e < l.getPayInfoCountdownThreshhold()) {
                    var t = "会议即将结束 ";
                    t += 86400 < e ? "大于1天" : 3600 < e ? "大于1小时" : new Date(1e3 * e).toISOString().substr(14, 5), l.updateMeetingTimeCountdown({
                        timeLeft: t
                    })
                }
            },
            _handleQueryMeetingSettings: function(e, t) {
                if (!e || !t) return C.assert("queryMeetingSettings failed: ".concat(e, ", ").concat(t)), void l.emit(f.QUERY_MEETING_SETTINGS_FAIL, {});
                var n = t.allow_audience_hands_up,
                    i = t.allow_look_audience_count;
                l.setAllowTurnOnBySelf(N.isAllowUnmuteBySelf()), l.setAllowHandsUp(n), l.setAllowLookAudienceCount(i), l.setIsHideMeetingCodeAndPassword(N.isHideMeetingCodePassword()), l.setIsMeetingLocked(N.isMeetingLocked()), l.setEnableWatermark(N.isEnableWatermark()), l.setMultipleRowWatermark(N.isMultipleRowWatermark()), l.emit(f.QUERY_MEETING_SETTINGS_SUCC, {})
            },
            _handleQueryMeetingUiCfg: function(e, t) {
                e && t ? l.setUiPstnCfg(N.isMeetingAbilityPstnOn()) : C.assert("queryMeetingUiCfg failed: ".concat(e, ", ").concat(t))
            },
            _handleGetParticipantsSummary: function(e, t) {
                e && t && d.dispatch({
                    type: f.QUERY_WEBINAR_SUMMARY_SUCC,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleApplyPermission: function(e, t) {
                e && t && d.dispatch({
                    type: f.APPLY_PERMISSION_SUCC,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleSwitchUserRole: function(e, t) {
                if (C.info("current mediaRoomState is: ".concat(l.mediaRoomState)), l.mediaRoomState !== R.MediaRoomState.REDIRECTING) {
                    if (!e || !t) return C.warn("_handleSwitchUserRole failed: flag=".concat(e, ", data=").concat(JSON.stringify(t))), void d.dispatch({
                        type: f.SWITCH_USER_ROLE_FAIL,
                        payload: {
                            flag: e,
                            data: t
                        }
                    });
                    var n = t.media_platform || {},
                        i = n.trtc_token,
                        o = n.role,
                        a = void 0 === o ? "" : o;
                    if (!i || 0 !== a && 1 !== a) return C.warn("_handleSwitchUserRole failed since no valid 'media_platform' provided: flag=".concat(e, ",\n      data=").concat(JSON.stringify(t))), void d.dispatch({
                        type: f.SWITCH_USER_ROLE_FAIL,
                        payload: {
                            flag: e,
                            data: t
                        }
                    });
                    var r = 0 === a ? f.SWITCH_USER_ROLE_TO_DC : f.SWITCH_USER_ROLE_TO_OC;
                    d.dispatch({
                        type: r,
                        payload: {
                            flag: e,
                            data: t
                        }
                    })
                } else C.info("_handleSwitchUserRole failed: is redirecting")
            },
            _handleCloudRecordState: function(e, t) {
                e && t ? this._fireCloudRecordStateChange(t) : C.assert("_handleCloudRecordState error: ".concat(e, ", ").concat(t))
            },
            _handleQueryCloudRecordState: function(e, t) {
                e && t ? this._fireCloudRecordStateChange(t) : C.assert("_handleQueryCloudRecordState error: ".concat(e, ", ").concat(t))
            },
            _handleReportStreamStatus: function() {
                this._isWaiting = !1
            },
            _fireCloudRecordStateChange: function(e) {
                var t = e.state,
                    n = "";
                switch (t) {
                    case 0:
                        n = f.CLOUD_RECORD_STATE_STOPPED;
                        var i = e.stop_reason || {},
                            o = i.code,
                            a = i.msg;
                        !isNaN(o) || a ? C.info("cloud record stopped for reason: ".concat(a, "(").concat(o, ")")) : C.warn("cloud record stopped for no reason");
                        break;
                    case 1:
                        n = f.CLOUD_RECORD_STATE_PREPARING;
                        break;
                    case 2:
                        n = f.CLOUD_RECORD_STATE_STARTED;
                        break;
                    case 3:
                        n = f.CLOUD_RECORD_STATE_PAUSED;
                        break;
                    default:
                        C.error("_fireCloudRecordStateChange error: unexpected state: ".concat(t))
                }
                n && d.dispatch({
                    type: n,
                    payload: {
                        flag: !0,
                        data: t
                    }
                })
            },
            _handleUserStatusUpdate: function(e, t) {
                d.dispatch({
                    type: e ? f.USER_STATUS_SUCC : f.USER_STATUS_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleHostStatusUpdate: function(e, t) {
                d.dispatch({
                    type: e ? f.HOST_STATUS_SUCC : f.HOST_STATUS_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleTurnVideo: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = e && "off" === n.status;
                if (i) l.setIsTurningVideo(!1);
                else if (this.isOperationOnMediaFailed(e, n, !1)) l.getCameraEnable() ? (C.warn("开摄像头失败，但当前已经打开了，需关闭"), this.turnOffVideo()) : l.setIsTurningVideo(!1);
                else {
                    var o = "on" === n.status;
                    if (l.getCameraEnable() === o) return C.warn("摄像头状态一致，不需要动:  ".concat(o ? "on" : "off")), void l.setIsTurningVideo(!1);
                    l.getUploadStreamController().addTask({
                        name: "turn-on-video",
                        action: function() {
                            t.setCameraSwitch(!0), N.updateVideoStatus(!0), l.setIsTurningVideo(!1)
                        },
                        succ: function() {},
                        fail: function(e) {
                            l.setIsTurningVideo(!1), C.error("open cam failed(-3): ".concat(e)), e ? p.showWXToast(e) : p.showWXToast("打开摄像头失败(-3)"), v.reportError(100414)
                        },
                        judgeData: n.media_platform
                    })
                }
            },
            setCameraSwitch: function(e) {
                l.getCameraEnable() !== e ? l.setCameraEnable(e) : console.log("Camera is right status there, ignore this setting: ", e ? "on" : "off")
            },
            isOperationOnMediaFailed: function(e, t, n) {
                var i, o = e && "on" === (null == t ? void 0 : t.status) && 1 === (null === (i = t.info) || void 0 === i ? void 0 : i.limitState);
                if (e && !o) return !1;
                var a = null === t,
                    r = !e && "9091" === (null == t ? void 0 : t.code),
                    s = n ? "麦克风" : "摄像头",
                    c = "";
                return c = a ? "操作超时，请重试" : r || o ? (null == t ? void 0 : t.msg) || (null == t ? void 0 : t.message) || (null == t ? void 0 : t.errmsg) || "开启".concat(s, "数量已达上限") : (null == t ? void 0 : t.msg) || (null == t ? void 0 : t.message) || (null == t ? void 0 : t.errmsg) || "操作失败，请重试", C.warn("操作".concat(s, "失败，原因：").concat(c)), l.emit(f.OPEN_MEDIA_FAILED, {
                    data: c
                }), !0
            },
            _handleTurnAudio: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                l.setRequestUpStreamToken("");
                var i = e && "off" === (null == n ? void 0 : n.status);
                if (i) {
                    var o = N.getTurnAudioReason();
                    return l.setMutedBySelf(o === U.SwitchReason.BYSELF), void this.turnAudio(!1, o)
                }
                if (this.isOperationOnMediaFailed(e, n, !0)) l.getAudioEnable() ? (C.warn("开麦失败，但当前已经打开了，需关闭"), this.turnOffAudio()) : l.setIsTurningAudio(!1);
                else {
                    var a = "on" === n.status;
                    if (l.getAudioEnable() === a) return l.setIsTurningAudio(!1), void C.info("麦克风状态一致，不需要动: ".concat(a ? "on" : "off"));
                    var r = N.getTurnAudioReason();
                    if (a && !l.isWebinarMeeting() && r === U.SwitchReason.BYSELF && 1 !== n.info.isGrant) {
                        var s = N.isMeetingAudioAllMuted();
                        return C.warn("自己请求开麦，但主持人已设置不可自行解除，忽略本次开麦. ".concat(s ? "全体静音" : "个人静音")), s ? l.emit(f.OPEN_AUDIO_BUT_ALL_HAS_BEEN_MUTED, {}) : l.emit(f.OPEN_AUDIO_BUT_NOT_ALLOWED, {}), void(l.getAudioEnable() ? (C.warn("开麦失败，但当前已经打开了麦克风，需关闭"), this.turnOffAudio()) : l.setIsTurningAudio(!1))
                    }
                    l.getUploadStreamController().addTask({
                        name: "turn-on-audio",
                        action: function() {
                            t.turnAudio(!0, r)
                        },
                        succ: function() {},
                        fail: function(e) {
                            C.error("open mic failed(-2): ".concat(e)), l.setIsTurningAudio(!1), l.emit(f.TURN_AUDIO_FAILED, {
                                data: e || "打开麦克风失败(-2)"
                            })
                        },
                        judgeData: n.media_platform
                    })
                }
            },
            setAudioSwitch: function(e) {
                l.getAudioEnable() !== e ? (e || m.getAudioMvsp() === l.getMyKeyString() && S.clearAudioMvsp(), l.setAudioEnable(e)) : C.warn("Audio is right status there, ignore this setting: ".concat(e ? "on" : "off"))
            },
            initUploadStreamController: function() {
                var e = new h;
                e.setJudgeFunc(this.redirectMediaRoomToDC.bind(this)), l.setUploadStreamController(e)
            },
            redirectMediaRoomToDC: function(e) {
                var i = this;
                return n(t().mark((function n() {
                    var o, a, r;
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!l.isOnDC()) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", "");
                            case 2:
                                if ("already-updated" === e || i.didUpdateMediaToken(e)) {
                                    t.next = 6;
                                    break
                                }
                                return C.reportEvent("switch_to_dc_failed", "token is required"), t.abrupt("return", "当前参会人数较多，已默认关闭你的麦克风和摄像头。");
                            case 6:
                                return C.info("switching to DC...current is on ".concat(l.isOnDC() ? "DC" : "OC")), I.start(1007), o = (new Date).getTime(), a = "", t.prev = 10, t.next = 13, i.redirectMediaRoom();
                            case 13:
                                t.next = 18;
                                break;
                            case 15:
                                t.prev = 15, t.t0 = t.catch(10), a = t.t0;
                            case 18:
                                if (r = (new Date).getTime() - o, !a) {
                                    t.next = 27;
                                    break
                                }
                                return C.error("switch to DC failed: ".concat(a)), T.getEnvSwitchEnable() && p.showWXToast("测试可见：切换DC失败!"), v.report("mp_switch_media_machine", {
                                    to: "DC",
                                    success: "N",
                                    time_cost: r
                                }), E.captureMessage("switch to DC failed", {
                                    level: "error",
                                    extra: {
                                        detail: a
                                    }
                                }), C.reportCls("cls_switch_to_dc_fail_".concat(a)), i.updateUserAccessType(g.ProxyMachine), t.abrupt("return", Promise.resolve(a));
                            case 27:
                                return v.report("mp_switch_media_machine", {
                                    to: "DC",
                                    success: "Y",
                                    time_cost: r
                                }), C.reportCls("cls_switch_to_dc_success"), C.info("switch to DC successfully! cost ".concat(r, "ms")), I.end(1007), i.updateMediaMachineType(g.InterfaceMachine), i.updateUserAccessType(g.InterfaceMachine), t.abrupt("return", Promise.resolve(""));
                            case 34:
                            case "end":
                                return t.stop()
                        }
                    }), n, null, [
                        [10, 15]
                    ])
                })))()
            },
            redirectMediaRoomToOC: function(e) {
                var i = this;
                return n(t().mark((function n() {
                    var o, a, r, s, c, d;
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = l.getAudioEnable(), a = l.getCameraEnable(), !o && !a) {
                                    t.next = 7;
                                    break
                                }
                                return C.info("switch to OC ignored since user is uploading stream\n        (AND update DC!! since backend predict us to be OC).\n        mic = ".concat(o ? "On" : "Off", "\n        cam = ").concat(a ? "On" : "Off", "\n      ")), T.getEnvSwitchEnable() && p.showWXToast("测试可见: 有上行忽略切OC"), i.updateUserAccessTypeAndMediaState({
                                    accessType: g.InterfaceMachine,
                                    audioOn: o,
                                    videoOn: a
                                }), t.abrupt("return");
                            case 7:
                                if (i.didUpdateMediaToken(e.media_platform)) {
                                    t.next = 11;
                                    break
                                }
                                return C.reportEvent("switch_to_oc_failed", "token is required"), i.updateUserAccessType(g.InterfaceMachine), t.abrupt("return");
                            case 11:
                                if (!l.isOnOC()) {
                                    t.next = 16;
                                    break
                                }
                                return C.assert("本来就在OC，怎么又要切OC?"), T.getEnvSwitchEnable(), C.reportEvent("switch_to_oc_failed", "already on oc"), t.abrupt("return", Promise.resolve(""));
                            case 16:
                                return C.info("switching to OC..."), I.start(1008), r = "", s = (new Date).getTime(), t.prev = 20, t.next = 23, i.redirectMediaRoom();
                            case 23:
                                t.next = 28;
                                break;
                            case 25:
                                t.prev = 25, t.t0 = t.catch(20), r = t.t0;
                            case 28:
                                return t.prev = 28, t.finish(28);
                            case 30:
                                if (c = (new Date).getTime() - s, !r) {
                                    t.next = 40;
                                    break
                                }
                                return C.error("switch to OC failed: ".concat(r)), T.getEnvSwitchEnable() && p.showWXToast("测试可见：切换OC失败!"), d = i.getErrcodOfToOCFailed(r), v.report("mp_switch_media_machine", {
                                    to: "OC",
                                    success: d,
                                    time_cost: c
                                }), E.captureMessage("switch to OC failed", {
                                    level: "error",
                                    extra: {
                                        detail: r
                                    }
                                }), C.reportCls("cls_switch_to_oc_fail_".concat(r)), i.updateUserAccessType(g.InterfaceMachine), t.abrupt("return", Promise.resolve(r));
                            case 40:
                                return v.report("mp_switch_media_machine", {
                                    to: "OC",
                                    success: "Y",
                                    time_cost: c
                                }), C.reportCls("cls_switch_to_oc_success"), C.info("switch to OC successfully! cost ".concat(c, "ms")), I.end(1008), i.updateMediaMachineType(g.ProxyMachine), i.updateUserAccessType(g.ProxyMachine), t.abrupt("return", Promise.resolve(""));
                            case 47:
                            case "end":
                                return t.stop()
                        }
                    }), n, null, [
                        [20, 25, 28, 30]
                    ])
                })))()
            },
            getErrcodOfToOCFailed: function(e) {
                return e ? "进入房间失败，请重试" === e ? "N2" : /进入房间失败，请重试.+/.test(e) ? "N3" : "exitMediaRoom failed" === e ? "N4" : /媒体状态异常，请重新进会.+/.test(e) ? "N5" : "N6" : "N1"
            },
            onLocalLeave: function(e) {},
            onKickedOut: function() {
                C.assert("TODO: 收到1019"), this.needLeaveMediaRoom()
            },
            onRemoteUserJoin: function(e) {},
            onRemoteUserLeave: function(e) {},
            onRemoteVideoAdd: function(e) {
                var t = e.data.player;
                if (t.userID === M.MixAudioStreamID) return C.info("混音流视频位收到，手动订阅它"), void l.emit(f.SUBSCRIBE_TO_VIDEO_OF_MIX_AUDIO_STREAM, {
                    data: t
                });
                d.dispatch({
                    type: f.REMOTE_VIDEO_ADD,
                    payload: e.data.player
                })
            },
            onRemoteVideoRemove: function(e) {
                var t = ((null == e ? void 0 : e.data) || {}).player,
                    n = void 0 === t ? null : t;
                null !== n ? n.userID !== M.MixAudioStreamID ? l.emit(f.REMOTE_VIDEO_REMOVE, {
                    data: n
                }) : C.info("混音流发生VideoRemove，不管") : C.assert("cannot get player from onRemoteVideoRemove. event: ".concat(JSON.stringify(e)))
            },
            onRemoteAudioAdd: function(e) {
                var t = e.data.player;
                t.userID === M.MixAudioStreamID && l.emit(f.MIX_AUDIO_STREAM_ADD, {
                    data: t
                })
            },
            onRemoteAudioRemove: function(e) {
                var t = e.data.player;
                t.userID === M.MixAudioStreamID && l.emit(f.MIX_AUDIO_STREAM_REMOVE, {
                    data: t
                })
            },
            onRemoteStateUpdate: function(e) {
                var t, n, i;
                if (2105 !== ((null == e || null === (t = e.data) || void 0 === t ? void 0 : t.detail) || {}).code) {
                    var o = ((null == e || null === (n = e.data) || void 0 === n || null === (i = n.currentTarget) || void 0 === i ? void 0 : i.dataset) || {}).streamid,
                        a = (void 0 === o ? "" : o) === "".concat(M.MixAudioStreamID, "_main");
                    l.emit(a ? f.ON_PLAY_OF_MIX_AUDIO_STREAM : f.ON_PLAY_OF_NORMAL_STREAM, {
                        data: null == e ? void 0 : e.data
                    })
                }
            },
            onLocalNetStateUpdate: function(e) {
                var t = (e.data || {}).pusher;
                this.onLivePusherNetStatusChange(t)
            },
            onRemoteNetStateUpdate: function(e) {},
            onRemoteAudioVolumeUpdate: function(e) {},
            onLocalAudioVolumeUpdate: function(e) {},
            onVideoFullscreenUpdate: function(e) {
                console.log("onVideoFullscreenUpdate", e)
            },
            onBgmPlayProgress: function(e) {
                console.log("onBgmPlayProgress", e)
            },
            onBgmPlayComplete: function(e) {
                console.log("onBgmPlayComplete", e)
            },
            onError: function(e) {
                var t = e.data,
                    n = t.code,
                    i = t.message;
                if (-1307 === n) return C.info("live-pusher is disconnected(-1307). msg: ".concat(i)), void this.mediaRoomRestarting();
                C.assert("live-pusher error: ".concat(n, "(").concat(i, ")")), l.emit(f.ON_PUSHER_ERROR, {
                    data: e.data
                })
            },
            onLocalStateUpdate: function(e) {
                var t = e.code,
                    n = e.message;
                C.info("onLocalStateUpdate: ".concat(t, "(").concat(n, ")"))
            },
            onLocalHangup: function(e) {
                var t = e.data.message;
                C.warn("<live-pusher>收到5000: ".concat(t)), l.setIsPusherHangup(!0)
            },
            onLocalInterrupted: function(e) {
                if (v.report("mp_pusher_5001", {
                        is_in_background: T.isRunningBackground() ? "Y" : "N"
                    }), 0 < l.getTimerFor5001CausedByPhoneCall()) C.warn("subsequent 5001 is ignored, occurred in ".concat(T.isRunningBackground() ? "background" : "foreground"));
                else {
                    var t = setTimeout((function() {
                        C.info("tmp_5001_fired_by_phone_call cleared"), l.setTimerFor5001CausedByPhoneCall(0)
                    }), 1e3);
                    l.setTimerFor5001CausedByPhoneCall(t), T.isRunningBackground() ? (C.info("后台状态下<live-pusher>收到5001(表示被动浮窗被点掉了)，执行退会逻辑"), this.leaveMeeting().then((function() {
                        p.navigateBack()
                    }))) : (C.info("前台状态下<live-pusher>收到5001(表示被VOIP打断)"), this.mediaRoomInterrupted())
                }
            },
            onLocalReconnecting: function(e) {
                var t = e.data,
                    n = t.code,
                    i = t.message;
                C.warn("live-pusher: disconnected, reconnecting(1102): ".concat(n, "(").concat(i, ")")), this.mediaRoomReconnecting()
            },
            initMediaRoom: function(e) {
                var t = new i.default(e);
                t.registerObserver(this), l.setTRTCInstance(t)
            },
            joinMediaRoom: function() {
                var e = this;
                l.setMediaRoomState(R.MediaRoomState.JOINING), this.joinMedia(l.getRoomInfo()).catch((function(t) {
                    C.reportCls("cls_join_media_fail_joining-".concat(t)), e.initialJoinMediaRoomFailed("网络请求超时，请使用腾讯会议app加入会议。")
                }))
            },
            joinMedia: function(e) {
                var i = this;
                return n(t().mark((function n() {
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function(t, n) {
                                    var o, a = setTimeout((function() {
                                            0 < d && clearTimeout(d), C.warn("join media room time out"), n("timeout")
                                        }), 1e4),
                                        r = i.onError;
                                    i.onError = function(e) {
                                        var t = (null == e ? void 0 : e.data) || {},
                                            o = t.code,
                                            s = t.message;
                                        if (10004 !== o && 10003 !== o) {
                                            0 < a && (clearTimeout(a), a = 0), i.onError = r;
                                            var c = isNaN(o) ? -1 : o,
                                                d = "".concat(s || "unknown error", "(").concat(c, ")");
                                            C.warn("进房失败：".concat(d)), n(d)
                                        }
                                    }, i.onLocalJoin = function(e) {
                                        0 < a && (clearTimeout(a), a = 0), i.onLocalJoin = function() {
                                            C.assert("LOCAL_JOIN should not be fired before you call MeetingAction.joinMedia")
                                        }, i.onError = r, C.reportCls("cls_join_media_success"), l.getTimerFor5001CausedByPhoneCall() ? C.warn("5001 is in handling, ignored this 1018") : i.joinMediaRoomSucc(), t()
                                    }, (null === (o = e.trtc_token) || void 0 === o ? void 0 : o.set_flag) || (C.assert("'set_flag' is expected but got null. roomInfo: ".concat(JSON.stringify(e))), C.reportEvent("xmpp_set_flag_is_supposed_to_be_in_join_resp"));
                                    var s = "default" === M.trtcEnv ? void 0 : M.trtcEnv,
                                        c = l.getTRTCInstance().joinMediaRoom({
                                            roomInfo: e,
                                            mediaState: {
                                                mic: l.getAudioEnable(),
                                                cam: l.getCameraEnable()
                                            },
                                            expCloudenv: s
                                        });
                                    C.reportCls("cls_join_media_starts"), l.emit(f.PUSHER_CHANGE, {
                                        data: c
                                    });
                                    var d = 0;
                                    T.isDevtools() && (d = setTimeout((function() {
                                        C.warn("运行于IDE中，为方便调试，代码主动触发<live-pusher>1018以模拟媒体入会成功。"), i.onLocalJoin()
                                    }), 2e3))
                                })));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), n)
                })))()
            },
            testFireEvent: function(e, t) {
                l.getTRTCInstance().testFireEvent(e, t)
            },
            getPusherURL: function() {
                var e = this.getPusherAttrs();
                return null === e ? null : e.url || null
            },
            getPusherAttrs: function() {
                return l.getTRTCInstance().getPusherAttrs()
            },
            updatePusherAttrs: function(e) {
                var t = l.getTRTCInstance();
                if (null !== t) {
                    var n = t.updatePusherAttrs(e);
                    l.emit(f.PUSHER_CHANGE, {
                        data: n
                    })
                } else C.warn('trtc is null. cannot call "updatePusherAttrs"')
            },
            getTRTC: function() {
                var e = l.getTRTCInstance();
                return e ? e.getTRTC() : null
            },
            delegateToTRTC: function(e, t) {
                if (this.getTRTC()) {
                    var n = this.getTRTC()[e];
                    if ("function" != typeof n) return void C.assert("cannot find function '".concat(e, "' in trtc-wx.js."));
                    try {
                        n.call(this.getTRTC(), t)
                    } catch (e) {
                        Math.random() < .01 && C.assert("error caught in trtc-wx.js sdk. event: ".concat(JSON.stringify(t), ". error: ").concat((null == e ? void 0 : e.message) || "unknown error"))
                    }
                } else C.warn("cannot delegate event ".concat(e, " to TRTC because trtc instance is undefined"))
            },
            exitMediaRoom: function() {
                var e = this;
                return new Promise((function(t, n) {
                    y.getPusherCtx() ? e.stopPusher().then((function() {
                        y.setPusherURL(""), t("")
                    })).catch((function(e) {
                        v.report(100419)
                    })) : (v.report(100418), y.setPusherURL(""), t(""))
                }))
            },
            updateUserAccessType: function(e) {
                0 === e || 1 === e ? (C.info("[user_status]access_type updated to ".concat(0 === e ? "DC" : "OC")), u.meetingUserCtrl.updateAccessType(e)) : C.error("expected 0 or 1, but got invalid accessType: ".concat(e))
            },
            updateUserAccessTypeAndMediaState: function(e) {
                var t = e.accessType,
                    n = e.videoOn,
                    i = e.audioOn;
                if (0 === t || 1 === t) {
                    var o = {
                        access_type: t
                    };
                    n && (o.video_on = "1", o.video_reason = u.meetingUserCtrl.turnVideoReason), i && (o.audio_on = "1", o.audio_reason = u.meetingUserCtrl.turnAudioReason), C.info("[user_status]access_type updated to ".concat(0 === t ? "DC" : "OC", ". media status is audio: ").concat(i, ", video: ").concat(n)), u.meetingUserCtrl.updateUserInfo(o, u.constants.UserState.UPDATE)
                } else C.error("expected 0 or 1, but got invalid accessType: ".concat(t))
            },
            updateQCloudSign: function(e) {
                e ? this.updateMediaToken(e.media_platform) : C.warn("could not assign null to updateQCloudSign")
            },
            didUpdateMediaToken: function(e) {
                var t = (e || {}).trtc_token;
                return t ? this.isMediaTokenAsSameAsBefore(t) ? (C.warn("media token is expected to be different but it is as same as before"), !1) : (l.getRoomInfo().trtc_token = t, C.info("media token updated to: ".concat(JSON.stringify(t))), !0) : (C.warn("update media token failed since backend did NOT give us"), !1)
            },
            isMediaTokenAsSameAsBefore: function(e) {
                var t = l.getRoomInfo().trtc_token;
                if (!t) return C.assert("previous trtc_token cannot be null."), !1;
                if (!e) return C.assert("incoming trtc_token cannot be null."), !1;
                for (var n = ["group_id", "set_flag", "priv_map", "usr_sig"], i = 0, o = n.length; i < o; i++)
                    if (t[n[i]] !== e[n[i]]) return !1;
                return C.info("trtc_token is as same as before."), !0
            },
            updateTokenAndTurnOnAudioDirectly: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.SwitchReason.BYSELF;
                this.didUpdateMediaToken(e.media_platform) ? C.info('通过"主持人同意我的举手操作"途径更新了media token') : C.warn('通过"主持人同意我的举手操作"途径更新media token失败！'), this.turnOnAudioDirectly(t)
            },
            _handleRaiseHandComplete: function(e, t) {
                if (e) l.onHandsUpSucc();
                else {
                    var n = p.getDetailErrmsg(t, "举手/放手操作失败");
                    l.onHandsUpFail(n)
                }
            },
            _handleKickedOut: function(e, t) {
                d.dispatch({
                    type: e ? f.KICKED_OUT_SUCC : f.KICKED_OUT_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleMeetingModified: function(e, t) {
                C.warn("NOT SUPPORTED(SINCE WE CANT BE HOST). flag = ".concat(e, ", data = ").concat(JSON.stringify(t)))
            },
            _handleNotifySwitchMediaStream: function(e, t) {
                d.dispatch({
                    type: f.NOTIFY_SWITCH_MEDIA_STREAM,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleNotifyMeetingSettingsUpdate: function(e, t) {
                var n = this;
                if (e && t) {
                    var i = t.allow_audience_hands_up,
                        o = t.allow_look_audience_count;
                    l.setAllowHandsUp(i), l.setAllowLookAudienceCount(o);
                    var a = t.request_up_stream_token || "";
                    (t.mediaSettingsList || []).forEach((function(e) {
                        var t = e.type === U.MediaType.AUDIO,
                            i = e.type === U.MediaType.SCREEN_SHARE;
                        t ? n._handleAudioSettingChange(e, a) : i && n._handleScreenShareSettingChange()
                    })), Object.prototype.hasOwnProperty.call(t, "hideMeetingCodePassword") && l.setIsHideMeetingCodeAndPassword(t.hideMeetingCodePassword), Object.prototype.hasOwnProperty.call(t, "meetingLockSettings") && l.setIsMeetingLocked(1 === t.meetingLockSettings.meeting_lock), Object.prototype.hasOwnProperty.call(t, "allow_renaming") && l.emit(f.ALLOW_RENAMING_CHANGE, {
                        data: 1 === t.allow_renaming
                    })
                } else C.error("S2C: meeting_settings_update error: ".concat(e, ", ").concat(t))
            },
            _handleScreenShareSettingChange: function() {
                l.setEnableWatermark(N.isEnableWatermark()), l.setMultipleRowWatermark(N.isMultipleRowWatermark())
            },
            _handleMuteAll: function(e) {
                var t = "";
                e ? (t = "主持人已将全体成员静音", C.info("主持人更改设置：全体静音，但允许成员自我解除静音")) : (t = "主持人已将全体成员静音，并不允许自我解除静音", C.info("主持人更改设置：全体静音，且不允许成员自我解除静音")), l.setAllowTurnOnBySelf(e), l.emit(f.MUTE_ALL, {
                    data: t
                })
            },
            _handleUnmuteAll: function(e) {
                C.info("主持人更改设置：请求解除全体静音"), l.getAudioEnable() ? C.info("本人已开麦，忽略") : (l.setRequestUpStreamToken(e), l.getIsHandsUp() ? (C.info("turn on audio by host when user is handsup since host asked to unmute all members' mic"), this.handsDown(), this.turnOnAudio(U.SwitchReason.BYHOST), l.emit(f.UNMUTE_ALL, {
                    data: !1
                })) : (C.info("未举手状态下解除全体静音，需要询问"), l.emit(f.UNMUTE_ALL, {
                    data: !0
                })))
            },
            _handleAudioSettingChange: function(e, t) {
                var n = e.muteAll,
                    i = e.allowUnmuteBySelf,
                    o = e.muteOnJoin,
                    a = void 0 !== o;
                if (void 0 !== n) n ? this._handleMuteAll(i) : this._handleUnmuteAll(t);
                else if (a) C.info("主持人更改设置：".concat(o ? "勾选" : "反选", "成员入会时静音"));
                else {
                    if (!i) return C.info("主持人更改设置：不允许成员自我解除静音"), void l.setAllowTurnOnBySelf(!1);
                    C.info("主持人更改设置：允许成员自我解除静音"), l.setAllowTurnOnBySelf(!0), l.getIsHandsUp() ? (this.handsDown(), l.getAudioEnable() ? C.warn("状态错误：麦克风开着举个啥手？") : (C.info("正在举手，主持人允许了自行解除静音，直接开麦！"), l.emit(f.UNMUTE_BY_HOST_CHANGE_ALLOW_TURN_ON_BY_SELF, {}), this.turnOnAudio(U.SwitchReason.BYHOST))) : C.info("未举手，不考虑自动解除静音")
                }
            },
            _handleMeetingWillLimited: function(e, t) {
                e ? (C.info("meeting_will_limited: flag=".concat(e, ", data=").concat(JSON.stringify(t))), isNaN(t.expire_time) || t.expire_time < (new Date).getTime() / 1e3 ? isNaN(t.expire_time) ? C.info('meeting_will_limited error: the backend give us an invalid "expire_time": '.concat(t.expire_time)) : (C.warn('meeting_will_limited warn: the backend give us an "expire_time"  which has already expired, we are about to leave. expire_time: '.concat(t.expire_time)), this.stopTimerOfOfMeetingTimeCountdown(), l.freeMeetingIsEnd()) : (l.setPayInfoMeetingExpireTime(t.expire_time), C.info("limite_type is: ".concat(t.limite_type)), this._handleWithLimiteType(t.limite_type))) : C.error("meeting_will_limited error: flag=".concat(e, ", data=").concat(JSON.stringify(t)))
            },
            _handleWithLimiteType: function(e) {
                var t = this,
                    n = "",
                    i = {};
                switch (e) {
                    case u.constants.LimitType.MEMBERS_COUNT_WILL_REACH_LIMIT_SOON:
                        n = f.MEMBERS_COUNT_WILL_REACH_LIMIT_SOON, i = "成员人数即将达到上限";
                        break;
                    case u.constants.LimitType.MEMBERS_COUNT_HAS_REACHED_LIMIT_ALREADY:
                        n = f.MEMBERS_COUNT_HAS_REACHED_LIMIT_ALREADY, i = "成员人数已经达到上限";
                        break;
                    case u.constants.LimitType.MEETING_DURATION_WILL_REACH_LIMIT_SOON:
                        var o = l.getPayInfoMeetingExpireTime() - parseInt((new Date).getTime() / 1e3, 10),
                            a = parseInt(o / 60, 10),
                            r = "";
                        if (a < 0 ? (C.error("[ASSERT] invalid seconds left: ", o), r = "免费会议即将结束") : r = 0 === a ? "免费会议即将在不到1分钟后结束" : 60 < a ? "免费会议还有至少".concat(a, "分钟") : "免费会议即将在".concat(a, "分钟后结束"), 0 < l.getPayInfoCountdownTimer()) C.info("收到会议计费信息push，之前已经有倒计时");
                        else if (C.info("收到会议计费信息push，启动倒计时"), l.getPayInfoCountdownThreshhold()) {
                            var s = setInterval((function() {
                                t.meetingTimeCountDown()
                            }), 1e3);
                            l.setPayInfoCountdownTimer(s)
                        } else C.warn("meeting_will_limited pushed but there's no countdownThreshhold found. You have not initialized it in the query_meeting_pay_info, did you? Or this is the meeting that is not necessary to show countdown for non-personal account according to yaco said on 17th Dec, 2019. ");
                        n = f.MEETING_DURATION_WILL_REACH_LIMIT_SOON, i = r;
                        break;
                    case u.constants.LimitType.PSTN_DURATION_WILL_REACH_LIMIT_SOON:
                        n = f.PSTN_DURATION_WILL_REACH_LIMIT_SOON, i = "PSTN时长即将达到上限";
                        break;
                    case u.constants.LimitType.PSTN_DURATION_HAS_REACHED_LIMIT_ALREADY:
                        n = f.PSTN_DURATION_HAS_REACHED_LIMIT_ALREADY, i = "PSTN时长已经达到上限";
                        break;
                    case u.constants.LimitType.SOMEBODY_TRIED_JOIN_MEETING_AFTER_REACH_LIMIT:
                        n = f.SOMEBODY_TRIED_JOIN_MEETING_AFTER_REACH_LIMIT, i = "达到上限后有人尝试入会";
                        break;
                    case u.constants.LimitType.ENOUGH_RESOURCE:
                        n = f.ENOUGH_RESOURCE, i = "资源充足！", this.stopTimerOfOfMeetingTimeCountdown();
                        break;
                    case u.constants.LimitType.ENOUGH_RESOURCE_ON_MEETING_DURATION:
                        n = f.ENOUGH_RESOURCE_ON_MEETING_DURATION, i = "会议时间资源充足！", this.stopTimerOfOfMeetingTimeCountdown();
                        break;
                    default:
                        C.warn("unexpceted limite_type got from _handleWithLimiteType: ".concat(e))
                }
                l.handleMeetingWillLimited(n, i)
            },
            _handleModifyUserInfo: function(e, t) {
                e && t ? d.dispatch({
                    type: f.MODIFY_USER_INFO_SUCC,
                    payload: {
                        flag: e,
                        data: t
                    }
                }) : d.dispatch({
                    type: f.MODIFY_USER_INFO_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleRefreshMediaAuthInfo: function(e, t) {
                d.dispatch({
                    type: e ? f.REFRESH_MEDIA_AUTH_INFO_SUCC : f.REFRESH_MEDIA_AUTH_INFO_FAIL,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            isEnterMeetingRoom: function(e) {
                return e === P.MEMBER_MOVED_BY_HOST_FROM_WAITING_ROOM_TO_MEETING_ROOM
            },
            isLeaveWaitingRoom: function(e) {
                return e === P.MEMBER_MOVED_BY_HOST_FROM_WAITING_ROOM_TO_OUTSIDE
            },
            isLeaveMeetingRoomToWaitingRoom: function(e) {
                return e === P.MEMBER_MOVED_BY_HOST_FROM_MEETING_ROOM_TO_WAITING_ROOM
            },
            _handleJoinFromWaitingRoom: function(e, t) {
                d.dispatch({
                    type: f.WAITING_USER_STATUS_JOIN_FROM_WAITING_ROOM,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleLeaveFromWaitingRoom: function(e, t) {
                d.dispatch({
                    type: f.WAITING_USER_STATUS_LEAVE_FROM_WAITING_ROOM,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleBackToWaitingRoom: function(e, t) {
                d.dispatch({
                    type: f.BACK_TO_WAITING_ROOM,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            _handleIamInWaitingRoom: function(t, n) {
                var i = l.getJoinParam();
                i ? l.setJoinParam(e(e({}, i), {}, {
                    nickname: n.nickname
                })) : C.assert("joinParam is null")
            },
            _handleUpdateNicknameInWaitingRoom: function(e, t) {
                d.dispatch({
                    type: f.WAITING_USER_STATUS_I_AM_IN,
                    payload: {
                        flag: e,
                        data: t
                    }
                })
            },
            joinMediaRoomSucc: function() {
                d.dispatch({
                    type: f.LIVE_PUSHER_JOIN_MEDIA_ROOM_SUCC,
                    payload: {}
                })
            },
            needLeaveMediaRoom: function() {
                d.dispatch({
                    type: f.LIVE_PUSHER_NEED_LEAVE_MEDIA_ROOM,
                    payload: {}
                })
            },
            mediaRoomReconnecting: function() {
                d.dispatch({
                    type: f.LIVE_PUSHER_MEDIA_ROOM_RECONNECTING,
                    payload: {}
                })
            },
            mediaRoomRestarting: function() {
                var e = l.getMediaRoomState();
                if (e === R.MediaRoomState.IN) d.dispatch({
                    type: f.LIVE_PUSHER_MEDIA_ROOM_RESTARTING,
                    payload: {}
                });
                else {
                    var t = R.MediaRoomState.getReadableState(e);
                    C.info("restart pusher is ignored because the media room state is ".concat(e, "(").concat(t, ")"))
                }
            },
            mediaRoomInterrupted: function() {
                d.dispatch({
                    type: f.LIVE_PUSHER_MEDIA_ROOM_INTERRUPTED,
                    payload: {}
                })
            },
            setMediaRoomRedirecting: function() {
                l.setMediaRoomState(R.MediaRoomState.REDIRECTING)
            },
            onReceiveUserJoinOfMe: function() {
                this._handleMicAndCam();
                var e = l.getLastQueryMeetingInfo();
                this.queryMeetingInfo(e.getPublicMeetingCode())
            },
            _handleMicAndCam: function() {
                var e = "1" === u.preMeetingService.getSavedAudioOn(),
                    t = "1" === u.preMeetingService.getSavedVideoOn();
                C.info("user_join of me received, I want\n      mic = ".concat(e ? "On" : "Off", ",\n      cam = ").concat(t ? "On" : "Off", ",\n    ")), l.isOnOC() || (e && this.turnOnAudio(), t && this.turnOnVideo())
            },
            fixMemberOntoMainPos: function(e) {
                if (!e) return C.warn("fixMemberOntoMainPos: keyString is expected, but got ".concat(e)), "未能将视频固定在主画面(-1)";
                var t = m.getCommonUser(e);
                return t ? "1" !== t.video_on ? (C.warn("fixMemberOntoMainPos: ".concat(t.nickname, "'s video is off.")), "未能将视频固定在主画面(-2)") : l.getHasScreenShareInMeeting() ? (C.info("fixMemberOntoMainPos: ".concat(t.nickname, "'s video cannot be fixed onto main pos\n      since there's a screen share in meeting right now.")), "正在进行屏幕共享，不允许替换画面") : (d.dispatch({
                    type: f.FIX_MEMBER_ONTO_MAIN_POS,
                    payload: {
                        data: t
                    }
                }), "") : (C.warn("fixMemberOntoMainPos: cannot find ".concat(e, " in members.\n        members: ").concat(JSON.stringify(m.getMembers()), "\n      ")), "未能将视频固定在主画面(-3)")
            },
            modifyNickname: function(e) {
                var t = p.truncateText(e);
                if (C.info("want to modify nickname as: ".concat(e)), t) {
                    var n = u.meetingUserCtrl.getSelfId();
                    n ? u.meetingUserCtrl.modifyNickname(n, t) : C.assert("modifyNickname: failed because cannot get self id from sdk.")
                } else C.error("modifyNickname: failed because input name '".concat(e, "' truncated to '").concat(t, "' which is invalid."))
            },
            canModifyNickname: function() {
                var e = "";
                l.isAnonymousMeeting() ? e = "已开启匿名会议，不允许改名" : u.meetingUserCtrl.getIsAllowRenaming() || (e = u.meetingUserCtrl.getIsWebinar() ? "主持人不允许webinar成员改名" : "主持人不允许成员改名");
                var t = !e;
                return t || l.emit(f.MODIFY_USER_INFO_FAIL, {
                    flag: !1,
                    data: {
                        msg: e
                    }
                }), t
            },
            disableAudioExcitedStrategy: function() {
                d.dispatch({
                    type: f.DISABLE_AUDIO_EXCITED_STRATEGY,
                    payload: {
                        data: {}
                    }
                })
            },
            enableAudioExcitedStrategy: function() {
                d.dispatch({
                    type: f.ENABLE_AUDIO_EXCITED_STRATEGY,
                    payload: {
                        data: {}
                    }
                })
            },
            isAudioExcitedStrategyEnabled: function() {
                return l.getIsAudioExcitedStrategyEnabled()
            },
            setJoinMeetingRespMeta: function(e) {
                l.setJoinMeetingRespMeta(e)
            },
            getJoinRespMeta: function() {
                return l.getJoinRespMeta()
            },
            isInvalidLoad: function(e) {
                var t = p.isNoMorePageInStack(),
                    n = !l.getJoinRespMeta();
                return t || n ? (C.warn("invalid onLoad for ".concat(e, ": isEmptyStack = ").concat(t, ", isNullJoinResp = ").concat(n)), t && n ? v.report("mp_onload_checker", {
                    pageName: e,
                    code: "N1"
                }) : t ? v.report("mp_onload_checker", {
                    pageName: e,
                    code: "N2"
                }) : v.report("mp_onload_checker", {
                    pageName: e,
                    code: "N3"
                }), !0) : (v.report("mp_onload_checker", {
                    pageName: e,
                    code: "Y"
                }), !1)
            },
            getAvRoomID: function() {
                var e = (this.getJoinRespMeta() || {}).roomInfo;
                return (void 0 === e ? {} : e).av_room_id || ""
            },
            getShareObject: function(e) {
                l.setIsSpBackend(!0);
                var t = l.isWebinarMeeting(),
                    n = e.pmiCode || e.meetingCode || "",
                    i = "腾讯会议";
                e.name && (i = "会议邀请：".concat(e.name));
                var o, a = !1;
                e && e.isMeetingCodeFullyVisible && (a = !(null !== (o = e.isMeetingCodeFullyVisible) && void 0 !== o && o.call(e)));
                var r = "/pages/index/index?code=".concat(n, "&hideCode=").concat(a);
                if (t || e.isSignUpMeeting) {
                    var s = null != e && e.signUpUrl ? encodeURIComponent(null == e ? void 0 : e.signUpUrl) : "";
                    return {
                        title: i,
                        path: e.isSignUpMeeting || null != e && e.isActivityOpen ? "/pages/sub-web/auth/auth?url=".concat(s, "&isInJump=1") : r,
                        imageUrl: "/resources/default_webinar_cover.jpg"
                    }
                }
                return {
                    title: i,
                    path: r,
                    imageUrl: "/resources/share_private_meeting.jpg"
                }
            },
            toggleSound: function() {
                var e = !l.getIsSoundAround();
                e ? (console.log("打开免提"), v.report("enable_handsfree"), v.report("e#meeting#open_handsfree#click", {
                    is_on: 1
                }), C.info("打开免提", "turn Sound")) : (console.log("打开听筒"), v.report("disable_handsfree"), v.report("e#meeting#open_handsfree#click", {
                    is_on: 0
                }), C.info("打开听筒", "turn Sound")), l.setIsSoundAround(e)
            },
            fixAndroidSoundModeBug: function() {
                C.warn("did android bug fixe?")
            },
            fixLivePlayerNotPlayedAtBackground: function() {
                var e = T.isAndroid(),
                    t = l.isInMediaRoom(),
                    n = l.isFloatLayout();
                e && t && n && (C.warn("for Android the <live-player> not played in background, we play them in foreground(after 500ms)"), setTimeout((function() {
                    l.emit(f.PLAY_ALL_VIDEO_LIVE_PLAYERS)
                }), 2e3))
            },
            handsUp: function() {
                l.setIsHandsUp(!0), N.raiseHand(!0)
            },
            handsDown: function() {
                l.setIsHandsUp(!1), N.raiseHand(!1)
            },
            turnOnAudio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.SwitchReason.BYSELF;
                if (l.getIsHandsUp() && !l.isWebinarMeeting()) return l.setIsTurningAudio(!1), void l.emit(f.TURN_AUDIO_BUT_IS_HANDS_UPING, {});
                C.info("turn on audio by ".concat(this.getReadableByWhom(e), ".\n      need switch media mechine: ").concat(l.isOnOC() ? "Y" : "N", ",\n      request_up_stream_token: ").concat(l.getRequestUpStreamToken() ? "xxx" : "", "\n    ")), N.turnAudio({
                    on: !0,
                    reason: e,
                    needRefreshToken: l.isOnOC() ? 1 : 0,
                    requestUpStreamToken: l.getRequestUpStreamToken()
                })
            },
            turnAudio: function(e) {
                var i = arguments,
                    o = this;
                return n(t().mark((function a() {
                    var r, s;
                    return t().wrap((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                r = i.length > 1 && void 0 !== i[1] ? i[1] : U.SwitchReason.BYSELF, s = o;
                                try {
                                    o.setAudioSwitch(e), o.turnAudioAtCenter(e, r)
                                } catch (i) {
                                    i.includes("49737") && D < 5 ? (D += 1, setTimeout(n(t().mark((function n() {
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, s.turnAudio(e, r);
                                                case 2:
                                                    return t.abrupt("return", t.sent);
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), n)
                                    }))), 200), C.info("49737次数：".concat(D))) : (C.error("turn ".concat(e ? "on" : "off", " audio failed because: ").concat(i)), l.emit(f.TURN_AUDIO_FAILED, {
                                        data: i
                                    }), o.turnAudioAtCenter(!e, U.SwitchReason.BYSELF))
                                }
                                l.setIsTurningAudio(!1);
                            case 4:
                            case "end":
                                return a.stop()
                        }
                    }), a)
                })))()
            },
            turnAudioAtCenter: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.SwitchReason.BYSELF;
                this.notifyServerAudioStatus(e, t)
            },
            notifyServerAudioStatus: function(e, t) {
                N.updateAudioStatus(e, t)
            },
            turnOnAudioDirectly: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.SwitchReason.BYSELF;
                C.info("turn on audio directly by ".concat(this.getReadableByWhom(t))), l.getUploadStreamController().addTask({
                    name: "turn-on-audio-directly",
                    action: function() {
                        e.turnAudio(!0, t)
                    },
                    succ: function() {},
                    fail: function(e) {
                        l.setIsTurningAudio(!1), C.error("open mic failed(-1): ".concat(e)), e ? p.showWXToast(e) : p.showWXToast("打开麦克风失败(-1)")
                    },
                    judgeData: "already-updated"
                })
            },
            turnOffAudio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.SwitchReason.BYSELF;
                N.turnAudio({
                    on: !1,
                    reason: e
                })
            },
            turnOnVideo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.SwitchReason.BYSELF;
                C.info("turn on video(".concat(e === U.SwitchReason.BYSELF ? "positively" : "passively", ")")), N.turnVideo({
                    on: !0,
                    reason: e,
                    needRefreshToken: l.isOnOC() ? 1 : 0
                })
            },
            turnOffVideo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.SwitchReason.BYSELF;
                C.info("turn off video(".concat(e === U.SwitchReason.BYSELF ? "positively" : "passively", ")")), this.setCameraSwitch(!1), N.turnVideo({
                    on: !1,
                    reason: e
                })
            },
            switchCamera: function() {
                var e = function() {
                        var e;
                        l.getIsFrontCamera() ? (l.setIsFrontCamera(!1), e = l.getCameraSwitchToBackSuccessText()) : (l.setIsFrontCamera(!0), e = l.getCameraSwitchToFrontSuccessText()), l.emit(l.getIsFrontCamera() ? f.CAMERA_SWITCH_TO_FRONT : f.CAMERA_SWITCH_TO_BACK, {
                            data: e
                        })
                    }.bind(this),
                    t = function() {
                        l.emit(f.CAMERA_SWITCH_FAILED, {
                            data: l.getCameraSwitchFailText()
                        })
                    }.bind(this);
                l.getTRTCInstance().switchCamera({
                    success: e,
                    fail: t
                })
            },
            doPlayOrStopForLivePlayer: function(e, t, n) {
                if (T.isRunningBackground()) return C.warn("running at background, no permission to invoke jsAPI on <live-player>.\n      wanna ".concat(n ? "play" : "stop", " ").concat(e, "(").concat(t, ")")), Promise.reject("#-6");
                var i = wx.createLivePlayerContext("player".concat(t)),
                    o = "playOrStopLivePlayer";
                return i ? T.isDevtools() ? Promise.resolve("") : (C.info("[live-player] ".concat(n ? "play" : "stop", " ").concat(e, "(").concat(t, ")...")), new Promise((function(a, r) {
                    if (n) try {
                        i.play({
                            success: function() {
                                C.info("play ".concat(e, "(").concat(t, ") succeed")), a()
                            },
                            fail: function(n) {
                                C.error("play failed for ".concat(e, "(").concat(t, ") because ").concat(n.errMsg), o), r("#-4")
                            }
                        })
                    } catch (n) {
                        C.error("start playing live-player of user ".concat(e, "(").concat(t, ") failed: ").concat(JSON.stringify(n)), o), r("#-5")
                    } else try {
                        i.stop({
                            success: function() {
                                C.info("stop ".concat(e, "(").concat(t, ") succeed")), a()
                            },
                            fail: function(n) {
                                C.error("stop failed for ".concat(e, "(").concat(t, ") because ").concat(n.errMsg), o), r("#-2")
                            }
                        })
                    } catch (n) {
                        C.error("stop pulling live-player of user ".concat(e, "(").concat(t, ") failed: ").concat(JSON.stringify(n)), o), r("#-3")
                    }
                }))) : (C.warn("no <live-player> context created for this guy: ".concat(e, "(").concat(t, ")"), o), Promise.reject("#-1"))
            },
            stopPusher: function() {
                return T.isDevtools() ? Promise.resolve("") : new Promise((function(e, t) {
                    y.getPusherCtx() ? y.getPusherCtx().stop({
                        success: function() {
                            C.info("stop pushing <live-pusher> succeed"), e()
                        },
                        fail: function(e) {
                            C.warn("stop pushing <live-pusher> failed: ".concat(e.errMsg)), t("#-2")
                        }
                    }) : t("#-1")
                }))
            },
            leaveMeeting: function() {
                var e = arguments,
                    i = this;
                return n(t().mark((function n() {
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(!(e.length > 0 && void 0 !== e[0]) || e[0])) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 4, N.leaveMeetingFully();
                            case 4:
                                t.next = 8;
                                break;
                            case 6:
                                return t.next = 8, N.leaveMediaRoom();
                            case 8:
                                i.logoutImSdk(), l.clear();
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), n)
                })))()
            },
            redirectMediaRoom: function() {
                var e = this;
                return n(t().mark((function n() {
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return l.setMediaRoomState(R.MediaRoomState.REDIRECTING), t.next = 3, e.leaveMediaRoom();
                            case 3:
                                return t.prev = 3, t.next = 6, e.joinMedia(l.getRoomInfo());
                            case 6:
                                t.next = 12;
                                break;
                            case 8:
                                throw t.prev = 8, t.t0 = t.catch(3), C.reportCls("cls_join_media_fail_redirecting-".concat(t.t0)), t.t0;
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), n, null, [
                        [3, 8]
                    ])
                })))()
            },
            recoverMediaRoom: function() {
                var e = this;
                return n(t().mark((function n() {
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (l.isInMeetingRoom()) {
                                    t.next = 3;
                                    break
                                }
                                return C.warn("not in meeting room(".concat(l.getReadableXMPPRoomState(), "), ignore to recover media room")), t.abrupt("return");
                            case 3:
                                return t.prev = 3, t.next = 6, e.joinMedia(l.getRoomInfo());
                            case 6:
                                t.next = 11;
                                break;
                            case 8:
                                t.prev = 8, t.t0 = t.catch(3), C.reportCls("cls_join_media_fail_recovering-".concat(t.t0));
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), n, null, [
                        [3, 8]
                    ])
                })))()
            },
            leaveMediaRoom: function() {
                return n(t().mark((function e() {
                    return t().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!T.isDevtools()) {
                                    e.next = 4;
                                    break
                                }
                                C.info("devtools, pretend we have left"), e.next = 7;
                                break;
                            case 4:
                                return l.emit(f.STOP_ALL_PLAYERS, {}), e.next = 7, l.getTRTCInstance().leaveMediaRoom();
                            case 7:
                                l.emit(f.MEDIA_ROOM_LEFT, {});
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            },
            leaveMediaRoomSpecific: function() {
                var e = this;
                return n(t().mark((function n() {
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return l.setMediaRoomState(R.MediaRoomState.LEAVING), t.next = 3, e.leaveMediaRoom();
                            case 3:
                                return l.setMediaRoomState(R.MediaRoomState.OUT), C.info("leave media room succeed"), t.next = 7, e.fixIOSBug();
                            case 7:
                                l.setTRTCInstance(null);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), n)
                })))()
            },
            fixIOSBug: function() {
                var t = this;
                return T.isIOS() && T.isRunningBackground() ? (C.warn("for ios running in background, we need to rejoin the cloudenv=PRO for compatibility."), new Promise((function(n, i) {
                    var o = t.onError,
                        a = 0;
                    t.onError = function(e) {
                        var t = e.data,
                            n = t.code,
                            i = t.message; - 1307 === n ? C.info("(-1307) 认为进媒体房间PRO环境成功，现可销毁pusher") : C.assert("假进房应该收到-1307,但却收到live-pusher error: ".concat(n, "(").concat(i, ")")), clearTimeout(a), r()
                    };
                    var r = function() {
                            t.onError = o, x.updatePusherAttrs({
                                url: ""
                            }), n()
                        },
                        s = l.getRoomInfo(),
                        c = e(e({}, s), {}, {
                            trtc_token: e(e({}, s.trtc_token), {}, {
                                group_id: 4294967295
                            })
                        }),
                        d = l.getTRTCInstance().joinMediaRoom({
                            roomInfo: c,
                            mediaState: {
                                mic: !1,
                                cam: !1
                            },
                            expCloudenv: "PRO"
                        });
                    l.emit(f.PUSHER_CHANGE, {
                        data: d
                    }), T.isDevtools() ? setTimeout((function() {
                        C.warn("运行于IDE中，为方便调试，代码主动触发<live-pusher> -1307以模拟假媒体入会成功。"), t.onError({
                            data: {
                                code: -1307
                            }
                        })
                    }), 2e3) : a = setTimeout((function() {
                        C.assert("假进房超时未能收到pusher error事件"), r()
                    }), 2e3)
                }))) : ""
            },
            leaveXmppRoom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = l.isInMeeting();
                return C.info("leave xmpp room".concat(t ? "" : "(but current is outside)")), !!t && u.leaveMeeting({}, e)
            },
            initialJoinMediaRoomFailed: function(e) {
                l.emit(f.INITIAL_JOIN_MEDIA_ROOM_FAILED, {
                    data: e
                })
            },
            getReadableByWhom: function(e) {
                return e === U.SwitchReason.BYSELF ? "SELF" : e === U.SwitchReason.BYHOST ? "HOST" : "UNKNOWN"
            },
            recoverLivePusher: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                l.recoverLivePusher(e)
            },
            isEnableWatermark: function() {
                return N.isEnableWatermark()
            },
            hasScreenShareInMeeting: function() {
                return l.getHasScreenShareInMeeting()
            },
            isScreenSharePaused: function() {
                return l.isScreenSharePaused()
            },
            getScreenShareMember: function() {
                return l.getScreenShareMember()
            },
            listenScreenCapture: function() {
                var e = this;
                if (!wx.onUserCaptureScreen) return C.warn("wx.onUserCaptureScreen not defined"), void v.reportError("100425");
                wx.onUserCaptureScreen((function() {
                    if (e.isEnableWatermark() && e.hasScreenShareInMeeting() && !e.isScreenSharePaused()) {
                        l.emit(f.SNAPSHOT_TAKEN_ON_SCREEN_SHARE, {});
                        var t = e.getScreenShareMember();
                        if (t) {
                            var n = N.formKeyById(t.id);
                            v.report("mp_screen_share_captured", {
                                shareing_person: n
                            }), C.warn("user takes a snapshot on the screen sharing of ".concat(t.nickname, "(").concat(n, ")"))
                        } else C.error(new Error("cannot get screen share member").stack)
                    }
                }))
            },
            onLivePusherNetStatusChange: function(e) {
                if (!this._isWaiting) {
                    this._isWaiting = !0;
                    var t = e.videoBitrate,
                        n = e.audioBitrate,
                        i = e.netSpeed,
                        o = e.netQualityLevel;
                    try {
                        if (isNaN(t) || isNaN(n) || isNaN(i)) throw C.error("net statistics is invalid:\n          videoBitrate = ".concat(t, ",\n          audioBitrate = ").concat(n, ",\n          netSpeed = ").concat(i, ",\n        ")), !1;
                        var a = n + t,
                            r = a - i,
                            s = 0 === a ? 0 : parseFloat((i / a).toFixed(2)),
                            c = this.getLivePusherNetStatusLevel(r, s),
                            d = l.getNetworkLevel();
                        if (c === d) throw !1;
                        if (l.setNetworkLevel(c), C.info("level值有变化:".concat(d, "==>").concat(c)), C.info("\n      a+v=".concat(a, ",\n      speed=").concat(i, ",\n      diff=").concat(r, ",\n      percent=").concat(s, ",\n      level=").concat(c, ",\n      netQualityLevel= ").concat(o, ",\n    ")), v.report("mp_pusher_netstatus", {
                                totalEncodeSpeed: a,
                                netSpeed: i,
                                absDiff: r,
                                percent: s,
                                level: c
                            }), !l.isInMeetingRoom()) throw !1;
                        N.reportMediaStreamStatus({
                            network_level: c
                        }), l.emit(f.LIVE_PUSHER_NET_STATUS_CHANGE, {
                            data: c
                        })
                    } catch (e) {
                        return void(this._isWaiting = !1)
                    }
                }
            },
            getLivePusherNetStatusLevel: function(e, t) {
                return e < A.EXCELLENT_GAP || A.EXCELLENT_PERCENT <= t ? U.MediaNetworkLevel.Excellent : e < A.GOOD_GAP || A.GOOD_PERCENT <= t ? U.MediaNetworkLevel.Good : e < A.NORMAL_GAP || A.NORMAL_PERCENT <= t ? U.MediaNetworkLevel.Fair : e < A.BAD_GAP || A.BAD_PERCENT <= t ? U.MediaNetworkLevel.Poor : U.MediaNetworkLevel.NoSignal
            },
            queryMeetingNotice: function(e) {
                return n(t().mark((function e() {
                    return t().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                N.queryMeetingNotice().then(function() {
                                    var e = n(t().mark((function e(n) {
                                        var i, o, a, r, s, c, d;
                                        return t().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (null != n && n.notice_version && l.setNoticeVersion(null == n ? void 0 : n.notice_version), null == n || !n.notice_version) {
                                                        e.next = 14;
                                                        break
                                                    }
                                                    if (null != n && n.notice_content) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    return l.emit(f.NOTICE_CONTENT_CHANGE, {
                                                        data: {
                                                            isRead: !0,
                                                            customMessage: {
                                                                extension: {
                                                                    notice_content: ""
                                                                }
                                                            }
                                                        }
                                                    }), e.abrupt("return");
                                                case 5:
                                                    o = w.decode(null == n ? void 0 : n.notice_content), a = 1 == (null == n ? void 0 : n.is_read), null == n ? void 0 : n.meeting_id, r = null == n ? void 0 : n.notice_type, s = null == n ? void 0 : n.notice_version, c = w.decode(null == n || null === (i = n.sender) || void 0 === i ? void 0 : i.nickname), n.sender, d = {
                                                        isRead: a,
                                                        customMessage: {
                                                            extension: {
                                                                notice_content: o,
                                                                notice_type: r,
                                                                notice_version: s
                                                            },
                                                            sender_info: {
                                                                nickname: c,
                                                                avatar_url: ""
                                                            }
                                                        },
                                                        defaultText: "更新了公告，请使用最新版本查看。",
                                                        time: n.send_time
                                                    }, l.emit(f.NOTICE_CONTENT_CHANGE, {
                                                        data: d
                                                    });
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function(e) {
                                    console.log(e, "queryMeetingNotice")
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            },
            readMeetingNotice: function(e) {
                return n(t().mark((function n() {
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                N.readMeetingNotice(e).then((function(e) {})).catch((function(e) {
                                    console.log(e, "readMeetingNotice")
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), n)
                })))()
            },
            initImSdk: function() {
                var e, t, n = this;
                if (l.getIsSupportIm()) {
                    var i = l.getLastQueryMeetingInfo(),
                        a = l.getJoinRespMeta().roomInfo,
                        c = null == a || null === (e = a.im) || void 0 === e ? void 0 : e.qcloud_im_sdk.group_id,
                        u = (null == a || null === (t = a.im) || void 0 === t || t.qcloud_im_sdk.attendee_group_id, ""),
                        _ = o.default.getUserSig().find((function(e) {
                            return "W6" === e.sig_type
                        })),
                        m = "";
                    if (null != _ && _.user_sig) {
                        var g = p.base64Decode(null == _ ? void 0 : _.user_sig),
                            h = JSON.parse(g);
                        m = null == h ? void 0 : h.im_token, u = null == h ? void 0 : h.open_id
                    }
                    null == i || i.meetingID;
                    var S = l.getJoinParam().nickname;
                    r.default.init({
                        userId: u,
                        userSig: m,
                        group: c,
                        nickname: S
                    }).then((function(e) {
                        r.default.on("sdkStateReady", (function() {
                            l.isWebinarMeeting() && r.default.instance.joinGroup("".concat(c, "_webinar")).then((function(e) {})), c && n.queryMeetingNotice(!0)
                        })), r.default.on("onMessageReceived", (function(e) {
                            var t = [s.IMChatBizType.Tip],
                                n = e.filter((function(e) {
                                    return !t.includes(e.chatType)
                                }));
                            d.dispatch({
                                type: f.MESSAGE_RECEIVED,
                                payload: n
                            })
                        })), r.default.on("onMessageRevoked", (function(e) {
                            d.dispatch({
                                type: f.MESSAGE_REVOKED,
                                payload: e
                            })
                        }))
                    }))
                }
            },
            logoutImSdk: function() {
                var e, t = l.getJoinRespMeta(),
                    n = null == t ? void 0 : t.roomInfo,
                    i = null == n || null === (e = n.im) || void 0 === e ? void 0 : e.qcloud_im_sdk.group_id;
                l.isWebinarMeeting() && i ? r.default.instance.quitGroup("".concat(i, "_webinar")).then((function(e) {})).finally((function() {
                    r.default.destroy()
                })) : r.default.destroy(), this.clearImMsg()
            },
            clearImMsg: function() {
                l.clearUnreadMsgCount(), l.clearImMessageList()
            }
        };
    d.register((function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.type;
        if (t) switch (t) {
            case f.RECEIVE_USER_JOIN_OF_ME:
                x.onReceiveUserJoinOfMe()
        }
    })), console.log("MeetingAction.js loaded end"), module.exports = x;
});