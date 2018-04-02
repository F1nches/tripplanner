<template>
  <div class="itinerary profile-component">
    <h1>{{title}}</h1>
    <div class="day" v-for="day in itinerary">
      <div class="day-container" @click="populateEvents(day.day)">
        {{day.day}}
      </div>
    </div>
    <div class="events">
      <ul>
        <li v-for="events in currentDay">{{events.time}}: {{events.events}}</li>
      </ul>
      <form>
        <v-timepicker v-model="eventTime"></v-timepicker>
        <input v-if="currentDay.length" type="text" class="add-event" placeholder="Add new event..." v-model="addEvent">
        <div class="btn btn-primary" @click="submitNewEvent()">Submit</div>
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
      itinerary: [
        {
          day: 'Monday',
          events: [
            {time: '0900', events: 'Wake up and go for breakfast'},
            {time: '1200', events: 'Whale watch with Iceland Whale Watching Co.'},
            {time: '1500', events: 'Lunch at Iceland Lunch Co.'},
            {time: '1800', events: 'Dinner with friends at Iceland Dinner Co.'}
          ]
        },
        {
          day: 'Tuesday',
          events: [
            {time: '0800', events: 'Breakfast at hotel'},
            {time: '1100', events: 'Hike at Iceland Park'},
            {time: '1500', events: 'Lunch at Iceland Lunch Co.'},
            {time: '2100', events: 'Look for northern lights'},
            {time: '2300', events: 'Bar crawl at Reykjavik Bar'}
          ]
        },
        {
          day: 'Wednesday',
          events: [
            {time: '0900', events: 'Nothing planned'},
          ]
        },
        {
          day: 'Thursday',
          events: [
            {time: '0900', events: 'Wake up and go for breakfast'},
            {time: '1200', events: 'Hiking at National Park'},
            {time: '1500', events: 'Lunch at Iceland Lunch Co.'},
            {time: '1800', events: 'Dinner with friends at Iceland Dinner Co.'}
          ]
        },
        {
          day: 'Friday',
          events: [
            {time: '0900', events: 'Nothing planned'},
          ]
        }
      ]
    }
  },
  watch: {

  },
  methods: {
    populateEvents: function(day) {
      for (var i=0; i<this.itinerary.length; i++) {
        if (this.itinerary[i].day === day) {
          this.currentDay = this.itinerary[i].events;
        }
      }
      console.log(this.currentDay);
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

.day:hover {
  background: #eee;
  transition: 0.2s;
  color: #161616;
}

</style>
