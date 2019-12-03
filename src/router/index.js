import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)
//解决vue-router3.1.0新增功能：push和replace方法会返回一个promise的bug（Uncaught (in promise) undefined）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) {
		return originalPush.call(this, location, onResolve, onReject);
	} else {
		return originalPush.call(this, location).catch((err) => {
			if (err) {
				//return Promise.reject(err);
			}
			return Promise.resolve(false);
		})
	}
}
export const constantRoutes = [{
	path: '/',
	component: Layout,
	name: '首页',
	redirect: '/dashboard',
	icon: '&#xe603;',
	children: [{
		path: '/dashboard',
		component: () => import('@/views/dashboard'),
		meta: {
			affix: true
		},
		name: '首页',
	}]

}, {
	path: '/login',
	component: () => import('@/views/login'),
	name: '登录',
	hidden: true,

}, {
	path: '/404',
	component: () => import('@/views/error/404'),
	name: '错误页面',
	hidden: true,

}]



export const asyncRouterMap = [{
	path: '/list1',
	component: Layout,
	name: '列表管理',
	hidden: true,
	icon: '&#xe86e;',
	children: [{
		path: '/list1',
		component: () => import('@/views/listManagement/list1'),
		roles: 'listManagement/list1',
		navigation: true,//为true是侧边栏一级菜单
		icon: '&#xe65c;',
		name: '列表一'
	}, {
		path: '/list2',
		component: () => import('@/views/listManagement/list2'),
		roles: 'listManagement/list2',
		navigation: true,
		icon: '&#xe7a0;',
		name: '列表二'
	}, {
		path: '/list3',
		component: () => import('@/views/listManagement/list3'),
		roles: 'listManagement/list3',
		navigation: true,
		icon: '&#xe62b;',
		name: '列表三'
	}, {
		path: '/list4',
		component: () => import('@/views/listManagement/list4'),
		roles: 'listManagement/list4',
		navigation: true,
		icon: '&#xe63c;',
		name: '列表四'
	}]
}]

export default new Router({
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})
