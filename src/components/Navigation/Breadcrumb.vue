<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-breadcrumb
                        :items="items"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Breadcrumb',
    props: {
        /**
		 * Defines the list of Breadcrumb items to be
		 * shown. The list items must be
		 * objects with path or route, and with a label.
		 */
		items: {
			type: Array,
			default: () => ([]),
			required: true,
		},
    },
    data() {
        return {
            items: [
                {
                    label: 'Reports',
                    route: {
                        path: '/navigation',
                        name: 'reports'
                    },
                },
                {
                    label: 'Individualized reports',
                    route: {
                        path: '/navigation',
                        name: 'individualized'
                    },
                },
                {
                    label: 'User Report',
                    route: {
                        path: '/navigation',
                        name: 'users'
                    },
                },
            ],
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  