<template id="mine">
	<main class="mine">
		<!-- top -->
		<div class="top">
			<div class="t_left">
				<i class="iconfont icon-xiangzuo" @click="back"></i>
			</div>
			<div class="t_center">
				<span>我的</span>
			</div>
			<div class="t_right">
				<i class="iconfont icon-youxiang"></i>
				<router-link to="/cart">
					<i class="iconfont icon-gouwuche"></i>
				</router-link>
			</div>
		</div>
		<!-- bg -->
		<div class="bg">
			<img src="../../assets/images/bg.jpg" height="217" width="1000" alt="">
			<div class="center">
				<router-link to="/login">
					<span class="login">登录</span>
				</router-link>
				<router-link to="/register">
					<p class="register">&nbsp;&nbsp;注册帐号 > </p>
				</router-link>
				
			</div>
		</div>
		<!-- option -->
		<ul class="option">
			<li>
				<i class="iconfont icon-youhuiquan"></i>
				<p>优惠券</p>
			</li>
			<li>
				<i class="iconfont icon-daifukuan"></i>
				<p>待付款</p>
			</li>
			<li>
				<i class="iconfont icon-wodeqiabao0101"></i>
				<p>卡包</p>
			</li>
			<li>
				<i class="iconfont icon-shoucang1"></i>
				<p>收藏</p>
			</li>
		</ul>
		<ul class="my">
			<li class="inf">
				<p>消息提醒</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
		</ul>
		<ul class="my">
			<li class="inf">
				<p>VIP会员成长值达600可升为会员</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
		</ul>
		<ul class="my">
			<li class="inf">
				<p>积分</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li class="inf">
				<p>余额（充值卡充值）</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li class="inf">
				<p>促销包</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li class="inf">
				<p>红包</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li class="inf">
				<p>抵用券</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
		</ul>
	</main>
</template>

<script type="text/javascript">	
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.mine{
		width: 100%;
		background: #f9f9f9;
		margin-bottom: 100px;
	}
	/* top */
	.mine .top{
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
	.mine .top div{
		float: left;
		overflow: hidden;
	}
	.mine .top div a{
		text-decoration: none;
	}
	.mine .top .t_left{
		width: 35%;
	}
	.mine .top .t_center{
		font-size: 16px;
		text-align: center;
		width: 30%;
		position: relative;
		color: white;
		line-height: 27px;
	}
	.mine .top .t_right{
		width: 35%;
	}
	.mine .top .t_right i{
		float: right;
		margin-left: 10px;
	}
	.mine .top i{
		color: white;
		font-size: 24px;
	}
	.mine .top .icon-search{
		padding-top: 2px;
	}
	/* bg */
	.mine .bg{
		height: 120px;
		margin-top: 50px;
		overflow: hidden;
		position: relative;
	}
	.mine .bg img{
		width: 100%;
		height: 100%;
	}
	.mine .bg .center{
		position: absolute;
		top: 35px;
		left: 50%;
		margin-left: -40px;
		font-size: 14px;
	}
	.mine .bg .center a{
		text-decoration: none;
		color: white;
	}
	.mine .bg .center .login{
		padding: 3px 25px;
		background: #e72d4c;
		border-radius: 5px;
	}
	.mine .bg .center p{
		margin-top: 10px;
	}
	/* option */
	.mine .option{
		width: 100%;
		background: white;
		overflow: hidden;
		padding-top: 5px;
		padding-bottom: 5px;
		margin-bottom: 10px;
	}
	.mine .option li{
		width: 25%;
		float: left;
		text-align: center;
	}
	.mine .option li i{
		font-size: 24px;
	}
	.mine .option li p{
		font-size: 12px;
		color: #6f6f6f;
	}
	.mine .option li .icon-youhuiquan{
		color: #ea807f;
	}
	.mine .option li .icon-daifukuan{
		color: #77a99c;
		font-size: 20px;
		display: inline-block;
		margin-top: 3px;
	}
	.mine .option li .icon-wodeqiabao0101{
		color: #a88db8;
	}
	.mine .option li .icon-shoucang1{
		color: #e6b349;
	}
	/* ul */
	.mine .my{
		width: 100%;
		margin-bottom: 10px;
		background: white;
		border-bottom: 1px solid #f0f0f0;
	}
	.mine .my li{
		width: 100%;
		height: 45px;
		padding: 0px 20px;
		line-height: 45px;
		border-top: 1px solid #f0f0f0;
		box-sizing: border-box;
	}
	.mine .my li p{
		width: 80%;
		float: left;
		font-size: 14px;
	}
	.mine .my li span{
		display: inline-block;
		width: 20%;
		text-align: right;
	}
	.mine .my li span i{
		font-size: 16px;
		color: #c6c6c6;
	}
</style>
