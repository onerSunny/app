<template id="more">
	<main class="more">
		<!-- top -->
		<div class="top">
			<div class="t_left">
				<i class="iconfont icon-xiangzuo" @click="back"></i>
			</div>
			<div class="t_center">
				<span>设置</span>
			</div>
			<div class="t_right">
				<i class="iconfont icon-paizhao"></i>
				<router-link to="/cart">
					<i class="iconfont icon-gouwuche"></i>
				</router-link>
			</div>
		</div>
		<!-- information -->
		<ul class="ul1">
			<li>
				<p>仅在wifi下显示图片</p>
				<span class="yes">
					<i class="iconfont icon-dagou"></i>
				</span>
			</li>
			<li>
				<p>消息提醒</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li>
				<p>分享设置</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li>
				<p>清除缓存</p>
				<span>
					8.65MB
				</span>
			</li>
		</ul>
		<ul>
			<li>
				<p>赏个好评</p>
			</li>
			<li>
				<p>意见反馈</p>
			</li>
			<li class="connect">
				<p>联系客服
					<b class="time">（8:00-22:00）</b>
				</p>
				<span>
					1234-567-89
				</span>
			</li>
		</ul>
		<ul>
			<li>
				<p>当前版本V8.10</p>
				<span>
					<i class="iconfont icon-enter"></i>
				</span>
			</li>
			<li>
				<p>关于</p>
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
	.more{
		width: 100%;
		background: #f9f9f9;
	}
	/* top */
	.more .top{
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
	.more .top div{
		float: left;
		overflow: hidden;
	}
	.more .top div a{
		text-decoration: none;
	}
	.more .top .t_left{
		width: 35%;
	}
	.more .top .t_center{
		font-size: 16px;
		text-align: center;
		width: 30%;
		position: relative;
		color: white;
		line-height: 27px;
	}
	.more .top .t_right{
		width: 35%;
	}
	.more .top .t_right i{
		float: right;
		margin-left: 10px;
	}
	.more .top i{
		color: white;
		font-size: 24px;
	}
	.more .top .icon-search{
		padding-top: 2px;
	}
	/* information */
	.more ul{
		width: 100%;
		margin-bottom: 10px;
		background: white;
	}
	.more .ul1{
		margin-top: 50px;
	}
	.more ul li{
		width: 100%;
		padding: 13px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #eeeeee;
		font-size: 14px;
		overflow: hidden;
	}
	.more ul li .yes i{
		font-size: 14px;
		color: red;
		font-weight: bold;
	}
	.more ul .clear{
		margin-bottom: 
	}
	.more ul li p{
		width: 60%;
		float: left;
	}
	.more ul li span{
		display: inline-block;
		width: 40%;
		text-align: right;
		color: #888888;
	}
	.more ul li b{
		font-weight: normal;
		color: #888888;
	}
	
	.more ul li span i{
		font-size: 12px;
	}
	
</style>