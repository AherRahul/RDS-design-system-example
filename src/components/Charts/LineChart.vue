<template>
    <div>
        <rds-line-chart
            :data="chartData"
            :variant="variant"
            :labels="chartLabels"
            :fill="true"
            :isDashed="true"
            :borderDash="borderDash"
            :xAxisRange="xAxisRange"
            :yAxisRange="yAxisRange"
            :smoothing="smoothing"
            :scales="scales"
            :barWidth="barWidth"
            :show-label-name="showLabelName"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'LineChart',
    data() {
        return {
            chartLabels: [
                "2024-03-01",
                "2024-03-02",
                "2024-03-03",
                "2024-03-04",
                "2024-03-05",
                "2024-03-06",
                "2024-03-07",
                "2024-03-08",
                "2024-03-09",
                "2024-03-10",
                "2024-03-11",
                "2024-03-12",
                "2024-03-13",
                "2024-03-14",
                "2024-03-15",
                "2024-03-16",
                "2024-03-17",
                "2024-03-18",
                "2024-03-19",
                "2024-03-20",
                "2024-03-21",
                "2024-03-22",
                "2024-03-23",
                "2024-03-24",
                "2024-03-25",
                "2024-03-26",
                "2024-03-27",
                "2024-03-28",
                "2024-03-29",
                "2024-03-30"
            ],
            variant: 'dark',
            borderDash: [ 5, 5 ],
            smoothing: 0.5,
            showLabelName: true,
            scales: {
                "x": {
                    "grid": {
                    "display": false
                    }
                }
            },
            xAxisRange: [0, 100],
            yAxisRange: [0, 100],
            chartData: [
                {
                    "name": "Echocardiogram",
                    "datasets": [
                    {
                        "label": "Accomplished",
                        "data": [
                        0,
                        80,
                        70,
                        10,
                        12,
                        250,
                        50,
                        100,
                        60,
                        55,
                        110,
                        10,
                        0,
                        50,
                        30,
                        250,
                        50,
                        100,
                        60,
                        55,
                        2,
                        32,
                        69,
                        34,
                        23,
                        24,
                        35,
                        96,
                        165,
                        132
                        ],
                        "name": "Echocardiogram"
                    }
                    ]
                },
                {
                    "name": "X-Ray",
                    "datasets": [
                    {
                        "label": "Accomplished",
                        "data": [
                        110,
                        10,
                        0,
                        50,
                        30,
                        2,
                        32,
                        69,
                        34,
                        23,
                        24,
                        35,
                        96,
                        165,
                        132,
                        2,
                        32,
                        69,
                        34,
                        23,
                        110,
                        10,
                        0,
                        50,
                        30,
                        250,
                        50,
                        100,
                        60,
                        55
                        ],
                        "name": "X-Ray"
                    }
                    ]
                },
                {
                    "name": "Tomography",
                    "datasets": [
                    {
                        "label": "Accomplished",
                        "data": [
                        150,
                        80,
                        70,
                        10,
                        12,
                        250,
                        50,
                        100,
                        60,
                        55,
                        2,
                        32,
                        69,
                        34,
                        23,
                        110,
                        10,
                        0,
                        50,
                        30,
                        250,
                        50,
                        100,
                        60,
                        55,
                        24,
                        35,
                        96,
                        165,
                        295
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
  