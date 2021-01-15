<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<my-menu :collapsed="menucoll"></my-menu>
		<a-layout>
			<MyHeader :collapsed="menucoll" v-on:changemenu="showMenu"></MyHeader>
			<a-layout-content class="layout-content">
				<template v-if="routerList.length > 1">
					<a-breadcrumb>
						<a-breadcrumb-item v-for="(item, i) in routerList" :key="i">
							<router-link :to="item.path">{{item.name}}</router-link>
						</a-breadcrumb-item>
					</a-breadcrumb>
				</template>
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive" />
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive" />
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts">
import { Component, Vue, Watch, Provide } from 'vue-property-decorator';
import MyHeader from '../components/MyHeader.vue';

@Component({
	components: {
		MyHeader
	}
})
export default class Layout extends Vue {
	@Provide() menucoll: boolean = false
	@Provide() routerList: Array<object> = []

	showMenu (v: boolean): void {
		this.menucoll = v
	}

	toPage (v: string): void {
		this.$router.push({
			path: '/login'
		})
	}
	created () {
		this.routerList = this.$route.meta.routeList
	}

	@Watch('$route')
	get$route (form: any, to: any): void {
		this.routerList = this.$route.meta.routeList
	}
}
</script>
<style lang="scss">
#components-layout-demo-custom-trigger{
	height: 100%;
	overflow: hidden;
	.ant-layout{
		height: 100%;
		position: relative;
		.ant-layout-content{
			height: 100%;
			padding-top: 64px;
		}
	}
	.trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}
	.trigger:hover {
		color: #1890ff;
	}
}
</style>
