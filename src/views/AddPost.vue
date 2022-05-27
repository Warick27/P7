<template>
  <div id="app">
    <h1>Ajouter un nouveau post</h1>
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
