<template>
	<uni-popup ref="popup" type="bottom" class="unipop">
		<view class="ppoup-warp">
			<view class="ppoup-pro">
				<view class="popup-img">
					<image src="../../../static/image/pro.jpg" mode=""></image>
				</view>
				<view class="popup-text">
					<view class="popup-text-t">南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔</view>
					<view class="popup-text-p">
						<text>￥0.65</text>
						<text>批发价</text>
						<view>已选：规格：1片，箱规：10000</view>
					</view>
				</view>
			</view>
			<view class="popup-text-size">
				<view class="">规格</view>
				<view class="">规格:<text>1</text>片</view>
			</view>
			<view class="popup-choose">
				<text>购买数量（库存：<text>1450</text>）</text>
				<view class="choose-num">
					<uni-number-box :min="1" :max="99" @change="" value="1"></uni-number-box>
				</view>
			</view>
			<view class="popup-goods-num">
				<text>货号：114422</text>
				<text>复制</text>
			</view>
			<view class="popup-btn">
				<view class="add-car">加入购物车</view>
				<view class="create-order" @click="gotoOrder">立即购买</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		data () {
			return {
				data:"123"
			}
		},
		components:{
			uniPopup
		},
		methods:{
			open (e) {
				this.$refs.popup.open()
				console.log(e)
			},
			gotoOrder () {
				uni.navigateTo({
					url:'/pages/order/order'
				})
			}
		}
	}
</script>

<style>
	.unipop{
		z-index: 999;
	}
	.ppoup-warp{
		background: #fff;
		padding: 10rpx 10rpx;
	}
	.ppoup-pro{
		display: flex;
		height: 240rpx;
	}
	.popup-img{
		width: 240rpx;
		height:240rpx;
	}
	.popup-img image{
		width: 100%;
		height: 100%;
	}
	.popup-text{
		flex: 1;
		height: 240rpx;
		font-size: 24rpx;
	}
	.popup-text-t{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.popup-text-p text:nth-child(1) {
		font-size: 32rpx;
		color: #FF465C;
		margin-right: 10rpx;
		margin-bottom: 10rpx;
	}
	.popup-text-p view {
		margin-top: 10rpx;
	}
	.popup-text-size{
		font-size: 24rpx;
		padding-left: 40rpx;
	}
	.popup-text-size view:nth-child(2){
		width: 160rpx;
		text-align: center;
		background: #FF465C;
		color: #fff;
		border-radius: 20rpx;
		padding: 8rpx 4rpx;
		margin-top: 10rpx;
	}
	.popup-choose{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		padding: 10rpx 40rpx;
	}
	.popup-goods-num{
		font-size: 24rpx;
		box-sizing: border-box;
		padding-left: 40rpx;
		
	}
	.popup-goods-num text:nth-child(2){
		margin-left: 10rpx;
		color: #FF465C;
	}
	.popup-btn{
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	.add-car{
		color: #fff;
		font-size: 24rpx;
		background: #999999;
		width: 260rpx;
		text-align: center;
		padding: 16rpx 10rpx;
		margin-right: 20rpx;
		border-radius: 10rpx;
	}
	.create-order{
		color: #fff;
		font-size: 24rpx;
		background: #FF465C;
		width: 260rpx;
		text-align: center;
		padding: 16rpx 10rpx;
		border-radius: 10rpx;
	}
</style>
