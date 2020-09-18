<template>
	<view class="select-wrap">
		<ul class="select-ul">
			<li v-for="item, index of listNum" 
				@tap="clickSelect"
			    :data-num = index
				:key="item.id" 
				:class='{"activeNow":index == currenIdx}'>{{item.name}}</li>
		</ul>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				listNum:[
					{"id":'001',"name":'衣服服饰'},
					{"id":'002',"name":'衣服服饰'},
					{"id":'003',"name":'衣服服饰'},
					{"id":'004',"name":'衣服服饰'},
					{"id":'005',"name":'衣服服饰'},
					{"id":'006',"name":'衣服服饰'},
					{"id":'007',"name":'衣服服饰'},
					{"id":'008',"name":'衣服服饰'}
				],
				currenIdx: 0
			}
		},
		methods:{
			clickSelect(e) {
				this.currenIdx = e.currentTarget.dataset.num
			}
		}
	}
</script>

<style scoped>
	.select-ul{
		position: fixed;
		width: 26%;
		display: inline-block;
		background: #EEEEEE;
		text-align: center;
		color: #646566;
		list-style:none;
		padding: 0;
		margin: 0;
	}
	.select-ul li{
		height: 80rpx;
		font-size: 28rpx;
		line-height: 80rpx;
	}
	.activeNow{
		background: #fff;
		box-sizing: border-box;
		border-left: 4px solid #ff465c;
		font-weight: bold;
	}
</style>
