
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

//对下拉数据处理，返回格式[{id:'',text:''}]
export function handleData(data){
	let dataArr = [];
	data.map(item=>{
		dataArr.push({
			id: item.Value,
			text: item.Text
		})
	});
	return dataArr;
}
//输入框不能为空判断
export function inputValidation(arr,obj){
	for(let i in obj){
		for(let j=0;j<arr.length;j++){
			if(i === arr[j].fieldName && obj[i] === ''){
				return arr[j].fieldText;
			}
		}
	}
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
