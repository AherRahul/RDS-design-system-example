<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-file-viewer
                        :label="label"
                        :fileUrl="fileUrl"
                        :variant="variant"
                        @download-click="logDownload"
                        @close="closeFileViewer"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FileViewer',
    props: {
    /**
	 * Specifies the file label. The label must have a maximum of 50 characters.
	 */
	label: {
		type: String,
		required: true,
		default: 'Proof of address',
	},

	/**
	 * Specifies the URL of the file. The URL must contain the file extension
	 * for the preview to be generated.
	 */
	fileUrl: {
		type: String,
		required: true,
		default: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
	},

	/**
	 * Specifies the color variant of the component.
	 */
	variant: {
		type: String,
		default: 'green',
	},
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {
        logDownload() {
            console.log("logDownload called");
        },

        closeFileViewer() {
            console.log("closeFileViewer called");
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  