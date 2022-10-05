<template>
	<view class='store'>
		<index></index>
		<view class='items'>
			<view class='items-small'>
				<image class='items-img' src="../../static/imgs/Storeimg/shangyi.jpg"></image>
				<image class='items-img' src="../../static/imgs/Storeimg/kuzi.jpg"></image>
				<image class='items-img' src="../../static/imgs/Storeimg/xiezi.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import index from '@/components/index/index.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			index
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.items-img{
	padding: 20rpx;
	display: flex;
	flex-direction: 20rpx;
	border: 2rpx solid #CCCCCC; 
	overflow: hidden;
	margin: 20rpx 0; 
}
.items-small{
	width: 100%;
	height: 240rpx;
}
</style>
