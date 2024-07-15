<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-button
                        variant="green"
                        size="sm"
                        text="Open"
                        @click="loadOverlayLoader"
                    />
                    <rds-overlay-loader
                        v-if="showOverlayLoader"
                        variant="green"
                        size="lg"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OverlayLoader',
    props: {

    },
    data() {
        return {
            showOverlayLoader: false,
        }
    },
    mounted () {},
    methods: {
        loadOverlayLoader() {
            this.showOverlayLoader = true;

            setTimeout(() => {
                this.showOverlayLoader = false;
            }, 5000);
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  