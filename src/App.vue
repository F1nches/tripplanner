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
  @import './assets/css/flaticon.css';
  @import url('https://fonts.googleapis.com/css?family=Suez+One');
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700,900');
  #app {
    width: 100%;
    height: 100%;
  }
</style>
