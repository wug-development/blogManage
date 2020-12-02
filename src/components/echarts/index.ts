import Echarts from './Echarts.vue'

const MyEchart = {
    install: (Vue: any) => {
        Vue.components('my-echart', Echarts)
    }
}

export default MyEchart