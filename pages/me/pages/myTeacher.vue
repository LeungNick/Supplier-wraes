<template>
	<view class="my-teacher-wrap">
		<image src="../../../static/image/ts.jpg" style="width: 20%;" mode="widthFix"></image>
		<view class="my-teacher-name">艺宇</view>
		<view class="my-teacher-title">
			<text>采货商</text>
			<text>招商专员</text>
		</view>
		<view>联系导师</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.my-teacher-wrap{
		width: 94%;
		border-radius: 10rpx;
		margin-left: 3%;
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 28rpx;
		 box-shadow: 1rpx 1rpx 10px #F1F1F1;
		 padding: 0 40rpx;
		 box-sizing: border-box;
	}
	.my-teacher-wrap view {
		width: 100%;
		text-align: center;
		margin-top: 20rpx;
	}
	.my-teacher-name{
		font-weight: bold;
	}
	.my-teacher-wrap :nth-child(4){
		text-align: left;
		border-top: 1rpx solid #F1F1F1;
		border-bottom: 1rpx solid #F1F1F1;
		box-sizing: border-box;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
	}
	.my-teacher-title text{
		background: #FF465C;
		text-align: center;
		border-radius: 20rpx;
		width: 120rpx;
		display: inline-block;
		color: #FFFFFF;
		font-size: 24rpx;
		margin-right: 10rpx;
	}
</style>
