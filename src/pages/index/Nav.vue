<template>
  <nav>
    <div class="top-menu-list">
      <router-link
        tag="a"
        href="javascript:;"
        class="btn-nav"
        v-for="(list,name) in activeList"
        :key="list.chaneel"
        :data-link="list.channel"
        :to="`/index/channel/${list.channel}`"
        @click="handleClick"
      >{{name}}</router-link>
    </div>
    <div class="top-menu-more">
      <div class="menu-more-shadow"></div>
      <router-link
        tag="a"
        to="/manage"
        href="javascript:;" class="btn-more"
      >
        <span></span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      activeList:{},
      inactiveList:{}
    }
  },
  methods:{
    handleClick(){
      console.log(1)
    }
  },
  mounted(){
    console.log(this.$store.state)
    let store = this.$store.state
    this.activeList = store.activeList
    this.inactiveList = store.inactiveList
  }
}
</script>

<style lang="stylus" scoped>
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