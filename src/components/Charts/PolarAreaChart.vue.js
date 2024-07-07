export default (await import('vue')).defineComponent({
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
            isVisiblePointNames: false,
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
    const __VLS_0 = {}.RdsPolarAreaChart;
    ({}.RdsPolarAreaChart);
    __VLS_components.RdsPolarAreaChart;
    __VLS_components.rdsPolarAreaChart;
    // @ts-ignore
    [RdsPolarAreaChart,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), isVisiblePointNames: ((__VLS_ctx.isVisiblePointNames)), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), isVisiblePointNames: ((__VLS_ctx.isVisiblePointNames)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ data: ((__VLS_ctx.chartData)), variant: ((__VLS_ctx.variant)), labels: ((__VLS_ctx.chartLabels)), isVisiblePointNames: ((__VLS_ctx.isVisiblePointNames)), }));
    // @ts-ignore
    [chartData, variant, chartLabels, isVisiblePointNames,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'PolarAreaChart';
    const __VLS_internalComponent = (await import('./PolarAreaChart.vue')).default;
}
//# sourceMappingURL=PolarAreaChart.vue.js.map