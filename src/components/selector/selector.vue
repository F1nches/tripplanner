<template>
  <div class="selector profile-component">
    <h1>{{title}}</h1>
    <v-select id="trip" class="trip-select" v-model="selected" v-bind:options="tripNames"></v-select>
  </div>
</template>

<script>

export default {
  name: 'Selector',
  data () {
    return {
      title: 'My Trip Selector',
      selected: '',
      tripNames: [
        'Iceland', 'Australia', 'Oregon', 'Montana'
      ]
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



</style>
