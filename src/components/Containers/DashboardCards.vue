<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-dashboard-card
                        :showAction="showAction"
                        :fluid="fluid"
                        action="View list"
                        @action-button-click="handleActionClick"
                    >
                        <template #title-slot>
                            <bold>45</bold>
                            <span style="margin-left: 8px; font-size: 13.5px; font-weight: 500;">pregnant women</span>
                        </template>
                        <template #status-slot>
                            <rds-badge variant="red">Alert</rds-badge>
                        </template>
                        <template #description-slot>
                            Haven't had a consultation for more than 30 days
                        </template>
                    </rds-dashboard-card>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardCards',
    props: {
        /**
		 * Prop that displays the dashboard-card action button.
		 */
		showAction: {
			type: Boolean,
			default: false,
			required: false,
		},
        /**
		 * Prop that indicates whether the component should occupy 100% of the available space.
		 */
		fluid: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        handleActionClick() { console.info('clicked'); }
    },
  }
  </script>
  
  <style>
  
  </style>
  