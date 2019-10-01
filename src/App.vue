<template>
  <div id="app">
    <router-view/>   
  </div>
</template>

<script>
import User from "./components/User.vue";
import UserList from "./components/UserList.vue";
import Navbar from "./components/Navbar.vue";
import Map from './components/Map.vue';
import Login from './components/Login.vue';

export default {
  name: "App",
  components: {
    User,
    UserList,
    Map,
    Navbar,
    Login
  },
  props:{
     users: Array,

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
