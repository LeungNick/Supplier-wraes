<template>
	<view class="forword-foot-wrap">
		<view class="forword-foot-prize">
			<text @click="hidePrize" v-for="item of prizelist" :data-money="item.money">{{item.name}}</text>
		</view>
		<view class="forword-foot-btn">
			<view class="forword-foot-home">
				<view><text class="iconfont icon-shouye"></text></view>
				<view>转到小店</view>
			</view>
			<view class="forword-foot-savebtn">
				<text>保存海报素材</text>
				<text>保存全部海报素材</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				prizelist:[{'name':'隐藏价格','money':"隐藏价格"},{'name':'+5元','money':5},{'name':'+10元','money':10},{'name':'+20元','money':20},{'name':'自定义','money':'自定义'}],
				money:''
			}
		},
		methods: {
			hidePrize (e) {
				this.money = e.currentTarget.dataset.money
				// this.money = parseInt(this.money)
				this.$emit('changeprize',this.money)
			}
		}
	}
</script>

<style scoped>
	.forword-foot-wrap{
		position: fixed;
		width: 100%;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
		bottom: 0;
		left: 0;
	}
	.forword-foot-prize{
		width: 94%;
		margin-left: 3%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-size: 28rpx;
	}
	.forword-foot-prize text{
		border: 1rpx solid #909399;
		padding: 4rpx 4px;
		border-radius: 20rpx;
		color: #6E6E6E;
		margin-bottom: 28rpx;
	}
	.forword-foot-btn{
		display: flex;
		font-size: 28rpx;
		align-items: center;
	}
	.forword-foot-home{
		width: 180rpx;
		text-align: center;
		font-size: 20rpx;
	}
	.forword-foot-home view text{
		font-size: 40rpx;
	}
	.forword-foot-savebtn{
		flex: 1;
	}
	.forword-foot-savebtn text:nth-child(1){
		background: #F0AD4E;
		text-align: center;
		color: #fff;
		min-width: 260rpx;
		display: inline-block;
		padding: 20rpx 0rpx;
		border-radius: 20rpx 0 0 20rpx;
	}
	.forword-foot-savebtn text:nth-child(2){
		background: #FF465C;
		text-align: center;
		color: #FFFFFF;
		min-width: 260rpx;
		padding: 20rpx 0rpx;
		display: inline-block;
		border-radius: 0rpx 20rpx 20rpx 0rpx;
	}
</style>
