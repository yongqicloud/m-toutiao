<template>
  <div class="recommendation-item">
    <h2 class="container-header"><slot name="title"></slot></h2>
    <div class="feedlist-container">
      <div class="list-content">
        <slot name="loopItem"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.recommendation-item
  .container-header
    width 100% 
    height .4rem 
    padding .14rem 0 .08rem 0
    color #000
    background #fff
    box-sizing border-box
    line-height .15rem
    font-weight 600
    font-size .15rem
    &::before
      content  ""
      display inline-block
      width .04rem
      height .18rem
      border-radius .01rem
      margin-right .05rem
      background-color #f85959
      vertical-align: sub
  .feedlist-container
    padding 0 .14rem 0 .14rem


</style>