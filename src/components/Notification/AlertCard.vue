<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-alert-card
                        :variant="variant"
                        :title="title"
                        :subTitle="subTitle"
                        :withIcon="withIcon"
                        :value="value"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlertCard',
    props: {
        /**
		 * The Alert variant. There are 3 variants implemented: 'info', 'warning'
		 * and 'danger'
		 */
		variant: {
			type: String,
			default: 'info',
		},
		/**
		 * The title of the alert. The title can also be used with the slot.
		 */
		title: {
			type: String,
			default: 'AlertCard Title',
		},
		/**
		 * The alert subtitle. Subtitle can also be used with slot.
		 */
		subTitle: {
			type: String,
			default: 'AlertCard Sub-Title',
		},
		/**
		 * Determines whether the Alert will have an icon or not.
		 */
		withIcon: {
			type: Boolean,
			default: false,
		},
		/**
		* Prop used as v-model. Controls the visibility of the popover.
		*/
		value: {
			type: Boolean,
			default: false,
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
  