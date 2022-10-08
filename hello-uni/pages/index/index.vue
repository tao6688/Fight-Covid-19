<template>
	<view class="container">
		<!-- 顶部为标语栏，用于宣传防疫 -->
		<!-- 	<img src="@/static/insertphoto/slogan2.png" alt="防控疫情,人人有责" mode="widthFix" style="height: 120px;margin-bottom:8px;"> -->
		<!-- 社区疫情防控相关信息 -->
		<view class="local-message">
			<view class="title">
					<view
						style="height:28rpx;width: 10rpx;background-color:#4169E1;display: inline-block;matgin-right:12rpx;">
					</view>
					<text style="color:skyblue;font-size: 28rpx;font-weight: bold;display: inline-block;color:#4169E1;">当前社区疫情动态</text>
					<button size="mini"  
						  :loading="isloading" 
						   style="border:deepskyblue;color:orangered;font-weight:900;height:48rpx;;cursor: pointer;line-height: 48rpx;" 
						   @click="updateCommunityMessage">
						刷新信息
					</button>
			</view>
			<view class="total_message">
				<view class="detail_message">
					<text style="font-size: 16rpx;">社区风险等级</text>
					<text style="font-size: 18rpx;color: red;" id="riskstatus">{{RiskStatus}}</text>
				</view>
				<view class="detail_message">
					<text style="font-size: 16rpx;">社区昨日新增</text>
					<text style="font-size: 18rpx;color: red;" id="newcases">{{NewCases}}例</text>
				</view>
				<view class="detail_message">
					<text style="font-size: 14rpx;">社区风险单元</text>
					<text style="font-size: 18rpx;color:red;" id="riskbuilding">{{RiskBuilding}}</text>
				</view>
				<view class="detail_message">
					<text style="font-size: 14rpx;">社区管控状态</text>
					<text style="font-size: 18rpx;color:red;" id="controlstatus">{{ControlStatus}}</text>
				</view>
			</view>
		</view>
		<!-- 疫情地图可视化部分 -->
		<view class="epidemic-information">
			<!-- 一、全国疫情地图 -->
			<view class="title">
				<view
					style="height:28rpx;width: 10rpx;background-color:#4169E1;display: inline-block;matgin-right:12rpx;">
				</view>
				<text style="color:skyblue;font-size: 28rpx;font-weight: bold;display: inline-block;color:#4169E1;">全国疫情地图</text>
			</view>
			<view class="national-map">
				<view id="map"
					style="background-attachment: fixed;background-size: cover;width: 98%;height:100%;margin: 0 auto">
				</view>
			</view>
			<!-- 二、本省疫情地图 -->
			<view class="title">
				<view
					style="height:28rpx;width: 10rpx;background-color:#4169E1;display: inline-block;matgin-right:12rpx;">
				</view>
				<text
					style="background-attachment:fixed;color:skyblue;font-size: 28rpx;font-weight: bold;display: inline-block;color: #4169E1;">本省疫情地图</text>
			</view>
			<view class="national-map">
				<view id="map2"
					style="background-attachment: fixed;background-size: cover;width: 98%;height:100%;margin: 0 auto">
				</view>
			</view>

		</view>
		<!-- 核酸点实时状态监测 -->
		<view class="sampling-point">
			<div class="title">
				<view
					style="height:28rpx;width: 10rpx;background-color:#4169E1;display: inline-block;matgin-right:12rpx;">
				</view>
				<text
					style="color:skyblue;font-size: 28rpx;font-weight: bold;display: inline-block;color: #4169E1;">社区核酸点状态监测</text>
			</div>
			<view class="monitor-group">
				<view class="monitor">
					<text style="text-align: center;font-size: 14rpx;margin-top:8rpx;color:#4169E1;">检测点位1</text>
					<video src="@/static/video/moniter.mp4" :controls="true" class="monitor-video"></video>
				</view>
				<view class="monitor">
					<text style="text-align: center;font-size: 14rpx;margin-top:8rpx;color: #4169E1;">检测点位2</text>
					<video src="@/static/video/moniter.mp4" :controls="true" class="monitor-video"></video>
				</view>
				<view class="monitor">
					<text style="text-align: center;font-size: 14rpx;margin-top:8rpx;color:#4169E1;">检测点位3</text>
					<video src="@/static/video/moniter.mp4" :controls="true" class="monitor-video"></video>
				</view>
				<view class="monitor">
					<text style="text-align: center;font-size: 14rpx;margin-top:8rpx;color:#4169E1;">检测点位4</text>
					<video src="@/static/video/moniter.mp4" :controls="true" class="monitor-video"></video>
				</view>
			</view>
		</view>
		<!-- 核酸点进度监测 -->
		<view class="detection-progress">
			<div class="title">
				<view
					style="height:28rpx;width: 10rpx;background-color:#4169E1;display: inline-block;matgin-right:12rpx;">
				</view>
				<text
					style="color:skyblue;font-size: 28rpx;font-weight: bold;display: inline-block;color: #4169E1;">当前核酸进度</text>
			</div>
			<view class="charts-box">
				<qiun-data-charts type="arcbar" :chartData="chartData" :opts="opts">
				</qiun-data-charts>
			</view>
			<view class="current-progress"
				style="text-align: center;font-size: 30rpx;margin: 15rpx 20rpx 20rpx 15rpx;color:#008B45;">
				当前进度:
				<span style="font-size: 40rpx;color: green;">{{currentProgress}}%</span>
			</view>
		</view>
	</view>


</template>
<script>
	//import NationMap from "@/components/graphs/NationalMap.vue";
	import * as echarts from 'echarts'
	require('echarts/theme/macarons') // echarts theme
	import 'echarts/map/js/china.js';
	import jiangsuMap from 'echarts/map/json/province/jiangsu.json'
	export default {
		data() {
			return {
				RiskStatus: '高风险' || '中风险' || '低风险',
				NewCases: 15,
				// 风险单元应该设置成为数组，便于通过数组方法添加和删除操作
				RiskBuilding: '15栋1单元、12栋2单元、9栋1单元',
				ControlStatus: '静态管理' || '凭证进出' || '自由出入',
				chartData: {},
				updateTimer: '',
				currentProgress: 0,
				isloading:false,
				opts: {
					timing: "easeOut",
					duration: 1000,
					rotate: false,
					rotateLock: false,
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: undefined,
					fontSize: 13,
					fontColor: "#666666",
					dataLabel: true,
					dataPointShape: true,
					dataPointShapeType: "solid",
					touchMoveLimit: 60,
					enableScroll: false,
					enableMarkLine: false,
					title: {
						name: "核酸完成进度",
						fontSize: 16,
						color: "#00FF00",
						offsetX: 0,
						offsetY: 0
					},
					subtitle: {
						name: "请耐心等候",
						fontSize: 15,
						color: "#666666",
						offsetX: 0,
						offsetY: 0
					},
					extra: {
						arcbar: {
							type: "circle",
							width: 16,
							backgroundColor: "#cbe6d0",
							startAngle: 0.75,
							endAngle: 0.25,
							gap: 2,
							direction: "cw",
							lineCap: "round",
							centerX: 0,
							centerY: 0,
							linearType: "custom"
						}
					}
				},
			}
		},
		onReady() {
			// 初始化数据内容
			this.getServerData();
			// 挂载完成后更新核酸检测视图
			this.updateDetectionProgress();
		},
		components: {
			// NationMap
		},
		methods: {
			getServerData() {
				let res = {
					series: [{
						name: '当前进度',
						color: '#2fc25b',
						// 当前返回值表示的是进度的小数位表示形式。
						data: '0.0'
					}, ]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			},
			// 更新核酸检测进度
			updateDetectionProgress() {
				this.updateTimer = setInterval(() => {
					if (Number(this.chartData.series[0].data) <= 1) {
						this.chartData.series[0].data = Number(this.chartData.series[0].data) + 0.01 + '';
					} else {
						this.chartData.series[0].data = 0;
					};
					this.currentProgress = (Number(this.chartData.series[0].data) * 100).toFixed(1);
				}, 5000)
			},
			// 更新社区疫情信息动态
			updateCommunityMessage(){
				this.isloading=true;
				let riskHtl=document.getElementById('riskstatus');
				let caseHtl=document.getElementById('newcases');
				let buildingHtl=document.getElementById('riskbuilding');
				let controlHtl=document.getElementById('controlstatus');
				// 设置定时器模拟从服务器拉取最新数据
				setTimeout(()=>{
					this.RiskStatus="中风险";
					this.NewCases=0;
					this.RiskBuilding="4栋1单元、6栋2单元";
					this.ControlStatus="凭证进入";
					riskHtl.style.color="yellow";
					caseHtl.style.color="green";
					controlHtl.style.color="yellow";
					this.isloading=false;
				},500);
				// setTimeout(()=>{
				// 	this.isloading=false;
				// },200)
			}
		},
		mounted() {
			// 绘制国内和省份疫情图
			var map2 = echarts.init(document.getElementById('map2'));
			var featuresCollection = {
				geoJSON: jiangsuMap
			};
			echarts.registerMap("JingSu", featuresCollection.geoJSON);
		 var map = echarts.init(document.getElementById('map'));
			var COLORS = ["#ffffff", "#faebd2", "#e9a188", "#d56355", "#bb3937", "#772526", "#480f10"];
			var dataList = [ //数据
				{
					name: "南海诸岛",
					value: 0
				},
				{
					name: '北京',
					value: 97
				},
				{
					name: '天津',
					value: 5
				},
				{
					name: '上海',
					value: 30
				},
				{
					name: '重庆',
					value: 2
				},
				{
					name: '河北',
					value: 2
				},
				{
					name: '河南',
					value: 1
				},
				{
					name: '云南',
					value: 2
				},
				{
					name: '辽宁',
					value: 4
				},
				{
					name: '黑龙江',
					value: 13
				},
				{
					name: '湖南',
					value: 0
				},
				{
					name: '安徽',
					value: 0
				},
				{
					name: '山东',
					value: 9
				},
				{
					name: '新疆',
					value: 0
				},
				{
					name: '江苏',
					value: 5
				},
				{
					name: '浙江',
					value: 15
				},
				{
					name: '江西',
					value: 1
				},
				{
					name: '湖北',
					value: 31
				},
				{
					name: '广西',
					value: 3
				},
				{
					name: '甘肃',
					value: 40
				},
				{
					name: '山西',
					value: 1
				},
				{
					name: '内蒙古',
					value: 1
				},
				{
					name: '陕西',
					value: 7
				},
				{
					name: '吉林',
					value: 0
				},
				{
					name: '福建',
					value: 0
				},
				{
					name: '贵州',
					value: 0
				},
				{
					name: '广东',
					value: 49
				},
				{
					name: '青海',
					value: 0
				},
				{
					name: '西藏',
					value: 0
				},
				{
					name: '四川',
					value: 17
				},
				{
					name: '宁夏',
					value: 0
				},
				{
					name: '海南',
					value: 1
				},
				{
					name: '台湾',
					value: 54
				},
				{
					name: '香港',
					value: 70
				},
				{
					name: '澳门',
					value: 2
				}
			]

			var dataList2 = [ //数据
				{
					name: "徐州",
					value: 0
				},
				{
					name: '连云港',
					value: 97
				},
				{
					name: '宿迁',
					value: 5
				},
				{
					name: '淮安',
					value: 30
				},
				{
					name: '盐城',
					value: 2
				},
				{
					name: '扬州',
					value: 2
				},
				{
					name: '泰州',
					value: 1
				},
				{
					name: '南通',
					value: 2
				},
				{
					name: '南京',
					value: 4
				},
				{
					name: '镇江',
					value: 13
				},
				{
					name: '常州',
					value: 0
				},
				{
					name: '无锡',
					value: 0
				},
				{
					name: '苏州',
					value: 500
				}
			]

			var option = { //配置项
				tooltip: { //
				 formatter: function(params, ticket, callback) {
						return params.name + '：' + params.value
					} //数据格式化
				},
				backgroundColor: '#ffffff', //背景
				visualMap: {
					type: 'piecewise',
					orient: 'horizontal',
					left: 'left',
					top: 'bottom',
					textStyle: {
						fontSize: 5,
					},
					pieces: [{
						value: 0,
						color: COLORS[0]
					}, {
						min: 1,
						max: 9,
						color: COLORS[1]
					}, {
						min: 10,
						max: 99,
						color: COLORS[2]
					}, {
						min: 100,
						max: 499,
						color: COLORS[3]
					}, {
						min: 500,
						max: 999,
						color: COLORS[4]
					}, {
						min: 1000,
						max: 10000,
						color: COLORS[5]
					}, {
						min: 10000,
						color: COLORS[6]
					}],
					inRange: {
						color: COLORS
					},
					show: true
				},
				geo: {
					map: 'china',
					roam: false,
					zoom: 1.2,
					label: {
						normal: {
							show: true,
							fontSize: '6',
							color: 'rgba(0,0,0,0.7)'
						}
					},
					itemStyle: {
						normal: {
							borderColor: 'rgba(0, 0, 0, 0.2)'
						},
						emphasis: {
							areaColor: '#F3B329', //⿏
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							shadowBlur: 20,
							borderWidth: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				},
				series: [{
					name: '信息量',
					type: 'map',
					geoIndex: 0,
					data: dataList //图表的数据
				}]
			}
			map.setOption(option);

			var option2 = { //配置项
				tooltip: { //
					formatter: function(params, ticket, callback) {
						return params.name + '：' + params.value
					} //数据格式化
				},
				backgroundColor: '#eeeeee', //背景
				visualMap: {
					type: 'piecewise',
					orient: 'vertical',
					left: 'left',
					top: 'bottom',
					textStyle: {
						fontSize: 5,
					},
					pieces: [{
						value: 0,
						color: COLORS[0]
					}, {
						min: 1,
						max: 9,
						color: COLORS[1]
					}, {
						min: 10,
						max: 99,
						color: COLORS[2]
					}, {
						min: 100,
						max: 499,
						color: COLORS[3]
					}, {
						min: 500,
						max: 999,
						color: COLORS[4]
					}, {
						min: 1000,
						max: 10000,
						color: COLORS[5]
					}, {
						min: 10000,
						color: COLORS[6]
					}],
					inRange: {
						color: COLORS
					},
					show: true
				},
				geo: {
					map: 'JingSu',
					roam: false,
					zoom: 1.3,
					label: {
						normal: {
							show: true,
							fontSize: '6',
							color: 'rgba(0,0,0,0.7)'
						}
					},
					itemStyle: {
						normal: {
							borderColor: 'rgba(0, 0, 0, 0.2)'
						},
						emphasis: {
							areaColor: '#F3B329',
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							shadowBlur: 20,
							borderWidth: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
				}
				},
				series: [{
					name: '信息量',
					type: 'map',
					geoIndex: 0,
					data: dataList2
				}]
			}
			map2.setOption(option2);
		},
		beforeDestroy() {
			clearInterval(this.updateTimer);
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100vw;
		background-color: #fffFFF;
		font-size: 14rpx;
		line-height: 24rpx;
		.local-message {
			display: flex;
			flex-direction: column;
			border-radius: 12px;
			margin: 16rpx 10rpx;
			padding: 4px 8px;
			.title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #4169E1;
				font-size: 24rpx;
				font-family: "STKaiti";
				margin-top: 16rpx;
				margin-bottom: 12rpx;
			}

			.total_message {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
				flex-wrap: wrap;
				margin: 8rpx 8rpx 12rpx 8rpx;
			}

			.detail_message {
				display: flex;
				flex-direction: column;
				text-align: center;
				justify-content: space-around;
				width: 23%;
				min-height: 160rpx;
				border-radius: 16rpx;
				color: white;
				background-color: #00BFFF;
			}
		}

		.epidemic-information {
			display: flex;
			flex-direction: column;
			margin: 8rpx 10rpx;
			padding: 4rpx 8rpx;
			border-radius: 12rpx;

			.national-map {
				display: flex;
				margin: 10rpx 6rpx 6rpx 6rpx;
				padding: 6rpx 4rpx;
				border-radius: 12px;
				margin-top: 12rpx;
				height: 320rpx;
			}
		}

		.sampling-point {
			display: flex;
			flex-direction: column;
			background-color: #fffFFF;
			margin: 8rpx 10rpx;
			padding: 4rpx 8rpx;
			.monitor-group {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
				flex-wrap: wrap;
				.monitor {
					display: flex;
					flex-direction: column;
					border: 2rpx solid grey;
					background-color: #fffFFF;
					border-radius: 12px;
					margin: 12rpx 6rpx 10rpx 6rpx;
					padding: 5rpx;
					width: 44%;
					height: 280rpx;
				}
			}

		}
	}
	.monitor-video {
		width: 98%;
		min-height: 80rpx;
		margin: 6rpx auto;
	}

	.detection-progress {
		display: flex;
		flex-direction: column;
		background-color: #fffFFF;
		margin: 8rpx 10rpx;
		padding: 4rpx 8rpx;
		border-radius: 12rpx;
	}
	.charts-box {
		display: flex;
		height: 320rpx;
		margin: 10rpx 6rpx;
		width: 100%;

	}
	
</style>
