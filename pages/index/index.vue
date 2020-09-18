<template>
	<view class="wrap">
		<search-cpn></search-cpn>
		<swipercom :autoplay='true'></swipercom>
		<active-cpn :activecont="activecont"></active-cpn>
		<select-scroll></select-scroll>
		<good-cpn @openBottom="open"></good-cpn>
	</view>
</template>

<script>
	import searchCpn from "@/vue-components/searchCpn.vue"
	import swipercom from "@/pages/index/components/swiper.vue";
	import activeCpn from "@/pages/index/components/activeCpn.vue";
	import selectScroll from "@/pages/index/components/selectScroll.vue";
	import goodCpn from '@/pages/index/components/goosCpn.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				activecont:"HHHH"
			}
		},
		components:{
			swipercom,
			activeCpn,
			searchCpn,
			selectScroll,
			goodCpn,
			uniPopup
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.wrap{
		width: 94%;
		margin-left: 3%;
		padding-top: 10rpx;
	}
	/* #ifdef H5 */
	.unipop{
		z-index: 999;
	}
	/* #endif */
	.ppoup-warp{
		background: #FFFFFF;
	}
</style>
