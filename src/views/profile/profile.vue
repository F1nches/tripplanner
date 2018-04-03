<template>
  <div class="profile-container container-fluid">
    <div class="row">
      <div class="col-md-2 sidebar-container position-fixed"><app-sidebar v-bind:tripNames="userTrips"></app-sidebar></div>
      <div class="col-md-10 row profile-content-wrapper offset-md-2">
        <div class="col-md-12 trip-selector"><app-selector v-bind:trips="userData.trips" @selectedTrip="onChildChange"></app-selector></div>
        <div class="col-md-4"><app-packing v-bind:packingLists="selectedTripData.packinglists"></app-packing></div>
        <div class="col-md-4"><app-weather v-bind:geodata="selectedTripData.geodata" v-bind:location="selectedTripData.location"></app-weather></div>
        <div class="col-md-4"><app-travelinfo></app-travelinfo></div>
        <div class="col-md-6"><app-itinerary v-bind:itinerary="selectedTripData.itinerary"></app-itinerary></div>
        <div class="col-md-6"><app-chat></app-chat></div>
        <div class="col-md-4"><app-recommendations></app-recommendations></div>
        <div class="col-md-8"><app-gallery v-bind:gallery="selectedTripData.gallery"></app-gallery></div>
      </div>
    </div>
  </div>
</template>

<script>
import Selector from '@/components/selector/selector.vue'
import TravelInfo from '@/components/travelinfo/travelinfo.vue'
import Sidebar from '@/components/sidebar/sidebar.vue'
import Weather from '@/components/weather/weather.vue'
import Gallery from '@/components/gallery/gallery.vue'
import Recommendations from '@/components/recommendations/recommendations.vue'
import Chat from '@/components/chat/chat.vue'
import Itinerary from '@/components/itinerary/itinerary.vue'
import PackingList from '@/components/packinglist/packinglist.vue'

// Sample user data
import userData from './userdata.json'

export default {
  components: {
    'app-selector': Selector,
    'app-travelinfo': TravelInfo,
    'app-sidebar': Sidebar,
    'app-weather': Weather,
    'app-packing': PackingList,
    'app-gallery': Gallery,
    'app-recommendations': Recommendations,
    'app-chat': Chat,
    'app-itinerary': Itinerary
  },
  name: 'Profile',
  data () {
    return {
      msg: 'Welcome to TripPlanner',
      userData: userData,
      selectedTripName: '',
      selectedTripData: {},
      userTrips: []
    }
  },
  mounted: function() {
    for (var i=0; i<userData.trips.length; i++) {
      this.userTrips.push(this.userData.trips[i].name);
    }
    
  },
  methods: {
    onChildChange(value) {
      if (value) {
        this.selectedTripName = value;
        for (var i=0; i<userData.trips.length; i++) {
          if (userData.trips[i].name === this.selectedTripName) {
            this.selectedTripData = userData.trips[i];
          }
        }
      }
      console.log('Parent: ' + this.selectedTripData.location);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-container {
  color: #000;
  padding-left: 0;
  padding-right: 0;
}
.profile-container:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background: url('/static/img/topography.svg') no-repeat center center/cover;
}
.profile-content-wrapper > div {
  margin-bottom: 20px;
}
.profile-content-wrapper > div:not(.trip-selector) {
  height: 350px;
}

</style>
