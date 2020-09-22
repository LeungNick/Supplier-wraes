<template>
	<view class="reg-wrap">
		<view class="reg-img">
			<img src= '@/static/image/logo.png' >
		</view>
		<view class="reg-cent">
			<view class="reg-title">用户登录</view>
			<input type="number" placeholder="请输入手机号码" class="reg-num"/>
			<view class="reg-code-wrap">
				<input type="text"  placeholder="请输入验证码" class="reg-code"/>
				<view class="get-code">获取验证码</view>
			</view>
			<input type="number" placeholder="请输入邀请码(必填)" class="reg-num"/>
			<view class="reg-btn">注册</view>
		</view>
		<view class="reg-reg">已有账户，前往登录</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.reg-wrap{
		box-sizing: border-box;
		padding-top: 20rpx;
		font-size: 24rpx;
	}
	.reg-img{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.reg-img img {
		width: 20%;
	}
	.reg-cent{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.reg-title{
		width: 100%;
		margin-top: 100rpx;
		margin-bottom: 20rpx;
		color: #666666;
	}
	.reg-btn{
		width: 80%;
		background: #FF465C;
		padding: 20rpx 20rpx;
		text-align: center;
		color: #fff;
		border-radius: 20rpx;
		margin-top: 100rpx;
	}
	.reg-cent view:nth-child(1){
		text-align: center;
	}
	.reg-num,.reg-code-wrap{
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
	.reg-code{
		width: 100%;
		box-sizing: border-box;
		background: #F1F1F1;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
	}
	.reg-reg{
		width: 100%;
		text-align: center;
		text-decoration: underline;
		margin-top: 40rpx;
	}
</style>
