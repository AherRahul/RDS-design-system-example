export default (await import('vue')).defineComponent({
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), labels: ((__VLS_ctx.chartLabels)), variant: ((__VLS_ctx.variant)), isVisiblePointNames: ((__VLS_ctx.isVisiblePointNames)), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), labels: ((__VLS_ctx.chartLabels)), variant: ((__VLS_ctx.variant)), isVisiblePointNames: ((__VLS_ctx.isVisiblePointNames)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ data: ((__VLS_ctx.chartData)), labels: ((__VLS_ctx.chartLabels)), variant: ((__VLS_ctx.variant)), isVisiblePointNames: ((__VLS_ctx.isVisiblePointNames)), }));
    // @ts-ignore
    [chartData, chartLabels, variant, isVisiblePointNames,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'RadialBarChart';
    const __VLS_internalComponent = (await import('./RadialBarChart.vue')).default;
}
//# sourceMappingURL=RadialBarChart.vue.js.map