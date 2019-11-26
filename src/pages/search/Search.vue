<template>
  <div>
    <header class="header-search" v-show="!status">
      <div class="top-space"></div>
      <div class="logo-box">
        <img src="~assets/images/logo.search.png" alt="">
      </div>
    </header>
    <div class="form-box"> 
      <form action="/" class="from-body">
        <div class="search-box">
          
        </div>
      
      </form>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  data(){
    return {
      status:false, // 0表示未聚焦 1表示聚焦但未输入 2表示触发input事件
      value:'',
    } 
  },
  components:{
    Search
  },
  methods:{
    handleFocus(){
      this.status = true
    },
    handleCancel(){
      this.status = false
    }
  }
}
</script>

<style lang="stylus">
.header-search
  display flex
  margin 0 0 .18rem
  flex-direction column
  align-items center
  .top-space
    width 100%
    height 25vh
  .logo-box
    width 1.3rem
    height .54rem
    overflow hidden
    img 
      width 100%
      height 100%
.from-body
  width auto
  min-width 0wu
  min-height .54rem
  .search-box
    margin .1rem .17rem 0
    border-radius .04rem
    background #f1f3f5
    height .52rem
    .self-input
      background #f1f3f5!important
      .van-search__content
        background #f1f3f5
        .van-field__left-icon
          display none 
        input 
          font-size .18rem
        i 
          font-size .24rem
</style>