<template>
  <div id="edit">
    <h1>Edition du profil</h1>
    <NavBar />
    <ProfileM />
  </div>
</template>

<script>
import ProfileM from "../components/ProfileM.vue";
import NavBar from "../components/NavBar.vue";

export default {
  // eslint-disable-next-line
  name: "edit",
  components: {
    ProfileM,
    NavBar,
  },
};
</script>
<style>
h1 {
  text-align: center;
}
</style>
