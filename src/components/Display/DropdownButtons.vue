<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-dropdown-button
                        :items="items"
                        :variant="variant"
                        :secondary="secondary"
                        :text="text"
                        :dropdownWidth="dropdownWidth"
                        @action-click="logActionClick"
                        @button-click="logClick"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropdownButtons',
    props: {
		/**
		* The DropdownButton variant. There are 9 variants: 'turquoise', 'green', 'blue',
		* 'violet', 'pink', 'red', 'orange', 'amber' and 'gray'.
		*/
		variant: {
			type: String,
			default: 'gray',
		},
		/**
		* Specifies whether the DropdownButton version is the secondary one. This property has
		* higher prevalence than the `variant` prop.
		*/
		secondary: {
			type: Boolean,
			default: false,
		},
		/**
		* Controls the size of the Dropdown popover (in pixels).
		* The size is never smaller than the width of the button.
		*/
		dropdownWidth: {
			type: Number,
			default: 0,
		},
    },
    data() {
        return {
            isActive: false,
            items: [
                {
                    "name": "Cancel request",
                    "icon": "block-outline"
                },
                {
                    "name": "Deny request",
                    "icon": "alert-outline"
                },
                {
                    "name": "Grant request",
                    "icon": "check-outline"
                }
            ],
            text: 'Finalize request'
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  