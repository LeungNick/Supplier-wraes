<template>
	<view class="view-detail-wrap">
		<view class="view-detail">
			<view>产品参数</view>
			<ul>
				<li><text>重量</text><text>0.02kg</text></li>
				<li><text>箱规</text><text>1000</text></li>
				<li><text>品牌</text><text>恩视明</text></li>
				<li><text>品名</text><text>蒸汽樱花版</text></li>
				<li><text>产地</text><text>广东深圳</text></li>
				<li><text>保质期</text><text>3年</text></li>
			</ul>
		</view>
		<view class="view-detail-img">
			<view class="view-detail-title">商品详情</view>
			<ul>
				<li><img src="../../../static/image/pro.jpg"/></li>
				<li><img src="../../../static/image/pro.jpg"/></li>
				<li><img src="../../../static/image/pro.jpg"/></li>
				<li><img src="../../../static/image/pro.jpg"/></li>
				<li><img src="../../../static/image/pro.jpg"/></li>
			</ul>
		</view>
	</view>
</template>

<script>
</script>

<style>
	ul{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.view-detail-wrap{
		padding: 20rpx 30rpx;
		padding-bottom: 30rpx;
		box-sizing: border-box;
		border-bottom: 14rpx solid #F1F1F1;
	}
	.view-detail view{
		font-size: 30rpx;
		width: 20%;
		text-align: center;
	}
	.view-detail ul{
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.view-detail ul li text:nth-child(1){
		width: 40%;
		display: inline-block;
		color: #3B4144;
		margin-bottom: 10rpx;
	}
	.view-detail ul li text:nth-child(2){
		color: #999999;
	}
	.view-detail-title{
		font-size: 30rpx;
		width: 20%;
		margin-left: 40%;
		text-align: center;
		border-bottom: 4rpx solid #FF465C;
	}
	.view-detail-img img{
		width: 90%;
		margin-left: 5%;
	}
</style>
