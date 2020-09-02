<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
 props:{
  list:Array
 }
}
</script>
<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		padding-left:.2rem
		line-height:.8rem
		background:#eee
		text-indnt:.2rem
	.item-img-wrapper
		overflow:hidden
		padding-bottom:38%
		height:0
		.item-img
			width:100%
	.item-info
		padding: .1rem .2rem .3rem
		.item-title
			line-height:.54rem
			font-size:.32rem
		.item-desc
			line-height:.4rem
			color:#888
			ellipsis()
</style>