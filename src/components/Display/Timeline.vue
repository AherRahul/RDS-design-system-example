<template>
    <div style="padding: 5px; padding-top: 3rem;">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-timeline
                        :reverse="false"
                    >
                        <rds-timeline-item variant="green" loading>
                            <template #title>
                                Item 1
                            </template>
                            <template #content>
                                In this way, clear determination of objectives encourages
                                the standardization of new propositions.
                            </template>
                        </rds-timeline-item> 
                        <rds-timeline-item variant="green">
                            <template #title>
                                Item 2
                            </template>
                            <template #content>
                                What we always have to keep in mind is that the consensus on
                                the need for qualification assumes important positions
                                in establishing normative rules of conduct.
                            </template>
                        </rds-timeline-item>
                        <rds-timeline-item variant="green">
                            <template #title>
                                Item 3
                            </template>
                            <template #content>
                                Daily practice proves that the complexity of studies
                                carried out encourages the standardization of corporate paradigms.
                            </template>
                        </rds-timeline-item>
                    </rds-timeline>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Timeline',
    props: {
        
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  