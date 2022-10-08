<template>
	<view class='store'>
		<index></index>
		<recommend></recommend>
	</view>
</template>

<script>
	import index from '@/components/index/index.vue'
	import recommend from '@/components/index/recommend.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			index,
			recommend
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>
