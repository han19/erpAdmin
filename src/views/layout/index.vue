<template>
	<div class="layout">
		<!-- 侧边栏导航开始 -->
		<div class="sidebar">
			<div class="logo"><h1>叮当家管理系统</h1></div>
			<div class="nav"><Navbar></Navbar></div>
		</div>
		<!-- 侧边栏导航结束 -->
		<!-- 头部导航开始 -->
		<div class="header">
			<div class="header-con">
				<div class="header-menu"></div>
				<div class="tags-menu"><Tag></Tag></div>
			</div>
		</div>
		<!-- 头部导航结束 -->
		<!-- 主体内容开始 -->
		<div class="main-body">
			<router-view/>
		</div>
		<!-- 主体内容结束 -->
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Tag from './components/Tag.vue';
export default {
	components: {
		Navbar,
		Tag
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped="scoped" lang="scss">
.layout {
	height: 100%;
	background: #f1f1f1;
}
.sidebar {
	height: 100%;
	width: 210px;
	background: #3f66f5;
	overflow-x: hidden;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	.logo {
		padding: 10px 0;
		color: #fff;
		text-align: center;
		h1 {
			font-size: 24px;
		}
	}
	&::-webkit-scrollbar-track-piece {
		background: #d3dce6;
	}
	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background: #99a9bf;
		border-radius: 20px;
	}
}
.header {
	position: fixed;
	left: 0;
	top: 0;
	height: 90px;
	width: 100%;
	background: #fff;
	.header-con {
		padding-left: 210px;
	}
	.header-menu {
		height: 50px;
		border-bottom: 1px solid #ddd;
	}
	.tags-menu {
		height: 36px;
	}
}
.main-body {
	padding-left: 220px;
	padding-top: 90px;
	background: #f1f1f1;
}
</style>
