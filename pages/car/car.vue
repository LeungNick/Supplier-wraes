<template>
	<view class="car-wrap">
		<car-list></car-list>
	</view>
</template>

<script>
	import carList from './components/carlist.vue'
	export default {
		data () {
			return {
				list:'12313'
			}
		},
		components:{
			carList
		}
	}
</script>

<style>
	.car-wrap{
		padding: 20rpx 20rpx;
		background: #F1F1F1;
	}
</style>
