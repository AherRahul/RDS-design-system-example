<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-alert
                        :variant="variant"
                        :text="text"
                        :dismissible="dismissible"
                        @close="closeAlert"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Alert',
    props: {
        /**
		 * The Alert variant. There are 3 variants implemented: 'info', 'warning' and 'danger'
		 */
		variant: {
			type: String,
			default: 'info',
			required: false,
		},
		/**
		 * The title of the alert. The title can also be used with the slot.
		 */
		text: {
			type: String,
			default: 'AlertCard Title',
			required: false,
		},
		/**
		 * Prop that displays the alert close button.
		 */
		dismissible: {
			type: Boolean,
			default: false,
			required: false,
		},
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {
        closeAlert() {
            console.log("closeAlert callled for", this.variant);
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  