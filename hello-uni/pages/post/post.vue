<template>
	<view class="post-page">
		<view class="top-area">
			<!-- <input type="text" placeholder="搜索帖子" /> -->
		</view>
		<!-- <view class="classify">
			<view class="active classify-item">全部</view>
			<view class="classify-item">按地区</view>
		</view> -->
		<view class="post-list">
			<view class="post-list-item" v-for="(post,index) in posts" :key="index" @click="goToDetail(post._id)">
				<view class="item-title">{{post.title}}</view>
				<view class="item-wrapper">
					<image :src="post.picture" mode="widthFix"></image>
					<view class="item-introdution">{{post.introduction}}</view>
				</view>
				<!-- <view class="item-features">
					<view class="feature browse">
						<image src="../../static/imgs/postImg/icon-browse.png"></image>
						<view class="num">{{post.browse_num}}</view>
					</view>
					<view class="feature praise">
						<image src="../../static/imgs/postImg/icon-praise.png" ></image>
						<view class="num">{{post.praise_num}}</view>
					</view>
					<view class="feature comment" url="../edit/edit">
						<image src="../../static/imgs/postImg/icon-comment.png"></image>
						<view class="num">{{post.comment_num}}</view>
					</view>
				</view> -->
			</view>
		</view>
		<navigator class="go-to-post" url="../edit/edit">
			<image src="../../static/imgs/postImg/post.png" mode="widthFix"></image>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posts: [
					// {
					// 	post_id: 1,
					// 	post_title: '这是标题1',
					// 	post_picture: 'https://img1.imgtp.com/2022/09/30/eyqX5vbv.png',
					// 	post_introdution: '这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1',
					// 	post_browse_num: 100,
					// 	post_praise_num: 20,
					// 	post_comment_num: 10,
					// 	post_content: '这是文章内容1这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
					// 	post_edit_time: '2022-9-30 12:00'	
					// },
					// {
					// 	post_id: 2,
					// 	post_title: '这是标题2',
					// 	post_picture: 'https://img1.imgtp.com/2022/09/30/vMJivLAv.png',
					// 	post_introdution: '这是简介2这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
					// 	post_browse_num: 70,
					// 	post_praise_num: 10,
					// 	post_comment_num: 10,
					// 	post_content: '这是文章内容2这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
					// 	post_edit_time: '2022-9-30 12:07'	
					// },
					// {
					// 	post_id: 2,
					// 	post_title: '这是标题3',
					// 	post_picture: 'https://img1.imgtp.com/2022/09/30/vMJivLAv.png',
					// 	post_introdution: '这是简介3这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
					// 	post_browse_num: 50,
					// 	post_praise_num: 25,
					// 	post_comment_num: 14,
					// 	post_content: '这是文章内容3这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
					// 	post_edit_time: '2022-9-30 12:10'	
					// }
				]
			}
		},
		methods: {
			goToDetail(article_id) {
				uni.navigateTo({
					url:`/pages/post_detail/post_detail?id=${article_id}`
				})
			}
		},
		onShow() {
			uniCloud.callFunction({
				name: "article",
				data: {
					type:"list"
				},
				success: (res) => {
					this.posts = res.result.data
				},
				fail: (err) => {
					console.log(err);
				}
			})
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
	.post-page {
		position: relative;
		.top-area {
			position: relative;
			width: 100%;
			height: 320rpx;
			background: url("https://img1.imgtp.com/2022/10/03/ychIeyli.jpg") no-repeat center;
			background-size: 100% 100%;
			input {
				position: absolute;
				bottom: 40rpx;
				left: 50%;
				transform: translateX(-50%);
				width: 80%;
				height: 84rpx;
				background-color: #ffffff;
				border: 2rpx solid #BFBFBF;
				border-radius: 20rpx;
				padding: 0 20rpx;
				box-sizing: border-box;
				font-size: 32rpx;
				color: #767676;
			}
		}
		.classify {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 80rpx;
			background-color: #ffffff;
			line-height: 80rpx;
			.classify-item {
				padding: 0 30rpx;
				text-decoration: none;
				font-size: 30rpx;
				color: #3D3D3D;
			}
			.active {
				color: #3662EC;
			}
		}
		.post-list {
			width: 100%;
			background-color: #fff;
			padding: 20rpx 40rpx;
			box-sizing: border-box;
			.post-list-item {
				width: 100%;
				// height: 200rpx;
				border: 2rpx solid #f1f1f1;
				border-radius: 16rpx;
				padding: 16rpx 20rpx 20rpx 20rpx;
				box-sizing: border-box;
				box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				margin-bottom: 20rpx;
				.item-title {
					color: #000;
					font-size: 34rpx;
					font-weight: 600;
				}
				.item-wrapper {
					display: flex;
					flex-direction: row;
					// justify-content: center;
					align-items: center;
					font-size: 30rpx;
					margin-top: 20rpx;
					image {
						width: 130rpx;
						margin-right: 30rpx;
					}
					.item-introdution {
						flex: 1;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
					}
				}
				.item-features {
					width: 60%;
					display: flex;
					justify-content: flex-end;
					flex-direction: row;
					width: 100%;
					height: 40rpx;
					.feature {
						display: flex;
						flex-direction: row;
						align-items: center;
						padding: 0 10rpx;
						image {
							width: 30rpx;
							height: 30rpx;
						}
						.num {
							font-size: 24rpx;
						}
					}
				}
			}
		}
		.go-to-post {
			position: fixed;
			right: 50rpx;
			bottom: 110rpx;
			width: 120rpx;
			height: 120rpx;
			background-color: #38bfff;
			border-radius: 50%;
			padding: 25rpx;
			box-sizing: border-box;
			box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
			image {
				width: 100%;
			}
		}
	}
</style>
