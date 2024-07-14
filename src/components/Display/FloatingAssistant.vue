<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-button
                        variant="green"
                        size="sm"
                        text="Add New Functionality"
                        @click="showTip = !showTip"
                    />
                    <br />
                    <br />
                    <br />
                    <div id="floating-assistant-target" style="width: fit-content;">FloatingAssistant target</div>
                    <rds-floating-assistant
                        id="my-floating-assistant"
                        v-model="showTip"
                        :title="title"
                        :url="url"
                        :variant="variant"
                        :targetId="targetId"
                        @expanded="expandedFloatingAssistant"
                        @disable-tip="disableTip"
                    >
                        The new driver registration functionality allows you to organize and
                        manage your fleet more easily, linking each driver to their
                        specific bus.
                    </rds-floating-assistant>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FloatingAssistant',
    props: {
		/**
		 * The title of the floating card that is displayed.
		 */
		title: {
			type: String,
			default: 'New functionality',
			validator: (value) => value.length <= 22,
		},
		/**
		 * The url to redirect to an external page when clicking on the
		 * 'click here' to find out more about what is described in the card
		 */
		url: {
			type: String,
			default: '',
			required: true,
		},
		/**
		* The Badge variant. There are 9 variants: 'turquoise', 'green', 'blue',
		* 'violet', 'pink', 'red', 'orange', 'amber' and 'gray'.
		*/
		variant: {
			type: String,
			default: 'green',
		},
		/**
		* Id of the element that will be a reference for the FloatingAssistant rendering.
		*/
		targetId: {
			type: String,
			default: '',
		},
    },
    data() {
        return {
            showTip: false,
        }
    },
    mounted () {},
    methods: {
        expandedFloatingAssistant() {
            console.log("expanded called");
        },

        disableTip() {
            console.log("disableTip called");
            this.showTip = false;
        },
    },
  }
  </script>
  
  <style>
    #my-floating-assistant .floating-assistant__dropdown {
        display: flex !important;
    }

    #my-floating-assistant .floating-assistant__container {
        width: 28% !important;
    }

  </style>
  