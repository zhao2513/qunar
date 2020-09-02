<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper" 
            v-for="item of hot" 
            :key="item.id" 
            @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          ><div>{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//数据在vuex中映射到模板上。用mapMutations修改数据
import {mapState,mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter:String
  },
    computed:{
    ...mapState({currentCity:'city'})
    //把公共数据state.city映射到currentCity
  },
  methods:{
    handleCityClick(city){
      // this.$store.commit('changeCity',city)
      this.changeCity(city)
      //把city数据传入mutations的changeCity方法中，修改数据
      this.$router.push('/')//当点击地名时，触发编程式导航
    },
    ...mapMutations(['changeCity'])
    //把mutation的changeCity映射到组件的changeCity里，
    //即组件有了一个可以用的changeCity方法，相当于复制。
  },
  watch:{
    letter(){
      if(this.letter){
        const element=this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
    mounted () {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc
  .list 
    overflow:hidden
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    .title
      line-height:.54rem
      background:#eee
      padding-left:.2rem
      color:#666
      font-size:.26rem
    .button-list
      padding:.1rem .6rem .1rem .1rem
      overflow:hidden
      .button-wrapper
        float:left
        width:33.3%
        .button
          border: .02rem solid #ccc
          margin:.1rem
          padding:.1rem 0
          text-align:center
          border-radius:.06rem
    .item-list
      .item
        line-height:.54rem
        color:#666
        padding-left:.2rem

</style>
