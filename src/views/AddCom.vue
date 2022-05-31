<template>
  <div id="app">
    <NewComment />
    <comDisplay />
  </div>
</template>
<script>
import NewComment from "../components/NewComment.vue";
import comDisplay from "../components/comDisplay.vue";
export default {
  name: "app",
  components: {
    NewComment,
    comDisplay,
  },
};
</script>
