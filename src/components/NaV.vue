<template>
  <nav class="nav navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <!-- <div>
        <img
          src="./assets/icon-left-font.svg"
          alt="Logo Groupomania"
          id="navLogo"
        />
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "NaV",
  data() {
    return {
      // mode: "CACHE",
    };
  },
  // methods: {
  //   displayNav() {
  //     if (localStorage.getItem("id") != null) {
  //       this.mode = "AFFICHE";
  //     }
  //   },
  // },
  // created() {
  //   this.displayNav();
  // },
};
</script>
<style scoped>
.nav {
  height: 50px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: center;
}
#navLogo {
  width: 30% !important;
  height: auto;
}
</style>
