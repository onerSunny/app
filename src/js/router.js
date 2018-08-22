import VueRouter from 'vue-router';

import buy from '../component/content/buy.vue';
import nearby from '../component/content/nearby.vue';
import more from '../component/content/more.vue';
import mine from '../component/content/mine.vue';
import login from '../component/login/login.vue';
import register from '../component/login/register.vue';
import option_food from '../component/content/option_food.vue';
import like_food from '../component/content/like_food.vue';
import cart from '../component/content/cart.vue'
import city from '../component/content/city.vue'
import vuex_test from '../component/content/vuex_test.vue'

export default new VueRouter({
	routes:[
		{path:'/buy',component:buy},
		{path:'/nearby',component:nearby},
		{path:'/more',component:more},
		{path:'/mine',component:mine},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/option_food',component:option_food},
		{path:'/like_food/:id/:title',component:like_food},
		{path:'/cart',component:cart},
		{path:'/city',component:city},
		{path:'/vuex_test',component:vuex_test},
		{path:'',component:buy}
	]
})