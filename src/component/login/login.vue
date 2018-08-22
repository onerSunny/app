<template>
	<main class="login">
		<router-link to="/mine" class="back">
			<p>
				<i class="iconfont icon-back" @click="back"></i>
			</p>
		</router-link>
		<div class="logo">
			<img src="../../assets/images/logo.jpg" alt="">
			<h2>美优乐团购</h2>
		</div>
		<ul>
			<li>
				<i class="iconfont icon-renbudaiwaiquan"></i>
				<input type="text" placeholder="请输入用户名">
			</li>
			<li>
				<i class="iconfont icon-mimamw"></i>
				<input type="password" placeholder="请输入密码">
			</li>
			<li>
				<button type="submit">登录</button>
			</li>
		</ul>
		<p>
			<router-link to="/mine" class="back">
			忘记密码？
			</router-link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<router-link to="register" class="back">
			新用户注册
			</router-link>
		</p>
		
	</main>
</template>

<script type="text/javascript">
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.login{
		padding: 20px;
		box-sizing: border-box;
		position: relative;
	    z-index: 2;
	    background: white;
	    height: 100vh;
	}
	.login .back p{
		width: 20px;
		height: 19px;
		overflow: hidden;
	}
	.login .back i{
		font-size: 20px;
		color: #e72d4c;
		font-weight: bold;
	}
	.login .logo{
		width: 55%;
		margin: 50px auto;
		display: flex;
	}
	.login .logo img{
		width: 60px;
		height: 60px;
		border-radius: 10px;
	}
	.login .logo h2{
		font-size: 20px;
		line-height: 60px;
		margin-left: 10px;
		font-family: "黑体";
		flex-grow: 1;
	}
	.login ul{
		width: 100%;
		padding: 0px 40px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.login ul li{
		height: 35px;
		width: 100%;
		float: left;
		line-height: 35px;
		margin-bottom: 20px;
		display: flex;
	}
	.login ul li i{
		font-size: 22px;
		color: #e72d4c;
		font-weight: bold;
	}
	.login ul li input{
		margin-left: 20px;
		border: none;
		border-bottom: 1px solid #aaaaaa;
		line-height: 35px;
		color: #aaaaaa;
		flex-grow: 1;
	}
	.login ul li button{
		border: none;
		font-size: 14px;
		width: 100%;
		height: 35px;
		color: white;
		background: #e72d4c;
		margin-top: 20px;
	}
	.login>p{
		font-size: 12px;
		text-align: center;
		margin-top: 20px;
	}
	.login>p>a{
		color: #888888;
	}
</style>