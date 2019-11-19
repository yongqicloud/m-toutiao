<template>
  <div class="open-app">
    <div>
      <a href="javascript:;">
        <div class="logo-wrapper">
          <div class="logo"></div>
          <div class="text-box">
            <p class="logo-text">今日头条</p>
          </div>
        </div>
        <div class="open">打开</div>
      </a>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .open-app
    width 100%
    height .5rem
    >div
      width 100%
      height 100%
      a
        box-sizing border-box
        display flex
        width 100%
        height 100%
        padding 0 .15rem
        justify-content space-between
        align-items center
        .logo-wrapper
          display flex
          justify-content center
          align-items center
          .logo
            width .36rem
            height .36rem
            background url('~assets/images/logo02.png')
            background-size 100%
            border .01rem solid #eee
            border-radius .03rem
          .logo-text
            padding-left .08rem
            color #131313
        .open
          width .72rem
          height .28rem
          border-radius .14rem
          background linear-gradient(90deg,red,#ff5050)
          text-align center
          line-height .28rem
          color #fff
</style>
