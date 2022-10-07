<template>
	<!-- #ifdef APP-NVUE -->
	<text :style="{ color: color, 'font-size': iconSize }" class="uni-icons" @click="_onClick">{{unicode}}</text>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<text :style="{ color: color, 'font-size': iconSize }" class="uni-icons" :class="['uniui-'+type,customPrefix,customPrefix?type:'']" @click="_onClick"></text>
<<<<<<< HEAD
	<!-- #endif -->
</template>

<script>
=======
<<<<<<< HEAD
	<!-- #endif -->
</template>

<script>
=======
	<!-- #endif -->
</template>

<script>
>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
	import icons from './icons.js';
	const getVal = (val) => {
		const reg = /^[0-9]*$/g
		return (typeof val === 'number' ||　reg.test(val) )? val + 'px' : val;
<<<<<<< HEAD
	} 
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	import iconUrl from './uniicons.ttf'
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('"+iconUrl+"')"
	});
	// #endif

	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @property {String} customPrefix 自定义图标
	 * @event {Function} click 点击 Icon 触发事件
	 */
	export default {
		name: 'UniIcons',
		emits:['click'],
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
=======
<<<<<<< HEAD
	} 
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	import iconUrl from './uniicons.ttf'
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('"+iconUrl+"')"
	});
	// #endif

	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @property {String} customPrefix 自定义图标
	 * @event {Function} click 点击 Icon 触发事件
	 */
	export default {
		name: 'UniIcons',
		emits:['click'],
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
=======
	} 
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	import iconUrl from './uniicons.ttf'
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('"+iconUrl+"')"
	});
	// #endif

	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @property {String} customPrefix 自定义图标
	 * @event {Function} click 点击 Icon 触发事件
	 */
	export default {
		name: 'UniIcons',
		emits:['click'],
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
			},
			customPrefix:{
				type: String,
				default: ''
<<<<<<< HEAD
			}
		},
		data() {
			return {
				icons: icons.glyphs
			}
=======
<<<<<<< HEAD
			}
		},
		data() {
			return {
				icons: icons.glyphs
			}
=======
			}
		},
		data() {
			return {
				icons: icons.glyphs
			}
>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
		},
		computed:{
			unicode(){
				let code = this.icons.find(v=>v.font_class === this.type)
				if(code){
					return unescape(`%u${code.unicode}`)
				}
				return ''
			},
			iconSize(){
				return getVal(this.size)
			}
<<<<<<< HEAD
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	@import './uniicons.css';
	@font-face {
		font-family: uniicons;
		src: url('./uniicons.ttf') format('truetype');
	}

	/* #endif */
	.uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
	}

=======
<<<<<<< HEAD
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	@import './uniicons.css';
	@font-face {
		font-family: uniicons;
		src: url('./uniicons.ttf') format('truetype');
	}

	/* #endif */
	.uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
	}

=======
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	@import './uniicons.css';
	@font-face {
		font-family: uniicons;
		src: url('./uniicons.ttf') format('truetype');
	}

	/* #endif */
	.uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
	}

>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
</style>
