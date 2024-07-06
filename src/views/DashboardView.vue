<template>
    <div class="dashboard">
        <div class="container-fluid">
            <div class="dashboard-header">

            </div>
            <div class="dashboard-content">
                <div class="dashboard-main">
                    <rds-grid>
                        <rds-row>
                            <rds-col cols="8" offset="0">
                                <h3 style="text-align: center;"> Bar chart</h3>
                                <bar-chart />
                            </rds-col>
                            
                            <rds-divider :vertical="true" />

                            <rds-col cols="4">
                                <h3 style="text-align: center;">Gauge chart</h3>
                                <gauge-chart />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <rds-row style="margin-top: 3%;">
                            <rds-col cols="8" offset="0">
                                <h3 style="text-align: center;"> Line chart</h3>
                                <line-chart />
                            </rds-col>
                            
                            <rds-divider :vertical="true" />

                            <rds-col cols="4">
                                <h3 style="text-align: center;">Pie chart</h3>
                                <pie-chart />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <rds-row style="margin-top: 3%;">
                            <rds-col cols="8" offset="0">
                                <h3 style="text-align: center;"> Stack Bar chart</h3>
                                <stacked-bar-chart />
                            </rds-col>
                            
                            <rds-divider :vertical="true" />

                            <rds-col cols="4">
                                <h3 style="text-align: center;">Polar chart</h3>
                                <polar-area-chart />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid class="mt(10)" style="margin-top: 3%;">
                        <rds-row>
                            <rds-col cols="4">
                                <donut-chart-1 />
                            </rds-col>

                            <rds-divider :vertical="true" />

                            <rds-col cols="4">
                                <donut-chart-2 />
                            </rds-col>
                            
                            <rds-divider :vertical="true" />

                            <rds-col cols="4">
                                <radial-bar-chart />
                            </rds-col>
                        </rds-row>
                    </rds-grid>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import BarChart from '../components/Charts/BarChart.vue';
  import DonutChart1 from '../components/Charts/DonutChart1.vue';
  import DonutChart2 from '../components/Charts/DonutChart2.vue';
  import GaugeChart from '../components/Charts/GaugeChart.vue';
  import LineChart from '../components/Charts/LineChart.vue';
  import PieChart from '../components/Charts/PieChart.vue';
  import StackedBarChart from '../components/Charts/StackedBarChart.vue';
  import PolarAreaChart from '../components/Charts/PolarAreaChart.vue';
  import RadialBarChart from '../components/Charts/RadialBarChart.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      BarChart,
      DonutChart1,
      DonutChart2,
      GaugeChart,
      LineChart,
      PieChart,
      StackedBarChart,
      PolarAreaChart,
      RadialBarChart
    },
    data() {
      return {}
    }
  }
  </script>
  
  <style scoped>
    @media (min-width: 1024px) {
        .dashboard {
            min-height: 100%;
            display: flex;
            align-items: center;
        }
    }

  </style>
  