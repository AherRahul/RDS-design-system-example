<template>
    <div>
        <rds-stacked-bar-chart
            :data="chartData"
            :variant="variant"
            :labels="chartLabels"
            :bar-width="barWidth"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'StackedBarChart',
    data() {
        return {
            chartLabels: [
                "January",
                "February",
                "March",
                "April",
                "May"
            ],
            variant: 'green',
            chartData: [
                {
                    "name": "Echocardiogram",
                    "datasets": [
                    {
                        "label": "Accomplished",
                        "data": [
                            50,
                            50,
                            50,
                            50,
                            50
                        ],
                        "name": "Echocardiogram"
                    }
                    ]
                },
                {
                    "name": "X-Ray",
                    "datasets": [
                    {
                        "label": "Unrealized",
                        "data": [
                            49,
                            84,
                            120,
                            78,
                            130
                        ],
                        "name": "X-Ray"
                    }
                    ]
                },
                {
                    "name": "Tomography",
                    "datasets": [
                    {
                        "label": "Unrealized",
                        "data": [
                            38,
                            84,
                            120,
                            90,
                            45
                        ],
                        "name": "Tomography"
                    }
                    ]
                }
            ],
            barWidth: 1,
        }
    },
    mounted () {}
  }
  </script>
  
  <style>
  .responsive-container canvas {
    height: 250px !important;
    width: 100% !important;
  }
  </style>
  