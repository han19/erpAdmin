<template>
	<div id="app"><router-view /></div>
</template>

<script>
export default {
	name: 'app'
};
</script>

<style lang="scss">
html,
body,
#app {
	height: 100%;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#nprogress .bar {
	background: #3f66f5 !important; //自定义颜色
}
@font-face {
	font-family: 'iconfont'; /* project id 1469319 */
	src: url('//at.alicdn.com/t/font_1469319_3tentxuo0p.eot');
	src: url('//at.alicdn.com/t/font_1469319_3tentxuo0p.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1469319_3tentxuo0p.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1469319_3tentxuo0p.woff') format('woff'), url('//at.alicdn.com/t/font_1469319_3tentxuo0p.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1469319_3tentxuo0p.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	display: inline-block;
}
</style>
