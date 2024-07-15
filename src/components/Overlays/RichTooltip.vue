<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div>
                        <span
                            :id="targetId"
                            @mouseover="showPopover = true"
                            @mouseleave="showPopover = false"
                        >
                            Tooltip trigger
                        </span>
                        <rds-rich-tooltip
                            v-model="showPopover"
                            :targetId="targetId"
                            :fitContentWidth="fitContentWidth"
                            :width="width"
                        >
                            <div>
                                <p><strong>In attendance:</strong> 280</p>
                                <p><strong>Pending:</strong> 60</p>
                                <p><strong>In monitoring:</strong> 600</p>
                            </div>
                        </rds-rich-tooltip>
                    </div>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RichTooltip',
    props: {
        /**
		* Popover width. The minimum width is 100px and the maximum is 400px.
		*/
		width: {
			type: [String, Number],
			default: 250,
		},
		/**
		* When true makes the popover width adaptable to the content. `This prop takes precedence over the width prop!`
		*/
		fitContentWidth: {
			type: Boolean,
			default: false,
		},
		/**
		* ID of the element that will be a reference for rendering
		* from Popover.
		*/
		targetId: {
			type: String,
			default: '',
		},
		/**
		* Indicates the default placement of the Popover.
		* When not specified, "bottom" positioning is considered
		*/
		defaultPlacement: {
			type: String,
			default: null,
		}
    },
    data() {
        return {
            showPopover: false,
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  