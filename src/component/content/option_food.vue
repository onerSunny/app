<template id="option_food">
	<main class="option_food">
		<!-- top -->
		<div class="t_top">
			<div class="top">
				<div class="t_left">
					<router-link to="/buy">
					    <i class="iconfont icon-xiangzuo" @click="back"></i>
				    </router-link>
				</div>
				<div class="t_center">
					<span>美食</span>
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
					<span>综合排序</span>
					<i class="iconfont icon-xiala"></i>
				</li>
				<li>
					<span>好评优先</span>
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
		<!-- 美食 -->
		<div class="like">
			<ul>
				<li v-for="v in like">
					<div class="left">
						<img :src="v.pic">
					</div>
					<div class="right">
						<div class="r_top">
							<h3>{{v.title}}</h3>
							<span>{{v.distance}}</span>
						</div>
						<p>
							<i class="iconfont icon-shoucang1"></i>
							{{v.grade}}&nbsp;&nbsp;
							{{v.number}}
						</p>
						<div class="r_bottom">
							<span class="sp1">{{v.price}}</span>
							<span class="sp2">{{v.priceed}}</span>
							<span class="sp3">{{v.full}}</span>
							<span class="sp4">{{v.benefit}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				like:''
			}
		},
		mounted(){
			this.$axios({
				method:'get',
				url:'src/data/buy.json'
			}).then((response)=>{
				console.log(response);
				this.like=response.data.like;
			}).catch((response)=>{
				console.log(response)
			})
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.option_food{
		width: 100%;
	}
	.option_food .t_top{
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1;
	}
	/* top */
	.option_food .t_top .top{
		height: 50px;
		width: 100%;
		background: #e72d4c;
		padding: 10px 20px 0px;
		box-sizing: border-box;
	}
	.option_food .top div{
		float: left;
		overflow: hidden;
	}
	.option_food .top div a{
		text-decoration: none;
	}
	.option_food .top .t_left{
		width: 35%;
	}
	.option_food .top .t_center{
		font-size: 16px;
		text-align: center;
		width: 30%;
		position: relative;
		color: white;
		line-height:27px;
	}
	.option_food .top .t_right{
		width: 35%;
	}
	.option_food .top .t_right i{
		float: right;
		margin-left: 10px;
	}
	.option_food .top i{
		color: white;
		font-size: 24px;
	}
	.option_food .top .icon-search{
		padding-top: 2px;
	}
	.option_food .t_top ul{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: white;
		overflow: hidden;
		padding: 0px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
	}
	.option_food .t_top ul li{
		width: 25%;
		float: left;
		font-size: 12px;
		text-align: center;
	}
	/* 美食 */
	.option_food .like{
		margin-top: 100px;
		padding: 10px 20px 60px;
	}
	.option_food .like ul{
		overflow: hidden;
	}
	.option_food .like ul li{
		width: 100%;
		float: left;
		display: flex;
		margin-bottom: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #eeeeee;
	}
	.option_food .like ul li .left{
		overflow: hidden;
	}
	.option_food .like ul li .left img{
		width: 80px;
		height: 70px;
		float: left;
	}
	.option_food .like ul li .right{
		padding-left: 10px;
		flex-grow: 1;
	}
	.option_food .like ul li .right .r_top{
		display: flex;
	}
	.option_food .like ul li .right .r_top h3{
		font-size: 16px;
		width: 50%;
	}
	.option_food .like ul li .right .r_top span{
		width: 50%;
		color: #6f6f6f;
		font-size: 12px;
		text-align: right;
	}
	.option_food .like ul li .right p{
		color: #6f6f6f;
		font-size: 12px;
	}
	.option_food .like ul li .right p i{
		font-size: 12px;
		color: #f7b344;
	}
	.option_food .like ul li .r_bottom .sp1,.buy .like ul li .r_bottom .sp2,
	.option_food .like ul li .r_bottom .sp3,.buy .like ul li .r_bottom .sp4{
		font-size: 12px;
		display: inline-block;
	}
	.option_food .like ul li .r_bottom .sp1{
		width: 15%;
		color: red;
	}
	.option_food .like ul li .r_bottom .sp2{
		width: 15%;
		color: #6f6f6f;
		text-decoration: line-through;
	}
	.option_food .like ul li .r_bottom .sp3{
		padding: 0px 3px;
		background: #dd5145;
		color: white;
	}
	.option_food .like ul li .r_bottom .sp4{
		color: #6f6f6f;
	}
	.option_food .like ul li .grade{
		display: inline-block;
		color: #f7b344;
		float: right;
		font-size: 13px;
	}
</style>