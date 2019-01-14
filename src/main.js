// 引入node_modules中的包
import Vue from 'vue'

// 引入自写文件或第三方类库
import App from './App'
import { router } from './router'
import store from './vuex/store'
import flexible from '../static/js/flexible'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'

// 使用依赖插件
Vue.use(flexible)
Vue.use(ElementUI)

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => {
    return h(App)
  }
})

router.push('/SoftwareVersion')
