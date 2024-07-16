<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-link
                        :href="href"
                        :newTab="newTab"
                        :text="text"
                        :size="size"
                        :bold="bold"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LinkComponent',
    props: {
        /**
		* Redirect URL.
		*/
		href: {
			type: String,
			required: true,
		},
		/**
		* Prop used to redirect the link from a new tab.
		*/
		newTab: {
			type: Boolean,
			default: false,
		},
		/**
		* Text used in the URL address for the user.
		*/
		text: {
			type: String,
			required: true,
		},
		/**
		* Text used in the URL address for the user.
		*/
		size: {
			type: String,
			default: 'md',
		},
		/**
		* Text used in the URL address for the user.
		*/
		bold: {
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
  