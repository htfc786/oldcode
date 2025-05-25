define("stores/MeetingStore.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../@babel/runtime/helpers/classCallCheck"),
        t = require("../@babel/runtime/helpers/createClass"),
        i = require("../@babel/runtime/helpers/possibleConstructorReturn"),
        n = require("../@babel/runtime/helpers/assertThisInitialized"),
        a = require("../@babel/runtime/helpers/inherits"),
        o = require("../@babel/runtime/helpers/createSuper");
    console.log("MeetingStore.js loaded start");
    var s = require("../utils/EventEmitter"),
        r = require("../utils/logger"),
        u = require("../utils/Dispatcher"),
        c = require("../constants/MeetingType"),
        l = require("../utils/plugins/MeetingInfo"),
        d = require("../constants/MultMediaState"),
        m = require("./MembersStore"),
        h = require("../constants/MembersType"),
        g = require("../utils/util").clog,
        y = require("../clients/RavenClient"),
        S = require("../constants/LayoutMode").LayoutMode,
        _ = require("../constants/MediaMachineType"),
        f = require("../stores/UserStore"),
        M = require("../constants/UserType"),
        R = require("../clients/WemeetClient"),
        v = new r({
            pageName: "MeetingStore",
            aegisLogEnable: !0,
            wxLogEnable: !1
        }),
        I = R.constants.RoomType,
        E = R.constants,
        k = new(function(r) {
            a(T, s);
            var u = o(T);

            function T(t) {
                var a;
                return e(this, T), T.prototype.instance ? i(a, T.prototype.instance) : ((a = u.call(this, t)).xmppRoomState = I.OUTSIDE, a.mediaRoomState = d.MediaRoomState.OUT, a.mediaRoomStateTs = 0, a.lastQueryedMeetingInfo = {}, a.lastLeaveRoomReason = "", a.meetingInfo = {}, a.mutedByMySelf = !0, a.mixAudioStreamInfo = {
                    id: "mixAudioStream",
                    playURL: ""
                }, a.trtc = null, a.audioEnable = !1, a.camera = {
                    cameraEnable: !1,
                    isFrontCamera: !0,
                    switchToFrontSuccText: "已切换为前置摄像头",
                    switchToBackSuccText: "已切换为后置摄像头",
                    switchFailText: "切换摄像头失败!"
                }, a.sigUrl = {}, a.roomInfo = {}, a.meetingMetaData = {}, a.meetingSetting = {}, a.joinParam = {}, a.meetingMetaSetting = {
                    sigUrl: "",
                    roomInfo: {},
                    settings: {},
                    metaData: {}
                }, a.isJoiningFromWaitingRoom = !1, a.isLeavingFromWaitingRoom = !1, a.isLeavingForWaitingRoom = !1, a.isAudioExcitedStrategyEnabled = !0, a.cloudRecordStatus = 0, a.joinRespMeta = null, a.myAudioGrids = 0, a.myKeyString = "", a.enableAudioWave = !0, a.isSpBackend = !1, a.payInfoMeetingExpireTime = 0, a.payInfoCountdownThreshhold = 0, a.payInfoCountdownTimer = 0, a.tsJoinMeetingSucc = 0, a.layoutMode = S.defaultLayout, a.soundAroundEnable = !0, a.scale = 1, a.isSmallVideoCollapsed = !1, a.smallVideoW = 0, a.smallVideoH = 0, a.largeVideoW = 0, a.largeVideoH = 0, a.navbarH = 48, a.isPusherHangup = !1, a.bigRoom = {
                    safeTime: 120,
                    currentMediaMachineType: _.InterfaceMachine,
                    resolveSignRefresh: null,
                    rejectSignRefresh: null,
                    request_up_stream_token: ""
                }, a.isHandsUp = !1, a.isTurningAudio = !1, a.isTurningVideo = !1, a.uploadStreamController = null, a.isSoundAround = !0, a.enableWatermark = !1, a.isMultipleRowWatermark = !1, a.allowTurnOnBySelf = !1, a.isHideMeetingCodeAndPassword = !1, a.isMeetingLocked = !1, a.isApplyMicIng = !1, a.rtmpProxy = null, a.timerFor5001CausedByPhoneCall = 0, a.networkLevel = E.MediaNetworkLevel.Excellent, a.isWebinar = !1, a.webinarInfo = {
                    warmup_type: 0
                }, a.isSupportIm = !0, a.unreadMsgCount = 0, a.imMessageList = [], T.prototype.instance = n(a), a)
            }
            return t(T, [{
                key: "init",
                value: function(e) {
                    v.info("MeetingStore inited"), this.setMeetingInfo(e), this.setTsJoinMeetingSucc((new Date).getTime()), m.onceEventListener(this.onMembersStoreChange, this), f.onceEventListener(this.onUserStoreChange, this)
                }
            }, {
                key: "clear",
                value: function() {
                    v.info("MeetingStore cleared"), this.networkLevel = E.MediaNetworkLevel.Excellent, this.xmppRoomState = I.OUTSIDE, this.lastQueryedMeetingInfo = {}, this.lastLeaveRoomReason = "", this.meetingInfo = {}, this.mutedByMySelf = !0, this.mixAudioStreamInfo = {
                        id: "mixAudioStream",
                        playURL: ""
                    }, this.audioEnable = !1, this.camera = {
                        cameraEnable: !1,
                        isFrontCamera: !0,
                        switchToFrontSuccText: "已切换为前置摄像头",
                        switchToBackSuccText: "已切换为后置摄像头",
                        switchFailText: "切换摄像头失败!"
                    }, this.sigUrl = {}, this.roomInfo = {}, this.meetingMetaData = {}, this.meetingSetting = {}, this.joinParam = {}, this.meetingMetaSetting = {
                        sigUrl: "",
                        roomInfo: {},
                        settings: {},
                        metaData: {}
                    }, this.isJoiningFromWaitingRoom = !1, this.isLeavingFromWaitingRoom = !1, this.isLeavingForWaitingRoom = !1, this.mediaRoomState = d.MediaRoomState.OUT, this.isAudioExcitedStrategyEnabled = !0, this.cloudRecordStatus = 0, this.joinRespMeta = null, this.myAudioGrids = 0, this.myKeyString = "", this.enableAudioWave = !0, this.isSpBackend = !1, this.payInfoCountdownTimer && (v.info("timer of meeting time countdown has not been cleared, cleared in MeetingStore::clear"), clearInterval(this.payInfoCountdownTimer)), this.payInfoMeetingExpireTime = 0, this.payInfoCountdownThreshhold = 0, this.payInfoCountdownTimer = 0, this.tsJoinMeetingSucc = 0, this.layoutMode = S.defaultLayout, this.soundAroundEnable = !0, this.scale = 1, this.isSmallVideoCollapsed = !1, this.smallVideoW = 0, this.smallVideoH = 0, this.largeVideoW = 0, this.largeVideoH = 0, this.navbarH = 48, this.isPusherHangup = !1, this.bigRoom = {
                        safeTime: 120,
                        currentMediaMachineType: _.InterfaceMachine,
                        resolveSignRefresh: null,
                        rejectSignRefresh: null,
                        request_up_stream_token: ""
                    }, this.isHandsUp = !1, this.isTurningAudio = !1, this.isTurningVideo = !1, this.uploadStreamController = null, this.isSoundAround = !0, this.enableWatermark = !1, this.isMultipleRowWatermark = !1, this.uiCfg = null, this.allowTurnOnBySelf = !1, this.isHideMeetingCodeAndPassword = !1, this.isMeetingLocked = !1, this.rtmpProxy = null, this.timerFor5001CausedByPhoneCall = 0, m.removeEventListener(this.onMembersStoreChange), f.removeEventListener(this.onUserStoreChange)
                }
            }, {
                key: "setTRTCInstance",
                value: function(e) {
                    e ? v.info("trtc inited") : v.info("trtc destroyed"), this.trtc = e
                }
            }, {
                key: "getTRTCInstance",
                value: function() {
                    return this.trtc
                }
            }, {
                key: "getPusherURL",
                value: function() {
                    var e, t;
                    return (null === (e = this.getTRTCInstance()) || void 0 === e || null === (t = e.getPusherAttrs()) || void 0 === t ? void 0 : t.url) || ""
                }
            }, {
                key: "setEnableAudioWave",
                value: function(e) {
                    this.enableAudioWave = e, g.info("set enableAudioWave to ".concat(e))
                }
            }, {
                key: "getEnableAudioWave",
                value: function() {
                    return this.enableAudioWave
                }
            }, {
                key: "setApplyMicIng",
                value: function(e) {
                    this.isApplyMicIng = e
                }
            }, {
                key: "getApplyMicIng",
                value: function() {
                    return this.isApplyMicIng
                }
            }, {
                key: "getNetworkLevel",
                value: function() {
                    return this.networkLevel
                }
            }, {
                key: "setNetworkLevel",
                value: function(e) {
                    this.networkLevel = e, g.info("set networkLevel to ".concat(e))
                }
            }, {
                key: "setMyKeyString",
                value: function(e) {
                    this.myKeyString = e, g.info("set myKeyString to ".concat(e))
                }
            }, {
                key: "getMyKeyString",
                value: function() {
                    return this.myKeyString
                }
            }, {
                key: "getIsAudioExcitedStrategyEnabled",
                value: function() {
                    return this.isAudioExcitedStrategyEnabled
                }
            }, {
                key: "onDisableAudioExitedStrategy",
                value: function() {
                    v.info("禁用语音激励"), g.info("禁用语音激励"), this.isAudioExcitedStrategyEnabled = !1
                }
            }, {
                key: "onEnableAudioExitedStrategy",
                value: function() {
                    v.info("启用语音激励"), g.info("启用语音激励"), this.isAudioExcitedStrategyEnabled = !0
                }
            }, {
                key: "onLocalRecordOn",
                value: function() {
                    this.emit(c.LOCAL_RECORD_ON)
                }
            }, {
                key: "onLocalRecordOff",
                value: function() {
                    this.emit(c.LOCAL_RECORD_OFF)
                }
            }, {
                key: "setNickname",
                value: function(e) {
                    this.emit(c.SET_NICKNAME, {
                        data: e
                    })
                }
            }, {
                key: "setJoinMeetingRespMeta",
                value: function(e) {
                    this.joinRespMeta = e
                }
            }, {
                key: "getJoinRespMeta",
                value: function() {
                    return this.joinRespMeta
                }
            }, {
                key: "getRoomInfo",
                value: function() {
                    var e = (this.getJoinRespMeta() || {}).roomInfo;
                    return void 0 === e ? {} : e
                }
            }, {
                key: "getMeetingID",
                value: function() {
                    var e = (this.getMeetingInfo() || {}).meeting_id,
                        t = void 0 === e ? "" : e;
                    return this.isOutsideXMPPRoom() || t || v.error("we are in xmpp room, but no meetingID??"), t
                }
            }, {
                key: "getAvRoomID",
                value: function() {
                    var e = this.getRoomInfo().av_room_id;
                    return void 0 === e ? "" : e
                }
            }, {
                key: "getJoinMeetingSettings",
                value: function() {
                    return this.joinRespMeta.settings
                }
            }, {
                key: "getMyID",
                value: function() {
                    var e = (m.getCommonUser(this.getMyKeyString()) || {}).id,
                        t = void 0 === e ? null : e;
                    return t || v.error("getMyID in MeetingStore failed: id is null. keyString = ".concat(this.getMyKeyString())), t
                }
            }, {
                key: "setMutedBySelf",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.mutedByMySelf = e
                }
            }, {
                key: "getMutedBySelf",
                value: function() {
                    return this.mutedByMySelf
                }
            }, {
                key: "getAudioEnable",
                value: function() {
                    return this.audioEnable
                }
            }, {
                key: "setAudioEnable",
                value: function(e) {
                    v.info("麦克风已".concat(e ? "打开" : "关闭")), this.audioEnable = !!e, this.emit(c.AUDIO_ENABLE_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getCameraEnable",
                value: function() {
                    return this.camera.cameraEnable
                }
            }, {
                key: "setCameraEnable",
                value: function(e) {
                    v.info("摄像头已".concat(e ? "打开" : "关闭")), this.camera.cameraEnable = e, this.emit(c.CAMERA_ENABLE_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsFrontCamera",
                value: function() {
                    return this.camera.isFrontCamera
                }
            }, {
                key: "setIsFrontCamera",
                value: function(e) {
                    v.info("切换至".concat(e ? "前置摄像头" : "后置摄像头")), this.camera.isFrontCamera = e
                }
            }, {
                key: "getCameraSwitchFailText",
                value: function() {
                    return this.camera.switchFailText
                }
            }, {
                key: "getCameraSwitchToFrontSuccessText",
                value: function() {
                    return this.camera.switchToFrontSuccText
                }
            }, {
                key: "getCameraSwitchToBackSuccessText",
                value: function() {
                    return this.camera.switchToBackSuccText
                }
            }, {
                key: "setXMPPRoomState",
                value: function(e) {
                    var t = this.getReadableXMPPRoomState(this.xmppRoomState),
                        i = this.getReadableXMPPRoomState(e);
                    v.info("xmpp room state changes from ".concat(this.xmppRoomState, "(").concat(t, ") to ").concat(e, "(").concat(i, ")")), this.xmppRoomState = e
                }
            }, {
                key: "getReadableXMPPRoomState",
                value: function(e) {
                    switch (void 0 === e && (e = this.xmppRoomState), e) {
                        case R.constants.RoomType.OUTSIDE:
                            return "不在业务房间中";
                        case R.constants.RoomType.MEETING_ROOM:
                            return "会议中";
                        case R.constants.RoomType.WAITING_ROOM:
                            return "等候室";
                        default:
                            return "Unknown xmpp room state: ".concat(e)
                    }
                }
            }, {
                key: "isInMeeting",
                value: function() {
                    return this.xmppRoomState !== I.OUTSIDE
                }
            }, {
                key: "isInMeetingRoom",
                value: function() {
                    return this.xmppRoomState === I.MEETING_ROOM
                }
            }, {
                key: "isInWaitingRoom",
                value: function() {
                    return this.xmppRoomState === I.WAITING_ROOM
                }
            }, {
                key: "isOutsideXMPPRoom",
                value: function() {
                    return this.xmppRoomState === I.OUTSIDE
                }
            }, {
                key: "getLastQueryMeetingInfo",
                value: function() {
                    return this.lastQueryedMeetingInfo
                }
            }, {
                key: "setLastQueryMeetingInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.meeting_item_list || [];
                    if (t.length > 0) {
                        var i = this.buildMeetingInfo(t[0]),
                            n = k.getLastQueryMeetingInfo();
                        n.url && i.url !== n.url && console.warn("invite url changed from ".concat(n.url, " to ").concat(i.url)), this.lastQueryedMeetingInfo = i
                    } else v.info("empty 未查到此会议号信息", "query-meeting"), this.lastQueryedMeetingInfo = {}
                }
            }, {
                key: "setMeetingInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (e.meeting_code, e.meeting_id, e.role);
                    this.isWebinar = "1" === e.meeting_type_flags, this.meetingInfo = e;
                    var i = e || {},
                        n = i.enter_room_type,
                        a = void 0 === n ? -1 : n;
                    0 !== a && 1 !== a && v.error("enter_room_type is invalid, got from 'data.enter_room_type'.\n        data = ".concat(JSON.stringify(e), "\n      ")), this.setXMPPRoomState(a), this.setCurrentMediaMachineType(t)
                }
            }, {
                key: "getMeetingInfo",
                value: function() {
                    return this.meetingInfo
                }
            }, {
                key: "isAnonymousMeeting",
                value: function() {
                    var e;
                    return 1 === (null === (e = this.getLastQueryMeetingInfo()) || void 0 === e ? void 0 : e.isAnonymous)
                }
            }, {
                key: "isWebinarMeeting",
                value: function() {
                    return this.isWebinar
                }
            }, {
                key: "getJoinParam",
                value: function() {
                    return this.joinParam
                }
            }, {
                key: "setJoinParam",
                value: function(e) {
                    e ? (this.joinParam = e, f.setDefaultNickName(this.joinParam.nickname)) : v.assert("join param is invalid")
                }
            }, {
                key: "getLastLeaveReason",
                value: function() {
                    return this.lastLeaveRoomReason
                }
            }, {
                key: "setLastLeaveReason",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.lastLeaveRoomReason = e
                }
            }, {
                key: "getMixAudioStream",
                value: function() {
                    return this.mixAudioStreamInfo
                }
            }, {
                key: "setMixAudioStream",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.isInMeeting()) {
                        var t = !e.playURL,
                            i = !this.mixAudioStreamInfo.playURL && e.playURL,
                            n = this.mixAudioStreamInfo.playURL && e.playURL && this.mixAudioStreamInfo.playURL !== e.playURL;
                        t ? v.info("混音流地址被清空") : i ? v.info("混音流地址初始化为: ".concat(e.playURL)) : n ? v.info("混音流地址 changes from\n        ".concat(this.mixAudioStreamInfo.playURL, "\n        to\n        ").concat(e.playURL, "\n      ")) : v.warn("[ASSERT] 混音流地址没有变化，来这儿干啥? url = ".concat(e.playURL)), Object.assign(this.mixAudioStreamInfo, e)
                    } else v.warn("set mix audio ignored since i am not in meeting")
                }
            }, {
                key: "buildMeetingInfo",
                value: function(e) {
                    return new l({
                        meetingID: e.meeting_id,
                        meetingCode: e.meeting_code,
                        pmiCode: e.pmi_code,
                        name: e.subject,
                        startTime: 1e3 * e.begin_time,
                        endTime: 1e3 * e.end_time,
                        location: e.location,
                        password: e.password,
                        hasPwd: "1" === e.need_auth,
                        pstnPhone: e.pstn_phone,
                        pstnCode: e.pstn_code,
                        pstnPassword: e.pstn_password,
                        url: e.url || "",
                        hostUID: e.host.app_uid,
                        hostAppid: e.host.app_id,
                        isQuickMeeting: e.is_quick_meeting,
                        meetingState: e.meeting_state,
                        creatorAppID: e.creator.appId,
                        meetingLockSettings: e.meeting_lock_settings,
                        loginUsersOnly: e.login_users_only,
                        creatorNickname: e.creator_nickname,
                        needEnroll: e.need_enroll,
                        isAnonymous: e.is_anonymous,
                        meetingInfoMaskFlag: e.meeting_info_mask_flag,
                        securityVerifyType: e.security_verify_type
                    })
                }
            }, {
                key: "setIsJoiningFromWaitingRoom",
                value: function(e) {
                    this.isJoiningFromWaitingRoom = e, this.emit(c.IS_JOINING_FROM_WAITING_ROOM_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsJoiningFromWaitingRoom",
                value: function() {
                    return this.isJoiningFromWaitingRoom
                }
            }, {
                key: "setIsLeavingFromWaitingRoom",
                value: function(e) {
                    this.isLeavingFromWaitingRoom = e, this.emit(c.IS_LEAVING_FROM_WAITING_ROOM_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsLeavingFromWaitingRoom",
                value: function() {
                    return this.isLeavingFromWaitingRoom
                }
            }, {
                key: "setIsLeavingForWaitingRoom",
                value: function(e) {
                    this.isLeavingForWaitingRoom = e, this.emit(c.IS_LEAVING_FOR_WAITING_ROOM_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsLeavingForWaitingRoom",
                value: function() {
                    return this.isLeavingForWaitingRoom
                }
            }, {
                key: "isInMediaRoom",
                value: function() {
                    return this.mediaRoomState === d.MediaRoomState.IN
                }
            }, {
                key: "isOutsideMediaRoom",
                value: function() {
                    return this.mediaRoomState === d.MediaRoomState.OUT
                }
            }, {
                key: "setMediaRoomState",
                value: function(e) {
                    var t = require("../clients/BeaconClient"),
                        i = d.MediaRoomState.getReadableState(this.mediaRoomState),
                        n = d.MediaRoomState.getReadableState(e);
                    v.info("media room state changed from ".concat(this.mediaRoomState, "(").concat(i, ") to ").concat(e, "(").concat(n, ")"));
                    var a = +new Date;
                    if (e === d.MediaRoomState.IN) {
                        var o = a - this.mediaRoomStateTs;
                        o <= 0 && v.assert("time cost on media room state change is weird: ".concat(o)), t.report("mp_live_pusher_status_in_1018", {
                            prevState: this.mediaRoomState,
                            timeCost: o
                        }), v.reportEvent("mp_live_pusher_status_in_1018", this.mediaRoomState, o)
                    }(this.mediaRoomState === d.MediaRoomState.JOINING || this.mediaRoomState === d.MediaRoomState.REDIRECTING) && e !== d.MediaRoomState.IN && (t.report("mp_live_pusher_status_not_in", {
                        prevState: this.mediaRoomState,
                        currentState: e
                    }), v.reportEvent("mp_live_pusher_status_not_in")), this.mediaRoomState = e, this.mediaRoomStateTs = a, R.meetingUserCtrl.setMediaRoomState(this.mediaRoomState)
                }
            }, {
                key: "getMediaRoomState",
                value: function() {
                    return this.mediaRoomState
                }
            }, {
                key: "getReadableMediaRoomState",
                value: function() {
                    return d.MediaRoomState.getReadableState(this.getMediaRoomState())
                }
            }, {
                key: "joinMediaRoomSucc",
                value: function() {
                    var e = this.getMediaRoomState(),
                        t = e === d.MediaRoomState.RESTARTING,
                        i = e === d.MediaRoomState.INTERRUPTED,
                        n = e === d.MediaRoomState.REDIRECTING,
                        a = t || i;
                    this.setMediaRoomState(d.MediaRoomState.IN), a ? (v.info("live-pusher fires 1018, and it is recovered from ".concat(i ? "5001" : "-1307")), this.emit(c.LIVE_PUSHER_MEDIA_ROOM_RECOVERD, {})) : n ? v.info("live-pusher fires 1018 since redirecting has been finished.") : (v.info("live-pusher fires 1018"), this.emit(c.LIVE_PUSHER_JOIN_MEDIA_ROOM_SUCC, {}))
                }
            }, {
                key: "needLeaveMediaRoom",
                value: function() {
                    this.setMediaRoomState(d.MediaRoomState.OUT)
                }
            }, {
                key: "reconnectMediaRoom",
                value: function() {
                    this.setMediaRoomState(d.MediaRoomState.RECONNECTING)
                }
            }, {
                key: "restartMediaRoom",
                value: function() {
                    this.setMediaRoomState(d.MediaRoomState.RESTARTING)
                }
            }, {
                key: "mediaRoomInterrupted",
                value: function() {
                    this.setMediaRoomState(d.MediaRoomState.INTERRUPTED)
                }
            }, {
                key: "setMediaRoomStateToOut",
                value: function() {
                    this.setMediaRoomState(d.MediaRoomState.OUT)
                }
            }, {
                key: "cloudRecordStateChange",
                value: function(e) {
                    v.info("cloud record state changed to: ".concat(function(e) {
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
                    }(e))), this.cloudRecordStatus = e
                }
            }, {
                key: "isCloudRecording",
                value: function() {
                    return 0 !== this.cloudRecordStatus
                }
            }, {
                key: "getCloudRecordStatus",
                value: function() {
                    return this.cloudRecordStatus
                }
            }, {
                key: "getMembersCount",
                value: function() {
                    return m.getMemberCount()
                }
            }, {
                key: "setMyAudioGrids",
                value: function(e) {
                    this.myAudioGrids = e
                }
            }, {
                key: "getMyAudioGrids",
                value: function() {
                    return this.myAudioGrids
                }
            }, {
                key: "getHasVideoInMeeting",
                value: function() {
                    return m.getHasVideoInMeeting()
                }
            }, {
                key: "getHasScreenShareInMeeting",
                value: function() {
                    return m.getHasScreenShareInMeeting()
                }
            }, {
                key: "getHasWebScreenShareInMeeting",
                value: function() {
                    return m.getHasWebScreenShareInMeeting()
                }
            }, {
                key: "isScreenSharePaused",
                value: function() {
                    return m.isScreenSharePaused()
                }
            }, {
                key: "getScreenShareMember",
                value: function() {
                    return m.getScreenShareMember()
                }
            }, {
                key: "setIsSpBackend",
                value: function(e) {
                    this.isSpBackend = e
                }
            }, {
                key: "getIsSpBackend",
                value: function() {
                    return this.isSpBackend
                }
            }, {
                key: "setPayInfoMeetingExpireTime",
                value: function(e) {
                    this.payInfoMeetingExpireTime = e
                }
            }, {
                key: "getPayInfoMeetingExpireTime",
                value: function() {
                    return this.payInfoMeetingExpireTime
                }
            }, {
                key: "setPayInfoCountdownThreshhold",
                value: function(e) {
                    this.payInfoCountdownThreshhold = e
                }
            }, {
                key: "getPayInfoCountdownThreshhold",
                value: function() {
                    return this.payInfoCountdownThreshhold
                }
            }, {
                key: "setPayInfoCountdownTimer",
                value: function(e) {
                    this.payInfoCountdownTimer = e
                }
            }, {
                key: "getPayInfoCountdownTimer",
                value: function() {
                    return this.payInfoCountdownTimer
                }
            }, {
                key: "freeMeetingIsEnd",
                value: function() {
                    try {
                        v.warn("stack = ".concat(new Error("free meeting end is invoked! ").stack)), y.captureMessage("free meeting end is invoked", {
                            level: "warn",
                            detail: new Error("free meeting end is invoked! ").stack
                        })
                    } catch (e) {
                        v.error("print stack of free meeting is end exception: ".concat(JSON.stringify(e)))
                    }
                    this.emit(c.FREE_MEETING_IS_END, {})
                }
            }, {
                key: "updateMeetingTimeCountdown",
                value: function(e) {
                    this.emit(c.UPDATE_MEETING_TIME_COUNTDOWN, {
                        data: e
                    })
                }
            }, {
                key: "handleMeetingWillLimited",
                value: function(e, t) {
                    this.emit(e, {
                        data: t
                    })
                }
            }, {
                key: "setTsJoinMeetingSucc",
                value: function(e) {
                    this.tsJoinMeetingSucc = e
                }
            }, {
                key: "getTsJoinMeetingSucc",
                value: function() {
                    return this.tsJoinMeetingSucc
                }
            }, {
                key: "setLayoutMode",
                value: function(e) {
                    e !== this.layoutMode && (v.info("layout mode changed from ".concat(this.layoutMode, " to ").concat(e)), this.layoutMode = e, this.emit(c.MEETING_LAYOUT_CHANGE, {
                        data: e
                    }))
                }
            }, {
                key: "getLayoutMode",
                value: function() {
                    return this.layoutMode
                }
            }, {
                key: "isAudioLayout",
                value: function() {
                    return this.layoutMode === S.audioLayout
                }
            }, {
                key: "isFloatLayout",
                value: function() {
                    return this.layoutMode === S.floatLayout
                }
            }, {
                key: "isPusherLayout",
                value: function() {
                    return this.layoutMode === S.pusherLayout
                }
            }, {
                key: "getScale",
                value: function() {
                    return this.scale
                }
            }, {
                key: "setScale",
                value: function(e) {
                    this.scale = e
                }
            }, {
                key: "isScaling",
                value: function() {
                    return 1 !== this.scale
                }
            }, {
                key: "getIsSmallVideoCollapsed",
                value: function() {
                    return this.isSmallVideoCollapsed
                }
            }, {
                key: "setIsSmallVideoCollapsed",
                value: function(e) {
                    this.isSmallVideoCollapsed = e, this.emit(e ? c.COLLAPSE_SMALL_VIDEOS : c.EXPAND_SMALL_VIDEOS)
                }
            }, {
                key: "onceEventListener",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.unsubscribe("CHANGE", e, t), this.subscribe("CHANGE", e, t)
                }
            }, {
                key: "addEventListener",
                value: function(e) {
                    this.subscribe("CHANGE", e)
                }
            }, {
                key: "removeEventListener",
                value: function(e) {
                    this.unsubscribe("CHANGE", e)
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    this.publish("CHANGE", e, t)
                }
            }, {
                key: "onMembersStoreChange",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = t.data;
                    switch (e) {
                        case h.MEMBER_COUNT_CHANGE:
                            this.onMemberCountChange(i);
                            break;
                        case h.MEETING_HAS_VIDEO_ON:
                            this.onMeetingHasVideoOn();
                            break;
                        case h.MEETING_HAS_NO_VIDEO:
                            this.onMeetingHasNoVideo();
                            break;
                        case h.MEETING_HOST_INIT:
                        case h.MEMBER_BECOME_HOST:
                            this.onMeetingHostChanged(i)
                    }
                }
            }, {
                key: "onUserStoreChange",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = t.data;
                    switch (e) {
                        case M.XMPP_LOGOUT_ON_POSITIVELY:
                        case M.XMPP_LOGOUT_ON_ABNORMAL_NETWORK:
                        case M.XMPP_LOGOUT_ON_KICKED_BY_SAME_ACCOUNT:
                        case M.XMPP_LOGOUT_ON_ABNORMAL_ACCOUNT:
                        case M.XMPP_LOGOUT_ON_OTHERS_SITUATION:
                            this.onXmppLogout(i)
                    }
                }
            }, {
                key: "onXmppLogout",
                value: function(e) {
                    var t = e.ecode,
                        i = e.reason;
                    v.warn("xmpp logout found at MeetingStore:\n      ecode: ".concat(t, ",\n      reason: ").concat(i, ",\n    ")), this.setXMPPRoomState(R.constants.RoomType.OUTSIDE), this.emit(c.ON_XMPP_LOGOUT, {
                        data: e
                    }), this.clear()
                }
            }, {
                key: "onMemberCountChange",
                value: function(e) {
                    this.getHasVideoInMeeting() ? 1 === e ? this.switchToPusherLayout() : this.switchToFloatLayout() : this.switchToAudioLayout()
                }
            }, {
                key: "onMeetingHasVideoOn",
                value: function() {
                    1 < k.getMembersCount() ? (g.info("会议中有人开启了视频，进入float布局模式"), this.switchToFloatLayout()) : (g.info("会议中只有1人且开了视频，进入pusher布局模式"), this.switchToPusherLayout())
                }
            }, {
                key: "onMeetingHasNoVideo",
                value: function() {
                    g.info("会议中不再有视频，进入纯语音布局模式"), this.switchToAudioLayout()
                }
            }, {
                key: "onMeetingHostChanged",
                value: function(e) {
                    this.emit(c.CURRENT_MEETING_HOST_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getMeetingHost",
                value: function() {
                    return m.getCurrentHost()
                }
            }, {
                key: "switchToFloatLayout",
                value: function() {
                    this.getMembersCount() < 2 && v.error("[ASSERT] switchToFloatLayout failed since member count is ".concat(this.getMembersCount())), this.setLayoutMode(S.floatLayout)
                }
            }, {
                key: "switchToPusherLayout",
                value: function() {
                    1 !== this.getMembersCount() && v.error("[ASSERT] switchToPusherLayout failed since members count not 1, but is ".concat(this.getMembersCount())), this.setLayoutMode(S.pusherLayout)
                }
            }, {
                key: "switchToAudioLayout",
                value: function() {
                    this.setLayoutMode(S.audioLayout)
                }
            }, {
                key: "getSmallVideoW",
                value: function() {
                    return this.smallVideoW
                }
            }, {
                key: "setSmallVideoW",
                value: function(e) {
                    this.smallVideoW = e
                }
            }, {
                key: "getSmallVideoH",
                value: function() {
                    return this.smallVideoH
                }
            }, {
                key: "setSmallVideoH",
                value: function(e) {
                    this.smallVideoH = e
                }
            }, {
                key: "getLargeVideoW",
                value: function() {
                    return this.largeVideoW
                }
            }, {
                key: "setLargeVideoW",
                value: function(e) {
                    this.largeVideoW = e
                }
            }, {
                key: "getLargeVideoH",
                value: function() {
                    return this.largeVideoH
                }
            }, {
                key: "setLargeVideoH",
                value: function(e) {
                    this.largeVideoH = e
                }
            }, {
                key: "getNavbarH",
                value: function() {
                    return this.navbarH
                }
            }, {
                key: "setNavbarH",
                value: function(e) {
                    this.navbarH = e
                }
            }, {
                key: "getIsPusherHangup",
                value: function() {
                    return this.isPusherHangup
                }
            }, {
                key: "setIsPusherHangup",
                value: function(e) {
                    this.isPusherHangup = e
                }
            }, {
                key: "setCurrentMediaMachineType",
                value: function(e) {
                    this.bigRoom.currentMediaMachineType !== e && (e === _.InterfaceMachine || e === _.ProxyMachine ? (v.info("currentMediaMachineType set to: ".concat(e === _.InterfaceMachine ? "接口机" : "代理机")), this.bigRoom.currentMediaMachineType = e, R.preMeetingService.setAccessType(e), this.emit(c.MEDIA_MECHINE_TYPE_CHANGE, {
                        data: e
                    })) : v.warn("ignore to set currentMediaMachineType. val: ".concat(e === _.Unset ? "Unset" : "Unknown")))
                }
            }, {
                key: "isOnDC",
                value: function() {
                    return this.bigRoom.currentMediaMachineType === _.InterfaceMachine
                }
            }, {
                key: "isOnOC",
                value: function() {
                    return this.bigRoom.currentMediaMachineType === _.ProxyMachine
                }
            }, {
                key: "getRequestUpStreamToken",
                value: function() {
                    return this.bigRoom.request_up_stream_token
                }
            }, {
                key: "setRequestUpStreamToken",
                value: function(e) {
                    this.bigRoom.request_up_stream_token = e
                }
            }, {
                key: "getIsHandsUp",
                value: function() {
                    return this.isHandsUp
                }
            }, {
                key: "setIsHandsUp",
                value: function(e) {
                    v.info("".concat(e ? "举手" : "手放下")), this.isHandsUp = e, this.emit(c.HANDS_UP_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getAllowSpeak",
                value: function() {
                    return this.allowSpeak
                }
            }, {
                key: "setAllowSpeak",
                value: function(e) {
                    this.allowSpeak = e, this.emit(c.ALLOW_SPEAK_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "setPermissionUserInfo",
                value: function(e) {
                    this.permissionUserInfo = e
                }
            }, {
                key: "getPermissionUserInfo",
                value: function() {
                    return this.permissionUserInfo
                }
            }, {
                key: "setIsTurningAudio",
                value: function(e) {
                    v.info("".concat(e ? "麦克风开始操作..." : "麦克风操作已释放")), this.isTurningAudio = e, this.emit(c.IS_TURNING_AUDIO, {
                        data: e
                    })
                }
            }, {
                key: "getIsTurningAudio",
                value: function() {
                    return this.isTurningAudio
                }
            }, {
                key: "setIsTurningVideo",
                value: function(e) {
                    v.info("".concat(e ? "摄像头开始操作..." : "摄像头操作已释放")), this.isTurningVideo = e, this.emit(c.IS_TURNING_VIDEO, {
                        data: e
                    })
                }
            }, {
                key: "getIsTurningVideo",
                value: function() {
                    return this.isTurningVideo
                }
            }, {
                key: "setUploadStreamController",
                value: function(e) {
                    this.uploadStreamController = e
                }
            }, {
                key: "getUploadStreamController",
                value: function() {
                    return this.uploadStreamController
                }
            }, {
                key: "setIsSoundAround",
                value: function(e) {
                    if ("boolean" != typeof e) throw "InvalidArgument";
                    this.isSoundAround = e, v.info("isSoundAround set to ".concat(e ? "扬声器" : "听筒")), this.emit(c.SOUND_AROUND_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsSoundAround",
                value: function() {
                    return this.isSoundAround
                }
            }, {
                key: "recoverLivePusher",
                value: function(e) {
                    this.setMediaRoomState(d.MediaRoomState.RESTARTING), this.emit(c.LIVE_PUSHER_MEDIA_ROOM_RESTARTING, {
                        data: e
                    })
                }
            }, {
                key: "onHandsUpSucc",
                value: function() {
                    this.emit(c.HANDS_UP_SUCC, {
                        data: this.getIsHandsUp()
                    })
                }
            }, {
                key: "onHandsDownSucc",
                value: function() {
                    this.emit(c.HANDS_UP_SUCC, {
                        data: !1
                    })
                }
            }, {
                key: "onHandsUpFail",
                value: function(e) {
                    var t = !this.getIsHandsUp();
                    v.warn("".concat(t ? "放手" : "举手", "操作失败，恢复到之前的状态")), this.setIsHandsUp(t), this.emit(c.HANDS_UP_FAIL, {
                        data: e
                    })
                }
            }, {
                key: "setEnableWatermark",
                value: function(e) {
                    this.enableWatermark = e, this.emit(c.ENABLE_WATERMARK_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getEnableWatermark",
                value: function() {
                    return this.enableWatermark
                }
            }, {
                key: "setMultipleRowWatermark",
                value: function(e) {
                    this.isMultipleRowWatermark = e, this.emit(c.ENABLE_WATERMARKROW_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getMultipleRowWatermark",
                value: function() {
                    return this.isMultipleRowWatermark
                }
            }, {
                key: "setUiPstnCfg",
                value: function(e) {
                    this.uiPstnCfg = e, this.emit(c.UI_CFG_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getUiPstnCfg",
                value: function() {
                    return this.uiPstnCfg
                }
            }, {
                key: "setAllowTurnOnBySelf",
                value: function(e) {
                    this.allowTurnOnBySelf = e, this.emit(c.ALLOW_TURN_ON_BY_SELF_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getAllowTurnOnBySelf",
                value: function() {
                    return this.allowTurnOnBySelf
                }
            }, {
                key: "setAllowHandsUp",
                value: function(e) {
                    this.allowHandsUp = e
                }
            }, {
                key: "setAllowLookAudienceCount",
                value: function(e) {
                    this.allowLookAudienceCount = e
                }
            }, {
                key: "getAllowHandsUp",
                value: function() {
                    return this.allowHandsUp
                }
            }, {
                key: "getAllowLookAudienceCount",
                value: function() {
                    return this.allowLookAudienceCount
                }
            }, {
                key: "setIsHideMeetingCodeAndPassword",
                value: function(e) {
                    this.isHideMeetingCodeAndPassword = e, this.emit(c.IS_HIDE_MEETING_CODE_AND_PASSWORD_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsHideMeetingCodeAndPassword",
                value: function() {
                    return this.isHideMeetingCodeAndPassword
                }
            }, {
                key: "setIsMeetingLocked",
                value: function(e) {
                    this.isMeetingLocked = e, this.emit(c.IS_MEETING_LOCKED_CHANGE, {
                        data: e
                    })
                }
            }, {
                key: "getIsMeetingLocked",
                value: function() {
                    return this.isMeetingLocked
                }
            }, {
                key: "setRtmpProxy",
                value: function(e) {
                    this.rtmpProxy = e
                }
            }, {
                key: "getRtmpProxy",
                value: function() {
                    return this.rtmpProxy
                }
            }, {
                key: "setTimerFor5001CausedByPhoneCall",
                value: function(e) {
                    this.timerFor5001CausedByPhoneCall = e
                }
            }, {
                key: "getTimerFor5001CausedByPhoneCall",
                value: function() {
                    return this.timerFor5001CausedByPhoneCall
                }
            }, {
                key: "setIsUseMoreWidth",
                value: function(e) {
                    this.isUseMoreWidth = e
                }
            }, {
                key: "getIsUseMoreWidth",
                value: function() {
                    return this.isUseMoreWidth
                }
            }, {
                key: "setVerifyResult",
                value: function(e) {
                    this.verifyResult = e
                }
            }, {
                key: "getVerifyResult",
                value: function() {
                    return this.verifyResult
                }
            }, {
                key: "setIsSupportIm",
                value: function(e) {
                    this.isSupportIm = e
                }
            }, {
                key: "getIsSupportIm",
                value: function() {
                    return this.isSupportIm
                }
            }, {
                key: "getUnreadMsgCount",
                value: function() {
                    return this.unreadMsgCount
                }
            }, {
                key: "setUnreadMsgCount",
                value: function(e) {
                    this.unreadMsgCount = e
                }
            }, {
                key: "clearUnreadMsgCount",
                value: function() {
                    this.unreadMsgCount = 0
                }
            }, {
                key: "getImMessageList",
                value: function() {
                    return this.imMessageList
                }
            }, {
                key: "setImMessageList",
                value: function(e) {
                    this.imMessageList = e
                }
            }, {
                key: "clearImMessageList",
                value: function() {
                    this.imMessageList = []
                }
            }, {
                key: "onMessageReceived",
                value: function(e) {
                    this.imMessageList = this.imMessageList.concat(e).slice(-15), this.emit(c.IM_MESSAGE_LIST_UPDATE, {
                        data: {
                            imMessageList: this.imMessageList,
                            newMsgLen: null == e ? void 0 : e.length
                        }
                    });
                    var t = e.filter((function(e) {
                        return !0 !== e.fromSelf
                    })).length;
                    if (t > 0) {
                        var i = this.unreadMsgCount + t;
                        this.setUnreadMsgCount(i), this.emit(c.UNREAD_COUNT_CHANGE, {
                            data: i
                        })
                    }
                }
            }, {
                key: "onMessageRevoked",
                value: function(e) {
                    var t = this;
                    (null != e ? e : []).forEach((function(e) {
                        var i = t.imMessageList.findIndex((function(t) {
                            return t.id === e.id
                        })); - 1 !== i && t.imMessageList.splice(i, 1, e)
                    })), this.emit(c.IM_MESSAGE_LIST_UPDATE, {
                        data: {
                            imMessageList: this.imMessageList
                        }
                    })
                }
            }, {
                key: "getNoticeVersion",
                value: function() {
                    return this.noticeVersion
                }
            }, {
                key: "setNoticeVersion",
                value: function(e) {
                    this.noticeVersion = e
                }
            }]), T
        }());
    g.info("[Register to Dispatcher] MeetingStore"), u.register((function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.type,
            i = e.payload;
        if (t) switch (t) {
            case c.NOTIFY_MY_AUDIO_GRIDS_CHANGE:
                k.setMyAudioGrids(i.data), k.emit(t, {
                    data: k.getMyAudioGrids()
                });
                break;
            case c.JOIN_MEETING_SUCC:
                var n = i || {},
                    a = n.data;
                k.init(a), f.setLeaveReason(""), k.emit(t, i);
                break;
            case c.JOIN_MEETING_FAIL:
            case c.BREAKOUT_ROOM_SUCC:
                k.emit(t, i);
                break;
            case c.QUERY_WEBINAR_SUMMARY_FAIL:
            case c.QUERY_WEBINAR_SUMMARY_SUCC:
            case c.APPLY_PERMISSION_SUCC:
                k.emit(t, i);
                break;
            case c.QUERY_MEETING_ITEM_LIST_SUCC:
                var o = i || {},
                    s = o.data;
                k.setLastQueryMeetingInfo(s), k.emit(t, i);
                break;
            case c.QUERY_MEETING_ITEM_LIST_FAIL:
            case c.QUERY_MEETING_PAY_INFO_FAIL:
                k.emit(t, i);
                break;
            case c.USER_STATUS_SUCC:
            case c.USER_STATUS_FAIL:
                k.emit(t, i);
                break;
            case c.HOST_STATUS_SUCC:
            case c.HOST_STATUS_FAIL:
                k.emit(t, i);
                break;
            case c.KICKED_OUT_SUCC:
            case c.KICKED_OUT_FAIL:
                f.setLeaveReason(i.data), k.clear(), k.emit(t, i);
                break;
            case c.NOTIFY_SWITCH_MEDIA_STREAM:
                k.emit(t, i);
                break;
            case c.MODIFY_USER_INFO_SUCC:
                f.addToHistoryNicknames(i.data.nickname);
            case c.MODIFY_USER_INFO_FAIL:
                k.emit(t, i);
                break;
            case c.REFRESH_MEDIA_AUTH_INFO_SUCC:
            case c.REFRESH_MEDIA_AUTH_INFO_FAIL:
                k.emit(t, i);
                break;
            case c.WAITING_USER_STATUS_TIMEOUT:
            case c.WAITING_USER_STATUS_BAD_RESPONSE:
                k.emit(t, i);
                break;
            case c.WAITING_USER_STATUS_JOIN_FROM_WAITING_ROOM:
                k.getIsJoiningFromWaitingRoom() ? v.warn("duplicated WAITING_USER_STATUS_JOIN_FROM_WAITING_ROOM") : k.emit(t, i);
                break;
            case c.WAITING_USER_STATUS_LEAVE_FROM_WAITING_ROOM:
                k.clear(), k.emit(t, i);
                break;
            case c.WAITING_USER_STATUS_LEAVE_FOR_WAITING_ROOM:
                k.getIsLeavingForWaitingRoom() ? v.warn("duplicated WAITING_USER_STATUS_LEAVE_FOR_WAITING_ROOM") : k.emit(t, i);
                break;
            case c.BACK_TO_WAITING_ROOM:
            case c.WAITING_USER_STATUS_I_AM_IN:
                k.setXMPPRoomState(R.constants.RoomType.WAITING_ROOM), k.emit(t, i);
                break;
            case c.MIX_AUDIO_STREAM_CHANGE:
                k.setMixAudioStream(i.data), k.emit(t, i);
                break;
            case c.JOIN_PARAM_UPDATE:
                k.setJoinParam(i);
                break;
            case c.SWITCH_USER_ROLE_TO_DC:
            case c.SWITCH_USER_ROLE_TO_OC:
            case c.SWITCH_USER_ROLE_FAIL:
                k.emit(t, i);
                break;
            case c.LIVE_PUSHER_JOIN_MEDIA_ROOM_SUCC:
                k.joinMediaRoomSucc();
                break;
            case c.LIVE_PUSHER_NEED_LEAVE_MEDIA_ROOM:
                k.needLeaveMediaRoom(), k.emit(t, i);
                break;
            case c.LIVE_PUSHER_MEDIA_ROOM_RECONNECTING:
                k.reconnectMediaRoom(), k.emit(t, i);
                break;
            case c.LIVE_PUSHER_MEDIA_ROOM_RESTARTING:
                k.restartMediaRoom(), k.emit(t, i);
                break;
            case c.LIVE_PUSHER_MEDIA_ROOM_INTERRUPTED:
                k.mediaRoomInterrupted(), k.emit(t, i);
                break;
            case c.CLOUD_RECORD_STATE_STOPPED:
            case c.CLOUD_RECORD_STATE_PREPARING:
            case c.CLOUD_RECORD_STATE_STARTED:
            case c.CLOUD_RECORD_STATE_PAUSED:
                k.cloudRecordStateChange(i.data), k.emit(t, i);
                break;
            case c.RECEIVE_USER_JOIN_OF_ME:
                var r = i || {},
                    u = r.data;
                k.setMyKeyString(u.keyString), k.setAudioEnable("1" === u.audio_on), k.setCameraEnable("1" === u.video_on), k.emit(t, u);
                break;
            case c.DISABLE_AUDIO_EXCITED_STRATEGY:
                k.onDisableAudioExitedStrategy(), k.emit(t, i);
                break;
            case c.ENABLE_AUDIO_EXCITED_STRATEGY:
                k.onEnableAudioExitedStrategy(), k.emit(t, i);
                break;
            case c.LOCAL_RECORD_ON:
                k.onLocalRecordOn();
                break;
            case c.LOCAL_RECORD_OFF:
                k.onLocalRecordOff();
                break;
            case c.MESSAGE_RECEIVED:
                k.onMessageReceived(i);
                break;
            case c.MESSAGE_REVOKED:
                k.onMessageRevoked(i)
        }
    })), module.exports = k, console.log("MeetingStore.js loaded end");
});