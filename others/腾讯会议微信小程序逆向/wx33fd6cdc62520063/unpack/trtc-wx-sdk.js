define("miniprogram_npm/trtc-wx-sdk/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, t, r = require("../../@babel/runtime/helpers/typeof");
    module.exports = (e = {}, t = function(t, n) {
        if (!e[t]) return require(n);
        if (!e[t].status) {
            var s = e[t].m;
            s._exports = s._tempexports;
            var o = Object.getOwnPropertyDescriptor(s, "exports");
            o && o.configurable && Object.defineProperty(s, "exports", {set: function(e) {
                    "object" === r(e) && e !== s._exports && (s._exports.__proto__ = e.__proto__, Object.keys(e).forEach((function(t) {
                        s._exports[t] = e[t]
                    }))), s._tempexports = e
                },
                get: function() {
                    return s._tempexports
                }
            }), e[t].status = 1, e[t].func(e[t].req, s, s.exports)
        }
        return e[t].m.exports
    }, function(t, r, n) {
        e[t] = {
            status: 0,
            func: r,
            req: n,
            m: {
                exports: {},
                _tempexports: {}
            }
        }
    }(1735023415091, (function(e, t, n) {
        ! function(e, s) {
            "object" == r(n) && void 0 !== t ? t.exports = s() : "function" == typeof define && define.amd ? define(s) : (e = e || self).TRTC = s()
        }(this, (function() {
            function e(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function t(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var n = t((function(e) {
                    function t(e, t, r, n, s, o, i) {
                        try {
                            var a = e[o](i),
                                u = a.value
                        } catch (e) {
                            return void r(e)
                        }
                        a.done ? t(u) : Promise.resolve(u).then(n, s)
                    }
                    e.exports = function(e) {
                        return function() {
                            var r = this,
                                n = arguments;
                            return new Promise((function(s, o) {
                                var i = e.apply(r, n);

                                function a(e) {
                                    t(i, s, o, a, u, "next", e)
                                }

                                function u(e) {
                                    t(i, s, o, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        }
                    }, e.exports.__esModule = !0, e.exports.default = e.exports
                })),
                s = e(n),
                o = e(t((function(e) {
                    e.exports = function(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports
                }))),
                i = e(t((function(e) {
                    e.exports = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }, e.exports.__esModule = !0, e.exports.default = e.exports
                }))),
                a = e(t((function(e) {
                    function t(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    e.exports = function(e, r, n) {
                        return r && t(e.prototype, r), n && t(e, n), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports
                }))),
                u = t((function(e) {
                    function t(n) {
                        return e.exports = t = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
                            return r(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
                        }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                    }
                    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
                }));
            e(u);
            var c = t((function(e) {
                var t = u.default;

                function r() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    e.exports = r = function() {
                        return n
                    }, e.exports.__esModule = !0, e.exports.default = e.exports;
                    var n = {},
                        s = Object.prototype,
                        o = s.hasOwnProperty,
                        i = "function" == typeof Symbol ? Symbol : {},
                        a = i.iterator || "@@iterator",
                        u = i.asyncIterator || "@@asyncIterator",
                        c = i.toStringTag || "@@toStringTag";

                    function l(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        l({}, "")
                    } catch (e) {
                        l = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function h(e, t, r, n) {
                        var s = t && t.prototype instanceof m ? t : m,
                            o = Object.create(s.prototype),
                            i = new x(n || []);
                        return o._invoke = function(e, t, r) {
                            var n = "suspendedStart";
                            return function(s, o) {
                                if ("executing" === n) throw new Error("Generator is already running");
                                if ("completed" === n) {
                                    if ("throw" === s) throw o;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (r.method = s, r.arg = o;;) {
                                    var i = r.delegate;
                                    if (i) {
                                        var a = b(i, r);
                                        if (a) {
                                            if (a === f) continue;
                                            return a
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    n = "executing";
                                    var u = p(e, t, r);
                                    if ("normal" === u.type) {
                                        if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                        return {
                                            value: u.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                                }
                            }
                        }(e, r, i), o
                    }

                    function p(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    n.wrap = h;
                    var f = {};

                    function m() {}

                    function d() {}

                    function v() {}
                    var y = {};
                    l(y, a, (function() {
                        return this
                    }));
                    var g = Object.getPrototypeOf,
                        E = g && g(g(D([])));
                    E && E !== s && o.call(E, a) && (y = E);
                    var _ = v.prototype = m.prototype = Object.create(y);

                    function A(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function L(e, r) {
                        function n(s, i, a, u) {
                            var c = p(e[s], e, i);
                            if ("throw" !== c.type) {
                                var l = c.arg,
                                    h = l.value;
                                return h && "object" == t(h) && o.call(h, "__await") ? r.resolve(h.__await).then((function(e) {
                                    n("next", e, a, u)
                                }), (function(e) {
                                    n("throw", e, a, u)
                                })) : r.resolve(h).then((function(e) {
                                    l.value = e, a(l)
                                }), (function(e) {
                                    return n("throw", e, a, u)
                                }))
                            }
                            u(c.arg)
                        }
                        var s;
                        this._invoke = function(e, t) {
                            function o() {
                                return new r((function(r, s) {
                                    n(e, t, r, s)
                                }))
                            }
                            return s = s ? s.then(o, o) : o()
                        }
                    }

                    function b(e, t) {
                        var r = e.iterator[t.method];
                        if (void 0 === r) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return f;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return f
                        }
                        var n = p(r, e.iterator, t.arg);
                        if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                        var s = n.arg;
                        return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                    }

                    function I(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function O(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function x(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(I, this), this.reset(!0)
                    }

                    function D(e) {
                        if (e) {
                            var t = e[a];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    n = function t() {
                                        for (; ++r < e.length;)
                                            if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return n.next = n
                            }
                        }
                        return {
                            next: T
                        }
                    }

                    function T() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return d.prototype = v, l(_, "constructor", v), l(v, "constructor", d), d.displayName = l(v, c, "GeneratorFunction"), n.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                    }, n.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, l(e, c, "GeneratorFunction")), e.prototype = Object.create(_), e
                    }, n.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, A(L.prototype), l(L.prototype, u, (function() {
                        return this
                    })), n.AsyncIterator = L, n.async = function(e, t, r, s, o) {
                        void 0 === o && (o = Promise);
                        var i = new L(h(e, t, r, s), o);
                        return n.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, A(_), l(_, c, "Generator"), l(_, a, (function() {
                        return this
                    })), l(_, "toString", (function() {
                        return "[object Generator]"
                    })), n.keys = function(e) {
                        var t = [];
                        for (var r in e) t.push(r);
                        return t.reverse(),
                            function r() {
                                for (; t.length;) {
                                    var n = t.pop();
                                    if (n in e) return r.value = n, r.done = !1, r
                                }
                                return r.done = !0, r
                            }
                    }, n.values = D, x.prototype = {
                        constructor: x,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
                                for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var t = this;

                            function r(r, n) {
                                return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                            }
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var s = this.tryEntries[n],
                                    i = s.completion;
                                if ("root" === s.tryLoc) return r("end");
                                if (s.tryLoc <= this.prev) {
                                    var a = o.call(s, "catchLoc"),
                                        u = o.call(s, "finallyLoc");
                                    if (a && u) {
                                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                        if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var s = n;
                                    break
                                }
                            }
                            s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                            var i = s ? s.completion : {};
                            return i.type = e, i.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, f) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var s = n.arg;
                                        O(r)
                                    }
                                    return s
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, r) {
                            return this.delegate = {
                                iterator: D(e),
                                resultName: t,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = void 0), f
                        }
                    }, n
                }
                e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
            }));
            e(c);
            var l = c(),
                h = l;
            try {
                regeneratorRuntime = l
            } catch (e) {
                "object" == ("undefined" == typeof globalThis ? "undefined" : r(globalThis)) ? globalThis.regeneratorRuntime = l: Function("r", "regeneratorRuntime = r")(l)
            }

            function p() {
                var e = (new Date).getTime(),
                    t = new Date(e),
                    r = t.getHours(),
                    n = t.getMinutes(),
                    s = t.getSeconds(),
                    o = t.getMilliseconds();
                return r = r < 10 ? "0".concat(r) : r, n = n < 10 ? "0".concat(n) : n, s = s < 10 ? "0".concat(s) : s, "".concat(r, ":").concat(n, ":").concat(s, ".").concat(o)
            }
            var f = "TRTC-WX",
                m = new(function() {
                    function e() {
                        i(this, e), this.logLevel = 0
                    }
                    return a(e, [{
                        key: "setLogLevel",
                        value: function(e) {
                            this.logLevel = e
                        }
                    }, {
                        key: "log",
                        value: function() {
                            var e;
                            0 === this.logLevel && (e = console).log.apply(e, [f, p()].concat(Array.prototype.slice.call(arguments)))
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            var e;
                            this.logLevel <= 1 && (e = console).warn.apply(e, [f, p()].concat(Array.prototype.slice.call(arguments)))
                        }
                    }, {
                        key: "error",
                        value: function() {
                            var e;
                            (e = console).error.apply(e, [f, p()].concat(Array.prototype.slice.call(arguments)))
                        }
                    }]), e
                }()),
                d = {
                    LOCAL_JOIN: "LOCAL_JOIN",
                    LOCAL_LEAVE: "LOCAL_LEAVE",
                    KICKED_OUT: "KICKED_OUT",
                    REMOTE_USER_JOIN: "REMOTE_USER_JOIN",
                    REMOTE_USER_LEAVE: "REMOTE_USER_LEAVE",
                    REMOTE_VIDEO_ADD: "REMOTE_VIDEO_ADD",
                    REMOTE_VIDEO_REMOVE: "REMOTE_VIDEO_REMOVE",
                    REMOTE_AUDIO_ADD: "REMOTE_AUDIO_ADD",
                    REMOTE_AUDIO_REMOVE: "REMOTE_AUDIO_REMOVE",
                    REMOTE_STATE_UPDATE: "REMOTE_STATE_UPDATE",
                    LOCAL_NET_STATE_UPDATE: "LOCAL_NET_STATE_UPDATE",
                    REMOTE_NET_STATE_UPDATE: "REMOTE_NET_STATE_UPDATE",
                    LOCAL_AUDIO_VOLUME_UPDATE: "LOCAL_AUDIO_VOLUME_UPDATE",
                    REMOTE_AUDIO_VOLUME_UPDATE: "REMOTE_AUDIO_VOLUME_UPDATE",
                    VIDEO_FULLSCREEN_UPDATE: "VIDEO_FULLSCREEN_UPDATE",
                    BGM_PLAY_START: "BGM_PLAY_START",
                    BGM_PLAY_FAIL: "BGM_PLAY_FAIL",
                    BGM_PLAY_PROGRESS: "BGM_PLAY_PROGRESS",
                    BGM_PLAY_COMPLETE: "BGM_PLAY_COMPLETE",
                    ERROR: "ERROR",
                    IM_READY: "IM_READY",
                    IM_MESSAGE_RECEIVED: "IM_MESSAGE_RECEIVED",
                    IM_NOT_READY: "IM_NOT_READY",
                    IM_KICKED_OUT: "IM_KICKED_OUT",
                    IM_ERROR: "IM_ERROR",
                    LOCAL_HANGUP: "LOCAL_HANGUP",
                    LOCAL_INTERRUPTED: "LOCAL_INTERRUPTED",
                    LOCAL_RECONNECTING: "LOCAL_RECONNECTING"
                },
                v = {
                    url: "",
                    mode: "RTC",
                    autopush: !1,
                    enableCamera: !1,
                    enableMic: !1,
                    enableAgc: !1,
                    enableAns: !1,
                    enableEarMonitor: !1,
                    enableAutoFocus: !0,
                    enableZoom: !1,
                    minBitrate: 600,
                    maxBitrate: 900,
                    videoWidth: 360,
                    videoHeight: 640,
                    beautyLevel: 0,
                    whitenessLevel: 0,
                    videoOrientation: "vertical",
                    videoAspect: "9:16",
                    frontCamera: "front",
                    enableRemoteMirror: !1,
                    localMirror: "auto",
                    enableBackgroundMute: !1,
                    audioQuality: "high",
                    audioVolumeType: "voicecall",
                    audioReverbType: 0,
                    waitingImage: "https://mc.qcloudimg.com/static/img/daeed8616ac5df256c0591c22a65c4d3/pause_publish.jpg",
                    waitingImageHash: "",
                    beautyStyle: "smooth",
                    filter: "",
                    netStatus: {}
                },
                y = {
                    src: "",
                    mode: "RTC",
                    autoplay: !0,
                    muteAudio: !0,
                    muteVideo: !0,
                    orientation: "vertical",
                    objectFit: "fillCrop",
                    enableBackgroundMute: !1,
                    minCache: 1,
                    maxCache: 2,
                    soundMode: "speaker",
                    enableRecvMessage: !1,
                    autoPauseIfNavigate: !0,
                    autoPauseIfOpenNative: !0,
                    isVisible: !0,
                    _definitionType: "main",
                    netStatus: {}
                };

            function g() {
                var e = new Date;
                return e.setTime((new Date).getTime() + 0), e.toLocaleString()
            }

            function E(e) {
                var t = this,
                    r = [],
                    n = [];
                this.length = function() {
                    return r.length
                }, this.sent = function() {
                    return n.length
                }, this.push = function(t) {
                    r.push(t), r.length > e && r.shift()
                }, this.send = function() {
                    return n.length || (n = r, r = []), n
                }, this.confirm = function() {
                    n = [], t.content = ""
                }, this.fail = function() {
                    r = n.concat(r), t.confirm();
                    var s = 1 + r.length + n.length - e;
                    s > 0 && (n.splice(0, s), r = n.concat(r), t.confirm())
                }
            }(new Date).getTime();
            var _ = new(function() {
                    function e() {
                        i(this, e), this.sdkAppId = "", this.userId = "", this.version = "", this.queue = new E(20)
                    }
                    return a(e, [{
                        key: "setConfig",
                        value: function(e) {
                            this.sdkAppId = "".concat(e.sdkAppId), this.userId = "".concat(e.userId), this.version = "".concat(e.version)
                        }
                    }, {
                        key: "push",
                        value: function(e) {
                            this.queue.push(e)
                        }
                    }, {
                        key: "log",
                        value: function(e) {
                            wx.request({
                                url: "https://yun.tim.qq.com/v5/AVQualityReportSvc/C2S?sdkappid=1&cmdtype=jssdk_log",
                                method: "POST",
                                header: {
                                    "content-type": "application/json"
                                },
                                data: {
                                    timestamp: g(),
                                    sdkAppId: this.sdkAppId,
                                    userId: this.userId,
                                    version: this.version,
                                    log: e
                                }
                            })
                        }
                    }, {
                        key: "send",
                        value: function() {
                            var e = this;
                            if (!this.queue.sent()) {
                                if (!this.queue.length()) return;
                                var t = this.queue.send();
                                this.queue.content = "string" != typeof log ? '{"logs":['.concat(t.join(","), "]}") : t.join("\n"), wx.request({
                                    url: "https://yun.tim.qq.com/v5/AVQualityReportSvc/C2S?sdkappid=1&cmdtype=jssdk_log",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/json"
                                    },
                                    data: {
                                        timestamp: g(),
                                        sdkAppId: this.sdkAppId,
                                        userId: this.userId,
                                        version: this.version,
                                        log: this.queue.content
                                    },
                                    success: function() {
                                        e.queue.confirm()
                                    },
                                    fail: function() {
                                        e.queue.fail()
                                    }
                                })
                            }
                        }
                    }]), e
                }()),
                A = function() {
                    function e(t, r) {
                        i(this, e), this.context = wx.createLivePusherContext(r), this.pusherAttributes = {}, Object.assign(this.pusherAttributes, v, t)
                    }
                    return a(e, [{
                        key: "setPusherAttributes",
                        value: function(e) {
                            return Object.assign(this.pusherAttributes, e), this.pusherAttributes
                        }
                    }, {
                        key: "start",
                        value: function(e) {
                            m.log("[apiLog][pusherStart]"), _.log("pusherStart"), this.context.start(e)
                        }
                    }, {
                        key: "stop",
                        value: function(e) {
                            m.log("[apiLog][pusherStop]"), _.log("pusherStop"), this.context.stop(e)
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            m.log("[apiLog] pusherPause()"), _.log("pusherPause"), this.context.pause(e)
                        }
                    }, {
                        key: "resume",
                        value: function(e) {
                            m.log("[apiLog][pusherResume]"), _.log("pusherResume"), this.context.resume(e)
                        }
                    }, {
                        key: "switchCamera",
                        value: function(e) {
                            return m.log("[apiLog][switchCamera]"), this.pusherAttributes.frontCamera = "front" === this.pusherAttributes.frontCamera ? "back" : "front", this.context.switchCamera(e), this.pusherAttributes
                        }
                    }, {
                        key: "sendMessage",
                        value: function(e) {
                            m.log("[apiLog][sendMessage]", e.msg), this.context.sendMessage(e)
                        }
                    }, {
                        key: "snapshot",
                        value: function() {
                            var e = this;
                            return m.log("[apiLog][pusherSnapshot]"), new Promise((function(t, r) {
                                e.context.snapshot({
                                    quality: "raw",
                                    complete: function(e) {
                                        e.tempImagePath ? (wx.saveImageToPhotosAlbum({
                                            filePath: e.tempImagePath,
                                            success: function(r) {
                                                t(e)
                                            },
                                            fail: function(e) {
                                                m.error("[error] pusher截图失败: ", e), r(new Error("截图失败"))
                                            }
                                        }), t(e)) : (m.error("[error] snapShot 回调失败", e), r(new Error("截图失败")))
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "toggleTorch",
                        value: function(e) {
                            this.context.toggleTorch(e)
                        }
                    }, {
                        key: "startDumpAudio",
                        value: function(e) {
                            this.context.startDumpAudio(e)
                        }
                    }, {
                        key: "stopDumpAudio",
                        value: function(e) {
                            this.context.startDumpAudio(e)
                        }
                    }, {
                        key: "playBGM",
                        value: function(e) {
                            m.log("[apiLog] playBGM() url: ", e.url), this.context.playBGM(e)
                        }
                    }, {
                        key: "pauseBGM",
                        value: function(e) {
                            m.log("[apiLog] pauseBGM()"), this.context.pauseBGM(e)
                        }
                    }, {
                        key: "resumeBGM",
                        value: function(e) {
                            m.log("[apiLog] resumeBGM()"), this.context.resumeBGM(e)
                        }
                    }, {
                        key: "stopBGM",
                        value: function(e) {
                            m.log("[apiLog] stopBGM()"), this.context.stopBGM(e)
                        }
                    }, {
                        key: "setBGMVolume",
                        value: function(e) {
                            m.log("[apiLog] setBGMVolume() volume:", e.volume), this.context.setBGMVolume(e.volume)
                        }
                    }, {
                        key: "setMICVolume",
                        value: function(e) {
                            m.log("[apiLog] setMICVolume() volume:", e.volume), this.context.setMICVolume(e.volume)
                        }
                    }, {
                        key: "startPreview",
                        value: function(e) {
                            m.log("[apiLog] startPreview()"), this.context.startPreview(e)
                        }
                    }, {
                        key: "stopPreview",
                        value: function(e) {
                            m.log("[apiLog] stopPreview()"), this.context.stopPreview(e)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var e = this;
                            return console.log("Pusher reset", this.context), this.pusherAttributes = {}, new Promise((function(t) {
                                if (e.context) try {
                                    e.context.stop({
                                        success: function() {
                                            m.log("stop live-pusher succeed")
                                        },
                                        fail: function(e) {
                                            m.error("stop live-pusher failed because: ".concat((null == e ? void 0 : e.errMsg) || "unknown reason"))
                                        },
                                        complete: function() {
                                            e.context = null, t(e.pusherAttributes)
                                        }
                                    })
                                } catch (r) {
                                    m.error("stop live-pusher failed because exception caught: ".concat((null == r ? void 0 : r.message) || "unknown reason")), e.context = null, t(e.pusherAttributes)
                                } else t(e.pusherAttributes)
                            }))
                        }
                    }]), e
                }(),
                L = a((function e(t) {
                    i(this, e), Object.assign(this, {
                        userID: "",
                        streams: {}
                    }, t)
                })),
                b = function() {
                    function e(t, r) {
                        i(this, e), this.ctx = r, this.playerAttributes = {}, Object.assign(this.playerAttributes, y, {
                            userID: "",
                            streamType: "",
                            streamID: "",
                            id: "",
                            hasVideo: !1,
                            hasAudio: !1,
                            volume: 0,
                            playerContext: void 0
                        }, t)
                    }
                    return a(e, [{
                        key: "play",
                        value: function(e) {
                            this.getPlayerContext().play(e)
                        }
                    }, {
                        key: "stop",
                        value: function(e) {
                            this.getPlayerContext().stop(e)
                        }
                    }, {
                        key: "mute",
                        value: function(e) {
                            this.getPlayerContext().mute(e)
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            this.getPlayerContext().pause(e)
                        }
                    }, {
                        key: "resume",
                        value: function(e) {
                            this.getPlayerContext().resume(e)
                        }
                    }, {
                        key: "requestFullScreen",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r, n) {
                                t.getPlayerContext().requestFullScreen({
                                    direction: e.direction,
                                    success: function(e) {
                                        r(e)
                                    },
                                    fail: function(e) {
                                        n(e)
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "requestExitFullScreen",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, r) {
                                e.getPlayerContext().exitFullScreen({
                                    success: function(e) {
                                        t(e)
                                    },
                                    fail: function(e) {
                                        r(e)
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "snapshot",
                        value: function(e) {
                            var t = this;
                            return m.log("[playerSnapshot]", e), new Promise((function(e, r) {
                                t.getPlayerContext().snapshot({
                                    quality: "raw",
                                    complete: function(t) {
                                        t.tempImagePath ? (wx.saveImageToPhotosAlbum({
                                            filePath: t.tempImagePath,
                                            success: function(r) {
                                                m.log("save photo is success", r), e(t)
                                            },
                                            fail: function(e) {
                                                m.error("save photo is fail", e), r(e)
                                            }
                                        }), e(t)) : (m.error("snapShot 回调失败", t), r(new Error("截图失败")))
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "setPlayerAttributes",
                        value: function(e) {
                            Object.assign(this.playerAttributes, e)
                        }
                    }, {
                        key: "getPlayerContext",
                        value: function() {
                            return this.playerContext || (this.playerContext = wx.createLivePlayerContext(this.playerAttributes.id, this.ctx)), this.playerContext
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var e = this,
                                t = this.playerAttributes.streamID;
                            Object.assign(this.playerAttributes, y, {
                                userID: "",
                                streamType: "",
                                streamID: "",
                                hasVideo: !1,
                                hasAudio: !1,
                                volume: 0,
                                playerContext: void 0
                            });
                            var r = "live-player(streamID: ".concat(t, ")");
                            m.log("stopping ".concat(r, "..."));
                            var n = new Promise((function(e, t) {
                                    setTimeout((function() {
                                        m.warn("timeout, maybe we could not get that live-player context object"), t()
                                    }), 1e3)
                                })),
                                s = new Promise((function(n, s) {
                                    var o = e.getPlayerContext();
                                    if (o) try {
                                        o.stop({
                                            success: function() {
                                                m.log("stop ".concat(r, " succeed")), e.playerContext = void 0, n()
                                            },
                                            fail: function(t) {
                                                m.error("stop ".concat(r, " failed because: ").concat((null == t ? void 0 : t.errMsg) || "unknown reason")), e.playerContext = void 0, s(t)
                                            }
                                        })
                                    } catch (t) {
                                        m.error("stop ".concat(r, " failed because exception caught: ").concat((null == t ? void 0 : t.message) || "unknown reason")), e.playerContext = void 0, s(t)
                                    } else s("cannot get <live-player>'s context for streamID: ".concat(t))
                                }));
                            return Promise.race([n, s])
                        }
                    }]), e
                }();

            function I(e) {
                return new Promise((function(t) {
                    for (var r = [], n = 0, s = e.length; n < s; n++) {
                        var o = e[n].then((function(e) {
                            return {
                                status: "fulfilled",
                                value: e
                            }
                        })).catch((function(e) {
                            return {
                                status: "rejected",
                                reason: e
                            }
                        }));
                        r.push(o)
                    }
                    Promise.all(r).then((function(e) {
                        t(e)
                    }))
                }))
            }
            var O = "UserController",
                x = function() {
                    function e(t, r) {
                        i(this, e), this.ctx = r, this.userMap = new Map, this.userList = [], this.streamList = [], this.emitter = t
                    }
                    var t;
                    return a(e, [{
                        key: "userEventHandler",
                        value: function(e) {
                            var t = e.detail.code,
                                r = e.detail.message;
                            switch (t) {
                                case 0:
                                    m.log(r, t);
                                    break;
                                case 1001:
                                    m.log("已经连接推流服务器", t);
                                    break;
                                case 1002:
                                    m.log("已经与服务器握手完毕,开始推流", t);
                                    break;
                                case 1003:
                                    m.log("打开摄像头成功", t);
                                    break;
                                case 1004:
                                    m.log("录屏启动成功", t);
                                    break;
                                case 1005:
                                    m.log("推流动态调整分辨率", t);
                                    break;
                                case 1006:
                                    m.log("推流动态调整码率", t);
                                    break;
                                case 1007:
                                    m.log("首帧画面采集完成", t);
                                    break;
                                case 1008:
                                    m.log("编码器启动", t);
                                    break;
                                case 1018:
                                    m.log("进房成功", t), _.log("event enterRoom success ".concat(t)), this.emitter.emit(d.LOCAL_JOIN);
                                    break;
                                case 1019:
                                    m.log("退出房间", t), r.indexOf("reason[0]") > -1 ? _.log("event exitRoom ".concat(t)) : (_.log("event abnormal exitRoom ".concat(r)), this.emitter.emit(d.KICKED_OUT));
                                    break;
                                case 2003:
                                    m.log("渲染首帧视频", t);
                                    break;
                                case -1301:
                                    m.error("打开摄像头失败: ", t), _.log("event start camera failed: ".concat(t)), this.emitter.emit(d.ERROR, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case -1302:
                                    m.error("打开麦克风失败: ", t), _.log("event start microphone failed: ".concat(t)), this.emitter.emit(d.ERROR, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case -1303:
                                    m.error("视频编码失败: ", t), _.log("event video encode failed: ".concat(t)), this.emitter.emit(d.ERROR, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case -1304:
                                    m.error("音频编码失败: ", t), _.log("event audio encode failed: ".concat(t)), this.emitter.emit(d.ERROR, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case -1307:
                                    m.error("推流连接断开: ", t), this.emitter.emit(d.ERROR, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case -100018:
                                    m.error("进房失败: userSig 校验失败，请检查 userSig 是否填写正确", t, r), this.emitter.emit(d.ERROR, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case 5e3:
                                    m.log("小程序被挂起: ", t), _.log("小程序被挂起: 5000"), this.emitter.emit(d.LOCAL_HANGUP, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case 5001:
                                    m.log("小程序悬浮窗被关闭: ", t), this.emitter.emit(d.LOCAL_INTERRUPTED, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case 1102:
                                    m.log("小程序推流断开，正在重连", t), this.emitter.emit(d.LOCAL_RECONNECTING, {
                                        code: t,
                                        message: r
                                    });
                                    break;
                                case 1021:
                                    m.log("网络类型发生变化，需要重新进房", t);
                                    break;
                                case 2007:
                                    m.log("本地视频播放loading: ", t);
                                    break;
                                case 2004:
                                    m.log("本地视频播放开始: ", t);
                                    break;
                                case 1031:
                                case 1032:
                                case 1033:
                                case 1034:
                                    this._handleUserEvent(e)
                            }
                        }
                    }, {
                        key: "_handleUserEvent",
                        value: function(e) {
                            var t, r = e.detail.code,
                                n = e.detail.message;
                            if (!e.detail.message || "string" != typeof n) return m.warn(O, "userEventHandler 数据格式错误"), !1;
                            try {
                                t = JSON.parse(e.detail.message)
                            } catch (e) {
                                return m.warn(O, "userEventHandler 数据格式错误", e), !1
                            }
                            switch (this.emitter.emit(d.LOCAL_STATE_UPDATE, e), _.log("event code: ".concat(r, ", data: ").concat(JSON.stringify(t))), r) {
                                case 1031:
                                    this.addUser(t);
                                    break;
                                case 1032:
                                    this.removeUser(t);
                                    break;
                                case 1033:
                                    this.updateUserVideo(t);
                                    break;
                                case 1034:
                                    this.updateUserAudio(t)
                            }
                        }
                    }, {
                        key: "addUser",
                        value: function(e) {
                            var t = this;
                            m.log("addUser", e);
                            var r = e.userlist;
                            Array.isArray(r) && r.length > 0 && r.forEach((function(e) {
                                var r = e.userid,
                                    n = t.getUser(r);
                                n || (n = new L({
                                    userID: r
                                }), t.userList.push({
                                    userID: r
                                })), t.userMap.set(r, n), t.emitter.emit(d.REMOTE_USER_JOIN, {
                                    userID: r,
                                    userList: t.userList,
                                    playerList: t.getPlayerList()
                                })
                            }))
                        }
                    }, {
                        key: "removeUser",
                        value: function(e) {
                            var t = this,
                                r = e.userlist;
                            Array.isArray(r) && r.length > 0 && r.forEach((function(e) {
                                var r = e.userid,
                                    n = t.getUser(r);
                                if (n && n.streams) {
                                    t._removeUserAndStream(r);
                                    try {
                                        n.streams.main && n.streams.main.reset(), n.streams.aux && n.streams.aux.reset()
                                    } catch (e) {
                                        m.error("重置失败: ", e)
                                    }
                                    t.emitter.emit(d.REMOTE_USER_LEAVE, {
                                        userID: r,
                                        userList: t.userList,
                                        playerList: t.getPlayerList()
                                    }), n = void 0, t.userMap.delete(r)
                                }
                            }))
                        }
                    }, {
                        key: "updateUserVideo",
                        value: function(e) {
                            var t = this;
                            m.log(O, "updateUserVideo", e);
                            var r = e.userlist;
                            Array.isArray(r) && r.length > 0 && r.forEach((function(e) {
                                var r = e.userid,
                                    n = e.streamtype,
                                    s = "".concat(r, "_").concat(n),
                                    o = s,
                                    i = e.hasvideo,
                                    a = e.playurl,
                                    u = t.getUser(r);
                                if (u) {
                                    var c = u.streams[n];
                                    m.log(O, "updateUserVideo start", u, n, c), c ? (c.setPlayerAttributes({
                                        hasVideo: i
                                    }), i || c.playerAttributes.hasAudio || t._removeStream(c)) : (c = new b({
                                        userID: r,
                                        streamID: s,
                                        hasVideo: i,
                                        src: a,
                                        streamType: n,
                                        id: o
                                    }, t.ctx), u.streams[n] = c, t._addStream(c)), "aux" === n && (i ? (c.objectFit = "contain", t._addStream(c)) : t._removeStream(c)), t.userList.find((function(e) {
                                        if (e.userID === r) return e["has".concat(n.replace(/^\S/, (function(e) {
                                            return e.toUpperCase()
                                        })), "Video")] = i, !0
                                    })), m.log(O, "updateUserVideo end", u, n, c);
                                    var l = i ? d.REMOTE_VIDEO_ADD : d.REMOTE_VIDEO_REMOVE;
                                    t.emitter.emit(l, {
                                        player: c.playerAttributes,
                                        userList: t.userList,
                                        playerList: t.getPlayerList()
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "updateUserAudio",
                        value: function(e) {
                            var t = this,
                                r = e.userlist;
                            Array.isArray(r) && r.length > 0 && r.forEach((function(e) {
                                var r = e.userid,
                                    n = "main",
                                    s = "".concat(r, "_").concat(n),
                                    o = s,
                                    i = e.hasaudio,
                                    a = e.playurl,
                                    u = t.getUser(r);
                                if (u) {
                                    var c = u.streams.main;
                                    c ? (c.setPlayerAttributes({
                                        hasAudio: i
                                    }), i || c.playerAttributes.hasVideo || t._removeStream(c)) : (c = new b({
                                        userID: r,
                                        streamID: s,
                                        hasAudio: i,
                                        src: a,
                                        streamType: n,
                                        id: o
                                    }, t.ctx), u.streams.main = c, t._addStream(c)), t.userList.find((function(e) {
                                        if (e.userID === r) return e["has".concat(n.replace(/^\S/, (function(e) {
                                            return e.toUpperCase()
                                        })), "Audio")] = i, !0
                                    }));
                                    var l = i ? d.REMOTE_AUDIO_ADD : d.REMOTE_AUDIO_REMOVE;
                                    t.emitter.emit(l, {
                                        player: c.playerAttributes,
                                        userList: t.userList,
                                        playerList: t.getPlayerList()
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "getUser",
                        value: function(e) {
                            return this.userMap.get(e)
                        }
                    }, {
                        key: "getStream",
                        value: function(e) {
                            var t = e.userID,
                                r = e.streamType,
                                n = this.userMap.get(t);
                            if (n) return n.streams[r]
                        }
                    }, {
                        key: "getUserList",
                        value: function() {
                            return this.userList
                        }
                    }, {
                        key: "getStreamList",
                        value: function() {
                            return this.streamList
                        }
                    }, {
                        key: "getPlayerList",
                        value: function() {
                            for (var e = this.getStreamList(), t = [], r = 0; r < e.length; r++) t.push(e[r].playerAttributes);
                            return t
                        }
                    }, {
                        key: "reset",
                        value: (t = s(h.mark((function e() {
                            var t, r, n;
                            return h.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [], this.streamList.forEach((function(e) {
                                            t.push(e.reset())
                                        })), e.next = 4, I(t);
                                    case 4:
                                        return r = e.sent, 0 < (n = r.reduce((function(e, t) {
                                            return "rejected" === t.status ? ++e : e
                                        }), 0)) ? m.warn(O, "".concat(n, " of ").concat(r.length, " stream").concat(1 === n ? "" : "s", " reset failed.")) : m.log(O, "all stream".concat(1 === r.length ? "" : "s", "(").concat(r.length, ") reset successfully.")), this.streamList = [], this.userList = [], this.userMap.clear(), e.abrupt("return", {
                                            userList: this.userList,
                                            streamList: this.streamList
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "_removeUserAndStream",
                        value: function(e) {
                            this.streamList = this.streamList.filter((function(t) {
                                return t.playerAttributes.userID !== e && "" !== t.playerAttributes.userID
                            })), this.userList = this.userList.filter((function(t) {
                                return t.userID !== e
                            }))
                        }
                    }, {
                        key: "_addStream",
                        value: function(e) {
                            this.streamList.includes(e) || this.streamList.push(e)
                        }
                    }, {
                        key: "_removeStream",
                        value: function(e) {
                            this.streamList = this.streamList.filter((function(t) {
                                return t.playerAttributes.userID !== e.playerAttributes.userID || t.playerAttributes.streamType !== e.playerAttributes.streamType
                            })), this.getUser(e.playerAttributes.userID).streams[e.playerAttributes.streamType] = void 0
                        }
                    }]), e
                }(),
                D = function() {
                    function e() {
                        i(this, e)
                    }
                    return a(e, [{
                        key: "on",
                        value: function(e, t, r) {
                            "function" == typeof t ? (this._stores = this._stores || {}, (this._stores[e] = this._stores[e] || []).push({
                                cb: t,
                                ctx: r
                            })) : console.error("listener must be a function")
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            this._stores = this._stores || {};
                            var t, r = this._stores[e];
                            if (r) {
                                r = r.slice(0), (t = [].slice.call(arguments, 1))[0] = {
                                    eventCode: e,
                                    data: t[0]
                                };
                                for (var n = 0, s = r.length; n < s; n++) r[n].cb.apply(r[n].ctx, t)
                            }
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            if (this._stores = this._stores || {}, arguments.length) {
                                var r = this._stores[e];
                                if (r)
                                    if (1 !== arguments.length) {
                                        for (var n = 0, s = r.length; n < s; n++)
                                            if (r[n].cb === t) {
                                                r.splice(n, 1);
                                                break
                                            }
                                    } else delete this._stores[e]
                            } else this._stores = {}
                        }
                    }]), e
                }();

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) {
                        o(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            return function() {
                function e(t, r) {
                    var n = this;
                    i(this, e), this.ctx = t, this.eventEmitter = new D, this.pusherInstance = null, this.userController = new x(this.eventEmitter, this.ctx), this.EVENT = d, "test" === r && (r = {
                        env: "test"
                    });
                    var s = r || {},
                        o = s.env,
                        a = s.logLevel,
                        u = void 0 === a ? 2 : a;
                    m.setLogLevel(u), "test" !== o ? wx.getSystemInfo({
                        success: function(e) {
                            return n.systemInfo = e
                        }
                    }) : _.log = function() {}
                }
                var t;
                return a(e, [{
                    key: "on",
                    value: function(e, t, r) {
                        m.log("[on] 事件订阅: ".concat(e)), this.eventEmitter.on(e, t, r)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        m.log("[off] 取消订阅: ".concat(e)), this.eventEmitter.off(e, t)
                    }
                }, {
                    key: "createPusher",
                    value: function(e) {
                        return this.pusherInstance = new A(e, this.ctx), console.log("pusherInstance", this.pusherInstance), this.pusherInstance
                    }
                }, {
                    key: "getPusherInstance",
                    value: function() {
                        return this.pusherInstance
                    }
                }, {
                    key: "enterRoom",
                    value: function(e) {
                        m.log("[apiLog] [enterRoom]", e);
                        var t = function(e) {
                            return function(e) {
                                var t = /[\u4e00-\u9fa5]/;
                                return e.sdkAppID ? void 0 === e.roomID && void 0 === e.strRoomID ? (m.error("未设置 roomID"), !1) : !e.strRoomID && (e.roomID < 1 || e.roomID > 4294967296) ? (m.error("roomID 超出取值范围 1 ~ 4294967295"), !1) : e.strRoomID && t.test(e.strRoomID) ? (m.error("strRoomID 请勿使用中文字符"), !1) : e.userID ? e.userID && t.test(e.userID) ? (m.error("userID 请勿使用中文字符"), !1) : !!e.userSig || (m.error("未设置 userSig"), !1) : (m.error("未设置 userID"), !1) : (m.error("未设置 sdkAppID"), !1)
                            }(e) ? (e.scene = e.scene && "rtc" !== e.scene ? e.scene : "videocall", e.enableBlackStream = e.enableBlackStream || "", e.encsmall = e.encsmall || 0, e.cloudenv = e.cloudenv || "PRO", e.streamID = e.streamID || "", e.userDefineRecordID = e.userDefineRecordID || "", e.privateMapKey = e.privateMapKey || "", e.pureAudioMode = e.pureAudioMode || "", e.recvMode = e.recvMode || 1, t = e.strRoomID ? "&strroomid=".concat(e.strRoomID) : "&roomid=".concat(e.roomID), "room://cloud.tencent.com/rtc?sdkappid=".concat(e.sdkAppID).concat(t, "&userid=").concat(e.userID, "&usersig=").concat(e.userSig, "&appscene=").concat(e.scene, "&encsmall=").concat(e.encsmall, "&cloudenv=").concat(e.cloudenv, "&enableBlackStream=").concat(e.enableBlackStream, "&streamid=").concat(e.streamID, "&userdefinerecordid=").concat(e.userDefineRecordID, "&privatemapkey=").concat(e.privateMapKey, "&pureaudiomode=").concat(e.pureAudioMode, "&recvmode=").concat(e.recvMode)) : null;
                            var t
                        }(e);
                        return t || this.eventEmitter.emit(d.ERROR, {
                            message: "进房参数错误"
                        }), _.setConfig({
                            sdkAppId: e.sdkAppID,
                            userId: e.userID,
                            version: "wechat-mini"
                        }), this.pusherInstance.setPusherAttributes(k(k({}, e), {}, {
                            url: t
                        })), m.warn("[statusLog] [enterRoom]", this.pusherInstance.pusherAttributes), _.log("api-enterRoom"), _.log("pusherConfig: ".concat(JSON.stringify(this.pusherInstance.pusherAttributes))), this.getPusherAttributes()
                    }
                }, {
                    key: "exitRoom",
                    value: (t = s(h.mark((function e() {
                        var t, r;
                        return h.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return _.log("api-exitRoom"), e.next = 3, this.userController.reset();
                                case 3:
                                    return e.next = 5, this.pusherInstance.reset();
                                case 5:
                                    return t = e.sent, r = Object.assign({
                                        pusher: t
                                    }, {
                                        playerList: this.userController.getPlayerList()
                                    }), this.eventEmitter.emit(d.LOCAL_LEAVE), e.abrupt("return", r);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "getPlayerList",
                    value: function() {
                        var e = this.userController.getPlayerList();
                        return m.log("[apiLog][getStreamList]", e), e
                    }
                }, {
                    key: "setPusherAttributes",
                    value: function(e) {
                        return m.log("[apiLog] [setPusherAttributes], ", e), this.pusherInstance.setPusherAttributes(e), m.warn("[statusLog] [setPusherAttributes]", this.pusherInstance.pusherAttributes), _.log("api-setPusherAttributes ".concat(JSON.stringify(e))), this.pusherInstance.pusherAttributes
                    }
                }, {
                    key: "getPusherAttributes",
                    value: function() {
                        return m.log("[apiLog] [getPusherConfig]"), this.pusherInstance.pusherAttributes
                    }
                }, {
                    key: "setPlayerAttributes",
                    value: function(e, t) {
                        m.log("[apiLog] [setPlayerAttributes] id", e, "options: ", t);
                        var r = this._transformStreamID(e),
                            n = r.userID,
                            s = r.streamType,
                            o = this.userController.getStream({
                                userID: n,
                                streamType: s
                            });
                        return o ? (o.setPlayerAttributes(t), _.log("api-setPlayerAttributes id: ".concat(e, " options: ").concat(JSON.stringify(t))), this.getPlayerList()) : this.getPlayerList()
                    }
                }, {
                    key: "getPlayerInstance",
                    value: function(e) {
                        var t = this._transformStreamID(e),
                            r = t.userID,
                            n = t.streamType;
                        return m.log("[api][getPlayerInstance] id:", e), this.userController.getStream({
                            userID: r,
                            streamType: n
                        })
                    }
                }, {
                    key: "switchStreamType",
                    value: function(e) {
                        m.log("[apiLog] [switchStreamType] id: ", e);
                        var t = this._transformStreamID(e),
                            r = t.userID,
                            n = t.streamType,
                            s = this.userController.getStream({
                                userID: r,
                                streamType: n
                            });
                        return "main" === s._definitionType ? (s.src = s.src.replace("main", "small"), s._definitionType = "small") : (s.src = s.src.replace("small", "main"), s._definitionType = "main"), this.getPlayerList()
                    }
                }, {
                    key: "pusherEventHandler",
                    value: function(e) {
                        this.userController.userEventHandler(e)
                    }
                }, {
                    key: "pusherNetStatusHandler",
                    value: function(e) {
                        var t = e.detail.info;
                        this.pusherInstance.setPusherAttributes(t), this.eventEmitter.emit(d.LOCAL_NET_STATE_UPDATE, {
                            pusher: this.pusherInstance.pusherAttributes
                        })
                    }
                }, {
                    key: "pusherErrorHandler",
                    value: function(e) {
                        try {
                            var t = e.detail.errCode,
                                r = e.detail.errMsg;
                            this.eventEmitter.emit(d.ERROR, {
                                code: t,
                                message: r
                            })
                        } catch (t) {
                            m.error("pusher error data parser exception", e, t)
                        }
                    }
                }, {
                    key: "pusherBGMStartHandler",
                    value: function(e) {
                        this.eventEmitter.emit(d.BGM_PLAY_START)
                    }
                }, {
                    key: "pusherBGMProgressHandler",
                    value: function(e) {
                        var t, r, n, s;
                        this.eventEmitter.emit(d.BGM_PLAY_PROGRESS, {
                            progress: null === (t = e.data) || void 0 === t || null === (r = t.detail) || void 0 === r ? void 0 : r.progress,
                            duration: null === (n = e.data) || void 0 === n || null === (s = n.detail) || void 0 === s ? void 0 : s.duration
                        })
                    }
                }, {
                    key: "pusherBGMCompleteHandler",
                    value: function(e) {
                        this.eventEmitter.emit(d.BGM_PLAY_COMPLETE)
                    }
                }, {
                    key: "pusherAudioVolumeNotify",
                    value: function(e) {
                        this.pusherInstance.pusherAttributes.volume = e.detail.volume, this.eventEmitter.emit(d.LOCAL_AUDIO_VOLUME_UPDATE, {
                            pusher: this.pusherInstance.pusherAttributes
                        })
                    }
                }, {
                    key: "playerEventHandler",
                    value: function(e) {
                        m.log("[statusLog][playerStateChange]", e), this.eventEmitter.emit(d.REMOTE_STATE_UPDATE, e)
                    }
                }, {
                    key: "playerFullscreenChange",
                    value: function(e) {
                        this.eventEmitter.emit(d.VIDEO_FULLSCREEN_UPDATE)
                    }
                }, {
                    key: "playerNetStatus",
                    value: function(e) {
                        var t = this._transformStreamID(e.currentTarget.dataset.streamid),
                            r = t.userID,
                            n = t.streamType,
                            s = this.userController.getStream({
                                userID: r,
                                streamType: n
                            });
                        !s || s.videoWidth === e.detail.info.videoWidth && s.videoHeight === e.detail.info.videoHeight || (s.setPlayerAttributes({
                            netStatus: e.detail.info
                        }), this.eventEmitter.emit(d.REMOTE_NET_STATE_UPDATE, {
                            playerList: this.userController.getPlayerList()
                        }))
                    }
                }, {
                    key: "playerAudioVolumeNotify",
                    value: function(e) {
                        var t = this._transformStreamID(e.currentTarget.dataset.streamid),
                            r = t.userID,
                            n = t.streamType,
                            s = this.userController.getStream({
                                userID: r,
                                streamType: n
                            }),
                            o = e.detail.volume;
                        s.setPlayerAttributes({
                            volume: o
                        }), this.eventEmitter.emit(d.REMOTE_AUDIO_VOLUME_UPDATE, {
                            playerList: this.userController.getPlayerList()
                        })
                    }
                }, {
                    key: "_transformStreamID",
                    value: function(e) {
                        var t = e.lastIndexOf("_");
                        return {
                            userID: e.slice(0, t),
                            streamType: e.slice(t + 1)
                        }
                    }
                }]), e
            }()
        }))
    }), (function(e) {
        return t({}[e], e)
    })), t(1735023415091));
});