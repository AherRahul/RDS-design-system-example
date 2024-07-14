<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-empty-state
                        :image="image"
                        :image-description="imageDescription"
                        :title="title"
                        :text="text"
                        :action-button-text="actionButtonText"
                        :hideActionButton="hideActionButton"
                        :actionButtonVariant="actionButtonVariant"
                        @action-button-click="handleClick"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmptyState',
    props: {
        /**
		 * The image to be shown in Empty State. Note: the Storybook Controls 
		 * addon does not yet allow file selection. Therefore, it is not 
		 * possible to test the operation of this prop here.
		 */
		image: {
			type: String,
			default: '',
		},
		/**
		 * Empty State image descriptor added to tag 'alt'
		 */
		imageDescription: {
			type: String,
			default: 'Image of empty state',
		},
		/**
		 * The Empty State title.
		 */
		title: {
			type: String,
			default: 'Empty State Title',
			required: true,
		},
		/**
		 * The Empty State instructional text
		 */
		text: {
			type: String,
			default: 'To exit this empty state situation, perform the action below',
		},
		/**
		 * Prop used to hide the Empty State action button.
		 */
		hideActionButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * The text shown on the Empty State action button
		 */
		actionButtonText: {
			type: String,
			default: 'Finish',
		},
		/**
		 * The Empty State action button variant (follows the RDS button component variants)
		 */
		actionButtonVariant: {
			type: String,
			default: 'green',
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
  