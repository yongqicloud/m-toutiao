<template>
  <div class="manage">
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
          class="set-bgcolor"
          name="推荐"
          manage="__all__"
          status="true"
        >推荐</ChannelItems>
        <ChannelItems 
          v-for="(item,key) in aaa"
          :key="key"
          :name="key"
          :manage="item.channel"
          :status="item.status"
        >
          {{key}}
        </ChannelItems>
      </template>
    </AddControl>
    <AddControl>
      点击添加以下频道
      <template v-slot:items>
        <ChannelItems 
          v-for="(item,key) in bbb"
          :key="key"
          :name="key"
          :manage="item.channel"
          :status="item.status"
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
  computed:{
    aaa(){
      return this.$store.state.activeList
    },
    bbb(){
      return this.$store.state.inactiveList
    }
  },
  components:{
    AddControl,
    ChannelItems
  },
  mounted(){
    let store = this.$store.state

    this.activeList = store.activeList
    this.inactiveList = store.inactiveList  
  },
  methods:{
    handlegoback(){
      this.$router.go(-1)
    }
  },
  watch:{
  }

}
</script>

<style lang="stylus" >
.manage
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