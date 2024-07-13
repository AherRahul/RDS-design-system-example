<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-callout-card
                        :image="image"
                        :imageDescription="imageDescription"
                        :actionButtonVariant="actionButtonVariant"
                        :actionButtonText="actionButtonText"
                        :actionButtonSecondary="actionButtonSecondary"
                        :actionButtonDisabled="actionButtonDisabled"
                        :compact="compact"
                        :text="cardText"
                        :title="cardTitle"
                        @action-button-click="actionButtonClick"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CalloutCard',
    props: {
		/**
		 * The card image.
		 */
		image: {
			type: String,
			default: '',
			required: true,
		},
		/**
		 * The description of the card image.
		 */
		imageDescription: {
			type: String,
			default: 'Image by CalloutCard',
		},
		/**
		 * The color of the card button.
		 */
		actionButtonVariant: {
			type: String,
			default: 'green',
		},
		/**
		 * The card button text.
		 */
		actionButtonText: {
			type: String,
			default: 'Ok',
		},
		/**
		 * The minor version of the button.
		 */
		actionButtonSecondary: {
			type: Boolean,
			default: false,
		},
		/**
		 * The disabled version of the button.
		 */
		actionButtonDisabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Card display mode.
		 */
		compact: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {
            cardTitle: "CalloutCard Title",
            cardText: "It is necessary to show messages related to changes or special \nconditions that occur in a component or page. For these cases, the use of Alert is recommended."
        }
    },
    mounted () {},
    methods: {
        actionButtonClick() {
			if (!this.actionButtonDisabled) {
				console.log("actionButtonClick called");
			}
        },
    },
  }
  </script>
  
  <style>
  
  </style>
  