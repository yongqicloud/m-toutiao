<template>
  <article class="article-body">
    <div class="article__header">
      <h1 class="article-title">{{list.title}}</h1>
      <div class="article-author">
        <div class="author-box">
          <div class="avatar">
            <img :src="list.media_user.avatar_url" alt="">
          </div>
          <div class="author-info">
            <span class="author-name">{{list.media_user.screen_name}}</span>
            <span class="v-info"></span>
          </div>
        </div>
        <div class="publish-time">
          <span>8小时前</span>
        </div>
      </div>
    </div>
    <div class="article-content" v-html="list.content">
    </div>
  </article>
</template>

<script>
export default {
  props:{
    'list':{
      type:Object
    }
  },
  mounted(){
    console.log('------------')
    console.log(this.list)
  }
}
</script>

<style lang="stylus" >
.article-body
  .article__header
    padding 0 .14rem
    .article-title
      font-family 'PingFangSC-Medium'
      font-size .24rem
      line-height .34rem
      color #222
      font-weight normal
    .article-author
      margin-top .12rem
      display flex
      justify-content space-between
      align-items center
      .author-box
        display flex
        justify-content center
        align-items center
        .avatar 
          width .24rem
          height .24rem
          border-radius .24rem
          overflow hidden
          img 
            width 100%
            height 100%
        .author-info
          margin-left .05rem
          display flex
          justify-content center
          align-items center
          .author-name
            margin-right .05rem
          .v-info
            display block
            width .14rem
            height .14rem
            margin-right .1rem
            background url("https://s1.pstatp.com/growth/mobile_detail/image/v-0.tl0z9x5L.png") no-repeat
            background-size 100%
      .publish-time
        color #999
        font-size .12rem
  .article-content
    padding 0 .14rem .24rem
    .img-wrapper-embedded
      background: url(//s1.pstatp.com/growth/mobile_detail/image/toutiaoicon_loading_textpage@3x.RQmcZRIc.png) no-repeat center center;
      background-size: 40%;
      margin-right: auto;
      margin-left: auto;
      position: relative;
    img 
      width: 100%;
      display: block;
      margin-right: auto;
      margin-left: auto;
      margin-top: 4px;
      transition: opacity 200ms ease;
    strong
      font-size .18rem
      font-weight bolder
    p,li,span 
      word-wrap: break-word;
      color: #222;
      line-height .28rem
      text-align: justify;
      list-style-position: inside;
      list-style-type: square;
    p,li,span,strong 
      font-size: 18px;
      line-height: 1.76;
    p,blockquote{
      font-size .18rem
      margin-top .17rem
    }
    
      
        
</style>