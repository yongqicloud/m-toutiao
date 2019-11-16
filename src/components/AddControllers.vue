<template>
  <div class="hello">
    <div class="addControl">
      <span class="controlTitle">
      <slot></slot>
      </span>
      <ul class="controlDetail">
        <slot name="items"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="stylus">
.controlTitle
  display flex
  box-sizing border-box
  width 100%
  height .24rem
  align-items center
  padding 0 .1rem
  background #f5f5f5
  color #666
  font-size .12rem
.controlDetail
  margin .1rem 0

</style>
