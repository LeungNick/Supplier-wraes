<template>
	<view class="mehomeHeader-wrap">
		<view class="mehomeHeader-user">
			<view class="mehomeHeader-img">
				<text class="iconfont icon-RectangleCopy13 iconfont-user"></text>
			</view>
			<view class="mehomeHeader-cont">
				<text class="mehomeHeader-num">13711735388</text>
				<view class="mehomeHeader-menber">
					<text class="iconfont icon-huiyuan"></text>
					<text>采货商</text>
				</view>
			</view>
			<view class="mehomeHeader-myteacher">我的导师</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				list:"131313133"
			}
		}
	}
</script>

<style scoped>
	.mehomeHeader-wrap{

		background: linear-gradient(180deg, #FF465C, #e9273e);
		width: 100%; 
		height: 260rpx;
	}
	.mehomeHeader-user{
		position: relative;
		height: 160rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		box-sizing: border-box;
		padding-left: 40rpx;
	}
	.mehomeHeader-img{
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
		background: #F8F8F8;
		text-align: center;
		line-height:100rpx;
		margin-right: 20rpx;
	}
	.icon-RectangleCopy13{
		font-size: 60rpx;
	}
	.mehomeHeader-num{
		font-size: 28rpx;
		color: #fff;
		margin-bottom: 4rpx;
	}
	.mehomeHeader-menber{
		text-align: center;
		background: #FFA200;
		background: linear-gradient(45deg,#FFA200,#fee832);
		color: #fff;
		border-radius: 20rpx;
		font-size: 28rpx;
		width: 160rpx;
		padding: 4rpx 0;
	}
	.mehomeHeader-myteacher{
		color: #fff;
		position: absolute;
		line-height: 30rpx;
		border-radius: 20rpx 0rpx 0rpx 20rpx;
		right: 0;
		padding: 4rpx 20rpx;
		top: 65rpx;
		font-size: 24rpx;
		height: 30rpx;
		background: #FFA200;
	}
</style>
