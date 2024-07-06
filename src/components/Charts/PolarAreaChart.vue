<template>
    <div>
        <rds-polar-area-chart
            :data="chartData"
            :variant="variant"
            :labels="chartLabels"
            :is-visible-point-names="isVisiblePointNames"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PolarAreaChart',
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
            isVisiblePointNames: true,
            chartData: [
                {
                    "name": "Echocardiogram",
                    "datasets": [
                    {
                        "label": "Exams carried out",
                        "data": [
                            120,
                            220,
                            180,
                            320,
                            150
                        ],
                        "name": "Echocardiogram"
                    }
                    ]
                }
            ],
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
  