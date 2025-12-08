import {
    m as w,
    u as E
} from "./globalConfig-BVQDaSpO.js";
import {
    g as L
} from "./utils.esm-DpfOb1Dc.js";
import {
    c as $,
    n as R,
    b as V,
    I as F,
    u as z,
    r as B
} from "./widget-CocdXykp.js";
import {
    j as W
} from "./sharedFrameEvents-0qZ2yOho.js";
import {
    c as h,
    n as c,
    o as n,
    F as T,
    j as M,
    q as H,
    e as A,
    _ as k,
    s as b,
    p as o,
    a as _,
    g as C,
    t as m,
    z as S,
    H as g,
    aj as j,
    P as G
} from "./_plugin-vue_export-helper-BDdLN-Za.js";
import {
    T as P
} from "./Thumbnail-BnYTLSsR.js";
import {
    c as y,
    b as U
} from "./index-BgTJAFtk.js";
import {
    a as D
} from "./Validators-Cc34aJUd.js";
import "./vue-dompurify-html-CEAHYyWB.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index-BtuGy7By.js";
import "./constants-lVAyZKq6.js";
import "./Icon-BkVHjXfD.js";
import "./Branding-1IcfYWQF.js";
import "./module-DDGBE9SJ.js";
import "./index-DN3rM4CW.js";
const q = {
        class: "flex"
    },
    Y = {
        __name: "GroupedAvatars",
        props: {
            users: {
                type: Array,
                default: () => []
            },
            limit: {
                type: Number,
                default: 4
            }
        },
        setup(e) {
            const t = e,
                i = h(() => t.users.slice(0, t.limit));
            return (u, r) => (n(), c("div", q, [(n(!0), c(T, null, M(i.value, (a, s) => (n(), c("span", {
                key: a.id,
                class: H([s ? "ltr:-ml-4 rtl:-mr-4" : "", "inline-block rounded-full text-white shadow-solid"])
            }, [A(P, {
                size: "36px",
                username: a.name,
                src: a.avatar_url,
                "has-border": ""
            }, null, 8, ["username", "src"])], 2))), 128))]))
        }
    },
    J = {
        name: "TeamAvailability",
        components: {
            GroupedAvatars: Y
        },
        mixins: [$, R, V],
        props: {
            availableAgents: {
                type: Array,
                default: () => {}
            },
            hasConversation: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["startConversation"],
        computed: { ...w({
                widgetColor: "appConfig/getWidgetColor",
                availableMessage: "appConfig/getAvailableMessage",
                unavailableMessage: "appConfig/getUnavailableMessage"
            }),
            textColor() {
                return L(this.widgetColor)
            },
            agentAvatars() {
                return this.availableAgents.map(e => ({
                    name: e.name,
                    avatar: e.avatar_url,
                    id: e.id
                }))
            },
            headerMessage() {
                return this.isOnline ? this.availableMessage || this.$t("TEAM_AVAILABILITY.ONLINE") : this.unavailableMessage || this.$t("TEAM_AVAILABILITY.OFFLINE")
            },
            isOnline() {
                const {
                    workingHoursEnabled: e
                } = this.channelConfig, t = this.availableAgents.length > 0;
                return e ? this.isInBetweenTheWorkingHours : t
            }
        },
        methods: {
            startConversation() {
                this.$emit("startConversation"), this.hasConversation || F.sendMessage({
                    event: "onEvent",
                    eventIdentifier: W,
                    data: {
                        hasConversation: !1
                    }
                })
            }
        }
    },
    K = {
        class: "flex flex-col gap-3 w-full shadow outline-1 outline outline-n-container rounded-xl bg-n-background dark:bg-n-solid-2 px-5 py-4"
    },
    Q = {
        class: "flex items-center justify-between gap-2"
    },
    X = {
        class: "flex flex-col gap-1"
    },
    Z = {
        class: "font-medium text-n-slate-12 line-clamp-2"
    },
    ee = {
        class: "text-n-slate-11"
    };

function te(e, t, i, u, r, a) {
    const s = b("GroupedAvatars");
    return n(), c("div", K, [o("div", Q, [o("div", X, [o("div", Z, m(a.headerMessage), 1), o("div", ee, m(e.replyWaitMessage), 1)]), a.isOnline ? (n(), _(s, {
        key: 0,
        users: i.availableAgents
    }, null, 8, ["users"])) : C("", !0)]), o("button", {
        class: "inline-flex items-center gap-1 font-medium text-n-slate-12",
        style: S({
            color: e.widgetColor
        }),
        onClick: t[0] || (t[0] = (...l) => a.startConversation && a.startConversation(...l))
    }, [o("span", null, m(i.hasConversation ? e.$t("CONTINUE_CONVERSATION") : e.$t("START_CONVERSATION")), 1), t[1] || (t[1] = o("i", {
        class: "i-lucide-chevron-right size-5 mt-px"
    }, null, -1))], 4)])
}
const ae = k(J, [
        ["render", te]
    ]),
    se = {
        class: "underline-offset-2 leading-6 ltr:text-left rtl:text-right text-base"
    },
    ne = {
        __name: "ArticleListItem",
        props: {
            link: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            }
        },
        emits: ["selectArticle"],
        setup(e, {
            emit: t
        }) {
            const i = e,
                u = t,
                r = () => {
                    u("selectArticle", i.link)
                };
            return (a, s) => (n(), c("div", {
                class: "flex items-center justify-between rounded cursor-pointer text-n-slate-11 hover:text-n-slate-12 gap-2",
                role: "button",
                onClick: r
            }, [o("button", se, m(e.title), 1), s[0] || (s[0] = o("span", {
                class: "i-lucide-chevron-right text-base shrink-0"
            }, null, -1))]))
        }
    },
    ie = {
        class: "flex flex-col gap-3"
    },
    le = {
        class: "font-medium text-n-slate-12"
    },
    oe = {
        class: "flex flex-col gap-4"
    },
    re = {
        __name: "ArticleBlock",
        props: {
            articles: {
                type: Array,
                default: () => []
            }
        },
        emits: ["view", "viewAll"],
        setup(e, {
            emit: t
        }) {
            const i = e,
                u = t,
                r = y("appConfig/getWidgetColor"),
                a = h(() => i.articles.slice(0, 6)),
                s = l => {
                    u("view", l)
                };
            return (l, d) => (n(), c("div", ie, [o("h3", le, m(l.$t("PORTAL.POPULAR_ARTICLES")), 1), o("div", oe, [(n(!0), c(T, null, M(a.value, p => (n(), _(ne, {
                key: p.slug,
                link: p.link,
                title: p.title,
                onSelectArticle: s
            }, null, 8, ["link", "title"]))), 128))]), o("div", null, [o("button", {
                class: "font-medium tracking-wide inline-flex",
                style: S({
                    color: g(r)
                }),
                onClick: d[0] || (d[0] = p => l.$emit("viewAll"))
            }, [o("span", null, m(l.$t("PORTAL.VIEW_ALL_ARTICLES")), 1)], 4)])]))
        }
    },
    ce = {},
    ue = {
        class: "py-4 space-y-4"
    };

function de(e, t) {
    return n(), c("div", ue, t[0] || (t[0] = [j('<div class="space-y-2 animate-pulse"><div class="h-6 bg-n-slate-5 dark:bg-n-alpha-black1 rounded w-2/5"></div></div><div class="space-y-2 animate-pulse"><div class="h-4 bg-n-slate-5 dark:bg-n-alpha-black1 rounded"></div><div class="h-4 bg-n-slate-5 dark:bg-n-alpha-black1 rounded"></div><div class="h-4 bg-n-slate-5 dark:bg-n-alpha-black1 rounded"></div></div><div class="space-y-2 animate-pulse"><div class="h-4 bg-n-slate-5 dark:bg-n-alpha-black1 rounded w-1/5"></div></div>', 3)]))
}
const pe = k(ce, [
        ["render", de]
    ]),
    ve = (e = "", t = []) => {
        if (!e || !Array.isArray(t) || !t.length) return null;
        const [i] = e.split("_");
        return [e, i, t.find(r => r.startsWith(`${i}_`))].find(r => r && t.includes(r)) ? ? null
    },
    me = {
        key: 0,
        class: "w-full shadow outline-1 outline outline-n-container rounded-xl bg-n-background dark:bg-n-solid-2 px-5 py-4"
    },
    ge = {
        key: 1,
        class: "hidden"
    },
    he = {
        __name: "ArticleContainer",
        setup(e) {
            const t = U(),
                i = D(),
                u = E(),
                {
                    prefersDarkMode: r
                } = z(),
                a = h(() => window.chatwootWebChannel.portal),
                s = y("article/popularArticles"),
                l = y("article/uiFlags"),
                d = h(() => {
                    const {
                        locale: v
                    } = u, {
                        allowed_locales: f
                    } = a.value.config;
                    return ve(v.value, f)
                }),
                p = () => {
                    a.value && !s.value.length && t.dispatch("article/fetch", {
                        slug: a.value.slug,
                        locale: d.value
                    })
                },
                x = v => {
                    const f = new URLSearchParams({
                            show_plain_layout: "true",
                            theme: r.value ? "dark" : "light",
                            ...d.value && {
                                locale: d.value
                            }
                        }),
                        N = `${v}?${f.toString()}`;
                    i.push({
                        name: "article-viewer",
                        query: {
                            link: N
                        }
                    })
                },
                I = () => {
                    const {
                        portal: {
                            slug: v
                        }
                    } = window.chatwootWebChannel;
                    x(`/hc/${v}/${d.value}`)
                },
                O = h(() => !l.value.isFetching && !l.value.isError && !!s.value.length && !!d.value);
            return G(() => p()), (v, f) => a.value && (g(l).isFetching || g(s).length) ? (n(), c("div", me, [O.value ? (n(), _(re, {
                key: 0,
                articles: g(s),
                onView: x,
                onViewAll: I
            }, null, 8, ["articles"])) : C("", !0), g(l).isFetching ? (n(), _(pe, {
                key: 1
            })) : C("", !0)])) : (n(), c("div", ge))
        }
    },
    fe = {
        name: "Home",
        components: {
            ArticleContainer: he,
            TeamAvailability: ae
        },
        mixins: [$, B],
        computed: { ...w({
                availableAgents: "agent/availableAgents",
                conversationSize: "conversation/getConversationSize",
                unreadMessageCount: "conversation/getUnreadMessageCount"
            })
        },
        methods: {
            startConversation() {
                return this.preChatFormEnabled && !this.conversationSize ? this.replaceRoute("prechat-form") : this.replaceRoute("messages")
            }
        }
    },
    _e = {
        class: "z-50 flex flex-col justify-end flex-1 w-full p-4 gap-4"
    };

function Ae(e, t, i, u, r, a) {
    const s = b("TeamAvailability"),
        l = b("ArticleContainer");
    return n(), c("div", _e, [A(s, {
        "available-agents": e.availableAgents,
        "has-conversation": !!e.conversationSize,
        "unread-count": e.unreadMessageCount,
        onStartConversation: a.startConversation
    }, null, 8, ["available-agents", "has-conversation", "unread-count", "onStartConversation"]), A(l)])
}
const Ve = k(fe, [
    ["render", Ae]
]);
export {
    Ve as
    default
};
//# sourceMappingURL=Home-dllo0F1B.js.map