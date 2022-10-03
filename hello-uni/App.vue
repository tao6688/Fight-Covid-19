<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import "@/uni_modules/uview-ui/index.scss";
	// 设置整个项目的背景色
	page {
		background-color: #D3D3D3;
		// height:100vh;
		width: 100%;
	}

	/* #endif */
	.example-info {
		font-size: 16px;
		color: #333;
		padding: 10px;
	}
</style>
