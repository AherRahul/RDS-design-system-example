<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-panel-card
                        title="Networks"
                        subtitle="Enable regulatory networks"
                        :noContentPadding="noContentPadding"
                    >
                        <template #panel-actions>
                            <strong>#</strong>
                        </template>
                        Mussum Ipsum, cacilds vidis liter abertis. Everyone
                        see the mistakes I take, but no one sees the mistakes I take!
                        I threw the stick at the cathouse, but you didn't die. There, then
                        divoltis porris, paradis. Capybara milk, mule milk
                        headless manquis.
                    </rds-panel-card>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PanelCard',
    props: {
        /**
		 * Card title.
		 */
		title: {
			type: String,
			default: 'Title',
			required: true,
		},
		/**
		 * Card subtitle.
		 */
		subtitle: {
			type: String,
			default: 'Subtitle',
			required: true,
		},
		/**
		 * Removes the default padding from the card body.
		 */
		noContentPadding: {
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
  