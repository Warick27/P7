<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<!-- v-show="!['login', 'signup'].includes($route.name) v-show="$route.name == 'signup' -->
<template>
  <div>
    <nav class="navbar_menu">
      <!-- <ul class="navbar_menu">
        <li class="navbar_menu_item">Profil</li>
        <li class="navbar_menu_item">Groupomania</li>
        <li class="navbar_menu_item">Profil</li>
        <li class="navbar_menu_item">Déconnexion</li>
      </ul> -->
      <RouterLink class="navbar_menu_item" to="/">Groupomania</RouterLink>
      <RouterLink to="/settings">Profil</RouterLink>
      <RouterLink to="/signup">Signup</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style>
.navbar_menu {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 60px auto;
  border: 2px solid red;
  border-radius: 10px;
  padding: 50px;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 10%;
  color: black !important;
  background-color: whitesmoke;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
