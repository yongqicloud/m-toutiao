<template>
  <div>
    <Header></Header>
    <main>
      <Nav></Nav>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './Nav'
import Header from './Header'
export default {
  components:{
    Nav,
    Header
  }
}
</script>

<style lang="stylus">
#app
  height 100%
  >div
    height 100%
  main
    width 100%
    height 100%
</style>