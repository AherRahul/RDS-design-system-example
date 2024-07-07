import { RouterView, createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import DashboardView from './views/DashboardView.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: DashboardView
        }
    ]
});
// data
const args = ref({
    variant: 'red',
    light: false,
    user: {
        "name": "Joana Mendes",
        "role": "Administrator",
        "picture": "https://i1.rgstatic.net/ii/profile.image/834217822924800-1575904436366_Q128/Joana-Mendes-13.jpg"
    },
    collapsibleSideBar: true,
    sideBarItems: [
        {
            "label": "Dashboard",
            "icon": "dashboard-outline",
            "type": "route",
            "route": {
                "path": "/dashboard",
                "name": "dashboard"
            }
        },
        {
            "label": "Service",
            "icon": "clipboard-text-outline",
            "type": "route",
            "route": {
                "path": "/home",
                "name": "home"
            }
        },
        {
            "label": "Links",
            "icon": "link-outline",
            "items": [
                {
                    "label": "Panel (Tv)",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    },
                    "type": "external"
                },
                {
                    "label": "Totem",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    },
                    "type": "external"
                }
            ]
        },
        {
            "label": "Reports",
            "icon": "printer-outline",
            "type": "route",
            "route": {
                "path": "/home",
                "name": "home"
            }
        },
        {
            "label": "Settings",
            "icon": "settings-outline",
            "type": "route",
            "items": [
                {
                    "label": "Panel (Tv)",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    }
                },
                {
                    "label": "Totem",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    }
                },
                {
                    "label": "Services",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    }
                },
                {
                    "label": "Categories",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    }
                },
                {
                    "label": "Priorities",
                    "route": {
                        "path": "/home",
                        "name": "home"
                    }
                }
            ]
        },
        {
            "label": "Support",
            "icon": "lifebuoy-outline",
            "type": "link",
            "route": {
                "path": "/home",
                "name": "home"
            }
        }
    ],
    sideBarActiveItem: {
        "label": "Settings",
        "icon": "settings-outline",
        "type": "route",
        "items": [
            {
                "label": "Panel (Tv)",
                "route": {
                    "path": "/home",
                    "name": "home"
                }
            },
            {
                "label": "Totem",
                "route": {
                    "path": "/home",
                    "name": "home"
                }
            },
            {
                "label": "Services",
                "route": {
                    "path": "/home",
                    "name": "home"
                }
            },
            {
                "label": "Categories",
                "route": {
                    "path": "/home",
                    "name": "home"
                }
            },
            {
                "label": "Priorities",
                "route": {
                    "path": "/home",
                    "name": "home"
                }
            }
        ]
    },
    navigationActiveItem: {
        "key": "home",
        "label": "Start",
        "route": {
            "name": "home"
        }
    },
    navigationItems: [
        {
            "key": "home",
            "label": "Home",
            "route": {
                "name": "home"
            }
        },
        {
            "key": "reports",
            "label": "Reports",
            "subitems": [
                {
                    "key": "productivity",
                    "label": "Productivity report",
                    "route": {
                        "name": "about"
                    }
                },
                {
                    "key": "timesheet",
                    "label": "Time sheet",
                    "route": {
                        "name": "about"
                    }
                }
            ]
        }
    ],
    logos: {
        "default": "https://rahulaher.netlify.app/img/logo/word-white-colored.svg",
        "collapsed": "https://rahulaher.netlify.app/img/logo/glyph-black-colored.svg"
    }
});
const logClick = (event) => {
    console.log(event);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    const __VLS_0 = {}.RdsPageLayout;
    ({}.RdsPageLayout);
    ({}.RdsPageLayout);
    __VLS_components.RdsPageLayout;
    __VLS_components.rdsPageLayout;
    __VLS_components.RdsPageLayout;
    __VLS_components.rdsPageLayout;
    // @ts-ignore
    [RdsPageLayout, RdsPageLayout,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...(__VLS_ctx.args), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...(__VLS_ctx.args), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...(__VLS_ctx.args), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.logClick)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).default;
        const __VLS_8 = {}.RouterView;
        ({}.RouterView);
        __VLS_components.RouterView;
        __VLS_components.routerView;
        // @ts-ignore
        [RouterView,];
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
        const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({}));
        // @ts-ignore
        [args, logClick,];
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                RouterView: RouterView,
                args: args,
                logClick: logClick,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

//# sourceMappingURL=App.vue.js.map