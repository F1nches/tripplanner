<template>
  <div class="chat profile-component">
    <h1><span class="icon flaticon-tickets"></span>{{title}}</h1>
    <img src="/static/img/skyscanner.png"/>
  </div>
</template>

<script>

export default {
  name: 'TravelInfo',
  data () {
    return {
      title: 'Travel Information'
    }
  },
  watch: {

  },
  methods: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15;
}


</style>
