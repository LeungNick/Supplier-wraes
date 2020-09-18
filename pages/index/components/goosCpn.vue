<template>
	<view class="goods-wrap">
		<view class="goods" v-for="item of proList" :key="item.id"  @click="gotoView">
			<view class="goods-img">
				<image :src="item.img"></image>
			</view>
			<view class="goods-cont">
				<view class="goods-cont-title">{{item.text}}</view>
				<view class="goods-cont-prize">零售价: ￥<text class="prize-ls">{{item.prizeLs}}</text></view>
				<view class="goods-cont-bottom" >
					<text class="goods-cont-pfj">批发价: ￥<text class="prize">{{item.prize}}</text></text>
					<text class="goods-cont-pay" @click.stop="handelClick">立即采购</text>
				</view>
			</view>
		</view>
		<popup-cpn ref='showpop'></popup-cpn>
	</view>
</template>

<script>
	import popupCpn from './popupCpn.vue'
	import proImg from '@/static/image/pro.jpg'
	export default {
		data () {
			return {
				proImg,
				proList: [{
					id: '001',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14.90',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '002',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14.90',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '003',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14.90',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '004',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14.90',
					prizeLs: '98.00',
					img:proImg
				},{
					id: '004',
					text: '南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔',
					prize: '14.90',
					prizeLs: '98.00',
					img:proImg
				}]
				
			}
		},
		methods:{
			// open(){
			// 	this.$refs.popup.open()
			// }
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
			popupCpn
		}
	}
</script>

<style>
	.goods{
		display: flex;
		height: 200rpx;
		padding:10px 10rpx;
	}
	.goods-img{
		width: 200rpx;
	}
	.goods-img image{
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
		font-size: 24rpx;
		color: #3B4144;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
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
	}
	.goods-cont-pfj .prize{
		font-size: 36rpx;
		color: #ff465c;
	}
	.goods-cont-pay{
		border-radius: 30rpx;
		font-size: 28rpx;
		padding: 8rpx 30rpx;
		color: #fff;
		background: #ff465c;
	}
	.unipop{
		/* #ifdef H5 */
			z-index: 999;
		/* #endif */
	}
	.ppoup-warp{
		background: #fff;
	}
</style>
