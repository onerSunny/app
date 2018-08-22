<template id="buy">
	<main class="buy">
		<!-- top -->
		<div class="top">
			<div class="t_left">
				<router-link to="/city">
					<span>广州</span>
					<i class="iconfont icon-xiala"></i>
				</router-link>
			</div>
			<div class="t_center">
				<input type="text" placeholder="搜索商家或地点">
				<i class="iconfont icon-search"></i>
			</div>
			<div class="t_right">
				<router-link to="/cart">
					<i class="iconfont icon-gouwuche"></i>
				</router-link>
				<router-link to="/vuex_test">
					<i class="iconfont icon-paizhao"></i>
				</router-link>
			</div>
		</div>
		<!-- pic -->
		<div class="pic">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
					<img src="dist/banner-1.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="dist/banner-2.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="dist/banner-3.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="dist/banner-4.jpg" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- option -->
		<div class="option">
			<ul>
				<li>
					<router-link to="/option_food">
						<div class="iconf ic1">
							<i class="iconfont icon-meishi"></i>
						</div>
						<p>美食</p>
					</router-link>
				</li>
				<li>
					<router-link to="/option_food">
						<div class="iconf ic2">
							<i class="iconfont icon-dianying"></i>
						</div>
						<p>电影</p>
					</router-link>
				</li>
				<li>
					<router-link to="/option_food">
						<div class="iconf ic3">
							<i class="iconfont icon-waimaixinxi"></i>
						</div>
						<p>外卖</p>
					</router-link>
				</li>
				<li>
					<router-link to="/option_food">
						<div class="iconf ic4">
							<i class="iconfont icon-KTV"></i>
						</div>
						<p>KTV</p>
					</router-link>
				</li>

				<li>
					<router-link to="/option_food">
						<div class="iconf ic5">
							<i class="iconfont icon-aiqingyuehui"></i>
						</div>
						<p>约会</p>
					</router-link>
				</li>
				<li>
					<router-link to="/option_food">
						<div class="iconf ic6">
							<i class="iconfont icon-lvyou"></i>
						</div>
						<p>旅游</p>
					</router-link>
				</li>
				<li>
					<router-link to="/option_food">
						<div class="iconf  ic7">
							<i class="iconfont icon-Hotel"></i>
						</div>
						<p>酒店</p>
					</router-link>
				</li>
				<li>
					<router-link to="/option_food">
						<div class="iconf ic8">
							<i class="iconfont icon-gengduo"></i>
						</div>
						<p>更多</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 今日头条 -->
		<div class="today">
			<div class="left">
				<span>今日<br>头条</span>
			</div>
			<div class="right" v-for="v in today">
				<p>
					<span>{{v.title}}</span>
					{{v.con}}
				</p>
			</div>
		</div>
		<!-- 0元抢购 -->
		<div class="buying">
			<div class="b_top">
				<p>0元抢购</p>
				<div class="right">
					距开始 
					<span>01</span> : 
					<span>39</span> : 
					<span>58</span>
					<span class="last">
						<i class="iconfont icon-enter"></i>
					</span>
				</div>
			</div>
			<ul>
				<li v-for="v in buying">
					<img :src="v.pic">
					<p>{{v.name}}</p>
				</li>
			</ul>
		</div>
		<!-- 猜你喜欢 -->
		<div class="like">
			<div class="l_top">
				<p>猜你喜欢</p>
				<div class="right">
					全部团购 
					<span>
						<i class="iconfont icon-enter"></i>
					</span> 
				</div>
			</div>
			<ul>
				<!-- 点击当前的商店，获取当前的title和i，方法enter()有当前的title和i两个参数 -->
				<li v-for="v in like">
					<!-- 路由跳转到titles -->
					<router-link :to="'/like_food/'+v.id+'/'+v.title">
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
					</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				today:'',
				buying:'',
				like:'',
			}
		},
		mounted(){
			this.$axios({
				method:'get',
				url:'src/data/buy.json'
			}).then((response)=>{
				console.log(response);
				this.today=response.data.today;
				this.buying=response.data.buying;
				this.like=response.data.like;
			}).catch((response)=>{
				console.log(response)
			})
		}
	}
</script>

<style scoped>
	.buy{
		width: 100%;
	}
	/* top */
	.buy .top{
		position: fixed;
		top: 0px;
		left: 0px;
		height: 50px;
		width: 100%;
		background: #e72d4c;
		padding: 10px 20px 0px;
		box-sizing: border-box;
		z-index: 1;
	}
	.buy .top div{
		float: left;
		overflow: hidden;
	}
	.buy .top .t_left{
		width: 20%;
		padding-top: 2px;
	}
	.buy .top .t_left a{
		text-decoration: none;
	}
	.buy .top .t_center{
		width: 60%;
		position: relative;
	}
	.buy .top .t_right{
		width: 20%;
		padding-top: 2px;
	}
	.buy .top .t_right i{
		float: right;
		margin-left: 10px;
	}
	.buy .top i{
		color: white;
	}
	.buy .top span{
		font-size: 15px;
		color: white;
	}
	.buy .top i{
		font-size: 22px;
	}
	.buy .top input{
		width: 100%;
		height: 28px;
		padding: 5px 15px;
		box-sizing: border-box;
		color: #757575;
		border-radius: 20px;
		border: none;
	}
	.buy .top .icon-search{
		position: absolute;
		color: #757575;
		top: 5px;
		right: 5px;
	}

	/* pic */
	.buy .pic{
		height: 140px;
		overflow: hidden;
		margin-top: 50px;
		position: relative;
	}
	.buy .pic img{
		width: 100%;
		height: 100%;
	}
	/* option */
	.buy .option{
		overflow: hidden;
	}
	.buy .option ul li{
		width: 25%;
		float: left;
		text-align: center;
	}
	.buy .option ul li a{
		text-decoration: none;
		color: black;
	}
	.buy .option ul li .iconf{
		width: 38px;
		height: 38px;
		line-height: 38px;
		border-radius: 50%;
		margin: 10px auto;
	}
	.buy .option ul li .ic1{
		background: #4cc2c3;
	}
	.buy .option ul li .ic2{
		background: #77a99c;
	}
	.buy .option ul li .ic3{
		background: #e6b349;
	}
	.buy .option ul li .ic4{
		background: #a88db8;
	}
	.buy .option ul li .ic5{
		background: #ea807f;
	}
	.buy .option ul li .ic6{
		background: #807fea;
	}
	.buy .option ul li .ic7{
		background: #7fe57c;
	}
	.buy .option ul li .ic8{
		width: 34px;
		height: 34px;
		border: 2px solid #eb6763;
	}
	.buy .option ul li i{
		font-size: 22px;
		color: white;
	}
	.buy .option ul li .ic8 i{
		color: #eb6763;
		font-weight: bold;
	}
	.buy .option ul li p{
		font-size: 13px;
	}
	/* 今日头条 */
	.buy .today{
		width: 100%;
		overflow: hidden;
		padding: 10px 20px;
		border-top: 1px dotted #ccc;
		border-bottom: 1px dotted #ccc;
		margin-top: 10px;
		margin-bottom: 10px;
		box-sizing: border-box;
	}
	.buy .today .left{
		width: 13%;
		float: left;
	}
	.buy .today .left span{
		font-size: 18px;
		color: #3e181e;
		font-weight: bold;
		font-family: "黑体";
	}
	.buy .today .right{
		width: 77%;
		float: left;
	}
	.buy .today .right p{
		line-height: 22px;
		color: #3e181e;
		font-size: 12px;
	}
	.buy .today .right span{
		font-size: 12px;
		color: red;
		padding: 0px 4px;
		border: 1px solid red;
		border-radius: 5px;
	}
	/* 0元抢购 */
	.buy .buying{
		padding: 0px 20px 10px;
		overflow: hidden;
		border-bottom: 1px solid #ccc;
	}
	.buy .buying .b_top,.buy .like .l_top{
		height: 40px;
	}
	.buy .buying .b_top p,.buy .like .l_top p{
		width: 47%;
		float: left;
		font-size: 16px;
		color: red;
	}
	.buy .buying .b_top .right,.buy .like .l_top .right{
		width: 53%;
		float: left;
		font-size: 14px;
		text-align: right;
	}
	.buy .buying .b_top .right span{
		padding: 0px 2px;
		color: white;
		background: #555;
		border-radius: 5px;
	}
	.buy .buying .b_top .right .last{
		padding: 0px;
		color: black;
		background: none;
	}
	.buy .buying .b_top .right .last i{
		font-size:14px;
	}
	.buy .buying ul li{
		width: 32.3%;
		height: 80px;
		float: left;
		overflow: hidden;
		text-align: center;
		margin-right: 1%;
	}
	.buy .buying ul li img{
		border-radius: 50%;
		width: 70%;
		height: 70%;
	}
	.buy .buying ul li p{
		font-size: 13px;
	}
	/* 猜你喜欢 */
	.buy .like{
		padding: 10px 20px 60px;
	}
	.buy .like .l_top i{
		font-size: 14px;
	}
	.buy .like ul{
		overflow: hidden;
	}
	.buy .like ul li{
		width: 100%;
		float: left;
		margin-bottom: 20px;
	}
	.buy .like ul li a{
		text-decoration: none;
		color: black;		
		display: flex;
	}
	.buy .like ul li .left{
		overflow: hidden;
	}
	.buy .like ul li .left img{
		width: 80px;
		height: 70px;
	}
	.buy .like ul li .right{
		padding-left: 10px;
		flex-grow: 1;
	}
	.buy .like ul li .right .r_top{
		display: flex;
	}
	.buy .like ul li .right .r_top h3{
		font-size: 16px;
		width: 50%;
	}
	.buy .like ul li .right .r_top span{
		width: 50%;
		color: #6f6f6f;
		font-size: 12px;
		text-align: right;
	}
	.buy .like ul li .right p{
		color: #6f6f6f;
		font-size: 12px;
	}
	.buy .like ul li .right p i{
		font-size: 12px;
		color: #f7b344;
	}
	.buy .like ul li .r_bottom .sp1,.buy .like ul li .r_bottom .sp2,
	.buy .like ul li .r_bottom .sp3,.buy .like ul li .r_bottom .sp4{
		font-size: 12px;
		display: inline-block;
	}
	.buy .like ul li .r_bottom .sp1{
		width: 15%;
		color: red;
	}
	.buy .like ul li .r_bottom .sp2{
		width: 15%;
		color: #6f6f6f;
		text-decoration: line-through;
	}
	.buy .like ul li .r_bottom .sp3{
		padding: 0px 3px;
		background: #dd5145;
		color: white;
	}
	.buy .like ul li .r_bottom .sp4{
		color: #6f6f6f;
	}
	.buy .like ul li .grade{
		display: inline-block;
		color: #f7b344;
		float: right;
		font-size: 13px;
	}
</style>

