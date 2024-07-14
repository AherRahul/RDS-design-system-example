<template>
    <div style="padding: 5px">
        <rds-grid class="empty-state-border">
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-page-header
                        title="Procedures"
                        subtitle="Create dashboards and associate them with services. To access the panels externally, go to https://rahulaher.netlify.app and enter the corresponding key."
                    >
                        <template
                            #aside
                        >
                            <rds-button
                                secondary
                                @click="logClick('Btn 1')"
                                text="Button"
                                style="margin-right: 1rem;"
                            />
                            <rds-button
                                class="d-flex align-items-center ml-4"
                                variant="success"
                                @click="logClick('Btn 2')"
                                text="Button"
                            />
                        </template>
                    </rds-page-header>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageHeader',
    props: {

    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClick(btnName) { 
            console.info(btnName)
        },
    }
  }
  </script>
  
  <style lang="scss">
  
  .empty-state-border {
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    padding: 2rem;
  }
  </style>
  