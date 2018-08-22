<template id="footer">
	<ul>
		<li>
			<router-link to="/buy">
				<i class="iconfont icon-69"></i>
				<p>首页</p>
			</router-link>
		</li>
		<li>
			<router-link to="/nearby">
				<i class="iconfont icon-fujin"></i>
				<p>附近</p>
			</router-link>
		</li>
		<li>
			<router-link to="/more">
				<i class="iconfont icon-gengduo1"></i>
				<p>设置</p>
			</router-link>
		</li>
		<li>
			<router-link to="/mine">
				<i class="iconfont icon-wodeiconguanzhu2"></i>
				<p>我的</p>
			</router-link>
		</li>
	</ul>
</template>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		width: 100%;
		position: fixed;
		left: 0px;
		bottom: 0px;
		background: white;
		overflow: hidden;
		background: #f5f5f5;
	}
	ul li{
		list-style: none;
		width: 25%;
		float: left;
		text-align: center;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	ul li a{
		text-decoration: none;
		color: #242e2e;
	}
	ul li i{
		font-size: 20px;
	}
	ul li p{
		font-size: 13px;
		height: 15px;
	}
	.router-link-active{
		color:red;
	}
</style>

<script>
    export default{
    	data(){
    		return{
    			
    		}
    	}
        
    } 
</script>

