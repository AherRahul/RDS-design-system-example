<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div style="width: fit-content; background-color: #def7eb; border-radius: 20px">
                        <div
                            style="padding: 0.5px; background-color: #def7eb; border-radius: 20px"
                        >
                            <rds-spacer
                                :paddingTop="10"
                                :paddingRight="0"
                                :paddingBottom="2"
                                :paddingLeft="0"
                                :marginTop="0"
                                :marginRight="7"
                                :marginBottom="0"
                                :marginLeft="5"
                            >
                                <div style="width: 100px; height: 100px; background-color: #2AC092; border-radius: 20px"/>
                            </rds-spacer>
                        </div>
                    </div>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Spacer',
    props: {

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
  