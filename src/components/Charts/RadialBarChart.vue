<template>
    <div>
        <rds-donut-chart
            :data="chartData"
            :labels="chartLabels"
            :variant="variant"
            :isVisiblePointNames="isVisiblePointNames"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'RadialBarChart',
    data() {
        return {
            chartLabels: [
                "January",
                "February",
                "March",
            ],
			theme: 'dark',
            variant: 'dark',
            isVisiblePointNames: true,
            chartData: [
				{
					datasets: [
						{
							label: 'January',
							data: [3000],
						},
					]
				},
				{
					datasets: [
						{
							label: 'February',
							data: [2000],
						},
					],
				},
				{
					datasets: [
						{
							label: 'March',
							data: [1500],
						},
					],
				},
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
  