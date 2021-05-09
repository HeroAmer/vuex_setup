<template>
  <div id="app">
    <Toolbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/toolbar'

export default {
  name:"app",
  components: {
    Toolbar,
  }
}
</script>


<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

</style>
