<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-card
                        :title="title"
                        :content="content"
                        :imageWidth="imageWidth"
                        :imageHeight="imageHeight"
                        :imageSrc="imageSrc"
                        :clickable="clickable"
                        :horizontal="horizontal"
                        @cardClick="logClick"
                    >
                        <template #footer>
                            <rds-button size="md" style="margin-top: 16px">
                                Action 1
                            </rds-button>
                        </template>
                    </rds-card>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
        /**
		* Specifies the card title. When content is sent to the `Header` slot the content of this prop is not displayed.
		*/
		title: {
			type: String,
			default: '',
		},
		/**
		* Specifies Card text. When content is sent to the `Body` slot the content of this prop is not displayed.
		*/
		content: {
			type: String,
			default: '',
		},
		/**
		* Path of the image that will be rendered. When content is sent to the `Image` slot the content of this prop is not displayed.
		*/
		imageSrc: {
			type: String,
			default: '',
		},
		/**
		* Text description of the image.
		*/
		imageAlt: {
			type: String,
			default: 'card image',
		},
		/**
		* Width of the card image.
		*/
		imageWidth: {
			type: [String, Number],
			default: 300,
		},
		/**
		* Height of the card image.
		*/
		imageHeight: {
			type: [String, Number],
			default: 180,
		},
		/**
		* Width of card content.
		*/
		bodyWidth: {
			type: [String, Number],
			default: 300,
		},
		/**
		* Makes the Card alignment horizontal.
		*/
		horizontal: {
			type: Boolean,
			default: false,
		},
		/**
		* Enables or disables clicking on the component
		*/
		clickable: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClick(event) {
			console.info('logClick: ', event);
		}
    },
  }
  </script>
  
  <style>
  
  </style>
  