<template>
	<view class='recommend'>
		<view class='recommend-items'>
			<image class='items-big'></image>
			<view class='items-small'>
				<image class='items-img' src="../../static/imgs/Storeimg/shangyi.jpg"></image>
				<image class='items-img' src="../../static/imgs/Storeimg/kuzi.jpg"></image>
				<image class='items-img' src="../../static/imgs/Storeimg/xiezi.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
.recommend{
	padding: 20rpx;
	}
.recommend-items{
	display: flex;
	flex-direction: column;
	border-radius: 20rpx;
	border: 2rpx solid #CCCCCC; 
	overflow: hidden;
	margin: 20rpx 0; 
	}
.items-big{
	width: 100%;
	height: 300rpx;
}
.items-small{
	width: 100%;
	height: 240rpx;
}
.items-img{
	width: 33.3333%;
	height: 240rpx;
}
</style>