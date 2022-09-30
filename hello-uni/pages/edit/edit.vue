<template>
	<view class="edit-page">
		<view class="top-area"></view>
		<view class="edit-area">
			<form action="">
				<view class="edit-item upload-picture">
					<view class="outline">请上传图片</view>
					<view class="upload-area">+</view>
				</view>
				<view class="edit-item edit-title">
					<view class="outline">请添加标题</view>
					<input type="text" placeholder="请添加标题" />
				</view>
				<view class="edit-item edit-content">
					<view class="outline">请编辑帖子内容</view>
					<textarea name="" id="" cols="30" rows="10" placeholder="请编辑帖子内容"></textarea>
				</view>
				<button class="post-btn">发布</button>
			</form>
		</view>
	</view>
</template>
<style lang="scss">
	.edit-page {
		.top-area {
			width: 100%;
			height: 320rpx;
			background: url("https://img1.imgtp.com/2022/09/30/XRIQFIpG.png") no-repeat center;
			background-size: 100% 100%;
		}
		.edit-area {
			width: 100%;
			padding: 10rpx 20rpx;
			box-sizing: border-box;
			.edit-item {
				margin-bottom: 20rpx;
				.outline {
					font-size: 30rpx;
					font-weight: 600;
					margin-bottom: 20rpx;
				}
				.upload-area {
					width: 140rpx;
					height: 140rpx;
					margin-top: 10rpx;
					border: 2rpx solid #aaa;
					border-radius: 10rpx;
					font-size: 80rpx;
					color: #aaa;
					display: flex;
					justify-content: center;
					align-items: center;
					// margin-bottom: 10rpx;
				}
				input {
					margin: auto;
					width: 95%;
					height: 80rpx;
					background-color: #fff;
					border-radius: 15rpx;
					padding: 0 20rpx;
					box-sizing: border-box;
					font-size: 28rpx;
				}
				textarea {
					margin: auto;
					width: 95%;
					height: 400rpx;
					background-color: #fff;
					border-radius: 15rpx;
					padding: 20rpx;
					box-sizing: border-box;
					font-size: 28rpx;
				}
			}
			.post-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 95%;
				height: 80rpx;
				font-size: 28rpx;
				background-color: #d7b6a5;
				color: #fff;
				}
		}
	}
</style>