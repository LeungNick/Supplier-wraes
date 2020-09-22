<template>
	<view class="login-wrap">
		<view class="login-img">
			<img src= '@/static/image/logo.png' >
		</view>
		<view class="login-cent">
			<view class="login-title">用户登录</view>
			<input type="number" placeholder="请输入手机号码" class="login-num"/>
			<view class="login-code-wrap">
				<input type="text"  placeholder="请输入验证码" class="login-code"/>
				<view class="get-code">获取验证码</view>
			</view>
			<view class="login-btn">登录</view>
		</view>
		<view class="login-reg">没有账户，请注册</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.login-wrap{
		box-sizing: border-box;
		padding-top: 20rpx;
		font-size: 24rpx;
	}
	.login-img{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.login-img img {
		width: 20%;
	}
	.login-cent{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.login-title{
		width: 100%;
		margin-top: 100rpx;
		margin-bottom: 20rpx;
		color: #666666;
	}
	.login-btn{
		width: 80%;
		background: #FF465C;
		padding: 20rpx 20rpx;
		text-align: center;
		color: #fff;
		border-radius: 20rpx;
		margin-top: 100rpx;
	}
	.login-cent view:nth-child(1){
		text-align: center;
	}
	.login-num,.login-code-wrap{
		width: 86%;
		box-sizing: border-box;
		background: #F1F1F1;
		border-radius: 30rpx;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0rpx 40rpx;
		margin-bottom: 40rpx;
		position: relative;
	}
	.get-code{
		color: #FF465C;
		height: 80rpx;
		line-height: 80rpx;
		position: absolute;
		right: 4%;
		top: 0;
		z-index: 1;
	}
	.login-code{
		width: 100%;
		box-sizing: border-box;
		background: #F1F1F1;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
	}
	.login-reg{
		width: 100%;
		text-align: center;
		text-decoration: underline;
		margin-top: 40rpx;
	}
</style>
