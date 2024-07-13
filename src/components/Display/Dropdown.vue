<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-dropdown
                        :label="label"
                        :content="content"
                        :disabled="disabled"
                        :dropdownWidth="dropdownWidth"
                        @click="isActive = !isActive"
                    >
                        <p>Dropdown Slot</p>
                    </rds-dropdown>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dropdown',
    props: {
        /**
		 * 	Dropdown Content.
		 */
		content: {
			type: String,
			default: 'Content',
			required: true,
		},
		/**
		 * Label displayed next to content
		 */
		label: {
			type: String,
			default: 'Label',
			required: true,
		},
		/**
		 * Control Dropdown availability
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the size of the Dropdown popover (in pixels). 
		 * The size is never smaller than the width of the Dropdown.
		 */
		dropdownWidth: {
			type: Number,
			default: 0,
		},
    },
    data() {
        return {
            isActive: false,
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  