<template id="city">
	<main class="city">
		<div class="top">
			<router-link to="/buy">
				<i class="iconfont icon-jiaocha"></i>
			</router-link>
			<input type="text" placeholder="请输入城市名">
		</div>
		<p>当前城市：厦门</p>
		<div class="hotcity">
			<p>热门城市</p>
			<ul>
				<li v-for="v in hotcity">
					{{v}}
				</li>
			</ul>
		</div>
		<div class="allcity">
			<p>所有城市</p>
			<ul>
				<li v-for="v in allcity">
					{{v}}
				</li>
			</ul>
		</div>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				hotcity:'',
				allcity:''
			}
		},
		mounted(){
			this.$axios({
				method:'get',
				url:'src/data/city.json',
			}).then((response)=>{
				this.hotcity=response.data.hotcity;
				this.allcity=response.data.allcity;
			}).catch((response)=>{
				console.log(response);
			})
			

		}
	}
</script>

<style scoped>
	.city{
		padding: 20px;
		box-sizing: border-box;
	}
	.city .top{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: pink;
		overflow: hidden;
	}
	.city .top a{
		text-decoration: none;
	}
	.city .top i{
		width: 10%;
		float: left;
	}
	.city .top input{
		width: 85%;
		float: left;
		line-height: 20px;
		border-radius: 10px;
		border: none;
		padding-left: 5px;
		margin-top: 4px;
		margin-left: 2%;
	}
	.city>p{
		color: red;
	}
	.city .hotcity ul{
		width: 100%;
		overflow: hidden;
	}
	.city .hotcity ul li,.city .allcity ul li{
		width: 70px;
		height: 30px;
		/* background: lightblue; */
		border: 1px solid #ccc;
		border-radius: 10px;
		color: #555;
		margin-top: 10px;
		margin-left: 10px;
		text-align: center;
		line-height: 30px;
		float: left;
	}
	.city .allcity ul li{

	}
</style>