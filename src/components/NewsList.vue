<template>
  <div>
    <section
      v-for="item in currentChannel"
      :key="item.id"
    >
      <a href="javascript:;" class="article-link">
        <div class="item_detail">
          <h3 class="item-title">{{item.title}}</h3>
          <div class="img-list">
            <img src="{item.url}" alt="">
          </div>
          <div class="item-info">
            <div>
              <span class="newspaper space">{{item.source}}</span>
              <span class="comment-count space">评论 {{item.repin_count}}</span>
              <span class="release-time">{{item.behot_time}}</span>
            </div>
          </div>
        </div>
      </a>
    </section>
    
  </div>

</template>

<script>
import {get} from '../utils/http'
export default {
  data(){
    return {
      currentChannel:[]
    }
  },
  comouted:{
    
  },
  mounted(){
    let to = this.$route.params
  },
  watch:{
     $route(to,from){
      // console.log(to,from)
      let {channel} = to.params
      this.$store.commit('changeChannel',{
        currentChannel:channel
      })

      ;(async ()=>{
        
        let result = await get({channel})
        console.log(result)
        this.currentChannel = result.data

      })()
    }
  }
}
</script>

<style lang="stylus" scoped>
section 
  margin 0 .15rem
  border-bottom 1px solid rgba(221, 221, 221, 0.6); 
  .article-link
    display block
    min-height .42rem
    padding .16rem 0
    h3.item-title
      line-height .21rem
      font-size .17rem
      font-weight normal
      overflow hidden
      text-overflow ellipsis
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    .item-info
      margin-top .06rem
      color #999
      overflow hidden
      font-size 0
      >div
        font-size 0
        .space
          margin-right .03rem
        span 
          font-size .09rem
          // -webkit-transform:scale(0.5)

</style>