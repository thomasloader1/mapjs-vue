<template>
  <div>
    <Navbar />

          <UserList
            @mouse-over-user="mouseOverUser"
            @mouse-left-user="mouseLeftUser"
            :users="users"
          />
          

    <Map :users= "users"/>
  </div>
</template>

<script>
import axios from "axios";
import UserList from "./UserList.vue";
import Map from "./Map.vue";
import Navbar from "./Navbar.vue";
import firebase from "firebase";

export default {
  name: "User",
  components: {
    UserList,
    Map,
    Navbar
  },
  data() {
    return {
      users: [],
      normalIcon: [15, 15],
      largeIcon: [50, 50]
    };
  },
  mounted() {
    // https://api.openbrewerydb.org/breweries

    axios.get("https://api.openbrewerydb.org/breweries").then(res => {
      this.users = res.data.map(r => {
        r.iconSize = this.normalIcon;
        return r;
      });
    });
  },
  methods: {
    mouseOverUser: function(i) {
      this.users[i].iconSize = this.largeIcon;
    },
    mouseLeftUser: function(i) {
      this.users[i].iconSize = this.normalIcon;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
