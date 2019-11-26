<template>
  <div id="main-content">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      :offset="20"
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
              <span class="release-time">{{item.publish_time | stampToYYMMDD}}</span>
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
import moment from 'moment'
moment.locale('zh-cn')     
import {Notify,List, Collapse} from 'vant'
Vue.use(Notify)
Vue.use(List)
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
  filters:{
    stampToYYMMDD(value){
       // 处理逻辑
      let date = ~~(Date.now() / 1000)
      let seconds = date - value
      let minutes = ~~(seconds / 60)
      let hours = ~~(seconds / 3600)
      let day = ~~(hours / 24)
      if(seconds < 60){
        return '刚刚'
      }else if(hours < 1 && minutes < 60 && seconds>= 60){
        // 分钟
        return `${minutes}分钟前`
      }else if(hours >= 1 && hours < 24 && seconds >= 60 ){
        // 小时
        return `${hours}小时前`
      }else if(hours >= 24 && day >=1 && day <= 3){
        // 天
        return `${day}天前`
      }else{
        return moment(value * 1000).format('MM-DD HH:mm')
      }
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
        url:`/list/?tag=${channel}`,
        params:{
          ac: 'wap',
          count: '20',
          format: 'json_raw',
          as: 'A1B5FDBDE677E27',
          cp: '5DD6371ED207BE1',
          max_behot_time: i,
          _signature: 'rpga3wAA81xXY.LQ.rbb566YGs',
          i
        }
      })
      console.log(this.currentChannelData)
      this.currentChannelData = [...this.currentChannelData,...result]
      this.loading = false
      // this.finished = true
      console.log('加载完成')
    }
  },
  mounted(){
    let{ channel } = this.$route.params
    store.set('currentChannel',{
      channel
    })
    try{
      let storgeData = store.get(channel)[channel]
      this.currentChannelData = storgeData
    }catch(error){
      console.log(error.message)
    }
    this.isLoading = false
  },
  watch:{
    '$store.state.refreshData'(newValue,oldValue){
      console.log('数据更新了')
      Notify({
        type: 'success',
        message: '刷新成功!',
        background: 'rgba(213, 233, 247, 0.9)',
        color:'#2a90d7',
        className:'refresh-tip'
      })
      this.currentChannelData = newValue
    },
    // 动态路由
    async $route(to,from){
      this.isLoading = true
      let {channel} = to.params
      this.$store.commit('changeChannel',{
        currentChannel:channel
      })
      store.set('currentChannel',{
        channel
      })
      try{
        // 从localstorge里面读取缓存 
        let storgeData = store.get(channel)[channel]
        // console.log(storgeData) 
        if(storgeData){
          this.currentChannelData = storgeData
          this.isLoading = false
        }else{
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
        console.log("没有该信息的本地存储")
        let i = parseInt(Date.now() / 1000)
        let result = await getNewsList({
          url:`/list/?tag=${channel}`,
          params:{
            ac: 'wap',
            count: '20',
            format: 'json_raw',
            as: 'A1B5FDBDE677E27',
            cp: '5DD6371ED207BE1',
            max_behot_time: '',
            _signature: 'rpga3wAA81xXY.LQ.rbb566YGs',
          }
        })
        //设置 localstorge
        store.set(channel,{
          [channel]:result
        })
        this.currentChannelData = result
        this.isLoading = false
      }
    }
  },
  beforeRouteUpdate (to,from,next){
    next()
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