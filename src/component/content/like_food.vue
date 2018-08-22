<template id="like_food">
	<main class="like_food">
		<!-- top -->
		<div class="top">
			<div class="t_left">
				<i class="iconfont icon-xiangzuo" @click="back"></i>
			</div>
			<div class="t_center">
				<span>{{title}}</span>
			</div>
			<div class="t_right">
				<i class="iconfont icon-xinxi"></i>
				<router-link to="/cart">
					<i class="iconfont icon-gouwuche"></i>
				</router-link>
			</div>
		</div>
		<!-- con -->
		<div class="con">
			<ul>
				<li v-for="(v,i) in like_food">
					<div class="left">
						<img :src="v.pic" alt="">
					</div>
					<div class="right">
						<h2>{{v.name}}</h2>
						<span>{{v.price | addDollar}}</span>
						<p>
							<i class="iconfont icon-jianshao"@click="del(i) " v-show="v.num!=''"></i>
							<span>{{v.num}}</span>
							<i class="iconfont icon-zengjia" @click="add(i)"></i>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- footer -->
		<div class="footer">
			<div class="left">
				<i class="iconfont icon-gengduo">
					<span class="total_num" v-show="totalNum!=0">{{totalNum}}</span>
				</i>
			</div>
			<div class="center">
				<p>
					<span>{{totalPrice | addDollar}}</span>
				</p>
			</div>
			<div class="right">
				<router-link to="/cart">
					<span>去结算</span>
				</router-link>
			</div>
		</div>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:'', //商家名称
				index:'', //当前的店铺（li）
				like_food:'', //json里面的数组名称
				totalNum:0, //商品总数量
				totalPrice:0 //商品总价格
				
			}
		},
		mounted(){
			// 当前的title和index=路由传过来的title和id（this.$route.query类似于res.query）
			this.title=this.$route.params.title
			this.index=this.$route.params.id;

			this.$axios({
				method:'get',
				url:'src/data/like_food.json'
			}).then((response)=>{
				this.like_food=response.data.foods[this.index].like_food
			}).catch((response)=>{
				console.log(response)
			})
		},
		methods:{
			back(){
				// 返回上一级路由
				this.$router.go(-1)
			},
			add(n){
				// 点击 + ，num++
				this.like_food[n].num++;
				this.totalNum=0;
				this.totalPrice=0;
				// 总价格=每个商品的（单价 * 数量）之和
				for(let j=0;j<this.like_food.length;j++){
					this.totalPrice=this.totalPrice+this.like_food[j].price*this.like_food[j].num;
					// 总数量=每个商品的数量之和
					this.totalNum=parseInt(this.totalNum+this.like_food[j].num);
				}
			},
			del(n){
				// 点击 - ，num--
				this.like_food[n].num--;
				if(this.like_food[n].num<=0){
					this.like_food[n].num='';
				}
				this.totalNum=0;
				this.totalPrice=0;
				for(let j=0;j<this.like_food.length;j++){
					this.totalPrice=this.totalPrice+this.like_food[j].price*this.like_food[j].num;
					this.totalNum=parseInt(this.totalNum+this.like_food[j].num);
				}
			}
		},
		filters:{
			addDollar(n){
				return '￥'+n;
			}
		}
	}
</script>

<style scoped>
	.like_food{
		width: 100%;
		position: relative;
		z-index: 3;
		height: 100vh;
		background: #f5f5f5;
	}
	/* top */
	.like_food .top{
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
	.like_food .top div{
		float: left;
		overflow: hidden;
	}
	.like_food .top div a{
		text-decoration: none;
	}
	.like_food .top .t_left{
		width: 35%;
	}
	.like_food .top .t_center{
		font-size: 16px;
		text-align: center;
		width: 30%;
		position: relative;
		color: white;
		line-height: 27px;
	}
	.like_food .top .t_right{
		width: 35%;
	}
	.like_food .top .t_right i{
		float: right;
		margin-left: 10px;
	}
	.like_food .top i{
		color: white;
		font-size: 24px;
	}
	.like_food .top .icon-search{
		padding-top: 2px;
	}
	/* con */
	.like_food .con ul{
		padding: 60px 0px 10px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.like_food .con ul li{
		width: 100%;
		float: left;
		display: flex;
		background: white;
		padding:10px 20px;
		margin-bottom: 10px;
	}
	.like_food .con ul li .left img{
		width: 100px;
		height: 70px;
	}
	.like_food .con ul li .right{
		flex-grow: 1;
		padding-left: 10px;
		line-height: 30px;
		position: relative;
	}
	.like_food .con ul li .right h2{
		font-size: 16px;
	}
	.like_food .con ul li .right span{
		color: red;
		font-size: 16px;
	}
	.like_food .con ul li .right p{
		position: absolute;
		bottom: 0px;
		right: 30px;
	}
	.like_food .con ul li .right p span{
		padding-left: 10px;
		padding-right: 10px;
		color: black;
	}
	.like_food .con ul li .right p i{
		color: red;
		font-size: 18px;
	}
	/* footer */
	.like_food .footer{
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: white;
		overflow: hidden;
		position: fixed;
		bottom: 0px;
		left: 0px;
		z-index: 2;
		background: white;
	}
	.like_food .footer div{
		float: left;
		color: red;
	}
	.like_food .footer .left{
		width: 30%;
		padding: 5px 20px;
		box-sizing: border-box;
	}
	.like_food .footer .left i{
		font-size: 32px;
		position: relative;
		color: #555;
	}
	.like_food .footer .left .total_num{
		font-size: 13px;
		padding: 0px 6px;
		height: 20px;
		line-height: 20px;
		border-radius: 50%;
		color: white;
		background: #e72d4c;
		position: absolute;
		top: -6px;
		left: 35px;
	}
	.like_food .footer .center{
		width: 45%;
		font-size: 20px;
	}
	.like_food .footer .right{
		width: 25%;
		background: #e72d4c;
		text-align: center;
	}
	.like_food .footer .right a{
		text-decoration: none;
		color:white;
	}
</style>