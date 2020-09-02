<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHrader',

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    text-align:center
    position:relative
    background:$bgColor
    color:#fff
    line-height:$headerHeight
    overflow:hidden
    height:$headerHeight
    font-size:.32rem
   .header-back
      top: 0
      left: 0
      position:absolute
      width:.64rem
      text-align:center
      font-size:.4rem
      color:#fff
</style>
