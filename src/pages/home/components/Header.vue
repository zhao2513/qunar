<template>
	<div class="header">
	  <div class="header-left">
	  <span class="iconfont">&#xe624;</span>
	  </div>
	  <div class="header-input">
		<span class="iconfont">&#xe632;</span>
	  输入城市、景点、酒店</div>
	  <router-link to='/city'>
		  <div class="header-right">
		    {{this.city}}
			<span class="iconfont arrow-icon">&#xe64a;</span>
		  </div>
	  </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
  	...mapState(['city']),//把公有数据city映射到city数组中
  	// ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
	  background:$bgColor
	  display:flex
	  color:#fff
	  line-height:$headerHeight
	  .header-left
	  	width:.64rem
	  	float:left
	  .header-input
	  	flex:1
	  	height:.64rem
	  	line-height:.64rem
	  	margin-top:.12rem
	  	margin-left:.2rem
	  	background:#fff
	  	border-radius:.1rem
	  	color:#ddd
	  .header-right
	    color:#fff
	    min-width:1.04rem
	    padding:0 .1rem
	    float:right
	    text-align:center
	    .arrow-icon
	      font-size:.24rem

</style>
