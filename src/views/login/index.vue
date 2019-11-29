<template>
	<div class="login">
		<div class="login-con">
			<div class="logo">ERP系统</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="userName"><el-input v-model="ruleForm.userName"></el-input></el-form-item>
				<el-form-item label="密码" prop="userPassword"><el-input type="password" v-model="ruleForm.userPassword" autocomplete="off"></el-input></el-form-item>
				<el-form-item><el-button type="primary" @click="submitForm('ruleForm')">登录</el-button></el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { setToken } from '@/utils/auth.js'
export default {
	data() {
		var validateUserName = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入用户名'));
			} else {
				callback();
			}
		};
		var validateUserPassword = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入用户名'));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				userName: '',
				userPassword: ''
			},
			rules: {
				userName: [{ validator: validateUserName, trigger: 'blur' }],
				userPassword: [{ validator: validateUserPassword, trigger: 'blur' }]
			}
		};
	},
	methods: {
		//登录
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.$postFn('login', {
						userName: this.ruleForm.userName,
						userPassword: this.ruleForm.userPassword
					}).then(res => {
						if(res.isSuccess){
							setToken(res.resultObject.token);
							this.$router.push({ path: '/' });
							localStorage.setItem('auth',JSON.stringify(res.resultObject.auth))//保存用户权限
						}
					});
				} else {
					return false;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.login {
	height: 100%;
	background: #3f66f5;
	.login-con {
		width: 400px;
		height: 260px;
		padding: 0 0 50px 0;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -195px;
		margin-left: -200px;
		background: #fff;
		border-radius: 10px;
		.logo {
			font-size: 34px;
			color: #3f66f5;
			text-align: center;
			padding: 30px 0;
		}
		.demo-ruleForm {
			padding-right: 60px;
		}
		.el-button {
			width: 100%;
		}
	}
}
</style>
