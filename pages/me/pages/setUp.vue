<template>
	<view class="setup-wrap">
		<ul class="setup-ul">
			<li>
				<text>头像</text>
				<view>
					<img src="../../../static/image/ts.jpg">
					<text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
			<li>
				<text>姓名</text>
				<view>
					<text>尼克你可</text>
					<text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
			<li>
				<text>手机号码</text>
				<view>
					<text>13711735308</text><text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
			<li>
				<text>支付密码</text>
				<view>
					<text>未设置</text><text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
			<li>
				<text>我的邀请码</text>
				<view>
					<text>dfaf1</text><text class="copy-code">复制</text>
				</view>
			</li>
			<li>
				<text>我的邀请二维码</text>
				<view>
					<img src="../../../static/image/ts.jpg">
					<text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
		</ul>
		<view class="setup-wrap-title">小店联系信息</view>
		<ul class="setup-ul">
			<li>
				<text>支付密码</text>
				<view>
					<text>未设置</text><text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
			<li>
				<text>我的邀请二维码</text>
				<view>
					<img src="../../../static/image/ts.jpg">
					<text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</li>
		</ul>
		<view class="getoutLogin">退出登录</view>
	</view>
</template>

<script>
	
</script>

<style scoped>
	.setup-wrap{
		background: #F1F1F1;
		padding-bottom: 30rpx;
	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		padding: 0 3%;
		font-size: 30rpx;
		background: #fff;
	}
	.setup-ul li{
		height: 120rpx;
		line-height: 120rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #F1F1F1;
	}
	.setup-ul li view {
		display: flex;
		align-items: center;
	}
	.setup-ul li img{
		margin: 0;
		padding: 0;
		height: 80rpx;
		width: 80rpx;
	}
	.setup-ul li view text{
		color: #808080;
	}
	.copy-code{
		color: #FF465C!important;
		margin-left: 20rpx;
		border: 1px solid #FF465C;
		padding: 2rpx 8rpx;
		height: 40rpx;
		line-height: 40rpx;
	}
	.setup-wrap-title{
		padding: 10rpx 3%;
		box-sizing: border-box;
		font-size: 26rpx;
	}
	.getoutLogin{
		color: #fff;
		width: 70%;
		text-align: center;
		margin-top: 60rpx;
		padding: 10rpx 0;
		height: 60rpx;
		font-size: 28rpx;
		line-height: 60rpx;
		margin-left: 15%;
		background: #FF465C;
		border-radius: 40rpx;
	}
</style>
