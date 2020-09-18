<template>
	<view class="mehomeOrder-wrap">
		<view class="mehomeOrder-top">
			<text>我的小店</text>
			<view class="mehomeOrder-all">
				<text>进店</text>
				<text class="iconfont icon-xiangyoujiantou"></text>
			</view>
		</view>
		<view class="mehomeOrder-list">
			<view class="mehomeOrder-lm">
				<view class="iconfont icon-RectangleCopy21"></view>
				<view class="mehomeOrder-list-text">收益管理</view>
			</view>
			<view class="mehomeOrder-lm">
				<view class="iconfont icon-RectangleCopy27"></view>
				<view class="mehomeOrder-list-text">商品管理</view>
			</view>
			<view class="mehomeOrder-lm">
				<view class="iconfont icon-RectangleCopy8"></view>
				<view class="mehomeOrder-list-text">客服订单</view>
			</view>
			<view class="mehomeOrder-lm">
				<view class="iconfont icon-RectangleCopy7"></view>
				<view class="mehomeOrder-list-text">经营分析</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				order:'xxx'
			}
		}
	}
</script>

<style scoped>
	.mehomeOrder-wrap{
		background: #FFF;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx 20rpx;
		width: 94%;
		margin-left: 3%;
		margin-bottom: 20rpx;
	}
	.mehomeOrder-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		color: #646566;
		margin-bottom: 20rpx;
	}
	.mehomeOrder-list{
		display: flex;
		justify-content: space-evenly;
	}
	.mehomeOrder-lm{
		text-align: center;
		font-size: 24rpx;
		color: #646566#;
		padding: 10rpx 10rpx;
		width: 120rpx;
		text-align: center;
	}
	.icon-RectangleCopy21,.icon-RectangleCopy27,.icon-RectangleCopy8,.icon-RectangleCopy7{
		font-size: 60rpx;
	}
	.icon-pingjia{
		padding-top: 10rpx;
		font-size: 44rpx;
		margin-bottom: 10rpx;
	}
	.icon-xiangyoujiantou{
		font-size: 20rpx;
	}
</style>
