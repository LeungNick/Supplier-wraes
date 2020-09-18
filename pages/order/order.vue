<template>
	<view class="order-wrap">
		<order-list></order-list>
	</view>
</template>

<script>
	import orderList from './components/orderlist.vue'
	export default {
		data () {
			return{
				
			}
		},
		components:{
			orderList
		}
	}
</script>
<style>
	.order-wrap{
		padding-top: 20rpx;
		background: #F1F1F1;
	}
</style>
