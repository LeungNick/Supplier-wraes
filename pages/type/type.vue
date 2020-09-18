<template>
	<view class="type-wrap">
		<view class="type-search">
			<search-cpn></search-cpn>
		</view>
		<select-cpn></select-cpn>
		<goods-cpn></goods-cpn>
	</view>
	
</template>

<script>
	import searchCpn from "@/vue-components/searchCpn.vue";
	import selectCpn from './components/selectCPN.vue';
	import goodsCpn from './components/goodsCPN.vue';
	export default {
		data () {
			return {
				
			}
		},
		components:{
			selectCpn,
			searchCpn,
			goodsCpn
		}
	}
</script>

<style>
	.search-wrap{
		padding-top: 20rpx;
		position: fixed;
		overflow: hidden;
		background: #fff;
		width: 90%;
		padding-left: 5%;
		padding-right: 5%;
		z-index: 99;
		background: #fff;
	}
</style>
