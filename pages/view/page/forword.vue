<template>
	<view>
		<forword-title @clickhandleIdx="clickhandleIdx"></forword-title>
		<forword-goods :goods='goodlists' :basePrize='basePrize' v-show="currenIdx == 0"></forword-goods>
		<forword-foot @changeprize="changeprize" v-show="currenIdx == 0"></forword-foot>
		<pro-detail v-show="currenIdx == 1" :imgList="imgList"></pro-detail>
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog type="input" 
			message="成功消息"  
			mode="input"
			placeholder="请输入数字"
			:before-close="true" 
			@close="close" 
			@confirm="confirm" ></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import forwordTitle from '@/pages/view/components/forwordTitle.vue'
	import forwordGoods from '@/pages/view/components/forwordGoods.vue'
	import forwordFoot from '@/pages/view/components/forwordFoot.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import proDetail from '@/pages/view/components/proDetail.vue'
	export default {
		data () {
			return {
				goodlists:{
					name:"细颜山羊奶护手霜30g*1",
					prize:"19.9",
					nowPrize: "10.8",
					des:"上羊奶护手霜湿度有暴涨好用非常好用，放书包，放办公室，车上随时可以润手",
				},
				basePrize:'',
				currenIdx: 0,
				imgList:['../static/image/pro.jpg', '../static/image/pro.jpg', '../static/image/pro.jpg', '../static/image/pro.jpg']
			}
		},
		mounted() {
			this.basePrize = this.goodlists.prize
		},
		components:{
			forwordTitle,
			forwordGoods,
			forwordFoot,
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
			proDetail
		},
		methods:{
			open () {
				this.$refs.popup.open()
			},
			close () {
				this.$refs.popup.close()
			},
			confirm(done,value){
				// 输入框的值
				if(value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')){
					this.basePrize = value
					done()
				}
				
			},
			changeprize (e) {
				console.log(e)
				if(e == "隐藏价格"){
					this.basePrize = ""
				}else if(e == "自定义"){
					// console.log
					this.open()
				}else{
					this.basePrize = parseFloat(this.goodlists.nowPrize) + parseFloat(e)
				}
			},
			clickhandleIdx (e) {
				this.currenIdx = e
			}
		}
	}
</script>

<style>
</style>
