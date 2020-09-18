<template>
	<view class="search-wrap">
		<search-input></search-input>
		<search-type></search-type>
		<search-type></search-type>
	</view>
</template>

<script>
	import searchInput from "@/pages/search/components/search-input.vue"
	import searchType from "@/pages/search/components/search-type.vue"
	export default {
		data () {
			return {
				
			}
		},
		components:{
			searchInput,
			searchType
		}
	}
</script>

<style scoped>
	.search-wrap{
		padding: 20rpx 20rpx;
	}
</style>
