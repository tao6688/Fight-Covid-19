<template>
	<view class="container">
		<!-- 顶部为标语栏，用于宣传防疫 -->
		<img src="@/static/insertphoto/slogan.png" alt="防控疫情,人人有责" mode="widthFix" style="height: 120px;margin-bottom:8px;">
		<!-- 社区疫情防控相关信息 -->
		<view class="local-message">
			<view class="title">
				<view style="height:20px;width: 6px;background-color:#4169E1;display: inline-block;matgin-right:12px;">
				</view>
				<text
					style="color:skyblue;font-size: 16px;font-weight: bold;display: inline-block;color: #4169E1;">当前本地疫情动态\n</text>
			</view>
			<view class="total_message">
				<view class="detail_message">
					<text style="font-size: 14px;">社区风险等级</text>
					<text style="font-size: 18px;color: red;">高风险</text>
				</view>
				<view class="detail_message">
					<text style="font-size: 14px;">社区昨日新增</text>
					<text style="font-size: 18px;color: red;">12例</text>
				</view>
				<view class="detail_message">
					<text style="font-size: 14px;">社区风险单元</text>
					<text style="font-size: 18px;color:red;">15栋1单元</text>
				</view>
				<view class="detail_message">
					<text style="font-size: 14px;">社区当前状态</text>
					<text style="font-size: 18px;color:red;">凭证进出</text>
				</view>
			</view>
		</view>
		<!-- 疫情地图可视化部分 -->
		<view class="epidemic-information">
		<!-- 一、全国疫情地图 -->
			<view class="title">
				<view style="height:20px;width: 6px;background-color:#4169E1;display: inline-block;matgin-right:12px;"></view>
				<text style="color:skyblue;font-size: 16px;font-weight: bold;display: inline-block;color: #4169E1;">全国疫情地图</text>
			</view>
			<view class="national-map">
				<NationMap></NationMap>
			</view>
		<!-- 二、本省疫情地图 -->
            <view class="title">
				<view style="height:20px;width: 6px;background-color:#4169E1;display: inline-block;matgin-right:12px;"></view>
				<text style="color:skyblue;font-size: 16px;font-weight: bold;display: inline-block;color: #4169E1;">本省疫情地图</text>
			</view>
			<view class="national-map">
				<NationMap></NationMap>
			</view>
		</view>
		<!-- 核酸点实时状态监测 -->
		<view class="sampling-point">
			<div class="title">
			<view style="height:20px;width: 6px;background-color:#4169E1;display: inline-block;matgin-right:12px;"></view>
			<text style="color:skyblue;font-size: 16px;font-weight: bold;display: inline-block;color: #4169E1;">社区核酸点状态监测</text>
			</div>
			<view class="monitor-group">
			<view class="monitor">
				<text style="text-align: center;font-size: 14px;margin-top:8px;color: #4169E1;">检测点位1</text>
				<video src="#" :controls="true" class="monitor-video"></video>
			</view>	
			<view class="monitor">
				<text style="text-align: center;font-size: 14px;margin-top:8px;color: #4169E1;">检测点位2</text>
				<video src="#" :controls="true" class="monitor-video"></video>
			</view>
			<view class="monitor">
				<text style="text-align: center;font-size: 14px;margin-top:8px;color: #4169E1;">检测点位3</text>
				<video src="#" :controls="true" class="monitor-video"></video>
			</view>
			<view class="monitor">
				<text style="text-align: center;font-size: 14px;margin-top:8px;color: #4169E1;">检测点位4</text>
				<video src="#" :controls="true" class="monitor-video"></video>
			</view>				
			</view>
		</view>
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
	</view>
</template>
<script>
	import NationMap from "@/components/graphs/NationalMap.vue";
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
			};
		},
		components: {
			NationMap
        },
		methods: {
		}
	}
</script>

<style scss scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* 	height: 750px; */
		width: 100vw;
		background-color: #D3D3D3;
		/* padding: 20px; */
		font-size: 14rpx;
		line-height: 24rpx;
	}

	.local-message {
		display: flex;
		flex-direction: column;
		height: 130px;
		border-radius: 12px;
		background: white;
		margin: 0.2rem 0.3rem;
		padding: 4px 8px;
	}

	.title {
		display: flex;
		align-items: center;
		color: #4169E1;
		font-size: 20px;
		font-family: "STKaiti";
		margin-top: 12px;
	}

	.total_message {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin-top: 8px;
	}

	.detail_message {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: space-around;
		width: 23%;
		height: 160rpx;
		border-radius: 16rpx;
		color: white;
		background-color: #00BFFF;
	}

	.epidemic-information {
		display: flex;
		flex-direction: column;
		margin: 0.2rem 0.3rem;
		padding: 4rpx 8rpx;
		border-radius: 12rpx;
		background-color: #fffFFF;
	}
	.national-map{
		display: flex;
		margin: 10rpx 6rpx 6rpx 6rpx;
		padding: 6rpx 4rpx;
		border-radius: 12px;
		margin-top: 12rpx;
	}
	.sampling-point{
		display: flex;
		flex-direction: column;
		background-color: #fffFFF;
		height: 360px;
		margin: 0.2rem 0.3rem;
		padding: 4rpx 8rpx;
		border-radius: 12rpx;	
	}
	.monitor-group{
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
		height: 280px;
	}
	.monitor{
		display:flex;
		flex-direction: column;
		border: 2px solid skyblue;
		margin-top: 12px;
		width: 48%;
		height: 46%;
	}
	.monitor-video{
		width: 98%;
		margin: 6px auto;
	}
</style>
