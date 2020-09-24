<template>
	<view class="prodetail-wrap">
		<image v-for = "item of imgList" :src= 'item' style="width: 100%;" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		props:{
			imgList:Array
		}
	}
</script>

<style>
	.prodetail-wrap{
		width: 94%;
		margin-left: 3%;
	}
	.prodetail-wrap img{
		width: 100%;
	}
</style>
