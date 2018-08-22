<template id="cart">
	<main class="cart">
		<!-- top -->
		<div class="top">
			<div class="t_left">
				<i class="iconfont icon-xiangzuo" @click="back"></i>
			</div>
			<div class="t_center">
				<span>购物车</span>
			</div>
			<div class="t_right">
				<span>编辑</span>
			</div>
		</div>
		<div class="con">
			<div class="left">
				<input type="radio">
			</div>
			<div class="right">
				<img src="../../assets/images/food-1.png" alt="">
				<div class="r_right">
					<h3>水果套餐</h3>
					<p>快乐相聚水果套餐</p>
					<span>￥58元/份</span>
					<ul>
						<li>-</li>
						<li>1</li>
						<li>+</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="left">
				<input type="radio">
				<span>全选</span>
			</div>
			<div class="center">
				合计：<span>58元</span>
			</div>
			<div class="right">
				支付<span></span>
			</div>
		</div>
	</main>
</template>

<style scoped>
	.cart{
		width: 100%;
		position: relative;
		z-index: 3;
		min-height: 100vh;
		background: #f5f5f5;
	}
	/* top */
	.cart .top{
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
	.cart .top div{
		float: left;
		overflow: hidden;
		line-height: 27px;
		color: white;
	}
	.cart .top div a{
		text-decoration: none;
	}
	.cart .top .t_left{
		width: 35%;
	}
	.cart .top i{
		color: white;
		font-size: 24px;
	}
	.cart .top .t_center{
		font-size: 16px;
		text-align: center;
		width: 30%;
	}
	.cart .top .t_right{
		width: 35%;
		text-align: right;
	}
	/* con */
	.cart .con{
		overflow: hidden;
		padding: 60px 20px 20px;
		box-sizing: border-box;
		background: white;
	}
	.cart .con div{
		float: left;
	}
	.cart .con .left{
		width: 10%;
		line-height: 70px;
		text-align: left;
	}
	.cart .con .right{
		width: 90%;
		display: flex;
	}
	.cart .con .right img{
		width: 80px;
		height: 70px;
		float: left;
	}
	.cart .con .right .r_right{
		line-height: 23px;
		padding: 0px 10px;
		box-sizing: border-box;
		flex-grow: 1;
		position: relative;
	}
	.cart .con .right .r_right h3{
		font-size: 16px;
	}
	.cart .con .right .r_right p{
		font-size: 12px;
		color: #555;
	}
	.cart .con .right .r_right span{
		color: red;
		font-size: 14px;
	}
	.cart .con .right .r_right ul{
		position: absolute;
		right: 0px;
		bottom: 0px;
	}
	.cart .con .right .r_right ul li{
		float: left;
		width: 20px;
		text-align: center;
		border: 1px solid #ccc;
	}
	.cart .con .right .r_right ul li:nth-of-type(2){
		width: 35px;
	}
	/* footer */
	.cart .footer{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: white;
		position: fixed;
		left: 0px;
		bottom: 0px;
	}
	.cart .footer div{
		float: left;
	}
	.cart .footer .left{
		width: 30%;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.cart .footer .center{
		width: 45%;
	}
	.cart .footer .center span{
		color: red;
	}
	.cart .footer .right{
		text-align: center;
		width: 25%;
		color: white;
		background: #e72d4c;
	}

</style>

<script type="text/javascript">
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>