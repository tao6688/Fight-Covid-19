<template>
	<view class="center">
		<view class="userInfo" @click.capture="toUserInfo">
			<cloud-image width="150rpx" height="150rpx" v-if="hasLogin && userInfo.avatar_file && userInfo.avatar_file.url"></cloud-image>
			<image v-else class="logo-img" src="@/static/uni-center/defaultAvatarUrl.png"></image>
			<view class="logo-title">
				<text class="uer-name" v-if="hasLogin">{{userInfo.nickname||userInfo.username||userInfo.mobile}}</text>
				<text class="uer-name" v-else>您好，住户</text>
			</view>
		</view>
		<uni-grid class="grid" :column="4" :showBorder="false" :square="true">
			<uni-grid-item class="item" v-for="(item, index) in gridList" :key="index">
				<text>{{item.value}}</text>
				<text style="font-size: 12px;color: #919293;">{{item.name}}</text>
			</uni-grid-item>
		</uni-grid>
		<uni-list class="center-list" v-for="(sublist, index) in ucenterList" :key="index">
			<uni-list-item v-for="(item, i) in sublist" :title="item.title" link :rightText="item.rightText" :key="i" :clickable="true" :to="item.to" @click="ucenterListClick(item)" :showExtraIcon="true" :extraIcon="{type:item.icon,color:'#999'}">
				<template v-slot:footer>
					<view v-if="item.showBadge" class="item-footer">
						<text class="item-footer-text">{{item.rightText}}</text>
						<view class="item-footer-badge"></view>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>



<script>
	const db = uniCloud.database();
	import {store, mutations} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		data() {
			return {
				gridList: [
					{
						value: 'XX',
						name: '余额'
					},
					{
						value: 'XX',
						name: '本周核酸次数'
					},
					{
						value: 'XX',
						name: '核酸总次数'
					},
					{
						value: 'XX',
						name: '下次检测时间'
					}
				],
				ucenterList: [
					[
						// #ifdef APP-PLUS
						{
							"title": '签到有奖',
							"event": 'signInByAd',
							"icon": "compose"
						}
						//#endif
						{
							"title": '阅读过的帖子',
							"to": '/pages/person/read-news-log/read-news-log',
							"icon": "flag"
						},
						{
							"title": '我的积分',
							"to": '',
							"event": 'getScore',
							"icon": "paperplane"
						}
					],
					[{
						"title": '问题与反馈',
						"to": '/pages/person/feedback/feedback',
						"icon": "help"
					}, {
						"title": '设置',
						"to": '/pages/person/settings/settings',
						"icon": "gear"
					}],
					[{
						"title": '关于',
						"to": '/pages/person/about/about',
						"icon": "info"
					}],
				],
				listStyles: {
					"height": "150rpx", // 边框高度
					"width": "150rpx", // 边框宽度
					"border": { // 如果为 Boolean 值，可以控制边框显示与否
						"color": "#eee", // 边框颜色
						"width": "1px", // 边框宽度
						"style": "solid", // 边框样式
						"radius": "100%" // 边框圆角，支持百分比
					}
				}
			}
		},
		onLoad() {
			this.showGraidlist()
		},
		computed: {
			userInfo() {
				return store.userInfo
			},
			hasLogin() {
				return store.hasLogin
			}
		},
		methods: {
			/**
			 * 获取gridlist数据
			 */
			async showGraidlist(){
				const show = uniCloud.importObject("person-grid")
				let {data} = await show.showDetail()
				this.gridList.forEach((item,index) => {
					item.value = data[index]
				})
			},
			
			toUserInfo() {
				console.log("toUserInfo点击了");
				uni.navigateTo({
					url: '/uni_modules/uni-id-pages/pages/userinfo/userinfo'
				})
			},
			/**
			 * 个人中心项目列表点击事件
			 */
			ucenterListClick(item) {
				if (!item.to && item.event) {
					this[item.event]();
				}
			},
			/**
			 * 获取积分信息
			 */
			getScore() {
				// if(!this.userInfo) return uni.showToast({
				// 	title: '请登录后查看积分',
				// 	icon: 'none'
				// });
				// uni.showLoading({
				// 	mask:true
				// })
				uni.showModal({
					title:"积分",
					content: "当前积分：32分",
				})
				db.collection("uni-id-scores").where('"user_id" == $env.uid').field('score,balance').orderBy("create_date","desc").limit(1).get().then((res) => {
					console.log("获取积分返回",res);
				})
			}
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}
	
	page {
		background-color: #f8f8f8;
	}
	/* #endif*/
	
	.center {
		flex: 1;
		flex-direction: column;
		background-color: #f8f8f8;
	}
	
	.userInfo {
		padding: 20rpx;
		padding-top: 50px;
		background-image: url(../../static/uni-center/headers.png);
		flex-direction: column;
		align-items: center;
	}
	
	.logo-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
	}
	
	.logo-title {
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
	
	.uer-name {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 38rpx;
		color: #FFFFFF;
	}
	
	.center-list {
		margin-bottom: 30rpx;
		background-color: #f9f9f9;
	}
	
	.center-list-cell {
		width: 750rpx;
		background-color: #007AFF;
		height: 40rpx;
	}
	
	.grid {
		background-color: #FFFFFF;
		margin-bottom: 6px;
	}
	
	.uni-grid .text {
		font-size: 16rpx;
		height: 20rpx;
		line-height: 20rpx;
		color: #817f82;
	}
	
	.uni-grid .item ::v-deep .uni-grid-item__box {
		justify-content: center;
		align-items: center;
	}
	
	
	/*修改边线粗细示例*/
	/* #ifndef APP-NVUE */
	.center-list ::v-deep .uni-list--border:after {
		-webkit-transform: scaleY(0.2);
		transform: scaleY(0.2);
		margin-left: 80rpx;
	}
	
	.center-list ::v-deep .uni-list--border-top,
	.center-list ::v-deep .uni-list--border-bottom {
		display: none;
	}
	
	/* #endif */
	.item-footer {
		flex-direction: row;
		align-items: center;
	}
	
	.item-footer-text {
		color: #999;
		font-size: 24rpx;
		padding-right: 10rpx;
	}
	
	.item-footer-badge {
		width: 20rpx;
		height: 20rpx;
		/* #ifndef APP-NVUE */
		border-radius: 50%;
		/* #endif */
		/* #ifdef APP-NVUE */
		border-radius: 10rpx;
		/* #endif */
		background-color: #DD524D;
	}
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