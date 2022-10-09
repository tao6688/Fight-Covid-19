<template>
	<view class="post-detail">
		<!-- 头部的照片 -->
		<view class="top-area"></view>
		<!-- 照片下面的详情 -->
		<view class="detail-area">
			<!-- 详情头部：标题+简介 -->
			<view class="detail-top">
				<view class="topic">
					{{posts.title}}
				</view>
				<view class="introdution">
					{{posts.introduction}}
				</view>
			</view>

			<!-- 正文 -->
			<view class="detail-text">
				<!-- 头像和用户名字 -->
				<view class="text-top">
					<img src="https://img1.imgtp.com/2022/10/03/zKk6cjDc.jpg">
					<view class="post-name">
						{{posts.user_name}}
					</view>
				</view>
				<!-- 文字 -->
				<view class="text-content">
					{{posts.content}}
				</view>
				<!-- 点赞评价的图标 -->
				<view class="item-features">
					<view class="feature browse">
						<!-- <img src="@/static/imgs/postImg/icon-browse.png" > -->
						<image src="../../static/imgs/postImg/icon-browse.png"></image>
						<view class="num">{{posts.browse_num}}</view>
					</view>
					<view class="feature praise">
						<image src="../../static/imgs/postImg/icon-praise.png" @click="add_praise"></image>
						<view class="num">{{posts.praise_num}}</view>
					</view>
					<view class="feature comment" url="../edit/edit">
						<image src="../../static/imgs/postImg/icon-comment.png"></image>
						<view class="num">{{posts.comment_num}}</view>
					</view>
				</view>
			</view>

			<!-- 评价输入框 -->
			<view class="input-comment">
				<input type="text" placeholder="评价千万条 友善第一条" @input="get_comment">
				<button @click="add_comment">发布</button>
			</view>

			<!-- 详细的评价 -->
			<view class="detail-comment">
				<view class="comment-list" v-for="(com,index) in comments" :key="index">
					<view class="text-top">
						<img :src="com.user_picture" alt="">
						<view class="post-name">
							{{com.user_name}}
						</view>
						<view class="comment">
							{{com.user_content}}
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"",
				article_id: "",
				// post: {
				// 	post_id: 1,
				// 	post_name: "匿名用户",
				// 	post_img: 'https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg',
				// 	post_title: '这是标题1',
				// 	post_introdution: '这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1这是简介1',
				// 	post_browse_num: 399,
				// 	post_praise_num: 77,
				// 	post_comment_num: 10,
				// 	post_content: '这是文章内容1这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
				// 	post_edit_time: '2022-9-30 12:00',
				// 	post_comment: [{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价1这是评价1这是评价1这是评价1这是评价1这是评价1这是评价1这是评价1这是评价1"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价2"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价3"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价4"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价5"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价6"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价7"
				// 		},
				// 		{
				// 			comment_name: "匿名用户",
				// 			comment_img: "https: //img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
				// 				comment_text: "这是评价8"
				// 		}

				// 	]
				// },
				posts: {},
				comments:{}
			}
		},
		methods: {
		
			get_comment(e){
				this.text = e.target.value;
				
			},
			add_praise() {
				// this.post.post_praise_num += 1;
			},
			add_comment() {
				var com = {
					user_name: "匿名用户",
					user_picture: "https://img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
					user_content: this.text,
					post_id:this.posts._id
				};
				console.log('发布评论');
				this.comments.push(com);
				uniCloud.callFunction({
					name: "article",
					data: {
						type:"add_com",
						user_name: "匿名用户",
						user_picture: "https://img1.imgtp.com/2022/10/03/zKk6cjDc.jpg",
						user_content: this.text,
						post_id:this.posts._id
					},
					success: (res) => {
						uni.showToast({
							title: "发布成功",
							icon: 'success',
							duration: 1000
						})
						// setTimeout(()=>{
						// 	uni.switchTab({
						// 		url: "/pages/post/post"
						// 	})
						// },2000)
					},
					fail: (err) => {
						console.log(err);
					}
				})
			}
		},
		onLoad(e) {
			this.article_id = e.id
			uniCloud.callFunction({
				name: "article",
				data: {
					type: "detail",
					id: this.article_id
				},
				success: (res) => {
					this.posts = res.result.data[0]
				},
				fail: (err) => {
					console.log(err);
				}
			});
			// 根据id找评价
			uniCloud.callFunction({
				name:"article",
				data:{
					type:"comment",
					id:this.article_id
				},
				success: (res) => {
					this.comments = res.result.data
				},
				fail: (err) => {
					console.log(err);
				}
			})
		}
	}
</script>

<style lang="scss">
	.post-detail {
		height: 100%;
		background-color: rgb(246, 246, 246);

		.detail-area {
			width: 90%;
			margin: 8px auto;


		}

		.top-area {
			width: 100%;
			height: 320rpx;
			background: url("https://img1.imgtp.com/2022/10/03/ychIeyli.jpg") no-repeat center;
			background-size: 100% 100%;

		}

		.topic {

			font-size: 25px;
			font-weight: 600;

		}

		.introdution {
			margin: 8px 0;
		}

		.text {
			font-size: 16px;
		}

		.comment-list {
			margin: 20px 0;
		}

		.detail-top {
			padding: 0 14px;
			padding-top: 5px;
			background-color: #fff;
			border: 2rpx solid #BFBFBF;
			border-radius: 20rpx;
		}

		.detail-text {
			margin: 20px 0;
			padding: 10px 14px;
			background-color: #fff;
			border: 2rpx solid #BFBFBF;
			border-radius: 20rpx;
		}

		.detail-comment {
			margin-top: 20px;
			padding: 0 14px;
			background-color: #fff;
			border: 2rpx solid #BFBFBF;
			border-radius: 20rpx;
		}

		.input-comment {

			position: relative;
			border-collapse: collapse;

			input {
				width: 78%;
				height: 84rpx;
				background-color: #ffffff;
				border: 2rpx solid #BFBFBF;
				border-radius: 20rpx;
				padding: 0 20rpx;
				box-sizing: border-box;
				font-size: 32rpx;
				color: #767676;
			}


			button {
				position: absolute;
				right: 0;
				top: 0;
				width: 20%;
				height: 84rpx;
				font-size: 15px;
				;
				border: 2rpx solid #BFBFBF;
				border-radius: 20rpx;
			}

		}

		.text-top {
			img {
				float: left;
				margin-right: 10rpx;
				width: 50px;
				height: 50px;
			}

			.post-name {
				padding-top: 10px;
				font-size: 18px;
				font-weight: 600;
			}

			.comment {
				margin-top: 10px;
				margin-left: 35px;
			}
		}

		.detail-comment {
			.text-top {
				img {
					width: 30px;
					height: 30px;
				}

				.post-name {
					padding-top: 0;
					left: 35px;
					top: 3px;
					font-size: 15px;
					font-weight: 600;
				}
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

		.text-content {
			margin-top: 27px;
			// margin-left:30px;
		}
	}
</style>
