<template>
  <div class="recommendations profile-component">
    <h1><span class="icon flaticon-travel"></span>{{title}}</h1>
    <img src="/static/img/yelp.png"/>
  </div>
</template>

<script>

export default {
  name: 'Recommendations',
  data () {
    return {
      title: 'Recommendations'
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
  opacity: 0.3;
}


</style>
