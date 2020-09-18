<template>
	<view class="view-text-wrap">
		<view class="view-text-title">
			<view class="view-text">南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔</view>
			<view class="view-like">
				<text class="iconfont icon-shoucang"></text>
				<view class="view-text-like">收藏</view>
			</view>
		</view>
		<view class="view-text-title-2">护肤美颜 | 补充水分 | 保持干爽</view>
		<view class="view-text-prize">
			<text>批发价</text>
			<text>￥0.70</text>
			<text>进货就来特惠采购</text>
		</view>
		<view class="view-text-prize-2">
			<text>零售价：￥7.90</text>
			<text>热销：10000件</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.view-text-wrap{
		padding: 20rpx 30rpx;
		padding-bottom: 40rpx;
		box-sizing: border-box;
		border-bottom: 14rpx solid #F1F1F1;
	}
	.view-text-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
	}
	.view-text{
		flex: 1;
		box-sizing: border-box;
		margin-right: 40rpx;
		line-height: 40rpx;
	}
	.view-like{
		width: 80rpx;
		text-align: center;
		color: #FF465C;
		font-size: 24rpx;
	}
	.view-text-title-2{
		font-size: 24rpx;
		color: #FF465C;
		margin-top: 10rpx;
	}
	.view-text-prize{
		margin-top: 40rpx;
		font-size: 24rpx;
		display: flex;
		align-items: center;
	}
	.view-text-prize text:nth-child(2){
		font-size: 36rpx;
		color: #FF465C;
	}
	.view-text-prize text:nth-child(3){
		color: #FFFFFF;
		background: linear-gradient(90deg,#FF465C 0%, #ff940e 100%);
		border-radius: 10rpx;
		padding: 6rpx 10rpx;
		margin-left: 20rpx;
	}
	.view-text-prize-2{
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #AAAAAA
	}
</style>
