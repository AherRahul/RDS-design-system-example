
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
import { ref } from 'vue';

// data
const args = ref({
  variant: 'green',
  light: true,
  user: {
    "name": "Joana Mendes",
    "role": "Administrator",
    "picture": "https://i1.rgstatic.net/ii/profile.image/834217822924800-1575904436366_Q128/Joana-Mendes-13.jpg"
  },
  collapsibleSideBar: true,
  sideBarItems: [
    {
      "label": "Display",
      "icon": "edit-outline",
      "type": "route",
      "route": {
          "path": "/display",
          "name": "display"
        }
    },
    {
      "label": "Charts",
      "icon": "dashboard-outline",
      "type": "route",
      "route": {
          "path": "/charts",
          "name": "charts"
        }
    },
    // {
    //   "label": "Links",
    //   "icon": "link-outline",
    //   "items": [
    //     {
    //       "label": "Panel (Tv)",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       },
    //       "type": "external"
    //     },
    //     {
    //       "label": "Totem",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       },
    //       "type": "external"
    //     }
    //   ]
    // },
    // {
    //   "label": "Reports",
    //   "icon": "printer-outline",
    //   "type": "route",
    //   "route": {
    //       "path": "/home",
    //       "name": "home"
    //     }
    // },
    // {
    //   "label": "Settings",
    //   "icon": "settings-outline",
    //   "type": "route",
    //   "items": [
    //     {
    //       "label": "Panel (Tv)",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       }
    //     },
    //     {
    //       "label": "Totem",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       }
    //     },
    //     {
    //       "label": "Services",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       }
    //     },
    //     {
    //       "label": "Categories",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       }
    //     },
    //     {
    //       "label": "Priorities",
    //       "route": {
    //         "path": "/home",
    //         "name": "home"
    //       }
    //     }
    //   ]
    // },
    // {
    //   "label": "Support",
    //   "icon": "lifebuoy-outline",
    //   "type": "link",
    //   "route": {
    //       "path": "/home",
    //       "name": "home"
    //   }
    // }
  ],
  sideBarActiveItem: {
    // "label": "Settings",
    // "icon": "settings-outline",
    // "type": "route",
    // "items": [
    //   {
    //     "label": "Panel (Tv)",
    //     "route": {
    //       "path": "/home",
    //       "name": "home"
    //     }
    //   },
    //   {
    //     "label": "Totem",
    //     "route": {
    //       "path": "/home",
    //       "name": "home"
    //     }
    //   },
    //   {
    //     "label": "Services",
    //     "route": {
    //       "path": "/home",
    //       "name": "home"
    //     }
    //   },
    //   {
    //     "label": "Categories",
    //     "route": {
    //       "path": "/home",
    //       "name": "home"
    //     }
    //   },
    //   {
    //     "label": "Priorities",
    //     "route": {
    //       "path": "/home",
    //       "name": "home"
    //     }
    //   }
    // ]
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
    "default": "https://rahulaher.netlify.app/img/logo/word-black-colored.svg",
  }
});

const logClick = (event: Event) => {
  console.log(event);
};

</script>

<style>
/*  */


</style>

