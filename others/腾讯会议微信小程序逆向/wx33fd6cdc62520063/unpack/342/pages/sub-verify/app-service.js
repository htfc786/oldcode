var __wxAppConsole__ = console;
definePlugin("plugin://wxa16657d57059e0f0", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram, WXWebAssembly, __wxCodeSpace__) {
    var __vd_version_info__ = __vd_version_info__ || {};
    if (typeof console === 'undefined') {
        console = __wxAppConsole__;
    };
    /*v0.5vv_20211229_syb_scopedata*/
    global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
    global.__wcc_version_info__ = {
        "customComponents": true,
        "fixZeroRpx": true,
        "propValueDeepCopy": false
    };
    var $gwxc
    var $gaic = {}
    $gwx_wxa16657d57059e0f0 = function(path, global) {
        if (typeof global === 'undefined') global = {};
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

        function _(a, b) {
            if (typeof(b) != 'undefined') a.children.push(b);
        }

        function _v(k) {
            if (typeof(k) != 'undefined') return {
                tag: 'virtual',
                'wxKey': k,
                children: []
            };
            return {
                tag: 'virtual',
                children: []
            };
        }

        function _n(tag) {
            $gwxc++;
            if ($gwxc >= 16000) {
                throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
            };
            return {
                tag: 'wx-' + tag,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function _p(a, b) {
            b && a.properities.push(b);
        }

        function _s(scope, env, key) {
            return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
        }

        function _wp(m) {
            console.warn("WXMLRT_$gwx_wxa16657d57059e0f0:" + m)
        }

        function _wl(tname, prefix) {
            _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
        }
        $gwn = console.warn;
        $gwl = console.log;

        function $gwh() {
            function x() {}
            x.prototype = {
                hn: function(obj, all) {
                    if (typeof(obj) == 'object') {
                        var cnt = 0;
                        var any1 = false,
                            any2 = false;
                        for (var x in obj) {
                            any1 = any1 | x === '__value__';
                            any2 = any2 | x === '__wxspec__';
                            cnt++;
                            if (cnt > 2) break;
                        }
                        return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
                    }
                    return "n";
                },
                nh: function(obj, special) {
                    return {
                        __value__: obj,
                        __wxspec__: special ? special : true
                    }
                },
                rv: function(obj) {
                    return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
                },
                hm: function(obj) {
                    if (typeof(obj) == 'object') {
                        var cnt = 0;
                        var any1 = false,
                            any2 = false;
                        for (var x in obj) {
                            any1 = any1 | x === '__value__';
                            any2 = any2 | x === '__wxspec__';
                            cnt++;
                            if (cnt > 2) break;
                        }
                        return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                    }
                    return false;
                }
            }
            return new x;
        }
        wh = $gwh();

        function $gstack(s) {
            var tmp = s.split('\n ' + ' ' + ' ' + ' ');
            for (var i = 0; i < tmp.length; ++i) {
                if (0 == i) continue;
                if (")" === tmp[i][tmp[i].length - 1])
                    tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
                else
                    tmp[i] = "at anonymous function";
            }
            return tmp.join('\n ' + ' ' + ' ' + ' ');
        }

        function $gwrt(should_pass_type_info) {
            function ArithmeticEv(ops, e, s, g, o) {
                var _f = false;
                var rop = ops[0][1];
                var _a, _b, _c, _d, _aa, _bb;
                switch (rop) {
                    case '?:':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '&&':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '||':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '+':
                    case '*':
                    case '/':
                    case '%':
                    case '|':
                    case '^':
                    case '&':
                    case '===':
                    case '==':
                    case '!=':
                    case '!==':
                    case '>=':
                    case '<=':
                    case '>':
                    case '<':
                    case '<<':
                    case '>>':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _b = rev(ops[2], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                        switch (rop) {
                            case '+':
                                _d = wh.rv(_a) + wh.rv(_b);
                                break;
                            case '*':
                                _d = wh.rv(_a) * wh.rv(_b);
                                break;
                            case '/':
                                _d = wh.rv(_a) / wh.rv(_b);
                                break;
                            case '%':
                                _d = wh.rv(_a) % wh.rv(_b);
                                break;
                            case '|':
                                _d = wh.rv(_a) | wh.rv(_b);
                                break;
                            case '^':
                                _d = wh.rv(_a) ^ wh.rv(_b);
                                break;
                            case '&':
                                _d = wh.rv(_a) & wh.rv(_b);
                                break;
                            case '===':
                                _d = wh.rv(_a) === wh.rv(_b);
                                break;
                            case '==':
                                _d = wh.rv(_a) == wh.rv(_b);
                                break;
                            case '!=':
                                _d = wh.rv(_a) != wh.rv(_b);
                                break;
                            case '!==':
                                _d = wh.rv(_a) !== wh.rv(_b);
                                break;
                            case '>=':
                                _d = wh.rv(_a) >= wh.rv(_b);
                                break;
                            case '<=':
                                _d = wh.rv(_a) <= wh.rv(_b);
                                break;
                            case '>':
                                _d = wh.rv(_a) > wh.rv(_b);
                                break;
                            case '<':
                                _d = wh.rv(_a) < wh.rv(_b);
                                break;
                            case '<<':
                                _d = wh.rv(_a) << wh.rv(_b);
                                break;
                            case '>>':
                                _d = wh.rv(_a) >> wh.rv(_b);
                                break;
                            default:
                                break;
                        }
                        return _c ? wh.nh(_d, "c") : _d;
                        break;
                    case '-':
                        _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                        _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                        _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                        return _c ? wh.nh(_d, "c") : _d;
                        break;
                    case '!':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) == 'h');
                        _d = !wh.rv(_a);
                        return _c ? wh.nh(_d, "c") : _d;
                    case '~':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) == 'h');
                        _d = ~wh.rv(_a);
                        return _c ? wh.nh(_d, "c") : _d;
                    default:
                        $gwn('unrecognized op' + rop);
                }
            }

            function rev(ops, e, s, g, o, newap) {
                var op = ops[0];
                var _f = false;
                if (typeof newap !== "undefined") o.ap = newap;
                if (typeof(op) === 'object') {
                    var vop = op[0];
                    var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                    switch (vop) {
                        case 2:
                            return ArithmeticEv(ops, e, s, g, o);
                            break;
                        case 4:
                            return rev(ops[1], e, s, g, o, _f);
                            break;
                        case 5:
                            switch (ops.length) {
                                case 2:
                                    _a = rev(ops[1], e, s, g, o, _f);
                                    return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                    return [_a];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    _a = rev(ops[1], e, s, g, o, _f);
                                    _b = rev(ops[2], e, s, g, o, _f);
                                    _a.push(
                                        should_pass_type_info ?
                                        _b :
                                        wh.rv(_b)
                                    );
                                    return _a;
                                    break;
                            }
                            break;
                        case 6:
                            _a = rev(ops[1], e, s, g, o);
                            var ap = o.ap;
                            _ta = wh.hn(_a) === 'h';
                            _aa = _ta ? wh.rv(_a) : _a;
                            o.is_affected |= _ta;
                            if (should_pass_type_info) {
                                if (_aa === null || typeof(_aa) === 'undefined') {
                                    return _ta ? wh.nh(undefined, 'e') : undefined;
                                }
                                _b = rev(ops[2], e, s, g, o, _f);
                                _tb = wh.hn(_b) === 'h';
                                _bb = _tb ? wh.rv(_b) : _b;
                                o.ap = ap;
                                o.is_affected |= _tb;
                                if (_bb === null || typeof(_bb) === 'undefined' ||
                                    _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                    return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                                }
                                _d = _aa[_bb];
                                if (typeof _d === 'function' && !ap) _d = undefined;
                                _td = wh.hn(_d) === 'h';
                                o.is_affected |= _td;
                                return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                            } else {
                                if (_aa === null || typeof(_aa) === 'undefined') {
                                    return undefined;
                                }
                                _b = rev(ops[2], e, s, g, o, _f);
                                _tb = wh.hn(_b) === 'h';
                                _bb = _tb ? wh.rv(_b) : _b;
                                o.ap = ap;
                                o.is_affected |= _tb;
                                if (_bb === null || typeof(_bb) === 'undefined' ||
                                    _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                    return undefined;
                                }
                                _d = _aa[_bb];
                                if (typeof _d === 'function' && !ap) _d = undefined;
                                _td = wh.hn(_d) === 'h';
                                o.is_affected |= _td;
                                return _td ? wh.rv(_d) : _d;
                            }
                        case 7:
                            switch (ops[1][0]) {
                                case 11:
                                    o.is_affected |= wh.hn(g) === 'h';
                                    return g;
                                case 3:
                                    _s = wh.rv(s);
                                    _e = wh.rv(e);
                                    _b = ops[1][1];
                                    if (g && g.f && g.f.hasOwnProperty(_b)) {
                                        _a = g.f;
                                        o.ap = true;
                                    } else {
                                        _a = _s && _s.hasOwnProperty(_b) ?
                                            s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                                    }
                                    if (should_pass_type_info) {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                            return _d;
                                        }
                                    } else {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            return wh.rv(_d);
                                        }
                                    }
                                    return undefined;
                            }
                            break;
                        case 8:
                            _a = {};
                            _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                            return _a;
                            break;
                        case 9:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _b = rev(ops[2], e, s, g, o, _f);

                            function merge(_a, _b, _ow) {
                                var ka, _bbk;
                                _ta = wh.hn(_a) === 'h';
                                _tb = wh.hn(_b) === 'h';
                                _aa = wh.rv(_a);
                                _bb = wh.rv(_b);
                                for (var k in _bb) {
                                    if (_ow || !_aa.hasOwnProperty(k)) {
                                        _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                    }
                                }
                                return _a;
                            }
                            var _c = _a
                            var _ow = true
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                _a = _b
                                _b = _c
                                _ow = false
                            }
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                var _r = {}
                                return merge(merge(_r, _a, _ow), _b, _ow);
                            } else
                                return merge(_a, _b, _ow);
                            break;
                        case 10:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _a = should_pass_type_info ? _a : wh.rv(_a);
                            return _a;
                            break;
                        case 12:
                            var _r;
                            _a = rev(ops[1], e, s, g, o);
                            if (!o.ap) {
                                return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                            }
                            var ap = o.ap;
                            _b = rev(ops[2], e, s, g, o, _f);
                            o.ap = ap;
                            _ta = wh.hn(_a) === 'h';
                            _tb = _ca(_b);
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            snap_bb = $gdc(_bb, "nv_");
                            try {
                                _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                            } catch (e) {
                                e.message = e.message.replace(/nv_/g, "");
                                e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                                e.stack = e.stack.replace(/\snv_/g, " ");
                                e.stack = $gstack(e.stack);
                                if (g.debugInfo) {
                                    e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                                    console.error(e);
                                }
                                _r = undefined;
                            }
                            return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                    }
                } else {
                    if (op === 3 || op === 1) return ops[1];
                    else if (op === 11) {
                        var _a = '';
                        for (var i = 1; i < ops.length; i++) {
                            var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                            _a += typeof(xp) === 'undefined' ? '' : xp;
                        }
                        return _a;
                    }
                }
            }

            function wrapper(ops, e, s, g, o, newap) {
                if (ops[0] == '11182016') {
                    g.debugInfo = ops[2];
                    return rev(ops[1], e, s, g, o, newap);
                } else {
                    g.debugInfo = null;
                    return rev(ops, e, s, g, o, newap);
                }
            }
            return wrapper;
        }
        gra = $gwrt(true);
        grb = $gwrt(false);

        function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
            {
                var o = {
                    is_affected: false
                };
                var a = gra(ops, e, s, g, o);
                if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
                    console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
                }
            } {
                var o = {
                    is_affected: false
                };
                var a = grb(ops, e, s, g, o);
                if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
                    console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
                }
            }
        }

        function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
            var _n = wh.hn(to_iter) === 'n';
            var scope = wh.rv(_s);
            var has_old_item = scope.hasOwnProperty(itemname);
            var has_old_index = scope.hasOwnProperty(indexname);
            var old_item = scope[itemname];
            var old_index = scope[indexname];
            var full = Object.prototype.toString.call(wh.rv(to_iter));
            var type = full[8];
            if (type === 'N' && full[10] === 'l') type = 'X';
            var _y;
            if (_n) {
                if (type === 'A') {
                    var r_iter_item;
                    for (var i = 0; i < to_iter.length; i++) {
                        scope[itemname] = to_iter[i];
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        r_iter_item = wh.rv(to_iter[i]);
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'O') {
                    var i = 0;
                    var r_iter_item;
                    for (var k in to_iter) {
                        scope[itemname] = to_iter[k];
                        scope[indexname] = _n ? k : wh.nh(k, 'h');
                        r_iter_item = wh.rv(to_iter[k]);
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                        i++;
                    }
                } else if (type === 'S') {
                    for (var i = 0; i < to_iter.length; i++) {
                        scope[itemname] = to_iter[i];
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(to_iter[i] + i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'N') {
                    for (var i = 0; i < to_iter; i++) {
                        scope[itemname] = i;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else {}
            } else {
                var r_to_iter = wh.rv(to_iter);
                var r_iter_item, iter_item;
                if (type === 'A') {
                    for (var i = 0; i < r_to_iter.length; i++) {
                        iter_item = r_to_iter[i];
                        iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                        r_iter_item = wh.rv(iter_item);
                        scope[itemname] = iter_item
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'O') {
                    var i = 0;
                    for (var k in r_to_iter) {
                        iter_item = r_to_iter[k];
                        iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                        r_iter_item = wh.rv(iter_item);
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? k : wh.nh(k, 'h');
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                        i++
                    }
                } else if (type === 'S') {
                    for (var i = 0; i < r_to_iter.length; i++) {
                        iter_item = wh.nh(r_to_iter[i], 'h');
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(to_iter[i] + i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'N') {
                    for (var i = 0; i < r_to_iter; i++) {
                        iter_item = wh.nh(i, 'h');
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else {}
            }
            if (has_old_item) {
                scope[itemname] = old_item;
            } else {
                delete scope[itemname];
            }
            if (has_old_index) {
                scope[indexname] = old_index;
            } else {
                delete scope[indexname];
            }
        }

        function _ca(o) {
            if (wh.hn(o) == 'h') return true;
            if (typeof o !== "object") return false;
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    if (_ca(o[i])) return true;
                }
            }
            return false;
        }

        function _da(node, attrname, opindex, raw, o) {
            var isaffected = false;
            var value = $gdc(raw, "", 2);
            if (o.ap && value && value.constructor === Function) {
                attrname = "$wxs:" + attrname;
                node.attr["$gdc"] = $gdc;
            }
            if (o.is_affected || _ca(raw)) {
                node.n.push(attrname);
                node.raw[attrname] = raw;
            }
            node.attr[attrname] = value;
        }

        function _r(node, attrname, opindex, env, scope, global) {
            global.opindex = opindex;
            var o = {},
                _env;
            var a = grb(z[opindex], env, scope, global, o);
            _da(node, attrname, opindex, a, o);
        }

        function _rz(z, node, attrname, opindex, env, scope, global) {
            global.opindex = opindex;
            var o = {},
                _env;
            var a = grb(z[opindex], env, scope, global, o);
            _da(node, attrname, opindex, a, o);
        }

        function _o(opindex, env, scope, global) {
            global.opindex = opindex;
            var nothing = {};
            var r = grb(z[opindex], env, scope, global, nothing);
            return (r && r.constructor === Function) ? undefined : r;
        }

        function _oz(z, opindex, env, scope, global) {
            global.opindex = opindex;
            var nothing = {};
            var r = grb(z[opindex], env, scope, global, nothing);
            return (r && r.constructor === Function) ? undefined : r;
        }

        function _1(opindex, env, scope, global, o) {
            var o = o || {};
            global.opindex = opindex;
            return gra(z[opindex], env, scope, global, o);
        }

        function _1z(z, opindex, env, scope, global, o) {
            var o = o || {};
            global.opindex = opindex;
            return gra(z[opindex], env, scope, global, o);
        }

        function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
            var o = {};
            var to_iter = _1(opindex, env, scope, global);
            wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
        }

        function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
            var o = {};
            var to_iter = _1z(z, opindex, env, scope, global);
            wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
        }


        function _m(tag, attrs, generics, env, scope, global) {
            var tmp = _n(tag);
            var base = 0;
            for (var i = 0; i < attrs.length; i += 2) {
                if (base + attrs[i + 1] < 0) {
                    tmp.attr[attrs[i]] = true;
                } else {
                    _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                    if (base === 0) base = attrs[i + 1];
                }
            }
            for (var i = 0; i < generics.length; i += 2) {
                if (base + generics[i + 1] < 0) {
                    tmp.generics[generics[i]] = "";
                } else {
                    var $t = grb(z[base + generics[i + 1]], env, scope, global);
                    if ($t != "") $t = "wx-" + $t;
                    tmp.generics[generics[i]] = $t;
                    if (base === 0) base = generics[i + 1];
                }
            }
            return tmp;
        }

        function _mz(z, tag, attrs, generics, env, scope, global) {
            var tmp = _n(tag);
            var base = 0;
            for (var i = 0; i < attrs.length; i += 2) {
                if (base + attrs[i + 1] < 0) {
                    tmp.attr[attrs[i]] = true;
                } else {
                    _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                    if (base === 0) base = attrs[i + 1];
                }
            }
            for (var i = 0; i < generics.length; i += 2) {
                if (base + generics[i + 1] < 0) {
                    tmp.generics[generics[i]] = "";
                } else {
                    var $t = grb(z[base + generics[i + 1]], env, scope, global);
                    if ($t != "") $t = "wx-" + $t;
                    tmp.generics[generics[i]] = $t;
                    if (base === 0) base = generics[i + 1];
                }
            }
            return tmp;
        }

        var nf_init = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                nf_init_Object();
                nf_init_Function();
                nf_init_Array();
                nf_init_String();
                nf_init_Boolean();
                nf_init_Number();
                nf_init_Math();
                nf_init_Date();
                nf_init_RegExp();
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
        };
        var nf_init_Object = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            })
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        }
        var nf_init_Function = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            })
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        }
        var nf_init_Array = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join();
                }
            })
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(s) {
                    s = undefined == s ? ',' : s;
                    var r = "";
                    for (var i = 0; i < this.length; ++i) {
                        if (0 != i) r += s;
                        if (null == this[i] || undefined == this[i]) r += '';
                        else if (typeof this[i] == 'function') r += this[i].nv_toString();
                        else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
                        else r += this[i].toString();
                    }
                    return r;
                }
            })
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            })
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            })
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            })
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            })
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            })
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            })
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            })
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            })
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            })
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            })
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            })
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            })
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            })
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            })
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            })
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            })
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            })
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            })
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            })
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function(value) {
                    this.length = value;
                }
            });
        }
        var nf_init_String = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            })
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            })
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            })
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            })
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            })
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            })
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            })
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            })
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            })
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            })
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            })
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            })
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            })
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            })
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            })
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            })
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            })
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            })
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            })
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            })
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function(value) {
                    this.length = value;
                }
            });
        }
        var nf_init_Boolean = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            })
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            })
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        }
        var nf_init_Number = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            })
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            })
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            })
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            })
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            })
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            })
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            })
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            })
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            })
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            })
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        }
        var nf_init_Math = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            })
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            })
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            })
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            })
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            })
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            })
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            })
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            })
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            })
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            })
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            })
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            })
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            })
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            })
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            })
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            })
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            })
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            })
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            })
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            })
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            })
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            })
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            })
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            })
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            })
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        }
        var nf_init_Date = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            })
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            })
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            })
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            })
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            })
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            })
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            })
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            })
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            })
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            })
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            })
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            })
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            })
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            })
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            })
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            })
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            })
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            })
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            })
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            })
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            })
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            })
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            })
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            })
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            })
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            })
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            })
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            })
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            })
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            })
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            })
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            })
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            })
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            })
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            })
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        }
        var nf_init_RegExp = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            })
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            })
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            })
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            })
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex;
                },
                set: function(v) {
                    this.lastIndex = v;
                }
            });
        }
        nf_init();
        var nv_getDate = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Date);
            return new(Function.prototype.bind.apply(Date, args));
        }
        var nv_getRegExp = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, args));
        }
        var nv_console = {}
        nv_console.nv_log = function() {
            var res = "WXSRT:";
            for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
            console.log(res);
        }
        var nv_parseInt = parseInt,
            nv_parseFloat = parseFloat,
            nv_isNaN = isNaN,
            nv_isFinite = isFinite,
            nv_decodeURI = decodeURI,
            nv_decodeURIComponent = decodeURIComponent,
            nv_encodeURI = encodeURI,
            nv_encodeURIComponent = encodeURIComponent;

        function $gdc(o, p, r) {
            o = wh.rv(o);
            if (o === null || o === undefined) return o;
            if (typeof o === "string" || typeof o === "boolean" || typeof o === "number") return o;
            if (o.constructor === Object) {
                var copy = {};
                for (var k in o)
                    if (Object.prototype.hasOwnProperty.call(o, k))
                        if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                        else copy[p + k] = $gdc(o[k], p, r);
                return copy;
            }
            if (o.constructor === Array) {
                var copy = [];
                for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
                return copy;
            }
            if (o.constructor === Date) {
                var copy = new Date();
                copy.setTime(o.getTime());
                return copy;
            }
            if (o.constructor === RegExp) {
                var f = "";
                if (o.global) f += "g";
                if (o.ignoreCase) f += "i";
                if (o.multiline) f += "m";
                return (new RegExp(o.source, f));
            }
            if (r && typeof o === "function") {
                if (r == 1) return $gdc(o(), undefined, 2);
                if (r == 2) return o;
            }
            return null;
        }
        var nv_JSON = {}
        nv_JSON.nv_stringify = function(o) {
            JSON.stringify(o);
            return JSON.stringify($gdc(o));
        }
        nv_JSON.nv_parse = function(o) {
            if (o === undefined) return undefined;
            var t = JSON.parse(o);
            return $gdc(t, 'nv_');
        }

        function _af(p, a, r, c) {
            p.extraAttr = {
                "t_action": a,
                "t_rawid": r
            };
            if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
        }

        function _ai(i, p, e, me, r, c) {
            var x = _grp(p, e, me);
            if (x) i.push(x);
            else {
                i.push('');
                _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
            }
        }

        function _grp(p, e, me) {
            if (p[0] != '/') {
                var mepart = me.split('/');
                mepart.pop();
                var ppart = p.split('/');
                for (var i = 0; i < ppart.length; i++) {
                    if (ppart[i] == '..') mepart.pop();
                    else if (!ppart[i] || ppart[i] == '.') continue;
                    else mepart.push(ppart[i]);
                }
                p = mepart.join('/');
            }
            if (me[0] == '.' && p[0] == '/') p = '.' + p;
            if (e[p]) return p;
            if (e[p + '.wxml']) return p + '.wxml';
        }

        function _gd(p, c, e, d) {
            if (!c) return;
            if (d[p][c]) return d[p][c];
            for (var x = e[p].i.length - 1; x >= 0; x--) {
                if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
            };
            for (var x = e[p].ti.length - 1; x >= 0; x--) {
                var q = _grp(e[p].ti[x], e, p);
                if (q && d[q][c]) return d[q][c]
            }
            var ii = _gapi(e, p);
            for (var x = 0; x < ii.length; x++) {
                if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
            }
            for (var k = e[p].j.length - 1; k >= 0; k--)
                if (e[p].j[k]) {
                    for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                        var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                        if (pp && d[pp][c]) {
                            return d[pp][c]
                        }
                    }
                }
        }

        function _gapi(e, p) {
            if (!p) return [];
            if ($gaic[p]) {
                return $gaic[p]
            };
            var ret = [],
                q = [],
                h = 0,
                t = 0,
                put = {},
                visited = {};
            q.push(p);
            visited[p] = true;
            t++;
            while (h < t) {
                var a = q[h++];
                for (var i = 0; i < e[a].ic.length; i++) {
                    var nd = e[a].ic[i];
                    var np = _grp(nd, e, a);
                    if (np && !visited[np]) {
                        visited[np] = true;
                        q.push(np);
                        t++;
                    }
                }
                for (var i = 0; a != p && i < e[a].ti.length; i++) {
                    var ni = e[a].ti[i];
                    var nm = _grp(ni, e, a);
                    if (nm && !put[nm]) {
                        put[nm] = true;
                        ret.push(nm);
                    }
                }
            }
            $gaic[p] = ret;
            return ret;
        }
        var $ixc = {};

        function _ic(p, ent, me, e, s, r, gg) {
            var x = _grp(p, ent, me);
            ent[me].j.push(x);
            if (x) {
                if ($ixc[x]) {
                    _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                    return;
                }
                $ixc[x] = true;
                try {
                    ent[x].f(e, s, r, gg)
                } catch (e) {}
                $ixc[x] = false;
            } else {
                _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
            }
        }

        function _w(tn, f, line, c) {
            _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
        }

        function _ev(dom) {
            var changed = false;
            delete dom.properities;
            delete dom.n;
            if (dom.children) {
                do {
                    changed = false;
                    var newch = [];
                    for (var i = 0; i < dom.children.length; i++) {
                        var ch = dom.children[i];
                        if (ch.tag == 'virtual') {
                            changed = true;
                            for (var j = 0; ch.children && j < ch.children.length; j++) {
                                newch.push(ch.children[j]);
                            }
                        } else {
                            newch.push(ch);
                        }
                    }
                    dom.children = newch;
                } while (changed);
                for (var i = 0; i < dom.children.length; i++) {
                    _ev(dom.children[i]);
                }
            }
            return dom;
        }

        function _tsd(root) {
            if (root.tag == "wx-wx-scope") {
                root.tag = "virtual";
                root.wxCkey = "11";
                root['wxScopeData'] = root.attr['wx:scope-data'];
                delete root.n;
                delete root.raw;
                delete root.generics;
                delete root.attr;
            }
            for (var i = 0; root.children && i < root.children.length; i++) {
                _tsd(root.children[i]);
            }
            return root;
        }

        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_wxa16657d57059e0f0 || [];

        function gz$gwx_wxa16657d57059e0f0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_1) return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_1
            __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onTapClose'])
                Z([3, 'catchTouch'])
                Z([a, [3, 'agreement-dialog '],
                    [
                        [7],
                        [3, 'platform']
                    ],
                    [3, '-font']
                ])
                Z([1, false])
                Z([3, 'agreement-ext-dialog'])
                Z([1, true])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z(z[3])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_1
        }

        function gz$gwx_wxa16657d57059e0f0_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_2) return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_2
            __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'wrapperShow']
                ])
                Z([3, 'true'])
                Z([3, 'dialog'])
                Z([
                    [7],
                    [3, 'mask']
                ])
                Z([3, 'onMaskMouseMove'])
                Z([a, [3, 'weui-half-screen-dialog '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'innerShow']
                        ],
                        [1, 'weui-animate-slide-up'],
                        [1, 'weui-animate-slide-down']
                    ],
                    [3, ' '],
                    [
                        [7],
                        [3, 'extClass']
                    ]
                ])
                Z([
                    [7],
                    [3, 'showHeader']
                ])
                Z([3, 'weui-half-screen-dialog__hd'])
                Z([
                    [7],
                    [3, 'closabled']
                ])
                Z([3, 'weui-half-screen-dialog__hd__main'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'title'])
                Z([3, 'right'])
                Z([3, 'weui-half-screen-dialog__bd'])
                Z([
                    [7],
                    [3, 'desc']
                ])
                Z([3, 'desc'])
                Z([
                    [7],
                    [3, 'showFooter']
                ])
                Z([3, 'weui-half-screen-dialog__ft'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'buttons']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'buttons']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'footer'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_2
        }

        function gz$gwx_wxa16657d57059e0f0_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_3) return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_3
            __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'container msg-container '],
                    [
                        [7],
                        [3, 'platform']
                    ],
                    [3, '-font']
                ])
                Z([3, 'header'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([
                    [7],
                    [3, 'desc']
                ])
                Z([
                    [7],
                    [3, 'secondary']
                ])
                Z([
                    [7],
                    [3, 'bottomLink']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_3
        }

        function gz$gwx_wxa16657d57059e0f0_4() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_4) return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_4
            __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_4 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'container '],
                    [
                        [7],
                        [3, 'platform']
                    ],
                    [3, '-font']
                ])
                Z([3, 'onHideDialog'])
                Z([3, 'verify-dialog'])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'showAgreementDialog']
                        ]
                    ],
                    [
                        [7],
                        [3, 'showDialog']
                    ]
                ])
                Z([1, false])
                Z(z[4])
                Z([3, 'verify-dialog-desc'])
                Z(z[6])
                Z([3, 'desc'])
                Z([a, [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'startAnimate']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'opacity:0;height:'],
                                [
                                    [7],
                                    [3, 'height']
                                ]
                            ],
                            [1, ';']
                        ],
                        [1, '']
                    ],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'cgiWording']
                            ],
                            [3, 'isSysErr']
                        ],
                        [1, 'max-height:292px;'],
                        [1, '']
                    ]
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'loading']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'cgiWording']
                    ],
                    [3, 'isSysErr']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'cgiWording']
                    ],
                    [3, 'desc']
                ])
                Z([1, ''])
                Z(z[13])
                Z(z[4])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'cgiWording']
                    ],
                    [3, 'title']
                ])
                Z([3, 'error'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'showAuth']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [2, '!'],
                            [
                                [7],
                                [3, 'isQuick']
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'modelBindStatus']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'BIND_STATUS']
                                ],
                                [3, 'BIND']
                            ]
                        ]
                    ],
                    [
                        [2, '||'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'xuexinBindStatus']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'BIND_STATUS']
                                ],
                                [3, 'UNBIND']
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'xuexinBindStatus']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'BIND_STATUS']
                                ],
                                [3, 'NOT_EXIST']
                            ]
                        ]
                    ]
                ])
                Z([3, 'onTapComplementPrimary'])
                Z([3, 'onTapComplementSecondary'])
                Z([3, '该权益需前往“学信网”补充学籍验证后使用'])
                Z([
                    [7],
                    [3, 'complementMiniProgram']
                ])
                Z([3, '去验证'])
                Z([3, '暂不验证'])
                Z([3, '请补充学籍验证信息'])
                Z([3, 'info'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'bindStatus']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'BIND_STATUS']
                        ],
                        [3, 'FAIL']
                    ]
                ])
                Z([3, 'onTapFailPrimary'])
                Z([3, 'onTapFailSecondary'])
                Z(z[12])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'baseResp']
                            ],
                            [3, 'ret']
                        ],
                        [1, 180110]
                    ],
                    [
                        [7],
                        [3, 'failGraduateMiniProgram']
                    ],
                    [
                        [7],
                        [3, 'failMiniProgram']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'cgiWording']
                    ],
                    [3, 'primary']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'cgiWording']
                    ],
                    [3, 'secondary']
                ])
                Z(z[16])
                Z(z[17])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'bindStatus']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'BIND_STATUS']
                        ],
                        [3, 'BIND']
                    ]
                ])
                Z([3, 'onTapSuccessPrimary'])
                Z([3, '你的学生身份已验证'])
                Z([3, '返回'])
                Z(z[13])
                Z([3, '验证成功'])
                Z([3, 'success_circle'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'bindStatus']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'BIND_STATUS']
                        ],
                        [3, 'AUDITING']
                    ]
                ])
                Z([3, 'onTapAuditBottomLink'])
                Z([3, 'onTapAuditPrimary'])
                Z([3, '了解详情'])
                Z([
                    [7],
                    [3, 'auditMiniProgram']
                ])
                Z([3, '你的学生身份信息正在审核中'])
                Z(z[40])
                Z(z[13])
                Z([3, '审核中'])
                Z([3, 'waiting'])
                Z(z[20])
                Z(z[21])
                Z(z[23])
                Z([3, '去补充'])
                Z([3, '暂不补充'])
                Z([3, '请补充学生身份信息'])
                Z(z[27])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'authorizeInfo']
                    ],
                    [3, 'agreement']
                ])
                Z([3, 'onAgreementClose'])
                Z([3, 'onAgreementIconClose'])
                Z([
                    [7],
                    [3, 'showAgreementDialog']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'authorizeInfo']
                    ],
                    [3, 'agreementTitle']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_4);
            return __WXML_GLOBAL__.ops_cached.$gwx_wxa16657d57059e0f0_4
        }
        __WXML_GLOBAL__.ops_set.$gwx_wxa16657d57059e0f0 = z;
        __WXML_GLOBAL__.ops_init.$gwx_wxa16657d57059e0f0 = true;
        var nv_require = function() {
            var nnm = {};
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = ['./components/agreement/agreement.wxml', './components/half-screen-dialog/half-screen-dialog.wxml', './components/msg/msg.wxml', './components/verify/verify.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_wxa16657d57059e0f0_1()
            var oB = _mz(z, 'half-screen-dialog', ['bindclose', 0, 'catchtouchmove', 1, 'class', 1, 'closabled', 2, 'extClass', 3, 'maskClosable', 4, 'show', 5, 'showFooter', 6], [], e, s, gg)
            _(r, oB)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_wxa16657d57059e0f0_2()
            var oD = _v()
            _(r, oD)
            if (_oz(z, 0, e, s, gg)) {
                oD.wxVkey = 1
                var fE = _mz(z, 'view', ['ariaModal', 1, 'ariaRole', 1], [], e, s, gg)
                var cF = _v()
                _(fE, cF)
                if (_oz(z, 3, e, s, gg)) {
                    cF.wxVkey = 1
                }
                var hG = _mz(z, 'view', ['catch:touchmove', 4, 'class', 1], [], e, s, gg)
                var oH = _v()
                _(hG, oH)
                if (_oz(z, 6, e, s, gg)) {
                    oH.wxVkey = 1
                    var oJ = _n('view')
                    _rz(z, oJ, 'class', 7, e, s, gg)
                    var lK = _v()
                    _(oJ, lK)
                    if (_oz(z, 8, e, s, gg)) {
                        lK.wxVkey = 1
                    }
                    var aL = _n('view')
                    _rz(z, aL, 'class', 9, e, s, gg)
                    var tM = _v()
                    _(aL, tM)
                    if (_oz(z, 10, e, s, gg)) {
                        tM.wxVkey = 1
                    } else {
                        tM.wxVkey = 2
                        var eN = _n('slot')
                        _rz(z, eN, 'name', 11, e, s, gg)
                        _(tM, eN)
                    }
                    tM.wxXCkey = 1
                    _(oJ, aL)
                    var bO = _n('slot')
                    _rz(z, bO, 'name', 12, e, s, gg)
                    _(oJ, bO)
                    lK.wxXCkey = 1
                    _(oH, oJ)
                }
                var oP = _n('view')
                _rz(z, oP, 'class', 13, e, s, gg)
                var xQ = _v()
                _(oP, xQ)
                if (_oz(z, 14, e, s, gg)) {
                    xQ.wxVkey = 1
                } else {
                    xQ.wxVkey = 2
                    var oR = _n('slot')
                    _rz(z, oR, 'name', 15, e, s, gg)
                    _(xQ, oR)
                }
                xQ.wxXCkey = 1
                _(hG, oP)
                var cI = _v()
                _(hG, cI)
                if (_oz(z, 16, e, s, gg)) {
                    cI.wxVkey = 1
                    var fS = _n('view')
                    _rz(z, fS, 'class', 17, e, s, gg)
                    var cT = _v()
                    _(fS, cT)
                    if (_oz(z, 18, e, s, gg)) {
                        cT.wxVkey = 1
                    } else {
                        cT.wxVkey = 2
                        var hU = _n('slot')
                        _rz(z, hU, 'name', 19, e, s, gg)
                        _(cT, hU)
                    }
                    cT.wxXCkey = 1
                    _(cI, fS)
                }
                oH.wxXCkey = 1
                cI.wxXCkey = 1
                _(fE, hG)
                cF.wxXCkey = 1
                _(oD, fE)
            }
            oD.wxXCkey = 1
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[2]] = {}
        var m2 = function(e, s, r, gg) {
            var z = gz$gwx_wxa16657d57059e0f0_3()
            var cW = _n('view')
            _rz(z, cW, 'class', 0, e, s, gg)
            var aZ = _n('view')
            _rz(z, aZ, 'class', 1, e, s, gg)
            var t1 = _v()
            _(aZ, t1)
            if (_oz(z, 2, e, s, gg)) {
                t1.wxVkey = 1
            }
            var e2 = _v()
            _(aZ, e2)
            if (_oz(z, 3, e, s, gg)) {
                e2.wxVkey = 1
            }
            t1.wxXCkey = 1
            e2.wxXCkey = 1
            _(cW, aZ)
            var oX = _v()
            _(cW, oX)
            if (_oz(z, 4, e, s, gg)) {
                oX.wxVkey = 1
            }
            var lY = _v()
            _(cW, lY)
            if (_oz(z, 5, e, s, gg)) {
                lY.wxVkey = 1
            }
            oX.wxXCkey = 1
            lY.wxXCkey = 1
            _(r, cW)
            return r
        }
        e_[x[2]] = {
            f: m2,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[3]] = {}
        var m3 = function(e, s, r, gg) {
            var z = gz$gwx_wxa16657d57059e0f0_4()
            var o4 = _n('view')
            _rz(z, o4, 'class', 0, e, s, gg)
            var x5 = _mz(z, 'half-screen-dialog', ['bind:close', 1, 'extClass', 1, 'show', 2, 'showFooter', 3, 'showHeader', 4], [], e, s, gg)
            var o6 = _mz(z, 'view', ['class', 6, 'id', 1, 'slot', 2, 'style', 3], [], e, s, gg)
            var f7 = _v()
            _(o6, f7)
            if (_oz(z, 10, e, s, gg)) {
                f7.wxVkey = 1
                var c8 = _v()
                _(f7, c8)
                if (_oz(z, 11, e, s, gg)) {
                    c8.wxVkey = 1
                    var h9 = _mz(z, 'mp-msg', ['desc', 12, 'primary', 1, 'secondary', 2, 'showBottom', 3, 'title', 4, 'type', 5], [], e, s, gg)
                    _(c8, h9)
                } else if (_oz(z, 18, e, s, gg)) {
                    c8.wxVkey = 2
                    var o0 = _v()
                    _(c8, o0)
                    if (_oz(z, 19, e, s, gg)) {
                        o0.wxVkey = 1
                        var cAB = _mz(z, 'mp-msg', ['bind:tapPrimary', 20, 'bind:tapSecondary', 1, 'desc', 2, 'miniProgram', 3, 'primary', 4, 'secondary', 5, 'title', 6, 'type', 7], [], e, s, gg)
                        _(o0, cAB)
                    } else if (_oz(z, 28, e, s, gg)) {
                        o0.wxVkey = 2
                        var oBB = _mz(z, 'mp-msg', ['bind:tapPrimary', 29, 'bind:tapSecondary', 1, 'desc', 2, 'miniProgram', 3, 'primary', 4, 'secondary', 5, 'title', 6, 'type', 7], [], e, s, gg)
                        _(o0, oBB)
                    } else if (_oz(z, 37, e, s, gg)) {
                        o0.wxVkey = 3
                        var lCB = _mz(z, 'mp-msg', ['bind:tapPrimary', 38, 'desc', 1, 'primary', 2, 'secondary', 3, 'title', 4, 'type', 5], [], e, s, gg)
                        _(o0, lCB)
                    } else if (_oz(z, 44, e, s, gg)) {
                        o0.wxVkey = 4
                        var aDB = _mz(z, 'mp-msg', ['bind:tapBottom', 45, 'bind:tapPrimary', 1, 'bottomLink', 2, 'bottomMiniProgram', 3, 'desc', 4, 'primary', 5, 'secondary', 6, 'title', 7, 'type', 8], [], e, s, gg)
                        _(o0, aDB)
                    } else {
                        o0.wxVkey = 5
                        var tEB = _mz(z, 'mp-msg', ['bind:tapPrimary', 54, 'bind:tapSecondary', 1, 'miniProgram', 2, 'primary', 3, 'secondary', 4, 'title', 5, 'type', 6], [], e, s, gg)
                        _(o0, tEB)
                    }
                    o0.wxXCkey = 1
                    o0.wxXCkey = 3
                    o0.wxXCkey = 3
                    o0.wxXCkey = 3
                    o0.wxXCkey = 3
                    o0.wxXCkey = 3
                } else {
                    c8.wxVkey = 3
                }
                c8.wxXCkey = 1
                c8.wxXCkey = 3
                c8.wxXCkey = 3
            } else {
                f7.wxVkey = 2
            }
            f7.wxXCkey = 1
            f7.wxXCkey = 3
            _(x5, o6)
            _(o4, x5)
            var eFB = _mz(z, 'agreement', ['agreement', 61, 'bind:close', 1, 'bind:iconClose', 2, 'show', 3, 'title', 4], [], e, s, gg)
            _(o4, eFB)
            _(r, o4)
            return r
        }
        e_[x[3]] = {
            f: m3,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = []
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                }
                return root;
            }
        }
    }

    global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/agreement/agreement.json'] = {
        "component": true,
        "usingComponents": {
            "half-screen-dialog": "../half-screen-dialog/half-screen-dialog"
        }
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/agreement/agreement.wxml'] = [$gwx_wxa16657d57059e0f0, './components/agreement/agreement.wxml'];
    else global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/agreement/agreement.wxml'] = $gwx_wxa16657d57059e0f0('./components/agreement/agreement.wxml');
    global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/half-screen-dialog/half-screen-dialog.json'] = {
        "component": true,
        "usingComponents": {}
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/half-screen-dialog/half-screen-dialog.wxml'] = [$gwx_wxa16657d57059e0f0, './components/half-screen-dialog/half-screen-dialog.wxml'];
    else global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/half-screen-dialog/half-screen-dialog.wxml'] = $gwx_wxa16657d57059e0f0('./components/half-screen-dialog/half-screen-dialog.wxml');
    global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/msg/msg.json'] = {
        "component": true,
        "usingComponents": {}
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/msg/msg.wxml'] = [$gwx_wxa16657d57059e0f0, './components/msg/msg.wxml'];
    else global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/msg/msg.wxml'] = $gwx_wxa16657d57059e0f0('./components/msg/msg.wxml');
    global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/verify/verify.json'] = {
        "component": true,
        "usingComponents": {
            "half-screen-dialog": "../half-screen-dialog/half-screen-dialog",
            "mp-msg": "../msg/msg",
            "agreement": "../agreement/agreement"
        }
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/verify/verify.wxml'] = [$gwx_wxa16657d57059e0f0, './components/verify/verify.wxml'];
    else global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/components/verify/verify.wxml'] = $gwx_wxa16657d57059e0f0('./components/verify/verify.wxml');
    global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/plugin.json'] = {
        "publicComponents": {
            "verify": "components/verify/verify"
        },
        "main": "main.js"
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/plugin.wxml'] = [$gwx_wxa16657d57059e0f0, './plugin.wxml'];
    else global.__wxAppCode__['plugin-private://wxa16657d57059e0f0/plugin.wxml'] = $gwx_wxa16657d57059e0f0('./plugin.wxml');

    define("_commons/0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = function(e) {
            var t = {},
                r = {
                    0: 0
                };

            function n(r) {
                if (t[r]) return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, function(t) {
                            return e[t]
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
                }, n.p = "", n.oe = function(e) {
                    process.nextTick((function() {
                        throw e
                    }))
                },
                function(t) {
                    for (var o, u, l, f, i, c, p, a, s, d, y, b = 0, g = 0, v = []; b < t.length; ++b) {
                        for (f = (l = t[b]).ids, c = l.modules, p = l.entries || [], o = 0; o < f.length; o++) i = f[o], r[i] = 0;
                        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
                        v.push.apply(v, p || [])
                    }
                    for (; g < v.length; g++) {
                        for (s = v[g], d = !0, o = 1; o < s.length; o++) y = s[o], 0 !== r[y] && (d = !1);
                        d && (v.splice(g--, 1), u = n(n.s = s[0]))
                    }
                    return u
                }
        }([]);
    });
    define("_commons/1.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = {
            ids: [1],
            modules: [function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return r
                })), n.d(t, "d", (function() {
                    return o
                })), n.d(t, "e", (function() {
                    return c
                })), n.d(t, "f", (function() {
                    return i
                })), n.d(t, "g", (function() {
                    return a
                })), n.d(t, "h", (function() {
                    return u
                })), n.d(t, "b", (function() {
                    return s
                })), n.d(t, "c", (function() {
                    return f
                }));
                var r = "https://mp.weixin.qq.com",
                    o = "https://oa.m.tencent.com",
                    c = {
                        API_REQUEST_FAIL: -1024,
                        REQUEST_TIMEOUT: -1025,
                        CGI_DATA_ERROR: -1026,
                        REQUEST_NETWORK_FAIL: -1027,
                        API_LOGIN_FAIL: -1028,
                        CGI_AUTH_FAILED: 3,
                        CGI_AUTH_FAILED_23: 23,
                        SESSION_EXPIRE: 200003,
                        PASS_TICKET_AUTH_FAILED: 1200,
                        CGI_AUTH_FAILED_1201: 1201,
                        CGI_AUTH_FAILED_1202: 1202
                    },
                    i = {
                        SESSION: "app-session",
                        SYSTEM_INFO: "system-info",
                        GEO: "geo-location",
                        GEO_CITY: "geo-city",
                        CGI: "CGI:",
                        TIMESTAMP: "timestamp"
                    },
                    a = "X-WEAPP-BIZ-VERSION",
                    u = "X-WECHAT-UIN",
                    s = "CONTENT-TYPE",
                    f = {
                        FORM: "application/x-www-form-urlencoded",
                        JSON: "application/json"
                    }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "d", (function() {
                    return C
                })), n.d(t, "b", (function() {
                    return Z
                })), n.d(t, "f", (function() {
                    return re
                })), n.d(t, "c", (function() {
                    return Y
                })), n.d(t, "h", (function() {
                    return de
                })), n.d(t, "i", (function() {
                    return le
                })), n.d(t, "a", (function() {
                    return ye
                })), n.d(t, "e", (function() {
                    return ve
                })), n.d(t, "g", (function() {
                    return we
                }));
                var r = n(3),
                    o = n.n(r),
                    c = n(8),
                    i = n.n(c),
                    a = n(11),
                    u = n(4),
                    s = n(7),
                    f = n(9),
                    l = n(13),
                    p = n(12),
                    d = n(2),
                    g = n(10),
                    y = n(14);

                function v(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function O(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var b = 3e3,
                    m = null,
                    w = !1,
                    h = [],
                    P = "",
                    j = null,
                    S = null,
                    I = {},
                    x = null,
                    _ = "",
                    E = null,
                    k = null,
                    T = null,
                    A = null,
                    D = null,
                    N = function(e, t) {
                        return void 0 === t ? e : t
                    },
                    C = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        P = N(P, e.uin), b = N(b, e.reportDelay), m = N(m, e.sample), j = N(j, e.tableId), S = N(S, e.monitorId), void 0 !== e.monitor && (I = O(O({}, I), e.monitor)), x = N(x, e.badjsId), _ = N(_, e.streamInterface), T = N(T, e.serviceType), E = N(E, e.retCodeModule), k = N(k, e.retCodeDomain), A = "mmbizintp:".concat(_), void 0 !== e.uin || P || (P = u.b.uin || u.b.openId || ""), "function" == typeof e.monitorFunction && (D = e.monitorFunction)
                    },
                    R = function(e, t) {
                        var n = 0,
                            r = h.length;
                        if (t = t || 2e3, h[0]) {
                            for (var o = 0; o < r; o++) {
                                var c = h.shift();
                                c && (c.isTicking = !1, c((function() {
                                    ++n === r && e && !e.isCalled && (e.isCalled = !0, e())
                                })))
                            }
                            e && setTimeout((function() {
                                e.isCalled || (e.isCalled = !0, e())
                            }), t)
                        } else e && e();
                        w = !1
                    },
                    F = function(e) {
                        e.isTicking || (e.isTicking = !0, h.push(e)), w || (setTimeout(R, b), w = !0)
                    },
                    L = function() {
                        return d.a.plugin ? Object(g.e)() : s.a.codeType ? f.a.login().then((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            console.debug("wx.login res:", e);
                            var t = e.code;
                            return t ? Promise.resolve(t) : Promise.reject(e)
                        })) : Promise.reject(new l.a(y.a.NO_CODE_TYPE))
                    },
                    M = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.url) return m > 0 && 1 !== m && -1 === ["idkey", "monitor"].indexOf(e.type) && Math.random() > m ? Promise.resolve() : new Promise((function(t, n) {
                            var r = e.method || "GET",
                                o = O({}, e.data);

                            function c(c) {
                                c && c.pass_ticket ? e.url = Object(p.g)(e.url, Object(p.e)(c)) : c ? e.url = Object(p.g)(e.url, "codetype=".concat(s.a.codeType, "&code=").concat(c)) : d.a.plugin ? e.url = Object(p.g)(e.url, "pass_ticket=".concat(u.b.pass_ticket || "")) : e.url = Object(p.g)(e.url, "wxa_session=".concat(u.b.wxaSession || "")), wx.request({
                                    method: r,
                                    url: e.url,
                                    data: o,
                                    success: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            r = e.data || {},
                                            o = r.base_resp,
                                            c = void 0 === o ? {} : o,
                                            i = c.ret;
                                        void 0 === i || 0 === i ? (Object(u.e)(Object(a.camelizeKeys)(c)), t(e)) : n(e)
                                    },
                                    fail: function(e) {
                                        n(e)
                                    }
                                })
                            }
                            "GET" === r && (o._ts = Date.now()), Object(u.d)() ? c() : L().then((function(e) {
                                c(e)
                            })).catch((function(e) {
                                console.error("report send error", e), c()
                            }))
                        }));
                        console.warn("request url can't be empty!")
                    },
                    G = n(0),
                    U = "".concat(G.a, "/intp/ossattr"),
                    V = {};

                function J(e) {
                    var t = Object.keys(V);
                    t && t.length ? t.forEach((function(t) {
                        if (V[t] && V[t].length) {
                            var n = V[t].join(",");
                            V[t] = [], M({
                                type: "idkey",
                                url: U,
                                data: {
                                    action: "oss",
                                    f: "json",
                                    id: t,
                                    key: n
                                }
                            }, e)
                        }
                    })) : e && e()
                }
                var K = function(e, t, n) {
                        if (void 0 === t || "boolean" == typeof t) {
                            if (!j) return void console.warn("必须初始化ID或者显性传入");
                            n = t, t = e, e = j
                        }
                        if (n) return M({
                            type: "idkey",
                            url: U,
                            data: {
                                action: "oss",
                                f: "json",
                                id: e,
                                key: t
                            }
                        });
                        V[e] ? V[e].push(t) : V[e] = [t], F(J)
                    },
                    z = [],
                    Y = function(e, t, n) {
                        if (x || n) {
                            z.push({
                                msg: e,
                                level: t || 4
                            });
                            try {
                                ! function(e) {
                                    if (z.length) {
                                        var t = {
                                            id: e || x,
                                            uin: P,
                                            from: ""
                                        };
                                        for (var n in z)
                                            if (z.hasOwnProperty(n)) {
                                                var r = z[n];
                                                t["msg[" + n + "]"] = r.msg, t["level[" + n + "]"] = r.level || 4
                                            }
                                        M({
                                            type: "badjs",
                                            url: "https://badjs.weixinbridge.com/badjs",
                                            data: t
                                        }), z = []
                                    }
                                }(n || x)
                            } catch (e) {
                                console.error(e)
                            }
                        } else console.warn("必须初始化ID或者显性传入")
                    },
                    q = n(5);

                function H(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function W(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? H(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var B = "".concat(G.a, "/intp/mmdata?action=reportmultimon"),
                    Q = null,
                    X = [],
                    Z = {
                        appLaunch: "app launch",
                        pageLoad: function(e) {
                            return "page ".concat(e, " load")
                        },
                        pagePV: function(e) {
                            return "page ".concat(e, " pv")
                        },
                        pageRender: function(e) {
                            return "page ".concat(e, " render")
                        },
                        apiTime: function(e) {
                            return "api time ".concat(e)
                        },
                        apiSuccess: function(e) {
                            return "api success ".concat(e)
                        },
                        apiFail: function(e) {
                            return "api fail ".concat(e)
                        },
                        apiCancel: function(e) {
                            return "api cancel ".concat(e)
                        },
                        cgiTime: function(e) {
                            return "cgi time ".concat(e)
                        },
                        cgiSuccess: function(e) {
                            return "cgi success ".concat(e)
                        },
                        cgiFail: function(e) {
                            return "cgi fail ".concat(e)
                        },
                        cgiTimeout: function(e) {
                            return "cgi timeout ".concat(e)
                        }
                    },
                    $ = function(e) {
                        "unknown" === Q.network && (Q.network = d.a.networkType);
                        var t = W(W(W({}, Q), I), e);
                        return void 0 !== t.ret && (t.ret = String(t.ret)), t.msg && "object" === i()(t.msg) && (t.msg = JSON.stringify(t.msg)), t
                    },
                    ee = function(e) {
                        var t = {
                            id: e.id
                        };
                        delete e.id, "unknown" === Q.network && (Q.network = d.a.networkType);
                        var n = W(W(W({}, Q), I), e);
                        return void 0 !== n.ret && (n.ret = String(n.ret)), n.msg && "object" === i()(n.msg) && (n.msg = JSON.stringify(n.msg)), t.item = Object.keys(n).map((function(e) {
                            var t = n[e],
                                r = {
                                    key: Object(a.decamelize)(e),
                                    value: n[e]
                                };
                            return "string" == typeof t ? r.value = t : "number" == typeof t ? (r.value = t, r.valueType = Number.isInteger(t) ? 1 : 2) : r.value = String(t), r
                        })), t
                    },
                    te = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        if (D) return D(e.map((function(e) {
                            return $(e)
                        }))), Promise.resolve();
                        if (!Object(u.d)()) {
                            K(110548, 85);
                            var t = "monitor no session";
                            console.debug(t), Math.random() < .01 && Y("[".concat(t, "]").concat(JSON.stringify(e.slice(0, 4))))
                        }
                        return M({
                            type: "monitor",
                            method: "POST",
                            url: B,
                            data: {
                                multi_mon_list: e.map((function(e) {
                                    return ee(e)
                                }))
                            }
                        }).catch((function(t) {
                            console.error("多维监控上报失败！", t, e)
                        })), Promise.resolve()
                    },
                    ne = function() {
                        Object(q.f)(X) || te(X).then((function() {
                            X = []
                        })).catch((function(e) {
                            console.error("monitor reportQueue send fail", e)
                        }))
                    },
                    re = function(e, t, n) {
                        e ? (void 0 === t ? t = {} : "boolean" == typeof t && (n = t, t = {}), S || t.id || D ? (!t.id && (t.id = S), t.action = e, Q || (Q = {
                            wechatVersion: d.a.version || "",
                            libVersion: d.a.SDKVersion || "",
                            weappVersion: d.a.weappVersion || s.a.weappVersion || "",
                            system: d.a.platform || "unknown",
                            systemVersion: (d.a.system || "").replace(/\w+ /, ""),
                            brand: d.a.brand || "",
                            model: d.a.model || "",
                            network: d.a.networkType || "unknown",
                            scene: d.a.scene || 0,
                            bizuin: d.a.referrerInfo && d.a.referrerInfo.appId || ""
                        }), n ? te([t]) : (X.push(t), F(ne))) : console.warn("no monitor id and monitor function!")) : console.warn("no action!")
                    };

                function oe(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function ce(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? oe(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var ie = [],
                    ae = "".concat(G.a, "/intp/mmdata?action=reportclick"),
                    ue = function(e) {
                        Object(q.f)(ie) || fe(ie).then((function() {
                            ie = []
                        })).catch((function(e) {
                            console.error("stream reportQueue send fail", e)
                        }))
                    },
                    se = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object(a.decamelizeKeys)(ce({
                            interfaceName: "".concat(_),
                            serviceType: T,
                            source: 2
                        }, e))
                    },
                    fe = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        if (!T || !_) return console.warn("clickstream send fail, ServiceType and StreamInterface is required"), Promise.resolve();
                        if (!Object(u.d)()) {
                            K(110548, 86);
                            var t = "clickstream no session";
                            console.debug(t), Math.random() < .01 && Y("[".concat(t, "]").concat(JSON.stringify(e.slice(0, 4))))
                        }
                        return M({
                            type: "stream",
                            url: ae,
                            method: "POST",
                            data: {
                                clickstream_list: e.map((function(e) {
                                    return se(e)
                                }))
                            }
                        }).catch((function(e) {
                            console.error("点击流上报失败！", e)
                        })), Promise.resolve()
                    },
                    le = function(e, t) {
                        if (e) {
                            "string" == typeof e && (e = {
                                action: e
                            }), void 0 !== e.errCode && (e.errcode = String(e.errCode));
                            try {
                                var n = ce({}, function(e) {
                                    if (!e.extParam) return {};
                                    var t;
                                    if ("object" === i()(e.extParam) && "[object Array]" !== Object.prototype.toString.call(e.extParam)) return e.extParam;
                                    if ("string" == typeof e.extParam) try {
                                        t = JSON.parse(e.extParam)
                                    } catch (n) {
                                        console.warn("parse data.extParam fail", n), t = {
                                            content: e.extParam
                                        }
                                    } else t = {
                                        content: e.extParam
                                    };
                                    return t
                                }(e));
                                n.feOccurTime = Date.now(), n.severOccurTime = Object(q.c)(), e.extParam = JSON.stringify(n)
                            } catch (e) {
                                console.error(e)
                            }
                            if (t) return fe([e]);
                            ie.push(e), F(ue)
                        } else console.warn("no data!")
                    },
                    pe = {},
                    de = function(e) {
                        e.pid && e.speeds && (!e.speeds.length > 0 && (e.speeds = [e.speeds]), e.speeds.forEach((function(t) {
                            return function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.sid,
                                    r = t.time;
                                void 0 !== e && void 0 !== n && void 0 !== r && (pe[e] = pe[e] || {}, pe[e][n] = pe[e][n] || [], (r = parseInt(r, 10)) < 0 || n > 20 && pe[e][n].push(r))
                            }(e.pid, t)
                        })))
                    };
                "".concat(G.a, "/wxaintp/report");
                var ge = function() {
                        var e = d.a.ios,
                            t = d.a.android;
                        return e ? 10 : t ? 9 : 0
                    },
                    ye = {
                        ON_ERROR: "on error",
                        WEAPP_SDK: "weapp sdk",
                        UNHANDLED_REJECTION: "unhandled rejection",
                        CODE_ERROR: "code error",
                        PAGE_NOT_FOUND: "page not found",
                        IMG_FAIL: "img error",
                        API_FAIL: "api fail",
                        LOGIN_FAIL: "api login fail",
                        LOCATION_FAIL: "api location fail",
                        GEO_FAIL: "geo fail",
                        PAY_FAIL: "api pay fail",
                        FACE_FAIL: "api face fail"
                    },
                    ve = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        if (A) {
                            if (e) try {
                                var o = {
                                    mid: A,
                                    name: t || ye.CODE_ERROR,
                                    view: r
                                };
                                if ("string" == typeof e) o.msg = e, o.key = n;
                                else if ("object" === i()(e)) {
                                    var c = JSON.stringify(e),
                                        a = e.name,
                                        u = void 0 === a ? "" : a,
                                        s = e.message,
                                        f = void 0 === s ? "" : s;
                                    o.key = u, o.msg = f, o.stack = c
                                }
                                Oe(o)
                            } catch (e) {
                                console.error(e)
                            }
                        } else console.warn("必须设置mid")
                    },
                    Oe = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.client_version = d.a.version || "", e.device_type = d.a.platform || "", e.browser_id = ge(), e.network_id = d.a.networkType || "", e.uin = P, wx.request({
                            method: "POST",
                            url: "https://badjs.weixinbridge.com/report",
                            data: e,
                            header: {
                                "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                            },
                            success: function() {
                                console.log("badjs上报成功")
                            },
                            fail: function(e) {
                                console.log("badjs上报失败")
                            }
                        })
                    };

                function be(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function me(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? be(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var we = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    !t.errCode || n && n.ret || ((n = n || {}).ret = t.errCode), !t.costTime || n && n.costTime || ((n = n || {}).costTime = t.costTime), re(e, n), le(me({
                        action: e
                    }, t))
                }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return c
                })), n.d(t, "b", (function() {
                    return i
                })), n(1);
                var r = n(6),
                    o = n(0),
                    c = {},
                    i = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        try {
                            var t = Date.now();
                            c = wx.getSystemInfoSync();
                            var n = Date.now() - t,
                                i = wx.getLaunchOptionsSync() || {};
                            if (c.scene = i.scene || 0, c.referrerInfo = i.referrerInfo || {}, c.launchOption = i, console.debug("wx.getSystemInfoSync cost:", n, "launchOption", i), "function" == typeof wx.getAccountInfoSync) {
                                var u = wx.getAccountInfoSync(),
                                    s = u || {},
                                    f = s.miniProgram,
                                    l = void 0 === f ? {} : f,
                                    p = s.plugin;
                                console.debug(">>>>getAccountInfoSync", u), c.miniProgram = l, p && (c.plugin = p), c.weappVersion = p ? p.version : l.version
                            }
                            e && (c.weappVersion = e);
                            var d = (c.platform || "").toLowerCase();
                            c.ios = "ios" === d, c.android = "android" === d, c.model.includes("iPad") && (c.brand = "iPad"), console.debug(">>>>SystemInfo", c), r.a.set(o.f.SYSTEM_INFO, c).catch((function(e) {
                                return console.error(e)
                            }))
                        } catch (e) {
                            console.error("wx.getSystemInfoSync:", e)
                        }
                        return a(), c
                    },
                    a = function() {
                        var e = Date.now();
                        wx.getNetworkType({
                            success: function(t) {
                                var n = Date.now() - e,
                                    i = t.networkType || "unknown";
                                console.log("wx.getNetworkType:", i), console.debug("wx.getNetworkType cost:", n), c.networkType = i, r.a.set(o.f.SYSTEM_INFO, c).catch((function(e) {
                                    return console.error(e)
                                }))
                            },
                            fail: function(e) {
                                console.error("wx.getNetworkType fail:", e)
                            }
                        })
                    }
            }, function(e, t) {
                e.exports = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "c", (function() {
                    return p
                })), n.d(t, "e", (function() {
                    return g
                })), n.d(t, "a", (function() {
                    return y
                })), n.d(t, "d", (function() {
                    return O
                }));
                var r = n(3),
                    o = n.n(r),
                    c = n(6),
                    i = n(0),
                    a = n(1),
                    u = n(2);

                function s(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var f = {
                        wxaSession: "",
                        expire: 0,
                        openId: "",
                        uin: "",
                        pass_ticket: "",
                        passkey: ""
                    },
                    l = c.a.getSync(i.f.SESSION) || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(n), !0).forEach((function(t) {
                                o()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, f),
                    p = function() {
                        return {
                            pass_ticket: l.pass_ticket,
                            passkey: l.passkey
                        }
                    },
                    d = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        l.uin = e.uin || l.uin || "", l.openId = e.openId || l.openId || "", l.pass_ticket = e.pass_ticket || l.pass_ticket || "", l.passkey = e.passkey || l.passkey || "", (e.uin || e.openId) && Object(a.d)({
                            uin: e.openId || e.uin
                        })
                    },
                    g = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        u.a.plugin ? d(e) : !e.wxaSession && l.wxaSession || (l.expire = 1e3 * (e.wxaSessionExpire || 0), l.wxaSession = e.wxaSession, l.openId = e.openId || "", l.uin = e.uin || "", (e.uin || e.openId) && Object(a.d)({
                            uin: e.openId || e.uin
                        }), c.a.setSync(i.f.SESSION, l))
                    },
                    y = function() {
                        u.a.plugin && (l.uin = f.uin, l.openId = f.openId, l.passkey = f.passkey, l.pass_ticket = f.pass_ticket), l.expire = f.expire, l.wxaSession = f.wxaSession, l.openId = f.openId, l.uin = f.uin, console.debug(">>>>clearSession", l), c.a.removeSync(i.f.SESSION)
                    },
                    v = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return !!(l || e).pass_ticket
                    },
                    O = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return u.a.plugin ? v(e) : Boolean((l || e).wxaSession && (l || e).expire > Date.now() + 200)
                    };
                t.b = l
            }, function(e, t, n) {
                "use strict";
                n.d(t, "i", (function() {
                    return i.f
                })), n.d(t, "h", (function() {
                    return i.e
                })), n.d(t, "k", (function() {
                    return i.g
                })), n.d(t, "g", (function() {
                    return i.d
                })), n.d(t, "a", (function() {
                    return i.a
                })), n.d(t, "b", (function() {
                    return i.b
                })), n.d(t, "d", (function() {
                    return i.c
                })), n.d(t, "f", (function() {
                    return a
                })), n.d(t, "e", (function() {
                    return s
                })), n.d(t, "j", (function() {
                    return f
                })), n.d(t, "c", (function() {
                    return l
                }));
                var r = n(6),
                    o = function() {
                        return e = Date.now(), Math.floor(e / 1e3);
                        var e
                    },
                    c = n(0),
                    i = n(12),
                    a = function(e) {
                        return !(e && e.length)
                    },
                    u = null,
                    s = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.baseResp,
                            n = void 0 === t ? {} : t,
                            r = void 0 === n.ret ? n.retcode : n.ret;
                        return void 0 === r && (r = void 0 === e.ret ? e.retcode : e.ret), r
                    },
                    f = function(e) {
                        var t = o();
                        r.a.set(c.f.TIMESTAMP, u = {
                            server: e,
                            client: t
                        }).catch((function(e) {
                            return console.error(e)
                        }))
                    },
                    l = function() {
                        var e = u || r.a.getSync(c.f.TIMESTAMP),
                            t = o();
                        return e && e.server ? e.server + t - e.client : 0
                    }
            }, function(e, t, n) {
                "use strict";
                var r = n(9),
                    o = n(1),
                    c = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = "Storage.".concat(e, " fail"),
                            c = "".concat(r, ".").concat(n ? " key=".concat(n) : "", ":");
                        console.error(c, t), t.errMsg && t.errMsg.includes("data not found") || (Object(o.f)(r), Object(o.c)("".concat(c, " ").concat(JSON.stringify(t))), Object(o.e)("".concat(c, " ").concat(JSON.stringify(t)), o.a.API_FAIL, r))
                    };
                t.a = {get: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return r.a.getStorage({
                            key: e
                        }).then((function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return console.debug("Storage.get key=".concat(e, ":"), t), Promise.resolve(t.data)
                        })).catch((function(t) {
                            return c("get", t, e), Promise.resolve(null)
                        }))
                    },
                    getSync: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        try {
                            return wx.getStorageSync(e)
                        } catch (t) {
                            return c("getSync", t, e), null
                        }
                    },
                    set: function(e, t) {
                        return e && t ? r.a.setStorage({
                            key: e,
                            data: t
                        }).then((function(t) {
                            return console.debug("Storage.set key=".concat(e, ":"), t), Promise.resolve(t)
                        })).catch((function(t) {
                            return c("set", t, e), Promise.resolve(t)
                        })) : Promise.resolve()
                    },
                    setSync: function(e, t) {
                        if (e && void 0 !== t) try {
                            return wx.setStorageSync(e, t)
                        } catch (t) {
                            c("setSync", t, e)
                        }
                    },
                    remove: function(e) {
                        return e ? r.a.removeStorage({
                            key: e
                        }).then((function(t) {
                            return console.debug("Storage.remove key=".concat(e, ":"), t), Promise.resolve(t)
                        }), (function(t) {
                            return c("remove", t, e), Promise.resolve(t)
                        })) : Promise.resolve()
                    },
                    removeSync: function(e) {
                        if (e) try {
                            wx.removeStorageSync(e)
                        } catch (t) {
                            c("removeSync", t, e)
                        }
                    },
                    getInfo: function() {
                        return r.a.getStorageInfo({}).then((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return console.debug("Storage.getInfo:", e), Promise.resolve(e.data)
                        })).catch((function(e) {
                            return c("getInfo", e), Promise.reject(e)
                        }))
                    },
                    getInfoSync: function() {
                        try {
                            return wx.getStorageInfoSync()
                        } catch (e) {
                            return c("getInfoSync", e), null
                        }
                    },
                    clear: function() {
                        return r.a.clearStorage({}).then((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return console.debug("Storage.clear:", e), Promise.resolve()
                        })).catch((function(e) {
                            return c("clear", e), Promise.reject(e)
                        }))
                    },
                    clearSync: function() {
                        try {
                            return wx.clearStorageSync()
                        } catch (e) {
                            return c("clearSync", e), null
                        }
                    }
                }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return i
                }));
                var r = n(1),
                    o = n(2),
                    c = {
                        codeType: null,
                        weappVersion: null,
                        appKey: null
                    },
                    i = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object(o.b)(e.weappVersion), e.codeType || o.a.plugin ? (c.codeType = e.codeType, e.weappVersion && (c.weappVersion = e.weappVersion), e.report && Object(r.d)(e.report), e.appKey && (c.appKey = e.appKey)) : console.warn("必须设置codeType！")
                    };
                t.a = c
            }, function(e, t) {
                function n(t) {
                    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
                        return typeof e
                    } : e.exports = n = function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, n(t)
                }
                e.exports = n
            }, function(e, t, n) {
                "use strict";
                var r = n(3),
                    o = n.n(r),
                    c = n(8),
                    i = n.n(c),
                    a = n(1);

                function u(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var f = {},
                    l = ["canIUse", "nextTick", "reportMonitor", "reportAnalytics", "createWorker"],
                    p = ["getFileInfo", "setStorage"],
                    d = ["getStorage", "getStorageSync"];
                Object.keys(wx).forEach((function(e) {
                    l.indexOf(e) > -1 || /^on|off|\w+Sync|create\w+Context|get\w+Manager$/.test(e) ? f[e] = function() {
                        try {
                            return wx[e].apply(wx, arguments)
                        } catch (t) {
                            console.error("API ".concat(e, " exception:"), t)
                        }
                    } : f[e] = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise((function(n, r) {
                            var o = null;
                            t.success = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; - 1 === p.indexOf(e) && console.debug("API ".concat(e, " success:"), t), ["login"].indexOf(e) > -1 && console.debug("API ".concat(e, " success resolve:"), i()(n), n);
                                try {
                                    n(t)
                                } catch (e) {
                                    throw e
                                }
                            }, t.fail = function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; - 1 === e.indexOf("Storage") && console.error("API ".concat(e, " fail:"), n), ["login"].indexOf(e) > -1 && console.debug("API ".concat(e, " fail reject:"), i()(r), r);
                                var c = n.errMsg || "";
                                if (-1 === d.indexOf(e) && -1 === c.indexOf("cancel")) {
                                    var u = Date.now() - o,
                                        f = s({}, t);
                                    delete f.success, delete f.fail, delete f.complete, Object(a.g)(a.b.apiFail(e), {
                                        costTime: u,
                                        errCode: String(n.errCode || -1),
                                        extParam: JSON.stringify({
                                            params: f,
                                            res: n
                                        })
                                    }, {
                                        msg: n
                                    })
                                }
                                try {
                                    r(n)
                                } catch (t) {
                                    var l = "[Promise exception]API ".concat(e, " fail reject: ").concat(t);
                                    throw console.error(l), Object(a.c)(l), Object(a.e)(l, a.a.API_FAIL, e), t
                                }
                            }, t.complete = function() {
                                -1 === p.indexOf(e) && console.debug("API ".concat(e, " cost:"), Date.now() - o)
                            }, o = Date.now();
                            try {
                                wx[e](t)
                            } catch (t) {
                                console.error("API ".concat(e, " exception:"), t)
                            }
                        }))
                    }
                })), t.a = f
            }, function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return f
                })), n.d(t, "b", (function() {
                    return p
                })), n.d(t, "c", (function() {
                    return d
                })), n.d(t, "e", (function() {
                    return g
                }));
                var r = n(9),
                    o = n(7),
                    c = n(0),
                    i = n(1),
                    a = n(13),
                    u = n(14),
                    s = n(4),
                    f = "",
                    l = function(e) {
                        var t = c.e.API_LOGIN_FAIL,
                            n = e.errMsg || JSON.stringify(e);
                        return {
                            baseResp: {
                                ret: t,
                                errMsg: n
                            },
                            ret: t,
                            errMsg: n
                        }
                    },
                    p = function() {
                        f = ""
                    },
                    d = function() {
                        f = ""
                    };

                function g() {
                    return new Promise((function(e, t) {
                        wx.operateWXData({
                            apiName: "getGetPasskey",
                            reqData: {
                                action: "webapi_getpasskey",
                                content: "{}"
                            },
                            complete: function(n) {
                                console.debug("getGetPasskey resp", n);
                                var r = n.err_code,
                                    o = void 0 === r ? 0 : r,
                                    c = n.rawData,
                                    a = 0 === o;
                                if (Object(i.g)("getPasskey ".concat(a ? "success" : "fail"), {
                                        errCode: o,
                                        extParam: {
                                            rawData: c
                                        }
                                    }, {
                                        ret: o,
                                        msg: c
                                    }), a) try {
                                    var u = JSON.parse(c);
                                    console.debug("getGetPasskey rawData", u), Object(s.e)(u), e(u)
                                } catch (e) {
                                    t({
                                        ret: -3,
                                        rawData: c
                                    })
                                } else t({
                                    ret: o
                                })
                            }
                        })
                    }))
                }
                t.d = function() {
                    if (!o.a.codeType) return Promise.reject(new a.a(u.a.NO_CODE_TYPE));
                    var e = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            console.error(e, t), Object(i.g)(e, {
                                extParam: {
                                    res: t
                                }
                            }), Object(i.c)("[".concat(e, "]").concat(JSON.stringify(t))), Object(i.e)(JSON.stringify(t), i.a.LOGIN_FAIL, e, t.errMsg || "")
                        },
                        t = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            console.debug("wx.login res:", t);
                            var n = t.code;
                            return n ? (Object(i.g)(i.b.apiSuccess("login"), {
                                extParam: {
                                    code: n
                                }
                            }), f = n, Promise.resolve(n)) : (e("wx.login err no code", t), Promise.reject(t))
                        };
                    return r.a.login().then(t).catch((function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e("wx.login err 1st", n), r.a.login().then(t).catch((function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            throw e("wx.login err 2nd", t), l(t)
                        }))
                    }))
                }
            }, function(e, t, n) {
                var r, o, c, i, a, u, s, f, l, p, d, g, y, v, O;
                c = function(e, t, n) {
                    if (!l(t) || d(t) || g(t) || y(t) || f(t)) return t;
                    var r, o = 0,
                        i = 0;
                    if (p(t))
                        for (r = [], i = t.length; o < i; o++) r.push(c(e, t[o], n));
                    else
                        for (var a in r = {}, t) Object.prototype.hasOwnProperty.call(t, a) && (r[e(a, n)] = c(e, t[a], n));
                    return r
                }, i = function(e) {
                    return v(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, t) {
                        return t ? t.toUpperCase() : ""
                    }))).substr(0, 1).toLowerCase() + e.substr(1)
                }, a = function(e) {
                    var t = i(e);
                    return t.substr(0, 1).toUpperCase() + t.substr(1)
                }, u = function(e, t) {
                    return function(e, t) {
                        var n = (t = t || {}).separator || "_",
                            r = t.split || /(?=[A-Z])/;
                        return e.split(r).join(n)
                    }(e, t).toLowerCase()
                }, s = Object.prototype.toString, f = function(e) {
                    return "function" == typeof e
                }, l = function(e) {
                    return e === Object(e)
                }, p = function(e) {
                    return "[object Array]" == s.call(e)
                }, d = function(e) {
                    return "[object Date]" == s.call(e)
                }, g = function(e) {
                    return "[object RegExp]" == s.call(e)
                }, y = function(e) {
                    return "[object Boolean]" == s.call(e)
                }, v = function(e) {
                    return (e -= 0) == e
                }, O = function(e, t) {
                    var n = t && "process" in t ? t.process : t;
                    return "function" != typeof n ? e : function(t, r) {
                        return n(t, e, r)
                    }
                }, void 0 === (o = "function" == typeof(r = {
                    camelize: i,
                    decamelize: u,
                    pascalize: a,
                    depascalize: u,
                    camelizeKeys: function(e, t) {
                        return c(O(i, t), e)
                    },
                    decamelizeKeys: function(e, t) {
                        return c(O(u, t), e, t)
                    },
                    pascalizeKeys: function(e, t) {
                        return c(O(a, t), e)
                    },
                    depascalizeKeys: function() {
                        return this.decamelizeKeys.apply(this, arguments)
                    }
                }) ? r.call(t, n, t, e) : r) || (e.exports = o)
            }, function(e, t, n) {
                "use strict";
                n.d(t, "f", (function() {
                    return u
                })), n.d(t, "e", (function() {
                    return s
                })), n.d(t, "g", (function() {
                    return f
                })), n.d(t, "d", (function() {
                    return p
                })), n.d(t, "a", (function() {
                    return d
                })), n.d(t, "b", (function() {
                    return g
                })), n.d(t, "c", (function() {
                    return y
                }));
                var r = n(3),
                    o = n.n(r),
                    c = n(0);

                function i(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function a(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var u = function(e) {
                        return e ? e.split("&").reduce((function(e, t) {
                            var n = t.split("=");
                            return e[n[0]] = n[1], e
                        }), {}) : {}
                    },
                    s = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object.keys(e).reduce((function(t, n) {
                            return t + "".concat(t ? "&" : "").concat(n, "=").concat(encodeURIComponent(e[n]))
                        }), "")
                    },
                    f = function(e, t) {
                        return "".concat(e).concat(e.includes("?") ? "&" : "?").concat(t)
                    },
                    l = function(e) {
                        return /^\/[^\/].*/.test(e)
                    },
                    p = function(e) {
                        return l || /^https:\/\/mp\.weixin\.qq\.com/.test(e)
                    },
                    d = function(e) {
                        return l(e) ? "".concat(c.a).concat(e) : e
                    },
                    g = function(e, t) {
                        return p(e) ? "".concat(c.d, "/an:").concat(t).concat(e) : e
                    },
                    y = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        p(e) && (e = e.replace(/\/\w+/, "")), e.includes("?");
                        var n = u(e.includes("?") ? e.split("?")[1] : ""),
                            r = a(a({}, n), t);
                        return "".concat(e.replace(/\?.*/, "")).concat(r.action ? "?action=".concat(r.action) : "")
                    }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return g
                }));
                var r = n(15),
                    o = n.n(r),
                    c = n(16),
                    i = n.n(c),
                    a = n(24),
                    u = n.n(a),
                    s = n(25),
                    f = n.n(s),
                    l = n(17),
                    p = n.n(l),
                    d = n(26),
                    g = function(e) {
                        u()(n, e);
                        var t = function(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var n, r = p()(e);
                                if (t) {
                                    var o = p()(this).constructor;
                                    n = Reflect.construct(r, arguments, o)
                                } else n = r.apply(this, arguments);
                                return f()(this, n)
                            }
                        }(n);

                        function n(e) {
                            var r;
                            return i()(this, n), (r = t.call(this, e.msg)).name = "FEError", r.message = e.msg || "", r.code = e.code || "", r.constructor = n, r.__proto__ = n.prototype, r
                        }
                        return o()(n)
                    }(n.n(d)()(Error))
            }, function(e, t, n) {
                "use strict";
                t.a = {
                    NO_CODE_TYPE: {
                        code: "E10000",
                        msg: "must init codeType"
                    },
                    API_LOGIN_ERR: {
                        code: "E11000",
                        msg: "wx.login err"
                    },
                    CGI_LOGIN_ERR: {
                        code: "E11100",
                        msg: "cgi login err"
                    },
                    API_FACE_NO_SUPPORT: {
                        code: "E12000",
                        msg: "wx.checkIsSupportFacialRecognition fail"
                    },
                    API_FACE_CANCEL: {
                        code: "E12100",
                        msg: "wx.startFacialRecognitionVerify cancel"
                    },
                    API_PAY_CANCEL: {
                        code: "E12100",
                        msg: "wx.requestPayment cancel"
                    },
                    API_VERIFY_PASSWORD_CANCEL: {
                        code: "E12200",
                        msg: "wx.verifyPaymentPassword cancel"
                    },
                    API_BIND_PAYMENT_CARD_CANCEL: {
                        code: "E12300",
                        msg: "wx.bindPaymentCard cancel"
                    }
                }
            }, function(e, t) {
                function n(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                e.exports = function(e, t, r) {
                    return t && n(e.prototype, t), r && n(e, r), e
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
            }, function(e, t) {
                function n(t) {
                    return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, n(t)
                }
                e.exports = n
            }, function(e, t) {
                function n(t, r) {
                    return e.exports = n = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, n(t, r)
                }
                e.exports = n
            }, , , , , , function(e, t, n) {
                var r = n(18);
                e.exports = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && r(e, t)
                }
            }, function(e, t, n) {
                var r = n(8),
                    o = n(39);
                e.exports = function(e, t) {
                    return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
                }
            }, function(e, t, n) {
                var r = n(17),
                    o = n(18),
                    c = n(40),
                    i = n(41);

                function a(t) {
                    var n = "function" == typeof Map ? new Map : void 0;
                    return e.exports = a = function(e) {
                        if (null === e || !c(e)) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== n) {
                            if (n.has(e)) return n.get(e);
                            n.set(e, t)
                        }

                        function t() {
                            return i(e, arguments, r(this).constructor)
                        }
                        return t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), o(t, e)
                    }, a(t)
                }
                e.exports = a
            }, , , , , , , , , , , , , function(e, t) {
                e.exports = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                }
            }, function(e, t, n) {
                var r = n(18),
                    o = n(42);

                function c(t, n, i) {
                    return o() ? e.exports = c = Reflect.construct : e.exports = c = function(e, t, n) {
                        var o = [null];
                        o.push.apply(o, t);
                        var c = new(Function.bind.apply(e, o));
                        return n && r(c, n.prototype), c
                    }, c.apply(null, arguments)
                }
                e.exports = c
            }, function(e, t) {
                e.exports = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]
        };
    });
    define("main.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = require("./_commons/0.js")([{
            ids: [6],
            modules: {
                67: function(e, n, r) {
                    "use strict";

                    function t() {
                        return "0.1.5"
                    }
                    r.r(n), r.d(n, "getVersion", (function() {
                        return t
                    }))
                }
            },
            entries: [
                [67, 0]
            ]
        }]);
    });
    global.__wxAppCurrentFile__ = 'plugin-private://wxa16657d57059e0f0/components/agreement/agreement.js';
    global.__wxRouteBegin = true;
    define("components/agreement/agreement.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), {
            ids: [2],
            modules: {
                23: function(e, t, o) {
                    e.exports = o(66)
                },
                66: function(e, t, o) {
                    "use strict";
                    o.r(t);
                    var s = o(2);
                    Component({
                        options: {
                            styleIsolation: "isolated"
                        },
                        properties: {
                            show: {
                                type: Boolean,
                                value: !1
                            },
                            agreement: {
                                type: String,
                                value: ""
                            },
                            title: {
                                type: String,
                                value: ""
                            }
                        },
                        data: {
                            platform: s.a.platform
                        },
                        lifetimes: {},
                        methods: {
                            onTapClose: function() {
                                this.setData({
                                    show: !1
                                }), this.triggerEvent("close")
                            },
                            onTapIconClose: function() {
                                this.setData({
                                    show: !1
                                }), this.triggerEvent("iconClose")
                            }
                        }
                    })
                }
            },
            entries: [
                [23, 0, 1]
            ]
        }]);
    });
    require("components/agreement/agreement.js");
    global.__wxAppCurrentFile__ = 'plugin-private://wxa16657d57059e0f0/components/half-screen-dialog/half-screen-dialog.js';
    global.__wxRouteBegin = true;
    define("components/half-screen-dialog/half-screen-dialog.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = require("../../_commons/0.js")([{
            ids: [3],
            modules: {
                21: function(e, t, o) {
                    e.exports = o(50)
                },
                50: function(e, t) {
                    Component({
                        options: {
                            multipleSlots: !0,
                            styleIsolation: "isolated"
                        },
                        properties: {
                            closabled: {
                                type: Boolean,
                                value: !0
                            },
                            closeType: {
                                type: String,
                                value: ""
                            },
                            title: {
                                type: String,
                                value: ""
                            },
                            subTitle: {
                                type: String,
                                value: ""
                            },
                            extClass: {
                                type: String,
                                value: ""
                            },
                            desc: {
                                type: String,
                                value: ""
                            },
                            tips: {
                                type: String,
                                value: ""
                            },
                            maskClosable: {
                                type: Boolean,
                                value: !0
                            },
                            mask: {
                                type: Boolean,
                                value: !0
                            },
                            show: {
                                type: Boolean,
                                value: !1,
                                filter: "_showChange"
                            },
                            showHeader: {
                                type: Boolean,
                                value: !0
                            },
                            showFooter: {
                                type: Boolean,
                                value: !0
                            },
                            buttons: {
                                type: Array,
                                value: []
                            }
                        },
                        data: {
                            wrapperShow: !1,
                            innerShow: !1
                        },
                        lifetimes: {
                            ready: function() {
                                this._showChange(this.data.show)
                            }
                        },
                        methods: {
                            _showChange: function(e) {
                                var t = this;
                                e ? this.setData({
                                    wrapperShow: !0,
                                    innerShow: !0
                                }) : (this.setData({
                                    innerShow: !1
                                }), setTimeout((function() {
                                    t.properties.show || t.setData({
                                        wrapperShow: !1
                                    })
                                }), 300))
                            },
                            close: function(e) {
                                var t = e.currentTarget.dataset.type;
                                (this.data.maskClosable || "close" === t) && (this.setData({
                                    show: !1
                                }), this.triggerEvent("close"))
                            },
                            buttonTap: function(e) {
                                var t = e.currentTarget.dataset.index;
                                this.triggerEvent("buttontap", {
                                    index: t,
                                    item: this.data.buttons[t]
                                }, {})
                            },
                            onMaskMouseMove: function() {}
                        }
                    })
                }
            },
            entries: [
                [21, 0]
            ]
        }]);
    });
    require("components/half-screen-dialog/half-screen-dialog.js");
    global.__wxAppCurrentFile__ = 'plugin-private://wxa16657d57059e0f0/components/msg/msg.js';
    global.__wxRouteBegin = true;
    define("components/msg/msg.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), {
            ids: [4],
            modules: {
                22: function(t, e, r) {
                    t.exports = r(58)
                },
                58: function(t, e, r) {
                    "use strict";
                    r.r(e);
                    var o = r(2);
                    Component({
                        options: {
                            styleIsolation: "isolated"
                        },
                        properties: {
                            type: {
                                type: String,
                                value: "error"
                            },
                            title: {
                                type: String,
                                value: ""
                            },
                            desc: {
                                type: String,
                                value: ""
                            },
                            primary: {
                                type: String,
                                value: ""
                            },
                            secondary: {
                                type: String,
                                value: ""
                            },
                            miniProgram: {
                                type: Object,
                                value: {}
                            },
                            bottomLink: {
                                type: String,
                                value: ""
                            },
                            bottomMiniProgram: {
                                type: Object,
                                value: {}
                            }
                        },
                        data: {
                            wrapperShow: !1,
                            innerShow: !1,
                            platform: "",
                            version: "release"
                        },
                        lifetimes: {
                            attached: function() {
                                this.setData({
                                    platform: o.a.platform,
                                    version: this.getEnvVersion()
                                })
                            }
                        },
                        methods: {
                            onTapPrimary: function() {
                                this.triggerEvent("tapPrimary")
                            },
                            onTapSecondary: function() {
                                this.triggerEvent("tapSecondary")
                            },
                            onTapBottomLink: function() {
                                this.triggerEvent("tapBottom")
                            },
                            getEnvVersion: function() {
                                return "release"
                            }
                        }
                    })
                }
            },
            entries: [
                [22, 0, 1]
            ]
        }]);
    });
    require("components/msg/msg.js");
    global.__wxAppCurrentFile__ = 'plugin-private://wxa16657d57059e0f0/components/verify/verify.js';
    global.__wxRouteBegin = true;
    define("components/verify/verify.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), {
            ids: [5],
            modules: {
                20: function(e, t, a) {
                    e.exports = a(68)
                },
                38: function(e, t) {
                    Object.entries || (Object.entries = function(e) {
                        for (var t = Object.keys(e), a = t.length, i = new Array(a); a--;) i[a] = [t[a], e[t[a]]];
                        return i
                    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                        value: function(e, t) {
                            if (null == this) throw new TypeError('"this" is null or not defined');
                            var a = Object(this),
                                i = a.length >>> 0;
                            if (0 === i) return !1;
                            for (var r, n, o = 0 | t, s = Math.max(o >= 0 ? o : i - Math.abs(o), 0); s < i;) {
                                if ((r = a[s]) === (n = e) || "number" == typeof r && "number" == typeof n && isNaN(r) && isNaN(n)) return !0;
                                s++
                            }
                            return !1
                        }
                    }), String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
                        value: function(e, t) {
                            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                        }
                    }), Number.isInteger = Number.isInteger || function(e) {
                        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                    }
                },
                68: function(e, t, a) {
                    "use strict";
                    a.r(t);
                    var i = a(3),
                        r = a.n(i),
                        n = (a(38), a(7)),
                        o = a(4),
                        s = a(1),
                        c = a(2),
                        u = !1,
                        d = a(8),
                        l = a.n(d),
                        h = a(11),
                        p = a(9),
                        g = a(6),
                        m = a(5),
                        f = (a(13), a(14), a(10)),
                        y = a(0),
                        b = a(16),
                        D = a.n(b),
                        v = a(15),
                        O = a.n(v);

                    function T(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, i)
                        }
                        return a
                    }

                    function S(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? T(Object(a), !0).forEach((function(t) {
                                r()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : T(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }
                    var w = function(e) {
                        var t = e.reqData;
                        t || (t = e.data || {}), !t.header && e.header && (t.header = e.header);
                        var a = e.apiName;
                        a || (a = e.url.replace(/^\?.*$/g, ""));
                        var i = e.url ? e.url.replace(/^[^\?]+\??/g, "") : "";
                        i && (t = S(S({}, Object(m.i)(i)), t));
                        var r = null;
                        return console.debug("wx.operateWXData ".concat(a, " reqData"), t), wx.operateWXData({
                            reqData: t,
                            apiName: a,
                            success: function(t) {
                                console.debug("wx.operateWXData ".concat(a, " success"), t), r = function(e) {
                                    try {
                                        var t;
                                        return {
                                            data: S(S({}, JSON.parse(e.rawData)), {}, {
                                                base_resp: {
                                                    ret: +e.err_code || +(null === (t = e.respData) || void 0 === t ? void 0 : t.err_no) || 0,
                                                    err_msg: e.errMsg
                                                }
                                            }),
                                            statusCode: 200
                                        }
                                    } catch (t) {
                                        return console.error("[wx.operateWXData] handleResp err", t), e
                                    }
                                }(t), e.success && e.success(r)
                            },
                            fail: function(t) {
                                console.debug("wx.operateWXData ".concat(a, " fail"), t), r = function(e) {
                                    return {
                                        baseResp: {
                                            ret: e.err_code,
                                            errMsg: e.errMsg
                                        }
                                    }
                                }(t), e.fail && e.fail(r)
                            },
                            complete: function(t) {
                                console.debug("wx.operateWXData ".concat(a, " complete"), r || t), e.complete && e.complete(r || t)
                            }
                        }), {
                            abort: function() {
                                console.log("operateWXData abort")
                            }
                        }
                    };

                    function j(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, i)
                        }
                        return a
                    }

                    function I(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? j(Object(a), !0).forEach((function(t) {
                                r()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }
                    var k = ["asyncget", "reportpage", "reportclick", "reportmultimon"],
                        C = new(function() {
                            function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                D()(this, e), this.cache = {}, this.cacheKeyMap = new Map, this.defaultCacheTime = t.defaultCacheTime || 36e5, this.cacheEnable = !1
                            }
                            return O()(e, [{
                                key: "init",
                                value: function() {
                                    this.cacheEnable = !0, this.getCacheKeyMapFromLocalStorage(), this.clearExpireValueTimeout()
                                }
                            }, {
                                key: "getCacheKeyMapFromLocalStorage",
                                value: function() {
                                    var e = this;
                                    try {
                                        JSON.parse(g.a.getSync("cache_key_map")).forEach((function(t) {
                                            e.cacheKeyMap.set(t.key, t.value)
                                        }))
                                    } catch (e) {}
                                }
                            }, {
                                key: "setCacheKeyMapToLocalStorage",
                                value: function() {
                                    try {
                                        var e = [];
                                        this.cacheKeyMap.forEach((function(t, a) {
                                            e.push({
                                                key: a,
                                                value: t
                                            })
                                        })), g.a.setSync("cache_key_map", JSON.stringify(e))
                                    } catch (e) {}
                                }
                            }, {
                                key: "getParsedKey",
                                value: function(e, t) {
                                    var a = this.generateKey();
                                    return this.findKey(a) ? this.getParsedKey(e, t) : (this.cacheKeyMap.set(a, {
                                        originKey: e,
                                        expireTime: Date.now() + t
                                    }), this.setCacheKeyMapToLocalStorage(), a)
                                }
                            }, {
                                key: "generateKey",
                                value: function() {
                                    for (var e = "", t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = 0; a < 6; a++) e += t[Math.round(Math.random() * (t.length - 1))];
                                    return e
                                }
                            }, {
                                key: "findKey",
                                value: function(e) {
                                    return this.cacheKeyMap.get(e)
                                }
                            }, {
                                key: "findKeyByOption",
                                value: function(e) {
                                    var t = "";
                                    return this.cacheKeyMap.forEach((function(a, i) {
                                        if (a.originKey === e) return t = i, i
                                    })), t
                                }
                            }, {
                                key: "getKeyByCacheItem",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.options,
                                        a = e.url,
                                        i = e.data,
                                        r = void 0 === i ? "{}" : i;
                                    if (t && a) return e.cacheKeyRule ? e.cacheKeyRule({
                                        options: t,
                                        path: a.replace(/\?.*$/, ""),
                                        query: Object(m.i)(a),
                                        data: JSON.parse(r || "{}")
                                    }) : "".concat(a, "_").concat(r)
                                }
                            }, {
                                key: "get",
                                value: function(e) {
                                    try {
                                        if (!this.cacheEnable) return null;
                                        var t = this.getKeyByCacheItem(e);
                                        if (!t) return null;
                                        var a, i = this.findKeyByOption(t);
                                        if ("memory" === e.type) {
                                            if (!(a = this.cache[i])) return null;
                                            if (Date.now() - a.expireTime > 0) return this.cache[i] = null, null;
                                            console.debug("DataCacheCenter get key", i, "matchItem", a || "undefined", "originalKey", t);
                                            try {
                                                return JSON.parse(a.value)
                                            } catch (e) {
                                                return null
                                            }
                                        } else try {
                                            var r = g.a.getSync(i);
                                            if (console.debug("DataCacheCenter get key", i, "matchItem", r || "undefined", "originalKey", t), !r) return null;
                                            var n = JSON.parse(r);
                                            return Date.now() - n.expireTime > 0 ? (wx.removeStorageSync(i), null) : n.value
                                        } catch (e) {
                                            return console.error("DataCacheCenter get key err", e), null
                                        }
                                    } catch (e) {
                                        return console.error("DataCacheCenter get key err 111", e), null
                                    }
                                }
                            }, {
                                key: "set",
                                value: function(e) {
                                    var t = this.getKeyByCacheItem(e);
                                    try {
                                        if (!this.cacheEnable) return;
                                        if (!t) return;
                                        e.key = t;
                                        var a = e.expireTime || this.defaultCacheTime,
                                            i = this.findKeyByOption(t);
                                        e.key = i || this.getParsedKey(t, a), console.debug("DataCacheCenter set key", e.key, "matchItem", e.value, "originalKey", t), "memory" === e.type ? this.cache[e.key] = {
                                            type: "memory",
                                            value: JSON.stringify(e.value),
                                            expireTime: Date.now() + a
                                        } : (g.a.setSync(e.key, JSON.stringify({
                                            expireTime: Date.now() + a,
                                            value: e.value
                                        })), this.cacheKeyMap.set(e.key, {
                                            originKey: t,
                                            expireTime: Date.now() + a
                                        }), this.setCacheKeyMapToLocalStorage())
                                    } catch (t) {
                                        console.error("DataCacheCenter set data err", t, "cacheItem", e, "key", e.key, "originalKey")
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    for (key in this.cache) "localStorage" === this.cache[key].type && wx.removeStorageSync(key);
                                    this.cache = {}, this.cacheKeyMap.clear()
                                }
                            }, {
                                key: "clearExpireValueTimeout",
                                value: function() {
                                    var e = this;
                                    this.clearTimerId || (this.clearTimerId = setTimeout((function() {
                                        e.clearTimerId = null, e.clearExpireValue()
                                    }), 3e3))
                                }
                            }, {
                                key: "clearExpireValue",
                                value: function() {
                                    var e = this,
                                        t = [];
                                    this.cacheKeyMap.forEach((function(e, a) {
                                        e.expireTime < Date.now() && t.push(a)
                                    })), console.debug("DataCacheCenter clearExpireValue", t), t.forEach((function(t, a) {
                                        a < 5 && (wx.removeStorageSync(t), console.debug("DataCacheCenter removeStorageSync", t), e.cacheKeyMap.delete(t))
                                    })), t.length && this.setCacheKeyMapToLocalStorage(), t.length > 5 && this.clearExpireValueTimeout()
                                }
                            }, {
                                key: "setCacheEnable",
                                value: function(e) {
                                    this.cacheEnable = e
                                }
                            }]), e
                        }());
                    C.init();
                    var x = function(e, t, a, i) {
                            if (i && !e.isUseOperateWxData) {
                                e.url = Object(m.a)(e.url || "");
                                var r = e.header || {},
                                    s = r[y.b] || r[y.b.toLowerCase()] || "";
                                "POST" === t && s.toLowerCase() === y.c.JSON ? a && a.pass_ticket ? e.url = Object(m.k)(e.url, Object(m.h)(a)) : e.url = Object(m.k)(e.url, a ? "codetype=".concat(n.a.codeType, "&code=").concat(a) : "wxa_session=".concat(o.b.wxaSession)) : a && a.pass_ticket ? e.needPasskey ? e.data = I(I({}, e.data), a) : e.data = I(I({}, e.data), {}, {
                                    pass_ticket: a.pass_ticket
                                }) : e.data = I(I({}, e.data), {}, a ? {
                                    codetype: n.a.codeType,
                                    code: a
                                } : {
                                    wxa_session: o.b.wxaSession
                                }), a && Object(f.c)(), e.header = I({}, e.header);
                                var u = c.a.weappVersion || n.a.weappVersion;
                                u && (e.header[y.g] = u), o.b.uin && (e.header[y.h] = o.b.uin)
                            }
                        },
                        _ = function(e) {
                            var t = e.reject,
                                a = e.isInternalApi,
                                i = e.cgiUrl,
                                r = e.method,
                                n = e.requestData,
                                o = e.startTime,
                                c = e.reportData,
                                u = e.needMonitorReport,
                                d = e.options,
                                h = void 0 === d ? "" : d,
                                p = e.originData,
                                g = void 0 === p ? "" : p,
                                m = e.err;
                            console.error("request ".concat(i, " fail:"), m);
                            var f = c.retCode,
                                b = Date.now() - o,
                                D = f === y.e.REQUEST_TIMEOUT ? s.b.cgiTimeout(i) : s.b.cgiFail(i);
                            return a && u && Object(s.f)(D, {
                                ret: f,
                                costTime: b,
                                msg: m,
                                options: h,
                                reqData: g
                            }), Object(s.i)({
                                action: D,
                                costTime: b,
                                errCode: f,
                                extParam: I(I({
                                    cgiUrl: i,
                                    method: r
                                }, c), {}, {
                                    request: n,
                                    response: m,
                                    options: h
                                })
                            }), m && "object" === l()(m) ? m.baseResp || (m.baseResp = {
                                ret: f
                            }) : m = {
                                baseResp: {
                                    ret: f,
                                    errMsg: String(m)
                                }
                            }, t(m)
                        },
                        P = function(e, t) {
                            return e || 1e3 * (t ? 10 : 15)
                        },
                        R = function(e) {
                            var t = !0;
                            return k.map((function(a) {
                                e.indexOf(a) > 0 && (t = !1)
                            })), t
                        },
                        E = function() {
                            try {
                                wx.hideLoading()
                            } catch (e) {}
                        },
                        A = function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                a = arguments.length > 1 ? arguments[1] : void 0,
                                i = JSON.stringify(t.data || {}),
                                r = Date.now(),
                                n = Number(t.showLoadingTimeOut) || z.showLoadingTimeOut,
                                c = !0,
                                u = null,
                                d = t.useCache ? Object.assign({}, z.useCache, t.useCache) : t.useCache;

                            function l() {
                                t.showLoading && (c = !1, Date.now() - r < n && (clearTimeout(u), u = null), E())
                            }
                            return d && d.expire && (d.expire = 1e3 * d.expire), t.showLoading && (clearTimeout(u), u = null, u = setTimeout((function() {
                                z.logDebug && console.debug("--cgi show loading--", t), c && wx.showLoading({
                                    mask: t.loadingMask || !0,
                                    title: t.loadingTitle || "加载中"
                                })
                            }), n)), new Promise((function(r, n) {
                                var c = !1,
                                    u = t.url;
                                t.__originalUrl = u;
                                var p = !!t.isUseOperateWxData || Object(m.g)(u),
                                    g = (t.method || "GET").toUpperCase();
                                "POST" === g && (t.header = I({
                                    [y.b]: "json" === t.contentType ? y.c.JSON : y.c.FORM
                                }, t.header)), x(t, g, a, p), t.needMonitorReport = void 0 === t.needMonitorReport || t.needMonitorReport, t.data = t.noHumps ? t.data : Object(h.decamelizeKeys)(t.data);
                                var f, b = t.isUseOperateWxData ? t.url : Object(m.d)(u, t.data),
                                    D = !1;
                                d && (z.logDebug && console.debug("DataCacheCenter get options", {
                                    url: u,
                                    data: i,
                                    useCache: d,
                                    options: t
                                }), (f = C.get({
                                    url: u,
                                    data: i,
                                    useCache: d,
                                    options: t
                                })) && (l(), d.handleCache && d.handleCache(f), d.resolveRequestData || r(f), D = !0)), t.header || (t.header = {});
                                var v = [];
                                for (var O in K) v.push("".concat(O, "=").concat(K[O] || ""));
                                t.header.Cookie = t.header.Cookie ? "".concat(t.header.Cookie, ";").concat(v.join(";")) : v.join(";"), z.logDebug && console.debug("request ".concat(b, " params:"), t.data, "cookie:", t.header.cookie);
                                var T = null,
                                    S = null;

                                function j() {
                                    var e = [];
                                    return d && e.push("useCache=1"), D && e.push("isCached=1"), e.join("&")
                                }
                                var k = function(e, a) {
                                    _({
                                        options: j(),
                                        reject: n,
                                        cgiUrl: b,
                                        isInternalApi: p,
                                        method: g,
                                        requestData: t.data,
                                        startTime: T,
                                        err: e,
                                        reportData: a,
                                        needMonitorReport: t.needMonitorReport,
                                        originData: i
                                    })
                                };
                                t.success = function(e) {
                                    if (l(), !c) {
                                        z.logDebug && console.debug("request ".concat(b, " success:"), e);
                                        var a = e.statusCode,
                                            n = e.profile,
                                            v = e.header,
                                            O = t.noHumps ? e.data || {} : Object(h.camelizeKeys)(e.data || {});
                                        t.noHumps && O.base_resp && (O.baseResp = Object(h.camelizeKeys)(O.base_resp));
                                        var w = O.baseResp,
                                            I = void 0 === w ? {} : w;
                                        if (S = Object(m.e)(O), a >= 200 && a < 300 || 304 === a)
                                            if (D && !d.resolveRequestData) 0 === S && C.set({
                                                options: t,
                                                url: u,
                                                data: i,
                                                value: O,
                                                expireTime: d.expire,
                                                type: d.cacheType
                                            });
                                            else if (p || /^(https|http):\/\/mp.weixin.qq.com.*/.test(u))
                                            if (0 === S) {
                                                Object(o.e)(I), r(O), I.timestamp && Object(m.j)(I.timestamp), 1 === I.dyeFlag && (z.logDebug && console.debug("当前是染色用户"), Object(s.d)({
                                                    sample: 1
                                                }));
                                                var x = Date.now() - T;
                                                if (t.needMonitorReport) {
                                                    var _ = {
                                                        cgiUrl: b,
                                                        method: g
                                                    };
                                                    t.needProfileReport && (_.profile = n, _.header = v), _.options = j(), t.needResponseDataReport && (_.data = O, f && (_.cacheRes = f)), Object(s.g)(s.b.cgiSuccess(b), {
                                                        costTime: x,
                                                        errCode: S,
                                                        extParam: _
                                                    }, {
                                                        reqData: i,
                                                        respData: JSON.stringify(_),
                                                        options: j()
                                                    })
                                                }
                                                d && C.set({
                                                    options: t,
                                                    url: u,
                                                    data: i,
                                                    value: O,
                                                    expireTime: d.expire,
                                                    type: t.cacheType
                                                })
                                            } else k(O, {
                                                retCode: S || -1,
                                                statusCode: a,
                                                profile: n,
                                                header: v
                                            });
                                        else r(O), d && C.set({
                                            options: t,
                                            url: u,
                                            data: i,
                                            value: O,
                                            expireTime: t.cacheTime,
                                            type: d.cacheType
                                        });
                                        else k(O, {
                                            retCode: S || y.e.REQUEST_NETWORK_FAIL,
                                            statusCode: a,
                                            profile: n,
                                            header: v
                                        })
                                    }
                                }, t.fail = function(i) {
                                    if (l(), z.logDebug && console.debug("request ".concat(b, " fail:"), i), !c) {
                                        if (!t.reTry && (t.reTry = 2), !t.currenTime && (t.currenTime = 1), t.currenTime < t.reTry && R(t.url)) return t.currenTime = t.currenTime + 1, t.url = t.__originalUrl, e(I({}, t), a).then((function(e) {
                                            r(e)
                                        })).catch((function(e) {
                                            n(e)
                                        }));
                                        S = y.e.API_REQUEST_FAIL, k(i, {
                                            retCode: S,
                                            statusCode: S
                                        })
                                    }
                                }, t.complete = function() {
                                    if (l(), z.logDebug && console.debug("request ".concat(b, " complete")), !c) {
                                        var e = Date.now() - T;
                                        z.logDebug && console.debug("request ".concat(b, " cost:"), e), M && clearTimeout(M), t.speed && t.speed.pid && t.speed.sid && Object(s.h)({
                                            pid: t.speed.pid,
                                            speeds: {
                                                sid: t.speed.sid,
                                                time: e
                                            }
                                        })
                                    }
                                }, T = Date.now();
                                var E = {};
                                t.needResponseDataReport && t.data && (E.reqData = JSON.stringify(t.data)), p && t.needMonitorReport && Object(s.f)(s.b.cgiTime(b), E);
                                var A = t.isUseOperateWxData ? w(t) : wx.request(t),
                                    M = setTimeout((function() {
                                        if (l(), z.logDebug && console.debug("request ".concat(b, " timeout")), S = y.e.REQUEST_TIMEOUT, c = !0, A.abort(), !t.reTry && (t.reTry = 2), !t.currenTime && (t.currenTime = 1), t.currenTime < t.reTry && R(t.url)) return t.currenTime = t.currenTime + 1, t.url = t.__originalUrl, e(t, a).then((function(e) {
                                            r(e)
                                        })).catch((function(e) {
                                            n(e)
                                        }));
                                        k("custom timeout", {
                                            retCode: S,
                                            statusCode: S
                                        })
                                    }), P(t.timeout, p))
                            }))
                        },
                        M = function(e) {
                            return e.isUseOperateWxData ? A(e, res) : c.a.plugin ? Object(f.e)().then((function(t) {
                                return A(e, t)
                            })) : Object(f.d)().then((function(t) {
                                return A(e, t)
                            }))
                        },
                        N = function(e, t) {
                            return A(e, t).catch((function(t) {
                                return a = Object(m.e)(t), [y.e.CGI_AUTH_FAILED, y.e.CGI_AUTH_FAILED_23, y.e.SESSION_EXPIRE, y.e.PASS_TICKET_AUTH_FAILED, y.e.CGI_AUTH_FAILED_1201, y.e.CGI_AUTH_FAILED_1202].includes(a) ? (Object(s.f)("auth failed"), Object(f.b)(), Object(o.a)(), e.url = e.__originalUrl, "object" === l()(e.data) && e.data && (delete e.data.wxa_session, delete e.data.code, delete e.data.pass_ticket), M(e)) : Promise.reject(t);
                                var a
                            }))
                        },
                        K = {},
                        U = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return c.a.plugin ? !Object(m.g)(e.url) || Object(o.d)() ? N(e, Object(o.c)()) : M(e) : !Object(m.g)(e.url) || Object(o.d)() ? N(e) : f.a ? p.a.checkSession().then((function() {
                                return N(e, f.a)
                            }), (function() {
                                return M(e)
                            })) : M(e)
                        },
                        z = {
                            showLoadingTimeOut: 0,
                            useCache: {
                                resolveRequestData: !0
                            },
                            logDebug: !0
                        };

                    function B(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, i)
                        }
                        return a
                    }

                    function q(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? B(Object(a), !0).forEach((function(t) {
                                r()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }
                    var L = wx.getAccountInfoSync ? wx.getAccountInfoSync() : {},
                        F = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return e.data || (e.data = {}), e.data.f = "json", e.data.is_new_ticket = 1, e.data.appid = L.miniProgram ? L.miniProgram.appId : "", e.data.pluginVersion = L.plugin ? L.plugin.version : "0.1.5", e.data.weappEnvVersion = L.miniProgram ? L.miniProgram.envVersion : "", U(q({}, e))
                        },
                        J = {
                            NOT_EXIST: 1,
                            AUDITING: 2,
                            BIND: 3,
                            FAIL: 4,
                            UNBIND: 5
                        },
                        Q = [{
                            ret: 18e3,
                            title: "操作失败",
                            desc: "该用户人脸身份信息不通过"
                        }, {
                            ret: 18001,
                            title: "验证不通过",
                            desc: "该用户正在审核中",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18002,
                            title: "验证不通过",
                            desc: "该学生身份已绑定其他微信号，学生身份一年仅可修改一次，如需修改请解除绑定。",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18003,
                            title: "验证不通过",
                            desc: "每个学生身份同时段内仅可绑定一个微信号，一年只能修改一次。",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18010,
                            title: "验证不通过",
                            desc: "在线验证码无效",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18011,
                            title: "验证不通过",
                            desc: "已过学生毕业时间",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 180110,
                            title: "验证不通过",
                            desc: "已过学生毕业时间",
                            primary: "重新绑定",
                            secondary: "取消验证"
                        }, {
                            ret: 18012,
                            title: "验证不通过",
                            desc: "学生信息和操作人信息不匹配",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18013,
                            title: "验证不通过",
                            desc: "在线验证码已过期，请登录学信网续期或重新生成",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18014,
                            title: "验证不通过",
                            desc: "申请绑定的学生类型不符合要求",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18019,
                            title: "验证不通过",
                            desc: "未知错误",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }, {
                            ret: 18020,
                            title: "你暂时不能解除绑定",
                            desc: "每个学生身份同时段内仅可绑定一个微信号，一年只能修改一次，近一年内首次绑定时间为 {lastUnbindTime}。"
                        }, {
                            ret: 18021,
                            title: "解绑失败",
                            desc: "学生姓名与身份证信息不符"
                        }, {
                            ret: 18090,
                            title: "验证不通过",
                            desc: "未知错误",
                            primary: "重新验证",
                            secondary: "取消验证"
                        }];

                    function W(e) {
                        if (!e) return "";
                        var t = new Date(1e3 * e);
                        return "".concat(t.getFullYear(), "年").concat(t.getMonth() + 1, "月").concat(t.getDate(), "日")
                    }

                    function X(e) {
                        var t = e.ret,
                            a = e.errMsg,
                            i = e.tipContent,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (0 === t) return {
                            ret: 0
                        };
                        var n = Q.find((function(e) {
                            return e.ret === t
                        }));
                        return n ? (n.desc = i || n.desc.replace("{lastUnbindTime}", W(r.lastUnbindTime)), n) : {
                            isSysErr: !0,
                            ret: t,
                            title: a || "验证不通过",
                            desc: "".concat(a || "系统失败，请稍后再试", "[").concat(t, "]"),
                            primary: "重新验证",
                            secondary: "取消验证"
                        }
                    }
                    var H = "index-authorize-data",
                        V = "https://wximg.qq.com/cityservices/res/icon/studentCheck/user_photos_nor.svg",
                        G = [],
                        Y = null;

                    function $() {
                        if (G.length) {
                            clearTimeout(Y), Y = null;
                            var e = G;
                            return G = [], F({
                                url: "/intp/mmdata?action=reportstudentidentity",
                                needMonitorReport: !1,
                                header: {
                                    "CONTENT-TYPE": "application/json"
                                },
                                method: "POST",
                                data: e
                            })
                        }
                    }
                    var Z = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        try {
                            if (e.appid = c.a.miniProgram && c.a.miniProgram.appId || "", console.debug(">>>>>bizReport send request", e), G = G.concat(e), t) return $(isPost);
                            if (G.length > 5) return $();
                            Y || setTimeout((function() {
                                $()
                            }), 2e3)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    };

                    function ee(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, i)
                        }
                        return a
                    }

                    function te(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ee(Object(a), !0).forEach((function(t) {
                                r()(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ee(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }! function() {
                        if (!u) {
                            var e = "";
                            if (wx.getAccountInfoSync) {
                                var t = wx.getAccountInfoSync();
                                e = t.plugin && t.plugin.version, t.miniProgram && t.miniProgram.appId
                            }
                            Object(n.b)({
                                codeType: "studentcheck-plugin",
                                weappVersion: "0.1.5",
                                report: {
                                    uin: o.b.uin || o.b.openId || "",
                                    reportDelay: 3e3,
                                    monitorId: 8376,
                                    streamInterface: "weapp-student-check",
                                    serviceType: 0,
                                    monitor: {
                                        plugin_version: e
                                    }
                                }
                            }), console.log("init plugin version", e), u = !0
                        }
                    }();
                    var ae = {
                        loading: !1,
                        platform: c.a.platform,
                        showDialog: !1,
                        showAuth: !0,
                        startAnimate: !1,
                        checked: !0,
                        showAgreementDialog: !1,
                        _needRefresh: !1,
                        _submitting: !1,
                        height: "auto"
                    };
                    Component({
                        properties: {
                            show: {
                                type: Boolean,
                                value: !1
                            },
                            isQuick: {
                                type: Boolean,
                                value: !1
                            }
                        },
                        options: {
                            styleIsolation: "isolated"
                        },
                        data: te(te({}, ae), {}, {
                            BIND_STATUS: J,
                            complementMiniProgram: {
                                appId: "wxa16657d57059e0f0",
                                path: "/pages/bind/bind?from=plugin_bind&"
                            },
                            auditMiniProgram: {
                                appId: "wxa16657d57059e0f0",
                                path: "/pages/detail/detail?from=plugin_detail&"
                            },
                            failMiniProgram: {
                                appId: "wxa16657d57059e0f0",
                                path: "/pages/bind/bind?from=plugin_fail&"
                            },
                            failGraduateMiniProgram: {
                                appId: "wxa16657d57059e0f0",
                                path: "/pages/index/index?from=plugin_fail_graduate&"
                            },
                            customData: {
                                enterTime: 0,
                                lastBindStatus: J.NOT_EXIST
                            },
                            headimgurl: V
                        }),
                        pageLifetimes: {
                            show: function() {
                                console.log("onShow", this.data._needRefresh), Object(s.f)("component verify page onShow", {
                                    msg: JSON.stringify({
                                        needRefresh: this.data._needRefresh
                                    })
                                }), this.data._needRefresh && this.refreshData()
                            }
                        },
                        lifetimes: {
                            attached: function() {
                                this.addIsUseModel2Path(), Object(s.f)("component verify attached", {
                                    msg: JSON.stringify({
                                        isQuick: this.data.isQuick
                                    })
                                })
                            }
                        },
                        methods: {
                            refreshData: function() {
                                var e = this;
                                this.initData(!1).then((function(t) {
                                    var a = e.data,
                                        i = a.customData,
                                        r = i.lastBindStatus,
                                        n = i.enterTime;
                                    r !== a.bindStatus && (e.data.customData.lastBindStatus = e.data.bindStatus, r === J.FAIL ? e.bizReport(113, {
                                        stayTime: Date.now() - n
                                    }) : r === J.AUDITING ? e.bizReport(114, {
                                        stayTime: Date.now() - n
                                    }) : r !== J.NOT_EXIST && r !== J.UNBIND || e.bizReport(115, {
                                        stayTime: Date.now() - n
                                    }))
                                }))
                            },
                            getAgreementInfo: function(e) {
                                var t = te(te({}, e.authorizeInfo || {}), {}, {
                                    agreementTitle: this.data.isQuick ? e.authorizeInfo.quickAgreementTitle : e.authorizeInfo.agreementTitle,
                                    agreement: this.data.isQuick ? e.authorizeInfo.quickAgreement : e.authorizeInfo.agreement
                                });
                                return delete t.quickAgreement, delete t.quickAgreementTitle, t
                            },
                            initData: function() {
                                var e = this;
                                return console.log("attached"), F({
                                    url: "/intp/studentidentity?action=getuserauthorizeinfo",
                                    data: {
                                        isQuick: this.data.isQuick ? 1 : 0
                                    }
                                }).then((function(t) {
                                    return console.log("initData res", t), /^http/.test(t.headimgurl) || (console.log("headimgurl not http", t.headimgurl), t.headimgurl = V), e.setData(te(te(te({}, t), {}, {
                                        loading: !1
                                    }, e.mergeStatus(t)), {}, {
                                        authorizeInfo: e.getAgreementInfo(t)
                                    })), Object(s.f)("plugin getStudentInfo succ", {
                                        msg: JSON.stringify(te(te({}, e.data), {}, {
                                            authorizeInfo: null
                                        }))
                                    }), t
                                })).catch((function(t) {
                                    console.error("studentidentity get err", t);
                                    var a = t.baseResp,
                                        i = void 0 === a ? {} : a,
                                        r = t.tipContent;
                                    console.error("studentidentity get failWording", X(te(te({}, i), {}, {
                                        tipContent: r
                                    }))), /^http/.test(t.headimgurl) || (console.log("headimgurl not http", t.headimgurl), t.headimgurl = V);
                                    var n = J.FAIL;
                                    return 18011 === i.ret ? (n = J.FAIL, i.ret = 180110) : t.bindStatus && (n = t.bindStatus), e.setData(te(te(te({
                                        isStudent: !1,
                                        loading: !1
                                    }, t), {}, {
                                        bindStatus: n,
                                        cgiWording: X(te(te({}, i), {}, {
                                            tipContent: r
                                        }))
                                    }, e.mergeStatus(t)), {}, {
                                        authorizeInfo: e.getAgreementInfo(t)
                                    })), Object(s.f)("plugin getStudentInfo err", {
                                        msg: JSON.stringify(te(te({}, e.data), {}, {
                                            authorizeInfo: null
                                        }))
                                    }), t
                                }))
                            },
                            addIsUseModel2Path: function() {
                                var e = this,
                                    t = {};
                                ["failGraduateMiniProgram", "failMiniProgram", "auditMiniProgram", "complementMiniProgram"].forEach((function(a) {
                                    t["".concat(a, ".path")] = e.data[a].path.replace(/isUseModel=\d/, "") + "isUseModel=".concat(e.data.isQuick ? 1 : 0)
                                })), this.setData(te({}, t))
                            },
                            mergeStatus: function(e) {
                                return e.bindStatus || (e.bindStatus = J.NOT_EXIST), e.modelBindStatus || (e.modelBindStatus = J.NOT_EXIST), this.data.isQuick && e.bindStatus !== J.BIND && e.bindStatus !== J.FAIL ? e.bindStatus === J.AUDITING && e.modelBindStatus !== J.BIND ? {
                                    bindStatus: e.bindStatus,
                                    xuexinBindStatus: e.bindStatus,
                                    modelBindStatus: e.modelBindStatus
                                } : {
                                    bindStatus: e.modelBindStatus,
                                    xuexinBindStatus: e.bindStatus,
                                    modelBindStatus: e.modelBindStatus
                                } : {
                                    bindStatus: e.bindStatus,
                                    xuexinBindStatus: e.bindStatus,
                                    modelBindStatus: e.modelBindStatus
                                }
                            },
                            onCheckChange: function() {
                                this.setData({
                                    checked: !this.data.checked
                                })
                            },
                            onShowAgreement: function() {
                                this.setData({
                                    showAgreementDialog: !0
                                })
                            },
                            onReject: function() {
                                this.triggerEvent("reject"), this.hideDialog(), this.bizReport(102, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onAuth: function() {
                                var e = this;
                                if (!this.data._submitting) {
                                    this.data._submitting = !0;
                                    var t = this.data,
                                        a = t.isStudent,
                                        i = t.bindStatus;
                                    a && i === J.BIND ? (this.hideDialog(!1), this.bizReport(109, {
                                        stayTime: Date.now() - this.data.customData.enterTime
                                    })) : this.setData({
                                        showAuth: !1,
                                        startAnimate: !0
                                    }, (function() {
                                        e.showAnimate()
                                    })), F({
                                        method: "POST",
                                        url: "/intp/studentidentity?action=submitauthorize",
                                        data: {
                                            isAuthorize: 1,
                                            isQuick: this.data.isQuick ? 1 : 0
                                        }
                                    }).then((function(t) {
                                        e.data._submitting = !1, Object(s.f)("plugin submitauthorize", {
                                            msg: JSON.stringify(t)
                                        }), e.bizReport(101, {
                                            stayTime: Date.now() - e.data.customData.enterTime
                                        });
                                        var i = e.data.bindStatus;
                                        i === J.FAIL ? (e.bizReport(110), e.data.customData.enterTime = Date.now()) : i === J.AUDITING ? (e.bizReport(106), e.data.customData.enterTime = Date.now()) : (e.bizReport(103), e.data.customData.enterTime = Date.now()), e.triggerEvent("auth", {
                                            wx_studentcheck_code: t.wxStudentcheckCode
                                        }), a && i === J.BIND && e.triggerEvent("close")
                                    })).catch((function(t) {
                                        console.error("submitauthorize fail", t), Object(s.f)("plugin submitauthorize err", {
                                            msg: JSON.stringify(t)
                                        }), e.data._submitting = !1
                                    }))
                                }
                            },
                            showAnimate: function() {
                                var e = this;
                                this.animate("#verify-dialog-desc", [{
                                    opacity: 0,
                                    height: this.data.height
                                }, {
                                    opacity: 1,
                                    height: "376px"
                                }], 150, (function() {
                                    console.log("complete"), e.clearAnimation("#verify-dialog-desc"), e.setData({
                                        startAnimate: !1
                                    })
                                }))
                            },
                            onHideDialog: function() {
                                this.hideDialog(), this.bizReport(116, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            hideDialog: function() {
                                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                this.setData(te({
                                    show: !1,
                                    showDialog: !1
                                }, ae)), console.log("hideDialog", this.data), e && this.triggerEvent("close")
                            },
                            bizReport: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                Z(te(te({
                                    entrance: e,
                                    bindStatus: this.data.bindStatus
                                }, t), {}, {
                                    ext1: this.data.isQuick ? 1 : 0,
                                    modelBindStatus: this.data.modelBindStatus,
                                    xuexinBindStatus: this.data.xuexinBindStatus
                                })), t.stayTime && (this.data.customData.stayTime = Date.now())
                            },
                            onTapFailPrimary: function() {
                                console.log("onTapFailPrimary"), this.data._needRefresh = !0, this.bizReport(112, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onTapFailSecondary: function() {
                                this.hideDialog(), this.bizReport(111, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onTapAuditPrimary: function() {
                                this.hideDialog(), this.bizReport(107, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onTapAuditBottomLink: function() {
                                console.log("onTapAuditBottomLink"), this.data._needRefresh = !0, this.bizReport(108, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onTapComplementSecondary: function() {
                                this.hideDialog(), this.bizReport(104, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onTapComplementPrimary: function() {
                                console.log("onTapComplementPrimary"), this.data._needRefresh = !0, this.bizReport(105, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onTapSuccessPrimary: function() {
                                this.hideDialog(), this.bizReport(117, {
                                    stayTime: Date.now() - this.data.customData.enterTime
                                })
                            },
                            onAgreementClose: function() {
                                this.setData({
                                    showAgreementDialog: !1,
                                    showDialog: !1,
                                    show: !1
                                }), this.triggerEvent("close")
                            },
                            onAgreementIconClose: function() {
                                this.setData({
                                    showAgreementDialog: !1,
                                    showDialog: !0,
                                    show: !0
                                })
                            },
                            calcHeight: function() {
                                var e = this;
                                this.createSelectorQuery().select("#verify-dialog-desc").boundingClientRect().exec((function(t) {
                                    t[0] && e.setData({
                                        height: t[0].height + "px"
                                    })
                                }))
                            }
                        },
                        observers: {
                            show: function(e) {
                                var t = this;
                                if (this.setData({
                                        showDialog: e
                                    }), e) {
                                    var a = g.a.getSync(H);
                                    a ? this.setData(te(te({}, a), {}, {
                                        loading: !1
                                    })) : this.setData({
                                        loading: !0
                                    }), this.initData().then((function(e) {
                                        g.a.setSync(H, e), t.calcHeight(), t.data.customData.lastBindStatus = t.data.bindStatus, t.bizReport(100)
                                    })).catch((function() {
                                        t.calcHeight()
                                    })), this.data.customData.enterTime = Date.now()
                                }
                            },
                            isQuick: function() {
                                this.addIsUseModel2Path()
                            }
                        }
                    })
                }
            },
            entries: [
                [20, 0, 1]
            ]
        }]);
    });
    require("components/verify/verify.js");
    global.__wxAppCurrentFile__ = 'plugin-private://wxa16657d57059e0f0/plugin.js';
    global.__wxRouteBegin = true;
    define("plugin.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        module.exports = require("./_commons/0.js")([{
            ids: [7],
            modules: {
                19: function(e, o, s) {},
                27: function(e, o, s) {
                    e.exports = s(19)
                }
            },
            entries: [
                [27, 0]
            ]
        }]);
    });
    require("plugin.js");

    ;
    global.publishDomainComponents({
        "plugin://wxa16657d57059e0f0/verify": "plugin-private://wxa16657d57059e0f0/components/verify/verify",
    });
    module.exports = function() {
        return require('main.js')
    }
});
requirePlugin("plugin://wxa16657d57059e0f0");
/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx5 = function(path, global) {
    if (typeof global === 'undefined') global = {};
    if (typeof __WXML_GLOBAL__ === 'undefined') {
        __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    $gwx('init', global);

    function _(a, b) {
        if (typeof(b) != 'undefined') a.children.push(b);
    }

    function _v(k) {
        if (typeof(k) != 'undefined') return {
            tag: 'virtual',
            'wxKey': k,
            children: []
        };
        return {
            tag: 'virtual',
            children: []
        };
    }

    function _n(tag) {
        return {
            tag: 'wx-' + tag,
            attr: {},
            children: [],
            n: [],
            raw: {},
            generics: {}
        }
    }

    function _p(a, b) {
        b && a.properities.push(b);
    }

    function _s(scope, env, key) {
        return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
    }

    function _wp(m) {
        console.warn("WXMLRT_$gwx5:" + m)
    }

    function _wl(tname, prefix) {
        _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
    }
    $gwn = console.warn;
    $gwl = console.log;

    function $gwh() {
        function x() {}
        x.prototype = {
            hn: function(obj, all) {
                if (typeof(obj) == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | x === '__value__';
                        any2 = any2 | x === '__wxspec__';
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
                }
                return "n";
            },
            nh: function(obj, special) {
                return {
                    __value__: obj,
                    __wxspec__: special ? special : true
                }
            },
            rv: function(obj) {
                return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
            },
            hm: function(obj) {
                if (typeof(obj) == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | x === '__value__';
                        any2 = any2 | x === '__wxspec__';
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                }
                return false;
            }
        }
        return new x;
    }
    wh = $gwh();

    function $gstack(s) {
        var tmp = s.split('\n ' + ' ' + ' ' + ' ');
        for (var i = 0; i < tmp.length; ++i) {
            if (0 == i) continue;
            if (")" === tmp[i][tmp[i].length - 1])
                tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
            else
                tmp[i] = "at anonymous function";
        }
        return tmp.join('\n ' + ' ' + ' ' + ' ');
    }

    function $gwrt(should_pass_type_info) {
        function ArithmeticEv(ops, e, s, g, o) {
            var _f = false;
            var rop = ops[0][1];
            var _a, _b, _c, _d, _aa, _bb;
            switch (rop) {
                case '?:':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '&&':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '||':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '+':
                case '*':
                case '/':
                case '%':
                case '|':
                case '^':
                case '&':
                case '===':
                case '==':
                case '!=':
                case '!==':
                case '>=':
                case '<=':
                case '>':
                case '<':
                case '<<':
                case '>>':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _b = rev(ops[2], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    switch (rop) {
                        case '+':
                            _d = wh.rv(_a) + wh.rv(_b);
                            break;
                        case '*':
                            _d = wh.rv(_a) * wh.rv(_b);
                            break;
                        case '/':
                            _d = wh.rv(_a) / wh.rv(_b);
                            break;
                        case '%':
                            _d = wh.rv(_a) % wh.rv(_b);
                            break;
                        case '|':
                            _d = wh.rv(_a) | wh.rv(_b);
                            break;
                        case '^':
                            _d = wh.rv(_a) ^ wh.rv(_b);
                            break;
                        case '&':
                            _d = wh.rv(_a) & wh.rv(_b);
                            break;
                        case '===':
                            _d = wh.rv(_a) === wh.rv(_b);
                            break;
                        case '==':
                            _d = wh.rv(_a) == wh.rv(_b);
                            break;
                        case '!=':
                            _d = wh.rv(_a) != wh.rv(_b);
                            break;
                        case '!==':
                            _d = wh.rv(_a) !== wh.rv(_b);
                            break;
                        case '>=':
                            _d = wh.rv(_a) >= wh.rv(_b);
                            break;
                        case '<=':
                            _d = wh.rv(_a) <= wh.rv(_b);
                            break;
                        case '>':
                            _d = wh.rv(_a) > wh.rv(_b);
                            break;
                        case '<':
                            _d = wh.rv(_a) < wh.rv(_b);
                            break;
                        case '<<':
                            _d = wh.rv(_a) << wh.rv(_b);
                            break;
                        case '>>':
                            _d = wh.rv(_a) >> wh.rv(_b);
                            break;
                        default:
                            break;
                    }
                    return _c ? wh.nh(_d, "c") : _d;
                    break;
                case '-':
                    _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                    _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                    return _c ? wh.nh(_d, "c") : _d;
                    break;
                case '!':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) == 'h');
                    _d = !wh.rv(_a);
                    return _c ? wh.nh(_d, "c") : _d;
                case '~':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) == 'h');
                    _d = ~wh.rv(_a);
                    return _c ? wh.nh(_d, "c") : _d;
                default:
                    $gwn('unrecognized op' + rop);
            }
        }

        function rev(ops, e, s, g, o, newap) {
            var op = ops[0];
            var _f = false;
            if (typeof newap !== "undefined") o.ap = newap;
            if (typeof(op) === 'object') {
                var vop = op[0];
                var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                switch (vop) {
                    case 2:
                        return ArithmeticEv(ops, e, s, g, o);
                        break;
                    case 4:
                        return rev(ops[1], e, s, g, o, _f);
                        break;
                    case 5:
                        switch (ops.length) {
                            case 2:
                                _a = rev(ops[1], e, s, g, o, _f);
                                return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                return [_a];
                                break;
                            case 1:
                                return [];
                                break;
                            default:
                                _a = rev(ops[1], e, s, g, o, _f);
                                _b = rev(ops[2], e, s, g, o, _f);
                                _a.push(
                                    should_pass_type_info ?
                                    _b :
                                    wh.rv(_b)
                                );
                                return _a;
                                break;
                        }
                        break;
                    case 6:
                        _a = rev(ops[1], e, s, g, o);
                        var ap = o.ap;
                        _ta = wh.hn(_a) === 'h';
                        _aa = _ta ? wh.rv(_a) : _a;
                        o.is_affected |= _ta;
                        if (should_pass_type_info) {
                            if (_aa === null || typeof(_aa) === 'undefined') {
                                return _ta ? wh.nh(undefined, 'e') : undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof(_bb) === 'undefined' ||
                                _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                        } else {
                            if (_aa === null || typeof(_aa) === 'undefined') {
                                return undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof(_bb) === 'undefined' ||
                                _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                return undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return _td ? wh.rv(_d) : _d;
                        }
                    case 7:
                        switch (ops[1][0]) {
                            case 11:
                                o.is_affected |= wh.hn(g) === 'h';
                                return g;
                            case 3:
                                _s = wh.rv(s);
                                _e = wh.rv(e);
                                _b = ops[1][1];
                                if (g && g.f && g.f.hasOwnProperty(_b)) {
                                    _a = g.f;
                                    o.ap = true;
                                } else {
                                    _a = _s && _s.hasOwnProperty(_b) ?
                                        s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                                }
                                if (should_pass_type_info) {
                                    if (_a) {
                                        _ta = wh.hn(_a) === 'h';
                                        _aa = _ta ? wh.rv(_a) : _a;
                                        _d = _aa[_b];
                                        _td = wh.hn(_d) === 'h';
                                        o.is_affected |= _ta || _td;
                                        _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                        return _d;
                                    }
                                } else {
                                    if (_a) {
                                        _ta = wh.hn(_a) === 'h';
                                        _aa = _ta ? wh.rv(_a) : _a;
                                        _d = _aa[_b];
                                        _td = wh.hn(_d) === 'h';
                                        o.is_affected |= _ta || _td;
                                        return wh.rv(_d);
                                    }
                                }
                                return undefined;
                        }
                        break;
                    case 8:
                        _a = {};
                        _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                        return _a;
                        break;
                    case 9:
                        _a = rev(ops[1], e, s, g, o, _f);
                        _b = rev(ops[2], e, s, g, o, _f);

                        function merge(_a, _b, _ow) {
                            var ka, _bbk;
                            _ta = wh.hn(_a) === 'h';
                            _tb = wh.hn(_b) === 'h';
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            for (var k in _bb) {
                                if (_ow || !_aa.hasOwnProperty(k)) {
                                    _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                }
                            }
                            return _a;
                        }
                        var _c = _a
                        var _ow = true
                        if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                            _a = _b
                            _b = _c
                            _ow = false
                        }
                        if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                            var _r = {}
                            return merge(merge(_r, _a, _ow), _b, _ow);
                        } else
                            return merge(_a, _b, _ow);
                        break;
                    case 10:
                        _a = rev(ops[1], e, s, g, o, _f);
                        _a = should_pass_type_info ? _a : wh.rv(_a);
                        return _a;
                        break;
                    case 12:
                        var _r;
                        _a = rev(ops[1], e, s, g, o);
                        if (!o.ap) {
                            return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                        }
                        var ap = o.ap;
                        _b = rev(ops[2], e, s, g, o, _f);
                        o.ap = ap;
                        _ta = wh.hn(_a) === 'h';
                        _tb = _ca(_b);
                        _aa = wh.rv(_a);
                        _bb = wh.rv(_b);
                        snap_bb = $gdc(_bb, "nv_");
                        try {
                            _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                        } catch (e) {
                            e.message = e.message.replace(/nv_/g, "");
                            e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                            e.stack = e.stack.replace(/\snv_/g, " ");
                            e.stack = $gstack(e.stack);
                            if (g.debugInfo) {
                                e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                                console.error(e);
                            }
                            _r = undefined;
                        }
                        return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                }
            } else {
                if (op === 3 || op === 1) return ops[1];
                else if (op === 11) {
                    var _a = '';
                    for (var i = 1; i < ops.length; i++) {
                        var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                        _a += typeof(xp) === 'undefined' ? '' : xp;
                    }
                    return _a;
                }
            }
        }

        function wrapper(ops, e, s, g, o, newap) {
            if (ops[0] == '11182016') {
                g.debugInfo = ops[2];
                return rev(ops[1], e, s, g, o, newap);
            } else {
                g.debugInfo = null;
                return rev(ops, e, s, g, o, newap);
            }
        }
        return wrapper;
    }
    gra = $gwrt(true);
    grb = $gwrt(false);

    function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
        {
            var o = {
                is_affected: false
            };
            var a = gra(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
                console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
            }
        } {
            var o = {
                is_affected: false
            };
            var a = grb(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
                console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
            }
        }
    }

    function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
        var _n = wh.hn(to_iter) === 'n';
        var scope = wh.rv(_s);
        var has_old_item = scope.hasOwnProperty(itemname);
        var has_old_index = scope.hasOwnProperty(indexname);
        var old_item = scope[itemname];
        var old_index = scope[indexname];
        var full = Object.prototype.toString.call(wh.rv(to_iter));
        var type = full[8];
        if (type === 'N' && full[10] === 'l') type = 'X';
        var _y;
        if (_n) {
            if (type === 'A') {
                var r_iter_item;
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    r_iter_item = wh.rv(to_iter[i]);
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                var r_iter_item;
                for (var k in to_iter) {
                    scope[itemname] = to_iter[k];
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    r_iter_item = wh.rv(to_iter[k]);
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++;
                }
            } else if (type === 'S') {
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < to_iter; i++) {
                    scope[itemname] = i;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {}
        } else {
            var r_to_iter = wh.rv(to_iter);
            var r_iter_item, iter_item;
            if (type === 'A') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = r_to_iter[i];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                for (var k in r_to_iter) {
                    iter_item = r_to_iter[k];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++
                }
            } else if (type === 'S') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = wh.nh(r_to_iter[i], 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < r_to_iter; i++) {
                    iter_item = wh.nh(i, 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {}
        }
        if (has_old_item) {
            scope[itemname] = old_item;
        } else {
            delete scope[itemname];
        }
        if (has_old_index) {
            scope[indexname] = old_index;
        } else {
            delete scope[indexname];
        }
    }

    function _ca(o) {
        if (wh.hn(o) == 'h') return true;
        if (typeof o !== "object") return false;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                if (_ca(o[i])) return true;
            }
        }
        return false;
    }

    function _da(node, attrname, opindex, raw, o) {
        var isaffected = false;
        var value = $gdc(raw, "", 2);
        if (o.ap && value && value.constructor === Function) {
            attrname = "$wxs:" + attrname;
            node.attr["$gdc"] = $gdc;
        }
        if (o.is_affected || _ca(raw)) {
            node.n.push(attrname);
            node.raw[attrname] = raw;
        }
        node.attr[attrname] = value;
    }

    function _r(node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }

    function _rz(z, node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }

    function _o(opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return (r && r.constructor === Function) ? undefined : r;
    }

    function _oz(z, opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return (r && r.constructor === Function) ? undefined : r;
    }

    function _1(opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }

    function _1z(z, opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }

    function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1(opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }

    function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1z(z, opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }


    function _m(tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = "";
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != "") $t = "wx-" + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }

    function _mz(z, tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = "";
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != "") $t = "wx-" + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }

    var nf_init = function() {
        if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
            nf_init_Object();
            nf_init_Function();
            nf_init_Array();
            nf_init_String();
            nf_init_Boolean();
            nf_init_Number();
            nf_init_Math();
            nf_init_Date();
            nf_init_RegExp();
        }
        if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
    };
    var nf_init_Object = function() {
        Object.defineProperty(Object.prototype, "nv_constructor", {
            writable: true,
            value: "Object"
        })
        Object.defineProperty(Object.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return "[object Object]"
            }
        })
    }
    var nf_init_Function = function() {
        Object.defineProperty(Function.prototype, "nv_constructor", {
            writable: true,
            value: "Function"
        })
        Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                return this.length;
            },
            set: function() {}
        });
        Object.defineProperty(Function.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return "[function Function]"
            }
        })
    }
    var nf_init_Array = function() {
        Object.defineProperty(Array.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return this.nv_join();
            }
        })
        Object.defineProperty(Array.prototype, "nv_join", {
            writable: true,
            value: function(s) {
                s = undefined == s ? ',' : s;
                var r = "";
                for (var i = 0; i < this.length; ++i) {
                    if (0 != i) r += s;
                    if (null == this[i] || undefined == this[i]) r += '';
                    else if (typeof this[i] == 'function') r += this[i].nv_toString();
                    else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
                    else r += this[i].toString();
                }
                return r;
            }
        })
        Object.defineProperty(Array.prototype, "nv_constructor", {
            writable: true,
            value: "Array"
        })
        Object.defineProperty(Array.prototype, "nv_concat", {
            writable: true,
            value: Array.prototype.concat
        })
        Object.defineProperty(Array.prototype, "nv_pop", {
            writable: true,
            value: Array.prototype.pop
        })
        Object.defineProperty(Array.prototype, "nv_push", {
            writable: true,
            value: Array.prototype.push
        })
        Object.defineProperty(Array.prototype, "nv_reverse", {
            writable: true,
            value: Array.prototype.reverse
        })
        Object.defineProperty(Array.prototype, "nv_shift", {
            writable: true,
            value: Array.prototype.shift
        })
        Object.defineProperty(Array.prototype, "nv_slice", {
            writable: true,
            value: Array.prototype.slice
        })
        Object.defineProperty(Array.prototype, "nv_sort", {
            writable: true,
            value: Array.prototype.sort
        })
        Object.defineProperty(Array.prototype, "nv_splice", {
            writable: true,
            value: Array.prototype.splice
        })
        Object.defineProperty(Array.prototype, "nv_unshift", {
            writable: true,
            value: Array.prototype.unshift
        })
        Object.defineProperty(Array.prototype, "nv_indexOf", {
            writable: true,
            value: Array.prototype.indexOf
        })
        Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
            writable: true,
            value: Array.prototype.lastIndexOf
        })
        Object.defineProperty(Array.prototype, "nv_every", {
            writable: true,
            value: Array.prototype.every
        })
        Object.defineProperty(Array.prototype, "nv_some", {
            writable: true,
            value: Array.prototype.some
        })
        Object.defineProperty(Array.prototype, "nv_forEach", {
            writable: true,
            value: Array.prototype.forEach
        })
        Object.defineProperty(Array.prototype, "nv_map", {
            writable: true,
            value: Array.prototype.map
        })
        Object.defineProperty(Array.prototype, "nv_filter", {
            writable: true,
            value: Array.prototype.filter
        })
        Object.defineProperty(Array.prototype, "nv_reduce", {
            writable: true,
            value: Array.prototype.reduce
        })
        Object.defineProperty(Array.prototype, "nv_reduceRight", {
            writable: true,
            value: Array.prototype.reduceRight
        })
        Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                return this.length;
            },
            set: function(value) {
                this.length = value;
            }
        });
    }
    var nf_init_String = function() {
        Object.defineProperty(String.prototype, "nv_constructor", {
            writable: true,
            value: "String"
        })
        Object.defineProperty(String.prototype, "nv_toString", {
            writable: true,
            value: String.prototype.toString
        })
        Object.defineProperty(String.prototype, "nv_valueOf", {
            writable: true,
            value: String.prototype.valueOf
        })
        Object.defineProperty(String.prototype, "nv_charAt", {
            writable: true,
            value: String.prototype.charAt
        })
        Object.defineProperty(String.prototype, "nv_charCodeAt", {
            writable: true,
            value: String.prototype.charCodeAt
        })
        Object.defineProperty(String.prototype, "nv_concat", {
            writable: true,
            value: String.prototype.concat
        })
        Object.defineProperty(String.prototype, "nv_indexOf", {
            writable: true,
            value: String.prototype.indexOf
        })
        Object.defineProperty(String.prototype, "nv_lastIndexOf", {
            writable: true,
            value: String.prototype.lastIndexOf
        })
        Object.defineProperty(String.prototype, "nv_localeCompare", {
            writable: true,
            value: String.prototype.localeCompare
        })
        Object.defineProperty(String.prototype, "nv_match", {
            writable: true,
            value: String.prototype.match
        })
        Object.defineProperty(String.prototype, "nv_replace", {
            writable: true,
            value: String.prototype.replace
        })
        Object.defineProperty(String.prototype, "nv_search", {
            writable: true,
            value: String.prototype.search
        })
        Object.defineProperty(String.prototype, "nv_slice", {
            writable: true,
            value: String.prototype.slice
        })
        Object.defineProperty(String.prototype, "nv_split", {
            writable: true,
            value: String.prototype.split
        })
        Object.defineProperty(String.prototype, "nv_substring", {
            writable: true,
            value: String.prototype.substring
        })
        Object.defineProperty(String.prototype, "nv_toLowerCase", {
            writable: true,
            value: String.prototype.toLowerCase
        })
        Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
            writable: true,
            value: String.prototype.toLocaleLowerCase
        })
        Object.defineProperty(String.prototype, "nv_toUpperCase", {
            writable: true,
            value: String.prototype.toUpperCase
        })
        Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
            writable: true,
            value: String.prototype.toLocaleUpperCase
        })
        Object.defineProperty(String.prototype, "nv_trim", {
            writable: true,
            value: String.prototype.trim
        })
        Object.defineProperty(String.prototype, "nv_length", {get: function() {
                return this.length;
            },
            set: function(value) {
                this.length = value;
            }
        });
    }
    var nf_init_Boolean = function() {
        Object.defineProperty(Boolean.prototype, "nv_constructor", {
            writable: true,
            value: "Boolean"
        })
        Object.defineProperty(Boolean.prototype, "nv_toString", {
            writable: true,
            value: Boolean.prototype.toString
        })
        Object.defineProperty(Boolean.prototype, "nv_valueOf", {
            writable: true,
            value: Boolean.prototype.valueOf
        })
    }
    var nf_init_Number = function() {
        Object.defineProperty(Number, "nv_MAX_VALUE", {
            writable: false,
            value: Number.MAX_VALUE
        })
        Object.defineProperty(Number, "nv_MIN_VALUE", {
            writable: false,
            value: Number.MIN_VALUE
        })
        Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
            writable: false,
            value: Number.NEGATIVE_INFINITY
        })
        Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
            writable: false,
            value: Number.POSITIVE_INFINITY
        })
        Object.defineProperty(Number.prototype, "nv_constructor", {
            writable: true,
            value: "Number"
        })
        Object.defineProperty(Number.prototype, "nv_toString", {
            writable: true,
            value: Number.prototype.toString
        })
        Object.defineProperty(Number.prototype, "nv_toLocaleString", {
            writable: true,
            value: Number.prototype.toLocaleString
        })
        Object.defineProperty(Number.prototype, "nv_valueOf", {
            writable: true,
            value: Number.prototype.valueOf
        })
        Object.defineProperty(Number.prototype, "nv_toFixed", {
            writable: true,
            value: Number.prototype.toFixed
        })
        Object.defineProperty(Number.prototype, "nv_toExponential", {
            writable: true,
            value: Number.prototype.toExponential
        })
        Object.defineProperty(Number.prototype, "nv_toPrecision", {
            writable: true,
            value: Number.prototype.toPrecision
        })
    }
    var nf_init_Math = function() {
        Object.defineProperty(Math, "nv_E", {
            writable: false,
            value: Math.E
        })
        Object.defineProperty(Math, "nv_LN10", {
            writable: false,
            value: Math.LN10
        })
        Object.defineProperty(Math, "nv_LN2", {
            writable: false,
            value: Math.LN2
        })
        Object.defineProperty(Math, "nv_LOG2E", {
            writable: false,
            value: Math.LOG2E
        })
        Object.defineProperty(Math, "nv_LOG10E", {
            writable: false,
            value: Math.LOG10E
        })
        Object.defineProperty(Math, "nv_PI", {
            writable: false,
            value: Math.PI
        })
        Object.defineProperty(Math, "nv_SQRT1_2", {
            writable: false,
            value: Math.SQRT1_2
        })
        Object.defineProperty(Math, "nv_SQRT2", {
            writable: false,
            value: Math.SQRT2
        })
        Object.defineProperty(Math, "nv_abs", {
            writable: false,
            value: Math.abs
        })
        Object.defineProperty(Math, "nv_acos", {
            writable: false,
            value: Math.acos
        })
        Object.defineProperty(Math, "nv_asin", {
            writable: false,
            value: Math.asin
        })
        Object.defineProperty(Math, "nv_atan", {
            writable: false,
            value: Math.atan
        })
        Object.defineProperty(Math, "nv_atan2", {
            writable: false,
            value: Math.atan2
        })
        Object.defineProperty(Math, "nv_ceil", {
            writable: false,
            value: Math.ceil
        })
        Object.defineProperty(Math, "nv_cos", {
            writable: false,
            value: Math.cos
        })
        Object.defineProperty(Math, "nv_exp", {
            writable: false,
            value: Math.exp
        })
        Object.defineProperty(Math, "nv_floor", {
            writable: false,
            value: Math.floor
        })
        Object.defineProperty(Math, "nv_log", {
            writable: false,
            value: Math.log
        })
        Object.defineProperty(Math, "nv_max", {
            writable: false,
            value: Math.max
        })
        Object.defineProperty(Math, "nv_min", {
            writable: false,
            value: Math.min
        })
        Object.defineProperty(Math, "nv_pow", {
            writable: false,
            value: Math.pow
        })
        Object.defineProperty(Math, "nv_random", {
            writable: false,
            value: Math.random
        })
        Object.defineProperty(Math, "nv_round", {
            writable: false,
            value: Math.round
        })
        Object.defineProperty(Math, "nv_sin", {
            writable: false,
            value: Math.sin
        })
        Object.defineProperty(Math, "nv_sqrt", {
            writable: false,
            value: Math.sqrt
        })
        Object.defineProperty(Math, "nv_tan", {
            writable: false,
            value: Math.tan
        })
    }
    var nf_init_Date = function() {
        Object.defineProperty(Date.prototype, "nv_constructor", {
            writable: true,
            value: "Date"
        })
        Object.defineProperty(Date, "nv_parse", {
            writable: true,
            value: Date.parse
        })
        Object.defineProperty(Date, "nv_UTC", {
            writable: true,
            value: Date.UTC
        })
        Object.defineProperty(Date, "nv_now", {
            writable: true,
            value: Date.now
        })
        Object.defineProperty(Date.prototype, "nv_toString", {
            writable: true,
            value: Date.prototype.toString
        })
        Object.defineProperty(Date.prototype, "nv_toDateString", {
            writable: true,
            value: Date.prototype.toDateString
        })
        Object.defineProperty(Date.prototype, "nv_toTimeString", {
            writable: true,
            value: Date.prototype.toTimeString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleString", {
            writable: true,
            value: Date.prototype.toLocaleString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
            writable: true,
            value: Date.prototype.toLocaleDateString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
            writable: true,
            value: Date.prototype.toLocaleTimeString
        })
        Object.defineProperty(Date.prototype, "nv_valueOf", {
            writable: true,
            value: Date.prototype.valueOf
        })
        Object.defineProperty(Date.prototype, "nv_getTime", {
            writable: true,
            value: Date.prototype.getTime
        })
        Object.defineProperty(Date.prototype, "nv_getFullYear", {
            writable: true,
            value: Date.prototype.getFullYear
        })
        Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
            writable: true,
            value: Date.prototype.getUTCFullYear
        })
        Object.defineProperty(Date.prototype, "nv_getMonth", {
            writable: true,
            value: Date.prototype.getMonth
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
            writable: true,
            value: Date.prototype.getUTCMonth
        })
        Object.defineProperty(Date.prototype, "nv_getDate", {
            writable: true,
            value: Date.prototype.getDate
        })
        Object.defineProperty(Date.prototype, "nv_getUTCDate", {
            writable: true,
            value: Date.prototype.getUTCDate
        })
        Object.defineProperty(Date.prototype, "nv_getDay", {
            writable: true,
            value: Date.prototype.getDay
        })
        Object.defineProperty(Date.prototype, "nv_getUTCDay", {
            writable: true,
            value: Date.prototype.getUTCDay
        })
        Object.defineProperty(Date.prototype, "nv_getHours", {
            writable: true,
            value: Date.prototype.getHours
        })
        Object.defineProperty(Date.prototype, "nv_getUTCHours", {
            writable: true,
            value: Date.prototype.getUTCHours
        })
        Object.defineProperty(Date.prototype, "nv_getMinutes", {
            writable: true,
            value: Date.prototype.getMinutes
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
            writable: true,
            value: Date.prototype.getUTCMinutes
        })
        Object.defineProperty(Date.prototype, "nv_getSeconds", {
            writable: true,
            value: Date.prototype.getSeconds
        })
        Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
            writable: true,
            value: Date.prototype.getUTCSeconds
        })
        Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
            writable: true,
            value: Date.prototype.getMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
            writable: true,
            value: Date.prototype.getUTCMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
            writable: true,
            value: Date.prototype.getTimezoneOffset
        })
        Object.defineProperty(Date.prototype, "nv_setTime", {
            writable: true,
            value: Date.prototype.setTime
        })
        Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
            writable: true,
            value: Date.prototype.setMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
            writable: true,
            value: Date.prototype.setUTCMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_setSeconds", {
            writable: true,
            value: Date.prototype.setSeconds
        })
        Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
            writable: true,
            value: Date.prototype.setUTCSeconds
        })
        Object.defineProperty(Date.prototype, "nv_setMinutes", {
            writable: true,
            value: Date.prototype.setMinutes
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
            writable: true,
            value: Date.prototype.setUTCMinutes
        })
        Object.defineProperty(Date.prototype, "nv_setHours", {
            writable: true,
            value: Date.prototype.setHours
        })
        Object.defineProperty(Date.prototype, "nv_setUTCHours", {
            writable: true,
            value: Date.prototype.setUTCHours
        })
        Object.defineProperty(Date.prototype, "nv_setDate", {
            writable: true,
            value: Date.prototype.setDate
        })
        Object.defineProperty(Date.prototype, "nv_setUTCDate", {
            writable: true,
            value: Date.prototype.setUTCDate
        })
        Object.defineProperty(Date.prototype, "nv_setMonth", {
            writable: true,
            value: Date.prototype.setMonth
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
            writable: true,
            value: Date.prototype.setUTCMonth
        })
        Object.defineProperty(Date.prototype, "nv_setFullYear", {
            writable: true,
            value: Date.prototype.setFullYear
        })
        Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
            writable: true,
            value: Date.prototype.setUTCFullYear
        })
        Object.defineProperty(Date.prototype, "nv_toUTCString", {
            writable: true,
            value: Date.prototype.toUTCString
        })
        Object.defineProperty(Date.prototype, "nv_toISOString", {
            writable: true,
            value: Date.prototype.toISOString
        })
        Object.defineProperty(Date.prototype, "nv_toJSON", {
            writable: true,
            value: Date.prototype.toJSON
        })
    }
    var nf_init_RegExp = function() {
        Object.defineProperty(RegExp.prototype, "nv_constructor", {
            writable: true,
            value: "RegExp"
        })
        Object.defineProperty(RegExp.prototype, "nv_exec", {
            writable: true,
            value: RegExp.prototype.exec
        })
        Object.defineProperty(RegExp.prototype, "nv_test", {
            writable: true,
            value: RegExp.prototype.test
        })
        Object.defineProperty(RegExp.prototype, "nv_toString", {
            writable: true,
            value: RegExp.prototype.toString
        })
        Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                return this.source;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                return this.global;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                return this.ignoreCase;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                return this.multiline;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                return this.lastIndex;
            },
            set: function(v) {
                this.lastIndex = v;
            }
        });
    }
    nf_init();
    var nv_getDate = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(Date);
        return new(Function.prototype.bind.apply(Date, args));
    }
    var nv_getRegExp = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(RegExp);
        return new(Function.prototype.bind.apply(RegExp, args));
    }
    var nv_console = {}
    nv_console.nv_log = function() {
        var res = "WXSRT:";
        for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
        console.log(res);
    }
    var nv_parseInt = parseInt,
        nv_parseFloat = parseFloat,
        nv_isNaN = isNaN,
        nv_isFinite = isFinite,
        nv_decodeURI = decodeURI,
        nv_decodeURIComponent = decodeURIComponent,
        nv_encodeURI = encodeURI,
        nv_encodeURIComponent = encodeURIComponent;

    function $gdc(o, p, r) {
        o = wh.rv(o);
        if (o === null || o === undefined) return o;
        if (typeof o === "string" || typeof o === "boolean" || typeof o === "number") return o;
        if (o.constructor === Object) {
            var copy = {};
            for (var k in o)
                if (Object.prototype.hasOwnProperty.call(o, k))
                    if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                    else copy[p + k] = $gdc(o[k], p, r);
            return copy;
        }
        if (o.constructor === Array) {
            var copy = [];
            for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
            return copy;
        }
        if (o.constructor === Date) {
            var copy = new Date();
            copy.setTime(o.getTime());
            return copy;
        }
        if (o.constructor === RegExp) {
            var f = "";
            if (o.global) f += "g";
            if (o.ignoreCase) f += "i";
            if (o.multiline) f += "m";
            return (new RegExp(o.source, f));
        }
        if (r && typeof o === "function") {
            if (r == 1) return $gdc(o(), undefined, 2);
            if (r == 2) return o;
        }
        return null;
    }
    var nv_JSON = {}
    nv_JSON.nv_stringify = function(o) {
        JSON.stringify(o);
        return JSON.stringify($gdc(o));
    }
    nv_JSON.nv_parse = function(o) {
        if (o === undefined) return undefined;
        var t = JSON.parse(o);
        return $gdc(t, 'nv_');
    }

    function _af(p, a, r, c) {
        p.extraAttr = {
            "t_action": a,
            "t_rawid": r
        };
        if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
    }

    function _ai(i, p, e, me, r, c) {
        var x = _grp(p, e, me);
        if (x) i.push(x);
        else {
            i.push('');
            _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
        }
    }

    function _grp(p, e, me) {
        if (p[0] != '/') {
            var mepart = me.split('/');
            mepart.pop();
            var ppart = p.split('/');
            for (var i = 0; i < ppart.length; i++) {
                if (ppart[i] == '..') mepart.pop();
                else if (!ppart[i] || ppart[i] == '.') continue;
                else mepart.push(ppart[i]);
            }
            p = mepart.join('/');
        }
        if (me[0] == '.' && p[0] == '/') p = '.' + p;
        if (e[p]) return p;
        if (e[p + '.wxml']) return p + '.wxml';
    }

    function _gd(p, c, e, d) {
        if (!c) return;
        if (d[p][c]) return d[p][c];
        for (var x = e[p].i.length - 1; x >= 0; x--) {
            if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
        };
        for (var x = e[p].ti.length - 1; x >= 0; x--) {
            var q = _grp(e[p].ti[x], e, p);
            if (q && d[q][c]) return d[q][c]
        }
        var ii = _gapi(e, p);
        for (var x = 0; x < ii.length; x++) {
            if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
        }
        for (var k = e[p].j.length - 1; k >= 0; k--)
            if (e[p].j[k]) {
                for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                    var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                    if (pp && d[pp][c]) {
                        return d[pp][c]
                    }
                }
            }
    }

    function _gapi(e, p) {
        if (!p) return [];
        if ($gaic[p]) {
            return $gaic[p]
        };
        var ret = [],
            q = [],
            h = 0,
            t = 0,
            put = {},
            visited = {};
        q.push(p);
        visited[p] = true;
        t++;
        while (h < t) {
            var a = q[h++];
            for (var i = 0; i < e[a].ic.length; i++) {
                var nd = e[a].ic[i];
                var np = _grp(nd, e, a);
                if (np && !visited[np]) {
                    visited[np] = true;
                    q.push(np);
                    t++;
                }
            }
            for (var i = 0; a != p && i < e[a].ti.length; i++) {
                var ni = e[a].ti[i];
                var nm = _grp(ni, e, a);
                if (nm && !put[nm]) {
                    put[nm] = true;
                    ret.push(nm);
                }
            }
        }
        $gaic[p] = ret;
        return ret;
    }
    var $ixc = {};

    function _ic(p, ent, me, e, s, r, gg) {
        var x = _grp(p, ent, me);
        ent[me].j.push(x);
        if (x) {
            if ($ixc[x]) {
                _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                return;
            }
            $ixc[x] = true;
            try {
                ent[x].f(e, s, r, gg)
            } catch (e) {}
            $ixc[x] = false;
        } else {
            _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
        }
    }

    function _w(tn, f, line, c) {
        _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
    }

    function _ev(dom) {
        var changed = false;
        delete dom.properities;
        delete dom.n;
        if (dom.children) {
            do {
                changed = false;
                var newch = [];
                for (var i = 0; i < dom.children.length; i++) {
                    var ch = dom.children[i];
                    if (ch.tag == 'virtual') {
                        changed = true;
                        for (var j = 0; ch.children && j < ch.children.length; j++) {
                            newch.push(ch.children[j]);
                        }
                    } else {
                        newch.push(ch);
                    }
                }
                dom.children = newch;
            } while (changed);
            for (var i = 0; i < dom.children.length; i++) {
                _ev(dom.children[i]);
            }
        }
        return dom;
    }

    function _tsd(root) {
        if (root.tag == "wx-wx-scope") {
            root.tag = "virtual";
            root.wxCkey = "11";
            root['wxScopeData'] = root.attr['wx:scope-data'];
            delete root.n;
            delete root.raw;
            delete root.generics;
            delete root.attr;
        }
        for (var i = 0; root.children && i < root.children.length; i++) {
            _tsd(root.children[i]);
        }
        return root;
    }

    var e_ = {}
    if (typeof(global.entrys) === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {}
    if (typeof(global.defines) === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {}
    if (typeof(global.modules) === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {}
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx5 || [];

    function gz$gwx5_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx5_1) return __WXML_GLOBAL__.ops_cached.$gwx5_1
        __WXML_GLOBAL__.ops_cached.$gwx5_1 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'buttons'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'type']
                ],
                [1, 'error']
            ])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'type']
                ],
                [1, 'ok']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx5_1);
        return __WXML_GLOBAL__.ops_cached.$gwx5_1
    }

    function gz$gwx5_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx5_2) return __WXML_GLOBAL__.ops_cached.$gwx5_2
        __WXML_GLOBAL__.ops_cached.$gwx5_2 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'page-content'])
            Z([3, 'face-verify-dialog'])
            Z([3, 'user-info-dialog'])
        })(__WXML_GLOBAL__.ops_cached.$gwx5_2);
        return __WXML_GLOBAL__.ops_cached.$gwx5_2
    }

    function gz$gwx5_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx5_3) return __WXML_GLOBAL__.ops_cached.$gwx5_3
        __WXML_GLOBAL__.ops_cached.$gwx5_3 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'buttons'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'type']
                ],
                [1, 'error']
            ])
            Z([
                [2, '||'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'ok']
                ],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'cancle']
                ]
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx5_3);
        return __WXML_GLOBAL__.ops_cached.$gwx5_3
    }

    function gz$gwx5_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx5_4) return __WXML_GLOBAL__.ops_cached.$gwx5_4
        __WXML_GLOBAL__.ops_cached.$gwx5_4 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'page-content'])
            Z([3, 'onStudentVerifyAuth'])
            Z([3, 'onStudentVerifyClosed'])
            Z([3, 'onStudentVerifyReject'])
            Z([1, true])
            Z([
                [7],
                [3, 'showStudentVerifyDialog']
            ])
            Z([3, 'verify-dialog'])
            Z([3, 'user-info-dialog'])
            Z([3, 'verify-dialog success-dialog'])
            Z([3, '318'])
            Z([3, 'verify-success-dialog'])
            Z([
                [2, '!'],
                [
                    [2, '!'],
                    [
                        [7],
                        [3, 'backgroundImage']
                    ]
                ]
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx5_4);
        return __WXML_GLOBAL__.ops_cached.$gwx5_4
    }
    __WXML_GLOBAL__.ops_set.$gwx5 = z;
    __WXML_GLOBAL__.ops_init.$gwx5 = true;
    var nv_require = function() {
        var nnm = {};
        var nom = {};
        return function(n) {
            if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
            return function() {
                if (!nnm[n]) return undefined;
                try {
                    if (!nom[n]) nom[n] = nnm[n]();
                    return nom[n];
                } catch (e) {
                    e.message = e.message.replace(/nv_/g, '');
                    var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                    e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                    e.stack = e.stack.replace(/\snv_/g, ' ');
                    e.stack = $gstack(e.stack);
                    e.stack += '\n    at ' + n.substring(2);
                    console.error(e);
                }
            }
        }
    }()
    var x = ['./pages/sub-verify/face-verify-result/face-verify-result.wxml', './pages/sub-verify/face-verify/face-verify.wxml', './pages/sub-verify/student-verify-result/student-verify-result.wxml', './pages/sub-verify/student-verify/student-verify.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
        var z = gz$gwx5_1()
        var oB = _n('view')
        _rz(z, oB, 'class', 0, e, s, gg)
        var xC = _v()
        _(oB, xC)
        if (_oz(z, 1, e, s, gg)) {
            xC.wxVkey = 1
        }
        var oD = _v()
        _(oB, oD)
        if (_oz(z, 2, e, s, gg)) {
            oD.wxVkey = 1
        }
        xC.wxXCkey = 1
        oD.wxXCkey = 1
        _(r, oB)
        return r
    }
    e_[x[0]] = {
        f: m0,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[1]] = {}
    var m1 = function(e, s, r, gg) {
        var z = gz$gwx5_2()
        var cF = _n('view')
        _rz(z, cF, 'class', 0, e, s, gg)
        var hG = _n('message-dialog')
        _rz(z, hG, 'id', 1, e, s, gg)
        _(cF, hG)
        var oH = _n('slider-message-dialog')
        _rz(z, oH, 'id', 2, e, s, gg)
        _(cF, oH)
        _(r, cF)
        return r
    }
    e_[x[1]] = {
        f: m1,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[2]] = {}
    var m2 = function(e, s, r, gg) {
        var z = gz$gwx5_3()
        var oJ = _n('view')
        _rz(z, oJ, 'class', 0, e, s, gg)
        var lK = _v()
        _(oJ, lK)
        if (_oz(z, 1, e, s, gg)) {
            lK.wxVkey = 1
        }
        var aL = _v()
        _(oJ, aL)
        if (_oz(z, 2, e, s, gg)) {
            aL.wxVkey = 1
        }
        lK.wxXCkey = 1
        aL.wxXCkey = 1
        _(r, oJ)
        return r
    }
    e_[x[2]] = {
        f: m2,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[3]] = {}
    var m3 = function(e, s, r, gg) {
        var z = gz$gwx5_4()
        var eN = _n('view')
        _rz(z, eN, 'class', 0, e, s, gg)
        var oP = _mz(z, 'studentVerify', ['bind:auth', 1, 'bind:close', 1, 'bind:reject', 2, 'isQuick', 3, 'show', 4], [], e, s, gg)
        _(eN, oP)
        var xQ = _mz(z, 'slider-message-dialog', ['class', 6, 'id', 1], [], e, s, gg)
        _(eN, xQ)
        var oR = _mz(z, 'slider-message-dialog', ['class', 8, 'height', 1, 'id', 2], [], e, s, gg)
        _(eN, oR)
        var bO = _v()
        _(eN, bO)
        if (_oz(z, 11, e, s, gg)) {
            bO.wxVkey = 1
        }
        bO.wxXCkey = 1
        _(r, eN)
        return r
    }
    e_[x[3]] = {
        f: m3,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    if (path && e_[path]) {
        return function(env, dd, global) {
            $gwxc = 0;
            var root = {
                "tag": "wx-page"
            };
            root.children = []
            var main = e_[path].f
            if (typeof global === "undefined") global = {};
            global.f = $gdc(f_[path], "", 1);
            try {
                main(env, {}, root, global);
                _tsd(root)
            } catch (err) {
                console.log(err)
            }
            return root;
        }
    }
}
__wxAppCode__['pages/sub-verify/face-verify-result/face-verify-result.json'] = {
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-verify/face-verify-result/face-verify-result.wxml'] = [$gwx5, './pages/sub-verify/face-verify-result/face-verify-result.wxml'];
else __wxAppCode__['pages/sub-verify/face-verify-result/face-verify-result.wxml'] = $gwx5('./pages/sub-verify/face-verify-result/face-verify-result.wxml');
__wxAppCode__['pages/sub-verify/face-verify/face-verify.json'] = {
    "usingComponents": {
        "message-dialog": "../../../components/message-dialog/message-dialog",
        "slider-message-dialog": "../../../components/slider-message-dialog/slider-message-dialog"
    },
    "navigationBarTitleText": "腾讯会议",
    "disableScroll": true,
    "backgroundColor": "#FFFFFF"
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-verify/face-verify/face-verify.wxml'] = [$gwx5, './pages/sub-verify/face-verify/face-verify.wxml'];
else __wxAppCode__['pages/sub-verify/face-verify/face-verify.wxml'] = $gwx5('./pages/sub-verify/face-verify/face-verify.wxml');
__wxAppCode__['pages/sub-verify/student-verify-result/student-verify-result.json'] = {
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-verify/student-verify-result/student-verify-result.wxml'] = [$gwx5, './pages/sub-verify/student-verify-result/student-verify-result.wxml'];
else __wxAppCode__['pages/sub-verify/student-verify-result/student-verify-result.wxml'] = $gwx5('./pages/sub-verify/student-verify-result/student-verify-result.wxml');
__wxAppCode__['pages/sub-verify/student-verify/student-verify.json'] = {
    "usingComponents": {
        "slider-message-dialog": "../../../components/slider-message-dialog/slider-message-dialog",
        "message-dialog": "../../../components/message-dialog/message-dialog",
        "studentVerify": "plugin://wxa16657d57059e0f0/verify"
    },
    "navigationBarTitleText": "腾讯会议",
    "backgroundColor": "#FFFFFF"
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-verify/student-verify/student-verify.wxml'] = [$gwx5, './pages/sub-verify/student-verify/student-verify.wxml'];
else __wxAppCode__['pages/sub-verify/student-verify/student-verify.wxml'] = $gwx5('./pages/sub-verify/student-verify/student-verify.wxml');

define("pages/sub-verify/constants.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.VERIFY_SCENE = exports.VERIFY_RESULT_TYPE = exports.VERIFY_RESULT_MSG = exports.UPDATE_STATUS = exports.OLD_API = exports.NEW_API = exports.MSG_ERROR_INVALID_NAME = exports.MSG_ERROR_INVALID_IDCARD = exports.MSG_ERROR_EMPTY_NAME = exports.MAX_NAME_LENGTH = exports.FACE_VERIFY_VERSION = exports.FACE_VERIFY_BIZ_MAP = exports.BIND_STATUS = void 0;
    exports.FACE_VERIFY_BIZ_MAP = {
        UNKNOWN: "-1",
        APP_MOBILE: "1",
        MP_WEBVIEW: "2"
    }, exports.MSG_ERROR_EMPTY_NAME = "姓名不能为空", exports.MSG_ERROR_INVALID_NAME = "请输入您的真实姓名", exports.MSG_ERROR_INVALID_IDCARD = "请输入正确的身份证", exports.MAX_NAME_LENGTH = 64, exports.FACE_VERIFY_VERSION = "1.0.0", exports.BIND_STATUS = {
        NOT_BOUND: 0,
        BOUND: 1
    }, exports.VERIFY_RESULT_TYPE = {
        OK: "ok",
        INFO: "info",
        ERROR: "error"
    }, exports.VERIFY_RESULT_MSG = {
        MSG_VERIFY_OK: "已通过人脸识别验证",
        MSG_VERIFY_OK_DETAIL: "请在电脑上继续操作",
        MSG_VERIFY_OK_APP_DETAIL: "请返回腾讯会议继续操作",
        MSG_VERIFY_ERROR: "未通过人脸识别验证"
    }, exports.UPDATE_STATUS = {
        UN_SCAN_QR_CODE: 1,
        SCAN_QR_CODE: 2,
        VERIFY_SUCCESS: 3,
        VERIFY_ERROR: 4
    }, exports.VERIFY_SCENE = {
        UN_BLOCK: "1",
        COMMON_VERIFY: "2"
    }, exports.NEW_API = {
        GET_BIZ_TOKEN: "/user-logic/detect/get-biz-token",
        GET_DETECT_INFO: "/user-logic/detect/get-detect-info"
    }, exports.OLD_API = {
        GET_BIZ_TOKEN: "/account/mini-program/get-biz-token",
        GET_DETECT_INFO: "/account/mini-program/get-detect-info"
    };
});
define("pages/sub-verify/utils.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.isNameValid = exports.isIDCardValid = void 0;
    exports.isNameValid = function(e) {
        return /^[\u4e00-\u9fa5]+(·?[\u4e00-\u9fa5]+){1,64}$/.test(e)
    }, exports.isIDCardValid = function(e) {
        if (!/^[1-9]\d{5}((19\d{2})|([2-9]\d{3}))((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}[0-9xX]$/.test(e)) return "身份证号码有误";
        var t = e.substr(6, 4),
            r = e.substr(10, 2),
            a = e.substr(12, 2),
            s = Date.parse("".concat(r, "-").concat(a, "-").concat(t)),
            i = Date.parse(new Date),
            n = new Date(t, r, 0).getDate();
        if (s > i || a > n) return "出生日期有误";
        for (var o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], u = e.split(""), p = 0, d = 0; d < 17; d++) p += parseInt(u[d], 10) * parseInt(o[d], 10);
        return u[17].toUpperCase() !== ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][p % 11].toUpperCase() ? "身份证校验失败，请检查" : ""
    };
});
__wxRoute = 'pages/sub-verify/face-verify/face-verify';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-verify/face-verify/face-verify.js';
define("pages/sub-verify/face-verify/face-verify.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator");
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var r, n = require("../utils"),
        a = (r = require("../../../utils/loggers/index")) && r.__esModule ? r : {
            default: r
        },
        i = require("../constants");
    var o = require("../../../utils/util.js"),
        c = require("../../../clients/AegisClient"),
        s = require("../../../clients/BeaconClient"),
        u = require("../../../actions/AppAction"),
        f = require("../../../stores/AppStore"),
        d = new a.default({
            pageName: "face-verify",
            aegisLogEnable: !0,
            wxLogEnable: !0
        });
    Page({
        data: {
            MSG_START_VERIFY: "开始人脸识别认证",
            MSG_STARTING: "准备认证...",
            MSG_TEXT1: "需要通过人脸识别认证",
            name: "",
            idcard: "",
            nameErrmsg: "",
            idcardErrmsg: "",
            verifyErrmsg: "",
            protocolAgreed: !1,
            focusArea: "",
            isDoing: !1,
            bzFrom: i.FACE_VERIFY_BIZ_MAP.UNKNOWN
        },
        onLoad: function(e) {
            var t = this;
            u.pageExposed("face-verify");
            var r = e.f,
                n = void 0 === r ? i.FACE_VERIFY_BIZ_MAP.UNKNOWN : r;
            if (this.setData({
                    bzFrom: n
                }), d.info("face-verify onLoad with options: ".concat(JSON.stringify(e))), this.msgDialog = this.selectComponent("#face-verify-dialog").component, this.userInfoDialog = this.selectComponent("#user-info-dialog"), e.scene) {
                var a = decodeURIComponent(e.scene).split("&");
                this.param = {};
                for (var c = 0; c < a.length; c++) this.param[a[c].split("=")[0]] = unescape(a[c].split("=")[1]);
                d.info("face verify launched by mp qrcode, got param: ".concat(JSON.stringify(this.param))), this.param.t || d.error("'t'(token) NOT found"), this.param.i || (d.warn("'i'(instanceID) NOT found, set to default -1"), this.param.i = "-1")
            } else this.param = {}, d.warn("Warning: face verify launched under invalid scene, params = ".concat(JSON.stringify(e)));
            wx.getSystemInfo({
                success: function(e) {
                    d.info("systemInfo: ".concat(JSON.stringify(e))), t.sysInfo = e, t.isAndroid = o.isAndroid(t.sysInfo)
                }
            }), this.param.b ? (this.getVerifyMode(), this.updateVerifyStatus(i.UPDATE_STATUS.SCAN_QR_CODE)) : this.checkBoundWXStatus()
        },
        onReady: function() {
            this.beaconReport("mp_face_verify_exposure", {
                ins: o.getReadableInstanceName(this.param.i)
            })
        },
        getVerifyMode: function() {
            var e = this,
                t = f.getCurrentDomain(),
                r = t.includes("cicd.tencentmeeting") ? "https://test.txmeeting.tencent.com" : t,
                n = "".concat(r).concat("/web-service/web-config?group=webConfig.mpWeMeet.faceCertType&key=certTypeText");
            wx.request({
                url: n,
                method: "GET",
                data: {},
                success: function(t) {
                    var r = t.data,
                        n = r.data;
                    0 === r.code && n && Object.keys(n).forEach((function(t) {
                        t === e.param.b && n[t].title && e.setData({
                            MSG_TEXT1: n[t].title
                        })
                    }))
                }
            })
        },
        updateVerifyStatus: function(e) {
            var t = this;
            if (this.param.b) {
                var r = {
                        status: e
                    },
                    n = "";
                this.param.b === i.VERIFY_SCENE.UN_BLOCK ? (r.appeal_rst_code = this.param.t, n = "".concat(f.getHttpCgi(), "/user-logic/detect/update-appeal-status")) : (r.verify_rst_code = this.param.t, n = "".concat(f.getHttpCgi(), "/user-logic/detect/update-verify-status")), wx.request({
                    url: n,
                    method: "POST",
                    data: r,
                    success: function() {
                        d.info("detect/update-status 调用成功, appeal_rst_code: ".concat(t.param.t))
                    },
                    fail: function() {
                        d.error("detect/update-status 调用失败, appeal_rst_code: ".concat(t.param.t))
                    }
                })
            }
        },
        checkBoundWXStatus: function() {
            var e = this;
            wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), this.doWXLogin().then((function(t) {
                return e.getBoundWXStatus(t)
            })).then((function() {
                wx.hideToast()
            })).catch((function(t) {
                wx.hideToast(), e.redirectToResultPage({
                    type: i.VERIFY_RESULT_TYPE.INFO,
                    mainMsg: t
                })
            }))
        },
        doWXLogin: function() {
            var e = this;
            return new Promise((function(t, r) {
                var n = (new Date).getTime();
                wx.login({
                    timeout: 1e4,
                    success: function(a) {
                        var i = (new Date).getTime() - n;
                        a && a.code ? (e.beaconReport("mp_face_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: i,
                            ret: "Y"
                        }), e.code = a.code, e.codeExpire = (new Date).getTime() + 24e4, d.info("wx.login done, code will expire at ".concat(new Date(e.codeExpire))), t(a.code)) : (d.error("wx.login success but cannot get code from response. response = ".concat(JSON.stringify(a))), e.beaconReport("mp_face_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: i,
                            ret: "N1"
                        }), r("wx.login failed(-1)"))
                    },
                    fail: function(t) {
                        var a = (new Date).getTime() - n;
                        d.warn("wx.login failed because: ".concat(t.errMsg)), e.beaconReport("mp_face_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: a,
                            ret: "N2"
                        }), r("wx.login failed(-2)")
                    }
                })
            }))
        },
        getBoundWXStatus: function(e) {
            var t = this;
            return new Promise((function(r, n) {
                var a = (new Date).getTime();
                wx.request({
                    url: "".concat(f.getHttpCgi(), "/account/mini-program/check-scan-code"),
                    method: "POST",
                    data: {
                        auth_code: e,
                        token: t.param.t
                    },
                    success: function(e) {
                        var i = (e || {}).data || {},
                            o = (new Date).getTime() - a,
                            s = i.code,
                            u = i.message,
                            f = i.nonce;
                        if (0 !== s) {
                            var m = s ? "".concat(s) : "N1";
                            t.beaconReport("mp_face_verify_cgi", {
                                cmd: "getBoundWXStatus",
                                time_cost: o,
                                ret: m
                            });
                            var g = u || "查询绑定状态失败(-1)";
                            return d.error("step1: getBoundWXStatus error, code = ".concat(s, ", message = ").concat(u, ", nonce = ").concat(f)), void n(g)
                        }
                        d.info("step1: getBoundWXStatus OK"), t.beaconReport("mp_face_verify_cgi", {
                            cmd: "getBoundWXStatus",
                            time_cost: o,
                            ret: "Y"
                        });
                        var p = i.data || {},
                            l = p.bind_status,
                            _ = void 0 === l ? 0 : l,
                            v = p.open_id,
                            h = void 0 === v ? "" : v;
                        t.openID = h, h ? c.setConfig({
                            uin: h
                        }) : d.warn("step1: getBoundWXStatus, no openID got from server. response: ".concat(JSON.stringify(e))), t.BindStatus = _, r({
                            BindStatus: _
                        })
                    },
                    fail: function(e) {
                        var r = (new Date).getTime() - a;
                        t.beaconReport("mp_face_verify_cgi", {
                            cmd: "getBoundWXStatus",
                            time_cost: r,
                            ret: "N2"
                        }), d.error("step1: getBoundWXStatus failed: ".concat(e.errMsg)), n(e.errMsg || "查询绑定状态失败(-2)")
                    }
                })
            }))
        },
        onNameInput: function(e) {
            var t = !!e.detail.value.trim();
            t && !this.data.showNameClearIcon ? this.setData({
                showNameClearIcon: !0,
                nameErrmsg: ""
            }) : !t && this.data.showNameClearIcon ? this.setData({
                showNameClearIcon: !1,
                nameErrmsg: ""
            }) : this.setData({
                nameErrmsg: ""
            })
        },
        onIDCardInput: function(e) {
            var t = e.detail.value.replace(/[^\dxX]/g, ""),
                r = !!t;
            r && !this.data.showIDClearIcon ? this.setData({
                showIDClearIcon: !0,
                idcard: t,
                idcardErrmsg: ""
            }) : !r && this.data.showIDClearIcon ? this.setData({
                showIDClearIcon: !1,
                idcard: t,
                idcardErrmsg: ""
            }) : (e.detail.value, this.setData({
                idcard: t,
                idcardErrmsg: ""
            }))
        },
        onFocus: function(e) {
            this.setData({
                focusArea: e.currentTarget.id
            })
        },
        onBlurName: function(e) {
            var t = e.detail.value;
            t.trim() || (t = ""), this.nameCleared && (this.nameCleared = !1, t = "");
            var r = !(t = o.truncateText(t, i.MAX_NAME_LENGTH)) || (0, n.isNameValid)(t) ? "" : i.MSG_ERROR_INVALID_NAME;
            this.setData({
                name: t,
                nameErrmsg: r,
                focusArea: ""
            })
        },
        onBlurID: function(e) {
            var t = e.detail.value;
            t.trim() || (t = ""), this.idCleared && (this.idCleared = !1, t = ""), this.setData({
                idcard: t,
                idcardErrmsg: (0, n.isIDCardValid)(t) ? i.MSG_ERROR_INVALID_IDCARD : "",
                focusArea: ""
            })
        },
        clearName: function() {
            this.nameCleared = !0, this.setData({
                name: "",
                nameErrmsg: "",
                showNameClearIcon: !1
            })
        },
        clearIDCard: function() {
            this.idCleared = !0, this.setData({
                idcard: "",
                idcardErrmsg: "",
                showIDClearIcon: !1
            })
        },
        onStartVerifyTapped: function() {
            var r = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!r.data.isDoing) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return r.clearVerifyErrmsg(), r.disableStartVerifyButton(), e.prev = 4, e.next = 7, r.getBizToken();
                        case 7:
                            e.next = 15;
                            break;
                        case 9:
                            return e.prev = 9, e.t0 = e.catch(4), d.error("start verify failed because: ".concat(e.t0)), r.setVerifyErrmsg(e.t0), r.enableStartVerifyButton(), e.abrupt("return");
                        case 15:
                            r.enableStartVerifyButton(), r.startVerify().then((function() {
                                return r.checkVerifyResult()
                            })).then((function(e) {
                                var t = e.requestID;
                                d.info("verify passed! request_id: ".concat(t));
                                var n = r.data.bzFrom === i.FACE_VERIFY_BIZ_MAP.APP_MOBILE ? i.VERIFY_RESULT_MSG.MSG_VERIFY_OK_APP_DETAIL : i.VERIFY_RESULT_MSG.MSG_VERIFY_OK_DETAIL;
                                r.goToResultPage({
                                    type: i.VERIFY_RESULT_TYPE.OK,
                                    mainMsg: i.VERIFY_RESULT_MSG.MSG_VERIFY_OK,
                                    detailMsg: n
                                })
                            })).catch((function(e) {
                                d.error("verify failed: ".concat(e)), r.goToResultPage({
                                    type: i.VERIFY_RESULT_TYPE.ERROR,
                                    mainMsg: i.VERIFY_RESULT_MSG.MSG_VERIFY_ERROR,
                                    detailMsg: e
                                })
                            }));
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [4, 9]
                ])
            })))()
        },
        getBizToken: function() {
            var e = this;
            return new Promise((function(t, r) {
                var n = (new Date).getTime();
                e.BizToken = "";
                var a = {
                        token: e.param.t,
                        name: e.data.name,
                        idcard: e.data.idcard
                    },
                    o = i.OLD_API.GET_BIZ_TOKEN;
                e.param.b && (a.business_type = e.param.b, o = i.NEW_API.GET_BIZ_TOKEN), wx.request({
                    url: "".concat(f.getHttpCgi()).concat(o),
                    method: "POST",
                    data: a,
                    success: function(a) {
                        e.code = "";
                        var i = (a || {}).data || {},
                            o = (new Date).getTime() - n,
                            c = i.code,
                            s = i.message,
                            u = i.nonce;
                        if (0 !== c) {
                            var f = c ? "".concat(c) : "N1";
                            e.beaconReport("mp_face_verify_cgi", {
                                cmd: "getBizToken",
                                time_cost: o,
                                ret: f
                            });
                            var m = s || "核验失败(-1)";
                            return d.error("step2: getBizToken error, code = ".concat(c, ", message = ").concat(s, ", nonce = ").concat(u)), void r(m)
                        }
                        var g = i.data || {},
                            p = g.biz_token,
                            l = g.request_id;
                        if (!p) return e.beaconReport("mp_face_verify_cgi", {
                            cmd: "getBizToken",
                            time_cost: o,
                            ret: "N2"
                        }), d.error("step2: getBizToken results in empty. response: ".concat(JSON.stringify(a))), void r("核验失败(-2)");
                        d.info("step2: getBizToken OK"), e.beaconReport("mp_face_verify_cgi", {
                            cmd: "getBizToken",
                            time_cost: o,
                            ret: "Y"
                        }), e.BizToken = p, e.RequestId = l, t({
                            BizToken: p,
                            RequestId: l
                        })
                    },
                    fail: function(t) {
                        e.code = "";
                        var a = (new Date).getTime() - n;
                        e.beaconReport("mp_face_verify_cgi", {
                            cmd: "getBizToken",
                            time_cost: a,
                            ret: "N3"
                        }), d.error("step2: getBizToken failed: ".concat(t.errMsg)), r("核验失败(-3)")
                    }
                })
            }))
        },
        startVerify: function() {
            var r = this;
            return new Promise(function() {
                var n = t(e().mark((function n(a, i) {
                    var o;
                    return e().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                d.info("step3: start verify..."), o = (new Date).getTime(), require.async("../../../verify_mpsdk/main").then(function() {
                                    var n = t(e().mark((function t(n) {
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, n.init();
                                                case 2:
                                                    wx.startVerify({
                                                        data: {
                                                            token: r.BizToken
                                                        },
                                                        success: function(e) {
                                                            wx.showLoading({
                                                                title: "加载中...",
                                                                mask: !0
                                                            }), setTimeout((function() {
                                                                wx.hideLoading();
                                                                var t = (new Date).getTime() - o;
                                                                r.beaconReport("mp_face_verify_cgi", {
                                                                    cmd: "wx.startVerify",
                                                                    time_cost: t,
                                                                    ret: "Y"
                                                                }), d.info("step3: start verify done, ready to check result. we got verified token: ".concat(e.BizToken)), a(e)
                                                            }), 500)
                                                        },
                                                        fail: function(e) {
                                                            wx.showLoading({
                                                                title: "加载中...",
                                                                mask: !0
                                                            }), setTimeout((function() {
                                                                wx.hideLoading();
                                                                var t = (new Date).getTime() - o;
                                                                r.beaconReport("mp_face_verify_cgi", {
                                                                    cmd: "wx.startVerify",
                                                                    time_cost: t,
                                                                    ret: "N1"
                                                                });
                                                                var n = e.ErrorMsg || "核验失败(-4)";
                                                                d.error("step3: start verify failed, aborted. error: ".concat(n)), i(n)
                                                            }), 500)
                                                        }
                                                    });
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }());
                            case 3:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }())
        },
        checkVerifyResult: function() {
            var e = this;
            return new Promise((function(t, r) {
                d.info("step4: checking verify result... ");
                var n = (new Date).getTime(),
                    a = {
                        biz_token: e.BizToken
                    };
                e.BindStatus === i.BIND_STATUS.NOT_BOUND && e.UserInfo && (a.nick_name = e.UserInfo.nickName, a.avatar = e.UserInfo.avatarUrl);
                var o = i.OLD_API.GET_DETECT_INFO;
                e.param.b && (a.business_type = e.param.b, o = i.NEW_API.GET_DETECT_INFO), wx.request({
                    url: "".concat(f.getHttpCgi()).concat(o),
                    method: "POST",
                    data: a,
                    success: function(a) {
                        var i = (a || {}).data || {},
                            o = (new Date).getTime() - n,
                            c = (i.data || {}).request_id,
                            s = void 0 === c ? "" : c,
                            u = i.code,
                            f = i.message,
                            m = i.nonce;
                        if (0 !== u) {
                            var g = u ? "".concat(u) : "N1";
                            e.beaconReport("mp_face_verify_cgi", {
                                cmd: "checkVerifyResult",
                                time_cost: o,
                                ret: g
                            });
                            var p = f || "核验失败(-5)";
                            return d.error("step4: check verify result failed with\n              code = ".concat(u, ",\n              message = ").concat(f, ",\n              nonce = ").concat(m, ",\n              request_id = ").concat(s, "\n            ")), void r(p)
                        }
                        d.info("step4: check verify result passed!"), e.beaconReport("mp_face_verify_cgi", {
                            cmd: "checkVerifyResult",
                            time_cost: o,
                            ret: "Y"
                        }), t({
                            requestID: s
                        })
                    },
                    fail: function(t) {
                        var a = (new Date).getTime() - n;
                        e.beaconReport("mp_face_verify_cgi", {
                            cmd: "checkVerifyResult",
                            time_cost: a,
                            ret: "N3"
                        });
                        var i = t.errMsg || "核验失败(-6)";
                        d.error("step4: check verify result failed: ".concat(i)), r(i)
                    }
                })
            }))
        },
        goToResultPage: function(e) {
            var t = encodeURIComponent(JSON.stringify(e)),
                r = this.data.bzFrom;
            wx.navigateTo({
                url: "../face-verify-result/face-verify-result?res=".concat(t, "&f=").concat(r)
            })
        },
        redirectToResultPage: function(e) {
            var t = encodeURIComponent(JSON.stringify(e)),
                r = this.data.bzFrom;
            wx.redirectTo({
                url: "../face-verify-result/face-verify-result?res=".concat(t, "&f=").concat(r)
            })
        },
        enableStartVerifyButton: function() {
            this.setData({
                isDoing: !1
            })
        },
        disableStartVerifyButton: function() {
            this.setData({
                isDoing: !0
            })
        },
        clearVerifyErrmsg: function() {
            this.msgFadeoutTimer && clearTimeout(this.msgFadeoutTimer), this.setData({
                verifyErrmsg: ""
            })
        },
        setVerifyErrmsg: function(e) {
            var t = this;
            this.msgFadeoutTimer && clearTimeout(this.msgFadeoutTimer), this.setData({
                verifyErrmsg: e
            }, (function() {
                t.msgFadeoutTimer = setTimeout((function() {
                    t.clearVerifyErrmsg()
                }), 5e3)
            }))
        },
        makeSureCodeValid: function() {
            var e = this;
            return this.isCodeExpired() ? new Promise((function(t, r) {
                d.info("start wx.login"), e.code = "", e.codeExpire = "";
                var n = (new Date).getTime();
                wx.login({
                    timeout: 1e4,
                    success: function(a) {
                        var i = (new Date).getTime() - n;
                        a && a.code ? (e.beaconReport("mp_face_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: i,
                            ret: "Y"
                        }), e.code = a.code, e.codeExpire = (new Date).getTime() + 24e4, d.info("wx.login done, code will expire at ".concat(new Date(e.codeExpire))), t(a.code)) : (d.error("wx.login success but cannot get code from response. response = ".concat(JSON.stringify(a))), e.beaconReport("mp_face_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: i,
                            ret: "N1"
                        }), r("wx.login failed(-1)"))
                    },
                    fail: function(t) {
                        var a = (new Date).getTime() - n;
                        d.warn("wx.login failed because: ".concat(t.errMsg)), e.beaconReport("mp_face_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: a,
                            ret: "N2"
                        }), r("wx.login failed(-2)")
                    }
                })
            })) : Promise.resolve("")
        },
        isCodeExpired: function() {
            return this.code ? isNaN(this.codeExpire) || !o.isTimeAfterNow(this.codeExpire) ? (d.info("no codeExpire, or already expired"), !0) : (d.info("code is still valid"), !1) : (d.info("no code"), !0)
        },
        onProtocolChecked: function() {
            var e = !this.data.protocolAgreed;
            d.info("protocol turned to ".concat(e ? "agreed" : "rejected")), this.setData({
                protocolAgreed: e
            })
        },
        onGrantProtocol1Tapped: function() {
            var e = o.getQueryString({
                url: "https://meeting.tencent.com/declare.html"
            });
            wx.navigateTo({
                url: "../../sub-web/web/web".concat(e)
            })
        },
        onGrantProtocol2Tapped: function() {
            var e = o.getQueryString({
                url: "https://meeting.tencent.com/privacy-policy.html"
            });
            wx.navigateTo({
                url: "../../sub-web/web/web".concat(e)
            })
        },
        onCloseGrantUserInfoTapped: function() {
            d.info("取消授权用户信息"), "function" == typeof this.userInfoDenied && this.userInfoDenied()
        },
        onGetUserInfo: function() {
            var e = this;
            wx.showLoading({
                title: "授权中...",
                mask: !0
            }), wx.getUserProfile({
                lang: "zh_CN",
                desc: "授权用户信息用来绑定",
                success: function(t) {
                    wx.hideLoading(), d.info("wx.getUserProfile success：".concat(JSON.stringify(t))), e.UserInfo = t.userInfo, e.param.b ? "function" == typeof e.userInfoGranted && e.userInfoGranted(t.userInfo) : e.sendUserInfoToBackend(t).then((function() {
                        "function" == typeof e.userInfoGranted && e.userInfoGranted(t.userInfo)
                    })).catch((function(t) {
                        e.UserInfo = null, "function" == typeof e.userInfoError && e.userInfoError(t)
                    }))
                },
                fail: function(t) {
                    wx.hideLoading(), e.UserInfo = null, d.error("wx.getUserProfile failed: ".concat(JSON.stringify(t))), "function" == typeof e.userInfoError && e.userInfoError(t.errMsg), e.updateVerifyStatus(i.UPDATE_STATUS.VERIFY_ERROR)
                },
                complete: function() {}
            })
        },
        sendUserInfoToBackend: function(e) {
            var t = this;
            return new Promise((function(r, n) {
                var a = {
                        raw_data: e.rawData,
                        signature: e.signature,
                        encrypted_data: e.encryptedData,
                        iv: e.iv,
                        token: t.param.t
                    },
                    i = (new Date).getTime();
                wx.request({
                    url: "".concat(f.getHttpCgi(), "/account/mini-program/send-user-info"),
                    method: "POST",
                    data: a,
                    success: function(e) {
                        var a = (e || {}).data || {},
                            o = (new Date).getTime() - i,
                            c = a.code,
                            s = a.message,
                            u = a.nonce;
                        if (0 !== c) {
                            var f = c ? "".concat(c) : "N1";
                            t.beaconReport("mp_face_verify_cgi", {
                                cmd: "sendUserInfo",
                                time_cost: o,
                                ret: f
                            });
                            var m = s || "核验失败(-7)";
                            return d.error("sending user info failed with code = ".concat(c, ", message = ").concat(s, ", nonce = ").concat(u)), void n(m)
                        }
                        d.info("send user info to backend success"), r("")
                    },
                    fail: function(e) {
                        var r = (new Date).getTime() - i;
                        t.beaconReport("mp_face_verify_cgi", {
                            cmd: "sendUserInfo",
                            time_cost: r,
                            ret: "N2"
                        });
                        var a = e.errMsg || "核验失败(-8)";
                        d.error("sending user info failed: ".concat(a)), n(a)
                    }
                })
            }))
        },
        beaconReport: function(e, t) {
            var r = Object.assign({
                A1: this.openID || "",
                os_ver: this.sysInfo && this.sysInfo.system || "",
                A10: this.sysInfo.model,
                wxVersion: this.sysInfo.version,
                mpVersion: this.sysInfo.SDKVersion,
                app_main_version: i.FACE_VERIFY_VERSION
            }, t || {});
            try {
                s.report(e, r)
            } catch (t) {
                d.error("beacon error! eventName: ".concat(e, ", data: ").concat(JSON.stringify(r), ". error: ").concat(JSON.stringify(t)))
            }
        }
    });
});
require("pages/sub-verify/face-verify/face-verify.js");
__wxRoute = 'pages/sub-verify/face-verify-result/face-verify-result';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-verify/face-verify-result/face-verify-result.js';
define("pages/sub-verify/face-verify-result/face-verify-result.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../constants"),
        a = require("../../../actions/AppAction"),
        o = new(require("../../../utils/logger.js"))({
            pageName: "face-verify-result",
            aegisLogEnable: !0,
            wxLogEnable: !0
        });
    Page({
        data: {
            type: e.VERIFY_RESULT_TYPE.OK,
            mainMsg: "",
            detailMsg: "",
            successCallObj: {
                errCode: 0
            },
            bzFrom: e.FACE_VERIFY_BIZ_MAP.UNKNOWN,
            shouldLaunchApp: !1
        },
        onLoad: function(s) {
            o.info("[face-verify-result][onLoad]", s.res), a.pageExposed("face-verify-result");
            var t = s.f,
                r = void 0 === t ? e.FACE_VERIFY_BIZ_MAP.UNKNOWN : t;
            this.setData({
                bzFrom: r,
                shouldLaunchApp: r === e.FACE_VERIFY_BIZ_MAP.APP_MOBILE
            });
            var n = null;
            try {
                n = JSON.parse(decodeURIComponent(s.res || ""))
            } catch (e) {
                console.error("[face-verify-result][onLoad]invalid parameter passed in: ", s)
            }
            var i = n || {},
                c = i.type,
                l = void 0 === c ? e.VERIFY_RESULT_TYPE.ERROR : c,
                d = i.mainMsg,
                u = void 0 === d ? "" : d,
                p = i.detailMsg,
                E = void 0 === p ? "" : p;
            this.setData({
                type: l,
                mainMsg: u,
                detailMsg: E
            })
        },
        handleLaunchAppError: function() {
            wx.showToast({
                title: "确认失败，请重试",
                icon: "none"
            }), this.setData({
                shouldLaunchApp: !1
            })
        },
        onRetry: function() {
            wx.navigateBack()
        }
    });
});
require("pages/sub-verify/face-verify-result/face-verify-result.js");
__wxRoute = 'pages/sub-verify/student-verify/student-verify';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-verify/student-verify/student-verify.js';
define("pages/sub-verify/student-verify/student-verify.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, t = require("../../../@babel/runtime/helpers/defineProperty"),
        n = (require("../../../stores/UserStore"), require("../../../utils/logger.js")),
        o = require("../../../stores/AppStore"),
        i = require("../../../clients/BeaconClient"),
        s = require("../../../https/UserHttps"),
        a = require("../../../clients/AegisClient"),
        c = require("../../../actions/AppAction"),
        r = require("../../../constants/FaceVerify").FACE_VERIFY_BIZ_MAP,
        u = require("../../../actions/UserAction"),
        d = new n({
            pageName: "student-verify",
            aegisLogEnable: !0,
            wxLogEnable: !0
        }),
        g = "ok",
        f = "info",
        l = "cancle",
        p = "已取消授权",
        h = "已通过验证",
        _ = "请在原页面上继续操作",
        m = "请返回腾讯会议继续操作",
        y = "dialog",
        w = "page",
        v = "vip-student-verify",
        S = (t(e = {}, "student-gift-card", 0), t(e, v, 1), e);
    Page({
        data: {
            showStudentVerifyDialog: !1,
            studentcheck_code: "",
            openid: "",
            unionid: "",
            appid: "",
            appuid: "",
            sysInfo: "",
            bzFrom: r.UNKOWN,
            MSG_GET_USER_INFO_TITLE: "绑定微信账号",
            MSG_GET_USER_INFO_DETAIL: "为了保证您的信息安全，请先绑定微信账号。",
            MSG_GET_USER_INFO_BUTTON_CANCEL: "取消",
            MSG_GET_USER_INFO_BUTTON_GRANT: "允许",
            NOTIFY_DIALOG_TITLE: "腾讯会议申请",
            NOTIFY_DIALOG_DETAIL: "发送学生认证通过提醒",
            NOTIFY_DIALOG_BUTTON_CANCEL: "取消",
            NOTIFY_DIALOG_BUTTON_GRANT: "允许",
            NOTIFY_DIALOG_TMPLID: "8bZ2ptRcfN5XH8sgqDLEe6AklGGjfyKCpdFLME6Hv3Q",
            MSG_VERIFY_SUCCESS: {
                TITLE: "验证成功",
                DETAIL: "身份验证成功，您可以继续购买",
                BUTTON_BACK: "返回腾讯会议"
            },
            successCallObj: {
                errCode: 0
            },
            shouldLaunchApp: !1,
            isFromMpWebview: !1,
            resultViewType: w,
            backgroundImage: "",
            bizType: ""
        },
        onLoad: function(e) {
            var t = this;
            c.pageExposed("student-verify");
            var n = e.f,
                o = void 0 === n ? r.UNKOWN : n;
            this.setData({
                bzFrom: o,
                bizType: e.biz_type || "",
                shouldLaunchApp: o === r.APP_MOBILE,
                isFromMpWebview: o === r.MP_WEBVIEW
            }), wx.hideShareMenu(), this.beaconReport("e#mp_student_auth#all#exposure"), wx.getSystemInfo({
                success: function(e) {
                    d.info("systemInfo: ".concat(JSON.stringify(e))), t.sysInfo = e
                }
            }), wx.getSetting({
                withSubscriptions: !0,
                success: function(e) {
                    d.info("getSetting: ".concat(JSON.stringify(e))), t.wxSetting = e
                }
            }), this.userInfoDialog = this.selectComponent("#user-info-dialog"), console.log("userInfoDialog->>>>", this.userInfoDialog), this.notifyDialog = this.selectComponent("#notify-dialog"), console.log("notifyDialog->>>>", this.notifyDialog), this.verifySuccessDialog = this.selectComponent("#verify-success-dialog"), e.appid && this.setData({
                appid: decodeURIComponent(e.appid)
            }), e.appuid && this.setData({
                appuid: decodeURIComponent(e.appuid)
            }), e.background_image && this.setData({
                backgroundImage: decodeURIComponent(e.background_image)
            }), e.result_view_type && this.setData({
                resultViewType: e.result_view_type
            });
            var i = e.launchVerify;
            i || o !== r.MP_WEBVIEW || wx.showToast({
                title: "请点击按钮进行学生认证",
                duration: 3e3,
                icon: "none"
            }), i && this.checkBoundWXStatus(), this.checkStudentPluginForUpdate()
        },
        checkStudentPluginForUpdate: function() {
            if (wx.getPluginUpdateManager && wx.getUpdateManager) {
                var e = wx.getPluginUpdateManager({
                        pluginId: "wxa16657d57059e0f0"
                    }),
                    t = wx.getUpdateManager();
                console.log("pluginManager", e, "weapp manager", t), e.onUpdateReady((function() {
                    console.log("onUpdateReady pluginManager"), t.applyUpdate()
                })), e.onUpdateFailed((function() {
                    console.log("onUpdateFailed pluginManager"), d.error("wx onUpdateFailed pluginManager")
                }))
            }
        },
        onShow: function() {
            this.data.studentcheck_code && this.data.openid && this.data.unionid && this.getAccessToken()
        },
        doWXLogin: function() {
            var e = this;
            return new Promise((function(t, n) {
                var o = (new Date).getTime();
                wx.login({
                    timeout: 1e4,
                    success: function(i) {
                        console.log("doWXLogin=====>", i);
                        var s = (new Date).getTime() - o;
                        i && i.code ? (e.beaconReport("mp_student_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: s,
                            ret: "Y"
                        }), e.code = i.code, e.codeExpire = (new Date).getTime() + 24e4, d.info("wx.login done, code will expire at ".concat(new Date(e.codeExpire))), t(i.code)) : (d.error("wx.login success but cannot get code from response. response = ".concat(JSON.stringify(i))), e.beaconReport("mp_student_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: s,
                            ret: "N1"
                        }), n("wx.login falied(-1)"))
                    },
                    fail: function(t) {
                        var i = (new Date).getTime() - o;
                        d.warn("wx.login failed because: ".concat(t.errMsg)), e.beaconReport("mp_student_verify_cgi", {
                            cmd: "wx.login",
                            time_cost: i,
                            ret: "N2"
                        }), n("wx.login falied(-2)")
                    }
                })
            }))
        },
        goToResultPage: function(e) {
            var t = encodeURIComponent(JSON.stringify(e)),
                n = this.data.bzFrom;
            console.log("......", n), wx.redirectTo({
                url: "../student-verify-result/student-verify-result?res=".concat(t, "&f=").concat(n)
            })
        },
        redirectToResultPage: function(e) {
            var t = encodeURIComponent(JSON.stringify(e)),
                n = this.data.bzFrom;
            wx.redirectTo({
                url: "../student-verify-result/student-verify-result?res=".concat(t, "&f=").concat(n)
            })
        },
        checkBoundWXStatus: function() {
            var e, t, n = this;
            this.beaconReport("e#mp_student_auth#all#exposure"), this.beaconReport("e#mp_student_auth#auth#click");
            var o = null === (e = this.wxSetting) || void 0 === e ? void 0 : e.subscriptionsSetting,
                i = null == o ? void 0 : o.mainSwitch,
                c = !(null != o && null !== (t = o.itemSettings) && void 0 !== t && t[this.data.NOTIFY_DIALOG_TMPLID]);
            i && c && this.beaconReport("e#mp_student_auth#notification#exposure"), wx.requestSubscribeMessage({
                tmplIds: [this.data.NOTIFY_DIALOG_TMPLID],
                success: function(e) {
                    d.info("wx.requestSubscribeMessage success：".concat(JSON.stringify(e)));
                    var t = "accept" === (null == e ? void 0 : e[n.data.NOTIFY_DIALOG_TMPLID]);
                    n.beaconReport("e#mp_student_auth#notification#click", {
                        is_agree: t ? "1" : "0"
                    })
                },
                fail: function(e) {
                    d.info("wx.requestSubscribeMessage fail".concat(JSON.stringify(e)))
                },
                complete: function() {
                    wx.showToast({
                        title: "加载中...",
                        icon: "loading",
                        duration: 1e4,
                        mask: !0
                    }), u.doLogin().then((function(e) {
                        var t = e.openID,
                            o = e.unionId;
                        n.setData({
                            openid: t,
                            unionid: o
                        });
                        var i = {
                            openid: t,
                            unionid: o,
                            wemeet_appid: n.data.appid,
                            wemeet_uid: n.data.appuid,
                            source: "mp"
                        };
                        if ("student-gift-card" === n.data.bizType) return a.infoAll({
                            msg: "student-gift-card checkStudentActivity request ".concat(JSON.stringify(i))
                        }), void s.checkStudentActivity(i).then((function() {
                            wx.hideToast(), n.setData({
                                showStudentVerifyDialog: !0
                            }), a.infoAll({
                                msg: "student-gift-card checkStudentActivity success"
                            })
                        })).catch((function(e) {
                            wx.hideToast(), a.infoAll({
                                msg: "student-gift-card checkStudentActivity catch ".concat((null == e ? void 0 : e.errmsg) || JSON.stringify(e))
                            }), n.redirectToResultPage({
                                type: f,
                                mainMsg: (null == e ? void 0 : e.errmsg) || JSON.stringify(e)
                            })
                        }));
                        i.activity_source = S[n.data.bizType], s.checkStudentIdentityLimit(i).then((function() {
                            wx.hideToast(), n.setData({
                                showStudentVerifyDialog: !0
                            })
                        })).catch((function(e) {
                            wx.hideToast(), wx.showToast({
                                title: (null == e ? void 0 : e.errmsg) || "服务异常，请稍后再试！",
                                duration: 2e3,
                                icon: "none"
                            })
                        }))
                    })).catch((function(e) {
                        wx.hideToast(), n.redirectToResultPage({
                            type: f,
                            mainMsg: e
                        })
                    }))
                }
            })
        },
        getBoundWXStatus: function(e) {
            var t = this;
            return console.log("getBoundWXStatus start", e), new Promise((function(n, i) {
                var s = (new Date).getTime(),
                    c = {
                        auth_code: e,
                        token: t.param.t
                    };
                console.log("getBoundWXStatus params====>", c), wx.request({
                    url: "".concat(o.getHttpCgi(), "/account/mini-program/check-scan-code"),
                    method: "POST",
                    data: c,
                    success: function(e) {
                        var o = (e || {}).data || {},
                            c = (new Date).getTime() - s,
                            r = o.code,
                            u = o.message,
                            g = o.nonce;
                        if (console.log("getBoundWXStatus====>", o), 0 !== r) {
                            var f = r ? "".concat(r) : "N1";
                            t.beaconReport("mp_student_verify_cgi", {
                                cmd: "getBoundWXStatus",
                                time_cost: c,
                                ret: f
                            });
                            var l = u || "查询绑定状态失败(-1)";
                            return d.error("step1: getBoundWXStatus error, code = ".concat(r, ", message = ").concat(u, ", nonce = ").concat(g)), void i(l)
                        }
                        d.info("step1: getBoundWXStatus OK"), t.beaconReport("mp_student_verify_cgi", {
                            cmd: "getBoundWXStatus",
                            time_cost: c,
                            ret: "Y"
                        });
                        var p = o.data || {},
                            h = p.bind_status,
                            _ = void 0 === h ? 0 : h,
                            m = p.open_id,
                            y = void 0 === m ? "" : m;
                        t.openID = y, y ? a.setConfig({
                            uin: y
                        }) : d.warn("step1: getBoundWXStatus, no openID got from server. response: ".concat(JSON.stringify(e))), t.BindStatus = _, n({
                            BindStatus: _
                        })
                    },
                    fail: function(e) {
                        console.log("getBoundWXStatus failed");
                        var n = (new Date).getTime() - s;
                        t.beaconReport("mp_student_verify_cgi", {
                            cmd: "getBoundWXStatus",
                            time_cost: n,
                            ret: "N2"
                        }), d.error("step1: getBoundWXStatus failed: ".concat(e.errMsg)), i(e.errMsg || "查询绑定状态失败(-2)")
                    }
                })
            }))
        },
        onCloseGrantUserinfoTapped: function() {
            d.info("取消授权用户信息"), "function" == typeof this.userInfoDenied && this.userInfoDenied()
        },
        onGetUserInfo: function() {
            var e = this;
            wx.showLoading({
                title: "授权中...",
                mask: !0
            }), wx.getUserProfile({
                lang: "zh_CN",
                desc: "授权用户信息用来绑定",
                success: function(t) {
                    wx.hideLoading(), d.info("wx.getUserProfile success：".concat(JSON.stringify(t))), e.UserInfo = t.userInfo, e.param.b ? "function" == typeof e.userInfoGranted && e.userInfoGranted(t.userInfo) : e.sendUserInfoToBackend(t).then((function() {
                        "function" == typeof e.userInfoGranted && e.userInfoGranted(t.userInfo)
                    })).catch((function(t) {
                        e.UserInfo = null, "function" == typeof e.userInfoError && e.userInfoError(t)
                    }))
                },
                fail: function(t) {
                    wx.hideLoading(), e.UserInfo = null, d.error("wx.getUserProfile failed: ".concat(JSON.stringify(t))), "function" == typeof e.userInfoError && e.userInfoError(t.errMsg), e.updateVerifyStatus(UPDATE_STATUS.VERIFY_ERROR)
                },
                complete: function() {}
            })
        },
        sendUserInfoToBackend: function(e) {
            var t = this;
            return new Promise((function(n, i) {
                var s = {
                        raw_data: e.rawData,
                        signature: e.signature,
                        encrypted_data: e.encryptedData,
                        iv: e.iv,
                        token: t.param.t
                    },
                    a = (new Date).getTime();
                wx.request({
                    url: "".concat(o.getHttpCgi(), "/account/mini-program/send-user-info"),
                    method: "POST",
                    data: s,
                    success: function(e) {
                        var o = (e || {}).data || {},
                            s = (new Date).getTime() - a,
                            c = o.code,
                            r = o.message,
                            u = o.nonce;
                        if (0 !== c) {
                            var g = c ? "".concat(c) : "N1";
                            t.beaconReport("mp_student_verify_cgi", {
                                cmd: "sendUserInfo",
                                time_cost: s,
                                ret: g
                            });
                            var f = r || "核验失败(-7)";
                            return d.error("sending user info failed with code = ".concat(c, ", message = ").concat(r, ", nonce = ").concat(u)), void i(f)
                        }
                        d.info("send user info to backend success"), n("")
                    },
                    fail: function(e) {
                        var n = (new Date).getTime() - a;
                        t.beaconReport("mp_student_verify_cgi", {
                            cmd: "sendUserInfo",
                            time_cost: n,
                            ret: "N2"
                        });
                        var o = e.errMsg || "核验失败(-8)";
                        d.error("sending user info failed: ".concat(o)), i(o)
                    }
                })
            }))
        },
        beaconReport: function(e, t) {
            var n = Object.assign({
                A1: this.data.openid || "",
                os_ver: this.data.sysInfo && this.data.sysInfo.system || "",
                A10: this.data.sysInfo.model,
                wxVersion: this.data.sysInfo.version,
                mpVersion: this.data.sysInfo.SDKVersion,
                activity: S[this.data.bizType]
            }, t || {});
            try {
                i.report(e, n)
            } catch (t) {
                d.error("beacon error! eventName: ".concat(e, ", data: ").concat(JSON.stringify(n), ". error: ").concat(JSON.stringify(t)))
            }
        },
        getAccessToken: function(e) {
            var t = this,
                n = {
                    source: "mp",
                    openid: this.data.openid,
                    unionid: this.data.unionid,
                    wx_studentcheck_code: e || this.data.studentcheck_code,
                    wemeet_appid: this.data.appid,
                    wemeet_uid: this.data.appuid
                };
            "vip-student-verify" === this.data.bizType && (n.activity_source = 1), a.infoAll({
                msg: "student-gift-card checkStudent request ".concat(JSON.stringify(n))
            }), s.checkStudent(n).then((function(e) {
                if (console.log("请求结果res==>", e), a.infoAll({
                        msg: "student-gift-card checkStudent response ".concat(JSON.stringify(e))
                    }), t.beaconReport("e#mp_student_auth#result#exposure", {
                        auth_status: e.bind_status,
                        is_student: e.is_student ? 1 : 0
                    }), e.is_student) {
                    if (t.data.resultViewType === y) return t.beaconReport("e#mp_student_auth#result#click", {
                        auth_status: e.bind_status,
                        is_student: e.is_student ? 1 : 0
                    }), void t.verifySuccessDialog.show();
                    var n = t.data.bzFrom === r.APP_MOBILE ? m : _;
                    t.goToResultPage({
                        type: g,
                        mainMsg: h,
                        detailMsg: n
                    })
                }
            })).catch((function(e) {
                var t = e.errmsg;
                e.code;
                a.infoAll({
                    msg: "student-gift-card checkStudent catch ".concat(t)
                }), wx.showToast({
                    title: t || "服务异常，请稍后再试！",
                    duration: 2e3,
                    icon: "none"
                })
            }))
        },
        onStudentVerifyAuth: function(e) {
            console.log("onStudentVerifyAuth");
            var t = e.detail.wx_studentcheck_code;
            this.setData({
                studentcheck_code: t
            }), this.getAccessToken(t), d.info("wxSetting: ".concat(JSON.stringify(this.wxSetting)))
        },
        onStudentVerifyReject: function() {
            var e = this.data.bzFrom === r.APP_MOBILE ? m : _;
            this.goToResultPage({
                type: l,
                mainMsg: p,
                detailMsg: e
            })
        },
        handleLaunchAppError: function() {
            wx.showToast({
                title: "确认失败，请重试",
                icon: "none"
            }), this.verifySuccessDialog.hide()
        },
        closeSuccessDialog: function() {
            this.verifySuccessDialog.hide()
        }
    });
});
require("pages/sub-verify/student-verify/student-verify.js");
__wxRoute = 'pages/sub-verify/student-verify-result/student-verify-result';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-verify/student-verify-result/student-verify-result.js';
define("pages/sub-verify/student-verify-result/student-verify-result.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../../actions/AppAction"),
        e = require("../../../constants/FaceVerify").FACE_VERIFY_BIZ_MAP;
    Page({
        data: {
            type: "ok",
            MSG_FINISH: "完成",
            MSG_RETRY: "重试",
            mainMsg: "",
            detailMsg: "",
            successCallObj: {
                errCode: 0
            },
            bzFrom: e.UNKOWN,
            shouldLaunchApp: !1,
            isFromMpWebview: !1
        },
        onLoad: function(n) {
            console.log("[student-verify-result][onLoad]", n.res), o.pageExposed("student-verify-result");
            var t = n.f,
                a = void 0 === t ? e.UNKOWN : t;
            this.setData({
                bzFrom: a,
                shouldLaunchApp: a === e.APP_MOBILE,
                isFromMpWebview: a === e.MP_WEBVIEW
            });
            var i = null;
            try {
                i = JSON.parse(decodeURIComponent(n.res))
            } catch (o) {
                console.error("[student-verify-result][onLoad]invalid parameter passed in: ", n)
            }
            var s = i || {},
                r = s.type,
                c = void 0 === r ? "error" : r,
                u = s.mainMsg,
                d = void 0 === u ? "" : u,
                l = s.detailMsg,
                p = void 0 === l ? "" : l;
            this.setData({
                type: c,
                mainMsg: d,
                detailMsg: p
            })
        },
        handleLaunchAppError: function() {
            wx.showToast({
                title: "确认失败，请重试",
                icon: "none"
            }), this.setData({
                shouldLaunchApp: !1
            })
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onRetry: function() {
            wx.navigateBack()
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {}
    });
});
require("pages/sub-verify/student-verify-result/student-verify-result.js");