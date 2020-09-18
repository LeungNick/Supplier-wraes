<template>
	<view class="view-wrap">
		<view-swiper></view-swiper>
		<view-text></view-text>
		<view-repeat></view-repeat>
		<view-shop :shopStatus = "shopStatus"></view-shop>
		<view-detail></view-detail>
		<view-footlist></view-footlist>
	</view>
</template>

<script>
	import viewSwiper from '@/pages/view/components/viewSwiper.vue'
	import viewText from '@/pages/view/components/viewText.vue'
	import viewRepeat from '@/pages/view/components/viewRepeat.vue'
	import viewShop from '@/pages/view/components/viewShop.vue'
	import viewDetail from '@/pages/view/components/viewDetail.vue'
	import viewFootlist from '@/pages/view/components/viewFootlist.vue'
	export default{
		data () {
			return {
				list:'113331313',
				shopStatus:true
			}
		},
		components:{
			viewSwiper,
			viewText,
			viewRepeat,
			viewShop,
			viewDetail,
			viewFootlist
		}
	}
</script>

<style>
</style>
