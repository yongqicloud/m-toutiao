<template>
  <div>
    <div class="toolbar">
      <div class="title">
        <a href="javascript:;">频道管理</a>
      </div>
      <span class="btn-back">
        <a href="javascript:;" @click="handlegoback"></a>
      </span>
    </div>
    <AddControl>
      点击删除以下频道
      <template v-slot:items>
        <ChannelItems 
          v-for="(item,key) in activeList"
          :key="key"
        >
          {{key}}
        </ChannelItems>
      </template>
    </AddControl>
    <AddControl>
      点击添加以下频道
      <template v-slot:items>
        <ChannelItems 
          v-for="(item,key) in inactiveList"
          :key="key"
        >
          {{key}}
        </ChannelItems>
      </template>
    </AddControl>

  </div>
  
</template>
<script>
import {mapState} from 'vuex'
import AddControl from 'components/AddControllers'
import ChannelItems from 'components/ChannelItems'
export default {
  data(){
    return {
      activeList:{},
      inactiveList:{}
    }
  },
  components:{
    AddControl,
    ChannelItems
  },
  mounted(){
    console.log(this.$store.state)
    let store = this.$store.state
    this.activeList = store.activeList
    this.inactiveList = store.inactiveList
  },
  methods:{
    handlegoback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" >
html
  background #f8f8f8
  .toolbar
    width 100%
    height .51rem
    background #d43d3d
    .title
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      a
        color #fff
        font-weight 900
        font-size .16rem
    .btn-back
      display flex
      width .44rem
      height .5rem
      position absolute
      left 0
      top 0
      a
        display block
        
        width 50%
        height 50%
        background url("~assets/images/goback.png") no-repeat 50%
        background-size 100%
        margin auto 

</style>