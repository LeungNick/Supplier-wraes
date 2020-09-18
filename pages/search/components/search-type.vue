<template>
	<view class="search-type-wrap">
		<view class="search-type-title">热门搜索</view>
		<ul>
			<li v-for="item of typeList">{{item}}</li>
		</ul>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				typeList:['牙膏','洗面奶','套盒','南京同仁堂','口红','洗面奶','套盒','南京同仁堂','口红','洗面奶','套盒','南京同仁堂','口红','口红']
			}

		}
	}
</script>

<style>
	.search-type-wrap{
		width: 94%;
		margin-left: 3%;
	}
	ul{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.search-type-title{
		font-size: 28rpx;
		margin-bottom: 20rpx;
		margin-top: 20rpx;
	}
	.search-type-wrap ul{
		justify-content: space-between;
		flex-wrap: wrap;
		display: flex;
	}
	.search-type-wrap ul:after{
		content: "";
		width: 30%;
	}
	.search-type-wrap ul li{
		background: #F1F1F1;
		color: #000;
		width: 30%;
		text-align: center;
		height: 64rpx;
		line-height: 64rpx;
		border-radius: 22rpx;
		font-size: 28rpx;
		margin-bottom: 20rpx;
		content: "";
	}
</style>
