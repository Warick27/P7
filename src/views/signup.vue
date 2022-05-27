<template>
  <div id="app">
    <h1>Bienvenue sur le réseau social de Groupomania</h1>
    <div></div>
    <LoginPage />
  </div>
</template>
<script>
import LoginPage from "../components/LoginPage.vue";

export default {
  name: "app",
  components: {
    LoginPage,
  },
};
</script>
