<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <div :id="targetId">Pulsar target</div>
                    <rds-pulsar
                        :variant='variant'
                        :position='position'
                        :targetId="targetId"
                    >
                    </rds-pulsar>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pulsar',
    props: {
        /**
		 * The color variant. There are 9 variants implemented: 'green', 'teal',
		 * 'blue', 'indigo', 'violet', 'pink', 'red', 'orange' and 'amber'.
		 */
		variant: {
			type: String,
			default: 'green',
		},
		/**
		* Positioning of the Pulsar in relation to the reference element.
		*/
		position: {
			type: String,
			default: 'top-end',
		},
        targetId: {
			type: String,
			default: 'pulsar-target',
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
  