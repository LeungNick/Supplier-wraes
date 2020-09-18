<template>
	<view class="search-result-list-wrap">
		<ul>
			<li>
				<view class="search-result-img">
					<img src="../../../static/image/pro.jpg" />
				</view>
				<view class="search-result-text">保湿美颜，青春靓丽，可爱动人，值得拥有</view>
				<view class="search-result-prize">零售价：119元</view>
				<view class="search-result-pf">批发价：￥6.50元</view>
			</li>
			<li>
				<view class="search-result-img">
					<img src="../../../static/image/pro.jpg" />
				</view>
				<view class="search-result-text">保湿美颜，青春靓丽，可爱动人，值得拥有</view>
				<view class="search-result-prize">零售价：119元</view>
				<view class="search-result-pf">批发价：￥6.50元</view>
			</li>
			<li>
				<view class="search-result-img">
					<img src="../../../static/image/pro.jpg" />
				</view>
				<view class="search-result-text">保湿美颜，青春靓丽，可爱动人，值得拥有</view>
				<view class="search-result-prize">零售价：119元</view>
				<view class="search-result-pf">批发价：￥6.50元</view>
			</li>
		</ul>
	</view>
</template>

<script>
</script>

<style>
	.search-result-list-wrap{
		width: 94%;
		margin-left: 3%;
	}
	ul{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.search-result-list-wrap ul{
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	.search-result-list-wrap ul:after{
		content: "";
		width: 45%;
	}
	.search-result-list-wrap ul li {
		width: 48%;
		background: #fff;
		border-radius: 20rpx;
		font-size: 24rpx;
		border: 2rpx solid #F1F1F1;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
	}
	.search-result-img{
		width: 80%;
		margin-left: 10%;
	}
	.search-result-img img{
		width: 100%;
	}
	.search-result-text{
		font-size: 28rpx;
	}
	.search-result-prize{
		margin-top: 20rpx;
		text-decoration: line-through;
		color: #AAAAAA;
		margin-bottom: 10rpx;
	}
	.search-result-pf{
		color: #FF465C;
	}
</style>
