import axios from 'axios'
import {
	getToken,setToken,removeToken
} from '@/utils/auth.js'
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	  return response;
}, function(error) {
	// 对响应错误做点什么
	let message = '服务器开小差了……'
	if (error.message === 'Network Error') {
	  message = '网络异常……'
	} else if (error.message.indexOf('timeout') > -1) {
	  message = '请求超时……'
	}
	// removeToken()
	// window.$messageFail(message);
	return Promise.resolve({
	  data:{
		  isSuccess: false,
		  errMsg: message,
	  }
	})
});

//post方法
export async function postRequest(url, data, timeout) {
	let token = getToken() || '';
	const conf = {
		method: 'POST',
		url: url,
		data: data,
		timeout: timeout,
		headers: {
			'Auth': token
		}
	}
	let res = await axios(conf)
	return res
}

//get方法
export async function getRequest(url, data, timeout) {
	let token = getToken() || '';
	const conf = {
		method: 'GET',
		url: url,
		data: data,
		timeout: timeout,
		headers: {
			'Auth': token
		}
	}
	let res = await axios(conf)
	return res
}

