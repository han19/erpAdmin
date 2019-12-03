<template>
	<div class="content">
		<div class="header-search-criteria">
			<div class="item">
				<el-date-picker
					v-model="value"
					type="datetimerange"
					:picker-options="pickerOptions"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					align="right"
				></el-date-picker>
			</div>
			<div class="item">
				<el-select v-model="value1" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="item">
				<el-select v-model="value1" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="item">
				<el-input placeholder="请输入内容" v-model="input3" class="input-with-select"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
			</div>
		</div>
		<div class="content-con">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column fixed prop="date" label="日期"></el-table-column>
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="province" label="省份"></el-table-column>
				<el-table-column prop="city" label="市区"></el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
				<el-table-column prop="zip" label="邮编"></el-table-column>
				<el-table-column fixed="right" label="操作">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pickerOptions: {
				shortcuts: [
					{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					},
					{
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					},
					{
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}
				]
			},
			value: '',
			options: [
				{
					value: '选项1',
					label: '黄金糕'
				},
				{
					value: '选项2',
					label: '双皮奶'
				},
				{
					value: '选项3',
					label: '蚵仔煎'
				},
				{
					value: '选项4',
					label: '龙须面'
				},
				{
					value: '选项5',
					label: '北京烤鸭'
				}
			],
			value1: '',
			input3: '',
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333
				}
			]
		};
	},
	methods: {
		handleClick(row) {}
	}
};
</script>

<style lang="scss" scoped="scoped">
.header-search-criteria {
	padding: 10px 20px;
	border-bottom: 10px solid #f1f6fd;
	.item {
		display: inline-block;
		margin-right: 30px;
	}
}
.content-con {
	padding: 10px;
}
</style>
