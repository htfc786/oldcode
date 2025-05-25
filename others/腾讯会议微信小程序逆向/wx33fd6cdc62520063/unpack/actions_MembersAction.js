define("actions/MembersAction.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../utils/Dispatcher"),
        t = require("../clients/WemeetClient"),
        n = require("../utils/logger"),
        a = require("../constants/MembersType"),
        i = require("../stores/MembersStore"),
        o = new n({
            pageName: "MembersAction",
            aegisLogEnable: !0,
            wxLogEnable: !1
        }),
        s = {
            inited: !1,
            init: function() {
                this.inited || (this._addListener(), this.inited = !0)
            },
            _addListener: function() {
                var e = this,
                    n = {
                        user_join: a.USER_JOIN,
                        user_leave: a.USER_LEAVE,
                        user_offline: a.USER_OFFLINE,
                        user_update: a.USER_UPDATE,
                        user_kicked: a.USER_KICKED
                    };
                Object.keys(n).forEach((function(a) {
                    t.on(a, e._handleUserStatus(a, n[a]))
                })), t.on("notify_join_audio_mix_user_info", this._handleNotifyJoinAudioMixUserInfo), t.on("change_host_push", this._handleHostChange), t.on("change_co_host_push", this._handleCoHostChange), t.on("report_media_stream_status_push", this._handleReportMediaStreamStatusPush, this)
            },
            _handleUserStatus: function(t, n) {
                return function(a, i) {
                    a && i ? e.dispatch({
                        type: n,
                        payload: {
                            flag: a,
                            data: i
                        }
                    }) : o.error("invalid resp for protocol '".concat(t, "': ").concat(a))
                }.bind(this)
            },
            _handleNotifyJoinAudioMixUserInfo: function(t, n) {
                e.dispatch({
                    type: a.NOTIFY_JOIN_AUDIO_MIX_USER_INFO,
                    payload: {
                        flag: t,
                        data: n
                    }
                })
            },
            _handleHostChange: function(t, n) {
                t && n ? e.dispatch({
                    type: a.HOST_CHANGED,
                    payload: {
                        flag: t,
                        data: n
                    }
                }) : o.error("change_host failed: ".concat(t, ", ").concat(JSON.stringify(n)))
            },
            _handleCoHostChange: function(t, n) {
                e.dispatch({
                    type: a.CO_HOST_CHANGED,
                    payload: {
                        flag: t,
                        data: n
                    }
                })
            },
            _handleReportMediaStreamStatusPush: function(e, t) {
                if (e) {
                    var n = (t || {}).user_list,
                        a = void 0 === n ? [] : n;
                    i.onReportMediaStreamStatusPush(a)
                }
            },
            _handleIamInWaitingRoom: function(e, t) {
                e && i.iamInWaitingRoom(t)
            },
            _handleUserInfoChangedBySelf: function(e, t) {
                e && i.myUserInfoChangedByMyself(t)
            },
            _handleUserInfoChangedByHost: function(e, t) {
                e && i.myUserInfoChangedByHost(t)
            },
            clearAudioMvsp: function() {
                e.dispatch({
                    type: a.CLEAR_AUDIO_MVSP,
                    payload: {}
                })
            }
        };
    module.exports = s;
});