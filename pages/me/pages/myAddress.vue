<template>
	<view class="myaddress-wrap">
		<view class="myaddress">
			<view class="myaddress-left">
				<view class="myaddress-left-tx">
					<text>采购</text>
				</view>
				<view class="myaddress-left-cnt">
					<view class="">
						<text>尼克靓</text>
						<text>13711735300</text>
					</view>
					<view class="">
						广州市天河区龙洞广东工业大学1057号
					</view>
				</view>
			</view>
			<view class="myaddress-right">编辑</view>
		</view>
		<view class="myaddress">
			<view class="myaddress-left">
				<view class="myaddress-left-tx">
					<text>采购</text>
				</view>
				<view class="myaddress-left-cnt">
					<view class="">
						<text>尼克靓</text>
						<text>13711735300</text>
					</view>
					<view class="">
						广州市天河区龙洞广东工业大学1057号
					</view>
				</view>
			</view>
			<view class="myaddress-right">编辑</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.myaddress-wrap{
		margin-top: -100rpx;
	}
	.myaddress-wrap{
		background: #F1F1F1;
	}
	.myaddress{
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fff;
		width: 94%;
		margin-left: 3%;
		margin-top: 20rpx;
		font-size: 24rpx;
		padding: 20rpx 20rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
	}
	.myaddress-left{
		flex: 1;
		display: flex;
		border-radius: 10rpx;
		align-items: center;
		justify-content: flex-start;
		border-right: 1px solid #F1F1F1;
	}
	.myaddress-right{
		width: 120rpx;
		text-align: center;
		font-size: 28rpx;
	}
	.myaddress-left-tx{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		font-size: 24rpx;
		background: #FF465C;
		margin-right: 20rpx;
	}
	.myaddress-left-cnt view:nth-child(1){
		margin-bottom: 15rpx;
	}
</style>
