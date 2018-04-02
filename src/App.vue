<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TripPlanner'
}
</script>

<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/style.css';
  @import url('https://fonts.googleapis.com/css?family=Suez+One');
  #app {
    width: 100%;
    height: 100%;
  }
</style>
