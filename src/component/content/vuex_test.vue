<template id="vuex_test">
	<main>
		<h2>{{this.$store.state.count}}</h2>
		<button @click="add">添加到购物车</button>
	</main>
</template>

<script>
	export default{
		methods:{
			add(){
				// this.$store.state.count++
				this.$store.commit('jian',2)
			}
		}
	}
</script>