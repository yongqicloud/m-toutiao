<template>
  <section class="feed-item">
    <a href="javascript:;">
      <div class="left" v-if="item.video">
        <img :src="item.video.cover_image_url" alt="">
      </div>
      <div :class="{right:item.video}">
        <span class="title line2">{{item.title}}</span>
        <div class="img-container"
          v-if="item.image_list.length>2"
        >
          <img 
            v-for="(list,index) in item.image_list"
            v-if="index <= 2"
            :key="list.url"
            :src="list.url" alt=""
          >
        </div>
        <div class="info">
          <span class="open-label">打开APP</span>
          <span>{{item.author.name}}</span>
          <span class="time-ago">{{item.stats.comment_count}}评论</span>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  props:['item'],
  mounted(){
    
  },
  
}
</script>

<style lang="stylus">
.feed-item
  width 100%
  margin-bottom .16rem
  border none 
  a
    color #222
    display flex
    .right 
      box-sizing border-box
      padding-left .12rem
      flex 1
    >div
      width 100%
      .title
        font-size 18px
        line-height 24px
        margin-top 0;
        padding-right 0
        color #000
      .title.line2
        -webkit-line-clamp: 2
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-box-orient: vertical
      .img-container
        display flex
        margin-top .08rem
        justify-content center 
        height 22vw
        img 
          width 32%
          height 100%
        img:nth-child(2){
          padding 0 .03rem
        }
      .info
        margin-top .09rem
        color #999
        font-size .11rem
        .open-label
          color #f85959
          margin-right .1rem
        .time-ago
          margin-left .07rem
    >div.left 
      width 32%
      height 22vw
      img
        width 100%
        height 100%

</style>