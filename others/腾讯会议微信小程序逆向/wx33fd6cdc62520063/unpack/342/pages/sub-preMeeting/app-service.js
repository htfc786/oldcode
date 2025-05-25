/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx1 = function(path, global) {
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
        console.warn("WXMLRT_$gwx1:" + m)
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1 || [];

    function gz$gwx1_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_1) return __WXML_GLOBAL__.ops_cached.$gwx1_1
        __WXML_GLOBAL__.ops_cached.$gwx1_1 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'show']
            ])
            Z([3, '_coverClicked'])
            Z([3, 'native-msg-cover-layer'])
            Z([3, 'main-content'])
            Z([
                [2, '!=='],
                [
                    [7],
                    [3, 'buttonStyle']
                ],
                [1, 'solid']
            ])
            Z([a, [3, 'button-container '],
                [
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'buttonStyle']
                        ],
                        [1, 'solid']
                    ],
                    [1, 'solid'],
                    [1, '']
                ]
            ])
            Z([3, '_leftBtnClicked'])
            Z([a, [3, 'btn '],
                [
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'leftBtn']
                        ],
                        [3, 'main']
                    ],
                    [1, 'btn-ok'],
                    [1, 'btn-cancel']
                ],
                [3, ' '],
                [
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'leftBtn']
                            ],
                            [3, 'disabled']
                        ],
                        [
                            [2, '&&'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'leftBtn']
                                ],
                                [3, 'main']
                            ],
                            [
                                [7],
                                [3, 'isDoing']
                            ]
                        ]
                    ],
                    [1, 'disabled'],
                    [1, '']
                ]
            ])
            Z([3, 'leftBtn'])
            Z([
                [2, '&&'],
                [
                    [6],
                    [
                        [7],
                        [3, 'leftBtn']
                    ],
                    [3, 'main']
                ],
                [
                    [7],
                    [3, 'isDoing']
                ]
            ])
            Z([3, 'abs-to-right'])
            Z(z[4])
            Z([3, '_rightBtnClicked'])
            Z([a, z[7][1],
                [
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'rightBtn']
                        ],
                        [3, 'main']
                    ],
                    [1, 'btn-ok'],
                    [1, 'btn-cancel']
                ], z[7][3],
                [
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'rightBtn']
                            ],
                            [3, 'disabled']
                        ],
                        [
                            [2, '&&'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'rightBtn']
                                ],
                                [3, 'main']
                            ],
                            [
                                [7],
                                [3, 'isDoing']
                            ]
                        ]
                    ],
                    [1, 'disabled'],
                    [1, '']
                ]
            ])
            Z([3, 'rightBtn'])
            Z([
                [2, '&&'],
                [
                    [6],
                    [
                        [7],
                        [3, 'rightBtn']
                    ],
                    [3, 'main']
                ],
                [
                    [7],
                    [3, 'isDoing']
                ]
            ])
            Z(z[10])
        })(__WXML_GLOBAL__.ops_cached.$gwx1_1);
        return __WXML_GLOBAL__.ops_cached.$gwx1_1
    }

    function gz$gwx1_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_2) return __WXML_GLOBAL__.ops_cached.$gwx1_2
        __WXML_GLOBAL__.ops_cached.$gwx1_2 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx1_2);
        return __WXML_GLOBAL__.ops_cached.$gwx1_2
    }

    function gz$gwx1_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_3) return __WXML_GLOBAL__.ops_cached.$gwx1_3
        __WXML_GLOBAL__.ops_cached.$gwx1_3 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([1, true])
            Z(z[0])
            Z([3, 'white'])
            Z([3, '#222426'])
            Z([3, 'onNavbarHeightGot'])
            Z([3, 'onBackClicked'])
            Z(z[2])
            Z([3, 'navbar'])
            Z([1, false])
            Z(z[0])
            Z([
                [2, '<'],
                [1, 0],
                [
                    [6],
                    [
                        [7],
                        [3, 'historyNames']
                    ],
                    [3, 'length']
                ]
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx1_3);
        return __WXML_GLOBAL__.ops_cached.$gwx1_3
    }

    function gz$gwx1_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_4) return __WXML_GLOBAL__.ops_cached.$gwx1_4
        __WXML_GLOBAL__.ops_cached.$gwx1_4 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'full-screen relative bg'])
            Z([a, [3, 'join-form '],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'enableEnvSwitch']
                    ],
                    [1, 'debug'],
                    [1, '']
                ]
            ])
            Z([
                [2, '>'],
                [
                    [6],
                    [
                        [7],
                        [3, 'historyCodes']
                    ],
                    [3, 'length']
                ],
                [1, 0]
            ])
            Z([3, 'joinByWhat'])
            Z([3, 'join-btn'])
            Z([
                [7],
                [3, 'canOpenApp']
            ])
            Z([
                [7],
                [3, 'audioOn']
            ])
            Z([
                [7],
                [3, 'msg_video']
            ])
            Z([
                [7],
                [3, 'msg_audio']
            ])
            Z([
                [7],
                [3, 'msg_speaker']
            ])
            Z([3, 'clearName'])
            Z([3, 'clearPwd'])
            Z([3, 'onAudioChecked'])
            Z([3, 'abortFastJoin'])
            Z([3, 'nicknameInput'])
            Z([3, 'passwordInput'])
            Z([3, 'startFastJoin'])
            Z([3, 'onSpeakerChecked'])
            Z([3, 'onVideoChecked'])
            Z([3, 'fastJoinDialogComponent'])
            Z([1, true])
            Z([
                [7],
                [3, 'isPasswordError']
            ])
            Z([
                [7],
                [3, 'nickName']
            ])
            Z([
                [7],
                [3, 'maxlength']
            ])
            Z([
                [7],
                [3, 'meetingPassword']
            ])
            Z([
                [7],
                [3, 'speakerOn']
            ])
            Z([
                [7],
                [3, 'videoOn']
            ])
            Z([3, 'join-message-dialog'])
            Z([3, 'join-custom-modal'])
            Z([3, 'join-nickname-dialog'])
            Z(z[23])
            Z([
                [7],
                [3, 'showExit']
            ])
            Z([3, 'join-slider-message-dialog'])
            Z([
                [7],
                [3, 'cover']
            ])
            Z([3, 'toast-component'])
        })(__WXML_GLOBAL__.ops_cached.$gwx1_4);
        return __WXML_GLOBAL__.ops_cached.$gwx1_4
    }

    function gz$gwx1_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_5) return __WXML_GLOBAL__.ops_cached.$gwx1_5
        __WXML_GLOBAL__.ops_cached.$gwx1_5 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([1, true])
            Z([
                [7],
                [3, 'showBackArrow']
            ])
            Z([3, 'white'])
            Z([3, '#222426'])
            Z([3, 'onNavbarHeightGot'])
            Z([3, 'onBackClicked'])
            Z(z[2])
            Z([3, 'navbar'])
            Z([1, false])
            Z(z[0])
            Z([3, 'content'])
            Z([a, [3, 'height:calc(100% - '],
                [
                    [7],
                    [3, 'navbarH']
                ],
                [3, 'px)']
            ])
            Z([3, 'detail'])
            Z([
                [2, '!'],
                [
                    [7],
                    [3, 'isHostInMeeting']
                ]
            ])
            Z([
                [7],
                [3, 'canRenaming']
            ])
            Z([3, 'clearPwd'])
            Z([3, 'onAudioChecked'])
            Z([3, 'abortFastJoin'])
            Z([3, 'passwordInput'])
            Z([3, 'startFastJoin'])
            Z([3, 'onSpeakerChecked'])
            Z([3, 'onVideoChecked'])
            Z([3, 'fastJoinDialogComponent'])
            Z(z[0])
            Z([
                [7],
                [3, 'isPasswordError']
            ])
            Z([
                [7],
                [3, 'nickName']
            ])
            Z([
                [7],
                [3, 'meetingPasswordToJoin']
            ])
            Z([3, 'color:black'])
            Z([
                [7],
                [3, 'MSG_PWD_DIALOG_TITLE']
            ])
            Z([3, 'message-dialog'])
            Z(z[27])
            Z([3, 'full-msg-view'])
        })(__WXML_GLOBAL__.ops_cached.$gwx1_5);
        return __WXML_GLOBAL__.ops_cached.$gwx1_5
    }
    __WXML_GLOBAL__.ops_set.$gwx1 = z;
    __WXML_GLOBAL__.ops_init.$gwx1 = true;
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
    var x = ['./pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.wxml', './pages/sub-preMeeting/components/loading-spin/loading-spin.wxml', './pages/sub-preMeeting/history-names/history-names.wxml', './pages/sub-preMeeting/join-meeting/join-meeting.wxml', './pages/sub-preMeeting/waiting-room/waiting-room.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
        var z = gz$gwx1_1()
        var oB = _v()
        _(r, oB)
        if (_oz(z, 0, e, s, gg)) {
            oB.wxVkey = 1
            var xC = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
            var oD = _n('view')
            _rz(z, oD, 'class', 3, e, s, gg)
            var fE = _v()
            _(oD, fE)
            if (_oz(z, 4, e, s, gg)) {
                fE.wxVkey = 1
            }
            var cF = _n('view')
            _rz(z, cF, 'class', 5, e, s, gg)
            var oH = _mz(z, 'button', ['bindtap', 6, 'class', 1, 'id', 2], [], e, s, gg)
            var cI = _v()
            _(oH, cI)
            if (_oz(z, 9, e, s, gg)) {
                cI.wxVkey = 1
                var oJ = _n('loading-spin')
                _rz(z, oJ, 'class', 10, e, s, gg)
                _(cI, oJ)
            }
            cI.wxXCkey = 1
            cI.wxXCkey = 3
            _(cF, oH)
            var hG = _v()
            _(cF, hG)
            if (_oz(z, 11, e, s, gg)) {
                hG.wxVkey = 1
            }
            var lK = _mz(z, 'button', ['bindtap', 12, 'class', 1, 'id', 2], [], e, s, gg)
            var aL = _v()
            _(lK, aL)
            if (_oz(z, 15, e, s, gg)) {
                aL.wxVkey = 1
                var tM = _n('loading-spin')
                _rz(z, tM, 'class', 16, e, s, gg)
                _(aL, tM)
            }
            aL.wxXCkey = 1
            aL.wxXCkey = 3
            _(cF, lK)
            hG.wxXCkey = 1
            _(oD, cF)
            fE.wxXCkey = 1
            _(xC, oD)
            _(oB, xC)
        }
        oB.wxXCkey = 1
        oB.wxXCkey = 3
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
        var z = gz$gwx1_2()
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
        var z = gz$gwx1_3()
        var xQ = _mz(z, 'mp-navigation-bar', ['animated', 0, 'back', 1, 'backArrowColor', 1, 'background', 2, 'bindNavbarHeightGot', 3, 'bindcustomback', 4, 'color', 5, 'id', 6, 'loading', 7, 'show', 8], [], e, s, gg)
        _(r, xQ)
        var oP = _v()
        _(r, oP)
        if (_oz(z, 10, e, s, gg)) {
            oP.wxVkey = 1
        }
        oP.wxXCkey = 1
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
        var z = gz$gwx1_4()
        var cT = _n('view')
        _rz(z, cT, 'class', 0, e, s, gg)
        var oV = _n('view')
        _rz(z, oV, 'class', 1, e, s, gg)
        var cW = _v()
        _(oV, cW)
        if (_oz(z, 2, e, s, gg)) {
            cW.wxVkey = 1
        }
        var oX = _mz(z, 'view', ['capture-bind:tap', 3, 'class', 1], [], e, s, gg)
        var lY = _v()
        _(oX, lY)
        if (_oz(z, 5, e, s, gg)) {
            lY.wxVkey = 1
        }
        lY.wxXCkey = 1
        _(oV, oX)
        cW.wxXCkey = 1
        _(cT, oV)
        var aZ = _mz(z, 'fast-join-dialog', ['audioOn', 6, 'autoOpenCamWhenJoin', 1, 'autoOpenMicWhenJoin', 2, 'autoSpeakerWhenJoin', 3, 'bindclearName', 4, 'bindclearPwd', 5, 'bindonAudioChecked', 6, 'bindonLeftBtnClicked', 7, 'bindonNicknameInput', 8, 'bindonPasswordInput', 9, 'bindonRightBtnClicked', 10, 'bindonSpeakerChecked', 11, 'bindonVideoChecked', 12, 'id', 13, 'isModalDialog', 14, 'isPasswordError', 15, 'nickname', 16, 'nicknameMaxLen', 17, 'password', 18, 'speakerOn', 19, 'videoOn', 20], [], e, s, gg)
        _(cT, aZ)
        var t1 = _n('message-dialog')
        _rz(z, t1, 'id', 27, e, s, gg)
        _(cT, t1)
        var e2 = _n('custom-modal')
        _rz(z, e2, 'id', 28, e, s, gg)
        _(cT, e2)
        var b3 = _mz(z, 'nickname-dialog', ['id', 29, 'nicknameMaxLen', 1], [], e, s, gg)
        _(cT, b3)
        var hU = _v()
        _(cT, hU)
        if (_oz(z, 31, e, s, gg)) {
            hU.wxVkey = 1
        }
        var o4 = _n('slider-message-dialog')
        _rz(z, o4, 'id', 32, e, s, gg)
        _(cT, o4)
        hU.wxXCkey = 1
        _(r, cT)
        var fS = _v()
        _(r, fS)
        if (_oz(z, 33, e, s, gg)) {
            fS.wxVkey = 1
        }
        var x5 = _n('toast')
        _rz(z, x5, 'id', 34, e, s, gg)
        _(r, x5)
        fS.wxXCkey = 1
        return r
    }
    e_[x[3]] = {
        f: m3,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[4]] = {}
    var m4 = function(e, s, r, gg) {
        var z = gz$gwx1_5()
        var f7 = _mz(z, 'mp-navigation-bar', ['animated', 0, 'back', 1, 'backArrowColor', 1, 'background', 2, 'bindNavbarHeightGot', 3, 'bindcustomback', 4, 'color', 5, 'id', 6, 'loading', 7, 'show', 8], [], e, s, gg)
        _(r, f7)
        var c8 = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
        var h9 = _n('view')
        _rz(z, h9, 'class', 12, e, s, gg)
        var o0 = _v()
        _(h9, o0)
        if (_oz(z, 13, e, s, gg)) {
            o0.wxVkey = 1
        }
        var cAB = _v()
        _(h9, cAB)
        if (_oz(z, 14, e, s, gg)) {
            cAB.wxVkey = 1
        }
        o0.wxXCkey = 1
        cAB.wxXCkey = 1
        _(c8, h9)
        var oBB = _mz(z, 'fast-join-dialog', ['bindclearPwd', 15, 'bindonAudioChecked', 1, 'bindonLeftBtnClicked', 2, 'bindonPasswordInput', 3, 'bindonRightBtnClicked', 4, 'bindonSpeakerChecked', 5, 'bindonVideoChecked', 6, 'id', 7, 'isModalDialog', 8, 'isPasswordError', 9, 'nickname', 10, 'password', 11, 'style', 12, 'title', 13], [], e, s, gg)
        _(c8, oBB)
        var lCB = _mz(z, 'message-dialog', ['id', 29, 'style', 1], [], e, s, gg)
        _(c8, lCB)
        var aDB = _n('full-msg-view')
        _rz(z, aDB, 'id', 31, e, s, gg)
        _(c8, aDB)
        _(r, c8)
        return r
    }
    e_[x[4]] = {
        f: m4,
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
__wxAppCode__['pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.json'] = {
    "component": true,
    "usingComponents": {
        "loading-spin": "../loading-spin/loading-spin"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.wxml'] = [$gwx1, './pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.wxml'];
else __wxAppCode__['pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.wxml'] = $gwx1('./pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.wxml');
__wxAppCode__['pages/sub-preMeeting/components/loading-spin/loading-spin.json'] = {
    "component": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-preMeeting/components/loading-spin/loading-spin.wxml'] = [$gwx1, './pages/sub-preMeeting/components/loading-spin/loading-spin.wxml'];
else __wxAppCode__['pages/sub-preMeeting/components/loading-spin/loading-spin.wxml'] = $gwx1('./pages/sub-preMeeting/components/loading-spin/loading-spin.wxml');
__wxAppCode__['pages/sub-preMeeting/history-names/history-names.json'] = {
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white",
    "disableScroll": true,
    "disableSwipeBack": true,
    "usingComponents": {
        "mp-navigation-bar": "../../../components/navigation-bar/navigation-bar"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-preMeeting/history-names/history-names.wxml'] = [$gwx1, './pages/sub-preMeeting/history-names/history-names.wxml'];
else __wxAppCode__['pages/sub-preMeeting/history-names/history-names.wxml'] = $gwx1('./pages/sub-preMeeting/history-names/history-names.wxml');
__wxAppCode__['pages/sub-preMeeting/join-meeting/join-meeting.json'] = {
    "navigationBarTitleText": "腾讯会议",
    "disableScroll": true,
    "usingComponents": {
        "message-dialog": "../../../components/message-dialog/message-dialog",
        "custom-modal": "../../../components/custom-modal/custom-modal",
        "fast-join-dialog": "../components/fast-join-dialog/fast-join-dialog",
        "slider-message-dialog": "../../../components/slider-message-dialog/slider-message-dialog",
        "toast": "../../../components/toast/toast",
        "nickname-dialog": "../../../components/nickname-dialog/nickname-dialog"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-preMeeting/join-meeting/join-meeting.wxml'] = [$gwx1, './pages/sub-preMeeting/join-meeting/join-meeting.wxml'];
else __wxAppCode__['pages/sub-preMeeting/join-meeting/join-meeting.wxml'] = $gwx1('./pages/sub-preMeeting/join-meeting/join-meeting.wxml');
__wxAppCode__['pages/sub-preMeeting/waiting-room/waiting-room.json'] = {
    "usingComponents": {
        "message-dialog": "../../../components/message-dialog/message-dialog",
        "mp-navigation-bar": "../../../components/navigation-bar/navigation-bar",
        "full-msg-view": "../../../components/full-screen-msg-view/full-screen-msg-view",
        "fast-join-dialog": "../components/fast-join-dialog/fast-join-dialog"
    },
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white",
    "disableScroll": true,
    "disableSwipeBack": true
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-preMeeting/waiting-room/waiting-room.wxml'] = [$gwx1, './pages/sub-preMeeting/waiting-room/waiting-room.wxml'];
else __wxAppCode__['pages/sub-preMeeting/waiting-room/waiting-room.wxml'] = $gwx1('./pages/sub-preMeeting/waiting-room/waiting-room.wxml');

__wxRoute = 'pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.js';
define("pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../stores/AppStore");
    Component({
        properties: {
            show: {
                type: Boolean,
                value: !1,
                observer: "_showChanged"
            },
            isModalDialog: {
                type: Boolean,
                value: !1
            },
            title: {
                type: String,
                value: "加入会议"
            },
            nickname: {
                type: String,
                value: ""
            },
            nicknamePlaceholder: {
                type: String,
                value: "请输入您的名称"
            },
            nicknameMaxLen: {
                type: Number,
                value: 36
            },
            password: {
                type: String,
                value: ""
            },
            passwordPlaceholder: {
                type: String,
                value: "请输入密码"
            },
            passwordMaxLen: {
                type: Number,
                value: 6
            },
            isPasswordError: {
                type: Boolean,
                value: !1
            },
            passwordLengthErrorMsg: {
                type: String,
                value: "密码长度至少为4位数字"
            },
            passwordErrorMsg: {
                type: String,
                value: "密码错误"
            },
            autoOpenCamWhenJoin: {
                type: String,
                value: "入会开启摄像头"
            },
            autoSpeakerWhenJoin: {
                type: String,
                value: "入会开启扬声器"
            },
            autoOpenMicWhenJoin: {
                type: String,
                value: "入会开启麦克风"
            },
            leftBtn: {
                type: Object,
                value: {
                    text: "取消",
                    main: !1,
                    event: "onLeftBtnClicked",
                    disabled: !1
                }
            },
            rightBtn: {
                type: Object,
                value: {
                    text: "加入会议",
                    doingText: "正在加入",
                    main: !0,
                    event: "onRightBtnClicked",
                    disabled: !1
                }
            },
            audioOn: {
                type: Boolean,
                value: !1
            },
            speakerOn: {
                type: Boolean,
                value: !0
            },
            videoOn: {
                type: Boolean,
                value: !1
            },
            audioCheckEvent: {
                type: String,
                value: "onAudioChecked"
            },
            speakerCheckEvent: {
                type: String,
                value: "onSpeakerChecked"
            },
            videoCheckEvent: {
                type: String,
                value: "onVideoChecked"
            }
        },
        data: {
            isEyeOn: !1,
            focusArea: "",
            isDoing: !1
        },
        observers: {
            "nickname,password": function(e, t) {
                this.setData({
                    "rightBtn.disabled": !e || !t || t.length < 4
                })
            }
        },
        created: function() {
            console.log("%ccreated", "background-color:red")
        },
        attached: function() {
            console.log("%cattached", "background-color:orange")
        },
        ready: function() {
            console.log("%cready", "background-color:green")
        },
        methods: {
            showDialog: function(e) {
                var t = this;
                this.setData({
                    show: !0,
                    isFastJoin: e
                }, (function() {
                    console.log("[component]showDialog, isFastJoin=", e), e && t.data.password && 4 <= t.data.password.length && (console.log("[component]fast join with pwd, auto join!"), t._rightBtnClicked())
                }))
            },
            dismissDialog: function() {
                this.setData({
                    show: !1
                })
            },
            _showChanged: function(e) {
                e || this.setData({
                    isEyeOn: !1,
                    focusArea: "",
                    isDoing: !1
                })
            },
            _coverClicked: function() {
                this.data.isModalDialog || this.dismissDialog()
            },
            _leftBtnClicked: function() {
                this._handleBtnClicked("left")
            },
            _rightBtnClicked: function() {
                this._handleBtnClicked("right")
            },
            _handleBtnClicked: function(e) {
                var t = this,
                    i = "left" === e ? this.data.leftBtn : this.data.rightBtn;
                i.disabled || this.data.isDoing || (this.setData({
                    isDoing: !0
                }), i.main ? setTimeout((function() {
                    t.triggerEvent(i.event, {
                        nickname: t.data.nickname,
                        password: t.data.password
                    }, {})
                }), 600) : (this.dismissDialog(), this.triggerEvent(i.event, {}, {})))
            },
            clearDoing: function() {
                this.data.isDoing && this.setData({
                    isDoing: !1
                })
            },
            onNicknameInput: function(t) {
                if (this.triggerEvent("onNicknameInput", {
                        value: t.detail.value
                    }, {}), e.isAndroid() && this.clearNameClicked) return console.warn("android bug: clear clicked make input blur, which leads to the bindinput fires! we ignored this input event."), void(this.clearNameClicked = !1)
            },
            onMeetingPasswordInput: function(t) {
                if (console.log("[component]pwd input fired:", t.detail.value), this.triggerEvent("onPasswordInput", {
                        value: t.detail.value
                    }, {}), e.isAndroid() && this.clearPwdClicked) return console.warn("android bug: clear clicked pwd input blur, which leads to the bindinput fires! we ignored this input event."), void(this.clearPwdClicked = !1)
            },
            _onAudioChecked: function() {
                this.triggerEvent(this.data.audioCheckEvent, {
                    isOn: !this.data.audioOn
                }, {})
            },
            _onSpeakerChecked: function() {
                this.triggerEvent(this.data.speakerCheckEvent, {
                    isOn: !this.data.speakerOn
                }, {})
            },
            _onVideoChecked: function() {
                this.triggerEvent(this.data.videoCheckEvent, {
                    isOn: !this.data.videoOn
                }, {})
            },
            onFocus: function(e) {
                this.setData({
                    focusArea: e.currentTarget.id
                })
            },
            onBlur: function() {
                this.setData({
                    focusArea: ""
                })
            },
            clearName: function() {
                e.isAndroid() && (this.clearNameClicked = !0), this.triggerEvent("clearName", {}, {})
            },
            clearPwd: function() {
                e.isAndroid() && (this.clearPwdClicked = !0), this.triggerEvent("clearPwd", {}, {})
            },
            onTouchEyeStart: function() {},
            onTouchEyeEnd: function() {},
            onTapEye: function() {
                var e = !this.data.isEyeOn;
                this.setData({
                    isEyeOn: e,
                    password: this.data.password
                })
            }
        }
    });
});
require("pages/sub-preMeeting/components/fast-join-dialog/fast-join-dialog.js");
__wxRoute = 'pages/sub-preMeeting/components/loading-spin/loading-spin';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-preMeeting/components/loading-spin/loading-spin.js';
define("pages/sub-preMeeting/components/loading-spin/loading-spin.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        properties: {},
        data: {},
        methods: {}
    });
});
require("pages/sub-preMeeting/components/loading-spin/loading-spin.js");
__wxRoute = 'pages/sub-preMeeting/join-meeting/join-meeting';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-preMeeting/join-meeting/join-meeting.js';
define("pages/sub-preMeeting/join-meeting/join-meeting.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/objectSpread2"),
        o = require("../../../utils/plugins/myPage"),
        i = require("../../../utils/util.js"),
        a = require("../../../utils/base64.js").Base64,
        r = require("../../../utils/logger.js"),
        s = require("../../../utils/meetingTime.js"),
        c = require("../../../configs/MsgCfgJoinMeeting"),
        d = require("../../../clients/BeaconClient"),
        g = require("../../../clients/WemeetClient"),
        u = require("../../../clients/RavenClient"),
        l = require("../../../stores/MeetingStore"),
        m = require("../../../stores/AppStore"),
        p = require("../../../stores/UserStore"),
        h = require("../../../actions/UserAction"),
        f = require("../../../actions/MeetingAction"),
        v = require("../../../constants/UserType"),
        _ = require("../../../constants/MeetingType"),
        C = require("../../../constants/LayoutMode").LayoutMode,
        k = require("../../../actions/AppAction"),
        M = require("../../../constants/MultMediaState").AccessState,
        w = require("../../../utils/historyCodes.js").getInstance(),
        S = require("../../../constants/MultMediaState").MeetingState,
        D = require("../../../utils/performanceReporter.js"),
        b = require("../../../configs/AppConfig.js"),
        y = require("../../../https/UserHttps.js"),
        T = new r({
            pageName: "join-meeting",
            aegisLogEnable: !0,
            wxLogEnable: !0
        }),
        N = 1,
        I = 2,
        E = [1, 2, 4],
        P = -1,
        O = 1,
        x = 2,
        A = {};
    o({
        name: "join-meeting",
        onEnvSwtichClicked: function() {
            wx.navigateTo({
                url: "../../sub-dev/env-switch/env-switch"
            })
        },
        onCopyOpenIDClicked: function() {
            wx.setClipboardData({
                data: p.getOpenID(),
                success: function() {
                    wx.showToast({
                        title: "openID已复制，赶紧去粘贴吧",
                        icon: "none",
                        duration: 1500
                    })
                },
                fail: function(e) {
                    console.warn(e), wx.showToast({
                        title: "openID复制失败",
                        icon: "none"
                    })
                }
            })
        },
        data: {
            enableEnvSwitch: !1,
            curEnv: "",
            msg_DownloadApp: "下载App",
            cover: !1,
            meetingCode: "",
            meetingCodeFormatted: "",
            errmsg_MeetingCodeErrorMsg: "会议号不存在",
            isGuest: !1,
            needPassword: !1,
            meetingPassword: "",
            errmsg_MeetingPasswordLengthError: "会议密码应为4~6位的字母、数字组合",
            isPasswordError: !1,
            errmsg_MeetingPasswordErrorMsg: "会议密码错误",
            token: "",
            nickName: "",
            errmsg_NicknameIsInvalid: "入会名称不能为空",
            maxlength: b.MAX_LEN_NICKNAME,
            videoOn: !1,
            msg_video: "开启摄像头",
            speakerOn: !0,
            msg_speaker: "开启扬声器",
            audioOn: !0,
            msg_audio: "开启麦克风",
            msg_join1: "加入会议",
            msg_join2: "客户端入会",
            msg_MeetingCodePrompt: "请输入会议号",
            msg_MeetingPwdPrompt: "请输入入会密码",
            msg_MeetingNickNamePrompt: "请输入您的名称",
            msg_joininig: "正在加入...",
            isJoining: !1,
            showExit: !1,
            logoutReason: "",
            historyCodeIndex: 0,
            historyCodes: [],
            isEyeOn: !1,
            isInvited: "",
            subscribeState: "-",
            MSG_GRANT_PHONE_TITLE: "为落实实名制，入会前请验证手机号码。",
            MSG_GRANT_PHONE_BUTTON_CANCEL: "取消",
            MSG_GRANT_PHONE_BUTTON_GRANT: "前往验证",
            MSG_GRANT_PHONE_TEXT1: "我已阅读并同意",
            MSG_GRANT_PHONE_PROTOCOL1: "《软件许可及服务协议》",
            MSG_GRANT_PHONE_TEXT2: "和",
            MSG_GRANT_PHONE_PROTOCOL2: "《隐私政策》",
            MSG_GRANT_TOOLTIP_TEXT: "为落实实名制要求，加入会议前请验证手机号码以核验身份",
            MSG_GRANT_TOAST_TEXT: "请阅读并勾选服务协议及隐私政策",
            isAgrees: !1,
            isGrantBtnDisabled: !0,
            hasOpenNicknameDialog: !1,
            xmppTokenIsValid: !1,
            videoHeight: 640,
            videoWidth: 360
        },
        goHomePage: function() {
            wx.navigateTo({
                url: "../../sub-web/web/web?url=".concat("https://wemeet.qq.com")
            })
        },
        onNativeDialogNotRecoverBtnClicked: function() {
            T.info("user would not like to recover meeting"), d.report("would_not_like_to_recover_meeting", {
                A76: this.data.meetingCode
            }), p.setAutoJoin(!1)
        },
        onNativeDialogRecoverMeetingClicked: function() {
            T.info("user would like to recover meeting"), d.report("would_like_to_recover_meeting", {
                A76: this.data.meetingCode
            }), this.joinByMp()
        },
        openQuitFromRoomDialog: function(e) {
            var t;
            if ("true" !== (null === (t = p.getExpParams()) || void 0 === t ? void 0 : t.isInvited) && "string" == typeof e.msg) {
                var n = p.getUnionId(),
                    o = p.getOpenID(),
                    i = l.getLastQueryMeetingInfo(),
                    a = {
                        meeding_id: (null == i ? void 0 : i.meetingID) || "unknown",
                        union_id: n,
                        open_id: o,
                        is_follow: p.getSubscribeState()
                    };
                d.report("mp_endmeeting_popup_null_null_null_null_explore", a);
                var r = c.quitFromRoomg;
                r.content = e.msg, this.msgDialog.open(r)
            }
        },
        openRecoverMeetingDialog: function() {
            var e = c.recoverMeeting;
            e.cancelBtn.onClick = this.onNativeDialogNotRecoverBtnClicked, e.okBtn.onClick = this.onNativeDialogRecoverMeetingClicked, this.msgDialog.open(e)
        },
        openGoToSignupDialog: function(e) {
            var t = null != e && e.content ? n(n({}, c.goToSignupDialog), {}, {
                content: e.content
            }) : c.goToSignupDialog;
            t.okBtn.onClick = this.goToSignup, this.msgDialog.open(t)
        },
        openPersonLimitedDialog: function() {
            this.copyMeetingCode();
            var e = c.personLimited;
            this.setData({
                isJoining: !1
            }), this.msgDialog.open(e)
        },
        openIsGuestDialog: function() {
            this.copyMeetingCode(), this.setData({
                isJoining: !1
            });
            var e = c.isGuest;
            e.okBtn.onClick = this.continueGoToMeeting, this.msgDialog.open(e)
        },
        openLeaveReasonDialog: function(e) {
            var t = c.leaveMeeting;
            t.okBtn.text = e, this.msgDialog.open(t)
        },
        openAccountLimitedDialog: function() {
            var e = c.accountLimited;
            this.msgDialog.open(e)
        },
        openOnlyEnterpriseUserCanJoinDialog: function() {
            this.openPromptDialog({
                content: "该会议仅允许企业内部用户加入，请使用腾讯会议客户端登录对应企业账号。",
                btnText: "我知道了",
                btnClick: function() {
                    T.info("openOnlyEnterpriseUserCanJoinDialog"), d.report("mp_join_meeting_membership_limit_iknow")
                }
            })
        },
        openOnlyInviteUserCanJoinDialog: function() {
            this.openPromptDialog({
                content: "该会议仅主持人邀请成员可入会，请使用腾讯会议客户端加入会议。",
                btnText: "我知道了",
                btnClick: function() {
                    T.info("openOnlyInviteUserCanJoinDialog"), d.report("mp_join_meeting_membership_limit_iknow")
                }
            })
        },
        openJoinErrorDialog: function(e) {
            var t = e.content,
                n = e.btnText,
                o = e.title;
            this.openPromptDialog({
                content: t,
                btnText: n,
                title: o
            })
        },
        openPromptDialog: function(e) {
            var t = c.prompt,
                n = e || {},
                o = n.title,
                i = void 0 === o ? "" : o,
                a = n.content,
                r = void 0 === a ? "" : a,
                s = n.btnText,
                d = void 0 === s ? "" : s,
                g = n.btnClick,
                u = void 0 === g ? function() {} : g;
            t.title = i, t.content = r, r || (t.content = "no content provided for openPromptDialog"), d && (t.okBtn.text = d), t.okBtn.onClick = u, this.msgDialog.open(t)
        },
        continueGoToMeeting: function() {
            this.joinByMp(), this.setData({
                isGuest: !0,
                isJoining: !1
            })
        },
        copyMeetingCode: function() {
            var e = l.getLastQueryMeetingInfo().meetingCode;
            console.log("meetingCode", e), wx.setClipboardData({
                data: e,
                success: function() {
                    wx.showToast({
                        title: "会议号已复制到粘贴板",
                        icon: "none",
                        duration: 1500
                    })
                },
                fail: function() {
                    wx.showToast({
                        title: "复制失败",
                        icon: "none"
                    })
                }
            })
        },
        goToSignup: function() {
            var e = l.getLastQueryMeetingInfo(),
                t = encodeURIComponent(e.url);
            wx.redirectTo({
                url: "../../sub-web/auth/auth?url=".concat(t, "&isInJump=1")
            })
        },
        openOverseaConfirmDialog: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e) {
                                n.msgDialog.open({
                                    mainContentClassName: "join-meeting-oversea-dialog-main",
                                    title: "跨境会议数据出境授权",
                                    contentArr: [{
                                        content: "请注意，您正在加入境外VooV Meeting（腾讯会议境外版）用户创建的会议，为实现参会目的，保障线上会议的顺利进行，我们需要将您的头像、昵称等必要信息通过加密的方式提供给位于新加坡的VooV Meeting境外运营方。我们将遵守中国相关法律法规，通过国家网信部门组织的安全评估进行数据出境。具体内容参见"
                                    }, {
                                        content: "《腾讯会议隐私保护指引》",
                                        style: "color: #006fff;",
                                        onClick: function() {
                                            var e = encodeURIComponent("https://meeting.tencent.com/privacy-policy.html");
                                            wx.navigateTo({
                                                url: "../../sub-web/web/web?url=".concat(e)
                                            })
                                        }
                                    }, {
                                        content: "3.2条。"
                                    }],
                                    okBtn: {
                                        text: "同意授权",
                                        onClick: function() {
                                            e(!0)
                                        }
                                    },
                                    cancelBtn: {
                                        text: "离开会议",
                                        onClick: function() {
                                            e(!1)
                                        }
                                    }
                                })
                            })));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        checkDefaultNicknameIsInvalid: function() {
            var e = this.getNickName(),
                t = i.getValueFromLocalStorage("userManualSetNickname"),
                n = !e,
                o = /^小程序用户/.test(e) || /^微信用户/.test(e);
            return (n || o) && !t
        },
        openNicknameDialog: function() {
            var e = this;
            this.nicknameDialog.open({
                title: "入会名称",
                okBtn: {
                    text: "确认",
                    onClick: function() {
                        var t = e.nicknameDialog.getNickname() || "";
                        t.trim() || (t = ""), t = i.truncateText(t), e.setData({
                            nickName: t
                        })
                    }
                },
                cancelBtn: {
                    text: "取消"
                }
            }), setTimeout((function() {
                e.nicknameDialog.setNicknameInputFocus()
            }), 20)
        },
        initInputFields: function() {
            this.setData({
                nickName: i.truncateText(this.getNickName())
            });
            var e = A.code,
                t = A.hideCode;
            e && this.setMeetingCode(e, t)
        },
        disableJoiningBtn: function() {
            this.data.isJoining || this.setData({
                isJoining: !0
            })
        },
        enableJoiningBtn: function() {
            this.data.isJoining && this.setData({
                isJoining: !1
            })
        },
        clearFastJoinDialogDoing: function() {
            this.fastJoinDialog.clearDoing()
        },
        joinMeeting: function() {
            var n = this;
            return t(e().mark((function t() {
                var o, a;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (A = {}, n.isFastJoin = !1, n.disableJoiningBtn(), d.reportMediaGrantStatus(), o = n.getJoinParams()) {
                                e.next = 9;
                                break
                            }
                            return n.enableJoiningBtn(), n.clearFastJoinDialogDoing(), e.abrupt("return");
                        case 9:
                            o.rs = i.JOIN_MEETING_REPORT_SOURCE.MP_DIRECT, o.join_from = 4, (a = m.getCustomerDataFor(o.meeting_id)) && (o.customer_data = a), n.data.str_security_component_code && (o.security_component_code = n.data.str_security_component_code), l.getIsSupportIm() && (o.im = {
                                im_type: 1
                            }), f.setJoinParam(o), D.start(1003), n.startTime = (new Date).getTime(), g.preMeetingService.joinMeeting(o);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        onLeaveMeetingCallback: function(e, t) {
            e ? T.info("leave succeed") : (T.error("leave failed: flag=".concat(e, ", data=").concat(JSON.stringify(t))), d.reportError(100311))
        },
        onMeetingStoreChange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.flag,
                o = t.data;
            switch (e) {
                case _.QUERY_MEETING_ITEM_LIST_SUCC:
                case _.QUERY_MEETING_ITEM_LIST_FAIL:
                    this.onMeetingInfoGot(n, o);
                    break;
                case _.JOIN_MEETING_SUCC:
                case _.JOIN_MEETING_FAIL:
                    this.onJoinMeetingCallback(n, o);
                    break;
                case _.LEAVE_MEETING_SUCC:
                case _.LEAVE_MEETING_FAIL:
                    this.onLeaveMeetingCallback(n, o);
                    break;
                case _.QUERY_MEETING_SETTINGS_SUCC:
                    this.onQueryMeetingSettingsSucc(o);
                    break;
                case _.QUERY_MEETING_SETTINGS_FAIL:
                    this.onQueryMeetingSettingsFail(o)
            }
        },
        onUserStoreChange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.flag,
                o = t.data;
            switch (e) {
                case v.XMPP_LOGIN_SUCC:
                case v.XMPP_LOGIN_FAIL:
                    this.onLoginCallback && this.onLoginCallback(n, o);
                    break;
                case v.XMPP_LOGOUT_ON_POSITIVELY:
                case v.XMPP_LOGOUT_ON_ABNORMAL_NETWORK:
                case v.XMPP_LOGOUT_ON_KICKED_BY_SAME_ACCOUNT:
                case v.XMPP_LOGOUT_ON_ABNORMAL_ACCOUNT:
                case v.XMPP_LOGOUT_ON_OTHERS_SITUATION:
                    var i = t.ecode,
                        a = t.reason;
                    this.onLogoutCallback(e, i, a);
                    break;
                case v.LEAVE_MEETING_REASON_CHANGE:
                    this.onLeaveMeetingReasonChangeCallBack(o);
                    break;
                case v.ABTEST_EXP_PARAMS_CHANGE:
                    this.setData({
                        isInvited: null == t ? void 0 : t.isInvited
                    });
                    break;
                case v.USER_SUBSCRIBE_STATE_SUCC:
                    this.setData({
                        subscribeState: null == t ? void 0 : t.subscribe
                    })
            }
        },
        onQueryMeetingSettingsSucc: function(e) {
            var t = this;
            if (f.getJoinRespMeta().roomInfo.enter_room_type === g.constants.RoomType.WAITING_ROOM) return g.meetingUserCtrl.queryUserSig(), void setTimeout((function() {
                t.navToWaitingRoomPage()
            }), 300);
            s.start(), g.preMeetingService.queryMeetingPayInfo(l.getLastQueryMeetingInfo().meetingID), g.meetingUserCtrl.queryCloudRecordState(), g.meetingUserCtrl.queryUserSig(), this.onJoinMeetingSucceed(f.getJoinRespMeta().roomInfo)
        },
        onQueryMeetingSettingsFail: function(e) {
            T.error("查会议设置信息失败，入会abort吧")
        },
        onLeaveMeetingReasonChangeCallBack: function(e) {
            var t = "string" != typeof e.msg ? e.msg.title : e.msg;
            if (i.clog.info("离会原因: ".concat(t)), g.constants.LoginState.LOGIN_STATE_LOGIN === g.authService.getLoginState()) return t ? (i.clog.info("[已连接]退会原因：".concat(t)), void(p.isAccountIllegal() ? this.openAccountLimitedDialog() : this.openQuitFromRoomDialog(e))) : void 0;
            t ? (i.clog.warn("断开且有原因，询问登录"), this.setData({
                showExit: !0,
                logoutReason: t
            })) : (i.clog.warn("断开且没有原因，静默登录"), p.getPhoneNum() && this.relogin())
        },
        onLoad: function(e) {
            var t, n = this;
            if (k.pageExposed("join-meeting"), T.info("onLoad with ".concat(JSON.stringify(e))), d.report("e#join_meeting#all#exposure"), p.onceEventListener(this.onUserStoreChange), this.fastJoinDialog = this.selectComponent("#fastJoinDialogComponent"), this.fastJoinDialog || (T.error('cannot get "fastJoinDialog" component in onload'), d.reportError(100315)), this.msgDialog = this.selectComponent("#join-message-dialog").component, this.nicknameDialog = this.selectComponent("#join-nickname-dialog").component, this.customModal = this.selectComponent("#join-custom-modal").component, this.sliderMsgDialog = this.selectComponent("#join-slider-message-dialog"), this.setOnLoad(!1), this.setData({
                    enableEnvSwitch: m.getEnvSwitchEnable(),
                    minCache: b.minCache,
                    maxCache: b.maxCache,
                    minBitrate: b.minBitrate,
                    maxBitrate: b.maxBitrate,
                    meetingCodeMaxLen: b.MEETING_CODE_MAX_LEN,
                    isSupportSmoothVOIP: m.getIsSupportSmoothVOIP(),
                    isSupportSmallVideo: b.isSupportSmallVideo,
                    trtcEnv: b.trtcEnv,
                    isContain: b.isContain,
                    isInvited: (null === (t = p.getExpParams()) || void 0 === t ? void 0 : t.isInvited) || "",
                    subscribeState: p.getSubscribeState(),
                    cover: "1" === e.cover
                }), "1" === e.cover && wx.showLoading({
                    title: "进入会议中...",
                    mask: !0
                }), e.q) {
                this.launchScene = I;
                var o = decodeURIComponent(e.q);
                T.info("launch mp by scanning qrcode, raw url:".concat(o));
                var i = o.indexOf("?");
                i < 0 ? T.warn("invalid raw qrcode url got: ".concat(o)) : this.parsePassedInParams(o.substr(i + 1))
            } else if (e.scene) {
                this.launchScene = N;
                var a = decodeURIComponent(e.scene);
                this.parsePassedInParams(a), T.info("launch by mp qrcode, scene: ".concat(a))
            } else this.parsePassedInParams(e);
            if (p.getPrevSuccMeetingCode())
                if (this.hasMeetingCodePassedIn()) {
                    var r = A.code;
                    r !== p.getPrevSuccMeetingCode() && (T.warn("we got new meeting code passed in: ".concat(r, ",\n          which is not same as the previous one(").concat(p.getPrevSuccMeetingCode(), ").\n          we should use the newer one! And stop auto join")), p.setAutoJoin(!1)), p.setPrevSuccMeetingCode("")
                } else T.info("we dont have new coming meeting code, just or they are same, keep nothing touched.\n        gParam: ".concat(JSON.stringify(A)));
            this.isFastJoin = this.hasMeetingCodePassedIn(), this.setData({
                doNotPopKeyBoard: this.hasMeetingCodePassedIn() || !p.getPhoneNum(),
                historyCodes: w.list
            }), this.initInputFields();
            var s = this.checkDefaultNicknameIsInvalid();
            s && this.setData({
                nickName: ""
            });
            var c = g.isXMPPTokenValid();
            this.setData({
                xmppTokenIsValid: c
            }), c ? this.makeXMPPLogin().then((function() {
                if (n.isFastJoin) T.info("已授权过手机号且已登录，是自动入会场景，发起自动入会"), n.joinByMp();
                else if (0 < n.data.historyCodes.length) {
                    var e = n.data.historyCodes[0].code;
                    T.info("入会界面onLoad阶段已登录，取第一个历史会议: ".concat(e, ", 先查询是否进行中，再决定是否自动填充...")), n.readyToFillHisCode = !0, n.queryMeetingInfo(e)
                } else T.info("已授权过手机号且已登录，非自动入会场景，do nothing")
            })).catch((function(e) {
                T.error("初始化登录失败: ".concat(e))
            })) : this.isFastJoin && !this.data.hasOpenNicknameDialog && (!this.data.nickName || s ? (this.openNicknameDialog(), this.setData({
                isJoining: !1,
                cover: !1,
                nickName: "",
                hasOpenNicknameDialog: !0
            })) : this.makeXMPPLogin().then((function() {
                return n.joinByMp()
            })))
        },
        parsePassedInParams: function(e) {
            if (A = {}, e) {
                var t = {};
                if ("string" == typeof e)
                    for (var n = e.split("&"), o = 0; o < n.length; o++) {
                        var a = n[o].split("=")[0],
                            r = unescape(n[o].split("=")[1]);
                        t[a] = r
                    } else
                        for (var s in e) t[s] = e[s];
                if (t.code || t.m) {
                    var c = t.code && i.isMeetingCodeValid(t.code, b.MEETING_CODE_MAX_LEN),
                        d = t.m && i.isMeetingCodeValid(t.m, b.MEETING_CODE_MAX_LEN),
                        g = "";
                    c ? g = t.code : d && (g = t.m), g && (A.code = g)
                }
                if ((t.pwd || t.p) && (A.pwd = t.pwd || t.p || ""), t.name || t.nm) {
                    var u = this.decodeURISafely(t.name || "");
                    u || (u = this.decodeURISafely(t.nm || "")), u && (A.nickname = u)
                }
                if (t.mask_flag) {
                    var l = 1 == (1 & t.mask_flag);
                    l && (A.hideCode = l)
                }
                t.hideCode && (A.hideCode = t.hideCode), T.info("got param: ".concat(JSON.stringify(A)))
            }
        },
        base64DecodeUnstable: function(e) {
            var t = "";
            try {
                var n = a.decode(e);
                if (/\r?\n?ÃÜ$/.test(n)) {
                    var o = n.replace(/\r?\n?ÃÜ$/, "");
                    T.warn("WARNING! The decoded data ends up with 'ÃÜ', we cut it off to: ".concat(o)), t = o, T.reportEvent("base64_decoded_buggy")
                } else t = n
            } catch (t) {
                T.error("Base64 decode error on 3rd party data.\n        errmsg = ".concat(t.message, "\n        data = ").concat(e, "\n      ")), T.reportEvent("base64_decoded_failed")
            }
            return t
        },
        hasMeetingCodePassedIn: function() {
            return !!A.code
        },
        reloadJoinMeetingPage: function() {
            wx.reLaunch({
                url: "../join-meeting/join-meeting"
            })
        },
        decodeURISafely: function(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return T.info("URI Component not decodable: ".concat(e)), e
            }
        },
        makeSurePhoneGranted: function() {
            var e = this;
            return new Promise((function(t, n) {
                var o = g.isXMPPTokenValid();
                if (o) return t("Y"), void e.setData({
                    xmppTokenIsValid: o
                });
                T.info("xmppToken is invalid, need to get user re-authorized his phone so that we can update xmppToken"), h.isLoginStateValid().then((function(e) {
                    return e ? (T.info("both session_key & cgi_token are valid"), !0) : h.doLogin()
                })).then((function(o) {
                    e.sliderMsgDialog.show(), e.phoneGranted = function(o, i) {
                        e.sliderMsgDialog.hide(), d.report("mp_phone_grant", {
                            code: 0
                        }), e.setData({
                            xmppTokenIsValid: !0
                        }), h.getPhoneNumber(o, i).then((function() {
                            t("Y")
                        })).catch((function(e) {
                            T.error("get phone failed: ".concat(e)), n(P)
                        }))
                    }, e.phoneRefused = function() {
                        e.sliderMsgDialog.hide(), d.report("mp_phone_grant", {
                            code: O
                        }), n(O)
                    }, e.phoneGrantCancelled = function() {
                        e.sliderMsgDialog.hide(), d.report("mp_phone_grant", {
                            code: x
                        }), n(x)
                    }
                })).catch((function(t) {
                    T.error("makeSurePhoneGranted promise error caught: ".concat(t)), d.reportError("100318"), n(P), e.setData({
                        xmppTokenIsValid: !1
                    })
                }))
            }))
        },
        getEventHandler: function(e) {
            return this[e]
        },
        onJoinMeetingCallback: function(n, o) {
            var a = this;
            return t(e().mark((function t() {
                var r, s, c, h, v, _, C, k, M, S, b, y, N, I, E, P, O, x, A, L, J, G;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (D.end(1003), c = l.getLastQueryMeetingInfo(), a.data.cover && wx.hideLoading(), c) {
                                e.next = 12;
                                break
                            }
                            return T.reportCls("cls_join_meeting_fail_1"), d.report("mp_join_meeting", {
                                success: "N",
                                errcode: "100301",
                                errmsg: "FATAL error, meeting info is invalid"
                            }), T.reportEvent("mp_join_meeting_failed", "100301", ""), wx.showToast({
                                title: "会议信息拉取失败",
                                icon: "none",
                                duration: 3e3,
                                cover: !1
                            }), a.enableJoiningBtn(), a.clearFastJoinDialogDoing(), f.setJoinMeetingRespMeta(null), e.abrupt("return");
                        case 12:
                            if (console.log("onJoinMeetingCallback-------", o), "22328" !== (null === (r = o) || void 0 === r ? void 0 : r.code) || a.data.isGuest) {
                                e.next = 19;
                                break
                            }
                            return d.report("MINA_null_null_participants_null_null_explore"), a.setData({
                                cover: !1,
                                isJoining: !1
                            }), a.openIsGuestDialog(), a.clearFastJoinDialogDoing(), e.abrupt("return");
                        case 19:
                            if ("22334" !== (null === (s = o) || void 0 === s ? void 0 : s.code)) {
                                e.next = 25;
                                break
                            }
                            return d.report("MINA_null_null_limit_null_null_explore"), a.setData({
                                cover: !1,
                                isJoining: !1
                            }), a.openPersonLimitedDialog(), a.clearFastJoinDialogDoing(), e.abrupt("return");
                        case 25:
                            if (!n || !o) {
                                e.next = 51;
                                break
                            }
                            wx.showLoading({
                                mask: !0,
                                title: "正在入会..."
                            }), a.fastJoinDialog.dismissDialog(), h = "", c.hasPwd && ((h = a.data.meetingPassword) || T.error("meeting needs password but no password supplied. meetingInfo: ".concat(JSON.stringify(c)))), f.setJoinMeetingRespMeta({
                                roomInfo: o,
                                settings: {
                                    videoOn: a.data.videoOn,
                                    audioOn: a.data.audioOn,
                                    speakerOn: a.data.speakerOn
                                },
                                metaData: {
                                    pwd: h,
                                    nickname: a.data.nickName,
                                    watermark_content: o.watermark_content || ""
                                }
                            }), v = o.enter_room_type, _ = g.getRoomTypeName(v), C = 0 === o.role ? "DC" : "OC", k = (new Date).getTime() - a.startTime, M = c.meetingCode, S = void 0 === M ? "" : M, b = c.meetingID, y = void 0 === b ? "" : b, T.info("join ".concat(_, "(").concat(C, ") ").concat(S, "(").concat(y, ") cost ").concat(k, "ms succeed.")), N = a.data.videoOn ? "1" : "0", I = a.data.audioOn ? "1" : "0", E = a.data.speakerOn ? "1" : "0", T.reportCls("cls_join_meeting_success"), d.report("mp_join_meeting", {
                                success: "Y",
                                supportVOIP: m.getIsSupportSmoothVOIP() ? "Y" : "N",
                                roomType: v === g.constants.RoomType.MEETING_ROOM ? "0" : "1",
                                videoOn: N,
                                audioOn: I,
                                speakerOn: E,
                                timeCost: k
                            }), T.reportEvent("mp_join_meeting_success_mediaInfo", N, I, E), T.reportEvent("mp_join_meeting_success_meetingInfo", m.getIsSupportSmoothVOIP() ? "Y" : "N", v === g.constants.RoomType.MEETING_ROOM ? "0" : "1", k), p.setPrevSuccMeetingCode(a.data.meetingCode || ""), w.add({
                                meetingInfo: c,
                                nickname: a.data.nickName
                            }), p.setAutoJoin(!1), a.setData({
                                historyCodes: w.list,
                                historyCodeIndex: 0,
                                meetingCodeFormatted: c.getMeetingCodeToShow()
                            }), g.meetingUserCtrl.queryMeetingSettings(), e.next = 93;
                            break;
                        case 51:
                            if (T.warn("join meeting failed at ".concat(new Date, ": ").concat(n, ", ").concat(JSON.stringify(o))), a.clearFastJoinDialogDoing(), f.setJoinMeetingRespMeta(null), g.isLoggedIn()) {
                                e.next = 58;
                                break
                            }
                            return T.warn("xmpp already logged out"), a.setData({
                                showExit: !0,
                                logoutReason: "您已断开连接",
                                isJoining: !1,
                                cover: !1
                            }), e.abrupt("return");
                        case 58:
                            o || (0 < a.joinStartTime && T.warn("join meeting timeout, cost(ms):  ".concat((new Date).getTime() - a.joinStartTime)), o = {
                                msg: "入会超时",
                                code: "9999"
                            }), P = {
                                errmsg_MeetingCodeErrorMsg: "加入会议失败！发生未知错误。",
                                isPasswordError: !1,
                                errmsg_MeetingPasswordErrorMsg: "会议密码错误",
                                isJoining: !1,
                                cover: !1
                            }, a.data.cover && wx.hideLoading(), "13409" !== o.code || o.msg || (o.msg = "会议成员人数已达上限"), "22319" !== o.code && "22318" !== o.code || (p.setSignupNickName(a.data.nickName), a.openGoToSignupDialog({
                                content: o.msg
                            }), a.data.cover && wx.hideLoading(), a.setData({
                                isJoining: !1,
                                cover: !1
                            })), "9043" !== o.code || o.msg || (o.msg = "您的App版本过低！"), o.msg ? (P.errmsg_MeetingCodeErrorMsg = o.msg, P.errmsg_MeetingPasswordErrorMsg = o.msg) : o.error && (P.errmsg_MeetingCodeErrorMsg = o.error), "13402" == (O = o.code) ? (P.isPasswordError = !0, P.needPassword = !0) : !O && o.meetingInUseList && 0 < o.meetingInUseList.length && (o.code = 100316), a.setData(P), 3 === c.loginUsersOnly && a.openOnlyInviteUserCanJoinDialog(), e.t0 = O, e.next = "13402" === e.t0 ? 72 : "13416" === e.t0 ? 73 : "13417" === e.t0 ? 75 : "-155107" === e.t0 ? 77 : "9097" === e.t0 ? 79 : "13426" === e.t0 ? 81 : 86;
                            break;
                        case 72:
                            return e.abrupt("break", 89);
                        case 73:
                            return a.openOnlyEnterpriseUserCanJoinDialog(), e.abrupt("break", 89);
                        case 75:
                            return a.openOnlyInviteUserCanJoinDialog(), e.abrupt("break", 89);
                        case 77:
                            return a.authUserInfoAndRejoinRoom(), e.abrupt("break", 89);
                        case 79:
                            return i.showWXToast(P.errmsg_MeetingCodeErrorMsg), e.abrupt("break", 89);
                        case 81:
                            return 13436 === (null == (L = o.dialogConfig) ? void 0 : L.error_code) && d.report("e#inmeeting_crossmeeting_buy_pop#all#exposure"), 9098 === L.error_code && d.report("e#meeting_limit_buy_pop#all#exposure"), a.customModal.open({
                                title: L.title || "",
                                content: (null == L || null === (x = L.content_list[0]) || void 0 === x ? void 0 : x.text) || "入会失败",
                                cancelBtn: null,
                                okBtn: {
                                    text: (null == L || null === (A = L.button_list[0]) || void 0 === A ? void 0 : A.text) || "我知道了",
                                    onClick: null == L ? void 0 : L.error_code
                                }
                            }), e.abrupt("break", 89);
                        case 86:
                            return J = P.isPasswordError ? P.errmsg_MeetingPasswordErrorMsg : P.errmsg_MeetingCodeErrorMsg, a.showToast({
                                icon: "none",
                                title: J
                            }), e.abrupt("break", 89);
                        case 89:
                            G = o.code ? o.code : "100302", d.report("mp_join_meeting", {
                                success: "N",
                                errcode: G,
                                errmsg: P.isPasswordError ? P.errmsg_MeetingPasswordErrorMsg : P.errmsg_MeetingCodeErrorMsg,
                                tryjoin: a.data.meetingCode
                            }), T.reportCls("cls_join_meeting_fail_".concat(G)), "13001" == O && u.captureMessage("join meeting room failed(13001)", {
                                level: "error"
                            });
                        case 93:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        authUserInfoAndRejoinRoom: function() {
            var e = this;
            this.msgDialog.open({
                title: "授权用户信息",
                content: "请先进行微信授权",
                okBtn: {
                    text: "授权",
                    onClick: function() {
                        wx.getUserProfile({
                            lang: "zh_CN",
                            desc: "需要进行微信授权",
                            success: function() {
                                T.info("用户点击微信用户信息授权成功"), h.doLogin().then((function() {
                                    e.joinMeeting()
                                }))
                            },
                            fail: function() {
                                T.info("用户点击微信用户信息授权拒绝按钮"), wx.showToast({
                                    icon: "none",
                                    title: "专属会议需要授权用户信息才可使用"
                                })
                            },
                            complete: function() {}
                        })
                    }
                },
                cancelBtn: {
                    text: "取消",
                    onClick: function() {
                        T.info("用户取消授权用户信息"), wx.showToast({
                            icon: "none",
                            title: "专属会议需要授权用户信息才可使用"
                        })
                    }
                }
            })
        },
        navToWaitingRoomPage: function() {
            var e = this;
            wx.navigateTo({
                url: "../../sub-preMeeting/waiting-room/waiting-room",
                success: function() {
                    T.info("join waiting-room as: ".concat(e.data.nickName, ", audio: ").concat(e.data.audioOn ? "on" : "off", ", speaker: ").concat(e.data.speakerOn ? "on" : "off", ", video: ").concat(e.data.videoOn ? "on" : "off"))
                },
                fail: function(e) {
                    console.warn("入会跳转失败: ", e)
                },
                complete: function() {
                    wx.hideLoading()
                }
            })
        },
        onLogoutCallback: function() {},
        onReloginClicked: function() {
            var e = this;
            this.setData({
                showExit: !1
            }, (function() {
                e.relogin()
            }))
        },
        relogin: function() {
            A = {}, console.log("%c重新登录...", "background-color:orange;color:white"), this.makeXMPPLogin().catch((function(e) {
                T.warn("relogin failed: ".concat(e))
            }))
        },
        getNickName: function() {
            var e;
            if (A.nickname) return A.nickname;
            if (p.getDefaultNickName()) return p.getDefaultNickName();
            var t = null === (e = p.getWXUserInfo()) || void 0 === e ? void 0 : e.nickName;
            return t && "微信用户" !== t ? this.getSanitizedNickName(t) : ""
        },
        getSanitizedNickName: function(e) {
            return e
        },
        joinByWhat: function(e) {
            if (e && ("btnByApp" === e.target.id || "btnByMp" === e.target.id))
                if ((!this.data.needPassword || 3 < this.data.meetingPassword.length || this.data.token) && 0 < this.data.nickName.length) {
                    if ("btnByMp" !== e.target.id) {
                        d.report("join_by_app", {
                            audio_on: this.data.audioOn ? "1" : "0",
                            video_on: this.data.videoOn ? "1" : "0"
                        }), console.log("set launch app params");
                        var t = this.getJoinParams() || {};
                        t.rs = i.JOIN_MEETING_REPORT_SOURCE.MP_LAUNCH_APP;
                        var n = [];
                        Object.keys(t).forEach((function(e) {
                            n.push("{$prop}=".concat(encodeURIComponent(t[e] || "")))
                        }));
                        var o = "wemeet://page/inmeeting?".concat(n.join("&"));
                        console.log("[准备打开app传给app的参数]: ", t), console.log("[准备打开app传给app的参数,encodeURIComponent之后]: ", o), T.info("ready to launch App with params: ".concat(JSON.stringify(o))), this.setData({
                            launchAppParam: o
                        })
                    }
                } else console.warn("not ok to join because either meeting code, password(maybe), or nickname is invalid")
        },
        updateNickname: function() {
            var e = !1;
            return 0 < w.list.length && this.data.meetingCode === w.list[0].code ? (console.info("当前会议号就是上次成功入会的，用上次的昵称"), this.data.nickname !== w.list[0].nickname && (this.setData({
                nickName: w.list[0].nickname
            }), e = !0)) : console.log("当前所显示的会议号并非最近一次入会，忽略"), e
        },
        onShow: function() {
            var e = this;
            T.info("onShow"), l.onceEventListener(this.onMeetingStoreChange), h.isCGITokenValid() && y.getAbilityConfig({
                filters: [{
                    key: "video",
                    values: ["mp_video_resolution"]
                }, {
                    key: "inmeeting",
                    values: ["mp_im"]
                }],
                is_filter_default: !0
            }).then((function(e) {
                var t, n, o = null == e || null === (t = e.settings) || void 0 === t ? void 0 : t.video;
                "1" === (null == o ? void 0 : o.mp_video_resolution) ? (l.setIsUseMoreWidth(!0), T.reportCls("cls_video_width_success_720")) : (l.setIsUseMoreWidth(!1), T.reportCls("cls_video_width_fail_360"));
                var i = null == e || null === (n = e.settings) || void 0 === n ? void 0 : n.inmeeting;
                1 === (null == i ? void 0 : i.mp_im) ? (l.setIsSupportIm(!0), T.reportCls("cls_mp_im_success")) : (l.setIsSupportIm(!1), T.reportCls("cls_mp_im_fail"))
            }));
            var t = {
                curEnv: m.getEnvName(),
                canOpenApp: m.getCanOpenApp()
            };
            this.setData(t), h.checkAccessState((function(t) {
                (e.data.videoOn || e.data.audioOn) && (e.data.audioOn && p.getMicrophoneAccessState() !== M.Permitted && e.setData({
                    audioOn: !1
                }), e.data.videoOn && p.getCameraAccessState() !== M.Permitted && e.setData({
                    videoOn: !1
                }))
            })), g.isLoggedIn() && p.getPrevSuccMeetingCode() && p.getAutoJoin() ? (T.info("prompt recover, fill it: ".concat(p.getPrevSuccMeetingCode())), this.fillPreviousMeetingCode(), this.openRecoverMeetingDialog()) : T.info("Wont prompt recover.\n        logged=".concat(g.isLoggedIn(), ",\n        prevcode=").concat(p.getPrevSuccMeetingCode(), ",\n        autoJoin=").concat(p.getAutoJoin(), "\n      ")), this.data.cover && setTimeout((function() {
                wx.hideLoading(), e.setData({
                    cover: !1
                })
            }), 5e3)
        },
        fillPreviousMeetingCode: function() {
            var e = p.getPrevSuccMeetingCode(),
                t = w.findItemByCode(e),
                n = null !== t && t.isMasked;
            this.setMeetingCode(e, n)
        },
        onHide: function() {
            T.info("onHide"), this.readyToFillHisCode = !1, l.removeEventListener(this.onMeetingStoreChange), this.enableJoiningBtn(), this.data.cover && wx.hideLoading(), this.setData({
                cover: !1
            })
        },
        onUnload: function() {
            T.info("onUnload"), p.removeEventListener(this.onUserStoreChange), l.removeEventListener(this.onMeetingStoreChange)
        },
        onShareAppMessage: function() {
            var e = l.getLastQueryMeetingInfo();
            return f.getShareObject(e)
        },
        onAddToFavorites: function() {
            T.info('用户点击右上角菜单的"收藏"按钮'), d.report("mp_add_to_favorites", {
                pageName: "join-meeting"
            });
            var e = l.getLastQueryMeetingInfo();
            return f.getShareObject(e)
        },
        getJoinParams: function() {
            var e = l.getLastQueryMeetingInfo();
            return e ? {
                meeting_id: e.meetingID,
                meeting_code: e.meetingCode,
                pmi_code: e.pmiCode,
                token: this.data.token || "",
                nickname: this.data.nickName || "小程序用户",
                password: this.data.meetingPassword || "",
                video_on: i.bValid(this.data.videoOn) ? this.data.videoOn ? "1" : "0" : "1",
                audio_on: i.bValid(this.data.audioOn) ? this.data.audioOn ? "1" : "0" : "1",
                phone: p.getPhoneNum() || "",
                sign_type: g.constants.SignType.UseTRTC
            } : (T.error("[getJoinParams]meetingInfo is invalid"), null)
        },
        makeSureMicGranted: function() {
            var e = l.getLastQueryMeetingInfo(),
                t = e && e.meetingCode || "";
            return new Promise((function(e) {
                h.checkAccessState((function() {
                    p.getMicrophoneAccessState() === M.Permitted ? (d.report("mp_grant_mic_to_enjoy", {
                        A76: t,
                        code: "0"
                    }), e("Y")) : p.getMicrophoneAccessState() === M.AskedButDenied ? wx.showModal({
                        content: "您需要授权麦克风的使用权限，方可更好地体验会议",
                        confirmText: "前往设置",
                        confirmColor: "#006FFF",
                        showCancel: !0,
                        cancelText: "暂不入会",
                        success: function(n) {
                            n.confirm ? (d.report("mp_grant_mic_to_enjoy", {
                                A76: t,
                                code: "1"
                            }), wx.openSetting({
                                success: function(n) {
                                    h.setCameraAccessState(!0 === n.authSetting["scope.camera"] ? M.Permitted : M.AskedButDenied), h.setMicrophoneAccessState(!0 === n.authSetting["scope.record"] ? M.Permitted : M.AskedButDenied), p.getMicrophoneAccessState() === M.Permitted ? (T.info("user has gone to settings and granted us to use his mic"), d.report("mp_grant_mic_to_enjoy", {
                                        A76: t,
                                        code: "2"
                                    }), e("Y")) : (T.warn("user has gone to settings but dennyed us to use his mic"), d.report("mp_grant_mic_to_enjoy", {
                                        A76: t,
                                        code: "3"
                                    }), e("N"))
                                },
                                fail: function(t) {
                                    wx.showToast({
                                        icon: "none",
                                        title: "权限设置出错"
                                    }), T.error("wx api wx.openSetting failed: ".concat(JSON.stringify(t))), d.reportError(100310), e("N")
                                }
                            })) : n.cancel && (T.warn("user did not want to go to settings page"), d.report("mp_grant_mic_to_enjoy", {
                                A76: t,
                                code: "4"
                            }), e("N"))
                        },
                        fail: function(t) {
                            var n = "showModal for settings failed: ".concat(JSON.stringify(t));
                            T.error(n), d.reportError(100317), e("N")
                        }
                    }) : wx.authorize({
                        scope: "scope.record",
                        success: function() {
                            T.info("user granted us to use his mic"), d.report("mp_grant_mic_to_enjoy", {
                                A76: t,
                                code: "5"
                            }), h.setMicrophoneAccessState(M.Permitted), e("Y")
                        },
                        fail: function(n) {
                            T.warn("user dennyed us to use his mic, ".concat(JSON.stringify(n.errMsg))), d.report("mp_grant_mic_to_enjoy", {
                                A76: t,
                                code: "6"
                            }), h.setMicrophoneAccessState(M.AskedButDenied), d.reportError(100314), e("N")
                        }
                    })
                }), (function(n) {
                    T.error("checkAccessState failed: ".concat(JSON.stringify(n), ". Just regard it as passed.")), d.report("mp_grant_mic_to_enjoy", {
                        A76: t,
                        code: "7"
                    }), e("Y")
                }))
            }))
        },
        joinByMp: function() {
            var e = this;
            l.setLayoutMode(C.defaultLayout), this.joinStartTime = (new Date).getTime(), this.data.isJoining ? T.warn("joinByMp ignored because joining is already on the way...") : (T.info("join meeting started"), d.report("e#join_meeting#join_meeting#click"), this.setData({
                isPasswordError: !1,
                isJoining: !0
            }), g.isLoggedIn() ? this.queryMeetingInfo() : (T.warn("join meeting started but not logged in, login first..."), this.makeXMPPLogin().then((function() {
                e.queryMeetingInfo()
            })).catch((function(t) {
                T.warn("login in joining phase failed: ".concat(t)), e.setData({
                    isJoining: !1
                }), wx.showToast({
                    title: t || "加入会议失败，请重试",
                    icon: "none"
                })
            }))))
        },
        isMicGrantStatusOK: function() {
            var n = this;
            return t(e().mark((function t() {
                var o;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = "N", e.prev = 1, e.next = 4, n.makeSureMicGranted();
                        case 4:
                            o = e.sent, e.next = 10;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(1), T.error(e.t0, "makeSureMicGranted");
                        case 10:
                            return e.abrupt("return", "Y" === o);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [1, 7]
                ])
            })))()
        },
        changeJoinNameToLastTimeUsed: function() {
            for (var e = !1, t = 0, n = w.list.length; t < n; t++)
                if (w.list[t].code === this.data.meetingCode) {
                    var o = w.list[t].nickname;
                    o ? console.log("正在查询的这个会议号存在于历史缓存中，取当时的昵称作为此次入会昵称: ", o) : (console.warn("会议号", this.data.meetingCode, "之前没有保存入会昵称，使用微信昵称"), o = this.getNickName()), this.setData({
                        nickName: i.truncateText(o)
                    }), e = !0;
                    break
                }
            e || this.setData({
                nickName: i.truncateText(this.getNickName())
            })
        },
        queryMeetingInfo: function(e) {
            if (e || (e = this.data.meetingCode), !i.isMeetingCodeValid(e, b.MEETING_CODE_MAX_LEN)) {
                return wx.showToast({
                    icon: "none",
                    title: "查询会议信息失败，会议号格式不正确"
                }), T.warn("query meeting failed because code(".concat(e, ") is invalid.")), null
            }
            setTimeout((function() {
                g.preMeetingService.internalQueryMeetingItemList({
                    meeting_code: e,
                    purpose_type: 2
                })
            }), 200)
        },
        onMeetingInfoGot: function(n, o) {
            var a = this;
            return t(e().mark((function t() {
                var r, s, c, u, m, h, f, v, _, C, k, M, w;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c = o, u = {
                                    needPassword: !1,
                                    meetingPassword: "",
                                    meetingID: ""
                                }, m = !1, !n) {
                                e.next = 44;
                                break
                            }
                            if (!(c.meeting_item_list.length > 0)) {
                                e.next = 39;
                                break
                            }
                            if (h = l.getLastQueryMeetingInfo(), !a.readyToFillHisCode) {
                                e.next = 18;
                                break
                            }
                            if (console.log("这次查询是因为预查询历史会议引起"), a.readyToFillHisCode = !1, 2 === h.meetingState) {
                                e.next = 14;
                                break
                            }
                            return T.info("会议不是进行中(2)，不填充. 当前状态:".concat(h.meetingState)), a.enableJoiningBtn(), e.abrupt("return");
                        case 14:
                            m = !0, T.info("会议进行中，填充此会议号"), u.meetingCode = h.getPublicMeetingCode(), u.meetingCodeFormatted = h.getMeetingCodeToShow();
                        case 18:
                            u.needPassword = h.hasPwd, u.meetingID = h.meetingID, f = "", e.t0 = h.meetingState, e.next = e.t0 === S.CANCELLED ? 24 : e.t0 === S.DELETED ? 26 : e.t0 === S.RECYCLED ? 28 : 30;
                            break;
                        case 24:
                            return f = "会议已取消", e.abrupt("break", 30);
                        case 26:
                            return f = "会议已结束", e.abrupt("break", 30);
                        case 28:
                            return f = "会议已回收", e.abrupt("break", 30);
                        case 30:
                            v = h.meetingLockSettings || {}, _ = v.meeting_lock, 1 === (void 0 === _ ? 0 : _) && (f = "会议已锁定，如需加入请联系主持人"), C = h.loginUsersOnly, 2 === (k = void 0 === C ? 0 : C) && (f = "13416", u.needPassword = !1), 3 === k && (f = "13417", u.needPassword = !1), u.errmsg_MeetingCodeErrorMsg = f, h.securityVerifyType && (u.securityVerifyType = Number(h.securityVerifyType)), e.next = 42;
                            break;
                        case 39:
                            u.errmsg_MeetingCodeErrorMsg = c && c.msg ? c.msg : "未查到此会议号信息", T.info("empty ".concat(u.errmsg_MeetingCodeErrorMsg), "query-meeting"), d.reportError(100303);
                        case 42:
                            e.next = 50;
                            break;
                        case 44:
                            a.data.cover && wx.hideLoading(), T.warn("query meeting code ".concat(a.data.meetingCode, " failed.\n        ").concat(n, ", ").concat(JSON.stringify(c)), "query-meeting"), null !== n && null !== c || (c = {
                                msg: "查询超时，请重试"
                            }, d.reportError(100304)), u.errmsg_MeetingCodeErrorMsg = c && c.msg ? c.msg : "查询会议信息失败", u.cover = !1, g.isLoggedIn() || (u.showExit = !0, u.logoutReason = "当前设备已断开连接，是否重新登录？", d.reportError(100305));
                        case 50:
                            if (!u.errmsg_MeetingCodeErrorMsg) {
                                e.next = 59;
                                break
                            }
                            if (a.setData(u), !a.readyToFillHisCode) {
                                e.next = 56;
                                break
                            }
                            return T.warn("这次查询是因为预查询历史会议引起，会议查询失败，不提示"), a.readyToFillHisCode = !1, e.abrupt("return");
                        case 56:
                            return "13416" === u.errmsg_MeetingCodeErrorMsg ? a.openOnlyEnterpriseUserCanJoinDialog() : "13417" === u.errmsg_MeetingCodeErrorMsg ? a.openOnlyInviteUserCanJoinDialog() : i.showWXToast(u.errmsg_MeetingCodeErrorMsg), a.enableJoiningBtn(), e.abrupt("return");
                        case 59:
                            if (console.log("跨境会议弹窗 securityVerifyType: ", u.securityVerifyType), m || 0 == (1 & Number(u.securityVerifyType))) {
                                e.next = 69;
                                break
                            }
                            return e.next = 63, a.openOverseaConfirmDialog();
                        case 63:
                            return M = e.sent, e.next = 66, g.preMeetingService.sendSecurityVerifyResult(1, {
                                meeting_id: u.meetingID,
                                agree: M ? 1 : 0,
                                meeting_code: a.data.meetingCode,
                                nickname: a.data.nickName
                            }).catch((function(e) {
                                console.log(e)
                            }));
                        case 66:
                            if (M) {
                                e.next = 69;
                                break
                            }
                            return a.enableJoiningBtn(), e.abrupt("return");
                        case 69:
                            if (1 !== l.getLastQueryMeetingInfo().needEnroll && !E.includes(null === (r = c) || void 0 === r || null === (s = r.meeting_item_list[0]) || void 0 === s ? void 0 : s.enroll_status)) {
                                e.next = 76;
                                break
                            }
                            return p.setSignupNickName(a.data.nickName), a.openGoToSignupDialog(), a.data.cover && wx.hideLoading(), a.setData({
                                isJoining: !1,
                                cover: !1
                            }), e.abrupt("return");
                        case 76:
                            if (w = a.checkDefaultNicknameIsInvalid(), !u.needPassword) {
                                e.next = 87;
                                break
                            }
                            console.log("需要密码，显示密码弹窗"), a.isFastJoin && A && !!A.pwd && (console.log("初次加载带了密码"), u.meetingPassword = A.pwd), u.cover = !1, a.data.cover && wx.hideLoading(), a.setData(u), a.fastJoinDialog.showDialog(a.isFastJoin), e.next = 94;
                            break;
                        case 87:
                            if (console.log("不需要密码，开始进会"), a.setData(u), !a.isFastJoin || !w || a.data.hasOpenNicknameDialog) {
                                e.next = 93;
                                break
                            }
                            return a.openNicknameDialog(), a.setData({
                                isJoining: !1,
                                cover: !1,
                                nickName: "",
                                hasOpenNicknameDialog: !0
                            }), e.abrupt("return");
                        case 93:
                            m ? console.log("历史会议号ok，但是不要自动进会") : a.joinMeeting();
                        case 94:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        onJoinMeetingSucceed: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            wx.navigateTo({
                                url: "../../sub-inMeeting/in-meeting/in-meeting",
                                success: function() {
                                    var e;
                                    T.info("\n          join as: ".concat(n.data.nickName, "\n          audio: ").concat(n.data.audioOn ? "on" : "off", "\n          speaker: ").concat(n.data.speakerOn ? "on" : "off", "\n          video: ").concat(n.data.videoOn ? "on" : "off", "\n        ")), null !== (e = p.getWXUserInfo()) && void 0 !== e && e.nickName || h.updateWXUserInfo({
                                        nickName: n.data.nickName
                                    })
                                },
                                fail: function(e) {
                                    console.error("入会跳转失败: ", e)
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        onMeetingCodeInput: function(e) {
            if (m.isAndroid() && this.clearCodeClicked) this.clearCodeClicked = !1;
            else {
                var t = e.detail.value.replace(/[^\d]/g, "");
                if (b.MEETING_CODE_MAX_LEN < t.length && (t = t.substring(0, b.MEETING_CODE_MAX_LEN), T.warn("got code len > ".concat(b.MEETING_CODE_MAX_LEN, ", cut to: ").concat(t))), this.data.meetingCode.length === b.MEETING_CODE_MAX_LEN && this.data.meetingCode === t) return this.setData({
                    meetingCodeFormatted: this.data.meetingCodeFormatted
                }), !1;
                this.setMeetingCode(t)
            }
        },
        setMeetingCode: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = "";
            n = t ? i.maskMeetingCode(e) : i.getMeetingCodeFormatted(e), this.setData({
                meetingCode: e,
                meetingCodeFormatted: n
            })
        },
        abortFastJoin: function() {
            console.warn("取消自动入会"), this.enableJoiningBtn(), this.isFastJoin = !1
        },
        startFastJoin: function() {
            this.joinMeeting()
        },
        nicknameInput: function(e) {
            var t = e.detail.value;
            t.trim() || (t = ""), t = i.truncateText(i.removeEmoji(t)), this.setData({
                nickName: t
            })
        },
        passwordInput: function(e) {
            var t = e.detail.value.replace(/[^\da-zA-Z]/g, "");
            this.setData({
                meetingPassword: t,
                isPasswordError: !1
            })
        },
        setOnLoad: function(e) {
            this.isOnLoadDone = e
        },
        makeXMPPLogin: function() {
            var n = this;
            return t(e().mark((function t() {
                var o;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (console.log("[makeXMPPLogin] try login...current login status: ", g.authService.getLoginState()), !g.isLoggedIn()) {
                                e.next = 4;
                                break
                            }
                            return T.warn("already logged in, should not call me."), e.abrupt("return");
                        case 4:
                            if (!g.isLogging()) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", Promise.reject("still in logging, please do NOT call me so frequently!"));
                        case 6:
                            return e.prev = 6, e.next = 9, h.makeSureCGILogin();
                        case 9:
                            return e.next = 11, n.makeSurePhoneGranted();
                        case 11:
                            e.next = 33;
                            break;
                        case 13:
                            if (e.prev = 13, e.t0 = e.catch(6), o = "", "number" != typeof e.t0) {
                                e.next = 27;
                                break
                            }
                            e.t1 = e.t0, e.next = e.t1 === x || e.t1 === O ? 20 : e.t1 === P ? 22 : 24;
                            break;
                        case 20:
                            return o = "请授权同意获取您的手机号", e.abrupt("break", 25);
                        case 22:
                            return o = "授权手机号失败，请重试", e.abrupt("break", 25);
                        case 24:
                            o = "授权手机号异常，请重试";
                        case 25:
                            e.next = 28;
                            break;
                        case 27:
                            o = "string" == typeof e.t0 ? e.t0 : (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || "unknown";
                        case 28:
                            return T.info("phone grant failed with ".concat(o)), T.reportCls("cls_phone_grant_failed_".concat(o)), n.data.cover && wx.hideLoading(), n.setData({
                                cover: !1
                            }), e.abrupt("return", Promise.reject(o));
                        case 33:
                            return g.xmppLogin(), e.abrupt("return", new Promise((function(e, t) {
                                n.onLoginCallback = function(o, i) {
                                    o ? (T.reportCls("cls_xmpp_login_success"), d.report("mp_login", {
                                        login_type: "xmpp",
                                        ret: "Y"
                                    }), p.setAccountErrorCode(0), p.getPrevSuccMeetingCode() && (T.info("relogin finished, fill previous success meeting code:".concat(p.getPrevSuccMeetingCode())), n.fillPreviousMeetingCode())) : (T.error("xmpp login failed: ".concat(JSON.stringify(i))), n.setData({
                                        showExit: !0,
                                        logoutReason: "登录失败: ".concat(i && i.msg ? i.msg : "系统异常，请稍后再试")
                                    }), i && "AUTHFAIL" === i.code ? (T.reportCls("cls_xmpp_login_fail_N2"), d.report("mp_login", {
                                        login_type: "xmpp",
                                        ret: "N2"
                                    }), h.setXMPPToken(""), h.setPhoneNum("")) : (T.reportCls("cls_xmpp_login_fail_N3"), d.report("mp_login", {
                                        login_type: "xmpp",
                                        ret: "N3"
                                    }))), o ? e("") : t("")
                                }
                            })));
                        case 35:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [6, 13]
                ])
            })))()
        },
        onNicknameInput: function(e) {
            var t = e.detail.value;
            t.trim() || (t = ""), t = i.truncateText(t), this.setData({
                nickName: t
            })
        },
        onVideoChecked: function() {
            var e = this;
            this.videoChecking ? console.warn("video checking...") : (this.videoChecking = !0, T.info("video checked to: ".concat(this.data.videoOn ? "off" : "on")), this.setData({
                videoOn: !this.data.videoOn
            }, (function() {
                e.data.videoOn ? h.checkAccessState((function() {
                    e.videoChecking = !1, p.getCameraAccessState() !== M.Permitted && (p.getCameraAccessState() === M.NeverAsk ? wx.authorize({
                        scope: "scope.camera",
                        success: function() {
                            T.info("allow camera"), h.setCameraAccessState(M.Permitted)
                        },
                        fail: function() {
                            h.setCameraAccessState(M.AskedButDenied), T.warn("deny camera"), e.promptToSettings("摄像头")
                        }
                    }) : e.promptToSettings("摄像头"))
                }), (function() {
                    e.videoChecking = !1
                })) : e.videoChecking = !1
            })), d.report("e#join_meeting#open_camera#click", {
                is_enable: this.data.videoOn ? 1 : 0
            }))
        },
        promptToSettings: function(e) {
            if ("摄像头" == e || "麦克风" == e) {
                var t = "摄像头" == e ? {
                        videoOn: !1
                    } : {
                        audioOn: !1
                    },
                    n = "摄像头" == e && this.data.videoOn || "麦克风" == e && this.data.audioOn;
                this.setData(t);
                var o = this;
                wx.showModal({
                    content: "您需要授权".concat(e, "的使用权限，方可更好地体验会议"),
                    confirmText: "前往设置",
                    confirmColor: "#006FFF",
                    showCancel: !0,
                    cancelText: "取消",
                    success: function(t) {
                        t.confirm ? (console.log("跳转设置..."), wx.openSetting({
                            success: function(t) {
                                if (console.log(t.authSetting), h.setCameraAccessState(!0 === t.authSetting["scope.camera"] ? M.Permitted : M.AskedButDenied), h.setMicrophoneAccessState(!0 === t.authSetting["scope.record"] ? M.Permitted : M.AskedButDenied), ("摄像头" === e ? p.getCameraAccessState() === M.Permitted : p.getMicrophoneAccessState() === M.Permitted) && n) {
                                    var i = "摄像头" === e ? {
                                        videoOn: !0
                                    } : {
                                        audioOn: !0
                                    };
                                    o.setData(i)
                                }
                            },
                            fail: function(e) {
                                wx.showToast({
                                    icon: "none",
                                    title: "权限设置出错"
                                }), T.error("wx api wx.openSetting failed: ".concat(JSON.stringify(e))), d.reportError(100310)
                            }
                        })) : t.cancel && T.warn("user did not want to go to settings page")
                    },
                    fail: function(e) {
                        var t = "showModal for settings failed: ".concat(JSON.stringify(e));
                        T.error(t), d.reportError(100317)
                    }
                })
            } else T.error("device is not valid: ".concat(e))
        },
        onSpeakerChecked: function() {
            this.setData({
                speakerOn: !this.data.speakerOn
            }), d.report("e#join_meeting#open_speaker#click", {
                is_enable: this.data.speakerOn ? 1 : 0
            })
        },
        onAudioChecked: function() {
            var e = this;
            this.audioChecking ? console.warn("audio checking...") : (this.audioChecking = !0, T.info("audio checked to: ".concat(this.data.audioOn ? "off" : "on")), this.setData({
                audioOn: !this.data.audioOn
            }, (function() {
                e.data.audioOn ? h.checkAccessState((function() {
                    e.audioChecking = !1, p.getMicrophoneAccessState() !== M.Permitted && (p.getMicrophoneAccessState() === M.NeverAsk ? wx.authorize({
                        scope: "scope.record",
                        success: function() {
                            T.info("allow microphone"), h.setMicrophoneAccessState(M.Permitted)
                        },
                        fail: function() {
                            h.setMicrophoneAccessState(M.AskedButDenied), T.warn("deny microphone"), e.promptToSettings("麦克风")
                        }
                    }) : e.promptToSettings("麦克风"))
                }), (function() {
                    e.audioChecking = !1
                })) : e.audioChecking = !1
            })), d.report("e#join_meeting#open_mic#click", {
                is_enable: this.data.audioOn ? 1 : 0
            }))
        },
        launchSuccess: function() {
            T.info("launch App success!")
        },
        launchError: function(e) {
            T.error("launch App error: ".concat(JSON.stringify(e))), i.showWXToast("启动腾讯会议App失败")
        },
        onHistoryClicked: function() {
            d.report("expand_historical_code_list")
        },
        onCodePicked: function(e) {
            if (!Array.isArray(this.data.historyCodes) || this.data.historyCodes.length <= e.detail.value) T.error("invalid picker index got or the array historyCodes is invalid.\n        historyCodes: ".concat(JSON.stringify(this.data.historyCodes), ", picker index: ").concat(e.detail.value));
            else {
                var t = this.data.historyCodes[e.detail.value];
                d.report("pick_historical_code", {
                    A76: t.code
                }), p.setAutoJoin(!1), this.setData({
                    historyCodeIndex: e.detail.value
                }), this.setMeetingCode(t.code, t.isMasked)
            }
        },
        onCancelPicker: function() {
            d.report("collapse_historical_code_list")
        },
        onClearHistoryCodesClicked: function() {
            w.clear(), this.setData({
                historyCodes: []
            })
        },
        clearCode: function() {
            m.isAndroid() && (this.clearCodeClicked = !0), this.setMeetingCode("")
        },
        clearName: function() {
            this.setData({
                nickName: ""
            })
        },
        clearPwd: function() {
            this.setData({
                meetingPassword: ""
            })
        },
        tapInput: function() {
            this.makeSurePhoneGranted()
        },
        onFocus: function(e) {
            this.setData({
                focusArea: e.currentTarget.id
            })
        },
        onBlur: function() {
            this.setData({
                focusArea: ""
            })
        },
        onTouchEyeStart: function() {
            this.setData({
                isEyeOn: !0,
                meetingPassword: this.data.meetingPassword
            })
        },
        onTouchEyeEnd: function() {
            this.setData({
                isEyeOn: !1,
                meetingPassword: this.data.meetingPassword
            })
        },
        sliderMinCachechange: function(e) {
            b.minCache = e.detail.value, this.setData({
                minCache: b.minCache
            })
        },
        sliderMaxCachechange: function(e) {
            b.maxCache = e.detail.value, this.setData({
                maxCache: b.maxCache
            })
        },
        sliderMinBitratechange: function(e) {
            b.minBitrate = e.detail.value, this.setData({
                minBitrate: b.minBitrate
            })
        },
        sliderMaxBitratechange: function(e) {
            b.maxBitrate = e.detail.value, this.setData({
                maxBitrate: b.maxBitrate
            })
        },
        pusherOrientationChange: function(e) {
            b.pusherOrientation = e.detail.value
        },
        isSupportSmallVideoChange: function(e) {
            b.isSupportSmallVideo = 1 === parseInt(e.detail.value, 10), this.setData({
                isSupportSmallVideo: b.isSupportSmallVideo
            })
        },
        enableLivePlayerDebugChange: function(e) {
            var t = 1 === parseInt(e.detail.value, 10);
            m.setIsEnableNetStatus(t), this.setData({
                enableLivePlayerDebug: t
            })
        },
        trtcEnvChange: function(e) {
            b.trtcEnv = e.detail.value, this.setData({
                trtcEnv: b.trtcEnv
            })
        },
        cutChanged: function(e) {
            b.isContain = 0 === parseInt(e.detail.value, 10), this.setData({
                isContain: b.isContain
            })
        },
        smoothVOIPChange: function(e) {
            m.setIsSupportSmoothVOIP(1 === parseInt(e.detail.value, 10)), this.setData({
                isSupportSmoothVOIP: m.getIsSupportSmoothVOIP()
            })
        },
        pusherBkgmuteChange: function(e) {
            b.backgroundMute = "mute" === e.detail.value
        },
        showGrantToast: function() {
            wx.showToast({
                title: this.data.MSG_GRANT_TOAST_TEXT,
                icon: "none",
                duration: 3e3
            })
        },
        getPhoneNumber: function(e) {
            if ("getPhoneNumber:ok" === e.detail.errMsg) {
                T.info("phone granted");
                var t = e.detail,
                    n = t.encryptedData,
                    o = t.iv;
                n && o || T.error("fatal error: phone number from wx is empty. detail: ".concat(JSON.stringify(e))), "function" == typeof this.phoneGranted && this.phoneGranted(n, o)
            } else T.warn("phone refused"), "function" == typeof this.phoneRefused && this.phoneRefused()
        },
        onCloseGrantPhoneTapped: function() {
            "function" == typeof this.phoneGrantCancelled && this.phoneGrantCancelled()
        },
        changeAgree: function(e) {
            var t = !!e.detail.value.length;
            this.setData({
                isAgrees: t,
                isGrantBtnDisabled: !t
            })
        },
        onGrantProtocol1Tapped: function() {
            var e = i.getQueryString({
                url: b.WeMeetUsageRules
            });
            wx.navigateTo({
                url: "../../sub-web/web/web".concat(e)
            })
        },
        onGrantProtocol2Tapped: function() {
            var e = i.getQueryString({
                url: b.WeMeetPrivacy
            });
            wx.navigateTo({
                url: "../../sub-web/web/web".concat(e)
            })
        },
        onShortTokenInput: function(e) {
            var t = e.detail.value.replace(/\s/g, "");
            this.setData({
                fvToken: t
            })
        },
        onInstanceIDInput: function(e) {
            var t = e.detail.value.replace(/\s/g, "");
            this.setData({
                fvI: t
            })
        },
        onBusinessTypeInput: function(e) {
            var t = e.detail.value.replace(/\s/g, "");
            this.setData({
                fvB: t
            })
        },
        goFaceVerify: function() {
            var e = (this.data.fvToken || "").replace(/\s/g, ""),
                t = this.data.fvI || "-1",
                n = this.data.fvB || "";
            if (e) {
                var o = "scene=".concat(encodeURIComponent("t=".concat(e, "&i=").concat(t, "&b=").concat(n)));
                wx.redirectTo({
                    url: "../../sub-verify/face-verify/face-verify?".concat(o)
                })
            } else wx.showModal({
                content: "需要填写short token",
                showCancel: !1
            })
        },
        gotoDetailPage: function() {
            wx.redirectTo({
                url: "../../sub-detail/detail/detail?m=".concat(this.data.meetingCode, "&f=2")
            })
        },
        clearXmppTokenExp: function() {
            T.warn("测试用：清空xmppToken以模拟xmppToken失效"), h.setXMPPToken("")
        },
        onUserDataInput: function(e) {
            this.setData({
                userData: e.detail.value
            })
        },
        onComesFromH5: function() {
            var e = "TestMedical",
                t = this.data.meetingCode || "",
                n = this.data.meetingPassword || "",
                o = {
                    ver: "1.0",
                    userData: this.data.userData || ""
                },
                i = a.encode(JSON.stringify(o)),
                r = "/pages/index/index?chn=".concat(e, "&code=").concat(t, "&pwd=").concat(n, "&customerData=").concat(i),
                s = "模拟药企跳转小程序的参数信息：\n      chn = ".concat(e, ",\n      code = ").concat(t, ",\n      pwd = ").concat(n, ',\n      customerData = {\n        ver: 1.0,\n        userData: "').concat(o.userData, '",\n      },\n\n      最终path = ').concat(r, "\n    ");
            T.info(s), console.info(s), m.setCustomerData(i), wx.reLaunch({
                url: r
            })
        },
        clearABTestCache: function() {
            wx.removeStorageSync("1251_default_expHitMap"), wx.removeStorageSync("_noqb_guid")
        },
        openTDE: function() {
            wx.navigateTo({
                url: "/pages/sub-web/web/web?url=".concat(encodeURIComponent("https://meeting.tencent.com/v2/tde-proxy"))
            })
        }
    });
});
require("pages/sub-preMeeting/join-meeting/join-meeting.js");
__wxRoute = 'pages/sub-preMeeting/waiting-room/waiting-room';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-preMeeting/waiting-room/waiting-room.js';
define("pages/sub-preMeeting/waiting-room/waiting-room.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../utils/util.js"),
        i = require("../../../actions/MeetingAction"),
        o = require("../../../stores/MeetingStore"),
        a = require("../../../stores/UserStore"),
        r = require("../../../actions/UserAction"),
        s = require("../../../stores/AppStore"),
        c = require("../../../constants/AppType"),
        g = require("../../../clients/BeaconClient"),
        d = require("../../../clients/WemeetClient"),
        u = require("../../../constants/UserType"),
        m = require("../../../constants/MeetingType"),
        l = (require("../../../utils/base64").Base64, require("../../../utils/meetingTime.js")),
        h = require("../../../actions/AppAction"),
        f = require("../../../constants/MultMediaState"),
        p = f.MeetingState,
        w = f.AccessState,
        v = new(require("../../../utils/logger.js"))({
            pageName: "waiting-room",
            aegisLogEnable: !0,
            wxLogEnable: !0
        }),
        S = require("../../../configs/MsgCfgWaitingRoom"),
        _ = require("../../../configs/MsgCfgInMeeting"),
        k = 0;
    Page({
        data: {
            navbarH: 40,
            strMeetingCode: "000 000 000",
            nickName: "",
            meetingPassword: "",
            meetingPasswordToJoin: "",
            audioOn: !1,
            speakerOn: !1,
            videoOn: !1,
            isHostInMeeting: !1,
            canRenaming: !1,
            subject: "",
            beginTime: "",
            isPasswordError: !1,
            hideMeetingCodeAndPassword: !0,
            showBackArrow: !0,
            MSG_MEETING_PWD: "会议密码",
            MSG_MEETING_SUBJECT: "会议主题",
            MSG_MEETING_BEGINNING: "开始时间",
            MSG_MEETING_NICKNAME: "参会姓名",
            MSG_MEETING_OPTIONS: "入会选项",
            MSG_AUDIO: "开启麦克风",
            MSG_SPEAKER: "开启扬声器",
            MSG_VIDEO: "开启摄像头",
            MSG_HOST_IS_IN_MEETING: "请稍等，主持人即将邀请您入会",
            MSG_HOST_IS_NOT_IN_MEETING: "会议未开始，等待主持人进入",
            MSG_PWD_DIALOG_TITLE: "入会密码",
            MSG_WEMEETING: "腾讯会议",
            MSG_NAV_TITLE: "活动详情"
        },
        onLoad: function() {
            if (v.info("onLoad"), k = +new Date, s.getIsSupportDevice()) {
                if (!this.init()) return v.error("init failed, prompt a dialog to leave meeting"), this.setData({
                    showBackArrow: !1
                }), void this.openInitFailedDialog();
                o.onceEventListener(this.onMeetingStoreChange), a.onceEventListener(this.onUserStoreChange), s.onceEventListener(this.onAppStoreChange)
            } else wx.redirectTo({
                url: "../../index/index"
            })
        },
        init: function() {
            if (h.pageExposed("waiting-room"), g.report("e#waitingroom#all#exposure"), this.navbar = this.selectComponent("#navbar"), this.fastJoinDialog = this.selectComponent("#fastJoinDialogComponent"), this.msgDialog = this.selectComponent("#message-dialog").component, this.fullMsgView = this.selectComponent("#full-msg-view").component, !this.msgDialog) return g.assertReport({
                pageName: "waiting-room",
                errcod: "100602",
                errmsg: "msgDialog returned is null from API selectComponent"
            }), !1;
            if (!this.navbar) return g.assertReport({
                pageName: "waiting-room",
                errcod: "100603",
                errmsg: "navbar returned is null from API selectComponent"
            }), !1;
            if (i.isInvalidLoad("waiting-room")) return v.warn("navigating back because invalid load..."), n.navigateBack(), !1;
            if (!i.getJoinRespMeta()) return v.error("JoinMeetingRespMeta is invalid"), g.assertReport({
                pageName: "waiting-room",
                errcod: "100604",
                errmsg: "JoinMeetingRespMeta is null"
            }), !1;
            var e = this.isHostInMeeting(),
                t = o.getLastQueryMeetingInfo(),
                r = o.getJoinParam();
            return this.setData({
                strMeetingCode: n.getMeetingCodeFormatted(t.getPublicMeetingCode()),
                nickName: r.nickname,
                meetingPassword: i.getJoinRespMeta().metaData.pwd || "",
                meetingPasswordToJoin: i.getJoinRespMeta().metaData.pwd || "",
                audioOn: i.getJoinRespMeta().settings.audioOn,
                speakerOn: i.getJoinRespMeta().settings.speakerOn,
                videoOn: i.getJoinRespMeta().settings.videoOn,
                isHostInMeeting: e,
                canRenaming: d.meetingUserCtrl.getIsAllowRenaming(),
                subject: t.name || "会议主题",
                beginTime: this.formatTime(t.startTime),
                hideMeetingCodeAndPassword: o.getIsHideMeetingCodeAndPassword()
            }), wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#ffffff"
            }), this.keepScreenOnTimer = setInterval((function() {
                n.keepScreenOn()
            }), 2e4), a.getIKnowToKeepInForeground() || s.getIsSupportSmoothVOIP() || this.openKeepInForegroundDialog(), d.meetingUserCtrl.getIsAllowRenaming() && g.report("e#waitingroom#edit_name#exposure", {}, !1), !0
        },
        onAppSwitchToBackground: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return v.info("leave waiting room since user switches to background"), a.setLeaveReason(""), n.leaveByBackArrow = !0, e.next = 5, i.leaveMeeting();
                        case 5:
                            n.navback();
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        onUserStoreChange: function(e, t) {
            var n = (t || {}).data;
            switch (e) {
                case u.XMPP_LOGOUT_ON_POSITIVELY:
                case u.XMPP_LOGOUT_ON_ABNORMAL_NETWORK:
                case u.XMPP_LOGOUT_ON_KICKED_BY_SAME_ACCOUNT:
                case u.XMPP_LOGOUT_ON_ABNORMAL_ACCOUNT:
                case u.XMPP_LOGOUT_ON_OTHERS_SITUATION:
                    this.onLogoutCallBack();
                    break;
                case u.MYSELF_INFO_CHANGE:
                    this.onMyselfInfoChange(n)
            }
        },
        onAppStoreChange: function(e) {
            switch (e) {
                case c.APP_SWITCH_TO_BACKGROUND:
                    this.onAppSwitchToBackground()
            }
        },
        onMeetingStoreChange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.flag,
                i = t.data;
            switch (e) {
                case m.JOIN_MEETING_SUCC:
                case m.JOIN_MEETING_FAIL:
                    this.onJoinMeetingCallBack(n, i);
                    break;
                case m.LEAVE_MEETING_SUCC:
                case m.LEAVE_MEETING_FAIL:
                    this.onLeaveMeetingCallBack(n, i);
                    break;
                case m.QUERY_MEETING_ITEM_LIST_SUCC:
                case m.QUERY_MEETING_ITEM_LIST_FAIL:
                    this.onQueryMeetingItemListCallBack(n, i);
                    break;
                case m.IS_HIDE_MEETING_CODE_AND_PASSWORD_CHANGE:
                    this.setHideMeetingCodeAndPassword(i);
                    break;
                case m.WAITING_USER_STATUS_JOIN_FROM_WAITING_ROOM:
                    this.joinFromWaitingRoom(n, i);
                    break;
                case m.WAITING_USER_STATUS_LEAVE_FROM_WAITING_ROOM:
                    this.leaveFromWaitingRoom(n, i);
                    break;
                case m.WAITING_USER_STATUS_TIMEOUT:
                    this.waitingUserstatusTimeout(n, i);
                    break;
                case m.WAITING_USER_STATUS_BAD_RESPONSE:
                    this.waitingUserstatusBadResponse(n, i);
                    break;
                case m.IS_JOINING_FROM_WAITING_ROOM_CHANGE:
                    this.handleIsJoiningFromWaitingRoomChange(i);
                    break;
                case m.IS_LEAVING_FROM_WAITING_ROOM_CHANGE:
                    this.handleIsLeavingFromWaitingRoomChange(i);
                    break;
                case m.HOST_STATUS_SUCC:
                case m.HOST_STATUS_FAIL:
                    this.onHostStatusCallBack(n, i);
                    break;
                case m.KICKED_OUT_SUCC:
                case m.KICKED_OUT_FAIL:
                    this.onKickedOutCallBack(n, i);
                    break;
                case m.ALLOW_RENAMING_CHANGE:
                    this.onAllowRenamingChange(i);
                    break;
                case m.DIRECTED_PUSH_TOAST:
                    wx.showToast({
                        icon: "none",
                        title: i
                    });
                    break;
                default:
                    console.warn("ATTENTION: MeetingStore's '".concat(e, "' not handled in 'waiting-room' page.\n          fired with args: ").concat(n, ", ").concat(JSON.stringify(i), "\n        "))
            }
        },
        onMyselfInfoChange: function(e) {
            var t = e.mySelfInfo,
                n = e.byHost;
            this.data.nickName !== t.nickname && (this.setData({
                nickName: t.nickname
            }), n && wx.showToast({
                icon: "none",
                title: "主持人修改了您的参会姓名"
            }))
        },
        isHostInMeeting: function() {
            return !i.getJoinRespMeta().roomInfo.host_status || 1 === i.getJoinRespMeta().roomInfo.host_status.status
        },
        formatTime: function(e) {
            String.prototype.padStart || (String.prototype.padStart = function(e, t) {
                var n = e >> 0,
                    i = String(void 0 !== t ? t : " ");
                return this.length > n ? String(this) : ((n -= this.length) > i.length && (i += i.repeat(n / i.length)), i.slice(0, n) + String(this))
            });
            var t = new Date(e),
                n = "".concat(t.getFullYear().toString().padStart(4, "0")),
                i = "".concat((t.getMonth() + 1).toString().padStart(2, "0")),
                o = "".concat(t.getDate().toString().padStart(2, "0")),
                a = "".concat(t.getHours().toString().padStart(2, "0")),
                r = "".concat(t.getMinutes().toString().padStart(2, "0"));
            return "".concat(n, "年").concat(i, "月").concat(o, "日 ").concat(a, ":").concat(r)
        },
        isRenamingPageAtTop: function() {
            var e = getCurrentPages() || [];
            if (e.length < 1) return v.assert("no pages in stack?"), !1;
            var t = e[e.length - 1];
            return t ? "pages/sub-preMeeting/history-names/history-names" === t.route : (v.assert("top page is null"), !1)
        },
        unloadRenamingPage: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n.isRenamingPageAtTop()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.prev = 2, e.next = 5, wx.navigateBack({
                                delta: 1
                            });
                        case 5:
                            e.next = 10;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(2), v.error("unload renaming page failed: ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [2, 7]
                ])
            })))()
        },
        joinFromWaitingRoom: function() {
            var n = this;
            return t(e().mark((function t() {
                var a;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, n.unloadRenamingPage();
                        case 2:
                            i.setIsJoiningFromWaitingRoom(!0), a = o.getLastQueryMeetingInfo(), d.preMeetingService.internalQueryMeetingItemList({
                                meeting_code: a.meetingCode
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        leaveFromWaitingRoom: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, n.unloadRenamingPage();
                        case 2:
                            a.setLeaveReason("主持人已将您从本次会议中移除"), n.onLeaveMeetingCallBack();
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        waitingUserstatusTimeout: function() {
            wx.showToast({
                icon: "none",
                title: "网络超时(-300)"
            })
        },
        waitingUserstatusBadResponse: function() {
            wx.showToast({
                icon: "none",
                title: "发生异常(-301)"
            })
        },
        handleIsJoiningFromWaitingRoomChange: function(e) {
            console.log("handleIsJoiningFromWaitingRoomChange", e)
        },
        handleIsLeavingFromWaitingRoomChange: function(e) {
            console.log("handleIsLeavingFromWaitingRoomChange", e)
        },
        getJoinParam: function() {
            var e = o.getLastQueryMeetingInfo(),
                t = o.getJoinParam();
            return Object.assign(t, {
                meeting_id: e.meetingID,
                meeting_code: e.meetingCode,
                pmi_code: e.pmiCode,
                password: e.hasPwd ? this.data.meetingPassword : "",
                audio_on: this.data.audioOn ? "1" : "0",
                video_on: this.data.videoOn ? "1" : "0",
                nickname: this.data.nickName
            })
        },
        onLeaveMeetingCallBack: function(e, t) {
            this.navback()
        },
        onJoinMeetingCallBack: function(a, r) {
            var s = this;
            return t(e().mark((function t() {
                var c, u, m, h, f, p;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c = o.getLastQueryMeetingInfo(), u = o.getJoinParam(), i.setIsJoiningFromWaitingRoom(!1), i.setJoinMeetingRespMeta(null), m = {
                                    isPasswordError: !1
                                }, a) {
                                e.next = 12;
                                break
                            }
                            return v.warn("join meeting from waiting room failed at ".concat(new Date, ": ").concat(a, ", ").concat(JSON.stringify(r))), r ? "13409" != r.code || r.msg ? "13402" == r.code && (m.isPasswordError = !0) : r.msg = "会议成员人数已达上限" : r = {
                                msg: "入会超时",
                                code: "9999"
                            }, s.setData(m), m.isPasswordError ? (s.fastJoinDialog.showDialog(!1), s.fastJoinDialog.clearDoing()) : n.showWXToast(r.msg || "加入会议失败"), g.report("mp_join_meeting_from_waiting_room", {
                                code: r.code || "100601"
                            }), e.abrupt("return");
                        case 12:
                            if (s.fastJoinDialog.dismissDialog(), wx.showLoading({
                                    mask: !0,
                                    title: "正在进入..."
                                }), h = r.enter_room_type, f = d.getRoomTypeName(h), p = (new Date).getTime() - s.joinStartTime, v.info("join ".concat(f, " cost ").concat(p, "ms succeed at ").concat(new Date)), g.report("mp_join_meeting_from_waiting_room", {
                                    code: "0",
                                    roomType: h,
                                    timeCost: p
                                }), i.setJoinMeetingRespMeta({
                                    roomInfo: r,
                                    settings: {
                                        videoOn: s.data.videoOn,
                                        audioOn: s.data.audioOn,
                                        speakerOn: s.data.speakerOn
                                    },
                                    metaData: {
                                        pwd: u.password,
                                        nickname: u.nickname,
                                        watermark_content: r.watermark_content || ""
                                    }
                                }), h !== d.constants.RoomType.WAITING_ROOM) {
                                e.next = 25;
                                break
                            }
                            return wx.hideLoading(), n.showWXToast("请稍等，主持人即将邀请您入会"), v.warn("等候室入会，但又是等候室，继续等"), e.abrupt("return");
                        case 25:
                            l.start(), d.meetingUserCtrl.queryMeetingSettings(), d.preMeetingService.queryMeetingPayInfo(c.meetingID), d.meetingUserCtrl.queryCloudRecordState(), s.onJoinMeetingSucceed();
                        case 30:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        onJoinMeetingSucceed: function() {
            var e = this;
            this.invited = !0, v.info("ready to call wx.redirectTo"), this.isRedirectingToInMeeting ? v.warn("redirect to in meeting not finished, current ignored") : (this.isRedirectingToInMeeting = !0, wx.redirectTo({
                url: "../../sub-inMeeting/in-meeting/in-meeting",
                success: function() {
                    var t;
                    v.info("join meeting from waiting room succeed,\n          audio: ".concat(e.data.audioOn ? "on" : "off", ",\n          speaker: ").concat(e.data.speakerOn ? "on" : "off", ",\n          video: ").concat(e.data.videoOn ? "on" : "off", ",\n        ")), null !== (t = a.getWXUserInfo()) && void 0 !== t && t.nickName || r.updateWXUserInfo({
                        nickName: a.getDefaultNickName()
                    })
                },
                fail: function(e) {
                    v.error("入会跳转失败: ", e)
                },
                complete: function() {
                    e.isRedirectingToInMeeting = !1, v.info("redirect to in-meeting completed"), wx.hideLoading()
                }
            }))
        },
        onQueryMeetingItemListCallBack: function(e, t) {
            var a = "",
                r = o.getLastQueryMeetingInfo(),
                s = o.getJoinParam();
            if (e)
                if (t.meeting_item_list.length > 0) {
                    switch (r.meetingState) {
                        case p.CANCELLED:
                            a = "会议已取消";
                            break;
                        case p.DELETED:
                            a = "会议已结束";
                            break;
                        case p.RECYCLED:
                            a = "会议已回收"
                    }!a && r.meetingLock && v.warn("starts to join from waiting room(Warning: room is locked, but wont prevent me from joining!)")
                } else a = t && t.msg ? t.msg : "未查到此会议号信息";
            else a = t && t.msg ? t.msg : "入会超时";
            if (a) return i.setIsJoiningFromWaitingRoom(!1), v.warn("join meeting room failed in waiting room(at query meeting stage): ".concat(a)), void n.showWXToast(a);
            r.hasPwd && !s.password ? (v.warn("恰好等候状态时，创建者为会议增加了密码，弹窗输入"), this.fastJoinDialog.showDialog(!1)) : this.joinMeeting()
        },
        onHostStatusCallBack: function(e, t) {
            e && null !== t ? this.setData({
                isHostInMeeting: 1 === t.status
            }) : v.error("onHostStatusCallBack failed: ".concat(e, ", ").concat(JSON.stringify(t)))
        },
        onLogoutCallBack: function() {
            this.navback()
        },
        onKickedOutCallBack: function(e, t) {
            v.info("[new ver] kicked out, route back"), this.navback()
        },
        onAllowRenamingChange: function(i) {
            var o = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (i || !o.isRenamingPageAtTop()) {
                                e.next = 4;
                                break
                            }
                            return e.next = 3, o.unloadRenamingPage();
                        case 3:
                            n.showWXToast("主持人已关闭改名权限");
                        case 4:
                            o.setData({
                                canRenaming: i
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        setHideMeetingCodeAndPassword: function(e) {
            this.setData({
                hideMeetingCodeAndPassword: e
            })
        },
        joinMeeting: function() {
            var e = this.getJoinParam();
            i.setJoinParam(e), this.joinStartTime = (new Date).getTime(), d.joinMeeting(e)
        },
        openKeepInForegroundDialog: function() {
            var e = _.keepInForegroundDialog;
            e.okBtn.onClick = this.onNativeDialogIKnowBtnClicked, this.msgDialog.open(e)
        },
        onNativeDialogIKnowBtnClicked: function() {
            a.setIKnowToKeepInForeground(!0)
        },
        openLeaveWaitingRoomConfirmDialog: function() {
            var e = S.confirmLeaveWaitingRoom;
            e.okBtn.onClick = this.onNativeDialogLeaveClicked, this.msgDialog.open(e)
        },
        openInitFailedDialog: function() {
            var e = S.initFailed;
            e.okBtn.onClick = this.onNativeDialogLeaveClicked, this.msgDialog.open(e)
        },
        onNativeDialogLeaveClicked: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return g.report("e#waitingroom#leave#click"), a.setLeaveReason(""), n.leaveByBackArrow = !0, e.next = 5, i.leaveMeeting();
                        case 5:
                            n.navback();
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        handleTapMeetingSubject: function() {
            var e = this.data.subject;
            this.fullMsgView.show(e)
        },
        handlePencilClicked: function() {
            g.report("e#waitingroom#edit_name#click"), wx.navigateTo({
                url: "../history-names/history-names?nickname=".concat(encodeURIComponent(this.data.nickName))
            })
        },
        abortFastJoin: function() {
            console.warn("取消自动入会"), this.fastJoinDialog.clearDoing()
        },
        startFastJoin: function(e) {
            var t = this.getJoinParam();
            t.password = e.detail.password, i.setJoinParam(t), this.joinStartTime = (new Date).getTime(), d.joinMeeting(t)
        },
        onReady: function() {
            v.info("onReady");
            try {
                this.navbar && this.navbar.fixNavbar()
            } catch (e) {
                v.error("fix navbar error ".concat(e.message))
            }
        },
        onShow: function() {
            v.info("onShow")
        },
        onHide: function() {
            v.info("onHide")
        },
        onUnload: function() {
            if (v.info("onUnload"), 0 < k) {
                var e = +new Date - k;
                0 < e && g.report("e#waitingroom_duration", {
                    duration: e
                })
            }
            o.removeEventListener(this.onMeetingStoreChange), a.removeEventListener(this.onUserStoreChange), s.removeEventListener(this.onAppStoreChange), this.keepScreenOnTimer && clearInterval(this.keepScreenOnTimer), this.invited || a.getLeaveReason() || this.leaveByBackArrow || (v.warn("slides toward right to leave waiting room"), i.leaveMeeting())
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onBackClicked: function() {
            this.openLeaveWaitingRoomConfirmDialog()
        },
        onNavbarHeightGot: function(e) {
            v.info("navbar set to: ".concat(e.detail.navbarH)), this.setData({
                navbarH: e.detail.navbarH
            })
        },
        navback: function() {
            wx.navigateBack({
                delta: 1
            })
        },
        onSafetyShieldTapped: function() {
            n.showWXToast("会议已加密保护")
        },
        getEventHandler: function(e) {
            return this[e]
        },
        onVideoChecked: function() {
            var e = this;
            this.videoChecking || (this.videoChecking = !0, this.setData({
                videoOn: !this.data.videoOn
            }, (function() {
                g.report("e#waitingroom#camera#click", {
                    switch_state: e.data.videoOn ? 1 : 0
                }), e.data.videoOn ? r.checkAccessState((function() {
                    e.videoChecking = !1, a.getCameraAccessState() !== w.Permitted && (a.getCameraAccessState() === w.NeverAsk ? wx.authorize({
                        scope: "scope.camera",
                        success: function() {
                            v.info("allow camera"), r.setCameraAccessState(w.Permitted)
                        },
                        fail: function() {
                            r.setCameraAccessState(w.AskedButDenied), v.warn("deny camera"), e.promptToSettings("摄像头")
                        }
                    }) : e.promptToSettings("摄像头"))
                }), (function() {
                    e.videoChecking = !1
                })) : e.videoChecking = !1
            })))
        },
        promptToSettings: function(e) {
            if ("摄像头" === e || "麦克风" === e) {
                var t = "摄像头" === e ? {
                        videoOn: !1
                    } : {
                        audioOn: !1
                    },
                    n = "摄像头" === e && this.data.videoOn || "麦克风" === e && this.data.audioOn;
                this.setData(t);
                var i = this;
                wx.showModal({
                    content: "您需要授权".concat(e, "的使用权限，方可更好地体验会议"),
                    confirmText: "前往设置",
                    confirmColor: "#006FFF",
                    showCancel: !0,
                    cancelText: "取消",
                    success: function(t) {
                        t.confirm ? (console.log("跳转设置..."), wx.openSetting({
                            success: function(t) {
                                if (r.setCameraAccessState(!0 === t.authSetting["scope.camera"] ? w.Permitted : w.AskedButDenied), r.setMicrophoneAccessState(!0 === t.authSetting["scope.record"] ? w.Permitted : w.AskedButDenied), ("摄像头" === e ? a.getCameraAccessState() === w.Permitted : a.getMicrophoneAccessState() === w.Permitted) && n) {
                                    var o = "摄像头" === e ? {
                                        videoOn: !0
                                    } : {
                                        audioOn: !0
                                    };
                                    i.setData(o)
                                }
                            },
                            fail: function(e) {
                                wx.showToast({
                                    icon: "none",
                                    title: "权限设置出错"
                                }), v.error("wx api wx.openSetting failed: ".concat(JSON.stringify(e))), g.reportError(100310)
                            }
                        })) : t.cancel && v.warn("user did not want to go to settings page")
                    },
                    fail: function(e) {
                        var t = "showModal for settings failed: ".concat(JSON.stringify(e));
                        v.error(t), g.reportError(100317)
                    }
                })
            } else v.error("device is not valid: ".concat(e))
        },
        onSpeakerChecked: function() {
            this.setData({
                speakerOn: !this.data.speakerOn
            }), g.report("e#waitingroom#speaker#click", {
                switch_state: this.data.speakerOn ? 1 : 0
            })
        },
        onAudioChecked: function() {
            var e = this;
            this.audioChecking || (this.audioChecking = !0, this.setData({
                audioOn: !this.data.audioOn
            }, (function() {
                g.report("e#waitingroom#microphone#click", {
                    switch_state: e.data.audioOn ? 1 : 0
                }), e.data.audioOn ? r.checkAccessState((function() {
                    e.audioChecking = !1, a.getMicrophoneAccessState() !== w.Permitted && (a.getMicrophoneAccessState() === w.NeverAsk ? wx.authorize({
                        scope: "scope.record",
                        success: function() {
                            v.info("allow microphone"), r.setMicrophoneAccessState(w.Permitted)
                        },
                        fail: function() {
                            r.setMicrophoneAccessState(w.AskedButDenied), v.warn("deny microphone"), e.promptToSettings("麦克风")
                        }
                    }) : e.promptToSettings("麦克风"))
                }), (function() {
                    e.audioChecking = !1
                })) : e.audioChecking = !1
            })))
        },
        passwordInput: function(e) {
            var t = e.detail.value.replace(/[^\d]/g, "");
            this.setData({
                meetingPasswordToJoin: t,
                isPasswordError: !1
            })
        },
        clearPwd: function() {
            this.setData({
                meetingPasswordToJoin: ""
            })
        },
        onAddToFavorites: function() {
            v.info('用户点击右上角菜单的"收藏"按钮'), g.report("mp_add_to_favorites", {
                pageName: "waiting-room"
            });
            var e = o.getLastQueryMeetingInfo();
            return i.getShareObject(e)
        }
    });
});
require("pages/sub-preMeeting/waiting-room/waiting-room.js");
__wxRoute = 'pages/sub-preMeeting/history-names/history-names';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-preMeeting/history-names/history-names.js';
define("pages/sub-preMeeting/history-names/history-names.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = u(require("../../../configs/AppConfig")),
        t = u(require("../../../stores/AppStore")),
        n = u(require("../../../actions/MeetingAction")),
        i = u(require("../../../constants/MeetingType")),
        a = u(require("../../../stores/MeetingStore")),
        o = require("../../../utils/util"),
        s = u(require("../../../stores/UserStore")),
        r = u(require("../../../constants/UserType")),
        c = u(require("../../../clients/BeaconClient"));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = new(require("../../../utils/logger.js"))({
        pageName: "history-names",
        aegisLogEnable: !0,
        wxLogEnable: !1
    });
    Page({
        data: {
            nickName: "",
            focusArea: "",
            maxlength: e.default.MAX_LEN_NICKNAME,
            isModifying: !1,
            historyNames: [],
            navbarH: 40
        },
        onLoad: function() {
            a.default.onceEventListener(this.onMeetingStoreChange), s.default.onceEventListener(this.onUserStoreChange), this.setData({
                historyNames: s.default.getHistoryNicknames()
            }), c.default.report("e#waitingroom#recent_name#exposure", {
                name_num: s.default.getHistoryNicknames().length
            }, !1)
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {
            a.default.removeEventListener(this.onMeetingStoreChange), s.default.removeEventListener(this.onUserStoreChange)
        },
        onModifyNicknameClicked: function() {
            this.data.isModifying || (this.setData({
                isModifying: !0
            }), n.default.modifyNickname(this.data.nickName))
        },
        onMeetingStoreChange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.flag,
                a = t.data;
            switch (e !== i.default.NOTIFY_JOIN_AUDIO_MIX_USER_INFO && e !== i.default.NOTIFY_MY_AUDIO_GRIDS_CHANGE && i.default.QUERY_WEBINAR_SUMMARY_SUCC, e) {
                case i.default.MODIFY_USER_INFO_SUCC:
                    this.onModifyUserInfoSucc();
                    break;
                case i.default.MODIFY_USER_INFO_FAIL:
                    this.onModifyUserInfoFail(n, a)
            }
        },
        onUserStoreChange: function(e, t) {
            var n = (t || {}).data;
            switch (e) {
                case r.default.HISTORY_NAMES_CHANGE:
                    this.onHistoryNamesChange(n)
            }
        },
        onHistoryNamesChange: function(e) {
            var t = e.historyNames;
            this.setData({
                historyNames: t
            })
        },
        onModifyUserInfoSucc: function() {
            f.reportCls("cls_modify_nickname_in_waiting_room_success"), c.default.report("e#waitingroom#rename_success#exposure", {}, !1), this.setData({
                isModifying: !1
            }), (0, o.navigateBack)()
        },
        onModifyUserInfoFail: function(e, t) {
            this.setData({
                isModifying: !1
            }), f.warn("modify nick name failed: ".concat(e, ", ").concat(JSON.stringify(t)));
            var n = (null == t ? void 0 : t.code) || -1,
                i = (null == t ? void 0 : t.msg) || "修改失败",
                a = "".concat(i, "(").concat(n, ")");
            (0, o.showWXToast)(a), f.reportCls("cls_modify_nickname_in_waiting_room_fail_".concat(n))
        },
        onNicknameInput: function(e) {
            if (t.default.isAndroid() && this.clearNameClicked) this.clearNameClicked = !1;
            else {
                var n = e.detail.value;
                n.trim() || (n = ""), n = (0, o.truncateText)((0, o.removeEmoji)(n)), this.setData({
                    nickName: n
                })
            }
        },
        onFocus: function(e) {
            this.setData({
                focusArea: e.currentTarget.id
            })
        },
        onBlur: function() {
            this.setData({
                focusArea: ""
            })
        },
        clearName: function() {
            t.default.isAndroid() && (this.clearNameClicked = !0), this.setData({
                nickName: ""
            })
        },
        onHistoryNameClicked: function(e) {
            var t = e.currentTarget.dataset.name;
            this.setData({
                nickName: t
            }), c.default.report("e#waitingroom#recent_name#click"), this.onModifyNicknameClicked()
        },
        onBackClicked: function() {
            (0, o.navigateBack)()
        },
        onNavbarHeightGot: function(e) {
            this.setData({
                navbarH: e.detail.navbarH
            })
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
});
require("pages/sub-preMeeting/history-names/history-names.js");