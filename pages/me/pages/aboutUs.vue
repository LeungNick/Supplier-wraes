<template>
	<view class="aboutUs-wrap">
		<view class="aboutUs-top">
			<view>特惠</view>
			<view>特惠采购</view>
		</view>
		<uni-list>
			<uni-list-item title="合作服务协议"></uni-list-item>
			<uni-list-item title="平台证照"></uni-list-item>
			<uni-list-item title="关于人人采"></uni-list-item>
			<uni-list-item title="用户协议"></uni-list-item>
			<uni-list-item title="新手操作指引"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
</script>

<style>
	.aboutUs-top{
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		font-size: 28rpx;
		flex-wrap: wrap;
		align-content: flex-start;
		align-items: center;
		border-bottom: 20rpx solid #F1F1F1;
		padding-top: 80rpx;
		padding-bottom: 80rpx;
		box-sizing: border-box;
	}
	.aboutUs-top view:nth-child(1){
		width: 160rpx;
		height: 160rpx;
		border-radius: 160rpx;
		text-align: center;
		line-height: 160rpx;
		background: #FF465C;
		font-size: 40rpx;
		color: #fff;
	}
	.aboutUs-top view:nth-child(2){
		width: 100%;
		text-align: center;
		margin-top: 20rpx;
	}
</style>
