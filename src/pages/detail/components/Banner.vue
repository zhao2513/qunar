<template>
  <div>
    <div class="banner" @click="handleClick">
      <img :src="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>
          <!-- {{this.gallaryImgs.length}} -->2
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary 
      :imgs="gallaryImgs" 
      v-show="showGallary"
      @close="handleClose">
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  data(){
    return {
      showGallary:false
    }
  },
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  components:{
    CommonGallary,
    FadeAnimation
  },
  methods:{
    handleClick(){
      this.showGallary=true
    },
    handleClose(){
      this.showGallary=false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  overflow:hidden
  position:relative
  height:0
  padding-bottom:55%
  .banner-img
    width:100%
  .banner-info
    display:flex
    position:absolute
    left:0
    right:0
    bottom:0
    line-height:.6rem
    color:#fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex:1
      font-size:.32rem
      padding:0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      margin-right: 0.1rem
      .banner-icon
        font-size:.24rem
</style>