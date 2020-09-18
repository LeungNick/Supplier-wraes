<template>
	<view class="view-repeat-wrap" @click="gotoforword">
		<view class="view-repeat-title">
			<text>素材转发</text>
			<view class="view-repeat-more">
				更多
				<text class="iconfont icon-xiangyoujiantou"></text>
			</view>
		</view>
		<view class="view-repeat-img">
			<image src="../../../static/image/pro.jpg" mode=""></image>
			<image src="../../../static/image/pro.jpg" mode=""></image>
			<image src="../../../static/image/pro.jpg" mode=""></image>
		</view>
		<view class="view-repeat">立即转发</view>
	</view>
</template>

<script>
	export default{
		methods:{
			gotoforword () {
				uni.navigateTo({
					url:"/pages/view/page/forword"
				})
			}
		}
	}
</script>

<style>
	.view-repeat-wrap{
		padding: 20rpx 30rpx;
		padding-bottom: 40rpx;
		box-sizing: border-box;
		border-bottom: 14rpx solid #F1F1F1;
	}
	.view-repeat-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
	}
	.view-repeat-more{
		font-size: 24rpx;
	}
	.view-repeat-img{
		display: flex;
		justify-content: space-evenly;
		height: 200rpx;
		margin-top: 20rpx;
	}
	.view-repeat-img image{
		width: 200rpx;
		height: 200rpx;
	}
	.view-repeat{
		color: #FF465C;
		margin-top: 20rpx;
		font-size: 28rpx;
		border: 1rpx solid #FF465C;
		width: 30%;
		text-align: center;
		padding: 10rpx;
		margin-left: 35%;
		border-radius: 100rpx;
	}
</style>
