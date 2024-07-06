export default (await import('vue')).defineComponent({
    name: 'DonutChart1',
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
                            "label": "Exams performed",
                            "data": [
                                120,
                                220,
                                180,
                                20,
                                150
                            ],
                            "name": "Echocardiogram"
                        }
                    ]
                }
            ],
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
    const __VLS_0 = {}.RdsDonutChart;
    ({}.RdsDonutChart);
    __VLS_components.RdsDonutChart;
    __VLS_components.rdsDonutChart;
    // @ts-ignore
    [RdsDonutChart,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), }));
    // @ts-ignore
    [chartData, variant, chartLabels,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'DonutChart1';
    const __VLS_internalComponent = (await import('./DonutChart1.vue')).default;
}
//# sourceMappingURL=DonutChart1.vue.js.map