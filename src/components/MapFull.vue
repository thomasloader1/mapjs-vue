<template>
  <div id="map" class="container">
     <div class="row mt-5">
         <div class="col">
             <Map/>
         </div>
     </div>
  </div>
</template>

<script>
import Map from "./Map.vue";
export default {
    name: "MapFull",
    props:{
        users: Array
    },
    components:{
        Map
    }

}
</script>

<style>
#map{
    height: 100%;
    width: 100%;
    
}
</style>