<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-badge
                        :variant="variant"
                        :size="size"
                        :clickable="clickable"
                        @click="clickBadge"
                    >
                        Badge
                    </rds-badge>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Badge',
    props: {
        variant: {
            type: String,
            default: "green",
        },
        size: {
            type: String,
            default: "md",
        },
        clickable: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        clickBadge() {
            if (this.clickable) {
                console.log("clickBadge called");
            }
        },
    },
  }
  </script>
  
  <style>
  
  </style>
  