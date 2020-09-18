<template>
	<view class="free-wrap">
		<swipercom :autoplay="false"></swipercom>
		<view class="free-cont">
			<view class="free-cont-title">
				<text>免费商品</text><text>分享好友，得免费名额</text>
			</view>
			<free-goods></free-goods>
		</view>
		<view class="dx">----我是有底线的----</view>
	</view>
</template>

<script>
	import swipercom from "@/pages/index/components/swiper.vue";
	import freeGoods from "./components/freeGoods.vue";
	export default {
		components:{
			swipercom,
			freeGoods
		}
	}
</script>

<style scoped>
	.free-wrap{
		background: #F1F1F1;
	}
	.swiper{
		border-radius: 0;
		overflow: hidden;
		height: 340rpx;
	}
	.swiper image {
		width: 100%;
		height: 100%;
	}
	.free-cont{
		width: 94%;
		margin-left: 3%;
		border-radius: 10rpx;
		margin-top: 20rpx;
		background-color: #fff;
	}
	.free-cont-title{
		height: 80rpx;
		line-height: 80rpx;
		box-sizing: border-box;
		padding: 0rpx 20rpx;
	}
	.free-cont-title text:nth-child(1){
		font-size: 30rpx;
		font-weight: bold;
		margin-right: 20rpx;
	}
	.free-cont-title text:nth-child(2){
		font-size: 24rpx;
	}
	.dx{
		padding-bottom: 20rpx;
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #909399;
		text-align: center;
	}
</style>
