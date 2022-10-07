<template>
	<view class="uni-container">
		<uni-forms ref="form" :value="formData" validate-trigger="submit" err-show-type="toast" label-width="150rpx">
			<uni-forms-item name="content" label="留言内容" required>
				<textarea @input="binddata('content', $event.detail.value)" class="uni-textarea-border"
									v-model="formData.content" trim="right"></textarea>
			</uni-forms-item>
			<uni-forms-item name="content" label="图片列表">
				<uni-file-picker fileMediatype="image" :limit="6" returnType="array" v-model="formData.imgs"></uni-file-picker>
			</uni-forms-item>
			<uni-forms-item name="content" label="联系人">
				<uni-easyinput v-model="formData.contact" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="联系电话">
				<uni-easyinput v-model="formData.mobile" trim="both"></uni-easyinput>
			</uni-forms-item>
			<view class="uni-button-group">
				<button type="primary" class="uni-button" @click="submit">提交</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	const db = uniCloud.database();
	
	export default {
		data() {
			let formData = {
				"content": "",
				"imgs": [],
				"contact": "",
				"mobile": ""
			}
			return {
				formData,
				rules: {
					
				}
			}
		},
		methods: {
			submit(value) {
				uni.showLoading({
					mask:true
				})
				console.log("value",value)
				// 校验成功之后提交
				db.collection("feedback").add(value).then((res) => {
					uni.showToast({
						icon: 'none',
						title: '提交成功'
					})
					setTimeout(() => uni.navigateBack(), 500)
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				}).finally(() => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f8f8f8;
	}
	.uni-container {
		padding: 20px;
	}
	.uni-input-border,
	.uni-textarea-border {
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}
	
	.uni-input-border {
		padding: 0 10px;
		height: 35px;
	
	}
	
	.uni-textarea-border {
		padding: 10px;
		height: 80px;
	}
	
	.uni-button-group {
		margin-top: 50px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
	}
	
	.uni-button {
		width: 184px;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
		line-height: 1;
		margin: 0;
	}
</style>
