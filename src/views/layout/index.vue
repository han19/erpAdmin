<template>
	<div class="layout" :class="{ 'layout-sidebar-open': !isCollapse, 'layout-sidebar-stop': isCollapse }">
		<!-- 侧边栏导航开始 -->
		<div class="sidebar">
			<!-- <div class="logo" v-if="!isCollapse"><h1>叮当家管理系统</h1></div> -->
			<el-menu
				:default-active="menuActive"
				:collapse="isCollapse"
				background-color="#08111f"
				text-color="#fff"
				active-text-color="#1d66dc"
				:unique-opened="false"
				:collapse-transition="false"
				router
			>
			  <Sidebar :isCollapse="isCollapse"></Sidebar>
			</el-menu>
		</div>
		<!-- 侧边栏导航结束 -->
		<!-- 头部导航开始 -->
		<div class="header">
			<div class="header-con">
				<div class="header-menu">
					<div class="is-collapse" @click="toggleSideBar"><i :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse }"></i></div>
					<Crumbs></Crumbs>
				</div>
				<div class="tags-menu"><Tag></Tag></div>
			</div>
		</div>
		<!-- 头部导航结束 -->
		<!-- 主体内容开始 -->
		<div class="main-body"><router-view /></div>
		<!-- 主体内容结束 -->
	</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Crumbs from './components/Crumbs.vue';
import Tag from './components/Tag.vue';
export default {
	components: {
		Sidebar,
		Crumbs,
		Tag
	},
	computed: {
		menuActive() {
			const route = this.$route;
			const { path } = route;
			return path;
		}
	},
	data() {
		return {
			isCollapse: false,
			isClass: ''
		};
	},	
	methods: {
		toggleSideBar() {
			this.isCollapse = this.isCollapse ? false : true;
		}
	}
};
</script>

<style scoped="scoped" lang="scss">
.layout {
	height: 100%;
	background: rgba(247,248,250,1);
}
.sidebar {
	height: 100%;
	width: 210px;
	background: #08111f;
	overflow-x: hidden;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	-webkit-transition: width 0.3s;
	transition: width 0.3s;
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
.layout-sidebar-stop .sidebar {
	width: 59px;
}
.header {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	.header-con {
		margin-left: 220px;
		margin-right:10px;
		padding-top:3px;
		-webkit-transition: 0.3s;
		transition: 0.3s;
		border-bottom:10px solid #f1f6fd;
	}
	.header-menu {
		height: 50px;
		border-bottom: 1px solid #ddd;
		background: #fff;
		border-radius:7px 0 0 0;
		.is-collapse {
			display: inline-block;
			padding: 0 16px;
			cursor: pointer;
			vertical-align: middle;
			i {
				font-size: 24px;
				color: #666;
				line-height: 50px;
			}
		}
	}
	.tags-menu {
		height: 36px;
		width:100%;
	}
}
.main-body {
	padding-left: 220px;
	padding-top: 90px;
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
.layout-sidebar-stop {
	.header-con {
		margin-left: 64px;
	}
	.main-body {
		padding-left: 84px;
	}
}
</style>
