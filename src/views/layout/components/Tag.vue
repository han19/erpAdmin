<template>
	<div class="tags-menu-con" ref="getWidth">
		<div class="tags-menu-con1" :style="styleObj">
		<el-tag
		    ref="tagStyle"
			v-for="(tag, index) in tagData"
			:key="index"
			:closable="tagData.length > 1 ? true : false"
			:class="{ active: isActive === index }"
			:disable-transitions="false"
			@close="handleClose(tag, index)"
			@click="clickTag(index)"
		>
			{{ tag }}
		</el-tag>
		</div>
	</div>
</template>
<script>
import { unique } from '@/utils/common.js';	
export default {
	data() {
		return {
			isActive: 0,
			tagData:[],
			tagName:'',
			tagPath: [],
			styleObj: '',
			width: '',
		};
	},
	watch: {
		$route: {
			handler: function(val, oldVal) {
				this.tagData.push(val.name);
				this.tagPath.push(val.path);
				this.tagName = val.name;
				this.tagData = unique(this.tagData);
				this.tagPath = unique(this.tagPath);
			},
			// 路由深度观察监听
			deep: true
		},
		tagName() {
			for (let i = 0; i < this.tagData.length; i++) {
				if (this.tagData[i] === this.tagName) {
					this.isActive = i;
				}
			}
			this.updatedTag()
		},
		
	},
	created(){
		this.tagData.push(this.$route.name)
		this.tagPath.push(this.$route.path)
	},
	methods: {
		updatedTag(){
			this.$nextTick(function(){
				console.log(this.tagData.length);
			   let tag = document.querySelector('.el-tag');
			   this.width = tag.clientWidth * this.tagData.length;
			   if(this.width > this.$refs.getWidth.offsetWidth){
				   this.styleObj = {
				   	  width: this.width + 'px',
					  left: - (this.width - this.$refs.getWidth.offsetWidth + this.tagData.length) + 'px'
				   }
			   }else{
				   this.styleObj = {
				       width: this.$refs.getWidth.offsetWidth + 'px',
				   	   left: 0
				   }
			   }
			   
			})
		},
		//关闭tag
		handleClose(tag, index) {
			this.tagData.splice(this.tagData.indexOf(tag), 1);
			this.tagPath.splice(index, 1);
			if (this.isActive === index) {
				this.isActive = this.isActive - 1;
				if(this.isActive > 0){
				  this.$router.push({ path: this.tagPath[this.isActive] });	
				}else{
				  this.$router.push({ path: this.tagPath[0] });		
				}
			}
			if (index < this.isActive) {
				this.isActive = this.isActive - 1;
			}
		    this.updatedTag();
		},
		//点击tag
		clickTag(index) {
			if(this.isActive !== index){
			  this.isActive = index;
			  this.$router.push({ path: this.tagPath[index] });	
			}
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.tags-menu-con {
	overflow: hidden;
	.tags-menu-con1{
		display: flex;
		position:relative;
	}
	.el-tag {
		display: block;
		flex-grow: 1;
		height: 36px;
		line-height: 36px;
		text-align: center;
		border-radius: 0;
		font-size: 14px;
		border: none;
		background: #fff;
		color:#666;
		cursor: pointer;
		min-width:160px;
		padding:0;
		&:nth-child(n + 1) {
			border-right: 1px solid #e0e0e0;
			border-bottom: 1px solid #e0e0e0;
		}
		&:nth-last-of-type(1) {
			border-right: none;
		}
		&.active {
			color:#fff;
			background: #1d66dc;
		}
	}
}
</style>
