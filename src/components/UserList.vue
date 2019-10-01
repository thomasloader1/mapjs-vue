<template>
  <div class="card user-list">
    <ul class="list-group list-group-flush">
      <li
        @mouseover="mouseOver(i)"
        @mouseleave="mouseLeave(i)"
        v-bind:key="i"
        v-for="(user, i) in users"
        class="list-group-item"
      >{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: Array
  },
  data() {
    return {
     
    };
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
  height: 95vh;
}

.user-list li:hover {
  background-color: orangered;
}
</style>