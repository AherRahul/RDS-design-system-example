<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-segmented-control
                        :segments="['info-outline', 'copy-outline', 'edit-outline']"
                        :withIcon="withIcon"
                        :segmentsTooltipText="[ 'info', 'copy', 'edit' ]"
                        @click="handleEmit"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SegmentedControl',
    props: {
        segments: {
			type: Array,
			default: () => [],
		},
		withIcon: {
			type: Boolean,
			default: false,
		},
		segmentsTooltipText: {
			type: Array,
			default: () => [],
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        handleEmit(value, index) { console.info('value: ', value); }
    },
  }
  </script>
  
  <style>
    .page-layout-border {
        border: 1px solid rgb(219, 219, 219);
        padding: 1rem;
        border-radius: 10px;
    }
  
  </style>
  