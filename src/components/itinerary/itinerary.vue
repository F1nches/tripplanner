<template>
  <div class="itinerary profile-component">
    <h1><span class="icon flaticon-map"></span>{{title}}</h1>
    <div class="day" v-for="day in itinerary">
      <div class="day-container" @click="populateEvents(day.day)">
        {{day.day}}
      </div>
    </div>
    <div class="events">
      <div class="scrollable" v-bar="{
      preventParentScroll: true,
      scrollThrottle: 30,
  }">
        <ul>
          <li v-for="events in currentDay">{{events.time}}: {{events.events}}</li>
        </ul>
      </div>
      <form class="bottom-container">
        <v-timepicker v-model="eventTime"></v-timepicker>
        <input v-if="currentDay" type="text" class="add-event" placeholder="Add new event..." v-model="addEvent">
        <div class="btn btn-primary itinerary-btn" @click="submitNewEvent()">Submit</div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Itinerary',
  props: ['itinerary'],
  data () {
    return {
      title: 'Itinerary',
      currentDay: [],
      addEvent: '',
      eventTime: {}
    }
  },
  methods: {
    populateEvents: function(day) {
      for (var i=0; i<this.itinerary.length; i++) {
        if (this.itinerary[i].day === day) {
          this.currentDay = this.itinerary[i].events;
        }
      }
    },
    submitNewEvent: function() {
      console.log(this.eventTime);
      console.log(this.addEvent);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.day {
  padding: 5px;
  display: inline-block;
  background: #24253C;
  color: #18F4CE;
  margin: 5px;
  box-shadow: 5px 0px 20px #ccc;
  cursor: pointer;
  transition: 0.2s;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 800;
}

.day:first-of-type {
  margin-left: 0;
}

.day:hover {
  background: #eee;
  transition: 0.2s;
  color: #161616;
}

.itinerary-btn {
  float: right;
}

.events ul li {
  border-bottom: 1px solid #ddd;
  padding: 5px 0;
}
</style>
