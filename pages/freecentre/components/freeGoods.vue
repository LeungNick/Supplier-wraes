<template>
	<view class="goods-wrap">
		<view class="goods" v-for="item of proList" :key="item.id"  @click="gotoView">
			<view class="goods-img">
				<img :src="item.img" />
			</view>
			<view class="goods-cont">
				<view class="goods-cont-title"><text>无限量免费领取</text>{{item.text}}</view>
				<view class="goods-cont-prize">零售价: ￥<text class="prize-ls">{{item.prizeLs}}</text></view>
				<view class="goods-cont-bottom" >
					<text class="goods-cont-pfj">已领取：<text class="prize">{{item.prize}}</text></text>
					<text class="goods-cont-pay" @click.stop="handelClick">免费领取</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import proImg from '@/static/image/pro.jpg'
	export default {
		data () {
			return {
				proImg,
				proList: [{
					id: '001',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '002',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '003',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '004',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '004',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14',
					prizeLs: '98.00',
					img:proImg
				}]
				
			}
		},
		methods:{
			handelClick () {
				console.log('313')
				this.$refs.showpop.open('数据')
			},
			gotoView () {
				console.log('123')
				uni.navigateTo({
					url: '/pages/view/view',
					animationType: 'pop-in',
					animationDuration: 200,
					success(e) {
						console.log(e)
					},
					fail(e){
						console.log(e)
					}
				})
			}
		},
		components:{
			
		}
	}
</script>

<style>
	.goods{
		display: flex;
		height: 260rpx;
		padding:10px 10rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #F1F1F1;
	}
	.goods-img{
		width: 200rpx;
	}
	.goods-img img{
		width: 100%;
		height: 100%;
	}
	.goods-cont{
		flex: 1;
		padding: 10rpx 6rpx;
	}
	.goods-cont-title{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		padding-top: 10rpx;
		font-size: 24rpx;
		color: #3B4144;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 40rpx;
		-webkit-box-orient: vertical;
	}
	.goods-cont-title text{
		font-size: 24rpx;
		color: #FF465C;
		border: 1rpx solid #FF465C;
		padding: 2rpx;
		margin-right: 10rpx;
	}
	.goods-cont-prize{
		font-size: 24rpx;
		color: #B2B2B2;
		text-decoration: line-through;
	}
	.goods-cont-bottom{
		display: flex;
		justify-content: space-between;
	}
	.goods-cont-pfj{
		font-size: 24rpx;
		display: flex;
		align-items: center;
	}
	.goods-cont-pfj .prize{
		font-size: 28rpx;
		color: #ff465c;
	}
	.goods-cont-pay{
		border-radius: 10rpx;
		font-size: 28rpx;
		padding: 8rpx 30rpx;
		color: #fff;
		background: linear-gradient(90deg,#ff465c 0,#ff9901 100% )
	}
</style>
