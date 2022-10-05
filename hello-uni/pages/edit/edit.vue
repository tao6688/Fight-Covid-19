<template>
	<view class="edit-page">
		<view class="top-area"></view>
		<view class="edit-area">
			<form action="">
				<view class="edit-item upload-picture">
					<view class="outline">请上传图片</view>
					<u-upload
							:fileList="fileList1"
							@afterRead="afterRead"
							@delete="deletePic"
							name="1"
							multiple
							:maxCount="10"
						></u-upload>
				</view>
				<view class="edit-item edit-title">
					<view class="outline">请添加标题</view>
					<input type="text" placeholder="请添加标题" />
				</view>
				<view class="edit-item edit-introduction">
					<view class="outline">请添加帖子简介</view>
					<textarea name="" id="" cols="30" rows="10" placeholder="请添加帖子简介"></textarea>
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
<script>
	export default {
		data() {
			return {
				fileList1: [],
			}
		},
		methods:{
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}

	}
</script>
<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
	.edit-page {
		.top-area {
			width: 100%;
			height: 320rpx;
			background: url("https://img1.imgtp.com/2022/10/03/ychIeyli.jpg") no-repeat center;
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
			.edit-introduction {
				textarea {
					margin: auto;
					width: 95%;
					height: 200rpx;
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
				background-color: #38bfff;
				color: #fff;
				}
		}
	}
</style>