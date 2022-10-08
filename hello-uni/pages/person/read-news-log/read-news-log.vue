<template>
	<view class="container">
		<uni-list >
			<uni-list-item v-for="(item, index) in postList" :key="index">
				<template v-slot:body>
					<view class="item">
						<text>{{item.title}}</text>
						<uni-dateformat class="article-date" :date="item.last_time" format="yyyy-MM-dd hh:mm"
							:threshold="[0, 0]" />
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	const db = uniCloud.database();
	
	export default {
		data() {
			return {
				postList: [
					{
						title: '标题1',
						last_time: '2020-11-03'
					},
					{
						title: '标题1',
						last_time: '2020-11-03'
					}
				]
			}
		},
		onLoad() {
			this.showPost()
		},
		methods: {
			async showPost() {
				let {result} = await db.collection('opendb-news-articles').where({
				  user_id: '123'
				}).get()
				this.postList = result.data
			}
		}
	}
</script>

<style>
	page {
		background-color: #eee;
	}
	.item{
		display: flex;
		flex-direction: column;
	}
	.article-date {
		color: #C8C7CC;
	}
</style>
