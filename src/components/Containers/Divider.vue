<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-divider
                        :text="text"
                        :vertical="vertical"
                        :width="width"
                        :dimmed="dimmed"
                        :light="light"
                        :inline="inline"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Divider',
    props: {
        /**
		 * Text rendered on top or next to the Divider
		 */
		text: {
			type: String,
			default: null,
		},
		/**
		 * When true, shows the Divider vertically
		 */
		vertical: {
			type: Boolean,
			default: false,
		},
		/**
		 * When unspecified or 0, the behavior of the
		 * component is fluid, with width 100%.
		 */
		width: {
			type: [String, Number],
			default: null,
		},
		/**
		 * Makes the divider white
		 */
		dimmed: {
			type: Boolean,
			default: false,
		},
		/**
		 * Makes the divider white
		 */
		light: {
			type: Boolean,
			default: false,
		},
		/**
		 * When specified, determines the width of the Divider.
		 */
		inline: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  