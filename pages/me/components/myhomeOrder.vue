<template>
	<view class="mehomeOrder-wrap">
		<view class="mehomeOrder-top">
			<text>我的订单</text>
			<view class="mehomeOrder-all">
				<text>全部</text>
				<text class="iconfont icon-xiangyoujiantou"></text>
			</view>
		</view>
		<view class="mehomeOrder-list">
			<view class="mehomeOrder-lm" @click="gotoOrderPage(0)">
				<view class="iconfont icon-RectangleCopy20"></view>
				<view class="mehomeOrder-list-text">待付款</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoOrderPage(1)">
				<view class="iconfont icon-RectangleCopy31"></view>
				<view class="mehomeOrder-list-text">待发货</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoOrderPage(2)">
				<view class="iconfont icon-RectangleCopy18"></view>
				<view class="mehomeOrder-list-text">待收货</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoOrderAssess(3)">
				<view class="iconfont icon-pingjia"></view>
				<view class="mehomeOrder-list-text">待评价</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoOrderPage(4)">
				<view class="iconfont icon-RectangleCopy19"></view>
				<view class="mehomeOrder-list-text">退款/售后</view>
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
		},
		methods:{
			gotoOrderPage(id){
				uni.navigateTo({
					url:'/pages/me/pages/myorderPage?id='+ id,
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log(e)
					}
				})
			},
			gotoOrderAssess(id){
				uni.navigateTo({
					url:'/pages/me/pages/myAssess',
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log(e)
					}
				})
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
		width: 140rpx;
		text-align: center;
	}
	.icon-RectangleCopy20,.icon-RectangleCopy31,.icon-RectangleCopy18,.icon-RectangleCopy19{
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
