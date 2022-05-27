<template>
  <div id="home">
    <h1>Bienvenue à l'accueil</h1>
    <Navbar />
    <FeedShow id="feed" />
    <PostCreation id="post" />
  </div>
</template>
<script>
import Navbar from "../components/NavBar.vue";
import FeedShow from "../components/FeedShow.vue";
import PostCreation from "../components/FeedShow.vue";

export default {
  // eslint-disable-next-line
  name: "home",
  components: { Navbar, FeedShow, PostCreation },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
}

#feed {
  margin-top: 20%;
}

h1 {
  text-align: center;
}
</style>
