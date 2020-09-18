<template>
	<view class="search-wrap">
		<view class="search-cont" @click="toSearchpage">
			<text class="iconfont icon-search_list"></text>
			<input type="text" value="请输入搜索商品的关键字"  class="search"/>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return{
				
			}
		},
		methods:{
			toSearchpage () {
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>
<style scoped>
	.search-cont{
		border: 1rpx solid #ff465c;
		border-radius: 30rpx;
		display: flex;
		height:60rpx;
		align-items: center;
		margin-bottom: 10rpx;
	}
	.icon-search_list{
		font-size: 44rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		color: #ff465c;
		width: 40rpx;
	}
	.search{
		font-size: 24rpx;
		color: #b2b2b2;
		flex: 1;
		
	}
</style>
