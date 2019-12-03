<template>
		<div class="menu-item">
			<template v-for="(item, index) in permission_routes">
				<el-menu-item :index="item.children[0].path" v-if="!item.hidden">
					<i class="iconfont icon" v-html="item.icon"></i>
					<span slot="title">{{ item.name }}</span>
				</el-menu-item>
				<el-submenu v-else-if="item.children && item.hidden" :index="indexString(index)">
					<template slot="title">
						<i class="iconfont icon" v-html="item.icon"></i>
						<span slot="title" v-if="!isCollapse">{{ item.name }}</span>
					</template>
					<div v-for="(itemTwo, indexTwo) in item.children" :key="indexTwo">
						<el-menu-item :index="itemTwo.path" v-if="itemTwo.navigation">
							<i class="iconfont icon" v-html="itemTwo.icon"></i>
							<span slot="title">{{ itemTwo.name }}</span>
						</el-menu-item>
					</div>
				</el-submenu>
			</template>
		</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['permission_routes']),
	},
	props: {
		isCollapse: Boolean
	},
	methods: {
		indexString(index) {
			return '' + index;
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.menu-item a {
	color: #fff;
	display: block;
}
.menu-item i {
	font-size: 16px;
	color: #fff;
}
.menu-item span {
	padding-left: 10px;
}
</style>
