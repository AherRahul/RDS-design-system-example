<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-carousel-controller
                        :total="12"
                        :perPage="4"
                        :simple="simple"
                        :fluid="fluid"
                        propertyName="Metrics"
                        @click-forward="handleClickForwardEvent"
                        @click-back="handleClickBackEvent"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarouselController',
    props: {
        /**
		 * A boolean flag to enable a simple mode for the carousel.
		**/
		simple: {
			type: Boolean,
			default: false,
			required: false,
		},
        /**
		 * A boolean flag to enable fluid layout for the carousel.
		**/
		fluid: {
			type: Boolean,
			default: false,
			required: false,
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
  