<template>
  <div>
    <div class="search">
      <input type="text" 
      class="search-input" 
      placeholder="输入城市名或拼音"
      v-model="keyword"><!-- v-model数据双向绑定 -->
      <div class="search-content" ref="search" v-show="keyword"><!-- 当keyword有数据时显示，没有则隐藏。 -->
        <ul>
          <li class="search-item border-bottom" 
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)">
            {{item.name}}
          </li>
          <li class="search-item border-bottom"
          v-show="hasNoData">
            没有找到匹配数据！！
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  data(){
    return{//在该组件全局中定义这些数据
      keyword:'',//接收搜索框里的数据
      list:[],//接收搜索到的关键字
      timer:null
    }
  },
  computed:{
    hasNoData(){//当列表list没有元素时，隐藏
    return !this.list.length
    }
  },
  props:{//接收父组件传来的数据
    cities:Object
  },
  watch:{
    keyword (){
    if(this.timer){
      clearTimeout(this.timer)
    }
    if(!this.keyword){//当搜索框没有数据时，清空列表
      this.list=[]
    }
    this.timer=setTimeout(() => {
      const result=[]
      for (let i in this.cities){//
        this.cities[i].forEach( (value) =>{
        //cities[i]指的是'A'里面的内容,它会传给value
        if(value.spell.indexOf(this.keyword.toLowerCase())>-1 || value.name.indexOf(this.keyword)>-1){//用indexOf取出关键字
          result.push(value)
        }
        })
      }
      this.list=result
    },100)
    }
  },
  methods:{
    handleCityClick(city){
      this.changeCity(city)//把city数据传入，修改数据
      this.$router.push('/')//当点击地名时，触发编程式导航
    },
    ...mapMutations(['changeCity'])
  },
  mounted (){
    this.scroll = new Bscroll(this.$refs.search,{
      click:true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    background:$bgColor
    padding:0 .1rem
    height:.72rem
   .search-input
      color:#666
      box-sizing:border-box
      width:100%
      height:.62rem
      padding:0 .1rem
      line-height:.62rem
      text-align:center
      border-radius:.06rem
  .search-content
    z-index:1
    overflow:hidden
    position:absolute
    top:1.58rem
    right:0
    left:0
    bottom:0
    background:#eee
    .search-item
      line-height:.62rem
      padding-left:.2rem
      background:#fff
      color:#666
</style>
