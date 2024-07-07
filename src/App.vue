
<template>
  <header>
    <rds-page-layout
      v-bind="args"
      @click="logClick"
    >
      <template #default>
				<router-view />
			</template>
    </rds-page-layout>
  </header>
</template>


<script setup lang="ts">
// imports
import { RouterLink, RouterView, createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import DashboardView from './views/DashboardView.vue';

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
})


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

const logClick = (event: Event) => {
  console.log(event);
};

</script>

<style>
/*  */

.side-bar--dark {
  overflow-y: auto;
  padding: 12px 12px !important;
}
</style>

