<template>
	<div class="crumbs">
		<router-link to="/" class="home-but" :class="{'home-but-active':$route.meta.affix}">
			<i class="iconfont icon">&#xe603;</i>
			首页
		</router-link>
		<template v-if="!$route.meta.affix">
			<span class="home-but">/</span>
			<span class="home-but">{{$route.matched[0].name}}</span>
			<span class="home-but">/</span>
			<router-link :to="$route.path" class="home-but home-but-active">
				{{$route.name}}
			</router-link>
		</template>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped="scoped">
	.crumbs{
		display:inline-block;
	  .home-but {
	  	display: inline-block;
	  	font-size: 14px;
	  	color: #666;
	  	vertical-align: middle;
	  	margin-right:10px;
	  	i {
	  		padding-right: 2px;
	  	}
	  }
	  .home-but-active{
	  	color:#1d66dc;
	  }	
	}
</style>
