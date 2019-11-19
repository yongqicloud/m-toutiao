<template>
  <transition
    enter-active-class="animated zoomIn"
  >
    <li class="channelFigure">
      <a href="javascript:;" @click="handlremove">
        <slot></slot>
      </a>
    </li>
  </transition>
</template>

<script>
import {mapState} from 'vuex'
import Vue from 'vue'
export default {
  props:['name','manage','status'],
  methods:{
    handlremove(){
      if(this.name === "推荐"){
        return
      }
      this.$store.commit('removeChannel',{
        name:this.name,
        manage:this.manage,
        status : this.status
      }),
      this.$store.commit('addChannel',{
        name : this.name,
        manage:this.manage,
        status : this.status
      })
    }
  },
  mounted(){
  }

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
.set-bgcolor
  a
    background #f0f0f0
</style>