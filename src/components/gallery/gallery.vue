<template>
  <div class="gallery profile-component">
    <h1>{{title}}</h1>
    <div class="photos">
      <div class="image" v-for="image in images" v-bind:style="'background: url('+image+') no-repeat center center/cover'" @click="fullImage(image)"></div>
    </div>
    <div v-bind:class="{'show': showFull}" class="full-photo" id="full-photo" @click="showFull = !showFull">
      <div>
        <img v-bind:src="currentImage" id="full-image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      title: 'Trip Photos',
      currentImage: '',
      showFull: false,
      images: [
        '/static/img/iceland/iceland.jpg',
        '/static/img/iceland/iceland1.jpeg',
        '/static/img/iceland/iceland2.jpg',
        '/static/img/iceland/iceland3.jpeg',
        '/static/img/iceland/iceland4.jpeg',
        '/static/img/iceland/iceland5.jpeg',
        '/static/img/iceland/iceland6.jpeg',
        '/static/img/iceland/iceland7.jpeg',
        '/static/img/iceland/iceland8.jpeg',
        '/static/img/iceland/iceland9.jpg',
        '/static/img/iceland/iceland10.jpg',
        '/static/img/iceland/iceland11.jpg',
        '/static/img/iceland/iceland12.jpeg',
        '/static/img/iceland/iceland13.jpg',
        '/static/img/iceland/iceland.jpg',
        '/static/img/iceland/iceland1.jpeg',
        '/static/img/iceland/iceland2.jpg',
        '/static/img/iceland/iceland3.jpeg',
        '/static/img/iceland/iceland4.jpeg',
        '/static/img/iceland/iceland5.jpeg',
        '/static/img/iceland/iceland6.jpeg',
        '/static/img/iceland/iceland7.jpeg',
        '/static/img/iceland/iceland8.jpeg',
        '/static/img/iceland/iceland9.jpg',
        '/static/img/iceland/iceland10.jpg',
        '/static/img/iceland/iceland11.jpg',
        '/static/img/iceland/iceland12.jpeg',
        '/static/img/iceland/iceland13.jpg',
      ]
    }
  },
  // mounted: function() {
  //     document.addEventListener('click', function(event) {
  //       var element = document.getElementById('full-image');
  //       var isClickInside = element.contains(event.target);
  //       if (!isClickInside) {
  //         //the click was outside the specifiedElement, do something
  //         this.showFull = false;
  //       }
  //   });
  // },
  methods: {
    fullImage: function(image) {
      this.currentImage = image;
      this.showFull = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery {
  overflow-y: scroll;
}
.image {
  width: 150px;
  height: 150px;
  display: inline-block;
  margin: 5px;
}
.full-photo {
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}
.full-photo.show {
  visibility: visible;
  position: fixed;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.8);
  opacity: 1;
  transition: 0.5s;
}
.full-photo > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.full-photo div img {
  max-height: 80%;
  max-width: 80%;
}
</style>
