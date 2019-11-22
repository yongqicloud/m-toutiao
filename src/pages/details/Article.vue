<template>
  <article class="article-body">
    <div :class="{'isauto':isAuto,'isheight':!isAuto}">
      <div class="article__header" v-if="Object.keys(list).length > 0" >
        <h1 class="article-title">{{list.title}}</h1>
        <div class="article-author">
          <div class="author-box">
            <div class="avatar">
              <img :src="list.media_user.avatar_url" alt="111111">
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
    </div>
    <div class="openApp" v-if="isAuto">
      <div class="btn-wrapper">
        <div class="shadow" @click="expand"></div>
        <a href="javascript:;" class="download-text">打开APP阅读全文</a>
      </div>
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
  data(){
    return{
      isAuto:true
    }
  },
  methods:{
    expand(){
      console.log('展开')
      this.isAuto = false

    }
  },
  mounted(){
    console.log('------------')
  }
}
</script>

<style lang="stylus" >
.article-body
  position relative
  .isauto
    height 7.484rem
    overflow hidden
  .isheight
    height auto

  .openApp
    width 100%
    height .61rem
    position absolute
    background #fff
    bottom 0
    .btn-wrapper
      box-sizing border-box
      height 100%
      padding .12rem .14rem .12rem .14rem
      .shadow
        position absolute
        text-align center
        height .78rem
        top -.78rem
        left 0
        right 0
        background-image: linear-gradient(-180deg, rgba(255,255,255,0) 0, #FFFFFF 100%)
        &::after
          content ""
          display inline-block
          background-image url('~assets/images/open-app.png')
          background-repeat no-repeat
          background-size contain
          width .16rem
          height .16rem
          margin-top .45rem
      a.download-text
        display flex
        width 100%
        height 100%
        background-image linear-gradient(to right, #ff0000, #ff5050)
        border-radius .185rem
        justify-content center
        align-items center
        font-size .15rem
        color #fff
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