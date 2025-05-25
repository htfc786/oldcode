<template>
  <div id="app" class="app" zxfebs="mainApp">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      aaa: 111
    }
  },
  created () {
    this.removeCheToken()
  },
  mounted () {
    // 头部按钮高亮
    this.$nextTick(() => {
      window.highLightHeadMenu && window.highLightHeadMenu('feesReport');
    })
  },
  methods: {
    // 清除历史缓存token
    removeCheToken () {
      localStorage.removeItem('xToken')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F8F8;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* padding-left: calc(100vw - 100%); */
}

</style>
<style src="./assets/css/base.css"></style>



// WEBPACK FOOTER //
// src/App.vue