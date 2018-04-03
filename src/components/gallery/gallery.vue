<template>
  <div class="gallery profile-component">
    <h1><span class="icon flaticon-photo-camera"></span>{{title}}</h1>
    <div class="scrollable" v-bar="{
    preventParentScroll: true,
    scrollThrottle: 30,
    }">
    <div class="photos">
      <div class="image" v-for="image in gallery" v-bind:style="'background: url('+image.src+') no-repeat center center/cover'" @click="fullImage(image.src)"></div>
    </div>
    <div v-bind:class="{'show': showFull}" class="full-photo" id="full-photo" @click="showFull = !showFull">
      <div>
        <img v-bind:src="currentImage" id="full-image"/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['gallery'],
  data () {
    return {
      title: 'Trip Photos',
      currentImage: '',
      showFull: false,
    }
  },
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
.scrollable {
  height: 295px;
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
