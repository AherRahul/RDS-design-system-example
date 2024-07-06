export default (await import('vue')).defineComponent({
    name: 'BarChart',
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
                        },
                        {
                            "label": "Pending",
                            "data": [
                                200,
                                180,
                                250,
                                190,
                                280
                            ],
                            "name": "Echocardiogram"
                        },
                        {
                            "label": "Unrealized",
                            "data": [
                                38,
                                84,
                                120,
                                90,
                                185
                            ],
                            "name": "Echocardiogram"
                        }
                    ]
                },
                {
                    "name": "X-ray",
                    "datasets": [
                        {
                            "label": "Accomplished",
                            "data": [
                                120,
                                220,
                                180,
                                320,
                                150
                            ],
                            "name": "X-ray"
                        },
                        {
                            "label": "Pending",
                            "data": [
                                98,
                                145,
                                160,
                                190,
                                175
                            ],
                            "name": "X-ray"
                        },
                        {
                            "label": "Unrealized",
                            "data": [
                                49,
                                84,
                                120,
                                78,
                                130
                            ],
                            "name": "X-ray"
                        }
                    ]
                },
                {
                    "name": "Tomography",
                    "datasets": [
                        {
                            "label": "Accomplished",
                            "data": [
                                55,
                                40,
                                33,
                                90,
                                120
                            ],
                            "name": "Tomography"
                        },
                        {
                            "label": "Pending",
                            "data": [
                                25,
                                30,
                                90,
                                45,
                                20
                            ],
                            "name": "Tomography"
                        },
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
    const __VLS_0 = {}.RdsBarChart;
    ({}.RdsBarChart);
    __VLS_components.RdsBarChart;
    __VLS_components.rdsBarChart;
    // @ts-ignore
    [RdsBarChart,];
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
    const __VLS_name = 'BarChart';
    const __VLS_internalComponent = (await import('./BarChart.vue')).default;
}
//# sourceMappingURL=BarChart.vue.js.map