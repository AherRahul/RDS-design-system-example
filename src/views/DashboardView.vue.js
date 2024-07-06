import BarChart from '../components/Charts/BarChart.vue';
import DonutChart1 from '../components/Charts/DonutChart1.vue';
import DonutChart2 from '../components/Charts/DonutChart2.vue';
import GaugeChart from '../components/Charts/GaugeChart.vue';
import LineChart from '../components/Charts/LineChart.vue';
import PieChart from '../components/Charts/PieChart.vue';
import StackedBarChart from '../components/Charts/StackedBarChart.vue';
import PolarAreaChart from '../components/Charts/PolarAreaChart.vue';
import RadialBarChart from '../components/Charts/RadialBarChart.vue';
export default (await import('vue')).defineComponent({
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
        return {};
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dashboard") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-fluid") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dashboard-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dashboard-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dashboard-main") }, });
    const __VLS_0 = {}.RdsGrid;
    ({}.RdsGrid);
    ({}.RdsGrid);
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    // @ts-ignore
    [RdsGrid, RdsGrid,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_6 = {}.RdsRow;
    ({}.RdsRow);
    ({}.RdsRow);
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    // @ts-ignore
    [RdsRow, RdsRow,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_12 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ cols: ("8"), offset: ("0"), }));
    const __VLS_14 = __VLS_13({ cols: ("8"), offset: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ cols: ("8"), offset: ("0"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ style: ({}) }, });
    const __VLS_18 = {}.BarChart;
    ({}.BarChart);
    __VLS_components.BarChart;
    __VLS_components.barChart;
    // @ts-ignore
    [BarChart,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_24 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ vertical: ((true)), }));
    const __VLS_26 = __VLS_25({ vertical: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ vertical: ((true)), }));
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ cols: ("4"), }));
    const __VLS_32 = __VLS_31({ cols: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ cols: ("4"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ style: ({}) }, });
    const __VLS_36 = {}.GaugeChart;
    ({}.GaugeChart);
    __VLS_components.GaugeChart;
    __VLS_components.gaugeChart;
    // @ts-ignore
    [GaugeChart,];
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_42 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ width: ((0)), ...{ style: ({}) }, }));
    const __VLS_44 = __VLS_43({ width: ((0)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ width: ((0)), ...{ style: ({}) }, }));
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    const __VLS_48 = {}.RdsGrid;
    ({}.RdsGrid);
    ({}.RdsGrid);
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    // @ts-ignore
    [RdsGrid, RdsGrid,];
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({}));
    const __VLS_54 = {}.RdsRow;
    ({}.RdsRow);
    ({}.RdsRow);
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    // @ts-ignore
    [RdsRow, RdsRow,];
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ style: ({}) }, }));
    const __VLS_56 = __VLS_55({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ ...{ style: ({}) }, }));
    const __VLS_60 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ cols: ("8"), offset: ("0"), }));
    const __VLS_62 = __VLS_61({ cols: ("8"), offset: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ cols: ("8"), offset: ("0"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ style: ({}) }, });
    const __VLS_66 = {}.LineChart;
    ({}.LineChart);
    __VLS_components.LineChart;
    __VLS_components.lineChart;
    // @ts-ignore
    [LineChart,];
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({}));
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    (__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    const __VLS_72 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ vertical: ((true)), }));
    const __VLS_74 = __VLS_73({ vertical: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ vertical: ((true)), }));
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    const __VLS_78 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ cols: ("4"), }));
    const __VLS_80 = __VLS_79({ cols: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ cols: ("4"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ style: ({}) }, });
    const __VLS_84 = {}.PieChart;
    ({}.PieChart);
    __VLS_components.PieChart;
    __VLS_components.pieChart;
    // @ts-ignore
    [PieChart,];
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({}));
    const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    (__VLS_83.slots).default;
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    (__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    const __VLS_90 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ width: ((0)), ...{ style: ({}) }, }));
    const __VLS_92 = __VLS_91({ width: ((0)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    ({}({ width: ((0)), ...{ style: ({}) }, }));
    const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
    const __VLS_96 = {}.RdsGrid;
    ({}.RdsGrid);
    ({}.RdsGrid);
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    // @ts-ignore
    [RdsGrid, RdsGrid,];
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
    const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    ({}({}));
    const __VLS_102 = {}.RdsRow;
    ({}.RdsRow);
    ({}.RdsRow);
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    // @ts-ignore
    [RdsRow, RdsRow,];
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{ style: ({}) }, }));
    const __VLS_104 = __VLS_103({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    ({}({ ...{ style: ({}) }, }));
    const __VLS_108 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ cols: ("8"), offset: ("0"), }));
    const __VLS_110 = __VLS_109({ cols: ("8"), offset: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    ({}({ cols: ("8"), offset: ("0"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ style: ({}) }, });
    const __VLS_114 = {}.StackedBarChart;
    ({}.StackedBarChart);
    __VLS_components.StackedBarChart;
    __VLS_components.stackedBarChart;
    // @ts-ignore
    [StackedBarChart,];
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
    const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
    ({}({}));
    const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
    (__VLS_113.slots).default;
    const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
    const __VLS_120 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ vertical: ((true)), }));
    const __VLS_122 = __VLS_121({ vertical: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    ({}({ vertical: ((true)), }));
    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
    const __VLS_126 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ cols: ("4"), }));
    const __VLS_128 = __VLS_127({ cols: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    ({}({ cols: ("4"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ style: ({}) }, });
    const __VLS_132 = {}.PolarAreaChart;
    ({}.PolarAreaChart);
    __VLS_components.PolarAreaChart;
    __VLS_components.polarAreaChart;
    // @ts-ignore
    [PolarAreaChart,];
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
    const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
    ({}({}));
    const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
    (__VLS_131.slots).default;
    const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
    (__VLS_107.slots).default;
    const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
    (__VLS_101.slots).default;
    const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    const __VLS_138 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ width: ((0)), ...{ style: ({}) }, }));
    const __VLS_140 = __VLS_139({ width: ((0)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    ({}({ width: ((0)), ...{ style: ({}) }, }));
    const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
    const __VLS_144 = {}.RdsGrid;
    ({}.RdsGrid);
    ({}.RdsGrid);
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    __VLS_components.RdsGrid;
    __VLS_components.rdsGrid;
    // @ts-ignore
    [RdsGrid, RdsGrid,];
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{ class: ("mt(10)") }, ...{ style: ({}) }, }));
    const __VLS_146 = __VLS_145({ ...{ class: ("mt(10)") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    ({}({ ...{ class: ("mt(10)") }, ...{ style: ({}) }, }));
    const __VLS_150 = {}.RdsRow;
    ({}.RdsRow);
    ({}.RdsRow);
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    __VLS_components.RdsRow;
    __VLS_components.rdsRow;
    // @ts-ignore
    [RdsRow, RdsRow,];
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({}));
    const __VLS_152 = __VLS_151({}, ...__VLS_functionalComponentArgsRest(__VLS_151));
    ({}({}));
    const __VLS_156 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ cols: ("4"), }));
    const __VLS_158 = __VLS_157({ cols: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    ({}({ cols: ("4"), }));
    const __VLS_162 = {}.DonutChart1;
    ({}.DonutChart1);
    __VLS_components.DonutChart1;
    __VLS_components.donutChart1;
    // @ts-ignore
    [DonutChart1,];
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({}));
    const __VLS_164 = __VLS_163({}, ...__VLS_functionalComponentArgsRest(__VLS_163));
    ({}({}));
    const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164);
    (__VLS_161.slots).default;
    const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
    const __VLS_168 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ vertical: ((true)), }));
    const __VLS_170 = __VLS_169({ vertical: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
    ({}({ vertical: ((true)), }));
    const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
    const __VLS_174 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ cols: ("4"), }));
    const __VLS_176 = __VLS_175({ cols: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
    ({}({ cols: ("4"), }));
    const __VLS_180 = {}.DonutChart2;
    ({}.DonutChart2);
    __VLS_components.DonutChart2;
    __VLS_components.donutChart2;
    // @ts-ignore
    [DonutChart2,];
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({}));
    const __VLS_182 = __VLS_181({}, ...__VLS_functionalComponentArgsRest(__VLS_181));
    ({}({}));
    const __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
    (__VLS_179.slots).default;
    const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176);
    const __VLS_186 = {}.RdsDivider;
    ({}.RdsDivider);
    __VLS_components.RdsDivider;
    __VLS_components.rdsDivider;
    // @ts-ignore
    [RdsDivider,];
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ vertical: ((true)), }));
    const __VLS_188 = __VLS_187({ vertical: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    ({}({ vertical: ((true)), }));
    const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188);
    const __VLS_192 = {}.RdsCol;
    ({}.RdsCol);
    ({}.RdsCol);
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    __VLS_components.RdsCol;
    __VLS_components.rdsCol;
    // @ts-ignore
    [RdsCol, RdsCol,];
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ cols: ("4"), }));
    const __VLS_194 = __VLS_193({ cols: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    ({}({ cols: ("4"), }));
    const __VLS_198 = {}.RadialBarChart;
    ({}.RadialBarChart);
    __VLS_components.RadialBarChart;
    __VLS_components.radialBarChart;
    // @ts-ignore
    [RadialBarChart,];
    const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({}));
    const __VLS_200 = __VLS_199({}, ...__VLS_functionalComponentArgsRest(__VLS_199));
    ({}({}));
    const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200);
    (__VLS_197.slots).default;
    const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194);
    (__VLS_155.slots).default;
    const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
    (__VLS_149.slots).default;
    const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dashboard'];
        __VLS_styleScopedClasses['container-fluid'];
        __VLS_styleScopedClasses['dashboard-header'];
        __VLS_styleScopedClasses['dashboard-content'];
        __VLS_styleScopedClasses['dashboard-main'];
        __VLS_styleScopedClasses['mt(10)'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        BarChart,
        DonutChart1,
        DonutChart2,
        GaugeChart,
        LineChart,
        PieChart,
        StackedBarChart,
        PolarAreaChart,
        RadialBarChart
    };
    const __VLS_name = 'Dashboard';
    const __VLS_internalComponent = (await import('./DashboardView.vue')).default;
}
//# sourceMappingURL=DashboardView.vue.js.map