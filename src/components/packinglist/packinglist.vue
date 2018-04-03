<template>
  <div class="packing-list profile-component">
    <h1><span class="icon flaticon-travel-1"></span>{{title}}</h1>
    <div class="packing-lists">
      <div class="packing-list-btn" v-for="list in packingLists">
        <div class="packing-list-btn-container" @click="populateList(list.name)">
          {{list.name}}
        </div>
      </div>
    </div>
    <div class="scrollable" v-bar="{
    preventParentScroll: true,
    scrollThrottle: 30,
}">
      <div>
        <ul class="packing-list-ul">
          <li v-for="item in selectedList">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="add-item-container bottom-container">
      <input type="text" class="full-width" placeholder="Add new item...">
      <div class="btn btn-primary">Submit</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Weather',
  props: ["packingLists"],
  data () {
    return {
      title: 'Packing Lists',
      location: "Reykjavik, Iceland",
      selected: '',
      selectedList: []
    }
  },
  watch: {
    selected: function(val) {
      for (var i=0; i<this.packingLists.length; i++) {
        if (this.selected === this.packingLists[i].name) {
          this.selectedList = this.packingLists[i].list;
        }
      }
    }
  },
  methods: {
    populateList: function(listName) {
      for (var i=0; i<this.packingLists.length; i++) {
        if (this.packingLists[i].name === listName) {
          this.selected = this.packingLists[i].name;
          this.selectedList = this.packingLists[i].list;
        }
      }
      console.log(this.packingLists);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.packing-list {
  position: relative;
}

.packing-list-btn {
  padding: 5px;
  display: inline-block;
  background: #24253C;
  color: #18F4CE;
  margin: 5px;
  margin-left: 0;
  box-shadow: 5px 0px 20px #ccc;
  cursor: pointer;
  transition: 0.2s;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 800;
}

.packing-list-btn:hover {
  background: #eee;
  transition: 0.2s;
  color: #161616;
}

.packing-list-ul li {
  border-bottom: 1px solid  #ddd;
  padding: 5px 0;
}

.add-item-container input {
  width: 80%;
}
.add-item-container .btn {
  float: right;
}

.add-item-container {

}

</style>
