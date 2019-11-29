<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
	html,body,#app{
	   height:100%;
	}	
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	#nprogress .bar {
	   background:#3f66f5 !important; //自定义颜色
	}
</style>
