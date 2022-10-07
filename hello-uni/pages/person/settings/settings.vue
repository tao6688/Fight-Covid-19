<template>
	<view class="content">
		<uni-list class="mt10" :border="false">
			<uni-list-item title="个人资料" link="navigateTo"></uni-list-item>
		    <!-- 判断是否登录，没有登录，跳转到登录页面 -->
			<uni-list-item title="注销账号"></uni-list-item>
		</uni-list>
		<!-- 退出/登录 -->
		<view class="bottom-back">
			<text class="bottom-back-text">登录</text>
			<text class="bottom-back-text">退出</text>
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
	/* #ifndef APP-NVUE */
		page {
			flex: 1;
			width: 100%;
			height: 100%;
		}
	
		uni-button:after {
			border: none;
			border-radius: 0;
		}
		/* #endif */
		.content {
			/* #ifndef APP-NVUE */
			display: flex;
			width: 750rpx;
			height: 100vh;
			/* #endif */
			flex-direction: column;
			flex: 1;
			background-color: #F9F9F9;
		}
	
		.bottom-back {
			margin-top: 10px;
			width: 750rpx;
			height: 44px;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			justify-content: center;
			align-items: center;
			/* #ifndef APP-NVUE */
			border: none;
			/* #endif */
			border-width: 0;
			border-radius: 0;
			background-color: #FFFFFF;
		}
	
		.bottom-back-text {
			font-size: 33rpx;
		}
	
		.mt10 {
			margin-top: 10px;
		}
		/* #ifndef APP-NVUE  || VUE3 */
		.content ::v-deep .uni-list {
			background-color: #F9F9F9;
		}
		.content ::v-deep .uni-list-item--disabled,.list-item {
			height: 50px;
			margin-bottom: 1px;
		}
		/* #endif */

</style>
