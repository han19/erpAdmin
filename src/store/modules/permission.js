import {
	asyncRouterMap,
	constantRoutes
} from '@/router'
let navData = asyncRouterMap,
	routerArr = [],
	numeData = [];

//过滤出有权限的路由
function filterRouter(auth) {
	navData.filter((item, index) => {
		if (item.children) {
			routerArr.push(item.children.filter(item1 => {
				return auth.includes(item1.roles)
			}))
			if (routerArr[index].length > 0) {
				navData[index].children = routerArr[index];
			} else {
				navData[index] = "";
			}
		}
	})
	numeData = navData;
	let res = numeData.filter(item => {
		return item
	})
	return res;
}

const permission = {
	state: {
		routerData: [], //存放权限路由列表
	},
	mutations: {
		getMutationsRouter(state,authRouter) {
			state.routerData = constantRoutes.concat(authRouter)
		}
	},
	actions: {
		setActionsRouter({
			commit
		}, authData) {
			return new Promise(resolve => {
				let accessedRoutes = filterRouter(authData); //过滤返回权限路由列表
				commit('getMutationsRouter', accessedRoutes); //用于路由列表渲染展示
				resolve(accessedRoutes); //用于动态挂载可访问路由表
			})
		}
	}
}
export default permission
