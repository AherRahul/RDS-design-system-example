<template>
    <div>
        <rds-gauge-chart
            :variant="variant"
            :value="value"
            :size="size"
            :target="target"
            :subtitle="subtitle"
        >
            <template #popover>
                <p style="margin: 0;"><strong>In attendance:</strong> 280</p>
                <p style="margin: 0;"><strong>Pending:</strong> 60</p>
                <p style="margin: 0;"><strong>In follow-up:</strong> 600</p>
            </template>
        </rds-gauge-chart>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GaugeChart',
    data() {
        return {
            value: 79,
            target: 85,
            variant: 'green',
            size: 200,
            subtitle: 'Targeted Sell' 
        }
    },
    mounted () {}
  }
  </script>
  
  <style>
  </style>
  