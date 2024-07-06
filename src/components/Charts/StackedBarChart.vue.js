export default (await import('vue')).defineComponent({
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
    const __VLS_0 = {}.RdsStackedBarChart;
    ({}.RdsStackedBarChart);
    __VLS_components.RdsStackedBarChart;
    __VLS_components.rdsStackedBarChart;
    // @ts-ignore
    [RdsStackedBarChart,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), barWidth: ((__VLS_ctx.barWidth)), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), barWidth: ((__VLS_ctx.barWidth)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), barWidth: ((__VLS_ctx.barWidth)), }));
    // @ts-ignore
    [chartData, variant, chartLabels, barWidth,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'StackedBarChart';
    const __VLS_internalComponent = (await import('./StackedBarChart.vue')).default;
}
//# sourceMappingURL=StackedBarChart.vue.js.map