<template>
	<view class="carlist-wrap">
		<form @submit="formSubmit" @reset="">
			<ul class="carlist-all">
				<li class="carlist-order" v-for="item,index of shoplist">
					<view class="carlist-order-title">
						<text class="carlist-shop">{{item.shopname}}</text>
						<text class="carlist-go">></text>
					</view>
					<view class="carlist-order-pro">
						<view class="carlist-img">
							<image src="../../../static/image/pro.jpg" mode=""></image>
						</view>
						<view class="carlist-ny">
							<view class="pro-text">{{item.procont}}</view>
							<view class="pro-size">{{item.prosize}}</view>
							<view class="choose-num">
								<uni-number-box :min="1" :max="99" @change="bindChange" :value="item.num" :dataIndex ="index"></uni-number-box>
							</view>
						</view>
					</view>
					<view class="carlist-order-adress">
						<view class="carlist-order-adress-title"><text>联系方式</text><text class="chage-address">选择地址+</text></view>
						<view class=""><text class="address-name">{{item.urser}}</text><text class="address-num">{{item.number}}</text></view>
						<view class="address-di">{{item.address}}</view>
					</view>
					<view class="carlist-order-foot">
						<button size="mini" class="button-delea" @click="deleatShoplist" :data-num="index">删除</button>
						<view class="goods-prize">总价:<text class="prize-prize-all">{{item.prize *item.num}}</text></view>
					</view>
					<radio-group :name="item.id">
						<label class="radio" style="margin-right: 30rpx;">
							<radio :value="JSON.stringify(item)" :checked="item.radio" color="#FFCC33" style="transform:scale(0.7)" @click="changeRadio" :data-num='index'/>
						</label>
					</radio-group>
				</li>
			</ul>
			<view class="carlist-order-bottom">
				<label class="radio-all" >
					<radio value="allradio" :checked="checked" color="#FFCC33" style="transform:scale(0.7)" />全选
				</label>
				<view class="carlist-order-prize-center">
					<view class="carlist-order-allprize">合计:<text>￥0.00</text></view>
					<view class="carlist-order-yf">不含运费</view>
				</view>
				<button form-type="submit" size="mini" class="submit-btn">提交订单</button>
			</view>
			
			<!-- <button form-type="reset">Reset</button> -->
		</form>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		data () {
			return {
				checked:false,
				singleprize:0,
				shoplist:[{'shopname':'特惠采购官方店铺',
						 'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
						 'prosize':'规格：10袋/1包 x1',
						 'urser':'尼克尼克',
						 'number':'13711735388',
						 'address':'广州市天河区龙洞街道198号兴南创业园1080号2楼',
						 'id':'01',
						 'radio':'false',
						 'num': '2',
						 'prize':'10',
						 'allprize':'20'
				 }, {'shopname':'特惠采购官方店铺2',
						 'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
						 'prosize':'规格：10袋/1包 x1',
						 'urser':'尼克尼克',
						 'number':'13711735388',
						 'address':'广州市天河区龙洞街道198号兴南创业园1080号2楼'	,
						 'id':'02',
						 'radio':'false',
						 'num': '5',
						 'prize':'20',
						 'allprize':'100'
				 }, {'shopname':'特惠采购官方店铺3',
						 'procont':'南京同仁堂 植叶 红豆杉面膜 无添加剂天然补水保湿收缩毛孔', 
						 'prosize':'规格：10袋/1包 x1',
						 'urser':'尼克尼克',
						 'number':'13711735388',
						 'address':'广州市天河区龙洞街道198号兴南创业园1080号2楼'	,
						 'id':'02',
						 'radio':'false',
						 'prize':'30',
						 'num': '1',
						 'allprize':'30'
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
		margin-bottom: 100rpx;
	}
	.carlist-order{
		position: relative;
		border-radius: 20rpx;
		background: #fff;
		list-style: none;
		padding: 10rpx 20rpx;
		margin-bottom: 20rpx;
	}
	.carlist-order-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		color: #646566;
		margin-bottom: 20rpx;
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
	/* #ifdef MP-WEIXIN */
	.carlist-order-bottom{
		bottom: 0rpx;
	}
	/* #endif */
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
