<template>
  <div class="relative">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Mapa en Vue</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-link"><input type="button" value="Cerrar Sesion" class="btn btn-danger" @click="logout"></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import UserList from "./UserList.vue";
import Map from "./Map.vue";

import firebase from "firebase";

export default {
  name: "Navbar",
  components: {
  },
  props: {
    users: Array
  },
  data() {
    return {};
  },
  methods:{
        logout(){
     
      firebase.auth().signOut().then(() => this.$router.replace('login'));
    
    }
  }
};
</script>

<style>
.navigation-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.2em;
  align-items: center;
}

</style>