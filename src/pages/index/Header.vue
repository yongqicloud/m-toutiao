<template>
  <header>
    <div class="msg-box">
      <a href="javascript:;" class="msg-link"></a>
    </div>
    <div class="logo-box">
      <a href="javascript:;" class="logo-link"></a>
      <i :class="{'refresh-box':true,rotate:isRotate} " @click="handleRefresh"></i>
    </div>
    <div class="search-box">
      <router-link
        tag="a"
        to="/search"
        href="javascript:;" class="search-link"
      ></router-link>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      isRotate:false
    }
  },
  methods:{
    handleRefresh(){
      console.log(555)
      this.isRotate = true
      // setTimeout(()=>{
      //   this.isRotate = false
      // },3000)
    }
  }
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

</style>