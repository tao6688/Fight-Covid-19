
<<<<<<< HEAD
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

App.mpType = 'app';

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
=======
<<<<<<< HEAD
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

App.mpType = 'app';

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
=======
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

App.mpType = 'app';

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 05dbcbb (更新主页面地图及组件)
>>>>>>> 499acd7 (更新中国地图及组件)
// #endif