<template>
	<view class="my-shop-wrap">
		<my-shop-top></my-shop-top>
		<my-shop-order></my-shop-order>
		<my-shop-svr></my-shop-svr>
	</view>
</template>

<script>
	import myShopTop from '@/pages/myshop/components/myshopTop.vue'
	import myShopOrder from '@/pages/me/components/myhomeOrder.vue'
	import myShopSvr from '@/pages/me/components/myhomeSvr.vue'
	export default {
		components:{
			myShopTop,
			myShopOrder,
			myShopSvr
		}
	}
</script>

<style scoped>
	.my-shop-wrap{
		background: #F1F1F1;
	}
</style>
