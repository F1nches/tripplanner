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
    <button class="btn btn-primary btn-block">My Trips</button>
    <button class="btn btn-primary btn-block">Add New Trip</button>
    <button class="btn btn-primary btn-block">Remove Trip</button>
    <button class="btn btn-primary btn-block">Compose TripLink</button>
    <button class="btn btn-primary btn-block">Sign Out</button>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data () {
    return {
      logo: '/static/img/tripplanner-alpha-logo.svg',
      user: {
        name: 'Fincherr',
        avatar: 'https://images.pexels.com/photos/709068/pexels-photo-709068.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
      }
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
</style>
