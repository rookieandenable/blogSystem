import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'font-awesome/css/font-awesome.min.css'

import router from './router/index.js'

Vue.use(VueResource)
// 按需引入element
import { Button, Message, MessageBox, Notification, Popover, Tag, Input,Tabs,Carousel,TabPane } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const components = [Button, Message, MessageBox, Notification, Popover, Tag, Input,Tabs,Carousel,TabPane]

components.forEach((item) => {
  Vue.component(item.name, item)
})

const MsgBox = MessageBox
Vue.prototype.$msgbox = MsgBox
Vue.prototype.$alert = MsgBox.alert
Vue.prototype.$confirm = MsgBox.confirm
Vue.prototype.$prompt = MsgBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
