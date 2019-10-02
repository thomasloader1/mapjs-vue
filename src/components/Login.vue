<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mx-auto mt-5 p-3 bg-dark rounded">
          <h1 class="text-white p-2 mb-3 display-4">Mapue</h1>
        <form @submit.prevent="login">
          <div class="form-goup">
            <input v-model="usuario" class="form-control" type="email" placeholder="Usuario" />
          </div>
          <div class="form-group mt-3">
            <input v-model="contrasena" class="form-control" type="password" placeholder="Password" />
          </div>
          <input type="submit" class="btn btn-danger" value="Entrar" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: ""
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          user => this.$router.replace("user"),
          error => console.error(error)
        );
    }
  }
};
</script>

<style>
</style>