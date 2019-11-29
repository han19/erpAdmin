<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" background-color="#3F66F5" text-color="#fff" active-text-color="#ffd04b">
		<div class="menu-item" v-for="(item, index) in permission_routes" :key="index" :index="indexString(index)">
			<el-menu-item :index="indexString(index)" v-if="!item.hidden">
				<template slot="title">
					<router-link :to="item.path">{{ item.name }}</router-link>
				</template>
			</el-menu-item>
			<el-submenu v-else-if="item.children && item.hidden" :index="indexString(index)">
				<template slot="title">
					<span>{{ item.name }}</span>
				</template>
				<el-menu-item v-for="(itemTwo, indexTwo) in item.children" :key="indexTwo" :index="indexString1(index, indexTwo)">
					<router-link :to="itemTwo.path" v-if="itemTwo.navigation">{{ itemTwo.name }}</router-link>
				</el-menu-item>
			</el-submenu>
		</div>
	</el-menu>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['permission_routes'])
	},
	created() {
		console.log(this.permission_routes);
	},
	methods: {
		indexString(index) {
			return '' + index;
		},
		indexString1(index, indexTwo) {
			return index + '-' + indexTwo;
		}
	}
};
</script>

<style>
.el-menu-vertical-demo a {
	color: #fff;
	display: block;
}
</style>
