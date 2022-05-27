<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Se connecter</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link"
              >S'enregistrer</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user">
          <li class="nav-item">
            <a href="/login" @click="handleClick" class="nav-link"
              >Se déconnecter</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NaV",
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      this.$router.dispatch("user", []);
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
