<template>
	<view class="my-assess-wrap">
		<view class="my-assess-top">
			<text v-for="item,index of titleList" :class="{'active':index == currenIdx}" @click="clickTitle" :data-num="index">{{item}}</text>
		</view>
		<view class="my-assess-pro">
			<my-love-list :currenIdx='currenIdx'></my-love-list>
		</view>
	</view>
</template>

<script>
	import myLoveList from '../components/myLoveList.vue'
	export default{
		data () {
			return{
				titleList:['收藏的商品','收藏的仓库'],
				currenIdx:0
			}
		},
		components:{
			myLoveList
		},
		methods:{
			clickTitle (e) {
				console.log(e.currentTarget.dataset.num)
				this.currenIdx = e.currentTarget.dataset.num
			}
		}
	}
</script>

<style scoped>
	.my-assess-wrap{
		background: #F1F1F1;
	}
	.my-assess-top{
		background: #fff;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 24rpx;
		position: fixed;
		z-index: 99;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		padding-top: 20rpx 10rpx;
		display: flex;
		justify-content: space-evenly;
		/* #ifdef H5 */
		top: 88rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		top: 0;
		/* #endif */
	}
	.my-assess-pro{
		margin-top: 80rpx;
	}
	.active{
		box-sizing: border-box;
		border-bottom: 3px solid #FF465C;
	}
</style>
