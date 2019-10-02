<template>
  <div class="postion-relative">
    <div class="card user-list ml-3 mt-3">
      <div class="card-header bg-dark">
        <h5 class="card-title mt-3 text-white">Lista de Usuarios</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li
            @mouseover="mouseOver(i)"
            @mouseleave="mouseLeave(i)"
            v-bind:key="i"
            v-for="(user, i) in users"
            class="list-group-item"
          >{{user.name}}, {{user.state}}</li>
        </ul>
      </div>

      <div class="card-footer bg-dark">
        <div class="btn-group d-flex" role="group" aria-label="Button group with nested dropdown">
          <button type="button" class="btn btn-success">Agregar</button>
          <button type="button" class="btn btn-danger">Borrar</button>

          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-info dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Ordenar</button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Por Nombre</a>
              <a class="dropdown-item" href="#">Por Producto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: Array
  },
  data() {
    return {};
  },
  methods: {
    mouseOver: function(i) {
      this.$emit("mouse-over-user", i);
    },
    mouseLeave: function(i) {
      this.$emit("mouse-left-user", i);
    }
  }
};
</script>

<style>
.user-list {
  overflow-y: scroll;
  position: absolute;
  height: 40em;
  width: 30em;
}

.user-list li:hover {
  background-color: orangered;
}
.user-list li:active {
  background-color: orange;
}
</style>