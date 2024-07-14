<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-clickable
                        :clickable="clickable"
                        @click="logClickableClick"
                    >
                        Clickable text
                    </rds-clickable>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Clickable',
    props: {
        /**
		 * Enables or disables clicking on the component
		 */
		clickable: {
			type: Boolean,
			default: false,
		}
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClickableClick(event) {
			console.info('logClick: ', event);
		}
    },
  }
  </script>
  
  <style>
  
  </style>
  