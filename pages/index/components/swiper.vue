<template>
	
	<swiper class="swiper" 
			:indicator-dots="indicatorDots" 
			:autoplay="autoplay" 
			:interval="interval" 
			:duration="duration" 
			:indicator-color="indicatorcolor"
			:indicator-active-color="indicatorActiveColor">
		<swiper-item v-for="item, index of background" :key=index>
			 <image :src="item"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	import imgscr from "@/static/image/banner.jpg"
	export default {
		props:{
			autoplay:{
				type:Boolean,
				default:true
			}
		},
		data () {
			return {
				background: [imgscr, imgscr],
				indicatorDots: true,
				interval: 2000,
				duration: 500,
				indicatorcolor:"#b8b4bd",
				indicatorActiveColor:"#ff465c"
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style scoped>
	.swiper{
		border-radius: 10rpx;
		overflow: hidden;
		height: 240rpx;
	}
	.swiper image {
		width: 100%;
		height: 100%;
	}
</style>
