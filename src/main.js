import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局适用elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//全局适用管理员axio
import axiosguanliyuan from 'network/guanliyuan/axios'
Vue.prototype.$axiosguanliyuan = axiosguanliyuan

//全局使用axiosxingchengorderinfo
import axiosxingchengorderinfo from 'network/xingchengorder/axios'
Vue.prototype.$axiosxingchengorderinfo = axiosxingchengorderinfo

//全局使用axiosgoodsorderinfo
import axiosgoodsorderinfo from 'network/goodsorder/axios'
Vue.prototype.$axiosgoodsorderinfo= axiosgoodsorderinfo

//全局使用axiosuserinfo
import axiosuserinfo from 'network/user/axios'
Vue.prototype.$axiosuserinfo = axiosuserinfo

//全局使用axiosyiliangsan
import axiosyiliangsan from 'network/yiliangsan/axios'
Vue.prototype.$axiosyiliangsan = axiosyiliangsan

//全局使用axiosjingdianchangxian
import axiosjingdianchangxian from 'network/jingdianchangxian/axios'
Vue.prototype.$axiosjingdianchangxian = axiosjingdianchangxian

//全局使用axiosshangchunhuodong
import axiosshangchunhuodong from 'network/shangchunhuodong/axios'
Vue.prototype.$axiosshangchunhuodong = axiosshangchunhuodong


//全局使用axioschangyongzhuangbei
import axioschangyongzhuangbei from 'network/changyongzhuangbei/axios'
Vue.prototype.$axioschangyongzhuangbei = axioschangyongzhuangbei

//全局使用axiosnengliangyinliao
import axiosnengliangyinliao from 'network/nengliangyinliao/axios'
Vue.prototype.$axiosnengliangyinliao = axiosnengliangyinliao

//全局使用事件总线
Vue.prototype.$bus = new Vue()



//使用VantUI库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Toast } from 'vant';
Vue.use(Toast);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
