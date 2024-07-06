export default (await import('vue')).defineComponent({
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
            borderDash: [5, 5],
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
        };
    },
    mounted() { }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.RdsLineChart;
    ({}.RdsLineChart);
    __VLS_components.RdsLineChart;
    __VLS_components.rdsLineChart;
    // @ts-ignore
    [RdsLineChart,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), fill: ((true)), isDashed: ((true)), borderDash: ((__VLS_ctx.borderDash)), xAxisRange: ((__VLS_ctx.xAxisRange)), yAxisRange: ((__VLS_ctx.yAxisRange)), smoothing: ((__VLS_ctx.smoothing)), scales: ((__VLS_ctx.scales)), barWidth: ((__VLS_ctx.barWidth)), showLabelName: ((__VLS_ctx.showLabelName)), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), fill: ((true)), isDashed: ((true)), borderDash: ((__VLS_ctx.borderDash)), xAxisRange: ((__VLS_ctx.xAxisRange)), yAxisRange: ((__VLS_ctx.yAxisRange)), smoothing: ((__VLS_ctx.smoothing)), scales: ((__VLS_ctx.scales)), barWidth: ((__VLS_ctx.barWidth)), showLabelName: ((__VLS_ctx.showLabelName)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), fill: ((true)), isDashed: ((true)), borderDash: ((__VLS_ctx.borderDash)), xAxisRange: ((__VLS_ctx.xAxisRange)), yAxisRange: ((__VLS_ctx.yAxisRange)), smoothing: ((__VLS_ctx.smoothing)), scales: ((__VLS_ctx.scales)), barWidth: ((__VLS_ctx.barWidth)), showLabelName: ((__VLS_ctx.showLabelName)), }));
    // @ts-ignore
    [chartData, variant, chartLabels, borderDash, xAxisRange, yAxisRange, smoothing, scales, barWidth, showLabelName,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'LineChart';
    const __VLS_internalComponent = (await import('./LineChart.vue')).default;
}
//# sourceMappingURL=LineChart.vue.js.map