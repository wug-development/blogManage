<template>
    <div class="echarts-box">
        <div ref="mychart" class="echarts-mychart" id="echart">2</div>
    </div>
</template>

<script lang="ts">
let echarts = require('echarts/lib/echarts');
let bar = require('echarts/lib/chart/bar');
let dataZoom = require('echarts/lib/component/dataZoom')
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

import { Component, Vue } from "vue-property-decorator";

@Component
export default class Echarts extends Vue {
    data() {
        return {
        }
    }

    mounted() {
        setTimeout(() => {
            initEchart(this.$refs.mychart)
        }, 1000)
    }

    created() {
    }
}

function initEchart (el: any) {
    let myc = echarts.init(el)
    let dataAxis: any = [];
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let dataShadow: any = [];
    let yMax = 500;
    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }
    let m = (new Date()).getMonth() + 1
    for (let i = 0; i < 12; i++) {
        let _m = m > i ? m - i : m - i + 12
        dataAxis.push((_m || 12) + '月')
    }
    let options = {
        title: {
            text: '特性示例：渐变色 阴影 点击缩放',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
            data: dataAxis.reverse(),
            type: 'category',
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#666'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 20
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#666'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    color: 'rgba(0,0,0,0.05)'
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data
            }
        ]
    };
    myc.setOption(options)
}
</script>

<style lang="scss" scoped>
.echarts-box{
    height: 100%;
    .echarts-mychart{
        width: 100%;
        height: 100%;
    }
}
</style>