
<<<<<<< HEAD
export default {
	data() {
		return {
			
		}
=======
export default {
	data() {
		return {
			
		}
>>>>>>> 05dbcbb (更新主页面地图及组件)
	},
	created(){
		this.popup = this.getParent()
	},
	methods:{
		/**
		 * 获取父元素实例
		 */
		getParent(name = 'uniPopup') {
			let parent = this.$parent;
			let parentName = parent.$options.name;
			while (parentName !== name) {
				parent = parent.$parent;
				if (!parent) return false
				parentName = parent.$options.name;
			}
			return parent;
		},
<<<<<<< HEAD
	}
}
=======
	}
}
>>>>>>> 05dbcbb (更新主页面地图及组件)
