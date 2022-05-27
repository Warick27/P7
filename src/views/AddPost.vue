<template>
  <div id="app">
    <h1>Bienvenue sur le réseau social de Groupomania</h1>
    <div></div>
    <PostCreation />
  </div>
</template>
<script>
import PostCreation from "../components/PostCreation.vue";

export default {
  name: "app",
  components: {
    PostCreation,
  },
};
</script>
