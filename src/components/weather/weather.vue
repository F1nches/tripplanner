<template>
  <div class="weather profile-component">
    <h1 @click="getWeather()"><span class="icon flaticon-sea"></span>{{title}}</h1>
    <div class="current">
      <div class="location">{{location}}</div>
      <div class="current-container">
        <div class="current-icon">
          <img v-bind:src="weatherIcons[4].icon"/>
        </div>
        <div class="current-temp">
          22<span>F</span>
        </div>
      </div>
      <div class="forecast">
        <div class="day">
          MON
          <div class="day-icon"><img v-bind:src="weatherIcons[6].icon"/></div>
        </div>
        <div class="day">
          TUE
          <div class="day-icon"><img v-bind:src="weatherIcons[6].icon"/></div>
        </div>
        <div class="day">
          WED
          <div class="day-icon"><img v-bind:src="weatherIcons[7].icon"/></div>
        </div>
        <div class="day">
          THU
          <div class="day-icon"><img v-bind:src="weatherIcons[8].icon"/></div>
        </div>
        <div class="day">
          FRI
          <div class="day-icon"><img v-bind:src="weatherIcons[5].icon"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Weather',
  props: ['geodata', 'location'],
  data () {
    return {
      title: 'Weather',
      location: "Reykjavik, Iceland",
      weatherIcons: [
        {name: "Cold", icon: "/static/img/weather/cold.svg"},
        {name: "Medium", icon: "/static/img/weather/medium.svg"},
        {name: "Hot", icon: "/static/img/weather/hot.svg"},
        {name: "Fog", icon: "/static/img/weather/fog.svg"},
        {name: "Moon", icon: "/static/img/weather/moon.svg"},
        {name: "Rain", icon: "/static/img/weather/rain.svg"},
        {name: "Snow", icon: "/static/img/weather/snow.svg"},
        {name: "Storm", icon: "/static/img/weather/storm.svg"},
        {name: "Sun", icon: "/static/img/weather/sun.svg"},
        {name: "Wind", icon: "/static/img/weather/wind.svg"},
        {name: "Fahrenheit", icon: "/static/img/weather/fahrenheit.svg"},
        {name: "Celsius", icon: "/static/img/weather/celsius.svg"},
      ],
      weatherHere: '',
      weather: {}
    }
  },
  beforeMount: function() {
    let lat = this.geodata.lat;
    let lon = this.geodata.lon;
    this.weatherHere = 'http://api.openweathermap.org/data/2.5/forecast?lat='+ lat + '&lon='+ lon +'&APPID=125b1d8974286f7806f82ebf5c852017';
  },
  mounted: function() {
    let self = this;
    this.axios.get(this.weatherHere).then((response) => {
      self.weather = response.data;
    });
  },
  methods: {
    getWeather: function() {
      console.log(this.weather);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-component{
  background: #fff;
  box-shadow: 5px 0px 20px #ccc;
}
.current, .current-container {
  text-align: center;
}
.current-icon > img {
  width: 50px;
  margin: 25px;
}
.forecast .day {
  display: inline-block;
  height: 100px;
  width: 19%;
}

.forecast img {
  width: 40px;
}
.current-container > div {
  display: inline-block;
  vertical-align: middle;
}

.current-temp {
  font-size: 45px;
  line-height: 50px;
}
</style>
