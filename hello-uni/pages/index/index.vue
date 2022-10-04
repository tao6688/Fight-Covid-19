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
<<<<<<< HEAD
			<view class="national-map">
				<NationMap></NationMap>
			</view>
=======
<!-- 			<view id="map" class="national-map">
				
			</view> -->
			<view id="map" style="width: 600px;height:400px;margin: 0 auto"></view>
			
>>>>>>> 05dbcbb (更新主页面地图及组件)
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
<<<<<<< HEAD
=======
<!-- 		<view id="map" style="width: 600px;height:400px;"></view> -->
>>>>>>> 05dbcbb (更新主页面地图及组件)
	</view>
</template>
<script>
	import NationMap from "@/components/graphs/NationalMap.vue";
<<<<<<< HEAD
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
=======
	import * as echarts from 'echarts'
	require('echarts/theme/macarons') // echarts theme
	import 'echarts/map/js/china.js'; 
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components: {
			NationMap
		},
		methods: {

		},
		mounted() {
		//echarts.registerMap("china", { geoJSON: chinaMap });
		   var map = echarts.init(document.getElementById('map'));
		 //  var COLORS=["#ffffff","#faebd2","#e9a188","#d56355","#bb3937","#772526","#480f10"];
			var dataList=[//数据
				{name:"南海诸岛",value:0},
				{name: '北京', value: 97},
				{name: '天津', value: 5},
				{name: '上海', value: 30},
				{name: '重庆', value: 2},
				{name: '河北', value: 2},
				{name: '河南', value: 1},
				{name: '云南', value: 2},
				{name: '辽宁', value: 4},
				{name: '黑龙江', value: 13},
				{name: '湖南', value: 0},
				{name: '安徽', value: 0},
				{name: '山东', value: 9},
				{name: '新疆', value: 0},
				{name: '江苏', value: 5},
				{name: '浙江', value: 15},
				{name: '江西', value: 1},
				{name: '湖北', value: 8685},
				{name: '广西', value: 3},
				{name: '甘肃', value: 40},
				{name: '山西', value: 1},
				{name: '内蒙古', value: 1},
				{name: '陕西', value: 7},
				{name: '吉林', value: 0},
				{name: '福建', value: 0},
				{name: '贵州', value: 0},
				{name: '广东', value: 49},
				{name: '青海', value: 0},
				{name: '西藏', value: 0},
				{name: '四川', value: 17},
				{name: '宁夏', value: 0},
				{name: '海南', value: 1},
				{name: '台湾', value: 54},
				{name: '香港', value: 70},
				{name: '澳门', value: 2}
			]
			 var optionMap = {
				  //设置 背景颜色
				  backgroundColor: "#FFFFFF",
				  tooltip: {
					  trigger: "item",
				  },

				//左侧小导航图标
				 visualMap: {
					// 水平摆放
					orient:"horizontal", 
					 show: true,
					textStyle: {
					  fontSize: 3.5,
				   },
					x: "",
					splitList: [
						{ start: 0, end: 0 },
						{ start: 1, end: 9 },
						{ start: 10, end: 99 },
						{ start: 100, end: 499 },
						{ start: 500, end: 999 },
						{ start: 1000, end: 10000 },
						{ start: 10000 },
					],
					color: [
						"#4a1213",
						"#772526",
						"#bb3937",
						"#d56355",
						"#e9a188",
						"#faebd2",
						"#f5f5f5",
					],
				   
				},

				 //配置属性
				series: [
				   {
						name: '信息量',
						type: "map",  // 类型 为map地图
						 mapType: "china",  
						 roam: false, 
						 zoom:1.2,
						 itemStyle:{
							normal: {
								areaColor: '#000',
								borderColor: 'skyblue',
								 borderWidth: 1,
								shadowColor: '#ccc',
								 shadowBlur: 30,
							opacity:1
							},
						},
						label: {
							 normal: {
								show: true, //是否显示省份名称　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　// 设置显示省份名称的的字体大小 ，也可以显示fontFamily:... ...
								 textStyle: {
									 fontSize: 6, 
								},
							 },
							emphasis: {
								 show: true,
							},
						 },
						 data:dataList
					},
				 ],
			 };
			//使用制定的配置项和数据显示图表
			map.setOption(optionMap);
		},
	};

>>>>>>> 05dbcbb (更新主页面地图及组件)
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
