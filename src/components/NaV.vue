<template>
  <nav class="navbar navbar-expand navbar-light fixed-top d-flex">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <!-- <ul class="navbar-nav ml-auto" v-if="!user == null">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Se connecter</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link"
              >S'enregistrer</router-link
            >
          </li>
        </ul> -->
        <ul class="navbar-nav ml-auto" v-if="isLogged()">
          <li class="nav-item">
            <a href="/login" @click="handleClick()" class="nav-link"
              >Se déconnecter {{ user }}_</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NaV",
  data() {
    return {
      log: "true",
    };
  },
  props: {
    user: {},
    // connected: false,
  },
  methods: {
    isLogged: function () {
      const userId = localStorage.getItem("id");
      userId ? (this.log = "true") : (this.log = "false");
    },
    // notLogged: function () {
    //   this.log = "false";
    // },
    handleClick: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
