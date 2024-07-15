<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div class="d-flex justify-content-center">
                        <rds-button
                            :id="targetId"
                            @click="showPopover = !showPopover"
                        >
                            Click
                        </rds-button>
                        <rds-popover
                            :width="width"
                            :fitContentWidth="fitContentWidth"
                            :height="height"
                            :targetId="targetId"
                            :rightAligned="rightAligned"
                            :verticalFluid="verticalFluid"
                            v-model="showPopover"
                        >
                            <span>
                                Mussum Ipsum, cacilds vidis liter abertis. The order of the tractors does not change the hard bread. It's depressed,
                                I know a cachacis that can brighten your life.Paisis, filhis, espiritis santis.Leite de capivaris,
                                headless manquis mule milk.
                            </span>
                            <span>
                                Mussum Ipsum, cacilds vidis liter abertis. The order of the tractors does not change the hard bread. It's depressed,
                                I know a cachacis that can brighten your life.Paisis, filhis, espiritis santis.Leite de capivaris,
                                headless manquis mule milk.
                            </span>
                        </rds-popover>
                    </div>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Popover',
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
		 * Popover height. The maximum height is 500px
		 */
		height: {
			type: [String, Number],
			default: 200,
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
		 * When `true`, aligns the popover to the right of the
		 * of the reference component (target).
		 */
		rightAligned: {
			type: Boolean,
			default: false,
		},
		/**
		 * When `true`, removes the internal scroll and makes it
		 * the size of the fluid Popover.
		 */
		verticalFluid: {
			type: Boolean,
			default: false,
		},
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
  