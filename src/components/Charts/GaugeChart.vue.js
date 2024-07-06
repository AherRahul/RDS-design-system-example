export default (await import('vue')).defineComponent({
    name: 'GaugeChart',
    data() {
        return {
            value: 79,
            target: 85,
            variant: 'dark',
            size: 250,
            subtitle: 'Targeted Sell'
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
    const __VLS_0 = {}.RdsGaugeChart;
    ({}.RdsGaugeChart);
    ({}.RdsGaugeChart);
    __VLS_components.RdsGaugeChart;
    __VLS_components.rdsGaugeChart;
    __VLS_components.RdsGaugeChart;
    __VLS_components.rdsGaugeChart;
    // @ts-ignore
    [RdsGaugeChart, RdsGaugeChart,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ variant: ((__VLS_ctx.variant)), size: ((__VLS_ctx.size)), value: ((__VLS_ctx.value)), target: ((__VLS_ctx.target)), subtitle: ((__VLS_ctx.subtitle)), }));
    const __VLS_2 = __VLS_1({ variant: ((__VLS_ctx.variant)), size: ((__VLS_ctx.size)), value: ((__VLS_ctx.value)), target: ((__VLS_ctx.target)), subtitle: ((__VLS_ctx.subtitle)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ variant: ((__VLS_ctx.variant)), size: ((__VLS_ctx.size)), value: ((__VLS_ctx.value)), target: ((__VLS_ctx.target)), subtitle: ((__VLS_ctx.subtitle)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).popover;
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        // @ts-ignore
        [variant, size, value, target, subtitle,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'GaugeChart';
    const __VLS_internalComponent = (await import('./GaugeChart.vue')).default;
}
//# sourceMappingURL=GaugeChart.vue.js.map