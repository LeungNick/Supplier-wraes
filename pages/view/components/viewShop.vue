<template>
	<view class="view-shop-wrap">
		<view class="view-shop">
			<view class="view-shop-left">
				<view class="view-shop-logo">
					<text class="iconfont icon-huiyuan"></text>
				</view>
				<view class="view-shop-name">
					<view>特惠采购官方旗舰店</view>
					<view><text v-if = "!shopStatus">广州市天河区龙洞</text>/热销:<text>148008件</text></view>
				</view>
			</view>
			<view class="view-shop-go" v-if = "shopStatus" @click="gotoBusinessShop">
				进仓逛逛
				<text class="iconfont icon-xiangyoujiantou"></text>
			</view>
			<view class="view-shop-love" v-else>
				<text class="iconfont icon-shoucang"></text>
				<view class="">收藏</view>
			</view>
		</view>
		<view class="view-shop-pf">
			<view class="view-shop-pf-cont">
				<text>描述相符</text>
				<text>5分</text>
				<text class="iconfont icon-RectangleCopy7"></text>
			</view>
			<view class="view-shop-pf-cont">
				<text>描述相符</text>
				<text>5分</text>
				<text class="iconfont icon-RectangleCopy7"></text>
			</view>
			<view class="view-shop-pf-cont">
				<text>描述相符</text>
				<text>5分</text>
				<text class="iconfont icon-RectangleCopy7"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			shopStatus:Boolean
		},
		methods:{
			gotoBusinessShop () {
				uni.navigateTo({
					url:'/pages/view/page/businessShop'
				})
			}
		}
	}
</script>

<style>
	.view-shop-wrap{
		padding: 20rpx 30rpx;
		padding-bottom: 30rpx;
		box-sizing: border-box;
		border-bottom: 14rpx solid #F1F1F1;
	}
	.view-shop{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
	}
	.view-shop-left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.view-shop-logo{
		border-radius: 50%;
		background: #FF465C;
		color: #fff;
		text-align: center;
		height: 80rpx;
		width: 80rpx;
		line-height: 80rpx;
		margin-right: 20rpx;
	}
	.icon-huiyuan{
		font-size: 50rpx;
	}
	.view-shop-name view:nth-child(1){
		font-size: 32rpx;
	}
	.view-shop-name view:nth-child(2){
		font-size: 24rpx;
		color: #999999;
	}
	.view-shop-name text{
		color: #FF465C;
	}
	.view-shop-go{
		font-size: 24rpx;
	}
	.view-shop-love{
		display: flex;
		justify-content: center;
		font-size: 24rpx;
	}
	.view-shop-pf{
		display: flex;
		justify-content: space-evenly;
	}
	.view-shop-pf{
		margin-top: 20rpx;
		font-size: 20rpx;
		color: #666666;
	}
	.view-shop-pf-cont text:nth-child(2){
		color: #FF465C;
		margin-left: 8rpx;
		margin-right: 10rpx;
	}
	.icon-RectangleCopy7{
		color: #fff;
		background-color: #FF465C;
		border-radius: 50%;
		height: 30rpx;
		width: 30rpx;
		line-height: 30rpx;
		text-align: 30rpx;
	}
</style>
