<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div style="background-color: #F8F9FA; padding: 16px; border-radius: 4px;">
                        <rds-inner-tabs
                            :tabs="tabs"
                            :activeTab="activeTab"
                            :variant="variant"
                        >
                            <template #overview>
                                Overview
                            </template>
                            <template #indicator-1>
                                Contents of tab-1
                            </template>
                            <template #indicator-2>
                                Contents of tab-2
                            </template>
                            <template #indicator-3>
                                Tab-3 content
                            </template>
                            <template #indicator-4>
                                Contents of tab-4
                            </template>
                            <template #indicator-5>
                                Contents of tab-5
                            </template>
                            <template #indicator-6>
                                Contents of tab-6
                            </template>
                            <template #indicator-7>
                                Contents of tab-7
                            </template>
                            <template #indicator-8>
                                Contents of tab-8
                            </template>
                        </rds-inner-tabs>
                    </div>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InnerTabs',
    props: {
        /**
		 * Defines the list of InnerTabs items to be shown.
		 * List items must be objects with `name` (to identify the slot)
		 * and `title` (tab title)
		 */
		tabs: {
			type: Array,
			default: () => ([]),
			required: true,
		},
		/**
		 * The active item among the tabs
		 */
		activeTab: {
			type: Object,
			default: () => ({}),
			required: true,
		},
		/**
		 * Border color indicating the active item.
		 * There are some predefined colors following the RDS guides, they are: 
		 * `turquoise`, `green`, `blue`, `violet`, `pink`, `red`, `orange`, `amber` and `gray`.
		 */
		variant: {
			type: String,
			default: 'green',
		},
    },
    data() {
        return {
            
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  