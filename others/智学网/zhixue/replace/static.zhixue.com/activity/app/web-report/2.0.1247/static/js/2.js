webpackJsonp([2], {
    "0GoE": function(t, e, i) {
        "use strict";
        var n = {
            name: "zx-tab-item",
            props: {
                id: {
                    type: String
                }
            },
            computed: {
                activeStyle: function() {
                    return {
                        color: ""
                    }
                }
            },
            methods: {
                onItemClicked: function() {
                    this.$parent.$emit("input", this.id)
                }
            }
        }
          , r = {
            render: function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                    staticClass: "zx-tab-item",
                    class: {
                        "current-tab": this.$parent.value === this.id
                    },
                    style: this.$parent.value === this.id ? this.activeStyle : {},
                    on: {
                        click: this.onItemClicked
                    }
                }, [e("div", {
                    staticClass: "zx-tab-item-label"
                }, [this._t("default")], 2)])
            },
            staticRenderFns: []
        };
        var a = i("VU/8")(n, r, !1, function(t) {
            i("Qcmw")
        }, null, null);
        e.a = a.exports
    },
    "150l": function(t, e) {},
    "1z/s": function(t, e, i) {
        t.exports = i.p + "static/img/nodata-not-zx.28d2033.png"
    },
    "2X9z": function(t, e, i) {
        t.exports = function(t) {
            var e = {};
            function i(n) {
                if (e[n])
                    return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i),
                r.l = !0,
                r.exports
            }
            return i.m = t,
            i.c = e,
            i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var r in t)
                        i.d(n, r, function(e) {
                            return t[e]
                        }
                        .bind(null, r));
                return n
            }
            ,
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "/dist/",
            i(i.s = 81)
        }({
            0: function(t, e, i) {
                "use strict";
                function n(t, e, i, n, r, a, s, o) {
                    var l, c = "function" == typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = i,
                    c._compiled = !0),
                    n && (c.functional = !0),
                    a && (c._scopeId = "data-v-" + a),
                    s ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        r && r.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(s)
                    }
                    ,
                    c._ssrRegister = l) : r && (l = o ? function() {
                        r.call(this, this.$root.$options.shadowRoot)
                    }
                    : r),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var u = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                u(t, e)
                            }
                        } else {
                            var h = c.beforeCreate;
                            c.beforeCreate = h ? [].concat(h, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                i.d(e, "a", function() {
                    return n
                })
            },
            13: function(t, e) {
                t.exports = i("7J9s")
            },
            17: function(t, e) {
                t.exports = i("835U")
            },
            23: function(t, e) {
                t.exports = i("fUqW")
            },
            7: function(t, e) {
                t.exports = i("7+uW")
            },
            81: function(t, e, i) {
                "use strict";
                i.r(e);
                var n = i(7)
                  , r = i.n(n)
                  , a = function() {
                    var t = this
                      , e = t.$createElement
                      , i = t._self._c || e;
                    return i("transition", {
                        attrs: {
                            name: "el-message-fade"
                        },
                        on: {
                            "after-leave": t.handleAfterLeave
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        class: ["el-message", t.type && !t.iconClass ? "el-message--" + t.type : "", t.center ? "is-center" : "", t.showClose ? "is-closable" : "", t.customClass],
                        style: t.positionStyle,
                        attrs: {
                            role: "alert"
                        },
                        on: {
                            mouseenter: t.clearTimer,
                            mouseleave: t.startTimer
                        }
                    }, [t.iconClass ? i("i", {
                        class: t.iconClass
                    }) : i("i", {
                        class: t.typeClass
                    }), t._t("default", [t.dangerouslyUseHTMLString ? i("p", {
                        staticClass: "el-message__content",
                        domProps: {
                            innerHTML: t._s(t.message)
                        }
                    }) : i("p", {
                        staticClass: "el-message__content"
                    }, [t._v(t._s(t.message))])]), t.showClose ? i("i", {
                        staticClass: "el-message__closeBtn el-icon-close",
                        on: {
                            click: t.close
                        }
                    }) : t._e()], 2)])
                };
                a._withStripped = !0;
                var s = {
                    success: "success",
                    info: "info",
                    warning: "warning",
                    error: "error"
                }
                  , o = {
                    data: function() {
                        return {
                            visible: !1,
                            message: "",
                            duration: 3e3,
                            type: "info",
                            iconClass: "",
                            customClass: "",
                            onClose: null,
                            showClose: !1,
                            closed: !1,
                            verticalOffset: 20,
                            timer: null,
                            dangerouslyUseHTMLString: !1,
                            center: !1
                        }
                    },
                    computed: {
                        typeClass: function() {
                            return this.type && !this.iconClass ? "el-message__icon el-icon-" + s[this.type] : ""
                        },
                        positionStyle: function() {
                            return {
                                top: this.verticalOffset + "px"
                            }
                        }
                    },
                    watch: {
                        closed: function(t) {
                            t && (this.visible = !1)
                        }
                    },
                    methods: {
                        handleAfterLeave: function() {
                            this.$destroy(!0),
                            this.$el.parentNode.removeChild(this.$el)
                        },
                        close: function() {
                            this.closed = !0,
                            "function" == typeof this.onClose && this.onClose(this)
                        },
                        clearTimer: function() {
                            clearTimeout(this.timer)
                        },
                        startTimer: function() {
                            var t = this;
                            this.duration > 0 && (this.timer = setTimeout(function() {
                                t.closed || t.close()
                            }, this.duration))
                        },
                        keydown: function(t) {
                            27 === t.keyCode && (this.closed || this.close())
                        }
                    },
                    mounted: function() {
                        this.startTimer(),
                        document.addEventListener("keydown", this.keydown)
                    },
                    beforeDestroy: function() {
                        document.removeEventListener("keydown", this.keydown)
                    }
                }
                  , l = i(0)
                  , c = Object(l.a)(o, a, [], !1, null, null, null);
                c.options.__file = "packages/message/src/main.vue";
                var u = c.exports
                  , h = i(13)
                  , f = i(23)
                  , d = i(17)
                  , p = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i)
                            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }
                  , v = r.a.extend(u)
                  , g = void 0
                  , m = []
                  , y = 1
                  , x = function t(e) {
                    if (!r.a.prototype.$isServer) {
                        "string" == typeof (e = e || {}) && (e = {
                            message: e
                        });
                        var i = e.onClose
                          , n = "message_" + y++;
                        e.onClose = function() {
                            t.close(n, i)
                        }
                        ,
                        (g = new v({
                            data: e
                        })).id = n,
                        Object(f.isVNode)(g.message) && (g.$slots.default = [g.message],
                        g.message = null),
                        g.$mount(),
                        document.body.appendChild(g.$el);
                        var a = e.offset || 20;
                        return m.forEach(function(t) {
                            a += t.$el.offsetHeight + 16
                        }),
                        g.verticalOffset = a,
                        g.visible = !0,
                        g.$el.style.zIndex = h.PopupManager.nextZIndex(),
                        m.push(g),
                        g
                    }
                };
                ["success", "warning", "info", "error"].forEach(function(t) {
                    x[t] = function(e) {
                        return Object(d.isObject)(e) && !Object(f.isVNode)(e) ? x(p({}, e, {
                            type: t
                        })) : x({
                            type: t,
                            message: e
                        })
                    }
                }),
                x.close = function(t, e) {
                    for (var i = m.length, n = -1, r = void 0, a = 0; a < i; a++)
                        if (t === m[a].id) {
                            r = m[a].$el.offsetHeight,
                            n = a,
                            "function" == typeof e && e(m[a]),
                            m.splice(a, 1);
                            break
                        }
                    if (!(i <= 1 || -1 === n || n > m.length - 1))
                        for (var s = n; s < i - 1; s++) {
                            var o = m[s].$el;
                            o.style.top = parseInt(o.style.top, 10) - r - 16 + "px"
                        }
                }
                ,
                x.closeAll = function() {
                    for (var t = m.length - 1; t >= 0; t--)
                        m[t].close()
                }
                ;
                var b = x;
                e.default = b
            }
        })
    },
    "2aH0": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAgCAMAAADZqYNOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTMwMjYyMUZGM0FFMTFFODg3OTFGNzlFNjAwQ0ZENjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTMwMjYyMUVGM0FFMTFFODg3OTFGNzlFNjAwQ0ZENjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyN0FGNEQ3NTI1ODExRTZBMzg2RjlDRjg2RkI0NUY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyN0FGNEQ4NTI1ODExRTZBMzg2RjlDRjg2RkI0NUY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NRPJrwAAAJ9QTFRFrOrkiuLZm+bf4vj1et7Up+niHse2B8GvkeTbXdfLieLZFMWz0/Txte3nMcy82PXyuu7ptu3n1vXy6vr4n+fg9f385vn3t+3o8Pv63fb0tOznHce20PPwSNLE8fz7yPHtyfLusezmX9fLH8i3oejhvu/qwO/rCMKvXtfL7/v6guDWXNfK8/z73Pb0revk5/n3qerj7fv5BsGuBcGu////VYK8ngAAADV0Uk5T/////////////////////////////////////////////////////////////////////wB8tdAKAAAAtklEQVR42qzT2Q7CIBAF0IFSqGutW9W27vuuw/9/mzFVHqAlJXofOcllQgaQtkAVXQrUI/ZKd2hGKEU0Wt9HH80ymxYk15gbN/JYKS8YiCstGaiqdgmZTkhfBmQ2JqSnqY/o1bAtG1hvITY19QAGc+jIBYRDgJGmF0rPG3qVa5p6lD6cmu1T2e+1N6eMHe4skEe2DRm7Ob3Vf9X/7lWZPk+25nyff9GivUqURomBq8jll5XkJcAA89Ooa6nFvYgAAAAASUVORK5CYII="
    },
    "2rGO": function(t, e) {},
    "3C/1": function(t, e, i) {
        i("M6a0"),
        i("zQR9"),
        i("+tPU"),
        i("qCoq"),
        i("UvrK"),
        i("Xjd4"),
        i("bqnK"),
        t.exports = i("FeBl").Map
    },
    "3JRO": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAgCAMAAADZqYNOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTMwMjYyMjNGM0FFMTFFODg3OTFGNzlFNjAwQ0ZENjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTMwMjYyMjJGM0FFMTFFODg3OTFGNzlFNjAwQ0ZENjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyN0FGNEQ3NTI1ODExRTZBMzg2RjlDRjg2RkI0NUY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyN0FGNEQ4NTI1ODExRTZBMzg2RjlDRjg2RkI0NUY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5kDDrQAAAYBQTFRFVdXIQdDBPc/AK8q6G8a1FsWz8Pv6+/7+BsGuM8y90/Tx+P39yfLuqOnj7Pr5RNHCCMKvw/DsPs/ALcu7UNPGD8OxiuLZGMa0EMSxte3net7UT9PGF8W0EcSys+zm+v79DMOw6vr4uO3of9/VbdvQOs6/wO/rW9bKeN3T+f79Lsu70fTwDcOxtO3n9v38CcKv/f/+rOrkWNbJv+/qwfDrHse2ZdnN8/z7LMu7/P7+8vz77vv67/v6dd3Sq+rk5Pj29/38b9vQbtvQJ8q51/Xy4Pf1YNjMH8i3l+Xddt3T2fbzhuHYN82+c9zSp+niC8KwP8/BXNfKi+La5fj2zfPvxvHt9Pz8gN/W5/n37fv5nufgTNPFIsi4vO7p8fz7m+bfRtHDIci3EsSyMcy8yPHtsezmSdLEfd/VguDWcNzRB8GvJMm42vbzRdHDOc6/oOfg6fr4zPLu3Pb0Msy9e97UTtPGft/VieLZWdbJ3fb01vXyO86/luXdiOLZBcGu////avyEswAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAABlklEQVR42qyTV1cCMRCFUWCX6tJ7l6KAKB0Eexd77x1773Xy10123UM8lhedl71zv5Pck81Egn4ryZ9oymqy6NW0p9ZbnNaIQIGUz+DwNJB+2eMw+IijEKk2qDwmvfHOaVRgoVP2agFEij9MoJGzkSVmrjHAYIOi/J7IqwHQeHnZQFP5zXhLu7igXD2KrtFUirdsNXQRGQvpcBOiKRodlrhARaQdZI+bT59yu7FomysTORsjbjdNZVxlnhVzm/WHdX00HcJRO6YlIp9XycGiNGX3KmdxMde8b7kq0rQNi8Q6f8iBsPDLKXoiee2vWWymqUBTF47KDvp5ayIixx2RzL1A8/YOpULIJVfmmtaiZLJ5q168BYT8nZe8LDRlWN7Iua9rtJYr1ANcoB9pVZFCX2mLilca83bpG2pq7cgj1JXVhdE3tDQG2U5mF26RSDUslcu8AFjh3PtB3QA2bjGw8UHVzBSA+1Sc53TOCPwg9uBBPJA6UHsdrNBvwe8ZMUyCUPUILcx8eSkJ/ZvTFw+mi//1yt4FGAAD3X9yTjfCbwAAAABJRU5ErkJggg=="
    },
    "4WTo": function(t, e, i) {
        var n = i("NWt+");
        t.exports = function(t, e) {
            var i = [];
            return n(t, !1, i.push, i, e),
            i
        }
    },
    "4l08": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("Xxa5")
          , r = i.n(n)
          , a = i("exGp")
          , s = i.n(a)
          , o = (i("cwe7"),
        i("+BTi"),
        i("2X9z"))
          , l = i.n(o)
          , c = (i("2rGO"),
        i("nu7/"))
          , u = i.n(c)
          , h = (i("Yq4J"),
        i("qubY"))
          , f = i.n(h)
          , d = (i("GXEp"),
        i("mtrD"))
          , p = i.n(d)
          , v = i("7+uW")
          , g = i("qSuq")
          , m = (i("I4nB"),
        i("STLj"))
          , y = i.n(m)
          , x = (i("cDSy"),
        i("e0Bm"))
          , b = i.n(x)
          , S = i("lwhn");
        v.default.use(b.a),
        v.default.use(y.a);
        var _ = {
            props: ["beginTime", "endTime"],
            watch: {
                beginTime: {
                    handler: function(t, e) {
                        e && t !== e ? (this.pageIndex = 1,
                        this.optionList = [],
                        this.value = "",
                        this.getExamList(!0)) : this.getExamList(!1)
                    }
                }
            },
            data: function() {
                return {
                    moduleName: "examList",
                    actualPosition: 0,
                    pageIndex: 1,
                    pageSize: 10,
                    hasNextPage: "",
                    optionList: [],
                    value: "",
                    selectedInput: ""
                }
            },
            mounted: function() {
                this.getselectedInput()
            },
            methods: {
                getNextPageExamList: function() {
                    this.hasNextPage && (this.pageIndex += 1,
                    this.getExamList())
                },
                onDateChanged: function() {
                    this.getExamList()
                },
                getselectedInput: function() {
                    var t = this;
                    t.$nextTick(function() {
                        t.selectedInput = document.querySelector(".el-input__inner")
                    })
                },
                selectedOption: function(t) {
                    g.a.$emit("changedExam", t),
                    sessionStorage.setItem("zxbReportExamId", t)
                },
                getExamList: function(t) {
                    var e = this
                      , i = this
                      , n = {
                        actualPosition: i.actualPosition,
                        pageIndex: i.pageIndex,
                        pageSize: i.pageSize
                    };
                    i.beginTime && i.endTime && (n.startSchoolYear = i.beginTime,
                    n.endSchoolYear = i.endTime),
                    S.a.getPageExamList(n).then(function(n) {
                        0 === n.errorCode ? i.dealData(n.result, t) : (i.value = "",
                        i.optionList = [],
                        e.selectedOption(i.value),
                        console.log("errorCode: " + n.errorCode + " errorInfo: " + n.errorInfo))
                    })
                },
                dealData: function(t, e) {
                    this.hasNextPage = t.hasNextPage;
                    for (var i = 0, n = t.examInfoList.length; i < n; i++) {
                        var r = t.examInfoList[i]
                          , a = r.examName.trim();
                        this.optionList.push({
                            examId: r.examId,
                            examName: a
                        })
                    }
                    1 === this.pageIndex && this.getCurrentExamName(t.examInfoList, e)
                },
                getCurrentExamName: function(t, e) {
                    if (e)
                        t.length > 0 && (this.value = t[0].examName || "",
                        sessionStorage.setItem("zxbReportExamId", t[0].examId || ""),
                        this.selectedOption(t[0].examId || ""));
                    else {
                        var i = sessionStorage.getItem("zxbReportExamId");
                        if (i) {
                            for (var n = 0, r = t.length; n < r; n++)
                                if (i === t[n].examId) {
                                    this.value = t[n].examName;
                                    break
                                }
                            this.selectedOption(i)
                        } else
                            this.value = t[0].examName || "",
                            sessionStorage.setItem("zxbReportExamId", t[0].examId || ""),
                            this.selectedOption(t[0].examId || "")
                    }
                },
                changeListShow: function(t) {
                    t || this.selectedInput.blur()
                }
            }
        }
          , C = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "exam-list-container"
                }, [i("el-select", {
                    staticClass: "exam-select",
                    attrs: {
                        clearable: "",
                        filterable: "",
                        placeholder: "切换学情报告"
                    },
                    on: {
                        "visible-change": function(e) {
                            return t.changeListShow(e)
                        }
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }, [i("div", {
                    staticClass: "select-options"
                }, [t._l(t.optionList, function(e, n) {
                    return i("el-option", {
                        key: n,
                        attrs: {
                            value: e.examName,
                            title: e.examName
                        },
                        nativeOn: {
                            click: function(i) {
                                return t.selectedOption(e.examId)
                            }
                        }
                    })
                }), t._v(" "), t.hasNextPage ? i("div", {
                    staticClass: "load-more",
                    on: {
                        click: t.getNextPageExamList
                    }
                }, [t._v("加载更多")]) : t._e()], 2)])], 1)
            },
            staticRenderFns: []
        };
        var w = i("VU/8")(_, C, !1, function(t) {
            i("7YKo")
        }, null, null).exports
          , A = i("eNrk")
          , T = i("mvHQ")
          , I = i.n(T)
          , M = i("fZjL")
          , k = i.n(M);
        function D(t) {
            var e = new window.ActionLogCommon({
                env: "pro",
                equ: "web",
                timeOut: 5e3,
                resType: "POST"
            })
              , i = JSON.parse(sessionStorage.getItem("zxbUserInfo"));
            i && k()(i).length ? (t.userId = i.userId,
            t.otherInfo.userType = i.userType,
            t.otherInfo.vipLevel = i.vipLevel,
            e.userActionLog(t)) : S.a.getUserInfo().then(function(i) {
                if (0 === i.errorCode) {
                    var n = i.result;
                    sessionStorage.setItem("zxbUserInfo", I()(n)),
                    t.userId = n.userId,
                    t.otherInfo.userType = n.userType,
                    t.otherInfo.vipLevel = n.vipLevel,
                    e.userActionLog(t)
                } else
                    console.error("获取用户信息失败，埋点失败~")
            })
        }
        var L = i("Dd8w")
          , P = i.n(L)
          , N = i("vhaq")
          , j = i("0GoE")
          , F = i("pFYg")
          , O = i.n(F)
          , E = {
            name: "zxb-transcript",
            props: {
                examId: {
                    type: String,
                    default: ""
                },
                paperId: {
                    type: String,
                    default: ""
                },
                subjectCode: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    showModule: !1,
                    showLevelWraps: [],
                    tagTipsList: ["总分位于年级前10%", "进步幅度大于10%", "总分位于年级10%~30%", "单科位于年级前10%"],
                    tagTipsShow: !1,
                    catchData: {},
                    reportMain: "",
                    examTypeCode: ""
                }
            },
            created: function() {
                this.reportMain = this.$store.state.reportMain
            },
            mounted: function() {
                var t = this;
                t.fetchCache(),
                console.log("off", t),
                this.$nextTick(function() {
                    t.$refs.tsptTitle && t.$refs.tsptTitle.offsetWidth && (window.report_body_canvas_real_width = t.$refs.tsptTitle.offsetWidth)
                })
            },
            computed: {
                isAllSubject: function() {
                    return "00" === this.subjectCode
                },
                tagWrapStyle: function() {
                    return {
                        "justify-content": this.studentTagShow ? "space-between" : "flex-end"
                    }
                },
                showBottomLine: function() {
                    return this.typeIsNumber(this.catchData.clazzRank) && 0 !== this.catchData.clazzRank || this.typeIsNumber(this.catchData.gradeRank) && 0 !== this.catchData.gradeRank
                },
                showLevel: function() {
                    return function(t) {
                        return this.typeIsNumber(t.userScore) && this.undefineConfig(t.userLevel).length && this.typeIsNumber(t.preAssignScore)
                    }
                },
                showClassPosition: function() {
                    return function(t) {
                        return (!this.isAllSubject || 2 !== t.examinationType) && (this.typeIsNumber(t.clazzRank) && 0 != t.clazzRank)
                    }
                },
                showSubjectList: function() {
                    return function(t) {
                        return this.isAllSubject && t.paperList && t.paperList.length
                    }
                },
                studentTagShow: function() {
                    try {
                        return this.isAllSubject && this.undefineConfig(this.catchData.studentTag).length
                    } catch (t) {
                        return !1
                    }
                },
                isHomeworkNoScoreMode: function() {
                    return !(!this.catchData || 1 !== this.catchData.scoringModel || "homework" !== this.examTypeCode)
                }
            },
            methods: {
                fetchCache: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    S.a.getAllReportMain(e).then(function(e) {
                        if (0 === e.errorCode) {
                            var i = e.result;
                            if (i) {
                                t.examTypeCode = i.examTypeCode;
                                var n = {};
                                t.isAllSubject ? (n.studentTag = i.studentTag,
                                n.subjectName = i.totalScore.subjectName,
                                n.userScore = i.totalScore.userScore,
                                n.preAssignScore = i.totalScore.preAssignScore,
                                n.standardScore = i.totalScore.standardScore,
                                n.clazzRank = i.totalScore.clazzRank,
                                n.gradeRank = i.totalScore.gradeRank,
                                n.examinationType = i.totalScore.examinationType,
                                n.selectSubject = i.totalScore.selectSubject || [],
                                2 === n.examinationType ? n.paperList = i.paperList.filter(function(t) {
                                    return n.selectSubject.indexOf(t.subjectCode) > -1
                                }) : n.paperList = i.paperList,
                                t.configShowLevelWraps(n.paperList)) : (n = i.paperList.filter(function(e) {
                                    return e.subjectCode === t.subjectCode
                                })[0]).studentTag = i.studentTag,
                                t.catchData = n,
                                t.showModule = !0
                            } else
                                t.showModule = !1
                        } else
                            console.log("getAllReportMain errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                gradeTipsColor: function(t) {
                    switch (parseInt(t)) {
                    case 0:
                        return "background: #f45653";
                    case 1:
                        return "background: #fca205";
                    case 2:
                        return "background: #2675d8";
                    case 3:
                        return "background: #06c1ae"
                    }
                },
                isShowTagTips: function() {
                    this.tagTipsShow = !this.tagTipsShow
                },
                gradeTag: function(t) {
                    if (t)
                        return "超级学霸" === t ? this.tagTipsList[0] : "实力黑马" === t ? this.tagTipsList[1] : "潜力无限" === t ? this.tagTipsList[2] : t.indexOf("王者") > 0 ? this.tagTipsList[3] : ""
                },
                subjectClick: function(t) {
                    g.a.$emit("subjectClickHandle", t)
                },
                typeIsNumber: function(t) {
                    return "number" == typeof t
                },
                configShowLevelWraps: function(t) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        if (0 === i % 2) {
                            var n = !1;
                            i + 1 < t.length && (n = this.showLevel(t[i + 1])),
                            e = this.showLevel(t[i]) || n ? e.concat([!0, !0]) : e.concat([!1, !1])
                        }
                    }
                    this.showLevelWraps = e
                },
                undefineConfig: function(t) {
                    return void 0 === t ? "" : t
                },
                objectNotNull: function(t) {
                    return null != t && "object" === (void 0 === t ? "undefined" : O()(t)) && k()(t).length
                },
                levelText: function(t) {
                    return this.showLevel(t) ? "等级 " + this.undefineConfig(t.userLevel) : ""
                },
                scoreText: function(t) {
                    return this.showLevel(t) ? "原分 " + this.undefineConfig(t.preAssignScore) + "分" : ""
                },
                subjectScoreText: function(t) {
                    return this.typeIsNumber(t.userScore) ? t.userScore : t.userLevel
                },
                standardScoreText: function(t) {
                    return this.typeIsNumber(t.userScore) ? "/" + t.standardScore : ""
                }
            }
        }
          , X = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.isHomeworkNoScoreMode || "paperReportMain" !== t.reportMain && "examReportMain" !== t.reportMain ? t._e() : i("div", {
                    staticClass: "container-backgrounde"
                }, [i("h1", {
                    ref: "tsptTitle",
                    staticClass: "class-a-title"
                }, [t._v(t._s(t.catchData.subjectName))]), t._v(" "), i("div", {
                    class: {
                        tspt_totalscoreWrap: t.isAllSubject || t.showBottomLine
                    }
                }, [i("span", {
                    staticClass: "tspt_score"
                }, [t._v("\n      " + t._s(t.typeIsNumber(t.catchData.userScore) ? t.catchData.userScore : t.catchData.userLevel)), i("em", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.typeIsNumber(t.catchData.userScore),
                        expression: "typeIsNumber(catchData.userScore)"
                    }]
                }, [t._v("分")])]), t._v(" "), i("span", {
                    staticClass: "tspt_tagWrap",
                    style: t.tagWrapStyle
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tagTipsShow && !!t.catchData.studentTag,
                        expression: "tagTipsShow && !!catchData.studentTag"
                    }],
                    staticClass: "tag-tips",
                    on: {
                        click: function(e) {
                            return t.isShowTagTips()
                        }
                    }
                }, [i("em", {
                    domProps: {
                        textContent: t._s(t.gradeTag(t.catchData.studentTag))
                    }
                }), t._v(" "), i("em", {
                    staticClass: "fa fa-close"
                })]), t._v(" "), i("em", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.studentTagShow,
                        expression: "studentTagShow"
                    }],
                    staticClass: "tspt_tag",
                    on: {
                        click: function(e) {
                            return t.isShowTagTips()
                        }
                    }
                }, [t._v(t._s(t.catchData.studentTag))]), t._v(" "), i("em", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.typeIsNumber(t.catchData.userScore),
                        expression: "typeIsNumber(catchData.userScore)"
                    }],
                    staticClass: "tspt_fullScore"
                }, [t._v("满分:" + t._s(t.catchData.standardScore))])]), t._v(" "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isAllSubject && t.typeIsNumber(t.catchData.preAssignScore),
                        expression: "isAllSubject && typeIsNumber(catchData.preAssignScore)"
                    }],
                    staticClass: "tspt_dk_levelWrap"
                }, [i("em", [t._v("原分" + t._s(t.catchData.preAssignScore) + "分")])]), t._v(" "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isAllSubject && t.showLevel(t.catchData),
                        expression: "!isAllSubject && showLevel(catchData)"
                    }],
                    staticClass: "tspt_dk_levelWrap"
                }, [i("em", [t._v("等级 " + t._s(t.catchData.userLevel))]), t._v(" "), i("em", [t._v("原分" + t._s(t.catchData.preAssignScore) + "分")])])]), t._v(" "), i("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showSubjectList(t.catchData),
                        expression: "showSubjectList(catchData)"
                    }],
                    staticClass: "tspt_sujectList",
                    style: t.showBottomLine ? "" : "border:none"
                }, t._l(t.catchData.paperList, function(e, n) {
                    return i("li", {
                        on: {
                            click: function(i) {
                                return t.subjectClick(e.subjectCode)
                            }
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showLevelWraps[n],
                            expression: "showLevelWraps[index]"
                        }],
                        staticClass: "tspt_qk_levelWrap"
                    }, [i("em", {
                        domProps: {
                            textContent: t._s(t.levelText(e))
                        }
                    }), t._v(" "), i("em", {
                        staticClass: "tspt_em_score",
                        domProps: {
                            textContent: t._s(t.scoreText(e))
                        }
                    })]), t._v(" "), i("div", {
                        staticClass: "tspt_subjectWrap"
                    }, [i("span", {
                        staticClass: "tspt_subjectName"
                    }, [t._v(t._s(e.title))]), t._v(" "), i("span", {
                        staticClass: "tspt_subjectScore",
                        domProps: {
                            textContent: t._s(t.subjectScoreText(e))
                        }
                    }, [t._v("{")]), t._v(" "), i("i", {
                        domProps: {
                            textContent: t._s(t.standardScoreText(e))
                        }
                    })])])
                }), 0), t._v(" "), i("div", {
                    class: {
                        tspt_rankWrap: t.showBottomLine
                    }
                }, [t.showClassPosition(t.catchData) ? i("span", [t._v("我的成绩在全班的位置"), i("em", [t._v(t._s(t.catchData.clazzRank) + "名")])]) : t._e(), t._v(" "), t.typeIsNumber(t.catchData.gradeRank) && 0 != t.catchData.gradeRank ? i("span", [t._v("我的成绩在年级的位置"), i("em", [t._v(t._s(t.catchData.gradeRank) + "名")])]) : t._e()])])
            },
            staticRenderFns: []
        };
        var R = i("VU/8")(E, X, !1, function(t) {
            i("hae4")
        }, null, null).exports
          , B = i("4qdD")
          , Y = i.n(B)
          , W = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "switch_tab_container"
                }, [i("div", {
                    staticClass: "switch_tab"
                }, [t._l(t.tabs, function(e, n) {
                    return [i("span", {
                        class: {
                            current: t.iscur == n,
                            border: t.tabs.length - 1 != n
                        },
                        on: {
                            click: function(e) {
                                return t.tabChange(n)
                            }
                        }
                    }, [t._v(t._s(e))])]
                })], 2), t._v(" "), i("div", {
                    staticStyle: {
                        margin: "10px 0"
                    }
                })])
            },
            staticRenderFns: []
        };
        var z = i("VU/8")({
            name: "switch-tab",
            props: ["tabs"],
            data: function() {
                return {
                    iscur: 0
                }
            },
            created: function() {},
            methods: {
                tabChange: function(t) {
                    t !== this.iscur && (this.iscur = t,
                    this.$emit("on-tab-switch", t))
                }
            }
        }, W, !1, function(t) {
            i("fcu0")
        }, null, null).exports
          , G = {
            name: "score-aability",
            props: {
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String
                }
            },
            data: function() {
                return {
                    showScoreAabilityNum: 10,
                    halfScoring: !0,
                    isShow: !1,
                    tabInfo: [],
                    scoreAability: {
                        columnNames: {},
                        dataList: []
                    }
                }
            },
            created: function() {
                this.requestData()
            },
            methods: {
                checkShowMark: function() {
                    10 === this.showScoreAabilityNum ? this.showScoreAabilityNum = 1e3 : this.showScoreAabilityNum = 10
                },
                requestData: function() {
                    var t = this
                      , e = {
                        paperId: t.paperId
                    };
                    S.a.getSingleExamPointsAndScoringAbility(e).then(function(e) {
                        0 === e.errorCode ? e.result && "undefined" !== e.result && "null" !== e.result ? t.dealData(e.result, !0) : t.isShow = !1 : console.log("getSingleExamPointsAndScoringAbility errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                dealData: function(t, e) {
                    t.dataList && t.dataList.length > 0 ? (this.isShow = !0,
                    this.handleData(t),
                    this.scoreAability = t) : this.isShow = !1
                },
                handleData: function(t) {
                    for (var e = 0; e < t.dataList.length; e++)
                        "3" === t.dataList[e].color.code ? t.dataList[e].color.name = "#2675D8" : "2" === t.dataList[e].color.code ? t.dataList[e].color.name = "#FCA205" : t.dataList[e].color.name = "#F45653"
                }
            },
            mounted: function() {}
        }
          , V = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShow,
                        expression: "isShow"
                    }],
                    staticClass: "container-backgrounde"
                }, [i("div", {
                    staticClass: "class-a-title",
                    domProps: {
                        textContent: t._s(t.scoreAability.title)
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.scoreAability.subtitle,
                        expression: "scoreAability.subtitle"
                    }],
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.scoreAability.subtitle)
                    }
                }), t._v(" "), i("div", {
                    staticClass: "index-pane"
                }, [i("table", {
                    staticClass: "stu-table",
                    attrs: {
                        border: "0",
                        cellspacing: "0",
                        cellpadding: "0"
                    }
                }, [i("tr", [i("th", {
                    staticClass: "sy1",
                    domProps: {
                        textContent: t._s(t.scoreAability.columnNames.firstColumnName)
                    }
                }), t._v(" "), i("th", {
                    staticClass: "sy2",
                    domProps: {
                        textContent: t._s(t.scoreAability.columnNames.secondColumnName)
                    }
                }), t._v(" "), i("th", {
                    staticClass: "sy3",
                    domProps: {
                        textContent: t._s(t.scoreAability.columnNames.thirdColumnName)
                    }
                })]), t._v(" "), t._l(t.scoreAability.dataList, function(e, n) {
                    return i("tr", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: n < t.showScoreAabilityNum,
                            expression: "index < showScoreAabilityNum"
                        }],
                        key: e.id
                    }, [i("td", {
                        staticClass: "sy1"
                    }, [i("p", {
                        staticClass: "ifr-name",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    })]), t._v(" "), i("td", {
                        staticClass: "sy2",
                        domProps: {
                            textContent: t._s(e.score)
                        }
                    }), t._v(" "), i("td", {
                        staticClass: "sy3"
                    }, [i("div", [i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        style: "width:" + e.myScoreAbility + "%;background:" + e.color.name
                    })]), t._v(" "), i("span", {
                        staticClass: "num",
                        domProps: {
                            textContent: t._s(e.myScoreAbility + "%")
                        }
                    })])])])
                })], 2), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.scoreAability.dataList.length >= 10,
                        expression: "scoreAability.dataList.length >= 10"
                    }],
                    staticClass: "mark-show-all"
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 10 === t.showScoreAabilityNum,
                        expression: "showScoreAabilityNum === 10"
                    }],
                    staticClass: "wirte-mark"
                }), t._v(" "), i("div", {
                    staticClass: "text"
                }, [i("span", {
                    staticClass: "score-ability-look-close",
                    on: {
                        click: function(e) {
                            return t.checkShowMark()
                        }
                    }
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 10 === t.showScoreAabilityNum,
                        expression: "showScoreAabilityNum === 10"
                    }]
                }, [t._v("查看更多")]), t._v(" "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1e3 === t.showScoreAabilityNum,
                        expression: "showScoreAabilityNum === 1000"
                    }]
                }, [t._v("收起")]), t._v(" "), i("i", {
                    staticClass: "fa",
                    class: {
                        "fa-chevron-circle-down": 10 === t.showScoreAabilityNum,
                        "fa-chevron-circle-up": 1e3 === t.showScoreAabilityNum
                    }
                })])])])])])
            },
            staticRenderFns: []
        };
        var U = i("VU/8")(G, V, !1, function(t) {
            i("y4zF")
        }, null, null).exports
          , H = {
            name: "score-distribution",
            props: {
                examId: {
                    type: String
                },
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    tabInfo: [],
                    scoreDistributions: [],
                    disPlayScoreistribution: {}
                }
            },
            components: {
                "switch-tab": z
            },
            created: function() {
                this.requestData()
            },
            methods: {
                onTabSwitch: function(t) {
                    this.disPlayScoreistribution = this.scoreDistributions[t],
                    this.drawChart()
                },
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    "00" === t.subjectCode ? S.a.getAllScoreDistribution(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getAllScoreDistribution errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }) : (e.paperId = t.paperId,
                    S.a.getSingleScoreDistribution(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getSingleScoreDistribution errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }))
                },
                initData: function(t) {
                    var e = this;
                    t && "undefined" !== t && "null" !== t ? (e.dealData(t, !0),
                    e.$nextTick(function() {
                        e.drawChart()
                    })) : e.isShow = !1
                },
                dealData: function(t, e) {
                    if (this.tabInfo = [],
                    this.scoreDistributions = [],
                    "string" == typeof t && (t = JSON.parse(t)),
                    t.list && t.list.length > 0) {
                        this.isShow = !0;
                        for (var i = t.list.length, n = 0; n < i; n++) {
                            var r = {}
                              , a = t.list[n];
                            if (a && a.tag) {
                                var s = a.tag.name;
                                if (s && a.dataList && a.dataList.length > 0) {
                                    r.chartName = t.chartName,
                                    r.myTips = a.myTips,
                                    r.targetTips = a.targetTips,
                                    r.title = a.title,
                                    r.subtitle = a.subtitle,
                                    r.yTips = [],
                                    r.centerTips = [],
                                    r.target = -1,
                                    r.beHere = -1,
                                    this.tabInfo.push(s);
                                    for (var o = 0; o < a.dataList.length; o++) {
                                        var l = a.dataList[o];
                                        l.beHere && (r.beHere = o),
                                        l.beTarget && (r.target = o),
                                        r.yTips.push(l.count),
                                        r.centerTips.push(l.rangeDisp)
                                    }
                                }
                                this.scoreDistributions.push(r)
                            }
                        }
                        this.disPlayScoreistribution = this.scoreDistributions[0]
                    } else
                        this.isShow = !1
                },
                drawChart: function() {
                    for (var t = [], e = 0; e < this.disPlayScoreistribution.centerTips.length; e++) {
                        var i = {};
                        i.sold = 20 * e + 20,
                        i.xline = 1,
                        t.push(i)
                    }
                    var n = []
                      , r = 0
                      , a = this;
                    Y.a.Shape.registerShape("interval", "scoreDistribution", {
                        getPoints: function(t) {
                            t.x;
                            var e = t.y
                              , i = (t.y0,
                            .7 * r / 2);
                            i || (i = 0);
                            var n = .7 * e / 2
                              , a = r;
                            return a || (a = 0),
                            r = e,
                            [{
                                x: .5 - .35 + i,
                                y: a
                            }, {
                                x: .5 - .35 + n,
                                y: e
                            }, {
                                x: .85 - n,
                                y: e
                            }, {
                                x: .85 - i,
                                y: a
                            }]
                        },
                        draw: function(t, e) {
                            var i = this.parsePoints(t.points);
                            return t.points = i,
                            n.push(t),
                            e.addShape("polygon", {
                                attrs: {
                                    points: [{
                                        x: i[0].x,
                                        y: i[0].y
                                    }, {
                                        x: i[1].x,
                                        y: i[1].y
                                    }, {
                                        x: i[2].x,
                                        y: i[2].y
                                    }, {
                                        x: i[3].x,
                                        y: i[3].y
                                    }],
                                    fill: t.color,
                                    stroke: "#fff",
                                    lineWidth: 1
                                }
                            })
                        }
                    });
                    var s = new Y.a.Chart({
                        el: this.$refs.scoreDistribution,
                        width: .4 * window.innerWidth,
                        height: .24 * window.innerWidth,
                        pixelRatio: window.devicePixelRatio
                    });
                    s.source(t);
                    var o = this.$refs.scoreDistribution.getContext("2d").createLinearGradient(0, 0, window.innerWidth, 0);
                    o.addColorStop(1, "#FFE7AB"),
                    o.addColorStop(0, "#FDCB73"),
                    s.interval().position("xline*sold").color("sold", function(t) {
                        var e = 20 * a.disPlayScoreistribution.target + 20
                          , i = 20 * a.disPlayScoreistribution.beHere + 20;
                        return t === e ? o : t === i ? "#06C1AE" : "#E6F8F6"
                    }).shape("scoreDistribution"),
                    s.axis(!1),
                    s.render();
                    for (var l = s.get("canvas"), c = l.addGroup().addGroup(), u = void 0, h = void 0, f = 0, d = 0, p = 0; p < n.length; p++) {
                        var v = new Y.a.G.Shape.Text({
                            attrs: {
                                x: (n[p].points[0].x + n[p].points[3].x) / 2,
                                y: n[p].points[0].y / 2 + n[p].points[1].y / 2,
                                fontFamily: "Arial",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontVariant: "normal",
                                textAlign: "center",
                                textBaseline: "middle",
                                text: a.disPlayScoreistribution.centerTips[p],
                                fill: "#57595D",
                                lineWidth: 1
                            }
                        });
                        p === a.disPlayScoreistribution.target && (u = n[p],
                        f = v.getBBox().maxX),
                        p === a.disPlayScoreistribution.beHere && (h = n[p],
                        d = v.getBBox().maxX),
                        c.add(v)
                    }
                    if (h && d + 10 < h.points[3].x / 2 + h.points[2].x / 2) {
                        var g = new Y.a.G.Shape.Text({
                            attrs: {
                                x: (n[a.disPlayScoreistribution.beHere].points[0].x + n[a.disPlayScoreistribution.beHere].points[3].x) / 2,
                                y: n[a.disPlayScoreistribution.beHere].points[0].y / 2 + n[a.disPlayScoreistribution.beHere].points[1].y / 2,
                                fontFamily: "Arial",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontVariant: "normal",
                                textAlign: "center",
                                textBaseline: "middle",
                                text: a.disPlayScoreistribution.centerTips[a.disPlayScoreistribution.beHere],
                                fill: "#fff",
                                lineWidth: 1
                            }
                        });
                        c.add(g)
                    }
                    for (var m = 0; m < n.length; m++)
                        c.addShape("text", {
                            attrs: {
                                x: 60,
                                y: n[m].points[0].y / 2 + n[m].points[1].y / 2,
                                fontFamily: "Arial",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontVariant: "normal",
                                textAlign: "end",
                                textBaseline: "middle",
                                text: a.disPlayScoreistribution.yTips[m] + "人",
                                fill: "#A5A9AF",
                                lineWidth: 1
                            }
                        });
                    if (u) {
                        var y = u.points[3].x / 2 + u.points[2].x / 2 + 10;
                        f + 10 < u.points[3].x / 2 + u.points[2].x / 2 ? (c.addShape("circle", {
                            attrs: {
                                x: u.points[3].x / 2 + u.points[2].x / 2,
                                y: u.points[3].y / 2 + u.points[2].y / 2,
                                r: 5,
                                fill: "#FFFFFF",
                                stroke: "#FFB636",
                                lineWidth: 4
                            }
                        }),
                        c.addShape("line", {
                            attrs: {
                                x1: u.points[3].x / 2 + u.points[2].x / 2 - 5 - 2,
                                y1: u.points[3].y / 2 + u.points[2].y / 2,
                                x2: f + 10,
                                y2: u.points[3].y / 2 + u.points[2].y / 2,
                                lineWidth: 1,
                                strokeStyle: "#57595D"
                            }
                        })) : y = f + 10;
                        var x = new Y.a.G.Shape.Text({
                            attrs: {
                                x: y,
                                y: u.points[3].y / 2 + u.points[2].y / 2,
                                fontFamily: "PingFangSC-Regular",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontVariant: "normal",
                                textAlign: "start",
                                textBaseline: "middle",
                                text: a.disPlayScoreistribution.targetTips,
                                fill: "#262729",
                                lineWidth: 1
                            }
                        });
                        c.add(x)
                    }
                    if (h) {
                        var b = h.points[3].x / 2 + h.points[2].x / 2 + 10;
                        d + 10 < h.points[3].x / 2 + h.points[2].x / 2 ? (c.addShape("circle", {
                            attrs: {
                                x: h.points[3].x / 2 + h.points[2].x / 2,
                                y: h.points[3].y / 2 + h.points[2].y / 2,
                                r: 5,
                                fill: "#FFFFFF",
                                stroke: "#23CCD4",
                                lineWidth: 4
                            }
                        }),
                        c.addShape("line", {
                            attrs: {
                                x1: h.points[3].x / 2 + h.points[2].x / 2 - 5 - 2,
                                y1: h.points[3].y / 2 + h.points[2].y / 2,
                                x2: d + 10,
                                y2: h.points[3].y / 2 + h.points[2].y / 2,
                                lineWidth: 1,
                                strokeStyle: "#FFFFFF"
                            }
                        })) : b = d + 10;
                        var S = new Y.a.G.Shape.Text({
                            attrs: {
                                x: b,
                                y: h.points[3].y / 2 + h.points[2].y / 2,
                                fontFamily: "PingFangSC-Regular",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontVariant: "normal",
                                textAlign: "start",
                                textBaseline: "middle",
                                text: a.disPlayScoreistribution.myTips,
                                fill: "#05C1AE",
                                lineWidth: 1
                            }
                        });
                        c.add(S)
                    }
                    l.draw()
                }
            },
            mounted: function() {}
        }
          , q = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.isShow ? i("div", {
                    staticClass: "container-backgrounde"
                }, [i("div", {
                    staticClass: "class-a-title",
                    domProps: {
                        textContent: t._s(t.disPlayScoreistribution.title)
                    }
                }), t._v(" "), t.disPlayScoreistribution.subtitle ? i("div", {
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.disPlayScoreistribution.subtitle)
                    }
                }) : t._e(), t._v(" "), i("switch-tab", {
                    attrs: {
                        tabs: t.tabInfo
                    },
                    on: {
                        "on-tab-switch": t.onTabSwitch
                    }
                }), t._v(" "), i("div", [i("div", {
                    staticClass: "canvas-explain"
                }, [i("span", {
                    staticClass: "class-b-icon"
                }), t._v(" "), i("span", {
                    staticClass: "class-b-title",
                    domProps: {
                        textContent: t._s(t.disPlayScoreistribution.chartName)
                    }
                })]), t._v(" "), i("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [i("canvas", {
                    ref: "scoreDistribution"
                })])])], 1) : t._e()
            },
            staticRenderFns: []
        };
        var J = i("VU/8")(H, q, !1, function(t) {
            i("r/ZS"),
            i("9LGi")
        }, "data-v-6dd4c86c", null).exports
          , Z = {
            name: "zxb-anchorinfo",
            props: {
                anchorInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            created: function() {},
            data: function() {
                return {
                    acio_rateTable: "acio_rateTable",
                    acio_rateMargin: "acio_rateMargin"
                }
            },
            computed: {
                anchorInfoShow: function() {
                    return void 0 === this.anchorInfo.beAnchor ? this.anchorInfo.id.length : this.anchorInfo.beAnchor
                },
                errorInfoShow: function() {
                    return this.anchorInfo.errTopics.constructor === Array && this.anchorInfo.errTopics.length
                },
                acio_tagStyle: function() {
                    var t = "";
                    switch (this.anchorInfo.subjectCode) {
                    case "02":
                        t = "#2675D8";
                        break;
                    case "06":
                        t = "#FCA205";
                        break;
                    case "05":
                        t = "#06C1AE"
                    }
                    return "background:" + t
                },
                showImproveInfo: function() {
                    return "number" == typeof this.anchorInfo.improveScore && this.anchorInfo.improveScore > 0
                }
            },
            methods: {
                goImproveClick: function() {
                    this.$emit("go-improve", this.anchorInfo.beAnchor, this.anchorInfo.canPractise, this.anchorInfo.id, this.anchorInfo.subjectCode, this.anchorInfo.paperId)
                }
            }
        }
          , K = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "acio_anchorWrap"
                }, [i("div", {
                    staticClass: "acio_titleWrap"
                }, [i("span", {
                    staticClass: "acio_tag",
                    style: t.acio_tagStyle
                }, [t._v(t._s(t.anchorInfo.subjectName))]), t._v(" "), i("span", {
                    staticClass: "acio_title"
                }, [t._v(t._s(t.anchorInfo.name))])]), t._v(" "), t.anchorInfoShow ? i("table", {
                    staticClass: "acio_infoTable"
                }, [i("tr", [i("th", [t._v("3年" + t._s(t.anchorInfo.examType) + "出现")]), t._v(" "), i("th", [t._v("分值占比")]), t._v(" "), i("th", [t._v("考点难度")]), t._v(" "), i("th", [t._v("考点影响")])]), t._v(" "), i("tr", [i("td", [t._v(t._s(t.anchorInfo.examCount) + "次")]), t._v(" "), i("td", [t._v(t._s(t.anchorInfo.examRatio) + "%")]), t._v(" "), i("td", [t._v(t._s(t.anchorInfo.difficultLevel.name))]), t._v(" "), i("td", [t._v(t._s(t.anchorInfo.influenceLevel.name))])])]) : t._e(), t._v(" "), i("table", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.errorInfoShow,
                        expression: "errorInfoShow"
                    }],
                    class: [t.acio_rateTable, t.anchorInfoShow ? "" : t.acio_rateMargin]
                }, [t._m(0), t._v(" "), t._l(t.anchorInfo.errTopics, function(e) {
                    return i("tr", [i("td", [t._v("第" + t._s(e.disTitleNumber) + "题")]), t._v(" "), i("td", [t._v(t._s(e.clazzAvgRatio) + "%")])])
                })], 2), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showImproveInfo,
                        expression: "showImproveInfo"
                    }],
                    staticClass: "acio_improveTipWrap"
                }, [i("span", [t._v("预计提分"), i("i", [t._v(t._s(t.anchorInfo.improveScore) + "分")])])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("tr", [e("th", [this._v("本次错题")]), this._v(" "), e("th", [this._v("班级平均正确率")])])
            }
            ]
        };
        var Q = i("VU/8")(Z, K, !1, function(t) {
            i("QKcn")
        }, null, null).exports
          , $ = {
            props: {
                examId: {
                    type: String,
                    default: ""
                },
                paperId: {
                    type: String,
                    default: ""
                },
                subjectCode: {
                    type: String,
                    default: ""
                }
            },
            mounted: function() {
                this.requestData()
            },
            data: function() {
                return {
                    model: {},
                    showModule: !1
                }
            },
            components: {
                "zxb-anchorinfo": Q
            },
            methods: {
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    S.a.getAllStudyStrategy(e).then(function(e) {
                        if (0 === e.errorCode)
                            try {
                                e.result.list.length ? (t.model = e.result,
                                t.showModule = !0) : t.showModule = !1
                            } catch (t) {
                                console.log(t)
                            }
                        else
                            console.log("getAllStudyStrategy errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                goImproveHandle: function(t, e, i, n, r) {
                    return !1
                }
            }
        }
          , tt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.showModule ? i("div", {
                    staticClass: "container-backgrounde"
                }, [i("div", {
                    staticClass: "improve-strategy-title"
                }, [i("h1", {
                    staticClass: "class-a-title"
                }, [t._v(t._s(t.model.title))]), t._v(" "), t.model.subtitle ? i("span", {
                    staticClass: "class-a-title-tips"
                }, [t._v(t._s(t.model.subtitle))]) : t._e()]), t._v(" "), i("ul", {
                    staticClass: "ipst_anchorList"
                }, t._l(t.model.list, function(e) {
                    return i("li", [i("zxb-anchorinfo", {
                        attrs: {
                            "anchor-info": e
                        },
                        on: {
                            "go-improve": t.goImproveHandle
                        }
                    })], 1)
                }), 0), t._v(" "), i("p", {
                    staticClass: "ipst_more"
                }, [t._v("更多请查看单科报告单")])]) : t._e()
            },
            staticRenderFns: []
        };
        var et = i("VU/8")($, tt, !1, function(t) {
            i("KgVh")
        }, null, null).exports
          , it = {
            name: "zxb-conclusion",
            props: {
                examId: {
                    type: String,
                    default: ""
                },
                paperId: {
                    type: String,
                    default: ""
                },
                subjectCode: {
                    type: String,
                    default: ""
                }
            },
            created: function() {
                this.requestData()
            },
            data: function() {
                return {
                    model: {},
                    showModule: !1
                }
            },
            methods: {
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    S.a.getAllConclusion(e).then(function(e) {
                        0 === e.errorCode ? e.result ? t.dealData(e.result) : t.showModule = !1 : console.log("getAllConclusion errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                dealData: function(t) {
                    "string" == typeof t.title && t.title.length || (t.title = "小结"),
                    this.model = t,
                    this.showModule = !0
                }
            }
        }
          , nt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.showModule ? i("div", {
                    staticClass: "container-backgrounde clsn_wrap"
                }, [i("div", [i("span", {
                    staticClass: "clsn_title"
                }, [t._v(t._s(t.model.title))]), t._v(" "), i("span", {
                    staticClass: "clan_circle"
                })]), t._v(" "), i("div", {
                    staticClass: "clsn_conclusion",
                    domProps: {
                        innerHTML: t._s(t.model.content)
                    }
                })]) : t._e()
            },
            staticRenderFns: []
        };
        var rt = i("VU/8")(it, nt, !1, function(t) {
            i("5/Sn")
        }, null, null).exports
          , at = i("//Fk")
          , st = i.n(at)
          , ot = i("ifoU")
          , lt = i.n(ot)
          , ct = {
            name: "",
            components: {
                "switch-tab": z
            },
            props: {
                examId: {
                    type: String
                },
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String,
                    default: "00"
                }
            },
            data: function() {
                return {
                    chartListData: [],
                    chart: null,
                    chartName: "",
                    selectedTabName: "",
                    selectedExamName: "\t",
                    totalCount: 0,
                    changeTrendTitle: "",
                    changeTrendSubTitle: "",
                    tabInfo: [],
                    defaultSelectedPoints: new lt.a,
                    rootElement: null,
                    canvasElement: null,
                    canvasContainerElement: null
                }
            },
            mounted: function() {
                this.rootElement = this.$refs.changeTrendRoot,
                this.canvasElement = this.$refs.changeTrendChart,
                this.canvasContainerElement = this.$refs.changeTrendChartContainer,
                this.requestData()
            },
            methods: {
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId,
                        pageIndex: 1,
                        pageSize: 5
                    };
                    "00" === t.subjectCode ? S.a.getAllChangeTrend(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getAllChangeTrend errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }) : (e.paperId = t.paperId,
                    S.a.getSingleChangeTrend(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getSingleChangeTrend errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }))
                },
                filterUndefinedChartData: function(t, e, i) {
                    if (!t)
                        return t;
                    for (var n = [], r = 0; r < t.length; r++) {
                        var a = t[r];
                        a && a.hasOwnProperty(e) && a.hasOwnProperty(i) && n.push(a)
                    }
                    return n
                },
                resetData: function() {
                    this.chartListData = [],
                    this.chartName = "",
                    this.selectedTabName = "",
                    this.selectedExamName = "",
                    this.totalCount = 0,
                    this.changeTrendTitle = "",
                    this.changeTrendSubTitle = "",
                    this.tabInfo = [],
                    this.defaultSelectedPoints = new lt.a
                },
                initData: function(t) {
                    if (this.resetData(),
                    t) {
                        if ("string" == typeof t && (t = JSON.parse(t)),
                        t.list && t.list.length > 0) {
                            this.tabInfo = [];
                            for (var e = t.list.length, i = 0; i < e; i++) {
                                var n = t.list[i];
                                if (n.tag) {
                                    var r = this.filterUndefinedChartData(n.dataList, "id", "ratio");
                                    n.dataList = r;
                                    var a = n.tag.name;
                                    a && n.dataList && n.dataList.length > 0 && (this.tabInfo.push(a),
                                    this.chartListData.push(n))
                                }
                            }
                        }
                        if (this.chartName = t.chartName,
                        this.tabInfo && this.tabInfo.length > 0) {
                            for (var s = 0; s < this.chartListData.length; s++)
                                this.transformRatioToChart(this.chartListData[s].dataList);
                            this.onSelectedTabChange(0)
                        }
                    }
                },
                onTabSwitch: function(t) {
                    this.onSelectedTabChange(t)
                },
                onSelectedTabChange: function(t) {
                    var e = this.chartListData[t];
                    this.changeTrendTitle = e.title,
                    e.subtitle && (this.changeTrendSubTitle = e.subtitle);
                    var i = e.dataList;
                    this.selectedTabName = e.tag.name,
                    this.selectedExamName = "",
                    this.totalCount = e.totalNum;
                    var n = this;
                    new st.a(function(t, e) {
                        if (n.canvasContainerElement.offsetWidth)
                            t();
                        else
                            var i = window.setInterval(function() {
                                n.canvasContainerElement.offsetWidth && (window.clearInterval(i),
                                t())
                            }, 200)
                    }
                    ).then(function(t) {
                        n.drawChart(i)
                    })
                },
                getHighestRatio: function(t) {
                    if (t && t.length > 0) {
                        for (var e = t.length, i = t[0], n = 0; n < e; n++)
                            t[n].ratio > i.ratio && (i = t[n]);
                        return i
                    }
                    return null
                },
                changeElemsClass: function(t, e) {
                    for (var i = this.rootElement.getElementsByClassName(t), n = 0; n < i.length; n++)
                        i[n].className = e
                },
                changeElemsOpacityByClass: function(t, e) {
                    var i = this.rootElement.getElementsByClassName(t);
                    if (i)
                        for (var n = i.length, r = 0; r < n; r++)
                            i[r].style.opacity = e
                },
                transformRatioToChart: function(t) {
                    for (var e = [], i = 0; i < t.length; i++)
                        t[i].ratio = 100 - t[i].ratio,
                        e.push(t[i]);
                    return e
                },
                initChart: function() {
                    var t = this.canvasElement.getContext("2d")
                      , e = this;
                    this.canvasContainerElement.offsetWidth > 0 && (window.report_body_canvas_real_width = this.canvasContainerElement.offsetWidth);
                    var i = window.report_body_canvas_real_width
                      , n = .25 * window.report_body_canvas_real_width;
                    i && n || (n = .2 * (i = .65 * window.innerWidth)),
                    this.chart = new Y.a.Chart({
                        el: e.canvasElement,
                        width: i,
                        height: n,
                        pixelRatio: window.devicePixelRatio,
                        padding: [0, 0, "auto", 0]
                    }),
                    this.chart.tooltip({
                        custom: !0,
                        alwaysShow: !0,
                        showCrosshairs: !1,
                        showTooltipMarker: !0,
                        triggerOn: ["click"],
                        triggerOff: null,
                        tooltipMarkerStyle: {
                            radius: 4.5,
                            fill: "#fff",
                            stroke: "l(90) 0:#FFDC66 1:#FFB636",
                            lineWidth: 3
                        },
                        onChange: function(t) {
                            e.changeElemsOpacityByClass("class-changetrend-tag-container", 0),
                            e.changeElemsOpacityByClass("class-changetrend-point-tag", 1),
                            e.changeElemsClass("class-changetrend-selected-axis-x-label", "class-changetrend-un-selected-axis-x-label");
                            var i = t.items[0];
                            e.defaultSelectedPoints.has(e.selectedTabName) && e.defaultSelectedPoints.delete(e.selectedTabName),
                            e.defaultSelectedPoints.set(e.selectedTabName, i.origin),
                            document.getElementById(i.origin.id + "2").style.opacity = 0,
                            document.getElementById(i.origin.id + "1").style.opacity = 1,
                            document.getElementById(i.origin.id + "0").className = "class-changetrend-selected-axis-x-label",
                            e.selectedExamName = "*" + i.origin.name
                        }
                    });
                    var r = t.createLinearGradient(0, 0, i, 0);
                    r.addColorStop(0, "#ffffff"),
                    r.addColorStop(.1, "#EDEDED"),
                    r.addColorStop(.5, "#F1F1F1"),
                    r.addColorStop(.9, "#EDEDED"),
                    r.addColorStop(1, "#ffffff"),
                    this.chart.axis("id", {
                        label: null,
                        line: null,
                        labelOffset: 10,
                        grid: {
                            lineDash: null,
                            stroke: "#F5F5F5",
                            lineWidth: 1
                        }
                    }),
                    this.chart.axis("ratio", {
                        label: null,
                        grid: {
                            lineDash: null,
                            stroke: r,
                            lineWidth: 1
                        }
                    })
                },
                drawChart: function(t) {
                    var e = this.canvasContainerElement.getElementsByClassName("guideWapper");
                    if (e)
                        for (; e.length > 0; )
                            e[0].remove();
                    var i = this.canvasElement.getContext("2d")
                      , n = !0;
                    if (this.chart ? (n = !1,
                    this.chart.guide().clear(),
                    this.chart.hideTooltip(),
                    this.chart.clear()) : (n = !0,
                    this.initChart()),
                    t && 0 != t.length) {
                        var r = t.length;
                        this.chart.source(t, {
                            id: {
                                tickCount: r,
                                range: [.1, .2 * (r - 1) + .1]
                            },
                            ratio: {
                                tickCount: 7,
                                max: 120,
                                min: 0
                            }
                        });
                        var a = i.createLinearGradient(0, 0, window.innerWidth, 0);
                        a.addColorStop(.1, "#0DC2B3"),
                        a.addColorStop(.5, "#2FD2E7"),
                        a.addColorStop(.9, "#3DEA95"),
                        this.chart.line().position("id*ratio").color(a).style({
                            lineWidth: 3
                        }).shape("smooth"),
                        this.chart.point().position("id*ratio").size(3).style({
                            fill: "#ffffff",
                            stroke: "#2BCFE0",
                            lineWidth: 2
                        });
                        for (var s = 0; s < r; s++) {
                            var o = t[s]
                              , l = 100 - o.ratio;
                            0 == l && (l = 1),
                            this.chart.guide().html({
                                position: [o.id, o.ratio],
                                html: '<div class="class-changetrend-point-tag" id="' + o.id + '2">前' + Math.round(l) + "%</div>",
                                alignX: "center",
                                alignY: "bottom",
                                offsetY: -15
                            }),
                            this.chart.guide().html({
                                position: [o.id, o.ratio],
                                html: '<div class="class-changetrend-tag-container" id="' + o.id + '1"><div class="class-changetrend-popup"><span><em></em></span>前' + Math.round(l) + "%</div></div>",
                                alignX: "left",
                                alignY: "bottom",
                                offsetY: -15
                            }),
                            this.chart.guide().html({
                                position: [o.id, 0],
                                html: '<div id="' + o.id + '0" class="class-changetrend-un-selected-axis-x-label">' + o.dateDisp + "</div>",
                                alignX: "center",
                                alignY: "top",
                                offsetY: 10
                            })
                        }
                        var c = -1
                          , u = 0;
                        for (s = 0; s < r; s++)
                            u += t[s].ratio;
                        r > 1 && (c = u / r),
                        c >= 0 && c <= 100 && (c = 100 - 100 * c / 120,
                        this.chart.guide().line({
                            top: !1,
                            start: ["0%", c + "%"],
                            end: ["100%", c + "%"],
                            style: {
                                stroke: "#06C1AE",
                                lineWidth: 2,
                                opacity: .4,
                                lineDash: [6, 4]
                            }
                        }),
                        this.chart.guide().html({
                            top: !1,
                            position: ["0%", c + "%"],
                            html: '<div><span class="class-changetrend-my-average-ratio">我的平均水平</span></div>',
                            alignX: "left",
                            alignY: "top",
                            offsetY: 2
                        })),
                        n ? this.chart.render() : this.chart.repaint();
                        var h = null;
                        h = this.defaultSelectedPoints.has(this.selectedTabName) ? this.chart.getPosition(this.defaultSelectedPoints.get(this.selectedTabName)) : this.chart.getPosition(t[r - 1]),
                        this.chart.showTooltip(h)
                    }
                }
            }
        }
          , ut = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tabInfo.length,
                        expression: "tabInfo.length"
                    }],
                    ref: "changeTrendRoot",
                    staticClass: "container-backgrounde"
                }, [i("h2", {
                    staticClass: "class-a-title"
                }, [t._v(t._s(t.changeTrendTitle))]), t._v(" "), t.changeTrendSubTitle ? i("div", {
                    staticClass: "class-a-title-tips"
                }, [t._v(t._s(t.changeTrendSubTitle))]) : t._e(), t._v(" "), i("switch-tab", {
                    attrs: {
                        tabs: t.tabInfo
                    },
                    on: {
                        "on-tab-switch": t.onTabSwitch
                    }
                }), t._v(" "), i("div", {
                    staticClass: "class-b-container"
                }, [i("span", {
                    staticClass: "class-b-icon"
                }), t._v(" "), i("span", {
                    staticClass: "class-b-title"
                }, [t._v(t._s(t.chartName))]), t._v(" "), i("span", {
                    staticClass: "class-b-title-tips"
                }, [t._v(t._s(t.selectedTabName) + "总人数：" + t._s(t.totalCount) + "人")])]), t._v(" "), i("div", {
                    ref: "changeTrendChartContainer"
                }, [i("canvas", {
                    ref: "changeTrendChart"
                })]), t._v(" "), i("div", {
                    staticClass: "class-changetrend-selected-exam-name"
                }, [t._v(t._s(t.selectedExamName))])], 1)
            },
            staticRenderFns: []
        };
        var ht = i("VU/8")(ct, ut, !1, function(t) {
            i("rFN9")
        }, null, null).exports
          , ft = i("iHiS")
          , dt = i.n(ft)
          , pt = {
            name: "subject-analysis",
            props: {
                examId: {
                    type: String,
                    default: ""
                },
                paperId: {
                    type: String,
                    default: ""
                },
                subjectCode: {
                    type: String,
                    default: "all"
                }
            },
            data: function() {
                return {
                    moudel: "subjectAnalysis",
                    chartName: "",
                    subjectList: [],
                    maxScore: 100,
                    myRankName: "本次水平",
                    classAvgRankName: "班级中等水平",
                    myAvgRankName: "平时水平",
                    result: "",
                    tScoreDesc: "",
                    tScoreTitle: "",
                    title: "",
                    subTitle: "",
                    tips: "",
                    subTips: "",
                    isShow: !1,
                    isShowMy: !1,
                    isShowAvg: !1,
                    isShowGrade: !1,
                    isShowClass: !1,
                    isNormalRadar: !1
                }
            },
            created: function() {},
            mounted: function() {
                this.getDataFromServer()
            },
            methods: {
                resetStyle: function() {
                    if (!(this.isShowMy && this.isShowAvg && this.isShowClass))
                        if (!this.isShowMy || this.isShowAvg || this.isShowClass || this.isShowGrade)
                            if (this.isShowMy || !this.isShowAvg || this.isShowClass) {
                                if (this.isShowMy && !this.isShowAvg && this.isShowClass) {
                                    var t = this.$refs.subject_analysis_legend_item_left
                                      , e = this.$refs.subject_analysis_legend_item_right;
                                    e.style.cssFloat = "none",
                                    e.style.marginLeft = "25px",
                                    t.style.cssFloat = "none",
                                    t.style.marginRight = "25px"
                                } else if (!this.isShowMy && this.isShowAvg && this.isShowClass) {
                                    var i = this.$refs.subject_analysis_legend_item_center
                                      , n = this.$refs.subject_analysis_legend_item_right;
                                    n.style.cssFloat = "none",
                                    n.style.marginLeft = "25px",
                                    i.style.cssFloat = "none",
                                    i.style.marginRight = "25px"
                                } else if (this.isShowMy && this.isShowAvg && !this.isShowClass) {
                                    var r = this.$refs.subject_analysis_legend_item_center
                                      , a = this.$refs.subject_analysis_legend_item_left;
                                    r.style.cssFloat = "none",
                                    r.style.marginLeft = "25px",
                                    a.style.cssFloat = "none",
                                    a.style.marginRight = "25px"
                                }
                            } else {
                                this.$refs.subject_analysis_legend_item_center.style.cssFloat = "none"
                            }
                        else
                            this.$refs.subject_analysis_legend_item_left.style.cssFloat = "none"
                },
                getDataFromServer: function() {
                    var t = this
                      , e = this
                      , i = {
                        examId: e.examId
                    };
                    S.a.getAllSubjectDiagnosis(i).then(function(i) {
                        0 === i.errorCode ? i.result && i.result.list && i.result.list.length > 0 ? e.dealData(i.result) : t.isShow = !1 : console.log("getAllSubjectDiagnosis errorCode: " + i.errorCode + " errorInfo: " + i.errorInfo)
                    })
                },
                dealData: function(t) {
                    var e = this;
                    if (t) {
                        this.result = t,
                        this.tScoreDesc = this.result.tScoreDesc,
                        this.tScoreTitle = this.result.tScoreTitle,
                        this.title = this.result.title,
                        this.subTitle = this.result.subtitle,
                        this.tips = this.result.tips,
                        this.subTips = this.result.subTips;
                        var i = JSON.parse(sessionStorage.getItem("subjectList"));
                        this.chartName = this.result.chartName,
                        i.forEach(function(t) {
                            e.result.list.forEach(function(i) {
                                t.subjectName === i.subjectName && e.subjectList.push(i)
                            })
                        }),
                        console.log(i, this.subjectList, "筛选科目"),
                        this.subjectList && this.subjectList.length > 2 ? (this.subjectList[0].myRank || 0 === this.subjectList[0].myRank ? this.isShowMy = !0 : this.isShowMy = !1,
                        (this.subjectList[0].avgRank || 0 === this.subjectList[0].avgRank) && (this.subjectList[0].showGradeSecondary ? (this.isShowGrade = !0,
                        this.isShowClass = !1) : (this.isShowGrade = !1,
                        this.isShowClass = !0)),
                        this.isShowGrade ? this.isShowAvg = !1 : this.isShowAvg = !0,
                        this.isShowMy || this.isShowAvg ? this.isShow = !0 : this.isShow = !1) : this.isShow = !1,
                        this.subjectList && this.subjectList.length > 9 ? this.isNormalRadar = !0 : this.isNormalRadar = !1,
                        this.$nextTick(function() {
                            e.convertRadarData()
                        })
                    }
                },
                convertRadarData: function() {
                    var t = [];
                    if (this.subjectList && this.subjectList.length > 0) {
                        for (var e = 0; e < this.subjectList.length; e++)
                            void 0 !== this.subjectList[e].avgRank && t.push({
                                item: this.subjectList[e].subjectName,
                                user: this.classAvgRankName,
                                score: 100 - this.subjectList[e].avgRank
                            }),
                            void 0 !== this.subjectList[e].rationalRank && !1 === this.subjectList[e].showGradeSecondary && t.push({
                                item: this.subjectList[e].subjectName,
                                user: this.myAvgRankName,
                                score: 100 - this.subjectList[e].rationalRank
                            }),
                            void 0 !== this.subjectList[e].myRank && t.push({
                                item: this.subjectList[e].subjectName,
                                user: this.myRankName,
                                score: 100 - this.subjectList[e].myRank
                            });
                        console.info(t),
                        this.drawRadar(t),
                        this.resetStyle()
                    }
                },
                drawRadar: function(t) {
                    var e = this;
                    if (t) {
                        var i = this.$refs.subject_analysis_div_id.getElementsByClassName("guideWapper");
                        if (i)
                            for (; i.length > 0; )
                                i[0].remove();
                        if (this.subjectList && 3 === this.subjectList.length)
                            this.$refs.subject_analysis_legend_div.style.marginTop = "-75px";
                        var n = new Y.a.Chart({
                            el: this.$refs.subjectAnalysis,
                            width: this.$refs.subject_analysis_div_id.offsetWidth,
                            height: .45 * this.$refs.subject_analysis_div_id.offsetWidth,
                            pixelRatio: window.devicePixelRatio,
                            padding: 65
                        });
                        n.tooltip(!1),
                        n.coord("polar", {}),
                        n.legend(!1),
                        n.source(t, {
                            score: {
                                min: -20,
                                max: this.maxScore,
                                nice: !1,
                                tickCount: 7
                            }
                        });
                        var r = null;
                        !0 === this.isNormalRadar && (r = function(t, e, i) {
                            return {
                                fill: "#57595D",
                                top: !0,
                                fontSize: 15
                            }
                        }
                        ),
                        n.axis("item", {
                            top: !0,
                            label: r,
                            grid: function(t, e) {
                                return {
                                    stroke: "#DEE1E5",
                                    lineDash: null,
                                    lineWidth: .7
                                }
                            }
                        }),
                        n.axis("score", {
                            top: !0,
                            label: null,
                            grid: function(t, e) {
                                return {
                                    stroke: "#DEE1E5",
                                    lineDash: null,
                                    lineWidth: .7
                                }
                            }
                        });
                        var a = n.get("canvas")
                          , s = a.addGroup({
                            zIndex: -1
                        });
                        if (n.line().position("item*score").color("user", function(t) {
                            return t == e.myRankName ? "#2675D8" : t == e.classAvgRankName ? "#C5C9CE" : t == e.myAvgRankName ? "#FCA205" : void 0
                        }).style("user", {
                            lineDash: function(t) {
                                return t == e.classAvgRankName ? [4, 10] : null
                            },
                            lineWidth: function(t) {
                                return 2
                            }
                        }),
                        n.point().position("item*score").color("user", function(t) {
                            return t == e.myRankName ? "#2675D8" : t == e.classAvgRankName ? "#778899" : t == e.myAvgRankName ? "#FCA205" : void 0
                        }).style("user", {
                            stroke: "#fff",
                            opacity: function(t) {
                                return t == e.classAvgRankName ? 0 : 1
                            }
                        }).shape("user", function(t) {
                            return "circle"
                        }).size(4),
                        !1 === this.isNormalRadar)
                            for (var o = dt.a.getConfigByKey(this.subjectList.length), l = 0; l < this.subjectList.length; l++) {
                                var c = null;
                                if (this.subjectList[l].tag) {
                                    var u = this.subjectList[l].tag.code;
                                    "0" === u ? c = "#2675D8" : "2" === u ? c = "#FCA205" : "1" === u ? c = "#F45653" : "3" === u && (c = "#06C1AE"),
                                    this.subjectList[l].tag.name
                                }
                                var h, f = o[l].alignX, d = o[l].offsetX, p = o[l].offsetY;
                                this.subjectList[l].tag && (d = o[l].labelOffsetX,
                                p = o[l].labelOffsetY),
                                h = c ? '<div class="subject_analysis_mark_bg_div_mark"><span>' + this.subjectList[l].subjectName + "</span></div>" : '<div class="subject_analysis_mark_bg_div_normal">' + this.subjectList[l].subjectName,
                                n.guide().html({
                                    position: [this.subjectList[l].subjectName, this.maxScore],
                                    html: h,
                                    alignX: f,
                                    alignY: "middle",
                                    offsetX: d,
                                    offsetY: p
                                })
                            }
                        n.render(),
                        s.sort(),
                        a.draw()
                    }
                }
            }
        }
          , vt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.isShow ? i("div", {
                    staticClass: "container-backgrounde"
                }, [t.chartName ? i("div", {
                    staticClass: "class-a-title"
                }, [i("span", {
                    domProps: {
                        textContent: t._s(t.chartName)
                    }
                })]) : t._e(), t._v(" "), i("div", {
                    ref: "subject_analysis_div_id",
                    staticClass: "subject_analysis_div"
                }, [i("canvas", {
                    ref: "subjectAnalysis",
                    staticClass: "subject_analysis"
                })]), t._v(" "), i("div", {
                    ref: "subject_analysis_legend_div",
                    staticClass: "subject_analysis_legend_div"
                }, [t.subjectList && t.isShowMy ? i("div", {
                    ref: "subject_analysis_legend_item_left",
                    staticClass: " subject_analysis_legend_item_left"
                }, [i("div", {
                    staticClass: "subject_analysis_legend_icon_blue"
                }), t._v(" "), i("span", {
                    staticClass: "class-a-title-tips legend"
                }, [t._v("本次水平")])]) : t._e(), t._v(" "), t.subjectList && t.isShowAvg ? i("div", {
                    ref: "subject_analysis_legend_item_center",
                    staticClass: " subject_analysis_legend_item_center"
                }, [i("div", {
                    staticClass: "subject_analysis_legend_icon_yellow"
                }), t._v(" "), i("span", {
                    staticClass: "class-a-title-tips legend"
                }, [t._v("平时水平")])]) : t._e(), t._v(" "), t.subjectList && t.isShowClass ? i("div", {
                    ref: "subject_analysis_legend_item_right",
                    staticClass: " subject_analysis_legend_item_right"
                }, [i("div", {
                    staticClass: "subject_analysis_legend_icon_dash"
                }), t._v(" "), i("span", {
                    staticClass: "class-a-title-tips legend"
                }, [t._v("班级中等水平")])]) : t._e(), t._v(" "), t.subjectList && t.isShowGrade ? i("div", {
                    ref: "subject_analysis_legend_item_right",
                    staticClass: " subject_analysis_legend_item_right"
                }, [i("div", {
                    staticClass: "subject_analysis_legend_icon_dash"
                }), t._v(" "), i("span", {
                    staticClass: "class-a-title-tips legend"
                }, [t._v("年级中等水平")])]) : t._e()]), t._v(" "), t.subjectList && t.isShowClass ? i("div", {
                    staticClass: "subject_analysis_describe"
                }, [t._v("说明：学生水平值表示学生在班级中的相对位置，学科突出表示学生在该学科上表现较好，学科凹陷表示在该学科上表现有待提升。")]) : t._e(), t._v(" "), t.subjectList && t.isShowGrade ? i("div", {
                    staticClass: "subject_analysis_describe"
                }, [t._v("说明：学生水平值表示学生在年级中的相对位置，学科突出表示学生在该学科上表现较好，学科凹陷表示在该学科上表现有待提升。")]) : t._e()]) : t._e()
            },
            staticRenderFns: []
        };
        var gt = i("VU/8")(pt, vt, !1, function(t) {
            i("qtPz")
        }, null, null).exports
          , mt = {
            render: function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    staticClass: "fiy-slide",
                    on: {
                        click: this.clickHandler
                    }
                }, [this._t("default")], 2)
            },
            staticRenderFns: []
        };
        var yt = i("VU/8")({
            name: "slider-item",
            methods: {
                clickHandler: function() {
                    this.$emit("click")
                }
            }
        }, mt, !1, function(t) {
            i("150l")
        }, "data-v-d4a17c06", null).exports;
        function xt(t) {
            return Array.prototype.slice.call(t)
        }
        v.default.component("slider-wrap", {
            template: '\n\t\t<div class="fiy-swiper-container" @touchmove="fn">\n    \t<div class="fiy-default-swiper-box"\n\t\t\t\t:style="{\'transform\': swiperStyle.transform, \'-webkit-transform\': swiperStyle.transform, \'transition-duration\': swiperStyle.transitionDuration, \'-webkit-transition-duration\': swiperStyle.transitionDuration}"\n\t\t\t\t:ref="refname"\n\t\t\t\t@touchstart="thstart"\n\t\t\t\t@touchmove="thmove"\n\t\t\t\t@touchend="thend"\n\t\t\t\t@mousedown="thstart"\n\t\t\t\t@mousemove="thmove"\n\t\t\t\t@mouseup="thend"\n\t\t\t>\n\t\t\t\t<slot></slot>\n\t\t\t</div>\n      <slot name="pagination">\n\t\t\t\t\x3c!-- 默认提供了一个 pagination --\x3e\n\t\t\t\t<div class="fiy-pagination" v-if="pagination">\n\t\t\t\t\t<div class="fiy-dot"\n\t\t\t\t\t\tv-for="(value, key) in reallySlidesNumber"\n\t\t\t\t\t\t:key="key"\n\t\t\t\t\t\t:class="{\'fiy-dot-active\': currentSlide== key}"></div>\n\t\t\t\t</div>\n\t\t\t</slot>\n\t\t\t\x3c!-- 这两个就不默认提供了 --\x3e\n\t\t\t<slot name="arrowLeft"/>\n\t\t\t<slot name="arrowRight"/>\n\n\t\t\t\x3c!-- 当你需要在全局的内容里面加一些玩意的时候 --\x3e\n\t\t\t<slot name="g"/>\n    </div>\n\t',
            props: {
                duration: {
                    default: 300
                },
                interval: {
                    default: 3e3
                },
                autoplay: {
                    default: !0
                },
                therehold: {
                    default: 60
                },
                defaultSlide: {
                    default: 0
                },
                pagination: {
                    default: !0
                },
                vLock: {
                    default: !1
                }
            },
            data: function() {
                return {
                    swiper: null,
                    swiperWidth: 0,
                    slides: null,
                    slidesNumber: 0,
                    reallySlidesNumber: 0,
                    currentSlide: 0,
                    timer: null,
                    userDuration: 200,
                    offsetX: 0,
                    pos: {
                        startX: 0,
                        moveX: 0,
                        endX: 0,
                        local: 0,
                        distance: 0
                    },
                    moving: !1,
                    unlock: !1,
                    activeId: "",
                    mousedown: !1,
                    refname: "swiper" + String(Math.random()).substr(2, 5),
                    isOnly: !1,
                    swiperStyle: {
                        transform: "",
                        transitionDuration: ""
                    }
                }
            },
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t.init(),
                    t.isOnly || (t.cloneSlide(),
                    t.setDefaultSlide(),
                    t.autoplay && t.play())
                }, 100)
            },
            methods: {
                init: function() {
                    this.swiper = this.$refs[this.refname],
                    this.swiperWidth = this.swiper.clientWidth,
                    this.slides = xt(this.swiper.children),
                    this.slides.length && (this.slidesNumber = this.slides.length,
                    this.reallySlidesNumber = this.slides.length,
                    this.isOnly = 1 === this.reallySlidesNumber,
                    this.offsetX = this.swiper.getBoundingClientRect().left)
                },
                fn: function(t) {
                    (this.vLock || Math.abs(this.pos.startX - this.pos.moveX) > 10) && t.preventDefault()
                },
                cloneSlide: function() {
                    var t = this.slides[0].cloneNode(this.slides[0], !0)
                      , e = this.slides[this.slidesNumber - 1].cloneNode(this.slides[this.slidesNumber - 1], !0);
                    this.swiper.appendChild(t),
                    this.swiper.insertBefore(e, this.slides[0]),
                    this.slides = xt(this.swiper.children),
                    this.slidesNumber = this.slides.length
                },
                setDefaultSlide: function() {
                    if (this.defaultSlide < 0 || this.defaultSlide > this.slidesNumber - 2 - 1)
                        throw new Error("[fiy-swiper:Error]: You have set a wrong defaultSlide value with defaultSlide = " + this.defaultSlide);
                    this.translateX(-this.swiperWidth * (this.defaultSlide + 1))
                },
                play: function() {
                    var t = this;
                    clearTimeout(this.timer),
                    this.timer = setTimeout(function() {
                        t.moving = !0,
                        t.unlock = !1,
                        t.transitionDuration(t.duration),
                        t.translateX(-(t.swiperWidth + Math.abs(t.left()))),
                        setTimeout(function() {
                            t.transitionend()
                        }, t.duration)
                    }, this.interval)
                },
                transitionDuration: function(t) {
                    this.swiperStyle.transitionDuration = t + "ms"
                },
                translateX: function(t) {
                    this.swiperStyle.transform = "translate3d(" + t + "px, 0, 0)"
                },
                transitionend: function() {
                    this.transitionDuration(0);
                    var t = Math.round(Math.abs(this.left()) / this.swiperWidth);
                    this.currentSlide = t - 1,
                    t >= this.slidesNumber - 1 && (this.translateX(-this.swiperWidth),
                    this.currentSlide = 0),
                    0 == t && (this.translateX(-this.swiperWidth * (this.slidesNumber - 2)),
                    this.currentSlide = this.slidesNumber - 3),
                    this.$emit("transitionend", this.currentSlide),
                    this.moving = !1,
                    this.autoplay && this.play()
                },
                thstart: function(t) {
                    if (!this.isOnly)
                        if ("mousedown" !== t.type || this.moving) {
                            if (this.activeId = xt(t.changedTouches)[0].identifier,
                            !this.moving) {
                                var e = t.touches.length - 1;
                                clearTimeout(this.timer),
                                this.transitionDuration(0),
                                this.unlock = !0,
                                this.pos.startX = t.touches[e].clientX,
                                this.pos.local = this.left()
                            }
                        } else
                            this.mousedown = !0,
                            this.pos.startX = t.pageX,
                            this.pos.local = this.left(),
                            clearTimeout(this.timer),
                            this.transitionDuration(0)
                },
                left: function() {
                    return this.swiper.getBoundingClientRect().left - this.offsetX
                },
                thmove: function(t) {
                    if (!this.isOnly)
                        if ("mousemove" === t.type && this.mousedown && !this.moving)
                            this.pos.moveX = t.pageX,
                            this.pos.distance = this.pos.moveX - this.pos.startX,
                            this.translateX(this.pos.local + this.pos.distance);
                        else if (!this.moving && this.unlock) {
                            var e = t.touches.length - 1;
                            this.pos.moveX = t.touches[e].clientX,
                            this.pos.distance = this.pos.moveX - this.pos.startX,
                            this.pos.moveX < 0 || this.pos.moveX > this.swiperWidth ? (this.unlock = !1,
                            this.recover()) : this.translateX(this.pos.local + this.pos.distance)
                        }
                },
                thend: function(t) {
                    if (!this.isOnly)
                        if ("mouseup" === t.type && this.mousedown && !this.moving)
                            this.mousedown = !1,
                            this.pos.endX = t.pageX,
                            this.pos.distance = this.pos.endX - this.pos.startX,
                            this.recover();
                        else {
                            var e = xt(t.changedTouches)[0].identifier;
                            !this.moving && this.unlock && e == this.activeId && (this.unlock = !1,
                            this.pos.endX = t.changedTouches[0].clientX,
                            this.pos.distance = this.pos.endX - this.pos.startX,
                            this.recover())
                        }
                },
                recover: function() {
                    var t = this;
                    this.transitionDuration(this.userDuration);
                    var e = Math.abs(this.left()) % this.swiperWidth
                      , i = []
                      , n = "";
                    if (i = this.left() > 0 ? [e, this.swiperWidth - e] : [this.swiperWidth - e, e],
                    "none" === (n = this.pos.distance > 0 ? "to-right" : this.pos.distance < 0 ? "to-left" : "none") && this.autoplay && this.play(),
                    "to-right" === n)
                        if (this.moving = !0,
                        i[0] > this.therehold) {
                            this.translateX(this.left() + i[1]);
                            var r = (this.left() + i[1]) / this.swiperWidth;
                            0 === Math.abs(r) && (this.unlock = !1)
                        } else
                            this.translateX(this.left() - i[0]);
                    if ("to-left" === n)
                        if (this.moving = !0,
                        i[1] > this.therehold) {
                            this.translateX(this.left() - i[0]);
                            var a = (this.left() - i[0]) / this.swiperWidth;
                            Math.abs(a) === this.slidesNumber - 1 && (this.unlock = !1)
                        } else
                            this.translateX(this.left() + i[1]);
                    setTimeout(function() {
                        t.transitionend()
                    }, this.duration)
                },
                slideTo: function(t) {
                    if (!this.moving) {
                        var e = Math.round(Math.abs(this.left()) / this.swiperWidth);
                        if (t > this.slidesNumber - 2 - 1 || t < 0 || e == t + 1)
                            return;
                        this.moving = !0,
                        clearTimeout(this.timer),
                        this.transitionDuration(300),
                        this.translateX(-this.swiperWidth * (t + 1))
                    }
                },
                next: function() {
                    this.moving || (clearTimeout(this.timer),
                    this.moving = !0,
                    this.transitionDuration(this.userDuration),
                    this.translateX(this.left() - this.swiperWidth))
                },
                previous: function() {
                    this.moving || (clearTimeout(this.timer),
                    this.moving = !0,
                    this.transitionDuration(this.userDuration),
                    this.translateX(this.left() + this.swiperWidth))
                },
                refresh: function() {
                    this.init(),
                    this.isOnly || (this.cloneSlide(),
                    this.setDefaultSlide(),
                    this.autoplay && this.play())
                }
            }
        });
        var bt = {
            name: "loss-analysis",
            props: ["examId", "paperId", "subjectCode"],
            components: {
                "anchor-info": Q
            },
            data: function() {
                return {
                    showModule: !1,
                    showAnchor: !1,
                    anchorInfo: "",
                    bestAnswerImgList: [],
                    myAnswerImgList: [],
                    moduleName: "lossAnalysis",
                    anchorShow: !1,
                    answerImageArr: [],
                    picContainerShow: !1,
                    allFlag: {
                        analysisFlag: !1,
                        anchorFlag: !1
                    },
                    answerShowFlag: {
                        myAnswerFlag: !1,
                        bestAnswerFlag: !1
                    },
                    anchorCurrentIndex: 0,
                    currentTitleNum: 0,
                    currentTitleArrIndex: 0,
                    titleData: {
                        title: "",
                        subtitle: ""
                    },
                    chartModuleData: {
                        lostScores: []
                    },
                    analysisModuleData: {
                        topicList: []
                    },
                    anchorModuleData: {
                        list: []
                    },
                    maxHeight: 0
                }
            },
            filters: {},
            created: function() {
                this.getCacheData()
            },
            watch: {
                currentTitleNum: function() {
                    var t = this.analysisModuleData.topicList[this.currentTitleNum];
                    if (t && "s01Text" !== t.answerType && (this.goodStudentAnswer(),
                    t.imageAnswer)) {
                        this.myAnswerImgList = [];
                        var e = JSON.parse(e.imageAnswer);
                        for (var i in e)
                            this.myAnswerImgList.push(e[i])
                    }
                }
            },
            mounted: function() {},
            methods: {
                getMyanswerImgList: function() {
                    this.analysisModuleData.topicList[this.currentTitleNum].answerType
                },
                transfromData: function(t) {
                    this.allFlag.analysisFlag = !0;
                    var e = t.lostScoreInfo;
                    if (e && e.lostScores) {
                        for (var i in e.lostScores) {
                            var n = e.lostScores[i];
                            switch (n.colorTag.name) {
                            case "yellow":
                                n.colorTag.name = "252, 162, 5";
                                break;
                            case "blue":
                                n.colorTag.name = "38, 117, 216";
                                break;
                            case "green":
                                n.colorTag.name = "6, 193, 174"
                            }
                        }
                        this.chartModuleData = t.lostScoreInfo,
                        this.maxHeight = this.getArrMaxValue(this.chartModuleData.lostScores)
                    } else
                        this.chartModuleData = {
                            lostScores: []
                        },
                        this.maxHeight = 0;
                    this.titleData.title = t.title,
                    this.titleData.subtitle = t.subtitle,
                    this.analysisModuleData = t.wrongTopicAnalysis,
                    t.forbidMap ? (this.answerShowFlag.myAnswerFlag = t.forbidMap.forbidMyAnswer,
                    this.answerShowFlag.bestAnswerFlag = t.forbidMap.forbidBestAnswer) : (this.answerShowFlag.myAnswerFlag = !1,
                    this.answerShowFlag.bestAnswerFlag = !1),
                    this.checkCurrentTitleArrIndexIsMax();
                    try {
                        var r = this.analysisModuleData.topicList[this.currentTitleNum];
                        if (r && r.imageAnswer) {
                            this.myAnswerImgList = [];
                            var a = JSON.parse(a.imageAnswer);
                            for (var s in a) {
                                var o = a[s];
                                this.myAnswerImgList.push(o)
                            }
                        }
                    } catch (t) {
                        console.log(t)
                    }
                    this.goodStudentAnswer()
                },
                getCacheData: function() {
                    this.updateAnalysisData()
                },
                updateAnchorData: function() {
                    var t = this
                      , e = this
                      , i = {
                        examId: e.examId,
                        paperId: e.paperId,
                        subjectCode: e.subjectCode
                    };
                    S.a.getSingleAnchorReport(i).then(function(i) {
                        0 === i.errorCode ? (e.allFlag.anchorFlag = !0,
                        e.anchorModuleData = i.result,
                        t.currentTitleNum = 0,
                        e.makeTopicAndAnchorData(0)) : console.log("getSingleAnchorReport errorCode: " + i.errorCode + " errorInfo: " + i.errorInfo)
                    })
                },
                updateAnalysisData: function() {
                    var t = this
                      , e = {
                        examId: t.examId,
                        paperId: t.paperId
                    };
                    S.a.getSingleLostTopicAnalysis(e).then(function(e) {
                        0 === e.errorCode ? (t.showModule = !0,
                        t.transfromData(e.result),
                        t.updateAnchorData()) : (t.showModule = !1,
                        console.log("getSingleLostTopicAnalysis errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo))
                    })
                },
                getArrMaxValue: function(t) {
                    var e = [];
                    for (var i in t) {
                        var n = t[i];
                        e.push(n.totalScore)
                    }
                    return Math.max.apply(Math, e)
                },
                makeTotalHeight: function(t, e) {
                    return "height: " + 100 * (t / this.maxHeight).toFixed(4) + "%; background-color:rgba(" + e + ", 0.2);"
                },
                makeScoreHeight: function(t, e, i) {
                    return "height: " + (t - e) / t * 100 + "%; background-color:rgba(" + i + ",1);"
                },
                goPrev: function() {
                    this.currentTitleArrIndex <= 0 || this.currentTitleArrIndex--
                },
                goNext: function() {
                    this.currentTitleArrIndex + 1 >= Math.ceil(this.analysisModuleData.topicList.length / 5) || (this.currentTitleArrIndex++,
                    this.checkCurrentTitleArrIndexIsMax())
                },
                checkedTopicNum: function(t) {
                    if (void 0 === t || null === t || "" === t || t === this.currentTitleNum)
                        return null;
                    this.currentTitleNum = t,
                    this.makeTopicAndAnchorData(t)
                },
                checkCurrentTitleArrIndexIsMax: function() {
                    return this.currentTitleArrIndex + 1 === Math.ceil(this.analysisModuleData.topicList.length / 5)
                },
                replaceWid700: function(t) {
                    if (t)
                        return t.replace('width="700px"', "")
                },
                makeTopicAndAnchorData: function(t) {
                    if (this.analysisModuleData.topicList.length) {
                        var e = this.analysisModuleData.topicList[t].topicNumber
                          , i = 0
                          , n = !1
                          , r = this.anchorModuleData.list;
                        for (var a in r) {
                            var s = r[a];
                            for (var o in s.errTopics) {
                                var l = s.errTopics[o];
                                if (parseInt(e) === parseInt(l.sort)) {
                                    this.anchorCurrentIndex = i,
                                    this.anchorShow = !0,
                                    n = !0;
                                    break
                                }
                            }
                            if (n)
                                break;
                            i++
                        }
                        this.showAnchor = n,
                        this.getAnchorInfo()
                    }
                },
                showMyAnswer: function() {
                    var t = this.analysisModuleData.topicList[this.currentTitleNum];
                    if (t && t.imageAnswer) {
                        this.myAnswerImgList = [];
                        var e = JSON.parse(t.imageAnswer);
                        for (var i in e)
                            this.myAnswerImgList.push(e[i])
                    }
                    this.answerImageArr = this.myAnswerImgList,
                    this.changeAnswerImgShow(this.answerImageArr);
                    D({
                        module: "zxb_newReport_web",
                        opCode: "1006",
                        otherInfo: {}
                    })
                },
                showBestAnswer: function() {
                    D({
                        module: "zxb_newReport_web",
                        opCode: "1007",
                        otherInfo: {}
                    }),
                    this.answerImageArr = this.bestAnswerImgList,
                    this.changeAnswerImgShow(this.answerImageArr, !0)
                },
                goodStudentAnswer: function() {
                    var t = this
                      , e = this.analysisModuleData.topicList[this.currentTitleNum]
                      , i = [];
                    if (e) {
                        if ("s01Text" === e.answerType)
                            i.push(parseInt(e.topicNumber));
                        else
                            for (var n in e.topicScoreDTOs)
                                i.push(parseInt(e.topicScoreDTOs[n].topicNumber));
                        var r = t.paperId
                          , a = t.subjectCode
                          , s = {
                            examId: t.examId,
                            paperId: r,
                            topicId: e.topicId,
                            subjectCode: a,
                            topicNumberList: I()(i)
                        };
                        S.a.getSingleBestAnswer(s).then(function(e) {
                            0 === e.errorCode ? e.result && e.result.bestAnswers && (t.bestAnswerImgList = e.result.bestAnswers) : console.log("getSingleBestAnswer errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                        })
                    }
                },
                goGetPoints: function(t, e, i, n, r) {
                    return !1
                },
                getAnchorInfo: function() {
                    var t = this.anchorModuleData.list[this.anchorCurrentIndex];
                    t.paperId = this.analysisModuleData.topicList[this.currentTitleNum].paperId,
                    this.anchorInfo = t
                },
                makeMyAnswer: function() {
                    if (this.analysisModuleData.topicList[this.currentTitleNum].userAnswer)
                        return "我的答案：" + this.analysisModuleData.topicList[this.currentTitleNum].userAnswer;
                    if (this.analysisModuleData.topicList[this.currentTitleNum].userAnswers && this.analysisModuleData.topicList[this.currentTitleNum].userAnswers.length) {
                        var t = ""
                          , e = this.analysisModuleData.topicList[this.currentTitleNum].userAnswers;
                        for (var i in e) {
                            var n = e[i].userAnswer;
                            n || 0 === n || (n = "-"),
                            t += e[i].smallTopicNum + "." + n + "； "
                        }
                        return "我的答案：" + t
                    }
                },
                changeAnswerImgShow: function(t, e) {
                    var i = document.querySelector(".report-content");
                    i.style.overflow = "hidden";
                    var n = void 0;
                    document.querySelector(".pop-wrap") ? n = document.querySelector(".pop-wrap") : (n = document.createElement("div")).className = "pop-wrap",
                    n.innerHTML = '\n        <div id="popwrap" class="pop-wrap-div" v-show="picContainerShow">\n          <div class="pop-shadow"></div>\n            <span class="pic-show-close fa fa-close" @click="close"></span>\n            <div class="pop-content">\n              <slider-wrap ref="myPopwrap" class="swiper" :autoplay="false">\n                <slider-item v-for="(item,index) in imgLists" :key="index">\n                  <img v-show="!isBestAnswer" class="answer-con" :src="item" alt="答案图片">\n                  <div v-show="isBestAnswer" class="answer-con">\n                    <span class="good-answer-source" v-show="item.sourceInfo" v-text="item.sourceInfo"></span>\n                    <img :src="item.url" alt="答案图片">\n                  </div>\n                </slider-item>\n              </slider-wrap>\n            </div>\n        </div>\n      ';
                    var r = document.querySelector("#report");
                    r.appendChild(n),
                    this.vm = new v.default({
                        el: "#popwrap",
                        data: {
                            picContainerShow: !0,
                            imgLists: t,
                            isBestAnswer: e
                        },
                        components: {
                            "slider-item": yt
                        },
                        created: function() {},
                        methods: {
                            show: function() {
                                this.picContainerShow = !1
                            },
                            close: function() {
                                i.style.overflow = "auto",
                                this.picContainerShow = !1,
                                r.removeChild(n)
                            }
                        }
                    })
                }
            }
        }
          , St = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.showModule ? i("div", {
                    staticClass: "loss-container container-backgrounde"
                }, [i("div", {
                    staticClass: "class-a-title",
                    domProps: {
                        textContent: t._s(t.titleData.title)
                    }
                }), t._v(" "), t.titleData.subtitle ? i("span", {
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.titleData.subtitle)
                    }
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "class-b-container loss-container-class-b"
                }, [t.analysisModuleData.topicList && t.analysisModuleData.topicList.length ? t._e() : i("p", {
                    staticClass: "no-loss-data-tips",
                    domProps: {
                        textContent: t._s(t.analysisModuleData.tips)
                    }
                })]), t._v(" "), t.chartModuleData.lostScores && t.chartModuleData.lostScores.length > 0 ? i("div", {
                    staticClass: "chart-container"
                }, [i("div", {
                    staticClass: "show-chart"
                }, t._l(t.chartModuleData.lostScores, function(e, n) {
                    return i("div", {
                        staticClass: "chart-column"
                    }, [i("div", {
                        staticClass: "chart-a"
                    }, [i("span", {
                        staticClass: "chart-b",
                        style: t.makeTotalHeight(e.totalScore, e.colorTag.name)
                    }, [i("span", {
                        staticClass: "chart-c",
                        style: t.makeScoreHeight(e.totalScore, e.lostScore, e.colorTag.name)
                    })]), t._v(" "), i("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalScore > 0,
                            expression: "char.totalScore > 0"
                        }],
                        staticClass: "loss-num-tips",
                        domProps: {
                            textContent: t._s("丢" + e.lostScore + "分")
                        }
                    })]), t._v(" "), i("span", {
                        staticClass: "chart-name",
                        domProps: {
                            textContent: t._s(e.difficultyName)
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "chart-total",
                        domProps: {
                            textContent: t._s("共" + e.totalScore + "分")
                        }
                    })])
                }), 0), t._v(" "), i("div", {
                    staticClass: "chart-tips"
                }, [i("div", {
                    staticClass: "fl"
                }, [t._l(t.chartModuleData.lostScores, function(t, e) {
                    return i("i", {
                        style: "background: rgba(" + t.colorTag.name + ", 0.2)"
                    })
                }), t._v(" "), i("span", [t._v("丢分")])], 2), t._v(" "), i("div", {
                    staticClass: "fl"
                }, [t._l(t.chartModuleData.lostScores, function(t, e) {
                    return i("i", {
                        style: "background: rgba(" + t.colorTag.name + ", 1)"
                    })
                }), t._v(" "), i("span", [t._v("得分")])], 2), t._v(" "), i("div", {
                    staticClass: "clearfix"
                })])]) : t._e(), t._v(" "), t.analysisModuleData.topicList.length ? i("div", {
                    staticClass: "loss-analysis"
                }, [i("div", {
                    staticClass: "loss-analysis-title",
                    domProps: {
                        textContent: t._s(t.analysisModuleData.tag)
                    }
                }, [t._v("丢分试题解析")]), t._v(" "), i("div", {
                    staticClass: "subject-tab"
                }, [i("span", {
                    staticClass: "tab-prev fa fa-chevron-left",
                    class: {
                        current: 0 === t.currentTitleArrIndex
                    },
                    on: {
                        click: t.goPrev
                    }
                }), t._v(" "), i("ul", {
                    staticClass: "subject-title-number-con"
                }, t._l(t.analysisModuleData.topicList, function(e, n) {
                    return i("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: n >= 5 * t.currentTitleArrIndex && n < 5 * (t.currentTitleArrIndex + 1),
                            expression: "index >= currentTitleArrIndex * 5 && index < (currentTitleArrIndex + 1) * 5"
                        }],
                        staticClass: "subject-title-number fl",
                        class: {
                            current: t.currentTitleNum === n,
                            "no-margin": n % 5 == 0
                        },
                        on: {
                            click: function(e) {
                                return t.checkedTopicNum(n)
                            }
                        }
                    }, [i("span", {
                        staticClass: "subject-result fa fl",
                        class: {
                            "fa-close": 0 === e.score,
                            "fa-check": e.score > 0
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "subject-number fl",
                        domProps: {
                            innerHTML: t._s(e.disTitleNumber)
                        }
                    })])
                }), 0), t._v(" "), i("span", {
                    staticClass: "tab-next fa fa-chevron-right",
                    class: {
                        current: t.checkCurrentTitleArrIndexIsMax()
                    },
                    on: {
                        click: t.goNext
                    }
                }), t._v(" "), i("div", {
                    staticClass: "clearfix"
                })]), t._v(" "), i("div", {
                    staticClass: "subject-info"
                }, [i("ul", t._l(t.analysisModuleData.topicList, function(e, n) {
                    return i("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.currentTitleNum === n,
                            expression: "currentTitleNum === index"
                        }]
                    }, [i("p", {
                        domProps: {
                            innerHTML: t._s(t.replaceWid700(e.contentHtml))
                        }
                    })])
                }), 0)]), t._v(" "), t.analysisModuleData.topicList.length > 0 ? i("div", {
                    staticClass: "analysis-con"
                }, [i("div", {
                    staticClass: "subject-result"
                }, ["s01Text" === t.analysisModuleData.topicList[t.currentTitleNum].answerType || t.analysisModuleData.topicList[t.currentTitleNum].userAnswers ? t._e() : i("div", [!t.answerShowFlag.myAnswerFlag && t.myAnswerImgList.length ? i("span", {
                    staticClass: "answer-img-btn fr",
                    on: {
                        click: t.showMyAnswer
                    }
                }, [t._v("我的答案")]) : t._e(), t._v(" "), !t.answerShowFlag.bestAnswerFlag && t.bestAnswerImgList.length ? i("span", {
                    staticClass: "answer-img-btn fr",
                    on: {
                        click: t.showBestAnswer
                    }
                }, [t._v("学霸答案")]) : t._e(), t._v(" "), i("br"), t._v(" "), i("br"), t._v(" "), t.analysisModuleData.topicList[t.currentTitleNum].answerHtml ? i("p", {
                    domProps: {
                        innerHTML: t._s("正确答案：" + t.analysisModuleData.topicList[t.currentTitleNum].answerHtml)
                    }
                }) : t._e()]), t._v(" "), "s01Text" === t.analysisModuleData.topicList[t.currentTitleNum].answerType ? i("div", [i("span", {
                    domProps: {
                        innerHTML: t._s("正确答案：" + t.analysisModuleData.topicList[t.currentTitleNum].answerHtml)
                    }
                }), t._v(" "), i("span", {
                    domProps: {
                        innerHTML: t._s(t.makeMyAnswer())
                    }
                })]) : t._e(), t._v(" "), "s01Text" !== t.analysisModuleData.topicList[t.currentTitleNum].answerType && t.analysisModuleData.topicList[t.currentTitleNum].userAnswers ? i("div", [i("span", {
                    domProps: {
                        innerHTML: t._s("正确答案：" + t.analysisModuleData.topicList[t.currentTitleNum].answerHtml)
                    }
                }), t._v(" "), i("br"), t._v(" "), i("span", {
                    domProps: {
                        innerHTML: t._s(t.makeMyAnswer())
                    }
                })]) : t._e()]), t._v(" "), t._l(t.analysisModuleData.topicList, function(e, n) {
                    return i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.currentTitleNum === n && e.analysisHtml,
                            expression: "currentTitleNum === index && test.analysisHtml"
                        }],
                        staticClass: "analysis-content"
                    }, [i("h4", [t._v("解题思路：")]), t._v(" "), i("p", {
                        domProps: {
                            innerHTML: t._s(e.analysisHtml)
                        }
                    })])
                })], 2) : t._e()]) : t._e(), t._v(" "), t.anchorShow ? i("div", {
                    staticClass: "loss-diagnosis"
                }, [i("anchor-info", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showAnchor,
                        expression: "showAnchor"
                    }],
                    attrs: {
                        "anchor-info": t.anchorInfo
                    },
                    on: {
                        "go-improve": t.goGetPoints
                    }
                })], 1) : t._e()]) : t._e()
            },
            staticRenderFns: []
        };
        var _t = i("VU/8")(bt, St, !1, function(t) {
            i("vobP"),
            i("hv81"),
            i("vtf7")
        }, null, null).exports
          , Ct = {
            name: "score-gap",
            components: {
                "switch-tab": z
            },
            props: {
                examId: {
                    type: String
                },
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String,
                    default: "00"
                }
            },
            data: function() {
                return {
                    defaultScoreTxt: "— —",
                    chartListData: null,
                    chart: null,
                    chartName: "",
                    selectedTabName: "",
                    totalCount: 0,
                    scoreGapTitle: "",
                    scoreGapSubTitle: "",
                    later3Score: "",
                    later2Score: "",
                    later1Score: "",
                    myScore: "",
                    before1Score: "",
                    before2Score: "",
                    before3Score: "",
                    tabInfo: [],
                    isShowScoreTable: !1,
                    scoreGapRoot: null,
                    scoreGapCanvas: null,
                    scoreGapCanvasContainer: null
                }
            },
            mounted: function() {
                this.scoreGapRoot = this.$refs.scoreGapRoot,
                this.scoreGapCanvas = this.$refs.scoreGapChart,
                this.scoreGapCanvasContainer = this.$refs.scoreGapChartContainer,
                this.requestData()
            },
            methods: {
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    "00" === t.subjectCode ? S.a.getAllScoreGap(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getAllScoreGap errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }) : (e.paperId = t.paperId,
                    S.a.getSingleScoreGap(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getSingleScoreGap errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }))
                },
                resetData: function() {
                    this.chartListData = [],
                    this.chartName = "",
                    this.selectedTabName = "",
                    this.totalCount = 0,
                    this.scoreGapTitle = "",
                    this.scoreGapSubTitle = "",
                    this.myScore = this.defaultScoreTxt,
                    this.later3Score = this.defaultScoreTxt,
                    this.later2Score = this.defaultScoreTxt,
                    this.later1Score = this.defaultScoreTxt,
                    this.before3Score = this.defaultScoreTxt,
                    this.before2Score = this.defaultScoreTxt,
                    this.before1Score = this.defaultScoreTxt,
                    this.tabInfo = []
                },
                initData: function(t) {
                    if (this.resetData(),
                    t) {
                        if ("string" == typeof t && (t = JSON.parse(t)),
                        t.list && t.list.length > 0) {
                            this.tabInfo = [];
                            for (var e = t.list.length, i = 0; i < e; i++) {
                                var n = t.list[i];
                                if (n && n.tag) {
                                    var r = this.filterUndefinedChartData(n.list, "score", "rank");
                                    n.list = r;
                                    var a = n.tag.name;
                                    a && n.list && n.list.length > 0 && (this.tabInfo.push(a),
                                    this.chartListData.push(n))
                                }
                            }
                        }
                        if (this.chartName = t.chartName,
                        this.chartListData && this.chartListData.length > 0) {
                            for (e = this.chartListData.length,
                            i = 0; i < e; i++)
                                this.chartListData[i] && this.chartListData[i].list && (this.chartListData[i].list = this.changeRank(this.chartListData[i].list),
                                this.fixAvgRank(this.chartListData[i].list));
                            this.onSelectedTabChange(0)
                        }
                    }
                },
                fixAvgRank: function(t) {
                    for (var e = null, i = null, n = null, r = null, a = 0; a < t.length; a++) {
                        var s = t[a];
                        s && ("my" === s.tag ? e = s : "target" === s.tag ? i = s : "avg" === s.tag ? n = s : "max" === s.tag && (r = s))
                    }
                    var o = 0
                      , l = 0;
                    n && (r && n.score === r.score ? (o = 0,
                    l = 100) : i && n.score === i.score ? (o = i.rank - 1,
                    l = i.rank + 1) : e && n.score === e.score ? (o = e.rank - 1,
                    l = e.rank + 1) : e && n.score < e.score ? (o = 0,
                    l = e.rank) : i && n.score < i.score ? (e && (o = e.rank),
                    l = i.rank) : r && n.score < r.score && (o = i ? i.rank : e ? e.rank : 0,
                    l = r.rank),
                    o >= 0 && l > o && (n.rank <= o || n.rank >= l) && (n.rank <= o ? n.rank = l - o > 10 ? o + 10 : o + parseInt((l - o) / 2) : n.rank = l - o > 10 ? l - 10 : l - parseInt((l - o) / 2)))
                },
                filterUndefinedChartData: function(t, e, i) {
                    if (!t)
                        return t;
                    for (var n = [], r = 0; r < t.length; r++) {
                        var a = t[r];
                        a && a.hasOwnProperty(e) && a.hasOwnProperty(i) && n.push(a)
                    }
                    return n
                },
                changeRank: function(t) {
                    if (t)
                        for (var e = t.length, i = 0; i < e; i++) {
                            var n = t[i].rank;
                            n >= 0 && n <= 100 && (t[i].rank = 100 - n)
                        }
                    return t
                },
                onTabSwitch: function(t) {
                    this.onSelectedTabChange(t)
                },
                onSelectedTabChange: function(t) {
                    var e = this.chartListData[t];
                    e.title && (this.scoreGapTitle = e.title),
                    e.subtitle && (this.scoreGapSubTitle = e.subtitle);
                    var i = e.list
                      , n = i.length;
                    this.myScore = this.defaultScoreTxt,
                    this.later3Score = this.defaultScoreTxt,
                    this.later2Score = this.defaultScoreTxt,
                    this.later1Score = this.defaultScoreTxt,
                    this.before3Score = this.defaultScoreTxt,
                    this.before2Score = this.defaultScoreTxt,
                    this.before1Score = this.defaultScoreTxt;
                    for (var r = 0; r < n; r++) {
                        var a = i[r];
                        "my" === a.tag && void 0 != a.score && null != a.score && a.score >= 0 && (this.myScore = a.score)
                    }
                    if (e.scoreBefore)
                        for (var s = e.scoreBefore.length, o = 0; o < s; o++) {
                            var l = e.scoreBefore[o];
                            void 0 == l.score || null == l.score || l.score < 0 || ("前3名" === l.title ? this.before3Score = l.score : "前2名" === l.title ? this.before2Score = l.score : "前1名" === l.title && (this.before1Score = l.score))
                        }
                    if (e.scoreAfter)
                        for (var c = e.scoreAfter.length, u = 0; u < c; u++) {
                            var h = e.scoreAfter[u];
                            void 0 == h.score || null == h.score || h.score < 0 || ("后3名" === h.title ? this.later3Score = h.score : "后2名" === h.title ? this.later2Score = h.score : "后1名" === h.title && (this.later1Score = h.score))
                        }
                    this.later3Score === this.defaultScoreTxt && this.later2Score === this.defaultScoreTxt && this.later1Score === this.defaultScoreTxt && this.before1Score === this.defaultScoreTxt && this.before2Score === this.defaultScoreTxt && this.before3Score === this.defaultScoreTxt ? this.isShowScoreTable = !1 : this.isShowScoreTable = !0,
                    this.selectedTabName = e.tag.name,
                    this.totalCount = e.totalNum;
                    var f = this;
                    new st.a(function(t, e) {
                        if (f.scoreGapCanvasContainer.offsetWidth)
                            t();
                        else
                            var i = window.setInterval(function() {
                                f.scoreGapCanvasContainer.offsetWidth && (window.clearInterval(i),
                                t())
                            }, 200)
                    }
                    ).then(function(t) {
                        f.drawChart(i)
                    })
                },
                getMinScore: function(t) {
                    if (t && t.length > 0) {
                        for (var e = t.length, i = t[0].score, n = 1; n < e; n++) {
                            var r = t[n].score;
                            i > r && (i = r)
                        }
                        return i
                    }
                    return 0
                },
                getMaxScore: function(t) {
                    if (t && t.length > 0) {
                        for (var e = t.length, i = t[0].score, n = 1; n < e; n++) {
                            var r = t[n].score;
                            i < r && (i = r)
                        }
                        return i
                    }
                    return 0
                },
                initChart: function() {
                    var t = this.scoreGapCanvas.getContext("2d");
                    this.scoreGapCanvasContainer.offsetWidth > 0 && (window.report_body_canvas_real_width = this.scoreGapCanvasContainer.offsetWidth);
                    var e = window.report_body_canvas_real_width
                      , i = .25 * window.report_body_canvas_real_width;
                    e && i || (e = .65 * window.innerWidth,
                    i = .2 * window.innerWidth),
                    this.chart = new Y.a.Chart({
                        el: this.scoreGapCanvas,
                        width: e,
                        height: i,
                        pixelRatio: window.devicePixelRatio,
                        padding: [4, 0, "auto", 0]
                    }),
                    this.chart.tooltip(!1),
                    this.chart.axis("rank", {
                        line: null,
                        label: {
                            fill: "#A5A9AF",
                            fontSize: 12
                        },
                        grid: {
                            lineDash: null,
                            stroke: "#F5F5F5",
                            lineWidth: 1
                        }
                    });
                    var n = t.createLinearGradient(0, 0, e, 0);
                    n.addColorStop(0, "#ffffff"),
                    n.addColorStop(.1, "#EDEDED"),
                    n.addColorStop(.5, "#F1F1F1"),
                    n.addColorStop(.9, "#EDEDED"),
                    n.addColorStop(1, "#ffffff"),
                    this.chart.axis("score", {
                        label: function(t, e, i) {
                            var n = {
                                fill: "#A5A9AF",
                                textBaseline: "top",
                                fontSize: 12,
                                textAlign: "right"
                            };
                            return n.opacity = 0 === e ? 0 : 1,
                            n
                        },
                        labelOffset: -6,
                        position: "right",
                        grid: {
                            lineDash: null,
                            stroke: n,
                            lineWidth: 1
                        }
                    })
                },
                drawChart: function(t) {
                    var e = this.scoreGapCanvasContainer.getElementsByClassName("guideWapper");
                    if (e)
                        for (; e.length > 0; )
                            e[0].remove();
                    var i = !0;
                    if (this.chart ? (i = !1,
                    this.chart.guide().clear(),
                    this.chart.clear()) : (i = !0,
                    this.initChart()),
                    t && 0 != t.length) {
                        var n = t.length
                          , r = this.getMinScore(t)
                          , a = this.getMaxScore(t);
                        r -= r % 10,
                        a = a - a % 10 + 10;
                        for (var s = 0, o = 0; o < n; o++)
                            "my" === t[o].tag && (s = t[o].score);
                        if (a > r && a > s)
                            for (var l = (a - s) / (a - r); l < .1; )
                                l = ((a += 10) - s) / (a - r);
                        this.chart.source(t, {
                            rank: {
                                type: "linear",
                                range: [.1, .9],
                                max: 100,
                                min: 0,
                                tickCount: 6,
                                formatter: function(t) {
                                    return 100 == t ? "第1名" : 0 == t ? "成绩水平：" : "前" + (100 - t) + "%"
                                }
                            },
                            score: {
                                type: "linear",
                                tickCount: 7,
                                max: a,
                                min: r,
                                nice: !0,
                                formatter: function(t) {
                                    return parseInt(t)
                                }
                            }
                        });
                        var c = this.scoreGapCanvas.getContext("2d").createLinearGradient(0, 0, window.innerWidth, 0);
                        c.addColorStop(.1, "#0DC2B3"),
                        c.addColorStop(.5, "#2FD2E7"),
                        c.addColorStop(.9, "#3DEA95"),
                        this.chart.line().position("rank*score").color(c).style({
                            lineWidth: 3
                        }).shape("smooth"),
                        this.chart.point().position("rank*score").size("tag", function(t) {
                            return "target" === t ? 5 : 3
                        }).style("tag", {
                            fill: "#FFFFFF",
                            stroke: function(t) {
                                return "target" === t ? "l(90) 0:#FFDC66 1:#FFB636" : "#2BCFE0"
                            },
                            lineWidth: function(t) {
                                return "target" === t ? 3 : 2
                            }
                        });
                        for (var u = null, h = null, f = 0; f < n; f++) {
                            var d = t[f]
                              , p = parseFloat(t[f].score);
                            p = Math.round(100 * p) / 100,
                            "max" === d.tag && d.score >= 0 ? this.chart.guide().html({
                                position: [d.rank, d.score],
                                html: '<div class="score-gap-default-score">最高：' + p + "</div>",
                                alignX: "right",
                                alignY: "top",
                                offsetY: 6
                            }) : "target" === d.tag && d.score >= 0 ? (h = d,
                            this.chart.guide().html({
                                position: [d.rank, d.score],
                                html: '<div class="score-gap-target-score" id="scoreGapTargetScoreId">目标：' + p + "</div>",
                                alignX: "right",
                                alignY: "bottom",
                                offsetY: -6
                            })) : "my" === d.tag && d.score >= 0 ? (u = d,
                            this.chart.guide().html({
                                position: [d.rank, d.score],
                                html: '<div class="score-gap-popup"><span><em></em></span>我：' + p + "</div>",
                                alignX: "right",
                                alignY: "bottom",
                                offsetY: -10,
                                offsetX: 0
                            })) : "avg" === d.tag && d.score >= 0 && this.chart.guide().html({
                                position: [d.rank, d.score],
                                html: '<div class="score-gap-default-score">平均：' + p + "</div>",
                                alignX: "left",
                                alignY: "top",
                                offsetY: 6
                            })
                        }
                        i ? this.chart.render() : this.chart.repaint();
                        var v = null;
                        u && (v = this.chart.getPosition(u));
                        var g = null;
                        if (h && (g = this.chart.getPosition(h)),
                        v && g && v.y - g.y < 24 && g.x - v.x < 60) {
                            var m = v.y - g.y - 24
                              , y = this.scoreGapRoot.getElementsByClassName("score-gap-target-score")[0];
                            y.style.top = parseInt(y.style.top) + m + "px"
                        }
                    }
                }
            }
        }
          , wt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tabInfo.length,
                        expression: "tabInfo.length"
                    }],
                    ref: "scoreGapRoot",
                    staticClass: "container-backgrounde"
                }, [i("h2", {
                    staticClass: "class-a-title"
                }, [t._v(t._s(t.scoreGapTitle))]), t._v(" "), t.scoreGapSubTitle ? i("div", {
                    staticClass: "class-a-title-tips"
                }, [t._v(t._s(t.scoreGapSubTitle))]) : t._e(), t._v(" "), i("switch-tab", {
                    attrs: {
                        tabs: t.tabInfo
                    },
                    on: {
                        "on-tab-switch": t.onTabSwitch
                    }
                }), t._v(" "), i("div", {
                    staticClass: "class-b-container"
                }, [i("span", {
                    staticClass: "class-b-icon"
                }), t._v(" "), i("span", {
                    staticClass: "class-b-title"
                }, [t._v(t._s(t.chartName))]), t._v(" "), i("span", {
                    staticClass: "class-b-title-tips"
                }, [t._v(t._s(t.selectedTabName) + "总人数：" + t._s(t.totalCount) + "人")])]), t._v(" "), i("div", {
                    ref: "scoreGapChartContainer"
                }, [i("canvas", {
                    ref: "scoreGapChart"
                })]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowScoreTable,
                        expression: "isShowScoreTable"
                    }],
                    staticClass: "score-gap-cut-line-container"
                }, [i("div", {
                    staticClass: "score-gap-cut-line"
                }), t._v(" "), t._m(0)]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowScoreTable,
                        expression: "isShowScoreTable"
                    }]
                }, [i("table", {
                    staticClass: "score-gap-table"
                }, [t._m(1), t._v(" "), i("tr", {
                    staticClass: "class-score-gap-two-tr"
                }), t._v(" "), i("tr", [i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.later3Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.later3Score != t.defaultScoreTxt,
                        expression: "later3Score!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.later2Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.later2Score != t.defaultScoreTxt,
                        expression: "later2Score!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.later1Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.later1Score != t.defaultScoreTxt,
                        expression: "later1Score!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        color: "#57595D",
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.myScore))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.myScore != t.defaultScoreTxt,
                        expression: "myScore!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.before1Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.before1Score != t.defaultScoreTxt,
                        expression: "before1Score!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.before2Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.before2Score != t.defaultScoreTxt,
                        expression: "before2Score!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.before3Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.before3Score != t.defaultScoreTxt,
                        expression: "before3Score!=defaultScoreTxt"
                    }],
                    staticClass: "score-gap-table-td2-score"
                }, [t._v("分")])])])])])], 1)
            },
            staticRenderFns: [function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "score-gap-left-half-circle"
                }), this._v(" "), e("div", {
                    staticClass: "score-gap-right-half-circle"
                })])
            }
            , function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("tr", [i("td", {
                    staticClass: "score-gap-table-td1"
                }, [t._v("后3名")]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td1"
                }, [t._v("后2名")]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td1"
                }, [t._v("后1名")]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td2",
                    staticStyle: {
                        color: "#57595D",
                        "font-weight": "bold"
                    }
                }, [t._v("我")]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td1"
                }, [t._v("前1名")]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td1"
                }, [t._v("前2名")]), t._v(" "), i("td", {
                    staticClass: "score-gap-table-td1"
                }, [t._v("前3名")])])
            }
            ]
        };
        var At = i("VU/8")(Ct, wt, !1, function(t) {
            i("VHPX")
        }, null, null).exports
          , Tt = i("Zrlr")
          , It = i.n(Tt)
          , Mt = i("wxAW")
          , kt = i.n(Mt)
          , Dt = 10
          , Lt = function() {
            function t(e, i) {
                It()(this, t),
                this.wholeLevels = [],
                this.mainLevels = [],
                this.userLevelmap = {},
                this.offsetIdMap = {},
                this.mainItemValue = Dt,
                this.maxValue = 0,
                this.convertUserScoreLevel(e, i)
            }
            return kt()(t, [{
                key: "convertUserScoreLevel",
                value: function(t, e) {
                    var i = this;
                    this.cleanDatas();
                    var n = t.levelList
                      , r = t.dataList;
                    this.maxValue = this.mainItemValue * n.length;
                    for (var a = 0; a < n.length; a++) {
                        var s = {}
                          , o = n[a];
                        if (s.name = o.name,
                        e && "scoreValue" === e) {
                            var l = n[0].upperBound
                              , c = n[n.length - 1].lowBound
                              , u = o.upperBound - o.lowBound
                              , h = parseInt(u / (l - c) * 100);
                            s.progress = h
                        } else
                            s.progress = o.upperBound - o.lowBound;
                        (this.wholeLevels.push(o.name),
                        s.level = o.name,
                        s.value = this.maxValue - this.mainItemValue * (a + 1),
                        this.userLevelmap[o.name] = s.value),
                        this.mainLevels.push(s)
                    }
                    r.forEach(function(t) {
                        var e = t.improveBar.levelScale;
                        i.offsetIdMap[t.id] = Math.round(i.userLevelmap[e] + i.mainItemValue * t.improveBar.offset / 100)
                    })
                }
            }, {
                key: "cleanDatas",
                value: function() {
                    this.wholeLevels = [],
                    this.mainLevels = []
                }
            }, {
                key: "convertChildLevelsAndGetMaxLevel",
                value: function(t, e) {
                    if (!t || 0 === t.length)
                        return null;
                    for (var i = this.mainItemValue / t.length, n = 0; n < t.length; n++)
                        this.wholeLevels.push(t[n].name),
                        n < t.length - 1 ? this.userLevelmap[t[n].name] = this.maxValue - e - i * (n + 1) : this.userLevelmap[t[n].name] = this.maxValue - e - this.mainItemValue;
                    return this.wholeLevels[this.wholeLevels.length - 1]
                }
            }]),
            t
        }()
          , Pt = {
            name: "level-gap",
            components: {
                "switch-tab": z
            },
            props: {
                examId: {
                    type: String
                },
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String,
                    default: "00"
                }
            },
            data: function() {
                return {
                    defaultScoreTxt: "— —",
                    chartListData: null,
                    chart: null,
                    chartName: "",
                    selectedTabName: "",
                    totalCount: 0,
                    levelGapTitle: "",
                    levelGapSubTitle: "",
                    later3Score: "",
                    later2Score: "",
                    later1Score: "",
                    myScore: "",
                    before1Score: "",
                    before2Score: "",
                    before3Score: "",
                    tabInfo: [],
                    isShowScoreTable: !1,
                    levelGapRoot: null,
                    levelGapCanvas: null,
                    levelGapCanvasContainer: null,
                    scoreLevelConvert: {},
                    scoreTable: {}
                }
            },
            mounted: function() {
                this.levelGapRoot = this.$refs.levelGapRoot,
                this.levelGapCanvas = this.$refs.levelGapChart,
                this.levelGapCanvasContainer = this.$refs.levelGapChartContainer,
                this.requestData()
            },
            methods: {
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    "00" === t.subjectCode ? S.a.getAllLevelGap(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getAllLevelGap errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }) : (e.paperId = t.paperId,
                    S.a.getSingleLevelGap(e).then(function(e) {
                        0 === e.errorCode ? t.initData(e.result) : console.log("getSingleLevelGap errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }))
                },
                resetData: function() {
                    this.chartListData = [],
                    this.chartName = "",
                    this.selectedTabName = "",
                    this.totalCount = 0,
                    this.levelGapTitle = "",
                    this.levelGapSubTitle = "",
                    this.myScore = this.defaultScoreTxt,
                    this.later3Score = this.defaultScoreTxt,
                    this.later2Score = this.defaultScoreTxt,
                    this.later1Score = this.defaultScoreTxt,
                    this.before3Score = this.defaultScoreTxt,
                    this.before2Score = this.defaultScoreTxt,
                    this.before1Score = this.defaultScoreTxt,
                    this.tabInfo = []
                },
                initData: function(t) {
                    if (this.resetData(),
                    t && t.levelList && t.list) {
                        if ("string" == typeof t && (t = JSON.parse(t)),
                        this.convertTableDataByResult(t),
                        t.levelList && t.levelList.length > 0 && (this.scoreLevelConvert = new Lt(t.levelList)),
                        t.list && t.list.length > 0) {
                            this.tabInfo = [];
                            for (var e = t.list.length, i = 0; i < e; i++) {
                                var n = t.list[i];
                                if (n && n.tag) {
                                    n.list = this.prepareChartData(n.list);
                                    var r = n.tag.name;
                                    r && n.list && n.list.length > 0 && (this.tabInfo.push(r),
                                    this.chartListData.push(n))
                                }
                            }
                        }
                        this.chartName = t.chartName,
                        this.showNearby = t.showNearby,
                        this.chartListData && this.chartListData.length > 0 && this.onSelectedTabChange(0)
                    }
                },
                convertTableDataByResult: function(t) {
                    var e = this;
                    if (this.scoreTable.name = t.tableName,
                    t.tableDataList && t.tableDataList.length > 0) {
                        this.scoreTable.data = [];
                        for (var i = t.tableDataList[0].list.length, n = function(i) {
                            var n = {};
                            n.name = t.tableDataList[0].list[i].name;
                            var r = [];
                            for (var a in t.tableDataList) {
                                var s = {}
                                  , o = t.tableDataList[a];
                                s.category = o.tag.name,
                                s.value = "-";
                                var l = o.list.find(function(t) {
                                    return t.name === n.name
                                });
                                l && (s.value = l.value),
                                r.push(s)
                            }
                            n.list = r,
                            e.scoreTable.data.push(n)
                        }, r = 0; r < i; r++)
                            n(r)
                    }
                },
                prepareChartData: function(t) {
                    if (!t)
                        return t;
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t[i];
                        n && void 0 !== n.score && n.levelScale && ("等级" === n.levelScale ? n.levelValue = this.scoreLevelConvert.maxValue : n.levelValue = this.scoreLevelConvert.userLevelmap[n.levelScale],
                        void 0 !== n.levelValue && n.levelValue >= 0 && e.push(n))
                    }
                    return e
                },
                filterUndefinedChartData: function(t, e, i) {
                    if (!t)
                        return t;
                    for (var n = [], r = 0; r < t.length; r++) {
                        var a = t[r];
                        a && a.hasOwnProperty(e) && a.hasOwnProperty(i) && n.push(a)
                    }
                    return n
                },
                onTabSwitch: function(t) {
                    this.onSelectedTabChange(t)
                },
                onSelectedTabChange: function(t) {
                    var e = this.chartListData[t];
                    e.title && (this.levelGapTitle = e.title),
                    e.subtitle && (this.levelGapSubTitle = e.subtitle);
                    var i = e.list
                      , n = i.length;
                    this.myScore = this.defaultScoreTxt,
                    this.later3Score = this.defaultScoreTxt,
                    this.later2Score = this.defaultScoreTxt,
                    this.later1Score = this.defaultScoreTxt,
                    this.before3Score = this.defaultScoreTxt,
                    this.before2Score = this.defaultScoreTxt,
                    this.before1Score = this.defaultScoreTxt;
                    for (var r = 0; r < n; r++) {
                        var a = i[r];
                        "my" === a.tag && void 0 != a.score && null != a.score && a.score >= 0 && (this.myScore = a.score)
                    }
                    if (e.scoreBefore)
                        for (var s = e.scoreBefore.length, o = 0; o < s; o++) {
                            var l = e.scoreBefore[o];
                            void 0 == l.score || null == l.score || l.score < 0 || ("前3名" === l.title ? this.before3Score = l.score : "前2名" === l.title ? this.before2Score = l.score : "前1名" === l.title && (this.before1Score = l.score))
                        }
                    if (e.scoreAfter)
                        for (var c = e.scoreAfter.length, u = 0; u < c; u++) {
                            var h = e.scoreAfter[u];
                            void 0 == h.score || null == h.score || h.score < 0 || ("后3名" === h.title ? this.later3Score = h.score : "后2名" === h.title ? this.later2Score = h.score : "后1名" === h.title && (this.later1Score = h.score))
                        }
                    !this.showNearby || this.later3Score === this.defaultScoreTxt && this.later2Score === this.defaultScoreTxt && this.later1Score === this.defaultScoreTxt && this.before1Score === this.defaultScoreTxt && this.before2Score === this.defaultScoreTxt && this.before3Score === this.defaultScoreTxt ? this.isShowScoreTable = !1 : this.isShowScoreTable = !0,
                    this.selectedTabName = e.tag.name,
                    this.totalCount = e.totalNum;
                    var f = this;
                    new st.a(function(t, e) {
                        if (f.levelGapCanvasContainer.offsetWidth)
                            t();
                        else
                            var i = window.setInterval(function() {
                                f.levelGapCanvasContainer.offsetWidth && (window.clearInterval(i),
                                t())
                            }, 200)
                    }
                    ).then(function(t) {
                        f.drawChart(i)
                    })
                },
                getMinScore: function(t) {
                    if (t && t.length > 0) {
                        for (var e = t.length, i = t[0].score, n = 1; n < e; n++) {
                            var r = t[n].score;
                            i > r && (i = r)
                        }
                        return i
                    }
                    return 0
                },
                getMaxScore: function(t) {
                    if (t && t.length > 0) {
                        for (var e = t.length, i = t[0].score, n = 1; n < e; n++) {
                            var r = t[n].score;
                            i < r && (i = r)
                        }
                        return i
                    }
                    return 0
                },
                initChart: function() {
                    var t = this.levelGapCanvas.getContext("2d");
                    this.levelGapCanvasContainer.offsetWidth > 0 && (window.report_body_canvas_real_width = this.levelGapCanvasContainer.offsetWidth);
                    var e = window.report_body_canvas_real_width
                      , i = .25 * window.report_body_canvas_real_width;
                    e && i || (e = .65 * window.innerWidth,
                    i = .2 * window.innerWidth),
                    this.chart = new Y.a.Chart({
                        el: this.levelGapCanvas,
                        width: e,
                        height: i,
                        pixelRatio: window.devicePixelRatio,
                        padding: [4, 0, "auto", 0]
                    }),
                    this.chart.tooltip(!1),
                    this.chart.axis("levelValue", {
                        line: null,
                        label: {
                            fill: "#A5A9AF",
                            fontSize: 12
                        },
                        grid: {
                            lineDash: null,
                            stroke: "#F5F5F5",
                            lineWidth: 1
                        }
                    });
                    var n = t.createLinearGradient(0, 0, e, 0);
                    n.addColorStop(0, "#ffffff"),
                    n.addColorStop(.1, "#EDEDED"),
                    n.addColorStop(.5, "#F1F1F1"),
                    n.addColorStop(.9, "#EDEDED"),
                    n.addColorStop(1, "#ffffff"),
                    this.chart.axis("score", {
                        label: function(t, e, i) {
                            var n = {
                                fill: "#A5A9AF",
                                textBaseline: "top",
                                fontSize: 12,
                                textAlign: "right"
                            };
                            return n.opacity = 0 === e ? 0 : 1,
                            n
                        },
                        labelOffset: -6,
                        position: "right",
                        grid: {
                            lineDash: null,
                            stroke: n,
                            lineWidth: 1
                        }
                    })
                },
                drawChart: function(t) {
                    var e = this.levelGapCanvasContainer.getElementsByClassName("guideWapper");
                    if (e)
                        for (; e.length > 0; )
                            e[0].remove();
                    var i = !0;
                    if (this.chart ? (i = !1,
                    this.chart.guide().clear(),
                    this.chart.clear()) : (i = !0,
                    this.initChart()),
                    t && 0 !== t.length && 0 !== this.scoreLevelConvert.userLevelmap.length) {
                        var n = t.length
                          , r = this.getMinScore(t)
                          , a = this.getMaxScore(t);
                        r -= r % 10,
                        a = a - a % 10 + 10;
                        for (var s = 0, o = 0; o < n; o++)
                            "my" === t[o].tag && (s = t[o].score);
                        if (a > r && a > s)
                            for (var l = (a - s) / (a - r); l < .1; )
                                l = ((a += 10) - s) / (a - r);
                        var c = this;
                        this.chart.source(t, {
                            levelValue: {
                                type: "linear",
                                range: [.1, .9],
                                max: c.scoreLevelConvert.maxValue,
                                min: 0,
                                tickCount: c.scoreLevelConvert.mainLevels.length + 1,
                                formatter: function(t) {
                                    if (t === c.scoreLevelConvert.maxValue)
                                        return "等级";
                                    var e = c.scoreLevelConvert.mainLevels.find(function(e) {
                                        return e.value === t
                                    });
                                    return e ? e.name : ""
                                }
                            },
                            score: {
                                type: "linear",
                                tickCount: 7,
                                max: a,
                                min: r,
                                nice: !0,
                                formatter: function(t) {
                                    return parseInt(t)
                                }
                            }
                        });
                        var u = this.levelGapCanvas.getContext("2d").createLinearGradient(0, 0, window.innerWidth, 0);
                        u.addColorStop(.1, "#0DC2B3"),
                        u.addColorStop(.5, "#2FD2E7"),
                        u.addColorStop(.9, "#3DEA95"),
                        this.chart.line().position("levelValue*score").color(u).style({
                            lineWidth: 3
                        }).shape("smooth"),
                        this.chart.point().position("levelValue*score").size("tag", function(t) {
                            return "target" === t ? 5 : "max" === t || "min" === t ? 0 : 3
                        }).style("tag", {
                            fill: "#FFFFFF",
                            stroke: function(t) {
                                return "target" === t ? "l(90) 0:#FFDC66 1:#FFB636" : "#2BCFE0"
                            },
                            lineWidth: function(t) {
                                return "target" === t ? 3 : 2
                            }
                        });
                        for (var h = null, f = null, d = 0; d < n; d++) {
                            var p = t[d]
                              , v = parseFloat(t[d].score);
                            v = Math.round(100 * v) / 100,
                            "my" === p.tag && p.score >= 0 ? (h = p,
                            this.chart.guide().html({
                                position: [p.levelValue, p.score],
                                html: '<div class="level-gap-popup"><span><em></em></span>我 ' + p.levelScale + "(" + v + "分)</div>",
                                alignX: "right",
                                alignY: "bottom",
                                offsetY: -10,
                                offsetX: 0
                            })) : "target" === p.tag && p.score >= 0 ? (f = p,
                            this.chart.guide().html({
                                position: [p.levelValue, p.score],
                                html: '<div class="level-gap-target-score" id="levelGapTargetScoreId">' + p.levelScale + "(" + v + "分)</div>",
                                alignX: "right",
                                alignY: "bottom",
                                offsetY: -10,
                                offsetX: 0
                            })) : p.levelScale && p.score >= 0 && "level" === p.tag && this.chart.guide().html({
                                position: [p.levelValue, p.score],
                                html: '<div class="level-gap-default-score">' + p.levelScale + "</div>",
                                alignX: "right",
                                alignY: "bottom",
                                offsetY: -5,
                                offsetX: 0
                            })
                        }
                        i ? this.chart.render() : this.chart.repaint();
                        var g = null;
                        h && (g = this.chart.getPosition(h));
                        var m = null;
                        if (f && (m = this.chart.getPosition(f)),
                        g && m && g.y - m.y < 24 && m.x - g.x < 60) {
                            var y = g.y - m.y - 24
                              , x = this.levelGapRoot.getElementsByClassName("level-gap-target-score")[0];
                            x.style.top = parseInt(x.style.top) + y + "px"
                        }
                    }
                }
            }
        }
          , Nt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tabInfo.length,
                        expression: "tabInfo.length"
                    }],
                    ref: "levelGapRoot",
                    staticClass: "container-backgrounde"
                }, [i("h2", {
                    staticClass: "class-a-title"
                }, [t._v(t._s(t.levelGapTitle))]), t._v(" "), t.levelGapSubTitle ? i("div", {
                    staticClass: "class-a-title-tips"
                }, [t._v(t._s(t.levelGapSubTitle))]) : t._e(), t._v(" "), i("switch-tab", {
                    attrs: {
                        tabs: t.tabInfo
                    },
                    on: {
                        "on-tab-switch": t.onTabSwitch
                    }
                }), t._v(" "), i("div", {
                    staticClass: "class-b-container"
                }, [i("span", {
                    staticClass: "class-b-icon"
                }), t._v(" "), i("span", {
                    staticClass: "class-b-title"
                }, [t._v(t._s(t.chartName))]), t._v(" "), i("span", {
                    staticClass: "class-b-title-tips"
                }, [t._v(t._s(t.selectedTabName) + "总人数：" + t._s(t.totalCount) + "人")])]), t._v(" "), i("div", {
                    ref: "levelGapChartContainer"
                }, [i("canvas", {
                    ref: "levelGapChart"
                })]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowScoreTable,
                        expression: "isShowScoreTable"
                    }],
                    staticClass: "level-gap-cut-line-container"
                }, [i("div", {
                    staticClass: "level-gap-cut-line"
                }), t._v(" "), t._m(0)]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowScoreTable,
                        expression: "isShowScoreTable"
                    }]
                }, [i("table", {
                    staticClass: "level-gap-table"
                }, [t._m(1), t._v(" "), i("tr", {
                    staticClass: "class-level-gap-two-tr"
                }), t._v(" "), i("tr", [i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.later3Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.later3Score != t.defaultScoreTxt,
                        expression: "later3Score!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.later2Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.later2Score != t.defaultScoreTxt,
                        expression: "later2Score!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.later1Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.later1Score != t.defaultScoreTxt,
                        expression: "later1Score!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        color: "#57595D",
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.myScore))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.myScore != t.defaultScoreTxt,
                        expression: "myScore!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.before1Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.before1Score != t.defaultScoreTxt,
                        expression: "before1Score!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.before2Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.before2Score != t.defaultScoreTxt,
                        expression: "before2Score!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [i("span", [t._v(t._s(t.before3Score))]), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.before3Score != t.defaultScoreTxt,
                        expression: "before3Score!=defaultScoreTxt"
                    }],
                    staticClass: "level-gap-table-td2-score"
                }, [t._v("分")])])])])]), t._v(" "), i("div", [void 0 !== t.scoreTable.data && t.scoreTable.data.length > 0 ? i("div", [i("table", {
                    staticClass: "scote-table"
                }, [i("tr", [i("td", {
                    staticClass: "scote-table-title",
                    domProps: {
                        textContent: t._s(t.scoreTable.name)
                    }
                }), t._v(" "), t._l(t.scoreTable.data[0].list, function(e, n) {
                    return i("td", {
                        key: n,
                        staticClass: "scote-table-title",
                        domProps: {
                            textContent: t._s(e.category)
                        }
                    })
                })], 2), t._v(" "), t._l(t.scoreTable.data, function(e, n) {
                    return i("tr", {
                        key: n
                    }, [i("td", {
                        staticClass: "scote-table-title",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), t._v(" "), t._l(e.list, function(e, n) {
                        return i("td", {
                            key: n,
                            domProps: {
                                textContent: t._s(e.value)
                            }
                        })
                    })], 2)
                })], 2)]) : t._e()])], 1)
            },
            staticRenderFns: [function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "level-gap-left-half-circle"
                }), this._v(" "), e("div", {
                    staticClass: "level-gap-right-half-circle"
                })])
            }
            , function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("tr", [i("td", {
                    staticClass: "level-gap-table-td1"
                }, [t._v("后3名")]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td1"
                }, [t._v("后2名")]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td1"
                }, [t._v("后1名")]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td2",
                    staticStyle: {
                        color: "#57595D",
                        "font-weight": "bold"
                    }
                }, [t._v("我")]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td1"
                }, [t._v("前1名")]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td1"
                }, [t._v("前2名")]), t._v(" "), i("td", {
                    staticClass: "level-gap-table-td1"
                }, [t._v("前3名")])])
            }
            ]
        };
        var jt = i("VU/8")(Pt, Nt, !1, function(t) {
            i("j1+R")
        }, null, null).exports
          , Ft = i("9RkD")
          , Ot = i.n(Ft)
          , Et = {
            name: "intelligent-composition",
            props: {
                paperId: {
                    type: String,
                    default: ""
                },
                subjectCode: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    showModule: !1,
                    myName: "我的",
                    topStudent: "学霸",
                    bannerImage: Ot.a,
                    radaData: [],
                    resultData: []
                }
            },
            created: function() {
                this.requestData()
            },
            computed: {},
            methods: {
                requestData: function() {
                    var t = this
                      , e = {
                        paperId: t.paperId
                    };
                    S.a.getIntelligentWriteAbility(e).then(function(e) {
                        0 === e.errorCode ? e.result ? t.configDatas(e.result) : t.showModule = !1 : console.log("getIntelligentWriteAbility errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                configDatas: function(t) {
                    "string" == typeof t && (t = JSON.parse(t));
                    var e = {
                        wordFea: "词汇词组",
                        sentFea: "语句语法",
                        paperFea: "篇章结构",
                        contentFea: "相关内容"
                    }
                      , i = this;
                    if (i.resultData = [],
                    i.radaData = [],
                    t.writeAbilityResult) {
                        for (var n in e) {
                            var r = e[n]
                              , a = {};
                            a.item = r,
                            a.user = i.myName,
                            a.score = t.writeAbilityResult.selfScore[n],
                            i.radaData.push(a);
                            var s = {};
                            s.item = r,
                            s.user = i.topStudent,
                            s.score = t.writeAbilityResult.topScore[n],
                            i.radaData.push(s);
                            var o = {};
                            o.title = r,
                            o.subTitle = t.writeAbilityResult.writeAnaReview[n],
                            i.resultData.push(o)
                        }
                        i.radaData.length > 0 && (i.showModule = !0,
                        i.$nextTick(function() {
                            i.drawRada(i.radaData)
                        }))
                    }
                },
                showMoreDetail: function() {
                    Object({
                        NODE_ENV: "production",
                        TIMEOUT: 5e3,
                        ACTION_LOG_ENV: "pro",
                        ACTION_LOG_EQU: "web",
                        LEVEL_DEFINITION: "https://static.zhixue.com/activity/app/scorelevel-help/index.html"
                    }).WEB_APP_BASE,
                    this.paperId
                },
                onClickBanner: function() {
                    Object({
                        NODE_ENV: "production",
                        TIMEOUT: 5e3,
                        ACTION_LOG_ENV: "pro",
                        ACTION_LOG_EQU: "web",
                        LEVEL_DEFINITION: "https://static.zhixue.com/activity/app/scorelevel-help/index.html"
                    }).WEB_APP_BASE
                },
                drawRada: function(t) {
                    var e = this
                      , i = this.$refs.compositionRadarDiv.offsetWidth;
                    (i <= 0 || void 0 === i) && (i = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 40);
                    var n = new Y.a.Chart({
                        el: e.$refs.compositionRadar,
                        width: i,
                        height: i,
                        pixelRatio: window.devicePixelRatio,
                        padding: 80
                    });
                    n.coord("polar"),
                    n.source(t, {
                        score: {
                            min: 0,
                            max: 100,
                            nice: !1,
                            tickCount: 7
                        }
                    }),
                    n.tooltip(!1),
                    n.legend({
                        marker: function(t, e, i, n) {
                            n.lineWidth = 5,
                            n.strokeStyle = n.fillStyle,
                            n.moveTo(t - 6 - 4, e),
                            n.lineTo(t + 6 + 4, e),
                            n.stroke(),
                            n.arc(t, e, 6, 0, 2 * Math.PI, !1),
                            n.arc(t - 4 - 6, e, 2.5, 0, 2 * Math.PI, !1),
                            n.arc(t + 4 + 6, e, 2.5, 0, 2 * Math.PI, !1),
                            n.fill()
                        },
                        align: "center",
                        position: "bottom",
                        itemWidth: 100,
                        wordSpace: 20,
                        clickable: !1,
                        titleStyle: {
                            textAlign: "center",
                            fill: "#A5A9AF",
                            fontSize: 12,
                            textBaseline: "middle"
                        }
                    }),
                    n.axis("item", {
                        label: function(t, e, i) {
                            var n = {
                                fill: "#57595D",
                                fontSize: "14"
                            };
                            return n.textBaseline = 0 === e ? "bottom" : 2 === e ? "top" : "middle",
                            n.text = t,
                            n
                        },
                        grid: function(t, e) {
                            return {
                                stroke: "#DEE1E5",
                                lineDash: null,
                                lineWidth: 0
                            }
                        }
                    }),
                    n.axis("score", {
                        label: function(t, e, i) {
                            return null
                        },
                        grid: function(t) {
                            return {
                                stroke: "#DEE1E5",
                                lineDash: null,
                                lineWidth: .7
                            }
                        },
                        line: {
                            lineWidth: 0,
                            stroke: "#DEE1E5",
                            lineDash: null
                        }
                    }),
                    n.line().position("item*score").color("user", function(t) {
                        return t == e.myName ? "#FCA205" : "#2675D8"
                    }).style("user", {
                        lineDash: function(t) {
                            return null
                        },
                        lineWidth: function(t) {
                            return 2
                        }
                    }),
                    n.point().position("item*score").color("user", function(t) {
                        return t == e.myName ? "#FCA205" : "#2675D8"
                    }).style({
                        stroke: "#fff",
                        lineWidth: 1
                    }).style("user", {
                        stroke: "#fff",
                        opacity: function(t) {
                            return 1
                        }
                    }).shape("user", function(t) {
                        return "circle"
                    }).size(4),
                    n.render()
                }
            }
        }
          , Xt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.showModule ? i("div", {
                    staticClass: "intelligent-composition container-backgrounde"
                }, [t._m(0), t._v(" "), i("div", {
                    ref: "compositionRadarDiv",
                    attrs: {
                        calss: "composition-rada-div"
                    }
                }, [i("canvas", {
                    ref: "compositionRadar"
                })]), t._v(" "), t._l(t.resultData, function(e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "content"
                    }, [i("div", {
                        staticClass: "composition-sub-title"
                    }, [i("span", [t._v(t._s(e.title))])]), t._v(" "), i("div", {
                        staticClass: "composition-sub-tips"
                    }, [i("span", [t._v(t._s(e.subTitle))])])])
                }), t._v(" "), i("button", {
                    staticClass: "detail-button class_button",
                    on: {
                        click: t.showMoreDetail
                    }
                }, [t._v("点击查看更详尽的报告内容")]), t._v(" "), i("div", {
                    staticClass: "composition-banner"
                }, [i("img", {
                    attrs: {
                        src: t.bannerImage,
                        alt: "图片加载失败"
                    },
                    on: {
                        click: t.onClickBanner
                    }
                })])], 2) : t._e()
            },
            staticRenderFns: [function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                    staticClass: "class-a-title"
                }, [e("span", [this._v("查看作文分析，获取精细批改")])])
            }
            ]
        };
        var Rt = i("VU/8")(Et, Xt, !1, function(t) {
            i("Cfmh")
        }, null, null).exports
          , Bt = {
            name: "no-vip",
            props: {
                index: {
                    type: Number
                },
                showHeader: {
                    type: Boolean,
                    default: !0
                },
                topTitle: {
                    type: String
                },
                description: {
                    type: String
                },
                thumbnail: {
                    type: String
                }
            },
            data: function() {
                return {
                    headerTitle: "开通个性化学习套餐，深度诊断学情",
                    label: "分析样例"
                }
            }
        }
          , Yt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "container-backgrounde-blank"
                }, [t.showHeader ? i("div", {
                    staticClass: "header"
                }, [t._v("\n    " + t._s(t.headerTitle) + "\n  ")]) : t._e(), t._v(" "), i("div", {
                    staticClass: "nonvip-content"
                }, [i("div", {
                    staticClass: "inner-content content-left"
                }, [i("div", {
                    staticClass: "title",
                    domProps: {
                        textContent: t._s(t.topTitle)
                    }
                }), t._v(" "), i("div", {
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.description)
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "inner-content content-right"
                }, [i("div", {
                    staticClass: "thumbnail-label",
                    domProps: {
                        textContent: t._s(t.label)
                    }
                }), t._v(" "), i("img", {
                    attrs: {
                        src: t.thumbnail,
                        alt: "图片加载失败"
                    }
                })])])])
            },
            staticRenderFns: []
        };
        var Wt = i("VU/8")(Bt, Yt, !1, function(t) {
            i("sg7M")
        }, null, null).exports
          , zt = {
            name: "three-plus-x",
            props: ["examId", "paperId", "subjectCode"],
            data: function() {
                return {
                    spaceTime: 300,
                    scrollFlag: "",
                    throttleFlag: !1,
                    moduleName: "threePluxX",
                    textList: {
                        title: ""
                    },
                    rowDatas: [],
                    columnDatas: []
                }
            },
            created: function() {
                this.getCacheData()
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.tableScroll()
                })
            },
            methods: {
                tableScroll: function() {
                    var t = this
                      , e = this.$refs.tableContainer.scrollLeft
                      , i = this.$refs.tableContainer.scrollWidth
                      , n = this.$refs.tableContainer.clientWidth;
                    0 !== e && e + n !== i || (t.throttleFlag = !1),
                    t.throttleFlag || (this.scrollFlag = 0 === e ? e + n !== i ? "left" : "" : e + n === i ? "right" : "mid",
                    t.throttleFlag = !0,
                    setTimeout(function() {
                        t.throttleFlag = !1
                    }, t.spaceTime))
                },
                transfromRatio: function(t, e) {
                    var i = this.rowDatas[e][t];
                    return 0 === i && "scoreLevel" !== t ? "前1%" : -1 === parseInt(i) ? "-" : +i && "scoreLevel" !== t ? "前" + i + "%" : i
                },
                getCacheData: function() {
                    this.updateThreePlusData()
                },
                updateThreePlusData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    S.a.getThreePlusXList(e).then(function(e) {
                        if (0 === e.errorCode) {
                            if (t.textList.title = e.result.title,
                            !e.result.rowDatas)
                                return;
                            t.rowDatas = e.result.rowDatas,
                            t.columnDatas = e.result.columnDatas
                        } else
                            console.log("getThreePlusXList errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                }
            }
        }
          , Gt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        id: "threePlusX"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.rowDatas.length,
                        expression: "rowDatas.length"
                    }],
                    staticClass: "container-backgrounde"
                }, [i("div", {
                    staticClass: "class-a-title",
                    domProps: {
                        textContent: t._s(t.textList.title)
                    }
                }), t._v(" "), i("div", {
                    staticClass: "table-container"
                }, [i("div", {
                    staticClass: "column-con"
                }, [i("ul", {
                    staticClass: "subject-column"
                }, [i("li", [t._v("科目")]), t._v(" "), t._l(t.rowDatas, function(e, n) {
                    return i("li", {
                        key: n,
                        domProps: {
                            textContent: t._s(e.subjectName)
                        }
                    })
                })], 2)]), t._v(" "), i("div", {
                    ref: "tableContainer",
                    staticClass: "t-fixed",
                    class: {
                        current: "left" === t.scrollFlag,
                        current2: "right" === t.scrollFlag,
                        current3: "mid" === t.scrollFlag
                    },
                    on: {
                        scroll: function(e) {
                            return t.tableScroll()
                        }
                    }
                }, [i("div", {
                    staticClass: "other-column"
                }, [i("table", [i("thead", [i("tr", t._l(t.columnDatas, function(e, n) {
                    return n > 0 ? i("th", {
                        key: n,
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }) : t._e()
                }), 0)]), t._v(" "), i("tbody", t._l(t.rowDatas, function(e, n) {
                    return i("tr", {
                        key: n
                    }, t._l(t.columnDatas, function(e, r) {
                        return r > 0 ? i("td", {
                            key: r,
                            domProps: {
                                textContent: t._s(t.transfromRatio(e.code, n))
                            }
                        }) : t._e()
                    }), 0)
                }), 0)])])])])])])
            },
            staticRenderFns: []
        };
        var Vt = i("VU/8")(zt, Gt, !1, function(t) {
            i("vonB")
        }, null, null).exports
          , Ut = {
            name: "three-plus-x-level",
            props: ["examId", "paperId", "subjectCode"],
            data: function() {
                return {
                    spaceTime: 300,
                    scrollFlag: "",
                    throttleFlag: !1,
                    moduleName: "threePluxXLevel",
                    textList: {
                        title: ""
                    },
                    rowDatas: [],
                    columnDatas: []
                }
            },
            created: function() {
                this.getThreePlusLevelData()
            },
            mounted: function() {
                var t = this;
                t.$nextTick(function() {
                    t.tableScroll()
                })
            },
            methods: {
                tableScroll: function() {
                    var t = this
                      , e = this.$refs.tableContainer.scrollLeft
                      , i = this.$refs.tableContainer.scrollWidth
                      , n = this.$refs.tableContainer.clientWidth;
                    0 !== e && e + n !== i || (t.throttleFlag = !1),
                    t.throttleFlag || (this.scrollFlag = 0 === e ? e + n !== i ? "left" : "" : e + n === i ? "right" : "mid",
                    t.throttleFlag = !0,
                    setTimeout(function() {
                        t.throttleFlag = !1
                    }, t.spaceTime))
                },
                getThreePlusLevelData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    S.a.getThreePlusXLevel(e).then(function(e) {
                        0 === e.errorCode ? t.dataDeal(e.result) : console.log("getThreePlusXLevel errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                dataDeal: function(t) {
                    this.textList.title = t.title,
                    t.rowDatas && (this.rowDatas = t.rowDatas,
                    this.columnDatas = t.columnDatas)
                }
            }
        }
          , Ht = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        id: "threePlusXGrade"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.rowDatas.length,
                        expression: "rowDatas.length"
                    }],
                    staticClass: "container-backgrounde"
                }, [i("div", {
                    staticClass: "class-a-title",
                    domProps: {
                        textContent: t._s(t.textList.title)
                    }
                }), t._v(" "), i("div", {
                    staticClass: "grade-table-container"
                }, [i("div", {
                    staticClass: "column-first"
                }, [i("ul", {
                    staticClass: "subjects-column"
                }, [i("li", [t._v("科目")]), t._v(" "), t._l(t.rowDatas, function(e, n) {
                    return i("li", {
                        key: n,
                        domProps: {
                            textContent: t._s(e.subjectName)
                        }
                    })
                })], 2)]), t._v(" "), i("div", {
                    ref: "tableContainer",
                    staticClass: "table-fixed",
                    class: {
                        shadow: "left" === t.scrollFlag,
                        shadow2: "right" === t.scrollFlag,
                        shadow3: "mid" === t.scrollFlag
                    },
                    on: {
                        scroll: function(e) {
                            return t.tableScroll()
                        }
                    }
                }, [i("div", {
                    staticClass: "other-columns"
                }, [i("table", [i("thead", [i("tr", t._l(t.columnDatas, function(e, n) {
                    return n > 0 ? i("th", {
                        key: n,
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }) : t._e()
                }), 0)]), t._v(" "), i("tbody", t._l(t.rowDatas, function(e, n) {
                    return i("tr", {
                        key: n
                    }, t._l(t.columnDatas, function(n, r) {
                        return r > 0 ? i("td", {
                            key: r,
                            domProps: {
                                textContent: t._s(e[n.code])
                            }
                        }) : t._e()
                    }), 0)
                }), 0)])])])])])])
            },
            staticRenderFns: []
        };
        var qt = i("VU/8")(Ut, Ht, !1, function(t) {
            i("aj+q")
        }, null, null).exports
          , Jt = {
            name: "score-comparison",
            props: ["examId"],
            data: function() {
                return {
                    moduleName: "scoreComparison",
                    moduleShow: !1,
                    scoreData: "",
                    showData: "",
                    columnMeta: "",
                    throttleFlag: !1,
                    scrollFlag: "",
                    spaceTime: 300
                }
            },
            created: function() {
                this.getScoreContrastData()
            },
            mounted: function() {},
            methods: {
                tableScroll: function() {
                    var t = this
                      , e = this.$refs.tableContainer.scrollLeft
                      , i = this.$refs.tableContainer.scrollWidth
                      , n = this.$refs.tableContainer.clientWidth;
                    0 !== e && e + n !== i || (t.throttleFlag = !1),
                    t.throttleFlag || (this.scrollFlag = 0 === e ? e + n !== i ? "mid" : "" : e + n === i ? "right" : "mid",
                    t.throttleFlag = !0,
                    setTimeout(function() {
                        t.throttleFlag = !1
                    }, t.spaceTime))
                },
                getScoreContrastData: function() {
                    var t = this
                      , e = {
                        examId: t.examId
                    };
                    S.a.getScoreContrast(e).then(function(e) {
                        if (0 === e.errorCode) {
                            var i = e.result;
                            0 !== i.dataList.length && (t.moduleShow = !0,
                            t.scoreData = i,
                            t.columnMeta = i.dataList[0].columnMeta,
                            t.dataDeal(0))
                        } else
                            console.log("getScoreContrast errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    })
                },
                dataDeal: function(t) {
                    var e = this;
                    this.showData = this.scoreData.dataList[t];
                    for (var i = 0, n = this.showData.columnDatas.length; i < n; i++) {
                        var r = this.showData.columnDatas[i];
                        for (var a in r)
                            r[a] || 0 === r[a] || (r[a] = "--")
                    }
                    setTimeout(function() {
                        e.tableScroll()
                    }, 0)
                }
            }
        }
          , Zt = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return t.moduleShow ? i("div", {
                    staticClass: "container-backgrounde"
                }, [i("div", {
                    staticClass: "class-a-title",
                    domProps: {
                        textContent: t._s(t.scoreData.title)
                    }
                }), t._v(" "), t.scoreData.subtitle ? i("p", {
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.scoreData.subtitle)
                    }
                }) : t._e(), t._v(" "), i("div", [i("div", {
                    staticClass: "switch_tab"
                }, t._l(t.scoreData.dataList, function(e, n) {
                    return i("span", {
                        class: {
                            border: n !== t.scoreData.dataList.length - 1,
                            current: e.tag.code === t.showData.tag.code
                        },
                        domProps: {
                            textContent: t._s(e.tag.name)
                        },
                        on: {
                            click: function(e) {
                                return t.dataDeal(n)
                            }
                        }
                    })
                }), 0), t._v(" "), i("div", {
                    staticStyle: {
                        margin: "10px 0px"
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "contrast-table",
                    class: {
                        current: "mid" === t.scrollFlag
                    }
                }, [i("div", {
                    staticClass: "column-left clearfix"
                }, [i("ul", {
                    staticClass: "column",
                    class: {
                        shadow: "" !== t.scrollFlag
                    }
                }, t._l(t.columnMeta, function(e, n) {
                    return i("li", {
                        key: n,
                        class: {
                            "my-score": "myScore" === e.code
                        },
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    })
                }), 0)]), t._v(" "), i("div", {
                    ref: "tableContainer",
                    staticClass: "column-content"
                }, [i("table", [i("thead", [i("tr", t._l(t.showData.columnDatas, function(e, n) {
                    return i("th", {
                        key: n,
                        domProps: {
                            textContent: t._s(e.subjectName)
                        }
                    })
                }), 0)]), t._v(" "), i("tbody", t._l(t.columnMeta, function(e, n) {
                    return n > 0 ? i("tr", {
                        key: n
                    }, t._l(t.showData.columnDatas, function(r, a) {
                        return n > 0 ? i("td", {
                            key: a,
                            class: {
                                "my-score": "myScore" === e.code
                            },
                            domProps: {
                                textContent: t._s(r[e.code])
                            }
                        }) : t._e()
                    }), 0) : t._e()
                }), 0)])])])]) : t._e()
            },
            staticRenderFns: []
        };
        var Kt = i("VU/8")(Jt, Zt, !1, function(t) {
            i("a/Cm")
        }, null, null).exports
          , Qt = i("vTa7")
          , $t = i("zpBo")
          , te = i.n($t)
          , ee = i("KqW/")
          , ie = i.n(ee)
          , ne = i("Oll4")
          , re = i.n(ne)
          , ae = i("KTGR")
          , se = i.n(ae)
          , oe = i("RVLM")
          , le = i.n(oe)
          , ce = i("ymqN")
          , ue = {
            name: "scoreLevelChange",
            components: {
                "report-gener-time": ce.a,
                "switch-tab": z
            },
            props: {
                examId: {
                    type: String
                },
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String,
                    default: "00"
                }
            },
            data: function() {
                return {
                    chartListData: [],
                    chart: null,
                    chartName: "",
                    selectedTabName: "",
                    tag: {},
                    selectedExamName: "\t",
                    totalCount: 0,
                    scoreLevelTitle: "",
                    scoreLevelSubTitle: "",
                    tabInfo: [],
                    defaultSelectedPoints: new lt.a,
                    reference: {},
                    improveBar: {},
                    rootElement: null,
                    canvasElement: null,
                    canvasContainerElement: null,
                    imgList: {
                        fastDown: te.a,
                        fastUp: ie.a,
                        slowDown: re.a,
                        slowUp: se.a,
                        steady: le.a
                    },
                    scoreLevelConvert: {},
                    examinationType: 1,
                    scoreLevelType: "",
                    beginTime: "",
                    endTime: "",
                    isLinkage: !0
                }
            },
            mounted: function() {
                this.rootElement = this.$refs.scoreLevelRoot,
                this.canvasElement = this.$refs.scoreLevelChart,
                this.canvasContainerElement = this.$refs.scoreLevelChartContainer,
                this.requestData()
            },
            methods: {
                handleDateChange: function(t, e, i) {
                    this.beginTime = t,
                    this.endTime = e,
                    this.requestData()
                },
                requestData: function() {
                    var t = this
                      , e = {
                        examId: t.examId,
                        pageIndex: 1,
                        pageSize: 5
                    };
                    t.beginTime && t.endTime && (e.startSchoolYear = t.beginTime,
                    e.endSchoolYear = t.endTime),
                    "00" === t.subjectCode ? S.a.getAllScoreLevelChange(e).then(function(e) {
                        0 === e.errorCode ? (t.scoreLevelType = e.result.scoreLevelType,
                        t.initData(e.result)) : console.log("getAllScoreLevelChange errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }) : (e.paperId = t.paperId,
                    S.a.getSinglePaperScoreLevelChange(e).then(function(e) {
                        0 === e.errorCode ? (t.scoreLevelType = e.result.scoreLevelType,
                        t.initData(e.result)) : console.log("getSinglePaperScoreLevelChange errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo)
                    }))
                },
                onReferenceClick: function() {
                    this.reference.linkUrl && this.$emit("levelChangeDlg", this.reference.linkUrl + "?examId=" + this.examId + "&token=" + Qt.default.getItem("xToken") + "&subjectCode=" + this.subjectCode + "&code=" + this.tag.code + "&number=" + this.totalCount)
                },
                prepareChartData: function(t) {
                    if (!t)
                        return t;
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t[i];
                        n && n.id && n.level && (n.levelValue = this.scoreLevelConvert.offsetIdMap[n.id],
                        void 0 != n.levelValue && n.levelValue >= 0 && e.push(n))
                    }
                    return e
                },
                filterUndefinedChartData: function(t, e, i) {
                    if (!t)
                        return t;
                    for (var n = [], r = 0; r < t.length; r++) {
                        var a = t[r];
                        a && a.hasOwnProperty(e) && a.hasOwnProperty(i) && n.push(a)
                    }
                    return n
                },
                resetData: function() {
                    this.chartListData = [],
                    this.chartName = "",
                    this.reference = {},
                    this.selectedTabName = "",
                    this.tag = {},
                    this.selectedExamName = "",
                    this.totalCount = 0,
                    this.scoreLevelTitle = "",
                    this.scoreLevelSubTitle = "",
                    this.tabInfo = [],
                    this.defaultSelectedPoints = new lt.a,
                    this.isShowImproveBar = !1,
                    this.scoreLevelRunningTitle = null,
                    this.scoreLevelRunningIcon = null,
                    this.improveBar = {},
                    this.improveBar.sectionData = []
                },
                initData: function(t) {
                    if (this.resetData(),
                    t && t.list) {
                        if ("string" == typeof t && (t = JSON.parse(t)),
                        this.examinationType = t.examinationType,
                        t.list && t.list.length > 0) {
                            this.tabInfo = [];
                            for (var e = t.list.length, i = 0; i < e; i++) {
                                var n = t.list[i];
                                if (n.tag) {
                                    n.levelList && n.levelList.length > 0 && (this.scoreLevelConvert = new Lt(n,this.scoreLevelType),
                                    this.improveBar.sectionData = this.scoreLevelConvert.mainLevels.reverse());
                                    var r = this.prepareChartData(n.dataList);
                                    n.dataList = r;
                                    var a = n.tag.name;
                                    a && n.dataList && n.dataList.length > 0 && (this.tabInfo.push(a),
                                    this.chartListData.push(n))
                                }
                            }
                        }
                        this.chartName = t.chartName,
                        this.tabInfo && this.tabInfo.length > 0 && this.onSelectedTabChange(0)
                    }
                },
                onTabSwitch: function(t) {
                    this.onSelectedTabChange(t)
                },
                onSelectedTabChange: function(t) {
                    if (0 !== this.chartListData.length) {
                        var e = this.chartListData[t];
                        if (this.totalCount = this.chartListData[t].totalNum ? this.chartListData[t].totalNum : 0,
                        this.$store.commit("totalCount", this.totalCount),
                        e.reference && e.reference.linkUrl && this.$store.commit("linkUrl", e.reference.linkUrl),
                        e && e.levelList) {
                            this.scoreLevelTitle = e.title,
                            e.subtitle && (this.scoreLevelSubTitle = e.subtitle);
                            var i = e.dataList;
                            "年级" === e.tag.name && 2 === this.examinationType ? this.selectedTabName = "选考" : this.selectedTabName = e.tag.name,
                            this.tag = e.tag,
                            this.selectedExamName = "",
                            this.reference = e.reference || {};
                            e.improveBar;
                            e.levelList && e.levelList.length > 0 && (this.scoreLevelConvert = new Lt(e,this.scoreLevelType),
                            this.improveBar.sectionData = this.scoreLevelConvert.mainLevels.reverse());
                            var n = this;
                            new st.a(function(t, e) {
                                if (n.canvasContainerElement.offsetWidth)
                                    t();
                                else
                                    var i = window.setInterval(function() {
                                        n.canvasContainerElement.offsetWidth && (window.clearInterval(i),
                                        t())
                                    }, 200)
                            }
                            ).then(function(t) {
                                n.drawChart(i)
                            })
                        }
                    }
                },
                changeElemsClass: function(t, e) {
                    for (var i = this.rootElement.getElementsByClassName(t), n = 0; n < i.length; n++)
                        i[n].className = e
                },
                changeElemsOpacityByClass: function(t, e) {
                    var i = this.rootElement.getElementsByClassName(t);
                    if (i)
                        for (var n = i.length, r = 0; r < n; r++)
                            i[r].style.opacity = e
                },
                initChart: function() {
                    var t = this.canvasElement.getContext("2d")
                      , e = this;
                    this.canvasContainerElement.offsetWidth > 0 && (window.report_body_canvas_real_width = this.canvasContainerElement.offsetWidth);
                    var i = window.report_body_canvas_real_width
                      , n = .25 * window.report_body_canvas_real_width;
                    i && n || (n = .2 * (i = .65 * window.innerWidth)),
                    this.chart = new Y.a.Chart({
                        el: e.canvasElement,
                        width: i,
                        height: n,
                        pixelRatio: window.devicePixelRatio,
                        padding: [0, 0, "auto", 0]
                    }),
                    this.chart.tooltip({
                        custom: !0,
                        alwaysShow: !0,
                        showCrosshairs: !1,
                        showTooltipMarker: !0,
                        triggerOn: ["click"],
                        triggerOff: null,
                        tooltipMarkerStyle: {
                            radius: 4.5,
                            fill: "#fff",
                            stroke: "l(90) 0:#FFDC66 1:#FFB636",
                            lineWidth: 3
                        },
                        onChange: function(t) {
                            e.changeElemsOpacityByClass("class-score-level-tag-container", 0),
                            e.changeElemsOpacityByClass("class-score-level-point-tag", 1),
                            e.changeElemsClass("class-score-level-selected-axis-x-label", "class-score-level-un-selected-axis-x-label");
                            var i = t.items[0]
                              , n = i.origin.improveBar;
                            if (n && n.show && n.tag ? (e.improveBar.scoreLevelRunningTitle = n.tag.name,
                            e.imgList.hasOwnProperty(n.tag.code) && (e.improveBar.scoreLevelRunningIcon = e.imgList[n.tag.code]),
                            e.improveBar.isShowImproveBar = Boolean(e.improveBar.scoreLevelRunningIcon)) : e.improveBar.isShowImproveBar = !1,
                            e.improveBar.isShowImproveBar && e.improveBar.sectionData && e.improveBar.sectionData.length > 0) {
                                for (var r = 0, a = 0; a < e.improveBar.sectionData.length; a++) {
                                    var s = e.improveBar.sectionData[a];
                                    if (s.name === n.levelScale) {
                                        r += n.offset * s.progress / 100;
                                        break
                                    }
                                    if ((r += s.progress) >= 100) {
                                        r = 0;
                                        break
                                    }
                                }
                                e.$refs.scoreLevelRunningContainer.style.left = r + "%"
                            }
                            e.defaultSelectedPoints.has(e.selectedTabName) && e.defaultSelectedPoints.delete(e.selectedTabName),
                            e.defaultSelectedPoints.set(e.selectedTabName, i.origin),
                            document.getElementById(i.origin.id + "2").style.opacity = 0,
                            document.getElementById(i.origin.id + "1").style.opacity = 1,
                            document.getElementById(i.origin.id + "0").className = "class-score-level-selected-axis-x-label",
                            e.selectedExamName = "*" + i.origin.name
                        }
                    });
                    var r = t.createLinearGradient(0, 0, i, 0);
                    r.addColorStop(0, "#ffffff"),
                    r.addColorStop(.1, "#EDEDED"),
                    r.addColorStop(.5, "#F1F1F1"),
                    r.addColorStop(.9, "#EDEDED"),
                    r.addColorStop(1, "#ffffff"),
                    this.chart.axis("id", {
                        label: null,
                        line: null,
                        labelOffset: 10,
                        grid: {
                            lineDash: null,
                            stroke: "#F5F5F5",
                            lineWidth: 1
                        }
                    }),
                    this.chart.axis("levelValue", {
                        label: function(t, e, i) {
                            var n = {
                                fill: "#A5A9AF",
                                textBaseline: "bottom",
                                fontSize: 12,
                                textAlign: "left"
                            };
                            return n.opacity = e === i - 1 ? 0 : 1,
                            n
                        },
                        labelOffset: -6,
                        position: "left",
                        range: [0, 1],
                        grid: {
                            lineDash: null,
                            stroke: r,
                            lineWidth: 1
                        }
                    })
                },
                drawChart: function(t) {
                    var e = this.canvasContainerElement.getElementsByClassName("guideWapper");
                    if (e)
                        for (; e.length > 0; )
                            e[0].remove();
                    var i = this.canvasElement.getContext("2d")
                      , n = !0;
                    if (this.chart ? (n = !1,
                    this.chart.guide().clear(),
                    this.chart.hideTooltip(),
                    this.chart.clear()) : (n = !0,
                    this.initChart()),
                    t && 0 != t.length) {
                        var r = t.length
                          , a = this;
                        this.chart.source(t, {
                            id: {
                                tickCount: r,
                                range: [.1, .2 * (r - 1) + .1]
                            },
                            levelValue: {
                                type: "linear",
                                range: [0, 1],
                                max: a.scoreLevelConvert.maxValue + this.scoreLevelConvert.mainItemValue,
                                min: 0,
                                tickCount: a.scoreLevelConvert.mainLevels.length + 2,
                                formatter: function(t) {
                                    var e = a.scoreLevelConvert.mainLevels.find(function(e) {
                                        return e.value === t
                                    });
                                    return e ? e.name : ""
                                }
                            }
                        });
                        var s = i.createLinearGradient(0, 0, window.innerWidth, 0);
                        s.addColorStop(.1, "#0DC2B3"),
                        s.addColorStop(.5, "#2FD2E7"),
                        s.addColorStop(.9, "#3DEA95"),
                        this.chart.line().position("id*levelValue").color(s).style({
                            lineWidth: 3
                        }).shape("smooth"),
                        this.chart.point().position("id*levelValue").size(3).style({
                            fill: "#ffffff",
                            stroke: "#2BCFE0",
                            lineWidth: 2
                        });
                        for (var o = 0; o < r; o++) {
                            var l = t[o];
                            this.chart.guide().html({
                                position: [l.id, l.levelValue],
                                html: '<div class="class-score-level-point-tag" id="' + l.id + '2">' + l.level + "</div>",
                                alignX: "center",
                                alignY: "bottom",
                                offsetY: -15
                            }),
                            this.chart.guide().html({
                                position: [l.id, l.levelValue],
                                html: '<div class="class-score-level-tag-container" id="' + l.id + '1"><div class="class-score-level-popup"><span><em></em></span>' + l.level + "</div></div>",
                                alignX: "left",
                                alignY: "bottom",
                                offsetY: -15
                            }),
                            this.chart.guide().html({
                                position: [l.id, 0],
                                html: '<div id="' + l.id + '0" class="class-score-level-un-selected-axis-x-label">' + l.dateDisp + "</div>",
                                alignX: "center",
                                alignY: "top",
                                offsetY: 10
                            })
                        }
                        for (var c = 0; c < 5; c++)
                            this.chart.guide().line({
                                start: ["10%", 20 * c + 10 + "%"],
                                end: ["11%", 20 * c + 10 + "%"],
                                style: {
                                    stroke: "#F5F5F5",
                                    lineWidth: 1
                                }
                            });
                        n ? this.chart.render() : this.chart.repaint();
                        var u = null;
                        u = this.defaultSelectedPoints.has(this.selectedTabName) ? this.chart.getPosition(this.defaultSelectedPoints.get(this.selectedTabName)) : this.chart.getPosition(t[r - 1]),
                        this.chart.showTooltip(u)
                    }
                }
            }
        }
          , he = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.tabInfo.length,
                        expression: "tabInfo.length"
                    }],
                    ref: "scoreLevelRoot",
                    staticClass: "container-backgrounde"
                }, [n("div", {
                    staticClass: "score-level-change-head"
                }, [n("h2", {
                    staticClass: "class-a-title",
                    domProps: {
                        innerHTML: t._s(t.chartName)
                    }
                }), t._v(" "), n("report-gener-time", {
                    attrs: {
                        isLinkage: t.isLinkage
                    },
                    on: {
                        "date-changed": t.handleDateChange
                    }
                })], 1), t._v(" "), t.scoreLevelSubTitle ? n("div", {
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.scoreLevelSubTitle)
                    }
                }) : t._e(), t._v(" "), n("switch-tab", {
                    attrs: {
                        tabs: t.tabInfo
                    },
                    on: {
                        "on-tab-switch": t.onTabSwitch
                    }
                }), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.improveBar.isShowImproveBar,
                        expression: "improveBar.isShowImproveBar"
                    }],
                    staticClass: "class-score-level-progress-container"
                }, [n("div", {
                    staticClass: "class-running-container"
                }, [n("div", {
                    ref: "scoreLevelRunningContainer",
                    staticClass: "class-running"
                }, [n("img", {
                    ref: "runningIcon",
                    attrs: {
                        alt: "图片加载失败",
                        src: i("tj0U")
                    }
                })])]), t._v(" "), n("ul", {
                    staticClass: "class-score-level-progressbar"
                }, t._l(t.improveBar.sectionData, function(e) {
                    return n("li", {
                        style: "width:" + e.progress + "%"
                    }, [n("span", [t._v(t._s(e.name))])])
                }), 0)]), t._v(" "), n("div", {
                    staticClass: "class-b-container",
                    domProps: {
                        textContent: t._s(t.selectedExamName)
                    }
                }), t._v(" "), n("div", {
                    ref: "scoreLevelChartContainer"
                }, [n("canvas", {
                    ref: "scoreLevelChart"
                })]), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.reference.content,
                        expression: "reference.content"
                    }],
                    staticClass: "class-score-level-selected-exam-name",
                    class: {
                        "skip-pointer": t.reference.linkUrl
                    },
                    domProps: {
                        innerHTML: t._s(t.reference.content)
                    },
                    on: {
                        click: function(e) {
                            return t.onReferenceClick()
                        }
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var fe = i("VU/8")(ue, he, !1, function(t) {
            i("T/UG")
        }, null, null).exports
          , de = {
            paperReportMain: R,
            paperChangeTrends: ht,
            paperScoreDistribution: J,
            paperScoreGap: At,
            paperLevelGap: jt,
            paperLostTopicAndAnalysis: _t,
            paperExamPointsAndScoringAbility: U,
            paperLevelTrend: fe,
            examThreePlusX: Vt,
            examThreePlusXLevel: qt,
            examReportMain: R,
            examChangeTrend: ht,
            examScoreDistribution: J,
            examSubjectDiagnosis: gt,
            examScoreGap: At,
            examLevelGap: jt,
            examScoreContrast: Kt,
            examStudyStrategy: et,
            examConclusion: rt,
            examLevelTrend: fe,
            paperIntelligentWriteAbility: Rt,
            examChangeTrendFree: Wt,
            examLevelTrendFree: Wt,
            examScoreDistributionFree: Wt,
            examSubjectDiagnosisFree: Wt,
            examScoreGapFree: Wt,
            examLevelGapFree: Wt,
            examStudyStrategyFree: Wt,
            paperChangeTrendsFree: Wt,
            paperLevelTrendFree: Wt,
            paperScoreDistributionFree: Wt,
            paperScoreGapFree: Wt,
            paperLevelGapFree: Wt,
            paperLostTopicAndAnalysisFree: Wt,
            paperExamPointsAndScoringAbilityFree: Wt,
            paperStudyStrategyFree: Wt
        }
          , pe = i("dYAI")
          , ve = i.n(pe)
          , ge = {
            name: "RulesDialog",
            props: {
                url: {
                    type: String,
                    default: ""
                },
                from: {
                    type: Number,
                    default: 1
                }
            },
            data: function() {
                return {
                    dialogVisible: !1
                }
            }
        }
          , me = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("el-dialog", {
                    attrs: {
                        title: 1 === t.from ? "成绩单等级规则说明" : "历次成绩变化等级规则说明",
                        visible: t.dialogVisible,
                        "custom-class": "rules-dlg",
                        width: "800px"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [t.url ? i("iframe", {
                    attrs: {
                        src: t.url,
                        frameborder: "0"
                    }
                }) : t._e(), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: function(e) {
                            t.dialogVisible = !1
                        }
                    }
                }, [t._v("我知道了")])], 1)])
            },
            staticRenderFns: []
        };
        var ye = {
            name: "zx-report",
            components: {
                "rules-dialog": i("VU/8")(ge, me, !1, function(t) {
                    i("vzQt")
                }, null, null).exports
            },
            props: {
                newPaperList: {
                    type: Array
                },
                totalScore: {
                    type: Object
                },
                paperList: {
                    type: Array
                },
                singleSubject: {
                    type: Object
                },
                examId: {
                    type: String
                },
                paperId: {
                    type: String
                },
                subjectCode: {
                    type: String
                },
                subjectName: {
                    type: String
                },
                vipExp: {
                    type: Boolean,
                    default: !1
                },
                publishStatus: {
                    type: Boolean,
                    default: !1
                },
                showScoreLv: {
                    type: Boolean,
                    default: !1
                },
                examTypeCode: {
                    type: String
                }
            },
            data: function() {
                return {
                    rulesFrom: 1,
                    rulesUrl: "",
                    componentsMenu: [],
                    examInfo: void 0,
                    isVip: !1,
                    vipIcon: ve.a,
                    currentExamId: "",
                    reportMain: "",
                    totalCount: 0,
                    linkUrl: "",
                    allUserLevel: !1
                }
            },
            computed: {
                showSubjectTips: function() {
                    if (!this.newPaperList.length)
                        return !1;
                    for (var t = 0; t < this.newPaperList.length; t++)
                        if (this.newPaperList[t].subjectLabels && this.newPaperList[t].subjectLabels.length)
                            return this.newPaperList[t].subjectLabels.some(function(t) {
                                return "选科" === t.labelName || "非选科" === t.labelName
                            });
                    return !1
                },
                isPaperReport: function() {
                    return this.paperId && this.subjectCode && "" !== this.paperId && "" !== this.subjectCode && this.componentsMenu.length > 0
                },
                topWindow: function() {
                    return !window.AppZxbInterface && top.window.AppZxbInterface ? top.window : window
                },
                isHomeworkNoScoreMode: function() {
                    return !(!this.singleSubject || 1 !== this.singleSubject.scoringModel || "homework" !== this.examTypeCode)
                }
            },
            mounted: function() {
                var t = this;
                console.log(this.showScoreLv, "是否显示");
                var e = this;
                this.getPaperList(),
                e.currentExamId = e.examId;
                var i = {
                    tag: e.paperId ? "ZXB_REPORT_PAPER" : "ZXB_REPORT_EXAM",
                    examId: e.examId,
                    reportTag: "ZXB_NEW_REPORT"
                };
                e.paperId && (i.paperId = e.paperId),
                S.a.getReportModules(i).then(function(i) {
                    0 === i.errorCode ? (t.reportMain = i.result[0].code,
                    console.log(t.reportMain, "00" === t.subjectCode, "测试数据"),
                    t.$store.commit("reportMain", t.reportMain),
                    sessionStorage.setItem("reportMain", t.reportMain),
                    e.configModules(i.result)) : console.log("getReportModules errorCode: " + i.errorCode + " errorInfo: " + i.errorInfo)
                })
            },
            methods: {
                levelChangeDlg: function(t) {
                    t && (this.rulesUrl = t,
                    this.rulesFrom = 2,
                    this.$refs.rulesDlg.dialogVisible = !0)
                },
                openFeedBack: function() {
                    window.location.href = "//www.wjx.cn/jq/29664415.aspx"
                },
                ruleDescription: function(t) {
                    this.totalCount = this.$store.state.totalCount,
                    this.rulesFrom = 1,
                    this.rulesUrl = "https://static.zhixue.com/activity/app/scorelevel-help/index.html?isTranscript=1&examId=" + this.examId + "&token=" + Qt.default.getItem("xToken") + "&number=" + this.totalCount + "&code=" + (t || "00"),
                    this.$refs.rulesDlg.dialogVisible = !0
                },
                getPaperList: function() {
                    this.allUserLevel = this.paperList.some(function(t) {
                        return t.userLevel
                    })
                },
                configModules: function(t) {
                    this.componentsMenu = [];
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        i.name && de[i.name] && (i.component = de[i.name],
                        i.desc ? i.desc = i.desc.replace(/%subject-name%/, this.subjectName) : (t.splice(e, 1),
                        e--))
                    }
                    for (var n = !1, r = 0; r < t.length; r++) {
                        var a = t[r];
                        a.component != Wt || n ? a.showHeader = !1 : (a.showHeader = !0,
                        n = !0)
                    }
                    this.isVip = !n && !this.vipExp,
                    this.componentsMenu = t
                },
                enterOriginPaperAndActionLog: function() {
                    return !1
                },
                enterPaperAnslysisAndActionLog: function() {
                    return !1
                },
                buyVip: function() {
                    D({
                        module: "zxb_newReport_web",
                        opCode: "1011",
                        otherInfo: {
                            examID: this.examId,
                            subjectCode: this.subjectCode,
                            reportType: "00" === this.subjectCode ? "0" : "1"
                        }
                    }),
                    window.location.href = window.location.origin + "/zhixuebao/zhixuebao/vip/member/main/?from=web-reportstuall"
                },
                showVipIntroduct: function() {
                    return !1
                },
                absentText: function(t) {
                    if (t.newSubjectLabels && t.newSubjectLabels.length)
                        for (var e = 0; e < t.newSubjectLabels.length; e++)
                            if ("未扫描" === t.newSubjectLabels[e].labelName || "缺考" === t.newSubjectLabels[e].labelName)
                                return t.newSubjectLabels[e].labelName;
                    return "/" + t.standardScore
                },
                isShowAssignScore: function(t) {
                    if (t.newSubjectLabels && t.newSubjectLabels.length)
                        for (var e = 0; e < t.newSubjectLabels.length; e++)
                            if ("未扫描" === t.newSubjectLabels[e].labelName || "缺考" === t.newSubjectLabels[e].labelName)
                                return !1;
                    return !0
                },
                absentScore: function() {
                    return !this.totalScore.hasLevel && !this.totalScore.hasAssignScore && "levelReportMain" !== this.reportMain
                },
                getColor: function(t) {
                    return "选科" === t.labelName ? "col_green" : "非选科" === t.labelName ? "col_yellow" : "不计入总分" === t.labelName ? "col_yellow" : ""
                }
            }
        }
          , xe = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", [t.publishStatus ? n("div", [n("div", {
                    staticClass: "report-content",
                    class: {
                        "report-nonvip": !t.isVip
                    }
                }, [n("rules-dialog", {
                    ref: "rulesDlg",
                    attrs: {
                        url: t.rulesUrl,
                        from: t.rulesFrom
                    }
                }), t._v(" "), !t.isHomeworkNoScoreMode && ("completeReportMain" === t.reportMain || "scoreReportMain" === t.reportMain || "levelReportMain" === t.reportMain && t.allUserLevel) ? n("div", {
                    staticClass: "hierarchy"
                }, ["00" === t.subjectCode ? n("div", [n("div", {
                    staticClass: "general"
                }, [t.totalScore.subjectName ? n("div", {
                    staticClass: "general-head specific"
                }, [t._v(t._s("levelReportMain" === t.reportMain ? "全科等级" : t.totalScore.hasAssignScore ? "全科赋分总分" : ("completeReportMain" === t.reportMain && t.totalScore.userLevel,
                "全科总分")))]) : t._e(), t._v(" "), n("span", {
                    staticStyle: {
                        display: "inline-block"
                    }
                }, [n("div", [n("span", {
                    staticClass: "bold",
                    class: t.totalScore.userLevel ? "wid_250" : ""
                }, [n("span", {
                    class: "levelReportMain" !== t.reportMain || t.totalScore.userLevel ? "increase" : "not-set"
                }, [t._v(t._s("levelReportMain" === t.reportMain ? t.totalScore.userLevel ? t.totalScore.userLevel : "未设置" : t.totalScore.userScore))]), t._v(t._s("levelReportMain" === t.reportMain ? t.totalScore.userLevel ? "等" : "" : "分"))]), t._v(" "), "levelReportMain" === t.reportMain ? n("span", {
                    staticClass: "blue",
                    class: t.totalScore.userLevel ? "point" : "",
                    on: {
                        click: function(e) {
                            return t.ruleDescription()
                        }
                    }
                }, [t._v(t._s(t.totalScore.userLevel ? "等级规则说明" : "") + " "), t.totalScore.userLevel ? n("img", {
                    staticStyle: {
                        width: "22px",
                        "vertical-align": "text-top"
                    },
                    attrs: {
                        src: i("r8MV"),
                        alt: ""
                    }
                }) : t._e()]) : n("span", {
                    staticClass: "specific"
                }, [t._v("满分 " + t._s(t.totalScore.hasAssignScore ? t.totalScore.assignStandardScore : t.totalScore.standardScore))])]), t._v(" "), "completeReportMain" === t.reportMain && !t.totalScore.hasAssignScore && t.totalScore.hasLevel ? n("div", [n("span", {
                    staticClass: "specific wid_250",
                    staticStyle: {
                        "margin-right": "40px"
                    }
                }, [t._v("等级 "), n("span", {
                    class: t.totalScore.userLevel ? "black" : "specific"
                }, [t._v(t._s(t.totalScore.userLevel ? t.totalScore.userLevel : "未设置"))])]), t._v(" "), t.totalScore.userLevel ? n("span", {
                    staticClass: "blue point",
                    on: {
                        click: function(e) {
                            return t.ruleDescription()
                        }
                    }
                }, [t._v("等级规则说明 "), n("img", {
                    staticStyle: {
                        width: "22px",
                        "vertical-align": "text-top"
                    },
                    attrs: {
                        src: i("r8MV"),
                        alt: ""
                    }
                })]) : t._e()]) : t._e(), t._v(" "), t.totalScore.hasAssignScore && "levelReportMain" !== t.reportMain ? n("div", [n("span", {
                    staticStyle: {
                        "margin-right": "200px"
                    }
                }, [n("span", {
                    staticClass: "specific"
                }, [t._v("原分总分/满分"), n("span", {
                    staticClass: "blue",
                    staticStyle: {
                        "margin-left": "40px"
                    }
                }, [t._v(t._s(t.totalScore.preAssignScore))]), t._v(" /" + t._s(t.totalScore.standardScore))])]), t._v(" "), t.totalScore.hasLevel && "scoreReportMain" !== t.reportMain ? n("span", [n("span", {
                    staticClass: "specific"
                }, [t._v("等级"), n("span", {
                    class: t.totalScore.userLevel ? "black" : "specific",
                    staticStyle: {
                        "margin-left": "5px",
                        "margin-right": "40px"
                    }
                }, [t._v(t._s(t.totalScore.userLevel ? t.totalScore.userLevel : "未设置"))])]), t._v(" "), t.totalScore.userLevel ? n("span", {
                    staticClass: "blue point",
                    on: {
                        click: function(e) {
                            return t.ruleDescription()
                        }
                    }
                }, [t._v("等级规则说明 "), n("img", {
                    staticStyle: {
                        width: "22px",
                        "vertical-align": "text-top"
                    },
                    attrs: {
                        src: i("r8MV"),
                        alt: ""
                    }
                })]) : t._e()]) : t._e()]) : t._e()]), t._v(" "), "levelReportMain" !== t.reportMain && t.totalScore.hasAssignScore ? n("div", {
                    staticClass: "specific mt-20 line"
                }, [n("div", [t._v("说明：")]), t._v(" "), t._m(0)]) : t._e(), t._v(" "), void 0 != t.totalScore.weightRemark ? n("div", {
                    staticClass: "specific mt-20 line"
                }, [n("div", [t._v("说明：")]), t._v(" "), n("div", [t._v(t._s(t.totalScore.weightRemark))])]) : t._e()]), t._v(" "), n("div", {
                    staticClass: "single"
                }, t._l(t.newPaperList, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "sub-item"
                    }, [n("div", {
                        staticClass: "subject"
                    }, [t._v(t._s(e.subjectName) + "\n                      "), t._l(e.subjectLabels, function(e, i) {
                        return n("div", {
                            key: i
                        }, [n("span", {
                            staticClass: "grade-tips",
                            class: t.getColor(e),
                            domProps: {
                                textContent: t._s(e.labelName)
                            }
                        })])
                    })], 2), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-left": "150px"
                        }
                    }, [!t.totalScore.hasLevel || "scoreReportMain" === t.reportMain || t.showScoreLv && !e.userLevel ? t._e() : n("div", {
                        staticClass: "bottom bold-level"
                    }, [e.isAbsent ? n("div", {
                        staticClass: "specific"
                    }, [t.absentScore() ? n("span", {
                        staticClass: "mr_10"
                    }, [t._v("-- /" + t._s(e.standardScore))]) : t._e(), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(t.absentText(e))
                        }
                    })]) : n("div", [t._v("\n                          等级\n                          "), n("span", {
                        class: e.userLevel ? "black" : "specific bold-level-unset"
                    }, [t._v(t._s(e.userLevel ? e.userLevel : "未设置"))])])]), t._v(" "), !t.totalScore.hasAssignScore || "levelReportMain" === t.reportMain || t.showScoreLv && !e.hasAssignScore ? t._e() : n("div", {
                        staticClass: "bottom bold-level"
                    }, [t._v("\n                          赋分\n                          "), n("span", {
                        class: e.isAbsent ? "specific" : e.hasAssignScore ? "black bold-level-unset" : "specific"
                    }, [t._v(t._s(e.isAbsent ? "--" : e.hasAssignScore ? e.userScore : "未设置"))]), t._v(" "), e.hasAssignScore ? n("span", {
                        staticClass: "specific"
                    }, [t._v(" /" + t._s(e.assignStandardScore))]) : t._e()]), t._v(" "), "levelReportMain" !== t.reportMain ? n("div", {
                        staticClass: "bold-level"
                    }, [t._v("\n                         " + t._s("scoreReportMain" === t.reportMain || "completeReportMain" === t.reportMain && !t.totalScore.hasAssignScore && !t.totalScore.hasLevel ? "" : "原分") + "\n                         "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShowAssignScore(e),
                            expression: "isShowAssignScore(item)"
                        }],
                        class: e.isAbsent ? "specific" : "blue"
                    }, [t._v(t._s(e.isAbsent ? "--" : e.hasAssignScore ? e.preAssignScore : e.userScore))]), t._v(" "), n("span", {
                        staticClass: "specific ml_10",
                        domProps: {
                            textContent: t._s(t.absentText(e))
                        }
                    })]) : t._e()])])
                }), 0), t._v(" "), t.showSubjectTips ? n("div", {
                    staticClass: "specific mb-10"
                }, [t._v("说明：学校设置选科关系可能有误，建议您联系学校老师确认")]) : t._e(), t._v(" "), "levelReportMain" !== t.reportMain && t.totalScore.hasAssignScore ? n("div", {
                    staticClass: "specific mb-10 line"
                }, [n("div", [t._v("说明：")]), t._v(" "), t._m(1)]) : t._e(), t._v(" "), "levelReportMain" === t.reportMain ? n("div", {
                    staticClass: "specific mb-10"
                }, [t._v("说明：按学校要求，不发布分数")]) : t._e()]) : n("div", [t.singleSubject.subjectName ? n("div", {
                    staticClass: "general-head specific"
                }, [t._v(t._s("levelReportMain" === t.reportMain ? t.singleSubject.subjectName + "等级" : t.singleSubject.subjectName))]) : t._e(), t._v(" "), n("div", [n("span", {
                    staticClass: "bold wid_250"
                }, [n("span", {
                    class: "levelReportMain" !== t.reportMain || t.singleSubject.userLevel ? "increase" : "not-set"
                }, [t._v(t._s("levelReportMain" === t.reportMain ? t.singleSubject.userLevel ? t.singleSubject.userLevel : "未设置" : t.singleSubject.userScore))]), t._v(t._s("levelReportMain" === t.reportMain ? t.singleSubject.userLevel ? "等" : "" : "分"))]), t._v(" "), "levelReportMain" === t.reportMain ? n("span", [t.singleSubject.userLevel ? n("span", {
                    staticClass: "blue point",
                    on: {
                        click: function(e) {
                            return t.ruleDescription(t.singleSubject.subjectCode)
                        }
                    }
                }, [t._v("等级规则说明 "), n("img", {
                    staticStyle: {
                        width: "22px",
                        "vertical-align": "text-top"
                    },
                    attrs: {
                        src: i("r8MV"),
                        alt: ""
                    }
                })]) : t._e()]) : n("span", {
                    staticClass: "specific"
                }, [t._v("满分 " + t._s(t.singleSubject.hasAssignScore ? t.singleSubject.assignStandardScore : t.singleSubject.standardScore))])]), t._v(" "), "levelReportMain" !== t.reportMain ? n("div", [t.singleSubject.hasAssignScore ? n("span", {
                    staticClass: "wid_290"
                }, [n("span", {
                    staticClass: "specific"
                }, [t._v("原分/满分"), n("span", {
                    staticClass: "blue",
                    staticStyle: {
                        "margin-left": "40px"
                    }
                }, [t._v(t._s(t.singleSubject.preAssignScore))]), t._v(" /" + t._s(t.singleSubject.standardScore))])]) : t._e(), t._v(" "), "completeReportMain" === t.reportMain && t.singleSubject.userLevel ? n("span", [n("span", {
                    staticClass: "specific wid_250 mr_40"
                }, [t._v("等级"), n("span", {
                    staticClass: "black bold-level",
                    staticStyle: {
                        "margin-left": "5px"
                    }
                }, [t._v(t._s(t.singleSubject.userLevel))])]), t._v(" "), n("span", {
                    staticClass: "blue point",
                    on: {
                        click: function(e) {
                            return t.ruleDescription(t.singleSubject.subjectCode)
                        }
                    }
                }, [t._v("等级规则说明 "), n("img", {
                    staticStyle: {
                        width: "22px",
                        "vertical-align": "text-top"
                    },
                    attrs: {
                        src: i("r8MV"),
                        alt: ""
                    }
                })])]) : t._e()]) : t._e(), t._v(" "), "levelReportMain" === t.reportMain ? n("div", {
                    staticClass: "specific mt-20"
                }, [t._v("说明：按学校要求，不发布分数")]) : t._e(), t._v(" "), "levelReportMain" !== t.reportMain && t.singleSubject.hasAssignScore ? n("div", {
                    staticClass: "specific mt-20 line"
                }, [n("div", [t._v("说明：")]), t._v(" "), t._m(2)]) : t._e(), t._v(" "), void 0 != t.singleSubject.weightRemark ? n("div", {
                    staticClass: "specific mt-20 line"
                }, [n("div", [t._v("说明：")]), t._v(" "), n("div", [t._v(t._s(t.singleSubject.weightRemark))])]) : t._e()])]) : n("div", [t.isHomeworkNoScoreMode || "00" !== t.subjectCode && t.totalScore ? t._e() : n("div", {
                    staticClass: "hierarchy"
                }, [t._v("说明：按学校要求，不发布分数")])]), t._v(" "), n("div", {
                    staticStyle: {
                        transform: "translate3d(0,0,0)"
                    }
                }, [t._l(t.componentsMenu, function(e, i) {
                    return n(e.component, {
                        key: i,
                        tag: "component",
                        attrs: {
                            "paper-id": t.paperId,
                            "exam-id": t.currentExamId,
                            "subject-code": t.subjectCode,
                            index: i,
                            "top-title": e.title,
                            description: e.desc,
                            thumbnail: e.icon,
                            "show-header": e.showHeader
                        },
                        on: {
                            levelChangeDlg: t.levelChangeDlg
                        }
                    })
                }), t._v(" "), t.isPaperReport && t.isVip ? n("div", {
                    staticClass: "container-backgrounde-blank bottom-button user-feedback-con"
                }, [t.isVip ? n("div", {
                    staticClass: "user-feedback"
                }, [n("span", {
                    staticClass: "fa fa-pencil"
                }), t._v(" "), n("span", {
                    on: {
                        click: function(e) {
                            return t.openFeedBack()
                        }
                    }
                }, [t._v("报告意见反馈")])]) : t._e()]) : t._e(), t._v(" "), !t.isPaperReport && t.isVip ? n("div", {
                    staticClass: "container-backgrounde-blank bottom-button user-feedback-con"
                }, [n("div", {
                    staticClass: "user-feedback"
                }, [n("span", {
                    staticClass: "fa fa-pencil"
                }), t._v(" "), n("span", {
                    on: {
                        click: function(e) {
                            return t.openFeedBack()
                        }
                    }
                }, [t._v("报告意见反馈")])])]) : t._e()], 2)], 1), t._v(" "), t.componentsMenu.length > 0 && !t.isVip ? n("div", {
                    staticClass: "bottom-button nonvip-bottom"
                }, [t.vipExp ? n("div", {
                    staticClass: "user-feedback vipExp"
                }, [n("span", {
                    staticClass: "fa fa-pencil"
                }), t._v(" "), n("span", {
                    on: {
                        click: function(e) {
                            return t.openFeedBack()
                        }
                    }
                }, [t._v("报告意见反馈")])]) : t._e()]) : t._e()]) : n("div", {
                    staticClass: "no_publish"
                }, [n("div", {
                    staticClass: "report_no_publish"
                }), t._v(" "), n("div", {
                    staticClass: "report_no_publish_text"
                }, [t._v("成绩暂未发布")]), t._v(" "), t._m(3)])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", [this._v("赋分总分=各学科赋分求和（未设置学科按原分计算）"), e("br"), this._v("\n                  原分总分=各学科原分求和")])
            }
            , function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", [this._v("赋分=等级赋分的分数（未设置学科不显示）"), e("br"), this._v("\n                原分=原始卷面的分数")])
            }
            , function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", [this._v("赋分=等级赋分的分数（未设置学科不显示）"), e("br"), this._v("\n              原分=原始卷面的分数")])
            }
            , function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                    staticClass: "report_no_publish_detail"
                }, [this._v("请确认学校是否通过其他方式发布。"), e("br"), this._v("仍有问题，建议您联系学校老师咨询。")])
            }
            ]
        };
        var be = i("VU/8")(ye, xe, !1, function(t) {
            i("Gqrl")
        }, null, null).exports
          , Se = i("PlOJ")
          , _e = i.n(Se)
          , Ce = i("1z/s")
          , we = i.n(Ce)
          , Ae = i("KKrt");
        Y.a.track(!1);
        Object.assign = function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]);
            return t
        }
        ;
        var Te = {
            name: "report-detail",
            components: {
                "zx-tab": N.a,
                "zx-tab-item": j.a,
                "zxb-report": be,
                "exam-list": w
            },
            data: function() {
                return {
                    newPaperList: [],
                    currentSubject: "",
                    currentPaperId: "",
                    title: "",
                    examId: "",
                    studentTag: "",
                    showDownload: !1,
                    totalScore: {},
                    paperList: [],
                    isTabFixed: !1,
                    scrollInterval: 0,
                    headerHeight: 60,
                    showScoreLv: !1,
                    subjectList: [],
                    vipImage: ve.a,
                    reportDataType: 0,
                    noDataImage: Ae.a ? we.a : _e.a,
                    examTypeCode: ""
                }
            },
            computed: {
                noDataMessage: function() {
                    return -1 === this.reportDataType ? "网络请求失败，请稍后重试" : -2 === this.reportDataType ? "当前学年暂无发布的报告，您可以切换其他学年查看" : ""
                }
            },
            watch: {
                currentSubject: function(t, e) {
                    this.changedSubject(t, e)
                }
            },
            created: function() {
                sessionStorage.getItem("zxbReportExamId") && (this.examId = sessionStorage.getItem("zxbReportExamId")),
                this.handleChildrenMessage(),
                this.requestReportData()
            },
            mounted: function() {
                this.$refs.tab && (this.tabTopOffset = this.$refs.tab.$el.offsetTop)
            },
            methods: {
                changedSubject: function(t, e) {
                    var i = {
                        subjectCode: this.currentSubject,
                        paperList: this.paperList
                    };
                    if (g.a.$emit("checkSubject", i),
                    sessionStorage.setItem("zxbReportDetailCurrentSubjectCode", this.currentSubject),
                    t && "" !== t)
                        try {
                            D({
                                module: "zxb_newReport_web",
                                opCode: "1002",
                                otherInfo: {
                                    examId: sessionStorage.getItem("zxbReportExamId"),
                                    subjectCode: sessionStorage.getItem("zxbReportDetailCurrentSubjectCode")
                                }
                            })
                        } catch (t) {
                            console.log(t)
                        }
                    else
                        this.reportDataType = -2
                },
                fixedNail: function() {
                    var t = this;
                    !window.requestAnimationFrame && ["webkit", "moz", "ms"].some(function(t) {
                        return window.requestAnimationFrame = win[t + "RequestAnimationFrame"]
                    }),
                    !window.cancelAnimationFrame && ["webkit", "moz", "ms"].some(function(t) {
                        return window.cancelAnimationFrame = win[t + "CancelAnimationFrame"]
                    });
                    var e = void 0
                      , i = this.$refs.tab.$el;
                    window.addEventListener("touchmove", function() {
                        t.tabTopOffset < i.offsetTop && (t.tabTopOffset = i.offsetTop),
                        t.bodyScrollHandler.call(t),
                        clearInterval(e),
                        e = setInterval(function() {
                            console.log("touchmove interval"),
                            t.bodyScrollHandler.call(t)
                        }, 10)
                    }),
                    window.addEventListener("scroll", function() {
                        clearInterval(e),
                        t.bodyScrollHandler.call(t)
                    })
                },
                bodyScrollHandler: function() {
                    this.$refs.tab.$el;
                    document.body.scrollTop > this.tabTopOffset ? this.isTabFixed = !0 : this.isTabFixed = !1
                },
                requestReportData: function() {
                    var t = this;
                    if (t.examId) {
                        var e = {
                            examId: t.examId
                        };
                        S.a.getAllReportMain(e).then(function(e) {
                            0 === e.errorCode ? (t.configDatas(e.result),
                            t.showDownload && t.showPaperAnalysisDownloadButton(),
                            t.paperList.length > 0 ? t.reportDataType = 0 : t.reportDataType = -2) : (t.reportDataType = -1,
                            console.log("getAllReportMain errorCode: " + e.errorCode + " errorInfo: " + e.errorInfo))
                        })
                    } else
                        t.reportDataType = -2
                },
                handleChildrenMessage: function() {
                    var t = this;
                    g.a.$on("subjectClickHandle", function(e) {
                        t.currentSubject = e
                    }),
                    g.a.$on("bannerHeightChanged", function(e) {
                        t.updateHeaderHeight(),
                        t.$nextTick(function() {
                            t.updateHeaderHeight()
                        })
                    })
                },
                resetDatas: function() {
                    this.studentTag = "",
                    this.showDownload = !1,
                    this.totalScore = {},
                    this.paperList = [],
                    this.newPaperList = [],
                    this.changedSubject("", ""),
                    this.title = [],
                    this.subjectCode = ""
                },
                configDatas: function(t) {
                    var e = this;
                    t ? (this.examTypeCode = t.examTypeCode,
                    this.studentTag = t.studentTag,
                    this.showDownload = t.showDownload,
                    this.totalScore = t.totalScore,
                    this.paperList = t.paperList,
                    this.newPaperList = t.paperList,
                    this.subjectList = t.paperList.filter(function(t) {
                        return !0 === t.isSinglePublish
                    }),
                    sessionStorage.setItem("subjectList", I()(this.subjectList)),
                    console.log(this.subjectList, "所有单科数据"),
                    this.showScoreLv = t.showScoreLv,
                    console.log(this.showScoreLv, "是否显示"),
                    t.totalScore && 2 === t.totalScore.examinationType && t.totalScore.selectSubject && t.totalScore.selectSubject.length && (this.newPaperList = this.newPaperList.filter(function(e) {
                        return t.totalScore.selectSubject.indexOf(e.subjectCode) > -1 || (e.subjectLabels && e.subjectLabels.length ? e.subjectLabels.filter(function(t) {
                            return "非选科" === t.labelName
                        }).length > 0 : void 0)
                    })),
                    t.absentPaperList && t.absentPaperList.length && t.absentPaperList.map(function(t) {
                        e.newPaperList.push(P()({}, t, {
                            newSubjectLabels: t.subjectLabels,
                            subjectLabels: t.subjectLabels.filter(function(t) {
                                return "未扫描" !== t.labelName && "缺考" !== t.labelName
                            }),
                            isAbsent: !0
                        }))
                    }),
                    this.title = t.title,
                    this.totalScore && this.totalScore.title ? (this.totalScore.subjectCode || (this.totalScore.subjectCode = "00"),
                    this.currentSubject = this.totalScore.subjectCode) : this.paperList && this.paperList.length > 0 && (this.currentSubject = this.paperList[0].subjectCode)) : this.resetDatas(),
                    this.$nextTick(function() {})
                },
                showPaperAnalysisDownloadButton: function() {
                    return !1
                },
                updateHeaderHeight: function() {
                    var t = 0;
                    this.$refs.banner && (t = this.$refs.banner.$el.offsetHeight),
                    this.headerHeight = this.$refs.tab.$el.offsetHeight + t
                }
            }
        }
          , Ie = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", [0 === t.reportDataType ? [i("div", {
                    staticClass: "report-header"
                }, [i("zx-tab", {
                    ref: "tab",
                    staticClass: "report-zx-tab",
                    class: {
                        "tab-fixed": t.isTabFixed
                    },
                    model: {
                        value: t.currentSubject,
                        callback: function(e) {
                            t.currentSubject = e
                        },
                        expression: "currentSubject"
                    }
                }, [t.totalScore && t.totalScore.title ? i("zx-tab-item", {
                    staticClass: "tab-item",
                    attrs: {
                        id: t.totalScore.subjectCode
                    }
                }, [i("span", {
                    staticStyle: {
                        position: "relative",
                        display: "inline-block"
                    }
                }, [i("span", {
                    domProps: {
                        textContent: t._s(t.totalScore.title)
                    }
                })])]) : t._e(), t._v(" "), t._l(t.paperList, function(e, n) {
                    return i("zx-tab-item", {
                        key: n,
                        staticClass: "tab-item",
                        attrs: {
                            id: e.subjectCode
                        }
                    }, [i("span", {
                        staticStyle: {
                            position: "relative",
                            display: "inline-block"
                        }
                    }, [i("span", {
                        domProps: {
                            textContent: t._s(e.subjectName)
                        }
                    })])])
                })], 2)], 1), t._v(" "), i("keep-alive", [t.totalScore && t.currentSubject === t.totalScore.subjectCode ? i("zxb-report", {
                    staticClass: "report",
                    style: {
                        top: "0px"
                    },
                    attrs: {
                        totalScore: t.totalScore,
                        paperList: t.paperList,
                        showScoreLv: t.showScoreLv,
                        newPaperList: t.newPaperList,
                        "subject-code": t.totalScore.subjectCode,
                        "exam-id": t.examId,
                        "publish-status": t.totalScore.isSinglePublish
                    }
                }) : t._e(), t._v(" "), t._l(t.paperList, function(e, n) {
                    return t.currentSubject === e.subjectCode ? i("zxb-report", {
                        key: n,
                        staticClass: "report",
                        style: {
                            top: "0px"
                        },
                        attrs: {
                            totalScore: t.totalScore,
                            singleSubject: e,
                            paperList: t.paperList,
                            showScoreLv: t.showScoreLv,
                            "paper-id": e.paperId,
                            "exam-id": t.examId,
                            "subject-code": e.subjectCode,
                            "subject-name": e.subjectName,
                            "vip-exp": e.beVipExp,
                            "publish-status": e.isSinglePublish,
                            "exam-type-code": t.examTypeCode
                        }
                    }) : t._e()
                })], 2)] : t._e(), t._v(" "), 0 !== t.reportDataType ? i("div", {
                    staticClass: "nodata"
                }, [i("div", {
                    staticClass: "nodata-show"
                }, [i("img", {
                    attrs: {
                        src: t.noDataImage,
                        alt: "暂无数据"
                    }
                }), t._v(" "), i("p", {
                    staticClass: "class-a-title-tips",
                    domProps: {
                        textContent: t._s(t.noDataMessage)
                    }
                })])]) : t._e()], 2)
            },
            staticRenderFns: []
        };
        var Me = i("VU/8")(Te, Ie, !1, function(t) {
            i("LKgA")
        }, "data-v-28898d9e", null).exports
          , ke = i("sTYi");
        v.default.use(f.a).use(p.a),
        v.default.use(u.a.directive),
        v.default.prototype.$loading = u.a.service,
        v.default.prototype.$message = l.a;
        var De = {
            name: "report-detail",
            components: {
                "exam-list": w,
                "report-content": Me,
                "report-gener-time": ce.a
            },
            data: function() {
                return {
                    currentSubject: "",
                    currentPaperId: "",
                    title: "",
                    examId: "",
                    paperId: "",
                    paperList: [],
                    reportContentComponent: Me,
                    isShowAnalysis: !0,
                    beginTime: "",
                    endTime: "",
                    isLinkage: !0,
                    loading: !1
                }
            },
            created: function() {
                this.initExamId(),
                this.changedExam(),
                this.updateUserInfo(),
                this.watchSubjectCheck(),
                this.reportDetailActionLog(),
                this.userBrowserLog(),
                this.getMenuConfig()
            },
            methods: {
                handleDateChange: function(t, e) {
                    this.beginTime = t,
                    this.endTime = e
                },
                getMenuConfig: function() {
                    var t = this;
                    S.a.getMenuConfig({
                        subjectCode: t.currentSubject,
                        tag: "report_addition",
                        group: "POCKET",
                        examId: t.examId
                    }).then(function(e) {
                        e && 0 === e.errorCode && (t.isShowAnalysis = e.result.some(function(t) {
                            return "question_analysis" === t.code
                        }))
                    })
                },
                goOriginalRollDetail: function() {
                    var t = this.getCurrentPaperInfo();
                    if (!t.isSinglePublish)
                        return this.$message.info("成绩尚未发布"),
                        !1;
                    var e = window.location.href.split("#")[0];
                    e = e + "#/zxb-report/original-roll-detail/" + this.examId + "/" + t.paperId + "/" + this.beginTime + "/" + this.endTime,
                    window.location.href = e
                },
                userBrowserLog: function() {
                    D({
                        opCode: "1001",
                        module: "zxb_webReportJr",
                        otherInfo: {
                            userAgent: navigator.userAgent,
                            SupportLocalStorage: !!window.localStorage,
                            SupportSessionStorage: !!window.sessionStorage,
                            SupportCookie: !!document.cookie
                        }
                    })
                },
                updateUserInfo: function() {
                    sessionStorage.removeItem("zxbUserInfo")
                },
                reportDetailActionLog: function() {
                    D({
                        module: "zxb_newReport_web",
                        opCode: "1001",
                        otherInfo: {
                            examID: this.examId,
                            reportType: 1
                        }
                    })
                },
                initExamId: function() {
                    var t = this.$route.params.examId || sessionStorage.getItem("zxbReportExamId");
                    t && (this.examId = t,
                    sessionStorage.setItem("zxbReportExamId", t))
                },
                watchSubjectCheck: function() {
                    var t = this;
                    g.a.$on("checkSubject", function(e) {
                        e && (t.currentSubject = e.subjectCode,
                        t.paperList = e.paperList)
                    })
                },
                changedExam: function() {
                    var t = this;
                    g.a.$on("changedExam", function(e) {
                        t.reportContentComponent = "",
                        sessionStorage.setItem("zxbReportExamId", e),
                        t.examId = e,
                        t.loading = !0,
                        t.getMenuConfig(),
                        setTimeout(function() {
                            t.loading = !1,
                            t.reportContentComponent = Me
                        }, 200)
                    })
                },
                getCurrentPaperInfo: function() {
                    var t = this.paperList;
                    if (("" === this.currentSubject || "00" === this.currentSubject) && t.length)
                        return t[0];
                    for (var e = 0, i = t.length; e < i; e++)
                        if (this.currentSubject === t[e].subjectCode)
                            return t[e]
                },
                toHomeAndScoreAnalysisModule: function(t) {
                    var e = window.location;
                    e.href = e.origin + ("home" === t ? "/container/index/" : "/zhixuebao/zhixuebao/main/index/")
                },
                toAnalysisModule: function() {
                    var t = this;
                    return s()(r.a.mark(function e() {
                        var i, n, a, s, o, l, c, u;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = t,
                                    D({
                                        module: "zxb_newReport_web",
                                        opCode: "1010",
                                        otherInfo: {
                                            examId: sessionStorage.getItem("zxbReportExamId"),
                                            subjectCode: sessionStorage.getItem("zxbReportDetailCurrentSubjectCode")
                                        }
                                    }),
                                    (n = i.getCurrentPaperInfo()).isSinglePublish) {
                                        e.next = 6;
                                        break
                                    }
                                    return t.$message.info("成绩尚未发布"),
                                    e.abrupt("return", !1);
                                case 6:
                                    a = Object(A.d)(window.location, "classId"),
                                    s = "" === i.currentSubject || "00" === i.currentSubject ? i.paperList[0].subjectCode : i.currentSubject,
                                    o = i.examId,
                                    l = n.paperId,
                                    c = fiyLocalStorage.getItem("xToken"),
                                    u = window.location.origin + "/zhixuebao/zhixuebao/transcript/analysis/main/?subjectCode=" + s + "&classId=" + a + "&paperId=" + l + "&examId=" + o + "&token=" + c,
                                    i.beginTime && i.endTime && (u += "&startSchoolYear=" + i.beginTime + "&endSchoolYear=" + i.endTime),
                                    u = Object(ke.a)(u, c),
                                    console.log(u, "zhixuebao/zhixuebao/transcript/analysis/main"),
                                    window.location.href = u;
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }, e, t)
                    }))()
                }
            }
        }
          , Le = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: t.loading,
                        expression: "loading"
                    }],
                    staticClass: "web-report-container",
                    attrs: {
                        "element-loading-text": "加载中",
                        "element-loading-spinner": "el-icon-loading"
                    }
                }, [n("div", {
                    staticClass: "exam-container"
                }, [n("div", {
                    staticClass: "report-nav"
                }, [n("span", {
                    on: {
                        click: function(e) {
                            return t.toHomeAndScoreAnalysisModule("home")
                        }
                    }
                }, [t._v("首页")]), n("i"), t._v(" "), n("span", [t._v("学情报告")])]), t._v(" "), n("div", {
                    staticClass: "other-module-jump"
                }, [n("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [n("report-gener-time", {
                    staticStyle: {
                        "margin-right": "20px"
                    },
                    attrs: {
                        isLinkage: t.isLinkage
                    },
                    on: {
                        "date-changed": t.handleDateChange
                    }
                }), t._v(" "), n("exam-list", {
                    staticClass: "exam-list clearfix",
                    attrs: {
                        beginTime: t.beginTime,
                        endTime: t.endTime
                    }
                })], 1), t._v(" "), n("div", [n("div", {
                    staticClass: "other-module fr",
                    on: {
                        click: t.goOriginalRollDetail
                    }
                }, [n("img", {
                    attrs: {
                        src: i("2aH0"),
                        alt: "原卷"
                    }
                }), t._v(" "), n("span", [t._v("原卷")])]), t._v(" "), t.isShowAnalysis ? n("div", {
                    staticClass: "other-module fr",
                    on: {
                        click: t.toAnalysisModule
                    }
                }, [n("img", {
                    attrs: {
                        src: i("3JRO"),
                        alt: "解析"
                    }
                }), t._v(" "), n("span", [t._v("解析")])]) : t._e()])])]), t._v(" "), n("div", {
                    staticClass: "container",
                    attrs: {
                        id: "report"
                    }
                }, [t.reportContentComponent ? n(t.reportContentComponent, {
                    tag: "component"
                }) : t._e()], 1)])
            },
            staticRenderFns: []
        };
        var Pe = i("VU/8")(De, Le, !1, function(t) {
            i("bhWo"),
            i("uiS9"),
            i("84kG")
        }, null, null);
        e.default = Pe.exports
    },
    "4qdD": function(t, e, i) {
        var n;
        n = function() {
            return function(t) {
                var e = {};
                function i(n) {
                    if (e[n])
                        return e[n].exports;
                    var r = e[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(r.exports, r, r.exports, i),
                    r.l = !0,
                    r.exports
                }
                return i.m = t,
                i.c = e,
                i.d = function(t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                i.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
                    ;
                    return i.d(e, "a", e),
                    e
                }
                ,
                i.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                i.p = "",
                i(i.s = 134)
            }([function(t, e, i) {
                var n = i(44)
                  , r = {
                    upperFirst: i(45),
                    lowerFirst: i(46),
                    isString: i(15),
                    isNumber: i(13),
                    isBoolean: i(47),
                    isFunction: i(48),
                    isDate: i(34),
                    isArray: i(11),
                    isNil: i(9),
                    isObject: i(17),
                    isPlainObject: i(28),
                    deepMix: i(50),
                    mix: i(20),
                    each: i(4),
                    isObjectValueEqual: function(t, e) {
                        t = Object.assign({}, t),
                        e = Object.assign({}, e);
                        var i = Object.getOwnPropertyNames(t)
                          , n = Object.getOwnPropertyNames(e);
                        if (i.length !== n.length)
                            return !1;
                        for (var r = 0, a = i.length; r < a; r++) {
                            var s = i[r];
                            if (t[s] !== e[s])
                                return !1
                        }
                        return !0
                    },
                    wrapBehavior: function(t, e) {
                        if (t["_wrap_" + e])
                            return t["_wrap_" + e];
                        var i = function(i) {
                            t[e](i)
                        };
                        return t["_wrap_" + e] = i,
                        i
                    },
                    getWrapBehavior: function(t, e) {
                        return t["_wrap_" + e]
                    },
                    parsePadding: function(t) {
                        var e, i, n, a;
                        return r.isNumber(t) || r.isString(t) ? e = n = a = i = t : r.isArray(t) && (e = t[0],
                        i = r.isNil(t[1]) ? t[0] : t[1],
                        n = r.isNil(t[2]) ? t[0] : t[2],
                        a = r.isNil(t[3]) ? i : t[3]),
                        [e, i, n, a]
                    },
                    directionEnabled: function(t, e) {
                        return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e)
                    }
                };
                r.Array = {
                    merge: function(t) {
                        for (var e = [], i = 0, n = t.length; i < n; i++)
                            e = e.concat(t[i]);
                        return e
                    },
                    values: function(t, e) {
                        for (var i = [], n = {}, a = 0, s = t.length; a < s; a++) {
                            var o = t[a][e];
                            r.isNil(o) || (r.isArray(o) ? r.each(o, function(t) {
                                n[t] || (i.push(t),
                                n[t] = !0)
                            }) : n[o] || (i.push(o),
                            n[o] = !0))
                        }
                        return i
                    },
                    firstValue: function(t, e) {
                        for (var i = null, n = 0, a = t.length; n < a; n++) {
                            var s = t[n][e];
                            if (!r.isNil(s)) {
                                i = r.isArray(s) ? s[0] : s;
                                break
                            }
                        }
                        return i
                    },
                    group: function(t, e, i) {
                        if (void 0 === i && (i = {}),
                        !e)
                            return [t];
                        var n = r.Array.groupToMap(t, e)
                          , a = [];
                        if (1 === e.length && i[e[0]]) {
                            var s = i[e[0]];
                            r.each(s, function(t) {
                                t = "_" + t,
                                a.push(n[t])
                            })
                        } else
                            for (var o in n)
                                a.push(n[o]);
                        return a
                    },
                    groupToMap: function(t, e) {
                        if (!e)
                            return {
                                0: t
                            };
                        for (var i = function(t) {
                            for (var i = "_", n = 0, r = e.length; n < r; n++)
                                i += t[e[n]] && t[e[n]].toString();
                            return i
                        }, n = {}, r = 0, a = t.length; r < a; r++) {
                            var s = t[r]
                              , o = i(s);
                            n[o] ? n[o].push(s) : n[o] = [s]
                        }
                        return n
                    },
                    remove: function(t, e) {
                        if (t) {
                            var i = t.indexOf(e);
                            -1 !== i && t.splice(i, 1)
                        }
                    },
                    getRange: function(t) {
                        if (!t.length)
                            return {
                                min: 0,
                                max: 0
                            };
                        var e = Math.max.apply(null, t);
                        return {
                            min: Math.min.apply(null, t),
                            max: e
                        }
                    }
                },
                r.mix(r, n),
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(43)
                  , r = i(0)
                  , a = {
                    version: "3.3.5",
                    scales: {},
                    widthRatio: {
                        column: .5,
                        rose: .999999,
                        multiplePie: .75
                    },
                    lineDash: [4, 4],
                    setTheme: function(t) {
                        r.deepMix(this, t)
                    }
                };
                a.setTheme(n),
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1,
                            isShape: !0,
                            attrs: {}
                        }
                    }
                    ,
                    a.getType = function() {
                        return this._attrs.type
                    }
                    ,
                    a.drawInner = function(t) {
                        var e = this.get("attrs");
                        this.createPath(t);
                        var i = t.globalAlpha;
                        if (this.hasFill()) {
                            var r = e.fillOpacity;
                            n.isNil(r) || 1 === r ? t.fill() : (t.globalAlpha = r,
                            t.fill(),
                            t.globalAlpha = i)
                        }
                        if (this.hasStroke() && e.lineWidth > 0) {
                            var a = e.strokeOpacity;
                            n.isNil(a) || 1 === a || (t.globalAlpha = a),
                            t.stroke()
                        }
                    }
                    ,
                    a.getBBox = function() {
                        var t = this._attrs.bbox;
                        return t || ((t = this.calculateBox()) && (t.x = t.minX,
                        t.y = t.minY,
                        t.width = t.maxX - t.minX,
                        t.height = t.maxY - t.minY),
                        this._attrs.bbox = t),
                        t
                    }
                    ,
                    a.calculateBox = function() {
                        return null
                    }
                    ,
                    a.createPath = function() {}
                    ,
                    r
                }(i(25));
                t.exports = r
            }
            , function(t, e) {
                t.exports = {
                    create: function() {
                        return [0, 0]
                    },
                    length: function(t) {
                        var e = t[0]
                          , i = t[1];
                        return Math.sqrt(e * e + i * i)
                    },
                    normalize: function(t, e) {
                        var i = this.length(e);
                        return 0 === i ? (t[0] = 0,
                        t[1] = 0) : (t[0] = e[0] / i,
                        t[1] = e[1] / i),
                        t
                    },
                    add: function(t, e, i) {
                        return t[0] = e[0] + i[0],
                        t[1] = e[1] + i[1],
                        t
                    },
                    sub: function(t, e, i) {
                        return t[0] = e[0] - i[0],
                        t[1] = e[1] - i[1],
                        t
                    },
                    scale: function(t, e, i) {
                        return t[0] = e[0] * i,
                        t[1] = e[1] * i,
                        t
                    },
                    dot: function(t, e) {
                        return t[0] * e[0] + t[1] * e[1]
                    },
                    direction: function(t, e) {
                        return t[0] * e[1] - e[0] * t[1]
                    },
                    angle: function(t, e) {
                        var i = this.dot(t, e) / (this.length(t) * this.length(e));
                        return Math.acos(i)
                    },
                    angleTo: function(t, e, i) {
                        var n = this.angle(t, e)
                          , r = this.direction(t, e) >= 0;
                        return i ? r ? 2 * Math.PI - n : n : r ? n : 2 * Math.PI - n
                    },
                    zero: function(t) {
                        return 0 === t[0] && 0 === t[1]
                    },
                    distance: function(t, e) {
                        var i = e[0] - t[0]
                          , n = e[1] - t[1];
                        return Math.sqrt(i * i + n * n)
                    },
                    clone: function(t) {
                        return [t[0], t[1]]
                    },
                    min: function(t, e, i) {
                        return t[0] = Math.min(e[0], i[0]),
                        t[1] = Math.min(e[1], i[1]),
                        t
                    },
                    max: function(t, e, i) {
                        return t[0] = Math.max(e[0], i[0]),
                        t[1] = Math.max(e[1], i[1]),
                        t
                    },
                    transformMat2d: function(t, e, i) {
                        var n = e[0]
                          , r = e[1];
                        return t[0] = i[0] * n + i[2] * r + i[4],
                        t[1] = i[1] * n + i[3] * r + i[5],
                        t
                    }
                }
            }
            , function(t, e, i) {
                var n = i(17)
                  , r = i(11);
                t.exports = function(t, e) {
                    if (t)
                        if (r(t))
                            for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++)
                                ;
                        else if (n(t))
                            for (var s in t)
                                if (t.hasOwnProperty(s) && !1 === e(t[s], s))
                                    break
                }
            }
            , function(t, e, i) {
                var n = {
                    Canvas: i(70),
                    Group: i(31),
                    Shape: i(2),
                    Matrix: i(23),
                    Vector2: i(3)
                };
                i(72),
                i(73),
                i(74),
                i(75),
                i(76),
                i(77),
                i(78),
                i(79),
                i(80),
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(29)
                  , a = ["color", "size", "shape"]
                  , s = i(1)
                  , o = i(54)
                  , l = i(8)
                  , c = i(22);
                function u(t) {
                    return n.isArray(t) ? t : n.isString(t) ? t.split("*") : [t]
                }
                var h = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var h = r.prototype;
                    return h.getDefaultCfg = function() {
                        return {
                            type: null,
                            data: null,
                            attrs: {},
                            scales: {},
                            container: null,
                            styleOptions: null,
                            chart: null,
                            shapeType: "",
                            generatePoints: !1,
                            attrOptions: {},
                            sortable: !1,
                            startOnZero: !0,
                            visible: !0,
                            connectNulls: !1
                        }
                    }
                    ,
                    h.init = function() {
                        this._initAttrs();
                        var t = this._processData();
                        this.get("adjust") && this._adjustData(t),
                        this.set("dataArray", t)
                    }
                    ,
                    h._getGroupScales = function() {
                        var t = this
                          , e = [];
                        return n.each(a, function(i) {
                            var r = t.getAttr(i);
                            if (r) {
                                var a = r.scales;
                                n.each(a, function(t) {
                                    t && t.isCategory && -1 === e.indexOf(t) && e.push(t)
                                })
                            }
                        }),
                        e
                    }
                    ,
                    h._groupData = function(t) {
                        var e = this.get("colDefs")
                          , i = this._getGroupScales();
                        if (i.length) {
                            var r = {}
                              , a = [];
                            return n.each(i, function(t) {
                                var i = t.field;
                                a.push(i),
                                e && e[i] && e[i].values && (r[t.field] = e[i].values)
                            }),
                            n.Array.group(t, a, r)
                        }
                        return [t]
                    }
                    ,
                    h._setAttrOptions = function(t, e) {
                        this.get("attrOptions")[t] = e
                    }
                    ,
                    h._createAttrOption = function(t, e, i, r) {
                        var a = {};
                        a.field = e,
                        i ? n.isFunction(i) ? a.callback = i : a.values = i : a.values = r,
                        this._setAttrOptions(t, a)
                    }
                    ,
                    h._initAttrs = function() {
                        var t = this.get("attrs")
                          , e = this.get("attrOptions")
                          , i = this.get("coord");
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                var a = e[r]
                                  , s = n.upperFirst(r)
                                  , l = u(a.field);
                                "position" === r && (a.coord = i);
                                for (var c = [], h = 0, f = l.length; h < f; h++) {
                                    var d = l[h]
                                      , p = this._createScale(d);
                                    c.push(p)
                                }
                                if ("position" === r) {
                                    var v = c[1];
                                    "polar" === i.type && i.transposed && this.hasAdjust("stack") && v.values.length && v.change({
                                        nice: !1,
                                        min: 0,
                                        max: Math.max.apply(null, v.values)
                                    })
                                }
                                a.scales = c;
                                var g = new o[s](a);
                                t[r] = g
                            }
                    }
                    ,
                    h._createScale = function(t) {
                        var e = this.get("scales")
                          , i = e[t];
                        return i || (i = this.get("chart").createScale(t),
                        e[t] = i),
                        i
                    }
                    ,
                    h._processData = function() {
                        for (var t = this.get("data"), e = [], i = this._groupData(t), n = 0, r = i.length; n < r; n++) {
                            var a = i[n]
                              , s = this._saveOrigin(a);
                            this.hasAdjust("dodge") && this._numberic(s),
                            e.push(s)
                        }
                        return e
                    }
                    ,
                    h._saveOrigin = function(t) {
                        for (var e = [], i = 0, n = t.length; i < n; i++) {
                            var r = t[i]
                              , a = {};
                            for (var s in r)
                                a[s] = r[s];
                            a._origin = r,
                            e.push(a)
                        }
                        return e
                    }
                    ,
                    h._numberic = function(t) {
                        for (var e = this.getAttr("position").scales, i = 0, n = t.length; i < n; i++)
                            for (var r = t[i], a = Math.min(2, e.length), s = 0; s < a; s++) {
                                var o = e[s];
                                if (o.isCategory) {
                                    var l = o.field;
                                    r[l] = o.translate(r[l])
                                }
                            }
                    }
                    ,
                    h._adjustData = function(t) {
                        var e = this.get("adjust");
                        if (e) {
                            var i = n.upperFirst(e.type);
                            if (!c[i])
                                throw new Error("not support such adjust : " + e);
                            var r = this.getXScale()
                              , a = this.getYScale()
                              , s = n.mix({
                                xField: r.field,
                                yField: a.field
                            }, e);
                            new c[i](s).processAdjust(t),
                            "Stack" === i && this._updateStackRange(a.field, a, t)
                        }
                    }
                    ,
                    h._updateStackRange = function(t, e, i) {
                        for (var r = n.Array.merge(i), a = e.min, s = e.max, o = 0, l = r.length; o < l; o++) {
                            var c = r[o]
                              , u = Math.min.apply(null, c[t])
                              , h = Math.max.apply(null, c[t]);
                            u < a && (a = u),
                            h > s && (s = h)
                        }
                        (a < e.min || s > e.max) && e.change({
                            min: a,
                            max: s
                        })
                    }
                    ,
                    h._sort = function(t) {
                        var e = this.getXScale()
                          , i = e.field
                          , r = e.type;
                        "identity" !== r && e.values.length > 1 && n.each(t, function(t) {
                            t.sort(function(t, n) {
                                return "timeCat" === r ? e._toTimeStamp(t._origin[i]) - e._toTimeStamp(n._origin[i]) : e.translate(t._origin[i]) - e.translate(n._origin[i])
                            })
                        }),
                        this.set("hasSorted", !0),
                        this.set("dataArray", t)
                    }
                    ,
                    h.paint = function() {
                        var t = this.get("dataArray")
                          , e = []
                          , i = this.getShapeFactory();
                        i.setCoord(this.get("coord")),
                        this._beforeMapping(t);
                        for (var n = 0, r = t.length; n < r; n++) {
                            var a = t[n];
                            a.length && (a = this._mapping(a),
                            e.push(a),
                            this.draw(a, i))
                        }
                        this.set("dataArray", e)
                    }
                    ,
                    h.getShapeFactory = function() {
                        var t = this.get("shapeFactory");
                        if (!t) {
                            var e = this.get("shapeType");
                            t = l.getShapeFactory(e),
                            this.set("shapeFactory", t)
                        }
                        return t
                    }
                    ,
                    h._mapping = function(t) {
                        for (var e = this.get("attrs"), i = this.getYScale().field, r = [], a = 0, s = t.length; a < s; a++) {
                            var o = t[a]
                              , l = {};
                            for (var c in l._origin = o._origin,
                            l.points = o.points,
                            l._originY = o[i],
                            e)
                                if (e.hasOwnProperty(c)) {
                                    var u = e[c]
                                      , h = u.names
                                      , f = this._getAttrValues(u, o);
                                    if (h.length > 1)
                                        for (var d = 0, p = f.length; d < p; d++) {
                                            var v = f[d];
                                            l[h[d]] = n.isArray(v) && 1 === v.length ? v[0] : v
                                        }
                                    else
                                        l[h[0]] = 1 === f.length ? f[0] : f
                                }
                            r.push(l)
                        }
                        return r
                    }
                    ,
                    h._getAttrValues = function(t, e) {
                        for (var i = t.scales, n = [], r = 0, a = i.length; r < a; r++) {
                            var s = i[r]
                              , o = s.field;
                            "identity" === s.type ? n.push(s.value) : n.push(e[o])
                        }
                        return t.mapping.apply(t, n)
                    }
                    ,
                    h.getAttrValue = function(t, e) {
                        var i = this.getAttr(t)
                          , n = null;
                        i && (n = this._getAttrValues(i, e)[0]);
                        return n
                    }
                    ,
                    h._beforeMapping = function(t) {
                        var e = this;
                        e.get("sortable") && e._sort(t),
                        e.get("generatePoints") && n.each(t, function(t) {
                            e._generatePoints(t)
                        })
                    }
                    ,
                    h.isInCircle = function() {
                        var t = this.get("coord");
                        return t && t.isPolar
                    }
                    ,
                    h.getCallbackCfg = function(t, e, i) {
                        if (!t)
                            return e;
                        var r = {}
                          , a = t.map(function(t) {
                            return i[t]
                        });
                        return n.each(e, function(t, e) {
                            n.isFunction(t) ? r[e] = t.apply(null, a) : r[e] = t
                        }),
                        r
                    }
                    ,
                    h.getDrawCfg = function(t) {
                        var e = this.isInCircle()
                          , i = {
                            origin: t,
                            x: t.x,
                            y: t.y,
                            color: t.color,
                            size: t.size,
                            shape: t.shape,
                            isInCircle: e,
                            opacity: t.opacity
                        }
                          , n = this.get("styleOptions");
                        return n && n.style && (i.style = this.getCallbackCfg(n.fields, n.style, t._origin)),
                        this.get("generatePoints") && (i.points = t.points),
                        e && (i.center = this.get("coord").center),
                        i
                    }
                    ,
                    h.draw = function(t, e) {
                        var i = this
                          , r = i.get("container")
                          , a = i.getYScale();
                        n.each(t, function(t, s) {
                            if (!a || !n.isNil(t._origin[a.field])) {
                                t.index = s;
                                var o = i.getDrawCfg(t)
                                  , l = t.shape;
                                i.drawShape(l, t, o, r, e)
                            }
                        })
                    }
                    ,
                    h.drawShape = function(t, e, i, r, a) {
                        var s = a.drawShape(t, i, r);
                        s && n.each([].concat(s), function(t) {
                            t.set("origin", e)
                        })
                    }
                    ,
                    h._generatePoints = function(t) {
                        for (var e = this.getShapeFactory(), i = this.getAttr("shape"), n = 0, r = t.length; n < r; n++) {
                            var a = t[n]
                              , s = this.createShapePointsCfg(a)
                              , o = i ? this._getAttrValues(i, a) : null
                              , l = e.getShapePoints(o, s);
                            a.points = l
                        }
                    }
                    ,
                    h.createShapePointsCfg = function(t) {
                        var e = this.getXScale()
                          , i = this.getYScale();
                        return {
                            x: this._normalizeValues(t[e.field], e),
                            y: i ? this._normalizeValues(t[i.field], i) : t.y ? t.y : .1,
                            y0: i ? i.scale(this.getYMinValue()) : void 0
                        }
                    }
                    ,
                    h.getYMinValue = function() {
                        var t = this.getYScale()
                          , e = t.min
                          , i = t.max;
                        return this.get("startOnZero") ? i <= 0 && e <= 0 ? i : e >= 0 ? e : 0 : e
                    }
                    ,
                    h._normalizeValues = function(t, e) {
                        var i = [];
                        if (n.isArray(t))
                            for (var r = 0, a = t.length; r < a; r++) {
                                var s = t[r];
                                i.push(e.scale(s))
                            }
                        else
                            i = e.scale(t);
                        return i
                    }
                    ,
                    h.getAttr = function(t) {
                        return this.get("attrs")[t]
                    }
                    ,
                    h.getXScale = function() {
                        return this.getAttr("position").scales[0]
                    }
                    ,
                    h.getYScale = function() {
                        return this.getAttr("position").scales[1]
                    }
                    ,
                    h.hasAdjust = function(t) {
                        return this.get("adjust") && this.get("adjust").type === t
                    }
                    ,
                    h._getSnap = function(t, e, i) {
                        var n, r = 0, a = this.getYScale().field;
                        if (this.hasAdjust("stack") && t.field === a) {
                            n = [],
                            i.forEach(function(t) {
                                n.push(t._originY)
                            });
                            for (var s = n.length; r < s && !(n[0][0] > e); r++) {
                                if (n[n.length - 1][1] <= e) {
                                    r = n.length - 1;
                                    break
                                }
                                if (n[r][0] <= e && n[r][1] > e)
                                    break
                            }
                        } else {
                            (n = t.values).sort(function(t, e) {
                                return t - e
                            });
                            for (var o = n.length; r < o && !((n[0] + n[1]) / 2 > e) && !((n[r - 1] + n[r]) / 2 <= e && (n[r + 1] + n[r]) / 2 > e); r++)
                                if ((n[n.length - 2] + n[n.length - 1]) / 2 <= e) {
                                    r = n.length - 1;
                                    break
                                }
                        }
                        return n[r]
                    }
                    ,
                    h.getSnapRecords = function(t) {
                        var e = this
                          , i = e.get("coord")
                          , r = e.getXScale()
                          , a = e.getYScale()
                          , s = r.field
                          , o = e.get("dataArray");
                        this.get("hasSorted") || this._sort(o);
                        var l = []
                          , c = i.invertPoint(t)
                          , u = c.x;
                        e.isInCircle() && !i.transposed && u > (1 + r.rangeMax()) / 2 && (u = r.rangeMin());
                        var h = r.invert(u);
                        r.isCategory || (h = e._getSnap(r, h));
                        var f = [];
                        if (o.forEach(function(t) {
                            t.forEach(function(t) {
                                var i = n.isNil(t._origin) ? t[s] : t._origin[s];
                                e._isEqual(i, h, r) && f.push(t)
                            })
                        }),
                        this.hasAdjust("stack") && i.isPolar && i.transposed && 1 === r.values.length) {
                            if (u >= 0 && u <= 1) {
                                var d = a.invert(c.y);
                                d = e._getSnap(a, d, f),
                                f.forEach(function(t) {
                                    (n.isArray(d) ? t._originY.toString() === d.toString() : t._originY === d) && l.push(t)
                                })
                            }
                        } else
                            l = f;
                        return l
                    }
                    ,
                    h._isEqual = function(t, e, i) {
                        return "timeCat" === i.type ? i._toTimeStamp(t) === e : e === t
                    }
                    ,
                    h.position = function(t) {
                        return this._setAttrOptions("position", {
                            field: t
                        }),
                        this
                    }
                    ,
                    h.color = function(t, e) {
                        return this._createAttrOption("color", t, e, s.colors),
                        this
                    }
                    ,
                    h.size = function(t, e) {
                        return this._createAttrOption("size", t, e, s.sizes),
                        this
                    }
                    ,
                    h.shape = function(t, e) {
                        var i = this.get("type")
                          , n = s.shapes[i] || [];
                        return this._createAttrOption("shape", t, e, n),
                        this
                    }
                    ,
                    h.style = function(t, e) {
                        var i, r = this.get("styleOptions");
                        return r || (r = {},
                        this.set("styleOptions", r)),
                        n.isObject(t) && (e = t,
                        t = null),
                        t && (i = u(t)),
                        r.fields = i,
                        r.style = e,
                        this
                    }
                    ,
                    h.adjust = function(t) {
                        return n.isString(t) && (t = {
                            type: t
                        }),
                        this.set("adjust", t),
                        this
                    }
                    ,
                    h.animate = function(t) {
                        return this.set("animateCfg", t),
                        this
                    }
                    ,
                    h.reset = function() {
                        this.set("attrOptions", {}),
                        this.set("adjust", null),
                        this.clearInner()
                    }
                    ,
                    h.clearInner = function() {
                        var t = this.get("container");
                        t && (t.clear(),
                        t.setMatrix([1, 0, 0, 1, 0, 0])),
                        t && t.clear(),
                        this.set("attrs", {}),
                        this.set("groupScales", null),
                        this.set("xDistance", null),
                        this.set("_width", null)
                    }
                    ,
                    h.clear = function() {
                        this.clearInner(),
                        this.set("scales", {})
                    }
                    ,
                    h.destroy = function() {
                        this.clear(),
                        t.prototype.destroy.call(this)
                    }
                    ,
                    h._display = function(t) {
                        this.set("visible", t);
                        var e = this.get("container")
                          , i = e.get("canvas");
                        e.set("visible", t),
                        i.draw()
                    }
                    ,
                    h.show = function() {
                        this._display(!0)
                    }
                    ,
                    h.hide = function() {
                        this._display(!1)
                    }
                    ,
                    r
                }(r);
                t.exports = h
            }
            , function(t, e) {
                var i = {}.toString;
                t.exports = function(t, e) {
                    return i.call(t) === "[object " + e + "]"
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(1)
                  , a = {}
                  , s = {
                    _coord: null,
                    draw: function(t, e) {
                        this.drawShape && this.drawShape(t, e)
                    },
                    setCoord: function(t) {
                        this._coord = t
                    },
                    parsePoint: function(t) {
                        var e = this._coord;
                        return e.isPolar && (1 === t.x && (t.x = .9999999),
                        1 === t.y && (t.y = .9999999)),
                        e.convertPoint(t)
                    },
                    parsePoints: function(t) {
                        if (!t)
                            return !1;
                        var e = this
                          , i = [];
                        return t.forEach(function(t) {
                            i.push(e.parsePoint(t))
                        }),
                        i
                    }
                }
                  , o = {
                    defaultShapeType: null,
                    setCoord: function(t) {
                        this._coord = t
                    },
                    getShape: function(t) {
                        n.isArray(t) && (t = t[0]);
                        var e = this[t] || this[this.defaultShapeType];
                        return e._coord = this._coord,
                        e
                    },
                    getShapePoints: function(t, e) {
                        var i = this.getShape(t);
                        return (i.getPoints || i.getShapePoints || this.getDefaultPoints)(e)
                    },
                    getDefaultPoints: function() {
                        return []
                    },
                    drawShape: function(t, e, i) {
                        var n = this.getShape(t);
                        return e.color || (e.color = r.colors[0]),
                        n.draw(e, i)
                    }
                };
                a.registerFactory = function(t, e) {
                    var i = n.upperFirst(t)
                      , r = n.mix({}, o, e);
                    return a[i] = r,
                    r.name = t,
                    r
                }
                ,
                a.registerShape = function(t, e, i) {
                    var r = n.upperFirst(t)
                      , o = a[r]
                      , l = n.mix({}, s, i);
                    return o[e] = l,
                    l
                }
                ,
                a.registShape = a.registerShape,
                a.getShapeFactory = function(t) {
                    return t = t || "point",
                    this[n.upperFirst(t)]
                }
                ,
                t.exports = a
            }
            , function(t, e) {
                t.exports = function(t) {
                    return null === t || void 0 === t
                }
            }
            , function(t, e, i) {
                var n = i(3)
                  , r = n.create()
                  , a = n.create()
                  , s = n.create();
                function o(t, e, i, n, r) {
                    var a = t * t;
                    return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * i + t * (-6 * i + 3 * i * t)) * t + (3 * n - 3 * n * t) * a + r * (a * t)
                }
                function l(t) {
                    for (var e, i, n, r, a, s = 1 / 0, l = -1 / 0, c = 1 / 0, u = -1 / 0, h = {
                        x: t[0],
                        y: t[1]
                    }, f = {
                        x: t[2],
                        y: t[3]
                    }, d = {
                        x: t[4],
                        y: t[5]
                    }, p = {
                        x: t[6],
                        y: t[7]
                    }, v = 0; v < 100; v++) {
                        var g = {
                            x: o(a = v / 100, (e = h).x, (i = f).x, (n = d).x, (r = p).x),
                            y: o(a, e.y, i.y, n.y, r.y)
                        };
                        g.x < s && (s = g.x),
                        g.x > l && (l = g.x),
                        g.y < c && (c = g.y),
                        g.y > u && (u = g.y)
                    }
                    return {
                        minX: s,
                        minY: c,
                        maxX: l,
                        maxY: u
                    }
                }
                t.exports = {
                    getBBoxFromPoints: function(t, e) {
                        if (0 !== t.length) {
                            for (var i = t[0], n = i.x, r = i.x, a = i.y, s = i.y, o = t.length, l = 1; l < o; l++)
                                i = t[l],
                                n = Math.min(n, i.x),
                                r = Math.max(r, i.x),
                                a = Math.min(a, i.y),
                                s = Math.max(s, i.y);
                            return {
                                minX: n - (e = e / 2 || 0),
                                minY: a - e,
                                maxX: r + e,
                                maxY: s + e
                            }
                        }
                    },
                    getBBoxFromLine: function(t, e, i, n, r) {
                        return r = r / 2 || 0,
                        {
                            minX: Math.min(t, i) - r,
                            minY: Math.min(e, n) - r,
                            maxX: Math.max(t, i) + r,
                            maxY: Math.max(e, n) + r
                        }
                    },
                    getBBoxFromArc: function(t, e, i, o, l, c) {
                        var u = Math.abs(o - l);
                        if (u % Math.PI * 2 < 1e-4 && u > 1e-4)
                            return {
                                minX: t - i,
                                minY: e - i,
                                maxX: t + i,
                                maxY: e + i
                            };
                        r[0] = Math.cos(o) * i + t,
                        r[1] = Math.sin(o) * i + e,
                        a[0] = Math.cos(l) * i + t,
                        a[1] = Math.sin(l) * i + e;
                        var h = [0, 0]
                          , f = [0, 0];
                        if (n.min(h, r, a),
                        n.max(f, r, a),
                        (o %= 2 * Math.PI) < 0 && (o += 2 * Math.PI),
                        (l %= 2 * Math.PI) < 0 && (l += 2 * Math.PI),
                        o > l && !c ? l += 2 * Math.PI : o < l && c && (o += 2 * Math.PI),
                        c) {
                            var d = l;
                            l = o,
                            o = d
                        }
                        for (var p = 0; p < l; p += Math.PI / 2)
                            p > o && (s[0] = Math.cos(p) * i + t,
                            s[1] = Math.sin(p) * i + e,
                            n.min(h, s, h),
                            n.max(f, s, f));
                        return {
                            minX: h[0],
                            minY: h[1],
                            maxX: f[0],
                            maxY: f[1]
                        }
                    },
                    getBBoxFromBezierGroup: function(t, e) {
                        for (var i = 1 / 0, n = -1 / 0, r = 1 / 0, a = -1 / 0, s = 0, o = t.length; s < o; s++) {
                            var c = l(t[s]);
                            c.minX < i && (i = c.minX),
                            c.maxX > n && (n = c.maxX),
                            c.minY < r && (r = c.minY),
                            c.maxY > a && (a = c.maxY)
                        }
                        return {
                            minX: i - (e = e / 2 || 0),
                            minY: r - e,
                            maxX: n + e,
                            maxY: a + e
                        }
                    }
                }
            }
            , function(t, e, i) {
                var n = i(7)
                  , r = Array.isArray ? Array.isArray : function(t) {
                    return n(t, "Array")
                }
                ;
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = {
                    min: 0,
                    median: .5,
                    max: 1
                }
                  , a = function() {
                    var t = e.prototype;
                    function e(t) {
                        this._initDefaultCfg(),
                        n.deepMix(this, t)
                    }
                    return t._initDefaultCfg = function() {}
                    ,
                    t._getNormalizedValue = function(t, e) {
                        return n.isNil(r[t]) ? e.scale(t) : r[t]
                    }
                    ,
                    t.parsePercentPoint = function(t, e) {
                        var i = parseFloat(e[0]) / 100
                          , n = parseFloat(e[1]) / 100
                          , r = t.start
                          , a = t.end
                          , s = Math.abs(r.x - a.x)
                          , o = Math.abs(r.y - a.y);
                        return {
                            x: s * i + Math.min(r.x, a.x),
                            y: o * n + Math.min(r.y, a.y)
                        }
                    }
                    ,
                    t.parsePoint = function(t, e) {
                        var i = this.xScale
                          , r = this.yScales;
                        if (n.isFunction(e) && (e = e(i, r)),
                        n.isString(e[0]) && -1 !== e[0].indexOf("%"))
                            return this.parsePercentPoint(t, e);
                        var a = this._getNormalizedValue(e[0], i)
                          , s = this._getNormalizedValue(e[1], r[0])
                          , o = t.convertPoint({
                            x: a,
                            y: s
                        });
                        return this.limitInPlot ? a >= 0 && a <= 1 && s >= 0 && s <= 1 ? o : null : o
                    }
                    ,
                    t.render = function() {}
                    ,
                    t.repaint = function() {
                        this.remove();
                        var t = this.coord
                          , e = this.container
                          , i = this.canvas;
                        e && !e.isDestroyed() && (this.render(t, e),
                        i.draw())
                    }
                    ,
                    t.remove = function() {
                        var t = this.element;
                        t && t.remove(!0)
                    }
                    ,
                    t.changeVisible = function(t) {
                        this.visible = t;
                        var e = this.element;
                        e && (e.set ? e.set("visible", t) : e.style.display = t ? "" : "none")
                    }
                    ,
                    e
                }();
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(7);
                t.exports = function(t) {
                    return n(t, "Number")
                }
            }
            , function(t, e, i) {
                var n = i(20)
                  , r = i(4)
                  , a = i(17)
                  , s = i(9)
                  , o = function() {
                    var t = e.prototype;
                    function e(t) {
                        this._initDefaultCfg(),
                        n(this, t),
                        this.init()
                    }
                    return t._initDefaultCfg = function() {
                        this.type = "base",
                        this.formatter = null,
                        this.range = [0, 1],
                        this.ticks = null,
                        this.values = []
                    }
                    ,
                    t.init = function() {}
                    ,
                    t.getTicks = function() {
                        var t = this
                          , e = t.ticks
                          , i = [];
                        return r(e, function(e) {
                            var n;
                            n = a(e) ? e : {
                                text: t.getText(e),
                                tickValue: e,
                                value: t.scale(e)
                            },
                            i.push(n)
                        }),
                        i
                    }
                    ,
                    t.getText = function(t, e) {
                        var i = this.formatter;
                        return t = i ? i(t, e) : t,
                        !s(t) && t.toString || (t = ""),
                        t.toString()
                    }
                    ,
                    t.rangeMin = function() {
                        return this.range[0]
                    }
                    ,
                    t.rangeMax = function() {
                        var t = this.range;
                        return t[t.length - 1]
                    }
                    ,
                    t.invert = function(t) {
                        return t
                    }
                    ,
                    t.translate = function(t) {
                        return t
                    }
                    ,
                    t.scale = function(t) {
                        return t
                    }
                    ,
                    t.clone = function() {
                        var t = this
                          , e = t.constructor
                          , i = {};
                        return r(t, function(e, n) {
                            i[n] = t[n]
                        }),
                        new e(i)
                    }
                    ,
                    t.change = function(t) {
                        return this.ticks = null,
                        n(this, t),
                        this.init(),
                        this
                    }
                    ,
                    e
                }();
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(7);
                t.exports = function(t) {
                    return n(t, "String")
                }
            }
            , function(t, e, i) {
                var n = i(15)
                  , r = i(11)
                  , a = i(20)
                  , s = i(4);
                function o(t, e) {
                    return n(e) ? e : t.invert(t.scale(e))
                }
                var l = function() {
                    function t(t) {
                        this.type = "base",
                        this.name = null,
                        this.method = null,
                        this.values = [],
                        this.scales = [],
                        this.linear = null,
                        a(this, t)
                    }
                    var e = t.prototype;
                    return e._getAttrValue = function(t, e) {
                        var i = this.values;
                        if (t.isCategory && !this.linear)
                            return i[t.translate(e) % i.length];
                        var n = t.scale(e);
                        return this.getLinearValue(n)
                    }
                    ,
                    e.getLinearValue = function(t) {
                        var e = this.values
                          , i = e.length - 1
                          , n = Math.floor(i * t)
                          , r = i * t - n
                          , a = e[n];
                        return a + ((n === i ? a : e[n + 1]) - a) * r
                    }
                    ,
                    e.callback = function(t) {
                        var e = this.scales[0];
                        return "identity" === e.type ? e.value : this._getAttrValue(e, t)
                    }
                    ,
                    e.getNames = function() {
                        for (var t = this.scales, e = this.names, i = Math.min(t.length, e.length), n = [], r = 0; r < i; r++)
                            n.push(e[r]);
                        return n
                    }
                    ,
                    e.getFields = function() {
                        var t = this.scales
                          , e = [];
                        return s(t, function(t) {
                            e.push(t.field)
                        }),
                        e
                    }
                    ,
                    e.getScale = function(t) {
                        return this.scales[this.names.indexOf(t)]
                    }
                    ,
                    e.mapping = function() {
                        for (var t = this.scales, e = this.callback, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        var a = n;
                        if (e) {
                            for (var s = 0, o = n.length; s < o; s++)
                                n[s] = this._toOriginParam(n[s], t[s]);
                            a = e.apply(this, n)
                        }
                        return a = [].concat(a)
                    }
                    ,
                    e._toOriginParam = function(t, e) {
                        var i = t;
                        if (!e.isLinear)
                            if (r(t)) {
                                i = [];
                                for (var n = 0, a = t.length; n < a; n++)
                                    i.push(o(e, t[n]))
                            } else
                                i = o(e, t);
                        return i
                    }
                    ,
                    t
                }();
                t.exports = l
            }
            , function(t, e) {
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                t.exports = function(t) {
                    var e = void 0 === t ? "undefined" : i(t);
                    return null !== t && "object" === e || "function" === e
                }
            }
            , function(t, e, i) {
                function n(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                var r = i(29)
                  , a = i(51)
                  , s = i(0)
                  , o = i(52)
                  , l = i(6)
                  , c = i(61)
                  , u = i(67)
                  , h = i(1)
                  , f = i(5).Canvas
                  , d = i(26);
                function p(t, e) {
                    return t - e
                }
                var v = function(t) {
                    var e, i;
                    i = t,
                    (e = v).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i,
                    v.initPlugins = function() {
                        return {
                            _plugins: [],
                            _cacheId: 0,
                            register: function(t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function(t) {
                                    -1 === e.indexOf(t) && e.push(t)
                                }),
                                this._cacheId++
                            },
                            unregister: function(t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function(t) {
                                    var i = e.indexOf(t);
                                    -1 !== i && e.splice(i, 1)
                                }),
                                this._cacheId++
                            },
                            clear: function() {
                                this._plugins = [],
                                this._cacheId++
                            },
                            count: function() {
                                return this._plugins.length
                            },
                            getAll: function() {
                                return this._plugins
                            },
                            notify: function(t, e, i) {
                                var n, r, a, s, o = this.descriptors(t), l = o.length;
                                for (n = 0; n < l; ++n)
                                    if ("function" == typeof (s = (r = o[n].plugin)[e]) && (a = [t].concat(i || []),
                                    !1 === s.apply(r, a)))
                                        return !1;
                                return !0
                            },
                            descriptors: function(t) {
                                var e = t._plugins || (t._plugins = {});
                                if (e.id === this._cacheId)
                                    return e.descriptors;
                                var i = []
                                  , n = [];
                                return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                                    -1 === i.indexOf(t) && (i.push(t),
                                    n.push({
                                        plugin: t
                                    }))
                                }),
                                e.descriptors = n,
                                e.id = this._cacheId,
                                n
                            }
                        }
                    }
                    ;
                    var r = v.prototype;
                    function v(e) {
                        var i, r = n(n(i = t.call(this, e) || this));
                        return s.each(l, function(t, e) {
                            var i = s.lowerFirst(e);
                            r[i] = function(e) {
                                var i = new t(e);
                                return r.addGeom(i),
                                i
                            }
                        }),
                        r._init(),
                        i
                    }
                    return r.getDefaultCfg = function() {
                        return {
                            id: null,
                            padding: h.padding,
                            data: null,
                            scales: {},
                            geoms: null,
                            colDefs: null,
                            pixelRatio: h.pixelRatio,
                            filters: null,
                            appendPadding: h.appendPadding
                        }
                    }
                    ,
                    r._syncYScales = function() {
                        var t = this.get("geoms")
                          , e = []
                          , i = []
                          , n = [];
                        s.each(t, function(t) {
                            var r = t.getYScale();
                            r.isLinear && (e.push(r),
                            i.push(r.min),
                            n.push(r.max))
                        }),
                        i = Math.min.apply(null, i),
                        n = Math.max.apply(null, n),
                        s.each(e, function(t) {
                            t.change({
                                min: i
                            }),
                            t.change({
                                max: n
                            })
                        })
                    }
                    ,
                    r._getFieldsForLegend = function() {
                        var t = []
                          , e = this.get("geoms");
                        return s.each(e, function(e) {
                            var i = e.get("attrOptions").color;
                            if (i && i.field && s.isString(i.field)) {
                                var n = i.field.split("*");
                                s.each(n, function(e) {
                                    -1 === t.indexOf(e) && t.push(e)
                                })
                            }
                        }),
                        t
                    }
                    ,
                    r._createScale = function(t, e) {
                        return this.get("scaleController").createScale(t, e)
                    }
                    ,
                    r._adjustScale = function() {
                        var t = this.get("coord")
                          , e = this.getXScale()
                          , i = this.getYScales()
                          , n = [];
                        e && n.push(e),
                        n = n.concat(i);
                        var r = t.isPolar && function(t) {
                            var e = t.startAngle
                              , i = t.endAngle;
                            return !(!s.isNil(e) && !s.isNil(i) && i - e < 2 * Math.PI)
                        }(t)
                          , a = this.get("scaleController").defs;
                        s.each(n, function(e) {
                            if ((e.isCategory || e.isIdentity) && e.values && (!a[e.field] || !a[e.field].range)) {
                                var i, n = e.values.length;
                                if (1 === n)
                                    i = [.5, 1];
                                else {
                                    var s = 0;
                                    i = r ? t.transposed ? [(s = 1 / n * h.widthRatio.multiplePie) / 2, 1 - s / 2] : [0, 1 - 1 / n] : [s = 1 / n * 1 / 2, 1 - s]
                                }
                                e.range = i
                            }
                        });
                        for (var o = this.get("geoms"), l = 0; l < o.length; l++) {
                            var c = o[l];
                            if ("interval" === c.get("type")) {
                                var u = c.getYScale()
                                  , f = u.field
                                  , d = u.min
                                  , p = u.max
                                  , v = u.type;
                                a[f] && a[f].min || "time" === v || (d > 0 ? u.change({
                                    min: 0
                                }) : p <= 0 && u.change({
                                    max: 0
                                }))
                            }
                        }
                    }
                    ,
                    r._removeGeoms = function() {
                        for (var t = this.get("geoms"); t.length > 0; ) {
                            t.shift().destroy()
                        }
                    }
                    ,
                    r._clearGeoms = function() {
                        for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++) {
                            t[e].clear()
                        }
                    }
                    ,
                    r._clearInner = function() {
                        this.set("scales", {}),
                        this.set("legendItems", null),
                        this._clearGeoms(),
                        v.plugins.notify(this, "clearInner"),
                        this.get("axisController") && this.get("axisController").clear()
                    }
                    ,
                    r._execFilter = function(t) {
                        var e = this.get("filters");
                        return e && (t = t.filter(function(t) {
                            var i = !0;
                            return s.each(e, function(e, n) {
                                if (e && !(i = e(t[n], t)))
                                    return !1
                            }),
                            i
                        })),
                        t
                    }
                    ,
                    r._initGeoms = function(t) {
                        for (var e = this.get("coord"), i = this.get("filteredData"), n = this.get("colDefs"), r = 0, a = t.length; r < a; r++) {
                            var s = t[r];
                            s.set("data", i),
                            s.set("coord", e),
                            s.set("colDefs", n),
                            s.init()
                        }
                    }
                    ,
                    r._initCoord = function() {
                        var t = this.get("plotRange")
                          , e = s.mix({
                            type: "cartesian"
                        }, this.get("coordCfg"), {
                            plot: t
                        })
                          , i = e.type
                          , n = new (0,
                        o[s.upperFirst(i)])(e);
                        this.set("coord", n)
                    }
                    ,
                    r._initLayout = function() {
                        var t = this.get("_padding");
                        t || (t = this.get("margin") || this.get("padding"),
                        t = s.parsePadding(t));
                        var e = "auto" === t[0] ? 0 : t[0]
                          , i = "auto" === t[1] ? 0 : t[1]
                          , n = "auto" === t[2] ? 0 : t[2]
                          , r = "auto" === t[3] ? 0 : t[3]
                          , o = this.get("width")
                          , l = this.get("height")
                          , c = new a({
                            start: {
                                x: r,
                                y: e
                            },
                            end: {
                                x: o - i,
                                y: l - n
                            }
                        });
                        this.set("plotRange", c),
                        this.set("plot", c)
                    }
                    ,
                    r._initCanvas = function() {
                        try {
                            var t = new f({
                                el: this.get("el") || this.get("id"),
                                context: this.get("context"),
                                pixelRatio: this.get("pixelRatio"),
                                width: this.get("width"),
                                height: this.get("height"),
                                fontFamily: h.fontFamily
                            });
                            this.set("canvas", t),
                            this.set("width", t.get("width")),
                            this.set("height", t.get("height"))
                        } catch (t) {
                            throw t
                        }
                        v.plugins.notify(this, "afterCanvasInit"),
                        this._initLayout()
                    }
                    ,
                    r._initLayers = function() {
                        var t = this.get("canvas");
                        this.set("backPlot", t.addGroup()),
                        this.set("middlePlot", t.addGroup({
                            zIndex: 10
                        })),
                        this.set("frontPlot", t.addGroup({
                            zIndex: 20
                        }))
                    }
                    ,
                    r._init = function() {
                        this._initCanvas(),
                        this._initLayers(),
                        this.set("geoms", []),
                        this.set("scaleController", new c),
                        this.set("axisController", new u({
                            frontPlot: this.get("frontPlot").addGroup({
                                className: "axisContainer"
                            }),
                            backPlot: this.get("backPlot").addGroup({
                                className: "axisContainer"
                            }),
                            chart: this
                        })),
                        v.plugins.notify(this, "init")
                    }
                    ,
                    r.source = function(t, e) {
                        return this.set("data", t),
                        e && this.scale(e),
                        this
                    }
                    ,
                    r.scale = function(t, e) {
                        var i = this.get("colDefs") || {};
                        return s.isObject(t) ? s.mix(i, t) : i[t] = e,
                        this.set("colDefs", i),
                        this.get("scaleController").defs = i,
                        this
                    }
                    ,
                    r.axis = function(t, e) {
                        var i = this.get("axisController");
                        return t ? (i.axisCfg = i.axisCfg || {},
                        i.axisCfg[t] = e) : i.axisCfg = null,
                        this
                    }
                    ,
                    r.coord = function(t, e) {
                        var i;
                        return s.isObject(t) ? i = t : (i = e || {}).type = t || "cartesian",
                        this.set("coordCfg", i),
                        this
                    }
                    ,
                    r.filter = function(t, e) {
                        var i = this.get("filters") || {};
                        i[t] = e,
                        this.set("filters", i)
                    }
                    ,
                    r.render = function() {
                        var t = this.get("canvas")
                          , e = this.get("geoms")
                          , i = this.get("data") || []
                          , n = this._execFilter(i);
                        this.set("filteredData", n),
                        this._initCoord(),
                        v.plugins.notify(this, "beforeGeomInit"),
                        this._initGeoms(e),
                        this.get("syncY") && this._syncYScales(),
                        this._adjustScale(),
                        v.plugins.notify(this, "beforeGeomDraw"),
                        this._renderAxis();
                        var r = this.get("middlePlot");
                        if (this.get("limitInPlot") && !r.attr("clip")) {
                            var a = this.get("coord")
                              , s = d.getClip(a);
                            s.set("canvas", r.get("canvas")),
                            r.attr("clip", s)
                        }
                        for (var o = 0, l = e.length; o < l; o++) {
                            e[o].paint()
                        }
                        return v.plugins.notify(this, "afterGeomDraw"),
                        t.sort(),
                        this.get("frontPlot").sort(),
                        v.plugins.notify(this, "beforeCanvasDraw"),
                        t.draw(),
                        this
                    }
                    ,
                    r.clear = function() {
                        return v.plugins.notify(this, "clear"),
                        this._removeGeoms(),
                        this._clearInner(),
                        this.set("filters", null),
                        this.set("isUpdate", !1),
                        this.set("_padding", null),
                        this.get("canvas").draw(),
                        this
                    }
                    ,
                    r.repaint = function() {
                        this.set("isUpdate", !0),
                        v.plugins.notify(this, "repaint"),
                        this._clearInner(),
                        this.render()
                    }
                    ,
                    r.changeData = function(t) {
                        this.set("data", t),
                        v.plugins.notify(this, "changeData"),
                        this.set("_padding", null),
                        this.repaint()
                    }
                    ,
                    r.changeSize = function(t, e) {
                        return t ? this.set("width", t) : t = this.get("width"),
                        e ? this.set("height", e) : e = this.get("height"),
                        this.get("canvas").changeSize(t, e),
                        this._initLayout(),
                        this.repaint(),
                        this
                    }
                    ,
                    r.destroy = function() {
                        this.clear(),
                        this.get("canvas").destroy(),
                        v.plugins.notify(this, "afterCanvasDestroyed"),
                        this._interactions && s.each(this._interactions, function(t) {
                            t.destroy()
                        }),
                        t.prototype.destroy.call(this)
                    }
                    ,
                    r.getPosition = function(t) {
                        var e = this.get("coord")
                          , i = this.getXScale()
                          , n = this.getYScales()[0]
                          , r = i.field
                          , a = i.scale(t[r])
                          , s = n.field
                          , o = n.scale(t[s]);
                        return e.convertPoint({
                            x: a,
                            y: o
                        })
                    }
                    ,
                    r.getRecord = function(t) {
                        var e = this.get("coord")
                          , i = this.getXScale()
                          , n = this.getYScales()[0]
                          , r = e.invertPoint(t)
                          , a = {};
                        return a[i.field] = i.invert(r.x),
                        a[n.field] = n.invert(r.y),
                        a
                    }
                    ,
                    r.getSnapRecords = function(t) {
                        var e = this.get("geoms")[0]
                          , i = [];
                        return e && (i = e.getSnapRecords(t)),
                        i
                    }
                    ,
                    r.createScale = function(t) {
                        var e = this.get("data")
                          , i = this.get("filteredData");
                        i.length && (-1 === this._getFieldsForLegend().indexOf(t) && (e = i));
                        var n = this.get("scales");
                        return n[t] || (n[t] = this._createScale(t, e)),
                        n[t]
                    }
                    ,
                    r.addGeom = function(t) {
                        var e = this.get("geoms")
                          , i = this.get("middlePlot");
                        e.push(t),
                        t.set("chart", this),
                        t.set("container", i.addGroup())
                    }
                    ,
                    r.getXScale = function() {
                        return this.get("geoms")[0].getXScale()
                    }
                    ,
                    r.getYScales = function() {
                        var t = this.get("geoms")
                          , e = [];
                        return s.each(t, function(t) {
                            var i = t.getYScale();
                            -1 === e.indexOf(i) && e.push(i)
                        }),
                        e
                    }
                    ,
                    r.getLegendItems = function() {
                        if (this.get("legendItems"))
                            return this.get("legendItems");
                        var t = {}
                          , e = []
                          , i = this.get("geoms");
                        return s.each(i, function(i) {
                            var n = i.getAttr("color");
                            if (n) {
                                var r = n.getScale("color");
                                if ("identity" !== r.type && !function(t, e) {
                                    var i = !1;
                                    return s.each(t, function(t) {
                                        var n = [].concat(t.values)
                                          , r = [].concat(e.values);
                                        t.type !== e.type || t.field !== e.field || n.sort(p).toString() !== r.sort(p).toString() || (i = !0)
                                    }),
                                    i
                                }(e, r)) {
                                    e.push(r);
                                    var a = r.field
                                      , o = r.getTicks()
                                      , l = [];
                                    s.each(o, function(t) {
                                        var e = t.text
                                          , i = t.value
                                          , a = r.invert(i)
                                          , s = {
                                            fill: n.mapping(a).join("") || h.defaultColor,
                                            radius: 3,
                                            symbol: "circle",
                                            stroke: "#fff"
                                        };
                                        l.push({
                                            name: e,
                                            dataValue: a,
                                            checked: !0,
                                            marker: s
                                        })
                                    }),
                                    t[a] = l
                                }
                            }
                        }),
                        this.set("legendItems", t),
                        t
                    }
                    ,
                    r.registerPlugins = function(t) {
                        var e = this
                          , i = e.get("plugins") || [];
                        s.isArray(i) || (i = [i]),
                        [].concat(t).forEach(function(t) {
                            -1 === i.indexOf(t) && (t.init && t.init(e),
                            i.push(t))
                        }),
                        v.plugins._cacheId++,
                        e.set("plugins", i)
                    }
                    ,
                    r._renderAxis = function() {
                        var t = this.get("axisController")
                          , e = this.getXScale()
                          , i = this.getYScales()
                          , n = this.get("coord");
                        v.plugins.notify(this, "beforeRenderAxis"),
                        t.createAxis(n, e, i)
                    }
                    ,
                    r._isAutoPadding = function() {
                        if (this.get("_padding"))
                            return !1;
                        var t = this.get("padding");
                        return s.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t
                    }
                    ,
                    r._updateLayout = function(t) {
                        var e = this.get("width")
                          , i = this.get("height")
                          , n = {
                            x: t[3],
                            y: t[0]
                        }
                          , r = {
                            x: e - t[1],
                            y: i - t[2]
                        }
                          , a = this.get("plot")
                          , s = this.get("coord");
                        a.reset(n, r),
                        s.reset(a)
                    }
                    ,
                    v
                }(r);
                v.plugins = v.initPlugins(),
                t.exports = v
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = {
                    splitPoints: function(t) {
                        var e = []
                          , i = t.x
                          , r = t.y;
                        return (r = n.isArray(r) ? r : [r]).forEach(function(t, r) {
                            var a = {
                                x: n.isArray(i) ? i[r] : i,
                                y: t
                            };
                            e.push(a)
                        }),
                        e
                    },
                    splitArray: function(t, e, i) {
                        if (!t.length)
                            return [];
                        var r, a = [], s = [];
                        return n.each(t, function(t) {
                            r = t._origin ? t._origin[e] : t[e],
                            i ? n.isNil(r) || s.push(t) : n.isArray(r) && n.isNil(r[0]) || n.isNil(r) ? s.length && (a.push(s),
                            s = []) : s.push(t)
                        }),
                        s.length && a.push(s),
                        a
                    }
                };
                t.exports = r
            }
            , function(t, e) {
                function i(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i])
                }
                t.exports = function(t, e, n, r) {
                    return e && i(t, e),
                    n && i(t, n),
                    r && i(t, r),
                    t
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = function() {
                    var t = e.prototype;
                    function e(t) {
                        var e, i;
                        this._initDefaultCfg(),
                        n.mix(this, t),
                        this.plot ? (e = this.plot.bl,
                        i = this.plot.tr,
                        this.start = e,
                        this.end = i) : (e = this.start,
                        i = this.end),
                        this.init(e, i)
                    }
                    return t._initDefaultCfg = function() {}
                    ,
                    t.init = function() {}
                    ,
                    t.convertPoint = function(t) {
                        return t
                    }
                    ,
                    t.invertPoint = function(t) {
                        return t
                    }
                    ,
                    t.reset = function(t) {
                        this.plot = t;
                        var e = t.bl
                          , i = t.tr;
                        this.start = e,
                        this.end = i,
                        this.init(e, i)
                    }
                    ,
                    e
                }();
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(60)
                  , r = function() {
                    var t = e.prototype;
                    function e(t) {
                        this._initDefaultCfg(),
                        n(this, t)
                    }
                    return t._initDefaultCfg = function() {
                        this.adjustNames = ["x", "y"]
                    }
                    ,
                    t.processAdjust = function() {}
                    ,
                    e
                }();
                t.exports = r
            }
            , function(t, e) {
                var i = {
                    multiply: function(t, e) {
                        return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
                    },
                    scale: function(t, e, i) {
                        return t[0] = e[0] * i[0],
                        t[1] = e[1] * i[0],
                        t[2] = e[2] * i[1],
                        t[3] = e[3] * i[1],
                        t[4] = e[4],
                        t[5] = e[5],
                        t
                    },
                    rotate: function(t, e, i) {
                        var n = Math.cos(i)
                          , r = Math.sin(i)
                          , a = e[0] * n + e[2] * r
                          , s = e[1] * n + e[3] * r
                          , o = e[0] * -r + e[2] * n
                          , l = e[1] * -r + e[3] * n;
                        return t[0] = a,
                        t[1] = s,
                        t[2] = o,
                        t[3] = l,
                        t[4] = e[4],
                        t[5] = e[5],
                        t
                    },
                    translate: function(t, e, i) {
                        return t[0] = e[0],
                        t[1] = e[1],
                        t[2] = e[2],
                        t[3] = e[3],
                        t[4] = e[4] + e[0] * i[0] + e[2] * i[1],
                        t[5] = e[5] + e[1] * i[0] + e[3] * i[1],
                        t
                    },
                    transform: function(t, e) {
                        for (var n = [].concat(t), r = 0, a = e.length; r < a; r++) {
                            var s = e[r];
                            switch (s[0]) {
                            case "t":
                                i.translate(n, n, [s[1], s[2]]);
                                break;
                            case "s":
                                i.scale(n, n, [s[1], s[2]]);
                                break;
                            case "r":
                                i.rotate(n, n, s[1])
                            }
                        }
                        return n
                    }
                };
                t.exports = i
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(1)
                  , a = i(3)
                  , s = function() {
                    var t = e.prototype;
                    function e(t) {
                        this._initDefaultCfg(),
                        n.mix(this, t),
                        this.draw()
                    }
                    return t._initDefaultCfg = function() {
                        this.ticks = [],
                        this.tickLine = {},
                        this.offsetFactor = 1,
                        this.frontContainer = null,
                        this.backContainer = null,
                        this.gridPoints = []
                    }
                    ,
                    t.draw = function() {
                        var t = this.line
                          , e = this.tickLine
                          , i = this.label
                          , n = this.grid;
                        n && this.drawGrid(n),
                        e && this.drawTicks(e),
                        t && this.drawLine(t),
                        i && this.drawLabels()
                    }
                    ,
                    t.drawTicks = function(t) {
                        var e = this
                          , i = e.ticks
                          , r = t.length
                          , a = e.getContainer(t.top);
                        n.each(i, function(i) {
                            var s = e.getOffsetPoint(i.value)
                              , o = e.getSidePoint(s, r);
                            a.addShape("line", {
                                className: "axis-tick",
                                attrs: n.mix({
                                    x1: s.x,
                                    y1: s.y,
                                    x2: o.x,
                                    y2: o.y
                                }, t)
                            })._id = e._id + "-ticks"
                        })
                    }
                    ,
                    t.drawLabels = function() {
                        var t = this
                          , e = t.labelOffset
                          , i = t.labels;
                        n.each(i, function(i) {
                            var r = t.getContainer(i.get("top"))
                              , a = t.getOffsetPoint(i.get("value"))
                              , s = t.getSidePoint(a, e)
                              , o = s.x
                              , l = s.y;
                            i.attr(n.mix({
                                x: o,
                                y: l
                            }, t.getTextAlignInfo(a, e), i.get("textStyle"))),
                            i._id = t._id + "-" + i.attr("text"),
                            r.add(i)
                        })
                    }
                    ,
                    t.drawLine = function() {}
                    ,
                    t.drawGrid = function(t) {
                        var e = this
                          , i = e.gridPoints
                          , s = e.ticks
                          , o = t
                          , l = i.length;
                        n.each(i, function(i, c) {
                            if (n.isFunction(t)) {
                                var u = s[c] || {}
                                  , h = t(u.text, c, l);
                                o = h ? n.mix({}, r._defaultAxis.grid, h) : null
                            }
                            if (o) {
                                var f, d = o.type, p = i.points, v = e.getContainer(o.top);
                                if ("arc" === d) {
                                    var g = e.center
                                      , m = e.startAngle
                                      , y = e.endAngle
                                      , x = a.length([p[0].x - g.x, p[0].y - g.y]);
                                    f = v.addShape("Arc", {
                                        className: "axis-grid",
                                        attrs: n.mix({
                                            x: g.x,
                                            y: g.y,
                                            startAngle: m,
                                            endAngle: y,
                                            r: x
                                        }, o)
                                    })
                                } else
                                    f = v.addShape("Polyline", {
                                        className: "axis-grid",
                                        attrs: n.mix({
                                            points: p
                                        }, o)
                                    });
                                f._id = i._id
                            }
                        })
                    }
                    ,
                    t.getOffsetPoint = function() {}
                    ,
                    t.getAxisVector = function() {}
                    ,
                    t.getOffsetVector = function(t, e) {
                        var i = this.getAxisVector(t)
                          , n = a.normalize([], i)
                          , r = this.offsetFactor
                          , s = [-1 * n[1] * r, n[0] * r];
                        return a.scale([], s, e)
                    }
                    ,
                    t.getSidePoint = function(t, e) {
                        var i = this.getOffsetVector(t, e);
                        return {
                            x: t.x + i[0],
                            y: t.y + i[1]
                        }
                    }
                    ,
                    t.getTextAlignInfo = function(t, e) {
                        var i = this.getOffsetVector(t, e);
                        return {
                            textAlign: i[0] > 0 ? "left" : i[0] < 0 ? "right" : "center",
                            textBaseline: i[1] > 0 ? "top" : i[1] < 0 ? "bottom" : "middle"
                        }
                    }
                    ,
                    t.getContainer = function(t) {
                        var e = this.frontContainer
                          , i = this.backContainer;
                        return t ? e : i
                    }
                    ,
                    e
                }();
                t.exports = s
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(23)
                  , a = i(3)
                  , s = i(71);
                var o = {
                    stroke: "strokeStyle",
                    fill: "fillStyle",
                    opacity: "globalAlpha"
                }
                  , l = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "shadow"]
                  , c = ["circle", "sector", "polygon", "rect", "polyline"]
                  , u = function() {
                    var t = e.prototype;
                    function e(t) {
                        this._initProperties(),
                        n.mix(this._attrs, t);
                        var e = this._attrs.attrs;
                        e && this.initAttrs(e),
                        this.initTransform()
                    }
                    return t._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1
                        }
                    }
                    ,
                    t.get = function(t) {
                        return this._attrs[t]
                    }
                    ,
                    t.set = function(t, e) {
                        this._attrs[t] = e
                    }
                    ,
                    t.isGroup = function() {
                        return this.get("isGroup")
                    }
                    ,
                    t.isShape = function() {
                        return this.get("isShape")
                    }
                    ,
                    t.initAttrs = function(t) {
                        this.attr(n.mix(this.getDefaultAttrs(), t))
                    }
                    ,
                    t.getDefaultAttrs = function() {
                        return {}
                    }
                    ,
                    t._setAttr = function(t, e) {
                        var i = this._attrs.attrs;
                        if ("clip" === t)
                            e = this._setAttrClip(e);
                        else {
                            var n = o[t];
                            n && (i[n] = e)
                        }
                        i[t] = e
                    }
                    ,
                    t._getAttr = function(t) {
                        return this._attrs.attrs[t]
                    }
                    ,
                    t._setAttrClip = function(t) {
                        return t && c.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)),
                        t.set("parent", this.get("parent")),
                        t.set("context", this.get("context")),
                        t) : null
                    }
                    ,
                    t.attr = function(t, e) {
                        if (this.get("destroyed"))
                            return null;
                        var i = arguments.length;
                        if (0 === i)
                            return this._attrs.attrs;
                        if (n.isObject(t)) {
                            for (var r in this._attrs.bbox = null,
                            t)
                                this._setAttr(r, t[r]);
                            return this._afterAttrsSet && this._afterAttrsSet(),
                            this
                        }
                        return 2 === i ? (this._attrs.bbox = null,
                        this._setAttr(t, e),
                        this._afterAttrsSet && this._afterAttrsSet(),
                        this) : this._getAttr(t)
                    }
                    ,
                    t.getParent = function() {
                        return this.get("parent")
                    }
                    ,
                    t.draw = function(t) {
                        this.get("destroyed") || this.get("visible") && (this.setContext(t),
                        this.drawInner(t),
                        this.restoreContext(t))
                    }
                    ,
                    t.setContext = function(t) {
                        var e = this._attrs.attrs.clip;
                        t.save(),
                        e && (e.resetTransform(t),
                        e.createPath(t),
                        t.clip()),
                        this.resetContext(t),
                        this.resetTransform(t)
                    }
                    ,
                    t.restoreContext = function(t) {
                        t.restore()
                    }
                    ,
                    t.resetContext = function(t) {
                        var e = this._attrs.attrs;
                        if (!this._attrs.isGroup)
                            for (var i in e)
                                if (l.indexOf(i) > -1) {
                                    var r = e[i];
                                    "fillStyle" !== i && "strokeStyle" !== i || (r = s.parseStyle(r, this, t)),
                                    "lineDash" === i && t.setLineDash && n.isArray(r) ? t.setLineDash(r) : t[i] = r
                                }
                    }
                    ,
                    t.hasFill = function() {
                        return this.get("canFill") && this._attrs.attrs.fillStyle
                    }
                    ,
                    t.hasStroke = function() {
                        return this.get("canStroke") && this._attrs.attrs.strokeStyle
                    }
                    ,
                    t.drawInner = function() {}
                    ,
                    t.show = function() {
                        return this.set("visible", !0),
                        this
                    }
                    ,
                    t.hide = function() {
                        return this.set("visible", !1),
                        this
                    }
                    ,
                    t.isVisible = function() {
                        return this.get("visible")
                    }
                    ,
                    t._removeFromParent = function() {
                        var t = this.get("parent");
                        if (t) {
                            var e = t.get("children");
                            n.Array.remove(e, this)
                        }
                        return this
                    }
                    ,
                    t.remove = function(t) {
                        t ? this.destroy() : this._removeFromParent()
                    }
                    ,
                    t.destroy = function() {
                        if (this.get("destroyed"))
                            return null;
                        this._removeFromParent(),
                        this._attrs = {},
                        this.set("destroyed", !0)
                    }
                    ,
                    t.getBBox = function() {
                        return {
                            minX: 0,
                            maxX: 0,
                            minY: 0,
                            maxY: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    ,
                    t.initTransform = function() {
                        var t = this._attrs.attrs || {};
                        t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]),
                        this._attrs.attrs = t
                    }
                    ,
                    t.getMatrix = function() {
                        return this._attrs.attrs.matrix
                    }
                    ,
                    t.setMatrix = function(t) {
                        this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]]
                    }
                    ,
                    t.transform = function(t) {
                        var e = this._attrs.attrs.matrix;
                        return this._attrs.attrs.matrix = r.transform(e, t),
                        this
                    }
                    ,
                    t.setTransform = function(t) {
                        return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0],
                        this.transform(t)
                    }
                    ,
                    t.translate = function(t, e) {
                        var i = this._attrs.attrs.matrix;
                        r.translate(i, i, [t, e])
                    }
                    ,
                    t.rotate = function(t) {
                        var e = this._attrs.attrs.matrix;
                        r.rotate(e, e, t)
                    }
                    ,
                    t.scale = function(t, e) {
                        var i = this._attrs.attrs.matrix;
                        r.scale(i, i, [t, e])
                    }
                    ,
                    t.moveTo = function(t, e) {
                        var i = this._attrs.x || 0
                          , n = this._attrs.y || 0;
                        this.translate(t - i, e - n),
                        this.set("x", t),
                        this.set("y", e)
                    }
                    ,
                    t.apply = function(t) {
                        var e = this._attrs.attrs.matrix;
                        return a.transformMat2d(t, t, e),
                        this
                    }
                    ,
                    t.resetTransform = function(t) {
                        var e, i = this._attrs.attrs.matrix;
                        (1 !== (e = i)[0] || 0 !== e[1] || 0 !== e[2] || 1 !== e[3] || 0 !== e[4] || 0 !== e[5]) && t.transform(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                    ,
                    t.isDestroyed = function() {
                        return this.get("destroyed")
                    }
                    ,
                    e
                }();
                t.exports = u
            }
            , function(t, e, i) {
                var n = i(5).Shape;
                t.exports = {
                    getClip: function(t) {
                        var e, i = t.start, r = t.end, a = r.x - i.x, s = Math.abs(r.y - i.y);
                        if (t.isPolar) {
                            var o = t.circleRadius
                              , l = t.center
                              , c = t.startAngle
                              , u = t.endAngle;
                            e = new n.Sector({
                                attrs: {
                                    x: l.x,
                                    y: l.y,
                                    r: o,
                                    r0: 0,
                                    startAngle: c,
                                    endAngle: u
                                }
                            })
                        } else
                            e = new n.Rect({
                                attrs: {
                                    x: i.x,
                                    y: r.y - 10,
                                    width: a,
                                    height: s + 20
                                }
                            });
                        return e.isClip = !0,
                        e
                    },
                    isPointInPlot: function(t, e) {
                        var i = t.x
                          , n = t.y
                          , r = e.tl
                          , a = e.tr
                          , s = e.br;
                        return i >= r.x && i <= a.x && n >= r.y && n <= s.y
                    }
                }
            }
            , function(t, e, i) {
                var n = i(9);
                t.exports = function(t) {
                    return n(t) ? "" : t.toString()
                }
            }
            , function(t, e, i) {
                var n = i(49)
                  , r = i(7);
                t.exports = function(t) {
                    if (!n(t) || !r(t, "Object"))
                        return !1;
                    if (null === Object.getPrototypeOf(t))
                        return !0;
                    for (var e = t; null !== Object.getPrototypeOf(e); )
                        e = Object.getPrototypeOf(e);
                    return Object.getPrototypeOf(t) === e
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = function() {
                    var t = e.prototype;
                    function e(t) {
                        var e = {}
                          , i = this.getDefaultCfg();
                        this._attrs = e,
                        n.mix(e, i, t)
                    }
                    return t.getDefaultCfg = function() {
                        return {}
                    }
                    ,
                    t.get = function(t) {
                        return this._attrs[t]
                    }
                    ,
                    t.set = function(t, e) {
                        this._attrs[t] = e
                    }
                    ,
                    t.destroy = function() {
                        this._attrs = {},
                        this.destroyed = !0
                    }
                    ,
                    e
                }();
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(2)
                  , a = {}
                  , s = "_INDEX";
                t.exports = {
                    getGroupClass: function() {},
                    getChildren: function() {
                        return this.get("children")
                    },
                    addShape: function(t, e) {
                        void 0 === e && (e = {});
                        var i = this.get("canvas")
                          , s = a[t];
                        s || (s = n.upperFirst(t),
                        a[t] = s),
                        e.canvas = i,
                        "Text" === s && i && i.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || i.get("fontFamily"));
                        var o = new r[s](e);
                        return this.add(o),
                        o
                    },
                    addGroup: function(t) {
                        var e = this.get("canvas")
                          , i = this.getGroupClass();
                        (t = n.mix({}, t)).canvas = e,
                        t.parent = this;
                        var r = new i(t);
                        return this.add(r),
                        r
                    },
                    contain: function(t) {
                        return this.get("children").indexOf(t) > -1
                    },
                    sort: function() {
                        for (var t, e = this.get("children"), i = 0, n = e.length; i < n; i++) {
                            e[i][s] = i
                        }
                        return e.sort((t = function(t, e) {
                            return t.get("zIndex") - e.get("zIndex")
                        }
                        ,
                        function(e, i) {
                            var n = t(e, i);
                            return 0 === n ? e[s] - i[s] : n
                        }
                        )),
                        this
                    },
                    clear: function() {
                        for (var t = this.get("children"); 0 !== t.length; )
                            t[t.length - 1].remove(!0);
                        return this
                    },
                    add: function(t) {
                        var e = this.get("children");
                        n.isArray(t) || (t = [t]);
                        for (var i = 0, r = t.length; i < r; i++) {
                            var a = t[i]
                              , s = a.get("parent");
                            if (s) {
                                var o = s.get("children");
                                n.Array.remove(o, a)
                            }
                            this._setEvn(a),
                            e.push(a)
                        }
                        return this
                    },
                    _setEvn: function(t) {
                        t._attrs.parent = this,
                        t._attrs.context = this._attrs.context,
                        t._attrs.canvas = this._attrs.canvas;
                        var e = t._attrs.attrs.clip;
                        if (e && (e.set("parent", this),
                        e.set("context", this.get("context"))),
                        t._attrs.isGroup)
                            for (var i = t._attrs.children, n = 0, r = i.length; n < r; n++)
                                t._setEvn(i[n])
                    }
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(25)
                  , a = i(30)
                  , s = i(3)
                  , o = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = n.prototype;
                    return r._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1,
                            isGroup: !0,
                            children: []
                        }
                    }
                    ,
                    r.drawInner = function(t) {
                        for (var e = this.get("children"), i = 0, n = e.length; i < n; i++) {
                            e[i].draw(t)
                        }
                        return this
                    }
                    ,
                    r.getBBox = function() {
                        for (var t = 1 / 0, e = -1 / 0, i = 1 / 0, n = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) {
                            var l = r[a];
                            if (l.get("visible")) {
                                var c = l.getBBox();
                                if (!c)
                                    continue;
                                var u = [c.minX, c.minY]
                                  , h = [c.minX, c.maxY]
                                  , f = [c.maxX, c.minY]
                                  , d = [c.maxX, c.maxY]
                                  , p = l.attr("matrix");
                                s.transformMat2d(u, u, p),
                                s.transformMat2d(h, h, p),
                                s.transformMat2d(f, f, p),
                                s.transformMat2d(d, d, p),
                                t = Math.min(u[0], h[0], f[0], d[0], t),
                                e = Math.max(u[0], h[0], f[0], d[0], e),
                                i = Math.min(u[1], h[1], f[1], d[1], i),
                                n = Math.max(u[1], h[1], f[1], d[1], n)
                            }
                        }
                        return {
                            minX: t,
                            minY: i,
                            maxX: e,
                            maxY: n,
                            x: t,
                            y: i,
                            width: e - t,
                            height: n - i
                        }
                    }
                    ,
                    r.destroy = function() {
                        this.get("destroyed") || (this.clear(),
                        t.prototype.destroy.call(this))
                    }
                    ,
                    n
                }(r);
                n.mix(o.prototype, a, {
                    getGroupClass: function() {
                        return o
                    }
                }),
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(8)
                  , a = i(19)
                  , s = i(1)
                  , o = r.registerFactory("line", {
                    defaultShapeType: "line"
                });
                n.each(["line", "smooth", "dash"], function(t) {
                    r.registerShape("line", t, {
                        draw: function(e, i) {
                            var r = "smooth" === t
                              , o = function(t) {
                                var e = {
                                    strokeStyle: t.color
                                };
                                return t.size >= 0 && (e.lineWidth = t.size),
                                n.mix(e, t.style),
                                n.mix({}, s.shape.line, e)
                            }(e);
                            return "dash" === t && (o.lineDash = s.lineDash),
                            function(t, e, i, r) {
                                var s = t.points;
                                if (s.length && n.isArray(s[0].y)) {
                                    for (var o = [], l = [], c = 0, u = s.length; c < u; c++) {
                                        var h = s[c]
                                          , f = a.splitPoints(h);
                                        l.push(f[0]),
                                        o.push(f[1])
                                    }
                                    return t.isInCircle && (o.push(o[0]),
                                    l.push(l[0])),
                                    t.isStack ? e.addShape("Polyline", {
                                        className: "line",
                                        attrs: n.mix({
                                            points: o,
                                            smooth: r
                                        }, i)
                                    }) : [e.addShape("Polyline", {
                                        className: "line",
                                        attrs: n.mix({
                                            points: o,
                                            smooth: r
                                        }, i)
                                    }), e.addShape("Polyline", {
                                        className: "line",
                                        attrs: n.mix({
                                            points: l,
                                            smooth: r
                                        }, i)
                                    })]
                                }
                                return t.isInCircle && s.push(s[0]),
                                e.addShape("Polyline", {
                                    className: "line",
                                    attrs: n.mix({
                                        points: s,
                                        smooth: r
                                    }, i)
                                })
                            }(e, i, o, r)
                        }
                    })
                }),
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(87)
                  , r = Array.isArray ? Array.isArray : function(t) {
                    return n(t, "Array")
                }
                ;
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(7);
                t.exports = function(t) {
                    return n(t, "Date")
                }
            }
            , function(t, e, i) {
                var n = i(14)
                  , r = i(36)
                  , a = i(4)
                  , s = i(13)
                  , o = i(15)
                  , l = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var l = n.prototype;
                    return l._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this),
                        this.type = "cat",
                        this.isCategory = !0,
                        this.isRounding = !0
                    }
                    ,
                    l.init = function() {
                        var t = this.values
                          , e = this.tickCount;
                        if (a(t, function(e, i) {
                            t[i] = e.toString()
                        }),
                        !this.ticks) {
                            var i = t;
                            if (e)
                                i = r({
                                    maxCount: e,
                                    data: t,
                                    isRounding: this.isRounding
                                }).ticks;
                            this.ticks = i
                        }
                    }
                    ,
                    l.getText = function(e) {
                        return -1 === this.values.indexOf(e) && s(e) && (e = this.values[Math.round(e)]),
                        t.prototype.getText.call(this, e)
                    }
                    ,
                    l.translate = function(t) {
                        var e = this.values.indexOf(t);
                        return -1 === e && s(t) ? e = t : -1 === e && (e = NaN),
                        e
                    }
                    ,
                    l.scale = function(t) {
                        var e = this.rangeMin()
                          , i = this.rangeMax();
                        return (o(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)),
                        e + (this.values.length > 1 ? t / (this.values.length - 1) : t) * (i - e)
                    }
                    ,
                    l.invert = function(t) {
                        if (o(t))
                            return t;
                        var e = this.rangeMin()
                          , i = this.rangeMax();
                        t < e && (t = e),
                        t > i && (t = i);
                        var n = (t - e) / (i - e)
                          , r = Math.round(n * (this.values.length - 1)) % this.values.length;
                        return r = r || 0,
                        this.values[r]
                    }
                    ,
                    n
                }(n);
                n.Cat = l,
                t.exports = l
            }
            , function(t, e, i) {
                var n = i(4);
                t.exports = function(t) {
                    var e, i, r, a = {}, s = [], o = t.isRounding, l = (e = t.data,
                    i = [],
                    n(e, function(t) {
                        i = i.concat(t)
                    }),
                    i), c = l.length, u = t.maxCount || 8;
                    if (o ? 2 === (r = function(t, e) {
                        var i;
                        for (i = e; i > 0 && t % i != 0; i--)
                            ;
                        if (1 === i)
                            for (i = e; i > 0 && (t - 1) % i != 0; i--)
                                ;
                        return i
                    }(c - 1, u - 1) + 1) ? r = u : r < u - 4 && (r = u - 4) : r = u,
                    !o && c <= r + r / 2)
                        s = [].concat(l);
                    else {
                        for (var h = parseInt(c / (r - 1), 10), f = l.map(function(t, e) {
                            return e % h == 0 ? l.slice(e, e + h) : null
                        }).filter(function(t) {
                            return t
                        }), d = 1, p = f.length; d < p && (o ? d * h < c - h : d < r - 1); d++)
                            s.push(f[d][0]);
                        if (l.length) {
                            s.unshift(l[0]);
                            var v = l[c - 1];
                            -1 === s.indexOf(v) && s.push(v)
                        }
                    }
                    return a.categories = l,
                    a.ticks = s,
                    a
                }
            }
            , function(t, e) {
                t.exports = {
                    requestAnimationFrame: "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                        return setTimeout(t, 16)
                    }
                }
            }
            , function(t, e, i) {
                var n = i(3);
                function r(t) {
                    return [t.x, t.y]
                }
                t.exports = {
                    smooth: function(t, e, i) {
                        for (var a, s, o, l = !!e, c = function(t, e, i, a) {
                            var s, o, l, c, u, h, f, d, p = [], v = !!a;
                            if (v) {
                                for (l = [1 / 0, 1 / 0],
                                c = [-1 / 0, -1 / 0],
                                d = 0,
                                f = t.length; d < f; d++)
                                    u = r(t[d]),
                                    n.min(l, l, u),
                                    n.max(c, c, u);
                                n.min(l, l, a[0]),
                                n.max(c, c, a[1])
                            }
                            for (d = 0,
                            h = t.length; d < h; d++) {
                                if (u = r(t[d]),
                                i)
                                    s = r(t[d ? d - 1 : h - 1]),
                                    o = r(t[(d + 1) % h]);
                                else {
                                    if (0 === d || d === h - 1) {
                                        p.push([u[0], u[1]]);
                                        continue
                                    }
                                    s = r(t[d - 1]),
                                    o = r(t[d + 1])
                                }
                                var g = n.sub([], o, s);
                                n.scale(g, g, e);
                                var m = n.distance(u, s)
                                  , y = n.distance(u, o)
                                  , x = m + y;
                                0 !== x && (m /= x,
                                y /= x);
                                var b = n.scale([], g, -m)
                                  , S = n.scale([], g, y)
                                  , _ = n.add([], u, b)
                                  , C = n.add([], u, S);
                                v && (n.max(_, _, l),
                                n.min(_, _, c),
                                n.max(C, C, l),
                                n.min(C, C, c)),
                                p.push([_[0], _[1]]),
                                p.push([C[0], C[1]])
                            }
                            return i && p.push(p.shift()),
                            p
                        }(t, .4, l, i), u = t.length, h = [], f = 0; f < u - 1; f++)
                            a = c[2 * f],
                            s = c[2 * f + 1],
                            o = t[f + 1],
                            h.push(["C", a[0], a[1], s[0], s[1], o.x, o.y]);
                        return l && (a = c[u],
                        s = c[u + 1],
                        o = t[0],
                        h.push(["C", a[0], a[1], s[0], s[1], o.x, o.y])),
                        h
                    }
                }
            }
            , function(t, e, i) {
                var n = i(6)
                  , r = i(19)
                  , a = i(0);
                i(32);
                var s = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var s = n.prototype;
                    return s.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "path",
                        e.shapeType = "line",
                        e
                    }
                    ,
                    s.getDrawCfg = function(e) {
                        var i = t.prototype.getDrawCfg.call(this, e);
                        return i.isStack = this.hasAdjust("stack"),
                        i
                    }
                    ,
                    s.draw = function(t, e) {
                        var i = this
                          , n = i.get("container")
                          , s = i.getYScale()
                          , o = i.get("connectNulls")
                          , l = r.splitArray(t, s.field, o)
                          , c = this.getDrawCfg(t[0]);
                        c.origin = t,
                        a.each(l, function(r, a) {
                            c.splitedIndex = a,
                            c.points = r,
                            i.drawShape(c.shape, t[0], c, n, e)
                        })
                    }
                    ,
                    n
                }(n);
                n.Path = s,
                t.exports = s
            }
            , function(t, e, i) {
                var n = i(1)
                  , r = i(0)
                  , a = {
                    getDefalutSize: function() {
                        var t = this.get("defaultSize");
                        if (!t) {
                            var e = this.get("coord")
                              , i = this.getXScale()
                              , r = this.get("dataArray")
                              , a = i.values.length
                              , s = i.range
                              , o = 1 / a
                              , l = 1;
                            e && e.isPolar ? l = e.transposed && a > 1 ? n.widthRatio.multiplePie : n.widthRatio.rose : (i.isLinear && (o *= s[1] - s[0]),
                            l = n.widthRatio.column),
                            o *= l,
                            this.hasAdjust("dodge") && (o /= r.length),
                            t = o,
                            this.set("defaultSize", t)
                        }
                        return t
                    },
                    getDimWidth: function(t) {
                        var e = this.get("coord")
                          , i = e.convertPoint({
                            x: 0,
                            y: 0
                        })
                          , n = e.convertPoint({
                            x: "x" === t ? 1 : 0,
                            y: "x" === t ? 0 : 1
                        })
                          , r = 0;
                        return i && n && (r = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))),
                        r
                    },
                    _getWidth: function() {
                        var t = this.get("_width");
                        if (!t) {
                            var e = this.get("coord");
                            t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"),
                            this.set("_width", t)
                        }
                        return t
                    },
                    _toNormalizedSize: function(t) {
                        return t / this._getWidth()
                    },
                    _toCoordSize: function(t) {
                        return this._getWidth() * t
                    },
                    getNormalizedSize: function(t) {
                        var e = this.getAttrValue("size", t);
                        return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e)
                    },
                    getSize: function(t) {
                        var e = this.getAttrValue("size", t);
                        if (r.isNil(e)) {
                            var i = this.getDefalutSize();
                            e = this._toCoordSize(i)
                        }
                        return e
                    }
                };
                t.exports = a
            }
            , , function(t, e, i) {
                var n = {}
                  , r = i(1);
                n.Global = r,
                n.version = r.version,
                n.Chart = i(18),
                n.Shape = i(8),
                n.G = i(5),
                n.Util = i(0),
                n.track = function() {
                    return null
                }
                ,
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = {
                    label: {
                        fill: "#808080",
                        fontSize: 10
                    },
                    line: {
                        stroke: "#E8E8E8",
                        lineWidth: 1
                    },
                    grid: {
                        type: "line",
                        stroke: "#E8E8E8",
                        lineWidth: 1,
                        lineDash: [2]
                    },
                    tickLine: null,
                    labelOffset: 7.5
                }
                  , a = {
                    fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
                    defaultColor: "#1890FF",
                    pixelRatio: 1,
                    padding: "auto",
                    appendPadding: 15,
                    colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"],
                    shapes: {
                        line: ["line", "dash"],
                        point: ["circle", "hollowCircle"]
                    },
                    sizes: [4, 10],
                    axis: {
                        common: r,
                        bottom: n.mix({}, r, {
                            grid: null
                        }),
                        left: n.mix({}, r, {
                            line: null
                        }),
                        right: n.mix({}, r, {
                            line: null
                        }),
                        circle: n.mix({}, r, {
                            line: null
                        }),
                        radius: n.mix({}, r, {
                            labelOffset: 4
                        })
                    },
                    shape: {
                        line: {
                            lineWidth: 2,
                            lineJoin: "round",
                            lineCap: "round"
                        },
                        point: {
                            lineWidth: 0,
                            size: 3
                        },
                        area: {
                            fillOpacity: .1
                        }
                    },
                    _defaultAxis: r
                };
                t.exports = a
            }
            , function(t, e) {
                var i, n = !!function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("e", null, e)
                    } catch (t) {}
                    return t
                }() && {
                    passive: !0
                };
                i = {
                    isWx: "object" == typeof wx && "function" == typeof wx.getSystemInfoSync,
                    isMy: "object" == typeof my && "function" == typeof my.getSystemInfoSync,
                    isNode: void 0 !== t && void 0 !== t.exports,
                    isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage,
                    getPixelRatio: function() {
                        return window && window.devicePixelRatio || 1
                    },
                    getStyle: function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                    },
                    getWidth: function(t) {
                        var e = this.getStyle(t, "width");
                        return "auto" === e && (e = t.offsetWidth),
                        parseFloat(e)
                    },
                    getHeight: function(t) {
                        var e = this.getStyle(t, "height");
                        return "auto" === e && (e = t.offsetHeight),
                        parseFloat(e)
                    },
                    getDomById: function(t) {
                        return t ? document.getElementById(t) : null
                    },
                    getRelativePosition: function(t, e) {
                        var i = e.get("el")
                          , n = i.getBoundingClientRect()
                          , r = n.top
                          , a = n.right
                          , s = n.bottom
                          , o = n.left
                          , l = parseFloat(this.getStyle(i, "padding-left"))
                          , c = parseFloat(this.getStyle(i, "padding-top"))
                          , u = a - o - l - parseFloat(this.getStyle(i, "padding-right"))
                          , h = s - r - c - parseFloat(this.getStyle(i, "padding-bottom"))
                          , f = e.get("pixelRatio");
                        return {
                            x: (t.x - o - l) / u * i.width / f,
                            y: (t.y - r - c) / h * i.height / f
                        }
                    },
                    addEventListener: function(t, e, r) {
                        i.isBrowser && t.addEventListener(e, r, n)
                    },
                    removeEventListener: function(t, e, r) {
                        i.isBrowser && t.removeEventListener(e, r, n)
                    },
                    createEvent: function(t, e) {
                        return function(t, e) {
                            var n = t.type
                              , r = {}
                              , a = t.targetTouches;
                            a && a.length > 0 ? (r.x = a[0].clientX,
                            r.y = a[0].clientY) : (r.x = t.clientX,
                            r.y = t.clientY);
                            var s = e.get("canvas")
                              , o = i.getRelativePosition(r, s);
                            return function(t, e, i, n, r) {
                                return {
                                    type: t,
                                    chart: e,
                                    native: r || null,
                                    x: void 0 !== i ? i : null,
                                    y: void 0 !== n ? n : null
                                }
                            }(n, e, o.x, o.y, t)
                        }(t, e)
                    },
                    measureText: function(t, e, i) {
                        return i || (i = document.createElement("canvas").getContext("2d")),
                        i.font = e || "12px sans-serif",
                        i.measureText(t)
                    }
                },
                t.exports = i
            }
            , function(t, e, i) {
                var n = i(27);
                t.exports = function(t) {
                    var e = n(t);
                    return e.charAt(0).toUpperCase() + e.substring(1)
                }
            }
            , function(t, e, i) {
                var n = i(27);
                t.exports = function(t) {
                    var e = n(t);
                    return e.charAt(0).toLowerCase() + e.substring(1)
                }
            }
            , function(t, e, i) {
                var n = i(7);
                t.exports = function(t) {
                    return n(t, "Boolean")
                }
            }
            , function(t, e, i) {
                var n = i(7);
                t.exports = function(t) {
                    return n(t, "Function")
                }
            }
            , function(t, e) {
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                t.exports = function(t) {
                    return "object" === (void 0 === t ? "undefined" : i(t)) && null !== t
                }
            }
            , function(t, e, i) {
                var n = i(28)
                  , r = i(11)
                  , a = 5;
                function s(t, e, i, o) {
                    for (var l in i = i || 0,
                    o = o || a,
                    e)
                        if (e.hasOwnProperty(l)) {
                            var c = e[l];
                            null !== c && n(c) ? (n(t[l]) || (t[l] = {}),
                            i < o ? s(t[l], c, i + 1, o) : t[l] = e[l]) : r(c) ? (t[l] = [],
                            t[l] = t[l].concat(c)) : void 0 !== c && (t[l] = c)
                        }
                }
                t.exports = function() {
                    for (var t = new Array(arguments.length), e = t.length, i = 0; i < e; i++)
                        t[i] = arguments[i];
                    for (var n = t[0], r = 1; r < e; r++)
                        s(n, t[r]);
                    return n
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = function() {
                    function t(t) {
                        n.mix(this, t),
                        this._init()
                    }
                    var e = t.prototype;
                    return e._init = function() {
                        var t = this.start
                          , e = this.end
                          , i = Math.min(t.x, e.x)
                          , n = Math.max(t.x, e.x)
                          , r = Math.min(t.y, e.y)
                          , a = Math.max(t.y, e.y);
                        this.tl = {
                            x: i,
                            y: r
                        },
                        this.tr = {
                            x: n,
                            y: r
                        },
                        this.bl = {
                            x: i,
                            y: a
                        },
                        this.br = {
                            x: n,
                            y: a
                        },
                        this.width = n - i,
                        this.height = a - r
                    }
                    ,
                    e.reset = function(t, e) {
                        this.start = t,
                        this.end = e,
                        this._init()
                    }
                    ,
                    e.isInRange = function(t, e) {
                        n.isObject(t) && (e = t.y,
                        t = t.x);
                        var i = this.tl
                          , r = this.br;
                        return i.x <= t && t <= r.x && i.y <= e && e <= r.y
                    }
                    ,
                    t
                }();
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(21);
                i(53),
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(21)
                  , r = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = n.prototype;
                    return r._initDefaultCfg = function() {
                        this.type = "cartesian",
                        this.transposed = !1,
                        this.isRect = !0
                    }
                    ,
                    r.init = function(t, e) {
                        this.x = {
                            start: t.x,
                            end: e.x
                        },
                        this.y = {
                            start: t.y,
                            end: e.y
                        }
                    }
                    ,
                    r.convertPoint = function(t) {
                        var e = this.transposed
                          , i = e ? "y" : "x"
                          , n = e ? "x" : "y"
                          , r = this.x
                          , a = this.y;
                        return {
                            x: r.start + (r.end - r.start) * t[i],
                            y: a.start + (a.end - a.start) * t[n]
                        }
                    }
                    ,
                    r.invertPoint = function(t) {
                        var e = this.transposed
                          , i = e ? "y" : "x"
                          , n = e ? "x" : "y"
                          , r = this.x
                          , a = this.y
                          , s = {};
                        return s[i] = (t.x - r.start) / (r.end - r.start),
                        s[n] = (t.y - a.start) / (a.end - a.start),
                        s
                    }
                    ,
                    n
                }(n);
                n.Cartesian = r,
                n.Rect = r,
                t.exports = r
            }
            , function(t, e, i) {
                t.exports = {
                    Position: i(55),
                    Shape: i(56),
                    Size: i(57),
                    Color: i(58)
                }
            }
            , function(t, e, i) {
                var n = i(9)
                  , r = i(11)
                  , a = i(4)
                  , s = function(t) {
                    var e, i;
                    function s(e) {
                        var i;
                        return (i = t.call(this, e) || this).names = ["x", "y"],
                        i.type = "position",
                        i
                    }
                    return i = t,
                    (e = s).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i,
                    s.prototype.mapping = function(t, e) {
                        var i, s, o, l = this.scales, c = this.coord, u = l[0], h = l[1];
                        if (n(t) || n(e))
                            return [];
                        if (r(e) && r(t)) {
                            i = [],
                            s = [];
                            for (var f = 0, d = 0, p = t.length, v = e.length; f < p && d < v; f++,
                            d++)
                                o = c.convertPoint({
                                    x: u.scale(t[f]),
                                    y: h.scale(e[d])
                                }),
                                i.push(o.x),
                                s.push(o.y)
                        } else if (r(e))
                            t = u.scale(t),
                            s = [],
                            a(e, function(e) {
                                e = h.scale(e),
                                o = c.convertPoint({
                                    x: t,
                                    y: e
                                }),
                                i && i !== o.x ? (r(i) || (i = [i]),
                                i.push(o.x)) : i = o.x,
                                s.push(o.y)
                            });
                        else if (r(t))
                            e = h.scale(e),
                            i = [],
                            a(t, function(t) {
                                t = u.scale(t),
                                o = c.convertPoint({
                                    x: t,
                                    y: e
                                }),
                                s && s !== o.y ? (r(s) || (s = [s]),
                                s.push(o.y)) : s = o.y,
                                i.push(o.x)
                            });
                        else {
                            t = u.scale(t),
                            e = h.scale(e);
                            var g = c.convertPoint({
                                x: t,
                                y: e
                            });
                            i = g.x,
                            s = g.y
                        }
                        return [i, s]
                    }
                    ,
                    s
                }(i(16));
                t.exports = s
            }
            , function(t, e, i) {
                var n = function(t) {
                    var e, i;
                    function n(e) {
                        var i;
                        return (i = t.call(this, e) || this).names = ["shape"],
                        i.type = "shape",
                        i.gradient = null,
                        i
                    }
                    return i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i,
                    n.prototype.getLinearValue = function(t) {
                        var e = this.values;
                        return e[Math.round((e.length - 1) * t)]
                    }
                    ,
                    n
                }(i(16));
                t.exports = n
            }
            , function(t, e, i) {
                var n = function(t) {
                    var e, i;
                    function n(e) {
                        var i;
                        return (i = t.call(this, e) || this).names = ["size"],
                        i.type = "size",
                        i.gradient = null,
                        i
                    }
                    return i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i,
                    n
                }(i(16));
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(59)
                  , a = function(t) {
                    var e, i;
                    function a(e) {
                        var i;
                        return (i = t.call(this, e) || this).names = ["color"],
                        i.type = "color",
                        i.gradient = null,
                        n.isString(i.values) && (i.linear = !0),
                        i
                    }
                    return i = t,
                    (e = a).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i,
                    a.prototype.getLinearValue = function(t) {
                        var e = this.gradient;
                        if (!e) {
                            var i = this.values;
                            e = r.gradient(i),
                            this.gradient = e
                        }
                        return e(t)
                    }
                    ,
                    a
                }(i(16));
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0);
                function r(t, e, i, n) {
                    return t[n] + (e[n] - t[n]) * i
                }
                function a(t) {
                    return "#" + s(t[0]) + s(t[1]) + s(t[2])
                }
                function s(t) {
                    return 1 === (t = (t = Math.round(t)).toString(16)).length && (t = "0" + t),
                    t
                }
                function o(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)),
                    e.push(parseInt(t.substr(3, 2), 16)),
                    e.push(parseInt(t.substr(5, 2), 16)),
                    e
                }
                var l = {
                    black: "#000000",
                    blue: "#0000ff",
                    grey: "#808080",
                    green: "#008000",
                    orange: "#ffa500",
                    pink: "#ffc0cb",
                    purple: "#800080",
                    red: "#ff0000",
                    white: "#ffffff",
                    yellow: "#ffff00"
                }
                  , c = {
                    toHex: function(t) {
                        if (l[t])
                            return l[t];
                        if ("#" === t[0]) {
                            if (7 === t.length)
                                return t;
                            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                                return "#" + e + e + i + i + n + n
                            });
                            return l[t] = e,
                            e
                        }
                        var i = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                        return i.shift(),
                        i = a(i),
                        l[t] = i,
                        i
                    },
                    hex2arr: o,
                    gradient: function(t) {
                        var e = [];
                        return n.isString(t) && (t = t.split("-")),
                        n.each(t, function(t) {
                            -1 === t.indexOf("#") && (t = c.toHex(t)),
                            e.push(o(t))
                        }),
                        function(t) {
                            return function(t, e) {
                                var i = t.length - 1
                                  , n = Math.floor(i * e)
                                  , s = i * e - n
                                  , o = t[n]
                                  , l = n === i ? o : t[n + 1];
                                return a([r(o, l, s, 0), r(o, l, s, 1), r(o, l, s, 2)])
                            }(e, t)
                        }
                    }
                };
                t.exports = c
            }
            , function(t, e) {
                function i(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i])
                }
                t.exports = function(t, e, n, r) {
                    return e && i(t, e),
                    n && i(t, n),
                    r && i(t, r),
                    t
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(1)
                  , a = i(62)
                  , s = {
                    linear: "Linear",
                    cat: "Cat",
                    timeCat: "TimeCat",
                    identity: "Identity"
                }
                  , o = function() {
                    function t(t) {
                        this.defs = {},
                        n.mix(this, t)
                    }
                    var e = t.prototype;
                    return e._getDef = function(t) {
                        var e = this.defs
                          , i = null;
                        return (r.scales[t] || e[t]) && (i = n.mix({}, r.scales[t]),
                        n.each(e[t], function(t, e) {
                            n.isNil(t) ? delete i[e] : i[e] = t
                        })),
                        i
                    }
                    ,
                    e._getDefaultType = function(t, e, i) {
                        if (i && i.type)
                            return i.type;
                        var r = "linear"
                          , a = n.Array.firstValue(e, t);
                        return n.isArray(a) && (a = a[0]),
                        n.isString(a) && (r = "cat"),
                        r
                    }
                    ,
                    e._getScaleCfg = function(t, e, i, r) {
                        var a, s = {
                            field: e,
                            values: a = r && r.values ? r.values : n.Array.values(i, e)
                        };
                        if (!("cat" === t || "timeCat" === t || r && r.min && r.max)) {
                            var o = n.Array.getRange(a)
                              , l = o.min
                              , c = o.max;
                            s.min = l,
                            s.max = c,
                            s.nice = !0
                        }
                        return "cat" !== t && "timeCat" !== t || (s.isRounding = !1),
                        s
                    }
                    ,
                    e.createScale = function(t, e) {
                        var i, r = this._getDef(t);
                        if (!e || !e.length)
                            return r && r.type ? (r.field = t,
                            i = new a[s[r.type]](r)) : i = new a.Identity({
                                value: t,
                                field: t.toString(),
                                values: [t]
                            }),
                            i;
                        var o = e[0][t];
                        if (null === o && (o = n.Array.firstValue(e, t)),
                        n.isNumber(t) || n.isNil(o) && !r)
                            i = new a.Identity({
                                value: t,
                                field: t.toString(),
                                values: [t]
                            });
                        else {
                            var l = this._getDefaultType(t, e, r)
                              , c = this._getScaleCfg(l, t, e, r);
                            r && n.mix(c, r),
                            i = new a[s[l]](c)
                        }
                        return i
                    }
                    ,
                    t
                }();
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(14);
                i(63),
                i(66),
                i(35),
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(9)
                  , r = i(4)
                  , a = i(14)
                  , s = i(64)
                  , o = function(t) {
                    var e, i;
                    function a() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = a).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var o = a.prototype;
                    return o._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this);
                        this.type = "linear",
                        this.isLinear = !0,
                        this.nice = !1,
                        this.min = null,
                        this.minLimit = null,
                        this.max = null,
                        this.maxLimit = null,
                        this.tickCount = null,
                        this.tickInterval = null,
                        this.minTickInterval = null,
                        this.snapArray = null
                    }
                    ,
                    o.init = function() {
                        if (this.ticks) {
                            var t = this.ticks
                              , e = this.translate(t[0])
                              , i = this.translate(t[t.length - 1]);
                            (n(this.min) || this.min > e) && (this.min = e),
                            (n(this.max) || this.max < i) && (this.max = i)
                        } else
                            this.min = this.translate(this.min),
                            this.max = this.translate(this.max),
                            this.initTicks()
                    }
                    ,
                    o.calculateTicks = function() {
                        var t = this.min
                          , e = this.max
                          , i = this.minLimit
                          , n = this.maxLimit
                          , r = this.tickCount
                          , a = this.tickInterval
                          , o = this.minTickInterval
                          , l = this.snapArray;
                        if (1 === r)
                            throw new Error("linear scale'tickCount should not be 1");
                        if (e < t)
                            throw new Error("max: " + e + " should not be less than min: " + t);
                        return s({
                            min: t,
                            max: e,
                            minLimit: i,
                            maxLimit: n,
                            minCount: r,
                            maxCount: r,
                            interval: a,
                            minTickInterval: o,
                            snapArray: l
                        }).ticks
                    }
                    ,
                    o.initTicks = function() {
                        var t = this
                          , e = t.calculateTicks();
                        if (t.nice)
                            t.ticks = e,
                            t.min = e[0],
                            t.max = e[e.length - 1];
                        else {
                            var i = [];
                            r(e, function(e) {
                                e >= t.min && e <= t.max && i.push(e)
                            }),
                            i.length || (i.push(t.min),
                            i.push(t.max)),
                            t.ticks = i
                        }
                    }
                    ,
                    o.scale = function(t) {
                        if (n(t))
                            return NaN;
                        var e = this.max
                          , i = this.min;
                        if (e === i)
                            return 0;
                        var r = (t - i) / (e - i)
                          , a = this.rangeMin();
                        return a + r * (this.rangeMax() - a)
                    }
                    ,
                    o.invert = function(t) {
                        var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                        return this.min + e * (this.max - this.min)
                    }
                    ,
                    a
                }(a);
                a.Linear = o,
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(9)
                  , r = i(13)
                  , a = i(65)
                  , s = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10]
                  , o = [0, 1, 2, 4, 5, 10];
                t.exports = function(t) {
                    var e = t.min
                      , i = t.max
                      , l = t.interval
                      , c = t.minTickInterval
                      , u = []
                      , h = t.minCount || 5
                      , f = t.maxCount || 7
                      , d = h === f
                      , p = n(t.minLimit) ? -1 / 0 : t.minLimit
                      , v = n(t.maxLimit) ? 1 / 0 : t.maxLimit
                      , g = (h + f) / 2
                      , m = g
                      , y = t.snapArray ? t.snapArray : d ? s : o;
                    if (e === p && i === v && d && (l = (i - e) / (m - 1)),
                    n(e) && (e = 0),
                    n(i) && (i = 0),
                    i === e && (0 === e ? i = 1 : e > 0 ? e = 0 : i = 0,
                    i - e < 5 && !l && i - e >= 1 && (l = 1)),
                    n(l)) {
                        var x = (i - e) / (g - 1);
                        l = a.snapFactorTo(x, y, "ceil"),
                        f !== h && ((m = parseInt((i - e) / l, 10)) > f && (m = f),
                        m < h && (m = h),
                        l = a.snapFactorTo((i - e) / (m - 1), y, "floor"))
                    }
                    if (r(c) && l < c && (l = c),
                    t.interval || f !== h)
                        i = Math.min(a.snapMultiple(i, l, "ceil"), v),
                        e = Math.max(a.snapMultiple(e, l, "floor"), p),
                        m = Math.round((i - e) / l),
                        e = a.fixedBase(e, l),
                        i = a.fixedBase(i, l);
                    else {
                        g = parseInt(g, 10);
                        var b, S = (i + e) / 2, _ = a.snapMultiple(S, l, "ceil"), C = Math.floor((g - 2) / 2), w = _ + C * l;
                        b = g % 2 == 0 ? _ - C * l : _ - (C + 1) * l,
                        w < i && (w += l),
                        b > e && (b -= l),
                        i = a.fixedBase(w, l),
                        e = a.fixedBase(b, l)
                    }
                    i = Math.min(i, v),
                    e = Math.max(e, p),
                    u.push(e);
                    for (var A = 1; A < m; A++) {
                        var T = a.fixedBase(l * A + e, l);
                        T < i && u.push(T)
                    }
                    return u[u.length - 1] < i && u.push(i),
                    {
                        min: e,
                        max: i,
                        interval: l,
                        count: m,
                        ticks: u
                    }
                }
            }
            , function(t, e) {
                var i = 12;
                function n(t, e) {
                    var i = t.length;
                    if (0 === i)
                        return NaN;
                    var n = t[0];
                    if (e < t[0])
                        return NaN;
                    if (e >= t[i - 1])
                        return t[i - 1];
                    for (var r = 1; r < t.length && !(e < t[r]); r++)
                        n = t[r];
                    return n
                }
                function r(t, e) {
                    var i, n = t.length;
                    if (0 === n)
                        return NaN;
                    if (e > t[n - 1])
                        return NaN;
                    if (e < t[0])
                        return t[0];
                    for (var r = 1; r < t.length; r++)
                        if (e <= t[r]) {
                            i = t[r];
                            break
                        }
                    return i
                }
                var a = {
                    snapFactorTo: function(t, e, n) {
                        if (isNaN(t))
                            return NaN;
                        var r = 1;
                        if (0 !== t) {
                            t < 0 && (r = -1);
                            var s = function(t) {
                                var e = 1;
                                if (t === 1 / 0 || t === -1 / 0)
                                    throw new Error("Not support Infinity!");
                                if (t < 1) {
                                    for (var n = 0; t < 1; )
                                        e /= 10,
                                        t *= 10,
                                        n++;
                                    e.toString().length > i && (e = parseFloat(e.toFixed(n)))
                                } else
                                    for (; t > 10; )
                                        e *= 10,
                                        t /= 10;
                                return e
                            }(t *= r);
                            r *= s,
                            t /= s
                        }
                        var o = (t = "floor" === n ? a.snapFloor(e, t) : "ceil" === n ? a.snapCeiling(e, t) : a.snapTo(e, t)) * r;
                        Math.abs(r) < 1 && o.toString().length > i && (o = t / parseInt(1 / r) * (r > 0 ? 1 : -1));
                        return o
                    },
                    snapMultiple: function(t, e, i) {
                        return ("ceil" === i ? Math.ceil(t / e) : "floor" === i ? Math.floor(t / e) : Math.round(t / e)) * e
                    },
                    snapTo: function(t, e) {
                        var i = n(t, e)
                          , a = r(t, e);
                        if (isNaN(i) || isNaN(a)) {
                            if (t[0] >= e)
                                return t[0];
                            var s = t[t.length - 1];
                            if (s <= e)
                                return s
                        }
                        return Math.abs(e - i) < Math.abs(a - e) ? i : a
                    },
                    snapFloor: function(t, e) {
                        return n(t, e)
                    },
                    snapCeiling: function(t, e) {
                        return r(t, e)
                    },
                    fixedBase: function(t, e) {
                        var i = e.toString()
                          , n = i.indexOf(".");
                        if (-1 === n)
                            return Math.round(t);
                        var r = i.substr(n + 1).length;
                        return r > 20 && (r = 20),
                        parseFloat(t.toFixed(r))
                    }
                };
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(14)
                  , r = i(13)
                  , a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this),
                        this.isIdentity = !0,
                        this.type = "identity",
                        this.value = null
                    }
                    ,
                    a.getText = function() {
                        return this.value.toString()
                    }
                    ,
                    a.scale = function(t) {
                        return this.value !== t && r(t) ? t : this.range[0]
                    }
                    ,
                    a.invert = function() {
                        return this.value
                    }
                    ,
                    n
                }(n);
                n.Identity = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(68)
                  , a = i(1)
                  , s = i(5).Shape;
                var o = function() {
                    function t(t) {
                        this.axisCfg = {},
                        this.frontPlot = null,
                        this.backPlot = null,
                        this.axes = {},
                        n.mix(this, t)
                    }
                    var e = t.prototype;
                    return e._isHide = function(t) {
                        var e = this.axisCfg;
                        return !e || !1 === e[t]
                    }
                    ,
                    e._getLinePosition = function(t, e, i, n) {
                        var r = ""
                          , a = t.field
                          , s = this.axisCfg;
                        return s[a] && s[a].position ? r = s[a].position : "x" === e ? r = n ? "left" : "bottom" : "y" === e && (r = i ? "right" : "left",
                        n && (r = "bottom")),
                        r
                    }
                    ,
                    e._getLineCfg = function(t, e, i) {
                        var n, r, a = 1;
                        return "x" === e ? (n = {
                            x: 0,
                            y: 0
                        },
                        r = {
                            x: 1,
                            y: 0
                        }) : "right" === i ? (n = {
                            x: 1,
                            y: 0
                        },
                        r = {
                            x: 1,
                            y: 1
                        }) : (n = {
                            x: 0,
                            y: 0
                        },
                        r = {
                            x: 0,
                            y: 1
                        },
                        a = -1),
                        t.transposed && (a *= -1),
                        {
                            offsetFactor: a,
                            start: t.convertPoint(n),
                            end: t.convertPoint(r)
                        }
                    }
                    ,
                    e._getCircleCfg = function(t) {
                        return {
                            startAngle: t.startAngle,
                            endAngle: t.endAngle,
                            center: t.center,
                            radius: t.circleRadius
                        }
                    }
                    ,
                    e._getRadiusCfg = function(t) {
                        var e, i;
                        return t.transposed ? (e = {
                            x: 0,
                            y: 0
                        },
                        i = {
                            x: 1,
                            y: 0
                        }) : (e = {
                            x: 0,
                            y: 0
                        },
                        i = {
                            x: 0,
                            y: 1
                        }),
                        {
                            offsetFactor: -1,
                            start: t.convertPoint(e),
                            end: t.convertPoint(i)
                        }
                    }
                    ,
                    e._getAxisCfg = function(t, e, i, r, o) {
                        var l = this
                          , c = this.axisCfg
                          , u = e.getTicks()
                          , h = n.deepMix({
                            ticks: u,
                            frontContainer: this.frontPlot,
                            backContainer: this.backPlot
                        }, o, c[e.field])
                          , f = []
                          , d = h.label
                          , p = u.length
                          , v = 0
                          , g = 0
                          , m = d;
                        return n.each(u, function(t, e) {
                            if (n.isFunction(d)) {
                                var i = d(t.text, e, p);
                                m = i ? n.mix({}, a._defaultAxis.label, i) : null
                            }
                            if (m) {
                                var r = {};
                                m.textAlign && (r.textAlign = m.textAlign),
                                m.textBaseline && (r.textBaseline = m.textBaseline);
                                var o = new s.Text({
                                    className: "axis-label",
                                    attrs: n.mix({
                                        x: 0,
                                        y: 0,
                                        text: t.text,
                                        fontFamily: l.chart.get("canvas").get("fontFamily")
                                    }, m),
                                    value: t.value,
                                    textStyle: r,
                                    top: m.top,
                                    context: l.chart.get("canvas").get("context")
                                });
                                f.push(o);
                                var c = o.getBBox()
                                  , u = c.width
                                  , h = c.height;
                                v = Math.max(v, u),
                                g = Math.max(g, h)
                            }
                        }),
                        h.labels = f,
                        h.maxWidth = v,
                        h.maxHeight = g,
                        h
                    }
                    ,
                    e._createAxis = function(t, e, i, n, r) {
                        void 0 === r && (r = "");
                        var s, o, l, c = t.type, u = t.transposed;
                        if ("cartesian" === c || "rect" === c) {
                            var h = this._getLinePosition(e, n, r, u);
                            (l = a.axis[h]).position = h,
                            s = "Line",
                            o = h
                        } else
                            "x" === n && !u || "y" === n && u ? (l = a.axis.circle,
                            s = "Circle",
                            o = "circle") : (l = a.axis.radius,
                            s = "Line",
                            o = "radius");
                        var f = this._getAxisCfg(t, e, i, n, l);
                        f.type = s,
                        f.dimType = n,
                        f.verticalScale = i,
                        f.index = r,
                        this.axes[o] = f
                    }
                    ,
                    e.createAxis = function(t, e, i) {
                        var a = this;
                        e && !a._isHide(e.field) && a._createAxis(t, e, i[0], "x"),
                        n.each(i, function(i, n) {
                            a._isHide(i.field) || a._createAxis(t, i, e, "y", n)
                        });
                        var s = this.axes
                          , o = a.chart;
                        if (o._isAutoPadding()) {
                            var l = n.parsePadding(o.get("padding"))
                              , c = n.parsePadding(o.get("appendPadding"))
                              , u = o.get("legendRange") || {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }
                              , h = ["auto" === l[0] ? u.top + 2 * c[0] : l[0], "auto" === l[1] ? u.right + c[1] : l[1], "auto" === l[2] ? u.bottom + c[2] : l[2], "auto" === l[3] ? u.left + c[3] : l[3]];
                            if (t.isPolar) {
                                var f = s.circle;
                                if (f) {
                                    var d = f.maxHeight
                                      , p = f.maxWidth
                                      , v = f.labelOffset;
                                    h[0] += d + v,
                                    h[1] += p + v,
                                    h[2] += d + v,
                                    h[3] += p + v
                                }
                            } else {
                                if (s.right && "auto" === l[1]) {
                                    var g = s.right
                                      , m = g.maxWidth
                                      , y = g.labelOffset;
                                    h[1] += m + y
                                }
                                if (s.left && "auto" === l[3]) {
                                    var x = s.left
                                      , b = x.maxWidth
                                      , S = x.labelOffset;
                                    h[3] += b + S
                                }
                                if (s.bottom && "auto" === l[2]) {
                                    var _ = s.bottom
                                      , C = _.maxHeight
                                      , w = _.labelOffset;
                                    h[2] += C + w
                                }
                            }
                            o.set("_padding", h),
                            o._updateLayout(h)
                        }
                        n.each(s, function(e) {
                            var i, s = e.type, o = e.grid, l = e.verticalScale, c = e.ticks, u = e.dimType, h = e.position, f = e.index;
                            if (t.isPolar ? "Line" === s ? i = a._getRadiusCfg(t) : "Circle" === s && (i = a._getCircleCfg(t)) : i = a._getLineCfg(t, u, h),
                            o && l) {
                                var d = []
                                  , p = function(t) {
                                    var e = t.slice(0);
                                    if (e.length > 0) {
                                        var i = e[0]
                                          , n = e[e.length - 1];
                                        0 !== i.value && e.unshift({
                                            value: 0
                                        }),
                                        1 !== n.value && e.push({
                                            value: 1
                                        })
                                    }
                                    return e
                                }(l.getTicks());
                                n.each(c, function(e) {
                                    var i = [];
                                    n.each(p, function(n) {
                                        var r = "x" === u ? e.value : n.value
                                          , a = "x" === u ? n.value : e.value;
                                        if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {
                                            var s = t.convertPoint({
                                                x: r,
                                                y: a
                                            });
                                            i.push(s)
                                        }
                                    }),
                                    d.push({
                                        points: i,
                                        _id: "axis-" + u + f + "-grid-" + e.tickValue
                                    })
                                }),
                                e.gridPoints = d,
                                t.isPolar && (e.center = t.center,
                                e.startAngle = t.startAngle,
                                e.endAngle = t.endAngle)
                            }
                            i._id = "axis-" + u,
                            n.isNil(f) || (i._id = "axis-" + u + f),
                            new r[s](n.mix(e, i))
                        })
                    }
                    ,
                    e.clear = function() {
                        this.axes = {},
                        this.frontPlot.clear(),
                        this.backPlot.clear()
                    }
                    ,
                    t
                }();
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(24);
                i(69),
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(24)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this),
                        this.start = null,
                        this.end = null
                    }
                    ,
                    a.getOffsetPoint = function(t) {
                        var e = this.start
                          , i = this.end;
                        return {
                            x: e.x + (i.x - e.x) * t,
                            y: e.y + (i.y - e.y) * t
                        }
                    }
                    ,
                    a.getAxisVector = function() {
                        var t = this.start
                          , e = this.end;
                        return [e.x - t.x, e.y - t.y]
                    }
                    ,
                    a.drawLine = function(t) {
                        var e = this.getContainer(t.top)
                          , i = this.start
                          , r = this.end;
                        e.addShape("line", {
                            className: "axis-line",
                            attrs: n.mix({
                                x1: i.x,
                                y1: i.y,
                                x2: r.x,
                                y2: r.y
                            }, t)
                        })
                    }
                    ,
                    r
                }(r);
                r.Line = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(30)
                  , a = i(31)
                  , s = i(37).requestAnimationFrame
                  , o = function() {
                    var t = e.prototype;
                    function e(t) {
                        this._attrs = n.mix({
                            type: "canvas",
                            children: []
                        }, t),
                        this._initPixelRatio(),
                        this._initCanvas()
                    }
                    return t.get = function(t) {
                        return this._attrs[t]
                    }
                    ,
                    t.set = function(t, e) {
                        this._attrs[t] = e
                    }
                    ,
                    t._initPixelRatio = function() {
                        this.get("pixelRatio") || this.set("pixelRatio", n.getPixelRatio())
                    }
                    ,
                    t.beforeDraw = function() {
                        var t = this._attrs.context
                          , e = this._attrs.el;
                        !n.isWx && !n.isMy && t && t.clearRect(0, 0, e.width, e.height)
                    }
                    ,
                    t._initCanvas = function() {
                        var t, e = this.get("el"), i = this.get("context");
                        if (!(t = i ? i.canvas : n.isString(e) ? n.getDomById(e) : e))
                            throw new Error("Please specify the id or el of the chart!");
                        i && t && !t.getContext && (t.getContext = function() {
                            return i
                        }
                        );
                        var r = this.get("width");
                        r || (r = n.getWidth(t));
                        var a = this.get("height");
                        a || (a = n.getHeight(t)),
                        this.set("canvas", this),
                        this.set("el", t),
                        this.set("context", i || t.getContext("2d")),
                        this.changeSize(r, a)
                    }
                    ,
                    t.changeSize = function(t, e) {
                        var i = this.get("pixelRatio")
                          , r = this.get("el");
                        (n.isBrowser && (r.style.width = t + "px",
                        r.style.height = e + "px"),
                        n.isWx || n.isMy) || (r.width = t * i,
                        r.height = e * i,
                        1 !== i && this.get("context").scale(i, i));
                        this.set("width", t),
                        this.set("height", e)
                    }
                    ,
                    t.getWidth = function() {
                        var t = this.get("pixelRatio");
                        return this.get("width") * t
                    }
                    ,
                    t.getHeight = function() {
                        var t = this.get("pixelRatio");
                        return this.get("height") * t
                    }
                    ,
                    t.getPointByClient = function(t, e) {
                        var i = this.get("el")
                          , n = i.getBoundingClientRect()
                          , r = n.right - n.left
                          , a = n.bottom - n.top;
                        return {
                            x: (t - n.left) * (i.width / r),
                            y: (e - n.top) * (i.height / a)
                        }
                    }
                    ,
                    t._beginDraw = function() {
                        this._attrs.toDraw = !0
                    }
                    ,
                    t._endDraw = function() {
                        this._attrs.toDraw = !1
                    }
                    ,
                    t.draw = function() {
                        var t = this;
                        t.get("destroyed") || (t.get("animateHandler") ? this._beginDraw() : function e() {
                            t.set("animateHandler", s(function() {
                                t.set("animateHandler", void 0),
                                t.get("toDraw") && e()
                            })),
                            t.beforeDraw();
                            try {
                                for (var i = t._attrs.context, r = t._attrs.children, a = 0, o = r.length; a < o; a++)
                                    r[a].draw(i);
                                (n.isWx || n.isMy) && i.draw()
                            } catch (e) {
                                console.warn("error in draw canvas, detail as:"),
                                console.warn(e),
                                t._endDraw()
                            }
                            t._endDraw()
                        }())
                    }
                    ,
                    t.destroy = function() {
                        this.get("destroyed") || (this.clear(),
                        this._attrs = {},
                        this.set("destroyed", !0))
                    }
                    ,
                    t.isDestroyed = function() {
                        return this.get("destroyed")
                    }
                    ,
                    e
                }();
                n.mix(o.prototype, r, {
                    getGroupClass: function() {
                        return a
                    }
                }),
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(0);
                function r(t, e) {
                    n.each(t, function(t) {
                        t = t.split(":"),
                        e.addColorStop(Number(t[0]), t[1])
                    })
                }
                t.exports = {
                    parseStyle: function(t, e, i) {
                        if ("(" === t[1])
                            try {
                                var n = t[0];
                                if ("l" === n)
                                    return function(t, e, i) {
                                        var n, a, s = t.split(" "), o = s[0].slice(2, s[0].length - 1);
                                        n = parseFloat(o) * Math.PI / 180,
                                        a = 2 * Math.PI,
                                        o = (n % a + a) % a;
                                        var l, c, u = s.slice(1), h = e.getBBox(), f = h.minX, d = h.minY, p = h.maxX, v = h.maxY;
                                        o >= 0 && o < .5 * Math.PI ? (l = {
                                            x: f,
                                            y: d
                                        },
                                        c = {
                                            x: p,
                                            y: v
                                        }) : .5 * Math.PI <= o && o < Math.PI ? (l = {
                                            x: p,
                                            y: d
                                        },
                                        c = {
                                            x: f,
                                            y: v
                                        }) : Math.PI <= o && o < 1.5 * Math.PI ? (l = {
                                            x: p,
                                            y: v
                                        },
                                        c = {
                                            x: f,
                                            y: d
                                        }) : (l = {
                                            x: f,
                                            y: v
                                        },
                                        c = {
                                            x: p,
                                            y: d
                                        });
                                        var g = Math.tan(o)
                                          , m = g * g
                                          , y = (c.x - l.x + g * (c.y - l.y)) / (m + 1) + l.x
                                          , x = g * (c.x - l.x + g * (c.y - l.y)) / (m + 1) + l.y
                                          , b = i.createLinearGradient(l.x, l.y, y, x);
                                        return r(u, b),
                                        b
                                    }(t, e, i);
                                if ("r" === n)
                                    return function(t, e, i) {
                                        var n = t.split(" ")
                                          , a = n[0].slice(2, n[0].length - 1);
                                        a = a.split(",");
                                        var s = parseFloat(a[0])
                                          , o = parseFloat(a[1])
                                          , l = parseFloat(a[2])
                                          , c = n.slice(1);
                                        if (0 === l)
                                            return c[c.length - 1].split(":")[1];
                                        var u = e.getBBox()
                                          , h = u.width
                                          , f = u.height
                                          , d = u.minX
                                          , p = u.minY
                                          , v = Math.sqrt(h * h + f * f) / 2
                                          , g = i.createRadialGradient(d + h * s, p + f * o, l * v, d + h / 2, p + f / 2, v);
                                        return r(c, g),
                                        g
                                    }(t, e, i)
                            } catch (t) {
                                console.error("error in parsing gradient string, please check if there are any extra whitespaces."),
                                console.error(t)
                            }
                        return t
                    }
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(2)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "rect"
                    }
                    ,
                    a.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0,
                            radius: 0,
                            lineWidth: 0
                        }
                    }
                    ,
                    a.createPath = function(t) {
                        var e = this.get("attrs")
                          , i = e.x
                          , r = e.y
                          , a = e.width
                          , s = e.height;
                        t.beginPath();
                        var o = e.radius;
                        o && a * s ? (o = n.parsePadding(o),
                        t.moveTo(i + o[0], r),
                        t.lineTo(i + a - o[1], r),
                        t.arc(i + a - o[1], r + o[1], o[1], -Math.PI / 2, 0, !1),
                        t.lineTo(i + a, r + s - o[2]),
                        t.arc(i + a - o[2], r + s - o[2], o[2], 0, Math.PI / 2, !1),
                        t.lineTo(i + o[3], r + s),
                        t.arc(i + o[3], r + s - o[3], o[3], Math.PI / 2, Math.PI, !1),
                        t.lineTo(i, r + o[0]),
                        t.arc(i + o[0], r + o[0], o[0], Math.PI, 3 * Math.PI / 2, !1),
                        t.closePath()) : t.rect(i, r, a, s)
                    }
                    ,
                    a.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.x
                          , i = t.y;
                        return {
                            minX: e,
                            minY: i,
                            maxX: e + t.width,
                            maxY: i + t.height
                        }
                    }
                    ,
                    r
                }(r);
                r.Rect = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = n.prototype;
                    return r._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "circle"
                    }
                    ,
                    r.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            r: 0,
                            lineWidth: 0
                        }
                    }
                    ,
                    r.createPath = function(t) {
                        var e = this.get("attrs")
                          , i = e.x
                          , n = e.y
                          , r = e.r;
                        t.beginPath(),
                        t.arc(i, n, r, 0, 2 * Math.PI, !1),
                        t.closePath()
                    }
                    ,
                    r.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.x
                          , i = t.y
                          , n = t.r;
                        return {
                            minX: e - n,
                            maxX: e + n,
                            minY: i - n,
                            maxY: i + n
                        }
                    }
                    ,
                    n
                }(n);
                n.Circle = r,
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = i(10)
                  , a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canStroke = !0,
                        this._attrs.type = "line"
                    }
                    ,
                    a.getDefaultAttrs = function() {
                        return {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            lineWidth: 1
                        }
                    }
                    ,
                    a.createPath = function(t) {
                        var e = this.get("attrs")
                          , i = e.x1
                          , n = e.y1
                          , r = e.x2
                          , a = e.y2;
                        t.beginPath(),
                        t.moveTo(i, n),
                        t.lineTo(r, a)
                    }
                    ,
                    a.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.x1
                          , i = t.y1
                          , n = t.x2
                          , a = t.y2
                          , s = t.lineWidth;
                        return r.getBBoxFromLine(e, i, n, a, s)
                    }
                    ,
                    n
                }(n);
                n.Line = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = i(10)
                  , a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "polygon"
                    }
                    ,
                    a.getDefaultAttrs = function() {
                        return {
                            points: null,
                            lineWidth: 0
                        }
                    }
                    ,
                    a.createPath = function(t) {
                        var e = this.get("attrs").points;
                        t.beginPath();
                        for (var i = 0, n = e.length; i < n; i++) {
                            var r = e[i];
                            0 === i ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y)
                        }
                        t.closePath()
                    }
                    ,
                    a.calculateBox = function() {
                        var t = this.get("attrs").points;
                        return r.getBBoxFromPoints(t)
                    }
                    ,
                    n
                }(n);
                n.Polygon = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = i(38)
                  , a = i(10);
                function s(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        isNaN(r.x) || isNaN(r.y) || e.push(r)
                    }
                    return e
                }
                var o = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var o = n.prototype;
                    return o._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "polyline"
                    }
                    ,
                    o.getDefaultAttrs = function() {
                        return {
                            points: null,
                            lineWidth: 1,
                            smooth: !1
                        }
                    }
                    ,
                    o.createPath = function(t) {
                        var e = this.get("attrs")
                          , i = e.points
                          , n = e.smooth
                          , a = s(i);
                        if (t.beginPath(),
                        a.length)
                            if (t.moveTo(a[0].x, a[0].y),
                            n)
                                for (var o = r.smooth(a, !1, [[0, 0], [1, 1]]), l = 0, c = o.length; l < c; l++) {
                                    var u = o[l];
                                    t.bezierCurveTo(u[1], u[2], u[3], u[4], u[5], u[6])
                                }
                            else {
                                var h, f;
                                for (h = 1,
                                f = a.length - 1; h < f; h++)
                                    t.lineTo(a[h].x, a[h].y);
                                t.lineTo(a[f].x, a[f].y)
                            }
                    }
                    ,
                    o.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.points
                          , i = t.smooth
                          , n = t.lineWidth
                          , o = s(e);
                        if (i) {
                            for (var l = [], c = r.smooth(o, !1, [[0, 0], [1, 1]]), u = 0, h = c.length; u < h; u++) {
                                var f = c[u];
                                if (0 === u)
                                    l.push([o[0].x, o[0].y, f[1], f[2], f[3], f[4], f[5], f[6]]);
                                else {
                                    var d = c[u - 1];
                                    l.push([d[5], d[6], f[1], f[2], f[3], f[4], f[5], f[6]])
                                }
                            }
                            return a.getBBoxFromBezierGroup(l, n)
                        }
                        return a.getBBoxFromPoints(o, n)
                    }
                    ,
                    n
                }(n);
                n.Polyline = o,
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = i(10)
                  , a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canStroke = !0,
                        this._attrs.canFill = !0,
                        this._attrs.type = "arc"
                    }
                    ,
                    a.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            r: 0,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            clockwise: !1,
                            lineWidth: 1
                        }
                    }
                    ,
                    a.createPath = function(t) {
                        var e = this.get("attrs")
                          , i = e.x
                          , n = e.y
                          , r = e.r
                          , a = e.startAngle
                          , s = e.endAngle
                          , o = e.clockwise;
                        t.beginPath(),
                        t.arc(i, n, r, a, s, o)
                    }
                    ,
                    a.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.x
                          , i = t.y
                          , n = t.r
                          , a = t.startAngle
                          , s = t.endAngle
                          , o = t.clockwise;
                        return r.getBBoxFromArc(e, i, n, a, s, o)
                    }
                    ,
                    n
                }(n);
                n.Arc = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = i(10)
                  , a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "sector"
                    }
                    ,
                    a.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            lineWidth: 0,
                            r: 0,
                            r0: 0,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            clockwise: !1
                        }
                    }
                    ,
                    a.createPath = function(t) {
                        var e = this.get("attrs")
                          , i = e.x
                          , n = e.y
                          , r = e.startAngle
                          , a = e.endAngle
                          , s = e.r
                          , o = e.r0
                          , l = e.clockwise;
                        t.beginPath();
                        var c = Math.cos(r)
                          , u = Math.sin(r);
                        t.moveTo(c * o + i, u * o + n),
                        t.lineTo(c * s + i, u * s + n),
                        t.arc(i, n, s, r, a, l),
                        t.lineTo(Math.cos(a) * o + i, Math.sin(a) * o + n),
                        0 !== o && t.arc(i, n, o, a, r, !l),
                        t.closePath()
                    }
                    ,
                    a.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.x
                          , i = t.y
                          , n = t.r
                          , a = t.r0
                          , s = t.startAngle
                          , o = t.endAngle
                          , l = t.clockwise
                          , c = r.getBBoxFromArc(e, i, n, s, o, l)
                          , u = r.getBBoxFromArc(e, i, a, s, o, l);
                        return {
                            minX: Math.min(c.minX, u.minX),
                            minY: Math.min(c.minY, u.minY),
                            maxX: Math.max(c.maxX, u.maxX),
                            maxY: Math.max(c.maxY, u.maxY)
                        }
                    }
                    ,
                    n
                }(n);
                n.Sector = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(2)
                  , a = 0
                  , s = {}
                  , o = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var o = r.prototype;
                    return o._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "text"
                    }
                    ,
                    o.getDefaultAttrs = function() {
                        return {
                            lineWidth: 0,
                            lineCount: 1,
                            fontSize: 12,
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontVariant: "normal",
                            textAlign: "start",
                            textBaseline: "bottom",
                            lineHeight: null,
                            textArr: null
                        }
                    }
                    ,
                    o._getFontStyle = function() {
                        var t = this._attrs.attrs
                          , e = t.fontSize
                          , i = t.fontFamily
                          , n = t.fontWeight;
                        return t.fontStyle + " " + t.fontVariant + " " + n + " " + e + "px " + i
                    }
                    ,
                    o._afterAttrsSet = function() {
                        var t = this._attrs.attrs;
                        if (t.font = this._getFontStyle(),
                        t.text) {
                            var e = t.text
                              , i = null
                              , r = 1;
                            n.isString(e) && -1 !== e.indexOf("\n") && (r = (i = e.split("\n")).length),
                            t.lineCount = r,
                            t.textArr = i
                        }
                        this.set("attrs", t)
                    }
                    ,
                    o._getTextHeight = function() {
                        var t = this._attrs.attrs;
                        if (t.height)
                            return t.height;
                        var e = t.lineCount
                          , i = 1 * t.fontSize;
                        return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i
                    }
                    ,
                    o._getSpaceingY = function() {
                        var t = this._attrs.attrs
                          , e = t.lineHeight
                          , i = 1 * t.fontSize;
                        return e ? e - i : .14 * i
                    }
                    ,
                    o.drawInner = function(t) {
                        var e = this._attrs.attrs
                          , i = e.text
                          , r = e.x
                          , a = e.y;
                        if (!(n.isNil(i) || isNaN(r) || isNaN(a))) {
                            var s = e.textArr
                              , o = 1 * e.fontSize
                              , l = this._getSpaceingY();
                            e.rotate && (t.translate(r, a),
                            t.rotate(e.rotate),
                            r = 0,
                            a = 0);
                            var c, u, h = e.textBaseline;
                            if (s && (c = this._getTextHeight()),
                            this.hasFill()) {
                                var f = e.fillOpacity;
                                if (n.isNil(f) || 1 === f || (t.globalAlpha = f),
                                s)
                                    for (var d = 0, p = s.length; d < p; d++) {
                                        var v = s[d];
                                        u = a + d * (l + o) - c + o,
                                        "middle" === h && (u += c - o - (c - o) / 2),
                                        "top" === h && (u += c - o),
                                        t.fillText(v, r, u)
                                    }
                                else
                                    t.fillText(i, r, a)
                            }
                            if (this.hasStroke())
                                if (s)
                                    for (var g = 0, m = s.length; g < m; g++) {
                                        var y = s[g];
                                        u = a + g * (l + o) - c + o,
                                        "middle" === h && (u += c - o - (c - o) / 2),
                                        "top" === h && (u += c - o),
                                        t.strokeText(y, r, u)
                                    }
                                else
                                    t.strokeText(i, r, a)
                        }
                    }
                    ,
                    o.calculateBox = function() {
                        var t = this._attrs.attrs
                          , e = t.x
                          , i = t.y
                          , n = t.textAlign
                          , r = t.textBaseline
                          , a = this._getTextWidth();
                        if (!a)
                            return {
                                minX: e,
                                minY: i,
                                maxX: e,
                                maxY: i
                            };
                        var s = this._getTextHeight()
                          , o = {
                            x: e,
                            y: i - s
                        };
                        return n && ("end" === n || "right" === n ? o.x -= a : "center" === n && (o.x -= a / 2)),
                        r && ("top" === r ? o.y += s : "middle" === r && (o.y += s / 2)),
                        {
                            minX: o.x,
                            minY: o.y,
                            maxX: o.x + a,
                            maxY: o.y + s
                        }
                    }
                    ,
                    o._getTextWidth = function() {
                        var t = this._attrs.attrs;
                        if (t.width)
                            return t.width;
                        var e = t.text
                          , i = this.get("context");
                        if (!n.isNil(e)) {
                            var r = t.font
                              , o = t.textArr
                              , l = e + "" + r;
                            if (s[l])
                                return s[l];
                            var c = 0;
                            if (o)
                                for (var u = 0, h = o.length; u < h; u++) {
                                    var f = o[u];
                                    c = Math.max(c, n.measureText(f, r, i).width)
                                }
                            else
                                c = n.measureText(e, r, i).width;
                            return a > 5e3 && (a = 0,
                            s = {}),
                            a++,
                            s[l] = c,
                            c
                        }
                    }
                    ,
                    r
                }(r);
                r.Text = o,
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(2)
                  , r = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = n.prototype;
                    return r._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.createPath = null,
                        this._attrs.type = "custom"
                    }
                    ,
                    r.createPath = function(t) {
                        var e = this.get("createPath");
                        e && e.call(this, t)
                    }
                    ,
                    r.calculateBox = function() {
                        var t = this.get("calculateBox");
                        return t && t.call(this)
                    }
                    ,
                    n
                }(n);
                n.Custom = r,
                t.exports = r
            }
            , function(t, e, i) {
                var n = i(39)
                  , r = i(6);
                i(32);
                var a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i,
                    n.prototype.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "line",
                        e.sortable = !0,
                        e
                    }
                    ,
                    n
                }(n);
                r.Line = a,
                t.exports = a
            }
            , function(t, e, i) {
                function n(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                var r = i(6)
                  , a = i(0)
                  , s = i(40);
                i(83);
                var o = function(t) {
                    var e, i;
                    i = t,
                    (e = o).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = o.prototype;
                    function o(e) {
                        var i;
                        return i = t.call(this, e) || this,
                        a.mix(n(n(i)), s),
                        i
                    }
                    return r.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "interval",
                        e.shapeType = "interval",
                        e.generatePoints = !0,
                        e
                    }
                    ,
                    r.createShapePointsCfg = function(e) {
                        var i = t.prototype.createShapePointsCfg.call(this, e);
                        return i.size = this.getNormalizedSize(e),
                        i
                    }
                    ,
                    r.clearInner = function() {
                        t.prototype.clearInner.call(this),
                        this.set("defaultSize", null)
                    }
                    ,
                    o
                }(r);
                r.Interval = o,
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(8)
                  , a = i(3)
                  , s = i(1);
                var o = r.registerFactory("interval", {
                    defaultShapeType: "rect",
                    getDefaultPoints: function(t) {
                        return function(t) {
                            var e, i, r = t.x, a = t.y, s = t.y0, o = t.size, l = s, c = a;
                            return n.isArray(a) && (c = a[1],
                            l = a[0]),
                            n.isArray(r) ? (e = r[0],
                            i = r[1]) : (e = r - o / 2,
                            i = r + o / 2),
                            [{
                                x: e,
                                y: l
                            }, {
                                x: e,
                                y: c
                            }, {
                                x: i,
                                y: c
                            }, {
                                x: i,
                                y: l
                            }]
                        }(t)
                    }
                });
                r.registerShape("interval", "rect", {
                    draw: function(t, e) {
                        var i = this.parsePoints(t.points)
                          , r = n.mix({
                            fill: t.color
                        }, s.shape.interval, t.style);
                        if (t.isInCircle) {
                            var o = i.slice(0);
                            this._coord.transposed && (o = [i[0], i[3], i[2], i[1]]);
                            var l = t.center
                              , c = l.x
                              , u = l.y
                              , h = [1, 0]
                              , f = [o[0].x - c, o[0].y - u]
                              , d = [o[1].x - c, o[1].y - u]
                              , p = [o[2].x - c, o[2].y - u]
                              , v = a.angleTo(h, d)
                              , g = a.angleTo(h, p)
                              , m = a.length(f)
                              , y = a.length(d);
                            return v >= 1.5 * Math.PI && (v -= 2 * Math.PI),
                            g >= 1.5 * Math.PI && (g -= 2 * Math.PI),
                            e.addShape("Sector", {
                                className: "interval",
                                attrs: n.mix({
                                    x: c,
                                    y: u,
                                    r: y,
                                    r0: m,
                                    startAngle: v,
                                    endAngle: g
                                }, r)
                            })
                        }
                        var x = function(t) {
                            for (var e = [], i = [], n = 0, r = t.length; n < r; n++) {
                                var a = t[n];
                                e.push(a.x),
                                i.push(a.y)
                            }
                            var s = Math.min.apply(null, e)
                              , o = Math.min.apply(null, i);
                            return {
                                x: s,
                                y: o,
                                width: Math.max.apply(null, e) - s,
                                height: Math.max.apply(null, i) - o
                            }
                        }(i);
                        return e.addShape("rect", {
                            className: "interval",
                            attrs: n.mix(x, r)
                        })
                    }
                }),
                t.exports = o
            }
            , function(t, e, i) {
                t.exports = {
                    Stack: i(85),
                    Dodge: i(89)
                }
            }
            , function(t, e, i) {
                var n = i(86);
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(33)
                  , r = i(88)
                  , a = i(22)
                  , s = function(t) {
                    var e, i;
                    function a() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = a).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var s = a.prototype;
                    return s._initDefaultCfg = function() {
                        this.xField = null,
                        this.yField = null
                    }
                    ,
                    s.processAdjust = function(t) {
                        this.processStack(t)
                    }
                    ,
                    s.processStack = function(t) {
                        var e = this.xField
                          , i = this.yField
                          , a = t.length
                          , s = {
                            positive: {},
                            negative: {}
                        };
                        this.reverseOrder && (t = t.slice(0).reverse());
                        for (var o = 0; o < a; o++)
                            for (var l = t[o], c = 0, u = l.length; c < u; c++) {
                                var h = l[c]
                                  , f = h[e] || 0
                                  , d = h[i]
                                  , p = f.toString();
                                if (d = n(d) ? d[1] : d,
                                !r(d)) {
                                    var v = d >= 0 ? "positive" : "negative";
                                    s[v][p] || (s[v][p] = 0),
                                    h[i] = [s[v][p], d + s[v][p]],
                                    s[v][p] += d
                                }
                            }
                    }
                    ,
                    a
                }(a);
                a.Stack = s,
                t.exports = s
            }
            , function(t, e) {
                var i = {}.toString;
                t.exports = function(t, e) {
                    return i.call(t) === "[object " + e + "]"
                }
            }
            , function(t, e) {
                t.exports = function(t) {
                    return null === t || void 0 === t
                }
            }
            , function(t, e, i) {
                var n = i(90);
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(22)
                  , r = i(91)
                  , a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a._initDefaultCfg = function() {
                        this.marginRatio = .5,
                        this.dodgeRatio = .5,
                        this.adjustNames = ["x", "y"]
                    }
                    ,
                    a.getDodgeOffset = function(t, e, i) {
                        var n = t.pre
                          , r = t.next
                          , a = r - n
                          , s = a * this.dodgeRatio / i
                          , o = this.marginRatio * s;
                        return (n + r) / 2 + (.5 * (a - i * s - (i - 1) * o) + ((e + 1) * s + e * o) - .5 * s - .5 * a)
                    }
                    ,
                    a.processAdjust = function(t) {
                        var e = this
                          , i = t.length
                          , n = e.xField;
                        r(t, function(t, r) {
                            for (var a = 0, s = t.length; a < s; a++) {
                                var o = t[a]
                                  , l = o[n]
                                  , c = {
                                    pre: 1 === s ? l - 1 : l - .5,
                                    next: 1 === s ? l + 1 : l + .5
                                }
                                  , u = e.getDodgeOffset(c, r, i);
                                o[n] = u
                            }
                        })
                    }
                    ,
                    n
                }(n);
                n.Dodge = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(92)
                  , r = i(33);
                t.exports = function(t, e) {
                    if (t)
                        if (r(t))
                            for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++)
                                ;
                        else if (n(t))
                            for (var s in t)
                                if (t.hasOwnProperty(s) && !1 === e(t[s], s))
                                    break
                }
            }
            , function(t, e) {
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                t.exports = function(t) {
                    var e = void 0 === t ? "undefined" : i(t);
                    return null !== t && "object" === e || "function" === e
                }
            }
            , function(t, e, i) {
                var n = i(21)
                  , r = i(3)
                  , a = i(23)
                  , s = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var s = n.prototype;
                    return s._initDefaultCfg = function() {
                        this.type = "polar",
                        this.startAngle = -Math.PI / 2,
                        this.endAngle = 3 * Math.PI / 2,
                        this.inner = 0,
                        this.innerRadius = 0,
                        this.isPolar = !0,
                        this.transposed = !1,
                        this.center = null,
                        this.radius = null
                    }
                    ,
                    s.init = function(t, e) {
                        var i, n, r = this.inner || this.innerRadius, a = Math.abs(e.x - t.x), s = Math.abs(e.y - t.y);
                        this.startAngle === -Math.PI && 0 === this.endAngle ? (i = Math.min(a / 2, s),
                        n = {
                            x: (t.x + e.x) / 2,
                            y: t.y
                        }) : (i = Math.min(a, s) / 2,
                        n = {
                            x: (t.x + e.x) / 2,
                            y: (t.y + e.y) / 2
                        });
                        var o = this.radius;
                        o > 0 && o <= 1 && (i *= o),
                        this.x = {
                            start: this.startAngle,
                            end: this.endAngle
                        },
                        this.y = {
                            start: i * r,
                            end: i
                        },
                        this.center = n,
                        this.circleRadius = i
                    }
                    ,
                    s.convertPoint = function(t) {
                        var e = this.center
                          , i = this.transposed
                          , n = i ? "y" : "x"
                          , r = i ? "x" : "y"
                          , a = this.x
                          , s = this.y
                          , o = a.start + (a.end - a.start) * t[n]
                          , l = s.start + (s.end - s.start) * t[r];
                        return {
                            x: e.x + Math.cos(o) * l,
                            y: e.y + Math.sin(o) * l
                        }
                    }
                    ,
                    s.invertPoint = function(t) {
                        var e = this.center
                          , i = this.transposed
                          , n = this.x
                          , s = this.y
                          , o = i ? "y" : "x"
                          , l = i ? "x" : "y"
                          , c = [1, 0, 0, 1, 0, 0];
                        a.rotate(c, c, n.start);
                        var u = [1, 0];
                        r.transformMat2d(u, u, c),
                        u = [u[0], u[1]];
                        var h = [t.x - e.x, t.y - e.y];
                        if (r.zero(h))
                            return {
                                x: 0,
                                y: 0
                            };
                        var f = r.angleTo(u, h, n.end < n.start);
                        Math.abs(f - 2 * Math.PI) < .001 && (f = 0);
                        var d = r.length(h)
                          , p = f / (n.end - n.start);
                        p = n.end - n.start > 0 ? p : -p;
                        var v = (d - s.start) / (s.end - s.start)
                          , g = {};
                        return g[o] = p,
                        g[l] = v,
                        g
                    }
                    ,
                    n
                }(n);
                n.Polar = s,
                t.exports = s
            }
            , function(t, e, i) {
                var n = i(15)
                  , r = i(34);
                t.exports = {
                    toTimeStamp: function(t) {
                        return n(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()),
                        r(t) && (t = t.getTime()),
                        t
                    }
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = {
                    circle: function(t, e, i, n) {
                        n.arc(t, e, i, 0, 2 * Math.PI, !1)
                    },
                    square: function(t, e, i, n) {
                        n.moveTo(t - i, e - i),
                        n.lineTo(t + i, e - i),
                        n.lineTo(t + i, e + i),
                        n.lineTo(t - i, e + i),
                        n.closePath()
                    }
                }
                  , a = function(t) {
                    var e, i;
                    function a() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = a).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var s = a.prototype;
                    return s._initProperties = function() {
                        t.prototype._initProperties.call(this),
                        this._attrs.canFill = !0,
                        this._attrs.canStroke = !0,
                        this._attrs.type = "marker"
                    }
                    ,
                    s.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            lineWidth: 0
                        }
                    }
                    ,
                    s.createPath = function(t) {
                        var e, i = this.get("attrs"), a = i.x, s = i.y, o = i.radius, l = i.symbol || "circle";
                        e = n.isFunction(l) ? l : r[l],
                        t.beginPath(),
                        e(a, s, o, t, this)
                    }
                    ,
                    s.calculateBox = function() {
                        var t = this.get("attrs")
                          , e = t.x
                          , i = t.y
                          , n = t.radius;
                        return {
                            minX: e - n,
                            minY: i - n,
                            maxX: e + n,
                            maxY: i + n
                        }
                    }
                    ,
                    a
                }(i(5).Shape);
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(5).Group
                  , a = i(95)
                  , s = function() {
                    var t = e.prototype;
                    function e(t) {
                        n.deepMix(this, this.getDefaultCfg(), t),
                        this._init(),
                        this._renderTitle(),
                        this._renderItems()
                    }
                    return t.getDefaultCfg = function() {
                        return {
                            showTitle: !1,
                            title: null,
                            items: null,
                            titleGap: 12,
                            itemGap: 10,
                            itemMarginBottom: 12,
                            itemFormatter: null,
                            itemWidth: null,
                            wordSpace: 6,
                            x: 0,
                            y: 0,
                            layout: "horizontal",
                            joinString: ": "
                        }
                    }
                    ,
                    t._init = function() {
                        var t = new r({
                            zIndex: this.zIndex || 0
                        });
                        this.container = t;
                        var e = t.addGroup();
                        this.wrapper = e;
                        var i = e.addGroup({
                            className: "itemsGroup"
                        });
                        this.itemsGroup = i,
                        this.parent && this.parent.add(t)
                    }
                    ,
                    t._renderTitle = function(t) {
                        t = t || this.title;
                        var e = this.titleShape
                          , i = 0;
                        if (this.showTitle && t) {
                            if (e && !e.get("destroyed"))
                                e.attr("text", t);
                            else {
                                var r = this.wrapper
                                  , a = this.titleStyle;
                                e = r.addShape("text", {
                                    className: "title",
                                    attrs: n.mix({
                                        x: 0,
                                        y: 0,
                                        text: t
                                    }, a)
                                }),
                                this.titleShape = e
                            }
                            i = e.getBBox().height + this.titleGap
                        }
                        this._titleHeight = i
                    }
                    ,
                    t._renderItems = function(t) {
                        var e = this;
                        (t = t || e.items) && (e.reversed && t.reverse(),
                        n.each(t, function(t, i) {
                            e._addItem(t, i)
                        }),
                        t.length > 1 && this._adjustItems(),
                        this._renderBackground())
                    }
                    ,
                    t._renderBackground = function() {
                        var t = this.background;
                        if (t) {
                            var e = this.container
                              , i = this.wrapper.getBBox()
                              , r = i.minX
                              , a = i.minY
                              , s = i.width
                              , o = i.height
                              , l = t.padding || [0, 0, 0, 0];
                            l = n.parsePadding(l);
                            var c = n.mix({
                                x: r - l[3],
                                y: a - l[0],
                                width: s + l[1] + l[3],
                                height: o + l[0] + l[2]
                            }, t)
                              , u = this.backShape;
                            u ? u.attr(c) : u = e.addShape("Rect", {
                                zIndex: -1,
                                attrs: c
                            }),
                            this.backShape = u,
                            e.sort()
                        }
                    }
                    ,
                    t._addItem = function(t) {
                        var e, i = this.itemsGroup.addGroup({
                            name: t.name,
                            value: t.value,
                            dataValue: t.dataValue,
                            checked: t.checked
                        }), r = this.unCheckStyle, s = this.unCheckColor, o = this.nameStyle, l = this.valueStyle, c = this.wordSpace, u = t.marker, h = t.value, f = 0;
                        if (s && (r.fill = s),
                        u) {
                            var d = u.radius || 3
                              , p = n.mix({
                                x: d,
                                y: this._titleHeight
                            }, u);
                            !1 === t.checked && n.mix(p, r);
                            var v = new a({
                                className: "item-marker",
                                attrs: p
                            });
                            i.add(v),
                            f += v.getBBox().width + c
                        }
                        var g = t.name;
                        if (g) {
                            var m = this.joinString || "";
                            g = h ? g + m : g,
                            e = i.addShape("text", {
                                className: "name",
                                attrs: n.mix({
                                    x: f,
                                    y: this._titleHeight,
                                    text: this._formatItemValue(g)
                                }, o, !1 === t.checked ? r : null)
                            })
                        }
                        if (h) {
                            var y = f;
                            e && (y += e.getBBox().width),
                            i.addShape("text", {
                                className: "value",
                                attrs: n.mix({
                                    x: y,
                                    y: this._titleHeight,
                                    text: h
                                }, l, !1 === t.checked ? r : null)
                            })
                        }
                        return i
                    }
                    ,
                    t._formatItemValue = function(t) {
                        var e = this.itemFormatter;
                        return e && (t = e.call(this, t)),
                        t
                    }
                    ,
                    t._getMaxItemWidth = function() {
                        var t = this.itemWidth;
                        if (n.isNumber(t) || n.isNil(t))
                            return t;
                        if ("auto" === t) {
                            for (var e = this.itemsGroup.get("children"), i = e.length, r = 0, a = 0; a < i; a++) {
                                var s = e[a].getBBox().width;
                                r = Math.max(r, s)
                            }
                            var o = this.maxLength
                              , l = this.itemGap
                              , c = (o - l) / 2
                              , u = (o - 2 * l) / 3;
                            return 2 === i ? Math.max(r, c) : r <= u ? u : r <= c ? c : r
                        }
                    }
                    ,
                    t._adjustHorizontal = function() {
                        for (var t, e, i = this.maxLength, n = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, s = this._titleHeight, o = 0, l = 0, c = this._getMaxItemWidth(), u = [], h = 0, f = n.length; h < f; h++) {
                            var d = n[h]
                              , p = d.getBBox()
                              , v = p.height
                              , g = p.width;
                            e = v + a,
                            (t = c || g) - (i - l) > 1e-4 && (o++,
                            l = 0),
                            d.moveTo(l, o * e),
                            u.push({
                                x: l,
                                y: o * e + s - v / 2,
                                width: 1.375 * g,
                                height: 1.375 * v
                            }),
                            l += t + r
                        }
                        this.legendHitBoxes = u
                    }
                    ,
                    t._adjustVertical = function() {
                        for (var t, e, i = this.maxLength, r = this.itemsGroup, a = this.itemGap, s = this.itemMarginBottom, o = this.itemWidth, l = this._titleHeight, c = r.get("children"), u = 0, h = 0, f = 0, d = [], p = 0, v = c.length; p < v; p++) {
                            var g = c[p]
                              , m = g.getBBox();
                            t = m.width,
                            e = m.height,
                            n.isNumber(o) ? h = o + a : t > h && (h = t + a),
                            i - u < e ? (u = 0,
                            f += h,
                            g.moveTo(f, 0),
                            d.push({
                                x: f,
                                y: l - e / 2,
                                width: 1.375 * t,
                                height: 1.375 * e
                            })) : (g.moveTo(f, u),
                            d.push({
                                x: f,
                                y: u - e / 2 + l,
                                width: 1.375 * t,
                                height: 1.375 * e
                            })),
                            u += e + s
                        }
                        this.legendHitBoxes = d
                    }
                    ,
                    t._adjustItems = function() {
                        "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical()
                    }
                    ,
                    t.moveTo = function(t, e) {
                        this.x = t,
                        this.y = e;
                        var i = this.container;
                        return i && i.moveTo(t, e),
                        this
                    }
                    ,
                    t.setItems = function(t) {
                        this.clearItems(),
                        this._renderItems(t)
                    }
                    ,
                    t.setTitle = function(t) {
                        this._renderTitle(t)
                    }
                    ,
                    t.clearItems = function() {
                        this.itemsGroup.clear()
                    }
                    ,
                    t.getWidth = function() {
                        return this.container.getBBox().width
                    }
                    ,
                    t.getHeight = function() {
                        return this.container.getBBox().height
                    }
                    ,
                    t.show = function() {
                        this.container.show()
                    }
                    ,
                    t.hide = function() {
                        this.container.hide()
                    }
                    ,
                    t.clear = function() {
                        var t = this.container;
                        t.clear(),
                        t.remove(!0)
                    }
                    ,
                    e
                }();
                t.exports = s
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = {
                    appear: {
                        duration: 450,
                        easing: "quadraticOut"
                    },
                    update: {
                        duration: 300,
                        easing: "quadraticOut"
                    },
                    enter: {
                        duration: 300,
                        easing: "quadraticOut"
                    },
                    leave: {
                        duration: 350,
                        easing: "quadraticIn"
                    }
                }
                  , a = {
                    defaultCfg: {},
                    Action: {},
                    getAnimation: function(t, e, i) {
                        var r = this.defaultCfg[t];
                        if (r) {
                            var a = r[i];
                            if (n.isFunction(a))
                                return a(e)
                        }
                        return !1
                    },
                    getAnimateCfg: function(t, e) {
                        var i = r[e]
                          , a = this.defaultCfg[t];
                        return a && a.cfg && a.cfg[e] ? n.deepMix({}, i, a.cfg[e]) : i
                    },
                    registerAnimation: function(t, e) {
                        this.Action || (this.Action = {}),
                        this.Action[t] = e
                    }
                };
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(5).Matrix
                  , r = i(0)
                  , a = {
                    getCoordInfo: function(t) {
                        var e = t.start
                          , i = t.end;
                        return {
                            start: e,
                            end: i,
                            width: i.x - e.x,
                            height: Math.abs(i.y - e.y)
                        }
                    },
                    getScaledMatrix: function(t, e, i) {
                        var r;
                        t.apply(e);
                        var a = e[0]
                          , s = e[1];
                        if ("x" === i) {
                            t.transform([["t", a, s], ["s", .01, 1], ["t", -a, -s]]);
                            var o = t.getMatrix();
                            r = n.transform(o, [["t", a, s], ["s", 100, 1], ["t", -a, -s]])
                        } else if ("y" === i) {
                            t.transform([["t", a, s], ["s", 1, .01], ["t", -a, -s]]);
                            var l = t.getMatrix();
                            r = n.transform(l, [["t", a, s], ["s", 1, 100], ["t", -a, -s]])
                        } else if ("xy" === i) {
                            t.transform([["t", a, s], ["s", .01, .01], ["t", -a, -s]]);
                            var c = t.getMatrix();
                            r = n.transform(c, [["t", a, s], ["s", 100, 100], ["t", -a, -s]])
                        }
                        return r
                    },
                    getAnimateParam: function(t, e, i) {
                        var n = {};
                        return t.delay && (n.delay = r.isFunction(t.delay) ? t.delay(e, i) : t.delay),
                        n.easing = t.easing,
                        n.duration = t.duration,
                        n.delay = t.delay,
                        n
                    },
                    doAnimation: function(t, e, i, n) {
                        var r = t._id
                          , s = t.get("index")
                          , o = a.getAnimateParam(i, s, r)
                          , l = o.easing
                          , c = o.delay
                          , u = o.duration
                          , h = t.animate().to({
                            attrs: e,
                            duration: u,
                            delay: c,
                            easing: l
                        });
                        n && h.onEnd(function() {
                            n()
                        })
                    }
                };
                t.exports = a
            }
            , , function(t, e, i) {
                var n = i(6);
                i(101),
                i(39),
                i(81),
                i(103),
                i(82),
                i(105),
                i(107),
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(6);
                i(102);
                var a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "point",
                        e.shapeType = "point",
                        e.generatePoints = !0,
                        e
                    }
                    ,
                    a.draw = function(t, e) {
                        var i = this
                          , r = i.get("container");
                        n.each(t, function(t) {
                            var a = t.shape
                              , s = i.getDrawCfg(t);
                            if (n.isArray(t.y)) {
                                var o = i.hasAdjust("stack");
                                n.each(t.y, function(n, l) {
                                    s.y = n,
                                    o && 0 === l || i.drawShape(a, t, s, r, e)
                                })
                            } else
                                n.isNil(t.y) || i.drawShape(a, t, s, r, e)
                        })
                    }
                    ,
                    r
                }(r);
                r.Point = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(1)
                  , a = i(19)
                  , s = i(8)
                  , o = s.registerFactory("point", {
                    defaultShapeType: "circle",
                    getDefaultPoints: function(t) {
                        return a.splitPoints(t)
                    }
                });
                function l(t, e, i) {
                    if (0 !== t.size) {
                        var a = function(t) {
                            var e = {
                                lineWidth: 0,
                                stroke: t.color,
                                fill: t.color
                            };
                            return t.size && (e.size = t.size),
                            n.mix(e, t.style),
                            n.mix({}, r.shape.point, e)
                        }(t)
                          , s = a.r || a.size
                          , o = t.x
                          , l = n.isArray(t.y) ? t.y : [t.y];
                        "hollowCircle" === i && (a.lineWidth = 1,
                        a.fill = null);
                        for (var c = 0, u = l.length; c < u; c++)
                            return "rect" === i ? e.addShape("Rect", {
                                className: "point",
                                attrs: n.mix({
                                    x: o - s,
                                    y: l[c] - s,
                                    width: 2 * s,
                                    height: 2 * s
                                }, a)
                            }) : e.addShape("Circle", {
                                className: "point",
                                attrs: n.mix({
                                    x: o,
                                    y: l[c],
                                    r: s
                                }, a)
                            })
                    }
                }
                n.each(["circle", "hollowCircle", "rect"], function(t) {
                    s.registerShape("point", t, {
                        draw: function(e, i) {
                            return l(e, i, t)
                        }
                    })
                }),
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(6)
                  , r = i(19)
                  , a = i(0);
                i(104);
                var s = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var s = n.prototype;
                    return s.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "area",
                        e.shapeType = "area",
                        e.generatePoints = !0,
                        e.sortable = !0,
                        e
                    }
                    ,
                    s.draw = function(t, e) {
                        var i = this
                          , n = i.get("container")
                          , s = this.getDrawCfg(t[0])
                          , o = i.getYScale()
                          , l = i.get("connectNulls")
                          , c = r.splitArray(t, o.field, l);
                        s.origin = t,
                        a.each(c, function(r, a) {
                            s.splitedIndex = a;
                            var o = r.map(function(t) {
                                return t.points
                            });
                            s.points = o,
                            i.drawShape(s.shape, t[0], s, n, e)
                        })
                    }
                    ,
                    n
                }(n);
                n.Area = s,
                t.exports = s
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(8)
                  , a = i(38)
                  , s = i(10)
                  , o = i(1);
                function l(t, e) {
                    return Math.abs(t - e) < 1e-5
                }
                function c(t) {
                    return !isNaN(t) && !n.isNil(t)
                }
                function u(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        c(r.x) && c(r.y) && e.push(r)
                    }
                    return e
                }
                function h(t, e, i) {
                    var r = t.points
                      , c = []
                      , h = [];
                    n.each(r, function(t) {
                        h.push(t[0]),
                        c.push(t[1])
                    });
                    var f = n.mix({
                        fillStyle: t.color
                    }, o.shape.area, t.style);
                    return h.reverse(),
                    c = this.parsePoints(c),
                    h = this.parsePoints(h),
                    t.isInCircle && (c.push(c[0]),
                    h.unshift(h[h.length - 1]),
                    function(t, e) {
                        var i = !0;
                        return n.each(t, function(t) {
                            if (!l(t.x, e.x) || !l(t.y, e.y))
                                return i = !1,
                                !1
                        }),
                        i
                    }(h, t.center) && (h = [])),
                    function(t, e, i, r, o) {
                        var l = t.concat(e);
                        return o ? i.addShape("Custom", {
                            className: "area",
                            attrs: n.mix({
                                points: l
                            }, r),
                            createPath: function(t) {
                                var e = [[0, 0], [1, 1]]
                                  , i = u(this._attrs.attrs.points)
                                  , n = i.length
                                  , r = i.slice(0, n / 2)
                                  , s = i.slice(n / 2, n)
                                  , o = a.smooth(r, !1, e);
                                t.beginPath(),
                                t.moveTo(r[0].x, r[0].y);
                                for (var l = 0, c = o.length; l < c; l++) {
                                    var h = o[l];
                                    t.bezierCurveTo(h[1], h[2], h[3], h[4], h[5], h[6])
                                }
                                if (s.length) {
                                    var f = a.smooth(s, !1, e);
                                    t.lineTo(s[0].x, s[0].y);
                                    for (var d = 0, p = f.length; d < p; d++) {
                                        var v = f[d];
                                        t.bezierCurveTo(v[1], v[2], v[3], v[4], v[5], v[6])
                                    }
                                }
                                t.closePath()
                            },
                            calculateBox: function() {
                                var t = u(this._attrs.attrs.points);
                                return s.getBBoxFromPoints(t)
                            }
                        }) : i.addShape("Polyline", {
                            className: "area",
                            attrs: n.mix({
                                points: l
                            }, r)
                        })
                    }(c, h, e, f, i)
                }
                var f = r.registerFactory("area", {
                    defaultShapeType: "area",
                    getDefaultPoints: function(t) {
                        var e = t.x
                          , i = t.y
                          , r = t.y0;
                        i = n.isArray(i) ? i : [r, i];
                        var a = [];
                        return a.push({
                            x: e,
                            y: i[0]
                        }, {
                            x: e,
                            y: i[1]
                        }),
                        a
                    }
                });
                n.each(["area", "smooth"], function(t) {
                    r.registerShape("area", t, {
                        draw: function(e, i) {
                            var n = "smooth" === t;
                            return h.call(this, e, i, n)
                        }
                    })
                }),
                t.exports = f
            }
            , function(t, e, i) {
                var n = i(6)
                  , r = i(0);
                i(106);
                var a = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = n.prototype;
                    return a.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "polygon",
                        e.shapeType = "polygon",
                        e.generatePoints = !0,
                        e
                    }
                    ,
                    a.createShapePointsCfg = function(e) {
                        var i, n = t.prototype.createShapePointsCfg.call(this, e), a = n.x, s = n.y;
                        if (!r.isArray(a) || !r.isArray(s)) {
                            var o = this.getXScale()
                              , l = this.getYScale()
                              , c = .5 / (o.values ? o.values.length : o.ticks.length)
                              , u = .5 / (l.values ? l.values.length : l.ticks.length);
                            o.isCategory && l.isCategory ? (a = [a - c, a - c, a + c, a + c],
                            s = [s - u, s + u, s + u, s - u]) : r.isArray(a) ? (a = [(i = a)[0], i[0], i[1], i[1]],
                            s = [s - u / 2, s + u / 2, s + u / 2, s - u / 2]) : r.isArray(s) && (s = [(i = s)[0], i[1], i[1], i[0]],
                            a = [a - c / 2, a - c / 2, a + c / 2, a + c / 2]),
                            n.x = a,
                            n.y = s
                        }
                        return n
                    }
                    ,
                    n
                }(n);
                n.Polygon = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(8)
                  , r = i(0)
                  , a = n.registerFactory("polygon", {
                    defaultShapeType: "polygon",
                    getDefaultPoints: function(t) {
                        for (var e = [], i = t.x, n = t.y, r = 0, a = i.length; r < a; r++)
                            e.push({
                                x: i[r],
                                y: n[r]
                            });
                        return e
                    }
                });
                n.registerShape("polygon", "polygon", {
                    draw: function(t, e) {
                        var i = this.parsePoints(t.points)
                          , n = r.mix({
                            fill: t.color,
                            points: i
                        }, t.style);
                        return e.addShape("Polygon", {
                            className: "polygon",
                            attrs: n
                        })
                    }
                }),
                t.exports = a
            }
            , function(t, e, i) {
                function n(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                var r = i(6)
                  , a = i(0)
                  , s = i(40);
                i(108);
                var o = function(t) {
                    var e, i;
                    i = t,
                    (e = o).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = o.prototype;
                    function o(e) {
                        var i;
                        return i = t.call(this, e) || this,
                        a.mix(n(n(i)), s),
                        i
                    }
                    return r.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "schema",
                        e.shapeType = "schema",
                        e.generatePoints = !0,
                        e
                    }
                    ,
                    r.createShapePointsCfg = function(e) {
                        var i = t.prototype.createShapePointsCfg.call(this, e);
                        return i.size = this.getNormalizedSize(e),
                        i
                    }
                    ,
                    r.clearInner = function() {
                        t.prototype.clearInner.call(this),
                        this.set("defaultSize", null)
                    }
                    ,
                    o
                }(r);
                r.Schema = o,
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(8)
                  , r = i(0);
                var a = n.registerFactory("schema", {});
                n.registerShape("schema", "candle", {
                    getPoints: function(t) {
                        return e = t.x,
                        i = t.y,
                        n = t.size,
                        r = function(t) {
                            var e = t.sort(function(t, e) {
                                return t < e ? 1 : -1
                            })
                              , i = e.length;
                            if (i < 4)
                                for (var n = e[i - 1], r = 0; r < 4 - i; r++)
                                    e.push(n);
                            return e
                        }(i),
                        [{
                            x: e,
                            y: r[0]
                        }, {
                            x: e,
                            y: r[1]
                        }, {
                            x: e - n / 2,
                            y: r[2]
                        }, {
                            x: e - n / 2,
                            y: r[1]
                        }, {
                            x: e + n / 2,
                            y: r[1]
                        }, {
                            x: e + n / 2,
                            y: r[2]
                        }, {
                            x: e,
                            y: r[2]
                        }, {
                            x: e,
                            y: r[3]
                        }];
                        var e, i, n, r
                    },
                    draw: function(t, e) {
                        var i = this.parsePoints(t.points)
                          , n = r.mix({
                            stroke: t.color,
                            fill: t.color,
                            lineWidth: 1
                        }, t.style);
                        return e.addShape("Custom", {
                            className: "schema",
                            attrs: n,
                            createPath: function(t) {
                                t.beginPath(),
                                t.moveTo(i[0].x, i[0].y),
                                t.lineTo(i[1].x, i[1].y),
                                t.moveTo(i[2].x, i[2].y);
                                for (var e = 3; e < 6; e++)
                                    t.lineTo(i[e].x, i[e].y);
                                t.closePath(),
                                t.moveTo(i[6].x, i[6].y),
                                t.lineTo(i[7].x, i[7].y)
                            }
                        })
                    }
                }),
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(24)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this),
                        this.startAngle = -Math.PI / 2,
                        this.endAngle = 3 * Math.PI / 2,
                        this.radius = null,
                        this.center = null
                    }
                    ,
                    a.getOffsetPoint = function(t) {
                        var e = this.startAngle
                          , i = e + (this.endAngle - e) * t;
                        return this._getCirclePoint(i)
                    }
                    ,
                    a._getCirclePoint = function(t, e) {
                        var i = this.center;
                        return e = e || this.radius,
                        {
                            x: i.x + Math.cos(t) * e,
                            y: i.y + Math.sin(t) * e
                        }
                    }
                    ,
                    a.getTextAlignInfo = function(t, e) {
                        var i, n = this.getOffsetVector(t, e), r = "middle";
                        return n[0] > 0 ? i = "left" : n[0] < 0 ? i = "right" : (i = "center",
                        n[1] > 0 ? r = "top" : n[1] < 0 && (r = "bottom")),
                        {
                            textAlign: i,
                            textBaseline: r
                        }
                    }
                    ,
                    a.getAxisVector = function(t) {
                        var e = this.center
                          , i = this.offsetFactor;
                        return [(t.y - e.y) * i, -1 * (t.x - e.x) * i]
                    }
                    ,
                    a.drawLine = function(t) {
                        var e = this.center
                          , i = this.radius
                          , r = this.startAngle
                          , a = this.endAngle;
                        this.getContainer(t.top).addShape("arc", {
                            className: "axis-line",
                            attrs: n.mix({
                                x: e.x,
                                y: e.y,
                                r: i,
                                startAngle: r,
                                endAngle: a
                            }, t)
                        })
                    }
                    ,
                    r
                }(r);
                r.Circle = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(111);
                t.exports = n
            }
            , function(t, e, i) {
                var n = i(14)
                  , r = i(35)
                  , a = i(112)
                  , s = i(36)
                  , o = i(94)
                  , l = i(4)
                  , c = i(13)
                  , u = i(17)
                  , h = i(15)
                  , f = function(t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = n).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var r = n.prototype;
                    return r._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this),
                        this.type = "timeCat",
                        this.sortable = !0,
                        this.tickCount = 5,
                        this.mask = "YYYY-MM-DD"
                    }
                    ,
                    r.init = function() {
                        var t = this
                          , e = this.values;
                        l(e, function(i, n) {
                            e[n] = t._toTimeStamp(i)
                        }),
                        this.sortable && e.sort(function(t, e) {
                            return t - e
                        }),
                        t.ticks || (t.ticks = this.calculateTicks())
                    }
                    ,
                    r.calculateTicks = function() {
                        var t, e = this.tickCount;
                        e ? t = s({
                            maxCount: e,
                            data: this.values,
                            isRounding: this.isRounding
                        }).ticks : t = this.values;
                        return t
                    }
                    ,
                    r.translate = function(t) {
                        t = this._toTimeStamp(t);
                        var e = this.values.indexOf(t);
                        return -1 === e && (e = c(t) && t < this.values.length ? t : NaN),
                        e
                    }
                    ,
                    r.scale = function(t) {
                        var e = this.rangeMin()
                          , i = this.rangeMax()
                          , n = this.translate(t);
                        return e + (1 === this.values.length || isNaN(n) ? n : n > -1 ? n / (this.values.length - 1) : 0) * (i - e)
                    }
                    ,
                    r.getText = function(t) {
                        var e = ""
                          , i = this.translate(t);
                        e = i > -1 ? this.values[i] : t;
                        var n = this.formatter;
                        return e = parseInt(e, 10),
                        e = n ? n(e) : a.format(e, this.mask)
                    }
                    ,
                    r.getTicks = function() {
                        var t = this
                          , e = this.ticks
                          , i = [];
                        return l(e, function(e) {
                            var n;
                            n = u(e) ? e : {
                                text: h(e) ? e : t.getText(e),
                                value: t.scale(e),
                                tickValue: e
                            },
                            i.push(n)
                        }),
                        i
                    }
                    ,
                    r._toTimeStamp = function(t) {
                        return o.toTimeStamp(t)
                    }
                    ,
                    n
                }(r);
                n.TimeCat = f,
                t.exports = f
            }
            , function(t, e, i) {
                var n;
                !function(r) {
                    "use strict";
                    var a = {}
                      , s = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g
                      , o = /\d\d?/
                      , l = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
                      , c = /\[([^]*?)\]/gm
                      , u = function() {};
                    function h(t, e) {
                        for (var i = [], n = 0, r = t.length; n < r; n++)
                            i.push(t[n].substr(0, e));
                        return i
                    }
                    function f(t) {
                        return function(e, i, n) {
                            var r = n[t].indexOf(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
                            ~r && (e.month = r)
                        }
                    }
                    function d(t, e) {
                        for (t = String(t),
                        e = e || 2; t.length < e; )
                            t = "0" + t;
                        return t
                    }
                    var p = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                      , v = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                      , g = h(v, 3)
                      , m = h(p, 3);
                    a.i18n = {
                        dayNamesShort: m,
                        dayNames: p,
                        monthNamesShort: g,
                        monthNames: v,
                        amPm: ["am", "pm"],
                        DoFn: function(t) {
                            return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10]
                        }
                    };
                    var y = {
                        D: function(t) {
                            return t.getDate()
                        },
                        DD: function(t) {
                            return d(t.getDate())
                        },
                        Do: function(t, e) {
                            return e.DoFn(t.getDate())
                        },
                        d: function(t) {
                            return t.getDay()
                        },
                        dd: function(t) {
                            return d(t.getDay())
                        },
                        ddd: function(t, e) {
                            return e.dayNamesShort[t.getDay()]
                        },
                        dddd: function(t, e) {
                            return e.dayNames[t.getDay()]
                        },
                        M: function(t) {
                            return t.getMonth() + 1
                        },
                        MM: function(t) {
                            return d(t.getMonth() + 1)
                        },
                        MMM: function(t, e) {
                            return e.monthNamesShort[t.getMonth()]
                        },
                        MMMM: function(t, e) {
                            return e.monthNames[t.getMonth()]
                        },
                        YY: function(t) {
                            return String(t.getFullYear()).substr(2)
                        },
                        YYYY: function(t) {
                            return d(t.getFullYear(), 4)
                        },
                        h: function(t) {
                            return t.getHours() % 12 || 12
                        },
                        hh: function(t) {
                            return d(t.getHours() % 12 || 12)
                        },
                        H: function(t) {
                            return t.getHours()
                        },
                        HH: function(t) {
                            return d(t.getHours())
                        },
                        m: function(t) {
                            return t.getMinutes()
                        },
                        mm: function(t) {
                            return d(t.getMinutes())
                        },
                        s: function(t) {
                            return t.getSeconds()
                        },
                        ss: function(t) {
                            return d(t.getSeconds())
                        },
                        S: function(t) {
                            return Math.round(t.getMilliseconds() / 100)
                        },
                        SS: function(t) {
                            return d(Math.round(t.getMilliseconds() / 10), 2)
                        },
                        SSS: function(t) {
                            return d(t.getMilliseconds(), 3)
                        },
                        a: function(t, e) {
                            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1]
                        },
                        A: function(t, e) {
                            return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase()
                        },
                        ZZ: function(t) {
                            var e = t.getTimezoneOffset();
                            return (e > 0 ? "-" : "+") + d(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4)
                        }
                    }
                      , x = {
                        D: [o, function(t, e) {
                            t.day = e
                        }
                        ],
                        Do: [new RegExp(o.source + l.source), function(t, e) {
                            t.day = parseInt(e, 10)
                        }
                        ],
                        M: [o, function(t, e) {
                            t.month = e - 1
                        }
                        ],
                        YY: [o, function(t, e) {
                            var i = +("" + (new Date).getFullYear()).substr(0, 2);
                            t.year = "" + (e > 68 ? i - 1 : i) + e
                        }
                        ],
                        h: [o, function(t, e) {
                            t.hour = e
                        }
                        ],
                        m: [o, function(t, e) {
                            t.minute = e
                        }
                        ],
                        s: [o, function(t, e) {
                            t.second = e
                        }
                        ],
                        YYYY: [/\d{4}/, function(t, e) {
                            t.year = e
                        }
                        ],
                        S: [/\d/, function(t, e) {
                            t.millisecond = 100 * e
                        }
                        ],
                        SS: [/\d{2}/, function(t, e) {
                            t.millisecond = 10 * e
                        }
                        ],
                        SSS: [/\d{3}/, function(t, e) {
                            t.millisecond = e
                        }
                        ],
                        d: [o, u],
                        ddd: [l, u],
                        MMM: [l, f("monthNamesShort")],
                        MMMM: [l, f("monthNames")],
                        a: [l, function(t, e, i) {
                            var n = e.toLowerCase();
                            n === i.amPm[0] ? t.isPm = !1 : n === i.amPm[1] && (t.isPm = !0)
                        }
                        ],
                        ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
                            "Z" === e && (e = "+00:00");
                            var i, n = (e + "").match(/([\+\-]|\d\d)/gi);
                            n && (i = 60 * n[1] + parseInt(n[2], 10),
                            t.timezoneOffset = "+" === n[0] ? i : -i)
                        }
                        ]
                    };
                    x.dd = x.d,
                    x.dddd = x.ddd,
                    x.DD = x.D,
                    x.mm = x.m,
                    x.hh = x.H = x.HH = x.h,
                    x.MM = x.M,
                    x.ss = x.s,
                    x.A = x.a,
                    a.masks = {
                        default: "ddd MMM DD YYYY HH:mm:ss",
                        shortDate: "M/D/YY",
                        mediumDate: "MMM D, YYYY",
                        longDate: "MMMM D, YYYY",
                        fullDate: "dddd, MMMM D, YYYY",
                        shortTime: "HH:mm",
                        mediumTime: "HH:mm:ss",
                        longTime: "HH:mm:ss.SSS"
                    },
                    a.format = function(t, e, i) {
                        var n = i || a.i18n;
                        if ("number" == typeof t && (t = new Date(t)),
                        "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime()))
                            throw new Error("Invalid Date in fecha.format");
                        var r = [];
                        return (e = (e = (e = a.masks[e] || e || a.masks.default).replace(c, function(t, e) {
                            return r.push(e),
                            "??"
                        })).replace(s, function(e) {
                            return e in y ? y[e](t, n) : e.slice(1, e.length - 1)
                        })).replace(/\?\?/g, function() {
                            return r.shift()
                        })
                    }
                    ,
                    a.parse = function(t, e, i) {
                        var n = i || a.i18n;
                        if ("string" != typeof e)
                            throw new Error("Invalid format in fecha.parse");
                        if (e = a.masks[e] || e,
                        t.length > 1e3)
                            return !1;
                        var r = !0
                          , o = {};
                        if (e.replace(s, function(e) {
                            if (x[e]) {
                                var i = x[e]
                                  , a = t.search(i[0]);
                                ~a ? t.replace(i[0], function(e) {
                                    return i[1](o, e, n),
                                    t = t.substr(a + e.length),
                                    e
                                }) : r = !1
                            }
                            return x[e] ? "" : e.slice(1, e.length - 1)
                        }),
                        !r)
                            return !1;
                        var l, c = new Date;
                        return !0 === o.isPm && null != o.hour && 12 != +o.hour ? o.hour = +o.hour + 12 : !1 === o.isPm && 12 == +o.hour && (o.hour = 0),
                        null != o.timezoneOffset ? (o.minute = +(o.minute || 0) - +o.timezoneOffset,
                        l = new Date(Date.UTC(o.year || c.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0))) : l = new Date(o.year || c.getFullYear(),o.month || 0,o.day || 1,o.hour || 0,o.minute || 0,o.second || 0,o.millisecond || 0),
                        l
                    }
                    ,
                    void 0 !== t && t.exports ? t.exports = a : void 0 === (n = function() {
                        return a
                    }
                    .call(e, i, e, t)) || (t.exports = n)
                }()
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        this.type = "arc",
                        this.start = [],
                        this.end = [],
                        this.style = {
                            stroke: "#999",
                            lineWidth: 1
                        }
                    }
                    ,
                    a.render = function(t, e) {
                        var i = this.parsePoint(t, this.start)
                          , r = this.parsePoint(t, this.end);
                        if (i && r) {
                            var a = t.center
                              , s = Math.sqrt((i.x - a.x) * (i.x - a.x) + (i.y - a.y) * (i.y - a.y))
                              , o = Math.atan2(i.y - a.y, i.x - a.x)
                              , l = Math.atan2(r.y - a.y, r.x - a.x)
                              , c = e.addShape("arc", {
                                className: "guide-arc",
                                attrs: n.mix({
                                    x: a.x,
                                    y: a.y,
                                    r: s,
                                    startAngle: o,
                                    endAngle: l
                                }, this.style)
                            });
                            return this.element = c,
                            c
                        }
                    }
                    ,
                    r
                }(r);
                r.Arc = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12);
                function a(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t.style[i] = e[i]);
                    return t
                }
                function s(t) {
                    var e = document.createElement("div");
                    return t = t.replace(/(^\s*)|(\s*$)/g, ""),
                    e.innerHTML = "" + t,
                    e.childNodes[0]
                }
                var o = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var o = r.prototype;
                    return o._initDefaultCfg = function() {
                        this.type = "html",
                        this.position = null,
                        this.alignX = "center",
                        this.alignY = "middle",
                        this.offsetX = null,
                        this.offsetY = null,
                        this.html = null
                    }
                    ,
                    o.render = function(t, e) {
                        var i = this.parsePoint(t, this.position);
                        if (i) {
                            var r = s(this.html);
                            r = a(r, {
                                position: "absolute",
                                top: Math.floor(i.y) + "px",
                                left: Math.floor(i.x) + "px",
                                visibility: "hidden"
                            });
                            var o = e.get("canvas").get("el")
                              , l = o.parentNode;
                            l = a(l, {
                                position: "relative"
                            });
                            var c = s('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
                            l.appendChild(c),
                            c.appendChild(r);
                            var u = o.offsetTop
                              , h = o.offsetLeft
                              , f = this.alignX
                              , d = this.alignY
                              , p = this.offsetX
                              , v = this.offsetY
                              , g = function(t, e, i, n) {
                                var r = [];
                                return "left" === t && "top" === e ? (r[0] = 0,
                                r[1] = 0) : "right" === t && "top" === e ? (r[0] = -i,
                                r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0,
                                r[1] = Math.floor(-n)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-i),
                                r[1] = Math.floor(-n)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-i),
                                r[1] = Math.floor(-n / 2)) : "left" === t && "middle" === e ? (r[0] = 0,
                                r[1] = Math.floor(-n / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-i / 2),
                                r[1] = Math.floor(-n)) : "center" === t && "top" === e ? (r[0] = Math.floor(-i / 2),
                                r[1] = 0) : (r[0] = Math.floor(-i / 2),
                                r[1] = Math.floor(-n / 2)),
                                r
                            }(f, d, n.getWidth(r), n.getHeight(r));
                            i.x = i.x + g[0] + h,
                            i.y = i.y + g[1] + u,
                            p && (i.x += p),
                            v && (i.y += v),
                            a(r, {
                                top: Math.floor(i.y) + "px",
                                left: Math.floor(i.x) + "px",
                                visibility: "visible"
                            }),
                            this.element = c
                        }
                    }
                    ,
                    o.remove = function() {
                        var t = this.element;
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }
                    ,
                    r
                }(r);
                r.Html = o,
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        this.type = "line",
                        this.start = [],
                        this.end = [],
                        this.style = {
                            stroke: "#000",
                            lineWidth: 1
                        }
                    }
                    ,
                    a.render = function(t, e) {
                        var i = [];
                        if (i[0] = this.parsePoint(t, this.start),
                        i[1] = this.parsePoint(t, this.end),
                        i[0] && i[1]) {
                            var r = e.addShape("Line", {
                                className: "guide-line",
                                attrs: n.mix({
                                    x1: i[0].x,
                                    y1: i[0].y,
                                    x2: i[1].x,
                                    y2: i[1].y
                                }, this.style)
                            });
                            return this.element = r,
                            r
                        }
                    }
                    ,
                    r
                }(r);
                r.Line = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        this.type = "rect",
                        this.start = [],
                        this.end = [],
                        this.style = {
                            fill: "#CCD7EB",
                            opacity: .4
                        }
                    }
                    ,
                    a.render = function(t, e) {
                        var i = this.parsePoint(t, this.start)
                          , r = this.parsePoint(t, this.end);
                        if (i && r) {
                            var a = e.addShape("rect", {
                                className: "guide-rect",
                                attrs: n.mix({
                                    x: Math.min(i.x, r.x),
                                    y: Math.min(i.y, r.y),
                                    width: Math.abs(r.x - i.x),
                                    height: Math.abs(i.y - r.y)
                                }, this.style)
                            });
                            return this.element = a,
                            a
                        }
                    }
                    ,
                    r
                }(r);
                r.Rect = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        this.type = "text",
                        this.position = null,
                        this.content = null,
                        this.style = {
                            fill: "#000"
                        },
                        this.offsetX = 0,
                        this.offsetY = 0
                    }
                    ,
                    a.render = function(t, e) {
                        var i = this.position
                          , r = this.parsePoint(t, i);
                        if (r) {
                            var a = this.content
                              , s = this.style
                              , o = this.offsetX
                              , l = this.offsetY;
                            o && (r.x += o),
                            l && (r.y += l);
                            var c = e.addShape("text", {
                                className: "guide-text",
                                attrs: n.mix({
                                    x: r.x,
                                    y: r.y,
                                    text: a
                                }, s)
                            });
                            return this.element = c,
                            c
                        }
                    }
                    ,
                    r
                }(r);
                r.Text = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12)
                  , a = function(t) {
                    var e, i;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    i = t,
                    (e = r).prototype = Object.create(i.prototype),
                    e.prototype.constructor = e,
                    e.__proto__ = i;
                    var a = r.prototype;
                    return a._initDefaultCfg = function() {
                        this.type = "tag",
                        this.position = null,
                        this.content = null,
                        this.direct = "tl",
                        this.autoAdjust = !0,
                        this.offsetX = 0,
                        this.offsetY = 0,
                        this.side = 4,
                        this.background = {
                            padding: 5,
                            radius: 2,
                            fill: "#1890FF"
                        },
                        this.textStyle = {
                            fontSize: 12,
                            fill: "#fff",
                            textAlign: "center",
                            textBaseline: "middle"
                        },
                        this.withPoint = !0,
                        this.pointStyle = {
                            fill: "#1890FF",
                            r: 3,
                            lineWidth: 1,
                            stroke: "#fff"
                        }
                    }
                    ,
                    a._getDirect = function(t, e, i, n) {
                        var r = this.direct
                          , a = this.side
                          , s = t.get("canvas")
                          , o = s.get("width")
                          , l = s.get("height")
                          , c = e.x
                          , u = e.y
                          , h = r[0]
                          , f = r[1];
                        "t" === h && u - a - n < 0 ? h = "b" : "b" === h && u + a + n > l && (h = "t");
                        var d = "c" === h ? a : 0;
                        return "l" === f && c - d - i < 0 ? f = "r" : "r" === f && c + d + i > o ? f = "l" : "c" === f && (i / 2 + c + d > o ? f = "l" : c - i / 2 - d < 0 && (f = "r")),
                        r = h + f
                    }
                    ,
                    a.render = function(t, e) {
                        var i = this.parsePoint(t, this.position);
                        if (i) {
                            var r = this.content
                              , a = this.background
                              , s = this.textStyle
                              , o = []
                              , l = e.addGroup({
                                className: "guide-tag"
                            });
                            if (this.withPoint) {
                                var c = l.addShape("Circle", {
                                    className: "guide-tag-point",
                                    attrs: n.mix({
                                        x: i.x,
                                        y: i.y
                                    }, this.pointStyle)
                                });
                                o.push(c)
                            }
                            var u = l.addGroup()
                              , h = u.addShape("text", {
                                className: "guide-tag-text",
                                zIndex: 1,
                                attrs: n.mix({
                                    x: 0,
                                    y: 0,
                                    text: r
                                }, s)
                            });
                            o.push(h);
                            var f = h.getBBox()
                              , d = n.parsePadding(a.padding)
                              , p = f.width + d[1] + d[3]
                              , v = f.height + d[0] + d[2]
                              , g = f.minY - d[0]
                              , m = f.minX - d[3]
                              , y = u.addShape("rect", {
                                className: "guide-tag-bg",
                                zIndex: -1,
                                attrs: n.mix({
                                    x: m,
                                    y: g,
                                    width: p,
                                    height: v
                                }, a)
                            });
                            o.push(y);
                            var x, b = this.autoAdjust ? this._getDirect(e, i, p, v) : this.direct, S = this.side, _ = i.x + this.offsetX, C = i.y + this.offsetY, w = n.parsePadding(a.radius);
                            "tl" === b ? (x = [{
                                x: p + m - S - 1,
                                y: v + g - 1
                            }, {
                                x: p + m,
                                y: v + g - 1
                            }, {
                                x: p + m,
                                y: v + S + g
                            }],
                            w[2] = 0,
                            _ -= p,
                            C = C - S - v) : "cl" === b ? (x = [{
                                x: p + m - 1,
                                y: (v - S) / 2 + g - 1
                            }, {
                                x: p + m - 1,
                                y: (v + S) / 2 + g + 1
                            }, {
                                x: p + S + m,
                                y: v / 2 + g
                            }],
                            _ = _ - p - S,
                            C -= v / 2) : "bl" === b ? (x = [{
                                x: p + m,
                                y: -S + g
                            }, {
                                x: p + m - S - 1,
                                y: g + 1
                            }, {
                                x: p + m,
                                y: g + 1
                            }],
                            w[1] = 0,
                            _ -= p,
                            C += S) : "bc" === b ? (x = [{
                                x: p / 2 + m,
                                y: -S + g
                            }, {
                                x: (p - S) / 2 + m - 1,
                                y: g + 1
                            }, {
                                x: (p + S) / 2 + m + 1,
                                y: g + 1
                            }],
                            _ -= p / 2,
                            C += S) : "br" === b ? (x = [{
                                x: m,
                                y: g - S
                            }, {
                                x: m,
                                y: g + 1
                            }, {
                                x: m + S + 1,
                                y: g + 1
                            }],
                            w[0] = 0,
                            C += S) : "cr" === b ? (x = [{
                                x: m - S,
                                y: v / 2 + g
                            }, {
                                x: m + 1,
                                y: (v - S) / 2 + g - 1
                            }, {
                                x: m + 1,
                                y: (v + S) / 2 + g + 1
                            }],
                            _ += S,
                            C -= v / 2) : "tr" === b ? (x = [{
                                x: m,
                                y: v + S + g
                            }, {
                                x: m,
                                y: v + g - 1
                            }, {
                                x: S + m + 1,
                                y: v + g - 1
                            }],
                            w[3] = 0,
                            C = C - v - S) : "tc" === b && (x = [{
                                x: (p - S) / 2 + m - 1,
                                y: v + g - 1
                            }, {
                                x: (p + S) / 2 + m + 1,
                                y: v + g - 1
                            }, {
                                x: p / 2 + m,
                                y: v + S + g
                            }],
                            _ -= p / 2,
                            C = C - v - S);
                            var A = u.addShape("Polygon", {
                                className: "guide-tag-side",
                                zIndex: 0,
                                attrs: {
                                    points: x,
                                    fill: a.fill
                                }
                            });
                            return o.push(A),
                            y.attr("radius", w),
                            u.moveTo(_ - m, C - g),
                            u.sort(),
                            this.element = l,
                            o
                        }
                    }
                    ,
                    r
                }(r);
                r.Tag = a,
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(1)
                  , a = i(120)
                  , s = i(26);
                function o(t) {
                    var e = t.getAttr("color");
                    if (e) {
                        var i = e.getScale(e.type);
                        if (i.isLinear)
                            return i
                    }
                    var n = t.getXScale()
                      , r = t.getYScale();
                    return r || n
                }
                function l(t) {
                    var e = [];
                    return n.each(t, function(t) {
                        var i = function(t, e) {
                            var i = -1;
                            return n.each(t, function(t, n) {
                                if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color)
                                    return i = n,
                                    !1
                            }),
                            i
                        }(e, t);
                        -1 === i ? e.push(t) : e[i] = t
                    }),
                    e
                }
                r.tooltip = n.deepMix({
                    triggerOn: ["touchstart", "touchmove"],
                    alwaysShow: !1,
                    showTitle: !1,
                    showCrosshairs: !1,
                    crosshairsStyle: {
                        stroke: "rgba(0, 0, 0, 0.25)",
                        lineWidth: 1
                    },
                    showTooltipMarker: !0,
                    background: {
                        radius: 1,
                        fill: "rgba(0, 0, 0, 0.65)",
                        padding: [3, 5]
                    },
                    titleStyle: {
                        fontSize: 12,
                        fill: "#fff",
                        textAlign: "start",
                        textBaseline: "top"
                    },
                    nameStyle: {
                        fontSize: 12,
                        fill: "rgba(255, 255, 255, 0.65)",
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    valueStyle: {
                        fontSize: 12,
                        fill: "#fff",
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    showItemMarker: !0,
                    itemMarkerStyle: {
                        radius: 3,
                        symbol: "circle",
                        lineWidth: 1,
                        stroke: "#fff"
                    },
                    layout: "horizontal",
                    snap: !1
                }, r.tooltip || {});
                var c = function() {
                    function t(t) {
                        this.enable = !0,
                        this.cfg = {},
                        this.tooltip = null,
                        this.chart = null,
                        this.timeStamp = 0,
                        n.mix(this, t);
                        var e = this.chart;
                        this.canvasDom = e.get("canvas").get("el")
                    }
                    var e = t.prototype;
                    return e._setCrosshairsCfg = function() {
                        var t = this.chart
                          , e = n.mix({}, r.tooltip)
                          , i = t.get("geoms")
                          , a = [];
                        n.each(i, function(t) {
                            var e = t.get("type");
                            -1 === a.indexOf(e) && a.push(e)
                        });
                        var s = t.get("coord").type;
                        return !i.length || "cartesian" !== s && "rect" !== s || 1 === a.length && -1 !== ["line", "area", "path", "point"].indexOf(a[0]) && n.mix(e, {
                            showCrosshairs: !0
                        }),
                        e
                    }
                    ,
                    e._getMaxLength = function(t) {
                        void 0 === t && (t = {});
                        var e = t
                          , i = e.layout
                          , n = e.plotRange;
                        return "horizontal" === i ? n.br.x - n.bl.x : n.bl.y - n.tr.y
                    }
                    ,
                    e.render = function() {
                        if (!this.tooltip) {
                            var t = this.chart
                              , e = t.get("canvas")
                              , i = t.get("frontPlot").addGroup({
                                className: "tooltipContainer",
                                zIndex: 10
                            })
                              , r = t.get("backPlot").addGroup({
                                className: "tooltipContainer"
                            })
                              , s = t.get("plotRange")
                              , o = t.get("coord")
                              , l = this._setCrosshairsCfg()
                              , c = this.cfg;
                            (c = n.deepMix({
                                plotRange: s,
                                frontPlot: i,
                                backPlot: r,
                                canvas: e,
                                fixed: o.transposed || o.isPolar
                            }, l, c)).maxLength = this._getMaxLength(c),
                            this.cfg = c;
                            var u = new a(c);
                            this.tooltip = u,
                            this.bindEvents()
                        }
                    }
                    ,
                    e.clear = function() {
                        var t = this.tooltip;
                        t && t.destroy(),
                        this.tooltip = null,
                        this.prePoint = null,
                        this._lastActive = null,
                        this.unBindEvents()
                    }
                    ,
                    e._getTooltipMarkerStyle = function(t) {
                        void 0 === t && (t = {});
                        var e = t
                          , i = e.type
                          , r = e.items
                          , a = this.cfg;
                        if ("rect" === i) {
                            var s, o, l, c, u = this.chart, h = u.get("plotRange"), f = h.tl, d = h.br, p = u.get("coord"), v = r[0], g = r[r.length - 1], m = v.width;
                            p.transposed ? (s = f.x,
                            o = g.y - .75 * m,
                            l = d.x - f.x,
                            c = v.y - g.y + 1.5 * m) : (s = v.x - .75 * m,
                            o = f.y,
                            l = g.x - v.x + 1.5 * m,
                            c = d.y - f.y),
                            t.style = n.mix({
                                x: s,
                                y: o,
                                width: l,
                                height: c,
                                fill: "#CCD6EC",
                                opacity: .3
                            }, a.tooltipMarkerStyle)
                        } else
                            t.style = n.mix({
                                radius: 4,
                                fill: "#fff",
                                lineWidth: 2
                            }, a.tooltipMarkerStyle);
                        return t
                    }
                    ,
                    e._setTooltip = function(t, e, i) {
                        void 0 === i && (i = {});
                        var r = this._lastActive
                          , a = this.tooltip
                          , o = this.cfg;
                        e = l(e);
                        var c = this.chart
                          , u = c.get("coord")
                          , h = c.getYScales()[0]
                          , f = o.snap;
                        if (!1 === f && h.isLinear) {
                            var d, p, v = u.invertPoint(t), g = c.get("plotRange");
                            s.isPointInPlot(t, g) && (u.transposed ? (d = h.invert(v.x),
                            p = t.x,
                            a.setXTipContent(d),
                            a.setXTipPosition(p),
                            a.setYCrosshairPosition(p)) : (d = h.invert(v.y),
                            p = t.y,
                            a.setYTipContent(d),
                            a.setYTipPosition(p),
                            a.setXCrosshairPosition(p)))
                        }
                        if (o.onShow && o.onShow({
                            x: t.x,
                            y: t.y,
                            tooltip: a,
                            items: e,
                            tooltipMarkerCfg: i
                        }),
                        m = r,
                        y = e,
                        JSON.stringify(m) !== JSON.stringify(y)) {
                            var m, y;
                            this._lastActive = e;
                            var x = o.onChange;
                            x && x({
                                x: t.x,
                                y: t.y,
                                tooltip: a,
                                items: e,
                                tooltipMarkerCfg: i
                            });
                            var b = e[0]
                              , S = b.title || b.name
                              , _ = b.x;
                            if (e.length > 1 && (_ = (e[0].x + e[e.length - 1].x) / 2),
                            a.setContent(S, e, u.transposed),
                            a.setPosition(e, t),
                            u.transposed) {
                                var C = b.y;
                                e.length > 1 && (C = (e[0].y + e[e.length - 1].y) / 2),
                                a.setYTipContent(S),
                                a.setYTipPosition(C),
                                a.setXCrosshairPosition(C),
                                f && (a.setXTipContent(b.value),
                                a.setXTipPosition(_),
                                a.setYCrosshairPosition(_))
                            } else
                                a.setXTipContent(S),
                                a.setXTipPosition(_),
                                a.setYCrosshairPosition(_),
                                f && (a.setYTipContent(b.value),
                                a.setYTipPosition(b.y),
                                a.setXCrosshairPosition(b.y));
                            var w = i.items;
                            o.showTooltipMarker && w.length ? (i = this._getTooltipMarkerStyle(i),
                            a.setMarkers(i)) : a.clearMarkers(),
                            a.show()
                        } else {
                            !1 === f && (n.directionEnabled(o.crosshairsType, "y") || o.showYTip) && this.chart.get("canvas").draw()
                        }
                    }
                    ,
                    e.showTooltip = function(t) {
                        var e, i, a = this.chart, s = [], l = [], c = this.cfg;
                        c.showItemMarker && (i = c.itemMarkerStyle);
                        var u = a.get("geoms")
                          , h = a.get("coord");
                        if (n.each(u, function(a) {
                            if (a.get("visible")) {
                                var c = a.get("type")
                                  , u = a.getSnapRecords(t);
                                n.each(u, function(t) {
                                    if (t.x && t.y) {
                                        var u = t.x
                                          , f = t.y
                                          , d = t._origin
                                          , p = t.color
                                          , v = {
                                            x: u,
                                            y: n.isArray(f) ? f[1] : f,
                                            color: p || r.defaultColor,
                                            origin: d,
                                            name: function(t, e) {
                                                var i, r, a = t._getGroupScales();
                                                if (a.length && n.each(a, function(t) {
                                                    return r = t,
                                                    !1
                                                }),
                                                r) {
                                                    var s = r.field;
                                                    i = r.getText(e[s])
                                                } else {
                                                    var l = o(t);
                                                    i = l.alias || l.field
                                                }
                                                return i
                                            }(a, d),
                                            value: function(t, e) {
                                                var i = o(t);
                                                return i.getText(e[i.field])
                                            }(a, d),
                                            title: function(t, e) {
                                                var i = t.getAttr("position").getFields()[0]
                                                  , n = t.get("scales")[i];
                                                return n.getText(e[n.field])
                                            }(a, d)
                                        };
                                        i && (v.marker = n.mix({
                                            fill: p || r.defaultColor
                                        }, i)),
                                        l.push(v),
                                        -1 !== ["line", "area", "path"].indexOf(c) ? (e = "circle",
                                        s.push(v)) : "interval" !== c || "cartesian" !== h.type && "rect" !== h.type || (e = "rect",
                                        v.width = a.getSize(t._origin),
                                        s.push(v))
                                    }
                                })
                            }
                        }),
                        l.length) {
                            var f = {
                                items: s,
                                type: e
                            };
                            this._setTooltip(t, l, f)
                        } else
                            this.hideTooltip()
                    }
                    ,
                    e.hideTooltip = function() {
                        var t = this.cfg;
                        this._lastActive = null;
                        var e = this.tooltip;
                        e && (e.hide(),
                        t.onHide && t.onHide({
                            tooltip: e
                        }),
                        this.chart.get("canvas").draw())
                    }
                    ,
                    e.handleShowEvent = function(t) {
                        var e = this.chart;
                        if (this.enable && !e.get("_closeTooltip")) {
                            var i = e.get("plotRange")
                              , r = n.createEvent(t, e);
                            if (s.isPointInPlot(r, i) || this.cfg.alwaysShow) {
                                var a = this.timeStamp
                                  , o = +new Date;
                                o - a > 16 && (this.showTooltip(r),
                                this.timeStamp = o)
                            } else
                                this.hideTooltip()
                        }
                    }
                    ,
                    e.handleHideEvent = function() {
                        var t = this.chart;
                        this.enable && !t.get("_closeTooltip") && this.hideTooltip()
                    }
                    ,
                    e.handleDocEvent = function(t) {
                        var e = this.chart;
                        if (this.enable && !e.get("_closeTooltip")) {
                            var i = this.canvasDom;
                            t.target !== i && this.hideTooltip()
                        }
                    }
                    ,
                    e._handleEvent = function(t, e, i) {
                        var r = this.canvasDom;
                        n.each([].concat(t), function(t) {
                            "bind" === i ? n.addEventListener(r, t, e) : n.removeEventListener(r, t, e)
                        })
                    }
                    ,
                    e.bindEvents = function() {
                        var t = this.cfg
                          , e = t.triggerOn
                          , i = t.triggerOff
                          , r = t.alwaysShow
                          , a = n.wrapBehavior(this, "handleShowEvent")
                          , s = n.wrapBehavior(this, "handleHideEvent");
                        if (e && this._handleEvent(e, a, "bind"),
                        i && this._handleEvent(i, s, "bind"),
                        !r) {
                            var o = n.wrapBehavior(this, "handleDocEvent");
                            n.isBrowser && n.addEventListener(document, "touchstart", o)
                        }
                    }
                    ,
                    e.unBindEvents = function() {
                        var t = this.cfg
                          , e = t.triggerOn
                          , i = t.triggerOff
                          , r = t.alwaysShow
                          , a = n.getWrapBehavior(this, "handleShowEvent")
                          , s = n.getWrapBehavior(this, "handleHideEvent");
                        if (e && this._handleEvent(e, a, "unBind"),
                        i && this._handleEvent(i, s, "unBind"),
                        !r) {
                            var o = n.getWrapBehavior(this, "handleDocEvent");
                            n.isBrowser && n.removeEventListener(document, "touchstart", o)
                        }
                    }
                    ,
                    t
                }();
                t.exports = {
                    init: function(t) {
                        var e = new c({
                            chart: t
                        });
                        t.set("tooltipController", e),
                        t.tooltip = function(t, i) {
                            return n.isObject(t) && (i = t,
                            t = !0),
                            e.enable = t,
                            i && (e.cfg = i),
                            this
                        }
                    },
                    afterGeomDraw: function(t) {
                        var e = t.get("tooltipController");
                        e.render(),
                        t.showTooltip = function(t) {
                            return e.showTooltip(t),
                            this
                        }
                        ,
                        t.hideTooltip = function() {
                            return e.hideTooltip(),
                            this
                        }
                    },
                    clearInner: function(t) {
                        t.get("tooltipController").clear()
                    }
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(95)
                  , a = i(96)
                  , s = i(121)
                  , o = function() {
                    var t = e.prototype;
                    function e(t) {
                        n.deepMix(this, this.getDefaultCfg(), t);
                        var e = this.frontPlot;
                        if (!this.custom) {
                            var i = new a(n.mix({
                                parent: e,
                                zIndex: 3
                            }, t));
                            this.container = i;
                            var r = this.fixed
                              , o = this.background;
                            r || (this.tooltipArrow = e.addShape("Polygon", {
                                className: "tooltip-arrow",
                                visible: !1,
                                zIndex: 2,
                                attrs: n.mix({
                                    points: []
                                }, o)
                            }))
                        }
                        if (this.showXTip) {
                            var l = this.xTipBackground
                              , c = new s({
                                className: "xTip",
                                background: l,
                                visible: !1
                            });
                            e.add(c.container),
                            this.xTipBox = c
                        }
                        if (this.showYTip) {
                            var u = this.yTipBackground
                              , h = new s({
                                className: "yTip",
                                background: u,
                                visible: !1
                            });
                            e.add(h.container),
                            this.yTipBox = h
                        }
                        this.showCrosshairs && this._renderCrosshairs(),
                        e.sort()
                    }
                    return t.getDefaultCfg = function() {
                        return {
                            showCrosshairs: !1,
                            crosshairsStyle: {
                                stroke: "rgba(0, 0, 0, 0.25)",
                                lineWidth: 1
                            },
                            crosshairsType: "y",
                            showXTip: !1,
                            showYTip: !1,
                            xTip: null,
                            xTipBackground: {
                                radius: 1,
                                fill: "rgba(0, 0, 0, 0.65)",
                                padding: [3, 5]
                            },
                            yTip: null,
                            yTipBackground: {
                                radius: 1,
                                fill: "rgba(0, 0, 0, 0.65)",
                                padding: [3, 5]
                            },
                            background: null,
                            layout: "horizontal",
                            offsetX: 0,
                            offsetY: 0
                        }
                    }
                    ,
                    t.setContent = function(t, e) {
                        if (this.title = t,
                        this.items = e,
                        !this.custom) {
                            var i = this.container;
                            i.setTitle(t),
                            i.setItems(e)
                        }
                    }
                    ,
                    t.setYTipContent = function(t) {
                        var e = this.yTip;
                        t = n.isFunction(e) ? e(t) : n.mix({
                            text: t
                        }, e),
                        this.yTipBox && this.yTipBox.updateContent(t)
                    }
                    ,
                    t.setYTipPosition = function(t) {
                        var e = this.plotRange
                          , i = this.crosshairsShapeX;
                        if (this.showYTip) {
                            var n = this.yTipBox
                              , r = n.getHeight()
                              , a = n.getWidth()
                              , s = e.tl.x - a
                              , o = t - r / 2;
                            o <= e.tl.y && (o = e.tl.y),
                            o + r >= e.br.y && (o = e.br.y - r),
                            s < 0 && (s = e.tl.x,
                            i && i.attr("x1", e.tl.x + a)),
                            n.updatePosition(s, o)
                        }
                    }
                    ,
                    t.setXTipContent = function(t) {
                        var e = this.xTip;
                        t = n.isFunction(e) ? e(t) : n.mix({
                            text: t
                        }, e),
                        this.xTipBox && this.xTipBox.updateContent(t)
                    }
                    ,
                    t.setXTipPosition = function(t) {
                        var e = this.showXTip
                          , i = this.canvas
                          , n = this.plotRange
                          , r = this.xTipBox
                          , a = this.crosshairsShapeY;
                        if (e) {
                            var s = i.get("height")
                              , o = r.getWidth()
                              , l = r.getHeight()
                              , c = t - o / 2
                              , u = n.br.y;
                            c <= n.tl.x && (c = n.tl.x),
                            c + o >= n.tr.x && (c = n.tr.x - o),
                            s - u < l && (u -= l),
                            r.updatePosition(c, u),
                            a && a.attr("y1", u)
                        }
                    }
                    ,
                    t.setXCrosshairPosition = function(t) {
                        this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t)
                    }
                    ,
                    t.setYCrosshairPosition = function(t) {
                        this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0)
                    }
                    ,
                    t.setPosition = function(t) {
                        var e = this.container
                          , i = this.plotRange
                          , r = this.offsetX
                          , a = this.offsetY
                          , s = this.fixed
                          , o = this.tooltipArrow;
                        if (e) {
                            var l, c = e.container.getBBox(), u = c.minX, h = c.minY, f = c.width, d = c.height, p = i.tl, v = i.tr, g = 0, m = p.y - d - 4 + a;
                            if (s)
                                g = (p.x + v.x) / 2 - f / 2 + r;
                            else if ((g = (l = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x) - f / 2 + r) < p.x && (g = p.x),
                            g + f > v.x && (g = v.x - f),
                            o) {
                                o.attr("points", [{
                                    x: l - 3,
                                    y: p.y - 4 + a
                                }, {
                                    x: l + 3,
                                    y: p.y - 4 + a
                                }, {
                                    x: l,
                                    y: p.y + a
                                }]);
                                var y = e.backShape
                                  , x = n.parsePadding(y.attr("radius"));
                                l === p.x ? (x[3] = 0,
                                o.attr("points", [{
                                    x: p.x,
                                    y: p.y + a
                                }, {
                                    x: p.x,
                                    y: p.y - 4 + a
                                }, {
                                    x: p.x + 4,
                                    y: p.y - 4 + a
                                }])) : l === v.x && (x[2] = 0,
                                o.attr("points", [{
                                    x: v.x,
                                    y: p.y + a
                                }, {
                                    x: v.x - 4,
                                    y: p.y - 4 + a
                                }, {
                                    x: v.x,
                                    y: p.y - 4 + a
                                }])),
                                y.attr("radius", x)
                            }
                            e.moveTo(g - u, m - h)
                        }
                    }
                    ,
                    t.setMarkers = function(t) {
                        void 0 === t && (t = {});
                        var e = t
                          , i = e.items
                          , a = e.style
                          , s = e.type
                          , o = this._getMarkerGroup(s);
                        if ("circle" === s)
                            for (var l = 0, c = i.length; l < c; l++) {
                                var u = i[l]
                                  , h = new r({
                                    className: "tooltip-circle-marker",
                                    attrs: n.mix({
                                        x: u.x,
                                        y: u.y,
                                        stroke: u.color
                                    }, a)
                                });
                                o.add(h)
                            }
                        else
                            o.addShape("rect", {
                                className: "tooltip-rect-marker",
                                attrs: a
                            })
                    }
                    ,
                    t.clearMarkers = function() {
                        var t = this.markerGroup;
                        t && t.clear()
                    }
                    ,
                    t.show = function() {
                        var t = this.crosshairsShapeX
                          , e = this.crosshairsShapeY
                          , i = this.markerGroup
                          , n = this.container
                          , r = this.tooltipArrow
                          , a = this.xTipBox
                          , s = this.yTipBox
                          , o = this.canvas;
                        t && t.show(),
                        e && e.show(),
                        i && i.show(),
                        n && n.show(),
                        r && r.show(),
                        a && a.show(),
                        s && s.show(),
                        o.draw()
                    }
                    ,
                    t.hide = function() {
                        var t = this.crosshairsShapeX
                          , e = this.crosshairsShapeY
                          , i = this.markerGroup
                          , n = this.container
                          , r = this.tooltipArrow
                          , a = this.xTipBox
                          , s = this.yTipBox;
                        t && t.hide(),
                        e && e.hide(),
                        i && i.hide(),
                        n && n.hide(),
                        r && r.hide(),
                        a && a.hide(),
                        s && s.hide()
                    }
                    ,
                    t.destroy = function() {
                        var t = this.crosshairsShapeX
                          , e = this.crosshairsShapeY
                          , i = this.markerGroup
                          , n = this.container
                          , r = this.tooltipArrow
                          , a = this.xTipBox
                          , s = this.yTipBox;
                        t && t.remove(!0),
                        e && e.remove(!0),
                        i && i.remove(!0),
                        r && r.remove(!0),
                        n && n.clear(),
                        a && a.clear(),
                        s && s.clear(),
                        this.destroyed = !0
                    }
                    ,
                    t._getMarkerGroup = function(t) {
                        var e = this.markerGroup;
                        return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({
                            zIndex: 1
                        }),
                        this.frontPlot.sort()) : e = this.backPlot.addGroup(),
                        this.markerGroup = e),
                        e
                    }
                    ,
                    t._renderCrosshairs = function() {
                        var t = this.crosshairsType
                          , e = this.crosshairsStyle
                          , i = this.frontPlot
                          , r = this.plotRange
                          , a = r.tl
                          , s = r.br;
                        n.directionEnabled(t, "x") && (this.crosshairsShapeX = i.addShape("Line", {
                            className: "tooltip-crosshairs-x",
                            zIndex: 0,
                            visible: !1,
                            attrs: n.mix({
                                x1: a.x,
                                y1: 0,
                                x2: s.x,
                                y2: 0
                            }, e)
                        })),
                        n.directionEnabled(t, "y") && (this.crosshairsShapeY = i.addShape("Line", {
                            className: "tooltip-crosshairs-y",
                            zIndex: 0,
                            visible: !1,
                            attrs: n.mix({
                                x1: 0,
                                y1: s.y,
                                x2: 0,
                                y2: a.y
                            }, e)
                        }))
                    }
                    ,
                    e
                }();
                t.exports = o
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(5).Group
                  , a = function() {
                    var t = e.prototype;
                    function e(t) {
                        n.deepMix(this, this.getDefaultCfg(), t),
                        this._init();
                        var e = this.content
                          , i = this.x
                          , r = this.y;
                        n.isNil(e) || this.updateContent(e),
                        this.updatePosition(i, r)
                    }
                    return t.getDefaultCfg = function() {
                        return {
                            x: 0,
                            y: 0,
                            content: "",
                            textStyle: {
                                fontSize: 12,
                                fill: "#fff",
                                textAlign: "center",
                                textBaseline: "middle"
                            },
                            background: {
                                radius: 1,
                                fill: "rgba(0, 0, 0, 0.65)",
                                padding: [3, 5]
                            },
                            width: 0,
                            height: 0,
                            className: ""
                        }
                    }
                    ,
                    t._init = function() {
                        var t = this.content
                          , e = this.textStyle
                          , i = this.background
                          , a = this.className
                          , s = this.visible
                          , o = new r({
                            className: a,
                            zIndex: 0,
                            visible: s
                        })
                          , l = o.addShape("Text", {
                            className: a + "-text",
                            zIndex: 1,
                            attrs: n.mix({
                                text: t,
                                x: 0,
                                y: 0
                            }, e)
                        })
                          , c = o.addShape("Rect", {
                            className: a + "-bg",
                            zIndex: -1,
                            attrs: n.mix({
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }, i)
                        });
                        o.sort(),
                        this.container = o,
                        this.textShape = l,
                        this.backgroundShape = c
                    }
                    ,
                    t._getBBox = function() {
                        var t = this.textShape
                          , e = this.background
                          , i = t.getBBox()
                          , r = n.parsePadding(e.padding)
                          , a = i.width + r[1] + r[3]
                          , s = i.height + r[0] + r[2];
                        return {
                            x: i.minX - r[3],
                            y: i.minY - r[0],
                            width: a,
                            height: s
                        }
                    }
                    ,
                    t.updateContent = function(t) {
                        var e = this.textShape
                          , i = this.backgroundShape;
                        if (!n.isNil(t)) {
                            n.isObject(t) || (t = {
                                text: t
                            }),
                            e.attr(t);
                            var r = this._getBBox()
                              , a = r.x
                              , s = r.y
                              , o = r.width
                              , l = r.height
                              , c = this.width || o
                              , u = this.height || l;
                            i.attr({
                                x: a,
                                y: s,
                                width: c,
                                height: u
                            }),
                            this._width = c,
                            this._height = u,
                            this.content = t.text
                        }
                    }
                    ,
                    t.updatePosition = function(t, e) {
                        var i = this.container
                          , n = this._getBBox()
                          , r = n.x
                          , a = n.y;
                        i.moveTo(t - r, e - a),
                        this.x = t - r,
                        this.y = e - a
                    }
                    ,
                    t.getWidth = function() {
                        return this._width
                    }
                    ,
                    t.getHeight = function() {
                        return this._height
                    }
                    ,
                    t.show = function() {
                        this.container.show()
                    }
                    ,
                    t.hide = function() {
                        this.container.hide()
                    }
                    ,
                    t.clear = function() {
                        var t = this.container;
                        t.clear(),
                        t.remove(!0),
                        this.container = null,
                        this.textShape = null,
                        this.backgroundShape = null
                    }
                    ,
                    e
                }();
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(12)
                  , a = i(1);
                a.guide = n.deepMix({
                    line: {
                        style: {
                            stroke: "#a3a3a3",
                            lineWidth: 1
                        },
                        top: !0
                    },
                    text: {
                        style: {
                            fill: "#787878",
                            textAlign: "center",
                            textBaseline: "middle"
                        },
                        offsetX: 0,
                        offsetY: 0,
                        top: !0
                    },
                    rect: {
                        style: {
                            fill: "#fafafa"
                        },
                        top: !1
                    },
                    arc: {
                        style: {
                            stroke: "#a3a3a3"
                        },
                        top: !0
                    },
                    html: {
                        offsetX: 0,
                        offsetY: 0,
                        alignX: "center",
                        alignY: "middle"
                    },
                    tag: {
                        top: !0,
                        offsetX: 0,
                        offsetY: 0,
                        side: 4,
                        background: {
                            padding: 5,
                            radius: 2,
                            fill: "#1890FF"
                        },
                        textStyle: {
                            fontSize: 12,
                            fill: "#fff",
                            textAlign: "center",
                            textBaseline: "middle"
                        }
                    },
                    point: {
                        top: !0,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            fill: "#fff",
                            r: 3,
                            lineWidth: 2,
                            stroke: "#1890ff"
                        }
                    }
                }, a.guide || {});
                var s = function() {
                    function t(t) {
                        this.guides = [],
                        this.xScale = null,
                        this.yScales = null,
                        this.guideShapes = [],
                        n.mix(this, t)
                    }
                    var e = t.prototype;
                    return e._toString = function(t) {
                        return n.isFunction(t) && (t = t(this.xScale, this.yScales)),
                        t = t.toString()
                    }
                    ,
                    e._getId = function(t, e) {
                        var i = e.id;
                        if (!i) {
                            var n = e.type;
                            i = "arc" === n || "line" === n || "rect" === n ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position)
                        }
                        return i
                    }
                    ,
                    e.paint = function(t) {
                        var e = this
                          , i = e.chart
                          , r = e.guides
                          , a = e.xScale
                          , s = e.yScales
                          , o = [];
                        n.each(r, function(n, r) {
                            var l;
                            n.xScale = a,
                            n.yScales = s,
                            "regionFilter" === n.type ? n.chart = i : l = n.top ? e.frontPlot : e.backPlot,
                            n.coord = t,
                            n.container = l,
                            n.canvas = i.get("canvas");
                            var c = n.render(t, l);
                            if (c) {
                                var u = e._getId(c, n);
                                [].concat(c).forEach(function(t) {
                                    t._id = t.get("className") + "-" + u,
                                    t.set("index", r),
                                    o.push(t)
                                })
                            }
                        }),
                        e.guideShapes = o
                    }
                    ,
                    e.clear = function() {
                        return this.reset(),
                        this.guides = [],
                        this
                    }
                    ,
                    e.reset = function() {
                        var t = this.guides;
                        n.each(t, function(t) {
                            t.remove()
                        })
                    }
                    ,
                    e._createGuide = function(t, e) {
                        var i = n.upperFirst(t)
                          , s = new r[i](n.deepMix({}, a.guide[t], e));
                        return this.guides.push(s),
                        s
                    }
                    ,
                    e.line = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("line", t)
                    }
                    ,
                    e.text = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("text", t)
                    }
                    ,
                    e.arc = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("arc", t)
                    }
                    ,
                    e.html = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("html", t)
                    }
                    ,
                    e.rect = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("rect", t)
                    }
                    ,
                    e.tag = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("tag", t)
                    }
                    ,
                    e.point = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("point", t)
                    }
                    ,
                    e.regionFilter = function(t) {
                        return void 0 === t && (t = {}),
                        this._createGuide("regionFilter", t)
                    }
                    ,
                    t
                }();
                t.exports = {
                    init: function(t) {
                        var e = new s({
                            frontPlot: t.get("frontPlot").addGroup({
                                zIndex: 20,
                                className: "guideContainer"
                            }),
                            backPlot: t.get("backPlot").addGroup({
                                className: "guideContainer"
                            })
                        });
                        t.set("guideController", e),
                        t.guide = function() {
                            return e
                        }
                    },
                    afterGeomDraw: function(t) {
                        var e = t.get("guideController");
                        if (e.guides.length) {
                            var i = t.getXScale()
                              , n = t.getYScales()
                              , r = t.get("coord");
                            e.xScale = i,
                            e.yScales = n,
                            e.chart = t,
                            e.paint(r)
                        }
                    },
                    clear: function(t) {
                        t.get("guideController").clear()
                    },
                    repaint: function(t) {
                        t.get("guideController").reset()
                    }
                }
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(96)
                  , a = i(1)
                  , s = {
                    itemMarginBottom: 12,
                    itemGap: 10,
                    showTitle: !1,
                    titleStyle: {
                        fontSize: 12,
                        fill: "#808080",
                        textAlign: "start",
                        textBaseline: "top"
                    },
                    nameStyle: {
                        fill: "#808080",
                        fontSize: 12,
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    valueStyle: {
                        fill: "#000000",
                        fontSize: 12,
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    unCheckStyle: {
                        fill: "#bfbfbf"
                    },
                    itemWidth: "auto",
                    wordSpace: 6,
                    selectedMode: "multiple"
                };
                a.legend = n.deepMix({
                    common: s,
                    right: n.mix({
                        position: "right",
                        layout: "vertical"
                    }, s),
                    left: n.mix({
                        position: "left",
                        layout: "vertical"
                    }, s),
                    top: n.mix({
                        position: "top",
                        layout: "horizontal"
                    }, s),
                    bottom: n.mix({
                        position: "bottom",
                        layout: "horizontal"
                    }, s)
                }, a.legend || {});
                var o = function() {
                    function t(t) {
                        this.legendCfg = {},
                        this.enable = !0,
                        this.position = "top",
                        n.mix(this, t);
                        var e = this.chart;
                        this.canvasDom = e.get("canvas").get("el"),
                        this.clear()
                    }
                    var e = t.prototype;
                    return e.addLegend = function(t, e, i) {
                        var n = this.legendCfg
                          , r = t.field
                          , a = n[r];
                        if (!1 === a)
                            return null;
                        if (a && a.custom)
                            this.addCustomLegend(r);
                        else {
                            var s = n.position || this.position;
                            a && a.position && (s = a.position),
                            t.isCategory && this._addCategoryLegend(t, e, s, i)
                        }
                    }
                    ,
                    e.addCustomLegend = function(t) {
                        var e = this.legendCfg;
                        t && e[t] && (e = e[t]);
                        var i = e.position || this.position
                          , s = this.legends;
                        s[i] = s[i] || [];
                        var o = e.items;
                        if (!o)
                            return null;
                        var l = this.container;
                        n.each(o, function(t) {
                            n.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
                                symbol: t.marker || "circle",
                                fill: t.fill,
                                radius: 3
                            },
                            t.checked = !!n.isNil(t.checked) || t.checked,
                            t.name = t.name || t.value
                        });
                        var c = new r(n.deepMix({}, a.legend[i], e, {
                            maxLength: this._getMaxLength(i),
                            items: o,
                            parent: l
                        }));
                        s[i].push(c)
                    }
                    ,
                    e.clear = function() {
                        var t = this.legends;
                        n.each(t, function(t) {
                            n.each(t, function(t) {
                                t.clear()
                            })
                        }),
                        this.legends = {},
                        this.unBindEvents()
                    }
                    ,
                    e._isFiltered = function(t, e, i) {
                        var r = !1;
                        return n.each(e, function(e) {
                            if (r = r || t.getText(e) === t.getText(i))
                                return !1
                        }),
                        r
                    }
                    ,
                    e._getMaxLength = function(t) {
                        var e = this.chart
                          , i = n.parsePadding(e.get("appendPadding"));
                        return "right" === t || "left" === t ? e.get("height") - (i[0] + i[2]) : e.get("width") - (i[1] + i[3])
                    }
                    ,
                    e._addCategoryLegend = function(t, e, i, s) {
                        var o = this
                          , l = o.legendCfg
                          , c = o.legends
                          , u = o.container
                          , h = o.chart
                          , f = t.field;
                        c[i] = c[i] || [];
                        var d = "circle";
                        l[f] && l[f].marker ? d = l[f].marker : l.marker && (d = l.marker),
                        n.each(e, function(e) {
                            n.isPlainObject(d) ? n.mix(e.marker, d) : e.marker.symbol = d,
                            s && (e.checked = o._isFiltered(t, s, e.dataValue))
                        }),
                        h.get("legendItems")[f] = e;
                        var p = n.deepMix({}, a.legend[i], l[f] || l, {
                            maxLength: o._getMaxLength(i),
                            items: e,
                            field: f,
                            filterVals: s,
                            parent: u
                        });
                        p.showTitle && n.deepMix(p, {
                            title: t.alias || t.field
                        });
                        var v = new r(p);
                        return c[i].push(v),
                        v
                    }
                    ,
                    e._alignLegend = function(t, e, i) {
                        var r = this.plotRange
                          , a = r.tl
                          , s = r.bl
                          , o = this.chart
                          , l = t.offsetX || 0
                          , c = t.offsetY || 0
                          , u = o.get("width")
                          , h = o.get("height")
                          , f = n.parsePadding(o.get("appendPadding"))
                          , d = t.getHeight()
                          , p = t.getWidth()
                          , v = 0
                          , g = 0;
                        if ("left" === i || "right" === i) {
                            var m = t.verticalAlign || "middle"
                              , y = Math.abs(a.y - s.y);
                            v = "left" === i ? f[3] : u - p - f[1],
                            g = (y - d) / 2 + a.y,
                            "top" === m ? g = a.y : "bottom" === m && (g = s.y - d),
                            e && (g = e.get("y") - d - 12)
                        } else {
                            var x = t.align || "left";
                            if (v = f[3],
                            "center" === x ? v = u / 2 - p / 2 : "right" === x && (v = u - (p + f[1])),
                            g = "top" === i ? f[0] + Math.abs(t.container.getBBox().minY) : h - d,
                            e) {
                                var b = e.getWidth();
                                v = e.x + b + 12
                            }
                        }
                        "bottom" === i && c > 0 && (c = 0),
                        "right" === i && l > 0 && (l = 0),
                        t.moveTo(v + l, g + c)
                    }
                    ,
                    e.alignLegends = function() {
                        var t = this
                          , e = t.legends;
                        return n.each(e, function(e, i) {
                            n.each(e, function(n, r) {
                                var a = e[r - 1];
                                t._alignLegend(n, a, i)
                            })
                        }),
                        t
                    }
                    ,
                    e.handleEvent = function(t) {
                        var e = this;
                        var i = e.chart
                          , r = n.createEvent(t, i)
                          , a = function(t, i) {
                            var r = null
                              , a = e.legends;
                            return n.each(a, function(e) {
                                n.each(e, function(e) {
                                    var a = e.itemsGroup
                                      , s = e.legendHitBoxes
                                      , o = a.get("children");
                                    if (o.length) {
                                        var l = e.x
                                          , c = e.y;
                                        n.each(s, function(n, a) {
                                            if (t >= n.x + l && t <= n.x + n.width + l && i >= n.y + c && i <= n.height + n.y + c)
                                                return r = {
                                                    clickedItem: o[a],
                                                    clickedLegend: e
                                                },
                                                !1
                                        })
                                    }
                                })
                            }),
                            r
                        }(r.x, r.y);
                        if (a && !1 !== a.clickedLegend.clickable) {
                            var s = a.clickedItem
                              , o = a.clickedLegend;
                            if (o.onClick)
                                t.clickedItem = s,
                                o.onClick(t);
                            else if (!o.custom) {
                                var l = s.get("checked")
                                  , c = s.get("dataValue")
                                  , u = o.filterVals
                                  , h = o.field;
                                "single" === o.selectedMode ? i.filter(h, function(t) {
                                    return t === c
                                }) : (l ? n.Array.remove(u, c) : u.push(c),
                                i.filter(h, function(t) {
                                    return -1 !== u.indexOf(t)
                                })),
                                i.repaint()
                            }
                        }
                    }
                    ,
                    e.bindEvents = function() {
                        var t = this.legendCfg.triggerOn || "touchstart"
                          , e = n.wrapBehavior(this, "handleEvent");
                        n.addEventListener(this.canvasDom, t, e)
                    }
                    ,
                    e.unBindEvents = function() {
                        var t = this.legendCfg.triggerOn || "touchstart"
                          , e = n.getWrapBehavior(this, "handleEvent");
                        n.removeEventListener(this.canvasDom, t, e)
                    }
                    ,
                    t
                }();
                t.exports = {
                    init: function(t) {
                        var e = new o({
                            container: t.get("backPlot"),
                            plotRange: t.get("plotRange"),
                            chart: t
                        });
                        t.set("legendController", e),
                        t.legend = function(t, i) {
                            var r = e.legendCfg;
                            return e.enable = !0,
                            n.isBoolean(t) ? (e.enable = t,
                            r = i || {}) : n.isObject(t) ? r = t : r[t] = i,
                            e.legendCfg = r,
                            this
                        }
                    },
                    beforeGeomDraw: function(t) {
                        var e = t.get("legendController");
                        if (!e.enable)
                            return null;
                        var i = e.legendCfg;
                        if (i && i.custom)
                            e.addCustomLegend();
                        else {
                            var r = t.getLegendItems()
                              , a = t.get("scales")
                              , s = t.get("filters");
                            n.each(r, function(t, i) {
                                var n, r = a[i], o = r.values;
                                n = s && s[i] ? o.filter(s[i]) : o.slice(0),
                                e.addLegend(r, t, n)
                            })
                        }
                        i && !1 !== i.clickable && e.bindEvents();
                        var o = e.legends
                          , l = {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        };
                        n.each(o, function(e, i) {
                            var r = 0;
                            n.each(e, function(t) {
                                var e = t.getWidth()
                                  , n = t.getHeight();
                                "top" === i || "bottom" === i ? (r = Math.max(r, n),
                                t.offsetY > 0 && (r += t.offsetY)) : (r = Math.max(r, e),
                                t.offsetX > 0 && (r += t.offsetX))
                            }),
                            l[i] = r + function(t, e) {
                                var i = 0;
                                switch (e = n.parsePadding(e),
                                t) {
                                case "top":
                                    i = e[0];
                                    break;
                                case "right":
                                    i = e[1];
                                    break;
                                case "bottom":
                                    i = e[2];
                                    break;
                                case "left":
                                    i = e[3]
                                }
                                return i
                            }(i, t.get("appendPadding"))
                        }),
                        t.set("legendRange", l)
                    },
                    afterGeomDraw: function(t) {
                        t.get("legendController").alignLegends()
                    },
                    clearInner: function(t) {
                        t.get("legendController").clear(),
                        t.set("legendRange", null)
                    }
                }
            }
            , function(t, e, i) {
                var n, r = i(0), a = i(25), s = i(125), o = i(126), l = i(97), c = i(128), u = i(129), h = i(18);
                a.prototype.animate = function() {
                    var t = r.mix({}, this.get("attrs"));
                    return new o(this,t,n)
                }
                ,
                h.prototype.animate = function(t) {
                    return this.set("animate", t),
                    this
                }
                ,
                l.Action = c,
                l.defaultCfg = {
                    interval: {
                        enter: function(t) {
                            return t.isPolar && t.transposed ? function(t) {
                                t.set("zIndex", -1),
                                t.get("parent").sort()
                            }
                            : c.fadeIn
                        }
                    },
                    area: {
                        enter: function(t) {
                            return t.isPolar ? null : c.fadeIn
                        }
                    },
                    line: {
                        enter: function(t) {
                            return t.isPolar ? null : c.fadeIn
                        }
                    },
                    path: {
                        enter: function(t) {
                            return t.isPolar ? null : c.fadeIn
                        }
                    }
                };
                var f = {
                    line: function(t) {
                        return t.isPolar ? u.groupScaleInXY : u.groupWaveIn
                    },
                    area: function(t) {
                        return t.isPolar ? u.groupScaleInXY : u.groupWaveIn
                    },
                    path: function(t) {
                        return t.isPolar ? u.groupScaleInXY : u.groupWaveIn
                    },
                    point: function() {
                        return u.shapesScaleInXY
                    },
                    interval: function(t) {
                        var e;
                        return t.isPolar ? (e = u.groupScaleInXY,
                        t.transposed && (e = u.groupWaveIn)) : e = t.transposed ? u.groupScaleInX : u.groupScaleInY,
                        e
                    },
                    schema: function() {
                        return u.groupWaveIn
                    }
                };
                function d(t, e, i) {
                    var n = [];
                    return r.each(t, function(t, a) {
                        var s = t.get("container").get("children")
                          , o = t.get("type")
                          , l = r.isNil(t.get("animateCfg")) ? m(o, e) : t.get("animateCfg");
                        !1 !== l && r.each(s, function(e, s) {
                            e.get("className") === o && (e._id = function(t, e, i) {
                                var n, a = t.get("type"), s = "geom" + i + "-" + a, o = t.getXScale(), l = t.getYScale(), c = o.field || "x", u = l.field || "y", h = e[u];
                                n = o.isIdentity ? o.value : e[c],
                                s += "interval" === a || "schema" === a ? "-" + n : "line" === a || "area" === a || "path" === a ? "-" + a : o.isCategory ? "-" + n : "-" + n + "-" + h;
                                var f = t._getGroupScales();
                                return r.each(f, function(t) {
                                    var i = t.field;
                                    "identity" !== t.type && (s += "-" + e[i])
                                }),
                                s
                            }(t, e.get("origin")._origin, a),
                            e.set("coord", i),
                            e.set("animateCfg", l),
                            e.set("index", s),
                            n.push(e))
                        }),
                        t.set("shapes", s)
                    }),
                    n
                }
                function p(t, e, i, n) {
                    return r.isFunction(n) ? n : r.isString(n) ? l.Action[n] : l.getAnimation(t, e, i)
                }
                function v(t, e, i) {
                    if (!1 === i || r.isObject(i) && !1 === i[e])
                        return !1;
                    var n = l.getAnimateCfg(t, e);
                    return i && i[e] ? r.deepMix({}, n, i[e]) : n
                }
                function g(t, e, i) {
                    var n, a, s = [], o = [];
                    r.each(e, function(e) {
                        var i = t[e._id];
                        i ? (e.set("cacheShape", i),
                        s.push(e),
                        delete t[e._id]) : o.push(e)
                    }),
                    r.each(t, function(t) {
                        var e = t.className
                          , s = t.coord
                          , o = t._id
                          , l = t.attrs
                          , c = t.index
                          , u = t.type;
                        if (!1 === (a = v(e, "leave", t.animateCfg)))
                            return !0;
                        if (n = p(e, s, "leave", a.animation),
                        r.isFunction(n)) {
                            var h = i.addShape(u, {
                                attrs: l,
                                index: c,
                                canvas: i,
                                className: e
                            });
                            h._id = o,
                            n(h, a, s)
                        }
                    }),
                    r.each(s, function(t) {
                        var e = t.get("className");
                        if (!1 === (a = v(e, "update", t.get("animateCfg"))))
                            return !0;
                        var i = t.get("coord")
                          , s = t.get("cacheShape").attrs
                          , o = function(t, e) {
                            var i = {};
                            for (var n in e)
                                r.isNumber(t[n]) && t[n] !== e[n] ? i[n] = e[n] : r.isArray(t[n]) && JSON.stringify(t[n]) !== JSON.stringify(e[n]) && (i[n] = e[n]);
                            return i
                        }(s, t._attrs.attrs);
                        Object.keys(o).length && (n = p(e, i, "update", a.animation),
                        r.isFunction(n) ? n(t, a, i) : (t.attr(s),
                        t.animate().to({
                            attrs: o,
                            duration: a.duration,
                            easing: a.easing,
                            delay: a.delay
                        }).onEnd(function() {
                            t.set("cacheShape", null)
                        })))
                    }),
                    r.each(o, function(t) {
                        var e = t.get("className")
                          , i = t.get("coord");
                        if (!1 === (a = v(e, "enter", t.get("animateCfg"))))
                            return !0;
                        if (n = p(e, i, "enter", a.animation),
                        r.isFunction(n))
                            if ("interval" === e && i.isPolar && i.transposed) {
                                var o = t.get("index")
                                  , l = s[o - 1];
                                n(t, a, l)
                            } else
                                n(t, a, i)
                    })
                }
                function m(t, e) {
                    if (!t)
                        return null;
                    var i = e.get("animate");
                    return t.indexOf("guide-tag") > -1 && (t = "guide-tag"),
                    r.isObject(i) ? i[t] : !1 !== i && null
                }
                t.exports = {
                    afterCanvasInit: function() {
                        (n = new s).play()
                    },
                    beforeCanvasDraw: function(t) {
                        if (!1 !== t.get("animate")) {
                            var e = t.get("isUpdate")
                              , i = t.get("canvas")
                              , n = t.get("coord")
                              , a = t.get("geoms")
                              , s = i.get("caches") || [];
                            0 === s.length && (e = !1);
                            var o = d(a, t, n)
                              , c = t.get("axisController")
                              , h = c.frontPlot
                              , y = c.backPlot
                              , x = h.get("children").concat(y.get("children"))
                              , b = [];
                            t.get("guideController") && (b = t.get("guideController").guideShapes);
                            var S, _, C = [];
                            if (x.concat(b).forEach(function(e) {
                                var i = m(e.get("className"), t);
                                e.set("coord", n),
                                e.set("animateCfg", i),
                                C.push(e),
                                o.push(e)
                            }),
                            i.set("caches", function(t) {
                                for (var e = {}, i = 0, n = t.length; i < n; i++) {
                                    var a = t[i];
                                    if (a._id && !a.isClip) {
                                        var s = a._id;
                                        e[s] = {
                                            _id: s,
                                            type: a.get("type"),
                                            attrs: r.mix({}, a._attrs.attrs),
                                            className: a.get("className"),
                                            geomType: a.get("className"),
                                            index: a.get("index"),
                                            coord: a.get("coord"),
                                            animateCfg: a.get("animateCfg")
                                        }
                                    }
                                }
                                return e
                            }(o)),
                            e)
                                g(s, o, i);
                            else
                                r.each(a, function(e) {
                                    var i = e.get("type")
                                      , a = r.isNil(e.get("animateCfg")) ? m(i, t) : e.get("animateCfg");
                                    if (!1 !== a)
                                        if (S = v(i, "appear", a),
                                        _ = p(i, n, "appear", S.animation),
                                        r.isFunction(_)) {
                                            var s = e.get("shapes");
                                            r.each(s, function(t) {
                                                _(t, S, n)
                                            })
                                        } else if (f[i]) {
                                            _ = u[S.animation] || f[i](n);
                                            var o = e.getYScale()
                                              , l = n.convertPoint({
                                                x: 0,
                                                y: o.scale(e.getYMinValue())
                                            })
                                              , c = e.get("container");
                                            _ && _(c, S, n, l)
                                        }
                                }),
                                r.each(C, function(t) {
                                    var e = t.get("animateCfg")
                                      , i = t.get("className");
                                    if (e && e.appear) {
                                        var a = l.getAnimateCfg(i, "appear")
                                          , s = r.deepMix({}, a, e.appear)
                                          , o = p(i, n, "appear", s.animation);
                                        r.isFunction(o) && o(t, s, n)
                                    }
                                })
                        }
                    },
                    afterCanvasDestroyed: function() {
                        n.stop()
                    }
                }
            }
            , function(t, e, i) {
                var n = i(37).requestAnimationFrame
                  , r = "object" == typeof performance && performance.now ? performance : Date
                  , a = function() {
                    function t() {
                        this.anims = [],
                        this.time = null,
                        this.playing = !1,
                        this.canvas = []
                    }
                    var e = t.prototype;
                    return e.play = function() {
                        var t = this;
                        t.time = r.now(),
                        t.playing = !0,
                        n(function e() {
                            t.playing && (n(e),
                            t.update())
                        })
                    }
                    ,
                    e.stop = function() {
                        this.playing = !1,
                        this.time = null,
                        this.canvas = []
                    }
                    ,
                    e.update = function() {
                        var t = r.now();
                        this.canvas = [];
                        for (var e = 0; e < this.anims.length; e++) {
                            var i = this.anims[e];
                            if (!(t < i.startTime || i.hasEnded)) {
                                var n = i.shape;
                                if (n.get("destroyed"))
                                    this.anims.splice(e, 1),
                                    e--;
                                else {
                                    var a = i.startState
                                      , s = i.endState
                                      , o = i.interpolate
                                      , l = i.duration;
                                    t >= i.startTime && !i.hasStarted && (i.hasStarted = !0,
                                    i.onStart && i.onStart());
                                    var c = (t - i.startTime) / l;
                                    if (c = Math.max(0, Math.min(c, 1)),
                                    c = i.easing(c),
                                    i.onFrame)
                                        i.onFrame(c);
                                    else
                                        for (var u in o) {
                                            var h = (0,
                                            o[u])(c)
                                              , f = void 0;
                                            if ("points" === u) {
                                                f = [];
                                                for (var d = Math.max(a.points.length, s.points.length), p = 0; p < d; p += 2)
                                                    f.push({
                                                        x: h[p],
                                                        y: h[p + 1]
                                                    })
                                            } else
                                                f = h;
                                            n._attrs.attrs[u] = f,
                                            n._attrs.bbox = null
                                        }
                                    var v = n.get("canvas");
                                    -1 === this.canvas.indexOf(v) && this.canvas.push(v),
                                    i.onUpdate && i.onUpdate(c),
                                    t >= i.endTime && !i.hasEnded && (i.hasEnded = !0,
                                    i.onEnd && i.onEnd()),
                                    1 === c && (this.anims.splice(e, 1),
                                    e--)
                                }
                            }
                        }
                        this.canvas.map(function(t) {
                            return t.draw(),
                            t
                        }),
                        this.time = r.now()
                    }
                    ,
                    t
                }();
                t.exports = a
            }
            , function(t, e, i) {
                var n = i(127);
                function r(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++)
                        t[i] && (e.push(t[i].x),
                        e.push(t[i].y));
                    return e
                }
                function a(t, e) {
                    return e -= t = +t,
                    function(i) {
                        return t + e * i
                    }
                }
                function s(t, e) {
                    var i, n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, s = new Array(r), o = new Array(n);
                    for (i = 0; i < r; ++i)
                        s[i] = a(t[i], e[i]);
                    for (; i < n; ++i)
                        o[i] = e[i];
                    return function(t) {
                        for (i = 0; i < r; ++i)
                            o[i] = s[i](t);
                        return o
                    }
                }
                var o = function() {
                    function t(t, e, i) {
                        this.hasStarted = !1,
                        this.hasEnded = !1,
                        this.shape = t,
                        this.source = e,
                        this.timeline = i,
                        this.animate = null
                    }
                    var e = t.prototype;
                    return e.to = function(t) {
                        void 0 === t && (t = {});
                        var e, i = t.delay || 0, o = t.attrs || {}, l = t.duration || 1e3;
                        e = "function" == typeof t.easing ? t.easing : n[t.easing] || n.linear;
                        var c = {
                            shape: this.shape,
                            startTime: this.timeline.time + i,
                            duration: l,
                            easing: e
                        }
                          , u = {};
                        for (var h in o) {
                            var f = this.source[h]
                              , d = o[h];
                            "points" === h ? (f = r(f),
                            d = r(d),
                            u.points = s(f, d),
                            this.source.points = f,
                            o.points = d) : "matrix" === h ? u.matrix = s(f, d) : u[h] = a(f, d)
                        }
                        return c.interpolate = u,
                        c.startState = this.source,
                        c.endState = o,
                        c.endTime = c.startTime + l,
                        this.timeline.anims.push(c),
                        this.animate = c,
                        this
                    }
                    ,
                    e.onFrame = function(t) {
                        return this.animate && (this.animate.onFrame = function(e) {
                            t(e)
                        }
                        ),
                        this
                    }
                    ,
                    e.onStart = function(t) {
                        return this.animate && (this.animate.onStart = function() {
                            t()
                        }
                        ),
                        this
                    }
                    ,
                    e.onUpdate = function(t) {
                        return this.animate && (this.animate.onUpdate = function(e) {
                            t(e)
                        }
                        ),
                        this
                    }
                    ,
                    e.onEnd = function(t) {
                        return this.animate && (this.animate.onEnd = function() {
                            t()
                        }
                        ),
                        this
                    }
                    ,
                    t
                }();
                t.exports = o
            }
            , function(t, e) {
                var i = {
                    linear: function(t) {
                        return t
                    },
                    quadraticIn: function(t) {
                        return t * t
                    },
                    quadraticOut: function(t) {
                        return t * (2 - t)
                    },
                    quadraticInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    cubicIn: function(t) {
                        return t * t * t
                    },
                    cubicOut: function(t) {
                        return --t * t * t + 1
                    },
                    cubicInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    elasticIn: function(t) {
                        var e, i = .1, n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                        !i || i < 1 ? (i = 1,
                        e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i),
                        -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                    },
                    elasticOut: function(t) {
                        var e, i = .1, n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                        !i || i < 1 ? (i = 1,
                        e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i),
                        i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                    },
                    elasticInOut: function(t) {
                        var e, i = .1, n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                        !i || i < 1 ? (i = 1,
                        e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i),
                        (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    backIn: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    backOut: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    backInOut: function(t) {
                        var e = 2.5949095;
                        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                    },
                    bounceIn: function(t) {
                        return 1 - i.bounceOut(1 - t)
                    },
                    bounceOut: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    bounceInOut: function(t) {
                        return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
                    }
                };
                t.exports = i
            }
            , function(t, e, i) {
                var n = i(0)
                  , r = i(98);
                t.exports = {
                    fadeIn: function(t, e) {
                        var i = n.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity")
                          , a = n.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
                        t.attr("fillOpacity", 0),
                        t.attr("strokeOpacity", 0);
                        var s = {
                            fillOpacity: i,
                            strokeOpacity: a
                        };
                        r.doAnimation(t, s, e)
                    }
                }
            }
            , function(t, e, i) {
                var n = i(98)
                  , r = i(26)
                  , a = i(5).Shape;
                function s(t, e, i, r, s) {
                    var o, l, c = n.getCoordInfo(i), u = c.start, h = c.end, f = c.width, d = c.height, p = new a.Rect({
                        attrs: {
                            x: u.x,
                            y: h.y,
                            width: f,
                            height: d
                        }
                    });
                    "y" === s ? (o = u.x + f / 2,
                    l = r.y < u.y ? r.y : u.y) : "x" === s ? (o = r.x > u.x ? r.x : u.x,
                    l = u.y + d / 2) : "xy" === s && (i.isPolar ? (o = i.center.x,
                    l = i.center.y) : (o = (u.x + h.x) / 2,
                    l = (u.y + h.y) / 2));
                    var v = n.getScaledMatrix(p, [o, l], s);
                    p.isClip = !0,
                    p.endState = {
                        matrix: v
                    },
                    p.set("canvas", t.get("canvas")),
                    t.attr("clip", p);
                    n.doAnimation(p, p.endState, e, function() {
                        t.attr("clip", null),
                        p.remove(!0)
                    })
                }
                function o(t, e, i) {
                    for (var r, a, s, o = t.get("children"), l = 0, c = o.length; l < c; l++) {
                        var u = o[l]
                          , h = u.getBBox();
                        r = (h.minX + h.maxX) / 2,
                        a = (h.minY + h.maxY) / 2,
                        s = n.getScaledMatrix(u, [r, a], i),
                        n.doAnimation(u, {
                            matrix: s
                        }, e)
                    }
                }
                t.exports = {
                    groupWaveIn: function(t, e, i) {
                        var a = r.getClip(i);
                        a.set("canvas", t.get("canvas")),
                        t.attr("clip", a);
                        var s = {};
                        if (i.isPolar) {
                            var o = i.startAngle
                              , l = i.endAngle;
                            s.endAngle = l,
                            a.attr("endAngle", o)
                        } else {
                            var c = i.start
                              , u = i.end
                              , h = Math.abs(c.x - u.x)
                              , f = Math.abs(c.y - u.y);
                            i.isTransposed ? (a.attr("height", 0),
                            s.height = f) : (a.attr("width", 0),
                            s.width = h)
                        }
                        n.doAnimation(a, s, e, function() {
                            t.attr("clip", null),
                            a.remove(!0)
                        })
                    },
                    groupScaleInX: function(t, e, i, n) {
                        s(t, e, i, n, "x")
                    },
                    groupScaleInY: function(t, e, i, n) {
                        s(t, e, i, n, "y")
                    },
                    groupScaleInXY: function(t, e, i, n) {
                        s(t, e, i, n, "xy")
                    },
                    shapesScaleInX: function(t, e) {
                        o(t, e, "x")
                    },
                    shapesScaleInY: function(t, e) {
                        o(t, e, "y")
                    },
                    shapesScaleInXY: function(t, e) {
                        o(t, e, "xy")
                    }
                }
            }
            , , , , , function(t, e, i) {
                var n = i(42);
                i(100),
                i(84),
                i(93),
                i(109),
                i(110),
                i(113),
                i(114),
                i(115),
                i(116),
                i(117),
                i(118);
                var r = i(119)
                  , a = i(122)
                  , s = i(123)
                  , o = i(124);
                n.Animate = i(97),
                n.Chart.plugins.register([r, s, a, o]),
                t.exports = n
            }
            ])
        }
        ,
        t.exports = n()
    },
    "5/Sn": function(t, e) {},
    "6atI": function(t, e) {},
    "7Doy": function(t, e, i) {
        var n = i("EqjI")
          , r = i("7UMu")
          , a = i("dSzd")("species");
        t.exports = function(t) {
            var e;
            return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0),
            n(e) && null === (e = e[a]) && (e = void 0)),
            void 0 === e ? Array : e
        }
    },
    "7YKo": function(t, e) {},
    "84kG": function(t, e) {},
    "9Bbf": function(t, e, i) {
        "use strict";
        var n = i("kM2E");
        t.exports = function(t) {
            n(n.S, t, {
                of: function() {
                    for (var t = arguments.length, e = new Array(t); t--; )
                        e[t] = arguments[t];
                    return new this(e)
                }
            })
        }
    },
    "9C8M": function(t, e, i) {
        "use strict";
        var n = i("evD5").f
          , r = i("Yobk")
          , a = i("xH/j")
          , s = i("+ZMJ")
          , o = i("2KxR")
          , l = i("NWt+")
          , c = i("vIB/")
          , u = i("EGZi")
          , h = i("bRrM")
          , f = i("+E39")
          , d = i("06OY").fastKey
          , p = i("LIJb")
          , v = f ? "_s" : "size"
          , g = function(t, e) {
            var i, n = d(e);
            if ("F" !== n)
                return t._i[n];
            for (i = t._f; i; i = i.n)
                if (i.k == e)
                    return i
        };
        t.exports = {
            getConstructor: function(t, e, i, c) {
                var u = t(function(t, n) {
                    o(t, u, e, "_i"),
                    t._t = e,
                    t._i = r(null),
                    t._f = void 0,
                    t._l = void 0,
                    t[v] = 0,
                    void 0 != n && l(n, i, t[c], t)
                });
                return a(u.prototype, {
                    clear: function() {
                        for (var t = p(this, e), i = t._i, n = t._f; n; n = n.n)
                            n.r = !0,
                            n.p && (n.p = n.p.n = void 0),
                            delete i[n.i];
                        t._f = t._l = void 0,
                        t[v] = 0
                    },
                    delete: function(t) {
                        var i = p(this, e)
                          , n = g(i, t);
                        if (n) {
                            var r = n.n
                              , a = n.p;
                            delete i._i[n.i],
                            n.r = !0,
                            a && (a.n = r),
                            r && (r.p = a),
                            i._f == n && (i._f = r),
                            i._l == n && (i._l = a),
                            i[v]--
                        }
                        return !!n
                    },
                    forEach: function(t) {
                        p(this, e);
                        for (var i, n = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); i = i ? i.n : this._f; )
                            for (n(i.v, i.k, this); i && i.r; )
                                i = i.p
                    },
                    has: function(t) {
                        return !!g(p(this, e), t)
                    }
                }),
                f && n(u.prototype, "size", {
                    get: function() {
                        return p(this, e)[v]
                    }
                }),
                u
            },
            def: function(t, e, i) {
                var n, r, a = g(t, e);
                return a ? a.v = i : (t._l = a = {
                    i: r = d(e, !0),
                    k: e,
                    v: i,
                    p: n = t._l,
                    n: void 0,
                    r: !1
                },
                t._f || (t._f = a),
                n && (n.n = a),
                t[v]++,
                "F" !== r && (t._i[r] = a)),
                t
            },
            getEntry: g,
            setStrong: function(t, e, i) {
                c(t, e, function(t, i) {
                    this._t = p(t, e),
                    this._k = i,
                    this._l = void 0
                }, function() {
                    for (var t = this._k, e = this._l; e && e.r; )
                        e = e.p;
                    return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0,
                    u(1))
                }, i ? "entries" : "values", !i, !0),
                h(e)
            }
        }
    },
    "9LGi": function(t, e) {},
    "9RkD": function(t, e, i) {
        t.exports = i.p + "static/img/composition-banner.24153ed.png"
    },
    ALrJ: function(t, e, i) {
        var n = i("+ZMJ")
          , r = i("MU5D")
          , a = i("sB3e")
          , s = i("QRG4")
          , o = i("oeOm");
        t.exports = function(t, e) {
            var i = 1 == t
              , l = 2 == t
              , c = 3 == t
              , u = 4 == t
              , h = 6 == t
              , f = 5 == t || h
              , d = e || o;
            return function(e, o, p) {
                for (var v, g, m = a(e), y = r(m), x = n(o, p, 3), b = s(y.length), S = 0, _ = i ? d(e, b) : l ? d(e, 0) : void 0; b > S; S++)
                    if ((f || S in y) && (g = x(v = y[S], S, m),
                    t))
                        if (i)
                            _[S] = g;
                        else if (g)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return S;
                            case 2:
                                _.push(v)
                            }
                        else if (u)
                            return !1;
                return h ? -1 : c || u ? u : _
            }
        }
    },
    Cdx3: function(t, e, i) {
        var n = i("sB3e")
          , r = i("lktj");
        i("uqUo")("keys", function() {
            return function(t) {
                return r(n(t))
            }
        })
    },
    Cfmh: function(t, e) {},
    GXEp: function(t, e) {},
    Gqrl: function(t, e) {},
    H8dH: function(t, e, i) {
        "use strict";
        e.__esModule = !0,
        e.default = function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300
              , n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!t || !e)
                throw new Error("instance & callback is required");
            var r = !1
              , a = function() {
                r || (r = !0,
                e && e.apply(null, arguments))
            };
            n ? t.$once("after-leave", a) : t.$on("after-leave", a),
            setTimeout(function() {
                a()
            }, i + 100)
        }
    },
    HpRW: function(t, e, i) {
        "use strict";
        var n = i("kM2E")
          , r = i("lOnJ")
          , a = i("+ZMJ")
          , s = i("NWt+");
        t.exports = function(t) {
            n(n.S, t, {
                from: function(t) {
                    var e, i, n, o, l = arguments[1];
                    return r(this),
                    (e = void 0 !== l) && r(l),
                    void 0 == t ? new this : (i = [],
                    e ? (n = 0,
                    o = a(l, arguments[2], 2),
                    s(t, !1, function(t) {
                        i.push(o(t, n++))
                    })) : s(t, !1, i.push, i),
                    new this(i))
                }
            })
        }
    },
    KTGR: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAYAAACWJGMLAAAIB0lEQVRoQ92afYwcZR3Hv7+Zndm7tgSEtJVWCLShkrbIXayA9Ha2JxKai9zdzpUjQAUbI4VCLFRtUlOQWE2r1siLYlFCCNWq693snafYYOnezl2PgkDxlMQUEl8LalWapnfsPvPyM7P3wt3t7Mvs7Fm95899fi/fz/N75pnneXYIc7DRHGTCfw0qkjaaJBlbwNAALARwEgTTdfC43awP1nJwZx8qnY5EpVOPMOFuMBfmI2JifDfnnrcVzc12LeBmHSqaSX2HwVvKiSXQ47l44p5ydpX0zyrU2JQj07dCM9URseuwVoupOKtQqpk6AOZbKhndvA3hR0LTb63Yvojh7EJljL8CWBpA5AkR1z8QwN7XdLahcgDUykVSTsQTdZXb+1vONtQcrNRcfKbm5Ornzfg5957KP8ZzcUcxsT6NT8UtYJ6y9yPTdfj/cO8Xdn2uwn9Wl/Qq9NTEZXahDvUujqjcILHbCFADiBsBXATguCRHtmXXth6uCcWMILWBYlD0cGoZK2gAcyMIDQA1gnlJcdGcJfCHcvENb9QarGqo+qG+pY7j3Muuey2AKwk4N7g4ekDEE18J7lfaoyqo+kzPRTbcXxOwOKSgncId/lpd5MqmbCzRXyyWkulqBOQ7AMgc4QP2Wv2FUnmrglJNYz8YG0MC2QR3pUvyejDvkhFpzMZb/zAtJjOpA8ZOMB4CSBrrIxtEtwitvatY/sBQ6lDf5bCs33mjFgaKgUctN7tLkeqOE/A+AC+J+SebsGazlY/7q+S5qhp5BkCrT543RFxfUTuoTOrHAN8cEuik5dKKqMS7GbhrMhZJ3xBa+3bV7FkJdlMAignPibhe9IgSqFLqEWM1bPwGwPhUmIpGIwweBvNrkOgYAToY6/3gmXAnQX4RrvMqaErFCS7Ae5npbgLOKTZwTHTI0hLX16RSaqa7C6AOn2CjimsvH2nu/JvXNzZFxTBASoEt0Ssi1n6VYqYOEdBcRcVPSIjECp6/KYEqrpSSTjWQzK+AC6tEhL05Tf/CRFzVTB0E8w0+gtkljtlaxxE1Y/QWeV6KchJhMOfYN2F88EJXSjVTPWBumxmIgTMW2cugdZ7MV8k02sDo8U1I9AOhJT6Z7xs6eL5qjb42vsMoWzACfzs3/5/bJheSEh4VVUpJd60hSXopf99T2PaIuL4j//Ozz0bVBdnXwVjuB6/I8gdHm9remuiLDPbEJIcPAxwpofFdlmizFUvsL0s+blARlJpJ/QLglgKhRKctwcvwcf1fY1Xq+SLY/WqR5DtEXN8zs081Uw+A+ctFfP7IcHUrvuFYpUCeXVkoxUxdRcDRIlfGu4SWeNAL5G2bbMv6PQELCgXwm2KkfjVaWrzbpemNWYoOpJ5jxnUzep4TFm6dGLDaQmWMhwnY6jOdTlkuXYrmxKnxZ+kpMDb5JScJN+Zi+s+LCnu5b170jPWIS0gQaBTgJ4SW2A0iNwjMhG35SmVSewn8uYLghC8JTR+bNsykmKnT/lXKT4cnciOj29Gy8XQ1IoP6lIfq7/4IEb04faryn0W0/gpc0zIpUjWNETDmlRDwF5LkO3OxtoNBRQa1LwuVn1r9xk0gPAxgERMdJUm+SzS1vj41WUW3RkQM5meEpN6P2CfeCSq2UvuKoCaDJZMyOjudmcGj/ca2HNvfU2XlMTB/qoLkb0vMt2XXdaQrsA1sEgzKL/xQsl61lRGAf8tQNklwL2R29gEoc9HPWQnKylLbncA04w6hoaJH+y7jnHU8H4/gHRt2C0d5LErWbiZ8uuRrY3xXXq34Yn6hoSIZ42MS8Pz0BHwMJG+UCEtc1/0+gEv8BdCbIp647H8OSskYdxDwtI+wpIjrNyOdXKBIkT0EeH+RFg5iBFeItbp36KxZC10pNdO9E6BdMxWxRN+0YonPT/yuZoyXAXy4QDnzg2JdR4F/GMLQUErG2EfA5gIoovstLeG9BvKtGDyAV0VcL4QNQRUOarD3HNVxTYAbCjQQbRBaonsSavBnq+DYftOMJZsvzV7X8acQHNNcq4aKDhgrmCkF5pV+YpjoaktLeMeVyaZmDG+VLFgYiLE1t05/9KxCRQd7WlzH/SEB5xUR4ghl3iJcu/7f06BM4+tgTJ6QJ/qY0W+t06s52vumD1YpBqkDPTvAzq737uF84hL1CC2RmNkTOWJ8VLIx5ONhizq8H1ePncvCtsqh0skFqiQ/XeTiZVLH2D0C3ThxJJkm0LucNFMnAFzos7BssrSE36shMGNFUNEjqeVss3fvsLpUBgL25eZf/FmsWTN2IenTogPGPnYLV0sQeoWmtwcm8Jso5YLU9fc2O5LTRYzzS9jmmKR7La39yXLxomljPUv4pY/duyJ7ZiFuuH2kXIxy/SUrVT/Yd7HtWMNl/tF4i+VIh9XUerRcsnx/MqkqiyP/KBKzQ8R1o6I4JYxKQkXN7vuY6VvF/ekFQW4HtI63gwhRTeMAGIXfLBHtF1ri9iCx/GxLQilm6j5i9oUiwpO5C+x7sKpTBBWhZlKdAP+kYLEA3rH+bi/0O7MFyVESat5g7xLbcY8DPP+95Q2CIW+1tDbvzFRd83YituN9mRmdGUCK8CXZteF2F2VXPyXdfQ1J+Sm4ioFjkKTtVqzdu7MI1dSM4W2h9KlB2KuUO7wIzQ+F+kKzLFQo5SWc1XTX5SxJJo19T+sdSlwm+TNWrO2psDnPGpQnvP755FJHlm+DJF3AjvNTq3mDdzwJ3c4qVGj1RQL8B6dpFGdwPIfDAAAAAElFTkSuQmCC"
    },
    KgVh: function(t, e) {},
    "KqW/": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAYAAACWJGMLAAAIDUlEQVRoQ+1aa2wc1RX+zt2Z2XVCiUOgoQ2Vyo82bQMVtHm0hN2xIY8SQHjHITQgEahoAi4BVSS0Eqg4rVoTqiSClJAXD6E0paaejZ02lDZhPWsHQh+pCipK6UOqSqBJCKTKyzuzc081TmPZ63nt2nEM4v6z73fPOd89Z86599wlfAgHfQg54SNSHxSvjlpPKXnzSpFAExgZABcAOARCQbpYV6o3usM2ePSRyueVpDjyKBPuAvNg+4iYGE8UZe29qK8v+ZEbdaSSVu5xBjdFhTqB1hX17LdGPalTIUcFXw+VW0/E0uWMXyiOKk9phdxWMC+M8lLfPOFndsa4eRDf2AJGAKhZ5lsAJlWgar+tGxedeVLbt4/RxpXmAGhgxtcIPAZE7Qrk/Scyje+EGaxZZhGAFp8UFW09mzozpLp+OV6Fcx1JzgKYC2BMuSIGjoBwv5M2NoPAfoafdU/VvLx9knScBknUQMw6ADXODjOhU7BcXNTn/60cf/a+qRefHaulztkAwkIwRBwiPpiTgFhhy3Gr+teas5b9kl3mepZYUiWZsmX0JyZ5h5Np3Ht64qzUKdUy3yNg/PCQ6pVSAtFqW3GaccWCk6jgRKGJ9z/DwE8ImAbCm0ImlvfU3ZCvuE6plvkfAiaGkWLgKIF2MMmdxLQYntLIwX8XrCz2jPKg/w/FJjD3O/tRQbrce/bTrG2XMqRVtsEnSODyikklLXMZAz/2yW4HBaEDLHLF49ouzJvnpWegtTWR/IRyL0v6PsBjI7gxCC12xnggDJfK5z4tBe8G8Ekf3IMVk/KEqF1tTSRxO0AaM3YxRK6k37AbRDLImJTVcbFL7kZinhXlNAlcXdKNl3xxhdYLNFa8U/pnA+RURyrKqLB5tZC7DcyrCDgvGEcrbD3bPGi+u/1jmitfAnhqwNoeUuiSqjw1FFLIt16oCeUFAJcFyWFBS5x0dqPa2TGNyL3TFieW4Tz1uHpY/VWgpwkSoEV2JrtlREklu9snsytfAPjikI3ZZ9eOnar8t+cyYncHAeeC6N8A3gCzd1rxHcS4r1hnrPYmR4yUUmibSUztBEwIIbTXlqVrU0L5gsvcQURRieW0qJW2bnz39B8jQkqzTAPAFgA1gYQIv7bd0o1JUtNM3BaK7S+E8LSdMb4x8F9D+kCiF6uF3FJiXgMgEYgW9JRdql2CQ4eEdqHyChhfipbcG2cddrpkgBa4I0OKmbSu9pVguTzYO8SQ/AO7znioD5N/OqWKcQ8TcE/Y50GE7qJSmtN7CikbZyb8/tKqaYfVZyJusSUG3eno2Sf9SCe722ez6z4TUGBftyVlUJ894rd2+En9oXVc8riSY6A+MGUDxwTETUW9YUdomO00J2gqbwCosR/uDbtYnI05C98OzISxYjcuqNcIygN8aQihAxB0rZPO/jGuWKVg6gLQmWm/03P0Ocy99XjY2mH1VLLT3MSEO0IUvikEX9OTbvxnXELV4IaVlFbI7QPz5BAvHRSCHinWKE9g6vUnqjE4zpphJaVa5i4CropSzIwDEFjpKKX1ftkran3U/PCQ2mlOwCzjcKpg6hL4DTh2R+gdBq10ZO0G1Nf3RBkbd37IpFTLXARgLQE/so+n1qjnnJwCiJVxrhj9jHybiVqcY8lNffewuAx8cEMiVZNvu6gk6HUCantlE/4B4D47Y7QrndvSJGQzcXQ49rPrLRaixak5sAlTlzjV8qqeFIPUgvkiAbPLlTPot07P0ayXer10TIwVBHhttFiDgK5iz7FrolL3sNepZCG3lJkf8xVMeM7OGAN64oplXkWgZgKnYzFj/o5d1/hILGwZqCpPaZb5eQBe8Rx06mbgoCPVKai//l0/g5R82yxKkBeWMyMMNm3d6H+SiM2vclKtrZo2MbEHoMv9vSRutDMNv4iyQLFycwR4bUiv4Ye2bjwYJcdvvjJSe3acqxV7PENuDQi75+2MsSCWIV7/XRb/SiDv6XPA8PrujoLJmGkcjCWrqvBjJrVr2yJIfpjIv+fHwCGHUlOQmXcojiHJQm4dM9/lh2Xgbkc3Ho8jpypPqbs7plHJWQvQjHAl/HVbb/x5HEPUrtyXSfKrARfHvfaB0nQsGHjxiyP3NCY4/HabH9dKaAFwGxDxEEDUZmey82Mpbm4WWv0XXwEwfRCeINnlmU59455YsgJAg0l5vezEe3dLpof6imqYBsK/7ASmx41/1cotJnh3pMGDGJuLdcY3h0LIWzuAVKqQu1qCHwVjSgzBDKItdoKXxSWE/NbzVZHa59dRYuCwk8JkzDAOx9AdCuklVWNt+5QLd03ZDTNs4V4JsbSkN7xciQHJgrmJ2f++xaAljp7dWIm8ICx5DUbput7rQehLhieAgXch6AHnyj9vBjUH9s39lKndbV8hSbsDHup+Z+df+yqaK5MZSEormFvAuCV8h6hEhPVFUr+H9HXvV7ybra0JbWLi9wEF22VBMyq53kfpJ81q85QFNdw971hE8h47M/+1KGFB85q17WZA/tS/pgT/cqVafaRZuScBHtDhPCXM61/TcltviFV7wgxQO83VRPh2Oab3nChOfg7pWyr3fohCQn77+VrC6eyX8bwb6Cq751hLtUf/cn1BJ3omut3JZL3e3rCOUyn9VG2ayxDjE4qTP3nFgv3DqqX3Xcn1MuUlfXIJz9tp46ag31QMRX9lB9qhaMrnarWEbGIWkyDoVac0bmvQT9uGoqb3wxmqgNG4/iNSo9Er/mXig2JpBXb+D/IhGoNB6t74AAAAAElFTkSuQmCC"
    },
    LIJb: function(t, e, i) {
        var n = i("EqjI");
        t.exports = function(t, e) {
            if (!n(t) || t._t !== e)
                throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        }
    },
    LKgA: function(t, e) {},
    Oll4: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAYAAACWJGMLAAAHaUlEQVRoQ92af4wcZRnHv8/Mzuz1ejkKRijSnDFKgrGWkChJubuZXSkUm9IyU7pJSyMSSKgVVFABjT9QQxQlocVQJIEgUDE93dk7rq3yo+zt3CkkvSCnVP/wB2LRq3CB1vbg5p3d9zFz7erd7uzdzuwuLff++z7v+3w/7/PMM+88u4QFOKgZTIm806Oo2AaGAeD9AN4AwZUl7Cym7ZFm+IiyR2NQ+XwiqRzZwYTPgbl6LyImxgOeXPJFpNPFKMIasW0IKlnI3c/gbfMJINBOz7Q+P59ds+ZjQ51IOXJDI1SpjohliY13KxVjQ+lu7gkwb6r7dAk/F4a9uW77BgzjQxWc1wCcF8H3P4VpL4tgH9u0ESgPgF6/Z/KEabXVbx/fshGoBRiphfhMLcjqF2T8gntPTT/GC/FGUa5PJ1NxG5hn3P3IlSV+D979Kqsu36kk3QtXSaIuUorPi56rD8YvzPFXxi7pVS7zfR2aquWIedXJOQbRHcKwfhhfXryVzYF66rHFybaOfYzpT48Zg6UilQ9Ppa2/x5MXb1XjUIOD7Vqnv4eAdJgEBm/1zQ0PzievbSiblkQ/APBRIrzIJdwk0vbL860Lm28MKp9v09QjgzNSrsoHgx72TeuGucRpbu5mknwvCGrZjoE3fFE8H5dljkYFiw/1531JfdwbAPPqOZ0yXhYp++OhNtynJkcSO1gi/FtLUa4RvVc98e5AHezT9QktB/CaOhyWhCwuQTpzfJbtC7s6ddG+G4wr5thjizDtn9XhY5ZJ9EiNjmr65KEswFfW60wSUqpUOiUXx/301aP4TfaDepH2AFg+xx6Hhdb+MVxyxZv1+inbRYbS3dzdYL4tiiMi3MZQ9kLKF0HKPQx5AwHn1NqDgdeRSKz1u9cdiOInNpRWcCYIeF8NZ8GpnlU1R/ilMOyNWiF3mMA1YU6u+6OC4topM/NKHKBgTeRIaQXnLQKWhDj8FYG2M/ipkLlDwrS79EJuN8CZOcQ+LUQxE6fizdwzOpSbyxNzqlIYA9f7stinK4kjwP9Lc9lOyOS5SfJtJnl/6LuF6AGvNPYFpO9suJUWGarWM8XAg75pb9ULzu8BVJVwAq9nUv8ClpX3wRIr9GW/19oRN90q10WHKjg2gGyIgJeEaV+kFbIPEej6kPm7hGl/Q3OdfxPj7GCegWMKqZs8Y/3eZgHFeqbw28HzdN8P+hOVoygWa2dok8UtBK66FhFo2DMtQ3edPjA2gvAqoK4Txvogsk0dkSMVeNdrtMekqhjk8zFS+HdhKplwq8oYY1Yu8LxFj2L16smm0pzcLC5UkH5BGs4aBOWrnnxpu6asCCpkR1g0FUX59FTvVc+2Aqa8Z1yo2wEEN+pKql8Iw84k3dyPmfmm0GgBbyoJutjrtv7aKrBYUInhXEqRnK8SxTgoUvZyjA62628XR8B8UajwwC6hrkTP+mOtAIsFFYjWJv1xAjpn5x/tEYZ14k44MtilSf9AudKFiB8QhmWBiJsNFg/qRLGoTMF3JOPSYsp+viwyUcgaCtEz4BrtaabviZT1rdMGaroKDmUtKJRhxlEidWdYedZcZ2vww1sN4UEfY6MwrLD3XmzW2JGqy+No3xn4ROZosuD8hIEbaxSO40RqdzPfVy2FSuT7VymKPEcs7upLTh7az+De0MMgekWU3rkY6c0TdR3WPEYthUJ+71Jd9f7GasL0UXxVL/IBgLrCNBGQ9+SZlzfjt+HWQgHQXOd1YghB/EmNE0sJpeDX+vYahz19P2w0Wq2HKjj7CfgUgBfEZFtK75iywAiaKVW+megtvzR2dqOfH62HcnP3EvOXpk+f6KfCsK7TC873AdwRFhHJuGTmayFO1FoK1VZ48kMSpacB/khZHBPd4j83dp+WXjFCwMqQW8m3Rcr+bhyY8pqWQenuwApw6dcAzq0QWGSiboVlL4PuqRTPwLBv2hXt62iILYFKDPX3Eskna/Qygs/D74DYAStj1XLZF7J0VlWfMAJX06GSQ/1XMsndABbV1EF0u+i1fqQVnHGi6lYZEa/1jA2xv4abCqWNONdSCQ8BSNS8FgFfE6Z99/Q1y3V2gXFNSAru8E37RHGJMZoGlRxybmVC8IyE78koMdGNvmk9XNapubnPEvMjVboJB4Vhz9W9nRO1KVDJkYHLuFQK+n21gDwksFn02M5MNYvy2WUlVflHyP+bWKjeMvRs+leMQEVvZoY50QvOLqA6jQLboGOkEllThrW/xto/AbggJAWv9U37sVMH5eYeB/OWamE0gYS6Zq6euObm7iPmm6tTkB8XxobPnDKotuH+VVLKZyoEvAYdl4uVdhCJmiNZyK5j0ECIwbgw7Q+cMqjpSjbcvxlSfpNBS4n5WcF8C9IbwvqDs3Xu29Wpd7RPgKFVAaiJ5aJnXeRf+JtSKOKc5sw1SdcZYUZ3s56r0wJKH8p+HUR3VUIpwKVTpv1c1EM7LaAwvOdMXXp/AOh/f4okwoh3uJhCJlN6b0IFqvPZZZqifAXg5URwxfG3t2PNlv9EBQrs/wvvH/NYtz8O1QAAAABJRU5ErkJggg=="
    },
    PlOJ: function(t, e, i) {
        t.exports = i.p + "static/img/nodata.badffdc.png"
    },
    QKcn: function(t, e) {},
    Qcmw: function(t, e) {},
    RVLM: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAYAAACWJGMLAAAGvElEQVRoQ92ae2wUVRSHf2d2526xGIOA7xcRVAwqGFR87EwbolGDaWeqVWKiUXwEHyRUjcZHfEREQVGMKNH4gJioq50tGkiIxnYGLCL1gYb4ColiVEAQiaDsnd17zBSXtN1pO7vsKtv5c8+595xvzz3nnntnCEPwoUoyJTrSlzDxjQDOBTAChM0APmTCQj9pr6+U7cpAdaaGCT/+GoDmfhxXYDwq6+wHKwFWESjhplsBtiM4fL807TkR9IpSKTuUWOVcAYVUJC8IPhEmZJL2d5H0IyqVHUp3nQ4CzIj2wYQFvmHfEVU/il55oVKpmDgi/jcYehTj3TrMXbKu6azI+hEUywv1gTNS6NgWwW5PlR+kaY8pcsyA6uWFKiVSwDpp2mcfuFAAhl5OARiS1S9YRkNun+rOjaHYUeSTvnfvRyNAXMW9XzlLWQlzlbekl+BAJYZUFCrR0XYLE98N8CgQVkgRuw1TGrZUAqTnnJWB6nrvIPGX/zIYV/UBWCNN+7yqg6r5qPV4ldXaAJ4Y5jzpsXGa0uTfF1y2qVJwZY1UfFW6jhSnCBjdn8Mcp0nk8ywGv+DXNa2rBFjZoHQvfTuBnxqsQ9cUjVGaWgTQOKmyZ6K+eVe5wfYfasWKhBi+5wUwrovinEzUHCIye1YCmALCq9Kwr48yrhid/YNavewooZQD5nMiGWXkpGnrwnO+AXDS3jF0pTStaCflSEaAkqH0j9ITKcsrABwZ0RYYtM03rdG6m/6NgjIfnBFBO+Kx+MRyFo7SoIIlV7tnI4CjowL9q/e9NKyThZf2AcTyY4ngZZJWPYhUkfOFqpcElXDbLmWo5f1WOGA7ASND5J9ITVwslPy9UEYPSNN69H+DEq5zN4DHwx2gFJjfAYXdKNFKUv5trMW/LxhLCO4C50s14n7U12f3B66kSOme8wqFVDsGFvumPVO4y64Gcq8XOk5vMNSTxPTpAE6v0bI8fc/Uph9LBSsNynU6ae9Vcq+HiKdljKblekfr7UT0bF85g573TetW4aaXA3xpv8uX8DuBZkjDaisFrDQoz9lOjEMLoOI0NnO+tVF4rQ+A6ZFCKLzvm/ZFaE8doWvxLwfqPILCSEQLM8nGFhBxMXDFQ3mp0YLjW0OMZOSWbC2am3P6KmcWKSwMd4SvkmbTW3rnsknk594FcMzADtND0rQerihUvOPtpEYxLyTRN0jDnhD8PqwzdXTO7y4Gw0Kc+VXK7Hhc2LwTa52RIoPXwJg2gNO/SNMuausoOlK613YDsXoppCS3StO6XG9vneIncutFVswGq9DLfwI9nzGtW7vnYFBitTObGXPBEAVLlrDVN+zDKxop4TnzwLgrJFKPScO+T3jppQTszBx0bIvYvekLAKcWOsSKtdh5frJxbV6me+mzidWbAPW6rSXSns4YjS2VhpoPxp0FRhSmyzrrLd1LbybCKI1oKnKUU6TcoMEL+RPWy9yIyb32pK7UIYldsblM2jUMDorDEn9LtgXNzbKiUHp7eiJp3NWzzWFgm6+yY/RY7KR9exBjoxyun57YnX2WwTPCnCJod2XMxidDHWYQCEVVvfw8RedUMFB4rZeDtXkAjwH4c1bxm/z6hi7htt0DqLn5yZlogR/35+jZ+NfEOKwgX5h3+yxOQP1lxb5UGDBwJUHlExwdqdqehzzddT4koL6HxZyCZhDziUS8NNQTik2XRsObxSyvwXRLh+o788qltaJm+HYAiV4iom+lYZ2iu2mPwMmCaGl0s5+0XhzM0WLkZYNKrE5fwrnu81Wfhz6XpnVmwnUWM3BzVUHpnrOAGLND9pmnfcNuqUoo4TpfAejuKHovPzRKw15WfVBe65GC6eeQ/UhJTYxCctqOqoPSXedaAoKPQfqG6QtpWpOCH6sLqr29Rmg7vgQwrjCf6BnfsLrzrKqghOfMAePesJJLiDVkzIbgeFE9UKKz7TT4uU8BCvtu4idZe9yJmDw5uDmqEih+SBOrzujs9yKT9la9fASrYvklOpxZwSdu/ez0jjTtpp6yAx5qmNt2bBZqAwEHFxQHxk5d4/F/GU2/VhWU8NLvgLlXJPIATJjpG/bivrAHdqT2lvDg9cu+a+M8ABGtziQbjbDbnwMbakNKiO3xXSHvoTIAJknT/josz4TrBOesewpkGppl0n67mC58MN2SunThOksAXNO7x6N7pWHtOyD2NSxcZzyAzwDU7JMRbZKaNgEXNPw5mKPFyEuCQnt7TSL+x3NKsU2gXQAvkqb9xGCGa7z0VAVeCKaxDP6YgJn9RXawuQaSlwa1Pxb/g7FDEuoflmTeWM+egxoAAAAASUVORK5CYII="
    },
    "T/UG": function(t, e) {},
    UvrK: function(t, e, i) {
        var n = i("kM2E");
        n(n.P + n.R, "Map", {
            toJSON: i("m9gC")("Map")
        })
    },
    VHPX: function(t, e) {},
    Xjd4: function(t, e, i) {
        i("9Bbf")("Map")
    },
    Yq4J: function(t, e) {},
    "a/Cm": function(t, e) {},
    "aj+q": function(t, e) {},
    bhWo: function(t, e) {},
    bqnK: function(t, e, i) {
        i("HpRW")("Map")
    },
    cwe7: function(t, e) {},
    dYAI: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAbCAYAAAAZMl2nAAAElklEQVRIS6VWXWxTZRh+3nO+ttu6stptZTpQIj8RwZUBG0Hi4gyJiV6YoYmYmHjhLgy6cAFeiBoNihrcBf5gNNGQoAloAvFKLxARIhE2NJO5CE4YiLKxH9r9tev5+V7TnnZtT0/X/Zybtt/3vs/3vM/7vF8PYYEPD8Br+tT9wmu+uBAoWkhyIlcbc7UzeBeIt3t85tfzxVsQES3sqoeCDmYIEA24pbaa7kBkPmRIu3F/I0lqEap5iJZc+mu2IMxQ9IjrHDMa0jmsKJ+V+OMvzBrjRqjWkGYrK/J7Mq6u/VIyniVAA+iA8Mm3KNgzUQxMC3t2SskHknFsRRNBKqQ2uQKxszPlM0PVr9a1EeReBnwK4Ssyeh/4WDKmjUag/0jFy2L5xSOFwKIjpUtVNnuY4bPHEKHHXanVE0F3ytcur2kgUj9l8Pr0vkI4SPqfoV0AtycLS1WWrA44I4hfotXd3XbA+JDnW5Z4Iu+glOMI/JonqO3L3ufeFYtMw/s2E3awZNWSMKUkaDcZ3aEWJjqeA5piRCCDFP5E0egNqu9KmjB+q3SbZD42k/QEjkFBqCQY703EGX/UP8XgD8B8l1MeAdtI+60+RAp3zQhMNAjGK+rd147Fp2I9DNQW8xApOOkJ39dqanSQmR+b0TOS1hFf2uIzJqNjuYHOU83+/tumJxJIS5oHntXaxJ46dqdGsQp3Pok0vpUgvGWLkitm54ZByVydTiCHk6QrBqOqz7GwXNhMCEkVYmgFEp+5T4YxEQ2pDb8GkxjGLxvPA9w47R6HUvVgH1hMFetI3r4SrYCIzNjJDrH5wiaLyNmGI2BsL3SK6RuGWXEra9umQbrAAtK4hpeB4l5neMZR8VDnM1ZrzjTuY8Yep0gWGvSaK2CSedsFW5KKnOZnuOHuXw5AyccgvKM2dbyaxOJTjc9Lps+z75HEOiWu2+B1yJJxG0AhChmXWd8yXhBj1RCRxbnLBCjErdTc8YVF5IctzaaI/agHbkK6Ez7Isr9qZkjYWzAXxzABMqMI6R64wjUQWukjtPX8KYvIyQfviVVfuSY9kyloq+Jiddt5UHYByXKcEdJTSYZA6b8r76VHO/osIt9Aja7166yYVqbtPihojtSGdl3AVWuA7FNqv44ccA1dCfjrRsPToZMXKydY1S1rz+EtJeGrgbYqlDbH4H8yrejsekZMhnfNqCvnyGhX9WVTaKvsJivWIu1EGSbbA4iVGVh8aBCqP3+67Bae/i1Fv7fudvL/J6NIV+VxqRgtjrXYW52lmP5eJeTpMoxKE+VvjqBsc3zWrSUpTpeHRh62EfHvlYTXnRTJkMs3H98U0HfUILZqChX7h2fXk3QU04e+dZGdua05V7Pb9Ey9n41UzLPp2KnDi+BqikIsM+bkdTLVPeUbR97NIRL/eenT8bLxo7lIBVybJ0yCMs3e5KkKXYbnudJNA4dzFfk9sMQ0+B/ODP/cZJ5HNJNYWbFh6O+8QR3tDJwgxtbpFuZdKHOY6yLEFOKffA3hZseJGrvgq2Lp+giMx4GsF+NCV/t81gnjYHynuLU23/qJoTSR/wHfOcaz4T93mgAAAABJRU5ErkJggg=="
    },
    fUqW: function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        e.isVNode = function(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : n(t)) && (0,
            r.hasOwn)(t, "componentOptions")
        }
        ;
        var r = i("ylDJ")
    },
    fZjL: function(t, e, i) {
        t.exports = {
            default: i("jFbC"),
            __esModule: !0
        }
    },
    fcu0: function(t, e) {},
    hae4: function(t, e) {},
    hv81: function(t, e) {},
    iHiS: function(t, e) {
        t.exports = {
            config: [{
                key: 3,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 12,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: 0,
                    labelOffsetX: 12,
                    labelOffsetY: 0
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: 0,
                    labelOffsetX: -12,
                    labelOffsetY: 0
                }]
            }, {
                key: 4,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 12,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: 0,
                    labelOffsetX: 12,
                    labelOffsetY: 0
                }, {
                    alignX: "center",
                    offsetX: 0,
                    offsetY: 25,
                    labelOffsetX: 12,
                    labelOffsetY: 25
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: 0,
                    labelOffsetX: -12,
                    labelOffsetY: 0
                }]
            }, {
                key: 5,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 15,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: -8,
                    labelOffsetX: 12,
                    labelOffsetY: -8
                }, {
                    alignX: "left",
                    offsetX: 5,
                    offsetY: 20,
                    labelOffsetX: 5,
                    labelOffsetY: 20
                }, {
                    alignX: "right",
                    offsetX: -5,
                    offsetY: 20,
                    labelOffsetX: -5,
                    labelOffsetY: 20
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: -8,
                    labelOffsetX: -12,
                    labelOffsetY: -8
                }]
            }, {
                key: 6,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 13,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: -15,
                    labelOffsetX: 12,
                    labelOffsetY: -15
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: 15,
                    labelOffsetX: 12,
                    labelOffsetY: 15
                }, {
                    alignX: "center",
                    offsetX: 0,
                    offsetY: 25,
                    labelOffsetX: 13,
                    labelOffsetY: 25
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: 15,
                    labelOffsetX: -12,
                    labelOffsetY: 15
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: -15,
                    labelOffsetX: -12,
                    labelOffsetY: -15
                }]
            }, {
                key: 7,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 13,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: -15,
                    labelOffsetX: 12,
                    labelOffsetY: -15
                }, {
                    alignX: "left",
                    offsetX: 15,
                    offsetY: 8,
                    labelOffsetX: 15,
                    labelOffsetY: 8
                }, {
                    alignX: "left",
                    offsetX: 0,
                    offsetY: 25,
                    labelOffsetX: 0,
                    labelOffsetY: 25
                }, {
                    alignX: "right",
                    offsetX: 0,
                    offsetY: 25,
                    labelOffsetX: 0,
                    labelOffsetY: 25
                }, {
                    alignX: "right",
                    offsetX: -15,
                    offsetY: 8,
                    labelOffsetX: -15,
                    labelOffsetY: 8
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: -15,
                    labelOffsetX: -12,
                    labelOffsetY: -15
                }]
            }, {
                key: 8,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 13,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: -15,
                    labelOffsetX: 12,
                    labelOffsetY: -15
                }, {
                    alignX: "left",
                    offsetX: 15,
                    offsetY: 0,
                    labelOffsetX: 15,
                    labelOffsetY: 0
                }, {
                    alignX: "left",
                    offsetX: 8,
                    offsetY: 25,
                    labelOffsetX: 8,
                    labelOffsetY: 25
                }, {
                    alignX: "center",
                    offsetX: 0,
                    offsetY: 25,
                    labelOffsetX: 13,
                    labelOffsetY: 25
                }, {
                    alignX: "right",
                    offsetX: -8,
                    offsetY: 25,
                    labelOffsetX: -8,
                    labelOffsetY: 25
                }, {
                    alignX: "right",
                    offsetX: -15,
                    offsetY: 0,
                    labelOffsetX: -15,
                    labelOffsetY: 0
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: -15,
                    labelOffsetX: -12,
                    labelOffsetY: -15
                }]
            }, {
                key: 9,
                value: [{
                    alignX: "center",
                    offsetX: 0,
                    offsetY: -25,
                    labelOffsetX: 13,
                    labelOffsetY: -25
                }, {
                    alignX: "left",
                    offsetX: 10,
                    offsetY: -15,
                    labelOffsetX: 10,
                    labelOffsetY: -15
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: -6,
                    labelOffsetX: 12,
                    labelOffsetY: -6
                }, {
                    alignX: "left",
                    offsetX: 12,
                    offsetY: 12,
                    labelOffsetX: 12,
                    labelOffsetY: 12
                }, {
                    alignX: "left",
                    offsetX: 4,
                    offsetY: 23,
                    labelOffsetX: 4,
                    labelOffsetY: 23
                }, {
                    alignX: "right",
                    offsetX: -4,
                    offsetY: 23,
                    labelOffsetX: -4,
                    labelOffsetY: 23
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: 12,
                    labelOffsetX: -12,
                    labelOffsetY: 12
                }, {
                    alignX: "right",
                    offsetX: -12,
                    offsetY: -6,
                    labelOffsetX: -12,
                    labelOffsetY: -6
                }, {
                    alignX: "right",
                    offsetX: -10,
                    offsetY: -15,
                    labelOffsetX: -10,
                    labelOffsetY: -15
                }]
            }],
            getConfigByKey: function(t) {
                if (t)
                    for (var e = 0; e < this.config.length; e++)
                        if (this.config[e].key === t)
                            return this.config[e].value
            }
        }
    },
    ifoU: function(t, e, i) {
        t.exports = {
            default: i("3C/1"),
            __esModule: !0
        }
    },
    "j1+R": function(t, e) {},
    jFbC: function(t, e, i) {
        i("Cdx3"),
        t.exports = i("FeBl").Object.keys
    },
    m9gC: function(t, e, i) {
        var n = i("RY/4")
          , r = i("4WTo");
        t.exports = function(t) {
            return function() {
                if (n(this) != t)
                    throw TypeError(t + "#toJSON isn't generic");
                return r(this)
            }
        }
    },
    mtrD: function(t, e) {
        t.exports = function(t) {
            var e = {};
            function i(n) {
                if (e[n])
                    return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i),
                r.l = !0,
                r.exports
            }
            return i.m = t,
            i.c = e,
            i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var r in t)
                        i.d(n, r, function(e) {
                            return t[e]
                        }
                        .bind(null, r));
                return n
            }
            ,
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "/dist/",
            i(i.s = 96)
        }({
            0: function(t, e, i) {
                "use strict";
                function n(t, e, i, n, r, a, s, o) {
                    var l, c = "function" == typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = i,
                    c._compiled = !0),
                    n && (c.functional = !0),
                    a && (c._scopeId = "data-v-" + a),
                    s ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        r && r.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(s)
                    }
                    ,
                    c._ssrRegister = l) : r && (l = o ? function() {
                        r.call(this, this.$root.$options.shadowRoot)
                    }
                    : r),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var u = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                u(t, e)
                            }
                        } else {
                            var h = c.beforeCreate;
                            c.beforeCreate = h ? [].concat(h, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                i.d(e, "a", function() {
                    return n
                })
            },
            96: function(t, e, i) {
                "use strict";
                i.r(e);
                var n = function() {
                    var t = this
                      , e = t.$createElement
                      , i = t._self._c || e;
                    return i("button", {
                        staticClass: "el-button",
                        class: [t.type ? "el-button--" + t.type : "", t.buttonSize ? "el-button--" + t.buttonSize : "", {
                            "is-disabled": t.buttonDisabled,
                            "is-loading": t.loading,
                            "is-plain": t.plain,
                            "is-round": t.round,
                            "is-circle": t.circle
                        }],
                        attrs: {
                            disabled: t.buttonDisabled || t.loading,
                            autofocus: t.autofocus,
                            type: t.nativeType
                        },
                        on: {
                            click: t.handleClick
                        }
                    }, [t.loading ? i("i", {
                        staticClass: "el-icon-loading"
                    }) : t._e(), t.icon && !t.loading ? i("i", {
                        class: t.icon
                    }) : t._e(), t.$slots.default ? i("span", [t._t("default")], 2) : t._e()])
                };
                n._withStripped = !0;
                var r = {
                    name: "ElButton",
                    inject: {
                        elForm: {
                            default: ""
                        },
                        elFormItem: {
                            default: ""
                        }
                    },
                    props: {
                        type: {
                            type: String,
                            default: "default"
                        },
                        size: String,
                        icon: {
                            type: String,
                            default: ""
                        },
                        nativeType: {
                            type: String,
                            default: "button"
                        },
                        loading: Boolean,
                        disabled: Boolean,
                        plain: Boolean,
                        autofocus: Boolean,
                        round: Boolean,
                        circle: Boolean
                    },
                    computed: {
                        _elFormItemSize: function() {
                            return (this.elFormItem || {}).elFormItemSize
                        },
                        buttonSize: function() {
                            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
                        },
                        buttonDisabled: function() {
                            return this.$options.propsData.hasOwnProperty("disabled") ? this.disabled : (this.elForm || {}).disabled
                        }
                    },
                    methods: {
                        handleClick: function(t) {
                            this.$emit("click", t)
                        }
                    }
                }
                  , a = i(0)
                  , s = Object(a.a)(r, n, [], !1, null, null, null);
                s.options.__file = "packages/button/src/button.vue";
                var o = s.exports;
                o.install = function(t) {
                    t.component(o.name, o)
                }
                ;
                e.default = o
            }
        })
    },
    "nu7/": function(t, e, i) {
        t.exports = function(t) {
            var e = {};
            function i(n) {
                if (e[n])
                    return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i),
                r.l = !0,
                r.exports
            }
            return i.m = t,
            i.c = e,
            i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var r in t)
                        i.d(n, r, function(e) {
                            return t[e]
                        }
                        .bind(null, r));
                return n
            }
            ,
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "/dist/",
            i(i.s = 73)
        }({
            0: function(t, e, i) {
                "use strict";
                function n(t, e, i, n, r, a, s, o) {
                    var l, c = "function" == typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = i,
                    c._compiled = !0),
                    n && (c.functional = !0),
                    a && (c._scopeId = "data-v-" + a),
                    s ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        r && r.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(s)
                    }
                    ,
                    c._ssrRegister = l) : r && (l = o ? function() {
                        r.call(this, this.$root.$options.shadowRoot)
                    }
                    : r),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var u = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                u(t, e)
                            }
                        } else {
                            var h = c.beforeCreate;
                            c.beforeCreate = h ? [].concat(h, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                i.d(e, "a", function() {
                    return n
                })
            },
            13: function(t, e) {
                t.exports = i("7J9s")
            },
            2: function(t, e) {
                t.exports = i("2kvA")
            },
            42: function(t, e) {
                t.exports = i("H8dH")
            },
            7: function(t, e) {
                t.exports = i("7+uW")
            },
            73: function(t, e, i) {
                "use strict";
                i.r(e);
                var n = i(7)
                  , r = i.n(n)
                  , a = function() {
                    var t = this
                      , e = t.$createElement
                      , i = t._self._c || e;
                    return i("transition", {
                        attrs: {
                            name: "el-loading-fade"
                        },
                        on: {
                            "after-leave": t.handleAfterLeave
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "el-loading-mask",
                        class: [t.customClass, {
                            "is-fullscreen": t.fullscreen
                        }],
                        style: {
                            backgroundColor: t.background || ""
                        }
                    }, [i("div", {
                        staticClass: "el-loading-spinner"
                    }, [t.spinner ? i("i", {
                        class: t.spinner
                    }) : i("svg", {
                        staticClass: "circular",
                        attrs: {
                            viewBox: "25 25 50 50"
                        }
                    }, [i("circle", {
                        staticClass: "path",
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "20",
                            fill: "none"
                        }
                    })]), t.text ? i("p", {
                        staticClass: "el-loading-text"
                    }, [t._v(t._s(t.text))]) : t._e()])])])
                };
                a._withStripped = !0;
                var s = {
                    data: function() {
                        return {
                            text: null,
                            spinner: null,
                            background: null,
                            fullscreen: !0,
                            visible: !1,
                            customClass: ""
                        }
                    },
                    methods: {
                        handleAfterLeave: function() {
                            this.$emit("after-leave")
                        },
                        setText: function(t) {
                            this.text = t
                        }
                    }
                }
                  , o = i(0)
                  , l = Object(o.a)(s, a, [], !1, null, null, null);
                l.options.__file = "packages/loading/src/loading.vue";
                var c = l.exports
                  , u = i(2)
                  , h = i(13)
                  , f = i(42)
                  , d = i.n(f)
                  , p = r.a.extend(c)
                  , v = {
                    install: function(t) {
                        if (!t.prototype.$isServer) {
                            var e = function(e, n) {
                                n.value ? t.nextTick(function() {
                                    n.modifiers.fullscreen ? (e.originalPosition = Object(u.getStyle)(document.body, "position"),
                                    e.originalOverflow = Object(u.getStyle)(document.body, "overflow"),
                                    e.maskStyle.zIndex = h.PopupManager.nextZIndex(),
                                    Object(u.addClass)(e.mask, "is-fullscreen"),
                                    i(document.body, e, n)) : (Object(u.removeClass)(e.mask, "is-fullscreen"),
                                    n.modifiers.body ? (e.originalPosition = Object(u.getStyle)(document.body, "position"),
                                    ["top", "left"].forEach(function(t) {
                                        var i = "top" === t ? "scrollTop" : "scrollLeft";
                                        e.maskStyle[t] = e.getBoundingClientRect()[t] + document.body[i] + document.documentElement[i] - parseInt(Object(u.getStyle)(document.body, "margin-" + t), 10) + "px"
                                    }),
                                    ["height", "width"].forEach(function(t) {
                                        e.maskStyle[t] = e.getBoundingClientRect()[t] + "px"
                                    }),
                                    i(document.body, e, n)) : (e.originalPosition = Object(u.getStyle)(e, "position"),
                                    i(e, e, n)))
                                }) : (d()(e.instance, function(t) {
                                    if (e.instance.hiding) {
                                        e.domVisible = !1;
                                        var i = n.modifiers.fullscreen || n.modifiers.body ? document.body : e;
                                        Object(u.removeClass)(i, "el-loading-parent--relative"),
                                        Object(u.removeClass)(i, "el-loading-parent--hidden"),
                                        e.instance.hiding = !1
                                    }
                                }, 300, !0),
                                e.instance.visible = !1,
                                e.instance.hiding = !0)
                            }
                              , i = function(e, i, n) {
                                i.domVisible || "none" === Object(u.getStyle)(i, "display") || "hidden" === Object(u.getStyle)(i, "visibility") ? i.domVisible && !0 === i.instance.hiding && (i.instance.visible = !0,
                                i.instance.hiding = !1) : (Object.keys(i.maskStyle).forEach(function(t) {
                                    i.mask.style[t] = i.maskStyle[t]
                                }),
                                "absolute" !== i.originalPosition && "fixed" !== i.originalPosition && "sticky" !== i.originalPosition && Object(u.addClass)(e, "el-loading-parent--relative"),
                                n.modifiers.fullscreen && n.modifiers.lock && Object(u.addClass)(e, "el-loading-parent--hidden"),
                                i.domVisible = !0,
                                e.appendChild(i.mask),
                                t.nextTick(function() {
                                    i.instance.hiding ? i.instance.$emit("after-leave") : i.instance.visible = !0
                                }),
                                i.domInserted = !0)
                            };
                            t.directive("loading", {
                                bind: function(t, i, n) {
                                    var r = t.getAttribute("element-loading-text")
                                      , a = t.getAttribute("element-loading-spinner")
                                      , s = t.getAttribute("element-loading-background")
                                      , o = t.getAttribute("element-loading-custom-class")
                                      , l = n.context
                                      , c = new p({
                                        el: document.createElement("div"),
                                        data: {
                                            text: l && l[r] || r,
                                            spinner: l && l[a] || a,
                                            background: l && l[s] || s,
                                            customClass: l && l[o] || o,
                                            fullscreen: !!i.modifiers.fullscreen
                                        }
                                    });
                                    t.instance = c,
                                    t.mask = c.$el,
                                    t.maskStyle = {},
                                    i.value && e(t, i)
                                },
                                update: function(t, i) {
                                    t.instance.setText(t.getAttribute("element-loading-text")),
                                    i.oldValue !== i.value && e(t, i)
                                },
                                unbind: function(t, i) {
                                    t.domInserted && (t.mask && t.mask.parentNode && t.mask.parentNode.removeChild(t.mask),
                                    e(t, {
                                        value: !1,
                                        modifiers: i.modifiers
                                    })),
                                    t.instance && t.instance.$destroy()
                                }
                            })
                        }
                    }
                }
                  , g = v
                  , m = i(9)
                  , y = i.n(m)
                  , x = r.a.extend(c)
                  , b = {
                    text: null,
                    fullscreen: !0,
                    body: !1,
                    lock: !1,
                    customClass: ""
                }
                  , S = void 0;
                x.prototype.originalPosition = "",
                x.prototype.originalOverflow = "",
                x.prototype.close = function() {
                    var t = this;
                    this.fullscreen && (S = void 0),
                    d()(this, function(e) {
                        var i = t.fullscreen || t.body ? document.body : t.target;
                        Object(u.removeClass)(i, "el-loading-parent--relative"),
                        Object(u.removeClass)(i, "el-loading-parent--hidden"),
                        t.$el && t.$el.parentNode && t.$el.parentNode.removeChild(t.$el),
                        t.$destroy()
                    }, 300),
                    this.visible = !1
                }
                ;
                var _ = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!r.a.prototype.$isServer) {
                        if ("string" == typeof (t = y()({}, b, t)).target && (t.target = document.querySelector(t.target)),
                        t.target = t.target || document.body,
                        t.target !== document.body ? t.fullscreen = !1 : t.body = !0,
                        t.fullscreen && S)
                            return S;
                        var e = t.body ? document.body : t.target
                          , i = new x({
                            el: document.createElement("div"),
                            data: t
                        });
                        return function(t, e, i) {
                            var n = {};
                            t.fullscreen ? (i.originalPosition = Object(u.getStyle)(document.body, "position"),
                            i.originalOverflow = Object(u.getStyle)(document.body, "overflow"),
                            n.zIndex = h.PopupManager.nextZIndex()) : t.body ? (i.originalPosition = Object(u.getStyle)(document.body, "position"),
                            ["top", "left"].forEach(function(e) {
                                var i = "top" === e ? "scrollTop" : "scrollLeft";
                                n[e] = t.target.getBoundingClientRect()[e] + document.body[i] + document.documentElement[i] + "px"
                            }),
                            ["height", "width"].forEach(function(e) {
                                n[e] = t.target.getBoundingClientRect()[e] + "px"
                            })) : i.originalPosition = Object(u.getStyle)(e, "position"),
                            Object.keys(n).forEach(function(t) {
                                i.$el.style[t] = n[t]
                            })
                        }(t, e, i),
                        "absolute" !== i.originalPosition && "fixed" !== i.originalPosition && "sticky" !== i.originalPosition && Object(u.addClass)(e, "el-loading-parent--relative"),
                        t.fullscreen && t.lock && Object(u.addClass)(e, "el-loading-parent--hidden"),
                        e.appendChild(i.$el),
                        r.a.nextTick(function() {
                            i.visible = !0
                        }),
                        t.fullscreen && (S = i),
                        i
                    }
                };
                e.default = {
                    install: function(t) {
                        t.use(g),
                        t.prototype.$loading = _
                    },
                    directive: g,
                    service: _
                }
            },
            9: function(t, e) {
                t.exports = i("jmaC")
            }
        })
    },
    oeOm: function(t, e, i) {
        var n = i("7Doy");
        t.exports = function(t, e) {
            return new (n(t))(e)
        }
    },
    pCBo: function(t, e) {
        !function() {
            for (var t = 0, e = ["webkit", "moz"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
                window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                var n = (new Date).getTime()
                  , r = Math.max(0, 16.7 - (n - t))
                  , a = n - t
                  , s = window.setTimeout(function() {
                    e(a)
                }, r);
                return t = n + r,
                s
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
            )
        }()
    },
    qCoq: function(t, e, i) {
        "use strict";
        var n = i("9C8M")
          , r = i("LIJb");
        t.exports = i("qo66")("Map", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(t) {
                var e = n.getEntry(r(this, "Map"), t);
                return e && e.v
            },
            set: function(t, e) {
                return n.def(r(this, "Map"), 0 === t ? 0 : t, e)
            }
        }, n, !0)
    },
    qo66: function(t, e, i) {
        "use strict";
        var n = i("7KvD")
          , r = i("kM2E")
          , a = i("06OY")
          , s = i("S82l")
          , o = i("hJx8")
          , l = i("xH/j")
          , c = i("NWt+")
          , u = i("2KxR")
          , h = i("EqjI")
          , f = i("e6n0")
          , d = i("evD5").f
          , p = i("ALrJ")(0)
          , v = i("+E39");
        t.exports = function(t, e, i, g, m, y) {
            var x = n[t]
              , b = x
              , S = m ? "set" : "add"
              , _ = b && b.prototype
              , C = {};
            return v && "function" == typeof b && (y || _.forEach && !s(function() {
                (new b).entries().next()
            })) ? (b = e(function(e, i) {
                u(e, b, t, "_c"),
                e._c = new x,
                void 0 != i && c(i, m, e[S], e)
            }),
            p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(t) {
                var e = "add" == t || "set" == t;
                t in _ && (!y || "clear" != t) && o(b.prototype, t, function(i, n) {
                    if (u(this, b, t),
                    !e && y && !h(i))
                        return "get" == t && void 0;
                    var r = this._c[t](0 === i ? 0 : i, n);
                    return e ? this : r
                })
            }),
            y || d(b.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (b = g.getConstructor(e, t, m, S),
            l(b.prototype, i),
            a.NEED = !0),
            f(b, t),
            C[t] = b,
            r(r.G + r.W + r.F, C),
            y || g.setStrong(b, t, m),
            b
        }
    },
    qtPz: function(t, e) {},
    qubY: function(t, e, i) {
        t.exports = function(t) {
            var e = {};
            function i(n) {
                if (e[n])
                    return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i),
                r.l = !0,
                r.exports
            }
            return i.m = t,
            i.c = e,
            i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var r in t)
                        i.d(n, r, function(e) {
                            return t[e]
                        }
                        .bind(null, r));
                return n
            }
            ,
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "/dist/",
            i(i.s = 82)
        }({
            0: function(t, e, i) {
                "use strict";
                function n(t, e, i, n, r, a, s, o) {
                    var l, c = "function" == typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = i,
                    c._compiled = !0),
                    n && (c.functional = !0),
                    a && (c._scopeId = "data-v-" + a),
                    s ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        r && r.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(s)
                    }
                    ,
                    c._ssrRegister = l) : r && (l = o ? function() {
                        r.call(this, this.$root.$options.shadowRoot)
                    }
                    : r),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var u = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                u(t, e)
                            }
                        } else {
                            var h = c.beforeCreate;
                            c.beforeCreate = h ? [].concat(h, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                i.d(e, "a", function() {
                    return n
                })
            },
            11: function(t, e) {
                t.exports = i("aW5l")
            },
            13: function(t, e) {
                t.exports = i("7J9s")
            },
            4: function(t, e) {
                t.exports = i("fPll")
            },
            82: function(t, e, i) {
                "use strict";
                i.r(e);
                var n = function() {
                    var t = this
                      , e = t.$createElement
                      , i = t._self._c || e;
                    return i("transition", {
                        attrs: {
                            name: "dialog-fade"
                        },
                        on: {
                            "after-enter": t.afterEnter,
                            "after-leave": t.afterLeave
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "el-dialog__wrapper",
                        on: {
                            click: function(e) {
                                return e.target !== e.currentTarget ? null : t.handleWrapperClick(e)
                            }
                        }
                    }, [i("div", {
                        key: t.key,
                        ref: "dialog",
                        class: ["el-dialog", {
                            "is-fullscreen": t.fullscreen,
                            "el-dialog--center": t.center
                        }, t.customClass],
                        style: t.style,
                        attrs: {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": t.title || "dialog"
                        }
                    }, [i("div", {
                        staticClass: "el-dialog__header"
                    }, [t._t("title", [i("span", {
                        staticClass: "el-dialog__title"
                    }, [t._v(t._s(t.title))])]), t.showClose ? i("button", {
                        staticClass: "el-dialog__headerbtn",
                        attrs: {
                            type: "button",
                            "aria-label": "Close"
                        },
                        on: {
                            click: t.handleClose
                        }
                    }, [i("i", {
                        staticClass: "el-dialog__close el-icon el-icon-close"
                    })]) : t._e()], 2), t.rendered ? i("div", {
                        staticClass: "el-dialog__body"
                    }, [t._t("default")], 2) : t._e(), t.$slots.footer ? i("div", {
                        staticClass: "el-dialog__footer"
                    }, [t._t("footer")], 2) : t._e()])])])
                };
                n._withStripped = !0;
                var r = i(13)
                  , a = i.n(r)
                  , s = i(11)
                  , o = i.n(s)
                  , l = i(4)
                  , c = i.n(l)
                  , u = {
                    name: "ElDialog",
                    mixins: [a.a, c.a, o.a],
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        modal: {
                            type: Boolean,
                            default: !0
                        },
                        modalAppendToBody: {
                            type: Boolean,
                            default: !0
                        },
                        appendToBody: {
                            type: Boolean,
                            default: !1
                        },
                        lockScroll: {
                            type: Boolean,
                            default: !0
                        },
                        closeOnClickModal: {
                            type: Boolean,
                            default: !0
                        },
                        closeOnPressEscape: {
                            type: Boolean,
                            default: !0
                        },
                        showClose: {
                            type: Boolean,
                            default: !0
                        },
                        width: String,
                        fullscreen: Boolean,
                        customClass: {
                            type: String,
                            default: ""
                        },
                        top: {
                            type: String,
                            default: "15vh"
                        },
                        beforeClose: Function,
                        center: {
                            type: Boolean,
                            default: !1
                        },
                        destroyOnClose: Boolean
                    },
                    data: function() {
                        return {
                            closed: !1,
                            key: 0
                        }
                    },
                    watch: {
                        visible: function(t) {
                            var e = this;
                            t ? (this.closed = !1,
                            this.$emit("open"),
                            this.$el.addEventListener("scroll", this.updatePopper),
                            this.$nextTick(function() {
                                e.$refs.dialog.scrollTop = 0
                            }),
                            this.appendToBody && document.body.appendChild(this.$el)) : (this.$el.removeEventListener("scroll", this.updatePopper),
                            this.closed || this.$emit("close"),
                            this.destroyOnClose && this.$nextTick(function() {
                                e.key++
                            }))
                        }
                    },
                    computed: {
                        style: function() {
                            var t = {};
                            return this.fullscreen || (t.marginTop = this.top,
                            this.width && (t.width = this.width)),
                            t
                        }
                    },
                    methods: {
                        getMigratingConfig: function() {
                            return {
                                props: {
                                    size: "size is removed."
                                }
                            }
                        },
                        handleWrapperClick: function() {
                            this.closeOnClickModal && this.handleClose()
                        },
                        handleClose: function() {
                            "function" == typeof this.beforeClose ? this.beforeClose(this.hide) : this.hide()
                        },
                        hide: function(t) {
                            !1 !== t && (this.$emit("update:visible", !1),
                            this.$emit("close"),
                            this.closed = !0)
                        },
                        updatePopper: function() {
                            this.broadcast("ElSelectDropdown", "updatePopper"),
                            this.broadcast("ElDropdownMenu", "updatePopper")
                        },
                        afterEnter: function() {
                            this.$emit("opened")
                        },
                        afterLeave: function() {
                            this.$emit("closed")
                        }
                    },
                    mounted: function() {
                        this.visible && (this.rendered = !0,
                        this.open(),
                        this.appendToBody && document.body.appendChild(this.$el))
                    },
                    destroyed: function() {
                        this.appendToBody && this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                    }
                }
                  , h = i(0)
                  , f = Object(h.a)(u, n, [], !1, null, null, null);
                f.options.__file = "packages/dialog/src/component.vue";
                var d = f.exports;
                d.install = function(t) {
                    t.component(d.name, d)
                }
                ;
                e.default = d
            }
        })
    },
    "r/ZS": function(t, e) {},
    r8MV: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABbZJREFUSEvFV2tsFFUU/s7szC5ptRgMD9NYRI1gUIkE0wLtbGshaA2yO9RGTfAVBTSaKEYgIUIhpiCKmihRFNGEmGgfs0sqRVBoZwgPoWDARzTWqBiUR0CEtrZzZ+eYmdltdtvtbv95/u2953zfed0zZwn/k9CIeZkl+WCsFLakEvEUZowjdoJMdJkIvxFLx6wQ7UXZgrMjwcxP3NlaIPeIFwA8TUBxTlBGggh7WJLWiorI17l0cxIrZuwxZm4g4LosIDaAfwFcneWOmdBiy8rzmDX/dDYHshN3blGUnrFvA1iSMmLCRWJqdkA7EiE6hi++OY/6egedrQXB3sQNjuPcQxI0MGYP2AB/UUKKiruHRj+U2CfdCWCuB8DoJ8JblkMbUBW9lK9+shmrJvBGMKb7utzHFIjYamR3uu0QYsXQ30tFyuAzFFCiovz+w/kIM+47OxWl99RmMJ7yfcclyXFmWlW1P6b0MojdmoL5I1+Zz9g2ylC98Pd00KARv53hPAnCdDAVMvMvkKStgyNybYKGvp6BlZ490U+iOzQNNTX93s8BUL97u7xGYvRDlisHRyob+goCNwAkDckASU2iO7goBexnmUneH9eJOeKTY5lQtTcziGVDX0XAK8nDV62w5nualKAZW8jMzWlHVwBcAKEEjJQjm0VYezbDKbNtrIz+LmIuYsYFe9SoG1FWc9mP2B0OZuyU+04ZuGg7dNPgRlIM/VsAtwFwQLxEVGgfgoj91PPnAJcASAhIkxCO/JFOLpv6amKs9c+kpSIc2eIRy0bTLELggH9B74twdOAZeUdm21iF+855PhKabVV7IB1Y2R9/HI6zzcelR0RFdHtG1HsbixVZdp0hBvbYYW1ekji+guBscJUdSPclwpG2DMODjcWK8A3T65TSUQz9UQAfJ4mXiIro+xn2ABRDPwLgLoB6RPuJIo9YMXTXyDWGCAUmZJu3LjgRTbYSogFVdd0p4FB7480OyV+BMNHLFznTLLX2ZBbidwEs9TgcmuRHbMZ2EnMNAFu0nwx5E2kEInfsqAIldAKu8auEJqFqddlMZTP2MjGv8/Wo1I/YjH0J5jkAroiwVjQCTsgH9Jlkox1AyMei3VZC1KZnIx1H7tCXEWGT3ydcnqyx7nod9dJQqBRixvzefOSKETsO8J2+Hm8SqrbczfNwdkFT38iMl1LlSEasbwJjmX8oTbXUyA85iTtbC5Reu9sdEATsssKaW6acohixzwCuc5+gkKTRHnHQiD/McD7xfGe8aFdqb+REYSbFjJ0AYSo5eNCq1Jpy6re3y3Lg77PEGAPgZxHWbvEHyOEd45W+xGkQAiAcEKpWni8CfN8YxDmMQVXdmXy6coc+110Qko31jlCjzw3M6qChtzFwrxc1UG2HtX25AIOGfmsCfEfCGdOCqip3KRhWFEM3AVQkiUuFGj0yQKzsj5fCcQ4lh8RxUVBShhkzRFa0xsagPF4+6z4jJiy3Ve214ZuqpZaZvFIwaJcdjnr9kPFZlE29iRi1vmf4QKja4qyAzJJixrsAngRJekJURLxP6WBxs+IAhwgY7c5xosB0S13gDZfMReBga7EsxNHUjkVE662KyCq3E4egdjaODvbL11uzte+GI2XQTs8577VgnaVqa1K6QzeQffFSBBIdAI3y0kMUtxFaDLXmfL4mSt0HzZZah2lrMlK3Z3RbjdamB5B12ZPN+Dyw82lqFLq7M4DXbSG2obou69YI98nI/1SS46weaCS/UXW7UFk0eCgNu94G25uncCAQB/PktEgZREfBfJyJ/oTDPRIwgYkmMngOwXunKUkQU4MVjqzJVqrcC31bW0i5qu8ZdrCKCNeONNVu90okrUw1Uja7/P8kXKvDbUVKv/UQw9EINBvgwgwwt/mYu0DkrrDb3Xeaz8mREaej1NdLCE8rUQIYx5AUCeKKJSm/onyBu4ONWP4DG1pZS1d2JNkAAAAASUVORK5CYII="
    },
    rFN9: function(t, e) {},
    sg7M: function(t, e) {},
    tj0U: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAnCAYAAAD+bDODAAAAAXNSR0IArs4c6QAAAf5JREFUWEftl8trE1EUh78znUnwgbb4WhSXLqQiPqJCg49RCrXgg0Yq6Nad/hH5N6JUXRaLFgULoliMVRCrGHHnxgcISulKtJ3HPZJA0tImcaaZdjV3NXfuOb/v8JvD5YxQX68e7CQ//KuxX4MHoVi0Mqf3P1ZlUESeeM8rQxSLZg1YiDP9MEcYvm2Iqx71TxUW9wlSxS5PnBHVZ3VNtayBQL2Kg3MVtB9lN+ApzKL6QWye+vnCGwSNW8cKGMhtFS6J6pY2Yl8USoGz8Sb9g3NRoU1gUVNrcX8RxoyR8VC7X+K6v+vZmelHfSY0Z8FkAzNfwr0y2ylsaWUhIj9QDYEeYOviocz4U5VjScLaWiJdZt+6wTDmSAqL1aJNg1MbO/cQ0m5MxMXUxkRsFMfZ2+pu/K4qd1F9bXVZ31SDrFr2NtQcFGUAcAE7RhWf/J/BgZUwS0b9oPsGrjvfUqw8ucNm4Rqq1wV620P1o29znnzha/MZ5PjFxkzSVmim5GT+7LqgmAJKHmrzSnUFQAWsO/527xZ9I171ZWew5ZVM3dvMhuwm7N45cjl/+XGysP98xBQWo8tbh6Y2pja2n4qb/jJFva5imru+3eiU7x9C5V2jSHEO+yfOvY9ZdKRwqUY5LybGEEZQHfdPDl+OlLmKoBqstj5PZtkztLAKjcgp/wA8tWyIsZO5kgAAAABJRU5ErkJggg=="
    },
    uiS9: function(t, e) {},
    uqUo: function(t, e, i) {
        var n = i("kM2E")
          , r = i("FeBl")
          , a = i("S82l");
        t.exports = function(t, e) {
            var i = (r.Object || {})[t] || Object[t]
              , s = {};
            s[t] = e(i),
            n(n.S + n.F * a(function() {
                i(1)
            }), "Object", s)
        }
    },
    vhaq: function(t, e, i) {
        "use strict";
        i("pCBo");
        var n = {
            name: "zx-tab",
            props: {
                value: {
                    type: String
                }
            },
            data: function() {
                return {
                    selectedId: this.value,
                    additionalX: 50,
                    reBoundExponent: 10,
                    sensitivity: 1e3,
                    reBoundingDuration: 360,
                    speed: 0,
                    touching: !1,
                    reBounding: !1,
                    translateX: 0,
                    startX: 0,
                    lastX: 0,
                    currentX: 0,
                    startMoveTime: 0,
                    endMoveTime: 0,
                    frameTime: 16.7,
                    frameStartTime: 0,
                    frameEndTime: 0,
                    inertiaFrame: 0,
                    zeroSpeed: .001,
                    acceleration: 0
                }
            },
            computed: {
                style: function() {
                    return {
                        transitionTimingFunction: this.transitionTimingFunction,
                        transitionDuration: this.transitionDuration + "ms",
                        transform: "translate3d(" + this.translateX + "px, 0px, 0px)"
                    }
                },
                transitionDuration: function() {
                    return this.touching || !this.reBounding && !this.touching ? 0 : this.reBounding && !this.touching ? this.reBoundingDuration : void 0
                },
                transitionTimingFunction: function() {
                    return this.reBounding ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)"
                },
                viewAreaWidth: function() {
                    return this.$refs.viewArea.offsetWidth
                },
                listWidth: function() {
                    return this.$refs.list.offsetWidth - this.viewAreaWidth
                },
                isMoveLeft: function() {
                    return this.currentX <= this.startX
                },
                isMoveRight: function() {
                    return this.currentX >= this.startX
                }
            },
            watch: {
                value: function() {}
            },
            mounted: function() {
                this.bindEvent()
            },
            methods: {
                handleTouchStart: function(t) {
                    cancelAnimationFrame(this.inertiaFrame),
                    this.lastX = t.touches[0].clientX
                },
                handleTouchMove: function(t) {
                    this.listWidth <= 0 || (t.preventDefault(),
                    t.stopPropagation(),
                    this.touching = !0,
                    this.startMoveTime = this.endMoveTime,
                    this.startX = this.lastX,
                    this.currentX = t.touches[0].clientX,
                    this.moveFellowTouch(),
                    this.endMoveTime = t.timeStamp)
                },
                handleTouchEnd: function(t) {
                    if (this.touching = !1,
                    this.checkReboundX())
                        cancelAnimationFrame(this.inertiaFrame);
                    else {
                        var e = t.timeStamp - this.endMoveTime
                          , i = this.endMoveTime - this.startMoveTime;
                        if (e > 100)
                            return;
                        this.speed = (this.lastX - this.startX) / i,
                        this.acceleration = this.speed / this.sensitivity,
                        this.frameStartTime = (new Date).getTime(),
                        this.inertiaFrame = requestAnimationFrame(this.moveByInertia)
                    }
                },
                checkReboundX: function() {
                    return this.reBounding = !1,
                    this.translateX > 0 ? (this.reBounding = !0,
                    this.translateX = 0) : this.translateX < -this.listWidth && (this.reBounding = !0,
                    this.translateX = -this.listWidth),
                    0 === this.translateX || this.translateX === -this.listWidth
                },
                bindEvent: function() {
                    this.$el.addEventListener("touchstart", this.handleTouchStart, !1),
                    this.$el.addEventListener("touchmove", this.handleTouchMove, !1),
                    this.$el.addEventListener("touchend", this.handleTouchEnd, !1)
                },
                moveFellowTouch: function() {
                    this.isMoveLeft ? this.translateX <= 0 && this.translateX + this.listWidth > 0 || this.translateX > 0 ? this.translateX += this.currentX - this.lastX : this.translateX + this.listWidth <= 0 && (this.translateX += this.additionalX * (this.currentX - this.lastX) / (this.viewAreaWidth + Math.abs(this.translateX + this.listWidth))) : this.translateX >= 0 ? this.translateX += this.additionalX * (this.currentX - this.lastX) / (this.viewAreaWidth + this.translateX) : (this.translateX <= 0 && this.translateX + this.listWidth >= 0 || this.translateX + this.listWidth <= 0) && (this.translateX += this.currentX - this.lastX),
                    this.lastX = this.currentX
                },
                moveByInertia: function() {
                    this.frameEndTime = (new Date).getTime(),
                    this.frameTime = this.frameEndTime - this.frameStartTime,
                    this.isMoveLeft ? this.translateX <= -this.listWidth ? (this.acceleration *= (this.reBoundExponent + Math.abs(this.translateX + this.listWidth)) / this.reBoundExponent,
                    this.speed = Math.min(this.speed - this.acceleration, 0)) : this.speed = Math.min(this.speed - this.acceleration * this.frameTime, 0) : this.isMoveRight && (this.translateX >= 0 ? (this.acceleration *= (this.reBoundExponent + this.translateX) / this.reBoundExponent,
                    this.speed = Math.max(this.speed - this.acceleration, 0)) : this.speed = Math.max(this.speed - this.acceleration * this.frameTime, 0)),
                    this.translateX += this.speed * this.frameTime / 2,
                    Math.abs(this.speed) <= this.zeroSpeed ? this.checkReboundX() : (this.frameStartTime = this.frameEndTime,
                    this.inertiaFrame = requestAnimationFrame(this.moveByInertia))
                },
                checkSelectedChild: function(t) {
                    return t.id === this.value
                },
                checkPosition: function() {
                    if (!this.fixBottom && this.$children.length) {
                        var t = this.$children.find(this.checkSelectedChild).$el
                          , e = t.offsetLeft
                          , i = (this.viewAreaWidth - t.offsetWidth) / 2
                          , n = 0
                          , r = Math.abs(this.translateX);
                        if (e <= r + i)
                            n = i - (e + this.translateX);
                        else
                            n = -(e - r - i);
                        var a = n + this.translateX;
                        a > 0 && (a = 0),
                        a < -this.listWidth && (a = -this.listWidth),
                        this.reBounding = !0,
                        this.translateX = a
                    }
                }
            }
        }
          , r = {
            render: function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                    ref: "viewArea",
                    staticClass: "zx-tab"
                }, [e("div", {
                    ref: "list",
                    staticClass: "zx-tab-list",
                    style: this.style
                }, [this._t("default")], 2)])
            },
            staticRenderFns: []
        };
        var a = i("VU/8")(n, r, !1, function(t) {
            i("6atI")
        }, null, null);
        e.a = a.exports
    },
    vobP: function(t, e) {},
    vonB: function(t, e) {},
    vtf7: function(t, e) {},
    vzQt: function(t, e) {},
    y4zF: function(t, e) {},
    zpBo: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAYAAACWJGMLAAAHwElEQVRoQ+2Zf2xdZRnHv8977jm3rm4M3JYMFxEBAYFm0SVupD23dy4MujX03m4VZpzBgWLBiUYXgzGpCRINIW6STcAhwjI6cb233bSmztHe005Bx9BtLiaAEhwJOtPJtu72/Hofc+7actuee+85t7dlNL5/3vd53+f7Oc9znvO87yXMwkGzkAn/h/KiGulN1QoFrWDoABYCOAWCIV3scOLJgYsh8sEj1dsbiYr/bmPCV8A8eR0RE+Mnppz/NcTjznsJFxgqmklvZ3BrKbEE2mHGEveVspvO+UBQF1KODN8ITVRHxNJl/b1MxUBQmpF+Dsx3Bn66hHZLT24IbF9hw2BQmdRJAB8O4fstK5ZcEsK+oqZBoUwAWnDPZFqxRFVw+8paBoWahZGaje/UrKx+XsbPuu9U7jWeoY5Cy6SuJ4GrhKK+kr258a1ySkigQpG/8UgqtoI5r/cjQ7o8td7v8BNq9PzCHQzaNPKRN1nQZrsu8WRYsNBQvg56eqrVOeevszn6JvSGU2FFeFmgidO/AJCcsNYSkq4djifeCLPnlKE0o3Mds3yKgHkAeY3sD6xY4ruBRXhAyuAeMDX7r6HPWrHE84H3A6Z2ntKMzk9AyiMgRPOdMuOLdn3yaS3TeZOiKoMF341chAb3AIWAACb6tK0n/jgzUG1tQovXeOenFRMdMvBORHFqsvYHzqvCPk6gIxD8tHW2ah8aGrzuJFd4NOV0OxjrighOW7HkxJQsyVd2+kX7UpuZsK2QByb6nV2XuEUzOu8E5G7PjoFBQfSclPJZAm0BFQZioNeuVtdiWeP5khQTDMqCqjrUcYXr0HECPljMIQH3m7Hkdi2T+hWANUHFTQXI81EWlGakfgPGraVEMnhIqJGlwnSGHZF7CJeUWkOEPnOOuqacCI3uHRpK7ev4PBE9W0rcmAPCIbPuqK5majYRoeg3h4j6zOzZtVi9cSjo/n524aCM7oUqmycIvCCMUyJsMfXkI2pf+gARr/IVQsiY2XNrpgoUOv20vlQ7CHcUELWTgQ1gzPGZH4Yilwmic65DxwiYm29DFQQKBRXtT61lif0FInTUqj61LDq0qJXBW31tCC9b7qXLVeXMXcRuXhpSjzU8pxmrV08p5cY9pEBpdPgJVRta8BpAH5lkz3A5oiy3a28/7PVsqpE+SEDcf19qs2KJ76n96U+B+ZMKiX8MH/zzC2hrk4F0BDQK9E5FMqmVAjjoHwHaZemJjaNzVb3pj7qCj05MsZF5m0ldbuuNRwLqK8usAlDISpcanHiib1SBanTeTSx/WkDRGwy02QucdtzQYpWlusSiQFDo7o5q1cPHAFzjtx8DZyBopV2XeHl0Xsukfw1wQxH/b4NohwX7cegt4Tv7IhsHg/Kukoy9Ncyij4BLC4CdIil1K77ub7n537ZfrlZFjxHjsqIPlpAlid0ckVut2nV/rUTkAkN5ziKH9q8gxzpAoOoCzv9pOc4KfKYld2LV+js3QF7o+wIMBnCABH5k1iZ7QF6rWN4IBeW5iBqdq5nlvoL3gIS9lp5c/24apn4O4Ash5R1nyffY8eYXQ67LmYeGuhCBrvWQbjsAZaJTBs7aseS8sd/b2oS6smYTAd8E4+NBReaOL5JvzMabvTvHUKMsKM+Dmkl/icCP+zyYv1ux5FXjVIz89RPNdKyVJB4goniQPxuIaKupJ74eiqjcSI06iRqpbzHjh/n7MOhuO5Z4apyQF7vnaZa5G+CdVt3R/epAzU3E9MDInw7jTs3567xo2dJZgnjLuTBgZUdqDGwgfRtLvgsQIIldZn2TbyulZVLPANgIwusEbDdN52fVc6NVtuW2MnAvMRb5CWfm++z65h0zChXUWVV/5yop5YFRewbOCeZdzN636p3XNHFJCsBtk/YjOmHpiRuC+im7UIRxMGbLLLT+9EkwFo9bT8QM/jITvSok9/rtLYlWOXrCv03zWTDl9AsKqA50LSPH3QPC+CKSu7ug/9hy/mJNnH4FwI2To4UuS082BfU17VBegysj+D6Y7wBDFBQm5fUsKEYgr6JOHK7Q6OrhFcEuNacPqjc9X1PoQbD8KoBSf8ANW4qyCFXCVYeckwSe3IoRHrH05JYg0ZoWKG2gK8mu+yQBHwoiAhDftmJN3qcBqpF6lBjfmLiOCYN2xFmCm1uypfasOFTu3ZHuS0VTbVQV0etg3mLFkl7ly42q/o6PSYlXAZqUqkziHltv2jnzUEb6UWKe9KTzhTDYu9R8yHzb2Y6WyWcqLZPeB3CjT8H4i6Unl848VCa1jYDNvo4ZJgQesyj7MOo+d7qQuGgmfQuDe3zLO5SYE7vdKAZW+fQ7lF5KjvwDQPnFgUG0R6h4MFAFY5BmpE4AuG5ytMQvLb2pZUahLrwXXvfgPsREVxLTYWbZZtc3/6lU2uTPq0b6fmJ+zGeNo0i+slj3XvFIhRFe1Haga64q5UlifvcYM1Zg8LClJ79TaP3FC5U7kKZ/zMzed27cYODf9r+cy9HS4vqBXdxQLzx/LUciJ/w+D4qiXpGtbXzzfQflCdYy6W6Ax3XvTHTGrrMvA70PI+VBRTN7r5EQL+XdYklm3GvXJwvdK5Z3R1GxYhB0I6NjsUbKRma5iNntcGLrfz/jJT2o1umyu6gLRbnQ/wO4OBxn8jjtIwAAAABJRU5ErkJggg=="
    }
});
//# sourceMappingURL=2.js.map
