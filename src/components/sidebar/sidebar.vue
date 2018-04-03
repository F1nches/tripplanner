<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/">
        <img v-bind:src="logo"/>
      </router-link>
    </div>
    <div class="user-info">
      <div class="user-avatar">
        <router-link to="/profile">
          <img v-bind:src="user.avatar"/>
        </router-link>
      </div>
      <div class="user-name">
        <router-link to="/profile">
          <h4>{{ user.name }}</h4>
        </router-link>
      </div>
    </div>
    <ul>
      <li v-on:click="showSub = !showSub">
        <router-link to="profile">
          <span class="sidebar-icon flaticon-hiker"></span>My Trips
        </router-link>
        <div class="dropdown-container" v-bind:class="{ show: showSub }">
          <a href="#" v-for="trip in tripNames">{{trip}}</a>
        </div>
      </li>
      <li><router-link to="profile"><span class="sidebar-icon flaticon-travel-5"></span>Add New Trip</router-link></li>
      <li><router-link to="profile"><span class="sidebar-icon flaticon-travel-1"></span>Remove Trip</router-link></li>
      <li><router-link to="profile"><span class="sidebar-icon flaticon-travel-3"></span>Compose TripLink</router-link></li>
      <li><router-link to="profile"><span class="sidebar-icon flaticon-door"></span>Sign Out</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  props: ['tripNames'],
  data () {
    return {
      logo: '/static/img/tripplanner-alpha-logo.svg',
      user: {
        name: 'Fincherr',
        avatar: 'https://images.pexels.com/photos/709068/pexels-photo-709068.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
      },
      icons: ['/static/img/icons/hiker.svg', '/static/img/icons/map.svg', '/static/img/icons/newtrip.svg', '/static/img/icons/packing.svg', '/static/img/icons/remove.svg', '/static/img/icons/travelplans.svg'],
      showSub: false
    }
  },
  mounted: function() {
    this.getTripNames();
  },
  methods: {
    getTripNames: function() {
      console.log(this.tripNames);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    padding: 20px;
    height: 100%;
    min-height: 100vh;
    color: #fff;
    background: #24253C;
  }

  @media screen and (min-width: 48em) {
    .sidebar {
      box-shadow: 5px 0px 20px #f5f5f5;
    }
  }

  .logo {
    margin-bottom: 20px;
  }

  .logo img, .user-avatar a img {
    width: 100%;
  }
  a {
    color: #e2e4ff;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    transition: 0.2s;
  }
  a:hover {
    color: #6e7191;
    background: #2e304c;
    transition: 0.2s;
  }

  .dropdown-container {
    height: 0;
    visibility: hidden;
    opacity: 0;
  }

  .dropdown-container.show {
    height: 100%;
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
  }
</style>
