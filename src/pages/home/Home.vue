<template>
	<div><!-- 组件名标签 -->
	  <home-header></home-header>
	  <home-swiper :list="swiperList"></home-swiper>
	  <home-icons :list="iconList"></home-icons>
	  <home-recommend :list="recommendList"></home-recommend>
	  <home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>//引入component中的组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'//在使用的组件中引用vuex来实现数据映射
export default{
  name: 'Home',
  components: {//组件名
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  },
  data () {
  //需注意axios返回的数据要用data函数接收
  	return{
  		swiperList:[],
      lastCity:'',
  		iconList:[],
  		recommendList:[],
  		weekendList:[]
  	}
  },
    computed:{
    ...mapState(['city'])
  },
  methods: {
  	getHomeInfo(){//以get方式发送请求
  		axios.get('/static/mock/index.json?city=' + this.city)
			.then(this.getHomeInfoSucc)
  	},//then来接收返回参数
  	getHomeInfoSucc(res){
  		res=res.data
  		if(res.ret && res.data){
  		//用ret(属性内容为true)来判断是否请求成功
  			const data=res.data
  			// data来接收res的data属性里面的数据
  			this.swiperList=data.swiperList
  			this.iconList=data.iconList
  			this.recommendList=data.recommendList
  			this.weekendList=data.weekendList
  		}
  	}
  },
  mounted () {
  //使用生命周期函数来调用此方法，进而发送axios数据请求
    this.lastCity=this.city
  	this.getHomeInfo()
  },
  activated(){//性能优化调整，解决keep-alive缓存
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      this.getHomeInfo()
      //当点击不同城市时，调用一次ajax请求
    }
  }
}
</script>

<style>
</style>
