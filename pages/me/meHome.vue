<template>
	<view class="mehome">
		<mehome-header></mehome-header>
		<my-ad class="myhome-order"></my-ad>
		<myhome-order ></myhome-order>
		<myhome-srv></myhome-srv>
		<my-shop></my-shop>
		<myhome-other></myhome-other>
	</view>
</template>

<script>
	import mehomeHeader from './components/myhomeHeader.vue'
	import myhomeOrder from './components/myhomeOrder.vue'
	import myhomeOther from './components/myhomeOther.vue'
	import myhomeSrv from './components/myhomeSvr.vue'
	import myShop from './components/myshop.vue'
	import myAd from './components/myad.vue'
	export default {
		data () {
			return {
				list:'我的页面'
			}
		},
		components:{
			mehomeHeader,
			myhomeOrder,
			myhomeOther,
			myhomeSrv,
			myShop,
			myAd
		}
	}
</script>

<style>
	.mehome{
		background: #F1F1F1;;
	}
	/* #ifdef MP-WEIXIN */
		.myad-wrap{
			margin-top: -80rpx;
		}
	/* #endif */
	/* #ifdef H5 */
	.myhome-order{
		margin-top: -80rpx;
	}
	/* #endif */
</style>
