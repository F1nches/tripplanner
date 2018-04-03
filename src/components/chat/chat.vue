<template>
  <div class="chat profile-component">
    <h1><span class="icon flaticon-interface"></span>{{title}}</h1>
    <div class="scrollable" v-bar="{
    preventParentScroll: true,
    scrollThrottle: 30,
    }">
      <div class="chat-content">
        <div class="chat-message">
          <div class="user-avatar inline" v-bind:style="'background: url('+this.avatar+') no-repeat center center/cover'"></div>
          <div class="message inline">Hey don't forget to pack the hiking trail maps.</div>
        </div>
        <div class="self-message">
          <div class="float-right">
            <div class="message self inline">Already got them. This trip is going to be so much fun!</div>
            <div class="user-avatar inline" v-bind:style="'background: url('+this.avatar2+') no-repeat center center/cover'"></div>
          </div>
        </div>
        <div class="chat-message">
          <div class="user-avatar inline" v-bind:style="'background: url('+this.avatar+') no-repeat center center/cover'"></div>
          <div class="message inline">I know. I'm really excited... Our flight is at 2:00.</div>
        </div>
        <div class="self-message">
          <div class="float-right">
            <div class="message self inline">Yeah, let's try to get there a couple hours early and get lunch at the terminal.</div>
            <div class="user-avatar inline" v-bind:style="'background: url('+this.avatar2+') no-repeat center center/cover'"></div>
          </div>
        </div>
        <div class="chat-message">
          <div class="user-avatar inline" v-bind:style="'background: url('+this.avatar+') no-repeat center center/cover'"></div>
          <div class="message inline">Sounds good.</div>
        </div>
        <div class="self-message">
          <div class="float-right">
            <div class="message self inline">Do you know if they have a McDonalds at the airport?</div>
            <div class="user-avatar inline" v-bind:style="'background: url('+this.avatar2+') no-repeat center center/cover'"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input type="text">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Chat',
  data () {
    return {
      title: 'Chat',
      avatar: '/static/img/iceland/iceland.jpg',
      avatar2: '/static/img/oregon/oregon2.jpeg'
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
.scrollable {
  height: 270px;
}
.chat {
  font-size: 12px;
}
.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.inline {
  display: inline-block;
  vertical-align: middle;
}
.message {
  background: #7ed6df;
  padding: 10px;
  border-radius: 25px;
}
.chat-message .message {
  border-radius: 25px 25px 25px 5px;
}
.self-message .message {
  border-radius: 25px 25px 5px 25px;
}
.self-message {
  float: right;
  margin-bottom: 10px;
  width: 100%;
  margin-right: 17px;
}
.chat-message {
  margin-bottom: 10px;
  margin-right: 17px;
}
.self {
  background: #dff9fb;
}
.float-right {
  float: right;
}
.chat-input {
  margin-top: 5px;
}
.chat-input input {
  width: 100%;
}
</style>
