<template>
    <div class="dashboard">
        <div class="container-fluid">
            <div class="dashboard-header">
                <rds-row>
                    <div class="header-content">
                        <h1>RDS - Chart's</h1>
                        <p>
                            The charts page in our design system showcases a variety of chart components 
                            built with Vue.js and documented using Storybook. These components are designed 
                            to provide robust, customizable, and responsive data visualization solutions 
                            for your applications. 
                        </p>

                        <p>
                            Explore the different chart components and their configurations to find the best 
                            fit for your data visualization needs. Each component is accompanied by comprehensive
                             documentation and examples to help you get started quickly and efficiently.
                        </p>
                    </div>
                </rds-row>
                <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />
            </div>
            <div class="dashboard-content">
                <div class="dashboard-main">
                    <rds-grid>
                        <rds-row>
                            <rds-col cols="8" offset="0" colsAtS="12" colsAtM="12" colsAtL="8" colsAtXl="8">
                                <h3 style="text-align: center;"> Bar chart</h3>
                                <p>
                                    The BarChart Component page in our design system features an essential UI element 
                                    designed to visually represent data through bar charts. This Vue.js component offers 
                                    a clear and effective way to display quantitative information, making data analysis 
                                    more accessible. Comprehensive documentation in Storybook provides detailed guidance 
                                    for implementation and customization, ensuring the BarChart component can be tailored 
                                    to fit your specific requirements.
                                </p>
                                <bar-chart />
                            </rds-col>
                            
                            <rds-divider :vertical="true" />

                            <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                                <h3 style="text-align: center;">Gauge chart</h3>
                                <p>
                                    The Gauge Chart Component page in our design system features a dynamic UI element for 
                                    visualizing metrics with a gauge or dial. This Vue.js component offers an intuitive 
                                    way to display performance indicators. 
                                </p>
                                <gauge-chart style="padding-top: 2rem;" />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <rds-row style="margin-top: 3%;">
                            <rds-col cols="8" offset="0"  colsAtS="12" colsAtM="12" colsAtL="8" colsAtXl="8">
                                <h3 style="text-align: center;"> Line chart</h3>
                                <p>
                                    The Line Chart Component page in our design system showcases a versatile UI element for 
                                    visualizing data trends with clarity. This Vue.js component offers an effective way to 
                                    display temporal or sequential information. Comprehensive documentation in Storybook 
                                    provides detailed guidance for implementation and customization, ensuring the BarChart 
                                    component can be tailored to fit your specific requirements.
                                </p>
                                <line-chart />
                            </rds-col>

                            <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                                <h3 style="text-align: center;">Pie chart</h3>
                                <p>
                                    The Pie Chart Component page in our design system presents an essential UI element for 
                                    visualizing data distribution with clarity. This Vue.js component offers an intuitive 
                                    way to display proportions and percentages
                                </p>
                                <pie-chart />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <rds-row style="margin-top: 3%;">
                            <rds-col cols="8" offset="0" colsAtS="12" colsAtM="12" colsAtL="8" colsAtXl="8">
                                <h3 style="text-align: center;"> Stack Bar chart</h3>
                                <p>
                                    The Stack Bar Chart Component page in our design system features a powerful UI element 
                                    for visualizing hierarchical data in stacked bars. This Vue.js component offers an effective 
                                    way to display comparisons and compositions within datasets. Detailed Storybook documentation 
                                    provides comprehensive guidance for seamless implementation and customization, empowering you 
                                    to tailor the Stack Bar Chart to suit specific data visualization needs.
                                </p>
                                <stacked-bar-chart />
                            </rds-col>

                            <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                                <h3 style="text-align: center;">Polar chart</h3>
                                <p>
                                    The Polar Area Chart Component page in our design system showcases a versatile UI element for 
                                    visualizing data distribution in a circular format. This Vue.js component offers an intuitive 
                                    way to display relationships and proportions within datasets.
                                </p>
                                <polar-area-chart />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid class="mt(10)" style="margin-top: 3%;">
                        <rds-row>
                            <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                                <h3 style="text-align: center;"> Donut chart (Green Them)</h3>
                                <p>
                                    The Donut Chart Component page in our design system features a sleek UI element for displaying 
                                    data distribution in a circular format with a central hole. This Vue.js component offers a clear 
                                    and concise way to visualize proportions and relationships within datasets.
                                </p>
                                <donut-chart-1 />
                            </rds-col>

                            <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                                <h3 style="text-align: center;"> Donut chart (Blue Them)</h3>
                                <p>
                                    The Donut Chart Component page in our design system features a sleek UI element for displaying 
                                    data distribution in a circular format with a central hole. This Vue.js component offers a clear 
                                    and concise way to visualize proportions and relationships within datasets.
                                </p>
                                <donut-chart-2 />
                            </rds-col>
                            
                            <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" class="radial-chart-container">
                                <h3 style="text-align: center;"> Radial chart</h3>
                                <p>
                                    The Radial Bar Chart Component page in our design system showcases an innovative UI element for 
                                    visualizing data using concentric bars radiating from the center. This Vue.js component offers a 
                                    unique and dynamic way to represent quantitative information.
                                </p>
                                <radial-bar-chart v-if="showRadialChart" />
                                <div class="center-loader" v-else>
                                    <rds-spinner
                                        variant="green"
                                        size="lg"
                                    />
                                </div>
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

    // components
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

    // component data
    data() {
      return {
        showRadialChart: false,
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>

    @media (min-width: 1024px) {
        .dashboard {
            min-height: 100%;
            display: flex;
            align-items: center;
        }
    }
    
    .mt-3 {
        margin-top: 2%;
    }

    .mb-3 {
        margin-bottom: 2%;
    }

    .radial-chart-container {
        position: relative;
        height: 250px;
    }

    .center-loader {
        position: absolute;
        top: 110%;
        left: 45%;
    }
  </style>
  