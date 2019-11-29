// const isProduction = process.env.NODE_ENV === 'production';
// const cdn = {
// 	css: [
// 		'https://cdn.jsdelivr.net/npm/vant@2.2/lib/index.css',
// 	    'https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css',
// 	],
// 	js: [
// 		'https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js',
// 		'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
// 		'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
// 		'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
// 		'https://cdn.jsdelivr.net/npm/vant@2.2/lib/vant.min.js',
// 		'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js',
// 		'https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js',
// 	]
// }

module.exports = {
	devServer: {
		open: true
	},
	lintOnSave: process.env.NODE_ENV !== 'production',
	productionSourceMap: false,
	// chainWebpack: config => {
	// 	// 生产环境配置
	// 	if (isProduction) {
	// 		// 生产环境注入cdn
	// 		config.plugin('html')
	// 			.tap(args => {
	// 				args[0].cdn = cdn;
	// 				return args;
	// 			});
	// 	}
	// },
	// configureWebpack: config => {
	// 	if (isProduction) {
	// 		// 用cdn方式引入
	// 		config.externals = {
	// 			'vue': 'Vue',
	// 			'vuex': 'Vuex',
	// 			'vue-router': 'VueRouter',
	// 			'axios': 'axios',
	// 			'vant': 'vant',
	// 			'echarts': 'echarts'
	// 		}
	// 	}
	// },
}
