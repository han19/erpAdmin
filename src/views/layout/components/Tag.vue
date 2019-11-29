<template>
	<div class="tags-menu-con">
		<el-tag v-for="(tag, index) in dynamicTags" :key="tag" closable :class="{ active: isActive === index }" :disable-transitions="false" @close="handleClose(tag, index)">
			{{ tag }}
		</el-tag>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: 3,
			dynamicTags: [
				// '用户列表',
				// '客户列表',
				// '我的客户',
				// '已成交客户',
				// '新房成交结算',
				// '二手房成交结算',
				// '租赁成交结算',
				// '代办成交结算',
				// '成交结算统计',
				// '部门设置',
				// '系统设置',
				// '角色权限设置',
				// '权限组管理设置',
				// '佣金模块设置',
				// '字段设置'
			]
		};
	},
	methods: {
		handleClose(tag, index) {
			this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			if (index < this.isActive) {
				this.isActive = this.isActive - 1;
			}
			if (index === this.isActive) {
				this.isActive = index;
			}
			if (this.dynamicTags.length > 0 && this.isActive < 0) {
				this.isActive = this.dynamicTags.length;
			}
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.tags-menu-con {
	display: flex;
	.el-tag {
		color: #fff;
		display: block;
		flex: 1;
		height: 36px;
		line-height: 36px;
		text-align: center;
		border-radius: 0;
		font-size: 14px;
		border: none;
		min-width: 160px;
		background: #aaa;
		&:nth-child(n + 2) {
			border-right: 1px solid #fff;
		}
		&:nth-last-of-type(1) {
			border-right: none;
		}
		&.active {
			background: #3f66f5;
		}
	}
}
</style>
