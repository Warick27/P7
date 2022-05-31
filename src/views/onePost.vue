<template>
  <div>
    <postDisplay />
    <comDisplay />
  </div>
  <div></div>
</template>
<script>
import postDisplay from "../components/postDisplay.vue";
import comDisplay from "../components/comDisplay.vue";
export default {
  name: "OnePost",
  components: {
    postDisplay,
    comDisplay,
  },
};
</script>
