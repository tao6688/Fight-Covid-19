<template>
	<view class="container">
		<view class="content-item">
			<image src="/static/personal/bg.jpg" style="width: 100%;"></image>
			<view class="user-info">
				<view>
					<image src="/static/personal/touxiang.png" style="height: 60px;width: 60px;"></image>
				</view>
				<view class="name">
					<text>你好，住户</text>
				</view>
			</view>
		</view>
		<view class="content-item">
			<view class="content-show">
				<view class="money-item">
					<text>￥128</text>
					<text style="font-size: 12px;color: #919293;">余额</text>
				</view>
				<view class="money-item">
					<text>0</text>
					<text style="font-size: 12px;color: #919293;">本周核酸次数</text>
				</view>
				<view class="money-item">
					<text>10</text>
					<text style="font-size: 12px;color: #919293;">核酸总次数</text>
				</view>
			</view>
		</view>
		<view class="content-item">
			<view class="title">
			<text>我的服务</text>
			</view>
			<view class="content-show">
				<view class="service-item">
					<uni-icons type="person" size="35" color="#97AF13"></uni-icons>
					<text class="service-text">我的资料</text>
				</view>
				<view class="service-item">
					<uni-icons type="location" size="35" color="#97AF13"></uni-icons>
					<text class="service-text">核酸结果</text>
				</view>
				<view class="service-item" >
					<uni-icons type="chat" size="35" color="#97AF13"></uni-icons>
					<text class="service-text">帮助与客服</text>
				</view>
				<view class="service-item">
					<uni-icons type="gear" size="35" color="#97AF13"></uni-icons>
					<text class="service-text">设置</text>
				</view>
			</view>
		</view>

		
	</view>

</template>



<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container{
	width: 100%;
	}
	.profile{
	width: 100%;
	}
	.user-info{
	position: absolute;
	top: 100px;
	left: 30px;
	display: flex;
	align-items: center;

	}
	.user-info .name{
	display: flex;
	}
	.content-item{
	display: flex;
	margin: 10px;
	flex-direction: column;
	border-radius: 4px;
	background-color: #FFFFFF;
	justify-content: space-around;
	}
	.content-item .title{
	padding: 15px;
	color: #5A5B5C;
	font-size: 16px;
	font-weight: bold;
	}
	.content-show{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	}
	.money-item{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	}

	.service-item{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	}
	.service-item .service-text{
	font-size: 12px;
	color: #919293;
	}

</style>