<template>
	<view class="goods-wrap">
		<view class="goods" v-for="item of list" :key="item.id">
			<view class="goods-title">{{item.type}}</view>
			<view class="goods-type">
				<view class="goods-cont" v-for="items of item.goods" :key="items.id">
					<view class="goods-img">
						<image :src="items.img"></image>
					</view>
					<view class="goods-name">{{items.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import imgsrc from '@/static/image/pro.jpg'
	export default{
		data () {
			return {
				list:[{
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}, {
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}, {
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}, {
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}, {
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}, {
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}, {
					type:'服饰列表',
					goods:[{id:'0001',img:imgsrc,name:'衣服'},{id:'0002',img:imgsrc,name:'衣服'},{id:'0003',img:imgsrc,name:'衣服'}],
					id:'01'
				}]
			}
		}
	}
</script>

<style scoped>
	.goods-wrap{
		width: 72%;
		float: right;
		overflow-x: hidden;
		overflow-y: auto;
		margin-left: 40rpx;
		margin-top: 100rpx;
	}
	.goods{
		width: 100%;
		margin-bottom: 40rpx;
	}
	.goods-title{
		width: 24%;
		box-sizing: border-box;
		border-bottom: 6rpx solid #FF465C;
		color: #333333;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		box-sizing: border-box;
		text-align: center;
		padding-bottom: 40rpx;
	}
	.goods-type{
		display: flex;
		justify-content: flex-start;
		flex-wrap:wrap;
	}
	.goods-cont{
		width: 33%;
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
	}
	.goods-img{
		height: 150rpx;
		width: 150rpx;	
	}
	.goods-img image{
		height: 100%;
		width: 100%;
	}
	.goods-name{
		width: 100%;
		text-align: center;
		color: #646566;
		height: 30rpx;
		font-size: 24rpx;
		line-height: 30rpx;
	}
</style>
