<<<<<<< HEAD
<template>
	<view class="uni-breadcrumb">
		<slot />
	</view>
</template>
=======
<template>
	<view class="uni-breadcrumb">
		<slot />
	</view>
</template>
>>>>>>> 05dbcbb (更新主页面地图及组件)
<script>
	/**
	 * Breadcrumb 面包屑导航父组件
	 * @description 显示当前页面的路径，快速返回之前的任意页面
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=xxx
	 * @property {String} separator 分隔符，默认为斜杠'/'
	 * @property {String} separatorClass 图标分隔符 class
<<<<<<< HEAD
	 */
	export default {
		options: {
			virtualHost: true
		},
		props: {
			separator: {
				type: String,
				default: '/'
			},
			separatorClass: {
				type: String,
				default: ''
			}
		},

		provide() {
			return {
				uniBreadcrumb: this
			}
		}

	}
</script>
<style lang="scss">
	.uni-breadcrumb {
		display: flex;
	}
=======
	 */
	export default {
		options: {
			virtualHost: true
		},
		props: {
			separator: {
				type: String,
				default: '/'
			},
			separatorClass: {
				type: String,
				default: ''
			}
		},

		provide() {
			return {
				uniBreadcrumb: this
			}
		}

	}
</script>
<style lang="scss">
	.uni-breadcrumb {
		display: flex;
	}
>>>>>>> 05dbcbb (更新主页面地图及组件)
</style>
