<template>
	<view class="search-result-wrap">
		<search-input></search-input>
		<search-result-list></search-result-list>
	</view>
	
</template>

<script>
	import searchInput from "@/pages/search/components/search-input.vue"
	import searchResultList from "@/pages/search/components/search-result-list"
	export default{
		
		components:{
			searchInput,
			searchResultList
		}
	}
</script>

<style scoped>
	.search-result-wrap{
		padding: 20rpx 20rpx;
		background: #F1F1F1;
	}
	.search-cont{
		background: #fff!important;
	}
</style>
