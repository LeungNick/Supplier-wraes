<template>
	<view class="mehomeOrder-wrap">
		<view class="mehomeOrder-top">
			<text>我的服务</text>
			<!-- <view class="mehomeOrder-all">
				<text>全部</text>
				<text class="iconfont icon-xiangyoujiantou"></text>
			</view> -->
		</view>
		<view class="mehomeOrder-list">
			<view class="mehomeOrder-lm" @click="gotoMyadress">
				<view class="iconfont icon-RectangleCopy14"></view>
				<view class="mehomeOrder-list-text">收件人管理</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoMyLove">
				<view class="iconfont icon-Newuserzone"></view>
				<view class="mehomeOrder-list-text">我的收藏</view>
			</view>
			<view class="mehomeOrder-lm">
				<view class="iconfont icon-RectangleCopy12" @click="gotoMyCus"></view>
				<view class="mehomeOrder-list-text">客服中心</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoSuggestion">
				<view class="iconfont icon-RectangleCopy4"></view>
				<view class="mehomeOrder-list-text">意见反馈</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotomybag">
				<view class="iconfont icon-RectangleCopy2"></view>
				<view class="mehomeOrder-list-text">我的钱包</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoaboutUS">
				<view class="iconfont icon-bussiness-man"></view>
				<view class="mehomeOrder-list-text">关于我们</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotofreeCentre">
				<view class="iconfont icon-RectangleCopy17"></view>
				<view class="mehomeOrder-list-text">免费中心</view>
			</view>
			<view class="mehomeOrder-lm" @click="gotoSetup">
				<view class="iconfont icon-RectangleCopy11"></view>
				<view class="mehomeOrder-list-text">设置</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				order:'xxx'
			}
		},
		methods:{
			gotoMyadress () {
				uni.navigateTo({
					url:'/pages/me/pages/myAddress'
				})
			},
			gotoMyLove () {
				uni.navigateTo({
					url:'/pages/me/pages/myLove'
				})
			},
			gotoMyCus () {
				uni.navigateTo({
					url:'/pages/me/pages/myCustomer'
				})
			},
			gotoSuggestion () {
				uni.navigateTo({
					url:'/pages/me/pages/mySuggestion'
				})
			},
			gotomybag () {
				uni.navigateTo({
					url:'/pages/me/pages/myBag'
				})
			},
			gotoaboutUS () {
				uni.navigateTo({
					url:'/pages/me/pages/aboutUs'
				})
			},
			gotofreeCentre () {
				uni.navigateTo({
					url:'/pages/freecentre/free'
				})
			},
			gotoSetup () {
				uni.navigateTo({
					url:'/pages/me/pages/setUp'
				})
			}
		}
	}
</script>

<style scoped>
	.mehomeOrder-wrap{
		background: #FFF;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx 20rpx;
		width: 94%;
		margin-left: 3%;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.mehomeOrder-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		color: #646566;
		margin-bottom: 20rpx;
	}
	.mehomeOrder-list{
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	.mehomeOrder-lm{
		text-align: center;
		font-size: 24rpx;
		color: #646566#;
		padding: 10rpx 10rpx;
		width: 120rpx;
		text-align: center;
	}
	.icon-RectangleCopy14,.icon-Newuserzone, .icon-RectangleCopy12,.icon-RectangleCopy4,.icon-RectangleCopy2,.icon-bussiness-man,.icon-RectangleCopy17,.icon-RectangleCopy11 {
		font-size: 60rpx;
	}
	.icon-xiangyoujiantou{
		font-size: 20rpx;
	}
</style>
