
// 数组去重
export function unique(arr) {
	// var obj = {};
	// return arr.filter(function(item, index, arr) {
	//     return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
	// })
	//利用Set对象存储的值唯一性去掉数组重复元素
	var mySet = new Set(arr);
	var arr1 = [...mySet];
	return arr1;
}
//求数组差集
export function difference(arr1, arr2) {
	let arr = arr1.filter(function(v) {
		return arr2.indexOf(v) === -1
	}).concat(arr2.filter(function(v) {
		return arr1.indexOf(v) === -1
	}));
	return arr;
}
//求数组交集
export function intersection(arr1, arr2) {
	let arr = arr1.filter(function(v) {
		return arr2.indexOf(v) > -1
	});
	return arr;
}


/**
 * [清除掉首尾空格]
 */
export function trim(text) {
	if(text) {
		text = text + ''
		return text.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '')
	} else {
		return ''
	}
}
