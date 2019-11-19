<template>
  <div>
    <Header></Header>
    <main>
      <Nav></Nav>
      <router-view></router-view>
      <OpenApp></OpenApp>
    </main>
  </div>
</template>

<script>
import Nav from './Nav'
import Header from './Header'
import OpenApp from 'components/OpenApp'
export default {
  components:{
    Nav,
    Header,
    OpenApp
  }
}
</script>

<style lang="stylus">
#app
  height 100%
  >div
    height 100%
  main
    height calc(100% - .44rem)
    display flex
    flex-direction column

</style>