<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-nav-bar
                        :items="items"
                        :activeItem="items[0]"
                        variant="green"
                        @click="logClick"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    props: {

    },
    data() {
        return {
            items: [
                {
                    label: 'Risk group map',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Healthy League',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Neighborhood heat map',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
            ],
        }
    },
    mounted () {},
    methods: {
        logClick(element) {
			console.info('logAction: ', element);
		},
    },
  }
  </script>
  
  <style>
  
  </style>
  