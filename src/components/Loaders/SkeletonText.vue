<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-skeleton-text
                        :width="width"
                        :height="height"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonText',
    props: {
        /**
         * skeleton width
         */
		width: {
			type: String,
			required: false,
			default: '100'
		},
		/**
         * Skeleton height
         */
		height: {
			type: String,
			required: false,
			default: '25',
		}
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
  