<<<<<<< HEAD
<template>
	<!-- #ifdef H5 -->
	<tbody>
		<slot></slot>
	</tbody>
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view><slot></slot></view>
	<!-- #endif -->
</template>

<script>
export default {
	name: 'uniBody',
	options: {
		virtualHost: true
	},
	data() {
		return {
			
		}
	},
	created() {},
	methods: {}
}
</script>

<style>
=======
<<<<<<< HEAD
<template>
	<!-- #ifdef H5 -->
	<tbody>
		<slot></slot>
	</tbody>
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view><slot></slot></view>
	<!-- #endif -->
</template>

<script>
export default {
	name: 'uniBody',
	options: {
		virtualHost: true
	},
	data() {
		return {
			
		}
	},
	created() {},
	methods: {}
}
</script>

<style>
=======
<template>
	<!-- #ifdef H5 -->
	<tbody>
		<slot></slot>
	</tbody>
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view><slot></slot></view>
	<!-- #endif -->
</template>

<script>
export default {
	name: 'uniBody',
	options: {
		virtualHost: true
	},
	data() {
		return {
			
		}
	},
	created() {},
	methods: {}
}
</script>

<style>
>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
</style>
