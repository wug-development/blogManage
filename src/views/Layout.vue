<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<MyMenu :collapsed="menucoll"></MyMenu>
		<a-layout>
			<MyHeader :collapsed="menucoll" v-on:changemenu="showMenu"></MyHeader>
			<a-layout-content class="layout-content">
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive" />
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive" />
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyHeader from '../components/MyHeader.vue';
import MyMenu from '../components/MyMenu.vue';

@Component({
	components: {
		MyHeader,
		MyMenu
	}
})
export default class Layout extends Vue {
	menucoll = false

	showMenu (v: boolean): void {
		this.menucoll = v
	}
}
</script>
<style lang="scss">
#components-layout-demo-custom-trigger{
	height: 100%;
	overflow: hidden;
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
	.layout-content{
		margin: '24px 16px';
		padding: '24px';
		background: '#fff';
		min-height: '280px';
	}
}
</style>
