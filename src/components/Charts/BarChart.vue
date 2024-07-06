<template>
    <div>
        <rds-bar-chart
            :data="chartData"
            :variant="variant"
            :labels="chartLabels"
            :bar-width="barWidth"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'BarChart',
    data() {
        return {
            chartLabels: [
                "January",
                "February",
                "March",
                "April",
                "May"
            ],
            variant: 'dark',
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
                    },
                    {
                        "label": "Pending",
                        "data": [
                        200,
                        180,
                        250,
                        190,
                        280
                        ],
                        "name": "Echocardiogram"
                    },
                    {
                        "label": "Unrealized",
                        "data": [
                        38,
                        84,
                        120,
                        90,
                        185
                        ],
                        "name": "Echocardiogram"
                    }
                    ]
                },
                {
                    "name": "X-ray",
                    "datasets": [
                    {
                        "label": "Accomplished",
                        "data": [
                        120,
                        220,
                        180,
                        320,
                        150
                        ],
                        "name": "X-ray"
                    },
                    {
                        "label": "Pending",
                        "data": [
                        98,
                        145,
                        160,
                        190,
                        175
                        ],
                        "name": "X-ray"
                    },
                    {
                        "label": "Unrealized",
                        "data": [
                        49,
                        84,
                        120,
                        78,
                        130
                        ],
                        "name": "X-ray"
                    }
                    ]
                },
                {
                    "name": "Tomography",
                    "datasets": [
                    {
                        "label": "Accomplished",
                        "data": [
                        55,
                        40,
                        33,
                        90,
                        120
                        ],
                        "name": "Tomography"
                    },
                    {
                        "label": "Pending",
                        "data": [
                        25,
                        30,
                        90,
                        45,
                        20
                        ],
                        "name": "Tomography"
                    },
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
  