<template>
  <div id="main-content">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <div
      class="loading"
      v-if="isLoading"
    >加载中...</div>
    <section
      v-else
      v-for="item in currentChannelData"
      :key="item.tag_id"
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
    </van-list>
  </div>
</template>

<script>
import {get,getNewsList} from '../utils/http'
import store from 'store'
import Vue from 'vue'
import {Notify,List} from 'vant'
Vue.use(Notify)
Vue.use(List,{
  'immediate-check':false
})
export default {
  data(){
    return {
      isLoading: true,
      currentChannelData:[],
      refreshData:[],
      loading: false,
      finished: false
    }
  },
  components:{
  },
  comouted:{
    handleRefresh(){
      console.log('更新刷新',$store.state.refreshData)
    }
  },
  methods:{
    async onLoad() {
      this.loading = true
      console.log('到底了')
      // 异步更新数据
      let channel = this.$store.state.currentChannel
      console.log(channel)
      let i = parseInt(Date.now() / 1000)
      let result = await getNewsList({
        url:'/list/',
        params:{
          tag : channel,
          ac: 'wap',
          count: '20',
          format: 'json_raw',
          as: 'A1B5FDBDE677E27',
          cp: '5DD6371ED207BE1',
          max_behot_time: '1574325537',
          _signature: 'rpga3wAA81xXY.LQ.rbb566YGs',
          i: 1574325537
        }
      })
      // result.forEach(item => {
      //   this.currentChannelData.forEach(element => {
      //     if(element.item_id !== item.item_id){
      //       console.log(item)
      //       this.currentChannelData.push(item)
      //     }
          
      //   })
      // });
      console.log(this.currentChannelData)
      this.currentChannelData = [...this.currentChannelData,...result]
      this.loading = false
      // this.finished = true
      console.log('加载完成')
    }
  },
  mounted(){
    let{ channel } = this.$route.params
    let storgeData = store.get(channel)[channel]
    this.currentChannelData = storgeData
    this.isLoading = false
  },
  watch:{
    '$store.state.refreshData'(newValue,oldValue){
      console.log('数据更新了')
      Notify({
        type: 'success',
        message: '成功了!',
        background: 'rgba(213, 233, 247, 0.9)',
        color:'#2a90d7',
        className:'refresh-tip'
      })
      this.currentChannelData = newValue
    },
    async $route(to,from){
      this.isLoading = true
      let {channel} = to.params
      this.$store.commit('changeChannel',{
        currentChannel:channel
      })
      try{
        // 从localstorge里面读取缓存 
        let storgeData = store.get(channel)[channel]
        // console.log(storgeData) 
        if(storgeData){
          this.currentChannelData = storgeData
          this.isLoading = false
        }else{
          console.log("请求接口")
          let result = await get({channel})
          // 设置 localstorge
          store.set(channel,{
            [channel]:result
          })
          // 更新数据
          this.currentChannelData = result
          this.isLoading = false
        }
      }catch(error){
        console.log("没有该信息")
        let result = await getNewsList({
          url:'/list/',
          params:{
            tag : channel,
            count :'20',
            format : 'json_raw',
            as : 'A1C5BDDD96C0248',
            cp : '5DD6A092A478EE1',
            min_behot_time : parseInt(Date.now() / 1000),
            _signature : '38NB5QAAghwmOKnqTgbwUd.DQf',
          }
          
        })
        // 设置 localstorge
        console.log(result)
        store.set(channel,{
          [channel]:result
        })
        this.currentChannelData = result
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#main-content
  width 100%
  flex 1
  overflow hidden
  overflow-y scroll
  .loading
    line-height .48rem
    color #999
    font-size .16rem
    text-align center
  .ivu-scroll-wrapper
    .ivu-scroll-loader
      .ivu-scroll-container
        display none!important
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