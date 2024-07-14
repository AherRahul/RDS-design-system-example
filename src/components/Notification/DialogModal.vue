<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-button
                        id="trigger-popover"
                        @click="showModal = true"
                    >
                        {{ variant }} popup
                    </rds-button>
                    <rds-dialog-modal
                        id="my-modal"
				        v-model="showModal"
                        :variant="variant"
                        title="Are you sure you want to continue?"
                        description="This action will affect the system and associated files. 
                        By proceeding, you confirm that you are aware of and 
                        agree to the consequences. Do you wish to continue?"
                        @close="showModal = false"
                        @ok="showModal = false"
                    >
                    </rds-dialog-modal>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DialogModal',
    props: {
        /**
		 *  Defines the Dialog Modal variant.
		 */
		variant: {
			type: String,
			default: 'warning',
		},
    },
    data() {
        return {
            showModal: false,
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  #my-modal .rds-modal {
    width: 85% !important;
  }
  </style>
  