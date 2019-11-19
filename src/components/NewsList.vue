<template>
  <div id="main-content">
    <div
      class="loading"
      v-if="isLoading"
    >加载中...</div>
    <section
      v-else
      v-for="item in currentChannel"
      :key="item.tag_id"
      @click="toDetail"
    >
      <router-link
        tag="a"
        :to="`/details/${item.tag_id}`"
        href="javascript:;" class="article-link">
        <div :class="{'item_detail':true,'set-width':item.image_url}">
          <h3 class="item-title">{{item.title}}</h3>
          <div 
            class="img-list" 
            v-if="item.image_list.length "
          >
            <ul>
              <li
                v-for="(list,key) in item.image_list"
                :key="list.publish_time"
              >
                <img :src="list.url" alt="">
              </li>
            </ul>
          </div>
          <div
            class="large-img"
            v-else-if="item.large_image_url"
          >
            <img :src="item.large_image_url" alt="">
          </div>
          <div class="item-info">
            <div>
              <span class="label space" v-if="item.label">置顶</span>
              <span class="newspaper space">{{item.source}}</span>
              <span class="comment-count space">评论 {{item.repin_count}}</span>
              <span class="release-time">{{item.publish_time}}</span>
            </div>
          </div>
        </div>
        <div class="right-img-box"
          v-if="item.image_url"
        >
          <img :src="item.image_url" alt="">
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import {get,getAll} from '../utils/http'
import store from 'store'

export default {
  data(){
    return {
      isLoading: true,
      currentChannel:[]
    }
  },
  components:{
  },
  comouted:{
    
  },
  methods:{
    toDetail(){
      // this.$router.push('/details')
    }
  },
  mounted(){
    console.log(this.$route)
    let{ channel } = this.$route.params
    console.log(channel)
    let storgeData = store.get(channel)[channel]
    this.currentChannel = storgeData
    this.isLoading = false
  },
  watch:{
    async $route(to,from){
      this.isLoading = true
      let {channel} = to.params
      console.log(channel)
      this.$store.commit('changeChannel',{
        currentChannel:channel
      })
      try{
        // 从localstorge里面读取缓存 
        let storgeData = store.get(channel)[channel]
        console.log(storgeData) 
        if(storgeData){
          this.currentChannel = storgeData
          this.isLoading = false
        }else{
          console.log("请求接口")
          let result = await get({channel})
          // 设置 localstorge
          store.set(channel,{
            [channel]:result
          })
          // 更新数据
          this.currentChannel = result
          this.isLoading = false
        }
      }catch(error){
        console.log("没有该信息")
        let result = await get({channel})
        // 设置 localstorge
        store.set(channel,{
          [channel]:result
        })
        this.currentChannel = result
        this.isLoading = false
      }
    // let res = await getAll()
    }
  }
}
</script>

<style lang="stylus" scoped>
#main-content
  // height calc(100% - .37rem)
  width 100%
  flex 1
  overflow hidden
  overflow-y scroll
  .loading
    line-height .48rem
    color #999
    font-size .16rem
    text-align center
  section 
    margin 0 .15rem
    border-bottom 1px solid rgba(221, 221, 221, 0.6); 
    .article-link
      display flex
      min-height .42rem
      padding .16rem 0
      
      .right-img-box
        width 33.3%
        height .7383rem
        overflow hidden
        background url('~assets/images/lazyload.png') #efefef  no-repeat center center
        background-size 50%
        img 
          width 100%
          border none 
      
      .item_detail
        flex 1
        h3.item-title
          display: -webkit-box;
          line-height .21rem
          font-size .17rem
          font-weight normal
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        .large-img
          width 100%
          img 
            width 100%
        .img-list
          margin-top .03rem
          ul
            width 100%
            display flex
            li
              box-sizing border-box
              width 33.3333%
              height .7383rem
              padding .02rem
              background url('~assets/images/lazyload.png') #efefef  no-repeat center center
              background-size 50%
              overflow hidden
              img 
                width 100%
        .item-info
          margin-top .06rem
          color #999
          overflow hidden
          font-size 0
          >div
            font-size 0
            height .13rem
            white-space nowrap
            display flex
            justify-content  flex-start
            transform-origin:0 0
            transform: scale(.5)
            // height .13rem
            span.space
              margin-right .1rem
            span 
              display inline-block
              font-size .20rem
              // transform scale(0.5)
              // transform-origin:0 0;
            span.label
              font-weight 700
              color: #f85959;
              border-color: rgba(248, 89, 89, 0.5);
      .set-width
        width 66.6%




</style>