<template>
  <section class="feed-item">
    <a href="javascript:;">
      <div>
        <span class="title">一位老僧说：当你落魄了，连亲人都看不起你时，请牢记这3句话</span>
        <div class="img-container">
          <img src="http://p3.pstatp.com/list/pgc-image/7ef4991a9ab1442fb4340ae6ad92000e" alt="">
          <img src="http://p3.pstatp.com/list/pgc-image/7ef4991a9ab1442fb4340ae6ad92000e" alt="">
          <img src="http://p3.pstatp.com/list/pgc-image/7ef4991a9ab1442fb4340ae6ad92000e" alt="">
        </div>
        <div class="info">
          <span class="open-label">打开APP</span>
          <span>你好先生  </span>
          <span class="time-ago">152 评论</span>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.feed-item
  width 100%
  margin-bottom .16rem
  border none 
  a
    color #222
    display block
    >div
      .title
        font-size 18px
        line-height 24px
        margin-top 0;
        padding-right 0
        color #000;
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
    

</style>