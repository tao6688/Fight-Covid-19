<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image class='swiper-img' src="../../static/imgs/Storeimg/cd6f7f72a133945849c8c26f6a61770529df583b8e6cb-oS5AvC.png"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class='swiper-img' src="../../static/imgs/Storeimg/47dbc0a25083672aeabdea040bd13cabc6cd4c8121450-olXTkV_fw1200.png"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class='swiper-img' src="../../static/imgs/Storeimg/6a42334dad9485140262b01f2ce42bef.png"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"index",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
swiper{
	width: 100%;
	height: 300rpx;
}
.swiper-img{
	width: 100%;
	height: 300rpx;
}
</style>