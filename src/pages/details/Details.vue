<template>
  <div id="Details">
    <OpenApp></OpenApp>
    <Article :tool="tools" :list="list" ></Article>
    <RecommendationItem>
      <template v-slot:title>
        热门推荐
      </template>
      <template v-slot:loopItem>
          <FeedItem></FeedItem>
      </template>
    </RecommendationItem>
    <RecommendationItem>
      <template v-slot:title>
        猜你喜欢
      </template>
      <template v-slot:loopItem>
          fffff
      </template>
    </RecommendationItem>
    <RecommendationItem>
      <template v-slot:title>
        搜索
      </template>
      <template v-slot:loopItem>
          fffff
      </template>
    </RecommendationItem>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import { getDetails,getRecommand } from "utils/http";

import OpenApp from 'components/OpenApp'
import Article from './Article'                                                                          
import RecommendationItem from 'components/recommendation-item'
import FeedItem from 'components/feed-item'
export default {
  data(){
    return {
      tools:'Nihao',
      list:{}
    }
  },
  watch:{
    '$router'(to,from){
      console.log(to)
    }
  },
  async mounted() {
    let {id} = this.$route.params
    let result = await getDetails({
      url:`/api/i${id}/info/`,
      params:{
        _signature: 'Qm7dcBASH727lTV.cApwU0Ju3W',
        i: id
      }
    })
    this.list = result.data

    let recommand = await getRecommand({
      url:`/api/related/open/${id}/?num=5&code_id=14798012085000246`
    })
    console.log(recommand)
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
</style>