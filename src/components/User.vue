<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Alo</h1>
          
      </div>
      <!-- /.col-md-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-6">
       
        <UserList 
          @mouse-over-user="mouseOverUser"
          @mouse-left-user="mouseLeftUser"
          :users="users"
        />
      
      </div>
      <!-- /.col-6 -->
      <div class="col-6">

       

      </div>
      <!-- /.col-6 -->
    </div>
    <!-- /.row -->
  <div class="container">
     <div class="row">
       <div class="col-12">
         <Map :users="users"/>
       </div>
       <!-- /.col-12 -->
     </div>
     <!-- /.row -->
  </div>
  <!-- /.container -->
  </div>
  <!-- /.container -->

</template>

<script>
import axios from 'axios';
import UserList from './UserList.vue';
import Map from './Map.vue'

export default {
  name: 'User',
  components:{
    UserList,
    Map
  },
  data () {
    return {
      users: [],
      normalIcon: [15,15],
      largeIcon: [50,50]
    }
  },
  mounted(){
    // https://api.openbrewerydb.org/breweries

    axios.get('https://api.openbrewerydb.org/breweries')
        .then((res) =>{
         this.users = res.data
         .map(r =>{
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
