<template>
	<view class="scroll-Y">
		<scroll-view class="scroll-view_H" scroll-x="true" :scroll-left="currenoffsetLeft">
			  <view id="demo1" 
				v-for="(item,index) of listbtn" 
				:key="item.id"
				:data-num = 'index'  
				:class="{'active-item':index == currenindex, 'scroll-view-item_H': true, 'uni-bg-red': true}"  
				@click="showItem">{{item.name}}
			  </view>
			  <view class="hk"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listbtn:[{"name":"热销商品","id":"1001"},
					{"name":"个人护理","id":"1002"},
					{"name":"电子产品","id":"1003"},
					{"name":"服饰箱包","id":"1004"},
					{"name":"家具加法","id":"1005"},
					{"name":"母婴玩具","id":"1006"},
			],
			currenindex:0,
			currenoffsetLeft:0
		}
	},
	components:{
		
	},
	methods: {
		showItem (e) {
			var that = this
			this.currenindex = e.currentTarget.dataset.num
			uni.getSystemInfo({
			    success: function (res) {
					that.currenoffsetLeft = e.currentTarget.offsetLeft - res.windowWidth * 0.3
			    }
			});
		}
	}
}
</script>

<style scoped>
	.scroll-Y {
		height: 60rpx;
	}
	.scroll-view_H {
		position: relative;
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 30%;
		height: 60rpx;
		line-height:60rpx;
		text-align: center;
		font-size: 30rpx;
		box-sizing: border-box;
	}
	.active-item{
		color: #ff465c;
		border-bottom: 4rpx solid #ff465c;
		box-sizing: border-box;
	}
	.hk{
		position: absolute;
		bottom: 0;
		left: 0;
		display: inline-block;
		width: 5%;
		height: 5rpx;
	}
</style>
