<template>
	<view class="mySuggestion-warp">
		<view class="mySuggestion">
			<view class="mySuggestion-title">问题和意见</view>
			<textarea v-model="list" placeholder="请输入问题和意见,200字以内" class="mySuggestion-cnt" maxlength="200">{{list}}</textarea>
		</view>
		<view class="mySuggestion-img">
			<img class="imgsize" :src='nowImage'/>
			<view class="pullImg" @click="pullImg">上传照片</view>
		</view>
		<view class="submit">提交</view>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				list:'231313',
				nowImage:''
			}
		},
		methods:{
			pullImg () {
				var that = this
				uni.chooseImage({
				    count: 1,
				    sourceType: ['album'],
				    success: function (res) {
						console.log(res.tempFilePaths[0])
						that.nowImage = res.tempFilePaths[0]
				    }
				});
			}
		}
	}
</script>

<style>
	.mySuggestion-warp{
		background-color: #F1F1F1;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
	}
	.mySuggestion-title{
		width: 94%;
		margin-left: 3%;
		font-size: 28rpx;
	}
	.mySuggestion{
		background: #FFFFFF;
		width: 94%;
		margin-left: 3%;
		border-radius: 10rpx;
		padding: 20rpx 0rpx;
	}
	.mySuggestion-warp textarea{
		font-size: 28rpx;
		padding: 10rpx 10px;
		box-sizing: border-box;
	}
	.mySuggestion-cnt{
		margin-top: 10rpx;
		width: 94%;
		margin-left: 3%;
		border: 1px solid #F1F1F1;
		border-radius: 10rpx;
	}
	.mySuggestion-img{
		background: #fff;
		width: 94%;
		margin-left: 3%;
		border-radius: 10rpx;
		margin-top: 20rpx;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
	}
	.pullImg{
		width: 160rpx;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 24rpx;
		border:1px solid #F1F1F1;
	}
	.imgsize{
		width: 30%;
	}
	.submit{
		width: 70%;
		text-align: center;
		height: 60rpx;
		color: #fff;
		line-height: 60rpx;
		text-align: center;
		font-size: 28rpx;
		background: #FF465C;
		border-radius: 20rpx;
		margin-left: 15%;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}
</style>
