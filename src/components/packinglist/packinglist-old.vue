<template>
  <div class="packing-list profile-component">
    <h1>{{title}}</h1>
    <v-select id="trip" class="trip-select" v-model="selected" v-bind:options="packingListNames"></v-select>

    <ul>
      <li v-for="item in selectedList">{{item.item}}</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Weather',
  data () {
    return {
      title: 'Packing List',
      location: "Reykjavik, Iceland",
      packingListNames: [],
      selected: '',
      selectedList: [],
      packingLists: [
        {
          name: 'Carry-On',
          items: [
            {item: 'Hiking boots'},
            {item: 'Raincoat'},
            {item: '4 pairs of thick socks'},
            {item: 'Passport'},
            {item: 'Hat'},
            {item: 'Parka'},
          ]
        },
        {
          name: 'Checked Bag #1',
          items: [
            {item: 'Hiking boots'},
            {item: 'Shorts'},
            {item: '3 pairs of thick socks'},
            {item: '3 pairs of light socks'},
            {item: 'Hat'},
            {item: 'Parka'},
            {item: 'Bug Spray'},
          ]
        },
        {
          name: 'Checked Bag #2',
          items: [
            {item: 'Hiking boots'},
            {item: 'Zipper pants'},
            {item: '3 pairs of light socks'},
            {item: 'Hat'},
            {item: 'Camera'},
            {item: 'Bug Spray'},
          ]
        }
      ]
    }
  },
  mounted: function() {
    for (var i=0; i<this.packingLists.length; i++) {
      this.packingListNames.push(this.packingLists[i].name)
    }
  },
  watch: {
    selected: function(val) {
      for (var i=0; i<this.packingLists.length; i++) {
        if (this.selected === this.packingLists[i].name) {
          this.selectedList = this.packingLists[i].items;
        }
      }
    }
  },
  methods: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.packing-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

</style>
