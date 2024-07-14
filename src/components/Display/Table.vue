<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-table
						:modelValue="modelValue"
                        :items="items"
                        :fields="fields"
						:hover="hover"
						:allowSelection="allowSelection"
						:selectionVariant="selectionVariant"
						:sortable="sortable"
						:sortBy="sortBy"
						:sortDesc="sortDesc"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Table',
    props: {
        /**
		 * Saves the selected items from the table.
		 */
		modelValue: {
			type: Array,
			default: () => ([]),
		},
		/**
		 * Array containing the items to be displayed in the table. Items must be in the following format:
		 *
		 *
		 * ``{ 'exampleKey1': 'exampleValue1', 'exampleKey2': 'exampleValue2' }``
		 *
		 * With the 'key' being the same as the table field where the value should be displayed
		 */
		items: {
			type: Array,
			required: true,
			default: () => ([]),
		},
		/**
		 * Array containing the fields to be displayed in the table header. Fields must be in the following format:
		 *
		 * ``{ key: 'exampleKey1', label: 'exampleLabel1' }``
		 *
		 * Or in simple string format (``'fieldkey'``). In this case, the value displayed in the table header will be the string converted to [Start Case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialized_usage).
		 *
		 * If this property is not sent, the table header will be assembled according to the `keys` of the first object in the array sent through the `items` prop.
		 */
		fields: {
			type: Array,
			default: () => ([]),
		},
		/**
		 * Boolean, informs whether the style will be changed on line hover.
		 */
		hover: {
			type: Boolean,
			default: false,
		},
		/**
		 * Boolean, informs whether checkboxes should be displayed to select lines.
		 */
		allowSelection: {
			type: Boolean,
			default: false,
		},
		/**
		 * The checkboxes variant. There are 10 variants: 'teal', 'green', 'blue',
		 * 'indigo', 'violet', 'pink', 'red', 'orange', 'amber' and 'dark'.
		 */
		selectionVariant: {
			type: String,
			default: 'green',
		},
		/**
		 * Boolean, informs whether the sorting UI should be displayed on items
		 * from header
		 */
		sortable: {
			type: Boolean,
			default: false,
		},
		/**
		 * Specifies the property (column key) used for sorting.
		 * By default, items are displayed in the sequence defined by the `items` array
		 */
		sortBy: {
			type: String,
			default: null,
		},
		/**
		 * Boolean, informs that the ordering must be descending, by default
		 * sorting is ascending (`sortDesc: false`).
		 */
		sortDesc: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {
        modelValueUpdated() {
            console.log("Model Value Updated", this.modelValue);
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  