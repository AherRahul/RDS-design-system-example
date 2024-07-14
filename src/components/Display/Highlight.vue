<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-highlight
                        :variant="variant"
                        :animated="animated"
                        :duration="duration"
                        :delay="delay"
                    >
                        <span> Very important text</span>
                    </rds-highlight>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Highlight',
    props: {
        /**
		 * The Highlight variant. There are 3 variants implemented: 'info', 'success'
		 * and 'danger'
		 */
		variant: {
			type: String,
			default: 'info',
		},
		/**
		 * Specifies whether the highlight will be static or animated.
		 */
		animated: {
			type: Boolean,
			default: false,
		},
		/**
		 * Specifies the duration of the animation.
		 */
		duration: {
			type: Number,
			default: 1,
		},
		/**
		 * The waiting time until the animation starts.
		 */
		delay: {
			type: Number,
			default: 0,
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
  