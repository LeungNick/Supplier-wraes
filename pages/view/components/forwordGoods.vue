<template>
	<view class="forword-goods-wrap">
		<view>
			{{goods.name}}
			<text>修改标题</text>
		</view>
		<view v-show="basePrize">零售价：<text>￥{{goods.prize}}元</text></view>
		<view v-show="basePrize">秒杀价<text>￥{{basePrize}}元</text></view>
		<view class="forword-goods-img">
			<img src='../../../static/image/pro.jpg'/>
		</view>
		<view>{{goods.des}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			goods:Object,
			basePrize:String
		},
		data () {
			return {
				
			}
		},
		mounted() {
			console.log(this.goods.nowPrize)
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.forword-goods-wrap{
		width: 94%;
		margin-left: 3%;
		font-size: 30rpx;
		box-sizing: border-box;
		padding-top: 20rpx;
		border-bottom: 10rpx solid #F1F1F1;
	}
	.forword-goods-wrap view{
		margin-bottom: 20rpx;
	}
	.forword-goods-img{
		height: 600rpx;
		display: flex;
		justify-content: center;
	}
	.forword-goods-img img{
		height: 100%;
	}
	.forword-goods-wrap view:nth-child(1){
		font-size: 40rpx;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.forword-goods-wrap view:nth-child(1) text{
		font-size: 24rpx;
		font-weight: normal;
		color: #FF465C;
		border:1rpx solid #FF465C;
		padding: 4rpx 4rpx;
	}
	.forword-goods-wrap view:nth-child(2){
		text-decoration: line-through;
		color: #999999;
	}
	.forword-goods-wrap view:nth-child(3) text{
		color: #FF465C;
		font-size: 42rpx;
	}
</style>
