<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-actions-list
                        :actions="actions"
                        :numberOfExpandedActions="numberOfExpandedActions"
                        @expanded="expandedActionList"
                        @action-clicked="actionClickedActionList"
                    >
                        <template
                            #action="{ list }"
                        >
                            {{ list.title }}
                        </template>
                    </rds-actions-list>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActionList',
    props: {
        numberOfExpandedActions: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            actions: [
                {
                    "title": "Icon1",
                    "disabled": true
                },
                {
                    "title": "Icon2"
                },
                {
                    "title": "Icon3"
                },
                {
                    "title": "Icon4"
                }
            ],
        }
    },
    mounted () {},
    methods: {
        expandedActionList() {
            console.log("expandedActionList called");
        },

        actionClickedActionList() {
            console.log("action-clicked called");
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  