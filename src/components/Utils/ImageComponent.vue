<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-image
                        :width="width"
                        :blackAndWhite="blackAndWhite"
                        :dimmed="dimmed"
                        :roundedCorners="roundedCorners"
                        :opacity="opacity"
                        :src="src"
                        :fallbackSrc="fallbackSrc"
                        :alt="alt"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageComponent',
    props: {
        /**
		* Path of the image that will be rendered.
		*/
		src: {
			type: String,
			required: true,
		},
		/**
		* Path of the image that will be rendered as a fallback, if the main image
		* presents a loading error.
		*/
		fallbackSrc: {
			type: String,
			required: false,
		},
		/**
		* Image width. When not specified, the `auto` value is applied.
		*/
		width: {
			type: [Number, String],
			default: null,
		},
		/**
		* Image height. When not specified, the `auto` value is applied.
		*/
		height: {
			type: [Number, String],
			default: null,
		},
		/**
		* Text description of the image.
		*/
		alt: {
			type: String,
			default: 'Image',
		},
		/**
		* Image opacity.
		*/
		opacity: {
			type: [Number, String],
			default: 1,
		},
		/**
		* When true, applies a 35% grayscale to the image.
		*/
		dimmed: {
			type: Boolean,
			default: false,
		},
		/**
		* Makes the image black and white.
		*/
		blackAndWhite: {
			type: Boolean,
			default: false,
		},
		/**
		* Rounds the edges of the image.
		*/
		roundedCorners: {
			type: Boolean,
			default: false,
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
  