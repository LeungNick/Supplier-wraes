<template>
	<view class="mybag-wrap">
			<ul class="mybag-title">
				<li v-for="item ,index of mybadlistTitle" :data-num='index' :class="{'activeIdx':currenIdx == index}" @click='handelClick'>{{item}}</li>
			</ul>
			<view class="mybag" v-if="currenIdx == 0">
				<view class="mybag-money">
					<view class="">可提现金额（元）</view>
					<view class="">0.00</view>
					<uni-list class="mybag-chose">
						<uni-list-item title="绑定银行卡"></uni-list-item>
						<uni-list-item title="提现记录"></uni-list-item>
					</uni-list>
				</view>
				<view class="mybag-text">
					<view class="">备注</view>
					<view class="" v-for="item of ruleList">{{item}}</view>
				</view>
				<view class="submit-btn">我要提现</view>
			</view>
			<view class="mybag-list" v-else>
					<view class="mybag-list-title">
						<text>时间</text>
						<text>提现金额</text>
						<text>提现状态</text>
					</view>
					<ul class='mybag-list-list'>
						<li v-for="item of mybadlist">
							<text>{{item.time}}</text>
							<text>{{item.monye}}</text>
							<text>{{item.status}}</text>
						</li>
					</ul>
			</view>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				ruleList:['一：每天只能提现一次','二：每次提现不能低于100元','三：提现到账时间未三到5个工作日'],
				currenIdx:0,
				mybadlistTitle:['我的钱包', '收支明细'],
				mybadlist:[{
					time:'2020.09.08',
					monye:'100元',
					status:'成功提现'
				}, {
					time:'2020.09.08',
					monye:'100元',
					status:'成功提现'
				},{
					time:'2020.09.08',
					monye:'100元',
					status:'成功提现'
				}]
			}
		},
		methods:{
			handelClick (e) {
				this.currenIdx = e.currentTarget.dataset.num
			}
		}
	}
</script>

<style>
	.mybag-wrap{
		background: #F1F1F1;
		padding-bottom: 10rpx;
	}
	ul{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.mybag-title{
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-size: 28rpx;
		height: 80rpx;
	}
	.mybag-money{
		margin-top: 20rpx;
		background: #fff;
		width: 94%;
		margin-left: 3%;
		border-radius: 20rpx;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
	}
	.mybag-money view{
		text-align: center;
		font-size: 28rpx;
		padding: 10rpx 0rpx;
	}
	.mybag-money view:nth-child(2) {
		font-size: 50rpx;
		color: #FF465C;
	}
	.uni-list-item{
		height: 60rpx;
		line-height: 60rpx;
		text-align: left;
	}
	.mybag-text{
		font-size: 24rpx;
		width: 94%;
		margin-left: 3%;
		padding: 20rpx 0rpx;
	}
	.mybag-text view{
		padding: 4rpx 0rpx;
	}
	.submit-btn{
		color: #fff;
		background: #FF465C;
		width: 70%;
		text-align: center;
		line-height: 60rpx;
		height: 60rpx;
		margin-left: 15%;
		position: fixed;
		bottom: 10%;
		font-size: 28rpx;
		border-radius: 10rpx;
	}
	.activeIdx{
		border-bottom: 4rpx solid #FF465C;
		box-sizing: border-box;
	}
	/*第二部分*/
	.mybag-list{
		width: 94%;
		margin-left: 3%;
		border-radius: 10rpx;
		background: #fff;
		font-size: 24rpx;
		margin-bottom: 20rpx;
		padding: 20rpx 0rpx;
		margin-top: 20rpx;
	}
	.mybag-list-title{
		display: flex;
		font-size: 28rpx;
		justify-content: space-evenly;
		font-weight: bold;
	}
	.mybag-list-title text{
		width: 33.3%;
		text-align: center;
	}
	.mybag-list li{
		border-bottom: 1px solid #F1F1F1;
		padding: 20rpx 0rpx;
	}
	.mybag-list li text{
		display: inline-block;
		width: 33.3%;
		text-align: center;
	}
</style>
