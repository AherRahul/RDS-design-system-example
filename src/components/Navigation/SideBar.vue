<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div class="page-layout-border">
                        <rds-side-bar
                            variant="indigo"
                            userName="Joana Mendes"
                            userRole="Administrator"
                            userPicture="https://i1.rgstatic.net/ii/profile.image/834217822924800-1575904436366_Q128/Joana-Mendes-13.jpg"
                            :collapsible=true
                            logoImage="https://rahulaher.netlify.app/img/logo/word-white-colored.svg"
                            :light=false
                            :items="items"
                            :activeItem="items[4]"
                            @sidebar-click="logClick"
                            @collapse-click="logCollapseClick"
                            @logout="logLogout"
                        />
                    </div>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
    props: {

    },
    data() {
        return {
            items: [
                {
                    label: 'Dashboard',
                    icon: 'dashboard-outline',
                    type: 'route',
                    route: {
                        path: '/dashboard',
                        name: 'dashboard'
                    },
                },
                {
                    label: 'Service',
                    icon: 'clipboard-text-outline',
                    type: 'route',
                    route: {
                        path: '/attendance',
                        name: 'attendance'
                    },
                },
                {
                    label: 'Links',
                    icon: 'link-outline',
                    items: [
                        {
                            label: 'Panel (Tv)',
                            route: {
                                path: 'https://www.google.com',
                                name: 'panel-tv',
                            },
                            type: 'external',
                        },
                        {
                            label: 'Totem',
                            route: {
                                path: '/totem-link',
                                name: 'totem',
                            },
                            type: 'external',
                        },
                    ]
                },
                {
                    label: 'Reports',
                    icon: 'printer-outline',
                    type: 'route',
                    route: {
                        path: '/reports',
                        name: 'page2'
                    },
                },
                {
                    label: 'Settings',
                    icon: 'settings-outline',
                    type: 'route',
                    items: [
                        {
                            label: 'Panel (Tv)',
                            route: {
                                path: '/tv',
                                name: 'tv'
                            }
                        },
                        {
                            label: 'Totem',
                            route: {
                                path: '/totem',
                                name: 'totem',
                            },
                        },
                        {
                            label: 'Services',
                            route: {
                                path: '/services',
                                name: 'services',
                            },
                        },
                        {
                            label: 'Categories',
                            route: {
                                path: '/categories',
                                name: 'categories',
                            }
                        },
                        {
                            label: 'Priorities',
                            route: {
                                path: '/priorities',
                                name: 'priorities',
                            },
                        },
                    ]
                },
                {
                    label: 'Support',
                    icon: 'lifebuoy-outline',
                    type: 'link',
                    route: {
                        path: '/support',
                        name: 'support',
                    },
                },
            ],
        }
    },
    mounted () {},
    methods: {
        logClick(element) {
			console.info('%clogItemClick: ', 'color: #2C70CD;', element);
		},
		logCollapseClick(element) {
			console.info('%clogCollapseClick: ', 'color: #2C70CD;', element);
		},
		logLogout(element) {
			console.info('%clogLogout: ', 'color: #2C70CD;', element);
		},
    },
  }
  </script>
  
  <style>
  
  </style>
  