/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx0 = function(path, global) {
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
        console.warn("WXMLRT_$gwx0:" + m)
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0 || [];

    function gz$gwx0_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_1) return __WXML_GLOBAL__.ops_cached.$gwx0_1
        __WXML_GLOBAL__.ops_cached.$gwx0_1 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'visible']
            ])
            Z([3, '_handleCoverViewTap'])
            Z([3, 'native-msg-cover-layer'])
            Z([a, [3, 'native-msg-container '],
                [
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [2, '!'],
                            [
                                [2, '!'],
                                [
                                    [7],
                                    [3, 'closable']
                                ]
                            ]
                        ],
                        [
                            [2, '!'],
                            [
                                [2, '!'],
                                [
                                    [7],
                                    [3, 'title']
                                ]
                            ]
                        ]
                    ],
                    [1, 'has-title-bar'],
                    [1, '']
                ],
                [3, ' '],
                [
                    [7],
                    [3, 'className']
                ]
            ])
            Z([a, [3, 'main-content '],
                [
                    [2, '||'],
                    [
                        [7],
                        [3, 'mainContentClassName']
                    ],
                    [1, '']
                ]
            ])
            Z([
                [2, '||'],
                [
                    [2, '!'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'closable']
                        ]
                    ]
                ],
                [
                    [2, '!'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'title']
                        ]
                    ]
                ]
            ])
            Z([
                [2, '!'],
                [
                    [2, '!'],
                    [
                        [7],
                        [3, 'title']
                    ]
                ]
            ])
            Z([
                [2, '!'],
                [
                    [2, '!'],
                    [
                        [7],
                        [3, 'content']
                    ]
                ]
            ])
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
            Z([
                [7],
                [3, 'cancelBtn']
            ])
            Z(z[8])
            Z([
                [7],
                [3, 'okBtn']
            ])
            Z(z[8])
            Z([
                [2, '!'],
                [
                    [2, '!'],
                    [
                        [7],
                        [3, 'closable']
                    ]
                ]
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx0_1);
        return __WXML_GLOBAL__.ops_cached.$gwx0_1
    }

    function gz$gwx0_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_2) return __WXML_GLOBAL__.ops_cached.$gwx0_2
        __WXML_GLOBAL__.ops_cached.$gwx0_2 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'visible']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx0_2);
        return __WXML_GLOBAL__.ops_cached.$gwx0_2
    }

    function gz$gwx0_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_3) return __WXML_GLOBAL__.ops_cached.$gwx0_3
        __WXML_GLOBAL__.ops_cached.$gwx0_3 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'visible']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx0_3);
        return __WXML_GLOBAL__.ops_cached.$gwx0_3
    }

    function gz$gwx0_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_4) return __WXML_GLOBAL__.ops_cached.$gwx0_4
        __WXML_GLOBAL__.ops_cached.$gwx0_4 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx0_4);
        return __WXML_GLOBAL__.ops_cached.$gwx0_4
    }

    function gz$gwx0_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_5) return __WXML_GLOBAL__.ops_cached.$gwx0_5
        __WXML_GLOBAL__.ops_cached.$gwx0_5 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx0_5);
        return __WXML_GLOBAL__.ops_cached.$gwx0_5
    }

    function gz$gwx0_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_6) return __WXML_GLOBAL__.ops_cached.$gwx0_6
        __WXML_GLOBAL__.ops_cached.$gwx0_6 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([a, [3, 'page-content '],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isCreator']
                    ],
                    [1, 'sm'],
                    [1, 'lg']
                ],
                [3, ' '],
                [
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [7],
                            [3, 'isPad']
                        ],
                        [
                            [7],
                            [3, 'isPC']
                        ]
                    ],
                    [1, 'pad'],
                    [1, '']
                ],
                [3, ' '],
                [
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'meetingStateInfo']
                            ],
                            [3, 'isShowDoorIcon']
                        ],
                        [1, true]
                    ],
                    [1, 'heightAuto'],
                    [1, '']
                ]
            ])
            Z([3, 'handleSwitchAccount'])
            Z([3, 'user-header-container'])
            Z([
                [7],
                [3, 'loginStateInfo']
            ])
            Z([a, [3, 'detial-container '],
                [
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [7],
                            [3, 'isPad']
                        ],
                        [
                            [7],
                            [3, 'isPC']
                        ]
                    ],
                    [1, 'center'],
                    [1, 'center-x']
                ], z[0][3],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isMeetingInfoLoading']
                    ],
                    [1, 'detail-loading'],
                    [1, '']
                ]
            ])
            Z([3, 'meeting-info-card center-x'])
            Z([
                [2, '!'],
                [
                    [7],
                    [3, 'isCreator']
                ]
            ])
            Z([3, 'meeting-info-container'])
            Z([
                [2, '!'],
                [
                    [6],
                    [
                        [7],
                        [3, 'meetingStateInfo']
                    ],
                    [3, 'isUncollectable']
                ]
            ])
            Z([
                [7],
                [3, 'isCreator']
            ])
            Z(z[8])
            Z([
                [2, '==='],
                [
                    [6],
                    [
                        [7],
                        [3, 'meetingStateInfo']
                    ],
                    [3, 'isShowDoorIcon']
                ],
                [1, true]
            ])
            Z(z[6])
            Z([3, 'footer center-x'])
            Z([
                [7],
                [3, 'willInvite']
            ])
            Z([3, 'actions-container'])
            Z([
                [7],
                [3, 'isPstnOn']
            ])
            Z([
                [2, '&&'],
                [
                    [2, '!'],
                    [
                        [7],
                        [3, 'isPC']
                    ]
                ],
                [
                    [2, '!'],
                    [
                        [7],
                        [3, 'isPad']
                    ]
                ]
            ])
            Z([3, 'full-msg-view'])
            Z([3, 'phone-num-call-view'])
            Z([3, 'phone-num-call-pc-view'])
            Z([3, 'full-msg-box-view'])
            Z([3, 'detail-message-dialog'])
            Z([3, 'message-box'])
            Z([3, 'user-info-dialog'])
            Z([3, 'phone-dialog'])
            Z([3, 'user-profile'])
            Z([3, 'collect-succ'])
            Z([
                [7],
                [3, 'enableEnvSwitch']
            ])
            Z([3, 'debug-container'])
            Z([
                [7],
                [3, 'isDebugInfoOpen']
            ])
            Z(z[30])
            Z(z[28])
        })(__WXML_GLOBAL__.ops_cached.$gwx0_6);
        return __WXML_GLOBAL__.ops_cached.$gwx0_6
    }
    __WXML_GLOBAL__.ops_set.$gwx0 = z;
    __WXML_GLOBAL__.ops_init.$gwx0 = true;
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
    var x = ['./pages/sub-detail/components/message-box/message-box.wxml', './pages/sub-detail/components/phone-num-call-pc-view/index.wxml', './pages/sub-detail/components/phone-num-call-view/phone-num-call-view.wxml', './pages/sub-detail/detail-pick-account/detail-pick-account.wxml', './pages/sub-detail/detail-register/detail-register.wxml', './pages/sub-detail/detail/detail.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
        var z = gz$gwx0_1()
        var oB = _v()
        _(r, oB)
        if (_oz(z, 0, e, s, gg)) {
            oB.wxVkey = 1
            var xC = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
            var fE = _n('view')
            _rz(z, fE, 'class', 3, e, s, gg)
            var hG = _n('view')
            _rz(z, hG, 'class', 4, e, s, gg)
            var oH = _v()
            _(hG, oH)
            if (_oz(z, 5, e, s, gg)) {
                oH.wxVkey = 1
                var oJ = _v()
                _(oH, oJ)
                if (_oz(z, 6, e, s, gg)) {
                    oJ.wxVkey = 1
                }
                oJ.wxXCkey = 1
            }
            var cI = _v()
            _(hG, cI)
            if (_oz(z, 7, e, s, gg)) {
                cI.wxVkey = 1
            }
            oH.wxXCkey = 1
            cI.wxXCkey = 1
            _(fE, hG)
            var cF = _v()
            _(fE, cF)
            if (_oz(z, 8, e, s, gg)) {
                cF.wxVkey = 1
            }
            var lK = _n('view')
            _rz(z, lK, 'class', 9, e, s, gg)
            var aL = _v()
            _(lK, aL)
            if (_oz(z, 10, e, s, gg)) {
                aL.wxVkey = 1
                var eN = _v()
                _(aL, eN)
                if (_oz(z, 11, e, s, gg)) {
                    eN.wxVkey = 1
                }
                eN.wxXCkey = 1
            }
            var tM = _v()
            _(lK, tM)
            if (_oz(z, 12, e, s, gg)) {
                tM.wxVkey = 1
                var bO = _v()
                _(tM, bO)
                if (_oz(z, 13, e, s, gg)) {
                    bO.wxVkey = 1
                }
                bO.wxXCkey = 1
            }
            aL.wxXCkey = 1
            tM.wxXCkey = 1
            _(fE, lK)
            cF.wxXCkey = 1
            _(xC, fE)
            var oD = _v()
            _(xC, oD)
            if (_oz(z, 14, e, s, gg)) {
                oD.wxVkey = 1
            }
            oD.wxXCkey = 1
            _(oB, xC)
        }
        oB.wxXCkey = 1
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
        var z = gz$gwx0_2()
        var xQ = _v()
        _(r, xQ)
        if (_oz(z, 0, e, s, gg)) {
            xQ.wxVkey = 1
        }
        xQ.wxXCkey = 1
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
        var z = gz$gwx0_3()
        var fS = _v()
        _(r, fS)
        if (_oz(z, 0, e, s, gg)) {
            fS.wxVkey = 1
        }
        fS.wxXCkey = 1
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
        var z = gz$gwx0_4()
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
        var z = gz$gwx0_5()
        return r
    }
    e_[x[4]] = {
        f: m4,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[5]] = {}
    var m5 = function(e, s, r, gg) {
        var z = gz$gwx0_6()
        var cW = _n('view')
        _rz(z, cW, 'class', 0, e, s, gg)
        var aZ = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
        var t1 = _v()
        _(aZ, t1)
        if (_oz(z, 3, e, s, gg)) {
            t1.wxVkey = 1
        }
        t1.wxXCkey = 1
        _(cW, aZ)
        var e2 = _n('view')
        _rz(z, e2, 'class', 4, e, s, gg)
        var o4 = _n('view')
        _rz(z, o4, 'class', 5, e, s, gg)
        var x5 = _v()
        _(o4, x5)
        if (_oz(z, 6, e, s, gg)) {
            x5.wxVkey = 1
        }
        var f7 = _n('view')
        _rz(z, f7, 'class', 7, e, s, gg)
        var c8 = _v()
        _(f7, c8)
        if (_oz(z, 8, e, s, gg)) {
            c8.wxVkey = 1
        }
        var h9 = _v()
        _(f7, h9)
        if (_oz(z, 9, e, s, gg)) {
            h9.wxVkey = 1
        }
        c8.wxXCkey = 1
        h9.wxXCkey = 1
        _(o4, f7)
        var o6 = _v()
        _(o4, o6)
        if (_oz(z, 10, e, s, gg)) {
            o6.wxVkey = 1
        }
        x5.wxXCkey = 1
        o6.wxXCkey = 1
        _(e2, o4)
        var b3 = _v()
        _(e2, b3)
        if (_oz(z, 11, e, s, gg)) {
            b3.wxVkey = 1
        } else {
            b3.wxVkey = 2
            var o0 = _v()
            _(b3, o0)
            if (_oz(z, 12, e, s, gg)) {
                o0.wxVkey = 1
            }
            var cAB = _n('view')
            _rz(z, cAB, 'class', 13, e, s, gg)
            var oBB = _v()
            _(cAB, oBB)
            if (_oz(z, 14, e, s, gg)) {
                oBB.wxVkey = 1
            } else {
                oBB.wxVkey = 2
                var lCB = _n('view')
                _rz(z, lCB, 'class', 15, e, s, gg)
                var aDB = _v()
                _(lCB, aDB)
                if (_oz(z, 16, e, s, gg)) {
                    aDB.wxVkey = 1
                }
                var tEB = _v()
                _(lCB, tEB)
                if (_oz(z, 17, e, s, gg)) {
                    tEB.wxVkey = 1
                }
                aDB.wxXCkey = 1
                tEB.wxXCkey = 1
                _(oBB, lCB)
            }
            oBB.wxXCkey = 1
            _(b3, cAB)
            o0.wxXCkey = 1
        }
        b3.wxXCkey = 1
        _(cW, e2)
        var eFB = _n('full-msg-view')
        _rz(z, eFB, 'id', 18, e, s, gg)
        _(cW, eFB)
        var bGB = _n('phone-num-call-view')
        _rz(z, bGB, 'id', 19, e, s, gg)
        _(cW, bGB)
        var oHB = _n('phone-num-call-pc-view')
        _rz(z, oHB, 'id', 20, e, s, gg)
        _(cW, oHB)
        var xIB = _n('full-msg-box-view')
        _rz(z, xIB, 'id', 21, e, s, gg)
        _(cW, xIB)
        var oJB = _n('message-dialog')
        _rz(z, oJB, 'id', 22, e, s, gg)
        _(cW, oJB)
        var fKB = _n('message-box')
        _rz(z, fKB, 'id', 23, e, s, gg)
        _(cW, fKB)
        var cLB = _n('slider-message-dialog')
        _rz(z, cLB, 'id', 24, e, s, gg)
        _(cW, cLB)
        var hMB = _n('slider-message-dialog')
        _rz(z, hMB, 'id', 25, e, s, gg)
        _(cW, hMB)
        var oNB = _n('mask')
        _rz(z, oNB, 'id', 26, e, s, gg)
        _(cW, oNB)
        var cOB = _n('mask')
        _rz(z, cOB, 'id', 27, e, s, gg)
        _(cW, cOB)
        var oX = _v()
        _(cW, oX)
        if (_oz(z, 28, e, s, gg)) {
            oX.wxVkey = 1
            var oPB = _n('view')
            _rz(z, oPB, 'class', 29, e, s, gg)
            var lQB = _v()
            _(oPB, lQB)
            if (_oz(z, 30, e, s, gg)) {
                lQB.wxVkey = 1
            }
            var aRB = _v()
            _(oPB, aRB)
            if (_oz(z, 31, e, s, gg)) {
                aRB.wxVkey = 1
            }
            lQB.wxXCkey = 1
            aRB.wxXCkey = 1
            _(oX, oPB)
        }
        var lY = _v()
        _(cW, lY)
        if (_oz(z, 32, e, s, gg)) {
            lY.wxVkey = 1
        }
        oX.wxXCkey = 1
        lY.wxXCkey = 1
        _(r, cW)
        return r
    }
    e_[x[5]] = {
        f: m5,
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
__wxAppCode__['pages/sub-detail/components/message-box/message-box.json'] = {
    "component": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-detail/components/message-box/message-box.wxml'] = [$gwx0, './pages/sub-detail/components/message-box/message-box.wxml'];
else __wxAppCode__['pages/sub-detail/components/message-box/message-box.wxml'] = $gwx0('./pages/sub-detail/components/message-box/message-box.wxml');
__wxAppCode__['pages/sub-detail/components/phone-num-call-pc-view/index.json'] = {
    "component": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-detail/components/phone-num-call-pc-view/index.wxml'] = [$gwx0, './pages/sub-detail/components/phone-num-call-pc-view/index.wxml'];
else __wxAppCode__['pages/sub-detail/components/phone-num-call-pc-view/index.wxml'] = $gwx0('./pages/sub-detail/components/phone-num-call-pc-view/index.wxml');
__wxAppCode__['pages/sub-detail/components/phone-num-call-view/phone-num-call-view.json'] = {
    "component": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-detail/components/phone-num-call-view/phone-num-call-view.wxml'] = [$gwx0, './pages/sub-detail/components/phone-num-call-view/phone-num-call-view.wxml'];
else __wxAppCode__['pages/sub-detail/components/phone-num-call-view/phone-num-call-view.wxml'] = $gwx0('./pages/sub-detail/components/phone-num-call-view/phone-num-call-view.wxml');
__wxAppCode__['pages/sub-detail/detail-pick-account/detail-pick-account.json'] = {
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-detail/detail-pick-account/detail-pick-account.wxml'] = [$gwx0, './pages/sub-detail/detail-pick-account/detail-pick-account.wxml'];
else __wxAppCode__['pages/sub-detail/detail-pick-account/detail-pick-account.wxml'] = $gwx0('./pages/sub-detail/detail-pick-account/detail-pick-account.wxml');
__wxAppCode__['pages/sub-detail/detail-register/detail-register.json'] = {
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-detail/detail-register/detail-register.wxml'] = [$gwx0, './pages/sub-detail/detail-register/detail-register.wxml'];
else __wxAppCode__['pages/sub-detail/detail-register/detail-register.wxml'] = $gwx0('./pages/sub-detail/detail-register/detail-register.wxml');
__wxAppCode__['pages/sub-detail/detail/detail.json'] = {
    "usingComponents": {
        "message-dialog": "../../../components/message-dialog/message-dialog",
        "message-box": "../components/message-box/message-box",
        "slider-message-dialog": "../../../components/slider-message-dialog/slider-message-dialog",
        "mask": "../../../components/mask/mask",
        "full-msg-view": "../../../components/full-screen-msg-view/full-screen-msg-view",
        "full-msg-box-view": "../../../components/fullpage-message-box-view/fullpage-message-box-view",
        "phone-num-call-view": "../components/phone-num-call-view/phone-num-call-view",
        "phone-num-call-pc-view": "../components/phone-num-call-pc-view/index"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/sub-detail/detail/detail.wxml'] = [$gwx0, './pages/sub-detail/detail/detail.wxml'];
else __wxAppCode__['pages/sub-detail/detail/detail.wxml'] = $gwx0('./pages/sub-detail/detail/detail.wxml');

__wxRoute = 'pages/sub-detail/components/message-box/message-box';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-detail/components/message-box/message-box.js';
define("pages/sub-detail/components/message-box/message-box.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../@babel/runtime/helpers/objectSpread2");
    Component({
        properties: {
            key: {
                type: String,
                value: ""
            },
            closable: {
                type: Boolean,
                value: !1
            },
            closeOnTapOverlay: {
                type: Boolean,
                value: !1
            },
            onClose: {
                type: Function,
                value: function() {}
            },
            buttonStyle: {
                type: String,
                value: "flat"
            },
            className: {
                type: String,
                value: ""
            },
            mainContentClassName: {
                type: String,
                value: ""
            },
            title: {
                type: String,
                value: ""
            },
            content: {
                type: String,
                value: ""
            },
            okBtn: {
                type: Object,
                value: {
                    text: "确认",
                    onClick: null,
                    isOpen: !1,
                    "open-type": "",
                    "app-parameter": "",
                    "show-message-card": "",
                    "send-message-img": "",
                    "send-message-title": "",
                    bindlaunchapp: null,
                    bindgetuserinfo: null,
                    binderror: null
                }
            },
            cancelBtn: {
                type: Object,
                value: {
                    text: "取消",
                    onClick: null,
                    isOpen: !1,
                    "open-type": "",
                    "app-parameter": "",
                    "show-message-card": "",
                    "send-message-img": "",
                    "send-message-title": "",
                    bindlaunchapp: null,
                    bindgetuserinfo: null,
                    binderror: null
                }
            }
        },
        observers: {},
        data: {
            visible: !1,
            key: ""
        },
        attached: function() {},
        detached: function() {},
        methods: {
            _getInitData: function() {
                return {
                    visible: !1,
                    closable: !1,
                    closeOnTapOverlay: !1,
                    key: "",
                    onClose: function() {},
                    buttonStyle: "flat",
                    className: "",
                    mainContentClassName: "",
                    title: "",
                    content: "",
                    cancelBtn: {
                        text: "取消",
                        onClick: null
                    },
                    okBtn: {
                        text: "确认",
                        onClick: null
                    }
                }
            },
            _init: function() {
                var t = this._getInitData();
                this.setData(t)
            },
            _handleCoverViewTap: function() {
                if (this.closeOnTapOverlay) {
                    var t = this.data.onClose;
                    this.close(), t && t()
                }
            },
            _onCloseBtnClick: function(t) {
                var n = this.data.onClose;
                this.close(), n && n(t)
            },
            close: function() {
                var n = this._getInitData();
                this.setData(t(t({}, n), {}, {
                    visible: !1
                }))
            },
            open: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = e ? this._getInitData() : {},
                    a = n.closable,
                    i = void 0 !== a && a,
                    l = n.closeOnTapOverlay,
                    s = void 0 !== l && l,
                    c = n.onClose,
                    r = void 0 === c ? function() {} : c,
                    u = n.key,
                    p = void 0 === u ? "" : u,
                    d = n.buttonStyle,
                    v = void 0 === d ? "flat" : d,
                    f = n.className,
                    h = void 0 === f ? "" : f,
                    y = n.mainContentClassName,
                    C = void 0 === y ? "" : y,
                    b = n.title,
                    k = void 0 === b ? "" : b,
                    B = n.content,
                    m = void 0 === B ? "" : B,
                    g = n.okBtn,
                    O = void 0 === g ? {
                        text: "确认",
                        onClick: null
                    } : g,
                    _ = n.cancelBtn,
                    S = void 0 === _ ? {
                        text: "取消",
                        onClick: null
                    } : _;
                o.visible = !0, this.setData(t(t({}, o), {}, {
                    closable: i,
                    closeOnTapOverlay: s,
                    onClose: r,
                    key: p,
                    buttonStyle: v,
                    className: h,
                    mainContentClassName: C,
                    title: k,
                    content: m,
                    okBtn: O,
                    cancelBtn: S
                }))
            },
            getKey: function() {
                return this.data.key
            },
            _onCancelBtnClick: function(t) {
                var n = (this.data.cancelBtn || {}).onClick;
                "function" == typeof n && n(t), (this.data.cancelBtn || {}).isOpen || this.close()
            },
            _onCancelBtnLaunchApp: function(t) {
                var n = (this.data.cancelBtn || {}).bindlaunchapp;
                "function" == typeof n && n(t), this.close()
            },
            _onCancelBtnGetUserInfo: function(t) {
                var n = (this.data.cancelBtn || {}).bindgetuserinfo;
                "function" == typeof n && n(t), this.close()
            },
            _onCancelBtnError: function(t) {
                var n = (this.data.cancelBtn || {}).binderror;
                "function" == typeof n && n(t), this.close()
            },
            _onOkBtnClick: function(t) {
                var n = this.data.okBtn || {},
                    e = n.onClick,
                    o = n.isOpen;
                "function" == typeof e && e(t), o || this.close()
            },
            _onOkBtnLaunchApp: function(t) {
                var n = (this.data.okBtn || {}).bindlaunchapp;
                "function" == typeof n && n(t), this.close()
            },
            _onOkBtnGetUserInfo: function(t) {
                var n = (this.data.okBtn || {}).bindgetuserinfo;
                "function" == typeof n && n(t), this.close()
            },
            _onOkBtnError: function(t) {
                var n = this.data.okBtn || {},
                    e = n.binderror,
                    o = n.dialogNoClose;
                "function" == typeof e && e(t), !o && this.close()
            }
        },
        behaviors: ["wx://component-export"],
        export: function() {
            return {
                component: this
            }
        }
    });
});
require("pages/sub-detail/components/message-box/message-box.js");
__wxRoute = 'pages/sub-detail/components/phone-num-call-pc-view/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-detail/components/phone-num-call-pc-view/index.js';
define("pages/sub-detail/components/phone-num-call-pc-view/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../utils/i18n")._;
    Component({
        properties: {},
        data: {
            phoneNums: [],
            visible: !1,
            isCh: !0
        },
        attached: function() {},
        detached: function() {},
        methods: {
            show: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.setData({
                    phoneNums: n,
                    visible: !0,
                    copy: t("复制"),
                    phoneTitle: t("电话入会"),
                    title: t("请选择您所在地区的电话入会")
                })
            },
            hide: function() {
                this.setData({
                    phoneNums: [],
                    visible: !1
                })
            },
            onCoverTaped: function() {},
            onCancelBtnTaped: function() {
                this.hide()
            },
            dialPhoneNum: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = n.currentTarget || {},
                    o = e.dataset,
                    i = o.tel;
                i ? wx.setClipboardData({
                    data: i,
                    success: function() {
                        wx.showToast({
                            title: t("电话号码已复制到剪切板"),
                            icon: "none",
                            duration: 1500
                        })
                    },
                    fail: function() {
                        wx.showToast({
                            title: t("复制失败"),
                            icon: "none"
                        })
                    }
                }) : wx.showToast({
                    icon: "none",
                    title: t("复制失败")
                })
            }
        },
        behaviors: ["wx://component-export"],
        export: function() {
            return {
                component: this
            }
        }
    });
});
require("pages/sub-detail/components/phone-num-call-pc-view/index.js");
__wxRoute = 'pages/sub-detail/components/phone-num-call-view/phone-num-call-view';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-detail/components/phone-num-call-view/phone-num-call-view.js';
define("pages/sub-detail/components/phone-num-call-view/phone-num-call-view.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n = require("../../../../utils/i18n")._;
    Component({
        properties: {},
        data: {
            phoneNums: [],
            visible: !1
        },
        attached: function() {},
        detached: function() {},
        methods: {
            show: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.setData({
                    phoneNums: e,
                    visible: !0,
                    title: n("请选择您所在地区的电话入会"),
                    cancel: n("取消")
                })
            },
            hide: function() {
                this.setData({
                    phoneNums: [],
                    visible: !1
                })
            },
            onCoverTaped: function() {},
            onCancelBtnTaped: function() {
                this.hide()
            },
            dialPhoneNum: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                console.log(e);
                var o = e.currentTarget || {},
                    t = o.dataset,
                    i = t.tel;
                i || wx.showToast({
                    icon: "none",
                    title: n("电话拨打入会失败")
                });
                var a = this;
                wx.makePhoneCall({
                    phoneNumber: i,
                    success: function() {
                        console.log("拨打电话成功..."), a.hide()
                    },
                    fail: function(e) {
                        console.log("拨打电话fail", e), wx.showToast({
                            icon: "none",
                            title: "".concat(n("电话拨打入会失败"), ": ").concat(i)
                        })
                    }
                })
            }
        },
        behaviors: ["wx://component-export"],
        export: function() {
            return {
                component: this
            }
        }
    });
});
require("pages/sub-detail/components/phone-num-call-view/phone-num-call-view.js");
__wxRoute = 'pages/sub-detail/detail/detail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-detail/detail/detail.js';
define("pages/sub-detail/detail/detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/objectSpread2"),
        o = require("../../../@babel/runtime/helpers/typeof"),
        i = require("../../../utils/logger"),
        a = require("../../../https/PrivateMeetingHttps"),
        c = require("../../../actions/PrivateMeetingAction"),
        s = require("../../../stores/PrivateMeetingStore"),
        r = require("../../../constants/PrivateMeetingType"),
        l = require("../../../constants/CGIState").MEETING_STATE,
        u = require("../../../constants/UserType"),
        g = require("../../../constants/AppType"),
        h = require("../../../configs/AppConfig"),
        d = require("../../../utils/util"),
        f = require("../../../stores/AppStore"),
        p = require("../../../actions/UserAction"),
        m = require("../../../stores/UserStore"),
        w = require("../../../stores/PrivateMeetingStore"),
        v = require("../../../clients/BeaconClient"),
        C = require("../../../clients/RavenClient"),
        _ = require("../../../utils/util"),
        I = require("../../../actions/AppAction"),
        M = require("../../../utils/i18n"),
        S = M._,
        x = require("../../../utils/util"),
        T = x.getValueFromLocalStorage,
        A = x.setValueInLocalStorage,
        b = ["zh_CN", "zh_TW", "zh_HK"],
        y = new i({
            pageName: "detail",
            aegisLogEnable: !0,
            wxLogEnable: !0
        }),
        E = "1",
        L = "2",
        P = "3",
        D = 4030,
        N = 4031,
        k = 4032;
    Page({
        data: {
            isPad: !1,
            isPC: !1,
            isWin: !1,
            isMac: !1,
            isIPhone: !1,
            canLaunchApp: !0,
            appId: h.NATIVE_APP_ID_PRO,
            pcAppId: h.NATIVE_PC_APP_ID_PRO,
            isMeetingInfoLoading: !0,
            createrHeaderImg: "",
            createrNickName: "",
            meetingSubject: "",
            meetingCode: "",
            startTime: "00:00",
            endTime: "00:00",
            startDate: "",
            index: 0,
            endDate: "",
            timeZone: "(GMT+8:00)",
            isPstnOn: !0,
            meetingDuration: "",
            x: 0,
            y: 0,
            meetingState: {
                text: "",
                className: ""
            },
            languageArr: ["简体中文", "English"],
            useDefault: !0,
            useDefaultCreator: !0,
            launchAppParam: {},
            appInviteLaunchParam: "",
            isIOSAppInvite: !1,
            willInvite: !1,
            messageFrom: E,
            enableEnvSwitch: !1,
            curEnv: "",
            isDebugInfoOpen: !1,
            debugMsg: "",
            launchAppVersion: "PRO",
            isBindWeChat: !1,
            isCreator: !1,
            isGrantToJoin: !1,
            isMeetingCollected: !1,
            isLoggedIn: !1,
            loginStateInfo: null,
            MEETING_STATE: l,
            meetingStateInfo: {
                state: "",
                text: "",
                isShowDoorIcon: "",
                isUncollectable: ""
            },
            isHitLaunchAppABTest: !1,
            DEFAULT_ACCOUNT_LOGO: "http://meeting-75420.gzc.vod.tencent-cloud.com/corp/8697c8b86d1ac8e5bb9a294bd1bf8a340f0ff6ba0d569aa6243131412c207a2e.png?1592311940",
            DEFAULT_ACCOUNT_NICKNAME: "腾讯会议用户"
        },
        fromInternal: !1,
        lastMeetingCode: "",
        handleJoinByApp: function() {
            v.report("mp_invitedpage_null_join_null_null_click");
            var e = s.getIsGrantToJoin(),
                t = s.getPrivMeetingCode();
            y.info("使用app进会: ".concat(t, ", ").concat(e ? "有进会权限" : "无进会权限")), e ? this.handleCopyMeetingCode() : this.fullMsgBoxView.show({
                closeOnTap: !0,
                type: "info",
                message: S("您无权加入该特邀会议"),
                subMessage: S("该会议仅允许受邀的微信好友或群成员入会")
            })
        },
        getDisplayByName: function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = Array.from(e), n = "", o = 0, i = t.length; o < i; o++) {
                var a = t[o],
                    c = a.charCodeAt(0) <= 32 && a.charCodeAt(0) >= 0,
                    s = a.charCodeAt(0) <= 160 && a.charCodeAt(0) >= 127,
                    r = !c && !s;
                r && (n += a)
            }
            var l = "";
            if (0 === n.length) l = "*";
            else if (/^[A-Za-z]+$/.test(n)) l = n[0].toUpperCase();
            else {
                var u = Array.from(n);
                l = u.slice(-2).join("")
            }
            return l
        },
        handleJoinByMp: function() {
            var e = s.getIsGrantToJoin(),
                t = s.getPrivMeetingCode();
            v.report("mp_invitedpage_null_mpjoin_null_null_click"), y.info("使用小程序进会: ".concat(t, ", ").concat(e ? "有进会权限" : "无进会权限")), e ? this.makeSureHasUnionId().then((function() {
                var e = m.getWeMeetLoginInfo() || {},
                    n = e.nick_name,
                    o = void 0 === n ? "" : n,
                    i = e.name,
                    a = (m.getWXUserInfo() || {}).nickName,
                    c = void 0 === a ? "" : a,
                    s = m.getDefaultNickName(),
                    r = o || i || c || s,
                    l = "../../sub-preMeeting/join-meeting/join-meeting?m=".concat(t, "&a=1&nm=").concat(r);
                y.info("redirectTo ".concat(l)), wx.redirectTo({
                    url: l
                })
            })).catch((function(e) {
                switch (y.warn(e), console.warn(e), (e || {}).code) {
                    case k:
                    case N:
                        wx.showToast({
                            icon: "none",
                            title: S("专属会议需要授权用户信息才可使用")
                        });
                        break;
                    case D:
                        wx.showToast({
                            icon: "none",
                            title: S("授权用户信息失败")
                        })
                }
            })) : this.fullMsgBoxView.show({
                closeOnTap: !0,
                type: "info",
                message: S("您无权加入该特邀会议"),
                subMessage: S("该会议仅允许受邀的微信好友或群成员入会")
            })
        },
        makeSureHasUnionId: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.tipTitle,
                o = void 0 === n ? S("授权用户信息") : n,
                i = t.tipContent,
                a = void 0 === i ? S("请先进行微信授权") : i,
                c = t.okText,
                s = void 0 === c ? S("授权") : c,
                r = t.cancelText,
                l = void 0 === r ? S("取消") : r,
                u = !!m.getUnionId(),
                g = u && p.isUnionIdValid();
            return y.info("<<< isValidUnionId: ".concat(g)), g ? Promise.resolve() : (y.info("微信账户没有授权过腾讯会议，需要拉起授权用户信息"), new Promise((function(t, n) {
                e.messageDialog.open({
                    title: o,
                    content: a,
                    okBtn: {
                        text: s,
                        onClick: function() {
                            wx.getUserProfile({
                                lang: "zh_CN",
                                desc: "需要进行微信授权",
                                success: function(e) {
                                    y.info("用户点击微信用户信息授权成功"), p.updateWXUserInfo(e.userInfo), p.doLogin().then((function() {
                                        t()
                                    }))
                                },
                                fail: function(e) {
                                    y.info("用户点击微信用户信息授权拒绝按钮");
                                    var t = {
                                        code: D,
                                        message: S("授权用户信息失败"),
                                        detail: e
                                    };
                                    n(t)
                                },
                                complete: function() {}
                            })
                        }
                    },
                    cancelBtn: {
                        text: l,
                        onClick: function() {
                            y.info("用户取消授权用户信息");
                            var e = {
                                code: k,
                                message: S("授权被取消")
                            };
                            n(e)
                        }
                    }
                })
            })))
        },
        handleJoinByPhone: function() {
            var e = s.getIsGrantToJoin(),
                t = s.getPrivMeetingCode();
            if (v.report("mp_invitedpage_null_telejoin_null_null_click"), y.info("使用手机进会: ".concat(t, ", ").concat(e ? "有进会权限" : "无进会权限")), e) {
                var n = f.getSysInfo().system.toLowerCase().indexOf("ios") > -1,
                    o = this.data.isPC,
                    i = s.getPrivMeetingInfo(),
                    a = i || {},
                    c = a.ios_one_dial,
                    r = a.android_one_dial,
                    l = n ? c : r;
                if (y.info("dial-info: ".concat(JSON.stringify(l))), !l) return y.warn("can not get ios_one_dial, ".concat(JSON.stringify(i))), void wx.showToast({
                    icon: "none",
                    title: S("入会电话号码获取失败")
                });
                var u = {
                        mainland_china: S("中国大陆"),
                        hongkong_china: S("中国香港"),
                        usa: S("美国")
                    },
                    g = (null == l ? void 0 : l.pstns) || [],
                    h = [];
                ["mainland_china", "hongkong_china", "usa"].forEach((function(e) {
                    g.map((function(i) {
                        if (i.location === e) {
                            var a = o ? "".concat(i.switchboard, " ").concat(i.extension ? "转 ".concat(i.extension) : "") : "".concat(i.completed, ",").concat(t, "#").concat(n ? "" : ",#"),
                                c = {
                                    label: a,
                                    subLabel: "(".concat(u[e] || e, ")"),
                                    phoneNum: a
                                };
                            h.push(c)
                        }
                    }))
                })), o ? this.dialPhoneNumPCView.show(h) : this.dialPhoneNumView.show(h)
            } else this.fullMsgBoxView.show({
                closeOnTap: !0,
                type: "info",
                message: S("您无权加入该特邀会议"),
                subMessage: S("该会议仅允许受邀的微信好友或群成员入会")
            })
        },
        handleTapMeetingSubject: function() {
            var e = this.data.meetingSubject;
            this.fullMsgView.show(e)
        },
        handleshowInviteVersionTips: function() {
            wx.showToast({
                icon: "none",
                title: S("仅1.8.0及以上版本才可发送特邀会议邀请"),
                duration: 2e3
            })
        },
        bindPickerChange: function(e) {
            if (console.log("picker发送选择改变，携带值为", e.detail), this.data.index !== e.detail.value) {
                var t = 0 === Number(e.detail.value) ? "zh_CN" : "en";
                wx.setStorageSync("Language", t), this.setData({
                    index: Number(e.detail.value),
                    _t: M._t()
                }), wx.setNavigationBarTitle({
                    title: S("腾讯会议")
                }), this.handlePrivMeetingInfoChange()
            }
        },
        handleClearUnionId: function() {
            p.setUnionId("")
        },
        updateShareMenu: function() {
            var e = s.getActivityId();
            if (s.getIsCreator()) {
                var t = {
                    withShareTicket: !0,
                    isUpdatableMessage: !0,
                    activityId: e,
                    templateInfo: {
                        parameterList: []
                    },
                    success: function() {
                        console.log("updateShareMenu succ")
                    },
                    fail: function(e) {
                        console.log("updateShareMenu fail", e), y.warn("wx.updateShareMenu fail: ".concat(JSON.stringify(e)))
                    }
                };
                console.log("<<< wx.updateShareMenu", o(wx.updateShareMenu), JSON.stringify(t)), y.info("wx.updateShareMenu: ".concat(JSON.stringify(t))), wx.updateShareMenu(t)
            }
        },
        getMeetingInfoByCode: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = s.getPrivMeetingCode();
            this.setData({
                isMeetingInfoLoading: !0
            }), wx.showLoading({
                mask: !0,
                title: ""
            }), p.makeSureCGILogin(n).then((function() {
                return wx.hideLoading(), e.makeSureHasUnionId().then((function() {
                    e.fullMsgBoxView.hide()
                })).catch((function(t) {
                    throw e.fullMsgBoxView.show({
                        type: "error",
                        message: S("无法展示会议邀请"),
                        subMessage: S("请先进行微信授权"),
                        showButton: !0,
                        button: {
                            text: S("授权"),
                            onClick: function() {
                                e.getMeetingInfoByCode(!1, !0)
                            }
                        }
                    }), t
                }))
            })).then((function() {
                var n = m.getCGIToken(),
                    i = m.getOpenID();
                wx.showLoading({
                    mask: !0,
                    title: ""
                }), a.getMeetingInfo({
                    cgiToken: n,
                    openId: i,
                    meetingCode: o
                }).then((function(n) {
                    var o;
                    wx.hideLoading();
                    var i = null === (o = n.meeting_simple_info) || void 0 === o ? void 0 : o.android_one_dial,
                        a = !!Array.isArray(i) && 0 === i.length;
                    e.setData({
                        isMeetingInfoLoading: !1,
                        isPstnOn: !a
                    }), c.setMeetingInfo(n), t && e.handleAddToMyMeetingList()
                })).catch((function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    y.warn("Https.getMeetingInfo failed: ".concat(JSON.stringify(t))), wx.hideLoading(), e.setData({
                        isMeetingInfoLoading: !1,
                        meetingSubject: "".concat(S("会议信息加载失败"), ": ").concat(t.code || "", " ").concat(t.message || "")
                    }), e.fullMsgBoxView.show({
                        type: "error",
                        message: S("获取会议详情失败"),
                        subMessage: "".concat(S("获取会议详情失败, 请稍后重试"), " ").concat(t.code || ""),
                        showButton: !0,
                        button: {
                            text: S("重新加载"),
                            onClick: function() {
                                c.setMeetingCode(e.data.meetingCode.replace(/ /g, "") || e.lastMeetingCode)
                            }
                        }
                    }), e.addDebugInfoMsg(t)
                }))
            })).catch((function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                y.warn("getMeetingInfoByCode ".concat(o, " failed: ").concat(JSON.stringify(t))), wx.hideLoading(), e.setData({
                    isMeetingInfoLoading: !1,
                    meetingSubject: "".concat(S("会议信息加载失败"), ": ").concat(t.code || "", " ").concat(t.message || "")
                }), t.code !== D && t.code !== N && t.code !== k && wx.showToast({
                    icon: "none",
                    title: "".concat(S("获取会议详情失败"), ": ").concat(t.errMsg || "")
                }), e.addDebugInfoMsg(t)
            }))
        },
        handlePrivMeetingInfoChange: function() {
            var e = s.getPrivMeetingInfo(),
                t = s.getPrivMeetingCode(),
                o = s.getActivityId(),
                i = s.getIsBindWeChat(),
                a = s.getIsCreator(),
                c = s.getIsGrantToJoin(),
                r = s.getMeetingState(),
                u = s.getReadableMeetingState(),
                g = this.data,
                h = g.messageFrom,
                p = g.isIPhone,
                m = 0 === g.index,
                w = e.avatar_url,
                I = e.nick_name,
                M = e.is_default_avatar,
                x = e.begin_time,
                T = e.end_time,
                A = e.subject,
                b = e.meeting_state,
                D = e.creator_uid,
                N = this.getDisplayByName(I),
                k = d.getMeetingCodeFormatted(t),
                O = 1e3 * Number(x),
                U = 1e3 * Number(T),
                G = (new Date).getTimezoneOffset() / 60,
                R = "(GMT".concat(G < 0 ? "+".concat(0 - G) : "-".concat(G), ":00)"),
                B = d.getFormatedTime(O),
                F = d.getFormatedDate(O, m),
                W = d.getFormatedTime(U),
                V = d.getFormatedDate(U, m),
                J = d.getFormatedDurationTime(O, U, m),
                q = this.getMeetingState(b),
                j = {
                    state: r,
                    text: u,
                    isShowDoorIcon: l.CANCELED === r || l.DELETED === r || l.RECYCLED === r,
                    isUncollectable: l.CANCELED === r || l.DELETED === r || l.RECYCLED === r || l.ENDED === r
                },
                H = h === P || h === L,
                z = h === E || !H,
                Y = "\n      >>> meetingInfoChanged\n      meetingCode: ".concat(t, ",\n      activityId: ").concat(o, ",\n      isBindWeChat: ").concat(i, ",\n      isCreator: ").concat(a, ",\n      isGrantToJoin: ").concat(c, ",\n      messageFrom: ").concat(h, ",\n      meetingState: ").concat(r, "(").concat(u, ")\n    ");
            y.info(Y), this.addDebugInfoMsg(Y), console.log(">>> handlePrivMeetingInfoChange", e);
            var Z = function(e) {
                var t = "".concat(e),
                    n = 0;
                e || (t = "0");
                var o = t.slice(-1);
                switch (n = /.*[0-9]$/.test(o) ? Number(o) : /.*[a-z]$/.test(o) ? o.charCodeAt(0) - 97 : /.*[A-Z]$/.test(o) ? o.charCodeAt(0) - 65 : o.charCodeAt(0), isNaN(n) && (n = 0), n % 2) {
                    case 0:
                        return !1;
                    case 1:
                        return !0;
                    default:
                        return !1
                }
            }(D);
            Z || y.info("命中特邀会议拉起App ABtest 中的直接弹复制窗, 创建者: ".concat(D));
            var Q = h === L && !_.isMac(),
                $ = Q && Z,
                K = "0";
            $ || (K = Q && !Z ? "2" : "1");
            var X = {
                can_arouse_app: $ ? "0" : "1",
                fail_reason: K
            };
            z && !a ? (this.fullMsgBoxView.show({
                closeOnTap: !1,
                type: "info",
                message: S("会议邀请无效"),
                subMessage: S("请使用创建者账号绑定的微信进行邀请")
            }), v.report("mp_invite_meeting_accessible", n({
                code: 1
            }, X)), y.reportCls("cls_mp_invite_meeting_accessible_fail_1"), C.captureMessage("特邀会议-会议邀请无效", {
                level: "warn"
            })) : H && !c ? (this.fullMsgBoxView.show({
                closeOnTap: !1,
                type: "info",
                message: S("会议邀请无效"),
                subMessage: S("特邀会议仅会议创建者可发送有效的会议邀请")
            }), v.report("mp_invite_meeting_accessible", n({
                code: 2
            }, X)), y.reportCls("cls_mp_invite_meeting_accessible_fail_2"), C.captureMessage("特邀会议-无效的会议邀请", {
                level: "warn"
            })) : c ? (v.report("mp_invite_meeting_accessible", n({
                code: 0
            }, X)), y.reportCls("cls_mp_invite_meeting_accessible_success")) : (v.report("mp_invite_meeting_accessible", n({
                code: 3
            }, X)), y.reportCls("cls_mp_invite_meeting_accessible_fail_3")), z && a && (wx.showShareMenu({
                withShareTicket: !0,
                fail: function(e) {
                    y.warn("wx.showShareMenu fail: ".concat(JSON.stringify(e)))
                }
            }), this.updateShareMenu());
            var ee = this.getLaunchParam({
                meeting_code: t,
                rs: d.JOIN_MEETING_REPORT_SOURCE.MP_LAUNCH_APP
            });
            console.log("launchAppParam: ".concat(ee, ", willInvite: ").concat(z));
            var te = f.getSysInfo().version,
                ne = void 0 === te ? "0.0.0" : te,
                oe = _.compareVersion(ne, "7.0.15") >= 0,
                ie = f.isIOS() ? "8.0.8" : f.isAndroid() ? "8.0.7" : "99.99.99",
                ae = _.compareVersion(ne, ie) >= 0,
                ce = this.getAppInviteLaunchParam({
                    meeting_code: t,
                    is_support_secret_updatable_msg: oe ? "1" : "0",
                    is_support_secret_updatable_msg_h5: ae ? "1" : "0"
                }),
                se = !1;
            z && p && (y.info("appInvite launchAppParam: ".concat(ce)), y.info("should IOS launchApp to share meeting: ".concat(oe)), oe && (se = !0)), this.setData({
                createrHeaderImg: w,
                createrNickName: I,
                meetingSubject: A,
                meetingCode: k,
                startTime: B,
                endTime: W,
                startDate: F,
                endDate: V,
                meetingState: q,
                timeZone: R,
                meetingDuration: J,
                defaultBlueName: N,
                isDefaultAvatar: M,
                isBindWeChat: i,
                isCreator: a,
                willInvite: z,
                isGrantToJoin: c,
                launchAppParam: ee,
                appInviteLaunchParam: ce,
                isIOSAppInvite: se,
                isHitLaunchAppABTest: Z,
                meetingStateInfo: j
            }), this.paintCard({
                formatedStartTime: B,
                formatedEndTime: W,
                formatedStartDate: F,
                formatedCode: k,
                timeZone: R
            }), this.updateIsMeetingCollected()
        },
        paintCard: function(e) {
            var t = this,
                n = e.formatedStartTime,
                o = e.formatedEndTime,
                i = e.formatedStartDate,
                a = e.formatedCode,
                c = e.timeZone;
            if (!wx.canIUse("createSelectorQuery")) return v.report("mp_is_support_canvas", {
                is_support_canvas: "N1"
            }), void y.warn("wx is not support createSelectorQuery");
            wx.createSelectorQuery().select("#myCanvas").fields({
                node: !0,
                size: !0
            }).exec((function(e) {
                try {
                    var s = e[0].node;
                    if (s) {
                        var r = s.getContext("2d"),
                            l = f.getSysInfo().pixelRatio;
                        console.log("dpr is: ".concat(l)), s.width = e[0].width * l, s.height = e[0].height * l, r.scale(l, l);
                        var u = new Promise((function(e, t) {
                                var n = s.createImage();
                                n.src = "../imgs/bg-special-inviting-card@3x.jpg", n.onload = function() {
                                    e(n)
                                }
                            })),
                            g = "".concat(n, " - ").concat(o),
                            h = i.replace("年", "/").replace("月", "/").replace("日", "");
                        u.then((function(n) {
                            console.log("drawing image...", n), r.drawImage(n, 0, 0, n.width, n.height, 0, 0, e[0].width, e[0].height), r.textAlign = "center", r.fillStyle = "#0054E6", r.font = "16px Consolas", r.fillText(a, e[0].width / 2, 20), r.fillStyle = "#000000", r.fillText(g, e[0].width / 2, 50), r.font = "12px PingFangSC-Medium", r.fillText(h, e[0].width / 2, 70), r.strokeStyle = "#E0E2E5", r.beginPath(), r.lineWidth = "0.5", r.moveTo(.21 * e[0].width, 80), r.lineTo(.47 * e[0].width, 80), r.stroke(), r.moveTo(.53 * e[0].width, 80), r.lineTo(.78 * e[0].width, 80), r.stroke(), r.moveTo(.5 * e[0].width - .5, 80), r.lineTo(.5 * e[0].width + .5, 80), r.stroke(), r.fillStyle = "#A2A9AF", r.fillText(c, e[0].width / 2, 100), r.font = "13px PingFangSC-Medium", r.fillStyle = "#ffffff", r.fillText(S("特邀会议"), e[0].width / 2, 140), setTimeout((function() {
                                wx.canvasToTempFilePath({
                                    canvasId: "myCanvas",
                                    canvas: s,
                                    success: function(e) {
                                        console.log("to tmp file OK, path: ", e.tempFilePath), t.picUrl = e.tempFilePath, v.report("mp_is_support_canvas", {
                                            is_support_canvas: "Y"
                                        })
                                    },
                                    fail: function(e) {
                                        console.error("to tmp file failed: ", e.errMsg || JSON.stringify(e)), v.report("mp_is_support_canvas", {
                                            is_support_canvas: "N5"
                                        }), y.error("to tmp file failed: ".concat(e.errMsg || JSON.stringify(e)))
                                    }
                                })
                            }), 1e3)
                        })).catch((function(e) {
                            console.error("exception: ".concat(e)), v.report("mp_is_support_canvas", {
                                is_support_canvas: "N3"
                            }), y.error("wx createImagePromise is failed:".concat(e))
                        }))
                    } else v.report("mp_is_support_canvas", {
                        is_support_canvas: "N2"
                    }), y.error("wx createImagePromise is failed")
                } catch (e) {
                    v.report("mp_is_support_canvas", {
                        is_support_canvas: "N4"
                    }), y.error("is_support_canvas ret N4 : ".concat(e.message || JSON.stringify(e)))
                }
            }))
        },
        getUserAvatar: function() {
            var e = this.data.loginStateInfo,
                t = e && e.nick_name || "",
                n = this.getDisplayByName(t);
            this.setData({
                defaultBlueNameUser: n
            })
        },
        onImgLoadSuccessCreator: function() {
            var e = this.data.isDefaultAvatar;
            this.setData({
                useDefaultCreator: 1 === Number(e)
            })
        },
        onImgLoadFailCreator: function() {
            console.log("onImgLoadFailCreator")
        },
        onImgLoadSuccess: function() {
            var e = this.data.loginStateInfo;
            this.setData({
                useDefault: e && 1 === Number(e.avatar_type)
            })
        },
        onImgLoadFail: function() {
            console.log("onImgLoadFail")
        },
        updateIsMeetingCollected: function() {
            var e = s.getIsCreator(),
                t = s.getIsBindWeChat(),
                n = !e && t,
                o = m.getWeMeetLoginToken();
            n && o ? (y.info("participant has bound wx and loginToken exists, query whether meeting has been collected"), c.queryIsMeetingCollected().catch((function(e) {
                y.warn("queryIsMeetingCollected failed: ".concat(e))
            }))) : y.info("不用查会议是否已收藏\n      创建者:".concat(e ? "Y" : "N", ",\n      绑定微信: ").concat(t ? "Y" : "N", ",\n      已登录:").concat(o ? "Y" : "N", "\n      "))
        },
        getMeetingState: function(e) {
            var t = {
                text: "",
                className: ""
            };
            switch (e) {
                case l.READY:
                    t.text = "待开始", t.className = "orange-color";
                    break;
                case l.ACTIVE:
                    t.text = "进行中", t.className = "ing-color";
                    break;
                case l.CANCELED:
                    t.text = "会议已取消";
                    break;
                case l.DELETED:
                    t.text = "会议已结束";
                    break;
                case l.ENDED:
                    t.text = "";
                    break;
                case l.RECYCLED:
                default:
                    t.text = "会议号无效"
            }
            return t
        },
        handlePrivMeetingIsCollectedChange: function() {
            var e = s.getIsMeetingCollected();
            y.info(">>> handlePrivMeetingIsCollectedChange: 会议".concat(e ? "已收藏" : "未收藏")), this.setData({
                isMeetingCollected: e
            })
        },
        handlePrivMeetingCollectedSucc: function() {
            v.report("mp_invitedpage_null_addtomymeeting_null_null_result", {
                result: "1"
            }), this.collectDoneDialog.open()
        },
        handlePrivMeetingCollectedFail: function(e) {
            v.report("mp_invitedpage_null_addtomymeeting_null_null_result", {
                result: "0"
            }), wx.showToast({
                title: e,
                icon: "none"
            })
        },
        onCloseCollectDone: function() {
            this.collectDoneDialog.close()
        },
        onCloseCollectSucc: function() {
            this.collectDoneDialog.close()
        },
        handleAccountListChange: function(e) {
            y.info("有(".concat(e.length, "个企业账号+1个人账号)可供选择"))
        },
        personalLoginAndMayCollectMeeting: function() {
            var n = this;
            return t(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, p.wemeetLogin();
                        case 3:
                            e.next = 10;
                            break;
                        case 5:
                            return e.prev = 5, e.t0 = e.catch(0), y.warn("登录个人账号时失败: ".concat(e.t0)), wx.showToast({
                                title: n.needCollectMeetingAfterLogin ? S("添加会议失败") : S("登录失败"),
                                icon: "none"
                            }), e.abrupt("return");
                        case 10:
                            n.needCollectMeetingAfterLogin ? (y.info("个人用户登录后，立即添加会议"), n.collectMeeting()) : y.warn("个人用户登录后，无需添加会议（有这种场景？）");
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [0, 5]
                ])
            })))()
        },
        handleAuthCodeForRegisterGot: function() {
            "function" == typeof this.userInfoGranted && this.userInfoGranted()
        },
        handleWeMeetAccountLoginInfoRefreshed: function() {
            console.info("用户登录态已刷新！"), this.setLoginStateInfo(), this.getUserAvatar(), this.needCollectMeetingAfterLogin ? (y.info("登录完成，添加会议"), this.collectMeeting()) : y.info("登录完成，不需要添加会议")
        },
        handleWeMeetAccountRegisterSucc: function() {
            this.needCollectMeetingAfterLogin = !0;
            var e = m.getIsCorpUser();
            y.info("详情页收到".concat(e ? "企业用户" : "个人用户", "注册成功，开始登录(这个可能发生在注册页面unload之前，注意考虑下!)")), e && y.warn("不太可能是这个case，因为刚注册完应该是个人用户，为啥是企业用户？"), this.personalLoginAndMayCollectMeeting()
        },
        onPrivMeetingStoreChange: function(e, t) {
            switch (e) {
                case r.PRIVATE_MEETING_CODE_CHANGE:
                    this.getMeetingInfoByCode();
                    break;
                case r.PRIVATE_MEETING_INFO_CHANGE:
                    this.handlePrivMeetingInfoChange(t);
                    break;
                case r.PRIVATE_MEETING_IS_COLLECTED_CHANGE:
                    this.handlePrivMeetingIsCollectedChange(t);
                    break;
                case r.PRIVATE_MEETING_COLLECTED_SUCC:
                    this.handlePrivMeetingCollectedSucc(t);
                    break;
                case r.PRIVATE_MEETING_COLLECTED_FAIL:
                    this.handlePrivMeetingCollectedFail(t);
                    break;
                case r.PRIVATE_MEETING_REGISTER_ACCOUNT:
                    this.handleClearAccountToReg(t)
            }
        },
        handleClearAccountToReg: function(e) {
            y.info("user go to register for code: ".concat(e)), m.clearWeMeetLoginInfo(), m.clearRegisterOrLoginAuthCode(), this.getMeetingInfoByCode(!0)
        },
        onUserStoreChange: function(e, t) {
            switch (e) {
                case u.WEMEET_ACCOUNT_LOGOUT_SUCC:
                    this.handleWeMeetLogoutSucc();
                    break;
                case u.WEMEET_ACCOUNT_LOGIN_SUCC:
                    this.handleWeMeetLoginSucc();
                    break;
                case u.WEMEET_ACCOUNT_LIST_CHANGE:
                    this.handleAccountListChange(t);
                    break;
                case u.AUTH_CODE_FOR_REGISTER_GOT:
                    this.handleAuthCodeForRegisterGot(t);
                    break;
                case u.WEMEET_ACCOUNT_LOGIN_INFO_REFRESHED:
                    this.handleWeMeetAccountLoginInfoRefreshed(t);
                    break;
                case u.WEMEET_ACCOUNT_REGISTER_SUCC:
                    this.handleWeMeetAccountRegisterSucc()
            }
        },
        onAppStoreChange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (console.log("<<< onUserStoreChange111", e, t), e) {
                case g.CURR_ENV_CHANGE:
                    this.onCurrEnvChanged()
            }
        },
        onCurrEnvChanged: function() {
            c.setMeetingCode(this.data.meetingCode.replace(/ /g, "") || this.lastMeetingCode)
        },
        setLoginStateInfo: function() {
            var e = m.getWeMeetLoginInfo();
            this.setData({
                loginStateInfo: e
            })
        },
        handleWeMeetLogoutSucc: function() {
            y.info("登出成功"), this.setLoginStateInfo()
        },
        handleWeMeetLoginSucc: function() {
            y.info("登录成功"), this.setLoginStateInfo(), this.updateIsMeetingCollected(), this.getUserAvatar()
        },
        handleAddToMyMeetingList: function() {
            console.log(">>> add btn clicked"), v.report("mp_invitedpage_null_addtomymeeting_null_null_click");
            var e = s.getIsBindWeChat();
            console.log(e ? "已经绑定了微信" : "还未绑定了微信"), this.onCollectMeetingClicked()
        },
        handleSwitchAccount: function() {
            v.report("mp_invitedpage_null_avatar_null_null_click"), this.data.loginStateInfo && (console.log(">>> header btn clicked"), this.userProfile.open())
        },
        handleOnloadOptions: function(e) {
            this.getLaunchedSence();
            var t = e || {},
                n = t.scene,
                o = t.m,
                i = t.f,
                a = o;
            n && (a = d.getParamFromUri(n).m);
            this.setData({
                messageFrom: i,
                canLaunchApp: i === L
            }), v.report("mp_invitedpage_null_null_null_null_explore", {
                can_arouse_app: i !== L || _.isMac() ? "1" : "0"
            }), a || wx.showToast({
                title: S("会议号无效"),
                icon: "none"
            }), a && this.data.meetingCode !== a && (console.log("get meetingCode from onLoad"), this.lastMeetingCode = a, c.setMeetingCode(a))
        },
        getLaunchedSence: function() {
            var e = wx.getLaunchOptionsSync().scene;
            switch (void 0 === e ? "" : e) {
                case 1047:
                    console.log("扫描小程序码");
                    break;
                case 1007:
                    console.log("单人聊天的的小程序消息卡片");
                    break;
                case 1008:
                    console.log("群聊会话中的小程序消息卡片");
                    break;
                case 1069:
                    console.log("移动应用")
            }
        },
        handleCopyMeetingCode: function() {
            var e = this,
                t = w.getPrivMeetingCode(),
                n = _.getMeetingCodeWechatFormat(t);
            wx.setClipboardData({
                data: n,
                success: function() {
                    wx.hideToast(), e.messageBox.open({
                        title: S("会议号已复制"),
                        content: S("请打开腾讯会议App，输入会议号加入会议"),
                        okBtn: {
                            text: S("确认")
                        },
                        cancelBtn: null
                    })
                },
                fail: function() {
                    wx.showToast({
                        title: S("复制失败"),
                        icon: "none"
                    })
                }
            })
        },
        handleCopyMeetingUrlClick: function() {
            v.report("mp_invitedpage_null_copylink_null_null_click"), this.copyMeetingWebURL()
        },
        copyMeetingWebURL: function() {
            return t(e().mark((function t() {
                var n;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            (n = s.getWebShareUrl()) ? wx.setClipboardData({
                                data: n,
                                success: function() {
                                    wx.showToast({
                                        title: S("会议链接已复制到剪切板"),
                                        icon: "none",
                                        duration: 1500
                                    })
                                },
                                fail: function() {
                                    wx.showToast({
                                        title: S("复制失败"),
                                        icon: "none"
                                    })
                                }
                            }): wx.showToast({
                                title: S("复制失败"),
                                icon: "none"
                            });
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        handleToggleDubugInfoSwitch: function() {
            this.setData({
                isDebugInfoOpen: !this.data.isDebugInfoOpen
            })
        },
        handleSetLaunchAppVer: function(e) {
            var t = e.detail.value,
                n = h.NATIVE_APP_ID_PRO;
            "TEST" === t && (n = h.NATIVE_APP_ID_TEST), this.setData({
                launchAppVersion: t,
                appId: n
            })
        },
        addDebugInfoMsg: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (this.data.enableEnvSwitch) {
                var t = this.data.debugMsg;
                t = (t = "\n      ".concat(t, "\n      ").concat(JSON.stringify(e), "\n    ")).substr(-800), this.setData({
                    debugMsg: t
                })
            }
        },
        getLaunchParam: function(e) {
            var t = [];
            Object.keys(e).forEach((function(n) {
                t.push("".concat(n, "=").concat(encodeURIComponent(e[n] || "")))
            }));
            var n = "wemeet://page/inmeeting";
            return 0 < t.length ? n += "?".concat(t.join("&")) : n = "wemeet://", n
        },
        getAppInviteLaunchParam: function(e) {
            var t = [];
            Object.keys(e).forEach((function(n) {
                t.push("".concat(n, "=").concat(encodeURIComponent(e[n] || "")))
            }));
            var n = "wemeet2://page/invite/wechat";
            return 0 < t.length ? n += "?".concat(t.join("&")) : n = "wemeet2://launch", n
        },
        launchAppBySdk: function(e) {
            var t = [];
            Object.keys(e).forEach((function(n) {
                t.push("".concat(n, "=").concat(encodeURIComponent(e[n] || "")))
            }));
            var n = "wemeet://page/inmeeting";
            0 < t.length ? n += "?".concat(t.join("&")) : n = "wemeet://", y.info("launch app scheme: ".concat(n));
            var o = {
                appId: this.data.appId,
                extInfo: n,
                messageExt: n,
                showLaunchFailToast: !0,
                success: function(e) {
                    y.info("launch ok:  ".concat(JSON.stringify(e)))
                },
                fail: function(e) {
                    y.error("launch error: ".concat(JSON.stringify(e))), wx.showToast({
                        title: S("打开腾讯会议应用失败"),
                        icon: "none",
                        duration: 2e3
                    })
                }
            };
            console.info("appId: ", o.appId);
            var i = f.getSysInfo(),
                a = i.platform.toLowerCase().indexOf("ios") > -1,
                c = i.platform.toLowerCase().indexOf("windows") > -1 || i.platform.toLowerCase().indexOf("macos") > -1;
            a ? (y.info("iOS, call wx.launchApplicationDirectly"), wx.launchApplicationDirectly ? wx.launchApplicationDirectly(o) : wx.showToast({
                title: S("打开腾讯会议应用失败"),
                icon: "none",
                duration: 2e3
            })) : c ? (y.info("PC, call wx.launchApplicationForNative"), wx.launchApplicationForNative ? wx.launchApplicationForNative(o) : wx.showToast({
                title: S("打开腾讯会议应用失败"),
                icon: "none",
                duration: 2e3
            })) : (y.warn("neither iOS nor PC, call wx.launchApplicationDirectly"), wx.launchApplicationDirectly ? wx.launchApplicationDirectly(o) : wx.showToast({
                title: S("打开腾讯会议应用失败"),
                icon: "none",
                duration: 2e3
            }))
        },
        handleLaunchAppSuccess: function() {
            y.info("launch App success!")
        },
        handleLaunchAppError: function(e) {
            y.error("launch App error: ".concat(JSON.stringify(e))), y.info("打开app失败, 使用copy方式兜底"), this.handleCopyMeetingCode()
        },
        handleIOSLaunchAppToInviteError: function(e) {
            y.error("launch App error: ".concat(JSON.stringify(e))), wx.showToast({
                title: S("发送邀请失败，请重试"),
                icon: "none"
            }), this.setData({
                isIOSAppInvite: !1
            })
        },
        handleEnvSwtichClicked: function() {
            wx.navigateTo({
                url: "../../sub-dev/env-switch/env-switch"
            })
        },
        handleCopyOpenIDClicked: function() {
            wx.setClipboardData({
                data: m.getOpenID(),
                success: function() {
                    wx.showToast({
                        title: "openID已复制，赶紧去粘贴吧",
                        icon: "none",
                        duration: 1500
                    })
                },
                fail: function(e) {
                    console.error(e), wx.showToast({
                        title: "openID复制失败",
                        icon: "none"
                    })
                }
            })
        },
        updateEnvSwitchState: function() {
            this.setData({
                enableEnvSwitch: f.getEnvSwitchEnable(),
                curEnv: f.getEnvName()
            })
        },
        onLoad: function(e) {
            console.log("<<< onLoad option", JSON.stringify(e)), y.info("onLoad: ".concat(JSON.stringify(e))), I.pageExposed("detail");
            var t = T("Language");
            console.log("getValueFromLocalStorage", t);
            var n = b.includes(t) ? 0 : 1;
            if (!t) {
                try {
                    var i = wx.getSystemInfoSync();
                    console.log("wx.getSystemInfoSync--res", i), t = i.language, console.log("wx.getSystemInfoSync--language", t), n = b.includes(t) ? 0 : 1, A("Language", t)
                } catch (e) {
                    y.info("获取微信语言失败，默认中文简体"), n = 0, A("Language", t = "zh_CN")
                }
                wx.getSystemInfo({
                    success: function(e) {
                        console.log("getSystemInfo", e)
                    }
                })
            }
            wx.setNavigationBarTitle({
                title: S("腾讯会议")
            }), void 0 === wx.hideShareMenu && y.warn("hideShareMenu failed, typeof wx.hideShareMenu = ".concat(o(wx.hideShareMenu))), wx.hideShareMenu({
                success: function() {
                    console.log("wx.hideShareMenu success")
                },
                fail: function(e) {
                    console.log("wx.hideShareMenu fail", e), y.warn("hideShareMenu failed, ".concat(JSON.stringify(e)))
                }
            }), this.userInfoDialog = this.selectComponent("#user-info-dialog"), this.phoneDialog = this.selectComponent("#phone-dialog"), this.userProfile = this.selectComponent("#user-profile"), this.fullMsgView = this.selectComponent("#full-msg-view").component, this.fullMsgBoxView = this.selectComponent("#full-msg-box-view").component, this.dialPhoneNumView = this.selectComponent("#phone-num-call-view").component, this.dialPhoneNumPCView = this.selectComponent("#phone-num-call-pc-view").component, this.messageDialog = this.selectComponent("#detail-message-dialog").component, this.messageBox = this.selectComponent("#message-box").component, this.collectDoneDialog = this.selectComponent("#collect-succ"), s.onceEventListener(this.onPrivMeetingStoreChange), m.onceEventListener(this.onUserStoreChange), f.onceEventListener(this.onAppStoreChange);
            var a = _.isPad(),
                c = _.isPC(),
                r = _.isIPhone(),
                l = _.isWindows(),
                u = _.isMac();
            this.setData({
                isPad: a,
                isIPhone: r,
                isPC: c,
                isWin: l,
                isMac: u,
                index: n,
                _t: M._t()
            }), this.handleOnloadOptions(e), this.updateEnvSwitchState(), this.initWeMeetLoginState()
        },
        initWeMeetLoginState: function() {
            this.setLoginStateInfo(), p.refreshWeMeetLoginToken(!0).catch((function(e) {
                y.warn(e)
            }))
        },
        onReady: function() {},
        onShow: function() {
            this.updateEnvSwitchState()
        },
        onHide: function() {},
        onUnload: function() {
            s.removeEventListener(this.onPrivMeetingStoreChange), m.removeEventListener(this.onUserStoreChange), f.removeEventListener(this.onAppStoreChange)
        },
        onRetry: function() {
            wx.navigateBack()
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {
            v.report("mp_invitedpage_null_invite_null_null_click");
            var e = s.getPrivMeetingInfo(),
                t = s.getPrivMeetingCode(),
                n = e.nick_name,
                o = void 0 === n ? "" : n,
                i = e.creator_uid,
                a = void 0 === i ? "" : i,
                c = e.subject,
                r = (void 0 === c ? "" : c) || "".concat(o || a).concat(S("预定的特邀会议"));
            return {
                title: "".concat(S("会议邀请"), ": ").concat(r),
                path: "pages/detail/detail?m=".concat(t, "&f=").concat(P),
                imageUrl: this.picUrl || "/resources/share_private_meeting.jpg"
            }
        },
        onCollectMeetingClicked: function() {
            if (p.isWeMeetLoginStateEffective()) y.info("已登录-添加会议"), this.collectMeeting();
            else {
                y.info("未登录-添加会议"), this.needCollectMeetingAfterLogin = !0;
                var e = s.getIsBindWeChat();
                y.info("是否绑定微信：".concat(e)), e ? this.boundUserCollectMeeting() : this.notBoundUserCollectMeeting()
            }
        },
        notBoundUserCollectMeeting: function() {
            var n = this;
            return t(e().mark((function t() {
                var o;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return y.info("参与者且未绑定微信，进行添加会议"), e.prev = 1, e.next = 4, n.makeSureUserInfoGranted();
                        case 4:
                            return e.next = 6, n.tryGetPhoneNumber();
                        case 6:
                            if (!(o = e.sent)) {
                                e.next = 11;
                                break
                            }
                            p.setPhoneNum(o), e.next = 12;
                            break;
                        case 11:
                            return e.abrupt("return");
                        case 12:
                            e.next = 19;
                            break;
                        case 14:
                            return e.prev = 14, e.t0 = e.catch(1), y.warn("notBoundUserCollectMeeting failed because: ".concat(e.t0)), wx.showToast({
                                icon: "none",
                                title: e.t0
                            }), e.abrupt("return");
                        case 19:
                            n.goRegisterPage();
                        case 20:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [1, 14]
                ])
            })))()
        },
        makeSureUserInfoGranted: function() {
            var e = this;
            return new Promise((function(t, n) {
                if (m.getRegisterOrLoginAuthCode()) return y.info("已经有了auth_code，不用再次授权"), void t("");
                y.info("user info still not granted when collecting meeting button clicked, asking..."), e.userInfoDialog.show(), e.userInfoGranted = function() {
                    e.userInfoDialog.hide(), t("")
                }, e.userInfoDenied = function() {
                    e.userInfoDialog.hide(), y.warn("user info denied at the beginning of starting collect."), n(S("您需要授权允许后方可添加会议"))
                }, e.userInfoError = function(t) {
                    e.userInfoDialog.hide(), y.warn("user info error occurred at the beginning of starting collect."), n(t || S("授权用户信息失败"))
                }
            }))
        },
        onGetUserInfo: function() {
            var e = this;
            wx.showLoading({
                title: "",
                mask: !0
            }), wx.getUserProfile({
                lang: "zh_CN",
                desc: "获取信息用来账号绑定",
                success: function(t) {
                    wx.hideLoading(), y.info("敏感wx.getUserProfile ok: ".concat(JSON.stringify(t))), p.getAuthCodeForRegister(t).catch((function(t) {
                        var n = t.errmsg;
                        y.warn("wx.getUserProfile catch: ".concat(n)), "function" == typeof e.userInfoError && e.userInfoError(n)
                    }))
                },
                fail: function(t) {
                    wx.hideLoading(), y.warn("wx.getUserProfile failed: ".concat(JSON.stringify(t))), "function" == typeof e.userInfoError && e.userInfoError(t.errMsg)
                }
            })
        },
        tryGetPhoneNumber: function() {
            var e = this;
            return new Promise((function(t) {
                var n = m.getPhoneNum(),
                    o = m.getPhoneCountryCode() || "86";
                if (n) return console.info("已经有phone: +".concat(o, " ").concat(n, "，不用再次获取")), void t({
                    phone_number: n,
                    country_code: o
                });
                e.phoneDialog.show(), e.phoneGranted = function() {
                    if (e.phoneDialog.hide(), !e.phoneInfo) return y.warn("fatal: phoneInfo must NOT be empty"), void t(null);
                    p.getPhoneNumber(e.phoneInfo.encryptedData, e.phoneInfo.iv).then((function(e) {
                        var n = e.phone,
                            o = void 0 === n ? "" : n,
                            i = e.country_code,
                            a = void 0 === i ? "86" : i;
                        o || y.warn("get-phone CGI FATAL. phone MUST NOT be empty!"), t({
                            phone_number: o,
                            country_code: a
                        })
                    })).catch((function(e) {
                        y.warn("get-phone CGI failed: ".concat(e)), t(null)
                    }))
                }, e.phoneRefused = function() {
                    e.phoneDialog.hide(), y.warn("user dennied to grant his phone number"), t(null)
                }, e.phoneGrantCancelled = function() {
                    e.phoneDialog.hide(), y.info("phone number grant dialog cancelled by user"), t(null)
                }
            }))
        },
        onGetPhoneNumberClicked: function(e) {
            "getPhoneNumber:ok" === e.detail.errMsg ? (console.log("phone granted"), this.phoneInfo = {
                iv: e.detail.iv,
                encryptedData: e.detail.encryptedData
            }, "function" == typeof this.phoneGranted && this.phoneGranted()) : (console.warn("phone refused"), "function" == typeof this.phoneRefused && this.phoneRefused())
        },
        goRegisterPage: function() {
            y.info("跳转手机号注册页面"), wx.navigateTo({
                url: "../../sub-detail/detail-register/detail-register"
            })
        },
        boundUserCollectMeeting: function() {
            var e = this;
            y.info("参与者且已绑定微信，进行添加会议"), wx.showLoading({
                title: "",
                mask: !0
            }), p.getAccountList().then((function() {
                wx.hideLoading(), m.getAccountList().length < 1 ? (y.info("only 1 acc, login and collect meeting directly"), e.loginPersonalAccount()) : (y.info("2+ accs, go to pick account page"), e.goAccountPickPage())
            })).catch((function(e) {
                wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: e
                }), y.warn(e, "boundUserCollectMeeting")
            }))
        },
        goAccountPickPage: function() {
            this.needCollectMeetingAfterLogin ? console.info('因点击"添加会议"而跳转账号选择') : console.info('因点击"切换账号"而跳转账号选择'), wx.navigateTo({
                url: "../../sub-detail/detail-pick-account/detail-pick-account?type=".concat(this.needCollectMeetingAfterLogin ? "1" : "2")
            })
        },
        collectMeeting: function() {
            y.info("开始添加会议..."), s.getIsMeetingCollectable() ? c.collectMeeting().then((function() {
                y.info("collect done")
            })).catch((function(e) {
                wx.showToast({
                    icon: "none",
                    title: e
                })
            })) : y.info("会议不可添加，因为当前状态为: ".concat(w.getReadableMeetingState()))
        },
        onCheckMyMeetingList: function() {
            console.warn("查看会议列表"), this.onCancelProfile()
        },
        onSwitchAccount: function() {
            v.report("mp_invitedpage_null_avatar_changeaccount_null_click"), this.needCollectMeetingAfterLogin = !1, this.onCancelProfile(), this.pickFromAvailableAccounts()
        },
        loginPersonalAccount: function() {
            wx.showLoading({
                title: "",
                mask: !0
            }), p.wemeetLogin().then((function() {
                wx.hideLoading()
            })).catch((function(e) {
                wx.hideLoading(), y.warn("wemeetLogin登录失败:".concat(e)), _.showWXToast(S("登录失败"))
            }))
        },
        pickFromAvailableAccounts: function() {
            var e = this;
            wx.showLoading({
                title: "",
                mask: !0
            }), p.getAccountList().then((function() {
                wx.hideLoading(), e.goAccountPickPage()
            })).catch((function(e) {
                wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: e
                }), y.warn("onSwitchAccount： ".concat(e))
            }))
        },
        onCancelProfile: function() {
            this.userProfile.close()
        },
        onCloseGrantUserinfoTapped: function() {
            y.info("取消授权用户信息"), "function" == typeof this.userInfoDenied && this.userInfoDenied()
        },
        onCloseGrantPhoneTapped: function() {
            "function" == typeof this.phoneGrantCancelled && this.phoneGrantCancelled()
        },
        onGrantProtocol1Tapped: function() {
            var e = 0 === this.data.index ? "https://meeting.tencent.com/declare.html" : "https://meeting.tencent.com/declare-en.html?&district=0",
                t = _.getQueryString({
                    url: e
                });
            wx.navigateTo({
                url: "../../sub-web/web/web".concat(t)
            })
        },
        onGrantProtocol2Tapped: function() {
            var e = 0 === this.data.index ? "https://meeting.tencent.com/privacy-policy.html" : "https://meeting.tencent.com/privacy-policy-en.html?&district=0",
                t = _.getQueryString({
                    url: e
                });
            wx.navigateTo({
                url: "../../sub-web/web/web".concat(t)
            })
        }
    });
});
require("pages/sub-detail/detail/detail.js");
__wxRoute = 'pages/sub-detail/detail-register/detail-register';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-detail/detail-register/detail-register.js';
define("pages/sub-detail/detail-register/detail-register.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n = require("../../../utils/log.js"),
        o = require("../../../stores/UserStore.js"),
        e = require("../../../actions/UserAction");
    Page({
        data: {
            url: ""
        },
        onLoad: function() {
            var n = o.getRegisterOrLoginAuthCode();
            this.setData({
                url: "https://meeting.tencent.com/qrcode-login.html?login_type=BindPhoneByMp&auth_code=".concat(n)
            })
        },
        onReady: function() {},
        onShareAppMessage: function() {
            console.log("onShareAppMessage")
        },
        handleMessage: function(n) {
            n.detail.data.forEach((function(n) {
                var o = n.type,
                    t = n.data;
                "setShareInfo" === o && e.handleBindSuccess(t)
            }))
        },
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        webLoadSuccess: function() {},
        webLoadError: function(o) {
            n.error("load web url(".concat(o.detail.src, ") error: ").concat(JSON.stringify(o)))
        }
    });
});
require("pages/sub-detail/detail-register/detail-register.js");
__wxRoute = 'pages/sub-detail/detail-pick-account/detail-pick-account';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/sub-detail/detail-pick-account/detail-pick-account.js';
define("pages/sub-detail/detail-pick-account/detail-pick-account.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../utils/logger"),
        n = require("../../../stores/UserStore"),
        c = require("../../../constants/UserType"),
        e = require("../../../actions/UserAction"),
        o = require("../../../actions/AppAction"),
        i = require("../../../utils/util"),
        a = require("../../../clients/BeaconClient"),
        s = new t({
            pageName: "detail-pick-account",
            aegisLogEnable: !0,
            wxLogEnable: !0
        });
    Page({
        data: {
            MSG_CHOOSE_A_ACCOUNT: "选择账号",
            MSG_CORPS_FOUND: "检测到该账号已关联以下企业",
            MSG_ADD_THIS_MEETING_INTO: "将此会议添加至",
            MSG_CONFIRM_BUTTON: "确定",
            DEFAULT_ACCOUNT_LOGO: "/resources/av-icon/vst_icon@2x.png",
            MSG_PERSONAL_ACCOUNT_NAME: "使用个人账号",
            accountList: [],
            accountPicked: null
        },
        onLoad: function(t) {
            this.init(t), n.addEventListener(this.onUserStoreChange)
        },
        init: function(t) {
            o.pageExposed("detail-pick-account");
            var c = (t || {}).type,
                e = void 0 === c ? "1" : c,
                i = n.getAccountList(),
                a = n.getAccountPicked();
            this.setData({
                accountList: i,
                accountPicked: a,
                type: e
            })
        },
        onUserStoreChange: function(t, n) {
            switch (console.log("[UserType]%c%s", "background-color:purple;color:white;font-weight:bold;font-style:italic", t, " fired with args:", n), t) {
                case c.WEMEET_ACCOUNT_LOGIN_SUCC:
                    this.loginSucc();
                    break;
                default:
                    console.warn("ATTENTION: UserType '".concat(t, "' not handled in 'detail-pick-account' page"))
            }
        },
        loginSucc: function() {
            var t = n.getAccountPicked();
            n.getIsCorpUser() && "personnel" !== t ? console.info("login succ: 已登录企业：".concat(t.corp_name)) : console.info("login succ: 已登录个人账号"), this.navback()
        },
        onAccPicked: function(t) {
            var n = -1;
            try {
                n = parseInt(t.currentTarget.dataset.index, 10)
            } catch (t) {
                return void s.error("invalid index got when a account picked: ".concat(JSON.stringify(t)))
            }
            n < 0 || this.data.accountList.length <= n ? s.error("invalid index that not in [0, ".concat(this.data.accountList.length, "). i = ").concat(n)) : (this.oldAcc = this.data.accountPicked, this.setData({
                accountPicked: this.data.accountList[n]
            }), a.report("pageofvirtualcardsec_exchangepage_null_null_null_null_click"), this.oldAcc && this.oldAcc.corp_id === this.data.accountPicked.corp_id && "3" !== this.data.type ? this.navback() : this.login(this.data.accountList[n]))
        },
        onPersonalAccPicked: function() {
            "personnel" !== this.data.accountPicked || "3" === this.data.type ? (this.oldAcc = this.data.accountPicked, this.setData({
                accountPicked: "personnel"
            }), this.login()) : this.navback()
        },
        login: function(t) {
            e.wemeetLogout().then((function() {
                e.wemeetLogin(t).catch((function(t) {
                    s.error("登录失败:".concat(t)), i.showWXToast(t)
                }))
            })).catch((function(t) {
                i.showWXToast(t)
            }))
        },
        navback: function() {
            wx.navigateBack({
                delta: 1
            })
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {
            n.removeEventListener(this.onUserStoreChange)
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {}
    });
});
require("pages/sub-detail/detail-pick-account/detail-pick-account.js");