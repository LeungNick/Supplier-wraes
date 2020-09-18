<template>
	<view class="businessShop-wrap">
		<view-shop :shopStatus = "shopStatus"></view-shop>
		<good-cpn></good-cpn>
	</view>
</template>

<script>
	import viewShop from '@/pages/view/components/viewShop.vue'
	import goodCpn from '@/pages/index/components/goosCpn.vue'
	export default{
		data () {
			return {
				shopStatus:false
			}
		},
		components:{
			viewShop,
			goodCpn
		}
	}
</script>

<style>
</style>
