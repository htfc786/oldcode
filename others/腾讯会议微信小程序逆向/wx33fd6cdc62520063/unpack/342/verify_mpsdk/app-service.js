/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx6 = function(path, global) {
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
        console.warn("WXMLRT_$gwx6:" + m)
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6 || [];

    function gz$gwx6_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_1) return __WXML_GLOBAL__.ops_cached.$gwx6_1
        __WXML_GLOBAL__.ops_cached.$gwx6_1 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'fix-full-page'])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'curPage']
                    ],
                    [1, 1]
                ],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'cmsConfig']
                        ],
                        [3, 'IsHideIndexAlways']
                    ]
                ]
            ])
            Z([
                [9],
                [
                    [9],
                    [
                        [9],
                        [
                            [9],
                            [
                                [10],
                                [
                                    [7],
                                    [3, 'cmsConfig']
                                ]
                            ],
                            [
                                [8], 'index_rule', [
                                    [7],
                                    [3, 'index_rule']
                                ]
                            ]
                        ],
                        [
                            [8], 'show_about_dlg', [
                                [7],
                                [3, 'show_about_dlg']
                            ]
                        ]
                    ],
                    [
                        [8], 'indexChecked', [
                            [7],
                            [3, 'indexChecked']
                        ]
                    ]
                ],
                [
                    [8], 'indexDisableBtn', [
                        [7],
                        [3, 'indexDisableBtn']
                    ]
                ]
            ])
            Z([3, 'verifyIndex'])
            Z([
                [7],
                [3, 'isNotCamera']
            ])
            Z([
                [9],
                [
                    [9],
                    [
                        [10],
                        [
                            [7],
                            [3, 'cmsConfig']
                        ]
                    ],
                    [
                        [10],
                        [
                            [6],
                            [
                                [7],
                                [3, 'cmsConfig']
                            ],
                            [3, 'skipConfig']
                        ]
                    ]
                ],
                [
                    [8], 'curPage', [
                        [7],
                        [3, 'curPage']
                    ]
                ]
            ])
            Z([3, 'navTip'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 2]
            ])
            Z([
                [9],
                [
                    [10],
                    [
                        [7],
                        [3, 'cmsConfig']
                    ]
                ],
                [
                    [8], 'sms', [
                        [7],
                        [3, 'sms']
                    ]
                ]
            ])
            Z([3, 'verifySms'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 3]
            ])
            Z([
                [9],
                [
                    [9],
                    [
                        [10],
                        [
                            [7],
                            [3, 'cmsConfig']
                        ]
                    ],
                    [
                        [8], 'ocr', [
                            [7],
                            [3, 'ocr']
                        ]
                    ]
                ],
                [
                    [8], 'isInfinityDisplay', [
                        [7],
                        [3, 'isInfinityDisplay']
                    ]
                ]
            ])
            Z([3, 'verifyOcr'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 4]
            ])
            Z([
                [9],
                [
                    [9],
                    [
                        [10],
                        [
                            [7],
                            [3, 'cmsConfig']
                        ]
                    ],
                    [
                        [8], 'livingbody', [
                            [7],
                            [3, 'livingbody']
                        ]
                    ]
                ],
                [
                    [8], 'isInfinityDisplay', [
                        [7],
                        [3, 'isInfinityDisplay']
                    ]
                ]
            ])
            Z([3, 'verifyLivingBody'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 5]
            ])
            Z([
                [9],
                [
                    [10],
                    [
                        [7],
                        [3, 'cmsConfig']
                    ]
                ],
                [
                    [8], 'failInfo', [
                        [7],
                        [3, 'failInfo']
                    ]
                ]
            ])
            Z([3, 'verifyFailPage'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 6]
            ])
            Z([
                [10],
                [
                    [7],
                    [3, 'cmsConfig']
                ]
            ])
            Z([3, 'verifySuccessPage'])
            Z([
                [7],
                [3, 'showErrorMsg']
            ])
            Z([
                [9],
                [
                    [10],
                    [
                        [7],
                        [3, 'cmsConfig']
                    ]
                ],
                [
                    [10],
                    [
                        [7],
                        [3, 'err']
                    ]
                ]
            ])
            Z([3, 'error_template'])
            Z([
                [7],
                [3, 'show_auth_panel']
            ])
            Z([
                [9],
                [
                    [10],
                    [
                        [7],
                        [3, 'cmsConfig']
                    ]
                ],
                [
                    [8], 'authInfo', [
                        [7],
                        [3, 'authInfo']
                    ]
                ]
            ])
            Z([3, 'auth_template'])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_1);
        return __WXML_GLOBAL__.ops_cached.$gwx6_1
    }

    function gz$gwx6_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_2) return __WXML_GLOBAL__.ops_cached.$gwx6_2
        __WXML_GLOBAL__.ops_cached.$gwx6_2 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'error_template'])
            Z([3, 'weui-dialog style2 rule'])
            Z([
                [2, '&&'],
                [
                    [2, '!=='],
                    [
                        [7],
                        [3, 'error_msg']
                    ],
                    [1, 'OCR识别失败']
                ],
                [
                    [2, '!=='],
                    [
                        [7],
                        [3, 'error_msg']
                    ],
                    [1, '证件日期识别失败']
                ]
            ])
            Z([
                [2, '=='],
                [
                    [7],
                    [3, 'error_msg']
                ],
                [1, 'OCR识别失败']
            ])
            Z([
                [2, '=='],
                [
                    [7],
                    [3, 'error_msg']
                ],
                [1, '证件日期识别失败']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_2);
        return __WXML_GLOBAL__.ops_cached.$gwx6_2
    }

    function gz$gwx6_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_3) return __WXML_GLOBAL__.ops_cached.$gwx6_3
        __WXML_GLOBAL__.ops_cached.$gwx6_3 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'verifyFailPage'])
            Z([
                [2, '!'],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'failInfo']
                        ],
                        [3, 'Data']
                    ],
                    [3, 'isHideRetry']
                ]
            ])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'livingbodyType']
                ],
                [1, 0]
            ])
            Z([
                [6],
                [
                    [7],
                    [3, 'Common']
                ],
                [3, 'RiskTip']
            ])
            Z([
                [8], 'riskTip', [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'RiskTip']
                ]
            ])
            Z([3, 'riskTip'])
            Z([
                [6],
                [
                    [7],
                    [3, 'failInfo']
                ],
                [3, 'is_modal_showing']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_3);
        return __WXML_GLOBAL__.ops_cached.$gwx6_3
    }

    function gz$gwx6_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_4) return __WXML_GLOBAL__.ops_cached.$gwx6_4
        __WXML_GLOBAL__.ops_cached.$gwx6_4 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'verifyIndex'])
            Z([3, 'index-container'])
            Z([
                [6],
                [
                    [7],
                    [3, 'Common']
                ],
                [3, 'RiskTip']
            ])
            Z([
                [8], 'riskTip', [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'RiskTip']
                ]
            ])
            Z([3, 'riskTip'])
            Z([
                [7],
                [3, 'index_rule']
            ])
            Z([3, 'weui-dialog__bd'])
            Z([3, 'padding:0 0.8em 0.8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999999;'])
            Z([
                [6],
                [
                    [7],
                    [3, 'protocol']
                ],
                [3, 'clientContent']
            ])
            Z([
                [6],
                [
                    [7],
                    [3, 'protocol']
                ],
                [3, 'content']
            ])
            Z([
                [7],
                [3, 'show_about_dlg']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_4);
        return __WXML_GLOBAL__.ops_cached.$gwx6_4
    }

    function gz$gwx6_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_5) return __WXML_GLOBAL__.ops_cached.$gwx6_5
        __WXML_GLOBAL__.ops_cached.$gwx6_5 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'verifyLivingBody'])
            Z([
                [2, '&&'],
                [
                    [6],
                    [
                        [7],
                        [3, 'livingbody']
                    ],
                    [3, 'isShowGuide']
                ],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'livingbody']
                        ],
                        [3, 'isShowCamera']
                    ]
                ]
            ])
            Z([
                [6],
                [
                    [7],
                    [3, 'Common']
                ],
                [3, 'RiskTip']
            ])
            Z([
                [8], 'riskTip', [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'RiskTip']
                ]
            ])
            Z([3, 'riskTip'])
            Z([
                [6],
                [
                    [7],
                    [3, 'livingbody']
                ],
                [3, 'isShowCamera']
            ])
            Z([3, 'position:absolute;top:0;bottom:0;width:100%;'])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'livingbodyType']
                ],
                [1, 0]
            ])
            Z([3, 'ocrCameraError'])
            Z([3, 'bindstop'])
            Z([3, 'front'])
            Z([3, 'off'])
            Z([3, 'livingbody-camera'])
            Z(z[6])
            Z(z[2])
            Z([
                [9],
                [
                    [8], 'riskTip', [
                        [6],
                        [
                            [7],
                            [3, 'Common']
                        ],
                        [3, 'RiskTip']
                    ]
                ],
                [
                    [8], 'isCoverView', [1, true]
                ]
            ])
            Z(z[4])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'livingbodyType']
                ],
                [1, 1]
            ])
            Z(z[8])
            Z(z[9])
            Z(z[10])
            Z(z[11])
            Z(z[12])
            Z(z[2])
            Z(z[15])
            Z(z[4])
            Z(z[8])
            Z(z[9])
            Z(z[10])
            Z(z[11])
            Z(z[12])
            Z(z[2])
            Z(z[15])
            Z(z[4])
            Z([3, 'livingbody-silent-view'])
            Z([
                [6],
                [
                    [7],
                    [3, 'livingbody']
                ],
                [3, 'isPrepare']
            ])
            Z([
                [2, '!'],
                [
                    [6],
                    [
                        [7],
                        [3, 'livingbody']
                    ],
                    [3, 'isPrepare']
                ]
            ])
            Z(z[36])
            Z([
                [2, '&&'],
                [
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'livingbody']
                        ],
                        [3, 'isShowProcess']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'livingbody']
                            ],
                            [3, 'isShowGuide']
                        ]
                    ]
                ],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'livingbody']
                        ],
                        [3, 'isShowCamera']
                    ]
                ]
            ])
            Z(z[2])
            Z(z[3])
            Z(z[4])
            Z([
                [6],
                [
                    [7],
                    [3, 'livingbody']
                ],
                [3, 'isShowDialog']
            ])
            Z([
                [6],
                [
                    [7],
                    [3, 'livingbody']
                ],
                [3, 'showTestVideo']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_5);
        return __WXML_GLOBAL__.ops_cached.$gwx6_5
    }

    function gz$gwx6_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_6) return __WXML_GLOBAL__.ops_cached.$gwx6_6
        __WXML_GLOBAL__.ops_cached.$gwx6_6 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'navTip'])
            Z([
                [2, '||'],
                [
                    [7],
                    [3, 'isJustOcr']
                ],
                [
                    [7],
                    [3, 'isJustSms']
                ]
            ])
            Z([
                [2, '?:'],
                [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'IsWxNative']
                ],
                [1, 'navTipNative'],
                [1, 'navTip']
            ])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'curPage']
                    ],
                    [1, 2]
                ],
                [
                    [7],
                    [3, 'isJustSms']
                ]
            ])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'curPage']
                    ],
                    [1, 3]
                ],
                [
                    [7],
                    [3, 'isJustOcr']
                ]
            ])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 2]
            ])
            Z(z[2])
            Z([
                [2, '!'],
                [
                    [7],
                    [3, 'isHideOcrPage']
                ]
            ])
            Z(z[7])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 3]
            ])
            Z(z[2])
            Z([
                [2, '!'],
                [
                    [7],
                    [3, 'isHideSmsPage']
                ]
            ])
            Z(z[11])
            Z([
                [2, '&&'],
                [
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'curPage']
                        ],
                        [1, 4]
                    ],
                    [
                        [7],
                        [3, 'isHideSmsPage']
                    ]
                ],
                [
                    [7],
                    [3, 'isHideOcrPage']
                ]
            ])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'curPage']
                ],
                [1, 4]
            ])
            Z(z[2])
            Z(z[11])
            Z(z[11])
            Z(z[7])
            Z(z[7])
            Z([
                [2, '&&'],
                [
                    [2, '&&'],
                    [
                        [2, '||'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'curPage']
                            ],
                            [1, 5]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'curPage']
                            ],
                            [1, 6]
                        ]
                    ],
                    [
                        [7],
                        [3, 'isHideSmsPage']
                    ]
                ],
                [
                    [7],
                    [3, 'isHideOcrPage']
                ]
            ])
            Z([
                [2, '||'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'curPage']
                    ],
                    [1, 5]
                ],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'curPage']
                    ],
                    [1, 6]
                ]
            ])
            Z(z[2])
            Z(z[11])
            Z(z[11])
            Z(z[7])
            Z(z[7])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_6);
        return __WXML_GLOBAL__.ops_cached.$gwx6_6
    }

    function gz$gwx6_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_7) return __WXML_GLOBAL__.ops_cached.$gwx6_7
        __WXML_GLOBAL__.ops_cached.$gwx6_7 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'verifyOcr'])
            Z([3, 'verify-gray-container'])
            Z([
                [2, '&&'],
                [
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'page']
                                ],
                                [3, 'ocr']
                            ],
                            [3, 'isManualInput']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'ocr']
                            ],
                            [3, 'isShowTakePhoto']
                        ]
                    ]
                ],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ocr']
                        ],
                        [3, 'isShowResult']
                    ]
                ]
            ])
            Z([
                [6],
                [
                    [7],
                    [3, 'Common']
                ],
                [3, 'RiskTip']
            ])
            Z([
                [8], 'riskTip', [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'RiskTip']
                ]
            ])
            Z([3, 'riskTip'])
            Z([
                [2, '&&'],
                [
                    [6],
                    [
                        [7],
                        [3, 'ocr']
                    ],
                    [3, 'isShowTakePhoto']
                ],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ocr']
                        ],
                        [3, 'isShowResult']
                    ]
                ]
            ])
            Z([3, 'verify-absolute-bg'])
            Z([
                [2, '!'],
                [
                    [6],
                    [
                        [7],
                        [3, 'ocr']
                    ],
                    [3, 'isShowPhotoPreView']
                ]
            ])
            Z(z[7])
            Z(z[3])
            Z([
                [9],
                [
                    [8], 'riskTip', [
                        [6],
                        [
                            [7],
                            [3, 'Common']
                        ],
                        [3, 'RiskTip']
                    ]
                ],
                [
                    [8], 'isCoverView', [1, true]
                ]
            ])
            Z(z[5])
            Z([3, 'ocrCameraError'])
            Z([a, [3, 'verify-ocr-frameArea '],
                [
                    [6],
                    [
                        [7],
                        [3, 'ocr']
                    ],
                    [3, 'isInfinityDisplayOcrMiddle']
                ]
            ])
            Z([3, 'back'])
            Z([3, 'off'])
            Z(z[8])
            Z([
                [2, '&&'],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ocr']
                        ],
                        [3, 'isShowPhotoPreView']
                    ]
                ],
                [
                    [6],
                    [
                        [7],
                        [3, 'ocr']
                    ],
                    [3, 'isFrontIdCard']
                ]
            ])
            Z([
                [2, '&&'],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ocr']
                        ],
                        [3, 'isShowPhotoPreView']
                    ]
                ],
                [
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ocr']
                        ],
                        [3, 'isFrontIdCard']
                    ]
                ]
            ])
            Z([
                [6],
                [
                    [7],
                    [3, 'ocr']
                ],
                [3, 'isToolsShow']
            ])
            Z([3, 'verify-ocr-tools'])
            Z([
                [2, '>'],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'page']
                        ],
                        [3, 'ocr']
                    ],
                    [3, 'sourceType']
                ],
                [1, 0]
            ])
            Z(z[8])
            Z([
                [6],
                [
                    [7],
                    [3, 'ocr']
                ],
                [3, 'isShowPhotoPreView']
            ])
            Z(z[3])
            Z(z[4])
            Z(z[5])
            Z(z[20])
            Z(z[21])
            Z(z[22])
            Z(z[24])
            Z(z[24])
            Z([
                [6],
                [
                    [7],
                    [3, 'ocr']
                ],
                [3, 'isShowResult']
            ])
            Z([
                [6],
                [
                    [6],
                    [
                        [7],
                        [3, 'page']
                    ],
                    [3, 'ocr']
                ],
                [3, 'isAddress']
            ])
            Z(z[3])
            Z(z[4])
            Z(z[5])
            Z([
                [6],
                [
                    [6],
                    [
                        [7],
                        [3, 'page']
                    ],
                    [3, 'ocr']
                ],
                [3, 'isManualInput']
            ])
            Z([
                [2, '!'],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'page']
                        ],
                        [3, 'ocr']
                    ],
                    [3, 'isHideTakePhoto']
                ]
            ])
            Z(z[3])
            Z(z[4])
            Z(z[5])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_7);
        return __WXML_GLOBAL__.ops_cached.$gwx6_7
    }

    function gz$gwx6_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_8) return __WXML_GLOBAL__.ops_cached.$gwx6_8
        __WXML_GLOBAL__.ops_cached.$gwx6_8 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'riskTip'])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_8);
        return __WXML_GLOBAL__.ops_cached.$gwx6_8
    }

    function gz$gwx6_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_9) return __WXML_GLOBAL__.ops_cached.$gwx6_9
        __WXML_GLOBAL__.ops_cached.$gwx6_9 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'auth_template'])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_9);
        return __WXML_GLOBAL__.ops_cached.$gwx6_9
    }

    function gz$gwx6_10() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_10) return __WXML_GLOBAL__.ops_cached.$gwx6_10
        __WXML_GLOBAL__.ops_cached.$gwx6_10 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'verifySms'])
            Z([
                [6],
                [
                    [7],
                    [3, 'Common']
                ],
                [3, 'RiskTip']
            ])
            Z([
                [8], 'riskTip', [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'RiskTip']
                ]
            ])
            Z([3, 'riskTip'])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_10);
        return __WXML_GLOBAL__.ops_cached.$gwx6_10
    }

    function gz$gwx6_11() {
        if (__WXML_GLOBAL__.ops_cached.$gwx6_11) return __WXML_GLOBAL__.ops_cached.$gwx6_11
        __WXML_GLOBAL__.ops_cached.$gwx6_11 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'verifySuccessPage'])
            Z([
                [6],
                [
                    [7],
                    [3, 'Common']
                ],
                [3, 'RiskTip']
            ])
            Z([
                [8], 'riskTip', [
                    [6],
                    [
                        [7],
                        [3, 'Common']
                    ],
                    [3, 'RiskTip']
                ]
            ])
            Z([3, 'riskTip'])
        })(__WXML_GLOBAL__.ops_cached.$gwx6_11);
        return __WXML_GLOBAL__.ops_cached.$gwx6_11
    }
    __WXML_GLOBAL__.ops_set.$gwx6 = z;
    __WXML_GLOBAL__.ops_init.$gwx6 = true;
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
    var x = ['./verify_mpsdk/index/index.wxml', '../templates/index/index.wxml', '../templates/sms/sms.wxml', '../templates/ocr/ocr.wxml', '../templates/livingbody/livingbody.wxml', '../templates/failpage/failpage.wxml', '../templates/success/success.wxml', '../templates/errorToast/errorToast.wxml', '../templates/showAuthToast/showAuthToast.wxml', '..//templates/navTip/navTip.wxml', './verify_mpsdk/templates/errorToast/errorToast.wxml', './verify_mpsdk/templates/failpage/failpage.wxml', '../riskTip/riskTip.wxml', './verify_mpsdk/templates/index/index.wxml', './verify_mpsdk/templates/livingbody/livingbody.wxml', './verify_mpsdk/templates/navTip/navTip.wxml', './verify_mpsdk/templates/ocr/ocr.wxml', './verify_mpsdk/templates/riskTip/riskTip.wxml', './verify_mpsdk/templates/showAuthToast/showAuthToast.wxml', './verify_mpsdk/templates/sms/sms.wxml', './verify_mpsdk/templates/success/success.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
        var z = gz$gwx6_1()
        var oB = e_[x[0]].i
        _ai(oB, x[1], e_, x[0], 3, 2)
        _ai(oB, x[2], e_, x[0], 4, 2)
        _ai(oB, x[3], e_, x[0], 5, 2)
        _ai(oB, x[4], e_, x[0], 6, 2)
        _ai(oB, x[5], e_, x[0], 7, 2)
        _ai(oB, x[6], e_, x[0], 8, 2)
        _ai(oB, x[7], e_, x[0], 9, 2)
        _ai(oB, x[8], e_, x[0], 10, 2)
        _ai(oB, x[9], e_, x[0], 11, 2)
        var fE = _n('view')
        _rz(z, fE, 'id', 0, e, s, gg)
        var cF = _v()
        _(fE, cF)
        if (_oz(z, 1, e, s, gg)) {
            cF.wxVkey = 1
            var hG = _v()
            _(cF, hG)
            var oH = _oz(z, 3, e, s, gg)
            var cI = _gd(x[0], oH, e_, d_)
            if (cI) {
                var oJ = _1z(z, 2, e, s, gg) || {}
                var cur_globalf = gg.f
                hG.wxXCkey = 3
                cI(oJ, oJ, hG, gg)
                gg.f = cur_globalf
            } else _w(oH, x[0], 15, 16)
        } else {
            cF.wxVkey = 2
            var lK = _n('view')
            var aL = _v()
            _(lK, aL)
            if (_oz(z, 4, e, s, gg)) {
                aL.wxVkey = 1
                var oR = _v()
                _(aL, oR)
                var fS = _oz(z, 6, e, s, gg)
                var cT = _gd(x[0], fS, e_, d_)
                if (cT) {
                    var hU = _1z(z, 5, e, s, gg) || {}
                    var cur_globalf = gg.f
                    oR.wxXCkey = 3
                    cT(hU, hU, oR, gg)
                    gg.f = cur_globalf
                } else _w(fS, x[0], 18, 18)
            }
            var tM = _v()
            _(lK, tM)
            if (_oz(z, 7, e, s, gg)) {
                tM.wxVkey = 1
                var oV = _v()
                _(tM, oV)
                var cW = _oz(z, 9, e, s, gg)
                var oX = _gd(x[0], cW, e_, d_)
                if (oX) {
                    var lY = _1z(z, 8, e, s, gg) || {}
                    var cur_globalf = gg.f
                    oV.wxXCkey = 3
                    oX(lY, lY, oV, gg)
                    gg.f = cur_globalf
                } else _w(cW, x[0], 20, 18)
            }
            var eN = _v()
            _(lK, eN)
            if (_oz(z, 10, e, s, gg)) {
                eN.wxVkey = 1
                var aZ = _v()
                _(eN, aZ)
                var t1 = _oz(z, 12, e, s, gg)
                var e2 = _gd(x[0], t1, e_, d_)
                if (e2) {
                    var b3 = _1z(z, 11, e, s, gg) || {}
                    var cur_globalf = gg.f
                    aZ.wxXCkey = 3
                    e2(b3, b3, aZ, gg)
                    gg.f = cur_globalf
                } else _w(t1, x[0], 23, 18)
            }
            var bO = _v()
            _(lK, bO)
            if (_oz(z, 13, e, s, gg)) {
                bO.wxVkey = 1
                var o4 = _v()
                _(bO, o4)
                var x5 = _oz(z, 15, e, s, gg)
                var o6 = _gd(x[0], x5, e_, d_)
                if (o6) {
                    var f7 = _1z(z, 14, e, s, gg) || {}
                    var cur_globalf = gg.f
                    o4.wxXCkey = 3
                    o6(f7, f7, o4, gg)
                    gg.f = cur_globalf
                } else _w(x5, x[0], 26, 18)
            }
            var oP = _v()
            _(lK, oP)
            if (_oz(z, 16, e, s, gg)) {
                oP.wxVkey = 1
                var c8 = _v()
                _(oP, c8)
                var h9 = _oz(z, 18, e, s, gg)
                var o0 = _gd(x[0], h9, e_, d_)
                if (o0) {
                    var cAB = _1z(z, 17, e, s, gg) || {}
                    var cur_globalf = gg.f
                    c8.wxXCkey = 3
                    o0(cAB, cAB, c8, gg)
                    gg.f = cur_globalf
                } else _w(h9, x[0], 29, 18)
            }
            var xQ = _v()
            _(lK, xQ)
            if (_oz(z, 19, e, s, gg)) {
                xQ.wxVkey = 1
                var oBB = _v()
                _(xQ, oBB)
                var lCB = _oz(z, 21, e, s, gg)
                var aDB = _gd(x[0], lCB, e_, d_)
                if (aDB) {
                    var tEB = _1z(z, 20, e, s, gg) || {}
                    var cur_globalf = gg.f
                    oBB.wxXCkey = 3
                    aDB(tEB, tEB, oBB, gg)
                    gg.f = cur_globalf
                } else _w(lCB, x[0], 32, 18)
            }
            aL.wxXCkey = 1
            tM.wxXCkey = 1
            eN.wxXCkey = 1
            bO.wxXCkey = 1
            oP.wxXCkey = 1
            xQ.wxXCkey = 1
            _(cF, lK)
        }
        cF.wxXCkey = 1
        _(r, fE)
        var xC = _v()
        _(r, xC)
        if (_oz(z, 22, e, s, gg)) {
            xC.wxVkey = 1
            var eFB = _v()
            _(xC, eFB)
            var bGB = _oz(z, 24, e, s, gg)
            var oHB = _gd(x[0], bGB, e_, d_)
            if (oHB) {
                var xIB = _1z(z, 23, e, s, gg) || {}
                var cur_globalf = gg.f
                eFB.wxXCkey = 3
                oHB(xIB, xIB, eFB, gg)
                gg.f = cur_globalf
            } else _w(bGB, x[0], 37, 14)
        }
        var oD = _v()
        _(r, oD)
        if (_oz(z, 25, e, s, gg)) {
            oD.wxVkey = 1
            var oJB = _v()
            _(oD, oJB)
            var fKB = _oz(z, 27, e, s, gg)
            var cLB = _gd(x[0], fKB, e_, d_)
            if (cLB) {
                var hMB = _1z(z, 26, e, s, gg) || {}
                var cur_globalf = gg.f
                oJB.wxXCkey = 3
                cLB(hMB, hMB, oJB, gg)
                gg.f = cur_globalf
            } else _w(fKB, x[0], 39, 14)
        }
        xC.wxXCkey = 1
        oD.wxXCkey = 1
        oB.pop()
        oB.pop()
        oB.pop()
        oB.pop()
        oB.pop()
        oB.pop()
        oB.pop()
        oB.pop()
        oB.pop()
        return r
    }
    e_[x[0]] = {
        f: m0,
        j: [],
        i: [],
        ti: [x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9]],
        ic: []
    }
    d_[x[10]] = {}
    d_[x[10]]["error_template"] = function(e, s, r, gg) {
        var z = gz$gwx6_2()
        var b = x[10] + ':error_template'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/errorToast/errorToast.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[10]);
            return
        }
        p_[b] = true
        try {
            var oB = _n('view')
            _rz(z, oB, 'class', 1, e, s, gg)
            var xC = _v()
            _(oB, xC)
            if (_oz(z, 2, e, s, gg)) {
                xC.wxVkey = 1
            } else {
                xC.wxVkey = 2
                var oD = _n('view')
                var fE = _v()
                _(oD, fE)
                if (_oz(z, 3, e, s, gg)) {
                    fE.wxVkey = 1
                }
                var cF = _v()
                _(oD, cF)
                if (_oz(z, 4, e, s, gg)) {
                    cF.wxVkey = 1
                }
                fE.wxXCkey = 1
                cF.wxXCkey = 1
                _(xC, oD)
            }
            xC.wxXCkey = 1
            _(r, oB)
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m1 = function(e, s, r, gg) {
        var z = gz$gwx6_2()
        return r
    }
    e_[x[10]] = {
        f: m1,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[11]] = {}
    d_[x[11]]["verifyFailPage"] = function(e, s, r, gg) {
        var z = gz$gwx6_3()
        var b = x[11] + ':verifyFailPage'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/failpage/failpage.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[11]);
            return
        }
        p_[b] = true
        try {
            var oB = _v()
            _(r, oB)
            if (_oz(z, 1, e, s, gg)) {
                oB.wxVkey = 1
            }
            var xC = _v()
            _(r, xC)
            if (_oz(z, 2, e, s, gg)) {
                xC.wxVkey = 1
            }
            var oD = _v()
            _(r, oD)
            if (_oz(z, 3, e, s, gg)) {
                oD.wxVkey = 1
                var cF = _v()
                _(oD, cF)
                var hG = _oz(z, 5, e, s, gg)
                var oH = _gd(x[11], hG, e_, d_)
                if (oH) {
                    var cI = _1z(z, 4, e, s, gg) || {}
                    var cur_globalf = gg.f
                    cF.wxXCkey = 3
                    oH(cI, cI, cF, gg)
                    gg.f = cur_globalf
                } else _w(hG, x[11], 1, 1536)
            }
            var fE = _v()
            _(r, fE)
            if (_oz(z, 6, e, s, gg)) {
                fE.wxVkey = 1
            }
            oB.wxXCkey = 1
            xC.wxXCkey = 1
            oD.wxXCkey = 1
            fE.wxXCkey = 1
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m2 = function(e, s, r, gg) {
        var z = gz$gwx6_3()
        var oPB = e_[x[11]].i
        _ai(oPB, x[12], e_, x[11], 1, 1)
        oPB.pop()
        return r
    }
    e_[x[11]] = {
        f: m2,
        j: [],
        i: [],
        ti: [x[12]],
        ic: []
    }
    d_[x[13]] = {}
    d_[x[13]]["verifyIndex"] = function(e, s, r, gg) {
        var z = gz$gwx6_4()
        var b = x[13] + ':verifyIndex'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/index/index.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[13]);
            return
        }
        p_[b] = true
        try {
            var oB = _n('view')
            _rz(z, oB, 'class', 1, e, s, gg)
            var xC = _v()
            _(oB, xC)
            if (_oz(z, 2, e, s, gg)) {
                xC.wxVkey = 1
                var cF = _v()
                _(xC, cF)
                var hG = _oz(z, 4, e, s, gg)
                var oH = _gd(x[13], hG, e_, d_)
                if (oH) {
                    var cI = _1z(z, 3, e, s, gg) || {}
                    var cur_globalf = gg.f
                    cF.wxXCkey = 3
                    oH(cI, cI, cF, gg)
                    gg.f = cur_globalf
                } else _w(hG, x[13], 1, 1687)
            }
            var oD = _v()
            _(oB, oD)
            if (_oz(z, 5, e, s, gg)) {
                oD.wxVkey = 1
                var oJ = _mz(z, 'view', ['class', 6, 'style', 1], [], e, s, gg)
                var lK = _v()
                _(oJ, lK)
                if (_oz(z, 8, e, s, gg)) {
                    lK.wxVkey = 1
                }
                var aL = _v()
                _(oJ, aL)
                if (_oz(z, 9, e, s, gg)) {
                    aL.wxVkey = 1
                }
                lK.wxXCkey = 1
                aL.wxXCkey = 1
                _(oD, oJ)
            }
            var fE = _v()
            _(oB, fE)
            if (_oz(z, 10, e, s, gg)) {
                fE.wxVkey = 1
            }
            xC.wxXCkey = 1
            oD.wxXCkey = 1
            fE.wxXCkey = 1
            _(r, oB)
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m3 = function(e, s, r, gg) {
        var z = gz$gwx6_4()
        var aRB = e_[x[13]].i
        _ai(aRB, x[12], e_, x[13], 1, 1)
        aRB.pop()
        return r
    }
    e_[x[13]] = {
        f: m3,
        j: [],
        i: [],
        ti: [x[12]],
        ic: []
    }
    d_[x[14]] = {}
    d_[x[14]]["verifyLivingBody"] = function(e, s, r, gg) {
        var z = gz$gwx6_5()
        var b = x[14] + ':verifyLivingBody'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/livingbody/livingbody.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[14]);
            return
        }
        p_[b] = true
        try {
            var oB = _v()
            _(r, oB)
            if (_oz(z, 1, e, s, gg)) {
                oB.wxVkey = 1
                var hG = _v()
                _(oB, hG)
                if (_oz(z, 2, e, s, gg)) {
                    hG.wxVkey = 1
                    var oH = _v()
                    _(hG, oH)
                    var cI = _oz(z, 4, e, s, gg)
                    var oJ = _gd(x[14], cI, e_, d_)
                    if (oJ) {
                        var lK = _1z(z, 3, e, s, gg) || {}
                        var cur_globalf = gg.f
                        oH.wxXCkey = 3
                        oJ(lK, lK, oH, gg)
                        gg.f = cur_globalf
                    } else _w(cI, x[14], 1, 1112)
                }
                hG.wxXCkey = 1
            }
            var xC = _v()
            _(r, xC)
            if (_oz(z, 5, e, s, gg)) {
                xC.wxVkey = 1
                var aL = _n('view')
                _rz(z, aL, 'style', 6, e, s, gg)
                var tM = _v()
                _(aL, tM)
                if (_oz(z, 7, e, s, gg)) {
                    tM.wxVkey = 1
                    var eN = _mz(z, 'camera', ['binderror', 8, 'bindstop', 1, 'devicePosition', 2, 'flash', 3, 'id', 4, 'style', 5], [], e, s, gg)
                    var bO = _v()
                    _(eN, bO)
                    if (_oz(z, 14, e, s, gg)) {
                        bO.wxVkey = 1
                        var oP = _v()
                        _(bO, oP)
                        var xQ = _oz(z, 16, e, s, gg)
                        var oR = _gd(x[14], xQ, e_, d_)
                        if (oR) {
                            var fS = _1z(z, 15, e, s, gg) || {}
                            var cur_globalf = gg.f
                            oP.wxXCkey = 3
                            oR(fS, fS, oP, gg)
                            gg.f = cur_globalf
                        } else _w(xQ, x[14], 1, 1634)
                    }
                    bO.wxXCkey = 1
                    _(tM, eN)
                } else if (_oz(z, 17, e, s, gg)) {
                    tM.wxVkey = 2
                    var cT = _mz(z, 'camera', ['binderror', 18, 'bindstop', 1, 'devicePosition', 2, 'flash', 3, 'id', 4], [], e, s, gg)
                    var hU = _v()
                    _(cT, hU)
                    if (_oz(z, 23, e, s, gg)) {
                        hU.wxVkey = 1
                        var oV = _v()
                        _(hU, oV)
                        var cW = _oz(z, 25, e, s, gg)
                        var oX = _gd(x[14], cW, e_, d_)
                        if (oX) {
                            var lY = _1z(z, 24, e, s, gg) || {}
                            var cur_globalf = gg.f
                            oV.wxXCkey = 3
                            oX(lY, lY, oV, gg)
                            gg.f = cur_globalf
                        } else _w(cW, x[14], 1, 2976)
                    }
                    hU.wxXCkey = 1
                    _(tM, cT)
                } else {
                    tM.wxVkey = 3
                    var aZ = _mz(z, 'camera', ['binderror', 26, 'bindstop', 1, 'devicePosition', 2, 'flash', 3, 'id', 4], [], e, s, gg)
                    var t1 = _v()
                    _(aZ, t1)
                    if (_oz(z, 31, e, s, gg)) {
                        t1.wxVkey = 1
                        var e2 = _v()
                        _(t1, e2)
                        var b3 = _oz(z, 33, e, s, gg)
                        var o4 = _gd(x[14], b3, e_, d_)
                        if (o4) {
                            var x5 = _1z(z, 32, e, s, gg) || {}
                            var cur_globalf = gg.f
                            e2.wxXCkey = 3
                            o4(x5, x5, e2, gg)
                            gg.f = cur_globalf
                        } else _w(b3, x[14], 1, 3865)
                    }
                    var o6 = _n('cover-view')
                    _rz(z, o6, 'class', 34, e, s, gg)
                    var f7 = _v()
                    _(o6, f7)
                    if (_oz(z, 35, e, s, gg)) {
                        f7.wxVkey = 1
                    }
                    var c8 = _v()
                    _(o6, c8)
                    if (_oz(z, 36, e, s, gg)) {
                        c8.wxVkey = 1
                    }
                    var h9 = _v()
                    _(o6, h9)
                    if (_oz(z, 37, e, s, gg)) {
                        h9.wxVkey = 1
                    }
                    f7.wxXCkey = 1
                    c8.wxXCkey = 1
                    h9.wxXCkey = 1
                    _(aZ, o6)
                    t1.wxXCkey = 1
                    _(tM, aZ)
                }
                tM.wxXCkey = 1
                _(xC, aL)
            }
            var oD = _v()
            _(r, oD)
            if (_oz(z, 38, e, s, gg)) {
                oD.wxVkey = 1
                var o0 = _v()
                _(oD, o0)
                if (_oz(z, 39, e, s, gg)) {
                    o0.wxVkey = 1
                    var cAB = _v()
                    _(o0, cAB)
                    var oBB = _oz(z, 41, e, s, gg)
                    var lCB = _gd(x[14], oBB, e_, d_)
                    if (lCB) {
                        var aDB = _1z(z, 40, e, s, gg) || {}
                        var cur_globalf = gg.f
                        cAB.wxXCkey = 3
                        lCB(aDB, aDB, cAB, gg)
                        gg.f = cur_globalf
                    } else _w(oBB, x[14], 1, 5152)
                }
                o0.wxXCkey = 1
            }
            var fE = _v()
            _(r, fE)
            if (_oz(z, 42, e, s, gg)) {
                fE.wxVkey = 1
            }
            var cF = _v()
            _(r, cF)
            if (_oz(z, 43, e, s, gg)) {
                cF.wxVkey = 1
            }
            oB.wxXCkey = 1
            xC.wxXCkey = 1
            oD.wxXCkey = 1
            fE.wxXCkey = 1
            cF.wxXCkey = 1
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m4 = function(e, s, r, gg) {
        var z = gz$gwx6_5()
        var eTB = e_[x[14]].i
        _ai(eTB, x[12], e_, x[14], 1, 1)
        eTB.pop()
        return r
    }
    e_[x[14]] = {
        f: m4,
        j: [],
        i: [],
        ti: [x[12]],
        ic: []
    }
    d_[x[15]] = {}
    d_[x[15]]["navTip"] = function(e, s, r, gg) {
        var z = gz$gwx6_6()
        var b = x[15] + ':navTip'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/navTip/navTip.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[15]);
            return
        }
        p_[b] = true
        try {
            var oB = _v()
            _(r, oB)
            if (_oz(z, 1, e, s, gg)) {
                oB.wxVkey = 1
                var xC = _n('view')
                _rz(z, xC, 'id', 2, e, s, gg)
                var oD = _v()
                _(xC, oD)
                if (_oz(z, 3, e, s, gg)) {
                    oD.wxVkey = 1
                }
                var fE = _v()
                _(xC, fE)
                if (_oz(z, 4, e, s, gg)) {
                    fE.wxVkey = 1
                }
                oD.wxXCkey = 1
                fE.wxXCkey = 1
                _(oB, xC)
            } else if (_oz(z, 5, e, s, gg)) {
                oB.wxVkey = 2
                var cF = _n('view')
                _rz(z, cF, 'id', 6, e, s, gg)
                var hG = _v()
                _(cF, hG)
                if (_oz(z, 7, e, s, gg)) {
                    hG.wxVkey = 1
                }
                var oH = _v()
                _(cF, oH)
                if (_oz(z, 8, e, s, gg)) {
                    oH.wxVkey = 1
                }
                hG.wxXCkey = 1
                oH.wxXCkey = 1
                _(oB, cF)
            } else if (_oz(z, 9, e, s, gg)) {
                oB.wxVkey = 3
                var cI = _n('view')
                _rz(z, cI, 'id', 10, e, s, gg)
                var oJ = _v()
                _(cI, oJ)
                if (_oz(z, 11, e, s, gg)) {
                    oJ.wxVkey = 1
                }
                var lK = _v()
                _(cI, lK)
                if (_oz(z, 12, e, s, gg)) {
                    lK.wxVkey = 1
                }
                oJ.wxXCkey = 1
                lK.wxXCkey = 1
                _(oB, cI)
            } else if (_oz(z, 13, e, s, gg)) {
                oB.wxVkey = 4
            } else if (_oz(z, 14, e, s, gg)) {
                oB.wxVkey = 5
                var aL = _n('view')
                _rz(z, aL, 'id', 15, e, s, gg)
                var tM = _v()
                _(aL, tM)
                if (_oz(z, 16, e, s, gg)) {
                    tM.wxVkey = 1
                }
                var eN = _v()
                _(aL, eN)
                if (_oz(z, 17, e, s, gg)) {
                    eN.wxVkey = 1
                }
                var bO = _v()
                _(aL, bO)
                if (_oz(z, 18, e, s, gg)) {
                    bO.wxVkey = 1
                }
                var oP = _v()
                _(aL, oP)
                if (_oz(z, 19, e, s, gg)) {
                    oP.wxVkey = 1
                }
                tM.wxXCkey = 1
                eN.wxXCkey = 1
                bO.wxXCkey = 1
                oP.wxXCkey = 1
                _(oB, aL)
            } else if (_oz(z, 20, e, s, gg)) {
                oB.wxVkey = 6
            } else if (_oz(z, 21, e, s, gg)) {
                oB.wxVkey = 7
                var xQ = _n('view')
                _rz(z, xQ, 'id', 22, e, s, gg)
                var oR = _v()
                _(xQ, oR)
                if (_oz(z, 23, e, s, gg)) {
                    oR.wxVkey = 1
                }
                var fS = _v()
                _(xQ, fS)
                if (_oz(z, 24, e, s, gg)) {
                    fS.wxVkey = 1
                }
                var cT = _v()
                _(xQ, cT)
                if (_oz(z, 25, e, s, gg)) {
                    cT.wxVkey = 1
                }
                var hU = _v()
                _(xQ, hU)
                if (_oz(z, 26, e, s, gg)) {
                    hU.wxVkey = 1
                }
                oR.wxXCkey = 1
                fS.wxXCkey = 1
                cT.wxXCkey = 1
                hU.wxXCkey = 1
                _(oB, xQ)
            }
            oB.wxXCkey = 1
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m5 = function(e, s, r, gg) {
        var z = gz$gwx6_6()
        return r
    }
    e_[x[15]] = {
        f: m5,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[16]] = {}
    d_[x[16]]["verifyOcr"] = function(e, s, r, gg) {
        var z = gz$gwx6_7()
        var b = x[16] + ':verifyOcr'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/ocr/ocr.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[16]);
            return
        }
        p_[b] = true
        try {
            var oB = _n('view')
            _rz(z, oB, 'class', 1, e, s, gg)
            var xC = _v()
            _(oB, xC)
            if (_oz(z, 2, e, s, gg)) {
                xC.wxVkey = 1
                var hG = _v()
                _(xC, hG)
                if (_oz(z, 3, e, s, gg)) {
                    hG.wxVkey = 1
                    var oH = _v()
                    _(hG, oH)
                    var cI = _oz(z, 5, e, s, gg)
                    var oJ = _gd(x[16], cI, e_, d_)
                    if (oJ) {
                        var lK = _1z(z, 4, e, s, gg) || {}
                        var cur_globalf = gg.f
                        oH.wxXCkey = 3
                        oJ(lK, lK, oH, gg)
                        gg.f = cur_globalf
                    } else _w(cI, x[16], 1, 1044)
                }
                hG.wxXCkey = 1
            }
            var oD = _v()
            _(oB, oD)
            if (_oz(z, 6, e, s, gg)) {
                oD.wxVkey = 1
                var aL = _n('view')
                _rz(z, aL, 'class', 7, e, s, gg)
                var tM = _v()
                _(aL, tM)
                if (_oz(z, 8, e, s, gg)) {
                    tM.wxVkey = 1
                    var bO = _n('view')
                    _rz(z, bO, 'class', 9, e, s, gg)
                    var oP = _v()
                    _(bO, oP)
                    if (_oz(z, 10, e, s, gg)) {
                        oP.wxVkey = 1
                        var oR = _v()
                        _(oP, oR)
                        var fS = _oz(z, 12, e, s, gg)
                        var cT = _gd(x[16], fS, e_, d_)
                        if (cT) {
                            var hU = _1z(z, 11, e, s, gg) || {}
                            var cur_globalf = gg.f
                            oR.wxXCkey = 3
                            cT(hU, hU, oR, gg)
                            gg.f = cur_globalf
                        } else _w(fS, x[16], 1, 1481)
                    }
                    var oV = _mz(z, 'camera', ['binderror', 13, 'class', 1, 'devicePosition', 2, 'flash', 3], [], e, s, gg)
                    var cW = _v()
                    _(oV, cW)
                    if (_oz(z, 17, e, s, gg)) {
                        cW.wxVkey = 1
                    }
                    var oX = _v()
                    _(oV, oX)
                    if (_oz(z, 18, e, s, gg)) {
                        oX.wxVkey = 1
                    }
                    var lY = _v()
                    _(oV, lY)
                    if (_oz(z, 19, e, s, gg)) {
                        lY.wxVkey = 1
                    }
                    cW.wxXCkey = 1
                    oX.wxXCkey = 1
                    lY.wxXCkey = 1
                    _(bO, oV)
                    var xQ = _v()
                    _(bO, xQ)
                    if (_oz(z, 20, e, s, gg)) {
                        xQ.wxVkey = 1
                        var aZ = _n('view')
                        _rz(z, aZ, 'class', 21, e, s, gg)
                        var t1 = _v()
                        _(aZ, t1)
                        if (_oz(z, 22, e, s, gg)) {
                            t1.wxVkey = 1
                        }
                        var e2 = _v()
                        _(aZ, e2)
                        if (_oz(z, 23, e, s, gg)) {
                            e2.wxVkey = 1
                        }
                        t1.wxXCkey = 1
                        e2.wxXCkey = 1
                        _(xQ, aZ)
                    }
                    oP.wxXCkey = 1
                    xQ.wxXCkey = 1
                    _(tM, bO)
                }
                var eN = _v()
                _(aL, eN)
                if (_oz(z, 24, e, s, gg)) {
                    eN.wxVkey = 1
                    var b3 = _n('view')
                    var o4 = _v()
                    _(b3, o4)
                    if (_oz(z, 25, e, s, gg)) {
                        o4.wxVkey = 1
                        var o6 = _v()
                        _(o4, o6)
                        var f7 = _oz(z, 27, e, s, gg)
                        var c8 = _gd(x[16], f7, e_, d_)
                        if (c8) {
                            var h9 = _1z(z, 26, e, s, gg) || {}
                            var cur_globalf = gg.f
                            o6.wxXCkey = 3
                            c8(h9, h9, o6, gg)
                            gg.f = cur_globalf
                        } else _w(f7, x[16], 1, 3234)
                    }
                    var x5 = _v()
                    _(b3, x5)
                    if (_oz(z, 28, e, s, gg)) {
                        x5.wxVkey = 1
                        var o0 = _n('view')
                        _rz(z, o0, 'class', 29, e, s, gg)
                        var cAB = _v()
                        _(o0, cAB)
                        if (_oz(z, 30, e, s, gg)) {
                            cAB.wxVkey = 1
                        }
                        var oBB = _v()
                        _(o0, oBB)
                        if (_oz(z, 31, e, s, gg)) {
                            oBB.wxVkey = 1
                        }
                        var lCB = _v()
                        _(o0, lCB)
                        if (_oz(z, 32, e, s, gg)) {
                            lCB.wxVkey = 1
                        }
                        cAB.wxXCkey = 1
                        oBB.wxXCkey = 1
                        lCB.wxXCkey = 1
                        _(x5, o0)
                    }
                    o4.wxXCkey = 1
                    x5.wxXCkey = 1
                    _(eN, b3)
                }
                tM.wxXCkey = 1
                eN.wxXCkey = 1
                _(oD, aL)
            }
            var fE = _v()
            _(oB, fE)
            if (_oz(z, 33, e, s, gg)) {
                fE.wxVkey = 1
                var aDB = _n('view')
                var tEB = _v()
                _(aDB, tEB)
                if (_oz(z, 34, e, s, gg)) {
                    tEB.wxVkey = 1
                }
                var eFB = _v()
                _(aDB, eFB)
                if (_oz(z, 35, e, s, gg)) {
                    eFB.wxVkey = 1
                    var bGB = _v()
                    _(eFB, bGB)
                    var oHB = _oz(z, 37, e, s, gg)
                    var xIB = _gd(x[16], oHB, e_, d_)
                    if (xIB) {
                        var oJB = _1z(z, 36, e, s, gg) || {}
                        var cur_globalf = gg.f
                        bGB.wxXCkey = 3
                        xIB(oJB, oJB, bGB, gg)
                        gg.f = cur_globalf
                    } else _w(oHB, x[16], 1, 5784)
                }
                tEB.wxXCkey = 1
                eFB.wxXCkey = 1
                _(fE, aDB)
            }
            var cF = _v()
            _(oB, cF)
            if (_oz(z, 38, e, s, gg)) {
                cF.wxVkey = 1
                var fKB = _n('view')
                var cLB = _v()
                _(fKB, cLB)
                if (_oz(z, 39, e, s, gg)) {
                    cLB.wxVkey = 1
                }
                var hMB = _v()
                _(fKB, hMB)
                if (_oz(z, 40, e, s, gg)) {
                    hMB.wxVkey = 1
                    var oNB = _v()
                    _(hMB, oNB)
                    var cOB = _oz(z, 42, e, s, gg)
                    var oPB = _gd(x[16], cOB, e_, d_)
                    if (oPB) {
                        var lQB = _1z(z, 41, e, s, gg) || {}
                        var cur_globalf = gg.f
                        oNB.wxXCkey = 3
                        oPB(lQB, lQB, oNB, gg)
                        gg.f = cur_globalf
                    } else _w(cOB, x[16], 1, 6898)
                }
                cLB.wxXCkey = 1
                hMB.wxXCkey = 1
                _(cF, fKB)
            }
            xC.wxXCkey = 1
            oD.wxXCkey = 1
            fE.wxXCkey = 1
            cF.wxXCkey = 1
            _(r, oB)
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m6 = function(e, s, r, gg) {
        var z = gz$gwx6_7()
        var xWB = e_[x[16]].i
        _ai(xWB, x[12], e_, x[16], 1, 1)
        xWB.pop()
        return r
    }
    e_[x[16]] = {
        f: m6,
        j: [],
        i: [],
        ti: [x[12]],
        ic: []
    }
    d_[x[17]] = {}
    d_[x[17]]["riskTip"] = function(e, s, r, gg) {
        var z = gz$gwx6_8()
        var b = x[17] + ':riskTip'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/riskTip/riskTip.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[17]);
            return
        }
        p_[b] = true
        try {} catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m7 = function(e, s, r, gg) {
        var z = gz$gwx6_8()
        return r
    }
    e_[x[17]] = {
        f: m7,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[18]] = {}
    d_[x[18]]["auth_template"] = function(e, s, r, gg) {
        var z = gz$gwx6_9()
        var b = x[18] + ':auth_template'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/showAuthToast/showAuthToast.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[18]);
            return
        }
        p_[b] = true
        try {} catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m8 = function(e, s, r, gg) {
        var z = gz$gwx6_9()
        return r
    }
    e_[x[18]] = {
        f: m8,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[19]] = {}
    d_[x[19]]["verifySms"] = function(e, s, r, gg) {
        var z = gz$gwx6_10()
        var b = x[19] + ':verifySms'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/sms/sms.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[19]);
            return
        }
        p_[b] = true
        try {
            var oB = _v()
            _(r, oB)
            if (_oz(z, 1, e, s, gg)) {
                oB.wxVkey = 1
                var xC = _v()
                _(oB, xC)
                var oD = _oz(z, 3, e, s, gg)
                var fE = _gd(x[19], oD, e_, d_)
                if (fE) {
                    var cF = _1z(z, 2, e, s, gg) || {}
                    var cur_globalf = gg.f
                    xC.wxXCkey = 3
                    fE(cF, cF, xC, gg)
                    gg.f = cur_globalf
                } else _w(oD, x[19], 1, 1319)
            }
            oB.wxXCkey = 1
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m9 = function(e, s, r, gg) {
        var z = gz$gwx6_10()
        var h1B = e_[x[19]].i
        _ai(h1B, x[12], e_, x[19], 1, 1)
        h1B.pop()
        return r
    }
    e_[x[19]] = {
        f: m9,
        j: [],
        i: [],
        ti: [x[12]],
        ic: []
    }
    d_[x[20]] = {}
    d_[x[20]]["verifySuccessPage"] = function(e, s, r, gg) {
        var z = gz$gwx6_11()
        var b = x[20] + ':verifySuccessPage'
        r.wxVkey = b
        gg.f = $gdc(f_["./verify_mpsdk/templates/success/success.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[20]);
            return
        }
        p_[b] = true
        try {
            var oB = _v()
            _(r, oB)
            if (_oz(z, 1, e, s, gg)) {
                oB.wxVkey = 1
                var xC = _v()
                _(oB, xC)
                var oD = _oz(z, 3, e, s, gg)
                var fE = _gd(x[20], oD, e_, d_)
                if (fE) {
                    var cF = _1z(z, 2, e, s, gg) || {}
                    var cur_globalf = gg.f
                    xC.wxXCkey = 3
                    fE(cF, cF, xC, gg)
                    gg.f = cur_globalf
                } else _w(oD, x[20], 1, 571)
            }
            oB.wxXCkey = 1
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m10 = function(e, s, r, gg) {
        var z = gz$gwx6_11()
        var c3B = e_[x[20]].i
        _ai(c3B, x[12], e_, x[20], 1, 1)
        c3B.pop()
        return r
    }
    e_[x[20]] = {
        f: m10,
        j: [],
        i: [],
        ti: [x[12]],
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
__wxAppCode__['verify_mpsdk/index/index.json'] = {
    "disableScroll": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['verify_mpsdk/index/index.wxml'] = [$gwx6, './verify_mpsdk/index/index.wxml'];
else __wxAppCode__['verify_mpsdk/index/index.wxml'] = $gwx6('./verify_mpsdk/index/index.wxml');

define("verify_mpsdk/config.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    module.exports = {
        sysFailInfo: {
            610: {
                msg: "脸部未完整露出",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-noface.png",
                tips1: "建议您调整脸部位置，或录制角度",
                tips2: ""
            },
            657: {
                msg: "脸离屏幕太左",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-tooleft.png",
                tips1: "建议您调整脸部位置，或录制角度",
                tips2: ""
            },
            658: {
                msg: "脸离屏幕太右",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-tooright.png",
                tips1: "建议您调整脸部位置，或录制角度",
                tips2: ""
            },
            663: {
                msg: "未能检测到完整人脸",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-tooright.png",
                tips1: "建议您调整脸部位置，或录制角度",
                tips2: ""
            },
            659: {
                msg: "光线太暗",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-toodark.png",
                tips1: "建议您调整录制环境，保证光线适中",
                tips2: ""
            },
            660: {
                msg: "光线太强",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-toobright.png",
                tips1: "建议您调整录制环境，保证光线适中",
                tips2: ""
            },
            608: {
                msg: "视频声音太小",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-nosound.png",
                tips1: "请用清晰洪亮的普通话，匀速缓慢朗读四个数字",
                tips2: ""
            },
            611: {
                msg: "声音识别失败",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-nosound.png",
                tips1: "请用清晰洪亮的普通话，匀速缓慢朗读四个数字",
                tips2: ""
            },
            612: {
                msg: "未检测到声音",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-nosound.png",
                tips1: "请用清晰洪亮的普通话，匀速缓慢朗读四个数字",
                tips2: ""
            },
            609: {
                msg: "嘴唇动作幅度过小",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-openmouse.png",
                tips1: "朗读时尽量使嘴唇动作明显变化，",
                tips2: "动作放慢并确保画面清晰"
            },
            652: {
                msg: "未检测到第一个动作",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-lowpixel.png",
                tips1: "建议您动作频率放慢一些",
                tips2: ""
            },
            653: {
                msg: "未检测到闭眼动作",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-openeye.png",
                tips1: "建议您闭眼频率放慢一些",
                tips2: ""
            },
            654: {
                msg: "未检测到张嘴动作",
                img: "http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-openmouse.png",
                tips1: "建议您张大嘴，动作放慢一些",
                tips2: ""
            },
            1600: {
                msg: "视频录制时间过短",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            1601: {
                msg: "实人检测失败",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            1602: {
                msg: "实人检测未达到通过标准",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            651: {
                msg: "疑似非真人录制",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            603: {
                msg: "视频实人比对没通过",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            604: {
                msg: "比对相似度未达到通过标准",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            602: {
                msg: "视频实人检测没通过",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            823: {
                msg: "图像比对没通过",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            824: {
                msg: "比对相似度未达到通过标准",
                img: "",
                tips1: "请更换背景环境录制",
                tips2: "避免背景中有反光、边框",
                isTips1Color: !0
            },
            655: {
                msg: "脸离屏幕太近",
                img: "",
                tips1: "建议您调整脸部位置，或录制角度",
                tips2: ""
            },
            656: {
                msg: "脸离屏幕太远",
                img: "",
                tips1: "建议您调整脸部位置，或录制角度",
                tips2: ""
            },
            650: {
                msg: "活体检测调用失败",
                img: "",
                tips1: "给您造成不便深表抱歉，建议您稍后重试",
                tips2: ""
            },
            606: {
                msg: "身份证照片信息拉取失败",
                img: "",
                tips1: "如多次出现该错误，请联系相关工作人员，提供身份证号，看证件库是否有您照片",
                tips2: ""
            },
            9999: {
                msg: "服务器返回异常501/504",
                img: "",
                tips1: "",
                tips2: ""
            }
        },
        defaultConfig: {
            Common: {
                Title: "腾讯云慧眼",
                IsShowLogo: !1,
                Flow: ["LiveSilence1V1"],
                RedirectUrl: "/clearCookie",
                NavTitle: {
                    SmsTitle: "短信验证",
                    OcrTitle: "上传身份证",
                    LivingbodyTitle: "录制视频",
                    ResultTitle: "验证结果"
                },
                IsWxNative: !1,
                IsHideIndexWhenNative: !1,
                WxCheckAliveType: 2,
                IsWxNativeMod: 0,
                WxVerifyTypeIsVideo: !1
            },
            JustForMp: {
                iOSVerLimit: "6.6.7",
                androidVerLimit: "6.7.2"
            },
            Index: {
                ProtocolTitle: "实名核身用户须知",
                TencentProtocol: '<p>本服务由腾讯实名核身技术方案"腾讯慧眼"提供技术支持。您在接受服务过程中，需要调用您的手机摄像头，并且根据业务场景的不同，需要读取您的身份证个人信息，包括姓名、性别、民族、出生日期、常住户口所在地住址、公民身份号码、本人相片、证件的有效期和签发机关等信息，或者截取您的脸部图像和认证视频，从而实现身份比对。</p><p>如您使用不成功，请确保您已经按照要求正确使用本服务，或者向为您办理业务的机构咨询其他办理渠道。</p>',
                ClientProtocol: "客户侧协议内容",
                ProjectName: "云智慧眼",
                BusinessName: "实名实人认证",
                CooperationName: "合作方文案",
                IsHideAbout: !1,
                NextBtn: "快速验证",
                ProtocolEntrance: "全部协议",
                AuthorizedProtocol: '<p>您知悉并同意应用提供者：调用<span class="focus-text">相机、存储、麦克风权限</span>，收集、使用您本人的<span class="focus-text">身份信息及人脸视频、图像</span>，向合法数据持有者核实验证您的真实身份。</p>'
            },
            Sms: {},
            Ocr: {
                IsManualInput: !0,
                Backend: !1,
                AllowModifyType: "100",
                IsAddress: !1,
                IsCheckIdInfo: !1,
                SourceType: 2,
                IsHideManualInputTakePhotoBtn: !1
            },
            LiveFour1V1: {
                MaxDuration: 4,
                DetailType: !1,
                ForceWatchVideoTime: 5,
                ImportantTips: ""
            },
            LiveAction1V1: {},
            LiveSilence1V1: {},
            Fail: {
                IsShowQuitBtn: !1,
                ExitBtnText: "退出实名认证",
                RetryBtnText: "重新验证",
                CustomFailInfo: {}
            },
            Success: {
                SubTipsName: "验证成功",
                SuccessTips: "请点击下一步继续您的操作",
                AutoSkip: !1
            }
        }
    };
});
define("verify_mpsdk/main.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
        o = require("../@babel/runtime/helpers/asyncToGenerator"),
        t = (require("./utils/regenerator-runtime/runtime"), require("./utils/util")),
        r = require("./utils/log"),
        i = require("./utils/extend.js").extend,
        n = function() {
            var i = o(e().mark((function o(i, n) {
                var a, s;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, a = {
                                method: "POST",
                                url: "/api/auth/getConfig?BizToken=".concat(i),
                                reTry: {
                                    tryCount: 3
                                }
                            }, e.next = 4, t.requestPromise(a);
                        case 4:
                            200 === (s = e.sent).statusCode && s.data.Data && 0 === s.data.ErrorCode ? n({
                                ErrorCode: 0,
                                Data: s.data.Data
                            }) : (s.data.ErrorCode ? n({
                                ErrorCode: s.data.ErrorCode,
                                ErrorMsg: "获取配置失败,".concat(s.data.ErrorMsg)
                            }) : n({
                                ErrorCode: -104,
                                ErrorMsg: "调用失败，获取配置异常！"
                            }), t.reportError(r.getCmsConfigErr, s, {
                                urL: wx.verifyBaseUrl
                            })), e.next = 11;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e.catch(0), console.log("genConfig catch error", e.t0), e.t0.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || e.t0.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? n({
                                ErrorCode: 101,
                                ErrorMsg: "网络异常，请稍后重试"
                            }) : "request:fail url not in domain list" === e.t0.errMsg ? n({
                                ErrorCode: -104,
                                ErrorMsg: "接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"
                            }) : n({
                                ErrorCode: -104,
                                ErrorMsg: "网络异常，请稍后重试"
                            }), t.reportError(r.getCmsConfigCatch, e.t0, {
                                urL: wx.verifyBaseUrl
                            });
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), o, null, [
                    [0, 8]
                ])
            })));
            return function(e, o) {
                return i.apply(this, arguments)
            }
        }(),
        a = function(e, o) {
            var t = o.Common.Flow,
                r = !1,
                i = !1,
                n = !1,
                a = !1,
                s = 0,
                l = t.indexOf("LiveFour1V1") >= 0 || t.indexOf("LiveAction1V1") >= 0 || t.indexOf("LiveSilence1V1") >= 0; - 1 === t.indexOf("Sms") && (r = !0), -1 === t.indexOf("Ocr") && (i = !0), l && (s = t.indexOf("LiveFour1V1") >= 0 ? 0 : t.indexOf("LiveAction1V1") >= 0 ? 1 : 2), l || -1 !== t.indexOf("Sms") || (n = !0), l || -1 !== t.indexOf("Ocr") || (a = !0);
            var c = {
                    Common: o.Common,
                    protocol: {
                        title: o.Index.ProtocolTitle,
                        content: o.Index.TencentProtocol,
                        clientContent: o.Index.ClientProtocol
                    },
                    page: {
                        index: {
                            clientName: o.Index.ProjectName,
                            businessName: o.Index.BusinessName,
                            certificationCenter: o.Index.CooperationName,
                            nextBtnName: o.Index.NextBtn,
                            isHideTipsLogo: !o.Common.IsShowLogo,
                            isHideTipsAbout: o.Common.IsHideAbout,
                            protocolTitle: o.Index.ProtocolEntrance,
                            authorizedProtocol: o.Index.AuthorizedProtocol
                        },
                        ocr: {
                            backend: o.Ocr.Backend,
                            sourceType: o.Ocr.SourceType,
                            isAddress: o.Ocr.IsAddress,
                            isManualInput: o.Ocr.IsManualInput,
                            isHideTakePhoto: o.Ocr.IsHideManualInputTakePhotoBtn,
                            isCheckIDInfo: o.Ocr.IsCheckIdInfo,
                            allowModifyType: o.Ocr.AllowModifyType
                        },
                        livingbody: {
                            silentRecordTime: o.LiveFour1V1.MaxDuration
                        },
                        success: {
                            successTitle: o.Success.SubTipsName,
                            successTips: o.Success.SuccessTips,
                            isAutoSkip: o.Success.AutoSkip
                        },
                        sms: {},
                        failpage: {
                            isShowExitBtn: o.Fail.IsShowQuitBtn,
                            exitBtnTtile: o.Fail.ExitBtnText,
                            RetryBtnText: o.Fail.RetryBtnText
                        }
                    },
                    runEnv: "release",
                    navTitle: {
                        smsTitle: o.Common.NavTitle.SmsTitle,
                        ocrTitle: o.Common.NavTitle.OcrTitle,
                        livingbodyTitle: o.Common.NavTitle.LivingbodyTitle,
                        resultTitle: o.Common.NavTitle.ResultTitle
                    },
                    justForJumpVer: {
                        title: o.Common.Title
                    },
                    about: {
                        title: "关于腾讯云慧眼",
                        content: "腾讯云慧眼由腾讯AI Lab、腾讯优图、腾讯数据平台部提供技术支持。"
                    },
                    IsHideIndexAlways: o.Common.IsHideIndexAlways,
                    isHideSmsPage: r,
                    isHideOcrPage: i,
                    livingbodyType: s,
                    isJustOcr: n,
                    isJustSms: a,
                    failInfo: o.Fail.CustomFailInfo
                },
                d = {
                    isHideSmsPage: c.isHideSmsPage,
                    isHideOcrPage: c.isHideOcrPage,
                    isJustSms: c.isJustSms,
                    isJustOcr: c.isJustOcr,
                    navTitle: c.navTitle
                };
            if (c.skipConfig = d, 0 !== c.livingbodyType && 1 !== c.livingbodyType) {
                var u = 4,
                    f = c.page.livingbody.silentRecordTime;
                f && "number" == typeof f && f > 4 && (u = f), c.page.livingbody.silentRecordTime = u
            }
            var x = c.page.ocr.allowModifyType.split("");
            return c.page.ocr.isIdnameAllowEdit = "0" === x[0], c.page.ocr.isIdnumberAllowEdit = "0" === x[1], c.page.ocr.isIdaddressAllowEdit = "0" === x[2], console.log(c.page.ocr), c
        };
    module.exports = {
        init: function(e) {
            wx.onNetworkStatusChange((function(e) {
                "none" !== e.networkType && "2g" !== e.networkType || wx.showToast({
                    title: "网络异常",
                    icon: "none"
                })
            })), wx.onMemoryWarning((function() {
                t.reportError(r.memoryWarn)
            })), wx.verifyBaseUrl || (wx.verifyBaseUrl = "https://faceid.qq.com"), wx.startVerify = function(e) {
                if (console.log("startVerify start, send data", e), e.data && e.fail && e.success) {
                    if (e.data.endPath) {
                        if (!t.validate(e.data.endPath, "end_path")) return o = {
                            ErrorCode: -100,
                            ErrorMsg: "调用SDK失败，endPath格式错误！"
                        }, void wx.showModal({
                            title: "提示",
                            content: o.ErrorMsg,
                            showCancel: !1
                        });
                        e.fail = function(o) {
                            if (-999 !== o.error_code) {
                                var t;
                                t = e.data.endPath.indexOf("?") >= 0 ? e.data.endPath + "&data=" + encodeURIComponent(JSON.stringify(o)) : e.data.endPath + "?data=" + encodeURIComponent(JSON.stringify(o)), console.log(t), wx.navigateTo({
                                    url: t,
                                    fail: function(e) {
                                        console.log(e), wx.showModal({
                                            title: "提示",
                                            content: e.errMsg,
                                            showCancel: !1
                                        })
                                    }
                                })
                            } else wx.navigateBack()
                        }, e.success = function(o) {
                            var t;
                            t = e.data.endPath.indexOf("?") >= 0 ? e.data.endPath + "&data=" + JSON.stringify(o) : e.data.endPath + "?data=" + JSON.stringify(o), console.log(t), wx.redirectTo({
                                url: t,
                                fail: function(e) {
                                    console.log(e), wx.showModal({
                                        title: "提示",
                                        content: e.errMsg,
                                        showCancel: !1
                                    })
                                }
                            })
                        }
                    }
                    wx.verifySuccessFunc = function(o) {
                        e.success(o), wx.offMemoryWarning()
                    }, wx.verifyFailureFunc = function(o) {
                        e.fail(o), wx.offMemoryWarning()
                    }, wx.verify_TOKEN = e.data.token, wx.verify_BizData = e.data, t.validate(e.data.token, "token") ? (console.log("data is ok", e.data), wx.showLoading({
                        title: "加载中...",
                        mask: !0
                    }), n(e.data.token, (function(o) {
                        if (console.log(o), wx.hideLoading(), 0 === o.ErrorCode) {
                            var r = {
                                Common: {
                                    Title: "腾讯云慧眼",
                                    IsShowLogo: !1,
                                    Flow: ["LiveSilence1V1"],
                                    RedirectUrl: "/clearCookie",
                                    NavTitle: {
                                        SmsTitle: "短信验证",
                                        OcrTitle: "上传身份证",
                                        LivingbodyTitle: "录制视频",
                                        ResultTitle: "验证结果"
                                    },
                                    IsWxNative: !1,
                                    IsHideIndexWhenNative: !1,
                                    IsHideIndexAlways: !1,
                                    WxCheckAliveType: 2,
                                    IsWxNativeMod: 0,
                                    WxVerifyTypeIsVideo: !1
                                },
                                JustForMp: {
                                    iOSVerLimit: "6.6.7",
                                    androidVerLimit: "6.7.2"
                                },
                                Index: {
                                    ProtocolTitle: "实名核身用户须知",
                                    TencentProtocol: '<p>本服务由腾讯实名核身技术方案"腾讯慧眼"提供技术支持。您在接受服务过程中，需要调用您的手机摄像头，并且根据业务场景的不同，需要读取您的身份证个人信息，包括姓名、性别、民族、出生日期、常住户口所在地住址、公民身份号码、本人相片、证件的有效期和签发机关等信息，或者截取您的脸部图像和认证视频，从而实现身份比对。</p><p>如您使用不成功，请确保您已经按照要求正确使用本服务，或者向为您办理业务的机构咨询其他办理渠道。</p>',
                                    ClientProtocol: "客户侧协议内容",
                                    ProjectName: "云智慧眼",
                                    BusinessName: "实名实人认证",
                                    CooperationName: "合作方文案",
                                    IsHideAbout: !1,
                                    NextBtn: "快速验证",
                                    ProtocolEntrance: "全部协议",
                                    AuthorizedProtocol: '<p>您知悉并同意应用提供者：调用<span class="focus-text">相机、存储、麦克风权限</span>，收集、使用您本人的<span class="focus-text">身份信息及人脸视频、图像</span>，向合法数据持有者核实验证您的真实身份。</p>'
                                },
                                Sms: {},
                                Ocr: {
                                    IsManualInput: !0,
                                    Backend: !1,
                                    AllowModifyType: "100",
                                    IsAddress: !1,
                                    IsCheckIdInfo: !1,
                                    SourceType: 2,
                                    IsHideManualInputTakePhotoBtn: !1
                                },
                                LiveFour1V1: {
                                    MaxDuration: 4,
                                    DetailType: !1,
                                    ForceWatchVideoTime: 5,
                                    ImportantTips: ""
                                },
                                LiveAction1V1: {},
                                LiveSilence1V1: {},
                                Fail: {
                                    IsShowQuitBtn: !1,
                                    ExitBtnText: "退出实名认证",
                                    RetryBtnText: "重新验证",
                                    CustomFailInfo: {}
                                },
                                Success: {
                                    SubTipsName: "验证成功",
                                    SuccessTips: "请点击下一步继续您的操作",
                                    AutoSkip: !1
                                }
                            };
                            i(!0, r, o.Data.config);
                            var n = r;
                            console.log("final cmsConfig"), console.log(n), wx.verifySysInfo = wx.getSystemInfoSync(), console.log(wx.verifySysInfo);
                            var s = "ios" === wx.verifySysInfo.platform ? n.JustForMp.iOSVerLimit : n.JustForMp.androidVerLimit;
                            if ("devtools" !== wx.verifySysInfo.platform && s && t.compareVersion(s, wx.verifySysInfo.version) > 0) return wx.hideLoading(), void wx.showModal({
                                title: "提示",
                                content: "当前微信版本低于".concat(s, "，无法使用该功能，请升级到最新微信版本后重试。"),
                                showCancel: !1
                            });
                            if (wx.verifySysInfo.environment && "wxwork" === wx.verifySysInfo.environment) return wx.showModal({
                                title: "提示",
                                content: "企业微信暂不支持使用此功能，请使用微信进行操作",
                                showCancel: !1
                            }), !1;
                            if (n = a("", n), wx.verify_CMSConfig = n, n.Common.IsWxNative && !n.Common.Flow.includes("Ocr") && n.Common.IsHideIndexWhenNative) {
                                console.log("直接调用微信原生接口");
                                var l = n.Common.WxVerifyTypeIsVideo,
                                    c = n.Common.WxCheckAliveType;
                                t.startNativeVerify(l, c, wx.verifyBaseUrl, e.data.token, wx.verifyFailureFunc, (function(o) {
                                    var t = {
                                        BizToken: e.data.token,
                                        ErrorCode: o.ErrorCode,
                                        ErrorMsg: o.ErrorMsg
                                    };
                                    0 === o.ErrorCode ? wx.verifySuccessFunc(t) : wx.verifyFailureFunc(t)
                                }))
                            } else console.log("进入验证页面"), wx.navigateTo({
                                url: "/verify_mpsdk/index/index?isNotice=" + !1
                            })
                        } else wx.showModal({
                            title: "提示",
                            content: o.ErrorMsg,
                            showCancel: !1
                        })
                    }))) : wx.showModal({
                        title: "提示",
                        content: "调用SDK失败,token格式错误！",
                        showCancel: !1
                    })
                } else {
                    var o = {
                        ErrorCode: -100,
                        ErrorMsg: "调用SDK失败，wx.startVerify传入参数缺少！"
                    };
                    wx.showModal({
                        title: "提示",
                        content: o.ErrorMsg,
                        showCancel: !1
                    })
                }
            }
        }
    };
});
define("verify_mpsdk/utils/extend.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/typeof"),
        r = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        o = Object.prototype.hasOwnProperty,
        e = o.toString,
        n = e.call(Object),
        c = function(t) {
            var c, i;
            return !(!t || "[object Object]" !== toString.call(t) || (c = r(t)) && ("function" != typeof(i = o.call(c, "constructor") && c.constructor) || e.call(i) !== n))
        },
        i = function(t) {
            return "function" == typeof t
        };
    module.exports = {
        extend: function r() {
            var o, e, n, u, l, a, f = arguments[0] || {},
                p = 1,
                y = arguments.length,
                s = !1;
            for ("boolean" == typeof f && (s = f, f = arguments[p] || {}, p++), "object" == t(f) || i(f) || (f = {}), p === y && (f = this, p--); p < y; p++)
                if (null != (o = arguments[p]))
                    for (e in o) n = f[e], f !== (u = o[e]) && (s && u && (c(u) || (l = Array.isArray(u))) ? (l ? (l = !1, a = n && Array.isArray(n) ? n : []) : a = n && c(n) ? n : {}, f[e] = r(s, a, u)) : void 0 !== u && (f[e] = u));
            return f
        }
    };
});
define("verify_mpsdk/utils/log.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    module.exports = {
        version: "v1.0.12",
        getCmsConfigErr: "GET_CMSCONFIG_ERROR",
        getCmsConfigCatch: "GET_CMSCONFIG_CATCH",
        requestFail: "REQUEST_FAIL",
        requestCatch: "REQUEST_CATCH",
        getTheNoticeErr: "GET_NOTICE_ERROR",
        sendSmsCodeErr: "SEND_SMSCODE_ERROR",
        verifySmsCodeErr: "VERIFY_SMSCODE_ERROR",
        updateIdinfoErr: "UPDATE_IDINFI_ERROR",
        checkIdinfoErr: "CHECK_IDINFO_ERROR",
        ocrinfoErr: "OCR_INFO_ERROR",
        ocrinfoUploadErr: "OCR_INFO_UPLOAD_ERROR",
        ocrinfoUploadFail: "OCR_INFO_UPLOAD_FAIL",
        preLivingbodyExecErr: "PRE_LIVINGBODY_EXEC_ERROR",
        livingbodyVerifyErr: "LIVINGBODY_VERIFY_ERROR",
        exitVerifyFail: "EXIT_VERIFY_FAIL",
        lipcodeErr: "LIP_CODE_ERROR",
        memoryWarn: "MEMORY_WARNING"
    };
});
define("verify_mpsdk/utils/regenerator-runtime/runtime.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../@babel/runtime/helpers/typeof");
    ! function(r) {
        var e, n = Object.prototype,
            o = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag",
            h = "object" == ("undefined" == typeof module ? "undefined" : t(module)),
            f = r.regeneratorRuntime;
        if (f) h && (module.exports = f);
        else {
            (f = r.regeneratorRuntime = h ? module.exports : {}).wrap = L;
            var s = "suspendedStart",
                l = "suspendedYield",
                p = "executing",
                y = "completed",
                v = {},
                d = {};
            d[a] = function() {
                return this
            };
            var g = Object.getPrototypeOf,
                m = g && g(g(F([])));
            m && m !== n && o.call(m, a) && (d = m);
            var w = _.prototype = E.prototype = Object.create(d);
            b.prototype = w.constructor = _, _.constructor = b, _[u] = b.displayName = "GeneratorFunction", f.isGeneratorFunction = function(t) {
                var r = "function" == typeof t && t.constructor;
                return !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name))
            }, f.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(w), t
            }, f.awrap = function(t) {
                return {
                    __await: t
                }
            }, j(O.prototype), O.prototype[c] = function() {
                return this
            }, f.AsyncIterator = O, f.async = function(t, r, e, n) {
                var o = new O(L(t, r, e, n));
                return f.isGeneratorFunction(r) ? o : o.next().then((function(t) {
                    return t.done ? t.value : o.next()
                }))
            }, j(w), w[u] = "Generator", w[a] = function() {
                return this
            }, w.toString = function() {
                return "[object Generator]"
            }, f.keys = function(t) {
                var r = [];
                for (var e in t) r.push(e);
                return r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var n = r.pop();
                            if (n in t) return e.value = n, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, f.values = F, P.prototype = {
                constructor: P,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t)
                        for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var r = this;

                    function n(n, o) {
                        return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var u = o.call(a, "catchLoc"),
                                h = o.call(a, "finallyLoc");
                            if (u && h) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!h) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, r) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                },
                complete: function(t, r) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), v
                },
                finish: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), v
                    }
                },
                catch: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                N(e)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: F(t),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = e), v
                }
            }
        }

        function L(t, r, e, n) {
            var o = r && r.prototype instanceof E ? r : E,
                i = Object.create(o.prototype),
                a = new P(n || []);
            return i._invoke = function(t, r, e) {
                var n = s;
                return function(o, i) {
                    if (n === p) throw new Error("Generator is already running");
                    if (n === y) {
                        if ("throw" === o) throw i;
                        return S()
                    }
                    for (e.method = o, e.arg = i;;) {
                        var a = e.delegate;
                        if (a) {
                            var c = k(a, e);
                            if (c) {
                                if (c === v) continue;
                                return c
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if (n === s) throw n = y, e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = p;
                        var u = x(t, r, e);
                        if ("normal" === u.type) {
                            if (n = e.done ? y : l, u.arg === v) continue;
                            return {
                                value: u.arg,
                                done: e.done
                            }
                        }
                        "throw" === u.type && (n = y, e.method = "throw", e.arg = u.arg)
                    }
                }
            }(t, e, a), i
        }

        function x(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function E() {}

        function b() {}

        function _() {}

        function j(t) {
            ["next", "throw", "return"].forEach((function(r) {
                t[r] = function(t) {
                    return this._invoke(r, t)
                }
            }))
        }

        function O(r) {
            var e;
            this._invoke = function(n, i) {
                function a() {
                    return new Promise((function(e, a) {
                        ! function e(n, i, a, c) {
                            var u = x(r[n], r, i);
                            if ("throw" !== u.type) {
                                var h = u.arg,
                                    f = h.value;
                                return f && "object" == t(f) && o.call(f, "__await") ? Promise.resolve(f.__await).then((function(t) {
                                    e("next", t, a, c)
                                }), (function(t) {
                                    e("throw", t, a, c)
                                })) : Promise.resolve(f).then((function(t) {
                                    h.value = t, a(h)
                                }), (function(t) {
                                    return e("throw", t, a, c)
                                }))
                            }
                            c(u.arg)
                        }(n, i, e, a)
                    }))
                }
                return e = e ? e.then(a, a) : a()
            }
        }

        function k(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
                if (r.delegate = null, "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return", r.arg = e, k(t, r), "throw" === r.method)) return v;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var o = x(n, t.iterator, r.arg);
            if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
            var i = o.arg;
            return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, v) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
        }

        function G(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function N(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r
        }

        function P(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(G, this), this.reset(!0)
        }

        function F(t) {
            if (t) {
                var r = t[a];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        i = function r() {
                            for (; ++n < t.length;)
                                if (o.call(t, n)) return r.value = t[n], r.done = !1, r;
                            return r.value = e, r.done = !0, r
                        };
                    return i.next = i
                }
            }
            return {
                next: S
            }
        }

        function S() {
            return {
                value: e,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")());
});
define("verify_mpsdk/utils/util.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var r = require("../../@babel/runtime/helpers/objectSpread2"),
        e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        o = require("../../@babel/runtime/helpers/asyncToGenerator"),
        t = (require("./regenerator-runtime/runtime"), require("./log"));
    var n = function(r) {
            if (!r || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(r)) return !1;
            if (!{
                    11: "北京",
                    12: "天津",
                    13: "河北",
                    14: "山西",
                    15: "内蒙古",
                    21: "辽宁",
                    22: "吉林",
                    23: "黑龙江 ",
                    31: "上海",
                    32: "江苏",
                    33: "浙江",
                    34: "安徽",
                    35: "福建",
                    36: "江西",
                    37: "山东",
                    41: "河南",
                    42: "湖北 ",
                    43: "湖南",
                    44: "广东",
                    45: "广西",
                    46: "海南",
                    50: "重庆",
                    51: "四川",
                    52: "贵州",
                    53: "云南",
                    54: "西藏 ",
                    61: "陕西",
                    62: "甘肃",
                    63: "青海",
                    64: "宁夏",
                    65: "新疆",
                    71: "台湾",
                    81: "香港",
                    82: "澳门",
                    91: "国外"
                }[r.substr(0, 2)]) return !1;
            if (18 === r.length) {
                r = r.split("");
                for (var e = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], o = 0, t = 0; t < 17; t++) o += r[t] * e[t];
                var n = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][o % 11];
                if ("x" === r[17] || "X" === r[17]) return n === r[17].toUpperCase();
                if (n !== parseInt(r[17])) return !1
            }
            return !0
        },
        s = function() {
            var r = o(e().mark((function r(o, t, n, i) {
                var c, l;
                return e().wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.prev = 0, c = {
                                url: "".concat(o, "/api/liveness/getWxUserIdKey?BizToken=").concat(t)
                            }, wx.showLoading({
                                title: "加载中...",
                                mask: !0
                            }), r.next = 5, a(c);
                        case 5:
                            l = r.sent, wx.hideLoading(), i(l), r.next = 12;
                            break;
                        case 9:
                            r.prev = 9, r.t0 = r.catch(0), console.log(r.t0), wx.hideLoading(), 15 === r.t0.ErrorCode || 14 === r.t0.ErrorCode ? (15 === r.t0.ErrorCode ? r.t0.ErrorMsg = "当前BizToken已过期，请重试" : 14 === r.t0.ErrorCode && (r.t0.ErrorMsg = "当前BizToken已验证完成"), n({
                                BizToken: t,
                                ErrorCode: r.t0.ErrorCode,
                                ErrorMsg: r.t0.ErrorMsg
                            })) : -1 === r.t0.ErrorCode ? wx.showModal({
                                title: "提示",
                                content: r.t0.ErrorMsg,
                                showCancel: !1
                            }) : wx.showModal({
                                title: "提示",
                                content: r.t0.ErrorMsg,
                                confirmText: "重试",
                                confirmColor: "#2d72f1",
                                success: function(r) {
                                    r.confirm && s(o, t, n, i)
                                }
                            });
                        case 12:
                        case "end":
                            return r.stop()
                    }
                }), r, null, [
                    [0, 9]
                ])
            })));
            return function(e, o, t, n) {
                return r.apply(this, arguments)
            }
        }(),
        a = function(r) {
            return console.log("请求 ".concat(r.url)), new Promise((function(e, o) {
                try {
                    wx.request({
                        url: r.url,
                        method: "POST",
                        data: {},
                        success: function(r) {
                            console.log("request success:", r.data), 0 === r.data.ErrorCode ? e(r.data.Data.UserIdKey) : o(r.data)
                        },
                        fail: function(r) {
                            console.log("requestPromise error:", r), r.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || r.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? o({
                                ErrorCode: 101,
                                ErrorMsg: "网络异常，请稍后重试"
                            }) : "request:fail url not in domain list" === r.errMsg ? o({
                                ErrorCode: -1,
                                ErrorMsg: "接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"
                            }) : o({
                                ErrorCode: 101,
                                ErrorMsg: r.errMsg
                            })
                        }
                    })
                } catch (r) {
                    console.log("捕获error")
                }
            }))
        },
        i = function() {
            var r = o(e().mark((function r(o, t, n, s, a, l) {
                var u;
                return e().wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.prev = 0, wx.showLoading({
                                title: "加载中...",
                                mask: !0
                            }), r.next = 4, c(o, t, n, s, a);
                        case 4:
                            u = r.sent, wx.hideLoading(), l(u), r.next = 11;
                            break;
                        case 8:
                            r.prev = 8, r.t0 = r.catch(0), console.log(r.t0), wx.hideLoading(), -1 === r.t0.ErrorCode ? wx.showModal({
                                title: "提示",
                                content: r.t0.ErrorMsg,
                                showCancel: !1
                            }) : wx.showModal({
                                title: "提示",
                                content: r.t0,
                                confirmText: "重试",
                                confirmColor: "#2d72f1",
                                showCancel: !1,
                                success: function(r) {
                                    r.confirm && i(o, t, n, s, a, l)
                                }
                            });
                        case 11:
                        case "end":
                            return r.stop()
                    }
                }), r, null, [
                    [0, 8]
                ])
            })));
            return function(e, o, t, n, s, a) {
                return r.apply(this, arguments)
            }
        }(),
        c = function(r, e, o, t, n) {
            return console.log("请求 ".concat(r, "/api/liveness/getWxResult?BizToken=").concat(e)), new Promise((function(s, a) {
                wx.request({
                    url: "".concat(r, "/api/liveness/getWxResult?BizToken=").concat(e),
                    method: "POST",
                    data: {
                        VerifyResult: o || "",
                        ErrCode: t.toString(),
                        ErrMsg: n
                    },
                    success: function(r) {
                        console.log("request success:", r.data), r.data.ErrorCode, s(r.data)
                    },
                    fail: function(r) {
                        console.log("requestPromise error:", r), r.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || r.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? a({
                            ErrorCode: 101,
                            ErrorMsg: "网络异常，请稍后重试"
                        }) : "request:fail url not in domain list" === r.errMsg ? a({
                            ErrorCode: -1,
                            ErrorMsg: "接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"
                        }) : a({
                            ErrorCode: 101,
                            ErrorMsg: r.errMsg
                        })
                    }
                })
            }))
        },
        l = function() {
            return new Promise((function(r, e) {
                try {
                    wx.getNetworkType({
                        success: function(e) {
                            r(e)
                        },
                        fail: function(r) {
                            console.log("requestPromise error:", r), e({
                                ErrorCode: 101,
                                ErrorMsg: r.errMsg
                            })
                        }
                    })
                } catch (r) {
                    console.log("捕获error")
                }
            }))
        },
        u = function() {
            var n = o(e().mark((function o(n, s, a) {
                var i;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (wx.verify_TOKEN) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return i = {
                                tag: n,
                                error: r({
                                    version: t.version,
                                    signalStrength: null
                                }, s),
                                source: "miniprogram"
                            }, e.prev = 3, i.system = wx.getSystemInfoSync(), e.next = 7, l();
                        case 7:
                            i.error.signalStrength = e.sent, e.next = 12;
                            break;
                        case 10:
                            e.prev = 10, e.t0 = e.catch(3);
                        case 12:
                            return e.abrupt("return", (a && (i.extra = a), console.log("上报错误：", i), new Promise((function(r, e) {
                                wx.request({
                                    url: "".concat(wx.verifyBaseUrl, "/api/report/reportError"),
                                    method: "POST",
                                    data: {
                                        token: wx.verify_TOKEN,
                                        errorData: JSON.stringify(i)
                                    },
                                    success: function(e) {
                                        r(e)
                                    },
                                    fail: function(r) {
                                        e(r)
                                    }
                                })
                            }))));
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), o, null, [
                    [3, 10]
                ])
            })));
            return function(r, e, o) {
                return n.apply(this, arguments)
            }
        }(),
        d = function(r, e, o) {
            return console.log("reportMonitor", r, e, o), new Promise((function(n, s) {
                wx.request({
                    url: "".concat(wx.verifyBaseUrl, "/api/report/reportMonitor"),
                    method: "POST",
                    data: {
                        token: r,
                        pathName: e,
                        platForm: 2,
                        errorCode: String(o),
                        version: t.version
                    },
                    success: function(r) {
                        n(r)
                    },
                    fail: function(r) {
                        s(r)
                    }
                })
            }))
        };
    module.exports = {
        requestPromise: function r(e) {
            var o = e.url,
                n = e.method,
                s = void 0 === n ? "POST" : n,
                a = e.data,
                i = e.header,
                c = void 0 === i ? {
                    "Content-Type": "application/json"
                } : i,
                l = e.reTry;
            return console.log("requestPromise start:", wx.verify_TOKEN, o, a), new Promise((function(n, i) {
                wx.request({
                    url: "".concat(wx.verifyBaseUrl) + o,
                    method: s,
                    data: a,
                    header: c,
                    success: function(r) {
                        console.log("requestPromise success:", r), n(r)
                    },
                    fail: function(s) {
                        console.log("requestPromise error:", s), l && l.tryCount && l.tryCount > 0 ? (l.tryCount--, wx.verifyBaseUrl = "https://faceid.qcloud.com", setTimeout((function() {
                            n(r(e))
                        }), l.retryDelay || 0)) : (wx.verifyBaseUrl = "https://faceid.qq.com", i(s)), u(t.requestFail, {
                            url: "".concat(wx.verifyBaseUrl) + o,
                            err: s
                        })
                    }
                })
            }))
        },
        validate: function(r, e) {
            switch (e) {
                case "signature":
                    return /^\S{74}={2}$/.test(r);
                case "appid":
                    return "string" == typeof r && /^\d{4}$/.test(r);
                case "uid":
                    return r;
                case "sms_phone":
                    return /^1\d{10}$/.test(r);
                case "sms_verifyCode":
                    return /^\d{4}$/.test(r);
                case "idcard":
                    return n(r);
                case "idname":
                    return r && !r.match(/[A-z0-9]/g);
                case "idaddress":
                    return !!r;
                case "end_path":
                    return /^\//.test(r);
                case "token":
                    return /^[a-zA-Z0-9-]{36}$/.test(r)
            }
        },
        compareVersion: function(r, e) {
            r = r.split("."), e = e.split(".");
            for (var o = Math.max(r.length, e.length); r.length < o;) r.push("0");
            for (; e.length < o;) e.push("0");
            for (var t = 0; t < o; t++) {
                var n = parseInt(r[t]),
                    s = parseInt(e[t]);
                if (n > s) return 1;
                if (n < s) return -1
            }
            return 0
        },
        showModal: function(r, e) {
            wx.showModal({
                title: r,
                content: e.replace(/(^\s*)|(\s*$)/g, ""),
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#2d72f1",
                success: function(r) {
                    r.confirm || r.cancel
                }
            })
        },
        request: function r(e, o) {
            var n = e.url,
                s = e.method,
                a = void 0 === s ? "POST" : s,
                i = e.data,
                c = e.reTry,
                l = e.header,
                d = void 0 === l ? {
                    "Content-Type": "application/json"
                } : l;
            console.log("requestPromise start:", n, i);
            try {
                wx.request({
                    url: "".concat(wx.verifyBaseUrl) + n,
                    method: a,
                    data: i,
                    header: d,
                    success: function(r) {
                        console.log("request success:", r), 200 === r.statusCode && r.data ? 0 === r.data.ErrorCode || 0 === r.data.code ? o({
                            ErrorCode: 0,
                            Data: r.data.Data || r.data.data
                        }) : o({
                            ErrorCode: r.data.ErrorCode,
                            ErrorMsg: r.data.ErrorMsg,
                            Data: r.data.Data || r.data.data
                        }) : o({
                            ErrorCode: -107,
                            ErrorMsg: "request请求异常，请稍后重试"
                        })
                    },
                    fail: function(s) {
                        console.log("request error:", s), c && c.tryCount && c.tryCount > 0 ? (c.tryCount--, wx.verifyBaseUrl = "https://faceid.qcloud.com", setTimeout((function() {
                            r(e, o)
                        }), c.retryDelay || 0)) : s.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || s.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? o({
                            ErrorCode: 101,
                            ErrorMsg: "网络异常，请稍后重试"
                        }) : o({
                            ErrorCode: -107,
                            ErrorMsg: "request请求异常，请稍后重试"
                        }), u(t.requestFail, {
                            url: "".concat(wx.verifyBaseUrl) + n,
                            err: s
                        })
                    }
                })
            } catch (e) {
                console.log("request error:", e), o({
                    ErrorCode: -107,
                    ErrorMsg: "request请求异常，请稍后重试"
                }), u(t.requestCatch, {
                    url: "".concat(wx.verifyBaseUrl) + n,
                    err: e
                })
            }
        },
        uploadFile: function(r, e) {
            var o = this;
            console.log(r), wx.uploadFile({
                url: r.url,
                filePath: r.filePath,
                name: "file",
                formData: r.data,
                success: function(r) {
                    if (console.log("uploadFile| ", r), 200 === r.statusCode) {
                        console.log(r);
                        var t = JSON.parse(r.data);
                        console.log("resTemp"), console.log(t), 0 === t.ErrorCode ? (console.log(o.data), e({
                            ErrorCode: 0,
                            Data: t
                        })) : e({
                            ErrorCode: t.ErrorCode,
                            ErrorMsg: "上传视频失败，" + t.ErrorMsg
                        })
                    } else e({
                        ErrorCode: 101,
                        ErrorMsg: "上传视频失败 " + r.statusCode
                    })
                },
                fail: function(r) {
                    console.log("upload img fail", r), e({
                        ErrorCode: 101,
                        ErrorMsg: "上传视频失败, " + r.errMsg
                    })
                }
            }).onProgressUpdate((function(r) {
                o.setData({
                    "livingbody.uploadProcess": r.progress - 10 < 0 ? 0 : r.progress - 10
                }), console.log("progress", r.progress), console.log("already upload data", r.totalBytesSent), console.log("all upload data", r.totalBytesExpectedToSend)
            }))
        },
        startNativeVerify: function(r, e, o, t, n, a) {
            var c = r ? "startFacialRecognitionVerifyAndUploadVideo" : "startFacialRecognitionVerify";
            s(o, t, n, (function(n) {
                console.log("获取userIdKey成功:", n);
                var s = wx.startFacialRecognitionVerify;
                r && (s = wx.startFacialRecognitionVerifyAndUploadVideo), s({
                    userIdKey: n,
                    checkAliveType: e,
                    success: function(r) {
                        i(o, t, r.verifyResult, r.errCode, r.errMsg, (function(r) {
                            console.log(r), a(r)
                        })), d(t, c, 0)
                    },
                    fail: function(r) {
                        if (console.log(r), u(c, r), 90100 === r.errCode) return !1;
                        r.errCode || 0 === r.errCode ? i(o, t, r.verifyResult, r.errCode, r.errMsg, (function(r) {
                            d(t, c, r.ErrorCode || -1), a(r)
                        })) : wx.showModal({
                            title: "提示",
                            content: r.errMsg,
                            showCancel: !1
                        })
                    }
                })
            }))
        },
        reportError: u,
        reportMonitor: d,
        checkIsSupportFacialRecognition: function(r, e, o) {
            wx.checkIsSupportFacialRecognition({
                checkAliveType: e,
                success: function() {
                    o && o()
                },
                fail: function(r) {
                    wx.showModal({
                        title: "提示",
                        content: r.errMsg || "当前设备不支持人脸核身操作，请更换设备后重试",
                        showCancel: !1
                    }), r.errMsg && -1 === r.errMsg.indexOf("开发者工具") && u("checkIsSupportFacialRecognition", r, {
                        checkAliveType: e
                    })
                }
            })
        },
        getNetWorkData: l
    };
});
__wxRoute = 'verify_mpsdk/index/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'verify_mpsdk/index/index.js';
define("verify_mpsdk/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var i, o = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        e = require("../../@babel/runtime/helpers/asyncToGenerator"),
        t = (require("../utils/regenerator-runtime/runtime"), require("../utils/util")),
        a = require("../utils/log"),
        r = require("../config").sysFailInfo,
        s = (require("../main"), [14, 15]),
        n = [2002, 2003, 2006],
        c = "";
    Page({
        data: {
            curPage: null,
            cmsConfig: {},
            skipConfig: {},
            bizData: {},
            token: "",
            preClickBtnTime: 0,
            isNotCamera: !0,
            iKnowFuncs: [],
            index_rule: !1,
            show_about_dlg: !1,
            indexChecked: !1,
            indexDisableBtn: !0,
            show_auth_panel: !1,
            authInfo: "",
            isInfinityDisplay: !1,
            notice: {
                titie: "",
                content: ""
            },
            sms: {
                isForbiddenSmsBtn: !0,
                hintError: "",
                isEnableSendSms: !1,
                is60sGap: !1,
                sendSmsTtitle: "获取验证码",
                gapSec: 60,
                phoneNum: "",
                verifyCode: ""
            },
            ocr: {
                isShowTakePhoto: !1,
                isShowResult: !1,
                isShowGuide: !0,
                isShowPhotoPreView: !1,
                isPhotoFromCamera: !1,
                isFrontIdCard: !0,
                hintError: "",
                hintErrorResult: "",
                isForbiddenManualBtn: !0,
                isForbiddenResultBtn: !1,
                idcard: "",
                idname: "",
                idaddress: "",
                tempImagePath: "",
                ocrTitle: "请拍摄身份证人像面",
                verifycamFullScreen: "verifycamFullScreen",
                isToolsShow: !0,
                isEditTheOcrIsManualInput: !1,
                isInfinityDisplayOcrTitle: "",
                isInfinityDisplayOcrBottom: "",
                isInfinityDisplayOcrMiddle: "",
                frontMediaKey: "",
                backendMediaKey: ""
            },
            livingbody: {
                isShowGuide: !0,
                isShowCamera: !1,
                isShowProcess: !1,
                isShowDialog: !1,
                livingbodyNumber: "",
                isNotPrepareOk: !0,
                getCodeErrMsg: "",
                livingbodyTitle: "请保持正脸对准框内",
                isPrepare: !0,
                curNumberStatus: ["verifyCurrentNumber", "", "", ""],
                curNumber: ["·", "·", "·", "·"],
                isActionSeqNormal: "",
                livingbodyActionText: "",
                livingbodySilentText: "",
                uploadProcess: 0,
                showTestVideo: !1,
                video_preview: "",
                video_src: "",
                isInfinityDisplayHTTitle: "",
                isInfinityDisplayHTBottom: "",
                isInfinityDisplayHTMiddle: "",
                isInfinityDisplayHTActionPre: "",
                isInfinityDisplayHTNumberPre: "",
                isInfinityDisplayHTActionHint: "",
                isInfinityDisplayHTNumberHint: ""
            },
            failPage: {
                is_modal_showing: !1
            },
            successPage: {},
            failInfo: {}
        },
        onLoad: function(i) {
            var o = this;
            console.log("options=>", i), this.setData({
                cmsConfig: wx.verify_CMSConfig,
                token: wx.verify_TOKEN,
                bizData: wx.verify_BizData
            }), console.log("this.data.cmsConfig =", this.data.cmsConfig), console.log("this.data.token = ".concat(this.data.token)), console.log("wx.verifyBaseUrl = ".concat(wx.verifyBaseUrl)), console.log(this.data.cmsConfig.page.ocr.backend), wx.setNavigationBarTitle({
                title: this.data.cmsConfig.justForJumpVer.title,
                success: function() {
                    console.log("setNavigationBarTitle success!")
                },
                fail: function(i) {
                    console.log("setNavigationBarTitle failure!"), console.log(i)
                }
            }), wx.getSystemInfo({
                success: function(i) {
                    console.log(i);
                    var e = i.screenHeight / i.screenWidth >= 2;
                    i.screenHeight > 700 && e && o.setData({
                        isInfinityDisplay: !0,
                        "ocr.isInfinityDisplayOcrBottom": "isInfinityDisplayOcrBottom",
                        "ocr.isInfinityDisplayOcrMiddle": "isInfinityDisplayOcrMiddle",
                        "ocr.isInfinityDisplayOcrTitle": "isInfinityDisplayOcrTitle",
                        "livingbody.isInfinityDisplayHTBottom": "isInfinityDisplayHTBottom",
                        "livingbody.isInfinityDisplayHTMiddle": "isInfinityDisplayHTMiddle",
                        "livingbody.isInfinityDisplayHTTitle": "isInfinityDisplayHTTitle",
                        "livingbody.isInfinityDisplayHTActionPre": "isInfinityDisplayHTActionPre",
                        "livingbody.isInfinityDisplayHTNumberPre": "isInfinityDisplayHTNumberPre",
                        "livingbody.isInfinityDisplayHTActionHint": "isInfinityDisplayHTActionHint",
                        "livingbody.isInfinityDisplayHTNumberHint": "isInfinityDisplayHTNumberHint"
                    })
                }
            }), this.data.cmsConfig.IsHideIndexAlways ? this.indexToNext() : this.setData({
                curPage: 1
            })
        },
        onReady: function() {},
        onShow: function() {
            var i = this;
            this.data.show_auth_panel && setTimeout((function() {
                i.isAuthOk()
            }), 500)
        },
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {},
        showErrorToast: function(i) {
            var o = this;
            if (console.log("showErrorToast", i), 3 === this.data.curPage) {
                if (this.data.ocr.isShowResult) return void this.setData({
                    "ocr.hintErrorResult": i.error_msg
                });
                this.data.ocr.isShowTakePhoto && 101 !== i.ErrorCode && -107 !== i.ErrorCode && this.data.iKnowFuncs.push((function() {
                    o.reTakePhoto()
                }))
            }
            this.setData({
                showErrorMsg: !0,
                err: i
            })
        },
        switchDialog: function() {
            this.setData({
                showErrorMsg: !this.data.showErrorMsg
            }), 1 === this.data.iKnowFuncs.length && this.data.iKnowFuncs.pop()()
        },
        checkNetWork: function(i) {
            var o = this;
            wx.getNetworkType({
                success: function(e) {
                    "none" !== e.networkType ? i() : (console.log("Network is none"), o.showErrorToast({
                        ErrorCode: 101,
                        ErrorMsg: "网络异常，请稍后重试"
                    }))
                },
                fail: function(i) {
                    console.log("Get Network exception"), o.showErrorToast({
                        ErrorCode: 101,
                        ErrorMsg: "网络异常，请稍后重试"
                    })
                }
            })
        },
        checkRecordNetworkOk: function(i, o) {
            wx.getNetworkType({
                success: function(e) {
                    "none" !== e.networkType ? (console.log("network is OK"), i(e.networkType)) : (console.log("Network is none"), o({
                        ErrorCode: 101,
                        ErrorMsg: "网络异常，请稍后再试"
                    }))
                },
                fail: function(i) {
                    console.log("Get Network exception"), o({
                        ErrorCode: 101,
                        ErrorMsg: "网络异常，请稍后再试"
                    })
                }
            })
        },
        returnAllCheckNetWork: function(i) {
            wx.getNetworkType({
                success: function(o) {
                    i(o.networkType)
                },
                fail: function(o) {
                    i("none")
                }
            })
        },
        isNotAllowClick: function() {
            var i = +new Date;
            return i - this.data.preClickBtnTime < 1e3 ? (console.log("Click button gap < 1s, not allow exec"), !0) : (this.data.preClickBtnTime = i, console.log("Click button gap > 1s, allow exec"), !1)
        },
        exitVerify: function(i) {
            i.BizToken = this.data.token, i.ErrorCode = 0, this.data.bizData.endPath ? wx.verifySuccessFunc(i) : wx.navigateBack({
                success: function(o) {
                    wx.verifySuccessFunc(i)
                }
            })
        },
        exitVerifyFail: function(i) {
            i.BizToken = this.data.token, this.data.bizData.endPath ? -999 === i.ErrorCode ? wx.navigateBack({
                success: function() {}
            }) : (console.log("exitVerifyFail: this.data.bizData.endPath", this.data.bizData.endPath), wx.verifyFailureFunc(i)) : wx.navigateBack({
                success: function() {
                    -999 !== i.ErrorCode && wx.verifyFailureFunc(i)
                }
            })
        },
        switchIndexRule: function() {
            this.setData({
                index_rule: !this.data.index_rule
            })
        },
        switchAboutDlg: function() {
            this.setData({
                show_about_dlg: !this.data.show_about_dlg
            })
        },
        checkboxChange: function(i) {
            console.log("checkboxChange"), this.setData({
                indexDisableBtn: !this.data.indexDisableBtn
            })
        },
        startNativeVerify: function() {
            var i = this;
            console.log("直接调用微信原生接口");
            var o = this.data.cmsConfig,
                e = o.Common.WxVerifyTypeIsVideo,
                a = o.Common.WxCheckAliveType;
            t.startNativeVerify(e, a, wx.verifyBaseUrl, this.data.token, this.exitVerifyFail, (function(o) {
                var e = {
                    BizToken: i.data.token,
                    ErrorCode: o.ErrorCode,
                    ErrorMsg: o.ErrorMsg
                };
                0 === o.ErrorCode ? i.exitVerify(e) : i.exitVerifyFail(e)
            }))
        },
        indexToNext: (i = e(o().mark((function i() {
            var e;
            return o().wrap((function(i) {
                for (;;) switch (i.prev = i.next) {
                    case 0:
                        this.isNotAllowClick() || (e = this, this.checkNetWork((function() {
                            var i = e.data.cmsConfig;
                            if (!e.data.cmsConfig.Common.IsWxNative || e.data.cmsConfig.Common.Flow.includes("Ocr")) {
                                var o = 2;
                                i.isHideSmsPage && (o = i.isHideOcrPage ? 4 : 3), e.setData({
                                    curPage: o
                                }), (4 === o || 3 === o && !e.data.cmsConfig.page.ocr.isManualInput) && e.preLivingbodyExec()
                            } else e.startNativeVerify()
                        })));
                    case 1:
                    case "end":
                        return i.stop()
                }
            }), i, this)
        }))), function() {
            return i.apply(this, arguments)
        }),
        phoneNumChanged: function(i) {
            this.setData({
                "sms.hintError": ""
            });
            var o = i.detail.value;
            this.data.sms.phoneNum = o;
            var e = t.validate(o, "sms_phone");
            console.log("isPhoneOk: ".concat(e)), e && !this.data.sms.is60sGap && this.setData({
                "sms.isEnableSendSms": !0
            }), e || this.setData({
                "sms.isEnableSendSms": !1
            });
            var a = t.validate(this.data.sms.verifyCode, "sms_verifyCode");
            e && a ? this.setData({
                "sms.isForbiddenSmsBtn": !1
            }) : this.setData({
                "sms.isForbiddenSmsBtn": !0
            }), console.log("isEnableSendSms: ".concat(this.data.sms.isEnableSendSms))
        },
        sendVerifyCodeReq: function() {
            if (!this.isNotAllowClick()) {
                var i = this;
                this.checkNetWork((function() {
                    var o = {
                        url: "/api/common/sendSmsCode?BizToken=".concat(i.data.token),
                        data: {
                            PhoneNum: i.data.sms.phoneNum
                        },
                        reTry: {
                            tryCount: 3
                        }
                    };
                    wx.showLoading({
                        title: "短信发送中...",
                        mask: !0
                    }), t.request(o, (function(o) {
                        if (wx.hideLoading(), 0 === o.ErrorCode) {
                            i.setData({
                                "sms.is60sGap": !0,
                                "sms.isEnableSendSms": !1,
                                "sms.sendSmsTtitle": "重新发送"
                            });
                            var e = setInterval((function() {
                                i.data.sms.gapSec <= 1 && (clearInterval(e), i.setData({
                                    "sms.is60sGap": !1,
                                    "sms.gapSec": 60
                                }), t.validate(i.data.sms.phoneNum, "sms_phone") && i.setData({
                                    "sms.isEnableSendSms": !0
                                })), i.setData({
                                    "sms.gapSec": i.data.sms.gapSec - 1
                                })
                            }), 1e3)
                        } else {
                            if (s.includes(o.ErrorCode)) return void i.exitVerifyFail(o);
                            i.setData({
                                "sms.hintError": o.ErrorMsg
                            }), t.reportError(a.sendSmsCodeErr, o)
                        }
                    }))
                }))
            }
        },
        verifyCodeChanged: function(i) {
            this.setData({
                "sms.hintError": ""
            }), this.data.sms.verifyCode = i.detail.value;
            var o = t.validate(this.data.sms.verifyCode, "sms_verifyCode");
            t.validate(this.data.sms.phoneNum, "sms_phone") && o ? this.setData({
                "sms.isForbiddenSmsBtn": !1
            }) : this.setData({
                "sms.isForbiddenSmsBtn": !0
            })
        },
        smsToNext: function() {
            if (!this.isNotAllowClick()) {
                var i = this;
                this.checkNetWork((function() {
                    console.log(i.data.sms.phoneNum + " | " + i.data.sms.verifyCode);
                    var o = {
                        url: "/api/common/verifySmsCode?BizToken=".concat(i.data.token),
                        data: {
                            PhoneNum: i.data.sms.phoneNum,
                            VerifyCode: i.data.sms.verifyCode
                        },
                        reTry: {
                            tryCount: 3
                        }
                    };
                    wx.showLoading({
                        title: "加载中...",
                        mask: !0
                    }), t.request(o, (function(o) {
                        if (wx.hideLoading(), 0 === o.ErrorCode) {
                            var e = i.data.cmsConfig;
                            if (e.isJustSms) i.exitVerify({});
                            else {
                                var r = 3;
                                e.isHideOcrPage && (r = 4), i.setData({
                                    curPage: r
                                }), (4 === r || 3 === r && !i.data.cmsConfig.page.ocr.isManualInput) && i.preLivingbodyExec()
                            }
                        } else {
                            if (s.includes(o.ErrorCode)) return void i.exitVerifyFail(o);
                            i.setData({
                                "sms.hintError": o.ErrorMsg
                            })
                        }
                        t.reportError(a.verifySmsCodeErr, o)
                    }))
                }))
            }
        },
        idcartManualInputChanged: function(i) {
            var o = i.detail.value;
            this.data.ocr.idcard = o, this.manualInputChanged()
        },
        idnameManualInputChanged: function(i) {
            var o = i.detail.value;
            this.data.ocr.idname = o, this.manualInputChanged()
        },
        manualInputChanged: function(i) {
            this.setData({
                "ocr.hintError": ""
            });
            var o = t.validate(this.data.ocr.idcard, "idcard"),
                e = t.validate(this.data.ocr.idname, "idname"),
                a = !0;
            o || 18 !== this.data.ocr.idcard.length ? o && (e && (a = !1), this.setData({
                "ocr.isForbiddenManualBtn": a
            })) : this.setData({
                "ocr.hintError": "身份证号有误，请确认后重新输入"
            })
        },
        manualInputGoNext: function() {
            this.ocrCommonInputGoNext(!0)
        },
        ocrCommonInputGoNext: function(i) {
            var o = this;
            this.checkNetWork((function() {
                wx.showLoading({
                    title: "校验身份信息中...",
                    mask: !0
                });
                var e = 0;
                "android" === wx.verifySysInfo.platform && (e = 300), setTimeout((function() {
                    var e = {
                        url: "/api/ocr/updateidinfo?BizToken=".concat(o.data.token),
                        data: {
                            Name: o.data.ocr.idname,
                            IdCard: o.data.ocr.idcard
                        },
                        reTry: {
                            tryCount: 3
                        }
                    };
                    o.data.ocr.idaddress && (e.data.Address = o.data.ocr.idaddress), t.request(e, (function(e) {
                        if (wx.hideLoading(), 0 !== e.ErrorCode) {
                            if (s.includes(e.ErrorCode)) return void o.exitVerifyFail(e);
                            var r = {
                                "ocr.hintError": e.ErrorMsg
                            };
                            return i || (r = {
                                "ocr.hintErrorResult": e.ErrorMsg
                            }), o.setData(r), void t.reportError(a.updateIdinfoErr, e)
                        }
                        o.ocrGoNext(i)
                    }))
                }), e)
            }))
        },
        ocrGoNext: function(i) {
            var o = this,
                e = this;
            if (e.data.cmsConfig.page.ocr.isCheckIDInfo) {
                var r = {
                    url: "/api/ocr/checkidinfo?BizToken=".concat(this.data.token),
                    data: {
                        Name: this.data.ocr.idname,
                        IdCard: this.data.ocr.idcard
                    },
                    reTry: {
                        tryCount: 3
                    }
                };
                t.request(r, (function(r) {
                    if (0 !== r.ErrorCode) {
                        if (s.includes(r.ErrorCode)) return void e.exitVerifyFail(r);
                        var n = {
                            "ocr.hintError": r.ErrorMsg
                        };
                        return console.log(r.ErrorMsg), i || (n = {
                            "ocr.hintErrorResult": r.ErrorMsg
                        }), e.setData(n), void t.reportError(a.checkIdinfoErr, r)
                    }
                    o.ocrGoNextEnd()
                }))
            } else this.ocrGoNextEnd()
        },
        ocrGoNextEnd: function() {
            if (this.data.cmsConfig.isJustOcr) this.exitVerify({
                id_name: this.data.ocr.idname,
                id_number: this.data.ocr.idcard,
                id_address: this.data.ocr.idaddress
            });
            else {
                if (this.data.cmsConfig.Common.IsWxNative) return void this.startNativeVerify();
                this.setData({
                    curPage: 4
                }), this.preLivingbodyExec()
            }
        },
        manualInputTakePhone: function() {
            this.setData({
                "cmsConfig.page.ocr.isManualInput": !1,
                "ocr.isEditTheOcrIsManualInput": !0
            })
        },
        btnclick: function() {
            var i = this.data.cmsConfig.page.ocr.backend;
            console.log(i)
        },
        ocrStartTakePhoto: function() {
            var i = this;
            this.checkNetWork((function() {
                i.setData({
                    "ocr.isShowTakePhoto": !0,
                    isNotCamera: !1
                })
            }))
        },
        takePhotoWithCamera: function() {
            var i = this,
                o = this;
            wx.createCameraContext().takePhoto({
                quality: "noraml",
                success: function(e) {
                    console.log(e.tempImagePath), i.setData({
                        "ocr.tempImagePath": e.tempImagePath,
                        "ocr.isShowPhotoPreView": !0,
                        "ocr.ocrTitle": "照片预览",
                        "ocr.isPhotoFromCamera": !0
                    }), console.log(o.data.ocr.tempImagePath)
                },
                fail: function(i) {
                    wx.showToast({
                        title: "takePhoto function exception",
                        icon: "none"
                    })
                }
            })
        },
        chooseImg: function() {
            var i = this;
            wx.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album"],
                success: function(o) {
                    var e = o.tempFilePaths;
                    i.setData({
                        "ocr.tempImagePath": e[0],
                        "ocr.isShowPhotoPreView": !0,
                        "ocr.ocrTitle": "照片预览",
                        "ocr.isPhotoFromCamera": !1
                    }), i.setData({
                        "ocr.isToolsShow": !1
                    }), i.setData({
                        "ocr.isToolsShow": !0
                    })
                }
            })
        },
        reTakePhoto: function() {
            var i = this.data.ocr.isFrontIdCard ? "请拍摄身份证人像面" : "请拍摄身份证国徽面";
            this.setData({
                "ocr.tempImagePath": "",
                "ocr.isShowPhotoPreView": !1,
                "ocr.ocrTitle": i
            })
        },
        startUploadAndOcr: function() {
            var i = this,
                o = this;
            this.checkNetWork((function() {
                wx.showLoading({
                    title: "系统识别中",
                    mask: !0
                });
                var e = {
                    file: o.data.ocr.tempImagePath
                };
                console.log("upfile data", e), wx.uploadFile({
                    url: "".concat(wx.verifyBaseUrl, "/api/common/upLoadWxAppFile?BizToken=").concat(o.data.token),
                    filePath: i.data.ocr.tempImagePath,
                    name: "file",
                    formData: e,
                    success: function(e) {
                        if (console.log("uploadFile | ", e), 200 === e.statusCode) {
                            var r = JSON.parse(e.data);
                            if (0 === r.ErrorCode) {
                                var n = {
                                    url: "/api/ocr/ocrinfo?BizToken=".concat(i.data.token),
                                    data: {
                                        MediaKey: r.Data.MediaKey,
                                        PicType: i.data.ocr.isFrontIdCard ? 0 : 1
                                    },
                                    reTry: {
                                        tryCount: 3
                                    }
                                };
                                console.log("ocrinfo data", n), t.request(n, (function(e) {
                                    if (wx.hideLoading(), 0 === e.ErrorCode) {
                                        if (i.data.ocr.isFrontIdCard && i.setData({
                                                "ocr.idcard": e.Data.id,
                                                "ocr.idname": e.Data.name,
                                                "ocr.idaddress": e.Data.address
                                            }), i.data.ocr.isFrontIdCard && i.data.cmsConfig.page.ocr.backend) return void i.setData({
                                            "ocr.tempImagePath": "",
                                            "ocr.isShowPhotoPreView": !1,
                                            "ocr.ocrTitle": "请拍摄身份证国徽面",
                                            "ocr.isFrontIdCard": !1
                                        });
                                        i.setData({
                                            "ocr.isShowResult": !0,
                                            isNotCamera: !0,
                                            "ocr.verifycamFullScreen": "verifycamFullScreen"
                                        })
                                    } else {
                                        if (s.includes(e.ErrorCode)) return void o.exitVerifyFail(e);
                                        i.showErrorToast(e), t.reportError(a.ocrinfoErr, e)
                                    }
                                }))
                            } else wx.hideLoading(), i.showErrorToast({
                                ErrorCode: 101,
                                ErrorMsg: r.ErrorMsg
                            }), t.reportError(a.ocrinfoUploadErr, e)
                        } else wx.hideLoading(), i.showErrorToast({
                            ErrorCode: 101,
                            ErrorMsg: "上传图片失败"
                        }), t.reportError(a.ocrinfoUploadErr, e)
                    },
                    fail: function(o) {
                        console.log("upload img fail", o), wx.hideLoading(), i.showErrorToast({
                            ErrorCode: 101,
                            ErrorMsg: "上传图片失败"
                        }), t.reportError(a.ocrinfoUploadFail, o)
                    }
                })
            }))
        },
        idnameInputChanged: function(i) {
            this.data.ocr.idname = i.detail.value, this.ocrCommonInputCheck()
        },
        idcartInputChanged: function(i) {
            this.data.ocr.idcard = i.detail.value, this.ocrCommonInputCheck()
        },
        idaddressInputChanged: function(i) {
            this.data.ocr.idaddress = i.detail.value, this.ocrCommonInputCheck()
        },
        ocrCommonInputCheck: function() {
            this.setData({
                "ocr.hintErrorResult": ""
            });
            var i = t.validate(this.data.ocr.idcard, "idcard"),
                o = t.validate(this.data.ocr.idname, "idname"),
                e = t.validate(this.data.ocr.idaddress, "idaddress"),
                a = !0;
            i && o && (a = !1), this.data.cmsConfig.page.ocr.isAddress && !e && (a = !0), this.setData({
                "ocr.isForbiddenResultBtn": a
            })
        },
        ocrInputGoNext: function(i) {
            if (t.validate(this.data.ocr.idcard, "idcard"))
                if (t.validate(this.data.ocr.idname, "idname")) {
                    if (this.data.cmsConfig.page.ocr.isAddress && !t.validate(this.data.ocr.idaddress, "idaddress")) return void this.setData({
                        "ocr.hintErrorResult": "住址格式错误"
                    });
                    console.log("go next"), this.ocrCommonInputGoNext(!1)
                } else this.setData({
                    "ocr.hintErrorResult": "姓名格式错误"
                });
            else this.setData({
                "ocr.hintErrorResult": "身份证号格式错误"
            })
        },
        switchLivingbodyDialog: function(i) {
            this.setData({
                "livingbody.isShowDialog": !this.data.livingbody.isShowDialog
            })
        },
        preLivingbodyExec: function() {
            var i = this,
                o = this;
            if (4 !== this.data.curPage || 0 !== this.data.cmsConfig.livingbodyType && 1 !== this.data.cmsConfig.livingbodyType) o.getAuth();
            else {
                var e = {
                    url: "/api/liveness/lipcode?BizToken=".concat(o.data.token),
                    data: {},
                    reTry: {
                        tryCount: 3
                    }
                };
                1 === o.data.cmsConfig.livingbodyType && (e.url = "/api/liveness/actioncode?BizToken=".concat(o.data.token)), t.request(e, (function(e) {
                    if (0 === e.ErrorCode) {
                        console.log("Got the LipCode：" + e.Data.LipCode), console.log("Got the ActionCode:" + e.Data.ActionCode);
                        var r = {
                            "livingbody.livingbodyNumber": e.Data.LipCode
                        };
                        1 === o.data.cmsConfig.livingbodyType && (r = {
                            "livingbody.isActionSeqNormal": "21" === e.Data.ActionCode.join("")
                        }), i.setData(r), o.getAuth()
                    } else {
                        if (s.includes(e.ErrorCode)) return void o.exitVerifyFail(e);
                        i.setData({
                            "livingbody.getCodeErrMsg": e.ErrorMsg
                        }), o.getAuth(), t.reportError(a.preLivingbodyExecErr, e)
                    }
                }))
            }
        },
        getAuth: function() {
            var i = this;
            wx.authorize({
                scope: "scope.camera",
                success: function() {},
                fail: function() {
                    console.log("您未允许使用摄像头权限")
                },
                complete: function() {
                    4 === i.data.curPage ? wx.authorize({
                        scope: "scope.record",
                        success: function() {},
                        fail: function() {
                            console.log("您未允许使用录音权限")
                        },
                        complete: function() {
                            console.log("开始判断是否有权限"), i.isAuthOk()
                        }
                    }) : i.isAuthOk()
                }
            })
        },
        isAuthOk: function() {
            var i = this;
            wx.getSetting({
                success: function(o) {
                    console.log("获取授权信息成功");
                    var e = o.authSetting["scope.record"],
                        t = o.authSetting["scope.camera"];
                    if (4 === i.data.curPage)
                        if (e && t) i.setData({
                            show_auth_panel: !1,
                            authInfo: "摄像头、录音功能都已授权"
                        }), i.authOkToDo(), console.log("摄像头、录音功能都已授权");
                        else {
                            var a = "";
                            t || (a = "摄像头 "), e || (a += "录音功能"), a += "还未授权", console.log(a), i.setData({
                                show_auth_panel: !0,
                                authInfo: a
                            })
                        } else t ? i.setData({
                        show_auth_panel: !1,
                        authInfo: "摄像头已授权"
                    }) : i.setData({
                        show_auth_panel: !0,
                        authInfo: "摄像头未授权"
                    })
                },
                fail: function(i) {
                    console.log("获取收取信息失败", i)
                }
            })
        },
        authOkToDo: function() {
            console.log(this.data.livingbody.livingbodyNumber, this.data.cmsConfig.livingbodyType), 0 === this.data.cmsConfig.livingbodyType && "" === this.data.livingbody.livingbodyNumber || 1 === this.data.cmsConfig.livingbodyType && "" === this.data.livingbody.isActionSeqNormal ? this.theLivingBodyNumberMustBeOk() : (this.livingbodyAutoShowDialog(), this.setData({
                "livingbody.isNotPrepareOk": !1
            }))
        },
        theLivingBodyNumberMustBeOk: function() {
            var i = this;
            wx.showModal({
                title: "提示",
                content: "获取code失败，" + i.data.livingbody.getCodeErrMsg,
                showCancel: !1,
                confirmText: "重新获取",
                confirmColor: "#2d72f1",
                success: function(o) {
                    if (o.confirm) {
                        console.log("开始重新获取"), wx.showLoading({
                            title: "重新获取中...",
                            mask: !0
                        });
                        var e = {
                            url: "/api/liveness/lipcode?BizToken=".concat(i.data.token),
                            data: {},
                            reTry: {
                                tryCount: 3
                            }
                        };
                        1 === i.data.cmsConfig.livingbodyType && (e.url = "/api/liveness/actioncode?BizToken=".concat(i.data.token)), t.request(e, (function(o) {
                            if (wx.hideLoading(), 0 === o.ErrorCode) console.log("Got the LipCode：" + o.Data.LipCode), console.log("Got the ActionCode:" + o.Data.ActionCode), i.livingbodyAutoShowDialog(), 1 === i.data.cmsConfig.livingbodyType ? i.setData({
                                "livingbody.isActionSeqNormal": "21" === o.Data.ActionCode.join(""),
                                "livingbody.isNotPrepareOk": !1
                            }) : i.setData({
                                "livingbody.livingbodyNumber": o.Data.LipCode,
                                "livingbody.isNotPrepareOk": !1
                            });
                            else {
                                if (s.includes(o.ErrorCode)) return void i.exitVerifyFail(o);
                                i.setData({
                                    "livingbody.getCodeErrMsg": o.ErrorMsg
                                }), i.theLivingBodyNumberMustBeOk(), t.reportError(a.lipcodeErr, o)
                            }
                        }))
                    }
                }
            })
        },
        livingbodyAutoShowDialog: function() {
            var i = wx.getStorageSync("isAlreadyShowVideoRule");
            console.log("isAlreadyShowVideoRule:" + i), i || (this.setData({
                "livingbody.isShowDialog": !this.data.livingbody.isShowDialog
            }), wx.setStorage({
                key: "isAlreadyShowVideoRule",
                data: "true"
            }))
        },
        livingbodyStartToRecord: function() {
            var i = this;
            this.checkNetWork((function() {
                console.log("go"), i.setData({
                    "livingbody.isShowCamera": !0,
                    isNotCamera: !1
                }), setTimeout((function() {
                    i.checkRecordNetworkOk((function() {
                        c = wx.createCameraContext(), console.log("start startRecord", +new Date), c.startRecord({
                            success: function(o) {
                                console.log("startRecord success", +new Date);
                                var e = i.data.cmsConfig.livingbodyType,
                                    t = {
                                        "livingbody.isPrepare": !1
                                    },
                                    a = 0,
                                    r = 1200,
                                    s = 1e3,
                                    n = i.data.livingbody.livingbodyNumber + "",
                                    c = ["", "", "", ""],
                                    d = ["·", "·", "·", "·"],
                                    l = i.data.cmsConfig.page.livingbody.silentRecordTime - 1;
                                if (0 === e) d[a] = n[a], c[a] = "verifyCurrentNumber", t["livingbody.livingbodyTitle"] = "请大声朗读以下数字", t["livingbody.curNumberStatus"] = c, t["livingbody.curNumber"] = d, s = 1500;
                                else if (1 === e) {
                                    var u = i.data.livingbody.isActionSeqNormal;
                                    t["livingbody.livingbodyTitle"] = "请做以下动作", t["livingbody.livingbodyActionText"] = u ? "眨眨眼" : "张张嘴", r = 2e3
                                } else t["livingbody.livingbodySilentText"] = l, r = 1e3;
                                i.setData(t);
                                var h = setInterval((function() {
                                    if (0 === e) {
                                        if (3 === a) return clearInterval(h), void i.stopRecordAndProcess(s);
                                        d[++a] = n[a], c[a] = "verifyCurrentNumber", i.setData({
                                            "livingbody.curNumberStatus": c,
                                            "livingbody.curNumber": d
                                        })
                                    } else if (1 === e) {
                                        if (1 === a) return clearInterval(h), void i.stopRecordAndProcess(s);
                                        a++, i.setData({
                                            "livingbody.livingbodyActionText": i.data.livingbody.isActionSeqNormal ? "张张嘴" : "眨眨眼"
                                        })
                                    } else {
                                        if (0 === l) return clearInterval(h), void i.stopRecordAndProcess(s);
                                        l--, i.setData({
                                            "livingbody.livingbodySilentText": l
                                        })
                                    }
                                }), r)
                            },
                            fail: function(o) {
                                i.setData({
                                    "livingbody.isShowGuide": !0,
                                    "livingbody.isShowCamera": !1,
                                    isNotCamera: !0,
                                    "livingbody.isPrepare": !0
                                }), console.log("start record fail", +new Date, o), i.showErrorToast({
                                    ErrorCode: -108,
                                    ErrorMsg: "网络异常，".concat(o.errMsg)
                                })
                            },
                            timeoutCallback: function(o) {
                                console.log("timeoutCallback", o), i.setData({
                                    "livingbody.isShowGuide": !0,
                                    "livingbody.isShowCamera": !1,
                                    isNotCamera: !0,
                                    "livingbody.isPrepare": !0
                                }), i.showErrorToast({
                                    ErrorCode: -108,
                                    ErrorMsg: "startRecord timeoutCallback, 请重试！"
                                })
                            }
                        })
                    }), (function(o) {
                        i.setData({
                            "livingbody.isShowGuide": !0,
                            "livingbody.isShowCamera": !1,
                            isNotCamera: !0
                        }), i.showErrorToast(o)
                    }))
                }), 2e3)
            }))
        },
        stopRecordAndProcess: function(i) {
            var o = this;
            console.log("start stopRecord", +new Date), setTimeout((function() {
                console.log("stopTimeGap" + i), console.log(c.stopRecord), c.stopRecord({
                    success: function(i) {
                        console.log("stopRecord success", +new Date, i), wx.getFileInfo({
                            filePath: i.tempVideoPath,
                            success: function(e) {
                                var t = Math.round(e.size / 1024);
                                t > 30720 ? (o.setData({
                                    "livingbody.isShowGuide": !0,
                                    "livingbody.isShowCamera": !1,
                                    isNotCamera: !0,
                                    "livingbody.isPrepare": !0
                                }), o.showErrorToast({
                                    ErrorCode: -108,
                                    ErrorMsg: "视频大小超过限制"
                                })) : o.processTheVideo(i.tempVideoPath, t + "K")
                            },
                            fail: function(i) {
                                o.setData({
                                    "livingbody.isShowGuide": !0,
                                    "livingbody.isShowCamera": !1,
                                    isNotCamera: !0,
                                    "livingbody.isPrepare": !0
                                }), o.showErrorToast({
                                    ErrorCode: -108,
                                    ErrorMsg: "getFileInfo异常，".concat(i.errMsg)
                                })
                            }
                        })
                    },
                    fail: function(i) {
                        o.setData({
                            "livingbody.isShowGuide": !0,
                            "livingbody.isShowCamera": !1,
                            isNotCamera: !0,
                            "livingbody.isPrepare": !0
                        }), o.showErrorToast({
                            ErrorCode: -108,
                            ErrorMsg: "stopRecord异常，".concat(i.errMsg)
                        })
                    },
                    complete: function(i) {
                        console.log("complete", i)
                    }
                })
            }), i)
        },
        processTheVideo: function(i, o) {
            var e = this;
            this.checkRecordNetworkOk((function(t) {
                e.goToProcessPage(i, o)
            }), (function(t) {
                e.setData({
                    "livingbody.isShowGuide": !0,
                    "livingbody.isShowCamera": !1,
                    isNotCamera: !0,
                    "livingbody.isPrepare": !0
                }), wx.showModal({
                    title: "提示",
                    content: "网络异常，请检查网络后重试",
                    confirmText: "重试",
                    confirmColor: "#2d72f1",
                    success: function(t) {
                        t.confirm && e.processTheVideo(i, o)
                    }
                })
            }))
        },
        goToProcessPage: function(i, o) {
            this.setData({
                "livingbody.isShowGuide": !1,
                "livingbody.isShowCamera": !1,
                "livingbody.isShowProcess": !0,
                isNotCamera: !0,
                "livingbody.isPrepare": !0
            });
            var e = {
                url: "".concat(wx.verifyBaseUrl, "/api/common/upLoadWxAppFile?BizToken=").concat(this.data.token),
                filePath: i,
                data: {
                    file: i
                }
            };
            this.uploadTheVideo(e, o)
        },
        uploadTheVideo: function(i, o) {
            var e = this;
            this.returnAllCheckNetWork((function(t) {
                "wifi" !== t && "none" !== t ? wx.showModal({
                    title: "提示",
                    content: "视频大约".concat(o, "，在移动网络环境下上传会产生手机流量，确认继续？"),
                    confirmText: "继续",
                    confirmColor: "#2d72f1",
                    success: function(t) {
                        t.confirm ? e.uploadTheVideoMain(i, o) : e.setData({
                            "livingbody.isShowGuide": !0,
                            "livingbody.isShowCamera": !1,
                            "livingbody.isShowProcess": !1,
                            isNotCamera: !0,
                            "livingbody.isPrepare": !0
                        })
                    }
                }) : e.uploadTheVideoMain(i, o)
            }))
        },
        uploadTheVideoMain: function(i, o) {
            var e = this;
            t.uploadFile.call(this, i, (function(t) {
                if (console.log("上传视频成功"), console.log(t), 0 === t.ErrorCode) console.log("uploadSuccess"), console.log(t.Data.Data.MediaKey), e.livingbodyVerify(t.Data.Data.MediaKey);
                else {
                    var a = "网络异常，上传视频失败";
                    101 !== t.ErrorCode && (a = t.ErrorMsg), wx.showModal({
                        title: "提示",
                        content: a,
                        showCancel: !1,
                        confirmText: "重试",
                        confirmColor: "#2d72f1",
                        success: function(t) {
                            t.confirm && e.uploadTheVideo(i, o)
                        }
                    })
                }
            }))
        },
        livingbodyVerify: function(i) {
            var o = this,
                e = this.data.cmsConfig.livingbodyType,
                n = "/api/liveness/lipliveness";
            1 === e ? n = "/api/liveness/actionliveness" : 2 === e && (n = "/api/liveness/silentliveness");
            var c = {
                url: "".concat(n, "?BizToken=").concat(this.data.token),
                data: {
                    MediaKey: i
                },
                reTry: {
                    tryCount: 3
                }
            };
            t.request(c, (function(e) {
                if (console.log(e), 0 === e.ErrorCode) o.data.cmsConfig.page.success.isAutoSkip ? o.exitVerify({}) : o.setData({
                    curPage: 6
                });
                else if (-107 === e.ErrorCode || 101 === e.ErrorCode) wx.showModal({
                    title: "提示",
                    content: e.error_msg,
                    showCancel: !1,
                    confirmText: "重试",
                    confirmColor: "#2d72f1",
                    success: function(e) {
                        e.confirm && o.livingbodyVerify(i)
                    }
                }), t.reportError(a.livingbodyVerifyErr, e, {
                    apiUrl: "".concat(wx.verifyBaseUrl).concat(n, "?BizToken=").concat(o.data.token)
                });
                else if (s.includes(e.ErrorCode)) o.exitVerifyFail(e), t.reportError(a.exitVerifyFail, e, {
                    apiUrl: "".concat(wx.verifyBaseUrl).concat(n, "?BizToken=").concat(o.data.token)
                });
                else {
                    void 0 === e.ErrorCode && (e.ErrorCode = "9999", r[9999].tips1 = e.Data);
                    var c = e.ErrorCode + "",
                        d = {};
                    (d = o.data.cmsConfig.failInfo && o.data.cmsConfig.failInfo[c] ? o.data.cmsConfig.failInfo[c] : r[c] ? r[c] : {
                        img: "",
                        msg: e.ErrorMsg,
                        error_code: e.ErrorCode
                    }).Data = e.Data || {}, console.log("failInfo: ", d), o.setData({
                        failInfo: d,
                        curPage: 5
                    }), t.reportError(a.livingbodyVerifyErr, e, {
                        apiUrl: "".concat(wx.verifyBaseUrl).concat(n, "?BizToken=").concat(o.data.token)
                    })
                }
            }))
        },
        failReVerify: function() {
            if (console.log(this.data.failInfo), "无效请求" !== this.data.failInfo.msg && 14 !== this.data.failInfo.error_code) {
                var i = 4;
                if (n.includes(this.data.failInfo.error_code)) {
                    if (this.data.cmsConfig.isHideOcrPage) return void this.exitVerifyFail({
                        Token: this.data.token,
                        ErrorCode: this.data.failInfo.error_code,
                        ErrorMsg: this.data.failInfo.msg
                    });
                    i = 3, this.setData({
                        "ocr.isShowTakePhoto": !1,
                        "ocr.isShowResult": !1,
                        "ocr.isShowGuide": !0,
                        "ocr.isShowPhotoPreView": !1,
                        "ocr.isPhotoFromCamera": !1,
                        "ocr.isFrontIdCard": !0,
                        "ocr.hintError": "",
                        "ocr.hintErrorResult": "",
                        "ocr.isForbiddenManualBtn": !0,
                        "ocr.isForbiddenResultBtn": !1,
                        "ocr.idcard": "",
                        "ocr.idname": "",
                        "ocr.idaddress": "",
                        "ocr.tempImagePath": "",
                        "ocr.ocrTitle": "请拍摄身份证人像面",
                        "ocr.isToolsShow": !0
                    }), this.data.ocr.isEditTheOcrIsManualInput && this.setData({
                        "cmsConfig.page.ocr.isManualInput": !0
                    })
                }
                this.setData({
                    curPage: i,
                    "livingbody.isShowGuide": !0,
                    "livingbody.isShowCamera": !1,
                    "livingbody.isShowProcess": !1,
                    "livingbody.isShowDialog": !1,
                    "livingbody.livingbodyNumber": "",
                    "livingbody.isNotPrepareOk": !0,
                    "livingbody.getCodeErrMsg": "",
                    "livingbody.livingbodyTitle": "请保持正脸对准框内",
                    "livingbody.isPrepare": !0,
                    "livingbody.curNumberStatus": ["verifyCurrentNumber", "", "", ""],
                    "livingbody.curNumber": ["·", "·", "·", "·"],
                    "livingbody.isActionSeqNormal": !0,
                    "livingbody.livingbodyActionText": "",
                    "livingbody.livingbodySilentText": "",
                    "livingbody.uploadProcess": 0
                }), this.preLivingbodyExec()
            } else this.exitVerifyFail({
                ErrorCode: 14,
                ErrorMsg: "由于活体验证时出现网络异常，导致无效请求，需要您重新验证，验证时请保持网络畅通！"
            })
        },
        successGoToNext: function() {
            this.exitVerify({})
        },
        verifyBackToIndex: function() {
            var i = {};
            i.Token = this.data.token, i.ErrorCode = -999, i.ErrorMsg = "返回首页成功，如多次验证不通过，可将当前页面截图提供给相关工作人员排查问题 " + this.data.bizData.appid + " | " + i.token, this.exitVerifyFail(i)
        },
        switchfailModal: function() {
            this.setData({
                "failInfo.is_modal_showing": !this.data.failInfo.is_modal_showing
            })
        },
        ocrCameraError: function(i) {
            console.log("ocrCameraError", i)
        },
        bindstop: function(i) {
            console.log(i)
        }
    });
});
require("verify_mpsdk/index/index.js");