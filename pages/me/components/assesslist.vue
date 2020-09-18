<template>
	<view class="carlist-wrap">
		<form @submit="formSubmit" @reset="">
			<ul class="carlist-all">
				<li class="carlist-order" v-for="shopItem of shoplist">
					<view class="carlist-order-title">
						<text class="carlist-shop">{{shopItem.shopname}}</text>
						<!-- <text class="carlist-go">></text> -->
					</view>
					<view class="carlist-order-status">
						<text class="order-num">订单号：{{shopItem.ordernum}}</text>
						<text class="order-status">{{shopItem.status}}</text>
					</view>
					<view class="orderlist-pro" v-for="item,index of shopItem.goods">
						<view class="carlist-order-pro">
							<view class="carlist-img">
								<image src="../../../static/image/pro.jpg" mode=""></image>
							</view>
							<view class="carlist-ny">
								<view class="pro-text">{{item.procont}}</view>
								<view class="pro-size">{{item.prosize}}</view>
								<view class="pro-prize">￥{{item.prize}}元<text>X{{item.num}}</text></view>
							</view>
						</view>
					</view>
				</li>
			</ul>
		</form>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		props:{
			currenIdx:{
				type:String,
				value:''
			}
		},
		mounted() {
			console.log(this.currenIdx)
		},
		data () {
			return {
				checked:false,
				singleprize:0,
				shoplist:[{'shopname':'特惠采购官方店铺',
						 'urser':'尼克尼克',
						 'number':'13711735388',
						 'ordernum':'44144243412',
						 'status':'前去评价',
						 'address':'广州市天河区龙洞街道198号兴南创业园1080号2楼',
						 'goods':[
							 {	'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
								'prosize':'规格：10袋/1包',
								 'id':'01',
								 'radio':'false',
								 'num': '2',
								 'prize':'10',
								 'allprize':'20'
							 },{	'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
								'prosize':'规格：10袋/1包',
								 'id':'01',
								 'radio':'false',
								 'num': '2',
								 'prize':'10',
								 'allprize':'20'
							 },
						 ]
				 },{'shopname':'特惠采购官方店铺2222',
						 'urser':'尼克尼克',
						 'number':'13711735388',
						 'address':'广州市天河区龙洞街道198号兴南创业园1080号2楼',
						 'status':'前去评价',
						 'goods':[
							 {	'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
								'prosize':'规格：10袋/1包 x1',
								 'id':'01',
								 'radio':'false',
								 'num': '2',
								 'prize':'10',
								 'allprize':'20'
							 },{	'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
								'prosize':'规格：10袋/1包 x1',
								 'id':'01',
								 'radio':'false',
								 'num': '2',
								 'prize':'10',
								 'allprize':'20'
							 },
						 ]
				 }]
				 
			}
		},
		 components: {
			 uniNumberBox
		},
		methods:{
			bindChange (e) {
				console.log(e)
				let index = e[1]
				this.shoplist[index].num = e[0]
			},
			changeRadio (e) {
				var currenIdx = e.currentTarget.dataset.num
				this.$set(this.shoplist[currenIdx],'radio',!this.shoplist[currenIdx].radio)
			},
			changeRadioAll (e) {
				
			},
			deleatShoplist (e) {
				var deleatdom = e.currentTarget.dataset.num
				this.shoplist.splice(deleatdom,1)
			},
			formSubmit (e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
		}
	}
</script>

<style scoped>
	.carlist-all{
		margin: 0;
		padding: 0;
	}
	.carlist-wrap{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.carlist-order{
		width: 94%;
		margin-left: 3%;
		position: relative;
		border-radius: 20rpx;
		background: #fff;
		box-sizing: border-box;
		list-style: none;
		margin-bottom: 20rpx;
		padding: 10rpx 20rpx;
	}
	.carlist-order-status{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
	}
	.carlist-order-status text:nth-child(2){
		color: #FF465C;
		margin-bottom: 10rpx;
		border:1px solid #FF465C;
		border-radius: 10rpx;
		box-sizing: border-box;
		padding: 6rpx 20rpx;
	}
	.carlist-order-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		color: #646566;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #F1F1F1;
	}
	.carlist-order-pro{
		display: flex;
		height: 250rpx;
		justify-content: flex-start;
	}
	.carlist-img{
		width: 250rpx;
		height: 250rpx;
	}
	.carlist-img image {
		width: 100%;
		height: 100%;
	}
	.carlist-ny{
		flex: 1;
	}
	.pro-text{
		margin-top: 40rpx;
		font-size: 24rpx;
		color:#646566;
	}
	.pro-size{
		font-size: 24rpx;
		color: #999999;
		margin-top: 10rpx;
	}
	.pro-prize{
		font-size: 24rpx;
		color: #FF465C;
		margin-top: 10rpx;
	}
	.choose-num{
		margin-top: 20rpx;
	}
	.carlist-order-adress {
		border-top: 2rpx solid #F1F1F1;
		font-size: 26rpx;
		padding-top: 20rpx;
		color: #3C3E49;
	}
	.address-name ,.address-num ,.address-di {
		font-size: 24rpx;
		color:#646566;
	}
	.address-name{
		padding-right: 20rpx;
	}
	.carlist-order-adress-title{
		display: flex;
		justify-content: space-between;
	}
	.chage-address{
		text-decoration: underline;
		font-size: 24rpx;
		color:#646566;
	}
	.carlist-order-foot{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}
	.uni-button{
		margin: 0 0;
	}
	.button-delea{
		margin: 0;
	}
	.goods-prize{
		font-size: 30rpx;
	}
	.prize-prize-all{
		color: #FF465C;
	}
	.radio{
		position: absolute;
		top: 30%;
		left: 2%;
		z-index: 99;
	}
	.carlist-order-bottom{
		position: fixed;
		height: 100rpx;
		background: #fff;
		bottom: 100rpx;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.submit-btn{
		background: #FF465C;
		border-radius: 40rpx;
		color: #fff;
		margin: 0;
	}
	.carlist-order-prize-center{
		font-size: 22rpx;
		color:#646566;
		margin-right: 20rpx;
	}
	.radio-all{
		position: absolute;
		left: 30rpx;
		font-size: 24rpx;
		color:#646566;
	}
</style>
