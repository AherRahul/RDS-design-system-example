<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-tooltip
                        text="Tooltip text"
                        :position="position"
                        :slim="slim"
                    >
                        Tooltip trigger
                    </rds-tooltip>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tooltip',
    props: {
        /**
		 * The positioning of the Tooltip. The prop accepts the options: top, right, bottom and left.
		 */
		position: {
			type: String,
			default: 'top',
		},
		/**
		 * When set to true, it makes the text and tooltip size smaller.
		 */
		slim: {
			type: Boolean,
			default: false,
		}
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
  