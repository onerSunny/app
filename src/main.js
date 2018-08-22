import Vue from 'vue'
import App from './App.vue'
import VurRouter from 'vue-router'
import {Swipe,SwipeItem} from 'mint-ui'
import axios from 'axios'
import $ from 'zepto'
import Vuex from 'vuex'

// 引入外部的路由
import router from './js/router.js'
import '../node_modules/mint-ui/lib/style.min.css'
import './assets/font/font_f0335mpd45f/iconfont.css'
import './assets/font/font_mwqec0j2dyo/iconfont.css'
import './assets/font/font_mpdn1iycab/iconfont.css'

Vue.use(VurRouter)
Vue.use({Swipe,SwipeItem})
Vue.prototype.$axios=axios
Vue.use(Vuex)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

const store = new Vuex.Store({
	// state相当于data
	// 使用数据 this.$store.state.数据名
	// this.$store.state.count++可以通过该方式控制数据，但是工作中禁止这样操作，可以直接使用mutations内部的方法
	state:{
		count: 0
	},
	// mutations相当于methods
	// this.$store.commit('方法名',参数)
	mutations:{
		increment(state){
			state.count++
		},
		jian(state,a){
			state.count-=a
			
		}
	},
	getters:{
		getNum(state){
			return '商品数量'+state.count
		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store
})
