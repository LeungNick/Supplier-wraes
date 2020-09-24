<template>
	<view class="wrap">
		<view class="wrap-title">
			<text>//新人福利//</text>
			<view class="wrap-title-left">
				<text>会员同享</text>
				<text>免费领取</text>
			</view>
		</view>
		<view class="wrap-content" @click="gotoFreegoods">
			<image :src="activeimg" mode="widthFix" style="width: 100%;"></image>
		</view>
	</view>
</template>

<script>
	import activeimg  from "@/static/image/active.png"
	export default {
		props:{
			activecont:{
				type:String,
				default:"xxx"
			}
		},
		data () {
			return {
				activeimg:activeimg
			}
		},
		methods:{
			gotoFreegoods () {
				uni.navigateTo({
					url:'/pages/freecentre/free'
				})
			}
		}
	}
</script>
<style scoped>
	.wrap{
		margin-top: 20rpx;
		margin-bottom: 10rpx;
	}
	.wrap-title{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #ff465c;
		margin-bottom: 10rpx;
		
	}
	.wrap-title-left text{
		border:1px solid #FF465C;
		border-radius: 10rpx;
		width: 38rpx;
		text-align: center;
		padding: 0 10rpx;
		margin-left: 4rpx;
	}
	.wrap-content{
		overflow:hidden;
		height:0;
		padding-bottom:16.6%;
		width: 100%;
	}
</style>
