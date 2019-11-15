<template>
  <div>
    <header>
      <div class="msg-box">
        <a href="javascript:;" class="msg-link"></a>
      </div>
      <div class="logo-box">
        <a href="javascript:;" class="logo-link"></a>
        <i class="refresh-box"></i>
      </div>
      <div class="search-box">
        <a href="javascript:;" class="search-link"></a>
      </div>
    </header>
    <nav>
      <div class="top-menu-list">
        <a href="javascript:;" class="btn-nav">推荐</a>
        <a href="javascript:;" class="btn-nav">视频</a>
        <a href="javascript:;" class="btn-nav">热点</a>
        <a href="javascript:;" class="btn-nav">热点</a>
        <a href="javascript:;" class="btn-nav">热点</a>
        <a href="javascript:;" class="btn-nav">热点</a>
        <a href="javascript:;" class="btn-nav">热点</a>
        
      </div>
      <div class="top-menu-more">
        <div class="menu-more-shadow"></div>
        <a href="javascript:;" class="btn-more">
          <span></span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="stylus">
header 
  box-sizing border-box
  width 100%
  height .44rem
  background #d43d3d
  display flex
  align-items center
  justify-content center
  flex-wrap nowrap
  position relative
  .msg-box 
    width .54rem
    height .25rem
    display flex
    position absolute
    top 50%
    transform: translateY(-50%);
    left .1rem
    .msg-link
      display block
      margin auto 
      width .32rem
      height 100%
      background url("~assets/images/msg.png") no-repeat
      background-size contain 
  .logo-box
    width 50%
    height 100%
    display flex
    justify-content  center
    .logo-link
      display block
      width .98rem
      height 100%
      background url(https://s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png) no-repeat right center
      background-size .83rem
    .refresh-box
      display block
      width .25rem
      height 100%
      background url(https://s3a.pstatp.com/growth/mobile_list/image/titlebar_refresh_small@3x_96fb31e4.png) no-repeat center center
      background-size .16rem
      
  .search-box
    width .36rem
    height .24rem
    display flex
    position absolute
    top 50%
    transform: translateY(-50%);
    right .1rem
    .search-link
      display block
      width .24rem
      height .24rem
      background url("~assets/images/search.png") no-repeat
      background-size contain 
nav
  width 100%
  height .37rem
  display flex
  font-family 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif
  background #f4f5f6
  .top-menu-list
    width calc(100% - .4rem)
    height .36rem
    display flex
    white-space nowrap
    // flex-wrap no-wrap
    // justify-content flex-start
    overflow hidden
    overflow-x scroll 
    .btn-nav
      box-sizing border-box
      display inline-block
      width .54rem
      height .26rem
      margin .05rem 0 .05rem .05rem
      padding 0 .1rem
      font-size  .17rem
      color #505050
  .top-menu-more
    width .4rem
    height .36rem
    position relative
    .menu-more-shadow
      width .1rem
      height 100%
      position absolute
      left -.1rem
      top 0
      border-radius 50%
      background url("~assets/images/menu-shadow.png") no-repeat center right
      background-size contain
      // background rgba(244, 245, 246, 0.3)
    .btn-more
      display block
      width 100%
      height 100%
      position relative
      span 
        display block
        width .17rem
        height .17rem
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        &::before
          content ""
          width .17rem
          height .02rem
          position absolute
          background #f85959
          left 50%
          top 50%
          transform translate(-50%,-50%)
        &::after
          content ""
          width .02rem
          height .17rem
          position absolute
          background #f85959
          left 50%
          top 50%
          transform translate(-50%,-50%)

</style>