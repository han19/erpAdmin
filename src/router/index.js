import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)
//解决vue-router3.1.0新增功能：push和replace方法会返回一个promise的bug（Uncaught (in promise) undefined）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }else{
	return originalPush.call(this, location).catch((err) => {
	  if (err) {
	    return Promise.reject(err);
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
	children:[{
		path:'/dashboard',
		component:()=> import('@/views/dashboard'),
		name:'首页',
	}]
	
},{
	path: '/login',
	component: () => import('@/views/login'),
	name: '登录',
	hidden:true,
	
},{
	path: '/404',
	component: () => import('@/views/error/404'),
	name: '错误页面',
	hidden:true,
	
}]

export const asyncRouterMap = [{
	path:'/newHouseTransaction',
	component:Layout,
	name:'成交单管理',
	hidden:true,
	children:[{
		path:'/newHouseTransaction',
		component:()=>import('@/views/transactionManagement/newHouseTransaction'),
		roles: 'contractNote/newHouseTransaction',
		navigation:true,
		name: '新房成交结算'
	},{
		path:'/secondHandHouse',
		component:()=>import('@/views/transactionManagement/secondHandHouse'),
		roles: 'contractNote/secondHandHouse',
		navigation:true,
		name: '二手房成交结算'
	},{
		path:'/leaseTransaction',
		component:()=>import('@/views/transactionManagement/leaseTransaction'),
		roles: 'contractNote/leaseTransaction',
		navigation:true,
		name: '租赁成交结算'
	},{
		path:'/agencyTransaction',
		component:()=>import('@/views/transactionManagement/agencyTransaction'),
		roles: 'contractNote/agencyTransaction',
		navigation:true,
		name: '代办成交结算'
	},{
		path:'/addTransaction',
		component:()=>import('@/views/transactionManagement/addTransaction'),
		roles: 'contractNote/detailed',
		navigation:true,
		name: '添加成交结算'
	}]
}]

export default new Router({
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})
