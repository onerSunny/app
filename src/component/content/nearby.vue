<template id="nearby">
	<main class="nearby">
		<!-- top -->
		<div class="t_top">
			<div class="top">
				<div class="t_left">
					<i class="iconfont icon-xiangzuo" @click="back"></i>
				</div>
				<div class="t_center">
					<span>附近</span>
				</div>
				<div class="t_right">
					<i class="iconfont icon-search"></i>
					<router-link to="/cart">
						<i class="iconfont icon-gouwuche"></i>
					</router-link>
				</div>
			</div>
			<ul>
				<li>
					<span>全部类型</span>
					<i class="iconfont icon-xiala"></i>
				</li>
				<li>
					<span>3km</span>
					<i class="iconfont icon-xiala"></i>
				</li>
				<li>
					<span>距离优先</span>
					<i class="iconfont icon-xiala"></i>
				</li>
				<li>
					<span>筛选</span>
					<i class="iconfont icon-xiala"></i>
				</li>
			</ul>
		</div>
		<!-- shop -->
		<div class="s_shop">
			<div class="shop" v-for="v in shop">
				<h2>{{v.shopname}}</h2>
				<div class="com">
					<span class="sp1">
						<i class="iconfont icon-shoucang1"></i>
						<i class="iconfont icon-shoucang1"></i>
						<i class="iconfont icon-shoucang1"></i>
						<i class="iconfont icon-shoucang1"></i>
						{{v.grade}}
					</span>
					<span class="sp2">{{v.com}}</span>
					<span class="sp3">{{v.place}}</span>
				</div>
				<ul>
					<li v-for="v2 in v.cons">
						<div class="left">
							<img :src="v2.pic">
						</div>
						<div class="right">
							<h3>{{v2.title}}</h3>
							<p>{{v2.info}}</p>
							<div class="r_bottom">
								<span class="sp1">{{v2.price}}</span>
								<span class="sp2">{{v2.priceed}}</span>
								<span class="sp3">{{v2.saled}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				shop:'',
			}
		},
		mounted(){
			this.$axios({
				method:'get',
				url:'src/data/nearby.json'
			}).then((response)=>{
				console.log(response);
				this.shop=response.data.shop;
			}).catch((response)=>{
				console.log(response)
			})
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.nearby{
		width: 100%;
	}
	.nearby .t_top{
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1;
	}
	/* top */
	.nearby .t_top .top{
		height: 50px;
		width: 100%;
		background: #e72d4c;
		padding: 10px 20px 0px;
		box-sizing: border-box;
	}
	.nearby .top div{
		float: left;
		overflow: hidden;
	}
	.nearby .top div a{
		text-decoration: none;
	}
	.nearby .top .t_left{
		width: 35%;
	}
	.nearby .top .t_center{
		font-size: 16px;
		text-align: center;
		width: 30%;
		position: relative;
		color: white;
		line-height:27px;
	}
	.nearby .top .t_right{
		width: 35%;
	}
	.nearby .top .t_right i{
		float: right;
		margin-left: 10px;
	}
	.nearby .top i{
		color: white;
		font-size: 24px;
	}
	.nearby .top .icon-search{
		padding-top: 2px;
	}
	.nearby .t_top ul{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: white;
		overflow: hidden;
		padding: 0px 20px;
		box-sizing: border-box;
	}
	.nearby .t_top ul li{
		width: 25%;
		float: left;
		font-size: 12px;
		text-align: center;
	}
	/* 店铺 */
	.nearby .s_shop{
		margin-top: 90px;
		margin-bottom: 60px;
	}
	.nearby .shop{
		padding: 15px 20px 0px;
		overflow: hidden;
		border-top: 1px solid #ccc;
	}
	.nearby .shop h2{
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
	}
	.nearby .shop .com{
		height: 35px;
		line-height: 25px;
	}
	.nearby .shop .com i{
		font-size: 12px;
		color: #f7b344;
	}
	.nearby .shop .com span{
		display: inline-block;
		font-size: 12px;
		float: left;
		color: #555;
	}
	.nearby .shop .com .sp1{
		width: 40%;
	}
	.nearby .shop .com .sp2{
		width: 30%;
	}
	.nearby .shop .com .sp3{
		width: 30%;
	}
	.nearby .shop ul li{
		width: 100%;
		float: left;
		display: flex;
		margin-bottom: 20px;
	}
	.nearby .shop ul li .left{
		overflow: hidden;
	}
	.nearby .shop ul li .left img{
		width: 100px;
		height: 70px;
		float: left;
	}
	.nearby .shop ul li .right{
		padding-left: 15px;
		flex-grow: 1;
	}
	.nearby .shop ul li .right h3{
		font-size: 15px;
		line-height: 25px;
	}
	.nearby .shop ul li .right p{
		font-size: 12px;
		color: #555;
		line-height: 25px;
	}
	.nearby .shop ul li .right .r_bottom{
		width: 100%;
	}
	.nearby .shop ul li .right .r_bottom span{
		display: inline-block;
		font-size: 12px;
		float: left;
		line-height: 25px;
	}
	.nearby .shop ul li .right .r_bottom .sp1{
		width: 18%;
		color: red;
	}
	.nearby .shop ul li .right .r_bottom .sp2{
		width: 18%;
		text-decoration: line-through;
		color: #555;
	}
	.nearby .shop ul li .right .r_bottom .sp3{
		width: 64%;
		text-align: right;
		color: #707075;
	}


</style>