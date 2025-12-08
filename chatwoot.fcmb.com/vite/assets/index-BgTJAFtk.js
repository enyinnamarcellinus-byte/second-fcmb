var ii = Object.defineProperty;
var Wn = e => {
    throw TypeError(e)
};
var si = (e, t, n) => t in e ? ii(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var ie = (e, t, n) => si(e, typeof t != "symbol" ? t + "" : t, n),
    en = (e, t, n) => t.has(e) || Wn("Cannot " + n);
var N = (e, t, n) => (en(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    K = (e, t, n) => t.has(e) ? Wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    x = (e, t, n, r) => (en(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    v = (e, t, n) => (en(e, t, "access private method"), n);
import {
    d as Br,
    h as un,
    r as ae,
    ab as Zt,
    w as St,
    S as ve,
    a6 as Ot,
    P as br,
    a0 as oi,
    Q as Vt,
    Z as vt,
    c as me,
    N as Ei,
    $ as li,
    J as An,
    m as ci,
    s as ui,
    A as Ai,
    an as gt,
    ao as Gn,
    Y as Ri,
    H as _i
} from "./_plugin-vue_export-helper-BDdLN-Za.js";
import {
    c as Ti
} from "./_commonjsHelpers-BosuxZz1.js";
import {
    s as Rn,
    E as Oi,
    F as Li,
    G as jn,
    H as tn,
    I as Ii,
    J as Ni,
    K as fi,
    M as Si,
    N as zn,
    O as pi,
    P as di,
    p as mi,
    h as Di,
    f as Ci
} from "./Validators-Cc34aJUd.js";
import {
    r as ne,
    t as Ie,
    a as ue
} from "./index-DN3rM4CW.js";
var Yr = ["__key", "__init", "__shim", "__original", "__index", "__prevKey"];

function Rt() {
    return Math.random().toString(36).substring(2, 15)
}

function Mi(e, t) {
    return [...e instanceof Set ? e : new Set(e)]
}

function b(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function te(e, t, n = !0, r = ["__key"]) {
    if (e === t) return !0;
    if (typeof t == "object" && typeof e == "object") {
        if (e instanceof Map || e instanceof Set) return !1;
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (e instanceof RegExp && t instanceof RegExp) return hi(e, t);
        if (e === null || t === null || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const a of r)
            if ((a in e || a in t) && e[a] !== t[a]) return !1;
        for (const a in e)
            if (!(a in t) || e[a] !== t[a] && !n || n && !te(e[a], t[a], n, r)) return !1;
        return !0
    }
    return !1
}

function hi(e, t) {
    return e.source === t.source && e.flags.split("").sort().join("") === t.flags.split("").sort().join("")
}

function Re(e) {
    const t = typeof e;
    if (t === "number") return !1;
    if (e === void 0) return !0;
    if (t === "string") return e === "";
    if (t === "object") {
        if (e === null) return !0;
        for (const n in e) return !1;
        return !(e instanceof RegExp || e instanceof Date)
    }
    return !1
}

function vi(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function gi(e) {
    const t = `^${vi(e)}$`,
        n = {
            MM: "(0[1-9]|1[012])",
            M: "([1-9]|1[012])",
            DD: "([012][0-9]|3[01])",
            D: "([012]?[0-9]|3[01])",
            YYYY: "\\d{4}",
            YY: "\\d{2}"
        },
        r = Object.keys(n);
    return new RegExp(r.reduce((a, i) => a.replace(i, n[i]), t))
}

function Ft(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function pt(e) {
    return Ft(e) || Array.isArray(e)
}

function lt(e) {
    if (Ft(e) === !1 || e.__FKNode__ || e.__POJO__ === !1) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(Ft(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)
}
var ye = (e, t, n = !1, r = !1) => {
    if (t === null) return null;
    const a = {};
    if (typeof t == "string") return t;
    for (const i in e)
        if (b(t, i) && (t[i] !== void 0 || !r)) {
            if (n && Array.isArray(e[i]) && Array.isArray(t[i])) {
                a[i] = e[i].concat(t[i]);
                continue
            }
            if (t[i] === void 0) continue;
            lt(e[i]) && lt(t[i]) ? a[i] = ye(e[i], t[i], n, r) : a[i] = t[i]
        } else a[i] = e[i];
    for (const i in t) !b(a, i) && t[i] !== void 0 && (a[i] = t[i]);
    return a
};

function Pi(e) {
    if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1]) return !1;
    const t = e[0];
    for (let n = 1; n < e.length; n++)
        if (e[n] === t && (n === 1 || e[n - 1] !== "\\") && n !== e.length - 1) return !1;
    return !0
}

function $i(e) {
    if (!e.length) return "";
    let t = "",
        n = "";
    for (let r = 0; r < e.length; r++) {
        const a = e.charAt(r);
        (a !== "\\" || n === "\\") && (t += a), n = a
    }
    return t
}

function ze(...e) {
    return e.reduce((t, n) => {
        const {
            value: r,
            name: a,
            modelValue: i,
            config: s,
            plugins: o,
            ...E
        } = n;
        return Object.assign(t, E)
    }, {})
}

function yi(e) {
    const t = [];
    let n = "",
        r = 0,
        a = "",
        i = "";
    for (let s = 0; s < e.length; s++) {
        const o = e.charAt(s);
        o === a && i !== "\\" ? a = "" : (o === "'" || o === '"') && !a && i !== "\\" ? a = o : o === "(" && !a ? r++ : o === ")" && !a && r--, o === "," && !a && r === 0 ? (t.push(n), n = "") : (o !== " " || a) && (n += o), i = o
    }
    return n && t.push(n), t
}

function xn(e, t) {
    const n = {},
        r = t.filter(i => i instanceof RegExp),
        a = new Set(t);
    for (const i in e) !a.has(i) && !r.some(s => s.test(i)) && (n[i] = e[i]);
    return n
}

function Qn(e, t) {
    const n = {},
        r = t.filter(a => a instanceof RegExp);
    return t.forEach(a => {
        a instanceof RegExp || (n[a] = e[a])
    }), Object.keys(e).forEach(a => {
        r.some(i => i.test(a)) && (n[a] = e[a])
    }), n
}

function Je(e) {
    return e.replace(/-([a-z0-9])/gi, (t, n) => n.toUpperCase())
}

function kr(e) {
    return e.replace(/([a-z0-9])([A-Z])/g, (t, n, r) => n + "-" + r.toLowerCase()).replace(" ", "-").toLowerCase()
}

function _n(e, t = Yr) {
    if (e !== null && typeof e == "object") {
        let n;
        if (Array.isArray(e) ? n = [...e] : lt(e) && (n = { ...e
            }), n) return Bi(e, n, t), n
    }
    return e
}

function ct(e, t = Yr) {
    if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File) return e;
    let n;
    Array.isArray(e) ? n = e.map(r => typeof r == "object" ? ct(r, t) : r) : n = Object.keys(e).reduce((r, a) => (r[a] = typeof e[a] == "object" ? ct(e[a], t) : e[a], r), {});
    for (const r of t) r in e && Object.defineProperty(n, r, {
        enumerable: !1,
        value: e[r]
    });
    return n
}

function Ae(e) {
    return typeof e == "object" ? ct(e) : e
}

function Ui(e, t) {
    if (!e || typeof e != "object") return null;
    const n = t.split(".");
    let r = e;
    for (const a in n) {
        const i = n[a];
        if (b(r, i) && (r = r[i]), +a === n.length - 1) return r;
        if (!r || typeof r != "object") return null
    }
    return null
}

function Oe(e) {
    return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0
}

function ut(e) {
    return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
        enumerable: !1,
        value: !0
    })
}

function vn(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-")
}

function Bi(e, t, n) {
    for (const r of n) r in e && Object.defineProperty(t, r, {
        enumerable: !1,
        value: e[r]
    });
    return t
}

function bi(e) {
    let t = !1;
    return (...n) => {
        if (!t) return t = !0, queueMicrotask(() => t = !1), e(...n)
    }
}

function Yi(e) {
    if (!(e === "false" || e === !1)) return !0
}

function gn() {
    const e = [];
    let t = 0;
    const n = a => e.push(a),
        r = a => {
            const i = e[t];
            return typeof i == "function" ? i(a, s => (t++, r(s))) : (t = 0, a)
        };
    return n.dispatch = r, n.unshift = a => e.unshift(a), n.remove = a => {
        const i = e.indexOf(a);
        i > -1 && e.splice(i, 1)
    }, n
}

function Hr() {
    const e = new Map,
        t = new Map;
    let n;
    const r = (a, i) => {
        if (n) {
            n.set(i.name, [a, i]);
            return
        }
        e.has(i.name) && e.get(i.name).forEach(s => {
            (i.origin === a || s.modifiers.includes("deep")) && s.listener(i)
        }), i.bubble && a.bubble(i)
    };
    return r.flush = () => {
        e.clear(), t.clear(), n == null || n.clear()
    }, r.on = (a, i, s = "push") => {
        const [o, ...E] = a.split("."), u = i.receipt || Rt(), I = {
            modifiers: E,
            event: o,
            listener: i,
            receipt: u
        };
        return e.has(o) ? e.get(o)[s](I) : e.set(o, [I]), t.has(u) ? t.get(u)[s](o) : t.set(u, [o]), u
    }, r.off = a => {
        var i;
        t.has(a) && ((i = t.get(a)) == null || i.forEach(s => {
            const o = e.get(s);
            Array.isArray(o) && e.set(s, o.filter(E => E.receipt !== a))
        }), t.delete(a))
    }, r.pause = a => {
        n || (n = new Map), a && a.walk(i => i._e.pause())
    }, r.play = a => {
        if (!n) return;
        const i = n;
        n = void 0, i.forEach(([s, o]) => r(s, o)), a && a.walk(s => s._e.play())
    }, r
}

function ki(e, t, n, r, a = !0, i) {
    return t._e(e, {
        payload: r,
        name: n,
        bubble: a,
        origin: e,
        meta: i
    }), e
}

function Hi(e, t, n) {
    return Ct(e.parent) && e.parent._e(e.parent, n), e
}

function Vi(e, t, n, r, a) {
    return t._e.on(n, r, a)
}

function Fi(e, t, n) {
    return t._e.off(n), e
}
var Pn = gn();
Pn((e, t) => (e.message || (e.message = `E${e.code}`), t(e)));
var $n = gn();
$n((e, t) => {
    e.message || (e.message = `W${e.code}`);
    const n = t(e);
    return console && typeof console.warn == "function" && console.warn(n.message), n
});

function Ge(e, t = {}) {
    $n.dispatch({
        code: e,
        data: t
    })
}

function oe(e, t = {}) {
    throw Error(Pn.dispatch({
        code: e,
        data: t
    }).message)
}

function Ee(e, t) {
    return {
        blocking: !1,
        key: Rt(),
        meta: {},
        type: "state",
        visible: !0,
        ...e
    }
}
var Kn = {
    apply: xi,
    set: Wi,
    remove: Vr,
    filter: ji,
    reduce: zi,
    release: qi,
    touch: Gi
};

function wi(e = !1) {
    const t = {};
    let n, r = e,
        a = [];
    const i = new Map;
    let s;
    const o = new Proxy(t, {
        get(...E) {
            const [u, I] = E;
            return I === "buffer" ? r : I === "_b" ? a : I === "_m" ? i : I === "_r" ? s : b(Kn, I) ? Kn[I].bind(null, t, o, n) : Reflect.get(...E)
        },
        set(E, u, I) {
            return u === "_n" ? (n = I, s === "__n" && Fr(n, o), !0) : u === "_b" ? (a = I, !0) : u === "buffer" ? (r = I, !0) : u === "_r" ? (s = I, !0) : (oe(101, n), !1)
        }
    });
    return o
}

function Wi(e, t, n, r) {
    if (t.buffer) return t._b.push([
        [r]
    ]), t;
    if (e[r.key] !== r) {
        if (typeof r.value == "string" && r.meta.localize !== !1) {
            const i = r.value;
            r.value = n.t(r), r.value !== i && (r.meta.locale = n.props.locale)
        }
        const a = `message-${b(e,r.key)?"updated":"added"}`;
        e[r.key] = Object.freeze(n.hook.message.dispatch(r)), n.emit(a, r)
    }
    return t
}

function Gi(e, t) {
    for (const n in e) {
        const r = { ...e[n]
        };
        t.set(r)
    }
}

function Vr(e, t, n, r) {
    if (b(e, r)) {
        const a = e[r];
        delete e[r], n.emit("message-removed", a)
    }
    return t.buffer === !0 && (t._b = t._b.filter(a => (a[0] = a[0].filter(i => i.key !== r), a[1] || a[0].length))), t
}

function ji(e, t, n, r, a) {
    for (const i in e) {
        const s = e[i];
        (!a || s.type === a) && !r(s) && Vr(e, t, n, i)
    }
}

function zi(e, t, n, r, a) {
    for (const i in e) {
        const s = e[i];
        a = r(a, s)
    }
    return a
}

function xi(e, t, n, r, a) {
    if (Array.isArray(r)) {
        if (t.buffer) {
            t._b.push([r, a]);
            return
        }
        const i = new Set(r.map(s => (t.set(s), s.key)));
        typeof a == "string" ? t.filter(s => s.type !== a || i.has(s.key)) : typeof a == "function" && t.filter(s => !a(s) || i.has(s.key))
    } else
        for (const i in r) {
            const s = n.at(i);
            s ? s.store.apply(r[i], a) : Ki(n, t, i, r[i], a)
        }
}

function Qi(e, ...t) {
    const n = `${e.name}-set`,
        r = a => Ee({
            key: vn(a),
            type: "error",
            value: a,
            meta: {
                source: n,
                autoClear: !0
            }
        });
    return t.filter(a => !!a).map(a => {
        if (typeof a == "string" && (a = [a]), Array.isArray(a)) return a.map(i => r(i)); {
            const i = {};
            for (const s in a) Array.isArray(a[s]) ? i[s] = a[s].map(o => r(o)) : i[s] = [r(a[s])];
            return i
        }
    })
}

function Ki(e, t, n, r, a) {
    var s;
    const i = t._m;
    i.has(n) || i.set(n, []), t._r || (t._r = Fr(e, t)), (s = i.get(n)) == null || s.push([r, a])
}

function Fr(e, t) {
    return e.on("child.deep", ({
        payload: n
    }) => {
        t._m.forEach((r, a) => {
            e.at(a) === n && (r.forEach(([i, s]) => {
                n.store.apply(i, s)
            }), t._m.delete(a))
        }), t._m.size === 0 && t._r && (e.off(t._r), t._r = void 0)
    })
}

function qi(e, t) {
    t.buffer = !1, t._b.forEach(([n, r]) => t.apply(n, r)), t._b = []
}

function Zi() {
    const e = {};
    let t;
    return {
        count: (...n) => Ji(t, e, ...n),
        init(n) {
            t = n, n.on("message-added.deep", qn(e, 1)), n.on("message-removed.deep", qn(e, -1))
        },
        merge: n => Zn(t, e, n),
        settled(n) {
            return b(e, n) ? e[n].promise : Promise.resolve()
        },
        unmerge: n => Zn(t, e, n, !0),
        value(n) {
            return b(e, n) ? e[n].count : 0
        }
    }
}

function Ji(e, t, n, r, a = 0) {
    if (r = Xi(r || n), !b(t, n)) {
        const i = {
            condition: r,
            count: 0,
            name: n,
            node: e,
            promise: Promise.resolve(),
            resolve: () => {}
        };
        t[n] = i, a = e.store.reduce((s, o) => s + i.condition(o) * 1, a), e.each(s => {
            s.ledger.count(i.name, i.condition), a += s.ledger.value(i.name)
        })
    }
    return wr(t[n], a).promise
}

function Xi(e) {
    return typeof e == "function" ? e : t => t.type === e
}

function wr(e, t) {
    const n = e.count,
        r = e.count + t;
    return e.count = r, n === 0 && r !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise(a => e.resolve = a)) : n !== 0 && r === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e
}

function qn(e, t) {
    return n => {
        for (const r in e) {
            const a = e[r];
            a.condition(n.payload) && wr(a, t)
        }
    }
}

function Zn(e, t, n, r = !1) {
    const a = e;
    for (const i in t) {
        const s = t[i].condition;
        r || n.ledger.count(i, s);
        const o = n.ledger.value(i) * (r ? -1 : 1);
        if (e) {
            do e.ledger.count(i, s, o), e = e.parent; while (e);
            e = a
        }
    }
}
var yn = new Map,
    yt = new Map,
    Un = Hr();

function es(e) {
    e.props.id && (yn.set(e.props.id, e), yt.set(e, e.props.id), Un(e, {
        payload: e,
        name: e.props.id,
        bubble: !1,
        origin: e
    }))
}

function ts(e) {
    if (yt.has(e)) {
        const t = yt.get(e);
        yt.delete(e), yn.delete(t), Un(e, {
            payload: null,
            name: t,
            bubble: !1,
            origin: e
        })
    }
}

function Dt(e) {
    return yn.get(e)
}

function ns(e, t) {
    return Un.on(e, t)
}

function Tn(e, t, n) {
    let r = !0;
    return t in e.config._t ? r = !1 : e.emit(`config:${t}`, n, !1), t in e.props || (e.emit("prop", {
        prop: t,
        value: n
    }), e.emit(`prop:${t}`, n)), r
}

function rs(e = {}) {
    const t = new Set,
        n = { ...e,
            _add: a => t.add(a),
            _rm: a => t.delete(a)
        };
    return new Proxy(n, {
        set(a, i, s, o) {
            return typeof i == "string" && t.forEach(E => Tn(E, i, s)), Reflect.set(a, i, s, o)
        }
    })
}

function Wr(e, t) {
    const n = (t || document).getElementById(e);
    if (n instanceof HTMLFormElement) {
        const r = new Event("submit", {
            cancelable: !0,
            bubbles: !0
        });
        n.dispatchEvent(r);
        return
    }
    Ge(151, e)
}

function as(e) {
    const t = n => {
        for (const r in n.store) {
            const a = n.store[r];
            a.type === "error" || a.type === "ui" && r === "incomplete" ? n.store.remove(r) : a.type === "state" && n.store.set({ ...a,
                value: !1
            })
        }
    };
    t(e), e.walk(t)
}

function Gr(e, t) {
    const n = typeof e == "string" ? Dt(e) : e;
    if (n) {
        const r = s => Ae(s.props.initial) || (s.type === "group" ? {} : s.type === "list" ? [] : void 0);
        n._e.pause(n);
        const a = Ae(t);
        return t && !Re(t) && (n.props.initial = pt(a) ? ut(a) : a, n.props._init = n.props.initial), n.input(r(n), !1), n.walk(s => {
            s.type === "list" && s.sync || s.input(r(s), !1)
        }), n.input(Re(a) && a ? a : r(n), !1), n.type !== "input" && t && !Re(t) && pt(t) && n.walk(s => {
            s.props.initial = pt(s.value) ? ut(s.value) : s.value, s.props._init = s.props.initial
        }), n._e.play(n), as(n), n.emit("reset", n), n
    }
    Ge(152, e)
}
var is = {
        delimiter: ".",
        delay: 0,
        locale: "en",
        rootClasses: e => ({
            [`formkit-${kr(e)}`]: !0
        })
    },
    jr = Symbol("index"),
    On = Symbol("removed"),
    Ln = Symbol("moved"),
    zr = Symbol("inserted");

function ss(e) {
    return e.type === "list" && Array.isArray(e._value)
}

function Ct(e) {
    return e && typeof e == "object" && e.__FKNode__ === !0
}
var Ut = (e, t, n) => {
        oe(102, [e, n])
    },
    os = {
        _c: V(hs, Ut, !1),
        add: V(fs),
        addProps: V(Ns),
        address: V(gs, Ut, !1),
        at: V(Ps),
        bubble: V(Hi),
        clearErrors: V(Vs),
        calm: V(Os),
        config: V(!1),
        define: V(Is),
        disturb: V(Ts),
        destroy: V(Ls),
        extend: V(ws),
        hydrate: V(Rs),
        index: V(Ms, Cs, !1),
        input: V(Kr),
        each: V(ds),
        emit: V(ki),
        find: V(ys),
        on: V(Vi),
        off: V(Fi),
        parent: V(!1, Ss),
        plugins: V(!1),
        remove: V(ps),
        root: V(Bs, Ut, !1),
        reset: V(ks),
        resetConfig: V(Ds),
        setErrors: V(Hs),
        submit: V(Ys),
        t: V(bs),
        use: V(Bn),
        name: V(vs, !1, !1),
        walk: V(ms)
    };

function Es() {
    return new Map(Object.entries(os))
}

function V(e, t, n = !0) {
    return {
        get: e ? (r, a) => n ? (...i) => e(r, a, ...i) : e(r, a) : !1,
        set: t !== void 0 ? t : Ut.bind(null)
    }
}

function ls() {
    const e = new Map;
    return new Proxy(e, {
        get(t, n) {
            return e.has(n) || e.set(n, gn()), e.get(n)
        }
    })
}
var xr = 0,
    cs = 0;

function us(e) {
    var t, n;
    return ((t = e.parent) == null ? void 0 : t.type) === "list" ? jr : e.name || `${((n=e.props)==null?void 0:n.type)||"input"}_${++xr}`
}

function Qr(e) {
    return e.type === "group" ? ut(e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}) : e.type === "list" ? ut(Array.isArray(e.value) ? e.value : []) : e.value
}

function Kr(e, t, n, r = !0) {
    return t._value = As(e, e.hook.input.dispatch(n)), e.emit("input", t._value), e.isCreated && e.type === "input" && te(t._value, t.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", t.value), t.settled) : (t.isSettled && e.disturb(), r ? (t._tmo && clearTimeout(t._tmo), t._tmo = setTimeout(wt, e.props.delay, e, t)) : wt(e, t), t.settled)
}

function As(e, t) {
    switch (e.type) {
        case "input":
            break;
        case "group":
            (!t || typeof t != "object") && oe(107, [e, t]);
            break;
        case "list":
            Array.isArray(t) || oe(108, [e, t]);
            break
    }
    return t
}

function wt(e, t, n = !0, r = !0) {
    t._value = t.value = e.hook.commit.dispatch(t._value), e.type !== "input" && r && e.hydrate(), e.emit("commitRaw", t.value), e.emit("commit", t.value), n && e.calm()
}

function qr(e, {
    name: t,
    value: n,
    from: r
}) {
    if (!Object.isFrozen(e._value)) {
        if (ss(e)) {
            const a = n === On ? [] : n === Ln && typeof r == "number" ? e._value.splice(r, 1) : [n];
            e._value.splice(t, n === Ln || r === zr ? 0 : 1, ...a);
            return
        }
        n !== On ? e._value[t] = n : delete e._value[t]
    }
}

function Rs(e, t) {
    const n = t._value;
    return e.type === "list" && e.sync && _s(e, t), t.children.forEach(r => {
        if (typeof n == "object")
            if (r.name in n) {
                const a = r.type !== "input" || n[r.name] && typeof n[r.name] == "object" ? ut(n[r.name]) : n[r.name];
                if (!r.isSettled || (!pt(a) || r.props.mergeStrategy) && te(a, r._value)) return;
                r.input(a, !1)
            } else(e.type !== "list" || typeof r.name == "number") && qr(t, {
                name: r.name,
                value: r.value
            }), n.__init || (r.type === "group" ? r.input({}, !1) : r.type === "list" ? r.input([], !1) : r.input(void 0, !1))
    }), e
}

function _s(e, t) {
    const n = e._value;
    if (!Array.isArray(n)) return;
    const r = [],
        a = new Set(t.children),
        i = new Map;
    n.forEach((o, E) => {
        if (t.children[E] && t.children[E]._value === o) r.push(t.children[E]), a.delete(t.children[E]);
        else {
            r.push(null);
            const u = i.get(o) || [];
            u.push(E), i.set(o, u)
        }
    }), a.size && i.size && a.forEach(o => {
        if (i.has(o._value)) {
            const E = i.get(o._value),
                u = E.shift();
            r[u] = o, a.delete(o), E.length || i.delete(o._value)
        }
    });
    const s = [];
    for (i.forEach(o => {
            s.push(...o)
        }); a.size && s.length;) {
        const o = a.values().next().value,
            E = s.shift();
        if (E === void 0) break;
        r[E] = o, a.delete(o)
    }
    s.forEach((o, E) => {
        r[o] = zs({
            value: E
        })
    }), a.size && a.forEach(o => {
        if (!("__FKP" in o)) {
            const E = o._c.parent;
            if (!E || xs(E)) return;
            E.ledger.unmerge(o), o._c.parent = null, o.destroy()
        }
    }), t.children = r
}

function Ts(e, t) {
    var n;
    return t._d <= 0 && (t.isSettled = !1, e.emit("settled", !1, !1), t.settled = new Promise(r => {
        t._resolve = r
    }), e.parent && ((n = e.parent) == null || n.disturb())), t._d++, e
}

function Os(e, t, n) {
    var r;
    if (n !== void 0 && e.type !== "input") {
        qr(t, n);
        const a = !!(e.config.mergeStrategy && e.config.mergeStrategy[n.name]);
        return wt(e, t, !0, a)
    }
    t._d > 0 && t._d--, t._d === 0 && (t.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((r = e.parent) == null || r.calm({
        name: e.name,
        value: t.value
    })), t._resolve && t._resolve(t.value))
}

function Ls(e, t) {
    e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), ts(e), e.emit("destroyed", e), t._e.flush(), t._value = t.value = void 0;
    for (const n in t.context) delete t.context[n];
    t.plugins.clear(), t.context = null
}

function Is(e, t, n) {
    t.type = n.type;
    const r = ct(n);
    e.props.__propDefs = Zr(e.props.__propDefs ? ? [], (r == null ? void 0 : r.props) || []), r.props = e.props.__propDefs, t.props.definition = r, t.value = t._value = Qr({
        type: e.type,
        value: t.value
    }), n.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), t.props.type = n.forceTypeProp), n.family && (t.props.family = n.family), n.features && n.features.forEach(a => a(e)), n.props && e.addProps(n.props), e.emit("defined", n)
}

function Ns(e, t, n) {
    const r = Array.isArray(n) ? n : Object.keys(n),
        a = Array.isArray(n) ? {} : r.reduce((s, o) => ("default" in n[o] && (s[o] = n[o].default), s), {});
    if (e.props.attrs) {
        const s = { ...e.props.attrs
        };
        e.props._emit = !1;
        for (const E in s) {
            const u = Je(E);
            r.includes(u) && (e.props[u] = s[E], delete s[E])
        }
        Array.isArray(n) || r.forEach(E => {
            "default" in n[E] && e.props[E] === void 0 && (e.props[E] = a[E])
        });
        const o = Ae(t._value);
        e.props.initial = e.type !== "input" ? ut(o) : o, e.props._emit = !0, e.props.attrs = s
    }
    const i = Zr(e.props.__propDefs ? ? [], n);
    return e.props.definition && (e.props.definition.props = i), e.props.__propDefs = i, e.emit("added-props", n), e
}

function In(e) {
    return Array.isArray(e) ? e.reduce((t, n) => (t[n] = {}, t), {}) : e
}

function Zr(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : ye(In(e), In(t))
}

function fs(e, t, n, r) {
    if (e.type === "input" && oe(100, e), n.parent && n.parent !== e && n.parent.remove(n), !t.children.includes(n)) {
        if (r !== void 0 && e.type === "list") {
            const a = t.children[r];
            a && "__FKP" in a ? (n._c.uid = a.uid, t.children.splice(r, 1, n)) : t.children.splice(r, 0, n), Array.isArray(e.value) && e.value.length < t.children.length && e.disturb().calm({
                name: r,
                value: n.value,
                from: zr
            })
        } else t.children.push(n);
        n.isSettled || e.disturb()
    }
    if (n.parent !== e) {
        if (n.parent = e, n.parent !== e) return e.remove(n), n.parent.add(n), e
    } else n.use(e.plugins);
    return wt(e, t, !1), e.ledger.merge(n), e.emit("child", n), e
}

function Ss(e, t, n, r) {
    return Ct(r) ? (e.parent && e.parent !== r && e.parent.remove(e), t.parent = r, e.resetConfig(), r.children.includes(e) ? e.use(r.plugins) : r.add(e), !0) : r === null ? (t.parent = null, !0) : !1
}

function ps(e, t, n) {
    const r = t.children.indexOf(n);
    if (r !== -1) {
        n.isSettled && e.disturb(), t.children.splice(r, 1);
        let a = Oe(n.props.preserve),
            i = n.parent;
        for (; a === void 0 && i;) a = Oe(i.props.preserve), i = i.parent;
        a ? e.calm() : e.calm({
            name: e.type === "list" ? r : n.name,
            value: On
        }), n.parent = null, n.config._rmn = n
    }
    return e.ledger.unmerge(n), e.emit("childRemoved", n), e
}

function ds(e, t, n) {
    t.children.forEach(r => !("__FKP" in r) && n(r))
}

function ms(e, t, n, r = !1, a = !1) {
    t.children.some(i => {
        if ("__FKP" in i) return !1;
        const s = n(i);
        return r && s === !1 ? !0 : a && s === !1 ? !1 : i.walk(n, r, a)
    })
}

function Ds(e, t) {
    const n = e.parent || void 0;
    t.config = Jr(e.config._t, n), e.walk(r => r.resetConfig())
}

function Bn(e, t, n, r = !0, a = !0) {
    return Array.isArray(n) || n instanceof Set ? (n.forEach(i => Bn(e, t, i)), e) : (t.plugins.has(n) || (a && typeof n.library == "function" && n.library(e), r && n(e) !== !1 && (t.plugins.add(n), e.children.forEach(i => i.use(n)))), e)
}

function Cs(e, t, n, r) {
    if (Ct(e.parent)) {
        const a = e.parent.children,
            i = r >= a.length ? a.length - 1 : r < 0 ? 0 : r,
            s = a.indexOf(e);
        return s === -1 ? !1 : (a.splice(s, 1), a.splice(i, 0, e), e.parent.children = a, e.parent.type === "list" && e.parent.disturb().calm({
            name: i,
            value: Ln,
            from: s
        }), !0)
    }
    return !1
}

function Ms(e) {
    if (e.parent) {
        const t = [...e.parent.children].indexOf(e);
        return t === -1 ? e.parent.children.length : t
    }
    return -1
}

function hs(e, t) {
    return t
}

function vs(e, t) {
    var n;
    return ((n = e.parent) == null ? void 0 : n.type) === "list" ? e.index : t.name !== jr ? t.name : e.index
}

function gs(e, t) {
    return t.parent ? t.parent.address.concat([e.name]) : [e.name]
}

function Ps(e, t, n) {
    const r = typeof n == "string" ? n.split(e.config.delimiter) : n;
    if (!r.length) return;
    const a = r[0];
    let i = e.parent;
    for (i || (String(r[0]) === String(e.name) && r.shift(), i = e), a === "$parent" && r.shift(); i && r.length;) {
        const s = r.shift();
        switch (s) {
            case "$root":
                i = e.root;
                break;
            case "$parent":
                i = i.parent;
                break;
            case "$self":
                i = e;
                break;
            default:
                i = i.children.find(o => !("__FKP" in o) && String(o.name) === String(s)) || $s(i, s)
        }
    }
    return i || void 0
}

function $s(e, t) {
    const n = String(t).match(/^(find)\((.*)\)$/);
    if (n) {
        const [, r, a] = n, i = a.split(",").map(s => s.trim());
        switch (r) {
            case "find":
                return e.find(i[0], i[1]);
            default:
                return
        }
    }
}

function ys(e, t, n, r) {
    return Us(e, n, r)
}

function Us(e, t, n = "name") {
    const r = typeof n == "string" ? i => i[n] == t : n,
        a = [e];
    for (; a.length;) {
        const i = a.shift();
        if (!("__FKP" in i)) {
            if (r(i, t)) return i;
            a.push(...i.children)
        }
    }
}

function Bs(e) {
    let t = e;
    for (; t.parent;) t = t.parent;
    return t
}

function Jr(e = {}, t) {
    let n;
    return new Proxy(e, {
        get(...r) {
            const a = r[1];
            if (a === "_t") return e;
            const i = Reflect.get(...r);
            if (i !== void 0) return i;
            if (t) {
                const s = t.config[a];
                if (s !== void 0) return s
            }
            if (e.rootConfig && typeof a == "string") {
                const s = e.rootConfig[a];
                if (s !== void 0) return s
            }
            return a === "delay" && (n == null ? void 0 : n.type) === "input" ? 20 : is[a]
        },
        set(...r) {
            const a = r[1],
                i = r[2];
            if (a === "_n") return n = i, e.rootConfig && e.rootConfig._add(n), !0;
            if (a === "_rmn") return e.rootConfig && e.rootConfig._rm(n), n = void 0, !0;
            if (!te(e[a], i, !1)) {
                const s = Reflect.set(...r);
                return n && (n.emit(`config:${a}`, i, !1), Tn(n, a, i), n.walk(o => Tn(o, a, i), !1, !0)), s
            }
            return !0
        }
    })
}

function bs(e, t, n, r = "ui") {
    const a = typeof n == "string" ? {
            key: n,
            value: n,
            type: r
        } : n,
        i = e.hook.text.dispatch(a);
    return e.emit("text", i, !1), i.value
}

function Ys(e) {
    const t = e.name;
    do {
        if (e.props.isForm === !0) break;
        e.parent || oe(106, t), e = e.parent
    } while (e);
    e.props.id && Wr(e.props.id, e.props.__root)
}

function ks(e, t, n) {
    return Gr(e, n)
}

function Hs(e, t, n, r) {
    const a = `${e.name}-set`,
        i = e.hook.setErrors.dispatch({
            localErrors: n,
            childErrors: r
        });
    return Qi(e, i.localErrors, i.childErrors).forEach(s => {
        e.store.apply(s, o => o.meta.source === a)
    }), e
}

function Vs(e, t, n = !0, r) {
    return e.store.filter(a => !(r === void 0 || a.meta.source === r), "error"), n && (r = r || `${e.name}-set`, e.walk(a => {
        a.store.filter(i => !(i.type === "error" && i.meta && i.meta.source === r))
    })), e
}

function Fs(e) {
    const t = {
        initial: typeof e == "object" ? Ae(e) : e
    };
    let n, r = !0,
        a = {};
    return new Proxy(t, {
        get(...i) {
            var I, d, y, D;
            const [s, o] = i;
            let E;
            b(t, o) ? (E = Reflect.get(...i), (I = a[o]) != null && I.boolean && (E = Yi(E))) : n && typeof o == "string" && n.config[o] !== void 0 ? (E = n.config[o], o === "mergeStrategy" && (n == null ? void 0 : n.type) === "input" && Ft(E) && n.name in E && (E = E[n.name])) : E = (d = a[o]) == null ? void 0 : d.default;
            const u = (y = a[o]) == null ? void 0 : y.getter;
            return (D = a[o]) != null && D.boolean && (E = !!E), u ? u(E, n) : E
        },
        set(i, s, o, E) {
            var y;
            if (s === "_n") return n = o, !0;
            if (s === "_emit") return r = o, !0;
            let {
                prop: u,
                value: I
            } = n.hook.prop.dispatch({
                prop: s,
                value: o
            });
            const d = (y = a[u]) == null ? void 0 : y.setter;
            if (I = d ? d(I, n) : I, !te(t[u], I, !1) || typeof I == "object") {
                const D = Reflect.set(i, u, I, E);
                return u === "__propDefs" && (a = In(I)), r && (n.emit("prop", {
                    prop: u,
                    value: I
                }), typeof u == "string" && n.emit(`prop:${u}`, I)), D
            }
            return !0
        }
    })
}

function ws(e, t, n, r) {
    return t.traps.set(n, r), e
}

function Ws(e, t) {
    if (e.props.definition) return e.define(e.props.definition);
    for (const n of t) {
        if (e.props.definition) return;
        typeof n.library == "function" && n.library(e)
    }
}

function Gs(e) {
    const t = Qr(e),
        n = Jr(e.config || {}, e.parent);
    return {
        _d: 0,
        _e: Hr(),
        uid: Symbol(),
        _resolve: !1,
        _tmo: !1,
        _value: t,
        children: Mi(e.children || []),
        config: n,
        hook: ls(),
        isCreated: !1,
        isSettled: !0,
        ledger: Zi(),
        name: us(e),
        parent: e.parent || null,
        plugins: new Set,
        props: Fs(t),
        settled: Promise.resolve(t),
        store: wi(!0),
        sync: e.sync || !1,
        traps: Es(),
        type: e.type || "input",
        value: t
    }
}

function js(e, t) {
    var r, a;
    const n = (r = t.props) == null ? void 0 : r.id;
    if (n || (a = t.props) == null || delete a.id, e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, Object.assign(e.props, n ? {} : {
            id: `input_${cs++}`
        }, t.props ? ? {}), e.props._emit = !0, Ws(e, new Set([...t.plugins || [], ...e.parent ? e.parent.plugins : []])), t.plugins)
        for (const i of t.plugins) Bn(e, e._c, i, !0, !1);
    return e.each(i => e.add(i)), e.parent && e.parent.add(e, t.index), e.type === "input" && e.children.length && oe(100, e), Kr(e, e._c, e._value, !1), e.store.release(), n && es(e), e.emit("created", e), e.isCreated = !0, e
}

function zs(e) {
    return {
        __FKP: !0,
        uid: Symbol(),
        name: (e == null ? void 0 : e.name) ? ? `p_${xr++}`,
        value: (e == null ? void 0 : e.value) ? ? null,
        _value: (e == null ? void 0 : e.value) ? ? null,
        type: (e == null ? void 0 : e.type) ? ? "input",
        props: {},
        use: () => {},
        input(t) {
            return this._value = t, this.value = t, Promise.resolve()
        },
        isSettled: !0
    }
}

function xs(e) {
    return "__FKP" in e
}

function Qs(e) {
    const t = e || {},
        n = Gs(t),
        r = new Proxy(n, {
            get(...a) {
                const [, i] = a;
                if (i === "__FKNode__") return !0;
                const s = n.traps.get(i);
                return s && s.get ? s.get(r, n) : Reflect.get(...a)
            },
            set(...a) {
                const [, i, s] = a, o = n.traps.get(i);
                return o && o.set ? o.set(r, n, i, s) : Reflect.set(...a)
            }
        });
    return js(r, t)
}

function Nn(e) {
    return typeof e != "string" && b(e, "$el")
}

function fn(e) {
    return typeof e != "string" && b(e, "$cmp")
}

function xe(e) {
    return !e || typeof e == "string" ? !1 : b(e, "if") && b(e, "then")
}

function Ks(e) {
    return typeof e != "string" && "$formkit" in e
}

function qs(e) {
    if (typeof e == "string") return {
        $el: "text",
        children: e
    };
    if (Ks(e)) {
        const {
            $formkit: t,
            for: n,
            if: r,
            children: a,
            bind: i,
            ...s
        } = e;
        return Object.assign({
            $cmp: "FormKit",
            props: { ...s,
                type: t
            }
        }, r ? {
            if: r
        } : {}, n ? {
            for: n
        } : {}, a ? {
            children: a
        } : {}, i ? {
            bind: i
        } : {})
    }
    return e
}

function _e(e) {
    let t;
    const n = new Set,
        r = function(L, f) {
            return typeof L == "function" ? L(f) : L
        },
        a = [{
            "&&": (T, L, f) => r(T, f) && r(L, f),
            "||": (T, L, f) => r(T, f) || r(L, f)
        }, {
            "===": (T, L, f) => r(T, f) === r(L, f),
            "!==": (T, L, f) => r(T, f) !== r(L, f),
            "==": (T, L, f) => r(T, f) == r(L, f),
            "!=": (T, L, f) => r(T, f) != r(L, f),
            ">=": (T, L, f) => r(T, f) >= r(L, f),
            "<=": (T, L, f) => r(T, f) <= r(L, f),
            ">": (T, L, f) => r(T, f) > r(L, f),
            "<": (T, L, f) => r(T, f) < r(L, f)
        }, {
            "+": (T, L, f) => r(T, f) + r(L, f),
            "-": (T, L, f) => r(T, f) - r(L, f)
        }, {
            "*": (T, L, f) => r(T, f) * r(L, f),
            "/": (T, L, f) => r(T, f) / r(L, f),
            "%": (T, L, f) => r(T, f) % r(L, f)
        }],
        i = a.reduce((T, L) => T.concat(Object.keys(L)), []),
        s = new Set(i.map(T => T.charAt(0)));

    function o(T, L, f, m) {
        const h = T.filter(C => C.startsWith(L));
        return h.length ? h.find(C => m.length >= f + C.length && m.substring(f, f + C.length) === C ? C : !1) : !1
    }

    function E(T, L, f = 1) {
        let m = f ? L.substring(T + 1).trim() : L.substring(0, T).trim();
        if (!m.length) return -1;
        if (!f) {
            const C = m.split("").reverse(),
                g = C.findIndex(c => s.has(c));
            m = C.slice(g).join("")
        }
        const h = m[0];
        return a.findIndex(C => {
            const g = Object.keys(C);
            return !!o(g, h, 0, m)
        })
    }

    function u(T, L) {
        let f = "";
        const m = L.length;
        let h = 0;
        for (let C = T; C < m; C++) {
            const g = L.charAt(C);
            if (g === "(") h++;
            else if (g === ")") h--;
            else if (h === 0 && g === " ") continue;
            if (h === 0 && o(i, g, C, L)) return [f, C - 1];
            f += g
        }
        return [f, L.length - 1]
    }

    function I(T, L = 0) {
        const f = a[L],
            m = T.length,
            h = Object.keys(f);
        let C = 0,
            g = !1,
            c = null,
            O = "",
            P = null,
            A, R = "",
            _ = "",
            l = "",
            S = "",
            $ = 0;
        const U = (k, Y) => {
            k ? l += Y : O += Y
        };
        for (let k = 0; k < m; k++)
            if (R = _, _ = T.charAt(k), (_ === "'" || _ === '"') && R !== "\\" && (C === 0 && !g || C && !S)) {
                C ? S = _ : g = _, U(C, _);
                continue
            } else if (g && (_ !== g || R === "\\") || S && (_ !== S || R === "\\")) {
            U(C, _);
            continue
        } else if (g === _) {
            g = !1, U(C, _);
            continue
        } else if (S === _) {
            S = !1, U(C, _);
            continue
        } else {
            if (_ === " ") continue;
            if (_ === "(") C === 0 ? $ = k : l += _, C++;
            else if (_ === ")")
                if (C--, C === 0) {
                    const Y = typeof O == "string" && O.startsWith("$") ? O : void 0,
                        z = Y && T.charAt(k + 1) === ".";
                    let J = "";
                    z && ([J, k] = u(k + 2, T));
                    const je = c ? L : E($, T, 0),
                        He = E(k, T);
                    je === -1 && He === -1 ? (O = d(l, -1, Y, J), typeof O == "string" && (O = l)) : c && (je >= He || He === -1) && L === je ? (P = c.bind(null, d(l, -1, Y, J)), c = null, O = "") : He > je && L === He ? O = d(l, -1, Y, J) : O += `(${l})${z?`.${J}`:""}`, l = ""
                } else l += _;
            else if (C === 0 && (A = o(h, _, k, T))) {
                k === 0 && oe(103, [A, T]), k += A.length - 1, k === T.length - 1 && oe(104, [A, T]), c ? O && (P = c.bind(null, d(O, L)), c = f[A].bind(null, P), O = "") : P ? (c = f[A].bind(null, d(P, L)), P = null) : (c = f[A].bind(null, d(O, L)), O = "");
                continue
            } else U(C, _)
        }
        return O && c && (c = c.bind(null, d(O, L))), c = !c && P ? P : c, !c && O && (c = (k, Y) => typeof k == "function" ? k(Y) : k, c = c.bind(null, d(O, L))), !c && !O && oe(105, T), c
    }

    function d(T, L, f, m) {
        if (f) {
            const h = d(f, a.length);
            let C, g = m ? _e(`$${m}`) : !1;
            if (typeof h == "function") {
                const c = yi(String(T)).map(O => d(O, -1));
                return O => {
                    const P = h(O);
                    return typeof P != "function" ? (Ge(150, f), P) : (C = P(...c.map(A => typeof A == "function" ? A(O) : A)), g && (g = g.provide(A => {
                        const R = t(A);
                        return A.reduce((l, S) => {
                            if (S === m || (m == null ? void 0 : m.startsWith(`${S}(`))) {
                                const U = Ui(C, S);
                                l[S] = () => U
                            } else l[S] = R[S];
                            return l
                        }, {})
                    })), g ? g() : C)
                }
            }
        } else if (typeof T == "string") {
            if (T === "true") return !0;
            if (T === "false") return !1;
            if (T === "undefined") return;
            if (Pi(T)) return $i(T.substring(1, T.length - 1));
            if (!isNaN(+T)) return Number(T);
            if (L < a.length - 1) return I(T, L + 1);
            if (T.startsWith("$")) {
                const h = T.substring(1);
                return n.add(h),
                    function(g) {
                        return h in g ? g[h]() : void 0
                    }
            }
            return T
        }
        return T
    }
    const y = I(e.startsWith("$:") ? e.substring(2) : e),
        D = Array.from(n);

    function M(T) {
        return t = T, Object.assign(y.bind(null, T(D)), {
            provide: M
        })
    }
    return Object.assign(y, {
        provide: M
    })
}

function Bt(e, t, n) {
    return n ? typeof n == "string" ? n.split(" ").reduce((a, i) => Object.assign(a, {
        [i]: !0
    }), {}) : typeof n == "function" ? Bt(e, t, n(t, e)) : n : {}
}

function Zs(e, t, ...n) {
    const r = n.reduce((a, i) => {
        if (!i) return nn(a);
        const {
            $reset: s,
            ...o
        } = i;
        return nn(s ? o : Object.assign(a, o))
    }, {});
    return Object.keys(e.hook.classes.dispatch({
        property: t,
        classes: r
    }).classes).filter(a => r[a]).join(" ") || null
}

function nn(e) {
    const t = "$remove:";
    let n = !1;
    const r = Object.keys(e).filter(a => (e[a] && a.startsWith(t) && (n = !0), e[a]));
    return r.length > 1 && n && r.filter(i => i.startsWith(t)).map(i => {
        const s = i.substring(t.length);
        e[s] = !1, e[i] = !1
    }), e
}

function Js(e, t, n) {
    const r = Dt(e);
    r ? r.setErrors(t, n) : Ge(651, e)
}

function Xs(e, t = !0) {
    const n = Dt(e);
    n ? n.clearErrors(t) : Ge(652, e)
}
var Wt = "1.6.7",
    Xr = new WeakSet;

function Jt(e, t) {
    const n = t || Object.assign(new Map, {
            active: !1
        }),
        r = new Map,
        a = function(I) {
            var d;
            n.active && (n.has(e) || n.set(e, new Set), (d = n.get(e)) == null || d.add(I))
        },
        i = function(I) {
            return new Proxy(I, {
                get(...d) {
                    return typeof d[1] == "string" && a(`prop:${d[1]}`), Reflect.get(...d)
                }
            })
        },
        s = function(I) {
            return new Proxy(I, {
                get(...d) {
                    return d[1] === "value" ? y => (a(`count:${y}`), I.value(y)) : Reflect.get(...d)
                }
            })
        },
        o = function(I, d) {
            return Ct(I) ? Jt(I, n) : (d === "value" && a("commit"), d === "_value" && a("input"), d === "props" ? i(I) : d === "ledger" ? s(I) : (d === "children" && (a("child"), a("childRemoved")), I))
        },
        {
            proxy: E,
            revoke: u
        } = Proxy.revocable(e, {
            get(...I) {
                switch (I[1]) {
                    case "_node":
                        return e;
                    case "deps":
                        return n;
                    case "watch":
                        return (y, D, M) => na(E, y, D, M);
                    case "observe":
                        return () => {
                            const y = new Map(n);
                            return n.clear(), n.active = !0, y
                        };
                    case "stopObserve":
                        return () => {
                            const y = new Map(n);
                            return n.active = !1, y
                        };
                    case "receipts":
                        return r;
                    case "kill":
                        return () => {
                            ta(r), Xr.add(I[2]), u()
                        }
                }
                const d = Reflect.get(...I);
                return typeof d == "function" ? (...y) => {
                    const D = d(...y);
                    return o(D, I[1])
                } : o(d, I[1])
            }
        });
    return E
}

function ea(e, [t, n], r, a) {
    t.forEach((i, s) => {
        i.forEach(o => {
            e.receipts.has(s) || e.receipts.set(s, {});
            const E = e.receipts.get(s) ? ? {};
            E[o] = E[o] ? ? [], E[o].push(s.on(o, r, a)), e.receipts.set(s, E)
        })
    }), n.forEach((i, s) => {
        i.forEach(o => {
            if (e.receipts.has(s)) {
                const E = e.receipts.get(s);
                E && b(E, o) && (E[o].map(s.off), delete E[o], e.receipts.set(s, E))
            }
        })
    })
}

function ta(e) {
    e.forEach((t, n) => {
        for (const r in t) t[r].map(n.off)
    }), e.clear()
}

function na(e, t, n, r) {
    const a = o => {
            const E = e.stopObserve();
            ea(e, ra(i, E), () => na(e, t, n, r), r), n && n(o)
        },
        i = new Map(e.deps);
    e.observe();
    const s = t(e);
    s instanceof Promise ? s.then(o => a(o)) : a(s)
}

function ra(e, t) {
    const n = new Map,
        r = new Map;
    return t.forEach((a, i) => {
        if (!e.has(i)) n.set(i, a);
        else {
            const s = new Set,
                o = e.get(i);
            a.forEach(E => !(o != null && o.has(E)) && s.add(E)), n.set(i, s)
        }
    }), e.forEach((a, i) => {
        if (!t.has(i)) r.set(i, a);
        else {
            const s = new Set,
                o = t.get(i);
            a.forEach(E => !(o != null && o.has(E)) && s.add(E)), r.set(i, s)
        }
    }), [n, r]
}

function bn(e) {
    return Xr.has(e)
}
var aa = function({
    value: t
}) {
    return ["yes", "on", "1", 1, !0, "true"].includes(t)
};
aa.skipEmpty = !1;
var eo = aa,
    to = function({
        value: e
    }, t = !1) {
        const n = Date.parse(t || new Date),
            r = Date.parse(String(e));
        return isNaN(r) ? !1 : r > n
    },
    no = to,
    ro = function({
        value: e
    }, t = !1) {
        const n = Date.parse(t || new Date),
            r = Date.parse(String(e));
        return isNaN(r) ? !1 : r > n || r === n
    },
    ao = ro,
    io = function(e, t) {
        var a;
        if (!t) return !1;
        const n = Date.parse(String(e.value)),
            r = Date.parse(String((a = e.at(t)) == null ? void 0 : a.value));
        return isNaN(r) ? !0 : isNaN(n) ? !1 : n > r
    },
    so = io,
    oo = function({
        value: e
    }, t = "default") {
        const n = {
                default: new RegExp("^\\p{L}+$", "u"),
                latin: /^[a-z]+$/i
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Eo = oo,
    lo = function({
        value: e
    }, t = "default") {
        const n = {
                default: /^[\p{L} ]+$/u,
                latin: /^[a-z ]+$/i
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    co = lo,
    uo = function({
        value: e
    }, t = "default") {
        const n = {
                default: /^[0-9\p{L}]+$/u,
                latin: /^[0-9a-z]+$/i
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Ao = uo,
    Ro = function({
        value: e
    }, t = !1) {
        const n = Date.parse(t || new Date),
            r = Date.parse(String(e));
        return isNaN(r) ? !1 : r < n
    },
    _o = Ro,
    To = function(e, t) {
        var a;
        if (!t) return !1;
        const n = Date.parse(String(e.value)),
            r = Date.parse(String((a = e.at(t)) == null ? void 0 : a.value));
        return isNaN(r) ? !0 : isNaN(n) ? !1 : n < r
    },
    Oo = To,
    Lo = function({
        value: e
    }, t = !1) {
        const n = Date.parse(t || new Date),
            r = Date.parse(String(e));
        return isNaN(r) ? !1 : r < n || r === n
    },
    Io = Lo,
    No = function({
        value: t
    }, n, r) {
        if (!isNaN(t) && !isNaN(n) && !isNaN(r)) {
            const a = 1 * t;
            n = Number(n), r = Number(r);
            const [i, s] = n <= r ? [n, r] : [r, n];
            return a >= 1 * i && a <= 1 * s
        }
        return !1
    },
    fo = No,
    Jn = /(_confirm(?:ed)?)$/,
    So = function(t, n, r = "loose") {
        var i;
        n || (n = Jn.test(t.name) ? t.name.replace(Jn, "") : `${t.name}_confirm`);
        const a = (i = t.at(n)) == null ? void 0 : i.value;
        return r === "strict" ? t.value === a : t.value == a
    },
    po = So,
    mo = function({
        value: e
    }, t = "default") {
        const n = {
                default: new RegExp("\\p{L}", "u"),
                latin: /[a-z]/i
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Do = mo,
    Co = function({
        value: e
    }, t = "default") {
        const n = {
                default: /[\p{L} ]/u,
                latin: /[a-z ]/i
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Mo = Co,
    ho = function({
        value: e
    }, t = "default") {
        const n = {
                default: /[0-9\p{L}]/u,
                latin: /[0-9a-z]/i
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    vo = ho,
    go = function({
        value: e
    }, t = "default") {
        const n = {
                default: new RegExp("\\p{Ll}", "u"),
                latin: /[a-z]/
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Po = go,
    $o = function({
        value: t
    }) {
        return /[0-9]/.test(String(t))
    },
    yo = $o,
    Uo = function({
        value: e
    }) {
        return /[!-/:-@[-`{-~]/.test(String(e))
    },
    Bo = Uo,
    bo = function({
        value: e
    }, t = "default") {
        const n = {
                default: new RegExp("\\p{Lu}", "u"),
                latin: /[A-Z]/
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Yo = bo,
    ko = function({
        value: t
    }, n, r) {
        n = n instanceof Date ? n.getTime() : Date.parse(n), r = r instanceof Date ? r.getTime() : Date.parse(r);
        const a = t instanceof Date ? t.getTime() : Date.parse(String(t));
        if (n && !r) r = n, n = Date.now();
        else if (!n || !a) return !1;
        return a >= n && a <= r
    },
    Ho = ko,
    Vo = function({
        value: t
    }, n) {
        return n && typeof n == "string" ? gi(n).test(String(t)) : !isNaN(Date.parse(String(t)))
    },
    Fo = Vo,
    wo = function({
        value: t
    }) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t))
    },
    Wo = wo,
    Go = function({
        value: t
    }, ...n) {
        return typeof t == "string" && n.length ? n.some(r => t.endsWith(r)) : typeof t == "string" && n.length === 0
    },
    jo = Go,
    zo = function({
        value: t
    }, ...n) {
        return n.some(r => typeof r == "object" ? te(r, t) : r == t)
    },
    xo = zo,
    Qo = function({
        value: t
    }, n = 0, r = 1 / 0) {
        n = parseInt(n), r = isNaN(parseInt(r)) ? 1 / 0 : parseInt(r);
        const a = n <= r ? n : r,
            i = r >= n ? r : n;
        if (typeof t == "string" || Array.isArray(t)) return t.length >= a && t.length <= i;
        if (t && typeof t == "object") {
            const s = Object.keys(t).length;
            return s >= a && s <= i
        }
        return !1
    },
    Ko = Qo,
    qo = function({
        value: e
    }, t = "default") {
        const n = {
                default: new RegExp("^\\p{Ll}+$", "u"),
                allow_non_alpha: /^[0-9\p{Ll}!-/:-@[-`{-~]+$/u,
                allow_numeric: /^[0-9\p{Ll}]+$/u,
                allow_numeric_dashes: /^[0-9\p{Ll}-]+$/u,
                latin: /^[a-z]+$/
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    Zo = qo,
    Jo = function({
        value: t
    }, ...n) {
        return n.some(r => (typeof r == "string" && r.substr(0, 1) === "/" && r.substr(-1) === "/" && (r = new RegExp(r.substr(1, r.length - 2))), r instanceof RegExp ? r.test(String(t)) : r === t))
    },
    Xo = Jo,
    eE = function({
        value: t
    }, n = 10) {
        return Array.isArray(t) ? t.length <= n : Number(t) <= Number(n)
    },
    tE = eE,
    nE = function({
        value: t
    }, n = 1) {
        return Array.isArray(t) ? t.length >= n : Number(t) >= Number(n)
    },
    rE = nE,
    aE = function({
        value: t
    }, ...n) {
        return !n.some(r => typeof r == "object" ? te(r, t) : r === t)
    },
    iE = aE,
    sE = function({
        value: t
    }) {
        return !isNaN(t)
    },
    oE = sE,
    ia = function(e, ...t) {
        return Re(e.value) ? t.map(r => {
            var a;
            return (a = e.at(r)) == null ? void 0 : a.value
        }).some(r => !Re(r)) : !0
    };
ia.skipEmpty = !1;
var EE = ia,
    sa = function({
        value: t
    }, n = "default") {
        return n === "trim" && typeof t == "string" ? !Re(t.trim()) : !Re(t)
    };
sa.skipEmpty = !1;
var lE = sa,
    cE = function({
        value: t
    }, ...n) {
        return typeof t == "string" && n.length ? n.some(r => t.startsWith(r)) : typeof t == "string" && n.length === 0
    },
    uE = cE,
    AE = function({
        value: e
    }) {
        return /^[!-/:-@[-`{-~]+$/.test(String(e))
    },
    RE = AE,
    _E = function({
        value: e
    }, t = "default") {
        const n = {
                default: new RegExp("^\\p{Lu}+$", "u"),
                latin: /^[A-Z]+$/
            },
            r = b(n, t) ? t : "default";
        return n[r].test(String(e))
    },
    TE = _E,
    OE = function({
        value: t
    }, ...n) {
        try {
            const r = n.length ? n : ["http:", "https:"],
                a = new URL(String(t));
            return r.includes(a.protocol)
        } catch {
            return !1
        }
    },
    LE = OE;
const IE = Object.freeze(Object.defineProperty({
    __proto__: null,
    accepted: eo,
    alpha: Eo,
    alpha_spaces: co,
    alphanumeric: Ao,
    between: fo,
    confirm: po,
    contains_alpha: Do,
    contains_alpha_spaces: Mo,
    contains_alphanumeric: vo,
    contains_lowercase: Po,
    contains_numeric: yo,
    contains_symbol: Bo,
    contains_uppercase: Yo,
    date_after: no,
    date_after_node: so,
    date_after_or_equal: ao,
    date_before: _o,
    date_before_node: Oo,
    date_before_or_equal: Io,
    date_between: Ho,
    date_format: Fo,
    email: Wo,
    ends_with: jo,
    is: xo,
    length: Ko,
    lowercase: Zo,
    matches: Xo,
    max: tE,
    min: rE,
    not: iE,
    number: oE,
    require_one: EE,
    required: lE,
    starts_with: uE,
    symbol: RE,
    uppercase: TE,
    url: LE
}, Symbol.toStringTag, {
    value: "Module"
}));
var Sn = Ee({
    type: "state",
    blocking: !0,
    visible: !1,
    value: !0,
    key: "validating"
});

function NE(e = {}) {
    return function(n) {
        let r = Ae(n.props.validationRules || {}),
            a = { ...e,
                ...r
            };
        const i = {
            input: Rt(),
            rerun: null,
            isPassing: !0
        };
        let s = Ae(n.props.validation);
        n.on("prop:validation", ({
            payload: E
        }) => o(E, r)), n.on("prop:validationRules", ({
            payload: E
        }) => o(s, E));

        function o(E, u) {
            var I;
            te(Object.keys(r || {}), Object.keys(u || {})) && te(s, E) || (r = Ae(u), s = Ae(E), a = { ...e,
                ...r
            }, (I = n.props.parsedRules) == null || I.forEach(d => {
                oa(d), ta(d.observer.receipts), d.observer.kill()
            }), n.store.filter(() => !1, "validation"), n.props.parsedRules = er(E, a, n), i.isPassing = !0, pn(n, n.props.parsedRules, i))
        }
        n.props.parsedRules = er(s, a, n), pn(n, n.props.parsedRules, i)
    }
}

function pn(e, t, n) {
    bn(e) || (n.input = Rt(), e.store.set(Ee({
        key: "failing",
        value: !n.isPassing,
        visible: !1
    })), n.isPassing = !0, e.store.filter(r => !r.meta.removeImmediately, "validation"), t.forEach(r => r.debounce && clearTimeout(r.timer)), t.length && (e.store.set(Sn), dn(0, t, n, !1, () => {
        e.store.remove(Sn.key), e.store.set(Ee({
            key: "failing",
            value: !n.isPassing,
            visible: !1
        }))
    })))
}

function dn(e, t, n, r, a) {
    const i = t[e];
    if (!i) return a();
    const s = i.observer;
    if (bn(s)) return;
    const o = n.input;
    i.state = null;

    function E(u, I) {
        if (n.input !== o) return;
        n.isPassing = n.isPassing && !!I, i.queued = !1;
        const d = s.stopObserve(),
            y = ra(i.deps, d);
        if (ea(s, y, function() {
                try {
                    s.store.set(Sn)
                } catch {}
                i.queued = !0, n.rerun && clearTimeout(n.rerun), n.rerun = setTimeout(pn, 0, s, t, n)
            }, "unshift"), i.deps = d, i.state = I, I === !1 ? SE(i, r || u) : oa(i), t.length > e + 1) {
            const D = t[e + 1];
            (I || D.force || !D.skipEmpty) && D.state === null && (D.queued = !0), dn(e + 1, t, n, r || u, a)
        } else a()
    }(!Re(s.value) || !i.skipEmpty) && (n.isPassing || i.force) ? i.queued ? fE(i, s, u => {
        u instanceof Promise ? u.then(I => E(!0, I)) : E(!1, u)
    }) : dn(e + 1, t, n, r, a): Re(s.value) && i.skipEmpty && n.isPassing ? (s.observe(), s.value, E(!1, n.isPassing)) : E(!1, null)
}

function fE(e, t, n) {
    e.debounce ? e.timer = setTimeout(() => {
        t.observe(), n(e.rule(t, ...e.args))
    }, e.debounce) : (t.observe(), n(e.rule(t, ...e.args)))
}

function oa(e) {
    const t = `rule_${e.name}`;
    e.messageObserver && (e.messageObserver = e.messageObserver.kill()), b(e.observer.store, t) && e.observer.store.remove(t)
}

function SE(e, t) {
    const n = e.observer;
    bn(n) || (e.messageObserver || (e.messageObserver = Jt(n._node)), e.messageObserver.watch(r => dE(r, e), r => {
        const a = pE(n, e, r),
            i = Ee({
                blocking: e.blocking,
                key: `rule_${e.name}`,
                meta: {
                    messageKey: e.name,
                    removeImmediately: t,
                    localize: !a,
                    i18nArgs: r
                },
                type: "validation",
                value: a || "This field is not valid."
            });
        n.store.set(i)
    }))
}

function pE(e, t, n) {
    const r = e.props.validationMessages && b(e.props.validationMessages, t.name) ? e.props.validationMessages[t.name] : void 0;
    return typeof r == "function" ? r(...n) : r
}

function dE(e, t) {
    return [{
        node: e,
        name: Ea(e),
        args: t.args
    }]
}

function Ea(e) {
    return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name)
}
var la = "(?:[\\*+?()0-9]+)",
    ca = "[a-zA-Z][a-zA-Z0-9_]+",
    mE = new RegExp(`^(${la}?${ca})(?:\\:(.*)+)?$`, "i"),
    DE = new RegExp(`^(${la})(${ca})$`, "i"),
    CE = /([\*+?]+)?(\(\d+\))([\*+?]+)?/,
    Xn = /\(\d+\)/,
    ME = {
        blocking: !0,
        debounce: 0,
        force: !1,
        skipEmpty: !0,
        name: ""
    };

function er(e, t, n) {
    return e ? (typeof e == "string" ? hE(e) : ct(e)).reduce((a, i) => {
        let s = i.shift();
        const o = {};
        if (typeof s == "string") {
            const [E, u] = gE(s);
            b(t, E) && (s = t[E], Object.assign(o, u))
        }
        return typeof s == "function" && a.push({
            observer: Jt(n),
            rule: s,
            args: i,
            timer: 0,
            state: null,
            queued: !0,
            deps: new Map,
            ...ME,
            ...PE(o, s)
        }), a
    }, []) : []
}

function hE(e) {
    return e.split("|").reduce((t, n) => {
        const r = vE(n);
        return r && t.push(r), t
    }, [])
}

function vE(e) {
    const t = e.trim();
    if (t) {
        const n = t.match(mE);
        if (n && typeof n[1] == "string") {
            const r = n[1].trim(),
                a = n[2] && typeof n[2] == "string" ? n[2].split(",").map(i => i.trim()) : [];
            return [r, ...a]
        }
    }
    return !1
}

function gE(e) {
    const t = e.match(DE);
    if (!t) return [e, {
        name: e
    }];
    const n = {
            "*": {
                force: !0
            },
            "+": {
                skipEmpty: !1
            },
            "?": {
                blocking: !1
            }
        },
        [, r, a] = t,
        i = Xn.test(r) ? r.match(CE) || [] : [, r];
    return [a, [i[1], i[2], i[3]].reduce((s, o) => (o && (Xn.test(o) ? s.debounce = parseInt(o.substr(1, o.length - 1)) : o.split("").forEach(E => b(n, E) && Object.assign(s, n[E]))), s), {
        name: a
    })]
}

function PE(e, t) {
    return e.name || (e.name = t.ruleName || t.name), ["skipEmpty", "force", "debounce", "blocking"].reduce((n, r) => (b(t, r) && !b(n, r) && Object.assign(n, {
        [r]: t[r]
    }), n), e)
}

function H(e) {
    return e[0].toUpperCase() + e.substr(1)
}

function tr(e, t = "or") {
    return e.reduce((n, r, a) => (n += r, a <= e.length - 2 && e.length > 2 && (n += ", "), a === e.length - 2 && (n += `${e.length===2?" ":""}${t} `), n), "")
}

function Pt(e) {
    const t = typeof e == "string" ? new Date(Date.parse(e)) : e;
    return t instanceof Date ? new Intl.DateTimeFormat(void 0, {
        dateStyle: "medium",
        timeZone: "UTC"
    }).format(t) : "(unknown)"
}

function $E(e, t) {
    return Number(e) >= Number(t) ? [t, e] : [e, t]
}
var yE = {
        add: "Add",
        remove: "Remove",
        removeAll: "Remove all",
        incomplete: "Sorry, not all fields are filled out correctly.",
        submit: "Submit",
        noFiles: "No file chosen",
        moveUp: "Move up",
        moveDown: "Move down",
        isLoading: "Loading...",
        loadMore: "Load more",
        next: "Next",
        prev: "Previous",
        addAllValues: "Add all values",
        addSelectedValues: "Add selected values",
        removeAllValues: "Remove all values",
        removeSelectedValues: "Remove selected values",
        chooseDate: "Choose date",
        changeDate: "Change date",
        summaryHeader: "There were errors in your form.",
        close: "Close",
        open: "Open"
    },
    UE = {
        accepted({
            name: e
        }) {
            return `Please accept the ${e}.`
        },
        date_after({
            name: e,
            args: t
        }) {
            return Array.isArray(t) && t.length ? `${H(e)} must be after ${Pt(t[0])}.` : `${H(e)} must be in the future.`
        },
        alpha({
            name: e
        }) {
            return `${H(e)} can only contain alphabetical characters.`
        },
        alphanumeric({
            name: e
        }) {
            return `${H(e)} can only contain letters and numbers.`
        },
        alpha_spaces({
            name: e
        }) {
            return `${H(e)} can only contain letters and spaces.`
        },
        contains_alpha({
            name: e
        }) {
            return `${H(e)} must contain alphabetical characters.`
        },
        contains_alphanumeric({
            name: e
        }) {
            return `${H(e)} must contain letters or numbers.`
        },
        contains_alpha_spaces({
            name: e
        }) {
            return `${H(e)} must contain letters or spaces.`
        },
        contains_symbol({
            name: e
        }) {
            return `${H(e)} must contain a symbol.`
        },
        contains_uppercase({
            name: e
        }) {
            return `${H(e)} must contain an uppercase letter.`
        },
        contains_lowercase({
            name: e
        }) {
            return `${H(e)} must contain a lowercase letter.`
        },
        contains_numeric({
            name: e
        }) {
            return `${H(e)} must contain numbers.`
        },
        symbol({
            name: e
        }) {
            return `${H(e)} must be a symbol.`
        },
        uppercase({
            name: e
        }) {
            return `${H(e)} can only contain uppercase letters.`
        },
        lowercase({
            name: e,
            args: t
        }) {
            let n = "";
            return Array.isArray(t) && t.length && (t[0] === "allow_non_alpha" && (n = ", numbers and symbols"), t[0] === "allow_numeric" && (n = " and numbers"), t[0] === "allow_numeric_dashes" && (n = ", numbers and dashes")), `${H(e)} can only contain lowercase letters${n}.`
        },
        date_before({
            name: e,
            args: t
        }) {
            return Array.isArray(t) && t.length ? `${H(e)} must be before ${Pt(t[0])}.` : `${H(e)} must be in the past.`
        },
        between({
            name: e,
            args: t
        }) {
            if (isNaN(t[0]) || isNaN(t[1])) return "This field was configured incorrectly and can’t be submitted.";
            const [n, r] = $E(t[0], t[1]);
            return `${H(e)} must be between ${n} and ${r}.`
        },
        confirm({
            name: e
        }) {
            return `${H(e)} does not match.`
        },
        date_format({
            name: e,
            args: t
        }) {
            return Array.isArray(t) && t.length ? `${H(e)} is not a valid date, please use the format ${t[0]}` : "This field was configured incorrectly and can’t be submitted"
        },
        date_between({
            name: e,
            args: t
        }) {
            return `${H(e)} must be between ${Pt(t[0])} and ${Pt(t[1])}`
        },
        email: "Please enter a valid email address.",
        ends_with({
            name: e,
            args: t
        }) {
            return `${H(e)} doesn’t end with ${tr(t)}.`
        },
        is({
            name: e
        }) {
            return `${H(e)} is not an allowed value.`
        },
        length({
            name: e,
            args: [t = 0, n = 1 / 0]
        }) {
            const r = Number(t) <= Number(n) ? t : n,
                a = Number(n) >= Number(t) ? n : t;
            return r == 1 && a === 1 / 0 ? `${H(e)} must be at least one character.` : r == 0 && a ? `${H(e)} must be less than or equal to ${a} characters.` : r === a ? `${H(e)} should be ${a} characters long.` : r && a === 1 / 0 ? `${H(e)} must be greater than or equal to ${r} characters.` : `${H(e)} must be between ${r} and ${a} characters.`
        },
        matches({
            name: e
        }) {
            return `${H(e)} is not an allowed value.`
        },
        max({
            name: e,
            node: {
                value: t
            },
            args: n
        }) {
            return Array.isArray(t) ? `Cannot have more than ${n[0]} ${e}.` : `${H(e)} must be no more than ${n[0]}.`
        },
        mime({
            name: e,
            args: t
        }) {
            return t[0] ? `${H(e)} must be of the type: ${t[0]}` : "No file formats allowed."
        },
        min({
            name: e,
            node: {
                value: t
            },
            args: n
        }) {
            return Array.isArray(t) ? `Cannot have fewer than ${n[0]} ${e}.` : `${H(e)} must be at least ${n[0]}.`
        },
        not({
            name: e,
            node: {
                value: t
            }
        }) {
            return `“${t}” is not an allowed ${e}.`
        },
        number({
            name: e
        }) {
            return `${H(e)} must be a number.`
        },
        require_one: ({
            name: e,
            node: t,
            args: n
        }) => {
            const r = n.map(a => {
                const i = t.at(a);
                return i ? Ea(i) : !1
            }).filter(a => !!a);
            return r.unshift(e), `${r.join(" or ")} is required.`
        },
        required({
            name: e
        }) {
            return `${H(e)} is required.`
        },
        starts_with({
            name: e,
            args: t
        }) {
            return `${H(e)} doesn’t start with ${tr(t)}.`
        },
        url() {
            return "Please enter a valid URL."
        },
        invalidDate: "The selected date is invalid."
    },
    BE = {
        ui: yE,
        validation: UE
    },
    nr = new Set;

function bE(e) {
    return function(n) {
        nr.add(n), n.on("destroying", () => nr.delete(n));
        let r = rr(n.config.locale, e),
            a = r ? e[r] : {};
        n.on("prop:locale", ({
            payload: i
        }) => {
            r = rr(i, e), a = r ? e[r] : {}, n.store.touch()
        }), n.on("prop:label", () => n.store.touch()), n.on("prop:validationLabel", () => n.store.touch()), n.hook.text((i, s) => {
            var E, u;
            const o = ((E = i.meta) == null ? void 0 : E.messageKey) || i.key;
            if (b(a, i.type) && b(a[i.type], o)) {
                const I = a[i.type][o];
                typeof I == "function" ? i.value = Array.isArray((u = i.meta) == null ? void 0 : u.i18nArgs) ? I(...i.meta.i18nArgs) : I(i) : i.value = I
            }
            return s(i)
        })
    }
}

function rr(e, t) {
    if (b(t, e)) return e;
    const [n] = e.split("-");
    if (b(t, n)) return n;
    for (const r in t) return r;
    return !1
}

function YE(...e) {
    const t = e.reduce((r, a) => ye(r, a), {}),
        n = () => {};
    return n.library = function(r) {
        const a = Je(r.props.type);
        b(t, a) && r.define(t[a])
    }, n
}
var kE = ["classes", "config", "delay", "errors", "id", "index", "inputErrors", "library", "modelValue", "onUpdate:modelValue", "name", "number", "parent", "plugins", "sectionsSchema", "type", "validation", "validationLabel", "validationMessages", "validationRules", "onInput", "onInputRaw", "onUpdate:modelValue", "onNode", "onSubmit", "onSubmitInvalid", "onSubmitRaw"];

function Xt(e) {
    return e && typeof e == "object" && "group" in e && Array.isArray(e.options)
}

function ua(e, t = {
    count: 1
}) {
    return Array.isArray(e) ? e.map(n => {
        if (typeof n == "string" || typeof n == "number") return {
            label: String(n),
            value: String(n)
        };
        if (typeof n == "object") {
            if ("group" in n) return n.options = ua(n.options || [], t), n;
            "value" in n && typeof n.value != "string" && Object.assign(n, {
                value: `__mask_${t.count++}`,
                __original: n.value
            })
        }
        return n
    }) : Object.keys(e).map(n => ({
        label: e[n],
        value: n
    }))
}

function We(e, t, n = !1) {
    if (Array.isArray(e)) {
        for (const r of e)
            if (!(typeof r != "object" && r)) {
                if (Xt(r)) {
                    const a = We(r.options, t, !0);
                    if (a !== void 0) return a
                } else if (t == r.value) return "__original" in r ? r.__original : r.value
            }
    }
    return n ? void 0 : t
}

function At(e, t) {
    return e === null && t === void 0 || e === void 0 && t === null ? !1 : e == t ? !0 : lt(e) && lt(t) ? te(e, t) : !1
}

function Yn(e) {
    e.hook.prop((t, n) => {
        var r;
        return t.prop === "options" && (typeof t.value == "function" ? (e.props.optionsLoader = t.value, t.value = []) : ((r = e.props)._normalizeCounter ? ? (r._normalizeCounter = {
            count: 1
        }), t.value = ua(t.value, e.props._normalizeCounter))), n(t)
    })
}

function B(e, t, n = !1) {
    return (...r) => {
        const a = i => {
            const s = !t || typeof t == "string" ? {
                $el: t
            } : t();
            return (Nn(s) || fn(s)) && (s.meta ? s.meta.section = e : s.meta = {
                section: e
            }, r.length && !s.children && (s.children = [...r.map(o => typeof o == "function" ? o(i) : o)]), Nn(s) && (s.attrs = {
                class: `$classes.${e}`,
                ...s.attrs || {}
            })), {
                if: `$slots.${e}`,
                then: `$slots.${e}`,
                else: e in i ? Lt(s, i[e]) : s
            }
        };
        return a._s = e, n ? HE(a) : a
    }
}

function HE(e) {
    return t => [e(t)]
}

function Gt(e) {
    return !!(e && typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e))
}

function Lt(e, t = {}) {
    return typeof e == "string" ? Gt(t) || typeof t == "string" ? t : e : Array.isArray(e) ? Gt(t) ? t : e : ye(e, t)
}
var VE = B("actions", () => ({
        $el: "div",
        if: "$actions"
    })),
    jt = B("input", () => ({
        $el: "input",
        bind: "$attrs",
        attrs: {
            type: "$type",
            name: "$node.props.altName || $node.name",
            disabled: "$option.attrs.disabled || $disabled",
            onInput: "$handlers.toggleChecked",
            checked: "$fns.eq($_value, $onValue)",
            onBlur: "$handlers.blur",
            value: "$: true",
            id: "$id",
            "aria-describedby": {
                if: "$options.length",
                then: {
                    if: "$option.help",
                    then: '$: "help-" + $option.attrs.id',
                    else: void 0
                },
                else: {
                    if: "$help",
                    then: '$: "help-" + $id',
                    else: void 0
                }
            }
        }
    })),
    Aa = B("optionHelp", () => ({
        $el: "div",
        if: "$option.help",
        attrs: {
            id: '$: "help-" + $option.attrs.id'
        }
    })),
    zt = B("inner", "span"),
    xt = B("label", "span"),
    Ra = B("option", () => ({
        $el: "li",
        for: ["option", "$options"],
        attrs: {
            "data-disabled": "$option.attrs.disabled || $disabled || undefined"
        }
    })),
    _a = B("options", "ul"),
    Qt = B("wrapper", () => ({
        $el: "label",
        attrs: {
            "data-disabled": {
                if: "$options.length",
                then: void 0,
                else: "$disabled || undefined"
            },
            "data-checked": {
                if: "$options == undefined",
                then: "$fns.eq($_value, $onValue) || undefined",
                else: "$fns.isChecked($option.value) || undefined"
            }
        }
    })),
    FE = B("input", () => ({
        $el: "button",
        bind: "$attrs",
        attrs: {
            type: "$type",
            disabled: "$disabled",
            name: "$node.name",
            id: "$id"
        }
    })),
    wE = B("default", null),
    Kt = B("decorator", () => ({
        $el: "span",
        attrs: {
            "aria-hidden": "true"
        }
    })),
    Ta = B("fieldset", () => ({
        $el: "fieldset",
        attrs: {
            id: "$id",
            "aria-describedby": {
                if: "$help",
                then: '$: "help-" + $id',
                else: void 0
            }
        }
    })),
    WE = B("input", () => ({
        $el: "input",
        bind: "$attrs",
        attrs: {
            type: "file",
            disabled: "$disabled",
            name: "$node.name",
            onChange: "$handlers.files",
            onBlur: "$handlers.blur",
            id: "$id",
            "aria-describedby": "$describedBy",
            "aria-required": "$state.required || undefined"
        }
    })),
    GE = B("fileItem", () => ({
        $el: "li",
        for: ["file", "$value"]
    })),
    jE = B("fileList", () => ({
        $el: "ul",
        if: "$value.length",
        attrs: {
            "data-has-multiple": "$_hasMultipleFiles"
        }
    })),
    zE = B("fileName", () => ({
        $el: "span",
        attrs: {
            class: "$classes.fileName"
        }
    })),
    ar = B("fileRemove", () => ({
        $el: "button",
        attrs: {
            type: "button",
            onClick: "$handlers.resetFiles"
        }
    })),
    xE = B("form", () => ({
        $el: "form",
        bind: "$attrs",
        meta: {
            autoAnimate: !0
        },
        attrs: {
            id: "$id",
            name: "$node.name",
            onSubmit: "$handlers.submit",
            "data-loading": "$state.loading || undefined"
        }
    })),
    kn = B("wrapper", null, !0),
    De = B("help", () => ({
        $el: "div",
        if: "$help",
        attrs: {
            id: '$: "help-" + $id'
        }
    })),
    j = (e, t) => B(`${e}Icon`, () => {
        const n = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
        return {
            if: `$${e}Icon && $${n}`,
            $el: `${t||"span"}`,
            attrs: {
                class: `$classes.${e}Icon + " " + $classes.icon`,
                innerHTML: `$${n}`,
                onClick: `$handlers.iconClick(${e})`,
                role: `$fns.iconRole(${e})`,
                tabindex: `$fns.iconRole(${e}) === "button" && "0" || undefined`,
                for: {
                    if: `${t==="label"}`,
                    then: "$id"
                }
            }
        }
    })(),
    Mt = B("inner", "div"),
    ht = B("label", () => ({
        $el: "label",
        if: "$label",
        attrs: {
            for: "$id"
        }
    })),
    Oa = B("legend", () => ({
        $el: "legend",
        if: "$label"
    })),
    Ue = B("message", () => ({
        $el: "li",
        for: ["message", "$messages"],
        attrs: {
            key: "$message.key",
            id: "$id + '-' + $message.key",
            "data-message-type": "$message.type"
        }
    })),
    Be = B("messages", () => ({
        $el: "ul",
        if: "$defaultMessagePlacement && $fns.length($messages)"
    })),
    QE = B("noFiles", () => ({
        $el: "span",
        if: "$value == null || $value.length == 0"
    })),
    KE = B("optGroup", () => ({
        $el: "optgroup",
        bind: "$option.attrs",
        attrs: {
            label: "$option.group"
        }
    })),
    ir = B("option", () => ({
        $el: "option",
        bind: "$option.attrs",
        attrs: {
            class: "$classes.option",
            value: "$option.value",
            selected: "$fns.isSelected($option)"
        }
    })),
    sr = B("options", () => ({
        $el: null,
        if: "$options.length",
        for: ["option", "$option.options || $options"]
    })),
    ke = B("outer", () => ({
        $el: "div",
        meta: {
            autoAnimate: !0
        },
        attrs: {
            key: "$id",
            "data-family": "$family || undefined",
            "data-type": "$type",
            "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
            "data-has-multiple": "$_hasMultipleFiles",
            "data-disabled": '$: ($disabled !== "false" && $disabled) || undefined',
            "data-empty": "$state.empty || undefined",
            "data-complete": "$state.complete || undefined",
            "data-invalid": "$state.invalid || undefined",
            "data-errors": "$state.errors || undefined",
            "data-submitted": "$state.submitted || undefined",
            "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
            "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
            "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
            "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
        }
    })),
    Ce = B("prefix", null),
    qE = B("input", () => ({
        $el: "select",
        bind: "$attrs",
        attrs: {
            id: "$id",
            "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
            disabled: "$disabled",
            class: "$classes.input",
            name: "$node.name",
            onChange: "$handlers.onChange",
            onInput: "$handlers.selectInput",
            onBlur: "$handlers.blur",
            "aria-describedby": "$describedBy",
            "aria-required": "$state.required || undefined"
        }
    })),
    ZE = B("submit", () => ({
        $cmp: "FormKit",
        bind: "$submitAttrs",
        props: {
            type: "submit",
            label: "$submitLabel"
        }
    })),
    Me = B("suffix", null),
    La = B("input", () => ({
        $el: "input",
        bind: "$attrs",
        attrs: {
            type: "$type",
            disabled: "$disabled",
            name: "$node.name",
            onInput: "$handlers.DOMInput",
            onBlur: "$handlers.blur",
            value: "$_value",
            id: "$id",
            "aria-describedby": "$describedBy",
            "aria-required": "$state.required || undefined"
        }
    })),
    JE = B("input", () => ({
        $el: "textarea",
        bind: "$attrs",
        attrs: {
            disabled: "$disabled",
            name: "$node.name",
            onInput: "$handlers.DOMInput",
            onBlur: "$handlers.blur",
            value: "$_value",
            id: "$id",
            "aria-describedby": "$describedBy",
            "aria-required": "$state.required || undefined"
        },
        children: "$initialValue"
    })),
    _t = B("wrapper", "div"),
    XE = 0;

function Ia(e) {
    (e.type === "group" || e.type === "list") && e.plugins.add(el)
}

function el(e) {
    e.props.type === "radio" && (e.addProps(["altName"]), e.props.altName = `${e.name}_${XE++}`)
}

function Na(e) {
    return function(t, n) {
        return t.prop === "options" && Array.isArray(t.value) && (t.value = t.value.map(r => {
            var a;
            return (a = r.attrs) != null && a.id ? r : ye(r, {
                attrs: {
                    id: `${e.props.id}-option-${vn(String(r.value))}`
                }
            })
        }), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
            Array.isArray(e.value) || e.input([], !1)
        }))), n(t)
    }
}

function tl(e, t) {
    const n = t.target;
    if (n instanceof HTMLInputElement) {
        const r = Array.isArray(e.props.options) ? We(e.props.options, n.value) : n.value;
        Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some(a => At(r, a)) ? e.input(e._value.filter(a => !At(r, a))) : e.input([...e._value, r]) : e.input([r]) : n.checked ? e.input(e.props.onValue) : e.input(e.props.offValue)
    }
}

function nl(e, t) {
    var n, r;
    return (n = e.context) == null || n.value, (r = e.context) == null || r._value, Array.isArray(e._value) ? e._value.some(a => At(We(e.props.options, t), a)) : !1
}

function rl(e) {
    e.on("created", () => {
        var t, n;
        (t = e.context) != null && t.handlers && (e.context.handlers.toggleChecked = tl.bind(null, e)), (n = e.context) != null && n.fns && (e.context.fns.isChecked = nl.bind(null, e)), b(e.props, "onValue") || (e.props.onValue = !0), b(e.props, "offValue") || (e.props.offValue = !1)
    }), e.hook.prop(Na(e))
}

function Xe(e, t) {
    return n => {
        n.props[`${e}Icon`] === void 0 && (n.props[`${e}Icon`] = t.startsWith("<svg") ? t : `default:${t}`)
    }
}

function Hn(e) {
    e.on("created", () => {
        "disabled" in e.props && (e.props.disabled = Oe(e.props.disabled), e.config.disabled = Oe(e.props.disabled))
    }), e.hook.prop(({
        prop: t,
        value: n
    }, r) => (n = t === "disabled" ? Oe(n) : n, r({
        prop: t,
        value: n
    }))), e.on("prop:disabled", ({
        payload: t
    }) => {
        e.config.disabled = Oe(t)
    })
}

function bt(e, t) {
    return n => {
        n.store.set(Ee({
            key: e,
            type: "ui",
            value: t || e,
            meta: {
                localize: !0,
                i18nArgs: [n]
            }
        }))
    }
}
var rn = typeof window < "u";

function fa(e) {
    e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover")
}

function or(e, t) {
    t.target instanceof HTMLInputElement ? e === "dragover" && t.target.setAttribute("data-file-hover", "true") : t.preventDefault(), e === "drop" && fa(t)
}

function al(e) {
    bt("noFiles", "Select file")(e), bt("removeAll", "Remove all")(e), bt("remove")(e), e.addProps(["_hasMultipleFiles"]), rn && (window._FormKit_File_Drop || (window.addEventListener("dragover", or.bind(null, "dragover")), window.addEventListener("drop", or.bind(null, "drop")), window.addEventListener("dragleave", fa), window._FormKit_File_Drop = !0)), e.hook.input((t, n) => n(Array.isArray(t) ? t : [])), e.on("input", ({
        payload: t
    }) => {
        e.props._hasMultipleFiles = Array.isArray(t) && t.length > 1 ? !0 : void 0
    }), e.on("reset", () => {
        if (e.props.id && rn) {
            const t = document.getElementById(e.props.id);
            t && (t.value = "")
        }
    }), e.on("created", () => {
        Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = t => {
            if (t.preventDefault(), e.input([]), e.props.id && rn) {
                const n = document.getElementById(e.props.id);
                n && (n.value = ""), n == null || n.focus()
            }
        }, e.context.handlers.files = t => {
            var r, a;
            const n = [];
            if (t.target instanceof HTMLInputElement && t.target.files) {
                for (let i = 0; i < t.target.files.length; i++) {
                    let s;
                    (s = t.target.files.item(i)) && n.push({
                        name: s.name,
                        file: s
                    })
                }
                e.input(n)
            }
            e.context && (e.context.files = n), typeof((r = e.props.attrs) == null ? void 0 : r.onChange) == "function" && ((a = e.props.attrs) == null || a.onChange(t))
        })
    })
}
var Er = Ee({
    key: "loading",
    value: !0,
    visible: !1
});
async function il(e, t) {
    const n = Math.random();
    if (e.props._submitNonce = n, t.preventDefault(), await e.settled, e.ledger.value("validating") && (e.store.set(Er), await e.ledger.settled("validating"), e.store.remove("loading"), e.props._submitNonce !== n)) return;
    const r = a => a.store.set(Ee({
        key: "submitted",
        value: !0,
        visible: !1
    }));
    if (e.walk(r), r(e), e.emit("submit-raw"), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(t, e), e.ledger.value("blocking")) typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && Sa(e);
    else if (typeof e.props.onSubmit == "function") {
        const a = e.props.onSubmit(e.hook.submit.dispatch(ct(e.value)), e);
        if (a instanceof Promise) {
            const i = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
            i && (e.props.disabled = !0), e.store.set(Er), await a, i && (e.props.disabled = !1), e.store.remove("loading")
        }
    } else t.target instanceof HTMLFormElement && t.target.submit()
}

function Sa(e) {
    e.store.set(Ee({
        blocking: !1,
        key: "incomplete",
        meta: {
            localize: e.props.incompleteMessage === void 0,
            i18nArgs: [{
                node: e
            }],
            showAsMessage: !0
        },
        type: "ui",
        value: e.props.incompleteMessage || "Form incomplete."
    }))
}

function sl(e) {
    var t;
    e.props.isForm = !0, e.ledger.count("validating", n => n.key === "validating"), (t = e.props).submitAttrs ? ? (t.submitAttrs = {
        disabled: e.props.disabled
    }), e.on("prop:disabled", ({
        payload: n
    }) => {
        e.props.submitAttrs = { ...e.props.submitAttrs,
            disabled: n
        }
    }), e.on("created", () => {
        var n;
        (n = e.context) != null && n.handlers && (e.context.handlers.submit = il.bind(null, e)), b(e.props, "actions") || (e.props.actions = !0)
    }), e.on("prop:incompleteMessage", () => {
        e.store.incomplete && Sa(e)
    }), e.on("settled:blocking", () => e.store.remove("incomplete"))
}

function ol(e) {
    e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null)
}

function El(e) {
    e.on("created", () => {
        e.context && (e.context.initialValue = e.value || "")
    })
}

function pa(e) {
    if (typeof e.props.number > "u") return;
    const t = ["number", "range", "hidden"].includes(e.props.type);
    e.hook.input((n, r) => {
        if (n === "") return r(void 0);
        const a = e.props.number === "integer" ? parseInt(n) : parseFloat(n);
        return Number.isFinite(a) ? r(a) : r(t ? void 0 : n)
    })
}

function ll(e, t) {
    t.target instanceof HTMLInputElement && e.input(We(e.props.options, t.target.value))
}

function cl(e, t) {
    var n, r;
    return (n = e.context) == null || n.value, (r = e.context) == null || r._value, At(We(e.props.options, t), e._value)
}

function ul(e) {
    e.on("created", () => {
        var t, n;
        Array.isArray(e.props.options) || Ge(350, {
            node: e,
            inputType: "radio"
        }), (t = e.context) != null && t.handlers && (e.context.handlers.toggleChecked = ll.bind(null, e)), (n = e.context) != null && n.fns && (e.context.fns.isChecked = cl.bind(null, e))
    }), e.hook.prop(Na(e))
}

function Al(e, t) {
    if (Xt(t)) return !1;
    e.context && e.context.value;
    const n = "__original" in t ? t.__original : t.value;
    return Array.isArray(e._value) ? e._value.some(r => At(r, n)) : (e._value === void 0 || e._value === null && !da(e.props.options, null)) && t.attrs && t.attrs["data-is-placeholder"] ? !0 : At(n, e._value)
}

function da(e, t) {
    return e.some(n => Xt(n) ? da(n.options, t) : ("__original" in n ? n.__original : n.value) === t)
}
async function Rl(e, t) {
    var n;
    typeof((n = e.props.attrs) == null ? void 0 : n.onChange) == "function" && (await new Promise(r => setTimeout(r, 0)), await e.settled, e.props.attrs.onChange(t))
}

function _l(e, t) {
    const n = t.target,
        r = n.hasAttribute("multiple") ? Array.from(n.selectedOptions).map(a => We(e.props.options, a.value)) : We(e.props.options, n.value);
    e.input(r)
}

function lr(e, t) {
    return e.some(n => n.attrs && n.attrs["data-is-placeholder"]) ? e : [{
        label: t,
        value: "",
        attrs: {
            hidden: !0,
            disabled: !0,
            "data-is-placeholder": "true"
        }
    }, ...e]
}

function ma(e) {
    const t = e.length > 0 ? e[0] : void 0;
    if (t) return Xt(t) ? ma(t.options) : "__original" in t ? t.__original : t.value
}

function Tl(e) {
    e.on("created", () => {
        var n, r, a;
        const t = Oe((n = e.props.attrs) == null ? void 0 : n.multiple);
        !t && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({
            prop: i,
            value: s
        }, o) => (i === "options" && (s = lr(s, e.props.placeholder)), o({
            prop: i,
            value: s
        }))), e.props.options = lr(e.props.options, e.props.placeholder)), t ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
            value: e._value
        }), e.on("input", ({
            payload: i
        }) => {
            e.props.attrs = Object.assign({}, e.props.attrs, {
                value: i
            })
        })), (r = e.context) != null && r.handlers && (e.context.handlers.selectInput = _l.bind(null, e), e.context.handlers.onChange = Rl.bind(null, e)), (a = e.context) != null && a.fns && (e.context.fns.isSelected = Al.bind(null, e), e.context.fns.showPlaceholder = (i, s) => {
            if (!Array.isArray(e.props.options)) return !1;
            const o = e.props.options.some(E => {
                if (E.attrs && "data-is-placeholder" in E.attrs) return !1;
                const u = "__original" in E ? E.__original : E.value;
                return te(i, u)
            });
            return s && !o ? !0 : void 0
        })
    }), e.hook.input((t, n) => {
        var r, a, i;
        return !e.props.placeholder && t === void 0 && Array.isArray((r = e.props) == null ? void 0 : r.options) && e.props.options.length && !Oe((i = (a = e.props) == null ? void 0 : a.attrs) == null ? void 0 : i.multiple) && (t = ma(e.props.options)), n(t)
    })
}

function mn(e) {
    return !!(xe(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e)
}

function Ol(e, t = {}) {
    const n = ke(_t(ht("$label"), Mt(j("prefix"), Ce(), e(), Me(), j("suffix"))), De("$help"), Be(Ue("$message.value")));
    return (r = {}) => n(ye(t, r))
}

function Pe(e, t, n) {
    const r = a => {
        const i = t(a);
        if (n || Gt(i) && "if" in i || mn(i)) {
            const s = {
                if: e,
                then: i
            };
            return n && (s.else = n(a)), s
        } else mn(i) ? Object.assign(i.else, {
            if: e
        }) : Gt(i) && Object.assign(i, {
            if: e
        });
        return i
    };
    return r._s = Rt(), r
}

function et(e, t) {
    const n = r => {
        const a = e({});
        return mn(a) ? (Array.isArray(a.else) || (a.else = Lt(Lt(a.else, t), e._s ? r[e._s] : {})), a) : Lt(Lt(a, t), e._s ? r[e._s] : {})
    };
    return n._s = e._s, n
}
var cr = {
        schema: ke(Be(Ue("$message.value")), _t(FE(j("prefix"), Ce(), wE("$label || $ui.submit.value"), Me(), j("suffix"))), De("$help")),
        type: "input",
        family: "button",
        props: [],
        features: [bt("submit"), ol],
        schemaMemoKey: "h6st4epl3j8"
    },
    Ll = {
        schema: ke(Pe("$options == undefined", Qt(zt(Ce(), jt(), Kt(j("decorator")), Me()), et(xt("$label"), {
            if: "$label"
        })), Ta(Oa("$label"), De("$help"), _a(Ra(Qt(zt(Ce(), et(jt(), {
            bind: "$option.attrs",
            attrs: {
                id: "$option.attrs.id",
                value: "$option.value",
                checked: "$fns.isChecked($option.value)"
            }
        }), Kt(j("decorator")), Me()), et(xt("$option.label"), {
            if: "$option.label"
        })), Aa("$option.help"))))), Pe("$options == undefined && $help", De("$help")), Be(Ue("$message.value"))),
        type: "input",
        family: "box",
        props: ["options", "onValue", "offValue", "optionsLoader"],
        features: [Yn, rl, Xe("decorator", "checkboxDecorator")],
        schemaMemoKey: "qje02tb3gu8"
    },
    Il = {
        schema: ke(_t(ht("$label"), Mt(j("prefix", "label"), Ce(), WE(), jE(GE(j("fileItem"), zE("$file.name"), Pe("$value.length === 1", ar(j("fileRemove"), '$ui.remove.value + " " + $file.name')))), Pe("$value.length > 1", ar("$ui.removeAll.value")), QE(j("noFiles"), "$ui.noFiles.value"), Me(), j("suffix"))), De("$help"), Be(Ue("$message.value"))),
        type: "input",
        family: "text",
        props: [],
        features: [al, Xe("fileItem", "fileItem"), Xe("fileRemove", "fileRemove"), Xe("noFiles", "noFiles")],
        schemaMemoKey: "9kqc4852fv8"
    },
    Nl = {
        schema: xE("$slots.default", Be(Ue("$message.value")), VE(ZE())),
        type: "group",
        props: ["actions", "submit", "submitLabel", "submitAttrs", "submitBehavior", "incompleteMessage"],
        features: [sl, Hn],
        schemaMemoKey: "5bg016redjo"
    },
    fl = {
        schema: kn("$slots.default"),
        type: "group",
        props: [],
        features: [Hn, Ia]
    },
    Sl = {
        schema: La(),
        type: "input",
        props: [],
        features: [pa]
    },
    pl = {
        schema: kn("$slots.default"),
        type: "list",
        props: ["sync", "dynamic"],
        features: [Hn, Ia]
    },
    dl = {
        schema: kn(),
        type: "input",
        props: [],
        features: []
    },
    ml = {
        schema: ke(Pe("$options == undefined", Qt(zt(Ce(), jt(), Kt(j("decorator")), Me()), et(xt("$label"), {
            if: "$label"
        })), Ta(Oa("$label"), De("$help"), _a(Ra(Qt(zt(Ce(), et(jt(), {
            bind: "$option.attrs",
            attrs: {
                id: "$option.attrs.id",
                value: "$option.value",
                checked: "$fns.isChecked($option.value)"
            }
        }), Kt(j("decorator")), Me()), et(xt("$option.label"), {
            if: "$option.label"
        })), Aa("$option.help"))))), Pe("$options == undefined && $help", De("$help")), Be(Ue("$message.value"))),
        type: "input",
        family: "box",
        props: ["options", "onValue", "offValue", "optionsLoader"],
        features: [Yn, ul, Xe("decorator", "radioDecorator")],
        schemaMemoKey: "qje02tb3gu8"
    },
    Dl = {
        schema: ke(_t(ht("$label"), Mt(j("prefix"), Ce(), qE(Pe("$slots.default", () => "$slots.default", sr(Pe("$option.group", KE(sr(ir("$option.label"))), ir("$option.label"))))), Pe("$attrs.multiple !== undefined", () => "", j("select")), Me(), j("suffix"))), De("$help"), Be(Ue("$message.value"))),
        type: "input",
        props: ["options", "placeholder", "optionsLoader"],
        features: [Yn, Tl, Xe("select", "select")],
        schemaMemoKey: "cb119h43krg"
    },
    Cl = {
        schema: ke(_t(ht("$label"), Mt(j("prefix", "label"), Ce(), JE(), Me(), j("suffix"))), De("$help"), Be(Ue("$message.value"))),
        type: "input",
        props: [],
        features: [El],
        schemaMemoKey: "b1n0td79m9g"
    },
    re = {
        schema: ke(_t(ht("$label"), Mt(j("prefix", "label"), Ce(), La(), Me(), j("suffix"))), De("$help"), Be(Ue("$message.value"))),
        type: "input",
        family: "text",
        props: [],
        features: [pa],
        schemaMemoKey: "c3cc4kflsg"
    },
    Ml = {
        button: cr,
        submit: cr,
        checkbox: Ll,
        file: Il,
        form: Nl,
        group: fl,
        hidden: Sl,
        list: pl,
        meta: dl,
        radio: ml,
        select: Dl,
        textarea: Cl,
        text: re,
        color: re,
        date: re,
        datetimeLocal: re,
        email: re,
        month: re,
        number: re,
        password: re,
        search: re,
        tel: re,
        time: re,
        url: re,
        week: re,
        range: re
    },
    Le = void 0,
    Ne = null,
    qt, Da = !1,
    It = !1,
    hl = new Promise(e => {
        qt = () => {
            Da = !0, e()
        }
    }),
    $e = typeof window < "u" && typeof fetch < "u";
Le = $e ? getComputedStyle(document.documentElement) : void 0;
var Ke = {},
    an = {};

function vl(e, t, n, r) {
    t && Object.assign(Ke, t), $e && !It && (Le != null && Le.getPropertyValue("--formkit-theme")) ? (qt(), It = !0) : e && !It && $e ? gl(e) : !It && $e && qt();
    const a = function(s) {
        var o, E;
        s.addProps(["iconLoader", "iconLoaderUrl"]), s.props.iconHandler = ur((o = s.props) != null && o.iconLoader ? s.props.iconLoader : r, (E = s.props) != null && E.iconLoaderUrl ? s.props.iconLoaderUrl : n), yl(s, s.props.iconHandler), s.on("created", () => {
            var u, I;
            (u = s == null ? void 0 : s.context) != null && u.handlers && (s.context.handlers.iconClick = d => {
                const y = `on${d.charAt(0).toUpperCase()}${d.slice(1)}IconClick`,
                    D = s.props[y];
                if (D && typeof D == "function") return M => D(s, M)
            }), (I = s == null ? void 0 : s.context) != null && I.fns && (s.context.fns.iconRole = d => {
                const y = `on${d.charAt(0).toUpperCase()}${d.slice(1)}IconClick`;
                return typeof s.props[y] == "function" ? "button" : null
            })
        })
    };
    return a.iconHandler = ur(r, n), a
}

function gl(e) {
    if (!(!e || !$e || typeof getComputedStyle != "function") && (It = !0, Ne = document.getElementById("formkit-theme"), e && $e && (!(Le != null && Le.getPropertyValue("--formkit-theme")) && !Ne || Ne != null && Ne.getAttribute("data-theme") && (Ne == null ? void 0 : Ne.getAttribute("data-theme")) !== e))) {
        const n = `https://cdn.jsdelivr.net/npm/@formkit/themes@${Wt.startsWith("__")?"latest":Wt}/dist/${e}/theme.css`,
            r = document.createElement("link");
        r.type = "text/css", r.rel = "stylesheet", r.id = "formkit-theme", r.setAttribute("data-theme", e), r.onload = () => {
            Le = getComputedStyle(document.documentElement), qt()
        }, document.head.appendChild(r), r.href = n, Ne && Ne.remove()
    }
}

function ur(e, t) {
    return n => {
        if (typeof n != "string") return;
        if (n.startsWith("<svg")) return n;
        const r = n.startsWith("default:");
        n = r ? n.split(":")[1] : n;
        const a = n in Ke;
        let i;
        if (a) return Ke[n];
        if (!an[n]) {
            if (i = Pl(n), i = $e && typeof i > "u" ? Promise.resolve(i) : i, i instanceof Promise) an[n] = i.then(s => !s && typeof n == "string" && !r ? i = typeof e == "function" ? e(n) : $l(n, t) : s).then(s => (typeof n == "string" && (Ke[r ? `default:${n}` : n] = s), s));
            else if (typeof i == "string") return Ke[r ? `default:${n}` : n] = i, i
        }
        return an[n]
    }
}

function Pl(e) {
    if ($e) return Da ? Ar(e) : hl.then(() => Ar(e))
}

function Ar(e) {
    const t = Le == null ? void 0 : Le.getPropertyValue(`--fk-icon-${e}`);
    if (t) {
        const n = atob(t);
        if (n.startsWith("<svg")) return Ke[e] = n, n
    }
}

function $l(e, t) {
    const n = Wt.startsWith("__") ? "latest" : Wt,
        r = typeof t == "function" ? t(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${e}.svg`;
    if ($e) return fetch(`${r}`).then(async a => {
        const i = await a.text();
        if (i.startsWith("<svg")) return i
    }).catch(a => {
        console.error(a)
    })
}

function yl(e, t) {
    const n = /^[a-zA-Z-]+(?:-icon|Icon)$/;
    Object.keys(e.props).filter(a => n.test(a)).forEach(a => Ul(e, t, a))
}

function Ul(e, t, n) {
    const r = e.props[n],
        a = t(r),
        i = `_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`,
        s = `on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;
    if (e.addProps([i, s]), e.on(`prop:${n}`, Bl), a instanceof Promise) return a.then(o => {
        e.props[i] = o
    });
    e.props[i] = a
}

function Bl(e) {
    var s;
    const t = e.origin,
        n = e.payload,
        r = (s = t == null ? void 0 : t.props) == null ? void 0 : s.iconHandler,
        a = e.name.split(":")[1],
        i = `_raw${a.charAt(0).toUpperCase()}${a.slice(1)}`;
    if (r && typeof r == "function") {
        const o = r(n);
        if (o instanceof Promise) return o.then(E => {
            t.props[i] = E
        });
        t.props[i] = o
    }
}
var Rr = {
        100: ({
            data: e
        }) => `Only groups, lists, and forms can have children (${e.name}).`,
        101: ({
            data: e
        }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
        102: ({
            data: [e, t]
        }) => `You cannot directly assign node.${t} (${e.name})`,
        103: ({
            data: [e]
        }) => `Schema expressions cannot start with an operator (${e})`,
        104: ({
            data: [e, t]
        }) => `Schema expressions cannot end with an operator (${e} in "${t}")`,
        105: ({
            data: e
        }) => `Invalid schema expression: ${e}`,
        106: ({
            data: e
        }) => `Cannot submit because (${e}) is not in a form.`,
        107: ({
            data: [e, t]
        }) => `Cannot set ${e.name} to non object value: ${t}`,
        108: ({
            data: [e, t]
        }) => `Cannot set ${e.name} to non array value: ${t}`,
        300: ({
            data: [e]
        }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
        600: ({
            data: e
        }) => `Unknown input type${typeof e.props.type=="string"?' "'+e.props.type+'"':""} ("${e.name}")`,
        601: ({
            data: e
        }) => `Input definition${typeof e.props.type=="string"?' "'+e.props.type+'"':""} is missing a schema or component property (${e.name}).`
    },
    _r = {
        150: ({
            data: e
        }) => `Schema function "${e}()" is not a valid function.`,
        151: ({
            data: e
        }) => `No form element with id: ${e}`,
        152: ({
            data: e
        }) => `No input element with id: ${e}`,
        350: ({
            data: {
                node: e,
                inputType: t
            }
        }) => `Invalid options prop for ${e.name} input (${t}). See https://formkit.com/inputs/${t}`,
        650: 'Schema "$get()" must use the id of an input to access.',
        651: ({
            data: e
        }) => `Cannot setErrors() on "${e}" because no such id exists.`,
        652: ({
            data: e
        }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
        800: ({
            data: e
        }) => `${e} is deprecated.`
    },
    bl = (e, t) => {
        if (e.code in Rr) {
            const n = Rr[e.code];
            e.message = typeof n == "function" ? n(e) : n
        }
        return t(e)
    },
    Tr = !1;

function Yl() {
    Tr || (Pn(bl), $n(kl), Tr = !0)
}
var kl = (e, t) => {
        if (e.code in _r) {
            const n = _r[e.code];
            e.message = typeof n == "function" ? n(e) : n
        }
        return t(e)
    },
    Hl = Object.defineProperty,
    Vl = Object.getOwnPropertyNames,
    Ca = (e, t) => function() {
        return e && (t = (0, e[Vl(e)[0]])(e = 0)), t
    },
    Fl = (e, t) => {
        for (var n in t) Hl(e, n, {
            get: t[n],
            enumerable: !0
        })
    },
    Or, Ma, ha = Ca({
        "packages/vue/src/bindings.ts" () {
            Or = function(t) {
                t.ledger.count("blocking", l => l.blocking);
                const n = ae(!t.ledger.value("blocking"));
                t.ledger.count("errors", l => l.type === "error");
                const r = ae(!!t.ledger.value("errors"));
                let a = !1;
                Ai(() => {
                    a = !0
                });
                const i = Ot(t.store.reduce((l, S) => (S.visible && (l[S.key] = S), l), {})),
                    s = ae(t.props.validationVisibility || (t.props.type === "checkbox" ? "dirty" : "blur"));
                t.on("prop:validationVisibility", ({
                    payload: l
                }) => {
                    s.value = l
                });
                const o = ae(s.value === "live"),
                    E = ae(!1),
                    u = l => {
                        E.value = (l ? ? []).some(S => S.name === "required")
                    };
                u(t.props.parsedRules), t.on("prop:parsedRules", ({
                    payload: l
                }) => u(l));
                const I = ae(t.children.map(l => l.uid)),
                    d = me(() => {
                        if (!O.state) return !1;
                        if (O.state.submitted) return !0;
                        if (!o.value && !O.state.settled) return !1;
                        switch (s.value) {
                            case "live":
                                return !0;
                            case "blur":
                                return O.state.blurred;
                            case "dirty":
                                return O.state.dirty;
                            default:
                                return !1
                        }
                    }),
                    y = me(() => O.state.failing && d.value),
                    D = me(() => O && M.value ? n.value && !r.value : O.state.dirty && !Re(O.value)),
                    M = ae(Array.isArray(t.props.parsedRules) && t.props.parsedRules.length > 0);
                t.on("prop:parsedRules", ({
                    payload: l
                }) => {
                    M.value = Array.isArray(l) && l.length > 0
                });
                const T = me(() => {
                        const l = {};
                        for (const S in i) {
                            const $ = i[S];
                            ($.type !== "validation" || d.value) && (l[S] = $)
                        }
                        return l
                    }),
                    L = Ot(t.store.reduce((l, S) => (S.type === "ui" && S.visible && (l[S.key] = S), l), {})),
                    f = me(() => !O.state.failing),
                    m = Ot({}),
                    h = new Proxy(m, {
                        get(...l) {
                            if (!t) return "";
                            const [S, $] = l;
                            let U = Reflect.get(...l);
                            return !U && typeof $ == "string" && !b(S, $) && !$.startsWith("__v") && Jt(t).watch(Y => {
                                const z = typeof Y.config.rootClasses == "function" ? Y.config.rootClasses($, Y) : {},
                                    J = Y.config.classes ? Bt($, Y, Y.config.classes[$]) : {},
                                    je = Bt($, Y, Y.props[`_${$}Class`]),
                                    He = Bt($, Y, Y.props[`${$}Class`]);
                                U = Zs(Y, $, z, J, je, He), S[$] = U ? ? ""
                            }), U
                        }
                    });
                t.on("prop:rootClasses", () => {
                    const l = Object.keys(m);
                    for (const S of l) delete m[S]
                });
                const C = me(() => {
                        if (!t) return;
                        const l = [];
                        O.help && l.push(`help-${t.props.id}`);
                        for (const S in T.value) l.push(`${t.props.id}-${S}`);
                        return l.length ? l.join(" ") : void 0
                    }),
                    g = ae(t.value),
                    c = ae(t.value),
                    O = Ot({
                        _value: c,
                        attrs: t.props.attrs,
                        disabled: t.props.disabled,
                        describedBy: C,
                        fns: {
                            length: l => Object.keys(l).length,
                            number: l => Number(l),
                            string: l => String(l),
                            json: l => JSON.stringify(l),
                            eq: te
                        },
                        handlers: {
                            blur: l => {
                                t && (t.store.set(Ee({
                                    key: "blurred",
                                    visible: !1,
                                    value: !0
                                })), typeof t.props.attrs.onBlur == "function" && t.props.attrs.onBlur(l))
                            },
                            touch: () => {
                                var $;
                                const l = O.dirtyBehavior === "compare";
                                if (($ = t.store.dirty) != null && $.value && !l) return;
                                const S = !te(t.props._init, t._value);
                                !S && !l || t.store.set(Ee({
                                    key: "dirty",
                                    visible: !1,
                                    value: S
                                }))
                            },
                            DOMInput: l => {
                                t.input(l.target.value), t.emit("dom-input-event", l)
                            }
                        },
                        help: t.props.help,
                        id: t.props.id,
                        items: I,
                        label: t.props.label,
                        messages: T,
                        didMount: !1,
                        node: Zt(t),
                        options: t.props.options,
                        defaultMessagePlacement: !0,
                        slots: t.props.__slots,
                        state: {
                            blurred: !1,
                            complete: D,
                            dirty: !1,
                            empty: Re(g),
                            submitted: !1,
                            settled: t.isSettled,
                            valid: n,
                            invalid: y,
                            errors: r,
                            rules: M,
                            validationVisible: d,
                            required: E,
                            failing: !1,
                            passing: f
                        },
                        type: t.props.type,
                        family: t.props.family,
                        ui: L,
                        value: g,
                        classes: h
                    });
                t.on("created", () => {
                    te(O.value, t.value) || (c.value = t.value, g.value = t.value, gt(g), gt(c)), (async () => (await t.settled, t && (t.props._init = Ae(t.value))))()
                }), t.on("mounted", () => {
                    O.didMount = !0
                }), t.on("settled", ({
                    payload: l
                }) => {
                    O.state.settled = l
                });

                function P(l) {
                    (Array.isArray(l) ? l : Object.keys(l)).forEach($ => {
                        $ = Je($), b(O, $) || (O[$] = t.props[$]), t.on(`prop:${$}`, ({
                            payload: U
                        }) => {
                            O[$] = U
                        })
                    })
                }
                P((() => {
                    const l = ["__root", "help", "label", "disabled", "options", "type", "attrs", "preserve", "preserveErrors", "id", "dirtyBehavior"],
                        S = /^[a-zA-Z-]+(?:-icon|Icon)$/,
                        $ = Object.keys(t.props).filter(U => S.test(U));
                    return l.concat($)
                })());

                function R(l) {
                    l.props && P(l.props)
                }
                t.props.definition && R(t.props.definition), t.on("added-props", ({
                    payload: l
                }) => P(l)), t.on("input", ({
                    payload: l
                }) => {
                    t.type !== "input" && !An(l) && !Gn(l) ? c.value = _n(l) : (c.value = l, gt(c))
                }), t.on("commitRaw", ({
                    payload: l
                }) => {
                    t.type !== "input" && !An(l) && !Gn(l) ? g.value = c.value = _n(l) : (g.value = c.value = l, gt(g)), t.emit("modelUpdated")
                }), t.on("commit", ({
                    payload: l
                }) => {
                    var S;
                    if ((!O.state.dirty || O.dirtyBehavior === "compare") && t.isCreated && a)
                        if (!((S = t.store.validating) != null && S.value)) O.handlers.touch();
                        else {
                            const $ = t.on("message-removed", ({
                                payload: U
                            }) => {
                                U.key === "validating" && (O.handlers.touch(), t.off($))
                            })
                        }
                    D && t.type === "input" && r.value && !Oe(t.props.preserveErrors) && t.store.filter($ => {
                        var U;
                        return !($.type === "error" && ((U = $.meta) == null ? void 0 : U.autoClear) === !0)
                    }), t.type === "list" && t.sync && (I.value = t.children.map($ => $.uid)), O.state.empty = Re(l)
                });
                const _ = async l => {
                    l.type === "ui" && l.visible && !l.meta.showAsMessage ? L[l.key] = l : l.visible ? i[l.key] = l : l.type === "state" && (O.state[l.key] = !!l.value)
                };
                t.on("message-added", l => _(l.payload)), t.on("message-updated", l => _(l.payload)), t.on("message-removed", ({
                    payload: l
                }) => {
                    delete L[l.key], delete i[l.key], delete O.state[l.key]
                }), t.on("settled:blocking", () => {
                    n.value = !0
                }), t.on("unsettled:blocking", () => {
                    n.value = !1
                }), t.on("settled:errors", () => {
                    r.value = !1
                }), t.on("unsettled:errors", () => {
                    r.value = !0
                }), St(d, l => {
                    l && (o.value = !0)
                }), t.context = O, t.emit("context", t, !1), t.on("destroyed", () => {
                    t.context = void 0, t = null
                })
            }, Ma = Or
        }
    }),
    wl = {};
Fl(wl, {
    defaultConfig: () => va
});
var va, Wl = Ca({
        "packages/vue/src/defaultConfig.ts" () {
            ha(), va = (e = {}) => {
                Yl();
                const {
                    rules: t = {},
                    locales: n = {},
                    inputs: r = {},
                    messages: a = {},
                    locale: i = void 0,
                    theme: s = void 0,
                    iconLoaderUrl: o = void 0,
                    iconLoader: E = void 0,
                    icons: u = {},
                    ...I
                } = e, d = NE({ ...IE,
                    ...t || {}
                }), y = bE(ye({
                    en: BE,
                    ...n || {}
                }, a)), D = YE(Ml, r), M = vl(s, u, o, E);
                return ye({
                    plugins: [D, M, Ma, y, d],
                    ...i ? {
                        config: {
                            locale: i
                        }
                    } : {}
                }, I || {}, !0)
            }
        }
    }),
    Gl = typeof window > "u",
    sn = new Map;

function jl(e, t) {
    var n;
    !Gl || !e || (sn.has(e) || sn.set(e, new Set), (n = sn.get(e)) == null || n.add(t))
}
var ga = typeof window > "u",
    dt = {},
    tt = {},
    ee, ge = new WeakMap,
    zl = "__raw__",
    xl = /[a-zA-Z0-9\-][cC]lass$/;

function Ql(e, t) {
    const n = ae(null);
    if (e === "get") {
        const a = {};
        return n.value = Kl.bind(null, a), n
    }
    const r = e.split(".");
    return ve(() => {
        n.value = Vn(An(t) ? t.value : t, r)
    }), n
}

function Vn(e, t) {
    if (Array.isArray(e)) {
        for (const a of e) {
            const i = a !== !1 && Vn(a, t);
            if (i !== void 0) return i
        }
        return
    }
    let n, r = e;
    for (const a in t) {
        const i = t[a];
        if (typeof r != "object" || r === null) {
            n = void 0;
            break
        }
        const s = r[i];
        if (Number(a) === t.length - 1 && s !== void 0) {
            n = typeof s == "function" ? s.bind(r) : s;
            break
        }
        r = s
    }
    return n
}

function Kl(e, t) {
    if (typeof t != "string") return Ge(650);
    if (t in e || (e[t] = ae(void 0)), e[t].value === void 0) {
        e[t].value = null;
        const n = Dt(t);
        n && (e[t].value = n.context), ns(t, ({
            payload: r
        }) => {
            e[t].value = Ct(r) ? r.context : r
        })
    }
    return e[t].value
}

function Lr(e, t, n) {
    function r(D, M) {
        const T = d(_e(M.if), {
                if: !0
            }),
            L = u(D, M.then),
            f = M.else ? u(D, M.else) : null;
        return [T, L, f]
    }

    function a(D, M) {
        var m, h;
        const T = d(_e(D.if));
        let L = () => M,
            f = () => M;
        return typeof D.then == "object" ? f = i(D.then, void 0) : typeof D.then == "string" && ((m = D.then) != null && m.startsWith("$")) ? f = d(_e(D.then)) : f = () => D.then, b(D, "else") && (typeof D.else == "object" ? L = i(D.else) : typeof D.else == "string" && ((h = D.else) != null && h.startsWith("$")) ? L = d(_e(D.else)) : L = () => D.else), () => T() ? f() : L()
    }

    function i(D, M, T = {}) {
        const L = new Set(Object.keys(D || {})),
            f = M ? d(_e(M)) : () => ({}),
            m = [h => {
                const C = f();
                for (const g in C) L.has(g) || (h[g] = C[g])
            }];
        if (D) {
            if (xe(D)) return a(D, T);
            for (let h in D) {
                const C = D[h];
                let g;
                const c = typeof C == "string";
                h.startsWith(zl) ? (h = h.substring(7), g = () => C) : c && C.startsWith("$") && C.length > 1 && !(C.startsWith("$reset") && xl.test(h)) ? g = d(_e(C)) : typeof C == "object" && xe(C) ? g = a(C, void 0) : typeof C == "object" && lt(C) ? g = i(C) : g = () => C, m.push(O => {
                    O[h] = g()
                })
            }
        }
        return () => {
            const h = Array.isArray(D) ? [] : {};
            return m.forEach(C => C(h)), h
        }
    }

    function s(D, M) {
        let T = null,
            L = () => null,
            f = !1,
            m = null,
            h = null,
            C = null,
            g = !1;
        const c = qs(M);
        if (Nn(c) ? (T = c.$el, L = c.$el !== "text" ? i(c.attrs, c.bind) : () => null) : fn(c) ? (typeof c.$cmp == "string" ? b(D, c.$cmp) ? T = D[c.$cmp] : (T = c.$cmp, g = !0) : T = c.$cmp, L = i(c.props, c.bind)) : xe(c) && ([f, m, h] = r(D, c)), !xe(c) && "if" in c ? f = d(_e(c.if)) : !xe(c) && T === null && (f = () => !0), "children" in c && c.children)
            if (typeof c.children == "string")
                if (c.children.startsWith("$slots.")) T = T === "text" ? "slot" : T, m = d(_e(c.children));
                else if (c.children.startsWith("$") && c.children.length > 1) {
            const O = d(_e(c.children));
            m = () => String(O())
        } else m = () => String(c.children);
        else if (Array.isArray(c.children)) m = u(D, c.children);
        else {
            const [O, P, A] = r(D, c.children);
            m = R => O && O() ? P && P(R) : A && A(R)
        }
        if (fn(c))
            if (m) {
                const O = m;
                m = P => ({
                    default (A, R) {
                        var S, $, U, k;
                        const _ = ee;
                        R && (ee = R), A && ((S = ge.get(ee)) == null || S.unshift(A)), P && (($ = ge.get(ee)) == null || $.unshift(P));
                        const l = O(P);
                        return A && ((U = ge.get(ee)) == null || U.shift()), P && ((k = ge.get(ee)) == null || k.shift()), ee = _, l
                    }
                }), m.slot = !0
            } else m = () => ({});
        if ("for" in c && c.for) {
            const O = c.for.length === 3 ? c.for[2] : c.for[1];
            C = [typeof O == "string" && O.startsWith("$") ? d(_e(O)) : () => O, c.for[0], c.for.length === 3 ? String(c.for[1]) : null]
        }
        return [f, T, L, m, h, C, g]
    }

    function o(D, M) {
        const T = D(M),
            L = ee;
        return Object.keys(T).reduce((f, m) => {
            const h = T && T[m];
            return f[m] = C => h && h(C, L) || null, f
        }, {})
    }

    function E(D, M) {
        const [T, L, f, m, h, C, g] = s(D, M);
        let c = O => {
            if (T && L === null && m) return T() ? m(O) : h && h(O);
            if (L && (!T || T())) {
                if (L === "text" && m) return ci(String(m()));
                if (L === "slot" && m) return m(O);
                const P = g ? ui(L) : L,
                    A = m != null && m.slot ? o(m, O) : null;
                return un(P, f(), A || (m ? m(O) : []))
            }
            return typeof h == "function" ? h(O) : h
        };
        if (C) {
            const O = c,
                [P, A, R] = C;
            c = () => {
                const _ = P(),
                    l = Number.isFinite(_) ? Array(Number(_)).fill(0).map((k, Y) => Y) : _,
                    S = [];
                if (typeof l != "object") return null;
                const $ = ge.get(ee) || [],
                    U = Array.isArray(l);
                for (const k in l) {
                    if (U && k in Array.prototype) continue;
                    const Y = Object.defineProperty({ ...$.reduce((z, J) => z.__idata ? { ...z,
                            ...J
                        } : J, {}),
                        [A]: l[k],
                        ...R !== null ? {
                            [R]: U ? Number(k) : k
                        } : {}
                    }, "__idata", {
                        enumerable: !1,
                        value: !0
                    });
                    $.unshift(Y), S.push(O.bind(null, Y)()), $.shift()
                }
                return S
            }
        }
        return c
    }

    function u(D, M) {
        if (Array.isArray(M)) {
            const L = M.map(E.bind(null, D));
            return f => L.map(m => m(f))
        }
        const T = E(D, M);
        return L => T(L)
    }
    const I = [];

    function d(D, M = {}) {
        const T = new WeakMap;
        return I.push((L, f) => {
            T.set(f, D.provide(m => L(m, M)))
        }), () => T.get(ee)()
    }

    function y(D, M) {
        n ? ? (n = $a(t));
        const [T, L] = b(dt, n) ? dt[n] : [u(e, t), I];
        return ga || (tt[n] ? ? (tt[n] = 0), tt[n]++, dt[n] = [T, L]), L.forEach(f => {
            f(D, M)
        }), () => (ee = M, T())
    }
    return y
}

function Pa(e, t) {
    const n = ge.get(ee) || [];
    let r;
    return n.length && (r = Vn(n, e.split("."))), r === void 0 ? t : r
}

function ql(e, t) {
    return new Proxy(e, {
        get(...n) {
            let r;
            const a = n[1];
            if (typeof a == "string") {
                const i = ee;
                ee = t, r = Pa(a, void 0), ee = i
            }
            return r !== void 0 ? r : Reflect.get(...n)
        }
    })
}

function Ir(e, t, n) {
    return e((r, a = {}) => r.reduce((i, s) => {
        if (s.startsWith("slots.")) {
            const o = s.substring(6),
                E = () => t.slots && b(t.slots, o) && typeof t.slots[o] == "function";
            if (a.if) i[s] = E;
            else if (t.slots) {
                const u = ql(t, n);
                i[s] = () => E() ? t.slots[o](u) : null
            }
        } else {
            const o = Ql(s, t);
            i[s] = () => Pa(s, o.value)
        }
        return i
    }, {}), n)
}

function Nr(e, t, n) {
    if (t ? ? (t = $a(e)), tt[t]--, tt[t] === 0) {
        delete tt[t];
        const [, r] = dt[t];
        delete dt[t], r.length = 0
    }
    ge.delete(n)
}

function $a(e) {
    return JSON.stringify(e, (t, n) => typeof n == "function" ? n.toString() : n)
}
var ya = Br({
        name: "FormKitSchema",
        props: {
            schema: {
                type: [Array, Object],
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            library: {
                type: Object,
                default: () => ({})
            },
            memoKey: {
                type: String,
                required: !1
            }
        },
        emits: ["mounted"],
        setup(e, t) {
            var u;
            const n = Vt();
            let r = {};
            ge.set(r, []);
            const a = {
                FormKit: Zt(Ba),
                ...e.library
            };
            let i = Lr(a, e.schema, e.memoKey),
                s, o;
            ga || St(() => e.schema, (I, d) => {
                var D;
                const y = r;
                r = {}, ge.set(r, []), i = Lr(a, e.schema, e.memoKey), s = Ir(i, o, r), I === d && ((D = n == null ? void 0 : n.proxy) == null ? void 0 : D.$forceUpdate).call(D), Nr(e.schema, e.memoKey, y)
            }, {
                deep: !0
            }), ve(() => {
                o = Object.assign(Ot(e.data ? ? {}), {
                    slots: t.slots
                }), t.slots, s = Ir(i, o, r)
            });

            function E() {
                Nr(e.schema, e.memoKey, r), o && (o.node && o.node.destroy(), o.slots = null, o = null), s = null
            }
            return br(() => t.emit("mounted")), oi(E), jl((u = Vt()) == null ? void 0 : u.appContext.app, E), () => s ? s() : null
        }
    }),
    Zl = ya,
    Jl = typeof window > "u",
    fr = Symbol("FormKitParent"),
    Xl = Symbol("FormKitComponentCallback");

function ec(e, t) {
    const n = oc(e, t);
    if (n.props.definition || oe(600, n), n.props.definition.component) return () => {
        var u;
        return un((u = n.props.definition) == null ? void 0 : u.component, {
            context: n.context
        }, { ...t.slots
        })
    };
    const r = ae([]);
    let a = n.props.definition.schemaMemoKey;
    const i = () => {
        var I, d;
        const u = (d = (I = n.props) == null ? void 0 : I.definition) == null ? void 0 : d.schema;
        u || oe(601, n), typeof u == "function" ? (r.value = u({ ...e.sectionsSchema || {}
        }), (a && e.sectionsSchema || "memoKey" in u && typeof u.memoKey == "string") && (a = (a ? ? (u == null ? void 0 : u.memoKey)) + JSON.stringify(e.sectionsSchema))) : r.value = u
    };
    i(), Jl || n.on("schema", () => {
        a += "♻️", i()
    }), t.emit("node", n);
    const s = n.props.definition.library,
        o = {
            FormKit: Zt(Ua),
            ...s,
            ...e.library ? ? {}
        };

    function E() {
        n.emit("mounted")
    }
    return t.expose({
        node: n
    }), () => un(ya, {
        schema: r.value,
        data: n.context,
        onMounted: E,
        library: o,
        memoKey: a
    }, { ...t.slots
    })
}
var Ua = Br(ec, {
        props: kE,
        inheritAttrs: !1
    }),
    Ba = Ua,
    tc = Symbol();

function nc(e, t) {
    return e.component(t.alias || "FormKit", Ba).component(t.schemaAlias || "FormKitSchema", Zl), {
        get: Dt,
        setLocale: n => {
            var r;
            (r = t.config) != null && r.rootConfig && (t.config.rootConfig.locale = n)
        },
        clearErrors: Xs,
        setErrors: Js,
        submit: Wr,
        reset: Gr
    }
}
var ba = Symbol.for("FormKitOptions"),
    rc = Symbol.for("FormKitConfig"),
    YP = {
        install(e, t) {
            const n = Object.assign({
                    alias: "FormKit",
                    schemaAlias: "FormKitSchema"
                }, typeof t == "function" ? t() : t),
                r = rs(n.config || {});
            n.config = {
                rootConfig: r
            }, e.config.globalProperties.$formkit = nc(e, n), e.provide(ba, n), e.provide(rc, r), typeof window < "u" && (globalThis.__FORMKIT_CONFIGS__ = (globalThis.__FORMKIT_CONFIGS__ || []).concat([r]))
        }
    },
    ac = typeof window < "u",
    on = ["ignore", "disabled", "preserve", "help", "label", /^preserve(-e|E)rrors/, /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/, /^[a-zA-Z-]+(?:-class|Class)$/, "prefixIcon", "suffixIcon", /^[a-zA-Z-]+(?:-icon|Icon)$/],
    ic = ["disabled", "ignore", "preserve"];

function Sr(e, t) {
    t.classes && Object.keys(t.classes).forEach(n => {
        typeof n == "string" && (e.props[`_${n}Class`] = t.classes[n], pt(t.classes[n]) && n === "inner" && Object.values(t.classes[n]))
    })
}

function sc(e) {
    return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce((n, r) => {
        const a = `on${r}`;
        return a in e && typeof e[a] == "function" && (n[a] = e[a]), n
    }, {}) : {}
}

function oc(e, t, n = {}) {
    const r = Object.assign({}, vt(ba) || {}, n),
        a = vt(tc, ae(ac ? document : void 0)),
        i = vt(Xl, () => {}),
        s = Vt(),
        o = sc(s == null ? void 0 : s.vnode.props),
        E = ["modelValue", "model-value"].some(c => c in ((s == null ? void 0 : s.vnode.props) ? ? {}));
    let u = !1;
    br(() => {
        u = !0
    });
    const I = e.modelValue !== void 0 ? e.modelValue : Ae(t.attrs.value);

    function d() {
        const c = { ...ze(e),
                ...o,
                type: e.type ? ? "text",
                __root: a.value,
                __slots: t.slots
            },
            O = xn(ze(t.attrs), on);
        O.key || (O.key = Rt()), c.attrs = O;
        const P = Qn(ze(t.attrs), on);
        for (const R in P) ic.includes(R) && P[R] === "" && (P[R] = !0), c[Je(R)] = P[R];
        const A = {
            props: {}
        };
        return Sr(A, e), Object.assign(c, A.props), typeof c.type != "string" && (c.definition = c.type, delete c.type), c
    }
    const y = d(),
        D = y.ignore ? null : e.parent || vt(fr, null),
        M = Qs(ye(r || {}, {
            name: e.name || void 0,
            value: I,
            parent: D,
            plugins: (r.plugins || []).concat(e.plugins ? ? []),
            config: e.config || {},
            props: y,
            index: e.index,
            sync: !!Oe(t.attrs.sync || t.attrs.dynamic)
        }, !1, !0));
    i(M), M.props.definition || oe(600, M);
    const T = ae(new Set(Array.isArray(M.props.__propDefs) ? M.props.__propDefs : Object.keys(M.props.__propDefs ? ? {})));
    M.on("added-props", ({
        payload: c
    }) => {
        (Array.isArray(c) ? c : Object.keys(c ? ? {})).forEach(P => T.value.add(P))
    });
    const L = me(() => on.concat([...T.value]).reduce((c, O) => (typeof O == "string" ? (c.push(Je(O)), c.push(kr(O))) : c.push(O), c), []));
    ve(() => Sr(M, e));
    const f = ze(e);
    for (const c in f) St(() => e[c], () => {
        e[c] !== void 0 && (M.props[c] = e[c])
    });
    ve(() => {
        M.props.__root = a.value
    });
    const m = new Set,
        h = ze(t.attrs);
    ve(() => {
        C(Qn(h, L.value))
    });

    function C(c) {
        m.forEach(O => {
            O(), m.delete(O)
        });
        for (const O in c) {
            const P = Je(O);
            m.add(St(() => t.attrs[O], () => {
                M.props[P] = t.attrs[O]
            }))
        }
    }
    if (ve(() => {
            const c = xn(ze(t.attrs), L.value);
            "multiple" in c && (c.multiple = Oe(c.multiple)), typeof c.onBlur == "function" && (c.onBlur = bi(c.onBlur)), M.props.attrs = Object.assign({}, M.props.attrs || {}, c)
        }), ve(() => {
            const c = (e.errors ? ? []).map(O => Ee({
                key: vn(O),
                type: "error",
                value: O,
                meta: {
                    source: "prop"
                }
            }));
            M.store.apply(c, O => O.type === "error" && O.meta.source === "prop")
        }), M.type !== "input") {
        const c = `${M.name}-prop`;
        ve(() => {
            const O = e.inputErrors ? ? {},
                P = Object.keys(O);
            P.length || M.clearErrors(!0, c);
            const A = P.reduce((R, _) => {
                let l = O[_];
                return typeof l == "string" && (l = [l]), Array.isArray(l) && (R[_] = l.map(S => Ee({
                    key: S,
                    type: "error",
                    value: S,
                    meta: {
                        source: c
                    }
                }))), R
            }, {});
            M.store.apply(A, R => R.type === "error" && R.meta.source === c)
        })
    }
    ve(() => Object.assign(M.config, e.config)), M.type !== "input" && Ri(fr, M);
    let g;
    return M.on("modelUpdated", () => {
        var c, O;
        t.emit("inputRaw", (c = M.context) == null ? void 0 : c.value, M), u && t.emit("input", (O = M.context) == null ? void 0 : O.value, M), E && M.context && (g = Ae(M.value), t.emit("update:modelValue", _n(M.value)))
    }), E && (St(Ei(e, "modelValue"), c => {
        te(g, c) || M.input(c, !1)
    }, {
        deep: !0
    }), M.value !== I && M.emit("modelUpdated")), li(() => M.destroy()), M
}
var Ec = 1;

function lc(e) {
    return typeof e == "function" && e.length === 2 || typeof e == "object" && !Array.isArray(e) && !("$el" in e) && !("$cmp" in e) && !("if" in e)
}

function kP(e, t = {}, n = {}) {
    const r = {
        type: "input",
        ...t
    };
    let a;
    if (lc(e)) {
        const i = `SchemaComponent${Ec++}`;
        a = B("input", () => ({
            $cmp: i,
            props: {
                context: "$node.context"
            }
        })), r.library = {
            [i]: Zt(e)
        }
    } else typeof e == "function" ? a = e : a = B("input", () => Ae(e));
    return r.schema = Ol(a || "Schema undefined", n), r.schemaMemoKey || (r.schemaMemoKey = `${Math.random()}`), r
}
var cc = B("messages", () => ({
        $el: "ul",
        if: "$fns.length($messages)"
    })),
    uc = B("message", () => ({
        $el: "li",
        for: ["message", "$messages"],
        attrs: {
            key: "$message.key",
            id: "$id + '-' + $message.key",
            "data-message-type": "$message.type"
        }
    }));
cc(uc("$message.value"));
var Ac = B("summary", () => ({
        $el: "div",
        attrs: {
            "aria-live": "polite"
        }
    })),
    Rc = B("summaryInner", () => ({
        $el: "div",
        if: "$summaries.length && $showSummaries"
    })),
    _c = B("messages", () => ({
        $el: "ul",
        if: "$summaries.length && $showSummaries"
    })),
    Tc = B("message", () => ({
        $el: "li",
        for: ["summary", "$summaries"],
        attrs: {
            key: "$summary.key",
            "data-message-type": "$summary.type"
        }
    })),
    Oc = B("summaryHeader", () => ({
        $el: "h2",
        attrs: {
            id: "$id"
        }
    })),
    Lc = B("messageLink", () => ({
        $el: "a",
        attrs: {
            id: "$summary.key",
            href: '$: "#" + $summary.id',
            onClick: "$jumpLink"
        }
    }));
Ac(Rc(Oc("$summaryHeader"), _c(Tc(Lc("$summary.message")))));
Wl();
ha();

function Ic(e, t) {
    ne(2, arguments);
    var n = Ie(e),
        r = ue(t);
    return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n)
}

function Ya(e, t) {
    ne(2, arguments);
    var n = Rn(e),
        r = Rn(t);
    return n.getTime() === r.getTime()
}

function Nc(e) {
    ne(1, arguments);
    var t = Ie(e);
    return t.setHours(23, 59, 59, 999), t
}

function fc(e, t) {
    if (e == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    t = t || {};
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
}

function pr(e) {
    ne(1, arguments);
    var t = Ie(e),
        n = t.getHours();
    return n
}

function dr(e) {
    ne(1, arguments);
    var t = Ie(e),
        n = t.getMinutes();
    return n
}

function Sc(e) {
    ne(1, arguments);
    var t = Ie(e),
        n = t.getTime();
    return n
}

function ka(e) {
    return ne(1, arguments), Math.floor(Sc(e) / 1e3)
}

function pc(e, t) {
    ne(2, arguments);
    var n = ue(t);
    return Ic(e, -n)
}

function En(e, t, n) {
    ne(2, arguments);
    var r = n || {},
        a = r.locale,
        i = a && a.options && a.options.weekStartsOn,
        s = i == null ? 0 : ue(i),
        o = r.weekStartsOn == null ? s : ue(r.weekStartsOn);
    if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var E = Ie(e),
        u = ue(t),
        I = E.getUTCDay(),
        d = u % 7,
        y = (d + 7) % 7,
        D = (y < o ? 7 : 0) + u - I;
    return E.setUTCDate(E.getUTCDate() + D), E
}

function dc(e, t) {
    ne(2, arguments);
    var n = ue(t);
    n % 7 === 0 && (n = n - 7);
    var r = 1,
        a = Ie(e),
        i = a.getUTCDay(),
        s = n % 7,
        o = (s + 7) % 7,
        E = (o < r ? 7 : 0) + n - i;
    return a.setUTCDate(a.getUTCDate() + E), a
}

function mc(e, t) {
    ne(2, arguments);
    var n = Ie(e),
        r = ue(t),
        a = Oi(n) - r;
    return n.setUTCDate(n.getUTCDate() - a * 7), n
}

function Dc(e, t, n) {
    ne(2, arguments);
    var r = Ie(e),
        a = ue(t),
        i = Li(r, n) - a;
    return r.setUTCDate(r.getUTCDate() - i * 7), r
}
var Cc = 36e5,
    Mc = 6e4,
    hc = 1e3,
    G = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/
    },
    fe = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };

function w(e, t, n) {
    var r = t.match(e);
    if (!r) return null;
    var a = parseInt(r[0], 10);
    return {
        value: n ? n(a) : a,
        rest: t.slice(r[0].length)
    }
}

function Se(e, t) {
    var n = t.match(e);
    if (!n) return null;
    if (n[0] === "Z") return {
        value: 0,
        rest: t.slice(1)
    };
    var r = n[1] === "+" ? 1 : -1,
        a = n[2] ? parseInt(n[2], 10) : 0,
        i = n[3] ? parseInt(n[3], 10) : 0,
        s = n[5] ? parseInt(n[5], 10) : 0;
    return {
        value: r * (a * Cc + i * Mc + s * hc),
        rest: t.slice(n[0].length)
    }
}

function mr(e, t) {
    return w(G.anyDigitsSigned, e, t)
}

function W(e, t, n) {
    switch (e) {
        case 1:
            return w(G.singleDigit, t, n);
        case 2:
            return w(G.twoDigits, t, n);
        case 3:
            return w(G.threeDigits, t, n);
        case 4:
            return w(G.fourDigits, t, n);
        default:
            return w(new RegExp("^\\d{1," + e + "}"), t, n)
    }
}

function $t(e, t, n) {
    switch (e) {
        case 1:
            return w(G.singleDigitSigned, t, n);
        case 2:
            return w(G.twoDigitsSigned, t, n);
        case 3:
            return w(G.threeDigitsSigned, t, n);
        case 4:
            return w(G.fourDigitsSigned, t, n);
        default:
            return w(new RegExp("^-?\\d{1," + e + "}"), t, n)
    }
}

function ln(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0
    }
}

function Dr(e, t) {
    var n = t > 0,
        r = n ? t : 1 - t,
        a;
    if (r <= 50) a = e || 100;
    else {
        var i = r + 50,
            s = Math.floor(i / 100) * 100,
            o = e >= i % 100;
        a = e + s - (o ? 100 : 0)
    }
    return n ? a : 1 - a
}
var vc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    gc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Cr(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}
var Pc = {
        G: {
            priority: 140,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return n.era(e, {
                            width: "abbreviated"
                        }) || n.era(e, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return n.era(e, {
                            width: "narrow"
                        });
                    case "GGGG":
                    default:
                        return n.era(e, {
                            width: "wide"
                        }) || n.era(e, {
                            width: "abbreviated"
                        }) || n.era(e, {
                            width: "narrow"
                        })
                }
            },
            set: function(e, t, n, r) {
                return t.era = n, e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["R", "u", "t", "T"]
        },
        y: {
            priority: 130,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    return {
                        year: i,
                        isTwoDigitYear: t === "yy"
                    }
                };
                switch (t) {
                    case "y":
                        return W(4, e, a);
                    case "yo":
                        return n.ordinalNumber(e, {
                            unit: "year",
                            valueCallback: a
                        });
                    default:
                        return W(t.length, e, a)
                }
            },
            validate: function(e, t, n) {
                return t.isTwoDigitYear || t.year > 0
            },
            set: function(e, t, n, r) {
                var a = e.getUTCFullYear();
                if (n.isTwoDigitYear) {
                    var i = Dr(n.year, a);
                    return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                }
                var s = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
                return e.setUTCFullYear(s, 0, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]
        },
        Y: {
            priority: 130,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    return {
                        year: i,
                        isTwoDigitYear: t === "YY"
                    }
                };
                switch (t) {
                    case "Y":
                        return W(4, e, a);
                    case "Yo":
                        return n.ordinalNumber(e, {
                            unit: "year",
                            valueCallback: a
                        });
                    default:
                        return W(t.length, e, a)
                }
            },
            validate: function(e, t, n) {
                return t.isTwoDigitYear || t.year > 0
            },
            set: function(e, t, n, r) {
                var a = Ii(e, r);
                if (n.isTwoDigitYear) {
                    var i = Dr(n.year, a);
                    return e.setUTCFullYear(i, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), tn(e, r)
                }
                var s = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
                return e.setUTCFullYear(s, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), tn(e, r)
            },
            incompatibleTokens: ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
        },
        R: {
            priority: 130,
            parse: function(e, t, n, r) {
                return $t(t === "R" ? 4 : t.length, e)
            },
            set: function(e, t, n, r) {
                var a = new Date(0);
                return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), jn(a)
            },
            incompatibleTokens: ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
        },
        u: {
            priority: 130,
            parse: function(e, t, n, r) {
                return $t(t === "u" ? 4 : t.length, e)
            },
            set: function(e, t, n, r) {
                return e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
        },
        Q: {
            priority: 120,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "Q":
                    case "QQ":
                        return W(t.length, e);
                    case "Qo":
                        return n.ordinalNumber(e, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return n.quarter(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.quarter(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return n.quarter(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQ":
                    default:
                        return n.quarter(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.quarter(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.quarter(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 4
            },
            set: function(e, t, n, r) {
                return e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
        },
        q: {
            priority: 120,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "q":
                    case "qq":
                        return W(t.length, e);
                    case "qo":
                        return n.ordinalNumber(e, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return n.quarter(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.quarter(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return n.quarter(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqq":
                    default:
                        return n.quarter(e, {
                            width: "wide",
                            context: "standalone"
                        }) || n.quarter(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.quarter(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 4
            },
            set: function(e, t, n, r) {
                return e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
        },
        M: {
            priority: 110,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    return i - 1
                };
                switch (t) {
                    case "M":
                        return w(G.month, e, a);
                    case "MM":
                        return W(2, e, a);
                    case "Mo":
                        return n.ordinalNumber(e, {
                            unit: "month",
                            valueCallback: a
                        });
                    case "MMM":
                        return n.month(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.month(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return n.month(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMM":
                    default:
                        return n.month(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.month(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.month(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 11
            },
            set: function(e, t, n, r) {
                return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
        },
        L: {
            priority: 110,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    return i - 1
                };
                switch (t) {
                    case "L":
                        return w(G.month, e, a);
                    case "LL":
                        return W(2, e, a);
                    case "Lo":
                        return n.ordinalNumber(e, {
                            unit: "month",
                            valueCallback: a
                        });
                    case "LLL":
                        return n.month(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.month(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return n.month(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLL":
                    default:
                        return n.month(e, {
                            width: "wide",
                            context: "standalone"
                        }) || n.month(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.month(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 11
            },
            set: function(e, t, n, r) {
                return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
        },
        w: {
            priority: 100,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "w":
                        return w(G.week, e);
                    case "wo":
                        return n.ordinalNumber(e, {
                            unit: "week"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 53
            },
            set: function(e, t, n, r) {
                return tn(Dc(e, n, r), r)
            },
            incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
        },
        I: {
            priority: 100,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "I":
                        return w(G.week, e);
                    case "Io":
                        return n.ordinalNumber(e, {
                            unit: "week"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 53
            },
            set: function(e, t, n, r) {
                return jn(mc(e, n, r), r)
            },
            incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
        },
        d: {
            priority: 90,
            subPriority: 1,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "d":
                        return w(G.date, e);
                    case "do":
                        return n.ordinalNumber(e, {
                            unit: "date"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                var r = e.getUTCFullYear(),
                    a = Cr(r),
                    i = e.getUTCMonth();
                return a ? t >= 1 && t <= gc[i] : t >= 1 && t <= vc[i]
            },
            set: function(e, t, n, r) {
                return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
        },
        D: {
            priority: 90,
            subPriority: 1,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "D":
                    case "DD":
                        return w(G.dayOfYear, e);
                    case "Do":
                        return n.ordinalNumber(e, {
                            unit: "date"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                var r = e.getUTCFullYear(),
                    a = Cr(r);
                return a ? t >= 1 && t <= 366 : t >= 1 && t <= 365
            },
            set: function(e, t, n, r) {
                return e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
        },
        E: {
            priority: 90,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return n.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEE":
                    default:
                        return n.day(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 6
            },
            set: function(e, t, n, r) {
                return e = En(e, n, r), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["D", "i", "e", "c", "t", "T"]
        },
        e: {
            priority: 90,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    var s = Math.floor((i - 1) / 7) * 7;
                    return (i + r.weekStartsOn + 6) % 7 + s
                };
                switch (t) {
                    case "e":
                    case "ee":
                        return W(t.length, e, a);
                    case "eo":
                        return n.ordinalNumber(e, {
                            unit: "day",
                            valueCallback: a
                        });
                    case "eee":
                        return n.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeee":
                        return n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeee":
                    default:
                        return n.day(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 6
            },
            set: function(e, t, n, r) {
                return e = En(e, n, r), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
        },
        c: {
            priority: 90,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    var s = Math.floor((i - 1) / 7) * 7;
                    return (i + r.weekStartsOn + 6) % 7 + s
                };
                switch (t) {
                    case "c":
                    case "cc":
                        return W(t.length, e, a);
                    case "co":
                        return n.ordinalNumber(e, {
                            unit: "day",
                            valueCallback: a
                        });
                    case "ccc":
                        return n.day(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "ccccc":
                        return n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return n.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccc":
                    default:
                        return n.day(e, {
                            width: "wide",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 6
            },
            set: function(e, t, n, r) {
                return e = En(e, n, r), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
        },
        i: {
            priority: 90,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    return i === 0 ? 7 : i
                };
                switch (t) {
                    case "i":
                    case "ii":
                        return W(t.length, e);
                    case "io":
                        return n.ordinalNumber(e, {
                            unit: "day"
                        });
                    case "iii":
                        return n.day(e, {
                            width: "abbreviated",
                            context: "formatting",
                            valueCallback: a
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting",
                            valueCallback: a
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        });
                    case "iiiii":
                        return n.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        });
                    case "iiiiii":
                        return n.day(e, {
                            width: "short",
                            context: "formatting",
                            valueCallback: a
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        });
                    case "iiii":
                    default:
                        return n.day(e, {
                            width: "wide",
                            context: "formatting",
                            valueCallback: a
                        }) || n.day(e, {
                            width: "abbreviated",
                            context: "formatting",
                            valueCallback: a
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting",
                            valueCallback: a
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting",
                            valueCallback: a
                        })
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 7
            },
            set: function(e, t, n, r) {
                return e = dc(e, n, r), e.setUTCHours(0, 0, 0, 0), e
            },
            incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
        },
        a: {
            priority: 80,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return n.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return n.dayPeriod(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            set: function(e, t, n, r) {
                return e.setUTCHours(ln(n), 0, 0, 0), e
            },
            incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"]
        },
        b: {
            priority: 80,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "b":
                    case "bb":
                    case "bbb":
                        return n.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return n.dayPeriod(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            set: function(e, t, n, r) {
                return e.setUTCHours(ln(n), 0, 0, 0), e
            },
            incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"]
        },
        B: {
            priority: 80,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return n.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return n.dayPeriod(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.dayPeriod(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            },
            set: function(e, t, n, r) {
                return e.setUTCHours(ln(n), 0, 0, 0), e
            },
            incompatibleTokens: ["a", "b", "t", "T"]
        },
        h: {
            priority: 70,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "h":
                        return w(G.hour12h, e);
                    case "ho":
                        return n.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 12
            },
            set: function(e, t, n, r) {
                var a = e.getUTCHours() >= 12;
                return a && n < 12 ? e.setUTCHours(n + 12, 0, 0, 0) : !a && n === 12 ? e.setUTCHours(0, 0, 0, 0) : e.setUTCHours(n, 0, 0, 0), e
            },
            incompatibleTokens: ["H", "K", "k", "t", "T"]
        },
        H: {
            priority: 70,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "H":
                        return w(G.hour23h, e);
                    case "Ho":
                        return n.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 23
            },
            set: function(e, t, n, r) {
                return e.setUTCHours(n, 0, 0, 0), e
            },
            incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"]
        },
        K: {
            priority: 70,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "K":
                        return w(G.hour11h, e);
                    case "Ko":
                        return n.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 11
            },
            set: function(e, t, n, r) {
                var a = e.getUTCHours() >= 12;
                return a && n < 12 ? e.setUTCHours(n + 12, 0, 0, 0) : e.setUTCHours(n, 0, 0, 0), e
            },
            incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"]
        },
        k: {
            priority: 70,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "k":
                        return w(G.hour24h, e);
                    case "ko":
                        return n.ordinalNumber(e, {
                            unit: "hour"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 1 && t <= 24
            },
            set: function(e, t, n, r) {
                var a = n <= 24 ? n % 24 : n;
                return e.setUTCHours(a, 0, 0, 0), e
            },
            incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"]
        },
        m: {
            priority: 60,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "m":
                        return w(G.minute, e);
                    case "mo":
                        return n.ordinalNumber(e, {
                            unit: "minute"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 59
            },
            set: function(e, t, n, r) {
                return e.setUTCMinutes(n, 0, 0), e
            },
            incompatibleTokens: ["t", "T"]
        },
        s: {
            priority: 50,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "s":
                        return w(G.second, e);
                    case "so":
                        return n.ordinalNumber(e, {
                            unit: "second"
                        });
                    default:
                        return W(t.length, e)
                }
            },
            validate: function(e, t, n) {
                return t >= 0 && t <= 59
            },
            set: function(e, t, n, r) {
                return e.setUTCSeconds(n, 0), e
            },
            incompatibleTokens: ["t", "T"]
        },
        S: {
            priority: 30,
            parse: function(e, t, n, r) {
                var a = function(i) {
                    return Math.floor(i * Math.pow(10, -t.length + 3))
                };
                return W(t.length, e, a)
            },
            set: function(e, t, n, r) {
                return e.setUTCMilliseconds(n), e
            },
            incompatibleTokens: ["t", "T"]
        },
        X: {
            priority: 10,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "X":
                        return Se(fe.basicOptionalMinutes, e);
                    case "XX":
                        return Se(fe.basic, e);
                    case "XXXX":
                        return Se(fe.basicOptionalSeconds, e);
                    case "XXXXX":
                        return Se(fe.extendedOptionalSeconds, e);
                    case "XXX":
                    default:
                        return Se(fe.extended, e)
                }
            },
            set: function(e, t, n, r) {
                return t.timestampIsSet ? e : new Date(e.getTime() - n)
            },
            incompatibleTokens: ["t", "T", "x"]
        },
        x: {
            priority: 10,
            parse: function(e, t, n, r) {
                switch (t) {
                    case "x":
                        return Se(fe.basicOptionalMinutes, e);
                    case "xx":
                        return Se(fe.basic, e);
                    case "xxxx":
                        return Se(fe.basicOptionalSeconds, e);
                    case "xxxxx":
                        return Se(fe.extendedOptionalSeconds, e);
                    case "xxx":
                    default:
                        return Se(fe.extended, e)
                }
            },
            set: function(e, t, n, r) {
                return t.timestampIsSet ? e : new Date(e.getTime() - n)
            },
            incompatibleTokens: ["t", "T", "X"]
        },
        t: {
            priority: 40,
            parse: function(e, t, n, r) {
                return mr(e)
            },
            set: function(e, t, n, r) {
                return [new Date(n * 1e3), {
                    timestampIsSet: !0
                }]
            },
            incompatibleTokens: "*"
        },
        T: {
            priority: 20,
            parse: function(e, t, n, r) {
                return mr(e)
            },
            set: function(e, t, n, r) {
                return [new Date(n), {
                    timestampIsSet: !0
                }]
            },
            incompatibleTokens: "*"
        }
    },
    $c = 10,
    yc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Uc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Bc = /^'([^]*?)'?$/,
    bc = /''/g,
    Yc = /\S/,
    kc = /[a-zA-Z]/;

function Mr(e, t, n, r) {
    ne(3, arguments);
    var a = String(e),
        i = String(t),
        s = {},
        o = s.locale || Ni;
    if (!o.match) throw new RangeError("locale must contain match property");
    var E = o.options && o.options.firstWeekContainsDate,
        u = E == null ? 1 : ue(E),
        I = s.firstWeekContainsDate == null ? u : ue(s.firstWeekContainsDate);
    if (!(I >= 1 && I <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var d = o.options && o.options.weekStartsOn,
        y = d == null ? 0 : ue(d),
        D = s.weekStartsOn == null ? y : ue(s.weekStartsOn);
    if (!(D >= 0 && D <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (i === "") return a === "" ? Ie(n) : new Date(NaN);
    var M = {
            firstWeekContainsDate: I,
            weekStartsOn: D,
            locale: o
        },
        T = [{
            priority: $c,
            subPriority: -1,
            set: Hc,
            index: 0
        }],
        L, f = i.match(Uc).map(function(Y) {
            var z = Y[0];
            if (z === "p" || z === "P") {
                var J = fi[z];
                return J(Y, o.formatLong, M)
            }
            return Y
        }).join("").match(yc),
        m = [];
    for (L = 0; L < f.length; L++) {
        var h = f[L];
        !s.useAdditionalWeekYearTokens && Si(h) && zn(h, i, e), !s.useAdditionalDayOfYearTokens && pi(h) && zn(h, i, e);
        var C = h[0],
            g = Pc[C];
        if (g) {
            var c = g.incompatibleTokens;
            if (Array.isArray(c)) {
                for (var O = void 0, P = 0; P < m.length; P++) {
                    var A = m[P].token;
                    if (c.indexOf(A) !== -1 || A === C) {
                        O = m[P];
                        break
                    }
                }
                if (O) throw new RangeError("The format string mustn't contain `".concat(O.fullToken, "` and `").concat(h, "` at the same time"))
            } else if (g.incompatibleTokens === "*" && m.length) throw new RangeError("The format string mustn't contain `".concat(h, "` and any other token at the same time"));
            m.push({
                token: C,
                fullToken: h
            });
            var R = g.parse(a, h, o.match, M);
            if (!R) return new Date(NaN);
            T.push({
                priority: g.priority,
                subPriority: g.subPriority || 0,
                set: g.set,
                validate: g.validate,
                value: R.value,
                index: T.length
            }), a = R.rest
        } else {
            if (C.match(kc)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + C + "`");
            if (h === "''" ? h = "'" : C === "'" && (h = Vc(h)), a.indexOf(h) === 0) a = a.slice(h.length);
            else return new Date(NaN)
        }
    }
    if (a.length > 0 && Yc.test(a)) return new Date(NaN);
    var _ = T.map(function(Y) {
            return Y.priority
        }).sort(function(Y, z) {
            return z - Y
        }).filter(function(Y, z, J) {
            return J.indexOf(Y) === z
        }).map(function(Y) {
            return T.filter(function(z) {
                return z.priority === Y
            }).sort(function(z, J) {
                return J.subPriority - z.subPriority
            })
        }).map(function(Y) {
            return Y[0]
        }),
        l = Ie(n);
    if (isNaN(l)) return new Date(NaN);
    var S = di(l, mi(l)),
        $ = {};
    for (L = 0; L < _.length; L++) {
        var U = _[L];
        if (U.validate && !U.validate(S, U.value, M)) return new Date(NaN);
        var k = U.set(S, $, U.value, M);
        k[0] ? (S = k[0], fc($, k[1])) : S = k
    }
    return S
}

function Hc(e, t) {
    if (t.timestampIsSet) return e;
    var n = new Date(0);
    return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n
}

function Vc(e) {
    return e.match(Bc)[1].replace(bc, "'")
}

function Fc(e) {
    return ne(1, arguments), Ya(e, Date.now())
}

function wc(e) {
    return ne(1, arguments), Ya(e, pc(Date.now(), 1))
}
const Fn = () => {
        const e = Vt();
        if (!e) throw new Error("must be called in setup");
        return e.proxy.$store
    },
    HP = () => {
        const e = Fn();
        return Object.fromEntries(Object.keys(e.getters).map(t => [t, me(() => e.getters[t])]))
    },
    VP = e => {
        const t = Fn();
        return me(() => t.getters[e])
    },
    FP = (e, ...t) => {
        const n = Fn();
        return me(() => {
            const r = t.map(a => _i(a));
            return n.getters[e](...r)
        })
    };
var Dn = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        r(t)
    })(Ti, function(n) {
        var r = {
                logger: self.console,
                WebSocket: self.WebSocket
            },
            a = {
                log: function() {
                    if (this.enabled) {
                        for (var R, _ = arguments.length, l = Array(_), S = 0; S < _; S++) l[S] = arguments[S];
                        l.push(Date.now()), (R = r.logger).log.apply(R, ["[ActionCable]"].concat(l))
                    }
                }
            },
            i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
                return typeof A
            } : function(A) {
                return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            },
            s = function(A, R) {
                if (!(A instanceof R)) throw new TypeError("Cannot call a class as a function")
            },
            o = function() {
                function A(R, _) {
                    for (var l = 0; l < _.length; l++) {
                        var S = _[l];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(R, S.key, S)
                    }
                }
                return function(R, _, l) {
                    return _ && A(R.prototype, _), l && A(R, l), R
                }
            }(),
            E = function() {
                return new Date().getTime()
            },
            u = function(R) {
                return (E() - R) / 1e3
            },
            I = function(R, _, l) {
                return Math.max(_, Math.min(l, R))
            },
            d = function() {
                function A(R) {
                    s(this, A), this.visibilityDidChange = this.visibilityDidChange.bind(this), this.connection = R, this.reconnectAttempts = 0
                }
                return A.prototype.start = function() {
                    this.isRunning() || (this.startedAt = E(), delete this.stoppedAt, this.startPolling(), addEventListener("visibilitychange", this.visibilityDidChange), a.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms"))
                }, A.prototype.stop = function() {
                    this.isRunning() && (this.stoppedAt = E(), this.stopPolling(), removeEventListener("visibilitychange", this.visibilityDidChange), a.log("ConnectionMonitor stopped"))
                }, A.prototype.isRunning = function() {
                    return this.startedAt && !this.stoppedAt
                }, A.prototype.recordPing = function() {
                    this.pingedAt = E()
                }, A.prototype.recordConnect = function() {
                    this.reconnectAttempts = 0, this.recordPing(), delete this.disconnectedAt, a.log("ConnectionMonitor recorded connect")
                }, A.prototype.recordDisconnect = function() {
                    this.disconnectedAt = E(), a.log("ConnectionMonitor recorded disconnect")
                }, A.prototype.startPolling = function() {
                    this.stopPolling(), this.poll()
                }, A.prototype.stopPolling = function() {
                    clearTimeout(this.pollTimeout)
                }, A.prototype.poll = function() {
                    var _ = this;
                    this.pollTimeout = setTimeout(function() {
                        _.reconnectIfStale(), _.poll()
                    }, this.getPollInterval())
                }, A.prototype.getPollInterval = function() {
                    var _ = this.constructor.pollInterval,
                        l = _.min,
                        S = _.max,
                        $ = _.multiplier,
                        U = $ * Math.log(this.reconnectAttempts + 1);
                    return Math.round(I(U, l, S) * 1e3)
                }, A.prototype.reconnectIfStale = function() {
                    this.connectionIsStale() && (a.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + u(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"), this.reconnectAttempts++, this.disconnectedRecently() ? a.log("ConnectionMonitor skipping reopening recent disconnect") : (a.log("ConnectionMonitor reopening"), this.connection.reopen()))
                }, A.prototype.connectionIsStale = function() {
                    return u(this.pingedAt ? this.pingedAt : this.startedAt) > this.constructor.staleThreshold
                }, A.prototype.disconnectedRecently = function() {
                    return this.disconnectedAt && u(this.disconnectedAt) < this.constructor.staleThreshold
                }, A.prototype.visibilityDidChange = function() {
                    var _ = this;
                    document.visibilityState === "visible" && setTimeout(function() {
                        (_.connectionIsStale() || !_.connection.isOpen()) && (a.log("ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = " + document.visibilityState), _.connection.reopen())
                    }, 200)
                }, A
            }();
        d.pollInterval = {
            min: 3,
            max: 30,
            multiplier: 5
        }, d.staleThreshold = 6;
        var y = {
                message_types: {
                    welcome: "welcome",
                    disconnect: "disconnect",
                    ping: "ping",
                    confirmation: "confirm_subscription",
                    rejection: "reject_subscription"
                },
                disconnect_reasons: {
                    unauthorized: "unauthorized",
                    invalid_request: "invalid_request",
                    server_restart: "server_restart"
                },
                default_mount_path: "/cable",
                protocols: ["actioncable-v1-json", "actioncable-unsupported"]
            },
            D = y.message_types,
            M = y.protocols,
            T = M.slice(0, M.length - 1),
            L = [].indexOf,
            f = function() {
                function A(R) {
                    s(this, A), this.open = this.open.bind(this), this.consumer = R, this.subscriptions = this.consumer.subscriptions, this.monitor = new d(this), this.disconnected = !0
                }
                return A.prototype.send = function(_) {
                    return this.isOpen() ? (this.webSocket.send(JSON.stringify(_)), !0) : !1
                }, A.prototype.open = function() {
                    return this.isActive() ? (a.log("Attempted to open WebSocket, but existing socket is " + this.getState()), !1) : (a.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + M), this.webSocket && this.uninstallEventHandlers(), this.webSocket = new r.WebSocket(this.consumer.url, M), this.installEventHandlers(), this.monitor.start(), !0)
                }, A.prototype.close = function() {
                    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                            allowReconnect: !0
                        },
                        l = _.allowReconnect;
                    if (l || this.monitor.stop(), this.isActive()) return this.webSocket.close()
                }, A.prototype.reopen = function() {
                    if (a.log("Reopening WebSocket, current state is " + this.getState()), this.isActive()) try {
                        return this.close()
                    } catch (_) {
                        a.log("Failed to reopen WebSocket", _)
                    } finally {
                        a.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"), setTimeout(this.open, this.constructor.reopenDelay)
                    } else return this.open()
                }, A.prototype.getProtocol = function() {
                    if (this.webSocket) return this.webSocket.protocol
                }, A.prototype.isOpen = function() {
                    return this.isState("open")
                }, A.prototype.isActive = function() {
                    return this.isState("open", "connecting")
                }, A.prototype.isProtocolSupported = function() {
                    return L.call(T, this.getProtocol()) >= 0
                }, A.prototype.isState = function() {
                    for (var _ = arguments.length, l = Array(_), S = 0; S < _; S++) l[S] = arguments[S];
                    return L.call(l, this.getState()) >= 0
                }, A.prototype.getState = function() {
                    if (this.webSocket) {
                        for (var _ in r.WebSocket)
                            if (r.WebSocket[_] === this.webSocket.readyState) return _.toLowerCase()
                    }
                    return null
                }, A.prototype.installEventHandlers = function() {
                    for (var _ in this.events) {
                        var l = this.events[_].bind(this);
                        this.webSocket["on" + _] = l
                    }
                }, A.prototype.uninstallEventHandlers = function() {
                    for (var _ in this.events) this.webSocket["on" + _] = function() {}
                }, A
            }();
        f.reopenDelay = 500, f.prototype.events = {
            message: function(R) {
                if (this.isProtocolSupported()) {
                    var _ = JSON.parse(R.data),
                        l = _.identifier,
                        S = _.message,
                        $ = _.reason,
                        U = _.reconnect,
                        k = _.type;
                    switch (k) {
                        case D.welcome:
                            return this.monitor.recordConnect(), this.subscriptions.reload();
                        case D.disconnect:
                            return a.log("Disconnecting. Reason: " + $), this.close({
                                allowReconnect: U
                            });
                        case D.ping:
                            return this.monitor.recordPing();
                        case D.confirmation:
                            return this.subscriptions.notify(l, "connected");
                        case D.rejection:
                            return this.subscriptions.reject(l);
                        default:
                            return this.subscriptions.notify(l, "received", S)
                    }
                }
            },
            open: function() {
                if (a.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"), this.disconnected = !1, !this.isProtocolSupported()) return a.log("Protocol is unsupported. Stopping monitor and disconnecting."), this.close({
                    allowReconnect: !1
                })
            },
            close: function(R) {
                if (a.log("WebSocket onclose event"), !this.disconnected) return this.disconnected = !0, this.monitor.recordDisconnect(), this.subscriptions.notifyAll("disconnected", {
                    willAttemptReconnect: this.monitor.isRunning()
                })
            },
            error: function() {
                a.log("WebSocket onerror event")
            }
        };
        var m = function(R, _) {
                if (_ != null)
                    for (var l in _) {
                        var S = _[l];
                        R[l] = S
                    }
                return R
            },
            h = function() {
                function A(R) {
                    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        l = arguments[2];
                    s(this, A), this.consumer = R, this.identifier = JSON.stringify(_), m(this, l)
                }
                return A.prototype.perform = function(_) {
                    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    return l.action = _, this.send(l)
                }, A.prototype.send = function(_) {
                    return this.consumer.send({
                        command: "message",
                        identifier: this.identifier,
                        data: JSON.stringify(_)
                    })
                }, A.prototype.unsubscribe = function() {
                    return this.consumer.subscriptions.remove(this)
                }, A
            }(),
            C = function() {
                function A(R) {
                    s(this, A), this.consumer = R, this.subscriptions = []
                }
                return A.prototype.create = function(_, l) {
                    var S = _,
                        $ = (typeof S > "u" ? "undefined" : i(S)) === "object" ? S : {
                            channel: S
                        },
                        U = new h(this.consumer, $, l);
                    return this.add(U)
                }, A.prototype.add = function(_) {
                    return this.subscriptions.push(_), this.consumer.ensureActiveConnection(), this.notify(_, "initialized"), this.sendCommand(_, "subscribe"), _
                }, A.prototype.remove = function(_) {
                    return this.forget(_), this.findAll(_.identifier).length || this.sendCommand(_, "unsubscribe"), _
                }, A.prototype.reject = function(_) {
                    var l = this;
                    return this.findAll(_).map(function(S) {
                        return l.forget(S), l.notify(S, "rejected"), S
                    })
                }, A.prototype.forget = function(_) {
                    return this.subscriptions = this.subscriptions.filter(function(l) {
                        return l !== _
                    }), _
                }, A.prototype.findAll = function(_) {
                    return this.subscriptions.filter(function(l) {
                        return l.identifier === _
                    })
                }, A.prototype.reload = function() {
                    var _ = this;
                    return this.subscriptions.map(function(l) {
                        return _.sendCommand(l, "subscribe")
                    })
                }, A.prototype.notifyAll = function(_) {
                    for (var l = this, S = arguments.length, $ = Array(S > 1 ? S - 1 : 0), U = 1; U < S; U++) $[U - 1] = arguments[U];
                    return this.subscriptions.map(function(k) {
                        return l.notify.apply(l, [k, _].concat($))
                    })
                }, A.prototype.notify = function(_, l) {
                    for (var S = arguments.length, $ = Array(S > 2 ? S - 2 : 0), U = 2; U < S; U++) $[U - 2] = arguments[U];
                    var k = void 0;
                    return typeof _ == "string" ? k = this.findAll(_) : k = [_], k.map(function(Y) {
                        return typeof Y[l] == "function" ? Y[l].apply(Y, $) : void 0
                    })
                }, A.prototype.sendCommand = function(_, l) {
                    var S = _.identifier;
                    return this.consumer.send({
                        command: l,
                        identifier: S
                    })
                }, A
            }(),
            g = function() {
                function A(R) {
                    s(this, A), this._url = R, this.subscriptions = new C(this), this.connection = new f(this)
                }
                return A.prototype.send = function(_) {
                    return this.connection.send(_)
                }, A.prototype.connect = function() {
                    return this.connection.open()
                }, A.prototype.disconnect = function() {
                    return this.connection.close({
                        allowReconnect: !1
                    })
                }, A.prototype.ensureActiveConnection = function() {
                    if (!this.connection.isActive()) return this.connection.open()
                }, o(A, [{
                    key: "url",
                    get: function() {
                        return c(this._url)
                    }
                }]), A
            }();

        function c(A) {
            if (typeof A == "function" && (A = A()), A && !/^wss?:/i.test(A)) {
                var R = document.createElement("a");
                return R.href = A, R.href = R.href, R.protocol = R.protocol.replace("http", "ws"), R.href
            } else return A
        }

        function O() {
            var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P("url") || y.default_mount_path;
            return new g(A)
        }

        function P(A) {
            var R = document.head.querySelector("meta[name='action-cable-" + A + "']");
            if (R) return R.getAttribute("content")
        }
        n.Connection = f, n.ConnectionMonitor = d, n.Consumer = g, n.INTERNAL = y, n.Subscription = h, n.Subscriptions = C, n.adapters = r, n.createWebSocketURL = c, n.logger = a, n.createConsumer = O, n.getConfig = P, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(Dn, Dn.exports);
var Wc = Dn.exports;
const Gc = 2e4,
    jc = 1e3,
    Ze = class Ze {
        constructor(t, n, r = "") {
            ie(this, "clearReconnectTimer", () => {
                this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = null)
            });
            ie(this, "initReconnectTimer", () => {
                this.clearReconnectTimer(), this.reconnectTimer = setTimeout(() => {
                    this.checkConnection()
                }, jc)
            });
            ie(this, "onReconnect", () => {});
            ie(this, "onDisconnected", () => {});
            ie(this, "onReceived", ({
                event: t,
                data: n
            } = {}) => {
                this.isAValidEvent(n) && this.events[t] && typeof this.events[t] == "function" && this.events[t](n)
            });
            const a = r ? `${r}/cable` : void 0;
            this.consumer = Wc.createConsumer(a), this.subscription = this.consumer.subscriptions.create({
                channel: "RoomChannel",
                pubsub_token: n,
                account_id: t.$store.getters.getCurrentAccountId,
                user_id: t.$store.getters.getCurrentUserID
            }, {
                updatePresence() {
                    this.perform("update_presence")
                },
                received: this.onReceived,
                disconnected: () => {
                    Ze.isDisconnected = !0, this.onDisconnected(), this.initReconnectTimer()
                }
            }), this.app = t, this.events = {}, this.reconnectTimer = null, this.isAValidEvent = () => !0, this.triggerPresenceInterval = () => {
                setTimeout(() => {
                    this.subscription.updatePresence(), this.triggerPresenceInterval()
                }, Gc)
            }, this.triggerPresenceInterval()
        }
        checkConnection() {
            const t = this.consumer.connection.isOpen();
            Ze.isDisconnected && t ? (this.clearReconnectTimer(), this.onReconnect(), Ze.isDisconnected = !1) : this.initReconnectTimer()
        }
        disconnect() {
            this.consumer.disconnect()
        }
    };
ie(Ze, "isDisconnected", !1);
let hr = Ze;
const zc = {
        FILE_BUBBLE: {
            DOWNLOAD: "تحميل",
            UPLOADING: "جاري الرفع..."
        },
        FORM_BUBBLE: {
            SUBMIT: "إرسال"
        },
        MESSAGE_BUBBLE: {
            RETRY: "إرسال الرسالة مرة أخرى",
            ERROR_MESSAGE: "تعذر الإرسال! حاول مرة أخرى"
        }
    },
    xc = {
        ONLINE: "متواجدون لخدمتك",
        OFFLINE: "نحن بعيدون في الوقت الحالي"
    },
    Qc = {
        IN_A_FEW_MINUTES: "عادة نقوم بالرد خلال بضع دقائق",
        IN_A_FEW_HOURS: "عادة نقوم بالرد خلال بضع ساعات",
        IN_A_DAY: "عادة نقوم بالرد خلال يوم واحد",
        BACK_IN: "سوف نعود إلى الإنترنت"
    },
    Kc = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    qc = "ابدأ المحادثة",
    Zc = "إنهاء المحادثة",
    Jc = "متابعة المحادثة",
    Xc = "أنت",
    eu = "ابدأ محادثة جديدة",
    tu = "لديك رسائل غير مقروءة",
    nu = {
        VIEW_MESSAGES_BUTTON: "عرض الرسائل الجديدة",
        CLOSE_MESSAGES_BUTTON: "أغلق",
        COMPANY_FROM: "من",
        BOT: "رد آلي"
    },
    ru = {
        LABEL: "تحدث الينا"
    },
    au = "مدعوم بواسطة Chatwoot",
    iu = "الرجاء إدخال بريدك الإلكتروني",
    su = "أكتب رسالتك",
    ou = "اليوم",
    Eu = "الأمس",
    lu = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "الاسم الكامل",
                PLACEHOLDER: "الرجاء إدخال اسمك الكامل",
                REQUIRED_ERROR: "الاسم الكامل مطلوب"
            },
            EMAIL_ADDRESS: {
                LABEL: "عنوان البريد الإلكتروني",
                PLACEHOLDER: "الرجاء إدخال عنوان بريد إلكتروني صحيح",
                REQUIRED_ERROR: "عنوان البريد الإلكتروني مطلوب",
                VALID_ERROR: "الرجاء إدخال عنوان بريد إلكتروني صحيح"
            },
            PHONE_NUMBER: {
                LABEL: "رقم الهاتف",
                PLACEHOLDER: "الرجاء إدخال رقم الهاتف الخاص بك",
                REQUIRED_ERROR: "رقم الهاتف مطلوب",
                DIAL_CODE_VALID_ERROR: "الرجاء اختيار رمز الدولة",
                VALID_ERROR: "يرجى إدخال رقم هاتف صحيح",
                DROPDOWN_EMPTY: "لم يتم العثور على النتائج",
                DROPDOWN_SEARCH: "البحث عن بلد"
            },
            MESSAGE: {
                LABEL: "رسالة",
                PLACEHOLDER: "يرجى إدخال رسالتك",
                ERROR: "رسالة قصيرة جداً"
            }
        },
        CAMPAIGN_HEADER: "الرجاء تقديم اسمك و بريدك الإلكتروني قبل بدء المحادثة",
        IS_REQUIRED: "مطلوب",
        REQUIRED: "مطلوب",
        REGEX_ERROR: "الرجاء تقديم مدخل صحيح"
    },
    cu = "حجم الملف يتجاوز حد الاقصى وهو {MAXIMUM_FILE_UPLOAD_SIZE}",
    uu = {
        INVALID: {
            FIELD: "حقل غير صالح"
        }
    },
    Au = {
        PLACEHOLDER: "ابحث في الايموجي",
        NOT_FOUND: "لا يوجد إيموجي يطابق بحثك",
        ARIA_LABEL: "أداة اختيار الايموجي"
    },
    Ru = {
        TITLE: "قيم محادثتك",
        SUBMITTED_TITLE: "شكرا لك على تقييم المحادثة",
        PLACEHOLDER: "أخبرنا المزيد..."
    },
    _u = {
        BUTTON_TEXT: "طلب نسخة محادثة النص",
        SEND_EMAIL_SUCCESS: "تم إرسال نص المحادثة بنجاح",
        SEND_EMAIL_ERROR: "حدث خطأ، الرجاء المحاولة مرة أخرى"
    },
    Tu = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "انقر هنا للانضمام",
            LEAVE_THE_ROOM: "ترك المكالمة"
        }
    },
    Ou = {
        POPULAR_ARTICLES: "المقالات الشائعة",
        VIEW_ALL_ARTICLES: "عرض جميع المقالات",
        IFRAME_LOAD_ERROR: "حدث خطأ أثناء جلب المقال، الرجاء تحديث الصفحة والمحاولة مرة أخرى."
    },
    Lu = {
        image: {
            CONTENT: "رسالة صورة"
        },
        audio: {
            CONTENT: "رسالة صوتية"
        },
        video: {
            CONTENT: "رسالة فيديو"
        },
        file: {
            CONTENT: "مرفقات"
        },
        location: {
            CONTENT: "الموقع الجغرافي"
        },
        fallback: {
            CONTENT: "قام بمشاركة رابط"
        }
    },
    Iu = {
        REPLY_TO: "الرد على:"
    },
    Nu = {
        COMPONENTS: zc,
        TEAM_AVAILABILITY: xc,
        REPLY_TIME: Qc,
        DAY_NAMES: Kc,
        START_CONVERSATION: qc,
        END_CONVERSATION: Zc,
        CONTINUE_CONVERSATION: Jc,
        YOU: Xc,
        START_NEW_CONVERSATION: eu,
        VIEW_UNREAD_MESSAGES: tu,
        UNREAD_VIEW: nu,
        BUBBLE: ru,
        POWERED_BY: au,
        EMAIL_PLACEHOLDER: iu,
        CHAT_PLACEHOLDER: su,
        TODAY: ou,
        YESTERDAY: Eu,
        PRE_CHAT_FORM: lu,
        FILE_SIZE_LIMIT: cu,
        CHAT_FORM: uu,
        EMOJI: Au,
        CSAT: Ru,
        EMAIL_TRANSCRIPT: _u,
        INTEGRATIONS: Tu,
        PORTAL: Ou,
        ATTACHMENTS: Lu,
        FOOTER_REPLY_TO: Iu
    },
    fu = {
        FILE_BUBBLE: {
            DOWNLOAD: "Descarrega",
            UPLOADING: "S'està carregant..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Envia"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Torna a enviar el missatge",
            ERROR_MESSAGE: "No s'ha pogut enviar, torna-ho a provar"
        }
    },
    Su = {
        ONLINE: "Estem en línia",
        OFFLINE: "Estem fora en aquest moment"
    },
    pu = {
        IN_A_FEW_MINUTES: "Normalment responem en pocs minuts",
        IN_A_FEW_HOURS: "Normalment responem en poques hores",
        IN_A_DAY: "Normalment respon en un dia",
        BACK_IN: "Tornarem a estar en línia"
    },
    du = {
        SUNDAY: "Diumenge",
        MONDAY: "Dilluns",
        TUESDAY: "Dimarts",
        WEDNESDAY: "Dimecres",
        THURSDAY: "Dijous",
        FRIDAY: "Divendres",
        SATURDAY: "Dissabte"
    },
    mu = "Inicia la conversa",
    Du = "Finalitzar la conversa",
    Cu = "Continua la conversa",
    Mu = "Tu",
    hu = "Inicia una nova conversa",
    vu = "Tens missatges no llegits",
    gu = {
        VIEW_MESSAGES_BUTTON: "Veure missatges nous",
        CLOSE_MESSAGES_BUTTON: "Tanca",
        COMPANY_FROM: "des de",
        BOT: "Bot"
    },
    Pu = {
        LABEL: "Xateja amb nosaltres"
    },
    $u = "Desenvolupat per Chatwoot",
    yu = "Introduïu el correu electrònic",
    Uu = "Escriu el missatge",
    Bu = "Avui",
    bu = "Ahir",
    Yu = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nom complet",
                PLACEHOLDER: "Introdueix el vostre nom complet",
                REQUIRED_ERROR: "El Nom Complert és obligatori"
            },
            EMAIL_ADDRESS: {
                LABEL: "Adreça de correu electrònic",
                PLACEHOLDER: "Si us plau, introdueix la teva adreça email",
                REQUIRED_ERROR: "L'adreça de correu electrònic és necessària",
                VALID_ERROR: "Introduïu una adreça de correu electrònic vàlida"
            },
            PHONE_NUMBER: {
                LABEL: "Número de telèfon",
                PLACEHOLDER: "Introdueix el vostre número de telèfon",
                REQUIRED_ERROR: "El número de telèfon és obligatori",
                DIAL_CODE_VALID_ERROR: "Selecciona un codi de país",
                VALID_ERROR: "Introdueix un número de telèfon vàlid",
                DROPDOWN_EMPTY: "No s'ha trobat agents",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Missatge",
                PLACEHOLDER: "Si us plau, introdueix el teu missatge",
                ERROR: "Missatge massa curt"
            }
        },
        CAMPAIGN_HEADER: "Proporciona el vostre nom i correu electrònic abans d'iniciar la conversa",
        IS_REQUIRED: "és necessari",
        REQUIRED: "Necessari",
        REGEX_ERROR: "Proporciona una entrada vàlida"
    },
    ku = "El fitxer supera el límit de {MAXIMUM_FILE_UPLOAD_SIZE} fitxers adjunts",
    Hu = {
        INVALID: {
            FIELD: "Camp no vàlid"
        }
    },
    Vu = {
        PLACEHOLDER: "Cerca emojis",
        NOT_FOUND: "Cap emoji coincideix amb la teva cerca",
        ARIA_LABEL: "Emoji picker"
    },
    Fu = {
        TITLE: "Valora la teva conversa",
        SUBMITTED_TITLE: "Gràcies per enviar la qualificació",
        PLACEHOLDER: "Explica'ns més..."
    },
    wu = {
        BUTTON_TEXT: "Envia la transcripció de la conversa",
        SEND_EMAIL_SUCCESS: "La transcripció del xat s'ha enviat correctament",
        SEND_EMAIL_ERROR: "S'ha produït un error; tornau-ho a provar"
    },
    Wu = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Fes clic aquí per unir-te",
            LEAVE_THE_ROOM: "Deixa la trucada"
        }
    },
    Gu = {
        POPULAR_ARTICLES: "Articles populars",
        VIEW_ALL_ARTICLES: "Veure tots els articles",
        IFRAME_LOAD_ERROR: "S'ha produït un error en carregar l'article, actualitza la pàgina i torna-ho a provar."
    },
    ju = {
        image: {
            CONTENT: "Missatge d'imatge"
        },
        audio: {
            CONTENT: "Missatge d'àudio"
        },
        video: {
            CONTENT: "Missatge de vídeo"
        },
        file: {
            CONTENT: "Fitxer adjunt"
        },
        location: {
            CONTENT: "Ubicació"
        },
        fallback: {
            CONTENT: "ha compartit una URL"
        }
    },
    zu = {
        REPLY_TO: "Responent a:"
    },
    xu = {
        COMPONENTS: fu,
        TEAM_AVAILABILITY: Su,
        REPLY_TIME: pu,
        DAY_NAMES: du,
        START_CONVERSATION: mu,
        END_CONVERSATION: Du,
        CONTINUE_CONVERSATION: Cu,
        YOU: Mu,
        START_NEW_CONVERSATION: hu,
        VIEW_UNREAD_MESSAGES: vu,
        UNREAD_VIEW: gu,
        BUBBLE: Pu,
        POWERED_BY: $u,
        EMAIL_PLACEHOLDER: yu,
        CHAT_PLACEHOLDER: Uu,
        TODAY: Bu,
        YESTERDAY: bu,
        PRE_CHAT_FORM: Yu,
        FILE_SIZE_LIMIT: ku,
        CHAT_FORM: Hu,
        EMOJI: Vu,
        CSAT: Fu,
        EMAIL_TRANSCRIPT: wu,
        INTEGRATIONS: Wu,
        PORTAL: Gu,
        ATTACHMENTS: ju,
        FOOTER_REPLY_TO: zu
    },
    Qu = {
        FILE_BUBBLE: {
            DOWNLOAD: "Stáhnout",
            UPLOADING: "Nahrávání..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Odeslat"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Odeslat zprávu znovu",
            ERROR_MESSAGE: "Odeslání se nezdařilo, zkuste to znovu"
        }
    },
    Ku = {
        ONLINE: "Jsme online",
        OFFLINE: "V současné době jsme pryč"
    },
    qu = {
        IN_A_FEW_MINUTES: "Většinou odpovíme během pár minut",
        IN_A_FEW_HOURS: "Většinou odpovíme během pár hodin",
        IN_A_DAY: "Obvykle odpoví za den",
        BACK_IN: "Budem online zase"
    },
    Zu = {
        SUNDAY: "Neděle",
        MONDAY: "Pondělí",
        TUESDAY: "Úterý",
        WEDNESDAY: "Středa",
        THURSDAY: "Čtvrtek",
        FRIDAY: "Pátek",
        SATURDAY: "Sobota"
    },
    Ju = "Zahájit konverzaci",
    Xu = "Ukončit konverzaci",
    eA = "Pokračovat v konverzaci",
    tA = "Vy",
    nA = "Zahájit novou konverzaci",
    rA = "Máte nepřečtené zprávy",
    aA = {
        VIEW_MESSAGES_BUTTON: "Zobrazit nové zprávy",
        CLOSE_MESSAGES_BUTTON: "Zavřít",
        COMPANY_FROM: "od",
        BOT: "Bot"
    },
    iA = {
        LABEL: "Napiště nám"
    },
    sA = "Powered by Chatwoot",
    oA = "Prosím, zadejte svůj e-mail",
    EA = "Zde začněte psát",
    lA = "Dnes",
    cA = "Včera",
    uA = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Celé jméno",
                PLACEHOLDER: "Zadejte své celé jméno",
                REQUIRED_ERROR: "Je vyžadováno celé jméno"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-mailová adresa",
                PLACEHOLDER: "Zadejte prosím Váš e-mail",
                REQUIRED_ERROR: "E-mailová adresa je vyžadována",
                VALID_ERROR: "Zadejte prosím platnou e-mailovou adresu"
            },
            PHONE_NUMBER: {
                LABEL: "Telefonní číslo",
                PLACEHOLDER: "Zadejte prosím Vaše telefonní číslo",
                REQUIRED_ERROR: "Telefonní číslo je vyžadováno",
                DIAL_CODE_VALID_ERROR: "Vyberte prosím kód země",
                VALID_ERROR: "Zadejte prosím platné telefonní číslo",
                DROPDOWN_EMPTY: "Žádné výsledky",
                DROPDOWN_SEARCH: "Vyhledat zemi"
            },
            MESSAGE: {
                LABEL: "Zpráva",
                PLACEHOLDER: "Zadejte prosím Vaši zprávu",
                ERROR: "Zpráva je příliš krátká"
            }
        },
        CAMPAIGN_HEADER: "Zadejte své jméno a e-mail před zahájením konverzace",
        IS_REQUIRED: "je vyžadováno",
        REQUIRED: "Povinné",
        REGEX_ERROR: "Zadejte prosím platnou hodnotu"
    },
    AA = "Soubor překračuje limit {MAXIMUM_FILE_UPLOAD_SIZE} přílohy",
    RA = {
        INVALID: {
            FIELD: "Neplatné pole"
        }
    },
    _A = {
        PLACEHOLDER: "Hledat emoji",
        NOT_FOUND: "Žádné emoji neodpovídají vašemu hledání",
        ARIA_LABEL: "Výběr emoji"
    },
    TA = {
        TITLE: "Ohodnoťte svou konverzaci",
        SUBMITTED_TITLE: "Děkujeme Vám za odeslání hodnocení",
        PLACEHOLDER: "Řekněte nám více..."
    },
    OA = {
        BUTTON_TEXT: "Požádat o přepis konverzace",
        SEND_EMAIL_SUCCESS: "Přepis chatu byl úspěšně odeslán",
        SEND_EMAIL_ERROR: "Došlo k chybě, zkuste to prosím znovu"
    },
    LA = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Přidejte se kliknutím sem",
            LEAVE_THE_ROOM: "Opustit hovor"
        }
    },
    IA = {
        POPULAR_ARTICLES: "Populární články",
        VIEW_ALL_ARTICLES: "Zobrazit všechny články",
        IFRAME_LOAD_ERROR: "Při načítání článku došlo k chybě, obnovte stránku a zkuste to znovu."
    },
    NA = {
        image: {
            CONTENT: "Zpráva obrázku"
        },
        audio: {
            CONTENT: "Zvuková zpráva"
        },
        video: {
            CONTENT: "Video zpráva"
        },
        file: {
            CONTENT: "Přílohu souboru"
        },
        location: {
            CONTENT: "Poloha"
        },
        fallback: {
            CONTENT: "sdílel URL"
        }
    },
    fA = {
        REPLY_TO: "Odpověď na:"
    },
    SA = {
        COMPONENTS: Qu,
        TEAM_AVAILABILITY: Ku,
        REPLY_TIME: qu,
        DAY_NAMES: Zu,
        START_CONVERSATION: Ju,
        END_CONVERSATION: Xu,
        CONTINUE_CONVERSATION: eA,
        YOU: tA,
        START_NEW_CONVERSATION: nA,
        VIEW_UNREAD_MESSAGES: rA,
        UNREAD_VIEW: aA,
        BUBBLE: iA,
        POWERED_BY: sA,
        EMAIL_PLACEHOLDER: oA,
        CHAT_PLACEHOLDER: EA,
        TODAY: lA,
        YESTERDAY: cA,
        PRE_CHAT_FORM: uA,
        FILE_SIZE_LIMIT: AA,
        CHAT_FORM: RA,
        EMOJI: _A,
        CSAT: TA,
        EMAIL_TRANSCRIPT: OA,
        INTEGRATIONS: LA,
        PORTAL: IA,
        ATTACHMENTS: NA,
        FOOTER_REPLY_TO: fA
    },
    pA = {
        FILE_BUBBLE: {
            DOWNLOAD: "Download",
            UPLOADING: "Uploader..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Send"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Send besked igen",
            ERROR_MESSAGE: "Kunne ikke sende, prøv igen"
        }
    },
    dA = {
        ONLINE: "Vi er online",
        OFFLINE: "Vi er ikke tilgængelige i øjeblikket"
    },
    mA = {
        IN_A_FEW_MINUTES: "Svarer typisk på et par minutter",
        IN_A_FEW_HOURS: "Svarer typisk på et par timer",
        IN_A_DAY: "Svarer typisk på en dag",
        BACK_IN: "Vi er tilbage online"
    },
    DA = {
        SUNDAY: "søndag",
        MONDAY: "mandag",
        TUESDAY: "tirsdag",
        WEDNESDAY: "onsdag",
        THURSDAY: "torsdag",
        FRIDAY: "fredag",
        SATURDAY: "lørdag"
    },
    CA = "Start Samtale",
    MA = "Afslut Samtale",
    hA = "Fortsæt samtale",
    vA = "Dig",
    gA = "Start en ny samtale",
    PA = "Du har ulæste beskeder",
    $A = {
        VIEW_MESSAGES_BUTTON: "Se nye beskeder",
        CLOSE_MESSAGES_BUTTON: "Luk",
        COMPANY_FROM: "fra",
        BOT: "Bot"
    },
    yA = {
        LABEL: "Chat med os"
    },
    UA = "Drevet af Chatwoot",
    BA = "Indtast venligst din e-mail",
    bA = "Skriv din besked",
    YA = "I dag",
    kA = "I går",
    HA = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Fulde Navn",
                PLACEHOLDER: "Indtast venligst dit fulde navn",
                REQUIRED_ERROR: "Det fulde navn er påkrævet"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-Mail Adresse",
                PLACEHOLDER: "Indtast venligst din e-mail adresse",
                REQUIRED_ERROR: "E-mail adresse er påkrævet",
                VALID_ERROR: "Angiv venligst en gyldig e-mailadresse"
            },
            PHONE_NUMBER: {
                LABEL: "Telefonnummer",
                PLACEHOLDER: "Indtast venligst dit telefonnummer",
                REQUIRED_ERROR: "Telefonnummer er påkrævet",
                DIAL_CODE_VALID_ERROR: "Vælg venligst en landekode",
                VALID_ERROR: "Indtast et gyldigt telefonnummer",
                DROPDOWN_EMPTY: "Ingen resultater fundet",
                DROPDOWN_SEARCH: "Søg land"
            },
            MESSAGE: {
                LABEL: "Besked",
                PLACEHOLDER: "Indtast venligst din besked",
                ERROR: "Beskeden er for kort"
            }
        },
        CAMPAIGN_HEADER: "Angiv venligst dit navn og e-mail, før du starter samtalen",
        IS_REQUIRED: "er påkrævet",
        REQUIRED: "Påkrævet",
        REGEX_ERROR: "Angiv venligst et gyldigt input"
    },
    VA = "Filen overskrider grænsen på {MAXIMUM_FILE_UPLOAD_SIZE} for vedhæftede filer",
    FA = {
        INVALID: {
            FIELD: "Ugyldigt felt"
        }
    },
    wA = {
        PLACEHOLDER: "Søg efter emojis",
        NOT_FOUND: "Ingen emoji matcher din søgning",
        ARIA_LABEL: "Emoji vælger"
    },
    WA = {
        TITLE: "Bedøm din samtale",
        SUBMITTED_TITLE: "Tak for din bedømmelse",
        PLACEHOLDER: "Fortæl os mere..."
    },
    GA = {
        BUTTON_TEXT: "Anmod om en samtaleudskrift",
        SEND_EMAIL_SUCCESS: "Chatudskriften blev sendt med succes",
        SEND_EMAIL_ERROR: "Der opstod en fejl. Prøv venligst igen"
    },
    jA = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Tryk her for at deltage",
            LEAVE_THE_ROOM: "Forlad opkaldet"
        }
    },
    zA = {
        POPULAR_ARTICLES: "Populære Artikler",
        VIEW_ALL_ARTICLES: "Se alle artikler",
        IFRAME_LOAD_ERROR: "Der opstod en fejl under indlæsning af artiklen. Genindlæs venligst siden og prøv igen."
    },
    xA = {
        image: {
            CONTENT: "Billedbesked"
        },
        audio: {
            CONTENT: "Lydbesked"
        },
        video: {
            CONTENT: "Video besked"
        },
        file: {
            CONTENT: "Fil Vedhæftning"
        },
        location: {
            CONTENT: "Lokation"
        },
        fallback: {
            CONTENT: "har delt en URL"
        }
    },
    QA = {
        REPLY_TO: "Besvarer til:"
    },
    KA = {
        COMPONENTS: pA,
        TEAM_AVAILABILITY: dA,
        REPLY_TIME: mA,
        DAY_NAMES: DA,
        START_CONVERSATION: CA,
        END_CONVERSATION: MA,
        CONTINUE_CONVERSATION: hA,
        YOU: vA,
        START_NEW_CONVERSATION: gA,
        VIEW_UNREAD_MESSAGES: PA,
        UNREAD_VIEW: $A,
        BUBBLE: yA,
        POWERED_BY: UA,
        EMAIL_PLACEHOLDER: BA,
        CHAT_PLACEHOLDER: bA,
        TODAY: YA,
        YESTERDAY: kA,
        PRE_CHAT_FORM: HA,
        FILE_SIZE_LIMIT: VA,
        CHAT_FORM: FA,
        EMOJI: wA,
        CSAT: WA,
        EMAIL_TRANSCRIPT: GA,
        INTEGRATIONS: jA,
        PORTAL: zA,
        ATTACHMENTS: xA,
        FOOTER_REPLY_TO: QA
    },
    qA = {
        FILE_BUBBLE: {
            DOWNLOAD: "Herunterladen",
            UPLOADING: "Hochladen..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Abschicken"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Nachricht erneut senden",
            ERROR_MESSAGE: "Senden nicht möglich, versuchen Sie es noch einmal"
        }
    },
    ZA = {
        ONLINE: "Wir sind online",
        OFFLINE: "Wir sind momentan abwesend"
    },
    JA = {
        IN_A_FEW_MINUTES: "Wir antworten üblicherweise innerhalb weniger Minuten",
        IN_A_FEW_HOURS: "Wir antworten üblicherweise innerhalb weniger Stunden",
        IN_A_DAY: "Wir antworten üblicherweise innerhalb eines Tages",
        BACK_IN: "Wir werden wieder online sein"
    },
    XA = {
        SUNDAY: "Sonntag",
        MONDAY: "Montag",
        TUESDAY: "Dienstag",
        WEDNESDAY: "Mittwoch",
        THURSDAY: "Donnerstag",
        FRIDAY: "Freitag",
        SATURDAY: "Samstag"
    },
    eR = "Unterhaltung beginnen",
    tR = "Konversation beenden",
    nR = "Konversation fortsetzen",
    rR = "Sie",
    aR = "Neue Unterhaltung starten",
    iR = "Sie haben ungelesene Nachrichten",
    sR = {
        VIEW_MESSAGES_BUTTON: "Neue Nachrichten anzeigen",
        CLOSE_MESSAGES_BUTTON: "Schließen",
        COMPANY_FROM: "von",
        BOT: "Bot"
    },
    oR = {
        LABEL: "Chatten Sie mit uns"
    },
    ER = "Unterstützt von Chatwoot",
    lR = "Bitte geben Sie Ihre E-Mail-Adresse ein",
    cR = "Schreiben Sie Ihre Nachricht",
    uR = "Heute",
    AR = "Gestern",
    RR = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Vollständiger Name",
                PLACEHOLDER: "Bitte geben Sie Ihren vollständigen Namen ein",
                REQUIRED_ERROR: "Vollständiger Name ist erforderlich"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-Mail-Adresse",
                PLACEHOLDER: "Bitte geben Sie ihre E-Mail-Adresse ein",
                REQUIRED_ERROR: "E-Mail-Adresse wird benötigt",
                VALID_ERROR: "Bitte geben Sie eine gültige E-Mail-Adresse ein"
            },
            PHONE_NUMBER: {
                LABEL: "Telefonnummer",
                PLACEHOLDER: "Bitte geben Sie ihre Telefonnummer ein",
                REQUIRED_ERROR: "Telefonnummer ist erforderlich",
                DIAL_CODE_VALID_ERROR: "Bitte wählen Sie eine Landesvorwahl",
                VALID_ERROR: "Bitte geben Sie eine gültige Telefonnummer ein",
                DROPDOWN_EMPTY: "Keine Ergebnisse gefunden",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Nachricht",
                PLACEHOLDER: "Bitte geben Sie Ihre Nachricht ein",
                ERROR: "Nachricht ist zu kurz"
            }
        },
        CAMPAIGN_HEADER: "Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse an, bevor Sie die Konversation beginnen",
        IS_REQUIRED: "erforderlich",
        REQUIRED: "Benötigt",
        REGEX_ERROR: "Bitte geben Sie eine gültige Eingabe ein"
    },
    _R = "Die Datei überschreitet das Anhangslimit von {MAXIMUM_FILE_UPLOAD_SIZE}",
    TR = {
        INVALID: {
            FIELD: "Ungültiges Feld"
        }
    },
    OR = {
        PLACEHOLDER: "Emojis durchsuchen",
        NOT_FOUND: "Kein Emoji entspricht Ihrer Suche",
        ARIA_LABEL: "Emoji picker"
    },
    LR = {
        TITLE: "Bewerten Sie Ihre Konversation",
        SUBMITTED_TITLE: "Danke, dass Sie die Bewertung eingereicht haben",
        PLACEHOLDER: "Erzählen Sie uns mehr..."
    },
    IR = {
        BUTTON_TEXT: "Chat-Protokoll anfordern",
        SEND_EMAIL_SUCCESS: "Das Chat-Protokoll wurde erfolgreich gesendet",
        SEND_EMAIL_ERROR: "Es ist ein Fehler aufgetreten, bitte versuchen Sie es erneut"
    },
    NR = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Klicken Sie hier, um beizutreten",
            LEAVE_THE_ROOM: "Anruf verlassen"
        }
    },
    fR = {
        POPULAR_ARTICLES: "Beliebte Artikel",
        VIEW_ALL_ARTICLES: "Alle Artikel anzeigen",
        IFRAME_LOAD_ERROR: "Beim Laden des Artikels ist ein Fehler aufgetreten. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut."
    },
    SR = {
        image: {
            CONTENT: "Bildnachricht"
        },
        audio: {
            CONTENT: "Audio-Nachricht"
        },
        video: {
            CONTENT: "Videonachricht"
        },
        file: {
            CONTENT: "Dateianhang"
        },
        location: {
            CONTENT: "Ort"
        },
        fallback: {
            CONTENT: "hat eine URL geteilt"
        }
    },
    pR = {
        REPLY_TO: "Antwort auf:"
    },
    dR = {
        COMPONENTS: qA,
        TEAM_AVAILABILITY: ZA,
        REPLY_TIME: JA,
        DAY_NAMES: XA,
        START_CONVERSATION: eR,
        END_CONVERSATION: tR,
        CONTINUE_CONVERSATION: nR,
        YOU: rR,
        START_NEW_CONVERSATION: aR,
        VIEW_UNREAD_MESSAGES: iR,
        UNREAD_VIEW: sR,
        BUBBLE: oR,
        POWERED_BY: ER,
        EMAIL_PLACEHOLDER: lR,
        CHAT_PLACEHOLDER: cR,
        TODAY: uR,
        YESTERDAY: AR,
        PRE_CHAT_FORM: RR,
        FILE_SIZE_LIMIT: _R,
        CHAT_FORM: TR,
        EMOJI: OR,
        CSAT: LR,
        EMAIL_TRANSCRIPT: IR,
        INTEGRATIONS: NR,
        PORTAL: fR,
        ATTACHMENTS: SR,
        FOOTER_REPLY_TO: pR
    },
    mR = {
        FILE_BUBBLE: {
            DOWNLOAD: "Κατέβασμα",
            UPLOADING: "Ανέβασμα..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Καταχώρηση"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Επαναποστολή μηνύματος",
            ERROR_MESSAGE: "Αδυναμία αποστολής! Προσπαθήστε ξανά"
        }
    },
    DR = {
        ONLINE: "Είμαστε online",
        OFFLINE: "Προς το παρόν, είμαστε εκτός"
    },
    CR = {
        IN_A_FEW_MINUTES: "Τυπικά έχετε απάντηση σε μερικά λεπτά",
        IN_A_FEW_HOURS: "Τυπικά έχετε απάντηση σε μερικές σε μερικές ώρες",
        IN_A_DAY: "Τυπικά έχετε απάντηση σε μία ημέρα",
        BACK_IN: "We will be back online"
    },
    MR = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    hR = "Έναρξη Συνομιλίας",
    vR = "Τέλος Συνομιλίας",
    gR = "Συνέχιση συνομιλίας",
    PR = "You",
    $R = "Έναρξη νέας συνομιλίας",
    yR = "You have unread messages",
    UR = {
        VIEW_MESSAGES_BUTTON: "Δείτε τα νέα μηνύματα",
        CLOSE_MESSAGES_BUTTON: "Κλείσιμο",
        COMPANY_FROM: "από",
        BOT: "Bot"
    },
    BR = {
        LABEL: "Συνομιλήστε μαζί μας"
    },
    bR = "με την δύναμη του Chatwoot",
    YR = "Παρακαλώ εισάγετε το email σας",
    kR = "Πληκτρολογήστε το μήνυμά σας",
    HR = "Σήμερα",
    VR = "Χτες",
    FR = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Πλήρες Όνομα",
                PLACEHOLDER: "Παρακαλώ συμπληρώστε το πλήρες όνομα σας",
                REQUIRED_ERROR: "Απαιτείται πλήρες όνομα"
            },
            EMAIL_ADDRESS: {
                LABEL: "Διεύθυνση Email",
                PLACEHOLDER: "Παρακαλούμε εισάγετε τη διεύθυνση email σας",
                REQUIRED_ERROR: "Απαιτείται διεύθυνση email",
                VALID_ERROR: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email"
            },
            PHONE_NUMBER: {
                LABEL: "Αριθμός Τηλεφώνου",
                PLACEHOLDER: "Παρακαλώ εισάγετε τον αριθμό του τηλεφώνου σας",
                REQUIRED_ERROR: "Απαιτείται ο αριθμός τηλεφώνου",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "Δεν βρέθηκαν αποτελέσματα",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Μήνυμα",
                PLACEHOLDER: "Παρακαλώ εισάγετε το μήνυμά σας",
                ERROR: "Πολύ σύντομο μήνυμα"
            }
        },
        CAMPAIGN_HEADER: "Παρακαλώ δώστε το όνομα και το email σας πριν ξεκινήσετε την συνομιλία",
        IS_REQUIRED: "είναι απαραίτητο",
        REQUIRED: "Υποχρεωτικό",
        REGEX_ERROR: "Please provide a valid input"
    },
    wR = "Το αρχείο υπερβαίνει το όριο συνημμένου {MAXIMUM_FILE_UPLOAD_SIZE}",
    WR = {
        INVALID: {
            FIELD: "Μη έγκυρο πεδίο"
        }
    },
    GR = {
        PLACEHOLDER: "Αναζήτηση emojis",
        NOT_FOUND: "Κανένα emoji δεν ταιριάζει με την αναζήτησή σας",
        ARIA_LABEL: "Emoji picker"
    },
    jR = {
        TITLE: "Αξιολογήστε τη συνομιλία σας",
        SUBMITTED_TITLE: "Ευχαριστούμε για την υποβολή της αξιολόγησης",
        PLACEHOLDER: "Πείτε μας περισσότερα..."
    },
    zR = {
        BUTTON_TEXT: "Αίτηση μεταγραφής συνομιλίας",
        SEND_EMAIL_SUCCESS: "Η μεταγραφή της συνομιλίας έχει αποσταλεί επιτυχώς",
        SEND_EMAIL_ERROR: "Υπήρξε ένα σφάλμα, παρακαλώ προσπαθήστε ξανά"
    },
    xR = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Κάντε κλικ εδώ για να συμμετάσχετε",
            LEAVE_THE_ROOM: "Έξοδος από την κλήση"
        }
    },
    QR = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    KR = {
        image: {
            CONTENT: "Μήνυμα εικόνας"
        },
        audio: {
            CONTENT: "Μήνυμα ήχου"
        },
        video: {
            CONTENT: "Μήνυμα βίντεο"
        },
        file: {
            CONTENT: "Επισυναπτόμενο αρχείο"
        },
        location: {
            CONTENT: "Θέση"
        },
        fallback: {
            CONTENT: "έχει μοιράσει ένα σύνδεσμο"
        }
    },
    qR = {
        REPLY_TO: "Replying to:"
    },
    ZR = {
        COMPONENTS: mR,
        TEAM_AVAILABILITY: DR,
        REPLY_TIME: CR,
        DAY_NAMES: MR,
        START_CONVERSATION: hR,
        END_CONVERSATION: vR,
        CONTINUE_CONVERSATION: gR,
        YOU: PR,
        START_NEW_CONVERSATION: $R,
        VIEW_UNREAD_MESSAGES: yR,
        UNREAD_VIEW: UR,
        BUBBLE: BR,
        POWERED_BY: bR,
        EMAIL_PLACEHOLDER: YR,
        CHAT_PLACEHOLDER: kR,
        TODAY: HR,
        YESTERDAY: VR,
        PRE_CHAT_FORM: FR,
        FILE_SIZE_LIMIT: wR,
        CHAT_FORM: WR,
        EMOJI: GR,
        CSAT: jR,
        EMAIL_TRANSCRIPT: zR,
        INTEGRATIONS: xR,
        PORTAL: QR,
        ATTACHMENTS: KR,
        FOOTER_REPLY_TO: qR
    },
    JR = {
        FILE_BUBBLE: {
            DOWNLOAD: "Download",
            UPLOADING: "Uploading..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Submit"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Send message again",
            ERROR_MESSAGE: "Couldn't send, try again"
        }
    },
    XR = {
        ONLINE: "We are online",
        OFFLINE: "We are away at the moment"
    },
    e_ = {
        IN_A_FEW_MINUTES: "Typically replies in a few minutes",
        IN_A_FEW_HOURS: "Typically replies in a few hours",
        IN_A_DAY: "Typically replies in a day",
        BACK_IN: "We will be back online"
    },
    t_ = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    n_ = "Start Conversation",
    r_ = "End Conversation",
    a_ = "Continue conversation",
    i_ = "You",
    s_ = "Start a new conversation",
    o_ = "You have unread messages",
    E_ = {
        VIEW_MESSAGES_BUTTON: "See new messages",
        CLOSE_MESSAGES_BUTTON: "Close",
        COMPANY_FROM: "from",
        BOT: "Bot"
    },
    l_ = {
        LABEL: "Chat with us"
    },
    c_ = "Powered by Chatwoot",
    u_ = "Please enter your email",
    A_ = "Type your message",
    R_ = "Today",
    __ = "Yesterday",
    T_ = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Full Name",
                PLACEHOLDER: "Please enter your full name",
                REQUIRED_ERROR: "Full Name is required"
            },
            EMAIL_ADDRESS: {
                LABEL: "Email Address",
                PLACEHOLDER: "Please enter your email address",
                REQUIRED_ERROR: "Email Address is required",
                VALID_ERROR: "Please enter a valid email address"
            },
            PHONE_NUMBER: {
                LABEL: "Phone Number",
                PLACEHOLDER: "Please enter your phone number",
                REQUIRED_ERROR: "Phone Number is required",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "No results found",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Message",
                PLACEHOLDER: "Please enter your message",
                ERROR: "Message too short"
            }
        },
        CAMPAIGN_HEADER: "Please provide your name and email before starting the conversation",
        IS_REQUIRED: "is required",
        REQUIRED: "Required",
        REGEX_ERROR: "Please provide a valid input"
    },
    O_ = "File exceeds the {MAXIMUM_FILE_UPLOAD_SIZE} attachment limit",
    L_ = {
        INVALID: {
            FIELD: "Invalid field"
        }
    },
    I_ = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    N_ = {
        TITLE: "Rate your conversation",
        SUBMITTED_TITLE: "Thank you for submitting the rating",
        PLACEHOLDER: "Tell us more..."
    },
    f_ = {
        BUTTON_TEXT: "Request a conversation transcript",
        SEND_EMAIL_SUCCESS: "The chat transcript was sent successfully",
        SEND_EMAIL_ERROR: "There was an error, please try again"
    },
    S_ = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    p_ = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    d_ = {
        image: {
            CONTENT: "Picture message"
        },
        audio: {
            CONTENT: "Audio message"
        },
        video: {
            CONTENT: "Video message"
        },
        file: {
            CONTENT: "File Attachment"
        },
        location: {
            CONTENT: "Location"
        },
        fallback: {
            CONTENT: "has shared a url"
        }
    },
    m_ = {
        REPLY_TO: "Replying to:"
    },
    D_ = {
        COMPONENTS: JR,
        TEAM_AVAILABILITY: XR,
        REPLY_TIME: e_,
        DAY_NAMES: t_,
        START_CONVERSATION: n_,
        END_CONVERSATION: r_,
        CONTINUE_CONVERSATION: a_,
        YOU: i_,
        START_NEW_CONVERSATION: s_,
        VIEW_UNREAD_MESSAGES: o_,
        UNREAD_VIEW: E_,
        BUBBLE: l_,
        POWERED_BY: c_,
        EMAIL_PLACEHOLDER: u_,
        CHAT_PLACEHOLDER: A_,
        TODAY: R_,
        YESTERDAY: __,
        PRE_CHAT_FORM: T_,
        FILE_SIZE_LIMIT: O_,
        CHAT_FORM: L_,
        EMOJI: I_,
        CSAT: N_,
        EMAIL_TRANSCRIPT: f_,
        INTEGRATIONS: S_,
        PORTAL: p_,
        ATTACHMENTS: d_,
        FOOTER_REPLY_TO: m_
    },
    C_ = {
        FILE_BUBBLE: {
            DOWNLOAD: "Descargar",
            UPLOADING: "Subiendo..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Enviar"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Enviar mensaje de nuevo",
            ERROR_MESSAGE: "¡No se pudo enviar! intente nuevamente"
        }
    },
    M_ = {
        ONLINE: "Estamos en línea",
        OFFLINE: "Estamos ausentes en este momento"
    },
    h_ = {
        IN_A_FEW_MINUTES: "Normalmente responde en unos minutos",
        IN_A_FEW_HOURS: "Normalmente responde en unas pocas horas",
        IN_A_DAY: "Normalmente responde en un día",
        BACK_IN: "Volveremos a estar en línea"
    },
    v_ = {
        SUNDAY: "Domingo",
        MONDAY: "Lunes",
        TUESDAY: "Martes",
        WEDNESDAY: "Miércoles",
        THURSDAY: "Jueves",
        FRIDAY: "Viernes",
        SATURDAY: "Sábado"
    },
    g_ = "Iniciar conversación",
    P_ = "Finalizar conversación",
    $_ = "Continuar conversación",
    y_ = "Tú",
    U_ = "Iniciar una nueva conversación",
    B_ = "Tienes mensajes no leídos",
    b_ = {
        VIEW_MESSAGES_BUTTON: "Ver nuevos mensajes",
        CLOSE_MESSAGES_BUTTON: "Cerrar",
        COMPANY_FROM: "De",
        BOT: "Bot"
    },
    Y_ = {
        LABEL: "Chatea con nosotros"
    },
    k_ = "Desarrollado por Chatwoot",
    H_ = "Por favor ingrese su email",
    V_ = "Escribe tu mensaje",
    F_ = "Hoy",
    w_ = "Ayer",
    W_ = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nombre completo",
                PLACEHOLDER: "Introduzca su nombre completo por favor",
                REQUIRED_ERROR: "Nombre completo es obligatorio"
            },
            EMAIL_ADDRESS: {
                LABEL: "Dirección de correo",
                PLACEHOLDER: "Introduzca su dirección de correo electrónico",
                REQUIRED_ERROR: "La dirección de correo es obligatoria",
                VALID_ERROR: "Por favor, introduzca una dirección de correo válida"
            },
            PHONE_NUMBER: {
                LABEL: "Número telefónico",
                PLACEHOLDER: "Por favor ingrese su número de teléfono",
                REQUIRED_ERROR: "El número de teléfono es obligatorio",
                DIAL_CODE_VALID_ERROR: "Por favor seleccione un código de país",
                VALID_ERROR: "Por favor ingrese un número de teléfono válido",
                DROPDOWN_EMPTY: "No se encontraron resultados",
                DROPDOWN_SEARCH: "Buscar país"
            },
            MESSAGE: {
                LABEL: "Mensaje",
                PLACEHOLDER: "Introduzca su mensaje",
                ERROR: "Mensaje demasiado corto"
            }
        },
        CAMPAIGN_HEADER: "Por favor, introduce tu nombre y correo electrónico antes de iniciar la conversación",
        IS_REQUIRED: "es obligatorio",
        REQUIRED: "Requerido",
        REGEX_ERROR: "Por favor proporcione una entrada válida"
    },
    G_ = "El archivo excede el límite de los archivos adjuntos {MAXIMUM_FILE_UPLOAD_SIZE}",
    j_ = {
        INVALID: {
            FIELD: "Campo no válido"
        }
    },
    z_ = {
        PLACEHOLDER: "Buscar emojis",
        NOT_FOUND: "Ningún emoji coincide con tu búsqueda",
        ARIA_LABEL: "Selector de emoji"
    },
    x_ = {
        TITLE: "Califica tu conversación",
        SUBMITTED_TITLE: "Gracias por enviar la valoración",
        PLACEHOLDER: "Cuéntanos más..."
    },
    Q_ = {
        BUTTON_TEXT: "Enviar transcripción de la conversación",
        SEND_EMAIL_SUCCESS: "La transcripción ha sido enviada",
        SEND_EMAIL_ERROR: "Hubo un error, por favor inténtelo de nuevo"
    },
    K_ = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Haga clic aquí para unirse",
            LEAVE_THE_ROOM: "Salir de la llamada"
        }
    },
    q_ = {
        POPULAR_ARTICLES: "Artículos populares",
        VIEW_ALL_ARTICLES: "Ver todos los artículos",
        IFRAME_LOAD_ERROR: "Se ha producido un error al cargar el artículo, por favor actualiza la página e inténtalo de nuevo."
    },
    Z_ = {
        image: {
            CONTENT: "Mensaje de imagen"
        },
        audio: {
            CONTENT: "Mensaje de audio"
        },
        video: {
            CONTENT: "Mensaje de vídeo"
        },
        file: {
            CONTENT: "Archivo adjunto"
        },
        location: {
            CONTENT: "Ubicación"
        },
        fallback: {
            CONTENT: "ha compartido una url"
        }
    },
    J_ = {
        REPLY_TO: "Respondiendo a:"
    },
    X_ = {
        COMPONENTS: C_,
        TEAM_AVAILABILITY: M_,
        REPLY_TIME: h_,
        DAY_NAMES: v_,
        START_CONVERSATION: g_,
        END_CONVERSATION: P_,
        CONTINUE_CONVERSATION: $_,
        YOU: y_,
        START_NEW_CONVERSATION: U_,
        VIEW_UNREAD_MESSAGES: B_,
        UNREAD_VIEW: b_,
        BUBBLE: Y_,
        POWERED_BY: k_,
        EMAIL_PLACEHOLDER: H_,
        CHAT_PLACEHOLDER: V_,
        TODAY: F_,
        YESTERDAY: w_,
        PRE_CHAT_FORM: W_,
        FILE_SIZE_LIMIT: G_,
        CHAT_FORM: j_,
        EMOJI: z_,
        CSAT: x_,
        EMAIL_TRANSCRIPT: Q_,
        INTEGRATIONS: K_,
        PORTAL: q_,
        ATTACHMENTS: Z_,
        FOOTER_REPLY_TO: J_
    },
    eT = {
        FILE_BUBBLE: {
            DOWNLOAD: "دانلود",
            UPLOADING: "در حال آپلود..."
        },
        FORM_BUBBLE: {
            SUBMIT: "ثبت"
        },
        MESSAGE_BUBBLE: {
            RETRY: "دوباره پیام بدید",
            ERROR_MESSAGE: "ارسال نشد، دوباره امتحان کنید"
        }
    },
    tT = {
        ONLINE: "ما آنلاین هستیم",
        OFFLINE: "در حال حاضر دردسترس نیستیم"
    },
    nT = {
        IN_A_FEW_MINUTES: "معمولاً در عرض چند دقیقه پاسخ می دهند",
        IN_A_FEW_HOURS: "معمولاً در عرض چند ساعت پاسخ می دهند",
        IN_A_DAY: "به طور معمول در یک روز پاسخ می دهند",
        BACK_IN: "دوباره آنلاین خواهیم شد"
    },
    rT = {
        SUNDAY: "یک‌شنبه",
        MONDAY: "دوشنبه",
        TUESDAY: "سه‌شنبه",
        WEDNESDAY: "چهارشنبه",
        THURSDAY: "پنج‌شنبه",
        FRIDAY: "جمعه",
        SATURDAY: "شنبه"
    },
    aT = "شروع گفتگو",
    iT = "پایان گفتگو",
    sT = "ادامه گفتگو",
    oT = "شما",
    ET = "یک مکالمه جدید را شروع کنید",
    lT = "شما پیام خوانده نشده دارید",
    cT = {
        VIEW_MESSAGES_BUTTON: "مشاهده پیام‌های جدید",
        CLOSE_MESSAGES_BUTTON: "بستن",
        COMPANY_FROM: "از",
        BOT: "ربات"
    },
    uT = {
        LABEL: "با ما گفتگو کنید"
    },
    AT = "قدرت گرفته از چت ووت",
    RT = "لطفا ایمیل خود را وارد کنید",
    _T = "پیام خود را وارد کنید",
    TT = "امروز",
    OT = "دیروز",
    LT = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "نام کامل",
                PLACEHOLDER: "لطفا نام کامل خود را وارد کنید",
                REQUIRED_ERROR: "نام کامل مورد نیاز است"
            },
            EMAIL_ADDRESS: {
                LABEL: "ایمیل",
                PLACEHOLDER: "لطفا ایمیل خود را وارد کنید",
                REQUIRED_ERROR: "آدرس ایمیل مورد نیاز است",
                VALID_ERROR: "لطفا ایمیل خود را به شکل صحیح وارد کنید"
            },
            PHONE_NUMBER: {
                LABEL: "شماره موبایل",
                PLACEHOLDER: "لطفا شماره تلفن خود را وارد کنید",
                REQUIRED_ERROR: "شماره تلفن مورد نیاز است",
                DIAL_CODE_VALID_ERROR: 'لطفا" یک کد کشور انتخاب کنید',
                VALID_ERROR: 'لطفا" یک شماره موبایل معتبر وارد نمایید',
                DROPDOWN_EMPTY: "نتیجه‌ای یافت نشد",
                DROPDOWN_SEARCH: "جستجوی کشور"
            },
            MESSAGE: {
                LABEL: "پیام",
                PLACEHOLDER: "لطفا پیام خود را وارد کنید",
                ERROR: "پیام بسیار کوتاه است"
            }
        },
        CAMPAIGN_HEADER: "لطفا قبل از شروع گفتگو نام و ایمیل خود را وارد کنید",
        IS_REQUIRED: "مورد نیاز است",
        REQUIRED: "ضروری",
        REGEX_ERROR: "لطفا یک ورودی معتبر ارائه دهید"
    },
    IT = "فایل ضمیمه شده بیشتر از {MAXIMUM_FILE_UPLOAD_SIZE} است",
    NT = {
        INVALID: {
            FIELD: "فیلد نامتعارف"
        }
    },
    fT = {
        PLACEHOLDER: "جستجوی اموجی",
        NOT_FOUND: "هیچ اموجی با جستجوی شما مطابقت ندارد",
        ARIA_LABEL: "انتخاب اموجی"
    },
    ST = {
        TITLE: "به گفتگوی خود امتیاز دهید",
        SUBMITTED_TITLE: "با تشکر از شما برای ثبت امتیاز",
        PLACEHOLDER: "بیشتر به ما بگویید..."
    },
    pT = {
        BUTTON_TEXT: "درخواست رونوشت گفتگو",
        SEND_EMAIL_SUCCESS: "رونوشت گفتگو با موفقیت ارسال شد",
        SEND_EMAIL_ERROR: "خطایی پیش آمد. لطفا دوباره امتحان کنید"
    },
    dT = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "برای ملحق شدن اینجا را کلیک کنید",
            LEAVE_THE_ROOM: "تماس را ترک کنید"
        }
    },
    mT = {
        POPULAR_ARTICLES: "مقالات محبوب",
        VIEW_ALL_ARTICLES: "مشاهده همه مقالات",
        IFRAME_LOAD_ERROR: 'در لود مقاله خطایی رخ داده است، لطفا" صفحه را رفرش و دوباره تلاش نمایید.'
    },
    DT = {
        image: {
            CONTENT: "پیام تصویری"
        },
        audio: {
            CONTENT: "پیام صوتی"
        },
        video: {
            CONTENT: "پیام ویدیویی"
        },
        file: {
            CONTENT: "ضمیمه فایل"
        },
        location: {
            CONTENT: "موقعیت جغرافیایی"
        },
        fallback: {
            CONTENT: "یک آدرس URL به اشتراک گذاشته شده"
        }
    },
    CT = {
        REPLY_TO: "در حال پاسخ دهی به:"
    },
    MT = {
        COMPONENTS: eT,
        TEAM_AVAILABILITY: tT,
        REPLY_TIME: nT,
        DAY_NAMES: rT,
        START_CONVERSATION: aT,
        END_CONVERSATION: iT,
        CONTINUE_CONVERSATION: sT,
        YOU: oT,
        START_NEW_CONVERSATION: ET,
        VIEW_UNREAD_MESSAGES: lT,
        UNREAD_VIEW: cT,
        BUBBLE: uT,
        POWERED_BY: AT,
        EMAIL_PLACEHOLDER: RT,
        CHAT_PLACEHOLDER: _T,
        TODAY: TT,
        YESTERDAY: OT,
        PRE_CHAT_FORM: LT,
        FILE_SIZE_LIMIT: IT,
        CHAT_FORM: NT,
        EMOJI: fT,
        CSAT: ST,
        EMAIL_TRANSCRIPT: pT,
        INTEGRATIONS: dT,
        PORTAL: mT,
        ATTACHMENTS: DT,
        FOOTER_REPLY_TO: CT
    },
    hT = {
        FILE_BUBBLE: {
            DOWNLOAD: "Lataa",
            UPLOADING: "Lähetetään..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Lähetä"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Lähetä viesti uudelleen",
            ERROR_MESSAGE: "Ei voitu lähettää, yritä uudestaan"
        }
    },
    vT = {
        ONLINE: "Olemme online-tilassa",
        OFFLINE: "Olemme tällä hetkellä poissa"
    },
    gT = {
        IN_A_FEW_MINUTES: "Vastaa tyypillisesti muutamassa minuutissa",
        IN_A_FEW_HOURS: "Tyypillisesti vastaa muutaman tunnin kuluessa",
        IN_A_DAY: "Vastaa tyypillisesti päivässä",
        BACK_IN: "Tulemme olemaan takaisin linjoilla"
    },
    PT = {
        SUNDAY: "Sunnuntai",
        MONDAY: "Maanantai",
        TUESDAY: "Tiistai",
        WEDNESDAY: "Keskiviikko",
        THURSDAY: "Torstai",
        FRIDAY: "Perjantai",
        SATURDAY: "Lauantai"
    },
    $T = "Aloita keskustelu",
    yT = "Lopeta keskustelu",
    UT = "Jatka keskustelua",
    BT = "Sinä",
    bT = "Aloita uusi keskustelu",
    YT = "Sinulla on lukemattomia viestejä",
    kT = {
        VIEW_MESSAGES_BUTTON: "Näytä uudet viestit",
        CLOSE_MESSAGES_BUTTON: "Sulje",
        COMPANY_FROM: "lähettäjä",
        BOT: "Botti"
    },
    HT = {
        LABEL: "Keskustele kanssamme"
    },
    VT = "Palvelun tarjoaa Chatwoot",
    FT = "Ole hyvä ja syötä sähköpostiosoitteesi",
    wT = "Kirjoita viestisi",
    WT = "Tänään",
    GT = "Eilen",
    jT = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Koko nimi",
                PLACEHOLDER: "Syötä koko nimesi",
                REQUIRED_ERROR: "Koko nimi vaaditaan"
            },
            EMAIL_ADDRESS: {
                LABEL: "Sähköpostiosoite",
                PLACEHOLDER: "Ole hyvä ja syötä email osoite",
                REQUIRED_ERROR: "Sähköpostiosoite on pakollinen",
                VALID_ERROR: "Ole hyvä ja syötä validi sähköposti"
            },
            PHONE_NUMBER: {
                LABEL: "Puhelinnumero",
                PLACEHOLDER: "Ole hyvä ja syötä puhelinnumero",
                REQUIRED_ERROR: "Puhelinnumero vaaditaan",
                DIAL_CODE_VALID_ERROR: "Ole hyvä ja valitse maakoodi",
                VALID_ERROR: "Anna kelvollinen puhelinnumero",
                DROPDOWN_EMPTY: "Tuloksia ei löytynyt",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Viesti",
                PLACEHOLDER: "Ole hyvä ja syötä viesti",
                ERROR: "Viesti on liian lyhyt"
            }
        },
        CAMPAIGN_HEADER: "Ole hyvä ja anna nimesi ja sähköpostisi ennen keskustelun aloittamista",
        IS_REQUIRED: "on vaadittu",
        REQUIRED: "Pakollinen",
        REGEX_ERROR: "Please provide a valid input"
    },
    zT = "Tiedosto ylittää sallitun {MAXIMUM_FILE_UPLOAD_SIZE} liitteen rajan",
    xT = {
        INVALID: {
            FIELD: "Virheellinen kenttä"
        }
    },
    QT = {
        PLACEHOLDER: "Etsi emojeista",
        NOT_FOUND: "Yksikään emoji ei vastaa hakuasi",
        ARIA_LABEL: "Emoji picker"
    },
    KT = {
        TITLE: "Anna arvio palvelusta",
        SUBMITTED_TITLE: "Kiitos, että lähetit arvion",
        PLACEHOLDER: "Kerro meille lisää..."
    },
    qT = {
        BUTTON_TEXT: "Lähetä keskustelun tallenne",
        SEND_EMAIL_SUCCESS: "Chat-keskustelu on lähetetty onnistuneesti",
        SEND_EMAIL_ERROR: "Tapahtui virhe, yritä uudelleen"
    },
    ZT = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Klikkaa tästä liittyäksesi",
            LEAVE_THE_ROOM: "Poistu puhelusta"
        }
    },
    JT = {
        POPULAR_ARTICLES: "Suosittuja artikkeleita",
        VIEW_ALL_ARTICLES: "Näytä kaikki artikkelit",
        IFRAME_LOAD_ERROR: "Artikkelin lataamisessa tapahtui virhe. Ole hyvä ja päivitä sivu ja yritä uudelleen."
    },
    XT = {
        image: {
            CONTENT: "Kuvaviesti"
        },
        audio: {
            CONTENT: "Ääniviesti"
        },
        video: {
            CONTENT: "Videoviesti"
        },
        file: {
            CONTENT: "Liite"
        },
        location: {
            CONTENT: "Sijainti"
        },
        fallback: {
            CONTENT: "on jakanut URL-osoitteen"
        }
    },
    eO = {
        REPLY_TO: "Replying to:"
    },
    tO = {
        COMPONENTS: hT,
        TEAM_AVAILABILITY: vT,
        REPLY_TIME: gT,
        DAY_NAMES: PT,
        START_CONVERSATION: $T,
        END_CONVERSATION: yT,
        CONTINUE_CONVERSATION: UT,
        YOU: BT,
        START_NEW_CONVERSATION: bT,
        VIEW_UNREAD_MESSAGES: YT,
        UNREAD_VIEW: kT,
        BUBBLE: HT,
        POWERED_BY: VT,
        EMAIL_PLACEHOLDER: FT,
        CHAT_PLACEHOLDER: wT,
        TODAY: WT,
        YESTERDAY: GT,
        PRE_CHAT_FORM: jT,
        FILE_SIZE_LIMIT: zT,
        CHAT_FORM: xT,
        EMOJI: QT,
        CSAT: KT,
        EMAIL_TRANSCRIPT: qT,
        INTEGRATIONS: ZT,
        PORTAL: JT,
        ATTACHMENTS: XT,
        FOOTER_REPLY_TO: eO
    },
    nO = {
        FILE_BUBBLE: {
            DOWNLOAD: "Télécharger",
            UPLOADING: "Téléversement..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Envoyer"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Renvoyer le message",
            ERROR_MESSAGE: "Échec de l'envoi, veuillez réessayer"
        }
    },
    rO = {
        ONLINE: "Nous sommes en ligne",
        OFFLINE: "Nous sommes absents pour le moment"
    },
    aO = {
        IN_A_FEW_MINUTES: "Répond généralement en quelques minutes",
        IN_A_FEW_HOURS: "Répond généralement en quelques heures",
        IN_A_DAY: "Répond généralement dans la journée",
        BACK_IN: "Nous serons de retour en ligne"
    },
    iO = {
        SUNDAY: "Dimanche",
        MONDAY: "Lundi",
        TUESDAY: "Mardi",
        WEDNESDAY: "Mercredi",
        THURSDAY: "Jeudi",
        FRIDAY: "Vendredi",
        SATURDAY: "Samedi"
    },
    sO = "Démarrer la conversation",
    oO = "Clôturer la conversation",
    EO = "Continuer la conversation",
    lO = "Vous",
    cO = "Démarrer une nouvelle conversation",
    uO = "Vous avez des messages non lus",
    AO = {
        VIEW_MESSAGES_BUTTON: "Voir les nouveaux messages",
        CLOSE_MESSAGES_BUTTON: "Fermer",
        COMPANY_FROM: "de",
        BOT: "Bot"
    },
    RO = {
        LABEL: "Discutez avec nous"
    },
    _O = "Propulsé par Chatwoot",
    TO = "Veuillez saisir votre adresse de courriel",
    OO = "Tapez votre message",
    LO = "Aujourd'hui",
    IO = "Hier",
    NO = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nom complet",
                PLACEHOLDER: "Veuillez entrer votre nom complet",
                REQUIRED_ERROR: "Le nom complet est requis"
            },
            EMAIL_ADDRESS: {
                LABEL: "Adresse de courriel",
                PLACEHOLDER: "Veuillez saisir votre adresse de courriel",
                REQUIRED_ERROR: "L'adresse email est obligatoire",
                VALID_ERROR: "Veuillez saisir une adresse de courriel valide"
            },
            PHONE_NUMBER: {
                LABEL: "Numéro de téléphone",
                PLACEHOLDER: "Veuillez saisir votre numéro de téléphone",
                REQUIRED_ERROR: "Le numéro de téléphone est obligatoire",
                DIAL_CODE_VALID_ERROR: "Veuillez sélectionner un code pays",
                VALID_ERROR: "Veuillez saisir un numéro de téléphone valide",
                DROPDOWN_EMPTY: "Aucun résultat trouvé",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Message",
                PLACEHOLDER: "Veuillez entrer votre message",
                ERROR: "Message trop court"
            }
        },
        CAMPAIGN_HEADER: "Veuillez fournir votre nom et votre courriel avant de commencer la conversation",
        IS_REQUIRED: "est obligatoire",
        REQUIRED: "Requis",
        REGEX_ERROR: "Veuillez fournir une entrée valide"
    },
    fO = "Le fichier dépasse la limite de {MAXIMUM_FILE_UPLOAD_SIZE} pour les pièces jointes",
    SO = {
        INVALID: {
            FIELD: "Champ non valide"
        }
    },
    pO = {
        PLACEHOLDER: "Rechercher des émojis",
        NOT_FOUND: "Aucun émoji ne correspond à votre recherche",
        ARIA_LABEL: "Emoji picker"
    },
    dO = {
        TITLE: "Évaluer votre conversation",
        SUBMITTED_TITLE: "Merci d'avoir soumis votre évaluation",
        PLACEHOLDER: "Dites-nous en plus..."
    },
    mO = {
        BUTTON_TEXT: "Demander une transcription de la conversation",
        SEND_EMAIL_SUCCESS: "La transcription du chat a été envoyée avec succès",
        SEND_EMAIL_ERROR: "Une erreur est survenue, veuillez réessayer"
    },
    DO = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Cliquez ici pour se connecter",
            LEAVE_THE_ROOM: "Quitter l'appel"
        }
    },
    CO = {
        POPULAR_ARTICLES: "Articles populaires",
        VIEW_ALL_ARTICLES: "Voir tous les articles",
        IFRAME_LOAD_ERROR: "Une erreur s'est produite lors du chargement de l'article, veuillez actualiser la page et réessayer."
    },
    MO = {
        image: {
            CONTENT: "Message image"
        },
        audio: {
            CONTENT: "Message audio"
        },
        video: {
            CONTENT: "Message vidéo"
        },
        file: {
            CONTENT: "Pièce jointe"
        },
        location: {
            CONTENT: "Localisation"
        },
        fallback: {
            CONTENT: "a partagé une URL"
        }
    },
    hO = {
        REPLY_TO: "Répondre à:"
    },
    vO = {
        COMPONENTS: nO,
        TEAM_AVAILABILITY: rO,
        REPLY_TIME: aO,
        DAY_NAMES: iO,
        START_CONVERSATION: sO,
        END_CONVERSATION: oO,
        CONTINUE_CONVERSATION: EO,
        YOU: lO,
        START_NEW_CONVERSATION: cO,
        VIEW_UNREAD_MESSAGES: uO,
        UNREAD_VIEW: AO,
        BUBBLE: RO,
        POWERED_BY: _O,
        EMAIL_PLACEHOLDER: TO,
        CHAT_PLACEHOLDER: OO,
        TODAY: LO,
        YESTERDAY: IO,
        PRE_CHAT_FORM: NO,
        FILE_SIZE_LIMIT: fO,
        CHAT_FORM: SO,
        EMOJI: pO,
        CSAT: dO,
        EMAIL_TRANSCRIPT: mO,
        INTEGRATIONS: DO,
        PORTAL: CO,
        ATTACHMENTS: MO,
        FOOTER_REPLY_TO: hO
    },
    gO = {
        FILE_BUBBLE: {
            DOWNLOAD: "הורד",
            UPLOADING: "מעלה..."
        },
        FORM_BUBBLE: {
            SUBMIT: "שלח"
        },
        MESSAGE_BUBBLE: {
            RETRY: "שלח שוב הודעה",
            ERROR_MESSAGE: "לא ניתן לשלוח, נסה שוב"
        }
    },
    PO = {
        ONLINE: "אנחנו אונליין",
        OFFLINE: "אנחנו לא זמינים כרגע"
    },
    $O = {
        IN_A_FEW_MINUTES: "זמן מענה טיפוסי תוך כמה דקות",
        IN_A_FEW_HOURS: "מענה ממוצע תוך כמה שעות",
        IN_A_DAY: "מענה ממוצע לאחר יום",
        BACK_IN: "We will be back online"
    },
    yO = {
        SUNDAY: "יום ראשון",
        MONDAY: "יום שני",
        TUESDAY: "יום שלישי",
        WEDNESDAY: "יום רביעי",
        THURSDAY: "יום חמישי",
        FRIDAY: "שישי",
        SATURDAY: "יום שבת"
    },
    UO = "התחל שיחה",
    BO = "סיים שיחה",
    bO = "המשך שיחה",
    YO = "You",
    kO = "התחל שיחה חדשה",
    HO = "You have unread messages",
    VO = {
        VIEW_MESSAGES_BUTTON: "ראה הודעות חדשות",
        CLOSE_MESSAGES_BUTTON: "סגור",
        COMPANY_FROM: "מ",
        BOT: "בוט"
    },
    FO = {
        LABEL: "דבר איתנו"
    },
    wO = "מופעל על ידי Chatwoot",
    WO = "הזן בבקשה את האימייל שלך",
    GO = "הקלד הודעה",
    jO = "היום",
    zO = "אתמול",
    xO = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "שם מלא",
                PLACEHOLDER: "הכנס שם מלא בבקשה",
                REQUIRED_ERROR: "שם מלא שדה חובה"
            },
            EMAIL_ADDRESS: {
                LABEL: "כתובת מייל",
                PLACEHOLDER: "הכנס כתובת מייל בבקשה",
                REQUIRED_ERROR: "נדרשת כתובת אימייל",
                VALID_ERROR: "בבקשה הכנס כתוכת אימייל תקינה"
            },
            PHONE_NUMBER: {
                LABEL: "מספר טלפון",
                PLACEHOLDER: "אנא הזן את מספר הטלפון שלך",
                REQUIRED_ERROR: "נדרש מספר טלפון",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "לא נמצאו תוצאות",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "הודעה",
                PLACEHOLDER: "הקלד הודעה בבקשה",
                ERROR: "הודעה קצרה מדי"
            }
        },
        CAMPAIGN_HEADER: 'אנא ספק את שמך ואת הדוא"ל שלך לפני תחילת השיחה',
        IS_REQUIRED: "is required",
        REQUIRED: "נדרש",
        REGEX_ERROR: "Please provide a valid input"
    },
    QO = "קובץ חורג ממגבלת גודל מקסימלי {MAXIMUM_FILE_UPLOAD_SIZE}",
    KO = {
        INVALID: {
            FIELD: "שדה לא חוקי"
        }
    },
    qO = {
        PLACEHOLDER: "חפש אימוג'י",
        NOT_FOUND: "אין אמוג'י שתואם את החיפוש שלך",
        ARIA_LABEL: "Emoji picker"
    },
    ZO = {
        TITLE: "דרג את השיחה שלך",
        SUBMITTED_TITLE: "תודה על שליחת הדירוג",
        PLACEHOLDER: "ספר לנו עוד..."
    },
    JO = {
        BUTTON_TEXT: "בקש תמליל שיחה",
        SEND_EMAIL_SUCCESS: "תמליל הצ'אט נשלח בהצלחה",
        SEND_EMAIL_ERROR: "היתה שגיאה, בקשה נסה שוב"
    },
    XO = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "לחץ כאן בשביל להצטרף",
            LEAVE_THE_ROOM: "עזוב את השיחה"
        }
    },
    eL = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    tL = {
        image: {
            CONTENT: "הודעת תמונה"
        },
        audio: {
            CONTENT: "הודעות קוליות"
        },
        video: {
            CONTENT: "הודעות וידאו"
        },
        file: {
            CONTENT: "קובץ מצורף"
        },
        location: {
            CONTENT: "מיקום"
        },
        fallback: {
            CONTENT: "שיתף קישור"
        }
    },
    nL = {
        REPLY_TO: "Replying to:"
    },
    rL = {
        COMPONENTS: gO,
        TEAM_AVAILABILITY: PO,
        REPLY_TIME: $O,
        DAY_NAMES: yO,
        START_CONVERSATION: UO,
        END_CONVERSATION: BO,
        CONTINUE_CONVERSATION: bO,
        YOU: YO,
        START_NEW_CONVERSATION: kO,
        VIEW_UNREAD_MESSAGES: HO,
        UNREAD_VIEW: VO,
        BUBBLE: FO,
        POWERED_BY: wO,
        EMAIL_PLACEHOLDER: WO,
        CHAT_PLACEHOLDER: GO,
        TODAY: jO,
        YESTERDAY: zO,
        PRE_CHAT_FORM: xO,
        FILE_SIZE_LIMIT: QO,
        CHAT_FORM: KO,
        EMOJI: qO,
        CSAT: ZO,
        EMAIL_TRANSCRIPT: JO,
        INTEGRATIONS: XO,
        PORTAL: eL,
        ATTACHMENTS: tL,
        FOOTER_REPLY_TO: nL
    },
    aL = {
        FILE_BUBBLE: {
            DOWNLOAD: "Download",
            UPLOADING: "Uploading..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Submit"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Send message again",
            ERROR_MESSAGE: "Couldn't send, try again"
        }
    },
    iL = {
        ONLINE: "We are online",
        OFFLINE: "We are away at the moment"
    },
    sL = {
        IN_A_FEW_MINUTES: "Typically replies in a few minutes",
        IN_A_FEW_HOURS: "Typically replies in a few hours",
        IN_A_DAY: "Typically replies in a day",
        BACK_IN: "We will be back online"
    },
    oL = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    EL = "Start Conversation",
    lL = "End Conversation",
    cL = "Continue conversation",
    uL = "You",
    AL = "Start a new conversation",
    RL = "You have unread messages",
    _L = {
        VIEW_MESSAGES_BUTTON: "See new messages",
        CLOSE_MESSAGES_BUTTON: "Close",
        COMPANY_FROM: "from",
        BOT: "Bot"
    },
    TL = {
        LABEL: "Chat with us"
    },
    OL = "Powered by Chatwoot",
    LL = "Please enter your email",
    IL = "Type your message",
    NL = "Today",
    fL = "Yesterday",
    SL = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Full Name",
                PLACEHOLDER: "Please enter your full name",
                REQUIRED_ERROR: "Full Name is required"
            },
            EMAIL_ADDRESS: {
                LABEL: "Email Address",
                PLACEHOLDER: "Please enter your email address",
                REQUIRED_ERROR: "Email Address is required",
                VALID_ERROR: "Please enter a valid email address"
            },
            PHONE_NUMBER: {
                LABEL: "Phone Number",
                PLACEHOLDER: "Please enter your phone number",
                REQUIRED_ERROR: "Phone Number is required",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "No results found",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Message",
                PLACEHOLDER: "Please enter your message",
                ERROR: "Message too short"
            }
        },
        CAMPAIGN_HEADER: "Please provide your name and email before starting the conversation",
        IS_REQUIRED: "is required",
        REQUIRED: "Required",
        REGEX_ERROR: "Please provide a valid input"
    },
    pL = "File exceeds the {MAXIMUM_FILE_UPLOAD_SIZE} attachment limit",
    dL = {
        INVALID: {
            FIELD: "Invalid field"
        }
    },
    mL = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    DL = {
        TITLE: "Rate your conversation",
        SUBMITTED_TITLE: "Thank you for submitting the rating",
        PLACEHOLDER: "Tell us more..."
    },
    CL = {
        BUTTON_TEXT: "Request a conversation transcript",
        SEND_EMAIL_SUCCESS: "The chat transcript was sent successfully",
        SEND_EMAIL_ERROR: "There was an error, please try again"
    },
    ML = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    hL = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    vL = {
        image: {
            CONTENT: "Picture message"
        },
        audio: {
            CONTENT: "Audio message"
        },
        video: {
            CONTENT: "Video message"
        },
        file: {
            CONTENT: "File Attachment"
        },
        location: {
            CONTENT: "Location"
        },
        fallback: {
            CONTENT: "has shared a url"
        }
    },
    gL = {
        REPLY_TO: "Replying to:"
    },
    PL = {
        COMPONENTS: aL,
        TEAM_AVAILABILITY: iL,
        REPLY_TIME: sL,
        DAY_NAMES: oL,
        START_CONVERSATION: EL,
        END_CONVERSATION: lL,
        CONTINUE_CONVERSATION: cL,
        YOU: uL,
        START_NEW_CONVERSATION: AL,
        VIEW_UNREAD_MESSAGES: RL,
        UNREAD_VIEW: _L,
        BUBBLE: TL,
        POWERED_BY: OL,
        EMAIL_PLACEHOLDER: LL,
        CHAT_PLACEHOLDER: IL,
        TODAY: NL,
        YESTERDAY: fL,
        PRE_CHAT_FORM: SL,
        FILE_SIZE_LIMIT: pL,
        CHAT_FORM: dL,
        EMOJI: mL,
        CSAT: DL,
        EMAIL_TRANSCRIPT: CL,
        INTEGRATIONS: ML,
        PORTAL: hL,
        ATTACHMENTS: vL,
        FOOTER_REPLY_TO: gL
    },
    $L = {
        FILE_BUBBLE: {
            DOWNLOAD: "Letöltés",
            UPLOADING: "Frissítés..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Elküldés"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Üzenet elküldése újból",
            ERROR_MESSAGE: "Nem sikerült az elküldés, kérjük próbáld később"
        }
    },
    yL = {
        ONLINE: "Online vagyunk",
        OFFLINE: "Jelenleg nem vagyunk elérhetőek"
    },
    UL = {
        IN_A_FEW_MINUTES: "Néhány percen belül válaszol",
        IN_A_FEW_HOURS: "Néhány órán belül válaszol",
        IN_A_DAY: "Általánban egy napon belül válaszol",
        BACK_IN: "Legközelebb online leszünk ekkor:"
    },
    BL = {
        SUNDAY: "vasárnap",
        MONDAY: "hétfő",
        TUESDAY: "kedd",
        WEDNESDAY: "szerda",
        THURSDAY: "csütörtök",
        FRIDAY: "péntek",
        SATURDAY: "szombat"
    },
    bL = "Beszélgetés megkezdése",
    YL = "Beszélgetés befejezése",
    kL = "Beszélgetés folytatása",
    HL = "Ön",
    VL = "Új beszélgetés megkezdése",
    FL = "Olvasatlan üzenetei vannak",
    wL = {
        VIEW_MESSAGES_BUTTON: "Új üzenetek",
        CLOSE_MESSAGES_BUTTON: "Bezárás",
        COMPANY_FROM: "innen",
        BOT: "Bot"
    },
    WL = {
        LABEL: "Chatelj velünk"
    },
    GL = "Chatwoot",
    jL = "Add meg az e-mailed",
    zL = "Gépeld be üzeneted",
    xL = "Ma",
    QL = "Tegnap",
    KL = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Teljes név",
                PLACEHOLDER: "Kérjük a teljes nevedet add meg",
                REQUIRED_ERROR: "A teljes név megadása kötelező"
            },
            EMAIL_ADDRESS: {
                LABEL: "Email cím",
                PLACEHOLDER: "Kérjük helyes e-mailcímet adj meg",
                REQUIRED_ERROR: "Email cím megadása kötelező",
                VALID_ERROR: "Kérjük helyes e-mailcímet adj meg"
            },
            PHONE_NUMBER: {
                LABEL: "Telefonszám",
                PLACEHOLDER: "Kérlek add meg a telefonszámod",
                REQUIRED_ERROR: "Telefonszám megadása kötelező",
                DIAL_CODE_VALID_ERROR: "Kérlek válassz országot",
                VALID_ERROR: "Kérlek egy valós telefonszámot adj meg",
                DROPDOWN_EMPTY: "Nincs találat",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Üzenet",
                PLACEHOLDER: "Írd be az üzeneted",
                ERROR: "Az üzenet túl rövid"
            }
        },
        CAMPAIGN_HEADER: "Kérjük a beszélgetés megkezdése előtt add meg neved és e-mail címed",
        IS_REQUIRED: "kötelező",
        REQUIRED: "Kötelező",
        REGEX_ERROR: "Please provide a valid input"
    },
    qL = "A file mérete meghaladja a {MAXIMUM_FILE_UPLOAD_SIZE} limitet",
    ZL = {
        INVALID: {
            FIELD: "Érvénytelen mező"
        }
    },
    JL = {
        PLACEHOLDER: "Emoji keresése",
        NOT_FOUND: "Nem található emoji",
        ARIA_LABEL: "Emoji picker"
    },
    XL = {
        TITLE: "Értékeld a beszélgetést",
        SUBMITTED_TITLE: "Köszönjük, hogy elküldted az értékelést",
        PLACEHOLDER: "Mondj nekünk többet..."
    },
    eI = {
        BUTTON_TEXT: "Beszélgetés kivonat igénylése",
        SEND_EMAIL_SUCCESS: "A beszélgetés jegyzet sikeresen elküldve",
        SEND_EMAIL_ERROR: "Hiba történt, kérjük próbáld újra"
    },
    tI = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Kattints ide a csatlakozáshoz",
            LEAVE_THE_ROOM: "Hívás elhagyása"
        }
    },
    nI = {
        POPULAR_ARTICLES: "Népszerű cikkek",
        VIEW_ALL_ARTICLES: "Mutasd az összes bejegyzést",
        IFRAME_LOAD_ERROR: "Hiba történt a cikk betöltése során, kérjük, frissítse az oldalt, és próbálja meg újra."
    },
    rI = {
        image: {
            CONTENT: "Képüzenet"
        },
        audio: {
            CONTENT: "Hangüzenet"
        },
        video: {
            CONTENT: "Videoüzenet"
        },
        file: {
            CONTENT: "Csatolt file"
        },
        location: {
            CONTENT: "Hely"
        },
        fallback: {
            CONTENT: "megosztott URL-t tartalmaz"
        }
    },
    aI = {
        REPLY_TO: "Válaszolva a következőre:"
    },
    iI = {
        COMPONENTS: $L,
        TEAM_AVAILABILITY: yL,
        REPLY_TIME: UL,
        DAY_NAMES: BL,
        START_CONVERSATION: bL,
        END_CONVERSATION: YL,
        CONTINUE_CONVERSATION: kL,
        YOU: HL,
        START_NEW_CONVERSATION: VL,
        VIEW_UNREAD_MESSAGES: FL,
        UNREAD_VIEW: wL,
        BUBBLE: WL,
        POWERED_BY: GL,
        EMAIL_PLACEHOLDER: jL,
        CHAT_PLACEHOLDER: zL,
        TODAY: xL,
        YESTERDAY: QL,
        PRE_CHAT_FORM: KL,
        FILE_SIZE_LIMIT: qL,
        CHAT_FORM: ZL,
        EMOJI: JL,
        CSAT: XL,
        EMAIL_TRANSCRIPT: eI,
        INTEGRATIONS: tI,
        PORTAL: nI,
        ATTACHMENTS: rI,
        FOOTER_REPLY_TO: aI
    },
    sI = {
        FILE_BUBBLE: {
            DOWNLOAD: "Unduh",
            UPLOADING: "Mengunggah..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Kirim"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Kirim pesan lagi",
            ERROR_MESSAGE: "Tidak dapat mengirim, coba lagi"
        }
    },
    oI = {
        ONLINE: "Kami sedang online",
        OFFLINE: "Kami sedang tidak tersedia saat ini"
    },
    EI = {
        IN_A_FEW_MINUTES: "Biasanya membalas dalam beberapa menit",
        IN_A_FEW_HOURS: "Biasanya membalas dalam beberapa jam",
        IN_A_DAY: "Biasanya membalas dalam sehari",
        BACK_IN: "Kami akan kembali online"
    },
    lI = {
        SUNDAY: "Minggu",
        MONDAY: "Senin",
        TUESDAY: "Selasa",
        WEDNESDAY: "Rabu",
        THURSDAY: "Kamis",
        FRIDAY: "Jumat",
        SATURDAY: "Sabtu"
    },
    cI = "Mulai Percakapan",
    uI = "Akhiri Percakapan",
    AI = "Lanjutkan Percakapan",
    RI = "Anda",
    _I = "Mulai Percakapan",
    TI = "Anda memiliki pesan yang belum dibaca",
    OI = {
        VIEW_MESSAGES_BUTTON: "Lihat pesan baru",
        CLOSE_MESSAGES_BUTTON: "Tutup",
        COMPANY_FROM: "dari",
        BOT: "Bot"
    },
    LI = {
        LABEL: "Chat dengan kami"
    },
    II = "Powered by Chatwoot",
    NI = "Masukkan email Anda",
    fI = "Ketik pesan Anda",
    SI = "Hari ini",
    pI = "Kemarin",
    dI = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nama Lengkap",
                PLACEHOLDER: "Harap masukkan nama lengkap anda yang valid",
                REQUIRED_ERROR: "Nama Lengkap dibutuhkan"
            },
            EMAIL_ADDRESS: {
                LABEL: "Alamat email",
                PLACEHOLDER: "Harap masukkan alamat email Anda",
                REQUIRED_ERROR: "Alamat Email dibutuhkan",
                VALID_ERROR: "Harap masukkan alamat email yang valid"
            },
            PHONE_NUMBER: {
                LABEL: "Nomor Telpon",
                PLACEHOLDER: "Masukan Nomor Telepon",
                REQUIRED_ERROR: "Nomor Telepon Dibutuhkan",
                DIAL_CODE_VALID_ERROR: "Silakan pilih kode negara",
                VALID_ERROR: "Mohon berikan nomor telepon yang valid",
                DROPDOWN_EMPTY: "Tidak ada hasil ditemukan",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Pesan",
                PLACEHOLDER: "Harap masukkan pesan Anda",
                ERROR: "Pesan terlalu pendek"
            }
        },
        CAMPAIGN_HEADER: "Silahkan input nama dan email anda sebelum memulai percakapan",
        IS_REQUIRED: "dibutuhkan",
        REQUIRED: "Diperlukan",
        REGEX_ERROR: "Tolong berikan masukan yang tepat"
    },
    mI = "File melebihi batas {MAXIMUM_FILE_UPLOAD_SIZE} lampiran",
    DI = {
        INVALID: {
            FIELD: "Kolom tidak valid"
        }
    },
    CI = {
        PLACEHOLDER: "Cari emoji",
        NOT_FOUND: "Tidak ada emoji yang cocok dengan penelusuran anda",
        ARIA_LABEL: "Emoji picker"
    },
    MI = {
        TITLE: "Nilai percakapan anda",
        SUBMITTED_TITLE: "Terima kasih telah mengirimkan penilaian",
        PLACEHOLDER: "Beritahu kami lebih lanjut..."
    },
    hI = {
        BUTTON_TEXT: "Minta transkrip percakapan",
        SEND_EMAIL_SUCCESS: "Transkrip percakapan berhasil terkirim",
        SEND_EMAIL_ERROR: "Terjadi kesalahan, harap coba lagi"
    },
    vI = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Klik disini untuk join",
            LEAVE_THE_ROOM: "Tinggalkan panggilan"
        }
    },
    gI = {
        POPULAR_ARTICLES: "Artikel Populer",
        VIEW_ALL_ARTICLES: "Lihat semua artikel",
        IFRAME_LOAD_ERROR: "Terjadi kesalahan saat memuat artikel, harap muat ulang halaman dan coba lagi."
    },
    PI = {
        image: {
            CONTENT: "Pesan gambar"
        },
        audio: {
            CONTENT: "Pesan audio"
        },
        video: {
            CONTENT: "Pesan video"
        },
        file: {
            CONTENT: "Lampiran File"
        },
        location: {
            CONTENT: "Lokasi"
        },
        fallback: {
            CONTENT: "telah membagikan url"
        }
    },
    $I = {
        REPLY_TO: "Replying to:"
    },
    yI = {
        COMPONENTS: sI,
        TEAM_AVAILABILITY: oI,
        REPLY_TIME: EI,
        DAY_NAMES: lI,
        START_CONVERSATION: cI,
        END_CONVERSATION: uI,
        CONTINUE_CONVERSATION: AI,
        YOU: RI,
        START_NEW_CONVERSATION: _I,
        VIEW_UNREAD_MESSAGES: TI,
        UNREAD_VIEW: OI,
        BUBBLE: LI,
        POWERED_BY: II,
        EMAIL_PLACEHOLDER: NI,
        CHAT_PLACEHOLDER: fI,
        TODAY: SI,
        YESTERDAY: pI,
        PRE_CHAT_FORM: dI,
        FILE_SIZE_LIMIT: mI,
        CHAT_FORM: DI,
        EMOJI: CI,
        CSAT: MI,
        EMAIL_TRANSCRIPT: hI,
        INTEGRATIONS: vI,
        PORTAL: gI,
        ATTACHMENTS: PI,
        FOOTER_REPLY_TO: $I
    },
    UI = {
        FILE_BUBBLE: {
            DOWNLOAD: "Sækja",
            UPLOADING: "Hleður upp..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Senda"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Endursenda skilaboð",
            ERROR_MESSAGE: "Tókst ekki að senda skilaboðin, reyndu aftur"
        }
    },
    BI = {
        ONLINE: "Við erum tengd",
        OFFLINE: "Það er enginn við í augnablikinu"
    },
    bI = {
        IN_A_FEW_MINUTES: "Svarar iðulega innan nokkura mínútna",
        IN_A_FEW_HOURS: "Svarar iðulega innan nokkura klukkustunda",
        IN_A_DAY: "Svarar iðulega samdægurs",
        BACK_IN: "We will be back online"
    },
    YI = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    kI = "Hefja samtal",
    HI = "Ljúka samtali",
    VI = "Halda samtali áfram",
    FI = "You",
    wI = "Hefja nýtt samtal",
    WI = "You have unread messages",
    GI = {
        VIEW_MESSAGES_BUTTON: "Sjá nýjustu skilaboð",
        CLOSE_MESSAGES_BUTTON: "Loka",
        COMPANY_FROM: "frá",
        BOT: "Spjallmenni"
    },
    jI = {
        LABEL: "Spjallaðu við okkur"
    },
    zI = "Keyrt af Chatwoot",
    xI = "Vinsamlegast sláðu inn netfangið þitt",
    QI = "Skrifaðu skilaboðin hér",
    KI = "Í dag",
    qI = "Í gær",
    ZI = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Fullt nafn",
                PLACEHOLDER: "Vinsamlegast sláðu inn nafnið þitt",
                REQUIRED_ERROR: "Það verður að skrifa fullt nafn"
            },
            EMAIL_ADDRESS: {
                LABEL: "Netfang",
                PLACEHOLDER: "Vinsamlegast sláðu inn netfangið þitt",
                REQUIRED_ERROR: "Það verður að skrifa netfang",
                VALID_ERROR: "Það verður að skrifa gilt netfang"
            },
            PHONE_NUMBER: {
                LABEL: "Símanúmer",
                PLACEHOLDER: "Vinsamlegast sláðu inn símanúmerið þitt",
                REQUIRED_ERROR: "Það verður að skrifa símanúmer",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "Engar niðurstöður fundust",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Skilaboð",
                PLACEHOLDER: "Vinsamlegast sláðu inn skilaboð",
                ERROR: "Skilaboðin eru of stutt"
            }
        },
        CAMPAIGN_HEADER: "Vinsamlegast sláðu inn nafn og netfang áður en samtalið hefst",
        IS_REQUIRED: "er nauðsynlegt",
        REQUIRED: "Nauðsynlegt",
        REGEX_ERROR: "Please provide a valid input"
    },
    JI = "Skráin fer framyfir hámarksstærð viðhengja ({MAXIMUM_FILE_UPLOAD_SIZE})",
    XI = {
        INVALID: {
            FIELD: "Ógildur reitur"
        }
    },
    eN = {
        PLACEHOLDER: "Leita að emoji",
        NOT_FOUND: "Enginn emoji fannst",
        ARIA_LABEL: "Emoji picker"
    },
    tN = {
        TITLE: "Gefðu samtalinu einkunn",
        SUBMITTED_TITLE: "Takk fyrir að gefa samtalinu einkunn",
        PLACEHOLDER: "Segðu okkur meira..."
    },
    nN = {
        BUTTON_TEXT: "Biðja um afrit af samtalinu",
        SEND_EMAIL_SUCCESS: "Afritið af samtalinu var sent",
        SEND_EMAIL_ERROR: "Það kom upp villa, vinsamlegast reyndur aftur"
    },
    rN = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Smelltu hér til að taka þátt",
            LEAVE_THE_ROOM: "Yfirgefa símtalið"
        }
    },
    aN = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    iN = {
        image: {
            CONTENT: "Myndaskilaboð"
        },
        audio: {
            CONTENT: "Hljóðskilaboð"
        },
        video: {
            CONTENT: "Myndbandsskilaboð"
        },
        file: {
            CONTENT: "File Attachment"
        },
        location: {
            CONTENT: "Staðsetning"
        },
        fallback: {
            CONTENT: "hefur deilt vefslóð"
        }
    },
    sN = {
        REPLY_TO: "Replying to:"
    },
    oN = {
        COMPONENTS: UI,
        TEAM_AVAILABILITY: BI,
        REPLY_TIME: bI,
        DAY_NAMES: YI,
        START_CONVERSATION: kI,
        END_CONVERSATION: HI,
        CONTINUE_CONVERSATION: VI,
        YOU: FI,
        START_NEW_CONVERSATION: wI,
        VIEW_UNREAD_MESSAGES: WI,
        UNREAD_VIEW: GI,
        BUBBLE: jI,
        POWERED_BY: zI,
        EMAIL_PLACEHOLDER: xI,
        CHAT_PLACEHOLDER: QI,
        TODAY: KI,
        YESTERDAY: qI,
        PRE_CHAT_FORM: ZI,
        FILE_SIZE_LIMIT: JI,
        CHAT_FORM: XI,
        EMOJI: eN,
        CSAT: tN,
        EMAIL_TRANSCRIPT: nN,
        INTEGRATIONS: rN,
        PORTAL: aN,
        ATTACHMENTS: iN,
        FOOTER_REPLY_TO: sN
    },
    EN = {
        FILE_BUBBLE: {
            DOWNLOAD: "Download",
            UPLOADING: "Caricamento..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Invia"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Invia di nuovo il messaggio",
            ERROR_MESSAGE: "Impossibile inviare, riprova"
        }
    },
    lN = {
        ONLINE: "Siamo online",
        OFFLINE: "Siamo offline in questo momento"
    },
    cN = {
        IN_A_FEW_MINUTES: "In genere risponde in pochi minuti",
        IN_A_FEW_HOURS: "In genere risponde in poche ore",
        IN_A_DAY: "In genere risponde in un giorno",
        BACK_IN: "We will be back online"
    },
    uN = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    AN = "Avvia conversazione",
    RN = "Termina conversazione",
    _N = "Continua conversazione",
    TN = "You",
    ON = "Avvia una nuova conversazione",
    LN = "You have unread messages",
    IN = {
        VIEW_MESSAGES_BUTTON: "Vedi i nuovi messaggi",
        CLOSE_MESSAGES_BUTTON: "Chiudi",
        COMPANY_FROM: "da",
        BOT: "Bot"
    },
    NN = {
        LABEL: "Chatta con noi"
    },
    fN = "Offerto da Chatwoot",
    SN = "Inserisci la tua email",
    pN = "Scrivi il tuo messaggio",
    dN = "Oggi",
    mN = "Ieri",
    DN = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nome completo",
                PLACEHOLDER: "Per favore inserisci il tuo nome completo",
                REQUIRED_ERROR: "Il nome completo è obbligatorio"
            },
            EMAIL_ADDRESS: {
                LABEL: "Indirizzo email",
                PLACEHOLDER: "Inserisci il tuo indirizzo email",
                REQUIRED_ERROR: "L'indirizzo email è obbligatorio",
                VALID_ERROR: "Inserisci un indirizzo email valido"
            },
            PHONE_NUMBER: {
                LABEL: "Numero di telefono",
                PLACEHOLDER: "Inserisci il tuo numero di telefono",
                REQUIRED_ERROR: "Il numero di telefono è obbligatorio",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "Nessun risultato trovato",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Messaggio",
                PLACEHOLDER: "Per favore inserisci il tuo messaggio",
                ERROR: "Messaggio troppo corto"
            }
        },
        CAMPAIGN_HEADER: "Per favore inserisci il tuo nome ed email prima di iniziare la conversazione",
        IS_REQUIRED: "è obbligatorio",
        REQUIRED: "Obbligatorio",
        REGEX_ERROR: "Please provide a valid input"
    },
    CN = "Il file supera il limite di {MAXIMUM_FILE_UPLOAD_SIZE} per poter essere allegato",
    MN = {
        INVALID: {
            FIELD: "Campo non valido"
        }
    },
    hN = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    vN = {
        TITLE: "Valuta la conversazione",
        SUBMITTED_TITLE: "Grazie per aver inviato la valutazione",
        PLACEHOLDER: "Raccontaci di più..."
    },
    gN = {
        BUTTON_TEXT: "Richiedi la trascrizione della conversazione",
        SEND_EMAIL_SUCCESS: "La trascrizione della chat è stata inviata con successo",
        SEND_EMAIL_ERROR: "Si è verificato un errore, riprova"
    },
    PN = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    $N = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    yN = {
        image: {
            CONTENT: "Messaggio immagine"
        },
        audio: {
            CONTENT: "Messaggio audio"
        },
        video: {
            CONTENT: "Messaggio video"
        },
        file: {
            CONTENT: "File allegato"
        },
        location: {
            CONTENT: "Posizione"
        },
        fallback: {
            CONTENT: "ha condiviso un url"
        }
    },
    UN = {
        REPLY_TO: "Replying to:"
    },
    BN = {
        COMPONENTS: EN,
        TEAM_AVAILABILITY: lN,
        REPLY_TIME: cN,
        DAY_NAMES: uN,
        START_CONVERSATION: AN,
        END_CONVERSATION: RN,
        CONTINUE_CONVERSATION: _N,
        YOU: TN,
        START_NEW_CONVERSATION: ON,
        VIEW_UNREAD_MESSAGES: LN,
        UNREAD_VIEW: IN,
        BUBBLE: NN,
        POWERED_BY: fN,
        EMAIL_PLACEHOLDER: SN,
        CHAT_PLACEHOLDER: pN,
        TODAY: dN,
        YESTERDAY: mN,
        PRE_CHAT_FORM: DN,
        FILE_SIZE_LIMIT: CN,
        CHAT_FORM: MN,
        EMOJI: hN,
        CSAT: vN,
        EMAIL_TRANSCRIPT: gN,
        INTEGRATIONS: PN,
        PORTAL: $N,
        ATTACHMENTS: yN,
        FOOTER_REPLY_TO: UN
    },
    bN = {
        FILE_BUBBLE: {
            DOWNLOAD: "ダウンロード",
            UPLOADING: "アップロード中..."
        },
        FORM_BUBBLE: {
            SUBMIT: "送信"
        },
        MESSAGE_BUBBLE: {
            RETRY: "メッセージを再送信",
            ERROR_MESSAGE: "送信できませんでした。もう一度お試しください"
        }
    },
    YN = {
        ONLINE: "オンライン",
        OFFLINE: "留守中"
    },
    kN = {
        IN_A_FEW_MINUTES: "通常数分以内にご返信します。",
        IN_A_FEW_HOURS: "通常数時間以内にご返信します。",
        IN_A_DAY: "通常数日以内にご返信します。",
        BACK_IN: "オンラインに戻ります"
    },
    HN = {
        SUNDAY: "日",
        MONDAY: "月",
        TUESDAY: "火",
        WEDNESDAY: "水",
        THURSDAY: "木",
        FRIDAY: "金",
        SATURDAY: "土"
    },
    VN = "チャットを開始する",
    FN = "会話を終了",
    wN = "会話を続行",
    WN = "あなた",
    GN = "新しいチャットを開始する",
    jN = "未読メッセージがあります",
    zN = {
        VIEW_MESSAGES_BUTTON: "新しいメッセージを見る",
        CLOSE_MESSAGES_BUTTON: "閉じる",
        COMPANY_FROM: "送信元",
        BOT: "ボット"
    },
    xN = {
        LABEL: "チャットをする"
    },
    QN = "提供：Chatwoot",
    KN = "メールアドレスを入力してください。",
    qN = "メッセージを入力してください。",
    ZN = "今日",
    JN = "昨日",
    XN = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "フルネーム",
                PLACEHOLDER: "氏名を入力してください。",
                REQUIRED_ERROR: "お名前を入力してください"
            },
            EMAIL_ADDRESS: {
                LABEL: "Eメールアドレス",
                PLACEHOLDER: "メールアドレスを入力してください",
                REQUIRED_ERROR: "メールアドレスは必須です",
                VALID_ERROR: "正しいメールアドレスを入力してください"
            },
            PHONE_NUMBER: {
                LABEL: "電話番号",
                PLACEHOLDER: "電話番号を入力してください",
                REQUIRED_ERROR: "電話番号は必須です",
                DIAL_CODE_VALID_ERROR: "国コードを選択してください",
                VALID_ERROR: "有効な電話番号を入力してください",
                DROPDOWN_EMPTY: "該当する結果が見つかりません",
                DROPDOWN_SEARCH: "国を検索"
            },
            MESSAGE: {
                LABEL: "メッセージ",
                PLACEHOLDER: "メッセージを入力してください",
                ERROR: "メッセージが短すぎます"
            }
        },
        CAMPAIGN_HEADER: "会話を開始する前にお名前とメールアドレスを入力してください",
        IS_REQUIRED: "は必須です",
        REQUIRED: "必須",
        REGEX_ERROR: "有効な入力を提供してください"
    },
    ef = "添付ファイルサイズが上限 {MAXIMUM_FILE_UPLOAD_SIZE} を超えています",
    tf = {
        INVALID: {
            FIELD: "無効なフィールド"
        }
    },
    nf = {
        PLACEHOLDER: "絵文字を検索",
        NOT_FOUND: "検索条件に一致する絵文字がありません",
        ARIA_LABEL: "絵文字選択"
    },
    rf = {
        TITLE: "会話の評価",
        SUBMITTED_TITLE: "評価を送信いただきありがとうございます",
        PLACEHOLDER: "詳細を教えてください..."
    },
    af = {
        BUTTON_TEXT: "会話の履歴をメールで受け取る",
        SEND_EMAIL_SUCCESS: "チャットの記録が正常に送信されました",
        SEND_EMAIL_ERROR: "エラーが発生しました。もう一度お試しください。"
    },
    sf = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "ここをクリックして参加",
            LEAVE_THE_ROOM: "通話を退出"
        }
    },
    of = {
        POPULAR_ARTICLES: "よくある質問",
        VIEW_ALL_ARTICLES: "すべてのヘルプを表示",
        IFRAME_LOAD_ERROR: "記事の読み込み中にエラーが発生しました。ページを更新して再試行してください。"
    },
    Ef = {
        image: {
            CONTENT: "画像メッセージ"
        },
        audio: {
            CONTENT: "音声メッセージ"
        },
        video: {
            CONTENT: "ビデオメッセージ"
        },
        file: {
            CONTENT: "添付ファイル"
        },
        location: {
            CONTENT: "場所"
        },
        fallback: {
            CONTENT: "URLを共有しています"
        }
    },
    lf = {
        REPLY_TO: "返信先："
    },
    cf = {
        COMPONENTS: bN,
        TEAM_AVAILABILITY: YN,
        REPLY_TIME: kN,
        DAY_NAMES: HN,
        START_CONVERSATION: VN,
        END_CONVERSATION: FN,
        CONTINUE_CONVERSATION: wN,
        YOU: WN,
        START_NEW_CONVERSATION: GN,
        VIEW_UNREAD_MESSAGES: jN,
        UNREAD_VIEW: zN,
        BUBBLE: xN,
        POWERED_BY: QN,
        EMAIL_PLACEHOLDER: KN,
        CHAT_PLACEHOLDER: qN,
        TODAY: ZN,
        YESTERDAY: JN,
        PRE_CHAT_FORM: XN,
        FILE_SIZE_LIMIT: ef,
        CHAT_FORM: tf,
        EMOJI: nf,
        CSAT: rf,
        EMAIL_TRANSCRIPT: af,
        INTEGRATIONS: sf,
        PORTAL: of ,
        ATTACHMENTS: Ef,
        FOOTER_REPLY_TO: lf
    },
    uf = {
        FILE_BUBBLE: {
            DOWNLOAD: "다운로드",
            UPLOADING: "업로드 중..."
        },
        FORM_BUBBLE: {
            SUBMIT: "보내기"
        },
        MESSAGE_BUBBLE: {
            RETRY: "메시지 다시 보내기",
            ERROR_MESSAGE: "전송하지 못했습니다. 다시 시도해보세요."
        }
    },
    Af = {
        ONLINE: "온라인",
        OFFLINE: "부재중"
    },
    Rf = {
        IN_A_FEW_MINUTES: "보통 몇 분 안에 응답",
        IN_A_FEW_HOURS: "보통 몇 시간 내에 응답",
        IN_A_DAY: "보통 하루 안에 응답",
        BACK_IN: "곧 돌아오겠습니다."
    },
    _f = {
        SUNDAY: "일요일",
        MONDAY: "월요일",
        TUESDAY: "화요일",
        WEDNESDAY: "수요일",
        THURSDAY: "목요일",
        FRIDAY: "금요일",
        SATURDAY: "토요일"
    },
    Tf = "대화 시작",
    Of = "대화 끝내기",
    Lf = "대화 계속하기",
    If = "나",
    Nf = "새 대화 시작하기",
    ff = "읽지 않은 메시지가 있습니다",
    Sf = {
        VIEW_MESSAGES_BUTTON: "새 메시지 보기",
        CLOSE_MESSAGES_BUTTON: "닫기",
        COMPANY_FROM: "에서",
        BOT: "봇"
    },
    pf = {
        LABEL: "채팅하기"
    },
    df = "Chatwoot 작동중",
    mf = "이메일을 입력해주세요.",
    Df = "메시지 입력",
    Cf = "오늘",
    Mf = "어제",
    hf = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "전체 이름",
                PLACEHOLDER: "전체 이름을 입력하십시오.",
                REQUIRED_ERROR: "이름은 필수입니다."
            },
            EMAIL_ADDRESS: {
                LABEL: "이메일 주소",
                PLACEHOLDER: "이메일을 입력해주세요.",
                REQUIRED_ERROR: "이메일 주소는 필수입니다.",
                VALID_ERROR: "올바른 전자 메일 주소를 입력하십시오."
            },
            PHONE_NUMBER: {
                LABEL: "전화 번호",
                PLACEHOLDER: "휴대전화 번호를 입력하세요.",
                REQUIRED_ERROR: "휴대전화 번호는 필수입니다.",
                DIAL_CODE_VALID_ERROR: "국가 코드를 선택하세요.",
                VALID_ERROR: "올바른 휴대전화 번호를 입력하세요.",
                DROPDOWN_EMPTY: "검색 결과가 없습니다",
                DROPDOWN_SEARCH: "국가 검색"
            },
            MESSAGE: {
                LABEL: "메시지",
                PLACEHOLDER: "메시지를 입력해 주세요.",
                ERROR: "너무 짧은 메시지"
            }
        },
        CAMPAIGN_HEADER: "대화를 시작하기 전에 이름과 이메일을 알려주세요",
        IS_REQUIRED: "(은)는 필수입니다.",
        REQUIRED: "필수",
        REGEX_ERROR: "올바른 값을 입력하세요."
    },
    vf = "첨부파일이 최대 {MAXIMUM_FILE_UPLOAD_SIZE} 용량 제한을 넘어섭니다.",
    gf = {
        INVALID: {
            FIELD: "잘못된 입력"
        }
    },
    Pf = {
        PLACEHOLDER: "이모지 검색",
        NOT_FOUND: "검색과 일치하는 이모지 없음",
        ARIA_LABEL: "이모지 선택기"
    },
    $f = {
        TITLE: "대화를 평가해주세요.",
        SUBMITTED_TITLE: "평가해주셔서 감사합니다!",
        PLACEHOLDER: "더 알려주세요..."
    },
    yf = {
        BUTTON_TEXT: "대화 내용 요청하기",
        SEND_EMAIL_SUCCESS: "대화 내용이 성공적으로 전송됨",
        SEND_EMAIL_ERROR: "오류가 발생했습니다. 다시 시도하십시오."
    },
    Uf = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "클릭해서 참여하기",
            LEAVE_THE_ROOM: "전화 종료"
        }
    },
    Bf = {
        POPULAR_ARTICLES: "인기 문서",
        VIEW_ALL_ARTICLES: "모든 문서 보기",
        IFRAME_LOAD_ERROR: "문서를 불러오는 중 오류가 발생했습니다. 페이지를 새로고침 한 후 다시 시도해 주세요."
    },
    bf = {
        image: {
            CONTENT: "사진 메시지"
        },
        audio: {
            CONTENT: "음성 메시지"
        },
        video: {
            CONTENT: "영상 메시지"
        },
        file: {
            CONTENT: "파일 첨부"
        },
        location: {
            CONTENT: "장소"
        },
        fallback: {
            CONTENT: "URL을 공유함"
        }
    },
    Yf = {
        REPLY_TO: "답장:"
    },
    kf = {
        COMPONENTS: uf,
        TEAM_AVAILABILITY: Af,
        REPLY_TIME: Rf,
        DAY_NAMES: _f,
        START_CONVERSATION: Tf,
        END_CONVERSATION: Of,
        CONTINUE_CONVERSATION: Lf,
        YOU: If,
        START_NEW_CONVERSATION: Nf,
        VIEW_UNREAD_MESSAGES: ff,
        UNREAD_VIEW: Sf,
        BUBBLE: pf,
        POWERED_BY: df,
        EMAIL_PLACEHOLDER: mf,
        CHAT_PLACEHOLDER: Df,
        TODAY: Cf,
        YESTERDAY: Mf,
        PRE_CHAT_FORM: hf,
        FILE_SIZE_LIMIT: vf,
        CHAT_FORM: gf,
        EMOJI: Pf,
        CSAT: $f,
        EMAIL_TRANSCRIPT: yf,
        INTEGRATIONS: Uf,
        PORTAL: Bf,
        ATTACHMENTS: bf,
        FOOTER_REPLY_TO: Yf
    },
    Hf = {
        FILE_BUBBLE: {
            DOWNLOAD: "Parsisiųsti",
            UPLOADING: "Įkeliama..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Pateikti"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Siųsti žinutę dar kartą",
            ERROR_MESSAGE: "Nepavyko išsiųsti! bandykite dar kartą"
        }
    },
    Vf = {
        ONLINE: "Mes prisijungę",
        OFFLINE: "Šiuo metu esame atsijungę"
    },
    Ff = {
        IN_A_FEW_MINUTES: "Paprastai atsako per kelias minutes",
        IN_A_FEW_HOURS: "Paprastai atsako per kelias valandas",
        IN_A_DAY: "Paprastai atsako per dieną",
        BACK_IN: "Mes grįšime"
    },
    wf = {
        SUNDAY: "Sekmadienis",
        MONDAY: "Pirmadienis",
        TUESDAY: "Antradienis",
        WEDNESDAY: "Trečiadienis",
        THURSDAY: "Ketvirtadienis",
        FRIDAY: "Penktadienis",
        SATURDAY: "Šeštadienis"
    },
    Wf = "Pradėti Pokalbį",
    Gf = "Užbaigti Pokalbį",
    jf = "Tęsti pokalbį",
    zf = "Jūs",
    xf = "Pradėti naują pokalbį",
    Qf = "Turite neperskaitytų pranešimų",
    Kf = {
        VIEW_MESSAGES_BUTTON: "Žiūrėti naujus pranešimus",
        CLOSE_MESSAGES_BUTTON: "Uždaryti",
        COMPANY_FROM: "nuo",
        BOT: "Botas"
    },
    qf = {
        LABEL: "Pabendraukite su mumis"
    },
    Zf = "Parengta pagal Chatwoot",
    Jf = "Prašau įveskite jūsų el. paštą",
    Xf = "Parašykite pranešimą",
    eS = "Šiandien",
    tS = "Vakar",
    nS = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Pilnas vardas",
                PLACEHOLDER: "Prašau įveskite jūsų pilną vardą",
                REQUIRED_ERROR: "Yra reikalingas pilnas vardas"
            },
            EMAIL_ADDRESS: {
                LABEL: "El. pašto adresas",
                PLACEHOLDER: "Prašau įveskite jūsų el. pašto adresą",
                REQUIRED_ERROR: "El. pašto Adresas yra reikalingas",
                VALID_ERROR: "Prašau įveskite teisingą el. pašto adresą"
            },
            PHONE_NUMBER: {
                LABEL: "Telefono numeris",
                PLACEHOLDER: "Prašau įveskite jūsų telefono numerį",
                REQUIRED_ERROR: "Telefono Numeris yra reikalingas",
                DIAL_CODE_VALID_ERROR: "Prašome pasirinkti šalies kodą",
                VALID_ERROR: "Prašau įveskite teisingą telefono numerį",
                DROPDOWN_EMPTY: "Nieko nerasta",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Žinutė",
                PLACEHOLDER: "Prašau įveskite jūsų pranešimą",
                ERROR: "Pranešimas pertrumpas"
            }
        },
        CAMPAIGN_HEADER: "Prieš pradėdami pokalbį nurodykite savo vardą ir el. pašto adresą",
        IS_REQUIRED: "reikalingas",
        REQUIRED: "Reikalingas",
        REGEX_ERROR: "Please provide a valid input"
    },
    rS = "Failas viršija {MAXIMUM_FILE_UPLOAD_SIZE} apribojimą",
    aS = {
        INVALID: {
            FIELD: "Neteisingas laukas"
        }
    },
    iS = {
        PLACEHOLDER: "Ieškoti emodžių",
        NOT_FOUND: "Jūsų paieška neatitinka jokių emodži",
        ARIA_LABEL: "Emoji picker"
    },
    sS = {
        TITLE: "Įvertinkite savo pokalbį",
        SUBMITTED_TITLE: "Dėkojame, kad pateikėte įvertinimą",
        PLACEHOLDER: "Papasakokit detaliau..."
    },
    oS = {
        BUTTON_TEXT: "Prašyti pokalbio stenogramos",
        SEND_EMAIL_SUCCESS: "Pokalbio stenograma sėkmingai išsiųsta",
        SEND_EMAIL_ERROR: "Įvyko klaida, prašau pabandykite dar kartą"
    },
    ES = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Spausti čia kad prisijungti",
            LEAVE_THE_ROOM: "Išeiti iš skambučio"
        }
    },
    lS = {
        POPULAR_ARTICLES: "Populiarūs straipsniai",
        VIEW_ALL_ARTICLES: "Žiūrėti visus straipsnius",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    cS = {
        image: {
            CONTENT: "Vaizdinė žinutė"
        },
        audio: {
            CONTENT: "Garso žinutė"
        },
        video: {
            CONTENT: "Video žinutė"
        },
        file: {
            CONTENT: "Failas pridėtas"
        },
        location: {
            CONTENT: "Vieta"
        },
        fallback: {
            CONTENT: "pasidalino URL"
        }
    },
    uS = {
        REPLY_TO: "Atsakant į:"
    },
    AS = {
        COMPONENTS: Hf,
        TEAM_AVAILABILITY: Vf,
        REPLY_TIME: Ff,
        DAY_NAMES: wf,
        START_CONVERSATION: Wf,
        END_CONVERSATION: Gf,
        CONTINUE_CONVERSATION: jf,
        YOU: zf,
        START_NEW_CONVERSATION: xf,
        VIEW_UNREAD_MESSAGES: Qf,
        UNREAD_VIEW: Kf,
        BUBBLE: qf,
        POWERED_BY: Zf,
        EMAIL_PLACEHOLDER: Jf,
        CHAT_PLACEHOLDER: Xf,
        TODAY: eS,
        YESTERDAY: tS,
        PRE_CHAT_FORM: nS,
        FILE_SIZE_LIMIT: rS,
        CHAT_FORM: aS,
        EMOJI: iS,
        CSAT: sS,
        EMAIL_TRANSCRIPT: oS,
        INTEGRATIONS: ES,
        PORTAL: lS,
        ATTACHMENTS: cS,
        FOOTER_REPLY_TO: uS
    },
    RS = {
        FILE_BUBBLE: {
            DOWNLOAD: "Lejupielādēt",
            UPLOADING: "Notiek Augšupielāde..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Iesniegt"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Sūtīt ziņojumu vēlreiz",
            ERROR_MESSAGE: "Nevarēja nosūtīt. Lūdzu, mēģiniet vēlreiz"
        }
    },
    _S = {
        ONLINE: "Mēs esam tiešsaistē",
        OFFLINE: "Šobrīd mēs neesam uz vietas"
    },
    TS = {
        IN_A_FEW_MINUTES: "Parasti atbild pēc dažām minūtēm",
        IN_A_FEW_HOURS: "Parasti atbild pēc dažām stundām",
        IN_A_DAY: "Parasti atbild vienas dienas laikā",
        BACK_IN: "Mēs atgriezīsimies tiešsaistē"
    },
    OS = {
        SUNDAY: "Svētdiena",
        MONDAY: "Pirmdiena",
        TUESDAY: "Otrdiena",
        WEDNESDAY: "Trešdiena",
        THURSDAY: "Ceturtdiena",
        FRIDAY: "Piektdiena",
        SATURDAY: "Sestdiena"
    },
    LS = "Sākt Sarunu",
    IS = "Beigt Sarunu",
    NS = "Turpināt Sarunu",
    fS = "Jūs",
    SS = "Sākt jaunu sarunu",
    pS = "Jums ir nelasītas ziņas",
    dS = {
        VIEW_MESSAGES_BUTTON: "Skatīt jaunus ziņojumus",
        CLOSE_MESSAGES_BUTTON: "Aizvērt",
        COMPANY_FROM: "no",
        BOT: "Bot"
    },
    mS = {
        LABEL: "Tērzēt ar mums"
    },
    DS = "Darbināts ar Chatwoot",
    CS = "Lūdzu, ievadiet savu e-pastu",
    MS = "Rakstiet savu ziņojumu",
    hS = "Šodien",
    vS = "Vakar",
    gS = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Pilns Vārds",
                PLACEHOLDER: "Lūdzu, ievadiet savu pilno vārdu",
                REQUIRED_ERROR: "Nepieciešams pilns vārds"
            },
            EMAIL_ADDRESS: {
                LABEL: "e-pasta Adrese",
                PLACEHOLDER: "Lūdzu ievadiet savu e-pasta adresi",
                REQUIRED_ERROR: "Nepieciešama e -pasta adrese",
                VALID_ERROR: "Lūdzu, ievadiet derīgu e-pasta adresi"
            },
            PHONE_NUMBER: {
                LABEL: "Telefona numurs",
                PLACEHOLDER: "Lūdzu, ievadiet savu tālruņa numuru",
                REQUIRED_ERROR: "Nepieciešams tālruņa numurs",
                DIAL_CODE_VALID_ERROR: "Lūdzu, izvēlieties valsts kodu",
                VALID_ERROR: "Lūdzu ievadiet derīgu telefona numuru",
                DROPDOWN_EMPTY: "Nav atrasts",
                DROPDOWN_SEARCH: "Meklēt valsti"
            },
            MESSAGE: {
                LABEL: "Ziņojums",
                PLACEHOLDER: "Lūdzu, ievadiet savu ziņojumu",
                ERROR: "Ziņojums ir pārāk īss"
            }
        },
        CAMPAIGN_HEADER: "Lūdzu, pirms sarunas sākšanas, norādiet savu vārdu un e -pastu",
        IS_REQUIRED: "ir nepieciešams",
        REQUIRED: "Nepieciešams",
        REGEX_ERROR: "Lūdzu, ievadiet pareizi"
    },
    PS = "Fails pārsniedz {MAXIMUM_FILE_UPLOAD_SIZE} pielikuma lieluma ierobežojumu",
    $S = {
        INVALID: {
            FIELD: "Nederīgs lauks"
        }
    },
    yS = {
        PLACEHOLDER: "Meklēt emocijzīmes",
        NOT_FOUND: "Neviena emocijzīme neatbilst jūsu meklēšanas vaicājumam",
        ARIA_LABEL: "Emocijzīmju atlasītājs"
    },
    US = {
        TITLE: "Novērtējiet Jūsu sarunu",
        SUBMITTED_TITLE: "Paldies, ka iesniedzāt novērtējumu",
        PLACEHOLDER: "Pastāsti mums vairāk..."
    },
    BS = {
        BUTTON_TEXT: "Pieprasīt sarunas transkriptu",
        SEND_EMAIL_SUCCESS: "Sarunas transkripts tika veiksmīgi nosūtīts",
        SEND_EMAIL_ERROR: "Radās kļūda. Lūdzu, mēģiniet vēlreiz"
    },
    bS = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Noklikšķiniet šeit, lai pievienotos",
            LEAVE_THE_ROOM: "Beigt zvanu"
        }
    },
    YS = {
        POPULAR_ARTICLES: "Populāri Raksti",
        VIEW_ALL_ARTICLES: "Skatīt visus rakstus",
        IFRAME_LOAD_ERROR: "Ielādējot rakstu radās kļūda. Lūdzu, atsvaidziniet lapu un mēģiniet vēlreiz."
    },
    kS = {
        image: {
            CONTENT: "Attēla ziņojums"
        },
        audio: {
            CONTENT: "Audio ziņojums"
        },
        video: {
            CONTENT: "Video ziņojums"
        },
        file: {
            CONTENT: "Faila pielikums"
        },
        location: {
            CONTENT: "Atrašanās vieta"
        },
        fallback: {
            CONTENT: "ir kopīgojis URL"
        }
    },
    HS = {
        REPLY_TO: "Atbildot uz:"
    },
    VS = {
        COMPONENTS: RS,
        TEAM_AVAILABILITY: _S,
        REPLY_TIME: TS,
        DAY_NAMES: OS,
        START_CONVERSATION: LS,
        END_CONVERSATION: IS,
        CONTINUE_CONVERSATION: NS,
        YOU: fS,
        START_NEW_CONVERSATION: SS,
        VIEW_UNREAD_MESSAGES: pS,
        UNREAD_VIEW: dS,
        BUBBLE: mS,
        POWERED_BY: DS,
        EMAIL_PLACEHOLDER: CS,
        CHAT_PLACEHOLDER: MS,
        TODAY: hS,
        YESTERDAY: vS,
        PRE_CHAT_FORM: gS,
        FILE_SIZE_LIMIT: PS,
        CHAT_FORM: $S,
        EMOJI: yS,
        CSAT: US,
        EMAIL_TRANSCRIPT: BS,
        INTEGRATIONS: bS,
        PORTAL: YS,
        ATTACHMENTS: kS,
        FOOTER_REPLY_TO: HS
    },
    FS = {
        FILE_BUBBLE: {
            DOWNLOAD: "ഡൗൺലോഡ്",
            UPLOADING: "അപ്‌ലോഡുചെയ്യുന്നു..."
        },
        FORM_BUBBLE: {
            SUBMIT: "സമർപ്പിക്കുക"
        },
        MESSAGE_BUBBLE: {
            RETRY: "വീണ്ടും സന്ദേശം അയയ്‌ക്കുക",
            ERROR_MESSAGE: "അയയ്‌ക്കാനായില്ല, വീണ്ടും ശ്രമിക്കുക"
        }
    },
    wS = {
        ONLINE: "ഞങ്ങൾ ഓൺലൈനിലാണ്",
        OFFLINE: "ഞങ്ങൾ ഇപ്പോൾ അകലെയാണ്"
    },
    WS = {
        IN_A_FEW_MINUTES: "സാധാരണയായി കുറച്ച് മിനിറ്റിനുള്ളിൽ മറുപടി നൽകുന്നു",
        IN_A_FEW_HOURS: "സാധാരണയായി കുറച്ച് മണിക്കൂറിനുള്ളിൽ മറുപടി നൽകുന്നു",
        IN_A_DAY: "സാധാരണയായി ഒരു ദിവസത്തിൽ മറുപടി നൽകുന്നു",
        BACK_IN: "We will be back online"
    },
    GS = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    jS = "സംഭാഷണം ആരംഭിക്കുക",
    zS = "End Conversation",
    xS = "Continue conversation",
    QS = "You",
    KS = "ഒരു പുതിയ സംഭാഷണം ആരംഭിക്കുക",
    qS = "You have unread messages",
    ZS = {
        VIEW_MESSAGES_BUTTON: "പുതിയ സന്ദേശങ്ങൾ കാണുക",
        CLOSE_MESSAGES_BUTTON: "അടയ്ക്കുക",
        COMPANY_FROM: "നിന്ന്",
        BOT: "ബോട്ട്"
    },
    JS = {
        LABEL: "ഞങ്ങളുമായി ചാറ്റുചെയ്യുക"
    },
    XS = "പ്രായോജകർ Chatwoot",
    ep = "ദയവായി നിങ്ങളുടെ ഇമെയിൽ നൽകുക",
    tp = "നിങ്ങളുടെ സന്ദേശം ടൈപ്പുചെയ്യുക",
    np = "ഇന്ന്",
    rp = "ഇന്നലെ",
    ap = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "പൂർണ്ണമായ പേര്",
                PLACEHOLDER: "ദയവായി നിങ്ങളുടെ മുഴുവൻ പേര് നൽകുക",
                REQUIRED_ERROR: "മുഴുവൻ പേര് ആവശ്യമാണ്"
            },
            EMAIL_ADDRESS: {
                LABEL: "ഇമെയിൽ വിലാസം",
                PLACEHOLDER: "ദയവായി നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക",
                REQUIRED_ERROR: "Email Address is required",
                VALID_ERROR: "ദയവായി സാധുവായ ഒരു ഇമെയിൽ വിലാസം നൽകുക"
            },
            PHONE_NUMBER: {
                LABEL: "ഫോൺ നമ്പർ",
                PLACEHOLDER: "Please enter your phone number",
                REQUIRED_ERROR: "Phone Number is required",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "ഒരു ഫലവും കണ്ടെത്താനായില്ല",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "സന്ദേശം",
                PLACEHOLDER: "ദയവായി നിങ്ങളുടെ സന്ദേശം നൽകുക",
                ERROR: "സന്ദേശം വളരെ ചെറുതാണ്"
            }
        },
        CAMPAIGN_HEADER: "സംഭാഷണം ആരംഭിക്കുന്നതിന് മുമ്പ് ദയവായി നിങ്ങളുടെ പേരും ഇമെയിലും നൽകുക",
        IS_REQUIRED: "is required",
        REQUIRED: "Required",
        REGEX_ERROR: "Please provide a valid input"
    },
    ip = "ഫയൽ {MAXIMUM_FILE_UPLOAD_SIZE} അറ്റാച്ച്‌മെന്റ് പരിധി കവിഞ്ഞു",
    sp = {
        INVALID: {
            FIELD: "അസാധുവായ ഫീൽഡ്"
        }
    },
    op = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    Ep = {
        TITLE: "നിങ്ങളുടെ സംഭാഷണം റേറ്റുചെയ്യുക",
        SUBMITTED_TITLE: "റേറ്റിംഗ് സമർപ്പിച്ചതിന് നന്ദി",
        PLACEHOLDER: "ഞങ്ങളോട് കൂടുതൽ പറയൂ..."
    },
    lp = {
        BUTTON_TEXT: "ഒരു സംഭാഷണ ട്രാൻസ്ക്രിപ്റ്റ് അഭ്യർത്ഥിക്കുക",
        SEND_EMAIL_SUCCESS: "ചാറ്റ് ട്രാൻസ്ക്രിപ്റ്റ് വിജയകരമായി അയച്ചു",
        SEND_EMAIL_ERROR: "ഒരു പിശക് ഉണ്ടായിരുന്നു, ദയവായി വീണ്ടും ശ്രമിക്കുക"
    },
    cp = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    up = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    Ap = {
        image: {
            CONTENT: "ചിത്ര സന്ദേശം"
        },
        audio: {
            CONTENT: "ഓഡിയോ സന്ദേശം"
        },
        video: {
            CONTENT: "വീഡിയോ സന്ദേശം"
        },
        file: {
            CONTENT: "ഫയൽ അറ്റാച്ചുമെന്റ്"
        },
        location: {
            CONTENT: "സ്ഥാനം"
        },
        fallback: {
            CONTENT: "ഒരു യു. ആർ. എൽ പങ്കിട്ടു"
        }
    },
    Rp = {
        REPLY_TO: "Replying to:"
    },
    _p = {
        COMPONENTS: FS,
        TEAM_AVAILABILITY: wS,
        REPLY_TIME: WS,
        DAY_NAMES: GS,
        START_CONVERSATION: jS,
        END_CONVERSATION: zS,
        CONTINUE_CONVERSATION: xS,
        YOU: QS,
        START_NEW_CONVERSATION: KS,
        VIEW_UNREAD_MESSAGES: qS,
        UNREAD_VIEW: ZS,
        BUBBLE: JS,
        POWERED_BY: XS,
        EMAIL_PLACEHOLDER: ep,
        CHAT_PLACEHOLDER: tp,
        TODAY: np,
        YESTERDAY: rp,
        PRE_CHAT_FORM: ap,
        FILE_SIZE_LIMIT: ip,
        CHAT_FORM: sp,
        EMOJI: op,
        CSAT: Ep,
        EMAIL_TRANSCRIPT: lp,
        INTEGRATIONS: cp,
        PORTAL: up,
        ATTACHMENTS: Ap,
        FOOTER_REPLY_TO: Rp
    },
    Tp = {
        FILE_BUBBLE: {
            DOWNLOAD: "Downloaden",
            UPLOADING: "Uploaden..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Bevestigen"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Bericht opnieuw verzenden",
            ERROR_MESSAGE: "Verzenden mislukt, probeer het opnieuw"
        }
    },
    Op = {
        ONLINE: "We zijn online",
        OFFLINE: "We zijn momenteel afwezig"
    },
    Lp = {
        IN_A_FEW_MINUTES: "Reageert meestal binnen een paar minuten",
        IN_A_FEW_HOURS: "Reageert meestal binnen een paar uur",
        IN_A_DAY: "Reageert meestal binnen een dag",
        BACK_IN: "We zullen weer online zijn"
    },
    Ip = {
        SUNDAY: "zondag",
        MONDAY: "maandag",
        TUESDAY: "dinsdag",
        WEDNESDAY: "woensdag",
        THURSDAY: "donderdag",
        FRIDAY: "vrijdag",
        SATURDAY: "zaterdag"
    },
    Np = "Start Chat",
    fp = "Gesprek beëindigen",
    Sp = "Verdergaan met gesprek",
    pp = "Jij",
    dp = "Een nieuw gesprek starten",
    mp = "Je hebt ongelezen berichten",
    Dp = {
        VIEW_MESSAGES_BUTTON: "Bekijk nieuwe berichten",
        CLOSE_MESSAGES_BUTTON: "Sluiten",
        COMPANY_FROM: "van",
        BOT: "Robot"
    },
    Cp = {
        LABEL: "Chat met ons"
    },
    Mp = "Mogelijk gemaakt door Chatwoot",
    hp = "Voer uw e-mailadres in",
    vp = "Typ uw bericht",
    gp = "Vandaag",
    Pp = "Gisteren",
    $p = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Volledige Naam",
                PLACEHOLDER: "Voer uw volledige naam in",
                REQUIRED_ERROR: "Volledige naam is vereist"
            },
            EMAIL_ADDRESS: {
                LABEL: "Uw e-mailadres",
                PLACEHOLDER: "Voer uw e-mailadres in",
                REQUIRED_ERROR: "E-mailadres is vereist",
                VALID_ERROR: "Voer een geldig e-mailadres in"
            },
            PHONE_NUMBER: {
                LABEL: "Telefoonnummer",
                PLACEHOLDER: "Vul je telefoonnummer in",
                REQUIRED_ERROR: "Telefoon nummer is vereist",
                DIAL_CODE_VALID_ERROR: "Selecteer alstublieft een landcode",
                VALID_ERROR: "Voer een geldig telefoonnummer in",
                DROPDOWN_EMPTY: "Geen resultaten gevonden",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Bericht",
                PLACEHOLDER: "Voer uw bericht in",
                ERROR: "Bericht te kort"
            }
        },
        CAMPAIGN_HEADER: "Geef uw naam en e-mail voordat u het gesprek begint",
        IS_REQUIRED: "is vereist",
        REQUIRED: "Vereist",
        REGEX_ERROR: "Please provide a valid input"
    },
    yp = "Bestand overschrijdt de bijlagelimiet van {MAXIMUM_FILE_UPLOAD_SIZE}",
    Up = {
        INVALID: {
            FIELD: "Ongeldig veld"
        }
    },
    Bp = {
        PLACEHOLDER: "Zoek emojis",
        NOT_FOUND: "Er zijn geen overeenkomende emoji's gevonden",
        ARIA_LABEL: "Emoji picker"
    },
    bp = {
        TITLE: "Beoordeel uw gesprek",
        SUBMITTED_TITLE: "Bedankt voor het indienen van een beoordeling",
        PLACEHOLDER: "Vertel ons meer..."
    },
    Yp = {
        BUTTON_TEXT: "Verzoek een conversatie-transcript",
        SEND_EMAIL_SUCCESS: "Het gesprekstranscript is succesvol verzonden",
        SEND_EMAIL_ERROR: "Er is een fout opgetreden, probeer het opnieuw"
    },
    kp = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Klik hier om deel te nemen",
            LEAVE_THE_ROOM: "Gesprek verlaten"
        }
    },
    Hp = {
        POPULAR_ARTICLES: "Populaire artikelen",
        VIEW_ALL_ARTICLES: "Bekijk alle artikelen",
        IFRAME_LOAD_ERROR: "Er is een fout opgetreden bij het laden van het artikel, ververs de pagina en probeer het opnieuw."
    },
    Vp = {
        image: {
            CONTENT: "Bericht met foto"
        },
        audio: {
            CONTENT: "Audiobericht"
        },
        video: {
            CONTENT: "Videobericht"
        },
        file: {
            CONTENT: "Bestandsbijlage"
        },
        location: {
            CONTENT: "Locatie"
        },
        fallback: {
            CONTENT: "heeft een url gedeeld"
        }
    },
    Fp = {
        REPLY_TO: "Antwoord op:"
    },
    wp = {
        COMPONENTS: Tp,
        TEAM_AVAILABILITY: Op,
        REPLY_TIME: Lp,
        DAY_NAMES: Ip,
        START_CONVERSATION: Np,
        END_CONVERSATION: fp,
        CONTINUE_CONVERSATION: Sp,
        YOU: pp,
        START_NEW_CONVERSATION: dp,
        VIEW_UNREAD_MESSAGES: mp,
        UNREAD_VIEW: Dp,
        BUBBLE: Cp,
        POWERED_BY: Mp,
        EMAIL_PLACEHOLDER: hp,
        CHAT_PLACEHOLDER: vp,
        TODAY: gp,
        YESTERDAY: Pp,
        PRE_CHAT_FORM: $p,
        FILE_SIZE_LIMIT: yp,
        CHAT_FORM: Up,
        EMOJI: Bp,
        CSAT: bp,
        EMAIL_TRANSCRIPT: Yp,
        INTEGRATIONS: kp,
        PORTAL: Hp,
        ATTACHMENTS: Vp,
        FOOTER_REPLY_TO: Fp
    },
    Wp = {
        FILE_BUBBLE: {
            DOWNLOAD: "Last ned",
            UPLOADING: "Laster opp..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Send"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Send meldingen på nytt",
            ERROR_MESSAGE: "Kunne ikke sende, prøv på nytt"
        }
    },
    Gp = {
        ONLINE: "Vi er pålogget",
        OFFLINE: "Vi er for øyeblikket borte"
    },
    jp = {
        IN_A_FEW_MINUTES: "Svarer vanligvis innen et par timer",
        IN_A_FEW_HOURS: "Svarer vanligvis innen et par timer",
        IN_A_DAY: "Svarer vanligvis innen en dag",
        BACK_IN: "Vi vil være tilbake online"
    },
    zp = {
        SUNDAY: "Søndag",
        MONDAY: "Mandag",
        TUESDAY: "Tirsdag",
        WEDNESDAY: "Onsdag",
        THURSDAY: "Torsdag",
        FRIDAY: "Fredag",
        SATURDAY: "Lørdag"
    },
    xp = "Start samtale",
    Qp = "Avslutt samtale",
    Kp = "Fortsett samtalen",
    qp = "Du",
    Zp = "Start en ny samtale",
    Jp = "Du har uleste meldinger",
    Xp = {
        VIEW_MESSAGES_BUTTON: "Se nye meldinger",
        CLOSE_MESSAGES_BUTTON: "Lukk",
        COMPANY_FROM: "fra",
        BOT: "Bot"
    },
    ed = {
        LABEL: "Chat med oss"
    },
    td = "Drevet av Chatwoot",
    nd = "Skriv inn din e-post",
    rd = "Skriv inn meldingen",
    ad = "I dag",
    id = "I går",
    sd = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Fullt navn",
                PLACEHOLDER: "Skriv inn fullt navn",
                REQUIRED_ERROR: "Fullt navn er påkrevd"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-postadresse",
                PLACEHOLDER: "Vennligst skriv inn din e-postadresse",
                REQUIRED_ERROR: "E-postadresse er påkrevd",
                VALID_ERROR: "Vennligst skriv inn en gyldig e-postadresse"
            },
            PHONE_NUMBER: {
                LABEL: "Telefonnummer",
                PLACEHOLDER: "Tast inn ditt telefonnummer",
                REQUIRED_ERROR: "Telefonnummer er påkrevd",
                DIAL_CODE_VALID_ERROR: "Vennligst velg landskode",
                VALID_ERROR: "Tast inn ditt telefonnummer",
                DROPDOWN_EMPTY: "Ingen resultater funnet",
                DROPDOWN_SEARCH: "Søk etter land"
            },
            MESSAGE: {
                LABEL: "Melding",
                PLACEHOLDER: "Skriv inn meldingen din",
                ERROR: "Meldingen er for kort"
            }
        },
        CAMPAIGN_HEADER: "Angi navn og e-post før du starter samtalen",
        IS_REQUIRED: "er påkrevd",
        REQUIRED: "Påkrevd",
        REGEX_ERROR: "Vennligst oppgi gyldige opplysninger"
    },
    od = "Filens størrelse overskrider grensen på {MAXIMUM_FILE_UPLOAD_SIZE}",
    Ed = {
        INVALID: {
            FIELD: "Ugyldig felt"
        }
    },
    ld = {
        PLACEHOLDER: "Søk emojier",
        NOT_FOUND: "Ingen emojier samsvarer søket ditt",
        ARIA_LABEL: "Emoji velger"
    },
    cd = {
        TITLE: "Vurder samtalen din",
        SUBMITTED_TITLE: "Takk for at du ga din vurdering",
        PLACEHOLDER: "Fortell oss mer..."
    },
    ud = {
        BUTTON_TEXT: "Be om utskrift av samtalen",
        SEND_EMAIL_SUCCESS: "Kopi av samtalen ble sendt",
        SEND_EMAIL_ERROR: "Det oppstod en feil. Prøv igjen"
    },
    Ad = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Klikk her for å bli med",
            LEAVE_THE_ROOM: "Forlat samtalen"
        }
    },
    Rd = {
        POPULAR_ARTICLES: "Populære artikler",
        VIEW_ALL_ARTICLES: "Vis alle artikler",
        IFRAME_LOAD_ERROR: "Det oppstod en feil under lasting av artikkelen, oppdater siden og prøv igjen."
    },
    _d = {
        image: {
            CONTENT: "Bildemelding"
        },
        audio: {
            CONTENT: "Lydmelding"
        },
        video: {
            CONTENT: "Video beskjed"
        },
        file: {
            CONTENT: "Vedlegg"
        },
        location: {
            CONTENT: "Plassering"
        },
        fallback: {
            CONTENT: "har delt en URL"
        }
    },
    Td = {
        REPLY_TO: "Svar til:"
    },
    Od = {
        COMPONENTS: Wp,
        TEAM_AVAILABILITY: Gp,
        REPLY_TIME: jp,
        DAY_NAMES: zp,
        START_CONVERSATION: xp,
        END_CONVERSATION: Qp,
        CONTINUE_CONVERSATION: Kp,
        YOU: qp,
        START_NEW_CONVERSATION: Zp,
        VIEW_UNREAD_MESSAGES: Jp,
        UNREAD_VIEW: Xp,
        BUBBLE: ed,
        POWERED_BY: td,
        EMAIL_PLACEHOLDER: nd,
        CHAT_PLACEHOLDER: rd,
        TODAY: ad,
        YESTERDAY: id,
        PRE_CHAT_FORM: sd,
        FILE_SIZE_LIMIT: od,
        CHAT_FORM: Ed,
        EMOJI: ld,
        CSAT: cd,
        EMAIL_TRANSCRIPT: ud,
        INTEGRATIONS: Ad,
        PORTAL: Rd,
        ATTACHMENTS: _d,
        FOOTER_REPLY_TO: Td
    },
    Ld = {
        FILE_BUBBLE: {
            DOWNLOAD: "Pobierz",
            UPLOADING: "Przesyłanie..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Wyślij"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Wyślij wiadomość ponownie",
            ERROR_MESSAGE: "Nie udało się wysłać! Spróbuj ponownie"
        }
    },
    Id = {
        ONLINE: "Jesteśmy dostępni",
        OFFLINE: "W tej chwili jesteśmy niedostępni"
    },
    Nd = {
        IN_A_FEW_MINUTES: "Zwykle odpowiadamy w ciągu paru minut",
        IN_A_FEW_HOURS: "Zwykle odpowiadamy w ciągu paru godzin",
        IN_A_DAY: "Zwykle odpowiadamy w przeciągu jednego dnia",
        BACK_IN: "Będziemy dostępni ponownie"
    },
    fd = {
        SUNDAY: "Niedziela",
        MONDAY: "Poniedziałek",
        TUESDAY: "Wtorek",
        WEDNESDAY: "Środa",
        THURSDAY: "Czwartek",
        FRIDAY: "Piątek",
        SATURDAY: "Sobota"
    },
    Sd = "Rozpocznij rozmowę",
    pd = "Zakończ rozmowę",
    dd = "Kontynuuj rozmowę",
    md = "You",
    Dd = "Rozpocznij nową rozmowę",
    Cd = "You have unread messages",
    Md = {
        VIEW_MESSAGES_BUTTON: "Pokaż nowe wiadomości",
        CLOSE_MESSAGES_BUTTON: "Zamknij",
        COMPANY_FROM: "od",
        BOT: "Bot"
    },
    hd = {
        LABEL: "Porozmawiaj z nami"
    },
    vd = "Napędzany przez Chatwoot",
    gd = "Wprowadź swój adres e-mail",
    Pd = "Wpisz treść wiadomości",
    $d = "Dzisiaj",
    yd = "Wczoraj",
    Ud = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Pełna nazwa (imię i nazwisko)",
                PLACEHOLDER: "Podaj swoje imię i nazwisko",
                REQUIRED_ERROR: "Pełne imię i nazwisko jest wymagane"
            },
            EMAIL_ADDRESS: {
                LABEL: "Adres e-mail",
                PLACEHOLDER: "Wprowadź swój adres e-mail",
                REQUIRED_ERROR: "Adres email jest wymagany",
                VALID_ERROR: "Wprowadź poprawny adres e-mail"
            },
            PHONE_NUMBER: {
                LABEL: "Numer telefonu",
                PLACEHOLDER: "Wprowadź numer telefonu",
                REQUIRED_ERROR: "Numer telefonu jest wymagany",
                DIAL_CODE_VALID_ERROR: "Proszę wybrać kod kraju",
                VALID_ERROR: "Wprowadź poprawny numer telefonu",
                DROPDOWN_EMPTY: "Brak wyników",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Wiadomość",
                PLACEHOLDER: "Wprowadź swoją wiadomość",
                ERROR: "Wiadomość jest za krótka"
            }
        },
        CAMPAIGN_HEADER: "Proszę podać swoje imię i nazwisko oraz adres e-mail przed rozpoczęciem rozmowy",
        IS_REQUIRED: "jest wymagane",
        REQUIRED: "Wymagane",
        REGEX_ERROR: "Please provide a valid input"
    },
    Bd = "Plik przekracza limit {MAXIMUM_FILE_UPLOAD_SIZE} dla załącznika",
    bd = {
        INVALID: {
            FIELD: "Nieprawidłowe pole"
        }
    },
    Yd = {
        PLACEHOLDER: "Wyszukaj emoji",
        NOT_FOUND: "Nie znaleziono emoji pasującego do wyszukiwania",
        ARIA_LABEL: "Emoji picker"
    },
    kd = {
        TITLE: "Oceń udzielone Ci wsparcie",
        SUBMITTED_TITLE: "Dziękujemy za przesłanie oceny",
        PLACEHOLDER: "Dodaj swój komentarz..."
    },
    Hd = {
        BUTTON_TEXT: "Poproś o skrypt rozmowy",
        SEND_EMAIL_SUCCESS: "Transkrypcja czatu została wysłana pomyślnie",
        SEND_EMAIL_ERROR: "Wystąpił błąd, spróbuj ponownie"
    },
    Vd = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Kliknij tutaj, aby dołączyć",
            LEAVE_THE_ROOM: "Opuść rozmowę"
        }
    },
    Fd = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "Zobacz wszystkie artykuły",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    wd = {
        image: {
            CONTENT: "Wiadomość z obrazkiem"
        },
        audio: {
            CONTENT: "Wiadomość dźwiękowa"
        },
        video: {
            CONTENT: "Wiadomość wideo"
        },
        file: {
            CONTENT: "Załącznik pliku"
        },
        location: {
            CONTENT: "Lokalizacja"
        },
        fallback: {
            CONTENT: "udostępnił adres URL"
        }
    },
    Wd = {
        REPLY_TO: "Replying to:"
    },
    Gd = {
        COMPONENTS: Ld,
        TEAM_AVAILABILITY: Id,
        REPLY_TIME: Nd,
        DAY_NAMES: fd,
        START_CONVERSATION: Sd,
        END_CONVERSATION: pd,
        CONTINUE_CONVERSATION: dd,
        YOU: md,
        START_NEW_CONVERSATION: Dd,
        VIEW_UNREAD_MESSAGES: Cd,
        UNREAD_VIEW: Md,
        BUBBLE: hd,
        POWERED_BY: vd,
        EMAIL_PLACEHOLDER: gd,
        CHAT_PLACEHOLDER: Pd,
        TODAY: $d,
        YESTERDAY: yd,
        PRE_CHAT_FORM: Ud,
        FILE_SIZE_LIMIT: Bd,
        CHAT_FORM: bd,
        EMOJI: Yd,
        CSAT: kd,
        EMAIL_TRANSCRIPT: Hd,
        INTEGRATIONS: Vd,
        PORTAL: Fd,
        ATTACHMENTS: wd,
        FOOTER_REPLY_TO: Wd
    },
    jd = {
        FILE_BUBBLE: {
            DOWNLOAD: "BAIXAR",
            UPLOADING: "A carregar..."
        },
        FORM_BUBBLE: {
            SUBMIT: "submeter"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Enviar mensagem novamente",
            ERROR_MESSAGE: "Não foi possível enviar, tente novamente"
        }
    },
    zd = {
        ONLINE: "Estamos online",
        OFFLINE: "Estamos ausentes"
    },
    xd = {
        IN_A_FEW_MINUTES: "Normalmente respondemos em poucos minutos",
        IN_A_FEW_HOURS: "Normalmente respondemos em poucas horas",
        IN_A_DAY: "Normalmente respondemos num dia",
        BACK_IN: "Voltaremos online"
    },
    Qd = {
        SUNDAY: "Domingo",
        MONDAY: "Segunda-feira",
        TUESDAY: "Terça-feira",
        WEDNESDAY: "Quarta-feira",
        THURSDAY: "Quinta-feira",
        FRIDAY: "Sexta-feira",
        SATURDAY: "Sábado"
    },
    Kd = "Iniciar Conversa",
    qd = "Terminar Conversa",
    Zd = "Continuar conversa",
    Jd = "Você",
    Xd = "Iniciar uma nova conversa",
    em = "Tem mensagens por ler",
    tm = {
        VIEW_MESSAGES_BUTTON: "Ver novas mensagens",
        CLOSE_MESSAGES_BUTTON: "FECHAR",
        COMPANY_FROM: "de",
        BOT: "Bot"
    },
    nm = {
        LABEL: "Fale connosco"
    },
    rm = "Desenvolvido por Chatwoot",
    am = "Por favor, digite seu e-mail",
    im = "Escreva a sua mensagem",
    sm = "Hoje",
    om = "Ontem",
    Em = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nome completo",
                PLACEHOLDER: "Por favor, digite o seu nome completo",
                REQUIRED_ERROR: "Nome completo é necessário"
            },
            EMAIL_ADDRESS: {
                LABEL: "Endereço de e-mail",
                PLACEHOLDER: "Por favor, insira um endereço de email válido",
                REQUIRED_ERROR: "O endereço de email é obrigatório",
                VALID_ERROR: "Por favor, insira um endereço de e-mail válido"
            },
            PHONE_NUMBER: {
                LABEL: "Número de telefone",
                PLACEHOLDER: "Por favor insira o seu número de telefone",
                REQUIRED_ERROR: "O número de telefone é obrigatório",
                DIAL_CODE_VALID_ERROR: "Por favor, selecione um código de país",
                VALID_ERROR: "Por favor, insira um número de telefone válido",
                DROPDOWN_EMPTY: "Nenhum resultado encontrado",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Messagem",
                PLACEHOLDER: "Por favor, escreva a sua mensagem",
                ERROR: "Mensagem muito pequena"
            }
        },
        CAMPAIGN_HEADER: "Por favor, forneça seu nome e e-mail antes de iniciar a conversa",
        IS_REQUIRED: "é obrigatório",
        REQUIRED: "Obrigatório",
        REGEX_ERROR: "Por favor, introduza um valor válido"
    },
    lm = "O ficheiro ultrapassa o tamanho limite {MAXIMUM_FILE_UPLOAD_SIZE}",
    cm = {
        INVALID: {
            FIELD: "Campo inválido"
        }
    },
    um = {
        PLACEHOLDER: "Pesquisar emojis",
        NOT_FOUND: "Nenhum emoji corresponde à sua pesquisa",
        ARIA_LABEL: "Emoji picker"
    },
    Am = {
        TITLE: "Avalie a sua conversa",
        SUBMITTED_TITLE: "Obrigado pela sua avaliação",
        PLACEHOLDER: "Conte-nos mais..."
    },
    Rm = {
        BUTTON_TEXT: "Pedir a transcrição da conversa",
        SEND_EMAIL_SUCCESS: "A transcrição do chat foi enviada com sucesso",
        SEND_EMAIL_ERROR: "Ocorreu um erro, por favor tente novamente"
    },
    _m = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Clique aqui para participar",
            LEAVE_THE_ROOM: "Sair da chamada"
        }
    },
    Tm = {
        POPULAR_ARTICLES: "Artigos Mais Populares",
        VIEW_ALL_ARTICLES: "Ver todos os artigos",
        IFRAME_LOAD_ERROR: "Ocorreu um erro ao carregar o artigo. Por favor, atualize a página e tente novamente."
    },
    Om = {
        image: {
            CONTENT: "Mensagem de imagem"
        },
        audio: {
            CONTENT: "Mensagem de áudio"
        },
        video: {
            CONTENT: "Mensagem de vídeo"
        },
        file: {
            CONTENT: "Arquivo anexo"
        },
        location: {
            CONTENT: "Local:"
        },
        fallback: {
            CONTENT: "compartilhou uma url"
        }
    },
    Lm = {
        REPLY_TO: "Em resposta a:"
    },
    Im = {
        COMPONENTS: jd,
        TEAM_AVAILABILITY: zd,
        REPLY_TIME: xd,
        DAY_NAMES: Qd,
        START_CONVERSATION: Kd,
        END_CONVERSATION: qd,
        CONTINUE_CONVERSATION: Zd,
        YOU: Jd,
        START_NEW_CONVERSATION: Xd,
        VIEW_UNREAD_MESSAGES: em,
        UNREAD_VIEW: tm,
        BUBBLE: nm,
        POWERED_BY: rm,
        EMAIL_PLACEHOLDER: am,
        CHAT_PLACEHOLDER: im,
        TODAY: sm,
        YESTERDAY: om,
        PRE_CHAT_FORM: Em,
        FILE_SIZE_LIMIT: lm,
        CHAT_FORM: cm,
        EMOJI: um,
        CSAT: Am,
        EMAIL_TRANSCRIPT: Rm,
        INTEGRATIONS: _m,
        PORTAL: Tm,
        ATTACHMENTS: Om,
        FOOTER_REPLY_TO: Lm
    },
    Nm = {
        FILE_BUBBLE: {
            DOWNLOAD: "Download",
            UPLOADING: "Enviando..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Enviar"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Enviar mensagem novamente",
            ERROR_MESSAGE: "Não foi possível enviar, tente novamente"
        }
    },
    fm = {
        ONLINE: "Estamos conectados",
        OFFLINE: "Estamos ausentes no momento"
    },
    Sm = {
        IN_A_FEW_MINUTES: "Normalmente responde em alguns minutos",
        IN_A_FEW_HOURS: "Normalmente responde em algumas horas",
        IN_A_DAY: "Normalmente responde em um dia",
        BACK_IN: "Estaremos de volta on-line"
    },
    pm = {
        SUNDAY: "Domingo",
        MONDAY: "Segunda-Feira",
        TUESDAY: "Terça-feira",
        WEDNESDAY: "Quarta-feira",
        THURSDAY: "Quinta-feira",
        FRIDAY: "Sexta-feira",
        SATURDAY: "Sábado"
    },
    dm = "Iniciar Conversa",
    mm = "Finalizar Conversa",
    Dm = "Continuar conversa",
    Cm = "Você",
    Mm = "Iniciar uma nova conversa",
    hm = "Você tem mensagens não lidas",
    vm = {
        VIEW_MESSAGES_BUTTON: "Ver novas mensagens",
        CLOSE_MESSAGES_BUTTON: "Fechar",
        COMPANY_FROM: "De",
        BOT: "Robôs"
    },
    gm = {
        LABEL: "Fale conosco no chat"
    },
    Pm = "Desenvolvido por Chatwoot",
    $m = "Por favor, insira seu e-mail",
    ym = "Digite sua mensagem",
    Um = "Hoje",
    Bm = "Ontem",
    bm = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nome Completo",
                PLACEHOLDER: "Por favor, digite seu nome completo",
                REQUIRED_ERROR: "Nome Completo é mandatório"
            },
            EMAIL_ADDRESS: {
                LABEL: "Endereço de e-mail",
                PLACEHOLDER: "Por favor, digite seu e-mail",
                REQUIRED_ERROR: "Endereço de e-mail é obrigatório",
                VALID_ERROR: "Por favor, insira um endereço de e-mail válido"
            },
            PHONE_NUMBER: {
                LABEL: "Número de Telefone",
                PLACEHOLDER: "Por favor, digite seu número de telefone",
                REQUIRED_ERROR: "O número de telefone é obrigatório",
                DIAL_CODE_VALID_ERROR: "Por favor, selecione um código de país",
                VALID_ERROR: "Por favor, insira um número de telefone válido",
                DROPDOWN_EMPTY: "Nenhum resultado encontrado",
                DROPDOWN_SEARCH: "Selecione o país"
            },
            MESSAGE: {
                LABEL: "Mensagem",
                PLACEHOLDER: "Por favor, digite sua mensagem",
                ERROR: "Mensagem muito curta"
            }
        },
        CAMPAIGN_HEADER: "Por favor, forneça seu nome e e-mail antes de iniciar a conversa",
        IS_REQUIRED: "é obrigatório",
        REQUIRED: "Obrigatório",
        REGEX_ERROR: "Forneça uma entrada válida"
    },
    Ym = "O arquivo excede o limite de anexos {MAXIMUM_FILE_UPLOAD_SIZE}",
    km = {
        INVALID: {
            FIELD: "Campo inválido"
        }
    },
    Hm = {
        PLACEHOLDER: "Pesquisar emojis",
        NOT_FOUND: "Nenhum emoji corresponde à sua pesquisa",
        ARIA_LABEL: "Seletor de emoji"
    },
    Vm = {
        TITLE: "Avalie sua conversa",
        SUBMITTED_TITLE: "Obrigado por enviar a classificação",
        PLACEHOLDER: "Conte-nos mais..."
    },
    Fm = {
        BUTTON_TEXT: "Solicitar uma transcrição de conversa",
        SEND_EMAIL_SUCCESS: "A transcrição do chat foi enviada com sucesso",
        SEND_EMAIL_ERROR: "Ocorreu um erro, por favor tente novamente"
    },
    wm = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Clique aqui para entrar",
            LEAVE_THE_ROOM: "Sair da ligação"
        }
    },
    Wm = {
        POPULAR_ARTICLES: "Artigos Populares",
        VIEW_ALL_ARTICLES: "Ver todos os artigos",
        IFRAME_LOAD_ERROR: "Ocorreu um erro ao carregar o artigo. Por favor, atualize a página e tente novamente."
    },
    Gm = {
        image: {
            CONTENT: "Mensagem de imagem"
        },
        audio: {
            CONTENT: "Mensagem de áudio"
        },
        video: {
            CONTENT: "Mensagem de vídeo"
        },
        file: {
            CONTENT: "Arquivo anexo"
        },
        location: {
            CONTENT: "Localização"
        },
        fallback: {
            CONTENT: "compartilhou uma URL"
        }
    },
    jm = {
        REPLY_TO: "Respondendo a:"
    },
    zm = {
        COMPONENTS: Nm,
        TEAM_AVAILABILITY: fm,
        REPLY_TIME: Sm,
        DAY_NAMES: pm,
        START_CONVERSATION: dm,
        END_CONVERSATION: mm,
        CONTINUE_CONVERSATION: Dm,
        YOU: Cm,
        START_NEW_CONVERSATION: Mm,
        VIEW_UNREAD_MESSAGES: hm,
        UNREAD_VIEW: vm,
        BUBBLE: gm,
        POWERED_BY: Pm,
        EMAIL_PLACEHOLDER: $m,
        CHAT_PLACEHOLDER: ym,
        TODAY: Um,
        YESTERDAY: Bm,
        PRE_CHAT_FORM: bm,
        FILE_SIZE_LIMIT: Ym,
        CHAT_FORM: km,
        EMOJI: Hm,
        CSAT: Vm,
        EMAIL_TRANSCRIPT: Fm,
        INTEGRATIONS: wm,
        PORTAL: Wm,
        ATTACHMENTS: Gm,
        FOOTER_REPLY_TO: jm
    },
    xm = {
        FILE_BUBBLE: {
            DOWNLOAD: "Descărcare",
            UPLOADING: "Încărcare..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Trimite"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Trimiteți din nou un mesaj",
            ERROR_MESSAGE: "Nu s-a putut trimite! Încearcă din nou"
        }
    },
    Qm = {
        ONLINE: "Suntem online",
        OFFLINE: "Suntem plecați în acest moment"
    },
    Km = {
        IN_A_FEW_MINUTES: "De obicei, răspunsurile în câteva minute",
        IN_A_FEW_HOURS: "De obicei, răspunsurile în câteva ore",
        IN_A_DAY: "De obicei, răspunsurile într-o zi",
        BACK_IN: "Vom reveni online"
    },
    qm = {
        SUNDAY: "Duminică",
        MONDAY: "Luni",
        TUESDAY: "Marți",
        WEDNESDAY: "Miercuri",
        THURSDAY: "Joi",
        FRIDAY: "Vineri",
        SATURDAY: "Sâmbătă"
    },
    Zm = "Începe conversația",
    Jm = "Terminați conversația",
    Xm = "Continuați conversația",
    eD = "You",
    tD = "Începeți o conversație nouă",
    nD = "You have unread messages",
    rD = {
        VIEW_MESSAGES_BUTTON: "Vezi mesajele noi",
        CLOSE_MESSAGES_BUTTON: "Închide",
        COMPANY_FROM: "de la",
        BOT: "Bot"
    },
    aD = {
        LABEL: "Discută cu noi"
    },
    iD = "Oferit de Chatwoot",
    sD = "Te rugăm să introduci adresa de e-mail",
    oD = "Scrie mesajul tău",
    ED = "Astăzi",
    lD = "Ieri",
    cD = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Nume complet",
                PLACEHOLDER: "Te rugăm să introduci un nume valid",
                REQUIRED_ERROR: "Este necesar numele complet"
            },
            EMAIL_ADDRESS: {
                LABEL: "Adresa Email",
                PLACEHOLDER: "Te rugăm să-ți introduci adresa de email",
                REQUIRED_ERROR: "Adresa de e-mail este obligatorie",
                VALID_ERROR: "Vă rugăm să introduceți o adresă de e-mail validă"
            },
            PHONE_NUMBER: {
                LABEL: "Număr de telefon",
                PLACEHOLDER: "Te rugăm să introduci numărul de telefon",
                REQUIRED_ERROR: "Numărul de telefon este obligatoriu",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "Niciun rezultat găsit",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Mesaj",
                PLACEHOLDER: "Introdu mesajul tău",
                ERROR: "Mesaj prea scurt"
            }
        },
        CAMPAIGN_HEADER: "Vă rugăm să furnizați numele și e-mailul înainte de a începe conversația",
        IS_REQUIRED: "este obligatoriu",
        REQUIRED: "Necesar",
        REGEX_ERROR: "Please provide a valid input"
    },
    uD = "Fisierul depaseste limita de {MAXIMUM_FILE_UPLOAD_SIZE} atasamente",
    AD = {
        INVALID: {
            FIELD: "Câmp invalid"
        }
    },
    RD = {
        PLACEHOLDER: "Caută emoji-uri",
        NOT_FOUND: "Niciun emoji nu corespunde căutării tale",
        ARIA_LABEL: "Emoji picker"
    },
    _D = {
        TITLE: "Evaluează conversația ta",
        SUBMITTED_TITLE: "Vă mulțumim pentru trimiterea de rating",
        PLACEHOLDER: "Spune-ne mai mult..."
    },
    TD = {
        BUTTON_TEXT: "Solicitați o transcriere a conversației",
        SEND_EMAIL_SUCCESS: "Transscrisul de chat a fost trimis cu succes",
        SEND_EMAIL_ERROR: "A apărut o eroare, încercați din nou"
    },
    OD = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Apasă aici pentru a te alătura",
            LEAVE_THE_ROOM: "Părăsiți apelul"
        }
    },
    LD = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "Vezi toate articolele",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    ID = {
        image: {
            CONTENT: "Mesaj imagine"
        },
        audio: {
            CONTENT: "Mesaj audio"
        },
        video: {
            CONTENT: "Mesaj video"
        },
        file: {
            CONTENT: "Fişier ataşat"
        },
        location: {
            CONTENT: "Locaţie"
        },
        fallback: {
            CONTENT: "a partajat un URL"
        }
    },
    ND = {
        REPLY_TO: "Replying to:"
    },
    fD = {
        COMPONENTS: xm,
        TEAM_AVAILABILITY: Qm,
        REPLY_TIME: Km,
        DAY_NAMES: qm,
        START_CONVERSATION: Zm,
        END_CONVERSATION: Jm,
        CONTINUE_CONVERSATION: Xm,
        YOU: eD,
        START_NEW_CONVERSATION: tD,
        VIEW_UNREAD_MESSAGES: nD,
        UNREAD_VIEW: rD,
        BUBBLE: aD,
        POWERED_BY: iD,
        EMAIL_PLACEHOLDER: sD,
        CHAT_PLACEHOLDER: oD,
        TODAY: ED,
        YESTERDAY: lD,
        PRE_CHAT_FORM: cD,
        FILE_SIZE_LIMIT: uD,
        CHAT_FORM: AD,
        EMOJI: RD,
        CSAT: _D,
        EMAIL_TRANSCRIPT: TD,
        INTEGRATIONS: OD,
        PORTAL: LD,
        ATTACHMENTS: ID,
        FOOTER_REPLY_TO: ND
    },
    SD = {
        FILE_BUBBLE: {
            DOWNLOAD: "Скачать",
            UPLOADING: "Загружаем..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Отправить"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Отправить сообщение еще раз",
            ERROR_MESSAGE: "Не удалось отправить! Попробуйте еще раз"
        }
    },
    pD = {
        ONLINE: "Мы в сети",
        OFFLINE: "В данный момент мы отсутствуем"
    },
    dD = {
        IN_A_FEW_MINUTES: "Обычно отвечаем в течение нескольких минут",
        IN_A_FEW_HOURS: "Обычно отвечаем в течение нескольких часов",
        IN_A_DAY: "Обычно отвечаем в течение дня",
        BACK_IN: "Мы будем онлайн"
    },
    mD = {
        SUNDAY: "Воскресенье",
        MONDAY: "Понедельник",
        TUESDAY: "Вторник",
        WEDNESDAY: "Среда",
        THURSDAY: "Четверг",
        FRIDAY: "Пятница",
        SATURDAY: "Суббота"
    },
    DD = "Начать диалог",
    CD = "Завершить диалог",
    MD = "Продолжить беседу",
    hD = "Вы",
    vD = "Начать диалог",
    gD = "У вас есть непрочитанные сообщения",
    PD = {
        VIEW_MESSAGES_BUTTON: "Посмотреть новые сообщения",
        CLOSE_MESSAGES_BUTTON: "Закрыть",
        COMPANY_FROM: "от",
        BOT: "Бот"
    },
    $D = {
        LABEL: "Пообщайтесь с нами"
    },
    yD = "Работает на Chatwoot",
    UD = "Пожалуйста, введите ваш email",
    BD = "Введите сообщение",
    bD = "Сегодня",
    YD = "Вчера",
    kD = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Полное имя",
                PLACEHOLDER: "Пожалуйста, введите ваше ФИО",
                REQUIRED_ERROR: "Необходимо указать имя"
            },
            EMAIL_ADDRESS: {
                LABEL: "Email",
                PLACEHOLDER: "Пожалуйста, введите ваш адрес электронной почты",
                REQUIRED_ERROR: "Требуется адрес электронной почты",
                VALID_ERROR: "Пожалуйста, введите действительный адрес электронной почты"
            },
            PHONE_NUMBER: {
                LABEL: "Номер телефона",
                PLACEHOLDER: "Пожалуйста, введите ваш номер телефона",
                REQUIRED_ERROR: "Требуется указать номер телефона",
                DIAL_CODE_VALID_ERROR: "Пожалуйста, выберите код страны",
                VALID_ERROR: "Пожалуйста, введите действительный номер телефона",
                DROPDOWN_EMPTY: "Результаты не найдены",
                DROPDOWN_SEARCH: "Поиск по стране"
            },
            MESSAGE: {
                LABEL: "Сообщение",
                PLACEHOLDER: "Пожалуйста, введите ваше сообщение здесь",
                ERROR: "Сообщение слишком короткое"
            }
        },
        CAMPAIGN_HEADER: "Пожалуйста, укажите Ваше имя и адрес электронной почты перед началом диалога",
        IS_REQUIRED: "обязательно",
        REQUIRED: "Обязательно",
        REGEX_ERROR: "Пожалуйста, предоставьте корректные данные"
    },
    HD = "Превышен размер загружаемого файла - {MAXIMUM_FILE_UPLOAD_SIZE}",
    VD = {
        INVALID: {
            FIELD: "Неверное поле"
        }
    },
    FD = {
        PLACEHOLDER: "Искать эмодзи",
        NOT_FOUND: "По Вашему запросу не было найдено эмодзи",
        ARIA_LABEL: "Выбор эмодзи"
    },
    wD = {
        TITLE: "Оцените разговор",
        SUBMITTED_TITLE: "Спасибо за оценку",
        PLACEHOLDER: "Расскажите подробнее..."
    },
    WD = {
        BUTTON_TEXT: "Запросить историю разговора",
        SEND_EMAIL_SUCCESS: "Субтитры чата успешно отправлены",
        SEND_EMAIL_ERROR: "Произошла ошибка, попробуйте еще раз"
    },
    GD = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Нажмите, чтобы присоединиться",
            LEAVE_THE_ROOM: "Закончить разговор"
        }
    },
    jD = {
        POPULAR_ARTICLES: "Популярные статьи",
        VIEW_ALL_ARTICLES: "Показать все статьи",
        IFRAME_LOAD_ERROR: "Произошла ошибка при загрузке статьи, пожалуйста, обновите страницу и повторите попытку."
    },
    zD = {
        image: {
            CONTENT: "Изображение"
        },
        audio: {
            CONTENT: "Аудиосообщение"
        },
        video: {
            CONTENT: "Видео"
        },
        file: {
            CONTENT: "Прикрепленный файл"
        },
        location: {
            CONTENT: "Местоположение"
        },
        fallback: {
            CONTENT: "поделился ссылкой"
        }
    },
    xD = {
        REPLY_TO: "Ответить:"
    },
    QD = {
        COMPONENTS: SD,
        TEAM_AVAILABILITY: pD,
        REPLY_TIME: dD,
        DAY_NAMES: mD,
        START_CONVERSATION: DD,
        END_CONVERSATION: CD,
        CONTINUE_CONVERSATION: MD,
        YOU: hD,
        START_NEW_CONVERSATION: vD,
        VIEW_UNREAD_MESSAGES: gD,
        UNREAD_VIEW: PD,
        BUBBLE: $D,
        POWERED_BY: yD,
        EMAIL_PLACEHOLDER: UD,
        CHAT_PLACEHOLDER: BD,
        TODAY: bD,
        YESTERDAY: YD,
        PRE_CHAT_FORM: kD,
        FILE_SIZE_LIMIT: HD,
        CHAT_FORM: VD,
        EMOJI: FD,
        CSAT: wD,
        EMAIL_TRANSCRIPT: WD,
        INTEGRATIONS: GD,
        PORTAL: jD,
        ATTACHMENTS: zD,
        FOOTER_REPLY_TO: xD
    },
    KD = {
        FILE_BUBBLE: {
            DOWNLOAD: "Stiahnuť",
            UPLOADING: "Nahrávanie..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Odoslať"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Znova odoslať správu",
            ERROR_MESSAGE: "Couldn't send, try again"
        }
    },
    qD = {
        ONLINE: "Sme online",
        OFFLINE: "Momentálne nie sme k dispozícii"
    },
    ZD = {
        IN_A_FEW_MINUTES: "Zvyčajne odpovedá do niekoľkých minút",
        IN_A_FEW_HOURS: "Zvyčajne odpovedá do niekoľkých hodín",
        IN_A_DAY: "Zvyčajne odpovedá do dňa",
        BACK_IN: "We will be back online"
    },
    JD = {
        SUNDAY: "Nedeľa",
        MONDAY: "Pondelok",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Streda",
        THURSDAY: "Thursday",
        FRIDAY: "Piatok",
        SATURDAY: "Saturday"
    },
    XD = "Začať konverzáciu",
    eC = "Ukončiť konverzáciu",
    tC = "Pokračovať v konverzácii",
    nC = "Vy",
    rC = "Začať novú konverzáciu",
    aC = "You have unread messages",
    iC = {
        VIEW_MESSAGES_BUTTON: "Zobraziť nové správy",
        CLOSE_MESSAGES_BUTTON: "Zatvoriť",
        COMPANY_FROM: "od",
        BOT: "Bot"
    },
    sC = {
        LABEL: "Četujte s nami"
    },
    oC = "Používame Chatwoot",
    EC = "Zadajte svoj e-mail",
    lC = "Zadajte svoju správu",
    cC = "Dnes",
    uC = "Včera",
    AC = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Celé meno",
                PLACEHOLDER: "Prosím zadajte svoje celé meno",
                REQUIRED_ERROR: "Vyžaduje sa celé meno"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-mailová adresa",
                PLACEHOLDER: "Zadajte svoj e-mail",
                REQUIRED_ERROR: "E-mailová adresa je povinná",
                VALID_ERROR: "Prosím zadajte platnú e-mailovú adresu"
            },
            PHONE_NUMBER: {
                LABEL: "Telefónne číslo",
                PLACEHOLDER: "Zadajte svoje telefónne číslo",
                REQUIRED_ERROR: "Telefónne číslo je povinné",
                DIAL_CODE_VALID_ERROR: "Vyberte kód krajiny",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "Žiadne výsledky neboli nájdené",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Správa",
                PLACEHOLDER: "Zadajte svoju správu",
                ERROR: "Správa je príliš krátka"
            }
        },
        CAMPAIGN_HEADER: "Please provide your name and email before starting the conversation",
        IS_REQUIRED: "je povinné",
        REQUIRED: "Povinné",
        REGEX_ERROR: "Please provide a valid input"
    },
    RC = "File exceeds the {MAXIMUM_FILE_UPLOAD_SIZE} attachment limit",
    _C = {
        INVALID: {
            FIELD: "Invalid field"
        }
    },
    TC = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    OC = {
        TITLE: "Ohodnoťte konverzáciu",
        SUBMITTED_TITLE: "Thank you for submitting the rating",
        PLACEHOLDER: "Povedzte nám viac..."
    },
    LC = {
        BUTTON_TEXT: "Request a conversation transcript",
        SEND_EMAIL_SUCCESS: "Prepis chatu bol úspešne odoslaný",
        SEND_EMAIL_ERROR: "There was an error, please try again"
    },
    IC = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Opustiť hovor"
        }
    },
    NC = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "Zobraziť všetky články",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    fC = {
        image: {
            CONTENT: "Obrázková správa"
        },
        audio: {
            CONTENT: "Hlasová správa"
        },
        video: {
            CONTENT: "Video správa"
        },
        file: {
            CONTENT: "Súbor v prílohe"
        },
        location: {
            CONTENT: "Lokácia"
        },
        fallback: {
            CONTENT: "zdieľal/a url"
        }
    },
    SC = {
        REPLY_TO: "Replying to:"
    },
    pC = {
        COMPONENTS: KD,
        TEAM_AVAILABILITY: qD,
        REPLY_TIME: ZD,
        DAY_NAMES: JD,
        START_CONVERSATION: XD,
        END_CONVERSATION: eC,
        CONTINUE_CONVERSATION: tC,
        YOU: nC,
        START_NEW_CONVERSATION: rC,
        VIEW_UNREAD_MESSAGES: aC,
        UNREAD_VIEW: iC,
        BUBBLE: sC,
        POWERED_BY: oC,
        EMAIL_PLACEHOLDER: EC,
        CHAT_PLACEHOLDER: lC,
        TODAY: cC,
        YESTERDAY: uC,
        PRE_CHAT_FORM: AC,
        FILE_SIZE_LIMIT: RC,
        CHAT_FORM: _C,
        EMOJI: TC,
        CSAT: OC,
        EMAIL_TRANSCRIPT: LC,
        INTEGRATIONS: IC,
        PORTAL: NC,
        ATTACHMENTS: fC,
        FOOTER_REPLY_TO: SC
    },
    dC = {
        FILE_BUBBLE: {
            DOWNLOAD: "Preuzimanje",
            UPLOADING: "Dodavanje..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Pošalji"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Ponovo pošalji poruku",
            ERROR_MESSAGE: "Slanje neuspešno, pokušajte ponovo"
        }
    },
    mC = {
        ONLINE: "Dostupni smo",
        OFFLINE: "Trenutno nismo dostupni"
    },
    DC = {
        IN_A_FEW_MINUTES: "Obično odgovaramo u roku od nekoliko minuta",
        IN_A_FEW_HOURS: "Obično odgovaramo u roku od nekoliko sati",
        IN_A_DAY: "Obično odgovaramo u roku od jednog dana",
        BACK_IN: "We will be back online"
    },
    CC = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    MC = "Započnite razgovor",
    hC = "Završi razgovor",
    vC = "Nastavi razgovor",
    gC = "You",
    PC = "Započnite novi razgovor",
    $C = "You have unread messages",
    yC = {
        VIEW_MESSAGES_BUTTON: "Pogledajte nove poruke",
        CLOSE_MESSAGES_BUTTON: "Zatvori",
        COMPANY_FROM: "od",
        BOT: "Bot"
    },
    UC = {
        LABEL: "Razgovarajte sa nama"
    },
    BC = "Pokreće Chatwoot",
    bC = "Molimo unesite vašu e-mail adresu",
    YC = "Napišite vašu poruku",
    kC = "Danas",
    HC = "Juče",
    VC = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Puno ime",
                PLACEHOLDER: "Molimo unesite vaše puno ime",
                REQUIRED_ERROR: "Puno ime je obavezno"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-mail adresa",
                PLACEHOLDER: "Molimo unesite vašu e-mail adresu",
                REQUIRED_ERROR: "Adresa e-pošte je obavezna",
                VALID_ERROR: "Molim vas unesite ispravnu adresu e-pošte"
            },
            PHONE_NUMBER: {
                LABEL: "Broj telefona",
                PLACEHOLDER: "Molim vas unesite vaš broj telefona",
                REQUIRED_ERROR: "Broj telefona je obavezan",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "Ništa nije pronađeno",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Poruka",
                PLACEHOLDER: "Molimo unesite vašu poruku",
                ERROR: "Poruka prekratka"
            }
        },
        CAMPAIGN_HEADER: "Molim vas dostavite vaše ime i e-poštu pre započinjanja razgovora",
        IS_REQUIRED: "je obavezno",
        REQUIRED: "Obavezno",
        REGEX_ERROR: "Please provide a valid input"
    },
    FC = "Datoteka prevazilazi {MAXIMUM_FILE_UPLOAD_SIZE} ograničenje priloga",
    wC = {
        INVALID: {
            FIELD: "Neispravno polje"
        }
    },
    WC = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    GC = {
        TITLE: "Ocenite razgovor",
        SUBMITTED_TITLE: "Hvala vam na dostavljenoj oceni",
        PLACEHOLDER: "Pričajte nam više..."
    },
    jC = {
        BUTTON_TEXT: "Zatražite kopiju razgovora",
        SEND_EMAIL_SUCCESS: "Transkript razgovora je uspešno poslat",
        SEND_EMAIL_ERROR: "Pojavila se greška, molim vas pokušajte ponovo"
    },
    zC = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    xC = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    QC = {
        image: {
            CONTENT: "Slikovita poruka"
        },
        audio: {
            CONTENT: "Govorna poruka"
        },
        video: {
            CONTENT: "Video poruka"
        },
        file: {
            CONTENT: "Prilog"
        },
        location: {
            CONTENT: "Lokacija"
        },
        fallback: {
            CONTENT: "je podelio link"
        }
    },
    KC = {
        REPLY_TO: "Replying to:"
    },
    qC = {
        COMPONENTS: dC,
        TEAM_AVAILABILITY: mC,
        REPLY_TIME: DC,
        DAY_NAMES: CC,
        START_CONVERSATION: MC,
        END_CONVERSATION: hC,
        CONTINUE_CONVERSATION: vC,
        YOU: gC,
        START_NEW_CONVERSATION: PC,
        VIEW_UNREAD_MESSAGES: $C,
        UNREAD_VIEW: yC,
        BUBBLE: UC,
        POWERED_BY: BC,
        EMAIL_PLACEHOLDER: bC,
        CHAT_PLACEHOLDER: YC,
        TODAY: kC,
        YESTERDAY: HC,
        PRE_CHAT_FORM: VC,
        FILE_SIZE_LIMIT: FC,
        CHAT_FORM: wC,
        EMOJI: WC,
        CSAT: GC,
        EMAIL_TRANSCRIPT: jC,
        INTEGRATIONS: zC,
        PORTAL: xC,
        ATTACHMENTS: QC,
        FOOTER_REPLY_TO: KC
    },
    ZC = {
        FILE_BUBBLE: {
            DOWNLOAD: "Hämta",
            UPLOADING: "Laddar upp..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Skicka"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Skicka meddelande igen",
            ERROR_MESSAGE: "Kunde inte skicka, försök igen"
        }
    },
    JC = {
        ONLINE: "Vi är online",
        OFFLINE: "Vi är borta för tillfället"
    },
    XC = {
        IN_A_FEW_MINUTES: "Svarar vanligtvis inom några minuter",
        IN_A_FEW_HOURS: "Svarar vanligtvis inom några timmar",
        IN_A_DAY: "Svar vanligtvis inom en dag",
        BACK_IN: "Vi kommer tillbaka online"
    },
    eM = {
        SUNDAY: "Söndag",
        MONDAY: "Måndag",
        TUESDAY: "Tisdag",
        WEDNESDAY: "Onsdag",
        THURSDAY: "Torsdag",
        FRIDAY: "Fredag",
        SATURDAY: "Lördag"
    },
    tM = "Starta konversation",
    nM = "Avsluta konversation",
    rM = "Fortsätt konversation",
    aM = "Du",
    iM = "Starta konversation",
    sM = "Du har olästa meddelanden",
    oM = {
        VIEW_MESSAGES_BUTTON: "Se nya meddelanden",
        CLOSE_MESSAGES_BUTTON: "Stäng",
        COMPANY_FROM: "från",
        BOT: "Bot"
    },
    EM = {
        LABEL: "Chatta med oss"
    },
    lM = "Drivs av Chatwoot",
    cM = "Ange din e-postadress",
    uM = "Skriv ditt meddelande",
    AM = "Idag",
    RM = "Igår",
    _M = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Fullständigt namn",
                PLACEHOLDER: "Vänligen ange ditt fullständiga namn",
                REQUIRED_ERROR: "Fullständigt namn krävs"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-postadress",
                PLACEHOLDER: "Vänligen ange din e-postadress",
                REQUIRED_ERROR: "E-postadress är obligatoriskt",
                VALID_ERROR: "Ange en giltig e-postadress"
            },
            PHONE_NUMBER: {
                LABEL: "Telefonnummer",
                PLACEHOLDER: "Vänligen ange ditt telefonnummer",
                REQUIRED_ERROR: "Telefonnummer är obligatoriskt",
                DIAL_CODE_VALID_ERROR: "Välj en landskod",
                VALID_ERROR: "Vänligen ange ett giltigt telefonnummer",
                DROPDOWN_EMPTY: "Inga resultat hittades",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Meddelande",
                PLACEHOLDER: "Skriv ditt meddelande",
                ERROR: "Meddelandet är för kort"
            }
        },
        CAMPAIGN_HEADER: "Ange ditt namn och e-post innan du startar konversationen",
        IS_REQUIRED: "är obligatoriskt",
        REQUIRED: "Obligatoriskt",
        REGEX_ERROR: "Please provide a valid input"
    },
    TM = "Filen överskrider gränsen för {MAXIMUM_FILE_UPLOAD_SIZE} bifogade filer",
    OM = {
        INVALID: {
            FIELD: "Ogiltigt fält"
        }
    },
    LM = {
        PLACEHOLDER: "Sök emoji",
        NOT_FOUND: "Ingen emoji matchar din sökning",
        ARIA_LABEL: "Emoji-väljare"
    },
    IM = {
        TITLE: "Betygsätt din konversation",
        SUBMITTED_TITLE: "Tack för att du lämnat in omdömet",
        PLACEHOLDER: "Berätta mer för oss!"
    },
    NM = {
        BUTTON_TEXT: "Skicka konversationstranskribering",
        SEND_EMAIL_SUCCESS: "Chattranskriberingen har skickats",
        SEND_EMAIL_ERROR: "Ett fel uppstod, vänligen försök igen"
    },
    fM = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Klicka här för att gå med",
            LEAVE_THE_ROOM: "Lämna samtalet"
        }
    },
    SM = {
        POPULAR_ARTICLES: "Populära artiklar",
        VIEW_ALL_ARTICLES: "Se alla artiklar",
        IFRAME_LOAD_ERROR: "Det gick inte att ladda artikeln, uppdatera sidan och försök igen."
    },
    pM = {
        image: {
            CONTENT: "Bildmeddelande"
        },
        audio: {
            CONTENT: "Ljudmeddelande"
        },
        video: {
            CONTENT: "Videomeddelande"
        },
        file: {
            CONTENT: "Bifogad fil"
        },
        location: {
            CONTENT: "Plats"
        },
        fallback: {
            CONTENT: "har delat en webbadress"
        }
    },
    dM = {
        REPLY_TO: "Svarar till:"
    },
    mM = {
        COMPONENTS: ZC,
        TEAM_AVAILABILITY: JC,
        REPLY_TIME: XC,
        DAY_NAMES: eM,
        START_CONVERSATION: tM,
        END_CONVERSATION: nM,
        CONTINUE_CONVERSATION: rM,
        YOU: aM,
        START_NEW_CONVERSATION: iM,
        VIEW_UNREAD_MESSAGES: sM,
        UNREAD_VIEW: oM,
        BUBBLE: EM,
        POWERED_BY: lM,
        EMAIL_PLACEHOLDER: cM,
        CHAT_PLACEHOLDER: uM,
        TODAY: AM,
        YESTERDAY: RM,
        PRE_CHAT_FORM: _M,
        FILE_SIZE_LIMIT: TM,
        CHAT_FORM: OM,
        EMOJI: LM,
        CSAT: IM,
        EMAIL_TRANSCRIPT: NM,
        INTEGRATIONS: fM,
        PORTAL: SM,
        ATTACHMENTS: pM,
        FOOTER_REPLY_TO: dM
    },
    DM = {
        FILE_BUBBLE: {
            DOWNLOAD: "பதிவிறக்கவும்",
            UPLOADING: "பதிவேறுகிறது..."
        },
        FORM_BUBBLE: {
            SUBMIT: "சமர்பிக்கவும்"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Send message again",
            ERROR_MESSAGE: "Couldn't send, try again"
        }
    },
    CM = {
        ONLINE: "We are online",
        OFFLINE: "We are away at the moment"
    },
    MM = {
        IN_A_FEW_MINUTES: "Typically replies in a few minutes",
        IN_A_FEW_HOURS: "Typically replies in a few hours",
        IN_A_DAY: "Typically replies in a day",
        BACK_IN: "We will be back online"
    },
    hM = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    vM = "Start Conversation",
    gM = "End Conversation",
    PM = "Continue conversation",
    $M = "You",
    yM = "Start a new conversation",
    UM = "You have unread messages",
    BM = {
        VIEW_MESSAGES_BUTTON: "See new messages",
        CLOSE_MESSAGES_BUTTON: "மூடு",
        COMPANY_FROM: "from",
        BOT: "Bot"
    },
    bM = {
        LABEL: "Chat with us"
    },
    YM = "சாட்வுட் மூலம் இயக்கபடுகிறது",
    kM = "உங்கள் ஈ-மெயில் முகவரியை பதிவிடவும்",
    HM = "உங்கள் செய்தியை உள்ளிடவும்",
    VM = "இன்று",
    FM = "நேற்று",
    wM = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Full Name",
                PLACEHOLDER: "Please enter your full name",
                REQUIRED_ERROR: "Full Name is required"
            },
            EMAIL_ADDRESS: {
                LABEL: "ஈ-மெயில் முகவரி",
                PLACEHOLDER: "Please enter your email address",
                REQUIRED_ERROR: "Email Address is required",
                VALID_ERROR: "சரியான ஈமெயில் முகவரியை பதிவிடவும்"
            },
            PHONE_NUMBER: {
                LABEL: "Phone Number",
                PLACEHOLDER: "Please enter your phone number",
                REQUIRED_ERROR: "Phone Number is required",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "No results found",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Message",
                PLACEHOLDER: "Please enter your message",
                ERROR: "Message too short"
            }
        },
        CAMPAIGN_HEADER: "Please provide your name and email before starting the conversation",
        IS_REQUIRED: "is required",
        REQUIRED: "Required",
        REGEX_ERROR: "Please provide a valid input"
    },
    WM = "File exceeds the {MAXIMUM_FILE_UPLOAD_SIZE} attachment limit",
    GM = {
        INVALID: {
            FIELD: "Invalid field"
        }
    },
    jM = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    zM = {
        TITLE: "Rate your conversation",
        SUBMITTED_TITLE: "Thank you for submitting the rating",
        PLACEHOLDER: "Tell us more..."
    },
    xM = {
        BUTTON_TEXT: "Request a conversation transcript",
        SEND_EMAIL_SUCCESS: "The chat transcript was sent successfully",
        SEND_EMAIL_ERROR: "There was an error, please try again"
    },
    QM = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    KM = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    qM = {
        image: {
            CONTENT: "பட செய்தி"
        },
        audio: {
            CONTENT: "ஆடியோ செய்தி"
        },
        video: {
            CONTENT: "வீடியோ செய்தி"
        },
        file: {
            CONTENT: "பைல் இணைப்புகள்"
        },
        location: {
            CONTENT: "இருப்பிடம்"
        },
        fallback: {
            CONTENT: "ஒரு URL ஐப் பகிர்ந்துள்ளார்"
        }
    },
    ZM = {
        REPLY_TO: "Replying to:"
    },
    JM = {
        COMPONENTS: DM,
        TEAM_AVAILABILITY: CM,
        REPLY_TIME: MM,
        DAY_NAMES: hM,
        START_CONVERSATION: vM,
        END_CONVERSATION: gM,
        CONTINUE_CONVERSATION: PM,
        YOU: $M,
        START_NEW_CONVERSATION: yM,
        VIEW_UNREAD_MESSAGES: UM,
        UNREAD_VIEW: BM,
        BUBBLE: bM,
        POWERED_BY: YM,
        EMAIL_PLACEHOLDER: kM,
        CHAT_PLACEHOLDER: HM,
        TODAY: VM,
        YESTERDAY: FM,
        PRE_CHAT_FORM: wM,
        FILE_SIZE_LIMIT: WM,
        CHAT_FORM: GM,
        EMOJI: jM,
        CSAT: zM,
        EMAIL_TRANSCRIPT: xM,
        INTEGRATIONS: QM,
        PORTAL: KM,
        ATTACHMENTS: qM,
        FOOTER_REPLY_TO: ZM
    },
    XM = {
        FILE_BUBBLE: {
            DOWNLOAD: "ดาวโหลด",
            UPLOADING: "กำลังอัพโหลด"
        },
        FORM_BUBBLE: {
            SUBMIT: "ส่ง"
        },
        MESSAGE_BUBBLE: {
            RETRY: "ส่งข้อความอีกครั้ง",
            ERROR_MESSAGE: "ไม่สามารถส่งได้ ลองอีกครั้ง"
        }
    },
    eh = {
        ONLINE: "เรากำลังออนไลน์",
        OFFLINE: "เราไม่อยู่"
    },
    th = {
        IN_A_FEW_MINUTES: "ปกติจะตอบกลับภายในไม่กี่นาที",
        IN_A_FEW_HOURS: "ปกติจะตอบกลับในไม่กี่ชั่วโมง",
        IN_A_DAY: "ปกติจะตอบกลับภายใน 1 วัน",
        BACK_IN: "We will be back online"
    },
    nh = {
        SUNDAY: "Sunday",
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    rh = "เริ่มการสนทนา",
    ah = "จบการสนทนา",
    ih = "สนทนาต่อ",
    sh = "You",
    oh = "เริ่มการสนทนาใหม่",
    Eh = "You have unread messages",
    lh = {
        VIEW_MESSAGES_BUTTON: "ดูข้อความใหม่",
        CLOSE_MESSAGES_BUTTON: "ปิด",
        COMPANY_FROM: "จาก",
        BOT: "บอท"
    },
    ch = {
        LABEL: "คุยกับเรา"
    },
    uh = "Powered by Chatwoot",
    Ah = "กรุณากรอกอีเมล์ของคุณ",
    Rh = "พิมพ์ข้อความ",
    _h = "วันนี้",
    Th = "เมื่อวาน",
    Oh = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "ชื่อเต็ม",
                PLACEHOLDER: "โปรดใส่ชื่อเต็มของคุณ",
                REQUIRED_ERROR: "จำเป็นต้องใส่ชื่อเต็ม"
            },
            EMAIL_ADDRESS: {
                LABEL: "ที่อยู่อีเมล์",
                PLACEHOLDER: "โปรดใส่อีเมล์ของคุณ",
                REQUIRED_ERROR: "Email Address is required",
                VALID_ERROR: "กรุณากรอกที่อยู่อีเมล์ให้ถูกต้อง"
            },
            PHONE_NUMBER: {
                LABEL: "หมายเลขโทรศัพท์",
                PLACEHOLDER: "Please enter your phone number",
                REQUIRED_ERROR: "Phone Number is required",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "No results found",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "ข้อความ",
                PLACEHOLDER: "โปรดพิมพ์ข้อความ",
                ERROR: "ข้อความสั้นเกินไป"
            }
        },
        CAMPAIGN_HEADER: "โปรดแจ้งชื่อ และ อีเมลื ก่อนเริ่มการสนทนา",
        IS_REQUIRED: "is required",
        REQUIRED: "โปรดระบุ",
        REGEX_ERROR: "Please provide a valid input"
    },
    Lh = "ไฟล์ใหเกินกว่า {MAXIMUM_FILE_UPLOAD_SIZE} ที่กำหนดไว้",
    Ih = {
        INVALID: {
            FIELD: "Invalid field"
        }
    },
    Nh = {
        PLACEHOLDER: "Search emojis",
        NOT_FOUND: "No emoji match your search",
        ARIA_LABEL: "Emoji picker"
    },
    fh = {
        TITLE: "ให้คะแนนการสนทนาครั้งนี้",
        SUBMITTED_TITLE: "ขอบคุณที่ร่วมมือให้คะแนนการสนทนากับเรา",
        PLACEHOLDER: "บอกเราเพิ่มเติม..."
    },
    Sh = {
        BUTTON_TEXT: "ต้องการให้ส่งบทสนทนานี้ทางอีเมล์",
        SEND_EMAIL_SUCCESS: "บันทึกการสนทนาได้ถูกส่งเเล้ว",
        SEND_EMAIL_ERROR: "เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง"
    },
    ph = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Click here to join",
            LEAVE_THE_ROOM: "Leave the call"
        }
    },
    dh = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "View all articles",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    mh = {
        image: {
            CONTENT: "ข้อความภาพ"
        },
        audio: {
            CONTENT: "ข้อความเสียง"
        },
        video: {
            CONTENT: "ข้อความวิดิโอ"
        },
        file: {
            CONTENT: "เเนบไฟล์"
        },
        location: {
            CONTENT: "สถานที่"
        },
        fallback: {
            CONTENT: "ได้เเชร์ลิ้ง"
        }
    },
    Dh = {
        REPLY_TO: "Replying to:"
    },
    Ch = {
        COMPONENTS: XM,
        TEAM_AVAILABILITY: eh,
        REPLY_TIME: th,
        DAY_NAMES: nh,
        START_CONVERSATION: rh,
        END_CONVERSATION: ah,
        CONTINUE_CONVERSATION: ih,
        YOU: sh,
        START_NEW_CONVERSATION: oh,
        VIEW_UNREAD_MESSAGES: Eh,
        UNREAD_VIEW: lh,
        BUBBLE: ch,
        POWERED_BY: uh,
        EMAIL_PLACEHOLDER: Ah,
        CHAT_PLACEHOLDER: Rh,
        TODAY: _h,
        YESTERDAY: Th,
        PRE_CHAT_FORM: Oh,
        FILE_SIZE_LIMIT: Lh,
        CHAT_FORM: Ih,
        EMOJI: Nh,
        CSAT: fh,
        EMAIL_TRANSCRIPT: Sh,
        INTEGRATIONS: ph,
        PORTAL: dh,
        ATTACHMENTS: mh,
        FOOTER_REPLY_TO: Dh
    },
    Mh = {
        FILE_BUBBLE: {
            DOWNLOAD: "İndir",
            UPLOADING: "Yükleniyor ..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Yolla"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Mesajı tekrar gönder",
            ERROR_MESSAGE: "Gönderilemedi, tekrar deneyin"
        }
    },
    hh = {
        ONLINE: "Çevrimiçi",
        OFFLINE: "Şu an operatörlerimiz müsait değil"
    },
    vh = {
        IN_A_FEW_MINUTES: "Genellikle birkaç dakika içinde yanıt verir",
        IN_A_FEW_HOURS: "Genellikle birkaç saat içinde yanıt verir",
        IN_A_DAY: "Genellikle bir gün içinde yanıtlar",
        BACK_IN: "Tekrar çevrim içi olacağız"
    },
    gh = {
        SUNDAY: "Pazar",
        MONDAY: "Pazartesi",
        TUESDAY: "Salı",
        WEDNESDAY: "Çarşamba",
        THURSDAY: "Perşembe",
        FRIDAY: "Cuma",
        SATURDAY: "Cumartesi"
    },
    Ph = "Görüşmeyi Başlatın",
    $h = "Görüşmeyi Sonlandır",
    yh = "Görüşmeye devam et",
    Uh = "Sen",
    Bh = "Yeni Görüşme Başlatın",
    bh = "Okunmamış mesajlarınız var",
    Yh = {
        VIEW_MESSAGES_BUTTON: "Yeni mesajları gör",
        CLOSE_MESSAGES_BUTTON: "Kapat",
        COMPANY_FROM: "dan",
        BOT: "Bot"
    },
    kh = {
        LABEL: "Sohbet et"
    },
    Hh = "Chatwoot tarafından desteklenmektedir",
    Vh = "Lütfen E-postanızı Girin",
    Fh = "Mesajınız",
    wh = "Bugün",
    Wh = "Dün",
    Gh = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Ad Soyad",
                PLACEHOLDER: "lütfen tam adınızı giriniz",
                REQUIRED_ERROR: "Tam isim gerekli"
            },
            EMAIL_ADDRESS: {
                LABEL: "E-posta adresi",
                PLACEHOLDER: "Lütfen e-eposta adresinizi girin",
                REQUIRED_ERROR: "e-Posta adresi zorunludur",
                VALID_ERROR: "Lütfen geçerli bir e-posta adresi girin"
            },
            PHONE_NUMBER: {
                LABEL: "Telefon numarası",
                PLACEHOLDER: "Lütfen telefon numaranızı yazınız",
                REQUIRED_ERROR: "Telefon numarası zorunludur",
                DIAL_CODE_VALID_ERROR: "Lütfen bir ülke kodu seçin",
                VALID_ERROR: "Lütfen geçerli bir telefon numarası girin",
                DROPDOWN_EMPTY: "Sonuç bulunamadı",
                DROPDOWN_SEARCH: "Ülke ismi giriniz"
            },
            MESSAGE: {
                LABEL: "Mesaj",
                PLACEHOLDER: "Lütfen mesajınızı girin",
                ERROR: "Mesaj çok kısa"
            }
        },
        CAMPAIGN_HEADER: "Görüşmeye başlamadan önce lütfen isminizi ve e-posta adresinizi belirtiniz",
        IS_REQUIRED: "zorunlu",
        REQUIRED: "Zorunlu",
        REGEX_ERROR: "Lütfen geçerli bir giriş yapın"
    },
    jh = "Dosya {MAXIMUM_FILE_UPLOAD_SIZE} sınırını aşıyor",
    zh = {
        INVALID: {
            FIELD: "Geçersiz alan"
        }
    },
    xh = {
        PLACEHOLDER: "İfade ara",
        NOT_FOUND: "İfade bulunamadı",
        ARIA_LABEL: "Emoji seçimi"
    },
    Qh = {
        TITLE: "Görüşmenizi değerlendirin",
        SUBMITTED_TITLE: "Değerlendirmeniz için teşekkürler",
        PLACEHOLDER: "Biraz daha fazla bilgi verin..."
    },
    Kh = {
        BUTTON_TEXT: "Konuşma kaydını talep et",
        SEND_EMAIL_SUCCESS: "Sohbet metni başarıyla gönderildi",
        SEND_EMAIL_ERROR: "Bir hata oluştu, lütfen tekrar deneyin"
    },
    qh = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Görüşmeye katılmak için tıklayın",
            LEAVE_THE_ROOM: "Görüşmeden ayrıl"
        }
    },
    Zh = {
        POPULAR_ARTICLES: "Popüler Makaleler",
        VIEW_ALL_ARTICLES: "Tüm makaleleri görüntüle",
        IFRAME_LOAD_ERROR: "Makale yüklenirken bir hata oluştu, lütfen sayfayı yenileyip tekrar deneyin."
    },
    Jh = {
        image: {
            CONTENT: "Görsel mesaj"
        },
        audio: {
            CONTENT: "Sesli mesaj"
        },
        video: {
            CONTENT: "Video mesajı"
        },
        file: {
            CONTENT: "Dosya eklentisi"
        },
        location: {
            CONTENT: "Yer"
        },
        fallback: {
            CONTENT: "bir bağlantı paylaştı"
        }
    },
    Xh = {
        REPLY_TO: "Cevap veriliyor:"
    },
    ev = {
        COMPONENTS: Mh,
        TEAM_AVAILABILITY: hh,
        REPLY_TIME: vh,
        DAY_NAMES: gh,
        START_CONVERSATION: Ph,
        END_CONVERSATION: $h,
        CONTINUE_CONVERSATION: yh,
        YOU: Uh,
        START_NEW_CONVERSATION: Bh,
        VIEW_UNREAD_MESSAGES: bh,
        UNREAD_VIEW: Yh,
        BUBBLE: kh,
        POWERED_BY: Hh,
        EMAIL_PLACEHOLDER: Vh,
        CHAT_PLACEHOLDER: Fh,
        TODAY: wh,
        YESTERDAY: Wh,
        PRE_CHAT_FORM: Gh,
        FILE_SIZE_LIMIT: jh,
        CHAT_FORM: zh,
        EMOJI: xh,
        CSAT: Qh,
        EMAIL_TRANSCRIPT: Kh,
        INTEGRATIONS: qh,
        PORTAL: Zh,
        ATTACHMENTS: Jh,
        FOOTER_REPLY_TO: Xh
    },
    tv = {
        FILE_BUBBLE: {
            DOWNLOAD: "Звантажити",
            UPLOADING: "Завантажується..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Додати"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Надіслати ще раз",
            ERROR_MESSAGE: "Не вдалося надіслати, спробуйте ще раз"
        }
    },
    nv = {
        ONLINE: "Ми онлайн",
        OFFLINE: "Нас наразі немає"
    },
    rv = {
        IN_A_FEW_MINUTES: "Зазвичай, відповідаємо за декілька хвилин",
        IN_A_FEW_HOURS: "Зазвичай, відповідаємо за декілька годин",
        IN_A_DAY: "Зазвичай, відповідаємо протягом доби",
        BACK_IN: "Ми повернемось в мережу"
    },
    av = {
        SUNDAY: "Неділя",
        MONDAY: "Понеділок",
        TUESDAY: "Вівторок",
        WEDNESDAY: "Середа",
        THURSDAY: "Четвер",
        FRIDAY: "П'ятниця",
        SATURDAY: "Субота"
    },
    iv = "Розпочати розмову",
    sv = "Закінчити спілкування",
    ov = "Продовжити спілкування",
    Ev = "Ви",
    lv = "Розпочати нову розмову",
    cv = "У Вас є непрочитані повідомлення",
    uv = {
        VIEW_MESSAGES_BUTTON: "Переглянути нові повідомлення",
        CLOSE_MESSAGES_BUTTON: "Закрити",
        COMPANY_FROM: "від",
        BOT: "Бот"
    },
    Av = {
        LABEL: "Почніть розмову з нами"
    },
    Rv = "Працює на Chatwoot",
    _v = "Введіть адресу електронної пошти",
    Tv = "Введіть Ваше повідомлення",
    Ov = "Сьогодні",
    Lv = "Вчора",
    Iv = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Повне ім`я",
                PLACEHOLDER: "Будь ласка, введіть своє повне ім'я",
                REQUIRED_ERROR: "Потрібне повне ім'я"
            },
            EMAIL_ADDRESS: {
                LABEL: "Адреса електронної пошти",
                PLACEHOLDER: "Будь ласка, введіть адресу вашої електронної пошти",
                REQUIRED_ERROR: "Необхідно вказати адресу електронної пошти",
                VALID_ERROR: "Будь ласка, введіть коректну адресу електронної пошти"
            },
            PHONE_NUMBER: {
                LABEL: "Номер телефону",
                PLACEHOLDER: "Будь ласка, введіть номер телефону",
                REQUIRED_ERROR: "Номер телефону є обов'язковим",
                DIAL_CODE_VALID_ERROR: "Будь ласка, оберіть код країни",
                VALID_ERROR: "Будь ласка, введіть правильний номер телефону",
                DROPDOWN_EMPTY: "Результатів не знайдено",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Текст повідомлення",
                PLACEHOLDER: "Будь ласка, введіть ваше повідомлення",
                ERROR: "Занадто коротке повідомлення"
            }
        },
        CAMPAIGN_HEADER: "Будь ласка, надайте своє ім'я та електронну пошту перед початком бесіди",
        IS_REQUIRED: "обов'язково",
        REQUIRED: "Обов'язково",
        REGEX_ERROR: "Будь ласка, введіть коректний текст"
    },
    Nv = "Файл перевищує ліміт вкладення {MAXIMUM_FILE_UPLOAD_SIZE}",
    fv = {
        INVALID: {
            FIELD: "Невірно заповнене поле"
        }
    },
    Sv = {
        PLACEHOLDER: "Пошук емодзі",
        NOT_FOUND: "Немає емодзі, що відповідають пошуковому запиту",
        ARIA_LABEL: "Emoji picker"
    },
    pv = {
        TITLE: "Оцініть вашу бесіду",
        SUBMITTED_TITLE: "Дякуємо за оцінку",
        PLACEHOLDER: "Розкажіть докладніше..."
    },
    dv = {
        BUTTON_TEXT: "Запит на текст розмови",
        SEND_EMAIL_SUCCESS: "Текст розмови надісланий",
        SEND_EMAIL_ERROR: "Сталася помилка, будь ласка, спробуйте ще раз"
    },
    mv = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Натисніть тут, щоб приєднатися",
            LEAVE_THE_ROOM: "Залишити дзвінок"
        }
    },
    Dv = {
        POPULAR_ARTICLES: "Популярні статті",
        VIEW_ALL_ARTICLES: "Переглянути всі статті",
        IFRAME_LOAD_ERROR: "Помилка при завантаженні статті, будь ласка, оновіть сторінку та повторіть спробу."
    },
    Cv = {
        image: {
            CONTENT: "Повідомлення з картинкою"
        },
        audio: {
            CONTENT: "Аудіо-повідомлення"
        },
        video: {
            CONTENT: "Відеоповідомлення"
        },
        file: {
            CONTENT: "Повідомлення з файлом"
        },
        location: {
            CONTENT: "Місцезнаходження"
        },
        fallback: {
            CONTENT: "поділився посиланням"
        }
    },
    Mv = {
        REPLY_TO: "Відповісти:"
    },
    hv = {
        COMPONENTS: tv,
        TEAM_AVAILABILITY: nv,
        REPLY_TIME: rv,
        DAY_NAMES: av,
        START_CONVERSATION: iv,
        END_CONVERSATION: sv,
        CONTINUE_CONVERSATION: ov,
        YOU: Ev,
        START_NEW_CONVERSATION: lv,
        VIEW_UNREAD_MESSAGES: cv,
        UNREAD_VIEW: uv,
        BUBBLE: Av,
        POWERED_BY: Rv,
        EMAIL_PLACEHOLDER: _v,
        CHAT_PLACEHOLDER: Tv,
        TODAY: Ov,
        YESTERDAY: Lv,
        PRE_CHAT_FORM: Iv,
        FILE_SIZE_LIMIT: Nv,
        CHAT_FORM: fv,
        EMOJI: Sv,
        CSAT: pv,
        EMAIL_TRANSCRIPT: dv,
        INTEGRATIONS: mv,
        PORTAL: Dv,
        ATTACHMENTS: Cv,
        FOOTER_REPLY_TO: Mv
    },
    vv = {
        FILE_BUBBLE: {
            DOWNLOAD: "Tải xuống",
            UPLOADING: "Đang tải lên..."
        },
        FORM_BUBBLE: {
            SUBMIT: "Gửi"
        },
        MESSAGE_BUBBLE: {
            RETRY: "Gửi lại tin nhắn",
            ERROR_MESSAGE: "Không thể gửi, xin thử lại"
        }
    },
    gv = {
        ONLINE: "Chúng tôi đang trực tuyến",
        OFFLINE: "Hiện tại chúng tôi đang bận chút"
    },
    Pv = {
        IN_A_FEW_MINUTES: "Thường trả lời sau vài phút",
        IN_A_FEW_HOURS: "Thường trả lời sau vài giờ",
        IN_A_DAY: "Thường trả lời trong một ngày",
        BACK_IN: "Chúng tôi sẽ quay lại"
    },
    $v = {
        SUNDAY: "Chủ Nhật",
        MONDAY: "Thứ Hai",
        TUESDAY: "Thứ Ba",
        WEDNESDAY: "Thứ Tư",
        THURSDAY: "Thứ Năm",
        FRIDAY: "Thứ Sáu",
        SATURDAY: "Thứ Bảy"
    },
    yv = "Bắt đầu một cuộc trò chuyện",
    Uv = "Kết thúc hội thoại",
    Bv = "Tiếp tục hội thoại",
    bv = "You",
    Yv = "Bắt đầu hội thoại mới",
    kv = "Bạn có tin nhắn chưa đọc",
    Hv = {
        VIEW_MESSAGES_BUTTON: "Xem tin nhắn mới",
        CLOSE_MESSAGES_BUTTON: "Đóng",
        COMPANY_FROM: "từ",
        BOT: "Bot"
    },
    Vv = {
        LABEL: "Trò chuyện với chúng tôi"
    },
    Fv = "CC bởi Chatwoot",
    wv = "Vui lòng nhập email",
    Wv = "Gõ tin nhắn của bạn",
    Gv = "Hôm nay",
    jv = "Hôm qua",
    zv = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "Tên đầy đủ",
                PLACEHOLDER: "Vui lòng nhập tên đầy đủ của bạn",
                REQUIRED_ERROR: "Tên đầy đủ là bắt buộc"
            },
            EMAIL_ADDRESS: {
                LABEL: "Email",
                PLACEHOLDER: "Vui lòng nhập email",
                REQUIRED_ERROR: "Phải có địa chỉ email",
                VALID_ERROR: "Vui lòng nhập một địa chỉ email hợp lệ"
            },
            PHONE_NUMBER: {
                LABEL: "Số điện thoại",
                PLACEHOLDER: "Vui lòng nhập số điện thoại của bạn",
                REQUIRED_ERROR: "Cần phải nhập số điện thoại",
                DIAL_CODE_VALID_ERROR: "Vui lòng chọn quốc gia",
                VALID_ERROR: "Vui lòng nhập số điện thoại đúng",
                DROPDOWN_EMPTY: "Không tìm thấy kết quả",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "Tin nhắn",
                PLACEHOLDER: "Vui lòng nhập tin nhắn",
                ERROR: "Tin nhắn quá ngắn"
            }
        },
        CAMPAIGN_HEADER: "Vui lòng cung cấp tên và địa chỉ email của bạn trước khi bắt đầu hội thoại",
        IS_REQUIRED: "được yêu cầu",
        REQUIRED: "Bắt buộc",
        REGEX_ERROR: "Please provide a valid input"
    },
    xv = "Tệp vượt quá kích thước giới hạn {MAXIMUM_FILE_UPLOAD_SIZE}",
    Qv = {
        INVALID: {
            FIELD: "Trường không hợp lệ"
        }
    },
    Kv = {
        PLACEHOLDER: "Tìm kiếm biểu tượng cảm xúc",
        NOT_FOUND: "Không có biểu tượng cảm xúc nào phù hợp với tìm kiếm của bạn",
        ARIA_LABEL: "Emoji picker"
    },
    qv = {
        TITLE: "Đánh giá hội thoại",
        SUBMITTED_TITLE: "Cảm ơn vì đã đánh giá",
        PLACEHOLDER: "Cho chúng tôi biết thêm..."
    },
    Zv = {
        BUTTON_TEXT: "Yêu cầu bản ghi hội thoại",
        SEND_EMAIL_SUCCESS: "Bản ghi cuộc trò chuyện đã được gửi thành công",
        SEND_EMAIL_ERROR: "Đã có lỗi, vui lòng thử lại"
    },
    Jv = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "Bấm vào đây để tham gia",
            LEAVE_THE_ROOM: "Rời cuộc gọi"
        }
    },
    Xv = {
        POPULAR_ARTICLES: "Popular Articles",
        VIEW_ALL_ARTICLES: "Xem tất cả bài viết",
        IFRAME_LOAD_ERROR: "There was an error loading the article, please refresh the page and try again."
    },
    eg = {
        image: {
            CONTENT: "Tin nhắn hình ảnh"
        },
        audio: {
            CONTENT: "Tin nhắn thoại"
        },
        video: {
            CONTENT: "Tin nhắn video"
        },
        file: {
            CONTENT: "Tập tin đính kèm"
        },
        location: {
            CONTENT: "Địa điểm"
        },
        fallback: {
            CONTENT: "có một đường dẫn chia sẻ"
        }
    },
    tg = {
        REPLY_TO: "Replying to:"
    },
    ng = {
        COMPONENTS: vv,
        TEAM_AVAILABILITY: gv,
        REPLY_TIME: Pv,
        DAY_NAMES: $v,
        START_CONVERSATION: yv,
        END_CONVERSATION: Uv,
        CONTINUE_CONVERSATION: Bv,
        YOU: bv,
        START_NEW_CONVERSATION: Yv,
        VIEW_UNREAD_MESSAGES: kv,
        UNREAD_VIEW: Hv,
        BUBBLE: Vv,
        POWERED_BY: Fv,
        EMAIL_PLACEHOLDER: wv,
        CHAT_PLACEHOLDER: Wv,
        TODAY: Gv,
        YESTERDAY: jv,
        PRE_CHAT_FORM: zv,
        FILE_SIZE_LIMIT: xv,
        CHAT_FORM: Qv,
        EMOJI: Kv,
        CSAT: qv,
        EMAIL_TRANSCRIPT: Zv,
        INTEGRATIONS: Jv,
        PORTAL: Xv,
        ATTACHMENTS: eg,
        FOOTER_REPLY_TO: tg
    },
    rg = {
        FILE_BUBBLE: {
            DOWNLOAD: "下载",
            UPLOADING: "上传中..."
        },
        FORM_BUBBLE: {
            SUBMIT: "提交"
        },
        MESSAGE_BUBBLE: {
            RETRY: "请重新发送消息",
            ERROR_MESSAGE: "无法发送，请重试"
        }
    },
    ag = {
        ONLINE: "在线",
        OFFLINE: "当前已离线"
    },
    ig = {
        IN_A_FEW_MINUTES: "通常在几分钟内回复您",
        IN_A_FEW_HOURS: "通常在几小时内回复您",
        IN_A_DAY: "通常在一天之内回复您",
        BACK_IN: "我们将重新上线"
    },
    sg = {
        SUNDAY: "周日",
        MONDAY: "周一",
        TUESDAY: "周二",
        WEDNESDAY: "周三",
        THURSDAY: "周四",
        FRIDAY: "周五",
        SATURDAY: "周六"
    },
    og = "开始会话",
    Eg = "结束对话",
    lg = "继续对话",
    cg = "您",
    ug = "开始新的对话",
    Ag = "您有未读消息",
    Rg = {
        VIEW_MESSAGES_BUTTON: "查看新消息",
        CLOSE_MESSAGES_BUTTON: "关闭",
        COMPANY_FROM: "发自",
        BOT: "机器人"
    },
    _g = {
        LABEL: "联系我们"
    },
    Tg = "由 Chatwoot 支持",
    Og = "请输入您的电子邮件",
    Lg = "输入您的消息",
    Ig = "今天",
    Ng = "昨天",
    fg = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "名字",
                PLACEHOLDER: "请输入您的姓名",
                REQUIRED_ERROR: "必须填写姓名"
            },
            EMAIL_ADDRESS: {
                LABEL: "电子邮件地址",
                PLACEHOLDER: "请输入您的邮箱地址",
                REQUIRED_ERROR: "电子邮件地址是必填项",
                VALID_ERROR: "请输入一个有效的电子邮件"
            },
            PHONE_NUMBER: {
                LABEL: "电话号码",
                PLACEHOLDER: "请输入您的手机号码",
                REQUIRED_ERROR: "电话号码是必填项",
                DIAL_CODE_VALID_ERROR: "请选择国家代码",
                VALID_ERROR: "请输入一个有效的电话号码",
                DROPDOWN_EMPTY: "没有检索到相关信息",
                DROPDOWN_SEARCH: "搜索国家/地区"
            },
            MESSAGE: {
                LABEL: "消息",
                PLACEHOLDER: "请输入您的消息",
                ERROR: "消息太短了"
            }
        },
        CAMPAIGN_HEADER: "请在开始对话之前提供您的姓名和电子邮件",
        IS_REQUIRED: "是必填项",
        REQUIRED: "必填项",
        REGEX_ERROR: "请提供一个有效的值"
    },
    Sg = "文件超过大小 {MAXIMUM_FILE_UPLOAD_SIZE} 附件限制",
    pg = {
        INVALID: {
            FIELD: "无效字段"
        }
    },
    dg = {
        PLACEHOLDER: "搜索表情符号",
        NOT_FOUND: "没有适合你的搜索结果",
        ARIA_LABEL: "Emoji选择器"
    },
    mg = {
        TITLE: "评价您的对话",
        SUBMITTED_TITLE: "感谢您提交评分",
        PLACEHOLDER: "请告诉我们更多..."
    },
    Dg = {
        BUTTON_TEXT: "请求会话抄本",
        SEND_EMAIL_SUCCESS: "已成功发送聊天记录",
        SEND_EMAIL_ERROR: "出现错误，请重试"
    },
    Cg = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "点击这里加入",
            LEAVE_THE_ROOM: "离开来电"
        }
    },
    Mg = {
        POPULAR_ARTICLES: "最受欢迎文章",
        VIEW_ALL_ARTICLES: "查看所有文章",
        IFRAME_LOAD_ERROR: "加载文章时出错，请刷新页面后重试。"
    },
    hg = {
        image: {
            CONTENT: "图片消息"
        },
        audio: {
            CONTENT: "音频消息"
        },
        video: {
            CONTENT: "视频消息"
        },
        file: {
            CONTENT: "附件"
        },
        location: {
            CONTENT: "位置"
        },
        fallback: {
            CONTENT: "分享了一个网址"
        }
    },
    vg = {
        REPLY_TO: "回复："
    },
    gg = {
        COMPONENTS: rg,
        TEAM_AVAILABILITY: ag,
        REPLY_TIME: ig,
        DAY_NAMES: sg,
        START_CONVERSATION: og,
        END_CONVERSATION: Eg,
        CONTINUE_CONVERSATION: lg,
        YOU: cg,
        START_NEW_CONVERSATION: ug,
        VIEW_UNREAD_MESSAGES: Ag,
        UNREAD_VIEW: Rg,
        BUBBLE: _g,
        POWERED_BY: Tg,
        EMAIL_PLACEHOLDER: Og,
        CHAT_PLACEHOLDER: Lg,
        TODAY: Ig,
        YESTERDAY: Ng,
        PRE_CHAT_FORM: fg,
        FILE_SIZE_LIMIT: Sg,
        CHAT_FORM: pg,
        EMOJI: dg,
        CSAT: mg,
        EMAIL_TRANSCRIPT: Dg,
        INTEGRATIONS: Cg,
        PORTAL: Mg,
        ATTACHMENTS: hg,
        FOOTER_REPLY_TO: vg
    },
    Pg = {
        FILE_BUBBLE: {
            DOWNLOAD: "下載",
            UPLOADING: "上傳中"
        },
        FORM_BUBBLE: {
            SUBMIT: "送出"
        },
        MESSAGE_BUBBLE: {
            RETRY: "重新發送訊息",
            ERROR_MESSAGE: "無法傳送！請重新嘗試。"
        }
    },
    $g = {
        ONLINE: "我們在線上",
        OFFLINE: "我們目前不在線上"
    },
    yg = {
        IN_A_FEW_MINUTES: "通常在幾分鐘內回覆",
        IN_A_FEW_HOURS: "通常在幾小時內回覆",
        IN_A_DAY: "通常在一天內回覆",
        BACK_IN: "We will be back online"
    },
    Ug = {
        SUNDAY: "星期日",
        MONDAY: "星期一",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday"
    },
    Bg = "開始對話",
    bg = "結束對話",
    Yg = "繼續對話",
    kg = "You",
    Hg = "開始一個新對話",
    Vg = "You have unread messages",
    Fg = {
        VIEW_MESSAGES_BUTTON: "查看新訊息",
        CLOSE_MESSAGES_BUTTON: "關閉",
        COMPANY_FROM: "from",
        BOT: "機器人"
    },
    wg = {
        LABEL: "與我們對話"
    },
    Wg = "Powered by Chatwoot",
    Gg = "請輸入您的電子信箱",
    jg = "輸入你的訊息",
    zg = "今天",
    xg = "昨天",
    Qg = {
        FIELDS: {
            FULL_NAME: {
                LABEL: "聯絡人姓名",
                PLACEHOLDER: "請輸入您的完整姓名",
                REQUIRED_ERROR: "姓名為必填"
            },
            EMAIL_ADDRESS: {
                LABEL: "電子信箱地址",
                PLACEHOLDER: "請輸入你的 Email",
                REQUIRED_ERROR: "電子郵件為必填",
                VALID_ERROR: "請輸入一個有效的電子信箱"
            },
            PHONE_NUMBER: {
                LABEL: "聯絡人電話",
                PLACEHOLDER: "請輸入您的電話號碼",
                REQUIRED_ERROR: "電話號碼為必填",
                DIAL_CODE_VALID_ERROR: "Please select a country code",
                VALID_ERROR: "Please enter a valid phone number",
                DROPDOWN_EMPTY: "No results found",
                DROPDOWN_SEARCH: "Search country"
            },
            MESSAGE: {
                LABEL: "訊息",
                PLACEHOLDER: "請輸入你的訊息",
                ERROR: "訊息過短"
            }
        },
        CAMPAIGN_HEADER: "在開始對話之前請提供您的名字及電郵",
        IS_REQUIRED: "必填",
        REQUIRED: "Required",
        REGEX_ERROR: "請輸入有效的字符"
    },
    Kg = "{MAXIMUM_FILE_UPLOAD_SIZE} 已超出檔案大小限制",
    qg = {
        INVALID: {
            FIELD: "無效的欄位"
        }
    },
    Zg = {
        PLACEHOLDER: "搜尋 emojis",
        NOT_FOUND: "查無相符的 emoji",
        ARIA_LABEL: "表情選擇"
    },
    Jg = {
        TITLE: "為此對話評分",
        SUBMITTED_TITLE: "感謝您提交的評分",
        PLACEHOLDER: "告訴我們更多..."
    },
    Xg = {
        BUTTON_TEXT: "請求對話記錄",
        SEND_EMAIL_SUCCESS: "對話記錄已成功發送",
        SEND_EMAIL_ERROR: "出現錯誤，請重試"
    },
    eP = {
        DYTE: {
            CLICK_HERE_TO_JOIN: "點擊這裡加入",
            LEAVE_THE_ROOM: "留下電話"
        }
    },
    tP = {
        POPULAR_ARTICLES: "熱門文章",
        VIEW_ALL_ARTICLES: "查看所有文章",
        IFRAME_LOAD_ERROR: "載入文章時出錯，請重新整理頁面並重試。"
    },
    nP = {
        image: {
            CONTENT: "圖片訊息"
        },
        audio: {
            CONTENT: "聲音訊息"
        },
        video: {
            CONTENT: "影片訊息"
        },
        file: {
            CONTENT: "附件"
        },
        location: {
            CONTENT: "位置"
        },
        fallback: {
            CONTENT: "分享了一個網址"
        }
    },
    rP = {
        REPLY_TO: "回覆:"
    },
    aP = {
        COMPONENTS: Pg,
        TEAM_AVAILABILITY: $g,
        REPLY_TIME: yg,
        DAY_NAMES: Ug,
        START_CONVERSATION: Bg,
        END_CONVERSATION: bg,
        CONTINUE_CONVERSATION: Yg,
        YOU: kg,
        START_NEW_CONVERSATION: Hg,
        VIEW_UNREAD_MESSAGES: Vg,
        UNREAD_VIEW: Fg,
        BUBBLE: wg,
        POWERED_BY: Wg,
        EMAIL_PLACEHOLDER: Gg,
        CHAT_PLACEHOLDER: jg,
        TODAY: zg,
        YESTERDAY: xg,
        PRE_CHAT_FORM: Qg,
        FILE_SIZE_LIMIT: Kg,
        CHAT_FORM: qg,
        EMOJI: Zg,
        CSAT: Jg,
        EMAIL_TRANSCRIPT: Xg,
        INTEGRATIONS: eP,
        PORTAL: tP,
        ATTACHMENTS: nP,
        FOOTER_REPLY_TO: rP
    },
    wP = {
        ar: Nu,
        ca: xu,
        cs: SA,
        da: KA,
        de: dR,
        el: ZR,
        en: D_,
        es: X_,
        fa: MT,
        fi: tO,
        fr: vO,
        he: rL,
        hi: PL,
        hu: iI,
        id: yI,
        is: oN,
        it: BN,
        ja: cf,
        ko: kf,
        lt: AS,
        lv: VS,
        ml: _p,
        nl: wp,
        no: Od,
        pl: Gd,
        pt_BR: zm,
        pt: Im,
        ro: fD,
        ru: QD,
        sk: pC,
        sr: qC,
        sv: mM,
        ta: JM,
        th: Ch,
        tr: ev,
        uk: hv,
        vi: ng,
        zh_CN: gg,
        zh_TW: aP
    },
    vr = {
        "International Date Line West (GMT−12:00)": "Etc/GMT+12",
        "Midway Island (GMT-11:00)": "Pacific/Midway",
        "American Samoa (GMT-11:00)": "Pacific/Pago_Pago",
        "Hawaii (GMT-10:00)": "Pacific/Honolulu",
        "Alaska (GMT-08:00)": "America/Juneau",
        "Pacific Time (US & Canada) (GMT-07:00)": "America/Los_Angeles",
        "Tijuana (GMT-07:00)": "America/Tijuana",
        "Mountain Time (US & Canada) (GMT-06:00)": "America/Denver",
        "Arizona (GMT-07:00)": "America/Phoenix",
        "Chihuahua (GMT-06:00)": "America/Chihuahua",
        "Mazatlan (GMT-06:00)": "America/Mazatlan",
        "Central Time (US & Canada) (GMT-05:00)": "America/Chicago",
        "Saskatchewan (GMT-06:00)": "America/Regina",
        "Guadalajara (GMT-05:00)": "America/Mexico_City",
        "Mexico City (GMT-05:00)": "America/Mexico_City",
        "Monterrey (GMT-05:00)": "America/Monterrey",
        "Central America (GMT−06:00)": "America/Guatemala",
        "Eastern Time (US & Canada) (GMT-04:00)": "America/New_York",
        "Indiana (East) (GMT-04:00)": "America/Indiana/Indianapolis",
        "Bogota (GMT-05:00)": "America/Bogota",
        "Lima (GMT-05:00)": "America/Lima",
        "Quito (GMT-05:00)": "America/Lima",
        "Atlantic Time (Canada) (GMT-03:00)": "America/Halifax",
        "Caracas (GMT-04:00)": "America/Caracas",
        "La Paz (GMT-04:00)": "America/La_Paz",
        "Santiago (GMT-04:00)": "America/Santiago",
        "Newfoundland (GMT-02:30)": "America/St_Johns",
        "Brasilia (GMT-03:00)": "America/Sao_Paulo",
        "Buenos Aires (GMT-03:00)": "America/Argentina/Buenos_Aires",
        "Montevideo (GMT-03:00)": "America/Montevideo",
        "Georgetown (GMT-04:00)": "America/Guyana",
        "Puerto Rico (GMT-04:00)": "America/Puerto_Rico",
        "Greenland (GMT-02:00)": "America/Godthab",
        "Mid-Atlantic (GMT-02:00)": "Atlantic/South_Georgia",
        "Azores (GMT-01:00)": "Atlantic/Azores",
        "Cape Verde Is. (GMT-01:00)": "Atlantic/Cape_Verde",
        "Dublin (GMT+01:00)": "Europe/Dublin",
        "Edinburgh (GMT+01:00)": "Europe/London",
        "Lisbon (GMT+01:00)": "Europe/Lisbon",
        "London (GMT+01:00)": "Europe/London",
        "Casablanca (GMT+01:00)": "Africa/Casablanca",
        "Monrovia (GMT+00:00)": "Africa/Monrovia",
        "UTC (UTC+00:00)": "Etc/UTC",
        "Belgrade (GMT+02:00)": "Europe/Belgrade",
        "Bratislava (GMT+02:00)": "Europe/Bratislava",
        "Budapest (GMT+02:00)": "Europe/Budapest",
        "Ljubljana (GMT+02:00)": "Europe/Ljubljana",
        "Prague (GMT+02:00)": "Europe/Prague",
        "Sarajevo (GMT+02:00)": "Europe/Sarajevo",
        "Skopje (GMT+02:00)": "Europe/Skopje",
        "Warsaw (GMT+02:00)": "Europe/Warsaw",
        "Zagreb (GMT+02:00)": "Europe/Zagreb",
        "Brussels (GMT+02:00)": "Europe/Brussels",
        "Copenhagen (GMT+02:00)": "Europe/Copenhagen",
        "Madrid (GMT+02:00)": "Europe/Madrid",
        "Paris (GMT+02:00)": "Europe/Paris",
        "Amsterdam (GMT+02:00)": "Europe/Amsterdam",
        "Berlin (GMT+02:00)": "Europe/Berlin",
        "Bern (GMT+02:00)": "Europe/Zurich",
        "Zurich (GMT+02:00)": "Europe/Zurich",
        "Rome (GMT+02:00)": "Europe/Rome",
        "Stockholm (GMT+02:00)": "Europe/Stockholm",
        "Vienna (GMT+02:00)": "Europe/Vienna",
        "West Central Africa (GMT+01:00)": "Africa/Algiers",
        "Bucharest (GMT+03:00)": "Europe/Bucharest",
        "Cairo (GMT+02:00)": "Africa/Cairo",
        "Helsinki (GMT+03:00)": "Europe/Helsinki",
        "Kyiv (GMT+03:00)": "Europe/Kiev",
        "Riga (GMT+03:00)": "Europe/Riga",
        "Sofia (GMT+03:00)": "Europe/Sofia",
        "Tallinn (GMT+03:00)": "Europe/Tallinn",
        "Vilnius (GMT+03:00)": "Europe/Vilnius",
        "Athens (GMT+03:00)": "Europe/Athens",
        "Istanbul (GMT+03:00)": "Europe/Istanbul",
        "Minsk (GMT+03:00)": "Europe/Minsk",
        "Jerusalem (GMT+03:00)": "Asia/Jerusalem",
        "Harare (GMT+02:00)": "Africa/Harare",
        "Pretoria (GMT+02:00)": "Africa/Johannesburg",
        "Kaliningrad (GMT+02:00)": "Europe/Kaliningrad",
        "Moscow (GMT+03:00)": "Europe/Moscow",
        "St. Petersburg (GMT+03:00)": "Europe/Moscow",
        "Volgograd (GMT+03:00)": "Europe/Volgograd",
        "Samara (GMT+04:00)": "Europe/Samara",
        "Kuwait (GMT+03:00)": "Asia/Kuwait",
        "Riyadh (GMT+03:00)": "Asia/Riyadh",
        "Nairobi (GMT+03:00)": "Africa/Nairobi",
        "Baghdad (GMT+03:00)": "Asia/Baghdad",
        "Tehran (GMT+04:30)": "Asia/Tehran",
        "Abu Dhabi (GMT+04:00)": "Asia/Muscat",
        "Muscat (GMT+04:00)": "Asia/Muscat",
        "Baku (GMT+04:00)": "Asia/Baku",
        "Tbilisi (GMT+04:00)": "Asia/Tbilisi",
        "Yerevan (GMT+04:00)": "Asia/Yerevan",
        "Kabul (GMT+04:30)": "Asia/Kabul",
        "Ekaterinburg (GMT+05:00)": "Asia/Yekaterinburg",
        "Islamabad (GMT+05:00)": "Asia/Karachi",
        "Karachi (GMT+05:00)": "Asia/Karachi",
        "Tashkent (GMT+05:00)": "Asia/Tashkent",
        "Chennai (GMT+05:30)": "Asia/Kolkata",
        "Kolkata (GMT+05:30)": "Asia/Kolkata",
        "Mumbai (GMT+05:30)": "Asia/Kolkata",
        "New Delhi (GMT+05:30)": "Asia/Kolkata",
        "Kathmandu (GMT+05:45)": "Asia/Kathmandu",
        "Astana (GMT+06:00)": "Asia/Dhaka",
        "Dhaka (GMT+06:00)": "Asia/Dhaka",
        "Sri Jayawardenepura (GMT+05:30)": "Asia/Colombo",
        "Almaty (GMT+06:00)": "Asia/Almaty",
        "Novosibirsk (GMT+07:00)": "Asia/Novosibirsk",
        "Rangoon (GMT+06:30)": "Asia/Rangoon",
        "Bangkok (GMT+07:00)": "Asia/Bangkok",
        "Hanoi (GMT+07:00)": "Asia/Bangkok",
        "Jakarta (GMT+07:00)": "Asia/Jakarta",
        "Krasnoyarsk (GMT+07:00)": "Asia/Krasnoyarsk",
        "Beijing (GMT+08:00)": "Asia/Shanghai",
        "Chongqing (GMT+08:00)": "Asia/Chongqing",
        "Hong Kong (GMT+08:00)": "Asia/Hong_Kong",
        "Urumqi (GMT+08:00)": "Asia/Urumqi",
        "Kuala Lumpur (GMT+08:00)": "Asia/Kuala_Lumpur",
        "Singapore (GMT+08:00)": "Asia/Singapore",
        "Taipei (GMT+08:00)": "Asia/Taipei",
        "Perth (GMT+08:00)": "Australia/Perth",
        "Irkutsk (GMT+08:00)": "Asia/Irkutsk",
        "Ulaanbaatar (GMT+08:00)": "Asia/Ulaanbaatar",
        "Seoul (GMT+09:00)": "Asia/Seoul",
        "Osaka (GMT+09:00)": "Asia/Tokyo",
        "Sapporo (GMT+09:00)": "Asia/Tokyo",
        "Tokyo (GMT+09:00)": "Asia/Tokyo",
        "Yakutsk (GMT+09:00)": "Asia/Yakutsk",
        "Darwin (GMT+09:30)": "Australia/Darwin",
        "Adelaide (GMT+09:30)": "Australia/Adelaide",
        "Canberra (GMT+10:00)": "Australia/Melbourne",
        "Melbourne (GMT+10:00)": "Australia/Melbourne",
        "Sydney (GMT+10:00)": "Australia/Sydney",
        "Brisbane (GMT+10:00)": "Australia/Brisbane",
        "Hobart (GMT+10:00)": "Australia/Hobart",
        "Vladivostok (GMT+10:00)": "Asia/Vladivostok",
        "Guam (GMT+10:00)": "Pacific/Guam",
        "Port Moresby (GMT+10:00)": "Pacific/Port_Moresby",
        "Magadan (GMT+11:00)": "Asia/Magadan",
        "Srednekolymsk (GMT+11:00)": "Asia/Srednekolymsk",
        "Solomon Is. (GMT+11:00)": "Pacific/Guadalcanal",
        "New Caledonia (GMT+11:00)": "Pacific/Noumea",
        "Fiji (GMT+12:00)": "Pacific/Fiji",
        "Kamchatka (GMT+12:00)": "Asia/Kamchatka",
        "Marshall Is. (GMT+12:00)": "Pacific/Majuro",
        "Auckland (GMT+12:00)": "Pacific/Auckland",
        "Wellington (GMT+12:00)": "Pacific/Auckland",
        "Nuku'alofa (GMT+13:00)": "Pacific/Tongatapu",
        "Tokelau Is. (GMT+13:00)": "Pacific/Fakaofo",
        "Chatham Is. (GMT+12:45)": "Pacific/Chatham",
        "Samoa (GMT+13:00)": "Pacific/Apia"
    },
    WP = [{
        day: 0,
        to: "",
        from: "",
        valid: !1
    }, {
        day: 1,
        to: "",
        from: "",
        valid: !1
    }, {
        day: 2,
        to: "",
        from: "",
        valid: !1
    }, {
        day: 3,
        to: "",
        from: "",
        valid: !1
    }, {
        day: 4,
        to: "",
        from: "",
        valid: !1
    }, {
        day: 5,
        to: "",
        from: "",
        valid: !1
    }, {
        day: 6,
        to: "",
        from: "",
        valid: !1
    }],
    GP = (e = 15) => {
        const t = new Date(1970, 1, 1),
            n = [];
        for (; t.getDate() === 1;) n.push(t.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !0
        })), t.setMinutes(t.getMinutes() + e);
        return n
    },
    gr = (e, t) => {
        const n = e > 11 ? "PM" : "AM",
            r = e > 12 ? e % 12 : e || 12,
            a = r < 10 ? `0${r}` : r,
            i = t < 10 ? `0${t}` : t;
        return `${a}:${i} ${n}`
    },
    jP = e => e.map(t => {
        const {
            day_of_week: n,
            open_hour: r,
            open_minutes: a,
            close_hour: i,
            close_minutes: s,
            closed_all_day: o,
            open_all_day: E
        } = t, u = o ? "" : gr(r, a), I = o ? "" : gr(i, s);
        return {
            day: n,
            to: I,
            from: u,
            valid: !o,
            openAllDay: E
        }
    }),
    zP = e => e.map(t => {
        const n = t.openAllDay ? !1 : !(t.to && t.from),
            r = t.openAllDay;
        let a = "",
            i = "",
            s = "",
            o = "",
            E = "",
            u = "";
        return n || (a = Mr(t.from, "hh:mm a", new Date), i = Mr(t.to, "hh:mm a", new Date), s = pr(a), o = dr(a), E = pr(i), u = dr(i)), {
            day_of_week: t.day,
            closed_all_day: n,
            open_hour: s,
            open_minutes: o,
            close_hour: E,
            close_minutes: u,
            open_all_day: r
        }
    }),
    xP = () => Object.keys(vr).map(e => ({
        label: e,
        value: vr[e]
    })),
    QP = (e, t = "MMM dd, yyyy") => {
        const n = Di(e);
        return Ci(n, t)
    },
    KP = ({
        date: e,
        todayText: t,
        yesterdayText: n
    }) => {
        const r = new Date(e);
        return Fc(r) ? t : wc(r) ? n : e
    },
    qP = (e, t, n, r) => e < n ? !1 : e === n ? t >= r : !0,
    ZP = e => ka(Rn(e)),
    JP = e => ka(Nc(e)),
    XP = (e, t, n) => {
        const r = n == null ? void 0 : n.replace(/_/g, "-");
        return new Intl.RelativeTimeFormat(r, {
            numeric: "auto"
        }).format(e, t)
    },
    iP = e => e.content_type === "form",
    e$ = (e = {}) => {
        var t;
        return iP(e) && !!((t = e.content_attributes) != null && t.submitted_values)
    },
    t$ = {
        GENERAL: 1e4,
        FACEBOOK: 2e3,
        INSTAGRAM: 1e3,
        TWILIO_SMS: 320,
        TWILIO_WHATSAPP: 1600,
        WHATSAPP_CLOUD: 4096,
        EMAIL: 25e3
    };
var mt = class {
        constructor(e, t, n, r, a, i) {
            ie(this, "type", 3);
            ie(this, "name", "");
            ie(this, "prefix", "");
            ie(this, "value", "");
            ie(this, "suffix", "");
            ie(this, "modifier", 3);
            this.type = e, this.name = t, this.prefix = n, this.value = r, this.suffix = a, this.modifier = i
        }
        hasCustomName() {
            return this.name !== "" && typeof this.name != "number"
        }
    },
    sP = /[$_\p{ID_Start}]/u,
    oP = /[$_\u200C\u200D\p{ID_Continue}]/u,
    Cn = ".*";

function EP(e, t) {
    return /^[\x00-\x7F]*$/.test(e)
}

function Ha(e, t = !1) {
    let n = [],
        r = 0;
    for (; r < e.length;) {
        let a = e[r],
            i = function(s) {
                if (!t) throw new TypeError(s);
                n.push({
                    type: "INVALID_CHAR",
                    index: r,
                    value: e[r++]
                })
            };
        if (a === "*") {
            n.push({
                type: "ASTERISK",
                index: r,
                value: e[r++]
            });
            continue
        }
        if (a === "+" || a === "?") {
            n.push({
                type: "OTHER_MODIFIER",
                index: r,
                value: e[r++]
            });
            continue
        }
        if (a === "\\") {
            n.push({
                type: "ESCAPED_CHAR",
                index: r++,
                value: e[r++]
            });
            continue
        }
        if (a === "{") {
            n.push({
                type: "OPEN",
                index: r,
                value: e[r++]
            });
            continue
        }
        if (a === "}") {
            n.push({
                type: "CLOSE",
                index: r,
                value: e[r++]
            });
            continue
        }
        if (a === ":") {
            let s = "",
                o = r + 1;
            for (; o < e.length;) {
                let E = e.substr(o, 1);
                if (o === r + 1 && sP.test(E) || o !== r + 1 && oP.test(E)) {
                    s += e[o++];
                    continue
                }
                break
            }
            if (!s) {
                i(`Missing parameter name at ${r}`);
                continue
            }
            n.push({
                type: "NAME",
                index: r,
                value: s
            }), r = o;
            continue
        }
        if (a === "(") {
            let s = 1,
                o = "",
                E = r + 1,
                u = !1;
            if (e[E] === "?") {
                i(`Pattern cannot start with "?" at ${E}`);
                continue
            }
            for (; E < e.length;) {
                if (!EP(e[E])) {
                    i(`Invalid character '${e[E]}' at ${E}.`), u = !0;
                    break
                }
                if (e[E] === "\\") {
                    o += e[E++] + e[E++];
                    continue
                }
                if (e[E] === ")") {
                    if (s--, s === 0) {
                        E++;
                        break
                    }
                } else if (e[E] === "(" && (s++, e[E + 1] !== "?")) {
                    i(`Capturing groups are not allowed at ${E}`), u = !0;
                    break
                }
                o += e[E++]
            }
            if (u) continue;
            if (s) {
                i(`Unbalanced pattern at ${r}`);
                continue
            }
            if (!o) {
                i(`Missing pattern at ${r}`);
                continue
            }
            n.push({
                type: "REGEX",
                index: r,
                value: o
            }), r = E;
            continue
        }
        n.push({
            type: "CHAR",
            index: r,
            value: e[r++]
        })
    }
    return n.push({
        type: "END",
        index: r,
        value: ""
    }), n
}

function Va(e, t = {}) {
    let n = Ha(e);
    t.delimiter ? ? (t.delimiter = "/#?"), t.prefixes ? ? (t.prefixes = "./");
    let r = `[^${le(t.delimiter)}]+?`,
        a = [],
        i = 0,
        s = 0,
        o = new Set,
        E = m => {
            if (s < n.length && n[s].type === m) return n[s++].value
        },
        u = () => E("OTHER_MODIFIER") ? ? E("ASTERISK"),
        I = m => {
            let h = E(m);
            if (h !== void 0) return h;
            let {
                type: C,
                index: g
            } = n[s];
            throw new TypeError(`Unexpected ${C} at ${g}, expected ${m}`)
        },
        d = () => {
            let m = "",
                h;
            for (; h = E("CHAR") ? ? E("ESCAPED_CHAR");) m += h;
            return m
        },
        y = m => m,
        D = t.encodePart || y,
        M = "",
        T = m => {
            M += m
        },
        L = () => {
            M.length && (a.push(new mt(3, "", "", D(M), "", 3)), M = "")
        },
        f = (m, h, C, g, c) => {
            let O = 3;
            switch (c) {
                case "?":
                    O = 1;
                    break;
                case "*":
                    O = 0;
                    break;
                case "+":
                    O = 2;
                    break
            }
            if (!h && !C && O === 3) {
                T(m);
                return
            }
            if (L(), !h && !C) {
                if (!m) return;
                a.push(new mt(3, "", "", D(m), "", O));
                return
            }
            let P;
            C ? C === "*" ? P = Cn : P = C : P = r;
            let A = 2;
            P === r ? (A = 1, P = "") : P === Cn && (A = 0, P = "");
            let R;
            if (h ? R = h : C && (R = i++), o.has(R)) throw new TypeError(`Duplicate name '${R}'.`);
            o.add(R), a.push(new mt(A, R, D(m), P, D(g), O))
        };
    for (; s < n.length;) {
        let m = E("CHAR"),
            h = E("NAME"),
            C = E("REGEX");
        if (!h && !C && (C = E("ASTERISK")), h || C) {
            let c = m ? ? "";
            t.prefixes.indexOf(c) === -1 && (T(c), c = ""), L();
            let O = u();
            f(c, h, C, "", O);
            continue
        }
        let g = m ? ? E("ESCAPED_CHAR");
        if (g) {
            T(g);
            continue
        }
        if (E("OPEN")) {
            let c = d(),
                O = E("NAME"),
                P = E("REGEX");
            !O && !P && (P = E("ASTERISK"));
            let A = d();
            I("CLOSE");
            let R = u();
            f(c, O, P, A, R);
            continue
        }
        L(), I("END")
    }
    return a
}

function le(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1")
}

function Pr(e) {
    return e && e.ignoreCase ? "ui" : "u"
}

function lP(e, t, n) {
    return Fa(Va(e, n), t, n)
}

function qe(e) {
    switch (e) {
        case 0:
            return "*";
        case 1:
            return "?";
        case 2:
            return "+";
        case 3:
            return ""
    }
}

function Fa(e, t, n = {}) {
    n.delimiter ? ? (n.delimiter = "/#?"), n.prefixes ? ? (n.prefixes = "./"), n.sensitive ? ? (n.sensitive = !1), n.strict ? ? (n.strict = !1), n.end ? ? (n.end = !0), n.start ? ? (n.start = !0), n.endsWith = "";
    let r = n.start ? "^" : "";
    for (let o of e) {
        if (o.type === 3) {
            o.modifier === 3 ? r += le(o.value) : r += `(?:${le(o.value)})${qe(o.modifier)}`;
            continue
        }
        t && t.push(o.name);
        let E = `[^${le(n.delimiter)}]+?`,
            u = o.value;
        if (o.type === 1 ? u = E : o.type === 0 && (u = Cn), !o.prefix.length && !o.suffix.length) {
            o.modifier === 3 || o.modifier === 1 ? r += `(${u})${qe(o.modifier)}` : r += `((?:${u})${qe(o.modifier)})`;
            continue
        }
        if (o.modifier === 3 || o.modifier === 1) {
            r += `(?:${le(o.prefix)}(${u})${le(o.suffix)})`, r += qe(o.modifier);
            continue
        }
        r += `(?:${le(o.prefix)}`, r += `((?:${u})(?:`, r += le(o.suffix), r += le(o.prefix), r += `(?:${u}))*)${le(o.suffix)})`, o.modifier === 0 && (r += "?")
    }
    let a = `[${le(n.endsWith)}]|$`,
        i = `[${le(n.delimiter)}]`;
    if (n.end) return n.strict || (r += `${i}?`), n.endsWith.length ? r += `(?=${a})` : r += "$", new RegExp(r, Pr(n));
    n.strict || (r += `(?:${i}(?=${a}))?`);
    let s = !1;
    if (e.length) {
        let o = e[e.length - 1];
        o.type === 3 && o.modifier === 3 && (s = n.delimiter.indexOf(o) > -1)
    }
    return s || (r += `(?=${i}|${a})`), new RegExp(r, Pr(n))
}
var Ye = {
        delimiter: "",
        prefixes: "",
        sensitive: !0,
        strict: !0
    },
    cP = {
        delimiter: ".",
        prefixes: "",
        sensitive: !0,
        strict: !0
    },
    uP = {
        delimiter: "/",
        prefixes: "/",
        sensitive: !0,
        strict: !0
    };

function AP(e, t) {
    return e.length ? e[0] === "/" ? !0 : !t || e.length < 2 ? !1 : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : !1
}

function wa(e, t) {
    return e.startsWith(t) ? e.substring(t.length, e.length) : e
}

function RP(e, t) {
    return e.endsWith(t) ? e.substr(0, e.length - t.length) : e
}

function Wa(e) {
    return !e || e.length < 2 ? !1 : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "["
}
var Ga = ["ftp", "file", "http", "https", "ws", "wss"];

function ja(e) {
    if (!e) return !0;
    for (let t of Ga)
        if (e.test(t)) return !0;
    return !1
}

function _P(e, t) {
    if (e = wa(e, "#"), t || e === "") return e;
    let n = new URL("https://example.com");
    return n.hash = e, n.hash ? n.hash.substring(1, n.hash.length) : ""
}

function TP(e, t) {
    if (e = wa(e, "?"), t || e === "") return e;
    let n = new URL("https://example.com");
    return n.search = e, n.search ? n.search.substring(1, n.search.length) : ""
}

function OP(e, t) {
    return t || e === "" ? e : Wa(e) ? Qa(e) : xa(e)
}

function LP(e, t) {
    if (t || e === "") return e;
    let n = new URL("https://example.com");
    return n.password = e, n.password
}

function IP(e, t) {
    if (t || e === "") return e;
    let n = new URL("https://example.com");
    return n.username = e, n.username
}

function NP(e, t, n) {
    if (n || e === "") return e;
    if (t && !Ga.includes(t)) return new URL(`${t}:${e}`).pathname;
    let r = e[0] == "/";
    return e = new URL(r ? e : "/-" + e, "https://example.com").pathname, r || (e = e.substring(2, e.length)), e
}

function fP(e, t, n) {
    return za(t) === e && (e = ""), n || e === "" ? e : Ka(e)
}

function SP(e, t) {
    return e = RP(e, ":"), t || e === "" ? e : wn(e)
}

function za(e) {
    switch (e) {
        case "ws":
        case "http":
            return "80";
        case "wws":
        case "https":
            return "443";
        case "ftp":
            return "21";
        default:
            return ""
    }
}

function wn(e) {
    if (e === "") return e;
    if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
    throw new TypeError(`Invalid protocol '${e}'.`)
}

function pP(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.username = e, t.username
}

function dP(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.password = e, t.password
}

function xa(e) {
    if (e === "") return e;
    if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
    let t = new URL("https://example.com");
    return t.hostname = e, t.hostname
}

function Qa(e) {
    if (e === "") return e;
    if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
    return e.toLowerCase()
}

function Ka(e) {
    if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
    throw new TypeError(`Invalid port '${e}'.`)
}

function mP(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname
}

function DP(e) {
    return e === "" ? e : new URL(`data:${e}`).pathname
}

function CP(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.search = e, t.search.substring(1, t.search.length)
}

function MP(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.hash = e, t.hash.substring(1, t.hash.length)
}
var nt, X, q, F, Fe, rt, se, at, it, st, p, Q, qa, Mn, Nt, Yt, ce, hn, Za, kt, Ja, Xa, Ht, Qe, Ve, ei, ti, ni, ri, pe, ai, yr, hP = (yr = class {
        constructor(e) {
            K(this, p);
            K(this, nt);
            K(this, X, []);
            K(this, q, {});
            K(this, F, 0);
            K(this, Fe, 1);
            K(this, rt, 0);
            K(this, se, 0);
            K(this, at, 0);
            K(this, it, 0);
            K(this, st, !1);
            x(this, nt, e)
        }
        get result() {
            return N(this, q)
        }
        parse() {
            for (x(this, X, Ha(N(this, nt), !0)); N(this, F) < N(this, X).length; x(this, F, N(this, F) + N(this, Fe))) {
                if (x(this, Fe, 1), N(this, X)[N(this, F)].type === "END") {
                    if (N(this, se) === 0) {
                        v(this, p, Mn).call(this), v(this, p, Ve).call(this) ? v(this, p, Q).call(this, 9, 1) : v(this, p, Qe).call(this) ? v(this, p, Q).call(this, 8, 1) : v(this, p, Q).call(this, 7, 0);
                        continue
                    } else if (N(this, se) === 2) {
                        v(this, p, Nt).call(this, 5);
                        continue
                    }
                    v(this, p, Q).call(this, 10, 0);
                    break
                }
                if (N(this, at) > 0)
                    if (v(this, p, ti).call(this)) x(this, at, N(this, at) - 1);
                    else continue;
                if (v(this, p, ei).call(this)) {
                    x(this, at, N(this, at) + 1);
                    continue
                }
                switch (N(this, se)) {
                    case 0:
                        v(this, p, hn).call(this) && v(this, p, Nt).call(this, 1);
                        break;
                    case 1:
                        if (v(this, p, hn).call(this)) {
                            v(this, p, ai).call(this);
                            let e = 7,
                                t = 1;
                            v(this, p, Za).call(this) ? (e = 2, t = 3) : N(this, st) && (e = 2), v(this, p, Q).call(this, e, t)
                        }
                        break;
                    case 2:
                        v(this, p, kt).call(this) ? v(this, p, Nt).call(this, 3) : (v(this, p, Ht).call(this) || v(this, p, Qe).call(this) || v(this, p, Ve).call(this)) && v(this, p, Nt).call(this, 5);
                        break;
                    case 3:
                        v(this, p, Ja).call(this) ? v(this, p, Q).call(this, 4, 1) : v(this, p, kt).call(this) && v(this, p, Q).call(this, 5, 1);
                        break;
                    case 4:
                        v(this, p, kt).call(this) && v(this, p, Q).call(this, 5, 1);
                        break;
                    case 5:
                        v(this, p, ni).call(this) ? x(this, it, N(this, it) + 1) : v(this, p, ri).call(this) && x(this, it, N(this, it) - 1), v(this, p, Xa).call(this) && !N(this, it) ? v(this, p, Q).call(this, 6, 1) : v(this, p, Ht).call(this) ? v(this, p, Q).call(this, 7, 0) : v(this, p, Qe).call(this) ? v(this, p, Q).call(this, 8, 1) : v(this, p, Ve).call(this) && v(this, p, Q).call(this, 9, 1);
                        break;
                    case 6:
                        v(this, p, Ht).call(this) ? v(this, p, Q).call(this, 7, 0) : v(this, p, Qe).call(this) ? v(this, p, Q).call(this, 8, 1) : v(this, p, Ve).call(this) && v(this, p, Q).call(this, 9, 1);
                        break;
                    case 7:
                        v(this, p, Qe).call(this) ? v(this, p, Q).call(this, 8, 1) : v(this, p, Ve).call(this) && v(this, p, Q).call(this, 9, 1);
                        break;
                    case 8:
                        v(this, p, Ve).call(this) && v(this, p, Q).call(this, 9, 1);
                        break
                }
            }
            N(this, q).hostname !== void 0 && N(this, q).port === void 0 && (N(this, q).port = "")
        }
    }, nt = new WeakMap, X = new WeakMap, q = new WeakMap, F = new WeakMap, Fe = new WeakMap, rt = new WeakMap, se = new WeakMap, at = new WeakMap, it = new WeakMap, st = new WeakMap, p = new WeakSet, Q = function(e, t) {
        var n, r, a;
        switch (N(this, se)) {
            case 0:
                break;
            case 1:
                N(this, q).protocol = v(this, p, pe).call(this);
                break;
            case 2:
                break;
            case 3:
                N(this, q).username = v(this, p, pe).call(this);
                break;
            case 4:
                N(this, q).password = v(this, p, pe).call(this);
                break;
            case 5:
                N(this, q).hostname = v(this, p, pe).call(this);
                break;
            case 6:
                N(this, q).port = v(this, p, pe).call(this);
                break;
            case 7:
                N(this, q).pathname = v(this, p, pe).call(this);
                break;
            case 8:
                N(this, q).search = v(this, p, pe).call(this);
                break;
            case 9:
                N(this, q).hash = v(this, p, pe).call(this);
                break
        }
        N(this, se) !== 0 && e !== 10 && ([1, 2, 3, 4].includes(N(this, se)) && [6, 7, 8, 9].includes(e) && ((n = N(this, q)).hostname ? ? (n.hostname = "")), [1, 2, 3, 4, 5, 6].includes(N(this, se)) && [8, 9].includes(e) && ((r = N(this, q)).pathname ? ? (r.pathname = N(this, st) ? "/" : "")), [1, 2, 3, 4, 5, 6, 7].includes(N(this, se)) && e === 9 && ((a = N(this, q)).search ? ? (a.search = ""))), v(this, p, qa).call(this, e, t)
    }, qa = function(e, t) {
        x(this, se, e), x(this, rt, N(this, F) + t), x(this, F, N(this, F) + t), x(this, Fe, 0)
    }, Mn = function() {
        x(this, F, N(this, rt)), x(this, Fe, 0)
    }, Nt = function(e) {
        v(this, p, Mn).call(this), x(this, se, e)
    }, Yt = function(e) {
        return e < 0 && (e = N(this, X).length - e), e < N(this, X).length ? N(this, X)[e] : N(this, X)[N(this, X).length - 1]
    }, ce = function(e, t) {
        let n = v(this, p, Yt).call(this, e);
        return n.value === t && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR")
    }, hn = function() {
        return v(this, p, ce).call(this, N(this, F), ":")
    }, Za = function() {
        return v(this, p, ce).call(this, N(this, F) + 1, "/") && v(this, p, ce).call(this, N(this, F) + 2, "/")
    }, kt = function() {
        return v(this, p, ce).call(this, N(this, F), "@")
    }, Ja = function() {
        return v(this, p, ce).call(this, N(this, F), ":")
    }, Xa = function() {
        return v(this, p, ce).call(this, N(this, F), ":")
    }, Ht = function() {
        return v(this, p, ce).call(this, N(this, F), "/")
    }, Qe = function() {
        if (v(this, p, ce).call(this, N(this, F), "?")) return !0;
        if (N(this, X)[N(this, F)].value !== "?") return !1;
        let e = v(this, p, Yt).call(this, N(this, F) - 1);
        return e.type !== "NAME" && e.type !== "REGEX" && e.type !== "CLOSE" && e.type !== "ASTERISK"
    }, Ve = function() {
        return v(this, p, ce).call(this, N(this, F), "#")
    }, ei = function() {
        return N(this, X)[N(this, F)].type == "OPEN"
    }, ti = function() {
        return N(this, X)[N(this, F)].type == "CLOSE"
    }, ni = function() {
        return v(this, p, ce).call(this, N(this, F), "[")
    }, ri = function() {
        return v(this, p, ce).call(this, N(this, F), "]")
    }, pe = function() {
        let e = N(this, X)[N(this, F)],
            t = v(this, p, Yt).call(this, N(this, rt)).index;
        return N(this, nt).substring(t, e.index)
    }, ai = function() {
        let e = {};
        Object.assign(e, Ye), e.encodePart = wn;
        let t = lP(v(this, p, pe).call(this), void 0, e);
        x(this, st, ja(t))
    }, yr),
    cn = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"],
    be = "*";

function $r(e, t) {
    if (typeof e != "string") throw new TypeError("parameter 1 is not of type 'string'.");
    let n = new URL(e, t);
    return {
        protocol: n.protocol.substring(0, n.protocol.length - 1),
        username: n.username,
        password: n.password,
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname,
        search: n.search !== "" ? n.search.substring(1, n.search.length) : void 0,
        hash: n.hash !== "" ? n.hash.substring(1, n.hash.length) : void 0
    }
}

function he(e, t) {
    return t ? ft(e) : e
}

function Tt(e, t, n) {
    let r;
    if (typeof t.baseURL == "string") try {
        r = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = he(r.protocol.substring(0, r.protocol.length - 1), n)), !n && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = he(r.username, n)), !n && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = he(r.password, n)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = he(r.hostname, n)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = he(r.port, n)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = he(r.pathname, n)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = he(r.search.substring(1, r.search.length), n)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = he(r.hash.substring(1, r.hash.length), n))
    } catch {
        throw new TypeError(`invalid baseURL '${t.baseURL}'.`)
    }
    if (typeof t.protocol == "string" && (e.protocol = SP(t.protocol, n)), typeof t.username == "string" && (e.username = IP(t.username, n)), typeof t.password == "string" && (e.password = LP(t.password, n)), typeof t.hostname == "string" && (e.hostname = OP(t.hostname, n)), typeof t.port == "string" && (e.port = fP(t.port, e.protocol, n)), typeof t.pathname == "string") {
        if (e.pathname = t.pathname, r && !AP(e.pathname, n)) {
            let a = r.pathname.lastIndexOf("/");
            a >= 0 && (e.pathname = he(r.pathname.substring(0, a + 1), n) + e.pathname)
        }
        e.pathname = NP(e.pathname, e.protocol, n)
    }
    return typeof t.search == "string" && (e.search = TP(t.search, n)), typeof t.hash == "string" && (e.hash = _P(t.hash, n)), e
}

function ft(e) {
    return e.replace(/([+*?:{}()\\])/g, "\\$1")
}

function vP(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1")
}

function gP(e, t) {
    t.delimiter ? ? (t.delimiter = "/#?"), t.prefixes ? ? (t.prefixes = "./"), t.sensitive ? ? (t.sensitive = !1), t.strict ? ? (t.strict = !1), t.end ? ? (t.end = !0), t.start ? ? (t.start = !0), t.endsWith = "";
    let n = ".*",
        r = `[^${vP(t.delimiter)}]+?`,
        a = /[$_\u200C\u200D\p{ID_Continue}]/u,
        i = "";
    for (let s = 0; s < e.length; ++s) {
        let o = e[s];
        if (o.type === 3) {
            if (o.modifier === 3) {
                i += ft(o.value);
                continue
            }
            i += `{${ft(o.value)}}${qe(o.modifier)}`;
            continue
        }
        let E = o.hasCustomName(),
            u = !!o.suffix.length || !!o.prefix.length && (o.prefix.length !== 1 || !t.prefixes.includes(o.prefix)),
            I = s > 0 ? e[s - 1] : null,
            d = s < e.length - 1 ? e[s + 1] : null;
        if (!u && E && o.type === 1 && o.modifier === 3 && d && !d.prefix.length && !d.suffix.length)
            if (d.type === 3) {
                let y = d.value.length > 0 ? d.value[0] : "";
                u = a.test(y)
            } else u = !d.hasCustomName();
        if (!u && !o.prefix.length && I && I.type === 3) {
            let y = I.value[I.value.length - 1];
            u = t.prefixes.includes(y)
        }
        u && (i += "{"), i += ft(o.prefix), E && (i += `:${o.name}`), o.type === 2 ? i += `(${o.value})` : o.type === 1 ? E || (i += `(${r})`) : o.type === 0 && (!E && (!I || I.type === 3 || I.modifier !== 3 || u || o.prefix !== "") ? i += "*" : i += `(${n})`), o.type === 1 && E && o.suffix.length && a.test(o.suffix[0]) && (i += "\\"), i += ft(o.suffix), u && (i += "}"), o.modifier !== 3 && (i += qe(o.modifier))
    }
    return i
}
var de, we, ot, Z, Te, Et, Ur, PP = (Ur = class {
    constructor(e = {}, t, n) {
        K(this, de);
        K(this, we, {});
        K(this, ot, {});
        K(this, Z, {});
        K(this, Te, {});
        K(this, Et, !1);
        try {
            let r;
            if (typeof t == "string" ? r = t : n = t, typeof e == "string") {
                let o = new hP(e);
                if (o.parse(), e = o.result, r === void 0 && typeof e.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
                e.baseURL = r
            } else {
                if (!e || typeof e != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
                if (r) throw new TypeError("parameter 1 is not of type 'string'.")
            }
            typeof n > "u" && (n = {
                ignoreCase: !1
            });
            let a = {
                ignoreCase: n.ignoreCase === !0
            };
            x(this, de, Tt({
                pathname: be,
                protocol: be,
                username: be,
                password: be,
                hostname: be,
                port: be,
                search: be,
                hash: be
            }, e, !0)), za(N(this, de).protocol) === N(this, de).port && (N(this, de).port = "");
            let s;
            for (s of cn) {
                if (!(s in N(this, de))) continue;
                let o = {},
                    E = N(this, de)[s];
                switch (N(this, ot)[s] = [], s) {
                    case "protocol":
                        Object.assign(o, Ye), o.encodePart = wn;
                        break;
                    case "username":
                        Object.assign(o, Ye), o.encodePart = pP;
                        break;
                    case "password":
                        Object.assign(o, Ye), o.encodePart = dP;
                        break;
                    case "hostname":
                        Object.assign(o, cP), Wa(E) ? o.encodePart = Qa : o.encodePart = xa;
                        break;
                    case "port":
                        Object.assign(o, Ye), o.encodePart = Ka;
                        break;
                    case "pathname":
                        ja(N(this, we).protocol) ? (Object.assign(o, uP, a), o.encodePart = mP) : (Object.assign(o, Ye, a), o.encodePart = DP);
                        break;
                    case "search":
                        Object.assign(o, Ye, a), o.encodePart = CP;
                        break;
                    case "hash":
                        Object.assign(o, Ye, a), o.encodePart = MP;
                        break
                }
                try {
                    N(this, Te)[s] = Va(E, o), N(this, we)[s] = Fa(N(this, Te)[s], N(this, ot)[s], o), N(this, Z)[s] = gP(N(this, Te)[s], o), x(this, Et, N(this, Et) || N(this, Te)[s].some(u => u.type === 2))
                } catch {
                    throw new TypeError(`invalid ${s} pattern '${N(this,de)[s]}'.`)
                }
            }
        } catch (r) {
            throw new TypeError(`Failed to construct 'URLPattern': ${r.message}`)
        }
    }
    test(e = {}, t) {
        let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
        };
        if (typeof e != "string" && t) throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof e > "u") return !1;
        try {
            typeof e == "object" ? n = Tt(n, e, !1) : n = Tt(n, $r(e, t), !1)
        } catch {
            return !1
        }
        let r;
        for (r of cn)
            if (!N(this, we)[r].exec(n[r])) return !1;
        return !0
    }
    exec(e = {}, t) {
        let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
        };
        if (typeof e != "string" && t) throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof e > "u") return;
        try {
            typeof e == "object" ? n = Tt(n, e, !1) : n = Tt(n, $r(e, t), !1)
        } catch {
            return null
        }
        let r = {};
        t ? r.inputs = [e, t] : r.inputs = [e];
        let a;
        for (a of cn) {
            let i = N(this, we)[a].exec(n[a]);
            if (!i) return null;
            let s = {};
            for (let [o, E] of N(this, ot)[a].entries())
                if (typeof E == "string" || typeof E == "number") {
                    let u = i[o + 1];
                    s[E] = u
                }
            r[a] = {
                input: n[a] ? ? "",
                groups: s
            }
        }
        return r
    }
    static compareComponent(e, t, n) {
        let r = (o, E) => {
                for (let u of ["type", "modifier", "prefix", "value", "suffix"]) {
                    if (o[u] < E[u]) return -1;
                    if (o[u] !== E[u]) return 1
                }
                return 0
            },
            a = new mt(3, "", "", "", "", 3),
            i = new mt(0, "", "", "", "", 3),
            s = (o, E) => {
                let u = 0;
                for (; u < Math.min(o.length, E.length); ++u) {
                    let I = r(o[u], E[u]);
                    if (I) return I
                }
                return o.length === E.length ? 0 : r(o[u] ? ? a, E[u] ? ? a)
            };
        return !N(t, Z)[e] && !N(n, Z)[e] ? 0 : N(t, Z)[e] && !N(n, Z)[e] ? s(N(t, Te)[e], [i]) : !N(t, Z)[e] && N(n, Z)[e] ? s([i], N(n, Te)[e]) : s(N(t, Te)[e], N(n, Te)[e])
    }
    get protocol() {
        return N(this, Z).protocol
    }
    get username() {
        return N(this, Z).username
    }
    get password() {
        return N(this, Z).password
    }
    get hostname() {
        return N(this, Z).hostname
    }
    get port() {
        return N(this, Z).port
    }
    get pathname() {
        return N(this, Z).pathname
    }
    get search() {
        return N(this, Z).search
    }
    get hash() {
        return N(this, Z).hash
    }
    get hasRegExpGroups() {
        return N(this, Et)
    }
}, de = new WeakMap, we = new WeakMap, ot = new WeakMap, Z = new WeakMap, Te = new WeakMap, Et = new WeakMap, Ur);
globalThis.URLPattern || (globalThis.URLPattern = PP);
export {
    kP as A, hr as B, KP as C, fc as D, Ba as F, t$ as M, Ic as a, Fn as b, VP as c, wP as d, Nc as e, jP as f, GP as g, WP as h, Ya as i, xP as j, FP as k, ZP as l, JP as m, ka as n, Fc as o, Mr as p, PP as q, YP as r, pc as s, zP as t, HP as u, va as v, e$ as w, QP as x, qP as y, XP as z
};
//# sourceMappingURL=index-BgTJAFtk.js.map