<template>
    <div>
        <rds-donut-chart
            :variant="variant"
            :data="data"
            :labels="chartLabels"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'RadialBarChart',
    data() {
        return {
			theme: 'green',
            data: [
                {
                    "datasets": [
                        {
                            "label": "January",
                            "data": [
                                3000
                            ],
                        }
                    ]
                },
                {
                    "datasets": [
                        {
                            "label": "February",
                            "data": [
                                2000
                            ],
                        }
                    ]
                },
                {
                    "datasets": [
                        {
                            "label": "March",
                            "data": [
                                1500
                            ],
                        }
                    ]
                }
            ],
            variant: 'green',
            chartLabels: [
                "January",
                "February",
                "March",
            ],
            colors: ['green', 'turquoise', 'orange'],
        }
    },
    mounted () {}
  }
  </script>
  
  <style>
  </style>
  