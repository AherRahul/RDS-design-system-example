<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div>
                        <rds-button
                            @click="show = true"
                        >
                            open "{{ size }}" SideSheet
                        </rds-button>
                        <rds-side-sheet
                            v-model="show"
                            :title='title'
                            :size='size'
                            :withOverlay="withOverlay"
                			:noCloseOnBackdrop="noCloseOnBackdrop"
			                :noCloseOnEsc="noCloseOnEsc"
                            :position="position"
                            :no-close-on-backdrop="no-close-on-backdrop"
                            :no-close-on-esc="no-close-on-esc"
                        >
                            <p class="p-3">
                                Mussum Ipsum cacilds vidis liter abertis. Everyone
                                see the mistakes I take, but no one sees the mistakes I take!
                                I threw the stick at the cathouse, but you didn't die. There, then
                                divoltis porris, paradis. Capybara milk, mule milk
                                headless manquis. Viva Forevis aptent taciti sociosqu ad
                                torquent coast. For the increase in cachacis, I complained. Nec
                                orci ornare consequat. Praesent lacinia ultrices consectetur.
                                Sed non ipsum felis. Cevadis in ampoule to form a pindurette.
                            </p>
                        </rds-side-sheet>
                    </div>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideSheet',
    props: {
        /**
		* Sets the title of the SideSheet.
		*/
		title: {
			type: String,
			default: null,
		},
		/**
		* Indicates whether an overlay will be used next to the SideSheet.
		*/
		withOverlay: {
			type: Boolean,
			default: false,
		},
		/**
		* Specifies the size of the SideSheet. There are 4 sizes implemented: 'sm', 'md', 'lg', 'xl'.
		*/
		size: {
			type: String,
			default: 'md',
		},
		/**
		* Defines whether the SideSheet will be closed when clicking on the backdrop.
		*/
		noCloseOnBackdrop: {
			type: Boolean,
			default: false,
		},
		/**
		* Defines whether the SideSheet will be closed when the user presses 'ESC'.
		*/
		noCloseOnEsc: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {
            show: false,
        }
    },
    mounted () {},
    methods: {
    },
  }
  </script>
  
  <style>
  
  </style>
  