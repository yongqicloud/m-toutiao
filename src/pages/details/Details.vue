<template>
  <div id="Details">
    <OpenApp></OpenApp>
    <Article :tool="tools" :list="list" ></Article>
    <RecommendationItem>
      <template v-slot:title>
        热门推荐
      </template>
      <template v-slot:loopItem>
          <FeedItem
            v-for="item in recommend"
            :key="item.id"
            :item="item"
          ></FeedItem>
      </template>
    </RecommendationItem>
    <RecommendationItem >
      <template v-slot:title>
        猜你喜欢
      </template>
      <template v-slot:loopItem>
          <FeedItem
            v-for="item in guessLike"
            :key="item.id"
            :item="item"
          ></FeedItem>
      </template>
    </RecommendationItem>
    <RecommendationItem>
      <template v-slot:title>
        搜索
      </template>
      <template v-slot:loopItem>
          <div class="sug-word-item"
            v-for="list in business"
            :key="list.id"
          >{{list.word}}</div>
      </template>
    </RecommendationItem>
    <div class="space"></div>
    <OpenApp></OpenApp>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import { getDetails,getRecommand } from "utils/http";
import _ from 'lodash'

import OpenApp from 'components/OpenApp'
import Article from './Article'                                                                          
import RecommendationItem from 'components/recommendation-item'
import FeedItem from 'components/feed-item'
export default {
  data(){
    return {
      tools:'Nihao',
      list:{},
      recommend:[],
      guessLike:[],
      business:[]
    }
  },
  watch:{
    '$router'(to,from){
      console.log(to)
    }
  },
  async mounted() {
    let {id} = this.$route.params
    // 请求详情文章数据
    let result = await getDetails({
      url:`/tt/i${id}/info/`,
      params:{
        _signature: 'Qm7dcBASH727lTV.cApwU0Ju3W',
        i: id
      }
    })
    this.list = result.data
    // 请求推荐栏目数据
    let recommendRes = await getRecommand({
      url:`/tt/related/open/${id}/?num=5&code_id=14798012085000246`
    })
    let keys = Object.keys(recommendRes.data)
    this.recommend = recommendRes.data[keys[0]]
    this.guessLike = recommendRes.data[keys[1]]
    // 请求底部推荐排行
    let business = await getDetails({
      url:'/api/suggest_words/',
      params:{
        'business_id': 10014,
        'from_group_id': id
      }
    })
    this.business = business.data[0].words
    console.log(business.data[0].words)
  },
  components:{
    OpenApp,
    Article,
    RecommendationItem,
    FeedItem
  }
};
</script>

<style lang="stylus">
#Details
  height 100%
  width 100%
  overflow hidden
  overflow-y scroll
  .sug-word-item
    display inline-block
    width 48%
    color #212121
    box-sizing border-box
    line-height .38rem
    font-size .16rem
    white-space nowrap
    overflow hidden
    text-overflow ellipsis 
  .sug-word-item:nth-child(2n+1)
    width 48%
    padding-right 2%
  
  .sug-word-item:nth-child(2n)
    width 48%
    padding-left 2%
    // position relative
    // &::before
    //   content ""
    //   display block
    //   width .01rem
    //   height .1rem
    //   background #D8D8D8
    //   position absolute
    //   top 0
    //   bottom 0
    // left 0
    // margin auto
  .space 
    width 100%
    padding-bottom 1rem
    
  

</style>