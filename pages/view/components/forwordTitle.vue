<template>
	<view class="forword-title-wrap">
		<ul class="forword-title-ul">
			<li v-for="item,index of titlelist" :data-num="index" :class="{activeIdx:index == currenIDX}"  @click="handleClick">{{item}}</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				titlelist:['海报素材', '笔记素材'],
				currenIDX:0
			}
		},
		methods:{
			handleClick (e) {
				console.log(e.currentTarget.dataset.num)
				this.currenIDX = e.currentTarget.dataset.num
				this.$emit('clickhandleIdx',this.currenIDX)
			}
		}
	}
</script>

<style scoped>
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.forword-title-ul{
		display: flex;
		justify-content: space-evenly;
		height: 80rpx;
		font-size: 30rpx;
		align-items: center;
		border-bottom: 10rpx solid #F1F1F1;
	}
	.activeIdx{
		border-bottom: 8rpx solid #FF465C;
		box-sizing: border-box;
	}
</style>
