<template>
	<view class="myorderpage-wrap">
		<view class="myorderpage-top">
			<ul class="myorderpage-top-ul">
				<li v-for="item,index of ListTitle" :class="{'active-item': index== currenIdx}" @click="clickEvent" :data-num="index">{{item}}</li>
			</ul>
		</view>
		<view class="myorderpage-pro">
			<order-list :currenIdx='currenIdx'></order-list>
		</view>
	</view>
</template>

<script>
	import orderList from '../components/orderlist.vue'
	export default{
		data () {
			return {
				ListTitle:['全部','待付款','待发货','待收货','已完成'],
				currenIdx:0
			}
		},
		methods:{
			clickEvent (e) {
				this.currenIdx = e.currentTarget.dataset.num
			},
		},
		components:{
			orderList
		},
		onLoad(e) {
			console.log(e)
			this.currenIdx = e.id
		}
	}
</script>

<style scoped>
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 24rpx;
		background: #fff;
		height: 60rpx;
		line-height: 60rpx;
		border-bottom: 1rpx solid #F1F1F1;
	}
	.myorderpage-wrap{
		background: #F1F1F1;
	}
	.myorderpage-top{
		position: fixed;
		z-index: 99;
		/* #ifdef H5 */
		top: 88rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		top: 0;
		/* #endif */
		left: 0;
		width: 100%;
	}
	.myorderpage-top-ul{
		width:100%;
		box-sizing: border-box;
		padding-top: 20rpx 10rpx;
		display: flex;
		justify-content: space-evenly;
	}
	.active-item{
		color: #ff465c;
		border-bottom: 4rpx solid #ff465c;
		box-sizing: border-box;
	}
	.myorderpage-pro{
		margin-top: 60rpx;
	}
</style>
