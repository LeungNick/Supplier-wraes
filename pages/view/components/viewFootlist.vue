<template>
	<view class="">
		<view class="view-foot-list-wrap">
			<view class="view-foot-list-btn">
				<view class="" @click="gotoBusinessShop">
					<view class="iconfont icon-RectangleCopy24"></view>
					<view>进仓</view>
				</view>
				<view>
					<view class="iconfont icon-bussiness-man"></view>
					<view>客服</view>
				</view>
				<view>
					<view class="iconfont icon-cart-full"></view>
					<view>加入购物车</view>
				</view>
			</view>
			<view class="view-foot-list-btn-2">
				<text class="view-foot-list-btn-share">立即分享</text>
				<text class="view-foot-list-btn-buy" @click="showpopup">立即采购</text>
			</view>
		</view>
		<view-popup-cpn ref="popup"></view-popup-cpn>
	</view>
</template>

<script>
	import viewPopupCpn from '@/pages/index/components/popupCpn.vue'
	export default {
		data () {
			return{}
		},
		components:{
			viewPopupCpn
		},
		methods:{
			showpopup () {
				this.$refs.popup.open()
			},
			gotoBusinessShop () {
				console.log('1231')
				uni.navigateTo({
					url:'/pages/view/page/businessShop'
				})
			}
		}
	}
</script>

<style scoped>
	.view-foot-list-wrap{
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		font-size: 24rpx;
		display: flex;
		width: 100%;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		border-top: 1rpx solid #F1F1F1;
	}
	.view-foot-list-btn{
		display: flex;
		justify-content:space-evenly;
	}
	.view-foot-list-btn{
		width: 320rpx;
		text-align: center;
	}
	.iconfont{
		font-size: 40rpx;
	}
	.view-foot-list-btn-2{
		display: flex;
		justify-content: space-evenly;
		flex: 1;
		font-size: 28rpx;
	}
	.view-foot-list-btn-share{
		background: #ff940e;
		padding: 10rpx 30rpx;
		color: #fff;
		border-radius: 10rpx;
	}
	.view-foot-list-btn-buy{
		background: #FF465C;
		padding: 10rpx 30rpx;
		color: #fff;
		border-radius: 10rpx;
	}
</style>
