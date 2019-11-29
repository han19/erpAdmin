import { postRequest,getRequest } from './service-client.js'
const apiUrl = 'http://api.mytest.com'
const requestName = {
	login: '/api/UserLogin/Login',//登录
}
let timeout = 10000;
export function postFn(name,data,timeout){
	return new Promise((resolve,reject)=>{
		postRequest(apiUrl+requestName[name],data,timeout).then(res=>{
			resolve(res.data)
		}).catch(function(error) {
			reject(error)
		})
	})
}

export function getFn(name,data,timeout){
	return new Promise((resolve,reject)=>{
		getRequest(apiUrl+requestName[name],data,timeout).then(res=>{
			resolve(res.data)
		}).catch(function(error) {
			reject(error)
		})
	})
}