define("Helpers/TRTC.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = exports.ETRTCEvent = void 0, require("../@babel/runtime/helpers/Arrayincludes");
    var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../@babel/runtime/helpers/asyncToGenerator"),
        t = require("../@babel/runtime/helpers/classCallCheck"),
        n = require("../@babel/runtime/helpers/createClass"),
        s = a(require("trtc-wx-sdk")),
        E = a(require("../utils/logger")),
        i = a(require("../configs/AppConfig"));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = new E.default({
            pageName: "TRTC",
            aegisLogEnable: !0,
            wxLogEnable: !1
        }),
        u = exports.ETRTCEvent = function(e) {
            return e.LOCAL_JOIN = "LOCAL_JOIN", e.LOCAL_LEAVE = "LOCAL_LEAVE", e.KICKED_OUT = "KICKED_OUT", e.REMOTE_USER_JOIN = "REMOTE_USER_JOIN", e.REMOTE_USER_LEAVE = "REMOTE_USER_LEAVE", e.REMOTE_VIDEO_ADD = "REMOTE_VIDEO_ADD", e.REMOTE_VIDEO_REMOVE = "REMOTE_VIDEO_REMOVE", e.REMOTE_AUDIO_ADD = "REMOTE_AUDIO_ADD", e.REMOTE_AUDIO_REMOVE = "REMOTE_AUDIO_REMOVE", e.REMOTE_STATE_UPDATE = "REMOTE_STATE_UPDATE", e.LOCAL_NET_STATE_UPDATE = "LOCAL_NET_STATE_UPDATE", e.REMOTE_NET_STATE_UPDATE = "REMOTE_NET_STATE_UPDATE", e.REMOTE_AUDIO_VOLUME_UPDATE = "REMOTE_AUDIO_VOLUME_UPDATE", e.LOCAL_AUDIO_VOLUME_UPDATE = "LOCAL_AUDIO_VOLUME_UPDATE", e.VIDEO_FULLSCREEN_UPDATE = "VIDEO_FULLSCREEN_UPDATE", e.BGM_PLAY_PROGRESS = "BGM_PLAY_PROGRESS", e.BGM_PLAY_COMPLETE = "BGM_PLAY_COMPLETE", e.ERROR = "ERROR", e.LOCAL_STATE_UPDATE = "LOCAL_STATE_UPDATE", e.LOCAL_HANGUP = "LOCAL_HANGUP", e.LOCAL_INTERRUPTED = "LOCAL_INTERRUPTED", e.LOCAL_RECONNECTING = "LOCAL_RECONNECTING", e
        }({});
    (exports.default = function() {
        function E(e) {
            if (t(this, E), this.trtc = null, this.EVENTS = null, this.observers = [], this.pusherInstance = null, !e) throw new Error('"pageInstance" is supposed to be passed in ctor of TRTCHelper.');
            this.trtc = new s.default(e), this.EVENTS = this.trtc.EVENT, 0 !== this.observers.length && (o.assert("observers should be 0 but got ".concat(this.observers.length)), o.reportEvent("test-2")), this.registerEvents(), this.pusherInstance = this.trtc.createPusher()
        }
        var a;
        return n(E, [{
            key: "joinMediaRoom",
            value: function(e) {
                var r = e.roomInfo,
                    t = e.mediaState,
                    n = e.scene,
                    s = e.expCloudenv,
                    a = r.app_id,
                    u = r.av_user_id,
                    _ = r.trtc_token,
                    c = t.mic,
                    l = t.cam,
                    T = _ || {},
                    O = T.usr_sig,
                    A = T.group_id,
                    v = T.priv_map,
                    h = T.set_flag,
                    L = void 0 === s ? h : s,
                    R = {
                        scene: n,
                        sdkAppID: a,
                        userID: u,
                        userSig: O,
                        privateMapKey: v,
                        cloudenv: L,
                        enableCamera: l,
                        enableMic: c,
                        autopush: !0,
                        encsmall: 1,
                        recvMode: 4,
                        minBitrate: i.default.minBitrate,
                        maxBitrate: i.default.maxBitrate
                    };
                if ("PRO" === s ? R.roomID = A : R.strRoomID = A, !(a && u && O && (A || R.roomID) && v)) throw o.reportEvent("trtc_invalid_params_for_enter_room"), o.warn("params for enterRoom is invalid: ".concat(JSON.stringify(R))), new Error("invalid params for enterRoom");
                return E.isValidCloudEnv(L) || o.warn("Be noticed! 'cloudenv' passed in is invalid. Got: ".concat(L)), o.info("[enterRoom] req: ".concat(JSON.stringify(R))), this.trtc.enterRoom(R)
            }
        }, {
            key: "leaveMediaRoom",
            value: (a = r(e().mark((function r() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this.trtc.exitRoom();
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), r, this)
            }))), function() {
                return a.apply(this, arguments)
            })
        }, {
            key: "leaveMediaRoomNotUsed",
            value: function() {
                var e = this.trtc.exitRoom();
                return {
                    pusher: e.pusher,
                    playerList: e.playerList
                }
            }
        }, {
            key: "findPlayerAccordingTo",
            value: function(e) {
                for (var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "main", t = this.trtc.getPlayerList(), n = t.length, s = 0; s < n; s++) {
                    var E = t[s],
                        i = E.userID,
                        a = E.streamType;
                    if (a === r && e === i) return t[s]
                }
                return null
            }
        }, {
            key: "getTRTC",
            value: function() {
                return this.trtc
            }
        }, {
            key: "updatePusherAttrs",
            value: function(e) {
                return this.trtc.setPusherAttributes(e)
            }
        }, {
            key: "getPusherAttrs",
            value: function() {
                return this.trtc.getPusherAttributes()
            }
        }, {
            key: "startPusher",
            value: function() {
                null !== this.pusherInstance ? this.pusherInstance.start() : o.error("pusherInstance is null")
            }
        }, {
            key: "getPusherInstance",
            value: function() {
                return this.pusherInstance
            }
        }, {
            key: "switchCamera",
            value: function(e) {
                var r = e.success,
                    t = e.fail;
                if (null === this.pusherInstance) return o.error("pusherInstance is null"), void t("-1");
                try {
                    this.pusherInstance.switchCamera({
                        success: r,
                        fail: t
                    })
                } catch (e) {
                    o.error("switchCamera throws exception: ".concat(e.message)), t("-2")
                }
            }
        }, {
            key: "registerEvent",
            value: function(e, r, t) {
                this.trtc.on(e, r, t)
            }
        }, {
            key: "registerEvents",
            value: function() {
                for (var e = [u.LOCAL_JOIN, u.LOCAL_LEAVE, u.KICKED_OUT, u.REMOTE_USER_JOIN, u.REMOTE_USER_LEAVE, u.REMOTE_VIDEO_ADD, u.REMOTE_VIDEO_REMOVE, u.REMOTE_AUDIO_ADD, u.REMOTE_AUDIO_REMOVE, u.REMOTE_STATE_UPDATE, u.LOCAL_NET_STATE_UPDATE, u.REMOTE_NET_STATE_UPDATE, u.REMOTE_AUDIO_VOLUME_UPDATE, u.LOCAL_AUDIO_VOLUME_UPDATE, u.VIDEO_FULLSCREEN_UPDATE, u.BGM_PLAY_PROGRESS, u.BGM_PLAY_COMPLETE, u.ERROR, u.LOCAL_STATE_UPDATE, u.LOCAL_HANGUP, u.LOCAL_INTERRUPTED, u.LOCAL_RECONNECTING], r = 0, t = e.length; r < t; r++) {
                    var n = e[r];
                    this.registerEvent(n, this.notifyObservers(n), this)
                }
            }
        }, {
            key: "getCallbackFuncName",
            value: function(e) {
                for (var r = e.split("_"), t = "", n = 0, s = r.length; n < s; n++) {
                    var E = r[n];
                    t += "".concat(E[0]).concat(E.substring(1).toLowerCase())
                }
                return "on".concat(t)
            }
        }, {
            key: "_shouldLog",
            value: function(e, r) {
                if ([u.LOCAL_NET_STATE_UPDATE, u.LOCAL_AUDIO_VOLUME_UPDATE, u.REMOTE_NET_STATE_UPDATE].includes(e)) return !1;
                if (e === u.REMOTE_STATE_UPDATE) try {
                    if (2105 === r[0].data.detail.code) return !1
                } catch (e) {
                    return o.error("cannot get 'code' from args: ".concat(JSON.stringify(r))), !0
                }
                return !0
            }
        }, {
            key: "notifyObservers",
            value: function(e) {
                var r = this;
                return function() {
                    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                    r._shouldLog(e, n);
                    for (var E = r.getCallbackFuncName(e), i = 0, a = r.observers.length; i < a; i++) {
                        var u;
                        if ("function" == typeof r.observers[i][E])(u = r.observers[i][E]).call.apply(u, [r.observers[i]].concat(n));
                        else o.warn("observer at index ".concat(i, " doesn't have a listener name '").concat(E, "' for event '").concat(e, "'.\n            Did you miss it?\n          "))
                    }
                }
            }
        }, {
            key: "registerObserver",
            value: function(e) {
                this.observers.push(e), 1 < this.observers.length && (o.assert("observers' length is: ".concat(this.observers.length)), o.reportEvent("test-1"))
            }
        }, {
            key: "unregisterObserver",
            value: function(e) {
                for (var r = 0, t = this.observers.length; r < t; r++)
                    if (this.observers[r] === e) return void this.observers.splice(r, 1);
                o.assert("unregister observer failed because cannot find the given observer. len: ".concat(this.observers.length))
            }
        }, {
            key: "testFireEvent",
            value: function(e) {
                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
                this.notifyObservers(e).apply(void 0, t)
            }
        }], [{
            key: "isValidCloudEnv",
            value: function(e) {
                return E.ValidCloudEnvs.includes(e)
            }
        }]), E
    }()).ValidCloudEnvs = ["CCC", "DEV", "PRO"];
});