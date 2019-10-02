<template>
  <div id="map-template">
    <!-- <h2>El cetro es {{ currentCenter }} , el zoom es {{ currentZoom }}</h2> -->
    <l-map @update:zoom="zoomUpdate" @update:center="centerUpdate" :zoom="zoom" :center="center" :options="{zoomControl: false}">
      <l-control-zoom position="bottomleft"></l-control-zoom>
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        :key="i"
        v-for="(user, i) in users"
        :lat-lng="latLng(user.latitude, user.longitude)"
      >
        <l-icon :icon-size="user.iconSize" :icon-url="icon"></l-icon>
        <l-tooltip>Hola!, soy {{user.name}}</l-tooltip>
        <l-popup>{{user.name}} - {{user.street}}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup, LTooltip, LControlZoom } from "vue2-leaflet";
import userIcon from "../assets/user.png";
import Navbar from "../components/Navbar";


export default {
  name: "Map",
  props: {
    users: Array
  },
  data: function() {
    return {
      zoom: 13,
      center: L.latLng(47.41322, -1.219482),
      currentCenter: L.latLng(47.41322, -1.219482), 
      currentZoom: 13,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.41322, -1.219482),
      icon: userIcon,
      iconSize: [15, 15],
      
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    LTooltip,
    LControlZoom,
    Navbar
  },
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
    centerUpdate: function(center) {
      this.currentCenter = this.center;
    },
    zoomUpdate: function(zoom) {
      this.currentZoom = this.zoom;
    }
  }
};

</script>

<style>
#map-template {
  height: 100%;
  width: 100%;
  top: 0;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>