<template>
	<view class="my-shop-top-wrap">
		<view class="my-shop-top-title">
			<view class="my-shop-top-name">
				<img src="../../../static/image/ts.jpg">
				<view>
					<view>我的旗舰店</view>
					<view>微信号：1213131</view>
				</view>
			</view>
			<text class="iconfont icon-fenxiang"></text>
		</view>
		<view class="my-shop-top-data">
			<view>
				<view>0</view>
				<view>今日营业额</view>
			</view>
			<view>
				<view>0</view>
				<view>今日访客</view>
			</view>
			<view>
				<view>0</view>
				<view>我的收入</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.my-shop-top-wrap{
		background: #FFFFFF;
		border-radius: 40rpx;
		width: 94%;
		margin-left: 3%;
		padding-bottom: 30rpx;
		margin-bottom: 20rpx;
	}
	.my-shop-top-title{
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		align-items: center;
		box-sizing: border-box;
		padding: 20rpx 40rpx;
	}
	.my-shop-top-name{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.my-shop-top-name img{
		width: 20%;
		border-radius: 50%;
		margin-right: 10rpx;
	}
	.my-shop-top-name view view:nth-child(1){
		font-size: 30rpx;
		font-weight: bold;
	}
	.my-shop-top-data{
		display: flex;
		justify-content: space-evenly;
		font-size: 24rpx;
	}
	.my-shop-top-data view{
		text-align: center;
	}
	.my-shop-top-data view view:nth-child(1){
		color: #FF465C;
		font-size: 42rpx;
		margin-bottom: 6rpx;
	}
</style>
