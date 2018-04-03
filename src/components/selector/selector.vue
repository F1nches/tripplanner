<template>
  <div class="selector profile-component">
    <h1><span class="icon flaticon-hiker"></span>{{title}}</h1>
    <v-select id="trip" class="trip-select" v-model="selected" v-bind:options="tripNames" :on-change="changedValue"></v-select>
  </div>
</template>

<script>

export default {
  name: 'Selector',
  props: ['trips'],
  data () {
    return {
      title: 'My Trip Selector',
      selected: this.trips[0].name,
      tripNames: []
    }
  },
  mounted: function() {
    for (var i=0; i<this.trips.length; i++) {
      this.tripNames.push(this.trips[i].name);
    }
  },
  methods: {
    changedValue: function(value) {
      // Send value to parent upon change
      this.$emit('selectedTrip', value);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
