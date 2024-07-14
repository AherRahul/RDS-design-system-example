<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-progress-circular
                        :variant="variant"
                        :size="size"
                        :value="value"
                        :maxValue="maxValue"
                        :slim="slim"
                        :thick="thick"
                        :noLabel="noLabel"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressCircular',
    props: {
        /**
		 * Sets the color of the ProgressCircular.
		 */
		variant: {
			type: String,
			default: 'green',
		},
		/**
		 * Defines the size (diameter) of the ProgressCircular.
		 */
		size: {
			type: String,
			default: 'md',
			required: false,
		},
		/**
		 * Defines the value corresponding to the filled percentage or fraction 
		 * of the ProgressCircular.
		 */
		value: {
			type: Number,
			default: 0,
			required: true,
		},
		/**
		 * Sets the maximum value, the entire process portion, of the ProgressCircular. 
		 * By default, the maximum value is 100 (default percentage).
		 */
		maxValue: {
			type: Number,
			default: 100,
			required: false,
		},
		/**
		* Makes the ProgressCircular circle thickness smaller.
		*/
		slim: {
			type: Boolean,
			default: false,
		},
		/**
		* Makes the ProgressCircular circle thicker.
		*/
		thick: {
			type: Boolean,
			default: false,
		},
		/**
		* Controls the display of the label.
		*/
		noLabel: {
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
  