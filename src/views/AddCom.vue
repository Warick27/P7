<template>
  <div id="app">
    <h1>Bienvenue sur le réseau social de Groupomania</h1>
    <div></div>
    <NewComment />
  </div>
</template>
<script>
import NewComment from "../components/NewComment.vue";

export default {
  name: "app",
  components: {
    NewComment,
  },
};
</script>
