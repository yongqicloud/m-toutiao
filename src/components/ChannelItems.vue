<template>
  <li class="channelFigure">
    <a href="javascript:;">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.channelFigure
  width 25%
  margin-bottom .1rem
  display inline-block
  a
    display flex
    box-sizing border-box
    justify-content center
    align-items center
    height .34rem
    margin 0 .08rem
    font-size .16rem
    color #131313
    border 1px solid #ccc
</style>