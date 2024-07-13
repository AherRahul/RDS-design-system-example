<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col cols="2" offset="0" colsAtS="12" colsAtM="12" colsAtL="2" colsAtXl="2">
                    <rds-button
                        variant="green"
                        size="sm"
                        text="Open"
                        @click="showActionBar = !showActionBar"
                    />
                </rds-col>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-action-bar
                        class="pt-1"
                        v-bind="args"
                        :show="showActionBar"
                        :dismissible="dismissible"
                        :float="float"
                        :light="light"
                        @click="logAction"
                        @close="logClose"
                    >
                        <template #description>
                            8 selected items
                        </template>
                    </rds-action-bar>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActionBar',
    props: {
        light: {
            type: Boolean,
            default: false,
        },
        dismissible: {
            type: Boolean,
            default: false,
        },
        float: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showActionBar: false,
            args: {
                actions: [
                    "Button1",
                    "Button2",
                    "Button3"
                ],
                description: '8 selected items'
            }
        }
    },
    mounted () {},
    methods: {
        logAction() {
            console.log("logAction called");
        },

        logClose() {
            console.log("logClose called");
            this.showActionBar = false;
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  