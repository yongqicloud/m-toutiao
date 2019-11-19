<template>
  <div id="Details">
    <OpenApp></OpenApp>
    <Article :tool="tools" :list="list" ></Article>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import { getDetails } from "utils/http";

import OpenApp from 'components/OpenApp'
import Article from './Article'

export default {
  data(){
    return {
      tools:'Nihao',
      list:{}
    }
  },
  async mounted() {
    let result = await getDetails()
    this.list = result.data
    console.log('-----this.details---------')
    console.log(this.list)
  },
  components:{
    OpenApp,
    Article
  }
};
</script>

<style lang="stylus">
#Details
  height 100%
  width 100%
  overflow hidden
  overflow-y scroll
</style>