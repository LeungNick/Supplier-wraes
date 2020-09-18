<template>
	<view class="search-input-wrap">
		<view class="search-cont">
			<text class="iconfont icon-search_list"></text>
			<input type="text" placeholder="请输入搜索商品的关键字" class="search"/>
			<text class="search-btn" @click="toSearchResult">搜索</text>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			toSearchResult () {
				uni.navigateTo({
					url:"/pages/search/page/search-result"
				})
			}
		}
	}
</script>

<style scoped>
	.search-input-wrap{
		width: 94%;
		margin-left: 3%;
	}
	.search-cont{
		background: #F1F1F1;
		border-radius: 40rpx;
		display: flex;
		height:80rpx;
		align-items: center;
		margin-bottom: 10rpx;
	}
	.icon-search_list{
		font-size: 48rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		color: #000;
		width: 40rpx;
	}
	.search{
		font-size: 24rpx;
		color: #000;
		flex: 1;
	}
	.search-btn{
		background: #FF465C;
		color: #fff;
		width: 140rpx;
		height:80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 0 40rpx 40rpx 0;
		font-size: 28rpx;
	}
</style>
