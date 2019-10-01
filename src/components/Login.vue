<template>
  <div class="container">
      <form @submit.prevent="login">
          <input v-model="usuario" type="text" placeholder="Usuario">
          <input v-model="contrasena" type="password" placeholder="Password">
          <input type="submit" value="Entrar">
      </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
    name: "Login",
    data(){
        return{
            usuario: "",
            contrasena:""
        }
    },
    methods:{
        login(){
            Firebase
            .auth()
            .signInWithEmailAndPassword(this.usuario, this.contrasena)
            .then((user) => this.$router.replace('user'), (error) => console.error(error));
        }
    }
}
</script>

<style>


</style>