import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {getToken} from './utils/auth.js'
let whiteList = ['/login','/404'];
let whiteList1 = ['/404','/dashboard'];
NProgress.configure({ showSpinner: false }) 
function hasPermission(permissionRoutes, route) {
	let routeId = false;
	permissionRoutes.filter(item => {
		if (item.children) {
			item.children.filter(item1 => {
				if (item1.name === route.name) {
					routeId = true
				}
			})
		}
	})
	return routeId;
}
//全局路由导航守卫router.beforeEach必须要调next()方法,否则钩子就不会被 resolved，就会一直循环调用
router.beforeEach(async (to,from,next)=>{
	NProgress.start()
	let token = getToken();
	if(token){
		if(to.path === '/login'){
			next({path:'/'})
		}else{
			if(store.getters.permission_routes.length === 0) {
				let auth = JSON.parse(localStorage.getItem("auth")) || []; //获取用户权限
				const accessRoutes = await store.dispatch('setActionsRouter', auth);
				//动态添加可访问权限路由列表
				router.addRoutes(accessRoutes);
				//刷新的当前页的时候需要传{ ...to }
				if (accessRoutes.length > 0) {
					next({ ...to,
						replace: true
					})
				} else {
					next()
				}
			}else{
			   if (hasPermission(store.getters.permission_routes, to) || whiteList1.indexOf(to.path) > -1) {
			   	//需要权限判断路由的页面
			   	next()
			   } else {
			   	//没有权限访问的路由和不存在的路由都跳到404
			   	next({
			   		path: '/404',
			   		replace: true
			   	})
			   }
			}
		}
	}else{
		if(whiteList.includes(to.path)){
			next()
		}else{
			router.push({path:'/login'});
			NProgress.done()
		}
	}
})
router.afterEach(() => {
  NProgress.done()
})